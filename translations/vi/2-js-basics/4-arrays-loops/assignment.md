# Bài tập về Mảng và Vòng lặp

## Hướng dẫn

Hoàn thành các bài tập sau để thực hành làm việc với mảng và vòng lặp. Mỗi bài tập dựa trên các khái niệm từ bài học và khuyến khích bạn áp dụng các loại vòng lặp khác nhau và các phương thức của mảng.

### Bài tập 1: Trình tạo mẫu số
Tạo một chương trình liệt kê mỗi số thứ 3 từ 1-20 và in ra màn hình console.

**Yêu cầu:**
- Sử dụng vòng lặp `for` với bước nhảy tùy chỉnh
- Hiển thị các số theo định dạng thân thiện với người dùng
- Thêm các bình luận mô tả giải thích logic của bạn

**Kết quả mong đợi:**
```
3, 6, 9, 12, 15, 18
```

> **Mẹo:** Thay đổi biểu thức lặp trong vòng lặp for của bạn để bỏ qua các số.

### Bài tập 2: Phân tích mảng
Tạo một mảng gồm ít nhất 8 số khác nhau và viết các hàm để phân tích dữ liệu.

**Yêu cầu:**
- Tạo một mảng gọi là `numbers` với ít nhất 8 giá trị
- Viết một hàm `findMaximum()` trả về số lớn nhất
- Viết một hàm `findMinimum()` trả về số nhỏ nhất  
- Viết một hàm `calculateSum()` trả về tổng của tất cả các số
- Kiểm tra từng hàm và hiển thị kết quả

**Thử thách thêm:** Tạo một hàm tìm số lớn thứ hai trong mảng.

### Bài tập 3: Xử lý mảng chuỗi
Tạo một mảng các bộ phim/sách/bài hát yêu thích của bạn và thực hành các loại vòng lặp khác nhau.

**Yêu cầu:**
- Tạo một mảng với ít nhất 5 giá trị chuỗi
- Sử dụng vòng lặp `for` truyền thống để hiển thị các mục kèm số thứ tự (1. Tên mục)
- Sử dụng vòng lặp `for...of` để hiển thị các mục dưới dạng chữ in hoa
- Sử dụng phương thức `forEach()` để đếm và hiển thị tổng số ký tự

**Ví dụ kết quả:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Bài tập 4: Lọc dữ liệu (Nâng cao)
Tạo một chương trình xử lý mảng các đối tượng đại diện cho học sinh.

**Yêu cầu:**
- Tạo một mảng gồm ít nhất 5 đối tượng học sinh với các thuộc tính: `name`, `age`, `grade`
- Sử dụng vòng lặp để tìm các học sinh từ 18 tuổi trở lên
- Tính điểm trung bình của tất cả học sinh
- Tạo một mảng mới chỉ chứa các học sinh có điểm trên 85

**Cấu trúc ví dụ:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Kiểm tra mã của bạn

Kiểm tra chương trình của bạn bằng cách:
1. Chạy từng bài tập trong console của trình duyệt
2. Xác minh kết quả khớp với kết quả mong đợi
3. Kiểm tra với các tập dữ liệu khác nhau
4. Đảm bảo mã của bạn xử lý các trường hợp đặc biệt (mảng rỗng, phần tử đơn lẻ)

## Hướng dẫn nộp bài

Bao gồm các nội dung sau trong bài nộp của bạn:
- Mã JavaScript được bình luận rõ ràng cho từng bài tập
- Ảnh chụp màn hình hoặc kết quả văn bản hiển thị chương trình của bạn đang chạy
- Giải thích ngắn gọn về loại vòng lặp bạn đã chọn cho từng nhiệm vụ và lý do

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (3 điểm) | Đạt yêu cầu (2 điểm) | Cần cải thiện (1 điểm) |
| -------- | ----------------- | -------------------- | ----------------------- |
| **Chức năng** | Hoàn thành tất cả bài tập đúng cách kèm thử thách thêm | Hoàn thành đúng các bài tập yêu cầu | Một số bài tập chưa hoàn thành hoặc có lỗi |
| **Chất lượng mã** | Mã sạch, tổ chức tốt với tên biến mô tả rõ ràng | Mã hoạt động nhưng có thể cải thiện | Mã lộn xộn hoặc khó hiểu |
| **Bình luận** | Bình luận đầy đủ giải thích logic và quyết định | Có bình luận cơ bản | Ít hoặc không có bình luận |
| **Sử dụng vòng lặp** | Thể hiện sự hiểu biết về các loại vòng lặp khác nhau một cách phù hợp | Sử dụng vòng lặp đúng nhưng ít đa dạng | Sử dụng vòng lặp sai hoặc không hiệu quả |
| **Kiểm tra** | Có bằng chứng kiểm tra kỹ lưỡng với nhiều tình huống | Thể hiện kiểm tra cơ bản | Ít hoặc không có bằng chứng kiểm tra |

## Câu hỏi phản ánh

Sau khi hoàn thành các bài tập, hãy cân nhắc:
1. Loại vòng lặp nào bạn cảm thấy tự nhiên nhất khi sử dụng và tại sao?
2. Những thách thức nào bạn gặp phải khi làm việc với mảng?
3. Những kỹ năng này có thể áp dụng vào các dự án phát triển web thực tế như thế nào?
4. Bạn sẽ làm gì khác nếu phải tối ưu hóa mã của mình để đạt hiệu suất tốt hơn?

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.