# Arrays en Lussen Opdracht

## Instructies

Voltooi de volgende oefeningen om te oefenen met arrays en lussen. Elke oefening bouwt voort op concepten uit de les en moedigt je aan om verschillende soorten lussen en array-methoden toe te passen.

### Oefening 1: Nummerpatroon Generator
Maak een programma dat elke 3e nummer tussen 1-20 opsomt en dit naar de console print.

**Vereisten:**
- Gebruik een `for`-lus met een aangepaste increment
- Toon nummers in een gebruiksvriendelijk formaat
- Voeg beschrijvende opmerkingen toe die je logica uitleggen

**Verwachte Output:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Pas de iteratie-uitdrukking in je for-lus aan om nummers over te slaan.

### Oefening 2: Array Analyse
Maak een array van minstens 8 verschillende nummers en schrijf functies om de gegevens te analyseren.

**Vereisten:**
- Maak een array genaamd `numbers` met minstens 8 waarden
- Schrijf een functie `findMaximum()` die het hoogste nummer retourneert
- Schrijf een functie `findMinimum()` die het laagste nummer retourneert  
- Schrijf een functie `calculateSum()` die de totale som van alle nummers retourneert
- Test elke functie en toon de resultaten

**Bonus Uitdaging:** Maak een functie die het op één na hoogste nummer in de array vindt.

### Oefening 3: String Array Verwerking
Maak een array van je favoriete films/boeken/liedjes en oefen met verschillende soorten lussen.

**Vereisten:**
- Maak een array met minstens 5 stringwaarden
- Gebruik een traditionele `for`-lus om items met nummers weer te geven (1. Naam van item)
- Gebruik een `for...of`-lus om items in hoofdletters weer te geven
- Gebruik de `forEach()`-methode om het totale aantal karakters te tellen en weer te geven

**Voorbeeld Output:**
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

### Oefening 4: Gegevensfiltering (Geavanceerd)
Maak een programma dat een array van objecten verwerkt die studenten vertegenwoordigen.

**Vereisten:**
- Maak een array van minstens 5 studentobjecten met eigenschappen: `name`, `age`, `grade`
- Gebruik lussen om studenten te vinden die 18 jaar of ouder zijn
- Bereken het gemiddelde cijfer van alle studenten
- Maak een nieuwe array die alleen studenten bevat met cijfers boven de 85

**Voorbeeld Structuur:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testen van je Code

Test je programma's door:
1. Elke oefening in de console van je browser uit te voeren
2. Te controleren of de outputs overeenkomen met de verwachte resultaten
3. Te testen met verschillende datasets
4. Te controleren of je code randgevallen aankan (lege arrays, enkele elementen)

## Inleverrichtlijnen

Voeg het volgende toe aan je inzending:
- Goed becommentarieerde JavaScript-code voor elke oefening
- Screenshots of tekstoutput die laat zien dat je programma's werken
- Korte uitleg over welk type lus je hebt gekozen voor elke taak en waarom

## Beoordelingscriteria

| Criteria | Uitmuntend (3 punten) | Voldoende (2 punten) | Verbetering nodig (1 punt) |
| -------- | --------------------- | -------------------- | -------------------------- |
| **Functionaliteit** | Alle oefeningen correct voltooid inclusief bonusuitdagingen | Alle vereiste oefeningen werken correct | Sommige oefeningen zijn onvolledig of bevatten fouten |
| **Codekwaliteit** | Schone, goed georganiseerde code met beschrijvende variabelenamen | Code werkt, maar kan netter | Code is rommelig of moeilijk te begrijpen |
| **Opmerkingen** | Uitgebreide opmerkingen die logica en beslissingen uitleggen | Basisopmerkingen aanwezig | Weinig of geen opmerkingen |
| **Gebruik van lussen** | Toont begrip van verschillende soorten lussen en past ze correct toe | Gebruikt lussen correct maar met beperkte variatie | Onjuiste of inefficiënte toepassing van lussen |
| **Testen** | Bewijs van grondig testen met meerdere scenario's | Basis testen aangetoond | Weinig bewijs van testen |

## Reflectievragen

Na het voltooien van de oefeningen, overweeg:
1. Welk type lus voelde het meest natuurlijk om te gebruiken en waarom?
2. Welke uitdagingen kwam je tegen bij het werken met arrays?
3. Hoe kunnen deze vaardigheden worden toegepast in echte webontwikkelingsprojecten?
4. Wat zou je anders doen als je je code moest optimaliseren voor prestaties?

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.