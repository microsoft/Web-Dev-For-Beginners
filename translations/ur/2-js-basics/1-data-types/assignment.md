# ڈیٹا ٹائپس کی مشق: ای کامرس شاپنگ کارٹ

## ہدایات

تصور کریں کہ آپ ایک جدید ای کامرس شاپنگ کارٹ سسٹم بنا رہے ہیں۔ یہ اسائنمنٹ آپ کو یہ سمجھنے میں مدد دے گا کہ مختلف جاوا اسکرپٹ ڈیٹا ٹائپس کس طرح حقیقی دنیا کی ایپلیکیشنز بنانے میں ایک ساتھ کام کرتے ہیں۔

### آپ کا کام

جاوا اسکرپٹ ڈیٹا ٹائپس کے استعمال کا ایک جامع تجزیہ تیار کریں جو شاپنگ کارٹ ایپلیکیشن میں استعمال ہوں۔ سات پرائمری ڈیٹا ٹائپس اور آبجیکٹس کے لیے، آپ کو درج ذیل کرنا ہوگا:

1. **شناخت کریں** ڈیٹا ٹائپ اور اس کا مقصد
2. **وضاحت کریں** کہ یہ ڈیٹا ٹائپ شاپنگ کارٹ کی مخصوص خصوصیات کے لیے بہترین انتخاب کیوں ہے
3. **حقیقی کوڈ کی مثالیں فراہم کریں** جو ڈیٹا ٹائپ کو عملی طور پر دکھائیں
4. **بیان کریں** کہ یہ ڈیٹا ٹائپ شاپنگ کارٹ کے دیگر حصوں کے ساتھ کیسے تعامل کرتا ہے

### کور کرنے کے لیے مطلوبہ ڈیٹا ٹائپس

**پرائمری ڈیٹا ٹائپس:**
- **String**: پروڈکٹ کے نام، تفصیلات، صارف کی معلومات
- **Number**: قیمتیں، مقداریں، ٹیکس کے حسابات
- **Boolean**: آئٹم کی دستیابی، صارف کی ترجیحات، کارٹ کی حالت
- **Null**: جان بوجھ کر خالی ویلیوز (جیسے گمشدہ ڈسکاؤنٹ کوڈز)
- **Undefined**: غیر متعین ویلیوز یا گمشدہ ڈیٹا
- **Symbol**: منفرد شناخت کنندگان (ایڈوانس استعمال)
- **BigInt**: بڑے مالیاتی حسابات (ایڈوانس استعمال)

**ریفرنس ٹائپس:**
- **Object**: پروڈکٹ کی تفصیلات، صارف کی پروفائلز، کارٹ کا مواد
- **Array**: پروڈکٹس کی فہرست، آرڈر کی تاریخ، کیٹیگریز

### ہر ڈیٹا ٹائپ کے لیے مثال کا فارمیٹ

ہر ڈیٹا ٹائپ کے لیے، اپنے جواب کو اس طرح ترتیب دیں:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**حقیقی دنیا میں استعمال:** [وضاحت کریں کہ یہ عملی طور پر کیسے کام کرے گا]

**تعاملات:** [وضاحت کریں کہ یہ ڈیٹا ٹائپ دوسروں کے ساتھ کیسے کام کرتا ہے]
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

**اعلانِ لاتعلقی**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے لیے ہم ذمہ دار نہیں ہیں۔