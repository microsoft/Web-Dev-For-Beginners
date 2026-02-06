# Практика типів даних: Кошик для покупок в електронній комерції

## Інструкції

Уявіть, що ви створюєте сучасну систему кошика для покупок в електронній комерції. Це завдання допоможе вам зрозуміти, як різні типи даних JavaScript працюють разом для створення реальних додатків.

### Ваше завдання

Створіть детальний аналіз того, як ви б використовували типи даних JavaScript у додатку для кошика покупок. Для кожного з семи примітивних типів даних і об'єктів вам потрібно:

1. **Визначити** тип даних і його призначення
2. **Пояснити**, чому цей тип даних є найкращим вибором для конкретних функцій кошика
3. **Надати** реалістичні приклади коду, які демонструють використання типу даних
4. **Описати**, як цей тип даних взаємодіє з іншими частинами кошика

### Типи даних, які потрібно охопити

**Примітивні типи даних:**
- **String**: Назви продуктів, описи, інформація про користувача
- **Number**: Ціни, кількість, розрахунки податків
- **Boolean**: Наявність товару, уподобання користувача, статус кошика
- **Null**: Навмисно порожні значення (наприклад, відсутні коди знижок)
- **Undefined**: Неініціалізовані значення або відсутні дані
- **Symbol**: Унікальні ідентифікатори (просунуте використання)
- **BigInt**: Великі фінансові розрахунки (просунуте використання)

**Типи посилань:**
- **Object**: Деталі продукту, профілі користувачів, вміст кошика
- **Array**: Список продуктів, історія замовлень, категорії

### Формат прикладу для кожного типу даних

Для кожного типу даних структуруйте відповідь таким чином:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Реальне використання:** [Опишіть, як це працюватиме на практиці]

**Взаємодії:** [Поясніть, як цей тип даних працює з іншими]
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

**Відмова від відповідальності**:  
Цей документ був перекладений за допомогою сервісу автоматичного перекладу [Co-op Translator](https://github.com/Azure/co-op-translator). Хоча ми прагнемо до точності, будь ласка, майте на увазі, що автоматичні переклади можуть містити помилки або неточності. Оригінальний документ на його рідній мові слід вважати авторитетним джерелом. Для критичної інформації рекомендується професійний людський переклад. Ми не несемо відповідальності за будь-які непорозуміння або неправильні тлумачення, що виникають внаслідок використання цього перекладу.