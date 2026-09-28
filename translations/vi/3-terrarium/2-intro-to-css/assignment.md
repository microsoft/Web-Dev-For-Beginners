# Bài tập Tái cấu trúc CSS

## Mục tiêu

Chuyển đổi dự án terrarium của bạn để sử dụng các kỹ thuật bố cục CSS hiện đại! Tái cấu trúc cách tiếp cận định vị tuyệt đối hiện tại để áp dụng **Flexbox** hoặc **CSS Grid** nhằm tạo ra thiết kế dễ bảo trì và đáp ứng hơn. Bài tập này thách thức bạn áp dụng các tiêu chuẩn CSS hiện đại trong khi vẫn duy trì tính thẩm mỹ của terrarium.

Hiểu khi nào và cách sử dụng các phương pháp bố cục khác nhau là một kỹ năng quan trọng trong phát triển web hiện đại. Bài tập này kết nối các kỹ thuật định vị truyền thống với hệ thống bố cục CSS đương đại.

## Hướng dẫn bài tập

### Giai đoạn 1: Phân tích và Lập kế hoạch
1. **Xem lại mã terrarium hiện tại của bạn** - Xác định các phần tử hiện đang sử dụng định vị tuyệt đối
2. **Chọn phương pháp bố cục** - Quyết định xem Flexbox hay CSS Grid phù hợp hơn với mục tiêu thiết kế của bạn
3. **Phác thảo cấu trúc bố cục mới** - Lên kế hoạch cách tổ chức các container và các phần tử cây

### Giai đoạn 2: Triển khai
1. **Tạo một phiên bản mới** của dự án terrarium trong một thư mục riêng
2. **Cập nhật cấu trúc HTML** nếu cần để hỗ trợ phương pháp bố cục đã chọn
3. **Tái cấu trúc CSS** để sử dụng Flexbox hoặc CSS Grid thay vì định vị tuyệt đối
4. **Duy trì tính nhất quán về hình ảnh** - Đảm bảo cây và bình terrarium xuất hiện ở cùng vị trí
5. **Triển khai hành vi đáp ứng** - Bố cục của bạn nên thích ứng tốt với các kích thước màn hình khác nhau

### Giai đoạn 3: Kiểm tra và Tài liệu
1. **Kiểm tra trên nhiều trình duyệt** - Xác minh thiết kế của bạn hoạt động trên Chrome, Firefox, Edge và Safari
2. **Kiểm tra tính đáp ứng** - Kiểm tra bố cục của bạn trên màn hình di động, máy tính bảng và máy tính để bàn
3. **Tài liệu** - Thêm nhận xét vào CSS giải thích các lựa chọn bố cục của bạn
4. **Ảnh chụp màn hình** - Chụp terrarium của bạn trên các trình duyệt và kích thước màn hình khác nhau

## Yêu cầu kỹ thuật

### Triển khai bố cục
- **Chọn MỘT**: Triển khai Flexbox HOẶC CSS Grid (không sử dụng cả hai cho cùng một phần tử)
- **Thiết kế đáp ứng**: Sử dụng đơn vị tương đối (`rem`, `em`, `%`, `vw`, `vh`) thay vì pixel cố định
- **Khả năng truy cập**: Duy trì cấu trúc HTML ngữ nghĩa và văn bản thay thế phù hợp
- **Chất lượng mã**: Sử dụng quy ước đặt tên nhất quán và tổ chức CSS một cách hợp lý

### Các tính năng CSS hiện đại cần bao gồm
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Yêu cầu hỗ trợ trình duyệt
- **Chrome/Edge**: 2 phiên bản mới nhất
- **Firefox**: 2 phiên bản mới nhất  
- **Safari**: 2 phiên bản mới nhất
- **Trình duyệt di động**: iOS Safari, Chrome Mobile

## Kết quả cần nộp

