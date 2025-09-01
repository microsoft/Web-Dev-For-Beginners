<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "11cf36165c243947b6cd85b88cf6faa6",
  "translation_date": "2025-09-01T16:47:24+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "de"
}
-->
# Chat-Projekt

Dieses Chat-Projekt zeigt, wie man einen Chat-Assistenten mit GitHub Models erstellt.

So sieht das fertige Projekt aus:

![Chat-App](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.de.png)

Ein bisschen Kontext: Chat-Assistenten mit generativer KI zu erstellen, ist eine großartige Möglichkeit, um mit KI zu beginnen. In dieser Lektion lernst du, generative KI in eine Web-App zu integrieren. Lass uns anfangen.

## Verbindung zur generativen KI

Für das Backend verwenden wir GitHub Models. Es ist ein großartiger Dienst, der es dir ermöglicht, KI kostenlos zu nutzen. Gehe zu seinem Playground und hole dir den Code, der zu deiner gewählten Backend-Sprache passt. So sieht es im [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) aus:

![GitHub Models AI Playground](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.de.png)

Wie gesagt, wähle den Tab "Code" und deine bevorzugte Laufzeitumgebung.

![Playground-Auswahl](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.de.png)

### Verwendung von Python

In diesem Fall wählen wir Python, was bedeutet, dass wir diesen Code verwenden:

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

Lass uns diesen Code ein wenig bereinigen, damit er wiederverwendbar ist:

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

Mit dieser Funktion `call_llm` können wir nun einen Prompt und einen System-Prompt übergeben, und die Funktion gibt das Ergebnis zurück.

### KI-Assistent anpassen

Wenn du den KI-Assistenten anpassen möchtest, kannst du festlegen, wie er sich verhalten soll, indem du den System-Prompt wie folgt ausfüllst:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Über eine Web-API bereitstellen

Super, wir haben den KI-Teil fertiggestellt. Schauen wir uns an, wie wir das in eine Web-API integrieren können. Für die Web-API verwenden wir Flask, aber jedes Web-Framework sollte geeignet sein. Hier ist der Code dazu:

### Verwendung von Python

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

Hier erstellen wir eine Flask-API und definieren eine Standardroute "/" und "/chat". Letztere soll von unserem Frontend verwendet werden, um Fragen an die API zu übermitteln.

Um *llm.py* zu integrieren, müssen wir Folgendes tun:

- Die Funktion `call_llm` importieren:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Sie in der Route "/chat" aufrufen:

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

   Hier analysieren wir die eingehende Anfrage, um die Eigenschaft `message` aus dem JSON-Body zu extrahieren. Danach rufen wir die LLM mit diesem Aufruf auf:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Super, jetzt haben wir alles erledigt.

## Cors konfigurieren

Wir sollten erwähnen, dass wir etwas wie CORS (Cross-Origin Resource Sharing) einrichten. Das bedeutet, dass unser Backend und Frontend auf unterschiedlichen Ports laufen werden, und wir müssen dem Frontend erlauben, auf das Backend zuzugreifen.

### Verwendung von Python

Es gibt ein Stück Code in *api.py*, das dies einrichtet:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Momentan ist es so konfiguriert, dass alle Ursprünge ("*") erlaubt sind, was etwas unsicher ist. Wir sollten dies einschränken, sobald wir in die Produktion gehen.

## Projekt ausführen

Um dein Projekt auszuführen, musst du zuerst dein Backend und dann dein Frontend starten.

### Verwendung von Python

Ok, wir haben *llm.py* und *api.py*. Wie können wir das mit einem Backend zum Laufen bringen? Es gibt zwei Dinge, die wir tun müssen:

- Abhängigkeiten installieren:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Die API starten:

   ```sh
   python api.py
   ```

   Wenn du in Codespaces arbeitest, musst du im unteren Teil des Editors zu "Ports" gehen, mit der rechten Maustaste darauf klicken, "Port Visibility" auswählen und "Public" auswählen.

### Am Frontend arbeiten

Jetzt, da wir eine API am Laufen haben, erstellen wir ein Frontend dafür. Ein minimales Frontend, das wir schrittweise verbessern werden. Erstelle im Ordner *frontend* Folgendes:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Beginnen wir mit **index.html**:

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

Das oben Gezeigte ist das absolute Minimum, das du benötigst, um ein Chat-Fenster zu unterstützen. Es besteht aus einem Textbereich, in dem Nachrichten angezeigt werden, einem Eingabefeld, in das die Nachricht eingegeben wird, und einem Button, um die Nachricht an das Backend zu senden. Schauen wir uns als Nächstes das JavaScript in *app.js* an.

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

Gehen wir den Code Abschnitt für Abschnitt durch:

- 1) Hier holen wir uns Referenzen zu allen Elementen, auf die wir später im Code zugreifen werden.
- 2) In diesem Abschnitt erstellen wir eine Funktion, die die eingebaute `fetch`-Methode verwendet, um unser Backend aufzurufen.
- 3) `appendMessage` hilft dabei, sowohl die Antworten als auch die vom Benutzer eingegebenen Nachrichten hinzuzufügen.
- 4) Hier hören wir auf das Submit-Event, lesen das Eingabefeld aus, platzieren die Nachricht des Benutzers im Textbereich, rufen die API auf und zeigen die Antwort im Textbereich an.

Schauen wir uns als Nächstes das Styling an. Hier kannst du deiner Kreativität freien Lauf lassen und es so gestalten, wie du möchtest. Hier sind einige Vorschläge:

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

Mit diesen drei Klassen kannst du Nachrichten unterschiedlich gestalten, je nachdem, ob sie vom Assistenten oder vom Benutzer stammen. Wenn du Inspiration suchst, schau dir den Ordner `solution/frontend/styles.css` an.

### Basis-URL ändern

Es gibt eine Sache, die wir hier noch nicht festgelegt haben, und das ist `BASE_URL`. Diese ist erst bekannt, wenn dein Backend gestartet ist. Um sie festzulegen:

- Wenn du die API lokal ausführst, sollte sie auf etwas wie `http://localhost:5000` gesetzt werden.
- Wenn du sie in Codespaces ausführst, sollte sie etwa so aussehen: "[name]app.github.dev".

## Aufgabe

Erstelle deinen eigenen Ordner *project* mit folgendem Inhalt:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

Kopiere den Inhalt aus den oben genannten Anweisungen, aber passe ihn gerne nach deinen Wünschen an.

## Lösung

[Lösung](./solution/README.md)

## Bonus

Versuche, die Persönlichkeit des KI-Assistenten zu ändern.

### Für Python

Wenn du `call_llm` in *api.py* aufrufst, kannst du das zweite Argument ändern, um es nach deinen Wünschen anzupassen, zum Beispiel:

```python
call_llm(message, "You are Captain Picard")
```

### Frontend

Ändere auch das CSS und den Text nach deinen Wünschen, also nimm Änderungen in *index.html* und *styles.css* vor.

## Zusammenfassung

Super, du hast von Grund auf gelernt, wie man einen persönlichen Assistenten mit KI erstellt. Wir haben dies mit GitHub Models, einem Backend in Python und einem Frontend in HTML, CSS und JavaScript gemacht.

## Einrichtung mit Codespaces

- Navigiere zu: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Erstelle aus einer Vorlage (stelle sicher, dass du bei GitHub angemeldet bist) in der oberen rechten Ecke:

    ![Aus Vorlage erstellen](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.de.png)

- Sobald du in deinem Repository bist, erstelle einen Codespace:

    ![Codespace erstellen](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.de.png)

    Dies sollte eine Umgebung starten, mit der du jetzt arbeiten kannst.

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.