# Construisez un jeu spatial, partie 2 : dessinez des héros et des monstres sur le canevas

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/31?loc=fr)

## Le canevas

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

Le Canvas utilise un système de coordonnées cartésiennes pour dessiner des choses. Ainsi, il utilise un axe x et un axe y pour exprimer où se trouve quelque chose. L'emplacement `0,0` est la position en haut à gauche et en bas à droite ce que vous appelez également la LARGEUR et la HAUTEUR du canevas.

![la grille du canevas](../canvas_grid.png)
> Image de [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Pour dessiner sur l'élément de canevas, vous devrez suivre les étapes suivantes:

1. **Obtenir une référence** à l'élément Canvas.
1. **Obtenez une référence** sur l'élément Context qui se trouve sur l'élément canvas.
1. **Effectuez une opération de dessin** à l'aide de l'élément de contexte.

Le code pour les étapes ci-dessus ressemble communément à ceci:

```javascript
// dessine un rectangle rouge
//1. obtenir la référence du canevas
canvas = document.getElementById("myCanvas");

//2. définir le contexte en 2D pour dessiner des formes de base
ctx = canvas.getContext("2d");

//3. le remplir avec la couleur rouge
ctx.fillStyle = 'red';

//4. et dessiner un rectangle avec ces paramètres, en définissant l'emplacement et la taille
ctx.fillRect(0,0, 200, 200) // x,y, largeur, hauteur
```

✅ L'API Canvas se concentre principalement sur les formes 2D, mais vous pouvez également dessiner des éléments 3D sur un site Web ; pour cela, vous pouvez utiliser l'[API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Vous pouvez dessiner toutes sortes de choses avec l'API Canvas comme:

- **Des formes géométriques**, nous avons déjà montré comment dessiner un rectangle, mais il y a beaucoup plus que vous pouvez dessiner.
- **Du texte**, vous pouvez dessiner un texte avec la police et la couleur de votre choix.
- **Des images**, vous pouvez dessiner une image basée sur un élément d'image comme un .jpg ou .png par exemple.

✅ Essayez-le ! Vous savez dessiner un rectangle, pouvez-vous dessiner un cercle sur une page ? Jetez un œil à quelques dessins Canvas intéressants sur CodePen. Voici un [exemple particulièrement impressionnant](https://codepen.io/dissimulate/pen/KrAwx).

## Charger et dessiner un élément d'image

Vous chargez une ressource image en créant un objet `Image` et définissez sa propriété `src`. Ensuite, vous écoutez l'événement `load` pour savoir quand il est prêt à être utilisé. Le code ressemble à ceci:

### Charger l'élément

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image chargée et prête à être utilisée
}
```

### Charger le modèle d'élément

Il est recommandé d'envelopper ce qui précède dans une construction comme celle-ci, il est donc plus facile à utiliser et vous n'essayez de le manipuler que lorsqu'il est complètement chargé:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image chargée et prête à être utilisée
      resolve(img);
    }
  })
}

// utiliser comme celà

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

Pour dessiner les ressources du jeu sur un écran, votre code ressemblerait à ceci:

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

## Il est maintenant temps de commencer à créer votre jeu

### Quoi construire

Vous allez créer une page Web avec un élément Canvas. Il devrait rendre un écran noir `1024*768`. Nous vous avons fourni deux images:

- Navire héros

   ![Hero ship](../solution/assets/player.png)

- Monstre 5*5

   ![Monster ship](../solution/assets/enemyShip.png)

### Étapes recommandées pour commencer le développement

Recherchez les fichiers qui ont été créés pour vous dans le sous-dossier `your-work`. Il doit contenir les éléments suivants:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Ouvrez la copie de ce dossier dans Visual Studio Code. Vous devez disposer d'une configuration d'environnement de développement local, de préférence avec Visual Studio Code ainsi que NPM et Node installés. Si `npm` n'est pas configuré sur votre ordinateur, [voici comment procéder](https://www.npmjs.com/get-npm).

Démarrez votre projet en accédant au dossier `your_work`:

```bash
cd your-work
npm start
```

Ce qui précède démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et saisissez cette adresse. C'est une page blanche actuellement, mais cela va changer

> Remarque : pour voir les changements sur votre écran, actualisez votre navigateur.

### Ajouter du code

Ajoutez le code nécessaire à `your-work/app.js` pour résoudre le problème ci-dessous

1. **Dessinez** un canevas avec un fond noir
   > astuce : ajoutez deux lignes sous le TODO approprié dans `/app.js`, en définissant l'élément `ctx` sur noir et les coordonnées haut/gauche à 0,0 et la hauteur et la largeur à égales à celles du canevas.
2. **Charger** les textures
   > astuce : ajoutez les images du joueur et de l'ennemi en utilisant `await loadTexture` et en passant le chemin de l'image. Vous ne les verrez pas encore à l'écran!
3. **Dessinez** le héros au centre de l'écran dans la moitié inférieure
   > astuce : utilisez l'API `drawImage` pour dessiner heroImg à l'écran, en définissant `canvas.width / 2 - 45` et `canvas.height - canvas.height / 4)`;
4. **Dessinez** les monstres 5*5
   > astuce : vous pouvez maintenant décommenter le code pour dessiner les ennemis à l'écran. Ensuite, allez à la fonction `createEnemies` et compilez la.

   Tout d'abord, configurez quelques constantes:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    Ensuite, créez une boucle pour dessiner le tableau de monstres sur l'écran:

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
