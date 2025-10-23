<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-23T00:57:37+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "nl"
}
-->
# Terrarium Project Deel 2: Introductie tot CSS

![Introductie tot CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

Weet je nog hoe je HTML-terrarium er vrij eenvoudig uitzag? Met CSS transformeren we die eenvoudige structuur tot iets visueel aantrekkelijks.

Als HTML het frame van een huis is, dan is CSS alles wat het huis gezellig maakt - de kleuren van de muren, de inrichting, de verlichting en hoe de kamers met elkaar verbonden zijn. Denk aan hoe het Paleis van Versailles begon als een eenvoudige jachthut, maar door zorgvuldige aandacht voor decoratie en indeling werd omgetoverd tot een van 's werelds meest magnifieke gebouwen.

Vandaag gaan we jouw terrarium transformeren van functioneel naar verfijnd. Je leert hoe je elementen precies positioneert, layouts laat reageren op verschillende schermformaten en visuele aantrekkingskracht creëert die websites boeiend maakt.

Aan het einde van deze les zul je zien hoe strategische CSS-styling je project aanzienlijk kan verbeteren. Laten we wat stijl toevoegen aan je terrarium.

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/17)

## Aan de slag met CSS

CSS wordt vaak gezien als alleen "dingen mooi maken", maar het heeft een veel bredere functie. CSS is als de regisseur van een film - je bepaalt niet alleen hoe alles eruitziet, maar ook hoe het beweegt, reageert op interactie en zich aanpast aan verschillende situaties.

Moderne CSS is opmerkelijk krachtig. Je kunt code schrijven die layouts automatisch aanpast voor telefoons, tablets en desktopcomputers. Je kunt vloeiende animaties maken die de aandacht van gebruikers sturen waar nodig. De resultaten kunnen behoorlijk indrukwekkend zijn wanneer alles samenwerkt.

