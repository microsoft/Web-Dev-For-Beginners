<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2026-01-08T08:56:31+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "et"
}
-->
# Andmetüüpide harjutus: e-kaubanduse ostukorv

## Juhised

Kujutage ette, et loote kaasaegset e-kaubanduse ostukorvi süsteemi. See ülesanne aitab teil mõista, kuidas erinevad JavaScripti andmetüübid töötavad koos, et luua pärismaailma rakendusi.

### Teie ülesanne

Looge põhjalik analüüs selle kohta, kuidas kasutaksite JavaScripti andmetüüpe ostukorvi rakenduses. Iga seitsme primaarse andmetüübi ja objektide puhul peate:

1. **Määratlema** andmetüübi ja selle otstarbe  
2. **Selgitama**, miks see andmetüüp on parim valik konkreetsete ostukorvi funktsioonide jaoks  
3. **Andma** realistlikke koodinäiteid, mis näitavad andmetüübi kasutust  
4. **Kirjeldama**, kuidas see andmetüüp suhtleb ostukorvi teiste osadega

### Kaetud andmetüübid

**Primaarandmed tüübid:**  
- **String**: tootenimed, kirjed, kasutaja andmed  
- **Number**: hinnad, kogused, maksuarvutused  
- **Boolean**: toote saadavus, kasutaja eelistused, korvi staatus  
- **Null**: teadlikult tühjad väärtused (näiteks puuduvad sooduskoodid)  
- **Undefined**: initsialiseerimata väärtused või puuduvad andmed  
- **Symbol**: unikaalsed identifikaatorid (edasijõudnutele)  
- **BigInt**: suured finantsarvutused (edasijõudnutele)

**Viitandmed tüübid:**  
- **Object**: toote detailid, kasutajaprofiilid, korvi sisu  
- **Array**: toodete nimekiri, tellimuste ajalugu, kategooriad

### Iga andmetüübi näidisformaat

Iga andmetüübi jaoks vormistage oma vastus järgmiselt:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```
  
**Reaalne kasutus:** [Kirjeldage, kuidas see praktikas toimiks]

**Suhtlemine:** [Selgitage, kuidas see andmetüüp töötab koos teistega]  
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
**Vastutusest loobumine**:  
See dokument on tõlgitud kasutades AI-tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüame tagada täpsust, palun mõistke, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Kriitilise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlkega kaasnevate arusaamatuste ega valesti tõlgendamise eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->