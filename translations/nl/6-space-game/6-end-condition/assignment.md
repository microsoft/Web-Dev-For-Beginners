# Bouw een voorbeeldspel

## Overzicht van de opdracht

Nu je de eindcondities en herstartfunctionaliteit in je ruimtegame onder de knie hebt, is het tijd om deze concepten toe te passen in een compleet nieuwe game-ervaring. Je gaat je eigen spel ontwerpen en bouwen dat verschillende patronen van eindcondities en herstartmechanismen demonstreert.

Deze opdracht daagt je uit om creatief na te denken over gameontwerp terwijl je de technische vaardigheden oefent die je hebt geleerd. Je gaat verschillende scenario's van overwinning en verlies verkennen, spelersprogressie implementeren en boeiende herstartervaringen creëren.

## Projectvereisten

### Kernfuncties van het spel

Je spel moet de volgende essentiële elementen bevatten:

**Variatie in eindcondities**: Implementeer minstens twee verschillende manieren waarop het spel kan eindigen:
- **Overwinning op basis van punten**: Speler bereikt een doelscore of verzamelt specifieke items
- **Verlies op basis van levens**: Speler verliest alle beschikbare levens of gezondheidspunten
- **Doelstelling voltooid**: Alle vijanden verslagen, specifieke items verzameld of doelen bereikt
- **Tijdslimiet**: Spel eindigt na een bepaalde tijdsduur of wanneer een aftelling op nul komt

**Herstartfunctionaliteit**: 
- **Game status wissen**: Verwijder alle eerdere spelobjecten en reset variabelen
- **Systemen opnieuw initialiseren**: Begin opnieuw met nieuwe spelersstatistieken, vijanden en doelen
- **Gebruiksvriendelijke bediening**: Zorg voor duidelijke instructies om het spel opnieuw te starten

**Spelersfeedback**:
- **Overwinningsberichten**: Vier de prestaties van de speler met positieve feedback
- **Verliesberichten**: Geef aanmoedigende berichten die motiveren om opnieuw te spelen
- **Voortgangsindicatoren**: Toon huidige score, levens of doelstatus

### Spelideeën en inspiratie

Kies een van deze spelconcepten of bedenk je eigen:

#### 1. Console Avonturenspel
Maak een tekstgebaseerd avontuur met gevechtsmechanismen:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Belangrijke functies om te implementeren:**
- **Turn-based gevechten** met verschillende aanvalsmogelijkheden
- **Gezondheidspunten** voor zowel speler als vijanden
- **Inventarissysteem** voor het verzamelen van munten of items
- **Meerdere vijandtypes** met verschillende moeilijkheidsgraden
- **Overwinningsconditie** wanneer alle vijanden zijn verslagen

#### 2. Verzamelspel
- **Doel**: Verzamel specifieke items terwijl je obstakels ontwijkt
- **Eindcondities**: Bereik het doel voor verzameling of verlies alle levens
- **Voortgang**: Items worden moeilijker te bereiken naarmate het spel vordert

#### 3. Puzzelspel
- **Doel**: Los steeds moeilijkere puzzels op
- **Eindcondities**: Voltooi alle levels of raak uit zetten/tijd
- **Herstart**: Reset naar het eerste level met gewiste voortgang

#### 4. Verdedigingsspel
- **Doel**: Bescherm je basis tegen golven van vijanden
- **Eindcondities**: Overleef alle golven (overwinning) of basis wordt vernietigd (verlies)
- **Voortgang**: Vijandelijke golven worden moeilijker en talrijker

## Implementatierichtlijnen

### Aan de slag

1. **Plan je gameontwerp**:
   - Schets de basis gameplay-loop
   - Definieer je eindcondities duidelijk
   - Identificeer welke gegevens moeten worden gereset bij een herstart

2. **Stel je projectstructuur op**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Creëer je kern gameplay-loop**:
   - Initialiseer de spelstatus
   - Verwerk gebruikersinvoer
   - Update de spel logica
   - Controleer eindcondities
   - Render de huidige status

### Technische vereisten

**Gebruik modern JavaScript**: 
- Gebruik `const` en `let` voor variabele declaraties
- Gebruik arrow functions waar geschikt
- Implementeer ES6+ functies zoals template literals en destructuring

