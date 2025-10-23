<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-23T22:11:17+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "da"
}
-->
# Byg et Eksempelspil

## Opgaveoversigt

Nu hvor du har mestret slutbetingelser og genstartfunktionalitet i dit rumspil, er det tid til at anvende disse koncepter i en helt ny spiloplevelse. Du skal designe og bygge dit eget spil, der demonstrerer forskellige mønstre for slutbetingelser og genstartsmekanismer.

Denne opgave udfordrer dig til at tænke kreativt omkring spildesign, samtidig med at du øver de tekniske færdigheder, du har lært. Du vil udforske forskellige scenarier for sejr og nederlag, implementere spillerprogression og skabe engagerende genstartoplevelser.

## Projektkrav

### Grundlæggende Spilfunktioner

Dit spil skal inkludere følgende essentielle elementer:

**Variation i Slutbetingelser**: Implementér mindst to forskellige måder, spillet kan slutte på:
- **Pointbaseret sejr**: Spilleren når en målsat score eller samler specifikke genstande
- **Livbaseret nederlag**: Spilleren mister alle tilgængelige liv eller helbredspoint
- **Målopfyldelse**: Alle fjender besejres, specifikke genstande samles, eller mål opnås
- **Tidsbaseret**: Spillet slutter efter en fastsat varighed eller når nedtællingen når nul

**Genstartsfunktionalitet**: 
- **Ryd spiltilstand**: Fjern alle tidligere spilobjekter og nulstil variabler
- **Geninitialiser systemer**: Start forfra med nye spillerstatistikker, fjender og mål
- **Brugervenlige kontroller**: Giv klare instruktioner til genstart af spillet

**Spillerfeedback**:
- **Sejrbeskeder**: Fejr spillerens præstationer med positiv feedback
- **Nederlagsbeskeder**: Giv opmuntrende beskeder, der motiverer til at spille igen
- **Progressionsindikatorer**: Vis aktuel score, liv eller målopfyldelsesstatus

### Spilidéer og Inspiration

Vælg en af disse spilkoncepter eller skab dit eget:

#### 1. Konsol Eventyrspil
Skab et tekstbaseret eventyr med kampmekanik:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Nøglefunktioner at implementere:**
- **Turbaseret kamp** med forskellige angrebsmuligheder
- **Helbredspoint** for både spiller og fjender
- **Inventarsystem** til at samle mønter eller genstande
- **Flere fjendetyper** med varierende sværhedsgrad
- **Sejrsbetingelse** når alle fjender er besejret

#### 2. Samlespil
- **Mål**: Saml specifikke genstande, mens du undgår forhindringer
- **Slutbetingelser**: Nå det ønskede antal samlede genstande eller mist alle liv
- **Progression**: Genstande bliver sværere at nå, som spillet fortsætter

#### 3. Puslespil
- **Mål**: Løs gradvist sværere puslespil
- **Slutbetingelser**: Fuldfør alle niveauer eller løb tør for træk/tid
- **Genstart**: Nulstil til første niveau med ryddet progression

#### 4. Forsvarsspil
- **Mål**: Beskyt din base mod bølger af fjender
- **Slutbetingelser**: Overlev alle bølger (sejr) eller basen ødelægges (nederlag)
- **Progression**: Fjendebølger bliver sværere og flere

## Implementeringsvejledning

### Kom godt i gang

1. **Planlæg dit spildesign**:
   - Skitser den grundlæggende gameplay-loop
   - Definér dine slutbetingelser klart
   - Identificér hvilke data der skal nulstilles ved genstart

2. **Opsæt din projektstruktur**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Opret din kerne-spilløkke**:
   - Initialiser spiltilstand
   - Håndter brugerinput
   - Opdater spillogik
   - Tjek slutbetingelser
   - Render aktuel tilstand

### Tekniske Krav

**Brug Moderne JavaScript**: 
- Anvend `const` og `let` til variabeldeklarationer
- Brug pilfunktioner, hvor det er passende
- Implementér ES6+ funktioner som template literals og destructuring

