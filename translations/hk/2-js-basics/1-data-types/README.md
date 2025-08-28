<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-23T22:46:56+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "hk"
}
-->
# JavaScript 基礎：數據類型

![JavaScript 基礎 - 數據類型](../../../../sketchnotes/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/7)

這節課涵蓋了 JavaScript 的基礎知識，這是一種為網頁提供互動性的語言。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) 上學習這節課！

[![變數](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "JavaScript 中的變數")

[![JavaScript 中的數據類型](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "JavaScript 中的數據類型")

> 🎥 點擊上方圖片觀看有關變數和數據類型的影片

讓我們從變數和填充它們的數據類型開始吧！

## 變數

變數用來存儲可以在程式中使用和更改的值。

創建和**宣告**一個變數的語法是 **[關鍵字] [名稱]**。它由以下兩部分組成：

- **關鍵字**。關鍵字可以是 `let` 或 `var`。

✅ 關鍵字 `let` 是在 ES6 中引入的，為變數提供了所謂的 _區塊作用域_。建議使用 `let` 而不是 `var`。我們會在後續部分更深入地討論區塊作用域。
- **變數名稱**，這是你自己選擇的名稱。

### 任務 - 使用變數

1. **宣告一個變數**。讓我們使用 `let` 關鍵字宣告一個變數：

    ```javascript
    let myVariable;
    ```

   現在 `myVariable` 已經使用 `let` 關鍵字宣告了。它目前還沒有值。

1. **賦值**。使用 `=` 運算符將值存儲到變數中，後面跟著期望的值。

    ```javascript
    myVariable = 123;
    ```

   > 注意：在本課中，`=` 的使用表示我們使用了一個 "賦值運算符"，用於將值設置給變數。它並不表示等於。

   現在 `myVariable` 已經被*初始化*為值 123。

1. **重構**。用以下語句替換你的程式碼。

    ```javascript
    let myVariable = 123;
    ```

    上述操作稱為 _顯式初始化_，即在宣告變數的同時賦予其值。

1. **更改變數值**。以以下方式更改變數值：

   ```javascript
   myVariable = 321;
   ```

   一旦變數被宣告，你可以在程式中的任何地方使用 `=` 運算符和新值來更改其值。

   ✅ 試試看！你可以直接在瀏覽器中撰寫 JavaScript。打開瀏覽器窗口並導航到開發者工具。在控制台中，你會看到一個提示符；輸入 `let myVariable = 123`，按下回車，然後輸入 `myVariable`。會發生什麼？注意，你會在後續課程中學到更多這些概念。

## 常數

常數的宣告和初始化與變數的概念相同，不過使用的是 `const` 關鍵字。常數通常用全大寫字母宣告。

```javascript
const MY_VARIABLE = 123;
```

常數與變數相似，但有兩個例外：

- **必須有值**。常數必須被初始化，否則在執行程式時會出錯。
- **引用不能更改**。常數的引用一旦初始化後就不能更改，否則在執行程式時會出錯。我們來看兩個例子：
   - **簡單值**。以下是不允許的：
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **物件引用受保護**。以下是不允許的：
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **物件值不受保護**。以下是允許的：
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      上述操作更改了物件的值，但沒有更改其引用本身，因此是允許的。

   > 注意，`const` 表示引用受到重新賦值的保護。然而，值並不是 _不可變_ 的，尤其是當它是像物件這樣的複雜結構時，值仍然可以更改。

## 數據類型

變數可以存儲多種不同類型的值，例如數字和文字。這些不同類型的值被稱為 **數據類型**。數據類型是軟件開發中的重要部分，因為它幫助開發者決定程式應該如何編寫以及軟件應該如何運行。此外，一些數據類型具有獨特的功能，可以幫助轉換或提取值中的附加信息。

✅ 數據類型也被稱為 JavaScript 的數據原始類型，因為它們是語言提供的最低級別的數據類型。共有 7 種原始數據類型：string、number、bigint、boolean、undefined、null 和 symbol。花點時間想像一下這些原始類型各自代表什麼。例如，什麼是 `zebra`？`0` 呢？`true` 呢？

### 數字

在上一節中，`myVariable` 的值是一個數字數據類型。

`let myVariable = 123;`

變數可以存儲所有類型的數字，包括小數或負數。數字還可以與算術運算符一起使用，這部分內容會在[下一節](../../../../2-js-basics/1-data-types)中介紹。

### 算術運算符

在執行算術運算時可以使用多種類型的運算符，以下列出了一些：

| 符號  | 描述                                                                      | 範例                              |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **加法**：計算兩個數字的和                                              | `1 + 2 //預期答案是 3`           |
| `-`    | **減法**：計算兩個數字的差                                              | `1 - 2 //預期答案是 -1`          |
| `*`    | **乘法**：計算兩個數字的乘積                                            | `1 * 2 //預期答案是 2`           |
| `/`    | **除法**：計算兩個數字的商                                              | `1 / 2 //預期答案是 0.5`         |
| `%`    | **餘數**：計算兩個數字相除後的餘數                                      | `1 % 2 //預期答案是 1`           |

✅ 試試看！在瀏覽器的控制台中嘗試一個算術運算。結果是否讓你感到驚訝？

### 字串

字串是一組位於單引號或雙引號之間的字符。

- `'這是一個字串'`
- `"這也是一個字串"`
- `let myString = '這是一個存儲在變數中的字串值';`

記得在撰寫字串時使用引號，否則 JavaScript 會假設它是一個變數名稱。

### 格式化字串

字串是文本，可能需要不時進行格式化。

要**連接**兩個或多個字串，或將它們拼接在一起，可以使用 `+` 運算符。

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ 為什麼在 JavaScript 中 `1 + 1 = 2`，但 `'1' + '1' = 11`？想一想。那 `'1' + 1` 呢？

**模板字串**是格式化字串的另一種方式，不過使用的是反引號而不是引號。任何非純文本的內容都必須放在 `${ }` 區塊中，包括可能是字串的變數。

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

你可以使用任一方法實現格式化目標，但模板字串會保留所有空格和換行。

✅ 什麼時候你會使用模板字串而不是普通字串？

### 布林值

布林值只有兩個值：`true` 或 `false`。布林值可以幫助決定在滿足某些條件時應該執行哪些程式碼。在許多情況下，[運算符](../../../../2-js-basics/1-data-types)會協助設置布林值，你會經常看到並撰寫變數在初始化或更新其值時使用運算符。

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ 如果一個變數被認為是 "truthy"，那麼它會評估為布林值 `true`。有趣的是，在 JavaScript 中，[所有值都是 truthy，除非被定義為 falsy](https://developer.mozilla.org/docs/Glossary/Truthy)。

---

## 🚀 挑戰

JavaScript 因其在處理數據類型時偶爾會有令人驚訝的行為而聞名。研究一下這些 "陷阱"。例如：大小寫敏感可能會讓你吃虧！在控制台中試試這個：`let age = 1; let Age = 2; age == Age`（結果是 `false` —— 為什麼？）。你還能找到哪些陷阱？

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/8)

## 複習與自學

看看[這份 JavaScript 練習列表](https://css-tricks.com/snippets/javascript/)，試著完成一個。你學到了什麼？

## 作業

[數據類型練習](assignment.md)

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。如涉及關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。