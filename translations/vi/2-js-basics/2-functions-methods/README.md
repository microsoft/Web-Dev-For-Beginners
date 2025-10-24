<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T13:27:33+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "vi"
}
-->
# Cơ bản về JavaScript: Phương thức và Hàm

![Cơ bản về JavaScript - Hàm](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz trước bài giảng
[Quiz trước bài giảng](https://ff-quizzes.netlify.app)

Việc viết lại cùng một đoạn mã nhiều lần là một trong những điều gây khó chịu nhất trong lập trình. Hàm giải quyết vấn đề này bằng cách cho phép bạn đóng gói mã thành các khối có thể tái sử dụng. Hãy nghĩ về các hàm như các bộ phận tiêu chuẩn hóa đã làm cho dây chuyền lắp ráp của Henry Ford trở nên cách mạng – một khi bạn tạo ra một thành phần đáng tin cậy, bạn có thể sử dụng nó ở bất cứ đâu mà không cần phải xây dựng lại từ đầu.

Hàm cho phép bạn đóng gói các đoạn mã để bạn có thể tái sử dụng chúng trong toàn bộ chương trình của mình. Thay vì sao chép và dán cùng một logic ở khắp nơi, bạn có thể tạo một hàm một lần và gọi nó bất cứ khi nào cần. Cách tiếp cận này giúp mã của bạn được tổ chức tốt hơn và việc cập nhật trở nên dễ dàng hơn.

Trong bài học này, bạn sẽ học cách tạo ra các hàm của riêng mình, truyền thông tin vào chúng và nhận lại kết quả hữu ích. Bạn sẽ khám phá sự khác biệt giữa hàm và phương thức, học các cách tiếp cận cú pháp hiện đại, và thấy cách các hàm có thể hoạt động cùng với các hàm khác. Chúng ta sẽ xây dựng các khái niệm này từng bước một.

[![Phương thức và Hàm](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Phương thức và Hàm")

> 🎥 Nhấp vào hình ảnh trên để xem video về phương thức và hàm.

> Bạn có thể học bài này trên [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Hàm

Hàm là một khối mã độc lập thực hiện một nhiệm vụ cụ thể. Nó bao gồm logic mà bạn có thể thực thi bất cứ khi nào cần.

Thay vì viết cùng một đoạn mã nhiều lần trong chương trình của mình, bạn có thể đóng gói nó trong một hàm và gọi hàm đó bất cứ khi nào bạn cần. Cách tiếp cận này giúp mã của bạn sạch sẽ và việc cập nhật trở nên dễ dàng hơn. Hãy nghĩ đến thách thức bảo trì nếu bạn cần thay đổi logic được rải rác ở 20 vị trí khác nhau trong mã của mình.

Việc đặt tên cho các hàm một cách mô tả là rất quan trọng. Một hàm được đặt tên tốt sẽ truyền đạt rõ ràng mục đích của nó – khi bạn thấy `cancelTimer()`, bạn ngay lập tức hiểu được nó làm gì, giống như một nút được gắn nhãn rõ ràng cho bạn biết chính xác điều gì sẽ xảy ra khi bạn nhấp vào nó.

## Tạo và gọi một hàm

Hãy xem cách tạo một hàm. Cú pháp tuân theo một mẫu nhất định:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Hãy phân tích điều này:
- Từ khóa `function` cho JavaScript biết "Này, tôi đang tạo một hàm!"
- `nameOfFunction` là nơi bạn đặt tên mô tả cho hàm của mình
- Dấu ngoặc đơn `()` là nơi bạn có thể thêm các tham số (chúng ta sẽ nói về điều này sau)
- Dấu ngoặc nhọn `{}` chứa mã thực tế sẽ chạy khi bạn gọi hàm

Hãy tạo một hàm chào đơn giản để xem cách hoạt động:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Hàm này in "Hello, world!" ra console. Sau khi bạn đã định nghĩa nó, bạn có thể sử dụng nó nhiều lần khi cần.

Để thực thi (hoặc "gọi") hàm của bạn, hãy viết tên của nó theo sau là dấu ngoặc đơn. JavaScript cho phép bạn định nghĩa hàm trước hoặc sau khi gọi nó – công cụ JavaScript sẽ xử lý thứ tự thực thi.

```javascript
// calling our function
displayGreeting();
```

Khi bạn chạy dòng này, nó sẽ thực thi tất cả mã bên trong hàm `displayGreeting` của bạn, hiển thị "Hello, world!" trong console của trình duyệt. Bạn có thể gọi hàm này nhiều lần.

> **Lưu ý:** Bạn đã sử dụng **phương thức** trong suốt các bài học này. `console.log()` là một phương thức – về cơ bản là một hàm thuộc về đối tượng `console`. Sự khác biệt chính là phương thức được gắn với đối tượng, trong khi hàm thì độc lập. Nhiều nhà phát triển sử dụng các thuật ngữ này thay thế cho nhau trong các cuộc trò chuyện thông thường.

### Thực hành tốt nhất khi viết hàm

Dưới đây là một vài mẹo để giúp bạn viết các hàm tốt:

- Đặt tên hàm rõ ràng, mô tả – bạn sẽ cảm ơn chính mình trong tương lai!
- Sử dụng **camelCasing** cho các tên nhiều từ (như `calculateTotal` thay vì `calculate_total`)
- Giữ mỗi hàm tập trung vào việc thực hiện một nhiệm vụ tốt

## Truyền thông tin vào một hàm

Hàm `displayGreeting` của chúng ta bị hạn chế – nó chỉ có thể hiển thị "Hello, world!" cho tất cả mọi người. Các tham số cho phép chúng ta làm cho hàm linh hoạt và hữu ích hơn.

**Tham số** hoạt động như các chỗ trống nơi bạn có thể chèn các giá trị khác nhau mỗi lần bạn sử dụng hàm. Bằng cách này, cùng một hàm có thể hoạt động với thông tin khác nhau trong mỗi lần gọi.

Bạn liệt kê các tham số bên trong dấu ngoặc đơn khi định nghĩa hàm, tách biệt các tham số bằng dấu phẩy:

```javascript
function name(param, param2, param3) {

}
```

Mỗi tham số hoạt động như một chỗ trống – khi ai đó gọi hàm của bạn, họ sẽ cung cấp các giá trị thực tế được chèn vào các vị trí này.

Hãy cập nhật hàm chào của chúng ta để chấp nhận tên của ai đó:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Lưu ý cách chúng ta sử dụng dấu backtick (`` ` ``) và `${}` để chèn tên trực tiếp vào thông điệp – đây được gọi là template literal, và nó là một cách rất tiện lợi để xây dựng chuỗi với các biến được trộn lẫn.

Bây giờ khi chúng ta gọi hàm, chúng ta có thể truyền vào bất kỳ tên nào:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript lấy chuỗi `'Christopher'`, gán nó cho tham số `name`, và tạo ra thông điệp cá nhân hóa "Hello, Christopher!"

## Giá trị mặc định

Điều gì sẽ xảy ra nếu chúng ta muốn làm cho một số tham số tùy chọn? Đó là lúc giá trị mặc định trở nên hữu ích!

Giả sử chúng ta muốn mọi người có thể tùy chỉnh từ chào hỏi, nhưng nếu họ không chỉ định, chúng ta sẽ chỉ sử dụng "Hello" làm giá trị dự phòng. Bạn có thể thiết lập giá trị mặc định bằng cách sử dụng dấu bằng, giống như khi thiết lập một biến:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Ở đây, `name` vẫn là bắt buộc, nhưng `salutation` có một giá trị dự phòng là `'Hello'` nếu không ai cung cấp một lời chào khác.

Bây giờ chúng ta có thể gọi hàm này theo hai cách khác nhau:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Trong lần gọi đầu tiên, JavaScript sử dụng giá trị mặc định "Hello" vì chúng ta không chỉ định lời chào. Trong lần gọi thứ hai, nó sử dụng "Hi" tùy chỉnh của chúng ta. Sự linh hoạt này làm cho các hàm thích ứng với các tình huống khác nhau.

## Giá trị trả về

Các hàm của chúng ta cho đến nay chỉ in thông điệp ra console, nhưng điều gì sẽ xảy ra nếu bạn muốn một hàm tính toán điều gì đó và trả lại kết quả cho bạn?

Đó là lúc **giá trị trả về** xuất hiện. Thay vì chỉ hiển thị điều gì đó, một hàm có thể trả lại một giá trị mà bạn có thể lưu trữ trong một biến hoặc sử dụng ở các phần khác của mã.

Để gửi một giá trị trở lại, bạn sử dụng từ khóa `return` theo sau là bất cứ điều gì bạn muốn trả về:

```javascript
return myVariable;
```

Điều quan trọng cần lưu ý: khi một hàm gặp câu lệnh `return`, nó ngay lập tức dừng chạy và gửi giá trị đó trở lại cho người gọi.

Hãy sửa đổi hàm chào của chúng ta để trả về thông điệp thay vì in ra:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Bây giờ thay vì in thông điệp chào, hàm này tạo ra thông điệp và trả lại cho chúng ta.

Để sử dụng giá trị trả về, chúng ta có thể lưu nó trong một biến giống như bất kỳ giá trị nào khác:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Bây giờ `greetingMessage` chứa "Hello, Christopher" và chúng ta có thể sử dụng nó ở bất cứ đâu trong mã của mình – để hiển thị trên trang web, bao gồm trong email, hoặc truyền nó cho một hàm khác.

## Hàm như tham số cho hàm khác

Hàm có thể được truyền làm tham số cho các hàm khác. Mặc dù khái niệm này ban đầu có vẻ phức tạp, nhưng nó là một tính năng mạnh mẽ cho phép các mẫu lập trình linh hoạt.

Mẫu này rất phổ biến khi bạn muốn nói "khi điều gì đó xảy ra, hãy làm điều này khác." Ví dụ, "khi bộ đếm thời gian kết thúc, chạy đoạn mã này" hoặc "khi người dùng nhấp vào nút, gọi hàm này."

Hãy xem `setTimeout`, một hàm tích hợp sẵn chờ một khoảng thời gian nhất định và sau đó chạy một đoạn mã. Chúng ta cần nói cho nó biết đoạn mã nào để chạy – trường hợp sử dụng hoàn hảo cho việc truyền một hàm!

Hãy thử đoạn mã này – sau 3 giây, bạn sẽ thấy một thông điệp:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Lưu ý cách chúng ta truyền `displayDone` (không có dấu ngoặc đơn) cho `setTimeout`. Chúng ta không tự gọi hàm – chúng ta đang giao nó cho `setTimeout` và nói "gọi hàm này sau 3 giây."

### Hàm ẩn danh

Đôi khi bạn cần một hàm chỉ cho một việc và không muốn đặt tên cho nó. Hãy nghĩ về điều này – nếu bạn chỉ sử dụng một hàm một lần, tại sao lại làm rối mã của bạn với một cái tên thừa?

JavaScript cho phép bạn tạo **hàm ẩn danh** – các hàm không có tên mà bạn có thể định nghĩa ngay tại nơi bạn cần.

Dưới đây là cách chúng ta có thể viết lại ví dụ bộ đếm thời gian của mình bằng một hàm ẩn danh:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Điều này đạt được cùng kết quả, nhưng hàm được định nghĩa trực tiếp trong lệnh gọi `setTimeout`, loại bỏ nhu cầu khai báo hàm riêng biệt.

### Hàm mũi tên

JavaScript hiện đại có một cách viết hàm ngắn gọn hơn gọi là **hàm mũi tên**. Chúng sử dụng `=>` (trông giống như một mũi tên – hiểu chứ?) và rất phổ biến với các nhà phát triển.

Hàm mũi tên cho phép bạn bỏ qua từ khóa `function` và viết mã ngắn gọn hơn.

Dưới đây là ví dụ bộ đếm thời gian của chúng ta sử dụng hàm mũi tên:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

Dấu `()` là nơi các tham số sẽ điền vào (trống trong trường hợp này), sau đó là mũi tên `=>`, và cuối cùng là phần thân hàm trong dấu ngoặc nhọn. Điều này cung cấp cùng chức năng với cú pháp ngắn gọn hơn.

### Khi nào sử dụng từng chiến lược

Khi nào bạn nên sử dụng từng cách tiếp cận? Một hướng dẫn thực tế: nếu bạn sẽ sử dụng hàm nhiều lần, hãy đặt tên và định nghĩa nó riêng biệt. Nếu nó chỉ dành cho một mục đích cụ thể, hãy cân nhắc sử dụng hàm ẩn danh. Cả hàm mũi tên và cú pháp truyền thống đều là lựa chọn hợp lệ, mặc dù hàm mũi tên rất phổ biến trong các mã JavaScript hiện đại.

---



## 🚀 Thử thách

Bạn có thể diễn đạt trong một câu sự khác biệt giữa hàm và phương thức không? Hãy thử nhé!

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Tạo một thư viện tiện ích toán học thể hiện các khái niệm hàm khác nhau được đề cập trong bài học này, bao gồm tham số, giá trị mặc định, giá trị trả về, và hàm mũi tên.

**Yêu cầu:** Tạo một tệp JavaScript có tên `mathUtils.js` chứa các hàm sau:
1. Một hàm `add` nhận hai tham số và trả về tổng của chúng
2. Một hàm `multiply` với giá trị tham số mặc định (tham số thứ hai mặc định là 1)
3. Một hàm mũi tên `square` nhận một số và trả về bình phương của nó
4. Một hàm `calculate` chấp nhận một hàm khác làm tham số và hai số, sau đó áp dụng hàm đó cho các số
5. Minh họa việc gọi từng hàm với các trường hợp kiểm tra phù hợp

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## Quiz sau bài giảng
[Quiz sau bài giảng](https://ff-quizzes.netlify.app)

## Ôn tập & Tự học

Đáng để [đọc thêm một chút về hàm mũi tên](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), vì chúng ngày càng được sử dụng trong các mã nguồn. Hãy thực hành viết một hàm, và sau đó viết lại nó với cú pháp này.

## Bài tập

[Fun with Functions](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính xác nhất. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.