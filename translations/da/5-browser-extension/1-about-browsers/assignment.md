# Opgave: Giv din browserudvidelse et nyt design

## Oversigt

Nu hvor du har opbygget HTML-strukturen for din browserudvidelse til beregning af CO2-aftryk, er det tid til at gøre den visuelt tiltalende og brugervenlig. Et godt design forbedrer brugeroplevelsen og gør din udvidelse mere professionel og engagerende.

Din udvidelse har grundlæggende CSS-styling, men denne opgave udfordrer dig til at skabe en unik visuel identitet, der afspejler din personlige stil, samtidig med at du opretholder fremragende brugervenlighed.

## Instruktioner

### Del 1: Analyser det nuværende design

Før du foretager ændringer, skal du undersøge den eksisterende CSS-struktur:

1. **Find** CSS-filerne i dit udvidelsesprojekt
2. **Gennemgå** den nuværende stylingtilgang og farveskema
3. **Identificer** områder, der kan forbedres i layout, typografi og visuel hierarki
4. **Overvej**, hvordan designet understøtter brugerens mål (nem formularudfyldelse og tydelig data-visning)

### Del 2: Design din egen styling

Skab et sammenhængende visuelt design, der inkluderer:

**Farveskema:**
- Vælg en primær farvepalet, der afspejler miljøtemaer
- Sørg for tilstrækkelig kontrast for tilgængelighed (brug værktøjer som WebAIM's kontrastkontrol)
- Overvej, hvordan farverne ser ud på tværs af forskellige browsertemaer

**Typografi:**
- Vælg læsbare skrifttyper, der fungerer godt i små udvidelsesstørrelser
- Etabler et klart hierarki med passende skriftstørrelser og vægte
- Sørg for, at teksten forbliver læsbar i både lyse og mørke browsertemaer

**Layout og afstand:**
- Forbedr den visuelle organisering af formularfelter og datavisning
- Tilføj passende polstring og marginer for bedre læsbarhed
- Overvej principper for responsivt design til forskellige skærmstørrelser

### Del 3: Implementer dit design

Rediger CSS-filerne for at implementere dit design:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Vigtige områder at style:**
- **Formularelementer**: Indtastningsfelter, etiketter og send-knap
- **Resultatvisning**: Databeholder, tekststyling og indlæsningsstatus
- **Interaktive elementer**: Hover-effekter, knaptilstande og overgange
- **Overordnet layout**: Beholderafstand, baggrundsfarver og visuel hierarki

### Del 4: Test og finjuster

1. **Byg** din udvidelse med `npm run build`
2. **Indlæs** den opdaterede udvidelse i din browser
3. **Test** alle visuelle tilstande (formularudfyldelse, indlæsning, resultatvisning, fejl)
4. **Bekræft** tilgængelighed med browserens udviklerværktøjer
5. **Finjuster** dine styles baseret på faktisk brug

## Kreative udfordringer

### Grundlæggende niveau
- Opdater farver og skrifttyper for at skabe et sammenhængende tema
- Forbedr afstand og justering i hele grænsefladen
- Tilføj subtile hover-effekter til interaktive elementer

### Mellemniveau
- Design brugerdefinerede ikoner eller grafik til din udvidelse
- Implementer glidende overgange mellem forskellige tilstande
- Skab en unik indlæsningsanimation til API-kald

### Avanceret niveau
- Design flere temaindstillinger (lys/mørk/høj kontrast)
- Implementer responsivt design til forskellige browservinduesstørrelser
- Tilføj mikrointeraktioner, der forbedrer brugeroplevelsen

## Retningslinjer for aflevering

Din færdige opgave skal inkludere:

- **Redigerede CSS-filer** med din egen styling
- **Skærmbilleder**, der viser din udvidelse i forskellige tilstande (formular, indlæsning, resultater)
- **Kort beskrivelse** (2-3 sætninger), der forklarer dine designvalg og hvordan de forbedrer brugeroplevelsen

## Vurderingsrubrik

| Kriterier | Fremragende (4) | God (3) | Under udvikling (2) | Begynder (1) |
|-----------|-----------------|---------|---------------------|--------------|
| **Visuelt design** | Kreativt, sammenhængende design, der forbedrer brugervenlighed og afspejler stærke designprincipper | Gode designvalg med konsekvent styling og klart visuelt hierarki | Grundlæggende designforbedringer med nogle konsistensproblemer | Minimale stylingændringer eller inkonsekvent design |
| **Funktionalitet** | Alle styles fungerer perfekt på tværs af forskellige tilstande og browsermiljøer | Styles fungerer godt med mindre problemer i kanttilfælde | De fleste styles er funktionelle med nogle visningsproblemer | Betydelige stylingproblemer, der påvirker brugervenligheden |
| **Kodekvalitet** | Ren, velorganiseret CSS med meningsfulde klassenavne og effektive selektorer | God CSS-struktur med passende brug af selektorer og egenskaber | Acceptabel CSS med nogle organisatoriske problemer | Dårlig CSS-struktur eller overdrevent kompleks styling |
| **Tilgængelighed** | Fremragende farvekontrast, læsbare skrifttyper og hensyn til brugere med handicap | Gode tilgængelighedspraksisser med mindre forbedringsområder | Grundlæggende tilgængelighedsovervejelser med nogle problemer | Begrænset opmærksomhed på tilgængelighedskrav |

## Tips til succes

> 💡 **Designtip**: Start med subtile ændringer og byg op til mere dramatiske stylinger. Små forbedringer i typografi og afstand har ofte stor indflydelse på den opfattede kvalitet.

**Bedste praksis at følge:**
- **Test** din udvidelse i både lyse og mørke browsertemaer
- **Brug** relative enheder (em, rem) for bedre skalerbarhed
- **Oprethold** konsekvent afstand ved hjælp af CSS-variabler
- **Overvej**, hvordan dit design vil se ud for brugere med forskellige visuelle behov
- **Valider** din CSS for at sikre, at den følger korrekt syntaks

> ⚠️ **Almindelig fejl**: Ofre ikke brugervenlighed for visuel appel. Din udvidelse skal være både smuk og funktionel.

**Husk at:**
- **Bevare** vigtig information let læselig
- **Sikre**, at knapper og interaktive elementer er nemme at klikke på
- **Opretholde** klar visuel feedback for brugerhandlinger
- **Teste** dit design med rigtige data, ikke kun pladsholdertekst

Held og lykke med at skabe en browserudvidelse, der både er funktionel og visuelt imponerende!

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.