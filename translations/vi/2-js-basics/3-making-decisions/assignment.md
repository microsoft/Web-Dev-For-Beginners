<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-27T22:49:07+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "vi"
}
-->
# Toán tử

## Hướng dẫn

Thử nghiệm với các toán tử. Dưới đây là gợi ý cho một chương trình bạn có thể thực hiện:

Bạn có một nhóm học sinh từ hai hệ thống chấm điểm khác nhau.

### Hệ thống chấm điểm thứ nhất

Một hệ thống chấm điểm được định nghĩa với thang điểm từ 1-5, trong đó từ 3 trở lên nghĩa là bạn đã qua môn.

### Hệ thống chấm điểm thứ hai

Hệ thống chấm điểm còn lại có các mức `A, A-, B, B-, C, C-`, trong đó `A` là điểm cao nhất và `C` là điểm thấp nhất để qua môn.

### Nhiệm vụ

Dựa trên mảng `allStudents` dưới đây, đại diện cho tất cả học sinh và điểm số của họ, hãy tạo một mảng mới `studentsWhoPass` chứa tất cả học sinh đã qua môn.

> TIP, sử dụng vòng lặp for, if...else và các toán tử so sánh:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Tiêu chí đánh giá

| Tiêu chí  | Xuất sắc                      | Đạt yêu cầu                   | Cần cải thiện                   |
| --------- | ----------------------------- | ----------------------------- | ------------------------------- |
|           | Trình bày giải pháp hoàn chỉnh | Trình bày giải pháp một phần  | Trình bày giải pháp có lỗi      |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.