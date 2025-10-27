<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T20:12:00+00:00",
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
pip install openai fastapi uvicorn python-dotenv
```

## API futtatása

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API tesztelése

Látogasd meg az interaktív API dokumentációt itt: `http://localhost:5000/docs`

## Frontend futtatása

Győződj meg róla, hogy a frontend mappában állsz

Keresd meg az *app.js*-t, változtasd meg a `BASE_URL` értékét a backend URL-edre

Futtasd

```
npx http-server -p 8000
```

Próbálj meg egy üzenetet beírni a chatbe, választ kell kapnod (feltéve, hogy Codespace-ben futtatod, vagy beállítottál egy hozzáférési tokent).

## Hozzáférési token beállítása (ha nem Codespace-ben futtatod)

Lásd [Hozzáférési token beállítása](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.