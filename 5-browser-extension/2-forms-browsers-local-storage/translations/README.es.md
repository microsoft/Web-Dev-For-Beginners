# Proyecto de extensión del navegador, parte 2: llamar a una API, usar almacenamiento local

## [Pre-lecture prueba](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/25)

### Introducción:

En esta lección, llamará a una API enviando el formulario de la extensión de su navegador y mostrará los resultados en la extensión de su navegador. Además, aprenderá cómo puede almacenar datos en el almacenamiento local de su navegador para referencia y uso futuros.

✅ Siga los segmentos numerados en los archivos correspondientes para saber dónde colocar su código

### 1. Configure los elementos para manipular en la extensión:

En este momento, ha creado el HTML para el formulario y los resultados `<div>` para la extensión de su navegador. De ahora en adelante, necesitará trabajar en el archivo `/src/index.js` y construir su extensión poco a poco. Consulte la [lección anterior](../../1-about-browsers/translations/README.es.md) sobre cómo configurar su proyecto y el proceso de compilación.

Trabajando en su archivo `index.js`, comience creando algunas variables `const` para contener los valores asociados con varios campos:


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

Todos estos campos están referenciados por su clase css, como lo configuró en el HTML en la lección anterior.

### 2. Agregar oyentes

A continuación, agregue detectores de eventos al formulario y el botón de borrar que restablece el formulario, de modo que si un usuario envía el formulario o hace clic en ese botón de restablecimiento, algo sucederá y agregue la llamada para inicializar la aplicación en la parte inferior del archivo:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Observe la abreviatura que se usa para escuchar un evento de envío o clic, y cómo el evento se pasa a las funciones handleSubmit o reset. ¿Puedes escribir el equivalente de esta abreviatura en un formato más largo? ¿Cual prefieres?

### 3. Desarrolle la init() y reset() función:

Ahora vas a construir la función que inicializa la extensión, que se llama `init()`:

```JavaScript
function init() {
	//si hay algo en localStorage, recójalo
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//establecer el icono en verde genérico
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//si no tenemos las claves, mostrar el formulario
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //si hemos guardado claves / regiones en localStorage, mostrar los resultados cuando se cargan
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//borrar almacenamiento local solo para la región
	localStorage.removeItem('regionName');
	init();
}

```
En esta función, hay una lógica interesante. Al leerlo, ¿puedes ver lo que sucede?

- Se configuran dos `const` para verificar si el usuario ha almacenado una clave API y un código de región en el almacenamiento local.
- si alguno de ellos es nulo, muestre el formulario cambiando su estilo para que se muestre como 'bloque'
- ocultar los resultados, cargar y borrarBtn y establecer cualquier texto de error en una cadena vacía
- si existe una clave y una región, inicie una rutina para:
  - llamar a la API para obtener datos de uso de carbono
  - ocultar el área de resultados
  - ocultar el formulario
  - mostrar el botón de reinicio

Antes de continuar, es útil conocer un concepto muy importante disponible en los navegadores: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage es una forma útil de almacenar cadenas en el navegador como un par "clave-valor". Este tipo de almacenamiento web puede ser manipulado por JavaScript para administrar datos en el navegador. LocalStorage no caduca, mientras que SessionStorage, otro tipo de almacenamiento web, se borra cuando se cierra el navegador. Los distintos tipos de almacenamiento tienen ventajas y desventajas para su uso.

> Nota: la extensión de su navegador tiene su propio almacenamiento local; la ventana principal del navegador es una instancia diferente y se comporta por separado.

Configura su APIKey para que tenga un valor de cadena, por ejemplo, y puede ver que está configurado en Edge "inspeccionando" una página web (puede hacer clic con el botón derecho en un navegador para inspeccionar) y yendo a la pestaña Aplicaciones para ver el almacenamiento.

![Panel de almacenamiento local](../images/localstorage.png)

✅ Piense en situaciones en las que NO le gustaría almacenar algunos datos en LocalStorage. En general, colocar claves API en LocalStorage es una mala idea. ¿Puedes ver por qué? En nuestro caso, dado que nuestra aplicación es puramente para aprender y no se implementará en una tienda de aplicaciones, usaremos este método.

Tenga en cuenta que utiliza la API web para manipular LocalStorage, ya sea utilizando `getItem()`, `setItem()` o `removeItem()`. Es ampliamente compatible con todos los navegadores.

