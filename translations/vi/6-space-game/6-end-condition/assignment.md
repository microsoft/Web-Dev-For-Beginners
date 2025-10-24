<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-24T13:51:08+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "vi"
}
-->
# Xây dựng một trò chơi mẫu

## Tổng quan về bài tập

Bây giờ bạn đã thành thạo các điều kiện kết thúc trò chơi và chức năng khởi động lại trong trò chơi không gian của mình, đã đến lúc áp dụng những khái niệm này vào một trải nghiệm trò chơi hoàn toàn mới. Bạn sẽ thiết kế và xây dựng trò chơi của riêng mình, thể hiện các mẫu điều kiện kết thúc khác nhau và cơ chế khởi động lại.

Bài tập này thách thức bạn suy nghĩ sáng tạo về thiết kế trò chơi trong khi thực hành các kỹ năng kỹ thuật đã học. Bạn sẽ khám phá các kịch bản chiến thắng và thất bại khác nhau, triển khai sự tiến triển của người chơi và tạo ra trải nghiệm khởi động lại hấp dẫn.

## Yêu cầu dự án

### Các tính năng cốt lõi của trò chơi

Trò chơi của bạn phải bao gồm các yếu tố thiết yếu sau:

**Đa dạng điều kiện kết thúc**: Triển khai ít nhất hai cách khác nhau để trò chơi kết thúc:
- **Chiến thắng dựa trên điểm số**: Người chơi đạt được điểm mục tiêu hoặc thu thập các vật phẩm cụ thể
- **Thất bại dựa trên mạng sống**: Người chơi mất hết mạng sống hoặc điểm sức khỏe
- **Hoàn thành mục tiêu**: Đánh bại tất cả kẻ thù, thu thập các vật phẩm cụ thể hoặc đạt được các mục tiêu
- **Dựa trên thời gian**: Trò chơi kết thúc sau một khoảng thời gian nhất định hoặc khi đồng hồ đếm ngược về 0

**Chức năng khởi động lại**: 
- **Xóa trạng thái trò chơi**: Loại bỏ tất cả các đối tượng trò chơi trước đó và đặt lại các biến
- **Khởi tạo lại hệ thống**: Bắt đầu lại với các chỉ số người chơi, kẻ thù và mục tiêu mới
- **Điều khiển thân thiện với người dùng**: Cung cấp hướng dẫn rõ ràng để khởi động lại trò chơi

**Phản hồi từ người chơi**:
- **Thông báo chiến thắng**: Chúc mừng thành tích của người chơi với phản hồi tích cực
- **Thông báo thất bại**: Cung cấp thông điệp khích lệ để thúc đẩy chơi lại
- **Chỉ báo tiến trình**: Hiển thị điểm số hiện tại, mạng sống hoặc trạng thái mục tiêu

### Ý tưởng và cảm hứng cho trò chơi

Chọn một trong những ý tưởng trò chơi sau hoặc tự tạo ý tưởng của riêng bạn:

#### 1. Trò chơi phiêu lưu trên console
Tạo một trò chơi phiêu lưu dựa trên văn bản với cơ chế chiến đấu:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Các tính năng chính cần triển khai:**
- **Chiến đấu theo lượt** với các tùy chọn tấn công khác nhau
- **Điểm sức khỏe** cho cả người chơi và kẻ thù
- **Hệ thống kho đồ** để thu thập tiền xu hoặc vật phẩm
- **Nhiều loại kẻ thù** với độ khó khác nhau
- **Điều kiện chiến thắng** khi tất cả kẻ thù bị đánh bại

#### 2. Trò chơi thu thập
- **Mục tiêu**: Thu thập các vật phẩm cụ thể trong khi tránh chướng ngại vật
- **Điều kiện kết thúc**: Đạt số lượng thu thập mục tiêu hoặc mất hết mạng sống
- **Tiến trình**: Các vật phẩm trở nên khó thu thập hơn khi trò chơi tiếp tục

#### 3. Trò chơi giải đố
- **Mục tiêu**: Giải các câu đố ngày càng khó
- **Điều kiện kết thúc**: Hoàn thành tất cả các cấp độ hoặc hết lượt/thời gian
- **Khởi động lại**: Đặt lại về cấp độ đầu tiên với tiến trình được xóa

#### 4. Trò chơi phòng thủ
- **Mục tiêu**: Bảo vệ căn cứ của bạn khỏi các đợt tấn công của kẻ thù
- **Điều kiện kết thúc**: Sống sót qua tất cả các đợt (chiến thắng) hoặc căn cứ bị phá hủy (thất bại)
- **Tiến trình**: Các đợt tấn công của kẻ thù tăng độ khó và số lượng

## Hướng dẫn triển khai

### Bắt đầu

1. **Lập kế hoạch thiết kế trò chơi của bạn**:
   - Phác thảo vòng lặp chơi cơ bản
   - Xác định rõ ràng các điều kiện kết thúc
   - Xác định dữ liệu nào cần được đặt lại khi khởi động lại

2. **Thiết lập cấu trúc dự án của bạn**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Tạo vòng lặp trò chơi cốt lõi của bạn**:
   - Khởi tạo trạng thái trò chơi
   - Xử lý đầu vào của người dùng
   - Cập nhật logic trò chơi
   - Kiểm tra các điều kiện kết thúc
   - Hiển thị trạng thái hiện tại

### Yêu cầu kỹ thuật

