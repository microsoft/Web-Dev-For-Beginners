<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T22:35:55+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 2: Tegn helten og monstre på lerretet

Canvas API er en av webutviklingens mest kraftfulle funksjoner for å lage dynamisk, interaktiv grafikk direkte i nettleseren din. I denne leksjonen skal vi forvandle det tomme HTML `<canvas>`-elementet til en spillverden fylt med helter og monstre. Tenk på lerretet som din digitale tegneflate der kode blir til visuelle elementer.

Vi bygger videre på det du lærte i forrige leksjon, og nå skal vi dykke inn i de visuelle aspektene. Du vil lære hvordan du laster inn og viser spillfigurer, posisjonerer elementer presist, og skaper det visuelle fundamentet for romspillet ditt. Dette bygger broen mellom statiske nettsider og dynamiske, interaktive opplevelser.

Ved slutten av denne leksjonen vil du ha en komplett spillscene med helteskipet ditt plassert riktig og fiendeformasjoner klare for kamp. Du vil forstå hvordan moderne spill gjengir grafikk i nettlesere og få ferdigheter til å lage dine egne interaktive visuelle opplevelser. La oss utforske canvas-grafikk og bringe romspillet ditt til live!

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Så hva er egentlig dette `<canvas>`-elementet? Det er HTML5s løsning for å lage dynamisk grafikk og animasjoner i nettlesere. I motsetning til vanlige bilder eller videoer som er statiske, gir canvas deg pikselnivå kontroll over alt som vises på skjermen. Dette gjør det perfekt for spill, datavisualiseringer og interaktiv kunst. Tenk på det som en programmerbar tegneflate der JavaScript blir penselen din.

Som standard ser et canvas-element ut som et tomt, transparent rektangel på siden din. Men det er her potensialet ligger! Den virkelige kraften kommer frem når du bruker JavaScript til å tegne former, laste inn bilder, lage animasjoner og få ting til å reagere på brukerinteraksjoner. Det ligner på hvordan de tidlige pionerene innen datagrafikk på Bell Labs på 1960-tallet måtte programmere hver piksel for å lage de første digitale animasjonene.

✅ Les [mer om Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) på MDN.

Slik blir det vanligvis deklarert som en del av sidens body:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Dette gjør koden:**
- **Setter** `id`-attributtet slik at du kan referere til dette spesifikke canvas-elementet i JavaScript
- **Definerer** bredden i piksler for å kontrollere canvasets horisontale størrelse
- **Etablerer** høyden i piksler for å bestemme canvasets vertikale dimensjoner

## Tegne enkel geometri

Nå som du vet hva canvas-elementet er, la oss utforske hvordan man faktisk tegner på det! Canvas bruker et koordinatsystem som kanskje føles kjent fra matematikkundervisningen, men det er en viktig vri som er spesifikk for datagrafikk.

Canvas bruker kartesiske koordinater med en x-akse (horisontal) og en y-akse (vertikal) for å posisjonere alt du tegner. Men her er den viktige forskjellen: i motsetning til koordinatsystemet fra matematikkundervisningen, starter origo `(0,0)` i øvre venstre hjørne, med x-verdier som øker når du beveger deg mot høyre og y-verdier som øker når du beveger deg nedover. Denne tilnærmingen stammer fra tidlige dataskjermer der elektronstråler skannet fra topp til bunn, og gjorde øvre venstre hjørne til det naturlige startpunktet.

