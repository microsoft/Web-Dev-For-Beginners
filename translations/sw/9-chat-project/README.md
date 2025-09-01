<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "002304ffe0059e55b33e2ee5283788ad",
  "translation_date": "2025-09-01T15:36:06+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Gumzo

Mradi huu wa gumzo unaonyesha jinsi ya kujenga Msaidizi wa Gumzo kwa kutumia GitHub Models.

Hivi ndivyo mradi uliokamilika unavyoonekana:

<div>
  <img src="./assets/screenshot.png" alt="App ya Gumzo" width="600">
</div>

Kwa muktadha, kujenga wasaidizi wa gumzo kwa kutumia AI ya kizazi ni njia nzuri ya kuanza kujifunza kuhusu AI. Kile utakachojifunza ni jinsi ya kuunganisha AI ya kizazi kwenye programu ya wavuti katika somo hili, hebu tuanze.

## Kuunganisha na AI ya kizazi

Kwa upande wa backend, tunatumia GitHub Models. Ni huduma nzuri inayokuwezesha kutumia AI bila malipo. Nenda kwenye uwanja wake wa majaribio na uchukue msimbo unaolingana na lugha ya backend unayochagua. Hivi ndivyo inavyoonekana kwenye [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

Kama tulivyosema, chagua kichupo cha "Code" na runtime unayochagua.

<div>
  <img src="./assets/playground-choice.png" alt="uchaguzi wa uwanja wa majaribio" with="600">
</div>

### Kutumia Python

Katika hali hii tunachagua Python, ambayo itamaanisha tunachukua msimbo huu:

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

Hebu tusafishe msimbo huu kidogo ili uweze kutumika tena:

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

Kwa kutumia kazi hii `call_llm` sasa tunaweza kuchukua maelekezo na maelekezo ya mfumo, na kazi hiyo itarudisha matokeo.

### Kubinafsisha Msaidizi wa AI

Ikiwa unataka kubinafsisha msaidizi wa AI unaweza kubainisha jinsi unavyotaka awe kwa kujaza maelekezo ya mfumo kama ifuatavyo:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Kuufichua kupitia Web API

Nzuri, tumemaliza sehemu ya AI, hebu tuone jinsi tunavyoweza kuunganisha hiyo kwenye Web API. Kwa Web API, tunachagua kutumia Flask, lakini mfumo wowote wa wavuti unafaa. Hebu tuone msimbo wake:

### Kutumia Python

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

Hapa, tunaunda API ya flask na kufafanua njia ya msingi "/" na "/chat". Ya mwisho inakusudiwa kutumiwa na frontend yetu kupitisha maswali kwake.

Kuunganisha *llm.py* tunachohitaji kufanya ni:

- Kuingiza kazi ya `call_llm`:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Kuiita kutoka njia ya "/chat":

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

   Hapa tunachambua ombi linalokuja ili kupata mali ya `message` kutoka kwa mwili wa JSON. Baadaye tunaita LLM kwa simu hii:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Nzuri, sasa tumemaliza kile tunachohitaji.

## Kuseti Cors

Tunapaswa kutaja kwamba tunaseti kitu kama CORS, kushiriki rasilimali za asili tofauti. Hii inamaanisha kwamba kwa sababu backend yetu na frontend zitaendesha kwenye bandari tofauti, tunahitaji kuruhusu frontend kupiga simu kwenye backend.

### Kutumia Python

Kuna kipande cha msimbo katika *api.py* kinachoseti hili:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Kwa sasa kimesetiwa kuruhusu "*" ambayo ni asili zote, na hiyo si salama sana, tunapaswa kuibana mara tu tunapofika kwenye uzalishaji.

## Endesha mradi wako

Kuendesha mradi wako, unahitaji kuanzisha backend yako kwanza na kisha frontend yako.

### Kutumia Python

Sawa, kwa hivyo tuna *llm.py* na *api.py*, tunawezaje kufanya hii ifanye kazi na backend? Naam, kuna mambo mawili tunahitaji kufanya:

- Sakinisha utegemezi:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Anzisha API

   ```sh
   python api.py
   ```

   Ikiwa uko kwenye Codespaces unahitaji kwenda kwenye Ports katika sehemu ya chini ya mhariri, bofya kulia juu yake na bonyeza "Port Visibility" na uchague "Public".

### Fanya kazi kwenye frontend

Sasa kwa kuwa tuna API inayofanya kazi, hebu tuunde frontend kwa ajili ya hii. Frontend ya kiwango cha chini kabisa ambayo tutaboresha hatua kwa hatua. Katika folda ya *frontend*, unda yafuatayo:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Hebu tuanze na **index.html**:

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

Hii hapo juu ni kiwango cha chini kabisa unachohitaji ili kusaidia dirisha la gumzo, kwani linajumuisha eneo la maandishi ambapo ujumbe utaonyeshwa, ingizo la mahali pa kuandika ujumbe na kitufe cha kutuma ujumbe wako kwa backend. Hebu tuangalie JavaScript inayofuata katika *app.js*

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

Hebu tuende kupitia msimbo kwa kila sehemu:

- 1) Hapa tunapata rejeleo kwa vipengele vyote ambavyo tutarejelea baadaye katika msimbo
- 2) Katika sehemu hii, tunaunda kazi inayotumia njia ya kujengwa ya `fetch` inayopiga simu backend yetu
- 3) `appendMessage` husaidia kuongeza majibu pamoja na kile unachotype kama mtumiaji.
- 4) Hapa tunasikiliza tukio la submit na tunasoma uwanja wa ingizo, kuweka ujumbe wa mtumiaji katika eneo la maandishi, kupiga API, na kuonyesha jibu hilo katika eneo la maandishi.

