<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:26+00:00",
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
pip install openai flask flask-cors 
```

## Spuštění API

```sh
python api.py
```

## Spuštění frontendové části

Ujistěte se, že se nacházíte ve složce frontend

Najděte *app.js*, změňte `BASE_URL` na URL vašeho backendu

Spusťte aplikaci

```
npx http-server -p 8000
```

Zkuste napsat zprávu do chatu, měli byste vidět odpověď (za předpokladu, že to spouštíte v Codespace nebo máte nastavený přístupový token).

## Nastavení přístupového tokenu (pokud to nespouštíte v Codespace)

Podívejte se na [Nastavení PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.