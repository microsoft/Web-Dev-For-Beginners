<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-27T23:16:02+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "vi"
}
-->
# Tạo Trang Web Dễ Tiếp Cận

![Tất Cả Về Khả Năng Tiếp Cận](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Câu Hỏi Trước Bài Giảng
[Câu hỏi trước bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Sức mạnh của Web nằm ở tính phổ quát của nó. Khả năng tiếp cận bởi tất cả mọi người, bất kể khuyết tật, là một khía cạnh thiết yếu.
>
> \- Sir Timothy Berners-Lee, Giám đốc W3C và người phát minh ra World Wide Web

Câu nói này nhấn mạnh hoàn hảo tầm quan trọng của việc tạo ra các trang web dễ tiếp cận. Một ứng dụng không thể được truy cập bởi tất cả mọi người thì theo định nghĩa là loại trừ. Là nhà phát triển web, chúng ta luôn phải nghĩ đến khả năng tiếp cận. Bằng cách tập trung vào điều này ngay từ đầu, bạn sẽ đảm bảo rằng mọi người đều có thể truy cập các trang bạn tạo. Trong bài học này, bạn sẽ tìm hiểu về các công cụ giúp đảm bảo rằng tài sản web của bạn dễ tiếp cận và cách xây dựng với tư duy về khả năng tiếp cận.

> Bạn có thể học bài này trên [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Các Công Cụ Sử Dụng

### Trình đọc màn hình

Một trong những công cụ hỗ trợ tiếp cận nổi tiếng nhất là trình đọc màn hình.

[Trình đọc màn hình](https://en.wikipedia.org/wiki/Screen_reader) thường được sử dụng bởi những người khiếm thị. Khi chúng ta dành thời gian để đảm bảo trình duyệt truyền tải đúng thông tin mà chúng ta muốn chia sẻ, chúng ta cũng phải đảm bảo rằng trình đọc màn hình làm được điều tương tự.

Ở mức cơ bản nhất, trình đọc màn hình sẽ đọc một trang từ trên xuống dưới bằng âm thanh. Nếu trang của bạn chỉ toàn văn bản, trình đọc sẽ truyền tải thông tin tương tự như trình duyệt. Tất nhiên, các trang web hiếm khi chỉ có văn bản; chúng thường chứa liên kết, hình ảnh, màu sắc và các thành phần trực quan khác. Cần phải cẩn thận để đảm bảo rằng thông tin này được trình đọc màn hình đọc đúng cách.

Mỗi nhà phát triển web nên làm quen với một trình đọc màn hình. Như đã đề cập ở trên, đây là công cụ mà người dùng của bạn sẽ sử dụng. Giống như cách bạn quen thuộc với cách trình duyệt hoạt động, bạn cũng nên học cách trình đọc màn hình hoạt động. May mắn thay, trình đọc màn hình được tích hợp sẵn trong hầu hết các hệ điều hành.

Một số trình duyệt cũng có các công cụ và tiện ích mở rộng tích hợp có thể đọc văn bản to hoặc thậm chí cung cấp một số tính năng điều hướng cơ bản, chẳng hạn như [các công cụ tập trung vào khả năng tiếp cận của trình duyệt Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Đây cũng là những công cụ hỗ trợ tiếp cận quan trọng, nhưng hoạt động rất khác so với trình đọc màn hình và không nên bị nhầm lẫn là công cụ kiểm tra trình đọc màn hình.

✅ Hãy thử một trình đọc màn hình và trình đọc văn bản của trình duyệt. Trên Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) được tích hợp sẵn, và bạn cũng có thể cài đặt [JAWS](https://webaim.org/articles/jaws/) và [NVDA](https://www.nvaccess.org/about-nvda/). Trên macOS và iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) được cài đặt mặc định.

### Phóng to

Một công cụ khác thường được sử dụng bởi những người khiếm thị là tính năng phóng to. Loại phóng to cơ bản nhất là phóng to tĩnh, được điều khiển bằng `Control + dấu cộng (+)` hoặc bằng cách giảm độ phân giải màn hình. Loại phóng to này làm toàn bộ trang thay đổi kích thước, vì vậy việc sử dụng [thiết kế đáp ứng](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) là rất quan trọng để cung cấp trải nghiệm người dùng tốt ở các mức phóng to cao hơn.

Một loại phóng to khác dựa vào phần mềm chuyên dụng để phóng to một khu vực cụ thể trên màn hình và di chuyển, giống như sử dụng kính lúp thực sự. Trên Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) được tích hợp sẵn, và [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) là phần mềm phóng to của bên thứ ba với nhiều tính năng hơn và lượng người dùng lớn hơn. Cả macOS và iOS đều có phần mềm phóng to tích hợp sẵn gọi là [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Công cụ kiểm tra độ tương phản

Màu sắc trên các trang web cần được chọn cẩn thận để đáp ứng nhu cầu của người mù màu hoặc những người gặp khó khăn khi nhìn các màu có độ tương phản thấp.

✅ Kiểm tra một trang web mà bạn yêu thích về cách sử dụng màu sắc bằng tiện ích mở rộng trình duyệt như [công cụ kiểm tra màu của WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Bạn học được gì?

### Lighthouse

Trong khu vực công cụ dành cho nhà phát triển của trình duyệt, bạn sẽ tìm thấy công cụ Lighthouse. Công cụ này rất quan trọng để có cái nhìn đầu tiên về khả năng tiếp cận (cũng như các phân tích khác) của một trang web. Mặc dù không nên chỉ dựa vào Lighthouse, nhưng đạt điểm 100% là một cơ sở rất hữu ích.

✅ Tìm Lighthouse trong bảng công cụ dành cho nhà phát triển của trình duyệt và chạy phân tích trên bất kỳ trang web nào. Bạn phát hiện ra điều gì?

## Thiết Kế Với Tư Duy Tiếp Cận

Khả năng tiếp cận là một chủ đề tương đối lớn. Để giúp bạn, có rất nhiều tài nguyên sẵn có.

- [Accessible U - Đại học Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Mặc dù chúng ta không thể bao quát mọi khía cạnh của việc tạo các trang web dễ tiếp cận, dưới đây là một số nguyên tắc cốt lõi mà bạn sẽ muốn áp dụng. Thiết kế một trang dễ tiếp cận ngay từ đầu **luôn luôn** dễ dàng hơn so với việc quay lại một trang hiện có để làm cho nó dễ tiếp cận.

## Nguyên Tắc Hiển Thị Tốt

### Bảng màu an toàn

Mọi người nhìn thế giới theo những cách khác nhau, và điều này bao gồm cả màu sắc. Khi chọn bảng màu cho trang web của bạn, bạn nên đảm bảo rằng nó dễ tiếp cận với tất cả mọi người. Một công cụ tuyệt vời để tạo bảng màu là [Color Safe](http://colorsafe.co/).

✅ Xác định một trang web có vấn đề nghiêm trọng trong việc sử dụng màu sắc. Tại sao?

### Sử dụng HTML đúng cách

Với CSS và JavaScript, bạn có thể làm cho bất kỳ phần tử nào trông giống như bất kỳ loại điều khiển nào. `<span>` có thể được sử dụng để tạo `<button>`, và `<b>` có thể trở thành một liên kết. Mặc dù điều này có thể được coi là dễ dàng hơn để tạo kiểu, nhưng nó không truyền tải được gì cho trình đọc màn hình. Hãy sử dụng HTML phù hợp khi tạo các điều khiển trên trang. Nếu bạn muốn một liên kết, hãy sử dụng `<a>`. Sử dụng HTML đúng cho điều khiển đúng được gọi là sử dụng HTML ngữ nghĩa.

✅ Truy cập bất kỳ trang web nào và xem liệu các nhà thiết kế và nhà phát triển có sử dụng HTML đúng cách không. Bạn có thể tìm thấy một nút nào đáng lẽ nên là một liên kết không? Gợi ý: nhấp chuột phải và chọn 'Xem Nguồn Trang' trong trình duyệt của bạn để xem mã nguồn.

### Tạo cấu trúc tiêu đề mô tả

Người dùng trình đọc màn hình [phụ thuộc rất nhiều vào tiêu đề](https://webaim.org/projects/screenreadersurvey8/#finding) để tìm thông tin và điều hướng qua một trang. Viết nội dung tiêu đề mô tả và sử dụng thẻ tiêu đề ngữ nghĩa là rất quan trọng để tạo một trang dễ điều hướng cho người dùng trình đọc màn hình.

### Sử dụng các gợi ý trực quan tốt

CSS cung cấp khả năng kiểm soát hoàn toàn giao diện của bất kỳ phần tử nào trên trang. Bạn có thể tạo hộp văn bản không có đường viền hoặc liên kết không có gạch chân. Tuy nhiên, việc loại bỏ những gợi ý này có thể khiến ai đó phụ thuộc vào chúng gặp khó khăn trong việc nhận ra loại điều khiển.

## Tầm Quan Trọng Của Văn Bản Liên Kết

Liên kết là cốt lõi của việc điều hướng web. Do đó, đảm bảo rằng trình đọc màn hình có thể đọc đúng các liên kết cho phép tất cả người dùng điều hướng trang web của bạn.

### Trình đọc màn hình và liên kết

Như bạn mong đợi, trình đọc màn hình đọc văn bản liên kết giống như cách chúng đọc bất kỳ văn bản nào khác trên trang. Với điều này trong tâm trí, văn bản được minh họa dưới đây có thể cảm thấy hoàn toàn chấp nhận được.

> Chim cánh cụt nhỏ, đôi khi được gọi là chim cánh cụt tiên, là loài chim cánh cụt nhỏ nhất trên thế giới. [Nhấp vào đây](https://en.wikipedia.org/wiki/Little_penguin) để biết thêm thông tin.

> Chim cánh cụt nhỏ, đôi khi được gọi là chim cánh cụt tiên, là loài chim cánh cụt nhỏ nhất trên thế giới. Truy cập https://en.wikipedia.org/wiki/Little_penguin để biết thêm thông tin.

> **LƯU Ý** Như bạn sắp đọc, bạn **không bao giờ** nên tạo các liên kết giống như trên.

Hãy nhớ rằng, trình đọc màn hình là một giao diện khác với trình duyệt với một tập hợp tính năng khác.

### Vấn đề với việc sử dụng URL

Trình đọc màn hình đọc văn bản. Nếu một URL xuất hiện trong văn bản, trình đọc màn hình sẽ đọc URL. Nói chung, URL không truyền tải thông tin có ý nghĩa và có thể gây khó chịu. Bạn có thể đã trải nghiệm điều này nếu điện thoại của bạn từng đọc to một tin nhắn văn bản có URL.

### Vấn đề với "nhấp vào đây"

Trình đọc màn hình cũng có khả năng chỉ đọc các liên kết trên một trang, giống như cách một người nhìn sẽ quét trang để tìm liên kết. Nếu văn bản liên kết luôn là "nhấp vào đây", tất cả những gì người dùng sẽ nghe là "nhấp vào đây, nhấp vào đây, nhấp vào đây, nhấp vào đây, nhấp vào đây, ..." Tất cả các liên kết giờ đây không thể phân biệt được với nhau.

### Văn bản liên kết tốt

Văn bản liên kết tốt mô tả ngắn gọn những gì ở phía bên kia của liên kết. Trong ví dụ trên nói về chim cánh cụt nhỏ, liên kết dẫn đến trang Wikipedia về loài này. Cụm từ *chim cánh cụt nhỏ* sẽ là văn bản liên kết hoàn hảo vì nó làm rõ những gì ai đó sẽ tìm hiểu nếu họ nhấp vào liên kết - chim cánh cụt nhỏ.

> [Chim cánh cụt nhỏ](https://en.wikipedia.org/wiki/Little_penguin), đôi khi được gọi là chim cánh cụt tiên, là loài chim cánh cụt nhỏ nhất trên thế giới.

✅ Lướt web trong vài phút để tìm các trang sử dụng chiến lược liên kết không rõ ràng. So sánh chúng với các trang khác có liên kết tốt hơn. Bạn học được gì?

#### Ghi chú về công cụ tìm kiếm

Như một lợi ích bổ sung khi đảm bảo trang web của bạn dễ tiếp cận với tất cả mọi người, bạn sẽ giúp các công cụ tìm kiếm điều hướng trang web của bạn. Các công cụ tìm kiếm sử dụng văn bản liên kết để tìm hiểu các chủ đề của các trang. Vì vậy, sử dụng văn bản liên kết tốt giúp ích cho tất cả mọi người!

### ARIA

Hãy tưởng tượng trang sau:

| Sản phẩm      | Mô tả             | Đặt hàng     |
| ------------- | ----------------- | ------------ |
| Widget        | [Mô tả](../../../../1-getting-started-lessons/3-accessibility/')     | [Đặt hàng](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget  | [Mô tả](../../../../1-getting-started-lessons/3-accessibility/')     | [Đặt hàng](../../../../1-getting-started-lessons/3-accessibility/') |

Trong ví dụ này, việc lặp lại văn bản "mô tả" và "đặt hàng" có ý nghĩa đối với người sử dụng trình duyệt. Tuy nhiên, người sử dụng trình đọc màn hình sẽ chỉ nghe thấy các từ *mô tả* và *đặt hàng* lặp lại mà không có ngữ cảnh.

Để hỗ trợ các tình huống như vậy, HTML hỗ trợ một tập hợp các thuộc tính được gọi là [Ứng dụng Internet Phong phú Dễ Tiếp Cận (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Các thuộc tính này cho phép bạn cung cấp thêm thông tin cho trình đọc màn hình.

> **LƯU Ý**: Giống như nhiều khía cạnh của HTML, hỗ trợ trình duyệt và trình đọc màn hình có thể khác nhau. Tuy nhiên, hầu hết các trình khách chính đều hỗ trợ các thuộc tính ARIA.

Bạn có thể sử dụng `aria-label` để mô tả liên kết khi định dạng của trang không cho phép bạn làm điều đó. Mô tả cho widget có thể được đặt như sau:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Nói chung, sử dụng đánh dấu ngữ nghĩa như đã mô tả ở trên vượt trội hơn việc sử dụng ARIA, nhưng đôi khi không có tương đương ngữ nghĩa cho các tiện ích HTML khác nhau. Một ví dụ điển hình là Cây (Tree). Không có tương đương HTML cho cây, vì vậy bạn xác định `<div>` chung cho phần tử này với vai trò và giá trị ARIA phù hợp. [Tài liệu MDN về ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) chứa thêm thông tin hữu ích.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Hình ảnh

Không cần phải nói, trình đọc màn hình không thể tự động đọc những gì có trong một hình ảnh. Đảm bảo hình ảnh dễ tiếp cận không tốn nhiều công sức - đó là mục đích của thuộc tính `alt`. Tất cả các hình ảnh có ý nghĩa nên có `alt` để mô tả chúng là gì.  
Các hình ảnh chỉ mang tính trang trí nên có thuộc tính `alt` được đặt thành chuỗi rỗng: `alt=""`. Điều này ngăn trình đọc màn hình thông báo không cần thiết về hình ảnh trang trí.

✅ Như bạn có thể mong đợi, các công cụ tìm kiếm cũng không thể hiểu được những gì có trong một hình ảnh. Chúng cũng sử dụng văn bản thay thế. Vì vậy, một lần nữa, đảm bảo trang của bạn dễ tiếp cận mang lại lợi ích bổ sung!

## Bàn phím

Một số người dùng không thể sử dụng chuột hoặc bàn di chuột, thay vào đó dựa vào các tương tác bàn phím để di chuyển từ phần tử này sang phần tử khác. Điều quan trọng là trang web của bạn phải trình bày nội dung theo thứ tự hợp lý để người dùng bàn phím có thể truy cập từng phần tử tương tác khi họ di chuyển xuống tài liệu. Nếu bạn xây dựng các trang web của mình với đánh dấu ngữ nghĩa và sử dụng CSS để tạo kiểu bố cục trực quan của chúng, trang web của bạn sẽ có thể điều hướng bằng bàn phím, nhưng điều quan trọng là phải kiểm tra khía cạnh này một cách thủ công. Tìm hiểu thêm về [các chiến lược điều hướng bàn phím](https://webaim.org/techniques/keyboard/).

✅ Truy cập bất kỳ trang web nào và thử điều hướng qua nó chỉ bằng bàn phím của bạn. Điều gì hoạt động, điều gì không hoạt động? Tại sao?

## Tóm Tắt

Một trang web chỉ dễ tiếp cận với một số người không phải là một 'mạng lưới toàn cầu' thực sự. Cách tốt nhất để đảm bảo các trang bạn tạo dễ tiếp cận là kết hợp các thực hành tốt nhất về khả năng tiếp cận ngay từ đầu. Mặc dù có những bước bổ sung liên quan, nhưng việc kết hợp các kỹ năng này vào quy trình làm việc của bạn ngay bây giờ sẽ đảm bảo tất cả các trang bạn tạo đều dễ tiếp cận.

---

## 🚀 Thử Thách

Hãy lấy đoạn HTML này và viết lại nó để dễ tiếp cận nhất có thể, dựa trên các chiến lược bạn đã học.

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

## Câu Hỏi Sau Bài Giảng
[Câu hỏi sau bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Ôn Tập & Tự Học
Nhiều chính phủ có các luật liên quan đến yêu cầu về khả năng tiếp cận. Hãy tìm hiểu về các luật khả năng tiếp cận của quốc gia bạn. Những gì được bao gồm và những gì không được bao gồm? Một ví dụ là [trang web của chính phủ này](https://accessibility.blog.gov.uk/).

## Bài tập

[Phân tích một trang web không có khả năng tiếp cận](assignment.md)

Nguồn: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) bởi Instrument

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.