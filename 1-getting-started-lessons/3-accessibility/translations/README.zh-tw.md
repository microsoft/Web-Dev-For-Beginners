# 建立無障礙網頁

![關於網頁親和力](/sketchnotes/webdev101-a11y.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗
[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5?loc=zh_tw)

> 網路的強大在於它的普遍性。無論用戶是否有殘疾，讓大家無差別地使用網路是必要的。
>
> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
> \- Tim Berners-Lee 爵士 ── 全球資訊網協會總監暨網際網路創立者

這段話完美地詮釋建立無障礙網頁的重要性。應用程式若無法服務所有人是建立在排他性設計。身為一位網頁開發員，我們需要時刻警惕著網頁親和力。從此時開始，你接下來創建的網頁要能服務給任何人。在這堂課中，你會學習開發無障礙網頁相關的工具與觀念。

## 相關工具

### 螢幕報讀器 (Screen readers)

螢幕報讀器可說是最知名的無障礙工具之一。

[螢幕報讀器](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)已被廣泛地幫助視覺障礙者。就像我們花了不少時間確保瀏覽器能呈現網頁內容，我們也要確保螢幕報讀器能完整地實現相同的工作。

基本上，螢幕報讀器會一行一行地報讀網頁的內容。若網頁都是以文字建構而成，那螢幕報讀器就能達到與瀏覽器相同的功效。當然，網頁不可能只有文字：裡面可能會有連結、圖像、顏色或是其他視覺物件。我們必須確保螢幕報讀器也能呈現出上述物件。

任何一位網頁開發者需要熟悉螢幕報讀器。它們是用戶的好幫手，就像你的瀏覽器一樣，你需要學習螢幕報讀器是如何運作的。幸運的是，它們都內建在大部分的作業系統當中。

有些瀏覽器內建相關工具與擴充插件，報讀出文字甚至是可互動物件：例如[這些以網頁親和力為目標的 Edge 瀏覽器工具](https://support.microsoft.com/zh-tw/microsoft-edge/microsoft-edge-%E7%9A%84%E5%8D%94%E5%8A%A9%E5%B7%A5%E5%85%B7%E5%8A%9F%E8%83%BD-4c696192-338e-9465-b2cd-bd9b698ad19a)。 它們是重要的輔助工具，或許與螢幕報讀器有所差異，但基本上能測試螢幕報讀器的基本功能。

✅ 嘗試使用螢幕報讀器或瀏覽器朗讀工具。 在 Windows 中，[Narrator](https://support.microsoft.com/zh-tw/windows/%E5%AE%8C%E6%95%B4%E7%9A%84%E6%9C%97%E8%AE%80%E7%A8%8B%E5%BC%8F%E6%8C%87%E5%8D%97-e4397a0d-ef4f-b386-d8ae-c172f109bdb1)內建在系統中，使用者也可以選擇[JAWS](https://webaim.org/articles/jaws/)與[NVDA](https://www.nvaccess.org/about-nvda/)等額外安裝程式。 macOS 與 iOS 平台上則內建[VoiceOver](https://support.apple.com/guide/voiceover/welcome/10)。

### 放大器

另一項為視覺障礙者提供的輔助程式為放大器。最常見的定點放大功能，可以藉由 `Control + 加號(+)` 或降低螢幕解析度來完成。這個步驟會重新縮放整個網頁，確保網頁的[互動式設計](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design)是縮放頁面重要的一環。

其他放大功能會專注在小部分的區域上，這些額外軟體提供類似於實體放大器的功能。 Windows 內建[放大器](https://support.microsoft.com/zh-tw/windows/%E4%BD%BF%E7%94%A8%E6%94%BE%E5%A4%A7%E9%8F%A1%E4%BB%A5%E8%AE%93%E8%9E%A2%E5%B9%95%E4%B8%8A%E7%9A%84%E5%85%A7%E5%AE%B9%E6%9B%B4%E5%AE%B9%E6%98%93%E7%9C%8B%E5%88%B0-414948ba-8b1c-d3bd-8615-0e5e32204198)功能；第三方程式[ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/)則受到廣泛用戶的使用。 macOS 與 iOS 內建[Zoom](https://www.apple.com/accessibility/mac/vision/)軟體。

### 對比度檢查器

我們必須謹慎地挑選網頁的顏色對比度，讓色盲人士或低視能障礙者有辦法閱讀文章。

✅ 利用相關的瀏覽器擴充插件來測試看看你所喜愛的網頁，例如[WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=zh-tw)。 你學到了什麼?

### Lighthouse

在瀏覽器的開發者工具中，你能找到一款工具名為 Lighthouse。這項工具可以有效的確認網頁親和力。這邊不強制網頁都要經過 Lighthouse 審核，但 100% 的分數是網頁完美的基礎。

✅ 在你的瀏覽器開發工具中找尋 Lighthouse ，對任何網頁做分析。 你發現了什麼?

## 提升網頁親和力

網頁親和力是項相對龐大的主體。要尋求幫助，網路上有許多資源可以參考。

- [Accessible U - 明尼蘇達大學](https://accessibility.umn.edu/your-role/web-developers)

我們無法在此說明建立無障礙網頁的所有重點，但下列是開發時重要的核心觀念。從零開始就留意網頁親和力**一定會比**從完成的網頁來增進網頁親和力來的容易。

## 良好的呈現方式

### 安全的配色

每個人的觀點都有所不同，包含觀看顏色。如何選擇配色也是網頁親和力的課題之一。下列是一款實用的[安全配色生產工具](http://colorsafe.co/).

✅ 舉出在配色上有問題的一個網頁，告訴大家為什麼?

### 使用合理的 HTML 語法

在 CSS 與 JavaScript 的支援下，我們無法判斷網頁物件的控制目的。 好比 `<span>` 也可以建立 `<button>`， `<b>` 可以代表超連結。 在造型變化上或許較為容易，但可能會對螢幕報讀器產生混淆。我們必須確保對應的控制有相同的標籤，例如超連結只使用 `<a>`。這才能完整的表現 HTML 的語義化。

✅ 去任何一個網頁分析開發員與設計員是否使用正確的 HTML 語法。 你能找到語法將連結取代成按鈕嗎? 小提示：在瀏覽器中點擊「右鍵」 > 「檢視網頁原始碼」來確認程式碼。

### 建立分級的描述性標題的

螢幕報讀器使用者[非常仰賴文字標題](https://webaim.org/projects/screenreadersurvey8/#finding)，確認並查詢網頁資訊。使用描述性標題並有層次的標籤分別得以創建出較易閱讀的網頁。

### 使用合理的視覺指引

CSS 提供完整的網頁造型控制，你可以讓文字框框線隱藏或是讓超連結去除底線。然而去除這些視覺指引會造成視覺障礙者閱讀上的困擾，難以辨別它們原本的功能性。

## 連結文字的重要性

超連結是網頁中重點物件。請確保螢幕報讀器能正確的辨識網頁中的超連結。

### 螢幕報讀器處理連結

可想而知，螢幕報讀器對於連結與文字的朗讀方式是相同的。因此，判斷下列文章例子，哪個對於網頁親和力上較為合理?

> 小藍企鵝，又稱做仙企鵝，是世界上最小的企鵝。[點擊這裡](https://zh.wikipedia.org/zh-tw/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D)了解更多資訊。

> 小藍企鵝，又稱做仙企鵝，是世界上最小的企鵝。造訪 https://zh.wikipedia.org/zh-tw/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D 了解更多資訊。

> **注意** 讀完之後，請盡量**避免**上方的連結例子。

記得，螢幕報讀器處理物件的方式會與瀏覽器有所不同。

### 使用 URL 的問題

螢幕報讀器會朗讀文字。如果 URL 出現在文章中，它也會被裝置朗讀。綜觀來說，朗讀 URL 不含有任何意義，而且聽來不悅耳。你可能曾在手機上聽過含有網址的文章朗讀。

### 使用「點擊這裡」的問題

螢幕報讀器有能力去處理超連結文字，就像我們尋找網頁中的連結一樣。想像所有的超連結文字都表示成「點擊這裡」，用戶就會重複聽到「點擊這裡！點擊這裡！點擊這裡！點擊這裡......」，會造成別人的困擾。

### 合理的連結文字

合理的連結文字為連結與文字找到了平衡。像上方例子中的小藍企鵝，連結是導向維基百科的物種頁面。文字*小藍企鵝*就會是完美的連結文字，讓用戶了解點擊後會取得關於小藍企鵝的相關資訊。

> [小藍企鵝](https://zh.wikipedia.org/zh-tw/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D)，又稱做仙企鵝，是世界上最小的企鵝。

✅ 花點時間逛逛網頁，觀察它們如何設定連結的導向。比較較合適的連結文字，你學到了什麼?

#### 關於搜尋引擎

網頁中的搜尋引擎對網頁親和力有加分的效果，搜尋引擎也能從連結找到你的網頁，了解網頁的主題。所以連結文字對大家都有幫助！

### ARIA

想像下方的網頁：

| 產品     | 描述        | 數量        |
| -------- | ----------- | ----------- |
| 物品     | [描述]('#') | [數量]('#') |
| 超優物品 | [描述]('#') | [數量]('#') |

在這項舉例中，瀏覽器用戶可以清楚地辨別重複性的「描述」與「數量」；但對於螢幕報讀器用戶而言，他們只能重複地聽取*「描述」與「數量」*這兩個單詞。

為了處理這種情況，HTML 提供一套屬性名為[Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)。它能為螢幕報讀器附加額外的朗讀資訊。

> **注意**： 就如 HTML 的各式物件，瀏覽器與螢幕報讀器能支援的項目也不盡相同。然而，客群主體基本上都支援 ARIA 屬性。

若網頁不支援部分格式語法，你可以使用 `aria-label` 來描述連結。就如下方物件被標註上 "Widget description" 的標籤。

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ 總體而言，使用語義化標籤得以取代 ARIA 功能，但是這些標籤無法全面性地覆蓋 HTML 的各式物件。樹(Tree)就是一種例子。沒有 HTML 物件能處理一棵樹，所以你可以在 `<div>` 元素中加上 aria 數值。[關於 ARIA 的 MDN 技術文件](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)說明許多有用的資訊。

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## 圖片

螢幕報讀器用戶無法直接的了解圖片內容。為了確保圖片也能服務給視覺障礙者，這就是 `alt` 屬性存在的目的。所有重要的圖片都需要有 `alt` 描述圖片的內容。
裝飾性圖片的 `alt` 欄位就需要留空字串：`alt=""`。 這樣能避免螢幕報讀器朗讀不必要的裝飾性圖片敘述。

✅ 你可能會猜到，搜尋引擎也有可能無法辨別圖片。它們也是使用 alt 敘述。因此，無障礙網頁有許多加分要素！

## 鍵盤輸入

有些用戶無法使用滑鼠或觸控板，他們需要使用鍵盤中的 "tab" 鍵來切換網頁元素，讓網頁物件能順序性地排列與互動就很重要。如果網頁有語義化標籤並以CSS造型化視覺畫面，網頁基本上就能以鍵盤來切換，當然手動測試還是必要的。了解更多關於[鍵盤調查的策略](https://webaim.org/techniques/keyboard/)。

✅ 前往任何一個網頁，試著只以鍵盤瀏覽網頁。哪些能成功運作，你又遭遇了哪些困難? 你有辦法解釋嗎?

## 結論

能連上網頁並不是網際網路的真諦。從現在起確保網頁能以無障礙的方式呈現。雖然還有很多未被提及的開發資訊，熟習你知道的無障礙開發知識一定會對網頁有所幫助。

---

## 🚀 挑戰

看看下列的 HTML 程式碼。利用你所學到的知識，試著增進它的網頁親和力。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## 課後測驗
[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6?loc=zh_tw)

## 複習與自學

許多政府機關立法要求無障礙需求。查詢你的國家是否有這些法規。它們涉及了那些，那些又沒包含在其中? 看看[英國政府機關網頁](https://accessibility.blog.gov.uk/)的例子。

## 作業
 
[分析一個非無障礙網頁](assignment.zh-tw.md)

參考出處： [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample)
