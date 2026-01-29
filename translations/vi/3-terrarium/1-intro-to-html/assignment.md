# Bài Tập Thực Hành HTML: Xây Dựng Mô Hình Blog

## Mục Tiêu Học Tập

Áp dụng kiến thức HTML của bạn bằng cách thiết kế và mã hóa cấu trúc trang chủ blog hoàn chỉnh. Bài tập thực hành này sẽ củng cố các khái niệm HTML ngữ nghĩa, các nguyên tắc tốt nhất về khả năng truy cập, và kỹ năng tổ chức mã chuyên nghiệp mà bạn sẽ sử dụng trong suốt hành trình phát triển web của mình.

**Hoàn thành bài tập này, bạn sẽ:**
- Thực hành lập kế hoạch bố cục trang web trước khi mã hóa
- Áp dụng các phần tử HTML ngữ nghĩa một cách phù hợp
- Tạo mã đánh dấu có cấu trúc tốt và dễ truy cập
- Phát triển thói quen mã hóa chuyên nghiệp với các bình luận và tổ chức hợp lý

## Yêu Cầu Dự Án

### Phần 1: Lập Kế Hoạch Thiết Kế (Mô Hình Hình Ảnh)

**Tạo một mô hình hình ảnh của trang chủ blog của bạn bao gồm:**
- Phần đầu trang với tiêu đề trang và điều hướng
- Khu vực nội dung chính với ít nhất 2-3 bản xem trước bài viết blog
- Thanh bên với thông tin bổ sung (phần giới thiệu, bài viết gần đây, danh mục)
- Phần chân trang với thông tin liên hệ hoặc liên kết

**Tùy chọn tạo mô hình:**
- **Phác thảo bằng tay**: Sử dụng giấy và bút chì, sau đó chụp ảnh hoặc quét thiết kế của bạn
- **Công cụ kỹ thuật số**: Figma, Adobe XD, Canva, PowerPoint, hoặc bất kỳ ứng dụng vẽ nào
- **Công cụ tạo wireframe**: Balsamiq, MockFlow, hoặc phần mềm wireframe tương tự

**Gắn nhãn các phần trong mô hình của bạn** với các phần tử HTML mà bạn dự định sử dụng (ví dụ: "Phần đầu trang - `<header>`", "Bài viết blog - `<article>`").

### Phần 2: Lập Kế Hoạch Phần Tử HTML

**Tạo danh sách ánh xạ từng phần trong mô hình của bạn với các phần tử HTML cụ thể:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Các phần tử bắt buộc phải có:**
HTML của bạn phải chứa ít nhất 10 phần tử ngữ nghĩa khác nhau từ danh sách này:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Phần 3: Triển Khai HTML

**Mã hóa trang chủ blog của bạn theo các tiêu chuẩn sau:**

1. **Cấu trúc tài liệu**: Bao gồm DOCTYPE, html, head, và body đúng cách
2. **Đánh dấu ngữ nghĩa**: Sử dụng các phần tử HTML đúng mục đích
3. **Khả năng truy cập**: Bao gồm văn bản thay thế phù hợp cho hình ảnh và văn bản liên kết có ý nghĩa
4. **Chất lượng mã**: Sử dụng thụt lề nhất quán và bình luận có ý nghĩa
5. **Nội dung**: Bao gồm nội dung blog thực tế (bạn có thể sử dụng văn bản mẫu)

**Cấu trúc HTML mẫu:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Phần 4: Phản Ánh

**Viết một đoạn phản ánh ngắn (3-5 câu) về:**
- Những phần tử HTML nào bạn tự tin sử dụng nhất?
- Những thách thức nào bạn gặp phải khi lập kế hoạch hoặc mã hóa?
- HTML ngữ nghĩa đã giúp tổ chức nội dung của bạn như thế nào?
- Bạn sẽ làm gì khác trong dự án HTML tiếp theo của mình?

## Danh Sách Kiểm Tra Nộp Bài

**Trước khi nộp bài, hãy đảm bảo bạn đã:**
- [ ] Mô hình hình ảnh với các phần tử HTML được gắn nhãn
- [ ] Tệp HTML hoàn chỉnh với cấu trúc tài liệu đúng cách
- [ ] Sử dụng ít nhất 10 phần tử HTML ngữ nghĩa một cách phù hợp
- [ ] Bình luận có ý nghĩa giải thích cấu trúc mã của bạn
- [ ] Cú pháp HTML hợp lệ (kiểm tra trong trình duyệt)
- [ ] Đoạn phản ánh viết về các câu hỏi được đưa ra

