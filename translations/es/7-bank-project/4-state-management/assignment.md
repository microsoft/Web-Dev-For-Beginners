<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2026-01-06T07:53:37+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "es"
}
-->
# Implementar el diálogo "Agregar Transacción"

## Descripción general

Tu aplicación bancaria ahora tiene una gestión de estado sólida y persistencia de datos, pero falta una característica crucial que las aplicaciones bancarias reales necesitan: la capacidad de que los usuarios agreguen sus propias transacciones. En esta tarea, implementarás un diálogo completo de "Agregar Transacción" que se integre perfectamente con tu sistema de gestión de estado existente.

Esta tarea reúne todo lo que has aprendido en las cuatro lecciones de banca: plantillas HTML, manejo de formularios, integración con API y gestión de estado.

## Objetivos de aprendizaje

Al completar esta tarea, podrás:
- **Crear** una interfaz de diálogo fácil de usar para la entrada de datos
- **Implementar** un diseño de formulario accesible con soporte para teclado y lectores de pantalla
- **Integrar** nuevas funcionalidades con tu sistema de gestión de estado existente
- **Practicar** la comunicación con APIs y el manejo de errores
- **Aplicar** patrones modernos de desarrollo web a una función del mundo real

## Instrucciones

### Paso 1: Botón Agregar Transacción

**Crea** un botón "Agregar Transacción" en la página de tu panel que los usuarios puedan encontrar y usar fácilmente.

**Requisitos:**
- **Coloca** el botón en un lugar lógico del panel
- **Usa** un texto claro y orientado a la acción para el botón
- **Estiliza** el botón para que coincida con el diseño UI existente
- **Asegura** que el botón sea accesible por teclado

### Paso 2: Implementación del Diálogo

Elige uno de estos dos enfoques para implementar tu diálogo:

**Opción A: Página separada**
- **Crea** una nueva plantilla HTML para el formulario de transacción
- **Añade** una nueva ruta a tu sistema de enrutamiento
- **Implementa** la navegación hacia y desde la página del formulario

