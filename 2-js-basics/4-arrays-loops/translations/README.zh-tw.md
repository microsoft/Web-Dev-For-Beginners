# JavaScript 入門 - 矩陣與迴圈

![JavaScript 入門 - 矩陣](/sketchnotes/webdev101-js-arrays.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗
[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/13?loc=zh_tw)

這堂課會包含程式語言 JavaScript，建立互動式網頁的基礎。課程中，你會學到用來操作資料的矩陣與迴圈。

[![矩陣](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "矩陣")
[![迴圈](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "迴圈")

> 點擊以上的圖片來觀賞關於矩陣與迴圈的影片。

## 矩陣（Arrays）

處理資料是任何程式語言中最常見的任務，如果能將程式碼有條理地編排成如矩陣的形式，處理任務來會更加輕鬆。矩陣的資料儲存格式就像串列，其中一項好處是矩陣可以儲存不同的資料型態資料。

✅ 矩陣其實圍繞在我們身邊！你能想到現實中那些應用是矩陣的形式，例如太陽能板矩陣嗎？

矩陣的語法需要用到中括號。

```javascript
let myArray = [];
```

上述為一個空矩陣，矩陣也能在宣告時設定內容資料，資料會以逗號來做區隔。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

矩陣數值位置會以 **索引（index）** 來決定，標記從矩陣的開頭相隔多少元素。在上述例子中，字串 "Chocolate" 的索引為 0，"Rocky Road" 為 4。以中括號帶入索引來接收、修改或加入特定元素數值。

✅ 索引從 0 開始有超出你的預料之外嗎？在部分程式語言中，索引會從 1 開始。這有一段有趣的歷史，你可以[閱讀維基百科](https://zh.wikipedia.org/wiki/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E7%9A%84%E7%B7%A8%E8%99%9F)來了解它。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

你可以指定索引改變其中的數值，如：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

或者是指定索引加入新數值，如：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 另一個常用加入矩陣元素的方式為使用矩陣運算子如 array.push()。

要得知矩陣內有多少元素，可以使用矩陣屬性 `length`。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 自己動手試試看！使用瀏覽器命令欄，自由地建立並操控矩陣。

## 迴圈（Loops）

迴圈幫助你處理重複性與 **迭代（iterative）** 任務，這可以省下許多程式碼行數與時間。每一次迭代可以有不同的變數、數值或條件。在 JavaScript 中有許多種迴圈的樣式，彼此都有些微的差異，但主要功能都一樣：對資料做迴圈。

### For 迴圈（For Loop）

`for` 迴圈有三個條件：
    - `計數器（counter）` 一個初始化變數決定目前迭代的次數。
    - `條件式（condition）` 一個以比較運算子表示的陳述式，當結果為 `true` 時終止迴圈。
    - `迭代陳述式（iteration-expression）` 在每一次迭代完後，改變計數器的數值。
  
```javascript
// 從 0 加到 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ 在瀏覽器命令欄中運行這段迴圈。在改變計數器、條件式與迭代陳述式後有什麼改變？你能讓它變成從 10 減到 0 嗎？

### While 迴圈（While Loop）

不同於 `for` 迴圈語法，`while` 迴圈只要求一個條件式，當條件式回傳 `true` 時即終止迴圈。迴圈中的條件是通常需要依賴像計數器的變數，這些變數必須被合理的處理。計數器的起始化需要在迴圈外面，之後的條件陳述式與計數器的變化則需要在迴圈當中。

```javascript
// 從 0 加到 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 你會選擇 for 迴圈還是 while 迴圈呢？ 一萬七千個 StackOverflow 用戶問過相同的問題，有些回應[可能會勾起你的興趣](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 矩陣與迴圈

矩陣通常會與迴圈一起出現，大多數的條件式需要矩陣的長度來決定迴圈次數，矩陣的索引值也與計數器的數值相同。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // 當所有冰淇淋口味表示完時，結束迴圈。
```

✅ 做個實驗，在瀏覽器命令欄中製作一個使用矩陣的迴圈。

---

## 🚀 挑戰

除了 for 迴圈與 while 迴圈外，仍有許多使用矩陣與迴圈的方法：[forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) 與 [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。用上列其中一種語法改寫你的迴圈。

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/14?loc=zh_tw)

## 複習與自學

在 JavaScript 中，矩陣有許多控制的方法，它們在處理資料上有很大的幫助。
[學習這些方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)，如 push、pop、slice 和 splice，試著套用在你所創造的矩陣上。 

## 作業

[給矩陣的迴圈](assignment.zh-tw.md)
