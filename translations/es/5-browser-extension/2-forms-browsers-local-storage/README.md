<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-24T13:08:44+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "es"
}
-->
# Proyecto de Extensión de Navegador Parte 2: Llamar a una API, usar Almacenamiento Local

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Introducción

En esta lección, llamarás a una API enviando el formulario de tu extensión de navegador y mostrando los resultados en la extensión. Además, aprenderás cómo almacenar datos en el almacenamiento local de tu navegador para referencia y uso futuro.

✅ Sigue los segmentos numerados en los archivos correspondientes para saber dónde colocar tu código.

### Configura los elementos para manipular en la extensión:

Hasta este punto, ya has creado el HTML para el formulario y el `<div>` de resultados de tu extensión de navegador. A partir de ahora, necesitarás trabajar en el archivo `/src/index.js` y construir tu extensión poco a poco. Consulta la [lección anterior](../1-about-browsers/README.md) para configurar tu proyecto y el proceso de construcción.

Trabajando en tu archivo `index.js`, comienza creando algunas variables `const` para almacenar los valores asociados con varios campos:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Todos estos campos se referencian por su clase CSS, como lo configuraste en el HTML en la lección anterior.

### Agrega listeners

A continuación, agrega listeners de eventos al formulario y al botón de reinicio que restablece el formulario, para que si un usuario envía el formulario o hace clic en ese botón de reinicio, ocurra algo. Además, agrega la llamada para inicializar la aplicación al final del archivo:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Observa la forma abreviada utilizada para escuchar un evento de envío o clic, y cómo el evento se pasa a las funciones handleSubmit o reset. ¿Puedes escribir el equivalente de esta abreviatura en un formato más largo? ¿Cuál prefieres?

### Construye las funciones init() y reset():

Ahora vas a construir la función que inicializa la extensión, llamada init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

En esta función, hay lógica interesante. Leyéndola, ¿puedes ver qué sucede?

- Se configuran dos `const` para verificar si el usuario ha almacenado una APIKey y un código de región en el almacenamiento local.
- Si cualquiera de estos es nulo, muestra el formulario cambiando su estilo para que se muestre como 'block'.
- Oculta los resultados, la carga y el botón clearBtn, y establece cualquier texto de error como una cadena vacía.
- Si existe una clave y una región, inicia una rutina para:
  - Llamar a la API para obtener datos de uso de carbono.
  - Ocultar el área de resultados.
  - Ocultar el formulario.
  - Mostrar el botón de reinicio.

Antes de continuar, es útil aprender sobre un concepto muy importante disponible en los navegadores: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage es una forma útil de almacenar cadenas en el navegador como un par `clave-valor`. Este tipo de almacenamiento web puede ser manipulado por JavaScript para gestionar datos en el navegador. LocalStorage no expira, mientras que SessionStorage, otro tipo de almacenamiento web, se borra cuando se cierra el navegador. Los diversos tipos de almacenamiento tienen pros y contras en su uso.

> Nota: la extensión de tu navegador tiene su propio almacenamiento local; la ventana principal del navegador es una instancia diferente y se comporta de manera separada.

Configuras tu APIKey para que tenga un valor de cadena, por ejemplo, y puedes ver que está configurada en Edge al "inspeccionar" una página web (puedes hacer clic derecho en un navegador para inspeccionar) y dirigirte a la pestaña de Aplicaciones para ver el almacenamiento.

![Panel de almacenamiento local](../../../../5-browser-extension/2-forms-browsers-local-storage/images/localstorage.png)

✅ Piensa en situaciones en las que NO querrías almacenar algunos datos en LocalStorage. En general, ¡colocar claves de API en LocalStorage es una mala idea! ¿Puedes ver por qué? En nuestro caso, dado que nuestra aplicación es puramente para aprendizaje y no se implementará en una tienda de aplicaciones, utilizaremos este método.

Observa que utilizas la API Web para manipular LocalStorage, ya sea usando `getItem()`, `setItem()` o `removeItem()`. Es ampliamente compatible entre navegadores.

Antes de construir la función `displayCarbonUsage()` que se llama en `init()`, construyamos la funcionalidad para manejar el envío inicial del formulario.

### Maneja el envío del formulario

