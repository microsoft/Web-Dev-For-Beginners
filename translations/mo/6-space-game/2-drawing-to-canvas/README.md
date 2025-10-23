<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-22T22:53:10+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第二部分：將英雄和怪物繪製到 Canvas

Canvas API 是網頁開發中最強大的功能之一，可以直接在瀏覽器中創建動態、互動式的圖形。在本課程中，我們將把空白的 HTML `<canvas>` 元素轉變成充滿英雄和怪物的遊戲世界。將 Canvas 想像成你的數位畫板，程式碼在這裡變成了視覺效果。

我們將基於上一課所學的內容，深入探討視覺方面。你將學習如何載入和顯示遊戲精靈圖（sprites），精確定位元素，並為你的太空遊戲建立視覺基礎。這將把靜態網頁與動態互動體驗之間的差距拉近。

在本課程結束時，你將擁有一個完整的遊戲場景，英雄飛船正確定位，敵人陣型準備迎戰。你將了解現代遊戲如何在瀏覽器中渲染圖形，並獲得創建自己互動式視覺體驗的技能。讓我們一起探索 Canvas 圖形，讓你的太空遊戲活起來吧！

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas 是什麼？

那麼，究竟什麼是 `<canvas>` 元素呢？它是 HTML5 提供的一種解決方案，用於在網頁瀏覽器中創建動態圖形和動畫。與靜態的圖片或影片不同，Canvas 讓你可以對螢幕上出現的每個像素進行控制。這使得它非常適合用於遊戲、數據可視化和互動藝術。可以將它想像成一個可編程的繪圖表面，而 JavaScript 則是你的畫筆。

預設情況下，Canvas 元素在頁面上看起來像是一個空白的透明矩形。但它的潛力就在於此！當你使用 JavaScript 繪製形狀、載入圖片、創建動畫並讓元素響應使用者互動時，它的真正威力才會展現出來。這類似於 1960 年代貝爾實驗室的早期電腦圖形先驅，他們需要編程每個像素來創建第一批數位動畫。

