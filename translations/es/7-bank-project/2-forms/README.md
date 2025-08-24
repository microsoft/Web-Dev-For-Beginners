<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-24T13:28:18+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "es"
}
-->
# Construir una App Bancaria Parte 2: Crear un Formulario de Inicio de Sesión y Registro

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/43)

### Introducción

En casi todas las aplicaciones web modernas, puedes crear una cuenta para tener tu propio espacio privado. Como múltiples usuarios pueden acceder a una aplicación web al mismo tiempo, necesitas un mecanismo para almacenar los datos personales de cada usuario por separado y seleccionar qué información mostrar. No cubriremos cómo gestionar [la identidad del usuario de forma segura](https://en.wikipedia.org/wiki/Authentication), ya que es un tema extenso por sí solo, pero nos aseguraremos de que cada usuario pueda crear una (o más) cuentas bancarias en nuestra aplicación.

En esta parte utilizaremos formularios HTML para añadir inicio de sesión y registro a nuestra aplicación web. Veremos cómo enviar los datos a una API de servidor de manera programada y, finalmente, cómo definir reglas básicas de validación para las entradas de los usuarios.

### Prerrequisitos

Debes haber completado la lección de [plantillas HTML y enrutamiento](../1-template-route/README.md) de la aplicación web. También necesitas instalar [Node.js](https://nodejs.org) y [ejecutar la API del servidor](../api/README.md) localmente para poder enviar datos y crear cuentas.

**Toma nota**  
Tendrás dos terminales ejecutándose al mismo tiempo, como se indica a continuación:  
1. Para la aplicación bancaria principal que construimos en la lección de [plantillas HTML y enrutamiento](../1-template-route/README.md).  
2. Para la [API del servidor de la aplicación bancaria](../api/README.md) que acabamos de configurar arriba.  

Necesitas que ambos servidores estén funcionando para seguir el resto de la lección. Están escuchando en diferentes puertos (puerto `3000` y puerto `5000`), así que todo debería funcionar correctamente.

Puedes probar que el servidor está funcionando correctamente ejecutando este comando en una terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Formulario y controles

El elemento `<form>` encapsula una sección de un documento HTML donde el usuario puede ingresar y enviar datos mediante controles interactivos. Hay todo tipo de controles de interfaz de usuario (UI) que se pueden usar dentro de un formulario, siendo los más comunes los elementos `<input>` y `<button>`.

Existen muchos [tipos](https://developer.mozilla.org/docs/Web/HTML/Element/input) diferentes de `<input>`. Por ejemplo, para crear un campo donde el usuario pueda ingresar su nombre de usuario, puedes usar:

```html
<input id="username" name="username" type="text">
```

El atributo `name` se utilizará como el nombre de la propiedad cuando los datos del formulario se envíen. El atributo `id` se usa para asociar un `<label>` con el control del formulario.

> Echa un vistazo a la lista completa de [tipos de `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) y [otros controles de formulario](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) para tener una idea de todos los elementos de UI nativos que puedes usar al construir tu interfaz.

✅ Nota que `<input>` es un [elemento vacío](https://developer.mozilla.org/docs/Glossary/Empty_element) en el que *no* debes añadir una etiqueta de cierre correspondiente. Sin embargo, puedes usar la notación de cierre automático `<input/>`, pero no es obligatorio.

El elemento `<button>` dentro de un formulario es un poco especial. Si no especificas su atributo `type`, automáticamente enviará los datos del formulario al servidor cuando se presione. Aquí están los posibles valores de `type`:

- `submit`: El valor predeterminado dentro de un `<form>`, el botón activa la acción de envío del formulario.
- `reset`: El botón restablece todos los controles del formulario a sus valores iniciales.
- `button`: No asigna un comportamiento predeterminado cuando se presiona el botón. Puedes asignar acciones personalizadas usando JavaScript.

### Tarea

Comencemos añadiendo un formulario a la plantilla de `login`. Necesitaremos un campo para el *nombre de usuario* y un botón de *Inicio de Sesión*.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Si miras más de cerca, notarás que también añadimos un elemento `<label>` aquí. Los elementos `<label>` se utilizan para añadir un nombre a los controles de UI, como nuestro campo de nombre de usuario. Las etiquetas son importantes para la legibilidad de tus formularios, pero también tienen beneficios adicionales:

- Al asociar una etiqueta con un control de formulario, ayuda a los usuarios que utilizan tecnologías asistivas (como lectores de pantalla) a entender qué datos se espera que proporcionen.
- Puedes hacer clic en la etiqueta para enfocar directamente el control asociado, lo que facilita su uso en dispositivos con pantalla táctil.

> La [accesibilidad](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) en la web es un tema muy importante que a menudo se pasa por alto. Gracias a los [elementos HTML semánticos](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), no es difícil crear contenido accesible si los usas correctamente. Puedes [leer más sobre accesibilidad](https://developer.mozilla.org/docs/Web/Accessibility) para evitar errores comunes y convertirte en un desarrollador responsable.

Ahora añadiremos un segundo formulario para el registro, justo debajo del anterior:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Usando el atributo `value` podemos definir un valor predeterminado para un campo dado.  
También nota que el campo para `balance` tiene el tipo `number`. ¿Se ve diferente a los otros campos? Intenta interactuar con él.

✅ ¿Puedes navegar e interactuar con los formularios usando solo un teclado? ¿Cómo lo harías?

## Enviar datos al servidor

Ahora que tenemos una interfaz funcional, el siguiente paso es enviar los datos al servidor. Hagamos una prueba rápida usando nuestro código actual: ¿qué sucede si haces clic en el botón de *Inicio de Sesión* o *Registrar*?

¿Notaste el cambio en la sección de URL de tu navegador?

![Captura de pantalla del cambio en la URL del navegador después de hacer clic en el botón Registrar](../../../../7-bank-project/2-forms/images/click-register.png)

La acción predeterminada de un `<form>` es enviar el formulario a la URL actual del servidor usando el [método GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), añadiendo los datos del formulario directamente a la URL. Sin embargo, este método tiene algunas limitaciones:

- Los datos enviados son muy limitados en tamaño (aproximadamente 2000 caracteres).
- Los datos son visibles directamente en la URL (no es ideal para contraseñas).
- No funciona con cargas de archivos.

Por eso puedes cambiarlo para usar el [método POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), que envía los datos del formulario al servidor en el cuerpo de la solicitud HTTP, sin ninguna de las limitaciones anteriores.

> Aunque POST es el método más utilizado para enviar datos, [en algunos escenarios específicos](https://www.w3.org/2001/tag/doc/whenToUseGet.html) es preferible usar el método GET, como al implementar un campo de búsqueda.

### Tarea

Añade las propiedades `action` y `method` al formulario de registro:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Ahora intenta registrar una nueva cuenta con tu nombre. Después de hacer clic en el botón *Registrar*, deberías ver algo como esto:

![Una ventana del navegador en la dirección localhost:5000/api/accounts, mostrando una cadena JSON con datos de usuario](../../../../7-bank-project/2-forms/images/form-post.png)

Si todo va bien, el servidor debería responder a tu solicitud con una respuesta [JSON](https://www.json.org/json-en.html) que contiene los datos de la cuenta que se creó.

✅ Intenta registrarte nuevamente con el mismo nombre. ¿Qué sucede?

## Enviar datos sin recargar la página

Como probablemente notaste, hay un pequeño problema con el enfoque que acabamos de usar: al enviar el formulario, salimos de nuestra aplicación y el navegador redirige a la URL del servidor. Estamos tratando de evitar todas las recargas de página con nuestra aplicación web, ya que estamos creando una [Aplicación de Página Única (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Para enviar los datos del formulario al servidor sin forzar una recarga de página, debemos usar código JavaScript. En lugar de poner una URL en la propiedad `action` de un elemento `<form>`, puedes usar cualquier código JavaScript precedido por la cadena `javascript:` para realizar una acción personalizada. Usar esto también significa que tendrás que implementar algunas tareas que anteriormente se hacían automáticamente por el navegador:

- Recuperar los datos del formulario.
- Convertir y codificar los datos del formulario a un formato adecuado.
- Crear la solicitud HTTP y enviarla al servidor.

### Tarea

Reemplaza la propiedad `action` del formulario de registro con:

```html
<form id="registerForm" action="javascript:register()">
```

Abre `app.js` y añade una nueva función llamada `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Aquí recuperamos el elemento del formulario usando `getElementById()` y utilizamos el ayudante [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) para extraer los valores de los controles del formulario como un conjunto de pares clave/valor. Luego convertimos los datos a un objeto regular usando [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) y finalmente serializamos los datos a [JSON](https://www.json.org/json-en.html), un formato comúnmente utilizado para intercambiar datos en la web.

Los datos ahora están listos para ser enviados al servidor. Crea una nueva función llamada `createAccount`:

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

¿Qué hace esta función? Primero, nota la palabra clave `async` aquí. Esto significa que la función contiene código que se ejecutará [**asíncronamente**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Cuando se usa junto con la palabra clave `await`, permite esperar a que el código asíncrono se ejecute, como esperar la respuesta del servidor aquí, antes de continuar.

Aquí hay un video rápido sobre el uso de `async/await`:

[![Async y Await para gestionar promesas](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async y Await para gestionar promesas")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre async/await.

Usamos la API `fetch()` para enviar datos JSON al servidor. Este método toma 2 parámetros:

- La URL del servidor, así que volvemos a poner `//localhost:5000/api/accounts` aquí.
- La configuración de la solicitud. Ahí es donde configuramos el método como `POST` y proporcionamos el `body` para la solicitud. Como estamos enviando datos JSON al servidor, también necesitamos configurar el encabezado `Content-Type` como `application/json` para que el servidor sepa cómo interpretar el contenido.

Como el servidor responderá a la solicitud con JSON, podemos usar `await response.json()` para analizar el contenido JSON y devolver el objeto resultante. Nota que este método es asíncrono, por lo que usamos la palabra clave `await` aquí antes de devolver para asegurarnos de que cualquier error durante el análisis también sea capturado.

Ahora añade algo de código a la función `register` para llamar a `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Debido a que usamos la palabra clave `await` aquí, necesitamos añadir la palabra clave `async` antes de la función register:

```js
async function register() {
```

Finalmente, añadamos algunos registros para verificar el resultado. La función final debería verse así:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Eso fue un poco largo, pero lo logramos. Si abres las [herramientas de desarrollo del navegador](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) e intentas registrar una nueva cuenta, no deberías ver ningún cambio en la página web, pero aparecerá un mensaje en la consola confirmando que todo funciona.

![Captura de pantalla mostrando un mensaje de registro en la consola del navegador](../../../../7-bank-project/2-forms/images/browser-console.png)

✅ ¿Crees que los datos se envían al servidor de forma segura? ¿Qué pasaría si alguien pudiera interceptar la solicitud? Puedes leer sobre [HTTPS](https://en.wikipedia.org/wiki/HTTPS) para saber más sobre la comunicación segura de datos.

## Validación de datos

Si intentas registrar una nueva cuenta sin establecer primero un nombre de usuario, puedes ver que el servidor devuelve un error con el código de estado [400 (Solicitud Incorrecta)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Antes de enviar datos a un servidor, es una buena práctica [validar los datos del formulario](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) de antemano cuando sea posible, para asegurarte de enviar una solicitud válida. Los controles de formularios HTML5 proporcionan validación integrada usando varios atributos:

- `required`: el campo necesita ser llenado, de lo contrario el formulario no puede ser enviado.
- `minlength` y `maxlength`: define el número mínimo y máximo de caracteres en campos de texto.
- `min` y `max`: define el valor mínimo y máximo de un campo numérico.
- `type`: define el tipo de datos esperados, como `number`, `email`, `file` u [otros tipos integrados](https://developer.mozilla.org/docs/Web/HTML/Element/input). Este atributo también puede cambiar la representación visual del control del formulario.
- `pattern`: permite definir un patrón de [expresión regular](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) para verificar si los datos ingresados son válidos o no.
> Consejo: puedes personalizar el aspecto de tus controles de formulario dependiendo de si son válidos o no utilizando las pseudo-clases CSS `:valid` y `:invalid`.
### Tarea

Hay 2 campos obligatorios para crear una cuenta nueva válida: el nombre de usuario y la moneda. Los demás campos son opcionales. Actualiza el HTML del formulario utilizando tanto el atributo `required` como el texto en la etiqueta del campo para que:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Aunque esta implementación particular del servidor no impone límites específicos en la longitud máxima de los campos, siempre es una buena práctica definir límites razonables para cualquier entrada de texto del usuario.

Agrega un atributo `maxlength` a los campos de texto:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Ahora, si presionas el botón *Registrar* y un campo no respeta una regla de validación que definimos, deberías ver algo como esto:

![Captura de pantalla mostrando el error de validación al intentar enviar el formulario](../../../../7-bank-project/2-forms/images/validation-error.png)

La validación como esta, realizada *antes* de enviar cualquier dato al servidor, se llama validación **del lado del cliente**. Pero ten en cuenta que no siempre es posible realizar todas las verificaciones sin enviar los datos. Por ejemplo, aquí no podemos verificar si ya existe una cuenta con el mismo nombre de usuario sin enviar una solicitud al servidor. La validación adicional realizada en el servidor se llama validación **del lado del servidor**.

Por lo general, ambas deben implementarse, y aunque usar validación del lado del cliente mejora la experiencia del usuario al proporcionar retroalimentación instantánea, la validación del lado del servidor es crucial para asegurarse de que los datos del usuario que manipulas sean sólidos y seguros.

---

## 🚀 Desafío

Muestra un mensaje de error en el HTML si el usuario ya existe.

Aquí tienes un ejemplo de cómo podría verse la página de inicio de sesión final después de un poco de estilización:

![Captura de pantalla de la página de inicio de sesión después de agregar estilos CSS](../../../../7-bank-project/2-forms/images/result.png)

## Cuestionario posterior a la clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/44)

## Revisión y autoestudio

Los desarrolladores han sido muy creativos en sus esfuerzos por construir formularios, especialmente en lo que respecta a estrategias de validación. Aprende sobre diferentes flujos de formularios explorando [CodePen](https://codepen.com); ¿puedes encontrar algunos formularios interesantes e inspiradores?

## Asignación

[Estiliza tu aplicación bancaria](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.