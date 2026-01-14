<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-06T08:07:55+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "es"
}
-->
# Auditoría Integral de Accesibilidad Web

## Instrucciones

En esta tarea, realizarás una auditoría de accesibilidad a nivel profesional de un sitio web real, aplicando los principios y técnicas que has aprendido. Esta experiencia práctica profundizará tu comprensión de las barreras y soluciones de accesibilidad.

Elige un sitio web que parezca tener problemas de accesibilidad; esto te brinda más oportunidades de aprendizaje que analizar un sitio ya perfecto. Buenos candidatos incluyen sitios web antiguos, aplicaciones web complejas o sitios con contenido multimedia rico.

### Fase 1: Evaluación manual estratégica

Antes de recurrir a herramientas automáticas, realiza una evaluación manual exhaustiva. Este enfoque centrado en el usuario a menudo revela problemas que las herramientas pasan por alto y te ayuda a comprender la experiencia real del usuario.

**🔍 Criterios esenciales de evaluación:**

**Navegación y estructura:**
- ¿Puedes navegar por todo el sitio usando solo el teclado (Tab, Shift+Tab, Enter, Barra espaciadora, teclas de flecha)?
- ¿Son claramente visibles los indicadores de foco en todos los elementos interactivos?
- ¿La estructura de encabezados (H1-H6) crea un esquema lógico del contenido?
- ¿Existen enlaces para saltar directamente al contenido principal?

**Accesibilidad visual:**
- ¿Hay suficiente contraste de color en todo el sitio (mínimo 4.5:1 para texto normal)?
- ¿El sitio depende solo del color para transmitir información importante?
- ¿Todas las imágenes tienen texto alternativo adecuado?
- ¿El diseño sigue siendo funcional al hacer zoom al 200%?

**Contenido y comunicación:**
- ¿Hay textos de enlaces como "haz clic aquí" o ambiguos?
- ¿Puedes entender el contenido y la funcionalidad sin pistas visuales?
- ¿Los campos de formulario están correctamente etiquetados y agrupados?
- ¿Los mensajes de error son claros y útiles?

**Elementos interactivos:**
- ¿Funcionan todos los botones y controles de formulario solo con el teclado?
- ¿Los cambios dinámicos de contenido se anuncian a los lectores de pantalla?
- ¿Los diálogos modales y widgets complejos siguen patrones adecuados de accesibilidad?

📝 **Documenta tus hallazgos** con ejemplos específicos, capturas de pantalla y URLs de páginas. Anota tanto problemas como aspectos bien realizados.

### Fase 2: Pruebas automáticas completas

Ahora valida y amplía tus hallazgos manuales usando herramientas estándar del sector para pruebas de accesibilidad. Cada herramienta tiene fortalezas distintas, por lo que usar varias te dará una cobertura completa.

**🛠️ Herramientas de prueba requeridas:**

1. **Auditoría de accesibilidad Lighthouse** (integrada en Chrome/Edge DevTools)
   - Ejecuta la auditoría en múltiples páginas
   - Enfócate en métricas y recomendaciones específicas
   - Anota tu puntuación de accesibilidad y violaciones concretas

2. **axe DevTools** (extensión de navegador - estándar del sector)
   - Detección más detallada que Lighthouse
   - Proporciona ejemplos específicos de código para correcciones
   - Prueba conforme a criterios WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (extensión de navegador)
   - Representación visual de características de accesibilidad
   - Destaca tanto errores como aspectos positivos
   - Ideal para comprender la estructura de la página

4. **Analizadores de contraste de color**
   - WebAIM Contrast Checker para pares específicos de colores
   - Extensiones de navegador para análisis general de la página
   - Pruebas conforme a estándares WCAG AA y AAA

**🎧 Pruebas reales con tecnología asistiva:**
- **Pruebas con lector de pantalla**: Usa NVDA (Windows), VoiceOver (Mac) o TalkBack (Android)
- **Navegación solo con teclado**: Desconecta el ratón y navega por todo el sitio
- **Pruebas de zoom**: Verifica la funcionalidad con zoom al 200% y 400%
- **Pruebas de control por voz**: Si está disponible, prueba herramientas de navegación por voz

**📊 Organiza tus resultados** creando una hoja de cálculo maestra con:
- Descripción y ubicación del problema
- Nivel de severidad (Crítico/Alto/Medio/Bajo)
- Criterios WCAG incumplidos
- Herramienta que detectó el problema
- Capturas de pantalla y evidencias

### Fase 3: Documentación exhaustiva de hallazgos

Elabora un informe profesional de auditoría de accesibilidad que demuestre tu comprensión tanto de problemas técnicos como de su impacto humano.

**📋 Secciones requeridas del informe:**

1. **Resumen ejecutivo** (1 página)
   - URL del sitio y breve descripción
   - Nivel general de madurez en accesibilidad
   - Las 3 cuestiones más críticas
   - Impacto estimado en usuarios con discapacidades

2. **Metodología** (½ página)
   - Enfoque de pruebas y herramientas usadas
   - Páginas evaluadas y combinaciones de dispositivo/navegador
   - Normativas evaluadas (WCAG 2.1 AA)

