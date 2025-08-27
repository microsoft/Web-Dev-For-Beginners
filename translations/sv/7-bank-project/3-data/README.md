<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-26T23:00:53+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "sv"
}
-->
# Bygg en bankapp del 3: Metoder för att hämta och använda data

## Förhandsquiz

[Förhandsquiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45)

### Introduktion

I kärnan av varje webbapplikation finns *data*. Data kan ta många former, men dess huvudsakliga syfte är alltid att visa information för användaren. Med webbappar som blir alltmer interaktiva och komplexa är hur användaren får tillgång till och interagerar med information nu en nyckeldel av webbutveckling.

I denna lektion kommer vi att se hur man hämtar data från en server asynkront och använder denna data för att visa information på en webbsida utan att ladda om HTML.

### Förkunskaper

Du behöver ha byggt [Inloggnings- och registreringsformuläret](../2-forms/README.md) som en del av webbappen för denna lektion. Du behöver också installera [Node.js](https://nodejs.org) och [köra server-API:t](../api/README.md) lokalt för att få kontodata.

Du kan testa att servern fungerar korrekt genom att köra detta kommando i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX och datahämtning

Traditionella webbplatser uppdaterar det visade innehållet när användaren väljer en länk eller skickar data via ett formulär, genom att ladda om hela HTML-sidan. Varje gång ny data behöver laddas returnerar webbservern en helt ny HTML-sida som måste bearbetas av webbläsaren, vilket avbryter den aktuella användaråtgärden och begränsar interaktioner under omladdningen. Detta arbetsflöde kallas också för en *Multi-Page Application* eller *MPA*.

![Uppdateringsflöde i en fler-sidapplikation](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.sv.png)

När webbapplikationer började bli mer komplexa och interaktiva, uppstod en ny teknik kallad [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Denna teknik gör det möjligt för webbappar att skicka och hämta data från en server asynkront med hjälp av JavaScript, utan att behöva ladda om HTML-sidan, vilket resulterar i snabbare uppdateringar och smidigare användarinteraktioner. När ny data tas emot från servern kan den aktuella HTML-sidan också uppdateras med JavaScript med hjälp av [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)-API:t. Med tiden har detta tillvägagångssätt utvecklats till vad som nu kallas en [*Single-Page Application* eller *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Uppdateringsflöde i en en-sidapplikation](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.sv.png)

När AJAX först introducerades var det enda API:t som fanns tillgängligt för att hämta data asynkront [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Men moderna webbläsare implementerar nu det mer praktiska och kraftfulla [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), som använder promises och är bättre lämpat för att hantera JSON-data.

> Även om alla moderna webbläsare stöder `Fetch API`, är det alltid en bra idé att kontrollera [kompatibilitetstabellen på caniuse.com](https://caniuse.com/fetch) först om du vill att din webbapplikation ska fungera på äldre webbläsare.

### Uppgift

I [den föregående lektionen](../2-forms/README.md) implementerade vi registreringsformuläret för att skapa ett konto. Nu ska vi lägga till kod för att logga in med ett befintligt konto och hämta dess data. Öppna filen `app.js` och lägg till en ny funktion `login`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Här börjar vi med att hämta formulärelementet med `getElementById()` och sedan hämtar vi användarnamnet från inmatningen med `loginForm.user.value`. Varje formulärkontroll kan nås via sitt namn (som anges i HTML med attributet `name`) som en egenskap av formuläret.

På liknande sätt som vi gjorde för registreringen, skapar vi en annan funktion för att utföra en serverförfrågan, men denna gång för att hämta kontodata:

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

Vi använder `fetch`-API:t för att begära data asynkront från servern, men denna gång behöver vi inga extra parametrar förutom URL:en att anropa, eftersom vi bara hämtar data. Som standard skapar `fetch` en [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET)-HTTP-förfrågan, vilket är vad vi söker här.

✅ `encodeURIComponent()` är en funktion som undviker specialtecken för URL. Vilka problem kan vi möjligen få om vi inte anropar denna funktion och använder värdet `user` direkt i URL:en?

Låt oss nu uppdatera vår `login`-funktion för att använda `getAccount`:

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

Först, eftersom `getAccount` är en asynkron funktion, måste vi matcha den med nyckelordet `await` för att vänta på serverresultatet. Som med alla serverförfrågningar måste vi också hantera fel. För tillfället lägger vi bara till ett loggmeddelande för att visa felet och återkommer till det senare.

Sedan måste vi lagra datan någonstans så att vi senare kan använda den för att visa informationen på instrumentpanelen. Eftersom variabeln `account` ännu inte existerar, skapar vi en global variabel för den högst upp i vår fil:

```js
let account = null;
```

Efter att användardatan har sparats i en variabel kan vi navigera från *login*-sidan till *dashboard* med hjälp av funktionen `navigate()` som vi redan har.

Slutligen behöver vi anropa vår `login`-funktion när inloggningsformuläret skickas, genom att ändra HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Testa att allt fungerar korrekt genom att registrera ett nytt konto och försöka logga in med samma konto.

Innan vi går vidare till nästa del kan vi också komplettera funktionen `register` genom att lägga till detta längst ner i funktionen:

```js
account = result;
navigate('/dashboard');
```

✅ Visste du att du som standard bara kan anropa server-API:er från *samma domän och port* som webbsidan du tittar på? Detta är en säkerhetsmekanism som webbläsare upprätthåller. Men vänta, vår webbapp körs på `localhost:3000` medan server-API:t körs på `localhost:5000`, varför fungerar det? Genom att använda en teknik kallad [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) är det möjligt att utföra cross-origin HTTP-förfrågningar om servern lägger till speciella headers i svaret, vilket tillåter undantag för specifika domäner.

> Läs mer om API:er genom att ta denna [lektion](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Uppdatera HTML för att visa data

Nu när vi har användardata måste vi uppdatera den befintliga HTML:n för att visa den. Vi vet redan hur man hämtar ett element från DOM med till exempel `document.getElementById()`. Efter att du har ett bas-element, här är några API:er du kan använda för att ändra det eller lägga till barn-element:

- Med egenskapen [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) kan du ändra texten i ett element. Observera att ändring av detta värde tar bort alla elementets barn (om det finns några) och ersätter det med den angivna texten. Som sådan är det också en effektiv metod för att ta bort alla barn till ett givet element genom att tilldela en tom sträng `''` till det.

- Med [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) tillsammans med metoden [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) kan du skapa och bifoga ett eller flera nya barn-element.

✅ Med egenskapen [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) för ett element är det också möjligt att ändra dess HTML-innehåll, men denna bör undvikas eftersom den är sårbar för [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)-attacker.

### Uppgift

Innan vi går vidare till instrumentpanelen finns det en sak till vi bör göra på *login*-sidan. För närvarande, om du försöker logga in med ett användarnamn som inte finns, visas ett meddelande i konsolen men för en vanlig användare ändras ingenting och du vet inte vad som händer.

Låt oss lägga till ett platshållarelement i inloggningsformuläret där vi kan visa ett felmeddelande vid behov. En bra plats skulle vara precis före inloggnings-`<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Detta `<div>`-element är tomt, vilket innebär att ingenting kommer att visas på skärmen förrän vi lägger till något innehåll i det. Vi ger det också ett `id` så att vi enkelt kan hämta det med JavaScript.

Gå tillbaka till filen `app.js` och skapa en ny hjälpfunktion `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Denna är ganska enkel: givet ett element-*id* och *text*, kommer den att uppdatera textinnehållet i DOM-elementet med det matchande `id`. Låt oss använda denna metod istället för det tidigare felmeddelandet i funktionen `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Nu, om du försöker logga in med ett ogiltigt konto, bör du se något som detta:

![Skärmdump som visar felmeddelandet under inloggning](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.sv.png)

Nu har vi feltext som visas visuellt, men om du försöker med en skärmläsare kommer du att märka att ingenting annonseras. För att text som dynamiskt läggs till på en sida ska annonseras av skärmläsare måste den använda något som kallas en [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Här ska vi använda en specifik typ av live-region som kallas en alert:

```html
<div id="loginError" role="alert"></div>
```

Implementera samma beteende för fel i funktionen `register` (glöm inte att uppdatera HTML).

## Visa information på instrumentpanelen

Med samma tekniker som vi just har sett, ska vi också ta hand om att visa kontoinformationen på instrumentpanelsidan.

Så här ser ett kontoobjekt som tas emot från servern ut:

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

> Obs: för att göra ditt liv enklare kan du använda det förbefintliga `test`-kontot som redan är fyllt med data.

### Uppgift

Låt oss börja med att ersätta "Balance"-sektionen i HTML för att lägga till platshållarelement:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Vi lägger också till en ny sektion precis nedanför för att visa kontobeskrivningen:

```html
<h2 id="description"></h2>
```

✅ Eftersom kontobeskrivningen fungerar som en titel för innehållet under den, markeras den semantiskt som en rubrik. Läs mer om hur [rubrikstruktur](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) är viktig för tillgänglighet och ta en kritisk titt på sidan för att avgöra vad mer som kan vara en rubrik.

Nästa steg är att skapa en ny funktion i `app.js` för att fylla i platshållaren:

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

Först kontrollerar vi att vi har den kontodata vi behöver innan vi går vidare. Sedan använder vi funktionen `updateElement()` som vi skapade tidigare för att uppdatera HTML.

> För att göra saldovisningen snyggare använder vi metoden [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) för att tvinga visning av värdet med 2 decimaler.

Nu behöver vi anropa vår `updateDashboard()`-funktion varje gång instrumentpanelen laddas. Om du redan har avslutat [lektion 1-uppgiften](../1-template-route/assignment.md) bör detta vara enkelt, annars kan du använda följande implementation.

Lägg till denna kod i slutet av funktionen `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Och uppdatera routedefinitionerna med:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Med denna ändring kommer funktionen `updateDashboard()` att anropas varje gång instrumentpanelsidan visas. Efter en inloggning bör du då kunna se kontosaldot, valutan och beskrivningen.

## Skapa tabellrader dynamiskt med HTML-mallar

I [första lektionen](../1-template-route/README.md) använde vi HTML-mallar tillsammans med metoden [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) för att implementera navigeringen i vår app. Mallar kan också vara mindre och användas för att dynamiskt fylla repetitiva delar av en sida.

Vi ska använda ett liknande tillvägagångssätt för att visa listan över transaktioner i HTML-tabellen.

### Uppgift

Lägg till en ny mall i HTML-`<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Denna mall representerar en enskild tabellrad med de 3 kolumner vi vill fylla: *datum*, *objekt* och *belopp* för en transaktion.

Lägg sedan till denna `id`-egenskap i `<tbody>`-elementet i tabellen inom instrumentpanelsmallen för att göra det lättare att hitta med JavaScript:

```html
<tbody id="transactions"></tbody>
```

Vår HTML är klar, låt oss byta till JavaScript-kod och skapa en ny funktion `createTransactionRow`:

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

Denna funktion gör exakt vad dess namn antyder: med hjälp av mallen vi skapade tidigare, skapar den en ny tabellrad och fyller dess innehåll med transaktionsdata. Vi ska använda detta i vår `updateDashboard()`-funktion för att fylla tabellen:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Här använder vi metoden [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) som skapar ett nytt DOM-fragment som vi kan arbeta med innan vi slutligen bifogar det till vår HTML-tabell.

Det finns fortfarande en sak vi måste göra innan denna kod kan fungera, eftersom vår `updateElement()`-funktion för närvarande bara stöder textinnehåll. Låt oss ändra dess kod lite:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Vi använder metoden [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) eftersom den tillåter att bifoga antingen text eller [DOM Nodes](https://developer.mozilla.org/docs/Web/API/Node) till ett föräldraelement, vilket är perfekt för alla våra användningsfall.
Om du försöker använda `test`-kontot för att logga in, bör du nu se en transaktionslista på instrumentpanelen 🎉.

---

## 🚀 Utmaning

Arbeta tillsammans för att få instrumentpanelsidan att se ut som en riktig bankapp. Om du redan har stylat din app, försök använda [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) för att skapa en [responsiv design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) som fungerar bra både på stationära och mobila enheter.

Här är ett exempel på en stylad instrumentpanelsida:

![Skärmdump av ett exempelresultat av instrumentpanelen efter styling](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.sv.png)

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46)

## Uppgift

[Refaktorisera och kommentera din kod](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.