# Tarea de Refactorización CSS

## Objetivo

¡Transforma tu proyecto de terrario para usar técnicas modernas de diseño CSS! Refactoriza el enfoque actual de posicionamiento absoluto para implementar **Flexbox** o **CSS Grid** para un diseño más mantenible y responsivo. Esta tarea te desafía a aplicar estándares modernos de CSS mientras mantienes el atractivo visual de tu terrario.

Entender cuándo y cómo usar diferentes métodos de diseño es una habilidad crucial para el desarrollo web moderno. Este ejercicio conecta técnicas tradicionales de posicionamiento con sistemas contemporáneos de diseño CSS.

## Instrucciones de la Tarea

### Fase 1: Análisis y Planificación
1. **Revisa tu código actual del terrario** - Identifica qué elementos usan posicionamiento absoluto
2. **Elige tu método de diseño** - Decide si Flexbox o CSS Grid se adapta mejor a tus objetivos de diseño
3. **Dibuja la nueva estructura del diseño** - Planifica cómo se organizarán los contenedores y los elementos de las plantas

### Fase 2: Implementación
1. **Crea una nueva versión** de tu proyecto de terrario en una carpeta separada
2. **Actualiza la estructura HTML** según sea necesario para soportar el método de diseño elegido
3. **Refactoriza el CSS** para usar Flexbox o CSS Grid en lugar de posicionamiento absoluto
4. **Mantén la consistencia visual** - Asegúrate que tus plantas y el frasco del terrario aparezcan en las mismas posiciones
5. **Implementa comportamiento responsivo** - Tu diseño debe adaptarse de forma fluida a diferentes tamaños de pantalla

### Fase 3: Pruebas y Documentación
1. **Pruebas en diferentes navegadores** - Verifica que tu diseño funcione en Chrome, Firefox, Edge y Safari
2. **Pruebas responsivas** - Revisa tu diseño en tamaños de pantalla móvil, tablet y escritorio
3. **Documentación** - Añade comentarios en tu CSS explicando tus elecciones de diseño
4. **Capturas de pantalla** - Toma imágenes de tu terrario en diferentes navegadores y tamaños de pantalla

## Requisitos Técnicos

### Implementación del Diseño
- **Elige UNO**: Implementa Flexbox O CSS Grid (no ambos para los mismos elementos)
- **Diseño responsivo**: Usa unidades relativas (`rem`, `em`, `%`, `vw`, `vh`) en lugar de píxeles fijos
- **Accesibilidad**: Mantén la estructura HTML semántica adecuada y texto alternativo
- **Calidad de código**: Usa convenciones de nombres consistentes y organiza el CSS lógicamente

### Características Modernas de CSS a Incluir
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Requisitos de Soporte en Navegadores
- **Chrome/Edge**: Últimas 2 versiones
- **Firefox**: Últimas 2 versiones  
- **Safari**: Últimas 2 versiones
- **Navegadores móviles**: iOS Safari, Chrome Mobile

## Entregables

1. **Archivo HTML actualizado** con mejor estructura semántica
2. **Archivo CSS refactorizado** usando técnicas modernas de diseño
3. **Colección de capturas de pantalla** mostrando compatibilidad entre navegadores:
   - Vista desktop (1920x1080)
   - Vista tablet (768x1024) 
   - Vista móvil (375x667)
   - Al menos 2 navegadores diferentes
4. **Archivo README.md** documentando:
   - Tu elección de diseño (Flexbox vs Grid) y razones
   - Desafíos enfrentados durante la refactorización
   - Notas sobre compatibilidad de navegadores
   - Instrucciones para ejecutar tu código

## Rúbrica de Evaluación

| Criterios | Sobresaliente (4) | Competente (3) | En Desarrollo (2) | Inicial (1) |
|-----------|-------------------|----------------|-------------------|-------------|
| **Implementación del Diseño** | Uso magistral de Flexbox/Grid con características avanzadas; completamente responsivo | Implementación correcta con buen comportamiento responsivo | Implementación básica con problemas menores de responsividad | Implementación incompleta o incorrecta del diseño |
| **Calidad del Código** | CSS limpio, bien organizado con comentarios significativos y nombres consistentes | Buena organización con algunos comentarios | Organización adecuada con pocos comentarios | Mala organización; difícil de entender |
| **Compatibilidad entre Navegadores** | Consistencia perfecta en todos los navegadores requeridos con capturas de pantalla | Buena compatibilidad con diferencias menores documentadas | Algunas problemas de compatibilidad que no afectan funcionalidad | Problemas mayores de compatibilidad o pruebas ausentes |
| **Diseño Responsivo** | Enfoque excepcional mobile-first con puntos de quiebre suaves | Buen comportamiento responsivo con puntos de quiebre adecuados | Características responsivas básicas con algunos problemas de diseño | Comportamiento responsivo limitado o defectuoso |
| **Documentación** | README completo con explicaciones detalladas y perspectivas | Buena documentación cubriendo todos los elementos requeridos | Documentación básica con explicaciones mínimas | Documentación incompleta o ausente |

## Recursos Útiles

### Guías de Métodos de Diseño
- 📖 [Guía Completa de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Guía Completa de CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Elige la Herramienta Correcta](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

### Herramientas para Prueba en Navegadores
- 🛠️ [Modo Responsivo de DevTools de Navegador](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Soporte de Características](https://caniuse.com/)
- 🛠️ [BrowserStack - Pruebas entre Navegadores](https://www.browserstack.com/)

### Herramientas para Calidad de Código
- ✅ [Validador CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validador HTML](https://validator.w3.org/)
- ✅ [Comprobador de Contraste WebAIM](https://webaim.org/resources/contrastchecker/)

## Retos Adicionales

🌟 **Diseños Avanzados**: Implementa Flexbox Y Grid en diferentes partes de tu diseño  
🌟 **Integración de Animaciones**: Añade transiciones o animaciones CSS que funcionen con tu nuevo diseño  
🌟 **Modo Oscuro**: Implementa un conmutador de tema basado en propiedades personalizadas de CSS  
🌟 **Consultas de Contenedor**: Usa técnicas modernas de consultas de contenedor para responsividad a nivel de componente

> 💡 **Recuerda**: ¡El objetivo no es solo hacerlo funcionar, sino entender POR QUÉ tu método de diseño elegido es la mejor solución para este desafío particular!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional humana. No nos hacemos responsables de ningún malentendido o interpretación errónea que pueda surgir del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->