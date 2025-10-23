<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d259f6962464ad91e671083aa0398f4",
  "translation_date": "2025-10-23T01:00:59+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "nl"
}
-->
# Een Bankapp Bouwen Deel 1: HTML-sjablonen en Routes in een Webapp

Toen de Apollo 11-geleidingscomputer in 1969 naar de maan navigeerde, moest deze tussen verschillende programma's schakelen zonder het hele systeem opnieuw op te starten. Moderne webapplicaties werken op een vergelijkbare manier – ze veranderen wat je ziet zonder alles opnieuw te laden. Dit zorgt voor de soepele, responsieve ervaring die gebruikers tegenwoordig verwachten.

In tegenstelling tot traditionele websites die hele pagina's opnieuw laden bij elke interactie, werken moderne webapps alleen de delen bij die moeten worden gewijzigd. Deze aanpak, vergelijkbaar met hoe de missiecontrole tussen verschillende schermen schakelt terwijl constante communicatie wordt gehandhaafd, zorgt voor die vloeiende ervaring die we tegenwoordig gewend zijn.

Dit maakt het verschil zo opvallend:

| Traditionele Multi-Pagina Apps | Moderne Single-Pagina Apps |
|-------------------------------|----------------------------|
| **Navigatie** | Volledige paginareload voor elk scherm | Directe inhoudswisseling |
| **Prestaties** | Langzamer door volledige HTML-downloads | Sneller met gedeeltelijke updates |
| **Gebruikerservaring** | Schokkerige pagina-overgangen | Soepele, app-achtige overgangen |
| **Gegevensdeling** | Moeilijk tussen pagina's | Eenvoudig beheer van de status |
| **Ontwikkeling** | Meerdere HTML-bestanden om te onderhouden | Eén HTML met dynamische sjablonen |

**Begrijpen van de evolutie:**
- **Traditionele apps** vereisen serververzoeken voor elke navigatieactie
- **Moderne SPAs** laden één keer en werken inhoud dynamisch bij met JavaScript
- **Gebruikersverwachtingen** geven nu de voorkeur aan directe, naadloze interacties
- **Prestatievoordelen** omvatten verminderde bandbreedte en snellere reacties

In deze les bouwen we een bankapp met meerdere schermen die naadloos in elkaar overlopen. Net zoals wetenschappers modulaire instrumenten gebruiken die kunnen worden geconfigureerd voor verschillende experimenten, gebruiken we HTML-sjablonen als herbruikbare componenten die naar behoefte kunnen worden weergegeven.

Je gaat werken met HTML-sjablonen (herbruikbare blauwdrukken voor verschillende schermen), JavaScript-routing (het systeem dat tussen schermen schakelt) en de geschiedenis-API van de browser (die ervoor zorgt dat de terugknop naar behoren werkt). Dit zijn dezelfde fundamentele technieken die worden gebruikt door frameworks zoals React, Vue en Angular.

Aan het einde heb je een werkende bankapp die professionele principes van single-page applicaties demonstreert.

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/41)

### Wat je nodig hebt

We hebben een lokale webserver nodig om onze bankapp te testen – maak je geen zorgen, het is eenvoudiger dan het klinkt! Als je er nog geen hebt ingesteld, installeer dan gewoon [Node.js](https://nodejs.org) en voer `npx lite-server` uit vanuit je projectmap. Deze handige opdracht start een lokale server en opent je app automatisch in de browser.

### Voorbereiding

Maak op je computer een map genaamd `bank` met daarin een bestand genaamd `index.html`. We beginnen met deze HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code):

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

**Wat deze boilerplate biedt:**
- **Stelt** de HTML5-documentstructuur in met de juiste DOCTYPE-verklaring
- **Configureert** tekencodering als UTF-8 voor internationale tekstondersteuning
- **Maakt** responsief ontwerp mogelijk met de viewport meta-tag voor mobiele compatibiliteit
- **Stelt** een beschrijvende titel in die in het browsertabblad verschijnt
- **Creëert** een schone body-sectie waar we onze applicatie gaan bouwen

