<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2026-01-08T08:53:49+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "et"
}
-->
# Fun with Functions

## Juhised

Selles ülesandes harjutad erinevate funktsioonitüüpide loomist, et tugevdada oma teadmisi JavaScripti funktsioonidest, parameetritest, vaikimisi väärtustest ja tagastamisavaldistest.

Loo JavaScripti fail nimega `functions-practice.js` ja implementeeri järgmised funktsioonid:

### Osa 1: Põhilised funktsioonid
1. **Loo funktsioon nimega `sayHello`**, mis ei võta mingeid parameetreid ja logib lihtsalt konsooli "Hello!".

2. **Loo funktsioon nimega `introduceYourself`**, mis võtab `name` parameetri ja logib konsooli sõnumi nagu "Hi, my name is [name]".

### Osa 2: Vaikimisi parameetritega funktsioonid
3. **Loo funktsioon nimega `greetPerson`**, mis võtab kaks parameetrit: `name` (nõutud) ja `greeting` (valikuline, vaikimisi väärtuseks "Hello"). Funktsioon peaks logima konsooli sõnumi nagu "[greeting], [name]!".

### Osa 3: Funktsioonid, mis tagastavad väärtusi
4. **Loo funktsioon nimega `addNumbers`**, mis võtab kaks parameetrit (`num1` ja `num2`) ja tagastab nende summa.

5. **Loo funktsioon nimega `createFullName`**, mis võtab parameetrid `firstName` ja `lastName` ning tagastab täisnime ühtse stringina.

### Osa 4: Pane kõik kokku
6. **Loo funktsioon nimega `calculateTip`**, mis võtab kaks parameetrit: `billAmount` (nõutud) ja `tipPercentage` (valikuline, vaikimisi 15). Funktsioon peaks arvutama ja tagastama jootraha summa.

### Osa 5: Testi oma funktsioone
Lisa funktsioonikõned enda funktsioonide testimiseks ja kuva tulemused `console.log()` abil.

**Näidiskõned testimiseks:**
```javascript
// Testi oma funktsioone siin
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Hindamiskriteeriumid

| Kriteerium | Suurepärane | Piisav | Vajab parandamist |
| -------- | --------- | -------- | ----------------- |
| **Funktsioonide loomine** | Kõik 6 funktsiooni on õigesti implementeeritud ning kasutatud korrektset süntaksit ja nimetust | 4-5 funktsiooni on õigesti implementeeritud väikeste süntaksi probleemidega | 3 või vähem funktsiooni on implementeeritud või on suured süntaksivead |
| **Parameetrid ja vaikimisi väärtused** | Kasutatakse õigesti nõutud ja valikulisi parameetreid ning vaikimisi väärtusi vastavalt ülesandele | Parameetreid kasutatakse õigesti, kuid võib esineda probleeme vaikimisi väärtustega | Parameetrite kasutamine on vale või puudulik |
| **Tagastatavad väärtused** | Funktsioonid, mis peaksid väärtusi tagastama, teevad seda korrektselt, ning funktsioonid, mis väärtusi tagastama ei pea, täidavad ainult tegevusi | Enamik tagastatavaid väärtusi on õiged väikeste probleemidega | Suured probleemid tagastamisega |
| **Koodi kvaliteet** | Puhtalt kirjutatud, hästi organiseeritud kood tähenduslike muutujanimede ja õige taandega | Kood töötab, kuid võiks olla puhtam ja paremini organiseeritud | Koodi on raske lugeda või see on halvasti struktureeritud |
| **Testimine** | Kõik funktsioonid on piisavalt testitud ja tulemused kuvatakse selgelt | Enamik funktsioone on piisavalt testitud | Funktsioonide testimine on piiratud või vale |

## Boonuskatsed (Valikuline)

Kui soovid end veelgi proovile panna:

1. **Loo noolefunktsiooni versioon** ühest oma funktsioonist
2. **Loo funktsioon, mis võtab parameetrina teise funktsiooni** (näiteks setTimeouti näited õppetükist)
3. **Lisa sisendi valideerimine**, et vältida vigaste sisendite põhjustatud probleeme

---

> 💡 **Nõuanne**: Ära unusta avada oma brauseri arendajakonsooli (F12), et näha `console.log()` väljundeid!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüdleme täpsuse poole, palun pange tähele, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument tema emakeeles tuleks pidada autoriteetseks allikaks. Tähtsa teabe puhul soovitatakse kasutada professionaali inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->