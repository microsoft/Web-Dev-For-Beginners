<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-26T23:06:26+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "no"
}
-->
# Bygg en bankapp Del 1: HTML-maler og ruter i en webapp

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/41)

### Introduksjon

Siden JavaScript ble introdusert i nettlesere, har nettsteder blitt mer interaktive og komplekse enn noen gang. Webteknologier brukes nå ofte til å lage fullt funksjonelle applikasjoner som kjører direkte i en nettleser, og som vi kaller [webapplikasjoner](https://en.wikipedia.org/wiki/Web_application). Siden webapplikasjoner er svært interaktive, ønsker ikke brukerne å vente på at hele siden skal lastes inn på nytt hver gang en handling utføres. Derfor brukes JavaScript til å oppdatere HTML direkte via DOM, for å gi en smidigere brukeropplevelse.

I denne leksjonen skal vi legge grunnlaget for å lage en bankapp ved å bruke HTML-maler for å lage flere skjermer som kan vises og oppdateres uten å måtte laste inn hele HTML-siden på nytt.

### Forutsetninger

Du trenger en lokal webserver for å teste webappen vi skal bygge i denne leksjonen. Hvis du ikke har en, kan du installere [Node.js](https://nodejs.org) og bruke kommandoen `npx lite-server` fra prosjektmappen din. Dette vil opprette en lokal webserver og åpne appen din i en nettleser.

### Forberedelse

På datamaskinen din, opprett en mappe kalt `bank` med en fil som heter `index.html` inni. Vi starter med denne HTML-[grunnstrukturen](https://en.wikipedia.org/wiki/Boilerplate_code):

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

## HTML-maler

Hvis du ønsker å lage flere skjermer for en nettside, kan en løsning være å opprette én HTML-fil for hver skjerm du vil vise. Denne løsningen har imidlertid noen ulemper:

- Du må laste inn hele HTML-en på nytt når du bytter skjerm, noe som kan være tregt.
- Det er vanskelig å dele data mellom de forskjellige skjermene.

En annen tilnærming er å ha kun én HTML-fil og definere flere [HTML-maler](https://developer.mozilla.org/docs/Web/HTML/Element/template) ved hjelp av `<template>`-elementet. En mal er en gjenbrukbar HTML-blokk som ikke vises av nettleseren, og som må opprettes dynamisk ved hjelp av JavaScript.

### Oppgave

Vi skal lage en bankapp med to skjermer: innloggingssiden og dashbordet. Først legger vi til et plassholderelement i HTML-body som vi skal bruke til å vise de forskjellige skjermene i appen vår:

```html
<div id="app">Loading...</div>
```

Vi gir det en `id` for å gjøre det enklere å finne det med JavaScript senere.

> Tips: Siden innholdet i dette elementet vil bli erstattet, kan vi legge inn en lastemelding eller indikator som vises mens appen lastes.

Deretter legger vi til HTML-malen for innloggingssiden. Foreløpig legger vi bare til en tittel og en seksjon som inneholder en lenke vi skal bruke til navigasjon.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Så legger vi til en annen HTML-mal for dashbordet. Denne siden vil inneholde forskjellige seksjoner:

- En header med en tittel og en logg ut-lenke
- Den nåværende saldoen på bankkontoen
- En liste over transaksjoner, vist i en tabell

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

> Tips: Når du lager HTML-maler, kan du kommentere ut `<template>`- og `</template>`-linjene med `<!-- -->` for å se hvordan det vil se ut.

✅ Hvorfor tror du vi bruker `id`-attributter på malene? Kunne vi brukt noe annet, som klasser?

## Vise maler med JavaScript

Hvis du prøver den nåværende HTML-filen i en nettleser, vil du se at den stopper opp med å vise `Loading...`. Det er fordi vi må legge til litt JavaScript-kode for å opprette og vise HTML-malene.

Å opprette en mal gjøres vanligvis i tre trinn:

1. Hent mal-elementet i DOM, for eksempel ved å bruke [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Klon mal-elementet ved hjelp av [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Fest det til DOM under et synlig element, for eksempel ved å bruke [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Hvorfor må vi klone malen før vi fester den til DOM? Hva tror du ville skjedd hvis vi hoppet over dette trinnet?

### Oppgave

Opprett en ny fil som heter `app.js` i prosjektmappen din og importer den filen i `<head>`-seksjonen av HTML-en:

```html
<script src="app.js" defer></script>
```

Nå i `app.js` skal vi lage en ny funksjon `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Det vi gjør her er nøyaktig de tre trinnene beskrevet ovenfor. Vi oppretter malen med `templateId` og legger det klonede innholdet i appens plassholder. Merk at vi må bruke `cloneNode(true)` for å kopiere hele understrukturen til malen.

Nå kan du kalle denne funksjonen med en av malene og se resultatet.

```js
updateRoute('login');
```

✅ Hva er hensikten med koden `app.innerHTML = '';`? Hva skjer uten den?

## Opprette ruter

Når vi snakker om en webapp, kaller vi *Routing* intensjonen om å knytte **URL-er** til spesifikke skjermer som skal vises. På et nettsted med flere HTML-filer gjøres dette automatisk, ettersom filbanene reflekteres i URL-en. For eksempel, med disse filene i prosjektmappen din:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Hvis du oppretter en webserver med `mywebsite` som rot, vil URL-kartleggingen være:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Men for vår webapp bruker vi en enkelt HTML-fil som inneholder alle skjermene, så denne standardatferden vil ikke hjelpe oss. Vi må opprette dette kartet manuelt og oppdatere den viste malen ved hjelp av JavaScript.

### Oppgave

Vi bruker et enkelt objekt for å implementere et [kart](https://en.wikipedia.org/wiki/Associative_array) mellom URL-baner og malene våre. Legg til dette objektet øverst i `app.js`-filen din.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Nå skal vi endre litt på `updateRoute`-funksjonen. I stedet for å sende `templateId` direkte som et argument, vil vi hente det ved først å se på den nåværende URL-en, og deretter bruke kartet vårt for å få tilsvarende mal-ID.

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

Her kartla vi rutene vi erklærte til de tilsvarende malene. Du kan teste at det fungerer riktig ved å endre URL-en manuelt i nettleseren din.

✅ Hva skjer hvis du skriver inn en ukjent bane i URL-en? Hvordan kunne vi løst dette?

## Legge til navigasjon

Neste steg for appen vår er å legge til muligheten til å navigere mellom sider uten å måtte endre URL-en manuelt. Dette innebærer to ting:

1. Oppdatere den nåværende URL-en
2. Oppdatere den viste malen basert på den nye URL-en

Vi har allerede tatt oss av den andre delen med `updateRoute`-funksjonen, så vi må finne ut hvordan vi oppdaterer den nåværende URL-en.

Vi må bruke JavaScript og mer spesifikt [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), som lar oss oppdatere URL-en og opprette en ny oppføring i nettleserens historikk uten å laste inn HTML-en på nytt.

> Merk: Selv om HTML-anker-elementet [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) kan brukes alene til å lage hyperlenker til forskjellige URL-er, vil det som standard få nettleseren til å laste inn HTML-en på nytt. Det er nødvendig å forhindre denne oppførselen når man håndterer ruting med egendefinert JavaScript, ved å bruke `preventDefault()`-funksjonen på klikkhendelsen.

### Oppgave

La oss lage en ny funksjon vi kan bruke til å navigere i appen vår:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Denne metoden oppdaterer først den nåværende URL-en basert på den gitte banen, og deretter oppdaterer den malen. Egenskapen `window.location.origin` returnerer URL-roten, slik at vi kan rekonstruere en fullstendig URL fra en gitt bane.

Nå som vi har denne funksjonen, kan vi ta oss av problemet vi har hvis en bane ikke samsvarer med noen definerte ruter. Vi skal endre `updateRoute`-funksjonen ved å legge til en fallback til en av de eksisterende rutene hvis vi ikke finner en samsvar.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Hvis en rute ikke kan finnes, vil vi nå omdirigere til innloggingssiden.

La oss lage en funksjon for å hente URL-en når en lenke klikkes, og for å forhindre nettleserens standard lenkeoppførsel:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

La oss fullføre navigasjonssystemet ved å legge til bindinger til *Login*- og *Logout*-lenkene i HTML-en.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

`event`-objektet ovenfor fanger opp `click`-hendelsen og sender den til `onLinkClick`-funksjonen vår.

Ved å bruke [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)-attributtet binder vi `click`-hendelsen til JavaScript-koden, her kallet til `navigate()`-funksjonen.

Prøv å klikke på disse lenkene, du skal nå kunne navigere mellom de forskjellige skjermene i appen din.

✅ Metoden `history.pushState` er en del av HTML5-standarden og implementert i [alle moderne nettlesere](https://caniuse.com/?search=pushState). Hvis du bygger en webapp for eldre nettlesere, finnes det et triks du kan bruke i stedet for dette API-et: ved å bruke en [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) før banen kan du implementere ruting som fungerer med vanlige ankerlenker og ikke laster inn siden på nytt, siden formålet var å lage interne lenker i en side.

## Håndtere nettleserens tilbake- og fremoverknapper

Bruken av `history.pushState` oppretter nye oppføringer i nettleserens navigasjonshistorikk. Du kan sjekke dette ved å holde inne *tilbakeknappen* i nettleseren din, det skal vise noe som dette:

![Skjermbilde av navigasjonshistorikk](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.no.png)

Hvis du prøver å klikke på tilbakeknappen noen ganger, vil du se at den nåværende URL-en endres og historikken oppdateres, men den samme malen fortsetter å vises.

Dette er fordi applikasjonen ikke vet at vi må kalle `updateRoute()` hver gang historikken endres. Hvis du ser på dokumentasjonen for [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), kan du se at hvis tilstanden endres - det vil si at vi flyttet til en annen URL - utløses [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)-hendelsen. Vi skal bruke dette for å fikse problemet.

### Oppgave

For å sikre at den viste malen oppdateres når nettleserhistorikken endres, skal vi legge til en ny funksjon som kaller `updateRoute()`. Vi gjør dette nederst i `app.js`-filen:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Merk: Vi brukte en [piltfunksjon](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) her for å erklære vår `popstate`-hendelseshåndterer for kortfattethet, men en vanlig funksjon ville fungert på samme måte.

Her er en oppfriskningsvideo om piltfunksjoner:

[![Piltfunksjoner](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Piltfunksjoner")

> 🎥 Klikk på bildet ovenfor for en video om piltfunksjoner.

Nå kan du prøve å bruke tilbake- og fremoverknappene i nettleseren din, og sjekke at den viste ruten oppdateres riktig denne gangen.

---

## 🚀 Utfordring

Legg til en ny mal og rute for en tredje side som viser kreditering for denne appen.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/42)

## Gjennomgang og selvstudium

Ruting er en av de overraskende vanskelige delene av webutvikling, spesielt ettersom nettet beveger seg fra sideoppdateringsatferd til Single Page Application-sideoppdateringer. Les litt om [hvordan Azure Static Web App-tjenesten](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) håndterer ruting. Kan du forklare hvorfor noen av beslutningene som er beskrevet i det dokumentet er nødvendige?

## Oppgave

[Forbedre rutingen](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.