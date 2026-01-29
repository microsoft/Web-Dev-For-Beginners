# Eventdreven Programmering - Byg et Typespil

```mermaid
journey
    title Din udviklingsrejse for skrive-spil
    section Fundament
      Planlæg spillestruktur: 3: Student
      Design brugerflade: 4: Student
      Opsæt HTML-elementer: 4: Student
    section Funktionalitet
      Håndter brugerinput: 4: Student
      Hold styr på timing: 5: Student
      Beregn nøjagtighed: 5: Student
    section Funktioner
      Tilføj visuel feedback: 5: Student
      Implementer spilleslogik: 5: Student
      Finpuds oplevelse: 5: Student
```
## Introduktion

Her er noget, som alle udviklere kender til, men sjældent taler om: at skrive hurtigt er en superkraft! 🚀 Tænk over det - jo hurtigere du kan få dine idéer fra din hjerne til din kodeeditor, jo mere kan din kreativitet flyde. Det er som at have en direkte forbindelse mellem dine tanker og skærmen.

```mermaid
pie title Spilfunktioner
    "Realtidsfeedback" : 25
    "Ydelsessporing" : 20
    "Interaktivt UI" : 20
    "Tidsmålersystem" : 15
    "Citatstyring" : 10
    "Resultatvisning" : 10
```
Vil du vide en af de bedste måder at opgradere denne færdighed på? Du gættede rigtigt - vi skal bygge et spil!

```mermaid
flowchart LR
    A[Spiller starter spil] --> B[Tilfældigt citat vises]
    B --> C[Spiller taster tegn]
    C --> D{Tegnet korrekt?}
    D -->|Ja| E[Grøn markering]
    D -->|Nej| F[Rød markering]
    E --> G[Opdater nøjagtighed]
    F --> G
    G --> H{Citat færdigt?}
    H -->|Nej| C
    H -->|Ja| I[Beregning af WPM]
    I --> J[Vis resultater]
    J --> K[Spil igen?]
    K -->|Ja| B
    K -->|Nej| L[Spil slut]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Lad os skabe et fantastisk typespil sammen!

Klar til at sætte alle de JavaScript-, HTML- og CSS-færdigheder, du har lært, i spil? Vi skal bygge et typespil, der vil udfordre dig med tilfældige citater fra den legendariske detektiv [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes). Spillet vil holde styr på, hvor hurtigt og præcist du kan skrive - og tro mig, det er mere vanedannende, end du måske tror!

```mermaid
mindmap
  root((Udvikling af Tastespil))
    User Interface
      Input Elements
      Visuel Feedback
      Responsivt Design
      Tilgængelighed
    Game Logic
      Citat Udvælgelse
      Tidsstyring
      Præcision Overvågning
      Scoringsberegning
    Event Handling
      Tastaturinput
      Knapklik
      Opdateringer i Real-tid
      Spiltilstand Ændringer
    Performance Metrics
      Ord Per Minut
      Tegnpræcision
      Fejl Overvågning
      Fremdriftsvisning
    User Experience
      Øjeblikkelig Feedback
      Klare Instruktioner
      Engagerende Indhold
      Opnåelsessystem
```
![demo](../../../4-typing-game/images/demo.gif)

## Hvad Du Skal Vide

```mermaid
flowchart TD
    A[Bruger Handling] --> B{Hændelsestype?}
    B -->|Tastetryk| C[Tastatur Hændelse]
    B -->|Klik på Knap| D[Mus Hændelse]
    B -->|Timer| E[Tids Hændelse]
    
    C --> F[Tjek Tegn]
    D --> G[Start/Nulstil Spil]
    E --> H[Opdater Timer]
    
    F --> I{Korrekt?}
    I -->|Ja| J[Fremhæv Grøn]
    I -->|Nej| K[Fremhæv Rød]
    
    J --> L[Opdater Score]
    K --> L
    L --> M[Tjek Spiltilstand]
    
    G --> N[Generer Nyt Citér]
    H --> O[Vis Tid]
    
    M --> P{Spil Færdigt?}
    P -->|Ja| Q[Vis Resultater]
    P -->|Nej| R[Fortsæt Spil]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Før vi går i gang, så sørg for, at du er komfortabel med disse koncepter (bare rolig, hvis du har brug for en hurtig opfriskning - det har vi alle prøvet!):

- Oprettelse af tekstinput og knapkontroller  
- CSS og at sætte stilarter med klasser  
- Grundlæggende JavaScript  
  - Oprettelse af et array  
  - Oprettelse af et tilfældigt nummer  
  - At hente den aktuelle tid  

Hvis nogle af disse føles lidt rustne, er det helt i orden! Nogle gange er den bedste måde at konsolidere din viden på at kaste sig ud i et projekt og finde tingene ud af undervejs.

### 🔄 **Pædagogisk Status**
**Fundamentvurdering**: Før du starter udviklingen, skal du sikre dig, at du forstår:  
- ✅ Hvordan HTML-formularer og input-elementer fungerer  
- ✅ CSS-klasser og dynamisk styling  
- ✅ JavaScript event-lyttere og -håndterere  
- ✅ Array-manipulation og tilfældigt valg  
- ✅ Tidsmåling og beregninger  

**Hurtig Selvevaluering**: Kan du forklare, hvordan disse koncepter fungerer sammen i et interaktivt spil?  
- **Events** udløses, når brugerne interagerer med elementer  
- **Handlers** behandler disse events og opdaterer spillets tilstand  
- **CSS** giver visuel feedback på brugerhandlinger  
- **Timing** muliggør måling af præstation og spillets fremdrift  

