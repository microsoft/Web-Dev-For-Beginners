<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c40a698395ee5102715f7880bba3f2e7",
  "translation_date": "2025-08-27T22:31:43+00:00",
  "source_file": "6-space-game/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian

Một trò chơi không gian để học các nguyên tắc cơ bản nâng cao của JavaScript

Trong bài học này, bạn sẽ học cách tự xây dựng trò chơi không gian của riêng mình. Nếu bạn từng chơi trò "Space Invaders", trò chơi này có cùng ý tưởng: điều khiển một tàu vũ trụ và bắn vào những quái vật từ trên xuống. Đây là hình ảnh của trò chơi hoàn chỉnh:

![Trò chơi hoàn chỉnh](../../../6-space-game/images/pewpew.gif)

Trong sáu bài học này, bạn sẽ học được những điều sau:

- **Tương tác** với phần tử Canvas để vẽ các đối tượng lên màn hình
- **Hiểu** hệ tọa độ Cartesian
- **Học** mô hình Pub-Sub để tạo kiến trúc trò chơi dễ bảo trì và mở rộng
- **Tận dụng** Async/Await để tải tài nguyên trò chơi
- **Xử lý** sự kiện bàn phím

## Tổng quan

- Lý thuyết
   - [Giới thiệu về việc xây dựng trò chơi với JavaScript](1-introduction/README.md)
- Thực hành
   - [Vẽ lên canvas](2-drawing-to-canvas/README.md)
   - [Di chuyển các đối tượng trên màn hình](3-moving-elements-around/README.md)
   - [Phát hiện va chạm](4-collision-detection/README.md)
   - [Ghi điểm](5-keeping-score/README.md)
   - [Kết thúc và khởi động lại trò chơi](6-end-condition/README.md)

## Nguồn tài nguyên

Các tài nguyên được sử dụng trong bài này đến từ https://www.kenney.nl/.  
Nếu bạn yêu thích việc xây dựng trò chơi, đây là một nguồn tài nguyên rất tốt, có nhiều tài nguyên miễn phí và một số tài nguyên trả phí.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.