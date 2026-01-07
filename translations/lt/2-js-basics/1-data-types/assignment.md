<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2026-01-07T11:11:14+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "lt"
}
-->
# Duomenų tipų pratimai: elektroninės prekybos krepšelio sistema

## Nurodymai

Įsivaizduokite, kad kuriate modernią elektroninės prekybos krepšelio sistemą. Šis uždavinys padės jums suprasti, kaip skirtingi JavaScript duomenų tipai veikia kartu kuriant realaus pasaulio programas.

### Jūsų užduotis

Sukurkite išsamų analizę, kaip naudotumėte JavaScript duomenų tipus krepšelio programoje. Kiekvienam iš septynių pirminių duomenų tipų ir objektams turite:

1. **Nustatyti** duomenų tipą ir jo paskirtį
2. **Paaiškinti**, kodėl šis duomenų tipas yra geriausias pasirinkimas konkrečioms krepšelio funkcijoms
3. **Pateikti** realistiškus kodo pavyzdžius, kurie iliustruotų duomenų tipo naudojimą
4. **Aprašyti**, kaip šis duomenų tipas sąveikauja su kitomis krepšelio programos dalimis

### Būtini apimti duomenų tipai

**Pirminiai duomenų tipai:**
- **String**: prekių pavadinimai, aprašymai, vartotojo informacija
- **Number**: kainos, kiekiai, mokesčių skaičiavimai
- **Boolean**: prekės prieinamumas, vartotojo nustatymai, krepšelio būsena
- **Null**: tyčia tušti reikšmės (pvz., trūkstami nuolaidų kodai)
- **Undefined**: neinicijuotos reikšmės arba trūkstami duomenys
- **Symbol**: unikalūs identifikatoriai (pažangesnis naudojimas)
- **BigInt**: dideli finansiniai skaičiavimai (pažangesnis naudojimas)

**Nuorodų tipai:**
- **Object**: prekių detalės, vartotojų profiliai, krepšelio turinys
- **Array**: prekių sąrašas, užsakymų istorija, kategorijos

### Pavyzdinė kiekvieno duomenų tipo struktūra

Kiekvienam duomenų tipui struktūruokite atsakymą taip:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Realus panaudojimas:** [Paaiškinkite, kaip tai veiktų praktikoje]

**Sąveikos:** [Paaiškinkite, kaip šis duomenų tipas veikia su kitais]
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
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už jokius nesusipratimus ar neteisingą interpretavimą, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->