# Tạo một trò chơi mẫu: Áp dụng các mẫu thiết kế

## Tổng quan bài tập

Hãy áp dụng kiến thức mới về các mẫu thiết kế bằng cách tạo một nguyên mẫu trò chơi đơn giản! Bài tập này sẽ giúp bạn thực hành cả các mẫu kiến trúc (kế thừa hoặc thành phần) và hệ thống giao tiếp pub/sub mà bạn đã học trong bài học.

## Hướng dẫn

Tạo một mô hình trò chơi đơn giản để minh họa các mẫu thiết kế từ bài học này. Trò chơi của bạn nên hoạt động nhưng không cần đồ họa phức tạp – tập trung vào kiến trúc cơ bản và các mẫu giao tiếp.

### Yêu cầu

**Chọn mẫu kiến trúc của bạn:**
- **Lựa chọn A**: Sử dụng kế thừa dựa trên lớp (như ví dụ `GameObject` → `Movable` → `Hero`)
- **Lựa chọn B**: Sử dụng thành phần (như cách tiếp cận hàm nhà máy với các hành vi kết hợp)

**Triển khai giao tiếp:**
- **Bao gồm** một lớp `EventEmitter` cho hệ thống nhắn tin pub/sub
- **Thiết lập** ít nhất 2-3 loại tin nhắn khác nhau (như `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Kết nối** đầu vào của người dùng (bàn phím/chuột) với các sự kiện trò chơi thông qua hệ thống sự kiện

**Các yếu tố trò chơi cần có:**
- Ít nhất một nhân vật do người chơi điều khiển
- Ít nhất một đối tượng trò chơi khác (kẻ thù, vật phẩm thu thập, hoặc yếu tố môi trường)
- Tương tác cơ bản giữa các đối tượng (va chạm, thu thập, hoặc giao tiếp)

### Ý tưởng trò chơi gợi ý

**Các trò chơi đơn giản để cân nhắc:**
- **Trò chơi Rắn** – Các đoạn rắn đi theo đầu, thức ăn xuất hiện ngẫu nhiên
- **Biến thể Pong** – Thanh điều khiển phản hồi đầu vào, bóng nảy khỏi tường
- **Trò chơi Thu thập** – Người chơi di chuyển xung quanh thu thập vật phẩm trong khi tránh chướng ngại vật
- **Cơ bản Phòng thủ Tháp** – Các tháp phát hiện và bắn vào kẻ thù di chuyển

### Hướng dẫn cấu trúc mã

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Kiểm tra triển khai của bạn

**Xác minh mã của bạn hoạt động bằng cách:**
- **Kiểm tra** rằng các đối tượng di chuyển hoặc thay đổi khi các sự kiện được kích hoạt
- **Xác nhận** rằng nhiều đối tượng có thể phản hồi cùng một sự kiện
- **Kiểm tra** rằng bạn có thể thêm các hành vi mới mà không cần sửa đổi mã hiện có
- **Đảm bảo** đầu vào từ bàn phím/chuột kích hoạt đúng các sự kiện trò chơi

## Hướng dẫn nộp bài

**Bài nộp của bạn nên bao gồm:**
1. **Tệp JavaScript** với triển khai trò chơi của bạn
2. **Tệp HTML** để chạy và kiểm tra trò chơi của bạn (có thể đơn giản)
3. **Các bình luận** giải thích mẫu bạn đã chọn và lý do
4. **Tài liệu ngắn gọn** về các loại tin nhắn và chức năng của chúng

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (3 điểm) | Đạt yêu cầu (2 điểm) | Cần cải thiện (1 điểm) |
|----------|-------------------|---------------------|-------------------------|
| **Mẫu kiến trúc** | Triển khai đúng kế thừa HOẶC thành phần với hệ thống lớp/đối tượng rõ ràng | Sử dụng mẫu đã chọn với một số vấn đề hoặc không nhất quán | Cố gắng sử dụng mẫu nhưng triển khai có nhiều vấn đề lớn |
| **Triển khai Pub/Sub** | EventEmitter hoạt động đúng với nhiều loại tin nhắn và luồng sự kiện hợp lý | Hệ thống pub/sub cơ bản hoạt động với một số xử lý sự kiện | Hệ thống sự kiện có nhưng không hoạt động ổn định |
| **Chức năng trò chơi** | Ba hoặc nhiều yếu tố tương tác giao tiếp thông qua sự kiện | Hai yếu tố tương tác với giao tiếp sự kiện cơ bản | Một yếu tố phản hồi sự kiện hoặc tương tác cơ bản |
| **Chất lượng mã** | Mã sạch, được chú thích rõ ràng với tổ chức logic và JavaScript hiện đại | Mã được tổ chức khá tốt với chú thích đầy đủ | Mã hoạt động nhưng thiếu tổ chức hoặc chú thích rõ ràng |

**Điểm thưởng:**
- **Cơ chế trò chơi sáng tạo** thể hiện cách sử dụng thú vị các mẫu thiết kế
- **Nhiều phương pháp đầu vào** (sự kiện bàn phím VÀ chuột)
- **Kiến trúc có thể mở rộng** dễ dàng thêm các tính năng mới

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.