**Event-Drevet Arkitektur**:
- Opret event handlers til brugerinteraktioner
- Implementér ændringer i spiltilstand gennem events
- Brug event listeners til genstartsfunktionalitet

**Ren Kode-Praksis**:
- Skriv funktioner med enkeltansvar
- Brug beskrivende variabel- og funktionsnavne
- Tilføj kommentarer, der forklarer spillets logik og regler
- Organisér kode i logiske sektioner

## Indsendelseskrav

### Leverancer

1. **Komplette spilfiler**: Alle HTML-, CSS- og JavaScript-filer, der er nødvendige for at køre dit spil
2. **README.md**: Dokumentation, der forklarer:
   - Hvordan man spiller dit spil
   - Hvilke slutbetingelser du har implementeret
   - Instruktioner til genstart
   - Eventuelle særlige funktioner eller mekanikker
3. **Kodekommentarer**: Klare forklaringer af din spillogik og algoritmer

### Test Tjekliste

Før du indsender, skal du verificere, at dit spil:

- [ ] **Kører uden fejl** i browserens konsol
- [ ] **Implementerer flere slutbetingelser** som specificeret
- [ ] **Genstarter korrekt** med nulstillet tilstand
- [ ] **Giver klar feedback** til spillere om spilstatus
- [ ] **Bruger moderne JavaScript** syntaks og bedste praksis
- [ ] **Indeholder omfattende dokumentation** i README.md

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Udvikling (2) | Begynder (1) |
|-----------|-----------------|---------|---------------|--------------|
| **Spilfunktionalitet** | Komplet spil med flere slutbetingelser, glat genstart og poleret gameplay-oplevelse | Færdigt spil med grundlæggende slutbetingelser og funktionel genstartsmekanisme | Delvist spil med nogle implementerede slutbetingelser, genstart kan have mindre problemer | Ufuldstændigt spil med begrænset funktionalitet og betydelige fejl |
| **Kodekvalitet** | Ren, velorganiseret kode med moderne JavaScript-praksis, omfattende kommentarer og fremragende struktur | God kodeorganisation med moderne syntaks, tilstrækkelige kommentarer og klar struktur | Grundlæggende kodeorganisation med nogle moderne praksisser, minimale kommentarer | Dårlig kodeorganisation, forældet syntaks, manglende kommentarer og struktur |
| **Brugeroplevelse** | Intuitivt gameplay med klare instruktioner, fremragende feedback og engagerende slut/genstart oplevelse | Godt gameplay med tilstrækkelige instruktioner og feedback, funktionel slut/genstart | Grundlæggende gameplay med minimale instruktioner, begrænset feedback om spiltilstand | Forvirrende gameplay med uklare instruktioner og dårlig brugerfeedback |
| **Teknisk Implementering** | Demonstrerer mesterskab af spiludviklingskoncepter, eventhåndtering og tilstandsadministration | Viser solid forståelse af spilkoncepter med god implementering | Grundlæggende forståelse med acceptabel implementering | Begrænset forståelse med dårlig implementering |
| **Dokumentation** | Omfattende README med klare instruktioner, veldokumenteret kode og grundige testbeviser | God dokumentation med klare instruktioner og tilstrækkelige kodekommentarer | Grundlæggende dokumentation med minimale instruktioner | Dårlig eller manglende dokumentation |

### Bedømmelsesskala
- **Fremragende (16-20 point)**: Overgår forventningerne med kreative funktioner og poleret implementering
- **God (12-15 point)**: Opfylder alle krav med solid udførelse
- **Udvikling (8-11 point)**: Opfylder de fleste krav med mindre problemer
- **Begynder (4-7 point)**: Opfylder nogle krav, men har brug for betydelige forbedringer

## Yderligere Læringsressourcer

- [MDN Guide til Spiludvikling](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Spiludvikling Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principper for Spildesign](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tip**: Start simpelt og tilføj funktioner gradvist. Et velpoleret simpelt spil er bedre end et komplekst spil med fejl!

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.