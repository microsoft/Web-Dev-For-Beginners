# Kodo Refaktorizavimo ir Dokumentacijos Užduotis

## Mokymosi Tikslai

Atlikdami šią užduotį praktikavotės svarbių programinės įrangos kūrimo įgūdžių, kuriuos profesionalūs kūrėjai naudoja kasdien. Išmoksite organizuoti kodą palaikomumui, mažinti pasikartojimą per abstrakciją ir dokumentuoti savo darbą būsimiems kūrėjams (įskaitant save!).

Švarus, gerai dokumentuotas kodas yra būtinas tikriems interneto programų projektams, kuriuose dirba keli kūrėjai, o kodų bazės bėgant laikui keičiasi.

## Užduoties Apžvalga

Jūsų bankininkystės programos `app.js` failas sparčiai išaugo su prisijungimo, registracijos ir valdymo skydelio funkcionalumu. Atėjo laikas refaktorizuoti šį kodą, naudojant profesionalias kūrimo praktikas, kad pagerintumėte skaitomumą, palaikomumą ir sumažintumėte pasikartojimą.

## Instrukcijos

Transformuokite esamą `app.js` kodą įgyvendindami šias tris pagrindines refaktorizavimo technikas:

### 1. Išskirkite Konfiguracijos Konstantas

**Užduotis**: Sukurkite konfigūracijos skyrių failo viršuje su pakartotinai naudojamomis konstantomis.

**Įgyvendinimo gairės:**
- Išskirkite serverio API bazinį URL (šiuo metu įrašytą keliose vietose)
- Sukurkite konstantas klaidų pranešimams, rodomiems keliuose funkcijose
- Apsvarstykite galimybę išskirti maršrutų kelius ir elementų ID, kurie naudojami daug kartų

**Pavyzdinė struktūra:**
```javascript
// Konfigūracijos konstantos
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Sukurkite Vieningą Užklausos Funkciją

**Užduotis**: Parašykite pakartotinai naudojamą funkciją `sendRequest()`, kuri pašalintų pasikartojantį kodą tarp `createAccount()` ir `getAccount()`.

**Reikalavimai:**
- Apdorokite tiek GET, tiek POST užklausas
- Įtraukite tinkamą klaidų valdymą
- Palaikykite skirtingus URL galinius taškus
- Priimkite pasirenkamus užklausos duomenis

**Funkcijos parašo gairės:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Jūsų įgyvendinimas čia
}
```

### 3. Pridėkite Profesionalią Kodo Dokumentaciją

**Užduotis**: Dokumentuokite savo kodą aiškiomis, naudingomis pastabomis, kurios paaiškina „kodėl“ už jūsų logikos.

**Dokumentavimo standartai:**
- Pridėkite funkcijų dokumentaciją, paaiškinančią paskirtį, parametrus ir grąžinimo vertes
- Įtraukite įterptines pastabas sudėtingai logikai ar verslo taisyklėms
- Grupiuokite susijusias funkcijas su skyriaus antraštėmis
- Paaiškinkite bet kokius neakivaizdžius kodo modelius ar naršyklės specifinius sprendimus

