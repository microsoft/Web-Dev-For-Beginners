<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2026-01-06T12:16:19+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "hk"
}
-->
# 函數樂趣

## 指示

在這個作業中，你將練習創建不同類型的函數，以加強你對 JavaScript 函數、參數、預設值和回傳語句的理解。

建立一個名為 `functions-practice.js` 的 JavaScript 檔案，並實作以下函數：

### 第一部分：基本函數
1. **建立一個名為 `sayHello` 的函數**，不接受任何參數，並只在控制台輸出 "Hello!"。

2. **建立一個名為 `introduceYourself` 的函數**，接受一個 `name` 參數，並在控制台輸出類似 "Hi, my name is [name]" 的訊息。

### 第二部分：帶有預設參數的函數
3. **建立一個名為 `greetPerson` 的函數**，接受兩個參數：`name`（必需）和 `greeting`（可選，預設為 "Hello"）。函數應該在控制台輸出類似 "[greeting], [name]!" 的訊息。

### 第三部分：回傳值的函數
4. **建立一個名為 `addNumbers` 的函數**，接受兩個參數（`num1` 和 `num2`）並回傳它們的和。

5. **建立一個名為 `createFullName` 的函數**，接受 `firstName` 和 `lastName` 參數，並回傳組合後的全名字串。

### 第四部分：綜合應用
6. **建立一個名為 `calculateTip` 的函數**，接受兩個參數：`billAmount`（必需）和 `tipPercentage`（可選，預設為 15）。函數應該計算並回傳小費金額。

### 第五部分：測試你的函數
新增函數呼叫來測試每個函數，並使用 `console.log()` 顯示結果。

**範例測試呼叫：**
```javascript
// 在此測試你的函數
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

## 評分標準

| 評分項目 | 優秀 | 及格 | 需改進 |
| -------- | --------- | -------- | ----------------- |
| **函數建立** | 6 個函數皆正確實作，符合語法與命名慣例 | 4-5 個函數正確實作，語法有輕微問題 | 3 個或更少函數有正確實作，或語法錯誤嚴重 |
| **參數與預設值** | 正確使用必需參數、可選參數及預設值 | 正確使用參數，但預設值有問題 | 參數實作錯誤或缺漏 |
| **回傳值** | 需回傳的函數皆正確回傳，不需回傳的函數僅執行動作 | 大部分回傳正確，有少許問題 | 回傳語句問題嚴重 |
| **程式碼品質** | 程式碼乾淨、有良好組織、有意義的變數名稱和適當縮排 | 程式碼可運作，但組織或清晰度可改善 | 程式碼難讀或結構不佳 |
| **測試** | 所有函數皆有適當測試並清楚顯示結果 | 大部分函數有測試 | 測試函數有限或錯誤 |

## 額外挑戰（選做）

如果你想更進一步挑戰自己：

1. **建立其中一個函數的箭頭函數版本**
2. **建立一個接受另一個函數作為參數的函數**（如課程中 `setTimeout` 範例）
3. **加入輸入驗證**，確保函數能優雅處理無效輸入

---

> 💡 **小提示**：記得開啟你瀏覽器的開發者控制台（F12）以查看 `console.log()` 的輸出！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件乃使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 所翻譯。儘管我們力求準確，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件之原文版本應被視為權威來源。對於重要資訊，建議採用專業人工翻譯。本公司不對因使用本翻譯所引致的任何誤解或曲解承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->