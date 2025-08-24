<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-23T22:39:31+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "tw"
}
-->
# 運算子

## 說明

試著使用運算子。以下是一個可以實現的程式建議：

你有一組來自兩個不同評分系統的學生。

### 第一個評分系統

第一個評分系統的分數範圍是1到5，其中3分及以上表示通過課程。

### 第二個評分系統

另一個評分系統的分數包括 `A, A-, B, B-, C, C-`，其中 `A` 是最高分，`C` 是最低的及格分數。

### 任務

給定以下陣列 `allStudents`，表示所有學生及其分數，構造一個新的陣列 `studentsWhoPass`，包含所有通過的學生。

> TIP，使用 for 迴圈、if...else 和比較運算子：

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## 評分標準

| 評分項目 | 優秀表現                     | 合格表現                     | 需要改進                     |
| -------- | ---------------------------- | ---------------------------- | ---------------------------- |
|          | 提供完整的解決方案           | 提供部分解決方案             | 提供有錯誤的解決方案         |

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。