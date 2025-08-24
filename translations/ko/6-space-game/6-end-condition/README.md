<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-23T23:08:19+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 Part 6: 종료 및 재시작

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

게임에서 *종료 조건*을 표현하는 방법은 여러 가지가 있습니다. 게임 제작자인 여러분이 게임이 왜 종료되었는지 결정해야 합니다. 지금까지 만들어온 우주 게임을 기준으로 몇 가지 종료 조건을 살펴보겠습니다:

- **`N`개의 적 함선이 파괴됨**: 게임을 여러 레벨로 나누는 경우, 특정 레벨을 완료하려면 `N`개의 적 함선을 파괴해야 하는 경우가 흔합니다.
- **플레이어의 함선이 파괴됨**: 플레이어의 함선이 파괴되면 게임에서 패배하는 방식도 자주 사용됩니다. 또 다른 일반적인 접근법은 '목숨' 개념을 도입하는 것입니다. 함선이 파괴될 때마다 목숨이 하나씩 줄어들고, 모든 목숨을 잃으면 게임에서 패배하게 됩니다.
- **`N` 포인트를 획득함**: 또 다른 흔한 종료 조건은 특정 포인트를 획득하는 것입니다. 포인트를 얻는 방법은 다양하지만, 적 함선을 파괴하거나 적이 파괴될 때 떨어지는 아이템을 수집하는 등의 활동에 포인트를 부여하는 경우가 많습니다.
- **레벨 완료**: `X`개의 적 함선 파괴, `Y` 포인트 획득, 특정 아이템 수집 등 여러 조건을 충족해야 레벨을 완료할 수 있습니다.

## 재시작

게임을 즐기는 사람들이 있다면, 게임을 다시 플레이하고 싶어할 가능성이 높습니다. 게임이 어떤 이유로 종료되었든, 재시작 옵션을 제공해야 합니다.

✅ 게임이 종료되는 조건과 재시작을 어떻게 유도하는지에 대해 잠시 생각해 보세요.

## 무엇을 만들 것인가

다음 규칙을 게임에 추가할 것입니다:

1. **게임 승리**: 모든 적 함선이 파괴되면 게임에서 승리합니다. 또한, 승리 메시지를 표시하세요.
1. **재시작**: 모든 목숨을 잃거나 게임에서 승리하면 게임을 재시작할 수 있는 방법을 제공해야 합니다. 기억하세요! 게임을 재초기화하고 이전 게임 상태를 지워야 합니다.

## 추천 단계

`your-work` 하위 폴더에 생성된 파일을 찾아보세요. 다음 파일이 포함되어 있을 것입니다:

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

`your_work` 폴더에서 프로젝트를 시작하려면 다음을 입력하세요:

```bash
cd your-work
npm start
```

위 명령은 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하세요. 게임이 플레이 가능한 상태여야 합니다.

> 팁: Visual Studio Code에서 경고를 피하려면 `window.onload` 함수에서 `gameLoopId`를 호출할 때 `let` 없이 호출하고, 파일 상단에서 `let gameLoopId;`를 독립적으로 선언하세요.

### 코드 추가

1. **종료 조건 추적**: 적 함선 수 또는 플레이어 함선이 파괴되었는지 추적하는 코드를 추가하세요. 다음 두 함수를 추가합니다:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **메시지 핸들러에 로직 추가**: `eventEmitter`를 수정하여 다음 조건을 처리합니다:

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

1. **새 메시지 유형 추가**: 다음 메시지를 constants 객체에 추가합니다:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **재시작 코드 추가**: 선택한 버튼을 눌러 게임을 재시작하는 코드를 추가합니다.

   1. **`Enter` 키 입력 감지**: window의 eventListener를 수정하여 이 키 입력을 감지합니다:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **재시작 메시지 추가**: Messages 상수에 이 메시지를 추가합니다:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **게임 규칙 구현**: 다음 게임 규칙을 구현합니다:

   1. **플레이어 승리 조건**: 모든 적 함선이 파괴되면 승리 메시지를 표시합니다.

      1. 먼저, `displayMessage()` 함수를 생성합니다:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. `endGame()` 함수를 생성합니다:

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

   1. **재시작 로직**: 모든 목숨을 잃거나 플레이어가 게임에서 승리하면 게임을 재시작할 수 있다는 메시지를 표시합니다. 또한, *재시작* 키를 누르면 게임을 재시작합니다(재시작 키는 여러분이 결정할 수 있습니다).

      1. `resetGame()` 함수를 생성합니다:

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

     1. `initGame()`에서 `eventEmitter`를 호출하여 게임을 재설정하는 코드를 추가합니다:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter에 `clear()` 함수를 추가합니다:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 축하합니다, 캡틴! 게임이 완성되었습니다! 잘하셨습니다! 🚀 💥 👽

---

## 🚀 도전 과제

소리를 추가해 보세요! 레이저가 적중하거나, 플레이어가 죽거나 승리할 때 게임 플레이를 향상시킬 수 있는 소리를 추가할 수 있나요? JavaScript를 사용하여 소리를 재생하는 방법을 배우려면 [이 샌드박스](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play)를 확인하세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## 복습 및 자기 학습

새로운 샘플 게임을 만드는 것이 과제입니다. 흥미로운 게임들을 탐험하며 어떤 유형의 게임을 만들지 고민해 보세요.

## 과제

[샘플 게임 만들기](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.