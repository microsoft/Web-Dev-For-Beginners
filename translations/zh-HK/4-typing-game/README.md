# 事件驅動程式設計 - 建立一個打字遊戲

```mermaid
journey
    title 你的打字遊戲開發旅程
    section 基礎
      計劃遊戲結構: 3: Student
      設計用戶界面: 4: Student
      設置 HTML 元素: 4: Student
    section 功能
      處理用戶輸入: 4: Student
      跟蹤時間: 5: Student
      計算準確度: 5: Student
    section 功能特色
      增加視覺反饋: 5: Student
      實現遊戲邏輯: 5: Student
      美化體驗: 5: Student
```
## 介紹

有一件每個開發者都知道但很少談論的事：打字快是超能力！🚀 想想看——你越快把腦中的想法輸入到程式編輯器，創造力就能流動得越順暢。就像你的思緒和螢幕之間有條直接的管道。

```mermaid
pie title 遊戲功能
    "即時反饋" : 25
    "效能追蹤" : 20
    "互動介面" : 20
    "計時系統" : 15
    "引言管理" : 10
    "結果顯示" : 10
```
想知道提升這項技能的最佳方法之一嗎？你猜對了——我們要做一款遊戲！

```mermaid
flowchart LR
    A[玩家開始遊戲] --> B[隨機顯示語錄]
    B --> C[玩家輸入字元]
    C --> D{字元正確嗎？}
    D -->|是| E[綠色高亮]
    D -->|否| F[紅色高亮]
    E --> G[更新準確率]
    F --> G
    G --> H{語錄完成了嗎？}
    H -->|否| C
    H -->|是| I[計算每分鐘字數]
    I --> J[顯示結果]
    J --> K[再玩一次？]
    K -->|是| B
    K -->|否| L[遊戲結束]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> 讓我們一起創造一款超棒的打字遊戲吧！

準備好運用你學習的 JavaScript、HTML 和 CSS 技能了嗎？我們要建立一個打字遊戲，遊戲內容會挑戰你打出來自傳奇偵探 [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes) 的隨機名言。遊戲會追蹤你打字的速度和準確性——相信我，這比你想像中還要令人上癮！

```mermaid
mindmap
  root((打字遊戲開發))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```
![demo](../../../4-typing-game/images/demo.gif)

## 你需要知道的

```mermaid
flowchart TD
    A[用戶動作] --> B{事件類型？}
    B -->|鍵盤按鍵| C[鍵盤事件]
    B -->|按鈕點擊| D[滑鼠事件]
    B -->|計時器| E[時間事件]
    
    C --> F[檢查字元]
    D --> G[開始/重設遊戲]
    E --> H[更新計時器]
    
    F --> I{正確？}
    I -->|是| J[標示綠色]
    I -->|否| K[標示紅色]
    
    J --> L[更新分數]
    K --> L
    L --> M[檢查遊戲狀態]
    
    G --> N[生成新名言]
    H --> O[顯示時間]
    
    M --> P{遊戲完成？}
    P -->|是| Q[顯示結果]
    P -->|否| R[繼續遊戲]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
在深入之前，請確保你熟悉以下概念（如果需要快速複習也沒關係——我們都經歷過！）：

- 建立文字輸入和按鈕控件
- CSS 與使用類別設定樣式  
- JavaScript 基礎
  - 建立陣列
  - 產生隨機數字
  - 取得目前時間

如果有任何部分感覺有點生疏，也完全沒問題！有時候鞏固知識的最好方式就是開始實作，邊做邊學。

### 🔄 **教學確認**
**基礎評估**：開始開發前，確保你了解：
- ✅ HTML 表單與輸入元素的工作原理
- ✅ CSS 類別與動態樣式設定
- ✅ JavaScript 事件監聽器與處理程序
- ✅ 陣列操作與隨機選擇
- ✅ 時間測量與計算

**快速自我測驗**：你能解釋這些概念如何在互動遊戲中協同運作嗎？
- **事件** 在使用者與元素互動時觸發
- **處理程序** 負責處理事件並更新遊戲狀態
- **CSS** 提供使用者行為的視覺反饋
- **計時** 使得效能測量和遊戲進展成為可能

