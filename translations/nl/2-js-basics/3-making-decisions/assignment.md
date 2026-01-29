# Beslissingen nemen: Studenten Cijferverwerker

## Leerdoelen

In deze opdracht oefen je de concepten van besluitvorming uit deze les door een programma te bouwen dat studentencijfers uit verschillende beoordelingssystemen verwerkt. Je gebruikt `if...else`-verklaringen, vergelijkingsoperatoren en logische operatoren om te bepalen welke studenten hun vakken halen.

## De Uitdaging

Je werkt voor een school die onlangs is gefuseerd met een andere instelling. Nu moet je studentencijfers uit twee totaal verschillende beoordelingssystemen verwerken en bepalen welke studenten slagen. Dit is een perfecte kans om je vaardigheden in voorwaardelijke logica te oefenen!

### Begrip van de Beoordelingssystemen

#### Eerste Beoordelingssysteem (Numeriek)
- Cijfers worden gegeven als getallen van 1-5
- **Voldoende**: 3 en hoger (3, 4 of 5)
- **Onvoldoende**: Lager dan 3 (1 of 2)

#### Tweede Beoordelingssysteem (Lettercijfers)
- Cijfers worden gegeven als letters: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Voldoende cijfers**: `A`, `A-`, `B`, `B-`, `C`, `C-` (alle genoemde cijfers zijn voldoende)
- **Let op**: Dit systeem bevat geen onvoldoende cijfers zoals `D` of `F`

### Jouw Taak

Gegeven de volgende array `allStudents`, die alle studenten en hun cijfers vertegenwoordigt, maak je een nieuwe array `studentsWhoPass` met alle studenten die slagen volgens hun respectieve beoordelingssystemen.

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

### Stapsgewijze Aanpak

1. **Zet een lus op** om elk cijfer in de array `allStudents` te doorlopen
2. **Controleer het type cijfer** (is het een getal of een string?)
3. **Pas de juiste beoordelingsregels toe**:
   - Voor getallen: controleer of het cijfer >= 3 is
   - Voor strings: controleer of het een van de geldige voldoende lettercijfers is
4. **Voeg voldoende cijfers** toe aan de array `studentsWhoPass`

### Handige Code Technieken

Gebruik deze JavaScript-concepten uit de les:

- **typeof-operator**: `typeof grade === 'number'` om te controleren of het een numeriek cijfer is
- **Vergelijkingsoperatoren**: `>=` om numerieke cijfers te vergelijken
- **Logische operatoren**: `||` om meerdere lettercijfercondities te controleren
- **if...else-verklaringen**: om verschillende beoordelingssystemen te verwerken
- **Array-methoden**: `.push()` om voldoende cijfers toe te voegen aan je nieuwe array

### Verwachte Uitvoer

Wanneer je programma wordt uitgevoerd, zou `studentsWhoPass` het volgende moeten bevatten: `['A', 'B-', 4, 5]`

**Waarom deze cijfers slagen:**
- `'A'` en `'B-'` zijn geldige lettercijfers (alle lettercijfers in dit systeem zijn voldoende)
- `4` en `5` zijn numerieke cijfers >= 3
- `1` en `2` zakken omdat ze numerieke cijfers < 3 zijn

## Testen van je Oplossing

Test je code met verschillende scenario's:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusuitdagingen

Als je de basisopdracht hebt voltooid, probeer dan deze uitbreidingen:

1. **Voeg validatie toe**: Controleer op ongeldige cijfers (zoals negatieve getallen of ongeldige letters)
2. **Tel statistieken**: Bereken hoeveel studenten slagen versus zakken
3. **Cijferconversie**: Converteer alle cijfers naar één numeriek systeem (A=5, B=4, C=3, etc.)

## Beoordelingscriteria

| Criteria | Uitmuntend (4) | Voldoende (3) | Redelijk (2) | Onvoldoende (1) |
|----------|----------------|---------------|--------------|-----------------|
| **Functionaliteit** | Programma identificeert correct alle voldoende cijfers uit beide systemen | Programma werkt met kleine problemen of randgevallen | Programma werkt gedeeltelijk maar bevat logische fouten | Programma heeft aanzienlijke fouten of werkt niet |
| **Code Structuur** | Schone, goed georganiseerde code met correcte if...else-logica | Goede structuur met passende voorwaardelijke verklaringen | Acceptabele structuur met enkele organisatorische problemen | Slechte structuur, moeilijk te volgen logica |
| **Gebruik van Concepten** | Effectief gebruik van vergelijkingsoperatoren, logische operatoren en voorwaardelijke verklaringen | Goed gebruik van lesconcepten met kleine hiaten | Enig gebruik van lesconcepten maar mist belangrijke elementen | Beperkt gebruik van lesconcepten |
| **Probleemoplossing** | Toont duidelijk begrip van het probleem en een elegante oplossingsaanpak | Goede probleemoplossingsaanpak met degelijke logica | Voldoende probleemoplossing met enige verwarring | Onduidelijke aanpak, toont geen begrip |

## Inleverinstructies

1. **Test je code** grondig met de gegeven voorbeelden
2. **Voeg opmerkingen toe** die je logica uitleggen, vooral bij de voorwaardelijke verklaringen
3. **Controleer of de uitvoer** overeenkomt met de verwachte resultaten: `['A', 'B-', 4, 5]`
4. **Overweeg randgevallen** zoals lege arrays of onverwachte datatypes

> 💡 **Pro Tip**: Begin eenvoudig! Zorg dat de basisfunctionaliteit werkt, en voeg daarna meer geavanceerde functies toe. Onthoud, het doel is om besluitvormingslogica te oefenen met de tools die je in deze les hebt geleerd.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.