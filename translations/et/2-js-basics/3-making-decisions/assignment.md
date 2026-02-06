# Otsuste tegemine: õpilaste hinnete töötleja

## Õpieesmärgid

Selles ülesandes harjutad selle tunni otsustamise kontseptsioone, luues programmi, mis töötleb õpilaste hindeid erinevatest hindamissüsteemidest. Kasutad `if...else` lauseid, võrdlusoperaatoreid ja loogikaoperaatoreid, et määrata, millised õpilased kursuse sooritavad.

## Väljakutse

Sa töötad koolis, mis hiljuti ühines teise asutusega. Nüüd pead töötlema õpilaste hindeid kahest täiesti erinevast hindamissüsteemist ja määrama, millised õpilased on kursusest läbi saanud. See on ideaalne võimalus harjutada tingimusloogikat!

### Hindamissüsteemide mõistmine

#### Esimene hindamissüsteem (numbriline)
- Hinded antakse arvudena vahemikus 1-5
- **Läbijate hinne**: 3 ja üleval (3, 4 või 5)
- **Ebaõnnestumise hinne**: Alla 3 (1 või 2)

#### Teine hindamissüsteem (tähthinded)
- Hinded on tähed: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Läbijad**: `A`, `A-`, `B`, `B-`, `C`, `C-` (kõik nimetatud hinded on läbivad)
- **Märkus**: selles süsteemis pole ebaõnnestunud hindeid nagu `D` või `F`

### Sinu ülesanne

Võttes arvesse järgmist massiivi `allStudents`, mis sisaldab kõiki õpilasi ja nende hindeid, koosta uus massiiv `studentsWhoPass`, kuhu kuuluvad kõik õpilased, kes oma vastava hindamissüsteemi järgi läbi saavad.

```javascript
let allStudents = [
  'A',    // Tähtede hinnang - läbinud
  'B-',   // Tähtede hinnang - läbinud
  1,      // Numbriline hinnang - ebaõnnestunud
  4,      // Numbriline hinnang - läbinud
  5,      // Numbriline hinnang - läbinud
  2       // Numbriline hinnang - ebaõnnestunud
];

let studentsWhoPass = [];
```

### Samm-sammuline lähenemine

1. **Sea üles tsükkel**, mis läbib iga hinde `allStudents` massiivis
2. **Kontrolli hinde tüüpi** (kas see on number või string?)
3. **Kohalda sobivaid hindamissüsteemi reegleid**:
   - Kui number: kontrolli, kas hinne >= 3
   - Kui string: vaata, kas see on üks lubatud läbivate tähthindade seast
4. **Lisa läbivad hinded** massiivi `studentsWhoPass`

### Kasulikud kooditehnikad

Kasuta järgmisi JavaScripti mõisteid sellest tunnist:

- **typeof operaator**: `typeof grade === 'number'` kontrollimaks, kas tegemist on numbrilise hinde või mitte
- **Võrdlusoperaatorid**: `>=` numbriliste hinnete võrdlemiseks
- **Loogikaoperaatorid**: `||` mitme tähthinde tingimuse kontrollimiseks
- **if...else laused**: erinevate hindamissüsteemide käsitlemiseks
- **Massiivi meetodid**: `.push()` läbivate hinnete lisamiseks uude massiivi

### Oodatav väljund

Kui käivitad programmi, peaks `studentsWhoPass` sisaldama: `['A', 'B-', 4, 5]`

**Miks need hinded läbivad:**
- `'A'` ja `'B-'` on kehtivad tähthinded (kõik selles süsteemis olevad tähthinded on läbivad)
- `4` ja `5` on numbrilised hinded ≥ 3
- `1` ja `2` ei läbi, sest need on numbrilised hinnetega < 3

## Oma lahenduse testimine

Testeeri oma koodi erinevate stsenaariumitega:

```javascript
// Testi erinevate hinnete kombinatsioonidega
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Sinu lahendus peaks toimima mis tahes kehtivate hinnete kombinatsiooniga
```

## Lisaväljakutsed

Kui oled põhiülesandega valmis saanud, proovi neid laiendusi:

1. **Lisa valideerimine**: Kontrolli kehtetuid hindeid (negatiivsed numbrid või kehtetud tähed)
2. **Arvuta statistikat**: Loenda, kui palju õpilasi läbi saavad vs. ebaõnnestuvad
3. **Hindede teisendamine**: Muuda kõik hinded ühtseks numbriliseks süsteemiks (A=5, B=4, C=3 jne)

## Hindamiskriteeriumid

| Kriteerium | Suurepärane (4) | Korralik (3) | Arendamisel (2) | Algajatase (1) |
|------------|-----------------|--------------|-----------------|----------------|
| **Funktsionaalsus** | Programm tuvastab korrektselt kõik läbivad hinded mõlemast süsteemist | Programm töötab väikeste probleemide või äärmusjuhtudega | Programm töötab osaliselt, kuid sisaldab loogikavigu | Programmil on olulised vead või see ei tööta |
| **Koodi ülesehitus** | Puhas ja hästi organiseeritud kood õigete if...else tingimuslausega | Hea ülesehitus sobivate tingimuslausete kasutusega | Aktsepteeritav struktuur, mõned korraldusprobleemid | Halb ülesehitus, raskesti jälgitav loogika |
| **Kontseptsioonide kasutamine** | Tõhusalt kasutab võrdlusoperaatoreid, loogikaoperaatoreid ja tingimuslauseid | Hea kasutus tunni mõistetest väikeste puudustega | Mõningane kasutus, kuid puuduvad olulised elemendid | Piiratud kontseptsioonide kasutus |
| **Probleemilahendus** | Näitab selget arusaama probleemist ja elegantset lahendust | Hea probleemilahenduse lähenemine tugeva loogikaga | Rahuldav probleemilahendus mõningase segadusega | Ebaselge lähenemine, puudub arusaamine |

## Töö esitamise juhised

1. **Testeeri oma koodi** põhjalikult antud näidetega
2. **Lisa kommentaarid**, mis selgitavad sinu loogikat, eriti tingimuslausete puhul
3. **Kontrolli tulemusi**, mis peavad vastama ootustele: `['A', 'B-', 4, 5]`
4. **Arvesta äärmusjuhtumeid**, näiteks tühjad massiivid või ootamatud andmetüübid

> 💡 **Nõuanne**: Alusta lihtsalt! Alusta põhilise funktsionaalsuse käima saamisest, seejärel lisa keerukamaid funktsioone. Peamine on harjutada otsustusloogikat, kasutades selle tunni vahendeid.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud tehisintellekti tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle algkeeles tuleks pidada usaldusväärseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tekkida võivate arusaamatuste või väärtõlgenduste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->