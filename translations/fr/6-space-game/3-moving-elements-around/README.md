<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-23T22:56:13+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "fr"
}
-->
# Construire un jeu spatial Partie 3 : Ajouter du mouvement

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/33)

Les jeux ne sont pas très amusants tant que vous n'avez pas des aliens qui se déplacent à l'écran ! Dans ce jeu, nous allons utiliser deux types de mouvements :

- **Mouvement clavier/souris** : lorsque l'utilisateur interagit avec le clavier ou la souris pour déplacer un objet à l'écran.
- **Mouvement induit par le jeu** : lorsque le jeu déplace un objet à un certain intervalle de temps.

Alors, comment déplace-t-on des objets à l'écran ? Tout repose sur les coordonnées cartésiennes : on modifie la position (x, y) de l'objet, puis on redessine l'écran.

En général, voici les étapes nécessaires pour accomplir un *mouvement* à l'écran :

1. **Définir une nouvelle position** pour un objet ; cela est nécessaire pour donner l'impression que l'objet s'est déplacé.
2. **Effacer l'écran**, l'écran doit être nettoyé entre chaque dessin. On peut le faire en dessinant un rectangle rempli d'une couleur de fond.
3. **Redessiner l'objet** à sa nouvelle position. En faisant cela, on parvient finalement à déplacer l'objet d'un endroit à un autre.

Voici à quoi cela peut ressembler en code :

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

