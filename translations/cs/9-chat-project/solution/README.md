<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:04:41+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "cs"
}
-->
# Spuštění kódu

## Nastavení

Vytvořte virtuální prostředí

```sh
cd backend
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

Spusťte to

```
npx http-server -p 8000
```

Zkuste napsat zprávu do chatu, měli byste vidět odpověď (za předpokladu, že to spouštíte v Codespace nebo máte nastavený přístupový token).

## Nastavení přístupového tokenu (pokud to nespouštíte v Codespace)

Viz [Nastavení PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.