```mermaid
quadrantChart
    title 打字遊戲技能發展
    x-axis 初學者 --> 專家
    y-axis 靜態 --> 互動式
    quadrant-1 進階遊戲
    quadrant-2 即時應用程式
    quadrant-3 基本頁面
    quadrant-4 互動網站
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## 開工吧！

[利用事件驅動程式設計創建打字遊戲](./typing-game/README.md)

### ⚡ **接下來 5 分鐘你可以做什麼**
- [ ] 開啟瀏覽器主控台，試試用 `addEventListener` 監聽鍵盤事件
- [ ] 建立一個簡單 HTML 頁面，有輸入欄並測試打字偵測
- [ ] 練習字串操作，將輸入文字與目標文字比對
- [ ] 嘗試使用 `setTimeout` 理解定時功能

### 🎯 **這一小時你可以完成什麼**
- [ ] 完成課後小測，理解事件驅動程式設計
- [ ] 建立打字遊戲的基本版本並驗證字詞
- [ ] 新增正確與錯誤打字的視覺反饋
- [ ] 實作基於速度與準確性的簡單計分系統
- [ ] 用 CSS 美化遊戲介面，使之更吸引人

### 📅 **這一週你的遊戲開發路線**
- [ ] 完成具備所有功能與細節的完整打字遊戲
- [ ] 新增難度等級，包含不同複雜度的字詞
- [ ] 實作用戶統計追蹤（WPM、準確率變化）
- [ ] 添加音效與動畫，提升使用體驗
- [ ] 讓遊戲響應式適用於觸控裝置
- [ ] 將遊戲分享線上並收集用戶回饋

### 🌟 **這一個月你的互動開發計畫**
- [ ] 開發多款遊戲，探索不同互動模式
- [ ] 學習遊戲循環、狀態管理與效能優化
- [ ] 貢獻開源遊戲開發專案
- [ ] 精通高階計時概念與流暢動畫
- [ ] 建立展示各式互動應用的作品集
- [ ] 指導其他對遊戲開發與用戶互動有興趣的人

## 🎯 你的打字遊戲精通時間表

```mermaid
timeline
    title 遊戲開發學習進度
    
    section 設置 (10分鐘)
        專案結構: HTML 基礎
                 : CSS 樣式設置
                 : JavaScript 檔案建立
        
    section 使用者介面 (20分鐘)
        互動元素: 輸入欄位
                  : 按鈕控制
                  : 顯示區域
                  : 響應式佈局
        
    section 事件處理 (25分鐘)
        使用者互動: 鍵盤事件
                    : 滑鼠事件
                    : 即時反饋
                    : 狀態管理
        
    section 遊戲邏輯 (30分鐘)
        核心功能: 引言產生
                  : 角色比較
                  : 精確度計算
                  : 計時器實作
        
    section 性能追蹤 (35分鐘)
        指標與分析: 每分鐘字數計算
                    : 錯誤追蹤
                    : 進度可視化
                    : 結果顯示
        
    section 美化與增強 (45分鐘)
        使用者體驗: 視覺反饋
                    : 音效
                    : 動畫
                    : 無障礙功能
        
    section 進階功能 (1週)
        擴展功能: 難度等級
                 : 排行榜
                 : 自訂引言
                 : 多人選項
        
    section 專業技能 (1個月)
        遊戲開發: 性能優化
                  : 代碼架構
                  : 測試策略
                  : 部署模式
```
### 🛠️ 你的遊戲開發工具包總結

完成這個專案後，你將掌握：
- **事件驅動程式設計**：對輸入反應的互動界面
- **即時反饋**：快速視覺與效能更新
- **效能測量**：精確的計時與計分系統
- **遊戲狀態管理**：控制應用流程與用戶體驗
- **互動設計**：創造引人入勝、令人上癮的使用體驗
- **現代網頁 API**：利用瀏覽器能力實現豐富互動
- **無障礙模式**：為所有使用者打造包容性設計

**實際應用場景**：這些技能適用於：
- **網頁應用程式**：任何互動界面或儀表板
- **教育軟體**：學習平台與技能評估工具
- **生產力工具**：文字編輯器、整合開發環境、協作軟體
- **遊戲產業**：瀏覽器遊戲與互動娛樂
- **行動開發**：觸控介面與手勢處理

**下一階段**：準備探索進階遊戲框架、即時多人系統或複雜的互動應用！

## 致謝

由 [Christopher Harrison](http://www.twitter.com/geektrainer) 以 ♥️ 撰寫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件乃使用人工智能翻譯服務【Co-op Translator】(https://github.com/Azure/co-op-translator) 翻譯而成。雖然我們致力於確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威資料。對於重要資訊，建議使用專業人工翻譯。對於因使用本翻譯而引致的任何誤解或誤釋，我們概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->