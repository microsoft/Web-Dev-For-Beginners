# API ya Benki

> API ya Benki iliyojengwa kwa [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API tayari imejengwa kwa ajili yako na si sehemu ya zoezi.

Hata hivyo, kama unataka kujifunza jinsi ya kujenga API kama hii unaweza kufuata mfululizo wa video hizi: https://aka.ms/NodeBeginner (video za 17 hadi 21 zinashughulikia API hii hasa).

Unaweza pia kuangalia mafunzo haya ya maingiliano: https://aka.ms/learn/express-api

## Kuendesha seva

Hakikisha umeweka [Node.js](https://nodejs.org).

1. Git clone repo hii [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Fungua terminal yako na nenda kwenye folda ya `Web-Dev-For-Beginners/7-bank-project/api`
2. Run `npm install` na subiri vifurushi vimalize kusakinishwa (inaweza kuchukua muda kulingana na ubora wa muunganisho wako wa intaneti).
3. Baada ya usakinishaji kukamilika, run `npm start` na uko tayari kuendelea.

Seva inapaswa kuanza kusikiliza kwenye port `5000`.
*Seva hii itakuwa inaendesha pamoja na terminal kuu ya programu ya benki (ikisikiliza kwenye port `3000`), usiifunge.*

> Kumbuka: maingizo yote yanahifadhiwa kwenye kumbukumbu na hayahifadhiwi, hivyo seva ikisimamishwa data zote zinapotea.

## Maelezo ya API

Njia                                         | Maelezo
---------------------------------------------|------------------------------------
GET    /api/                                 | Pata taarifa za seva
POST   /api/accounts/                        | Unda akaunti, mfano: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Pata data zote za akaunti maalum
DELETE /api/accounts/:user                   | Futa akaunti maalum
POST   /api/accounts/:user/transactions      | Ongeza muamala, mfano: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Futa muamala maalum

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.