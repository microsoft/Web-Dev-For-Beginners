<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2026-01-06T07:38:14+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "es"
}
-->
# Adoptar una API

## Resumen

¡Las APIs abren infinitas posibilidades para el desarrollo web creativo! En esta tarea, elegirás una API externa y construirás una extensión de navegador que resuelva un problema real o proporcione funcionalidad valiosa a los usuarios.

## Instrucciones

### Paso 1: Elige tu API
Selecciona una API de esta [lista curada de APIs públicas gratuitas](https://github.com/public-apis/public-apis). Considera estas categorías:

**Opciones populares para principiantes:**
- **Entretenimiento**: [Dog CEO API](https://dog.ceo/dog-api/) para imágenes aleatorias de perros
- **Clima**: [OpenWeatherMap](https://openweathermap.org/api) para datos meteorológicos actuales
- **Frases**: [Quotable API](https://quotable.io/) para citas inspiradoras
- **Noticias**: [NewsAPI](https://newsapi.org/) para titulares actuales
- **Datos curiosos**: [Numbers API](http://numbersapi.com/) para hechos interesantes sobre números

### Paso 2: Planifica tu extensión
Antes de programar, responde estas preguntas de planificación:
- ¿Qué problema resuelve tu extensión?
- ¿Quién es tu usuario objetivo?
- ¿Qué datos guardarás en el almacenamiento local?
- ¿Cómo manejarás fallos de la API o límites de uso?

### Paso 3: Construye tu extensión
Tu extensión debe incluir:

**Características requeridas:**
- Campos de formulario para los parámetros exigidos por la API
- Integración con la API con manejo adecuado de errores
- Almacenamiento local para preferencias de usuario o claves API
- Interfaz limpia y responsiva
- Estados de carga y retroalimentación al usuario

**Requisitos del código:**
- Usar características modernas de JavaScript (ES6+)
- Implementar async/await para llamadas a la API
- Incluir manejo de errores con bloques try/catch
- Añadir comentarios significativos explicando el código
- Seguir un formato de código consistente

### Paso 4: Prueba y mejora
- Prueba tu extensión con diferentes entradas
- Maneja casos límite (sin internet, respuestas inválidas de la API)
- Asegura que tu extensión funcione tras reiniciar el navegador
- Añade mensajes de error amigables para el usuario

## Retos adicionales

Lleva tu extensión al siguiente nivel:
- Añade múltiples endpoints de API para funcionalidad más rica
- Implementa caché de datos para reducir llamadas a la API
- Crea atajos de teclado para acciones comunes
- Añade funciones de exportación/importación de datos
- Implementa opciones de personalización para el usuario

## Requisitos de entrega

1. **Extensión de navegador funcional** que se integre exitosamente con la API elegida
2. **Archivo README** explicando:
   - Qué API elegiste y por qué
   - Cómo instalar y usar tu extensión
   - Claves API o configuraciones necesarias
   - Capturas de pantalla de tu extensión en funcionamiento
3. **Código limpio y comentado** siguiendo prácticas modernas de JavaScript

## Rúbrica

| Criterios | Sobresaliente (90-100%) | Competente (80-89%) | En desarrollo (70-79%) | Inicial (60-69%) |
|----------|---------------------|---------------------|---------------------|--------------------|
| **Integración de API** | Integración impecable con manejo completo de errores y casos límite | Integración exitosa con manejo básico de errores | API funciona pero con manejo limitado de errores | Integración con problemas significativos |
| **Calidad del código** | Código limpio, bien comentado y moderno siguiendo buenas prácticas | Buen estructura de código con comentarios adecuados | Código funcional pero requiere mejor organización | Código pobre con mínimos comentarios |
| **Experiencia de usuario** | Interfaz pulida con excelentes estados de carga y retroalimentación | Buena interfaz con retroalimentación básica | Interfaz básica que funciona adecuadamente | Mala experiencia con interfaz confusa |
| **Almacenamiento local** | Uso sofisticado con validación y gestión de datos | Implementación adecuada para funciones clave | Uso básico del almacenamiento local | Uso mínimo o incorrecto del almacenamiento |
| **Documentación** | README completo con instrucciones y capturas | Documentación buena que cubre la mayoría de requisitos | Documentación básica que falta en detalles | Documentación pobre o inexistente |

## Consejos para comenzar

1. **Empieza simple**: Elige una API que no requiera autenticación compleja
2. **Lee la documentación**: Entiende a fondo los endpoints y respuestas de tu API
3. **Planea tu UI**: Boceta la interfaz de tu extensión antes de programar
4. **Prueba frecuentemente**: Construye de forma incremental y prueba cada función
5. **Maneja errores**: Siempre asume que las llamadas a la API pueden fallar y planifica en consecuencia

## Recursos

- [Documentación para extensiones de navegador](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Guía de Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial de almacenamiento local](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Análisis y manejo de JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

¡Diviértete creando algo útil y creativo! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma original debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional humana. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivados del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->