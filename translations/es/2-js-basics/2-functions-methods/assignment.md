# Diversión con Funciones

## Instrucciones

En esta tarea, practicarás crear diferentes tipos de funciones para reforzar los conceptos que has aprendido sobre funciones en JavaScript, parámetros, valores predeterminados y sentencias de retorno.

Crea un archivo JavaScript llamado `functions-practice.js` e implementa las siguientes funciones:

### Parte 1: Funciones Básicas
1. **Crea una función llamada `sayHello`** que no tome ningún parámetro y simplemente imprima "¡Hola!" en la consola.

2. **Crea una función llamada `introduceYourself`** que tome un parámetro `name` y escriba un mensaje como "Hola, mi nombre es [name]" en la consola.

### Parte 2: Funciones con Parámetros Predeterminados
3. **Crea una función llamada `greetPerson`** que tome dos parámetros: `name` (requerido) y `greeting` (opcional, con valor predeterminado "Hola"). La función debe imprimir un mensaje como "[greeting], [name]!" en la consola.

### Parte 3: Funciones que Retornan Valores
4. **Crea una función llamada `addNumbers`** que tome dos parámetros (`num1` y `num2`) y retorne su suma.

5. **Crea una función llamada `createFullName`** que tome los parámetros `firstName` y `lastName` y retorne el nombre completo como una sola cadena.

### Parte 4: Combínalo Todo
6. **Crea una función llamada `calculateTip`** que tome dos parámetros: `billAmount` (requerido) y `tipPercentage` (opcional, con valor predeterminado 15). La función debe calcular y devolver el monto de la propina.

### Parte 5: Prueba Tus Funciones
Agrega llamadas a las funciones para probar cada una de tus funciones y muestra los resultados usando `console.log()`.

**Ejemplo de llamadas de prueba:**
```javascript
// Prueba tus funciones aquí
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rúbrica

| Criterios | Sobresaliente | Adecuado | Necesita Mejorar |
| -------- | ------------- | -------- | ---------------- |
| **Creación de Funciones** | Las 6 funciones están implementadas correctamente con sintaxis y convenciones de nombres adecuadas | 4-5 funciones están correctamente implementadas con problemas menores de sintaxis | 3 o menos funciones implementadas o errores graves de sintaxis |
| **Parámetros y Valores Predeterminados** | Usa correctamente parámetros requeridos, opcionales y valores predeterminados según lo especificado | Usa parámetros correctamente pero puede tener problemas con valores predeterminados | Implementación incorrecta o ausente de parámetros |
| **Valores de Retorno** | Las funciones que deben retornar valores lo hacen correctamente, y las que no solo ejecutan acciones | La mayoría de los valores de retorno son correctos con problemas menores | Problemas significativos con las sentencias return |
| **Calidad del Código** | Código limpio, bien organizado con nombres de variables significativos y sangría correcta | El código funciona pero podría ser más limpio o mejor organizado | Código difícil de leer o mal estructurado |
| **Pruebas** | Todas las funciones son probadas con llamadas adecuadas y los resultados se muestran claramente | La mayoría de las funciones están suficientemente probadas | Pruebas limitadas o incorrectas de las funciones |

## Desafíos Extra (Opcional)

Si quieres desafiarte aún más:

1. **Crea una versión con función flecha** de una de tus funciones
2. **Crea una función que acepte otra función como parámetro** (como los ejemplos de `setTimeout` de la lección)
3. **Agrega validación de entrada** para asegurar que tus funciones manejen entradas inválidas con gracia

---

> 💡 **Consejo**: ¡Recuerda abrir la consola de desarrollador de tu navegador (F12) para ver la salida de tus sentencias `console.log()`!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos responsabilizamos por malentendidos o interpretaciones erróneas derivados del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->