# AGENTS.md

## Tổng quan dự án

Đây là khoá học giáo dục dành cho việc giảng dạy các kiến thức cơ bản về phát triển web cho người mới bắt đầu. Khóa học là một chương trình toàn diện kéo dài 12 tuần được phát triển bởi Microsoft Cloud Advocates, bao gồm 24 bài học thực hành với các chủ đề về JavaScript, CSS và HTML.

### Các thành phần chính

- **Nội dung giáo dục**: 24 bài học có cấu trúc được tổ chức theo các mô-đun dự án
- **Dự án thực hành**: Terrarium, Trò chơi gõ phím, Tiện ích mở rộng trình duyệt, Trò chơi không gian, Ứng dụng ngân hàng, Trình chỉnh sửa mã và Trợ lý chat AI
- **Bài kiểm tra tương tác**: 48 bài kiểm tra với 3 câu hỏi mỗi bài (đánh giá trước và sau bài học)
- **Hỗ trợ đa ngôn ngữ**: Dịch tự động cho hơn 50 ngôn ngữ thông qua GitHub Actions
- **Công nghệ**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (cho dự án AI)

### Kiến trúc

- Khoá học có cấu trúc dựa trên từng bài học
- Mỗi thư mục bài học chứa README, ví dụ mã nguồn và các giải pháp
- Các dự án độc lập được đặt trong các thư mục riêng biệt (quiz-app, các dự án bài học khác nhau)
- Hệ thống dịch thuật sử dụng GitHub Actions (co-op-translator)
- Tài liệu được phục vụ qua Docsify và có sẵn dưới dạng PDF

## Các lệnh thiết lập

Kho lưu trữ này chủ yếu dành cho việc tiêu thụ nội dung giáo dục. Để làm việc với các dự án cụ thể:

### Thiết lập kho chính

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Thiết lập Ứng dụng Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Khởi động máy chủ phát triển
npm run build      # Xây dựng cho môi trường sản xuất
npm run lint       # Chạy ESLint
```

### API dự án ngân hàng (Node.js + Express)

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
# Làm theo hướng dẫn tải tiện ích mở rộng dành riêng cho trình duyệt
```

### Dự án trò chơi không gian

```bash
cd 6-space-game/solution
npm install
# Mở index.html trong trình duyệt hoặc sử dụng Live Server
```

