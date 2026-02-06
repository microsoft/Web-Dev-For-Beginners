# AGENTS.md

## Tổng quan dự án

Đây là kho giáo trình giáo dục để dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Giáo trình là một khóa học toàn diện 12 tuần do Microsoft Cloud Advocates phát triển, với 24 bài học thực hành về JavaScript, CSS và HTML.

### Các thành phần chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc tổ chức thành các mô-đun dựa trên dự án
- **Dự án thực tế**: Terrarium, Trò chơi đánh máy, Tiện ích mở rộng trình duyệt, Trò chơi không gian, Ứng dụng ngân hàng, Trình chỉnh sửa mã, và Trợ lý chat AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với 3 câu hỏi mỗi bài (đánh giá trước/sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động cho hơn 50 ngôn ngữ qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho các dự án AI)

### Kiến trúc

- Kho giáo dục với cấu trúc theo bài học
- Mỗi thư mục bài học chứa README, ví dụ mã, và giải pháp
- Dự án độc lập trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch sử dụng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có sẵn dạng PDF

## Lệnh thiết lập

Kho này chủ yếu dành cho việc tiêu thụ nội dung giáo dục. Để làm việc với các dự án cụ thể:

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

### Dự án Tiện ích mở rộng trình duyệt

```bash
cd 5-browser-extension/solution
npm install
# Làm theo hướng dẫn tải tiện ích mở rộng dành riêng cho trình duyệt
```

### Dự án Trò chơi không gian

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

1. **Fork kho này** vào tài khoản GitHub của bạn
2. **Clone bản fork** về máy cục bộ
3. **Tạo nhánh mới** cho thay đổi của bạn
4. Thực hiện thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm thử các thay đổi mã trong thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho về
2. Truy cập tuần tự các thư mục bài học
3. Đọc các file README cho mỗi bài học
4. Hoàn thành các bài quiz trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm theo các ví dụ mã trong các thư mục bài học
6. Hoàn thành bài tập và thách thức
7. Làm bài quiz sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` ở thư mục gốc (cổng 3000)
- **Ứng dụng Quiz**: Chạy `npm run dev` trong thư mục quiz-app
- **Các dự án**: Sử dụng VS Code Live Server extension cho các dự án HTML
- **Dự án API**: Chạy `npm start` trong các thư mục API tương ứng

## Hướng dẫn kiểm thử

### Kiểm thử Quiz App

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về kiểu mã
npm run build      # Xác minh việc xây dựng thành công
```

### Kiểm thử API Ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các lỗi về phong cách mã nguồn
node server.js     # Xác minh máy chủ khởi động mà không có lỗi nào
```

### Cách tiếp cận kiểm thử chung

- Đây là kho giáo dục không có kiểm thử tự động toàn diện
- Kiểm thử thủ công tập trung vào:
  - Các ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động đúng
  - Dự án xây dựng thành công
  - Ví dụ theo các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh các liên kết markdown hợp lệ
- Kiểm thử các ví dụ mã trên trình duyệt hoặc Node.js
- Kiểm tra rằng các bản dịch giữ đúng cấu trúc

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint chuẩn có trong dự án
- Dùng tên biến và hàm có ý nghĩa dễ hiểu cho giáo dục
- Thêm chú thích giải thích khái niệm cho người học
- Định dạng bằng Prettier nếu được cấu hình

### HTML/CSS

- Các phần tử HTML5 có ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy ước đặt tên class rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân thủ quy chuẩn PEP 8
- Ví dụ mã rõ ràng, mang tính giáo dục
- Sử dụng type hints khi hữu ích cho việc học

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Khối mã với chỉ định ngôn ngữ
- Liên kết đến các tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản alt cho ảnh để hỗ trợ truy cập

### Tổ chức tệp

- Các bài học đánh số theo thứ tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` và thường có `start/` hoặc `your-work/`
- Hình ảnh lưu trong thư mục `images/` riêng của từng bài học
- Các bản dịch trong cấu trúc `translations/{language-code}/`

## Xây dựng và triển khai

### Triển khai Quiz App (Azure Static Web Apps)

Quiz-app được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua quy trình làm việc GitHub Actions khi đẩy lên nhánh main
```

Cấu hình Azure Static Web Apps:
- **Vị trí ứng dụng**: `/quiz-app`
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
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây dựng dự án riêng biệt

Mỗi thư mục dự án có thể có quá trình xây dựng riêng:
- Dự án Vue: `npm run build` tạo các bundle sản xuất
- Dự án tĩnh: không có bước build, phục vụ trực tiếp các tệp

## Hướng dẫn Pull Request

### Định dạng tiêu đề

Sử dụng tiêu đề rõ ràng, mô tả khu vực thay đổi:
- `[Quiz-app] Thêm bài quiz mới cho bài học X`
- `[Lesson-3] Sửa lỗi chính tả trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Các kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong các thư mục dự án ảnh hưởng
   - Sửa tất cả lỗi và cảnh báo lint

2. **Xác thực build**:
   - Chạy `npm run build` nếu có
   - Đảm bảo không có lỗi build

