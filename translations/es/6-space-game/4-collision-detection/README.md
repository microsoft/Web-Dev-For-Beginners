<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-24T12:36:17+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "es"
}
-->
# Construye un Juego Espacial Parte 4: Añadiendo un Láser y Detectando Colisiones

## Cuestionario Previo a la Lección

[Cuestionario previo a la lección](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

En esta lección aprenderás a disparar láseres con JavaScript. Añadiremos dos cosas a nuestro juego:

- **Un láser**: este láser se dispara desde la nave de tu héroe hacia arriba.
- **Detección de colisiones**, como parte de la implementación de la habilidad de *disparar*, también añadiremos algunas reglas interesantes al juego:
   - **Láser golpea al enemigo**: el enemigo muere si es alcanzado por un láser.
   - **Láser golpea la parte superior de la pantalla**: un láser se destruye si alcanza la parte superior de la pantalla.
   - **Colisión entre enemigo y héroe**: un enemigo y el héroe se destruyen si chocan entre sí.
   - **Enemigo alcanza la parte inferior de la pantalla**: un enemigo y el héroe se destruyen si el enemigo llega a la parte inferior de la pantalla.

En resumen, tú -- *el héroe* -- necesitas eliminar a todos los enemigos con un láser antes de que logren llegar a la parte inferior de la pantalla.

✅ Investiga un poco sobre el primer videojuego de computadora jamás creado. ¿Cuál era su funcionalidad?

¡Seamos heroicos juntos!

## Detección de colisiones

¿Cómo hacemos la detección de colisiones? Necesitamos pensar en nuestros objetos del juego como rectángulos en movimiento. ¿Por qué, te preguntarás? Bueno, la imagen utilizada para dibujar un objeto del juego es un rectángulo: tiene un `x`, `y`, `ancho` y `alto`.

Si dos rectángulos, es decir, un héroe y un enemigo, *se intersectan*, tienes una colisión. Lo que debería suceder después depende de las reglas del juego. Para implementar la detección de colisiones necesitas lo siguiente:

1. Una forma de obtener una representación rectangular de un objeto del juego, algo como esto:

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

## ¿Cómo destruimos cosas?

Para destruir cosas en un juego, necesitas informar al juego que ya no debe pintar este objeto en el bucle del juego que se activa en un intervalo determinado. Una forma de hacer esto es marcar un objeto del juego como *muerto* cuando algo sucede, de esta manera:

```javascript
// collision happened
enemy.dead = true
```

Luego puedes proceder a eliminar los objetos *muertos* antes de repintar la pantalla, de esta manera:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## ¿Cómo disparamos un láser?

Disparar un láser significa responder a un evento de teclado y crear un objeto que se mueva en una dirección determinada. Por lo tanto, necesitamos realizar los siguientes pasos:

1. **Crear un objeto láser**: desde la parte superior de la nave de nuestro héroe, que al crearse comienza a moverse hacia arriba en dirección a la parte superior de la pantalla.
2. **Asociar código a un evento de teclado**: necesitamos elegir una tecla en el teclado que represente al jugador disparando el láser.
3. **Crear un objeto del juego que se vea como un láser** cuando se presione la tecla.

## Enfriamiento del láser

El láser necesita dispararse cada vez que presionas una tecla, como *espacio*, por ejemplo. Para evitar que el juego produzca demasiados láseres en un corto período de tiempo, necesitamos solucionar esto. La solución es implementar un llamado *enfriamiento*, un temporizador, que asegure que un láser solo pueda dispararse cada cierto tiempo. Puedes implementarlo de la siguiente manera:

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

✅ Consulta la lección 1 de la serie del juego espacial para recordarte sobre los *enfriamientos*.

## Qué construir

Tomarás el código existente (que deberías haber limpiado y refactorizado) de la lección anterior y lo extenderás. Puedes comenzar con el código de la parte II o usar el código en [Parte III - inicial](../../../../../../../../../your-work).

> consejo: el láser con el que trabajarás ya está en tu carpeta de recursos y referenciado por tu código.

- **Añade detección de colisiones**, cuando un láser colisiona con algo, deben aplicarse las siguientes reglas:
   1. **Láser golpea al enemigo**: el enemigo muere si es alcanzado por un láser.
   2. **Láser golpea la parte superior de la pantalla**: un láser se destruye si alcanza la parte superior de nuestra pantalla.
   3. **Colisión entre enemigo y héroe**: un enemigo y el héroe se destruyen si chocan entre sí.
   4. **Enemigo alcanza la parte inferior de la pantalla**: un enemigo y el héroe se destruyen si el enemigo llega a la parte inferior de la pantalla.

## Pasos recomendados

Ubica los archivos que se han creado para ti en la subcarpeta `your-work`. Debería contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Inicia tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abre un navegador e ingresa esa dirección, por ahora debería renderizar al héroe y a todos los enemigos, nada se está moviendo - aún :).

### Añade código

1. **Configura una representación rectangular de tu objeto del juego para manejar colisiones**. El siguiente código te permite obtener una representación rectangular de un `GameObject`. Edita tu clase GameObject para extenderla:

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

2. **Añade código que verifique colisiones**. Esta será una nueva función que prueba si dos rectángulos se intersectan:

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

3. **Añade la capacidad de disparar láseres**
   1. **Añade un mensaje de evento de tecla**. La tecla *espacio* debería crear un láser justo encima de la nave del héroe. Añade tres constantes en el objeto Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Maneja la tecla espacio**. Edita la función `window.addEventListener` para manejar la tecla espacio:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Añade listeners**. Edita la función `initGame()` para asegurarte de que el héroe pueda disparar cuando se presione la barra espaciadora:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       y añade una nueva función `eventEmitter.on()` para asegurar el comportamiento cuando un enemigo colisiona con un láser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Mueve el objeto**, Asegúrate de que el láser se mueva gradualmente hacia la parte superior de la pantalla. Crearás una nueva clase Laser que extiende `GameObject`, como lo has hecho antes: 
   
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

   1. **Maneja colisiones**, Implementa las reglas de colisión para el láser. Añade una función `updateGameObjects()` que pruebe los objetos en colisión:

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

      Asegúrate de añadir `updateGameObjects()` en tu bucle del juego en `window.onload`.

   4. **Implementa el enfriamiento** en el láser, para que solo pueda dispararse cada cierto tiempo.

      Finalmente, edita la clase Hero para que pueda manejar el enfriamiento:

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

En este punto, ¡tu juego tiene algo de funcionalidad! Puedes navegar con las teclas de flecha, disparar un láser con la barra espaciadora y los enemigos desaparecen cuando los golpeas. ¡Bien hecho!

---

## 🚀 Desafío

¡Añade una explosión! Echa un vistazo a los recursos del juego en [el repositorio de Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) e intenta añadir una explosión cuando el láser golpee a un alienígena.

## Cuestionario Posterior a la Lección

[Cuestionario posterior a la lección](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Revisión y Autoestudio

Experimenta con los intervalos en tu juego hasta ahora. ¿Qué sucede cuando los cambias? Lee más sobre [eventos de temporización en JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tarea

[Explora colisiones](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.