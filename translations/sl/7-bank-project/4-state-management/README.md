<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-25T00:34:46+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "sl"
}
-->
# Izdelava bančne aplikacije, 4. del: Koncepti upravljanja stanja

## Predhodni kviz pred predavanjem

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/47)

## Uvod

Upravljanje stanja je kot navigacijski sistem na vesoljski ladji Voyager – ko vse deluje gladko, komaj opazite, da obstaja. Ko pa gre kaj narobe, je to razlika med dosego medzvezdnega prostora in izgubljenim plovom v kozmični praznini. V spletnem razvoju stanje predstavlja vse, kar mora vaša aplikacija zapomniti: status prijave uporabnika, podatke obrazcev, zgodovino navigacije in začasna stanja vmesnika.

Ko se je vaša bančna aplikacija razvila iz preprostega obrazca za prijavo v bolj sofisticirano aplikacijo, ste verjetno naleteli na nekaj pogostih izzivov. Osvežite stran in uporabniki se nepričakovano odjavijo. Zaprite brskalnik in ves napredek izgine. Odpravljate težave in iščete po več funkcijah, ki vse na različne načine spreminjajo iste podatke.

To niso znaki slabega kodiranja – to so naravne težave, ki se pojavijo, ko aplikacije dosežejo določeno stopnjo kompleksnosti. Vsak razvijalec se sooča s temi izzivi, ko njegove aplikacije preidejo iz "dokaza koncepta" v "produkcijsko pripravljenost".

V tej lekciji bomo implementirali centraliziran sistem upravljanja stanja, ki bo vašo bančno aplikacijo spremenil v zanesljivo, profesionalno aplikacijo. Naučili se boste upravljati tokove podatkov na predvidljiv način, ustrezno ohranjati uporabniške seje in ustvariti gladko uporabniško izkušnjo, ki jo zahtevajo sodobne spletne aplikacije.

## Predpogoji

Preden se poglobite v koncepte upravljanja stanja, morate pravilno nastaviti razvojno okolje in imeti pripravljeno osnovo za vašo bančno aplikacijo. Ta lekcija se neposredno navezuje na koncepte in kodo iz prejšnjih delov te serije.

Prepričajte se, da imate pripravljene naslednje komponente:

