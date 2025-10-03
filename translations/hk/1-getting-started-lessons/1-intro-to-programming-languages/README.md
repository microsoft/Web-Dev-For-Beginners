<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T08:56:11+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "hk"
}
-->
# 程式語言與工具入門

這節課涵蓋了程式語言的基礎知識。這裡提到的主題適用於大多數現代程式語言。在「工具介紹」部分，你將學習一些對開發者非常有用的軟件。

![程式語言入門](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.hk.png)
> Sketchnote由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

## 課前測驗
[課前測驗](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## 簡介

在這節課中，我們將探討：

- 什麼是程式設計？
- 程式語言的類型
- 程式的基本元素
- 專業開發者常用的軟件和工具

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) 上學習這節課！

## 什麼是程式設計？

程式設計（也稱為編碼）是為電腦或移動設備編寫指令的過程。我們使用程式語言來編寫這些指令，然後由設備解讀這些指令。這些指令集可能有不同的名稱，例如 *程式*、*電腦程式*、*應用程式 (app)* 和 *可執行檔* 等。

*程式* 可以是任何用程式碼編寫的東西；網站、遊戲和手機應用程式都是程式。雖然可以在不編寫程式碼的情況下創建程式，但其底層邏輯仍然需要由設備解讀，而這些邏輯通常是用程式碼編寫的。一個正在 *運行* 或 *執行* 程式碼的程式正在執行指令。你正在使用的設備正運行著一個程式，將這節課顯示在你的螢幕上。

✅ 做一些研究：誰被認為是世界上第一位電腦程式設計師？

## 程式語言

程式語言使開發者能夠為設備編寫指令。設備只能理解二進制（1和0），而對於 *大多數* 開發者來說，這並不是一種高效的溝通方式。程式語言是人類與電腦之間溝通的工具。

程式語言有不同的格式，可能用於不同的目的。例如，JavaScript 主要用於網頁應用程式，而 Bash 主要用於操作系統。

*低階語言* 通常比 *高階語言* 需要更少的步驟來讓設備解讀指令。然而，高階語言之所以受歡迎，是因為它們的可讀性和支援性。JavaScript 被認為是一種高階語言。

以下程式碼展示了使用高階語言（JavaScript）和低階語言（ARM組合語言）的差異。

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

相信或不信，*它們都在做同樣的事情*：列印出前10個斐波那契數列。

