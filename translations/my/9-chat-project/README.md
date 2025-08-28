<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cf15ff7770c5a484349383bb27d1131f",
  "translation_date": "2025-08-28T18:55:31+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "my"
}
-->
# Chat project

ဒီ chat project က GitHub Models ကို အသုံးပြုပြီး Chat Assistant တစ်ခုကို ဘယ်လိုတည်ဆောက်ရမလဲဆိုတာ ပြသပေးပါတယ်။

အဆုံးသတ်ပြီးတဲ့ project ရဲ့ ရုပ်ပုံက ဒီလိုပဲဖြစ်ပါတယ်:

<div>
  <img src="./assets/screenshot.png" alt="Chat app" width="600">
</div>

အနည်းငယ် context ပေးရမယ်ဆိုရင်၊ generative AI ကို အသုံးပြုပြီး Chat assistants တစ်ခုကို တည်ဆောက်တာက AI ကို စတင်လေ့လာဖို့အတွက် အကောင်းဆုံးနည်းလမ်းတစ်ခုဖြစ်ပါတယ်။ ဒီသင်ခန်းစာတစ်ခုလုံးအတွင်းမှာ generative AI ကို web app တစ်ခုထဲမှာ ပေါင်းစပ်အသုံးပြုဖို့ကို သင်လေ့လာရမှာဖြစ်ပါတယ်။ စတင်လိုက်ကြစို့။

## Generative AI ကို ချိတ်ဆက်ခြင်း

