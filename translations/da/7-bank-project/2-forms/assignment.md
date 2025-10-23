<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-23T22:08:25+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "da"
}
-->
# Style Din Bank App med Moderne CSS

## Projektoversigt

Forvandl din funktionelle bankapplikation til en visuelt tiltalende, professionelt udseende webapp ved hjælp af moderne CSS-teknikker. Du vil skabe et sammenhængende designsystem, der forbedrer brugeroplevelsen, samtidig med at tilgængelighed og principper for responsivt design opretholdes.

Denne opgave udfordrer dig til at anvende moderne webdesignmønstre, implementere en konsistent visuel identitet og skabe en grænseflade, som brugerne vil finde både attraktiv og intuitiv at navigere i.

## Instruktioner

### Trin 1: Opsæt dit stylesheet

**Opret dit CSS-grundlag:**

1. **Opret** en ny fil kaldet `styles.css` i projektets rodmappe
2. **Link** stylesheetet i din `index.html`-fil:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Start** med CSS-reset og moderne standarder:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Trin 2: Krav til designsystem

**Implementer disse essentielle designelementer:**

#### Farvepalet
- **Primær farve**: Vælg en professionel farve til knapper og fremhævninger
- **Sekundær farve**: Komplementær farve til accenter og sekundære handlinger
- **Neutrale farver**: Gråtoner til tekst, kanter og baggrunde
- **Succes-/Fejlfarver**: Grøn til successtatus, rød til fejl

#### Typografi
- **Overskriftshierarki**: Klar forskel mellem H1-, H2- og H3-elementer
- **Brødtekst**: Læsevenlig skriftstørrelse (minimum 16px) og passende linjeafstand
- **Formularetiketter**: Klar, tilgængelig tekststil

#### Layout og afstand
- **Konsekvent afstand**: Brug en afstandsskala (8px, 16px, 24px, 32px)
- **Gridsystem**: Organiseret layout til formularer og indholdssektioner
- **Responsivt design**: Mobil-først tilgang med breakpoints

### Trin 3: Styling af komponenter

**Style disse specifikke komponenter:**

#### Formularer
- **Inputfelter**: Professionelle kanter, fokusstatus og valideringsstil
- **Knapper**: Hover-effekter, deaktiverede tilstande og indlæsningsindikatorer
- **Etiketter**: Klar placering og indikatorer for obligatoriske felter
- **Fejlmeddelelser**: Synlig fejlstil og hjælpsomme beskeder

#### Navigation
- **Header**: Ren, brandet navigationsområde
- **Links**: Klare hover-tilstande og aktive indikatorer
- **Logo/Titel**: Distinkt brandingelement

#### Indholdsområder
- **Sektioner**: Klar visuel adskillelse mellem forskellige områder
- **Kort**: Hvis du bruger kortbaserede layouts, inkluder skygger og kanter
- **Baggrunde**: Passende brug af hvidt rum og subtile baggrunde

### Trin 4: Avancerede funktioner (valgfrit)

**Overvej at implementere disse avancerede funktioner:**
- **Mørk tilstand**: Skift mellem lyse og mørke temaer
- **Animationer**: Subtile overgange og mikrointeraktioner
- **Indlæsningsstatus**: Visuel feedback under formularindsendelser
- **Responsive billeder**: Optimerede billeder til forskellige skærmstørrelser

## Designinspiration

**Karakteristika for moderne bankapps:**
- **Rent, minimalistisk design** med masser af hvidt rum
- **Professionelle farveskemaer** (blå, grønne eller sofistikerede neutrale farver)
- **Klar visuel hierarki** med fremtrædende call-to-action-knapper
- **Tilgængelige kontrastforhold** der opfylder WCAG-retningslinjer
- **Mobil-responsive layouts** der fungerer på alle enheder

## Tekniske krav

### CSS-organisation
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Krav til tilgængelighed
- **Farvekontrast**: Sørg for mindst 4.5:1 forhold for normal tekst
- **Fokusindikatorer**: Synlige fokusstatus for tastaturnavigation
- **Formularetiketter**: Korrekt tilknyttet inputfelter
- **Responsivt design**: Brugbart på skærme fra 320px til 1920px bredde

## Evalueringsrubrik

| Kriterier | Fremragende (A) | God (B) | Under udvikling (C) | Kræver forbedring (F) |
|-----------|-----------------|---------|----------------------|-----------------------|
| **Designsystem** | Implementerer omfattende designsystem med konsekvente farver, typografi og afstand | Bruger konsekvent styling med klare designmønstre og god visuel hierarki | Grundlæggende styling anvendt med nogle konsistensproblemer eller manglende designelementer | Minimal styling med inkonsekvente eller modstridende designvalg |
| **Brugeroplevelse** | Skaber intuitiv, professionel grænseflade med fremragende brugervenlighed og visuel appel | Giver god brugeroplevelse med klar navigation og læsbar indhold | Grundlæggende brugervenlighed med behov for nogle UX-forbedringer | Dårlig brugervenlighed, svært at navigere eller læse |
| **Teknisk implementering** | Bruger moderne CSS-teknikker, organiseret kode og følger bedste praksis | Implementerer CSS effektivt med god organisation og passende teknikker | CSS fungerer korrekt, men kan mangle organisation eller moderne tilgange | Dårlig CSS-implementering med tekniske problemer eller browserkompatibilitetsproblemer |
| **Responsivt design** | Fuldt responsivt design, der fungerer smukt på alle enhedsstørrelser | God responsiv adfærd med mindre problemer på nogle skærmstørrelser | Grundlæggende responsiv implementering med nogle layoutproblemer | Ikke responsivt eller betydelige problemer på mobile enheder |
| **Tilgængelighed** | Opfylder WCAG-retningslinjer med fremragende tastaturnavigation og skærmlæserstøtte | Gode tilgængelighedspraksis med korrekt kontrast og fokusindikatorer | Grundlæggende tilgængelighedsovervejelser med nogle manglende elementer | Dårlig tilgængelighed, svært for brugere med handicap |

## Indsendelsesvejledning

**Inkluder i din indsendelse:**
- **styles.css**: Dit komplette stylesheet
- **Opdateret HTML**: Eventuelle HTML-ændringer, du har foretaget
- **Skærmbilleder**: Billeder, der viser dit design på desktop og mobil
- **README**: Kort beskrivelse af dine designvalg og farvepalet

**Bonuspoint for:**
- **CSS-custom properties** for vedligeholdelig tematisering
- **Avancerede CSS-funktioner** som Grid, Flexbox eller CSS-animationer
- **Ydelseshensyn** som optimeret CSS og minimal filstørrelse
- **Cross-browser test** der sikrer kompatibilitet på tværs af forskellige browsere

> 💡 **Pro Tip**: Start med mobil design først, og forbedr derefter til større skærme. Denne mobil-først tilgang sikrer, at din app fungerer godt på alle enheder og følger moderne webudviklingsbedste praksis.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.