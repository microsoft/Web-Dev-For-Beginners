# Patakbuhin ang code

## I-set up

Gumawa ng virtual na kapaligiran

```sh
python -m venv venv
source ./venv/bin/activate
```

## I-install ang mga kinakailangan

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Patakbuhin ang API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Subukan ang API

Bisitahin ang interactive na dokumentasyon ng API sa: `http://localhost:5000/docs`

## Patakbuhin ang frontend

Siguraduhing nasa folder ng frontend ka

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
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.