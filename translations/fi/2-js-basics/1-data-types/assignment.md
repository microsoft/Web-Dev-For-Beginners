<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-23T00:13:06+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "fi"
}
-->
# Tietotyyppien harjoittelu: Verkkokaupan ostoskori

## Ohjeet

Kuvittele, että rakennat modernia verkkokaupan ostoskorijärjestelmää. Tämä tehtävä auttaa sinua ymmärtämään, kuinka JavaScriptin eri tietotyypit toimivat yhdessä todellisten sovellusten luomisessa.

### Tehtäväsi

Tee kattava analyysi siitä, kuinka käyttäisit JavaScriptin tietotyyppejä ostoskorisovelluksessa. Jokaiselle seitsemälle primitiiviselle tietotyypille ja objekteille sinun tulee:

1. **Tunnistaa** tietotyyppi ja sen tarkoitus
2. **Selittää**, miksi tämä tietotyyppi on paras valinta tiettyihin ostoskorin ominaisuuksiin
3. **Esittää** realistisia koodiesimerkkejä, jotka näyttävät tietotyypin käytännössä
4. **Kuvata**, miten tämä tietotyyppi toimii yhdessä muiden ostoskorin osien kanssa

### Käsiteltävät tietotyypit

**Primitiiviset tietotyypit:**
- **String**: Tuotenimet, kuvaukset, käyttäjätiedot
- **Number**: Hinnat, määrät, verolaskelmat
- **Boolean**: Tuotteen saatavuus, käyttäjän asetukset, ostoskorin tila
- **Null**: Tarkoituksella tyhjät arvot (kuten puuttuvat alennuskoodit)
- **Undefined**: Alustamattomat arvot tai puuttuvat tiedot
- **Symbol**: Uniikit tunnisteet (edistyneempi käyttö)
- **BigInt**: Suuret taloudelliset laskelmat (edistyneempi käyttö)

**Viitetyypit:**
- **Object**: Tuotetiedot, käyttäjäprofiilit, ostoskorin sisältö
- **Array**: Tuotelistat, tilaushistoria, kategoriat

### Esimerkkimuoto jokaiselle tietotyypille

Jokaisen tietotyypin kohdalla rakenna vastauksesi seuraavasti:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Käyttö tosielämässä:** [Kuvaile, miten tämä toimisi käytännössä]

**Vuorovaikutus:** [Selitä, miten tämä tietotyyppi toimii muiden kanssa]
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

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.