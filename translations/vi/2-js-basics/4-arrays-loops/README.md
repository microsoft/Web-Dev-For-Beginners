<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f7f87871312cf6cc12662da7d973182",
  "translation_date": "2025-08-27T22:52:01+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "vi"
}
-->
# Cơ bản về JavaScript: Mảng và Vòng lặp

![JavaScript Basics - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Câu hỏi trước bài giảng
[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/13)

Bài học này giới thiệu những kiến thức cơ bản về JavaScript, ngôn ngữ mang lại tính tương tác cho web. Trong bài học này, bạn sẽ tìm hiểu về mảng và vòng lặp, những công cụ được sử dụng để xử lý dữ liệu.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Nhấn vào hình ảnh trên để xem video về mảng và vòng lặp.

> Bạn có thể học bài này trên [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Mảng

Làm việc với dữ liệu là một nhiệm vụ phổ biến trong bất kỳ ngôn ngữ nào, và nó trở nên dễ dàng hơn khi dữ liệu được tổ chức theo một cấu trúc, chẳng hạn như mảng. Với mảng, dữ liệu được lưu trữ trong một cấu trúc tương tự như danh sách. Một lợi ích lớn của mảng là bạn có thể lưu trữ các loại dữ liệu khác nhau trong một mảng.

✅ Mảng có mặt khắp nơi xung quanh chúng ta! Bạn có thể nghĩ đến một ví dụ thực tế về mảng, chẳng hạn như một mảng pin năng lượng mặt trời?

Cú pháp của mảng là một cặp dấu ngoặc vuông.

```javascript
let myArray = [];
```

Đây là một mảng rỗng, nhưng mảng có thể được khai báo với dữ liệu đã được điền sẵn. Các giá trị trong mảng được phân tách bằng dấu phẩy.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Các giá trị trong mảng được gán một giá trị duy nhất gọi là **chỉ số**, một số nguyên được gán dựa trên khoảng cách của nó từ đầu mảng. Trong ví dụ trên, giá trị chuỗi "Chocolate" có chỉ số là 0, và chỉ số của "Rocky Road" là 4. Sử dụng chỉ số với dấu ngoặc vuông để truy xuất, thay đổi hoặc chèn giá trị vào mảng.

✅ Có làm bạn ngạc nhiên không khi mảng bắt đầu từ chỉ số 0? Trong một số ngôn ngữ lập trình, chỉ số bắt đầu từ 1. Có một lịch sử thú vị về điều này, bạn có thể [đọc trên Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Bạn có thể tận dụng chỉ số để thay đổi giá trị, như sau:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

Và bạn có thể chèn một giá trị mới vào một chỉ số nhất định như sau:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Một cách phổ biến hơn để thêm giá trị vào mảng là sử dụng các toán tử mảng như array.push()

Để biết có bao nhiêu phần tử trong một mảng, sử dụng thuộc tính `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Tự thử nghiệm! Sử dụng bảng điều khiển của trình duyệt để tạo và xử lý một mảng do bạn tự tạo.

## Vòng lặp

Vòng lặp cho phép chúng ta thực hiện các nhiệm vụ lặp đi lặp lại hoặc **lặp lại**, và có thể tiết kiệm rất nhiều thời gian và mã lệnh. Mỗi lần lặp có thể thay đổi về biến, giá trị và điều kiện. Có nhiều loại vòng lặp khác nhau trong JavaScript, và chúng có những khác biệt nhỏ, nhưng về cơ bản đều làm cùng một việc: lặp qua dữ liệu.

### Vòng lặp For

Vòng lặp `for` yêu cầu 3 phần để lặp:
- `counter` Một biến thường được khởi tạo với một số để đếm số lần lặp
- `condition` Biểu thức sử dụng các toán tử so sánh để khiến vòng lặp dừng lại khi giá trị là `false`
- `iteration-expression` Chạy ở cuối mỗi lần lặp, thường được sử dụng để thay đổi giá trị của biến đếm
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Chạy đoạn mã này trong bảng điều khiển của trình duyệt. Điều gì xảy ra khi bạn thực hiện những thay đổi nhỏ đối với biến đếm, điều kiện, hoặc biểu thức lặp? Bạn có thể làm cho nó chạy ngược lại, tạo một đếm ngược không?

### Vòng lặp While

Không giống như cú pháp của vòng lặp `for`, vòng lặp `while` chỉ yêu cầu một điều kiện sẽ dừng vòng lặp khi điều kiện trở thành `false`. Các điều kiện trong vòng lặp thường dựa vào các giá trị khác như biến đếm, và phải được quản lý trong suốt vòng lặp. Giá trị khởi đầu cho biến đếm phải được tạo bên ngoài vòng lặp, và bất kỳ biểu thức nào để đáp ứng điều kiện, bao gồm việc thay đổi biến đếm, phải được duy trì bên trong vòng lặp.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Tại sao bạn lại chọn vòng lặp for thay vì vòng lặp while? 17K người xem đã có cùng câu hỏi trên StackOverflow, và một số ý kiến [có thể thú vị với bạn](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Vòng lặp và Mảng

Mảng thường được sử dụng với vòng lặp vì hầu hết các điều kiện yêu cầu độ dài của mảng để dừng vòng lặp, và chỉ số cũng có thể là giá trị của biến đếm.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Thử nghiệm với việc lặp qua một mảng do bạn tự tạo trong bảng điều khiển của trình duyệt. 

---

## 🚀 Thử thách

Có những cách khác để lặp qua mảng ngoài vòng lặp for và while. Có [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), và [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Viết lại vòng lặp mảng của bạn bằng một trong những kỹ thuật này.

## Câu hỏi sau bài giảng
[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/14)

## Ôn tập & Tự học

Mảng trong JavaScript có nhiều phương thức đi kèm, rất hữu ích cho việc xử lý dữ liệu. [Tìm hiểu về các phương thức này](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) và thử một số phương thức (như push, pop, slice và splice) trên một mảng do bạn tự tạo.

## Bài tập

[Lặp qua một Mảng](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.