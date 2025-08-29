<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cf15ff7770c5a484349383bb27d1131f",
  "translation_date": "2025-08-29T13:02:15+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "ro"
}
-->
# Proiect de Chat

Acest proiect de chat arată cum să construiești un Asistent de Chat folosind Modelele GitHub.

Iată cum arată proiectul finalizat:

<div>
  <img src="./assets/screenshot.png" alt="Aplicație de chat" width="600">
</div>

Un pic de context: construirea asistenților de chat folosind AI generativ este o modalitate excelentă de a începe să înveți despre AI. Vei învăța cum să integrezi AI generativ într-o aplicație web pe parcursul acestei lecții. Să începem.

## Conectarea la AI generativ

Pentru backend, folosim Modelele GitHub. Este un serviciu excelent care îți permite să utilizezi AI gratuit. Accesează playground-ul său și preia codul corespunzător limbajului de backend ales. Iată cum arată la [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

Așa cum am menționat, selectează fila "Code" și runtime-ul ales.

<div>
  <img src="./assets/playground-choice.png" alt="alegerea playground-ului" with="600">
</div>

În acest caz, selectăm Python, ceea ce înseamnă că alegem acest cod:

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

Să curățăm puțin acest cod pentru a fi reutilizabil:

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

Cu această funcție `call_llm`, putem acum să luăm un prompt și un prompt de sistem, iar funcția va returna rezultatul.

### Personalizarea Asistentului AI

Dacă dorești să personalizezi asistentul AI, poți specifica cum vrei să se comporte, completând promptul de sistem astfel:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Expunerea printr-un Web API

Grozav, am terminat partea de AI, să vedem cum putem integra aceasta într-un Web API. Pentru Web API, alegem să folosim Flask, dar orice framework web ar trebui să fie bun. Iată codul pentru aceasta:

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

Aici, creăm un API Flask și definim o rută implicită "/" și "/chat". Cea din urmă este destinată utilizării de către frontend pentru a trimite întrebări.

Pentru a integra *llm.py*, iată ce trebuie să facem:

- Importă funcția `call_llm`:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Apeleaz-o din ruta "/chat":

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

   Aici analizăm cererea primită pentru a prelua proprietatea `message` din corpul JSON. Ulterior, apelăm LLM cu acest apel:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Grozav, acum am făcut ce era necesar.

### Configurarea Cors

Trebuie să menționăm că am configurat ceva numit CORS, partajarea resurselor între origini diferite. Asta înseamnă că, deoarece backend-ul și frontend-ul nostru vor rula pe porturi diferite, trebuie să permitem frontend-ului să apeleze backend-ul. Există un fragment de cod în *api.py* care configurează acest lucru:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

În prezent, este configurat să permită "*" (toate originile), ceea ce este puțin nesigur. Ar trebui să restricționăm acest lucru odată ce trecem la producție.

## Rulează proiectul

Ok, avem *llm.py* și *api.py*, cum putem face să funcționeze cu un backend? Ei bine, sunt două lucruri pe care trebuie să le facem:

- Instalează dependențele:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Pornește API-ul:

   ```sh
   python api.py
   ```

   Dacă ești în Codespaces, trebuie să mergi la Ports în partea de jos a editorului, să dai clic dreapta pe el, să selectezi "Port Visibility" și să alegi "Public".

### Lucrează la un frontend

Acum că avem un API funcțional, să creăm un frontend pentru acesta. Un frontend minim pe care îl vom îmbunătăți treptat. Într-un folder *frontend*, creează următoarele:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Să începem cu **index.html**:

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

Acesta este minimul absolut necesar pentru a susține o fereastră de chat, deoarece constă dintr-o zonă de text unde vor fi afișate mesajele, un câmp de introducere pentru a scrie mesajul și un buton pentru a trimite mesajul către backend. Să analizăm următorul cod JavaScript din *app.js*.

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

Să parcurgem codul pe secțiuni:

- 1) Aici obținem o referință la toate elementele noastre pe care le vom folosi mai târziu în cod.
- 2) În această secțiune, creăm o funcție care folosește metoda încorporată `fetch` pentru a apela backend-ul nostru.
- 3) `appendMessage` ajută la adăugarea răspunsurilor, precum și a ceea ce tastezi ca utilizator.
- 4) Aici ascultăm evenimentul de submit și citim câmpul de introducere, plasăm mesajul utilizatorului în zona de text, apelăm API-ul și afișăm răspunsul în zona de text.

Să analizăm acum stilizarea. Aici poți fi foarte creativ și să faci să arate cum dorești, dar iată câteva sugestii:

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

Cu aceste trei clase, vei stiliza mesajele diferit, în funcție de unde provin: de la asistent sau de la tine ca utilizator. Dacă vrei să te inspiri, verifică folderul `solution/frontend/styles.css`.

### Schimbă URL-ul de bază

A fost un lucru pe care nu l-am setat aici și acesta este `BASE_URL`. Acesta nu este cunoscut până când backend-ul tău este pornit. Pentru a-l seta:

- Dacă rulezi API-ul local, ar trebui să fie ceva de genul `http://localhost:5000`.
- Dacă rulezi în Codespaces, ar trebui să arate ceva de genul "[name]app.github.dev".

## Sarcină

Creează propriul tău folder *project* cu conținutul astfel:

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

Copiază conținutul din ceea ce a fost instruit mai sus, dar simte-te liber să personalizezi după bunul plac.

## Soluție

[Soluție](./solution/README.md)

## Bonus

Încearcă să schimbi personalitatea asistentului AI. Când apelezi `call_llm` în *api.py*, poți schimba al doilea argument la ceea ce dorești, de exemplu:

```python
call_llm(message, "You are Captain Picard")
```

Schimbă, de asemenea, CSS-ul și textul după bunul plac, făcând modificări în *index.html* și *styles.css*.

## Rezumat

Grozav, ai învățat de la zero cum să creezi un asistent personal folosind AI. Am făcut acest lucru folosind Modelele GitHub, un backend în Python și un frontend în HTML, CSS și JavaScript.

## Configurare cu Codespaces

- Navighează la: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Creează dintr-un șablon (asigură-te că ești conectat la GitHub) în colțul din dreapta sus:

    ![Creează din șablon](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.ro.png)

- Odată ajuns în repo-ul tău, creează un Codespace:

    ![Creează codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.ro.png)

    Acest lucru ar trebui să pornească un mediu cu care poți lucra acum.

---

**Declinarea responsabilității**:  
Acest document a fost tradus utilizând serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși depunem eforturi pentru a asigura acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.