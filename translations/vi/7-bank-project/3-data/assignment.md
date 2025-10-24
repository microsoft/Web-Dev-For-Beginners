<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-24T13:45:28+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "vi"
}
-->
# Bài Tập Tái Cấu Trúc Mã và Tài Liệu

## Mục Tiêu Học Tập

Bằng cách hoàn thành bài tập này, bạn sẽ thực hành các kỹ năng phát triển phần mềm thiết yếu mà các nhà phát triển chuyên nghiệp sử dụng hàng ngày. Bạn sẽ học cách tổ chức mã để dễ bảo trì, giảm sự trùng lặp thông qua trừu tượng hóa, và viết tài liệu cho công việc của mình để hỗ trợ các nhà phát triển trong tương lai (bao gồm cả chính bạn!).

Mã nguồn sạch sẽ, được tài liệu hóa tốt là rất quan trọng đối với các dự án phát triển web thực tế, nơi nhiều nhà phát triển cùng hợp tác và các cơ sở mã liên tục phát triển theo thời gian.

## Tổng Quan Bài Tập

Tệp `app.js` của ứng dụng ngân hàng của bạn đã phát triển đáng kể với các chức năng đăng nhập, đăng ký và bảng điều khiển. Đã đến lúc tái cấu trúc mã này bằng cách sử dụng các phương pháp phát triển chuyên nghiệp để cải thiện khả năng đọc, bảo trì và giảm sự trùng lặp.

## Hướng Dẫn

Chuyển đổi mã hiện tại của bạn trong tệp `app.js` bằng cách áp dụng ba kỹ thuật tái cấu trúc cốt lõi sau:

### 1. Trích Xuất Các Hằng Số Cấu Hình

**Nhiệm vụ**: Tạo một phần cấu hình ở đầu tệp của bạn với các hằng số có thể tái sử dụng.

**Hướng dẫn triển khai:**
- Trích xuất URL cơ sở API của máy chủ (hiện đang được mã hóa cứng ở nhiều nơi)
- Tạo các hằng số cho các thông báo lỗi xuất hiện trong nhiều hàm
- Cân nhắc trích xuất các đường dẫn và ID phần tử được sử dụng lặp lại

**Cấu trúc ví dụ:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Tạo Hàm Yêu Cầu Thống Nhất

**Nhiệm vụ**: Xây dựng một hàm `sendRequest()` có thể tái sử dụng để loại bỏ mã trùng lặp giữa `createAccount()` và `getAccount()`.

**Yêu cầu:**
- Xử lý cả yêu cầu GET và POST
- Bao gồm xử lý lỗi đúng cách
- Hỗ trợ các điểm cuối URL khác nhau
- Chấp nhận dữ liệu yêu cầu tùy chọn

**Hướng dẫn chữ ký hàm:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Thêm Tài Liệu Mã Chuyên Nghiệp

**Nhiệm vụ**: Viết tài liệu cho mã của bạn với các bình luận rõ ràng, hữu ích giải thích "lý do" đằng sau logic.

**Tiêu chuẩn tài liệu:**
- Thêm tài liệu hàm giải thích mục đích, tham số và giá trị trả về
- Bao gồm các bình luận nội tuyến cho logic phức tạp hoặc quy tắc kinh doanh
- Nhóm các hàm liên quan lại với nhau bằng tiêu đề phần
- Giải thích bất kỳ mẫu mã không rõ ràng hoặc các giải pháp đặc thù cho trình duyệt

**Phong cách tài liệu ví dụ:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Tiêu Chí Thành Công

Mã đã được tái cấu trúc của bạn nên thể hiện các thực hành phát triển chuyên nghiệp sau:

