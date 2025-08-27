<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T23:08:57+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "vi"
}
-->
# Tạo một trò chơi sử dụng sự kiện

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Lập trình hướng sự kiện

Khi tạo một ứng dụng dựa trên trình duyệt, chúng ta cung cấp giao diện đồ họa (GUI) để người dùng tương tác với những gì chúng ta đã xây dựng. Cách phổ biến nhất để tương tác với trình duyệt là thông qua việc nhấp chuột và nhập liệu vào các phần tử khác nhau. Thách thức mà chúng ta đối mặt với tư cách là nhà phát triển là chúng ta không biết khi nào người dùng sẽ thực hiện những thao tác này!

[Lập trình hướng sự kiện](https://en.wikipedia.org/wiki/Event-driven_programming) là tên gọi của loại lập trình mà chúng ta cần thực hiện để tạo GUI. Nếu phân tích cụm từ này, chúng ta thấy từ cốt lõi ở đây là **sự kiện**. [Sự kiện](https://www.merriam-webster.com/dictionary/event), theo Merriam-Webster, được định nghĩa là "một điều gì đó xảy ra". Điều này mô tả hoàn hảo tình huống của chúng ta. Chúng ta biết điều gì đó sẽ xảy ra mà chúng ta muốn thực thi một đoạn mã để phản hồi, nhưng chúng ta không biết khi nào nó sẽ diễn ra.

Cách chúng ta đánh dấu một đoạn mã mà chúng ta muốn thực thi là tạo một hàm. Khi nghĩ về [lập trình thủ tục](https://en.wikipedia.org/wiki/Procedural_programming), các hàm được gọi theo một thứ tự cụ thể. Điều này cũng đúng với lập trình hướng sự kiện. Sự khác biệt nằm ở **cách** các hàm được gọi.

Để xử lý các sự kiện (nhấp chuột, nhập liệu, v.v.), chúng ta đăng ký **trình lắng nghe sự kiện**. Trình lắng nghe sự kiện là một hàm lắng nghe khi một sự kiện xảy ra và thực thi để phản hồi. Trình lắng nghe sự kiện có thể cập nhật giao diện người dùng, thực hiện các cuộc gọi đến máy chủ, hoặc bất kỳ điều gì khác cần làm để phản hồi hành động của người dùng. Chúng ta thêm một trình lắng nghe sự kiện bằng cách sử dụng [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) và cung cấp một hàm để thực thi.

> **NOTE:** Đáng chú ý là có nhiều cách để tạo trình lắng nghe sự kiện. Bạn có thể sử dụng các hàm ẩn danh hoặc tạo các hàm có tên. Bạn có thể sử dụng các phím tắt khác nhau, như thiết lập thuộc tính `click`, hoặc sử dụng `addEventListener`. Trong bài tập này, chúng ta sẽ tập trung vào `addEventListener` và các hàm ẩn danh, vì đây có lẽ là kỹ thuật phổ biến nhất mà các nhà phát triển web sử dụng. Nó cũng là cách linh hoạt nhất, vì `addEventListener` hoạt động với tất cả các sự kiện, và tên sự kiện có thể được cung cấp dưới dạng tham số.

### Các sự kiện phổ biến

Có [hàng tá sự kiện](https://developer.mozilla.org/docs/Web/Events) mà bạn có thể lắng nghe khi tạo một ứng dụng. Hầu như bất kỳ điều gì người dùng làm trên trang đều kích hoạt một sự kiện, điều này mang lại cho bạn rất nhiều quyền lực để đảm bảo họ có được trải nghiệm như mong muốn. May mắn thay, bạn thường chỉ cần một số ít sự kiện. Dưới đây là một vài sự kiện phổ biến (bao gồm hai sự kiện chúng ta sẽ sử dụng khi tạo trò chơi):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Người dùng nhấp vào một thứ gì đó, thường là một nút hoặc liên kết
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Người dùng nhấp chuột phải
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Người dùng bôi đen một đoạn văn bản
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Người dùng nhập một đoạn văn bản

## Tạo trò chơi

Chúng ta sẽ tạo một trò chơi để khám phá cách các sự kiện hoạt động trong JavaScript. Trò chơi của chúng ta sẽ kiểm tra kỹ năng gõ phím của người chơi, một trong những kỹ năng bị đánh giá thấp nhất mà tất cả các nhà phát triển nên có. Chúng ta nên luyện tập gõ phím thường xuyên! Quy trình chung của trò chơi sẽ như sau:

- Người chơi nhấp vào nút bắt đầu và được hiển thị một câu trích dẫn để gõ
- Người chơi gõ câu trích dẫn nhanh nhất có thể trong một hộp văn bản
  - Khi mỗi từ được hoàn thành, từ tiếp theo sẽ được làm nổi bật
  - Nếu người chơi gõ sai, hộp văn bản sẽ chuyển sang màu đỏ
  - Khi người chơi hoàn thành câu trích dẫn, một thông báo thành công sẽ được hiển thị cùng với thời gian đã trôi qua

Hãy cùng xây dựng trò chơi và tìm hiểu về các sự kiện!

### Cấu trúc tệp

Chúng ta sẽ cần tổng cộng ba tệp: **index.html**, **script.js** và **style.css**. Hãy bắt đầu bằng cách thiết lập chúng để làm cho công việc dễ dàng hơn.

- Tạo một thư mục mới cho công việc của bạn bằng cách mở cửa sổ console hoặc terminal và thực hiện lệnh sau:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Mở Visual Studio Code

```bash
code .
```

- Thêm ba tệp vào thư mục trong Visual Studio Code với các tên sau:
  - index.html
  - script.js
  - style.css

## Tạo giao diện người dùng

Nếu chúng ta xem xét các yêu cầu, chúng ta biết rằng chúng ta sẽ cần một số phần tử trên trang HTML của mình. Điều này giống như một công thức, nơi chúng ta cần một số nguyên liệu:

- Một nơi để hiển thị câu trích dẫn cho người dùng gõ
- Một nơi để hiển thị bất kỳ thông báo nào, như thông báo thành công
- Một hộp văn bản để nhập liệu
- Một nút bắt đầu

Mỗi phần tử này sẽ cần ID để chúng ta có thể làm việc với chúng trong JavaScript. Chúng ta cũng sẽ thêm tham chiếu đến các tệp CSS và JavaScript mà chúng ta sẽ tạo.

Tạo một tệp mới có tên **index.html**. Thêm HTML sau:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Khởi chạy ứng dụng

Luôn luôn tốt nhất là phát triển theo từng bước để xem mọi thứ trông như thế nào. Hãy khởi chạy ứng dụng của chúng ta. Có một tiện ích mở rộng tuyệt vời cho Visual Studio Code gọi là [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), tiện ích này sẽ vừa lưu trữ ứng dụng của bạn cục bộ vừa làm mới trình duyệt mỗi khi bạn lưu.

- Cài đặt [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) bằng cách làm theo liên kết và nhấp vào **Install**
  - Bạn sẽ được trình duyệt nhắc mở Visual Studio Code, sau đó Visual Studio Code sẽ nhắc bạn thực hiện cài đặt
  - Khởi động lại Visual Studio Code nếu được nhắc
- Sau khi cài đặt, trong Visual Studio Code, nhấn Ctrl-Shift-P (hoặc Cmd-Shift-P) để mở bảng lệnh
- Gõ **Live Server: Open with Live Server**
  - Live Server sẽ bắt đầu lưu trữ ứng dụng của bạn
- Mở trình duyệt và điều hướng đến **https://localhost:5500**
- Bây giờ bạn sẽ thấy trang mà bạn đã tạo!

Hãy thêm một số chức năng.

## Thêm CSS

Với HTML đã được tạo, hãy thêm CSS để tạo kiểu cơ bản. Chúng ta cần làm nổi bật từ mà người chơi nên gõ và tô màu hộp văn bản nếu những gì họ đã gõ là sai. Chúng ta sẽ làm điều này với hai lớp.

Tạo một tệp mới có tên **style.css** và thêm cú pháp sau.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Khi nói đến CSS, bạn có thể bố trí trang của mình theo cách bạn muốn. Dành một chút thời gian để làm cho trang trông hấp dẫn hơn:

- Chọn một phông chữ khác
- Tô màu cho các tiêu đề
- Thay đổi kích thước các phần tử

## JavaScript

Với giao diện người dùng đã được tạo, giờ là lúc tập trung vào JavaScript, phần sẽ cung cấp logic. Chúng ta sẽ chia nhỏ thành một số bước:

- [Tạo các hằng số](../../../../4-typing-game/typing-game)
- [Trình lắng nghe sự kiện để bắt đầu trò chơi](../../../../4-typing-game/typing-game)
- [Trình lắng nghe sự kiện để nhập liệu](../../../../4-typing-game/typing-game)

Nhưng trước tiên, hãy tạo một tệp mới có tên **script.js**.

### Thêm các hằng số

Chúng ta sẽ cần một số mục để làm cho việc lập trình dễ dàng hơn. Một lần nữa, giống như một công thức, đây là những gì chúng ta sẽ cần:

- Mảng chứa danh sách tất cả các câu trích dẫn
- Mảng trống để lưu trữ tất cả các từ của câu trích dẫn hiện tại
- Không gian để lưu trữ chỉ số của từ mà người chơi hiện đang gõ
- Thời gian người chơi nhấp vào bắt đầu

Chúng ta cũng sẽ cần tham chiếu đến các phần tử giao diện người dùng:

- Hộp văn bản (**typed-value**)
- Hiển thị câu trích dẫn (**quote**)
- Thông báo (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Hãy thêm nhiều câu trích dẫn hơn vào trò chơi của bạn

> **NOTE:** Chúng ta có thể truy xuất các phần tử bất cứ khi nào chúng ta muốn trong mã bằng cách sử dụng `document.getElementById`. Vì chúng ta sẽ tham chiếu đến các phần tử này thường xuyên, chúng ta sẽ tránh lỗi chính tả với chuỗi ký tự bằng cách sử dụng các hằng số. Các framework như [Vue.js](https://vuejs.org/) hoặc [React](https://reactjs.org/) có thể giúp bạn quản lý mã tập trung tốt hơn.

Dành một phút để xem video về cách sử dụng `const`, `let` và `var`

[![Các loại biến](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Các loại biến")

> 🎥 Nhấp vào hình ảnh trên để xem video về các loại biến.

### Thêm logic bắt đầu

Để bắt đầu trò chơi, người chơi sẽ nhấp vào nút bắt đầu. Tất nhiên, chúng ta không biết khi nào họ sẽ nhấp vào nút bắt đầu. Đây là lúc một [trình lắng nghe sự kiện](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) phát huy tác dụng. Trình lắng nghe sự kiện sẽ cho phép chúng ta lắng nghe một điều gì đó xảy ra (một sự kiện) và thực thi mã để phản hồi. Trong trường hợp của chúng ta, chúng ta muốn thực thi mã khi người dùng nhấp vào bắt đầu.

Khi người dùng nhấp vào **bắt đầu**, chúng ta cần chọn một câu trích dẫn, thiết lập giao diện người dùng và thiết lập theo dõi từ hiện tại và thời gian. Dưới đây là JavaScript bạn cần thêm; chúng ta sẽ thảo luận sau đoạn mã.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Hãy phân tích mã!

- Thiết lập theo dõi từ
  - Sử dụng [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) và [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) để chọn ngẫu nhiên một câu trích dẫn từ mảng `quotes`
  - Chuyển đổi `quote` thành một mảng `words` để chúng ta có thể theo dõi từ mà người chơi hiện đang gõ
  - `wordIndex` được đặt thành 0, vì người chơi sẽ bắt đầu từ từ đầu tiên
- Thiết lập giao diện người dùng
  - Tạo một mảng `spanWords`, chứa mỗi từ bên trong một phần tử `span`
    - Điều này sẽ cho phép chúng ta làm nổi bật từ trên màn hình
  - `join` mảng để tạo một chuỗi mà chúng ta có thể sử dụng để cập nhật `innerHTML` trên `quoteElement`
    - Điều này sẽ hiển thị câu trích dẫn cho người chơi
  - Đặt `className` của phần tử `span` đầu tiên thành `highlight` để làm nổi bật nó màu vàng
  - Làm sạch `messageElement` bằng cách đặt `innerText` thành `''`
- Thiết lập hộp văn bản
  - Xóa `value` hiện tại trên `typedValueElement`
  - Đặt `focus` vào `typedValueElement`
- Bắt đầu bộ đếm thời gian bằng cách gọi `getTime`

### Thêm logic nhập liệu

Khi người chơi gõ, một sự kiện `input` sẽ được kích hoạt. Trình lắng nghe sự kiện này sẽ kiểm tra để đảm bảo người chơi đang gõ đúng từ và xử lý trạng thái hiện tại của trò chơi. Quay lại **script.js**, thêm mã sau vào cuối. Chúng ta sẽ phân tích sau đó.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Hãy phân tích mã! Chúng ta bắt đầu bằng cách lấy từ hiện tại và giá trị mà người chơi đã gõ cho đến thời điểm này. Sau đó, chúng ta có logic dạng thác nước, nơi chúng ta kiểm tra xem câu trích dẫn đã hoàn thành, từ đã hoàn thành, từ đúng hay (cuối cùng), nếu có lỗi.

- Câu trích dẫn đã hoàn thành, được chỉ ra bởi `typedValue` bằng với `currentWord`, và `wordIndex` bằng với một ít hơn `length` của `words`
  - Tính `elapsedTime` bằng cách trừ `startTime` khỏi thời gian hiện tại
  - Chia `elapsedTime` cho 1.000 để chuyển đổi từ mili giây sang giây
  - Hiển thị thông báo thành công
- Từ đã hoàn thành, được chỉ ra bởi `typedValue` kết thúc bằng một khoảng trắng (kết thúc của một từ) và `typedValue` bằng với `currentWord`
  - Đặt `value` trên `typedElement` thành `''` để cho phép gõ từ tiếp theo
  - Tăng `wordIndex` để chuyển sang từ tiếp theo
  - Lặp qua tất cả `childNodes` của `quoteElement` để đặt `className` thành `''` để trở về hiển thị mặc định
  - Đặt `className` của từ hiện tại thành `highlight` để đánh dấu nó là từ tiếp theo cần gõ
- Từ hiện tại được gõ đúng (nhưng chưa hoàn thành), được chỉ ra bởi `currentWord` bắt đầu bằng `typedValue`
  - Đảm bảo `typedValueElement` được hiển thị mặc định bằng cách xóa `className`
- Nếu chúng ta đến đây, có một lỗi
  - Đặt `className` trên `typedValueElement` thành `error`

## Kiểm tra ứng dụng của bạn

Bạn đã hoàn thành! Bước cuối cùng là đảm bảo ứng dụng của chúng ta hoạt động. Hãy thử nghiệm! Đừng lo lắng nếu có lỗi; **tất cả các nhà phát triển** đều gặp lỗi. Kiểm tra các thông báo và gỡ lỗi khi cần.

Nhấp vào **bắt đầu**, và bắt đầu gõ! Nó sẽ trông giống như hoạt ảnh mà chúng ta đã thấy trước đó.

![Hoạt ảnh của trò chơi đang chạy](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Thử thách

Thêm nhiều chức năng hơn

- Vô hiệu hóa trình lắng nghe sự kiện `input` khi hoàn thành và kích hoạt lại khi nút được nhấp
- Vô hiệu hóa hộp văn bản khi người chơi hoàn thành câu trích dẫn
- Hiển thị hộp thoại modal với thông báo thành công
- Lưu điểm cao bằng cách sử dụng [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Ôn tập & Tự học

Tìm hiểu về [tất cả các sự kiện có sẵn](https://developer.mozilla.org/docs/Web/Events) cho nhà phát triển thông qua trình duyệt web, và cân nhắc các tình huống mà bạn sẽ sử dụng từng sự kiện.

## Bài tập

[Tạo một trò chơi bàn phím mới](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.