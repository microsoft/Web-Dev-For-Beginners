# Panga API

> Panga API, mis on loodud [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) abil.

API on juba valmis ja ei kuulu harjutuse juurde.

Kui oled huvitatud, kuidas sellist API-d ise luua, siis saad jälgida seda videoseeriat: https://aka.ms/NodeBeginner (videod 17 kuni 21 hõlmavad täpselt seda API-d).

Samuti võid vaadata seda interaktiivset õpetust: https://aka.ms/learn/express-api

## Serveri käivitamine

Veendu, et sul on [Node.js](https://nodejs.org) paigaldatud.

1. Tee Git clone sellest repositooriumist [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Ava oma terminal ja liigu kausta `Web-Dev-For-Beginners/7-bank-project/api`.
3. Käivita `npm install` ja oota, kuni paketid on paigaldatud (see võib võtta aega, sõltuvalt sinu internetiühenduse kvaliteedist).
4. Kui paigaldamine on lõppenud, käivita `npm start` ja oled valmis.

Server peaks alustama kuulamist pordil `5000`.
*See server töötab koos peamise panga rakenduse serveri terminaliga (kuulab pordil `3000`), ära sulge seda.*

> Märkus: kõik kirjed salvestatakse mälus ja neid ei säilitata, seega serveri peatamisel kaob kogu andmestik.

## API üksikasjad

Route                                        | Kirjeldus
---------------------------------------------|------------------------------------
GET    /api/                                 | Serveri info pärimine
POST   /api/accounts/                        | Konto loomine, nt: `{ user: 'Yohan', description: 'Minu eelarve', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Kõigi andmete pärimine määratud konto kohta
DELETE /api/accounts/:user                   | Määratud konto kustutamine
POST   /api/accounts/:user/transactions      | Tehingu lisamine, nt: `{ date: '2020-07-23T18:25:43.511Z', object: 'Ostsin raamatu', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Määratud tehingu kustutamine

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.