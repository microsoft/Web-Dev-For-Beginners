<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-26T23:05:07+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "sv"
}
-->
# Bygg en bankapp Del 1: HTML-mallar och rutter i en webbapp

## Förhandsquiz

[Förhandsquiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Introduktion

Sedan JavaScript introducerades i webbläsare har webbplatser blivit mer interaktiva och komplexa än någonsin. Webbteknologier används nu ofta för att skapa fullt fungerande applikationer som körs direkt i en webbläsare, vilket vi kallar [webbapplikationer](https://en.wikipedia.org/wiki/Web_application). Eftersom webbappar är mycket interaktiva vill användare inte vänta på att hela sidan laddas om varje gång en åtgärd utförs. Därför används JavaScript för att uppdatera HTML direkt via DOM, vilket ger en smidigare användarupplevelse.

I den här lektionen ska vi lägga grunden för att skapa en bankwebbapp, genom att använda HTML-mallar för att skapa flera skärmar som kan visas och uppdateras utan att hela HTML-sidan behöver laddas om.

### Förkunskaper

Du behöver en lokal webbserver för att testa webbappen vi bygger i den här lektionen. Om du inte har en, kan du installera [Node.js](https://nodejs.org) och använda kommandot `npx lite-server` från din projektmapp. Det skapar en lokal webbserver och öppnar din app i en webbläsare.

### Förberedelse

På din dator, skapa en mapp som heter `bank` med en fil som heter `index.html` inuti. Vi börjar med denna HTML-[mall](https://en.wikipedia.org/wiki/Boilerplate_code):

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

## HTML-mallar

Om du vill skapa flera skärmar för en webbsida kan en lösning vara att skapa en HTML-fil för varje skärm du vill visa. Denna lösning har dock vissa nackdelar:

- Du måste ladda om hela HTML-filen när du byter skärm, vilket kan vara långsamt.
- Det är svårt att dela data mellan de olika skärmarna.

Ett annat tillvägagångssätt är att ha endast en HTML-fil och definiera flera [HTML-mallar](https://developer.mozilla.org/docs/Web/HTML/Element/template) med hjälp av `<template>`-elementet. En mall är ett återanvändbart HTML-block som inte visas av webbläsaren och som måste instansieras vid körning med JavaScript.

### Uppgift

Vi ska skapa en bankapp med två skärmar: inloggningssidan och instrumentpanelen. Först lägger vi till ett platshållarelement i HTML-kroppen som vi kommer att använda för att instansiera de olika skärmarna i vår app:

```html
<div id="app">Loading...</div>
```

Vi ger det ett `id` för att göra det enklare att hitta det med JavaScript senare.

> Tips: Eftersom innehållet i detta element kommer att ersättas kan vi lägga in ett laddningsmeddelande eller en indikator som visas medan appen laddas.

Därefter lägger vi till HTML-mallen för inloggningssidan nedanför. För tillfället lägger vi bara till en titel och en sektion som innehåller en länk som vi kommer att använda för navigering.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Sedan lägger vi till en annan HTML-mall för instrumentpanelsidan. Denna sida kommer att innehålla olika sektioner:

- En header med en titel och en utloggningslänk
- Det aktuella saldot på bankkontot
- En lista över transaktioner, visad i en tabell

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

> Tips: När du skapar HTML-mallar, om du vill se hur de kommer att se ut, kan du kommentera ut `<template>` och `</template>`-raderna genom att omge dem med `<!-- -->`.

✅ Varför tror du att vi använder `id`-attribut på mallarna? Skulle vi kunna använda något annat, som klasser?

## Visa mallar med JavaScript

Om du testar din nuvarande HTML-fil i en webbläsare kommer du att se att den fastnar på att visa `Loading...`. Det beror på att vi behöver lägga till lite JavaScript-kod för att instansiera och visa HTML-mallarna.

Att instansiera en mall görs vanligtvis i tre steg:

1. Hämta mallelementet i DOM, till exempel med [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Klona mallelementet med [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Fästa det i DOM under ett synligt element, till exempel med [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Varför behöver vi klona mallen innan vi fäster den i DOM? Vad tror du skulle hända om vi hoppade över detta steg?

### Uppgift

Skapa en ny fil som heter `app.js` i din projektmapp och importera den filen i `<head>`-sektionen av din HTML:

```html
<script src="app.js" defer></script>
```

Nu i `app.js` skapar vi en ny funktion `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Det vi gör här är exakt de tre stegen som beskrivs ovan. Vi instansierar mallen med `id` `templateId` och placerar dess klonade innehåll i vår app-platshållare. Observera att vi behöver använda `cloneNode(true)` för att kopiera hela underträdet av mallen.

Anropa nu denna funktion med en av mallarna och titta på resultatet.

```js
updateRoute('login');
```

✅ Vad är syftet med koden `app.innerHTML = '';`? Vad händer utan den?

## Skapa rutter

När vi pratar om en webbapp kallar vi *Routing* för avsikten att koppla **URL:er** till specifika skärmar som ska visas. På en webbplats med flera HTML-filer görs detta automatiskt eftersom filvägarna återspeglas i URL:en. Till exempel, med dessa filer i din projektmapp:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Om du skapar en webbserver med `mywebsite` som rot, kommer URL-mappningen att vara:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Men för vår webbapp använder vi en enda HTML-fil som innehåller alla skärmar, så detta standardbeteende hjälper oss inte. Vi måste skapa denna mappning manuellt och uppdatera den visade mallen med JavaScript.

### Uppgift

Vi använder ett enkelt objekt för att implementera en [mappning](https://en.wikipedia.org/wiki/Associative_array) mellan URL-vägar och våra mallar. Lägg till detta objekt högst upp i din `app.js`-fil.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Nu ska vi modifiera funktionen `updateRoute` lite. Istället för att direkt skicka `templateId` som ett argument vill vi hämta det genom att först titta på den aktuella URL:en och sedan använda vår mappning för att få motsvarande mall-ID-värde. Vi kan använda [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) för att få endast sökvägsdelen från URL:en.

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

Här mappade vi de rutter vi deklarerade till motsvarande mall. Du kan testa att det fungerar korrekt genom att ändra URL:en manuellt i din webbläsare.

✅ Vad händer om du anger en okänd sökväg i URL:en? Hur skulle vi kunna lösa detta?

## Lägga till navigering

Nästa steg för vår app är att lägga till möjligheten att navigera mellan sidor utan att behöva ändra URL:en manuellt. Detta innebär två saker:

1. Uppdatera den aktuella URL:en  
2. Uppdatera den visade mallen baserat på den nya URL:en  

Vi har redan tagit hand om den andra delen med funktionen `updateRoute`, så vi måste lista ut hur vi uppdaterar den aktuella URL:en.

Vi måste använda JavaScript och mer specifikt [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), som gör det möjligt att uppdatera URL:en och skapa en ny post i webbläsarens historik utan att ladda om HTML.

> Obs: Även om HTML-ankarelementet [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) kan användas på egen hand för att skapa hyperlänkar till olika URL:er, kommer det som standard att få webbläsaren att ladda om HTML. Det är nödvändigt att förhindra detta beteende när man hanterar routing med anpassad JavaScript, genom att använda funktionen `preventDefault()` på klickhändelsen.

### Uppgift

Låt oss skapa en ny funktion som vi kan använda för att navigera i vår app:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Denna metod uppdaterar först den aktuella URL:en baserat på den angivna sökvägen och uppdaterar sedan mallen. Egenskapen `window.location.origin` returnerar URL-rot, vilket gör att vi kan återskapa en komplett URL från en given sökväg.

Nu när vi har denna funktion kan vi ta itu med problemet vi har om en sökväg inte matchar någon definierad rutt. Vi modifierar funktionen `updateRoute` genom att lägga till en fallback till en av de befintliga rutterna om vi inte hittar en matchning.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Om en rutt inte kan hittas omdirigerar vi nu till `login`-sidan.

Låt oss nu skapa en funktion för att få URL:en när en länk klickas och för att förhindra webbläsarens standardbeteende för länkar:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Låt oss slutföra navigeringssystemet genom att lägga till bindningar till våra *Login*- och *Logout*-länkar i HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Objektet `event` ovan fångar `click`-händelsen och skickar den till vår funktion `onLinkClick`.

Genom att använda attributet [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) binder vi `click`-händelsen till JavaScript-kod, här anropet till funktionen `navigate()`.

Prova att klicka på dessa länkar, du bör nu kunna navigera mellan de olika skärmarna i din app.

✅ Metoden `history.pushState` är en del av HTML5-standarden och implementerad i [alla moderna webbläsare](https://caniuse.com/?search=pushState). Om du bygger en webbapp för äldre webbläsare finns det ett knep du kan använda istället för detta API: genom att använda en [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) före sökvägen kan du implementera routing som fungerar med vanliga ankarnavigeringar och inte laddar om sidan, eftersom dess syfte var att skapa interna länkar inom en sida.

## Hantera webbläsarens fram- och bakåtknappar

Användning av `history.pushState` skapar nya poster i webbläsarens navigeringshistorik. Du kan kontrollera det genom att hålla ned *bakåtknappen* i din webbläsare, det bör visa något liknande detta:

![Skärmdump av navigeringshistorik](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.sv.png)

Om du försöker klicka på bakåtknappen några gånger kommer du att se att den aktuella URL:en ändras och historiken uppdateras, men samma mall fortsätter att visas.

Detta beror på att applikationen inte vet att vi behöver anropa `updateRoute()` varje gång historiken ändras. Om du tittar på dokumentationen för [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) kan du se att om tillståndet ändras - vilket betyder att vi flyttade till en annan URL - triggas händelsen [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event). Vi kommer att använda detta för att lösa problemet.

### Uppgift

För att säkerställa att den visade mallen uppdateras när webbläsarens historik ändras, kommer vi att bifoga en ny funktion som anropar `updateRoute()`. Vi gör detta längst ner i vår `app.js`-fil:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Obs: Vi använde en [pilsfunktion](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) här för att deklarera vår `popstate`-händelsehanterare för korthetens skull, men en vanlig funktion skulle fungera lika bra.

Här är en uppfräschande video om pilsfunktioner:

[![Pilsfunktioner](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Pilsfunktioner")

> 🎥 Klicka på bilden ovan för en video om pilsfunktioner.

Prova nu att använda bakåt- och framåtknapparna i din webbläsare och kontrollera att den visade rutten uppdateras korrekt denna gång.

---

## 🚀 Utmaning

Lägg till en ny mall och rutt för en tredje sida som visar krediterna för denna app.

## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Granskning och självstudier

Routing är en av de överraskande knepiga delarna av webbutveckling, särskilt när webben går från siduppdateringsbeteenden till Single Page Application-uppdateringar. Läs lite om [hur Azure Static Web App-tjänsten](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) hanterar routing. Kan du förklara varför några av de beslut som beskrivs i det dokumentet är nödvändiga?

## Uppgift

[Förbättra routingen](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiska översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.