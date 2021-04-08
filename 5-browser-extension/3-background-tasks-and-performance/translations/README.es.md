# Proyecto de extensión del navegador, parte 3: Más información sobre el rendimiento y las tareas en segundo plano

## [Pre-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/27)

### Introducción:

En las dos últimas lecciones de este módulo, aprendió cómo crear un formulario y un área de visualización para los datos obtenidos de una API. Es una forma muy estándar de crear presencias web en la web. Incluso aprendió a manejar la obtención de datos de forma asincrónica. La extensión de su navegador está casi completa.

Queda por administrar algunas tareas en segundo plano, incluida la actualización del color del icono de la extensión, por lo que este es un buen momento para hablar sobre cómo el navegador administra este tipo de tareas. Pensemos en estas tareas del navegador en el contexto del rendimiento de sus activos web a medida que los crea.

## Conceptos básicos sobre el rendimiento web

> "El rendimiento del sitio web se trata de dos cosas: qué tan rápido se carga la página y qué tan rápido se ejecuta el código". - [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

El tema de cómo hacer que sus sitios web sean increíblemente rápidos en todo tipo de dispositivos, para todo tipo de usuarios, en todo tipo de situaciones, es sorprendentemente vasto. Estos son algunos puntos que debe tener en cuenta al crear un proyecto web estándar o una extensión de navegador.

Lo primero que debe hacer para asegurarse de que su sitio funcione de manera eficiente es recopilar datos sobre su rendimiento. El lugar para hacer esto es en las herramientas de desarrollo de su navegador web. En Edge, puede seleccionar los tres puntos en la parte superior derecha del navegador, luego navegar a Más herramientas> Herramientas de desarrollo y abrir la pestaña Rendimiento.

La pestaña Rendimiento contiene una herramienta de creación de perfiles. Abra un sitio web (pruebe, por ejemplo, https://www.microsoft.com) y haga clic en el botón 'Grabar', luego actualice el sitio. Detenga la grabación en cualquier momento y podrá ver las rutinas que se generan para 'escribir', 'renderizar' y 'pintar' el sitio:

![Edge profiler](./images/profiler.png)

✅ Visite la [Documentación de Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance?WT.mc_id=academic-13441-cxa) en el panel Rendimiento en Edge

> Consejo: para obtener una lectura real de la hora de inicio de su sitio web, borre la memoria caché de su navegador

Seleccione elementos de la línea de tiempo del perfil para ampliar los eventos que suceden mientras se carga su página.

Obtenga una instantánea del rendimiento de su página seleccionando una parte de la línea de tiempo del perfil y mirando el panel de resumen:

![Instantánea de Edge Profiler](./images/snapshot.png)

Compruebe el panel Registro de eventos para ver si algún evento tardó más de 15 ms:

![Registro de eventos de Edge](./images/log.png)

✅ ¡Conoce a tu perfilador! Abra las herramientas de desarrollo en este sitio y vea si hay cuellos de botella. ¿Cuál es el activo de carga más lenta? ¿El más rápido?


## Comprobaciones de perfiles

En general, hay algunas "áreas problemáticas" que todo desarrollador web debe tener en cuenta al crear un sitio, para evitar sorpresas desagradables cuando llegue el momento de implementarlo en producción.

**Tamaños de activos**: la Web se ha vuelto 'más pesada' y, por lo tanto, más lenta en los últimos años. Parte de este peso tiene que ver con el uso de imágenes.

✅ Busque en el [Archivo de Internet](https://httparchive.org/reports/page-weight) una vista histórica del peso de la página y más.

Una buena práctica es asegurarse de que sus imágenes estén optimizadas, entregadas con el tamaño y la resolución adecuados para sus usuarios.

**Recorridos de DOM**: el navegador tiene que construir su Modelo de Objetos de Documento basado en el código que usted escribe, por lo que es de interés para un buen rendimiento de la página mantener sus etiquetas al mínimo, solo usando y estilizando lo que la página necesita. Hasta este punto, se podría optimizar el exceso de CSS asociado con una página; los estilos que deben usarse solo en una página no necesitan incluirse en la hoja de estilo principal, por ejemplo.

**JavaScript**: Todo desarrollador de JavaScript debe estar atento a los scripts de 'bloqueo de renderizado' que deben cargarse antes de que el resto del DOM pueda atravesarse y pintarse en el navegador. Considere usar "diferir" con sus scripts en línea (como se hace en el módulo Terrarium).

✅ Pruebe algunos sitios en un [sitio web de prueba de velocidad del sitio](https://www.webpagetest.org/) para obtener más información sobre las comprobaciones comunes que se realizan para determinar el rendimiento del sitio.

Ahora que tiene una idea de cómo el navegador representa los recursos que le envía, veamos las últimas cosas que debe hacer para completar su extensión:

### Crea una función para calcular el color

Trabajando en `/ src / index.js`, agregue una función llamada` calculateColor () `después de la serie de variables` const` que estableció para obtener acceso al DOM:

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

¿Que está pasando aqui? Pasa un valor (la intensidad de carbono) de la llamada API que completó en la última lección, y luego calcula qué tan cerca está su valor del índice presentado en la matriz de colores. Luego, envía el valor de color más cercano al tiempo de ejecución de Chrome.

Chrome.runtime tiene [una API](https://developer.chrome.com/extensions/runtime) que maneja todo tipo de tareas en segundo plano, y tu extensión aprovecha eso:

> "Utilice la API chrome.runtime para recuperar la página de fondo, devolver detalles sobre el manifiesto y escuchar y responder a eventos en el ciclo de vida de la aplicación o extensión. También puede utilizar esta API para convertir la ruta relativa de las URL a URL calificadas".

✅ Si está desarrollando esta extensión de navegador para Edge, puede que le sorprenda que esté utilizando una API de Chrome. Las versiones más recientes del navegador Edge se ejecutan en el motor del navegador Chromium, por lo que puede aprovechar estas herramientas.

> Tenga en cuenta que si desea crear un perfil de una extensión de navegador, inicie las herramientas de desarrollo desde la propia extensión, ya que es su propia instancia de navegador independiente.

### Establecer un color de icono predeterminado

Ahora, en la función `init ()`, configure el ícono en verde genérico para comenzar nuevamente llamando a la acción `updateIcon` de Chrome:


```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Llame a la función, ejecute la llamada

A continuación, llame a la función que acaba de crear agregándola a la promesa devuelta por la API C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Y finalmente, en `/dist/background.js`, agregue el oyente para estas llamadas de acción en segundo plano:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//tomado de la extensión Energy Lollipop, ¡buena característica!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
En este código, está agregando un oyente para cualquier mensaje que llegue al administrador de tareas de backend. Si se llama 'updateIcon', entonces se ejecuta el siguiente código para dibujar un icono del color adecuado usando la API de Canvas.

✅ Aprenderá más sobre la API Canvas en las [lecciones del juego espacial](../../space-game/drawing-to-canvas/README.md).

Ahora, reconstruya su extensión (`npm run build`), actualice y ejecute su extensión, y observe el cambio de color. ¿Es un buen momento para hacer un mandado o lavar los platos? ¡Ahora lo sabes!

Felicitaciones, ha creado una extensión de navegador útil y ha aprendido más sobre cómo funciona el navegador y cómo perfilar su rendimiento.

🚀 Desafío: Investigue algunos sitios web de código abierto que han existido hace mucho tiempo y, según su historial de GitHub, vea si puede determinar cómo se optimizaron a lo largo de los años para el rendimiento, si es que lo hicieron. ¿Cuál es el punto de dolor más común?

## [Post-lecture prueba](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/28)

## Revisión y autoestudio

Considere suscribirse a un [boletín informativo de rendimiento](https://perf.email/)

Investigue algunas de las formas en que los navegadores miden el rendimiento web consultando las pestañas de rendimiento de sus herramientas web. ¿Encuentra diferencias importantes?

**Tarea**: [Analizar el rendimiento de un sitio](assignment.md)

