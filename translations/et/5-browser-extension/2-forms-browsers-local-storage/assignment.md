# Hangi API

## Ülevaade

API-d avavad lõputud võimalused loovaks veebi arendamiseks! Selles ülesandes valid välise API ja ehitad brauserilaiendi, mis lahendab reaalse probleemi või pakub kasutajatele väärtuslikku funktsionaalsust.

## Juhised

### 1. samm: vali oma API
Vali API sellest kureeritud [tasuliste avalike API-de nimekirjast](https://github.com/public-apis/public-apis). Mõtle nende kategooriate peale:

**Populaarsed valikud algajatele:**
- **Meelelahutus**: [Dog CEO API](https://dog.ceo/dog-api/) juhuslike koerte piltide jaoks
- **Ilm**: [OpenWeatherMap](https://openweathermap.org/api) praeguse ilmaandmete jaoks
- **Tsitaadid**: [Quotable API](https://quotable.io/) inspireerivate tsitaatide jaoks
- **Uudised**: [NewsAPI](https://newsapi.org/) praeguste pealkirjade jaoks
- **Lõbusad faktid**: [Numbers API](http://numbersapi.com/) huvitavate numbrifaktide jaoks

### 2. samm: planeeri oma laiend
Enne kodeerimist vasta neile planeerimisküsimustele:
- Millise probleemi sinu laiend lahendab?
- Kes on sinu sihtkasutaja?
- Milliseid andmeid salvestad kohalikku salvestusse?
- Kuidas käsitled API rikkeid või kasutuspiiranguid?

### 3. samm: ehita oma laiend
Sinu laiend peaks sisaldama:

**Nõutavad funktsioonid:**
- Vormisisendid vajalike API parameetrite jaoks
- API integratsioon koos korraliku veahaldusega
- Kohalik salvestus kasutaja eelistuste või API võtmete jaoks
- Puhas, reageeriv kasutajaliides
- Laadimise seisundid ja kasutajate tagasiside

**Koodi nõuded:**
- Kasuta kaasaegseid JavaScripti (ES6+) funktsioone
- Rakenda async/await API kutsumiste jaoks
- Sisalda korralik veahaldus try/catch plokkidega
- Lisa sisukad kommentaarid oma koodi selgitamiseks
- Järgi ühtlast koodi vormistust

### 4. samm: testi ja lihvi
- Testi oma laiendit erinevate sisenditega
- Käsitle äärejuhtumeid (puuduv internet, vigased API vastused)
- Veendu, et laiend töötab ka pärast brauseri taaskäivitust
- Lisa kasutajasõbralikud veateated

## Boonus väljakutsed

Viige oma laiend järgmisele tasemele:
- Lisa mitu API lõpp-punkti rikkaliku funktsionaalsuse jaoks
- Rakenda andmete vahemällu salvestamist API kutsude vähendamiseks
- Loo klaviatuuri otseteed tavapäraste tegevuste jaoks
- Lisa andmete eksportimise/importimise funktsioonid
- Rakenda kasutaja kohandamise võimalusi

## Esitamise nõuded

1. **Töötav brauserilaiend**, mis edukalt integreerub valitud API-ga
2. **README fail**, mis selgitab:
   - Millise API sa valisid ja miks
   - Kuidas paigaldada ja kasutada laiendit
   - Mis tahes API võtmed või seadistused
   - Kuvatõmmised laiendi töös
3. **Puhas, kommenteeritud kood**, mis järgib kaasaegseid JavaScripti parimaid tavasid

## Hindamiskriteeriumid

| Kriteerium | Suurepärane (90-100%) | Hea (80-89%) | Arendamisel (70-79%) | Algaja (60-69%) |
|------------|-----------------------|--------------|----------------------|-----------------|
| **API integratsioon** | Täiuslik API integratsioon koos põhjaliku veahalduse ja äärejuhtude käsitlemisega | Edukas API integratsioon põhiveahaldusega | API töötab, aga veahaldus piiratud | API integratsioonis olulised probleemid |
| **Koodi kvaliteet** | Puhas, hästi kommenteeritud kaasaegne JavaScript, mis järgib parimaid tavasid | Hea koodistruktuur sobivate kommentaaridega | Kood töötab, kuid vajab paremat organiseerimist | Kehv koodi kvaliteet minimaalsete kommentaaridega |
| **Kasutajakogemus** | Sile kasutajaliides koos suurepäraste laadimisseisundite ja kasutajate tagasisidega | Hea liides põhikasutajate tagasisidega | Põhiline liides, mis toimib adekvaatselt | Kehv kasutajakogemus, segane liides |
| **Kohalik salvestus** | Arukas kohaliku salvestuse kasutus andmete valideerimise ja haldusega | Korralik kohaliku salvestuse rakendus võtmefunktsioonide jaoks | Põhjalik kohalik salvestuse rakendus | Minimaalne või vale kohaliku salvestuse kasutus |
| **Dokumentatsioon** | Ulatuslik README koos seadistusjuhiste ja kuvatõmmistega | Hea dokumentatsioon, mis katab enamuse nõuetest | Põhidokumentatsioon, millelt mõned detailid puuduvad | Kehv või puuduv dokumentatsioon |

## Alustamiseks näpunäited

1. **Alusta lihtsalt**: vali API, mis ei vaja keerulist autentimist
2. **Loe dokumentatsiooni**: mõista põhjalikult valitud API lõpp-punkte ja vastuseid
3. **Planeeri oma kasutajaliidest**: joonista oma laiendi kasutajaliidese visand enne kodeerimist
4. **Testi sageli**: ehita järk-järgult ja testi iga funktsiooni lisamisel
5. **Käsitle vigu**: arvesta alati, et API kutsed võivad ebaõnnestuda ning planeeri vastavalt

## Ressursid

- [Brauserilaiendite dokumentatsioon](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API juhend](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Kohaliku salvestuse juhend](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON-i analüüs ja käsitlemine](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Loo midagi kasulikku ja loovat mängides! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tähelepanek**:
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi me püüdleme täpsuse poole, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks käsitleda autoriteetse allikana. Olulise teabe puhul soovitatakse kasutada professionaalset inimese tõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->