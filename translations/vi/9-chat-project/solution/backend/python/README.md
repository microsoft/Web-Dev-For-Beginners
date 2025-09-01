<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:47+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "vi"
}
-->
# Chạy mã

## Thiết lập

Tạo môi trường ảo

```sh
python -m venv venv
source ./venv/bin/activate
```

## Cài đặt các phụ thuộc

```sh
pip install openai flask flask-cors 
```

## Chạy API

```sh
python api.py
```

## Chạy giao diện người dùng

Đảm bảo bạn đang đứng trong thư mục frontend

Tìm *app.js*, thay đổi `BASE_URL` thành URL backend của bạn

Chạy nó

```
npx http-server -p 8000
```

Hãy thử nhập một tin nhắn trong khung chat, bạn sẽ thấy một phản hồi (với điều kiện bạn đang chạy điều này trong Codespace hoặc đã thiết lập mã thông báo truy cập).

## Thiết lập mã thông báo truy cập (nếu bạn không chạy điều này trong Codespace)

Xem [Thiết lập PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc sự không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.