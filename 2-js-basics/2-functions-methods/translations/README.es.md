# Conceptos básicos de JavaScript: métodos y funciones

[![Métodos y funciones](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Métodos y funciones")

## [Pre-lecture prueba](.github/pre-lecture-quiz.md)

Cuando necesite su código para realizar una tarea, utilizará un método o una función. Analicemos las diferencias.

## Funciones

Una función es un bloque de código destinado a realizar una tarea. Usted crea una función usando la palabra clave `function`, un nombre, un conjunto de parámetros y la definición de la función también conocida como funciones _body_. La sintaxis de una función se parece a la siguiente:

```javascript
function name(param, param2, param3) { // definición de función
 // definición de función/body
}
```

## Métodos

TODO

### Parámetro

Los parámetros se enumeran en la parte de definición entre paréntesis y están separados por comas así:

```javascript
(param, param2, param3)
```

### Parámetro

Cuerpo de función

Aquí define qué tarea debe realizar la función. Una función puede devolver algo o no. Si una función devuelve algo, entonces se usa la palabra clave `return`. La palabra clave `return` espera un valor o referencia de lo que se devuelve así:


```javascript
return myVariable;
```  

Un ejemplo más completo puede verse así:

```javascript
function add(firstValue, secondValue) {
  let sum = firstValue + secondValue;
  return sum;
}
```

En el código anterior, se devuelve la variable `sum`.

### Invocación

Cuando _invocas_ una función, la llamas con 0...N conjuntos de argumentos. Los valores de los argumentos se vinculan a los parámetros correspondientes a su posición. El método `add()` introducido se puede invocar de la siguiente manera:


```javascript
let result = add(1, 3);
console.log(result); // imprime 4
```

Los argumentos `1` y `3` están vinculados a los parámetros `firstValue` y `secondValue` debido al orden en el que se definen los parámetros.

JavaScript es bastante flexible cuando se trata de invocaciones. No está obligado a proporcionar argumentos para todos los parámetros, el código se ejecutará de todos modos. Sin embargo, dependiendo de lo que le pase, es posible que el código no se comporte como se esperaba.

> Desafío, intente llamar al método `add()` así `add(1)` y vea qué sucede

### Valores predeterminados

También existe el concepto de _ valores predeterminados_ en los parámetros. Esto significa que si no se pasa un argumento a un parámetro durante la invocación, el parámetro asumirá el valor predeterminado. Considere el siguiente código usando un valor predeterminado:


```javascript
function add5(firstValue, secondValue = 5) {
  return firstValue + secondValue;
}
```

La invocación de la función anterior podría verse así:

```javascript
add5 (4) // devuelve 9
add5 (4,2) // devuelve 6
```

Cualquier parámetro con valores predeterminados debe estar al final de la lista de parámetros. La razón es que JavaScript intenta hacer coincidir argumentos con parámetros y los parámetros con valores predeterminados pueden omitirse en la invocación.

🚀 Desafío:


## [Post-lecture prueba](.github/post-lecture-quiz.md)

## Revisión y autoestudio

TODO

**Tarea**: [Práctica de tipos de datos](assignment.md)

