<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:25:53+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sr"
}
-->
# Направите свемирску игру, део 6: Крај и поновни почетак

## Квиз пре предавања

[Квиз пре предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Постоје различити начини да се изрази *услов за крај* у игри. На вама као креатору игре је да одредите зашто је игра завршена. Ево неких разлога, ако претпоставимо да говоримо о свемирској игри коју сте до сада правили:

- **Уништили сте `N` непријатељских бродова**: Ово је прилично уобичајено ако игру делите на различите нивое, где је потребно уништити `N` непријатељских бродова да бисте завршили ниво.
- **Ваш брод је уништен**: Постоје игре у којима губите ако је ваш брод уништен. Други уобичајени приступ је концепт живота. Сваки пут када је ваш брод уништен, одузима се један живот. Када изгубите све животе, губите игру.
- **Сакупили сте `N` поена**: Још један уобичајени услов за крај је сакупљање поена. Како добијате поене зависи од вас, али је уобичајено да се поени додељују за различите активности, као што је уништавање непријатељског брода или сакупљање предмета који се *испусте* када су уништени.
- **Завршили сте ниво**: Ово може укључивати неколико услова, као што су уништено `X` непријатељских бродова, сакупљено `Y` поена или можда сакупљен одређени предмет.

## Поновни почетак

Ако људи уживају у вашој игри, вероватно ће желети да је поново играју. Када се игра заврши из било ког разлога, требало би да понудите опцију за поновни почетак.

✅ Размислите о условима под којима се игра завршава, а затим како се нуди опција за поновни почетак.

## Шта треба направити

Додаћете следећа правила у вашу игру:

1. **Победа у игри**. Када су сви непријатељски бродови уништени, побеђујете у игри. Поред тога, прикажите неку врсту поруке о победи.
1. **Поновни почетак**. Када изгубите све животе или победите у игри, требало би да понудите начин за поновни почетак игре. Запамтите! Потребно је да поново иницијализујете игру и очистите претходно стање игре.

## Препоручени кораци

Пронађите датотеке које су креиране за вас у подфолдеру `your-work`. Требало би да садрже следеће:

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

Започните свој пројекат у фолдеру `your_work` тако што ћете укуцати:

```bash
cd your-work
npm start
```

Горњи код ће покренути HTTP сервер на адреси `http://localhost:5000`. Отворите претраживач и унесите ту адресу. Ваша игра би требало да буде у стању да се игра.

> савет: да бисте избегли упозорења у Visual Studio Code-у, измените функцију `window.onload` тако да позива `gameLoopId` без `let`, и декларишите `gameLoopId` на врху датотеке, независно: `let gameLoopId;`

### Додајте код

1. **Пратите услов за крај**. Додајте код који прати број непријатеља или ако је херојски брод уништен додавањем ове две функције:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Додајте логику у обрађиваче порука**. Измените `eventEmitter` да обрађује ове услове:

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

1. **Додајте нове типове порука**. Додајте ове поруке у објекат константи:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Додајте код за поновни почетак** који поново покреће игру притиском на изабрано дугме.

   1. **Слушајте притисак тастера `Enter`**. Измените слушач догађаја вашег прозора да слуша овај притисак:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Додајте поруку за поновни почетак**. Додајте ову поруку у константу Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Примените правила игре**. Примените следећа правила игре:

   1. **Услов за победу играча**. Када су сви непријатељски бродови уништени, прикажите поруку о победи.

      1. Прво, креирајте функцију `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Креирајте функцију `endGame()`:

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

   1. **Логика за поновни почетак**. Када су сви животи изгубљени или играч победи у игри, прикажите да игра може бити поново покренута. Поред тога, поново покрените игру када се притисне тастер за *поновни почетак* (можете одлучити који тастер ће бити мапиран за поновни почетак).

      1. Креирајте функцију `resetGame()`:

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

     1. Додајте позив `eventEmitter`-у да ресетује игру у `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Додајте функцију `clear()` у EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Честитамо, Капетане! Ваша игра је завршена! Браво! 🚀 💥 👽

---

## 🚀 Изазов

Додајте звук! Можете ли додати звук да побољшате игру, можда када се догоди погодак ласером, или када херој умре или победи? Погледајте овај [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) да научите како да пуштате звук помоћу JavaScript-а.

## Квиз после предавања

[Квиз после предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Преглед и самостално учење

Ваш задатак је да направите нову узорну игру, па истражите неке занимљиве игре како бисте видели какав тип игре можете направити.

## Задатак

[Направите узорну игру](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.