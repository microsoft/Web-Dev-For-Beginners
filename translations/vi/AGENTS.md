# AGENTS.md

## Tổng quan dự án

Đây là kho lưu trữ chương trình giảng dạy nhằm dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Chương trình gồm một khóa học toàn diện trong 12 tuần được phát triển bởi các Chuyên viên Hỗ trợ Microsoft Cloud, bao gồm 24 bài học thực hành về JavaScript, CSS và HTML.

### Thành phần chính

- **Nội dung giáo dục**: 24 bài học theo cấu trúc được tổ chức thành các mô-đun dự án
- **Dự án thực hành**: Terrarium, Trò chơi đánh máy, Tiện ích mở rộng trình duyệt, Trò chơi Space, Ứng dụng ngân hàng, Trình soạn thảo mã, và Trợ lý Chat AI
- **Trắc nghiệm tương tác**: 48 bài trắc nghiệm với 3 câu hỏi mỗi bài (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động cho hơn 50 ngôn ngữ qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến trúc

- Kho lưu trữ giáo dục có cấu trúc theo từng bài học
- Mỗi thư mục bài học chứa README, ví dụ mã, và giải pháp
- Các dự án độc lập nằm trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch sử dụng GitHub Actions (co-op-translator)
- Tài liệu phục vụ qua Docsify và có sẵn dưới dạng PDF

## Lệnh thiết lập

Kho lưu trữ này chủ yếu dành cho việc sử dụng nội dung giáo dục. Để làm việc với các dự án cụ thể:

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

### Dự án Tiện ích mở rộng trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Thực hiện theo hướng dẫn tải tiện ích mở rộng của trình duyệt cụ thể
```

### Dự án Trò chơi Space

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

### Dành cho Người đóng góp nội dung

1. **Fork kho lưu trữ** sang tài khoản GitHub của bạn
2. **Clone fork** về máy cục bộ
3. **Tạo nhánh mới** cho các thay đổi của bạn
4. Thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong các thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho Người học

1. Fork hoặc clone kho lưu trữ
2. Điều hướng qua các thư mục bài học theo trình tự
3. Đọc các file README của mỗi bài học
4. Hoàn thành các bài trắc nghiệm trước bài tại https://ff-quizzes.netlify.app/web/
5. Làm theo ví dụ mã trong các thư mục bài học
6. Hoàn thành bài tập và thử thách
7. Tham gia các bài trắc nghiệm sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` tại thư mục gốc (cổng 3000)
- **Quiz App**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng tiện ích mở rộng Live Server của VS Code cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn kiểm thử

### Kiểm thử Quiz App

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về phong cách mã
npm run build      # Xác minh xây dựng thành công
```

### Kiểm thử API Ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về phong cách mã
node server.js     # Xác minh máy chủ khởi động mà không có lỗi
```

### Phương pháp kiểm thử chung

- Đây là kho lưu trữ giáo dục không có kiểm thử tự động toàn diện
- Kiểm thử thủ công tập trung vào:
  - Ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động chính xác
  - Xây dựng dự án hoàn tất thành công
  - Ví dụ tuân theo các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` ở các thư mục có package.json
- Xác thực các liên kết markdown hợp lệ
- Kiểm tra ví dụ mã trên trình duyệt hoặc Node.js
- Đảm bảo các bản dịch giữ đúng cấu trúc

## Hướng dẫn phong cách mã

### JavaScript

- Dùng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint chuẩn trong các dự án
- Đặt tên biến và hàm rõ ràng để dễ hiểu cho người học
- Thêm chú thích giải thích khái niệm cho người học
- Định dạng mã với Prettier nếu có cấu hình

### HTML/CSS

- Sử dụng các phần tử HTML5 có ý nghĩa ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng (responsive)
- Quy ước đặt tên lớp rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân thủ hướng dẫn phong cách PEP 8
- Ví dụ mã rõ ràng, dễ hiểu, mang tính giáo dục
- Gợi ý kiểu dữ liệu khi hữu ích cho học

### Tài liệu Markdown

- Thứ tự tiêu đề rõ ràng
- Khối mã có chỉ định ngôn ngữ
- Liên kết tới tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản thay thế (alt text) cho ảnh để hỗ trợ truy cập

### Tổ chức tập tin

- Bài học đánh số theo thứ tự (1-getting-started-lessons, 2-js-basics, vv)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Ảnh lưu trong thư mục `images/` riêng cho từng bài học
- Bản dịch nằm trong cấu trúc `translations/{mã-ngôn-ngữ}/`

## Xây dựng và triển khai

### Triển khai Quiz App (Azure Static Web Apps)

Quiz-app đã được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua quy trình làm việc GitHub Actions khi đẩy lên nhánh main
```

Cấu hình Azure Static Web Apps:
- **Vị trí app**: `/quiz-app`
- **Vị trí đầu ra**: `dist`
- **Quy trình làm việc**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo PDF tài liệu

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo PDF từ docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify toàn cục
docsify serve                 # Chạy trên localhost:3000
```

### Các quy trình build riêng của dự án

Mỗi thư mục dự án có thể có quy trình build riêng:
- Dự án Vue: `npm run build` tạo các gói sản xuất
- Dự án tĩnh: Không có bước build, phục vụ file trực tiếp

## Hướng dẫn Pull Request

### Định dạng tiêu đề

Dùng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm câu hỏi mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` ở các dự án liên quan
   - Sửa hết lỗi và cảnh báo lint

2. **Kiểm tra xây dựng**:
   - Chạy `npm run build` nếu có
   - Đảm bảo không có lỗi build

3. **Xác thực liên kết**:
   - Kiểm tra tất cả các liên kết markdown
   - Kiểm tra tham chiếu ảnh hoạt động

4. **Rà soát nội dung**:
   - Đọc lại để tránh lỗi chính tả và ngữ pháp
   - Đảm bảo ví dụ mã chính xác và mang tính giáo dục
   - Xác nhận bản dịch giữ nguyên ý nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động lần đầu gửi PR)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tham khảo [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình đánh giá

- PR được đánh giá bởi người duy trì và cộng đồng
- Ưu tiên rõ ràng về mặt giáo dục
- Ví dụ mã tuân theo các thực hành tốt nhất hiện hành
- Bản dịch được đánh giá độ chính xác và phù hợp văn hóa

## Hệ thống dịch

### Dịch tự động

- Sử dụng GitHub Actions với quy trình làm việc co-op-translator
- Dịch sang hơn 50 ngôn ngữ tự động
- File nguồn nằm trong các thư mục chính
- File đã dịch trong thư mục `translations/{mã-ngôn-ngữ}/`

### Thêm cải tiến dịch thủ công

1. Tìm file trong `translations/{mã-ngôn-ngữ}/`
2. Cải tiến trong khi giữ nguyên cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm tra nội dung trắc nghiệm địa phương hóa

### Metadata bản dịch

Các file đã dịch bao gồm tiêu đề metadata:
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

**Ứng dụng Quiz không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra port có bị trùng (mặc định Vite dùng port 5173)

**Máy chủ API không khởi động**:
- Đảm bảo phiên bản Node.js đáp ứng yêu cầu (node >=10)
- Kiểm tra port đã được sử dụng chưa
- Đảm bảo cài đặt đầy đủ phụ thuộc bằng `npm install`

**Tiện ích mở rộng trình duyệt không nạp được**:
- Kiểm tra file manifest.json định dạng đúng
- Kiểm tra console trình duyệt xem có lỗi không
- Làm theo hướng dẫn cài tiện ích mở rộng theo trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo đã cài gói OpenAI: `pip install openai`
- Kiểm tra biến môi trường GITHUB_TOKEN đã đặt chưa
- Kiểm tra quyền truy cập GitHub Models

**Docsify không phục vụ tài liệu**:
- Cài docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc của kho lưu trữ
- Kiểm tra file `docs/_sidebar.md` có tồn tại không

### Mẹo môi trường phát triển

- Dùng VS Code với tiện ích mở rộng Live Server cho các dự án HTML
- Cài ESLint và Prettier để định dạng nhất quán
- Dùng DevTools trình duyệt để gỡ lỗi JavaScript
- Dự án Vue cài thêm tiện ích Vue DevTools trên trình duyệt

### Cân nhắc hiệu năng

- Số lượng file dịch lớn (50+ ngôn ngữ) làm cho việc clone toàn bộ rất nặng
- Sử dụng clone nông nếu chỉ làm việc với nội dung: `git clone --depth 1`
- Loại trừ phần dịch khỏi tìm kiếm khi làm việc với nội dung tiếng Anh
- Quy trình build lần đầu có thể chậm (npm install, build Vite)

## Cân nhắc bảo mật

### Biến môi trường

- Không bao giờ commit khóa API vào kho lưu trữ
- Dùng file `.env` (đã được đưa vào `.gitignore`)
- Document các biến môi trường bắt buộc trong README dự án

### Dự án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Cập nhật phụ thuộc thường xuyên
- Token GitHub nên có quyền tối thiểu cần thiết

### Truy cập GitHub Models

- Cần Token Truy cập Cá nhân (PAT) cho GitHub Models
- Token nên lưu dưới biến môi trường
- Không bao giờ commit token hoặc thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng hướng tới

- Người mới hoàn toàn với phát triển web
- Học sinh và người tự học
- Giảng viên sử dụng chương trình trong lớp học
- Nội dung thiết kế cho dễ truy cập và phát triển kỹ năng từng bước

### Triết lý giáo dục

- Phương pháp học dựa trên dự án
- Kiểm tra kiến thức thường xuyên (trắc nghiệm)
- Bài tập mã hóa thực hành
- Ví dụ ứng dụng thực tế
- Tập trung vào kiến thức nền tảng trước các framework

### Bảo trì kho lưu trữ

- Cộng đồng người học và đóng góp viên năng động
- Cập nhật thường xuyên các phụ thuộc và nội dung
- Giám sát issue và thảo luận bởi người duy trì
- Tự động cập nhật bản dịch qua GitHub Actions

### Tài nguyên liên quan

- [Các module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) được khuyên dùng cho người học
- Các khóa học bổ sung: AI sinh tạo, Khoa học dữ liệu, ML, IoT có sẵn

### Làm việc với dự án cụ thể

Hướng dẫn chi tiết cho từng dự án trong các file README:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng có xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi trên Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Mặc dù không phải monorepo truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học là một đơn vị riêng biệt
- Các dự án không chia sẻ phụ thuộc
- Làm việc trên từng dự án riêng biệt mà không ảnh hưởng đến các dự án khác
- Clone toàn bộ kho để trải nghiệm toàn bộ chương trình học

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố từ chối trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ gốc của nó nên được coi là nguồn chính xác và đáng tin cậy. Đối với các thông tin quan trọng, nên sử dụng bản dịch do con người chuyên nghiệp thực hiện. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc giải thích sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->