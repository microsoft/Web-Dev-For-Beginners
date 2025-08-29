<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T01:28:43+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "fi"
}
-->
# Suorita koodi

## Asetukset

Luo virtuaaliympäristö

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Asenna riippuvuudet

```sh
pip install openai flask flask-cors 
```

## Käynnistä API

```sh
python api.py
```

## Käynnistä frontend

Varmista, että olet frontend-kansiossa

Etsi *app.js*, muuta `BASE_URL` vastaamaan backend-URL-osoitettasi

Käynnistä se

```
npx http-server -p 8000
```

Kokeile kirjoittaa viesti chattiin, sinun pitäisi nähdä vastaus (edellyttäen, että suoritat tätä Codespacessa tai olet asettanut käyttöoikeustunnuksen).

## Aseta käyttöoikeustunnus (jos et suorita tätä Codespacessa)

Katso [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.