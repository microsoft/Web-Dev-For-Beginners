<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:13:21+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "es"
}
-->
# Proyecto de Extensión de Navegador Parte 3: Aprende sobre Tareas en Segundo Plano y Rendimiento

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/27)

### Introducción

En las dos últimas lecciones de este módulo, aprendiste a construir un formulario y un área de visualización para los datos obtenidos de una API. Es una forma muy estándar de crear una presencia web. Incluso aprendiste a manejar la obtención de datos de manera asincrónica. Tu extensión de navegador está casi completa.

Queda por gestionar algunas tareas en segundo plano, como actualizar el color del ícono de la extensión, por lo que este es un buen momento para hablar sobre cómo el navegador maneja este tipo de tareas. Pensemos en estas tareas del navegador en el contexto del rendimiento de tus recursos web mientras los construyes.

## Conceptos Básicos de Rendimiento Web

> "El rendimiento de un sitio web se trata de dos cosas: qué tan rápido se carga la página y qué tan rápido se ejecuta el código en ella." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

El tema de cómo hacer que tus sitios web sean increíblemente rápidos en todo tipo de dispositivos, para todo tipo de usuarios y en todo tipo de situaciones, es, como era de esperarse, vasto. Aquí hay algunos puntos a tener en cuenta mientras construyes un proyecto web estándar o una extensión de navegador.

Lo primero que necesitas hacer para asegurarte de que tu sitio funcione de manera eficiente es recopilar datos sobre su rendimiento. El primer lugar para hacerlo es en las herramientas de desarrollo de tu navegador web. En Edge, puedes seleccionar el botón "Configuración y más" (el ícono de tres puntos en la parte superior derecha del navegador), luego navegar a Más herramientas > Herramientas de desarrollo y abrir la pestaña Rendimiento. También puedes usar los atajos de teclado `Ctrl` + `Shift` + `I` en Windows o `Option` + `Command` + `I` en Mac para abrir las herramientas de desarrollo.

La pestaña Rendimiento contiene una herramienta de perfilado. Abre un sitio web (prueba, por ejemplo, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) y haz clic en el botón 'Grabar', luego actualiza el sitio. Detén la grabación en cualquier momento y podrás ver las rutinas generadas para 'script', 'renderizar' y 'pintar' el sitio:

![Perfilador de Edge](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.es.png)

✅ Visita la [Documentación de Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) sobre el panel de Rendimiento en Edge.

> Consejo: para obtener una lectura precisa del tiempo de inicio de tu sitio web, limpia la caché de tu navegador.

Selecciona elementos de la línea de tiempo del perfil para acercarte a los eventos que ocurren mientras se carga tu página.

Obtén una instantánea del rendimiento de tu página seleccionando una parte de la línea de tiempo del perfil y mirando el panel de resumen:

![Instantánea del perfilador de Edge](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.es.png)

Revisa el panel de Registro de Eventos para ver si algún evento tomó más de 15 ms:

![Registro de eventos de Edge](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.es.png)

✅ Familiarízate con tu perfilador. Abre las herramientas de desarrollo en este sitio y verifica si hay cuellos de botella. ¿Cuál es el recurso que tarda más en cargar? ¿El más rápido?

## Verificaciones de Perfilado

En general, hay algunas "áreas problemáticas" que todo desarrollador web debería vigilar al construir un sitio para evitar sorpresas desagradables cuando llegue el momento de desplegarlo en producción.

**Tamaños de recursos**: La web se ha vuelto más 'pesada' y, por ende, más lenta en los últimos años. Parte de este peso tiene que ver con el uso de imágenes.

