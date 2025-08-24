<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-24T12:30:26+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "es"
}
-->
# Construir un Juego Espacial Parte 3: Añadiendo Movimiento

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

¡Los juegos no son muy divertidos hasta que tienes alienígenas moviéndose por la pantalla! En este juego, utilizaremos dos tipos de movimientos:

- **Movimiento por teclado/ratón**: cuando el usuario interactúa con el teclado o el ratón para mover un objeto en la pantalla.
- **Movimiento inducido por el juego**: cuando el juego mueve un objeto en intervalos de tiempo determinados.

Entonces, ¿cómo movemos cosas en una pantalla? Todo se trata de coordenadas cartesianas: cambiamos la ubicación (x, y) del objeto y luego redibujamos la pantalla.

Normalmente necesitas los siguientes pasos para lograr *movimiento* en una pantalla:

1. **Establecer una nueva ubicación** para un objeto; esto es necesario para percibir que el objeto se ha movido.
2. **Limpiar la pantalla**, la pantalla necesita ser limpiada entre cada dibujo. Podemos hacerlo dibujando un rectángulo que llenamos con un color de fondo.
3. **Redibujar el objeto** en la nueva ubicación. Al hacer esto finalmente logramos mover el objeto de un lugar a otro.

Así es como puede verse en código:

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

✅ ¿Puedes pensar en una razón por la cual redibujar tu héroe muchas veces por segundo podría generar costos de rendimiento? Lee sobre [alternativas a este patrón](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Manejar eventos de teclado

Manejas eventos adjuntando eventos específicos al código. Los eventos de teclado se activan en toda la ventana, mientras que los eventos de ratón como un `click` pueden conectarse a hacer clic en un elemento específico. Usaremos eventos de teclado a lo largo de este proyecto.

Para manejar un evento necesitas usar el método `addEventListener()` de la ventana y proporcionarle dos parámetros de entrada. El primer parámetro es el nombre del evento, por ejemplo `keyup`. El segundo parámetro es la función que debe ser invocada como resultado de que ocurra el evento.

Aquí hay un ejemplo:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Para los eventos de teclado hay dos propiedades en el evento que puedes usar para ver qué tecla fue presionada:

- `key`, esta es una representación en cadena de la tecla presionada, por ejemplo `ArrowUp`.
- `keyCode`, esta es una representación numérica, por ejemplo `37`, que corresponde a `ArrowLeft`.

✅ La manipulación de eventos de teclado es útil fuera del desarrollo de juegos. ¿Qué otros usos puedes imaginar para esta técnica?

### Teclas especiales: una advertencia

Hay algunas *teclas especiales* que afectan la ventana. Esto significa que si estás escuchando un evento `keyup` y usas estas teclas especiales para mover tu héroe, también realizará desplazamiento horizontal. Por esa razón, podrías querer *desactivar* este comportamiento predeterminado del navegador mientras desarrollas tu juego. Necesitas un código como este:

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

El código anterior asegurará que las teclas de flecha y la barra espaciadora tengan su comportamiento *predeterminado* desactivado. El mecanismo de *desactivación* ocurre cuando llamamos a `e.preventDefault()`.

## Movimiento inducido por el juego

Podemos hacer que las cosas se muevan por sí mismas utilizando temporizadores como las funciones `setTimeout()` o `setInterval()` que actualizan la ubicación del objeto en cada intervalo de tiempo. Así es como puede verse:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## El bucle del juego

El bucle del juego es un concepto que esencialmente es una función que se invoca a intervalos regulares. Se llama el bucle del juego porque todo lo que debería ser visible para el usuario se dibuja dentro del bucle. El bucle del juego utiliza todos los objetos del juego que forman parte del mismo, dibujándolos a menos que por alguna razón ya no deban ser parte del juego. Por ejemplo, si un objeto es un enemigo que fue golpeado por un láser y explota, ya no forma parte del bucle del juego actual (aprenderás más sobre esto en lecciones posteriores).

Así es como típicamente puede verse un bucle del juego, expresado en código:

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

El bucle anterior se invoca cada `200` milisegundos para redibujar el lienzo. Tienes la capacidad de elegir el mejor intervalo que tenga sentido para tu juego.

## Continuando con el Juego Espacial

Tomarás el código existente y lo extenderás. Puedes comenzar con el código que completaste durante la parte I o usar el código en [Parte II - inicial](../../../../6-space-game/3-moving-elements-around/your-work).

- **Mover el héroe**: agregarás código para asegurarte de que puedes mover al héroe usando las teclas de flecha.
- **Mover enemigos**: también necesitarás agregar código para asegurarte de que los enemigos se muevan de arriba hacia abajo a un ritmo determinado.

## Pasos recomendados

Ubica los archivos que se han creado para ti en la subcarpeta `your-work`. Debería contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Comienza tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abre un navegador e ingresa esa dirección, ahora mismo debería renderizar al héroe y a todos los enemigos; ¡nada se está moviendo - aún!

### Agregar código

1. **Agregar objetos dedicados** para `hero`, `enemy` y `game object`, deberían tener propiedades `x` y `y`. (Recuerda la sección sobre [Herencia o composición](../README.md)).

   *PISTA* `game object` debería ser el que tenga `x` y `y` y la capacidad de dibujarse en un lienzo.

   >tip: comienza agregando una nueva clase GameObject con su constructor delineado como se muestra a continuación, y luego dibújalo en el lienzo:
  
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

    Ahora, extiende este GameObject para crear el Hero y el Enemy.
    
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

2. **Agregar manejadores de eventos de teclado** para manejar la navegación por teclas (mover al héroe arriba/abajo izquierda/derecha).

   *RECUERDA* es un sistema cartesiano, la esquina superior izquierda es `0,0`. También recuerda agregar código para detener el *comportamiento predeterminado*.

   >tip: crea tu función onKeyDown y adjúntala a la ventana:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Revisa la consola de tu navegador en este punto y observa las pulsaciones de teclas registradas.

3. **Implementar** el [Patrón Pub-Sub](../README.md), esto mantendrá tu código limpio mientras sigues las partes restantes.

   Para hacer esta última parte, puedes:

   1. **Agregar un listener de eventos** en la ventana:

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

    1. **Crear una clase EventEmitter** para publicar y suscribirse a mensajes:

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

    1. **Agregar constantes** y configurar el EventEmitter:

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

    1. **Inicializar el juego**

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

1. **Configurar el bucle del juego**

   Refactoriza la función window.onload para inicializar el juego y configurar un bucle del juego en un buen intervalo. También agregarás un rayo láser:

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

5. **Agregar código** para mover enemigos en un intervalo determinado.

    Refactoriza la función `createEnemies()` para crear los enemigos y agregarlos a la nueva clase gameObjects:

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
    
    y agrega una función `createHero()` para hacer un proceso similar para el héroe.
    
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

    y finalmente, agrega una función `drawGameObjects()` para comenzar el dibujo:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    ¡Tus enemigos deberían comenzar a avanzar hacia tu nave espacial héroe!

---

## 🚀 Desafío

Como puedes ver, tu código puede convertirse en 'código espagueti' cuando comienzas a agregar funciones, variables y clases. ¿Cómo puedes organizar mejor tu código para que sea más legible? Diseña un sistema para organizar tu código, incluso si todavía reside en un solo archivo.

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Revisión y Estudio Personal

Aunque estamos escribiendo nuestro juego sin usar frameworks, hay muchos frameworks basados en JavaScript para desarrollo de juegos con canvas. Tómate un tiempo para hacer [lectura sobre estos](https://github.com/collections/javascript-game-engines).

## Tarea

[Comenta tu código](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.