**Sử dụng JavaScript hiện đại**: 
- Áp dụng `const` và `let` để khai báo biến
- Sử dụng hàm mũi tên khi thích hợp
- Triển khai các tính năng ES6+ như template literals và destructuring

**Kiến trúc dựa trên sự kiện**:
- Tạo các trình xử lý sự kiện cho tương tác của người dùng
- Triển khai thay đổi trạng thái trò chơi thông qua các sự kiện
- Sử dụng trình lắng nghe sự kiện cho chức năng khởi động lại

**Thực hành mã sạch**:
- Viết các hàm với trách nhiệm đơn lẻ
- Sử dụng tên biến và hàm mô tả
- Thêm nhận xét giải thích logic và quy tắc trò chơi
- Tổ chức mã thành các phần hợp lý

## Yêu cầu nộp bài

### Các tài liệu cần nộp

1. **Tệp trò chơi hoàn chỉnh**: Tất cả các tệp HTML, CSS và JavaScript cần thiết để chạy trò chơi của bạn
2. **README.md**: Tài liệu giải thích:
   - Cách chơi trò chơi của bạn
   - Các điều kiện kết thúc bạn đã triển khai
   - Hướng dẫn khởi động lại
   - Các tính năng hoặc cơ chế đặc biệt
3. **Nhận xét mã**: Giải thích rõ ràng về logic và thuật toán trò chơi của bạn

### Danh sách kiểm tra thử nghiệm

Trước khi nộp bài, hãy xác minh rằng trò chơi của bạn:

- [ ] **Chạy không có lỗi** trong bảng điều khiển trình duyệt
- [ ] **Triển khai nhiều điều kiện kết thúc** như đã chỉ định
- [ ] **Khởi động lại đúng cách** với trạng thái được đặt lại sạch sẽ
- [ ] **Cung cấp phản hồi rõ ràng** cho người chơi về trạng thái trò chơi
- [ ] **Sử dụng cú pháp và thực hành JavaScript hiện đại**
- [ ] **Bao gồm tài liệu toàn diện** trong README.md

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (4) | Đạt yêu cầu (3) | Đang phát triển (2) | Bắt đầu (1) |
|----------|---------------|----------------|----------------|--------------|
| **Chức năng trò chơi** | Trò chơi hoàn chỉnh với nhiều điều kiện kết thúc, khởi động lại mượt mà và trải nghiệm chơi được trau chuốt | Trò chơi đầy đủ với các điều kiện kết thúc cơ bản và cơ chế khởi động lại hoạt động | Trò chơi một phần với một số điều kiện kết thúc được triển khai, khởi động lại có thể có vấn đề nhỏ | Trò chơi chưa hoàn chỉnh với chức năng hạn chế và lỗi đáng kể |
| **Chất lượng mã** | Mã sạch, được tổ chức tốt sử dụng các thực hành JavaScript hiện đại, nhận xét toàn diện và cấu trúc xuất sắc | Tổ chức mã tốt với cú pháp hiện đại, nhận xét đầy đủ và cấu trúc rõ ràng | Tổ chức mã cơ bản với một số thực hành hiện đại, nhận xét tối thiểu | Tổ chức mã kém, cú pháp lỗi thời, thiếu nhận xét và cấu trúc |
| **Trải nghiệm người dùng** | Lối chơi trực quan với hướng dẫn rõ ràng, phản hồi xuất sắc và trải nghiệm kết thúc/khởi động lại hấp dẫn | Lối chơi tốt với hướng dẫn và phản hồi đầy đủ, kết thúc/khởi động lại hoạt động | Lối chơi cơ bản với hướng dẫn tối thiểu, phản hồi hạn chế về trạng thái trò chơi | Lối chơi khó hiểu với hướng dẫn không rõ ràng và phản hồi người dùng kém |
| **Triển khai kỹ thuật** | Thể hiện sự thành thạo các khái niệm phát triển trò chơi, xử lý sự kiện và quản lý trạng thái | Thể hiện sự hiểu biết vững chắc về các khái niệm trò chơi với triển khai tốt | Hiểu biết cơ bản với triển khai chấp nhận được | Hiểu biết hạn chế với triển khai kém |
| **Tài liệu** | README toàn diện với hướng dẫn rõ ràng, mã được ghi chú tốt và bằng chứng thử nghiệm đầy đủ | Tài liệu tốt với hướng dẫn rõ ràng và nhận xét mã đầy đủ | Tài liệu cơ bản với hướng dẫn tối thiểu | Tài liệu kém hoặc thiếu |

### Thang điểm
- **Xuất sắc (16-20 điểm)**: Vượt mong đợi với các tính năng sáng tạo và triển khai được trau chuốt
- **Đạt yêu cầu (12-15 điểm)**: Đáp ứng tất cả các yêu cầu với thực hiện tốt
- **Đang phát triển (8-11 điểm)**: Đáp ứng hầu hết các yêu cầu với một số vấn đề nhỏ
- **Bắt đầu (4-7 điểm)**: Đáp ứng một số yêu cầu nhưng cần cải thiện đáng kể

## Tài nguyên học tập bổ sung

- [Hướng dẫn phát triển trò chơi của MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Hướng dẫn phát triển trò chơi bằng JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Tài liệu API Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Nguyên tắc thiết kế trò chơi](https://www.gamasutra.com/blogs/)

> 💡 **Mẹo chuyên nghiệp**: Bắt đầu đơn giản và thêm tính năng dần dần. Một trò chơi đơn giản được trau chuốt tốt sẽ tốt hơn một trò chơi phức tạp nhưng có lỗi!

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính xác nhất. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.