✅ 閱讀 [更多關於 Canvas API 的內容](https://developer.mozilla.org/docs/Web/API/Canvas_API)（MDN）。

以下是它通常的宣告方式，作為頁面 `<body>` 的一部分：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**這段程式碼的作用：**
- **設置** `id` 屬性，以便你可以在 JavaScript 中引用這個特定的 Canvas 元素
- **定義** Canvas 的寬度（以像素為單位），以控制其水平大小
- **確定** Canvas 的高度（以像素為單位），以決定其垂直尺寸

## 繪製簡單幾何圖形

現在你已經知道 Canvas 元素是什麼了，讓我們來探索如何在其上進行繪製！Canvas 使用的座標系統可能讓你聯想到數學課，但在電腦圖形中有一個重要的不同之處。

Canvas 使用笛卡爾座標系統，具有 x 軸（水平）和 y 軸（垂直），用於定位你繪製的所有內容。但這裡有一個關鍵的不同：與數學課上的座標系統不同，原點 `(0,0)` 是從左上角開始的，x 值向右增加，y 值向下增加。這種方式源於早期電腦顯示器，電子束從上到下掃描，使左上角成為自然的起始點。

![Canvas 的網格](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.mo.png)
> 圖片來源：[MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

要在 Canvas 元素上繪製，你需要遵循以下三個步驟，這是所有 Canvas 圖形的基礎。一旦你熟悉了這個過程，它就會變得非常自然：

1. **從 DOM 中獲取 Canvas 元素的引用**（就像其他 HTML 元素一樣）
2. **獲取 2D 渲染上下文**——這提供了所有的繪圖方法
3. **開始繪製！** 使用上下文的內建方法創建你的圖形

以下是程式碼示例：

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**逐步解析：**
- 我們 **抓取** Canvas 元素，使用其 ID 並將其存儲在變數中
- 我們 **獲取** 2D 渲染上下文——這是我們的繪圖工具包
- 我們 **告訴** Canvas 我們想用紅色填充，使用 `fillStyle` 屬性
- 我們 **繪製** 一個矩形，從左上角 (0,0) 開始，寬度和高度均為 200 像素

✅ Canvas API 主要專注於 2D 圖形，但你也可以在網站上繪製 3D 元素；為此，你可能需要使用 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)。

使用 Canvas API，你可以繪製各種內容，例如：

- **幾何形狀**，我們已展示如何繪製矩形，但還有更多形狀可以繪製。
- **文字**，你可以使用任何字體和顏色繪製文字。
- **圖片**，你可以基於圖片資源（例如 .jpg 或 .png）繪製圖片。

✅ 試試看！你已經知道如何繪製矩形，能否在頁面上繪製一個圓形？看看 CodePen 上一些有趣的 Canvas 繪圖。這裡有一個[特別令人印象深刻的例子](https://codepen.io/dissimulate/pen/KrAwx)。

## 載入並繪製圖片資源

繪製基本形狀對於入門非常有用，但大多數遊戲需要真正的圖片！精靈圖、背景和紋理是讓遊戲具有視覺吸引力的關鍵。在 Canvas 上載入和顯示圖片與繪製幾何形狀的方式不同，但一旦理解了過程，就會變得非常簡單。

我們需要創建一個 `Image` 對象，載入圖片檔案（這是異步進行的，意味著它在背景中完成），然後在圖片準備好後將其繪製到 Canvas 上。這種方法確保你的圖片能夠正確顯示，而不會在載入時阻塞應用程式。

### 基本圖片載入

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**這段程式碼的作用：**
- 我們 **創建** 一個全新的 Image 對象來保存精靈圖或紋理
- 我們 **指定** 要載入的圖片檔案，通過設置來源路徑
- 我們 **監聽** 載入事件，以便確切知道圖片何時準備好使用

### 更好的圖片載入方式

以下是一種更健全的圖片載入方式，專業開發者通常使用這種方法。我們將圖片載入邏輯包裝在基於 Promise 的函數中——這種方法在 ES6 標準化 JavaScript Promises 後變得流行，使你的程式碼更有組織性並能優雅地處理錯誤：

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**我們在這裡做了什麼：**
- **包裝**所有圖片載入邏輯到 Promise 中，以便更好地處理
- **添加**錯誤處理，實際告訴我們何時出現問題
- **使用**現代的 async/await 語法，因為它更易於閱讀
- **包含** try/catch 塊，以優雅地處理任何載入問題

一旦你的圖片載入完成，將它們繪製到 Canvas 上其實非常簡單：

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**逐步解析：**
- 我們 **載入**英雄和怪物圖片，使用 await 在背景中完成
- 我們 **抓取** Canvas 元素並獲取所需的 2D 渲染上下文
- 我們 **定位**英雄圖片到中心位置，使用一些簡單的座標計算
- 我們 **放置**怪物圖片到左上角，開始敵人陣型
- 我們 **捕捉**任何可能在載入或渲染過程中發生的錯誤

## 現在是開始建立你的遊戲的時候了

現在我們將把所有內容結合起來，創建你的太空遊戲的視覺基礎。你已經對 Canvas 基礎和圖片載入技術有了扎實的理解，因此這部分的實作將指導你建立一個完整的遊戲畫面，並正確定位精靈圖。

### 要建立什麼

你將建立一個包含 Canvas 元素的網頁。它應該渲染一個 `1024*768` 的黑色螢幕。我們已提供兩張圖片：

- 英雄飛船

   ![英雄飛船](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.mo.png)

- 5×5 怪物

   ![怪物飛船](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.mo.png)

### 建議的開發步驟

找到位於 `your-work` 子資料夾中的起始檔案。你的專案結構應包含：

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**你正在使用的內容：**
- **遊戲精靈圖**存放在 `assets/` 資料夾中，保持一切井然有序
- **主要 HTML 檔案**設置 Canvas 元素並準備好一切
- **JavaScript 檔案**是你撰寫所有遊戲渲染魔法的地方
- **package.json**設置開發伺服器，讓你可以在本地測試

在 Visual Studio Code 中打開此資料夾開始開發。你需要一個本地開發環境，安裝了 Visual Studio Code、NPM 和 Node.js。如果你的電腦尚未設置 `npm`，[這裡是安裝方法](https://www.npmjs.com/get-npm)。

通過導航到 `your-work` 資料夾啟動開發伺服器：

```bash
cd your-work
npm start
```

**這個命令的作用：**
- **啟動**本地伺服器，位於 `http://localhost:5000`，以便測試你的遊戲
- **正確提供**所有檔案，讓瀏覽器能夠正確載入它們
- **監控**你的檔案變更，讓你能順利開發
- **提供**專業的開發環境來測試一切

> 💡 **注意**：你的瀏覽器最初會顯示一個空白頁面——這是正常的！隨著你添加程式碼，刷新瀏覽器即可看到變更。這種迭代開發方式類似於 NASA 建造阿波羅導航電腦的方式——在整合到更大的系統之前測試每個組件。

### 添加程式碼

在 `your-work/app.js` 中添加所需程式碼，完成以下任務：

1. **繪製黑色背景的 Canvas**
   > 💡 **方法**：在 `/app.js` 中找到 TODO，添加兩行程式碼。設置 `ctx.fillStyle` 為黑色，然後使用 `ctx.fillRect()` 從 (0,0) 開始，使用 Canvas 的尺寸。簡單！

2. **載入遊戲紋理**
   > 💡 **方法**：使用 `await loadAsset()` 載入玩家和敵人圖片。將它們存儲在變數中，以便稍後使用。記住——它們不會顯示，直到你實際繪製它們！

3. **將英雄飛船繪製到中心底部位置**
   > 💡 **方法**：使用 `ctx.drawImage()` 定位你的英雄。x 座標可以使用 `canvas.width / 2 - 45` 來居中，y 座標使用 `canvas.height - canvas.height / 4` 放置在底部區域。

4. **繪製 5×5 的敵人飛船陣型**
   > 💡 **方法**：找到 `createEnemies` 函數並設置嵌套迴圈。你需要進行一些數學計算來進行間距和定位，但別擔心——我會告訴你具體方法！

首先，設置常數以正確佈局敵人陣型：

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**這些常數的作用：**
- 我們 **設置** 每行和每列 5 個敵人（漂亮的 5×5 網格）
- 我們 **定義** 每個敵人之間的間距，讓它們看起來不擁擠
- 我們 **計算** 整個陣型的寬度
- 我們 **確定** 開始和結束位置，使陣型看起來居中

然後，創建嵌套迴圈以繪製敵人陣型：

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**這個嵌套迴圈的作用：**
- 外層迴圈 **從左到右** 移動整個陣型
- 內層迴圈 **從上到下** 創建整齊的行
- 我們 **繪製** 每個敵人精靈圖到計算出的精確 x,y 座標
- 一切都保持 **均勻間距**，看起來專業且有組織

## 最終結果

完成後的結果應如下所示：

![黑色螢幕，中央有英雄飛船，5×5 怪物陣型](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.mo.png)

## 解答

請先嘗試自己解決，但如果遇到困難，可以查看[解答](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)。

---

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 使用你學到的 Canvas API 技術，為你的太空遊戲 Canvas 添加視覺效果和互動元素。

**提示：** 創建一個名為 `enhanced-canvas.html` 的新檔案，Canvas 上顯示背景中動畫星星、英雄飛船的脈動生命條，以及緩慢向下移動的敵人飛船。包含 JavaScript 程式碼，繪製隨機位置和透明度的閃爍星星，實現根據生命值變化顏色的生命條（綠色 > 黃色 > 紅色），並使敵人飛船以不同速度向下移動。

了解更多關於 [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的內容。

## 🚀 挑戰

你已經學習了使用 2D Canvas API 繪圖；看看 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)，嘗試繪製一個 3D 物件。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/32)

## 回顧與自學

通過[閱讀相關內容](https://developer.mozilla.org/docs/Web/API/Canvas_API)了解更多 Canvas API。

## 作業

[玩轉 Canvas API](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。