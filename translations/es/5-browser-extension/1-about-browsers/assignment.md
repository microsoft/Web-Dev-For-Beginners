# Tarea: Rediseña tu extensión de navegador

## Descripción general

Ahora que has construido la estructura HTML para tu extensión de navegador de huella de carbono, es hora de hacerla visualmente atractiva y fácil de usar. Un gran diseño mejora la experiencia del usuario y hace que tu extensión sea más profesional y atractiva.

Tu extensión viene con un estilo CSS básico, pero esta tarea te desafía a crear una identidad visual única que refleje tu estilo personal mientras mantienes una excelente usabilidad.

## Instrucciones

### Parte 1: Analiza el diseño actual

Antes de hacer cambios, examina la estructura CSS existente:

1. **Ubica** los archivos CSS en tu proyecto de extensión
2. **Revisa** el enfoque de estilo actual y el esquema de colores
3. **Identifica** áreas de mejora en el diseño, tipografía y jerarquía visual
4. **Considera** cómo el diseño apoya los objetivos del usuario (fácil llenado del formulario y clara visualización de datos)

### Parte 2: Diseña tu estilo personalizado

Crea un diseño visual cohesivo que incluya:

**Esquema de colores:**
- Elige una paleta de colores primaria que refleje temas ambientales
- Asegura suficiente contraste para accesibilidad (usa herramientas como el verificador de contraste de WebAIM)
- Considera cómo se verán los colores en diferentes temas del navegador

**Tipografía:**
- Selecciona fuentes legibles que funcionen bien en tamaños pequeños de extensión
- Establece una jerarquía clara con tamaños y pesos de fuente apropiados
- Asegura que el texto permanezca legible en temas claros y oscuros del navegador

**Diseño y espaciado:**
- Mejora la organización visual de los elementos del formulario y la visualización de datos
- Agrega relleno y márgenes apropiados para mejor legibilidad
- Considera principios de diseño responsivo para diferentes tamaños de pantalla

### Parte 3: Implementa tu diseño

Modifica los archivos CSS para implementar tu diseño:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Áreas clave para estilizar:**
- **Elementos del formulario**: campos de entrada, etiquetas y botón de envío
- **Visualización de resultados**: contenedor de datos, estilo de texto y estados de carga
- **Elementos interactivos**: efectos hover, estados de botones y transiciones
- **Diseño general**: espaciado de contenedores, colores de fondo y jerarquía visual

### Parte 4: Prueba y perfecciona

1. **Construye** tu extensión con `npm run build`
2. **Carga** la extensión actualizada en tu navegador
3. **Prueba** todos los estados visuales (entrada del formulario, carga, visualización de resultados, errores)
4. **Verifica** la accesibilidad con las herramientas de desarrollo del navegador
5. **Perfecciona** tus estilos basado en uso real

## Retos creativos

### Nivel básico
- Actualiza colores y fuentes para crear un tema cohesivo
- Mejora el espaciado y alineación en toda la interfaz
- Agrega efectos hover sutiles a elementos interactivos

### Nivel intermedio
- Diseña íconos o gráficos personalizados para tu extensión
- Implementa transiciones suaves entre diferentes estados
- Crea una animación de carga única para llamadas API

### Nivel avanzado
- Diseña múltiples opciones de tema (claro/oscuro/alto contraste)
- Implementa diseño responsivo para diferentes tamaños de ventana del navegador
- Añade micro-interacciones que mejoren la experiencia del usuario

## Guía de entrega

Tu tarea completada debe incluir:

- **Archivos CSS modificados** con tu estilo personalizado
- **Capturas de pantalla** mostrando tu extensión en diferentes estados (formulario, carga, resultados)
- **Breve descripción** (2-3 oraciones) que explique tus elecciones de diseño y cómo mejoran la experiencia del usuario

## Rúbrica de evaluación

| Criterios | Excelente (4) | Competente (3) | En desarrollo (2) | Principiante (1) |
|----------|---------------|----------------|----------------|----------------|
| **Diseño visual** | Diseño creativo y cohesivo que mejora la usabilidad y refleja sólidos principios de diseño | Buenas elecciones de diseño con estilo consistente y jerarquía visual clara | Mejoras básicas con algunos problemas de consistencia | Cambios mínimos en el estilo o diseño inconsistente |
| **Funcionalidad** | Todos los estilos funcionan perfectamente en diferentes estados y entornos de navegador | Los estilos funcionan bien con pequeños problemas en casos límite | La mayoría de los estilos funcionales con algunos problemas de visualización | Problemas importantes de estilo que afectan la usabilidad |
| **Calidad del código** | CSS limpio, bien organizado con nombres de clases significativos y selectores eficientes | Buena estructura CSS con uso apropiado de selectores y propiedades | CSS aceptable con algunos problemas de organización | Estructura CSS pobre o estilo excesivamente complejo |
| **Accesibilidad** | Excelente contraste de colores, fuentes legibles y consideración para usuarios con discapacidades | Buenas prácticas de accesibilidad con pequeñas áreas de mejora | Consideraciones básicas de accesibilidad con algunos problemas | Atención limitada a los requisitos de accesibilidad |

## Consejos para el éxito

> 💡 **Consejo de diseño**: Comienza con cambios sutiles y avanza hacia estilos más dramáticos. Las pequeñas mejoras en tipografía y espaciado a menudo tienen un gran impacto en la percepción de calidad.

**Buenas prácticas para seguir:**
- **Prueba** tu extensión en temas claros y oscuros del navegador
- **Usa** unidades relativas (em, rem) para mejor escalabilidad
- **Mantén** un espaciado consistente usando propiedades personalizadas de CSS
- **Considera** cómo tu diseño será percibido por usuarios con diferentes necesidades visuales
- **Valida** tu CSS para asegurar que sigue la sintaxis correcta

> ⚠️ **Error común**: No sacrifiques la usabilidad por la apariencia visual. Tu extensión debe ser hermosa y funcional.

**Recuerda:**
- **Mantén** la información importante fácilmente legible
- **Asegura** que los botones y elementos interactivos sean fáciles de clicar
- **Mantén** una retroalimentación visual clara para las acciones del usuario
- **Prueba** tu diseño con datos reales, no solo con texto de marcador de posición

¡Buena suerte creando una extensión de navegador que sea funcional y visualmente impresionante!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables por malentendidos o interpretaciones erróneas que puedan derivarse del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->