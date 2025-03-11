# Creando un juego usando eventos

## Quiz previo a la lección

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Programación dirigida por eventos

Al crear una aplicación basada en navegador, proporcionamos una interfaz gráfica de usuario (GUI) para que el usuario interactúe con lo que hemos construido. La forma más común de interactuar con el navegador es haciendo clic y escribiendo en varios elementos. El desafío que enfrentamos como desarrolladores es que no sabemos cuándo realizarán estas operaciones.

[Programación dirigida por eventos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_dirigida_por_eventos) es el nombre del tipo de programación que necesitamos para crear nuestra GUI. Si desglosamos esta frase un poco, vemos que la palabra clave aquí es **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), según Merriam-Webster, se define como "algo que sucede". Esto describe perfectamente nuestra situación. Sabemos que va a suceder algo para lo cual queremos ejecutar algún código en respuesta, pero no sabemos cuándo ocurrirá.

La forma en que marcamos una sección de código que queremos ejecutar es creando una función. Cuando pensamos en [programación procedural](https://es.wikipedia.org/wiki/Programaci%C3%B3n_procedimental), las funciones se llaman en un orden específico. Lo mismo ocurre con la programación dirigida por eventos. La diferencia es **cómo** se llamarán las funciones.

Para manejar eventos (clics de botones, escritura, etc.), registramos **escuchadores de eventos**. Un escuchador de eventos es una función que escucha un evento y se ejecuta en respuesta. Los escuchadores de eventos pueden actualizar la interfaz de usuario, realizar llamadas al servidor o cualquier otra acción necesaria en respuesta a la acción del usuario. Añadimos un escuchador de eventos usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), proporcionando una función a ejecutar.

> **NOTA:** Vale la pena destacar que hay numerosas formas de crear escuchadores de eventos. Puedes usar funciones anónimas o crear funciones con nombre. Puedes usar varios atajos, como configurar la propiedad `click` o usar `addEventListener`. En nuestro ejercicio nos enfocaremos en `addEventListener` y funciones anónimas, ya que probablemente sea la técnica más común que usan los desarrolladores web. También es la más flexible, ya que `addEventListener` funciona para todos los eventos y el nombre del evento puede proporcionarse como parámetro.

### Eventos comunes

Hay [docenas de eventos](https://developer.mozilla.org/docs/Web/Events) disponibles para escuchar cuando creas una aplicación. Básicamente, cualquier cosa que un usuario haga en una página genera un evento, lo que te da mucho poder para garantizar que obtenga la experiencia que deseas. Afortunadamente, normalmente solo necesitarás un puñado de eventos. Aquí hay algunos comunes (incluyendo los dos que usaremos al crear nuestro juego):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): El usuario hizo clic en algo, típicamente un botón o enlace
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): El usuario hizo clic con el botón derecho del ratón
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): El usuario resaltó algún texto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): El usuario ingresó texto

## Creando el juego

Vamos a crear un juego para explorar cómo funcionan los eventos en JavaScript. Nuestro juego probará la habilidad de escritura de un jugador, una de las habilidades más subestimadas que todos los desarrolladores deberían tener. ¡Todos deberíamos practicar nuestra escritura! El flujo general del juego será el siguiente:

- El jugador hace clic en un botón de inicio y se le presenta una cita para escribir
- El jugador escribe la cita lo más rápido posible en un cuadro de texto
  - A medida que se completa cada palabra, la siguiente se resalta
  - Si el jugador comete un error tipográfico, el cuadro de texto se vuelve rojo
  - Cuando el jugador completa la cita, se muestra un mensaje de éxito con el tiempo transcurrido

¡Construyamos nuestro juego y aprendamos sobre eventos!

### Estructura de archivos

Vamos a necesitar tres archivos en total: **index.html**, **script.js** y **style.css**. Empecemos configurándolos para facilitarnos la vida.

- Crea una nueva carpeta para tu trabajo abriendo una consola o ventana de terminal y ejecuta el siguiente comando:

