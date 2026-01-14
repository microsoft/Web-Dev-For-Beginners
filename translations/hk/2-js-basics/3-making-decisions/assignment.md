<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2026-01-06T12:20:58+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "hk"
}
-->
# Making Decisions: Student Grade Processor

## Learning Objectives

在這個作業中，你將透過建構一個處理不同評分系統中學生成績的程式，練習本課所學的決策製定概念。你將使用 `if...else` 陳述式、比較運算子及邏輯運算子以判斷哪些學生通過了課程。

## The Challenge

你為一所剛與另一機構合併的學校工作。現在你需要處理來自兩個完全不同評分系統的學生成績，並判斷哪些學生是及格的。這是練習條件邏輯的絕佳機會！

### Understanding the Grading Systems

#### First Grading System (Numeric)
- 成績以數字 1-5 表示
- **及格分數**：3 及以上（3、4 或 5）
- **不及格分數**：低於 3（1 或 2）

#### Second Grading System (Letter Grades)
- 成績使用字母：`A`、`A-`、`B`、`B-`、`C`、`C-`
- **及格成績**：`A`、`A-`、`B`、`B-`、`C`、`C-`（此系統列出的所有成績均為及格）
- **注意**：此系統不包含像 `D` 或 `F` 這類不及格成績

### Your Task

給定以下的陣列 `allStudents` ，表示所有學生及其成績，請建立一個新陣列 `studentsWhoPass` ，其中包含根據各自評分系統判斷及格的所有學生。

```javascript
let allStudents = [
  'A',    // 字母等級 - 通過
  'B-',   // 字母等級 - 通過
  1,      // 數字等級 - 不及格
  4,      // 數字等級 - 通過
  5,      // 數字等級 - 通過
  2       // 數字等級 - 不及格
];

let studentsWhoPass = [];
```

### Step-by-Step Approach

1. **設置迴圈** 遍歷 `allStudents` 陣列中的每項成績
2. **檢查成績類型**（是數字還是字串？）
3. **套用適當的評分系統規則**：
   - 若是數字：檢查成績是否 >= 3
   - 若是字串：檢查是否為有效的及格字母成績之一
4. **將及格的成績** 加入 `studentsWhoPass` 陣列

### Helpful Code Techniques

使用本課中提到的這些 JavaScript 概念：

- **typeof 運算子**：使用 `typeof grade === 'number'` 來檢查是否為數字成績
- **比較運算子**：使用 `>=` 比較數字成績
- **邏輯運算子**：使用 `||` 來檢查多個字母成績條件
- **if...else 陳述式**：處理不同評分系統
- **陣列方法**：使用 `.push()` 將通過的成績加入新陣列

### Expected Output

執行程式後，`studentsWhoPass` 應該包含：`['A', 'B-', 4, 5]`

**這些成績為何能通過：**
- `'A'` 和 `'B-'` 是有效的字母成績（此系統所有字母成績均及格）
- `4` 和 `5` 是數字成績且 >= 3
- `1` 和 `2` 失敗，因它們是數字成績且 < 3

## Testing Your Solution

使用不同情境測試你的程式碼：

```javascript
// 使用不同的分數組合進行測試
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// 你的解決方案應該能適用於任何有效分數的組合
```

## Bonus Challenges

完成基本作業後，嘗試以下擴充任務：

1. **新增驗證**：檢查無效成績（例如負數或無效字母）
2. **計算統計**：計算及格與不及格學生人數
3. **成績轉換**：將所有成績轉換成單一數字系統（A=5、B=4、C=3 等）

## Rubric

| Criteria | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|---------------|
| **Functionality** | 程式正確辨別兩系統所有及格成績 | 程式可運作但有些小問題或邊界狀況 | 程式部分運作但存在邏輯錯誤 | 程式有嚴重錯誤或無法執行 |
| **Code Structure** | 程式碼簡潔、有組織且適當使用 if...else 邏輯 | 結構良好，條件陳述適當 | 結構尚可但有組織問題 | 結構差，邏輯難以理解 |
| **Use of Concepts** | 有效運用比較運算子、邏輯運算子與條件陳述式 | 良好使用課程概念但有少許不足 | 部分使用課程概念，缺少重要部分 | 使用課程概念有限 |
| **Problem Solving** | 清楚理解問題並提出優雅解決方案 | 問題解決思路良好且邏輯紮實 | 合理的解決思路，但有些混亂 | 解決方法不清楚，未展現理解 |

## Submission Guidelines

1. **徹底測試你的程式碼**，使用提供的範例
2. **添加註解**，說明邏輯，特別是條件陳述部分
3. **核對輸出**是否符合預期結果：`['A', 'B-', 4, 5]`
4. **考慮邊界狀況**，如空陣列或意外的資料型別

> 💡 **專家小提示**：從簡單開始！先讓基本功能正常運作，再加入更複雜的功能。記得，本課的目標是練習決策邏輯並運用你所學的工具。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們力求準確，請注意自動翻譯可能包含錯誤或不準確之處。原文文件以其母語版本為準。如涉及重要資訊，建議尋求專業人工翻譯。本公司不對因使用本翻譯所引致的任何誤解或曲解承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->