3. **Hallazgos detallados** (2-3 páginas)
   - Problemas clasificados según principio WCAG (Perceptible, Operable, Comprensible, Robusto)
   - Incluye capturas de pantalla y ejemplos específicos
   - Nota características positivas de accesibilidad encontradas
   - Referencia cruzada con resultados de herramientas automáticas

4. **Evaluación del impacto en usuarios** (1 página)
   - Cómo afectan los problemas identificados a usuarios con diferentes discapacidades
   - Escenarios que describen experiencias reales de usuarios
   - Impacto en negocio (riesgo legal, SEO, ampliación de base de usuarios)

**📸 Colección de evidencias:**
- Capturas de pantalla de violaciones de accesibilidad
- Grabaciones de pantalla de flujos problemáticos
- Informes de herramientas (guardar en PDF)
- Ejemplos de código mostrando problemas

### Fase 4: Plan profesional de remediación

Desarrolla un plan estratégico y priorizado para corregir los problemas de accesibilidad. Esto demuestra tu capacidad para pensar como un desarrollador web profesional que enfrenta restricciones reales de negocio.

**🎯 Crea recomendaciones detalladas de mejora (mínimo 10 problemas):**

**Para cada problema identificado, provee:**

- **Descripción del problema**: Explicación clara de qué está mal y por qué es problemático
- **Referencia WCAG**: Criterios específicos incumplidos (e.g., "2.4.4 Propósito del enlace (en contexto) - Nivel A")
- **Impacto en el usuario**: Cómo afecta a personas con diferentes discapacidades
- **Solución**: Cambios específicos en código, modificaciones de diseño o mejoras en procesos
- **Nivel de prioridad**: Crítico (bloquea uso básico) / Alto (barrera significativa) / Medio (problema de usabilidad) / Bajo (mejora)
- **Esfuerzo de implementación**: Estimación de tiempo/ complejidad (Rápido / Esfuerzo moderado / Reforma mayor)
- **Verificación de prueba**: Cómo verificar que la corrección funciona

**Ejemplo de entrada de mejora:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Fases estratégicas de implementación:**

- **Fase 1 (0-2 semanas)**: Problemas críticos que bloquean funcionalidad básica
- **Fase 2 (1-2 meses)**: Mejoras de alta prioridad para mejor experiencia de usuario
- **Fase 3 (3-6 meses)**: Mejoras de prioridad media y procesos
- **Fase 4 (Continuo)**: Monitoreo y mejora continua

## Rúbrica de Evaluación

Tu auditoría de accesibilidad será evaluada tanto por precisión técnica como presentación profesional:

