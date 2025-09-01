<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:35+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "nl"
}
-->
# Code uitvoeren

## Instellen

Maak een virtuele omgeving aan

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installeer afhankelijkheden

```sh
pip install openai flask flask-cors 
```

## Start API

```sh
python api.py
```

## Start frontend

Zorg ervoor dat je in de frontend-map staat

Zoek *app.js*, verander `BASE_URL` naar de URL van je backend

Start het

```
npx http-server -p 8000
```

Probeer een bericht in de chat te typen, je zou een reactie moeten zien (mits je dit in een Codespace uitvoert of een toegangstoken hebt ingesteld).

## Stel toegangstoken in (als je dit niet in een Codespace uitvoert)

Zie [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.