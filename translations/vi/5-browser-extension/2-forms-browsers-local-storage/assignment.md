<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-24T13:54:17+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "vi"
}
-->
# Áp dụng một API

## Tổng quan

API mở ra vô số khả năng cho việc phát triển web sáng tạo! Trong bài tập này, bạn sẽ chọn một API bên ngoài và xây dựng một tiện ích mở rộng trình duyệt để giải quyết một vấn đề thực tế hoặc cung cấp chức năng hữu ích cho người dùng.

## Hướng dẫn

### Bước 1: Chọn API của bạn
Chọn một API từ [danh sách các API công cộng miễn phí](https://github.com/public-apis/public-apis) đã được chọn lọc. Hãy xem xét các danh mục sau:

**Các tùy chọn phổ biến cho người mới bắt đầu:**
- **Giải trí**: [Dog CEO API](https://dog.ceo/dog-api/) để lấy hình ảnh ngẫu nhiên của chó
- **Thời tiết**: [OpenWeatherMap](https://openweathermap.org/api) để lấy dữ liệu thời tiết hiện tại
- **Trích dẫn**: [Quotable API](https://quotable.io/) để lấy các câu trích dẫn truyền cảm hứng
- **Tin tức**: [NewsAPI](https://newsapi.org/) để lấy các tiêu đề tin tức hiện tại
- **Sự thật thú vị**: [Numbers API](http://numbersapi.com/) để lấy các sự thật thú vị về số

### Bước 2: Lên kế hoạch cho tiện ích mở rộng của bạn
Trước khi bắt đầu viết mã, hãy trả lời các câu hỏi lập kế hoạch sau:
- Tiện ích mở rộng của bạn giải quyết vấn đề gì?
- Ai là người dùng mục tiêu của bạn?
- Dữ liệu nào sẽ được lưu trữ trong bộ nhớ cục bộ?
- Bạn sẽ xử lý lỗi API hoặc giới hạn tần suất như thế nào?

### Bước 3: Xây dựng tiện ích mở rộng của bạn
Tiện ích mở rộng của bạn nên bao gồm:

**Các tính năng bắt buộc:**
- Các trường nhập liệu cho bất kỳ tham số API cần thiết nào
- Tích hợp API với xử lý lỗi đúng cách
- Bộ nhớ cục bộ để lưu trữ tùy chọn của người dùng hoặc khóa API
- Giao diện người dùng sạch sẽ, đáp ứng
- Trạng thái tải và phản hồi cho người dùng

**Yêu cầu về mã:**
- Sử dụng các tính năng JavaScript hiện đại (ES6+)
- Triển khai async/await cho các cuộc gọi API
- Bao gồm xử lý lỗi đúng cách với các khối try/catch
- Thêm các bình luận có ý nghĩa giải thích mã của bạn
- Tuân thủ định dạng mã nhất quán

### Bước 4: Kiểm tra và hoàn thiện
- Kiểm tra tiện ích mở rộng của bạn với các đầu vào khác nhau
- Xử lý các trường hợp ngoại lệ (không có internet, phản hồi API không hợp lệ)
- Đảm bảo tiện ích mở rộng của bạn hoạt động sau khi khởi động lại trình duyệt
- Thêm các thông báo lỗi thân thiện với người dùng

## Thử thách bổ sung

Nâng cấp tiện ích mở rộng của bạn lên một cấp độ mới:
- Thêm nhiều điểm cuối API để tăng cường chức năng
- Triển khai bộ nhớ đệm dữ liệu để giảm số lần gọi API
- Tạo phím tắt cho các hành động thường xuyên
- Thêm tính năng xuất/nhập dữ liệu
- Triển khai các tùy chọn tùy chỉnh cho người dùng

## Yêu cầu nộp bài

1. **Tiện ích mở rộng trình duyệt hoạt động** tích hợp thành công với API bạn đã chọn
2. **Tệp README** giải thích:
   - API bạn đã chọn và lý do
   - Cách cài đặt và sử dụng tiện ích mở rộng của bạn
   - Bất kỳ khóa API hoặc thiết lập nào cần thiết
   - Ảnh chụp màn hình tiện ích mở rộng của bạn đang hoạt động
3. **Mã sạch sẽ, có bình luận** tuân theo các thực hành JavaScript hiện đại

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (90-100%) | Đạt yêu cầu (80-89%) | Đang phát triển (70-79%) | Bắt đầu (60-69%) |
|----------|--------------------|----------------------|--------------------------|------------------|
| **Tích hợp API** | Tích hợp API hoàn hảo với xử lý lỗi toàn diện và quản lý các trường hợp ngoại lệ | Tích hợp API thành công với xử lý lỗi cơ bản | API hoạt động nhưng xử lý lỗi còn hạn chế | Tích hợp API có nhiều vấn đề |
| **Chất lượng mã** | Mã sạch sẽ, có bình luận rõ ràng, tuân theo các thực hành tốt nhất của JavaScript hiện đại | Cấu trúc mã tốt với bình luận đầy đủ | Mã hoạt động nhưng cần tổ chức tốt hơn | Chất lượng mã kém với ít bình luận |
| **Trải nghiệm người dùng** | Giao diện được hoàn thiện với trạng thái tải và phản hồi người dùng xuất sắc | Giao diện tốt với phản hồi cơ bản cho người dùng | Giao diện cơ bản hoạt động đủ tốt | Trải nghiệm người dùng kém với giao diện khó hiểu |
| **Bộ nhớ cục bộ** | Sử dụng bộ nhớ cục bộ tinh vi với xác thực và quản lý dữ liệu | Triển khai bộ nhớ cục bộ đúng cách cho các tính năng chính | Triển khai bộ nhớ cục bộ cơ bản | Sử dụng bộ nhớ cục bộ tối thiểu hoặc không đúng |
| **Tài liệu** | README toàn diện với hướng dẫn thiết lập và ảnh chụp màn hình | Tài liệu tốt bao gồm hầu hết các yêu cầu | Tài liệu cơ bản thiếu một số chi tiết | Tài liệu kém hoặc thiếu |

## Mẹo bắt đầu

1. **Bắt đầu đơn giản**: Chọn một API không yêu cầu xác thực phức tạp
2. **Đọc tài liệu**: Hiểu rõ các điểm cuối và phản hồi của API bạn đã chọn
3. **Lên kế hoạch giao diện**: Phác thảo giao diện tiện ích mở rộng của bạn trước khi viết mã
4. **Kiểm tra thường xuyên**: Xây dựng từng bước và kiểm tra từng tính năng khi bạn thêm vào
5. **Xử lý lỗi**: Luôn giả định rằng các cuộc gọi API có thể thất bại và lập kế hoạch phù hợp

## Tài nguyên

- [Tài liệu về tiện ích mở rộng trình duyệt](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Hướng dẫn Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Hướng dẫn về bộ nhớ cục bộ](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Phân tích và xử lý JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Chúc bạn vui vẻ khi xây dựng một thứ gì đó hữu ích và sáng tạo! 🚀

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.