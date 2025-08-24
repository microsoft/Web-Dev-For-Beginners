<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-24T13:07:33+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "es"
}
-->
# Creando una extensión de navegador

Crear extensiones de navegador es una forma divertida e interesante de pensar en el rendimiento de tus aplicaciones mientras desarrollas un tipo diferente de recurso web. Este módulo incluye lecciones sobre cómo funcionan los navegadores, cómo implementar una extensión de navegador, cómo construir un formulario, llamar a una API, usar almacenamiento local, y cómo evaluar el rendimiento de tu sitio web y mejorarlo.

Construirás una extensión de navegador que funciona en Edge, Chrome y Firefox. Esta extensión, que es como un mini sitio web diseñado para una tarea muy específica, consulta la [API de CO2 Signal](https://www.co2signal.com) para obtener el uso de electricidad y la intensidad de carbono de una región determinada, y devuelve una lectura sobre la huella de carbono de esa región.

Esta extensión puede ser utilizada de manera puntual por un usuario una vez que se ingresa una clave de API y un código de región en un formulario para determinar el uso local de electricidad y, de esta manera, ofrecer datos que puedan influir en las decisiones de consumo eléctrico del usuario. Por ejemplo, puede ser preferible retrasar el uso de una secadora de ropa (una actividad con alta intensidad de carbono) durante un período de alto consumo eléctrico en tu región.

### Temas

1. [Sobre el navegador](1-about-browsers/README.md)
2. [Formularios y almacenamiento local](2-forms-browsers-local-storage/README.md)
3. [Tareas en segundo plano y rendimiento](3-background-tasks-and-performance/README.md)

### Créditos

![una extensión de navegador verde](../../../5-browser-extension/extension-screenshot.png)

## Créditos

La idea para este disparador de carbono web fue ofrecida por Asim Hussain, líder en Microsoft del equipo de Green Cloud Advocacy y autor de los [Principios Verdes](https://principles.green/). Originalmente fue un [proyecto de sitio web](https://github.com/jlooper/green).

La estructura de la extensión de navegador fue influenciada por la [extensión COVID de Adebola Adeniran](https://github.com/onedebos/covtension).

El concepto detrás del sistema de íconos de 'punto' fue sugerido por la estructura de íconos de la extensión de navegador [Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

Estas lecciones fueron escritas con ♥️ por [Jen Looper](https://www.twitter.com/jenlooper)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.