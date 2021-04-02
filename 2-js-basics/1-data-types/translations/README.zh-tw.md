# JavaScript 入門 - 資料型態

![JavaScript 入門 - 資料型態](/sketchnotes/webdev101-js-datatypes.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗
[課前測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/7?loc=zh_tw)

這堂課會講述 Javascript 的基礎 ── 一款建立互動性網頁的程式語言。

[![JavaScript 的資料型態](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "JavaScript 的資料型態")

讓我們從程式語言的基礎 ── 「變數」與「資料型態」開始吧！

## 變數 (Variable)

變數會依照程式碼調整並儲存數值。

建立並**宣告**變數的語法有一定的格式： **[關鍵字(keyword)] [變數名稱(name)]**。下列開始分別敘述：

- **關鍵字 (Keyword)** 關鍵字可以是 `let` 或者是 `var`。  

   > 注意，關鍵字 `let` 在 ES6 被導入進去，為變數限制 _區塊範疇(block scope)_。 建議上使用 `let` 勝過於 `var`。我們在往後的章節會講述什麼是區塊範疇。

- **變數名稱 (Variable Name)** 你可以自己定義變數名稱。

### 課題：變數的操作

1. **宣告變數** 利用關鍵字 `let` 來宣告新的變數：

    ```javascript
    let myVariable;
    ```

   `myVariable` 已經被關鍵字 `let` 宣告出來了。它現在並沒有被賦予數值。

1. **賦予數值** 以運算子 `=` 來為變數新增數值，後面加上預期的數字。

    ```javascript
    myVariable = 123;
    ```

   > 注意：本堂課程中的運算子 `=` 只作為「指派運算子」，處理賦予數值的功用。它與「等於」並沒有關係。

   變數 `myVariable` 現在已經被*初始化*為數值 123。

1. **代碼重構 (Refactor)** 改寫你的程式碼為：

    ```javascript
    let myVariable = 123;
    ```

    合併「宣告變數」與「賦予數值」為一條程式碼的步驟稱為 _顯式初始化 (explicit initialization)_。

1. **更改變數數值** 透過下列的方式更改參數數值：

   ```javascript
   myVariable = 321;
   ```

   一旦變數被宣告後，你在任何往後的程式碼利用運算子 `=` 賦予新的數值。

   ✅ 動手試試看！ 在瀏覽器中撰寫 JavaScript：開啟瀏覽器並前往開發者工具，你會在 Console 頁面找到命令提示字元。輸入 `let myVariable = 123` 並按下 Enter。輸入 `myVariable`。它出現了什麼? 往後，你會學到更多這些觀念的課程。

## 常數 (Constants)

宣告與初始化常數的行為與變數相似，只差在關鍵字 `const`。通常常數會以全大寫的方式命名。

```javascript
const MY_VARIABLE = 123;
```

常數與變數非常類似，主要的兩大差別為：

- **一定要附帶數值** 常數一定要被初始化過，否則在執行程式時會產生錯誤。
- **參考(Reference)不能被改變** 變數與常數都能根據其他變數或常數作為定義，但是常數的參考在初始化後，就不能再被更改，否則在執行程式時會產生錯誤。我們來看下列兩種例子：
   - **簡單數值** 下列程式碼是不被允許的：
   
      ```javascript
      const PI = 3;
      PI = 4; // 錯誤
      ```
 
   - **有限存取的參考物件** 下列程式碼是不被允許的：
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // 錯誤
      ```

    - **參考物件** 下列程式碼是「允許」的：
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // OK
      ```

      上述只改變物件的數值而非物件本身，這是可以被允許的。

   > 注意，`const` 代表參考物件在重新賦值上有存取的限制。數值並不是永遠 _不可變的_，如果數值是規劃在其他物件上的話。

## 資料型態 (Data types)

變數可以儲存不一樣的數值型態，好比是數字或是文字。這些多樣的數值型態被稱為**資料型態**。資料型態是軟體開發上重要的環節，它能幫助開發者釐清程式該如何被填寫以及運作。除此之外，有些獨特的資料型態能改變或賦加而外的數值資訊。

✅ 資料型態也存在於 JavaScript 的原始結構中，它們是程式語言中最低階的描述方式。六種資料型態：string、number、bigint、boolean、undefined 和 symbol。 花點時間了解它們的含義。資料 `zebra` 屬於哪一類? 那 `0` 呢? `true` 呢?

### 數字 (Numbers)

在前一個段落中，`myVariable`的數值屬於數字型。

`let myVariable = 123;`

變數能儲存所有類型的數字，包含小數點與負數。數字也可以被套用在四則運算上，這被放在[下一個段落](#operators)中。

### 算術運算子 (Arithmetic Operators)

這些是做四則運算時會使用到的算術運算子，下列舉出了幾項例子：

| 符號   | 描述                          | 舉例                  |
| ------ | ------------------------------| --------------------- |
| `+`    | **加法**： 對兩數做相加       | `1 + 2 // 答案為 3`   |
| `-`    | **減法**： 對兩數做相減       | `1 - 2 // 答案為 -1`  |
| `*`    | **乘法**： 對兩數做相乘       | `1 * 2 // 答案為 2`   |
| `/`    | **除法**： 對兩數做相除       | `1 / 2 // 答案為 0.5` |
| `%`    | **餘數**： 取得兩數相除的餘數 | `1 % 2 // 答案為 1`   |

✅ 試試看！在瀏覽器命令欄中使用算數運算子。你得到了什麼結果?

### 字串 (Strings)

字串由多組字元組成，會以單引號或雙引號匡列起來。

- `'這是一組字串'`
- `"這也是一組字串"`
- `let myString = '這是被存在變數中的字串';`

記得使用引號來編寫字串，否則 JavaScript 會把字串內容當作是變數名稱。

### 字串格式化


字串由文字組成，自然需要隨時間而做修正。

要**串接**兩個以上的字串，可以使用運算子 `+`。

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ 在 JavaScript 中，為什麼 `1 + 1 = 2`，但是 `'1' + '1' = 11` 呢? 想想看。那 `'1' + 1` 呢?

**樣板字面值(Template literals)**是另一種格式化字串的方式，它不使用引號，而是使用反引號。任何非純文字字串必須放在 `${ }` 中。這會包入字串型態的任何變數。

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

這樣就可以達到字串格式化的目的，但要注意樣板字面會遵守變數中的空格與分行符號。

✅ 什麼情況下該使用樣板字面，或者是純文字字串呢?

### 布林 (Booleans)

布林有兩種數值：`true` 或 `false`，使用在程式碼做條件決定的時候。在多數情況下，[運算子](#operators)可以套用在布林上，你會在初始化或更新數值時使用。

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ 布林值 `true` 亦有廣義的 'truthy' 數值。有趣的是，在 JavaScript 中，[除非被定義為 falsy，其餘的數值都會被當作是 truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)。

---

## 🚀 挑戰

JavaScript 在處理資料結構時有許多種方法，有些場合為人詬病。在這方面做一些調查，例如：大小寫敏感性的問題！在命令欄中輸入看看： `let age = 1; let Age = 2; age == Age`，輸出結果是 `false`，為什麼? 你能找到其他問題嗎?

## 課後測驗
[課後測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/8?loc=zh_tw)

## 複習與自學

試試看[這些 JavaScript 練習題](https://css-tricks.com/snippets/javascript/)。 你學到了什麼?

## 作業

[練習資料型態](assignment.zh-tw.md)
