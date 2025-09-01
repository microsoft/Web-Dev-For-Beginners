<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "11cf36165c243947b6cd85b88cf6faa6",
  "translation_date": "2025-09-01T16:57:13+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "fi"
}
-->
# Chat-projekti

Tämä chat-projekti näyttää, kuinka rakentaa Chat Assistant GitHub Models -mallien avulla.

Tältä valmis projekti näyttää:

![Chat-sovellus](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.fi.png)

Hieman taustaa: Chat-assistenttien rakentaminen generatiivisen tekoälyn avulla on loistava tapa aloittaa tekoälyyn tutustuminen. Tässä oppitunnissa opit integroimaan generatiivisen tekoälyn verkkosovellukseen. Aloitetaan.

## Yhteys generatiiviseen tekoälyyn

Taustajärjestelmässä käytämme GitHub Models -malleja. Tämä on loistava palvelu, joka mahdollistaa tekoälyn käytön ilmaiseksi. Mene sen kokeiluympäristöön ja kopioi koodi, joka vastaa valitsemaasi taustakielen ympäristöä. Näin se näyttää [GitHub Models Playgroundissa](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

![GitHub Models AI Playground](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.fi.png)

Kuten mainitsimme, valitse "Code"-välilehti ja haluamasi ajonaikainen ympäristö.

![Playground-valinta](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.fi.png)

### Pythonin käyttö

Tässä tapauksessa valitsemme Pythonin, mikä tarkoittaa, että käytämme tätä koodia:

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

Siistitään koodia hieman, jotta se on uudelleenkäytettävä:

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

Tällä `call_llm`-funktiolla voimme nyt antaa kehotteen ja järjestelmäkehotteen, ja funktio palauttaa tuloksen.

### Mukauta AI-assistenttia

Jos haluat mukauttaa AI-assistenttia, voit määrittää sen käyttäytymisen täyttämällä järjestelmäkehotteen seuraavasti:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Julkaise se Web API:n kautta

Hienoa, AI-osuus on valmis. Katsotaanpa, kuinka voimme integroida sen Web API:in. Web API:ksi valitsemme Flaskin, mutta mikä tahansa verkkokehys käy. Tässä on koodi:

### Pythonin käyttö

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

Tässä luomme Flask-API:n ja määrittelemme oletusreitin "/" ja "/chat". Jälkimmäistä käytetään frontendin kautta kysymysten välittämiseen.

Integroitaessa *llm.py*-tiedostoa meidän täytyy tehdä seuraavat asiat:

- Tuo `call_llm`-funktio:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Kutsu sitä "/chat"-reitiltä:

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

   Tässä jäsennämme saapuvan pyynnön saadaksemme `message`-ominaisuuden JSON-rungosta. Sen jälkeen kutsumme LLM:ää seuraavasti:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Hienoa, nyt olemme tehneet tarvittavat toimenpiteet.

## Määritä Cors

On tärkeää huomioida, että meidän täytyy määrittää CORS (Cross-Origin Resource Sharing). Tämä johtuu siitä, että taustajärjestelmä ja käyttöliittymä toimivat eri porteissa, joten meidän täytyy sallia käyttöliittymän kutsut taustajärjestelmään.

### Pythonin käyttö

*api.py*-tiedostossa on koodinpätkä, joka hoitaa tämän:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Tällä hetkellä se on asetettu sallimaan kaikki alkuperät ("*"), mikä on hieman turvatonta. Tämä tulisi rajoittaa tuotantoympäristössä.

## Aja projektisi

Projektin ajamiseksi sinun täytyy ensin käynnistää taustajärjestelmä ja sen jälkeen käyttöliittymä.

### Pythonin käyttö

Meillä on nyt *llm.py* ja *api.py*. Kuinka saamme nämä toimimaan taustajärjestelmän kanssa? Meidän täytyy tehdä kaksi asiaa:

- Asenna riippuvuudet:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Käynnistä API:

   ```sh
   python api.py
   ```

   Jos käytät Codespacesia, mene editorin alaosassa Ports-osioon, napsauta sitä hiiren oikealla painikkeella ja valitse "Port Visibility" ja valitse "Public".

### Työskentele käyttöliittymän parissa

Nyt kun meillä on API käynnissä, luodaan käyttöliittymä. Aloitetaan yksinkertaisimmasta mahdollisesta käyttöliittymästä, jota parannamme vaiheittain. Luo *frontend*-kansioon seuraavat tiedostot:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Aloitetaan **index.html**-tiedostosta:

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

Yllä oleva on minimivaatimus chat-ikkunan tukemiseksi. Se sisältää tekstialueen viestien näyttämiseen, syötekentän viestin kirjoittamista varten ja painikkeen viestin lähettämiseen taustajärjestelmään. Katsotaan seuraavaksi JavaScriptiä tiedostossa *app.js*.

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

Käydään koodi läpi osioittain:

- 1) Tässä haemme viittaukset kaikkiin elementteihin, joita käytämme myöhemmin koodissa.
- 2) Tässä osiossa luomme funktion, joka käyttää sisäänrakennettua `fetch`-metodia taustajärjestelmän kutsumiseen.
- 3) `appendMessage` auttaa lisäämään vastaukset sekä käyttäjän kirjoittamat viestit.
- 4) Tässä kuuntelemme submit-tapahtumaa, luemme syötekentän, lisäämme käyttäjän viestin tekstialueelle, kutsumme API:a ja näytämme vastauksen tekstialueella.

