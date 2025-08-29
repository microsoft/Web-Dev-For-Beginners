<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cf15ff7770c5a484349383bb27d1131f",
  "translation_date": "2025-08-29T01:24:22+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "bn"
}
-->
# চ্যাট প্রকল্প

এই চ্যাট প্রকল্পটি দেখায় কীভাবে GitHub Models ব্যবহার করে একটি চ্যাট অ্যাসিস্ট্যান্ট তৈরি করা যায়।

এখানে চূড়ান্ত প্রকল্পটি দেখতে কেমন হবে:

<div>
  <img src="./assets/screenshot.png" alt="চ্যাট অ্যাপ" width="600">
</div>

কিছু প্রেক্ষাপট, জেনারেটিভ AI ব্যবহার করে চ্যাট অ্যাসিস্ট্যান্ট তৈরি করা AI সম্পর্কে শেখার একটি চমৎকার উপায়। এই পাঠে আপনি শিখবেন কীভাবে জেনারেটিভ AI-কে একটি ওয়েব অ্যাপে সংযুক্ত করতে হয়। চলুন শুরু করি।

## জেনারেটিভ AI-তে সংযোগ স্থাপন

ব্যাকএন্ডের জন্য, আমরা GitHub Models ব্যবহার করছি। এটি একটি চমৎকার পরিষেবা যা আপনাকে বিনামূল্যে AI ব্যবহার করতে দেয়। এর প্লেগ্রাউন্ডে যান এবং আপনার পছন্দের ব্যাকএন্ড ভাষার সাথে সম্পর্কিত কোডটি নিন। এটি দেখতে কেমন তা এখানে দেখুন: [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

যেমন বলা হয়েছে, "Code" ট্যাব এবং আপনার পছন্দের রানটাইম নির্বাচন করুন।

<div>
  <img src="./assets/playground-choice.png" alt="playground choice" with="600">
</div>

এই ক্ষেত্রে আমরা Python নির্বাচন করি, যার অর্থ আমরা এই কোডটি বেছে নেব:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    model="openai/gpt-4o-mini",
    temperature=1,
    max_tokens=4096,
    top_p=1
)

print(response.choices[0].message.content)
```

এই কোডটি একটু পরিষ্কার করি যাতে এটি পুনরায় ব্যবহারযোগ্য হয়:

```python
def call_llm(prompt: str, system_message: str):
    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="openai/gpt-4o-mini",
        temperature=1,
        max_tokens=4096,
        top_p=1
    )

    return response.choices[0].message.content
```

এই `call_llm` ফাংশনটি ব্যবহার করে আমরা এখন একটি প্রম্পট এবং একটি সিস্টেম প্রম্পট নিতে পারি এবং ফাংশনটি ফলাফল ফেরত দেয়।

### AI অ্যাসিস্ট্যান্ট কাস্টমাইজ করুন

আপনি যদি AI অ্যাসিস্ট্যান্ট কাস্টমাইজ করতে চান, তাহলে সিস্টেম প্রম্পটটি এভাবে পূরণ করে তার আচরণ নির্ধারণ করতে পারেন:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## এটি একটি ওয়েব API এর মাধ্যমে প্রকাশ করুন

চমৎকার, আমাদের AI অংশটি সম্পন্ন হয়েছে, এখন দেখি কীভাবে এটি একটি ওয়েব API-তে সংযুক্ত করা যায়। ওয়েব API-এর জন্য, আমরা Flask ব্যবহার করছি, তবে যেকোনো ওয়েব ফ্রেমওয়ার্কই ভালো হবে। এর কোডটি এখানে দেখুন:

```python
# api.py
from flask import Flask, request, jsonify
from llm import call_llm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com

@app.route("/", methods=["GET"])
def index():
    return "Welcome to this API. Call POST /hello with 'message': 'my message' as JSON payload"


