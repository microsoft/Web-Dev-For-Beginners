<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-24T12:15:52+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "es"
}
-->
# Conceptos básicos de JavaScript: Métodos y Funciones

![Conceptos básicos de JavaScript - Funciones](../../../../sketchnotes/webdev101-js-functions.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario previo a la clase
[Cuestionario previo a la clase](https://ff-quizzes.netlify.app/web/quiz/9)

Cuando pensamos en escribir código, siempre queremos asegurarnos de que sea legible. Aunque suene contradictorio, el código se lee muchas más veces de lo que se escribe. Una herramienta clave en el arsenal de un desarrollador para garantizar un código mantenible es la **función**.

[![Métodos y Funciones](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Métodos y Funciones")

> 🎥 Haz clic en la imagen de arriba para ver un video sobre métodos y funciones.

> Puedes tomar esta lección en [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funciones

En esencia, una función es un bloque de código que podemos ejecutar bajo demanda. Esto es perfecto para escenarios en los que necesitamos realizar la misma tarea varias veces; en lugar de duplicar la lógica en múltiples ubicaciones (lo que dificultaría su actualización en el futuro), podemos centralizarla en un solo lugar y llamarla cuando necesitemos realizar la operación; incluso puedes llamar funciones desde otras funciones.

Igual de importante es la capacidad de nombrar una función. Aunque pueda parecer trivial, el nombre proporciona una forma rápida de documentar una sección de código. Puedes pensar en esto como una etiqueta en un botón. Si hago clic en un botón que dice "Cancelar temporizador", sé que detendrá el reloj.

## Crear y llamar a una función

La sintaxis de una función se ve de la siguiente manera:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Si quisiera crear una función para mostrar un saludo, podría verse así:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Siempre que queramos llamar (o invocar) nuestra función, usamos el nombre de la función seguido de `()`. Vale la pena señalar que nuestra función puede definirse antes o después de decidir llamarla; el compilador de JavaScript la encontrará por ti.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Existe un tipo especial de función conocida como **método**, ¡que ya has estado usando! De hecho, lo vimos en nuestra demostración anterior cuando usamos `console.log`. Lo que diferencia un método de una función es que un método está adjunto a un objeto (`console` en nuestro ejemplo), mientras que una función es independiente. Escucharás a muchos desarrolladores usar estos términos indistintamente.

### Mejores prácticas para funciones

Hay algunas mejores prácticas que debes tener en cuenta al crear funciones:

- Como siempre, usa nombres descriptivos para saber qué hará la función.
- Usa **camelCasing** para combinar palabras.
- Mantén tus funciones enfocadas en una tarea específica.

## Pasar información a una función

Para hacer que una función sea más reutilizable, a menudo querrás pasarle información. Si consideramos nuestro ejemplo de `displayGreeting` anterior, solo mostrará **Hello, world!**. No es la función más útil que uno podría crear. Si queremos hacerla un poco más flexible, como permitir que alguien especifique el nombre de la persona a saludar, podemos agregar un **parámetro**. Un parámetro (a veces también llamado **argumento**) es información adicional enviada a una función.

Los parámetros se enumeran en la parte de definición dentro de paréntesis y están separados por comas, como se muestra a continuación:

```javascript
function name(param, param2, param3) {

}
```

Podemos actualizar nuestro `displayGreeting` para aceptar un nombre y mostrarlo.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Cuando queramos llamar a nuestra función y pasarle el parámetro, lo especificamos en los paréntesis.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valores predeterminados

Podemos hacer que nuestra función sea aún más flexible agregando más parámetros. Pero, ¿qué pasa si no queremos que se especifique cada valor? Siguiendo con nuestro ejemplo de saludo, podríamos dejar el nombre como obligatorio (necesitamos saber a quién estamos saludando), pero queremos permitir que el saludo en sí se personalice según se desee. Si alguien no quiere personalizarlo, proporcionamos un valor predeterminado en su lugar. Para proporcionar un valor predeterminado a un parámetro, lo configuramos de la misma manera que configuramos un valor para una variable: `parameterName = 'defaultValue'`. Para ver un ejemplo completo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Cuando llamamos a la función, podemos decidir si queremos establecer un valor para `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Valores de retorno

Hasta ahora, la función que hemos creado siempre se mostrará en la [consola](https://developer.mozilla.org/docs/Web/API/console). A veces esto puede ser exactamente lo que buscamos, especialmente cuando creamos funciones que llamarán a otros servicios. Pero, ¿qué pasa si quiero crear una función auxiliar para realizar un cálculo y proporcionar el valor de vuelta para que pueda usarlo en otro lugar?

Podemos hacer esto utilizando un **valor de retorno**. Un valor de retorno es devuelto por la función y puede almacenarse en una variable de la misma manera que podríamos almacenar un valor literal como una cadena o un número.

Si una función devuelve algo, entonces se utiliza la palabra clave `return`. La palabra clave `return` espera un valor o referencia de lo que se está devolviendo, como se muestra a continuación:

```javascript
return myVariable;
```  

Podríamos crear una función para crear un mensaje de saludo y devolver el valor al que lo llama.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Cuando llamemos a esta función, almacenaremos el valor en una variable. Esto es muy similar a cómo estableceríamos una variable con un valor estático (como `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funciones como parámetros para funciones

A medida que avances en tu carrera de programación, te encontrarás con funciones que aceptan funciones como parámetros. Este truco ingenioso se usa comúnmente cuando no sabemos cuándo ocurrirá o se completará algo, pero sabemos que necesitamos realizar una operación en respuesta.

Como ejemplo, considera [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), que inicia un temporizador y ejecutará código cuando se complete. Necesitamos decirle qué código queremos ejecutar. ¡Suena como un trabajo perfecto para una función!

Si ejecutas el código a continuación, después de 3 segundos verás el mensaje **Han pasado 3 segundos**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Funciones anónimas

Echemos otro vistazo a lo que hemos construido. Estamos creando una función con un nombre que se usará una sola vez. A medida que nuestra aplicación se vuelve más compleja, podemos vernos creando muchas funciones que solo se llamarán una vez. Esto no es ideal. Como resulta, ¡no siempre necesitamos proporcionar un nombre!

Cuando pasamos una función como parámetro, podemos omitir crear una de antemano y, en su lugar, construirla como parte del parámetro. Usamos la misma palabra clave `function`, pero en su lugar la construimos como un parámetro.

Reescribamos el código anterior para usar una función anónima:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Si ejecutas nuestro nuevo código, notarás que obtenemos los mismos resultados. Hemos creado una función, ¡pero no tuvimos que darle un nombre!

### Funciones de flecha

Un atajo común en muchos lenguajes de programación (incluido JavaScript) es la capacidad de usar lo que se llama una **función de flecha** o **función de flecha gorda**. Utiliza un indicador especial `=>`, que parece una flecha, ¡de ahí el nombre! Al usar `=>`, podemos omitir la palabra clave `function`.

Reescribamos nuestro código una vez más para usar una función de flecha:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Cuándo usar cada estrategia

Ahora has visto que tenemos tres formas de pasar una función como parámetro y podrías preguntarte cuándo usar cada una. Si sabes que usarás la función más de una vez, créala de forma normal. Si la usarás solo en una ubicación, generalmente es mejor usar una función anónima. Si usarás una función de flecha o la sintaxis más tradicional de `function` depende de ti, pero notarás que la mayoría de los desarrolladores modernos prefieren `=>`.

---

## 🚀 Desafío

¿Puedes articular en una oración la diferencia entre funciones y métodos? ¡Inténtalo!

## Cuestionario posterior a la clase
[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/10)

## Repaso y autoestudio

Vale la pena [leer un poco más sobre las funciones de flecha](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), ya que se usan cada vez más en bases de código. Practica escribiendo una función y luego reescribiéndola con esta sintaxis.

## Tarea

[Diviértete con las funciones](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.