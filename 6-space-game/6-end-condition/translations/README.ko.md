# Space 게임 제작하기 파트 6: 끝과 재시작

## 강의 전 퀴즈

[Pre-lecture quiz](../.github/pre-lecture-quiz.md)

게임에서 *조건을 표현하고 종료*하는 여러 방식이 있습니다. 게임이 종료된 이유를 말하는 것은 게임 크리에이터의 일입니다. 지금까지 만든 space 게임에 대해 말하고 있다고 가정하면, 몇 가지 이유가 있습니다:

- **`N`개의 적 배가 파괴되었습니다**: 게임을 여러 레벨로 나누면 레벨을 완료하기 위해 `N`개의 적 배를 부숴야하는 경우가 매우 흔합니다.
- **배가 파괴되었습니다**: 배가 부서지면 지는 게임이 분명 있습니다. 또 다른 일반적인 접근 방식은 생명의 컨셉을 가지고 있다는 점입니다. 배가 부서질 때마다 생명이 깍입니다. 모든 목숨을 잃으면 게임에서 집니다.
- **`N` 점수를 모았습니다**: 또 다른 종료 조건은 점수를 모으는 것입니다. 점수를 얻는 방법으로 각자 배를 파괴하는 것처럼 다양한 활동에 점수를 할당하거나 아이템이 부서질 때마다 *떨구는* 아이템을 수집하는 것은 매우 일반적입니다.
- **레벨을 완료했습니다**: 적 배를 `X` 번 부시거나, `Y` 점수를 수집하거나 특정 아이템을 수집하는 것처럼 여러 조건들을 여기에 포함할 수 있습니다.

## 다시 시작하기

사람들이 게임을 즐기고 있다면 다시 플레이하고 싶어합니다. 어떤 이유든지 게임이 끝나면 다시 시작할 수 있는 대안을 줘야합니다.

✅ 어떤 조건에서 게임이 끝나는 지에 대하여 찾고, 다시 시작이라는 메시지가 어떻게 보일지 생각해보세요

## 무엇을 만드나요

게임에 다음 규칙을 추가합니다:

1. **게임에 우승합니다**. 모든 적의 배가 부서지면, 게임에서 승리합니다. 추가로 일종의 승리 메시지를 출력합니다.
1. **다시 시작합니다**. 모든 생명을 잃거나 게임에서 이긴다면, 게임을 다시 시작할 방법을 제공해야 합니다. 생각해보세요! 게임을 다시 초기화하고 이전 게임 상태를 깨끗이 지워야 합니다.

## 권장 단계

`your-work` 하위 폴더에서 생성된 파일을 찾습니다. 다음을 포함해야 합니다:

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

타이핑해서 `your_work` 폴더에 프로젝트를 시작합니다:

```bash
cd your-work
npm start
```

위 코드는 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력합니다. 게임은 플레이 가능한 상태여야 합니다.

> tip: Visual Studio Code에서 경고를 보이지 않게 하려면, `gameLoopId`를 (`let`없이) 그대로 호출하도록 `window.onload` 함수를 편집하고, 파일 최상단에 gameLoopId를 독립적으로 선언합니다: `let gameLoopId;`

### 코드 추가하기

1. **종료 조건을 추적합니다**. 다음 두 함수를 추가하여 적의 수를 추적하거나, 영웅의 배가 부서진 경우도 추적해주는 코드를 추가합니다:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **메시지 핸들러에 로직을 추가합니다**. 이 조건을 제어하도록 `eventEmitter`를 편집합니다:

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

1. **새로운 메시지 타입을 추가합니다**. 상수 객체에 이 메시지를 추가합니다:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **재시작 코드를 추가합니다** 선택한 버튼을 누르면 게임을 다시 시작하는 코드입니다.

   1. **`Enter` 누를 키를 수신합니다**. 누르는 것을 수신하도록 윈도우의 이벤트 리스너를 편집합니다:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **재시작 메시지 추가하기**. 메시지를 메시지 상수에 추가합니다:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **게임 규칙을 구현합니다**.  다음 게임 규칙을 구현합니다:

   1. **플레이어 승리 조건입니다**. 적 배가 모두 파괴되면, 승리 메시지를 출력합니다.

      1. 먼저, `displayMessage()` 함수를 만듭니다:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. `endGame()` 함수를 만듭니다:

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

   1. **로직을 다시 시작합니다**. 모든 생명을 잃거나 플레이어가 게임에서 이긴다면, 게임을 다시 시작할 수 있다고 출력합니다. 추가로 *restart* 키를 누르면 게임을 다시 시작합니다 (다시 시작하기 위해 매핑할 키를 고를 수 있습니다).

      1. `resetGame()` 함수를 만듭니다:

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

     1. `initGame()`에서 게임을 다시 설정하기 위해 `eventEmitter`에 호출하도록 추가합니다:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter에 `clear()` 힘수를 추가합니다:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 축하합니다, 대장! 게임이 완성되었습니다! 잘 하셨습니다! 🚀 💥 👽

---

## 🚀 도전

소리를 추가해보세요! 레이저가 때리거나, 영웅이 죽고 이길 때, 소리를 추가하여 게임 플레이를 향상시킬 수 있나요? [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play)에서 JavaScript로 소리를 재생하는 방법에 대하여 알아보세요

## 강의 후 퀴즈

[Post-lecture quiz](../.github/post-lecture-quiz.md)

## 리뷰 & 자기주도 학습

과제는 새로운 샘플 게임을 만드는 것이므로, 어떤 타입의 게임을 만들 수 있는지 알아보고 흥미로운 게임을 찾아보세요.

## 과제

[Build a Sample Game](../assignment.md)
