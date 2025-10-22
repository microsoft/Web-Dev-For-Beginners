<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-22T17:21:48+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "pa"
}
-->
# ਡਾਟਾ ਟਾਈਪਸ ਅਭਿਆਸ: ਈ-ਕਾਮਰਸ ਸ਼ਾਪਿੰਗ ਕਾਰਟ

## ਹਦਾਇਤਾਂ

ਕਲਪਨਾ ਕਰੋ ਕਿ ਤੁਸੀਂ ਇੱਕ ਆਧੁਨਿਕ ਈ-ਕਾਮਰਸ ਸ਼ਾਪਿੰਗ ਕਾਰਟ ਸਿਸਟਮ ਬਣਾਉਣ ਜਾ ਰਹੇ ਹੋ। ਇਹ ਅਭਿਆਸ ਤੁਹਾਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰੇਗਾ ਕਿ ਕਿਵੇਂ ਵੱਖ-ਵੱਖ ਜਾਵਾਸਕ੍ਰਿਪਟ ਡਾਟਾ ਟਾਈਪਸ ਇਕੱਠੇ ਹੋ ਕੇ ਅਸਲ ਦੁਨੀਆ ਦੇ ਐਪਲੀਕੇਸ਼ਨ ਬਣਾਉਂਦੇ ਹਨ।

### ਤੁਹਾਡਾ ਕੰਮ

ਜਾਵਾਸਕ੍ਰਿਪਟ ਡਾਟਾ ਟਾਈਪਸ ਨੂੰ ਇੱਕ ਸ਼ਾਪਿੰਗ ਕਾਰਟ ਐਪਲੀਕੇਸ਼ਨ ਵਿੱਚ ਵਰਤਣ ਦੇ ਤਰੀਕੇ ਬਾਰੇ ਵਿਸਤ੍ਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਬਣਾਓ। ਸੱਤ ਪ੍ਰਿਮਿਟਿਵ ਡਾਟਾ ਟਾਈਪਸ ਅਤੇ ਓਬਜੈਕਟਸ ਵਿੱਚੋਂ ਹਰ ਇੱਕ ਲਈ, ਤੁਹਾਨੂੰ ਇਹ ਕਰਨਾ ਹੈ:

1. **ਪਛਾਣੋ** ਡਾਟਾ ਟਾਈਪ ਅਤੇ ਇਸਦਾ ਉਦੇਸ਼
2. **ਸਮਝਾਓ** ਕਿ ਇਹ ਡਾਟਾ ਟਾਈਪ ਖਾਸ ਸ਼ਾਪਿੰਗ ਕਾਰਟ ਫੀਚਰਾਂ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਚੋਣ ਕਿਉਂ ਹੈ
3. **ਉਦਾਹਰਣ ਦਿਓ** ਹਕੀਕਤੀ ਕੋਡ ਦੇ ਜ਼ਰੀਏ ਜੋ ਇਸ ਡਾਟਾ ਟਾਈਪ ਨੂੰ ਕਾਰਵਾਈ ਵਿੱਚ ਦਿਖਾਉਂਦੇ ਹਨ
4. **ਵਰਣਨ ਕਰੋ** ਕਿ ਇਹ ਡਾਟਾ ਟਾਈਪ ਸ਼ਾਪਿੰਗ ਕਾਰਟ ਦੇ ਹੋਰ ਹਿੱਸਿਆਂ ਨਾਲ ਕਿਵੇਂ ਸੰਚਾਰ ਕਰਦਾ ਹੈ

### ਕਵਰੇਜ ਲਈ ਲੋੜੀਂਦੇ ਡਾਟਾ ਟਾਈਪਸ

**ਪ੍ਰਿਮਿਟਿਵ ਡਾਟਾ ਟਾਈਪਸ:**
- **String**: ਉਤਪਾਦ ਦੇ ਨਾਮ, ਵੇਰਵੇ, ਯੂਜ਼ਰ ਜਾਣਕਾਰੀ
- **Number**: ਕੀਮਤਾਂ, ਮਾਤਰਾ, ਟੈਕਸ ਦੀ ਗਣਨਾ
- **Boolean**: ਆਈਟਮ ਦੀ ਉਪਲਬਧਤਾ, ਯੂਜ਼ਰ ਪਸੰਦ, ਕਾਰਟ ਸਥਿਤੀ
- **Null**: ਜਾਨਬੂਝ ਕੇ ਖਾਲੀ ਕੀਮਤਾਂ (ਜਿਵੇਂ ਕਿ ਗੁੰਮ ਹੋਏ ਡਿਸਕਾਊਂਟ ਕੋਡ)
- **Undefined**: ਅਣਪਛਾਤੇ ਕੀਮਤਾਂ ਜਾਂ ਗੁੰਮ ਹੋਈ ਜਾਣਕਾਰੀ
- **Symbol**: ਵਿਲੱਖਣ ਪਛਾਣਕਰਤਾ (ਤਕਨੀਕੀ ਵਰਤੋਂ)
- **BigInt**: ਵੱਡੇ ਵਿੱਤੀ ਗਣਨਾਵਾਂ (ਤਕਨੀਕੀ ਵਰਤੋਂ)

**ਰਿਫਰੈਂਸ ਟਾਈਪਸ:**
- **Object**: ਉਤਪਾਦ ਵੇਰਵੇ, ਯੂਜ਼ਰ ਪ੍ਰੋਫਾਈਲ, ਕਾਰਟ ਸਮੱਗਰੀ
- **Array**: ਉਤਪਾਦਾਂ ਦੀ ਸੂਚੀ, ਆਰਡਰ ਇਤਿਹਾਸ, ਸ਼੍ਰੇਣੀਆਂ

### ਹਰ ਡਾਟਾ ਟਾਈਪ ਲਈ ਉਦਾਹਰਣ ਫਾਰਮੈਟ

ਹਰ ਡਾਟਾ ਟਾਈਪ ਲਈ, ਆਪਣਾ ਜਵਾਬ ਇਸ ਤਰ੍ਹਾਂ ਬਣਾਓ:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**ਅਸਲ-ਜੀਵਨ ਵਰਤੋਂ:** [ਇਹ ਅਮਲ ਵਿੱਚ ਕਿਵੇਂ ਕੰਮ ਕਰੇਗਾ]

**ਸੰਚਾਰ:** [ਇਹ ਡਾਟਾ ਟਾਈਪ ਹੋਰਾਂ ਨਾਲ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ]
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

**ਅਸਵੀਕਰਤਾ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁਚੀਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਇਸ ਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਅਸੀਂ ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।