Backend အတွက် GitHub Models ကို အသုံးပြုထားပါတယ်။ AI ကို အခမဲ့အသုံးပြုနိုင်တဲ့ အကောင်းဆုံးဝန်ဆောင်မှုတစ်ခုဖြစ်ပါတယ်။ သူ့ရဲ့ playground ကို သွားပြီး သင့်ရဲ့ backend language ရွေးချယ်မှုနဲ့ ကိုက်ညီတဲ့ code ကို ရယူပါ။ GitHub Models Playground မှာ ဒီလိုပုံစံနဲ့ တွေ့ရပါမယ် [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

အဆိုပါ "Code" tab ကို ရွေးချယ်ပြီး သင့်ရဲ့ runtime ကို ရွေးပါ။

<div>
  <img src="./assets/playground-choice.png" alt="playground choice" with="600">
</div>

ဒီအခါမှာ Python ကို ရွေးချယ်လိုက်မယ်ဆိုရင် ဒီ code ကို ရွေးချယ်ရပါမယ်:

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

ဒီ code ကို အသုံးပြုနိုင်ဖို့အတွက် နည်းနည်းသန့်စင်လိုက်ရအောင်:

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

ဒီ `call_llm` function နဲ့ prompt တစ်ခုနဲ့ system prompt တစ်ခုကို ထည့်ပြီး function က အဖြေကို ပြန်ပေးပါမယ်။

### AI Assistant ကို Customize လုပ်ခြင်း

AI assistant ကို သင့်လိုအပ်ချက်အတိုင်း ပြင်ဆင်ချင်ရင် system prompt ကို ဒီလိုပုံစံနဲ့ ပြည့်စွက်နိုင်ပါတယ်:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Web API မှတစ်ဆင့် ထုတ်ဖော်ခြင်း

အကောင်းပါပဲ၊ AI အပိုင်းကို ပြီးမြောက်သွားပြီ၊ အခု Web API ထဲမှာ ပေါင်းစပ်ပေးရအောင်။ Web API အတွက် Flask ကို ရွေးချယ်ထားပါတယ်၊ ဒါပေမယ့် ဘယ် web framework မဆို အသုံးပြုနိုင်ပါတယ်။ ဒီ code ကို ကြည့်လိုက်ရအောင်:

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

ဒီမှာ Flask API တစ်ခုကို ဖန်တီးပြီး "/" နဲ့ "/chat" ဆိုတဲ့ default route တွေကို သတ်မှတ်ထားပါတယ်။ "/chat" က frontend ကနေ backend ကို မေးခွန်းတွေ ပေးပို့ဖို့အတွက် ရည်ရွယ်ထားတာပါ။

*llm.py* ကို ပေါင်းစပ်ဖို့ ဒီလိုလုပ်ရပါမယ်:

- `call_llm` function ကို Import လုပ်ပါ:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- "/chat" route မှာ function ကို ခေါ်ပါ:

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

   ဒီမှာ request ကို parse လုပ်ပြီး JSON body ထဲက `message` property ကို ရယူပါတယ်။ ထို့နောက် LLM ကို ဒီလိုခေါ်ပါတယ်:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

အကောင်းပါပဲ၊ လိုအပ်တာတွေ ပြီးမြောက်သွားပါပြီ။

### Cors ကို Configure လုပ်ခြင်း

Backend နဲ့ frontend က အခြားအခြား port တွေမှာ run ဖြစ်နေတဲ့အတွက် frontend က backend ကို ခေါ်နိုင်ဖို့ CORS (cross-origin resource sharing) ကို သတ်မှတ်ပေးရပါမယ်။ *api.py* ထဲမှာ ဒီလို code ရှိပါတယ်:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

အခု "*" ဆိုပြီး အားလုံးကို ခွင့်ပြုထားပါတယ်၊ ဒါက production မှာ သုံးရင် အန္တရာယ်ရှိနိုင်ပါတယ်၊ ထို့ကြောင့် production သို့ ရောက်တဲ့အခါမှာ restriction ပေးဖို့လိုပါတယ်။

## Project ကို Run လုပ်ခြင်း

အခု *llm.py* နဲ့ *api.py* ရှိပြီ၊ backend နဲ့အတူ run လုပ်ဖို့ ဘယ်လိုလုပ်ရမလဲ? အခုလိုလုပ်ရပါမယ်:

- Dependencies တွေ Install လုပ်ပါ:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- API ကို Start လုပ်ပါ:

   ```sh
   python api.py
   ```

   Codespaces မှာ run လုပ်ရင် editor ရဲ့ အောက်ပိုင်းမှာ Ports ကို သွားပြီး right-click လုပ်ပါ၊ "Port Visibility" ကို click လုပ်ပြီး "Public" ကို ရွေးပါ။

### Frontend အပေါ်မှာ အလုပ်လုပ်ခြင်း

API ကို run လုပ်ပြီးပြီဆိုရင် frontend တစ်ခုကို ဖန်တီးရပါမယ်။ အနည်းဆုံး frontend ကို စတင်ပြီး အဆင့်ဆင့် တိုးတက်အောင်လုပ်ရပါမယ်။ *frontend* folder ထဲမှာ ဒီလိုဖိုင်တွေ ဖန်တီးပါ:

```text
backend/
frontend/
index.html
app.js
styles.css
```

**index.html** ကို စတင်ကြည့်လိုက်ရအောင်:

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

အထက်မှာ chat window ကို support လုပ်ဖို့အတွက် အနည်းဆုံးလိုအပ်တဲ့အရာတွေပါ။ textarea တစ်ခုမှာ message တွေကို ပြသပေးပြီး၊ input တစ်ခုမှာ message ကို ရိုက်ထည့်နိုင်ပါတယ်၊ button တစ်ခုက message ကို backend ကို ပေးပို့ဖို့အတွက် အသုံးပြုပါတယ်။ *app.js* ထဲမှာ JavaScript ကို ကြည့်လိုက်ရအောင်:

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

Code ကို အပိုင်းလိုက် ရှင်းပြလိုက်ရအောင်:

- 1) Element တွေကို reference လုပ်ပြီး နောက် code မှာ အသုံးပြုဖို့အတွက် ရယူထားပါတယ်။
- 2) Backend ကို ခေါ်ဖို့ built-in `fetch` method ကို အသုံးပြုတဲ့ function တစ်ခုကို ဖန်တီးထားပါတယ်။
- 3) `appendMessage` က user ရဲ့ message နဲ့ assistant ရဲ့ response ကို textarea ထဲမှာ ထည့်ပေးပါတယ်။
- 4) Submit event ကို နားထောင်ပြီး input field ကို ဖတ်ယူပြီး၊ user ရဲ့ message ကို textarea ထဲမှာ ထည့်ပေးပြီး API ကို ခေါ်ပြီး response ကို textarea ထဲမှာ ပြသပေးပါတယ်။