Antes de construir la función `displayCarbonUsage()` que se llama en `init()`, construyamos la funcionalidad para manejar el envío inicial del formulario.

### 4. Manejar el envío del formulario

Cree una función llamada `handleSubmit` que acepte un argumento de evento `(e)`. Detenga la propagación del evento (en este caso, queremos que el navegador no se actualice) y llame a una nueva función, `setUpUser`, pasando los argumentos `apiKey.value` y `region.value`. De esta manera, utiliza los dos valores que se introducen a través del formulario inicial cuando se completan los campos correspondientes.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Refresque su memoria: el HTML que configuró en la última lección tiene dos campos de entrada cuyos `values` se capturan mediante la `const` que configuró en la parte superior del archivo, y ambos son `required` para que el navegador detenga a los usuarios de ingresar valores nulos.

### 5. Configurar el usuario

Pasando a la función `setUpUser`, aquí es donde configura los valores de almacenamiento local para apiKey y regionName. Agrega una nueva función:

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
Esta función establece un mensaje de carga para mostrar mientras se llama a la API. ¡En este punto, ha llegado a crear la función más importante de esta extensión de navegador!

### 6. Visualización del uso de carbono

¡Finalmente es hora de consultar la API!

Antes de continuar, deberíamos discutir las API. Las API, o [Interfaces de programación de aplicaciones](https://www.webopedia.com/TERM/A/API.html), son un elemento fundamental de la caja de herramientas de un desarrollador web. Proporcionan formas estándar para que los programas interactúen e interactúen entre sí. Por ejemplo, si está creando un sitio web que necesita consultar una base de datos, alguien podría haber creado una API para que la use. Si bien hay muchos tipos de API, una de las más populares es una [API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ El término 'REST' significa 'Transferencia de estado representacional' y características que utilizan URL configuradas de diversas formas para obtener datos. Investigue un poco sobre los distintos tipos de API disponibles para los desarrolladores. ¿Qué formato te atrae?

Hay cosas importantes a tener en cuenta sobre esta función. Primero observe la palabra clave `async`. Escribir sus funciones para que se ejecuten de forma asincrónica significa que

Cree una nueva función para consultar la API C02Signal:

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

Esta es una gran función. ¿Que está pasando aqui?

- siguiendo las mejores prácticas, utiliza una palabra clave `async` para hacer que esta función se comporte de forma asíncrona. La función contiene un bloque `try / catch` ya que devolverá una promesa cuando la API devuelva datos. Debido a que no tiene control sobre la velocidad a la que responderá la API (¡es posible que no responda en absoluto!), Debe manejar esta incertidumbre llamándola de forma asincrónica.
- está consultando la API co2signal para obtener los datos de su región, utilizando su clave API. Para usar esa clave, debe usar un tipo de autenticación en los parámetros de su encabezado.
- una vez que la API responde, asigna varios elementos de sus datos de respuesta a las partes de su pantalla que configura para mostrar estos datos.
- si hay un error o si no hay ningún resultado, muestra un mensaje de error.

✅ El uso de patrones de programación asíncronos es otra herramienta muy útil en su caja de herramientas. Lea [acerca de las diversas formas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) puede configurar este tipo de código.

[![Async and Await for managing promises](https://img.youtube.com/vi/4yJUTjtIlww/0.jpg)](https://youtube.com/watch?v=4yJUTjtIlww "Async and Await for managing promises")

¡Felicidades! Si construye su extensión (`npm run build`) y la actualiza en su panel de extensiones, ¡tiene una extensión que funciona! Lo único que no funciona es el ícono, y lo solucionará en la próxima lección.

---

🚀 Desafío: hemos discutido varios tipos de API hasta ahora en estas lecciones. Elija una API web e investigue en profundidad lo que ofrece. Por ejemplo, eche un vistazo a las API disponibles en los navegadores, como la [API HTML de arrastrar y soltar](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). En tu opinión, ¿qué hace que una API sea excelente?


## [Post-lecture prueba](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/26)

## Revisión y autoestudio

Aprendió sobre LocalStorage y las API en esta lección, ambos muy útiles para el desarrollador web profesional. ¿Puedes pensar en cómo funcionan estas dos cosas juntas? Piense en cómo diseñaría un sitio web que almacenaría elementos para ser utilizados por una API.

**Tarea**: [Adopte una API](assignment.md)

