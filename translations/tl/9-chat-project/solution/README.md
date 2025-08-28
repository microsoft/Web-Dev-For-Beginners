<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-28T15:57:28+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "tl"
}
-->
# Patakbuhin ang code

## Pag-set up

Gumawa ng virtual environment

```sh
cd backend
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

Siguraduhing nasa frontend folder ka

Hanapin ang *app.js*, palitan ang `BASE_URL` sa URL ng iyong backend

Patakbuhin ito

```
npx http-server -p 8000
```

Subukang mag-type ng mensahe sa chat, dapat kang makakita ng sagot (kung pinapatakbo mo ito sa isang Codespace o na-set up mo ang access token).

## I-set up ang access token (kung hindi mo ito pinapatakbo sa isang Codespace)

Tingnan ang [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.