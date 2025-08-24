<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-24T13:33:31+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "es"
}
-->
# Construir una App Bancaria Parte 3: Métodos para Obtener y Usar Datos

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45)

### Introducción

En el núcleo de cada aplicación web está *la información*. La información puede tomar muchas formas, pero su propósito principal siempre es mostrar datos al usuario. Con las aplicaciones web volviéndose cada vez más interactivas y complejas, cómo el usuario accede e interactúa con la información es ahora una parte clave del desarrollo web.

En esta lección, veremos cómo obtener datos de un servidor de manera asincrónica y usar estos datos para mostrar información en una página web sin recargar el HTML.

### Prerrequisitos

Necesitas haber construido la parte de la aplicación web [Formulario de Inicio de Sesión y Registro](../2-forms/README.md) para esta lección. También necesitas instalar [Node.js](https://nodejs.org) y [ejecutar la API del servidor](../api/README.md) localmente para obtener datos de cuentas.

Puedes probar que el servidor está funcionando correctamente ejecutando este comando en una terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX y obtención de datos

Los sitios web tradicionales actualizan el contenido mostrado cuando el usuario selecciona un enlace o envía datos usando un formulario, recargando la página HTML completa. Cada vez que se necesitan cargar nuevos datos, el servidor web devuelve una página HTML completamente nueva que debe ser procesada por el navegador, interrumpiendo la acción actual del usuario y limitando las interacciones durante la recarga. Este flujo de trabajo también se conoce como una *Aplicación de Múltiples Páginas* o *MPA*.

![Flujo de actualización en una aplicación de múltiples páginas](../../../../7-bank-project/3-data/images/mpa.png)

Cuando las aplicaciones web comenzaron a volverse más complejas e interactivas, surgió una nueva técnica llamada [AJAX (JavaScript y XML Asíncronos)](https://es.wikipedia.org/wiki/AJAX). Esta técnica permite a las aplicaciones web enviar y recuperar datos de un servidor de manera asincrónica usando JavaScript, sin tener que recargar la página HTML, lo que resulta en actualizaciones más rápidas e interacciones más fluidas. Cuando se reciben nuevos datos del servidor, la página HTML actual también puede ser actualizada con JavaScript usando la API del [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Con el tiempo, este enfoque ha evolucionado hacia lo que ahora se llama una [*Aplicación de Página Única* o *SPA*](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_de_p%C3%A1gina_%C3%BAnica).

![Flujo de actualización en una aplicación de página única](../../../../7-bank-project/3-data/images/spa.png)

Cuando se introdujo AJAX por primera vez, la única API disponible para obtener datos de manera asincrónica era [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Pero los navegadores modernos ahora también implementan la más conveniente y poderosa [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), que utiliza promesas y es más adecuada para manipular datos JSON.

> Aunque todos los navegadores modernos soportan la `Fetch API`, si deseas que tu aplicación web funcione en navegadores antiguos o heredados, siempre es una buena idea verificar primero la [tabla de compatibilidad en caniuse.com](https://caniuse.com/fetch).

### Tarea

En [la lección anterior](../2-forms/README.md) implementamos el formulario de registro para crear una cuenta. Ahora agregaremos código para iniciar sesión usando una cuenta existente y obtener sus datos. Abre el archivo `app.js` y añade una nueva función `login`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Aquí comenzamos recuperando el elemento del formulario con `getElementById()`, y luego obtenemos el nombre de usuario del campo de entrada con `loginForm.user.value`. Cada control de formulario puede ser accedido por su nombre (establecido en el HTML usando el atributo `name`) como una propiedad del formulario.

De manera similar a lo que hicimos para el registro, crearemos otra función para realizar una solicitud al servidor, pero esta vez para obtener los datos de la cuenta:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Usamos la API `fetch` para solicitar los datos de manera asincrónica al servidor, pero esta vez no necesitamos ningún parámetro adicional aparte de la URL a llamar, ya que solo estamos consultando datos. Por defecto, `fetch` crea una solicitud HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), que es lo que buscamos aquí.

✅ `encodeURIComponent()` es una función que escapa caracteres especiales para URLs. ¿Qué problemas podríamos tener si no llamamos a esta función y usamos directamente el valor de `user` en la URL?

Ahora actualicemos nuestra función `login` para usar `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Primero, como `getAccount` es una función asincrónica, necesitamos usar la palabra clave `await` para esperar el resultado del servidor. Como con cualquier solicitud al servidor, también debemos manejar los casos de error. Por ahora, solo agregaremos un mensaje de registro para mostrar el error y volveremos a esto más adelante.

Luego, debemos almacenar los datos en algún lugar para poder usarlos más tarde y mostrar la información del tablero. Dado que la variable `account` aún no existe, crearemos una variable global para ella en la parte superior de nuestro archivo:

```js
let account = null;
```

Después de que los datos del usuario se guarden en una variable, podemos navegar desde la página de *login* al *dashboard* usando la función `navigate()` que ya tenemos.

Finalmente, necesitamos llamar a nuestra función `login` cuando se envíe el formulario de inicio de sesión, modificando el HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Prueba que todo funcione correctamente registrando una nueva cuenta e intentando iniciar sesión con la misma cuenta.

Antes de pasar a la siguiente parte, también podemos completar la función `register` añadiendo esto al final de la función:

```js
account = result;
navigate('/dashboard');
```

✅ ¿Sabías que por defecto solo puedes llamar a APIs del servidor desde el *mismo dominio y puerto* que la página web que estás viendo? Este es un mecanismo de seguridad impuesto por los navegadores. Pero espera, nuestra aplicación web se ejecuta en `localhost:3000` mientras que la API del servidor se ejecuta en `localhost:5000`, ¿por qué funciona? Usando una técnica llamada [Intercambio de Recursos de Origen Cruzado (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), es posible realizar solicitudes HTTP de origen cruzado si el servidor agrega encabezados especiales a la respuesta, permitiendo excepciones para dominios específicos.

> Aprende más sobre APIs tomando esta [lección](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Actualizar HTML para mostrar datos

Ahora que tenemos los datos del usuario, debemos actualizar el HTML existente para mostrarlos. Ya sabemos cómo recuperar un elemento del DOM usando, por ejemplo, `document.getElementById()`. Después de tener un elemento base, aquí hay algunas APIs que puedes usar para modificarlo o agregar elementos secundarios:

- Usando la propiedad [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) puedes cambiar el texto de un elemento. Ten en cuenta que cambiar este valor elimina todos los elementos secundarios del elemento (si los hay) y los reemplaza con el texto proporcionado. Por lo tanto, también es un método eficiente para eliminar todos los elementos secundarios de un elemento dado asignando una cadena vacía `''` a él.

- Usando [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) junto con el método [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) puedes crear y adjuntar uno o más nuevos elementos secundarios.

✅ Usando la propiedad [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) de un elemento también es posible cambiar su contenido HTML, pero esta debería evitarse ya que es vulnerable a ataques de [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### Tarea

Antes de pasar a la pantalla del tablero, hay una cosa más que deberíamos hacer en la página de *login*. Actualmente, si intentas iniciar sesión con un nombre de usuario que no existe, se muestra un mensaje en la consola, pero para un usuario normal no cambia nada y no sabes qué está pasando.

Agreguemos un elemento de marcador de posición en el formulario de inicio de sesión donde podamos mostrar un mensaje de error si es necesario. Un buen lugar sería justo antes del `<button>` de inicio de sesión:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Este elemento `<div>` está vacío, lo que significa que no se mostrará nada en la pantalla hasta que le agreguemos contenido. También le damos un `id` para poder recuperarlo fácilmente con JavaScript.

Vuelve al archivo `app.js` y crea una nueva función auxiliar `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Esta es bastante sencilla: dado un *id* de elemento y un *texto*, actualizará el contenido de texto del elemento del DOM con el `id` correspondiente. Usemos este método en lugar del mensaje de error anterior en la función `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Ahora, si intentas iniciar sesión con una cuenta inválida, deberías ver algo como esto:

![Captura de pantalla mostrando el mensaje de error durante el inicio de sesión](../../../../7-bank-project/3-data/images/login-error.png)

Ahora tenemos un texto de error que aparece visualmente, pero si lo intentas con un lector de pantalla, notarás que no se anuncia nada. Para que el texto que se agrega dinámicamente a una página sea anunciado por los lectores de pantalla, necesitará usar algo llamado [Región Viva](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Aquí vamos a usar un tipo específico de región viva llamada alerta:

```html
<div id="loginError" role="alert"></div>
```

Implementa el mismo comportamiento para los errores de la función `register` (no olvides actualizar el HTML).

## Mostrar información en el tablero

Usando las mismas técnicas que acabamos de ver, también nos encargaremos de mostrar la información de la cuenta en la página del tablero.

Así es como se ve un objeto de cuenta recibido del servidor:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Nota: para facilitarte la vida, puedes usar la cuenta `test` preexistente que ya está poblada con datos.

### Tarea

Comencemos reemplazando la sección "Balance" en el HTML para agregar elementos de marcador de posición:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

También agregaremos una nueva sección justo debajo para mostrar la descripción de la cuenta:

```html
<h2 id="description"></h2>
```

✅ Dado que la descripción de la cuenta funciona como un título para el contenido debajo de ella, está marcada semánticamente como un encabezado. Aprende más sobre cómo [la estructura de encabezados](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) es importante para la accesibilidad y analiza críticamente la página para determinar qué más podría ser un encabezado.

A continuación, crearemos una nueva función en `app.js` para llenar el marcador de posición:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Primero, verificamos que tenemos los datos de la cuenta que necesitamos antes de continuar. Luego usamos la función `updateElement()` que creamos anteriormente para actualizar el HTML.

> Para hacer que la visualización del balance sea más atractiva, usamos el método [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) para forzar la visualización del valor con 2 dígitos después del punto decimal.

Ahora necesitamos llamar a nuestra función `updateDashboard()` cada vez que se cargue la página del tablero. Si ya terminaste la [tarea de la lección 1](../1-template-route/assignment.md), esto debería ser sencillo; de lo contrario, puedes usar la siguiente implementación.

Agrega este código al final de la función `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Y actualiza la definición de rutas con:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Con este cambio, cada vez que se muestre la página del tablero, se llamará a la función `updateDashboard()`. Después de un inicio de sesión, deberías poder ver el balance de la cuenta, la moneda y la descripción.

## Crear filas de tabla dinámicamente con plantillas HTML

En la [primera lección](../1-template-route/README.md) usamos plantillas HTML junto con el método [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) para implementar la navegación en nuestra aplicación. Las plantillas también pueden ser más pequeñas y usarse para llenar partes repetitivas de una página de manera dinámica.

Usaremos un enfoque similar para mostrar la lista de transacciones en la tabla HTML.

### Tarea

Agrega una nueva plantilla en el `<body>` del HTML:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Esta plantilla representa una sola fila de tabla, con las 3 columnas que queremos llenar: *fecha*, *objeto* y *monto* de una transacción.

Luego, agrega esta propiedad `id` al elemento `<tbody>` de la tabla dentro de la plantilla del tablero para que sea más fácil de encontrar usando JavaScript:

```html
<tbody id="transactions"></tbody>
```

Nuestro HTML está listo, pasemos al código JavaScript y creemos una nueva función `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Esta función hace exactamente lo que su nombre implica: usando la plantilla que creamos anteriormente, crea una nueva fila de tabla y llena su contenido usando los datos de la transacción. Usaremos esto en nuestra función `updateDashboard()` para llenar la tabla:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Aquí usamos el método [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) que crea un nuevo fragmento del DOM en el que podemos trabajar, antes de finalmente adjuntarlo a nuestra tabla HTML.

Todavía hay una cosa más que debemos hacer antes de que este código funcione, ya que nuestra función `updateElement()` actualmente solo soporta contenido de texto. Cambiemos su código un poco:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Usamos el método [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) ya que permite adjuntar texto o [Nodos del DOM](https://developer.mozilla.org/docs/Web/API/Node) a un elemento padre, lo cual es perfecto para todos nuestros casos de uso.
Si intentas usar la cuenta `test` para iniciar sesión, ahora deberías ver una lista de transacciones en el panel de control 🎉.

---

## 🚀 Desafío

Trabajen juntos para hacer que la página del panel de control se parezca a una aplicación bancaria real. Si ya has estilizado tu aplicación, intenta usar [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) para crear un [diseño responsivo](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) que funcione bien tanto en dispositivos de escritorio como en móviles.

Aquí tienes un ejemplo de una página de panel de control estilizada:

![Captura de pantalla de un ejemplo del resultado del panel de control después de estilizarlo](../../../../7-bank-project/images/screen2.png)

## Cuestionario posterior a la clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46)

## Tarea

[Refactoriza y comenta tu código](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.