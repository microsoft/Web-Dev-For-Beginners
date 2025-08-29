<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:07:51+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "de"
}
-->
# Code ausführen

## Einrichtung

Virtuelle Umgebung erstellen

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Abhängigkeiten installieren

```sh
pip install openai flask flask-cors 
```

## API starten

```sh
python api.py
```

## Frontend starten

Stelle sicher, dass du dich im Frontend-Ordner befindest.

Finde *app.js* und ändere `BASE_URL` auf die URL deines Backends.

Starte es

```
npx http-server -p 8000
```

Versuche, eine Nachricht im Chat einzugeben. Du solltest eine Antwort sehen (vorausgesetzt, du führst dies in einem Codespace aus oder hast ein Zugriffstoken eingerichtet).

## Zugriffstoken einrichten (falls du dies nicht in einem Codespace ausführst)

Siehe [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.