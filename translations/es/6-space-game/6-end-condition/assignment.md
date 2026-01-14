<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2026-01-06T07:30:37+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "es"
}
-->
# Construir un Juego de Ejemplo

## Resumen de la Tarea

Ahora que has dominado las condiciones de fin de juego y la funcionalidad de reinicio en tu juego espacial, es hora de aplicar estos conceptos a una experiencia de juego completamente nueva. Diseñarás y construirás tu propio juego que demuestre diferentes patrones de condiciones de fin y mecánicas de reinicio.

Esta tarea te desafía a pensar creativamente sobre el diseño de juegos mientras practicas las habilidades técnicas que has aprendido. Explorarás diferentes escenarios de victoria y derrota, implementarás la progresión del jugador y crearás experiencias atractivas de reinicio.

## Requisitos del Proyecto

### Características Núcleo del Juego

Tu juego debe incluir los siguientes elementos esenciales:

**Variedad en la Condición de Fin**: Implementa al menos dos formas diferentes en que el juego pueda terminar:
- **Victoria basada en puntos**: El jugador alcanza una puntuación objetivo o colecciona ítems específicos
- **Derrota basada en vidas**: El jugador pierde todas las vidas o puntos de salud disponibles
- **Cumplimiento de objetivos**: Todos los enemigos son derrotados, se recogen ítems específicos o se logran metas
- **Basado en tiempo**: El juego termina después de una duración establecida o cuando la cuenta regresiva llegue a cero

**Funcionalidad de Reinicio**: 
- **Limpiar el estado del juego**: Elimina todos los objetos de juego previos y reinicia variables
- **Reinicializar sistemas**: Comienza fresco con nuevas estadísticas del jugador, enemigos y objetivos
- **Controles amigables para el usuario**: Proporciona instrucciones claras para reiniciar el juego

**Retroalimentación para el Jugador**:
- **Mensajes de victoria**: Celebra los logros del jugador con comentarios positivos
- **Mensajes de derrota**: Proporciona mensajes alentadores que motiven a volver a jugar
- **Indicadores de progreso**: Muestra la puntuación actual, vidas o estado de objetivos

### Ideas y Inspiración para el Juego

Elige uno de estos conceptos de juego o crea el tuyo propio:

#### 1. Juego de Aventura en Consola
Crea una aventura basada en texto con mecánicas de combate:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Características clave para implementar:**
- **Combate por turnos** con diferentes opciones de ataque
- **Puntos de salud** tanto para el jugador como para los enemigos
- **Sistema de inventario** para coleccionar monedas o ítems
- **Múltiples tipos de enemigos** con dificultad variable
- **Condición de victoria** cuando todos los enemigos son derrotados

#### 2. Juego de Colección
- **Objetivo**: Coleccionar ítems específicos mientras evitas obstáculos
- **Condiciones de fin**: Alcanzar la cantidad objetivo de colección o perder todas las vidas
- **Progresión**: Los ítems se vuelven más difíciles de alcanzar conforme avanza el juego

#### 3. Juego de Rompecabezas
- **Objetivo**: Resolver rompecabezas cada vez más difíciles
- **Condiciones de fin**: Completar todos los niveles o quedarse sin movimientos/tiempo
- **Reiniciar**: Volver al primer nivel con progreso borrado

#### 4. Juego de Defensa
- **Objetivo**: Proteger tu base de oleadas de enemigos
- **Condiciones de fin**: Sobrevivir todas las oleadas (victoria) o que la base sea destruida (derrota)
- **Progresión**: Las oleadas de enemigos aumentan en dificultad y número

## Guía de Implementación

### Para Comenzar

1. **Planifica el diseño de tu juego**:
   - Esboza el bucle básico de juego
   - Define claramente tus condiciones de fin
   - Identifica qué datos necesitas reiniciar al reiniciar el juego

2. **Configura la estructura de tu proyecto**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Crea tu bucle principal del juego**:
   - Inicializa el estado del juego
   - Maneja la entrada del usuario
   - Actualiza la lógica del juego
   - Verifica las condiciones de fin
   - Renderiza el estado actual

### Requisitos Técnicos

**Usa JavaScript Moderno**: 
- Aplica `const` y `let` para declaraciones de variables
- Usa funciones flecha donde sea apropiado
- Implementa características ES6+ como literales de plantilla y destructuración