**Event-gedreven architectuur**:
- Maak event handlers voor gebruikersinteracties
- Implementeer wijzigingen in de spelstatus via events
- Gebruik event listeners voor herstartfunctionaliteit

**Schone code praktijken**:
- Schrijf functies met een enkele verantwoordelijkheid
- Gebruik beschrijvende variabele- en functienamen
- Voeg opmerkingen toe die de spel logica en regels uitleggen
- Organiseer code in logische secties

## Inleververeisten

### Op te leveren

1. **Volledige gamebestanden**: Alle HTML-, CSS- en JavaScript-bestanden die nodig zijn om je spel te draaien
2. **README.md**: Documentatie die uitlegt:
   - Hoe je het spel speelt
   - Welke eindcondities je hebt geïmplementeerd
   - Instructies voor herstarten
   - Eventuele speciale functies of mechanismen
3. **Code opmerkingen**: Duidelijke uitleg van je spel logica en algoritmes

### Testchecklist

Controleer voordat je inlevert of je spel:

- [ ] **Foutloos draait** in de browserconsole
- [ ] **Meerdere eindcondities implementeert** zoals gespecificeerd
- [ ] **Correct herstart** met een schone statusreset
- [ ] **Duidelijke feedback geeft** aan spelers over de spelstatus
- [ ] **Modern JavaScript** syntax en best practices gebruikt
- [ ] **Uitgebreide documentatie** bevat in README.md

## Beoordelingscriteria

| Criteria | Uitmuntend (4) | Voldoende (3) | Ontwikkelend (2) | Beginnend (1) |
|----------|----------------|---------------|------------------|---------------|
| **Spelfunctionaliteit** | Compleet spel met meerdere eindcondities, soepele herstart en gepolijste gameplay-ervaring | Volledig spel met basis eindcondities en functionele herstartmechanisme | Gedeeltelijk spel met enkele geïmplementeerde eindcondities, herstart kan kleine problemen hebben | Onvolledig spel met beperkte functionaliteit en aanzienlijke bugs |
| **Codekwaliteit** | Schone, goed georganiseerde code met gebruik van moderne JavaScript-praktijken, uitgebreide opmerkingen en uitstekende structuur | Goede codeorganisatie met moderne syntax, voldoende opmerkingen en duidelijke structuur | Basis codeorganisatie met enkele moderne praktijken, minimale opmerkingen | Slechte codeorganisatie, verouderde syntax, gebrek aan opmerkingen en structuur |
| **Gebruikerservaring** | Intuïtieve gameplay met duidelijke instructies, uitstekende feedback en boeiende eind-/herstartervaring | Goede gameplay met voldoende instructies en feedback, functionele eind-/herstart | Basis gameplay met minimale instructies, beperkte feedback over de spelstatus | Verwarrende gameplay met onduidelijke instructies en slechte gebruikersfeedback |
| **Technische implementatie** | Toont meesterschap in gameontwikkelingsconcepten, event handling en statusbeheer | Toont solide begrip van gameconcepten met goede implementatie | Basisbegrip met acceptabele implementatie | Beperkt begrip met slechte implementatie |
| **Documentatie** | Uitgebreide README met duidelijke instructies, goed gedocumenteerde code en grondig testbewijs | Goede documentatie met duidelijke instructies en voldoende codeopmerkingen | Basisdocumentatie met minimale instructies | Slechte of ontbrekende documentatie |

### Beoordelingsschaal
- **Uitmuntend (16-20 punten)**: Overtreft verwachtingen met creatieve functies en gepolijste implementatie
- **Voldoende (12-15 punten)**: Voldoet aan alle vereisten met solide uitvoering
- **Ontwikkelend (8-11 punten)**: Voldoet aan de meeste vereisten met kleine problemen
- **Beginnend (4-7 punten)**: Voldoet aan enkele vereisten maar heeft aanzienlijke verbeteringen nodig

## Aanvullende leermiddelen

- [MDN Game Development Guide](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Game Development Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Game Design Principles](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tip**: Begin eenvoudig en voeg functies stapsgewijs toe. Een goed afgewerkt eenvoudig spel is beter dan een complex spel met bugs!

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.