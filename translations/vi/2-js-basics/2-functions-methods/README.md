<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T22:45:20+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "vi"
}
-->
# Kiến thức cơ bản về JavaScript: Phương thức và Hàm

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Câu hỏi trước bài giảng
[Câu hỏi trước bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Khi chúng ta nghĩ về việc viết mã, chúng ta luôn muốn đảm bảo rằng mã của mình dễ đọc. Mặc dù điều này nghe có vẻ ngược đời, nhưng mã được đọc nhiều lần hơn rất nhiều so với khi nó được viết. Một công cụ cốt lõi trong bộ công cụ của nhà phát triển để đảm bảo mã dễ bảo trì chính là **hàm**.

[![Phương thức và Hàm](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 Nhấp vào hình ảnh trên để xem video về phương thức và hàm.

> Bạn có thể học bài này trên [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Hàm

Về cơ bản, một hàm là một khối mã mà chúng ta có thể thực thi theo yêu cầu. Điều này rất phù hợp trong các tình huống mà chúng ta cần thực hiện cùng một nhiệm vụ nhiều lần; thay vì sao chép logic ở nhiều nơi (điều này sẽ gây khó khăn khi cần cập nhật), chúng ta có thể tập trung nó ở một nơi và gọi nó bất cứ khi nào cần thực hiện thao tác - bạn thậm chí có thể gọi hàm từ các hàm khác!

Một điều quan trọng không kém là khả năng đặt tên cho một hàm. Mặc dù điều này có vẻ tầm thường, nhưng tên hàm cung cấp một cách nhanh chóng để ghi chú một phần mã. Bạn có thể nghĩ về nó như một nhãn trên một nút bấm. Nếu tôi nhấp vào một nút có dòng chữ "Hủy hẹn giờ", tôi biết rằng nó sẽ dừng đồng hồ đang chạy.

## Tạo và gọi một hàm

Cú pháp của một hàm trông như sau:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Nếu tôi muốn tạo một hàm để hiển thị lời chào, nó có thể trông như thế này:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Bất cứ khi nào chúng ta muốn gọi (hoặc thực thi) hàm của mình, chúng ta sử dụng tên của hàm kèm theo `()`. Điều đáng chú ý là hàm của chúng ta có thể được định nghĩa trước hoặc sau khi chúng ta quyết định gọi nó; trình biên dịch JavaScript sẽ tìm nó cho bạn.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Có một loại hàm đặc biệt được gọi là **phương thức**, mà bạn đã sử dụng! Thực tế, chúng ta đã thấy điều này trong ví dụ trên khi sử dụng `console.log`. Điều làm cho phương thức khác biệt so với hàm là phương thức được gắn với một đối tượng (`console` trong ví dụ của chúng ta), trong khi hàm thì tự do. Bạn sẽ nghe nhiều nhà phát triển sử dụng các thuật ngữ này thay thế cho nhau.

### Các thực hành tốt nhất khi sử dụng hàm

Có một số thực hành tốt cần ghi nhớ khi tạo hàm:

- Như mọi khi, sử dụng tên mô tả để biết hàm sẽ làm gì
- Sử dụng **camelCasing** để kết hợp các từ
- Giữ cho hàm tập trung vào một nhiệm vụ cụ thể

## Truyền thông tin vào hàm

Để làm cho một hàm linh hoạt hơn, bạn thường muốn truyền thông tin vào nó. Nếu chúng ta xem xét ví dụ `displayGreeting` ở trên, nó chỉ hiển thị **Hello, world!**. Đây không phải là hàm hữu ích nhất mà bạn có thể tạo. Nếu chúng ta muốn làm cho nó linh hoạt hơn một chút, như cho phép ai đó chỉ định tên của người cần chào, chúng ta có thể thêm một **tham số**. Một tham số (đôi khi còn được gọi là **đối số**) là thông tin bổ sung được gửi vào hàm.

Các tham số được liệt kê trong phần định nghĩa trong dấu ngoặc đơn và được phân tách bằng dấu phẩy như sau:

```javascript
function name(param, param2, param3) {

}
```

Chúng ta có thể cập nhật `displayGreeting` để chấp nhận một tên và hiển thị nó.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Khi chúng ta muốn gọi hàm và truyền tham số vào, chúng ta chỉ định nó trong dấu ngoặc đơn.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Giá trị mặc định

Chúng ta có thể làm cho hàm của mình linh hoạt hơn bằng cách thêm nhiều tham số hơn. Nhưng nếu chúng ta không muốn yêu cầu mọi giá trị đều phải được chỉ định thì sao? Tiếp tục với ví dụ về lời chào, chúng ta có thể để tên là bắt buộc (chúng ta cần biết đang chào ai), nhưng chúng ta muốn cho phép lời chào được tùy chỉnh theo ý muốn. Nếu ai đó không muốn tùy chỉnh, chúng ta cung cấp một giá trị mặc định thay thế. Để cung cấp giá trị mặc định cho một tham số, chúng ta đặt nó giống như cách đặt giá trị cho một biến - `parameterName = 'defaultValue'`. Để xem một ví dụ đầy đủ:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Khi chúng ta gọi hàm, chúng ta có thể quyết định có muốn đặt giá trị cho `salutation` hay không.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Giá trị trả về

Cho đến nay, các hàm chúng ta xây dựng sẽ luôn xuất ra [console](https://developer.mozilla.org/docs/Web/API/console). Đôi khi điều này có thể là chính xác những gì chúng ta đang tìm kiếm, đặc biệt khi chúng ta tạo các hàm sẽ gọi các dịch vụ khác. Nhưng nếu tôi muốn tạo một hàm trợ giúp để thực hiện một phép tính và cung cấp giá trị đó để tôi có thể sử dụng nó ở nơi khác thì sao?

Chúng ta có thể làm điều này bằng cách sử dụng **giá trị trả về**. Một giá trị trả về được trả về bởi hàm và có thể được lưu trữ trong một biến giống như cách chúng ta có thể lưu trữ một giá trị tĩnh như chuỗi hoặc số.

Nếu một hàm trả về điều gì đó thì từ khóa `return` được sử dụng. Từ khóa `return` mong đợi một giá trị hoặc tham chiếu của những gì được trả về như sau:

```javascript
return myVariable;
```  

Chúng ta có thể tạo một hàm để tạo thông điệp chào và trả về giá trị đó cho người gọi.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Khi gọi hàm này, chúng ta sẽ lưu giá trị trong một biến. Điều này giống như cách chúng ta đặt một biến với giá trị tĩnh (như `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Hàm như tham số cho hàm khác

Khi bạn tiến xa hơn trong sự nghiệp lập trình, bạn sẽ gặp các hàm chấp nhận hàm khác làm tham số. Thủ thuật thú vị này thường được sử dụng khi chúng ta không biết khi nào điều gì đó sẽ xảy ra hoặc hoàn thành, nhưng chúng ta biết rằng cần thực hiện một thao tác để phản hồi.

Ví dụ, hãy xem xét [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), bắt đầu một bộ hẹn giờ và sẽ thực thi mã khi nó hoàn thành. Chúng ta cần nói cho nó biết đoạn mã nào cần thực thi. Nghe có vẻ như một công việc hoàn hảo cho một hàm!

Nếu bạn chạy đoạn mã dưới đây, sau 3 giây bạn sẽ thấy thông báo **3 giây đã trôi qua**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Hàm ẩn danh

Hãy xem lại những gì chúng ta đã xây dựng. Chúng ta đang tạo một hàm có tên sẽ được sử dụng một lần. Khi ứng dụng của chúng ta trở nên phức tạp hơn, chúng ta có thể thấy mình tạo ra rất nhiều hàm chỉ được gọi một lần. Điều này không lý tưởng. Hóa ra, chúng ta không phải lúc nào cũng cần cung cấp tên!

Khi chúng ta truyền một hàm làm tham số, chúng ta có thể bỏ qua việc tạo một hàm trước và thay vào đó xây dựng nó như một phần của tham số. Chúng ta sử dụng từ khóa `function` như bình thường, nhưng thay vào đó chúng ta xây dựng nó như một tham số.

Hãy viết lại đoạn mã trên để sử dụng một hàm ẩn danh:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Nếu bạn chạy đoạn mã mới của chúng ta, bạn sẽ nhận thấy chúng ta có cùng kết quả. Chúng ta đã tạo một hàm nhưng không cần phải đặt tên cho nó!

### Hàm mũi tên (Fat arrow functions)

Một phím tắt phổ biến trong nhiều ngôn ngữ lập trình (bao gồm JavaScript) là khả năng sử dụng cái gọi là **hàm mũi tên** hoặc **hàm mũi tên béo**. Nó sử dụng một ký hiệu đặc biệt `=>`, trông giống như một mũi tên - do đó có tên gọi! Bằng cách sử dụng `=>`, chúng ta có thể bỏ qua từ khóa `function`.

Hãy viết lại đoạn mã của chúng ta một lần nữa để sử dụng hàm mũi tên béo:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Khi nào sử dụng từng chiến lược

Bây giờ bạn đã thấy chúng ta có ba cách để truyền một hàm làm tham số và có thể đang tự hỏi khi nào nên sử dụng từng cách. Nếu bạn biết rằng bạn sẽ sử dụng hàm nhiều hơn một lần, hãy tạo nó như bình thường. Nếu bạn sẽ chỉ sử dụng nó ở một vị trí, thường tốt nhất là sử dụng một hàm ẩn danh. Việc bạn sử dụng hàm mũi tên béo hay cú pháp `function` truyền thống là tùy thuộc vào bạn, nhưng bạn sẽ nhận thấy hầu hết các nhà phát triển hiện đại thích sử dụng `=>`.

---

## 🚀 Thử thách

Bạn có thể giải thích trong một câu sự khác biệt giữa hàm và phương thức không? Hãy thử nhé!

## Câu hỏi sau bài giảng
[Câu hỏi sau bài giảng](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Ôn tập & Tự học

Đáng để [đọc thêm một chút về hàm mũi tên](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), vì chúng ngày càng được sử dụng nhiều trong các mã nguồn. Hãy thực hành viết một hàm, sau đó viết lại nó bằng cú pháp này.

## Bài tập

[Thú vị với Hàm](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.