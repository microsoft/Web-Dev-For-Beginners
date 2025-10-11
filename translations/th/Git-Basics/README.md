<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:53:19+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "th"
}
-->
## พื้นฐานของ GIT สำหรับมือใหม่ด้านการพัฒนาเว็บ 👶

## Git คืออะไร?
1. Git เป็นระบบควบคุมเวอร์ชันแบบกระจาย
2. โค้ดทั้งหมดและประวัติการเปลี่ยนแปลงจะถูกเก็บไว้ในคอมพิวเตอร์ของนักพัฒนาทุกคน ซึ่งช่วยให้สามารถสร้างและรวมสาขาได้ง่าย
3. ใช้เป็นระบบควบคุมเวอร์ชัน (Version Control System - VCS) สำหรับติดตามการเปลี่ยนแปลงในไฟล์คอมพิวเตอร์

* ระบบควบคุมเวอร์ชันแบบกระจาย
* ประสานงานการทำงานระหว่างนักพัฒนาหลายคน
* ใครเปลี่ยนแปลงอะไรและเมื่อไหร่
* ย้อนกลับไปยังสถานะก่อนหน้าได้ทุกเมื่อ
* มีทั้งที่เก็บข้อมูลในเครื่องและที่เก็บข้อมูลบนเซิร์ฟเวอร์

## แนวคิดของ Git
* ติดตามประวัติการเปลี่ยนแปลงของโค้ด
* สร้าง "ภาพถ่าย" (snapshot) ของไฟล์ของคุณ
* คุณเป็นผู้ตัดสินใจว่าจะสร้างภาพถ่ายเมื่อไหร่โดยการ "commit"
* สามารถเข้าถึงภาพถ่ายใด ๆ ได้ทุกเวลา
* สามารถจัดเตรียมไฟล์ก่อนการ commit ได้

### ความแตกต่างระหว่าง Git และ GitHub

| Git | GitHub |
| ------- | ----------- |
| Git เป็นซอฟต์แวร์ | GitHub เป็นบริการบนคลาวด์ |
| Git ติดตั้งในเครื่องบนระบบ | GitHub โฮสต์บนเว็บ |
| Git เป็นเครื่องมือแบบบรรทัดคำสั่ง | GitHub เป็นส่วนติดต่อผู้ใช้แบบกราฟิก |
| Git ดูแลโดย Linux | GitHub ดูแลโดย Microsoft |
| Git เน้นการควบคุมเวอร์ชันและการแชร์โค้ด | GitHub เน้นการโฮสต์โค้ดแบบรวมศูนย์ |
| Git เป็นโอเพ่นซอร์ส | GitHub มีทั้งแบบฟรีและแบบเสียค่าใช้จ่าย |
| Git เปิดตัวในปี 2005 | GitHub เปิดตัวในปี 2008 |

## การติดตั้ง Git
* Linux (Debian)  
    `$sudo apt-get install git`
* Linux (Fedora)  
    `$sudo yum install git`
