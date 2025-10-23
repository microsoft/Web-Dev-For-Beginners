<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-22T22:45:22+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "mo"
}
-->
# 微型生態瓶項目第二部分：CSS入門

![CSS入門](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.mo.png)
> 手繪筆記由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

還記得你的HTML微型生態瓶看起來非常簡單嗎？CSS就是用來將這個簡單的結構轉變成視覺上更吸引人的東西。

如果說HTML就像建造房子的框架，那麼CSS就是讓房子變得溫馨的所有元素——油漆顏色、家具佈局、燈光以及房間之間的流動感。想想凡爾賽宮如何從一個簡單的狩獵小屋，通過精心的裝飾和佈局，變成世界上最宏偉的建築之一。

今天，我們將把你的微型生態瓶從功能性轉變為精緻的作品。你將學習如何精確地定位元素，讓佈局適應不同的屏幕尺寸，並創造出吸引人的網站視覺效果。

在本課程結束時，你將看到策略性地使用CSS樣式如何顯著提升你的項目。讓我們為你的微型生態瓶增添一些風格吧！

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/17)

## CSS入門

CSS通常被認為只是“讓東西變得漂亮”，但它的用途遠不止於此。CSS就像電影的導演——你不僅控制所有事物的外觀，還控制它們的移動、交互反應以及適應不同情況的能力。

現代CSS功能非常強大。你可以編寫代碼，讓佈局自動適應手機、平板電腦和桌面電腦。你可以創建流暢的動畫，引導用戶的注意力到需要的地方。當所有元素協同工作時，效果會非常令人印象深刻。

