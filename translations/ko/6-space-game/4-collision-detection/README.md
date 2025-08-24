<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-23T23:02:29+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 Part 4: 레이저 추가 및 충돌 감지

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

이번 강의에서는 JavaScript를 사용해 레이저를 발사하는 방법을 배웁니다! 게임에 두 가지를 추가할 것입니다:

- **레이저**: 이 레이저는 영웅의 우주선에서 발사되어 위로 이동합니다.
- **충돌 감지**: *발사* 기능을 구현하는 과정에서 게임 규칙도 추가됩니다:
   - **레이저가 적을 맞춤**: 레이저에 맞은 적은 사라집니다.
   - **레이저가 화면 상단에 도달**: 레이저가 화면 상단에 닿으면 파괴됩니다.
   - **적과 영웅 충돌**: 적과 영웅이 서로 충돌하면 둘 다 파괴됩니다.
   - **적이 화면 하단에 도달**: 적이 화면 하단에 도달하면 적과 영웅이 파괴됩니다.

간단히 말해, 당신 -- *영웅* -- 은 적들이 화면 하단에 도달하기 전에 레이저로 모두 제거해야 합니다.

✅ 최초의 컴퓨터 게임에 대해 조금 조사해보세요. 그 게임의 기능은 무엇이었나요?

함께 영웅이 되어 봅시다!

## 충돌 감지

충돌 감지는 어떻게 구현할까요? 게임 객체를 움직이는 사각형으로 생각해야 합니다. 왜냐하면 게임 객체를 그리는 데 사용되는 이미지는 사각형이기 때문입니다: `x`, `y`, `width`, `height`를 가지고 있습니다.

만약 두 사각형, 즉 영웅과 적이 *교차*하면 충돌이 발생합니다. 그 이후에 어떤 일이 일어날지는 게임 규칙에 따라 달라집니다. 충돌 감지를 구현하려면 다음이 필요합니다:

1. 게임 객체의 사각형 표현을 얻는 방법, 예를 들어 다음과 같은 코드:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. 비교 함수, 이 함수는 다음과 같이 작성할 수 있습니다:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## 파괴는 어떻게 이루어지나요

게임에서 무언가를 파괴하려면 게임 루프에서 해당 항목을 더 이상 그리지 않도록 알려야 합니다. 이를 구현하는 방법은 특정 이벤트가 발생했을 때 게임 객체를 *죽은(dead)* 상태로 표시하는 것입니다:

```javascript
// collision happened
enemy.dead = true
```

그런 다음 화면을 다시 그리기 전에 *죽은* 객체를 정리할 수 있습니다:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## 레이저를 발사하는 방법

레이저를 발사하는 것은 키 이벤트에 반응하고 특정 방향으로 움직이는 객체를 생성하는 것을 의미합니다. 이를 위해 다음 단계를 수행해야 합니다:

1. **레이저 객체 생성**: 영웅의 우주선 상단에서 생성되어 화면 상단을 향해 위로 이동합니다.
2. **키 이벤트에 코드 연결**: 레이저 발사를 나타내는 키를 키보드에서 선택해야 합니다.
3. **레이저처럼 보이는 게임 객체 생성**: 키가 눌렸을 때.

## 레이저의 쿨다운

레이저는 키를 누를 때마다 발사되어야 합니다. 예를 들어 *스페이스* 키를 누를 때마다 발사됩니다. 하지만 너무 짧은 시간 안에 너무 많은 레이저가 생성되지 않도록 방지해야 합니다. 이를 해결하기 위해 *쿨다운*이라는 타이머를 구현합니다. 이를 다음과 같이 구현할 수 있습니다:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ 우주 게임 시리즈의 첫 번째 강의를 참고하여 *쿨다운*에 대해 복습하세요.

## 무엇을 만들 것인가

이전 강의에서 정리하고 리팩토링한 기존 코드를 확장할 것입니다. Part II의 코드를 사용하거나 [Part III- starter](../../../../../../../../../your-work)의 코드를 사용할 수 있습니다.

> 팁: 작업할 레이저는 이미 에셋 폴더에 있으며 코드에서 참조되고 있습니다.

- **충돌 감지 추가**: 레이저가 무언가와 충돌할 때 다음 규칙이 적용됩니다:
   1. **레이저가 적을 맞춤**: 레이저에 맞은 적은 사라집니다.
   2. **레이저가 화면 상단에 도달**: 레이저가 화면 상단에 닿으면 파괴됩니다.
   3. **적과 영웅 충돌**: 적과 영웅이 서로 충돌하면 둘 다 파괴됩니다.
   4. **적이 화면 하단에 도달**: 적이 화면 하단에 도달하면 적과 영웅이 파괴됩니다.

## 추천 단계

`your-work` 하위 폴더에 생성된 파일을 찾으세요. 다음 파일이 포함되어 있어야 합니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

`your_work` 폴더에서 프로젝트를 시작하려면 다음을 입력하세요:

```bash
cd your-work
npm start
```

위 명령은 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하세요. 현재는 영웅과 모든 적이 렌더링되지만 아직 움직이지는 않습니다 :).

### 코드 추가

1. **게임 객체의 사각형 표현 설정하여 충돌 처리** 아래 코드는 `GameObject`의 사각형 표현을 얻을 수 있도록 합니다. `GameObject` 클래스를 수정하여 확장하세요:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **충돌을 확인하는 코드 추가** 두 사각형이 교차하는지 테스트하는 새로운 함수를 추가합니다:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **레이저 발사 기능 추가**
   1. **키 이벤트 메시지 추가**. *스페이스* 키는 영웅 우주선 바로 위에 레이저를 생성해야 합니다. Messages 객체에 세 가지 상수를 추가하세요:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **스페이스 키 처리**. `window.addEventListener`의 keyup 함수를 수정하여 스페이스 키를 처리하세요:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **리스너 추가**. `initGame()` 함수를 수정하여 스페이스 바가 눌렸을 때 영웅이 발사할 수 있도록 합니다:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       그리고 적이 레이저와 충돌했을 때의 동작을 보장하기 위해 새로운 `eventEmitter.on()` 함수를 추가하세요:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **객체 이동**, 레이저가 화면 상단으로 점진적으로 이동하도록 합니다. 이전에 했던 것처럼 `GameObject`를 확장하는 새로운 Laser 클래스를 생성하세요: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **충돌 처리**, 레이저의 충돌 규칙을 구현합니다. 충돌 객체를 테스트하는 `updateGameObjects()` 함수를 추가하세요:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      `window.onload`의 게임 루프에 `updateGameObjects()`를 추가하는 것을 잊지 마세요.

   4. **레이저 쿨다운 구현**, 레이저가 너무 자주 발사되지 않도록 합니다.

      마지막으로, Hero 클래스를 수정하여 쿨다운을 추가하세요:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

이 시점에서 게임에 일부 기능이 추가되었습니다! 화살표 키로 이동하고, 스페이스 바로 레이저를 발사하며, 적을 맞추면 사라집니다. 잘하셨습니다!

---

## 🚀 도전 과제

폭발을 추가하세요! [Space Art 저장소](../../../../6-space-game/solution/spaceArt/readme.txt)의 게임 에셋을 확인하고 레이저가 외계인을 맞췄을 때 폭발을 추가해보세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## 복습 및 자기 학습

지금까지 게임의 간격을 실험해보세요. 간격을 변경하면 어떤 일이 발생하나요? [JavaScript 타이밍 이벤트](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)에 대해 더 읽어보세요.

## 과제

[충돌 탐구](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.