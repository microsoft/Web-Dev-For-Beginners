# Construisez un jeu spatial, partie 3: Ajout de mouvement

## Quiz préalable

[Quiz préalable](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/33?loc=fr)

Les jeux ne sont pas très amusants tant que vous n'avez pas des extraterrestres qui courent à l'écran! Dans ce jeu, nous utiliserons deux types de mouvements:

- **Mouvement clavier/souris**: lorsque l'utilisateur interagit avec le clavier ou la souris pour déplacer un objet à l'écran.
- **Mouvement induit par le jeu**: lorsque le jeu déplace un objet avec un certain intervalle de temps.

Alors, comment déplacer les choses sur un écran? Tout est question de coordonnées cartésiennes: nous changeons l'emplacement (x,y) de l'objet puis redessinons l'écran.

Généralement, vous devez suivre les étapes suivantes pour accomplir un *mouvement* sur un écran:

1. **Définir un nouvel emplacement** pour un objet; cela est nécessaire pour percevoir l'objet comme ayant bougé.
2. **Effacer l'écran**, l'écran doit être dégagé entre les tirages. Nous pouvons l'effacer en dessinant un rectangle que nous remplissons avec une couleur de fond.
3. **Redessiner l'objet** au nouvel emplacement. En faisant cela, nous accomplissons finalement le déplacement de l'objet d'un endroit à l'autre.

 Voici à quoi cela peut ressembler dans le code:

```javascript
//définir l'emplacement du héros
hero.x += 5;
// effacer le rectangle qui accueille le héros
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redessiner le fond du jeu et le héros
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
  // `evt.key` = représentation sous forme de chaîne de la clé
  if (evt.key === 'ArrowUp') {
    // faire quelque chose
  }
})
```

Pour les événements clés, il existe deux propriétés sur l'événement que vous pouvez utiliser pour voir quelle touche a été pressée:

- `key`, il s'agit d'une représentation sous forme de chaîne de la touche enfoncée, par exemple `ArrowUp`
- `keyCode`, c'est une représentation numérique, par exemple `37`, correspond à `ArrowLeft`.

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
    case 40: // Touches directionnelles
    case 32:
      e.preventDefault();
      break; // Espace
    default:
      break; // ne pas bloquer d'autres clés
  }
};

window.addEventListener('keydown', onKeyDown);
```

Le code ci-dessus garantira que les touches fléchées et la touche espace ont leur comportement *par défaut* désactivé. Le mécanisme *shut-off* se produit lorsque nous appelons `e.preventDefault()`.

## Mouvement induit par le jeu

Nous pouvons faire bouger les choses d'elles-mêmes en utilisant des minuteries telles que la fonction `setTimeout()` ou `setInterval()` qui met à jour l'emplacement de l'objet à chaque tick ou intervalle de temps. Voici à quoi cela peut ressembler:

```javascript
let id = setInterval(() => {
  //déplacer l'ennemi sur l'axe y
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

Vous allez prendre le code existant et l'étendre. Soit commencez par le code que vous avez complété au cours de la partie I, soit utilisez le code de la [Partie II - starter](../your-work). 

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

### Ajouter un code

1. **Ajouter des objets dédiés** pour `hero` et `enemy` et `game object`, ils doivent avoir les propriétés `x` et `y`. (Rappelez-vous la partie sur l'[héritage ou la composition](../../translations/README.fr.md)). 

   *CONSEIL* `game object` (l'objet de jeu) doit être celui avec `x` et `y` et la possibilité de se dessiner sur un canevas.

   >astuce: commencez par ajouter une nouvelle classe GameObject avec son constructeur délimité comme ci-dessous, puis dessinez-la sur le canevas:
  
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

    Maintenant, étendez ce GameObject pour créer le héros et l'ennemi.
    
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

2. **Ajoutez des gestionnaires d'événements de touche** pour gérer la navigation des touches (déplacez le héros vers le haut/bas vers la gauche/la droite)

   *RAPPELEZ-VOUS* que c'est un système cartésien, le haut à gauche est `0,0`. N'oubliez pas également d'ajouter du code pour arrêter *le comportement par défaut*

   >astuce: créez votre fonction onKeyDown et attachez-la à la fenêtre:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Vérifiez la console de votre navigateur à ce stade et regardez les frappes enregistrées. 

3. **Implémentez** le [modèle Pub Sub](../../translations/README.fr.md), cela gardera votre code propre pendant que vous suivez les parties restantes.

   Pour faire cette dernière partie, vous pouvez:

   1. **Ajouter un écouteur d'événement** sur la fenêtre:

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

    1. **Créez une classe EventEmitter** pour publier et vous abonner aux messages:

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

    1. **Ajoutez des constantes** et configurez l'EventEmitter:

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
        hero.y -= 5;
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

   Refactorisez la fonction window.onload pour initialiser le jeu et mettre en place une boucle de jeu sur un bon intervalle. Vous ajouterez également un faisceau laser:

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

5. **Ajoutez du code** pour déplacer les ennemis à un certain intervalle

    Refactoriser la fonction `createEnemies()` pour créer les ennemis et les pousser dans la nouvelle classe gameObjects:

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
    
    et ajoutez une fonction `createHero()` pour faire un processus similaire pour le héros.
    
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

    et enfin, ajoutez une fonction `drawGameObjects()` pour démarrer le dessin:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vos ennemis devraient commencer à avancer sur votre vaisseau spatial héros!

---

## 🚀 Challenge

Comme vous pouvez le constater, votre code peut se transformer en 'code spaghetti' lorsque vous commencez à ajouter des fonctions, des variables et des classes. Comment pouvez-vous mieux organiser votre code pour qu'il soit plus lisible? Esquissez un système pour organiser votre code, même s'il réside toujours dans un seul fichier.

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/34?loc=fr)

## Révision et étude personnelle

Pendant que nous écrivons notre jeu sans utiliser de frameworks, il existe de nombreux frameworks de canevas basés sur JavaScript pour le développement de jeux. Prenez le temps de faire quelques [lectures à ce sujet](https://github.com/collections/javascript-game-engines).

## Affectation

[Commentez votre code](assignment.fr.md)
