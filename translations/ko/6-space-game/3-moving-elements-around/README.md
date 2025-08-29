<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T15:37:37+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 Part 3: 움직임 추가하기

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/33)

게임은 화면에 외계인이 돌아다니기 시작해야 재미있어집니다! 이번 게임에서는 두 가지 움직임을 활용할 것입니다:

- **키보드/마우스 움직임**: 사용자가 키보드나 마우스를 사용해 화면의 객체를 움직이는 경우.
- **게임 유발 움직임**: 게임이 일정 시간 간격으로 객체를 움직이는 경우.

그렇다면 화면에서 객체를 어떻게 움직일까요? 이는 데카르트 좌표계에 관한 것입니다. 객체의 위치 (x, y)를 변경한 후 화면을 다시 그리는 것입니다.

화면에서 *움직임*을 구현하려면 일반적으로 다음 단계를 따라야 합니다:

1. **새로운 위치 설정**: 객체가 움직였다고 인식되려면 새로운 위치를 설정해야 합니다.
2. **화면 지우기**: 화면은 그리기 사이에 지워져야 합니다. 배경색으로 채운 직사각형을 그려 화면을 지울 수 있습니다.
3. **새로운 위치에서 객체 다시 그리기**: 이를 통해 객체를 한 위치에서 다른 위치로 이동시키는 작업이 완료됩니다.

다음은 코드로 표현된 예시입니다:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ 초당 여러 프레임으로 영웅을 다시 그리면 성능 비용이 발생할 수 있는 이유를 생각해볼 수 있나요? [이 패턴의 대안](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)에 대해 읽어보세요.

## 키보드 이벤트 처리하기

이벤트는 특정 이벤트를 코드에 연결하여 처리합니다. 키보드 이벤트는 전체 창에서 트리거되며, 마우스 이벤트(예: `click`)는 특정 요소를 클릭하는 것과 연결될 수 있습니다. 이번 프로젝트에서는 키보드 이벤트를 사용할 것입니다.

이벤트를 처리하려면 창의 `addEventListener()` 메서드를 사용하고 두 개의 입력 매개변수를 제공해야 합니다. 첫 번째 매개변수는 이벤트 이름(예: `keyup`)이고, 두 번째 매개변수는 이벤트가 발생했을 때 호출될 함수입니다.

다음은 예시입니다:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

키 이벤트의 경우, 눌린 키를 확인하기 위해 이벤트에서 사용할 수 있는 두 가지 속성이 있습니다:

- `key`: 눌린 키의 문자열 표현, 예를 들어 `ArrowUp`.
- `keyCode`: 숫자 표현, 예를 들어 `37`, 이는 `ArrowLeft`에 해당합니다.

✅ 키 이벤트 조작은 게임 개발 외에도 유용합니다. 이 기술을 사용할 수 있는 다른 용도를 생각해볼 수 있나요?

### 특수 키: 주의사항

일부 *특수* 키는 창에 영향을 미칩니다. 즉, `keyup` 이벤트를 듣고 이러한 특수 키를 사용해 영웅을 움직이면 수평 스크롤도 수행됩니다. 따라서 게임을 개발하면서 이러한 기본 브라우저 동작을 *비활성화*하고 싶을 수 있습니다. 이를 위해 다음과 같은 코드가 필요합니다:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

위 코드는 화살표 키와 스페이스 키의 *기본* 동작을 비활성화합니다. *비활성화* 메커니즘은 `e.preventDefault()`를 호출할 때 발생합니다.

## 게임 유발 움직임

`setTimeout()` 또는 `setInterval()` 함수와 같은 타이머를 사용하여 객체의 위치를 각 틱(시간 간격)마다 업데이트함으로써 객체를 스스로 움직이게 할 수 있습니다. 다음은 그 예시입니다:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## 게임 루프

게임 루프는 기본적으로 정기적으로 호출되는 함수입니다. 게임 루프라고 불리는 이유는 사용자에게 보여야 할 모든 것이 루프 안에서 그려지기 때문입니다. 게임 루프는 게임의 모든 객체를 사용하여 그리며, 어떤 이유로든 더 이상 게임의 일부가 아닌 객체는 제외합니다. 예를 들어, 레이저에 맞아 폭발한 적 객체는 더 이상 현재 게임 루프의 일부가 아닙니다(이후 강의에서 더 배울 것입니다).