**Arquitectura Orientada a Eventos**:
- Crea manejadores de eventos para interacciones del usuario
- Implementa cambios de estado del juego mediante eventos
- Usa escuchadores de eventos para la funcionalidad de reinicio

**Prácticas de Código Limpio**:
- Escribe funciones con responsabilidades únicas
- Usa nombres descriptivos para variables y funciones
- Añade comentarios explicando la lógica y reglas del juego
- Organiza el código en secciones lógicas

## Requisitos de Entrega

### Entregables

1. **Archivos completos del juego**: Todos los archivos HTML, CSS y JavaScript necesarios para ejecutar tu juego
2. **README.md**: Documentación que explique:
   - Cómo jugar tu juego
   - Qué condiciones de fin implementaste
   - Instrucciones para reiniciar
   - Cualquier característica o mecánica especial
3. **Comentarios en el código**: Explicaciones claras de la lógica y algoritmos de tu juego

### Lista de Verificación para Pruebas

Antes de entregar, verifica que tu juego:

- [ ] **Se ejecute sin errores** en la consola del navegador
- [ ] **Implemente múltiples condiciones de fin** según lo especificado
- [ ] **Se reinicie correctamente** con el estado limpio restaurado
- [ ] **Proporcione retroalimentación clara** a los jugadores sobre el estado del juego
- [ ] **Utilice sintaxis y mejores prácticas modernas de JavaScript**
- [ ] **Incluya documentación completa** en README.md

## Rubrica de Evaluación

| Criterios | Ejemplar (4) | Competente (3) | En Desarrollo (2) | Principiante (1) |
|----------|---------------|----------------|----------------|--------------|
| **Funcionalidad del Juego** | Juego completo con múltiples condiciones de fin, reinicio fluido y experiencia de juego pulida | Juego completo con condiciones de fin básicas y mecanismo de reinicio funcional | Juego parcial con algunas condiciones de fin implementadas, el reinicio puede tener problemas menores | Juego incompleto con funcionalidad limitada y errores significativos |
| **Calidad del Código** | Código limpio, bien organizado usando prácticas modernas de JavaScript, comentarios completos y excelente estructura | Buena organización del código con sintaxis moderna, comentarios adecuados y estructura clara | Organización básica del código con algunas prácticas modernas, comentarios mínimos | Pobre organización del código, sintaxis antigua, falta de comentarios y estructura |
| **Experiencia del Usuario** | Jugabilidad intuitiva con instrucciones claras, excelente retroalimentación y experiencia atractiva de fin/reinicio | Buena jugabilidad con instrucciones y retroalimentación adecuadas, fin/reinicio funcional | Jugabilidad básica con instrucciones mínimas, retroalimentación limitada sobre el estado del juego | Jugabilidad confusa con instrucciones poco claras y mala retroalimentación al usuario |
| **Implementación Técnica** | Demuestra dominio de conceptos de desarrollo de juegos, manejo de eventos y gestión de estado | Muestra buena comprensión de conceptos de juegos con buena implementación | Comprensión básica con implementación aceptable | Comprensión limitada con mala implementación |
| **Documentación** | README completo con instrucciones claras, código bien documentado y evidencia de pruebas exhaustivas | Buena documentación con instrucciones claras y comentarios adecuados en el código | Documentación básica con instrucciones mínimas | Documentación pobre o ausente |

### Escala de Calificación
- **Ejemplar (16-20 puntos)**: Supera expectativas con características creativas e implementación pulida
- **Competente (12-15 puntos)**: Cumple todos los requisitos con ejecución sólida
- **En Desarrollo (8-11 puntos)**: Cumple la mayoría de los requisitos con problemas menores
- **Principiante (4-7 puntos)**: Cumple algunos requisitos pero necesita mejoras significativas

## Recursos Adicionales para Aprendizaje

- [Guía de Desarrollo de Juegos en MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutoriales de Desarrollo de Juegos con JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Documentación de Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principios de Diseño de Juegos](https://www.gamasutra.com/blogs/)

> 💡 **Consejo Profesional**: Empieza simple y agrega funciones de forma incremental. ¡Un juego simple bien pulido es mejor que un juego complejo con errores!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de cualquier malentendido o interpretación errónea derivada del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->