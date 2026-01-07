<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7994743c5b21fdcceb36307916ef249a",
  "translation_date": "2025-11-03T14:04:29+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 2: I-drawing ang Hero at Monsters sa Canvas

```mermaid
journey
    title Your Canvas Graphics Journey
    section Foundation
      Understand Canvas API: 3: Student
      Learn coordinate system: 4: Student
      Draw basic shapes: 4: Student
    section Image Handling
      Load game assets: 4: Student
      Handle async loading: 5: Student
      Position sprites: 5: Student
    section Game Rendering
      Create game screen: 5: Student
      Build formations: 5: Student
      Optimize performance: 4: Student
```

Ang Canvas API ay isa sa pinakamakapangyarihang tampok ng web development para sa paglikha ng dynamic at interactive na graphics direkta sa iyong browser. Sa araling ito, gagawin nating isang mundo ng laro ang blangkong HTML `<canvas>` element na puno ng mga hero at monsters. Isipin ang canvas bilang iyong digital na art board kung saan nagiging visual ang code.

Binubuo natin ang natutunan mo sa nakaraang aralin, at ngayon ay sisid tayo sa mga visual na aspeto. Matututuhan mo kung paano mag-load at mag-display ng mga game sprites, mag-posisyon ng mga elemento nang eksakto, at lumikha ng visual na pundasyon para sa iyong space game. Pinupunan nito ang agwat sa pagitan ng mga static na web page at dynamic, interactive na karanasan.

Sa pagtatapos ng araling ito, magkakaroon ka ng kumpletong game scene na may tamang posisyon ng iyong hero ship at handa na ang mga enemy formations para sa labanan. Mauunawaan mo kung paano nagre-render ng graphics ang mga modernong laro sa mga browser at magkakaroon ka ng kakayahan na lumikha ng sarili mong interactive na visual na karanasan. Tuklasin natin ang canvas graphics at buhayin ang iyong space game!

```mermaid
mindmap
  root((Canvas Graphics))
    Canvas Element
      HTML5 Feature
      2D Context
      Coordinate System
      Pixel Control
    Drawing Operations
      Basic Shapes
      Text Rendering
      Image Display
      Path Drawing
    Asset Management
      Image Loading
      Async Operations
      Error Handling
      Performance
    Game Rendering
      Sprite Positioning
      Formation Layout
      Scene Composition
      Frame Updates
    Visual Effects
      Colors & Styles
      Transformations
      Animations
      Layering
```

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/31)

## Ang Canvas

Ano nga ba ang `<canvas>` element? Ito ang solusyon ng HTML5 para sa paglikha ng dynamic na graphics at animations sa mga web browser. Hindi tulad ng mga regular na imahe o video na static, binibigyan ka ng canvas ng pixel-level na kontrol sa lahat ng lumalabas sa screen. Perpekto ito para sa mga laro, data visualizations, at interactive na sining. Isipin ito bilang isang programmable na drawing surface kung saan ang JavaScript ang iyong paintbrush.

Sa default, ang canvas element ay mukhang isang blangkong, transparent na rectangle sa iyong pahina. Ngunit dito nakasalalay ang potensyal! Ang tunay na kapangyarihan nito ay lumalabas kapag ginamit mo ang JavaScript para mag-drawing ng mga hugis, mag-load ng mga imahe, lumikha ng mga animation, at gawing interactive ang mga bagay. Katulad ito ng ginawa ng mga unang computer graphics pioneers sa Bell Labs noong 1960s na kailangang i-program ang bawat pixel para makalikha ng unang digital animations.

✅ Basahin ang [karagdagang impormasyon tungkol sa Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) sa MDN.

Ganito karaniwang ideklara ang canvas bilang bahagi ng body ng pahina:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Ano ang ginagawa ng code na ito:**
- **Itinatakda** ang `id` attribute para ma-reference ang partikular na canvas element sa JavaScript
- **Tinutukoy** ang `width` sa pixels para kontrolin ang horizontal na laki ng canvas
- **Itinatakda** ang `height` sa pixels para tukuyin ang vertical na sukat ng canvas

## Pag-drawing ng Simpleng Geometry

