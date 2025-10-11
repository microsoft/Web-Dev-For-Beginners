<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T10:13:05+00:00",
  "source_file": "for-teachers.md",
  "language_code": "vi"
}
-->
### Dành cho giáo viên

Bạn có thể sử dụng giáo trình này trong lớp học của mình. Nó hoạt động mượt mà với GitHub Classroom và các nền tảng LMS hàng đầu, đồng thời cũng có thể được sử dụng như một kho lưu trữ độc lập với học sinh.

### Sử dụng với GitHub Classroom

Để quản lý bài học và bài tập theo từng nhóm, hãy tạo một kho lưu trữ riêng cho mỗi bài học để GitHub Classroom có thể liên kết từng bài tập một cách độc lập.

- Fork kho lưu trữ này vào tổ chức của bạn.
- Tạo một kho lưu trữ riêng cho mỗi bài học bằng cách tách từng thư mục bài học thành một kho lưu trữ riêng.
  - Lựa chọn A: Tạo các kho lưu trữ trống (một cho mỗi bài học) và sao chép nội dung thư mục bài học vào từng kho lưu trữ.
  - Lựa chọn B: Sử dụng phương pháp bảo toàn lịch sử Git (ví dụ: tách một thư mục thành một kho lưu trữ mới) nếu bạn cần giữ nguồn gốc.
- Trong GitHub Classroom, tạo một bài tập cho mỗi bài học và liên kết nó với kho lưu trữ bài học tương ứng.
- Cài đặt được khuyến nghị:
  - Độ hiển thị kho lưu trữ: riêng tư cho công việc của học sinh.
  - Sử dụng mã khởi đầu từ nhánh mặc định của kho lưu trữ bài học.
  - Thêm mẫu vấn đề và yêu cầu kéo cho các bài kiểm tra và bài nộp.
  - Tùy chọn cấu hình tự động chấm điểm và kiểm tra nếu bài học của bạn bao gồm chúng.
- Các quy ước hữu ích:
  - Tên kho lưu trữ như lesson-01-intro, lesson-02-html, v.v.
  - Nhãn: quiz, assignment, needs-review, late, resubmission.
  - Thẻ/phát hành theo từng nhóm (ví dụ: v2025-term1).

Mẹo: Tránh lưu trữ các kho lưu trữ bên trong các thư mục được đồng bộ hóa (ví dụ: OneDrive/Google Drive) để tránh xung đột Git trên Windows.

### Sử dụng với Moodle, Canvas hoặc Blackboard

Giáo trình này bao gồm các gói có thể nhập vào để phù hợp với quy trình làm việc của các nền tảng LMS phổ biến.

- Moodle: Sử dụng tệp tải lên Moodle [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) để tải toàn bộ khóa học.
- Common Cartridge: Sử dụng tệp Common Cartridge [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) để tương thích với nhiều LMS hơn.
- Lưu ý:
  - Moodle Cloud có hỗ trợ hạn chế đối với Common Cartridge. Ưu tiên sử dụng tệp Moodle ở trên, tệp này cũng có thể được tải lên Canvas.
  - Sau khi nhập, hãy xem lại các mô-đun, ngày đến hạn và cài đặt bài kiểm tra để phù hợp với lịch học của bạn.

![Moodle](../../translated_images/moodle.94eb93d714a50cb2c97435b408017dee224348b61bc86203ffd43a4f4e57b95f.vi.png)
> Giáo trình trong lớp học Moodle

![Canvas](../../translated_images/canvas.fbd605ff8e5b8aff567d398528ce113db304446b90b9cad55c654de3fdfcda34.vi.png)
> Giáo trình trong Canvas

### Sử dụng kho lưu trữ trực tiếp (không dùng Classroom)

Nếu bạn không muốn sử dụng GitHub Classroom, bạn có thể chạy khóa học trực tiếp từ kho lưu trữ này.

- Định dạng đồng bộ/trực tuyến (Zoom/Teams):
  - Tổ chức các buổi khởi động ngắn do người hướng dẫn dẫn dắt; sử dụng phòng nhóm để làm bài kiểm tra.
  - Thông báo khung thời gian làm bài kiểm tra; học sinh nộp câu trả lời dưới dạng GitHub Issues.
  - Đối với các bài tập hợp tác, học sinh làm việc trong các kho lưu trữ bài học công khai và mở yêu cầu kéo.
- Định dạng riêng tư/không đồng bộ:
  - Học sinh fork từng bài học vào các kho lưu trữ **riêng tư** của họ và thêm bạn làm cộng tác viên.
  - Họ nộp bài qua Issues (bài kiểm tra) và Pull Requests (bài tập) trên kho lưu trữ lớp học của bạn hoặc các fork riêng tư của họ.

### Thực hành tốt nhất

- Cung cấp một bài học định hướng về các kiến thức cơ bản của Git/GitHub, Issues và PRs.
- Sử dụng danh sách kiểm tra trong Issues cho các bài kiểm tra/bài tập nhiều bước.
- Thêm CONTRIBUTING.md và CODE_OF_CONDUCT.md để thiết lập các quy tắc lớp học.
- Thêm ghi chú về khả năng tiếp cận (văn bản thay thế, chú thích) và cung cấp các tệp PDF có thể in.
- Phiên bản hóa nội dung của bạn theo từng học kỳ và đóng băng các kho lưu trữ bài học sau khi xuất bản.

### Phản hồi và hỗ trợ

Chúng tôi muốn giáo trình này phù hợp với bạn và học sinh của bạn. Vui lòng mở một Issue mới trong kho lưu trữ này để báo lỗi, yêu cầu hoặc cải tiến, hoặc bắt đầu một cuộc thảo luận trong Teacher Corner.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.