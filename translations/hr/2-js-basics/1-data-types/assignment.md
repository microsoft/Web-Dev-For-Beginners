# Vježba s tipovima podataka: Košarica za e-trgovinu

## Upute

Zamislite da izrađujete moderni sustav košarice za e-trgovinu. Ovaj zadatak pomoći će vam da razumijete kako različiti JavaScript tipovi podataka rade zajedno kako bi stvorili aplikacije iz stvarnog svijeta.

### Vaš zadatak

Napravite sveobuhvatnu analizu kako biste koristili JavaScript tipove podataka u aplikaciji za košaricu. Za svaki od sedam primitivnih tipova podataka i objekata trebate:

1. **Identificirati** tip podataka i njegovu svrhu
2. **Objasniti** zašto je taj tip podataka najbolji izbor za određene značajke košarice
3. **Pružiti** realistične primjere koda koji prikazuju upotrebu tog tipa podataka
4. **Opisati** kako taj tip podataka komunicira s drugim dijelovima košarice

### Obavezni tipovi podataka koje treba obraditi

**Primitivni tipovi podataka:**
- **String**: Nazivi proizvoda, opisi, informacije o korisnicima
- **Number**: Cijene, količine, izračuni poreza
- **Boolean**: Dostupnost artikala, korisničke preferencije, status košarice
- **Null**: Namjerno prazne vrijednosti (poput nedostajućih kodova za popust)
- **Undefined**: Neinicijalizirane vrijednosti ili nedostajući podaci
- **Symbol**: Jedinstveni identifikatori (napredna upotreba)
- **BigInt**: Veliki financijski izračuni (napredna upotreba)

**Referentni tipovi:**
- **Object**: Detalji o proizvodima, korisnički profili, sadržaj košarice
- **Array**: Popis proizvoda, povijest narudžbi, kategorije

### Primjer formata za svaki tip podataka

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Upotreba u stvarnom svijetu:** [Opišite kako bi ovo funkcioniralo u praksi]

**Interakcije:** [Objasnite kako ovaj tip podataka radi s drugima]
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

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.