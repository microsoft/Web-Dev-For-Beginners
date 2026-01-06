<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-06T07:45:09+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "es"
}
-->
# Estiliza tu aplicación bancaria con CSS moderno

## Resumen del proyecto

Transforma tu aplicación bancaria funcional en una aplicación web visualmente atractiva y profesional usando técnicas modernas de CSS. Crearás un sistema de diseño coherente que mejore la experiencia del usuario manteniendo principios de accesibilidad y diseño responsivo.

Esta tarea te desafía a aplicar patrones contemporáneos de diseño web, implementar una identidad visual consistente y crear una interfaz que los usuarios encuentren atractiva e intuitiva para navegar.

## Instrucciones

### Paso 1: Configura tu hoja de estilos

**Crea tu base de CSS:**

1. **Crea** un archivo nuevo llamado `styles.css` en la raíz de tu proyecto  
2. **Vincula** la hoja de estilos en tu archivo `index.html`:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Comienza** con el reset de CSS y valores predeterminados modernos:  
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Paso 2: Requisitos del sistema de diseño

**Implementa estos elementos esenciales de diseño:**

#### Paleta de colores
- **Color primario**: Elige un color profesional para botones y destacados  
- **Color secundario**: Color complementario para acentos y acciones secundarias  
- **Colores neutros**: Grises para texto, bordes y fondos  
- **Colores de éxito/error**: Verde para estados de éxito, rojo para errores  

#### Tipografía
- **Jerarquía de encabezados**: Distinción clara entre elementos H1, H2 y H3  
- **Texto principal**: Tamaño de fuente legible (mínimo 16px) y altura de línea apropiada  
- **Etiquetas de formularios**: Estilo claro y accesible para el texto  

#### Diseño y espaciado
- **Espaciado consistente**: Usa una escala de espacios (8px, 16px, 24px, 32px)  
- **Sistema de rejilla**: Diseño organizado para formularios y secciones de contenido  
- **Diseño responsivo**: Enfoque mobile-first con puntos de quiebre  

### Paso 3: Estiliza los componentes

**Estiliza estos componentes específicos:**

#### Formularios
- **Campos de entrada**: Bordes profesionales, estados de enfoque y estilos de validación  
- **Botones**: Efectos hover, estados deshabilitados e indicadores de carga  
- **Etiquetas**: Posicionamiento claro e indicadores de campos obligatorios  
- **Mensajes de error**: Estilos visibles para errores y mensajes útiles  

#### Navegación
- **Encabezado**: Área de navegación limpia y con identidad de marca  
- **Enlaces**: Estados hover claros e indicadores activos  
- **Logo/Título**: Elemento distintivo de la marca  

#### Áreas de contenido
- **Secciones**: Separación visual clara entre áreas diferentes  
- **Tarjetas**: Si usas diseños basados en tarjetas, incluye sombras y bordes  
- **Fondos**: Uso apropiado de espacio en blanco y fondos sutiles  

### Paso 4: Funcionalidades mejoradas (Opcional)

**Considera implementar estas funciones avanzadas:**  
- **Modo oscuro**: Alternar entre temas claro y oscuro  
- **Animaciones**: Transiciones sutiles y microinteracciones  
- **Estados de carga**: Retroalimentación visual durante el envío de formularios  
- **Imágenes responsivas**: Imágenes optimizadas para diferentes tamaños de pantalla  

## Inspiración de diseño

**Características modernas de una app bancaria:**  
- **Diseño limpio y minimalista** con mucho espacio en blanco  
- **Esquemas de color profesionales** (azules, verdes o neutros sofisticados)  
- **Jerarquía visual clara** con botones de llamada a la acción prominentes  
- **Relaciones de contraste accesibles** que cumplan con las pautas WCAG  
- **Diseños responsivos para móviles** que funcionan en todos los dispositivos  

## Requisitos técnicos

### Organización CSS  
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Requisitos de accesibilidad
- **Contraste de color**: Asegura al menos una relación de 4.5:1 para texto normal  
- **Indicadores de foco**: Estados visibles de foco para navegación con teclado  
- **Etiquetas de formulario**: Correcta asociación con los campos  
- **Diseño responsivo**: Utilizable en pantallas desde 320px hasta 1920px de ancho  

## Rúbrica de evaluación

| Criterios | Excelente (A) | Competente (B) | En desarrollo (C) | Necesita mejora (F) |
|----------|---------------|----------------|-------------------|---------------------|
| **Sistema de diseño** | Implementa un sistema de diseño completo con colores, tipografía y espaciados consistentes | Usa estilos consistentes con patrones claros y buena jerarquía visual | Estilos básicos aplicados con algunos problemas de consistencia o elementos de diseño faltantes | Estilo mínimo con decisiones inconsistentes o en conflicto |
| **Experiencia de usuario** | Crea una interfaz intuitiva y profesional con excelente usabilidad y atractivo visual | Proporciona buena experiencia de usuario con navegación clara y contenido legible | Usabilidad básica con algunas mejoras necesarias en UX | Usabilidad deficiente, difícil de navegar o leer |
| **Implementación técnica** | Usa técnicas modernas de CSS, estructura de código organizada y sigue buenas prácticas | Implementa CSS efectivamente con buena organización y técnicas apropiadas | CSS funciona correctamente pero puede faltar organización o enfoques modernos | Implementación pobre de CSS con problemas técnicos o compatibilidad de navegadores |
| **Diseño responsivo** | Diseño completamente responsivo que funciona perfectamente en todos los tamaños de dispositivos | Buen comportamiento responsivo con problemas menores en algunos tamaños de pantalla | Implementación básica de responsividad con algunos problemas de diseño | No es responsivo o presenta problemas significativos en dispositivos móviles |
| **Accesibilidad** | Cumple con las directrices WCAG con excelente navegación por teclado y soporte para lectores de pantalla | Buenas prácticas de accesibilidad con contraste y indicadores de foco adecuados | Consideraciones básicas de accesibilidad con algunos elementos faltantes | Accesibilidad deficiente, difícil para usuarios con discapacidades |

## Guía para la entrega

**Incluye en tu entrega:**  
- **styles.css**: Tu hoja de estilos completa  
- **HTML actualizado**: Cualquier modificación HTML que hayas realizado  
- **Capturas de pantalla**: Imágenes que muestren tu diseño en escritorio y móvil  
- **README**: Breve descripción de tus decisiones de diseño y paleta de colores  

**Puntos extra por:**  
- **Propiedades personalizadas CSS** para un tema mantenible  
- **Características avanzadas CSS** como Grid, Flexbox o animaciones CSS  
- **Consideraciones de rendimiento** como CSS optimizado y tamaño de archivo mínimo  
- **Pruebas multiplataforma** asegurando compatibilidad entre diferentes navegadores  

> 💡 **Consejo profesional**: Comienza diseñando para móviles y luego mejora para pantallas más grandes. Este enfoque mobile-first asegura que tu aplicación funcione bien en todos los dispositivos y sigue las mejores prácticas modernas de desarrollo web.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción AI [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por un humano. No nos hacemos responsables de malentendidos o interpretaciones incorrectas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->