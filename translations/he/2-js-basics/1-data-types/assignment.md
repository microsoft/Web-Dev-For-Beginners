<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-23T01:10:21+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "he"
}
-->
# תרגול סוגי נתונים: עגלת קניות למסחר אלקטרוני

## הוראות

דמיינו שאתם בונים מערכת עגלת קניות מודרנית למסחר אלקטרוני. משימה זו תעזור לכם להבין כיצד סוגי נתונים שונים ב-JavaScript עובדים יחד ליצירת יישומים בעולם האמיתי.

### המשימה שלכם

צרו ניתוח מקיף של איך הייתם משתמשים בסוגי הנתונים של JavaScript באפליקציית עגלת קניות. עבור כל אחד משבעת סוגי הנתונים הפרימיטיביים והאובייקטים, עליכם:

1. **לזהות** את סוג הנתון ואת מטרתו  
2. **להסביר** מדוע סוג הנתון הזה הוא הבחירה הטובה ביותר עבור תכונות ספציפיות בעגלת הקניות  
3. **לספק** דוגמאות קוד מציאותיות שמראות את סוג הנתון בפעולה  
4. **לתאר** כיצד סוג הנתון הזה מתקשר עם חלקים אחרים בעגלת הקניות  

### סוגי הנתונים הנדרשים לכיסוי

**סוגי נתונים פרימיטיביים:**  
- **String**: שמות מוצרים, תיאורים, מידע על משתמשים  
- **Number**: מחירים, כמויות, חישובי מס  
- **Boolean**: זמינות פריטים, העדפות משתמש, מצב העגלה  
- **Null**: ערכים ריקים בכוונה (כמו קודי הנחה חסרים)  
- **Undefined**: ערכים לא מאותחלים או נתונים חסרים  
- **Symbol**: מזהים ייחודיים (שימוש מתקדם)  
- **BigInt**: חישובים פיננסיים גדולים (שימוש מתקדם)  

**סוגי נתונים ייחוסיים:**  
- **Object**: פרטי מוצרים, פרופילי משתמשים, תכולת העגלה  
- **Array**: רשימת מוצרים, היסטוריית הזמנות, קטגוריות  

### פורמט לדוגמה עבור כל סוג נתון

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```
  
**שימוש בעולם האמיתי:** [תארו כיצד זה יעבוד בפועל]  

**אינטראקציות:** [הסבירו כיצד סוג הנתון הזה עובד עם אחרים]  
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

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. אנו לא נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.