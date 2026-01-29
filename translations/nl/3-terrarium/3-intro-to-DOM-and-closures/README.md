# Terrarium Project Deel 3: DOM-manipulatie en JavaScript Closures

```mermaid
journey
    title Your JavaScript DOM Journey
    section Foundation
      Understand DOM: 3: Student
      Learn closures: 4: Student
      Connect elements: 4: Student
    section Interaction
      Setup drag events: 4: Student
      Track coordinates: 5: Student
      Handle movement: 5: Student
    section Polish
      Add cleanup: 4: Student
      Test functionality: 5: Student
      Complete terrarium: 5: Student
```

![DOM en een closure](../../../../translated_images/nl/webdev101-js.10280393044d7eaa.webp)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

Welkom bij een van de meest boeiende aspecten van webontwikkeling - interactief maken! Het Document Object Model (DOM) is als een brug tussen je HTML en JavaScript, en vandaag gaan we het gebruiken om je terrarium tot leven te brengen. Toen Tim Berners-Lee de eerste webbrowser creëerde, stelde hij zich een web voor waar documenten dynamisch en interactief konden zijn - de DOM maakt die visie mogelijk.

We gaan ook JavaScript closures verkennen, wat in het begin misschien intimiderend klinkt. Zie closures als het creëren van "geheugenruimtes" waarin je functies belangrijke informatie kunnen onthouden. Het is alsof elke plant in je terrarium zijn eigen gegevensrecord heeft om zijn positie bij te houden. Aan het einde van deze les begrijp je hoe natuurlijk en nuttig ze zijn.

Dit is wat we gaan bouwen: een terrarium waarin gebruikers planten overal kunnen slepen en neerzetten. Je leert de technieken voor DOM-manipulatie die alles aandrijven, van drag-and-drop bestandsuploads tot interactieve games. Laten we je terrarium tot leven brengen.

```mermaid
mindmap
  root((DOM & JavaScript))
    DOM Tree
      Element Selection
      Property Access
      Event Handling
      Dynamic Updates
    Events
      Pointer Events
      Mouse Events
      Touch Events
      Event Listeners
    Closures
      Private Variables
      Function Scope
      Memory Persistence
      State Management
    Drag & Drop
      Position Tracking
      Coordinate Math
      Event Lifecycle
      User Interaction
    Modern Patterns
      Event Delegation
      Performance
      Cross-Device
      Accessibility
```

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/19)

## Begrijpen van de DOM: Jouw toegangspoort tot interactieve webpagina's

Het Document Object Model (DOM) is hoe JavaScript communiceert met je HTML-elementen. Wanneer je browser een HTML-pagina laadt, creëert het een gestructureerde representatie van die pagina in het geheugen - dat is de DOM. Zie het als een stamboom waarin elk HTML-element een familielid is dat JavaScript kan benaderen, wijzigen of herschikken.

DOM-manipulatie transformeert statische pagina's in interactieve websites. Elke keer dat je een knop van kleur ziet veranderen bij hover, inhoud ziet bijwerken zonder de pagina te verversen, of elementen kunt verslepen, is dat DOM-manipulatie in actie.

```mermaid
flowchart TD
    A["Document"] --> B["HTML"]
    B --> C["Head"]
    B --> D["Body"]
    C --> E["Title"]
    C --> F["Meta Tags"]
    D --> G["H1: My Terrarium"]
    D --> H["Div: Page Container"]
    H --> I["Div: Left Container"]
    H --> J["Div: Right Container"]
    H --> K["Div: Terrarium"]
    I --> L["Plant Elements 1-7"]
    J --> M["Plant Elements 8-14"]
    
    L --> N["img#plant1"]
    L --> O["img#plant2"]
    M --> P["img#plant8"]
    M --> Q["img#plant9"]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style D fill:#e8f5e8
    style H fill:#fff3e0
    style N fill:#ffebee
    style O fill:#ffebee
    style P fill:#ffebee
    style Q fill:#ffebee
```

![DOM boomrepresentatie](../../../../translated_images/nl/dom-tree.7daf0e763cbbba92.webp)

