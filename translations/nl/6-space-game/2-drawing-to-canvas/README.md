<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T01:04:32+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 2: Teken Held en Monsters op Canvas

De Canvas API is een van de krachtigste functies in webontwikkeling om dynamische, interactieve graphics direct in je browser te maken. In deze les transformeren we het lege HTML `<canvas>`-element in een spelwereld gevuld met helden en monsters. Denk aan de canvas als je digitale tekenbord waar code visueel wordt.

We bouwen voort op wat je in de vorige les hebt geleerd en duiken nu in de visuele aspecten. Je leert hoe je spelafbeeldingen laadt en weergeeft, elementen precies positioneert en de visuele basis voor je ruimtespel creëert. Dit slaat een brug tussen statische webpagina's en dynamische, interactieve ervaringen.

Aan het einde van deze les heb je een complete spelscène met je heldenschip correct gepositioneerd en vijandelijke formaties klaar voor de strijd. Je begrijpt hoe moderne spellen graphics in browsers renderen en je krijgt vaardigheden om je eigen interactieve visuele ervaringen te creëren. Laten we de canvasgraphics verkennen en je ruimtespel tot leven brengen!

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/31)

## De Canvas

Wat is precies dat `<canvas>`-element? Het is de oplossing van HTML5 voor het maken van dynamische graphics en animaties in webbrowsers. In tegenstelling tot gewone afbeeldingen of video's die statisch zijn, geeft de canvas je controle op pixelniveau over alles wat op het scherm verschijnt. Dit maakt het perfect voor spellen, datavisualisaties en interactieve kunst. Zie het als een programmeerbaar tekenoppervlak waar JavaScript je penseel wordt.

Standaard ziet een canvas-element eruit als een lege, transparante rechthoek op je pagina. Maar daar ligt juist de potentie! De echte kracht komt naar voren wanneer je JavaScript gebruikt om vormen te tekenen, afbeeldingen te laden, animaties te maken en dingen te laten reageren op gebruikersinteracties. Het is vergelijkbaar met hoe de pioniers van computergraphics bij Bell Labs in de jaren zestig elke pixel moesten programmeren om de eerste digitale animaties te maken.

✅ Lees [meer over de Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) op MDN.

Hier is hoe het meestal wordt gedeclareerd, als onderdeel van de body van de pagina:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Wat deze code doet:**
- **Stelt** het `id`-attribuut in zodat je dit specifieke canvas-element kunt refereren in JavaScript
- **Definieert** de `breedte` in pixels om de horizontale grootte van de canvas te bepalen
- **Stelt** de `hoogte` in pixels in om de verticale afmetingen van de canvas te bepalen

## Eenvoudige geometrie tekenen

Nu je weet wat het canvas-element is, laten we eens kijken hoe je er daadwerkelijk op kunt tekenen! De canvas gebruikt een coördinatensysteem dat je misschien herkent van wiskundeles, maar er is één belangrijk verschil dat specifiek is voor computergraphics.

De canvas gebruikt een cartesiaans coördinatensysteem met een x-as (horizontaal) en een y-as (verticaal) om alles wat je tekent te positioneren. Maar hier is het belangrijkste verschil: in tegenstelling tot het coördinatensysteem van wiskundeles begint het oorsprongspunt `(0,0)` in de linkerbovenhoek, waarbij de x-waarden toenemen als je naar rechts beweegt en de y-waarden toenemen als je naar beneden beweegt. Deze aanpak stamt uit de vroege computerschermen waar elektronenstralen van boven naar beneden scanden, waardoor de linkerbovenhoek het natuurlijke startpunt werd.

