# Creando un juego usando eventos

## Cuestionario Previo a la Lectura

[Cuestionario previo a la lectura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Programación impulsada por eventos

Al crear una aplicación basada en el navegador, proporcionamos una interfaz gráfica de usuario (GUI) para que el usuario la use cuando interactúe con lo que hemos creado. La forma más común de interactuar con el navegador es haciendo clic y escribiendo en varios elementos. El desafío al que nos enfrentamos como desarrolladores es que no sabemos cuándo van a realizar estas operaciones.

[Programación Impulsada por Eventos](https://en.wikipedia.org/wiki/Event-driven_programming) es el nombre para el tipo de programación que necesitamos hacer para crear nuestra GUI. Si desglosamos un poco esta frase, vemos que la palabra central aquí es **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), según Merriam-Webster, se define como "algo que sucede". Esto describe perfectamente nuestra situación. Sabemos que va a pasar algo por lo que queremos ejecutar algún código en respuesta, pero no sabemos cuándo ocurrirá.

La forma en que marcamos una sección de código que queremos ejecutar es creando una función. Cuando pensamos en la [programación procedimental](https://en.wikipedia.org/wiki/Procedural_programming), las funciones se llaman en un orden específico. Lo mismo sucederá con la programación basada en eventos. La diferencia es **cómo** se llamarán a las funciones.

Para manejar eventos (hacer clic en botones, escribir, etc.), registramos **detector de eventos**. Un detector de eventos es una función que detecta que ocurra un evento y se ejecuta en respuesta. Los detectores de eventos pueden actualizar la interfaz de usuario, realizar llamadas al servidor o cualquier otra cosa que deba hacerse en respuesta a la acción del usuario. Agregamos un detector de eventos usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), y proporcionando una función para ejecutar.

> **NOTA:** Vale la pena destacar que existen numerosas formas de crear detectores de eventos. Puede usar funciones anónimas o crear funciones con nombre. Puede usar varios atajos, como configurar la propiedad `click` o usar `addEventListener`. En nuestro ejercicio nos vamos a centrar en `addEventListener` y funciones anónimas, ya que es probablemente la técnica más común que usan los desarrolladores web. También es el más flexible, ya que `addEventListener` funciona para todos los eventos y el nombre del evento se puede proporcionar como parámetro.

### Eventos comunes

Hay [docenas de eventos](https://developer.mozilla.org/docs/Web/Events) disponibles para detectar al crear una aplicación. Básicamente, todo lo que hace un usuario en una página genera un evento, lo que te da mucho poder para garantizar que obtengan la experiencia que deseas. Afortunadamente, normalmente solo necesitarás un pequeño puñado de eventos. Aquí hay algunos comunes (incluidos los dos que usaremos al crear nuestro juego):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): El usuario hizo clic en algo, generalmente un botón o un hipervínculo
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): El usuario hizo clic con el botón derecho del ratón
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): El usuario resaltó algún texto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): El usuario ingresó un texto

## Creando el juego

Vamos a crear un juego para explorar cómo funcionan los eventos en JavaScript. Nuestro juego pondrá a prueba la habilidad de escritura de un jugador, que es una de las habilidades más subestimadas que todos los desarrolladores deberían tener. ¡Todos deberíamos estar practicando nuestra mecanografía! El flujo general del juego se verá así:

- El jugador hace clic en el botón de inicio y se le presenta una cita para escribir
- El jugador escribe la cita lo más rápido que puede en un cuadro de texto
  - A medida que se completa cada palabra, se resalta la siguiente
  - Si el jugador tiene un error tipográfico, el cuadro de texto se actualiza a rojo
  - Cuando el jugador completa la cita, se muestra un mensaje de éxito con el tiempo transcurrido

¡Construyamos nuestro juego y aprendamos sobre los eventos!

### Estructura de archivos

Vamos a necesitar tres archivos en total: **index.html**, **script.js** y **style.css**. Comencemos configurándolos para hacernos la vida un poco más fácil.

- Crea una nueva carpeta para su trabajo abriendo una consola o ventana de terminal y emitiendo el siguiente comando:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Abre Visual Studio Code

```bash
code .
```

- Agrega tres archivos a la carpeta en Visual Studio Code con los siguientes nombres:
  - index.html
  - script.js
  - style.css

## Crear la interfaz de usuario

