<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-24T21:17:02+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "sk"
}
-->
# Typy údajov v praxi: Nákupný košík pre e-commerce

## Pokyny

Predstavte si, že vytvárate moderný systém nákupného košíka pre e-commerce. Táto úloha vám pomôže pochopiť, ako rôzne typy údajov v JavaScripte spolupracujú pri vytváraní aplikácií pre reálny svet.

### Vaša úloha

Vytvorte komplexnú analýzu toho, ako by ste použili typy údajov JavaScriptu v aplikácii nákupného košíka. Pre každý zo siedmich primitívnych typov údajov a objektov musíte:

1. **Identifikovať** typ údajov a jeho účel
2. **Vysvetliť**, prečo je tento typ údajov najlepšou voľbou pre konkrétne funkcie nákupného košíka
3. **Poskytnúť** realistické príklady kódu, ktoré ukazujú použitie daného typu údajov
4. **Opísať**, ako tento typ údajov interaguje s ostatnými časťami nákupného košíka

### Požadované typy údajov na pokrytie

**Primitívne typy údajov:**
- **String**: Názvy produktov, popisy, informácie o používateľovi
- **Number**: Ceny, množstvá, výpočty daní
- **Boolean**: Dostupnosť položiek, preferencie používateľa, stav košíka
- **Null**: Úmyselne prázdne hodnoty (napríklad chýbajúce zľavové kódy)
- **Undefined**: Neinicializované hodnoty alebo chýbajúce údaje
- **Symbol**: Unikátne identifikátory (pokročilé použitie)
- **BigInt**: Veľké finančné výpočty (pokročilé použitie)

**Referenčné typy:**
- **Object**: Detaily produktov, profily používateľov, obsah košíka
- **Array**: Zoznam produktov, história objednávok, kategórie

### Príklad formátu pre každý typ údajov

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Použitie v reálnom svete:** [Opíšte, ako by to fungovalo v praxi]

**Interakcie:** [Vysvetlite, ako tento typ údajov spolupracuje s ostatnými]
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

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.