![canvas sitt rutenett](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.no.png)
> Bilde fra [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

For å tegne på canvas-elementet følger du den samme tretrinnsprosessen som danner grunnlaget for all canvas-grafikk. Når du har gjort dette noen ganger, blir det en vane:

1. **Få en referanse** til canvas-elementet ditt fra DOM (akkurat som med andre HTML-elementer)
2. **Få 2D-renderingskonteksten** – dette gir deg alle tegneverktøyene
3. **Begynn å tegne!** Bruk kontekstens innebygde metoder for å lage grafikken din

Slik ser det ut i kode:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**La oss bryte dette ned steg for steg:**
- Vi **henter** canvas-elementet vårt ved hjelp av ID-en og lagrer det i en variabel
- Vi **får** 2D-renderingskonteksten – dette er verktøykassen vår full av tegnemetoder
- Vi **forteller** canvas at vi vil fylle ting med rødt ved hjelp av `fillStyle`-egenskapen
- Vi **tegner** et rektangel som starter i øvre venstre hjørne (0,0) og er 200 piksler bredt og høyt

✅ Canvas API fokuserer mest på 2D-former, men du kan også tegne 3D-elementer på en nettside; for dette kan du bruke [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Du kan tegne mange forskjellige ting med Canvas API, som:

- **Geometriske former**, vi har allerede vist hvordan man tegner et rektangel, men det er mye mer du kan tegne.
- **Tekst**, du kan tegne tekst med hvilken som helst font og farge du ønsker.
- **Bilder**, du kan tegne et bilde basert på en bildefil som en .jpg eller .png for eksempel.

✅ Prøv det! Du vet hvordan du tegner et rektangel, kan du tegne en sirkel på en side? Ta en titt på noen interessante Canvas-tegninger på CodePen. Her er et [særlig imponerende eksempel](https://codepen.io/dissimulate/pen/KrAwx).

## Last inn og tegn et bilde

Å tegne grunnleggende former er nyttig for å komme i gang, men de fleste spill trenger faktiske bilder! Figurer, bakgrunner og teksturer er det som gir spillene visuell appell. Å laste inn og vise bilder på canvas fungerer annerledes enn å tegne geometriske former, men det er enkelt når du forstår prosessen.

Vi må lage et `Image`-objekt, laste inn bildefilen vår (dette skjer asynkront, altså "i bakgrunnen"), og deretter tegne det på canvas når det er klart. Denne tilnærmingen sikrer at bildene dine vises riktig uten å blokkere applikasjonen mens de lastes inn.

### Grunnleggende bildeinnlasting

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Dette skjer i koden:**
- Vi **lager** et helt nytt Image-objekt for å holde figuren eller teksturen vår
- Vi **forteller** det hvilken bildefil som skal lastes inn ved å sette kildebanen
- Vi **lytter** etter load-hendelsen slik at vi vet nøyaktig når bildet er klart til bruk

### En bedre måte å laste inn bilder på

Her er en mer robust måte å håndtere bildeinnlasting på som profesjonelle utviklere ofte bruker. Vi pakker bildeinnlastingen inn i en funksjon basert på Promise – denne tilnærmingen, som ble populær da JavaScript Promises ble standard i ES6, gjør koden din mer organisert og håndterer feil elegant:

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

**Hva vi har gjort her:**
- **Pakket inn** all bildeinnlastingslogikken i en Promise for bedre håndtering
- **Lagt til** feilhåndtering som faktisk forteller oss når noe går galt
- **Brukt** moderne async/await-syntaks fordi det er så mye enklere å lese
- **Inkludert** try/catch-blokker for å håndtere eventuelle innlastingsproblemer på en smidig måte

Når bildene dine er lastet inn, er det faktisk ganske enkelt å tegne dem på canvas:

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

**La oss gå gjennom dette steg for steg:**
- Vi **laster inn** både helten og monsterbildene i bakgrunnen ved hjelp av await
- Vi **henter** canvas-elementet vårt og får den 2D-renderingskonteksten vi trenger
- Vi **posisjonerer** heltebildet midt i sentrum ved hjelp av litt rask koordinatmatematikk
- Vi **plasserer** monsterbildet i øvre venstre hjørne for å starte fiendeformasjonen
- Vi **fanger opp** eventuelle feil som kan oppstå under innlasting eller rendering

## Nå er det tid for å begynne å bygge spillet ditt

Nå skal vi sette alt sammen for å lage det visuelle fundamentet for romspillet ditt. Du har en solid forståelse av canvas-grunnleggende og bildeinnlastingsteknikker, så denne praktiske delen vil veilede deg gjennom å bygge en komplett spillskjerm med riktig plasserte figurer.

### Hva du skal bygge

Du skal lage en nettside med et Canvas-element. Det skal vise en svart skjerm `1024*768`. Vi har gitt deg to bilder:

- Helteskip

   ![Helteskip](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.no.png)

- 5*5 monstre

   ![Monsterskip](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.no.png)

### Anbefalte trinn for å starte utviklingen

Finn startfilene som er laget for deg i `your-work`-undermappen. Prosjektstrukturen din bør inneholde:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Dette jobber du med:**
- **Spillfigurer** ligger i `assets/`-mappen slik at alt holder seg organisert
- **Din hoved-HTML-fil** setter opp canvas-elementet og gjør alt klart
- **En JavaScript-fil** der du skal skrive all magien for spillrendering
- **En package.json** som setter opp en utviklingsserver slik at du kan teste lokalt

Åpne denne mappen i Visual Studio Code for å begynne utviklingen. Du trenger et lokalt utviklingsmiljø med Visual Studio Code, NPM og Node.js installert. Hvis du ikke har `npm` satt opp på datamaskinen din, [slik installerer du det](https://www.npmjs.com/get-npm).

Start utviklingsserveren din ved å navigere til `your-work`-mappen:

```bash
cd your-work
npm start
```

**Denne kommandoen gjør noen ganske kule ting:**
- **Starter opp** en lokal server på `http://localhost:5000` slik at du kan teste spillet ditt
- **Serverer** alle filene dine riktig slik at nettleseren din kan laste dem inn korrekt
- **Overvåker** filene dine for endringer slik at du kan utvikle jevnt
- **Gir deg** et profesjonelt utviklingsmiljø for å teste alt

> 💡 **Merk**: Nettleseren din vil vise en blank side i starten – det er forventet! Når du legger til kode, oppdater nettleseren for å se endringene dine. Denne iterative utviklingstilnærmingen ligner på hvordan NASA bygde Apollo-styringsdatamaskinen – testet hver komponent før den ble integrert i det større systemet.

### Legg til kode

Legg til nødvendig kode i `your-work/app.js` for å fullføre følgende oppgaver:

1. **Tegn et canvas med svart bakgrunn**
   > 💡 **Slik gjør du det**: Finn TODO i `/app.js` og legg til bare to linjer. Sett `ctx.fillStyle` til svart, og bruk deretter `ctx.fillRect()` som starter på (0,0) med canvas-dimensjonene dine. Enkelt!

2. **Last inn spillteksturer**
   > 💡 **Slik gjør du det**: Bruk `await loadAsset()` for å laste inn spiller- og fiendebildene dine. Lagre dem i variabler slik at du kan bruke dem senere. Husk – de vil ikke vises før du faktisk tegner dem!

3. **Tegn helteskipet i midten nederst**
   > 💡 **Slik gjør du det**: Bruk `ctx.drawImage()` for å posisjonere helten din. For x-koordinaten, prøv `canvas.width / 2 - 45` for å sentrere det, og for y-koordinaten bruk `canvas.height - canvas.height / 4` for å plassere det nederst.

4. **Tegn en 5×5 formasjon av fiendeskip**
   > 💡 **Slik gjør du det**: Finn `createEnemies`-funksjonen og sett opp en nestet løkke. Du må gjøre litt matematikk for avstand og posisjonering, men ikke bekymre deg – jeg viser deg nøyaktig hvordan!

Først, etabler konstanter for riktig oppsett av fiendeformasjonen:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**La oss bryte ned hva disse konstantene gjør:**
- Vi **setter** 5 fiender per rad og kolonne (et fint 5×5 rutenett)
- Vi **definerer** hvor mye plass vi skal ha mellom fiendene slik at de ikke ser trange ut
- Vi **beregner** hvor bred hele formasjonen vår vil være
- Vi **finner ut** hvor vi skal starte og stoppe slik at formasjonen ser sentrert ut

Deretter, lag nestede løkker for å tegne fiendeformasjonen:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Dette gjør den nestede løkken:**
- Den ytre løkken **beveger seg** fra venstre til høyre over formasjonen vår
- Den indre løkken **går** fra topp til bunn for å lage pene rader
- Vi **tegner** hver fiendesprite på de nøyaktige x,y-koordinatene vi har beregnet
- Alt holder seg **jevnt fordelt** slik at det ser profesjonelt og organisert ut

## Resultat

Det ferdige resultatet skal se slik ut:

![Svart skjerm med en helt og 5×5 monstre](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.no.png)

## Løsning

Prøv å løse det selv først, men hvis du står fast, kan du ta en titt på en [løsning](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## GitHub Copilot Agent-utfordring 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre romspillet ditt ved å legge til visuelle effekter og interaktive elementer ved hjelp av Canvas API-teknikkene du har lært.

**Oppgave:** Lag en ny fil kalt `enhanced-canvas.html` med et canvas som viser animerte stjerner i bakgrunnen, en pulserende helsebjelke for helteskipet, og fiendeskip som sakte beveger seg nedover. Inkluder JavaScript-kode som tegner blinkende stjerner ved hjelp av tilfeldige posisjoner og opasitet, implementerer en helsebjelke som endrer farge basert på helsenivå (grønn > gul > rød), og animerer fiendeskipene til å bevege seg nedover skjermen med forskjellige hastigheter.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring

Du har lært om tegning med den 2D-fokuserte Canvas API; ta en titt på [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), og prøv å tegne et 3D-objekt.

## Quiz etter leksjonen

[Quiz etter leksjonen](https://ff-quizzes.netlify.app/web/quiz/32)

## Gjennomgang og selvstudium

Lær mer om Canvas API ved å [lese om det](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Oppgave

[Utforsk Canvas API](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.