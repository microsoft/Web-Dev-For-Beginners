# Terrarium Project Parte 2: Introducción a CSS

![Introducción a CSS](/sketchnotes/webdev101-css.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## [Pre-lecture prueba](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/17)

### Introducción:

CSS, o Cascading Style Sheets, resuelve un problema importante del desarrollo web: cómo hacer que su sitio web se vea bien. Diseñar tus aplicaciones las hace más útiles y atractivas; También puede usar CSS para crear un diseño web receptivo (RWD), lo que permite que sus aplicaciones se vean bien sin importar en qué tamaño de pantalla se muestren. CSS no se trata solo de hacer que su aplicación se vea bien; su especificación incluye animaciones y transformaciones que pueden permitir interacciones sofisticadas para sus aplicaciones. El grupo de trabajo CSS ayuda a mantener las especificaciones CSS actuales; puede seguir su trabajo en el [sitio del World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Tenga en cuenta que CSS es un lenguaje que evoluciona, como todo en la web, y no todos los navegadores admiten partes más nuevas de la especificación. Siempre verifique sus implementaciones consultando [CanIUse.com](caniuse.com).

En esta lección, agregaremos estilos a nuestro terrario en línea y aprenderemos más sobre varios conceptos de CSS: la cascada, la herencia y el uso de selectores, posicionamiento y uso de CSS para crear diseños. En el proceso, diseñaremos el terrario y crearemos el terrario en sí.

### Requisito previo:

Debería tener el HTML para su terrario construido y listo para darle estilo.

### Tarea:

En su carpeta de terrario, cree un nuevo archivo llamado `style.css`. Importe ese archivo en la sección `<head>`:

```
<link rel="stylesheet" href="./style.css" />
```

---

## 1. La cascada

Las hojas de estilo en cascada incorporan la idea de que los estilos 'se mueven en cascada' de manera que la aplicación de un estilo está guiada por su prioridad. Los estilos establecidos por el autor de un sitio web tienen prioridad sobre los establecidos por un navegador. Los estilos configurados 'en línea' tienen prioridad sobre los configurados en una hoja de estilo externa.

### Tarea:

Agrega el estilo en línea "color: red" a tu etiqueta `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Luego, agregue el siguiente código a su archivo `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ ¿Qué color se muestra en su aplicación web? ¿Por qué? ¿Puedes encontrar una forma de anular estilos? ¿Cuándo querría hacer esto o por qué no?

---

## 2. Herencia

Los estilos se heredan de un estilo antepasado a un estilo descendiente, de modo que los elementos anidados heredan los estilos de sus padres.

### Tarea:

Establezca la fuente del cuerpo en una fuente determinada y verifique para ver la fuente de un elemento anidado:

```
body {
	font-family: helvetica, arial, sans-serif;
}
```

Abra la consola de su navegador en la pestaña 'Elementos' y observe la fuente H1. Hereda su fuente del cuerpo, como se indica en el navegador:

![fuente heredada](../images/1.png)

✅ ¿Puede hacer que un estilo anidado herede una propiedad diferente?

---

## 3. Selectores CSS

### Etiquetas

Hasta ahora, su archivo `style.css` tiene solo algunas etiquetas con estilo, y la aplicación se ve bastante extraña:

```
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Esta forma de diseñar una etiqueta te da control sobre elementos únicos, pero necesitas controlar los estilos de muchas plantas en tu terrario. Para hacer eso, necesita aprovechar los selectores de CSS.

### ID

Agregue un poco de estilo para diseñar los contenedores izquierdo y derecho. Dado que solo hay un contenedor izquierdo y solo un contenedor derecho, se les dan identificadores en el marcado. Para diseñarlos, use `#`:

```
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

HAquí, ha colocado estos contenedores con posicionamiento absoluto en el extremo izquierdo y derecho de la pantalla, y ha utilizado porcentajes para su ancho para que puedan escalar para pantallas móviles pequeñas.

✅ Este código se repite bastante, por lo tanto, no "DRY" (Don't Repeat yourself: No se repita); ¿Puede encontrar una mejor manera de diseñar estos identificadores, tal vez con un id y una clase? Necesitaría cambiar el marcado y refactorizar el CSS:

```html
<div id="left-container" class="container"></div>
```

### Clases

En el ejemplo anterior, diseñó dos elementos únicos en la pantalla. Si desea que los estilos se apliquen a muchos elementos en la pantalla, puede usar clases CSS. Haga esto para colocar las plantas en los contenedores izquierdo y derecho.

Observe que cada planta en el marcado HTML tiene una combinación de identificadores y clases. Los identificadores aquí son utilizados por JavaScript que agregará más adelante para manipular la ubicación de la planta del terrario. Las clases, sin embargo, dan a todas las plantas un estilo determinado.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Agrega lo siguiente a tu archivo `style.css`:

```css
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

En este fragmento se destaca la mezcla de posicionamiento relativo y absoluto, que cubriremos en la siguiente sección. Eche un vistazo a la forma en que se manejan las alturas por porcentajes:

Establece la altura del soporte de la planta en 13%, un buen número para garantizar que todas las plantas se muestren en cada contenedor vertical sin necesidad de desplazarse.

Configura el soporte de la planta para que se mueva hacia la izquierda para permitir que las plantas estén más centradas dentro de su contenedor. Las imágenes tienen una gran cantidad de fondo transparente para que se puedan arrastrar más, por lo que es necesario empujarlas hacia la izquierda para que quepan mejor en la pantalla.

Luego, a la planta en sí se le asigna un ancho máximo del 150%. Esto permite que se reduzca a medida que el navegador se reduce. Intente cambiar el tamaño de su navegador; las plantas permanecen en sus contenedores pero se reducen para adaptarse.

También es notable el uso del índice z, que controla la altitud relativa de un elemento (de modo que las plantas se sientan en la parte superior del contenedor y parezcan sentarse dentro del terrario).

✅ ¿Por qué necesita tanto un soporte para plantas como un selector CSS de plantas?

## 4. Posicionamiento CSS

Mezclar propiedades de posición (hay posiciones estáticas, relativas, fijas, absolutas y pegajosas) puede ser un poco complicado, pero cuando se hace correctamente, te da un buen control sobre los elementos de tus páginas.

Los elementos de posición absoluta se colocan en relación con sus antepasados ​​colocados más cercanos y, si no hay ninguno, se colocan de acuerdo con el cuerpo del documento.

Los elementos de posición relativa se colocan según las direcciones del CSS para ajustar su ubicación lejos de su posición inicial.

En nuestra muestra, el "plant-holder" es un elemento de posición relativa que se coloca dentro de un contenedor de posición absoluta. El comportamiento resultante es que los contenedores de las barras laterales se sujetan a izquierda y derecha, y el portaplantas se encaja, ajustándose dentro de las barras laterales, dando espacio para que las plantas se coloquen en una fila vertical.

> La `planta` en sí también tiene un posicionamiento absoluto, necesario para que sea arrastrable, como descubrirás en la siguiente lección.

✅ Experimente cambiando los tipos de colocación de los contenedores laterales y el portaplantas. ¿Lo que pasa?

## 5. Diseños CSS

Ahora usará lo que aprendió para construir el terrario en sí, ¡todo usando CSS!

Primero, diseñe los elementos secundarios `.terrarium` div como un rectángulo redondeado usando CSS:

```css
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Tenga en cuenta el uso de porcentajes aquí. Si reduce la escala de su navegador, también puede ver cómo se escalan las esquinas del frasco. Observe también los porcentajes de ancho y alto de los elementos del tarro y cómo cada elemento está absolutamente posicionado en el centro, fijado a la parte inferior de la ventana gráfica.

✅ Intente cambiar los colores y la opacidad del frasco frente a los de la suciedad. ¿Lo que pasa? ¿Por qué?

---

🚀 Desafío: agregue un brillo de 'burbuja' al área inferior izquierda del frasco para que se vea más parecido al vidrio. Estarás diseñando el `.jar-glossy-long` y el `.jar-glossy-short` para que parezca un brillo reflejado. Así es como se vería:

![terrario terminado](../images/terrarium-final.png)

## [Post-lecture prueba](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/18)

## Revisión y autoestudio

CSS parece engañosamente sencillo, pero existen muchos desafíos cuando se trata de diseñar una aplicación perfectamente para todos los navegadores y todos los tamaños de pantalla. CSS-Grid y Flexbox son herramientas que se han desarrollado para hacer el trabajo un poco más estructurado y más confiable. Aprende sobre estas herramientas jugando a [Flexbox Froggy](https://flexboxfroggy.com/) y [Grid Garden](https://codepip.com/games/grid-garden/).

**Asignación**: [Refactorización CSS](assignment.es.md)

[Diseñe su aplicación HTML con CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics?WT.mc_id=academic-13441-cxa)