| Criterio | Excelente (90-100%) | Bueno (80-89%) | Satisfactorio (70-79%) | Necesita Mejora (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Profundidad de prueba manual** | Evaluación integral cubriendo todos los principios POUR con observaciones detalladas y escenarios de usuario | Buena cobertura de la mayoría de áreas de accesibilidad con hallazgos claros y análisis de impacto usuario | Evaluación básica cubriendo áreas clave con observaciones adecuadas | Pruebas limitadas con observaciones superficiales y poca consideración del impacto en usuario |
| **Uso y análisis de herramientas** | Usa efectivamente todas las herramientas requeridas, referencia cruzada, evidencia clara y análisis de limitaciones | Usa la mayoría de las herramientas con buena documentación, algo de referencia cruzada y evidencia adecuada | Usa herramientas requeridas con documentación básica y algo de evidencia | Uso mínimo de herramientas, mala documentación o falta de evidencia |
| **Identificación y categorización de problemas** | Identifica 15+ problemas específicos en todos principios WCAG, clasifica correctamente severidad y demuestra comprensión profunda | Identifica 10-14 problemas en la mayoría de principios WCAG, buena categorización y comprensión sólida | Identifica 7-9 problemas con cobertura WCAG adecuada y categorización básica | Identifica <7 problemas con alcance limitado o mala categorización |
| **Calidad y viabilidad de soluciones** | 10+ soluciones detalladas y accionables con referencias WCAG precisas, cronogramas realistas y métodos de verificación | 8-9 soluciones bien desarrolladas con referencias mayormente precisas y detalles de implementación | 6-7 soluciones básicas con algo de detalle y enfoques generalmente realistas | <6 soluciones o falta de detalle, implementaciones poco realistas |
| **Comunicación profesional** | Informe perfectamente organizado, claro, incluye resumen ejecutivo, lenguaje técnico adecuado y sigue estándares de documentos empresariales | Bien organizado, buena calidad de redacción, incluye la mayoría de secciones requeridas, tono apropiado | Adecuadamente organizado y aceptable redacción, incluye secciones básicas | Mala organización, redacción poco clara o falta secciones clave |
| **Aplicación en el mundo real** | Demuestra comprensión del impacto empresarial, consideraciones legales, diversidad de usuarios y desafíos prácticos | Muestra buena comprensión de aplicaciones prácticas con algo de contexto empresarial | Comprensión básica de aplicaciones reales | Conexión limitada con aplicaciones prácticas |

## Opciones Avanzadas de Desafío

**🚀 Para estudiantes que buscan un reto adicional:**

- **Análisis comparativo**: Audita 2-3 sitios web competidores y compara su madurez accesible
- **Foco en accesibilidad móvil**: Profundiza en problemas específicos móviles usando Android TalkBack o iOS VoiceOver
- **Perspectiva internacional**: Investiga y aplica normativas de accesibilidad de distintos países (EN 301 549, Sección 508, ADA)
- **Revisión de declaración de accesibilidad**: Evalúa la declaración de accesibilidad del sitio (si existe) frente a tus hallazgos

## Entregables

Entrega un informe completo de auditoría de accesibilidad que demuestre análisis profesional y planificación práctica:

**📄 Requisitos del informe final:**

1. **Resumen ejecutivo** (1 página)
   - Resumen del sitio y evaluación de madurez en accesibilidad
   - Resumen de hallazgos clave con impacto empresarial
   - Acciones prioritarias recomendadas

2. **Metodología y alcance** (1 página)
   - Enfoque de pruebas, herramientas usadas y criterios de evaluación
   - Páginas/secciones evaluadas y limitaciones
   - Marco normativo (WCAG 2.1 AA)

3. **Informe detallado de hallazgos** (3-4 páginas)
   - Observaciones de pruebas manuales con escenarios de usuarios
   - Resultados de herramientas automáticas con referencias cruzadas
   - Problemas organizados por principios WCAG con evidencias
   - Características positivas de accesibilidad identificadas

4. **Plan estratégico de remediación** (3-4 páginas)
   - Recomendaciones priorizadas de mejora (mínimo 10)
   - Cronograma de implementación con estimaciones de esfuerzo
   - Métricas de éxito y métodos de verificación
   - Estrategia de mantenimiento de accesibilidad a largo plazo

5. **Evidencias complementarias** (Apéndices)
   - Capturas de pantalla de violaciones y herramientas de prueba
   - Ejemplos de código mostrando problemas y soluciones
   - Informes y resúmenes de auditoría
   - Notas o grabaciones de pruebas con lectores de pantalla

**📊 Requisitos de formato:**
- **Formato de documento**: PDF (presentación profesional)
- **Extensión**: 2,500-3,500 palabras (excluyendo apéndices y capturas)
- **Elementos visuales**: Incluir capturas, diagramas y ejemplos a lo largo del documento
- **Citas**: Referenciar adecuadamente las directrices WCAG y recursos de accesibilidad

**💡 Consejos para la excelencia:**
- Usa formato profesional con encabezados y estilos consistentes
- Incluye tabla de contenidos para navegación fácil
- Equilibra precisión técnica con lenguaje claro y adecuado para negocios
- Demuestra comprensión tanto técnica como del impacto en usuarios

## Resultados de Aprendizaje

Tras completar esta auditoría integral de accesibilidad, habrás desarrollado habilidades profesionales esenciales:

**🎯 Competencias técnicas:**
- **Dominio en pruebas de accesibilidad**: Competencia en métodos manuales y automáticos estándar del sector
- **Aplicación WCAG**: Experiencia práctica aplicando pautas de accesibilidad web a escenarios reales
- **Entendimiento de tecnología asistiva**: Experiencia práctica con lectores de pantalla y navegación con teclado
- **Mapeo problema-solución**: Capacidad para identificar barreras y desarrollar estrategias específicas y accionables

**💼 Habilidades profesionales:**
- **Comunicación técnica**: Experiencia escribiendo informes profesionales de accesibilidad para diversos públicos
- **Planificación estratégica**: Capacidad para priorizar mejoras según impacto en usuarios y viabilidad técnica
- **Aseguramiento de calidad**: Comprensión de pruebas de accesibilidad como parte del ciclo de desarrollo
- **Evaluación de riesgos**: Valoración de implicaciones legales, comerciales y éticas de cumplimiento accesible

**🌍 Mentalidad de diseño inclusivo:**
- **Empatía con usuarios**: Profunda comprensión de necesidades diversas e interacciones con tecnología asistiva
- **Principios de diseño universal**: Reconocimiento de que el diseño accesible beneficia a todos, no solo a personas con discapacidad
- **Mejora continua**: Marco para evaluación y mejora constante de accesibilidad
- **Habilidades de defensa**: Confianza para promover mejores prácticas de accesibilidad en proyectos y equipos futuros

**🚀 Preparación profesional:**
Esta tarea emula proyectos reales de consultoría en accesibilidad, brindándote experiencia de portafolio que demuestra:
- Enfoque sistemático para resolver problemas
- Atención tanto a detalles técnicos como a impacto comercial
- Comunicación clara de conceptos técnicos complejos
- Comprensión de responsabilidades legales y éticas en desarrollo web

Al finalizar, estarás preparado para contribuir significativamente a iniciativas de accesibilidad en cualquier rol de desarrollo web y promover prácticas de diseño inclusivo a lo largo de tu carrera.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la exactitud, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma original debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de ningún malentendido o interpretación errónea derivada del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->