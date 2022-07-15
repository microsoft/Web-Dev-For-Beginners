# Space 게임 제작하기 파트 5: 점수내고 살기

## 강의 전 퀴즈

[Pre-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/37?loc=ko)

이 강의에서는 어떻게 게임에서 점수를 내고 생명을 구하는 가에 대하여 배웁니다.

## 화면에 텍스트 그리기

화면에 게임 점수를 표시하려면, 화면에 텍스트를 두는 방법을 알아야 합니다. 답변은 canvas 객체에 `fillText()` 메소드를 사용한다고 할 수 있습니다. 사용할 글꼴, 텍스트 색상과 정렬(왼쪽, 오른쪽, 가운데)처럼 다른 측면으로 제어할 수 있습니다. 다음은 화면에 텍스트를 그리는 코드입니다:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [how to add text to a canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)에 대하여 더 읽어보세요, 그리고 더 멋지게 보이도록 자유롭게 느껴보세요!

## 게임 컨셉에서 생명

게임에서 생명을 가진다는 개념은 숫자에 불과합니다. space 게임의 맥락에서는 배가 피해를 입었을 때마다 생명을 하나씩 빼는 것이 일반적입니다. 숫자 대신 miniships이나 하트와 같은 그래픽으로 표현할 수 있다면 좋습니다.

## 무엇을 만드나요

게임에 다음을 추가하겠습니다:

- **게임 점수**: 적의 배가 파괴될 때마다, 영웅은 점수를 받아야하고, 하나의 배마다 100점을 제안합니다. 게임 점수는 좌측 하단에 보여야 합니다.
- **생명**: 여러분의 배는 세 생명이 있습니다. 적의 배로 부딪칠 때마다 생명을 잃습니다. 생명 점수는 우측 하단에 보여야되고 ![life image](../solution/assets/life.png)로 만들어야 합니다.

## 권장 단계

`your-work` 하위 폴더에서 생성된 파일을 찾습니다. 다음을 포함해야 합니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

타이핑해서 `your_work` 폴더에 프로젝트를 시작합니다:

```bash
cd your-work
npm start
```

위 코드는 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하면, 바로 영웅과 모든 적을 렌더링해야하며, 왼쪽과 오른쪽 화살표를 누르면, 영웅이 움직이고 적을 격추할 수 있습니다.

### 코드 추가하기

1. `solution/assets/` 폴더에서 `your-work` 폴더로 **필요한 어셋을 복사합니다**; `life.png` 어셋을 추가합니다. window.onload 함수에 lifeImg를 추가합니다:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. 어셋의 배열에 `lifeImg`를 추가합니다:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **변수를 추가합니다**. 총 점수(0)과 남은 생명(3)을 나타내는 코드를 추가하고, 이 점수를 화면에 출력합니다.

3. **`updateGameObjects()` 함수를 확장합니다**. `updateGameObjects()` 함수를 확장하여 적 충돌을 제어합니다:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **`life`과 `points`를 추가하기**. 
   1. **변수를 초기화합니다**. `Hero` 클래스의 `this.cooldown = 0` 아래에 생명과 점수를 설정합니다:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **화면에 점수를 그립니다**. 이 값을 화면에 그립니다:

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

   1. **게임 루프에 메소드를 추가합니다**. `updateGameObjects()` 아래의 window.onload 함수에 다음 함수를 추가해야 합니다:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **게임 규칙을 구현합니다**. 다음 게임 규칙을 구현합니다:

   1. **모든 영웅과 적의 충돌**에 대해 생명을 깍습니다.
   
      깍기 위해서 `Hero` 클래스를 확장합니다:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **적을 공격하는 모든 레이저는**, 게임 점수 100점을 올립니다.

      올리기 위해서 `Hero` 클래스를 확장합니다:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Collision Event Emitter에 다음 함수를 추가합니다:

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

✅ JavaScript/Canvas를 사용하여 만든 다른 게임을 찾으려면 약간 알아보세요. 공통된 특징은 무엇일까요?

이 작업이 끝날 즈음, 우측 하단에 작은 '생명' 배, 좌측 하단에 점수를 보여줘야 하며, 적과 부딪칠 때마다 생명의 개수가 감소하고 적을 쏠 때마다 점수가 증가하는 것을 볼 수 있습니다. 잘 했습니다! 게임이 거의 완료되었습니다.

---

## 🚀 도전

코드는 거의 완성되었습니다. 다음 단계를 상상할 수 있나요?

## 강의 후 퀴즈

[Post-lecture quiz](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/38?loc=ko)

## 리뷰 & 자기주도 학습

게임 점수와 생명을 늘리거나 줄일 수 있는 몇 가지 방법을 조사해보세요. [PlayFab](https://playfab.com)처럼 흥미로운 게임 엔진이 있습니다. 이 중 하나를 사용하면 어떻게 게임을 향상시킬 수 있을까요?

## 과제

[Build a Scoring Game](../assignment.md)
