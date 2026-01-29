# Bank API

> Bank API, zgrajen z [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API je že zgrajen in ni del naloge.

Če pa vas zanima, kako zgraditi takšen API, lahko sledite tej seriji videoposnetkov: https://aka.ms/NodeBeginner (videoposnetki od 17 do 21 pokrivajo točno ta API).

Prav tako si lahko ogledate ta interaktivni vodič: https://aka.ms/learn/express-api

## Zagon strežnika

Prepričajte se, da imate nameščen [Node.js](https://nodejs.org).

1. Git clone tega repozitorija [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Odprite terminal in se pomaknite v mapo `Web-Dev-For-Beginners/7-bank-project/api`.
3. Zaženite `npm install` in počakajte, da se paketi namestijo (lahko traja nekaj časa, odvisno od kakovosti vaše internetne povezave).
4. Ko je namestitev končana, zaženite `npm start` in pripravljeni ste.

Strežnik bi moral začeti poslušati na portu `5000`.
*Ta strežnik bo deloval skupaj z glavnim strežnikom aplikacije banke (ki posluša na portu `3000`), zato ga ne zapirajte.*

> Opomba: vsi vnosi so shranjeni v pomnilniku in niso trajno shranjeni, zato se ob zaustavitvi strežnika vsi podatki izgubijo.

## Podrobnosti API-ja

Pot                                          | Opis
---------------------------------------------|------------------------------------
GET    /api/                                 | Pridobi informacije o strežniku
POST   /api/accounts/                        | Ustvari račun, npr.: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Pridobi vse podatke za določen račun
DELETE /api/accounts/:user                   | Odstrani določen račun
POST   /api/accounts/:user/transactions      | Dodaj transakcijo, npr.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Odstrani določeno transakcijo

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.