# Plantillas HTML y rutas en una aplicación web

<!-- ![video](video-url) -->

## [Pre-lecture prueba](../.github/pre-lecture-quiz.md)

### Introducción

Desde la llegada de JavaScript a los navegadores, los sitios web se están volviendo más interactivos y complejos que nunca. Las tecnologías web ahora se utilizan comúnmente para crear aplicaciones completamente funcionales que se ejecutan directamente en un navegador que llamamos [aplicaciones web](https://en.wikipedia.org/wiki/Web_application). Como las aplicaciones web son muy interactivas, los usuarios no quieren esperar a que se vuelva a cargar la página completa cada vez que se realiza una acción. Es por eso que JavaScript se usa para actualizar el HTML directamente usando el DOM, para brindar una experiencia de usuario más fluida.

En esta lección, vamos a sentar las bases para crear una aplicación web bancaria, utilizando plantillas HTML para crear múltiples pantallas que se pueden mostrar y actualizar sin tener que volver a cargar toda la página HTML.

### Requisito previo

Necesita un servidor web local para probar la aplicación web que crearemos en esta lección. Si no tiene uno, puede instalar [Node.js](https://nodejs.org) y usar el comando `npx lite-server` de la carpeta de su proyecto. Creará un servidor web local y abrirá su aplicación en un navegador.

### Preparación

En su computadora, cree una carpeta llamada `bank` con un archivo llamado `index.html` dentro. Comenzaremos desde este HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code):


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- Aquí es donde trabajarás -->
  </body>
</html>
```

---

## Plantillas HTML

Si desea crear varias pantallas para una página web, una solución sería crear un archivo HTML para cada pantalla que desee mostrar. Sin embargo, esta solución tiene algunos inconvenientes:

- Tienes que volver a cargar todo el HTML al cambiar de pantalla, lo que puede ser lento.
- Es difícil compartir datos entre las diferentes pantallas.

Otro enfoque es tener un solo archivo HTML y definir múltiples [plantillas HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) usando el elemento `<template>`. Una plantilla es un bloque HTML reutilizable que el navegador no muestra y debe instanciarse en tiempo de ejecución mediante JavaScript.

### Tarea:

Crearemos una aplicación bancaria con dos pantallas: la página de inicio de sesión y el panel de control. Primero, agreguemos en el cuerpo HTML un elemento de marcador de posición que usaremos para instanciar las diferentes pantallas de nuestra aplicación:

```html
<div id="app">Loading...</div>
```

Le daremos un `id` para que sea más fácil localizarlo con JavaScript más adelante.

> Consejo: dado que el contenido de este elemento será reemplazado, podemos poner un mensaje de carga o un indicador que se mostrará mientras se carga la aplicación.

A continuación, agreguemos debajo la plantilla HTML para la página de inicio de sesión. Por ahora, solo pondremos allí un título y una sección que contiene un botón que usaremos para realizar la navegación.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <button>Login</button>
  </section>
</template>
```

Luego agregaremos otra plantilla HTML para la página del tablero. Esta página contendrá diferentes secciones:
- Un encabezado con un título y un botón para cerrar sesión
- El saldo actual de la cuenta bancaria
- Una lista de transacciones, que se muestra en una tabla.

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <button>Logout</button>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

Sugerencia: al crear plantillas HTML, si desea ver cómo se verá, puede comentar las líneas `<template>` y `</template>` encerrándolas entre `<!-- -->`.

✅ ¿Por qué crees que usamos atributos ʻid` en las plantillas? ¿Podríamos usar algo más como clases?

## Visualización de plantillas con JavaScript

Si prueba su archivo HTML actual en un navegador, verá que se atasca mostrando `Loading...`. Eso es porque necesitamos agregar código JavaScript para crear instancias y mostrar las plantillas HTML.

La instanciación de una plantilla se suele realizar en 3 pasos:

1. Recupere el elemento de plantilla en el DOM, por ejemplo, usando [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).
2. Clone el elemento de plantilla, usando [`cloneNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode).
3. Adjúntelo al DOM bajo un elemento visible, por ejemplo usando [ʻappendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild).

✅ ¿Por qué necesitamos clonar la plantilla antes de adjuntarla al DOM? ¿Qué crees que pasaría si nos salteáramos este paso?

### Tarea

Cree un nuevo archivo llamado `app.js` en la carpeta de su proyecto e importe ese archivo en la sección `<head>` de su HTML:


```html
<script src="app.js" defer></script>
```

Ahora en `app.js`, crearemos una nueva función `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Lo que hacemos aquí son exactamente los 3 pasos descritos anteriormente. Instalamos la plantilla con el id `templateId` y colocamos su contenido clonado dentro de nuestro marcador de posición de la aplicación. Tenga en cuenta que necesitamos usar `cloneNode (true)` para copiar todo el subárbol de la plantilla.

Ahora llame a esta función con una de las plantillas y observe el resultado.

```js
updateRoute('login');
```

✅ ¿Cuál es el propósito de este código `app.innerHTML = '';`? ¿Qué pasa sin él?

## Creando rutas

Cuando hablamos de una aplicación web, llamamos *Enrutamiento* la intención de asignar **URL** a pantallas específicas que deben mostrarse. En un sitio web con varios archivos HTML, esto se hace automáticamente ya que las rutas de los archivos se reflejan en la URL. Por ejemplo, con estos archivos en la carpeta de su proyecto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Si crea un servidor web con `mywebsite` como raíz, la asignación de URL será:
```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Sin embargo, para nuestra aplicación web estamos usando un solo archivo HTML que contiene todas las pantallas, por lo que este comportamiento predeterminado no nos ayudará. Tenemos que crear este mapa manualmente y actualizar la plantilla mostrada usando JavaScript.

