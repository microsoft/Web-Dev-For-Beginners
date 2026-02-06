# รันโค้ด

## ตั้งค่า

สร้าง virtual environment

```sh
python -m venv venv
source ./venv/bin/activate
```

## ติดตั้ง dependencies

```sh
pip install openai fastapi uvicorn python-dotenv
```

## รัน API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## ทดสอบ API

เข้าไปที่เอกสาร API แบบโต้ตอบได้ที่: `http://localhost:5000/docs`

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
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้อง แต่โปรดทราบว่าการแปลอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้