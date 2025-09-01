<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:19+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hu"
}
-->
# Kód futtatása

## Beállítás

Hozz létre egy virtuális környezetet

```sh
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

Keresd meg az *app.js*-t, változtasd meg a `BASE_URL` értékét a backend URL-edre

Futtasd

```
npx http-server -p 8000
```

Próbálj meg beírni egy üzenetet a chatbe, válaszokat kellene látnod (feltéve, hogy Codespace-ben futtatod, vagy beállítottál egy hozzáférési tokent).

## Hozzáférési token beállítása (ha nem Codespace-ben futtatod)

Lásd: [Hozzáférési token beállítása](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.