3. **Xác minh liên kết**:
   - Kiểm tra tất cả liên kết markdown
   - Xác thực tham chiếu hình ảnh

4. **Rà soát nội dung**:
   - Đọc lại lỗi chính tả và ngữ pháp
   - Đảm bảo ví dụ mã chính xác và mang tính giáo dục
   - Kiểm tra bản dịch giữ nguyên ý nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý Microsoft CLA (kiểm tra tự động lúc PR đầu tiên)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình đánh giá

- PR được các người duy trì và cộng đồng đánh giá
- Ưu tiên làm rõ mặt giáo dục
- Ví dụ mã nên theo các thực hành tốt hiện tại
- Bản dịch được đánh giá về độ chính xác và phù hợp văn hóa

## Hệ thống dịch

### Dịch tự động

- Sử dụng GitHub Actions với workflow co-op-translator
- Dịch tự động sang hơn 50 ngôn ngữ
- Các tệp nguồn ở thư mục chính
- Tệp dịch ở thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thủ công

1. Tìm tệp ở `translations/{language-code}/`
2. Thực hiện cải tiến trong khi giữ cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm thử nội dung quiz được bản địa hóa

### Metadata dịch

Các tệp dịch có bao gồm header metadata:
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

## Gỡ lỗi và xử lý sự cố

### Các vấn đề thường gặp

**Ứng dụng quiz không khởi động được**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định Vite dùng cổng 5173)

**Máy chủ API không khởi động được**:
- Xác nhận phiên bản Node.js đạt yêu cầu (node >=10)
- Kiểm tra cổng có đang được sử dụng không
- Đảm bảo đã cài tất cả dependencies bằng `npm install`

**Tiện ích mở rộng trình duyệt không tải được**:
- Kiểm tra manifest.json định dạng đúng
- Kiểm tra console trình duyệt có lỗi không
- Thực hiện theo hướng dẫn cài tiện ích mở rộng riêng cho trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo đã cài gói OpenAI: `pip install openai`
- Xác nhận biến môi trường GITHUB_TOKEN đã được đặt
- Kiểm tra quyền truy cập Models trên GitHub

**Docsify không phục vụ tài liệu**:
- Cài đặt docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc kho
- Kiểm tra `docs/_sidebar.md` có tồn tại không

### Mẹo môi trường phát triển

- Dùng VS Code với extension Live Server cho các dự án HTML
- Cài đặt ESLint và Prettier để định dạng thống nhất
- Dùng DevTools trình duyệt để gỡ lỗi JavaScript
- Dự án Vue: cài extension Vue DevTools trình duyệt

### Xem xét hiệu năng

- Số lượng file dịch lớn (hơn 50 ngôn ngữ) khiến clone toàn bộ nặng
- Dùng clone cạn nếu chỉ làm việc với nội dung: `git clone --depth 1`
- Loại trừ thư mục dịch khỏi tìm kiếm khi làm việc với nội dung tiếng Anh
- Quá trình build có thể chậm lần đầu (npm install, build Vite)

## Đảm bảo an toàn

### Biến môi trường

- Không bao giờ commit khóa API vào kho
- Sử dụng tệp `.env` (đã được thêm vào `.gitignore`)
- Tài liệu biến môi trường cần thiết trong các README dự án

### Dự án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Giữ dependencies cập nhật
- GitHub token nên có quyền tối thiểu cần thiết

### Quyền truy cập Models GitHub

- Cần có Personal Access Token (PAT) cho GitHub Models
- Token nên lưu trong biến môi trường
- Không bao giờ commit token hoặc thông tin xác thực

## Ghi chú bổ sung

### Đối tượng mục tiêu

- Người mới hoàn toàn với phát triển web
- Học sinh và người tự học
- Giáo viên sử dụng giáo trình trong lớp học
- Nội dung thiết kế phục vụ truy cập và phát triển kỹ năng từ từ

### Triết lý giáo dục

- Phương pháp học dựa trên dự án
- Kiểm tra kiến thức thường xuyên (quiz)
- Thực hành mã hóa trực tiếp
- Ví dụ ứng dụng thực tế
- Tập trung vào kiến thức nền tảng trước khi tới framework

### Bảo trì kho

- Cộng đồng người học và đóng góp năng động
- Thường xuyên cập nhật dependencies và nội dung
- Vấn đề và thảo luận được người duy trì giám sát
- Cập nhật dịch tự động qua GitHub Actions

### Tài nguyên liên quan

- [Các module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) được khuyến nghị cho người học
- Khóa học thêm: AI Sinh tạo, Khoa học dữ liệu, ML, IoT có sẵn

### Làm việc với các dự án cụ thể

Hướng dẫn chi tiết cho từng dự án có trong các file README:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng có xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Mặc dù không phải monorepo truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học tự chứa
- Dự án không chia sẻ dependencies
- Làm việc trên từng dự án riêng mà không ảnh hưởng dự án khác
- Clone toàn bộ repo để trải nghiệm đầy đủ giáo trình

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ nguyên bản nên được coi là nguồn thông tin chính xác và có thẩm quyền. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp của con người. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự hiểu lầm hoặc giải thích sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->