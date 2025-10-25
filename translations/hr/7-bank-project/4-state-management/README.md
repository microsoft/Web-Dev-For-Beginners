<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-25T00:03:57+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "hr"
}
-->
# Izrada aplikacije za bankarstvo, dio 4: Koncepti upravljanja stanjem

## Kviz prije predavanja

[Pre-predavački kviz](https://ff-quizzes.netlify.app/web/quiz/47)

## Uvod

Upravljanje stanjem u aplikaciji je poput navigacijskog sustava na svemirskoj letjelici Voyager – kada sve radi glatko, jedva primijetite da postoji. Ali kad nešto pođe po zlu, postaje razlika između dolaska u međuzvjezdani prostor i lutanja izgubljenog u kozmičkom bespuću. U web razvoju, stanje predstavlja sve što vaša aplikacija treba zapamtiti: status prijave korisnika, podatke iz obrazaca, povijest navigacije i privremena stanja sučelja.

Kako se vaša aplikacija za bankarstvo razvijala od jednostavnog obrasca za prijavu do sofisticiranije aplikacije, vjerojatno ste se susreli s nekim uobičajenim izazovima. Osvježite stranicu i korisnici se neočekivano odjavljuju. Zatvorite preglednik i sav napredak nestaje. Pokušavate otkloniti problem i tragate kroz više funkcija koje sve mijenjaju iste podatke na različite načine.

To nisu znakovi lošeg kodiranja – to su prirodne poteškoće koje se javljaju kada aplikacije dosegnu određeni prag složenosti. Svaki se programer suočava s tim izazovima dok njihove aplikacije prelaze iz "dokaza koncepta" u "proizvod spreman za upotrebu".

U ovoj lekciji implementirat ćemo centralizirani sustav upravljanja stanjem koji vašu aplikaciju za bankarstvo pretvara u pouzdanu, profesionalnu aplikaciju. Naučit ćete upravljati tokovima podataka predvidljivo, pravilno čuvati korisničke sesije i stvoriti glatko korisničko iskustvo koje moderne web aplikacije zahtijevaju.

## Preduvjeti

Prije nego što zaronite u koncepte upravljanja stanjem, trebate pravilno postaviti razvojno okruženje i imati temelj svoje aplikacije za bankarstvo. Ova lekcija izravno se nadovezuje na koncepte i kod iz prethodnih dijelova ove serije.

Provjerite imate li sljedeće komponente spremne prije nego što nastavite:

**Potrebna postavka:**
- Završite [lekciju o dohvaćanju podataka](../3-data/README.md) - vaša aplikacija treba uspješno učitati i prikazati podatke o računu
- Instalirajte [Node.js](https://nodejs.org) na vaš sustav za pokretanje pozadinskog API-ja
- Pokrenite [server API](../api/README.md) lokalno za rukovanje operacijama s podacima o računu

**Testiranje vašeg okruženja:**

Provjerite radi li vaš API server ispravno izvršavanjem ove naredbe u terminalu:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Što ova naredba radi:**
- **Šalje** GET zahtjev vašem lokalnom API serveru
- **Testira** vezu i provjerava odgovara li server
- **Vraća** informacije o verziji API-ja ako sve radi ispravno

---

## Dijagnosticiranje trenutnih problema sa stanjem

Kao Sherlock Holmes koji istražuje mjesto zločina, moramo razumjeti što se točno događa u našoj trenutnoj implementaciji prije nego što riješimo misterij nestanka korisničkih sesija.

Provedimo jednostavan eksperiment koji otkriva temeljne izazove upravljanja stanjem:

**🧪 Isprobajte ovaj dijagnostički test:**
1. Prijavite se u svoju aplikaciju za bankarstvo i idite na nadzornu ploču
2. Osvježite stranicu preglednika
3. Promatrajte što se događa s vašim statusom prijave

Ako ste preusmjereni natrag na zaslon za prijavu, otkrili ste klasičan problem s postojanošću stanja. Ovo ponašanje se događa jer naša trenutna implementacija pohranjuje korisničke podatke u JavaScript varijable koje se resetiraju pri svakom učitavanju stranice.

**Problemi trenutne implementacije:**

Jednostavna varijabla `account` iz naše [prethodne lekcije](../3-data/README.md) stvara tri značajna problema koja utječu i na korisničko iskustvo i na održivost koda:

| Problem | Tehnički uzrok | Utjecaj na korisnika |
|---------|----------------|----------------------|
| **Gubitak sesije** | Osvježavanje stranice briše JavaScript varijable | Korisnici se moraju često ponovno prijavljivati |
| **Raspršene promjene** | Više funkcija izravno mijenja stanje | Otklanjanje grešaka postaje sve teže |
| **Nepotpuno čišćenje** | Odjava ne briše sve reference stanja | Potencijalni sigurnosni i privatni problemi |

**Arhitektonski izazov:**

Kao što je dizajn Titanica s odvojenim odjeljcima izgledao robusno dok se više odjeljaka nije istovremeno napunilo vodom, rješavanje ovih problema pojedinačno neće riješiti temeljni arhitektonski problem. Potrebno nam je sveobuhvatno rješenje za upravljanje stanjem.

> 💡 **Što zapravo pokušavamo postići ovdje?**

[Upravljanje stanjem](https://en.wikipedia.org/wiki/State_management) zapravo se svodi na rješavanje dviju temeljnih zagonetki:

1. **Gdje su moji podaci?**: Praćenje koje informacije imamo i odakle dolaze
2. **Jesu li svi na istoj stranici?**: Osiguravanje da ono što korisnici vide odgovara onome što se zapravo događa

**Naš plan igre:**

Umjesto da se vrtimo u krug, stvorit ćemo **centralizirani sustav upravljanja stanjem**. Zamislite to kao da imate jednu stvarno organiziranu osobu koja je zadužena za sve važne stvari:

![Shema koja prikazuje tokove podataka između HTML-a, korisničkih akcija i stanja](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.hr.png)

**Razumijevanje ovog toka podataka:**
- **Centralizira** sve podatke aplikacije na jednom mjestu
- **Usmjerava** sve promjene stanja kroz kontrolirane funkcije
- **Osigurava** da sučelje ostane sinkronizirano s trenutnim stanjem
- **Pruža** jasan, predvidljiv obrazac za upravljanje podacima

> 💡 **Profesionalni uvid**: Ova lekcija fokusira se na temeljne koncepte. Za složene aplikacije, biblioteke poput [Redux](https://redux.js.org) nude naprednije značajke upravljanja stanjem. Razumijevanje ovih osnovnih principa pomoći će vam da savladate bilo koju biblioteku za upravljanje stanjem.

> ⚠️ **Napredna tema**: Nećemo pokrivati automatska ažuriranja sučelja koja se pokreću promjenama stanja, jer to uključuje koncepte [reaktivnog programiranja](https://en.wikipedia.org/wiki/Reactive_programming). Smatrajte ovo izvrsnim sljedećim korakom za vaš proces učenja!

### Zadatak: Centralizacija strukture stanja

Započnimo transformaciju našeg raspršenog upravljanja stanjem u centralizirani sustav. Ovaj prvi korak postavlja temelj za sve nadolazeće poboljšanja.

**Korak 1: Kreirajte centralizirani objekt stanja**

Zamijenite jednostavnu deklaraciju `account`:

```js
let account = null;
```

Strukturiranim objektom stanja:

```js
let state = {
  account: null
};
```

**Zašto je ova promjena važna:**
- **Centralizira** sve podatke aplikacije na jednom mjestu
- **Priprema** strukturu za dodavanje više svojstava stanja kasnije
- **Stvara** jasnu granicu između stanja i drugih varijabli
- **Postavlja** obrazac koji se skalira kako vaša aplikacija raste

**Korak 2: Ažurirajte obrasce pristupa stanju**

Ažurirajte svoje funkcije kako bi koristile novu strukturu stanja:

**U funkcijama `register()` i `login()`**, zamijenite:
```js
account = ...
```

S:
```js
state.account = ...
```

**U funkciji `updateDashboard()`**, dodajte ovu liniju na vrh:
```js
const account = state.account;
```

**Što ove promjene postižu:**
- **Održavaju** postojeću funkcionalnost uz poboljšanje strukture
- **Pripremaju** vaš kod za sofisticiranije upravljanje stanjem
- **Stvaraju** dosljedne obrasce za pristup podacima stanja
- **Postavljaju** temelj za centralizirana ažuriranja stanja

> 💡 **Napomena**: Ovo preuređenje ne rješava odmah naše probleme, ali stvara ključni temelj za moćna poboljšanja koja slijede!

## Implementacija kontroliranih ažuriranja stanja

S našim stanjem centraliziranim, sljedeći korak uključuje uspostavljanje kontroliranih mehanizama za izmjene podataka. Ovaj pristup osigurava predvidljive promjene stanja i olakšava otklanjanje grešaka.

Osnovni princip nalikuje kontroli zračnog prometa: umjesto da se dopušta više funkcija da neovisno mijenjaju stanje, sve promjene ćemo kanalizirati kroz jednu kontroliranu funkciju. Ovaj obrazac pruža jasan pregled kada i kako dolazi do promjena podataka.

**Upravljanje nepromjenjivim stanjem:**

Naš objekt `state` tretirat ćemo kao [*nepromjenjiv*](https://en.wikipedia.org/wiki/Immutable_object), što znači da ga nikada nećemo izravno mijenjati. Umjesto toga, svaka promjena stvara novi objekt stanja s ažuriranim podacima.

Iako se ovaj pristup u početku može činiti neučinkovitim u usporedbi s izravnim izmjenama, pruža značajne prednosti za otklanjanje grešaka, testiranje i održavanje predvidljivosti aplikacije.

**Prednosti upravljanja nepromjenjivim stanjem:**

| Prednost | Opis | Utjecaj |
|----------|------|---------|
| **Predvidljivost** | Promjene se događaju samo kroz kontrolirane funkcije | Lakše za otklanjanje grešaka i testiranje |
| **Praćenje povijesti** | Svaka promjena stanja stvara novi objekt | Omogućuje funkcionalnost poništavanja/ponovnog izvršavanja |
| **Prevencija nuspojava** | Nema slučajnih izmjena | Sprječava misteriozne greške |
| **Optimizacija performansi** | Lako je otkriti kada se stanje stvarno promijenilo | Omogućuje učinkovita ažuriranja sučelja |

**Nepromjenjivost u JavaScriptu s `Object.freeze()`:**

JavaScript pruža [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) za sprječavanje izmjena objekata:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Razlaganje onoga što se ovdje događa:**
- **Sprječava** izravna dodjeljivanja ili brisanja svojstava
- **Izbacuje** iznimke ako se pokušaju izvršiti izmjene
- **Osigurava** da promjene stanja moraju proći kroz kontrolirane funkcije
- **Stvara** jasan ugovor o tome kako se stanje može ažurirati

> 💡 **Dubinsko istraživanje**: Saznajte razliku između *plitkih* i *dubokih* nepromjenjivih objekata u [MDN dokumentaciji](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Razumijevanje ove razlike ključno je za složene strukture stanja.

### Zadatak

Kreirajmo novu funkciju `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

U ovoj funkciji stvaramo novi objekt stanja i kopiramo podatke iz prethodnog stanja koristeći [*operator širenja (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Zatim nadjačavamo određeno svojstvo objekta stanja novim podacima koristeći [notaciju zagrada](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` za dodjelu. Na kraju, zaključavamo objekt kako bismo spriječili izmjene koristeći `Object.freeze()`. Trenutno imamo samo svojstvo `account` pohranjeno u stanju, ali s ovim pristupom možete dodati koliko god želite svojstava u stanje.

Također ćemo ažurirati inicijalizaciju `state` kako bismo osigurali da je početno stanje također zaključano:

```js
let state = Object.freeze({
  account: null
});
```

Nakon toga, ažurirajte funkciju `register` zamjenom dodjele `state.account = result;` s:

```js
updateState('account', result);
```

Učinite isto s funkcijom `login`, zamjenjujući `state.account = data;` s:

```js
updateState('account', data);
```

Sada ćemo iskoristiti priliku da riješimo problem nečišćenja podataka o računu kada korisnik klikne na *Odjava*.

Kreirajte novu funkciju `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

U `updateDashboard()`, zamijenite preusmjeravanje `return navigate('/login');` s `return logout();`;

Pokušajte registrirati novi račun, odjaviti se i ponovno prijaviti kako biste provjerili radi li sve ispravno.

> Savjet: možete pogledati sve promjene stanja dodavanjem `console.log(state)` na dno `updateState()` i otvaranjem konzole u alatima za razvoj vašeg preglednika.

## Implementacija postojanosti podataka

Problem gubitka sesije koji smo ranije identificirali zahtijeva rješenje za postojanost koje održava korisničko stanje tijekom sesija preglednika. Ovo transformira našu aplikaciju iz privremenog iskustva u pouzdan, profesionalni alat.

Razmislite o tome kako atomski satovi održavaju precizno vrijeme čak i tijekom prekida napajanja pohranjujući ključne podatke u nehlapljivu memoriju. Slično tome, web aplikacijama su potrebni mehanizmi za trajnu pohranu kako bi sačuvale bitne korisničke podatke tijekom sesija preglednika i osvježavanja stranica.

**Strateška pitanja za postojanost podataka:**

Prije implementacije postojanosti, razmotrite ove ključne čimbenike:

| Pitanje | Kontekst aplikacije za bankarstvo | Utjecaj odluke |
|---------|-----------------------------------|----------------|
| **Jesu li podaci osjetljivi?** | Stanje računa, povijest transakcija | Odabir sigurnih metoda pohrane |
| **Koliko dugo bi trebali trajati?** | Stanje prijave naspram privremenih postavki sučelja | Odabir odgovarajućeg trajanja pohrane |
| **Treba li ih server?** | Tokeni za autentifikaciju naspram postavki sučelja | Određivanje zahtjeva za dijeljenje |

**Opcije pohrane u pregledniku:**

Moderni preglednici pružaju nekoliko mehanizama za pohranu, svaki dizajniran za različite slučajeve upotrebe:

**Primarni API-ji za pohranu:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Trajna [Key/Value pohrana](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Traje** podatke kroz sesije preglednika neograničeno  
   - **Preživljava** ponovno pokretanje preglednika i računala
   - **Ograničen** na specifičnu domenu web stranice
   - **Savršen** za korisničke postavke i stanja prijave

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Privremena pohrana sesije
   - **Funkcionira** identično kao localStorage tijekom aktivnih sesija
   - **Briše** se automatski kada se zatvori kartica preglednika
   - **Idealno** za privremene podatke koji ne bi trebali trajati

3. **[HTTP kolačići](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Pohrana dijeljena sa serverom
   - **Automatski** se šalje sa svakim zahtjevom serveru
   - **Savršeno** za [autentifikacijske](https://en.wikipedia.org/wiki/Authentication) tokene
   - **Ograničeno** veličinom i može utjecati na performanse

**Zahtjev za serijalizacijom podataka:**

I `localStorage` i `sessionStorage` pohranjuju samo [stringove](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Razumijevanje serijalizacije:**
- **Pretvara** JavaScript objekte u JSON stringove koristeći [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Rekonstruira** objekte iz JSON-a koristeći [`JSON.parse()`](
> 💡 **Napredna opcija**: Za složene offline aplikacije s velikim skupovima podataka, razmotrite [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Pruža punu bazu podataka na strani klijenta, ali zahtijeva složeniju implementaciju.

### Zadatak: Implementacija lokalne pohrane (localStorage) za trajnost podataka

Implementirajmo trajnu pohranu kako bi korisnici ostali prijavljeni dok se eksplicitno ne odjave. Koristit ćemo `localStorage` za pohranu podataka o računu između sesija preglednika.

**Korak 1: Definirajte konfiguraciju pohrane**

```js
const storageKey = 'savedAccount';
```

**Što ova konstanta omogućuje:**
- **Stvara** dosljedan identifikator za naše pohranjene podatke
- **Sprječava** tipografske pogreške u referencama ključeva pohrane
- **Olakšava** promjenu ključa pohrane ako je potrebno
- **Prati** najbolje prakse za održavanje koda

**Korak 2: Dodajte automatsku trajnost**

Dodajte ovu liniju na kraj funkcije `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Razlaganje onoga što se ovdje događa:**
- **Pretvara** objekt računa u JSON string za pohranu
- **Spremanje** podataka koristeći naš dosljedan ključ pohrane
- **Izvršava** se automatski kad god dođe do promjena stanja
- **Osigurava** da su pohranjeni podaci uvijek sinkronizirani s trenutnim stanjem

> 💡 **Prednost arhitekture**: Budući da smo centralizirali sva ažuriranja stanja kroz `updateState()`, dodavanje trajnosti zahtijevalo je samo jednu liniju koda. Ovo pokazuje snagu dobrih arhitektonskih odluka!

**Korak 3: Vratite stanje pri učitavanju aplikacije**

Kreirajte funkciju za inicijalizaciju kako biste vratili spremljene podatke:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Razumijevanje procesa inicijalizacije:**
- **Dohvaća** prethodno spremljene podatke o računu iz localStorage
- **Parsira** JSON string natrag u JavaScript objekt
- **Ažurira** stanje koristeći našu kontroliranu funkciju ažuriranja
- **Vraća** korisničku sesiju automatski pri učitavanju stranice
- **Izvršava** se prije ažuriranja ruta kako bi osigurao dostupnost stanja

**Korak 4: Optimizirajte zadanu rutu**

Ažurirajte zadanu rutu kako biste iskoristili trajnost:

U `updateRoute()`, zamijenite:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Zašto ova promjena ima smisla:**
- **Iskorištava** naš novi sustav trajnosti učinkovito
- **Omogućuje** da dashboard provjerava autentifikaciju
- **Automatski preusmjerava** na prijavu ako ne postoji spremljena sesija
- **Stvara** besprijekorno korisničko iskustvo

**Testiranje vaše implementacije:**

1. Prijavite se u svoju aplikaciju za bankarstvo
2. Osvježite stranicu preglednika
3. Provjerite ostajete li prijavljeni i na dashboardu
4. Zatvorite i ponovno otvorite preglednik
5. Vratite se u aplikaciju i potvrdite da ste još uvijek prijavljeni

🎉 **Postignuće otključano**: Uspješno ste implementirali upravljanje trajnim stanjem! Vaša aplikacija sada se ponaša kao profesionalna web aplikacija.

## Balansiranje trajnosti s svježinom podataka

Naš sustav trajnosti uspješno održava korisničke sesije, ali uvodi novi izazov: zastarjelost podataka. Kada više korisnika ili aplikacija mijenja iste podatke na serveru, lokalno spremljene informacije postaju zastarjele.

Ova situacija podsjeća na vikinške navigatore koji su se oslanjali na pohranjene karte zvijezda i trenutna opažanja nebeskih tijela. Karte su pružale dosljednost, ali navigatori su trebali svježa opažanja kako bi uzeli u obzir promjenjive uvjete. Slično tome, naša aplikacija treba i trajno korisničko stanje i svježe podatke sa servera.

**🧪 Otkrivanje problema zastarjelosti podataka:**

1. Prijavite se na dashboard koristeći račun `test`
2. Pokrenite ovu naredbu u terminalu kako biste simulirali transakciju iz drugog izvora:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Osvježite stranicu dashboarda u pregledniku
4. Promatrajte prikazuje li se nova transakcija

**Što ovaj test pokazuje:**
- **Pokazuje** kako localStorage može postati "zastario" (zastarjeli podaci)
- **Simulira** scenarije iz stvarnog svijeta gdje se podaci mijenjaju izvan vaše aplikacije
- **Otkriva** napetost između trajnosti i svježine podataka

**Izazov zastarjelosti podataka:**

| Problem | Uzrok | Utjecaj na korisnika |
|---------|-------|----------------------|
| **Zastarjeli podaci** | localStorage se nikada automatski ne ažurira | Korisnici vide zastarjele informacije |
| **Promjene na serveru** | Druge aplikacije/korisnici mijenjaju iste podatke | Nekonzistentni prikazi na različitim platformama |
| **Cache vs. stvarnost** | Lokalna pohrana ne odgovara stanju na serveru | Loše korisničko iskustvo i zbunjenost |

**Strategija rješenja:**

Implementirat ćemo uzorak "osvježavanja pri učitavanju" koji balansira prednosti trajnosti s potrebom za svježim podacima. Ovaj pristup održava glatko korisničko iskustvo uz osiguranje točnosti podataka.

### Zadatak: Implementacija sustava za osvježavanje podataka

Kreirat ćemo sustav koji automatski dohvaća svježe podatke sa servera dok zadržava prednosti našeg sustava trajnog stanja.

**Korak 1: Kreirajte funkciju za ažuriranje podataka o računu**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Razumijevanje logike ove funkcije:**
- **Provjerava** je li korisnik trenutno prijavljen (postoji state.account)
- **Preusmjerava** na odjavu ako ne postoji valjana sesija
- **Dohvaća** svježe podatke o računu sa servera koristeći postojeću funkciju `getAccount()`
- **Rukuje** greškama servera graciozno odjavljujući nevaljane sesije
- **Ažurira** stanje svježim podacima koristeći naš kontrolirani sustav ažuriranja
- **Pokreće** automatsku trajnost localStorage putem funkcije `updateState()`

**Korak 2: Kreirajte funkciju za osvježavanje dashboarda**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Što ova funkcija osvježavanja postiže:**
- **Koordinira** proces osvježavanja podataka i ažuriranja korisničkog sučelja
- **Čeka** da se učitaju svježi podaci prije ažuriranja prikaza
- **Osigurava** da dashboard prikazuje najnovije informacije
- **Održava** čistu razliku između upravljanja podacima i ažuriranja korisničkog sučelja

**Korak 3: Integracija s sustavom ruta**

Ažurirajte konfiguraciju ruta kako biste automatski pokrenuli osvježavanje:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Kako ova integracija funkcionira:**
- **Izvršava** funkciju osvježavanja svaki put kad se učita ruta dashboarda
- **Osigurava** da se svježi podaci uvijek prikazuju kad korisnici pristupe dashboardu
- **Održava** postojeću strukturu ruta uz dodavanje svježine podataka
- **Pruža** dosljedan uzorak za inicijalizaciju specifičnu za rute

**Testiranje vašeg sustava za osvježavanje podataka:**

1. Prijavite se u svoju aplikaciju za bankarstvo
2. Pokrenite curl naredbu od ranije kako biste kreirali novu transakciju
3. Osvježite stranicu dashboarda ili se prebacite na drugu stranicu pa se vratite
4. Provjerite prikazuje li se nova transakcija odmah

🎉 **Postignut savršen balans**: Vaša aplikacija sada kombinira glatko iskustvo trajnog stanja s točnošću svježih podataka sa servera!

## Izazov za GitHub Copilot agenta 🚀

Koristite Agent način rada za dovršavanje sljedećeg izazova:

**Opis:** Implementirajte sveobuhvatan sustav upravljanja stanjem s funkcionalnošću poništavanja/ponovnog izvršavanja za aplikaciju za bankarstvo. Ovaj izazov pomoći će vam da vježbate napredne koncepte upravljanja stanjem, uključujući praćenje povijesti stanja, nepromjenjiva ažuriranja i sinkronizaciju korisničkog sučelja.

**Zadatak:** Kreirajte poboljšani sustav upravljanja stanjem koji uključuje: 1) Niz povijesti stanja koji prati sva prethodna stanja, 2) Funkcije za poništavanje i ponovno izvršavanje koje mogu vratiti prethodna stanja, 3) UI gumbe za operacije poništavanja/ponovnog izvršavanja na dashboardu, 4) Maksimalni limit povijesti od 10 stanja kako bi se spriječili problemi s memorijom, i 5) Pravilno čišćenje povijesti kada se korisnik odjavi. Osigurajte da funkcionalnost poništavanja/ponovnog izvršavanja radi s promjenama stanja računa i da se trajno pohranjuje između osvježavanja preglednika.

Saznajte više o [Agent načinu rada](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov: Optimizacija pohrane

Vaša implementacija sada učinkovito upravlja korisničkim sesijama, osvježavanjem podataka i stanjem. Međutim, razmislite je li naš trenutni pristup optimalno balansiran između učinkovitosti pohrane i funkcionalnosti.

Poput šahovskih majstora koji razlikuju ključne figure od onih koje se mogu žrtvovati, učinkovito upravljanje stanjem zahtijeva prepoznavanje podataka koji moraju biti trajno pohranjeni naspram onih koji bi uvijek trebali biti svježi sa servera.

**Analiza optimizacije:**

Procijenite svoju trenutnu implementaciju localStorage i razmotrite ova strateška pitanja:
- Koje su minimalne informacije potrebne za održavanje autentifikacije korisnika?
- Koji se podaci mijenjaju dovoljno često da lokalno predmemoriranje pruža malo koristi?
- Kako optimizacija pohrane može poboljšati performanse bez narušavanja korisničkog iskustva?

**Strategija implementacije:**
- **Identificirajte** ključne podatke koji moraju biti trajno pohranjeni (vjerojatno samo identifikacija korisnika)
- **Modificirajte** svoju implementaciju localStorage kako biste pohranjivali samo kritične podatke sesije
- **Osigurajte** da se svježi podaci uvijek učitavaju sa servera prilikom posjeta dashboardu
- **Testirajte** da vaš optimizirani pristup održava isto korisničko iskustvo

**Napredna razmatranja:**
- **Usporedite** kompromise između pohrane punih podataka o računu i samo autentifikacijskih tokena
- **Dokumentirajte** svoje odluke i razloge za buduće članove tima

Ovaj izazov pomoći će vam da razmišljate kao profesionalni programer koji uzima u obzir i korisničko iskustvo i učinkovitost aplikacije. Uzmite si vremena za eksperimentiranje s različitim pristupima!

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/48)

## Zadatak

[Implementirajte dijalog "Dodaj transakciju"](assignment.md)

Evo primjera rezultata nakon dovršetka zadatka:

![Snimka zaslona koja prikazuje primjer dijaloga "Dodaj transakciju"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.hr.png)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.