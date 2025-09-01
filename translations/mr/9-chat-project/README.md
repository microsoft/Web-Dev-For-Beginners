<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "11cf36165c243947b6cd85b88cf6faa6",
  "translation_date": "2025-09-01T16:52:10+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "mr"
}
-->
# चॅट प्रोजेक्ट

हा चॅट प्रोजेक्ट GitHub Models वापरून चॅट असिस्टंट कसा तयार करायचा हे दाखवतो.

तयार प्रोजेक्ट कसा दिसतो ते येथे आहे:

![चॅट अॅप](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.mr.png)

थोडक्यात, जनरेटिव AI वापरून चॅट असिस्टंट तयार करणे हे AI शिकण्याची उत्तम सुरुवात आहे. या धड्यात तुम्ही जनरेटिव AI वेब अॅपमध्ये कसे समाकलित करायचे ते शिकाल. चला सुरुवात करूया.

## जनरेटिव AI शी कनेक्ट करणे

बॅकएंडसाठी, आम्ही GitHub Models वापरत आहोत. ही एक उत्कृष्ट सेवा आहे जी तुम्हाला AI विनामूल्य वापरण्याची परवानगी देते. त्याच्या प्लेग्राउंडवर जा आणि तुमच्या निवडलेल्या बॅकएंड भाषेशी संबंधित कोड मिळवा. GitHub Models Playground येथे कसे दिसते ते येथे आहे: [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

![GitHub Models AI Playground](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.mr.png)

जसे सांगितले, "Code" टॅब आणि तुमचा निवडलेला रनटाइम निवडा.

![Playground choice](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.mr.png)

### Python वापरणे

या प्रकरणात आम्ही Python निवडतो, ज्याचा अर्थ आम्ही हा कोड निवडतो:

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

आता हा कोड थोडा स्वच्छ करूया जेणेकरून तो पुन्हा वापरता येईल:

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

या `call_llm` फंक्शनसह, आम्ही आता एक प्रॉम्प्ट आणि एक सिस्टम प्रॉम्प्ट घेऊ शकतो आणि फंक्शन परिणाम परत करते.

### AI असिस्टंट सानुकूलित करा

जर तुम्हाला AI असिस्टंट सानुकूलित करायचा असेल तर तुम्ही सिस्टम प्रॉम्प्ट भरून त्याचे वर्तन कसे असावे ते निर्दिष्ट करू शकता:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## वेब API द्वारे एक्सपोज करा

छान, आपला AI भाग पूर्ण झाला आहे, आता आपण वेब API मध्ये ते कसे समाकलित करू शकतो ते पाहूया. वेब API साठी, आम्ही Flask वापरण्याचा निर्णय घेतला आहे, परंतु कोणतेही वेब फ्रेमवर्क चांगले असावे. त्यासाठी कोड पाहूया:

### Python वापरणे

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

येथे, आम्ही एक Flask API तयार करतो आणि "/" आणि "/chat" या डिफॉल्ट रूट्स परिभाषित करतो. दुसरा रूट आमच्या फ्रंटएंडद्वारे प्रश्न पाठवण्यासाठी वापरला जातो.

*llm.py* समाकलित करण्यासाठी आपल्याला हे करणे आवश्यक आहे:

- `call_llm` फंक्शन आयात करा:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- "/chat" रूटमधून कॉल करा:

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

   येथे आम्ही येणाऱ्या विनंतीचे JSON बॉडीमधील `message` प्रॉपर्टी मिळवण्यासाठी पार्सिंग करतो. त्यानंतर आम्ही LLM ला कॉल करतो:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

छान, आता आपण आवश्यक ते केले आहे.

## Cors कॉन्फिगर करा

आपण असे सांगावे की आपण Cors सेट केले आहे, म्हणजे क्रॉस-ओरिजिन रिसोर्स शेअरिंग. याचा अर्थ असा की आमचा बॅकएंड आणि फ्रंटएंड वेगवेगळ्या पोर्टवर चालणार असल्यामुळे, आम्हाला फ्रंटएंडला बॅकएंडमध्ये कॉल करण्याची परवानगी द्यावी लागेल.

### Python वापरणे

*api.py* मध्ये Cors सेट करण्यासाठी कोड आहे:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

सध्या हे "*" म्हणजे सर्व ओरिजिनसाठी सेट केले आहे, जे थोडे असुरक्षित आहे. उत्पादनात जाताना आपण ते मर्यादित करावे.

## तुमचा प्रोजेक्ट चालवा

तुमचा प्रोजेक्ट चालवण्यासाठी, तुम्हाला प्रथम तुमचा बॅकएंड आणि नंतर तुमचा फ्रंटएंड सुरू करावा लागेल.

### Python वापरणे

ठीक आहे, आपल्याकडे *llm.py* आणि *api.py* आहे, बॅकएंडसह हे कसे कार्य करावे? दोन गोष्टी कराव्या लागतील:

- डिपेंडन्सी इंस्टॉल करा:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- API सुरू करा:

   ```sh
   python api.py
   ```

   जर तुम्ही Codespaces मध्ये असाल तर तुम्हाला एडिटरच्या खालच्या भागात पोर्ट्समध्ये जावे लागेल, त्यावर राईट-क्लिक करा आणि "Port Visibility" वर क्लिक करा आणि "Public" निवडा.

### फ्रंटएंडवर काम करा

आता आपल्याकडे API चालू आहे, चला यासाठी फ्रंटएंड तयार करूया. एक साधा फ्रंटएंड जो आपण हळूहळू सुधारू. *frontend* फोल्डरमध्ये खालील तयार करा:

```text
backend/
frontend/
index.html
app.js
styles.css
```

चला **index.html** पासून सुरुवात करूया:

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

वरील हे चॅट विंडोला समर्थन देण्यासाठी आवश्यक किमान आहे, कारण यात संदेश रेंडर करण्यासाठी एक टेक्स्टएरिया, संदेश टाइप करण्यासाठी एक इनपुट आणि संदेश बॅकएंडला पाठवण्यासाठी एक बटण आहे. पुढे *app.js* मधील JavaScript पाहूया.

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

कोडचे विभागवार स्पष्टीकरण:

- 1) येथे आम्ही आमच्या सर्व घटकांचा संदर्भ घेतो ज्याचा आम्ही नंतर कोडमध्ये उल्लेख करू.
- 2) या विभागात, आम्ही एक फंक्शन तयार करतो जे बिल्ट-इन `fetch` पद्धत वापरते जी आमच्या बॅकएंडला कॉल करते.
- 3) `appendMessage` वापरकर्त्याने टाइप केलेले तसेच असिस्टंटचे प्रतिसाद जोडण्यास मदत करते.
- 4) येथे आम्ही सबमिट इव्हेंट ऐकतो आणि इनपुट फील्ड वाचतो, वापरकर्त्याचा संदेश टेक्स्टएरियामध्ये ठेवतो, API कॉल करतो आणि टेक्स्टएरियामध्ये प्रतिसाद रेंडर करतो.