> 💡 **Pro Tip**: CSS evolueert voortdurend met nieuwe functies en mogelijkheden. Controleer altijd [CanIUse.com](https://caniuse.com) om te verifiëren of browsers de nieuwste CSS-functies ondersteunen voordat je ze in productieprojecten gebruikt.

**Dit gaan we bereiken in deze les:**
- **Creëren** van een complete visuele vormgeving voor je terrarium met moderne CSS-technieken
- **Verkennen** van fundamentele concepten zoals de cascade, overerving en CSS-selectors
- **Implementeren** van responsieve positionerings- en layoutstrategieën
- **Bouwen** van de terrariumcontainer met CSS-vormen en styling

### Vereisten

Je zou de HTML-structuur voor je terrarium uit de vorige les moeten hebben voltooid en klaar moeten hebben om te stylen.

> 📺 **Videobron**: Bekijk deze handige video-uitleg
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Je CSS-bestand instellen

Voordat we kunnen beginnen met stylen, moeten we CSS koppelen aan onze HTML. Deze koppeling vertelt de browser waar de stylinginstructies voor ons terrarium te vinden zijn.

Maak in je terrariummap een nieuw bestand genaamd `style.css` en koppel het aan het `<head>`-gedeelte van je HTML-document:

```html
<link rel="stylesheet" href="./style.css" />
```

**Wat deze code doet:**
- **Maakt** een verbinding tussen je HTML- en CSS-bestanden
- **Vertelt** de browser om de stijlen uit `style.css` te laden en toe te passen
- **Gebruikt** het attribuut `rel="stylesheet"` om aan te geven dat dit een CSS-bestand is
- **Verwijst** naar het bestandspad met `href="./style.css"`

## Begrijpen van de CSS-cascade

Heb je je ooit afgevraagd waarom CSS "Cascading" Style Sheets wordt genoemd? Stijlen stromen als een waterval naar beneden en soms conflicteren ze met elkaar.

Denk aan hoe militaire commandostructuren werken - een algemene order kan zeggen "alle troepen dragen groen", maar een specifieke order aan jouw eenheid kan zeggen "draag ceremonieel blauw". De meer specifieke instructie heeft voorrang. CSS volgt een vergelijkbare logica, en het begrijpen van deze hiërarchie maakt het oplossen van problemen veel eenvoudiger.

### Experimenteren met cascadeprioriteit

Laten we de cascade in actie zien door een stijlconflict te creëren. Voeg eerst een inline stijl toe aan je `<h1>`-tag:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Wat deze code doet:**
- **Past** een rode kleur direct toe op het `<h1>`-element met behulp van inline styling
- **Gebruikt** het attribuut `style` om CSS direct in de HTML in te voegen
- **Creëert** de hoogste prioriteit stijlregel voor dit specifieke element

Voeg vervolgens deze regel toe aan je `style.css`-bestand:

```css
h1 {
  color: blue;
}
```

**In het bovenstaande hebben we:**
- **Gedefinieerd** een CSS-regel die alle `<h1>`-elementen target
- **Ingesteld** dat de tekstkleur blauw is met behulp van een extern stylesheet
- **Gecreëerd** een regel met lagere prioriteit in vergelijking met inline stijlen

✅ **Kennischeck**: Welke kleur wordt weergegeven in je webapp? Waarom wint die kleur? Kun je scenario's bedenken waarin je stijlen zou willen overschrijven?

> 💡 **CSS-prioriteitsvolgorde (hoogste naar laagste):**
> 1. **Inline stijlen** (style-attribuut)
> 2. **IDs** (#myId)
> 3. **Klassen** (.myClass) en attributen
> 4. **Elementselectors** (h1, div, p)
> 5. **Standaardinstellingen van de browser**

## CSS-overerving in actie

CSS-overerving werkt als genetica - elementen erven bepaalde eigenschappen van hun ouder-elementen. Als je de lettertypefamilie instelt op het body-element, gebruikt alle tekst binnenin automatisch hetzelfde lettertype. Het is vergelijkbaar met hoe de kenmerkende kaaklijn van de Habsburg-familie generaties lang verscheen zonder dat dit specifiek voor elk individu werd bepaald.

Niet alles wordt echter geërfd. Tekststijlen zoals lettertypen en kleuren worden wel geërfd, maar layout-eigenschappen zoals marges en randen niet. Net zoals kinderen fysieke kenmerken kunnen erven, maar niet de modekeuzes van hun ouders.

### Observeren van lettertype-overerving

Laten we overerving in actie zien door een lettertypefamilie in te stellen op het `<body>`-element:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Wat hier gebeurt:**
- **Stelt** de lettertypefamilie in voor de hele pagina door het `<body>`-element te targeten
- **Gebruikt** een lettertypestapel met alternatieve opties voor betere browsercompatibiliteit
- **Past** moderne systeemlettertypen toe die er goed uitzien op verschillende besturingssystemen
- **Zorgt ervoor** dat alle kindelementen dit lettertype overnemen, tenzij specifiek overschreven

Open de ontwikkelaarstools van je browser (F12), ga naar het tabblad Elementen en inspecteer je `<h1>`-element. Je zult zien dat het de lettertypefamilie van de body overneemt:

![geërfd lettertype](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.nl.png)

✅ **Experimenteren**: Probeer andere overerfbare eigenschappen in te stellen op de `<body>` zoals `color`, `line-height` of `text-align`. Wat gebeurt er met je kop en andere elementen?

> 📝 **Overerfbare eigenschappen zijn onder andere**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Niet-overerfbare eigenschappen zijn onder andere**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Beheersen van CSS-selectors

CSS-selectors zijn jouw manier om specifieke elementen te targeten voor styling. Ze werken als het geven van precieze aanwijzingen - in plaats van te zeggen "het huis", kun je zeggen "het blauwe huis met de rode deur aan de Maple Street".

CSS biedt verschillende manieren om specifiek te zijn, en het kiezen van de juiste selector is als het kiezen van het juiste gereedschap voor de taak. Soms moet je alle deuren in de buurt stylen, en soms slechts één specifieke deur.

### Elementselectors (Tags)

Elementselectors targeten HTML-elementen op basis van hun tagnaam. Ze zijn perfect om basisstijlen in te stellen die breed van toepassing zijn op je pagina:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Begrijpen van deze stijlen:**
- **Stelt** consistente typografie in voor de hele pagina met de `body`-selector
- **Verwijdert** standaardmarges en -opvulling van de browser voor betere controle
- **Stijlt** alle koppen met kleur, uitlijning en spatiëring
- **Gebruikt** `rem`-eenheden voor schaalbare, toegankelijke lettergrootte

Hoewel elementselectors goed werken voor algemene styling, heb je meer specifieke selectors nodig om individuele componenten zoals de planten in je terrarium te stylen.

### ID-selectors voor unieke elementen

ID-selectors gebruiken het `#`-symbool en targeten elementen met specifieke `id`-attributen. Omdat IDs uniek moeten zijn op een pagina, zijn ze perfect voor het stylen van individuele, speciale elementen zoals onze linker- en rechterplantcontainers.

Laten we de styling maken voor de zijcontainers van ons terrarium waar de planten zullen staan:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Wat deze code doet:**
- **Positioneert** containers aan de uiterste linker- en rechterrand met behulp van `absolute` positionering
- **Gebruikt** `vh` (viewport height) eenheden voor een responsieve hoogte die zich aanpast aan de schermgrootte
- **Past** `box-sizing: border-box` toe zodat de opvulling wordt opgenomen in de totale breedte
- **Verwijdert** onnodige `px`-eenheden van nulwaarden voor een schonere code
- **Stelt** een subtiele achtergrondkleur in die aangenamer is voor de ogen dan fel grijs

✅ **Codekwaliteit-uitdaging**: Merk op hoe deze CSS het DRY-principe (Don't Repeat Yourself) schendt. Kun je het herschrijven met zowel een ID als een klasse?

**Verbeterde aanpak:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Klasseselectors voor herbruikbare stijlen

Klasseselectors gebruiken het `.`-symbool en zijn perfect wanneer je dezelfde stijlen op meerdere elementen wilt toepassen. In tegenstelling tot IDs kunnen klassen herhaaldelijk worden gebruikt in je HTML, waardoor ze ideaal zijn voor consistente stylingpatronen.

In ons terrarium heeft elke plant vergelijkbare styling nodig, maar ook individuele positionering. We gebruiken een combinatie van klassen voor gedeelde stijlen en IDs voor unieke positionering.

**Hier is de HTML-structuur voor elke plant:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.nl.png" />
</div>
```

**Belangrijke elementen uitgelegd:**
- **Gebruikt** `class="plant-holder"` voor consistente containerstyling voor alle planten
- **Past** `class="plant"` toe voor gedeelde afbeeldingsstyling en gedrag
- **Bevat** unieke `id="plant1"` voor individuele positionering en JavaScript-interactie
- **Biedt** beschrijvende alt-tekst voor toegankelijkheid voor schermlezers

Voeg nu deze stijlen toe aan je `style.css`-bestand:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Uitleg van deze stijlen:**
- **Creëert** relatieve positionering voor de plantcontainer om een positioneringscontext te creëren
- **Stelt** elke plantcontainer in op 13% hoogte, zodat alle planten verticaal passen zonder te scrollen
- **Verschuift** containers iets naar links om planten beter te centreren binnen hun containers
- **Laat** planten responsief schalen met `max-width` en `max-height` eigenschappen
- **Gebruikt** `z-index` om planten boven andere elementen in het terrarium te plaatsen
- **Voegt** een subtiel hover-effect toe met CSS-transities voor betere gebruikersinteractie

✅ **Kritisch nadenken**: Waarom hebben we zowel `.plant-holder` als `.plant` selectors nodig? Wat zou er gebeuren als we proberen slechts één te gebruiken?

> 💡 **Ontwerppatroon**: De container (`.plant-holder`) beheert layout en positionering, terwijl de inhoud (`.plant`) het uiterlijk en de schaal regelt. Deze scheiding maakt de code beter onderhoudbaar en flexibeler.

## Begrijpen van CSS-positionering

CSS-positionering is als het zijn van de toneelregisseur van een voorstelling - je bepaalt waar elke acteur staat en hoe ze zich over het podium bewegen. Sommige acteurs volgen de standaardformatie, terwijl anderen specifieke positionering nodig hebben voor dramatisch effect.

Zodra je positionering begrijpt, worden veel layout-uitdagingen beheersbaar. Heb je een navigatiebalk nodig die bovenaan blijft terwijl gebruikers scrollen? Positionering regelt dat. Wil je een tooltip die op een specifieke locatie verschijnt? Dat is ook positionering.

### De vijf positioneringswaarden

| Positioneringswaarde | Gedrag | Gebruikssituatie |
|----------------------|--------|------------------|
| `static` | Standaardflow, negeert top/left/right/bottom | Normale documentlayout |
| `relative` | Gepositioneerd ten opzichte van zijn normale positie | Kleine aanpassingen, creëren van positioneringscontext |
| `absolute` | Gepositioneerd ten opzichte van de dichtstbijzijnde gepositioneerde voorouder | Precieze plaatsing, overlays |
| `fixed` | Gepositioneerd ten opzichte van de viewport | Navigatiebalken, zwevende elementen |
| `sticky` | Wisselt tussen relative en fixed afhankelijk van scrollen | Koppen die blijven plakken bij scrollen |

### Positionering in ons terrarium

Ons terrarium gebruikt een strategische combinatie van positioneringstypen om de gewenste layout te creëren:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Begrijpen van de positioneringsstrategie:**
- **Absolute containers** worden verwijderd uit de normale documentflow en vastgezet aan de randen van het scherm
- **Relatieve plantcontainers** creëren een positioneringscontext terwijl ze in de documentflow blijven
- **Absolute planten** kunnen precies worden gepositioneerd binnen hun relatieve containers
- **Deze combinatie** zorgt ervoor dat planten verticaal gestapeld worden terwijl ze individueel positioneerbaar zijn

> 🎯 **Waarom dit belangrijk is**: De `plant`-elementen hebben absolute positionering nodig om in de volgende les sleepbaar te worden. Absolute positionering verwijdert ze uit de normale layoutflow, waardoor sleep- en neerzetinteracties mogelijk worden.

✅ **Experimenteren**: Probeer de positioneringswaarden te wijzigen en observeer de resultaten:
- Wat gebeurt er als je `.container` verandert van `absolute` naar `relative`?
- Hoe verandert de layout als `.plant-holder` `absolute` gebruikt in plaats van `relative`?
- Wat gebeurt er als je `.plant` naar relatieve positionering schakelt?

## Het terrarium bouwen met CSS

Nu gaan we een glazen pot bouwen met alleen CSS - geen afbeeldingen of grafische software nodig.

Realistisch ogend glas, schaduwen en diepte-effecten creëren met positionering en transparantie laat de visuele mogelijkheden van CSS zien. Deze techniek weerspiegelt hoe architecten in de Bauhaus-beweging eenvoudige geometrische vormen gebruikten om complexe, mooie structuren te maken. Zodra je deze principes begrijpt, herken je de CSS-technieken achter veel webdesigns.

### De componenten van de glazen pot creëren
Laten we de terrarium pot stap voor stap opbouwen. Elk onderdeel maakt gebruik van absolute positionering en procentuele afmetingen voor een responsief ontwerp:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Begrijpen van de terrariumconstructie:**
- **Maakt gebruik van** procentuele afmetingen voor responsieve schaalbaarheid op alle schermformaten
- **Positioneert** elementen absoluut om ze precies te stapelen en uit te lijnen
- **Past** verschillende waarden voor transparantie toe om het glaseffect te creëren
- **Implementeert** `z-index` lagen zodat planten binnen de pot verschijnen
- **Voegt** subtiele schaduwen en verfijnde afgeronde hoeken toe voor een realistischer uiterlijk

### Responsief ontwerp met percentages

Let op hoe alle afmetingen percentages gebruiken in plaats van vaste pixelwaarden:

**Waarom dit belangrijk is:**
- **Zorgt ervoor** dat het terrarium proportioneel schaalt op elk schermformaat
- **Behoudt** de visuele verhoudingen tussen de onderdelen van de pot
- **Biedt** een consistente ervaring van mobiele telefoons tot grote desktopmonitoren
- **Maakt** het ontwerp flexibel zonder de visuele lay-out te breken

### CSS-eenheden in actie

We gebruiken `rem` eenheden voor afgeronde hoeken, die schalen ten opzichte van de root lettergrootte. Dit zorgt voor toegankelijkere ontwerpen die rekening houden met de voorkeuren van de gebruiker. Lees meer over [CSS relatieve eenheden](https://www.w3.org/TR/css-values-3/#font-relative-lengths) in de officiële specificatie.

✅ **Visuele experimenten**: Probeer deze waarden aan te passen en observeer de effecten:
- Verander de pottransparantie van 0.5 naar 0.8 – hoe beïnvloedt dit het uiterlijk van het glas?
- Pas de kleur van de aarde aan van `#3a241d` naar `#8B4513` – wat is het visuele effect hiervan?
- Wijzig de `z-index` van de aarde naar 2 – wat gebeurt er met de lagen?

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een CSS-animatie die de planten in het terrarium zachtjes heen en weer laat wiegen, alsof ze door een natuurlijke bries worden bewogen. Dit helpt je om CSS-animaties, transformaties en keyframes te oefenen en tegelijkertijd de visuele aantrekkingskracht van je terrarium te vergroten.

**Opdracht:** Voeg CSS keyframe-animaties toe om de planten in het terrarium zachtjes heen en weer te laten wiegen. Maak een wiegende animatie die elke plant lichtjes (2-3 graden) naar links en rechts roteert met een duur van 3-4 seconden, en pas deze toe op de `.plant` klasse. Zorg ervoor dat de animatie oneindig herhaalt en een easing-functie heeft voor een natuurlijke beweging.

Lees meer over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## 🚀 Uitdaging: Glans op glas toevoegen

Klaar om je terrarium te verbeteren met realistische glans op glas? Deze techniek voegt diepte en realisme toe aan het ontwerp.

Je gaat subtiele highlights creëren die simuleren hoe licht reflecteert op glasoppervlakken. Deze aanpak lijkt op hoe Renaissance-schilders zoals Jan van Eyck licht en reflectie gebruikten om geschilderd glas driedimensionaal te laten lijken. Dit is wat je wilt bereiken:

![afgewerkt terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.nl.png)

**Je uitdaging:**
- **Creëer** subtiele witte of lichtgekleurde ovale vormen voor de glans op het glas
- **Positioneer** ze strategisch aan de linkerkant van de pot
- **Pas** geschikte transparantie en vervagingseffecten toe voor een realistische lichtreflectie
- **Gebruik** `border-radius` om organische, bubbelachtige vormen te maken
- **Experimenteer** met verlopen of schaduwen voor verbeterd realisme

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/18)

## Breid je CSS-kennis uit

CSS kan in het begin complex lijken, maar het begrijpen van deze kernconcepten biedt een solide basis voor meer geavanceerde technieken.

**Je volgende CSS-leergebieden:**
- **Flexbox** - vereenvoudigt uitlijning en verdeling van elementen
- **CSS Grid** - biedt krachtige tools voor het maken van complexe lay-outs
- **CSS-variabelen** - vermindert herhaling en verbetert onderhoudbaarheid
- **Responsief ontwerp** - zorgt ervoor dat websites goed werken op verschillende schermformaten

### Interactieve leermiddelen

Oefen deze concepten met deze leuke, interactieve spellen:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Beheers Flexbox door leuke uitdagingen
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Leer CSS Grid door virtuele wortels te kweken
- 🎯 [CSS Battle](https://cssbattle.dev/) - Test je CSS-vaardigheden met code-uitdagingen

### Aanvullend leren

Voor uitgebreide CSS-basiskennis, voltooi deze Microsoft Learn-module: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Opdracht

[CSS Refactoring](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.