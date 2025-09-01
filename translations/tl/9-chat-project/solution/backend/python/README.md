<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:06+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "tl"
}
-->
# Patakbuhin ang code

## I-set up

Gumawa ng virtual environment

```sh
python -m venv venv
source ./venv/bin/activate
```

## I-install ang mga kinakailangan

```sh
pip install openai flask flask-cors 
```

## Patakbuhin ang API

```sh
python api.py
```

## Patakbuhin ang frontend

Siguraduhing nasa loob ka ng frontend folder

Hanapin ang *app.js*, palitan ang `BASE_URL` sa URL ng iyong backend

Patakbuhin ito

```
npx http-server -p 8000
```

Subukang mag-type ng mensahe sa chat, dapat kang makakita ng sagot (kung pinapatakbo mo ito sa isang Codespace o nakapag-set up ka ng access token).

## I-set up ang access token (kung hindi mo ito pinapatakbo sa isang Codespace)

Tingnan ang [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.