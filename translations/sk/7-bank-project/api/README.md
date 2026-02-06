# Bank API

> Bank API vytvorená pomocou [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API je už pre vás pripravené a nie je súčasťou cvičenia.

Ak sa však chcete naučiť, ako vytvoriť podobné API, môžete si pozrieť túto sériu videí: https://aka.ms/NodeBeginner (videá 17 až 21 pokrývajú presne toto API).

Môžete si tiež pozrieť tento interaktívny tutoriál: https://aka.ms/learn/express-api

## Spustenie servera

Uistite sa, že máte nainštalovaný [Node.js](https://nodejs.org).

1. Git clone tohto repozitára [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Otvorte svoj terminál a prejdite do priečinka `Web-Dev-For-Beginners/7-bank-project/api`.
2. Spustite `npm install` a počkajte, kým sa balíčky nainštalujú (môže to chvíľu trvať v závislosti od kvality vášho internetového pripojenia).
3. Po dokončení inštalácie spustite `npm start` a môžete začať.

Server by mal začať počúvať na porte `5000`.
*Tento server bude bežať spolu s hlavným serverom bankovej aplikácie (počúvajúcim na porte `3000`), nezatvárajte ho.*

> Poznámka: všetky záznamy sú uložené v pamäti a nie sú perzistentné, takže po zastavení servera sa všetky údaje stratia.

## Detaily API

Route                                        | Popis
---------------------------------------------|------------------------------------
GET    /api/                                 | Získajte informácie o serveri
POST   /api/accounts/                        | Vytvorte účet, napr.: `{ user: 'Yohan', description: 'Môj rozpočet', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Získajte všetky údaje pre špecifikovaný účet
DELETE /api/accounts/:user                   | Odstráňte špecifikovaný účet
POST   /api/accounts/:user/transactions      | Pridajte transakciu, napr.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Kúpil som knihu', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Odstráňte špecifikovanú transakciu

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.