# Construisez un jeu spatial, partie 3: Ajout de mouvement

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/33?loc=fr)

Les jeux ne sont pas très amusants tant que vous n'avez pas des extraterrestres qui courent à l'écran ! Dans ce jeu, nous utiliserons deux types de mouvements:

- **Mouvement clavier/souris**: lorsque l'utilisateur interagit avec le clavier ou la souris pour déplacer un objet à l'écran.
- **Mouvement induit par le jeu**: lorsque le jeu déplace un objet avec un certain intervalle de temps.

Alors, comment déplacer les choses sur un écran ? Tout est question de coordonnées cartésiennes : nous changeons l'emplacement (x,y) de l'objet puis redessinons l'écran.

Généralement, vous devez suivre les étapes suivantes pour accomplir un *mouvement* sur un écran:

1. **Définir un nouvel emplacement** pour un objet; cela est nécessaire pour percevoir l'objet comme ayant bougé.
2. **Effacer l'écran**, l'écran doit être dégagé entre les tirages. Nous pouvons l'effacer en dessinant un rectangle que nous remplissons avec une couleur de fond.
3. **Redessiner l'objet** au nouvel emplacement. En faisant cela, nous accomplissons finalement le déplacement de l'objet d'un endroit à l'autre.

 Voici à quoi cela peut ressembler dans le code:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Pouvez-vous penser à une raison pour laquelle redessiner votre héros plusieurs images par seconde pourrait entraîner des coûts de performance? Apprenez en plus sur les [alternatives à ce modèle](https://www.html5rocks.com/en/tutorials/canvas/performance/).

## Gérer les événements du clavier

Vous gérez les événements en attachant des événements spécifiques au code. Les événements de clavier sont déclenchés sur toute la fenêtre tandis que les événements de souris comme un `clic` peuvent être liés au clic sur un élément spécifique. Nous utiliserons des événements de clavier tout au long de ce projet. 

Pour gérer un événement, vous devez utiliser la méthode `addEventListener()` de la fenêtre et lui fournir deux paramètres d'entrée. Le premier paramètre est le nom de l'événement, par exemple `keyup`. Le deuxième paramètre est la fonction qui doit être invoquée à la suite de l'événement en cours.  

Voici un exemple:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Pour les événements clés, il existe deux propriétés sur l'événement que vous pouvez utiliser pour voir quelle touche a été pressée:

- `key`, il s'agit d'une représentation sous forme de chaîne de la touche enfoncée, par exemple `ArrowUp`
- `keyCode`, c'est une représentation numérique, par exemple '37', correspond à `ArrowLeft`.

✅ La manipulation des événements clés est utile en dehors du développement de jeux. A quelles autres utilisations pensez-vous pour cette technique?

### Touches spéciales: une mise en garde

Il y a des touches *spéciales* qui affectent la fenêtre. Cela signifie que si vous écoutez un événement `keyup` et que vous utilisez ces touches spéciales pour déplacer votre héros, il effectuera également un défilement horizontal. Pour cette raison, vous voudrez peut-être *désactiver* ce comportement de navigateur intégré lorsque vous créez votre jeu. Vous avez besoin d'un code comme celui-ci:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Le code ci-dessus garantira que les touches fléchées et la touche espace ont leur comportement *par défaut* désactivé. Le mécanisme *shut-off* se produit lorsque nous appelons `e.preventDefault()`.

## Mouvement induit par le jeu

Nous pouvons faire bouger les choses d'elles-mêmes en utilisant des minuteries telles que la fonction `setTimeout()` ou `setInterval()` qui met à jour l'emplacement de l'objet à chaque tick ou intervalle de temps. Voici à quoi cela peut ressembler:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## La boucle du jeu

La boucle de jeu est un concept qui est essentiellement une fonction invoquée à intervalles réguliers. C'est ce qu'on appelle la boucle de jeu car tout ce qui doit être visible pour l'utilisateur est attiré dans la boucle. La boucle de jeu utilise tous les objets de jeu qui font partie du jeu, les dessinant tous à moins que, pour une raison quelconque, ils ne fassent plus partie du jeu. Par exemple, si un objet est un ennemi qui a été touché par un laser et qui explose, il ne fait plus partie de la boucle de jeu en cours (vous en apprendrez plus à ce sujet dans les leçons suivantes).

Voici à quoi ressemble généralement une boucle de jeu, exprimée en code:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

La boucle ci-dessus est invoquée toutes les `200` millisecondes pour redessiner le canevas. Vous avez la possibilité de choisir le meilleur intervalle qui a du sens pour votre jeu.

## Continuer le jeu spatial

Vous allez prendre le code existant et l'étendre. Soit commencez par le code que vous avez complété au cours de la partie I, soit utilisez le code de la [Partie II - starter](your-work). 

- **Déplacer le héros**: vous ajouterez du code pour vous assurer de pouvoir déplacer le héros à l'aide des touches fléchées.
- **Déplacer les ennemis**: vous devrez également ajouter du code pour vous assurer que les ennemis se déplacent de haut en bas à un rythme donné.

## Étapes recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-dossier `your-work`. Il doit contenir les éléments suivants:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Vous démarrez votre projet dans le dossier `your_work` en tapant:

```bash
cd your-work
npm start
```

Ce qui précède démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse, pour le moment, cela devrait rendre le héros et tous les ennemis; rien ne bouge - pour l'instant!

### Add code

1. **Add dedicated objects** for `hero` and `enemy` and `game object`, they should have `x` and `y` properties. (Remember the portion on [Inheritance or composition](../README.md) ). 

   *HINT* `game object` should be the one with `x` and `y` and the ability to draw itself to a canvas.

   >tip: start by adding a new GameObject class with its constructor delineated as below, and then draw it to the canvas:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Now, extend this GameObject to create the Hero and Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Add key-event handlers** to handle key navigation (move hero up/down left/right)

   *REMEMBER* it's a cartesian system, top-left is `0,0`. Also remember to add code to stop *default behavior*

   >tip: create your onKeyDown function and attach it to the window:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Check your browser console at this point, and watch the keystrokes being logged. 

3. **Implement** the [Pub sub pattern](../README.md), this will keep your code clean as you follow the remaining parts.

   To do this last part, you can:

   1. **Add an event listener** on the window:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Create an EventEmitter class** to publish and subscribe to messages:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Add constants** and set up the EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Initialize the game**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Setup the game loop**

   Refactor the window.onload function to initialize the game and set up a game loop on a good interval. You'll also add a laser beam:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Add code** to move enemies at a certain interval

    Refactor the `createEnemies()` function to create the enemies and push them into the new gameObjects class:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    and finally, add a `drawGameObjects()` function to start the drawing:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Your enemies should start advancing on your hero spaceship!

---

## 🚀 Challenge

Comme vous pouvez le constater, votre code peut se transformer en 'code spaghetti' lorsque vous commencez à ajouter des fonctions, des variables et des classes. Comment pouvez-vous mieux organiser votre code pour qu'il soit plus lisible ? Esquissez un système pour organiser votre code, même s'il réside toujours dans un seul fichier.

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/34?loc=fr)

## Révision et étude personnelle

Pendant que nous écrivons notre jeu sans utiliser de frameworks, il existe de nombreux frameworks de canevas basés sur JavaScript pour le développement de jeux. Prenez le temps de faire quelques [lectures à ce sujet](https://github.com/collections/javascript-game-engines).

## Affectation

[Commentez votre code](assignment.fr.md)
