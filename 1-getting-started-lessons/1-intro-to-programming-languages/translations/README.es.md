# Introducción a lenguajes de programación y herramientas del oficio

Esta lección cubre los conceptos básicos de los lenguajes de programación. Los temas que aprenderemos aquí se aplican a la mayoría de los lenguajes de programación modernos en la actualidad. En la sección 'Herramientas del oficio', aprenderás sobre software y herramientas que te ayudarán como desarrollador.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Dibujo por [Tomomi Imura](https://twitter.com/girlie_mac)

## [Cuestionario](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)
### Introducción

En esta lección, cubriremos:

- ¿Qué es la programación?
- Tipos de lenguajes de programación
- Elementos básicos de un programa
- Software y herramientas para desarrolladores profesionales

## ¿Qué es la programación?

La programación (también conocida como codificación) es el proceso de escribir instrucciones en un dispositivo, como una computadora o un celular. Escribimos estas instrucciones con un lenguaje de programación, que luego es interpretado por el dispositivo. Este conjuntos de instrucciones pueden tener varios nombres, como *programa*, *programa de computadora*, *aplicación (app)* o *ejecutable* son algunos de los mas populares.


Un *programa* puede ser cualquier cosa que esté escrita con código; los sitios web, los videojuegos y las aplicaciones de teléfono son programas. Si bien es posible crear un programa sin escribir código, la lógica subyacente se interpreta al dispositivo y esa lógica probablemente se escribió con código. Un programa que está *ejecutándose* o *ejecutando código* está ejecutando una serie de instrucciones. El dispositivo con el que estás leyendo esta lección está ejecutando un programa para imprimirlo en tu pantalla.

✅ Investigue un poco: ¿quién se considera el primer programador(a) de computadoras del mundo?

## Lenguajes de programación

Los lenguajes de programación tienen un propósito principal: que los desarrolladores creen instrucciones para enviarlas a un dispositivo. Los dispositivos solo pueden entender codigo binario (1 y 0), y para *la mayoría* de los desarrolladores, esa no es una forma muy amigable de comunicarse. Los lenguajes de programación son un vehículo para la comunicación entre los humanos y las computadoras.

Los lenguajes de programación vienen en diferentes formatos y tienen diferentes propósitos. Por ejemplo, JavaScript se usa principalmente para aplicaciones web, mientras que Bash se usa principalmente para sistemas operativos.

*Los idiomas de bajo nivel* normalmente requieren menos pasos que los *idiomas de alto nivel* para que un dispositivo interprete las instrucciones. Sin embargo, lo que hace que los lenguajes de alto nivel sean populares es su legibilidad y soporte. JavaScript es considerado un lenguaje de alto nivel.

El siguiente código ilustra la diferencia entre un lenguaje de alto nivel con JavaScript y un lenguaje de bajo nivel con código Assembly ARM.

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

Lo creas o no, *ambos hacen lo mismo*: imprimir una secuencia de Fibonacci hasta 10.

✅ Una secuencia de Fibonacci se [define](https://en.wikipedia.org/wiki/Fibonacci_number) como un conjunto de números de modo que cada número es la suma de los dos precedentes, comenzando por 0 y 1.

## Elementos de un programa

Una sola instrucción en un programa se llama *instrucción* y generalmente tendrá un carácter o un espacio entre líneas que marca dónde termina esta. La forma en que termina un programa varía con cada idioma.

La mayoría de los programas se basan en el uso de datos de un usuario o de otros lugares, donde las declaraciones pueden basarse en datos para llevar a cabo instrucciones. Los datos pueden cambiar la forma en que se comporta un programa, por lo que los lenguajes de programación vienen con una forma de almacenar temporalmente datos que se pueden usar más adelante. Estos datos se denominan *variables*. Las variables son declaraciones que indican a un dispositivo que guarde datos en su memoria. Las variables en los programas son similares a las del álgebra, donde tienen un nombre único y su valor puede cambiar con el tiempo.

Existe la posibilidad de que un dispositivo no ejecute algunas declaraciones. Esto suele ser por diseño cuando lo escribe el desarrollador o por accidente cuando ocurre un error inesperado. Este tipo de control de una aplicación la hace más robusta y fácil de mantener. Por lo general, estos cambios en el control ocurren cuando se cumplen ciertas decisiones. Una declaración común en los lenguajes de programación modernos para controlar cómo se ejecuta un programa es la declaración `if..else`.

✅ Aprenderás más sobre este tipo de afirmaciones en lecciones posteriores.

## Herramientas del oficio

[![Herramientas](https://img.youtube.com/vi/ysMrHssmhl0/0.jpg)](https://youtube.com/watch?v=ysMrHssmhl0 "Herramientas")

En esta sección, aprenderás sobre software que puede ayudarte comenzar tu viaje de desarrollo profesional.

Un **entorno de desarrollo** es un conjunto único de herramientas y características que un desarrollador utilizará a menudo para escribir software. Algunas de estas herramientas se han personalizado para las necesidades específicas de un desarrollador y pueden cambiar con el tiempo si un desarrollador cambia las prioridades en el trabajo o proyectos personales, o cuando usa un lenguaje de programación diferente. Los entornos de desarrollo son tan únicos como los desarrolladores que los utilizan.

### Editores

Una de las herramientas más importantes para el desarrollo de software es el editor. Los editores son el lugar donde escribes tu código y, a veces, donde lo ejecutaras.

Los desarrolladores confían en los editores por algunas razones adicionales:

- *Depuración* - Descubrimiento de errores al recorrer el código, línea por línea. Algunos editores tienen capacidades de depuración o se pueden personalizar y agregar para lenguajes de programación específicos.
- *Resaltado de sintaxis* - Agrega colores y formato de texto al código, lo hace más fácil de leer. La mayoría de los editores permiten el resaltado de sintaxis personalizado.
- *Extensiones e integraciones del navegador*  -  Adiciones especializadas para desarrolladores, por desarrolladores, para acceder a herramientas adicionales que no están integradas en el editor base. Por ejemplo, muchos desarrolladores también necesitan una forma de documentar su código y explicar cómo funciona, e instalarán una extensión de revisión ortográfica para verificar si hay errores. La mayoría de estas adiciones están diseñadas para usarse dentro de un editor específico, y la mayoría de los editores vienen con una forma de buscar extensiones disponibles.
- *Personalización*  - La mayoría de los editores son extremadamente personalizables, y cada desarrollador tendrá su propio entorno de desarrollo único que se adapta a sus necesidades. Muchos también permiten a los desarrolladores crear su propia extensión.


#### Editores populares y extensiones de desarrollo web

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Formateador de código](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Editor de codigo Átom](https://atom.io/)
  - [Code Spell Checker para Atom](https://atom.io/packages/spell-check)
  - [Teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

* Teletype: Es una extension que nos permite colaborar en un mismo espacio de trabajo entre muchas personas.

### Navegadores

Otra herramienta esencial es el navegador. Los desarrolladores Web confían en el navegador para observar cómo se ejecuta su código. También se usa para ver elementos visuales de una página web que están escritos en el editor, como HTML.

Muchos navegadores vienen con *herramientas para desarrolladores* (DevTools) que contienen un conjunto de características e información útil para ayudar a los desarrolladores a recopilar y capturar información importante sobre su aplicación. Por ejemplo: si una página web tiene errores, a veces es útil saber cuándo ocurrieron. Se puede configurar DevTools en un navegador para capturar esta información.

#### Navegadores y herramientas de desarrollo populares

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Herramientas de línea de comandos (CLI)

Algunos desarrolladores prefieren una vista menos gráfica para sus tareas diarias y confían en la línea de comandos **(CLI)** para lograrlo. El desarrollo de código requiere una gran cantidad de escritura, y algunos desarrolladores prefieren no interrumpir su flujo de trabajo con el teclado es por eso que usan atajos(shortcuts) para cambiar entre ventanas de escritorio, trabajar en diferentes archivos y usar herramientas. La mayoría de las tareas se pueden completar con un mouse, pero una de las ventajas de utilizar la línea de comandos es que se pueden hacer muchas cosas sin la necesidad de cambiar entre el mouse y el teclado. Otro beneficio de esta es que son configurables, puedes guardar tu configuración personalizada, asi como tambien cambiarla más tarde o importarla a nueva máquina. Debido a que los entornos son tan exclusivos para cada desarrollador, algunos evitarán usar la línea de comandos, algunos dependerán de ella por completo asi como tambien otros pueden preferir una combinación de ambos.

### Opciones de línea de comandos (CLI) populares

Las opciones para la línea de comando varian según el sistema operativo que utilices.

💻 = *viene preinstalado en el sistema operativo.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [Mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Línea de comandos (CLI) Populares

- [Git](https://git-scm.com/) (💻 en la mayoría de los sistemas operativos)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentación

Cuando un desarrollador quiere aprender algo nuevo, lo más probable es que recurras a la documentación para aprender a usarla. Los desarrolladores a menudo confían en esta para guiarlos a través de cómo usar ciertas herramientas asi como tambien para entender como funcionan los lenguajes.

#### Documentación popular sobre desarrollo de web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), de Mozilla, editores de [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), de Google, editores de [Chrome](https://www.google.com/chrome/)
- [Documentos para desarrolladores propios de Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para [Microsoft Edge](https://www.microsoft.com/edge)

✅ Investiga un poco: ahora que conoces los conceptos básicos del entorno de un desarrollador web, compáralo y contrasta con el entorno de un diseñador web.

## 🚀 Reto

Compara algunos lenguajes de programación. ¿Cuáles son algunos de los rasgos únicos de JavaScript frente a Java? ¿Qué hay de COBOL vs. Go?

## [Prueba Post-lectura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Revisión y autoestudio

Estudia un poco sobre los diferentes lenguajes disponibles para programar. Intenta escribir una línea en un lenguaje y luego vuelve a hacerlo en otros dos. ¿Qué aprendiste?

**Tarea**: [Tarea](../assignment.md)