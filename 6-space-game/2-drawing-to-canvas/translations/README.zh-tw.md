# 建立太空遊戲 Part 2：在畫布上繪製英雄與怪物

## 課前測驗

[課前測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/31?loc=zh_tw)

## Canvas

Canvas 是 HTML 中的元素，預設上不帶有任何內容，就如一塊白板。你需要自己彩繪上去。

✅ 在 MDN 上閱讀[更多關於 Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API)。

這是它典型的宣告方式，位在頁面的 body 中：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

上面我們設定了 `id`、`width` 和 `height`。

- `id`：讓你在處理物件時，能快速地取得參考位置。
- `width`：物件的寬度。
- `height`：物件的高度。

## 繪製簡單幾何圖樣

Canvas 使用了笛卡爾座標系繪製圖案。因此有 x 軸與 y 軸來表達物件的所在地點。座標點 `0,0` 位在畫布的左上方；而右下方則是我們定義畫布的寬度與高度。

![畫布網格](../canvas_grid.png)
> 圖片出自於 [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

要在 Canvas 物件上繪製圖案，你需要執行下列步驟：

1. **取得 Canvas 物件的參考位置**。
1. **取得 Context 物件的參考位置**，定義在 Canvas 元素中。
1. 使用 context 元素**進行繪製動作**。

以程式碼表達上述步驟會呈現成：

```javascript
// 繪製紅色矩形
//1. 取得 canvas 參考點
canvas = document.getElementById("myCanvas");

//2. 設定 context 為 2D 以繪製基本圖形
ctx = canvas.getContext("2d");

//3. 填入色彩紅色
ctx.fillStyle = 'red';

//4. 利用這些參數決定位置與大小，繪製矩形
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas API 主要是處理 2D 圖形，但你也可以在網頁中繪製 3D 圖形。要完成這個需求，你可以使用 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)。

你可以使用 Canvas API 繪製出這些物件：

- **幾何圖形**，我們已經展示繪製矩形的流程，還有許多種形狀可以使用。
- **文字**，你可以繪製文字，決定你想要的字型及顏色。
- **圖片**，你可以依據圖片檔繪製圖案，舉例來說像是 .jpg 或是 .png 檔。

✅ 試試看！你知道如何繪製矩形，你能在頁面中繪製圓形嗎？看看在 CodePen 上有趣的 Canvas 塗鴉。這邊有一樣[特別令人驚豔的例子](https://codepen.io/dissimulate/pen/KrAwx)。

## 讀取並繪製圖片檔

建立 `Image` 物件並設定其 `src` 屬性，你可以讀取圖片檔。接著監聽 `load` 事件，了解圖片何時已經可以被使用。程式碼如下：

### 讀取檔案

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // 圖片載入完成，準備使用
}
```

### 讀取檔案之模式

建議上可以將上述程式打包起來，建立成完整的結構，判斷圖片是否載入完成，也方便未來的使用：

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // 圖片載入完成，準備使用
      resolve(img);
    }
  })
}

// 實際用法

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

要在畫面上繪製遊戲物件，你的程式碼會如下所示：

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

## 是時候來建立你的遊戲了

### 建立目標

你需要建立包含 Canvas 元素的網頁。它會是 `1024*768` 的黑色畫面。我們提供了兩張圖片：

- 英雄艦艇

   ![英雄艦艇](../solution/assets/player.png)

- 5*5 隻怪物

   ![敵軍艦艇](../solution/assets/enemyShip.png)

### 開始開發的建議步驟

在你的 `your-work` 子資料夾中，確認檔案是否建立完成。它應該包括：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

在 Visual Studio Code 中開啟這個資料夾的副本。你需要建立本地端的開發環境，建議為 Visual Studio Code 與安裝好的 NPM 與 Node。如果你的電腦中還沒設定好 `npm`，[這是它的設定流程](https://www.npmjs.com/get-npm)。

前往 `your_work` 資料夾，開始你的專案：

```bash
cd your-work
npm start
```

這會啟動 HTTP 伺服器，網址為 `http://localhost:5000`。開啟瀏覽器並輸入該網址。目前會是空白的頁面，但不久後就會不一樣了。

> 筆記：想觀察畫面的改變，請重新整理你的頁面。

### 加入程式碼

在 `your-work/app.js` 中加入程式碼以解決下列目標：

1. 在 Canvas **繪製**黑色背景
   > 要點：在 `/app.js` 中，加入兩行程式在 TODO 下方：設定 `ctx` 元素為黑色，左上方座標點為 0,0 且大小與 Canvas 相等。
2. **讀取**材質
   > 要點：使用 `await loadTexture` 導入圖片位置以新增玩家與敵軍圖片。你還沒辦法在畫面上看到它們！
3. 在畫面的正下方**繪製**英雄
   > 要點：使用 `drawImage` API 來繪製 heroImg 到畫面上，設定位置為  `canvas.width / 2 - 45` 與 `canvas.height - canvas.height / 4)`。
4. **繪製** 5*5 隻怪物
   > 要點：現在移除註解，在畫面上繪製敵人。接著編輯函式 `createEnemies`。

    首先，設定幾個常數：

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    接著，利用迴圈在畫面上繪製矩陣型態的怪物：

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## 結果

完成後的成果應該如下所示：

![黑畫面上有英雄與 5*5 隻怪物](../partI-solution.png)

## 解答

試著自己先完成程式碼，但如果你遭遇到困難，請參考[解答](../solution/app.js)。

---

## 🚀 挑戰

你已經學會繪製 2D 圖形的 Canvas API。看看 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)，試著繪製 3D 物件。

## 課後測驗

[課後測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/32?loc=zh_tw)

## 複習與自學

[閱讀更多資料](https://developer.mozilla.org/docs/Web/API/Canvas_API)，學習更多有關 Canvas API 的用法。

## 作業

[把玩 Canvas API](assignment.zh-tw.md)
