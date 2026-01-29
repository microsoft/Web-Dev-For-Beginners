# Code uitvoeren

## Instellen

Maak een virtuele omgeving aan

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installeer afhankelijkheden

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Start API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Test API

Bezoek de interactieve API-documentatie op: `http://localhost:5000/docs`

## Start frontend

Zorg ervoor dat je in de frontend-map staat

Vind *app.js*, wijzig `BASE_URL` naar de URL van je backend

Start het

```
npx http-server -p 8000
```

Probeer een bericht in de chat te typen, je zou een reactie moeten zien (mits je dit in een Codespace uitvoert of een toegangstoken hebt ingesteld).

## Stel toegangstoken in (als je dit niet in een Codespace uitvoert)

Zie [Toegangstoken instellen](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.