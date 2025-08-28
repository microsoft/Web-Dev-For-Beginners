<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-26T22:55:09+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "sv"
}
-->
# Bygg en bankapp del 2: Skapa ett inloggnings- och registreringsformulär

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/43)

### Introduktion

I nästan alla moderna webbappar kan du skapa ett konto för att få din egen privata plats. Eftersom flera användare kan använda en webbapp samtidigt behöver du en mekanism för att lagra varje användares personliga data separat och välja vilken information som ska visas. Vi kommer inte att gå igenom hur man hanterar [användaridentitet säkert](https://en.wikipedia.org/wiki/Authentication) eftersom det är ett omfattande ämne i sig, men vi kommer att se till att varje användare kan skapa ett (eller flera) bankkonto i vår app.

I den här delen kommer vi att använda HTML-formulär för att lägga till inloggning och registrering i vår webbapp. Vi kommer att se hur man skickar data till en server-API programmatiskt och slutligen hur man definierar grundläggande valideringsregler för användarinmatningar.

### Förkunskaper

Du behöver ha slutfört [HTML-mallar och routing](../1-template-route/README.md) för webbappen för denna lektion. Du behöver också installera [Node.js](https://nodejs.org) och [köra server-API:t](../api/README.md) lokalt så att du kan skicka data för att skapa konton.

**Observera**
Du kommer att ha två terminaler igång samtidigt enligt listan nedan:
1. För huvudbankappen vi byggde i lektionen [HTML-mallar och routing](../1-template-route/README.md)
2. För [Bank APP server-API:t](../api/README.md) som vi just satte upp ovan.

Du behöver ha båda servrarna igång för att följa resten av lektionen. De lyssnar på olika portar (port `3000` och port `5000`) så allt bör fungera utan problem.

Du kan testa att servern körs korrekt genom att köra detta kommando i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Formulär och kontroller

Elementet `<form>` kapslar in en sektion av ett HTML-dokument där användaren kan mata in och skicka data med interaktiva kontroller. Det finns alla möjliga användargränssnittskontroller (UI) som kan användas inom ett formulär, den vanligaste är `<input>` och `<button>`-elementen.

Det finns många olika [typer](https://developer.mozilla.org/docs/Web/HTML/Element/input) av `<input>`, till exempel för att skapa ett fält där användaren kan ange sitt användarnamn kan du använda:

```html
<input id="username" name="username" type="text">
```

Attributet `name` kommer att användas som egenskapsnamn när formulärdata skickas. Attributet `id` används för att associera en `<label>` med formulärkontrollen.

> Ta en titt på hela listan över [`<input>`-typer](https://developer.mozilla.org/docs/Web/HTML/Element/input) och [andra formulärkontroller](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) för att få en idé om alla inbyggda UI-element du kan använda när du bygger ditt gränssnitt.

✅ Observera att `<input>` är ett [tomt element](https://developer.mozilla.org/docs/Glossary/Empty_element) som du *inte* bör lägga till en matchande avslutande tagg på. Du kan dock använda den självstängande `<input/>`-notationen, men det är inte nödvändigt.

Elementet `<button>` inom ett formulär är lite speciellt. Om du inte anger dess attribut `type` kommer det automatiskt att skicka formulärdata till servern när det trycks. Här är de möjliga värdena för `type`:

- `submit`: Standard inom ett `<form>`, knappen utlöser formulärets skicka-åtgärd.
- `reset`: Knappen återställer alla formulärkontroller till deras ursprungliga värden.
- `button`: Tilldelar ingen standardbeteende när knappen trycks. Du kan sedan tilldela anpassade åtgärder med JavaScript.

### Uppgift

Låt oss börja med att lägga till ett formulär till `login`-mallen. Vi behöver ett fält för *användarnamn* och en *Logga in*-knapp.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Om du tittar närmare kan du märka att vi också har lagt till ett `<label>`-element här. `<label>`-element används för att lägga till ett namn till UI-kontroller, såsom vårt användarnamnsfält. Etiketter är viktiga för läsbarheten av dina formulär, men har också ytterligare fördelar:

- Genom att associera en etikett med en formulärkontroll hjälper det användare som använder hjälpmedelstekniker (som skärmläsare) att förstå vilken data de förväntas ange.
- Du kan klicka på etiketten för att direkt sätta fokus på den associerade inmatningen, vilket gör det enklare att nå på pekskärmsbaserade enheter.

> [Tillgänglighet](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) på webben är ett mycket viktigt ämne som ofta förbises. Tack vare [semantiska HTML-element](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) är det inte svårt att skapa tillgängligt innehåll om du använder dem korrekt. Du kan [läsa mer om tillgänglighet](https://developer.mozilla.org/docs/Web/Accessibility) för att undvika vanliga misstag och bli en ansvarsfull utvecklare.

Nu ska vi lägga till ett andra formulär för registrering, precis under det föregående:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Med attributet `value` kan vi definiera ett standardvärde för en given inmatning. Observera också att inmatningen för `balance` har typen `number`. Ser det annorlunda ut än de andra inmatningarna? Prova att interagera med det.

✅ Kan du navigera och interagera med formulären med bara ett tangentbord? Hur skulle du göra det?

## Skicka data till servern

Nu när vi har ett funktionellt gränssnitt är nästa steg att skicka data till vår server. Låt oss göra ett snabbt test med vår nuvarande kod: vad händer om du klickar på knappen *Logga in* eller *Registrera*?

Märkte du förändringen i webbläsarens URL-sektion?

![Skärmdump av webbläsarens URL-förändring efter att ha klickat på knappen Registrera](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.sv.png)

Standardåtgärden för ett `<form>` är att skicka formuläret till den aktuella server-URL:en med [GET-metoden](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), och lägga till formulärdata direkt till URL:en. Denna metod har dock vissa begränsningar:

- Den data som skickas är mycket begränsad i storlek (cirka 2000 tecken)
- Data är direkt synlig i URL:en (inte bra för lösenord)
- Det fungerar inte med filuppladdningar

Därför kan du ändra det till att använda [POST-metoden](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) som skickar formulärdata till servern i HTTP-förfrågans kropp, utan några av de tidigare begränsningarna.

> Även om POST är den mest använda metoden för att skicka data, [i vissa specifika scenarier](https://www.w3.org/2001/tag/doc/whenToUseGet.html) är det att föredra att använda GET-metoden, till exempel när man implementerar ett sökfält.

### Uppgift

Lägg till egenskaperna `action` och `method` till registreringsformuläret:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Prova nu att registrera ett nytt konto med ditt namn. Efter att ha klickat på knappen *Registrera* bör du se något som detta:

![En webbläsarfönster på adressen localhost:5000/api/accounts, som visar en JSON-sträng med användardata](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.sv.png)

Om allt går bra bör servern svara på din begäran med ett [JSON](https://www.json.org/json-en.html)-svar som innehåller kontodata som skapades.

✅ Försök registrera igen med samma namn. Vad händer?

## Skicka data utan att ladda om sidan

Som du förmodligen märkte finns det ett litet problem med det tillvägagångssätt vi just använde: när vi skickar formuläret lämnar vi vår app och webbläsaren omdirigerar till serverns URL. Vi försöker undvika alla sidomladdningar med vår webbapp, eftersom vi skapar en [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

För att skicka formulärdata till servern utan att tvinga en sidomladdning måste vi använda JavaScript-kod. Istället för att lägga en URL i egenskapen `action` för ett `<form>`-element kan du använda JavaScript-kod som föregås av strängen `javascript:` för att utföra en anpassad åtgärd. Genom att använda detta innebär det också att du måste implementera vissa uppgifter som tidigare gjordes automatiskt av webbläsaren:

- Hämta formulärdata
- Konvertera och koda formulärdata till ett lämpligt format
- Skapa HTTP-förfrågan och skicka den till servern

### Uppgift

Byt ut registreringsformulärets `action` med:

```html
<form id="registerForm" action="javascript:register()">
```

Öppna `app.js` och lägg till en ny funktion som heter `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Här hämtar vi formulärelementet med `getElementById()` och använder hjälparen [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) för att extrahera värdena från formulärkontroller som en uppsättning nyckel/värde-par. Sedan konverterar vi data till ett vanligt objekt med [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) och slutligen serialiserar vi data till [JSON](https://www.json.org/json-en.html), ett format som ofta används för att utbyta data på webben.

Data är nu redo att skickas till servern. Skapa en ny funktion som heter `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Vad gör denna funktion? Först, observera nyckelordet `async` här. Detta innebär att funktionen innehåller kod som kommer att exekveras [**asynkront**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). När det används tillsammans med nyckelordet `await` tillåter det att vänta på att asynkron kod ska exekveras - som att vänta på serverns svar här - innan den fortsätter.

Här är en snabb video om användning av `async/await`:

[![Async och Await för att hantera löften](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async och Await för att hantera löften")

> 🎥 Klicka på bilden ovan för en video om async/await.

Vi använder `fetch()`-API:t för att skicka JSON-data till servern. Denna metod tar 2 parametrar:

- Serverns URL, så vi lägger tillbaka `//localhost:5000/api/accounts` här.
- Inställningarna för begäran. Det är där vi ställer in metoden till `POST` och tillhandahåller `body` för begäran. Eftersom vi skickar JSON-data till servern måste vi också ställa in `Content-Type`-headern till `application/json` så att servern vet hur man tolkar innehållet.

Eftersom servern kommer att svara på begäran med JSON kan vi använda `await response.json()` för att analysera JSON-innehållet och returnera det resulterande objektet. Observera att denna metod är asynkron, så vi använder nyckelordet `await` här innan vi returnerar för att säkerställa att eventuella fel under analysen också fångas.

Lägg nu till lite kod i funktionen `register` för att kalla `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Eftersom vi använder nyckelordet `await` här måste vi lägga till nyckelordet `async` före registerfunktionen:

```js
async function register() {
```

Slutligen, låt oss lägga till några loggar för att kontrollera resultatet. Den slutliga funktionen bör se ut så här:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Det var lite långt men vi kom dit! Om du öppnar [webbläsarens utvecklarverktyg](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) och försöker registrera ett nytt konto, bör du inte se någon förändring på webbsidan men ett meddelande kommer att visas i konsolen som bekräftar att allt fungerar.

![Skärmdump som visar loggmeddelande i webbläsarkonsolen](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.sv.png)

✅ Tror du att data skickas till servern säkert? Vad händer om någon lyckas avlyssna begäran? Du kan läsa om [HTTPS](https://en.wikipedia.org/wiki/HTTPS) för att lära dig mer om säker datakommunikation.

## Datavalidering

Om du försöker registrera ett nytt konto utan att ange ett användarnamn först kan du se att servern returnerar ett fel med statuskod [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Innan du skickar data till en server är det en bra praxis att [validera formulärdata](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) i förväg när det är möjligt, för att säkerställa att du skickar en giltig begäran. HTML5-formulärkontroller tillhandahåller inbyggd validering med olika attribut:

- `required`: fältet måste fyllas i, annars kan formuläret inte skickas.
- `minlength` och `maxlength`: definierar det minsta och maximala antalet tecken i textfält.
- `min` och `max`: definierar det minsta och maximala värdet för ett numeriskt fält.
- `type`: definierar vilken typ av data som förväntas, som `number`, `email`, `file` eller [andra inbyggda typer](https://developer.mozilla.org/docs/Web/HTML/Element/input). Detta attribut kan också ändra den visuella renderingen av formulärkontrollen.
- `pattern`: tillåter att definiera ett [reguljärt uttryck](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions)-mönster för att testa om den angivna datan är giltig eller inte.
> Tips: du kan anpassa utseendet på dina formulärkontroller beroende på om de är giltiga eller ogiltiga genom att använda CSS-pseudoklasserna `:valid` och `:invalid`.
### Uppgift

Det finns två obligatoriska fält för att skapa ett giltigt nytt konto: användarnamn och valuta. De andra fälten är valfria. Uppdatera formulärets HTML genom att använda både attributet `required` och text i fältets etikett så att:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Även om denna specifika serverimplementation inte ställer några specifika gränser för fältens maximala längd, är det alltid en bra praxis att definiera rimliga gränser för all användarinmatning.

Lägg till attributet `maxlength` till textfälten:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Om du nu trycker på knappen *Registrera* och ett fält inte följer en valideringsregel som vi har definierat, bör du se något liknande detta:

![Skärmdump som visar valideringsfelet när man försöker skicka formuläret](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.sv.png)

Validering som denna, som utförs *innan* någon data skickas till servern, kallas **klientbaserad** validering. Men notera att det inte alltid är möjligt att utföra alla kontroller utan att skicka data. Till exempel kan vi inte här kontrollera om ett konto redan existerar med samma användarnamn utan att skicka en begäran till servern. Ytterligare validering som utförs på servern kallas **serverbaserad** validering.

Vanligtvis behöver båda implementeras, och även om klientbaserad validering förbättrar användarupplevelsen genom att ge omedelbar feedback till användaren, är serverbaserad validering avgörande för att säkerställa att användardata som hanteras är korrekt och säker.

---

## 🚀 Utmaning

Visa ett felmeddelande i HTML om användaren redan existerar.

Här är ett exempel på hur den slutliga inloggningssidan kan se ut efter lite styling:

![Skärmdump av inloggningssidan efter att CSS-stilar har lagts till](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.sv.png)

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/44)

## Granskning & Självstudier

Utvecklare har blivit mycket kreativa när det gäller att bygga formulär, särskilt när det handlar om valideringsstrategier. Lär dig om olika formulärflöden genom att titta på [CodePen](https://codepen.com); kan du hitta några intressanta och inspirerande formulär?

## Uppgift

[Styla din bankapp](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.