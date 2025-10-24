<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "124efddbb65166cddb38075ad6dae324",
  "translation_date": "2025-10-24T13:51:57+00:00",
  "source_file": "6-space-game/4-collision-detection/assignment.md",
  "language_code": "vi"
}
-->
# Khám phá Va chạm

## Hướng dẫn

Áp dụng kiến thức về phát hiện va chạm của bạn bằng cách tạo một trò chơi mini tùy chỉnh thể hiện các loại tương tác giữa các đối tượng khác nhau. Bài tập này sẽ giúp bạn hiểu cơ chế va chạm thông qua việc triển khai sáng tạo và thử nghiệm.

### Yêu cầu dự án

**Tạo một trò chơi tương tác nhỏ với các đặc điểm sau:**
- **Nhiều đối tượng di chuyển** có thể được điều khiển bằng bàn phím hoặc chuột
- **Hệ thống phát hiện va chạm** sử dụng nguyên tắc giao nhau hình chữ nhật từ bài học
- **Phản hồi trực quan** khi xảy ra va chạm (phá hủy đối tượng, thay đổi màu sắc, hiệu ứng)
- **Quy tắc trò chơi** làm cho các va chạm trở nên ý nghĩa và hấp dẫn

### Gợi ý sáng tạo

**Hãy cân nhắc triển khai một trong các kịch bản sau:**
- **Trường thiên thạch**: Điều khiển một con tàu vượt qua các mảnh vỡ nguy hiểm trong không gian
- **Xe đụng**: Tạo một đấu trường va chạm dựa trên vật lý
- **Phòng thủ thiên thạch**: Bảo vệ Trái Đất khỏi các thiên thạch đang lao tới
- **Trò chơi thu thập**: Thu thập các vật phẩm trong khi tránh chướng ngại vật
- **Kiểm soát lãnh thổ**: Các đối tượng cạnh tranh để chiếm lĩnh không gian

### Triển khai kỹ thuật

**Giải pháp của bạn nên thể hiện:**
- Sử dụng đúng cách phát hiện va chạm dựa trên hình chữ nhật
- Lập trình dựa trên sự kiện để nhận đầu vào từ người dùng
- Quản lý vòng đời của đối tượng (tạo và phá hủy)
- Tổ chức mã sạch sẽ với cấu trúc lớp phù hợp

### Thử thách bổ sung

**Nâng cấp trò chơi của bạn với các tính năng bổ sung:**
- **Hiệu ứng hạt** khi xảy ra va chạm
- **Hiệu ứng âm thanh** cho các loại va chạm khác nhau
- **Hệ thống điểm số** dựa trên kết quả va chạm
- **Nhiều loại va chạm** với các hành vi khác nhau
- **Độ khó tăng dần** theo thời gian

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc | Đạt yêu cầu | Cần cải thiện |
|----------|-----------|-------------|---------------|
| **Phát hiện va chạm** | Triển khai chính xác phát hiện va chạm dựa trên hình chữ nhật với nhiều loại đối tượng và quy tắc tương tác phức tạp | Phát hiện va chạm cơ bản hoạt động chính xác với các tương tác đối tượng đơn giản | Phát hiện va chạm có vấn đề hoặc không hoạt động ổn định |
| **Chất lượng mã** | Mã sạch, được tổ chức tốt với cấu trúc lớp phù hợp, tên biến có ý nghĩa và chú thích đầy đủ | Mã hoạt động nhưng có thể được tổ chức hoặc chú thích tốt hơn | Mã khó hiểu hoặc được tổ chức kém |
| **Tương tác người dùng** | Điều khiển nhạy, trò chơi mượt mà, phản hồi trực quan rõ ràng và cơ chế hấp dẫn | Điều khiển cơ bản hoạt động với phản hồi đủ tốt | Điều khiển không nhạy hoặc gây nhầm lẫn |
| **Sáng tạo** | Ý tưởng độc đáo với các tính năng đặc biệt, hình ảnh đẹp và hành vi va chạm sáng tạo | Triển khai tiêu chuẩn với một số yếu tố sáng tạo | Chỉ có chức năng cơ bản, không có cải tiến sáng tạo |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.