Si exploramos los requisitos, sabemos que vamos a necesitar un puñado de elementos en nuestra página HTML. Esto es como una receta, donde necesitamos algunos ingredientes:

- Algún lugar para mostrar la cita para que el usuario escriba
- Algún lugar para mostrar cualquier mensaje, como un mensaje de éxito
- Un cuadro de texto para escribir
- Un botón de inicio

Cada uno de ellos necesitará IDs para que podamos trabajar con ellos en nuestro JavaScript. También agregaremos referencias a los archivos CSS y JavaScript que vamos a crear.

Crea un nuevo archivo llamado **index.html**. Agregue el siguiente HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Iniciar la aplicacion

Siempre es mejor desarrollar iterativamente para ver cómo se ven las cosas. Iniciemos nuestra aplicación. Hay una maravillosa extensión para Visual Studio Code llamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) que alojará su aplicación localmente y actualizará el navegador cada vez que guarde.

- Instala [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) siguiendo el enlace y haciendo clic en **Instalar**
  - El navegador te pedirá que abras Visual Studio Code, y luego por Visual Studio Code para realizar la instalación
  - Reinicia Visual Studio Code si se te solicita
- Una vez instalado, en Visual Studio Code, haga clic en Ctrl-Shift-P (o Cmd-Shift-P) para abrir la paleta de comandos
- Escribe **Live Server: Open with Live Server**
  - Live Server comenzará a alojar tu aplicación
- Abra un navegador y vaya a **https://localhost:5500**
- ¡Ahora deberías ver la página que creaste!

Agreguemos alguna funcionalidad.

## Agregar el CSS

Con nuestro HTML creado, agreguemos el CSS para el estilo principal. Necesitamos resaltar la palabra que el jugador debe escribir y colorear el cuadro de texto si lo que ha escrito es incorrecto. Haremos esto con dos clases.

Crea un nuevo archivo llamado **style.css** y agrega la siguiente sintaxis.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Cuando se trata de CSS, puedes diseñar tu página como quieras. Toma un poco de tiempo y haz que la página se vea más atractiva:

- Elije una fuente diferente
- Colorea los encabezados
- Cambia el tamaño de los elementos

## JavaScript

Con nuestra UI creada, es hora de centrar nuestra atención en el JavaScript que proporcionará la lógica. We're going to break this down into a handful of steps:

