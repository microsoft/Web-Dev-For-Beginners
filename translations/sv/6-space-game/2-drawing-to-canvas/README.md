<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T21:46:45+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 2: Rita hjälten och monster på canvasen

Canvas API är en av webbens mest kraftfulla funktioner för att skapa dynamisk, interaktiv grafik direkt i din webbläsare. I denna lektion kommer vi att förvandla det tomma HTML-`<canvas>`-elementet till en spelvärld fylld med hjältar och monster. Tänk på canvasen som din digitala ritbräda där kod blir visuellt.

Vi bygger vidare på det du lärde dig i föregående lektion, och nu dyker vi in i de visuella aspekterna. Du kommer att lära dig hur man laddar och visar spelgrafik, positionerar element exakt och skapar den visuella grunden för ditt rymdspel. Detta bygger bron mellan statiska webbsidor och dynamiska, interaktiva upplevelser.

I slutet av denna lektion kommer du att ha en komplett spelscen med ditt hjälteskepp korrekt placerat och fiendformationer redo för strid. Du kommer att förstå hur moderna spel renderar grafik i webbläsare och få färdigheter att skapa dina egna interaktiva visuella upplevelser. Låt oss utforska canvasgrafik och ge liv åt ditt rymdspel!

## Quiz före lektionen