### Dự án chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Đặt biến môi trường GITHUB_TOKEN
python api.py
```

## Quy trình phát triển

### Dành cho người đóng góp nội dung

1. **Fork kho lưu trữ** sang tài khoản GitHub của bạn
2. **Clone bản fork** về máy tính cá nhân
3. **Tạo nhánh mới** cho các thay đổi của bạn
4. Thực hiện thay đổi nội dung bài học hoặc ví dụ mã
5. Kiểm tra các thay đổi mã trong thư mục dự án liên quan
6. Gửi pull request theo hướng dẫn đóng góp

### Dành cho người học

1. Fork hoặc clone kho lưu trữ
2. Điều hướng lần lượt đến các thư mục bài học
3. Đọc file README của mỗi bài học
4. Hoàn thành bài kiểm tra trước bài học tại https://ff-quizzes.netlify.app/web/
5. Làm các ví dụ mã trong thư mục bài học
6. Hoàn thành các bài tập và thử thách
7. Tham gia bài kiểm tra sau bài học

### Phát triển trực tiếp

- **Tài liệu**: Chạy `docsify serve` trong thư mục gốc (cổng 3000)
- **Ứng dụng Quiz**: Chạy `npm run dev` trong thư mục quiz-app
- **Dự án**: Sử dụng extension Live Server của VS Code cho các dự án HTML
- **API**: Chạy `npm start` trong thư mục API tương ứng

## Hướng dẫn kiểm tra

### Kiểm tra ứng dụng Quiz

```bash
cd quiz-app
npm run lint       # Kiểm tra các vấn đề về phong cách mã
npm run build      # Xác minh rằng việc xây dựng thành công
```

### Kiểm tra API ngân hàng

```bash
cd 7-bank-project/api
npm run lint       # Kiểm tra các vấn đề về kiểu mã
node server.js     # Xác minh máy chủ khởi động không có lỗi
```

### Cách tiếp cận kiểm tra chung

- Đây là kho giáo dục không có các bài kiểm tra tự động toàn diện
- Kiểm tra thủ công tập trung vào:
  - Ví dụ mã chạy không lỗi
  - Các liên kết trong tài liệu hoạt động đúng
  - Các bản build dự án hoàn tất thành công
  - Ví dụ tuân thủ các thực hành tốt nhất

### Kiểm tra trước khi gửi

- Chạy `npm run lint` trong các thư mục có package.json
- Xác minh liên kết markdown có hợp lệ
- Thử các ví dụ mã trên trình duyệt hoặc Node.js
- Đảm bảo bản dịch giữ đúng cấu trúc

## Hướng dẫn phong cách mã

### JavaScript

- Sử dụng cú pháp ES6+ hiện đại
- Tuân theo cấu hình ESLint chuẩn có trong dự án
- Đặt tên biến và hàm có ý nghĩa rõ ràng để dễ học
- Thêm chú thích giải thích các khái niệm cho người học
- Định dạng mã sử dụng Prettier khi đã thiết lập

### HTML/CSS

- Sử dụng các phần tử HTML5 mang tính ngữ nghĩa
- Nguyên tắc thiết kế đáp ứng
- Quy ước đặt tên lớp rõ ràng
- Chú thích giải thích kỹ thuật CSS cho người học

### Python

- Tuân theo chuẩn style PEP 8
- Ví dụ mã nguồn rõ ràng, phục vụ mục đích học tập
- Gợi ý kiểu dữ liệu (type hints) khi hữu ích

### Tài liệu Markdown

- Cấu trúc tiêu đề rõ ràng
- Khối mã kèm định nghĩa ngôn ngữ
- Liên kết đến tài nguyên bổ sung
- Ảnh chụp màn hình và hình ảnh trong thư mục `images/`
- Văn bản thay thế (alt text) cho ảnh để truy cập tốt hơn

### Tổ chức tệp

- Các bài học được đánh số tuần tự (1-getting-started-lessons, 2-js-basics, v.v.)
- Mỗi dự án có thư mục `solution/` thường kèm theo `start/` hoặc `your-work/`
- Ảnh lưu trong thư mục `images/` riêng của từng bài học
- Các bản dịch nằm trong cấu trúc `translations/{language-code}/`

## Xây dựng và Triển khai

### Triển khai Ứng dụng Quiz (Azure Static Web Apps)

Ứng dụng quiz-app được cấu hình để triển khai trên Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tạo thư mục dist/
# Triển khai qua workflow GitHub Actions khi đẩy lên main
```

Cấu hình Azure Static Web Apps:
- **Đường dẫn ứng dụng**: `/quiz-app`
- **Đường dẫn đầu ra**: `dist`
- **Quy trình làm việc**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Tạo tài liệu PDF

```bash
npm install                    # Cài đặt docsify-to-pdf
npm run convert               # Tạo PDF từ docs
```

### Tài liệu Docsify

```bash
npm install -g docsify-cli    # Cài đặt Docsify toàn cục
docsify serve                 # Phục vụ trên localhost:3000
```

### Xây dựng theo dự án

Mỗi thư mục dự án có thể có quy trình build riêng:
- Dự án Vue: `npm run build` tạo các bundle production
- Dự án tĩnh: không cần bước build, phục vụ file trực tiếp

## Hướng dẫn Pull Request

### Định dạng tiêu đề