> 💡 **專業提示**：CSS不斷演變，擁有新的功能和能力。在使用新功能於生產項目之前，請隨時檢查 [CanIUse.com](https://caniuse.com) 以確認瀏覽器的支持情況。

**在本課程中，我們將完成以下目標：**
- **創建** 使用現代CSS技術的完整微型生態瓶視覺設計
- **探索** 基本概念，例如層疊、繼承和CSS選擇器
- **實現** 響應式定位和佈局策略
- **構建** 使用CSS形狀和樣式的微型生態瓶容器

### 前置條件

你應該已完成上一課的微型生態瓶HTML結構，並準備好進行樣式設計。

> 📺 **視頻資源**：查看這個有用的視頻教程
>
> [![CSS基礎教程](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### 設置CSS文件

在開始設計之前，我們需要將CSS與HTML連接起來。這個連接告訴瀏覽器在哪裡找到微型生態瓶的樣式指令。

在你的微型生態瓶文件夾中，創建一個名為`style.css`的新文件，然後在HTML文檔的`<head>`部分中鏈接它：

```html
<link rel="stylesheet" href="./style.css" />
```

**這段代碼的作用：**
- **創建** HTML和CSS文件之間的連接
- **告訴** 瀏覽器加載並應用`style.css`中的樣式
- **使用** `rel="stylesheet"`屬性指定這是一個CSS文件
- **引用** 文件路徑`href="./style.css"`

## 理解CSS層疊

是否曾經想過為什麼CSS被稱為“層疊樣式表”？樣式像瀑布一樣層層疊加，有時會相互衝突。

想像一下軍事指揮結構——一個將軍的命令可能是“所有士兵穿綠色制服”，但對你的部隊的具體命令可能是“穿藍色禮服參加儀式”。更具體的指令會優先執行。CSS遵循類似的邏輯，理解這種層次結構可以讓調試更加容易。

### 試驗層疊優先級

讓我們通過創建樣式衝突來看看層疊的作用。首先，為你的`<h1>`標籤添加內聯樣式：

```html
<h1 style="color: red">My Terrarium</h1>
```

**這段代碼的作用：**
- **直接應用** 紅色到`<h1>`元素，使用內聯樣式
- **使用** `style`屬性直接在HTML中嵌入CSS
- **創建** 對於此特定元素的最高優先級樣式規則

接下來，將以下規則添加到你的`style.css`文件中：

```css
h1 {
  color: blue;
}
```

**在上述代碼中，我們：**
- **定義** 一個針對所有`<h1>`元素的CSS規則
- **設置** 文本顏色為藍色，使用外部樣式表
- **創建** 相較於內聯樣式更低的優先級規則

✅ **知識檢查**：你的網頁應用中顯示哪種顏色？為什麼這種顏色會勝出？你能想到哪些場景需要覆蓋樣式嗎？

> 💡 **CSS優先級順序（從高到低）：**
> 1. **內聯樣式**（style屬性）
> 2. **ID選擇器**（#myId）
> 3. **類選擇器**（.myClass）和屬性選擇器
> 4. **元素選擇器**（h1, div, p）
> 5. **瀏覽器默認樣式**

## CSS繼承的應用

CSS繼承的工作原理就像遺傳學——元素會從其父元素繼承某些屬性。如果你在`body`元素上設置字體系列，所有文本都會自動使用相同的字體。這就像哈布斯堡家族的獨特下巴特徵在幾代人中出現，而不需要為每個個體單獨指定。

然而，並非所有屬性都會被繼承。像字體和顏色這樣的文本樣式會被繼承，但像邊距和邊框這樣的佈局屬性則不會。就像孩子可能繼承父母的外貌特徵，但不會繼承他們的穿衣風格。

### 觀察字體繼承

讓我們通過在`<body>`元素上設置字體系列來看看繼承的作用：

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**這裡發生了什麼：**
- **設置** 整個頁面的字體系列，通過針對`<body>`元素
- **使用** 字體堆疊和備選選項以提高瀏覽器兼容性
- **應用** 現代系統字體，讓不同操作系統上的外觀都很出色
- **確保** 所有子元素都繼承此字體，除非特別覆蓋

打開瀏覽器的開發者工具（F12），導航到元素選項卡，檢查你的`<h1>`元素。你會看到它繼承了`body`的字體系列：

![繼承的字體](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.mo.png)

✅ **試驗時間**：嘗試在`<body>`上設置其他可繼承屬性，例如`color`、`line-height`或`text-align`。你的標題和其他元素會發生什麼變化？

> 📝 **可繼承屬性包括**：`color`、`font-family`、`font-size`、`line-height`、`text-align`、`visibility`
>
> **不可繼承屬性包括**：`margin`、`padding`、`border`、`width`、`height`、`position`

## 掌握CSS選擇器

CSS選擇器是你針對特定元素進行樣式設計的方式。它們就像給出精確的指令——與其說“房子”，你可能會說“在楓樹街上有紅色門的藍色房子”。

CSS提供了不同的方式來精確定位，選擇合適的選擇器就像選擇適合任務的工具。有時你需要設計整個街區的門，有時只需要設計一扇特定的門。

### 元素選擇器（標籤）

元素選擇器通過標籤名稱來定位HTML元素。它們非常適合設置適用於整個頁面的基礎樣式：

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**理解這些樣式：**
- **設置** 整個頁面的統一排版，使用`body`選擇器
- **移除** 瀏覽器的默認邊距和填充，以便更好地控制佈局
- **設計** 所有標題元素的顏色、對齊方式和間距
- **使用** `rem`單位進行可擴展、可訪問的字體大小設置

雖然元素選擇器非常適合一般樣式設計，但你需要更具體的選擇器來設計微型生態瓶中的個別組件，例如植物。

### 用於唯一元素的ID選擇器

ID選擇器使用`#`符號，定位具有特定`id`屬性的元素。由於ID在頁面中必須是唯一的，它們非常適合設計個別的特殊元素，例如我們的左右植物容器。

讓我們為微型生態瓶的植物側邊容器創建樣式：

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**這段代碼的作用：**
- **定位** 容器在屏幕的最左和最右邊，使用`absolute`定位
- **使用** `vh`（視口高度）單位，實現適應屏幕大小的響應式高度
- **應用** `box-sizing: border-box`，使填充包含在總寬度內
- **移除** 零值中的不必要`px`單位，讓代碼更簡潔
- **設置** 柔和的背景色，比純灰色更舒適

✅ **代碼質量挑戰**：注意這段CSS違反了DRY（不要重複自己）原則。你能否通過同時使用ID和類來重構它？

**改進方法：**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### 用於可重用樣式的類選擇器

類選擇器使用`.`符號，當你希望對多個元素應用相同的樣式時非常有用。與ID不同，類可以在整個HTML中重複使用，非常適合一致的樣式模式。

在我們的微型生態瓶中，每個植物需要相似的樣式，但也需要單獨的定位。我們將結合使用類來實現共享樣式，並使用ID進行獨特的定位。

**以下是每個植物的HTML結構：**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.mo.png" />
</div>
```

**關鍵元素解釋：**
- **使用** `class="plant-holder"` 為所有植物容器提供一致的樣式
- **應用** `class="plant"` 為共享的圖片樣式和行為
- **包含** 唯一的`id="plant1"` 用於個別定位和JavaScript交互
- **提供** 描述性的alt文本，方便屏幕閱讀器使用

現在將以下樣式添加到你的`style.css`文件中：

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**分解這些樣式：**
- **創建** 相對定位的植物容器，建立定位上下文
- **設置** 每個植物容器的高度為13%，確保所有植物垂直排列且不需要滾動
- **稍微向左移動** 容器，以便更好地將植物居中於其容器內
- **允許** 植物使用`max-width`和`max-height`屬性進行響應式縮放
- **使用** `z-index` 將植物層疊在微型生態瓶的其他元素之上
- **添加** 微妙的懸停效果，通過CSS過渡增強用戶交互

✅ **批判性思考**：為什麼我們需要同時使用`.plant-holder`和`.plant`選擇器？如果我們只使用其中一個會發生什麼？

> 💡 **設計模式**：容器（`.plant-holder`）控制佈局和定位，而內容（`.plant`）控制外觀和縮放。這種分離使代碼更易於維護和靈活。

## 理解CSS定位

CSS定位就像是舞台劇的導演——你指導每個演員站在哪裡以及如何在舞台上移動。有些演員遵循標準佈局，而有些需要特定的定位以達到戲劇效果。

一旦你理解了定位，許多佈局挑戰就變得可控了。需要一個在用戶滾動時保持在頂部的導航欄？定位可以解決這個問題。想要一個特定位置出現的提示框？這也是定位的作用。

### 五種定位值

| 定位值 | 行為 | 使用場景 |
|-------|------|----------|
| `static` | 默認流，忽略top/left/right/bottom | 正常文檔佈局 |
| `relative` | 相對於其正常位置定位 | 小調整，創建定位上下文 |
| `absolute` | 相對於最近的定位祖先定位 | 精確放置，疊加層 |
| `fixed` | 相對於視口定位 | 導航欄，浮動元素 |
| `sticky` | 根據滾動在相對和固定之間切換 | 滾動時固定的標題 |

### 微型生態瓶中的定位

我們的微型生態瓶使用了多種定位類型的策略組合，以創建所需的佈局：

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**理解定位策略：**
- **絕對容器** 從正常文檔流中移除，並固定在屏幕邊緣
- **相對植物容器** 創建定位上下文，同時保持在文檔流中
- **絕對植物** 可以在其相對容器內精確定位
- **這種組合** 允許植物垂直堆疊，同時可以單獨定位

> 🎯 **為什麼這很重要**：植物元素需要絕對定位，以便在下一課中實現可拖動功能。絕對定位將它們從正常佈局流中移除，使拖放交互成為可能。

✅ **試驗時間**：嘗試更改定位值並觀察結果：
- 如果將`.container`從`absolute`改為`relative`會發生什麼？
- 如果`.plant-holder`使用`absolute`而不是`relative`，佈局會如何改變？
- 如果將`.plant`切換到`relative`定位會發生什麼？

## 使用CSS構建微型生態瓶

現在我們將僅使用CSS來構建一個玻璃瓶——不需要圖片或圖形軟件。

使用定位和透明度創建逼真的玻璃、陰影和深度效果展示了CSS的視覺能力。這種技術類似於包豪斯運動中的建築師如何使用簡單的幾何形狀創造出複雜而美麗的結構。一旦你理解了這些原則，你就能識別出許多網頁設計背後的CSS技術。

### 創建玻璃瓶組件
讓我們一步步建造玻璃瓶生態系統。每個部分都使用絕對定位和基於百分比的尺寸設計以實現響應式設計：

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**了解玻璃瓶生態系統的構造：**
- **使用**基於百分比的尺寸以便在所有屏幕尺寸上進行響應式縮放
- **定位**元素為絕對位置，以精確堆疊和對齊
- **應用**不同的透明度值以創造玻璃的透明效果
- **實現**`z-index`分層，使植物看起來位於瓶子內部
- **添加**細微的盒子陰影和精緻的圓角以增強真實感

### 使用百分比進行響應式設計

注意所有尺寸都使用百分比而非固定像素值：

**為什麼這很重要：**
- **確保**玻璃瓶生態系統在任何屏幕尺寸上都能按比例縮放
- **保持**瓶子各部分之間的視覺關係
- **提供**從手機到大型桌面顯示器的一致體驗
- **允許**設計在不破壞視覺布局的情況下進行自適應

### CSS單位的應用

我們使用`rem`單位來設置圓角，這些單位相對於根字體大小進行縮放。這樣可以創造出更符合用戶字體偏好的可訪問設計。了解更多[CSS相對單位](https://www.w3.org/TR/css-values-3/#font-relative-lengths)的官方規範。

✅ **視覺實驗**：嘗試修改以下值並觀察效果：
- 將瓶子的透明度從0.5改為0.8——這如何影響玻璃的外觀？
- 將泥土顏色從`#3a241d`改為`#8B4513`——這對視覺效果有什麼影響？
- 將泥土的`z-index`改為2——分層會發生什麼變化？

---

## GitHub Copilot Agent 挑戰 🚀

使用Agent模式完成以下挑戰：

**描述：** 創建一個CSS動畫，使玻璃瓶生態系統中的植物輕輕地左右搖擺，模擬自然微風效果。這將幫助你練習CSS動畫、變換和關鍵幀，同時增強玻璃瓶生態系統的視覺吸引力。

**提示：** 添加CSS關鍵幀動畫，使玻璃瓶生態系統中的植物輕輕地左右搖擺。創建一個搖擺動畫，使每棵植物稍微向左和向右旋轉（2-3度），持續3-4秒，並將其應用到`.plant`類。確保動畫無限循環並具有自然運動的緩動函數。

了解更多關於[Agent模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)的信息。

## 🚀 挑戰：添加玻璃反射效果

準備好通過逼真的玻璃反射效果來增強你的玻璃瓶生態系統嗎？這項技術將為設計增添深度和真實感。

你將創建微妙的高光效果，模擬光線如何在玻璃表面反射。這種方法類似於文藝復興時期的畫家如Jan van Eyck如何利用光線和反射使繪製的玻璃看起來具有三維效果。以下是你的目標：

![完成的玻璃瓶生態系統](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.mo.png)

**你的挑戰：**
- **創建**微妙的白色或淺色橢圓形作為玻璃反射效果
- **將其**策略性地放置在瓶子的左側
- **應用**適當的透明度和模糊效果以實現逼真的光反射
- **使用**`border-radius`創造自然的氣泡狀形狀
- **嘗試**使用漸變或盒子陰影以增強真實感

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/18)

## 擴展你的CSS知識

CSS起初可能感覺很複雜，但理解這些核心概念能為更高級的技術打下堅實的基礎。

**你的下一步CSS學習領域：**
- **Flexbox** - 簡化元素的對齊和分佈
- **CSS Grid** - 提供強大的工具來創建複雜的布局
- **CSS變數** - 減少重複並提高可維護性
- **響應式設計** - 確保網站在不同屏幕尺寸上表現良好

### 互動學習資源

通過以下有趣的互動遊戲練習這些概念：
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - 通過有趣的挑戰掌握Flexbox
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - 通過種植虛擬胡蘿蔔學習CSS Grid
- 🎯 [CSS Battle](https://cssbattle.dev/) - 通過編碼挑戰測試你的CSS技能

### 進一步學習

要全面了解CSS基礎知識，完成此Microsoft Learn模組：[使用CSS設計你的HTML應用](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## 作業

[CSS重構](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或誤釋不承擔責任。