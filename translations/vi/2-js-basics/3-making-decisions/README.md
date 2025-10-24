<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T13:28:43+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "vi"
}
-->
# Cơ bản về JavaScript: Ra quyết định

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.vi.png)

> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

Bạn đã bao giờ tự hỏi làm thế nào các ứng dụng có thể đưa ra quyết định thông minh chưa? Như cách một hệ thống định vị chọn tuyến đường nhanh nhất, hoặc cách một bộ điều chỉnh nhiệt quyết định khi nào bật máy sưởi? Đây là khái niệm cơ bản về việc ra quyết định trong lập trình.

Cũng giống như Máy phân tích của Charles Babbage được thiết kế để thực hiện các chuỗi hoạt động khác nhau dựa trên các điều kiện, các chương trình JavaScript hiện đại cần đưa ra lựa chọn dựa trên các hoàn cảnh khác nhau. Khả năng phân nhánh và đưa ra quyết định này là điều biến mã tĩnh thành các ứng dụng phản hồi và thông minh.

Trong bài học này, bạn sẽ học cách triển khai logic điều kiện trong các chương trình của mình. Chúng ta sẽ khám phá các câu lệnh điều kiện, các toán tử so sánh và các biểu thức logic cho phép mã của bạn đánh giá tình huống và phản hồi một cách phù hợp.

## Câu hỏi trước bài giảng

[Quiz trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/11)

Khả năng đưa ra quyết định và kiểm soát luồng chương trình là một khía cạnh cơ bản của lập trình. Phần này sẽ hướng dẫn bạn cách kiểm soát đường dẫn thực thi của các chương trình JavaScript bằng cách sử dụng giá trị Boolean và logic điều kiện.

