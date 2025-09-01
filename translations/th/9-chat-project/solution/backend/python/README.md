<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:02+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "th"
}
-->
# รันโค้ด

## การตั้งค่า

สร้าง virtual environment

```sh
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

ค้นหา *app.js* และเปลี่ยน `BASE_URL` ให้เป็น URL ของ backend ของคุณ

รันโปรแกรม

```
npx http-server -p 8000
```

ลองพิมพ์ข้อความในแชท คุณควรเห็นการตอบกลับ (หากคุณกำลังรันใน Codespace หรือได้ตั้งค่า access token แล้ว)

## ตั้งค่า access token (หากคุณไม่ได้รันใน Codespace)

ดู [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้องมากที่สุด แต่โปรดทราบว่าการแปลโดยอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราจะไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้