### Tarea

Usaremos un objeto simple para implementar un [mapa](https://en.wikipedia.org/wiki/Associative_array) entre las rutas de URL y nuestras plantillas. Agregue este objeto en la parte superior de su archivo `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Ahora modifiquemos un poco la función `updateRoute`. En lugar de pasar directamente el `templateId` como argumento, queremos recuperarlo mirando primero la URL actual y luego usar nuestro mapa para obtener el valor de ID de plantilla correspondiente. Podemos usar [`window.location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname) para obtener solo la sección de ruta de la URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Aquí mapeamos las rutas que declaramos a la plantilla correspondiente. Puede probar que funciona correctamente cambiando la URL manualmente en su navegador.

✅ ¿Qué sucede si ingresa una ruta desconocida en la URL? ¿Cómo podríamos solucionar esto?

## Añadiendo navegación

El siguiente paso para nuestra aplicación es agregar la posibilidad de navegar entre páginas sin tener que cambiar la URL manualmente. Esto implica dos cosas:
  1. Actualización de la URL actual
  2. Actualización de la plantilla mostrada en función de la nueva URL

Ya nos ocupamos de la segunda parte con la función `updateRoute`, así que tenemos que averiguar cómo actualizar la URL actual.

Si bien el elemento de anclaje HTML [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) se puede utilizar para crear hipervínculos a diferentes URL, podemos ' No use eso aquí, ya que hará que el navegador vuelva a cargar el HTML.

En su lugar, tendremos que usar JavaScript y más específicamente el [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) que permite actualizar la URL y cree una nueva entrada en el historial de navegación, sin volver a cargar el HTML.

### Tarea

Creemos una nueva función que podamos usar para navegar en nuestra aplicación:


```js
function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute();
}
```

Este método primero actualiza la URL actual según la ruta proporcionada y luego actualiza la plantilla. La propiedad `window.location.origin` devuelve la raíz de la URL, lo que nos permite reconstruir una URL completa a partir de una ruta determinada.

Ahora que tenemos esta función, podemos solucionar el problema que tenemos si una ruta no coincide con ninguna ruta definida. Modificaremos la función `updateRoute` agregando un respaldo a una de las rutas existentes si no podemos encontrar una coincidencia.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Si no se puede encontrar una ruta, ahora lo redireccionaremos a la página de `login`.

Completemos el sistema de navegación agregando enlaces a nuestros botones *login* y *logout* en el HTML.

```html
<button onclick="navigate('/dashboard')">Login</button>
...
<button onclick="navigate('/login')">Logout</button>
```

Usando el atributo [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) enlaza el evento `click` al código JavaScript, aquí la llamada al` navigate()`función.

Intente hacer clic en estos botones, ahora debería poder navegar entre las diferentes pantallas de su aplicación.

✅ El método `history.pushState` es parte del estándar HTML5 y está implementado en [todos los navegadores modernos](https://caniuse.com/?search=pushState). Si está creando una aplicación web para navegadores más antiguos, hay un truco que puede usar en lugar de esta API: usar un [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) antes la ruta puede implementar un enrutamiento que funcione con la navegación de anclaje regular y no recargue la página, ya que su propósito era crear enlaces internos dentro de una página.

## Manejo de los botones de avance y retroceso del navegador

El uso de `history.pushState` crea nuevas entradas en el historial de navegación del navegador. Puede verificar que manteniendo presionado el *botón de retroceso* de su navegador, debería mostrar algo como esto:

![Captura de pantalla del historial de navegación](./history.png)

Si intenta hacer clic en el botón Atrás varias veces, verá que la URL actual cambia y el historial se actualiza, pero se sigue mostrando la misma plantilla.

Eso es porque no sabemos que necesitamos llamar a `updateRoute()` cada vez que cambia el historial. Si echas un vistazo a la [`history.pushState` documentation](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState), puedes ver que si el estado cambia - lo que significa que nos mudamos a una URL diferente - se activa el evento [`popstate`](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event). Lo usaremos para solucionar ese problema.

### Tarea

Para asegurarnos de que la plantilla mostrada se actualice cuando cambie el historial del navegador, adjuntaremos una nueva función que llama a `updateRoute()`. Lo haremos en la parte inferior de nuestro archivo `app.js`:


```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Nota: utilizamos una [función de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aquí para declarar nuestro controlador de eventos `popstate` por concisión, pero un la función regular funcionaría igual.

Ahora intente utilizar los botones de avance y retroceso de sus navegadores y compruebe que esta vez lo que se muestra está actualizado correctamente.

---

## 🚀 Desafío

Agregue una nueva plantilla y ruta para una tercera página que muestre los créditos de esta aplicación.

## [Post-lecture prueba](../.github/post-lecture-quiz.md)

## Revisión y autoestudio

**Tarea**: [Mejorar el enrutamiento](assignment.es.md)
