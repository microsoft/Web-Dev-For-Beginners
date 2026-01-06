<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T09:30:56+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "de"
}
-->
# Code ausführen

## Einrichtung

Virtuelle Umgebung erstellen

```sh
python -m venv venv
source ./venv/bin/activate
```

## Abhängigkeiten installieren

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API starten

```sh
# Methode 1: Direkte Ausführung
python api.py

# Methode 2: Verwendung von uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API testen

Besuchen Sie die interaktive API-Dokumentation unter: `http://localhost:5000/docs`

## Frontend starten

Stellen Sie sicher, dass Sie sich im Frontend-Ordner befinden

Suchen Sie *app.js*, ändern Sie `BASE_URL` auf die URL Ihres Backends

Starten Sie es

```
npx http-server -p 8000
```

Versuchen Sie, eine Nachricht im Chat einzugeben, Sie sollten eine Antwort sehen (vorausgesetzt, Sie führen dies in einem Codespace aus oder haben ein Zugriffstoken eingerichtet).

## Zugriffstoken einrichten (wenn Sie dies nicht in einem Codespace ausführen)

Siehe [Persönliches Zugriffstoken einrichten](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir auf Genauigkeit achten, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Originalsprache ist die maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->