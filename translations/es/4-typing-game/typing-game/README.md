<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T14:00:41+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "es"
}
-->
# Creando un juego usando eventos

## Cuestionario previo a la clase

[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/21)

## Programación basada en eventos

Cuando creamos una aplicación basada en navegador, proporcionamos una interfaz gráfica de usuario (GUI) para que el usuario interactúe con lo que hemos construido. La forma más común de interactuar con el navegador es haciendo clic y escribiendo en varios elementos. ¡El desafío que enfrentamos como desarrolladores es que no sabemos cuándo van a realizar estas operaciones!

[La programación basada en eventos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_dirigida_por_eventos) es el nombre del tipo de programación que necesitamos para crear nuestra GUI. Si desglosamos un poco esta frase, vemos que la palabra clave aquí es **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), según Merriam-Webster, se define como "algo que sucede". Esto describe nuestra situación perfectamente. Sabemos que algo va a suceder y queremos ejecutar algún código en respuesta, pero no sabemos cuándo ocurrirá.

La forma en que marcamos una sección de código que queremos ejecutar es creando una función. Cuando pensamos en [programación procedural](https://es.wikipedia.org/wiki/Programaci%C3%B3n_procedimental), las funciones se llaman en un orden específico. Lo mismo ocurre con la programación basada en eventos. La diferencia está en **cómo** se llaman las funciones.

Para manejar eventos (clics de botones, escritura, etc.), registramos **event listeners**. Un event listener es una función que escucha un evento y se ejecuta en respuesta. Los event listeners pueden actualizar la interfaz de usuario, hacer llamadas al servidor o realizar cualquier otra acción necesaria en respuesta a la acción del usuario. Agregamos un event listener usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) y proporcionando una función para ejecutar.

> **NOTE:** Vale la pena destacar que hay muchas formas de crear event listeners. Puedes usar funciones anónimas o crear funciones con nombre. Puedes usar varios atajos, como establecer la propiedad `click` o usar `addEventListener`. En nuestro ejercicio nos vamos a centrar en `addEventListener` y funciones anónimas, ya que probablemente sea la técnica más común que usan los desarrolladores web. También es la más flexible, ya que `addEventListener` funciona para todos los eventos y el nombre del evento se puede proporcionar como un parámetro.

### Eventos comunes

Hay [docenas de eventos](https://developer.mozilla.org/docs/Web/Events) disponibles para escuchar al crear una aplicación. Básicamente, cualquier cosa que un usuario haga en una página genera un evento, lo que te da mucho poder para garantizar que obtengan la experiencia que deseas. Afortunadamente, normalmente solo necesitarás un pequeño grupo de eventos. Aquí hay algunos comunes (incluidos los dos que usaremos al crear nuestro juego):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): El usuario hizo clic en algo, típicamente un botón o enlace
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): El usuario hizo clic con el botón derecho del ratón
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): El usuario seleccionó texto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): El usuario ingresó texto

## Creando el juego

Vamos a crear un juego para explorar cómo funcionan los eventos en JavaScript. Nuestro juego pondrá a prueba la habilidad de escritura de un jugador, que es una de las habilidades más subestimadas que todos los desarrolladores deberían tener. ¡Todos deberíamos practicar nuestra escritura! El flujo general del juego será el siguiente:

- El jugador hace clic en el botón de inicio y se le presenta una cita para escribir
- El jugador escribe la cita lo más rápido que pueda en un cuadro de texto
  - A medida que cada palabra se completa, la siguiente se resalta
  - Si el jugador comete un error, el cuadro de texto se actualiza a rojo
  - Cuando el jugador completa la cita, se muestra un mensaje de éxito con el tiempo transcurrido

¡Construyamos nuestro juego y aprendamos sobre eventos!

### Estructura de archivos

Vamos a necesitar tres archivos en total: **index.html**, **script.js** y **style.css**. Comencemos configurándolos para facilitar nuestro trabajo.

