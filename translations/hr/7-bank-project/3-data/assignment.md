<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-25T00:06:06+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "hr"
}
-->
# Zadatak refaktoriranja koda i dokumentacije

## Ciljevi učenja

Izvršavanjem ovog zadatka, vježbat ćete ključne vještine razvoja softvera koje profesionalni programeri koriste svakodnevno. Naučit ćete organizirati kod radi lakšeg održavanja, smanjiti dupliciranje kroz apstrakciju i dokumentirati svoj rad za buduće programere (uključujući i sebe!).

Čist, dobro dokumentiran kod ključan je za stvarne projekte web razvoja gdje surađuje više programera, a kodne baze se s vremenom razvijaju.

## Pregled zadatka

Datoteka `app.js` vaše aplikacije za bankarstvo značajno je narasla s funkcionalnostima prijave, registracije i nadzorne ploče. Vrijeme je da refaktorirate ovaj kod koristeći profesionalne prakse razvoja kako biste poboljšali čitljivost, održivost i smanjili dupliciranje.

## Upute

Transformirajte trenutni kod u datoteci `app.js` primjenom ove tri ključne tehnike refaktoriranja:

### 1. Izvucite konfiguracijske konstante

**Zadatak**: Kreirajte sekciju za konfiguraciju na vrhu datoteke s višekratno upotrebljivim konstantama.

**Smjernice za implementaciju:**
- Izvucite osnovni URL API-ja servera (trenutno je hardkodiran na više mjesta)
- Kreirajte konstante za poruke o greškama koje se pojavljuju u više funkcija
- Razmotrite izvlačenje putanja ruta i ID-ova elemenata koji se često koriste

**Primjer strukture:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Kreirajte jedinstvenu funkciju za zahtjeve

**Zadatak**: Izgradite višekratno upotrebljivu funkciju `sendRequest()` koja eliminira duplicirani kod između `createAccount()` i `getAccount()`.

**Zahtjevi:**
- Obradite i GET i POST zahtjeve
- Uključite odgovarajuće rukovanje greškama
- Podržite različite URL krajnje točke
- Prihvatite opcionalne podatke tijela zahtjeva

**Smjernice za potpis funkcije:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Dodajte profesionalnu dokumentaciju koda

**Zadatak**: Dokumentirajte svoj kod jasnim, korisnim komentarima koji objašnjavaju "zašto" iza vaše logike.

**Standardi dokumentacije:**
- Dodajte dokumentaciju funkcija koja objašnjava svrhu, parametre i povratne vrijednosti
- Uključite inline komentare za složenu logiku ili poslovna pravila
- Grupirajte povezane funkcije zajedno s zaglavljima sekcija
- Objasnite sve nejasne uzorke koda ili specifične prilagodbe za preglednike

**Primjer stila dokumentacije:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Kriteriji uspjeha

Vaš refaktorirani kod trebao bi pokazati ove profesionalne prakse razvoja:

### Izvrsna implementacija
- ✅ **Konstante**: Svi "magic strings" i URL-ovi su izvučeni u jasno imenovane konstante
- ✅ **DRY princip**: Zajednička logika zahtjeva je konsolidirana u višekratno upotrebljivu funkciju `sendRequest()`
- ✅ **Dokumentacija**: Funkcije imaju jasne JSDoc komentare koji objašnjavaju svrhu i parametre
- ✅ **Organizacija**: Kod je logično grupiran s zaglavljima sekcija i dosljednim formatiranjem
- ✅ **Rukovanje greškama**: Poboljšano rukovanje greškama pomoću nove funkcije zahtjeva

### Dovoljna implementacija
- ✅ **Konstante**: Većina ponovljenih vrijednosti je izvučena, s manjim preostalim hardkodiranim vrijednostima
- ✅ **Faktorizacija**: Osnovna funkcija `sendRequest()` je kreirana, ali možda ne obrađuje sve rubne slučajeve
- ✅ **Komentari**: Ključne funkcije su dokumentirane, iako neka objašnjenja mogu biti potpunija
- ✅ **Čitljivost**: Kod je općenito dobro organiziran s nekim prostorom za poboljšanje

### Potrebna poboljšanja
- ❌ **Konstante**: Mnogi "magic strings" i URL-ovi ostaju hardkodirani u cijeloj datoteci
- ❌ **Dupliciranje**: Značajno dupliciranje koda ostaje između sličnih funkcija
- ❌ **Dokumentacija**: Nedostaju ili su neadekvatni komentari koji ne objašnjavaju svrhu koda
- ❌ **Organizacija**: Kod nema jasnu strukturu i logičko grupiranje

## Testiranje refaktoriranog koda

Nakon refaktoriranja, osigurajte da vaša aplikacija za bankarstvo i dalje ispravno funkcionira:

1. **Testirajte sve korisničke tokove**: Registracija, prijava, prikaz nadzorne ploče i rukovanje greškama
2. **Provjerite API pozive**: Potvrdite da vaša funkcija `sendRequest()` radi za kreiranje i dohvaćanje računa
3. **Provjerite scenarije grešaka**: Testirajte s nevažećim vjerodajnicama i greškama mreže
4. **Pregledajte izlaz konzole**: Osigurajte da nisu uvedene nove greške tijekom refaktoriranja

## Smjernice za predaju

Predajte svoju refaktoriranu datoteku `app.js` s:
- Jasnim zaglavljima sekcija koje organiziraju različite funkcionalnosti
- Dosljednim formatiranjem i uvlačenjem koda
- Potpunom JSDoc dokumentacijom za sve funkcije
- Kratkim komentarom na vrhu koji objašnjava vaš pristup refaktoriranju

**Bonus izazov**: Kreirajte jednostavnu datoteku dokumentacije koda (`CODE_STRUCTURE.md`) koja objašnjava arhitekturu vaše aplikacije i kako različite funkcije međusobno djeluju.

## Povezanost s stvarnim svijetom

Ovaj zadatak odražava vrstu održavanja koda koju profesionalni programeri redovito obavljaju. U industrijskim okruženjima:
- **Pregledi koda** ocjenjuju čitljivost i održivost, kao u ovom zadatku
- **Tehnički dug** se akumulira kada se kod ne refaktorira i dokumentira redovito
- **Suradnja tima** ovisi o jasnom, dobro dokumentiranom kodu koji novi članovi tima mogu razumjeti
- **Ispravci grešaka** su mnogo lakši u dobro organiziranim kodnim bazama s odgovarajućim apstrakcijama

Vještine koje ovdje vježbate - izvlačenje konstanti, eliminacija dupliciranja i pisanje jasne dokumentacije - temeljne su za profesionalni razvoj softvera.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.