# Banko API

> Banko API sukurta naudojant [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API jau yra sukurta ir nėra šios užduoties dalis.

Tačiau, jei norite sužinoti, kaip sukurti tokią API, galite peržiūrėti šią vaizdo įrašų seriją: https://aka.ms/NodeBeginner (17–21 vaizdo įrašuose aptariama būtent ši API).

Taip pat galite peržiūrėti šį interaktyvų vadovą: https://aka.ms/learn/express-api

## Serverio paleidimas

Įsitikinkite, kad turite įdiegtą [Node.js](https://nodejs.org).

1. Nuklonuokite šį repozitoriją [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Atidarykite terminalą ir pereikite į aplanką `Web-Dev-For-Beginners/7-bank-project/api`.
3. Paleiskite komandą `npm install` ir palaukite, kol bus įdiegtos visos priklausomybės (tai gali užtrukti priklausomai nuo jūsų interneto ryšio kokybės).
4. Kai diegimas bus baigtas, paleiskite komandą `npm start` ir viskas paruošta.

Serveris turėtų pradėti klausytis prievado `5000`.
*Šis serveris veiks kartu su pagrindiniu banko programos serveriu (klausantis prievado `3000`), todėl jo neuždarykite.*

> Pastaba: visi įrašai saugomi atmintyje ir nėra išsaugomi, todėl sustabdžius serverį visi duomenys bus prarasti.

## API detalės

Maršrutas                                    | Aprašymas
---------------------------------------------|------------------------------------
GET    /api/                                 | Gauti serverio informaciją
POST   /api/accounts/                        | Sukurti paskyrą, pvz.: `{ user: 'Yohan', description: 'Mano biudžetas', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Gauti visus nurodytos paskyros duomenis
DELETE /api/accounts/:user                   | Pašalinti nurodytą paskyrą
POST   /api/accounts/:user/transactions      | Pridėti operaciją, pvz.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Nupirkta knyga', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Pašalinti nurodytą operaciją

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.