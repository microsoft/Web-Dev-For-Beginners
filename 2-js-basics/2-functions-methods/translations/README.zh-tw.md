# JavaScript 入門 - 函式與方法

![JavaScript 入門 - 函式](/sketchnotes/webdev101-js-functions.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗
[課前測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/9?loc=zh_tw)

撰寫程式碼時，我們必須確保程式碼的閱讀性。聽來不太直覺，理解程式碼的時間遠比撰寫時間來的久。裡面最需要被管理的程式項目就是**函式**。

[![函式與方法](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "函式與方法")

> 點擊上方圖片觀看關於函式的影片。


## 函式 (Function)

函式是程式碼區塊，會在程式執行時被呼叫運行。有些時候我們需要重複性的執行同一項作業，比起複製整個邏輯到其他區塊，函式是較完美的處理方式。不只方便維護，也可以在任何地方、任何時間被其他函式呼叫執行。

另一項重點是函式的名稱，聽來不太重要，但它能直接地解釋程式碼的內容。你可以想像它是按鈕上的文字，若按鈕上寫著「停止計時」，你會預期按壓按鈕後會終止計時器的運作。

## 建立並呼叫函式

函式的語法格式如下：

```javascript
function nameOfFunction() { // 函式的定義
 // 函式的說明與內容
}
```

如果你想建立一個打招呼的函式，它可能會以下列的格式呈現：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

如果你想呼叫這個函式，我們使用函式的名稱加上 `()`。我們不需要考慮函式是在被呼叫地方的前面或後面才被定義出來，JavaScript 的編譯器會幫你尋找它的定義為置。

```javascript
// 呼叫函式
displayGreeting();
```

> **注意** 另一個你正使用的函式類型稱做 **方法(method)**。事實上，我們能在執行 `console.log` 的 demo 時能找到它。它與函式的差異在於它需要接續在物件後面，在這個例子中就是 `console`，而函式並沒有強制要求的。你會發現許多開發者在兩者之間做切換。

### 函式的重點觀念

在建立函式時，你需要注意一些重點：

- 我們反覆提到的，函式的名字要能了解函式的主要功能。
- 使用**駝峰式大小寫(camelCasing)**來連接單字。
- 單一函式只專一在單一功能。

## 向含式傳遞資料

為了讓函式能被重複利用，你會需要餵給函式不同的資料。以上述 `displayGreeting` 的例子中，它只能輸出文字 **Hello, world!**。這並不是個實用的函式。要增加函式的彈性，例如打招呼的對象，我們可以增加新的**參數(parameter/argument)**。它提供額外的資料給函式使用。

參數會寫在定義函式的地方，以括號與逗號標記與分隔：

```javascript
function name(param, param2, param3) {

}
```

現在我們更新函式 `displayGreeting`，讓它支援打招呼的對象：

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

當我們要呼叫函式時，輸入需要的參數在括號中：

```javascript
displayGreeting('Christopher');
// 呼叫完，印出字串 "Hello, Christopher!" 
```

## 預設值(Default values)

我們利用參數增加了函式的彈性。但如果我們不想每次都要指定參數給函式使用呢? 繼續之前的例子，保留對象的名稱外，我們增加招呼語的種類。我們可以定義招呼語的預設值，若使用者沒有指定哪一種招呼語時，就使用預設值。它的方法就與賦予變數數值一樣 ── `parameterName = 'defaultValue'`。例如：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

當我們呼叫函式時，我們可以選擇是否要指定招呼語到 `salutation` 中。

```javascript
displayGreeting('Christopher');
// 輸出字串 "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// 輸出字串 "Hi, Christopher"
```

## 回傳值(Return values)

目前為止，我們的函式只能輸出字串到[console](https://developer.mozilla.org/docs/Web/API/console)上。這或許是我們希望的結果，尤其是需要呼叫其他服務的時候。萬一今天我想建立一個額外的函式負責做資料處理與運算呢?

此時，我們可以利用**回傳值**。回傳值由函式輸出，就像變數一樣儲存像是字串或是數字的結果。

如果函式有定義回傳值，那就需要使用關鍵字 `return` 。關鍵字 `return` 需要附帶回傳的數值或是參考物件在後方，如：

```javascript
return myVariable;
```  

我們建立一個函式專門建立招呼訊息並回傳給呼叫者：

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

當函式被呼叫時，變數會儲存函式回傳的數值。這就像我們給變數定值一樣： `const name = 'Christopher'`。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 將函式作為函式參數使用

在你的程式旅程中，你會見到有函式將其他函式當作參數使用。這個俐落的手法常被用在一種情況：我們不知道 A 事件什麼時候發生與完成，但我們要在 A 事件後執行 B 事件。

舉例來說，考慮函式[setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)，它會啟動計時機制，並在倒數完後執行下一個程式。我們需要告訴函式哪一個函式要在時間到後執行，一個完美的例子！

執行下方的程式，三秒鐘之後你會看到訊息**已經過三秒鐘**。

```javascript
function displayDone() {
  console.log('已經過三秒鐘');
}
// 計時單位為毫秒。
setTimeout(displayDone, 3000);
```

### 不記名函式(Anonymous functions)

回顧我們所建的函式，這些函式都只被執行了一次。當程式越來越複雜，我們可能建了許多的函式，但他們可能都只被呼叫了一次。這並不是理想的方式，那不如，不要給它函式名稱！

我們可以傳遞函式作為參數使用，也可以直接在參數裡建立新的函式。同樣使用關鍵字 `function`，但我們寫在參數欄當中。

試著以不記名函式的方式改寫程式碼：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

執行上述程式後可以得到相同的結果。我們建立了一個函式，一個沒有名字的函式！

### 箭頭函式(Fat arrow functions)

許多程式語言，包含 JavaScript，都有一個常見的快捷語法稱作**箭頭(arrow/fat arrow)**函式。 它使用 `=>` 表示法，就像是箭頭一樣，如同它的名稱！使用 `=>` 可以省略關鍵字 `function`。

再一次改寫程式碼，這次我們使用箭頭函式：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 使用不同策略的時機

現在你已經學會了三種將函式作為參數的方法了。你可能會好奇使用它們的時機點為何。如果你知道你會重複使用一個函式，請使用正常的方法；如果你知道函式只用在特定的函式內一次，這就是用無記名函式的時機；箭頭函式與傳統 `function` 語法則是取決與你自己，但多數的開發者比較偏好使用 `=>`。

---

## 🚀 挑戰

你能用一句話清楚地說明這些函式與方法的差別嗎? 試試看吧！

## 課後測驗
[課後測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/10?loc=zh_tw)

## 複習與自學

這很值得去閱讀[關於箭頭函式的資料](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，它們越來越常被用在程式碼上。試著寫個函式，再改寫成箭頭語法。

## 作業

[把玩函式](assignment.zh-tw.md)