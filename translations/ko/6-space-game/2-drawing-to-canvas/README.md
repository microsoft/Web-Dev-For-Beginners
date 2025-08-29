<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T15:39:25+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 Part 2: 캔버스에 주인공과 몬스터 그리기

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/31)

## 캔버스

캔버스는 기본적으로 내용이 없는 HTML 요소로, 빈 도화지와 같습니다. 그 위에 그림을 그려야 합니다.

✅ [캔버스 API](https://developer.mozilla.org/docs/Web/API/Canvas_API)에 대해 더 알아보세요 (MDN).

일반적으로 페이지의 본문에 다음과 같이 선언됩니다:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

위 코드에서는 `id`, `width`, `height`를 설정하고 있습니다.

- `id`: 캔버스와 상호작용할 때 참조를 얻기 위해 설정합니다.
- `width`: 요소의 너비를 설정합니다.
- `height`: 요소의 높이를 설정합니다.

## 간단한 도형 그리기

캔버스는 데카르트 좌표계를 사용하여 그림을 그립니다. 따라서 x축과 y축을 사용하여 위치를 표현합니다. 위치 `0,0`은 왼쪽 상단이고, 오른쪽 하단은 캔버스의 너비와 높이로 설정한 값입니다.

![캔버스의 그리드](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ko.png)
> 이미지 출처: [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

캔버스 요소에 그림을 그리려면 다음 단계를 따라야 합니다:

1. **캔버스 요소 참조 얻기**
1. **캔버스 요소 위에 있는 컨텍스트 요소 참조 얻기**
1. **컨텍스트 요소를 사용하여 그리기 작업 수행**

위 단계를 구현한 코드는 다음과 같습니다:

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ 캔버스 API는 주로 2D 도형에 초점을 맞추지만, 웹사이트에 3D 요소를 그릴 수도 있습니다. 이를 위해 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)를 사용할 수 있습니다.

캔버스 API를 사용하면 다음과 같은 다양한 작업을 할 수 있습니다:

- **기하학적 도형**: 이미 사각형을 그리는 방법을 보여드렸지만, 더 많은 도형을 그릴 수 있습니다.
- **텍스트**: 원하는 폰트와 색상으로 텍스트를 그릴 수 있습니다.
- **이미지**: .jpg 또는 .png와 같은 이미지 자산을 기반으로 이미지를 그릴 수 있습니다.

✅ 직접 해보세요! 사각형을 그리는 방법을 배웠으니, 원을 페이지에 그릴 수 있나요? CodePen에서 흥미로운 캔버스 그림을 확인해보세요. [특히 인상적인 예시](https://codepen.io/dissimulate/pen/KrAwx)를 참고하세요.

## 이미지 자산 로드 및 그리기

이미지 자산을 로드하려면 `Image` 객체를 생성하고 `src` 속성을 설정합니다. 그런 다음 `load` 이벤트를 감지하여 사용 준비가 되었는지 확인합니다. 코드는 다음과 같습니다:

### 자산 로드

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### 자산 로드 패턴

위 코드를 다음과 같은 구조로 감싸는 것이 좋습니다. 이렇게 하면 사용하기 더 쉬워지고, 완전히 로드된 후에만 조작을 시도할 수 있습니다:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

게임 자산을 화면에 그리려면 코드는 다음과 같습니다:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## 이제 게임을 만들 시간입니다

### 무엇을 만들 것인가

캔버스 요소가 있는 웹 페이지를 만듭니다. `1024*768` 크기의 검은 화면을 렌더링해야 합니다. 두 개의 이미지를 제공했습니다:

- 주인공 우주선

   ![주인공 우주선](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ko.png)

- 5*5 몬스터

   ![몬스터 우주선](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ko.png)

### 개발 시작을 위한 추천 단계

`your-work` 하위 폴더에 생성된 파일을 찾으세요. 다음 파일이 포함되어 있어야 합니다:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Visual Studio Code에서 이 폴더의 복사본을 엽니다. 로컬 개발 환경이 설정되어 있어야 하며, Visual Studio Code와 NPM 및 Node가 설치되어 있어야 합니다. 컴퓨터에 `npm`이 설정되어 있지 않다면, [설치 방법](https://www.npmjs.com/get-npm)을 참고하세요.

프로젝트를 시작하려면 `your_work` 폴더로 이동하세요:

```bash
cd your-work
npm start
```

위 명령은 `http://localhost:5000` 주소에서 HTTP 서버를 시작합니다. 브라우저를 열고 해당 주소를 입력하세요. 지금은 빈 페이지지만 곧 바뀔 것입니다.

> 참고: 화면에서 변경 사항을 확인하려면 브라우저를 새로고침하세요.

### 코드 추가

`your-work/app.js`에 필요한 코드를 추가하여 아래 작업을 해결하세요:

1. **캔버스 그리기**: 검은 배경의 캔버스를 그립니다.
   > 팁: `/app.js`의 적절한 TODO 아래에 두 줄을 추가하여 `ctx` 요소를 검은색으로 설정하고, 좌표를 0,0으로 설정하며 캔버스의 높이와 너비를 캔버스 크기와 동일하게 설정하세요.
2. **텍스처 로드**: 텍스처를 로드합니다.
   > 팁: `await loadTexture`를 사용하여 이미지 경로를 전달하며 플레이어와 적 이미지를 추가하세요. 아직 화면에 보이지는 않을 것입니다!
3. **주인공 그리기**: 화면 하단 중앙에 주인공을 그립니다.
   > 팁: `drawImage` API를 사용하여 heroImg를 화면에 그리세요. `canvas.width / 2 - 45`와 `canvas.height - canvas.height / 4`를 설정하세요.
4. **5*5 몬스터 그리기**: 몬스터를 그립니다.
   > 팁: 이제 화면에 적을 그리는 코드를 주석 해제할 수 있습니다. 그런 다음 `createEnemies` 함수를 작성하세요.

   먼저 몇 가지 상수를 설정합니다:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    그런 다음, 몬스터 배열을 화면에 그리는 루프를 만듭니다:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## 결과

완성된 결과는 다음과 같아야 합니다:

![검은 화면에 주인공과 5*5 몬스터](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ko.png)

## 솔루션

먼저 직접 해결해보세요. 하지만 막히면 [솔루션](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)을 확인하세요.

---

## 🚀 도전 과제

2D 중심의 캔버스 API에 대해 배웠습니다. [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)를 살펴보고 3D 객체를 그려보세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/32)

## 복습 및 자기 학습

캔버스 API에 대해 더 알아보려면 [관련 자료](https://developer.mozilla.org/docs/Web/API/Canvas_API)를 읽어보세요.

## 과제

[캔버스 API를 활용해보기](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역을 사용함으로써 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.