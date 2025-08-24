<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-24T12:03:32+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "es"
}
-->
# Proyecto Terrario Parte 3: Manipulación del DOM y un Closure

![DOM y un closure](../../../../sketchnotes/webdev101-js.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/19)

### Introducción

Manipular el DOM, o "Modelo de Objeto de Documento", es un aspecto clave del desarrollo web. Según [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction), "El Modelo de Objeto de Documento (DOM) es la representación de datos de los objetos que conforman la estructura y el contenido de un documento en la web". Los desafíos relacionados con la manipulación del DOM en la web han sido a menudo el motivo detrás del uso de frameworks de JavaScript en lugar de JavaScript puro para gestionar el DOM, ¡pero nosotros lo haremos por nuestra cuenta!

Además, esta lección introducirá la idea de un [closure en JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures), que puedes pensar como una función encerrada por otra función, de manera que la función interna tiene acceso al ámbito de la función externa.

> Los closures en JavaScript son un tema amplio y complejo. Esta lección aborda la idea más básica: en el código de este terrario encontrarás un closure: una función interna y una función externa construidas de manera que la función interna tenga acceso al ámbito de la función externa. Para obtener más información sobre cómo funciona esto, visita la [documentación extensa](https://developer.mozilla.org/docs/Web/JavaScript/Closures).

Usaremos un closure para manipular el DOM.

Piensa en el DOM como un árbol que representa todas las formas en que se puede manipular un documento de página web. Se han escrito varias APIs (Interfaces de Programación de Aplicaciones) para que los programadores, utilizando su lenguaje de programación preferido, puedan acceder al DOM y editarlo, cambiarlo, reorganizarlo y gestionarlo de otras maneras.

![Representación del árbol DOM](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> Una representación del DOM y el marcado HTML que lo referencia. De [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

En esta lección, completaremos nuestro proyecto interactivo de terrario creando el JavaScript que permitirá a un usuario manipular las plantas en la página.

### Prerrequisito

Debes tener el HTML y CSS de tu terrario construidos. Al final de esta lección, podrás mover las plantas dentro y fuera del terrario arrastrándolas.

### Tarea

En tu carpeta del terrario, crea un nuevo archivo llamado `script.js`. Importa ese archivo en la sección `<head>`:

```html
	<script src="./script.js" defer></script>
```

> Nota: usa `defer` al importar un archivo JavaScript externo en el archivo HTML para permitir que el JavaScript se ejecute solo después de que el archivo HTML se haya cargado completamente. También podrías usar el atributo `async`, que permite que el script se ejecute mientras el archivo HTML se está analizando, pero en nuestro caso, es importante que los elementos HTML estén completamente disponibles para arrastrar antes de que permitamos que el script de arrastre se ejecute.
---

## Los elementos del DOM

Lo primero que necesitas hacer es crear referencias a los elementos que deseas manipular en el DOM. En nuestro caso, son las 14 plantas que actualmente están esperando en las barras laterales.

### Tarea

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

¿Qué está pasando aquí? Estás haciendo referencia al documento y buscando en su DOM para encontrar un elemento con un Id particular. Recuerda que en la primera lección sobre HTML diste Ids individuales a cada imagen de planta (`id="plant1"`). Ahora harás uso de ese esfuerzo. Después de identificar cada elemento, pasas ese elemento a una función llamada `dragElement` que construirás en un momento. Por lo tanto, el elemento en el HTML ahora está habilitado para arrastrar, o lo estará pronto.

✅ ¿Por qué hacemos referencia a los elementos por Id? ¿Por qué no por su clase CSS? Podrías referirte a la lección anterior sobre CSS para responder esta pregunta.

---

## El Closure

Ahora estás listo para crear el closure `dragElement`, que es una función externa que encierra una función interna o funciones (en nuestro caso, tendremos tres).

Los closures son útiles cuando una o más funciones necesitan acceder al ámbito de una función externa. Aquí hay un ejemplo:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

En este ejemplo, la función `displayCandy` rodea una función que agrega un nuevo tipo de dulce a un arreglo que ya existe en la función. Si ejecutaras este código, el arreglo `candy` sería indefinido, ya que es una variable local (local al closure).

✅ ¿Cómo puedes hacer que el arreglo `candy` sea accesible? Intenta moverlo fuera del closure. De esta manera, el arreglo se vuelve global, en lugar de permanecer disponible solo en el ámbito local del closure.

### Tarea

Debajo de las declaraciones de elementos en `script.js`, crea una función:

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` obtiene su objeto `terrariumElement` de las declaraciones en la parte superior del script. Luego, configuras algunas posiciones locales en `0` para el objeto pasado a la función. Estas son las variables locales que se manipularán para cada elemento mientras agregas funcionalidad de arrastrar y soltar dentro del closure para cada elemento. El terrario se llenará con estos elementos arrastrados, por lo que la aplicación necesita realizar un seguimiento de dónde se colocan.

Además, el `terrariumElement` que se pasa a esta función se asigna a un evento `pointerdown`, que es parte de las [APIs web](https://developer.mozilla.org/docs/Web/API) diseñadas para ayudar con la gestión del DOM. `onpointerdown` se activa cuando se presiona un botón, o en nuestro caso, cuando se toca un elemento arrastrable. Este controlador de eventos funciona tanto en [navegadores web como móviles](https://caniuse.com/?search=onpointerdown), con algunas excepciones.

✅ El [controlador de eventos `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) tiene mucho más soporte entre navegadores; ¿por qué no lo usarías aquí? Piensa en el tipo exacto de interacción de pantalla que estás tratando de crear aquí.

---

## La función Pointerdrag

El `terrariumElement` está listo para ser arrastrado; cuando se activa el evento `onpointerdown`, se invoca la función `pointerDrag`. Agrega esa función justo debajo de esta línea: `terrariumElement.onpointerdown = pointerDrag;`:

### Tarea 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Ocurren varias cosas. Primero, evitas que los eventos predeterminados que normalmente ocurren en `pointerdown` sucedan utilizando `e.preventDefault();`. De esta manera tienes más control sobre el comportamiento de la interfaz.

> Vuelve a esta línea cuando hayas construido completamente el archivo de script e intenta sin `e.preventDefault()` - ¿qué sucede?

Segundo, abre `index.html` en una ventana del navegador e inspecciona la interfaz. Cuando haces clic en una planta, puedes ver cómo se captura el evento 'e'. Explora el evento para ver cuánta información se recopila con un solo evento de pointerdown.

Luego, observa cómo las variables locales `pos3` y `pos4` se configuran en e.clientX. Puedes encontrar los valores de `e` en el panel de inspección. Estos valores capturan las coordenadas x e y de la planta en el momento en que haces clic o la tocas. Necesitarás un control detallado sobre el comportamiento de las plantas mientras las arrastras, por lo que realizas un seguimiento de sus coordenadas.

✅ ¿Está quedando más claro por qué toda esta aplicación se construye con un gran closure? Si no fuera así, ¿cómo mantendrías el ámbito para cada una de las 14 plantas arrastrables?

Completa la función inicial agregando dos manipulaciones más de eventos de puntero debajo de `pos4 = e.clientY`:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
Ahora estás indicando que deseas que la planta se arrastre junto con el puntero mientras lo mueves, y que el gesto de arrastre se detenga cuando deselecciones la planta. `onpointermove` y `onpointerup` son parte de la misma API que `onpointerdown`. La interfaz lanzará errores ahora, ya que aún no has definido las funciones `elementDrag` y `stopElementDrag`, así que constrúyelas a continuación.

## Las funciones elementDrag y stopElementDrag

Completarás tu closure agregando dos funciones internas más que manejarán lo que sucede cuando arrastras una planta y cuando dejas de arrastrarla. El comportamiento que deseas es que puedas arrastrar cualquier planta en cualquier momento y colocarla en cualquier lugar de la pantalla. Esta interfaz es bastante flexible (por ejemplo, no hay una zona de caída) para permitirte diseñar tu terrario exactamente como lo desees, agregando, eliminando y reposicionando plantas.

### Tarea

Agrega la función `elementDrag` justo después del corchete de cierre de `pointerDrag`:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
En esta función, haces muchas ediciones de las posiciones iniciales 1-4 que configuraste como variables locales en la función externa. ¿Qué está pasando aquí?

Mientras arrastras, reasignas `pos1` haciéndolo igual a `pos3` (que configuraste anteriormente como `e.clientX`) menos el valor actual de `e.clientX`. Realizas una operación similar con `pos2`. Luego, restableces `pos3` y `pos4` a las nuevas coordenadas X e Y del elemento. Puedes observar estos cambios en la consola mientras arrastras. Luego, manipulas el estilo CSS de la planta para establecer su nueva posición basada en las nuevas posiciones de `pos1` y `pos2`, calculando las coordenadas X e Y de la planta basándote en la comparación de su desplazamiento con estas nuevas posiciones.

> `offsetTop` y `offsetLeft` son propiedades CSS que establecen la posición de un elemento en función de la de su padre; su padre puede ser cualquier elemento que no esté posicionado como `static`.

Toda esta recalculación de posicionamiento te permite ajustar el comportamiento del terrario y sus plantas.

### Tarea 

La tarea final para completar la interfaz es agregar la función `stopElementDrag` después del corchete de cierre de `elementDrag`:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Esta pequeña función restablece los eventos `onpointerup` y `onpointermove` para que puedas reiniciar el progreso de tu planta comenzando a arrastrarla nuevamente, o comenzar a arrastrar una nueva planta.

✅ ¿Qué sucede si no configuras estos eventos en null?

¡Ahora has completado tu proyecto!

🥇¡Felicidades! Has terminado tu hermoso terrario. ![terrario terminado](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀Desafío

Agrega un nuevo controlador de eventos a tu closure para hacer algo más con las plantas; por ejemplo, haz doble clic en una planta para traerla al frente. ¡Sé creativo!

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/20)

## Revisión y Autoestudio

Aunque arrastrar elementos por la pantalla parece trivial, hay muchas formas de hacerlo y muchos inconvenientes, dependiendo del efecto que busques. De hecho, existe toda una [API de arrastrar y soltar](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) que puedes probar. No la usamos en este módulo porque el efecto que queríamos era algo diferente, pero prueba esta API en tu propio proyecto y ve qué puedes lograr.

Encuentra más información sobre eventos de puntero en los [documentos de W3C](https://www.w3.org/TR/pointerevents1/) y en los [documentos web de MDN](https://developer.mozilla.org/docs/Web/API/Pointer_events).

Siempre verifica las capacidades del navegador usando [CanIUse.com](https://caniuse.com/).

## Asignación

[Trabaja un poco más con el DOM](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.