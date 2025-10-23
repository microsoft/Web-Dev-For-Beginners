<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-22T22:54:29+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "mo"
}
-->
# 建造太空遊戲第4部分：添加雷射和檢測碰撞

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/35)

想想《星際大戰》中盧克的質子魚雷擊中死星排氣口的那一刻。那精確的碰撞檢測改變了整個銀河系的命運！在遊戲中，碰撞檢測的原理相同——它決定了物體何時互動以及接下來會發生什麼。

在本課中，你將為你的太空遊戲添加雷射武器並實現碰撞檢測。就像NASA的任務規劃者計算航天器軌跡以避免碎片一樣，你將學習如何檢測遊戲物體何時相交。我們會將這些分解成易於理解的步驟，逐步構建。

到最後，你將擁有一個功能完整的戰鬥系統，雷射可以摧毀敵人，碰撞會觸發遊戲事件。這些碰撞原理被廣泛應用於物理模擬到互動式網頁界面。

✅ 做一些研究，了解第一個電腦遊戲的功能是什麼？

## 碰撞檢測

碰撞檢測的工作原理就像阿波羅登月模組上的接近感應器——它不斷檢查距離，並在物體過於接近時觸發警報。在遊戲中，這個系統決定了物體何時互動以及接下來應該發生什麼。

我們將使用的方法將每個遊戲物體視為矩形，類似於航空交通管制系統使用簡化的幾何形狀來追蹤飛機。這種矩形方法看似簡單，但計算效率高，適用於大多數遊戲場景。

### 矩形表示法

每個遊戲物體都需要坐標邊界，類似於火星探路者探測器在火星表面上繪製其位置。以下是我們定義這些邊界坐標的方法：

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

**分解如下：**
- **上邊界**：物體在垂直方向上的起始位置（其y坐標）
- **左邊界**：物體在水平方向上的起始位置（其x坐標）
- **下邊界**：將高度加到y坐標——現在你知道它的結束位置！
- **右邊界**：將寬度加到x坐標——你就得到了完整的邊界。

### 相交算法

檢測矩形相交的邏輯類似於哈勃太空望遠鏡如何判斷天體是否在其視野中重疊。該算法檢查分離情況：

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**分離測試的工作原理類似於雷達系統：**
- 矩形2是否完全在矩形1的右側？
- 矩形2是否完全在矩形1的左側？
- 矩形2是否完全在矩形1的下方？
- 矩形2是否完全在矩形1的上方？

如果這些條件都不成立，那麼矩形必定是重疊的。這種方法類似於雷達操作員判斷兩架飛機是否保持安全距離。

## 管理物體生命週期

當雷射擊中敵人時，兩個物體都需要從遊戲中移除。然而，在循環中途刪除物體可能會導致崩潰——這是早期電腦系統（如阿波羅導航電腦）中學到的教訓。因此，我們使用“標記刪除”的方法，在幀之間安全地移除物體。

以下是標記刪除的方法：

```javascript
// Mark object for removal
enemy.dead = true;
```

**為什麼這種方法有效：**
- 我們將物體標記為“死亡”，但不會立即刪除它
- 這樣可以讓當前的遊戲幀安全完成
- 避免因試圖使用已刪除的物體而導致崩潰！

然後在下一次渲染循環之前過濾掉已標記的物體：

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**過濾的作用：**
- 創建一個僅包含“存活”物體的新列表
- 丟棄所有標記為死亡的物體
- 保持遊戲流暢運行
- 防止因銷毀的物體累積而導致的內存膨脹

## 實現雷射機制

遊戲中的雷射投射物的工作原理與《星際迷航》中的光子魚雷相同——它們是沿直線移動直到撞到某物的離散物體。每次按下空格鍵都會創建一個新的雷射物體，並在屏幕上移動。

要實現這一點，我們需要協調幾個不同的部分：

**需要實現的主要組件：**
- **創建**從英雄位置生成的雷射物體
- **處理**鍵盤輸入以觸發雷射創建
- **管理**雷射的移動和生命週期
- **實現**雷射投射物的視覺表示

## 實現射擊速率控制

無限制的射擊速率會使遊戲引擎不堪重負，並使遊戲過於簡單。真實的武器系統也面臨類似的限制——即使是《星際迷航》中企業號的相位炮也需要在射擊之間進行充能。

我們將實現一個冷卻系統，防止快速連射，同時保持響應式控制：

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**冷卻系統的工作原理：**
- 創建時，武器處於“熱”狀態（暫時無法射擊）
- 在超時期結束後，武器變為“冷”狀態（準備射擊）
- 在射擊之前，我們檢查：“武器是否冷卻？”
- 這防止了快速點擊，同時保持控制的響應性

✅ 回顧太空遊戲系列的第一課，了解有關冷卻系統的更多信息。

## 構建碰撞系統

你將擴展現有的太空遊戲代碼，創建一個碰撞檢測系統。就像國際空間站的自動碰撞避免系統一樣，你的遊戲將不斷監控物體位置並對相交做出反應。

從上一課的代碼開始，你將添加碰撞檢測，並設置特定規則來管理物體的交互。

> 💡 **專業提示**：雷射精靈已包含在你的資產文件夾中，並在代碼中引用，準備好實現。

### 要實現的碰撞規則

**需要添加的遊戲機制：**
1. **雷射擊中敵人**：當雷射投射物擊中敵人時，摧毀敵方物體
2. **雷射擊中屏幕邊界**：雷射到達屏幕頂部邊緣時被移除
3. **敵人與英雄碰撞**：當敵人和英雄相交時，兩個物體都被摧毀
4. **敵人到達底部**：當敵人到達屏幕底部時，遊戲結束

