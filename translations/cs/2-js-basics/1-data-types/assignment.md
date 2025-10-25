<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-24T20:41:27+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "cs"
}
-->
# Procvičování datových typů: Nákupní košík pro e-commerce

## Pokyny

Představte si, že vytváříte moderní systém nákupního košíku pro e-commerce. Tento úkol vám pomůže pochopit, jak různé datové typy v JavaScriptu spolupracují při vytváření aplikací pro reálný svět.

### Váš úkol

Vytvořte podrobnou analýzu, jak byste použili datové typy JavaScriptu v aplikaci nákupního košíku. Pro každý ze sedmi primitivních datových typů a objektů musíte:

1. **Identifikovat** datový typ a jeho účel
2. **Vysvětlit**, proč je tento datový typ nejlepší volbou pro konkrétní funkce nákupního košíku
3. **Poskytnout** realistické příklady kódu, které ukazují použití datového typu v praxi
4. **Popsat**, jak tento datový typ interaguje s ostatními částmi nákupního košíku

### Požadované datové typy k pokrytí

**Primitivní datové typy:**
- **String**: Názvy produktů, popisy, informace o uživateli
- **Number**: Ceny, množství, výpočty daní
- **Boolean**: Dostupnost položek, uživatelské preference, stav košíku
- **Null**: Záměrně prázdné hodnoty (například chybějící slevové kódy)
- **Undefined**: Neinicializované hodnoty nebo chybějící data
- **Symbol**: Unikátní identifikátory (pokročilé použití)
- **BigInt**: Velké finanční výpočty (pokročilé použití)

**Referenční typy:**
- **Object**: Detaily produktů, profily uživatelů, obsah košíku
- **Array**: Seznam produktů, historie objednávek, kategorie

### Ukázkový formát pro každý datový typ

Pro každý datový typ strukturovat odpověď takto:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Použití v reálném světě:** [Popište, jak by to fungovalo v praxi]

**Interakce:** [Vysvětlete, jak tento datový typ spolupracuje s ostatními]
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

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.