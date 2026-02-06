# Chạy mã

## Thiết lập

Tạo môi trường ảo

```sh
python -m venv venv
source ./venv/bin/activate
```

## Cài đặt các phụ thuộc

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Chạy API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Kiểm tra API

Truy cập tài liệu API tương tác tại: `http://localhost:5000/docs`

## Chạy giao diện frontend

Đảm bảo bạn đang đứng trong thư mục frontend

Tìm *app.js*, thay đổi `BASE_URL` thành URL backend của bạn

Chạy nó

```
npx http-server -p 8000
```

Hãy thử nhập một tin nhắn vào chat, bạn sẽ thấy phản hồi (miễn là bạn đang chạy điều này trong Codespace hoặc đã thiết lập mã thông báo truy cập).

## Thiết lập mã thông báo truy cập (nếu bạn không chạy điều này trong Codespace)

Xem [Thiết lập PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.