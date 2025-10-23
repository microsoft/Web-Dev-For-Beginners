<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T22:10:18+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 2: Tegn helte og monstre på lærredet

Canvas API er en af webudviklingens mest kraftfulde funktioner til at skabe dynamisk, interaktiv grafik direkte i din browser. I denne lektion forvandler vi det tomme HTML `<canvas>`-element til en spilverden fyldt med helte og monstre. Tænk på lærredet som din digitale tegneplade, hvor kode bliver til visuelle elementer.

Vi bygger videre på det, du lærte i den forrige lektion, og nu dykker vi ned i de visuelle aspekter. Du vil lære, hvordan man indlæser og viser spilfigurer, placerer elementer præcist og skaber det visuelle fundament for dit rumspil. Dette bygger bro mellem statiske websider og dynamiske, interaktive oplevelser.

Ved slutningen af denne lektion vil du have en komplet spillescene med dit helteskib korrekt placeret og fjendtlige formationer klar til kamp. Du vil forstå, hvordan moderne spil gengiver grafik i browsere og få færdigheder til at skabe dine egne interaktive visuelle oplevelser. Lad os udforske canvas-grafik og bringe dit rumspil til live!

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Så hvad er præcist dette `<canvas>`-element? Det er HTML5's løsning til at skabe dynamisk grafik og animationer i webbrowseren. I modsætning til almindelige billeder eller videoer, der er statiske, giver lærredet dig kontrol over hver pixel, der vises på skærmen. Dette gør det perfekt til spil, datavisualiseringer og interaktiv kunst. Tænk på det som en programmerbar tegneflade, hvor JavaScript bliver din pensel.

Som standard ser et canvas-element ud som et tomt, gennemsigtigt rektangel på din side. Men det er her, potentialet ligger! Dets virkelige kraft kommer frem, når du bruger JavaScript til at tegne figurer, indlæse billeder, skabe animationer og få ting til at reagere på brugerinteraktioner. Det minder om, hvordan de tidlige computer-grafikpionerer hos Bell Labs i 1960'erne måtte programmere hver pixel for at skabe de første digitale animationer.

✅ Læs [mere om Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) på MDN.

Her er, hvordan det typisk deklareres som en del af sidens body:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Her er, hvad denne kode gør:**
- **Sætter** `id`-attributten, så du kan referere til dette specifikke canvas-element i JavaScript
- **Definerer** bredden i pixels for at styre lærredets horisontale størrelse
- **Fastlægger** højden i pixels for at bestemme lærredets vertikale dimensioner

## Tegning af simpel geometri

Nu hvor du ved, hvad canvas-elementet er, lad os udforske, hvordan man faktisk tegner på det! Lærredet bruger et koordinatsystem, der måske føles bekendt fra matematikundervisningen, men der er en vigtig forskel, der er specifik for computer-grafik.

Lærredet bruger kartesiske koordinater med en x-akse (vandret) og en y-akse (lodret) til at placere alt, hvad du tegner. Men her er den afgørende forskel: I modsætning til koordinatsystemet fra matematikundervisningen starter oprindelsespunktet `(0,0)` i øverste venstre hjørne, hvor x-værdierne stiger, når du bevæger dig til højre, og y-værdierne stiger, når du bevæger dig nedad. Denne tilgang stammer fra tidlige computerskærme, hvor elektronstråler scannede fra top til bund, hvilket gjorde øverste venstre hjørne til det naturlige startpunkt.