- Crea una nueva carpeta para tu trabajo abriendo una consola o ventana de terminal y ejecutando el siguiente comando:

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

Si exploramos los requisitos, sabemos que vamos a necesitar algunos elementos en nuestra página HTML. Esto es como una receta, donde necesitamos algunos ingredientes:

- Un lugar para mostrar la cita que el usuario debe escribir
- Un lugar para mostrar mensajes, como un mensaje de éxito
- Un cuadro de texto para escribir
- Un botón de inicio

Cada uno de estos necesitará IDs para que podamos trabajar con ellos en nuestro JavaScript. También agregaremos referencias a los archivos CSS y JavaScript que vamos a crear.

Crea un nuevo archivo llamado **index.html**. Agrega el siguiente HTML:

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

### Lanzar la aplicación

Siempre es mejor desarrollar de manera iterativa para ver cómo se ve. Lancemos nuestra aplicación. Hay una maravillosa extensión para Visual Studio Code llamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) que alojará tu aplicación localmente y actualizará el navegador cada vez que guardes.

- Instala [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) siguiendo el enlace y haciendo clic en **Install**
  - El navegador te pedirá abrir Visual Studio Code, y luego Visual Studio Code te pedirá realizar la instalación
  - Reinicia Visual Studio Code si se te solicita
- Una vez instalado, en Visual Studio Code, haz clic en Ctrl-Shift-P (o Cmd-Shift-P) para abrir el panel de comandos
- Escribe **Live Server: Open with Live Server**
  - Live Server comenzará a alojar tu aplicación
- Abre un navegador y navega a **https://localhost:5500**
- ¡Ahora deberías ver la página que creaste!

Agreguemos algo de funcionalidad.

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

✅ En cuanto al CSS, puedes diseñar tu página como prefieras. Tómate un tiempo para hacer que la página se vea más atractiva:

- Elige una fuente diferente
- Colorea los encabezados
- Redimensiona los elementos

## JavaScript

Con nuestra interfaz de usuario creada, es hora de centrarnos en el JavaScript que proporcionará la lógica. Vamos a dividir esto en varios pasos:

- [Crear las constantes](../../../../4-typing-game/typing-game)
- [Event listener para iniciar el juego](../../../../4-typing-game/typing-game)
- [Event listener para escribir](../../../../4-typing-game/typing-game)

Pero primero, crea un nuevo archivo llamado **script.js**.

### Agregar las constantes

Vamos a necesitar algunos elementos para facilitarnos la programación. Nuevamente, similar a una receta, esto es lo que necesitaremos:

- Un array con la lista de todas las citas
- Un array vacío para almacenar todas las palabras de la cita actual
- Un espacio para almacenar el índice de la palabra que el jugador está escribiendo actualmente
- El tiempo en que el jugador hizo clic en iniciar

También vamos a querer referencias a los elementos de la interfaz de usuario:

- El cuadro de texto (**typed-value**)
- La cita (**quote**)
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

✅ Adelante, agrega más citas a tu juego

> **NOTE:** Podemos recuperar los elementos cuando queramos en el código usando `document.getElementById`. Debido al hecho de que vamos a referirnos a estos elementos regularmente, vamos a evitar errores tipográficos con literales de cadena usando constantes. Frameworks como [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) pueden ayudarte a gestionar mejor la centralización de tu código.

Tómate un minuto para ver un video sobre el uso de `const`, `let` y `var`