**Opción B: Diálogo Modal (Recomendado)**
- **Usa** JavaScript para mostrar/ocultar el diálogo sin salir del panel
- **Implementa** usando la [propiedad `hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) o clases CSS
- **Crea** una experiencia de usuario fluida con una gestión adecuada del foco

### Paso 3: Implementación de Accesibilidad

**Asegura** que tu diálogo cumpla con los [estándares de accesibilidad para diálogos modales](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navegación por teclado:**
- **Soporta** la tecla Escape para cerrar el diálogo
- **Atrapa** el foco dentro del diálogo cuando está abierto
- **Devuelve** el foco al botón que disparó el diálogo cuando se cierra

**Soporte para lectores de pantalla:**
- **Añade** etiquetas ARIA y roles apropiados
- **Anuncia** a los lectores de pantalla la apertura/cierre del diálogo
- **Proporciona** etiquetas claras para campos del formulario y mensajes de error

### Paso 4: Creación del Formulario

**Diseña** un formulario HTML que recoja los datos de la transacción:

**Campos requeridos:**
- **Fecha**: cuándo ocurrió la transacción
- **Descripción**: para qué fue la transacción
- **Monto**: valor de la transacción (positivo para ingresos, negativo para gastos)

**Características del formulario:**
- **Valida** la entrada del usuario antes de enviar
- **Proporciona** mensajes claros de error para datos inválidos
- **Incluye** texto de ayuda y etiquetas útiles
- **Estiliza** consistentemente con tu diseño existente

### Paso 5: Integración con la API

**Conecta** tu formulario con la API del backend:

**Pasos para implementar:**
- **Revisa** las [especificaciones de la API del servidor](../api/README.md) para el endpoint y formato de datos correctos
- **Crea** datos JSON desde las entradas del formulario
- **Envía** los datos a la API manejando errores apropiadamente
- **Muestra** mensajes de éxito o fallo al usuario
- **Maneja** errores de red con gracia

### Paso 6: Integración con la Gestión de Estado

**Actualiza** tu panel con la nueva transacción:

**Requisitos de integración:**
- **Refresca** los datos de la cuenta después de agregar con éxito la transacción
- **Actualiza** la visualización del panel sin requerir recarga de página
- **Asegura** que la nueva transacción aparezca de inmediato
- **Mantén** la consistencia del estado durante todo el proceso

## Especificaciones técnicas

**Detalles del endpoint API:**
Consulta la [documentación de la API del servidor](../api/README.md) para:
- Formato JSON requerido para los datos de transacción
- Método HTTP y URL del endpoint
- Formato de respuesta esperado
- Manejo de respuestas de error

**Resultado esperado:**
Al completar esta tarea, tu aplicación bancaria debería tener una función "Agregar Transacción" totalmente funcional que luzca y se comporte profesionalmente:

![Captura de pantalla mostrando un ejemplo del diálogo "Agregar transacción"](../../../../translated_images/dialog.93bba104afeb79f1.es.png)

## Pruebas de tu implementación

**Pruebas funcionales:**
1. **Verifica** que el botón "Agregar Transacción" sea claramente visible y accesible
2. **Prueba** que el diálogo se abra y cierre correctamente
3. **Confirma** que la validación del formulario funcione para todos los campos requeridos
4. **Revisa** que las transacciones exitosas aparezcan inmediatamente en el panel
5. **Asegura** que el manejo de errores funcione para datos inválidos y problemas de red

**Pruebas de accesibilidad:**
1. **Navega** por todo el flujo usando solo el teclado
2. **Prueba** con un lector de pantalla para asegurar anuncios correctos
3. **Verifica** que la gestión del foco funcione correctamente
4. **Revisa** que todos los elementos del formulario tengan etiquetas apropiadas

## Rúbrica de evaluación

| Criterio | Ejemplar | Adecuado | Necesita Mejorar |
| -------- | -------- | -------- | ---------------- |
| **Funcionalidad** | La función de agregar transacción funciona perfectamente con excelente experiencia de usuario y sigue las mejores prácticas de las lecciones | La función de agregar transacción funciona correctamente pero puede no seguir algunas mejores prácticas o tiene problemas menores de usabilidad | La función de agregar transacción funciona parcialmente o tiene problemas significativos de usabilidad |
| **Calidad de código** | El código está bien organizado, sigue patrones establecidos, incluye manejo adecuado de errores e integra perfectamente con la gestión de estado existente | El código funciona pero puede tener problemas de organización o patrones inconsistentes con la base de código existente | El código tiene problemas estructurales importantes o no se integra bien con los patrones existentes |
| **Accesibilidad** | Soporte completo para navegación por teclado, compatibilidad con lectores de pantalla, y sigue las directrices WCAG con excelente gestión del foco | Características básicas de accesibilidad implementadas pero puede faltar soporte para navegación por teclado o lectores de pantalla | Consideraciones de accesibilidad limitadas o no implementadas |
| **Experiencia de usuario** | Interfaz intuitiva y pulida con retroalimentación clara, interacciones fluidas y apariencia profesional | Buena experiencia de usuario con áreas menores a mejorar en retroalimentación o diseño visual | Experiencia de usuario pobre con interfaz confusa o falta de retroalimentación |

## Desafíos adicionales (opcional)

Una vez que hayas completado los requisitos básicos, considera estas mejoras:

**Funciones mejoradas:**
- **Agrega** categorías de transacciones (comida, transporte, entretenimiento, etc.)
- **Implementa** validación de entrada con retroalimentación en tiempo real
- **Crea** atajos de teclado para usuarios avanzados
- **Agrega** capacidades de edición y eliminación de transacciones

**Integración avanzada:**
- **Implementa** funcionalidad de deshacer para transacciones añadidas recientemente
- **Agrega** importación masiva de transacciones desde archivos CSV
- **Crea** capacidades de búsqueda y filtrado de transacciones
- **Implementa** funcionalidad de exportación de datos

¡Estas funciones opcionales te ayudarán a practicar conceptos avanzados de desarrollo web y a crear una aplicación bancaria más completa!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional realizada por un humano. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->