## 設置開發環境

好消息——我們已經為你準備好了大部分基礎工作！所有的遊戲資產和基本結構都在`your-work`子文件夾中，準備好讓你添加酷炫的碰撞功能。

### 項目結構

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**理解文件結構：**
- **包含**遊戲物體所需的所有精靈圖像
- **包括**主要的HTML文檔和JavaScript應用文件
- **提供**本地開發伺服器的包配置

### 啟動開發伺服器

導航到你的項目文件夾並啟動本地伺服器：

```bash
cd your-work
npm start
```

**這些命令序列：**
- **切換**到你的工作項目文件夾
- **啟動**本地HTTP伺服器，地址為`http://localhost:5000`
- **提供**你的遊戲文件以進行測試和開發
- **啟用**自動重新加載的即時開發

打開瀏覽器，導航到`http://localhost:5000`，查看當前的遊戲狀態，英雄和敵人已渲染在屏幕上。

### 分步實現

就像NASA系統地編程旅行者號航天器一樣，我們將有條不紊地逐步實現碰撞檢測。

#### 1. 添加矩形碰撞邊界

首先，讓我們教會遊戲物體如何描述它們的邊界。將此方法添加到你的`GameObject`類中：

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

**此方法的作用：**
- **創建**具有精確邊界坐標的矩形物體
- **計算**底部和右側邊界，使用位置加上尺寸
- **返回**一個準備好進行碰撞檢測算法的物體
- **提供**所有遊戲物體的標準化接口

#### 2. 實現相交檢測

現在讓我們創建一個碰撞檢測函數——它可以判斷兩個矩形是否重疊：

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

**此算法的工作原理：**
- **測試**矩形之間的四個分離條件
- 如果任何分離條件為真，則**返回**`false`
- 如果沒有分離存在，則**表示**發生碰撞
- **使用**否定邏輯進行高效的相交測試

#### 3. 實現雷射射擊系統

現在到了激動人心的時刻！讓我們設置雷射射擊系統。

##### 消息常量

首先，定義一些消息類型，以便遊戲的不同部分可以相互通信：

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**這些常量提供：**
- **標準化**應用中的事件名稱
- **啟用**遊戲系統之間的一致通信
- **防止**事件處理器註冊中的拼寫錯誤

##### 鍵盤輸入處理

將空格鍵檢測添加到你的鍵盤事件監聽器：

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**此輸入處理器：**
- **檢測**使用keyCode 32的空格鍵按下
- **發送**標準化的事件消息
- **啟用**解耦的射擊邏輯

##### 事件監聽器設置

在你的`initGame()`函數中註冊射擊行為：

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**此事件監聽器：**
- **響應**空格鍵事件
- **檢查**射擊冷卻狀態
- **觸發**雷射創建（如果允許）

為雷射與敵人的交互添加碰撞處理：

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**此碰撞處理器：**
- **接收**碰撞事件數據，包括兩個物體
- **標記**兩個物體為刪除
- **確保**碰撞後的正確清理

#### 4. 創建雷射類

實現一個向上移動並管理自身生命週期的雷射投射物：

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**此類的實現：**
- **繼承**GameObject以獲得基本功能
- **設置**雷射精靈的適當尺寸
- **創建**使用`setInterval()`的自動向上移動
- **處理**到達屏幕頂部時的自我銷毀
- **管理**自己的動畫時間和清理

#### 5. 實現碰撞檢測系統

創建一個全面的碰撞檢測函數：

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**此碰撞系統：**
- **過濾**遊戲物體類型以進行高效測試
- **測試**每個雷射與每個敵人之間的相交
- **發送**碰撞事件，當檢測到相交時
- **清理**碰撞處理後銷毀的物體

> ⚠️ **重要**：在`window.onload`的主遊戲循環中添加`updateGameObjects()`以啟用碰撞檢測。

#### 6. 為Hero類添加冷卻系統

使用射擊機制和速率限制功能增強Hero類：

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
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

**理解增強的Hero類：**
- **初始化**冷卻計時器為零（準備射擊）
- **創建**位於英雄飛船上方的雷射物體
- **設置**冷卻期以防止快速射擊
- **使用間隔更新**減少冷卻計時器
- **通過`canFire()`方法**提供射擊狀態檢查

### 測試你的實現

你的太空遊戲現在擁有完整的碰撞檢測和戰鬥機制。🚀 測試這些新功能：
- **使用方向鍵**移動，檢查控制是否正常
- **按空格鍵射擊雷射**——注意冷卻系統如何防止快速點擊
- **觀察碰撞**，雷射擊中敵人時觸發移除
- **驗證清理**，銷毀的物體從遊戲中消失

你已成功使用指導航天器導航和機器人技術的相同數學原理，實現了一個碰撞檢測系統。

## GitHub Copilot Agent 挑戰 🚀

使用Agent模式完成以下挑戰：

**描述：** 增強碰撞檢測系統，實現隨機生成的強化道具，當英雄飛船收集時提供臨時能力。

**提示：** 創建一個繼承GameObject的PowerUp類，並實現英雄與強化道具之間的碰撞檢測。添加至少兩種類型的強化道具：一種增加射擊速率（減少冷卻時間），另一種創建臨時護盾。包括隨機間隔和位置生成強化道具的邏輯。

---

## 🚀 挑戰

添加爆炸效果！查看[Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt)中的遊戲資產，嘗試在雷射擊中外星人時添加爆炸效果。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/36)

## 回顧與自學

嘗試調整你遊戲中的間隔。當你改變它們時會發生什麼？閱讀更多關於[JavaScript時間事件](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)的內容。

## 作業

[探索碰撞](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。