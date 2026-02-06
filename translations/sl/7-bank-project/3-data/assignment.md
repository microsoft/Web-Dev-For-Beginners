# Naloga za prestrukturiranje kode in dokumentacijo

## Cilji učenja

Z dokončanjem te naloge boste vadili ključne veščine razvoja programske opreme, ki jih profesionalni razvijalci uporabljajo vsakodnevno. Naučili se boste organizirati kodo za boljšo vzdržljivost, zmanjšati podvajanje z abstrakcijo in dokumentirati svoje delo za prihodnje razvijalce (vključno z vami!).

Čista, dobro dokumentirana koda je ključnega pomena za resnične projekte spletnega razvoja, kjer sodeluje več razvijalcev in se kode sčasoma razvijajo.

## Pregled naloge

Datoteka `app.js` vaše bančne aplikacije se je znatno povečala z dodajanjem funkcionalnosti za prijavo, registracijo in nadzorno ploščo. Čas je, da to kodo prestrukturirate z uporabo profesionalnih razvojnih praks za izboljšanje berljivosti, vzdržljivosti in zmanjšanje podvajanja.

## Navodila

Preoblikujte trenutno kodo v `app.js` z uporabo teh treh osnovnih tehnik prestrukturiranja:

### 1. Izvlecite konfiguracijske konstante

**Naloga**: Ustvarite razdelek za konfiguracijo na vrhu datoteke z večkrat uporabnimi konstantami.

**Navodila za implementacijo:**
- Izvlecite osnovni URL strežniškega API-ja (trenutno je trdo kodiran na več mestih)
- Ustvarite konstante za sporočila o napakah, ki se pojavljajo v več funkcijah
- Razmislite o izvleku poti do strani in ID-jev elementov, ki se pogosto uporabljajo

**Primer strukture:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Ustvarite enotno funkcijo za zahteve

**Naloga**: Zgradite večkrat uporabno funkcijo `sendRequest()`, ki bo odpravila podvajanje kode med funkcijama `createAccount()` in `getAccount()`.

**Zahteve:**
- Obdelava tako GET kot POST zahtev
- Vključitev ustreznega ravnanja z napakami
- Podpora različnim URL končnim točkam
- Sprejemanje opcijskih podatkov za telo zahteve

**Smernice za podpis funkcije:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Dodajte profesionalno dokumentacijo kode

**Naloga**: Dokumentirajte svojo kodo z jasnimi, koristnimi komentarji, ki pojasnjujejo "zakaj" za vašo logiko.

**Standardi dokumentacije:**
- Dodajte dokumentacijo funkcij, ki pojasnjuje namen, parametre in vrnjene vrednosti
- Vključite komentarje znotraj kode za kompleksno logiko ali poslovna pravila
- Združite povezane funkcije skupaj z naslovi razdelkov
- Pojasnite kakršne koli nejasne vzorce kode ali rešitve specifične za brskalnik

**Primer sloga dokumentacije:**
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

## Merila uspešnosti

Vaša prestrukturirana koda naj prikazuje te profesionalne razvojne prakse:

### Izjemna izvedba
- ✅ **Konstante**: Vse magične nize in URL-je so izvlečene v jasno poimenovane konstante
- ✅ **Načelo DRY**: Skupna logika zahtev je združena v večkrat uporabno funkcijo `sendRequest()`
- ✅ **Dokumentacija**: Funkcije imajo jasne JSDoc komentarje, ki pojasnjujejo namen in parametre
- ✅ **Organizacija**: Koda je logično združena z naslovi razdelkov in doslednim formatiranjem
- ✅ **Ravnanje z napakami**: Izboljšano ravnanje z napakami z uporabo nove funkcije za zahteve

### Zadostna izvedba
- ✅ **Konstante**: Večina ponavljajočih se vrednosti je izvlečenih, z nekaj preostalimi trdo kodiranimi vrednostmi
- ✅ **Faktorizacija**: Osnovna funkcija `sendRequest()` je ustvarjena, vendar morda ne obravnava vseh robnih primerov
- ✅ **Komentarji**: Ključne funkcije so dokumentirane, čeprav bi lahko bile nekatere razlage bolj izčrpne
- ✅ **Berljivost**: Koda je na splošno dobro organizirana, z nekaj področji za izboljšanje

### Potrebne izboljšave
- ❌ **Konstante**: Veliko magičnih nizov in URL-jev ostaja trdo kodiranih po celotni datoteki
- ❌ **Podvajanje**: Pomembno podvajanje kode ostaja med podobnimi funkcijami
- ❌ **Dokumentacija**: Manjkajoči ali neustrezni komentarji, ki ne pojasnjujejo namena kode
- ❌ **Organizacija**: Koda nima jasne strukture in logičnega združevanja

## Testiranje prestrukturirane kode

Po prestrukturiranju se prepričajte, da vaša bančna aplikacija še vedno deluje pravilno:

1. **Preizkusite vse uporabniške tokove**: Registracija, prijava, prikaz nadzorne plošče in ravnanje z napakami
2. **Preverite API klice**: Preverite, ali funkcija `sendRequest()` deluje za ustvarjanje in pridobivanje računov
3. **Preverite scenarije napak**: Testirajte z neveljavnimi poverilnicami in napakami omrežja
4. **Preglejte izhod v konzoli**: Prepričajte se, da med prestrukturiranjem ni prišlo do novih napak

## Smernice za oddajo

Oddajte svojo prestrukturirano datoteko `app.js` z:
- Jasnimi naslovi razdelkov, ki organizirajo različne funkcionalnosti
- Dosledno formatiranje in zamik kode
- Popolno JSDoc dokumentacijo za vse funkcije
- Kratek komentar na vrhu, ki pojasnjuje vaš pristop k prestrukturiranju

**Bonus izziv**: Ustvarite preprosto datoteko za dokumentacijo kode (`CODE_STRUCTURE.md`), ki pojasnjuje arhitekturo vaše aplikacije in kako različne funkcije delujejo skupaj.

## Povezava z resničnim svetom

Ta naloga odraža vrsto vzdrževanja kode, ki ga profesionalni razvijalci redno izvajajo. V industrijskem okolju:
- **Pregledi kode** ocenjujejo berljivost in vzdržljivost, kot pri tej nalogi
- **Tehnični dolg** se kopiči, ko koda ni redno prestrukturirana in dokumentirana
- **Sodelovanje v ekipi** je odvisno od jasne, dobro dokumentirane kode, ki jo lahko razumejo novi člani ekipe
- **Odpravljanje napak** je veliko lažje v dobro organiziranih kodnih bazah z ustreznimi abstrakcijami

Veščine, ki jih tukaj vadite - izvlekanje konstant, odpravljanje podvajanja in pisanje jasne dokumentacije - so temeljne za profesionalni razvoj programske opreme.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.