1. **Tệp HTML đã cập nhật** với cấu trúc ngữ nghĩa được cải thiện
2. **Tệp CSS đã tái cấu trúc** sử dụng các kỹ thuật bố cục hiện đại
3. **Bộ ảnh chụp màn hình** thể hiện khả năng tương thích trên nhiều trình duyệt:
   - Chế độ máy tính để bàn (1920x1080)
   - Chế độ máy tính bảng (768x1024) 
   - Chế độ di động (375x667)
   - Ít nhất 2 trình duyệt khác nhau
4. **Tệp README.md** ghi lại:
   - Lựa chọn bố cục của bạn (Flexbox vs Grid) và lý do
   - Những thách thức gặp phải trong quá trình tái cấu trúc
   - Ghi chú về khả năng tương thích trình duyệt
   - Hướng dẫn chạy mã của bạn

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (4) | Đạt yêu cầu (3) | Đang phát triển (2) | Bắt đầu (1) |
|----------|---------------|----------------|---------------|---------------|
| **Triển khai bố cục** | Sử dụng Flexbox/Grid một cách xuất sắc với các tính năng nâng cao; hoàn toàn đáp ứng | Triển khai đúng với hành vi đáp ứng tốt | Triển khai cơ bản với một số vấn đề về đáp ứng | Triển khai bố cục không đầy đủ hoặc sai |
| **Chất lượng mã** | CSS sạch sẽ, tổ chức tốt với nhận xét ý nghĩa và đặt tên nhất quán | Tổ chức tốt với một số nhận xét | Tổ chức đủ với nhận xét tối thiểu | Tổ chức kém; khó hiểu |
| **Khả năng tương thích trình duyệt** | Hoàn toàn nhất quán trên tất cả các trình duyệt yêu cầu với ảnh chụp màn hình | Tương thích tốt với một số khác biệt nhỏ được ghi lại | Một số vấn đề tương thích không làm hỏng chức năng | Vấn đề tương thích lớn hoặc thiếu kiểm tra |
| **Thiết kế đáp ứng** | Cách tiếp cận ưu tiên di động xuất sắc với các điểm ngắt mượt mà | Hành vi đáp ứng tốt với các điểm ngắt phù hợp | Các tính năng đáp ứng cơ bản với một số vấn đề bố cục | Hành vi đáp ứng hạn chế hoặc bị lỗi |
| **Tài liệu** | README toàn diện với các giải thích và thông tin chi tiết | Tài liệu tốt bao gồm tất cả các yếu tố yêu cầu | Tài liệu cơ bản với ít giải thích | Tài liệu không đầy đủ hoặc thiếu |

## Tài nguyên hữu ích

### Hướng dẫn phương pháp bố cục
- 📖 [Hướng dẫn đầy đủ về Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Hướng dẫn đầy đủ về CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Chọn công cụ phù hợp](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

### Công cụ kiểm tra trình duyệt
- 🛠️ [Chế độ đáp ứng của DevTools trình duyệt](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Kiểm tra hỗ trợ tính năng](https://caniuse.com/)
- 🛠️ [BrowserStack - Kiểm tra trình duyệt chéo](https://www.browserstack.com/)

### Công cụ kiểm tra chất lượng mã
- ✅ [Trình kiểm tra CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Trình kiểm tra HTML](https://validator.w3.org/)
- ✅ [Kiểm tra độ tương phản WebAIM](https://webaim.org/resources/contrastchecker/)

## Thử thách bổ sung

🌟 **Bố cục nâng cao**: Triển khai cả Flexbox VÀ Grid ở các phần khác nhau của thiết kế  
🌟 **Tích hợp hoạt ảnh**: Thêm chuyển đổi hoặc hoạt ảnh CSS hoạt động với bố cục mới của bạn  
🌟 **Chế độ tối**: Triển khai bộ chuyển đổi chủ đề dựa trên thuộc tính tùy chỉnh CSS  
🌟 **Truy vấn container**: Sử dụng kỹ thuật truy vấn container hiện đại để đáp ứng ở cấp độ thành phần  

> 💡 **Lưu ý**: Mục tiêu không chỉ là làm cho nó hoạt động, mà còn là hiểu TẠI SAO phương pháp bố cục bạn chọn là giải pháp tốt nhất cho thử thách thiết kế cụ thể này!

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.