✅ 斐波那契數列 [定義](https://en.wikipedia.org/wiki/Fibonacci_number) 為一組數字，其中每個數字是前兩個數字的總和，從0和1開始。前10個斐波那契數列的數字是：0, 1, 1, 2, 3, 5, 8, 13, 21 和 34。

## 程式的基本元素

程式中的單個指令稱為 *語句*，通常會有一個字符或行間距來標記指令的結束或 *終止*。程式如何終止因語言而異。

程式中的語句可能依賴於使用者或其他地方提供的數據來執行指令。數據可以改變程式的行為，因此程式語言提供了一種暫時存儲數據的方法，以便稍後使用。這些被稱為 *變數*。變數是指令，指示設備將數據存儲在其記憶體中。程式中的變數類似於代數中的變數，它們有唯一的名稱，其值可能隨時間改變。

有些語句可能不會被設備執行。這通常是由開發者設計的，或者是由於意外錯誤而發生的。這種對應用程式的控制使其更加穩健和可維護。通常，這些控制變化發生在滿足某些條件時。現代程式設計中常用的一種語句是 `if..else` 語句。

✅ 你將在後續課程中學習更多關於這類語句的知識。

## 工具介紹

[![工具介紹](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "工具介紹")

> 🎥 點擊上方圖片觀看工具相關影片

在這部分，你將了解一些在開始專業開發旅程時可能非常有用的軟件。

**開發環境** 是開發者在編寫軟件時經常使用的一組獨特工具和功能。其中一些工具已根據開發者的特定需求進行了定制，並可能隨著開發者工作重點的改變、個人項目或使用不同程式語言而改變。開發環境如同使用它的開發者一樣獨特。

### 編輯器

編輯器是軟件開發中最重要的工具之一。編輯器是你編寫程式碼的地方，有時也是你運行程式碼的地方。

開發者依賴編輯器的幾個額外原因：

- *除錯* 幫助逐行檢查程式碼，找出錯誤和問題。一些編輯器具有除錯功能；它們可以根據特定程式語言進行定制和添加。
- *語法高亮* 為程式碼添加顏色和文本格式，使其更易於閱讀。大多數編輯器允許定制語法高亮。
- *擴展和整合* 是專為開發者設計的工具，由開發者開發。這些工具並未內建於基礎編輯器中。例如，許多開發者會為程式碼添加文檔以解釋其工作原理。他們可能會安裝拼寫檢查擴展來幫助發現文檔中的拼寫錯誤。大多數擴展是針對特定編輯器使用的，而大多數編輯器都提供搜索可用擴展的方法。
- *定制化* 使開發者能夠創建符合自己需求的獨特開發環境。大多數編輯器都非常可定制，並且可能允許開發者創建自定義擴展。

#### 流行的編輯器及網頁開發擴展

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### 瀏覽器

另一個重要工具是瀏覽器。網頁開發者依賴瀏覽器來查看程式碼在網頁上的運行效果。瀏覽器還用於顯示編輯器中編寫的網頁的視覺元素，例如HTML。

許多瀏覽器都配備了 *開發者工具* (DevTools)，其中包含一組有用的功能和信息，幫助開發者收集和捕獲有關其應用程式的重要信息。例如：如果網頁出現錯誤，有時知道錯誤發生的時間會很有幫助。瀏覽器中的開發者工具可以配置為捕獲這些信息。

#### 流行的瀏覽器及開發者工具

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### 命令行工具

一些開發者更喜歡使用較少圖形化的界面來完成日常任務，並依賴命令行來實現這一點。編寫程式碼需要大量的打字工作，一些開發者更喜歡不打斷鍵盤上的工作流程。他們會使用鍵盤快捷鍵在桌面窗口之間切換、處理不同文件以及使用工具。大多數任務可以用鼠標完成，但使用命令行的一個好處是許多工作可以通過命令行工具完成，而無需在鼠標和鍵盤之間切換。命令行的另一個好處是它們是可配置的，你可以保存自定義配置，稍後更改，並導入到其他開發機器上。由於開發環境對每個開發者來說都非常獨特，有些人會避免使用命令行，有些人完全依賴它，有些人則喜歡兩者混合使用。

### 流行的命令行選項

命令行選項會根據你使用的操作系統而有所不同。

*💻 = 操作系統預裝。*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (也稱為CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### 流行的命令行工具

- [Git](https://git-scm.com/) (💻 在大多數操作系統上預裝)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 文檔

當開發者想學習新事物時，他們通常會查閱文檔以了解如何使用它。開發者經常依賴文檔來指導他們正確使用工具和語言，並深入了解其工作原理。

#### 網頁開發相關的流行文檔

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)，由 [Firefox](https://www.mozilla.org/firefox/) 瀏覽器的出版商Mozilla提供
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev)，由 [Chrome](https://www.google.com/chrome/) 的出版商Google提供
- [Microsoft的開發者文檔](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)，適用於 [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ 做一些研究：現在你已經了解了網頁開發者的環境，試著比較和對比它與網頁設計師的環境。

---

## 🚀 挑戰

比較一些程式語言。JavaScript與Java有哪些獨特特性？COBOL與Go又如何？

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/)

## 回顧與自學

研究一下程式設計師可用的不同語言。嘗試用一種語言寫一行程式碼，然後用另外兩種語言重寫它。你學到了什麼？

## 作業

[閱讀文檔](assignment.md)

> 注意：在選擇作業工具時，不要選擇上面已列出的編輯器、瀏覽器或命令行工具。

---

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。