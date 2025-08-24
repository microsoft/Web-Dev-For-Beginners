<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-24T12:27:13+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "es"
}
-->
# Construir un Juego Espacial Parte 5: Puntuación y Vidas

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

En esta lección, aprenderás cómo agregar puntuación a un juego y calcular vidas.

## Dibujar texto en la pantalla

Para poder mostrar la puntuación del juego en la pantalla, necesitas saber cómo colocar texto en ella. La respuesta es usar el método `fillText()` en el objeto canvas. También puedes controlar otros aspectos como qué fuente usar, el color del texto e incluso su alineación (izquierda, derecha, centro). A continuación, hay un código que dibuja texto en la pantalla.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lee más sobre [cómo agregar texto a un canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ¡y siéntete libre de hacerlo más llamativo!

## La vida, como concepto de juego

El concepto de tener vidas en un juego es simplemente un número. En el contexto de un juego espacial, es común asignar un conjunto de vidas que se van descontando una por una cuando tu nave recibe daño. Es agradable si puedes mostrar una representación gráfica de esto, como mini-naves o corazones en lugar de un número.

## Qué construir

Vamos a agregar lo siguiente a tu juego:

- **Puntuación del juego**: Por cada nave enemiga que sea destruida, el héroe debería recibir algunos puntos; sugerimos 100 puntos por nave. La puntuación del juego debería mostrarse en la parte inferior izquierda.
- **Vidas**: Tu nave tiene tres vidas. Pierdes una vida cada vez que una nave enemiga choca contigo. Las vidas deberían mostrarse en la parte inferior derecha y estar representadas por el siguiente gráfico ![imagen de vida](../../../../6-space-game/5-keeping-score/solution/assets/life.png).

## Pasos recomendados

Ubica los archivos que se han creado para ti en la subcarpeta `your-work`. Debería contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Inicia tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abre un navegador e ingresa esa dirección; en este momento debería renderizar al héroe y todos los enemigos, y al presionar las flechas izquierda y derecha, el héroe se moverá y podrá disparar a los enemigos.

### Agregar código

1. **Copia los recursos necesarios** desde la carpeta `solution/assets/` a la carpeta `your-work`; agregarás el recurso `life.png`. Agrega el `lifeImg` a la función window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Agrega el `lifeImg` a la lista de recursos:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Agrega variables**. Agrega código que represente tu puntuación total (0) y las vidas restantes (3), mostrando estas puntuaciones en la pantalla.

3. **Extiende la función `updateGameObjects()`**. Extiende la función `updateGameObjects()` para manejar las colisiones con enemigos:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Agrega `vidas` y `puntos`**. 
   1. **Inicializa variables**. Debajo de `this.cooldown = 0` en la clase `Hero`, establece vidas y puntos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Dibuja las variables en la pantalla**. Dibuja estos valores en la pantalla:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Agrega métodos al bucle del juego**. Asegúrate de agregar estas funciones a tu función window.onload debajo de `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementa las reglas del juego**. Implementa las siguientes reglas del juego:

   1. **Por cada colisión entre el héroe y un enemigo**, descuenta una vida.
   
      Extiende la clase `Hero` para realizar esta deducción:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Por cada láser que golpee a un enemigo**, incrementa la puntuación del juego en 100 puntos.

      Extiende la clase `Hero` para realizar este incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Agrega estas funciones a tus emisores de eventos de colisión:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Investiga un poco para descubrir otros juegos que se han creado usando JavaScript/Canvas. ¿Cuáles son sus características comunes?

Al final de este trabajo, deberías ver las pequeñas naves de 'vida' en la parte inferior derecha, los puntos en la parte inferior izquierda, y deberías ver cómo tu contador de vidas disminuye al chocar con enemigos y cómo tus puntos aumentan al dispararles. ¡Bien hecho! Tu juego está casi completo.

---

## 🚀 Desafío

Tu código está casi completo. ¿Puedes imaginar tus próximos pasos?

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Repaso y Estudio Personal

Investiga algunas formas en las que puedes incrementar y decrementar las puntuaciones y vidas en un juego. Hay algunos motores de juego interesantes como [PlayFab](https://playfab.com). ¿Cómo podría usar uno de estos mejorar tu juego?

## Tarea

[Construir un Juego de Puntuación](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.