# Construire un jeu de l'espace - Partie 5 : scores et vies

## Quiz de pré-lecture

[Quiz de pré-lecture](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/37?loc=fr)

Dans cette leçon, vous apprendrez à ajouter des points à un jeu et à calculer des vies.

## Dessiner du texte à l'écran

Pour pouvoir afficher un score de jeu à l'écran, vous devez savoir comment placer du texte à l'écran. La réponse est d'utiliser la méthode `fillText()` sur l'objet canvas. Vous pouvez également contrôler d'autres aspects comme la police à utiliser, la couleur du texte et même son alignement (gauche, droite, centre). Vous trouverez ci-dessous du code permettant d'afficher du texte à l'écran.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ En savoir plus sur [comment ajouter du texte à un canvas ](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), et n'hésitez pas à rendre le vôtre plus sophistiqué !

## La vie, comme concept de jeu

Le concept d'avoir une vie dans un jeu n'est qu'un nombre. Dans le contexte d'un jeu spatial, il est courant d'attribuer un ensemble de vies qui sont réduites une par une lorsque votre vaisseau subit des dégâts. C'est bien si vous pouvez montrer une représentation graphique de ceci comme des mini vaisseaux ou des cœurs au lieu d'un nombre.

## Ce qu'il faut construire

Ajoutons les éléments suivants à votre jeu :

- **Score de jeu** : Pour chaque navire ennemi détruit, le héros devrait recevoir quelques points, nous suggérons 100 points par navire. Le score du jeu devrait être affiché en bas à gauche.
- **Vie** : Votre navire a trois vies. Vous perdez une vie chaque fois qu'un navire ennemi entre en collision avec vous. Un score de vie devrait être affiché en bas à droite et être composé du graphique suivant [image de vie](solution/assets/life.png).

## Étapes recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-répertoire `your-work`. Il devrait contenir les éléments suivants :

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Vous démarrez votre projet dans le dossier `your_work` en tapant :

```bash
cd your-work
npm start
```

Ce qui précède va démarrer un serveur HTTP sur l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse, pour l'instant il devrait afficher le héros et tous les ennemis, et lorsque vous appuyez sur vos flèches gauche et droite, le héros se déplace et peut abattre les ennemis.

### Ajouter du code

1. **Copiez les éléments nécessaires** du dossier `solution/assets/` dans le dossier `your-work` ; vous allez ajouter un élément `life.png`. Ajoutez l'image lifeImg à la fonction window.onload :

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ajoutez le `lifeImg` à la liste des éléments :

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Ajoutez des variables**. Ajoutez le code qui représente votre score total (0) et les vies restantes (3), affichez ces scores sur un écran.

3. **Étendre la fonction `updateGameObjects()`**. Étendre la fonction `updateGameObjects()` pour gérer les collisions avec les ennemis :

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Ajouter `life` et `points`**. 
   1. **Initialiser les variables**. Sous `this.cooldown = 0` dans la classe `Hero` , définissez la vie et les points :

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Dessinez les variables à l'écran**. Dessinez ces valeurs à l'écran :

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Ajouter des méthodes à la boucle de jeu**. Assurez-vous d'ajouter ces fonctions à votre fonction window.onload sous `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Mettre en œuvre les règles du jeu**. Mettez en œuvre les règles du jeu suivantes :

   1. **Pour chaque collision entre héros et ennemis**, retirez une vie.
   
      Étendez la classe `Hero` pour faire cette suppression:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Pour chaque laser qui touche un ennemi**, augmentez le score du jeu de 100 points.

      Étendez la classe Hero pour faire cet ajout :
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Ajoutez ces fonctions à vos émetteurs d'événements de collision :

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Faites une petite recherche pour découvrir d'autres jeux créés à l'aide de JavaScript/Canvas. Quels sont leurs points communs ?

À la fin de ce travail, vous devriez voir les petits vaisseaux de "vie" en bas à droite, les points en bas à gauche, et vous devriez voir votre compte de vie diminuer lorsque vous entrez en collision avec des ennemis et vos points augmenter lorsque vous tirez sur des ennemis. Bien joué ! Votre jeu est presque terminé.

---

## 🚀 Challenge

Votre code est presque complet. Pouvez-vous envisager vos prochaines étapes ?

## Quiz post-lecture

[Quiz post-lecture](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/38?loc=fr)

## Révision et autoformation

Recherchez des moyens d'incrémenter et de décrémenter les scores et les vies. Il existe des moteurs de jeu intéressants comme [PlayFab](https://playfab.com). Comment l'utilisation de l'un d'eux pourrait-elle améliorer votre jeu ?

## Travail à faire

[Construire un jeu de score](assignment.fr.md)