**Potrebna nastavitev:**
- Zaključite [lekcijo o pridobivanju podatkov](../3-data/README.md) - vaša aplikacija mora uspešno naložiti in prikazati podatke o računu
- Namestite [Node.js](https://nodejs.org) na vaš sistem za zagon API-ja na strežniku
- Lokalno zaženite [strežniški API](../api/README.md) za upravljanje operacij s podatki o računu

**Preverjanje vašega okolja:**

Preverite, ali vaš API strežnik pravilno deluje, tako da v terminalu izvedete naslednji ukaz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Kaj ta ukaz naredi:**
- **Pošlje** GET zahtevo na vaš lokalni API strežnik
- **Preveri** povezavo in potrdi, da strežnik odgovarja
- **Vrne** informacije o različici API-ja, če vse deluje pravilno

---

## Diagnosticiranje težav trenutnega stanja

Kot Sherlock Holmes, ki preučuje prizorišče zločina, moramo natančno razumeti, kaj se dogaja v naši trenutni implementaciji, preden lahko rešimo skrivnost izginjajočih uporabniških sej.

Izvedimo preprost eksperiment, ki razkriva osnovne izzive upravljanja stanja:

**🧪 Poskusite ta diagnostični test:**
1. Prijavite se v svojo bančno aplikacijo in se pomaknite na nadzorno ploščo
2. Osvežite stran brskalnika
3. Opazujte, kaj se zgodi z vašim statusom prijave

Če ste bili preusmerjeni nazaj na zaslon za prijavo, ste odkrili klasičen problem ohranjanja stanja. To vedenje se pojavi, ker naša trenutna implementacija shranjuje podatke uporabnika v JavaScript spremenljivke, ki se ob vsakem osveževanju strani ponastavijo.

**Težave trenutne implementacije:**

Preprosta spremenljivka `account` iz naše [prejšnje lekcije](../3-data/README.md) povzroča tri pomembne težave, ki vplivajo tako na uporabniško izkušnjo kot na vzdrževanje kode:

| Težava | Tehnični vzrok | Vpliv na uporabnika |
|--------|----------------|---------------------|
| **Izguba seje** | Osvežitev strani izbriše JavaScript spremenljivke | Uporabniki se morajo pogosto znova prijaviti |
| **Razpršene posodobitve** | Več funkcij neposredno spreminja stanje | Odpravljanje napak postaja vse težje |
| **Nepopolno čiščenje** | Odjava ne izbriše vseh referenc stanja | Možne varnostne in zasebnostne težave |

**Arhitekturni izziv:**

Kot zasnova predelkov Titanika, ki se je zdela robustna, dokler ni hkrati poplavilo več predelkov, reševanje teh težav posamično ne bo odpravilo osnovnega arhitekturnega problema. Potrebujemo celovito rešitev za upravljanje stanja.

> 💡 **Kaj pravzaprav poskušamo doseči tukaj?**

[Upravljanje stanja](https://en.wikipedia.org/wiki/State_management) je v bistvu reševanje dveh temeljnih ugank:

1. **Kje so moji podatki?**: Sledenje, katere informacije imamo in od kod prihajajo
2. **Ali smo vsi na isti strani?**: Zagotavljanje, da to, kar uporabniki vidijo, ustreza temu, kar se dejansko dogaja

**Načrt igre:**

Namesto da se vrtimo v krogu, bomo ustvarili **centraliziran sistem upravljanja stanja**. Pomislite na to kot na eno res organizirano osebo, ki je odgovorna za vse pomembne stvari:

![Shema, ki prikazuje tok podatkov med HTML-jem, uporabniškimi akcijami in stanjem](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.sl.png)

**Razumevanje tega toka podatkov:**
- **Centralizira** vse stanje aplikacije na enem mestu
- **Usmerja** vse spremembe stanja skozi nadzorovane funkcije
- **Zagotavlja**, da je UI sinhroniziran s trenutnim stanjem
- **Omogoča** jasen, predvidljiv vzorec za upravljanje podatkov

> 💡 **Profesionalni vpogled**: Ta lekcija se osredotoča na temeljne koncepte. Za kompleksne aplikacije knjižnice, kot je [Redux](https://redux.js.org), ponujajo naprednejše funkcije upravljanja stanja. Razumevanje teh osnovnih principov vam bo pomagalo obvladati katerokoli knjižnico za upravljanje stanja.

> ⚠️ **Napredna tema**: Ne bomo obravnavali samodejnih posodobitev UI, ki jih sprožijo spremembe stanja, saj to vključuje koncepte [reaktivnega programiranja](https://en.wikipedia.org/wiki/Reactive_programming). To lahko obravnavate kot odličen naslednji korak v vašem učnem procesu!

### Naloga: Centralizacija strukture stanja

Začnimo s preoblikovanjem našega razpršenega upravljanja stanja v centraliziran sistem. Ta prvi korak postavlja temelje za vse izboljšave, ki sledijo.

**Korak 1: Ustvarite centralni objekt stanja**

Zamenjajte preprosto deklaracijo `account`:

```js
let account = null;
```

S strukturiranim objektom stanja:

```js
let state = {
  account: null
};
```

**Zakaj je ta sprememba pomembna:**
- **Centralizira** vse podatke aplikacije na enem mestu
- **Pripravi** strukturo za dodajanje več lastnosti stanja kasneje
- **Ustvari** jasno mejo med stanjem in drugimi spremenljivkami
- **Vzpostavi** vzorec, ki se širi, ko vaša aplikacija raste

**Korak 2: Posodobite vzorce dostopa do stanja**

Posodobite svoje funkcije, da uporabljajo novo strukturo stanja:

**V funkcijah `register()` in `login()`**, zamenjajte:
```js
account = ...
```

S:
```js
state.account = ...
```

**V funkciji `updateDashboard()`**, dodajte to vrstico na vrh:
```js
const account = state.account;
```

**Kaj te posodobitve dosežejo:**
- **Ohranjajo** obstoječo funkcionalnost, hkrati pa izboljšujejo strukturo
- **Pripravljajo** vašo kodo za bolj sofisticirano upravljanje stanja
- **Ustvarjajo** dosledne vzorce za dostop do podatkov stanja
- **Vzpostavljajo** temelje za centralizirane posodobitve stanja

> 💡 **Opomba**: Ta preoblikovanja takoj ne rešijo naših težav, vendar ustvarjajo bistvene temelje za močne izboljšave, ki sledijo!

## Implementacija nadzorovanih posodobitev stanja

Z našim stanjem centraliziranim je naslednji korak vzpostavitev nadzorovanih mehanizmov za spremembe podatkov. Ta pristop zagotavlja predvidljive spremembe stanja in lažje odpravljanje napak.

Osnovno načelo je podobno nadzoru zračnega prometa: namesto da bi več funkcij neodvisno spreminjalo stanje, bomo vse spremembe usmerili skozi eno, nadzorovano funkcijo. Ta vzorec omogoča jasen pregled nad tem, kdaj in kako se podatki spreminjajo.

**Upravljanje nespremenljivega stanja:**

Naš objekt `state` bomo obravnavali kot [*nespremenljiv*](https://en.wikipedia.org/wiki/Immutable_object), kar pomeni, da ga nikoli ne spreminjamo neposredno. Namesto tega vsaka sprememba ustvari nov objekt stanja s posodobljenimi podatki.

Čeprav se ta pristop na začetku morda zdi manj učinkovit v primerjavi z neposrednimi spremembami, ponuja pomembne prednosti za odpravljanje napak, testiranje in ohranjanje predvidljivosti aplikacije.

**Prednosti upravljanja nespremenljivega stanja:**

| Prednost | Opis | Vpliv |
|----------|-------|-------|
| **Predvidljivost** | Spremembe se zgodijo le skozi nadzorovane funkcije | Lažje odpravljanje napak in testiranje |
| **Sledenje zgodovini** | Vsaka sprememba stanja ustvari nov objekt | Omogoča funkcionalnost razveljavitve/ponovnega izvajanja |
| **Preprečevanje stranskih učinkov** | Brez nenamernih sprememb | Preprečuje skrivnostne napake |
| **Optimizacija zmogljivosti** | Enostavno zaznavanje, kdaj se je stanje dejansko spremenilo | Omogoča učinkovite posodobitve UI |

**Nespremenljivost v JavaScriptu z `Object.freeze()`:**

JavaScript omogoča uporabo [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) za preprečevanje sprememb objektov:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Kaj se tukaj zgodi:**
- **Preprečuje** neposredne dodelitve ali brisanje lastnosti
- **Vrže** izjeme, če pride do poskusov sprememb
- **Zagotavlja**, da morajo spremembe stanja potekati skozi nadzorovane funkcije
- **Ustvari** jasen dogovor o tem, kako se lahko stanje posodablja

> 💡 **Poglobitev**: Preberite o razliki med *plitkimi* in *globokimi* nespremenljivimi objekti v [MDN dokumentaciji](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Razumevanje te razlike je ključno za kompleksne strukture stanja.

### Naloga

Ustvarimo novo funkcijo `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

V tej funkciji ustvarjamo nov objekt stanja in kopiramo podatke iz prejšnjega stanja z uporabo [*operatorja razširitve (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Nato prepišemo določeno lastnost objekta stanja z novimi podatki z uporabo [notacije z oglatimi oklepaji](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` za dodelitev. Na koncu zaklenemo objekt, da preprečimo spremembe z uporabo `Object.freeze()`. Trenutno imamo v stanju shranjeno samo lastnost `account`, vendar lahko s tem pristopom dodate toliko lastnosti, kot jih potrebujete.

Prav tako bomo posodobili inicializacijo `state`, da zagotovimo, da je začetno stanje tudi zamrznjeno:

```js
let state = Object.freeze({
  account: null
});
```

Nato posodobite funkcijo `register`, tako da zamenjate dodelitev `state.account = result;` z:

```js
updateState('account', result);
```

Enako storite s funkcijo `login`, tako da zamenjate `state.account = data;` z:

```js
updateState('account', data);
```

Zdaj bomo izkoristili priložnost, da odpravimo težavo, da se podatki o računu ne izbrišejo, ko uporabnik klikne na *Odjava*.

Ustvarite novo funkcijo `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

V funkciji `updateDashboard()` zamenjajte preusmeritev `return navigate('/login');` z `return logout();`.

Poskusite registrirati nov račun, se odjaviti in se znova prijaviti, da preverite, ali vse še vedno deluje pravilno.

> Nasvet: lahko si ogledate vse spremembe stanja tako, da dodate `console.log(state)` na dnu funkcije `updateState()` in odprete konzolo v orodjih za razvijalce vašega brskalnika.

## Implementacija ohranjanja podatkov

Težava izgube seje, ki smo jo identificirali prej, zahteva rešitev za ohranjanje, ki ohranja uporabniško stanje med sejami brskalnika. To spremeni našo aplikacijo iz začasne izkušnje v zanesljivo, profesionalno orodje.

Pomislite, kako atomske ure ohranjajo natančen čas tudi med izpadi elektrike, tako da shranjujejo ključne podatke v trajnem pomnilniku. Podobno morajo spletne aplikacije imeti mehanizme za trajno shranjevanje, da ohranijo bistvene uporabniške podatke med sejami brskalnika in osvežitvami strani.

**Strateška vprašanja za ohranjanje podatkov:**

Pred implementacijo ohranjanja razmislite o teh ključnih dejavnikih:

| Vprašanje | Kontekst bančne aplikacije | Vpliv odločitve |
|-----------|-----------------------------|----------------|
| **Ali so podatki občutljivi?** | Stanje računa, zgodovina transakcij | Izberite varne metode shranjevanja |
| **Kako dolgo naj trajajo?** | Stanje prijave proti začasnim nastavitvam UI | Izberite ustrezno trajanje shranjevanja |
| **Ali jih strežnik potrebuje?** | Avtentikacijski žetoni proti nastavitvam UI | Določite zahteve za deljenje |

**Možnosti shranjevanja v brskalniku:**

Sodobni brskalniki ponujajo več mehanizmov shranjevanja, od katerih je vsak zasnovan za različne primere uporabe:

**Primarni API-ji za shranjevanje:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Trajno [shranjevanje ključ/vrednost](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Ohranja** podatke med sejami brskalnika neomejeno dolgo  
   - **Preživi** ponovne zagon brskalnika in računalnika
   - **Omejen** na specifično domeno spletne strani
   - **Odličen** za uporabniške nastavitve in stanja prijave

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Začasno shranjevanje seje
   - **Deluje** enako kot localStorage med aktivnimi sejami
   - **Samodejno** se izbriše, ko se zapre zavihek brskalnika
   - **Idealno** za začasne podatke, ki ne smejo trajati

3. **[HTTP piškotki](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Shranjevanje, ki ga deli strežnik
   - **Samodejno** se pošlje z vsako zahtevo strežniku
   - **Odličen** za [avtentikacijske](https://en.wikipedia.org/wiki/Authentication) žetone
   - **Omejen** po velikosti in lahko vpliva na zmogljivost

**Potreba po serializaciji podatkov:**

Tako `localStorage` kot `sessionStorage` shranjujeta le [nize](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Razumevanje serializacije:**
- **Pretvori** JavaScript objekte v JSON nize z uporabo [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/Java
> 💡 **Napredna možnost**: Za kompleksne offline aplikacije z velikimi podatkovnimi nabori razmislite o [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ta omogoča popolno podatkovno bazo na strani odjemalca, vendar zahteva bolj zapleteno implementacijo.

### Naloga: Implementacija trajnosti z localStorage

Implementirajmo trajno shranjevanje, da uporabniki ostanejo prijavljeni, dokler se izrecno ne odjavijo. Uporabili bomo `localStorage` za shranjevanje podatkov o računu med sejami brskalnika.

**Korak 1: Določite konfiguracijo shranjevanja**

```js
const storageKey = 'savedAccount';
```

**Kaj omogoča ta konstanta:**
- **Ustvari** dosledno identifikacijo za naše shranjene podatke
- **Preprečuje** tipkarske napake pri sklicevanju na ključe shranjevanja
- **Olajša** spremembo ključa shranjevanja, če je potrebno
- **Sledi** najboljšim praksam za vzdrževanje kode

**Korak 2: Dodajte samodejno trajnost**

Dodajte to vrstico na konec funkcije `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Razčlenitev, kaj se tukaj zgodi:**
- **Pretvori** objekt računa v JSON niz za shranjevanje
- **Shrani** podatke z našim doslednim ključem shranjevanja
- **Izvede** samodejno ob vsaki spremembi stanja
- **Zagotovi**, da so shranjeni podatki vedno sinhronizirani s trenutnim stanjem

> 💡 **Prednost arhitekture**: Ker smo centralizirali vse posodobitve stanja prek `updateState()`, je dodajanje trajnosti zahtevalo le eno vrstico kode. To dokazuje moč dobrih arhitekturnih odločitev!

**Korak 3: Obnovite stanje ob zagonu aplikacije**

Ustvarite inicializacijsko funkcijo za obnovitev shranjenih podatkov:

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

**Razumevanje procesa inicializacije:**
- **Pridobi** vse prej shranjene podatke o računu iz localStorage
- **Razčleni** JSON niz nazaj v JavaScript objekt
- **Posodobi** stanje z uporabo naše nadzorovane funkcije za posodobitev
- **Samodejno obnovi** uporabniško sejo ob nalaganju strani
- **Izvede** pred posodobitvami poti, da zagotovi razpoložljivost stanja

**Korak 4: Optimizirajte privzeto pot**

Posodobite privzeto pot, da izkoristite trajnost:

V `updateRoute()` zamenjajte:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Zakaj je ta sprememba smiselna:**
- **Učinkovito izkoristi** naš nov sistem trajnosti
- **Omogoči**, da nadzorna plošča preveri avtentikacijo
- **Samodejno preusmeri** na prijavo, če ni shranjene seje
- **Ustvari** bolj brezhibno uporabniško izkušnjo

**Testiranje vaše implementacije:**

1. Prijavite se v svojo bančno aplikacijo
2. Osvežite stran brskalnika
3. Preverite, ali ostanete prijavljeni in na nadzorni plošči
4. Zaprite in ponovno odprite brskalnik
5. Ponovno obiščite aplikacijo in potrdite, da ste še vedno prijavljeni

🎉 **Dosežek odklenjen**: Uspešno ste implementirali upravljanje trajnega stanja! Vaša aplikacija se zdaj obnaša kot profesionalna spletna aplikacija.

## Uravnoteženje trajnosti z svežino podatkov

Naš sistem trajnosti uspešno ohranja uporabniške seje, vendar uvaja nov izziv: zastarelost podatkov. Ko več uporabnikov ali aplikacij spreminja iste podatke na strežniku, lokalno predpomnjene informacije postanejo zastarele.

Ta situacija je podobna vikinškim navigatorjem, ki so se zanašali na shranjene zvezdne karte in trenutna opazovanja neba. Karte so zagotavljale doslednost, vendar so navigatorji potrebovali sveža opazovanja za prilagoditev spreminjajočim se razmeram. Podobno naša aplikacija potrebuje tako trajno uporabniško stanje kot sveže podatke s strežnika.

**🧪 Odkritje problema zastarelosti podatkov:**

1. Prijavite se na nadzorno ploščo z računom `test`
2. Za simulacijo transakcije iz drugega vira zaženite ta ukaz v terminalu:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Osvežite stran nadzorne plošče v brskalniku
4. Opazujte, ali vidite novo transakcijo

**Kaj ta test pokaže:**
- **Prikaže**, kako lahko localStorage postane "zastarel" (neposodobljen)
- **Simulira** scenarije iz resničnega sveta, kjer se podatki spreminjajo zunaj vaše aplikacije
- **Razkriva** napetost med trajnostjo in svežino podatkov

**Izziv zastarelosti podatkov:**

| Problem | Vzrok | Vpliv na uporabnika |
|---------|-------|---------------------|
| **Zastareli podatki** | localStorage se nikoli samodejno ne izteče | Uporabniki vidijo zastarele informacije |
| **Spremembe na strežniku** | Druge aplikacije/uporabniki spreminjajo iste podatke | Nekonsistentni pogledi med platformami |
| **Predpomnilnik vs. resničnost** | Lokalni predpomnilnik ne ustreza stanju strežnika | Slaba uporabniška izkušnja in zmeda |

**Strategija rešitve:**

Implementirali bomo vzorec "osveži ob nalaganju", ki uravnoteži prednosti trajnosti s potrebo po svežih podatkih. Ta pristop ohranja gladko uporabniško izkušnjo, hkrati pa zagotavlja natančnost podatkov.

### Naloga: Implementacija sistema za osvežitev podatkov

Ustvarili bomo sistem, ki samodejno pridobi sveže podatke s strežnika, hkrati pa ohranja prednosti našega sistema trajnega stanja.

**Korak 1: Ustvarite posodobitveni sistem za podatke o računu**

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

**Razumevanje logike te funkcije:**
- **Preveri**, ali je uporabnik trenutno prijavljen (state.account obstaja)
- **Preusmeri** na odjavo, če ni veljavne seje
- **Pridobi** sveže podatke o računu s strežnika z uporabo obstoječe funkcije `getAccount()`
- **Upravi** napake strežnika na eleganten način z odjavo neveljavnih sej
- **Posodobi** stanje s svežimi podatki z uporabo našega nadzorovanega sistema za posodobitev
- **Samodejno sproži** trajnost localStorage prek funkcije `updateState()`

**Korak 2: Ustvarite upravljalnik osvežitve nadzorne plošče**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Kaj doseže ta funkcija za osvežitev:**
- **Uskladi** proces osvežitve podatkov in posodobitve uporabniškega vmesnika
- **Počaka**, da se naložijo sveži podatki, preden posodobi prikaz
- **Zagotovi**, da nadzorna plošča prikazuje najbolj aktualne informacije
- **Ohranja** jasno ločitev med upravljanjem podatkov in posodobitvami uporabniškega vmesnika

**Korak 3: Integracija s sistemom poti**

Posodobite konfiguracijo poti, da samodejno sproži osvežitev:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Kako deluje ta integracija:**
- **Izvede** funkcijo osvežitve vsakič, ko se naloži pot nadzorne plošče
- **Zagotovi**, da so sveži podatki vedno prikazani, ko uporabniki navigirajo na nadzorno ploščo
- **Ohranja** obstoječo strukturo poti, hkrati pa dodaja svežino podatkov
- **Omogoči** dosleden vzorec za inicializacijo specifično za pot

**Testiranje vašega sistema za osvežitev podatkov:**

1. Prijavite se v svojo bančno aplikacijo
2. Zaženite curl ukaz iz prej za ustvarjanje nove transakcije
3. Osvežite stran nadzorne plošče ali se premaknite stran in nazaj
4. Preverite, ali se nova transakcija takoj prikaže

🎉 **Doseženo popolno ravnovesje**: Vaša aplikacija zdaj združuje gladko izkušnjo trajnega stanja z natančnostjo svežih podatkov s strežnika!

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Implementirajte celovit sistem za upravljanje stanja z funkcionalnostjo razveljavitve/ponovne vzpostavitve za bančno aplikacijo. Ta izziv vam bo pomagal vaditi napredne koncepte upravljanja stanja, vključno s sledenjem zgodovini stanja, neizmenljivimi posodobitvami in sinhronizacijo uporabniškega vmesnika.

**Navodilo:** Ustvarite izboljšan sistem za upravljanje stanja, ki vključuje: 1) Polje zgodovine stanja, ki sledi vsem prejšnjim stanjem, 2) Funkcije razveljavitve in ponovne vzpostavitve, ki lahko povrnejo prejšnja stanja, 3) UI gumbe za operacije razveljavitve/ponovne vzpostavitve na nadzorni plošči, 4) Največjo omejitev zgodovine 10 stanj za preprečevanje težav s pomnilnikom, in 5) Ustrezno čiščenje zgodovine ob odjavi uporabnika. Zagotovite, da funkcionalnost razveljavitve/ponovne vzpostavitve deluje s spremembami stanja računa in se ohrani med osvežitvami brskalnika.

Več o [načinu Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv: Optimizacija shranjevanja

Vaša implementacija zdaj učinkovito upravlja uporabniške seje, osvežitev podatkov in upravljanje stanja. Vendar razmislite, ali naš trenutni pristop optimalno uravnoteži učinkovitost shranjevanja s funkcionalnostjo.

Kot mojstri šaha, ki razlikujejo med ključnimi figurami in tistimi, ki jih je mogoče žrtvovati, učinkovito upravljanje stanja zahteva prepoznavanje, kateri podatki morajo trajati in kateri naj bodo vedno sveži s strežnika.

**Analiza optimizacije:**

Ocenite svojo trenutno implementacijo localStorage in razmislite o teh strateških vprašanjih:
- Kateri so minimalni podatki, potrebni za ohranjanje avtentikacije uporabnika?
- Kateri podatki se spreminjajo dovolj pogosto, da lokalno predpomnjenje ne prinaša koristi?
- Kako lahko optimizacija shranjevanja izboljša zmogljivost brez poslabšanja uporabniške izkušnje?

**Strategija implementacije:**
- **Identificirajte** ključne podatke, ki morajo trajati (verjetno le identifikacija uporabnika)
- **Spremenite** svojo implementacijo localStorage, da shranjuje le kritične podatke seje
- **Zagotovite**, da se sveži podatki vedno naložijo s strežnika ob obiskih nadzorne plošče
- **Testirajte**, da vaš optimiziran pristop ohranja enako uporabniško izkušnjo

**Napredna razmišljanja:**
- **Primerjajte** kompromise med shranjevanjem celotnih podatkov o računu in samo avtentikacijskimi žetoni
- **Dokumentirajte** svoje odločitve in razloge za prihodnje člane ekipe

Ta izziv vam bo pomagal razmišljati kot profesionalni razvijalec, ki upošteva tako uporabniško izkušnjo kot učinkovitost aplikacije. Vzemite si čas za eksperimentiranje z različnimi pristopi!

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/48)

## Naloga

[Implementirajte dialog "Dodaj transakcijo"](assignment.md)

Tukaj je primer rezultata po dokončanju naloge:

![Posnetek zaslona, ki prikazuje primer dialoga "Dodaj transakcijo"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sl.png)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.