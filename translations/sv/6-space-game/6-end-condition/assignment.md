# Skapa ett Exempelspel

## Uppgiftsöversikt

Nu när du har bemästrat slutvillkor och omstarts-funktionalitet i ditt rymdspel är det dags att tillämpa dessa koncept på en helt ny spelupplevelse. Du ska designa och bygga ditt eget spel som demonstrerar olika mönster för slutvillkor och omstartsmekanismer.

Den här uppgiften utmanar dig att tänka kreativt kring speldesign samtidigt som du övar på de tekniska färdigheter du har lärt dig. Du kommer att utforska olika scenarier för vinst och förlust, implementera spelarens progression och skapa engagerande omstartsupplevelser.

## Projektkrav

### Grundläggande Spelfunktioner

Ditt spel måste innehålla följande viktiga element:

**Variation av slutvillkor**: Implementera minst två olika sätt som spelet kan avslutas på:
- **Poängbaserad vinst**: Spelaren når en målsatt poäng eller samlar specifika föremål
- **Livbaserad förlust**: Spelaren förlorar alla tillgängliga liv eller hälsopoäng
- **Måluppfyllelse**: Alla fiender besegras, specifika föremål samlas in eller mål uppnås
- **Tidsbaserat**: Spelet avslutas efter en viss tid eller när en nedräkning når noll

**Omstartsfunktionalitet**: 
- **Rensa spelstatus**: Ta bort alla tidigare spelobjekt och återställ variabler
- **Initiera system på nytt**: Börja om med nya spelarstatistik, fiender och mål
- **Användarvänliga kontroller**: Ge tydliga instruktioner för att starta om spelet

**Spelarfeedback**:
- **Vinstmeddelanden**: Fira spelarens prestationer med positiv feedback
- **Förlustmeddelanden**: Ge uppmuntrande meddelanden som motiverar till att spela igen
- **Progressindikatorer**: Visa aktuell poäng, liv eller måluppfyllelse

### Spelidéer och Inspiration

Välj ett av dessa spelkoncept eller skapa ditt eget:

#### 1. Konsoläventyrsspel
Skapa ett textbaserat äventyr med stridsmekanik:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Nyckelfunktioner att implementera:**
- **Turordningsbaserad strid** med olika attackalternativ
- **Hälsopoäng** för både spelare och fiender
- **Inventariesystem** för att samla mynt eller föremål
- **Flera fiendetyper** med varierande svårighetsgrad
- **Vinstvillkor** när alla fiender är besegrade

#### 2. Samlingsspel
- **Mål**: Samla specifika föremål medan du undviker hinder
- **Slutvillkor**: Nå målsatt samlingsantal eller förlora alla liv
- **Progression**: Föremål blir svårare att nå ju längre spelet pågår

#### 3. Pusselspel
- **Mål**: Lös allt svårare pussel
- **Slutvillkor**: Slutför alla nivåer eller få slut på drag/tid
- **Omstart**: Återställ till första nivån med rensad progress

#### 4. Försvarsspel
- **Mål**: Skydda din bas från vågor av fiender
- **Slutvillkor**: Överlev alla vågor (vinst) eller basen förstörs (förlust)
- **Progression**: Fiendevågor ökar i svårighetsgrad och antal

## Implementeringsriktlinjer

### Komma igång

1. **Planera din speldesign**:
   - Skissa den grundläggande spel-loopen
   - Definiera dina slutvillkor tydligt
   - Identifiera vilken data som behöver återställas vid omstart

2. **Ställ in din projektstruktur**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Skapa din grundläggande spel-loop**:
   - Initiera spelstatus
   - Hantera användarinmatning
   - Uppdatera spellogik
   - Kontrollera slutvillkor
   - Rendera aktuell status

### Tekniska krav

**Använd modern JavaScript**: 
- Använd `const` och `let` för variabeldeklarationer
- Använd pilfunktioner där det är lämpligt
- Implementera ES6+ funktioner som template literals och destrukturering

