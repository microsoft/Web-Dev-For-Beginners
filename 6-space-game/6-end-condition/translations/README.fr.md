# Construire un jeu de l'espace Partie 6: Fin et redémarrage

## Quiz de prélecture

[Quiz de prélecture](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39?loc=fr)

Il existe différentes façons d'exprimer et de terminer une condition dans un jeu. C'est à vous, en tant que créateur du jeu, de dire pourquoi le jeu est terminé. Voici quelques raisons, si nous supposons que nous parlons du jeu spatial que vous avez construit jusqu'à présent:

- **`N`Les navires ennemis ont été détruits**: Si vous divisez un jeu en plusieurs niveaux, il est assez fréquent que vous deviez détruire `N` vaisseaux ennemis pour terminer un niveau.
- **Votre navire a été détruit**: Il y a certainement des jeux où vous perdez la partie si votre vaisseau est détruit. Une autre approche commune est que vous avez le concept de vies. Chaque fois que votre vaisseau est détruit, une vie est déduite. Une fois que toutes les vies ont été perdues, vous perdez la partie.
- **Vous avez collecté `N` points**: Une autre condition de fin commune est que vous accumuliez des points. La façon dont vous obtenez des points dépend de vous, mais il est assez courant d'attribuer des points à diverses activités comme la destruction d'un navire ennemi ou la collecte d'objets que les objets *laissent tomber* lorsqu'ils sont détruits.
- **Compléter un niveau**: Cela peut impliquer plusieurs conditions telles que `X` navires ennemis détruits, `Y` points collectés ou peut-être qu'un objet spécifique a été collecté.


## Redémarrage

Si les gens apprécient votre jeu, ils auront probablement envie d'y rejouer. Lorsque le jeu se termine, quelle qu'en soit la raison, vous devez proposer une alternative pour recommencer.

✅ Réfléchissez un peu aux conditions dans lesquelles vous constatez qu'une partie se termine, puis à la manière dont vous êtes invité à la reprendre.

## Ce qu'il faut construire

Vous allez ajouter ces règles à votre jeu:

1. **Gagner la partie**. Une fois que tous les navires ennemis ont été détruits, vous gagnez la partie. Affichez en outre une sorte de message de victoire.
1. **Démarrer**. Une fois que toutes les vies sont perdues ou que la partie est gagnée, vous devez proposer un moyen de redémarrer la partie. N'oubliez pas! Vous devrez réinitialiser le jeu et l'état précédent du jeu devra être effacé.

## Mesures recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-répertoire `your-work`. Il devrait contenir les éléments suivants:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Vous démarrez votre projet dans le dossier `your_work` en tapant:

```bash
cd your-work
npm start
```

Ce qui précède va démarrer un serveur HTTP sur l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse. Votre jeu devrait être dans un état jouable.

> astuce: pour éviter les avertissements dans Visual Studio Code, modifiez la fonction `window.onload` pour appeler `gameLoopId` tel quel (sans `let`), et déclarez le gameLoopId en haut du fichier, indépendamment: `let gameLoopId;`

### Ajouter du code

1. **Condition de fin de parcours**. Ajoutez du code qui garde la trace du nombre d'ennemis, ou si le vaisseau du héros a été détruit en ajoutant ces deux fonctions:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Ajouter de la logique aux gestionnaires de messages**. Modifiez le `eventEmitter` pour gérer ces conditions:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Ajouter de nouveaux types de messages**. Ajoutez ces messages à l'objet constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

1. **Ajouter le code de redémarrage** code qui redémarre le jeu à la pression d'un bouton sélectionné.

   1. **Écouter la touche pressée `Enter`**. Modifiez l'eventListener de votre fenêtre pour écouter cette pression:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Ajouter un message de redémarrage**. Ajoutez ce message à votre constante Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Mettre en œuvre les règles du jeu**.  Mettez en œuvre les règles du jeu suivantes:

   1. **Condition de victoire du joueur**. Lorsque tous les navires ennemis sont détruits, affichez un message de victoire.

      1. Tout d'abord, créez une fonction `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Créez une fonction `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **Logique de redémarrage**. Lorsque toutes les vies sont perdues ou que le joueur a gagné la partie, affichez que le jeu peut être redémarré. En outre, redémarrez le jeu lorsque la touche *redémarrage* est enfoncée (vous pouvez décider quelle touche doit être affectée au redémarrage).

      1. Créez la fonction `resetGame()`:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. Ajoutez un appel au `eventEmitter` pour réinitialiser le jeu dans `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Ajoutez une fonction `clear()` à l'EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Félicitations, capitaine! Ton jeu est terminé! Bien joué! 🚀 💥 👽

---

## 🚀 Défi

Ajoutez un son! Pouvez-vous ajouter un son pour améliorer votre jeu, par exemple lorsqu'un laser est touché, ou lorsque le héros meurt ou gagne? Jetez un coup d'œil à ce [bac à sable](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) pour apprendre à jouer un son en utilisant JavaScript.

## Quiz post-lecture

[Quiz post-lecture](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40?loc=fr)

## Révision et autoformation

Votre mission consiste à créer un nouveau jeu type. Explorez donc certains des jeux intéressants qui existent pour voir quel type de jeu vous pourriez créer.

## Travail à faire

[Créer un jeu type](assignment.fr.md)
