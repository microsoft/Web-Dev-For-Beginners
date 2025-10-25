<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T20:57:32+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "cs"
}
-->
# Spuštění kódu

## Nastavení

Vytvořte virtuální prostředí

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalace závislostí

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Spuštění API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testování API

Navštivte interaktivní dokumentaci API na: `http://localhost:5000/docs`

## Spuštění frontendové části

Ujistěte se, že se nacházíte ve složce frontend

Najděte *app.js*, změňte `BASE_URL` na URL vašeho backendu

Spusťte aplikaci

```
npx http-server -p 8000
```

Zkuste napsat zprávu do chatu, měli byste vidět odpověď (za předpokladu, že to spouštíte v Codespace nebo máte nastavený přístupový token).

## Nastavení přístupového tokenu (pokud to nespouštíte v Codespace)

Viz [Nastavení PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoliv se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.