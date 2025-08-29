<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T13:37:45+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "fr"
}
-->
# Construire un jeu spatial Partie 4 : Ajouter un laser et détecter les collisions

## Quiz avant le cours

[Quiz avant le cours](https://ff-quizzes.netlify.app/web/quiz/35)

Dans cette leçon, vous apprendrez à tirer des lasers avec JavaScript ! Nous allons ajouter deux éléments à notre jeu :

- **Un laser** : ce laser est tiré depuis le vaisseau de votre héros et se déplace verticalement vers le haut.
- **Détection de collisions**, dans le cadre de la mise en œuvre de la capacité de *tirer*, nous ajouterons également quelques règles intéressantes au jeu :
   - **Laser touche un ennemi** : l'ennemi meurt s'il est touché par un laser.
   - **Laser touche le haut de l'écran** : un laser est détruit s'il atteint la partie supérieure de l'écran.
   - **Collision entre ennemi et héros** : un ennemi et le héros sont détruits s'ils se percutent.
   - **Ennemi atteint le bas de l'écran** : un ennemi et un héros sont détruits si l'ennemi atteint le bas de l'écran.

En résumé, vous -- *le héros* -- devez toucher tous les ennemis avec un laser avant qu'ils n'atteignent le bas de l'écran.

✅ Faites quelques recherches sur le tout premier jeu informatique jamais créé. Quelle était sa fonctionnalité ?

Soyons héroïques ensemble !

## Détection de collisions

Comment détecter les collisions ? Nous devons considérer nos objets de jeu comme des rectangles en mouvement. Pourquoi, vous demandez-vous peut-être ? Eh bien, l'image utilisée pour dessiner un objet de jeu est un rectangle : elle possède un `x`, un `y`, une `largeur` et une `hauteur`.

Si deux rectangles, c'est-à-dire un héros et un ennemi, *se croisent*, il y a une collision. Ce qui doit se produire ensuite dépend des règles du jeu. Pour implémenter la détection de collisions, vous avez donc besoin des éléments suivants :

1. Un moyen d'obtenir une représentation rectangulaire d'un objet de jeu, comme ceci :

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Une fonction de comparaison, qui peut ressembler à ceci :

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Comment détruire des objets

Pour détruire des objets dans un jeu, vous devez informer le jeu qu'il ne doit plus peindre cet élément dans la boucle de jeu qui se déclenche à un certain intervalle. Une façon de le faire est de marquer un objet de jeu comme *mort* lorsqu'un événement se produit, comme ceci :

```javascript
// collision happened
enemy.dead = true
```

Ensuite, vous pouvez procéder à l'élimination des objets *morts* avant de repeindre l'écran, comme ceci :

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Comment tirer un laser

Tirer un laser revient à répondre à un événement de touche et à créer un objet qui se déplace dans une certaine direction. Nous devons donc effectuer les étapes suivantes :

1. **Créer un objet laser** : à partir du sommet du vaisseau de notre héros, qui commence à se déplacer vers le haut dès sa création.
2. **Associer du code à un événement de touche** : nous devons choisir une touche du clavier qui représente le joueur tirant le laser.
3. **Créer un objet de jeu qui ressemble à un laser** lorsque la touche est pressée.

## Temps de recharge pour notre laser

Le laser doit être tiré chaque fois que vous appuyez sur une touche, comme *espace* par exemple. Pour éviter que le jeu ne produise trop de lasers en peu de temps, nous devons corriger cela. La solution consiste à implémenter ce qu'on appelle un *temps de recharge*, un minuteur, qui garantit qu'un laser ne peut être tiré qu'à intervalles réguliers. Vous pouvez l'implémenter de la manière suivante :

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Reportez-vous à la leçon 1 de la série sur le jeu spatial pour vous rappeler ce qu'est un *temps de recharge*.

## Ce que vous allez construire

Vous allez prendre le code existant (que vous devriez avoir nettoyé et refactorisé) de la leçon précédente et l'étendre. Commencez soit avec le code de la partie II, soit avec le code de [Partie III - starter](../../../../../../../../../your-work).

> astuce : le laser avec lequel vous allez travailler est déjà dans votre dossier d'actifs et référencé par votre code.

- **Ajoutez la détection de collisions**, lorsque un laser entre en collision avec quelque chose, les règles suivantes doivent s'appliquer :
   1. **Laser touche un ennemi** : l'ennemi meurt s'il est touché par un laser.
   2. **Laser touche le haut de l'écran** : un laser est détruit s'il atteint la partie supérieure de notre écran.
   3. **Collision entre ennemi et héros** : un ennemi et le héros sont détruits s'ils se percutent.
   4. **Ennemi atteint le bas de l'écran** : un ennemi et un héros sont détruits si l'ennemi atteint le bas de l'écran.

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

Cela démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et entrez cette adresse, pour l'instant, cela devrait afficher le héros et tous les ennemis, rien ne bouge - encore :).

### Ajoutez du code

1. **Configurez une représentation rectangulaire de votre objet de jeu pour gérer les collisions** Le code ci-dessous vous permet d'obtenir une représentation rectangulaire d'un `GameObject`. Modifiez votre classe GameObject pour l'étendre :

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Ajoutez du code qui vérifie les collisions** Cela sera une nouvelle fonction qui teste si deux rectangles se croisent :

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Ajoutez la capacité de tirer des lasers**
   1. **Ajoutez un message d'événement de touche**. La touche *espace* doit créer un laser juste au-dessus du vaisseau du héros. Ajoutez trois constantes dans l'objet Messages :

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Gérez la touche espace**. Modifiez la fonction `window.addEventListener` keyup pour gérer la touche espace :

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Ajoutez des écouteurs**. Modifiez la fonction `initGame()` pour garantir que le héros peut tirer lorsque la barre d'espace est pressée :

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       et ajoutez une nouvelle fonction `eventEmitter.on()` pour garantir le comportement lorsqu'un ennemi entre en collision avec un laser :

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Déplacez l'objet**, Assurez-vous que le laser se déplace progressivement vers le haut de l'écran. Vous allez créer une nouvelle classe Laser qui étend `GameObject`, comme vous l'avez fait auparavant : 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Gérez les collisions**, Implémentez les règles de collision pour le laser. Ajoutez une fonction `updateGameObjects()` qui teste les objets en collision :

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Assurez-vous d'ajouter `updateGameObjects()` dans votre boucle de jeu dans `window.onload`.

   4. **Implémentez un temps de recharge** pour le laser, afin qu'il ne puisse être tiré qu'à intervalles réguliers.

      Enfin, modifiez la classe Hero pour qu'elle puisse gérer le temps de recharge :

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

À ce stade, votre jeu a une certaine fonctionnalité ! Vous pouvez naviguer avec vos touches fléchées, tirer un laser avec votre barre d'espace, et les ennemis disparaissent lorsque vous les touchez. Bien joué !

---

## 🚀 Défi

Ajoutez une explosion ! Consultez les actifs du jeu dans [le dépôt Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) et essayez d'ajouter une explosion lorsque le laser touche un alien.

## Quiz après le cours

[Quiz après le cours](https://ff-quizzes.netlify.app/web/quiz/36)

## Révision et étude personnelle

Expérimentez avec les intervalles dans votre jeu jusqu'à présent. Que se passe-t-il lorsque vous les modifiez ? Lisez-en davantage sur [les événements de timing en JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Devoir

[Explorez les collisions](assignment.md)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de faire appel à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.