> 📁 **Voorbeeld van de projectstructuur**
> 
> **Aan het einde van deze les bevat je project:**
> ```
> bank/
> ├── index.html      <!-- Main HTML with templates -->
> ├── app.js          <!-- Routing and navigation logic -->
> └── style.css       <!-- (Optional for future lessons) -->
> ```
> 
> **Bestandsverantwoordelijkheden:**
> - **index.html**: Bevat alle sjablonen en biedt de appstructuur
> - **app.js**: Beheert routing, navigatie en sjabloonbeheer
> - **Sjablonen**: Definieert de gebruikersinterface voor inloggen, dashboard en andere schermen

---

## HTML-sjablonen

Sjablonen lossen een fundamenteel probleem in webontwikkeling op. Toen Gutenberg in de jaren 1440 de boekdrukkunst met losse letters uitvond, realiseerde hij zich dat hij in plaats van hele pagina's te snijden, herbruikbare letterblokken kon maken en ze naar behoefte kon rangschikken. HTML-sjablonen werken volgens hetzelfde principe – in plaats van afzonderlijke HTML-bestanden voor elk scherm te maken, definieer je herbruikbare structuren die kunnen worden weergegeven wanneer dat nodig is.

Zie sjablonen als blauwdrukken voor verschillende delen van je app. Net zoals een architect één blauwdruk maakt en deze meerdere keren gebruikt in plaats van identieke kamers opnieuw te tekenen, maken wij sjablonen één keer en gebruiken we ze wanneer nodig. De browser houdt deze sjablonen verborgen totdat JavaScript ze activeert.

Als je meerdere schermen voor een webpagina wilt maken, zou een oplossing kunnen zijn om één HTML-bestand te maken voor elk scherm dat je wilt weergeven. Deze oplossing brengt echter enkele ongemakken met zich mee:

- Je moet de hele HTML opnieuw laden bij het wisselen van scherm, wat traag kan zijn.
- Het is moeilijk om gegevens te delen tussen de verschillende schermen.