![het raster van de canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.nl.png)
> Afbeelding van [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Om op het canvas-element te tekenen, volg je hetzelfde driestappenproces dat de basis vormt van alle canvasgraphics. Zodra je dit een paar keer hebt gedaan, wordt het een tweede natuur:

1. **Verkrijg een referentie** naar je Canvas-element vanuit de DOM (net als elk ander HTML-element)
2. **Verkrijg de 2D-rendercontext** – dit biedt alle tekenmethoden
3. **Begin met tekenen!** Gebruik de ingebouwde methoden van de context om je graphics te maken

Hier is hoe dit eruitziet in code:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Laten we dit stap voor stap uitleggen:**
- We **pakken** ons canvas-element met behulp van zijn ID en slaan het op in een variabele
- We **verkrijgen** de 2D-rendercontext – dit is onze toolkit vol tekenmethoden
- We **vertellen** de canvas dat we dingen willen vullen met rood met behulp van de eigenschap `fillStyle`
- We **tekenen** een rechthoek beginnend in de linkerbovenhoek (0,0) die 200 pixels breed en hoog is

✅ De Canvas API richt zich voornamelijk op 2D-vormen, maar je kunt ook 3D-elementen tekenen op een website; hiervoor kun je de [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) gebruiken.

Je kunt allerlei dingen tekenen met de Canvas API, zoals:

- **Geometrische vormen**, we hebben al laten zien hoe je een rechthoek tekent, maar er is nog veel meer dat je kunt tekenen.
- **Tekst**, je kunt tekst tekenen met elk gewenst lettertype en kleur.
- **Afbeeldingen**, je kunt een afbeelding tekenen op basis van een afbeeldingsbestand zoals een .jpg of .png.

✅ Probeer het! Je weet hoe je een rechthoek kunt tekenen, kun je een cirkel op een pagina tekenen? Bekijk enkele interessante Canvas-tekeningen op CodePen. Hier is een [bijzonder indrukwekkend voorbeeld](https://codepen.io/dissimulate/pen/KrAwx).

## Laad en teken een afbeeldingsbestand

Eenvoudige vormen tekenen is handig om te beginnen, maar de meeste spellen hebben echte afbeeldingen nodig! Sprites, achtergronden en texturen geven spellen hun visuele aantrekkingskracht. Het laden en weergeven van afbeeldingen op de canvas werkt anders dan het tekenen van geometrische vormen, maar het is eenvoudig zodra je het proces begrijpt.

We moeten een `Image`-object maken, ons afbeeldingsbestand laden (dit gebeurt asynchroon, wat betekent "op de achtergrond"), en het vervolgens op de canvas tekenen zodra het klaar is. Deze aanpak zorgt ervoor dat je afbeeldingen correct worden weergegeven zonder je applicatie te blokkeren tijdens het laden.

### Basisafbeelding laden

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Wat er gebeurt in deze code:**
- We **maken** een gloednieuw Image-object om onze sprite of textuur te bevatten
- We **vertellen** welk afbeeldingsbestand moet worden geladen door het bronpad in te stellen
- We **luisteren** naar het laadgebeurtenis zodat we precies weten wanneer de afbeelding klaar is om te gebruiken

### Een betere manier om afbeeldingen te laden

Hier is een robuustere manier om afbeeldingen te laden die vaak door professionele ontwikkelaars wordt gebruikt. We verpakken het laden van afbeeldingen in een Promise-gebaseerde functie – deze aanpak, populair geworden toen JavaScript Promises standaard werden in ES6, maakt je code overzichtelijker en behandelt fouten op een elegante manier:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Wat we hier hebben gedaan:**
- **Verpakt** alle logica voor het laden van afbeeldingen in een Promise zodat we het beter kunnen beheren
- **Foutafhandeling toegevoegd** die ons daadwerkelijk vertelt wanneer er iets misgaat
- **Moderne async/await-syntaxis gebruikt** omdat het veel overzichtelijker is
- **Try/catch-blokken toegevoegd** om eventuele problemen bij het laden op een nette manier af te handelen

Zodra je afbeeldingen zijn geladen, is het eigenlijk vrij eenvoudig om ze op de canvas te tekenen:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Laten we dit stap voor stap bekijken:**
- We **laden** zowel onze helden- als monsterafbeeldingen op de achtergrond met behulp van await
- We **pakken** ons canvas-element en verkrijgen die 2D-rendercontext die we nodig hebben
- We **positioneren** de heldenafbeelding precies in het midden met wat snelle coördinatenberekeningen
- We **plaatsen** de monsterafbeelding in de linkerbovenhoek om onze vijandelijke formatie te starten
- We **vangen** eventuele fouten die kunnen optreden tijdens het laden of renderen

## Tijd om je spel te bouwen

Nu gaan we alles samenvoegen om de visuele basis van je ruimtespel te creëren. Je hebt een goed begrip van de basisprincipes van canvas en technieken voor het laden van afbeeldingen, dus dit praktische gedeelte zal je begeleiden bij het bouwen van een complete spelscène met correct gepositioneerde sprites.

### Wat te bouwen

Je gaat een webpagina maken met een Canvas-element. Het moet een zwart scherm van `1024*768` weergeven. We hebben je twee afbeeldingen gegeven:

- Heldenschip

   ![Heldenschip](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.nl.png)

- 5*5 monsters

   ![Monsterschip](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.nl.png)

### Aanbevolen stappen om te beginnen met ontwikkelen

Vind de startbestanden die voor je zijn gemaakt in de submap `your-work`. De structuur van je project zou het volgende moeten bevatten:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Wat je hebt:**
- **Spelsprites** staan in de map `assets/` zodat alles georganiseerd blijft
- **Je hoofd-HTML-bestand** zet het canvas-element op en maakt alles klaar
- **Een JavaScript-bestand** waarin je al je magische spelrendering schrijft
- **Een package.json** die een ontwikkelserver instelt zodat je lokaal kunt testen

Open deze map in Visual Studio Code om te beginnen met ontwikkelen. Je hebt een lokale ontwikkelomgeving nodig met Visual Studio Code, NPM en Node.js geïnstalleerd. Als je `npm` nog niet hebt ingesteld op je computer, [hier is hoe je het installeert](https://www.npmjs.com/get-npm).

Start je ontwikkelserver door naar de map `your-work` te navigeren:

```bash
cd your-work
npm start
```

**Dit commando doet een aantal coole dingen:**
- **Start** een lokale server op `http://localhost:5000` zodat je je spel kunt testen
- **Serveert** al je bestanden correct zodat je browser ze goed kan laden
- **Houdt** je bestanden in de gaten voor wijzigingen zodat je soepel kunt ontwikkelen
- **Geeft je** een professionele ontwikkelomgeving om alles te testen

> 💡 **Opmerking**: Je browser zal aanvankelijk een lege pagina weergeven – dat is normaal! Terwijl je code toevoegt, kun je je browser verversen om je wijzigingen te zien. Deze iteratieve ontwikkelaanpak is vergelijkbaar met hoe NASA de Apollo-geleidingscomputer bouwde – elk onderdeel testen voordat het in het grotere systeem wordt geïntegreerd.

### Code toevoegen

Voeg de vereiste code toe aan `your-work/app.js` om de volgende taken te voltooien:

1. **Teken een canvas met zwarte achtergrond**
   > 💡 **Hoe**: Zoek de TODO in `/app.js` en voeg slechts twee regels toe. Stel `ctx.fillStyle` in op zwart en gebruik vervolgens `ctx.fillRect()` beginnend bij (0,0) met je canvasafmetingen. Simpel!

2. **Laad speltexturen**
   > 💡 **Hoe**: Gebruik `await loadAsset()` om je speler- en vijandafbeeldingen te laden. Sla ze op in variabelen zodat je ze later kunt gebruiken. Onthoud – ze verschijnen pas als je ze daadwerkelijk tekent!

3. **Teken het heldenschip in het midden-onder**
   > 💡 **Hoe**: Gebruik `ctx.drawImage()` om je held te positioneren. Voor de x-coördinaat kun je `canvas.width / 2 - 45` proberen om het te centreren, en voor de y-coördinaat gebruik je `canvas.height - canvas.height / 4` om het in het onderste gebied te plaatsen.

4. **Teken een 5×5 formatie van vijandelijke schepen**
   > 💡 **Hoe**: Zoek de functie `createEnemies` en stel een geneste lus in. Je moet wat wiskunde doen voor de afstand en positionering, maar maak je geen zorgen – ik laat je precies zien hoe!

Eerst stel je constanten in voor een juiste opmaak van de vijandelijke formatie:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Wat deze constanten doen:**
- We **stellen** 5 vijanden per rij en kolom in (een mooie 5×5 raster)
- We **definiëren** hoeveel ruimte we tussen vijanden plaatsen zodat ze niet te dicht op elkaar staan
- We **berekenen** hoe breed onze hele formatie zal zijn
- We **bepalen** waar te beginnen en te eindigen zodat de formatie gecentreerd lijkt

Vervolgens maak je geneste lussen om de vijandelijke formatie te tekenen:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Wat deze geneste lus doet:**
- De buitenste lus **beweegt** van links naar rechts over onze formatie
- De binnenste lus **gaat** van boven naar beneden om nette rijen te maken
- We **tekenen** elke vijandensprite op de exacte x,y-coördinaten die we hebben berekend
- Alles blijft **evenredig verdeeld** zodat het er professioneel en georganiseerd uitziet

## Resultaat

Het eindresultaat zou er zo uit moeten zien:

![Zwart scherm met een held en 5*5 monsters](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.nl.png)

## Oplossing

Probeer het eerst zelf op te lossen, maar als je vastloopt, bekijk dan een [oplossing](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter je ruimtespelcanvas door visuele effecten en interactieve elementen toe te voegen met behulp van de Canvas API-technieken die je hebt geleerd.

**Prompt:** Maak een nieuw bestand genaamd `enhanced-canvas.html` met een canvas dat geanimeerde sterren op de achtergrond weergeeft, een pulserende gezondheidsbalk voor het heldenschip, en vijandelijke schepen die langzaam naar beneden bewegen. Voeg JavaScript-code toe die twinkelende sterren tekent met willekeurige posities en opaciteit, een gezondheidsbalk implementeert die van kleur verandert op basis van het gezondheidsniveau (groen > geel > rood), en de vijandelijke schepen animeert om met verschillende snelheden naar beneden te bewegen.

Lees meer over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## 🚀 Uitdaging

Je hebt geleerd over tekenen met de 2D-georiënteerde Canvas API; bekijk de [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) en probeer een 3D-object te tekenen.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/32)

## Review & Zelfstudie

Leer meer over de Canvas API door [erover te lezen](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Opdracht

[Speel met de Canvas API](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.