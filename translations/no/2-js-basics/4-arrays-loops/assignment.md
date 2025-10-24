<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-23T22:17:18+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "no"
}
-->
# Arrays og Løkker Oppgave

## Instruksjoner

Fullfør følgende oppgaver for å øve på å jobbe med arrays og løkker. Hver oppgave bygger på konsepter fra leksjonen og oppmuntrer deg til å bruke forskjellige løkketyper og array-metoder.

### Oppgave 1: Tallmønster Generator
Lag et program som lister opp hvert 3. tall mellom 1-20 og skriver det ut i konsollen.

**Krav:**
- Bruk en `for`-løkke med en tilpasset inkrementering
- Vis tallene i et brukervennlig format
- Legg til beskrivende kommentarer som forklarer logikken din

**Forventet Utdata:**
```
3, 6, 9, 12, 15, 18
```

> **Tips:** Endre iterasjonsuttrykket i for-løkken din for å hoppe over tall.

### Oppgave 2: Array Analyse
Lag et array med minst 8 forskjellige tall og skriv funksjoner for å analysere dataene.

**Krav:**
- Lag et array kalt `numbers` med minst 8 verdier
- Skriv en funksjon `findMaximum()` som returnerer det høyeste tallet
- Skriv en funksjon `findMinimum()` som returnerer det laveste tallet  
- Skriv en funksjon `calculateSum()` som returnerer summen av alle tallene
- Test hver funksjon og vis resultatene

**Bonusutfordring:** Lag en funksjon som finner det nest høyeste tallet i arrayet.

### Oppgave 3: Bearbeiding av String Arrays
Lag et array med dine favorittfilmer/bøker/sanger og øv på forskjellige løkketyper.

**Krav:**
- Lag et array med minst 5 string-verdier
- Bruk en tradisjonell `for`-løkke for å vise elementer med nummerering (1. Navn på element)
- Bruk en `for...of`-løkke for å vise elementer i store bokstaver
- Bruk `forEach()`-metoden for å telle og vise totalt antall tegn

**Eksempelutdata:**
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

### Oppgave 4: Datafiltrering (Avansert)
Lag et program som bearbeider et array med objekter som representerer studenter.

**Krav:**
- Lag et array med minst 5 studentobjekter med egenskaper: `name`, `age`, `grade`
- Bruk løkker for å finne studenter som er 18 år eller eldre
- Beregn gjennomsnittskarakteren til alle studentene
- Lag et nytt array som kun inneholder studenter med karakterer over 85

**Eksempelstruktur:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testing av Koden

Test programmene dine ved å:
1. Kjøre hver oppgave i nettleserens konsoll
2. Verifisere at utdataene samsvarer med forventede resultater
3. Teste med forskjellige datasett
4. Sjekke at koden din håndterer kanttilfeller (tomme arrays, enkelt elementer)

## Retningslinjer for Innlevering

Inkluder følgende i innleveringen din:
- Godt kommentert JavaScript-kode for hver oppgave
- Skjermbilder eller tekstutdata som viser programmene dine i aksjon
- Kort forklaring på hvilken løkketype du valgte for hver oppgave og hvorfor

## Vurderingskriterier

| Kriterier | Eksemplarisk (3 poeng) | Tilfredsstillende (2 poeng) | Trenger forbedring (1 poeng) |
| --------- | ---------------------- | -------------------------- | --------------------------- |
| **Funksjonalitet** | Alle oppgaver fullført korrekt med bonusutfordringer | Alle nødvendige oppgaver fungerer korrekt | Noen oppgaver er ufullstendige eller inneholder feil |
| **Kodekvalitet** | Ren, godt organisert kode med beskrivende variabelnavn | Koden fungerer, men kan være mer ryddig | Koden er rotete eller vanskelig å forstå |
| **Kommentarer** | Omfattende kommentarer som forklarer logikk og beslutninger | Grunnleggende kommentarer er til stede | Minimale eller ingen kommentarer |
| **Bruk av Løkker** | Demonstrerer forståelse av forskjellige løkketyper på en passende måte | Bruker løkker korrekt, men med begrenset variasjon | Feil eller ineffektiv bruk av løkker |
| **Testing** | Bevis på grundig testing med flere scenarier | Grunnleggende testing demonstrert | Lite bevis på testing |

## Refleksjonsspørsmål

Etter å ha fullført oppgavene, vurder:
1. Hvilken type løkke føltes mest naturlig å bruke og hvorfor?
2. Hvilke utfordringer møtte du når du jobbet med arrays?
3. Hvordan kan disse ferdighetene brukes i virkelige webutviklingsprosjekter?
4. Hva ville du gjort annerledes hvis du måtte optimalisere koden din for ytelse?

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.