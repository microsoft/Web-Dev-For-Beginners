<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-27T22:04:46+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "vi"
}
-->
# API Ngân Hàng

> API Ngân Hàng được xây dựng bằng [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API này đã được xây dựng sẵn và không phải là một phần của bài tập.

Tuy nhiên, nếu bạn muốn học cách xây dựng một API như thế này, bạn có thể theo dõi loạt video sau: https://aka.ms/NodeBeginner (các video từ 17 đến 21 bao gồm chính xác API này).

Bạn cũng có thể tham khảo hướng dẫn tương tác này: https://aka.ms/learn/express-api

## Chạy máy chủ

Hãy đảm bảo rằng bạn đã cài đặt [Node.js](https://nodejs.org).

1. Git clone repo này [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Mở terminal của bạn và điều hướng vào thư mục `Web-Dev-For-Beginners/7-bank-project/api`.
3. Chạy lệnh `npm install` và chờ các gói được cài đặt (có thể mất một lúc tùy thuộc vào chất lượng kết nối internet của bạn).
4. Khi quá trình cài đặt hoàn tất, chạy lệnh `npm start` và bạn đã sẵn sàng.

Máy chủ sẽ bắt đầu lắng nghe trên cổng `5000`.
*Máy chủ này sẽ chạy cùng với terminal máy chủ ứng dụng ngân hàng chính (lắng nghe trên cổng `3000`), đừng đóng nó.*

> Lưu ý: tất cả các mục nhập được lưu trữ trong bộ nhớ và không được lưu trữ lâu dài, vì vậy khi máy chủ dừng, tất cả dữ liệu sẽ bị mất.

## Chi tiết API

Route                                        | Mô tả
---------------------------------------------|------------------------------------
GET    /api/                                 | Lấy thông tin máy chủ
POST   /api/accounts/                        | Tạo một tài khoản, ví dụ: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Lấy tất cả dữ liệu cho tài khoản được chỉ định
DELETE /api/accounts/:user                   | Xóa tài khoản được chỉ định
POST   /api/accounts/:user/transactions      | Thêm một giao dịch, ví dụ: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Xóa giao dịch được chỉ định

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.