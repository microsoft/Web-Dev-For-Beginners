<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2026-01-08T12:43:09+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "te"
}
-->
# డేటా టైప్స్ ప్రాక్టీస్: ఈ-కామర్స్ షాపింగ్ కార్ట్

## సూచనలు

మీరు ఒక ఆధునిక ఈ-కామర్స్ షాపింగ్ కార్ట్ సిస్టమ్‌ను నిర్మిస్తున్నారని ఊహించుకోండి. ఈ అసైన్‌మెంట్ వివిధ జావాస్క్రిప్ట్ డేటా టైప్స్ ఎలా కలిసి వాస్తవ ప్రపంచ అనువర్తనాలను సృష్టిస్తాయో అర్థం చేసుకోవడంలో మీకు సహాయపడుతుంది.

### మీ పని

ఒక షాపింగ్ కార్ట్ అప్లికేషన్‌లో మీరు జావాస్క్రిప్ట్ డేటా టైప్స్‌ను ఎలా ఉపయోగిస్తారని మీరు ఒక సమగ్ర విశ్లేషణ తయారు చేయాలి. ఏడు ప్రిమిటివ్ డేటా టైప్స్ మరియు ఆబ్జెక్టులలో ప్రతి ఒక్క దానికి:

1. **డేటా టైపు మరియు దాని ప్రయోజనాన్ని గుర్తించండి**
2. **ఈ డేటా టైపు ప్రత్యేక షాపింగ్ కార్ట్ ఫీచర్లు కోసం ఎందుకు ఉత్తమమైనదో వివరించండి**
3. **అధ్యయన డేటా టైపు ప్రదర్శించే వాస్తవిక కోడ్ ఉదాహరణలను ఇవ్వండి**
4. **ఈ డేటా టైపు షాపింగ్ కార్ట్ యొక్క ఇతర భాగాలతో ఎలా పనిచేస్తుందో తెలపండి**

### కవర్లు కావలసిన డేటా టైప్స్

**ప్రిమిటివ్ డేటా టైప్స్:**
- **String**: ఉత్పత్తి పేర్లు, వివరణలు, వినియోగదారుల సమాచారం
- **Number**: ధరలు, పరిమాణాలు, పన్ను లెక్కింపులు
- **Boolean**: ఐటెమ్ అందుబాటులో ఉండటం, వినియోగదారుల అభిరుచులు, కార్ట్ స్థితి
- **Null**: ఉద్దేశ్యపూర్వకంగా ఖాళీ విలువలు (విలువ మిస్ అయిన డిస్కౌంట్ కోడ్స్ లాంటి)
- **Undefined**: ప్రారంభం కాని విలువలు లేదా డేటా లేమి
- **Symbol**: ప్రత్యేక గుర్తింపులు (అడ్వాన్స్‌డ్ వాడకం)
- **BigInt**: భారీ ఆర్థిక లెక్కింపులు (అడ్వాన్స్‌డ్ వాడకం)

**రెఫరెన్స్ టైప్స్:**
- **Object**: ఉత్పత్తి వివరాలు, వినియోగదారు ప్రొఫైల్లు, కార్ట్ కంటెంట్
- **Array**: ఉత్పత్తుల జాబితా, ఆర్డర్ చరిత్ర, విభాగాలు

### ప్రతి డేటా టైపు కోసం ఉదాహరణ ఫార్మాట్

ప్రతి డేటా టైపు కోసం, మీ ప్రతిస్పందనను ఇలాగే నిర్మించండి:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**వాస్తవ ప్రపంచ వినియోగం:** [ఇది ప్రాక్టీస్‌లో ఎలా పని చేస్తుందో వివరించండి]

**ఇంటరాక్షన్స్:** [ఈ డేటా టైపు ఇతరులతో ఎలా పనిచేస్తుందో వివరించండి]
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
**అస్వीकృతి**:  
ఈ పత్రాన్ని AI అనువాద సేవ [Co-op Translator](https://github.com/Azure/co-op-translator) ఉపయోగించి అనువదించారు. మేము ఖచ్చితత్వానికి సూచిస్తున్నప్పటికీ, స్వయంచాలక అనువాదాల్లో పొరపాట్లు లేదా తప్పులూ ఉండవచ్చు. మూల పత్రం దాని స్థానిక భాషలోనే అధికారిక మార్గదర్శకంగా పరిగణించబడాలి. ముఖ్యమైన సమాచారం కోసం తగిన నిపుణుల చేతులతో మానవ అనువాదాన్ని సూచిస్తాము. ఈ అనువాదం ఉపయోగంలో ఏర్పడిన ఏదైనా అభిప్రాయ భేదాలు లేదా తప్పుబాటులకు మేము బాధ్యత వహించము.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->