✅ Revisa el [Archivo de Internet](https://httparchive.org/reports/page-weight) para una vista histórica del peso de las páginas y más.

Una buena práctica es asegurarte de que tus imágenes estén optimizadas y se entreguen en el tamaño y resolución adecuados para tus usuarios.

**Recorridos del DOM**: El navegador tiene que construir su Modelo de Objeto de Documento (DOM) basado en el código que escribes, por lo que es importante para el buen rendimiento de la página mantener tus etiquetas al mínimo, usando y estilizando solo lo que la página necesita. En este sentido, el exceso de CSS asociado con una página podría optimizarse; los estilos que solo necesitan usarse en una página no necesitan incluirse en la hoja de estilos principal, por ejemplo.

**JavaScript**: Todo desarrollador de JavaScript debería estar atento a los scripts que bloquean el renderizado y que deben cargarse antes de que el resto del DOM pueda recorrerse y pintarse en el navegador. Considera usar `defer` con tus scripts en línea (como se hace en el módulo Terrarium).

✅ Prueba algunos sitios en un [sitio de prueba de velocidad](https://www.webpagetest.org/) para aprender más sobre las verificaciones comunes que se realizan para determinar el rendimiento de un sitio.

Ahora que tienes una idea de cómo el navegador renderiza los recursos que le envías, veamos las últimas cosas que necesitas hacer para completar tu extensión:

### Crear una función para calcular el color

Trabajando en `/src/index.js`, agrega una función llamada `calculateColor()` después de la serie de variables `const` que configuraste para acceder al DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

¿Qué está pasando aquí? Pasas un valor (la intensidad de carbono) desde la llamada a la API que completaste en la última lección, y luego calculas qué tan cerca está su valor del índice presentado en el array de colores. Luego envías ese valor de color más cercano al runtime de Chrome.

El chrome.runtime tiene [una API](https://developer.chrome.com/extensions/runtime) que maneja todo tipo de tareas en segundo plano, y tu extensión está aprovechando eso:

> "Usa la API chrome.runtime para recuperar la página de fondo, devolver detalles sobre el manifiesto y escuchar y responder a eventos en el ciclo de vida de la aplicación o extensión. También puedes usar esta API para convertir la ruta relativa de URLs en URLs completamente calificadas."

✅ Si estás desarrollando esta extensión de navegador para Edge, podría sorprenderte que estés usando una API de Chrome. Las versiones más recientes del navegador Edge funcionan con el motor de navegador Chromium, por lo que puedes aprovechar estas herramientas.

> Nota: si deseas perfilar una extensión de navegador, lanza las herramientas de desarrollo desde dentro de la propia extensión, ya que es una instancia de navegador separada.

### Establecer un color de ícono predeterminado

Ahora, en la función `init()`, establece el ícono en un verde genérico para comenzar llamando nuevamente la acción `updateIcon` de Chrome:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Llamar a la función, ejecutar la llamada

A continuación, llama a esa función que acabas de crear agregándola a la promesa devuelta por la API C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Y finalmente, en `/dist/background.js`, agrega el listener para estas llamadas de acción en segundo plano:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

En este código, estás agregando un listener para cualquier mensaje que llegue al administrador de tareas en segundo plano. Si se llama 'updateIcon', entonces se ejecuta el siguiente código para dibujar un ícono del color adecuado usando la API Canvas.

✅ Aprenderás más sobre la API Canvas en las [lecciones del Juego Espacial](../../6-space-game/2-drawing-to-canvas/README.md).

Ahora, reconstruye tu extensión (`npm run build`), actualiza y lanza tu extensión, y observa cómo cambia el color. ¿Es un buen momento para hacer un recado o lavar los platos? ¡Ahora lo sabes!

¡Felicidades! Has construido una extensión de navegador útil y aprendido más sobre cómo funciona el navegador y cómo perfilar su rendimiento.

---

## 🚀 Desafío

Investiga algunos sitios web de código abierto que han existido durante mucho tiempo y, basándote en su historial de GitHub, ve si puedes determinar cómo se optimizaron a lo largo de los años para mejorar el rendimiento, si es que lo hicieron. ¿Cuál es el punto más común de dolor?

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/28)

## Repaso y Autoestudio

Considera suscribirte a un [boletín de rendimiento](https://perf.email/).

Investiga algunas de las formas en que los navegadores evalúan el rendimiento web revisando las pestañas de rendimiento en sus herramientas web. ¿Encuentras alguna diferencia importante?

## Tarea

[Analiza un sitio para evaluar su rendimiento](assignment.md)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.