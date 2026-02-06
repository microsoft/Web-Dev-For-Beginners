# AGENTS.md

## Tổng Quan Dự Án

Đây là khoá học giáo dục dành cho việc dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Chương trình học là một khóa học toàn diện kéo dài 12 tuần được phát triển bởi Microsoft Cloud Advocates, gồm 24 bài học thực hành về JavaScript, CSS và HTML.

### Các Thành Phần Chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc, tổ chức theo các module dự án
- **Dự án thực tế**: Terrarium, Trò chơi gõ chữ, Tiện ích mở rộng trình duyệt, Trò chơi không gian, Ứng dụng ngân hàng, Trình soạn thảo mã, và Trợ lý trò chuyện AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với 3 câu hỏi mỗi bài (đánh giá trước và sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động sang hơn 50 ngôn ngữ qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến Trúc

- Khoá học giáo dục với cấu trúc theo từng bài học
- Mỗi thư mục bài học chứa tệp README, ví dụ mã và giải pháp
- Các dự án độc lập trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch sử dụng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có định dạng PDF

## Lệnh Cài Đặt

Kho lưu trữ này chủ yếu dùng để học tập nội dung. Để làm việc với các dự án cụ thể:

### Cài Đặt Kho Chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Cài Đặt Ứng Dụng Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Khởi động máy chủ phát triển
npm run build      # Xây dựng cho sản xuất
npm run lint       # Chạy ESLint
```

### API Dự Án Ngân Hàng (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Khởi động máy chủ API
npm run lint       # Chạy ESLint
npm run format     # Định dạng với Prettier
```

### Dự Án Tiện Ích Mở Rộng Trình Duyệt

```bash
cd 5-browser-extension/solution
npm install
# Làm theo hướng dẫn nạp tiện ích mở rộng dành cho trình duyệt cụ thể
```

### Dự Án Trò Chơi Không Gian

```bash
cd 6-space-game/solution
npm install
# Mở index.html trong trình duyệt hoặc sử dụng Live Server
```

### Dự Án Trò Chuyện (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Đặt biến môi trường GITHUB_TOKEN
python api.py
```

## Quy Trình Phát Triển

### Dành Cho Người Đóng Góp Nội Dung

1. **Fork kho lưu trữ** vào tài khoản GitHub của bạn
2. **Clone fork của bạn** về máy tính
3. **Tạo nhánh mới** cho các thay đổi của bạn
4. Thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong các thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành Cho Người Học

1. Fork hoặc clone kho lưu trữ
2. Truy cập tuần tự vào các thư mục bài học
3. Đọc tệp README cho từng bài học
4. Hoàn thành các bài kiểm tra trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm theo các ví dụ mã trong các thư mục bài học
6. Hoàn thành các bài tập và thử thách
7. Tham gia các bài kiểm tra sau bài học

### Phát Triển Trực Tiếp

- **Tài liệu**: Chạy `docsify serve` tại thư mục gốc (cổng 3000)
- **Ứng dụng Quiz**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng tiện ích mở rộng Live Server của VS Code cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng Dẫn Kiểm Tra

### Kiểm Tra Ứng Dụng Quiz

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về phong cách mã
npm run build      # Xác minh việc xây dựng thành công
```

### Kiểm Tra API Ngân Hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về phong cách mã
node server.js     # Xác minh máy chủ khởi động không có lỗi
```

### Cách Thức Kiểm Tra Chung

- Đây là khoá học không có các bài kiểm tra tự động toàn diện
- Kiểm tra thủ công tập trung vào:
  - Ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động đúng
  - Dự án được build thành công
  - Ví dụ tuân theo các thực hành tốt nhất

### Kiểm Tra Trước Khi Gửi

- Chạy `npm run lint` trong các thư mục có file package.json
- Kiểm tra các liên kết markdown hợp lệ
- Kiểm tra các ví dụ mã trên trình duyệt hoặc Node.js
- Kiểm tra bảo toàn cấu trúc khi dịch thuật

## Hướng Dẫn Phong Cách Mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint tiêu chuẩn có trong dự án
- Đặt tên biến và hàm có ý nghĩa rõ ràng để dễ hiểu cho người học
- Thêm chú thích giải thích khái niệm cho học viên
- Định dạng bằng Prettier nếu được cấu hình

### HTML/CSS

- Các phần tử HTML5 ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy tắc đặt tên class rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân thủ hướng dẫn PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Gợi ý kiểu dữ liệu nếu có lợi cho việc học

### Tài Liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Các khối mã kèm định dạng ngôn ngữ
- Liên kết tới tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản thay thế cho hình ảnh nhằm hỗ trợ truy cập

### Tổ Chức Tệp Tin

- Các bài học đánh số theo thứ tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Ảnh được lưu trong các thư mục `images/` riêng cho từng bài học
- Dịch thuật nằm trong cấu trúc `translations/{language-code}/`

## Xây Dựng và Triển Khai

### Triển Khai Ứng Dụng Quiz (Azure Static Web Apps)

Ứng dụng quiz được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua quy trình làm việc GitHub Actions khi đẩy lên nhánh chính
```

Cấu hình Azure Static Web Apps:
- **Vị trí ứng dụng**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Quy trình làm việc**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo Tài Liệu PDF

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo file PDF từ docs
```

### Tài Liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify toàn cục
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây Dựng Dự Án Riêng Lẻ

Mỗi thư mục dự án có thể có quy trình xây dựng riêng:
- Dự án Vue: `npm run build` tạo các gói sản xuất
- Dự án tĩnh: không có bước xây dựng, phục vụ tệp trực tiếp

## Hướng Dẫn Pull Request

### Định Dạng Tiêu Đề

Sử dụng tiêu đề rõ ràng, mô tả vùng thay đổi:
- `[Quiz-app] Thêm bài quiz mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài học 5`
- `[Docs] Cập nhật hướng dẫn cài đặt`

### Kiểm Tra Bắt Buộc

Trước khi gửi PR:

1. **Chất Lượng Mã**:
   - Chạy `npm run lint` trong các thư mục dự án liên quan
   - Sửa mọi lỗi và cảnh báo lint

2. **Xác Minh Build**:
   - Chạy `npm run build` nếu có thể
   - Đảm bảo không có lỗi build

3. **Kiểm Tra Liên Kết**:
   - Kiểm tra tất cả liên kết markdown
   - Xác nhận các tham chiếu ảnh hoạt động

4. **Rà Soát Nội Dung**:
   - Đọc lại chính tả và ngữ pháp
   - Đảm bảo ví dụ mã đúng và mang tính giáo dục
   - Đảm bảo bản dịch giữ nguyên ý nghĩa gốc

### Yêu Cầu Đóng Góp

- Đồng ý với CLA của Microsoft (kiểm tra tự động khi PR đầu tiên)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu cần

### Quy Trình Đánh Giá

- PR được duyệt bởi người quản lý và cộng đồng
- Ưu tiên tính rõ ràng trong giáo dục
- Ví dụ mã phải tuân theo thực hành tốt nhất hiện nay
- Dịch thuật được xem xét về độ chính xác và phù hợp văn hóa

## Hệ Thống Dịch Thuật

### Dịch Thuật Tự Động

- Sử dụng GitHub Actions với quy trình co-op-translator
- Tự động dịch sang hơn 50 ngôn ngữ
- Tệp nguồn nằm trong các thư mục chính
- Tệp dịch nằm trong thư mục `translations/{language-code}/`

### Thêm Cải Tiến Dịch Thuật Thủ Công

1. Tìm tệp trong `translations/{language-code}/`
2. Thực hiện cải tiến mà vẫn giữ nguyên cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm tra nội dung quiz đã bản địa hóa

### Metadata Dịch Thuật

Các tệp dịch bao gồm phần đầu metadata:
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

## Gỡ Lỗi và Khắc Phục Sự Cố

### Các Vấn Đề Thường Gặp

**Ứng dụng quiz không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định: Vite dùng cổng 5173)

**API server không khởi động**:
- Đảm bảo Node.js đáp ứng yêu cầu tối thiểu (node >=10)
- Kiểm tra xem cổng có đang bị sử dụng không
- Đảm bảo đã cài đặt đầy đủ dependencies bằng `npm install`

**Tiện ích mở rộng trình duyệt không tải được**:
- Kiểm tra manifest.json hợp lệ
- Kiểm tra console trình duyệt xem có lỗi
- Làm theo hướng dẫn cài đặt riêng cho trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo đã cài đặt gói OpenAI: `pip install openai`
- Kiểm tra biến môi trường GITHUB_TOKEN đã thiết lập
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài đặt docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc kho lưu trữ
- Kiểm tra tồn tại tệp `docs/_sidebar.md`

### Mẹo Môi Trường Phát Triển

- Dùng VS Code với tiện ích Live Server cho dự án HTML
- Cài đặt tiện ích ESLint và Prettier để định dạng nhất quán
- Sử dụng DevTools trình duyệt để gỡ lỗi JavaScript
- Với Vue, cài đặt tiện ích mở rộng Vue DevTools trên trình duyệt

### Cân Nhắc Hiệu Năng

- Số lượng tệp dịch lớn (50+ ngôn ngữ) khiến việc clone toàn bộ nặng
- Dùng clone nông nếu chỉ làm việc với nội dung: `git clone --depth 1`
- Loại trừ thư mục dịch khỏi tìm kiếm khi xử lý nội dung tiếng Anh
- Quy trình build có thể chậm lần đầu (npm install, build Vite)

## Cân Nhắc Về Bảo Mật

### Biến Môi Trường

- Không bao giờ commit khoá API vào kho lưu trữ
- Sử dụng file `.env` (đã có trong `.gitignore`)
- Ghi chú biến môi trường cần thiết trong README dự án

### Dự Án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Cập nhật dependencies thường xuyên
- Token GitHub nên có quyền tối thiểu cần thiết

### Quyền Truy Cập GitHub Models

- Cần Personal Access Tokens (PAT) để truy cập GitHub Models
- Token nên lưu trữ dưới dạng biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi Chú Bổ Sung

### Đối Tượng Hướng Đến

- Người mới hoàn toàn với phát triển web
- Sinh viên và người tự học
- Giáo viên sử dụng chương trình trong lớp học
- Nội dung thiết kế để dễ tiếp cận và phát triển kỹ năng tuần tự

### Triết Lý Giáo Dục

- Phương pháp học theo dự án
- Kiểm tra kiến thức thường xuyên (quiz)
- Bài tập mã hóa thực hành
- Ví dụ ứng dụng thực tế
- Tập trung vào nền tảng trước khi học framework

### Bảo Trì Kho Lưu Trữ

- Cộng đồng học tập và đóng góp tích cực
- Cập nhật thường xuyên các dependencies và nội dung
- Theo dõi issues và thảo luận bởi người quản lý
- Cập nhật dịch tự động qua GitHub Actions

### Tài Nguyên Liên Quan

- [Modules học Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) khuyến nghị cho người học
- Các khoá học bổ sung: AI Sinh tạo, Khoa học dữ liệu, ML, IoT

### Làm Việc Với Các Dự Án Cụ Thể

Hướng dẫn chi tiết về các dự án riêng lẻ xem trong tệp README:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng có xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu Trúc Monorepo

Mặc dù không phải là monorepo truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học là riêng biệt
- Các dự án không chia sẻ dependencies
- Làm việc trên từng dự án riêng không ảnh hưởng lẫn nhau
- Clone toàn bộ kho để trải nghiệm toàn bộ khóa học

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố từ chối trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng việc dịch tự động có thể chứa lỗi hoặc sai sót. Tài liệu gốc bằng ngôn ngữ gốc nên được xem là nguồn chính xác và uy tín nhất. Đối với những thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự hiểu nhầm hay giải thích sai lệch nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->