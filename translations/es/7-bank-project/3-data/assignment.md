<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-24T13:37:09+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "es"
}
-->
# Refactoriza y comenta tu código

## Instrucciones

A medida que tu base de código crece, es importante refactorizar tu código con frecuencia para mantenerlo legible y fácil de mantener con el tiempo. Agrega comentarios y refactoriza tu `app.js` para mejorar la calidad del código:

- Extrae constantes, como la URL base de la API del servidor
- Factoriza código similar: por ejemplo, puedes crear una función `sendRequest()` para agrupar el código utilizado tanto en `createAccount()` como en `getAccount()`
- Reorganiza el código para que sea más fácil de leer y agrega comentarios

## Rúbrica

| Criterios | Ejemplar                                                                                                                                                     | Adecuado                                                                                         | Necesita Mejorar                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|           | El código está comentado, bien organizado en diferentes secciones y es fácil de leer. Las constantes están extraídas y se ha creado una función `sendRequest()` factorizada. | El código está limpio pero aún puede mejorarse con más comentarios, extracción de constantes o factorización. | El código está desordenado, no tiene comentarios, no se han extraído constantes y no está factorizado. |

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.