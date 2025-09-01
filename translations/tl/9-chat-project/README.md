<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "11cf36165c243947b6cd85b88cf6faa6",
  "translation_date": "2025-09-01T16:59:36+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "tl"
}
-->
# Chat project

Ang proyektong ito ay nagpapakita kung paano bumuo ng Chat Assistant gamit ang GitHub Models.

Ganito ang itsura ng natapos na proyekto:

![Chat app](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.tl.png)

Kaunting konteksto, ang paggawa ng Chat assistants gamit ang generative AI ay isang mahusay na paraan upang magsimula sa pag-aaral tungkol sa AI. Ang matututunan mo ay kung paano i-integrate ang generative AI sa isang web app sa buong aralin na ito, simulan na natin.

## Pagkonekta sa generative AI

Para sa backend, ginagamit natin ang GitHub Models. Isa itong mahusay na serbisyo na nagbibigay-daan sa iyo na gumamit ng AI nang libre. Pumunta sa playground nito at kunin ang code na tumutugma sa napili mong backend na wika. Ganito ang itsura nito sa [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

![GitHub Models AI Playground](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.tl.png)

Tulad ng nabanggit, piliin ang tab na "Code" at ang runtime na napili mo.

![Playground choice](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.tl.png)

### Paggamit ng Python

Sa kasong ito, pinili natin ang Python, na nangangahulugan na kukunin natin ang code na ito:

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

Linisin natin ang code na ito nang kaunti upang magamit muli:

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

Sa pamamagitan ng function na `call_llm`, maaari na nating kunin ang isang prompt at isang system prompt, at ang function ay magbabalik ng resulta.

### I-customize ang AI Assistant

Kung nais mong i-customize ang AI assistant, maaari mong tukuyin kung paano mo nais itong kumilos sa pamamagitan ng paglalagay ng system prompt tulad nito:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## I-expose ito sa pamamagitan ng Web API

Mahusay, tapos na natin ang bahagi ng AI, tingnan natin kung paano natin ito ma-integrate sa isang Web API. Para sa Web API, pinili natin ang Flask, ngunit anumang web framework ay maaaring gamitin. Tingnan natin ang code para dito:

### Paggamit ng Python

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

Dito, gumawa tayo ng flask API at nagtakda ng default na ruta "/" at "/chat". Ang huli ay para magamit ng ating frontend upang maipasa ang mga tanong dito.

Upang i-integrate ang *llm.py*, narito ang kailangan nating gawin:

- I-import ang function na `call_llm`:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Tawagin ito mula sa ruta na "/chat":

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

   Dito, ina-parse natin ang papasok na request upang makuha ang property na `message` mula sa JSON body. Pagkatapos, tinatawag natin ang LLM gamit ang tawag na ito:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Mahusay, natapos na natin ang kailangan.

## I-configure ang Cors

Dapat nating banggitin na nag-set up tayo ng isang bagay tulad ng CORS, cross-origin resource sharing. Nangangahulugan ito na dahil ang ating backend at frontend ay tatakbo sa magkaibang ports, kailangan nating payagan ang frontend na tumawag sa backend.

### Paggamit ng Python

Mayroong piraso ng code sa *api.py* na nagse-set up nito:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Sa ngayon, naka-set up ito upang payagan ang "*" na nangangahulugang lahat ng origins, ngunit medyo hindi ito ligtas. Dapat natin itong limitahan kapag nasa production na.

## Patakbuhin ang iyong proyekto

Upang patakbuhin ang iyong proyekto, kailangan mong simulan muna ang iyong backend at pagkatapos ang iyong frontend.

### Paggamit ng Python

Ok, mayroon tayong *llm.py* at *api.py*, paano natin ito mapapagana sa backend? May dalawang bagay na kailangan nating gawin:

- I-install ang dependencies:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Simulan ang API

   ```sh
   python api.py
   ```

   Kung nasa Codespaces ka, kailangan mong pumunta sa Ports sa ibabang bahagi ng editor, i-right-click ito at i-click ang "Port Visibility" at piliin ang "Public".

### Gumawa ng frontend

Ngayon na mayroon na tayong API na tumatakbo, gumawa tayo ng frontend para dito. Isang pinakasimpleng frontend na ating pagagandahin nang paunti-unti. Sa isang *frontend* folder, gumawa ng sumusunod:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Simulan natin sa **index.html**:

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

Ang nasa itaas ay ang pinakasimple na kailangan mo upang suportahan ang isang chat window, dahil binubuo ito ng isang textarea kung saan irerender ang mga mensahe, isang input kung saan magta-type ng mensahe, at isang button para ipadala ang iyong mensahe sa backend. Tingnan natin ang JavaScript sa *app.js*

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

Tingnan natin ang code per section:

- 1) Dito, kinukuha natin ang reference sa lahat ng mga elemento na gagamitin natin sa code.
- 2) Sa seksyong ito, gumawa tayo ng function na gumagamit ng built-in na `fetch` method upang tawagin ang ating backend.
- 3) Ang `appendMessage` ay tumutulong magdagdag ng mga sagot pati na rin ang mga mensahe na tina-type ng user.
- 4) Dito, nakikinig tayo sa submit event at binabasa ang input field, inilalagay ang mensahe ng user sa textarea, tinatawag ang API, at irerender ang sagot sa textarea.

Tingnan natin ang styling, dito maaari kang maging malikhain at gawing maganda ang itsura, ngunit narito ang ilang mungkahi:

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

Sa tatlong klase na ito, maistyle mo ang mga mensahe depende kung saan ito nanggaling, mula sa assistant o sa user. Kung nais mong ma-inspire, tingnan ang `solution/frontend/styles.css` folder.

### Baguhin ang Base Url

May isang bagay dito na hindi natin na-set, at iyon ay ang `BASE_URL`. Hindi ito malalaman hanggang magsimula ang iyong backend. Upang i-set ito:

- Kung tumatakbo ang API nang lokal, dapat itong i-set sa `http://localhost:5000`.
- Kung tumatakbo sa Codespaces, dapat itong magmukhang "[name]app.github.dev".

## Assignment

Gumawa ng sarili mong folder *project* na may nilalaman tulad nito:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

Kopyahin ang nilalaman mula sa mga itinuro sa itaas ngunit malaya kang i-customize ayon sa gusto mo.

## Solution

[Solution](./solution/README.md)

## Bonus

Subukang baguhin ang personalidad ng AI assistant.

### Para sa Python

Kapag tinawag mo ang `call_llm` sa *api.py*, maaari mong baguhin ang pangalawang argumento sa gusto mo, halimbawa:

```python
call_llm(message, "You are Captain Picard")
```

### Frontend

Baguhin din ang CSS at teksto ayon sa gusto mo, kaya gumawa ng mga pagbabago sa *index.html* at *styles.css*.

## Buod

Mahusay, natutunan mo mula sa simula kung paano gumawa ng personal assistant gamit ang AI. Ginawa natin ito gamit ang GitHub Models, isang backend sa Python, at isang frontend sa HTML, CSS, at JavaScript.

## Set up gamit ang Codespaces

- Pumunta sa: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Gumawa mula sa template (siguraduhing naka-login ka sa GitHub) sa kanang itaas na bahagi:

    ![Create from template](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.tl.png)

- Kapag nasa iyong repo na, gumawa ng Codespace:

    ![Create codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.tl.png)

    Dapat itong magsimula ng environment na maaari mo nang gamitin.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.