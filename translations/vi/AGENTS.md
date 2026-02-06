# AGENTS.md

## Tổng quan dự án

Đây là khoá học giáo dục dùng để dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Chương trình học là một khoá học toàn diện kéo dài 12 tuần do Microsoft Cloud Advocates phát triển, gồm 24 bài học thực hành về JavaScript, CSS và HTML.

### Thành phần chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc được tổ chức thành các mô-đun dựa trên dự án
- **Dự án thực hành**: Terrarium, Trò chơi gõ phím, Tiện ích trình duyệt, Trò chơi vũ trụ, Ứng dụng ngân hàng, Trình soạn thảo mã, và Trợ lý Chat AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với mỗi bài có 3 câu hỏi (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động cho hơn 50 ngôn ngữ qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho dự án AI)

### Kiến trúc

- Khoá học có cấu trúc dựa trên các bài học
- Mỗi thư mục bài học chứa README, ví dụ mã và giải pháp
- Các dự án độc lập được đặt trong các thư mục riêng (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch thuật dùng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có sẵn dưới dạng PDF

## Lệnh thiết lập

Kho chứa này chủ yếu để tiêu thụ nội dung giáo dục. Để làm việc với các dự án cụ thể:

### Thiết lập kho chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Thiết lập ứng dụng Quiz (Vue 3 + Vite)

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
npm run format     # Định dạng bằng Prettier
```

### Dự án tiện ích trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Làm theo hướng dẫn tải tiện ích mở rộng cụ thể cho trình duyệt
```

### Dự án trò chơi vũ trụ

```bash
cd 6-space-game/solution
npm install
# Mở index.html trong trình duyệt hoặc sử dụng Live Server
```

### Dự án Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Đặt biến môi trường GITHUB_TOKEN
python api.py
```

## Quy trình phát triển

### Dành cho người đóng góp nội dung

1. **Fork kho lưu trữ** vào tài khoản GitHub của bạn
2. **Clone kho fork** về máy cục bộ của bạn
3. **Tạo nhánh mới** để thực hiện thay đổi
4. Thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra thay đổi mã trong các thư mục dự án tương ứng
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho lưu trữ
2. Điều hướng tuần tự vào các thư mục bài học
3. Đọc các file README cho mỗi bài học
4. Hoàn thành các bài kiểm tra trước bài học tại https://ff-quizzes.netlify.app/web/
5. Thực hành các ví dụ mã trong thư mục bài học
6. Hoàn thành bài tập và thách thức
7. Tham gia các bài kiểm tra sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` ở thư mục gốc (cổng 3000)
- **Ứng dụng Quiz**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Dùng tiện ích mở rộng Live Server của VS Code cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn kiểm thử

### Kiểm thử ứng dụng Quiz

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về phong cách mã
npm run build      # Xác minh xây dựng thành công
```

### Kiểm thử API Ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về kiểu mã
node server.js     # Xác minh máy chủ khởi động mà không có lỗi
```

### Phương pháp kiểm thử chung

- Đây là kho giáo dục không có bài kiểm thử tự động đầy đủ
- Kiểm thử thủ công tập trung vào:
  - Ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động chính xác
  - Xây dựng dự án hoàn thành thành công
  - Ví dụ phù hợp với các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh các liên kết markdown hợp lệ
- Kiểm thử các ví dụ mã trong trình duyệt hoặc Node.js
- Kiểm tra rằng bản dịch giữ đúng cấu trúc

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp hiện đại ES6+
- Tuân theo cấu hình ESLint chuẩn trong các dự án
- Sử dụng tên biến, hàm rõ ràng, dễ hiểu cho mục đích giáo dục
- Thêm chú thích giải thích khái niệm cho người học
- Định dạng bằng Prettier nếu được cấu hình

### HTML/CSS

- Các phần tử HTML5 có ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy ước đặt tên lớp rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân thủ quy chuẩn style PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Gợi ý type annotation khi hữu ích cho học tập

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Khối mã có chỉ định ngôn ngữ
- Liên kết đến tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản alt cho hình ảnh để hỗ trợ truy cập

### Tổ chức file

- Bài học đánh số tuần tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Hình ảnh nằm trong thư mục `images/` theo bài học
- Bản dịch trong cấu trúc `translations/{language-code}/`

## Xây dựng và Triển khai

### Triển khai ứng dụng Quiz (Azure Static Web Apps)

Ứng dụng quiz-app được cấu hình cho triển khai Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua workflow GitHub Actions khi đẩy lên nhánh main
```

Cấu hình Azure Static Web Apps:
- **Vị trí ứng dụng**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo PDF tài liệu

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo PDF từ docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify toàn cục
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây dựng dự án riêng

Mỗi thư mục dự án có thể có quy trình xây dựng riêng:
- Dự án Vue: `npm run build` tạo gói sản xuất
- Dự án tĩnh: không cần bước xây dựng, phục vụ tệp trực tiếp

## Hướng dẫn Pull Request

### Định dạng tiêu đề

Sử dụng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm bài trắc nghiệm mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài học 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Các kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong các thư mục dự án bị ảnh hưởng
   - Sửa tất cả lỗi và cảnh báo lint

2. **Xác minh xây dựng**:
   - Chạy `npm run build` nếu áp dụng
   - Đảm bảo không có lỗi khi xây dựng

3. **Xác thực liên kết**:
   - Kiểm tra tất cả liên kết markdown
   - Xác minh tham chiếu hình ảnh hoạt động

4. **Đánh giá nội dung**:
   - Đọc kỹ chính tả và ngữ pháp
   - Đảm bảo ví dụ mã chính xác và mang tính giáo dục
   - Xác minh bản dịch giữ nguyên ý nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động khi PR đầu tiên)
- Tuân thủ [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình xem xét

- PR được xem xét bởi duy trì viên và cộng đồng
- Ưu tiên sự rõ ràng giáo dục
- Ví dụ mã nên tuân theo các thực hành tốt nhất hiện hành
- Bản dịch được kiểm tra về độ chính xác và phù hợp văn hóa

## Hệ thống dịch thuật

### Dịch tự động

- Sử dụng GitHub Actions với workflow co-op-translator
- Dịch tự động sang hơn 50 ngôn ngữ
- Tệp nguồn trong các thư mục chính
- Tệp dịch trong thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thủ công

1. Xác định tệp trong `translations/{language-code}/`
2. Cải tiến giữ nguyên cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm thử nội dung bài kiểm tra được địa phương hóa

### Metadata bản dịch

Các tệp dịch có đầu mục metadata:
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

### Vấn đề phổ biến

**Ứng dụng quiz không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xoá `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định Vite dùng cổng 5173)

