# AGENTS.md

## Tổng quan dự án

Đây là khoá học giáo dục nhằm dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Khoá học là một khóa toàn diện kéo dài 12 tuần do Microsoft Cloud Advocates phát triển, với 24 bài học thực hành bao gồm JavaScript, CSS, và HTML.

### Các thành phần chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc, tổ chức trong các mô-đun dự án
- **Dự án thực tế**: Terrarium, Trò chơi gõ chữ, Tiện ích mở rộng trình duyệt, Trò chơi không gian, Ứng dụng ngân hàng, Trình chỉnh sửa mã, và Trợ lý chat AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với 3 câu hỏi mỗi bài (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động hơn 50 ngôn ngữ qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến trúc

- Khoá học giáo dục với cấu trúc dựa trên bài học
- Mỗi thư mục bài học chứa README, ví dụ mã, và giải pháp
- Các dự án độc lập trong thư mục riêng (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch thuật sử dụng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có sẵn định dạng PDF

## Lệnh thiết lập

Kho lưu trữ này chủ yếu dành cho việc tiêu thụ nội dung giáo dục. Để làm việc với các dự án cụ thể:

### Thiết lập kho chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Thiết lập Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Khởi động máy chủ phát triển
npm run build      # Xây dựng cho môi trường sản xuất
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

### Các dự án Tiện ích mở rộng trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Thực hiện theo hướng dẫn tải tiện ích mở rộng dành riêng cho trình duyệt
```

### Các dự án Trò chơi không gian

```bash
cd 6-space-game/solution
npm install
# Mở index.html trong trình duyệt hoặc sử dụng Live Server
```

### Dự án Chat (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Đặt biến môi trường GITHUB_TOKEN
python api.py
```

## Quy trình phát triển

### Dành cho người đóng góp nội dung

1. **Fork kho lưu trữ** vào tài khoản GitHub của bạn
2. **Clone** bản fork về máy cục bộ
3. **Tạo nhánh mới** cho các thay đổi của bạn
4. Thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong các thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho lưu trữ
2. Điều hướng tuần tự trong các thư mục bài học
3. Đọc các file README của từng bài học
4. Hoàn thành bài kiểm tra trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm việc qua các ví dụ mã trong thư mục bài học
6. Hoàn thành các bài tập và thử thách
7. Làm bài kiểm tra sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` ở thư mục gốc (cổng 3000)
- **Quiz App**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng tiện ích mở rộng VS Code Live Server cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn thử nghiệm

### Thử nghiệm Quiz App

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về phong cách mã
npm run build      # Xác minh việc xây dựng thành công
```

### Thử nghiệm API Ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về phong cách mã
node server.js     # Xác minh máy chủ khởi động mà không có lỗi
```

### Cách tiếp cận thử nghiệm chung

- Đây là kho học tập không có các bài kiểm tra tự động toàn diện
- Thử nghiệm thủ công tập trung vào:
  - Ví dụ mã chạy không lỗi
  - Liên kết trong tài liệu hoạt động đúng
  - Các bản build dự án hoàn tất thành công
  - Ví dụ theo đúng các phương pháp hay nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh các liên kết markdown hợp lệ
- Thử ví dụ mã trong trình duyệt hoặc Node.js
- Kiểm tra dịch giữ nguyên cấu trúc chính xác

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint chuẩn trong các dự án
- Sử dụng tên biến và hàm có ý nghĩa rõ ràng cho mục đích giáo dục
- Thêm chú thích giải thích khái niệm cho người học
- Định dạng bằng Prettier khi có cấu hình

### HTML/CSS

- Sử dụng các phần tử HTML5 mang tính ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy ước đặt tên class rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Theo chuẩn phong cách PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Gợi ý kiểu nơi hữu ích cho việc học

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Khối mã có chỉ định ngôn ngữ
- Liên kết tới tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản thay thế cho hình ảnh để đảm bảo khả năng truy cập

### Tổ chức file

- Các bài học đánh số tuần tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Hình ảnh lưu trong thư mục `images/` thuộc từng bài học
- Các bản dịch trong cấu trúc `translations/{language-code}/`

## Xây dựng và triển khai

### Triển khai Quiz App (Azure Static Web Apps)

quiz-app được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua workflow GitHub Actions khi đẩy lên nhánh main
```

Cấu hình Azure Static Web Apps:
- **Vị trí app**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Quy trình tự động**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo PDF tài liệu

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo PDF từ tài liệu docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify trên toàn cục
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây dựng riêng cho từng dự án

Mỗi thư mục dự án có thể có quy trình xây dựng riêng:
- Dự án Vue: `npm run build` tạo bundle sản xuất
- Dự án tĩnh: Không có bước build, phục vụ file trực tiếp

## Hướng dẫn gửi Pull Request

### Định dạng tiêu đề

Sử dụng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm câu hỏi mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài học 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Các kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong các thư mục dự án liên quan
   - Sửa tất cả lỗi và cảnh báo lint

2. **Xác nhận build**:
   - Chạy `npm run build` nếu có thể
   - Đảm bảo không có lỗi build

3. **Kiểm tra liên kết**:
   - Thử tất cả liên kết markdown
   - Đảm bảo tham chiếu ảnh hoạt động

4. **Đánh giá nội dung**:
   - Đọc lại chính tả và ngữ pháp
   - Đảm bảo ví dụ mã đúng và mang tính giáo dục
   - Kiểm tra bản dịch giữ nguyên ý nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động khi PR đầu tiên)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình đánh giá

- PR được duyệt bởi người quản lý và cộng đồng
- Ưu tiên rõ ràng về tính giáo dục
- Ví dụ mã phải theo các phương pháp tốt nhất hiện tại
- Bản dịch được xem xét về độ chính xác và phù hợp văn hóa

## Hệ thống dịch dịch tự động

### Dịch tự động

- Sử dụng GitHub Actions với workflow co-op-translator
- Dịch hơn 50 ngôn ngữ tự động
- File nguồn trong các thư mục chính
- File dịch trong thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thủ công

1. Tìm file trong `translations/{language-code}/`
2. Cải thiện trong khi giữ nguyên cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Thử các nội dung bài kiểm tra đã địa phương hóa

### Siêu dữ liệu dịch

File dịch bao gồm phần đầu metadata:
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

### Các sự cố phổ biến

**Quiz app không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định: Vite dùng cổng 5173)

