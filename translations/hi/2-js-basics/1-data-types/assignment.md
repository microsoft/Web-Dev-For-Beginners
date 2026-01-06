<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2026-01-06T16:08:53+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "hi"
}
-->
# डेटा प्रकार अभ्यास: ई-कॉमर्स शॉपिंग कार्ट

## निर्देश

कल्पना करें कि आप एक आधुनिक ई-कॉमर्स शॉपिंग कार्ट सिस्टम बना रहे हैं। यह असाइनमेंट आपको यह समझने में मदद करेगा कि कैसे विभिन्न JavaScript डेटा प्रकार मिलकर वास्तविक दुनिया के अनुप्रयोग बनाते हैं।

### आपका कार्य

जैसे-जैसे आप शॉपिंग कार्ट एप्लिकेशन में JavaScript डेटा प्रकारों का उपयोग करेंगे, उनके व्यापक विश्लेषण बनाएं। सात प्राथमिक डेटा प्रकारों और ऑब्जेक्ट्स के लिए, आपको:

1. **डेटा प्रकार और उसका उद्देश्य** पहचानना
2. **विवरण** देना कि यह डेटा प्रकार विशिष्ट शॉपिंग कार्ट फीचर्स के लिए सबसे अच्छा क्यों है
3. **वास्तविक कोड उदाहरण** प्रदान करना जो इस डेटा प्रकार को क्रियान्वित दिखाए
4. **विवरण** देना कि यह डेटा प्रकार शॉपिंग कार्ट के अन्य हिस्सों के साथ कैसे इंटरैक्ट करता है

### आवश्यक डेटा प्रकार

**प्राथमिक डेटा प्रकार:**
- **String**: उत्पाद नाम, विवरण, उपयोगकर्ता जानकारी
- **Number**: कीमतें, मात्राएं, कर गणना
- **Boolean**: आइटम उपलब्धता, उपयोगकर्ता प्राथमिकताएँ, कार्ट स्टेटस
- **Null**: जानबूझकर खाली मान (जैसे अनुपस्थित डिस्काउंट कोड)
- **Undefined**: इनिशियलाइज़ न किए गए मान या गुम डेटा
- **Symbol**: अद्वितीय पहचानकर्ता (उन्नत उपयोग)
- **BigInt**: बड़े वित्तीय गणना (उन्नत उपयोग)

**संदर्भ प्रकार:**
- **Object**: उत्पाद विवरण, उपयोगकर्ता प्रोफाइल, कार्ट सामग्री
- **Array**: उत्पादों की सूची, ऑर्डर इतिहास, श्रेणियां

### प्रत्येक डेटा प्रकार के लिए उदाहरण प्रारूप

प्रत्येक डेटा प्रकार के लिए, अपनी प्रतिक्रिया निम्नलिखित संरचना में बनाएं:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**वास्तविक उपयोग:** [बताएं कि यह व्यावहारिक रूप से कैसे काम करेगा]

**इंटरैक्शन:** [समझाएं कि यह डेटा प्रकार दूसरों के साथ कैसे काम करता है]
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
**अस्वीकरण**:  
यह दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके अनुवादित किया गया है। जब हम सटीकता के लिए प्रयासरत हैं, कृपया ध्यान दें कि स्वचालित अनुवादों में त्रुटियाँ या गलतियाँ हो सकती हैं। मूल दस्तावेज़ उसकी मातृ भाषा में ही आधिकारिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए, पेशेवर मानव अनुवाद की सलाह दी जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम उत्तरदायी नहीं हैं।
<!-- CO-OP TRANSLATOR DISCLAIMER END -->