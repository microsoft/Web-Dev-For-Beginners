<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-28T07:39:05+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "ro"
}
-->
# Construirea unei aplicații bancare Partea 1: Șabloane HTML și rute într-o aplicație web

## Chestionar înainte de curs

[Chestionar înainte de curs](https://ff-quizzes.netlify.app/web/quiz/41)

### Introducere

De la apariția JavaScript în browsere, site-urile web au devenit mai interactive și mai complexe ca niciodată. Tehnologiile web sunt acum utilizate frecvent pentru a crea aplicații complet funcționale care rulează direct în browser, pe care le numim [aplicații web](https://en.wikipedia.org/wiki/Web_application). Deoarece aplicațiile web sunt foarte interactive, utilizatorii nu doresc să aștepte reîncărcarea completă a paginii de fiecare dată când se efectuează o acțiune. De aceea, JavaScript este utilizat pentru a actualiza direct HTML-ul folosind DOM, oferind o experiență mai fluidă utilizatorului.

În această lecție, vom pune bazele pentru a crea o aplicație bancară web, utilizând șabloane HTML pentru a crea mai multe ecrane care pot fi afișate și actualizate fără a fi nevoie să reîncărcăm întreaga pagină HTML.

### Cerințe preliminare

Ai nevoie de un server web local pentru a testa aplicația web pe care o vom construi în această lecție. Dacă nu ai unul, poți instala [Node.js](https://nodejs.org) și utiliza comanda `npx lite-server` din folderul proiectului tău. Aceasta va crea un server web local și va deschide aplicația ta într-un browser.

### Pregătire

Pe computerul tău, creează un folder numit `bank` cu un fișier numit `index.html` în interiorul său. Vom începe cu acest [șablon HTML de bază](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Șabloane HTML

Dacă dorești să creezi mai multe ecrane pentru o pagină web, o soluție ar fi să creezi un fișier HTML pentru fiecare ecran pe care dorești să-l afișezi. Totuși, această soluție vine cu unele inconveniente:

- Trebuie să reîncarci întregul HTML atunci când schimbi ecranul, ceea ce poate fi lent.
- Este dificil să partajezi date între diferitele ecrane.

O altă abordare este să ai un singur fișier HTML și să definești mai multe [șabloane HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) folosind elementul `<template>`. Un șablon este un bloc HTML reutilizabil care nu este afișat de browser și trebuie instanțiat la momentul rulării folosind JavaScript.

### Sarcină

Vom crea o aplicație bancară cu două ecrane: pagina de autentificare și tabloul de bord. Mai întâi, să adăugăm în corpul HTML un element de tip placeholder pe care îl vom folosi pentru a instanția diferitele ecrane ale aplicației noastre:

```html
<div id="app">Loading...</div>
```

I-am atribuit un `id` pentru a-l localiza mai ușor cu JavaScript mai târziu.

> Sfat: deoarece conținutul acestui element va fi înlocuit, putem pune un mesaj sau un indicator de încărcare care va fi afișat în timp ce aplicația se încarcă.

Apoi, să adăugăm mai jos șablonul HTML pentru pagina de autentificare. Deocamdată, vom pune acolo doar un titlu și o secțiune care conține un link pe care îl vom folosi pentru navigare.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Apoi vom adăuga un alt șablon HTML pentru pagina tabloului de bord. Această pagină va conține diferite secțiuni:

- Un antet cu un titlu și un link de deconectare
- Soldul curent al contului bancar
- O listă de tranzacții, afișată într-un tabel

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Sfat: când creezi șabloane HTML, dacă dorești să vezi cum vor arăta, poți comenta liniile `<template>` și `</template>` înconjurându-le cu `<!-- -->`.

✅ De ce crezi că folosim atributele `id` pe șabloane? Am putea folosi altceva, cum ar fi clasele?

## Afișarea șabloanelor cu JavaScript

Dacă încerci fișierul HTML curent într-un browser, vei vedea că rămâne blocat afișând `Loading...`. Asta pentru că trebuie să adăugăm ceva cod JavaScript pentru a instanția și afișa șabloanele HTML.

Instanțierea unui șablon se face de obicei în 3 pași:

1. Recuperarea elementului șablon din DOM, de exemplu folosind [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clonarea elementului șablon, folosind [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Atașarea acestuia la DOM sub un element vizibil, de exemplu folosind [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ De ce trebuie să clonăm șablonul înainte de a-l atașa la DOM? Ce crezi că s-ar întâmpla dacă am sări peste acest pas?

### Sarcină

Creează un fișier nou numit `app.js` în folderul proiectului tău și importă acel fișier în secțiunea `<head>` a HTML-ului:

```html
<script src="app.js" defer></script>
```

Acum, în `app.js`, vom crea o nouă funcție `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Ceea ce facem aici sunt exact cei 3 pași descriși mai sus. Instanțiem șablonul cu id-ul `templateId` și punem conținutul clonat în placeholder-ul aplicației noastre. Observă că trebuie să folosim `cloneNode(true)` pentru a copia întreaga subarbore a șablonului.

Acum apelează această funcție cu unul dintre șabloane și verifică rezultatul.

```js
updateRoute('login');
```

✅ Care este scopul acestui cod `app.innerHTML = '';`? Ce se întâmplă fără el?

## Crearea rutelor

Când vorbim despre o aplicație web, numim *Routing* intenția de a mapa **URL-urile** la ecranele specifice care ar trebui afișate. Pe un site web cu mai multe fișiere HTML, acest lucru se face automat, deoarece căile fișierelor sunt reflectate în URL. De exemplu, cu aceste fișiere în folderul proiectului tău:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Dacă creezi un server web cu `mywebsite` ca rădăcină, maparea URL-urilor va fi:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Totuși, pentru aplicația noastră web folosim un singur fișier HTML care conține toate ecranele, așa că acest comportament implicit nu ne va ajuta. Trebuie să creăm această mapare manual și să actualizăm șablonul afișat folosind JavaScript.

### Sarcină

Vom folosi un obiect simplu pentru a implementa o [mapare](https://en.wikipedia.org/wiki/Associative_array) între căile URL și șabloanele noastre. Adaugă acest obiect în partea de sus a fișierului `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Acum să modificăm puțin funcția `updateRoute`. În loc să trecem direct `templateId` ca argument, dorim să-l recuperăm mai întâi uitându-ne la URL-ul curent, apoi să folosim maparea noastră pentru a obține valoarea corespunzătoare a id-ului șablonului. Putem folosi [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) pentru a obține doar secțiunea de cale din URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Aici am mapat rutele declarate la șablonul corespunzător. Poți verifica dacă funcționează corect schimbând URL-ul manual în browser.

✅ Ce se întâmplă dacă introduci o cale necunoscută în URL? Cum am putea rezolva acest lucru?

## Adăugarea navigației

Următorul pas pentru aplicația noastră este să adăugăm posibilitatea de a naviga între pagini fără a fi nevoie să schimbăm URL-ul manual. Aceasta implică două lucruri:

1. Actualizarea URL-ului curent
2. Actualizarea șablonului afișat pe baza noului URL

Am rezolvat deja a doua parte cu funcția `updateRoute`, așa că trebuie să ne dăm seama cum să actualizăm URL-ul curent.

Va trebui să folosim JavaScript și, mai exact, [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), care permite actualizarea URL-ului și crearea unei noi intrări în istoricul de navigare, fără a reîncărca HTML-ul.

> Notă: Deși elementul HTML de ancoră [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) poate fi utilizat singur pentru a crea hyperlinkuri către diferite URL-uri, acesta va face ca browserul să reîncarce HTML-ul în mod implicit. Este necesar să prevenim acest comportament atunci când gestionăm rutarea cu JavaScript personalizat, folosind funcția `preventDefault()` pe evenimentul de clic.

### Sarcină

Să creăm o nouă funcție pe care o putem folosi pentru a naviga în aplicația noastră:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Această metodă actualizează mai întâi URL-ul curent pe baza căii date, apoi actualizează șablonul. Proprietatea `window.location.origin` returnează rădăcina URL-ului, permițându-ne să reconstruim un URL complet dintr-o cale dată.

Acum că avem această funcție, putem rezolva problema pe care o avem dacă o cale nu se potrivește cu nicio rută definită. Vom modifica funcția `updateRoute` adăugând o soluție de rezervă către una dintre rutele existente dacă nu găsim o potrivire.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Dacă o rută nu poate fi găsită, acum vom redirecționa către pagina de `login`.

Acum să creăm o funcție pentru a obține URL-ul atunci când se face clic pe un link și pentru a preveni comportamentul implicit al browserului pentru linkuri:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Să completăm sistemul de navigație adăugând legături pentru *Login* și *Logout* în HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Obiectul `event` de mai sus capturează evenimentul `click` și îl transmite funcției noastre `onLinkClick`.

Folosind atributul [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick), leagă evenimentul `click` de codul JavaScript, aici apelul funcției `navigate()`.

Încearcă să faci clic pe aceste linkuri, acum ar trebui să poți naviga între diferitele ecrane ale aplicației tale.

✅ Metoda `history.pushState` face parte din standardul HTML5 și este implementată în [toate browserele moderne](https://caniuse.com/?search=pushState). Dacă construiești o aplicație web pentru browsere mai vechi, există un truc pe care îl poți folosi în locul acestei API: utilizând un [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) înainte de cale, poți implementa rutarea care funcționează cu navigarea obișnuită a ancorelor și nu reîncarcă pagina, deoarece scopul său a fost să creeze linkuri interne într-o pagină.

## Gestionarea butoanelor de înainte și înapoi ale browserului

Folosirea `history.pushState` creează noi intrări în istoricul de navigare al browserului. Poți verifica acest lucru ținând apăsat *butonul înapoi* al browserului, ar trebui să afișeze ceva de genul:

![Captură de ecran a istoricului de navigare](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.ro.png)

Dacă încerci să faci clic pe butonul înapoi de câteva ori, vei vedea că URL-ul curent se schimbă și istoricul este actualizat, dar același șablon continuă să fie afișat.

Asta pentru că aplicația nu știe că trebuie să apelăm `updateRoute()` de fiecare dată când istoricul se schimbă. Dacă te uiți la documentația [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), poți vedea că dacă starea se schimbă - adică am trecut la un alt URL - evenimentul [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) este declanșat. Vom folosi acest lucru pentru a rezolva problema.

### Sarcină

Pentru a ne asigura că șablonul afișat este actualizat atunci când istoricul browserului se schimbă, vom atașa o nouă funcție care apelează `updateRoute()`. Vom face acest lucru la sfârșitul fișierului `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Notă: am folosit o [funcție săgeată](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aici pentru a declara handler-ul evenimentului `popstate` pentru concizie, dar o funcție obișnuită ar funcționa la fel.

Iată un videoclip de reîmprospătare despre funcțiile săgeată:

[![Funcții săgeată](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funcții săgeată")

> 🎥 Fă clic pe imaginea de mai sus pentru un videoclip despre funcțiile săgeată.

Acum încearcă să folosești butoanele de înainte și înapoi ale browserului și verifică dacă ruta afișată este actualizată corect de această dată.

---

## 🚀 Provocare

Adaugă un nou șablon și o rută pentru o a treia pagină care afișează creditele pentru această aplicație.

## Chestionar după curs

[Chestionar după curs](https://ff-quizzes.netlify.app/web/quiz/42)

## Recapitulare și studiu individual

Rutarea este una dintre părțile surprinzător de dificile ale dezvoltării web, mai ales pe măsură ce web-ul trece de la comportamentele de reîmprospătare a paginilor la reîmprospătările aplicațiilor de tip Single Page Application. Citește puțin despre [cum serviciul Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) gestionează rutarea. Poți explica de ce unele dintre deciziile descrise în acel document sunt necesare?

## Temă

[Îmbunătățește rutarea](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.