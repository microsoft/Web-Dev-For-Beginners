<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T13:46:35+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "vi"
}
-->
# Cải thiện hệ thống định tuyến

## Hướng dẫn

Bây giờ bạn đã xây dựng một hệ thống định tuyến cơ bản, đã đến lúc nâng cấp nó với các tính năng chuyên nghiệp để cải thiện trải nghiệm người dùng và cung cấp công cụ tốt hơn cho nhà phát triển. Các ứng dụng thực tế cần nhiều hơn việc chỉ chuyển đổi mẫu \u2013 chúng cần tiêu đề trang động, các hook vòng đời, và kiến trúc có thể mở rộng.

Trong bài tập này, bạn sẽ mở rộng việc triển khai định tuyến của mình với hai tính năng thiết yếu thường thấy trong các ứng dụng web sản xuất. Những cải tiến này sẽ làm cho ứng dụng ngân hàng của bạn trở nên chuyên nghiệp hơn và tạo nền tảng cho các chức năng trong tương lai.

Hiện tại, khai báo các tuyến chỉ chứa ID mẫu để sử dụng. Nhưng khi hiển thị một trang mới, đôi khi cần thêm một chút thông tin. Hãy cải thiện việc triển khai định tuyến của chúng ta với hai tính năng bổ sung:

### Tính năng 1: Tiêu đề trang động
**Mục tiêu:** Đặt tiêu đề cho mỗi mẫu và cập nhật tiêu đề cửa sổ với tiêu đề mới này khi mẫu thay đổi.

**Tại sao điều này quan trọng:**
- **Cải thiện** trải nghiệm người dùng bằng cách hiển thị tiêu đề tab trình duyệt mô tả
- **Tăng cường** khả năng tiếp cận cho các công cụ đọc màn hình và công nghệ hỗ trợ  
- **Cung cấp** ngữ cảnh tốt hơn cho việc đánh dấu trang và lịch sử trình duyệt
- **Tuân theo** các thực hành tốt nhất trong phát triển web chuyên nghiệp

**Cách triển khai:**
- **Mở rộng** đối tượng routes để bao gồm thông tin tiêu đề cho mỗi tuyến
- **Sửa đổi** hàm `updateRoute()` để cập nhật `document.title` một cách động
- **Kiểm tra** rằng tiêu đề thay đổi chính xác khi điều hướng giữa các màn hình

### Tính năng 2: Hook vòng đời của tuyến  
**Mục tiêu:** Thêm tùy chọn để chạy một số mã sau khi mẫu thay đổi. Chúng ta muốn in `'Dashboard is shown'` trong bảng điều khiển dành cho nhà phát triển mỗi khi trang dashboard được hiển thị.

**Tại sao điều này quan trọng:**
- **Cho phép** thực thi logic tùy chỉnh khi các tuyến cụ thể được tải
- **Cung cấp** các hook cho phân tích, ghi nhật ký hoặc mã khởi tạo
- **Tạo** nền tảng cho các hành vi tuyến phức tạp hơn
- **Minh họa** mô hình observer trong phát triển web

**Cách triển khai:**
- **Thêm** thuộc tính hàm callback tùy chọn vào cấu hình tuyến
- **Thực thi** hàm callback (nếu có) sau khi hoàn tất việc render mẫu
- **Đảm bảo** tính năng hoạt động cho bất kỳ tuyến nào có callback được định nghĩa
- **Kiểm tra** rằng thông báo bảng điều khiển xuất hiện khi truy cập vào dashboard

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc                                                                                                                          | Đạt yêu cầu                                                                                                                                                                                  | Cần cải thiện                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Hai tính năng được triển khai và hoạt động. Tiêu đề và việc thêm mã cũng hoạt động cho một tuyến mới được thêm vào khai báo `routes`. | Hai tính năng hoạt động, nhưng hành vi được mã hóa cứng và không thể cấu hình thông qua khai báo `routes`. Việc thêm tuyến thứ ba với tiêu đề và mã bổ sung không hoạt động hoặc hoạt động một phần. | Một trong hai tính năng bị thiếu hoặc không hoạt động đúng. |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.