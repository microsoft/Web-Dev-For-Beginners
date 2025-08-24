<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-24T13:41:42+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "es"
}
-->
# Mejorar el enrutamiento

## Instrucciones

La declaración de rutas actualmente solo contiene el ID de la plantilla a usar. Pero, al mostrar una nueva página, a veces se necesita un poco más. Mejoremos nuestra implementación de enrutamiento con dos características adicionales:

- Asignar títulos a cada plantilla y actualizar el título de la ventana con este nuevo título cuando cambie la plantilla.
- Agregar una opción para ejecutar algún código después de que cambie la plantilla. Queremos imprimir `'Dashboard is shown'` en la consola del desarrollador cada vez que se muestre la página del panel de control.

## Rúbrica

| Criterios | Sobresaliente                                                                                                                     | Adecuado                                                                                                                                                                                  | Necesita Mejorar                                       |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|           | Las dos características están implementadas y funcionan. El título y la adición de código también funcionan para una nueva ruta añadida en la declaración de `routes`. | Las dos características funcionan, pero el comportamiento está codificado y no es configurable a través de la declaración de `routes`. Agregar una tercera ruta con título y código no funciona o funciona parcialmente. | Falta una de las características o no funciona correctamente. |

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.