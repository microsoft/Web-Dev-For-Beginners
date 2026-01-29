# Bank API

> Bank API vytvořené pomocí [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API je již vytvořené a není součástí tohoto cvičení.

Pokud se však chcete naučit, jak vytvořit podobné API, můžete sledovat tuto sérii videí: https://aka.ms/NodeBeginner (videa 17 až 21 pokrývají přesně toto API).

Můžete se také podívat na tento interaktivní tutoriál: https://aka.ms/learn/express-api

## Spuštění serveru

Ujistěte se, že máte nainstalovaný [Node.js](https://nodejs.org).

1. Naklonujte tento repozitář [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Otevřete terminál a přejděte do složky `Web-Dev-For-Beginners/7-bank-project/api`.
3. Spusťte `npm install` a počkejte, až se nainstalují balíčky (může to chvíli trvat v závislosti na kvalitě vašeho internetového připojení).
4. Po dokončení instalace spusťte `npm start` a je to hotovo.

Server by měl začít naslouchat na portu `5000`.
*Tento server bude běžet společně s hlavním serverem bankovní aplikace (naslouchajícím na portu `3000`), nezavírejte ho.*

> Poznámka: všechny záznamy jsou uloženy v paměti a nejsou trvale uchovány, takže při zastavení serveru se všechna data ztratí.

## Podrobnosti o API

Route                                        | Popis
---------------------------------------------|------------------------------------
GET    /api/                                 | Získat informace o serveru
POST   /api/accounts/                        | Vytvořit účet, např.: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Získat všechna data pro zadaný účet
DELETE /api/accounts/:user                   | Odstranit zadaný účet
POST   /api/accounts/:user/transactions      | Přidat transakci, např.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Odstranit zadanou transakci

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nenese odpovědnost za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.