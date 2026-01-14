<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T07:57:58+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "es"
}
-->
# Asignación de Práctica de HTML: Construir una Maqueta de Blog

## Objetivos de Aprendizaje

Aplica tu conocimiento de HTML diseñando y codificando una estructura completa para la página principal de un blog. Esta asignación práctica reforzará conceptos de HTML semántico, mejores prácticas de accesibilidad y habilidades profesionales de organización de código que utilizarás a lo largo de tu trayectoria en desarrollo web.

**Al completar esta asignación, tú:**
- Practicarás la planificación de diseños de sitios web antes de codificar
- Aplicarás elementos semánticos de HTML de forma apropiada
- Crearás marcado accesible y bien estructurado
- Desarrollarás hábitos profesionales de codificación con comentarios y organización

## Requisitos del Proyecto

### Parte 1: Planificación del Diseño (Maqueta Visual)

**Crea una maqueta visual de la página principal de tu blog que incluya:**
- Encabezado con el título del sitio y navegación
- Área de contenido principal con al menos 2-3 vistas previas de publicaciones del blog
- Barra lateral con información adicional (sección acerca de, publicaciones recientes, categorías)
- Pie de página con información de contacto o enlaces

**Opciones para Crear la Maqueta:**
- **Boceto a mano**: Usa papel y lápiz, luego fotografía o escanea tu diseño
- **Herramientas digitales**: Figma, Adobe XD, Canva, PowerPoint, o cualquier aplicación de dibujo
- **Herramientas de wireframe**: Balsamiq, MockFlow, o software similar de wireframing

**Etiqueta las secciones de tu maqueta** con los elementos HTML que planeas usar (por ejemplo, "Encabezado - `<header>`", "Publicaciones del Blog - `<article>`").

### Parte 2: Planificación de Elementos HTML

**Crea una lista que relacione cada sección de tu maqueta con elementos HTML específicos:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elementos requeridos para incluir:**
Tu HTML debe contener al menos 10 elementos semánticos diferentes de esta lista:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Parte 3: Implementación HTML

**Codifica la página principal de tu blog siguiendo estos estándares:**

1. **Estructura del Documento**: Incluye el DOCTYPE adecuado, y los elementos html, head, y body
2. **Marcado Semántico**: Usa elementos HTML para su propósito previsto
3. **Accesibilidad**: Incluye texto alternativo apropiado para imágenes y texto significativo en los enlaces
4. **Calidad del Código**: Usa indentación consistente y comentarios significativos
5. **Contenido**: Incluye contenido realista para el blog (puedes usar texto de marcador de posición)

**Estructura HTML de ejemplo:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Parte 4: Reflexión

**Escribe una breve reflexión (3-5 oraciones) que aborde:**
- ¿Con qué elementos HTML te sentiste más seguro/a usando?
- ¿Qué desafíos encontraste al planificar o codificar?
- ¿Cómo te ayudó el HTML semántico a organizar tu contenido?
- ¿Qué harías diferente en tu próximo proyecto de HTML?

## Lista de Verificación para Entrega

**Antes de enviar, asegúrate de haber:**
- [ ] Maqueta visual con elementos HTML etiquetados
- [ ] Archivo HTML completo con estructura de documento correcta
- [ ] Al menos 10 elementos semánticos diferentes usados apropiadamente
- [ ] Comentarios significativos que expliquen la estructura del código
- [ ] Sintaxis HTML válida (prueba en un navegador)
- [ ] Reflexión escrita que responda a las preguntas indicadas

## Rúbrica de Evaluación

| Criterios | Sobresaliente (4) | Competente (3) | En Desarrollo (2) | Principiante (1) |
|----------|-------------------|----------------|-------------------|------------------|
| **Planificación y Diseño** | Maqueta detallada y bien etiquetada que muestra clara comprensión del diseño y la estructura semántica HTML | Maqueta clara con la mayoría de secciones etiquetadas correctamente | Maqueta básica con alguna etiquetación, muestra entendimiento general | Maqueta mínima o poco clara, carece de identificación adecuada de secciones |
| **Uso Semántico de HTML** | Usa 10+ elementos semánticos apropiadamente, demuestra profundo entendimiento de estructura y accesibilidad HTML | Usa 8-9 elementos semánticos correctamente, muestra buen entendimiento del marcado semántico | Usa 6-7 elementos semánticos, algo de confusión sobre uso adecuado | Usa menos de 6 elementos o usa mal los elementos semánticos |
| **Calidad y Organización del Código** | Código excepcionalmente bien organizado, indentado correctamente, con comentarios comprehensivos y sintaxis HTML perfecta | Código bien organizado con buena indentación, comentarios útiles y sintaxis válida | Código mayormente organizado con algunos comentarios, problemas menores de sintaxis | Mala organización, pocos comentarios, múltiples errores de sintaxis |
| **Accesibilidad y Mejores Prácticas** | Consideraciones excelentes de accesibilidad, texto alternativo significativo, jerarquía correcta de encabezados, sigue todas las mejores prácticas modernas | Buenas características de accesibilidad, uso apropiado de encabezados y texto alternativo, sigue la mayoría de las mejores prácticas | Algunas consideraciones de accesibilidad, texto alternativo básico y estructura de encabezados | Características limitadas de accesibilidad, mala estructura de encabezados, no sigue mejores prácticas |
| **Reflexión y Aprendizaje** | Reflexión profunda que demuestra comprensión profunda de conceptos de HTML y análisis reflexivo del proceso de aprendizaje | Buena reflexión mostrando entendimiento de conceptos clave y algo de autoconciencia en el aprendizaje | Reflexión básica con poca comprensión de conceptos de HTML o del proceso de aprendizaje | Reflexión mínima o ausente, muestra poco entendimiento de los conceptos aprendidos |

## Recursos de Aprendizaje

**Referencias Esenciales:**
- [Referencia de Elementos HTML de MDN](https://developer.mozilla.org/docs/Web/HTML/Element) - Guía completa de todos los elementos HTML
- [Elementos Semánticos en HTML5](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Entendiendo el marcado semántico
- [Guías de Accesibilidad Web](https://www.w3.org/WAI/WCAG21/quickref/) - Creación de contenido web accesible
- [Validador HTML](https://validator.w3.org/) - Verifica la sintaxis de tu HTML

**Consejos Profesionales para Tener Éxito:**
- Empieza con tu maqueta antes de escribir código
- Usa las herramientas de desarrollo del navegador para inspeccionar tu estructura HTML
- Prueba tu página con diferentes tamaños de pantalla (incluso sin CSS)
- Lee tu HTML en voz alta para comprobar si la estructura tiene sentido lógico
- Considera cómo un lector de pantalla interpretaría la estructura de tu página

> 💡 **Recuerda**: Esta asignación se enfoca en la estructura y semántica de HTML. ¡No te preocupes por el estilo visual; para eso está CSS! Tu página puede verse sencilla, pero debe estar bien estructurada y ser significativa.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No somos responsables de ningún malentendido o interpretación incorrecta que pueda derivarse del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->