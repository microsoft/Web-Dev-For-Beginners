<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:49:09+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "vi"
}
-->
# Chạy mã

## Thiết lập

Tạo môi trường ảo

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Cài đặt các thư viện phụ thuộc

```sh
pip install openai flask flask-cors 
```

## Chạy API

```sh
python api.py
```

## Chạy giao diện người dùng

Đảm bảo bạn đang đứng trong thư mục frontend

Tìm *app.js*, thay đổi `BASE_URL` thành URL của backend của bạn

Chạy nó

```
npx http-server -p 8000
```

Hãy thử nhập một tin nhắn trong chat, bạn sẽ thấy phản hồi (miễn là bạn đang chạy điều này trong Codespace hoặc đã thiết lập mã thông báo truy cập).

## Thiết lập mã thông báo truy cập (nếu bạn không chạy điều này trong Codespace)

Xem [Thiết lập PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.