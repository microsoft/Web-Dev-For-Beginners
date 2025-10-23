<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-22T22:09:19+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "ru"
}
-->
# Практика типов данных: Корзина покупок для электронной коммерции

## Инструкции

Представьте, что вы создаете современную систему корзины покупок для электронной коммерции. Это задание поможет вам понять, как различные типы данных JavaScript работают вместе для создания приложений в реальном мире.

### Ваша задача

Создайте подробный анализ того, как вы будете использовать типы данных JavaScript в приложении корзины покупок. Для каждого из семи примитивных типов данных и объектов вам нужно:

1. **Определить** тип данных и его назначение
2. **Объяснить**, почему этот тип данных является лучшим выбором для определенных функций корзины покупок
3. **Предоставить** реалистичные примеры кода, демонстрирующие использование типа данных
4. **Описать**, как этот тип данных взаимодействует с другими частями корзины покупок

### Типы данных, которые необходимо рассмотреть

**Примитивные типы данных:**
- **String**: Названия продуктов, описания, информация о пользователе
- **Number**: Цены, количество, расчеты налогов
- **Boolean**: Наличие товара, предпочтения пользователя, статус корзины
- **Null**: Намеренно пустые значения (например, отсутствующие промокоды)
- **Undefined**: Неинициализированные значения или отсутствующие данные
- **Symbol**: Уникальные идентификаторы (продвинутое использование)
- **BigInt**: Большие финансовые расчеты (продвинутое использование)

**Ссылочные типы:**
- **Object**: Детали продукта, профили пользователей, содержимое корзины
- **Array**: Список продуктов, история заказов, категории

### Пример формата для каждого типа данных

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Использование в реальном мире:** [Опишите, как это будет работать на практике]

**Взаимодействия:** [Объясните, как этот тип данных работает с другими]
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

**Отказ от ответственности**:  
Этот документ был переведен с использованием сервиса автоматического перевода [Co-op Translator](https://github.com/Azure/co-op-translator). Несмотря на наши усилия обеспечить точность, автоматические переводы могут содержать ошибки или неточности. Оригинальный документ на его родном языке следует считать авторитетным источником. Для получения критически важной информации рекомендуется профессиональный перевод человеком. Мы не несем ответственности за любые недоразумения или неправильные интерпретации, возникающие в результате использования данного перевода.