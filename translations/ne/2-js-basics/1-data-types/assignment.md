<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-22T16:39:15+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "ne"
}
-->
# डेटा प्रकार अभ्यास: ई-कमर्स शपिंग कार्ट

## निर्देशनहरू

कल्पना गर्नुहोस् कि तपाईं आधुनिक ई-कमर्स शपिंग कार्ट प्रणाली निर्माण गर्दै हुनुहुन्छ। यो असाइनमेन्टले तपाईंलाई विभिन्न JavaScript डेटा प्रकारहरू कसरी वास्तविक जीवनको अनुप्रयोगहरू बनाउन सँगै काम गर्छन् भन्ने बुझ्न मद्दत गर्नेछ।

### तपाईंको कार्य

JavaScript डेटा प्रकारहरू शपिंग कार्ट एप्लिकेसनमा कसरी प्रयोग गरिन्छ भन्ने विस्तृत विश्लेषण तयार गर्नुहोस्। सातवटा प्रिमिटिभ डेटा प्रकारहरू र वस्तुहरूको लागि, तपाईंले निम्न गर्नुपर्नेछ:

1. **पहिचान गर्नुहोस्** डेटा प्रकार र यसको उद्देश्य
2. **व्याख्या गर्नुहोस्** किन यो डेटा प्रकार विशेष शपिंग कार्ट सुविधाहरूको लागि उत्तम विकल्प हो
3. **वास्तविक कोड उदाहरणहरू प्रदान गर्नुहोस्** जसले डेटा प्रकारलाई कार्यमा देखाउँछ
4. **वर्णन गर्नुहोस्** यो डेटा प्रकार शपिंग कार्टका अन्य भागहरूसँग कसरी अन्तरक्रिया गर्छ

### समेट्नुपर्ने डेटा प्रकारहरू

**प्रिमिटिभ डेटा प्रकारहरू:**
- **String**: उत्पादन नामहरू, विवरणहरू, प्रयोगकर्ता जानकारी
- **Number**: मूल्यहरू, मात्रा, कर गणना
- **Boolean**: वस्तु उपलब्धता, प्रयोगकर्ता प्राथमिकताहरू, कार्ट स्थिति
- **Null**: जानबुझेर खाली मानहरू (जस्तै छुट कोडहरू हराएको)
- **Undefined**: अनिनिशित मानहरू वा हराएको डेटा
- **Symbol**: अद्वितीय पहिचानकर्ता (उन्नत प्रयोग)
- **BigInt**: ठूलो वित्तीय गणना (उन्नत प्रयोग)

**सन्दर्भ प्रकारहरू:**
- **Object**: उत्पादन विवरणहरू, प्रयोगकर्ता प्रोफाइलहरू, कार्ट सामग्रीहरू
- **Array**: उत्पादनहरूको सूची, अर्डर इतिहास, श्रेणीहरू

### प्रत्येक डेटा प्रकारको लागि उदाहरण ढाँचा

प्रत्येक डेटा प्रकारको लागि, तपाईंको प्रतिक्रिया यस प्रकार संरचना गर्नुहोस्:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**वास्तविक जीवनको प्रयोग:** [यसले व्यवहारमा कसरी काम गर्नेछ भन्ने वर्णन गर्नुहोस्]

**अन्तरक्रिया:** [यो डेटा प्रकार अन्य प्रकारहरूसँग कसरी काम गर्छ भन्ने व्याख्या गर्नुहोस्]
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

**अस्वीकरण**:  
यो दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) प्रयोग गरेर अनुवाद गरिएको छ। हामी शुद्धताको लागि प्रयास गर्छौं, तर कृपया ध्यान दिनुहोस् कि स्वचालित अनुवादमा त्रुटिहरू वा अशुद्धताहरू हुन सक्छ। यसको मूल भाषा मा रहेको दस्तावेज़लाई आधिकारिक स्रोत मानिनुपर्छ। महत्वपूर्ण जानकारीको लागि, व्यावसायिक मानव अनुवाद सिफारिस गरिन्छ। यस अनुवादको प्रयोगबाट उत्पन्न हुने कुनै पनि गलतफहमी वा गलत व्याख्याको लागि हामी जिम्मेवार हुने छैनौं।