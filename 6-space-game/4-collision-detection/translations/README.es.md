# Construye un juego espacial Parte IV: Adición de un láser y detección de colisiones

![video](video-url)

## [Pre-lecture prueba](../.github/pre-lecture-quiz.md)

¡En esta lección aprenderá a disparar láseres con JavaScript! Agregaremos dos cosas a nuestro juego:

- **Un láser**: este láser se dispara desde la nave de tu héroe y verticalmente hacia arriba
- **Detección de colisiones**, como parte de la implementación de la capacidad de *disparar*, también agregaremos algunas reglas de juego interesantes:
   - **El láser golpea al enemigo**: El enemigo muere si es golpeado por un láser
   - **El láser golpea la pantalla superior**: un láser se destruye si golpea la parte superior de la pantalla
   - **Colisión de héroe y enemigo**: Un enemigo y el héroe son destruidos si se golpean entre sí.
   - **El enemigo golpea la parte inferior de la pantalla**: un enemigo y un héroe son destruidos si el enemigo golpea la parte inferior de la pantalla.

En resumen, tú, *el héroe*, debes golpear a todos los enemigos con un láser antes de que logren moverse a la parte inferior de la pantalla.

✅ Investiga un poco sobre el primer juego de computadora jamás escrito. ¿Cuál fue su funcionalidad?

¡Seamos heroicos juntos!

## Detección de colisiones

¿Cómo hacemos la detección de colisiones? Necesitamos pensar en los objetos de nuestro juego como rectángulos que se mueven. ¿Por qué podrías preguntar? Bueno, la imagen utilizada para dibujar un objeto de juego es un rectángulo: tiene una `x`,` y`, `width` y `height`.

Si dos rectángulos, es decir, un héroe y un enemigo *se cruzan*, tienes una colisión. Lo que debería suceder entonces depende de las reglas del juego. Para implementar la detección de colisiones, por lo tanto, necesita lo siguiente:

1. Una forma de obtener una representación rectangular de un objeto de juego, algo como esto:


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

2. Una función de comparación, esta función puede verse así:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## ¿Cómo destruimos las cosas?

Para destruir cosas en un juego, debes informarle al juego que ya no debería pintar este elemento en el bucle del juego que se activa en un intervalo determinado. Una forma de hacer esto es marcar un objeto del juego como *muerto* cuando algo sucede, así:


```javascript
// ocurrió la colisión
enemy.dead = true
```

Luego, puede proceder a clasificar los objetos *muertos* antes de volver a pintar la pantalla, así:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## ¿Cómo disparamos un láser?

Disparar un láser se traduce en responder a un evento clave y crear un objeto que se mueve en una dirección determinada. Por lo tanto, debemos realizar los siguientes pasos:

1. **Crea un objeto láser**: desde la parte superior de la nave de nuestro héroe, que al ser creado comienza a moverse hacia la parte superior de la pantalla.
2. **Adjuntar código a un evento clave**: necesitamos elegir una tecla en el teclado que represente al jugador disparando el láser.
3. **Crea un objeto de juego que parezca un láser** cuando se presiona la tecla.

## Enfriamiento en nuestro láser

El láser debe dispararse cada vez que presione una tecla, como *espacio*, por ejemplo. Para evitar que el juego produzca demasiados láseres en poco tiempo, debemos solucionar este problema. La solución es implementar un llamado *enfriamiento*, un temporizador, que garantiza que un láser solo se pueda disparar con cierta frecuencia. Puede implementar eso de la siguiente manera:


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

✅ Consulte la lección 1 de la serie de juegos espaciales para recordar los *tiempos de reutilización*.

## Qué construir

Tomará el código existente (que debería haber limpiado y refactorizado) de la lección anterior y lo extenderá. Empiece con el código de la parte II o utilice el código en [Part III- starter](/your-work).

> consejo: el láser con el que trabajará ya está en su carpeta de activos y su código hace referencia a él

- **Agregue detección de colisiones**, cuando un láser choca con algo, se deben aplicar las siguientes reglas:
    1. **El láser golpea al enemigo**: el enemigo muere si es golpeado por un láser
    2. **El láser golpea la pantalla superior**: un láser se destruye si golpea la parte superior de nuestra pantalla
    3. **Colisión de héroe y enemigo**: un enemigo y el héroe son destruidos si se golpean entre sí
    4. **El enemigo golpea la parte inferior de la pantalla**: un enemigo y un héroe son destruidos si el enemigo golpea la parte inferior de la pantalla.

## Pasos recomendados

Busque los archivos que se han creado para usted en la subcarpeta `su-trabajo`. Debe contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Comienzas tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http: // localhost: 5000`. Abra un navegador e ingrese esa dirección, ahora mismo debería representar al héroe y a todos los enemigos, nada se mueve, todavía :).

### Agregar código

1. **Configure una representación rectangular de su objeto de juego, para manejar la colisión** El siguiente código le permite obtener una representación rectangular de un `GameObject`. Edite su clase GameObject para extenderla:


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

2. **Agregar código que verifica la colisión** Esta será una nueva función que prueba si dos rectángulos se cruzan:

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

3. **Agregar capacidad de disparo láser**
    1. **Agregar mensaje de evento clave**. La tecla *espacio* debería crear un láser justo encima de la nave del héroe. Agregue tres constantes en el objeto Mensajes:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

1. **Tecla de espacio en el mango**. Edite la función de teclado `window.addEventListener` para manejar espacios:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

1. **Agregar oyentes**. Edite la función ʻinitGame () `para asegurarse de que el héroe pueda disparar cuando se presione la barra espaciadora:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       y agregue una nueva función `eventEmitter.on ()` para asegurar el comportamiento cuando un enemigo choca con un láser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1.**Mover objeto**, asegúrese de que el láser se mueva gradualmente hacia la parte superior de la pantalla. Creará una nueva clase Laser que amplíe `GameObject`, como lo hizo antes: 
   
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

1. **Manejar colisiones**, implementar reglas de colisión para el láser. Agregue una función `updateGameObjects()` que prueba los objetos en colisión en busca de hits

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

      Asegúrate de agregar `updateGameObjects()` en tu bucle de juego en `window.onload`.

    4. **Implemente el tiempo de reutilización** en el láser, para que solo se pueda disparar con cierta frecuencia.

       Finalmente, edite la clase Hero para que pueda enfriarse:

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

En este punto, ¡tu juego tiene algunas funciones! Puedes navegar con tus flechas, disparar un láser con tu barra espaciadora y los enemigos desaparecen cuando los golpeas. ¡Bien hecho!

🚀 Desafío: ¡Agrega una explosión! Echa un vistazo a los recursos del juego en [el repositorio de Space Art](../solution/spaceArt/readme.txt) e intenta agregar una explosión cuando el láser golpea a un extraterrestre.

## [Post-lecture prueba](../.github/post-lecture-quiz.md)

## Revisión y autoestudio

Experimente con los intervalos de su juego hasta ahora. ¿Qué pasa cuando los cambias? Más información sobre [eventos de tiempo de JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

**Asignación**: [Explorar colisiones](assignment.es.md)
