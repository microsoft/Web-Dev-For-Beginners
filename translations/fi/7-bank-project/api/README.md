<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-27T20:55:06+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "fi"
}
-->
# Pankki API

> Pankki API, rakennettu [Node.js](https://nodejs.org) + [Express](https://expressjs.com) -teknologioilla.

API on jo valmiiksi rakennettu eikä ole osa tätä harjoitusta.

Jos kuitenkin haluat oppia, miten rakentaa tällainen API, voit seurata tätä videosarjaa: https://aka.ms/NodeBeginner (videot 17–21 käsittelevät juuri tätä API:ta).

Voit myös tutustua tähän interaktiiviseen opetusohjelmaan: https://aka.ms/learn/express-api

## Palvelimen käynnistäminen

Varmista, että sinulla on [Node.js](https://nodejs.org) asennettuna.

1. Git kloonaa tämä repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Avaa terminaali ja siirry `Web-Dev-For-Beginners/7-bank-project/api` -kansioon.
3. Suorita `npm install` ja odota, että paketit asennetaan (voi kestää jonkin aikaa internet-yhteyden laadusta riippuen).
4. Kun asennus on valmis, suorita `npm start` ja kaikki on valmista.

Palvelimen pitäisi alkaa kuunnella porttia `5000`.
*Tämä palvelin toimii yhdessä pääpankkisovelluksen palvelimen kanssa (kuuntelee porttia `3000`), älä sulje sitä.*

> Huomio: kaikki tiedot tallennetaan muistiin eikä niitä säilytetä pysyvästi, joten kun palvelin sammutetaan, kaikki data menetetään.

## API:n yksityiskohdat

Reitti                                       | Kuvaus
---------------------------------------------|------------------------------------
GET    /api/                                 | Hae palvelimen tiedot
POST   /api/accounts/                        | Luo tili, esim: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Hae kaikki tiedot määritetylle tilille
DELETE /api/accounts/:user                   | Poista määritetty tili
POST   /api/accounts/:user/transactions      | Lisää tapahtuma, esim: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Poista määritetty tapahtuma

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.