Ngayon na alam mo kung ano ang canvas element, tuklasin natin ang aktwal na pag-drawing dito! Ang canvas ay gumagamit ng coordinate system na maaaring pamilyar sa math class, ngunit may isang mahalagang twist na partikular sa computer graphics.

Ang canvas ay gumagamit ng Cartesian coordinates na may x-axis (horizontal) at y-axis (vertical) para i-posisyon ang lahat ng iyong idinodrawing. Ngunit narito ang mahalagang pagkakaiba: hindi tulad ng coordinate system sa math class, ang origin point `(0,0)` ay nagsisimula sa top-left corner, kung saan ang x-values ay tumataas habang gumagalaw pakanan at ang y-values ay tumataas habang gumagalaw pababa. Ang approach na ito ay nagmula sa mga unang computer displays kung saan ang electron beams ay nag-scan mula sa itaas pababa, kaya't ang top-left ang natural na starting point.

```mermaid
quadrantChart
    title Canvas Coordinate System
    x-axis Left --> Right
    y-axis Top --> Bottom
    quadrant-1 Quadrant 1
    quadrant-2 Quadrant 2  
    quadrant-3 Quadrant 3
    quadrant-4 Quadrant 4
    
    Origin Point: [0.1, 0.1]
    Hero Center: [0.5, 0.8]
    Enemy Formation: [0.3, 0.2]
    Power-up: [0.7, 0.6]
    UI Elements: [0.9, 0.1]
```

