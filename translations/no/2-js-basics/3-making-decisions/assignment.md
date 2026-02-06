# Ta beslutninger: Studentkarakterbehandler

## Læringsmål

I denne oppgaven skal du øve på beslutningstaking fra denne leksjonen ved å lage et program som behandler studentkarakterer fra ulike karaktersystemer. Du skal bruke `if...else`-setninger, sammenligningsoperatorer og logiske operatorer for å avgjøre hvilke studenter som består sine kurs.

## Utfordringen

Du jobber for en skole som nylig har slått seg sammen med en annen institusjon. Nå må du behandle studentkarakterer fra to helt forskjellige karaktersystemer og avgjøre hvilke studenter som består. Dette er en perfekt anledning til å øve på betinget logikk!

### Forstå karaktersystemene

#### Første karaktersystem (Numerisk)
- Karakterer gis som tall fra 1-5
- **Bestått karakter**: 3 og høyere (3, 4 eller 5)
- **Ikke bestått karakter**: Under 3 (1 eller 2)

#### Andre karaktersystem (Bokstavkarakterer)
- Karakterer gis som bokstaver: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Beståtte karakterer**: `A`, `A-`, `B`, `B-`, `C`, `C-` (alle oppførte karakterer er bestått)
- **Merk**: Dette systemet inkluderer ikke stryk-karakterer som `D` eller `F`

### Oppgaven din

Gitt følgende array `allStudents` som representerer alle studenter og deres karakterer, skal du lage et nytt array `studentsWhoPass` som inneholder alle studenter som består i henhold til deres respektive karaktersystemer.

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

### Trinn-for-trinn fremgangsmåte

1. **Sett opp en løkke** for å gå gjennom hver karakter i `allStudents`-arrayet
2. **Sjekk karaktertypen** (er det et tall eller en tekststreng?)
3. **Bruk de relevante reglene for karaktersystemet**:
   - For tall: sjekk om karakteren er >= 3
   - For tekststrenger: sjekk om det er en av de gyldige beståtte bokstavkarakterene
4. **Legg til beståtte karakterer** i `studentsWhoPass`-arrayet

### Nyttige kode-teknikker

Bruk disse JavaScript-konseptene fra leksjonen:

- **typeof-operatoren**: `typeof grade === 'number'` for å sjekke om det er en numerisk karakter
- **Sammenligningsoperatorer**: `>=` for å sammenligne numeriske karakterer
- **Logiske operatorer**: `||` for å sjekke flere betingelser for bokstavkarakterer
- **if...else-setninger**: for å håndtere ulike karaktersystemer
- **Array-metoder**: `.push()` for å legge til beståtte karakterer i det nye arrayet

### Forventet resultat

Når du kjører programmet ditt, skal `studentsWhoPass` inneholde: `['A', 'B-', 4, 5]`

**Hvorfor disse karakterene består:**
- `'A'` og `'B-'` er gyldige bokstavkarakterer (alle bokstavkarakterer i dette systemet er bestått)
- `4` og `5` er numeriske karakterer >= 3
- `1` og `2` stryker fordi de er numeriske karakterer < 3

## Test løsningen din

Test koden din med ulike scenarier:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusutfordringer

Når du har fullført den grunnleggende oppgaven, kan du prøve disse utvidelsene:

1. **Legg til validering**: Sjekk for ugyldige karakterer (som negative tall eller ugyldige bokstaver)
2. **Tell statistikk**: Beregn hvor mange studenter som består vs. stryker
3. **Karakterkonvertering**: Konverter alle karakterer til ett enkelt numerisk system (A=5, B=4, C=3, osv.)

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Under utvikling (2) | Nybegynner (1) |
|-----------|-----------------|---------|---------------------|----------------|
| **Funksjonalitet** | Programmet identifiserer korrekt alle beståtte karakterer fra begge systemer | Programmet fungerer med mindre problemer eller kanttilfeller | Programmet fungerer delvis, men har logiske feil | Programmet har betydelige feil eller kjører ikke |
| **Kodeoppbygging** | Ren, godt organisert kode med riktig if...else-logikk | God oppbygging med passende betingede setninger | Akseptabel oppbygging med noen organisatoriske problemer | Dårlig oppbygging, vanskelig å følge logikken |
| **Bruk av konsepter** | Effektiv bruk av sammenligningsoperatorer, logiske operatorer og betingede setninger | God bruk av leksjonens konsepter med mindre mangler | Noe bruk av leksjonens konsepter, men mangler viktige elementer | Begrenset bruk av leksjonens konsepter |
| **Problemløsning** | Viser klar forståelse av problemet og en elegant løsningsmetode | God problemløsningsmetode med solid logikk | Tilfredsstillende problemløsning med noe forvirring | Utydelig tilnærming, viser ikke forståelse |

## Retningslinjer for innlevering

1. **Test koden din** grundig med de oppgitte eksemplene
2. **Legg til kommentarer** som forklarer logikken din, spesielt for de betingede setningene
3. **Bekreft at resultatet** samsvarer med forventet resultat: `['A', 'B-', 4, 5]`
4. **Vurder kanttilfeller** som tomme arrays eller uventede datatyper

> 💡 **Tips**: Start enkelt! Få den grunnleggende funksjonaliteten til å fungere først, og legg deretter til mer sofistikerte funksjoner. Husk, målet er å øve på beslutningstaking med verktøyene du lærte i denne leksjonen.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.