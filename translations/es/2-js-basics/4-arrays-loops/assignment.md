<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2026-01-06T07:20:50+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "es"
}
-->
# Tarea de Arrays y Bucles

## Instrucciones

Completa los siguientes ejercicios para practicar el trabajo con arrays y bucles. Cada ejercicio se basa en conceptos de la lección y te anima a aplicar diferentes tipos de bucles y métodos de arrays.

### Ejercicio 1: Generador de Patrón de Números
Crea un programa que liste cada tercer número entre 1-20 y lo imprima en la consola.

**Requisitos:**
- Usa un bucle `for` con un incremento personalizado
- Muestra los números en un formato fácil de entender
- Añade comentarios descriptivos explicando tu lógica

**Salida Esperada:**
```
3, 6, 9, 12, 15, 18
```

> **Consejo:** Modifica la expresión de iteración en tu bucle for para saltar números.

### Ejercicio 2: Análisis de Array
Crea un array con al menos 8 números diferentes y escribe funciones para analizar los datos.

**Requisitos:**
- Crea un array llamado `numbers` con al menos 8 valores
- Escribe una función `findMaximum()` que devuelva el número más alto
- Escribe una función `findMinimum()` que devuelva el número más bajo  
- Escribe una función `calculateSum()` que devuelva el total de todos los números
- Prueba cada función y muestra los resultados

**Reto Extra:** Crea una función que encuentre el segundo número más alto del array.

### Ejercicio 3: Procesamiento de Array de Cadenas
Crea un array de tus películas/libros/canciones favoritas y practica diferentes tipos de bucles.

**Requisitos:**
- Crea un array con al menos 5 valores en cadena
- Usa un bucle `for` tradicional para mostrar los elementos con números (1. Nombre del ítem)
- Usa un bucle `for...of` para mostrar los elementos en mayúsculas
- Usa el método `forEach()` para contar y mostrar el total de caracteres

**Ejemplo de Salida:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Ejercicio 4: Filtrado de Datos (Avanzado)
Crea un programa que procese un array de objetos que representan estudiantes.

**Requisitos:**
- Crea un array con al menos 5 objetos estudiante con propiedades: `name`, `age`, `grade`
- Usa bucles para encontrar estudiantes que tengan 18 años o más
- Calcula el promedio de calificaciones de todos los estudiantes
- Crea un nuevo array que contenga sólo estudiantes con calificaciones superiores a 85

**Estructura de Ejemplo:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Añadir más estudiantes...
];
```

## Prueba tu Código

Prueba tus programas:
1. Ejecutando cada ejercicio en la consola de tu navegador
2. Verificando que las salidas coincidan con los resultados esperados
3. Probando con diferentes conjuntos de datos
4. Comprobando que tu código maneje casos límite (arrays vacíos, elementos únicos)

## Directrices para la Entrega

Incluye lo siguiente en tu entrega:
- Código JavaScript bien comentado para cada ejercicio
- Capturas de pantalla o salida de texto mostrando tus programas en ejecución
- Breve explicación del tipo de bucle que elegiste para cada tarea y por qué

## Rúbrica

| Criterios | Sobresaliente (3 puntos) | Adecuado (2 puntos) | Necesita Mejorar (1 punto) |
| -------- | ----------------------- | ------------------- | -------------------------- |
| **Funcionalidad** | Todos los ejercicios completados correctamente con retos adicionales | Todos los ejercicios requeridos funcionan correctamente | Algunos ejercicios incompletos o con errores |
| **Calidad de Código** | Código limpio, bien organizado con nombres descriptivos | El código funciona pero podría estar más limpio | El código es desordenado o difícil de entender |
| **Comentarios** | Comentarios completos explicando lógica y decisiones | Comentarios básicos presentes | Comentarios mínimos o inexistentes |
| **Uso de Bucles** | Demuestra comprensión de diferentes tipos de bucles apropiadamente | Usa bucles correctamente pero con variedad limitada | Uso incorrecto o ineficiente de bucles |
| **Pruebas** | Evidencia de pruebas exhaustivas con múltiples escenarios | Pruebas básicas demostradas | Poca evidencia de pruebas |

## Preguntas de Reflexión

Después de completar los ejercicios, considera:
1. ¿Cuál tipo de bucle te pareció más natural de usar y por qué?
2. ¿Qué desafíos encontraste al trabajar con arrays?
3. ¿Cómo podrían aplicarse estas habilidades en proyectos reales de desarrollo web?
4. ¿Qué harías diferente si tuvieras que optimizar tu código para rendimiento?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No somos responsables por malentendidos o interpretaciones incorrectas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->