![ang grid ng canvas](../../../../translated_images/canvas_grid.5f209da785ded492.tl.png)
> Imahe mula sa [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Para mag-drawing sa canvas element, susundin mo ang parehong tatlong hakbang na proseso na bumubuo sa pundasyon ng lahat ng canvas graphics. Kapag nagawa mo ito nang ilang beses, magiging natural na ito:

```mermaid
flowchart LR
    A[HTML Canvas Element] --> B[Get Canvas Reference]
    B --> C[Get 2D Context]
    C --> D[Drawing Operations]
    
    D --> E[Draw Shapes]
    D --> F[Draw Text]
    D --> G[Draw Images]
    D --> H[Apply Styles]
    
    E --> I[Render to Screen]
    F --> I
    G --> I
    H --> I
    
    style A fill:#e1f5fe
    style C fill:#e8f5e8
    style I fill:#fff3e0
```

1. **Kumuha ng reference** sa iyong Canvas element mula sa DOM (katulad ng ibang HTML element)
2. **Kunin ang 2D rendering context** – ito ang nagbibigay ng lahat ng drawing methods
3. **Simulan ang pag-drawing!** Gamitin ang built-in methods ng context para lumikha ng iyong graphics

Ganito ang itsura nito sa code:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**I-breakdown natin ito step by step:**
- **Kinukuha** natin ang canvas element gamit ang ID nito at ini-store sa isang variable
- **Kinukuha** natin ang 2D rendering context – ito ang toolkit na puno ng drawing methods
- **Sinasabi** natin sa canvas na gusto nating punuin ng pula gamit ang `fillStyle` property
- **Nagdo-drawing** tayo ng rectangle simula sa top-left corner (0,0) na 200 pixels ang lapad at taas

✅ Ang Canvas API ay pangunahing nakatuon sa 2D shapes, ngunit maaari ka ring mag-drawing ng 3D elements sa isang website; para dito, maaaring gamitin ang [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Maaari kang mag-drawing ng iba't ibang bagay gamit ang Canvas API tulad ng:

- **Geometrical shapes**, naipakita na namin kung paano mag-drawing ng rectangle, ngunit marami pang iba ang maaari mong i-drawing.
- **Text**, maaari kang mag-drawing ng text gamit ang anumang font at kulay na gusto mo.
- **Images**, maaari kang mag-drawing ng imahe mula sa isang image asset tulad ng .jpg o .png halimbawa.

✅ Subukan ito! Alam mo na kung paano mag-drawing ng rectangle, kaya mo bang mag-drawing ng bilog sa isang pahina? Tingnan ang ilang mga kawili-wiling Canvas drawings sa CodePen. Narito ang isang [napaka-impressive na halimbawa](https://codepen.io/dissimulate/pen/KrAwx).

### 🔄 **Pedagogical Check-in**
**Pag-unawa sa Canvas Fundamentals**: Bago lumipat sa pag-load ng imahe, tiyakin na kaya mong:
- ✅ Ipaliwanag kung paano naiiba ang canvas coordinate system sa mathematical coordinates
- ✅ Maunawaan ang tatlong hakbang na proseso para sa canvas drawing operations
- ✅ Tukuyin kung ano ang ibinibigay ng 2D rendering context
- ✅ Ilarawan kung paano nagtutulungan ang fillStyle at fillRect

**Mabilis na Self-Test**: Paano mo idodrawing ang isang asul na bilog sa posisyon (100, 50) na may radius na 25?
```javascript
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.fill();
```

**Mga Canvas Drawing Methods na Alam Mo Na**:
- **fillRect()**: Nagdo-drawing ng mga filled rectangles
- **fillStyle**: Nagtatakda ng mga kulay at patterns
- **beginPath()**: Nagsisimula ng bagong drawing paths
- **arc()**: Lumilikha ng mga bilog at kurba

## Mag-load at Mag-drawing ng Image Asset

Ang pag-drawing ng basic shapes ay kapaki-pakinabang para sa pagsisimula, ngunit karamihan sa mga laro ay nangangailangan ng aktwal na mga imahe! Ang mga sprites, backgrounds, at textures ang nagbibigay ng visual appeal sa mga laro. Ang pag-load at pag-display ng mga imahe sa canvas ay gumagana nang iba kaysa sa pag-drawing ng geometric shapes, ngunit madali itong maunawaan kapag naintindihan mo ang proseso.

Kailangan nating lumikha ng isang `Image` object, i-load ang ating image file (ito ay nangyayari asynchronously, ibig sabihin "sa background"), at pagkatapos ay i-drawing ito sa canvas kapag handa na ito. Ang approach na ito ay tinitiyak na maayos na magdi-display ang iyong mga imahe nang hindi binablock ang iyong application habang naglo-load.

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant Img as Image Object
    participant Server as File Server
    participant Canvas as Canvas Context
    
    JS->>Img: new Image()
    JS->>Img: Set src property
    Img->>Server: Request image file
    Server->>Img: Return image data
    Img->>JS: Trigger onload event
    JS->>Canvas: drawImage(img, x, y)
    Canvas->>Canvas: Render to screen
    
    Note over JS,Canvas: Async loading prevents UI blocking
```

### Basic Image Loading

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Ano ang nangyayari sa code na ito:**
- **Lumilikha** tayo ng bagong Image object para mag-hold ng ating sprite o texture
- **Sinasabi** natin kung aling image file ang i-load sa pamamagitan ng pag-set ng source path
- **Nakikinig** tayo sa load event para malaman kung kailan handa na ang imahe para gamitin

### Mas Magandang Paraan ng Pag-load ng Imahe

Narito ang mas maayos na paraan ng pag-handle ng image loading na karaniwang ginagamit ng mga propesyonal na developer. I-wrap natin ang image loading sa isang Promise-based function – ang approach na ito, na naging popular nang maging standard ang JavaScript Promises sa ES6, ay ginagawang mas organisado ang iyong code at maayos na hinahandle ang mga error:

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

**Ano ang ginawa natin dito:**
- **I-wrap** ang lahat ng image loading logic sa isang Promise para mas maayos itong ma-handle
- **Nagdagdag** ng error handling na nagsasabi kung kailan may problema
- **Gumamit** ng modern async/await syntax dahil mas madali itong basahin
- **Naglagay** ng try/catch blocks para maayos na ma-handle ang anumang loading hiccups

Kapag na-load na ang iyong mga imahe, ang pag-drawing ng mga ito sa canvas ay talagang simple:

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

**I-breakdown natin ito step by step:**
- **I-load** ang parehong hero at monster images sa background gamit ang await
- **Kunin** ang canvas element at ang 2D rendering context na kailangan natin
- **I-posisyon** ang hero image sa gitna gamit ang mabilis na coordinate math
- **Ilagay** ang monster image sa top-left corner para simulan ang enemy formation
- **I-catch** ang anumang errors na maaaring mangyari sa loading o rendering

```mermaid
flowchart TD
    A[Load Assets] --> B{All Images Loaded?}
    B -->|No| C[Show Loading]
    B -->|Yes| D[Get Canvas Context]
    C --> B
    D --> E[Clear Screen]
    E --> F[Draw Background]
    F --> G[Draw Enemy Formation]
    G --> H[Draw Hero Ship]
    H --> I[Apply Visual Effects]
    I --> J[Render Frame]
    
    subgraph "Rendering Pipeline"
        K[Asset Management]
        L[Scene Composition]
        M[Drawing Operations]
        N[Frame Output]
    end
    
    style A fill:#e1f5fe
    style J fill:#e8f5e8
    style I fill:#fff3e0
```

## Panahon na Para Simulan ang Paggawa ng Iyong Laro

Ngayon ay pagsasamahin natin ang lahat para lumikha ng visual na pundasyon ng iyong space game. Mayroon kang solidong pag-unawa sa canvas fundamentals at image loading techniques, kaya't ang hands-on na seksyon na ito ay gagabay sa iyo sa paggawa ng kumpletong game screen na may tamang posisyon ng sprites.

### Ano ang Gagawin

Gagawa ka ng web page na may Canvas element. Dapat itong mag-render ng black screen na `1024*768`. Nagbigay kami ng dalawang imahe:

- Hero ship

   ![Hero ship](../../../../translated_images/player.dd24c1afa8c71e9b.tl.png)

- 5*5 monster

   ![Monster ship](../../../../translated_images/enemyShip.5df2a822c16650c2.tl.png)

### Mga Inirerekomendang Hakbang para Simulan ang Development

Hanapin ang starter files na ginawa para sa iyo sa `your-work` sub folder. Ang istruktura ng iyong proyekto ay dapat maglaman ng:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Ano ang mayroon ka:**
- **Game sprites** na nasa `assets/` folder para manatiling organisado ang lahat
- **Ang iyong pangunahing HTML file** na nagse-set up ng canvas element at naghahanda ng lahat
- **Isang JavaScript file** kung saan isusulat mo ang lahat ng game rendering magic
- **Isang package.json** na nagse-set up ng development server para ma-test mo nang lokal

Buksan ang folder na ito sa Visual Studio Code para simulan ang development. Kakailanganin mo ng lokal na development environment na may Visual Studio Code, NPM, at Node.js na naka-install. Kung wala kang `npm` sa iyong computer, [narito kung paano ito i-install](https://www.npmjs.com/get-npm).

Simulan ang iyong development server sa pamamagitan ng pag-navigate sa `your-work` folder:

```bash
cd your-work
npm start
```

**Ang command na ito ay gumagawa ng mga cool na bagay:**
- **Sinisimulan** ang isang lokal na server sa `http://localhost:5000` para ma-test mo ang iyong laro
- **Nagsisilbi** ng lahat ng iyong files nang maayos para ma-load ito ng iyong browser
- **Nagmo-monitor** ng iyong files para sa mga pagbabago para ma-develop mo nang maayos
- **Nagbibigay sa iyo** ng propesyonal na development environment para ma-test ang lahat

> 💡 **Tandaan**: Ang iyong browser ay magpapakita ng blangkong pahina sa simula – normal ito! Habang nagdadagdag ka ng code, i-refresh ang iyong browser para makita ang mga pagbabago. Ang iterative development approach na ito ay katulad ng ginawa ng NASA sa Apollo guidance computer – sinusubukan ang bawat bahagi bago ito isama sa mas malaking sistema.

### Magdagdag ng Code

Magdagdag ng kinakailangang code sa `your-work/app.js` para kumpletuhin ang mga sumusunod na gawain:

1. **Mag-drawing ng canvas na may black background**
   > 💡 **Narito kung paano**: Hanapin ang TODO sa `/app.js` at magdagdag ng dalawang linya. I-set ang `ctx.fillStyle` sa black, pagkatapos gamitin ang `ctx.fillRect()` simula sa (0,0) gamit ang sukat ng iyong canvas. Madali lang!

2. **Mag-load ng game textures**
   > 💡 **Narito kung paano**: Gamitin ang `await loadAsset()` para i-load ang iyong player at enemy images. I-store ang mga ito sa variables para magamit mo sa susunod. Tandaan – hindi ito magpapakita hangga't hindi mo ito aktwal na idinodrawing!

3. **I-drawing ang hero ship sa center-bottom position**
   > 💡 **Narito kung paano**: Gamitin ang `ctx.drawImage()` para i-posisyon ang iyong hero. Para sa x-coordinate, subukan ang `canvas.width / 2 - 45` para i-center ito, at para sa y-coordinate gamitin ang `canvas.height - canvas.height / 4` para ilagay ito sa bottom area.

4. **I-drawing ang 5×5 formation ng enemy ships**
   > 💡 **Narito kung paano**: Hanapin ang `createEnemies` function at mag-set up ng nested loop. Kakailanganin mong gumawa ng kaunting math para sa spacing at positioning, ngunit huwag mag-alala – ipapakita ko sa iyo kung paano!

Una, mag-set ng constants para sa tamang layout ng enemy formation:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**I-breakdown natin kung ano ang ginagawa ng mga constants na ito:**
- **Itinatakda** ang 5 enemies bawat row at column (isang magandang 5×5 grid)
- **Tinutukoy** kung gaano kalayo ang pagitan ng mga enemies para hindi magmukhang masikip
- **Kinakalkula** kung gaano kalawak ang buong formation
- **Tinutukoy** kung saan magsisimula at magtatapos para magmukhang centered ang formation

```mermaid
flowchart LR
    A["Canvas Width: 1024px"] --> B["Formation Width: 490px"]
    B --> C["Start X: 267px"]
    C --> D["Enemy Spacing: 98px"]
    
    subgraph "5x5 Enemy Formation"
        E["Row 1: Y=0"]
        F["Row 2: Y=50"]
        G["Row 3: Y=100"]
        H["Row 4: Y=150"]
        I["Row 5: Y=200"]
    end
    
    subgraph "Column Spacing"
        J["Col 1: X=267"]
        K["Col 2: X=365"]
        L["Col 3: X=463"]
        M["Col 4: X=561"]
        N["Col 5: X=659"]
    end
    
    style A fill:#e1f5fe
    style B fill:#e8f5e8
    style C fill:#fff3e0
```

Pagkatapos, gumawa ng nested loops para i-drawing ang enemy formation:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Ano ang ginagawa ng nested loop na ito:**
- Ang outer loop ay **gumagalaw** mula kaliwa pakanan sa formation
- Ang inner loop ay **pumupunta** mula itaas pababa para lumikha ng maayos na rows
- **Idinodrawing** natin ang bawat enemy sprite sa eksaktong x,y coordinates na kinalkula natin
- Lahat ay nananatiling **pantay-pantay ang spacing** para magmukhang propesyonal at organisado

### 🔄 **Pedagogical Check-in**
**Mastery sa Game Rendering**: Tiyakin ang iyong pag-unawa sa buong rendering system:
- ✅ Paano pinipigilan ng async image loading ang UI blocking sa pagsisimula ng laro?
- ✅ Bakit natin kinakalkula ang mga posisyon ng enemy formation gamit ang constants sa halip na hardcoding?
- ✅ Anong papel ang ginagampanan ng 2D rendering context sa drawing operations?
- ✅ Paano lumilikha ng maayos na sprite formations ang nested loops?

**Mga Performance Considerations**: Ang iyong laro ngayon ay nagpapakita ng:
- **Efficient asset loading**: Promise-based na pamamahala ng imahe
- **Organized rendering**: Structured na drawing operations
- **Mathematical positioning**: Calculated na sprite placement
- **Error handling**: Maayos na pamamahala ng failure

**Mga Konsepto sa Visual Programming**: Natutunan mo:
- **Mga Sistema ng Koordinasyon**: Pagsasalin ng matematika sa mga posisyon sa screen
- **Pamamahala ng Sprite**: Paglo-load at pagpapakita ng mga graphics ng laro
- **Mga Algorithm ng Pormasyon**: Mga matematikal na pattern para sa maayos na layout
- **Async Operations**: Modernong JavaScript para sa maayos na karanasan ng user

## Resulta

Ang tapos na resulta ay dapat magmukhang ganito:

![Itim na screen na may isang bayani at 5*5 na mga halimaw](../../../../translated_images/partI-solution.36c53b48c9ffae2a.tl.png)

## Solusyon

Subukan munang lutasin ito sa sarili mo, ngunit kung mahirapan ka, tingnan ang isang [solusyon](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang canvas ng iyong space game sa pamamagitan ng pagdaragdag ng mga visual effects at interactive na elemento gamit ang mga teknik ng Canvas API na natutunan mo.

**Prompt:** Gumawa ng bagong file na tinatawag na `enhanced-canvas.html` na may canvas na nagpapakita ng mga animated na bituin sa background, isang pulsing health bar para sa hero ship, at mga enemy ship na dahan-dahang bumababa. Isama ang JavaScript code na gumuguhit ng kumikislap na mga bituin gamit ang random na posisyon at opacity, nag-iimplementa ng health bar na nagbabago ng kulay batay sa antas ng kalusugan (berde > dilaw > pula), at nag-aanimate ng mga enemy ship upang bumaba sa screen sa iba't ibang bilis.

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Natuto ka na tungkol sa pagguhit gamit ang 2D-focused Canvas API; tingnan ang [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), at subukang gumuhit ng 3D object.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/32)

## Review & Pag-aaral sa Sarili

Alamin pa ang tungkol sa Canvas API sa pamamagitan ng [pagbabasa tungkol dito](https://developer.mozilla.org/docs/Web/API/Canvas_API).

### ⚡ **Ano ang Magagawa Mo sa Susunod na 5 Minuto**
- [ ] Buksan ang console ng browser at gumawa ng canvas element gamit ang `document.createElement('canvas')`
- [ ] Subukang gumuhit ng rectangle gamit ang `fillRect()` sa isang canvas context
- [ ] Mag-eksperimento sa iba't ibang kulay gamit ang `fillStyle` na property
- [ ] Gumuhit ng simpleng bilog gamit ang `arc()` na method

### 🎯 **Ano ang Maaaring Makamit sa Loob ng Isang Oras**
- [ ] Tapusin ang post-lesson quiz at maunawaan ang mga pundasyon ng canvas
- [ ] Gumawa ng application sa pagguhit gamit ang canvas na may iba't ibang hugis at kulay
- [ ] Mag-implement ng paglo-load ng imahe at sprite rendering para sa iyong laro
- [ ] Bumuo ng simpleng animation na gumagalaw ang mga object sa canvas
- [ ] Magpraktis ng mga transformation sa canvas tulad ng scaling, rotation, at translation

### 📅 **Ang Iyong Lingguhang Paglalakbay sa Canvas**
- [ ] Tapusin ang space game na may pinakinis na graphics at sprite animations
- [ ] Masterin ang mga advanced na teknik sa canvas tulad ng gradients, patterns, at compositing
- [ ] Gumawa ng mga interactive na visualization gamit ang canvas para sa representasyon ng data
- [ ] Alamin ang mga teknik sa pag-optimize ng canvas para sa maayos na performance
- [ ] Bumuo ng application sa pagguhit o pagpipinta na may iba't ibang tools
- [ ] Tuklasin ang mga pattern sa creative coding at generative art gamit ang canvas

### 🌟 **Ang Iyong Buwanang Mastery sa Graphics**
- [ ] Bumuo ng mga kumplikadong visual na application gamit ang Canvas 2D at WebGL
- [ ] Alamin ang mga konsepto sa graphics programming at mga batayan ng shader
- [ ] Mag-ambag sa mga open source graphics libraries at visualization tools
- [ ] Masterin ang pag-optimize ng performance para sa mga graphics-intensive na application
- [ ] Gumawa ng educational content tungkol sa canvas programming at computer graphics
- [ ] Maging eksperto sa graphics programming na tumutulong sa iba na lumikha ng mga visual na karanasan

## 🎯 Ang Iyong Timeline sa Mastery ng Canvas Graphics

```mermaid
timeline
    title Canvas API Learning Progression
    
    section Canvas Fundamentals (15 minutes)
        Basic Operations: Element reference
                        : 2D context access
                        : Coordinate system
                        : Simple shape drawing
        
    section Drawing Techniques (20 minutes)
        Graphics Primitives: Rectangles and circles
                           : Colors and styles
                           : Text rendering
                           : Path operations
        
    section Image Handling (25 minutes)
        Asset Management: Image object creation
                        : Async loading patterns
                        : Error handling
                        : Performance optimization
        
    section Game Graphics (30 minutes)
        Sprite Rendering: Positioning algorithms
                        : Formation calculations
                        : Scene composition
                        : Frame rendering
        
    section Advanced Techniques (40 minutes)
        Visual Effects: Transformations
                      : Animations
                      : Layering
                      : State management
        
    section Performance (35 minutes)
        Optimization: Efficient drawing
                    : Memory management
                    : Frame rate control
                    : Asset caching
        
    section Professional Skills (1 week)
        Production Graphics: WebGL integration
                           : Canvas libraries
                           : Game engines
                           : Cross-platform considerations
        
    section Advanced Graphics (1 month)
        Specialized Applications: Data visualization
                                : Interactive art
                                : Real-time effects
                                : 3D graphics
```

### 🛠️ Buod ng Iyong Toolkit sa Canvas Graphics

Pagkatapos ng leksyong ito, mayroon ka na:
- **Mastery sa Canvas API**: Kumpletong pag-unawa sa 2D graphics programming
- **Matematika ng Koordinasyon**: Tumpak na pagpoposisyon at mga algorithm sa layout
- **Pamamahala ng Asset**: Propesyonal na paglo-load ng imahe at paghawak ng error
- **Rendering Pipeline**: Isinasaayos na paraan sa komposisyon ng eksena
- **Graphics ng Laro**: Pagpoposisyon ng sprite at mga kalkulasyon sa pormasyon
- **Async Programming**: Modernong mga pattern ng JavaScript para sa maayos na performance
- **Visual Programming**: Pagsasalin ng mga konsepto ng matematika sa screen graphics

**Mga Aplikasyon sa Tunay na Buhay**: Ang iyong mga kasanayan sa Canvas ay direktang magagamit sa:
- **Data Visualization**: Mga chart, graph, at interactive na dashboard
- **Pagbuo ng Laro**: Mga 2D na laro, simulation, at interactive na karanasan
- **Digital Art**: Creative coding at mga proyekto sa generative art
- **UI/UX Design**: Custom na graphics at mga interactive na elemento
- **Educational Software**: Mga visual na tool sa pag-aaral at simulation
- **Web Applications**: Dynamic na graphics at real-time na visualizations

**Mga Propesyonal na Kasanayan na Nakuha**: Ngayon ay kaya mo nang:
- **Bumuo** ng mga custom na graphics solution nang walang external libraries
- **I-optimize** ang rendering performance para sa maayos na karanasan ng user
- **Mag-debug** ng mga kumplikadong visual na problema gamit ang browser developer tools
- **Magdisenyo** ng scalable graphics systems gamit ang mga prinsipyo ng matematika
- **Mag-integrate** ng Canvas graphics sa modernong web application frameworks

**Mga Canvas API Methods na Na-master Mo**:
- **Pamamahala ng Elemento**: getElementById, getContext
- **Mga Operasyon sa Pagguhit**: fillRect, drawImage, fillStyle
- **Paglo-load ng Asset**: Mga Image object, Promise patterns
- **Matematika sa Pagpoposisyon**: Mga kalkulasyon sa koordinasyon, mga algorithm sa pormasyon

**Susunod na Antas**: Handa ka nang magdagdag ng animation, user interaction, collision detection, o tuklasin ang WebGL para sa 3D graphics!

🌟 **Achievement Unlocked**: Nakatapos ka ng kumpletong sistema ng game rendering gamit ang mga pangunahing teknik ng Canvas API!

## Takdang-Aralin

[Maglaro gamit ang Canvas API](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.