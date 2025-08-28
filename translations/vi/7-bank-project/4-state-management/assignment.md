<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:12:05+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "vi"
}
-->
# Triển khai hộp thoại "Thêm giao dịch"

## Hướng dẫn

Ứng dụng ngân hàng của chúng ta vẫn còn thiếu một tính năng quan trọng: khả năng nhập các giao dịch mới. 
Sử dụng tất cả những gì bạn đã học trong bốn bài học trước, hãy triển khai hộp thoại "Thêm giao dịch":

- Thêm nút "Thêm giao dịch" vào trang bảng điều khiển
- Tạo một trang mới với mẫu HTML, hoặc sử dụng JavaScript để hiển thị/ẩn HTML của hộp thoại mà không rời khỏi trang bảng điều khiển (bạn có thể sử dụng thuộc tính [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) cho việc này, hoặc các lớp CSS)
- Đảm bảo xử lý [khả năng truy cập bằng bàn phím và trình đọc màn hình](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) cho hộp thoại
- Triển khai một biểu mẫu HTML để nhận dữ liệu đầu vào
- Tạo dữ liệu JSON từ dữ liệu biểu mẫu và gửi nó đến API
- Cập nhật trang bảng điều khiển với dữ liệu mới

Xem [các thông số kỹ thuật của API máy chủ](../api/README.md) để biết API nào bạn cần gọi và định dạng JSON được yêu cầu.

Dưới đây là một ví dụ kết quả sau khi hoàn thành bài tập:

![Ảnh chụp màn hình hiển thị ví dụ hộp thoại "Thêm giao dịch"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.vi.png)

## Tiêu chí đánh giá

| Tiêu chí  | Xuất sắc                                                                                         | Đạt yêu cầu                                                                                                            | Cần cải thiện                                |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|           | Việc thêm giao dịch được triển khai hoàn chỉnh theo tất cả các thực hành tốt nhất đã học trong bài. | Việc thêm giao dịch được triển khai nhưng không theo các thực hành tốt nhất đã học trong bài, hoặc chỉ hoạt động một phần. | Việc thêm giao dịch không hoạt động chút nào. |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.