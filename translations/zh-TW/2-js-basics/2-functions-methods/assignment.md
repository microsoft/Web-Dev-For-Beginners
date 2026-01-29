# Fun with Functions

## Instructions

在此作業中，您將練習建立不同類型的函式，以加強您所學的 JavaScript 函式、參數、預設值和回傳語句的概念。

建立一個名為 `functions-practice.js` 的 JavaScript 檔案並實作以下函式：

### Part 1: Basic Functions
1. **建立一個名為 `sayHello` 的函式**，不接收任何參數，並在控制台印出 "Hello!"。

2. **建立一個名為 `introduceYourself` 的函式**，接收一個 `name` 參數，並在控制台印出類似 "Hi, my name is [name]" 的訊息。

### Part 2: Functions with Default Parameters
3. **建立一個名為 `greetPerson` 的函式**，接收兩個參數：`name`（必填）和 `greeting`（選填，預設為 "Hello"）。函式應該在控制台印出類似 "[greeting], [name]!" 的訊息。

### Part 3: Functions that Return Values
4. **建立一個名為 `addNumbers` 的函式**，接收兩個參數 (`num1` 和 `num2`)，並回傳它們的和。

5. **建立一個名為 `createFullName` 的函式**，接收 `firstName` 和 `lastName` 參數，並回傳完整名字的字串。

### Part 4: Mix It All Together
6. **建立一個名為 `calculateTip` 的函式**，接收兩個參數：`billAmount`（必填）和 `tipPercentage`（選填，預設為 15）。函式應計算並回傳小費金額。

### Part 5: Test Your Functions
加入函式呼叫測試每個函式，並使用 `console.log()` 顯示結果。

**範例測試呼叫：**
```javascript
// 在這裡測試你的函式
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubric

| Criteria | Exemplary | Adequate | Needs Improvement |
| -------- | --------- | -------- | ----------------- |
| **Function Creation** | 所有 6 個函式依正確語法與命名慣例正確實作 | 正確實作 4-5 個函式，有輕微語法錯誤 | 實作 3 個或更少函式，或有重大語法錯誤 |
| **Parameters & Default Values** | 依指定正確使用必填參數、選填參數及預設值 | 正確使用參數，但預設值使用可能有問題 | 參數實作錯誤或遺漏 |
| **Return Values** | 應回傳值的函式正確回傳，不需回傳值的函式僅執行動作 | 大多數回傳正確，僅有輕微問題 | 回傳語句有重大問題 |
| **Code Quality** | 代碼乾淨、結構良好，變數命名有意義且縮排適當 | 代碼可運作，但可更整潔或更有條理 | 代碼難讀或結構差 |
| **Testing** | 所有函式均有適當測試呼叫且結果清楚顯示 | 大部分函式有適當測試 | 測試函式有限或錯誤 |

## Bonus Challenges (Optional)

如果您想挑戰自我進階：

1. **建立一個箭頭函式版本**的其中一個函式
2. **建立一個可接受另一函式作為參數的函式**（如課程中的 `setTimeout` 範例）
3. **加入輸入驗證**，確保函式能優雅地處理無效輸入

---

> 💡 **提示**：記得開啟瀏覽器的開發者控制台（F12）以查看 `console.log()` 語句的輸出！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件由人工智慧翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於確保翻譯的準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原文文件的母語版本應視為權威來源。對於重要資訊，建議聘請專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤釋負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->