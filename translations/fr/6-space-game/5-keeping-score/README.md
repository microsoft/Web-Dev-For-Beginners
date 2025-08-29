<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T13:37:29+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "fr"
}
-->
# Construire un jeu spatial Partie 5 : Score et vies

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/37)

Dans cette leçon, vous apprendrez à ajouter un système de score à un jeu et à calculer les vies.

## Afficher du texte à l'écran

Pour afficher un score de jeu à l'écran, vous devez savoir comment placer du texte sur l'écran. La solution consiste à utiliser la méthode `fillText()` sur l'objet canvas. Vous pouvez également contrôler d'autres aspects comme la police à utiliser, la couleur du texte et même son alignement (gauche, droite, centre). Voici un exemple de code qui dessine du texte à l'écran.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lisez-en davantage sur [comment ajouter du texte à un canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), et n'hésitez pas à rendre votre texte plus esthétique !

## La vie, en tant que concept de jeu

Le concept de vie dans un jeu n'est qu'un nombre. Dans le contexte d'un jeu spatial, il est courant d'attribuer un certain nombre de vies qui sont déduites une par une lorsque votre vaisseau subit des dégâts. Il est agréable de représenter cela graphiquement, par exemple avec des mini-vaisseaux ou des cœurs, plutôt qu'un simple nombre.

## Ce que vous allez construire

Ajoutons les éléments suivants à votre jeu :

- **Score du jeu** : Pour chaque vaisseau ennemi détruit, le héros devrait recevoir des points. Nous suggérons 100 points par vaisseau. Le score du jeu devrait être affiché en bas à gauche.
- **Vies** : Votre vaisseau dispose de trois vies. Vous perdez une vie chaque fois qu'un vaisseau ennemi entre en collision avec vous. Les vies devraient être affichées en bas à droite sous forme de graphique comme celui-ci : ![image de vie](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.fr.png).

## Étapes recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-dossier `your-work`. Il devrait contenir les éléments suivants :

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Démarrez votre projet dans le dossier `your_work` en tapant :

```bash
cd your-work
npm start
```

Cela démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse. À ce stade, vous devriez voir le héros et tous les ennemis, et lorsque vous appuyez sur les flèches gauche et droite, le héros se déplace et peut abattre les ennemis.

### Ajouter du code

1. **Copiez les ressources nécessaires** du dossier `solution/assets/` dans le dossier `your-work`. Vous ajouterez l'asset `life.png`. Ajoutez `lifeImg` à la fonction `window.onload` :

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ajoutez `lifeImg` à la liste des ressources :

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Ajoutez des variables**. Ajoutez du code pour représenter votre score total (0) et le nombre de vies restantes (3), et affichez ces scores à l'écran.

3. **Étendez la fonction `updateGameObjects()`**. Modifiez la fonction `updateGameObjects()` pour gérer les collisions avec les ennemis :

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Ajoutez les vies et les points**. 
   1. **Initialisez les variables**. Sous `this.cooldown = 0` dans la classe `Hero`, définissez les vies et les points :

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Affichez les variables à l'écran**. Dessinez ces valeurs à l'écran :

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

   1. **Ajoutez des méthodes à la boucle de jeu**. Assurez-vous d'ajouter ces fonctions à votre fonction `window.onload` sous `updateGameObjects()` :

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implémentez les règles du jeu**. Implémentez les règles suivantes :

   1. **Pour chaque collision entre le héros et un ennemi**, déduisez une vie.
   
      Étendez la classe `Hero` pour effectuer cette déduction :

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Pour chaque laser qui touche un ennemi**, augmentez le score du jeu de 100 points.

      Étendez la classe `Hero` pour effectuer cet incrément :
    
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

✅ Faites quelques recherches pour découvrir d'autres jeux créés avec JavaScript/Canvas. Quels sont leurs traits communs ?

À la fin de ce travail, vous devriez voir les petits vaisseaux représentant les vies en bas à droite, les points en bas à gauche, et vous devriez voir votre nombre de vies diminuer lorsque vous entrez en collision avec des ennemis et vos points augmenter lorsque vous abattez des ennemis. Bien joué ! Votre jeu est presque terminé.

---

## 🚀 Défi

Votre code est presque complet. Pouvez-vous imaginer les prochaines étapes ?

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/38)

## Révision et étude personnelle

Cherchez des moyens d'incrémenter et de décrémenter les scores et les vies dans un jeu. Il existe des moteurs de jeu intéressants comme [PlayFab](https://playfab.com). Comment l'utilisation de l'un de ces moteurs pourrait-elle améliorer votre jeu ?

## Devoir

[Construire un jeu avec un système de score](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de faire appel à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.