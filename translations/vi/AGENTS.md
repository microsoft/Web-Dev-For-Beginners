# AGENTS.md

## Tổng quan dự án

Đây là khoá học giáo dục để dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Khung chương trình là một khoá học toàn diện kéo dài 12 tuần được phát triển bởi Microsoft Cloud Advocates, bao gồm 24 bài học thực hành về JavaScript, CSS và HTML.

### Các thành phần chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc được tổ chức thành các mô-đun dự án
- **Dự án thực tế**: Terrarium, Trò chơi đánh máy, Tiện ích mở rộng trình duyệt, Trò chơi vũ trụ, Ứng dụng Ngân hàng, Trình soạn thảo mã, và Trợ lý trò chuyện AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với 3 câu hỏi mỗi bài (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động hơn 50 ngôn ngữ thông qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến trúc

- Khoá học giáo dục với cấu trúc dựa trên bài học
- Mỗi thư mục bài học chứa README, ví dụ mã và giải pháp
- Các dự án độc lập trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch sử dụng GitHub Actions (co-op-translator)
- Tài liệu được cung cấp qua Docsify và có sẵn dưới dạng PDF

## Lệnh cài đặt

Kho chứa chủ yếu dành cho việc sử dụng nội dung giáo dục. Để làm việc với các dự án cụ thể:

### Cài đặt kho chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Cài đặt Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Bắt đầu máy chủ phát triển
npm run build      # Xây dựng cho sản xuất
npm run lint       # Chạy ESLint
```

### API dự án Ngân hàng (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Khởi động máy chủ API
npm run lint       # Chạy ESLint
npm run format     # Định dạng với Prettier
```

### Dự án tiện ích mở rộng trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Thực hiện theo hướng dẫn tải tiện ích mở rộng riêng cho trình duyệt
```

### Dự án trò chơi không gian

```bash
cd 6-space-game/solution
npm install
# Mở index.html trong trình duyệt hoặc sử dụng Live Server
```

### Dự án trò chuyện (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Đặt biến môi trường GITHUB_TOKEN
python api.py
```

## Quy trình phát triển

### Dành cho người đóng góp nội dung

1. **Fork kho lưu trữ** về tài khoản GitHub của bạn
2. **Clone bản fork** về máy tính cá nhân
3. **Tạo nhánh mới** cho các thay đổi của bạn
4. Thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong các thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho lưu trữ
2. Điều hướng tuần tự vào các thư mục bài học
3. Đọc các file README cho từng bài học
4. Hoàn thành các bài kiểm tra trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm theo các ví dụ mã trong các thư mục bài học
6. Hoàn thành bài tập và thử thách
7. Tham gia các bài kiểm tra sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` trong thư mục gốc (cổng 3000)
- **Quiz App**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng tiện ích mở rộng Live Server của VS Code cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn kiểm thử

### Kiểm thử Quiz App

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về kiểu mã nguồn
npm run build      # Xác nhận quá trình xây dựng thành công
```

### Kiểm thử API ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về phong cách mã
node server.js     # Xác minh máy chủ khởi động mà không có lỗi
```

### Phương pháp kiểm thử chung

- Đây là khoá học giáo dục nên không có kiểm thử tự động toàn diện
- Kiểm thử thủ công tập trung vào:
  - Các ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động chính xác
  - Xây dựng dự án hoàn thành thành công
  - Ví dụ tuân theo các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh các liên kết markdown hợp lệ
- Thử các ví dụ mã trong trình duyệt hoặc Node.js
- Kiểm tra rằng bản dịch giữ nguyên cấu trúc đúng

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint tiêu chuẩn có trong các dự án
- Đặt tên biến và hàm có ý nghĩa để dễ hiểu cho người học
- Thêm chú thích giải thích khái niệm cho người học
- Định dạng theo Prettier khi được cấu hình

### HTML/CSS

- Sử dụng các phần tử HTML5 có ngữ nghĩa
- Thiết kế đáp ứng (responsive)
- Quy ước đặt tên class rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân theo hướng dẫn phong cách PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Dùng gợi ý kiểu (type hints) khi giúp ích cho việc học

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Các khối mã có chỉ định ngôn ngữ
- Liên kết đến tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản thay thế cho hình ảnh nhằm hỗ trợ truy cập

### Tổ chức tệp

- Các bài học được đánh số theo thứ tự (1-getting-started-lessons, 2-js-basics, vv)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Hình ảnh được lưu trong thư mục riêng theo bài `images/`
- Bản dịch nằm trong cấu trúc `translations/{language-code}/`

## Xây dựng và Triển khai

### Triển khai Quiz App (Azure Static Web Apps)

Quiz-app được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua workflow GitHub Actions khi đẩy lên nhánh main
```

Cấu hình Azure Static Web Apps:
- **Vị trí app**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo PDF tài liệu

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo PDF từ docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify trên toàn hệ thống
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây dựng dự án riêng

Mỗi thư mục dự án có thể có quy trình build riêng:
- Dự án Vue: `npm run build` tạo gói sản xuất
- Dự án tĩnh: Không có bước build, phục vụ file trực tiếp

## Hướng dẫn Pull Request

### Định dạng tiêu đề

Dùng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm câu đố mới cho bài X`
- `[Lesson-3] Sửa lỗi đánh máy trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài 5`
- `[Docs] Cập nhật hướng dẫn cài đặt`

### Các kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong các thư mục dự án bị ảnh hưởng
   - Sửa tất cả lỗi và cảnh báo lint

2. **Xác minh xây dựng**:
   - Chạy `npm run build` nếu áp dụng được
   - Đảm bảo không có lỗi xây dựng

3. **Kiểm tra liên kết**:
   - Thử tất cả các liên kết markdown
   - Xác minh tham chiếu hình ảnh đúng

4. **Xem xét nội dung**:
   - Đọc kỹ để không có lỗi chính tả và ngữ pháp
   - Đảm bảo ví dụ mã chính xác và mang tính giáo dục
   - Xác minh bản dịch giữ nguyên nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động lần đầu PR)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình đánh giá

- PR được duyệt bởi người bảo trì và cộng đồng
- Ưu tiên tính rõ ràng giáo dục
- Ví dụ mã nên theo các thực hành tốt nhất hiện tại
- Bản dịch được xem xét kỹ về độ chính xác và phù hợp văn hóa

## Hệ thống dịch

### Dịch tự động

- Sử dụng GitHub Actions với workflow co-op-translator
- Dịch tự động hơn 50 ngôn ngữ
- Tệp gốc trong các thư mục chính
- Tệp dịch trong thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thủ công

1. Tìm tệp trong `translations/{language-code}/`
2. Cải thiện nội dung đồng thời giữ cấu trúc
3. Đảm bảo ví dụ mã còn hoạt động
4. Kiểm tra nội dung câu đố được bản địa hóa

### Siêu dữ liệu bản dịch

Các tệp dịch bao gồm phần đầu siêu dữ liệu:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Gỡ lỗi và Khắc phục sự cố

### Các vấn đề phổ biến

**Ứng dụng quiz không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xoá `node_modules` và `package-lock.json`, rồi chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định: Vite dùng cổng 5173)

**Máy chủ API không khởi động**:
- Kiểm tra phiên bản Node.js >=10
- Kiểm tra xem cổng đã được sử dụng chưa
- Đảm bảo đã cài đặt đầy đủ phụ thuộc với `npm install`

**Tiện ích mở rộng trình duyệt không tải được**:
- Kiểm tra file manifest.json đúng định dạng
- Kiểm tra console trình duyệt có lỗi hay không
- Làm theo hướng dẫn cài đặt tiện ích mở rộng riêng cho trình duyệt

**Vấn đề dự án trò chuyện Python**:
- Đảm bảo đã cài đặt gói OpenAI: `pip install openai`
- Kiểm tra biến môi trường GITHUB_TOKEN đã được thiết lập
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài đặt docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc kho lưu trữ
- Kiểm tra file `docs/_sidebar.md` tồn tại

### Mẹo về môi trường phát triển

- Sử dụng VS Code với tiện ích mở rộng Live Server cho dự án HTML
- Cài đặt tiện ích ESLint và Prettier để định dạng nhất quán
- Dùng công cụ DevTools trình duyệt để gỡ lỗi JavaScript
- Với dự án Vue, cài tiện ích Vue DevTools trên trình duyệt

### Lưu ý về hiệu năng

- Số lượng lớn tệp dịch (hơn 50 ngôn ngữ) làm cho bản clone đầy đủ rất nặng
- Dùng clone nông nếu chỉ làm việc nội dung: `git clone --depth 1`
- Loại trừ bản dịch khỏi tìm kiếm khi làm việc nội dung tiếng Anh
- Quy trình build có thể chậm lần chạy đầu (npm install, build Vite)

## Các cân nhắc về bảo mật

### Biến môi trường

- Không bao giờ commit khóa API vào kho lưu trữ
- Sử dụng file `.env` (đã có trong `.gitignore`)
- Tài liệu biến môi trường bắt buộc trong các README dự án

### Dự án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Giữ phụ thuộc luôn cập nhật
- Token GitHub cần quyền tối thiểu cần thiết

### Truy cập GitHub Models

- Yêu cầu Personal Access Tokens (PAT) để truy cập GitHub Models
- Token nên lưu trữ dưới biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng mục tiêu

- Người mới hoàn toàn về phát triển web
- Sinh viên và người tự học
- Giáo viên sử dụng khung chương trình trong lớp học
- Nội dung thiết kế cho khả năng tiếp cận và phát triển kỹ năng từ từ

### Triết lý giáo dục

- Học dựa trên dự án
- Kiểm tra kiến thức thường xuyên (bài kiểm tra)
- Bài tập mã hóa thực hành
- Ví dụ ứng dụng thực tế
- Tập trung vào nền tảng trước khi học framework

### Bảo trì kho lưu trữ

- Cộng đồng học viên và người đóng góp năng động
- Cập nhật thường xuyên phụ thuộc và nội dung
- Theo dõi issues và thảo luận bởi người quản lý
- Cập nhật bản dịch tự động qua GitHub Actions

### Tài nguyên liên quan

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) khuyến nghị cho người học
- Các khoá học bổ sung: AI sinh tạo, Khoa học dữ liệu, ML, IoT có sẵn

### Làm việc với các dự án cụ thể

Hướng dẫn chi tiết về từng dự án có trong file README:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng có xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi canvas
- `9-chat-project/README.md` - Dự án trợ lý trò chuyện AI

### Cấu trúc monorepo

Mặc dù không phải monorepo truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học là riêng biệt
- Các dự án không chia sẻ phụ thuộc
- Làm việc trên dự án cá nhân mà không ảnh hưởng đến dự án khác
- Clone toàn bộ kho để có trải nghiệm toàn diện của khung chương trình

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố từ chối trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ gốc nên được coi là nguồn tham khảo chính xác nhất. Đối với những thông tin quan trọng, chúng tôi khuyến nghị dịch bởi chuyên gia dịch thuật có kinh nghiệm. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hay giải thích sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->