**Händelsedriven arkitektur**:
- Skapa händelsehanterare för användarinteraktioner
- Implementera förändringar i spelstatus genom händelser
- Använd händelselyssnare för omstartsfunktionalitet

**Ren kodpraxis**:
- Skriv funktioner med enskilda ansvarsområden
- Använd beskrivande variabel- och funktionsnamn
- Lägg till kommentarer som förklarar spellogik och regler
- Organisera kod i logiska sektioner

## Inlämningskrav

### Leveranser

1. **Kompletta spelfiler**: Alla HTML-, CSS- och JavaScript-filer som behövs för att köra ditt spel
2. **README.md**: Dokumentation som förklarar:
   - Hur man spelar ditt spel
   - Vilka slutvillkor du har implementerat
   - Instruktioner för omstart
   - Eventuella specialfunktioner eller mekaniker
3. **Kodkommentarer**: Tydliga förklaringar av din spellogik och algoritmer

### Testchecklista

Innan du lämnar in, verifiera att ditt spel:

- [ ] **Körs utan fel** i webbläsarens konsol
- [ ] **Implementerar flera slutvillkor** enligt specifikationerna
- [ ] **Startar om korrekt** med rensad status
- [ ] **Ger tydlig feedback** till spelare om spelstatus
- [ ] **Använder modern JavaScript** syntax och bästa praxis
- [ ] **Inkluderar omfattande dokumentation** i README.md

## Bedömningskriterier

| Kriterier | Exemplariskt (4) | Kompetent (3) | Under utveckling (2) | Början (1) |
|-----------|------------------|----------------|-----------------------|------------|
| **Spelfunktionalitet** | Komplett spel med flera slutvillkor, smidig omstart och polerad spelupplevelse | Fullständigt spel med grundläggande slutvillkor och fungerande omstartsmekanism | Delvis spel med några implementerade slutvillkor, omstart kan ha mindre problem | Ofullständigt spel med begränsad funktionalitet och betydande buggar |
| **Kodkvalitet** | Ren, välorganiserad kod som använder modern JavaScript-praxis, omfattande kommentarer och utmärkt struktur | Bra kodorganisation med modern syntax, tillräckliga kommentarer och tydlig struktur | Grundläggande kodorganisation med vissa moderna praxis, minimala kommentarer | Dålig kodorganisation, föråldrad syntax, saknar kommentarer och struktur |
| **Användarupplevelse** | Intuitivt spel med tydliga instruktioner, utmärkt feedback och engagerande slut-/omstartsupplevelse | Bra spel med tillräckliga instruktioner och feedback, fungerande slut/omstart | Grundläggande spel med minimala instruktioner, begränsad feedback om spelstatus | Förvirrande spel med otydliga instruktioner och dålig användarfeedback |
| **Teknisk implementering** | Visar mästerskap i spelutvecklingskoncept, händelsehantering och statushantering | Visar solid förståelse för spelkoncept med bra implementering | Grundläggande förståelse med acceptabel implementering | Begränsad förståelse med dålig implementering |
| **Dokumentation** | Omfattande README med tydliga instruktioner, väl dokumenterad kod och grundlig testningsbevis | Bra dokumentation med tydliga instruktioner och tillräckliga kodkommentarer | Grundläggande dokumentation med minimala instruktioner | Dålig eller saknad dokumentation |

### Betygsskala
- **Exemplariskt (16-20 poäng)**: Överträffar förväntningarna med kreativa funktioner och polerad implementering
- **Kompetent (12-15 poäng)**: Uppfyller alla krav med solid utförande
- **Under utveckling (8-11 poäng)**: Uppfyller de flesta krav med mindre problem
- **Början (4-7 poäng)**: Uppfyller några krav men behöver betydande förbättringar

## Ytterligare lärresurser

- [MDN Guide för Spelutveckling](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Spelutveckling Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principer för Speldesign](https://www.gamasutra.com/blogs/)

> 💡 **Proffstips**: Börja enkelt och lägg till funktioner stegvis. Ett välpolerat enkelt spel är bättre än ett komplext spel med buggar!

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.