# Construye un juego espacial Parte II: Dibuja héroes y monstruos en el lienzo

![video](video-url)

## [Pre-lecture prueba](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/31)

## El lienzo

El lienzo es un elemento HTML que por defecto no tiene contenido; es una pizarra en blanco. Necesita agregarle dibujo sobre él.

✅ Lea [más sobre la API Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) en MDN.

Así es como se declara normalmente, como parte del cuerpo de la página:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Arriba estamos configurando el `id`, `width` y `alto`.

- `id`: establezca esto para que pueda obtener una referencia cuando necesite interactuar con él.
- `width`: este es el ancho del elemento.
- `height`: esta es la altura del elemento.

## Dibujar geometría simple

Canvas utiliza un sistema de coordenadas cartesiano para dibujar cosas. Por lo tanto, usa un eje xy un eje y para expresar dónde se encuentra algo. La ubicación `0,0` es la posición superior izquierda y la inferior derecha es lo que dijiste que era el ANCHO y ALTO del lienzo.

! [cuadrícula del lienzo](canvas_grid.png)
> Imagen de [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Para dibujar en el elemento de lienzo, deberá seguir los siguientes pasos:

1. **Obtenga una referencia** al elemento Canvas.
1. **Obtenga una referencia** en el elemento Context que se encuentra en el elemento canvas.
1. **Realice una operación de dibujo** utilizando el elemento de contexto.

El código para los pasos anteriores generalmente se ve así:

```javascript
// dibuja un rectángulo rojo
// 1. obtener la referencia del lienzo
canvas = document.getElementById("myCanvas");

// 2. establecer el contexto en 2D para dibujar formas básicas
ctx = canvas.getContext("2d");

// 3. rellénalo con el color rojo
ctx.fillStyle = 'red';

// 4. y dibuja un rectángulo con estos parámetros, configurando la ubicación y el tamaño
ctx.fillRect(0,0, 200, 200) // x, y, ancho, alto
```

✅ La API de Canvas se enfoca principalmente en formas 2D, pero también puede dibujar elementos 3D en un sitio web; para esto, puede usar la [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Puede dibujar todo tipo de cosas con la API de Canvas como:

- **Formas geométricas**, ya mostramos cómo dibujar un rectángulo, pero hay mucho más que puedes dibujar.
- **Texto**, puede dibujar un texto con cualquier fuente y color que desee.
- **Imágenes**, puede dibujar una imagen basada en un activo de imagen como .jpg o .png, por ejemplo.

✅ ¡Pruébalo! Sabes cómo dibujar un rectángulo, ¿puedes dibujar un círculo en una página? Eche un vistazo a algunos dibujos de Canvas interesantes en CodePen. Aquí hay un [ejemplo particularmente impresionante](https://codepen.io/dissimulate/pen/KrAwx).

## Cargar y dibujar un recurso de imagen

Usted carga un activo de imagen creando un objeto `Image` y estableciendo su propiedad `src`. Luego escuchas el evento `load` para saber cuándo está listo para usarse. El código se ve así:

### Cargar activo

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Cargar patrón de activos

Se recomienda envolver lo anterior en una construcción así, para que sea más fácil de usar y solo intente manipularlo cuando esté completamente cargado:


```javascript
async function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // imagen cargada y lista para ser utilizada
    }
    resolve(img);
  })
}

// usar así

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

Para dibujar activos del juego en una pantalla, su código se vería así:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

### Qué construir

Construirá una página web con un elemento Canvas. Debería representar una pantalla negra `1024*768`. Le proporcionamos dos imágenes:

- Barco héroe

   ![Barco héroe](../solution/assets/player.png)

- Monstruo 5*5

   ![Monster ship](../solution/assets/enemyShip.png)


### Pasos recomendados para iniciar el desarrollo

Busque los archivos que se han creado para usted en la subcarpeta `your-work`. Debe contener lo siguiente:



```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Abra la copia de esta carpeta en Visual Studio Code. Debe tener una configuración de entorno de desarrollo local, preferiblemente con Visual Studio Code con NPM y Node instalados. Si no tiene `npm` configurado en su computadora, [aquí le explicamos cómo hacerlo](https://www.npmjs.com/get-npm).

Inicie su proyecto navegando a la carpeta `your_work`:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http: // localhost: 5000`. Abra un navegador e ingrese esa dirección. Es una página en blanco ahora mismo, pero eso cambiará

> Nota: para ver los cambios en su pantalla, actualice su navegador.

### Agregar código

Agregue el código necesario a `your-work/app.js` para resolver lo siguiente

1. **Dibuja** un lienzo con fondo negro
   > consejo: agregue dos líneas debajo del TODO apropiado en `/app.js`, estableciendo el elemento `ctx` en negro y las coordenadas superior / izquierda en 0,0 y la altura y el ancho para que sean iguales a los del lienzo .
2. **Cargar** texturas
   > consejo: agregue las imágenes del jugador y del enemigo usando `await loadTexture` y pasando la ruta de la imagen. ¡Todavía no los verá en la pantalla!
3. **Dibuja** héroe en el centro de la pantalla en la mitad inferior
   > consejo: use la API `drawImage` para dibujar heroImg en la pantalla, configurando `canvas.width / 2 - 45` y `canvas.height - canvas.height / 4)`;
4. **Dibujar** 5 * 5 monstruos
   > consejo: ahora puedes descomentar el código para dibujar enemigos en la pantalla. A continuación, vaya a la función `createEnemies` y constrúyala.

   Primero, configure algunas constantes:


    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    luego, crea un bucle para dibujar la matriz de monstruos en la pantalla:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Resultado

El resultado final debería verse así:

![Pantalla negra con un héroe y monstruos 5*5](../partI-solution.png)

## Solución

Intente resolverlo usted mismo primero, pero si se atasca, eche un vistazo a una [solución](solution/app.js)

🚀 Desafío: ha aprendido a dibujar con la API Canvas enfocada en 2D; eche un vistazo a la [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API) e intente dibujar un objeto 3D.


## [Post-lecture prueba](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/32)

## Revisión y autoestudio

Obtenga más información sobre la API de Canvas [leyendo sobre ella](https://developer.mozilla.org/docs/Web/API/Canvas_API).

**Tarea**: [Jugar con la API de Canvas](assignment.es.md)