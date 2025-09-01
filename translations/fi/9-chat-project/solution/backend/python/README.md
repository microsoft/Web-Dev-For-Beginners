<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:28+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "fi"
}
-->
# Suorita koodi

## Aseta ympäristö

Luo virtuaalinen ympäristö

```sh
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

## Käynnistä käyttöliittymä

Varmista, että olet käyttöliittymän kansiossa

Etsi *app.js*, muuta `BASE_URL` vastaamaan taustapalvelimesi URL-osoitetta

Käynnistä se

```
npx http-server -p 8000
```

Kokeile kirjoittaa viesti chatissa, sinun pitäisi nähdä vastaus (edellyttäen, että suoritat tätä Codespacessa tai olet asettanut käyttöoikeustunnuksen).

## Aseta käyttöoikeustunnus (jos et suorita tätä Codespacessa)

Katso [Aseta PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.