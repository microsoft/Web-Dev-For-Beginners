<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-23T22:33:59+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "no"
}
-->
# Style Din Bankapp med Moderne CSS

## Prosjektoversikt

Forvandle din funksjonelle bankapplikasjon til en visuelt tiltalende, profesjonell webapp ved hjelp av moderne CSS-teknikker. Du vil lage et sammenhengende designsystem som forbedrer brukeropplevelsen samtidig som du opprettholder prinsipper for tilgjengelighet og responsiv design.

Denne oppgaven utfordrer deg til å bruke moderne webdesignmønstre, implementere en konsistent visuell identitet og lage et grensesnitt som brukerne vil finne både attraktivt og intuitivt å navigere.

## Instruksjoner

### Steg 1: Sett opp stilarket ditt

**Lag grunnlaget for CSS:**

1. **Opprett** en ny fil kalt `styles.css` i prosjektets rotmappe
2. **Koble** stilarket til din `index.html`-fil:
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


### Steg 2: Krav til designsystem

**Implementer disse essensielle designelementene:**

#### Fargepalett
- **Primærfarge**: Velg en profesjonell farge for knapper og fremhevinger
- **Sekundærfarge**: Komplementær farge for aksenter og sekundære handlinger
- **Nøytrale farger**: Gråtoner for tekst, grenser og bakgrunner
- **Suksess-/feilfarger**: Grønn for suksessstatus, rød for feil

#### Typografi
- **Overskriftshierarki**: Klar forskjell mellom H1-, H2- og H3-elementer
- **Brødtekst**: Lesbar skriftstørrelse (minimum 16px) og passende linjehøyde
- **Skjematekster**: Tydelig, tilgjengelig tekststil

#### Layout og avstand
- **Konsekvent avstand**: Bruk en avstandsskala (8px, 16px, 24px, 32px)
- **Gridsystem**: Organisert layout for skjemaer og innholdsområder
- **Responsivt design**: Mobil-først tilnærming med brytpunkter

### Steg 3: Stil på komponenter

**Stil disse spesifikke komponentene:**

#### Skjemaer
- **Inndatafelt**: Profesjonelle grenser, fokusstatus og valideringsstil
- **Knapper**: Hover-effekter, deaktivert status og lastindikatorer
- **Tekster**: Tydelig plassering og indikatorer for obligatoriske felt
- **Feilmeldinger**: Synlig feilstil og hjelpsomme meldinger

#### Navigasjon
- **Header**: Ren, merkevaretilpasset navigasjonsområde
- **Lenker**: Tydelige hover-status og aktive indikatorer
- **Logo/Tittel**: Distinkt merkevareelement

#### Innholdsområder
- **Seksjoner**: Klar visuell separasjon mellom ulike områder
- **Kort**: Hvis du bruker kortbaserte layouter, inkluder skygger og grenser
- **Bakgrunner**: Passende bruk av hvit plass og subtile bakgrunner

### Steg 4: Avanserte funksjoner (valgfritt)

**Vurder å implementere disse avanserte funksjonene:**
- **Mørk modus**: Veksle mellom lys og mørk tema
- **Animasjoner**: Subtile overganger og mikrointeraksjoner
- **Lastestatus**: Visuell tilbakemelding under skjemainnsendinger
- **Responsive bilder**: Optimaliserte bilder for ulike skjermstørrelser

## Designinspirasjon

**Moderne bankapp-karakteristikker:**
- **Rent, minimalistisk design** med mye hvit plass
- **Profesjonelle fargepaletter** (blåtoner, grønntoner eller sofistikerte nøytrale farger)
- **Klar visuell hierarki** med fremtredende call-to-action-knapper
- **Tilgjengelige kontrastforhold** som oppfyller WCAG-retningslinjer
- **Mobilresponsive layouter** som fungerer på alle enheter

## Tekniske krav

### CSS-organisering
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


### Krav til tilgjengelighet
- **Fargekontrast**: Sørg for minst 4.5:1 forhold for vanlig tekst
- **Fokusindikatorer**: Synlige fokusstatus for tastaturnavigasjon
- **Skjematekster**: Riktig tilknyttet til inndatafelt
- **Responsivt design**: Brukervennlig på skjermer fra 320px til 1920px bredde

## Evalueringskriterier

| Kriterier | Fremragende (A) | God (B) | Under utvikling (C) | Trenger forbedring (F) |
|-----------|-----------------|---------|---------------------|------------------------|
| **Designsystem** | Implementerer omfattende designsystem med konsekvente farger, typografi og avstand gjennomgående | Bruker konsekvent styling med klare designmønstre og god visuell hierarki | Grunnleggende styling med noen konsistensproblemer eller manglende designelementer | Minimal styling med inkonsekvente eller motstridende designvalg |
| **Brukeropplevelse** | Skaper intuitivt, profesjonelt grensesnitt med utmerket brukervennlighet og visuell appell | Gir god brukeropplevelse med klar navigasjon og lesbart innhold | Grunnleggende brukervennlighet med behov for noen UX-forbedringer | Dårlig brukervennlighet, vanskelig å navigere eller lese |
| **Teknisk implementering** | Bruker moderne CSS-teknikker, organisert kode og følger beste praksis | Implementerer CSS effektivt med god organisering og passende teknikker | CSS fungerer korrekt, men kan mangle organisering eller moderne tilnærminger | Dårlig CSS-implementering med tekniske problemer eller kompatibilitetsproblemer |
| **Responsivt design** | Fullt responsivt design som fungerer vakkert på alle enhetsstørrelser | God responsiv oppførsel med mindre problemer på noen skjermstørrelser | Grunnleggende responsiv implementering med noen layoutproblemer | Ikke responsivt eller betydelige problemer på mobile enheter |
| **Tilgjengelighet** | Oppfyller WCAG-retningslinjer med utmerket tastaturnavigasjon og støtte for skjermlesere | Gode tilgjengelighetspraksiser med riktig kontrast og fokusindikatorer | Grunnleggende tilgjengelighetshensyn med noen manglende elementer | Dårlig tilgjengelighet, vanskelig for brukere med funksjonsnedsettelser |

## Retningslinjer for innlevering

**Inkluder i innleveringen:**
- **styles.css**: Det komplette stilarket ditt
- **Oppdatert HTML**: Eventuelle HTML-endringer du har gjort
- **Skjermbilder**: Bilder som viser designet ditt på desktop og mobil
- **README**: Kort beskrivelse av designvalgene dine og fargepaletten

**Ekstrapoeng for:**
- **CSS-tilpassede egenskaper** for vedlikeholdbar tematisering
- **Avanserte CSS-funksjoner** som Grid, Flexbox eller CSS-animasjoner
- **Ytelseshensyn** som optimalisert CSS og minimal filstørrelse
- **Tverrplattformtesting** for å sikre kompatibilitet på ulike nettlesere

> 💡 **Tips**: Start med mobildesign først, og forbedre deretter for større skjermer. Denne mobil-først tilnærmingen sikrer at appen din fungerer godt på alle enheter og følger moderne webutviklingspraksis.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.