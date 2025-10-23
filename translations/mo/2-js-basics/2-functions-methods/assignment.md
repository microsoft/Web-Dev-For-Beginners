<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-22T22:34:42+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "mo"
}
-->
# 與函數的趣味互動

## 說明

在這次作業中，你將練習創建不同類型的函數，以加強你對 JavaScript 函數、參數、預設值以及返回值的理解。

建立一個名為 `functions-practice.js` 的 JavaScript 文件，並實現以下函數：

### 第一部分：基本函數
1. **創建一個名為 `sayHello` 的函數**，該函數不接受任何參數，只需在控制台輸出 "Hello!"。

2. **創建一個名為 `introduceYourself` 的函數**，該函數接受一個 `name` 參數，並在控制台輸出類似 "Hi, my name is [name]" 的訊息。

### 第二部分：帶有預設參數的函數
3. **創建一個名為 `greetPerson` 的函數**，該函數接受兩個參數：`name`（必填）和 `greeting`（可選，預設值為 "Hello"）。該函數應在控制台輸出類似 "[greeting], [name]!" 的訊息。

### 第三部分：返回值的函數
4. **創建一個名為 `addNumbers` 的函數**，該函數接受兩個參數（`num1` 和 `num2`），並返回它們的總和。

5. **創建一個名為 `createFullName` 的函數**，該函數接受 `firstName` 和 `lastName` 參數，並返回完整姓名作為一個字符串。

### 第四部分：綜合應用
6. **創建一個名為 `calculateTip` 的函數**，該函數接受兩個參數：`billAmount`（必填）和 `tipPercentage`（可選，預設值為 15）。該函數應計算並返回小費金額。

### 第五部分：測試你的函數
添加函數調用以測試每個函數，並使用 `console.log()` 顯示結果。

**範例測試調用：**
```javascript
// Test your functions here
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

| 評分項目 | 優秀 | 合格 | 需要改進 |
| -------- | ----- | ----- | -------- |
| **函數創建** | 所有 6 個函數均正確實現，並符合語法和命名規範 | 4-5 個函數正確實現，僅有輕微語法問題 | 僅實現 3 個或更少函數，或存在重大語法錯誤 |
| **參數與預設值** | 正確使用必填參數、可選參數和指定的預設值 | 正確使用參數，但可能存在預設值問題 | 參數實現不正確或缺失 |
| **返回值** | 應返回值的函數正確返回值，不應返回值的函數僅執行操作 | 大多數返回值正確，僅有輕微問題 | 返回值存在重大問題 |
| **代碼品質** | 代碼清晰、結構良好，變數命名有意義且縮排正確 | 代碼可運行，但可以更清晰或更有結構 | 代碼難以閱讀或結構不佳 |
| **測試** | 所有函數均通過適當的函數調用進行測試，結果顯示清晰 | 大多數函數測試充分 | 函數測試有限或不正確 |

## 額外挑戰（可選）

如果你想進一步挑戰自己：

1. **創建其中一個函數的箭頭函數版本**
2. **創建一個接受另一個函數作為參數的函數**（例如課程中的 `setTimeout` 示例）
3. **添加輸入驗證**，以確保你的函數能夠妥善處理無效輸入

---

> 💡 **提示**：記得打開瀏覽器的開發者控制台（F12），查看你的 `console.log()` 語句的輸出！

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。