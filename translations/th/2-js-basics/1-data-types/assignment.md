<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-23T20:43:16+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "th"
}
-->
# การฝึกฝนประเภทข้อมูล: ระบบตะกร้าสินค้าในอีคอมเมิร์ซ

## คำแนะนำ

ลองจินตนาการว่าคุณกำลังสร้างระบบตะกร้าสินค้าในอีคอมเมิร์ซที่ทันสมัย งานนี้จะช่วยให้คุณเข้าใจว่าประเภทข้อมูลใน JavaScript ทำงานร่วมกันอย่างไรเพื่อสร้างแอปพลิเคชันในโลกจริง

### งานของคุณ

สร้างการวิเคราะห์ที่ครอบคลุมเกี่ยวกับวิธีที่คุณจะใช้ประเภทข้อมูลใน JavaScript ในแอปพลิเคชันตะกร้าสินค้า สำหรับแต่ละประเภทข้อมูลพื้นฐานทั้งเจ็ดและออบเจ็กต์ คุณต้อง:

1. **ระบุ** ประเภทข้อมูลและวัตถุประสงค์ของมัน
2. **อธิบาย** ว่าทำไมประเภทข้อมูลนี้จึงเป็นตัวเลือกที่ดีที่สุดสำหรับฟีเจอร์ตะกร้าสินค้าเฉพาะ
3. **ให้** ตัวอย่างโค้ดที่สมจริงแสดงการใช้งานประเภทข้อมูลนั้น
4. **อธิบาย** ว่าประเภทข้อมูลนี้มีปฏิสัมพันธ์กับส่วนอื่น ๆ ของตะกร้าสินค้าอย่างไร

### ประเภทข้อมูลที่ต้องครอบคลุม

**ประเภทข้อมูลพื้นฐาน:**
- **String**: ชื่อสินค้า, คำอธิบาย, ข้อมูลผู้ใช้
- **Number**: ราคา, จำนวน, การคำนวณภาษี
- **Boolean**: ความพร้อมใช้งานของสินค้า, การตั้งค่าผู้ใช้, สถานะตะกร้าสินค้า
- **Null**: ค่าที่ตั้งใจให้ว่างเปล่า (เช่น โค้ดส่วนลดที่ไม่มี)
- **Undefined**: ค่าที่ไม่ได้รับการกำหนดหรือข้อมูลที่หายไป
- **Symbol**: ตัวระบุที่ไม่ซ้ำกัน (การใช้งานขั้นสูง)
- **BigInt**: การคำนวณทางการเงินขนาดใหญ่ (การใช้งานขั้นสูง)

**ประเภทอ้างอิง:**
- **Object**: รายละเอียดสินค้า, โปรไฟล์ผู้ใช้, เนื้อหาตะกร้าสินค้า
- **Array**: รายการสินค้า, ประวัติการสั่งซื้อ, หมวดหมู่

### รูปแบบตัวอย่างสำหรับแต่ละประเภทข้อมูล

สำหรับแต่ละประเภทข้อมูล ให้จัดโครงสร้างคำตอบของคุณดังนี้:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**การใช้งานในโลกจริง:** [อธิบายว่ามันจะทำงานอย่างไรในทางปฏิบัติ]

**การปฏิสัมพันธ์:** [อธิบายว่าประเภทข้อมูลนี้ทำงานร่วมกับประเภทอื่นอย่างไร]
```

### Bonus Challenges

1. **Type Coercion**: Show an example where JavaScript automatically converts between data types in your shopping cart (e.g., string "5" + number 10)

2. **Data Validation**: Demonstrate how you would check if user input is the correct data type before processing

3. **Performance Considerations**: Explain when you might choose one data type over another for performance reasons

### Submission Guidelines

- Create a markdown document with clear headings for each data type
- Include working JavaScript code examples
- Use realistic e-commerce scenarios in your examples
- Explain your reasoning clearly for beginners to understand
- Test your code examples to ensure they work correctly

## Rubric

| Criteria | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Needs Improvement (Below 70%) |
|----------|---------------------|---------------------|---------------------|------------------------------|
| **Data Type Coverage** | All 7 primitive types and objects/arrays covered with detailed explanations | 6-7 data types covered with good explanations | 4-5 data types covered with basic explanations | Fewer than 4 data types or minimal explanations |
| **Code Examples** | All examples are realistic, working, and well-commented | Most examples work and are relevant to e-commerce | Some examples work but may be generic | Code examples are incomplete or non-functional |
| **Real-world Application** | Clearly connects each data type to practical shopping cart features | Good connection to e-commerce scenarios | Some connection to shopping cart context | Limited real-world application demonstrated |
| **Technical Accuracy** | All technical information is correct and demonstrates deep understanding | Most technical information is accurate | Generally accurate with minor errors | Contains significant technical errors |
| **Communication** | Explanations are clear, beginner-friendly, and well-organized | Good explanations that are mostly clear | Explanations are understandable but may lack clarity | Explanations are unclear or poorly organized |
| **Bonus Elements** | Includes multiple bonus challenges with excellent execution | Includes one or more bonus challenges well done | Attempts bonus challenges with mixed success | No bonus challenges attempted |

### Learning Objectives

By completing this assignment, you will:
- ✅ **Understand** the seven JavaScript primitive data types and their uses
- ✅ **Apply** data types to real-world programming scenarios
- ✅ **Analyze** when to choose specific data types for different purposes
- ✅ **Create** working code examples that demonstrate data type usage
- ✅ **Explain** technical concepts in beginner-friendly language
- ✅ **Connect** fundamental programming concepts to practical applications

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้อง แต่โปรดทราบว่าการแปลโดยอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้