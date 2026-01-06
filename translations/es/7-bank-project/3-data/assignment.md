<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-06T07:50:49+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "es"
}
-->
# Refactorización y Documentación de Código - Tarea

## Objetivos de Aprendizaje

Al completar esta tarea, practicarás habilidades esenciales de desarrollo de software que los desarrolladores profesionales usan diariamente. Aprenderás a organizar el código para mantenerlo, reducir la duplicación mediante abstracción y documentar tu trabajo para futuros desarrolladores (incluyéndote a ti mismo).

El código limpio y bien documentado es crucial para proyectos reales de desarrollo web donde múltiples desarrolladores colaboran y las bases de código evolucionan con el tiempo.

## Resumen de la Tarea

El archivo `app.js` de tu aplicación bancaria ha crecido significativamente con funcionalidades de inicio de sesión, registro y panel de control. Es hora de refactorizar este código usando prácticas profesionales de desarrollo para mejorar la legibilidad, mantenibilidad y reducir la duplicación.

## Instrucciones

Transforma tu código actual en `app.js` implementando estas tres técnicas centrales de refactorización:

### 1. Extraer Constantes de Configuración

**Tarea**: Crea una sección de configuración en la parte superior de tu archivo con constantes reutilizables.

**Guía de implementación:**
- Extrae la URL base de la API del servidor (actualmente codificada en varios lugares)
- Crea constantes para mensajes de error que aparecen en múltiples funciones
- Considera extraer rutas y IDs de elementos que se usan repetidamente

**Estructura de ejemplo:**
```javascript
// Constantes de configuración
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Crear una Función Unificada de Solicitud

**Tarea**: Construye una función reutilizable `sendRequest()` que elimine código duplicado entre `createAccount()` y `getAccount()`.

**Requisitos:**
- Manejar solicitudes tanto GET como POST
- Incluir un manejo adecuado de errores
- Soportar diferentes endpoints URL
- Aceptar datos opcionales en el cuerpo de la solicitud

**Guía para la firma de función:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Tu implementación aquí
}
```

### 3. Añadir Documentación Profesional al Código

**Tarea**: Documenta tu código con comentarios claros y útiles que expliquen el "por qué" detrás de tu lógica.

**Estándares de documentación:**
- Añade documentación a funciones explicando propósito, parámetros y valores de retorno
- Incluye comentarios en línea para lógica compleja o reglas de negocio
- Agrupa funciones relacionadas con encabezados de sección
- Explica patrones de código poco evidentes o soluciones específicas para navegadores

**Estilo de documentación de ejemplo:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevenir el envío predeterminado del formulario para manejarlo con JavaScript
  event.preventDefault();
  
  // Tu implementación...
}
```

## Criterios de Éxito

Tu código refactorizado debe demostrar estas prácticas profesionales de desarrollo:

### Implementación Ejemplar
- ✅ **Constantes**: Todas las cadenas "mágicas" y URLs están extraídas en constantes claramente nombradas
- ✅ **Principio DRY**: La lógica común de solicitudes está consolidada en una función reutilizable `sendRequest()`
- ✅ **Documentación**: Las funciones tienen comentarios JSDoc claros que explican propósito y parámetros
- ✅ **Organización**: El código está agrupado lógicamente con encabezados de sección y formato consistente
- ✅ **Manejo de Errores**: Mejor manejo de errores usando la nueva función de solicitud

### Implementación Adecuada
- ✅ **Constantes**: La mayoría de valores repetidos están extraídos, con algunos valores codificados aún presentes
- ✅ **Factorización**: Función básica `sendRequest()` creada pero puede no manejar todos los casos extremos
- ✅ **Comentarios**: Funciones clave están documentadas, aunque algunas explicaciones podrían ser más completas
- ✅ **Legibilidad**: Código generalmente bien organizado con algunas áreas para mejorar

### Necesita Mejoras
- ❌ **Constantes**: Muchas cadenas "mágicas" y URLs permanecen codificadas en varias partes del archivo
- ❌ **Duplicación**: Hay duplicación significativa de código entre funciones similares
- ❌ **Documentación**: Faltan comentarios o son inadecuados y no explican el propósito del código
- ❌ **Organización**: El código carece de estructura clara y agrupación lógica

## Probar tu Código Refactorizado

Después de refactorizar, asegúrate de que tu aplicación bancaria funcione correctamente:

1. **Prueba todos los flujos de usuario**: Registro, inicio de sesión, muestra del panel y manejo de errores
2. **Verifica las llamadas a la API**: Confirma que la función `sendRequest()` funciona tanto para creación como recuperación de cuentas
3. **Revisa escenarios de error**: Prueba con credenciales inválidas y errores de red
4. **Revisa la consola**: Asegúrate de que no se hayan introducido nuevos errores durante la refactorización

## Directrices de Entrega

Envía tu archivo refactorizado `app.js` con:
- Encabezados claros que organicen las diferentes funcionalidades
- Formato de código e indentación consistentes
- Documentación JSDoc completa para todas las funciones
- Un breve comentario en la parte superior que explique tu enfoque de refactorización

**Desafío Bonus**: Crea un archivo simple de documentación de código (`CODE_STRUCTURE.md`) que explique la arquitectura de tu aplicación y cómo funcionan juntas las diferentes funciones.

## Conexión con el Mundo Real

Esta tarea refleja el tipo de mantenimiento de código que los desarrolladores profesionales realizan regularmente. En entornos industriales:
- **Revisiones de código** evalúan legibilidad y mantenibilidad, como esta tarea
- **Deuda técnica** se acumula cuando el código no es refactorizado ni documentado regularmente
- **Colaboración en equipo** depende de un código claro y bien documentado que los nuevos miembros puedan entender
- **Corrección de errores** es mucho más sencilla en bases de código bien organizadas y con abstracciones adecuadas

Las habilidades que estás practicando aquí — extraer constantes, eliminar duplicación y escribir documentación clara — son fundamentales para el desarrollo profesional de software.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento ha sido traducido mediante el servicio de traducción AI [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la exactitud, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional realizada por humanos. No nos hacemos responsables por malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->