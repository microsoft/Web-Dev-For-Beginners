<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:04:26+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "sw"
}
-->
# Endesha kodu

## Kuandaa

Unda mazingira ya kawaida

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Sakinisha utegemezi

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
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia huduma ya tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.