```mermaid
quadrantChart
    title Udvikling af skrivefærdigheder i spil
    x-axis Begynder --> Ekspert
    y-axis Statisk --> Interaktiv
    quadrant-1 Avancerede spil
    quadrant-2 Realtids-apps
    quadrant-3 Grundlæggende sider
    quadrant-4 Interaktive sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Lad Os Bygge Det Her!

[Oprettelse af et typespil ved brug af eventdrevet programmering](./typing-game/README.md)

### ⚡ **Det Kan Du Nå På 5 Minutter**
- [ ] Åbn din browserkonsol og prøv at lytte til tastatur-events med `addEventListener`  
- [ ] Opret en simpel HTML-side med et inputfelt og test skrivningsdetektion  
- [ ] Øv strengmanipulation ved at sammenligne skrevet tekst med målteksten  
- [ ] Eksperimenter med `setTimeout` for at forstå timing-funktioner  

### 🎯 **Det Kan Du Opnå På En Time**
- [ ] Fuldfør quizzen efter lektionen og forstå eventdrevet programmering  
- [ ] Byg en basal version af typespillet med ordvalidering  
- [ ] Tilføj visuel feedback ved korrekt og forkert skrivning  
- [ ] Implementer et simpelt pointsystem baseret på hastighed og nøjagtighed  
- [ ] Stil dit spil med CSS, så det bliver visuelt tiltalende  

### 📅 **Din Ugelange Spiludvikling**
- [ ] Udarbejd det fulde typespil med alle funktioner og finish  
- [ ] Tilføj sværhedsgrader med varierende ordkompleksitet  
- [ ] Implementer brugerstatistikker (WPM, nøjagtighed over tid)  
- [ ] Skab lydeffekter og animationer for bedre brugeroplevelse  
- [ ] Gør dit spil mobilvenligt til touch-enheder  
- [ ] Del dit spil online og indsamle feedback fra brugere  

### 🌟 **Din Månedslange Interaktive Udvikling**
- [ ] Byg flere spil, der udforsker forskellige interaktionsmønstre  
- [ ] Lær om spillelooper, tilstandshåndtering og performanceoptimering  
- [ ] Bidrag til open source-spiludviklingsprojekter  
- [ ] Mestre avancerede timing-koncepter og glidende animationer  
- [ ] Skab en portefølje med forskellige interaktive applikationer  
- [ ] Mentorér andre, der er interesserede i spiludvikling og brugerinteraktion  

## 🎯 Din Tidslinje for Mastery i Typespil

```mermaid
timeline
    title Spiludviklings læringsfremskridt
    
    section Setup (10 minutter)
        Projektstruktur: HTML fundament
                         : CSS stilopsætning
                         : Oprettelse af JavaScript-fil
        
    section Brugergrænseflade (20 minutter)
        Interaktive elementer: Indtastningsfelter
                            : Knapkontroller
                            : Visningsområder
                            : Responsivt layout
        
    section Hændelseshåndtering (25 minutter)
        Brugerinteraktion: Tastaturhændelser
                        : Mus-hændelser
                        : Realtids feedback
                        : Tilstandshåndtering
        
    section Spillogik (30 minutter)
        Kernefunktionalitet: Citatgenerering
                          : Tegnsammenligning
                          : Præcisionberegning
                          : Timerimplementering
        
    section Præstationssporing (35 minutter)
        Mål & Analyse: WPM beregning
                           : Fejlsporing
                           : Fremskridt visualisering
                           : Resultatvisning
        
    section Polering & Forbedring (45 minutter)
        Brugeroplevelse: Visuel feedback
                       : Lyd effekter
                       : Animationer
                       : Tilgængelighedsfunktioner
        
    section Avancerede funktioner (1 uge)
        Udvidet funktionalitet: Sværhedsgrader
                              : Leaderboards
                              : Tilpassede citater
                              : Multiplayer muligheder
        
    section Professionelle færdigheder (1 måned)
        Spiludvikling: Præstationsoptimering
                        : Kodearkitektur
                        : Teststrategier
                        : Udrulningsmønstre
```
### 🛠️ Dit Spiludviklingsværktøjssæt Oversigt

Efter at have fuldført dette projekt, vil du have mestret:  
- **Eventdreven Programmering**: Reaktive brugerflader, der reagerer på input  
- **Feedback i Realtime**: Øjeblikkelige visuelle og performance-opdateringer  
- **Præstationsmåling**: Præcise timing- og pointsystemer  
- **Spil-tilstandshåndtering**: Kontrol over applikationens flow og brugeroplevelse  
- **Interaktivt Design**: Skabelse af engagerende, vanedannende brugeroplevelser  
- **Moderne Web-API’er**: Udnyttelse af browserfunktioner til rige interaktioner  
- **Tilgængelighedsmønstre**: Inklusivt design for alle brugere  

**Virkelige Anvendelser**: Disse færdigheder kan direkte anvendes på:  
- **Webapplikationer**: Enhver interaktiv brugerflade eller dashboard  
- **Uddannelsessoftware**: Læringsplatforme og færdighedsvurderingsværktøjer  
- **Produktivitetsværktøjer**: Teksteditorer, IDE’er og samarbejdsværktøjer  
- **Spilindustrien**: Browserspil og interaktiv underholdning  
- **Mobiludvikling**: Touch-baserede brugerflader og gestushåndtering  

**Næste Niveau**: Du er klar til at udforske avancerede spilframeworks, realtids multiplayer-systemer eller komplekse interaktive applikationer!

## Credits

Skrevet med ♥️ af [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, bedes du være opmærksom på, at automatiske oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål bør betragtes som den autoritative kilde. For vigtig information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->