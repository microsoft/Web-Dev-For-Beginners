<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-24T22:09:39+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "ro"
}
-->
# Construirea unei aplicații bancare Partea 4: Concepte de gestionare a stării

## Chestionar înainte de lecție

[Chestionar înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/47)

## Introducere

Gestionarea stării este ca un sistem de navigație pe nava spațială Voyager – când totul funcționează bine, abia observi că există. Dar când lucrurile merg prost, devine diferența dintre a ajunge în spațiul interstelar și a te pierde în vidul cosmic. În dezvoltarea web, starea reprezintă tot ceea ce aplicația ta trebuie să-și amintească: statutul de autentificare al utilizatorului, datele din formulare, istoricul navigării și stările temporare ale interfeței.

Pe măsură ce aplicația ta bancară a evoluat de la un simplu formular de autentificare la o aplicație mai sofisticată, probabil ai întâmpinat unele provocări comune. Reîmprospătezi pagina și utilizatorii sunt deconectați neașteptat. Închizi browserul și tot progresul dispare. Încerci să depanezi o problemă și te pierzi printre funcții multiple care modifică aceleași date în moduri diferite.

Acestea nu sunt semne ale unui cod slab – sunt dureri de creștere naturale care apar atunci când aplicațiile ating un anumit prag de complexitate. Fiecare dezvoltator se confruntă cu aceste provocări pe măsură ce aplicațiile lor trec de la "dovada conceptului" la "gata de producție".

În această lecție, vom implementa un sistem centralizat de gestionare a stării care va transforma aplicația ta bancară într-o aplicație fiabilă și profesională. Vei învăța să gestionezi fluxurile de date în mod previzibil, să păstrezi sesiunile utilizatorilor în mod corespunzător și să creezi o experiență fluidă pentru utilizatorii aplicațiilor web moderne.

## Cerințe preliminare

Înainte de a aprofunda conceptele de gestionare a stării, trebuie să ai mediul de dezvoltare configurat corespunzător și fundația aplicației bancare pregătită. Această lecție se bazează direct pe conceptele și codul din părțile anterioare ale acestei serii.

Asigură-te că ai următoarele componente pregătite înainte de a continua:

