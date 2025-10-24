<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T13:47:31+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "vi"
}
-->
# Tạo Phong Cách Cho Ứng Dụng Ngân Hàng Với CSS Hiện Đại

## Tổng Quan Dự Án

Biến ứng dụng ngân hàng của bạn từ một ứng dụng chức năng thành một ứng dụng web hấp dẫn, chuyên nghiệp bằng cách sử dụng các kỹ thuật CSS hiện đại. Bạn sẽ tạo ra một hệ thống thiết kế đồng nhất, cải thiện trải nghiệm người dùng đồng thời duy trì các nguyên tắc thiết kế truy cập và đáp ứng.

Bài tập này thách thức bạn áp dụng các mẫu thiết kế web hiện đại, triển khai một nhận diện hình ảnh nhất quán và tạo ra một giao diện mà người dùng sẽ thấy vừa hấp dẫn vừa dễ sử dụng.

## Hướng Dẫn

### Bước 1: Thiết Lập Tệp CSS

**Tạo nền tảng CSS của bạn:**

1. **Tạo** một tệp mới tên là `styles.css` trong thư mục gốc của dự án
2. **Liên kết** tệp CSS vào tệp `index.html` của bạn:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Bắt đầu** với CSS reset và các mặc định hiện đại:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Bước 2: Yêu Cầu Hệ Thống Thiết Kế

**Triển khai các yếu tố thiết kế cơ bản sau:**

#### Bảng Màu
- **Màu chính**: Chọn một màu chuyên nghiệp cho nút và điểm nhấn
- **Màu phụ**: Màu bổ sung cho các điểm nhấn và hành động phụ
- **Màu trung tính**: Các sắc xám cho văn bản, đường viền và nền
- **Màu thành công/lỗi**: Màu xanh lá cho trạng thái thành công, màu đỏ cho lỗi

#### Kiểu Chữ
- **Phân cấp tiêu đề**: Phân biệt rõ ràng giữa các phần tử H1, H2 và H3
- **Văn bản nội dung**: Kích thước phông chữ dễ đọc (tối thiểu 16px) và khoảng cách dòng phù hợp
- **Nhãn biểu mẫu**: Kiểu chữ rõ ràng, dễ truy cập

#### Bố Cục và Khoảng Cách
- **Khoảng cách đồng nhất**: Sử dụng thang đo khoảng cách (8px, 16px, 24px, 32px)
- **Hệ thống lưới**: Bố cục tổ chức cho biểu mẫu và các phần nội dung
- **Thiết kế đáp ứng**: Phương pháp ưu tiên di động với các điểm ngắt

### Bước 3: Tạo Phong Cách Cho Các Thành Phần

**Tạo phong cách cho các thành phần cụ thể sau:**

#### Biểu Mẫu
- **Trường nhập liệu**: Đường viền chuyên nghiệp, trạng thái focus và kiểu dáng xác thực
- **Nút**: Hiệu ứng hover, trạng thái vô hiệu hóa và chỉ báo tải
- **Nhãn**: Vị trí rõ ràng và chỉ báo trường bắt buộc
- **Thông báo lỗi**: Kiểu dáng lỗi rõ ràng và thông điệp hỗ trợ

#### Điều Hướng
- **Tiêu đề**: Khu vực điều hướng sạch sẽ, có thương hiệu
- **Liên kết**: Hiệu ứng hover rõ ràng và chỉ báo trạng thái đang hoạt động
- **Logo/Tiêu đề**: Yếu tố thương hiệu nổi bật

#### Khu Vực Nội Dung
- **Các phần**: Phân tách rõ ràng giữa các khu vực khác nhau
- **Thẻ**: Nếu sử dụng bố cục dạng thẻ, hãy thêm bóng và đường viền
- **Nền**: Sử dụng khoảng trắng hợp lý và nền nhẹ nhàng

### Bước 4: Tính Năng Nâng Cao (Tùy Chọn)

**Cân nhắc triển khai các tính năng nâng cao sau:**
- **Chế độ tối**: Chuyển đổi giữa giao diện sáng và tối
- **Hiệu ứng động**: Chuyển đổi nhẹ nhàng và tương tác nhỏ
- **Trạng thái tải**: Phản hồi trực quan trong quá trình gửi biểu mẫu
- **Hình ảnh đáp ứng**: Tối ưu hóa hình ảnh cho các kích thước màn hình khác nhau

## Cảm Hứng Thiết Kế

