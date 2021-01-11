# Build a Space Game Part III: Adding Motion

![video](video-url)

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/33)

 ¡Los juegos no son muy divertidos hasta que tienes extraterrestres corriendo por la pantalla! En este juego haremos uso de dos tipos de movimientos:

- **Keyboard/Mouse movement** (Movimiento del teclado / mouse): cuando el usuario interactúa con el teclado o el mouse para mover un objeto en la pantalla.
- **Game induced movement** (Movimiento inducido por el juego): cuando el juego mueve un objeto con un intervalo de tiempo determinado.

Entonces, ¿cómo movemos las cosas en una pantalla? Se trata de coordenadas cartesianas: cambiamos la ubicación (x, y) del objeto y luego redibujamos la pantalla.

Normalmente, necesita los siguientes pasos para lograr *movimiento* en una pantalla:

1. **Set a new location** (Establecer una nueva ubicación) para un objeto; esto es necesario para percibir que el objeto se ha movido.
2. **Clear the screen** (Limpiar la pantalla), la pantalla debe limpiarse entre sorteos. Podemos borrarlo dibujando un rectángulo que llenamos con un color de fondo.
3. **Redraw object** (Redibujar objeto) en una nueva ubicación. Al hacer esto, finalmente logramos mover el objeto de un lugar a otro.

  Así es como puede verse en el código:

```javascript
//establecer la ubicación del héroe
hero.x += 5;
// limpia el rectángulo que alberga al héroe
ctx.clearRect(0, 0, canvas.width, canvas.height);
// vuelve a dibujar el fondo del juego y el héroe
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ ¿Puedes pensar en una razón por la que volver a dibujar a tu héroe muchos fotogramas por segundo podría generar costos de rendimiento? Lea acerca de [alternativas a este patrón](https://www.html5rocks.com/en/tutorials/canvas/performance/).

## Manejar eventos de teclado

Maneja eventos adjuntando eventos específicos al código. Los eventos del teclado se activan en toda la ventana, mientras que los eventos del mouse como un `click` se pueden conectar a hacer clic en un elemento específico. Usaremos eventos de teclado a lo largo de este proyecto.

Para manejar un evento, debe usar el método `addEventListener()` de la ventana y proporcionarle dos parámetros de entrada. El primer parámetro es el nombre del evento, por ejemplo, `keyup`. El segundo parámetro es la función que debe invocarse como resultado del evento que tiene lugar.

He aquí un ejemplo:


```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = representación de cadena de la clave
  if (evt.key === 'ArrowUp') {
    // hacer algo
  }
})
```

Para los eventos clave, hay dos propiedades en el evento que puede usar para ver qué tecla se presionó:

- `key`, esta es una representación de cadena de la tecla presionada, por ejemplo `ArrowUp`
- `keyCode`, esta es una representación numérica, por ejemplo, `37`, corresponde a `ArrowLeft`.

✅ La manipulación de eventos clave es útil fuera del desarrollo del juego. ¿Qué otros usos se le ocurren para esta técnica?

### Teclas especiales: una advertencia

Hay algunas teclas * especiales * que afectan la ventana. Eso significa que si estás escuchando un evento `keyup` y usas estas teclas especiales para mover a tu héroe, también realizará un desplazamiento horizontal. Por esa razón, es posible que desee *apagar* este comportamiento integrado del navegador a medida que desarrolla su juego. Necesitas un código como este:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Teclas de flecha
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // no bloquee otras llaves
  }
};

window.addEventListener('keydown', onKeyDown);
```

El código anterior asegurará que las teclas de flecha y la tecla de espacio tengan su comportamiento *predeterminado* apagado. El mecanismo de *apagado* ocurre cuando llamamos a `e.preventDefault()`.

## Movimiento inducido por el juego

Podemos hacer que las cosas se muevan por sí mismas usando temporizadores como la función `setTimeout()` o `setInterval()` que actualizan la ubicación del objeto en cada tic o intervalo de tiempo. Esto es lo que puede parecer:


```javascript
let id = setInterval(() => {
  //mover al enemigo en el eje y
  enemy.y += 10;
})
```

## El bucle del juego