@app.route("/hello", methods=["POST"])
def hello():
    # get message from request body  { "message": "do this taks for me" }
    data = request.get_json()
    message = data.get("message", "")

    response = call_llm(message, "You are a helpful assistant.")
    return jsonify({
        "response": response
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

এখানে, আমরা একটি Flask API তৈরি করি এবং "/" এবং "/chat" নামে দুটি রুট সংজ্ঞায়িত করি। দ্বিতীয়টি আমাদের ফ্রন্টএন্ডের মাধ্যমে প্রশ্ন পাঠানোর জন্য ব্যবহৃত হয়।

*llm.py* সংযুক্ত করতে আমাদের যা করতে হবে তা হলো:

- `call_llm` ফাংশনটি ইমপোর্ট করুন:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- "/chat" রুট থেকে এটি কল করুন:

   ```python
   @app.route("/hello", methods=["POST"])
   def hello():
      # get message from request body  { "message": "do this taks for me" }
      data = request.get_json()
      message = data.get("message", "")

      response = call_llm(message, "You are a helpful assistant.")
      return jsonify({
         "response": response
      })
   ```

   এখানে আমরা ইনকামিং রিকোয়েস্টটি পার্স করি এবং JSON বডি থেকে `message` প্রপার্টি পুনরুদ্ধার করি। এরপর আমরা এই কল দিয়ে LLM-কে কল করি:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

চমৎকার, এখন আমরা যা দরকার তা সম্পন্ন করেছি।

### Cors কনফিগার করুন

আমাদের উল্লেখ করা উচিত যে আমরা Cors, অর্থাৎ ক্রস-অরিজিন রিসোর্স শেয়ারিং সেট আপ করেছি। এর মানে হলো আমাদের ব্যাকএন্ড এবং ফ্রন্টএন্ড আলাদা পোর্টে চলবে, তাই আমাদের ব্যাকএন্ডে ফ্রন্টএন্ড কল করার অনুমতি দিতে হবে। *api.py* ফাইলের একটি কোড অংশ এটি সেট আপ করে:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

এখন এটি "*" অর্থাৎ সব অরিজিনের জন্য সেট করা হয়েছে, যা কিছুটা অনিরাপদ। প্রোডাকশনে যাওয়ার সময় এটি সীমাবদ্ধ করা উচিত।

## আপনার প্রকল্প চালান

ঠিক আছে, আমাদের *llm.py* এবং *api.py* আছে, কীভাবে আমরা এটি ব্যাকএন্ডের সাথে কাজ করব? দুটি জিনিস করতে হবে:

- ডিপেনডেন্সি ইনস্টল করুন:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- API চালু করুন:

   ```sh
   python api.py
   ```

   যদি আপনি Codespaces-এ থাকেন, তাহলে আপনাকে এডিটরের নিচের অংশে Ports-এ যেতে হবে, সেখানে রাইট-ক্লিক করে "Port Visibility" নির্বাচন করতে হবে এবং "Public" নির্বাচন করতে হবে।

### ফ্রন্টএন্ডে কাজ করুন

এখন আমাদের API চালু এবং চলমান, চলুন এর জন্য একটি ফ্রন্টএন্ড তৈরি করি। একটি ন্যূনতম ফ্রন্টএন্ড যা আমরা ধাপে ধাপে উন্নত করব। একটি *frontend* ফোল্ডারে নিম্নলিখিত তৈরি করুন:

```text
backend/
frontend/
index.html
app.js
styles.css
```

চলুন শুরু করি **index.html** দিয়ে:

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <form>
        <textarea id="messages"></textarea>
        <input id="input" type="text" />
        <button type="submit" id="sendBtn">Send</button>  
      </form>  
      <script src="app.js" />
    </body>
</html>    
```

উপরেরটি একটি চ্যাট উইন্ডো সমর্থন করার জন্য প্রয়োজনীয় ন্যূনতম জিনিস, কারণ এটি একটি textarea নিয়ে গঠিত যেখানে বার্তাগুলি রেন্ডার করা হবে, একটি ইনপুট যেখানে বার্তা টাইপ করা হবে এবং একটি বোতাম যা আপনার বার্তাটি ব্যাকএন্ডে পাঠাবে। চলুন *app.js* এ JavaScript দেখি।

**app.js**

```js
// app.js

(function(){
  // 1. set up elements  
  const messages = document.getElementById("messages");
  const form = document.getElementById("form");
  const input = document.getElementById("input");

  const BASE_URL = "change this";
  const API_ENDPOINT = `${BASE_URL}/hello`;

  // 2. create a function that talks to our backend
  async function callApi(text) {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });
    let json = await response.json();
    return json.response;
  }

  // 3. add response to our textarea
  function appendMessage(text, role) {
    const el = document.createElement("div");
    el.className = `message ${role}`;
    el.innerHTML = text;
    messages.appendChild(el);
  }

  // 4. listen to submit events
  form.addEventListener("submit", async(e) => {
    e.preventDefault();
   // someone clicked the button in the form
   
   // get input
   const text = input.value.trim();

   appendMessage(text, "user")

   // reset it
   input.value = '';

   const reply = await callApi(text);

   // add to messages
   appendMessage(reply, "assistant");

  })
})();
```

চলুন কোডটি বিভাগ অনুযায়ী দেখি:

- ১) এখানে আমরা আমাদের সমস্ত এলিমেন্টের রেফারেন্স পাই যা আমরা পরে কোডে উল্লেখ করব।
- ২) এই অংশে, আমরা একটি ফাংশন তৈরি করি যা বিল্ট-ইন `fetch` মেথড ব্যবহার করে আমাদের ব্যাকএন্ডে কল করে।
- ৩) `appendMessage` ব্যবহারকারীর টাইপ করা বার্তা এবং রেসপন্স যোগ করতে সাহায্য করে।
- ৪) এখানে আমরা submit ইভেন্টটি শুনি এবং ইনপুট ফিল্ডটি পড়ি, ব্যবহারকারীর বার্তাটি textarea-তে রাখি, API-তে কল করি এবং রেসপন্সটি textarea-তে রেন্ডার করি।

চলুন স্টাইলিং দেখি, এখানে আপনি আপনার ইচ্ছামতো ডিজাইন করতে পারেন, তবে কিছু পরামর্শ এখানে দেওয়া হলো:

**styles.css**

```
.message {
    background: #222;
    box-shadow: 0 0 0 10px orange;
    padding: 10px:
    margin: 5px;
}