* [ดาวน์โหลด](http://git-scm.com/download/mac) สำหรับ Mac  
* [ดาวน์โหลด](http://git-scm.com/download/win) สำหรับ Windows  

### ขั้นตอนการติดตั้ง:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. จากนั้นคลิก Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### หลังการติดตั้ง เราต้องตั้งค่าการใช้งาน Git โดยใช้ Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## คำสั่ง Git
___

### การเริ่มต้นและสร้างโปรเจกต์

| คำสั่ง | คำอธิบาย |
| ------- | ----------- |
| `git init` | เริ่มต้นที่เก็บข้อมูล Git ในเครื่อง |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | สร้างสำเนาในเครื่องจากที่เก็บข้อมูลบนเซิร์ฟเวอร์ |

### การบันทึกภาพรวมพื้นฐาน

| คำสั่ง | คำอธิบาย |
| ------- | ----------- |
| `git status` | ตรวจสอบสถานะ |
| `git add [file-name.txt]` | เพิ่มไฟล์ไปยังพื้นที่ staging |
| `git add -A` | เพิ่มไฟล์ใหม่และไฟล์ที่เปลี่ยนแปลงทั้งหมดไปยังพื้นที่ staging |
| `git commit -m "[commit message]"` | บันทึกการเปลี่ยนแปลง |
| `git rm -r [file-name.txt]` | ลบไฟล์ (หรือโฟลเดอร์) |
| `git push` | ส่งข้อมูลไปยังที่เก็บข้อมูลบนเซิร์ฟเวอร์ |
| `git pull` | ดึงการเปลี่ยนแปลงล่าสุดจากที่เก็บข้อมูลบนเซิร์ฟเวอร์ |

### การจัดการสาขาและการรวม

| คำสั่ง | คำอธิบาย |
| ------- | ----------- |
| `git branch` | แสดงรายการสาขา (เครื่องหมาย * หมายถึงสาขาปัจจุบัน) |
| `git branch -a` | แสดงรายการสาขาทั้งหมด (ในเครื่องและบนเซิร์ฟเวอร์) |
| `git branch [branch name]` | สร้างสาขาใหม่ |
| `git branch -D [branch name]` | ลบสาขา |
| `git push origin --delete [branch name]` | ลบสาขาบนเซิร์ฟเวอร์ |
| `git checkout -b [branch name]` | สร้างสาขาใหม่และสลับไปยังสาขานั้น |
| `git checkout -b [branch name] origin/[branch name]` | โคลนสาขาบนเซิร์ฟเวอร์และสลับไปยังสาขานั้น |
| `git branch -m [old branch name] [new branch name]` | เปลี่ยนชื่อสาขาในเครื่อง |
| `git checkout [branch name]` | สลับไปยังสาขา |
| `git checkout -` | สลับไปยังสาขาที่เคยใช้งานล่าสุด |
| `git checkout -- [file-name.txt]` | ยกเลิกการเปลี่ยนแปลงในไฟล์ |
| `git merge [branch name]` | รวมสาขาเข้ากับสาขาที่ใช้งานอยู่ |
| `git merge [source branch] [target branch]` | รวมสาขาเข้ากับสาขาเป้าหมาย |
| `git stash` | เก็บการเปลี่ยนแปลงในพื้นที่ทำงานที่ยังไม่เสร็จ |
| `git stash clear` | ลบรายการที่เก็บไว้ทั้งหมด |

### การแชร์และอัปเดตโปรเจกต์

| คำสั่ง | คำอธิบาย |
| ------- | ----------- |
| `git push origin [branch name]` | ส่งสาขาไปยังที่เก็บข้อมูลบนเซิร์ฟเวอร์ |
| `git push -u origin [branch name]` | ส่งการเปลี่ยนแปลงไปยังที่เก็บข้อมูลบนเซิร์ฟเวอร์ (และจำสาขาไว้) |
| `git push` | ส่งการเปลี่ยนแปลงไปยังที่เก็บข้อมูลบนเซิร์ฟเวอร์ (สาขาที่จำไว้) |
| `git push origin --delete [branch name]` | ลบสาขาบนเซิร์ฟเวอร์ |
| `git pull` | อัปเดตที่เก็บข้อมูลในเครื่องให้เป็นเวอร์ชันล่าสุด |
| `git pull origin [branch name]` | ดึงการเปลี่ยนแปลงจากที่เก็บข้อมูลบนเซิร์ฟเวอร์ |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | เพิ่มที่เก็บข้อมูลบนเซิร์ฟเวอร์ |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | ตั้งค่าที่เก็บข้อมูลต้นทางเป็น SSH |

### การตรวจสอบและเปรียบเทียบ

| คำสั่ง | คำอธิบาย |
| ------- | ----------- |
| `git log` | ดูการเปลี่ยนแปลง |
| `git log --summary` | ดูการเปลี่ยนแปลง (รายละเอียด) |
| `git log --oneline` | ดูการเปลี่ยนแปลง (แบบย่อ) |
| `git diff [source branch] [target branch]` | ดูตัวอย่างการเปลี่ยนแปลงก่อนการรวม |

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้อง แต่โปรดทราบว่าการแปลอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้