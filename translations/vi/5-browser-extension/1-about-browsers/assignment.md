<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-24T13:55:06+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "vi"
}
-->
# Bài tập: Tạo lại phong cách cho tiện ích mở rộng trình duyệt của bạn

## Tổng quan

Bây giờ bạn đã xây dựng cấu trúc HTML cho tiện ích mở rộng trình duyệt về dấu chân carbon, đã đến lúc làm cho nó trở nên hấp dẫn và thân thiện với người dùng hơn. Thiết kế tốt nâng cao trải nghiệm người dùng và làm cho tiện ích của bạn trở nên chuyên nghiệp và thu hút hơn.

Tiện ích của bạn đã có kiểu dáng CSS cơ bản, nhưng bài tập này thách thức bạn tạo ra một phong cách hình ảnh độc đáo phản ánh phong cách cá nhân của bạn đồng thời duy trì khả năng sử dụng tuyệt vời.

## Hướng dẫn

### Phần 1: Phân tích thiết kế hiện tại

Trước khi thực hiện thay đổi, hãy xem xét cấu trúc CSS hiện tại:

1. **Xác định** các tệp CSS trong dự án tiện ích của bạn  
2. **Xem xét** cách tiếp cận kiểu dáng và bảng màu hiện tại  
3. **Xác định** các khu vực cần cải thiện về bố cục, kiểu chữ và thứ tự thị giác  
4. **Cân nhắc** cách thiết kế hỗ trợ mục tiêu của người dùng (hoàn thành biểu mẫu dễ dàng và hiển thị dữ liệu rõ ràng)  

### Phần 2: Thiết kế phong cách tùy chỉnh của bạn

Tạo một thiết kế hình ảnh thống nhất bao gồm:

