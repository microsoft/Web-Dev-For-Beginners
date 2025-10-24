<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T13:27:58+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "vi"
}
-->
# Vui với Hàm

## Hướng dẫn

Trong bài tập này, bạn sẽ thực hành tạo các loại hàm khác nhau để củng cố các khái niệm bạn đã học về hàm JavaScript, tham số, giá trị mặc định và câu lệnh trả về.

Tạo một tệp JavaScript có tên `functions-practice.js` và triển khai các hàm sau:

### Phần 1: Các hàm cơ bản
1. **Tạo một hàm có tên `sayHello`** không nhận bất kỳ tham số nào và chỉ đơn giản ghi "Hello!" ra console.

2. **Tạo một hàm có tên `introduceYourself`** nhận tham số `name` và ghi một thông báo như "Hi, my name is [name]" ra console.

### Phần 2: Hàm với tham số mặc định
3. **Tạo một hàm có tên `greetPerson`** nhận hai tham số: `name` (bắt buộc) và `greeting` (tùy chọn, mặc định là "Hello"). Hàm này sẽ ghi một thông báo như "[greeting], [name]!" ra console.

### Phần 3: Hàm trả về giá trị
4. **Tạo một hàm có tên `addNumbers`** nhận hai tham số (`num1` và `num2`) và trả về tổng của chúng.

5. **Tạo một hàm có tên `createFullName`** nhận tham số `firstName` và `lastName` và trả về tên đầy đủ dưới dạng một chuỗi duy nhất.

### Phần 4: Kết hợp tất cả
6. **Tạo một hàm có tên `calculateTip`** nhận hai tham số: `billAmount` (bắt buộc) và `tipPercentage` (tùy chọn, mặc định là 15). Hàm này sẽ tính toán và trả về số tiền tip.

### Phần 5: Kiểm tra các hàm của bạn
Thêm các lời gọi hàm để kiểm tra từng hàm của bạn và hiển thị kết quả bằng cách sử dụng `console.log()`.

**Ví dụ lời gọi kiểm tra:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc | Đạt yêu cầu | Cần cải thiện |
| -------- | --------- | ----------- | ------------- |
| **Tạo hàm** | Cả 6 hàm được triển khai đúng với cú pháp và quy ước đặt tên phù hợp | 4-5 hàm được triển khai đúng với một số lỗi cú pháp nhỏ | 3 hoặc ít hơn hàm được triển khai hoặc có lỗi cú pháp lớn |
| **Tham số & Giá trị mặc định** | Sử dụng đúng tham số bắt buộc, tham số tùy chọn và giá trị mặc định như đã chỉ định | Sử dụng tham số đúng nhưng có thể gặp vấn đề với giá trị mặc định | Triển khai tham số không đúng hoặc thiếu |
| **Giá trị trả về** | Các hàm cần trả về giá trị thì làm đúng, và các hàm không cần trả về giá trị chỉ thực hiện hành động | Hầu hết giá trị trả về đúng với một số lỗi nhỏ | Có vấn đề lớn với câu lệnh trả về |
| **Chất lượng mã** | Mã sạch, được tổ chức tốt với tên biến có ý nghĩa và thụt lề đúng cách | Mã hoạt động nhưng có thể sạch hơn hoặc tổ chức tốt hơn | Mã khó đọc hoặc cấu trúc kém |
| **Kiểm tra** | Tất cả các hàm được kiểm tra với các lời gọi hàm phù hợp và kết quả được hiển thị rõ ràng | Hầu hết các hàm được kiểm tra đầy đủ | Kiểm tra hàm hạn chế hoặc không chính xác |

## Thử thách bổ sung (Tùy chọn)

Nếu bạn muốn thử thách bản thân hơn nữa:

1. **Tạo phiên bản hàm mũi tên** của một trong các hàm của bạn
2. **Tạo một hàm nhận một hàm khác làm tham số** (như các ví dụ `setTimeout` từ bài học)
3. **Thêm kiểm tra đầu vào** để đảm bảo các hàm của bạn xử lý các đầu vào không hợp lệ một cách hợp lý

---

> 💡 **Mẹo**: Nhớ mở bảng điều khiển của trình duyệt (F12) để xem kết quả của các câu lệnh `console.log()` của bạn!

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.