<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:15:27+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "vi"
}
-->
# Cải thiện định tuyến

## Hướng dẫn

Khai báo các tuyến hiện tại chỉ chứa ID mẫu để sử dụng. Nhưng khi hiển thị một trang mới, đôi khi cần thêm một chút thông tin. Hãy cải thiện việc triển khai định tuyến của chúng ta với hai tính năng bổ sung:

- Đặt tiêu đề cho mỗi mẫu và cập nhật tiêu đề cửa sổ với tiêu đề mới này khi mẫu thay đổi.
- Thêm tùy chọn để chạy một đoạn mã sau khi mẫu thay đổi. Chúng ta muốn in `'Dashboard is shown'` trong bảng điều khiển dành cho nhà phát triển mỗi khi trang bảng điều khiển được hiển thị.

## Tiêu chí đánh giá

| Tiêu chí  | Xuất sắc                                                                                                                          | Đạt yêu cầu                                                                                                                                                                               | Cần cải thiện                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|           | Hai tính năng được triển khai và hoạt động. Tiêu đề và việc thêm mã cũng hoạt động cho một tuyến mới được thêm vào trong khai báo `routes`. | Hai tính năng hoạt động, nhưng hành vi bị cố định và không thể cấu hình thông qua khai báo `routes`. Việc thêm một tuyến thứ ba với tiêu đề và việc thêm mã không hoạt động hoặc hoạt động một phần. | Một trong hai tính năng bị thiếu hoặc không hoạt động đúng cách. |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.