Een andere aanpak is om slechts één HTML-bestand te hebben en meerdere [HTML-sjablonen](https://developer.mozilla.org/docs/Web/HTML/Element/template) te definiëren met behulp van het `<template>`-element. Een sjabloon is een herbruikbaar HTML-blok dat niet door de browser wordt weergegeven en dat bij runtime moet worden geïnstantieerd met JavaScript.

### Laten we het bouwen

We gaan een bankapp maken met twee hoofdschermen: een inlogpagina en een dashboard. Eerst voegen we een placeholder-element toe aan onze HTML-body – dit is waar al onze verschillende schermen zullen verschijnen:

```html
<div id="app">Loading...</div>
```

**Begrijpen van deze placeholder:**
- **Creëert** een container met de ID "app" waar alle schermen worden weergegeven
- **Toont** een laadbericht totdat de JavaScript het eerste scherm initialiseert
- **Biedt** een enkel montagepunt voor onze dynamische inhoud
- **Maakt** eenvoudig targeten vanuit JavaScript mogelijk met `document.getElementById()`

> 💡 **Handige tip**: Omdat de inhoud van dit element wordt vervangen, kunnen we een laadbericht of indicator plaatsen die wordt weergegeven terwijl de app wordt geladen.

Vervolgens voegen we hieronder de HTML-sjabloon voor de inlogpagina toe. Voor nu plaatsen we daar alleen een titel en een sectie met een link die we gebruiken om te navigeren.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

**Uitleg over deze inlogsjabloon:**
- **Definieert** een sjabloon met de unieke identificator "login" voor JavaScript-targeting
- **Bevat** een hoofdkop die de branding van de app vastlegt
- **Bevat** een semantisch `<section>`-element om gerelateerde inhoud te groeperen
- **Biedt** een navigatielink die gebruikers naar het dashboard leidt

Daarna voegen we een andere HTML-sjabloon toe voor de dashboardpagina. Deze pagina bevat verschillende secties:

- Een header met een titel en een uitloglink
- Het huidige saldo van de bankrekening
- Een lijst met transacties, weergegeven in een tabel

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

**Laten we elk deel van dit dashboard begrijpen:**
- **Structureert** de pagina met een semantisch `<header>`-element dat navigatie bevat
- **Toont** de app-titel consistent op alle schermen voor branding
- **Biedt** een uitloglink die teruggaat naar het inlogscherm
- **Toont** het huidige rekeningsaldo in een speciale sectie
- **Organiseert** transactiegegevens met een goed gestructureerde HTML-tabel
- **Definieert** tabelkoppen voor de kolommen Datum, Object en Bedrag
- **Laat** de tabelinhoud leeg voor dynamische inhoudinjectie later

> 💡 **Handige tip**: Wanneer je HTML-sjablonen maakt, kun je, als je wilt zien hoe het eruitziet, de `<template>` en `</template>`-regels uitcommentariëren door ze tussen `<!-- -->` te plaatsen.

✅ Waarom denk je dat we `id`-attributen gebruiken op de sjablonen? Kunnen we iets anders gebruiken, zoals klassen?

## Sjablonen tot leven brengen met JavaScript

Nu moeten we onze sjablonen functioneel maken. Net zoals een 3D-printer een digitale blauwdruk neemt en een fysiek object creëert, neemt JavaScript onze verborgen sjablonen en maakt zichtbare, interactieve elementen die gebruikers kunnen zien en gebruiken.

Het proces volgt drie consistente stappen die de basis vormen van moderne webontwikkeling. Zodra je dit patroon begrijpt, herken je het in veel frameworks en bibliotheken.

Als je je huidige HTML-bestand in een browser probeert, zie je dat het blijft steken op `Loading...`. Dat komt omdat we wat JavaScript-code moeten toevoegen om de HTML-sjablonen te instantiëren en weer te geven.

Het instantiëren van een sjabloon gebeurt meestal in 3 stappen:

1. Haal het sjabloonelement op in de DOM, bijvoorbeeld met [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Cloneer het sjabloonelement met [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Voeg het toe aan de DOM onder een zichtbaar element, bijvoorbeeld met [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

```mermaid
flowchart TD
    A[🔍 Step 1: Find Template] --> B[📋 Step 2: Clone Template]
    B --> C[🔗 Step 3: Attach to DOM]
    
    A1["document.getElementById('login')"] --> A
    B1["template.content.cloneNode(true)"] --> B  
    C1["app.appendChild(view)"] --> C
    
    C --> D[👁️ Template Visible to User]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
```

**Visuele uitleg van het proces:**
- **Stap 1** lokaliseert het verborgen sjabloon in de DOM-structuur
- **Stap 2** maakt een werkende kopie die veilig kan worden aangepast
- **Stap 3** voegt de kopie toe aan het zichtbare paginagebied
- **Resultaat** is een functioneel scherm waarmee gebruikers kunnen interageren

✅ Waarom moeten we het sjabloon klonen voordat we het aan de DOM toevoegen? Wat denk je dat er zou gebeuren als we deze stap overslaan?

### Taak

Maak een nieuw bestand genaamd `app.js` in je projectmap en importeer dat bestand in de `<head>`-sectie van je HTML:

```html
<script src="app.js" defer></script>
```

**Uitleg over deze scriptimport:**
- **Linkt** het JavaScript-bestand aan ons HTML-document
- **Gebruikt** het `defer`-attribuut om ervoor te zorgen dat het script wordt uitgevoerd nadat het HTML-parsen is voltooid
- **Maakt** toegang tot alle DOM-elementen mogelijk, aangezien ze volledig zijn geladen voordat het script wordt uitgevoerd
- **Volgt** moderne best practices voor scriptladen en prestaties

Nu maken we in `app.js` een nieuwe functie `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Stap voor stap, wat gebeurt er hier:**
- **Lokaliseert** het sjabloonelement met behulp van de unieke ID
- **Maakt** een diepe kopie van de inhoud van het sjabloon met `cloneNode(true)`
- **Vindt** de app-container waar de inhoud wordt weergegeven
- **Leegt** eventuele bestaande inhoud van de app-container
- **Voegt** de gekloonde sjablooninhoud toe aan de zichtbare DOM

Roep nu deze functie aan met een van de sjablonen en bekijk het resultaat.

```js
updateRoute('login');
```

**Wat deze functieaanroep bereikt:**
- **Activeert** het inlogsjabloon door de ID als parameter door te geven
- **Toont** hoe je programmeerbaar kunt schakelen tussen verschillende app-schermen
- **Toont** het inlogscherm in plaats van het "Loading..."-bericht

✅ Wat is het doel van deze code `app.innerHTML = '';`? Wat gebeurt er zonder?

## Routes maken

Routing gaat in wezen over het verbinden van URL's met de juiste inhoud. Denk aan hoe vroege telefonisten schakelkasten gebruikten om oproepen door te verbinden – ze namen een inkomend verzoek en stuurden het naar de juiste bestemming. Webrouting werkt op een vergelijkbare manier, waarbij een URL-verzoek wordt genomen en wordt bepaald welke inhoud moet worden weergegeven.

Traditioneel behandelden webservers dit door verschillende HTML-bestanden te serveren voor verschillende URL's. Omdat we een single-page app bouwen, moeten we deze routing zelf afhandelen met JavaScript. Deze aanpak geeft ons meer controle over de gebruikerservaring en prestaties.

```mermaid
flowchart LR
    A["🌐 URL Path<br/>/dashboard"] --> B["🗺️ Routes Object<br/>Lookup"]
    B --> C["🎯 Template ID<br/>'dashboard'"]
    C --> D["📄 Find Template<br/>getElementById"]
    D --> E["👁️ Display Screen<br/>Clone & Append"]
    
    F["📍 /login"] --> G["🎯 'login'"]
    H["📍 /unknown"] --> I["❌ Not Found"]
    I --> J["🔄 Redirect to /login"]
    
    style B fill:#e3f2fd
    style E fill:#e8f5e8
    style I fill:#ffebee
    style J fill:#fff3e0
```

**Begrijpen van de routingflow:**
- **URL-wijzigingen** activeren een zoekopdracht in onze routesconfiguratie
- **Geldige routes** worden gekoppeld aan specifieke sjabloon-ID's voor weergave
- **Ongeldige routes** activeren een fallback-gedrag om gebroken toestanden te voorkomen
- **Sjabloonweergave** volgt het eerder geleerde driestappenproces

Bij een webapp noemen we *Routing* de intentie om **URL's** in kaart te brengen naar specifieke schermen die moeten worden weergegeven. Op een website met meerdere HTML-bestanden gebeurt dit automatisch omdat de bestandslocaties worden weerspiegeld in de URL. Bijvoorbeeld, met deze bestanden in je projectmap:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Als je een webserver maakt met `mywebsite` als root, zal de URL-mapping zijn:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Echter, voor onze webapp gebruiken we één HTML-bestand dat alle schermen bevat, dus dit standaardgedrag zal ons niet helpen. We moeten deze mapping handmatig maken en de weergegeven sjabloon bijwerken met JavaScript.

### Taak

We gebruiken een eenvoudig object om een [map](https://en.wikipedia.org/wiki/Associative_array) te implementeren tussen URL-paden en onze sjablonen. Voeg dit object toe aan de bovenkant van je `app.js`-bestand.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

**Begrijpen van deze routesconfiguratie:**
- **Definieert** een mapping tussen URL-paden en sjabloonidentificatoren
- **Gebruikt** objectsyntaxis waarbij sleutels URL-paden zijn en waarden sjablooninformatie bevatten
- **Maakt** eenvoudige opzoeking mogelijk van welke sjabloon moet worden weergegeven voor een bepaalde URL
- **Biedt** een schaalbare structuur voor het toevoegen van nieuwe routes in de toekomst

Laten we nu de functie `updateRoute` een beetje aanpassen. In plaats van direct de `templateId` als argument door te geven, willen we deze ophalen door eerst naar de huidige URL te kijken en vervolgens onze map te gebruiken om de bijbehorende sjabloon-ID-waarde te krijgen. We kunnen [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) gebruiken om alleen het padgedeelte van de URL op te halen.

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

**Uitleg van wat hier gebeurt:**
- **Haalt** het huidige pad uit de URL van de browser met `window.location.pathname`
- **Zoekt** de bijbehorende routeconfiguratie op in ons routesobject
- **Haalt** de sjabloon-ID op uit de routeconfiguratie
- **Volgt** hetzelfde sjabloonweergaveproces als eerder
- **Creëert** een dynamisch systeem dat reageert op URL-wijzigingen

Hier hebben we de routes die we hebben gedeclareerd in kaart gebracht naar de bijbehorende sjabloon. Je kunt proberen of het correct werkt door de URL handmatig in je browser te wijzigen.
✅ Wat gebeurt er als je een onbekend pad invoert in de URL? Hoe kunnen we dit oplossen?

## Navigatie toevoegen

Nu de routing is ingesteld, hebben gebruikers een manier nodig om door de app te navigeren. Traditionele websites laden hele pagina's opnieuw bij het klikken op links, maar wij willen zowel de URL als de inhoud bijwerken zonder dat de pagina opnieuw wordt geladen. Dit zorgt voor een soepelere ervaring, vergelijkbaar met hoe desktopapplicaties tussen verschillende weergaven schakelen.

We moeten twee dingen coördineren: het bijwerken van de URL van de browser zodat gebruikers pagina's kunnen bookmarken en links kunnen delen, en het weergeven van de juiste inhoud. Wanneer dit correct wordt geïmplementeerd, creëert dit de naadloze navigatie die gebruikers verwachten van moderne applicaties.

> 🏗️ **Architectuur Inzicht**: Componenten van het navigatiesysteem
>
> **Wat je bouwt:**
> - **🔄 URL-beheer**: Bijwerkt de adresbalk van de browser zonder de pagina opnieuw te laden
> - **📋 Templatesysteem**: Wisselt dynamisch inhoud op basis van de huidige route  
> - **📚 Integratie met geschiedenis**: Behoudt de functionaliteit van de terug/vooruit-knoppen van de browser
> - **🛡️ Foutafhandeling**: Zorgt voor een nette afhandeling van ongeldige of ontbrekende routes
>
> **Hoe de componenten samenwerken:**
> - **Luistert** naar navigatiegebeurtenissen (klikken, wijzigingen in de geschiedenis)
> - **Bijwerkt** de URL met behulp van de History API
> - **Rendert** de juiste template voor de nieuwe route
> - **Behoudt** een naadloze gebruikerservaring

De volgende stap voor onze app is om de mogelijkheid toe te voegen om tussen pagina's te navigeren zonder de URL handmatig te hoeven wijzigen. Dit houdt twee dingen in:

  1. Het bijwerken van de huidige URL
  2. Het bijwerken van de weergegeven template op basis van de nieuwe URL

We hebben het tweede deel al geregeld met de functie `updateRoute`, dus we moeten uitzoeken hoe we de huidige URL kunnen bijwerken.

We zullen JavaScript moeten gebruiken, en meer specifiek [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), waarmee we de URL kunnen bijwerken en een nieuwe invoer in de browsergeschiedenis kunnen maken, zonder de HTML opnieuw te laden.

> ⚠️ **Belangrijke opmerking**: Hoewel het HTML anker-element [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) op zichzelf kan worden gebruikt om hyperlinks naar verschillende URL's te maken, zal het standaard de HTML opnieuw laden. Het is noodzakelijk om dit gedrag te voorkomen bij het afhandelen van routing met aangepaste JavaScript, door de functie `preventDefault()` te gebruiken op het klikgebeurtenis.

### Taak

Laten we een nieuwe functie maken die we kunnen gebruiken om in onze app te navigeren:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

**Begrijpen van deze navigatiefunctie:**
- **Bijwerkt** de URL van de browser naar het nieuwe pad met `history.pushState`
- **Voegt** een nieuwe invoer toe aan de geschiedenisstack van de browser voor correcte ondersteuning van de terug/vooruit-knoppen
- **Activeert** de functie `updateRoute()` om de bijbehorende template weer te geven
- **Behoudt** de single-page app-ervaring zonder pagina opnieuw te laden

Deze methode werkt eerst de huidige URL bij op basis van het opgegeven pad en werkt vervolgens de template bij. De eigenschap `window.location.origin` retourneert de URL-root, waardoor we een volledige URL kunnen reconstrueren vanuit een gegeven pad.

Nu we deze functie hebben, kunnen we het probleem aanpakken dat we hebben als een pad niet overeenkomt met een gedefinieerde route. We zullen de functie `updateRoute` aanpassen door een fallback toe te voegen naar een van de bestaande routes als we geen match kunnen vinden.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Belangrijke punten om te onthouden:**
- **Controleert** of er een route bestaat voor het huidige pad
- **Redirect** naar de loginpagina wanneer een ongeldige route wordt geopend
- **Biedt** een fallback-mechanisme dat gebroken navigatie voorkomt
- **Zorgt ervoor** dat gebruikers altijd een geldige scherm zien, zelfs met onjuiste URL's

Als er geen route kan worden gevonden, zullen we nu doorverwijzen naar de `login`-pagina.

Laten we nu een functie maken om de URL te verkrijgen wanneer een link wordt aangeklikt en om het standaardgedrag van de browserlink te voorkomen:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

**Uitleg van deze klikhandler:**
- **Voorkomt** het standaardgedrag van de browserlink met `preventDefault()`
- **Haalt** de bestemmings-URL op uit het aangeklikte linkelement
- **Roep** onze aangepaste navigatiefunctie aan in plaats van de pagina opnieuw te laden
- **Behoudt** de soepele single-page applicatie-ervaring

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

**Wat deze onclick-binding bereikt:**
- **Verbindt** elke link met ons aangepaste navigatiesysteem
- **Geeft** de klikgebeurtenis door aan onze functie `onLinkClick` voor verwerking
- **Maakt** soepele navigatie mogelijk zonder pagina opnieuw te laden
- **Behoudt** een correcte URL-structuur die gebruikers kunnen bookmarken of delen

Het [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)-attribuut bindt de `click`-gebeurtenis aan JavaScript-code, hier de oproep naar de functie `navigate()`.

Probeer op deze links te klikken, je zou nu moeten kunnen navigeren tussen de verschillende schermen van je app.

✅ De methode `history.pushState` maakt deel uit van de HTML5-standaard en is geïmplementeerd in [alle moderne browsers](https://caniuse.com/?search=pushState). Als je een webapp bouwt voor oudere browsers, is er een truc die je kunt gebruiken in plaats van deze API: door een [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) vóór het pad te gebruiken, kun je routing implementeren die werkt met reguliere anker-navigatie en de pagina niet opnieuw laadt, omdat het bedoeld was om interne links binnen een pagina te maken.

## De terug- en vooruitknoppen laten werken

De terug- en vooruitknoppen zijn fundamenteel voor webnavigatie, net zoals NASA-missiecontrollers eerdere systeemstatussen kunnen bekijken tijdens ruimtemissies. Gebruikers verwachten dat deze knoppen werken, en als dat niet het geval is, breekt dat de verwachte browse-ervaring.

Onze single-page app heeft extra configuratie nodig om dit te ondersteunen. De browser onderhoudt een geschiedenisstack (die we hebben toegevoegd met `history.pushState`), maar wanneer gebruikers door deze geschiedenis navigeren, moet onze app reageren door de weergegeven inhoud dienovereenkomstig bij te werken.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant App
    participant Template
    
    User->>Browser: Clicks "Login" link
    Browser->>App: onclick event triggered
    App->>App: preventDefault() & navigate('/dashboard')
    App->>Browser: history.pushState('/dashboard')
    Browser->>Browser: URL updates to /dashboard
    App->>App: updateRoute() called
    App->>Template: Find & clone dashboard template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display dashboard screen
    
    Note over User,Template: User clicks browser back button
    
    User->>Browser: Clicks back button
    Browser->>Browser: History moves back to /login
    Browser->>App: popstate event fired
    App->>App: updateRoute() called automatically
    App->>Template: Find & clone login template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display login screen
```

**Belangrijke interactiepunten:**
- **Gebruikersacties** activeren navigatie via klikken of browserknoppen
- **App onderschept** linkklikken om te voorkomen dat de pagina opnieuw wordt geladen
- **History API** beheert URL-wijzigingen en de geschiedenisstack van de browser
- **Templates** bieden de inhoudsstructuur voor elk scherm
- **Event listeners** zorgen ervoor dat de app reageert op alle soorten navigatie

Het gebruik van `history.pushState` creëert nieuwe invoeren in de navigatiegeschiedenis van de browser. Je kunt dat controleren door de *terugknop* van je browser ingedrukt te houden; het zou er ongeveer zo uit moeten zien:

![Screenshot van navigatiegeschiedenis](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.nl.png)

Als je een paar keer op de terugknop klikt, zie je dat de huidige URL verandert en de geschiedenis wordt bijgewerkt, maar dat dezelfde template blijft worden weergegeven.

Dat komt omdat de applicatie niet weet dat we `updateRoute()` moeten aanroepen elke keer dat de geschiedenis verandert. Als je kijkt naar de documentatie van [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), kun je zien dat als de status verandert - wat betekent dat we naar een andere URL zijn gegaan - de [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)-gebeurtenis wordt geactiveerd. We zullen dat gebruiken om dat probleem op te lossen.

### Taak

Om ervoor te zorgen dat de weergegeven template wordt bijgewerkt wanneer de browsergeschiedenis verandert, zullen we een nieuwe functie koppelen die `updateRoute()` aanroept. We doen dit onderaan ons `app.js`-bestand:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

**Begrijpen van deze geschiedenisintegratie:**
- **Luistert** naar `popstate`-gebeurtenissen die optreden wanneer gebruikers navigeren met browserknoppen
- **Gebruikt** een arrow-functie voor beknopte syntax van de event handler
- **Roept** automatisch `updateRoute()` aan telkens wanneer de geschiedenisstatus verandert
- **Initialiseert** de app door `updateRoute()` aan te roepen wanneer de pagina voor het eerst wordt geladen
- **Zorgt ervoor** dat de juiste template wordt weergegeven, ongeacht hoe gebruikers navigeren

> 💡 **Pro Tip**: We hebben hier een [arrow-functie](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) gebruikt om onze `popstate`-event handler beknopt te declareren, maar een reguliere functie zou hetzelfde werken.

Hier is een opfrisvideo over arrow-functies:

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Arrow Functions")

> 🎥 Klik op de afbeelding hierboven voor een video over arrow-functies.

Probeer nu de terug- en vooruitknoppen van je browser te gebruiken en controleer of de weergegeven route deze keer correct wordt bijgewerkt.

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter de bankapp door foutafhandeling en een 404-pagina template voor ongeldige routes te implementeren, waardoor de gebruikerservaring wordt verbeterd bij navigatie naar niet-bestaande pagina's.

**Prompt:** Maak een nieuwe HTML-template met id "not-found" die een gebruiksvriendelijke 404-foutpagina met styling weergeeft. Pas vervolgens de JavaScript-routinglogica aan om deze template te tonen wanneer gebruikers naar ongeldige URL's navigeren, en voeg een knop "Ga naar Home" toe die teruggaat naar de loginpagina.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## 🚀 Uitdaging

Voeg een nieuwe template en route toe voor een derde pagina die de credits voor deze app toont.

**Doelen van de uitdaging:**
- **Maak** een nieuwe HTML-template met een geschikte inhoudsstructuur
- **Voeg** de nieuwe route toe aan je routes-configuratieobject
- **Voeg** navigatielinks toe naar en van de creditspagina
- **Test** of alle navigatie correct werkt met de browsergeschiedenis

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/42)

## Review & Zelfstudie

Routing is een van de verrassend lastige onderdelen van webontwikkeling, vooral nu het web verschuift van pagina-verversingsgedrag naar Single Page Application-verversingen. Lees meer over [hoe de Azure Static Web App-service](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) routing afhandelt. Kun je uitleggen waarom sommige van de beslissingen die in dat document worden beschreven noodzakelijk zijn?

**Aanvullende leermiddelen:**
- **Verken** hoe populaire frameworks zoals React Router en Vue Router client-side routing implementeren
- **Onderzoek** de verschillen tussen hash-gebaseerde routing en History API-routing
- **Leer** over server-side rendering (SSR) en hoe dit routingstrategieën beïnvloedt
- **Onderzoek** hoe Progressive Web Apps (PWA's) routing en navigatie afhandelen

## Opdracht

[Verbeter de routing](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.