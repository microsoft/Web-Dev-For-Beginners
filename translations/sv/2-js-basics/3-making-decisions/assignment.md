<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-23T21:28:24+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "sv"
}
-->
# Att fatta beslut: Studentbetygsprocessor

## Lärandemål

I denna uppgift kommer du att öva på beslutsfattande koncept från denna lektion genom att bygga ett program som bearbetar studentbetyg från olika betygssystem. Du kommer att använda `if...else`-satser, jämförelseoperatorer och logiska operatorer för att avgöra vilka studenter som klarar sina kurser.

## Utmaningen

Du arbetar för en skola som nyligen har slagits samman med en annan institution. Nu behöver du bearbeta studentbetyg från två helt olika betygssystem och avgöra vilka studenter som klarar sig. Detta är ett perfekt tillfälle att öva på villkorslogik!

### Förstå betygssystemen

#### Första betygssystemet (Numeriskt)
- Betyg ges som siffror från 1-5
- **Godkänt betyg**: 3 och högre (3, 4 eller 5)
- **Underkänt betyg**: Under 3 (1 eller 2)

#### Andra betygssystemet (Bokstavsbetyg)
- Betyg ges med bokstäver: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Godkända betyg**: `A`, `A-`, `B`, `B-`, `C`, `C-` (alla listade betyg är godkända)
- **Obs**: Detta system inkluderar inte underkända betyg som `D` eller `F`

### Din uppgift

Givet följande array `allStudents` som representerar alla studenter och deras betyg, skapa en ny array `studentsWhoPass` som innehåller alla studenter som klarar sig enligt sina respektive betygssystem.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Steg-för-steg tillvägagångssätt

1. **Sätt upp en loop** för att gå igenom varje betyg i arrayen `allStudents`
2. **Kontrollera betygstypen** (är det ett nummer eller en sträng?)
3. **Tillämpa de relevanta reglerna för betygssystemet**:
   - För nummer: kontrollera om betyget är >= 3
   - För strängar: kontrollera om det är ett av de giltiga godkända bokstavsbetygen
4. **Lägg till godkända betyg** i arrayen `studentsWhoPass`

### Hjälpsamma kodtekniker

Använd dessa JavaScript-koncept från lektionen:

- **typeof operator**: `typeof grade === 'number'` för att kontrollera om det är ett numeriskt betyg
- **Jämförelseoperatorer**: `>=` för att jämföra numeriska betyg
- **Logiska operatorer**: `||` för att kontrollera flera bokstavsbetygsvillkor
- **if...else-satser**: för att hantera olika betygssystem
- **Array-metoder**: `.push()` för att lägga till godkända betyg i din nya array

### Förväntat resultat

När du kör ditt program ska `studentsWhoPass` innehålla: `['A', 'B-', 4, 5]`

**Varför dessa betyg klarar sig:**
- `'A'` och `'B-'` är giltiga bokstavsbetyg (alla bokstavsbetyg i detta system är godkända)
- `4` och `5` är numeriska betyg >= 3
- `1` och `2` underkänns eftersom de är numeriska betyg < 3

## Testa din lösning

Testa din kod med olika scenarier:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusutmaningar

När du har slutfört den grundläggande uppgiften, prova dessa tillägg:

1. **Lägg till validering**: Kontrollera ogiltiga betyg (som negativa siffror eller ogiltiga bokstäver)
2. **Räkna statistik**: Beräkna hur många studenter som klarar sig respektive underkänns
3. **Betygskonvertering**: Konvertera alla betyg till ett enda numeriskt system (A=5, B=4, C=3, etc.)

## Bedömningskriterier

| Kriterier | Exemplariskt (4) | Godkänt (3) | Under utveckling (2) | Början (1) |
|-----------|------------------|-------------|-----------------------|------------|
| **Funktionalitet** | Programmet identifierar korrekt alla godkända betyg från båda systemen | Programmet fungerar med mindre problem eller kantfall | Programmet fungerar delvis men har logiska fel | Programmet har betydande fel eller fungerar inte |
| **Kodstruktur** | Ren, välorganiserad kod med korrekt if...else-logik | Bra struktur med lämpliga villkorssatser | Acceptabel struktur med vissa organisatoriska problem | Dålig struktur, svår att följa logiken |
| **Användning av koncept** | Effektivt användande av jämförelseoperatorer, logiska operatorer och villkorssatser | Bra användning av lektionskoncept med mindre luckor | Viss användning av lektionskoncept men saknar viktiga element | Begränsad användning av lektionskoncept |
| **Problemlösning** | Visar tydlig förståelse för problemet och en elegant lösningsmetod | Bra problemlösningsmetod med solid logik | Tillräcklig problemlösning med viss förvirring | Otydlig metod, visar inte förståelse |

## Inlämningsinstruktioner

1. **Testa din kod** noggrant med de tillhandahållna exemplen
2. **Lägg till kommentarer** som förklarar din logik, särskilt för villkorssatserna
3. **Verifiera att resultatet** matchar förväntade resultat: `['A', 'B-', 4, 5]`
4. **Tänk på kantfall** som tomma arrayer eller oväntade datatyper

> 💡 **Tips**: Börja enkelt! Få den grundläggande funktionaliteten att fungera först, och lägg sedan till mer sofistikerade funktioner. Kom ihåg att målet är att öva på beslutsfattande logik med de verktyg du lärt dig i denna lektion.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.