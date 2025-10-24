<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T13:29:05+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "vi"
}
-->
# Xử lý quyết định: Bộ xử lý điểm số học sinh

## Mục tiêu học tập

Trong bài tập này, bạn sẽ thực hành các khái niệm về xử lý quyết định từ bài học bằng cách xây dựng một chương trình xử lý điểm số học sinh từ các hệ thống chấm điểm khác nhau. Bạn sẽ sử dụng các câu lệnh `if...else`, các toán tử so sánh và toán tử logic để xác định học sinh nào đạt yêu cầu trong các khóa học của họ.

## Thử thách

Bạn làm việc cho một trường học vừa sáp nhập với một tổ chức khác. Bây giờ bạn cần xử lý điểm số học sinh từ hai hệ thống chấm điểm hoàn toàn khác nhau và xác định học sinh nào đạt yêu cầu. Đây là cơ hội tuyệt vời để thực hành logic điều kiện!

### Hiểu hệ thống chấm điểm

#### Hệ thống chấm điểm thứ nhất (Số)
- Điểm được cho dưới dạng số từ 1-5
- **Điểm đạt yêu cầu**: 3 trở lên (3, 4 hoặc 5)
- **Điểm không đạt yêu cầu**: Dưới 3 (1 hoặc 2)

#### Hệ thống chấm điểm thứ hai (Điểm chữ)
- Điểm sử dụng chữ: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Điểm đạt yêu cầu**: `A`, `A-`, `B`, `B-`, `C`, `C-` (tất cả các điểm liệt kê đều đạt yêu cầu)
- **Lưu ý**: Hệ thống này không bao gồm các điểm không đạt yêu cầu như `D` hoặc `F`

### Nhiệm vụ của bạn

Dựa vào mảng `allStudents` dưới đây, đại diện cho tất cả học sinh và điểm số của họ, hãy tạo một mảng mới `studentsWhoPass` chứa tất cả học sinh đạt yêu cầu theo hệ thống chấm điểm tương ứng.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Cách tiếp cận từng bước

1. **Thiết lập vòng lặp** để duyệt qua từng điểm số trong mảng `allStudents`
2. **Kiểm tra loại điểm số** (là số hay chuỗi?)
3. **Áp dụng quy tắc của hệ thống chấm điểm tương ứng**:
   - Đối với số: kiểm tra nếu điểm >= 3
   - Đối với chuỗi: kiểm tra nếu nó là một trong các điểm chữ đạt yêu cầu
4. **Thêm điểm đạt yêu cầu** vào mảng `studentsWhoPass`

### Kỹ thuật mã hóa hữu ích

Sử dụng các khái niệm JavaScript từ bài học:

- **Toán tử typeof**: `typeof grade === 'number'` để kiểm tra nếu đó là điểm số dạng số
- **Toán tử so sánh**: `>=` để so sánh điểm số dạng số
- **Toán tử logic**: `||` để kiểm tra nhiều điều kiện điểm chữ
- **Câu lệnh if...else**: để xử lý các hệ thống chấm điểm khác nhau
- **Phương thức mảng**: `.push()` để thêm điểm đạt yêu cầu vào mảng mới

### Kết quả mong đợi

Khi bạn chạy chương trình, `studentsWhoPass` sẽ chứa: `['A', 'B-', 4, 5]`

**Tại sao các điểm này đạt yêu cầu:**
- `'A'` và `'B-'` là các điểm chữ hợp lệ (tất cả điểm chữ trong hệ thống này đều đạt yêu cầu)
- `4` và `5` là các điểm số >= 3
- `1` và `2` không đạt yêu cầu vì chúng là điểm số < 3

## Kiểm tra giải pháp của bạn

Kiểm tra mã của bạn với các kịch bản khác nhau:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Thử thách bổ sung

Sau khi hoàn thành bài tập cơ bản, hãy thử các phần mở rộng sau:

1. **Thêm xác thực**: Kiểm tra các điểm không hợp lệ (như số âm hoặc chữ không hợp lệ)
2. **Tính toán thống kê**: Tính số lượng học sinh đạt yêu cầu so với không đạt yêu cầu
3. **Chuyển đổi điểm số**: Chuyển tất cả điểm sang một hệ thống số duy nhất (A=5, B=4, C=3, v.v.)

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (4) | Đạt yêu cầu (3) | Đang phát triển (2) | Bắt đầu (1) |
|----------|---------------|----------------|----------------|---------------|
| **Chức năng** | Chương trình xác định chính xác tất cả các điểm đạt yêu cầu từ cả hai hệ thống | Chương trình hoạt động với một số vấn đề nhỏ hoặc trường hợp đặc biệt | Chương trình hoạt động một phần nhưng có lỗi logic | Chương trình có lỗi nghiêm trọng hoặc không chạy |
| **Cấu trúc mã** | Mã sạch, tổ chức tốt với logic if...else hợp lý | Cấu trúc tốt với các câu lệnh điều kiện phù hợp | Cấu trúc chấp nhận được với một số vấn đề tổ chức | Cấu trúc kém, logic khó theo dõi |
| **Sử dụng các khái niệm** | Sử dụng hiệu quả các toán tử so sánh, toán tử logic và câu lệnh điều kiện | Sử dụng tốt các khái niệm bài học với một số thiếu sót nhỏ | Sử dụng một phần các khái niệm bài học nhưng thiếu các yếu tố chính | Sử dụng hạn chế các khái niệm bài học |
| **Giải quyết vấn đề** | Thể hiện sự hiểu rõ vấn đề và cách tiếp cận giải pháp hiệu quả | Cách tiếp cận giải quyết vấn đề tốt với logic vững chắc | Cách giải quyết vấn đề chấp nhận được nhưng có một số nhầm lẫn | Cách tiếp cận không rõ ràng, không thể hiện sự hiểu biết |

## Hướng dẫn nộp bài

1. **Kiểm tra mã của bạn** kỹ lưỡng với các ví dụ đã cung cấp
2. **Thêm chú thích** giải thích logic của bạn, đặc biệt là đối với các câu lệnh điều kiện
3. **Xác minh kết quả đầu ra** khớp với kết quả mong đợi: `['A', 'B-', 4, 5]`
4. **Xem xét các trường hợp đặc biệt** như mảng rỗng hoặc kiểu dữ liệu không mong muốn

> 💡 **Mẹo chuyên nghiệp**: Bắt đầu đơn giản! Hãy làm cho chức năng cơ bản hoạt động trước, sau đó thêm các tính năng phức tạp hơn. Hãy nhớ rằng, mục tiêu là thực hành logic xử lý quyết định với các công cụ bạn đã học trong bài học này.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.