**Configurare necesară:**
- Finalizează lecția despre [preluarea datelor](../3-data/README.md) - aplicația ta ar trebui să încarce și să afișeze cu succes datele contului
- Instalează [Node.js](https://nodejs.org) pe sistemul tău pentru a rula API-ul backend
- Pornește [serverul API](../api/README.md) local pentru a gestiona operațiunile cu datele contului

**Testarea mediului tău:**

Verifică dacă serverul API funcționează corect executând această comandă într-un terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Ce face această comandă:**
- **Trimite** o cerere GET către serverul API local
- **Testează** conexiunea și verifică dacă serverul răspunde
- **Returnează** informațiile despre versiunea API dacă totul funcționează corect

---

## Diagnosticarea problemelor actuale ale stării

Ca Sherlock Holmes care examinează o scenă a crimei, trebuie să înțelegem exact ce se întâmplă în implementarea noastră actuală înainte de a rezolva misterul sesiunilor utilizatorilor care dispar.

Să facem un experiment simplu care dezvăluie provocările de gestionare a stării:

**🧪 Încearcă acest test de diagnosticare:**
1. Autentifică-te în aplicația ta bancară și navighează la tabloul de bord
2. Reîmprospătează pagina browserului
3. Observă ce se întâmplă cu statutul tău de autentificare

Dacă ești redirecționat înapoi la ecranul de autentificare, ai descoperit problema clasică a persistenței stării. Acest comportament apare deoarece implementarea noastră actuală stochează datele utilizatorului în variabile JavaScript care se resetează la fiecare reîncărcare a paginii.

**Probleme ale implementării actuale:**

Simpla variabilă `account` din [lecția anterioară](../3-data/README.md) creează trei probleme semnificative care afectează atât experiența utilizatorului, cât și mentenabilitatea codului:

| Problemă | Cauza tehnică | Impact asupra utilizatorului |
|----------|---------------|------------------------------|
| **Pierderea sesiunii** | Reîmprospătarea paginii șterge variabilele JavaScript | Utilizatorii trebuie să se autentifice frecvent |
| **Actualizări dispersate** | Funcții multiple modifică starea direct | Depanarea devine din ce în ce mai dificilă |
| **Curățare incompletă** | Deconectarea nu șterge toate referințele stării | Probleme potențiale de securitate și confidențialitate |

**Provocarea arhitecturală:**

La fel ca designul compartimentat al Titanicului, care părea robust până când mai multe compartimente s-au umplut simultan, rezolvarea acestor probleme individual nu va aborda problema arhitecturală de bază. Avem nevoie de o soluție cuprinzătoare pentru gestionarea stării.

> 💡 **Ce încercăm de fapt să realizăm aici?**

[Gestionarea stării](https://en.wikipedia.org/wiki/State_management) înseamnă, de fapt, rezolvarea a două puzzle-uri fundamentale:

1. **Unde sunt datele mele?**: Păstrarea evidenței informațiilor pe care le avem și de unde provin
2. **Toată lumea este pe aceeași pagină?**: Asigurarea că ceea ce văd utilizatorii corespunde cu ceea ce se întâmplă de fapt

**Planul nostru:**

În loc să ne învârtim în cerc, vom crea un sistem de **gestionare centralizată a stării**. Gândește-te la asta ca la a avea o persoană foarte organizată responsabilă de toate lucrurile importante:

![Schema care arată fluxurile de date între HTML, acțiunile utilizatorului și starea](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.ro.png)

**Înțelegerea acestui flux de date:**
- **Centralizează** toată starea aplicației într-un singur loc
- **Direcționează** toate modificările stării prin funcții controlate
- **Asigură** sincronizarea interfeței cu starea curentă
- **Oferă** un model clar și previzibil pentru gestionarea datelor

> 💡 **Perspectivă profesională**: Această lecție se concentrează pe concepte fundamentale. Pentru aplicații complexe, biblioteci precum [Redux](https://redux.js.org) oferă funcții mai avansate de gestionare a stării. Înțelegerea acestor principii de bază te va ajuta să stăpânești orice bibliotecă de gestionare a stării.

> ⚠️ **Subiect avansat**: Nu vom acoperi actualizările automate ale interfeței declanșate de modificările stării, deoarece acest lucru implică concepte de [programare reactivă](https://en.wikipedia.org/wiki/Reactive_programming). Consideră acest lucru ca un pas excelent pentru continuarea procesului de învățare!

### Sarcină: Centralizarea structurii stării

Să începem transformarea gestionării dispersate a stării într-un sistem centralizat. Acest prim pas stabilește fundația pentru toate îmbunătățirile ulterioare.

**Pasul 1: Creează un obiect central de stare**

Înlocuiește declarația simplă `account`:

```js
let account = null;
```

Cu un obiect structurat de stare:

```js
let state = {
  account: null
};
```

**De ce contează această schimbare:**
- **Centralizează** toate datele aplicației într-un singur loc
- **Pregătește** structura pentru adăugarea mai multor proprietăți ale stării mai târziu
- **Creează** o graniță clară între stare și alte variabile
- **Stabilește** un model care se extinde pe măsură ce aplicația ta crește

**Pasul 2: Actualizează modelele de acces la stare**

Actualizează funcțiile tale pentru a utiliza noua structură a stării:

**În funcțiile `register()` și `login()`**, înlocuiește:
```js
account = ...
```

Cu:
```js
state.account = ...
```

**În funcția `updateDashboard()`**, adaugă această linie la început:
```js
const account = state.account;
```

**Ce realizează aceste actualizări:**
- **Menține** funcționalitatea existentă în timp ce îmbunătățește structura
- **Pregătește** codul pentru o gestionare mai sofisticată a stării
- **Creează** modele consistente pentru accesarea datelor stării
- **Stabilește** fundația pentru actualizările centralizate ale stării

> 💡 **Notă**: Această refactorizare nu rezolvă imediat problemele noastre, dar creează fundația esențială pentru îmbunătățirile puternice care urmează!

## Implementarea actualizărilor controlate ale stării

Cu starea noastră centralizată, pasul următor implică stabilirea unor mecanisme controlate pentru modificarea datelor. Această abordare asigură modificări previzibile ale stării și o depanare mai ușoară.

Principiul de bază seamănă cu controlul traficului aerian: în loc să permitem funcțiilor multiple să modifice starea independent, vom canaliza toate modificările printr-o singură funcție controlată. Acest model oferă o supraveghere clară a momentului și modului în care se produc modificările datelor.

**Gestionarea imutabilă a stării:**

Vom trata obiectul nostru `state` ca [*imutabil*](https://en.wikipedia.org/wiki/Immutable_object), ceea ce înseamnă că nu îl vom modifica direct. În schimb, fiecare schimbare va crea un nou obiect de stare cu datele actualizate.

Deși această abordare poate părea inițial ineficientă comparativ cu modificările directe, oferă avantaje semnificative pentru depanare, testare și menținerea predictibilității aplicației.

**Beneficiile gestionării imutabile a stării:**

| Beneficiu | Descriere | Impact |
|-----------|-----------|--------|
| **Predictibilitate** | Modificările au loc doar prin funcții controlate | Mai ușor de depanat și testat |
| **Urmărirea istoricului** | Fiecare schimbare a stării creează un nou obiect | Permite funcționalitatea de anulare/refacere |
| **Prevenirea efectelor secundare** | Fără modificări accidentale | Previne erorile misterioase |
| **Optimizarea performanței** | Ușor de detectat când starea s-a schimbat | Permite actualizări eficiente ale interfeței |

**Imutabilitate în JavaScript cu `Object.freeze()`:**

JavaScript oferă [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) pentru a preveni modificările obiectelor:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Ce se întâmplă aici:**
- **Previne** atribuirea directă sau ștergerea proprietăților
- **Aruncă** excepții dacă se încearcă modificări
- **Asigură** că modificările stării trebuie să treacă prin funcții controlate
- **Creează** un contract clar pentru modul în care starea poate fi actualizată

> 💡 **Explorare detaliată**: Află despre diferența dintre obiectele *imutabile superficiale* și *imutabile profunde* în [documentația MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Înțelegerea acestei distincții este crucială pentru structuri complexe ale stării.

### Sarcină

Să creăm o nouă funcție `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

În această funcție, creăm un nou obiect de stare și copiem datele din starea anterioară folosind [operatorul *spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Apoi, suprascriem o anumită proprietate a obiectului de stare cu noile date folosind [notația cu paranteze](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` pentru atribuire. În final, blocăm obiectul pentru a preveni modificările folosind `Object.freeze()`. Deocamdată, avem doar proprietatea `account` stocată în stare, dar cu această abordare poți adăuga câte proprietăți ai nevoie în stare.

Vom actualiza, de asemenea, inițializarea `state` pentru a ne asigura că starea inițială este și ea înghețată:

```js
let state = Object.freeze({
  account: null
});
```

După aceea, actualizează funcția `register` înlocuind atribuirea `state.account = result;` cu:

```js
updateState('account', result);
```

Fă același lucru cu funcția `login`, înlocuind `state.account = data;` cu:

```js
updateState('account', data);
```

Acum vom profita de ocazie pentru a rezolva problema datelor contului care nu sunt șterse atunci când utilizatorul face clic pe *Logout*.

Creează o nouă funcție `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

În `updateDashboard()`, înlocuiește redirecționarea `return navigate('/login');` cu `return logout();`;

Încearcă să înregistrezi un cont nou, să te deconectezi și să te autentifici din nou pentru a verifica dacă totul funcționează corect.

> Sfat: poți verifica toate modificările stării adăugând `console.log(state)` la sfârșitul funcției `updateState()` și deschizând consola în instrumentele de dezvoltare ale browserului tău.

## Implementarea persistenței datelor

Problema pierderii sesiunii pe care am identificat-o mai devreme necesită o soluție de persistență care să mențină starea utilizatorului între sesiunile browserului. Acest lucru transformă aplicația noastră dintr-o experiență temporară într-un instrument fiabil și profesional.

Gândește-te cum ceasurile atomice mențin timpul precis chiar și în timpul întreruperilor de curent, stocând starea critică în memorie nevolatilă. În mod similar, aplicațiile web au nevoie de mecanisme de stocare persistentă pentru a păstra datele esențiale ale utilizatorului între sesiunile browserului și reîmprospătările paginii.

**Întrebări strategice pentru persistența datelor:**

Înainte de a implementa persistența, ia în considerare acești factori critici:

| Întrebare | Contextul aplicației bancare | Impactul deciziei |
|-----------|-------------------------------|-------------------|
| **Datele sunt sensibile?** | Soldul contului, istoricul tranzacțiilor | Alegerea metodelor de stocare sigure |
| **Cât timp ar trebui să persiste?** | Starea de autentificare vs. preferințele temporare ale interfeței | Selectarea duratei de stocare adecvate |
| **Are nevoie serverul de ele?** | Token-uri de autentificare vs. setări ale interfeței | Determinarea cerințelor de partajare |

**Opțiuni de stocare în browser:**

Browserele moderne oferă mai multe mecanisme de stocare, fiecare conceput pentru diferite utilizări:

**API-uri principale de stocare:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Stocare persistentă [Key/Value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Persistă** datele între sesiunile browserului pe termen nelimitat  
   - **Supraviețuiește** restarturilor browserului și ale computerului
   - **Este limitată** la domeniul specific al site-ului web
   - **Perfectă** pentru preferințele utilizatorilor și stările de autentificare

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Stocare temporară a sesiunii
   - **Funcționează** identic cu localStorage în timpul sesiunilor active
   - **Se șterge** automat când se închide fila browserului
   - **Ideală** pentru date temporare care nu ar trebui să persiste

3. **[Cookie-uri HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Stocare partajată cu serverul
   - **Se trimit automat** cu fiecare cerere către server
   - **Perfecte** pentru [token-uri de autentificare](https://en.wikipedia.org/wiki/Authentication)
   - **Limitate** ca dimensiune și pot afecta performanța

**Cerința de serializare a datelor:**

Atât `localStorage`, cât și `sessionStorage` stochează doar [șiruri de caractere](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Înțelegerea serializării:**
- **Transformă** obiectele Java
> 💡 **Opțiune Avansată**: Pentru aplicații offline complexe cu seturi mari de date, luați în considerare utilizarea [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Acesta oferă o bază de date completă pe partea clientului, dar necesită o implementare mai complexă.

### Sarcină: Implementați Persistența cu localStorage

Să implementăm stocarea persistentă astfel încât utilizatorii să rămână conectați până când se deconectează explicit. Vom folosi `localStorage` pentru a stoca datele contului între sesiunile browserului.

**Pasul 1: Definirea Configurației de Stocare**

```js
const storageKey = 'savedAccount';
```

**Ce oferă această constantă:**
- **Creează** un identificator consistent pentru datele stocate
- **Previne** greșelile de scriere în referințele cheilor de stocare
- **Facilitează** schimbarea cheii de stocare, dacă este necesar
- **Urmează** cele mai bune practici pentru un cod ușor de întreținut

**Pasul 2: Adăugarea Persistenței Automate**

Adăugați această linie la sfârșitul funcției `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Analiză a ceea ce se întâmplă aici:**
- **Convertește** obiectul contului într-un șir JSON pentru stocare
- **Salvează** datele folosind cheia noastră de stocare consistentă
- **Se execută** automat ori de câte ori apar modificări ale stării
- **Asigură** că datele stocate sunt întotdeauna sincronizate cu starea curentă

> 💡 **Beneficiu Arhitectural**: Deoarece am centralizat toate actualizările stării prin `updateState()`, adăugarea persistenței a necesitat doar o linie de cod. Acest lucru demonstrează puterea deciziilor arhitecturale bune!

**Pasul 3: Restaurarea Stării la Încărcarea Aplicației**

Creați o funcție de inițializare pentru a restaura datele salvate:

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

**Înțelegerea procesului de inițializare:**
- **Recuperează** orice date de cont salvate anterior din localStorage
- **Parcurge** șirul JSON înapoi într-un obiect JavaScript
- **Actualizează** starea folosind funcția noastră controlată de actualizare
- **Restaurează** sesiunea utilizatorului automat la încărcarea paginii
- **Se execută** înainte de actualizările de rută pentru a asigura disponibilitatea stării

**Pasul 4: Optimizarea Rutei Implicite**

Actualizați ruta implicită pentru a profita de persistență:

În `updateRoute()`, înlocuiți:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**De ce această schimbare are sens:**
- **Valorifică** eficient noul nostru sistem de persistență
- **Permite** tabloul de bord să gestioneze verificările de autentificare
- **Redirecționează** automat la autentificare dacă nu există o sesiune salvată
- **Creează** o experiență mai fluidă pentru utilizator

**Testarea Implementării:**

1. Conectați-vă la aplicația dvs. bancară
2. Reîmprospătați pagina browserului
3. Verificați că rămâneți conectat și pe tabloul de bord
4. Închideți și redeschideți browserul
5. Navigați înapoi la aplicația dvs. și confirmați că sunteți încă conectat

🎉 **Realizare Desăvârșită**: Ați implementat cu succes gestionarea persistentă a stării! Aplicația dvs. acum se comportă ca o aplicație web profesională.

## Echilibrarea Persistenței cu Actualitatea Datelor

Sistemul nostru de persistență menține cu succes sesiunile utilizatorilor, dar introduce o nouă provocare: învechirea datelor. Când mai mulți utilizatori sau aplicații modifică aceleași date de pe server, informațiile stocate local devin depășite.

Această situație seamănă cu navigatorii vikingi care se bazau atât pe hărți stelare stocate, cât și pe observații cerești curente. Hărțile ofereau consistență, dar navigatorii aveau nevoie de observații proaspete pentru a ține cont de condițiile în schimbare. În mod similar, aplicația noastră are nevoie atât de starea persistentă a utilizatorului, cât și de datele curente de pe server.

**🧪 Descoperirea Problemei de Actualitate a Datelor:**

1. Conectați-vă la tabloul de bord folosind contul `test`
2. Rulați această comandă într-un terminal pentru a simula o tranzacție dintr-o altă sursă:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Reîmprospătați pagina tabloului de bord în browser
4. Observați dacă vedeți noua tranzacție

**Ce demonstrează acest test:**
- **Arată** cum stocarea locală poate deveni "învechită" (depășită)
- **Simulează** scenarii reale în care datele se schimbă în afara aplicației dvs.
- **Evidențiază** tensiunea dintre persistență și actualitatea datelor

**Provocarea Datelor Învechite:**

| Problemă | Cauză | Impact asupra utilizatorului |
|----------|-------|-----------------------------|
| **Date Învechite** | localStorage nu expiră automat | Utilizatorii văd informații depășite |
| **Schimbări pe Server** | Alte aplicații/utilizatori modifică aceleași date | Vizualizări inconsistente între platforme |
| **Cache vs. Realitate** | Cache-ul local nu se potrivește cu starea serverului | Experiență slabă a utilizatorului și confuzie |

**Strategia de Soluționare:**

Vom implementa un model de "reîmprospătare la încărcare" care echilibrează beneficiile persistenței cu necesitatea datelor actuale. Această abordare menține o experiență fluidă pentru utilizator, asigurând în același timp acuratețea datelor.

### Sarcină: Implementați Sistemul de Reîmprospătare a Datelor

Vom crea un sistem care să preia automat date proaspete de pe server, menținând în același timp beneficiile gestionării persistente a stării.

**Pasul 1: Creați un Actualizator de Date ale Contului**

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

**Înțelegerea logicii acestei funcții:**
- **Verifică** dacă un utilizator este conectat în prezent (state.account există)
- **Redirecționează** la deconectare dacă nu se găsește o sesiune validă
- **Preia** date proaspete ale contului de pe server folosind funcția existentă `getAccount()`
- **Gestionează** erorile serverului în mod grațios prin deconectarea sesiunilor invalide
- **Actualizează** starea cu date proaspete folosind sistemul nostru controlat de actualizare
- **Declanșează** persistența automată a localStorage prin funcția `updateState()`

**Pasul 2: Creați un Handler de Reîmprospătare a Tabloului de Bord**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Ce realizează această funcție de reîmprospătare:**
- **Coordonează** procesul de reîmprospătare a datelor și actualizare a interfeței
- **Așteaptă** încărcarea datelor proaspete înainte de a actualiza afișajul
- **Asigură** că tabloul de bord afișează cele mai recente informații
- **Menține** o separare clară între gestionarea datelor și actualizările interfeței

**Pasul 3: Integrarea cu Sistemul de Rute**

Actualizați configurația rutelor pentru a declanșa automat reîmprospătarea:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Cum funcționează această integrare:**
- **Execută** funcția de reîmprospătare de fiecare dată când se încarcă ruta tabloului de bord
- **Asigură** că datele proaspete sunt întotdeauna afișate când utilizatorii navighează la tabloul de bord
- **Menține** structura existentă a rutelor, adăugând în același timp actualitatea datelor
- **Oferă** un model consistent pentru inițializarea specifică rutelor

**Testarea Sistemului de Reîmprospătare a Datelor:**

1. Conectați-vă la aplicația dvs. bancară
2. Rulați comanda curl de mai devreme pentru a crea o nouă tranzacție
3. Reîmprospătați pagina tabloului de bord sau navigați în altă parte și reveniți
4. Verificați că noua tranzacție apare imediat

🎉 **Echilibru Perfect Obținut**: Aplicația dvs. combină acum experiența fluidă a stării persistente cu acuratețea datelor proaspete de pe server!

## Provocarea Agentului GitHub Copilot 🚀

Utilizați modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Implementați un sistem cuprinzător de gestionare a stării cu funcționalitate de anulare/refacere pentru aplicația bancară. Această provocare vă va ajuta să exersați concepte avansate de gestionare a stării, inclusiv urmărirea istoricului stării, actualizări imutabile și sincronizarea interfeței utilizatorului.

**Prompt:** Creați un sistem îmbunătățit de gestionare a stării care include: 1) Un array de istoric al stării care urmărește toate stările anterioare, 2) Funcții de anulare și refacere care pot reveni la stările anterioare, 3) Butoane UI pentru operațiunile de anulare/refacere pe tabloul de bord, 4) O limită maximă de istoric de 10 stări pentru a preveni problemele de memorie și 5) Curățarea corespunzătoare a istoricului atunci când utilizatorul se deconectează. Asigurați-vă că funcționalitatea de anulare/refacere funcționează cu modificările soldului contului și persistă între reîmprospătările browserului.

Aflați mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare: Optimizarea Stocării

Implementarea dvs. gestionează acum eficient sesiunile utilizatorilor, reîmprospătarea datelor și gestionarea stării. Cu toate acestea, luați în considerare dacă abordarea noastră actuală echilibrează optim eficiența stocării cu funcționalitatea.

La fel ca maeștrii de șah care disting între piesele esențiale și cele sacrificabile, o gestionare eficientă a stării necesită identificarea datelor care trebuie să persiste față de cele care ar trebui să fie întotdeauna proaspete de pe server.

**Analiza Optimizării:**

Evaluați implementarea actuală a localStorage și luați în considerare aceste întrebări strategice:
- Care este informația minimă necesară pentru a menține autentificarea utilizatorului?
- Ce date se schimbă suficient de frecvent încât stocarea locală să ofere puține beneficii?
- Cum poate optimizarea stocării să îmbunătățească performanța fără a degrada experiența utilizatorului?

**Strategia de Implementare:**
- **Identificați** datele esențiale care trebuie să persiste (probabil doar identificarea utilizatorului)
- **Modificați** implementarea localStorage pentru a stoca doar datele critice ale sesiunii
- **Asigurați-vă** că datele proaspete sunt întotdeauna încărcate de pe server la vizitele pe tabloul de bord
- **Testați** că abordarea optimizată menține aceeași experiență a utilizatorului

**Considerație Avansată:**
- **Comparați** compromisurile între stocarea completă a datelor contului și doar a token-urilor de autentificare
- **Documentați** deciziile și raționamentul dvs. pentru viitorii membri ai echipei

Această provocare vă va ajuta să gândiți ca un dezvoltator profesionist care ia în considerare atât experiența utilizatorului, cât și eficiența aplicației. Luați-vă timp pentru a experimenta diferite abordări!

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ff-quizzes.netlify.app/web/quiz/48)

## Temă

[Implementați dialogul "Adaugă tranzacție"](assignment.md)

Iată un exemplu de rezultat după finalizarea temei:

![Captură de ecran care arată un exemplu de dialog "Adaugă tranzacție"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.ro.png)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.