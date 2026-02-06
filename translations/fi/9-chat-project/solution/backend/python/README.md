# Suorita koodi

## Valmistelut

Luo virtuaalinen ympäristö

```sh
python -m venv venv
source ./venv/bin/activate
```

## Asenna riippuvuudet

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Käynnistä API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testaa API

Vieraile interaktiivisessa API-dokumentaatiossa osoitteessa: `http://localhost:5000/docs`

## Käynnistä käyttöliittymä

Varmista, että olet käyttöliittymäkansiossa

Etsi *app.js*, muuta `BASE_URL` vastaamaan taustapalvelimesi URL-osoitetta

Käynnistä se

```
npx http-server -p 8000
```

Kokeile kirjoittaa viesti chatissa, sinun pitäisi nähdä vastaus (edellyttäen, että suoritat tämän Codespacessa tai olet asettanut käyttöoikeustunnuksen).

## Aseta käyttöoikeustunnus (jos et suorita tätä Codespacessa)

Katso [Aseta PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.