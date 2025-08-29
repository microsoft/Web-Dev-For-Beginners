<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T15:38:01+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 Part 5: 점수와 목숨

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/37)

이번 강의에서는 게임에 점수를 추가하고 목숨을 계산하는 방법을 배웁니다.

## 화면에 텍스트 그리기

게임 점수를 화면에 표시하려면 텍스트를 화면에 배치하는 방법을 알아야 합니다. 이를 위해 캔버스 객체의 `fillText()` 메서드를 사용할 수 있습니다. 또한, 사용할 글꼴, 텍스트 색상, 정렬(왼쪽, 오른쪽, 가운데) 등도 제어할 수 있습니다. 아래는 화면에 텍스트를 그리는 코드입니다.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [캔버스에 텍스트 추가하는 방법](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)에 대해 더 읽어보고, 여러분만의 스타일로 꾸며보세요!

## 게임 개념으로서의 목숨

게임에서 목숨이라는 개념은 단순히 숫자일 뿐입니다. 우주 게임의 맥락에서는, 우주선이 피해를 입을 때마다 목숨이 하나씩 줄어드는 방식으로 목숨을 설정하는 것이 일반적입니다. 숫자 대신 미니 우주선이나 하트 같은 그래픽으로 이를 표시하면 더 보기 좋습니다.

## 만들 내용

게임에 다음 요소를 추가해 봅시다:

- **게임 점수**: 적 우주선이 파괴될 때마다 영웅이 점수를 얻습니다. 우주선 하나당 100점을 추천합니다. 게임 점수는 화면 왼쪽 하단에 표시됩니다.
- **목숨**: 플레이어의 우주선은 3개의 목숨을 가집니다. 적 우주선과 충돌할 때마다 목숨이 하나씩 줄어듭니다. 목숨 점수는 화면 오른쪽 하단에 표시되며, 아래 그래픽으로 구성됩니다. ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ko.png)

## 추천 단계

`your-work` 하위 폴더에 생성된 파일을 찾아보세요. 이 폴더에는 다음과 같은 파일이 포함되어 있을 것입니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

`your_work` 폴더에서 프로젝트를 시작하려면 다음 명령어를 입력하세요:

```bash
cd your-work
npm start
```

위 명령어는 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하세요. 현재는 영웅과 모든 적들이 렌더링되고, 왼쪽 및 오른쪽 화살표 키를 누르면 영웅이 움직이며 적을 쏠 수 있습니다.

### 코드 추가

1. **필요한 에셋 복사**: `solution/assets/` 폴더에서 `your-work` 폴더로 필요한 에셋을 복사하세요. 여기에는 `life.png` 에셋이 포함됩니다. `window.onload` 함수에 lifeImg를 추가하세요:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg`를 에셋 목록에 추가하세요:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **변수 추가**: 총 점수(0)와 남은 목숨(3)을 나타내는 코드를 추가하고, 이 점수를 화면에 표시하세요.

3. **`updateGameObjects()` 함수 확장**: 적과의 충돌을 처리하도록 `updateGameObjects()` 함수를 확장하세요:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **목숨과 점수 추가**:
   1. **변수 초기화**: `Hero` 클래스의 `this.cooldown = 0` 아래에 목숨과 점수를 설정하세요:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **변수를 화면에 그리기**: 이 값을 화면에 표시하세요:

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

   1. **게임 루프에 메서드 추가**: `updateGameObjects()` 아래에 이 함수를 `window.onload` 함수에 추가하세요:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **게임 규칙 구현**: 다음 게임 규칙을 구현하세요:

   1. **영웅과 적의 충돌마다** 목숨을 하나 차감합니다.
   
      `Hero` 클래스를 확장하여 이 차감을 처리하세요:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **레이저가 적을 맞출 때마다** 게임 점수를 100점 증가시킵니다.

      `Hero` 클래스를 확장하여 이 증가를 처리하세요:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        충돌 이벤트 방출기에 이 함수를 추가하세요:

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

✅ JavaScript/Canvas를 사용해 만들어진 다른 게임들을 조사해 보세요. 이 게임들의 공통된 특징은 무엇인가요?

이 작업을 완료하면 화면 오른쪽 하단에 작은 '목숨' 우주선이 표시되고, 왼쪽 하단에 점수가 표시됩니다. 적과 충돌할 때 목숨이 줄어들고, 적을 쏠 때 점수가 증가하는 것을 확인할 수 있습니다. 잘하셨습니다! 이제 게임이 거의 완성되었습니다.

---

## 🚀 도전 과제

코드가 거의 완성되었습니다. 다음 단계는 무엇일지 상상해 보세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/38)

## 복습 및 자기 학습

게임 점수와 목숨을 증가시키고 감소시키는 방법을 조사해 보세요. [PlayFab](https://playfab.com) 같은 흥미로운 게임 엔진도 있습니다. 이러한 엔진을 사용하면 게임이 어떻게 향상될 수 있을까요?

## 과제

[점수 게임 만들기](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.  