Hebu tuangalie mitindo inayofuata, hapa ndipo unaweza kwenda mbali na kuifanya ionekane unavyotaka, lakini hapa kuna mapendekezo:

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

Kwa darasa hizi tatu, utapanga ujumbe tofauti kulingana na mahali zinapotoka, msaidizi au wewe kama mtumiaji. Ikiwa unataka kupata msukumo, angalia folda ya `solution/frontend/styles.css`.

### Badilisha Base Url

Kuna jambo moja hapa hatukuseti, nalo ni `BASE_URL`, hili halijulikani hadi backend yako ianze. Ili kuiseti:

- Ikiwa unaendesha API kwa ndani, inapaswa kusetiwa kwa kitu kama `http://localhost:5000`.
- Ikiwa unaendesha kwenye Codespaces, inapaswa kuonekana kama "[name]app.github.dev".

## Kazi

Unda folda yako mwenyewe *project* yenye maudhui kama ifuatavyo:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

Nakili maudhui kutoka kwa yale yaliyoelekezwa hapo juu lakini jisikie huru kubinafsisha unavyopenda.

## Suluhisho

[Solution](./solution/README.md)

## Ziada

Jaribu kubadilisha tabia ya msaidizi wa AI.

### Kwa Python

Unapopiga `call_llm` katika *api.py* unaweza kubadilisha hoja ya pili kwa unachotaka, kwa mfano:

```python
call_llm(message, "You are Captain Picard")
```

### Frontend

Badilisha pia CSS na maandishi unavyopenda, kwa hivyo fanya mabadiliko katika *index.html* na *styles.css*.

## Muhtasari

Nzuri, umejifunza kutoka mwanzo jinsi ya kuunda msaidizi wa kibinafsi kwa kutumia AI. Tumefanya hivyo kwa kutumia GitHub Models, backend katika Python na frontend katika HTML, CSS na JavaScript.

## Kuseti na Codespaces

- Tembelea: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Unda kutoka kwa kiolezo (hakikisha umeingia kwenye GitHub) kwenye kona ya juu kulia:

    ![Unda kutoka kwa kiolezo](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.sw.png)

- Mara tu ukiwa kwenye repo yako, unda Codespace:

    ![Unda codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.sw.png)

    Hii inapaswa kuanzisha mazingira ambayo sasa unaweza kufanya kazi nayo.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya kiasili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.