> Een representatie van de DOM en de HTML-markup die ernaar verwijst. Van [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

**Dit maakt de DOM krachtig:**
- **Biedt** een gestructureerde manier om elk element op je pagina te benaderen
- **Maakt** dynamische inhoudupdates mogelijk zonder pagina-verversingen
- **Reageert** in real-time op gebruikersinteracties zoals klikken en slepen
- **Creëert** de basis voor moderne interactieve webapplicaties

## JavaScript Closures: Georganiseerde, krachtige code creëren

Een [JavaScript closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures) is als het geven van een functie zijn eigen privéwerkruimte met blijvend geheugen. Denk aan hoe Darwin's vinken op de Galápagos-eilanden elk gespecialiseerde snavels ontwikkelden op basis van hun specifieke omgeving - closures werken op een vergelijkbare manier, door gespecialiseerde functies te creëren die hun specifieke context "onthouden", zelfs nadat hun ouderfunctie is voltooid.

In ons terrarium helpen closures elke plant zijn eigen positie onafhankelijk te onthouden. Dit patroon komt veel voor in professionele JavaScript-ontwikkeling, waardoor het een waardevol concept is om te begrijpen.

```mermaid
flowchart LR
    A["dragElement(plant1)"] --> B["Creates Closure"]
    A2["dragElement(plant2)"] --> B2["Creates Closure"]
    
    B --> C["Private Variables"]
    B2 --> C2["Private Variables"]
    
    C --> D["pos1, pos2, pos3, pos4"]
    C --> E["pointerDrag function"]
    C --> F["elementDrag function"]
    C --> G["stopElementDrag function"]
    
    C2 --> D2["pos1, pos2, pos3, pos4"]
    C2 --> E2["pointerDrag function"]
    C2 --> F2["elementDrag function"]
    C2 --> G2["stopElementDrag function"]
    
    H["Plant 1 remembers its position"] --> B
    H2["Plant 2 remembers its position"] --> B2
    
    style B fill:#e8f5e8
    style B2 fill:#e8f5e8
    style C fill:#fff3e0
    style C2 fill:#fff3e0
```

> 💡 **Closures begrijpen**: Closures zijn een belangrijk onderwerp in JavaScript, en veel ontwikkelaars gebruiken ze jarenlang voordat ze alle theoretische aspecten volledig begrijpen. Vandaag richten we ons op praktische toepassing - je zult zien dat closures natuurlijk ontstaan terwijl we onze interactieve functies bouwen. Begrip zal zich ontwikkelen naarmate je ziet hoe ze echte problemen oplossen.

![DOM boomrepresentatie](../../../../translated_images/nl/dom-tree.7daf0e763cbbba92.webp)

> Een representatie van de DOM en de HTML-markup die ernaar verwijst. Van [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

In deze les voltooien we ons interactieve terrariumproject door de JavaScript te maken waarmee een gebruiker de planten op de pagina kan manipuleren.

## Voordat We Beginnen: Klaar voor Succes

Je hebt je HTML- en CSS-bestanden nodig van de vorige terrariumlessen - we gaan dat statische ontwerp interactief maken. Als je voor het eerst meedoet, biedt het voltooien van die lessen eerst belangrijke context.

Dit is wat we gaan bouwen:
- **Soepel slepen en neerzetten** voor alle terrariumplanten
- **Coördinaten bijhouden** zodat planten hun posities onthouden
- **Een complete interactieve interface** met vanilla JavaScript
- **Schone, georganiseerde code** met closure-patronen

## Je JavaScript-bestand instellen

Laten we het JavaScript-bestand maken dat je terrarium interactief maakt.

**Stap 1: Maak je scriptbestand**

Maak in je terrariummap een nieuw bestand genaamd `script.js`.

**Stap 2: Koppel de JavaScript aan je HTML**

Voeg dit script-tag toe aan de `<head>`-sectie van je `index.html`-bestand:

```html
<script src="./script.js" defer></script>
```

**Waarom het `defer`-attribuut belangrijk is:**
- **Zorgt ervoor** dat je JavaScript wacht tot alle HTML is geladen
- **Voorkomt** fouten waarbij JavaScript zoekt naar elementen die nog niet klaar zijn
- **Garandeert** dat al je plantelementen beschikbaar zijn voor interactie
- **Biedt** betere prestaties dan scripts onderaan de pagina plaatsen

> ⚠️ **Belangrijke Opmerking**: Het `defer`-attribuut voorkomt veelvoorkomende timingproblemen. Zonder dit kan JavaScript proberen HTML-elementen te benaderen voordat ze geladen zijn, wat fouten veroorzaakt.

---

## JavaScript verbinden met je HTML-elementen

Voordat we elementen sleepbaar kunnen maken, moet JavaScript ze in de DOM lokaliseren. Zie dit als een bibliotheekcatalogussysteem - zodra je het catalogusnummer hebt, kun je precies het boek vinden dat je nodig hebt en toegang krijgen tot alle inhoud.

We gebruiken de methode `document.getElementById()` om deze verbindingen te maken. Het is als een nauwkeurig archiveringssysteem - je geeft een ID op en het lokaliseert precies het element dat je nodig hebt in je HTML.

### Sleepfunctionaliteit inschakelen voor alle planten

Voeg deze code toe aan je `script.js`-bestand:

```javascript
// Enable drag functionality for all 14 plants
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

**Dit is wat deze code doet:**
- **Lokaliseert** elk plantelement in de DOM met behulp van zijn unieke ID
- **Haalt** een JavaScript-referentie op naar elk HTML-element
- **Geeft** elk element door aan een `dragElement`-functie (die we hierna maken)
- **Bereidt** elke plant voor op drag-and-drop interactie
- **Verbindt** je HTML-structuur met JavaScript-functionaliteit

> 🎯 **Waarom IDs gebruiken in plaats van klassen?** IDs bieden unieke identificatoren voor specifieke elementen, terwijl CSS-klassen zijn ontworpen voor het stylen van groepen elementen. Wanneer JavaScript individuele elementen moet manipuleren, bieden IDs de precisie en prestaties die we nodig hebben.

> 💡 **Pro Tip**: Merk op hoe we `dragElement()` voor elke plant afzonderlijk aanroepen. Deze aanpak zorgt ervoor dat elke plant zijn eigen onafhankelijke sleepgedrag krijgt, wat essentieel is voor een soepele gebruikersinteractie.

### 🔄 **Pedagogische Check-in**
**Begrip van DOM-verbinding**: Voordat je verder gaat met sleepfunctionaliteit, controleer of je kunt:
- ✅ Uitleggen hoe `document.getElementById()` HTML-elementen lokaliseert
- ✅ Begrijpen waarom we unieke IDs gebruiken voor elke plant
- ✅ De functie van het `defer`-attribuut in script-tags beschrijven
- ✅ Herkennen hoe JavaScript en HTML via de DOM verbonden zijn

**Snelle Zelftest**: Wat zou er gebeuren als twee elementen dezelfde ID hadden? Waarom retourneert `getElementById()` slechts één element?
*Antwoord: IDs moeten uniek zijn; bij duplicatie wordt alleen het eerste element geretourneerd*

---

## De dragElement Closure bouwen

Nu gaan we het hart van onze sleepfunctionaliteit creëren: een closure die het sleepgedrag voor elke plant beheert. Deze closure bevat meerdere interne functies die samenwerken om muisbewegingen bij te houden en elementposities bij te werken.

Closures zijn perfect voor deze taak omdat ze ons in staat stellen "privé"-variabelen te creëren die blijven bestaan tussen functieaanroepen, waardoor elke plant zijn eigen onafhankelijke coördinatensysteem krijgt.

### Closures begrijpen met een eenvoudig voorbeeld

Laat me closures demonstreren met een eenvoudig voorbeeld dat het concept illustreert:

```javascript
function createCounter() {
    let count = 0; // This is like a private variable
    
    function increment() {
        count++; // The inner function remembers the outer variable
        return count;
    }
    
    return increment; // We're giving back the inner function
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

**Dit gebeurt er in dit closure-patroon:**
- **Creëert** een privé `count`-variabele die alleen binnen deze closure bestaat
- **De interne functie** kan die externe variabele benaderen en wijzigen (het closure-mechanisme)
- **Wanneer we terugkeren** naar de interne functie, behoudt deze zijn verbinding met die privégegevens
- **Zelfs nadat** `createCounter()` is voltooid, blijft `count` bestaan en onthoudt zijn waarde

### Waarom Closures Perfect Zijn voor Sleepfunctionaliteit

Voor ons terrarium moet elke plant zijn huidige positiecoördinaten onthouden. Closures bieden de perfecte oplossing:

**Belangrijke voordelen voor ons project:**
- **Behoudt** privépositievariabelen voor elke plant onafhankelijk
- **Bewaart** coördinatendata tussen sleepgebeurtenissen
- **Voorkomt** variabeleconflicten tussen verschillende sleepbare elementen
- **Creëert** een schone, georganiseerde code-structuur

> 🎯 **Leerdoel**: Je hoeft niet meteen elk aspect van closures te beheersen. Focus op hoe ze ons helpen code te organiseren en de status te behouden voor onze sleepfunctionaliteit.

```mermaid
stateDiagram-v2
    [*] --> Ready: Page loads
    Ready --> DragStart: User presses down (pointerdown)
    DragStart --> Dragging: Mouse/finger moves (pointermove)
    Dragging --> Dragging: Continue moving
    Dragging --> DragEnd: User releases (pointerup)
    DragEnd --> Ready: Reset for next drag
    
    state DragStart {
        [*] --> CapturePosition
        CapturePosition --> SetupListeners
        SetupListeners --> [*]
    }
    
    state Dragging {
        [*] --> CalculateMovement
        CalculateMovement --> UpdatePosition
        UpdatePosition --> [*]
    }
    
    state DragEnd {
        [*] --> RemoveListeners
        RemoveListeners --> CleanupState
        CleanupState --> [*]
    }
```

### De dragElement Functie maken

Laten we nu de hoofdfunctie bouwen die alle sleep-logica zal afhandelen. Voeg deze functie toe onder je plantelementdeclaraties:

```javascript
function dragElement(terrariumElement) {
    // Initialize position tracking variables
    let pos1 = 0,  // Previous mouse X position
        pos2 = 0,  // Previous mouse Y position  
        pos3 = 0,  // Current mouse X position
        pos4 = 0;  // Current mouse Y position
    
    // Set up the initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;
}
```

**Begrip van het positievolgsysteem:**
- **`pos1` en `pos2`**: Bewaren het verschil tussen oude en nieuwe muisposities
- **`pos3` en `pos4`**: Volgen de huidige muiscoördinaten
- **`terrariumElement`**: Het specifieke plantelement dat we sleepbaar maken
- **`onpointerdown`**: Het evenement dat wordt geactiveerd wanneer de gebruiker begint te slepen

**Zo werkt het closure-patroon:**
- **Creëert** privépositievariabelen voor elk plantelement
- **Behoudt** deze variabelen gedurende de sleepcyclus
- **Zorgt ervoor** dat elke plant zijn eigen coördinaten onafhankelijk bijhoudt
- **Biedt** een schone interface via de `dragElement`-functie

### Waarom Pointer Events Gebruiken?

Je vraagt je misschien af waarom we `onpointerdown` gebruiken in plaats van het meer bekende `onclick`. Hier is de reden:

| Type Event | Beste Voor | Het nadeel |
|------------|------------|------------|
| `onclick` | Eenvoudige knopklikken | Kan geen slepen afhandelen (alleen klikken en loslaten) |
| `onpointerdown` | Zowel muis als aanraking | Nieuwere methode, maar tegenwoordig goed ondersteund |
| `onmousedown` | Alleen desktopmuis | Laat mobiele gebruikers buiten beschouwing |

**Waarom pointer events perfect zijn voor wat we bouwen:**
- **Werkt uitstekend** of iemand nu een muis, vinger of zelfs een stylus gebruikt
- **Voelt hetzelfde** op een laptop, tablet of telefoon
- **Handelt** de daadwerkelijke sleepbeweging af (niet alleen klikken en klaar)
- **Creëert** een soepele ervaring die gebruikers verwachten van moderne webapps

> 💡 **Toekomstbestendig**: Pointer events zijn de moderne manier om gebruikersinteracties af te handelen. In plaats van aparte code te schrijven voor muis en aanraking, krijg je beide gratis. Best handig, toch?

### 🔄 **Pedagogische Check-in**
**Begrip van Event Handling**: Pauzeer om je begrip van events te bevestigen:
- ✅ Waarom gebruiken we pointer events in plaats van muisevents?
- ✅ Hoe blijven closure-variabelen bestaan tussen functieaanroepen?
- ✅ Welke rol speelt `preventDefault()` in soepel slepen?
- ✅ Waarom koppelen we luisteraars aan het document in plaats van aan individuele elementen?

**Echte Wereld Connectie**: Denk aan drag-and-drop interfaces die je dagelijks gebruikt:
- **Bestandsuploads**: Bestanden naar een browservenster slepen
- **Kanban-borden**: Taken tussen kolommen verplaatsen
- **Fotogalerijen**: Foto's herschikken
- **Mobiele interfaces**: Swipen en slepen op touchscreens

---

## De pointerDrag Functie: Het Begin van een Sleepbeweging Vastleggen

Wanneer een gebruiker op een plant drukt (met een muisklik of aanraking), komt de `pointerDrag`-functie in actie. Deze functie legt de initiële coördinaten vast en stelt het sleepsysteem in.

Voeg deze functie toe binnen je `dragElement` closure, direct na de regel `terrariumElement.onpointerdown = pointerDrag;`:

```javascript
function pointerDrag(e) {
    // Prevent default browser behavior (like text selection)
    e.preventDefault();
    
    // Capture the initial mouse/touch position
    pos3 = e.clientX;  // X coordinate where drag started
    pos4 = e.clientY;  // Y coordinate where drag started
    
    // Set up event listeners for the dragging process
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}
```

**Stap voor stap, dit gebeurt er:**
- **Voorkomt** standaard browsergedrag dat het slepen kan verstoren
- **Registreert** de exacte coördinaten waar de gebruiker het sleepgebaar begon
- **Stelt** event listeners in voor de voortgang van de sleepbeweging
- **Bereidt** het systeem voor om muis-/vingerbewegingen over het hele document bij te houden

### Begrip van Event Preventie

De regel `e.preventDefault()` is cruciaal voor soepel slepen:

**Zonder preventie kunnen browsers:**
- **Tekst selecteren** tijdens het slepen over de pagina
- **Contextmenu's activeren** bij rechtsklik-slepen
- **Interfereren** met ons aangepaste sleepgedrag
- **Visuele artefacten creëren** tijdens de sleepbewerking

> 🔍 **Experiment**: Probeer na het voltooien van deze les `e.preventDefault()` te verwijderen en zie hoe dit de sleepervaring beïnvloedt. Je zult snel begrijpen waarom deze regel essentieel is!

### Coördinatenvolgsysteem

De eigenschappen `e.clientX` en `e.clientY` geven ons nauwkeurige muis-/aanraakcoördinaten:

| Eigenschap | Wat het meet | Toepassing |
|------------|--------------|------------|
| `clientX` | Horizontale positie ten opzichte van de viewport | Volgen van links-rechts beweging |
| `clientY` | Verticale positie ten opzichte van de viewport | Volgen van op-en-neer beweging |
**Begrijpen van deze coördinaten:**
- **Biedt** pixel-perfecte positioneringsinformatie
- **Update** in real-time terwijl de gebruiker zijn cursor beweegt
- **Blijft** consistent op verschillende schermgroottes en zoomniveaus
- **Maakt** vloeiende, responsieve sleepinteracties mogelijk

### Documentniveau Event Listeners instellen

Let op hoe we de verplaats- en stopgebeurtenissen koppelen aan het hele `document`, niet alleen aan het plant-element:

```javascript
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

**Waarom koppelen aan het document:**
- **Blijft** volgen, zelfs wanneer de muis het plant-element verlaat
- **Voorkomt** onderbreking van het slepen als de gebruiker snel beweegt
- **Biedt** vloeiend slepen over het hele scherm
- **Behandelt** randgevallen waarbij de cursor buiten het browservenster beweegt

> ⚡ **Prestatie-opmerking**: We ruimen deze documentniveau listeners op zodra het slepen stopt om geheugenlekken en prestatieproblemen te voorkomen.

## Het sleepsysteem voltooien: Beweging en opruimen

Nu voegen we de twee resterende functies toe die de daadwerkelijke sleepbeweging en het opruimen bij het stoppen van het slepen afhandelen. Deze functies werken samen om een vloeiende, responsieve beweging van planten in je terrarium te creëren.

### De elementDrag-functie: Beweging volgen

Voeg de `elementDrag`-functie toe direct na de sluitende accolade van `pointerDrag`:

```javascript
function elementDrag(e) {
    // Calculate the distance moved since the last event
    pos1 = pos3 - e.clientX;  // Horizontal distance moved
    pos2 = pos4 - e.clientY;  // Vertical distance moved
    
    // Update the current position tracking
    pos3 = e.clientX;  // New current X position
    pos4 = e.clientY;  // New current Y position
    
    // Apply the movement to the element's position
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}
```

**Begrijpen van de coördinatenwiskunde:**
- **`pos1` en `pos2`**: Berekenen hoe ver de muis is bewogen sinds de laatste update
- **`pos3` en `pos4`**: Slaan de huidige muispositie op voor de volgende berekening
- **`offsetTop` en `offsetLeft`**: Verkrijgen de huidige positie van het element op de pagina
- **Aftreklogica**: Verplaatst het element met dezelfde hoeveelheid als de muis is bewogen

```mermaid
sequenceDiagram
    participant User
    participant Mouse
    participant JavaScript
    participant Plant
    
    User->>Mouse: Start drag at (100, 50)
    Mouse->>JavaScript: pointerdown event
    JavaScript->>JavaScript: Store initial position (pos3=100, pos4=50)
    JavaScript->>JavaScript: Setup move/up listeners
    
    User->>Mouse: Move to (110, 60)
    Mouse->>JavaScript: pointermove event
    JavaScript->>JavaScript: Calculate: pos1=10, pos2=10
    JavaScript->>Plant: Update: left += 10px, top += 10px
    Plant->>Plant: Render at new position
    
    User->>Mouse: Release at (120, 65)
    Mouse->>JavaScript: pointerup event
    JavaScript->>JavaScript: Remove listeners
    JavaScript->>JavaScript: Reset for next drag
```

**Hier is de berekening van de beweging:**
1. **Meet** het verschil tussen oude en nieuwe muisposities
2. **Bereken** hoeveel het element moet worden verplaatst op basis van de muisbeweging
3. **Update** de CSS-positie-eigenschappen van het element in real-time
4. **Sla** de nieuwe positie op als basislijn voor de volgende bewegingsberekening

### Visuele weergave van de wiskunde

```mermaid
sequenceDiagram
    participant Mouse
    participant JavaScript
    participant Plant
    
    Mouse->>JavaScript: Move from (100,50) to (110,60)
    JavaScript->>JavaScript: Calculate: moved 10px right, 10px down
    JavaScript->>Plant: Update position by +10px right, +10px down
    Plant->>Plant: Render at new position
```

### De stopElementDrag-functie: Opruimen

Voeg de opruimfunctie toe na de sluitende accolade van `elementDrag`:

```javascript
function stopElementDrag() {
    // Remove the document-level event listeners
    document.onpointerup = null;
    document.onpointermove = null;
}
```

**Waarom opruimen essentieel is:**
- **Voorkomt** geheugenlekken door achterblijvende event listeners
- **Stopt** het sleepgedrag wanneer de gebruiker de plant loslaat
- **Maakt** het mogelijk om andere elementen onafhankelijk te slepen
- **Reset** het systeem voor de volgende sleepoperatie

**Wat er gebeurt zonder opruimen:**
- Event listeners blijven actief, zelfs nadat het slepen stopt
- Prestaties verslechteren naarmate ongebruikte listeners zich opstapelen
- Onverwacht gedrag bij interactie met andere elementen
- Browserbronnen worden verspild aan onnodige event handling

### Begrijpen van CSS-positie-eigenschappen

Ons sleepsysteem manipuleert twee belangrijke CSS-eigenschappen:

| Eigenschap | Wat het regelt | Hoe we het gebruiken |
|------------|----------------|-----------------------|
| `top` | Afstand vanaf de bovenrand | Verticale positionering tijdens het slepen |
| `left` | Afstand vanaf de linker rand | Horizontale positionering tijdens het slepen |

**Belangrijke inzichten over offset-eigenschappen:**
- **`offsetTop`**: Huidige afstand vanaf de bovenkant van het gepositioneerde bovenliggende element
- **`offsetLeft`**: Huidige afstand vanaf de linkerkant van het gepositioneerde bovenliggende element
- **Positioneringscontext**: Deze waarden zijn relatief ten opzichte van de dichtstbijzijnde gepositioneerde voorouder
- **Real-time updates**: Wijzigingen worden onmiddellijk doorgevoerd wanneer we de CSS-eigenschappen aanpassen

> 🎯 **Ontwerpfilosofie**: Dit sleepsysteem is opzettelijk flexibel – er zijn geen "drop zones" of beperkingen. Gebruikers kunnen planten overal plaatsen, waardoor ze volledige creatieve controle hebben over hun terrariumontwerp.

## Alles samenbrengen: Jouw complete sleepsysteem

Gefeliciteerd! Je hebt zojuist een geavanceerd sleep-en-neerzet systeem gebouwd met vanilla JavaScript. Jouw complete `dragElement`-functie bevat nu een krachtige closure die het volgende beheert:

**Wat jouw closure bereikt:**
- **Beheert** privépositievariabelen voor elke plant onafhankelijk
- **Handelt** de volledige sleepcyclus van begin tot eind af
- **Biedt** vloeiende, responsieve beweging over het hele scherm
- **Ruimt** bronnen correct op om geheugenlekken te voorkomen
- **Creëert** een intuïtieve, creatieve interface voor terrariumontwerp

### Testen van jouw interactieve terrarium

Test nu jouw interactieve terrarium! Open je `index.html`-bestand in een webbrowser en probeer de functionaliteit:

1. **Klik en houd vast** op een plant om te beginnen met slepen
2. **Beweeg je muis of vinger** en zie hoe de plant soepel volgt
3. **Laat los** om de plant op zijn nieuwe positie neer te zetten
4. **Experimenteer** met verschillende arrangementen om de interface te verkennen

🥇 **Prestatie**: Je hebt een volledig interactieve webapplicatie gemaakt met kernconcepten die professionele ontwikkelaars dagelijks gebruiken. Die sleep-en-neerzet functionaliteit gebruikt dezelfde principes als achter bestanduploads, kanbanborden en vele andere interactieve interfaces.

### 🔄 **Pedagogische Check-in**
**Volledig systeembegrip**: Controleer je beheersing van het volledige sleepsysteem:
- ✅ Hoe behouden closures onafhankelijke status voor elke plant?
- ✅ Waarom is de coördinatenberekening noodzakelijk voor vloeiende beweging?
- ✅ Wat zou er gebeuren als we vergeten event listeners op te ruimen?
- ✅ Hoe schaalt dit patroon naar complexere interacties?

**Reflectie op codekwaliteit**: Beoordeel je complete oplossing:
- **Modulair ontwerp**: Elke plant krijgt zijn eigen closure-instantie
- **Efficiëntie van events**: Correct instellen en opruimen van listeners
- **Ondersteuning voor meerdere apparaten**: Werkt op desktop en mobiel
- **Prestatiebewust**: Geen geheugenlekken of overbodige berekeningen

![afgewerkt terrarium](../../../../translated_images/nl/terrarium-final.0920f16e87c13a84.webp)

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Breid het terrariumproject uit door een resetfunctionaliteit toe te voegen die alle planten terugbrengt naar hun oorspronkelijke posities met vloeiende animaties.

**Prompt:** Maak een resetknop die, wanneer erop wordt geklikt, alle planten terug naar hun oorspronkelijke zijbalkposities animeert met behulp van CSS-overgangen. De functie moet de oorspronkelijke posities opslaan wanneer de pagina wordt geladen en planten soepel terug naar die posities laten bewegen over 1 seconde wanneer op de resetknop wordt gedrukt.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Extra uitdaging: Breid je vaardigheden uit

Klaar om je terrarium naar een hoger niveau te tillen? Probeer deze uitbreidingen te implementeren:

**Creatieve uitbreidingen:**
- **Dubbelklik** op een plant om deze naar voren te brengen (z-index manipulatie)
- **Voeg visuele feedback toe** zoals een subtiele gloed bij het zweven over planten
- **Implementeer grenzen** om te voorkomen dat planten buiten het terrarium worden gesleept
- **Maak een opsla-functie** die plantposities onthoudt met behulp van localStorage
- **Voeg geluidseffecten toe** voor het oppakken en plaatsen van planten

> 💡 **Leermogelijkheid**: Elk van deze uitdagingen leert je nieuwe aspecten van DOM-manipulatie, event handling en gebruikerservaringontwerp.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/20)

## Review & Zelfstudie: Verdiep je begrip

Je hebt de basisprincipes van DOM-manipulatie en closures onder de knie, maar er is altijd meer te ontdekken! Hier zijn enkele paden om je kennis en vaardigheden uit te breiden.

### Alternatieve benaderingen voor slepen en neerzetten

We hebben pointer events gebruikt voor maximale flexibiliteit, maar webontwikkeling biedt meerdere benaderingen:

| Benadering | Beste voor | Leerwaarde |
|------------|------------|------------|
| [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) | Bestanduploads, formele sleepzones | Begrip van native browsermogelijkheden |
| [Touch Events](https://developer.mozilla.org/docs/Web/API/Touch_events) | Mobiel-specifieke interacties | Mobiel-eerst ontwikkelingspatronen |
| CSS `transform` eigenschappen | Vloeiende animaties | Technieken voor prestatieoptimalisatie |

### Geavanceerde DOM-manipulatiethema's

**Volgende stappen in je leertraject:**
- **Event delegatie**: Efficiënt omgaan met events voor meerdere elementen
- **Intersection Observer**: Detecteren wanneer elementen het viewport binnenkomen/verlaten
- **Mutation Observer**: Wijzigingen in de DOM-structuur volgen
- **Web Components**: Herbruikbare, ingekapselde UI-elementen maken
- **Virtual DOM-concepten**: Begrijpen hoe frameworks DOM-updates optimaliseren

### Essentiële bronnen voor verdere studie

**Technische documentatie:**
- [MDN Pointer Events Guide](https://developer.mozilla.org/docs/Web/API/Pointer_events) - Uitgebreide pointer event referentie
- [W3C Pointer Events Specification](https://www.w3.org/TR/pointerevents1/) - Officiële standaarden documentatie
- [JavaScript Closures Deep Dive](https://developer.mozilla.org/docs/Web/JavaScript/Closures) - Geavanceerde closure patronen

**Browsercompatibiliteit:**
- [CanIUse.com](https://caniuse.com/) - Controleer functieondersteuning in verschillende browsers
- [MDN Browser Compatibility Data](https://github.com/mdn/browser-compat-data) - Gedetailleerde compatibiliteitsinformatie

**Oefenmogelijkheden:**
- **Bouw** een puzzelspel met vergelijkbare sleepmechanismen
- **Creëer** een kanbanbord met sleep-en-neerzet taakbeheer
- **Ontwerp** een fotogalerij met versleepbare foto-indelingen
- **Experimenteer** met touchgebaren voor mobiele interfaces

> 🎯 **Leerstrategie**: De beste manier om deze concepten te versterken is door te oefenen. Probeer variaties van versleepbare interfaces te bouwen – elk project leert je iets nieuws over gebruikersinteractie en DOM-manipulatie.

### ⚡ **Wat je in de komende 5 minuten kunt doen**
- [ ] Open browser DevTools en typ `document.querySelector('body')` in de console
- [ ] Probeer de tekst van een webpagina te wijzigen met `innerHTML` of `textContent`
- [ ] Voeg een klik-event listener toe aan een knop of link op een webpagina
- [ ] Inspecteer de DOM-boomstructuur met het Elementenpaneel

### 🎯 **Wat je in dit uur kunt bereiken**
- [ ] Maak de quiz na de les en herzie DOM-manipulatieconcepten
- [ ] Maak een interactieve webpagina die reageert op gebruikersklikken
- [ ] Oefen event handling met verschillende eventtypes (klik, mouseover, toetsdruk)
- [ ] Bouw een eenvoudige takenlijst of teller met DOM-manipulatie
- [ ] Verken de relatie tussen HTML-elementen en JavaScript-objecten

### 📅 **Jouw weeklange JavaScript-reis**
- [ ] Voltooi het interactieve terrariumproject met sleep-en-neerzet functionaliteit
- [ ] Beheers event delegatie voor efficiënte event handling
- [ ] Leer over de event loop en asynchrone JavaScript
- [ ] Oefen closures door modules te bouwen met privéstatus
- [ ] Verken moderne DOM-API's zoals Intersection Observer
- [ ] Bouw interactieve componenten zonder gebruik te maken van frameworks

### 🌟 **Jouw maandlange JavaScript-meesterschap**
- [ ] Maak een complexe single-page applicatie met vanilla JavaScript
- [ ] Leer een modern framework (React, Vue of Angular) en vergelijk het met vanilla DOM
- [ ] Draag bij aan open source JavaScript-projecten
- [ ] Beheers geavanceerde concepten zoals webcomponenten en aangepaste elementen
- [ ] Bouw performante webapplicaties met optimale DOM-patronen
- [ ] Leer anderen over DOM-manipulatie en JavaScript-grondbeginselen

## 🎯 Jouw JavaScript DOM-meesterschap tijdlijn

```mermaid
timeline
    title DOM & JavaScript Learning Progression
    
    section Foundation (15 minutes)
        DOM Understanding: Element selection methods
                         : Tree structure navigation
                         : Property access patterns
        
    section Event Handling (20 minutes)
        User Interaction: Pointer event basics
                        : Event listener setup
                        : Cross-device compatibility
                        : Event prevention techniques
        
    section Closures (25 minutes)
        Scope Management: Private variable creation
                        : Function persistence
                        : State management patterns
                        : Memory efficiency
        
    section Drag System (30 minutes)
        Interactive Features: Coordinate tracking
                            : Position calculation
                            : Movement mathematics
                            : Cleanup procedures
        
    section Advanced Patterns (45 minutes)
        Professional Skills: Event delegation
                           : Performance optimization
                           : Error handling
                           : Accessibility considerations
        
    section Framework Understanding (1 week)
        Modern Development: Virtual DOM concepts
                          : State management libraries
                          : Component architectures
                          : Build tool integration
        
    section Expert Level (1 month)
        Advanced DOM APIs: Intersection Observer
                         : Mutation Observer
                         : Custom Elements
                         : Web Components
```

### 🛠️ Samenvatting van jouw JavaScript Toolkit

Na het voltooien van deze les heb je nu:
- **DOM-meesterschap**: Elementselectie, eigenschapsmanipulatie en boomnavigatie
- **Event-expertise**: Cross-device interactiehandling met pointer events
- **Begrip van closures**: Beheer van privéstatus en functiepersistentie
- **Interactieve systemen**: Compleet sleep-en-neerzet implementatie vanaf nul
- **Prestatiebewustzijn**: Correct opruimen van events en geheugenbeheer
- **Moderne patronen**: Codeorganisatie technieken gebruikt in professionele ontwikkeling
- **Gebruikerservaring**: Intuïtieve, responsieve interfaces creëren

**Verworven professionele vaardigheden**: Je hebt functies gebouwd met dezelfde technieken als:
- **Trello/Kanban borden**: Kaarten slepen tussen kolommen
- **Bestanduploadsysteem**: Sleep-en-neerzet bestandshandeling
- **Fotogalerijen**: Foto-indeling interfaces
- **Mobiele apps**: Touch-gebaseerde interactiepatronen

**Volgende stap**: Je bent klaar om moderne frameworks zoals React, Vue of Angular te verkennen die voortbouwen op deze fundamentele DOM-manipulatieconcepten!

## Opdracht

[Werk nog wat meer met de DOM](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.