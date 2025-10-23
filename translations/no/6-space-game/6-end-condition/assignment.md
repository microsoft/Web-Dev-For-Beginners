<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-23T22:36:57+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "no"
}
-->
# Lag et Eksempelspill

## Oppgaveoversikt

Nå som du har mestret avslutningsbetingelser og restart-funksjonalitet i romspillet ditt, er det på tide å bruke disse konseptene i en helt ny spillopplevelse. Du skal designe og bygge ditt eget spill som demonstrerer ulike mønstre for avslutningsbetingelser og restart-mekanismer.

Denne oppgaven utfordrer deg til å tenke kreativt om spilldesign samtidig som du praktiserer de tekniske ferdighetene du har lært. Du vil utforske ulike seiers- og nederlagsscenarier, implementere spillerprogresjon og skape engasjerende restart-opplevelser.

## Prosjektkrav

### Kjernespillfunksjoner

Spillet ditt må inkludere følgende essensielle elementer:

**Variasjon i avslutningsbetingelser**: Implementer minst to forskjellige måter spillet kan avsluttes:
- **Poengbasert seier**: Spilleren oppnår en målsatt poengsum eller samler spesifikke gjenstander
- **Livbasert nederlag**: Spilleren mister alle tilgjengelige liv eller helsepoeng
- **Måloppnåelse**: Alle fiender beseiret, spesifikke gjenstander samlet, eller mål oppnådd
- **Tidsbasert**: Spillet avsluttes etter en bestemt varighet eller når nedtellingen når null

**Restart-funksjonalitet**: 
- **Tøm spilltilstand**: Fjern alle tidligere spillobjekter og nullstill variabler
- **Reinitialiser systemer**: Start på nytt med nye spillerstatistikker, fiender og mål
- **Brukervennlige kontroller**: Gi klare instruksjoner for å starte spillet på nytt

**Spillerfeedback**:
- **Seiersmeldinger**: Feire spillerens prestasjoner med positiv tilbakemelding
- **Nederlagsmeldinger**: Gi oppmuntrende meldinger som motiverer til å prøve igjen
- **Progresjonsindikatorer**: Vis nåværende poengsum, liv eller målstatus

### Spillideer og inspirasjon

Velg ett av disse spillkonseptene eller lag ditt eget:

#### 1. Konsoll-eventyrspill
Lag et tekstbasert eventyr med kampmekanismer:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Nøkkelfunksjoner å implementere:**
- **Turbasert kamp** med ulike angrepsalternativer
- **Helsepoeng** for både spiller og fiender
- **Inventarsystem** for å samle mynter eller gjenstander
- **Flere fiendetyper** med varierende vanskelighetsgrad
- **Seiersbetingelse** når alle fiender er beseiret

#### 2. Samlespill
- **Mål**: Samle spesifikke gjenstander mens du unngår hindringer
- **Avslutningsbetingelser**: Oppnå målsatt samlingsantall eller mist alle liv
- **Progresjon**: Gjenstander blir vanskeligere å nå etter hvert som spillet fortsetter

#### 3. Puslespill
- **Mål**: Løs stadig vanskeligere puslespill
- **Avslutningsbetingelser**: Fullfør alle nivåer eller gå tom for trekk/tid
- **Restart**: Nullstill til første nivå med slettet progresjon

#### 4. Forsvarsspill
- **Mål**: Beskytt basen din mot bølger av fiender
- **Avslutningsbetingelser**: Overlev alle bølger (seier) eller basen blir ødelagt (nederlag)
- **Progresjon**: Fiendebølger øker i vanskelighetsgrad og antall

## Implementeringsretningslinjer

### Komme i gang

1. **Planlegg spilldesignet ditt**:
   - Skisser den grunnleggende spill-loopen
   - Definer avslutningsbetingelsene tydelig
   - Identifiser hvilke data som må nullstilles ved restart

2. **Sett opp prosjektstrukturen din**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Lag den grunnleggende spill-loopen**:
   - Initialiser spilltilstanden
   - Håndter brukerinput
   - Oppdater spilllogikken
   - Sjekk avslutningsbetingelsene
   - Render nåværende tilstand

### Tekniske krav

**Bruk moderne JavaScript**: 
- Bruk `const` og `let` for variabeldeklarasjoner
- Bruk pilfunksjoner der det er passende
- Implementer ES6+ funksjoner som template literals og destructuring

