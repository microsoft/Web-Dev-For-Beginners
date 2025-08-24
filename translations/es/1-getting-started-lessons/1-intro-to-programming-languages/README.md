<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-24T12:58:14+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "es"
}
-->
# Introducción a los Lenguajes de Programación y Herramientas del Oficio

Esta lección cubre los conceptos básicos de los lenguajes de programación. Los temas tratados aquí se aplican a la mayoría de los lenguajes de programación modernos. En la sección "Herramientas del Oficio", aprenderás sobre software útil que te ayudará como desarrollador.

![Intro Programación](../../../../sketchnotes/webdev101-programming.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario Previo a la Clase
[Cuestionario previo a la clase](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introducción

En esta lección, cubriremos:

- ¿Qué es la programación?
- Tipos de lenguajes de programación
- Elementos básicos de un programa
- Software y herramientas útiles para el desarrollador profesional

> Puedes tomar esta lección en [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## ¿Qué es la Programación?

La programación (también conocida como codificación) es el proceso de escribir instrucciones para un dispositivo como una computadora o un dispositivo móvil. Escribimos estas instrucciones con un lenguaje de programación, que luego es interpretado por el dispositivo. Estos conjuntos de instrucciones pueden ser referidos con varios nombres, pero *programa*, *programa de computadora*, *aplicación (app)* y *ejecutable* son algunos nombres populares.

Un *programa* puede ser cualquier cosa escrita con código; sitios web, juegos y aplicaciones móviles son programas. Aunque es posible crear un programa sin escribir código, la lógica subyacente es interpretada por el dispositivo y esa lógica probablemente fue escrita con código. Un programa que está *ejecutando* o *procesando* código está llevando a cabo instrucciones. El dispositivo con el que estás leyendo esta lección está ejecutando un programa para mostrarla en tu pantalla.

✅ Investiga un poco: ¿Quién es considerado el primer programador de computadoras del mundo?

## Lenguajes de Programación

Los lenguajes de programación permiten a los desarrolladores escribir instrucciones para un dispositivo. Los dispositivos solo pueden entender binario (1s y 0s), y para *la mayoría* de los desarrolladores, esa no es una forma muy eficiente de comunicarse. Los lenguajes de programación son el vehículo para la comunicación entre humanos y computadoras.

Los lenguajes de programación vienen en diferentes formatos y pueden servir diferentes propósitos. Por ejemplo, JavaScript se utiliza principalmente para aplicaciones web, mientras que Bash se utiliza principalmente para sistemas operativos.

Los *lenguajes de bajo nivel* generalmente requieren menos pasos que los *lenguajes de alto nivel* para que un dispositivo interprete las instrucciones. Sin embargo, lo que hace populares a los lenguajes de alto nivel es su legibilidad y soporte. JavaScript se considera un lenguaje de alto nivel.

El siguiente código ilustra la diferencia entre un lenguaje de alto nivel con JavaScript y un lenguaje de bajo nivel con código ensamblador ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Aunque no lo creas, *ambos están haciendo lo mismo*: imprimir una secuencia de Fibonacci hasta el número 10.

✅ Una secuencia de Fibonacci se [define](https://en.wikipedia.org/wiki/Fibonacci_number) como un conjunto de números en el que cada número es la suma de los dos anteriores, comenzando desde 0 y 1. Los primeros 10 números de la secuencia de Fibonacci son 0, 1, 1, 2, 3, 5, 8, 13, 21 y 34.

## Elementos de un Programa

Una sola instrucción en un programa se llama *sentencia* y usualmente tendrá un carácter o espacio de línea que marca dónde termina la instrucción, o *termina*. Cómo termina un programa varía según el lenguaje.

Las sentencias dentro de un programa pueden depender de datos proporcionados por un usuario o de otro lugar para llevar a cabo instrucciones. Los datos pueden cambiar cómo se comporta un programa, por lo que los lenguajes de programación vienen con una forma de almacenar datos temporalmente para que puedan ser utilizados más tarde. Estos se llaman *variables*. Las variables son sentencias que instruyen a un dispositivo a guardar datos en su memoria. Las variables en los programas son similares a las variables en álgebra, donde tienen un nombre único y su valor puede cambiar con el tiempo.

Es posible que algunas sentencias no sean ejecutadas por un dispositivo. Esto generalmente ocurre por diseño cuando lo escribe el desarrollador o por accidente cuando ocurre un error inesperado. Este tipo de control sobre una aplicación la hace más robusta y mantenible. Típicamente, estos cambios en el control ocurren cuando se cumplen ciertas condiciones. Una sentencia común utilizada en la programación moderna para controlar cómo se ejecuta un programa es la sentencia `if..else`.

✅ Aprenderás más sobre este tipo de sentencia en lecciones posteriores.

## Herramientas del Oficio

[![Herramientas del Oficio](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Herramientas del Oficio")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre herramientas

En esta sección, aprenderás sobre algunos programas que pueden ser muy útiles al comenzar tu camino como desarrollador profesional.

Un **entorno de desarrollo** es un conjunto único de herramientas y características que un desarrollador utiliza frecuentemente al escribir software. Algunas de estas herramientas han sido personalizadas para las necesidades específicas de un desarrollador y pueden cambiar con el tiempo si ese desarrollador cambia prioridades en el trabajo, proyectos personales o cuando utiliza un lenguaje de programación diferente. Los entornos de desarrollo son tan únicos como los desarrolladores que los utilizan.

### Editores

Una de las herramientas más cruciales para el desarrollo de software es el editor. Los editores son donde escribes tu código y, a veces, donde ejecutas tu código.

Los desarrolladores dependen de los editores por varias razones adicionales:

- *Depuración* ayuda a descubrir errores y fallos al analizar el código línea por línea. Algunos editores tienen capacidades de depuración; pueden ser personalizados y añadidos para lenguajes de programación específicos.
- *Resaltado de sintaxis* agrega colores y formato de texto al código, haciéndolo más fácil de leer. La mayoría de los editores permiten personalizar el resaltado de sintaxis.
- *Extensiones e Integraciones* son herramientas especializadas para desarrolladores, creadas por desarrolladores. Estas herramientas no están integradas en el editor base. Por ejemplo, muchos desarrolladores documentan su código para explicar cómo funciona. Pueden instalar una extensión de corrección ortográfica para ayudar a encontrar errores tipográficos en la documentación. La mayoría de las extensiones están destinadas a ser utilizadas dentro de un editor específico, y la mayoría de los editores vienen con una forma de buscar extensiones disponibles.
- *Personalización* permite a los desarrolladores crear un entorno de desarrollo único que se adapte a sus necesidades. La mayoría de los editores son extremadamente personalizables y también pueden permitir a los desarrolladores crear extensiones personalizadas.

#### Editores Populares y Extensiones para Desarrollo Web

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Navegadores

Otra herramienta crucial es el navegador. Los desarrolladores web dependen del navegador para ver cómo su código se ejecuta en la web. También se utiliza para mostrar los elementos visuales de una página web que se escriben en el editor, como HTML.

Muchos navegadores vienen con *herramientas para desarrolladores* (DevTools) que contienen un conjunto de características útiles e información para ayudar a los desarrolladores a recopilar y capturar información importante sobre su aplicación. Por ejemplo: Si una página web tiene errores, a veces es útil saber cuándo ocurrieron. Las DevTools en un navegador pueden configurarse para capturar esta información.

#### Navegadores Populares y DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Herramientas de Línea de Comandos

Algunos desarrolladores prefieren una vista menos gráfica para sus tareas diarias y dependen de la línea de comandos para lograrlo. Escribir código requiere una cantidad significativa de tipeo y algunos desarrolladores prefieren no interrumpir su flujo en el teclado. Utilizan atajos de teclado para cambiar entre ventanas del escritorio, trabajar en diferentes archivos y usar herramientas. La mayoría de las tareas se pueden completar con un mouse, pero una ventaja de usar la línea de comandos es que se puede hacer mucho con herramientas de línea de comandos sin necesidad de cambiar entre el mouse y el teclado. Otra ventaja de la línea de comandos es que son configurables y puedes guardar una configuración personalizada, cambiarla más tarde e importarla a otras máquinas de desarrollo. Debido a que los entornos de desarrollo son tan únicos para cada desarrollador, algunos evitarán usar la línea de comandos, otros dependerán completamente de ella y algunos preferirán una mezcla de ambos.

### Opciones Populares de Línea de Comandos

Las opciones para la línea de comandos diferirán según el sistema operativo que utilices.

*💻 = viene preinstalado en el sistema operativo.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (también conocido como CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Herramientas Populares de Línea de Comandos

- [Git](https://git-scm.com/) (💻 en la mayoría de los sistemas operativos)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentación

Cuando un desarrollador quiere aprender algo nuevo, probablemente recurrirá a la documentación para aprender cómo usarlo. Los desarrolladores suelen depender de la documentación para guiarlos sobre cómo usar herramientas y lenguajes correctamente, y también para obtener un conocimiento más profundo de cómo funcionan.

#### Documentación Popular sobre Desarrollo Web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), de Mozilla, los editores del navegador [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), de Google, editores de [Chrome](https://www.google.com/chrome/)
- [Documentación para desarrolladores de Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Investiga: Ahora que conoces los conceptos básicos del entorno de un desarrollador web, compáralo con el entorno de un diseñador web.

---

## 🚀 Desafío

Compara algunos lenguajes de programación. ¿Cuáles son algunas de las características únicas de JavaScript frente a Java? ¿Qué hay de COBOL frente a Go?

## Cuestionario Posterior a la Clase
[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Revisión y Autoestudio

Estudia un poco sobre los diferentes lenguajes disponibles para el programador. Intenta escribir una línea en un lenguaje y luego reescribirla en otros dos. ¿Qué aprendiste?

## Tarea

[Leer la Documentación](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.