<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-24T13:47:30+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "es"
}
-->
# Implementar el diálogo "Agregar transacción"

## Instrucciones

Nuestra aplicación bancaria aún carece de una característica importante: la posibilidad de ingresar nuevas transacciones. 
Usando todo lo que has aprendido en las cuatro lecciones anteriores, implementa un diálogo de "Agregar transacción":

- Agrega un botón de "Agregar transacción" en la página del panel de control.
- Crea una nueva página con una plantilla HTML, o utiliza JavaScript para mostrar/ocultar el HTML del diálogo sin salir de la página del panel de control (puedes usar la propiedad [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) para eso, o clases de CSS).
- Asegúrate de manejar [la accesibilidad para teclado y lectores de pantalla](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) en el diálogo.
- Implementa un formulario HTML para recibir los datos de entrada.
- Crea datos JSON a partir de los datos del formulario y envíalos a la API.
- Actualiza la página del panel de control con los nuevos datos.

Consulta las [especificaciones de la API del servidor](../api/README.md) para ver qué API necesitas llamar y cuál es el formato JSON esperado.

Aquí tienes un ejemplo del resultado después de completar la tarea:

![Captura de pantalla que muestra un ejemplo del diálogo "Agregar transacción"](../../../../7-bank-project/4-state-management/images/dialog.png)

## Rúbrica

| Criterios | Ejemplar                                                                                         | Adecuado                                                                                                                | Necesita Mejorar                            |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|           | Agregar una transacción está implementado completamente siguiendo todas las mejores prácticas vistas en las lecciones. | Agregar una transacción está implementado, pero no sigue las mejores prácticas vistas en las lecciones, o funciona solo parcialmente. | Agregar una transacción no funciona en absoluto. |

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.