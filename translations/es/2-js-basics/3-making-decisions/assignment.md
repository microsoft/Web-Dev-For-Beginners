<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-24T12:14:49+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "es"
}
-->
# Operadores

## Instrucciones

Experimenta con operadores. Aquí tienes una sugerencia para un programa que puedes implementar:

Tienes un conjunto de estudiantes de dos sistemas de calificación diferentes.

### Primer sistema de calificación

Un sistema de calificación está definido con notas del 1 al 5, donde 3 y superiores significan que apruebas el curso.

### Segundo sistema de calificación

El otro sistema de calificación tiene las siguientes notas: `A, A-, B, B-, C, C-`, donde `A` es la mejor nota y `C` es la nota más baja para aprobar.

### La tarea

Dado el siguiente arreglo `allStudents` que representa a todos los estudiantes y sus calificaciones, construye un nuevo arreglo `studentsWhoPass` que contenga a todos los estudiantes que aprueban.

> TIP, utiliza un bucle for, if...else y operadores de comparación:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Rúbrica

| Criterios | Ejemplar                      | Adecuado                      | Necesita Mejoras                |
| --------- | ----------------------------- | ----------------------------- | ------------------------------- |
|           | Se presenta una solución completa | Se presenta una solución parcial | Se presenta una solución con errores |

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.