[![Ra quyết định](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Ra quyết định")

> 🎥 Nhấp vào hình ảnh trên để xem video về việc ra quyết định.

> Bạn có thể học bài này trên [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Tóm tắt ngắn về Booleans

Trước khi khám phá việc ra quyết định, hãy cùng ôn lại giá trị Boolean từ bài học trước. Được đặt tên theo nhà toán học George Boole, các giá trị này đại diện cho trạng thái nhị phân – hoặc `true` hoặc `false`. Không có sự mơ hồ, không có trạng thái trung gian.

Những giá trị nhị phân này là nền tảng của tất cả logic tính toán. Mọi quyết định mà chương trình của bạn đưa ra cuối cùng đều giảm xuống thành một đánh giá Boolean.

Việc tạo các biến Boolean rất đơn giản:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Điều này tạo ra hai biến với các giá trị Boolean rõ ràng.

✅ Booleans được đặt tên theo nhà toán học, triết gia và nhà logic học người Anh George Boole (1815–1864).

## Toán tử so sánh và Booleans

Trong thực tế, bạn hiếm khi đặt giá trị Boolean một cách thủ công. Thay vào đó, bạn sẽ tạo ra chúng bằng cách đánh giá các điều kiện: "Số này có lớn hơn số kia không?" hoặc "Các giá trị này có bằng nhau không?"

Các toán tử so sánh cho phép thực hiện các đánh giá này. Chúng so sánh các giá trị và trả về kết quả Boolean dựa trên mối quan hệ giữa các toán hạng.

| Ký hiệu | Mô tả                                                                                                                                                   | Ví dụ              |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Nhỏ hơn**: So sánh hai giá trị và trả về kiểu dữ liệu Boolean `true` nếu giá trị ở bên trái nhỏ hơn giá trị ở bên phải                                 | `5 < 6 // true`    |
| `<=`   | **Nhỏ hơn hoặc bằng**: So sánh hai giá trị và trả về kiểu dữ liệu Boolean `true` nếu giá trị ở bên trái nhỏ hơn hoặc bằng giá trị ở bên phải              | `5 <= 6 // true`   |
| `>`    | **Lớn hơn**: So sánh hai giá trị và trả về kiểu dữ liệu Boolean `true` nếu giá trị ở bên trái lớn hơn giá trị ở bên phải                                 | `5 > 6 // false`   |
| `>=`   | **Lớn hơn hoặc bằng**: So sánh hai giá trị và trả về kiểu dữ liệu Boolean `true` nếu giá trị ở bên trái lớn hơn hoặc bằng giá trị ở bên phải             | `5 >= 6 // false`  |
| `===`  | **Bằng nghiêm ngặt**: So sánh hai giá trị và trả về kiểu dữ liệu Boolean `true` nếu các giá trị ở bên phải và bên trái bằng nhau VÀ cùng kiểu dữ liệu.   | `5 === 6 // false` |
| `!==`  | **Không bằng**: So sánh hai giá trị và trả về giá trị Boolean ngược lại với kết quả mà toán tử bằng nghiêm ngặt sẽ trả về                                | `5 !== 6 // true`  |

✅ Kiểm tra kiến thức của bạn bằng cách viết một số so sánh trong bảng điều khiển của trình duyệt. Có dữ liệu nào trả về khiến bạn ngạc nhiên không?

## Câu lệnh If

Câu lệnh `if` giống như việc đặt câu hỏi trong mã của bạn. "Nếu điều kiện này đúng, thì làm điều này." Đây có lẽ là công cụ quan trọng nhất bạn sẽ sử dụng để đưa ra quyết định trong JavaScript.

Cách hoạt động như sau:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Điều kiện được đặt trong dấu ngoặc đơn, và nếu nó là `true`, JavaScript sẽ chạy mã bên trong dấu ngoặc nhọn. Nếu nó là `false`, JavaScript sẽ bỏ qua toàn bộ khối đó.

Bạn thường sử dụng các toán tử so sánh để tạo ra các điều kiện này. Hãy xem một ví dụ thực tế:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Vì `1000 >= 800` được đánh giá là `true`, mã bên trong khối sẽ được thực thi, hiển thị "Mua một chiếc laptop mới!" trong bảng điều khiển.

## Câu lệnh If..Else

Nhưng nếu bạn muốn chương trình của mình làm điều gì đó khác khi điều kiện là false thì sao? Đó là lúc `else` xuất hiện – giống như có một kế hoạch dự phòng.

Câu lệnh `else` cho bạn cách nói "nếu điều kiện này không đúng, hãy làm điều khác thay thế."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Bây giờ vì `500 >= 800` là `false`, JavaScript sẽ bỏ qua khối đầu tiên và chạy khối `else` thay thế. Bạn sẽ thấy "Chưa đủ tiền mua laptop mới!" trong bảng điều khiển.

✅ Kiểm tra sự hiểu biết của bạn về mã này và mã sau bằng cách chạy nó trong bảng điều khiển trình duyệt. Thay đổi giá trị của các biến currentMoney và laptopPrice để thay đổi kết quả `console.log()`.

## Câu lệnh Switch

Đôi khi bạn cần so sánh một giá trị với nhiều tùy chọn. Mặc dù bạn có thể nối chuỗi nhiều câu lệnh `if..else`, cách tiếp cận này trở nên khó quản lý. Câu lệnh `switch` cung cấp một cấu trúc gọn gàng hơn để xử lý nhiều giá trị riêng biệt.

Khái niệm này giống như các hệ thống chuyển mạch cơ học được sử dụng trong các tổng đài điện thoại thời kỳ đầu – một giá trị đầu vào xác định đường dẫn cụ thể mà chương trình sẽ thực hiện.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Cách cấu trúc như sau:
- JavaScript đánh giá biểu thức một lần
- Nó tìm qua từng `case` để tìm một kết quả khớp
- Khi tìm thấy kết quả khớp, nó chạy khối mã đó
- Lệnh `break` yêu cầu JavaScript dừng và thoát khỏi switch
- Nếu không có case nào khớp, nó chạy khối `default` (nếu bạn có)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Trong ví dụ này, JavaScript thấy rằng `dayNumber` là `2`, tìm thấy `case 2` khớp, đặt `dayName` thành "Thứ Ba", và sau đó thoát khỏi switch. Kết quả? "Hôm nay là Thứ Ba" được ghi vào bảng điều khiển.

✅ Kiểm tra sự hiểu biết của bạn về mã này và mã sau bằng cách chạy nó trong bảng điều khiển trình duyệt. Thay đổi giá trị của biến a để thay đổi kết quả `console.log()`.

## Toán tử logic và Booleans

Các quyết định phức tạp thường yêu cầu đánh giá nhiều điều kiện cùng lúc. Cũng giống như đại số Boolean cho phép các nhà toán học kết hợp các biểu thức logic, lập trình cung cấp các toán tử logic để kết nối nhiều điều kiện Boolean.

Các toán tử này cho phép logic điều kiện phức tạp bằng cách kết hợp các đánh giá true/false đơn giản.

| Ký hiệu | Mô tả                                                                                     | Ví dụ                                                                 |
| ------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `&&`   | **Logic AND**: So sánh hai biểu thức Boolean. Trả về true **chỉ khi** cả hai bên đều đúng | `(5 > 3) && (5 < 10) // Cả hai bên đều đúng. Trả về true` |
| `\|\|` | **Logic OR**: So sánh hai biểu thức Boolean. Trả về true nếu ít nhất một bên đúng         | `(5 > 10) \|\| (5 < 10) // Một bên sai, bên kia đúng. Trả về true` |
| `!`    | **Logic NOT**: Trả về giá trị ngược lại của một biểu thức Boolean                         | `!(5 > 10) // 5 không lớn hơn 10, nên "!" làm cho nó đúng`         |

Các toán tử này cho phép bạn kết hợp các điều kiện theo cách hữu ích:
- AND (`&&`) nghĩa là cả hai điều kiện phải đúng
- OR (`||`) nghĩa là ít nhất một điều kiện phải đúng  
- NOT (`!`) đảo ngược true thành false (và ngược lại)

## Điều kiện và quyết định với toán tử logic

Hãy xem các toán tử logic này hoạt động trong một ví dụ thực tế hơn:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Trong ví dụ này: chúng ta tính giá giảm 20% (640), sau đó đánh giá liệu số tiền hiện có có đủ để mua giá đầy đủ HOẶC giá giảm. Vì 600 đáp ứng ngưỡng giá giảm 640, điều kiện được đánh giá là đúng.

### Toán tử phủ định

Đôi khi dễ dàng hơn để nghĩ về khi điều gì đó KHÔNG đúng. Như thay vì hỏi "Người dùng đã đăng nhập chưa?", bạn có thể muốn hỏi "Người dùng CHƯA đăng nhập?" Dấu chấm than (`!`) sẽ đảo ngược logic cho bạn.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Toán tử `!` giống như nói "ngược lại với..." – nếu điều gì đó là `true`, `!` làm cho nó thành `false`, và ngược lại.

### Biểu thức Ternary

Đối với các phép gán điều kiện đơn giản, JavaScript cung cấp **toán tử ternary**. Cú pháp ngắn gọn này cho phép bạn viết một biểu thức điều kiện trong một dòng, hữu ích khi bạn cần gán một trong hai giá trị dựa trên một điều kiện.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Nó đọc như một câu hỏi: "Điều kiện này đúng không? Nếu đúng, sử dụng giá trị này. Nếu không, sử dụng giá trị kia."

Dưới đây là một ví dụ cụ thể hơn:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Dành một phút để đọc mã này vài lần. Bạn có hiểu cách các toán tử này hoạt động không?

Dòng này đang nói: "Số `firstNumber` có lớn hơn số `secondNumber` không? Nếu đúng, đặt `firstNumber` vào `biggestNumber`. Nếu không, đặt `secondNumber` vào `biggestNumber`."

Toán tử ternary chỉ là cách viết ngắn gọn hơn của câu lệnh `if..else` truyền thống:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Cả hai cách đều cho ra kết quả giống nhau. Toán tử ternary mang lại sự ngắn gọn, trong khi cấu trúc if-else truyền thống có thể dễ đọc hơn đối với các điều kiện phức tạp.

---



## 🚀 Thử thách

Tạo một chương trình được viết trước tiên với các toán tử logic, sau đó viết lại nó bằng biểu thức ternary. Bạn thích cú pháp nào hơn?

---

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Tạo một máy tính điểm tổng hợp thể hiện nhiều khái niệm ra quyết định từ bài học này, bao gồm câu lệnh if-else, câu lệnh switch, toán tử logic và biểu thức ternary.

**Yêu cầu:** Viết một chương trình JavaScript nhận điểm số của học sinh (0-100) và xác định điểm chữ của họ theo tiêu chí sau:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Dưới 60

Yêu cầu:
1. Sử dụng câu lệnh if-else để xác định điểm chữ
2. Sử dụng toán tử logic để kiểm tra xem học sinh có đạt (điểm >= 60) VÀ có danh dự (điểm >= 90)
3. Sử dụng câu lệnh switch để cung cấp phản hồi cụ thể cho từng điểm chữ
4. Sử dụng toán tử ternary để xác định xem học sinh có đủ điều kiện cho khóa học tiếp theo (điểm >= 70)
5. Bao gồm kiểm tra đầu vào để đảm bảo điểm số nằm trong khoảng từ 0 đến 100

Kiểm tra chương trình của bạn với các điểm số khác nhau bao gồm các trường hợp biên như 59, 60, 89, 90 và các đầu vào không hợp lệ.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.


## Câu hỏi sau bài giảng

[Quiz sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/12)

## Ôn tập & Tự học

Đọc thêm về nhiều toán tử có sẵn cho người dùng [trên MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Xem qua công cụ tra cứu toán tử tuyệt vời của Josh Comeau [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Bài tập

[Toán tử](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.