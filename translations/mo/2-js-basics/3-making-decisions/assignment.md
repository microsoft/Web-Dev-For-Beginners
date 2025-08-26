<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-25T21:38:02+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "mo"
}
-->
# 運算子

## 說明

試著操作運算子。以下是一個你可以實作的程式建議：

你有一組來自兩種不同評分系統的學生。

### 第一種評分系統

第一種評分系統的分數範圍是 1 到 5，其中 3 分及以上表示通過課程。

### 第二種評分系統

另一種評分系統的分數為 `A, A-, B, B-, C, C-`，其中 `A` 是最高分，`C` 是最低的及格分數。

### 任務

給定以下陣列 `allStudents`，表示所有學生及其成績，建立一個新的陣列 `studentsWhoPass`，包含所有通過的學生。

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

| 評分項目 | 優秀                          | 合格                          | 需要改進                        |
| -------- | ----------------------------- | ----------------------------- | ------------------------------- |
|          | 提供完整的解決方案            | 提供部分解決方案              | 提供有錯誤的解決方案            |

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。