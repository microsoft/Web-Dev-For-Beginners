<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T15:03:22+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "hk"
}
-->
# 建立太空遊戲第二部分：將英雄和怪物繪製到 Canvas

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Canvas 是一個 HTML 元素，預設是空白的；它是一塊空白的畫布，你需要透過繪圖來填充內容。

✅ 在 MDN 上閱讀 [更多關於 Canvas API 的資訊](https://developer.mozilla.org/docs/Web/API/Canvas_API)。

以下是它通常在頁面中宣告的方式：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

上面我們設定了 `id`、`width` 和 `height`。

- `id`：設定這個值以便在需要與它互動時取得引用。
- `width`：這是元素的寬度。
- `height`：這是元素的高度。

## 繪製簡單幾何圖形

Canvas 使用笛卡爾座標系統來繪製物件，因此它使用 x 軸和 y 軸來表示物件的位置。位置 `0,0` 是左上角，而右下角則是你設定的 Canvas 的寬度和高度。

![Canvas 的網格](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.hk.png)  
> 圖片來源：[MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

要在 Canvas 元素上繪圖，你需要完成以下步驟：

1. **取得引用** Canvas 元素。
2. **取得引用** Canvas 元素上的 Context 元素。
3. **使用 Context 元素執行繪圖操作**。

上述步驟的程式碼通常如下所示：

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

✅ Canvas API 主要專注於 2D 圖形，但你也可以在網站上繪製 3D 元素；為此，你可以使用 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)。

使用 Canvas API，你可以繪製各種內容，例如：

- **幾何圖形**，我們已展示如何繪製矩形，但還有更多可以繪製的內容。
- **文字**，你可以使用任何字型和顏色繪製文字。
- **圖片**，你可以根據圖片資源（例如 .jpg 或 .png）繪製圖片。

✅ 試試看！你已經知道如何繪製矩形，能否嘗試在頁面上繪製一個圓形？看看 CodePen 上一些有趣的 Canvas 繪圖。這裡有一個 [特別令人印象深刻的例子](https://codepen.io/dissimulate/pen/KrAwx)。

## 加載並繪製圖片資源

你可以透過建立一個 `Image` 物件並設定其 `src` 屬性來加載圖片資源。然後監聽 `load` 事件，以確保圖片已準備好使用。程式碼如下：

### 加載資源

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### 加載資源模式

建議將上述程式碼包裝在如下結構中，這樣更容易使用，並且只有在資源完全加載後才嘗試操作它：

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

要將遊戲資源繪製到螢幕上，程式碼如下：

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

## 現在是開始建立你的遊戲的時候了

### 建立什麼

你將建立一個包含 Canvas 元素的網頁。它應該渲染一個黑色螢幕，大小為 `1024*768`。我們已提供兩張圖片給你：

- 英雄飛船

   ![英雄飛船](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.hk.png)

- 5*5 怪物

   ![怪物飛船](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.hk.png)

### 建議的開發步驟

找到在 `your-work` 子資料夾中為你建立的檔案。它應包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

在 Visual Studio Code 中打開這個資料夾的副本。你需要設置本地開發環境，最好使用 Visual Studio Code 並安裝 NPM 和 Node。如果你的電腦尚未設置 `npm`，[這裡是設置方法](https://www.npmjs.com/get-npm)。

通過導航到 `your_work` 資料夾開始你的專案：

```bash
cd your-work
npm start
```

上述指令會在地址 `http://localhost:5000` 上啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址。現在是一個空白頁面，但很快就會改變。

> 注意：要在螢幕上看到變更，請刷新瀏覽器。

### 添加程式碼

在 `your-work/app.js` 中添加所需程式碼以完成以下任務：

1. **繪製**一個黑色背景的 Canvas  
   > 提示：在 `/app.js` 中適當的 TODO 下添加兩行程式碼，將 `ctx` 元素設置為黑色，並將左上角座標設置為 0,0，高度和寬度設置為 Canvas 的大小。
2. **加載**材質  
   > 提示：使用 `await loadTexture` 並傳入圖片路徑來加載玩家和敵人的圖片。你暫時還看不到它們出現在螢幕上！
3. **繪製**英雄到螢幕下半部分的中心  
   > 提示：使用 `drawImage` API 將 heroImg 繪製到螢幕上，座標設置為 `canvas.width / 2 - 45` 和 `canvas.height - canvas.height / 4)`。
4. **繪製** 5*5 怪物  
   > 提示：現在你可以取消註解程式碼以將敵人繪製到螢幕上。接下來，進入 `createEnemies` 函數並完成它。

   首先，設置一些常數：

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    然後，建立一個迴圈將怪物陣列繪製到螢幕上：

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## 結果

完成的結果應如下所示：

![黑色螢幕，包含英雄和 5*5 怪物](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.hk.png)

## 解決方案

請先嘗試自己解決，但如果遇到困難，可以查看 [解決方案](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)。

---

## 🚀 挑戰

你已經學習了使用專注於 2D 的 Canvas API；看看 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)，並嘗試繪製一個 3D 物件。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/32)

## 回顧與自學

透過 [閱讀相關內容](https://developer.mozilla.org/docs/Web/API/Canvas_API) 了解更多關於 Canvas API 的資訊。

## 作業

[玩轉 Canvas API](assignment.md)

---

**免責聲明**：  
此文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。  