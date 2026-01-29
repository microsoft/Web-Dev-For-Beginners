# تمرین انواع داده‌ها: سبد خرید تجارت الکترونیک

## دستورالعمل‌ها

تصور کنید که در حال ساخت یک سیستم سبد خرید مدرن برای تجارت الکترونیک هستید. این تمرین به شما کمک می‌کند تا بفهمید چگونه انواع داده‌های مختلف جاوااسکریپت با هم کار می‌کنند تا برنامه‌های واقعی ایجاد کنند.

### وظیفه شما

یک تحلیل جامع از نحوه استفاده از انواع داده‌های جاوااسکریپت در یک برنامه سبد خرید ایجاد کنید. برای هر یک از هفت نوع داده اولیۀ جاوااسکریپت و اشیاء، باید:

1. **شناسایی** نوع داده و هدف آن
2. **توضیح** اینکه چرا این نوع داده بهترین انتخاب برای ویژگی‌های خاص سبد خرید است
3. **ارائه** مثال‌های کد واقعی که نوع داده را در عمل نشان دهند
4. **توضیح** اینکه چگونه این نوع داده با سایر بخش‌های سبد خرید تعامل دارد

### انواع داده مورد نیاز برای پوشش

**انواع داده اولیه:**
- **رشته (String)**: نام محصولات، توضیحات، اطلاعات کاربر
- **عدد (Number)**: قیمت‌ها، تعداد، محاسبات مالیات
- **بولین (Boolean)**: موجودی کالا، ترجیحات کاربر، وضعیت سبد خرید
- **تهی (Null)**: مقادیر به‌طور عمدی خالی (مثل کدهای تخفیف موجود نباشند)
- **تعریف نشده (Undefined)**: مقادیر مقداردهی نشده یا داده‌های مفقود
- **نماد (Symbol)**: شناسه‌های یکتا (استفاده پیشرفته)
- **بیگ‌اینت (BigInt)**: محاسبات مالی بزرگ (استفاده پیشرفته)

**انواع ارجاعی:**
- **شیء (Object)**: جزئیات محصول، پروفایل‌های کاربری، محتوای سبد خرید
- **آرایه (Array)**: لیست محصولات، تاریخچه سفارشات، دسته‌بندی‌ها

### قالب نمونه برای هر نوع داده

برای هر نوع داده، پاسخ خود را به این صورت ساختاربندی کنید:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**استفاده در دنیای واقعی:** [توضیح دهید که چگونه این در عمل کار می‌کند]

**تعاملات:** [توضیح دهید که این نوع داده چگونه با سایر انواع داده تعامل دارد]
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

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**سلب مسئولیت**:  
این سند با استفاده از خدمات ترجمه ماشینی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما در تلاش برای دقت هستیم، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است حاوی اشتباهات یا نواقصی باشند. سند اصلی به زبان بومی خود باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، استفاده از ترجمه حرفه‌ای انسانی توصیه می‌شود. ما در قبال هرگونه سوءتفاهم یا برداشت نادرست ناشی از استفاده این ترجمه مسئولیتی نداریم.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->