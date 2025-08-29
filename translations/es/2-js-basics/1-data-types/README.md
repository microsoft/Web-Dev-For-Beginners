<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T13:57:22+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "es"
}
-->
# Conceptos Básicos de JavaScript: Tipos de Datos

![Conceptos Básicos de JavaScript - Tipos de Datos](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.es.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario Previo a la Clase
[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/)

Esta lección cubre los conceptos básicos de JavaScript, el lenguaje que proporciona interactividad en la web.

> ¡Puedes tomar esta lección en [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables en JavaScript")

[![Tipos de Datos en JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipos de Datos en JavaScript")

> 🎥 Haz clic en las imágenes de arriba para ver videos sobre variables y tipos de datos.

¡Comencemos con las variables y los tipos de datos que las llenan!

## Variables

Las variables almacenan valores que pueden ser utilizados y modificados a lo largo de tu código.

Crear y **declarar** una variable tiene la siguiente sintaxis: **[palabra clave] [nombre]**. Está compuesta por dos partes:

- **Palabra clave**. Las palabras clave pueden ser `let` o `var`.  

✅ La palabra clave `let` fue introducida en ES6 y le da a tu variable un llamado _alcance de bloque_. Se recomienda usar `let` en lugar de `var`. Cubriremos los alcances de bloque más a fondo en partes futuras.
- **El nombre de la variable**, este es un nombre que eliges tú mismo.

### Tarea - Trabajando con Variables

1. **Declara una variable**. Declaremos una variable usando la palabra clave `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` ha sido declarada usando la palabra clave `let`. Actualmente no tiene un valor.

1. **Asigna un valor**. Almacena un valor en una variable con el operador `=`, seguido del valor esperado.

    ```javascript
    myVariable = 123;
    ```

   > Nota: el uso de `=` en esta lección significa que estamos utilizando un "operador de asignación", usado para establecer un valor a una variable. No denota igualdad.

   `myVariable` ha sido *inicializada* con el valor 123.

1. **Refactoriza**. Reemplaza tu código con la siguiente declaración.

    ```javascript
    let myVariable = 123;
    ```

    Lo anterior se llama una _inicialización explícita_ cuando una variable es declarada y se le asigna un valor al mismo tiempo.

1. **Cambia el valor de la variable**. Cambia el valor de la variable de la siguiente manera:

   ```javascript
   myVariable = 321;
   ```

   Una vez que una variable es declarada, puedes cambiar su valor en cualquier momento en tu código con el operador `=` y el nuevo valor.

   ✅ ¡Pruébalo! Puedes escribir JavaScript directamente en tu navegador. Abre una ventana del navegador y navega a las Herramientas para Desarrolladores. En la consola, encontrarás un prompt; escribe `let myVariable = 123`, presiona Enter, luego escribe `myVariable`. ¿Qué sucede? Nota, aprenderás más sobre estos conceptos en lecciones posteriores.

## Constantes

La declaración e inicialización de una constante sigue los mismos conceptos que una variable, con la excepción de la palabra clave `const`. Las constantes suelen declararse con letras mayúsculas.

```javascript
const MY_VARIABLE = 123;
```

Las constantes son similares a las variables, con dos excepciones:

- **Deben tener un valor**. Las constantes deben ser inicializadas, o se producirá un error al ejecutar el código.
- **La referencia no puede cambiar**. La referencia de una constante no puede cambiar una vez inicializada, o se producirá un error al ejecutar el código. Veamos dos ejemplos:
   - **Valor simple**. Lo siguiente NO está permitido:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **La referencia del objeto está protegida**. Lo siguiente NO está permitido.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **El valor del objeto no está protegido**. Lo siguiente SÍ está permitido:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Arriba estás cambiando el valor del objeto pero no la referencia en sí, lo que lo hace permitido.

   > Nota, un `const` significa que la referencia está protegida contra reasignación. Sin embargo, el valor no es _inmutable_ y puede cambiar, especialmente si es una estructura compleja como un objeto.

## Tipos de Datos

Las variables pueden almacenar muchos tipos diferentes de valores, como números y texto. Estos diversos tipos de valores se conocen como **tipos de datos**. Los tipos de datos son una parte importante del desarrollo de software porque ayudan a los desarrolladores a tomar decisiones sobre cómo debe escribirse el código y cómo debe ejecutarse el software. Además, algunos tipos de datos tienen características únicas que ayudan a transformar o extraer información adicional de un valor.

✅ Los Tipos de Datos también se conocen como primitivas de datos de JavaScript, ya que son los tipos de datos de nivel más bajo que proporciona el lenguaje. Hay 7 tipos de datos primitivos: string, number, bigint, boolean, undefined, null y symbol. Tómate un minuto para visualizar qué podría representar cada una de estas primitivas. ¿Qué es un `zebra`? ¿Qué hay de `0`? ¿`true`?

### Números

En la sección anterior, el valor de `myVariable` era un tipo de dato número.

`let myVariable = 123;`

Las variables pueden almacenar todo tipo de números, incluidos decimales o números negativos. Los números también pueden usarse con operadores aritméticos, que se cubren en la [siguiente sección](../../../../2-js-basics/1-data-types).

### Operadores Aritméticos

Hay varios tipos de operadores para usar al realizar funciones aritméticas, y algunos se enumeran aquí:

| Símbolo | Descripción                                                              | Ejemplo                          |
| ------- | ------------------------------------------------------------------------ | -------------------------------- |
| `+`     | **Suma**: Calcula la suma de dos números                                 | `1 + 2 //respuesta esperada es 3`   |
| `-`     | **Resta**: Calcula la diferencia de dos números                          | `1 - 2 //respuesta esperada es -1`  |
| `*`     | **Multiplicación**: Calcula el producto de dos números                   | `1 * 2 //respuesta esperada es 2`   |
| `/`     | **División**: Calcula el cociente de dos números                         | `1 / 2 //respuesta esperada es 0.5` |
| `%`     | **Resto**: Calcula el resto de la división de dos números                | `1 % 2 //respuesta esperada es 1`   |

✅ ¡Pruébalo! Intenta una operación aritmética en la consola de tu navegador. ¿Te sorprenden los resultados?

### Cadenas de Texto (Strings)

Las cadenas de texto son conjuntos de caracteres que se encuentran entre comillas simples o dobles.

- `'Esto es una cadena de texto'`
- `"Esto también es una cadena de texto"`
- `let myString = 'Este es un valor de cadena almacenado en una variable';`

Recuerda usar comillas al escribir una cadena, de lo contrario JavaScript asumirá que es un nombre de variable.

### Formateo de Cadenas

Las cadenas son textuales y requerirán formateo de vez en cuando.

Para **concatenar** dos o más cadenas, o unirlas, usa el operador `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ ¿Por qué `1 + 1 = 2` en JavaScript, pero `'1' + '1' = 11`? Piénsalo. ¿Qué pasa con `'1' + 1`?

**Literales de plantilla** son otra forma de formatear cadenas, excepto que en lugar de comillas, se usa el acento grave. Cualquier cosa que no sea texto plano debe colocarse dentro de marcadores `${ }`. Esto incluye cualquier variable que pueda ser una cadena.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Puedes lograr tus objetivos de formateo con cualquiera de los métodos, pero los literales de plantilla respetarán cualquier espacio y salto de línea.

✅ ¿Cuándo usarías un literal de plantilla en lugar de una cadena simple?

### Booleanos

Los booleanos solo pueden tener dos valores: `true` o `false`. Los booleanos pueden ayudar a tomar decisiones sobre qué líneas de código deben ejecutarse cuando se cumplen ciertas condiciones. En muchos casos, los [operadores](../../../../2-js-basics/1-data-types) ayudan a establecer el valor de un booleano y a menudo notarás y escribirás variables que se inicializan o actualizan sus valores con un operador.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Una variable puede considerarse 'truthy' si evalúa a un booleano `true`. Curiosamente, en JavaScript, [todos los valores son truthy a menos que se definan como falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Desafío

JavaScript es conocido por sus formas sorprendentes de manejar los tipos de datos en ocasiones. Investiga un poco sobre estos 'gotchas'. Por ejemplo: ¡la sensibilidad a mayúsculas y minúsculas puede ser un problema! Prueba esto en tu consola: `let age = 1; let Age = 2; age == Age` (resuelve `false` -- ¿por qué?). ¿Qué otros gotchas puedes encontrar?

## Cuestionario Posterior a la Clase
[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app)

## Repaso y Autoestudio

Echa un vistazo a [esta lista de ejercicios de JavaScript](https://css-tricks.com/snippets/javascript/) y prueba uno. ¿Qué aprendiste?

## Tarea

[Práctica de Tipos de Datos](assignment.md)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.