```bash
# Linux o macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Abre Visual Studio Code

```bash
code .
```

- Añade tres archivos a la carpeta en Visual Studio Code con los siguientes nombres:
  - index.html
  - script.js
  - style.css

## Crear la interfaz de usuario

Si exploramos los requisitos, sabemos que vamos a necesitar algunos elementos en nuestra página HTML. Esto es como una receta, donde necesitamos algunos ingredientes:

- Un lugar para mostrar la cita que el usuario debe escribir
- Un lugar para mostrar cualquier mensaje, como un mensaje de éxito
- Un cuadro de texto para escribir
- Un botón de inicio

Cada uno de estos necesitará IDs para poder manipularlos en nuestro JavaScript. También añadiremos referencias a los archivos CSS y JavaScript que vamos a crear.

Crea un archivo nuevo llamado **index.html**. Añade el siguiente HTML:

```html
<!-- dentro de index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- Aquí se mostrará nuestra cita -->
  <p id="message"></p> <!-- Aquí se mostrarán los mensajes de estado -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- El cuadro de texto para escribir -->
    <button type="button" id="start">Start</button> <!-- Para iniciar el juego -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Lanzar la aplicación

Siempre es mejor desarrollar de forma iterativa para ver cómo se ve todo. Vamos a lanzar nuestra aplicación. Hay una extensión maravillosa para Visual Studio Code llamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), que alojará tu aplicación localmente y actualizará el navegador cada vez que guardes.

- Instala [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) siguiendo el enlace y haciendo clic en **Install**
  - El navegador te pedirá que abras Visual Studio Code, y luego Visual Studio Code te pedirá realizar la instalación
  - Reinicia Visual Studio Code si se te solicita
- Una vez instalado, en Visual Studio Code, presiona Ctrl-Shift-P (o Cmd-Shift-P) para abrir el palé de comandos
- Escribe **Live Server: Open with Live Server**
  - Live Server comenzará a alojar tu aplicación
- Abre un navegador y navega a **https://localhost:5500**
- ¡Ahora deberías ver la página que creaste!

Vamos a añadir algo de funcionalidad.

## Añadir el CSS

Con nuestro HTML creado, vamos a añadir el CSS para el estilo principal. Necesitamos resaltar la palabra que el jugador debe escribir y colorear la caja de texto si lo que ha escrito es incorrecto. Haremos esto con dos clases.

Crea un archivo nuevo llamado **style.css** y añade la siguiente sintaxis.

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

✅ En cuanto a CSS, puedes diseñar tu página como prefieras. Tómate un tiempo para que la página se vea más atractiva:

- Elige una fuente diferente
- Colorea los encabezados
- Cambia el tamaño de los elementos

## JavaScript

Con nuestra interfaz de usuario creada, es hora de centrarnos en el JavaScript que proporcionará la lógica. Vamos a dividir esto en unos pocos pasos:

