<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-24T12:42:28+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "es"
}
-->
# Construye un Juego Espacial Parte 6: Final y Reinicio

## Cuestionario Previo a la Clase

[Cuestionario previo a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Existen diferentes maneras de expresar una *condición de finalización* en un juego. Depende de ti, como creador del juego, decidir por qué el juego ha terminado. Aquí tienes algunas razones, suponiendo que estamos hablando del juego espacial que has estado construyendo hasta ahora:

- **Se han destruido `N` naves enemigas**: Es bastante común, si divides un juego en diferentes niveles, que necesites destruir `N` naves enemigas para completar un nivel.
- **Tu nave ha sido destruida**: Hay juegos en los que pierdes si tu nave es destruida. Otro enfoque común es tener el concepto de vidas. Cada vez que tu nave es destruida, pierdes una vida. Una vez que todas las vidas se han perdido, pierdes el juego.
- **Has recolectado `N` puntos**: Otra condición común de finalización es recolectar puntos. Cómo obtienes puntos depende de ti, pero es común asignar puntos a actividades como destruir una nave enemiga o recolectar objetos que caen cuando son destruidos.
- **Completar un nivel**: Esto podría implicar varias condiciones, como destruir `X` naves enemigas, recolectar `Y` puntos o tal vez recolectar un objeto específico.

## Reinicio

Si a las personas les gusta tu juego, es probable que quieran jugarlo de nuevo. Una vez que el juego termina por cualquier razón, deberías ofrecer una alternativa para reiniciarlo.

✅ Reflexiona un poco sobre en qué condiciones consideras que un juego termina y cómo se te invita a reiniciarlo.

## Qué construir

Añadirás estas reglas a tu juego:

1. **Ganar el juego**. Una vez que todas las naves enemigas hayan sido destruidas, ganas el juego. Además, muestra algún tipo de mensaje de victoria.
1. **Reiniciar**. Una vez que todas tus vidas se hayan perdido o el juego haya sido ganado, deberías ofrecer una forma de reiniciar el juego. ¡Recuerda! Necesitarás reinicializar el juego y borrar el estado anterior.

## Pasos recomendados

Ubica los archivos que se han creado para ti en la subcarpeta `your-work`. Debería contener lo siguiente:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Inicia tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abre un navegador e ingresa esa dirección. Tu juego debería estar en un estado jugable.

> consejo: para evitar advertencias en Visual Studio Code, edita la función `window.onload` para llamar a `gameLoopId` tal cual (sin `let`), y declara `gameLoopId` al inicio del archivo, de forma independiente: `let gameLoopId;`

### Agregar código

1. **Rastrear la condición de finalización**. Agrega código que haga un seguimiento del número de enemigos o si la nave del héroe ha sido destruida añadiendo estas dos funciones:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Agregar lógica a los manejadores de mensajes**. Edita el `eventEmitter` para manejar estas condiciones:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Agregar nuevos tipos de mensajes**. Añade estos mensajes al objeto de constantes:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Agregar código de reinicio** que reinicie el juego al presionar un botón seleccionado.

   1. **Escuchar la tecla `Enter`**. Edita el eventListener de tu ventana para escuchar esta tecla:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Agregar mensaje de reinicio**. Añade este mensaje a tu constante de mensajes:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementar reglas del juego**. Implementa las siguientes reglas del juego:

   1. **Condición de victoria del jugador**. Cuando todas las naves enemigas sean destruidas, muestra un mensaje de victoria.

      1. Primero, crea una función `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Crea una función `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **Lógica de reinicio**. Cuando todas las vidas se pierdan o el jugador gane el juego, muestra que el juego puede reiniciarse. Además, reinicia el juego cuando se presione la tecla de *reinicio* (puedes decidir qué tecla se asignará para reiniciar).

      1. Crea la función `resetGame()`:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. Añade una llamada al `eventEmitter` para reiniciar el juego en `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Añade una función `clear()` al EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 ¡Felicidades, Capitán! ¡Tu juego está completo! ¡Bien hecho! 🚀 💥 👽

---

## 🚀 Desafío

¡Añade un sonido! ¿Puedes agregar un sonido para mejorar la experiencia de juego? Tal vez cuando haya un impacto de láser, o cuando el héroe muera o gane. Echa un vistazo a este [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) para aprender cómo reproducir sonido usando JavaScript.

## Cuestionario Posterior a la Clase

[Cuestionario posterior a la clase](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Revisión y Autoestudio

Tu tarea es crear un nuevo juego de muestra, así que explora algunos de los juegos interesantes que existen para ver qué tipo de juego podrías construir.

## Tarea

[Construye un Juego de Muestra](assignment.md)

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.