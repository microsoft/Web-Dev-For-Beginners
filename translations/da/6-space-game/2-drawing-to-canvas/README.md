<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-26T22:00:06+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "da"
}
-->
# Byg et Rumspil Del 2: Tegn Helten og Monstrene på Canvas

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Canvas er et HTML-element, der som standard ikke har noget indhold; det er en tom flade. Du skal tilføje indhold ved at tegne på det.

✅ Læs [mere om Canvas API'et](https://developer.mozilla.org/docs/Web/API/Canvas_API) på MDN.

Sådan ser det typisk ud, når det erklæres som en del af sidens body:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Ovenfor sætter vi `id`, `width` og `height`.

- `id`: angiv dette, så du kan få en reference, når du skal interagere med det.
- `width`: dette er elementets bredde.
- `height`: dette er elementets højde.

## Tegning af simpel geometri

Canvas bruger et kartesisk koordinatsystem til at tegne ting. Det betyder, at det bruger en x-akse og en y-akse til at angive, hvor noget er placeret. Positionen `0,0` er øverste venstre hjørne, og nederste højre hjørne er det, du har angivet som CANVAS' BREDDE og HØJDE.

![canvas' gitter](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.da.png)  
> Billede fra [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

For at tegne på canvas-elementet skal du gennemgå følgende trin:

1. **Få en reference** til Canvas-elementet.  
2. **Få en reference** til Context-elementet, der sidder på Canvas-elementet.  
3. **Udfør en tegneoperation** ved hjælp af Context-elementet.  

Koden for ovenstående trin ser typisk sådan ud:

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas API'et fokuserer primært på 2D-former, men du kan også tegne 3D-elementer på en webside; til dette kan du bruge [WebGL API'et](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Du kan tegne mange forskellige ting med Canvas API'et, såsom:

- **Geometriske former**, vi har allerede vist, hvordan man tegner et rektangel, men der er meget mere, du kan tegne.  
- **Tekst**, du kan tegne tekst med enhver skrifttype og farve, du ønsker.  
- **Billeder**, du kan tegne et billede baseret på en billedfil som f.eks. en .jpg eller .png.  

✅ Prøv det! Du ved, hvordan man tegner et rektangel, kan du tegne en cirkel på en side? Tag et kig på nogle interessante Canvas-tegninger på CodePen. Her er et [særligt imponerende eksempel](https://codepen.io/dissimulate/pen/KrAwx).

## Indlæs og tegn en billedressource

Du indlæser en billedressource ved at oprette et `Image`-objekt og sætte dets `src`-egenskab. Derefter lytter du til `load`-hændelsen for at vide, hvornår det er klar til brug. Koden ser sådan ud:

### Indlæs ressource

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Mønster for indlæsning af ressource

Det anbefales at pakke ovenstående ind i en konstruktion som denne, så det er nemmere at bruge, og du kun forsøger at manipulere det, når det er fuldt indlæst:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

For at tegne spilressourcer på en skærm vil din kode se sådan ud:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## Nu er det tid til at begynde at bygge dit spil

### Hvad skal bygges

Du skal bygge en webside med et Canvas-element. Det skal vise en sort skærm `1024*768`. Vi har givet dig to billeder:

- Helteskib  

   ![Helteskib](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.da.png)

- 5*5 monster  

   ![Monsterskib](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.da.png)

### Anbefalede trin for at starte udviklingen

Find de filer, der er blevet oprettet til dig i undermappen `your-work`. Den bør indeholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Åbn en kopi af denne mappe i Visual Studio Code. Du skal have et lokalt udviklingsmiljø opsat, helst med Visual Studio Code med NPM og Node installeret. Hvis du ikke har `npm` opsat på din computer, [sådan gør du det](https://www.npmjs.com/get-npm).

Start dit projekt ved at navigere til mappen `your_work`:

```bash
cd your-work
npm start
```

Ovenstående starter en HTTP-server på adressen `http://localhost:5000`. Åbn en browser og indtast den adresse. Det er en tom side lige nu, men det vil ændre sig.

> Bemærk: for at se ændringer på din skærm, opdater din browser.

### Tilføj kode

Tilføj den nødvendige kode til `your-work/app.js` for at løse nedenstående:

1. **Tegn** et canvas med sort baggrund  
   > tip: tilføj to linjer under den relevante TODO i `/app.js`, der sætter `ctx`-elementet til at være sort og top/venstre koordinater til at være 0,0, og højden og bredden til at svare til canvas.  
2. **Indlæs** teksturer  
   > tip: tilføj spiller- og fjendebilleder ved hjælp af `await loadTexture` og angiv billedstien. Du vil endnu ikke kunne se dem på skærmen!  
3. **Tegn** helten i midten af skærmen i den nederste halvdel  
   > tip: brug `drawImage` API'et til at tegne heroImg på skærmen, og sæt `canvas.width / 2 - 45` og `canvas.height - canvas.height / 4)`.  
4. **Tegn** 5*5 monstre  
   > tip: Nu kan du fjerne kommenteringen af koden for at tegne fjender på skærmen. Gå derefter til funktionen `createEnemies` og byg den ud.  

   Først, opsæt nogle konstanter:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    derefter, opret en løkke for at tegne arrayet af monstre på skærmen:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Resultat

Det færdige resultat bør se sådan ud:

![Sort skærm med en helt og 5*5 monstre](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.da.png)

## Løsning

Prøv venligst at løse det selv først, men hvis du sidder fast, kan du se en [løsning](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Udfordring

Du har lært om at tegne med det 2D-fokuserede Canvas API; tag et kig på [WebGL API'et](https://developer.mozilla.org/docs/Web/API/WebGL_API), og prøv at tegne et 3D-objekt.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/32)

## Gennemgang & Selvstudie

Lær mere om Canvas API'et ved at [læse om det](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Opgave

[Leg med Canvas API'et](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.