El bucle de juego es un concepto que es esencialmente una función que se invoca a intervalos regulares. Se llama bucle de juego, ya que todo lo que debería ser visible para el usuario se incluye en el bucle. El bucle del juego hace uso de todos los objetos del juego que son parte del juego, dibujándolos todos a menos que por alguna razón ya no deban ser parte del juego. Por ejemplo, si un objeto es un enemigo que fue golpeado por un láser y explota, ya no forma parte del ciclo del juego actual (aprenderás más sobre esto en lecciones posteriores).

Así es como suele verse un bucle de juego, expresado en código:

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

TEl ciclo anterior se invoca cada `200` milisegundos para volver a dibujar el lienzo. Tiene la capacidad de elegir el mejor intervalo que tenga sentido para su juego.

## Continuando con el juego espacial

Tomarás el código existente y lo extenderás. Empiece con el código que completó durante la parte I o use el código en [Part II-starter](your-work).

- **Moving the hero** (Mover al héroe): agregará código para asegurarse de que puede mover al héroe con las teclas de flecha.
- **Move enemies** (Mover enemigos): también necesitarás agregar código para asegurarte de que los enemigos se muevan de arriba hacia abajo a un ritmo determinado.

## Pasos recomendados

Busque los archivos que se han creado para usted en la subcarpeta `your-work`. Debe contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Comienzas tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abra un navegador e ingrese esa dirección, ahora mismo debería representar al héroe y a todos los enemigos; nada se mueve, ¡todavía!

### Agregar código

1. **Agrega objetos dedicados** para `hero` y `enemy` y `game object`, deben tener propiedades `x` e `y`. (Recuerde la parte sobre [Herencia o composición](../README.md)).

    * SUGERENCIA* `game object` debe ser el que tenga `x` e `y` y la capacidad de dibujarse a sí mismo en un lienzo.

    > consejo: comience agregando una nueva clase GameObject con su constructor delineado como se muestra a continuación, y luego dibuje en el lienzo:

  
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

    Ahora, amplíe este GameObject para crear el héroe y el enemigo.
    
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

2. **Agregue controladores de eventos clave** para manejar la navegación de teclas (mueva el héroe hacia arriba / abajo a la izquierda / derecha)

    * RECUERDE* es un sistema cartesiano, la parte superior izquierda es `0,0`. También recuerde agregar código para detener *comportamiento predeterminado*.

    > consejo: cree su función onKeyDown y adjúntela a la ventana:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...//agregue el código de la lección anterior para detener el comportamiento predeterminado
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Compruebe la consola de su navegador en este punto y observe cómo se registran las pulsaciones de teclas.

3. **Implemente** el [subpatrón Pub](../README.md), esto mantendrá su código limpio mientras sigue las partes restantes.

    Para hacer esta última parte, puede:

    1. **Agregue un detector de eventos** en la ventana:

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

    1. **Cree una clase EventEmitter** para publicar y suscribirse a mensajes:

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

    1. **Agregue constantes** y configure el EventEmitter:

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

    1. **Inicializa el juego**

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

1. **Configura el bucle del juego**

    Refactorice la función window.onload para inicializar el juego y configurar un bucle de juego en un buen intervalo. También agregará un rayo láser:


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

5. **Agregar código** para mover enemigos en un cierto intervalo

     Refactorice la función `createEnemies()` para crear los enemigos y empujarlos a la nueva clase gameObjects:


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
    
    y agregue una función `createHero()` para hacer un proceso similar para el héroe.
    
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

    y finalmente, agregue una función `drawGameObjects()` para comenzar el dibujo:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    ¡Tus enemigos deberían comenzar a avanzar en tu nave espacial heroica!

🚀 Desafío: como puede ver, su código puede convertirse en 'código espagueti' cuando comienza a agregar funciones, variables y clases. ¿Cómo puede organizar mejor su código para que sea más legible? Esboce un sistema para organizar su código, incluso si todavía reside en un archivo.

## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/34)

## Revisión y autoestudio

Mientras escribimos nuestro juego sin usar marcos, existen muchos marcos de lienzo basados en JavaScript para el desarrollo de juegos. Tómate un tiempo para hacer algo [leer sobre estos](https://github.com/collections/javascript-game-engines).

**Tarea**: [Comenta tu código](assignment.es.md)