.message.user {
    background: blue;
}

.message.assistant {
    background: grey;
} 
```

এই তিনটি ক্লাসের মাধ্যমে আপনি বার্তাগুলিকে স্টাইল করতে পারেন, এটি অ্যাসিস্ট্যান্ট বা ব্যবহারকারীর কাছ থেকে এসেছে কিনা তার উপর নির্ভর করে। অনুপ্রাণিত হতে চাইলে `solution/frontend/styles.css` ফোল্ডারটি দেখুন।

### Base Url পরিবর্তন করুন

এখানে একটি জিনিস আমরা সেট করিনি, সেটি হলো `BASE_URL`, এটি আপনার ব্যাকএন্ড শুরু না হওয়া পর্যন্ত জানা যায় না। এটি সেট করতে:

- যদি আপনি API লোকালভাবে চালান, এটি কিছুটা এরকম হওয়া উচিত: `http://localhost:5000`।
- যদি Codespaces-এ চালান, এটি কিছুটা এরকম দেখাবে: "[name]app.github.dev"।

## অ্যাসাইনমেন্ট

আপনার নিজস্ব *project* ফোল্ডার তৈরি করুন যার কন্টেন্ট এরকম:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    api.py
    llm.py
```

উপরের নির্দেশনা থেকে কন্টেন্ট কপি করুন, তবে আপনার ইচ্ছামতো কাস্টমাইজ করতে পারেন।

## সমাধান

[Solution](./solution/README.md)

## বোনাস

AI অ্যাসিস্ট্যান্টের ব্যক্তিত্ব পরিবর্তন করার চেষ্টা করুন। যখন আপনি *api.py*-তে `call_llm` কল করেন, তখন দ্বিতীয় আর্গুমেন্টটি আপনার ইচ্ছামতো পরিবর্তন করতে পারেন, যেমন:

```python
call_llm(message, "You are Captain Picard")
```

*index.html* এবং *styles.css*-এ পরিবর্তন করে CSS এবং টেক্সটও আপনার ইচ্ছামতো পরিবর্তন করুন।

## সারসংক্ষেপ

চমৎকার, আপনি শূন্য থেকে শিখেছেন কীভাবে AI ব্যবহার করে একটি ব্যক্তিগত অ্যাসিস্ট্যান্ট তৈরি করতে হয়। আমরা এটি করেছি GitHub Models, Python ব্যাকএন্ড এবং HTML, CSS এবং JavaScript ফ্রন্টএন্ড ব্যবহার করে।

## Codespaces দিয়ে সেট আপ করুন

- নেভিগেট করুন: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- টেমপ্লেট থেকে তৈরি করুন (নিশ্চিত করুন আপনি GitHub-এ লগ ইন করেছেন) উপরের ডানদিকে:

    ![টেমপ্লেট থেকে তৈরি করুন](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.bn.png)

- আপনার রিপোতে গেলে, একটি Codespace তৈরি করুন:

    ![Codespace তৈরি করুন](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.bn.png)

    এটি একটি পরিবেশ শুরু করবে যেখানে আপনি এখন কাজ করতে পারবেন।

---

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসম্ভব সঠিকতা নিশ্চিত করার চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। মূল ভাষায় থাকা নথিটিকে প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য, পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যা হলে আমরা তার জন্য দায়ী থাকব না।