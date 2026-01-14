<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-08T09:40:03+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "et"
}
-->
# Koodi ümberkorraldamise ja dokumenteerimise ülesanne

## Õpieesmärgid

Selle ülesande täitmisega harjutate olulisi tarkvaraarenduse oskusi, mida professionaalsed arendajad iga päev kasutavad. Õpite organiseerima koodi hooldatavuse tagamiseks, vähendama duplikaate abstraktsiooni abil ja dokumenteerima oma tööd tulevaste arendajate (kaasa arvatud teie enda) jaoks!

Puhtal, hästi dokumenteeritud koodil on reaalmaailma veebiarendusprojektides suur tähtsus, kus mitu arendajat teeb koostööd ja koodibaasid arenevad ajas.

## Ülesande ülevaade

Teie pangarakenduse `app.js` fail on oluliselt kasvanud sisselogimise, registreerimise ja juhtpaneeli funktsionaalsusega. On aeg see kood ümber korraldada professionaalse arendustava abil, et parandada loetavust, hooldatavust ja vähendada duplikatsiooni.

## Juhised

Muuda oma praegust `app.js` koodi, rakendades neid kolme põhilist ümberkorraldamise tehnikat:

### 1. Väljavõtte konfiguratsiooni konstantid

**Ülesanne**: Loo faili alguses konfiguratsioonilõik taaskasutatavate konstanditega.

**Rakendamise juhised:**
- Väljavõta serveri API baasu URL (hetkel mitmes kohas kõvakodeeritud)
- Loo konstandid veateadete jaoks, mis esinevad mitmes funktsioonis
- Kaalu marsruutide teede ja elementide ID-de väljavõtmist, mida kasutatakse korduvalt

**Näidisstruktuur:**
```javascript
// Konfiguratsioonikonstandid
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Loo ühine päringufunktsioon

**Ülesanne**: Ehita taaskasutatav `sendRequest()` funktsioon, mis eemaldab dubleerunud koodi `createAccount()` ja `getAccount()` vahel.

**Nõuded:**
- Toeta nii GET kui ka POST päringuid
- Kaasa korralik veahaldus
- Toeta erinevaid URL lõpp-punkte
- Võta vastu valikuline päringu keha andmed

**Funktsiooni parameetrite juhised:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Teie rakendus siin
}
```

### 3. Lisa professionaalne koodi dokumentatsioon

**Ülesanne**: Dokumenteeri oma kood selgete, abistavate kommentaaridega, mis selgitavad loogika "miks"-i.

**Dokumentatsioonistandardid:**
- Lisa funktsioonidele dokumentatsioon nende eesmärgi, parameetrite ja tagastuste kohta
- Sisesta inline kommentaare keerulistele loogikatele või ärireeglitele
- Lisa seotud funktsioonidele jaotiste päised
- Selgita mitteselgeid koodimustreid või brauseripõhiseid lahendusi

**Näidis dokumenteerimisstiil:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Takista vormi vaikimisi saatmist, et käsitleda seda JavaScriptiga
  event.preventDefault();
  
  // Sinu teostus...
}
```

## Edukuse kriteeriumid

Sinu ümberkorraldatud kood peaks demonstreerima järgmisi professionaalse arenduse tavasid:

### Väljapaistev rakendus
- ✅ **Konstandid**: Kõik maagilised stringid ja URL-id on väljavõetud selgelt nimetatud konstantidesse
- ✅ **DRY põhimõte**: Ühine päringulogiika on koondatud taaskasutatavasse `sendRequest()` funktsiooni
- ✅ **Dokumentatsioon**: Funktsioonidel on selged JSDoc kommentaarid eesmärgi ja parameetritega
- ✅ **Organisatsioon**: Kood on loogiliselt grupeeritud jaotiste päiste ja ühtlase vormindusega
- ✅ **Veahaldus**: Täiustatud veahaldus uue päringufunktsiooni abil

### Piisav rakendus
- ✅ **Konstandid**: Enamik korduvatest väärtustest on väljavõetud, mõned kõvakodeeritud väärtused jäävad alles
- ✅ **Faktorisatsioon**: Loodud on põhinet `sendRequest()` funktsioon, kuid see ei pruugi katta kõiki erandjuhtumeid
- ✅ **Kommentaarid**: Olulisemad funktsioonid on dokumenteeritud, kuigi mõned selgitused võiksid olla põhjalikumad
- ✅ **Loetavus**: Kood on üldiselt hästi organiseeritud, kuid mõnes kohas on arenguruumi

### Vajab parandamist
- ❌ **Konstandid**: Paljud maagilised stringid ja URL-id on failis kõvakodeeritud
- ❌ **Duplikaat**: Sarnaste funktsioonide vahel on märkimisväärne koodi kordus
- ❌ **Dokumentatsioon**: Puuduvad või ebapiisavad kommentaarid, mis ei selgita koodi eesmärki
- ❌ **Organisatsioon**: Koodil puudub selge struktuur ja loogiline grupeerimine

## Testi oma ümberkorraldatud koodi

Pärast ümberkorraldamist veendu, et sinu pangarakendus töötab endiselt korrektselt:

1. **Testi kõiki kasutajate vooge**: Registreerimine, sisselogimine, juhtpaneeli kuvamine ja veahaldus
2. **Kontrolli API päringuid**: Veendu, et `sendRequest()` funktsioon töötab nii konto loomisel kui ka pärimisel
3. **Testi veastseisundeid**: Proovi vigaste kasutajatunnuste ja võrguvigadega
4. **Vaata konsooli väljundit**: Veendu, et ümberkorraldamise käigus uusi vigu ei tekkinud

## Esitamisjuhised

Esita oma ümberkorraldatud `app.js` fail koos:
- Selgete jaotiste päistega, mis organiseerivad erineva funktsionaalsuse
- Ühtlase koodi vormingu ja taande kasutamisega
- Täieliku JSDoci dokumentatsiooniga kõigi funktsioonide kohta
- Lühikese kommentaariga faili alguses, mis selgitab sinu ümberkorralduslähenemist

**Boonusväljakutse**: Koosta lihtne koodi dokumenteerimisfail (`CODE_STRUCTURE.md`), mis selgitab sinu rakenduse arhitektuuri ja kuidas erinevad funktsioonid töötavad koos.

## Reaalmaailma seos

See ülesanne peegeldab seda tüüpi koodi hooldust, mida professionaalsed arendajad regulaarselt teevad. Tööstuslikes tingimustes:
- **Koodikontrollid** hindavad loetavust ja hooldatavust nagu selles ülesandes
- **Tehniline võlg** koguneb, kui koodi regulaarselt ümber ei korraldata ega dokumenteerita
- **Meeskonnatöö** sõltub selgest, hästi dokumenteeritud koodist, mida uued meeskonnaliikmed mõistavad
- **Tõrgete parandamine** on palju lihtsam hästi organiseeritud koodibaasides koos korralike abstraktsioonidega

Oskused, mida siin harjutad — konstandite väljavõtmine, duplikatsiooni kõrvaldamine ja selge dokumentatsiooni kirjutamine — on professionaalse tarkvaraarenduse aluseks.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:  
See dokument on tõlgitud tehisintellekti tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada tõlke täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument oma emakeeles on autoriteetne allikas. Tähtsa teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tekkivate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->