[![Tipos de variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Tipos de variables")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre variables.

### Agregar lógica de inicio

Para comenzar el juego, el jugador hará clic en iniciar. Por supuesto, no sabemos cuándo van a hacer clic en iniciar. Aquí es donde entra en juego un [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Un event listener nos permitirá escuchar algo que ocurra (un evento) y ejecutar código en respuesta. En nuestro caso, queremos ejecutar código cuando el usuario haga clic en iniciar.

Cuando el usuario haga clic en **start**, necesitamos seleccionar una cita, configurar la interfaz de usuario y configurar el seguimiento de la palabra actual y el tiempo. A continuación está el JavaScript que necesitas agregar; lo discutimos justo después del bloque de código.

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

Desglosemos el código:

- Configurar el seguimiento de palabras
  - Usar [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) y [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nos permite seleccionar aleatoriamente una cita del array `quotes`
  - Convertimos la `quote` en un array de `words` para poder rastrear la palabra que el jugador está escribiendo actualmente
  - `wordIndex` se establece en 0, ya que el jugador comenzará con la primera palabra
- Configurar la interfaz de usuario
  - Crear un array de `spanWords`, que contiene cada palabra dentro de un elemento `span`
    - Esto nos permitirá resaltar la palabra en la pantalla
  - `join` el array para crear una cadena que podamos usar para actualizar el `innerHTML` en `quoteElement`
    - Esto mostrará la cita al jugador
  - Establecer el `className` del primer elemento `span` en `highlight` para resaltarlo en amarillo
  - Limpiar el `messageElement` estableciendo `innerText` en `''`
- Configurar el cuadro de texto
  - Limpiar el `value` actual en `typedValueElement`
  - Establecer el `focus` en `typedValueElement`
- Iniciar el temporizador llamando a `getTime`

### Agregar lógica de escritura

A medida que el jugador escribe, se generará un evento `input`. Este event listener verificará que el jugador esté escribiendo la palabra correctamente y manejará el estado actual del juego. Volviendo a **script.js**, agrega el siguiente código al final. Lo desglosaremos después.

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

Desglosemos el código. Comenzamos obteniendo la palabra actual y el valor que el jugador ha escrito hasta ahora. Luego tenemos una lógica en cascada, donde verificamos si la cita está completa, la palabra está completa, la palabra es correcta o (finalmente), si hay un error.

- La cita está completa, indicada por `typedValue` siendo igual a `currentWord` y `wordIndex` siendo igual a uno menos que la `length` de `words`
  - Calcular `elapsedTime` restando `startTime` del tiempo actual
  - Dividir `elapsedTime` por 1,000 para convertir de milisegundos a segundos
  - Mostrar un mensaje de éxito
- La palabra está completa, indicada por `typedValue` terminando con un espacio (el final de una palabra) y `typedValue` siendo igual a `currentWord`
  - Establecer `value` en `typedElement` como `''` para permitir que se escriba la siguiente palabra
  - Incrementar `wordIndex` para pasar a la siguiente palabra
  - Recorrer todos los `childNodes` de `quoteElement` para establecer `className` en `''` y volver a la visualización predeterminada
  - Establecer `className` de la palabra actual en `highlight` para marcarla como la siguiente palabra a escribir
- La palabra está escrita correctamente (pero no completa), indicada por `currentWord` comenzando con `typedValue`
  - Asegurarse de que `typedValueElement` se muestre como predeterminado limpiando `className`
- Si llegamos hasta aquí, hay un error
  - Establecer `className` en `typedValueElement` como `error`

## Prueba tu aplicación

¡Has llegado al final! El último paso es asegurarte de que nuestra aplicación funcione. ¡Pruébala! No te preocupes si hay errores; **todos los desarrolladores** tienen errores. Examina los mensajes y depura según sea necesario.

Haz clic en **start** y comienza a escribir. ¡Debería verse un poco como la animación que vimos antes!

![Animación del juego en acción](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Desafío

Agrega más funcionalidad

- Desactiva el event listener de `input` al completar la cita y vuelve a activarlo cuando se haga clic en el botón
- Desactiva el cuadro de texto cuando el jugador complete la cita
- Muestra un cuadro de diálogo modal con el mensaje de éxito
- Almacena las puntuaciones más altas usando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Cuestionario posterior a la clase

[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/22)

## Revisión y estudio autónomo

Lee sobre [todos los eventos disponibles](https://developer.mozilla.org/docs/Web/Events) para el desarrollador a través del navegador web, y considera los escenarios en los que usarías cada uno.

## Tarea

[Crear un nuevo juego de teclado](assignment.md)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.