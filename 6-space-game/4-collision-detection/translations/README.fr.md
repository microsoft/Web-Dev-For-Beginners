# Construire un jeu spatial Partie 4: Ajouter un laser et détecter les collisions

## Quiz préalable

[Quiz préalable](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/35?loc=fr)

Dans cette leçon, vous apprendrez à tirer des lasers avec JavaScript! Nous ajouterons deux choses à notre jeu:

- **Un laser**: ce laser est tiré depuis le vaisseau de vos héros et verticalement vers le haut
- **La détection de collision**, dans le cadre de la mise en œuvre de la possibilité de *tirer*, nous ajouterons également quelques règles de jeu intéressantes:
   - **Le laser frappe l'ennemi**: L'ennemi meurt s'il est touché par un laser
   - **Le laser touche l'écran supérieur**: un laser est détruit s'il touche la partie supérieure de l'écran
   - **Collision entre ennemis et héros**: Un ennemi et le héros sont détruits s'ils se frappent
   - **L'ennemi touche le bas de l'écran**: Un ennemi et un héros sont détruits si l'ennemi touche le bas de l'écran

En bref, vous -- *le héros* -- devez frapper tous les ennemis avec un laser avant qu'ils ne parviennent à se déplacer vers le bas de l'écran.

✅ Faites une petite recherche sur le tout premier jeu vidéo jamais écrit. Quelle était sa fonctionnalité?

Soyons héroïques ensemble!

## La détection de collision

Comment fait-on la détection de collision? Nous devons penser à nos objets de jeu comme des rectangles se déplaçant. Pourquoi vous pourriez vous demander? Eh bien, l'image utilisée pour dessiner un objet de jeu est un rectangle: il a un `x`, `y`, `width` et `height`.

Si deux rectangles, c'est-à-dire un héros et un ennemi *se croisent*, vous avez une collision. Ce qui devrait arriver alors dépend des règles du jeu. Pour implémenter la détection de collision, vous avez donc besoin des éléments suivants:

1. Un moyen d'obtenir une représentation rectangulaire d'un objet de jeu, quelque chose comme ça:

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

2. Une fonction de comparaison, cette fonction peut ressembler à ceci:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Comment détruire les objets

Pour détruire des objets dans un jeu, vous devez faire savoir au jeu qu'il ne doit plus afficher cet objet dans la boucle de jeu qui se déclenche à un certain intervalle. Une façon de faire est de marquer un objet de jeu comme *mort* quand quelque chose se passe, comme ceci:

```javascript
// la collision s'est produite
enemy.dead = true
```

Ensuite, vous procédez au tri des objets *morts* avant de repeindre l'écran, comme ceci:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Comment tirons-nous un laser

Tirer un laser se traduit par répondre à un événement clé et créer un objet qui se déplace dans une certaine direction. Nous devons donc effectuer les étapes suivantes:

1. **Créez un objet laser**: du haut du vaisseau de notre héros, celui-ci commence à se déplacer vers le haut de l'écran lors de sa création.
2. **Attacher un code à un événement clé**: nous devons choisir une touche du clavier qui représente le joueur tirant le laser.
3. **Créez un objet de jeu qui ressemble à un laser** lorsque la touche est enfoncée.

## Cooldown sur notre laser