**Đặc điểm của ứng dụng ngân hàng hiện đại:**
- **Thiết kế sạch sẽ, tối giản** với nhiều khoảng trắng
- **Bảng màu chuyên nghiệp** (xanh dương, xanh lá hoặc các màu trung tính tinh tế)
- **Phân cấp hình ảnh rõ ràng** với các nút kêu gọi hành động nổi bật
- **Tỷ lệ tương phản truy cập** đáp ứng các hướng dẫn WCAG
- **Bố cục đáp ứng trên di động** hoạt động tốt trên mọi thiết bị

## Yêu Cầu Kỹ Thuật

### Tổ Chức CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Yêu Cầu Truy Cập
- **Tỷ lệ tương phản màu sắc**: Đảm bảo tỷ lệ ít nhất 4.5:1 cho văn bản thông thường
- **Chỉ báo focus**: Trạng thái focus rõ ràng cho điều hướng bằng bàn phím
- **Nhãn biểu mẫu**: Liên kết đúng với các trường nhập liệu
- **Thiết kế đáp ứng**: Sử dụng được trên màn hình từ 320px đến 1920px

## Tiêu Chí Đánh Giá

| Tiêu Chí | Xuất Sắc (A) | Đạt (B) | Đang Phát Triển (C) | Cần Cải Thiện (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Hệ Thống Thiết Kế** | Triển khai hệ thống thiết kế toàn diện với màu sắc, kiểu chữ và khoảng cách đồng nhất | Sử dụng phong cách đồng nhất với các mẫu thiết kế rõ ràng và phân cấp hình ảnh tốt | Áp dụng phong cách cơ bản với một số vấn đề về tính đồng nhất hoặc thiếu yếu tố thiết kế | Phong cách tối thiểu với các lựa chọn thiết kế không đồng nhất hoặc mâu thuẫn |
| **Trải Nghiệm Người Dùng** | Tạo giao diện chuyên nghiệp, trực quan với khả năng sử dụng và sự hấp dẫn tuyệt vời | Cung cấp trải nghiệm người dùng tốt với điều hướng rõ ràng và nội dung dễ đọc | Khả năng sử dụng cơ bản với một số cải tiến UX cần thiết | Khả năng sử dụng kém, khó điều hướng hoặc đọc |
| **Triển Khai Kỹ Thuật** | Sử dụng các kỹ thuật CSS hiện đại, cấu trúc mã tổ chức và tuân thủ các thực hành tốt nhất | Triển khai CSS hiệu quả với tổ chức tốt và kỹ thuật phù hợp | CSS hoạt động đúng nhưng có thể thiếu tổ chức hoặc cách tiếp cận hiện đại | Triển khai CSS kém với các vấn đề kỹ thuật hoặc không tương thích trình duyệt |
| **Thiết Kế Đáp Ứng** | Thiết kế đáp ứng hoàn toàn hoạt động tốt trên mọi kích thước thiết bị | Hành vi đáp ứng tốt với một số vấn đề nhỏ trên một số kích thước màn hình | Triển khai đáp ứng cơ bản với một số vấn đề về bố cục | Không đáp ứng hoặc có vấn đề lớn trên thiết bị di động |
| **Truy Cập** | Đáp ứng các hướng dẫn WCAG với khả năng điều hướng bằng bàn phím và hỗ trợ trình đọc màn hình xuất sắc | Thực hành truy cập tốt với tỷ lệ tương phản và chỉ báo focus phù hợp | Cân nhắc truy cập cơ bản với một số yếu tố bị thiếu | Truy cập kém, khó sử dụng cho người dùng khuyết tật |

## Hướng Dẫn Nộp Bài

**Bao gồm trong bài nộp của bạn:**
- **styles.css**: Tệp CSS hoàn chỉnh của bạn
- **HTML đã cập nhật**: Bất kỳ thay đổi HTML nào bạn đã thực hiện
- **Ảnh chụp màn hình**: Hình ảnh hiển thị thiết kế của bạn trên máy tính và di động
- **README**: Mô tả ngắn gọn về các lựa chọn thiết kế và bảng màu của bạn

**Điểm thưởng cho:**
- **Thuộc tính CSS tùy chỉnh** để dễ dàng duy trì chủ đề
- **Các tính năng CSS nâng cao** như Grid, Flexbox hoặc hiệu ứng động CSS
- **Cân nhắc hiệu suất** như tối ưu hóa CSS và kích thước tệp nhỏ
- **Kiểm tra trình duyệt chéo** đảm bảo tương thích trên các trình duyệt khác nhau

> 💡 **Mẹo Chuyên Nghiệp**: Bắt đầu với thiết kế di động trước, sau đó cải thiện cho màn hình lớn hơn. Phương pháp ưu tiên di động này đảm bảo ứng dụng của bạn hoạt động tốt trên mọi thiết bị và tuân theo các thực hành tốt nhất trong phát triển web hiện đại.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.