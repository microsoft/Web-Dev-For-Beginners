<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-24T22:23:03+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "bg"
}
-->
# Практика с типове данни: Пазарска количка за електронна търговия

## Инструкции

Представете си, че изграждате модерна система за пазарска количка за електронна търговия. Това задание ще ви помогне да разберете как различните типове данни в JavaScript работят заедно, за да създадат приложения от реалния свят.

### Вашата задача

Създайте подробен анализ за това как бихте използвали типовете данни в JavaScript в приложение за пазарска количка. За всеки от седемте примитивни типа данни и обекти трябва:

1. **Да идентифицирате** типа данни и неговата цел
2. **Да обясните** защо този тип данни е най-добрият избор за конкретни функции на пазарската количка
3. **Да предоставите** реалистични примери за код, показващи използването на типа данни
4. **Да опишете** как този тип данни взаимодейства с други части на пазарската количка

### Задължителни типове данни за разглеждане

**Примитивни типове данни:**
- **String**: Имена на продукти, описания, информация за потребителя
- **Number**: Цени, количества, изчисления на данъци
- **Boolean**: Наличност на артикули, предпочитания на потребителя, статус на количката
- **Null**: Умишлено празни стойности (като липсващи кодове за отстъпка)
- **Undefined**: Неинициализирани стойности или липсващи данни
- **Symbol**: Уникални идентификатори (за напреднали потребители)
- **BigInt**: Големи финансови изчисления (за напреднали потребители)

**Референтни типове:**
- **Object**: Детайли за продукти, профили на потребители, съдържание на количката
- **Array**: Списък с продукти, история на поръчките, категории

### Примерен формат за всеки тип данни

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Реално приложение:** [Опишете как това би работило на практика]

**Взаимодействия:** [Обяснете как този тип данни работи с други]
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

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за каквито и да е недоразумения или погрешни интерпретации, произтичащи от използването на този превод.