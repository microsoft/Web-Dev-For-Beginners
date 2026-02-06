# แอปแบบทดสอบ

แบบทดสอบเหล่านี้เป็นแบบทดสอบก่อนและหลังการบรรยายสำหรับหลักสูตรวิทยาศาสตร์ข้อมูลที่ https://aka.ms/webdev-beginners

## การเพิ่มชุดแบบทดสอบที่แปลแล้ว

เพิ่มการแปลแบบทดสอบโดยการสร้างโครงสร้างแบบทดสอบที่ตรงกันในโฟลเดอร์ `assets/translations` แบบทดสอบต้นฉบับอยู่ใน `assets/translations/en` แบบทดสอบถูกแบ่งออกเป็นหลายกลุ่ม อย่าลือตรวจสอบให้แน่ใจว่าการจัดลำดับตัวเลขตรงกับส่วนของแบบทดสอบที่เหมาะสม หลักสูตรนี้มีแบบทดสอบทั้งหมด 40 ชุด โดยเริ่มนับจาก 0

<details>
<summary>นี่คือตัวอย่างโครงสร้างไฟล์การแปล:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

หลังจากแก้ไขการแปลแล้ว ให้แก้ไขไฟล์ index.js ในโฟลเดอร์การแปลเพื่อ import ไฟล์ทั้งหมดตามรูปแบบใน `en`

แก้ไขไฟล์ `index.js` ใน `assets/translations` เพื่อ import ไฟล์แปลใหม่ 

ตัวอย่างเช่น หาก JSON การแปลของคุณอยู่ใน `ex.json` ให้ตั้งค่า 'ex' เป็นคีย์ localization จากนั้นเพิ่มเข้าไปตามตัวอย่างด้านล่างเพื่อ import

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## รันแอปแบบทดสอบในเครื่อง

### สิ่งที่ต้องมี

- บัญชี GitHub
- [Node.js และ Git](https://nodejs.org/)

### การติดตั้งและตั้งค่า

1. สร้าง repository จาก [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone repository ใหม่ของคุณ และไปที่โฟลเดอร์ quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. ติดตั้ง npm packages และ dependencies

   ```bash
   npm install
   ```

### สร้างแอป

1. เพื่อสร้างโซลูชัน ให้รันคำสั่ง:

   ```bash
   npm run build
   ```

### เริ่มต้นแอป

1. เพื่อรันโซลูชัน ให้รันคำสั่ง:

    ```bash
    npm run dev
    ```

### [ตัวเลือก] การตรวจสอบโค้ด (Linting)

1. เพื่อให้แน่ใจว่าโค้ดได้รับการตรวจสอบ ให้รันคำสั่ง:

    ```bash
    npm run lint
    ```

## การปรับใช้แอปแบบทดสอบไปยัง Azure 

### สิ่งที่ต้องมี
- การสมัครสมาชิก Azure สามารถสมัครได้ฟรี [ที่นี่](https://aka.ms/azure-free)

    _ประมาณการค่าใช้จ่ายในการปรับใช้แอปแบบทดสอบนี้: ฟรี_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

เมื่อคุณลงชื่อเข้าใช้ Azure ผ่านลิงก์ด้านบนแล้ว ให้เลือก subscription และ resource group จากนั้น:

- รายละเอียด Static Web App: ระบุชื่อและเลือกแผนการโฮสต์
- การเข้าสู่ระบบ GitHub: ตั้งค่าแหล่งที่มาของการปรับใช้เป็น GitHub จากนั้นเข้าสู่ระบบและกรอกข้อมูลที่จำเป็นในฟอร์ม:
    - *Organization* – เลือกองค์กรของคุณ
    - *Repository* – เลือก repository หลักสูตร Web Dev for Beginners 
    - *Branch* - เลือก branch (main) 
- Build Presets: Azure Static Web Apps ใช้อัลกอริทึมเพื่อตรวจจับ framework ที่ใช้ในแอปพลิเคชันของคุณ
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- การปรับใช้: คลิก 'Review + Create' จากนั้นคลิก 'Create'

    เมื่อการปรับใช้เสร็จสิ้น ไฟล์ workflow จะถูกสร้างในไดเรกทอรี *.github* ของ repository ของคุณ ไฟล์ workflow นี้มีคำแนะนำเกี่ยวกับเหตุการณ์ที่จะกระตุ้นการปรับใช้แอปใหม่ไปยัง Azure เช่น _การ **push** บน branch **main**_ เป็นต้น

    <details>
    <summary>ตัวอย่างไฟล์ Workflow</summary>
    นี่คือตัวอย่างไฟล์ workflow ของ GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- หลังการปรับใช้: หลังจากการปรับใช้เสร็จสิ้น คลิก 'Go to Deployment' จากนั้นคลิก 'View app in browser'

เมื่อ GitHub Action (workflow) ของคุณทำงานสำเร็จ ให้รีเฟรชหน้าเว็บสดเพื่อดูแอปพลิเคชันของคุณ

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้องมากที่สุด แต่โปรดทราบว่าการแปลโดยอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษาจากผู้เชี่ยวชาญ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความที่ผิดพลาดซึ่งเกิดจากการใช้การแปลนี้