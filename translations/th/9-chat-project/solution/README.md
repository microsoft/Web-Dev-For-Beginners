<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:48:42+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "th"
}
-->
# รันโค้ด

## การตั้งค่า

สร้าง virtual environment

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## ติดตั้ง dependencies

```sh
pip install openai flask flask-cors 
```

## รัน API

```sh
python api.py
```

## รัน frontend

ตรวจสอบให้แน่ใจว่าคุณอยู่ในโฟลเดอร์ frontend

ค้นหา *app.js* และเปลี่ยน `BASE_URL` เป็น URL ของ backend ของคุณ

รันโปรแกรม

```
npx http-server -p 8000
```

ลองพิมพ์ข้อความในแชท คุณควรเห็นการตอบกลับ (หากคุณกำลังรันใน Codespace หรือได้ตั้งค่า access token แล้ว)

## ตั้งค่า access token (หากคุณไม่ได้รันใน Codespace)

ดู [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้อง แต่โปรดทราบว่าการแปลอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่แม่นยำ เอกสารต้นฉบับในภาษาต้นทางควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษาจากผู้เชี่ยวชาญ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความที่ผิดพลาดซึ่งเกิดจากการใช้การแปลนี้