आता स्टाइलिंग पाहूया, येथे तुम्ही तुमच्या आवडीनुसार डिझाइन करू शकता, परंतु काही सूचना येथे आहेत:

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

या तीन क्लासेससह, तुम्ही संदेश वेगळ्या प्रकारे स्टाइल करू शकता, ते असिस्टंटकडून आले आहेत की वापरकर्त्याकडून. प्रेरणा घेण्यासाठी, `solution/frontend/styles.css` फोल्डर पहा.

### बेस URL बदला

येथे एक गोष्ट सेट केली नाही ती म्हणजे `BASE_URL`, जी तुमचा बॅकएंड सुरू होईपर्यंत माहित नाही. ते सेट करण्यासाठी:

- जर तुम्ही API स्थानिकपणे चालवत असाल, तर ते `http://localhost:5000` सारखे असावे.
- जर Codespaces मध्ये चालवत असाल, तर ते "[name]app.github.dev" सारखे दिसेल.

## असाइनमेंट

तुमचा स्वतःचा *project* फोल्डर तयार करा ज्यामध्ये खालीलप्रमाणे सामग्री असेल:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

वरील सूचनांमधून सामग्री कॉपी करा, परंतु तुमच्या आवडीनुसार सानुकूलित करा.

## सोल्यूशन

[सोल्यूशन](./solution/README.md)

## बोनस

AI असिस्टंटचे व्यक्तिमत्व बदलून पहा.

### Python साठी

जेव्हा तुम्ही *api.py* मध्ये `call_llm` कॉल करता, तेव्हा तुम्ही दुसरा आर्ग्युमेंट तुमच्या आवडीनुसार बदलू शकता, उदाहरणार्थ:

```python
call_llm(message, "You are Captain Picard")
```

### फ्रंटएंड

CSS आणि टेक्स्ट देखील तुमच्या आवडीनुसार बदला, म्हणजे *index.html* आणि *styles.css* मध्ये बदल करा.

## सारांश

छान, तुम्ही AI वापरून वैयक्तिक असिस्टंट कसा तयार करायचा ते शून्यापासून शिकले. आम्ही GitHub Models, Python मध्ये बॅकएंड आणि HTML, CSS आणि JavaScript मध्ये फ्रंटएंड वापरून हे केले.

## Codespaces सह सेट अप करा

- येथे जा: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- टेम्पलेटमधून तयार करा (GitHub मध्ये लॉग इन असल्याची खात्री करा) वरच्या उजव्या कोपऱ्यात:

    ![टेम्पलेटमधून तयार करा](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.mr.png)

- एकदा तुमच्या रेपोमध्ये, Codespace तयार करा:

    ![Codespace तयार करा](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.mr.png)

    यामुळे तुम्ही आता काम करू शकता असे वातावरण सुरू होईल.

---

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी कृपया लक्षात ठेवा की स्वयंचलित भाषांतरांमध्ये त्रुटी किंवा अचूकतेचा अभाव असू शकतो. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानला जावा. महत्त्वाच्या माहितीसाठी व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून निर्माण होणाऱ्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.