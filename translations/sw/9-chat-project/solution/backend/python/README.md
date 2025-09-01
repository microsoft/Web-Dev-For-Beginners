<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:13+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sw"
}
-->
# Endesha msimbo

## Kuandaa mazingira

Tengeneza mazingira ya mtandaoni

```sh
python -m venv venv
source ./venv/bin/activate
```

## Sakinisha mahitaji

```sh
pip install openai flask flask-cors 
```

## Endesha API

```sh
python api.py
```

## Endesha frontend

Hakikisha uko kwenye folda ya frontend

Tafuta *app.js*, badilisha `BASE_URL` kuwa URL ya backend yako

Endesha

```
npx http-server -p 8000
```

Jaribu kuandika ujumbe kwenye mazungumzo, unapaswa kuona jibu (ikiwa unaendesha hii kwenye Codespace au umeweka tokeni ya ufikiaji).

## Weka tokeni ya ufikiaji (ikiwa huendeshi hii kwenye Codespace)

Tazama [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutokuelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.