### Triển Khai Xuất Sắc
- ✅ **Hằng Số**: Tất cả các chuỗi và URL "ma thuật" được trích xuất thành các hằng số có tên rõ ràng
- ✅ **Nguyên Tắc DRY**: Logic yêu cầu chung được hợp nhất vào một hàm `sendRequest()` có thể tái sử dụng
- ✅ **Tài Liệu**: Các hàm có bình luận JSDoc rõ ràng giải thích mục đích và tham số
- ✅ **Tổ Chức**: Mã được nhóm logic với các tiêu đề phần và định dạng nhất quán
- ✅ **Xử Lý Lỗi**: Xử lý lỗi được cải thiện bằng cách sử dụng hàm yêu cầu mới

### Triển Khai Đạt Yêu Cầu
- ✅ **Hằng Số**: Hầu hết các giá trị lặp lại được trích xuất, với một số giá trị mã hóa cứng nhỏ còn lại
- ✅ **Tái Cấu Trúc**: Hàm `sendRequest()` cơ bản được tạo nhưng có thể không xử lý tất cả các trường hợp ngoại lệ
- ✅ **Bình Luận**: Các hàm chính được tài liệu hóa, mặc dù một số giải thích có thể đầy đủ hơn
- ✅ **Khả Năng Đọc**: Mã nói chung được tổ chức tốt với một số khu vực cần cải thiện

### Cần Cải Thiện
- ❌ **Hằng Số**: Nhiều chuỗi và URL "ma thuật" vẫn được mã hóa cứng trong toàn bộ tệp
- ❌ **Trùng Lặp**: Vẫn còn sự trùng lặp mã đáng kể giữa các hàm tương tự
- ❌ **Tài Liệu**: Thiếu hoặc tài liệu không đầy đủ không giải thích mục đích của mã
- ❌ **Tổ Chức**: Mã thiếu cấu trúc rõ ràng và nhóm logic

## Kiểm Tra Mã Đã Tái Cấu Trúc

Sau khi tái cấu trúc, đảm bảo ứng dụng ngân hàng của bạn vẫn hoạt động chính xác:

1. **Kiểm tra tất cả các luồng người dùng**: Đăng ký, đăng nhập, hiển thị bảng điều khiển, và xử lý lỗi
2. **Xác minh các yêu cầu API**: Xác nhận rằng hàm `sendRequest()` của bạn hoạt động cho cả việc tạo và truy xuất tài khoản
3. **Kiểm tra các tình huống lỗi**: Thử nghiệm với thông tin đăng nhập không hợp lệ và lỗi mạng
4. **Xem lại đầu ra bảng điều khiển**: Đảm bảo không có lỗi mới nào được giới thiệu trong quá trình tái cấu trúc

## Hướng Dẫn Nộp Bài

Nộp tệp `app.js` đã được tái cấu trúc của bạn với:
- Các tiêu đề phần rõ ràng tổ chức các chức năng khác nhau
- Định dạng và thụt lề mã nhất quán
- Tài liệu JSDoc đầy đủ cho tất cả các hàm
- Một bình luận ngắn ở đầu giải thích cách tiếp cận tái cấu trúc của bạn

**Thử Thách Thêm**: Tạo một tệp tài liệu mã đơn giản (`CODE_STRUCTURE.md`) giải thích kiến trúc của ứng dụng của bạn và cách các hàm khác nhau hoạt động cùng nhau.

## Kết Nối Thực Tế

Bài tập này phản ánh loại bảo trì mã mà các nhà phát triển chuyên nghiệp thực hiện thường xuyên. Trong môi trường công nghiệp:
- **Đánh giá mã** đánh giá khả năng đọc và bảo trì giống như bài tập này
- **Nợ kỹ thuật** tích lũy khi mã không được tái cấu trúc và tài liệu hóa thường xuyên
- **Hợp tác nhóm** phụ thuộc vào mã rõ ràng, được tài liệu hóa mà các thành viên mới trong nhóm có thể hiểu
- **Sửa lỗi** dễ dàng hơn nhiều trong các cơ sở mã được tổ chức tốt với các trừu tượng hóa phù hợp

Các kỹ năng bạn đang thực hành ở đây - trích xuất hằng số, loại bỏ sự trùng lặp, và viết tài liệu rõ ràng - là nền tảng của phát triển phần mềm chuyên nghiệp.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.