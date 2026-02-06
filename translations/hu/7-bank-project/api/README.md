# Bank API

> Bank API, amelyet [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) segítségével készítettek.

Az API már készen áll, és nem része a feladatnak.

Ha azonban szeretnéd megtanulni, hogyan készíts ilyen API-t, kövesd ezt a videósorozatot: https://aka.ms/NodeBeginner (a 17–21. videók pontosan ezt az API-t fedik le).

Ezenkívül megnézheted ezt az interaktív oktatóanyagot is: https://aka.ms/learn/express-api

## A szerver futtatása

Győződj meg róla, hogy telepítve van a [Node.js](https://nodejs.org).

1. Klónozd le ezt a repót: [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Nyisd meg a terminált, és navigálj a `Web-Dev-For-Beginners/7-bank-project/api` mappába.
3. Futtasd az `npm install` parancsot, és várd meg, amíg a csomagok telepítése befejeződik (ez eltarthat egy ideig az internetkapcsolat minőségétől függően).
4. Amikor a telepítés befejeződött, futtasd az `npm start` parancsot, és már készen is vagy.

A szervernek a `5000` porton kell elindulnia.
*Ez a szerver együtt fog futni a fő banki alkalmazás szerver termináljával (amely a `3000` porton hallgat), ne zárd be.*

> Megjegyzés: minden bejegyzés a memóriában tárolódik, és nem kerül mentésre, így ha a szerver leáll, minden adat elveszik.

## API részletei

Útvonal                                     | Leírás
--------------------------------------------|------------------------------------
GET    /api/                                | Szerverinformációk lekérése
POST   /api/accounts/                       | Fiók létrehozása, például: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                  | Az adott fiók összes adatának lekérése
DELETE /api/accounts/:user                  | Az adott fiók törlése
POST   /api/accounts/:user/transactions     | Tranzakció hozzáadása, például: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Az adott tranzakció törlése

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.