# AGENTS.md

## Tổng quan dự án

Đây là kho tài liệu giáo dục dành cho việc giảng dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Chương trình học là một khóa học toàn diện kéo dài 12 tuần được phát triển bởi Microsoft Cloud Advocates, bao gồm 24 bài học thực hành về JavaScript, CSS và HTML.

### Các thành phần chính

- **Nội dung giáo dục**: 24 bài học được tổ chức theo các mô-đun dựa trên dự án
- **Dự án thực hành**: Terrarium, Trò chơi đánh máy, Tiện ích mở rộng trình duyệt, Trò chơi không gian, Ứng dụng ngân hàng, Trình chỉnh sửa mã, và Trợ lý chat AI
- **Câu đố tương tác**: 48 câu đố với 3 câu hỏi mỗi bài (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động sang hơn 50 ngôn ngữ thông qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến trúc

- Kho tài liệu giáo dục với cấu trúc dựa trên bài học
- Mỗi thư mục bài học chứa README, ví dụ mã và giải pháp
- Các dự án độc lập trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch thuật sử dụng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có sẵn dưới dạng PDF

## Lệnh thiết lập

Kho tài liệu này chủ yếu dành cho việc tiêu thụ nội dung giáo dục. Để làm việc với các dự án cụ thể:

### Thiết lập kho chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Thiết lập ứng dụng câu đố (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API dự án ngân hàng (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Dự án tiện ích mở rộng trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Dự án trò chơi không gian

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Dự án chat (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Quy trình phát triển

### Dành cho người đóng góp nội dung

1. **Fork kho tài liệu** vào tài khoản GitHub của bạn
2. **Clone fork của bạn** về máy
3. **Tạo một nhánh mới** cho các thay đổi của bạn
4. Thực hiện thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong các thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho tài liệu
2. Điều hướng đến các thư mục bài học theo thứ tự
3. Đọc các tệp README cho từng bài học
4. Hoàn thành câu đố trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm việc qua các ví dụ mã trong các thư mục bài học
6. Hoàn thành bài tập và thử thách
7. Làm câu đố sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` trong thư mục gốc (port 3000)
- **Ứng dụng câu đố**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng tiện ích Live Server của VS Code cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn kiểm tra

### Kiểm tra ứng dụng câu đố

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Kiểm tra API ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Phương pháp kiểm tra chung

- Đây là kho tài liệu giáo dục không có các bài kiểm tra tự động toàn diện
- Kiểm tra thủ công tập trung vào:
  - Ví dụ mã chạy không có lỗi
  - Các liên kết trong tài liệu hoạt động chính xác
  - Dự án được xây dựng thành công
  - Các ví dụ tuân theo các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh các liên kết markdown hợp lệ
- Kiểm tra ví dụ mã trong trình duyệt hoặc Node.js
- Đảm bảo rằng các bản dịch duy trì cấu trúc đúng

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint tiêu chuẩn được cung cấp trong các dự án
- Sử dụng tên biến và hàm có ý nghĩa để dễ hiểu cho người học
- Thêm nhận xét giải thích các khái niệm cho người học
- Định dạng bằng Prettier nếu được cấu hình

### HTML/CSS

- Các phần tử HTML5 có tính ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy ước đặt tên lớp rõ ràng
- Nhận xét giải thích các kỹ thuật CSS cho người học

### Python

- Hướng dẫn phong cách PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Gợi ý kiểu nơi hữu ích cho việc học

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Các khối mã có chỉ định ngôn ngữ
- Liên kết đến các tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong các thư mục `images/`
- Văn bản thay thế cho hình ảnh để tăng khả năng tiếp cận

### Tổ chức tệp

- Các bài học được đánh số theo thứ tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Hình ảnh được lưu trữ trong các thư mục `images/` cụ thể cho bài học
- Các bản dịch trong cấu trúc `translations/{language-code}/`

## Xây dựng và triển khai

### Triển khai ứng dụng câu đố (Azure Static Web Apps)

Ứng dụng quiz-app được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Cấu hình Azure Static Web Apps:
- **Vị trí ứng dụng**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo tài liệu PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Xây dựng dự án cụ thể

Mỗi thư mục dự án có thể có quy trình xây dựng riêng:
- Dự án Vue: `npm run build` tạo các gói sản phẩm
- Dự án tĩnh: Không có bước xây dựng, phục vụ tệp trực tiếp

## Hướng dẫn pull request

### Định dạng tiêu đề

Sử dụng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm câu đố mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài học 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong các thư mục dự án bị ảnh hưởng
   - Sửa tất cả lỗi và cảnh báo linting

2. **Xác minh xây dựng**:
   - Chạy `npm run build` nếu áp dụng
   - Đảm bảo không có lỗi xây dựng

3. **Xác thực liên kết**:
   - Kiểm tra tất cả các liên kết markdown
   - Xác minh các tham chiếu hình ảnh hoạt động

4. **Xem xét nội dung**:
   - Đọc lại để kiểm tra lỗi chính tả và ngữ pháp
   - Đảm bảo ví dụ mã chính xác và mang tính giáo dục
   - Xác minh các bản dịch duy trì ý nghĩa ban đầu

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động trên PR đầu tiên)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số vấn đề trong mô tả PR nếu áp dụng

### Quy trình xem xét

- PR được xem xét bởi người duy trì và cộng đồng
- Ưu tiên sự rõ ràng trong giáo dục
- Ví dụ mã nên tuân theo các thực hành tốt nhất hiện tại
- Các bản dịch được xem xét để đảm bảo độ chính xác và phù hợp văn hóa

## Hệ thống dịch thuật

### Dịch tự động

- Sử dụng GitHub Actions với workflow co-op-translator
- Dịch tự động sang hơn 50 ngôn ngữ
- Tệp nguồn trong các thư mục chính
- Tệp dịch trong các thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thuật thủ công

1. Tìm tệp trong `translations/{language-code}/`
2. Thực hiện cải tiến trong khi duy trì cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm tra bất kỳ nội dung câu đố được bản địa hóa

### Metadata dịch thuật

Các tệp dịch bao gồm tiêu đề metadata:
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

## Gỡ lỗi và khắc phục sự cố

### Các vấn đề thường gặp

**Ứng dụng câu đố không khởi động**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định: Vite sử dụng cổng 5173)

**Máy chủ API không khởi động**:
- Xác minh phiên bản Node.js đáp ứng yêu cầu tối thiểu (node >=10)
- Kiểm tra xem cổng đã được sử dụng hay chưa
- Đảm bảo tất cả các phụ thuộc được cài đặt với `npm install`

**Tiện ích mở rộng trình duyệt không tải**:
- Xác minh manifest.json được định dạng đúng
- Kiểm tra lỗi trong bảng điều khiển trình duyệt
- Làm theo hướng dẫn cài đặt tiện ích mở rộng cụ thể cho trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo gói OpenAI được cài đặt: `pip install openai`
- Xác minh biến môi trường GITHUB_TOKEN đã được thiết lập
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài đặt docsify-cli toàn cầu: `npm install -g docsify-cli`
- Chạy từ thư mục gốc của kho tài liệu
- Kiểm tra rằng `docs/_sidebar.md` tồn tại

### Mẹo môi trường phát triển

- Sử dụng VS Code với tiện ích Live Server cho các dự án HTML
- Cài đặt tiện ích ESLint và Prettier để định dạng nhất quán
- Sử dụng DevTools của trình duyệt để gỡ lỗi JavaScript
- Đối với các dự án Vue, cài đặt tiện ích Vue DevTools cho trình duyệt

### Cân nhắc hiệu suất

- Số lượng lớn tệp dịch (hơn 50 ngôn ngữ) khiến việc clone đầy đủ trở nên lớn
- Sử dụng clone nông nếu chỉ làm việc với nội dung: `git clone --depth 1`
- Loại trừ các bản dịch khỏi tìm kiếm khi làm việc với nội dung tiếng Anh
- Quy trình xây dựng có thể chậm trong lần chạy đầu tiên (npm install, Vite build)

## Cân nhắc bảo mật

### Biến môi trường

- Không bao giờ commit khóa API vào kho tài liệu
- Sử dụng tệp `.env` (đã có trong `.gitignore`)
- Tài liệu các biến môi trường cần thiết trong README của dự án

### Dự án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Giữ các phụ thuộc được cập nhật
- Token GitHub nên có quyền tối thiểu cần thiết

### Truy cập GitHub Models

- Yêu cầu Personal Access Tokens (PAT) cho GitHub Models
- Token nên được lưu trữ dưới dạng biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng mục tiêu

- Người mới bắt đầu hoàn toàn với phát triển web
- Sinh viên và người tự học
- Giáo viên sử dụng chương trình học trong lớp học
- Nội dung được thiết kế để dễ tiếp cận và xây dựng kỹ năng dần dần

### Triết lý giáo dục

- Phương pháp học tập dựa trên dự án
- Kiểm tra kiến thức thường xuyên (câu đố)
- Bài tập mã hóa thực hành
- Ví dụ ứng dụng thực tế
- Tập trung vào các kiến thức cơ bản trước khi học framework

### Bảo trì kho tài liệu

- Cộng đồng người học và người đóng góp tích cực
- Cập nhật thường xuyên các phụ thuộc và nội dung
- Các vấn đề và thảo luận được giám sát bởi người duy trì
- Cập nhật bản dịch tự động thông qua GitHub Actions

### Tài nguyên liên quan

- [Các mô-đun Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) được khuyến nghị cho người học
- Các khóa học bổ sung: Generative AI, Khoa học dữ liệu, ML, IoT có sẵn

### Làm việc với các dự án cụ thể

Để biết hướng dẫn chi tiết về từng dự án, tham khảo các tệp README trong:
- `quiz-app/README.md` - Ứng dụng câu đố Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng với xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi dựa trên Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Mặc dù không phải là một monorepo truyền thống, kho tài liệu này chứa nhiều dự án độc lập:
- Mỗi bài học là tự chứa
- Các dự án không chia sẻ phụ thuộc
- Làm việc trên các dự án riêng lẻ mà không ảnh hưởng đến các dự án khác
- Clone toàn bộ kho tài liệu để trải nghiệm chương trình học đầy đủ

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.