Styling ကို ကြည့်လိုက်ရအောင်၊ ဒီမှာ သင့်စိတ်ကြိုက် ပြင်ဆင်နိုင်ပါတယ်၊ ဒါပေမယ့် အောက်ပါအတိုင်း အကြံပေးလိုက်ပါတယ်:

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

ဒီ three classes တွေက message တွေကို assistant ကနေလာတာလား၊ user ကနေလာတာလားဆိုတာကို ခွဲခြားပြီး style ပေးပါတယ်။ အခြား design အတွက် `solution/frontend/styles.css` folder ကို ကြည့်ပါ။

### Base Url ကို ပြောင်းလဲခြင်း

ဒီမှာ `BASE_URL` ကို မသတ်မှတ်ထားသေးပါဘူး၊ backend ကို start လုပ်မှ သိနိုင်ပါတယ်။ သတ်မှတ်ဖို့:

- API ကို locally run လုပ်ရင် `http://localhost:5000` လို့ သတ်မှတ်ပါ။
- Codespaces မှာ run လုပ်ရင် "[name]app.github.dev" လို့ ဖြစ်နိုင်ပါတယ်။

## Assignment

*project* folder ကို ဖန်တီးပြီး အောက်ပါအတိုင်း content ထည့်ပါ:

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

အထက်မှာ ပြောထားတဲ့အတိုင်း content ကို copy လုပ်ပြီး သင့်စိတ်ကြိုက် ပြင်ဆင်နိုင်ပါတယ်။

## Solution

[Solution](./solution/README.md)

## Bonus

AI assistant ရဲ့ personality ကို ပြောင်းလဲကြည့်ပါ။ *api.py* ထဲမှာ `call_llm` ကို ခေါ်တဲ့အခါမှာ ဒုတိယ argument ကို သင့်လိုအပ်ချက်အတိုင်း ပြောင်းလဲနိုင်ပါတယ်၊ ဥပမာ:

```python
call_llm(message, "You are Captain Picard")
```

CSS နဲ့ text ကိုလည်း သင့်စိတ်ကြိုက် ပြောင်းလဲနိုင်ပါတယ်၊ *index.html* နဲ့ *styles.css* ထဲမှာ ပြင်ဆင်ပါ။

## Summary

အကောင်းပါပဲ၊ AI ကို အသုံးပြုပြီး personal assistant တစ်ခုကို ဘယ်လိုတည်ဆောက်ရမလဲဆိုတာ အခြေခံကနေ သင်ယူနိုင်ခဲ့ပါပြီ။ GitHub Models ကို အသုံးပြုပြီး Python backend နဲ့ HTML, CSS, JavaScript frontend ကို အသုံးပြုပြီး တည်ဆောက်ခဲ့ပါတယ်။

## Set up with Codespaces

- သွားပါ: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Template မှာ ဖန်တီးပါ (GitHub မှာ login လုပ်ထားတာ သေချာပါစေ) အပေါ်ညာဘက်မှာ:

    ![Create from template](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.my.png)

- သင့် repo ထဲမှာ Codespace တစ်ခု ဖန်တီးပါ:

    ![Create codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.my.png)

    ဒီဟာ environment တစ်ခုကို စတင်ပေးပါမယ်၊ အခု သင့်အနေနဲ့ အလုပ်လုပ်နိုင်ပါပြီ။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။