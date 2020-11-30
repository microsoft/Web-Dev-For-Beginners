# Conceptos básicos de JavaScript: tipos de datos

[![Tipos de datos en JavaScript](https://img.youtube.com/vi/rEHV3fFMfn0/0.jpg)](https://youtube.com/watch?v=rEHV3fFMfn0 "Tipos de datos en JavaScript")

## [Pre-lecture prueba](../.github/pre-lecture-quiz.md)

Esta lección cubre los conceptos básicos de JavaScript, el lenguaje que proporciona interactividad en la web.

¡Comencemos con las variables y los tipos de datos que las pueblan!

## Variables

Las variables almacenan valores que se pueden usar y cambiar a lo largo de su código.

Crear y **declarar** una variable tiene la siguiente sintaxis **[keyword] [name]**. Está compuesto por dos partes:

- **Keyword**. Las palabras clave pueden ser `let` o `var`.

    > Tenga en cuenta que la palabra clave `let` se introdujo en ES6 y le da a su variable un llamado _alcance de bloque_ (block scope). Se recomienda utilizar `let` sobre `var`. Cubriremos los alcances de bloque con más profundidad en partes futuras.
- **El nombre de la variable**, este es un nombre que elige usted mismo.

### Tarea - trabajar con variables

1. **Declare una variable**. Declaremos una variable usando la palabra clave `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` ahora se ha declarado usando la palabra clave `let`. Actualmente no tiene ningún valor.

1. **Asignar un valor**. Almacene un valor en una variable con el operador `=`, seguido del valor esperado.

    ```javascript
    myVariable = 123;
    ```

   > Nota: el uso de `=` en esta lección significa que hacemos uso de un "operador de asignación", que se utiliza para establecer un valor en una variable. No denota igualdad.

    `myVariable` ahora se ha *inicializado* con el valor 123.

1. **Refactor**. Reemplace su código con la siguiente declaración.

    ```javascript
    let myVariable = 123;
    ```

    Lo anterior se denomina _inicialización explícita_ cuando se declara una variable y se le asigna un valor al mismo tiempo.

1. **Cambiar el valor de la variable**. Cambie el valor de la variable de la siguiente manera:


   ```javascript
   myVariable = 321;
   ```

   Una vez que se declara una variable, puede cambiar su valor en cualquier punto de su código con el operador `=` y el nuevo valor.

    ✅ ¡Pruébalo! Puede escribir JavaScript directamente en su navegador. Abra una ventana del navegador y navegue hasta Herramientas de desarrollo. En la consola, encontrará un mensaje; escriba `let myVariable = 123`, presione retorno, luego escriba `myVariable`. ¿Lo que pasa? Tenga en cuenta que aprenderá más sobre estos conceptos en lecciones posteriores.

## Constantes

La declaración e inicialización de una constante sigue los mismos conceptos que una variable, con la excepción de la palabra clave `const`. Las constantes se declaran normalmente con todas las letras mayúsculas.

```javascript
const MY_VARIABLE = 123;
```

CLas constantes son similares a las variables, con dos excepciones:

- **Debe tener un valor**. Las constantes deben inicializarse o se producirá un error al ejecutar el código.
- **La referencia no se puede cambiar**. La referencia de una constante no se puede cambiar una vez inicializada, o se producirá un error al ejecutar el código. Veamos dos ejemplos:
    - **Valor simple**. NO se permite lo siguiente:

   
      ```javascript
      const PI = 3;
      PI = 4; // no permitido
      ```
 
   - **La referencia de objeto está protegida**. NO se permite lo siguiente.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // o permitido
      ```

    - **El valor del objeto no está protegido**. Se permite lo siguiente:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // permitido
      ```

      Arriba está cambiando el valor del objeto pero no la referencia en sí, lo que lo permite.

   > Tenga en cuenta que una `const` significa que la referencia está protegida contra la reasignación. Sin embargo, el valor no es _immutable_ y puede cambiar, especialmente si es una construcción compleja como un objeto.

## Tipos de datos

Las variables pueden almacenar muchos tipos diferentes de valores, como números y texto. Estos diversos tipos de valores se conocen como **tipo de datos**. Los tipos de datos son una parte importante del desarrollo de software porque ayudan a los desarrolladores a tomar decisiones sobre cómo se debe escribir el código y cómo se debe ejecutar el software. Además, algunos tipos de datos tienen características únicas que ayudan a transformar o extraer información adicional en un valor.

✅ Los tipos de datos también se conocen como primitivas de datos de JavaScript, ya que son los tipos de datos de nivel más bajo que proporciona el lenguaje. Hay 6 tipos de datos primitivos: cadena, número, bigint, booleano, indefinido y símbolo. Tómese un minuto para visualizar lo que podría representar cada una de estas primitivas. ¿Qué es una `cebra`? ¿Qué tal `0`? ¿`true`?

### Números

En la sección anterior, el valor de "myVariable" era un tipo de datos numérico.

`let myVariable = 123;`

Las variables pueden almacenar todo tipo de números, incluidos decimales o números negativos. Los números también se pueden usar con operadores aritméticos, que se tratan en la [siguiente sección](#operadores).

### Operadores aritméticos

Hay varios tipos de operadores que se pueden utilizar al realizar funciones aritméticas, y algunos se enumeran aquí:

| Símbolo | Descripción                                                              | Ejemplo                                |
| ------- | ------------------------------------------------------------------------ | -------------------------------------- |
| `+`     | **Suma**: Calcula la suma de dos números                                 | `1 + 2 //la respuesta esperada es 3`   |
| `-`     | **Resta**: Calcula la diferencia de dos números                          | `1 - 2 //la respuesta esperada es -1`  |
| `*`     | **Multiplicación**: Calcula el producto de dos números                   | `1 * 2 //la respuesta esperada es 2`   |
| `/`     | **División**: Calcula el cociente de dos números                         | `1 / 2 //la respuesta esperada es 0.5` |
| `%`     | **Resto**: Calcula el resto a partir de la división de dos números       | `1 % 2 //la respuesta esperada es 1`   |

✅ ¡Pruébalo! Pruebe una operación aritmética en la consola de su navegador. ¿Te sorprenden los resultados?

### Cadenas

Las cadenas son conjuntos de caracteres que residen entre comillas simples o dobles.

- `'Esto es una cadena'`
- `"Esto también es una cadena"`
- `let myString = 'Este es un valor de cadena almacenado en una variable';`

Recuerde utilizar comillas al escribir una cadena, de lo contrario JavaScript asumirá que es un nombre de variable.

### Formateo de cadenas

Las cadenas son textuales y requerirán formato de vez en cuando.

Para **concatenar** dos o más cadenas, o unirlas, use el operador `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ ¿Por qué `1 + 1 = 2` en JavaScript, pero `'1' + '1' = 11?` Piense en ello. ¿Qué pasa con `'1' + 1`?

** Los literales de plantilla ** son otra forma de formatear cadenas, excepto que en lugar de comillas, se usa la comilla invertida. Todo lo que no sea texto sin formato debe colocarse dentro de los marcadores de posición `${ }`. Esto incluye cualquier variable que pueda ser cadenas.


```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Puede lograr sus objetivos de formato con cualquier método, pero los literales de plantilla respetarán los espacios y saltos de línea.

✅ ¿Cuándo usaría una plantilla literal frente a una cadena simple?

### Booleanos

Los booleanos pueden tener solo dos valores: `true` o `false`. Los valores booleanos pueden ayudar a tomar decisiones sobre qué líneas de código deben ejecutarse cuando se cumplen ciertas condiciones. En muchos casos, [operadores](#operadores) ayudan a establecer el valor de un booleano y, a menudo, notará y escribirá variables que se inicializan o que sus valores se actualizan con un operador.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Una variable se puede considerar 'verdadera' si se evalúa como un valor booleano 'verdadero'. Curiosamente, en JavaScript, [todos los valores son verdaderos a menos que se definan como falsos](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

🚀 Desafío: JavaScript es conocido por sus sorprendentes formas de manejar tipos de datos en ocasiones. Investiga un poco sobre estos "errores". Por ejemplo: ¡la sensibilidad a mayúsculas y minúsculas puede morder! Pruebe esto en su consola: `let age = 1; let Age = 2; age == Age` (resuelve `false` - ¿por qué?). ¿Qué otras trampas puedes encontrar?

## [Post-lecture prueba](../.github/post-lecture-quiz.md)

## Revisión y autoestudio

Eche un vistazo a [esta lista de ejercicios de JavaScript](https://css-tricks.com/snippets/javascript/) y pruebe uno. ¿Qué aprendiste?

**Tarea**: [Práctica de tipos de datos](assignment.es.md)
