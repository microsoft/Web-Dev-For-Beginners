<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-06T07:47:50+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "es"
}
-->
# Mejorar el Enrutamiento

## Instrucciones

Ahora que has construido un sistema básico de enrutamiento, es hora de mejorarlo con características profesionales que mejoren la experiencia del usuario y proporcionen mejores herramientas para desarrolladores. Las aplicaciones del mundo real necesitan más que solo cambiar plantillas: requieren títulos de página dinámicos, ganchos de ciclo de vida y arquitecturas extensibles.

En esta tarea, ampliarás tu implementación de enrutamiento con dos características esenciales que comúnmente se encuentran en aplicaciones web en producción. Estas mejoras harán que tu aplicación bancaria se sienta más pulida y proporcionarán una base para funcionalidades futuras.

La declaración de rutas contiene actualmente solo el ID de la plantilla a usar. Pero al mostrar una nueva página, a veces se necesita un poco más. Vamos a mejorar nuestra implementación de enrutamiento con dos características adicionales:

### Característica 1: Títulos de Página Dinámicos
**Objetivo:** Dar títulos a cada plantilla y actualizar el título de la ventana con este nuevo título cuando la plantilla cambie.

**Por qué es importante:**
- **Mejora** la experiencia del usuario mostrando títulos descriptivos en la pestaña del navegador  
- **Realza** la accesibilidad para lectores de pantalla y tecnologías asistivas  
- **Proporciona** mejor contexto para marcadores y el historial del navegador  
- **Sigue** las mejores prácticas profesionales de desarrollo web

**Enfoque de implementación:**
- **Extender** el objeto de rutas para incluir información de título para cada ruta  
- **Modificar** la función `updateRoute()` para actualizar dinámicamente `document.title`  
- **Probar** que los títulos cambien correctamente al navegar entre pantallas

### Característica 2: Ganchos de Ciclo de Vida de Rutas  
**Objetivo:** Añadir una opción para ejecutar código después de que la plantilla cambie. Queremos imprimir `'Dashboard is shown'` en la consola del desarrollador cada vez que se muestre la página del tablero.

**Por qué es importante:**
- **Permite** la ejecución de lógica personalizada cuando se cargan rutas específicas  
- **Proporciona** ganchos para analítica, registro o código de inicialización  
- **Crea** una base para comportamientos de rutas más complejos  
- **Demuestra** el patrón observador en desarrollo web

**Enfoque de implementación:**
- **Agregar** una propiedad opcional de función de callback a las configuraciones de rutas  
- **Ejecutar** la función callback (si está presente) después de que se complete el renderizado de la plantilla  
- **Asegurar** que la característica funcione para cualquier ruta con un callback definido  
- **Probar** que el mensaje en la consola aparezca al visitar el dashboard

## Rúbrica

| Criterios | Ejemplar                                                                                                                            | Adecuado                                                                                                                                                                                   | Necesita Mejora                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|           | Las dos características están implementadas y funcionando. El título y la adición de código también funcionan para una nueva ruta añadida en la declaración `routes`. | Las dos características funcionan, pero el comportamiento está codificado y no es configurable mediante la declaración `routes`. Añadir una tercera ruta con título y código no funciona o funciona parcialmente. | Falta una de las características o no funciona correctamente. |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->