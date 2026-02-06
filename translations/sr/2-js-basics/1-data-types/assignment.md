# Практична примена типова података: Е-трговина и корпа за куповину

## Упутства

Замислите да правите модеран систем за корпу за куповину у е-трговини. Овај задатак ће вам помоћи да разумете како различити типови података у JavaScript-у раде заједно како би створили апликације из стварног света.

### Ваш задатак

Направите свеобухватну анализу како бисте користили типове података у JavaScript-у у апликацији за корпу за куповину. За сваки од седам примитивних типова података и објеката, потребно је:

1. **Идентификовати** тип података и његову сврху
2. **Објаснити** зашто је тај тип података најбољи избор за одређене функције корпе за куповину
3. **Пружити** реалистичне примере кода који показују употребу тог типа података
4. **Описати** како тај тип података интерагује са другим деловима корпе за куповину

### Типови података које треба обрадити

**Примитивни типови података:**
- **String**: Имена производа, описи, информације о кориснику
- **Number**: Цене, количине, прорачуни пореза
- **Boolean**: Доступност артикала, корисничке преференције, статус корпе
- **Null**: Намерно празне вредности (као што су недостајући кодови за попуст)
- **Undefined**: Неиницијализоване вредности или недостајући подаци
- **Symbol**: Јединствени идентификатори (напредна употреба)
- **BigInt**: Велики финансијски прорачуни (напредна употреба)

**Референцијални типови:**
- **Object**: Детаљи о производу, профили корисника, садржај корпе
- **Array**: Листа производа, историја поруџбина, категорије

### Пример формата за сваки тип података

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Примена у стварном свету:** [Опишите како би ово функционисало у пракси]

**Интеракције:** [Објасните како овај тип података ради са другима]
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

**Одрицање од одговорности**:  
Овај документ је преведен помоћу услуге за превођење вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако настојимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.