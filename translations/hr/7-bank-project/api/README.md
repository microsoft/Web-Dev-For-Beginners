# Bank API

> Bank API izgrađen pomoću [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API je već izgrađen i nije dio ovog zadatka.

Međutim, ako želite naučiti kako izgraditi API poput ovog, možete pratiti ovu seriju videa: https://aka.ms/NodeBeginner (videi od 17 do 21 pokrivaju upravo ovaj API).

Također možete pogledati ovaj interaktivni vodič: https://aka.ms/learn/express-api

## Pokretanje servera

Provjerite imate li instaliran [Node.js](https://nodejs.org).

1. Git klonirajte ovaj repozitorij [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Otvorite terminal i navigirajte u mapu `Web-Dev-For-Beginners/7-bank-project/api`.
3. Pokrenite `npm install` i pričekajte da se paketi instaliraju (može potrajati ovisno o kvaliteti vaše internetske veze).
4. Kada instalacija završi, pokrenite `npm start` i spremni ste.

Server bi trebao početi slušati na portu `5000`.
*Ovaj server će raditi zajedno s glavnim serverom aplikacije za banku (sluša na portu `3000`), nemojte ga zatvarati.*

> Napomena: svi unosi se pohranjuju u memoriji i nisu trajno spremljeni, tako da se svi podaci gube kada se server zaustavi.

## Detalji API-ja

Ruta                                         | Opis
---------------------------------------------|------------------------------------
GET    /api/                                 | Dohvati informacije o serveru
POST   /api/accounts/                        | Kreiraj račun, npr.: `{ user: 'Yohan', description: 'Moj budžet', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Dohvati sve podatke za određeni račun
DELETE /api/accounts/:user                   | Ukloni određeni račun
POST   /api/accounts/:user/transactions      | Dodaj transakciju, npr.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Kupio knjigu', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Ukloni određenu transakciju

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakva nesporazuma ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.