**Hendelsesdrevet arkitektur**:
- Lag hendelseshåndterere for brukerinteraksjoner
- Implementer endringer i spilltilstanden gjennom hendelser
- Bruk event listeners for restart-funksjonalitet

**Ren kodepraksis**:
- Skriv funksjoner med én enkelt ansvar
- Bruk beskrivende variabel- og funksjonsnavn
- Legg til kommentarer som forklarer spilllogikk og regler
- Organiser koden i logiske seksjoner

## Innleveringskrav

### Leveranser

1. **Komplette spillfiler**: Alle HTML-, CSS- og JavaScript-filer som trengs for å kjøre spillet ditt
2. **README.md**: Dokumentasjon som forklarer:
   - Hvordan spille spillet ditt
   - Hvilke avslutningsbetingelser du har implementert
   - Instruksjoner for restart
   - Eventuelle spesielle funksjoner eller mekanismer
3. **Kodekommentarer**: Klare forklaringer av spilllogikk og algoritmer

### Testingsjekkliste

Før du leverer, verifiser at spillet ditt:

- [ ] **Kjører uten feil** i nettleserkonsollen
- [ ] **Implementerer flere avslutningsbetingelser** som spesifisert
- [ ] **Restarter riktig** med nullstilt tilstand
- [ ] **Gir klar tilbakemelding** til spillere om spillstatus
- [ ] **Bruker moderne JavaScript** syntaks og beste praksis
- [ ] **Inkluderer omfattende dokumentasjon** i README.md

## Vurderingsrubrikk

| Kriterier | Eksemplarisk (4) | Dyktig (3) | Under utvikling (2) | Nybegynner (1) |
|-----------|------------------|------------|----------------------|----------------|
| **Spillfunksjonalitet** | Komplett spill med flere avslutningsbetingelser, jevn restart og polert spillopplevelse | Fullt spill med grunnleggende avslutningsbetingelser og funksjonell restart-mekanisme | Delvis spill med noen avslutningsbetingelser implementert, restart kan ha mindre problemer | Ufullstendig spill med begrenset funksjonalitet og betydelige feil |
| **Kodekvalitet** | Ren, godt organisert kode som bruker moderne JavaScript-praksis, omfattende kommentarer og utmerket struktur | God kodeorganisering med moderne syntaks, tilstrekkelige kommentarer og klar struktur | Grunnleggende kodeorganisering med noen moderne praksiser, minimale kommentarer | Dårlig kodeorganisering, utdatert syntaks, mangler kommentarer og struktur |
| **Brukeropplevelse** | Intuitiv spillopplevelse med klare instruksjoner, utmerket tilbakemelding og engasjerende avslutnings-/restart-opplevelse | God spillopplevelse med tilstrekkelige instruksjoner og tilbakemelding, funksjonell avslutning/restart | Grunnleggende spillopplevelse med minimale instruksjoner, begrenset tilbakemelding om spillstatus | Forvirrende spillopplevelse med uklare instruksjoner og dårlig brukerfeedback |
| **Teknisk implementering** | Demonstrerer mestring av spillutviklingskonsepter, hendelseshåndtering og tilstandsadministrasjon | Viser solid forståelse av spillkonsepter med god implementering | Grunnleggende forståelse med akseptabel implementering | Begrenset forståelse med dårlig implementering |
| **Dokumentasjon** | Omfattende README med klare instruksjoner, godt dokumentert kode og grundige testbevis | God dokumentasjon med klare instruksjoner og tilstrekkelige kodekommentarer | Grunnleggende dokumentasjon med minimale instruksjoner | Dårlig eller manglende dokumentasjon |

### Karaktereringsskala
- **Eksemplarisk (16-20 poeng)**: Overgår forventningene med kreative funksjoner og polert implementering
- **Dyktig (12-15 poeng)**: Oppfyller alle krav med solid utførelse
- **Under utvikling (8-11 poeng)**: Oppfyller de fleste krav med mindre problemer
- **Nybegynner (4-7 poeng)**: Oppfyller noen krav, men trenger betydelig forbedring

## Ekstra læringsressurser

- [MDN Guide til Spillutvikling](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Spillutvikling Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentasjon](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Prinsipper for Spilldesign](https://www.gamasutra.com/blogs/)

> 💡 **Profftips**: Start enkelt og legg til funksjoner gradvis. Et godt polert enkelt spill er bedre enn et komplekst spill med feil!

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.