**Pavyzdinis dokumentavimo stilius:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Užkirsti kelią numatytajam formos pateikimui, kad būtų galima valdyti su JavaScript
  event.preventDefault();
  
  // Jūsų įgyvendinimas...
}
```

## Sėkmės Kriterijai

Jūsų refaktorizuotas kodas turėtų demonstruoti šias profesionalias kūrimo praktikas:

### Puikus Įgyvendinimas
- ✅ **Konstantos**: Visos magiškos eilutės ir URL išskirti į aiškiai pavadintas konstantas
- ✅ **DRY Principas**: Bendra užklausų logika sujungta į pakartotinai naudojamą `sendRequest()` funkciją
- ✅ **Dokumentacija**: Funkcijos turi aiškias JSDoc pastabas, paaiškinančias paskirtį ir parametrus
- ✅ **Organizacija**: Kodas logiškai sugrupuotas su skyriais ir nuosekliu formatavimu
- ✅ **Klaidų Valdymas**: Pagerintas klaidų valdymas naudojant naują užklausos funkciją

### Tinkamas Įgyvendinimas
- ✅ **Konstantos**: Dauguma pasikartojančių reikšmių išskirtos, bet lieka keli trumpo įrašymo variantai
- ✅ **Faktorizacija**: Sukurta pagrindinė `sendRequest()` funkcija, tačiau gali nepridengti visų kraštutinių atvejų
- ✅ **Komentarai**: Pagrindinės funkcijos dokumentuotos, tačiau kai kurios paaiškinimų dalys galėtų būti išsamesnės
- ✅ **Skaitomumas**: Kodas apskritai gerai organizuotas, tačiau kai kur reikalingi patobulinimai

### Reikia Tobulinti
- ❌ **Konstantos**: Daugybė magiškų eilutčių ir URL lieka iškarto įrašyti faile
- ❌ **Pasikartojimas**: Tarp panašių funkcijų išlieka reikšmingas kodo dubliavimas
- ❌ **Dokumentacija**: Trūksta arba nepakankamos pastabos, kurios nepaaiškina kodo paskirties
- ❌ **Organizacija**: Trūksta aiškios struktūros ir logiško grupavimo

## Testuokite Refaktorizuotą Kodą

Atlikus refaktorizavimą, įsitikinkite, kad jūsų bankininkystės programa veikia teisingai:

1. **Išbandykite visus vartotojo srautus**: Registraciją, prisijungimą, valdymo skydelio rodymą ir klaidų valdymą
2. **Patikrinkite API užklausas**: Patvirtinkite, kad `sendRequest()` veikia tiek kuriant, tiek gaunant paskyrą
3. **Išbandykite klaidų scenarijus**: Testuokite netinkamus prisijungimo duomenis ir tinklo klaidas
4. **Peržiūrėkite konsolės išvestį**: Įsitikinkite, kad refaktorizavimo metu neatsirado naujų klaidų

## Pateikimo Reikalavimai

Pateikite refaktorizuotą `app.js` failą su:
- Aiškiomis skyriaus antraštėmis, organizuojančiomis skirtingus funkcionalumus
- Nuosekliu kodo formatavimu ir įtraukimu
- Išsamią JSDoc dokumentaciją visoms funkcijoms
- Trumpa pastaba viršuje, paaiškinanti jūsų refaktorizavimo metodiką

**Papildomas Iššūkis**: Sukurkite paprastą kodo dokumentacijos failą (`CODE_STRUCTURE.md`), kuris paaiškina jūsų programos architektūrą ir kaip įvairios funkcijos veikia kartu.

## Ryšys su Realiu Pasauliu

Ši užduotis atspindi kodo priežiūros tipą, kurį profesionalūs kūrėjai atlieka reguliariai. Pramonėje:
- **Kodo peržiūros** vertina skaitomumą ir palaikomumą, kaip ši užduotis
- **Techninė skola** kaupiasi, jei kodas nėra reguliariai refaktorizuojamas ir dokumentuojamas
- **Komandos bendradarbiavimas** priklauso nuo aiškaus, gerai dokumentuoto kodo, kurį gali suprasti nauji komandos nariai
- **Klaidų taisymai** daug paprastesni gerai organizuotuose kodo bazėse su tinkamomis abstrakcijomis

Įgūdžiai, kuriuos čia praktikuojate - konstantų išskyrimas, dubliavimo šalinimas ir aiškios dokumentacijos rašymas - yra pagrindiniai profesionaliam programinės įrangos kūrimui.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų arba netikslumų. Originalus dokumentas jo gimtąja kalba turi būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama naudotis profesionalių vertėjų paslaugomis. Mes neatsakome už bet kokius nesusipratimus ar neteisingus supratimus, atsiradusius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->