- [Crear las constantes](#add-the-constants)
- [Agregar un event listener para iniciar el juego](#add-start-logic)
- [Agregar un event listener para la escritura](#add-typing-logic)

Pero primero, crea un archivo nuevo llamado **script.js**.

### Añadir las constantes

Vamos a necesitar algunos elementos para facilitarnos la programación. De nuevo, como una receta, esto es lo que necesitaremos:

- Un array con la lista de todas las citas
- Un array vacío para almacenar todas las palabras de la cita actual
- Un espacio para almacenar el índice de la palabra que el jugador está escribiendo actualmente
- El tiempo en el que el jugador hizo clic en iniciar

También vamos a necesitar referencias a los elementos de la interfaz de usuario:

- La caja de texto (**typed-value**)
- La pantalla de la cita (**quote**)
- El mensaje (**message**)

```javascript
// inside script.js
// todas nuestras citas
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// almacenar la lista de palabras y el índice de la palabra que el jugador está escribiendo actualmente
let words = [];
let wordIndex = 0;
// el tiempo de inicio
let startTime = Date.now();
// elementos de la página
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Adelante, añade más citas a tu juego

> **NOTA:** Podemos recuperar los elementos siempre que queramos en el código usando `document.getElementById`. Debido a que vamos a referirnos a estos elementos regularmente, evitaremos errores tipográficos usando constantes. Frameworks como [Vue.js](https://vuejs.org/) o [React](https://reactjs.org/) pueden ayudarte a centralizar mejor tu código.

Tómate un minuto para ver un video sobre cómo usar `const`, `let` y `var`

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre variables.

### Añadir la lógica de inicio

Para comenzar el juego, el jugador hará clic en iniciar. Por supuesto, no sabemos cuándo harán clic en iniciar. Aquí es donde entra en juego un [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Un event listener nos permitirá escuchar algo que ocurra (un evento) y ejecutar código en respuesta. En nuestro caso, queremos ejecutar código cuando el usuario haga clic en iniciar.

Cuando el usuario haga clic en **start**, necesitamos seleccionar una cita, configurar la interfaz de usuario y configurar el seguimiento de la palabra actual y el tiempo. A continuación, tienes el JavaScript que necesitas agregar; lo explicamos justo después del bloque de script.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // obtener una cita
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // poner la cita en un array de palabras
  words = quote.split(' ');
  // restablecer el índice de la palabra para el seguimiento
  wordIndex = 0;

  // actualizaciones de la interfaz de usuario
  // crear un array de elementos span para poder establecer una clase
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // convertir en cadena y establecer como innerHTML en la pantalla de la cita
  quoteElement.innerHTML = spanWords.join('');
  // resaltar la primera palabra
  quoteElement.childNodes[0].className = 'highlight';
  // borrar cualquier mensaje anterior
  messageElement.innerText = '';

  // configurar la caja de texto
  // borrar la caja de texto
  typedValueElement.value = '';
  // establecer el enfoque
  typedValueElement.focus();

  // iniciar el temporizador
  startTime = new Date().getTime();
});
```

### Añadir la lógica de escritura

A medida que el jugador escribe, se activará un evento `input`. Este event listener verificará que el jugador esté escribiendo la palabra correctamente y gestionará el estado actual del juego. Volviendo a **script.js**, añade el siguiente código al final. Lo desglosaremos después.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // obtener la palabra actual
  const currentWord = words[wordIndex];
  // obtener el valor actual
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // fin de la frase
    // mostrar éxito
    const elapsedTime = new Date().getTime() - startTime;
    const message = `¡FELICIDADES! Terminaste en ${elapsedTime / 1000} segundos.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // fin de la palabra
    // borrar el typedValueElement para la nueva palabra
    typedValueElement.value = '';
    // avanzar a la siguiente palabra
    wordIndex++;
    // restablecer el nombre de clase para todos los elementos en la cita
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // resaltar la nueva palabra
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // actualmente correcto
    // resaltar la siguiente palabra
    typedValueElement.className = '';
  } else {
    // estado de error
    typedValueElement.className = 'error';
  }
});
```

## Prueba tu aplicación

¡Has llegado al final! El último paso es asegurarte de que tu aplicación funcione. ¡Pruébala! No te preocupes si hay errores; **todos los desarrolladores** tienen errores. Examina los mensajes y depura según sea necesario.

Haz clic en **start** y comienza a escribir. Debería verse algo así como la animación que vimos antes.

![Animación del juego en acción](../images/demo.gif)

---

## 🚀 Desafío

Agrega más funcionalidades

- Desactiva el event listener `input` al finalizar y vuelve a activarlo cuando se haga clic en el botón
- Desactiva la caja de texto cuando el jugador complete la cita
- Muestra un cuadro de diálogo modal con el mensaje de éxito
- Almacena las mejores puntuaciones usando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Cuestionario posterior a la clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Revisión y estudio autodidacta

Lee sobre [todos los eventos disponibles](https://developer.mozilla.org/docs/Web/Events) para el desarrollador a través del navegador web y considera los escenarios en los que usarías cada uno.

## Tarea

[Crear un nuevo juego de teclado](assignment.md)



