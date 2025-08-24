<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-23T22:39:24+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "zh"
}
-->
# 运算符

## 说明

尝试使用运算符。以下是一个可以实现的程序建议：

你有一组来自两个不同评分系统的学生。

### 第一个评分系统

第一个评分系统的分数范围是1到5，其中3分及以上表示通过课程。

### 第二个评分系统

另一个评分系统的分数为 `A, A-, B, B-, C, C-`，其中 `A` 是最高分，`C` 是最低的及格分。

### 任务

给定以下数组 `allStudents`，表示所有学生及其成绩，构造一个新数组 `studentsWhoPass`，包含所有通过的学生。

> TIP，使用 for 循环、if...else 和比较运算符：

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

## 评分标准

| 标准     | 优秀                          | 合格                          | 需要改进                        |
| -------- | ------------------------------ | ----------------------------- | ------------------------------- |
|          | 提供了完整的解决方案           | 提供了部分解决方案            | 提供的解决方案存在错误          |

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。我们对于因使用本翻译而引起的任何误解或误读不承担责任。