Le laser doit se déclencher à chaque fois que vous appuyez sur une touche, comme *espace* par exemple. Pour éviter que le jeu ne produise trop de lasers en peu de temps, nous devons résoudre ce problème. La solution consiste à implémenter un soi-disant *cooldown*(temps de recharge), une minuterie, qui garantit qu'un laser ne peut être tiré aussi souvent. Vous pouvez implémenter cela de la manière suivante:

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
      // produire un laser
      this.cooldown = new Cooldown(500);
    } else {
      // ne rien faire - il n'a pas encore refroidi.
    }
  }
}
```

✅ Reportez-vous à la leçon 1 de la série de jeux spatiaux pour vous rappeler des *temps de recharge*

## Que construire

Vous allez prendre le code existant (que vous avez dû nettoyer et refactoriser) de la leçon précédente et l'étendre. Commencez par le code de la partie II ou utilisez le code de la [partie III - démarreur](../../your-work).

> astuce: le laser avec lequel vous allez travailler est déjà dans votre dossier assets et référencé par votre code

- **Ajoutez la détection de collision**, lorsqu'un laser entre en collision avec quelque chose, les règles suivantes doivent s'appliquer:
   1. **Le laser touche l'ennemi**: l'ennemi meurt s'il est touché par un laser
   2. **Le laser touche l'écran supérieur**: un laser est détruit s'il touche la partie supérieure de notre écran
   3. **Collision ennemi et héros**: un ennemi et le héros sont détruits s'ils se frappent
   4. **L'ennemi touche le bas de l'écran**: un ennemi et un héros sont détruits si l'ennemi touche le bas de l'écran

## Étapes recommandées

Localisez les fichiers qui ont été créés pour vous dans le sous-dossier `your-work`. Il doit contenir les éléments suivants:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Vous démarrez votre projet dans le dossier `your_work` en tapant:

```bash
cd your-work
npm start
```

Ce qui précède démarrera un serveur HTTP à l'adresse `http://localhost:5000`. Ouvrez un navigateur et saisissez cette adresse, pour le moment, cela devrait rendre le héros et tous les ennemis, rien ne bouge - pour le moment :).

### Ajouter un code

1. **Configurez une représentation rectangulaire de votre objet de jeu, pour gérer les collisions** Le code ci-dessous vous permet d'obtenir une représentation rectangulaire d'un `GameObject`. Modifiez votre classe GameObject pour l'étendre:

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

2. **Ajouter du code qui vérifie la collision** Il s'agira d'une nouvelle fonction qui teste si deux rectangles se croisent:

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

3. **Ajouter une capacité de tir laser **
   1. **Ajouter un message d'événement clé**. La touche *espace* devrait créer un laser juste au-dessus du vaisseau héros. Ajoutez trois constantes dans l'objet Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Manipuler la touche espace**. Modifiez la fonction keyup `window.addEventListener` pour gérer les espaces:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Ajouter des auditeurs**. Modifiez la fonction `initGame()` pour vous assurer que le héros peut se déclencher lorsque la barre d'espace est enfoncée:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       et ajoutez une nouvelle fonction `eventEmitter.on()` pour assurer le comportement lorsqu'un ennemi entre en collision avec un laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Déplacez l'objet**, assurez-vous que le laser se déplace progressivement vers le haut de l'écran. Vous allez créer une nouvelle classe Laser qui étend `GameObject`, comme vous l'avez fait auparavant: 
   
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

   1. **Gérer les collisions**, Implémenter les règles de collision pour le laser. Ajouter une fonction `updateGameObjects()` qui teste les objets en collision pour les hits

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

   4. **Mettez en place un temps de recharge (cooldown)** sur le laser, de sorte qu'il ne peut être tiré qu'un certain temps.

      Enfin, modifiez la classe de héros afin qu'elle puisse se recharger:

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

À ce stade, votre jeu a quelques fonctionnalités! Vous pouvez naviguer avec vos touches fléchées, tirer un laser avec votre barre d'espace et les ennemis disparaissent lorsque vous les frappez. Bien joué!

---

## 🚀 Challenge

Ajoutez une explosion! Jetez un œil aux ressources du jeu dans [le référentiel Space Art](../../solution/spaceArt/readme.txt) et essayez d'ajouter une explosion lorsque le laser frappe un extraterrestre

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/36?loc=fr)

## Révision et étude personnelle

Faites des expériences avec les intervalles de votre jeu à ce stade. Que se passe-t-il lorsque vous les modifiez? En savoir plus sur les [événements de minutage JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Affectation

[Explorer les collisions](assignment.fr.md)
