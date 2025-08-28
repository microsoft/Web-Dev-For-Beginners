<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-24T12:07:49+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "es"
}
-->
# Proyecto Terrario Parte 2: Introducción a CSS

![Introducción a CSS](../../../../sketchnotes/webdev101-css.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/17)

### Introducción

CSS, o Hojas de Estilo en Cascada, resuelve un problema importante en el desarrollo web: cómo hacer que tu sitio web se vea bien. Estilizar tus aplicaciones las hace más usables y atractivas; también puedes usar CSS para crear Diseño Web Responsivo (RWD), permitiendo que tus aplicaciones se vean bien sin importar el tamaño de pantalla en el que se muestren. CSS no solo se trata de hacer que tu aplicación se vea bien; su especificación incluye animaciones y transformaciones que pueden habilitar interacciones sofisticadas para tus aplicaciones. El Grupo de Trabajo de CSS ayuda a mantener las especificaciones actuales de CSS; puedes seguir su trabajo en el [sitio del World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Nota: CSS es un lenguaje que evoluciona, como todo en la web, y no todos los navegadores soportan las partes más nuevas de la especificación. Siempre verifica tus implementaciones consultando [CanIUse.com](https://caniuse.com).

En esta lección, vamos a agregar estilos a nuestro terrario en línea y aprender más sobre varios conceptos de CSS: la cascada, la herencia, el uso de selectores, posicionamiento y el uso de CSS para construir diseños. En el proceso, diseñaremos el terrario y crearemos el terrario en sí.

### Prerrequisito

Debes tener el HTML de tu terrario construido y listo para ser estilizado.

> Mira el video

> 
> [![Video sobre conceptos básicos de Git y GitHub](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Tarea

En tu carpeta del terrario, crea un nuevo archivo llamado `style.css`. Importa ese archivo en la sección `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## La Cascada

Las Hojas de Estilo en Cascada incorporan la idea de que los estilos 'cascaden', de manera que la aplicación de un estilo se guía por su prioridad. Los estilos establecidos por el autor de un sitio web tienen prioridad sobre los establecidos por un navegador. Los estilos establecidos 'en línea' tienen prioridad sobre los establecidos en una hoja de estilo externa.

### Tarea

Agrega el estilo en línea "color: red" a tu etiqueta `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Luego, agrega el siguiente código a tu archivo `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ ¿Qué color se muestra en tu aplicación web? ¿Por qué? ¿Puedes encontrar una manera de sobrescribir estilos? ¿Cuándo querrías hacer esto, o por qué no?

---

## Herencia

Los estilos se heredan de un estilo ancestro a un descendiente, de manera que los elementos anidados heredan los estilos de sus padres.

### Tarea

Establece la fuente del cuerpo a una fuente dada y verifica la fuente de un elemento anidado:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Abre la consola de tu navegador en la pestaña 'Elements' y observa la fuente del H1. Hereda su fuente del cuerpo, como se indica dentro del navegador:

![fuente heredada](../../../../3-terrarium/2-intro-to-css/images/1.png)

✅ ¿Puedes hacer que un estilo anidado herede una propiedad diferente?

---

## Selectores de CSS

### Etiquetas

Hasta ahora, tu archivo `style.css` solo tiene unas pocas etiquetas estilizadas, y la aplicación se ve bastante extraña:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Esta forma de estilizar una etiqueta te da control sobre elementos únicos, pero necesitas controlar los estilos de muchas plantas en tu terrario. Para hacerlo, necesitas aprovechar los selectores de CSS.

### Ids

Agrega algo de estilo para diseñar los contenedores izquierdo y derecho. Dado que solo hay un contenedor izquierdo y solo uno derecho, se les asignan ids en el marcado. Para estilizarlos, usa `#`:

```CSS
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

Aquí, has colocado estos contenedores con posicionamiento absoluto a los extremos izquierdo y derecho de la pantalla, y usaste porcentajes para su ancho para que puedan escalar en pantallas móviles pequeñas.

✅ Este código está bastante repetido, por lo tanto no es "DRY" (No te Repitas); ¿puedes encontrar una mejor manera de estilizar estos ids, tal vez con un id y una clase? Necesitarías cambiar el marcado y refactorizar el CSS:

```html
<div id="left-container" class="container"></div>
```

### Clases

En el ejemplo anterior, estilizaste dos elementos únicos en la pantalla. Si quieres que los estilos se apliquen a muchos elementos en la pantalla, puedes usar clases de CSS. Haz esto para diseñar las plantas en los contenedores izquierdo y derecho.

Nota que cada planta en el marcado HTML tiene una combinación de ids y clases. Los ids aquí son utilizados por el JavaScript que agregarás más adelante para manipular la colocación de las plantas en el terrario. Las clases, sin embargo, dan a todas las plantas un estilo determinado.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Agrega lo siguiente a tu archivo `style.css`:

```CSS
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

Es notable en este fragmento la mezcla de posicionamiento relativo y absoluto, que cubriremos en la siguiente sección. Observa cómo se manejan las alturas mediante porcentajes:

Estableces la altura del soporte de plantas en 13%, un buen número para asegurar que todas las plantas se muestren en cada contenedor vertical sin necesidad de desplazarse.

Mueves el soporte de plantas hacia la izquierda para permitir que las plantas estén más centradas dentro de su contenedor. Las imágenes tienen una gran cantidad de fondo transparente para hacerlas más arrastrables, por lo que necesitan ser empujadas hacia la izquierda para ajustarse mejor en la pantalla.

Luego, la planta en sí tiene un ancho máximo de 150%. Esto permite que se reduzca a medida que el navegador se reduce. Intenta cambiar el tamaño de tu navegador; las plantas permanecen en sus contenedores pero se reducen para ajustarse.

También es notable el uso de z-index, que controla la altitud relativa de un elemento (para que las plantas se sitúen encima del contenedor y parezcan estar dentro del terrario).

✅ ¿Por qué necesitas tanto un selector de soporte de plantas como un selector de plantas en CSS?

## Posicionamiento en CSS

Mezclar propiedades de posición (hay posiciones estáticas, relativas, fijas, absolutas y adhesivas) puede ser un poco complicado, pero cuando se hace correctamente te da un buen control sobre los elementos en tus páginas.

Los elementos posicionados absolutamente se posicionan en relación con sus ancestros posicionados más cercanos, y si no hay ninguno, se posicionan según el cuerpo del documento.

Los elementos posicionados relativamente se posicionan según las instrucciones de CSS para ajustar su ubicación lejos de su posición inicial.

En nuestro ejemplo, el `plant-holder` es un elemento posicionado relativamente que se posiciona dentro de un contenedor posicionado absolutamente. El comportamiento resultante es que los contenedores de la barra lateral están fijados a la izquierda y derecha, y el `plant-holder` está anidado, ajustándose dentro de las barras laterales, dando espacio para que las plantas se coloquen en una fila vertical.

> La `plant` en sí también tiene posicionamiento absoluto, necesario para hacerla arrastrable, como descubrirás en la próxima lección.

✅ Experimenta cambiando los tipos de posicionamiento de los contenedores laterales y el `plant-holder`. ¿Qué sucede?

## Diseños en CSS

Ahora usarás lo que aprendiste para construir el terrario en sí, todo usando CSS.

Primero, estiliza los hijos del div `.terrarium` como un rectángulo redondeado usando CSS:

```CSS
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

Nota el uso de porcentajes aquí. Si reduces el tamaño de tu navegador, puedes ver cómo el frasco también se escala. También observa los porcentajes de ancho y altura para los elementos del frasco y cómo cada elemento está posicionado absolutamente en el centro, fijado al fondo de la ventana.

También estamos usando `rem` para el radio del borde, una longitud relativa a la fuente. Lee más sobre este tipo de medida relativa en la [especificación de CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Intenta cambiar los colores y la opacidad del frasco frente a los de la tierra. ¿Qué sucede? ¿Por qué?

---

## 🚀Desafío

Agrega un brillo de 'burbuja' en la parte inferior izquierda del frasco para que parezca más de vidrio. Estilizarás `.jar-glossy-long` y `.jar-glossy-short` para que parezcan un brillo reflejado. Así es como se vería:

![terrario terminado](../../../../3-terrarium/2-intro-to-css/images/terrarium-final.png)

Para completar el cuestionario posterior a la clase, revisa este módulo de Learn: [Estiliza tu aplicación HTML con CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/18)

## Revisión y Estudio Personal

CSS parece engañosamente sencillo, pero hay muchos desafíos al intentar estilizar una aplicación perfectamente para todos los navegadores y tamaños de pantalla. CSS-Grid y Flexbox son herramientas que se han desarrollado para hacer el trabajo un poco más estructurado y confiable. Aprende sobre estas herramientas jugando [Flexbox Froggy](https://flexboxfroggy.com/) y [Grid Garden](https://codepip.com/games/grid-garden/).

## Tarea

[Refactorización de CSS](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.