- [Crea las constantes](#agrega-las-constantes)
- [Detector de eventos para iniciar el juego](#agrega-lógica-de-inicio)
- [Detector de eventos para escribir](#agrega-lógica-de-escritura)

Pero primero, crea un nuevo archivo llamado **script.js**.

### Agrega las constantes

Vamos a necesitar algunos elementos para hacernos la vida un poco más fácil para la programación. Nuevamente, similar a una receta, esto es lo que necesitaremos:

- Arreglo con la lista de todas las citas
- Arreglo vacío para almacenar todas las palabras de la cita actual
- Espacio para almacenar el índice de la palabra que el jugador está escribiendo actualmente
- La hora en que el jugador hizo clic en comenzar

También vamos a querer referencias a los elementos de la interfaz de usuario:

- El cuadro de texto (**typed-value**)
- La cita a mostrar (**quote**)
- El mensaje (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Continúa y agrega más citas a tu juego

> **NOTA:** Podemos recuperar los elementos cuando queramos en código usando `document.getElementById`. Debido al hecho de que nos referiremos a estos elementos de manera regular, evitaremos errores tipográficos con cadenas literales mediante el uso de constantes. Los Frameroks como [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) pueden ayudarte a administrar mejor la centralización de su código.

Tómate un minuto para ver un video sobre el uso de `const`, `let` y `var`

> 🎥 Haz clic en la imagen inferior para ver un video sobre las variables.

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

> 🎥 Haga clic en la imagen de arriba para ver un video sobre las variables.

### Agrega lógica de inicio

Para comenzar el juego, el jugador hará clic en iniciar. Por supuesto, no sabemos cuándo van a hacer clic en start. Aquí es donde entra en juego un [detector de eventos](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Un detector de eventos nos permitirá escuchar si algo ocurre (un evento) y ejecutar código en respuesta. En nuestro caso, queremos ejecutar el código cuando el usuario haga clic en start.

Cuando el usuario hace clic en **start**, debemos seleccionar una cita, configurar la interfaz de usuario y configurar el seguimiento de la palabra y el tiempo actuales. A continuación se muestra el JavaScript que deberá agregar; lo discutimos justo después del bloque de script.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

¡Vamos a desglosar el código!

- Establece el seguimiento de palabras
  - Usando [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) y [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nos permite seleccionar aleatoriamente una cita del arreglo `quotes`
  - Convertimos la `quote` (cita) en un arreglo de `words` (palabras) para que podamos rastrear la palabra que el jugador está escribiendo actualmente
  - `wordIndex` se establece en 0, ya que el jugador comenzará en la primera palabra
- Configura la UI (interfaz de usuario)
  - Crea un arreglo de `spanWords`, que contiene cada palabra dentro de un elemento `span`
    - Esto nos permitirá resaltar la palabra en la pantalla
  - `join` (une) el arreglo para crear una cadena que podemos usar para actualizar el `innerHTML` en `quoteElement`
    - Esto mostrará la cita al jugador
  - Establece `className` del primer elemento `span` en `highlight` para resaltarlo en amarillo
  - Limpia `messageElement` estableciendo `innerText` a `''`
- Establece el cuadro de texto
  - Limpia el `value` (valor) actual en `typedValueElement`
  - Establece el `focus` en `typedValueElement`
- Inicia el cronómetro llamando a `getTime`

### Agrega lógica de escritura

A medida que el jugador escribe, se generará un evento de `input`. Este detector de eventos verificará que el jugador esté escribiendo la palabra correctamente y manejará el estado actual del juego. Volviendo a **script.js**, agrega el siguiente código al final. Lo desglosaremos después.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

¡Vamos a desglosar el código! Comenzamos tomando la palabra actual y el valor que el jugador ha escrito hasta el momento. Luego tenemos la lógica de cascada, donde verificamos si la cita está completa, la palabra está completa, la palabra es correcta o (finalmente), si hay un error.

- La cita está completa, indicada por `typedValue` siendo igual a `currentWord` y `wordIndex` igual a uno menos que el `length` (longitud) de `words`
  - Calcula `elapsedTime` restando `startTime` de la hora actual
  - Divide `elapsedTime` entre 1,000 para convertir de milisegundos a segundos
  - Muestra un mensaje de éxito
  - La palabra está completa, indicada por `typedValue` que termina con un espacio (el final de la palabra) y `typedValue` es igual a `currentWord`
  - Establece `value` en `typedElement` para que sea `''` para permitir que se escriba la siguiente palabra
  - Incrementa `wordIndex` para pasar a la siguiente palabra
  - Recorre todos los `childNodes` de `quoteElement` para establecer `className` en `''` para volver a la visualización predeterminada
  - Establece `className` de la palabra actual en `highlight` para marcarla como la próxima palabra a escribir
- La palabra está actualmente escrita correctamente (pero no completa), indicado por `currentWord` que empieza con `typedValue`
  - Se asegura de que `typedValueElement` se muestre de forma predeterminada borrando `className`
- Si llegamos hasta aquí, tenemos un error
  - Establece `className` en `typedValueElement` a `error`

## Prueba tu aplicación

¡Has llegado hasta el final! El último paso es asegurarnos de que nuestra aplicación funcione. ¡Pruebalo! No te preocupes si hay errores; **todos los desarrolladores** cometen errores. Examina los mensajes y soluciona según sea necesario.

¡Haz clic en **start** y empieza a escribir! Debería parecerse un poco a la animación que vimos antes.

![Animacion de un juego en acción](../../../4-typing-game/images/demo.gif)

---

## 🚀 Desafío

Añadir más funcionalidad

- Deshabilita el detector de eventos `input` al finalizar y vuelve a habilitarlo cuando se haga clic en el botón
- Deshabilita el cuadro de texto cuando el jugador complete la cita
- Muestra un cuadro de diálogo modal _(modal dialog box)_ con el mensaje de éxito
- Almacene puntajes altos usando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Cuestionario posterior a la clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Revisión y autoestudio

Lea sobre [todos los eventos disponibles](https://developer.mozilla.org/docs/Web/Events) para el desarrollador a través del navegador web y considere los escenarios en los que usaría cada uno.

## Asignación

[Crear un nuevo juego de teclado](./assignment.es.md)