[Quiz före lektionen](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvasen

Så vad är egentligen detta `<canvas>`-element? Det är HTML5:s lösning för att skapa dynamisk grafik och animationer i webbläsare. Till skillnad från vanliga bilder eller videor som är statiska, ger canvasen dig kontroll på pixelnivå över allt som visas på skärmen. Detta gör den perfekt för spel, datavisualiseringar och interaktiv konst. Tänk på det som en programmerbar rityta där JavaScript blir din pensel.

Som standard ser ett canvas-element ut som en tom, transparent rektangel på din sida. Men det är där potentialen ligger! Dess verkliga kraft framträder när du använder JavaScript för att rita former, ladda bilder, skapa animationer och få saker att reagera på användarinteraktioner. Det liknar hur de tidiga datagrafikpionjärerna på Bell Labs på 1960-talet var tvungna att programmera varje pixel för att skapa de första digitala animationerna.

✅ Läs [mer om Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) på MDN.

Så här deklareras det vanligtvis, som en del av sidans body:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Vad denna kod gör:**
- **Sätter** attributet `id` så att du kan referera till detta specifika canvas-element i JavaScript
- **Definierar** bredden i pixlar för att kontrollera canvasens horisontella storlek
- **Fastställer** höjden i pixlar för att bestämma canvasens vertikala dimensioner

## Rita enkel geometri

Nu när du vet vad canvas-elementet är, låt oss utforska hur man faktiskt ritar på det! Canvasen använder ett koordinatsystem som kanske känns bekant från matematiklektionerna, men det finns en viktig twist som är specifik för datagrafik.

Canvasen använder kartesiska koordinater med en x-axel (horisontell) och en y-axel (vertikal) för att positionera allt du ritar. Men här är den viktiga skillnaden: till skillnad från koordinatsystemet från matematikklassen börjar origo `(0,0)` i det övre vänstra hörnet, med x-värden som ökar när du rör dig åt höger och y-värden som ökar när du rör dig nedåt. Detta tillvägagångssätt går tillbaka till tidiga datorskärmar där elektronstrålar skannade från topp till botten, vilket gjorde det övre vänstra hörnet till den naturliga startpunkten.

![canvasens rutnät](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sv.png)
> Bild från [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

För att rita på canvas-elementet följer du samma trestegsprocess som utgör grunden för all canvasgrafik. När du har gjort detta några gånger blir det en vana:

1. **Hämta en referens** till ditt canvas-element från DOM (precis som med andra HTML-element)
2. **Hämta 2D-renderingskontexten** – detta ger alla ritmetoder
3. **Börja rita!** Använd kontextens inbyggda metoder för att skapa din grafik

Så här ser det ut i kod:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Låt oss bryta ner detta steg för steg:**
- Vi **hämtar** vårt canvas-element med dess ID och lagrar det i en variabel
- Vi **hämtar** 2D-renderingskontexten – detta är vår verktygslåda full av ritmetoder
- Vi **berättar** för canvasen att vi vill fylla saker med rött med egenskapen `fillStyle`
- Vi **ritar** en rektangel som börjar i det övre vänstra hörnet (0,0) som är 200 pixlar bred och hög

✅ Canvas API fokuserar mest på 2D-former, men du kan också rita 3D-element på en webbplats; för detta kan du använda [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Du kan rita alla möjliga saker med Canvas API, som:

- **Geometriska former**, vi har redan visat hur man ritar en rektangel, men det finns mycket mer du kan rita.
- **Text**, du kan rita text med valfritt typsnitt och färg.
- **Bilder**, du kan rita en bild baserad på en bildfil som en .jpg eller .png till exempel.

✅ Prova! Du vet hur man ritar en rektangel, kan du rita en cirkel på en sida? Ta en titt på några intressanta canvasritningar på CodePen. Här är ett [särskilt imponerande exempel](https://codepen.io/dissimulate/pen/KrAwx).

## Ladda och rita en bildfil

Att rita grundläggande former är användbart för att komma igång, men de flesta spel behöver riktiga bilder! Sprites, bakgrunder och texturer är det som ger spel deras visuella attraktionskraft. Att ladda och visa bilder på canvasen fungerar annorlunda än att rita geometriska former, men det är enkelt när du väl förstår processen.

Vi behöver skapa ett `Image`-objekt, ladda vår bildfil (detta sker asynkront, vilket betyder "i bakgrunden"), och sedan rita den på canvasen när den är redo. Detta tillvägagångssätt säkerställer att dina bilder visas korrekt utan att blockera din applikation medan de laddas.

### Grundläggande bildladdning

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Vad som händer i denna kod:**
- Vi **skapar** ett helt nytt Image-objekt för att hålla vår sprite eller textur
- Vi **berättar** vilken bildfil som ska laddas genom att ange källvägen
- Vi **lyssnar** på load-händelsen så vi vet exakt när bilden är redo att användas

### Ett bättre sätt att ladda bilder

Här är ett mer robust sätt att hantera bildladdning som professionella utvecklare ofta använder. Vi kommer att kapsla in bildladdningen i en Promise-baserad funktion – detta tillvägagångssätt, populärt när JavaScript Promises blev standard i ES6, gör din kod mer organiserad och hanterar fel smidigt:

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

**Vad vi har gjort här:**
- **Kapslat in** all bildladdningslogik i en Promise så vi kan hantera det bättre
- **Lagt till** felhantering som faktiskt berättar när något går fel
- **Använt** modern async/await-syntax eftersom det är så mycket lättare att läsa
- **Inkluderat** try/catch-block för att smidigt hantera eventuella laddningsproblem

När dina bilder är laddade är det faktiskt ganska enkelt att rita dem på canvasen:

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

**Låt oss gå igenom detta steg för steg:**
- Vi **laddar** både våra hjälte- och monsterbilder i bakgrunden med await
- Vi **hämtar** vårt canvas-element och får den 2D-renderingskontext vi behöver
- Vi **positionerar** hjältebilden precis i mitten med lite snabb koordinatmatematik
- Vi **placerar** monsterbilden i det övre vänstra hörnet för att starta vår fiendformation
- Vi **fångar** eventuella fel som kan uppstå under laddning eller rendering

## Nu är det dags att börja bygga ditt spel

Nu ska vi sätta ihop allt för att skapa den visuella grunden för ditt rymdspel. Du har en solid förståelse för canvasens grunder och tekniker för bildladdning, så denna praktiska sektion kommer att guida dig genom att bygga en komplett spelskärm med korrekt placerade sprites.

### Vad du ska bygga

Du ska bygga en webbsida med ett canvas-element. Det ska rendera en svart skärm `1024*768`. Vi har tillhandahållit två bilder:

- Hjälteskepp

   ![Hjälteskepp](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sv.png)

- 5*5 monster

   ![Monsterskepp](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sv.png)

### Rekommenderade steg för att börja utvecklingen

Leta upp startfilerna som har skapats åt dig i undermappen `your-work`. Din projektstruktur bör innehålla:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Vad du arbetar med:**
- **Spelsprites** finns i mappen `assets/` så att allt hålls organiserat
- **Din huvudsakliga HTML-fil** ställer in canvas-elementet och förbereder allt
- **En JavaScript-fil** där du skriver all din spelrenderingsmagi
- **En package.json** som sätter upp en utvecklingsserver så att du kan testa lokalt

Öppna denna mapp i Visual Studio Code för att börja utvecklingen. Du behöver en lokal utvecklingsmiljö med Visual Studio Code, NPM och Node.js installerat. Om du inte har `npm` installerat på din dator, [så här installerar du det](https://www.npmjs.com/get-npm).

Starta din utvecklingsserver genom att navigera till mappen `your-work`:

```bash
cd your-work
npm start
```

**Detta kommando gör några riktigt coola saker:**
- **Startar** en lokal server på `http://localhost:5000` så att du kan testa ditt spel
- **Serverar** alla dina filer korrekt så att din webbläsare kan ladda dem
- **Övervakar** dina filer för ändringar så att du kan utveckla smidigt
- **Ger dig** en professionell utvecklingsmiljö för att testa allt

> 💡 **Obs**: Din webbläsare kommer att visa en tom sida initialt – det är förväntat! När du lägger till kod, uppdatera din webbläsare för att se dina ändringar. Denna iterativa utvecklingsmetod liknar hur NASA byggde Apollo-styrdatorn – genom att testa varje komponent innan den integrerades i det större systemet.

### Lägg till kod

Lägg till den nödvändiga koden i `your-work/app.js` för att slutföra följande uppgifter:

1. **Rita en canvas med svart bakgrund**
   > 💡 **Så här gör du**: Hitta TODO i `/app.js` och lägg till bara två rader. Ställ in `ctx.fillStyle` till svart, använd sedan `ctx.fillRect()` som börjar vid (0,0) med dina canvasdimensioner. Enkelt!

2. **Ladda speltexturer**
   > 💡 **Så här gör du**: Använd `await loadAsset()` för att ladda dina spelare- och fiendbilder. Spara dem i variabler så att du kan använda dem senare. Kom ihåg – de kommer inte att visas förrän du faktiskt ritar dem!

3. **Rita hjälteskeppet i mitten längst ner**
   > 💡 **Så här gör du**: Använd `ctx.drawImage()` för att positionera din hjälte. För x-koordinaten, prova `canvas.width / 2 - 45` för att centrera det, och för y-koordinaten använd `canvas.height - canvas.height / 4` för att placera det i det nedre området.

4. **Rita en 5×5 formation av fiendeskepp**
   > 💡 **Så här gör du**: Hitta funktionen `createEnemies` och sätt upp en nästlad loop. Du kommer att behöva göra lite matematik för avstånd och positionering, men oroa dig inte – jag visar dig exakt hur!

Först, fastställ konstanter för korrekt layout av fiendformationen:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Låt oss bryta ner vad dessa konstanter gör:**
- Vi **sätter** 5 fiender per rad och kolumn (ett snyggt 5×5 rutnät)
- Vi **definierar** hur mycket utrymme som ska finnas mellan fiender så att de inte ser trånga ut
- Vi **beräknar** hur bred vår hela formation kommer att vara
- Vi **räknar ut** var vi ska börja och sluta så att formationen ser centrerad ut

Sedan skapar vi nästlade loopar för att rita fiendformationen:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Vad denna nästlade loop gör:**
- Den yttre loopen **rör sig** från vänster till höger över vår formation
- Den inre loopen **går** från topp till botten för att skapa snygga rader
- Vi **ritar** varje fiendesprite vid de exakta x,y-koordinater vi har beräknat
- Allt hålls **jämnt fördelat** så att det ser professionellt och organiserat ut

## Resultat

Det färdiga resultatet bör se ut så här:

![Svart skärm med en hjälte och 5*5 monster](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sv.png)

## Lösning

Försök att lösa det själv först, men om du fastnar, ta en titt på en [lösning](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra din rymdspelscanvas genom att lägga till visuella effekter och interaktiva element med hjälp av Canvas API-teknikerna du har lärt dig.

**Uppmaning:** Skapa en ny fil som heter `enhanced-canvas.html` med en canvas som visar animerade stjärnor i bakgrunden, en pulserande hälsobar för hjälteskeppet och fiendeskepp som långsamt rör sig nedåt. Inkludera JavaScript-kod som ritar blinkande stjärnor med slumpmässiga positioner och opacitet, implementerar en hälsobar som ändrar färg baserat på hälsotillstånd (grön > gul > röd), och animerar fiendeskepp att röra sig nedåt på skärmen i olika hastigheter.

Läs mer om [agent-läge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning

Du har lärt dig att rita med det 2D-fokuserade Canvas API; ta en titt på [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), och försök att rita ett 3D-objekt.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/32)

## Granskning & Självstudier

Lär dig mer om Canvas API genom att [läsa om det](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Uppgift

[Utforska Canvas API](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.