Sử dụng tiêu đề rõ ràng, mô tả vùng thay đổi:
- `[Quiz-app] Thêm bài quiz mới cho bài học X`
- `[Lesson-3] Sửa lỗi đánh máy trong dự án terrarium`
- `[Translation] Thêm bản dịch tiếng Tây Ban Nha cho bài 5`
- `[Docs] Cập nhật hướng dẫn thiết lập`

### Các kiểm tra bắt buộc

Trước khi gửi PR:

1. **Chất lượng mã**:
   - Chạy `npm run lint` trong thư mục dự án bị ảnh hưởng
   - Sửa tất cả lỗi và cảnh báo lint

2. **Kiểm tra build**:
   - Chạy `npm run build` nếu có
   - Đảm bảo không có lỗi build

3. **Kiểm tra liên kết**:
   - Thử tất cả các liên kết markdown
   - Xác minh tham chiếu ảnh

4. **Đánh giá nội dung**:
   - Đọc lại, kiểm tra lỗi chính tả và ngữ pháp
   - Đảm bảo ví dụ mã đúng và phục vụ giáo dục
   - Kiểm tra bản dịch giữ nguyên ý nghĩa gốc

### Yêu cầu đóng góp

- Đồng ý với Microsoft CLA (kiểm tra tự động lần đầu PR)
- Tuân theo [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Xem [CONTRIBUTING.md](./CONTRIBUTING.md) để biết hướng dẫn chi tiết
- Tham chiếu số issue trong mô tả PR nếu có

### Quy trình đánh giá

- Các PR được đánh giá bởi người duy trì và cộng đồng
- Ưu tiên tính rõ ràng trong giáo dục
- Ví dụ mã nên tuân theo các thực hành tốt nhất hiện tại
- Bản dịch được xem xét về độ chính xác và phù hợp văn hóa

## Hệ thống dịch thuật

### Dịch tự động

- Sử dụng GitHub Actions với quy trình co-op-translator
- Dịch sang hơn 50 ngôn ngữ tự động
- Tệp nguồn ở các thư mục chính
- Tệp dịch ở các thư mục `translations/{language-code}/`

### Thêm cải tiến dịch thủ công

1. Tìm tệp trong `translations/{language-code}/`
2. Thực hiện cải tiến mà vẫn giữ cấu trúc
3. Đảm bảo ví dụ mã vẫn hoạt động
4. Kiểm tra nội dung quiz bản địa hóa nếu có

### Metadata bản dịch

Tệp dịch có header metadata:
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

## Gỡ lỗi và Xử lý sự cố

### Các vấn đề phổ biến

**Ứng dụng quiz không khởi động**:
- Kiểm tra phiên bản Node.js (khuyến nghị v14+)
- Xóa `node_modules` và `package-lock.json`, chạy lại `npm install`
- Kiểm tra xung đột cổng (mặc định: Vite dùng cổng 5173)

**API server không khởi động**:
- Kiểm tra phiên bản Node.js đáp ứng tối thiểu (node >=10)
- Kiểm tra xem cổng có đang bị chiếm dụng không
- Đảm bảo đã cài đặt đầy đủ dependencies bằng `npm install`

**Tiện ích mở rộng trình duyệt không tải**:
- Kiểm tra tệp manifest.json đúng định dạng
- Kiểm tra console trình duyệt có lỗi không
- Làm theo hướng dẫn cài đặt tiện ích mở rộng riêng cho từng trình duyệt

**Vấn đề dự án chat Python**:
- Đảm bảo gói OpenAI được cài đặt: `pip install openai`
- Kiểm tra biến môi trường GITHUB_TOKEN đã được thiết lập
- Kiểm tra quyền truy cập Models trên GitHub

**Docsify không phục vụ tài liệu**:
- Cài đặt docsify-cli toàn cục: `npm install -g docsify-cli`
- Chạy từ thư mục gốc của kho lưu trữ
- Kiểm tra file `docs/_sidebar.md` có tồn tại

### Mẹo về môi trường phát triển

- Dùng VS Code với extension Live Server cho các dự án HTML
- Cài đặt ESLint và Prettier để định dạng mã nhất quán
- Sử dụng DevTools trình duyệt để gỡ lỗi JavaScript
- Với Vue, cài đặt extension Vue DevTools trên trình duyệt

### Lưu ý về hiệu năng

- Số lượng tệp dịch lớn (hơn 50 ngôn ngữ) làm bản clone đầy đủ lớn
- Dùng shallow clone nếu chỉ làm việc với nội dung: `git clone --depth 1`
- Loại trừ thư mục dịch khỏi tìm kiếm khi chỉ làm việc với nội dung tiếng Anh
- Quy trình build có thể chậm lần đầu (npm install, build Vite)

## Các lưu ý bảo mật

### Biến môi trường

- Không bao giờ commit khóa API vào kho lưu trữ
- Sử dụng tệp `.env` (đã có trong `.gitignore`)
- Tài liệu yêu cầu biến môi trường trong README từng dự án

### Dự án Python

- Sử dụng môi trường ảo: `python -m venv venv`
- Cập nhật dependencies thường xuyên
- Token GitHub chỉ cấp quyền cần thiết tối thiểu

### Quyền truy cập Models GitHub

- Cần Personal Access Tokens (PAT) cho GitHub Models
- Lưu trữ token dưới dạng biến môi trường
- Không bao giờ commit token hay thông tin đăng nhập

## Ghi chú bổ sung

### Đối tượng mục tiêu

- Người mới hoàn toàn trong phát triển web
- Sinh viên và người tự học
- Giáo viên sử dụng chương trình trong lớp học
- Nội dung thiết kế dễ tiếp cận và xây dựng kỹ năng từng bước

### Triết lý giáo dục

- Học theo dự án
- Kiểm tra kiến thức thường xuyên (quiz)
- Thực hành lập trình trực tiếp
- Ví dụ áp dụng thực tế
- Tập trung vào kiến thức cơ bản trước khi học framework

### Bảo trì kho lưu trữ

- Cộng đồng người học và đóng góp tích cực
- Thường xuyên cập nhật dependencies và nội dung
- Giám sát issue và thảo luận bởi người duy trì
- Cập nhật dịch tự động qua GitHub Actions

### Tài nguyên liên quan

- [Các mô-đun Microsoft Learn](https://docs.microsoft.com/learn/)
- [Tài nguyên Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) đề xuất cho người học
- Các khóa học thêm: AI Generative, Khoa học dữ liệu, ML, IoT

### Làm việc với các dự án cụ thể

Hướng dẫn chi tiết trong file README của các thư mục:
- `quiz-app/README.md` - Ứng dụng quiz Vue 3
- `7-bank-project/README.md` - Ứng dụng ngân hàng với xác thực
- `5-browser-extension/README.md` - Phát triển tiện ích mở rộng trình duyệt
- `6-space-game/README.md` - Phát triển trò chơi dựa trên Canvas
- `9-chat-project/README.md` - Dự án trợ lý chat AI

### Cấu trúc Monorepo

Không phải monorepo kiểu truyền thống, kho này chứa nhiều dự án độc lập:
- Mỗi bài học là một đơn vị riêng biệt
- Các dự án không chia sẻ dependencies
- Làm việc trên từng dự án riêng biệt không ảnh hưởng dự án khác
- Clone toàn bộ repo để trải nghiệm toàn diện khóa học

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tuyên bố từ chối trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng bản dịch tự động có thể chứa lỗi hoặc sai sót. Tài liệu gốc bằng ngôn ngữ nguyên bản của nó nên được coi là nguồn chính xác nhất. Đối với thông tin quan trọng, nên sử dụng dịch thuật chuyên nghiệp do con người thực hiện. Chúng tôi không chịu trách nhiệm đối với bất kỳ sự hiểu nhầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->