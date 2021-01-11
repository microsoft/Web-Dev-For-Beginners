# Space 게임 제작하기 파트 3: 모션 추가하기

## 강의 전 퀴즈

[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/33?loc=ko)

외계인이 화면을 돌아다니기 전까지는 게임이 재미 없습니다! 이 게임에서는, 두 가지 타입의 동작을 씁니다:

- **키보드/마우스 동작**: 사용자가 키보드 또는 마우스와 상호작용하여 화면에서 개체를 움질일 때.
- **게임으로 움직이는 동작**: 게임이 일정 시간 간격으로 객체를 움직일 때.

그러면 화면에서 물건을 어떻게 움직일까요? 그것은 모두 직교 좌표에 관한 것입니다: 객체의 위치 (x, y)를 변경 한 뒤에 화면을 다시 그립니다.

일반적으로 화면에서 *이동*을 하려면 다음 단계가 필요합니다:

1. 객체의 **새로운 위치 설정하기**; 이는 객체가 움직인 것으로 인식하는 데 필요합니다.
2. **화면 비우기**, 화면은 그려지는 사이에 비워져야 합니다. 배경색으로 채운 사각형을 그려서 지울 수 있습니다.
3. 새로운 위치에서 **개체를 다시 그리기**. 최종적으로 한 위치에서 다른 위치로 객체를 이동합니다.

 코드에서 다음과 같이 보일 수 있습니다:

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

