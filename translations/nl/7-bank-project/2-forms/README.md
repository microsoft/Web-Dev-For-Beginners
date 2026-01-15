<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7cbdbd132d39a2bb493e85bc2a9387cc",
  "translation_date": "2025-11-04T02:02:10+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "nl"
}
-->
# Bouw een bankapp deel 2: Maak een inlog- en registratieformulier

```mermaid
journey
    title Your Form Development Journey
    section HTML Foundation
      Understand form elements: 3: Student
      Learn input types: 4: Student
      Master accessibility: 4: Student
    section JavaScript Integration
      Handle form submission: 4: Student
      Implement AJAX communication: 5: Student
      Process server responses: 5: Student
    section Validation Systems
      Create multi-layer validation: 5: Student
      Enhance user experience: 5: Student
      Ensure data integrity: 5: Student
```

## Pre-lezing Quiz

[Pre-lezing quiz](https://ff-quizzes.netlify.app/web/quiz/43)

Heb je ooit een online formulier ingevuld en werd je e-mailadres afgewezen? Of ben je al je gegevens kwijtgeraakt toen je op verzenden klikte? We hebben allemaal wel eens zulke frustrerende ervaringen gehad.

Formulieren zijn de brug tussen je gebruikers en de functionaliteit van je applicatie. Net zoals luchtverkeersleiders zorgvuldig protocollen gebruiken om vliegtuigen veilig naar hun bestemming te begeleiden, bieden goed ontworpen formulieren duidelijke feedback en voorkomen ze kostbare fouten. Slechte formulieren daarentegen kunnen gebruikers sneller wegjagen dan een miscommunicatie op een druk vliegveld.

In deze les transformeren we je statische bankapp naar een interactieve applicatie. Je leert hoe je formulieren bouwt die gebruikersinvoer valideren, communiceren met servers en nuttige feedback geven. Zie het als het bouwen van een bedieningsinterface waarmee gebruikers door de functies van je applicatie kunnen navigeren.

Aan het einde heb je een compleet inlog- en registratiesysteem met validatie dat gebruikers begeleidt naar succes in plaats van frustratie.

```mermaid
mindmap
  root((Form Development))
    HTML Foundation
      Semantic Elements
      Input Types
      Accessibility
      Label Association
    User Experience
      Validation Feedback
      Error Prevention
      Loading States
      Success Messaging
    JavaScript Integration
      Event Handling
      AJAX Communication
      Data Processing
      Error Management
    Validation Layers
      HTML5 Validation
      Client-side Logic
      Server-side Security
      Progressive Enhancement
    Modern Patterns
      Fetch API
      Async/Await
      Form Data API
      Promise Handling
```

## Vereisten

Voordat we beginnen met het bouwen van formulieren, laten we ervoor zorgen dat alles correct is ingesteld. Deze les gaat verder waar we de vorige hebben achtergelaten, dus als je vooruit bent gesprongen, wil je misschien teruggaan en eerst de basis in orde maken.

### Vereiste Setup

| Component | Status | Beschrijving |
|-----------|--------|--------------|
| [HTML Templates](../1-template-route/README.md) | ✅ Vereist | De basisstructuur van je bankapp |
| [Node.js](https://nodejs.org) | ✅ Vereist | JavaScript runtime voor de server |
| [Bank API Server](../api/README.md) | ✅ Vereist | Backend service voor gegevensopslag |

> 💡 **Ontwikkeltip**: Je zult twee aparte servers tegelijkertijd draaien – één voor je frontend bankapp en een andere voor de backend API. Deze setup weerspiegelt de echte wereld waarin frontend- en backendservices onafhankelijk van elkaar werken.

### Serverconfiguratie

**Je ontwikkelomgeving zal bestaan uit:**
- **Frontend server**: Bedient je bankapp (meestal poort `3000`)
- **Backend API server**: Behandelt gegevensopslag en -opvraging (poort `5000`)
- **Beide servers** kunnen tegelijkertijd draaien zonder conflicten

**Test je API-verbinding:**
```bash
curl http://localhost:5000/api
# Expected response: "Bank API v1.0.0"
```

**Als je de API-versierespons ziet, ben je klaar om verder te gaan!**

---

## Begrijpen van HTML-formulieren en -besturingselementen

HTML-formulieren zijn hoe gebruikers communiceren met je webapplicatie. Zie ze als het telegraafsysteem dat in de 19e eeuw verre plaatsen met elkaar verbond – ze vormen het communicatieprotocol tussen gebruikersintentie en applicatierespons. Wanneer ze zorgvuldig zijn ontworpen, vangen ze fouten op, begeleiden ze invoerformattering en bieden ze nuttige suggesties.

Moderne formulieren zijn aanzienlijk geavanceerder dan eenvoudige tekstinvoervelden. HTML5 introduceerde gespecialiseerde invoertypen die automatisch e-mailvalidatie, nummerformattering en datumselectie afhandelen. Deze verbeteringen komen zowel toegankelijkheid als mobiele gebruikerservaringen ten goede.

### Essentiële Formulierelementen

**Bouwstenen die elk formulier nodig heeft:**

```html
<!-- Basic form structure -->
<form id="userForm" method="POST">
  <label for="username">Username</label>
  <input id="username" name="username" type="text" required>
  
  <button type="submit">Submit</button>
</form>
```

**Wat deze code doet:**
- **Creëert** een formuliercontainer met een unieke identificatie
- **Specificeert** de HTTP-methode voor gegevensverzending
- **Associeert** labels met invoervelden voor toegankelijkheid
- **Definieert** een verzendknop om het formulier te verwerken

### Moderne Invoertypen en Attributen

| Invoertype | Doel | Voorbeeldgebruik |
|------------|------|------------------|
| `text` | Algemene tekstinvoer | `<input type="text" name="username">` |
| `email` | E-mailvalidatie | `<input type="email" name="email">` |
| `password` | Verborgen tekstinvoer | `<input type="password" name="password">` |
| `number` | Numerieke invoer | `<input type="number" name="balance" min="0">` |
| `tel` | Telefoonnummers | `<input type="tel" name="phone">` |

> 💡 **Voordeel van moderne HTML5**: Het gebruik van specifieke invoertypen biedt automatische validatie, geschikte mobiele toetsenborden en betere ondersteuning voor toegankelijkheid zonder extra JavaScript!

### Knoptypen en Gedrag

```html
<!-- Different button behaviors -->
<button type="submit">Save Data</button>     <!-- Submits the form -->
<button type="reset">Clear Form</button>    <!-- Resets all fields -->
<button type="button">Custom Action</button> <!-- No default behavior -->
```

**Wat elk knoptype doet:**
- **Verzendknoppen**: Activeren het verzenden van het formulier en sturen gegevens naar het opgegeven eindpunt
- **Resetknoppen**: Herstellen alle formuliervelden naar hun oorspronkelijke staat
- **Normale knoppen**: Hebben geen standaardgedrag en vereisen aangepaste JavaScript voor functionaliteit

> ⚠️ **Belangrijke opmerking**: Het `<input>`-element is zelfsluitend en heeft geen sluitingstag nodig. Moderne best practice is om `<input>` te schrijven zonder de schuine streep.

### Je Inlogformulier Bouwen

Laten we nu een praktisch inlogformulier maken dat moderne HTML-formulierpraktijken demonstreert. We beginnen met een basisstructuur en verbeteren deze geleidelijk met toegankelijkheidsfuncties en validatie.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm" novalidate>
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" name="user" type="text" required 
               autocomplete="username" placeholder="Enter your username">
      </div>
      <button type="submit">Login</button>
    </form>
  </section>
</template>
```

**Wat hier gebeurt:**
- **Structureert** het formulier met semantische HTML5-elementen
- **Groepeert** gerelateerde elementen met `div`-containers en betekenisvolle klassen
- **Associeert** labels met invoervelden via de `for`- en `id`-attributen
- **Voegt** moderne attributen toe zoals `autocomplete` en `placeholder` voor betere gebruikerservaring
- **Voegt** `novalidate` toe om validatie met JavaScript af te handelen in plaats van standaard browservalidatie

### Het Belang van Goede Labels

**Waarom labels belangrijk zijn voor moderne webontwikkeling:**

```mermaid
graph TD
    A[Label Element] --> B[Screen Reader Support]
    A --> C[Click Target Expansion]
    A --> D[Form Validation]
    A --> E[SEO Benefits]
    
    B --> F[Accessible to all users]
    C --> G[Better mobile experience]
    D --> H[Clear error messaging]
    E --> I[Better search ranking]
```

**Wat goede labels bereiken:**
- **Maakt** het mogelijk voor schermlezers om formuliervelden duidelijk aan te kondigen
- **Vergroot** het klikbare gebied (door op het label te klikken wordt het invoerveld gefocust)
- **Verbetert** mobiele bruikbaarheid met grotere aanraakdoelen
- **Ondersteunt** formuliervalidatie met betekenisvolle foutmeldingen
- **Verhoogt** SEO door semantische betekenis aan formulierelementen te geven

> 🎯 **Doel voor toegankelijkheid**: Elk formulierinvoerveld moet een bijbehorend label hebben. Deze eenvoudige praktijk maakt je formulieren bruikbaar voor iedereen, inclusief gebruikers met een beperking, en verbetert de ervaring voor alle gebruikers.

### Het Registratieformulier Maken

Het registratieformulier vereist meer gedetailleerde informatie om een compleet gebruikersaccount te maken. Laten we het bouwen met moderne HTML5-functies en verbeterde toegankelijkheid.

```html
<hr/>
<h2>Register</h2>
<form id="registerForm" novalidate>
  <div class="form-group">
    <label for="user">Username</label>
    <input id="user" name="user" type="text" required 
           autocomplete="username" placeholder="Choose a username">
  </div>
  
  <div class="form-group">
    <label for="currency">Currency</label>
    <input id="currency" name="currency" type="text" value="$" 
           required maxlength="3" placeholder="USD, EUR, etc.">
  </div>
  
  <div class="form-group">
    <label for="description">Account Description</label>
    <input id="description" name="description" type="text" 
           maxlength="100" placeholder="Personal savings, checking, etc.">
  </div>
  
  <div class="form-group">
    <label for="balance">Starting Balance</label>
    <input id="balance" name="balance" type="number" value="0" 
           min="0" step="0.01" placeholder="0.00">
  </div>
  
  <button type="submit">Create Account</button>
</form>
```

**In het bovenstaande hebben we:**
- **Georganiseerd** elk veld in container-divs voor betere styling en lay-out
- **Toegevoegd** geschikte `autocomplete`-attributen voor browser-autovulondersteuning
- **Inbegrepen** nuttige placeholder-tekst om gebruikersinvoer te begeleiden
- **Ingesteld** verstandige standaardwaarden met behulp van het `value`-attribuut
- **Toegepast** validatieattributen zoals `required`, `maxlength` en `min`
- **Gebruikt** `type="number"` voor het balansveld met decimale ondersteuning

### Verkennen van Invoertypen en Gedrag

**Moderne invoertypen bieden verbeterde functionaliteit:**

| Functie | Voordeel | Voorbeeld |
|---------|----------|-----------|
| `type="number"` | Numeriek toetsenbord op mobiel | Gemakkelijker balansinvoer |
| `step="0.01"` | Controle over decimale precisie | Staat centen toe in valuta |
| `autocomplete` | Browser-autovul | Snellere formulierinvulling |
| `placeholder` | Contextuele hints | Begeleidt gebruikersverwachtingen |

> 🎯 **Toegankelijkheidsuitdaging**: Probeer de formulieren te navigeren met alleen je toetsenbord! Gebruik `Tab` om tussen velden te bewegen, `Spatie` om vakjes aan te vinken en `Enter` om te verzenden. Deze ervaring helpt je begrijpen hoe schermlezergebruikers met je formulieren omgaan.

### 🔄 **Pedagogische Check-in**
**Begrip van Formulierbasis**: Voordat je JavaScript implementeert, zorg ervoor dat je begrijpt:
- ✅ Hoe semantische HTML toegankelijke formulierstructuren creëert
- ✅ Waarom invoertypen belangrijk zijn voor mobiele toetsenborden en validatie
- ✅ De relatie tussen labels en formulierelementen
- ✅ Hoe formulierattributen standaard browsergedrag beïnvloeden

**Snelle Zelftest**: Wat gebeurt er als je een formulier indient zonder JavaScript-afhandeling?
*Antwoord: De browser voert standaardverzending uit, meestal door te verwijzen naar de actie-URL*

**Voordelen van HTML5-formulieren**: Moderne formulieren bieden:
- **Ingebouwde Validatie**: Automatische controle van e-mail- en nummerformaten
- **Mobiele Optimalisatie**: Geschikte toetsenborden voor verschillende invoertypen
- **Toegankelijkheid**: Ondersteuning voor schermlezers en toetsenbordnavigatie
- **Progressieve Verbetering**: Werkt zelfs wanneer JavaScript is uitgeschakeld

## Begrijpen van Formulierverzendmethoden

Wanneer iemand je formulier invult en op verzenden klikt, moeten die gegevens ergens naartoe – meestal naar een server die ze kan opslaan. Er zijn een paar verschillende manieren waarop dit kan gebeuren, en weten welke je moet gebruiken kan je later wat hoofdpijn besparen.

Laten we eens kijken wat er eigenlijk gebeurt wanneer iemand op die verzendknop klikt.

### Standaard Formuliergedrag

Laten we eerst observeren wat er gebeurt bij een basisformulierverzending:

**Test je huidige formulieren:**
1. Klik op de *Registreren* knop in je formulier
2. Observeer de veranderingen in de adresbalk van je browser
3. Merk op hoe de pagina opnieuw laadt en gegevens in de URL verschijnen

![Screenshot van de URL-verandering in de browser na het klikken op de Registreren-knop](../../../../translated_images/nl/click-register.e89a30bf0d4bc9ca.png)

### Vergelijking van HTTP-methoden

```mermaid
graph TD
    A[Form Submission] --> B{HTTP Method}
    B -->|GET| C[Data in URL]
    B -->|POST| D[Data in Request Body]
    
    C --> E[Visible in address bar]
    C --> F[Limited data size]
    C --> G[Bookmarkable]
    
    D --> H[Hidden from URL]
    D --> I[Large data capacity]
    D --> J[More secure]
```

**Begrijp de verschillen:**

| Methode | Gebruikssituatie | Locatie van gegevens | Beveiligingsniveau | Groottebeperking |
|---------|------------------|----------------------|--------------------|------------------|
| `GET` | Zoekopdrachten, filters | URL-parameters | Laag (zichtbaar) | ~2000 tekens |
| `POST` | Gebruikersaccounts, gevoelige gegevens | Verzoekbody | Hoger (verborgen) | Geen praktische limiet |

**Begrijp de fundamentele verschillen:**
- **GET**: Voegt formuliergegevens toe aan de URL als queryparameters (geschikt voor zoekoperaties)
- **POST**: Bevat gegevens in de verzoekbody (essentieel voor gevoelige informatie)
- **GET-beperkingen**: Groottebeperkingen, zichtbare gegevens, blijvende browsergeschiedenis
- **POST-voordelen**: Grote gegevenscapaciteit, privacybescherming, ondersteuning voor bestanduploads

> 💡 **Best Practice**: Gebruik `GET` voor zoekformulieren en filters (gegevensopvraging), gebruik `POST` voor gebruikersregistratie, inloggen en gegevenscreatie.

### Configureren van Formulierverzending

Laten we je registratieformulier configureren om correct te communiceren met de backend API via de POST-methode:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" 
      method="POST" novalidate>
```

**Wat deze configuratie doet:**
- **Stuurt** formulierverzending naar je API-eindpunt
- **Gebruikt** de POST-methode voor veilige gegevensoverdracht
- **Voegt** `novalidate` toe om validatie met JavaScript af te handelen

### Testen van Formulierverzending

**Volg deze stappen om je formulier te testen:**
1. **Vul** het registratieformulier in met je gegevens
2. **Klik** op de knop "Account aanmaken"
3. **Observeer** de serverrespons in je browser

![Een browservenster op het adres localhost:5000/api/accounts, met een JSON-string met gebruikersgegevens](../../../../translated_images/nl/form-post.61de4ca1b964d91a.png)

**Wat je zou moeten zien:**
- **Browser verwijst** naar de API-eindpunt-URL
- **JSON-respons** met je nieuw aangemaakte accountgegevens
- **Serverbevestiging** dat het account succesvol is aangemaakt

> 🧪 **Experimenteertijd**: Probeer opnieuw te registreren met dezelfde gebruikersnaam. Welke respons krijg je? Dit helpt je begrijpen hoe de server dubbele gegevens en foutomstandigheden afhandelt.

### Begrijpen van JSON-responsen

**Wanneer de server je formulier succesvol verwerkt:**
```json
{
  "user": "john_doe",
  "currency": "$",
  "description": "Personal savings",
  "balance": 100,
  "id": "unique_account_id"
}
```

**Deze respons bevestigt:**
- **Creëert** een nieuw account met je opgegeven gegevens
- **Kent** een unieke identificator toe voor toekomstige referentie
- **Retourneert** alle accountinformatie ter verificatie
- **Geeft** aan dat opslag in de database succesvol is

## Moderne Formulierafhandeling met JavaScript

Traditionele formulierverzendingen veroorzaken volledige paginaherlaadbeurten, vergelijkbaar met hoe vroege ruimtemissies volledige systeemresets vereisten voor koerscorrecties. Deze aanpak verstoort de gebruikerservaring en verliest de applicatiestatus.

JavaScript-formulierafhandeling werkt zoals de continue geleidingssystemen die door moderne ruimtevaartuigen worden gebruikt – realtime aanpassingen maken zonder de navigatiecontext te verliezen. We kunnen formulierverzendingen onderscheppen, directe feedback geven, fouten soepel afhandelen en de interface bijwerken op basis van serverresponsen terwijl we de positie van de gebruiker in de applicatie behouden.

### Waarom Paginaherlaadbeurten Vermijden?

```mermaid
sequenceDiagram
    participant User
    participant SPA
    participant Server
    
    User->>SPA: Submits form
    SPA->>Server: AJAX request
    Server-->>SPA: JSON response
    SPA->>User: Updates interface
    
    Note over User,SPA: No page reload!
```

**Voordelen van JavaScript-formulierafhandeling:**
- **Behoudt** applicatiestatus en gebruikerscontext
- **Biedt** directe feedback en laadindicatoren
- **Maakt** dynamische foutafhandeling en validatie mogelijk
- **Creëert** vloeiende, app-achtige gebruikerservaringen
- **Staat** voorwaardelijke logica toe op basis van serverresponsen

### Overgang van Traditionele naar Moderne Formulieren

**Uitdagingen van de traditionele aanpak:**
- **Verwijst** gebruikers weg van je applicatie
- **Verliest** huidige applicatiestatus en context
- **Vereist** volledige paginaherlaadbeurten voor eenvoudige operaties
- **Biedt** beperkte controle over gebruikersfeedback

**Voordelen van de moderne JavaScript-aanpak:**
- **Houdt** gebruikers binnen je applicatie
- **Behoudt** alle applicatiestatus en gegevens
- **Maakt** realtime validatie en feedback mogelijk
- **Ondersteunt** progressieve verbetering en toegankelijkheid

### Implementeren van JavaScript Formulierafhandeling

Laten we de traditionele formulierverzending vervangen door moderne JavaScript-eventafhandeling:

```html
<!-- Remove the action attribute and add event handling -->
<form id="registerForm" method="POST" novalidate>
```

**Voeg de registratielogica toe aan je `app.js`-bestand:**

```javascript
// Modern event-driven form handling
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
  
  console.log('Form data prepared:', data);
}

// Attach event listener when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    register();
  });
});
```

**Wat hier gebeurt:**
- **Voorkomt** standaard formulierverzending met `event.preventDefault()`
- **Haalt** het formulierelement op met moderne DOM-selectie
- **Haalt** formuliergegevens op met de krachtige `FormData` API
- **Converteert** FormData naar een eenvoudig object met `Object.fromEntries()`
- **Serialiseert** de gegevens naar JSON-formaat voor servercommunicatie
- **Logt** de verwerkte gegevens voor debugging en verificatie

### Begrijpen van de FormData API

**De FormData API biedt krachtige formulierafhandeling:**
```javascript
// Example of what FormData captures
const formData = new FormData(registerForm);

// FormData automatically captures:
// {
//   "user": "john_doe",
//   "currency": "$", 
//   "description": "Personal account",
//   "balance": "100"
// }
```

**Voordelen van de FormData API:**
- **Uitgebreide verzameling**: Verzamelt alle formulier-elementen, inclusief tekst, bestanden en complexe invoer
- **Typebewustzijn**: Behandelt automatisch verschillende invoertypen zonder aangepaste codering
- **Efficiëntie**: Vermijdt handmatige veldverzameling met één API-aanroep
- **Aanpasbaarheid**: Blijft functioneren terwijl de structuur van het formulier evolueert

### De functie voor servercommunicatie maken

Laten we nu een robuuste functie bouwen om te communiceren met je API-server met moderne JavaScript-patronen:

```javascript
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: account
    });
    
    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Account creation failed:', error);
    return { error: error.message || 'Network error occurred' };
  }
}
```

**Begrip van asynchroon JavaScript:**

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant Fetch as Fetch API
    participant Server as Backend Server
    
    JS->>Fetch: fetch() request
    Fetch->>Server: HTTP POST
    Server-->>Fetch: JSON response
    Fetch-->>JS: await response
    JS->>JS: Process data
```

**Wat deze moderne implementatie bereikt:**
- **Maakt gebruik van** `async/await` voor leesbare asynchrone code
- **Bevat** correcte foutafhandeling met try/catch-blokken
- **Controleert** de responsstatus voordat gegevens worden verwerkt
- **Stelt** geschikte headers in voor JSON-communicatie
- **Biedt** gedetailleerde foutmeldingen voor debugging
- **Retourneert** consistente datastructuren voor succes- en foutgevallen

### De kracht van de moderne Fetch API

**Voordelen van Fetch API ten opzichte van oudere methoden:**

| Kenmerk | Voordeel | Implementatie |
|---------|----------|---------------|
| Op belofte gebaseerd | Schone asynchrone code | `await fetch()` |
| Aanpasbare verzoeken | Volledige HTTP-controle | Headers, methoden, body |
| Responsverwerking | Flexibele gegevensanalyse | `.json()`, `.text()`, `.blob()` |
| Foutafhandeling | Uitgebreide foutdetectie | Try/catch-blokken |

> 🎥 **Meer leren**: [Async/Await Tutorial](https://youtube.com/watch?v=YwmlRkrxvkk) - Begrip van asynchrone JavaScript-patronen voor moderne webontwikkeling.

**Belangrijke concepten voor servercommunicatie:**
- **Async-functies** laten de uitvoering pauzeren om op serverresponsen te wachten
- **Await-sleutelwoord** maakt asynchrone code leesbaar als synchrone code
- **Fetch API** biedt moderne, op belofte gebaseerde HTTP-verzoeken
- **Foutafhandeling** zorgt ervoor dat je app gracieus reageert op netwerkproblemen

### De registratiefunctie voltooien

Laten we alles samenbrengen met een complete, productieklare registratiefunctie:

```javascript
async function register() {
  const registerForm = document.getElementById('registerForm');
  const submitButton = registerForm.querySelector('button[type="submit"]');
  
  try {
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Creating Account...';
    
    // Process form data
    const formData = new FormData(registerForm);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    
    // Send to server
    const result = await createAccount(jsonData);
    
    if (result.error) {
      console.error('Registration failed:', result.error);
      alert(`Registration failed: ${result.error}`);
      return;
    }
    
    console.log('Account created successfully!', result);
    alert(`Welcome, ${result.user}! Your account has been created.`);
    
    // Reset form after successful registration
    registerForm.reset();
    
  } catch (error) {
    console.error('Unexpected error:', error);
    alert('An unexpected error occurred. Please try again.');
  } finally {
    // Restore button state
    submitButton.disabled = false;
    submitButton.textContent = 'Create Account';
  }
}
```

**Deze verbeterde implementatie bevat:**
- **Biedt** visuele feedback tijdens het indienen van het formulier
- **Schakelt** de verzendknop uit om dubbele inzendingen te voorkomen
- **Behandelt** zowel verwachte als onverwachte fouten op een nette manier
- **Toont** gebruiksvriendelijke succes- en foutmeldingen
- **Reset** het formulier na succesvolle registratie
- **Herstelt** de UI-status ongeacht de uitkomst

### Je implementatie testen

**Open de ontwikkelaarstools van je browser en test de registratie:**

1. **Open** de browserconsole (F12 → Console-tabblad)
2. **Vul** het registratieformulier in
3. **Klik** op "Account aanmaken"
4. **Observeer** de consoleberichten en gebruikersfeedback

![Screenshot met logbericht in de browserconsole](../../../../translated_images/nl/browser-console.efaf0b51aaaf6778.png)

**Wat je zou moeten zien:**
- **Laadstatus** verschijnt op de verzendknop
- **Consolelogs** tonen gedetailleerde informatie over het proces
- **Succesbericht** verschijnt wanneer het aanmaken van een account slaagt
- **Formulier reset** automatisch na succesvolle inzending

> 🔒 **Beveiligingsoverweging**: Momenteel worden gegevens via HTTP verzonden, wat niet veilig is voor productie. Gebruik in echte applicaties altijd HTTPS om gegevensoverdracht te versleutelen. Lees meer over [HTTPS-beveiliging](https://en.wikipedia.org/wiki/HTTPS) en waarom het essentieel is voor het beschermen van gebruikersgegevens.

### 🔄 **Pedagogische check-in**
**Moderne JavaScript-integratie**: Controleer je begrip van asynchrone formulierverwerking:
- ✅ Hoe verandert `event.preventDefault()` het standaardgedrag van een formulier?
- ✅ Waarom is de FormData API efficiënter dan handmatige veldverzameling?
- ✅ Hoe verbeteren async/await-patronen de leesbaarheid van code?
- ✅ Welke rol speelt foutafhandeling in de gebruikerservaring?

**Systeemarchitectuur**: Je formulierverwerking demonstreert:
- **Event-Driven Programming**: Formulieren reageren op gebruikersacties zonder pagina-herlaad
- **Asynchrone communicatie**: Serververzoeken blokkeren de gebruikersinterface niet
- **Foutafhandeling**: Gracieus omgaan met netwerkverzoeken die mislukken
- **Statusbeheer**: UI-updates weerspiegelen serverresponsen correct
- **Progressieve verbetering**: Basisfunctionaliteit werkt, JavaScript verbetert het

**Professionele patronen**: Je hebt geïmplementeerd:
- **Single Responsibility**: Functies hebben duidelijke, gerichte doelen
- **Error Boundaries**: Try/catch-blokken voorkomen applicatiecrashes
- **Gebruikersfeedback**: Laadstatussen en succes-/foutmeldingen
- **Gegevensomzetting**: FormData naar JSON voor servercommunicatie

## Uitgebreide formuliervalidatie

Formuliervalidatie voorkomt de frustrerende ervaring van het ontdekken van fouten pas na het indienen. Net als de meerdere redundante systemen op het internationale ruimtestation, maakt effectieve validatie gebruik van meerdere lagen veiligheidscontroles.

De optimale aanpak combineert browservalidatie voor directe feedback, JavaScript-validatie voor verbeterde gebruikerservaring en servervalidatie voor beveiliging en gegevensintegriteit. Deze redundantie zorgt voor zowel gebruikerstevredenheid als systeembeveiliging.

### Begrip van validatielagen

```mermaid
graph TD
    A[User Input] --> B[HTML5 Validation]
    B --> C[Custom JavaScript Validation]
    C --> D[Client-Side Complete]
    D --> E[Server-Side Validation]
    E --> F[Data Storage]
    
    B -->|Invalid| G[Browser Error Message]
    C -->|Invalid| H[Custom Error Display]
    E -->|Invalid| I[Server Error Response]
```

**Strategie voor validatie met meerdere lagen:**
- **HTML5-validatie**: Directe browsergebaseerde controles
- **JavaScript-validatie**: Aangepaste logica en gebruikerservaring
- **Servervalidatie**: Definitieve beveiligings- en gegevensintegriteitscontroles
- **Progressieve verbetering**: Werkt zelfs als JavaScript is uitgeschakeld

### HTML5-validatie-attributen

**Moderne validatietools tot je beschikking:**

| Attribuut | Doel | Voorbeeldgebruik | Browsergedrag |
|-----------|------|------------------|---------------|
| `required` | Verplichte velden | `<input required>` | Voorkomt lege inzending |
| `minlength`/`maxlength` | Tekstlengtebeperkingen | `<input maxlength="20">` | Handhaaft tekenlimieten |
| `min`/`max` | Numerieke bereiken | `<input min="0" max="1000">` | Valideert numerieke grenzen |
| `pattern` | Aangepaste regex-regels | `<input pattern="[A-Za-z]+">` | Komt overeen met specifieke formaten |
| `type` | Gegevenstypevalidatie | `<input type="email">` | Formaat-specifieke validatie |

### CSS-validatiestijling

**Creëer visuele feedback voor validatiestatussen:**

```css
/* Valid input styling */
input:valid {
  border-color: #28a745;
  background-color: #f8fff9;
}

/* Invalid input styling */
input:invalid {
  border-color: #dc3545;
  background-color: #fff5f5;
}

/* Focus states for better accessibility */
input:focus:valid {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

input:focus:invalid {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
```

**Wat deze visuele aanwijzingen bereiken:**
- **Groene randen**: Geven succesvolle validatie aan, zoals groene lichten in de controlekamer
- **Rode randen**: Signaleren validatiefouten die aandacht vereisen
- **Focus-highlights**: Bieden duidelijke visuele context voor de huidige invoerlocatie
- **Consistente styling**: Creëert voorspelbare interfacepatronen die gebruikers kunnen leren

> 💡 **Pro Tip**: Gebruik de `:valid` en `:invalid` CSS-pseudoklassen om directe visuele feedback te geven terwijl gebruikers typen, wat een responsieve en behulpzame interface creëert.

### Uitgebreide validatie implementeren

Laten we je registratieformulier verbeteren met robuuste validatie die een uitstekende gebruikerservaring en gegevenskwaliteit biedt:

```html
<form id="registerForm" method="POST" novalidate>
  <div class="form-group">
    <label for="user">Username <span class="required">*</span></label>
    <input id="user" name="user" type="text" required 
           minlength="3" maxlength="20" 
           pattern="[a-zA-Z0-9_]+" 
           autocomplete="username"
           title="Username must be 3-20 characters, letters, numbers, and underscores only">
    <small class="form-text">Choose a unique username (3-20 characters)</small>
  </div>
  
  <div class="form-group">
    <label for="currency">Currency <span class="required">*</span></label>
    <input id="currency" name="currency" type="text" required 
           value="$" maxlength="3" 
           pattern="[A-Z$€£¥₹]+" 
           title="Enter a valid currency symbol or code">
    <small class="form-text">Currency symbol (e.g., $, €, £)</small>
  </div>
  
  <div class="form-group">
    <label for="description">Account Description</label>
    <input id="description" name="description" type="text" 
           maxlength="100" 
           placeholder="Personal savings, checking, etc.">
    <small class="form-text">Optional description (up to 100 characters)</small>
  </div>
  
  <div class="form-group">
    <label for="balance">Starting Balance</label>
    <input id="balance" name="balance" type="number" 
           value="0" min="0" step="0.01" 
           title="Enter a positive number for your starting balance">
    <small class="form-text">Initial account balance (minimum $0.00)</small>
  </div>
  
  <button type="submit">Create Account</button>
</form>
```

**Begrip van de verbeterde validatie:**
- **Combineert** verplichte veldindicatoren met behulpzame beschrijvingen
- **Bevat** `pattern`-attributen voor formaatvalidatie
- **Biedt** `title`-attributen voor toegankelijkheid en tooltips
- **Voegt** hulptekst toe om gebruikersinvoer te begeleiden
- **Gebruikt** semantische HTML-structuur voor betere toegankelijkheid

### Geavanceerde validatieregels

**Wat elke validatieregel bereikt:**

| Veld | Validatieregels | Gebruikersvoordeel |
|------|-----------------|--------------------|
| Gebruikersnaam | `required`, `minlength="3"`, `maxlength="20"`, `pattern="[a-zA-Z0-9_]+"` | Zorgt voor geldige, unieke identificatoren |
| Valuta | `required`, `maxlength="3"`, `pattern="[A-Z$€£¥₹]+"` | Accepteert gangbare valutatekens |
| Saldo | `min="0"`, `step="0.01"`, `type="number"` | Voorkomt negatieve saldi |
| Beschrijving | `maxlength="100"` | Redelijke lengtebeperkingen |

### Validatiegedrag testen

**Probeer deze validatiescenario's:**
1. **Dien** het formulier in met lege verplichte velden
2. **Voer** een gebruikersnaam in die korter is dan 3 tekens
3. **Probeer** speciale tekens in het gebruikersnaamveld
4. **Voer** een negatief saldo in

![Screenshot met validatiefout bij het proberen het formulier in te dienen](../../../../translated_images/nl/validation-error.8bd23e98d416c22f.png)

**Wat je zult zien:**
- **Browser toont** native validatiemeldingen
- **Styling verandert** op basis van `:valid` en `:invalid` statussen
- **Formulierinzending** wordt voorkomen totdat alle validaties slagen
- **Focus verplaatst** automatisch naar het eerste ongeldige veld

### Client-side versus server-side validatie

```mermaid
graph LR
    A[Client-Side Validation] --> B[Instant Feedback]
    A --> C[Better UX]
    A --> D[Reduced Server Load]
    
    E[Server-Side Validation] --> F[Security]
    E --> G[Data Integrity]
    E --> H[Business Rules]
    
    A -.-> I[Both Required]
    E -.-> I
```

**Waarom je beide lagen nodig hebt:**
- **Client-side validatie**: Biedt directe feedback en verbetert de gebruikerservaring
- **Server-side validatie**: Zorgt voor beveiliging en behandelt complexe bedrijfsregels
- **Gecombineerde aanpak**: Creëert robuuste, gebruiksvriendelijke en veilige applicaties
- **Progressieve verbetering**: Werkt zelfs wanneer JavaScript is uitgeschakeld

> 🛡️ **Beveiligingsherinnering**: Vertrouw nooit alleen op client-side validatie! Kwaadwillende gebruikers kunnen client-side controles omzeilen, dus server-side validatie is essentieel voor beveiliging en gegevensintegriteit.

### ⚡ **Wat je in de komende 5 minuten kunt doen**
- [ ] Test je formulier met ongeldige gegevens om validatiemeldingen te zien
- [ ] Probeer het formulier in te dienen met JavaScript uitgeschakeld om HTML5-validatie te zien
- [ ] Open browser DevTools en inspecteer de formuliergegevens die naar de server worden verzonden
- [ ] Experimenteer met verschillende invoertypen om veranderingen in mobiele toetsenborden te zien

### 🎯 **Wat je in dit uur kunt bereiken**
- [ ] Voltooi de quiz na de les en begrijp concepten voor formulierverwerking
- [ ] Implementeer de uitgebreide validatie-uitdaging met realtime feedback
- [ ] Voeg CSS-styling toe om professionele formulieren te maken
- [ ] Maak foutafhandeling voor dubbele gebruikersnamen en serverfouten
- [ ] Voeg velden voor wachtwoordbevestiging toe met overeenkomende validatie

### 📅 **Je weeklange reis naar meesterschap in formulieren**
- [ ] Voltooi de volledige bankapp met geavanceerde formulierfuncties
- [ ] Implementeer bestandsuploadmogelijkheden voor profielfoto's of documenten
- [ ] Voeg meerstapsformulieren toe met voortgangsindicatoren en statusbeheer
- [ ] Maak dynamische formulieren die zich aanpassen op basis van gebruikersselecties
- [ ] Implementeer formulierautosave en herstel voor een betere gebruikerservaring
- [ ] Voeg geavanceerde validatie toe zoals e-mailverificatie en telefoonnummerformattering

### 🌟 **Je maandlange meesterschap in frontend-ontwikkeling**
- [ ] Bouw complexe formulierapplicaties met voorwaardelijke logica en workflows
- [ ] Leer formulierbibliotheken en frameworks voor snelle ontwikkeling
- [ ] Beheers toegankelijkheidsrichtlijnen en inclusieve ontwerpprincipes
- [ ] Implementeer internationalisatie en lokalisatie voor wereldwijde formulieren
- [ ] Maak herbruikbare formuliercomponentbibliotheken en ontwerpsystemen
- [ ] Draag bij aan open source-formulierprojecten en deel best practices

## 🎯 Je tijdlijn voor meesterschap in formulierontwikkeling

```mermaid
timeline
    title Form Development & User Experience Learning Progression
    
    section HTML Foundation (15 minutes)
        Semantic Forms: Form elements
                      : Input types
                      : Labels and accessibility
                      : Progressive enhancement
        
    section JavaScript Integration (25 minutes)
        Event Handling: Form submission
                      : Data collection
                      : AJAX communication
                      : Async/await patterns
        
    section Validation Systems (35 minutes)
        Multi-layer Security: HTML5 validation
                            : Client-side logic
                            : Server-side verification
                            : Error handling
        
    section User Experience (45 minutes)
        Interface Polish: Loading states
                        : Success messaging
                        : Error recovery
                        : Accessibility features
        
    section Advanced Patterns (1 week)
        Professional Forms: Dynamic validation
                          : Multi-step workflows
                          : File uploads
                          : Real-time feedback
        
    section Enterprise Skills (1 month)
        Production Applications: Form libraries
                               : Testing strategies
                               : Performance optimization
                               : Security best practices
```

### 🛠️ Samenvatting van je toolkit voor formulierontwikkeling

Na het voltooien van deze les heb je nu beheerst:
- **HTML5-formulieren**: Semantische structuur, invoertypen en toegankelijkheidsfuncties
- **JavaScript-formulierverwerking**: Eventbeheer, gegevensverzameling en AJAX-communicatie
- **Validatiearchitectuur**: Validatie met meerdere lagen voor beveiliging en gebruikerservaring
- **Asynchrone programmering**: Moderne Fetch API en async/await-patronen
- **Foutbeheer**: Uitgebreide foutafhandeling en gebruikersfeedbacksystemen
- **Gebruikerservaringontwerp**: Laadstatussen, succesmeldingen en foutherstel
- **Progressieve verbetering**: Formulieren die werken op alle browsers en mogelijkheden

**Toepassingen in de echte wereld**: Je vaardigheden in formulierontwikkeling zijn direct toepasbaar op:
- **E-commerce applicaties**: Afrekenprocessen, accountregistratie en betalingsformulieren
- **Enterprise software**: Gegevensinvoersystemen, rapportageinterfaces en workflowapplicaties
- **Contentbeheer**: Publicatieplatforms, door gebruikers gegenereerde inhoud en administratieve interfaces
- **Financiële applicaties**: Bankinterfaces, investeringsplatforms en transactiesystemen
- **Gezondheidszorgsystemen**: Patiëntenportalen, afsprakenplanning en medische dossierformulieren
- **Educatieve platforms**: Cursusregistratie, beoordelingsinstrumenten en leerbeheer

**Verworven professionele vaardigheden**: Je kunt nu:
- **Ontwerpen** van toegankelijke formulieren die werken voor alle gebruikers, inclusief mensen met een beperking
- **Implementeren** van veilige formuliervalidatie die gegevenscorruptie en beveiligingsproblemen voorkomt
- **Creëren** van responsieve gebruikersinterfaces die duidelijke feedback en begeleiding bieden
- **Debuggen** van complexe formulierinteracties met behulp van browserontwikkelaarstools en netwerkanalyse
- **Optimaliseren** van formulierprestaties door efficiënte gegevensverwerking en validatiestrategieën

**Beheerde frontend-ontwikkelingsconcepten**:
- **Event-Driven Architectuur**: Gebruikersinteractiebeheer en reactiesystemen
- **Asynchrone programmering**: Niet-blokkerende servercommunicatie en foutafhandeling
- **Gegevensvalidatie**: Client-side en server-side beveiligings- en integriteitscontroles
- **Gebruikerservaringontwerp**: Intuïtieve interfaces die gebruikers naar succes leiden
- **Toegankelijkheidsengineering**: Inclusief ontwerp dat werkt voor diverse gebruikersbehoeften

**Volgende niveau**: Je bent klaar om geavanceerde formulierbibliotheken te verkennen, complexe validatieregels te implementeren of enterprise-grade gegevensverzamelsystemen te bouwen!

🌟 **Prestatie ontgrendeld**: Je hebt een compleet systeem voor formulierverwerking gebouwd met professionele validatie, foutafhandeling en gebruikerservaringspatronen!

---



---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter het registratieformulier met uitgebreide client-side validatie en gebruikersfeedback. Deze uitdaging helpt je om formuliervalidatie, foutafhandeling en het verbeteren van de gebruikerservaring met interactieve feedback te oefenen.
**Prompt:** Maak een compleet systeem voor formuliervalidatie voor het registratieformulier dat het volgende bevat: 1) Real-time validatiefeedback voor elk veld terwijl de gebruiker typt, 2) Aangepaste validatieberichten die onder elk invoerveld verschijnen, 3) Een wachtwoordbevestigingsveld met validatie voor overeenkomende wachtwoorden, 4) Visuele indicatoren (zoals groene vinkjes voor geldige velden en rode waarschuwingen voor ongeldige velden), 5) Een verzendknop die alleen wordt ingeschakeld wanneer alle validaties slagen. Gebruik HTML5-validatieattributen, CSS voor het stylen van de validatiestatussen en JavaScript voor het interactieve gedrag.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Uitdaging

Toon een foutmelding in de HTML als de gebruiker al bestaat.

Hier is een voorbeeld van hoe de uiteindelijke inlogpagina eruit kan zien na wat styling:

![Screenshot van de inlogpagina na het toevoegen van CSS-stijlen](../../../../translated_images/nl/result.96ef01f607bf856a.png)

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/44)

## Review & Zelfstudie

Ontwikkelaars zijn erg creatief geworden met hun inspanningen voor het bouwen van formulieren, vooral wat betreft validatiestrategieën. Leer meer over verschillende formulierstromen door te kijken op [CodePen](https://codepen.com); kun je interessante en inspirerende formulieren vinden?

## Opdracht

[Style je bankapp](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.