Crea una función llamada `handleSubmit` que acepte un argumento de evento `(e)`. Detén la propagación del evento (en este caso, queremos evitar que el navegador se actualice) y llama a una nueva función, `setUpUser`, pasando los argumentos `apiKey.value` y `region.value`. De esta manera, utilizas los dos valores que se obtienen a través del formulario inicial cuando se completan los campos correspondientes.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Refresca tu memoria: el HTML que configuraste en la última lección tiene dos campos de entrada cuyos `values` se capturan a través de los `const` que configuraste al principio del archivo, y ambos son `required`, por lo que el navegador evita que los usuarios ingresen valores nulos.

### Configura al usuario

Pasando a la función `setUpUser`, aquí es donde configuras los valores de almacenamiento local para apiKey y regionName. Agrega una nueva función:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Esta función muestra un mensaje de carga mientras se llama a la API. En este punto, has llegado a crear la función más importante de esta extensión de navegador.

### Muestra el uso de carbono

Finalmente, es hora de consultar la API.

Antes de continuar, deberíamos discutir las APIs. Las APIs, o [Interfaces de Programación de Aplicaciones](https://www.webopedia.com/TERM/A/API.html), son un elemento crítico en la caja de herramientas de un desarrollador web. Proporcionan formas estándar para que los programas interactúen y se conecten entre sí. Por ejemplo, si estás construyendo un sitio web que necesita consultar una base de datos, alguien podría haber creado una API para que la utilices. Aunque hay muchos tipos de APIs, una de las más populares es una [API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ El término 'REST' significa 'Transferencia de Estado Representacional' y utiliza URLs configuradas de diversas maneras para obtener datos. Investiga un poco sobre los diversos tipos de APIs disponibles para desarrolladores. ¿Qué formato te resulta más atractivo?

Hay cosas importantes que notar sobre esta función. Primero, observa la palabra clave [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Escribir tus funciones para que se ejecuten de manera asincrónica significa que esperan a que se complete una acción, como el retorno de datos, antes de continuar.

Aquí hay un video rápido sobre `async`:

[![Async y Await para gestionar promesas](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async y Await para gestionar promesas")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre async/await.

Crea una nueva función para consultar la API de C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Esta es una función grande. ¿Qué está sucediendo aquí?

- Siguiendo las mejores prácticas, utilizas la palabra clave `async` para que esta función se comporte de manera asincrónica. La función contiene un bloque `try/catch`, ya que devolverá una promesa cuando la API devuelva datos. Debido a que no tienes control sobre la velocidad con la que la API responderá (¡puede que no responda en absoluto!), necesitas manejar esta incertidumbre llamándola de manera asincrónica.
- Estás consultando la API de co2signal para obtener los datos de tu región, utilizando tu clave de API. Para usar esa clave, debes usar un tipo de autenticación en los parámetros del encabezado.
- Una vez que la API responde, asignas varios elementos de sus datos de respuesta a las partes de tu pantalla que configuraste para mostrar estos datos.
- Si hay un error, o si no hay resultado, muestras un mensaje de error.

✅ Usar patrones de programación asincrónica es otra herramienta muy útil en tu caja de herramientas. Lee [sobre las diversas formas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) en que puedes configurar este tipo de código.

¡Felicidades! Si construyes tu extensión (`npm run build`) y la actualizas en el panel de extensiones, ¡tienes una extensión funcional! Lo único que no funciona es el ícono, y lo arreglarás en la próxima lección.

---

## 🚀 Desafío

Hemos discutido varios tipos de APIs hasta ahora en estas lecciones. Elige una API web e investiga en profundidad lo que ofrece. Por ejemplo, echa un vistazo a las APIs disponibles dentro de los navegadores, como la [API de Arrastrar y Soltar en HTML](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). ¿Qué hace que una API sea excelente en tu opinión?

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Repaso y Estudio Personal

En esta lección aprendiste sobre LocalStorage y APIs, ambos muy útiles para el desarrollador web profesional. ¿Puedes pensar en cómo estas dos cosas trabajan juntas? Piensa en cómo diseñarías un sitio web que almacenara elementos para ser utilizados por una API.

## Tarea

[Adopta una API](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.