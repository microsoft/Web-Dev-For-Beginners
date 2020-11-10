# Creación de páginas web accesibles

![Todo sobre accesibilidad](webdev101-a11y.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## [Pre-lecture prueba](.github/pre-lecture-quiz.md)

> El poder de la Web está en su universalidad. El acceso de todas las personas independientemente de su discapacidad es un aspecto fundamental.
>
> \- Sir Timothy Berners-Lee, director del W3C e inventor de la World Wide Web

Esta cita destaca perfectamente la importancia de crear sitios web accesibles. Una aplicación a la que no pueden acceder todos es, por definición, excluyente. Como desarrolladores web, siempre debemos tener en cuenta la accesibilidad. Al tener este enfoque desde el principio, estará bien encaminado para garantizar que todos puedan acceder a las páginas que crea. En esta lección, aprenderá sobre las herramientas que pueden ayudarlo a asegurarse de que sus activos web sean accesibles y cómo construir teniendo en cuenta la accesibilidad. 

## Herramientas para usar

### Lectoras de pantalla

Una de las herramientas de accesibilidad más conocidas son los lectores de pantalla.

[Lectores de pantalla](https://en.wikipedia.org/wiki/Screen_reader) son clientes de uso común para personas con problemas de visión. A medida que dedicamos tiempo a asegurarnos de que un navegador transmita correctamente la información que deseamos compartir, también debemos asegurarnos de que un lector de pantalla haga lo mismo.

En su forma más básica, un lector de pantalla leerá una página de arriba a abajo de forma audible. Si su página es todo texto, el lector transmitirá la información de manera similar a un navegador. Por supuesto, las páginas web rara vez son puramente texto; contendrán enlaces, gráficos, color y otros componentes visuales. Se debe tener cuidado para garantizar que un lector de pantalla lea correctamente esta información.

Todo desarrollador web debería familiarizarse con un lector de pantalla. Como se destacó anteriormente, es el cliente que utilizarán sus usuarios. De la misma manera que está familiarizado con el funcionamiento de un navegador, debe aprender cómo funciona un lector de pantalla. Afortunadamente, los lectores de pantalla están integrados en la mayoría de los sistemas operativos y muchos navegadores contienen extensiones para emular un lector de pantalla.

✅ Prueba una extensión o herramienta de navegador de lector de pantalla. Uno que solo funciona en Windows es [JAWS](https://webaim.org/articles/jaws/). Los navegadores también tienen herramientas integradas que se pueden utilizar para este propósito; Consulte estas [herramientas de navegador Edge centradas en la accesibilidad](https://support.microsoft.com/en-us/help/4000734/microsoft-edge-accessibility-features).

### Damas de contraste

Los colores en los sitios web deben elegirse cuidadosamente para responder a las necesidades de los usuarios daltónicos o de las personas que tienen dificultades para ver colores de bajo contraste.

✅ Pruebe un sitio web que le guste usar para el uso del color con una extensión de navegador como
 [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US). ¿Qué aprendes?

### Lighthouse

En el área de herramientas para desarrolladores de su navegador, encontrará la herramienta Lighthouse. Esta herramienta es importante para obtener una primera visión de la accesibilidad (así como otros análisis) de un sitio web. Si bien es importante no depender exclusivamente de Lighthouse, una puntuación del 100% es muy útil como referencia.

✅ Busque Lighthouse en el panel de herramientas de desarrollo de su navegador y ejecute un análisis en cualquier sitio. ¿Qué descubres?

## Diseñar para la accesibilidad

La accesibilidad es un tema relativamente extenso. Para ayudarlo, existen numerosos recursos disponibles.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Si bien no podremos cubrir todos los aspectos de la creación de sitios accesibles, a continuación se muestran algunos de los principios básicos que querrá implementar. Diseñar una página accesible desde el principio es ** siempre ** más fácil que volver a una página existente para hacerla accesible.

## Buenos principios de visualización

### Paletas de colores seguros

La gente ve el mundo de diferentes formas, y esto incluye los colores. Al seleccionar un esquema de color para su sitio, debe asegurarse de que sea accesible para todos. Uno genial [herramienta para generar paletas de colores es Color Safe](http://colorsafe.co/).

✅ Identifique un sitio web que sea muy problemático en el uso del color. ¿Por qué?

### Resaltar correctamente el texto

Resaltar texto por color, [peso de fuente](https://developer.mozilla.org/docs/Web/CSS/font-weight) u otra [decoración de texto](https://developer.mozilla.org/docs/Web/CSS/text-decoration) no informa inherentemente a un lector de pantalla de su importancia. Una palabra puede ser en negrita porque es una palabra clave o porque es la primera palabra y el diseñador decidió que debería ser en negrita.

Cuando sea necesario resaltar una frase en particular, utilice los elementos `<strong>` o `<em>`. Estos le indicarán a un lector de pantalla que esos elementos son importantes.

### Usa el HTML correcto

Con CSS y JavaScript es posible que muchos elementos se parezcan a cualquier tipo de control. `<span>` podría usarse para crear un `<button>`, y `<b>` podría convertirse en un hipervínculo. Si bien esto podría considerarse más fácil de diseñar, es desconcertante para un lector de pantalla. Utilice el HTML apropiado al crear controles en una página. Si desea un hipervínculo, use `<a>`. Usar el HTML correcto para el control correcto se llama hacer uso de HTML semántico.

✅ Vaya a cualquier sitio web y vea si los diseñadores y desarrolladores están usando HTML correctamente. ¿Puedes encontrar un botón que debería ser un enlace? Sugerencia: haga clic derecho y elija 'View Page Source' en su navegador para ver el código subyacente.

### Usa buenas pistas visuales

CSS ofrece un control completo sobre el aspecto de cualquier elemento de una página. Puede crear cuadros de texto sin contorno o hipervínculos sin subrayado. Desafortunadamente, eliminar esas pistas puede hacer que sea más difícil para alguien que depende de ellas poder reconocer el tipo de control.

## La importancia del texto del enlace

Los hipervínculos son fundamentales para navegar por la web. Como resultado, garantizar que un lector de pantalla pueda leer correctamente los enlaces permite a todos los usuarios navegar por su sitio.

### Lectores de pantalla y enlaces

Como era de esperar, los lectores de pantalla leen el texto del enlace de la misma forma que leerían cualquier otro texto de la página. Teniendo esto en cuenta, el texto que se muestra a continuación puede parecer perfectamente aceptable.

> El pequeño pingüino, a veces conocido como el pingüino de hadas, es el pingüino más pequeño del mundo. [Haga clic aquí](https://en.wikipedia.org/wiki/Little_penguin) para obtener más información.

> El pequeño pingüino, a veces conocido como el pingüino de hadas, es el pingüino más pequeño del mundo. Visite https://en.wikipedia.org/wiki/Little_penguin para obtener más información.

> ** NOTA ** Mientras estás a punto de leer, ** nunca ** debes crear enlaces que se parezcan al anterior.

Recuerde, los lectores de pantalla son una interfaz diferente de los navegadores con un conjunto diferente de características.

### El problema con el uso de la URL

Los lectores de pantalla leen el texto. Si aparece una URL en el texto, el lector de pantalla leerá la URL. En términos generales, la URL no transmite información significativa y puede sonar molesta. Es posible que haya experimentado esto si su teléfono alguna vez leyó de manera audible un mensaje de texto con una URL.

### El problema con "haga clic aquí"

Los lectores de pantalla también tienen la capacidad de leer solo los hipervínculos en una página, de la misma manera que una persona con visión escanea una página en busca de enlaces. Si el texto del vínculo es siempre "haga clic aquí", todo lo que el usuario oirá es "haga clic aquí, haga clic aquí, haga clic aquí, haga clic aquí, haga clic aquí, ..." Todos los enlaces ahora son indistinguibles entre sí.

### Buen texto de enlace

Un buen texto de enlace describe brevemente lo que está al otro lado del enlace. En el ejemplo anterior, hablando de pequeños pingüinos, el enlace es a la página de Wikipedia sobre la especie. La frase *pequeños pingüinos* sería un texto de enlace perfecto, ya que deja en claro lo que alguien aprenderá si hace clic en el enlace: pequeños pingüinos.

> El [pingüino pequeño](https://en.wikipedia.org/wiki/Little_penguin), a veces conocido como el pingüino de hadas, es el pingüino más pequeño del mundo.

✅ Navegue por la web durante unos minutos para encontrar páginas que utilicen estrategias de enlace poco conocidas. Compárelos con otros sitios mejor vinculados. ¿Qué aprendes?

#### Notas del motor de búsqueda

Como una ventaja adicional para garantizar que su sitio sea accesible para todos, también ayudará a los motores de búsqueda a navegar por su sitio. Los motores de búsqueda utilizan el texto del enlace para conocer los temas de las páginas. ¡Así que usar un buen texto de enlace ayuda a todos!

### ARIA

Imagina la siguiente página:

| Producto      | Descripción        | Orden        |
| ------------ | ------------------ | ------------ |
| Widget       | [Descripción]('#') | [Orden]('#') |
| Super widget | [Descripción]('#') | [Orden]('#') |

En este ejemplo, duplicar el texto de descripción y orden tiene sentido para alguien que usa un navegador. Sin embargo, alguien que use un lector de pantalla solo escuchará las palabras * descripción * y * orden * repetidas sin contexto.

Para admitir este tipo de escenarios, HTML admite un conjunto de atributos conocidos como [Aplicaciones de Internet enriquecidas accesibles (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Estos atributos le permiten proporcionar información adicional a los lectores de pantalla.

> **NOTA**: Al igual que muchos aspectos de HTML, la compatibilidad con el navegador y el lector de pantalla puede variar. Sin embargo, la mayoría de los clientes de la línea principal admiten atributos ARIA.

Puedes usar `aria-label` para describir el enlace cuando el formato de la página no te lo permite. La descripción del widget podría establecerse como

``` html
<a href="#" aria-label="Widget description">descripción</a>
```

✅ En general, el uso de marcado semántico como se describe arriba reemplaza el uso de ARIA, pero a veces no existe un equivalente semántico para varios widgets HTML. Un buen ejemplo es una barra de progreso. No hay un equivalente HTML para una barra de progreso, por lo que identifica el `<div>` genérico para este elemento con un rol y valores de aria adecuados. La [documentación de MDN sobre ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) contiene más información útil.

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
</div>
```

## Imagenes

No hace falta decir que los lectores de pantalla no pueden leer automáticamente lo que hay en una imagen. Asegurarse de que las imágenes sean accesibles no requiere mucho trabajo; de eso se trata el atributo ʻalt`. Todas las imágenes deben tener un ʻalt` para describir lo que son.

✅ Como era de esperar, los motores de búsqueda tampoco pueden comprender qué hay en una imagen. También usan texto alternativo. Una vez más, ¡asegurarse de que su página sea accesible proporciona bonificaciones adicionales!

## El teclado

Algunos usuarios no pueden usar un mouse o trackpad, sino que dependen de las interacciones del teclado para pasar de un elemento al siguiente. Es importante que su sitio web presente su contenido en un orden lógico para que un teclado pueda acceder a cada elemento a medida que el usuario avanza por un documento. Si construye sus páginas web con marcado semántico y usa CSS para diseñar su diseño visual, su sitio debe ser navegable por teclado, pero es importante probar este aspecto manualmente. Obtenga más información sobre las [estrategias de navegación por teclado](https://webaim.org/techniques/keyboard/).

✅ Vaya a cualquier sitio web e intente navegar por él utilizando solo la tecla de tabulación. ¿Qué funciona, qué no funciona? ¿Por qué?

## Resumen

Una web accesible para algunos no es una verdadera "red mundial". La mejor manera de garantizar que los sitios que cree sean accesibles es incorporar las mejores prácticas de accesibilidad desde el principio. Si bien hay pasos adicionales involucrados, incorporar estas habilidades en su flujo de trabajo ahora significará que todas las páginas que cree serán accesibles.

🚀 Desafío: tome este HTML y vuelva a escribirlo para que sea lo más accesible posible, dados los temas que aprendió.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## [Post-lecture prueba](.github/post-lecture-quiz.md)

## Revisión y autoestudio

Muchos gobiernos tienen leyes sobre los requisitos de accesibilidad. Lea sobre las leyes de accesibilidad de su país de origen. ¿Qué está cubierto y qué no? Un ejemplo es [este sitio web del gobierno](https://accessibility.blog.gov.uk/).

** Tarea **: [Analizar un sitio web no accesible](assignment.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) por Instrument

> Autor: Christopher Harrison
