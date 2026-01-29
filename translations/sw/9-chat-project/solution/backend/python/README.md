# Endesha kod

## Kuandaa

Unda mazingira ya kawaida

```sh
python -m venv venv
source ./venv/bin/activate
```

## Sakinisha mahitaji

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Endesha API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Jaribu API

Tembelea nyaraka za API zinazotumika kwenye: `http://localhost:5000/docs`

## Endesha sehemu ya mbele

Hakikisha uko kwenye folda ya frontend

Tafuta *app.js*, badilisha `BASE_URL` kuwa URL ya backend yako

Iendeshe

```
npx http-server -p 8000
```

Jaribu kuandika ujumbe kwenye mazungumzo, unapaswa kuona jibu (ikiwa unaendesha hii kwenye Codespace au umeweka tokeni ya ufikiaji).

## Weka tokeni ya ufikiaji (ikiwa huendeshi hii kwenye Codespace)

Tazama [Weka PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati asilia katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.