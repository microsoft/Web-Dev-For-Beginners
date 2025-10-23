<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-23T21:53:41+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "da"
}
-->
# Arrays og Løkker Opgave

## Instruktioner

Udfør følgende øvelser for at øve dig i at arbejde med arrays og løkker. Hver øvelse bygger på begreber fra lektionen og opfordrer dig til at anvende forskellige typer løkker og array-metoder.

### Øvelse 1: Tal Mønster Generator
Lav et program, der lister hver 3. tal mellem 1-20 og udskriver det til konsollen.

**Krav:**
- Brug en `for`-løkke med en brugerdefineret inkrement
- Vis tallene i et brugervenligt format
- Tilføj beskrivende kommentarer, der forklarer din logik

**Forventet Output:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Modificer iterationsudtrykket i din for-løkke for at springe tal over.

### Øvelse 2: Array Analyse
Lav et array med mindst 8 forskellige tal og skriv funktioner til at analysere dataene.

**Krav:**
- Opret et array kaldet `numbers` med mindst 8 værdier
- Skriv en funktion `findMaximum()`, der returnerer det højeste tal
- Skriv en funktion `findMinimum()`, der returnerer det laveste tal  
- Skriv en funktion `calculateSum()`, der returnerer summen af alle tal
- Test hver funktion og vis resultaterne

**Bonusudfordring:** Lav en funktion, der finder det næsthøjeste tal i arrayet.

### Øvelse 3: Bearbejdning af String Arrays
Lav et array med dine yndlingsfilm/bøger/sange og øv dig i forskellige typer løkker.

**Krav:**
- Opret et array med mindst 5 string-værdier
- Brug en traditionel `for`-løkke til at vise elementer med numre (1. Elementnavn)
- Brug en `for...of`-løkke til at vise elementer med store bogstaver
- Brug `forEach()`-metoden til at tælle og vise det samlede antal tegn

**Eksempel Output:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Øvelse 4: Datafiltrering (Avanceret)
Lav et program, der bearbejder et array af objekter, der repræsenterer studerende.

**Krav:**
- Opret et array med mindst 5 studerende-objekter med egenskaberne: `name`, `age`, `grade`
- Brug løkker til at finde studerende, der er 18 år eller ældre
- Beregn gennemsnitskarakteren for alle studerende
- Opret et nyt array, der kun indeholder studerende med karakterer over 85

**Eksempel Struktur:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testning af Din Kode

Test dine programmer ved at:
1. Køre hver øvelse i din browsers konsol
2. Verificere, at output matcher de forventede resultater
3. Teste med forskellige datasæt
4. Kontrollere, at din kode håndterer kanttilfælde (tomme arrays, enkelt elementer)

## Indsendelsesretningslinjer

Inkluder følgende i din indsendelse:
- Velkommenteret JavaScript-kode for hver øvelse
- Skærmbilleder eller tekstoutput, der viser dine programmer i funktion
- Kort forklaring af hvilken type løkke du valgte til hver opgave og hvorfor

## Bedømmelseskriterier

| Kriterier | Fremragende (3 point) | Tilstrækkelig (2 point) | Behøver Forbedring (1 point) |
| --------- | --------------------- | ----------------------- | ---------------------------- |
| **Funktionalitet** | Alle øvelser fuldført korrekt med bonusudfordringer | Alle krævede øvelser fungerer korrekt | Nogle øvelser er ufuldstændige eller indeholder fejl |
| **Kodekvalitet** | Ren, velorganiseret kode med beskrivende variabelnavne | Koden fungerer, men kunne være mere ryddelig | Koden er rodet eller svær at forstå |
| **Kommentarer** | Omfattende kommentarer, der forklarer logik og beslutninger | Grundlæggende kommentarer til stede | Få eller ingen kommentarer |
| **Brug af løkker** | Demonstrerer forståelse af forskellige typer løkker på passende vis | Bruger løkker korrekt, men med begrænset variation | Forkert eller ineffektiv brug af løkker |
| **Testning** | Bevis for grundig testning med flere scenarier | Grundlæggende testning demonstreret | Lille eller ingen bevis for testning |

## Refleksionsspørgsmål

Efter at have fuldført øvelserne, overvej:
1. Hvilken type løkke føltes mest naturlig at bruge og hvorfor?
2. Hvilke udfordringer stødte du på, da du arbejdede med arrays?
3. Hvordan kunne disse færdigheder anvendes i virkelige webudviklingsprojekter?
4. Hvad ville du gøre anderledes, hvis du skulle optimere din kode for ydeevne?

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.