**Máy chủ API không khởi động được**:
- Xác minh phiên bản Node.js đủ điều kiện (node >=10)
- Kiểm tra xem cổng đã được sử dụng chưa
- Đảm bảo đã cài đặt tất cả phụ thuộc qua `npm install`

**Tiện ích mở rộng trình duyệt không tải**:
- Kiểm tra manifest.json đúng định dạng
- Xem console trình duyệt báo lỗi
- Thực hiện theo hướng dẫn cài tiện ích mở rộng cho từng trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo đã cài OpenAI package: `pip install openai`
- Xác minh biến môi trường GITHUB_TOKEN đã được đặt
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy ở thư mục gốc kho
- Kiểm tra file `docs/_sidebar.md` tồn tại

### Mẹo môi trường phát triển

- Dùng VS Code với tiện ích Live Server cho dự án HTML
- Cài ESLint và Prettier để định dạng nhất quán
- Dùng DevTools trình duyệt để gỡ lỗi JavaScript
- Với dự án Vue, cài tiện ích Vue DevTools trên trình duyệt

### Cân nhắc hiệu năng

- Số lượng tệp dịch lớn (50+ ngôn ngữ) làm clone đầy đủ nặng
- Dùng clone nông nếu chỉ làm việc trên nội dung: `git clone --depth 1`
- Loại trừ bản dịch khỏi tìm kiếm khi làm việc với tiếng Anh
- Quy trình build có thể chậm lần đầu (npm install, build Vite)

## Cân nhắc bảo mật

### Biến môi trường

- Khoá API không bao giờ được đưa vào kho
- Dùng file `.env` (đã nằm trong `.gitignore`)
- Tài liệu các biến môi trường cần thiết trong README dự án

### Dự án Python

- Dùng môi trường ảo: `python -m venv venv`
- Cập nhật phụ thuộc thường xuyên
- Token GitHub chỉ có quyền tối thiểu cần thiết

### Truy cập GitHub Models

- Cần dùng Personal Access Tokens (PAT) cho GitHub Models
- Token được lưu làm biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng mục tiêu

- Người mới hoàn toàn với phát triển web
- Học sinh và người tự học
- Giáo viên dùng chương trình trong lớp học
- Nội dung thiết kế dễ tiếp cận và xây dựng kỹ năng dần dần

### Triết lý giáo dục

- Phương pháp học dựa trên dự án
- Kiểm tra kiến thức thường xuyên (bài kiểm tra)
- Bài tập mã thực hành
- Ví dụ áp dụng thực tế
- Tập trung kiến thức cơ bản trước các framework

### Bảo trì kho

- Cộng đồng học và đóng góp năng động
- Cập nhật phụ thuộc và nội dung định kỳ
- Giám sát issue và thảo luận bởi duy trì viên
- Cập nhật dịch tự động qua GitHub Actions

### Tài nguyên liên quan

- [Các module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Trung tâm Sinh viên](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) khuyên dùng cho người học
- Các khoá học bổ sung: AI tổng hợp, Khoa học dữ liệu, ML, IoT có sẵn

### Làm việc với dự án cụ thể

Hướng dẫn chi tiết cho từng dự án xem trong README tại:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng với xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Mặc dù không phải monorepo truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học là tự chứa
- Dự án không chia sẻ phụ thuộc
- Làm việc trên dự án riêng mà không ảnh hưởng đến dự án khác
- Clone toàn bộ kho để trải nghiệm đầy đủ chương trình học

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố miễn trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo tính chính xác, xin lưu ý rằng bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ nguyên bản nên được coi là nguồn tin chính thức. Đối với những thông tin quan trọng, khuyến nghị sử dụng dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu nhầm hoặc giải thích sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->