**API server không khởi động được**:
- Đảm bảo phiên bản Node.js phù hợp (node >=10)
- Kiểm tra xem cổng đã được sử dụng chưa
- Đảm bảo cài đủ phụ thuộc với `npm install`

**Tiện ích mở rộng trình duyệt không tải được**:
- Kiểm tra file manifest.json định dạng đúng
- Xem console trình duyệt lỗi
- Làm theo hướng dẫn cài tiện ích mở rộng trình duyệt cụ thể

**Vấn đề dự án chat Python**:
- Đảm bảo cài package OpenAI: `pip install openai`
- Kiểm tra biến môi trường GITHUB_TOKEN đã thiết lập
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc kho
- Kiểm tra `docs/_sidebar.md` tồn tại

### Mẹo môi trường phát triển

- Dùng VS Code với tiện ích mở rộng Live Server cho dự án HTML
- Cài ESLint và Prettier để định dạng nhất quán
- Dùng DevTools trình duyệt để gỡ lỗi JavaScript
- Với dự án Vue, cài tiện ích mở rộng Vue DevTools trình duyệt

### Cân nhắc hiệu năng

- Số lượng file dịch lớn (50+ ngôn ngữ) khiến clone đầy đủ rất nặng
- Dùng clone nông nếu chỉ làm việc trên nội dung: `git clone --depth 1`
- Loại trừ thư mục dịch khỏi tìm kiếm khi làm việc với nội dung tiếng Anh
- Quy trình build có thể chậm lần đầu (npm install, build Vite)

## Cân nhắc bảo mật

### Biến môi trường

- Không bao giờ commit khoá API vào kho lưu trữ
- Sử dụng file `.env` (đã được liệt kê trong `.gitignore`)
- Đưa ra tài liệu các biến môi trường cần thiết trong README dự án

### Dự án Python

- Dùng môi trường ảo: `python -m venv venv`
- Giữ phụ thuộc luôn cập nhật
- Token GitHub nên có quyền tối thiểu cần thiết

### Truy cập GitHub Models

- Cần token truy cập cá nhân (PAT) cho GitHub Models
- Token nên lưu ở biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng hướng đến

- Người mới hoàn toàn bắt đầu phát triển web
- Sinh viên và người tự học
- Giáo viên sử dụng chương trình trong lớp học
- Nội dung thiết kế để dễ tiếp cận và xây dựng kỹ năng dần dần

### Triết lý giáo dục

- Phương pháp học dựa trên dự án
- Kiểm tra kiến thức thường xuyên (quiz)
- Bài tập mã hóa thực hành
- Ví dụ ứng dụng thực tế
- Tập trung vào nền tảng trước khi học framework

### Bảo trì kho

- Cộng đồng học tập và đóng góp hoạt động
- Cập nhật thường xuyên các phụ thuộc và nội dung
- Vấn đề và thảo luận được quản lý bởi người duy trì
- Cập nhật dịch tự động qua GitHub Actions

### Tài nguyên liên quan

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) được khuyến nghị cho người học
- Các khoá học bổ sung: AI sinh tạo, Khoa học dữ liệu, ML, IoT

### Làm việc với các dự án cụ thể

Hướng dẫn chi tiết cho từng dự án có trong file README tại:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng có xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Mặc dù không phải monorepo truyền thống, kho lưu trữ này chứa nhiều dự án riêng biệt:
- Mỗi bài học là độc lập
- Các dự án không chia sẻ phụ thuộc
- Làm việc riêng từng dự án mà không ảnh hưởng nhau
- Clone toàn bộ kho để có trải nghiệm khoá học đầy đủ

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố từ chối trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ gốc của nó nên được coi là nguồn tin cậy chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp do con người thực hiện. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->