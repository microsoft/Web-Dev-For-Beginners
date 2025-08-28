<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-24T13:38:22+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "es"
}
-->
# Construir una App Bancaria Parte 1: Plantillas HTML y Rutas en una Aplicación Web

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/41)

### Introducción

Desde la llegada de JavaScript en los navegadores, los sitios web se han vuelto más interactivos y complejos que nunca. Las tecnologías web ahora se utilizan comúnmente para crear aplicaciones completamente funcionales que se ejecutan directamente en un navegador, conocidas como [aplicaciones web](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_web). Dado que las aplicaciones web son altamente interactivas, los usuarios no quieren esperar a que se recargue toda la página cada vez que realizan una acción. Por eso se utiliza JavaScript para actualizar el HTML directamente mediante el DOM, proporcionando una experiencia de usuario más fluida.

En esta lección, sentaremos las bases para crear una aplicación bancaria web, utilizando plantillas HTML para crear múltiples pantallas que se pueden mostrar y actualizar sin necesidad de recargar toda la página HTML.

### Prerrequisitos

Necesitas un servidor web local para probar la aplicación web que construiremos en esta lección. Si no tienes uno, puedes instalar [Node.js](https://nodejs.org) y usar el comando `npx lite-server` desde tu carpeta de proyecto. Esto creará un servidor web local y abrirá tu aplicación en un navegador.

### Preparación

En tu computadora, crea una carpeta llamada `bank` con un archivo llamado `index.html` dentro de ella. Comenzaremos con este [código base](https://es.wikipedia.org/wiki/C%C3%B3digo_base) de HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Plantillas HTML

Si deseas crear múltiples pantallas para una página web, una solución sería crear un archivo HTML para cada pantalla que quieras mostrar. Sin embargo, esta solución tiene algunos inconvenientes:

- Tienes que recargar todo el HTML al cambiar de pantalla, lo que puede ser lento.
- Es difícil compartir datos entre las diferentes pantallas.

Otra opción es tener un solo archivo HTML y definir múltiples [plantillas HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) utilizando el elemento `<template>`. Una plantilla es un bloque HTML reutilizable que no se muestra en el navegador y que necesita ser instanciado en tiempo de ejecución usando JavaScript.

### Tarea

Crearemos una aplicación bancaria con dos pantallas: la página de inicio de sesión y el panel de control. Primero, añadamos en el cuerpo del HTML un elemento marcador de posición que utilizaremos para instanciar las diferentes pantallas de nuestra aplicación:

```html
<div id="app">Loading...</div>
```

Le damos un `id` para que sea más fácil localizarlo con JavaScript más adelante.

> Consejo: dado que el contenido de este elemento será reemplazado, podemos poner un mensaje o indicador de carga que se mostrará mientras la aplicación se está cargando.

A continuación, añadamos debajo la plantilla HTML para la página de inicio de sesión. Por ahora, solo pondremos un título y una sección que contiene un enlace que utilizaremos para realizar la navegación.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Luego añadiremos otra plantilla HTML para la página del panel de control. Esta página contendrá diferentes secciones:

- Un encabezado con un título y un enlace para cerrar sesión.
- El saldo actual de la cuenta bancaria.
- Una lista de transacciones, mostrada en una tabla.

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
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

> Consejo: al crear plantillas HTML, si deseas ver cómo se verán, puedes comentar las líneas `<template>` y `</template>` envolviéndolas con `<!-- -->`.

✅ ¿Por qué crees que usamos atributos `id` en las plantillas? ¿Podríamos usar algo más como clases?

## Mostrar plantillas con JavaScript

Si pruebas tu archivo HTML actual en un navegador, verás que se queda mostrando `Loading...`. Esto se debe a que necesitamos agregar algo de código JavaScript para instanciar y mostrar las plantillas HTML.

Instanciar una plantilla generalmente se realiza en 3 pasos:

1. Recuperar el elemento de la plantilla en el DOM, por ejemplo, usando [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clonar el elemento de la plantilla, usando [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Adjuntarlo al DOM bajo un elemento visible, por ejemplo, usando [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ ¿Por qué necesitamos clonar la plantilla antes de adjuntarla al DOM? ¿Qué crees que sucedería si omitimos este paso?

### Tarea

Crea un nuevo archivo llamado `app.js` en tu carpeta de proyecto e importa ese archivo en la sección `<head>` de tu HTML:

```html
<script src="app.js" defer></script>
```

Ahora, en `app.js`, crearemos una nueva función `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Lo que hacemos aquí son exactamente los 3 pasos descritos anteriormente. Instanciamos la plantilla con el `id` `templateId` y colocamos su contenido clonado dentro de nuestro marcador de posición de la aplicación. Nota que necesitamos usar `cloneNode(true)` para copiar todo el subárbol de la plantilla.

Ahora llama a esta función con una de las plantillas y observa el resultado.

```js
updateRoute('login');
```

✅ ¿Cuál es el propósito de este código `app.innerHTML = '';`? ¿Qué sucede sin él?

## Creando rutas

Cuando hablamos de una aplicación web, llamamos *Ruteo* a la intención de mapear **URLs** a pantallas específicas que deben mostrarse. En un sitio web con múltiples archivos HTML, esto se hace automáticamente ya que las rutas de los archivos se reflejan en la URL. Por ejemplo, con estos archivos en tu carpeta de proyecto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Si creas un servidor web con `mywebsite` como raíz, el mapeo de URLs será:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Sin embargo, para nuestra aplicación web estamos utilizando un único archivo HTML que contiene todas las pantallas, por lo que este comportamiento predeterminado no nos será útil. Tenemos que crear este mapa manualmente y actualizar la plantilla mostrada usando JavaScript.

### Tarea

Usaremos un objeto simple para implementar un [mapa](https://es.wikipedia.org/wiki/Arreglo_asociativo) entre las rutas de URL y nuestras plantillas. Añade este objeto en la parte superior de tu archivo `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Ahora modifiquemos un poco la función `updateRoute`. En lugar de pasar directamente el `templateId` como argumento, queremos recuperarlo primero mirando la URL actual y luego usar nuestro mapa para obtener el valor correspondiente del ID de la plantilla. Podemos usar [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) para obtener solo la sección de la ruta de la URL.

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

Aquí mapeamos las rutas que declaramos al ID de plantilla correspondiente. Puedes probar que funciona correctamente cambiando la URL manualmente en tu navegador.

✅ ¿Qué sucede si introduces una ruta desconocida en la URL? ¿Cómo podríamos resolver esto?

## Añadiendo navegación

El siguiente paso para nuestra aplicación es añadir la posibilidad de navegar entre páginas sin tener que cambiar la URL manualmente. Esto implica dos cosas:

1. Actualizar la URL actual.
2. Actualizar la plantilla mostrada en función de la nueva URL.

Ya nos encargamos de la segunda parte con la función `updateRoute`, así que tenemos que averiguar cómo actualizar la URL actual.

Tendremos que usar JavaScript y, más específicamente, el método [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), que permite actualizar la URL y crear una nueva entrada en el historial de navegación, sin recargar el HTML.

> Nota: Aunque el elemento de anclaje HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) puede usarse por sí solo para crear hipervínculos a diferentes URLs, hará que el navegador recargue el HTML por defecto. Es necesario evitar este comportamiento al manejar el ruteo con JavaScript personalizado, usando la función `preventDefault()` en el evento de clic.

### Tarea

Creemos una nueva función que podamos usar para navegar en nuestra aplicación:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Este método primero actualiza la URL actual en función de la ruta dada y luego actualiza la plantilla. La propiedad `window.location.origin` devuelve la raíz de la URL, lo que nos permite reconstruir una URL completa a partir de una ruta dada.

Ahora que tenemos esta función, podemos encargarnos del problema que tenemos si una ruta no coincide con ninguna ruta definida. Modificaremos la función `updateRoute` añadiendo un caso de respaldo a una de las rutas existentes si no encontramos una coincidencia.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Si no se encuentra una ruta, ahora redirigiremos a la página de inicio de sesión.

Ahora creemos una función para obtener la URL cuando se hace clic en un enlace y evitar el comportamiento predeterminado del navegador:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Completemos el sistema de navegación añadiendo enlaces a nuestros botones de *Iniciar sesión* y *Cerrar sesión* en el HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

El objeto `event` anterior captura el evento `click` y lo pasa a nuestra función `onLinkClick`.

Usando el atributo [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick), vincula el evento `click` al código JavaScript, en este caso, la llamada a la función `navigate()`.

Prueba hacer clic en estos enlaces, ahora deberías poder navegar entre las diferentes pantallas de tu aplicación.

✅ El método `history.pushState` es parte del estándar HTML5 e implementado en [todos los navegadores modernos](https://caniuse.com/?search=pushState). Si estás construyendo una aplicación web para navegadores más antiguos, hay un truco que puedes usar en lugar de esta API: usar un [hash (`#`)](https://es.wikipedia.org/wiki/Fragmento_de_URI) antes de la ruta te permite implementar un ruteo que funciona con navegación de anclajes regulares y no recarga la página, ya que su propósito era crear enlaces internos dentro de una página.

## Manejo de los botones de retroceso y avance del navegador

Usar `history.pushState` crea nuevas entradas en el historial de navegación del navegador. Puedes comprobarlo manteniendo presionado el *botón de retroceso* de tu navegador, debería mostrar algo como esto:

![Captura de pantalla del historial de navegación](../../../../7-bank-project/1-template-route/history.png)

Si intentas hacer clic en el botón de retroceso varias veces, verás que la URL actual cambia y el historial se actualiza, pero la misma plantilla sigue mostrándose.

Esto se debe a que la aplicación no sabe que necesitamos llamar a `updateRoute()` cada vez que cambia el historial. Si revisas la documentación de [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), puedes ver que si el estado cambia - es decir, nos movemos a una URL diferente - se dispara el evento [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event). Usaremos esto para solucionar el problema.

### Tarea

Para asegurarnos de que la plantilla mostrada se actualice cuando cambie el historial del navegador, adjuntaremos una nueva función que llame a `updateRoute()`. Lo haremos al final de nuestro archivo `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Nota: usamos una [función flecha](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aquí para declarar nuestro manejador del evento `popstate` por concisión, pero una función regular funcionaría igual.

Aquí tienes un video de repaso sobre funciones flecha:

[![Funciones Flecha](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funciones Flecha")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre funciones flecha.

Ahora intenta usar los botones de retroceso y avance de tu navegador, y verifica que la ruta mostrada se actualice correctamente esta vez.

---

## 🚀 Desafío

Añade una nueva plantilla y ruta para una tercera página que muestre los créditos de esta aplicación.

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/42)

## Repaso y Autoestudio

El ruteo es una de las partes sorprendentemente complicadas del desarrollo web, especialmente a medida que la web se mueve de comportamientos de recarga de página a recargas de aplicaciones de una sola página (Single Page Application). Lee un poco sobre [cómo el servicio Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) maneja el ruteo. ¿Puedes explicar por qué algunas de las decisiones descritas en ese documento son necesarias?

## Tarea

[Mejora el ruteo](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.