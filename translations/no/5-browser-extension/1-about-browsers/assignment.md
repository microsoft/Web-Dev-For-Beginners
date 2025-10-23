<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-23T22:40:31+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "no"
}
-->
# Oppgave: Restyle nettleserutvidelsen din

## Oversikt

Nå som du har bygget HTML-strukturen for din karbonfotavtrykk-nettleserutvidelse, er det på tide å gjøre den visuelt tiltalende og brukervennlig. God design forbedrer brukeropplevelsen og gjør utvidelsen din mer profesjonell og engasjerende.

Utvidelsen din har grunnleggende CSS-styling, men denne oppgaven utfordrer deg til å skape en unik visuell identitet som reflekterer din personlige stil samtidig som den opprettholder utmerket brukervennlighet.

## Instruksjoner

### Del 1: Analyser dagens design

Før du gjør endringer, undersøk den eksisterende CSS-strukturen:

1. **Finn** CSS-filene i prosjektet ditt
2. **Gå gjennom** den nåværende stylingtilnærmingen og fargepaletten
3. **Identifiser** områder som kan forbedres innen layout, typografi og visuell hierarki
4. **Vurder** hvordan designet støtter brukerens mål (enkel utfylling av skjema og tydelig visning av data)

### Del 2: Design din egen styling

Lag et sammenhengende visuelt design som inkluderer:

**Fargepalett:**
- Velg en primær fargepalett som reflekterer miljøtemaer
- Sørg for tilstrekkelig kontrast for tilgjengelighet (bruk verktøy som WebAIMs kontrastsjekker)
- Tenk på hvordan fargene vil se ut i ulike nettlesertemaer

**Typografi:**
- Velg lesbare skrifttyper som fungerer godt i små utvidelsesstørrelser
- Etabler et tydelig hierarki med passende skriftstørrelser og vekter
- Sørg for at teksten forblir lesbar i både lyse og mørke nettlesertemaer

**Layout og avstand:**
- Forbedre den visuelle organiseringen av skjemaelementer og datavisning
- Legg til passende polstring og marger for bedre lesbarhet
- Vurder prinsipper for responsiv design for ulike skjermstørrelser

### Del 3: Implementer designet ditt

Endre CSS-filene for å implementere designet ditt:

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

**Viktige områder å style:**
- **Skjemaelementer**: Inndatafelt, etiketter og send-knapp
- **Resultatvisning**: Databeholder, tekststyling og lastetilstander
- **Interaktive elementer**: Hover-effekter, knappetilstander og overganger
- **Generell layout**: Beholderavstand, bakgrunnsfarger og visuell hierarki

### Del 4: Test og forbedre

1. **Bygg** utvidelsen din med `npm run build`
2. **Last** den oppdaterte utvidelsen inn i nettleseren din
3. **Test** alle visuelle tilstander (skjemainndata, lasting, resultatvisning, feil)
4. **Verifiser** tilgjengelighet med utviklerverktøy i nettleseren
5. **Forbedre** stilene dine basert på faktisk bruk

## Kreative utfordringer

### Grunnleggende nivå
- Oppdater farger og skrifttyper for å skape et sammenhengende tema
- Forbedre avstand og justering gjennom hele grensesnittet
- Legg til subtile hover-effekter på interaktive elementer

### Mellomnivå
- Design egendefinerte ikoner eller grafikk for utvidelsen din
- Implementer jevne overganger mellom ulike tilstander
- Lag en unik lastingsanimasjon for API-kall

### Avansert nivå
- Design flere temaalternativer (lys/mørk/høy kontrast)
- Implementer responsiv design for ulike nettleservindusstørrelser
- Legg til mikrointeraksjoner som forbedrer brukeropplevelsen

## Retningslinjer for innlevering

Den fullførte oppgaven din bør inkludere:

- **Endrede CSS-filer** med din egen styling
- **Skjermbilder** som viser utvidelsen din i ulike tilstander (skjema, lasting, resultater)
- **Kort beskrivelse** (2-3 setninger) som forklarer designvalgene dine og hvordan de forbedrer brukeropplevelsen

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Under utvikling (2) | Nybegynner (1) |
|-----------|-----------------|---------|---------------------|----------------|
| **Visuell design** | Kreativt, sammenhengende design som forbedrer brukervennlighet og reflekterer sterke designprinsipper | Gode designvalg med konsekvent styling og tydelig visuell hierarki | Grunnleggende designforbedringer med noen konsistensproblemer | Minimale stilendringer eller inkonsekvent design |
| **Funksjonalitet** | Alle stiler fungerer perfekt på tvers av ulike tilstander og nettlesermiljøer | Stiler fungerer godt med mindre problemer i kanttilfeller | De fleste stiler fungerer med noen visningsproblemer | Betydelige stilproblemer som påvirker brukervennlighet |
| **Kodekvalitet** | Ren, godt organisert CSS med meningsfulle klassenavn og effektive selektorer | God CSS-struktur med passende bruk av selektorer og egenskaper | Akseptabel CSS med noen organisasjonsproblemer | Dårlig CSS-struktur eller altfor kompleks styling |
| **Tilgjengelighet** | Utmerket fargekontrast, lesbare skrifttyper og hensyn til brukere med funksjonsnedsettelser | Gode tilgjengelighetspraksiser med mindre forbedringsområder | Grunnleggende tilgjengelighetshensyn med noen problemer | Begrenset oppmerksomhet til tilgjengelighetskrav |

## Tips for suksess

> 💡 **Designtips**: Start med subtile endringer og bygg opp til mer dramatiske stilendringer. Små forbedringer i typografi og avstand kan ofte ha stor innvirkning på opplevd kvalitet.

**Beste praksis å følge:**
- **Test** utvidelsen din i både lyse og mørke nettlesertemaer
- **Bruk** relative enheter (em, rem) for bedre skalerbarhet
- **Oppretthold** konsekvent avstand ved bruk av CSS-tilpassede egenskaper
- **Tenk på** hvordan designet ditt vil se ut for brukere med ulike visuelle behov
- **Valider** CSS-en din for å sikre at den følger korrekt syntaks

> ⚠️ **Vanlig feil**: Ikke ofre brukervennlighet for visuell appell. Utvidelsen din bør være både vakker og funksjonell.

**Husk å:**
- **Holde** viktig informasjon lett lesbar
- **Sikre** at knapper og interaktive elementer er enkle å klikke på
- **Opprettholde** tydelig visuell tilbakemelding for brukerhandlinger
- **Teste** designet ditt med ekte data, ikke bare plassholdertekst

Lykke til med å lage en nettleserutvidelse som er både funksjonell og visuelt imponerende!

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.