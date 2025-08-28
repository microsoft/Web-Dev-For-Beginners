<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-26T23:05:46+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "da"
}
-->
# Byg en Bankapp Del 1: HTML-skabeloner og Ruter i en Webapp

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/41)

### Introduktion

Siden JavaScript blev introduceret i browsere, er hjemmesider blevet mere interaktive og komplekse end nogensinde før. Webteknologier bruges nu ofte til at skabe fuldt funktionelle applikationer, der kører direkte i en browser, og som vi kalder [webapplikationer](https://en.wikipedia.org/wiki/Web_application). Da webapps er meget interaktive, ønsker brugerne ikke at vente på, at hele siden genindlæses, hver gang en handling udføres. Derfor bruges JavaScript til at opdatere HTML direkte via DOM'en for at give en mere gnidningsfri brugeroplevelse.

I denne lektion vil vi lægge fundamentet for at skabe en bankwebapp ved at bruge HTML-skabeloner til at lave flere skærme, der kan vises og opdateres uden at genindlæse hele HTML-siden.

### Forudsætninger

Du skal bruge en lokal webserver for at teste den webapp, vi bygger i denne lektion. Hvis du ikke har en, kan du installere [Node.js](https://nodejs.org) og bruge kommandoen `npx lite-server` fra din projektmappe. Det vil oprette en lokal webserver og åbne din app i en browser.

### Forberedelse

På din computer skal du oprette en mappe kaldet `bank` med en fil ved navn `index.html` indeni. Vi starter med denne HTML [grundstruktur](https://en.wikipedia.org/wiki/Boilerplate_code):

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

## HTML-skabeloner

Hvis du vil oprette flere skærme til en webside, kunne en løsning være at lave én HTML-fil for hver skærm, du vil vise. Men denne løsning har nogle ulemper:

- Hele HTML'en skal genindlæses, når du skifter skærm, hvilket kan være langsomt.
- Det er svært at dele data mellem de forskellige skærme.

En anden tilgang er at have kun én HTML-fil og definere flere [HTML-skabeloner](https://developer.mozilla.org/docs/Web/HTML/Element/template) ved hjælp af `<template>`-elementet. En skabelon er en genanvendelig HTML-blok, der ikke vises af browseren og skal instansieres ved kørselstidspunktet ved hjælp af JavaScript.

### Opgave

Vi opretter en bankapp med to skærme: login-siden og dashboardet. Først tilføjer vi i HTML-body'en et pladsholder-element, som vi vil bruge til at instansiere de forskellige skærme i vores app:

```html
<div id="app">Loading...</div>
```

Vi giver det en `id` for at gøre det nemmere at finde det med JavaScript senere.

> Tip: Da indholdet af dette element vil blive erstattet, kan vi indsætte en indlæsningsmeddelelse eller indikator, der vises, mens appen indlæses.

Dernæst tilføjer vi HTML-skabelonen til login-siden nedenfor. For nu vil vi kun tilføje en titel og en sektion, der indeholder et link, som vi vil bruge til navigation.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Derefter tilføjer vi en anden HTML-skabelon til dashboard-siden. Denne side vil indeholde forskellige sektioner:

- En header med en titel og et logout-link
- Den aktuelle saldo på bankkontoen
- En liste over transaktioner, vist i en tabel

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

> Tip: Når du opretter HTML-skabeloner, kan du, hvis du vil se, hvordan de ser ud, kommentere `<template>` og `</template>` linjerne ved at omslutte dem med `<!-- -->`.

✅ Hvorfor tror du, vi bruger `id`-attributter på skabelonerne? Kunne vi bruge noget andet som klasser?

## Vise skabeloner med JavaScript

Hvis du prøver din nuværende HTML-fil i en browser, vil du se, at den sidder fast på "Loading...". Det skyldes, at vi skal tilføje noget JavaScript-kode for at instansiere og vise HTML-skabelonerne.

Instansiering af en skabelon sker normalt i 3 trin:

1. Hent skabelonelementet i DOM'en, for eksempel ved hjælp af [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Klon skabelonelementet ved hjælp af [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Tilføj det til DOM'en under et synligt element, for eksempel ved hjælp af [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Hvorfor skal vi klone skabelonen, før vi tilføjer den til DOM'en? Hvad tror du, der ville ske, hvis vi sprang dette trin over?

### Opgave

Opret en ny fil ved navn `app.js` i din projektmappe, og importer den fil i `<head>`-sektionen af din HTML:

```html
<script src="app.js" defer></script>
```

Nu i `app.js` opretter vi en ny funktion `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Det, vi gør her, er præcis de 3 trin beskrevet ovenfor. Vi instansierer skabelonen med id'et `templateId` og placerer dens klonede indhold i vores app-pladsholder. Bemærk, at vi skal bruge `cloneNode(true)` for at kopiere hele undertræet af skabelonen.

Kald nu denne funktion med en af skabelonerne, og se resultatet.

```js
updateRoute('login');
```

✅ Hvad er formålet med denne kode `app.innerHTML = '';`? Hvad sker der uden den?

## Oprettelse af ruter

Når vi taler om en webapp, kalder vi *Routing* intentionen om at kortlægge **URL'er** til specifikke skærme, der skal vises. På en hjemmeside med flere HTML-filer sker dette automatisk, da filstierne afspejles i URL'en. For eksempel med disse filer i din projektmappe:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Hvis du opretter en webserver med `mywebsite` som rod, vil URL-kortlægningen være:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Men for vores webapp bruger vi en enkelt HTML-fil, der indeholder alle skærmene, så denne standardadfærd vil ikke hjælpe os. Vi skal manuelt oprette dette kort og opdatere den viste skabelon ved hjælp af JavaScript.

### Opgave

Vi bruger et simpelt objekt til at implementere et [kort](https://en.wikipedia.org/wiki/Associative_array) mellem URL-stier og vores skabeloner. Tilføj dette objekt øverst i din `app.js`-fil.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Lad os nu ændre lidt på `updateRoute`-funktionen. I stedet for at sende `templateId` direkte som et argument, vil vi hente det ved først at kigge på den aktuelle URL og derefter bruge vores kort til at få den tilsvarende skabelon-id-værdi. Vi kan bruge [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) til kun at få stisektionen fra URL'en.

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

Her kortlagde vi de ruter, vi erklærede, til den tilsvarende skabelon. Du kan prøve, at det fungerer korrekt ved manuelt at ændre URL'en i din browser.

✅ Hvad sker der, hvis du indtaster en ukendt sti i URL'en? Hvordan kunne vi løse dette?

## Tilføjelse af navigation

Det næste trin for vores app er at tilføje muligheden for at navigere mellem sider uden at skulle ændre URL'en manuelt. Dette indebærer to ting:

1. Opdatering af den aktuelle URL
2. Opdatering af den viste skabelon baseret på den nye URL

Vi har allerede taget os af den anden del med `updateRoute`-funktionen, så vi skal finde ud af, hvordan vi opdaterer den aktuelle URL.

Vi skal bruge JavaScript og mere specifikt [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), som gør det muligt at opdatere URL'en og oprette en ny post i browserens historik uden at genindlæse HTML'en.

> Bemærk: Mens HTML-anker-elementet [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) kan bruges alene til at oprette hyperlinks til forskellige URL'er, vil det som standard få browseren til at genindlæse HTML'en. Det er nødvendigt at forhindre denne adfærd, når man håndterer routing med brugerdefineret JavaScript, ved at bruge `preventDefault()`-funktionen på klikbegivenheden.

### Opgave

Lad os oprette en ny funktion, vi kan bruge til at navigere i vores app:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Denne metode opdaterer først den aktuelle URL baseret på den givne sti og opdaterer derefter skabelonen. Egenskaben `window.location.origin` returnerer URL-roden, hvilket gør det muligt for os at rekonstruere en komplet URL ud fra en given sti.

Nu hvor vi har denne funktion, kan vi tage os af problemet, vi har, hvis en sti ikke matcher nogen defineret rute. Vi ændrer `updateRoute`-funktionen ved at tilføje en fallback til en af de eksisterende ruter, hvis vi ikke kan finde et match.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Hvis en rute ikke kan findes, omdirigerer vi nu til `login`-siden.

Lad os nu oprette en funktion til at få URL'en, når et link klikkes, og forhindre browserens standard linkadfærd:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Lad os fuldføre navigationssystemet ved at tilføje bindinger til vores *Login*- og *Logout*-links i HTML'en.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

`event`-objektet ovenfor fanger `click`-begivenheden og sender den til vores `onLinkClick`-funktion.

Ved hjælp af [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)-attributten binder vi `click`-begivenheden til JavaScript-koden, her kaldet til `navigate()`-funktionen.

Prøv at klikke på disse links, du burde nu kunne navigere mellem de forskellige skærme i din app.

✅ Metoden `history.pushState` er en del af HTML5-standarden og implementeret i [alle moderne browsere](https://caniuse.com/?search=pushState). Hvis du bygger en webapp til ældre browsere, er der et trick, du kan bruge i stedet for dette API: Ved at bruge et [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) før stien kan du implementere routing, der fungerer med almindelig anker-navigation og ikke genindlæser siden, da dens formål var at skabe interne links inden for en side.

## Håndtering af browserens tilbage- og fremadknapper

Brug af `history.pushState` opretter nye poster i browserens navigationshistorik. Du kan tjekke det ved at holde *tilbage-knappen* i din browser nede, det skulle vise noget som dette:

![Skærmbillede af navigationshistorik](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.da.png)

Hvis du prøver at klikke på tilbage-knappen et par gange, vil du se, at den aktuelle URL ændres, og historikken opdateres, men den samme skabelon bliver ved med at blive vist.

Det skyldes, at applikationen ikke ved, at vi skal kalde `updateRoute()` hver gang historikken ændres. Hvis du kigger på [`history.pushState`-dokumentationen](https://developer.mozilla.org/docs/Web/API/History/pushState), kan du se, at hvis tilstanden ændres - hvilket betyder, at vi flyttede til en anden URL - udløses [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)-begivenheden. Vi vil bruge det til at løse dette problem.

### Opgave

For at sikre, at den viste skabelon opdateres, når browserhistorikken ændres, tilføjer vi en ny funktion, der kalder `updateRoute()`. Vi gør det nederst i vores `app.js`-fil:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Bemærk: Vi brugte en [pilesyntaks](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) her til at erklære vores `popstate`-begivenhedshåndtering for kortfattethed, men en almindelig funktion ville fungere på samme måde.

Her er en genopfriskningsvideo om pilesyntaks:

[![Pilesyntaks](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Pilesyntaks")

> 🎥 Klik på billedet ovenfor for en video om pilesyntaks.

Prøv nu at bruge tilbage- og fremadknapperne i din browser, og tjek, at den viste rute opdateres korrekt denne gang.

---

## 🚀 Udfordring

Tilføj en ny skabelon og rute til en tredje side, der viser credits for denne app.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/42)

## Gennemgang & Selvstudie

Routing er en af de overraskende vanskelige dele af webudvikling, især efterhånden som nettet bevæger sig fra sideopdateringsadfærd til Single Page Application-opdateringer. Læs lidt om [hvordan Azure Static Web App-tjenesten](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) håndterer routing. Kan du forklare, hvorfor nogle af de beslutninger, der er beskrevet i det dokument, er nødvendige?

## Opgave

[Forbedr routing](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.