## Tiêu Chí Đánh Giá

| Tiêu chí | Xuất sắc (4) | Đạt yêu cầu (3) | Đang phát triển (2) | Bắt đầu (1) |
|----------|---------------|----------------|----------------|---------------|
| **Lập Kế Hoạch & Thiết Kế** | Mô hình chi tiết, được gắn nhãn rõ ràng, thể hiện sự hiểu biết về bố cục và cấu trúc HTML ngữ nghĩa | Mô hình rõ ràng với hầu hết các phần được gắn nhãn phù hợp | Mô hình cơ bản với một số nhãn, thể hiện sự hiểu biết chung | Mô hình tối thiểu hoặc không rõ ràng, thiếu nhận diện phần phù hợp |
| **Sử Dụng HTML Ngữ Nghĩa** | Sử dụng 10+ phần tử ngữ nghĩa một cách phù hợp, thể hiện sự hiểu biết sâu sắc về cấu trúc HTML và khả năng truy cập | Sử dụng 8-9 phần tử ngữ nghĩa đúng cách, thể hiện sự hiểu biết tốt về đánh dấu ngữ nghĩa | Sử dụng 6-7 phần tử ngữ nghĩa, có một số nhầm lẫn về cách sử dụng phù hợp | Sử dụng ít hơn 6 phần tử hoặc sử dụng sai phần tử ngữ nghĩa |
| **Chất Lượng & Tổ Chức Mã** | Mã được tổ chức cực kỳ tốt, thụt lề đúng cách với bình luận toàn diện và cú pháp HTML hoàn hảo | Mã được tổ chức tốt với thụt lề hợp lý, bình luận hữu ích và cú pháp hợp lệ | Mã phần lớn được tổ chức với một số bình luận, có vấn đề nhỏ về cú pháp | Tổ chức kém, ít bình luận, nhiều lỗi cú pháp |
| **Khả Năng Truy Cập & Thực Hành Tốt Nhất** | Cân nhắc khả năng truy cập xuất sắc, văn bản thay thế có ý nghĩa, cấu trúc tiêu đề phù hợp, tuân theo tất cả các thực hành HTML hiện đại | Tính năng truy cập tốt, sử dụng tiêu đề và văn bản thay thế phù hợp, tuân theo hầu hết các thực hành tốt nhất | Một số cân nhắc về khả năng truy cập, văn bản thay thế và cấu trúc tiêu đề cơ bản | Tính năng truy cập hạn chế, cấu trúc tiêu đề kém, không tuân theo các thực hành tốt nhất |
| **Phản Ánh & Học Tập** | Phản ánh sâu sắc thể hiện sự hiểu biết sâu sắc về các khái niệm HTML và phân tích học tập có suy nghĩ | Phản ánh tốt thể hiện sự hiểu biết về các khái niệm chính và một số nhận thức về học tập | Phản ánh cơ bản với sự hiểu biết hạn chế về các khái niệm HTML hoặc quá trình học tập | Phản ánh tối thiểu hoặc thiếu, thể hiện ít sự hiểu biết về các khái niệm đã học |

## Tài Nguyên Học Tập

**Tài liệu tham khảo cần thiết:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Hướng dẫn đầy đủ về tất cả các phần tử HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Hiểu về đánh dấu ngữ nghĩa
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Tạo nội dung web dễ truy cập
- [HTML Validator](https://validator.w3.org/) - Kiểm tra cú pháp HTML của bạn

**Mẹo thành công:**
- Bắt đầu với mô hình của bạn trước khi viết bất kỳ mã nào
- Sử dụng công cụ dành cho nhà phát triển của trình duyệt để kiểm tra cấu trúc HTML của bạn
- Kiểm tra trang của bạn với các kích thước màn hình khác nhau (ngay cả khi không có CSS)
- Đọc HTML của bạn thành tiếng để kiểm tra xem cấu trúc có hợp lý không
- Cân nhắc cách trình đọc màn hình sẽ diễn giải cấu trúc trang của bạn

> 💡 **Nhớ rằng**: Bài tập này tập trung vào cấu trúc và ngữ nghĩa HTML. Đừng lo lắng về việc tạo kiểu trực quan – đó là nhiệm vụ của CSS! Trang của bạn có thể trông đơn giản, nhưng nó cần được cấu trúc tốt và có ý nghĩa.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.