Katsotaan seuraavaksi tyylitiedostoa. Tässä voit käyttää luovuuttasi ja tehdä siitä haluamasi näköisen, mutta tässä on joitakin ehdotuksia:

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

Näillä kolmella luokalla voit tyylitellä viestit eri tavalla riippuen siitä, tulevatko ne assistentilta vai käyttäjältä. Jos kaipaat inspiraatiota, katso `solution/frontend/styles.css`-kansiota.

### Muuta Base URL

Yksi asia, jota emme vielä asettaneet, on `BASE_URL`. Tätä ei tiedetä ennen kuin taustajärjestelmä on käynnistetty. Aseta se seuraavasti:

- Jos ajat API:a paikallisesti, sen pitäisi olla jotain kuten `http://localhost:5000`.
- Jos käytät Codespacesia, se näyttää jotain tällaista: "[name]app.github.dev".

## Tehtävä

Luo oma kansio *project*, jonka sisältö on seuraava:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

Kopioi sisältö yllä olevista ohjeista, mutta voit mukauttaa sitä haluamallasi tavalla.

## Ratkaisu

[Ratkaisu](./solution/README.md)

## Bonus

Kokeile muuttaa AI-assistentin persoonallisuutta.

### Pythonille

Kun kutsut `call_llm`-funktiota *api.py*-tiedostossa, voit muuttaa toista argumenttia haluamaksesi, esimerkiksi:

```python
call_llm(message, "You are Captain Picard")
```

### Käyttöliittymä

Muuta myös CSS-tyylejä ja tekstejä haluamallasi tavalla, eli tee muutoksia *index.html*- ja *styles.css*-tiedostoihin.

## Yhteenveto

Hienoa, olet oppinut alusta alkaen, kuinka luoda henkilökohtainen assistentti tekoälyn avulla. Teimme sen GitHub Models -mallien, Python-taustajärjestelmän sekä HTML-, CSS- ja JavaScript-käyttöliittymän avulla.

## Käyttöönotto Codespacesilla

- Siirry: [Web Dev For Beginners -repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Luo uusi repositorio mallista (varmista, että olet kirjautunut GitHubiin) oikeasta yläkulmasta:

    ![Luo mallista](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.fi.png)

- Kun olet omassa repositoriossasi, luo Codespace:

    ![Luo Codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.fi.png)

    Tämä käynnistää ympäristön, jossa voit nyt työskennellä.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.