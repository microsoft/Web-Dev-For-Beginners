# Tomando Decisiones: Procesador de Calificaciones Estudiantiles

## Objetivos de Aprendizaje

En esta tarea, practicarás los conceptos de toma de decisiones de esta lección construyendo un programa que procesa las calificaciones de los estudiantes de diferentes sistemas de calificación. Usarás sentencias `if...else`, operadores de comparación y operadores lógicos para determinar qué estudiantes aprueban sus cursos.

## El Desafío

Trabajas para una escuela que recientemente se fusionó con otra institución. Ahora necesitas procesar las calificaciones de los estudiantes de dos sistemas de calificación completamente diferentes y determinar qué estudiantes están aprobando. ¡Esta es una oportunidad perfecta para practicar la lógica condicional!

### Entendiendo los Sistemas de Calificación

#### Primer Sistema de Calificación (Numérico)
- Las calificaciones se dan como números del 1 al 5
- **Calificación aprobatoria**: 3 y mayores (3, 4 o 5)
- **Calificación de reprobación**: Menor a 3 (1 o 2)

#### Segundo Sistema de Calificación (Letras)
- Las calificaciones usan letras: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Calificaciones aprobatorias**: `A`, `A-`, `B`, `B-`, `C`, `C-` (todas las letras listadas son aprobatorias)
- **Nota**: Este sistema no incluye calificaciones de reprobación como `D` o `F`

### Tu Tarea

Dado el siguiente arreglo `allStudents` que representa a todos los estudiantes y sus calificaciones, construye un nuevo arreglo `studentsWhoPass` que contenga a todos los estudiantes que aprueban según sus respectivos sistemas de calificación.

```javascript
let allStudents = [
  'A',    // Calificación con letra - aprobado
  'B-',   // Calificación con letra - aprobado
  1,      // Calificación numérica - reprobado
  4,      // Calificación numérica - aprobado
  5,      // Calificación numérica - aprobado
  2       // Calificación numérica - reprobado
];

let studentsWhoPass = [];
```

### Enfoque Paso a Paso

1. **Configura un ciclo** para recorrer cada calificación en el arreglo `allStudents`
2. **Verifica el tipo de calificación** (¿es un número o una cadena?)
3. **Aplica las reglas apropiadas del sistema de calificación**:
   - Para números: verifica si la calificación es >= 3
   - Para cadenas: verifica si es una de las calificaciones válidas que aprueban
4. **Agrega las calificaciones aprobatorias** al arreglo `studentsWhoPass`

### Técnicas de Código Útiles

Usa estos conceptos de JavaScript de la lección:

- **Operador typeof**: `typeof grade === 'number'` para verificar si es una calificación numérica
- **Operadores de comparación**: `>=` para comparar calificaciones numéricas
- **Operadores lógicos**: `||` para verificar múltiples condiciones de calificaciones con letras
- **Sentencias if...else**: para manejar diferentes sistemas de calificación
- **Métodos de arreglos**: `.push()` para añadir calificaciones aprobatorias a tu nuevo arreglo

### Salida Esperada

Cuando ejecutes tu programa, `studentsWhoPass` debe contener: `['A', 'B-', 4, 5]`

**Por qué estas calificaciones aprueban:**
- `'A'` y `'B-'` son calificaciones validas con letras (todas las calificaciones en este sistema son aprobatorias)
- `4` y `5` son calificaciones numéricas >= 3
- `1` y `2` reprueban porque son calificaciones numéricas < 3

## Prueba Tu Solución

Prueba tu código con diferentes escenarios:

```javascript
// Prueba con diferentes combinaciones de notas
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Tu solución debería funcionar con cualquier combinación de notas válidas
```

## Desafíos Extras

Una vez que completes la tarea básica, prueba estas extensiones:

1. **Agrega validación**: Verifica calificaciones inválidas (como números negativos o letras inválidas)
2. **Cuenta estadísticas**: Calcula cuántos estudiantes aprueban vs. reprueban
3. **Conversión de calificaciones**: Convierte todas las calificaciones a un sistema numérico único (A=5, B=4, C=3, etc.)

## Rúbrica

| Criterio | Sobresaliente (4) | Competente (3) | En desarrollo (2) | Inicial (1) |
|----------|-------------------|----------------|-------------------|-------------|
| **Funcionalidad** | El programa identifica correctamente todas las calificaciones aprobatorias de ambos sistemas | El programa funciona con problemas menores o casos límite | El programa funciona parcialmente pero tiene errores lógicos | El programa tiene errores significativos o no funciona |
| **Estructura del Código** | Código limpio, bien organizado con lógica if...else adecuada | Buena estructura con sentencias condicionales apropiadas | Estructura aceptable con algunos problemas organizativos | Mala estructura, lógica difícil de seguir |
| **Uso de Conceptos** | Usa efectivamente operadores de comparación, operadores lógicos y sentencias condicionales | Buen uso de los conceptos de la lección con pequeñas deficiencias | Algún uso de los conceptos pero faltan elementos clave | Uso limitado de los conceptos de la lección |
| **Resolución de Problemas** | Muestra comprensión clara del problema y enfoque elegante para la solución | Buen enfoque para la resolución con lógica sólida | Resolución adecuada con algo de confusión | Enfoque poco claro, no demuestra comprensión |

## Pautas para la Entrega

1. **Prueba tu código** a fondo con los ejemplos proporcionados
2. **Agrega comentarios** explicando tu lógica, especialmente para las sentencias condicionales
3. **Verifica que la salida** coincida con los resultados esperados: `['A', 'B-', 4, 5]`
4. **Considera casos límite** como arreglos vacíos o tipos de datos inesperados

> 💡 **Consejo Profesional**: ¡Comienza simple! Primero haz que funcione la funcionalidad básica, luego agrega características más sofisticadas. Recuerda, el objetivo es practicar la lógica de toma de decisiones con las herramientas que aprendiste en esta lección.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivados del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->