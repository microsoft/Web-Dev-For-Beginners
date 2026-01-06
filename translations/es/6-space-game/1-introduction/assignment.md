<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2026-01-06T07:33:55+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "es"
}
-->
# Simula un Juego: Aplica Patrones de Diseño

## Resumen de la Tarea

¡Pon a trabajar tus nuevos conocimientos sobre patrones de diseño creando un prototipo de juego simple! Esta tarea te ayudará a practicar tanto patrones arquitectónicos (herencia o composición) como el sistema de comunicación pub/sub que aprendiste en la lección.

## Instrucciones

Crea una representación simple de un juego que demuestre los patrones de diseño de esta lección. Tu juego debe ser funcional, pero no necesita gráficos complejos: enfócate en la arquitectura subyacente y los patrones de comunicación.

### Requisitos

**Elige tu Patrón de Arquitectura:**
- **Opción A**: Usa herencia basada en clases (como el ejemplo `GameObject` → `Movable` → `Hero`)
- **Opción B**: Usa composición (como el enfoque de función fábrica con comportamientos mezclados)

**Implementa Comunicación:**
- **Incluye** una clase `EventEmitter` para mensajería pub/sub
- **Configura** al menos 2-3 tipos diferentes de mensajes (como `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Conecta** la entrada del usuario (teclado/ratón) a los eventos del juego a través del sistema de eventos

**Elementos del Juego a Incluir:**
- Al menos un personaje controlado por el jugador
- Al menos otro objeto del juego (enemigo, objeto coleccionable o elemento ambiental)
- Interacción básica entre objetos (colisión, recolección o comunicación)

### Ideas Sugeridas de Juegos

**Juegos Simples para Considerar:**
- **Juego de la Serpiente** – Los segmentos de la serpiente siguen la cabeza, la comida aparece aleatoriamente
- **Variación de Pong** – La pala responde a la entrada, la pelota rebota en las paredes
- **Juego de Colección** – El jugador se mueve recogiendo objetos mientras evita obstáculos
- **Conceptos Básicos de Tower Defense** – Torres detectan y disparan a enemigos en movimiento

### Guía de Estructura de Código

```javascript
// Ejemplo de estructura inicial
const Messages = {
  // Define aquí los mensajes de tu juego
};

class EventEmitter {
  // Tu implementación del sistema de eventos
}

// Elige el enfoque basado en clases O composicional
// Ejemplo basado en clases:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// O ejemplo de composición:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Prueba tu Implementación

**Verifica que tu código funcione:**
- **Probando** que los objetos se muevan o cambien cuando se disparan eventos
- **Confirmando** que múltiples objetos puedan responder al mismo evento
- **Comprobando** que puedas añadir nuevos comportamientos sin modificar el código existente
- **Asegurando** que la entrada del teclado/ratón active correctamente los eventos del juego

## Requisitos para la Entrega

**Tu entrega debe incluir:**
1. **Archivo(s) JavaScript** con la implementación de tu juego
2. **Archivo HTML** para ejecutar y probar tu juego (puede ser simple)
3. **Comentarios** explicando qué patrón elegiste y por qué
4. **Documentación breve** de tus tipos de mensajes y qué hacen

## Rúbrica

| Criterios | Ejemplar (3 puntos) | Adecuado (2 puntos) | Necesita Mejorar (1 punto) |
|----------|---------------------|---------------------|----------------------------|
| **Patrón Arquitectónico** | Implementa correctamente herencia O composición con jerarquía clara de clases/objetos | Usa el patrón elegido con pequeños problemas o inconsistencias | Intenta usar el patrón pero la implementación tiene problemas significativos |
| **Implementación Pub/Sub** | EventEmitter funciona correctamente con múltiples tipos de mensajes y flujo adecuado de eventos | Sistema pub/sub básico funciona con algo de manejo de eventos | Sistema de eventos presente pero no funciona de forma confiable |
| **Funcionalidad del Juego** | Tres o más elementos interactivos que se comunican mediante eventos | Dos elementos interactivos con comunicación básica de eventos | Un elemento responde a eventos o interacción básica |
| **Calidad del Código** | Código limpio, bien comentado, con organización lógica y JavaScript moderno | Código generalmente bien organizado con comentarios adecuados | El código funciona pero carece de organización o comentarios claros |

**Puntos Extra:**
- **Mecánicas creativas de juego** que muestren usos interesantes de los patrones
- **Múltiples métodos de entrada** (eventos de teclado Y ratón)
- **Arquitectura escalable** que sea fácil de ampliar con nuevas características

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción humana profesional. No nos hacemos responsables por malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->