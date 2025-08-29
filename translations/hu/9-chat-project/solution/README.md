<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:04:32+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "hu"
}
-->
# Kód futtatása

## Beállítás

Hozz létre egy virtuális környezetet

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Függőségek telepítése

```sh
pip install openai flask flask-cors 
```

## API futtatása

```sh
python api.py
```

## Frontend futtatása

Győződj meg róla, hogy a frontend mappában állsz

Keresd meg az *app.js* fájlt, és változtasd meg a `BASE_URL` értékét a backend URL-edre

Indítsd el

```
npx http-server -p 8000
```

Próbálj meg beírni egy üzenetet a csevegésbe, és látnod kell egy választ (feltéve, hogy Codespace-ben futtatod, vagy beállítottál egy hozzáférési tokent).

## Hozzáférési token beállítása (ha nem Codespace-ben futtatod)

Lásd: [Személyes hozzáférési token beállítása](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Felelősségkizárás**:  
Ezt a dokumentumot az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével fordítottuk le. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.