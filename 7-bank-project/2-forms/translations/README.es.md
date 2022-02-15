# Cree un formulario de inicio de sesión y registro

## [Prueba previa a la conferencia](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/43)

### Introducción

En casi todas las aplicaciones web modernas, puede crear una cuenta para tener su propio espacio privado. Como varios usuarios pueden acceder a una aplicación web al mismo tiempo, necesita un mecanismo para almacenar los datos personales de cada usuario por separado y seleccionar qué información mostrar. No cubriremos cómo administrar [la identidad del usuario de forma segura](https://en.wikipedia.org/wiki/Authentication) ya que es un tema extenso en sí mismo, pero nos aseguraremos de que cada usuario pueda crear uno. O más cuenta bancaria en nuestra aplicación.

En esta parte usaremos formularios HTML para agregar inicio de sesión y registro a nuestra aplicación web. Veremos cómo enviar los datos a una API de servidor de forma programática y, en última instancia, cómo definir reglas de validación básicas para las entradas del usuario.

### Requisito previo

Debe haber completado las [plantillas HTML y enrutamiento](../1-template-route/README.md) de la aplicación web para esta lección. También necesita instalar [Node.js](https://nodejs.org) y [ejecutar la API del servidor](../api/README.md) localmente para poder enviar datos para crear cuentas.

Puede probar que el servidor está funcionando correctamente ejecutando este comando en una terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Forma y controles

El elemento `<form>` encapsula una sección de un documento HTML donde el usuario puede ingresar y enviar datos con controles interactivos. Hay todo tipo de controles de interfaz de usuario (UI) que se pueden usar dentro de un formulario, siendo el más común los elementos `<input>` y `<button>`.

Hay muchos [types diferentes](https://developer.mozilla.org/docs/Web/HTML/Element/input) de `<input>`, por ejemplo, para crear un campo donde el usuario puede ingresar su nombre de usuario que puede usar:


```html
<input name="username" type="text">
```

El atributo `name` se usa para identificar el control y se usará como el nombre de la propiedad cuando se envíen los datos del formulario.

> Eche un vistazo a la lista completa de [`<input>` tipos](https://developer.mozilla.org/docs/Web/HTML/Element/input) y [otros controles de formulario](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) para tener una idea de todos los elementos nativos de la interfaz de usuario que puede utilizar al crear su interfaz de usuario.

✅ Tenga en cuenta que `<input>` es un [elemento vacío](https://developer.mozilla.org/docs/Glossary/Empty_element) en el que *no* debe agregar una etiqueta de cierre coincidente. Sin embargo, puede usar la notación de cierre automático `<input/>`, pero no es necesaria.

El elemento `<button>` dentro de un formulario es un poco especial. Si no especifica su atributo `type`, automáticamente enviará los datos del formulario al servidor cuando se presione. Estos son los posibles valores de tipo:

- `enviar`: el valor predeterminado dentro de un` <formulario> `, el botón activa la acción de envío del formulario.
- `reset`: El botón restablece todos los controles de formulario a sus valores iniciales.
- `button`: No asigna un comportamiento predeterminado cuando se presiona el botón. A continuación, puede asignarle acciones personalizadas mediante JavaScript.

### Tarea:

Comencemos agregando un formulario a la plantilla de inicio de sesión. Necesitaremos un campo *nombre de usuario* y un botón *Iniciar sesión*.


```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="user">Username</label>
      <input name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Si observa más de cerca, puede notar que también agregamos un elemento `<label>` aquí. Las `<label>` se utilizan para agregar un título para los controles de la IU, como nuestro campo de nombre de usuario. Las etiquetas son importantes para la legibilidad de sus formularios, pero también tienen beneficios adicionales:

- Al asociar una etiqueta a un control de formulario, ayuda a los usuarios que utilizan tecnologías de asistencia (como un lector de pantalla) a comprender qué datos se espera que proporcionen.
- Puede hacer clic en la etiqueta para centrarse directamente en la entrada asociada, lo que facilita el acceso a los dispositivos con pantalla táctil.

> [Accesibilidad](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) en la web es un tema muy importante que a menudo se pasa por alto. Gracias a los [elementos semánticos HTML5](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) no es difícil crear contenido accesible si los usas correctamente. Puede [leer más sobre accesibilidad](https://developer.mozilla.org/docs/Web/Accessibility) para evitar errores comunes y convertirse en un desarrollador responsable.

Ahora agregaremos un segundo formulario para el registro, justo debajo del anterior:


```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input name="user" type="text">
  <label for="currency">Currency</label>
  <input name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input name="description" type="text">
  <label for="balance">Current balance</label>
  <input name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Usando el atributo `value` podemos definir un valor predeterminado para una entrada dada.
Observe también que la entrada para `balance` tiene el tipo `number`. ¿Se ve diferente a las otras entradas? Intenta interactuar con él.

✅ ¿Puede navegar e interactuar con los formularios usando solo un teclado? ¿Cómo lo harías tú?

## Envío de datos al servidor

Ahora que tenemos una interfaz de usuario funcional, el siguiente paso es enviar los datos a nuestro servidor. Hagamos una prueba rápida con nuestro código actual: ¿qué sucede si hace clic en el botón *Iniciar sesión* o *Registrarse*?

¿Notó el cambio en la sección de URL de su navegador?

! [Captura de pantalla del cambio de URL del navegador después de hacer clic en el botón Registrar](./images/click-register.png)

La acción predeterminada para un `<form>` es enviar el formulario a la URL del servidor actual utilizando el [método GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3 ), agregando los datos del formulario directamente a la URL. Sin embargo, este método tiene algunas deficiencias:

- Los datos enviados son de tamaño muy limitado (unos 2000 caracteres)
- Los datos son directamente visibles en la URL (no es ideal para contraseñas)
- No funciona con cargas de archivos.

Es por eso que puede cambiarlo para usar el [método POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) que envía los datos del formulario al servidor en el cuerpo de la solicitud HTTP, sin ninguna de las limitaciones anteriores.

> Si bien POST es el método más utilizado para enviar datos, [en algunos escenarios específicos](https://www.w3.org/2001/tag/doc/whenToUseGet.html) es preferible utilizar el método GET, al implementar un campo de búsqueda, por ejemplo.

### Tarea

Agregue las propiedades `action` y `method` al formulario de registro:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Ahora intente registrar una nueva cuenta con su nombre. Después de hacer clic en el botón * Registrarse *, debería ver algo como esto:

![](./images/form-post.png)

Si todo va bien, el servidor debe responder a su solicitud con una respuesta [JSON](https://www.json.org/json-en.html) que contenga los datos de la cuenta que se creó.

✅ Intente registrarse nuevamente con el mismo nombre. ¿Lo que pasa?

## Envío de datos sin recargar la página

Como probablemente haya notado, hay un pequeño problema con el enfoque que acabamos de usar: al enviar el formulario, salimos de nuestra aplicación y el navegador redirige a la URL del servidor. Estamos tratando de evitar todas las recargas de páginas con nuestra aplicación web, ya que estamos creando una [Aplicación de una sola página (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Para enviar los datos del formulario al servidor sin forzar la recarga de una página, tenemos que usar código JavaScript. En lugar de poner una URL en la propiedad `action` de un elemento `<form>`, puede usar cualquier código JavaScript precedido por la cadena `javascript:` para realizar una acción personalizada. Usar esto también significa que tendrá que implementar algunas tareas que anteriormente el navegador realizaba automáticamente:

- Recuperar los datos del formulario
- Convierta y codifique los datos del formulario a un formato adecuado
- Crea la solicitud HTTP y envíala al servidor

### Tarea

Reemplace el formulario de registro `acción` con:

```html
<form id="registerForm" action="javascript:register()">
```

Abra `app.js` agregue una nueva función llamada `registro`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Aquí recuperamos el elemento del formulario usando `getElementById()` y usamos el ayudante [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) para extraer los valores del formulario controles como un conjunto de pares clave/valor. Luego convertimos los datos a un objeto regular usando [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) y finalmente serialice los datos en [JSON](https://www.json.org/json-en.html), un formato que se utiliza comúnmente para intercambiar datos en la web.

Los datos ahora están listos para enviarse al servidor. Cree una nueva función llamada `createAccount`:


```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

¿Qué hace esta función? Primero, observe la palabra clave `async` aquí. Esto significa que la función contiene código que se ejecutará [** asincrónicamente**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Cuando se usa junto con la palabra clave `await`, permite esperar a que se ejecute el código asincrónico, como esperar la respuesta del servidor aquí, antes de continuar.

Aquí hay un video rápido sobre el uso de `async/await`:

[![Async y Await para administrar promesas](https://img.youtube.com/vi/4yJUTjtIlww/0.jpg)](https://youtube.com/watch?v=4yJUTjtIlww "Async y Await para administrar promesas")

Usamos la API `fetch()` para enviar datos JSON al servidor. Este método toma 2 parámetros:

- La URL del servidor, por lo que volvemos a colocar `//localhost:5000/api/accounts` aquí.
- La configuración de la solicitud. Ahí es donde establecemos el método en `POST` y proporcionamos el `body` de la solicitud. Como estamos enviando datos JSON al servidor, también necesitamos establecer el encabezado `Content-Type` en `application/json` para que el servidor sepa cómo interpretar el contenido.

Como el servidor responderá a la solicitud con JSON, podemos usar `await response.json()` para analizar el contenido JSON y devolver el objeto resultante. Tenga en cuenta que este método es asíncrono, por lo que usamos la palabra clave `await` aquí antes de regresar para asegurarnos de que también se detecta cualquier error durante el análisis.

Ahora agregue un código a la función `register` para llamar a `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Debido a que usamos la palabra clave `await` aquí, necesitamos agregar la palabra clave `async` antes de la función de registro:

```js
async function register() {
```

Finalmente, agreguemos algunos registros para verificar el resultado. La función final debería verse así:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  console.log('Account created!', result);
}
```

¡Eso fue un poco largo pero llegamos allí! Si abre sus [herramientas de desarrollo del navegador](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) e intenta registrar una nueva cuenta, no debería ver ningún cambio en la página web pero aparecerá un mensaje en la consola confirmando que todo funciona.

![Captura de pantalla que muestra el mensaje de registro en la consola del navegador](../images/browser-console.png)

✅ ¿Crees que los datos se envían al servidor de forma segura? ¿Y si alguien pudiera interceptar la solicitud? Puede leer sobre [HTTPS](https://en.wikipedia.org/wiki/HTTPS) para saber más sobre la comunicación segura de datos.

## Validación de datos

Si intenta registrar una nueva cuenta sin establecer un nombre de usuario primero, puede ver que el servidor devuelve un error con el código de estado [400 (Solicitud incorrecta)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Antes de enviar datos a un servidor, es una buena práctica [validar los datos del formulario](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) de antemano cuando sea posible, para asegurarse de enviar un solicitud válida. Los controles de formularios HTML5 proporcionan una validación incorporada utilizando varios atributos:

- `required`: el campo debe completarse; de ​​lo contrario, el formulario no se podrá enviar
- `minlength` y `maxlength`: define el número mínimo y máximo de caracteres en los campos de texto.
- `min` y `max`: define el valor mínimo y máximo de un campo numérico.
- `type`: define el tipo de datos esperados, como `number`, `email`, `file` u [otros tipos integrados](https://developer.mozilla.org/docs/Web/HTML/Element/input). Este atributo también puede cambiar la representación visual del control de formulario.
- `patrón`: permite definir un patrón [expresión regular](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) para probar si los datos ingresados ​​son válidos o no.

> Consejo: puedes personalizar el aspecto de los controles de tu formulario dependiendo de si son válidos o no usando las pseudoclases CSS `:valid` y `:invalid`.


### Tarea

Hay 2 campos obligatorios para crear una nueva cuenta válida, el nombre de usuario y la moneda, los otros campos son opcionales. Actualice el formulario en HTML para reflejar que:

```html
<input name="user" type="text" required>
...
<input name="currency" type="text" value="$" required>
```

Si bien esta implementación de servidor en particular no impone límites específicos en la longitud máxima de los campos, siempre es una buena práctica definir límites razonables para cualquier entrada de texto del usuario.

Agrega un atributo `maxlength` a los campos de texto:

```html
<input name="user" type="text" maxlength="20" required>
...
<input name="currency" type="text" value="$" maxlength="5" required>
...
<input name="description" type="text" maxlength="100">
```

Ahora, si presiona el botón *Registrar* y un campo no respeta una regla de validación que definimos, debería ver algo como esto:

![Captura de pantalla que muestra el error de validación al intentar enviar el formulario](../images/validation-error.png)

Una validación como esta realizada *antes* de enviar cualquier dato al servidor se llama validación **del lado del cliente**. Pero tenga en cuenta que no siempre es posible realizar todas las comprobaciones sin enviar los datos. Por ejemplo, no podemos comprobar aquí si ya existe una cuenta con el mismo nombre de usuario sin enviar una solicitud al servidor. La validación adicional realizada en el servidor se denomina validación **del lado del servidor**.

Por lo general, ambos deben implementarse y, si bien el uso de la validación del lado del cliente mejora la experiencia del usuario al proporcionar comentarios instantáneos al usuario, la validación del lado del servidor es crucial para garantizar que los datos del usuario que manipula sean sólidos y seguros.

---

## 🚀 Desafío

Muestra un mensaje de error en el HTML si el usuario ya existe.

Aquí hay un ejemplo de cómo puede verse la página de inicio de sesión final después de un poco de estilo:

![Captura de pantalla de la página de inicio de sesión después de agregar estilos CSS](../images/result.png)

## [Prueba posterior a la conferencia](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/44)

## Revisión y autoestudio

Los desarrolladores se han vuelto muy creativos en sus esfuerzos de creación de formularios, especialmente en lo que respecta a las estrategias de validación. Obtenga información sobre los diferentes flujos de formularios consultando [CodePen](https://codepen.com); ¿Puedes encontrar algunas formas interesantes e inspiradoras?

## Asignación

[Diseña tu aplicación bancaria](assignment.es.md)
