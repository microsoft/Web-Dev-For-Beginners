<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T08:27:03+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "no"
}
-->
# Bygg en bankapp del 3: Metoder for henting og bruk av data

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/45)

### Introduksjon

Kjernen i enhver webapplikasjon er *data*. Data kan ha mange former, men hovedformålet er alltid å vise informasjon til brukeren. Etter hvert som webapplikasjoner blir mer interaktive og komplekse, har måten brukeren får tilgang til og interagerer med informasjon blitt en viktig del av webutvikling.

I denne leksjonen skal vi se hvordan man henter data fra en server asynkront og bruker disse dataene til å vise informasjon på en nettside uten å laste HTML på nytt.

### Forutsetninger

Du må ha bygget [innloggings- og registreringsskjemaet](../2-forms/README.md) som en del av webappen for denne leksjonen. Du må også installere [Node.js](https://nodejs.org) og [kjøre server-APIet](../api/README.md) lokalt for å få kontodata.

Du kan teste at serveren kjører riktig ved å utføre denne kommandoen i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX og datahenting

Tradisjonelle nettsteder oppdaterer innholdet som vises når brukeren velger en lenke eller sender inn data via et skjema, ved å laste hele HTML-siden på nytt. Hver gang nye data må lastes, returnerer webserveren en helt ny HTML-side som må behandles av nettleseren, noe som avbryter brukerens handling og begrenser interaksjoner under omlastingen. Denne arbeidsflyten kalles også en *Multi-Page Application* eller *MPA*.

![Oppdateringsflyt i en fler-sides applikasjon](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.no.png)

Da webapplikasjoner begynte å bli mer komplekse og interaktive, dukket en ny teknikk opp kalt [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Denne teknikken lar webapper sende og hente data fra en server asynkront ved hjelp av JavaScript, uten å laste HTML-siden på nytt, noe som resulterer i raskere oppdateringer og jevnere brukerinteraksjoner. Når nye data mottas fra serveren, kan den nåværende HTML-siden også oppdateres med JavaScript ved hjelp av [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)-APIet. Over tid har denne tilnærmingen utviklet seg til det som nå kalles en [*Single-Page Application* eller *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Oppdateringsflyt i en enkelt-sides applikasjon](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.no.png)

Da AJAX først ble introdusert, var det eneste APIet tilgjengelig for å hente data asynkront [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Men moderne nettlesere implementerer nå det mer praktiske og kraftige [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), som bruker promises og er bedre egnet til å manipulere JSON-data.

> Selv om alle moderne nettlesere støtter `Fetch API`, er det alltid lurt å sjekke [kompatibilitetstabellen på caniuse.com](https://caniuse.com/fetch) først hvis du vil at webapplikasjonen din skal fungere på eldre nettlesere.

### Oppgave

I [forrige leksjon](../2-forms/README.md) implementerte vi registreringsskjemaet for å opprette en konto. Nå skal vi legge til kode for å logge inn med en eksisterende konto og hente dens data. Åpne `app.js`-filen og legg til en ny `login`-funksjon:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Her starter vi med å hente skjemaelementet med `getElementById()`, og deretter henter vi brukernavnet fra input-feltet med `loginForm.user.value`. Hvert skjemaelement kan nås via sitt navn (angitt i HTML med `name`-attributtet) som en egenskap av skjemaet.

På samme måte som vi gjorde for registreringen, skal vi lage en annen funksjon for å utføre en serverforespørsel, men denne gangen for å hente kontodata:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Vi bruker `fetch`-APIet for å hente data asynkront fra serveren, men denne gangen trenger vi ingen ekstra parametere annet enn URLen vi skal kalle, siden vi kun henter data. Som standard oppretter `fetch` en [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET)-HTTP-forespørsel, som er det vi ønsker her.

✅ `encodeURIComponent()` er en funksjon som rømmer spesialtegn for URL. Hvilke problemer kan vi få hvis vi ikke kaller denne funksjonen og bruker verdien `user` direkte i URLen?

La oss nå oppdatere `login`-funksjonen vår til å bruke `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Først, siden `getAccount` er en asynkron funksjon, må vi bruke `await`-nøkkelordet for å vente på serverresultatet. Som med enhver serverforespørsel, må vi også håndtere feiltilfeller. Foreløpig legger vi bare til en loggmelding for å vise feilen, og kommer tilbake til dette senere.

Deretter må vi lagre dataene et sted slik at vi senere kan bruke dem til å vise informasjonen på dashbordet. Siden variabelen `account` ikke eksisterer ennå, oppretter vi en global variabel for den øverst i filen vår:

```js
let account = null;
```

Etter at brukerdataene er lagret i en variabel, kan vi navigere fra *login*-siden til *dashboard*-siden ved hjelp av `navigate()`-funksjonen vi allerede har.

Til slutt må vi kalle `login`-funksjonen vår når innloggingsskjemaet sendes inn, ved å endre HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Test at alt fungerer riktig ved å registrere en ny konto og prøve å logge inn med den samme kontoen.

Før vi går videre til neste del, kan vi også fullføre `register`-funksjonen ved å legge til dette nederst i funksjonen:

```js
account = result;
navigate('/dashboard');
```

✅ Visste du at som standard kan du kun kalle server-APIer fra *samme domene og port* som nettsiden du ser på? Dette er en sikkerhetsmekanisme som håndheves av nettlesere. Men vent, webappen vår kjører på `localhost:3000` mens server-APIet kjører på `localhost:5000`, hvorfor fungerer det? Ved å bruke en teknikk kalt [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), er det mulig å utføre HTTP-forespørsler på tvers av opprinnelse hvis serveren legger til spesielle headere i responsen, som tillater unntak for spesifikke domener.

> Lær mer om APIer ved å ta denne [leksjonen](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Oppdater HTML for å vise data

Nå som vi har brukerdataene, må vi oppdatere den eksisterende HTMLen for å vise dem. Vi vet allerede hvordan vi henter et element fra DOM ved for eksempel å bruke `document.getElementById()`. Etter at du har et baseelement, her er noen APIer du kan bruke for å endre det eller legge til barnelementer:

- Ved å bruke [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent)-egenskapen kan du endre teksten til et element. Merk at endring av denne verdien fjerner alle elementets barn (hvis det finnes noen) og erstatter det med den oppgitte teksten. Som sådan er det også en effektiv metode for å fjerne alle barn av et gitt element ved å tilordne en tom streng `''` til det.

- Ved å bruke [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) sammen med [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)-metoden kan du opprette og legge til ett eller flere nye barnelementer.

✅ Ved å bruke [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)-egenskapen til et element er det også mulig å endre HTML-innholdet, men denne bør unngås da den er sårbar for [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)-angrep.

### Oppgave

Før vi går videre til dashbordskjermen, er det én ting vi bør gjøre på *login*-siden. For øyeblikket, hvis du prøver å logge inn med et brukernavn som ikke eksisterer, vises en melding i konsollen, men for en vanlig bruker endres ingenting, og du vet ikke hva som skjer.

La oss legge til et plassholderelement i innloggingsskjemaet der vi kan vise en feilmelding hvis nødvendig. Et godt sted vil være rett før innloggings-`<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Dette `<div>`-elementet er tomt, noe som betyr at ingenting vil vises på skjermen før vi legger til innhold i det. Vi gir det også en `id` slik at vi enkelt kan hente det med JavaScript.

Gå tilbake til `app.js`-filen og opprett en ny hjelpefunksjon `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Denne er ganske enkel: gitt et element-*id* og *tekst*, vil den oppdatere tekstinnholdet til DOM-elementet med den matchende `id`. La oss bruke denne metoden i stedet for den forrige feilmeldingen i `login`-funksjonen:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Nå, hvis du prøver å logge inn med en ugyldig konto, bør du se noe slikt:

![Skjermbilde som viser feilmeldingen under innlogging](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.no.png)

Nå har vi feilmeldingstekst som vises visuelt, men hvis du prøver det med en skjermleser, vil du merke at ingenting blir annonsert. For at tekst som dynamisk legges til en side skal bli annonsert av skjermlesere, må den bruke noe som kalles en [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Her skal vi bruke en spesifikk type live region kalt et varsel:

```html
<div id="loginError" role="alert"></div>
```

Implementer samme oppførsel for feil i `register`-funksjonen (ikke glem å oppdatere HTML).

## Vis informasjon på dashbordet

Ved å bruke de samme teknikkene vi nettopp har sett, skal vi også ta oss av å vise kontoinformasjonen på dashbord-siden.

Slik ser et kontoobjekt mottatt fra serveren ut:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Merk: for å gjøre livet ditt enklere kan du bruke den forhåndsdefinerte `test`-kontoen som allerede er fylt med data.

### Oppgave

La oss starte med å erstatte "Balance"-seksjonen i HTML for å legge til plassholderelementer:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Vi legger også til en ny seksjon rett under for å vise kontobeskrivelsen:

```html
<h2 id="description"></h2>
```

✅ Siden kontobeskrivelsen fungerer som en tittel for innholdet under, er den semantisk markert som en overskrift. Lær mer om hvordan [overskriftsstruktur](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) er viktig for tilgjengelighet, og ta en kritisk titt på siden for å avgjøre hva annet som kan være en overskrift.

Deretter oppretter vi en ny funksjon i `app.js` for å fylle inn plassholderen:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Først sjekker vi at vi har kontodataene vi trenger før vi går videre. Deretter bruker vi `updateElement()`-funksjonen vi opprettet tidligere for å oppdatere HTML.

> For å gjøre saldoen mer lesbar bruker vi metoden [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) for å vise verdien med 2 desimaler.

Nå må vi kalle `updateDashboard()`-funksjonen vår hver gang dashbordet lastes. Hvis du allerede har fullført [oppgaven i leksjon 1](../1-template-route/assignment.md), bør dette være enkelt, ellers kan du bruke følgende implementering.

Legg til denne koden på slutten av `updateRoute()`-funksjonen:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Og oppdater rutedefinisjonen med:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Med denne endringen vil `updateDashboard()`-funksjonen kalles hver gang dashbord-siden vises. Etter en innlogging bør du da kunne se kontosaldoen, valutaen og beskrivelsen.

## Opprett tabellrader dynamisk med HTML-maler

I [første leksjon](../1-template-route/README.md) brukte vi HTML-maler sammen med [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)-metoden for å implementere navigasjonen i appen vår. Maler kan også være mindre og brukes til å dynamisk fylle ut repeterende deler av en side.

Vi skal bruke en lignende tilnærming for å vise listen over transaksjoner i HTML-tabellen.

### Oppgave

Legg til en ny mal i HTML-`<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Denne malen representerer en enkelt tabellrad med de 3 kolonnene vi vil fylle ut: *dato*, *objekt* og *beløp* for en transaksjon.

Deretter legger vi til denne `id`-egenskapen til `<tbody>`-elementet i tabellen innenfor dashbordmalen for å gjøre det enklere å finne med JavaScript:

```html
<tbody id="transactions"></tbody>
```

HTMLen vår er klar, la oss bytte til JavaScript-kode og opprette en ny funksjon `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Denne funksjonen gjør akkurat det navnet antyder: ved å bruke malen vi opprettet tidligere, lager den en ny tabellrad og fyller inn innholdet ved hjelp av transaksjonsdata. Vi skal bruke denne i `updateDashboard()`-funksjonen for å fylle ut tabellen:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Her bruker vi metoden [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) som oppretter et nytt DOM-fragment som vi kan jobbe med, før vi til slutt legger det til HTML-tabellen vår.

Det er fortsatt én ting vi må gjøre før denne koden kan fungere, siden `updateElement()`-funksjonen vår for øyeblikket kun støtter tekstinnhold. La oss endre koden litt:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Vi bruker [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)-metoden, da den lar oss legge til enten tekst eller [DOM Nodes](https://developer.mozilla.org/docs/Web/API/Node) til et overordnet element, noe som er perfekt for alle våre brukstilfeller.
Hvis du prøver å logge inn med `test`-kontoen, bør du nå se en transaksjonsliste på dashbordet 🎉.

---

## 🚀 Utfordring

Jobb sammen for å få dashbord-siden til å se ut som en ekte bankapp. Hvis du allerede har stylet appen din, prøv å bruke [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) for å lage et [responsivt design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) som fungerer godt både på skrivebord og mobile enheter.

Her er et eksempel på en stylet dashbord-side:

![Skjermbilde av et eksempel på resultatet av dashbordet etter styling](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.no.png)

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/46)

## Oppgave

[Refaktorer og kommenter koden din](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.