<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-23T21:54:11+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "da"
}
-->
# At træffe beslutninger: Studerendes karakterbehandling

## Læringsmål

I denne opgave vil du øve dig på beslutningstagning fra denne lektion ved at bygge et program, der behandler studerendes karakterer fra forskellige karaktersystemer. Du vil bruge `if...else`-udsagn, sammenligningsoperatorer og logiske operatorer til at afgøre, hvilke studerende der består deres kurser.

## Udfordringen

Du arbejder på en skole, der for nylig er fusioneret med en anden institution. Nu skal du behandle studerendes karakterer fra to helt forskellige karaktersystemer og afgøre, hvilke studerende der består. Dette er en perfekt mulighed for at øve dig på betinget logik!

### Forståelse af karaktersystemerne

#### Første karaktersystem (Numerisk)
- Karakterer gives som tal fra 1-5
- **Bestået karakter**: 3 og derover (3, 4 eller 5)
- **Dumpet karakter**: Under 3 (1 eller 2)

#### Andet karaktersystem (Bogstavkarakterer)
- Karakterer bruger bogstaver: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Beståede karakterer**: `A`, `A-`, `B`, `B-`, `C`, `C-` (alle nævnte karakterer er bestået)
- **Bemærk**: Dette system inkluderer ikke dumpede karakterer som `D` eller `F`

### Din opgave

Givet følgende array `allStudents`, der repræsenterer alle studerende og deres karakterer, skal du oprette et nyt array `studentsWhoPass`, der indeholder alle studerende, der består i henhold til deres respektive karaktersystemer.

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

### Trinvist tilgang

1. **Opsæt en løkke** for at gennemgå hver karakter i `allStudents`-arrayet
2. **Tjek karaktertypen** (er det et tal eller en streng?)
3. **Anvend de relevante regler for karaktersystemet**:
   - For tal: tjek om karakteren er >= 3
   - For strenge: tjek om det er en af de gyldige beståede bogstavkarakterer
4. **Tilføj beståede karakterer** til `studentsWhoPass`-arrayet

### Hjælpsomme kodeteknikker

Brug disse JavaScript-koncepter fra lektionen:

- **typeof operator**: `typeof grade === 'number'` for at tjekke, om det er en numerisk karakter
- **Sammenligningsoperatorer**: `>=` for at sammenligne numeriske karakterer
- **Logiske operatorer**: `||` for at tjekke flere bogstavkarakterbetingelser
- **if...else-udsagn**: for at håndtere forskellige karaktersystemer
- **Array-metoder**: `.push()` for at tilføje beståede karakterer til dit nye array

### Forventet output

Når du kører dit program, skal `studentsWhoPass` indeholde: `['A', 'B-', 4, 5]`

**Hvorfor disse karakterer består:**
- `'A'` og `'B-'` er gyldige bogstavkarakterer (alle bogstavkarakterer i dette system er bestået)
- `4` og `5` er numeriske karakterer >= 3
- `1` og `2` dumper, fordi de er numeriske karakterer < 3

## Test din løsning

Test din kode med forskellige scenarier:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusudfordringer

Når du har fuldført den grundlæggende opgave, kan du prøve disse udvidelser:

1. **Tilføj validering**: Tjek for ugyldige karakterer (som negative tal eller ugyldige bogstaver)
2. **Tæl statistik**: Beregn, hvor mange studerende der består vs. dumper
3. **Karakterkonvertering**: Konverter alle karakterer til et enkelt numerisk system (A=5, B=4, C=3 osv.)

## Bedømmelseskriterier

| Kriterier | Fremragende (4) | Kompetent (3) | Under udvikling (2) | Begynder (1) |
|-----------|-----------------|----------------|----------------------|--------------|
| **Funktionalitet** | Programmet identificerer korrekt alle beståede karakterer fra begge systemer | Programmet fungerer med mindre problemer eller kanttilfælde | Programmet fungerer delvist, men har logiske fejl | Programmet har betydelige fejl eller kører ikke |
| **Kodestruktur** | Ren, velorganiseret kode med korrekt if...else-logik | God struktur med passende betingede udsagn | Acceptabel struktur med nogle organisatoriske problemer | Dårlig struktur, svært at følge logikken |
| **Brug af koncepter** | Effektiv brug af sammenligningsoperatorer, logiske operatorer og betingede udsagn | God brug af lektionskoncepter med mindre mangler | Nogle brug af lektionskoncepter, men mangler vigtige elementer | Begrænset brug af lektionskoncepter |
| **Problemløsning** | Viser klar forståelse af problemet og elegant løsningsmetode | God problemløsningsmetode med solid logik | Tilstrækkelig problemløsning med noget forvirring | Uklart tilgang, viser ikke forståelse |

## Indsendelsesvejledning

1. **Test din kode** grundigt med de givne eksempler
2. **Tilføj kommentarer**, der forklarer din logik, især for de betingede udsagn
3. **Bekræft output** matcher forventede resultater: `['A', 'B-', 4, 5]`
4. **Overvej kanttilfælde** som tomme arrays eller uventede datatyper

> 💡 **Gode råd**: Start simpelt! Få den grundlæggende funktionalitet til at fungere først, og tilføj derefter mere sofistikerede funktioner. Husk, målet er at øve beslutningstagning med de værktøjer, du har lært i denne lektion.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.