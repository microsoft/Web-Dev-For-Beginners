# Construye un juego espacial Parte VI: Finalizar y reiniciar

![video](video-url)

## [Pre-lecture prueba](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/39)

Hay diferentes formas de expresar y *condición final* en un juego. Depende de usted, como creador del juego, decir por qué ha terminado. Aquí hay algunas razones, si asumimos que estamos hablando del juego espacial que has estado construyendo hasta ahora:

- **Las naves `N` enemigas han sido destruidas**: Es bastante común si divides un juego en diferentes niveles que necesites destruir las naves `N` Enemy para completar un nivel
- **Tu nave ha sido destruida**: Definitivamente hay juegos en los que pierdes el juego si tu nave es destruida. Otro enfoque común es que tienes el concepto de vidas. Cada vez que un barco es destruido, se descuenta una vida. Una vez que se hayan perdido todas las vidas, perderá el juego.
- **Has acumulado `N` puntos**: Otra condición final común es que acumules puntos. La forma de obtener puntos depende de usted, pero es bastante común asignar puntos a diversas actividades, como destruir una nave enemiga o tal vez recolectar elementos que los elementos *sueltan* cuando son destruidos.
- **Completa un nivel**: Esto puede implicar varias condiciones como "X" barcos enemigos destruidos, puntos "Y" acumulados o tal vez que se haya recogido un objeto específico.

## Reiniciando

Si las personas disfrutan de tu juego, es probable que quieran volver a jugarlo. Una vez que el juego termina por cualquier motivo, debes ofrecer una alternativa para reiniciar.

✅ Piensa un poco en las condiciones en las que encuentras que termina un juego y luego cómo se te pide que reinicies

## Qué construir

Agregará estas reglas a su juego:

1. **Ganar el juego**. Una vez que todas las naves enemigas hayan sido destruidas, ganas el juego. Además, muestra algún tipo de mensaje de victoria.
1. **Reiniciar**. Una vez que hayas perdido todas tus vidas o hayas ganado el juego, debes ofrecer una forma de reiniciar el juego. ¡Recuerda! Deberá reinicializar el juego y se debe borrar el estado anterior del juego.

## Pasos recomendados

Busque los archivos que se han creado para usted en la subcarpeta `your-work`. Debe contener lo siguiente:

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

Comienzas tu proyecto en la carpeta `your_work` escribiendo:

```bash
cd your-work
npm start
```

Lo anterior iniciará un servidor HTTP en la dirección `http://localhost:5000`. Abra un navegador e ingrese esa dirección. Tu juego debe estar en un estado jugable.

> consejo: para evitar advertencias en Visual Studio Code, edite la función `window.onload` para llamar a `gameLoopId` tal cual (sin `let`), y declare el gameLoopId en la parte superior del archivo, independientemente: `let gameLoopId;`

### Agregar código

1. **Condición de fin de pista**. Agregue un código que realice un seguimiento de la cantidad de enemigos o si el barco héroe ha sido destruido agregando estas dos funciones:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Agregar lógica a los controladores de mensajes**. Edite el `eventEmitter` para manejar estas condiciones:

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

1. **Agregar nuevos tipos de mensajes**. Agregue estos mensajes al objeto de constantes:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Agregar código de reinicio** código que reinicia el juego con solo presionar un botón seleccionado.

    1. **Escuche la tecla "Enter"**. Edite el eventListener de su ventana para escuchar esta prensa:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

1. **Agregar mensaje de reinicio**. Agregue este mensaje a su constante de Mensajes:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementar las reglas del juego**. Implementa las siguientes reglas del juego:

    1. **Condición de victoria del jugador**. Cuando todos los barcos enemigos sean destruidos, muestra un mensaje de victoria.

       1. Primero, cree una función `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Cree una función `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // establece una demora para estar seguros de que las pinturas han terminado
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

   1. **Reiniciar la lógica**. Cuando se pierdan todas las vidas o el jugador haya ganado el juego, muestre que el juego se puede reiniciar. Además, reinicie el juego cuando se presione la tecla *reiniciar* (puede decidir qué tecla debe asignarse para reiniciar).

       1. Cree la función `resetGame()`:

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

     1. Agrega una llamada al `eventEmitter` para reiniciar el juego en `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Agregue una función `clear()` al EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 ¡Felicitaciones, Capitán! ¡Tu juego está completo! ¡Bien hecho! 🚀 💥 👽

🚀 Desafío: ¡Agrega un sonido! ¿Puedes agregar un sonido para mejorar tu juego, tal vez cuando hay un golpe de láser, o el héroe muere o gana? Eche un vistazo a este [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) para aprender a reproducir sonido con JavaScript.

## [Post-lecture prueba]((https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/40)

## Revisión y autoestudio

Tu tarea es crear un juego de muestra nuevo, así que explora algunos de los juegos interesantes que existen para ver qué tipo de juego podrías construir.

**Tarea**: [Crear un juego de muestra](assignment.es.md)