✅ Pouvez-vous penser à une raison pour laquelle redessiner votre héros plusieurs fois par seconde pourrait entraîner des coûts de performance ? Lisez à propos des [alternatives à ce modèle](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Gérer les événements clavier

Vous gérez les événements en attachant des événements spécifiques à du code. Les événements clavier sont déclenchés sur l'ensemble de la fenêtre, tandis que les événements souris comme un `click` peuvent être liés à un élément spécifique. Nous utiliserons des événements clavier tout au long de ce projet.

Pour gérer un événement, vous devez utiliser la méthode `addEventListener()` de la fenêtre et lui fournir deux paramètres d'entrée. Le premier paramètre est le nom de l'événement, par exemple `keyup`. Le second paramètre est la fonction qui doit être invoquée lorsque l'événement se produit.

Voici un exemple :

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Pour les événements clavier, il existe deux propriétés sur l'événement que vous pouvez utiliser pour voir quelle touche a été pressée :

- `key`, c'est une représentation sous forme de chaîne de la touche pressée, par exemple `ArrowUp`.
- `keyCode`, c'est une représentation sous forme de nombre, par exemple `37`, qui correspond à `ArrowLeft`.

✅ La manipulation des événements clavier est utile en dehors du développement de jeux. À quels autres usages pouvez-vous penser pour cette technique ?

### Touches spéciales : une mise en garde

Il existe certaines touches *spéciales* qui affectent la fenêtre. Cela signifie que si vous écoutez un événement `keyup` et que vous utilisez ces touches spéciales pour déplacer votre héros, cela entraînera également un défilement horizontal. Pour cette raison, vous pourriez vouloir *désactiver* ce comportement intégré du navigateur lorsque vous développez votre jeu. Vous avez besoin de code comme celui-ci :

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

Le code ci-dessus garantira que les touches fléchées et la touche espace ont leur comportement *par défaut* désactivé. Le mécanisme de *désactivation* se produit lorsque nous appelons `e.preventDefault()`.

## Mouvement induit par le jeu

Nous pouvons faire bouger des objets par eux-mêmes en utilisant des minuteries comme les fonctions `setTimeout()` ou `setInterval()` qui mettent à jour la position de l'objet à chaque tick ou intervalle de temps. Voici à quoi cela peut ressembler :

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## La boucle de jeu

La boucle de jeu est un concept qui est essentiellement une fonction invoquée à intervalles réguliers. On l'appelle la boucle de jeu car tout ce qui doit être visible pour l'utilisateur est dessiné dans cette boucle. La boucle de jeu utilise tous les objets du jeu qui en font partie, en les dessinant tous sauf si, pour une raison quelconque, ils ne doivent plus faire partie du jeu. Par exemple, si un objet est un ennemi qui a été touché par un laser et explose, il ne fait plus partie de la boucle de jeu actuelle (vous en apprendrez davantage à ce sujet dans les leçons suivantes).

Voici à quoi une boucle de jeu peut typiquement ressembler, exprimée en code :

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

La boucle ci-dessus est invoquée toutes les `200` millisecondes pour redessiner le canvas. Vous avez la possibilité de choisir l'intervalle qui convient le mieux à votre jeu.

## Poursuivre le jeu spatial

Vous allez prendre le code existant et l'étendre. Soit vous commencez avec le code que vous avez terminé lors de la partie I, soit vous utilisez le code de [Partie II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Déplacer le héros** : vous ajouterez du code pour permettre de déplacer le héros à l'aide des touches fléchées.
- **Déplacer les ennemis** : vous devrez également ajouter du code pour que les ennemis se déplacent de haut en bas à un rythme donné.

## Étapes recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-dossier `your-work`. Il devrait contenir les éléments suivants :

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Vous démarrez votre projet dans le dossier `your_work` en tapant :

```bash
cd your-work
npm start
```

Cela démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse, pour l'instant cela devrait afficher le héros et tous les ennemis ; rien ne bouge - encore !

### Ajouter du code

1. **Ajouter des objets dédiés** pour `hero`, `enemy` et `game object`, ils devraient avoir des propriétés `x` et `y`. (Rappelez-vous la partie sur [Héritage ou composition](../README.md)).

   *ASTUCE* `game object` devrait être celui avec `x` et `y` et la capacité de se dessiner sur un canvas.

   >astuce : commencez par ajouter une nouvelle classe GameObject avec son constructeur défini comme ci-dessous, puis dessinez-la sur le canvas :
  
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

    Maintenant, étendez ce GameObject pour créer le Hero et Enemy.
    
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

2. **Ajouter des gestionnaires d'événements clavier** pour gérer la navigation (déplacer le héros vers le haut/bas gauche/droite).

   *RAPPELEZ-VOUS* c'est un système cartésien, en haut à gauche est `0,0`. Rappelez-vous également d'ajouter du code pour arrêter le *comportement par défaut*.

   >astuce : créez votre fonction onKeyDown et attachez-la à la fenêtre :

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Vérifiez la console de votre navigateur à ce stade, et observez les frappes de touches qui sont enregistrées.

3. **Implémenter** le [modèle Pub/Sub](../README.md), cela gardera votre code propre pour les parties restantes.

   Pour réaliser cette dernière partie, vous pouvez :

   1. **Ajouter un écouteur d'événements** sur la fenêtre :

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

    1. **Créer une classe EventEmitter** pour publier et s'abonner à des messages :

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

    1. **Ajouter des constantes** et configurer l'EventEmitter :

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

    1. **Initialiser le jeu**

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

1. **Configurer la boucle de jeu**

   Refactorisez la fonction window.onload pour initialiser le jeu et configurer une boucle de jeu à un bon intervalle. Vous ajouterez également un rayon laser :

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

5. **Ajouter du code** pour déplacer les ennemis à un certain intervalle.

    Refactorisez la fonction `createEnemies()` pour créer les ennemis et les ajouter à la nouvelle classe gameObjects :

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
    
    et ajoutez une fonction `createHero()` pour effectuer un processus similaire pour le héros.
    
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

    et enfin, ajoutez une fonction `drawGameObjects()` pour commencer le dessin :

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vos ennemis devraient commencer à avancer vers votre vaisseau spatial héros !

---

## 🚀 Défi

Comme vous pouvez le constater, votre code peut devenir un "code spaghetti" lorsque vous commencez à ajouter des fonctions, des variables et des classes. Comment pouvez-vous mieux organiser votre code pour qu'il soit plus lisible ? Dessinez un système pour organiser votre code, même s'il reste dans un seul fichier.

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/34)

## Révision et étude personnelle

Bien que nous écrivions notre jeu sans utiliser de frameworks, il existe de nombreux frameworks basés sur JavaScript pour le développement de jeux sur canvas. Prenez le temps de faire des [recherches à ce sujet](https://github.com/collections/javascript-game-engines).

## Devoir

[Commentez votre code](assignment.md)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.