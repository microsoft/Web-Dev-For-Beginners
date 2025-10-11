<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T12:44:43+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "es"
}
-->
# Construir una App Bancaria Parte 4: Conceptos de Gestión de Estado

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/47)

### Introducción

A medida que una aplicación web crece, se vuelve un desafío mantener un seguimiento de todos los flujos de datos. ¿Qué código obtiene los datos, qué página los consume, dónde y cuándo necesitan ser actualizados...? Es fácil terminar con un código desordenado y difícil de mantener. Esto es especialmente cierto cuando necesitas compartir datos entre diferentes páginas de tu aplicación, como los datos del usuario. El concepto de *gestión de estado* siempre ha existido en todo tipo de programas, pero a medida que las aplicaciones web siguen creciendo en complejidad, ahora es un punto clave a considerar durante el desarrollo.

En esta última parte, revisaremos la aplicación que construimos para replantear cómo se gestiona el estado, permitiendo soporte para la actualización del navegador en cualquier momento y la persistencia de datos entre sesiones de usuario.

### Prerrequisitos

Necesitas haber completado la parte de [obtención de datos](../3-data/README.md) de la aplicación web para esta lección. También necesitas instalar [Node.js](https://nodejs.org) y [ejecutar la API del servidor](../api/README.md) localmente para poder gestionar los datos de la cuenta.

Puedes probar que el servidor está funcionando correctamente ejecutando este comando en una terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Replantear la gestión de estado

En la [lección anterior](../3-data/README.md), introdujimos un concepto básico de estado en nuestra aplicación con la variable global `account`, que contiene los datos bancarios del usuario actualmente conectado. Sin embargo, nuestra implementación actual tiene algunos defectos. Intenta actualizar la página cuando estés en el panel de control. ¿Qué sucede?

Hay tres problemas con el código actual:

- El estado no se persiste, ya que al actualizar el navegador vuelves a la página de inicio de sesión.
- Hay múltiples funciones que modifican el estado. A medida que la aplicación crece, puede ser difícil seguir los cambios y es fácil olvidar actualizar uno.
- El estado no se limpia, por lo que cuando haces clic en *Cerrar sesión*, los datos de la cuenta aún están allí, aunque estés en la página de inicio de sesión.

Podríamos actualizar nuestro código para abordar estos problemas uno por uno, pero eso crearía más duplicación de código y haría que la aplicación sea más compleja y difícil de mantener. O podríamos detenernos unos minutos y replantear nuestra estrategia.

> ¿Qué problemas estamos realmente tratando de resolver aquí?

[La gestión de estado](https://en.wikipedia.org/wiki/State_management) se trata de encontrar un buen enfoque para resolver estos dos problemas particulares:

- ¿Cómo mantener los flujos de datos en una aplicación comprensibles?
- ¿Cómo mantener los datos del estado siempre sincronizados con la interfaz de usuario (y viceversa)?

Una vez que hayas solucionado estos problemas, cualquier otro problema que puedas tener podría ya estar resuelto o haberse vuelto más fácil de solucionar. Hay muchas posibles estrategias para resolver estos problemas, pero optaremos por una solución común que consiste en **centralizar los datos y las formas de cambiarlos**. Los flujos de datos serían así:

![Esquema que muestra los flujos de datos entre el HTML, las acciones del usuario y el estado](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.es.png)

> Aquí no cubriremos la parte donde los datos actualizan automáticamente la vista, ya que está vinculada a conceptos más avanzados de [Programación Reactiva](https://en.wikipedia.org/wiki/Reactive_programming). Es un buen tema para profundizar si estás interesado.

✅ Hay muchas bibliotecas con diferentes enfoques para la gestión de estado, siendo [Redux](https://redux.js.org) una opción popular. Echa un vistazo a los conceptos y patrones que utiliza, ya que a menudo es una buena manera de aprender sobre los posibles problemas que podrías enfrentar en aplicaciones web grandes y cómo pueden resolverse.

### Tarea

Comenzaremos con un poco de refactorización. Reemplaza la declaración de `account`:

```js
let account = null;
```

Por:

```js
let state = {
  account: null
};
```

La idea es *centralizar* todos los datos de nuestra aplicación en un único objeto de estado. Por ahora solo tenemos `account` en el estado, por lo que no cambia mucho, pero crea un camino para futuras evoluciones.

También tenemos que actualizar las funciones que lo utilizan. En las funciones `register()` y `login()`, reemplaza `account = ...` con `state.account = ...`;

En la parte superior de la función `updateDashboard()`, agrega esta línea:

```js
const account = state.account;
```

Esta refactorización por sí sola no trajo muchas mejoras, pero la idea era sentar las bases para los próximos cambios.

## Rastrear cambios en los datos

Ahora que hemos establecido el objeto `state` para almacenar nuestros datos, el siguiente paso es centralizar las actualizaciones. El objetivo es facilitar el seguimiento de cualquier cambio y cuándo ocurren.

Para evitar que se realicen cambios directamente en el objeto `state`, también es una buena práctica considerarlo [*inmutable*](https://en.wikipedia.org/wiki/Immutable_object), lo que significa que no se puede modificar en absoluto. Esto también implica que debes crear un nuevo objeto de estado si deseas cambiar algo en él. Al hacer esto, construyes una protección contra posibles [efectos secundarios](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) no deseados y abres posibilidades para nuevas características en tu aplicación, como implementar deshacer/rehacer, además de facilitar la depuración. Por ejemplo, podrías registrar cada cambio realizado en el estado y mantener un historial de los cambios para entender el origen de un error.

En JavaScript, puedes usar [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) para crear una versión inmutable de un objeto. Si intentas realizar cambios en un objeto inmutable, se generará una excepción.

✅ ¿Conoces la diferencia entre un objeto inmutable *superficial* y uno *profundo*? Puedes leer sobre ello [aquí](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tarea

Vamos a crear una nueva función `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

En esta función, estamos creando un nuevo objeto de estado y copiando datos del estado anterior utilizando el [*operador de propagación (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Luego sobrescribimos una propiedad particular del objeto de estado con los nuevos datos utilizando la [notación de corchetes](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` para la asignación. Finalmente, bloqueamos el objeto para evitar modificaciones usando `Object.freeze()`. Por ahora, solo tenemos la propiedad `account` almacenada en el estado, pero con este enfoque puedes agregar tantas propiedades como necesites en el estado.

También actualizaremos la inicialización de `state` para asegurarnos de que el estado inicial también esté congelado:

```js
let state = Object.freeze({
  account: null
});
```

Después de eso, actualiza la función `register` reemplazando la asignación `state.account = result;` con:

```js
updateState('account', result);
```

Haz lo mismo con la función `login`, reemplazando `state.account = data;` con:

```js
updateState('account', data);
```

Ahora aprovecharemos para solucionar el problema de que los datos de la cuenta no se eliminan cuando el usuario hace clic en *Cerrar sesión*.

Crea una nueva función `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

En `updateDashboard()`, reemplaza la redirección `return navigate('/login');` con `return logout()`;

Intenta registrar una nueva cuenta, cerrar sesión e iniciar sesión nuevamente para verificar que todo sigue funcionando correctamente.

> Consejo: puedes observar todos los cambios de estado agregando `console.log(state)` al final de `updateState()` y abriendo la consola en las herramientas de desarrollo de tu navegador.

## Persistir el estado

La mayoría de las aplicaciones web necesitan persistir datos para poder funcionar correctamente. Todos los datos críticos generalmente se almacenan en una base de datos y se acceden a través de una API de servidor, como los datos de la cuenta de usuario en nuestro caso. Pero a veces, también es interesante persistir algunos datos en la aplicación cliente que se ejecuta en tu navegador, para una mejor experiencia de usuario o para mejorar el rendimiento de carga.

Cuando deseas persistir datos en tu navegador, hay algunas preguntas importantes que deberías hacerte:

- *¿Son los datos sensibles?* Deberías evitar almacenar cualquier dato sensible en el cliente, como contraseñas de usuario.
- *¿Por cuánto tiempo necesitas mantener estos datos?* ¿Planeas acceder a estos datos solo durante la sesión actual o quieres que se almacenen para siempre?

Hay múltiples formas de almacenar información dentro de una aplicación web, dependiendo de lo que quieras lograr. Por ejemplo, puedes usar las URLs para almacenar una consulta de búsqueda y hacerla compartible entre usuarios. También puedes usar [cookies HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) si los datos necesitan ser compartidos con el servidor, como la información de [autenticación](https://en.wikipedia.org/wiki/Authentication).

Otra opción es usar una de las muchas APIs del navegador para almacenar datos. Dos de ellas son particularmente interesantes:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): un [almacenamiento de clave/valor](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) que permite persistir datos específicos del sitio web actual entre diferentes sesiones. Los datos guardados en él nunca expiran.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): funciona igual que `localStorage`, excepto que los datos almacenados en él se eliminan cuando la sesión termina (cuando se cierra el navegador).

Ten en cuenta que ambas APIs solo permiten almacenar [cadenas de texto](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Si deseas almacenar objetos complejos, necesitarás serializarlos al formato [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) usando [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Si deseas crear una aplicación web que no funcione con un servidor, también es posible crear una base de datos en el cliente usando la API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Esta está reservada para casos de uso avanzados o si necesitas almacenar una cantidad significativa de datos, ya que es más compleja de usar.

### Tarea

Queremos que nuestros usuarios permanezcan conectados hasta que hagan clic explícitamente en el botón *Cerrar sesión*, así que usaremos `localStorage` para almacenar los datos de la cuenta. Primero, definamos una clave que usaremos para almacenar nuestros datos.

```js
const storageKey = 'savedAccount';
```

Luego agrega esta línea al final de la función `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Con esto, los datos de la cuenta del usuario se persistirán y estarán siempre actualizados, ya que centralizamos previamente todas nuestras actualizaciones de estado. Aquí es donde comenzamos a beneficiarnos de todas nuestras refactorizaciones anteriores 🙂.

Como los datos se guardan, también debemos encargarnos de restaurarlos cuando se cargue la aplicación. Dado que comenzaremos a tener más código de inicialización, puede ser una buena idea crear una nueva función `init`, que también incluya nuestro código anterior al final de `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Aquí recuperamos los datos guardados y, si hay alguno, actualizamos el estado en consecuencia. Es importante hacer esto *antes* de actualizar la ruta, ya que podría haber código que dependa del estado durante la actualización de la página.

También podemos hacer que la página del *Panel de Control* sea la página predeterminada de nuestra aplicación, ya que ahora estamos persistiendo los datos de la cuenta. Si no se encuentran datos, el panel de control se encarga de redirigir a la página de *Inicio de Sesión* de todos modos. En `updateRoute()`, reemplaza el valor predeterminado `return navigate('/login');` con `return navigate('/dashboard');`.

Ahora inicia sesión en la aplicación e intenta actualizar la página. Deberías permanecer en el panel de control. Con esa actualización hemos solucionado todos nuestros problemas iniciales...

## Actualizar los datos

...¡Pero también podríamos haber creado uno nuevo! ¡Ups!

Ve al panel de control usando la cuenta `test`, luego ejecuta este comando en una terminal para crear una nueva transacción:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Ahora intenta actualizar tu página del panel de control en el navegador. ¿Qué sucede? ¿Ves la nueva transacción?

El estado se persiste indefinidamente gracias a `localStorage`, pero eso también significa que nunca se actualiza hasta que cierras sesión en la aplicación y vuelves a iniciar sesión.

Una posible estrategia para solucionar esto es recargar los datos de la cuenta cada vez que se cargue el panel de control, para evitar datos obsoletos.

### Tarea

Crea una nueva función `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Este método verifica que actualmente estamos conectados y luego recarga los datos de la cuenta desde el servidor.

Crea otra función llamada `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Esta función actualiza los datos de la cuenta y luego se encarga de actualizar el HTML de la página del panel de control. Es lo que necesitamos llamar cuando se cargue la ruta del panel de control. Actualiza la definición de la ruta con:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Ahora intenta actualizar el panel de control, debería mostrar los datos de la cuenta actualizados.

---

## 🚀 Desafío

Ahora que recargamos los datos de la cuenta cada vez que se carga el panel de control, ¿crees que todavía necesitamos persistir *todos los datos de la cuenta*?

Intenta trabajar en equipo para cambiar lo que se guarda y se carga desde `localStorage` para incluir solo lo absolutamente necesario para que la aplicación funcione.

## Cuestionario Posterior a la Clase
[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/48)

## Tarea

[Implementar el cuadro de diálogo "Agregar transacción"](assignment.md)

Aquí tienes un ejemplo del resultado después de completar la tarea:

![Captura de pantalla que muestra un ejemplo del cuadro de diálogo "Agregar transacción"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.es.png)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.