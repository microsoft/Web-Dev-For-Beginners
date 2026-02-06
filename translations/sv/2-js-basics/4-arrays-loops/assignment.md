# Arrays och Loopar Uppgift

## Instruktioner

Slutför följande övningar för att öva på att arbeta med arrayer och loopar. Varje övning bygger på koncept från lektionen och uppmuntrar dig att använda olika looptyper och arraymetoder.

### Övning 1: Nummermönstergenerator
Skapa ett program som listar var tredje nummer mellan 1-20 och skriver ut det i konsolen.

**Krav:**
- Använd en `for`-loop med en anpassad inkrementering
- Visa siffrorna i ett användarvänligt format
- Lägg till beskrivande kommentarer som förklarar din logik

**Förväntad Output:**
```
3, 6, 9, 12, 15, 18
```

> **Tips:** Ändra iterationsuttrycket i din for-loop för att hoppa över siffror.

### Övning 2: Arrayanalys
Skapa en array med minst 8 olika siffror och skriv funktioner för att analysera datan.

**Krav:**
- Skapa en array som heter `numbers` med minst 8 värden
- Skriv en funktion `findMaximum()` som returnerar det högsta numret
- Skriv en funktion `findMinimum()` som returnerar det lägsta numret  
- Skriv en funktion `calculateSum()` som returnerar summan av alla siffror
- Testa varje funktion och visa resultaten

**Bonusutmaning:** Skapa en funktion som hittar det näst högsta numret i arrayen.

### Övning 3: Bearbetning av Strängarray
Skapa en array med dina favoritfilmer/böcker/sånger och öva på olika looptyper.

**Krav:**
- Skapa en array med minst 5 strängvärden
- Använd en traditionell `for`-loop för att visa objekt med nummer (1. Objekt Namn)
- Använd en `for...of`-loop för att visa objekt i versaler
- Använd metoden `forEach()` för att räkna och visa det totala antalet tecken

**Exempeloutput:**
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

### Övning 4: Datafiltrering (Avancerad)
Skapa ett program som bearbetar en array av objekt som representerar studenter.

**Krav:**
- Skapa en array med minst 5 studentobjekt med egenskaper: `name`, `age`, `grade`
- Använd loopar för att hitta studenter som är 18 år eller äldre
- Beräkna medelbetyget för alla studenter
- Skapa en ny array som endast innehåller studenter med betyg över 85

**Exempelstruktur:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testa Din Kod

Testa dina program genom att:
1. Köra varje övning i din webbläsares konsol
2. Verifiera att outputen matchar förväntade resultat
3. Testa med olika dataset
4. Kontrollera att din kod hanterar kantfall (tomma arrayer, enstaka element)

## Inlämningsriktlinjer

Inkludera följande i din inlämning:
- Välkommenterad JavaScript-kod för varje övning
- Skärmdumpar eller textoutput som visar dina program i drift
- Kort förklaring av vilken looptyp du valde för varje uppgift och varför

## Bedömningskriterier

| Kriterier | Exemplariskt (3 poäng) | Tillräckligt (2 poäng) | Behöver Förbättras (1 poäng) |
| --------- | ----------------------- | ---------------------- | --------------------------- |
| **Funktionalitet** | Alla övningar slutförda korrekt med bonusutmaningar | Alla obligatoriska övningar fungerar korrekt | Vissa övningar ofullständiga eller innehåller fel |
| **Kodkvalitet** | Ren, välorganiserad kod med beskrivande variabelnamn | Koden fungerar men kan vara renare | Koden är rörig eller svår att förstå |
| **Kommentarer** | Omfattande kommentarer som förklarar logik och beslut | Grundläggande kommentarer finns | Minimala eller inga kommentarer |
| **Användning av Loopar** | Visar förståelse för olika looptyper på ett lämpligt sätt | Använder loopar korrekt men med begränsad variation | Felaktig eller ineffektiv användning av loopar |
| **Testning** | Bevis på noggrann testning med flera scenarier | Grundläggande testning demonstrerad | Lite bevis på testning |

## Reflektionsfrågor

Efter att ha slutfört övningarna, fundera på:
1. Vilken typ av loop kändes mest naturlig att använda och varför?
2. Vilka utmaningar stötte du på när du arbetade med arrayer?
3. Hur kan dessa färdigheter tillämpas på verkliga webbutvecklingsprojekt?
4. Vad skulle du göra annorlunda om du behövde optimera din kod för prestanda?

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.