✅ 영웅을 초당 수 많은 프레임으로 다시 그리게 될 때 성능 비용이 발생하는 이유를 알 수 있나요? [alternatives to this pattern](https://www.html5rocks.com/en/tutorials/canvas/performance/)에 대하여 읽어보세요.


## 키보드 이벤트 제어하기

특정 이벤트를 코드에 연결하여 이벤트를 처리합니다. 키보드 이벤트는 전체 윈도우에서 연결되는 반면에 `click`과 같은 마우스 이벤트는 클릭하는 특정 요소에 연결할 수 있습니다. 이 프로젝트에서는 키보드 이벤트를 사용합니다.

이벤트를 처리하려면 윈도우의 `addEventListener ()` 메소드를 사용하고 두 개의 입력 파라미터를 제공해야 합니다. 첫 번째 파라미터는 이벤트의 이름입니다, 예시를 들자면 `keyup`과 같습니다. 두 번째 파라미터는 이벤트가 발생함에 따라 호출될 함수입니다.  

여기는 예시입니다:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

키 이벤트의 경우에는 어떤 키를 눌렀는지 확인할 때 쓸 수 있는 이벤트로 두 가지 속성이 있습니다:

- `key`, 눌린 키의 문자열 표현입니다, 예를 들어 `ArrowUp` 입니다.
- `keyCode`, 숫자 표현입니다. 예를 들어 `37`은 `ArrowLeft`에 해당합니다.

✅ 키 이벤트 조작은 게임 개발 외부에서 유용합니다. 이 기술의 다른 사용법은 무엇일까요?

### 특별한 키: a caveat

윈도우에 영향을 주는 몇 가지 *특별한* 키가 있습니다. 즉 `keyup` 이벤트를 듣고 이 특별한 키를 사용하면 영웅을 이동하여 가로 스크롤도 할 수 있다는 것을 의미합니다. 따라서 게임을 제작할 때는 이 내장 브라우저 동작을 *차단* 할 수 있습니다. 다음과 같은 코드가 필요합니다:

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

위 코드는 화살표-키와 스페이스 키의 *기본* 동작을 막습니다. *차단* 메커니즘은 `e.preventDefault()`를 호출할 때 발생합니다.

## 게임의 움직임

각 틱 또는 시간 간격에서 객체의 위치를 업데이트하는 `setTimeout()` 또는 `setInterval()` 함수 같은 타이머를 사용하여 스스로 움직일 수 있습니다. 다음과 같이 보입니다:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## 게임 루프

게임 루프는 기본적으로 일정한 간격마다 호출되는 함수인 개념입니다. 사용자에게 보여줄 모든 것이 루프에 그려지므로 이것을 게임 루프라고 합니다. 게임 루프는 게임의 일부인 모든 게임 객체를 사용하여, 모종의 이유로 더 이상 게임의 일부가 아니지 않는 이상 다 그립니다. 예를 들면 객체가 레이저에 맞아 폭발한 적이 있다면 더 이상 현재 게임 루프의 일부가 아닙니다 (다음 단원에서 자세히 알아 볼 것입니다).

다음은 일반적으로 코드로 표현된 게임 루프의 모습입니다:

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

캔버스를 다시 그리기 위해 위의 루프가 `200` milliseconds 마다 호출됩니다. 게임에 가장 적합한 간격을 고를 수 있습니다.

## Space 게임 계속하기

기존 코드를 가져와 확장합니다. 파트 I 에서 작성한 코드로 시작하거나 [Part II- starter](../your-work)의 코드를 사용합니다.

- **영웅을 움직이기**: 화살표 키를 사용하여 영웅을 이동할 수 있도록 코드를 추가합니다.
- **적을 움직이기**: 적들이 주어진 속도로 상단에서 하단으로 이동할 수 있도록 코드를 추가합니다.

## 권장 단계

`your-work` 하위 폴더에 생성된 파일을 찾습니다. 다음을 포함해야 합니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

타이핑하여 `your_work` 폴더에서 프로젝트를 시작합니다:

```bash
cd your-work
npm start
```

위 코드는 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하면 영웅과 모든 적을 렌더링 해야하지만; 아무것도 움직이지 않습니다 - 아직!

### 코드 추가하기

1. `영웅`과 `적` 그리고 `게임 객체`에 대한 **전용 객체를 추가합니다**. `x` 혹은 `y` 속성이 필요합니다. ([Inheritance or composition](../README.md) 파트를 기억하세요).

   *힌트* `game object`는 `x`와 `y`가 있으면서 canvas에 그릴 수 있는 능력이 되어야 합니다.

   >tip: 생성자가 아래와 같이 이루어진 새로운 GameObject 클래스를 추가하여, 시작한 뒤에 canvas로 그립니다:
  
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

    이제, GameObject를 확장하여 영웅과 적을 생성합니다.
    
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

2. **키-이벤트 핸들러를 추가**하여 키 탐색을 처리합니다 (Hero를 상/하 좌/우로 이동).

   *기억합시다* 데카르트 시스템이고, 좌측 상단은 `0,0`입니다. 또한 *기본 동작*을 중지하는 코드를 추가해야 합니다

   >tip: onKeyDown 함수를 만들고 윈도우에 붙입니다.

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   이 지점에서 브라우저 콘솔을 확인해봅니다, 그리고 로깅되는 키 입력을 봅니다.

3. [Pub sub pattern](../README.md)으로 **구현합니다**, 이는 남은 파트를 따라가면서 코드를 깨끗하게 유지할 수 있습니다.

   이 마지막 파트를 진행하면, 다음을 할 수 있습니다:

   1. 윈도우에 **Add an 이벤트 리스너를 추가합니다**:

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

    1. publish하고 메시지를 subscribe할 **EventEmitter 클래스를 생성합니다**:

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

    1. EventEmitter를 설정하고 **constants를 추가합니다**:

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

    1. **게임을 초기화합니다**

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

1. **게임 루프를 설정합니다**

  window.onload 함수를 리팩터링하여 게임을 초기화하고 적절한 간격으로 게임 루프를 설정합니다. 레이저 빔도 추가합니다:

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

5. 일정 간격으로 움직이는 적에 대한 **코드를 작성합니다**

    `createEnemies()`함수를 리팩터링하여 적을 생성하고 새로운 gameObjects 클래스로 푸시합니다:

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
    
    그리고 비슷한 과정으로 영웅에 대한 `createHero()` 함수를 추가합니다.
    
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

    그리고 마지막으로, 그리기를 시작할 `drawGameObjects()` 함수를 추가합니다:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    적들이 영웅 spaceship의 앞으로 나아가려고 합니다!

---

## 🚀 도전

보다가, 함수와 변수 및 클래스를 추가하기 시작하면 코드가 '스파게티 코드'로 변할 수 있습니다. 코드를 더 읽기 쉽게 구성하려면 어떻게 해야 될까요? 코드가 여전히 하나의 파일에 있어도, 어울리는 시스템을 기획하시기 바랍니다.

## 강의 후 퀴즈

[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/34?loc=ko)

## 리뷰 & 자기주도 학습

프레임워크를 사용하지 않고 게임을 작성하는 동안, 게임 개발을 위한 JavaScript-기반 canvas 프레임워크가 많이 존재하고 있습니다. 시간을 내어 [about these](https://github.com/collections/javascript-game-engines)를 보시기 바랍니다.

## 과제

[Comment your code](../assignment.md)