**Bảng màu:**  
- Chọn bảng màu chính phản ánh các chủ đề về môi trường  
- Đảm bảo độ tương phản đủ để hỗ trợ khả năng truy cập (sử dụng các công cụ như WebAIM's contrast checker)  
- Cân nhắc cách màu sắc sẽ hiển thị trên các chủ đề trình duyệt khác nhau  

**Kiểu chữ:**  
- Chọn các phông chữ dễ đọc phù hợp với kích thước nhỏ của tiện ích  
- Thiết lập thứ tự rõ ràng với kích thước và trọng lượng phông chữ phù hợp  
- Đảm bảo văn bản vẫn dễ đọc trong cả chủ đề trình duyệt sáng và tối  

**Bố cục và khoảng cách:**  
- Cải thiện tổ chức thị giác của các phần tử biểu mẫu và hiển thị dữ liệu  
- Thêm khoảng cách và lề phù hợp để tăng khả năng đọc  
- Cân nhắc các nguyên tắc thiết kế đáp ứng cho các kích thước màn hình khác nhau  

### Phần 3: Triển khai thiết kế của bạn

Chỉnh sửa các tệp CSS để triển khai thiết kế của bạn:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```
  
**Các khu vực chính cần tạo kiểu:**  
- **Phần tử biểu mẫu**: Trường nhập liệu, nhãn và nút gửi  
- **Hiển thị kết quả**: Container dữ liệu, kiểu dáng văn bản và trạng thái tải  
- **Phần tử tương tác**: Hiệu ứng hover, trạng thái nút và chuyển đổi  
- **Bố cục tổng thể**: Khoảng cách container, màu nền và thứ tự thị giác  

### Phần 4: Kiểm tra và tinh chỉnh

1. **Xây dựng** tiện ích của bạn bằng `npm run build`  
2. **Tải** tiện ích đã cập nhật vào trình duyệt của bạn  
3. **Kiểm tra** tất cả các trạng thái thị giác (nhập biểu mẫu, tải, hiển thị kết quả, lỗi)  
4. **Xác minh** khả năng truy cập bằng công cụ phát triển trình duyệt  
5. **Tinh chỉnh** kiểu dáng của bạn dựa trên việc sử dụng thực tế  

## Thử thách sáng tạo

### Mức cơ bản  
- Cập nhật màu sắc và phông chữ để tạo một chủ đề thống nhất  
- Cải thiện khoảng cách và căn chỉnh trên toàn giao diện  
- Thêm hiệu ứng hover nhẹ nhàng cho các phần tử tương tác  

### Mức trung bình  
- Thiết kế các biểu tượng hoặc đồ họa tùy chỉnh cho tiện ích của bạn  
- Triển khai các chuyển đổi mượt mà giữa các trạng thái khác nhau  
- Tạo một hoạt ảnh tải độc đáo cho các cuộc gọi API  

### Mức nâng cao  
- Thiết kế nhiều tùy chọn chủ đề (sáng/tối/độ tương phản cao)  
- Triển khai thiết kế đáp ứng cho các kích thước cửa sổ trình duyệt khác nhau  
- Thêm các tương tác nhỏ giúp nâng cao trải nghiệm người dùng  

## Hướng dẫn nộp bài

Bài tập hoàn chỉnh của bạn nên bao gồm:

- **Các tệp CSS đã chỉnh sửa** với kiểu dáng tùy chỉnh của bạn  
- **Ảnh chụp màn hình** hiển thị tiện ích của bạn ở các trạng thái khác nhau (biểu mẫu, tải, kết quả)  
- **Mô tả ngắn gọn** (2-3 câu) giải thích lựa chọn thiết kế của bạn và cách chúng cải thiện trải nghiệm người dùng  

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (4) | Đạt yêu cầu (3) | Đang phát triển (2) | Bắt đầu (1) |
|----------|---------------|----------------|----------------|----------------|
| **Thiết kế hình ảnh** | Thiết kế sáng tạo, thống nhất, nâng cao khả năng sử dụng và phản ánh các nguyên tắc thiết kế mạnh mẽ | Lựa chọn thiết kế tốt với kiểu dáng nhất quán và thứ tự thị giác rõ ràng | Cải thiện thiết kế cơ bản với một số vấn đề về tính nhất quán | Thay đổi kiểu dáng tối thiểu hoặc thiết kế không nhất quán |
| **Chức năng** | Tất cả các kiểu dáng hoạt động hoàn hảo trên các trạng thái và môi trường trình duyệt khác nhau | Kiểu dáng hoạt động tốt với một số vấn đề nhỏ trong các trường hợp đặc biệt | Hầu hết các kiểu dáng hoạt động với một số vấn đề hiển thị | Vấn đề kiểu dáng nghiêm trọng ảnh hưởng đến khả năng sử dụng |
| **Chất lượng mã** | CSS sạch, tổ chức tốt với tên lớp có ý nghĩa và bộ chọn hiệu quả | Cấu trúc CSS tốt với việc sử dụng bộ chọn và thuộc tính phù hợp | CSS chấp nhận được với một số vấn đề về tổ chức | Cấu trúc CSS kém hoặc kiểu dáng quá phức tạp |
| **Khả năng truy cập** | Độ tương phản màu sắc tuyệt vời, phông chữ dễ đọc và cân nhắc cho người dùng khuyết tật | Thực hành khả năng truy cập tốt với một số khu vực cần cải thiện | Cân nhắc khả năng truy cập cơ bản với một số vấn đề | Ít chú ý đến yêu cầu về khả năng truy cập |

## Mẹo để thành công

> 💡 **Mẹo thiết kế**: Bắt đầu với những thay đổi nhỏ và dần dần xây dựng phong cách nổi bật hơn. Những cải tiến nhỏ về kiểu chữ và khoảng cách thường có tác động lớn đến chất lượng cảm nhận.

**Các thực hành tốt nên tuân theo:**  
- **Kiểm tra** tiện ích của bạn trong cả chủ đề trình duyệt sáng và tối  
- **Sử dụng** đơn vị tương đối (em, rem) để tăng khả năng mở rộng  
- **Duy trì** khoảng cách nhất quán bằng cách sử dụng các thuộc tính tùy chỉnh CSS  
- **Cân nhắc** cách thiết kế của bạn sẽ hiển thị với người dùng có nhu cầu thị giác khác nhau  
- **Xác thực** CSS của bạn để đảm bảo tuân thủ cú pháp đúng  

> ⚠️ **Lỗi thường gặp**: Đừng hy sinh khả năng sử dụng để đổi lấy vẻ ngoài. Tiện ích của bạn nên vừa đẹp vừa chức năng.

**Hãy nhớ:**  
- **Giữ** thông tin quan trọng dễ đọc  
- **Đảm bảo** các nút và phần tử tương tác dễ nhấp  
- **Duy trì** phản hồi thị giác rõ ràng cho các hành động của người dùng  
- **Kiểm tra** thiết kế của bạn với dữ liệu thực, không chỉ văn bản mẫu  

Chúc bạn may mắn tạo ra một tiện ích trình duyệt vừa chức năng vừa đẹp mắt!

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.