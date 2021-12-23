# Construisez un jeu spatial, partie 2 : dessinez des héros et des monstres sur le canvas

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/31?loc=fr)

## Le Canvas

Le canevas est un élément HTML qui par défaut n'a pas de contenu ; c'est une ardoise vierge. Vous devez dessiner dessus pour y ajouter quelque chose.

✅ Lisez en [plus sur l'API Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) sur MDN.

Voici comment il est généralement déclaré, dans le corps de la page:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Ci-dessus, nous définissons `id`, `width` et `height`.

- `id`: définissez-le pour obtenir une référence lorsque vous avez besoin d'interagir avec lui.
- `width`: c'est la largeur de l'élément.
- `height`: c'est la hauteur de l'élément.

## Dessiner une géométrie simple

Le Canvas utilise un système de coordonnées cartésiennes pour dessiner des choses. Ainsi, il utilise un axe x et un axe y pour exprimer où se trouve quelque chose. L'emplacement `0,0` est la position en haut à gauche et en bas à droite ce que vous appelez également la LARGEUR et la HAUTEUR du canvas.

![la grille du canvas](../canvas_grid.png)
> Image de [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Pour dessiner sur l'élément canvas, vous devrez suivre les étapes suivantes:

1. **Obtenir une référence** à l'élément Canvas.
1. **Obtenez une référence** sur l'élément Context qui se trouve sur l'élément canvas.
1. **Effectuez une opération de dessin** à l'aide de l'élément de contexte.

Le code pour les étapes ci-dessus ressemble communément à ceci:

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

✅ L'API Canvas se concentre principalement sur les formes 2D, mais vous pouvez également dessiner des éléments 3D sur un site Web ; pour cela, vous pouvez utiliser l'[API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Vous pouvez dessiner toutes sortes de choses avec l'API Canvas comme:

- **Des formes géométriques**, nous avons déjà montré comment dessiner un rectangle, mais il y a beaucoup plus que vous pouvez dessiner.
- **Du texte**, vous pouvez dessiner un texte avec la police et la couleur de votre choix.
- **Images**, you can draw an image based off of an image asset like a .jpg or .png for example.

✅ Try it! You know how to draw a rectangle, can you draw a circle to a page? Take a look at some interesting Canvas drawings on CodePen. Here's a [particularly impressive example](https://codepen.io/dissimulate/pen/KrAwx).

## Load and draw an image asset

You load an image asset by creating an `Image` object and set its `src` property. Then you listen to the `load` event to know when it's ready to be used. The code looks like this:

### Load asset

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Load asset pattern

It's recommended to wrap the above in a construct like so, so it's easier to use and you only try to manipulate it when it's fully loaded:

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

To draw game assets to a screen, your code would look like this:

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

## Now it's time to start building your game

### What to build

You will build a web page with a Canvas element. It should render a black screen `1024*768`. We've provided you with two images:

- Hero ship

   ![Hero ship](solution/assets/player.png)

- 5*5 monster

   ![Monster ship](solution/assets/enemyShip.png)

### Recommended steps to start development

Locate the files that have been created for you in the `your-work` sub folder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Open the copy of this folder in Visual Studio Code. You need to have a local development environment setup, preferably with Visual Studio Code with NPM and Node installed. If you don't have `npm` set up on your computer, [here's how to do that](https://www.npmjs.com/get-npm).

Start your project by navigating to the `your_work` folder:

```bash
cd your-work
npm start
```

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address. It's a blank page right now, but that will change

> Note: to see changes on your screen, refresh your browser.

### Add code

Add the needed code to `your-work/app.js` to solve the below

1. **Draw** a canvas with black background
   > tip: add two lines under the appropriate TODO in `/app.js`, setting the `ctx` element to be black and the top/left coordinates to be at 0,0 and the height and width to equal that of the canvas.
2. **Load** textures
   > tip: add the player and enemy images using `await loadTexture` and passing in the image path. You won't see them on the screen yet!
3. **Draw** hero in the center of the screen in the bottom half
   > tip: use the `drawImage` API to draw heroImg to the screen, setting  `canvas.width / 2 - 45` and `canvas.height - canvas.height / 4)`;
4. **Draw** 5*5 monsters
   > tip: Now you can uncomment the code to draw enemies on the screen. Next, go to the `createEnemies` function and build it out.

   First, set up some constants:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    then, create a loop to draw the array of monsters onto the screen:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Résultat

Le résultat final devrait ressembler à ça:

![Un écran noir avec un héros et 5*5 monstres](../partI-solution.png)

## Solution

Veuillez d'abord essayer de le résoudre vous-même, mais si vous êtes bloqué, jetez un œil à une [solution](../solution/app.js)

---

## 🚀 Challenge

Vous avez appris à dessiner avec l'API Canvas axée sur la 2D ; jetez un œil à l'[API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API), et essayez de dessiner un objet 3D.

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/32?loc=fr)

## Révision et étude personnelle

En savoir plus sur l'API Canvas en [lisant à ce sujet](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Affectation

[Jouer avec l'API Canvas](assignment.fr.md)