![lærredets gitter](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.da.png)
> Billede fra [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

For at tegne på canvas-elementet følger du den samme tretrinsproces, der danner grundlaget for al canvas-grafik. Når du har gjort dette et par gange, bliver det en vane:

1. **Få en reference** til dit canvas-element fra DOM'en (ligesom ethvert andet HTML-element)
2. **Få 2D-renderingskonteksten** – dette giver alle tegnefunktionerne
3. **Begynd at tegne!** Brug kontekstens indbyggede metoder til at skabe din grafik

Her er, hvordan det ser ud i kode:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Lad os bryde dette ned trin for trin:**
- Vi **henter** vores canvas-element ved hjælp af dets ID og gemmer det i en variabel
- Vi **får** 2D-renderingskonteksten – dette er vores værktøjskasse fuld af tegnefunktioner
- Vi **fortæller** lærredet, at vi vil fylde ting med rød ved hjælp af `fillStyle`-egenskaben
- Vi **tegner** et rektangel, der starter i øverste venstre hjørne (0,0), som er 200 pixels bredt og højt

✅ Canvas API fokuserer mest på 2D-former, men du kan også tegne 3D-elementer på en hjemmeside; til dette kan du bruge [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Du kan tegne mange forskellige ting med Canvas API som:

- **Geometriske former**, vi har allerede vist, hvordan man tegner et rektangel, men der er meget mere, du kan tegne.
- **Tekst**, du kan tegne tekst med enhver skrifttype og farve, du ønsker.
- **Billeder**, du kan tegne et billede baseret på en billedfil som f.eks. en .jpg eller .png.

✅ Prøv det! Du ved, hvordan man tegner et rektangel, kan du tegne en cirkel på en side? Tag et kig på nogle interessante Canvas-tegninger på CodePen. Her er et [særdeles imponerende eksempel](https://codepen.io/dissimulate/pen/KrAwx).

## Indlæs og tegn en billedfil

At tegne grundlæggende former er nyttigt for at komme i gang, men de fleste spil har brug for rigtige billeder! Figurer, baggrunde og teksturer er det, der giver spil deres visuelle appel. At indlæse og vise billeder på lærredet fungerer anderledes end at tegne geometriske former, men det er ligetil, når du først forstår processen.

Vi skal oprette et `Image`-objekt, indlæse vores billedfil (dette sker asynkront, hvilket betyder "i baggrunden"), og derefter tegne det på lærredet, når det er klar. Denne tilgang sikrer, at dine billeder vises korrekt uden at blokere din applikation, mens de indlæses.

### Grundlæggende billedindlæsning

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Her er, hvad der sker i denne kode:**
- Vi **opretter** et helt nyt Image-objekt til at holde vores figur eller tekstur
- Vi **fortæller** det, hvilken billedfil der skal indlæses ved at angive kildebanen
- Vi **lytter** efter load-eventet, så vi ved præcis, hvornår billedet er klar til brug

### En bedre måde at indlæse billeder på

Her er en mere robust måde at håndtere billedindlæsning på, som professionelle udviklere ofte bruger. Vi pakker billedindlæsningen ind i en Promise-baseret funktion – denne tilgang, der blev populær, da JavaScript Promises blev standard i ES6, gør din kode mere organiseret og håndterer fejl elegant:

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

**Hvad vi har gjort her:**
- **Pakket** al den billedindlæsningslogik ind i en Promise, så vi kan håndtere det bedre
- **Tilføjet** fejlhåndtering, der faktisk fortæller os, når noget går galt
- **Brugt** moderne async/await-syntaks, fordi det er så meget lettere at læse
- **Inkluderet** try/catch-blokke for elegant at håndtere eventuelle indlæsningsproblemer

Når dine billeder er indlæst, er det faktisk ret ligetil at tegne dem på lærredet:

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

**Lad os gennemgå dette trin for trin:**
- Vi **indlæser** både vores helte- og monsterbilleder i baggrunden ved hjælp af await
- Vi **henter** vores canvas-element og får den 2D-renderingskontekst, vi har brug for
- Vi **placerer** heltebilledet lige i midten ved hjælp af lidt hurtig koordinatmatematik
- Vi **placerer** monsterbilledet i øverste venstre hjørne for at starte vores fjendtlige formation
- Vi **fanger** eventuelle fejl, der måtte opstå under indlæsning eller rendering

## Nu er det tid til at begynde at bygge dit spil

Nu samler vi det hele for at skabe det visuelle fundament for dit rumspil. Du har en solid forståelse af canvas-grundprincipper og teknikker til billedindlæsning, så denne praktiske sektion vil guide dig gennem opbygningen af en komplet spilleskærm med korrekt placerede figurer.

### Hvad skal bygges

Du skal bygge en webside med et Canvas-element. Det skal vise en sort skærm `1024*768`. Vi har givet dig to billeder:

- Helteskib

   ![Helteskib](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.da.png)

- 5*5 monstre

   ![Monsterskib](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.da.png)

### Anbefalede trin til at starte udviklingen

Find de startfiler, der er oprettet til dig i undermappen `your-work`. Din projektstruktur bør indeholde:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Her er, hvad du arbejder med:**
- **Spilfigurer** ligger i mappen `assets/`, så alt forbliver organiseret
- **Din hoved-HTML-fil** opsætter canvas-elementet og gør alt klar
- **En JavaScript-fil**, hvor du skriver al din spilrenderingsmagi
- **En package.json**, der opsætter en udviklingsserver, så du kan teste lokalt

Åbn denne mappe i Visual Studio Code for at begynde udviklingen. Du skal bruge et lokalt udviklingsmiljø med Visual Studio Code, NPM og Node.js installeret. Hvis du ikke har `npm` sat op på din computer, [sådan installerer du det](https://www.npmjs.com/get-npm).

Start din udviklingsserver ved at navigere til mappen `your-work`:

```bash
cd your-work
npm start
```

**Denne kommando gør nogle ret seje ting:**
- **Starter** en lokal server på `http://localhost:5000`, så du kan teste dit spil
- **Serverer** alle dine filer korrekt, så din browser kan indlæse dem
- **Overvåger** dine filer for ændringer, så du kan udvikle problemfrit
- **Giver dig** et professionelt udviklingsmiljø til at teste alt

> 💡 **Bemærk**: Din browser vil vise en tom side i starten – det er forventet! Når du tilføjer kode, skal du opdatere din browser for at se dine ændringer. Denne iterative udviklingsmetode ligner, hvordan NASA byggede Apollo-styringscomputeren – testning af hver komponent, før den blev integreret i det større system.

### Tilføj kode

Tilføj den nødvendige kode til `your-work/app.js` for at fuldføre følgende opgaver:

1. **Tegn et lærred med sort baggrund**
   > 💡 **Sådan gør du**: Find TODO i `/app.js` og tilføj blot to linjer. Sæt `ctx.fillStyle` til sort, og brug derefter `ctx.fillRect()` startende ved (0,0) med dine lærredsdimensioner. Nemt!

2. **Indlæs spilteksturer**
   > 💡 **Sådan gør du**: Brug `await loadAsset()` til at indlæse dine spiller- og fjendebilleder. Gem dem i variabler, så du kan bruge dem senere. Husk – de vises ikke, før du faktisk tegner dem!

3. **Tegn helteskib i midten-nederst**
   > 💡 **Sådan gør du**: Brug `ctx.drawImage()` til at placere din helt. For x-koordinaten, prøv `canvas.width / 2 - 45` for at centrere det, og for y-koordinaten brug `canvas.height - canvas.height / 4` for at placere det i det nederste område.

4. **Tegn en 5×5 formation af fjendtlige skibe**
   > 💡 **Sådan gør du**: Find funktionen `createEnemies` og opsæt en indlejret løkke. Du skal lave lidt matematik for afstand og placering, men bare rolig – jeg viser dig præcis hvordan!

Først, fastlæg konstanter for korrekt layout af fjendtlige formationer:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Lad os bryde ned, hvad disse konstanter gør:**
- Vi **sætter** 5 fjender pr. række og kolonne (et flot 5×5 gitter)
- Vi **definerer**, hvor meget plads der skal være mellem fjenderne, så de ikke ser trange ud
- Vi **beregner**, hvor bred vores hele formation vil være
- Vi **finder ud af**, hvor vi skal starte og stoppe, så formationen ser centreret ud

Derefter opretter du indlejrede løkker for at tegne fjendtlige formationer:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Her er, hvad denne indlejrede løkke gør:**
- Den ydre løkke **bevæger sig** fra venstre til højre hen over vores formation
- Den indre løkke **går** fra top til bund for at skabe pæne rækker
- Vi **tegner** hver fjendtlig figur ved de præcise x,y-koordinater, vi har beregnet
- Alt forbliver **jævnt fordelt**, så det ser professionelt og organiseret ud

## Resultat

Det færdige resultat bør se sådan ud:

![Sort skærm med en helt og 5*5 monstre](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.da.png)

## Løsning

Prøv venligst at løse det selv først, men hvis du går i stå, kan du se en [løsning](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr dit rumspil-lærred ved at tilføje visuelle effekter og interaktive elementer ved hjælp af de Canvas API-teknikker, du har lært.

**Opgave:** Opret en ny fil kaldet `enhanced-canvas.html` med et lærred, der viser animerede stjerner i baggrunden, en pulserende sundhedsbar for helteskibet og fjendtlige skibe, der langsomt bevæger sig nedad. Inkluder JavaScript-kode, der tegner blinkende stjerner ved hjælp af tilfældige positioner og opacitet, implementerer en sundhedsbar, der ændrer farve baseret på sundhedsniveau (grøn > gul > rød), og animerer fjendtlige skibe til at bevæge sig nedad på skærmen med forskellige hastigheder.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring

Du har lært om at tegne med den 2D-fokuserede Canvas API; tag et kig på [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), og prøv at tegne et 3D-objekt.

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/32)

## Gennemgang & Selvstudie

Lær mere om Canvas API ved at [læse om det](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Opgave

[Leg med Canvas API](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.