다음은 코드로 표현된 일반적인 게임 루프입니다:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

위 루프는 캔버스를 다시 그리기 위해 매 `200` 밀리초마다 호출됩니다. 게임에 적합한 간격을 선택할 수 있습니다.

## 우주 게임 계속하기

기존 코드를 확장할 것입니다. Part I에서 완료한 코드를 사용하거나 [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work)의 코드를 사용할 수 있습니다.

- **영웅 움직이기**: 화살표 키를 사용해 영웅을 움직일 수 있도록 코드를 추가합니다.
- **적 움직이기**: 적들이 일정한 속도로 위에서 아래로 움직이도록 코드를 추가합니다.

## 추천 단계

`your-work` 하위 폴더에 생성된 파일을 찾으세요. 다음을 포함해야 합니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

`your_work` 폴더에서 프로젝트를 시작하려면 다음을 입력하세요:

```bash
cd your-work
npm start
```

위 명령은 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하세요. 현재는 영웅과 모든 적들이 렌더링되지만 아직 아무것도 움직이지 않습니다!

### 코드 추가하기

1. **`hero`, `enemy`, `game object`에 대한 전용 객체 추가**: 이 객체들은 `x`와 `y` 속성을 가져야 합니다. ([상속 또는 구성](../README.md) 부분을 기억하세요).

   *힌트* `game object`는 `x`와 `y` 속성을 가지고 있으며 캔버스에 자신을 그릴 수 있는 능력을 가져야 합니다.

   >팁: 아래와 같이 생성자를 가진 새로운 GameObject 클래스를 추가하고 캔버스에 그리기 시작하세요:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    이제 이 GameObject를 확장하여 Hero와 Enemy를 만드세요.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **키 이벤트 핸들러 추가**: 화살표 키를 사용해 영웅을 위/아래, 왼쪽/오른쪽으로 움직이도록 처리합니다.

   *기억하세요* 데카르트 시스템에서 좌상단은 `0,0`입니다. 또한 *기본 동작*을 중지하는 코드를 추가하는 것을 잊지 마세요.

   >팁: onKeyDown 함수를 생성하고 창에 연결하세요:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   이 시점에서 브라우저 콘솔을 확인하고 키 입력이 기록되는 것을 확인하세요.

3. **[Pub sub 패턴](../README.md) 구현**: 남은 부분을 따라가면서 코드를 깔끔하게 유지합니다.

   이를 위해 다음을 수행할 수 있습니다:

   1. **창에 이벤트 리스너 추가**:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **EventEmitter 클래스 생성**: 메시지를 발행하고 구독할 수 있도록 설정합니다:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **상수 추가** 및 EventEmitter 설정:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **게임 초기화**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **게임 루프 설정**

   window.onload 함수를 리팩터링하여 게임을 초기화하고 적절한 간격으로 게임 루프를 설정합니다. 또한 레이저 빔을 추가합니다:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **적들이 일정한 간격으로 움직이도록 코드 추가**

    `createEnemies()` 함수를 리팩터링하여 적들을 생성하고 새로운 gameObjects 클래스에 추가합니다:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    그리고 영웅을 위한 `createHero()` 함수를 생성하여 유사한 프로세스를 수행합니다.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    마지막으로 `drawGameObjects()` 함수를 추가하여 그리기를 시작합니다:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    이제 적들이 영웅 우주선으로 다가오기 시작할 것입니다!

---

## 🚀 도전 과제

보시다시피, 함수와 변수, 클래스를 추가하기 시작하면 코드가 '스파게티 코드'로 변할 수 있습니다. 코드를 더 읽기 쉽게 만들기 위해 어떻게 더 잘 조직할 수 있을까요? 코드가 여전히 하나의 파일에 있어도 시스템을 스케치해보세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/34)

## 복습 및 자기 학습

프레임워크 없이 게임을 작성하고 있지만, 게임 개발을 위한 많은 JavaScript 기반 캔버스 프레임워크가 있습니다. 이에 대해 [읽어보는 시간](https://github.com/collections/javascript-game-engines)을 가져보세요.

## 과제

[코드에 주석 달기](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.  