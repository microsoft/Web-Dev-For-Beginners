# 程式語言概論與必備工具

這堂課程解釋程式語言的基礎。這項主題能應用到當代多數的程式語言。關於必備工具的部分，你會學到許多實用的開發者軟體。

![關於程式語言](/sketchnotes/webdev101-programming.png)
> 由[Tomomi Imura](https://twitter.com/girlie_mac) 繪製。

## 課前測驗
[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=zh_tw)

## 大綱

在這堂課中，包含：

- 什麼是程式設計?
- 程式語言的種類
- 程式的基本架構
- 給專業開發者的實用軟體與工具

## 什麼是程式設計?

程式設計，又稱作Coding，是編寫電腦或手機裝置的指令過程。我們以裝置看得懂的程式語言來編寫這些指令，這些指令集涉及到常見的*程式*、*電腦程式*、*應用程式(App)*或*執行檔*。

一個*程式*以程式碼任意創作出來，網頁、遊戲、手機應用都是程式的一種。雖然我們可以在不編寫程式碼的情況下建出程式，但裝置底下的邏輯概念還是以程式碼為主。一個*執行中*、*執行編碼*的程式都是仰賴著指令。你眼前正閱讀的文字就是由程式輸出到螢幕。

✅ 課外研究： 誰被認為是世界上第一位電腦工程師?

## 撰寫程式語言

編寫程式語言的主要目的是讓開發者得以指示裝置。裝置只能讀懂二元格式 ( 1 與 0 )，對於*大多數*的開發者而言，這並不是個很好理解溝通的方式。程式語言就像人類與電腦之間溝通的橋梁。

程式語言有不同的格式與滿足的目的。舉例來說，JavaScript 常被用在網頁應用上，而 Bash 主要是用在作業系統上。

*低階語言(Low level languages)* 通常比 *高階語言(high level languages)* 要求更少的裝置指示步數。然而，高階語言的閱讀性與支援性讓它成為最普及的程式語言。JavaScript 即是一種高階語言。

下列程式碼說明高階語言(JavaScript)與低階語言(ARM assembly code)的差異：

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

事實上，*他們都做一樣的事情* ── 印出前十項費氏數列。

✅ 費氏數列的[定義](https://zh.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)為該數是由之前的兩數相加而得出。初始值為 0 與 1。

## 程式的基本架構

程式中的一行指令(instruction)被稱做*陳述式(statement)*，通常會由特定符號或分行來決定結尾處，或是執行*程式終止*。程式終止的方式會依不同程式語言而有所不同。

大多數程式需要使用用戶或其他位置的資料，陳述式依照這些資料決定指令。資料會影響程式的運作方式，編寫程式語言便是一種暫時性儲存資料的途徑。這些資料稱為*變數(Variables)*。變數會指引資料儲存到裝置上的位置，它們就像代數一樣：有自己的名稱、數值隨時間改變。

有些情況裝置不會執行到陳述式。通常是開發者故意的選擇或意外性地輸入錯誤，讓應用程式變得更豐富且需要被維護。常見的發生情況在決定條件的時候，如當代程式語言以 `if..else` 條件式來決定程式的執行方式。

✅ 往後的課程會講解各式各樣的陳述式型態。

## 工欲善其事，必先利其器

[![謀生工具 Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "謀生工具 Tools of the Trade")

在這個章節，你會學習到一些實用的軟體來開始你的開發旅程。

一個**開發環境**包含許多開發者撰寫程式需要用到的工具。它們會依照開發者的需求而不同，隨著時間、專案大小、程式語言而有所調整。每個開發者都有自己獨特的開發環境。

### 文字編輯器

文字編輯器可說是最重要的軟體開發工具。開發者可以在其中撰寫並執行程式。

還有許多原因讓開發者選擇文字編輯器：

- *偵錯(Debugging)* 在程式碼中一行一行地找尋錯誤。有些文字編輯器有偵錯的功能，可以依照不同的程式語言而調整。
- *語法突顯(Syntax highlighting)* 將程式碼加上顏色並自動排版，方便開發者閱讀。文字編輯器也支援語法突顯的客製化。
- *整合擴充插件(Extensions and Integrations)* 擴充插件不包含在預設的文字編輯器當中，開發者依照自己的需求建立並新增到文字編輯器當中。舉例來說，許多開發者需要統整程式文檔並註解這些檔案，他們就會加裝檢查拼字的插件。有些插件功能只支援特定的文字編輯器，文字編輯器也提供搜尋擴充插件的功能。
- *客製化(Customization)* 大多數的文字編輯器都允許開發者做客製化，開發者依照自己的習慣，建立自己順手的開發環境。其中也包含建立自己的擴充插件。

#### 常見文字編輯器與網頁開發插件

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### 瀏覽器

另一款重要的工具是瀏覽器。網頁開發人員會藉由瀏覽器觀察程式的執行情況，瀏覽器也是常見的網頁編輯與檢視器，顯示來自檔案的可見物件，如 HTML 檔。

許多瀏覽器都附加*開發者工具(DevTools)*，內含實用的功能協助開發者蒐集與取得重要的程式資訊。假設有一頁網頁出現錯誤，了解它出錯的時間與狀況就很重要，配置開發者工具即可蒐集這些資訊。

#### 常見瀏覽器與網頁開發工具

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### 常用指令

有些開發者偏好較少的介面，通常會使用指令來完成工作；撰寫程式碼要求大量的文字輸入，有些開發者偏好以不中斷文字輸入為首要條件，常用快捷鍵做視窗與檔案的切換。多數工作能以滑鼠操作，但為了減少鍵盤與滑鼠間的切換，指令輸入會是實踐上較合適的方式。另一項指令輸入的好處是它們彈性很高，隨時可以更新設定，甚至移植到其他機器上。每一位開發者有各自的開發習慣，開發環境也有所不同。

### 常用指令選項

指令選項(Command Line Options)會依不同的作業系統而有所不同。

*💻 表示預設已安裝在作業系統上。*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (又稱作 CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### 其他常用指令

- [Git](https://git-scm.com/) (💻 已支援大多數的作業系統。)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 技術文件

若開發人員想學新的事物，技術文件會是很好的幫手。他們會參照文件來學習如何使用工具與新的程式語言，並瞭解如何鑽研更深入的用法。

#### 常用的網頁開發文件

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), 來自 Mozilla，[Firefox](https://www.mozilla.org/firefox/) 的出版商
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev)，來自 Google，[Chrome](https://www.google.com/chrome/) 的發布者
- [Microsoft 自己的開發人員文檔](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)，用於 [Microsoft Edge](https://www.microsoft.com/edge)

✅ 研究項目： 現在你已經了解基本的網頁開發環境了。請比較「網頁開發環境」與「網頁設計環境」之間的差異。

---

## 🚀 挑戰

比較不同的程式語言： JavaScript 與 Java 間有什麼獨特的特徵? 那 COBOL 與 Go 呢?

## 課後測驗
[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2?loc=zh_tw)

## 複習與自學

學習不同的程式語言。試著在三種不同的程式語言寫幾行程式碼。你學到了什麼?

## 作業

[閱讀技術文件](assignment.zh-tw.md)

