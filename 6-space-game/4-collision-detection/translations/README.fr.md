# Construire un jeu spatial Partie 4: Ajouter un laser et détecter les collisions

## Quiz préalable

[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/35?loc=fr)

Dans cette leçon, vous apprendrez à tirer des lasers avec JavaScript! Nous ajouterons deux choses à notre jeu:

- **Un laser**: ce laser est tiré depuis le vaisseau de vos héros et verticalement vers le haut
- **La détection de collision**, dans le cadre de la mise en œuvre de la possibilité de *tirer*, nous ajouterons également quelques règles de jeu intéressantes:
   - **Le laser frappe l'ennemi**: L'ennemi meurt s'il est touché par un laser
   - **Le laser touche l'écran supérieur** : un laser est détruit s'il touche la partie supérieure de l'écran
   - **Collision entre ennemis et héros**: Un ennemi et le héros sont détruits s'ils se frappent
   - **L'ennemi touche le bas de l'écran**: Un ennemi et un héros sont détruits si l'ennemi touche le bas de l'écran

En bref, vous -- *le héros* -- devez frapper tous les ennemis avec un laser avant qu'ils ne parviennent à se déplacer vers le bas de l'écran.

✅ Faites une petite recherche sur le tout premier jeu vidéo jamais écrit. Quelle était sa fonctionnalité?

Soyons héroïques ensemble!

## La détection de collision

Comment fait-on la détection de collision ? Nous devons penser à nos objets de jeu comme des rectangles se déplaçant. Pourquoi vous pourriez vous demander? Eh bien, l'image utilisée pour dessiner un objet de jeu est un rectangle : il a un `x`, `y`, `width` et `height`.

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

## How do we destroy things

To destroy things in a game you need to let the game know it should no longer paint this item in the game loop that triggers on a certain interval. A way to do this is to mark a game object as *dead* when something happens, like so:

```javascript
// collision happened
enemy.dead = true
```

Then you an proceed to sort out *dead* objects before repainting the screen, like so:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## How do we fire a laser

Firing a laser translates to responding to a key-event and creating an object that moves in a certain direction. We therefore need to carry out the following steps:

1. **Create a laser object**: from the top of our hero's ship, that upon creation starts moving upwards towards the screen top.
2. **Attach code to a key event**: we need to choose a key on the keyboard that represents the player shooting the laser.
3. **Create a game object that looks like a laser** when the key is pressed.

## Cooldown on our laser

The laser needs to fire every time you press a key, like *space* for example. To prevent the game producing way too many lasers in a short time we need to fix this. The fix is by implementing a so called *cooldown*, a timer, that ensures that a laser can only be fired so often. You can implement that in the following way:

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

✅ Refer to lesson 1 in the space game series to remind yourself about *cooldowns*.

## What to build

You will take the existing code (which you should have cleaned up and refactored) from the previous lesson, and extend it. Either start with the code from part II or use the code at [Part III- starter](/your-work).

> tip: the laser that you'll work with is already in your assets folder and referenced by your code

- **Add collision detection**, when a laser collides with something the following rules should apply:
   1. **Laser hits enemy**: enemy dies if hit by a laser
   2. **Laser hits top screen**: A laser is destroyed if it hits the top part of our screen
   3. **Enemy and hero collision**: an enemy and the hero is destroyed if hitting each other
   4. **Enemy hits bottom of the screen**: An enemy and a hero is destroyed if the enemy hits the bottom of the screen

## Recommended steps

Locate the files that have been created for you in the `your-work` sub folder. It should contain the following:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

You start your project the `your_work` folder by typing:

```bash
cd your-work
npm start
```

The above will start a HTTP Server on address `http://localhost:5000`. Open up a browser and input that address, right now it should render the hero and all the enemies, nothing is moving - yet :).

### Add code

1. **Setup a  rectangle representation of your game object, to handle collision** The below code allows you to get a rectangle representation of a `GameObject`. Edit your GameObject class to extend it:

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

2. **Add code that checks collision** This will be a new function  that tests whether two rectangles intersect:

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

3. **Add laser firing capability**
   1. **Add key-event message**. The *space* key should create a laser just above the hero ship. Add three constants in the Messages object:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Handle space key**. Edit the `window.addEventListener` keyup function to handle spaces:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Add listeners**. Edit the `initGame()` function to ensure that hero can fire when the space bar is hit:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       and add a new `eventEmitter.on()` function to ensure behavior when an enemy collides with a laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Move object**, Ensure the laser moves to the top of the screen gradually. You'll create a new Laser class that extends `GameObject`, as you've done before: 
   
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

   1. **Handle collisions**, Implement collision rules for the laser. Add an `updateGameObjects()` function that tests colliding objects for hits

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

      Make sure to add `updateGameObjects()` into your game loop in `window.onload`.

   4. **Implement cooldown** on the laser, so it can only be fired so often.

      Finally, edit the Hero class so that it can cooldown:

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

At this point, your game has some functionality! You can navigate with your arrow keys, fire a laser with your space bar, and enemies disappear when you hit them. Well done!

---

## 🚀 Challenge

Ajoutez une explosion! Jetez un œil aux ressources du jeu dans [le référentiel Space Art](../../solution/spaceArt/readme.txt) et essayez d'ajouter une explosion lorsque le laser frappe un extraterrestre

## Quiz de validation des connaissances

[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/36?loc=fr)

## Révision et étude personnelle

Faites des expériences avec les intervalles de votre jeu à ce stade. Que se passe-t-il lorsque vous les modifiez ? En savoir plus sur les [événements de minutage JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Affectation

[Explorer les collisions](assignment.fr.md)
