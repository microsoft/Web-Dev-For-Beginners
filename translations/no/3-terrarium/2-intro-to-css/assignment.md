# CSS Refaktorering Oppgave

## Mål

Transformér terrarium-prosjektet ditt til å bruke moderne CSS-layoutteknikker! Refaktorer den nåværende tilnærmingen med absolutt posisjonering for å implementere **Flexbox** eller **CSS Grid** for et mer vedlikeholdbart og responsivt design. Denne oppgaven utfordrer deg til å bruke moderne CSS-standarder samtidig som du opprettholder det visuelle utseendet til terrariet ditt.

Å forstå når og hvordan man bruker ulike layoutmetoder er en viktig ferdighet innen moderne webutvikling. Denne øvelsen bygger bro mellom tradisjonelle posisjoneringsteknikker og moderne CSS-layoutsystemer.

## Oppgaveinstruksjoner

### Fase 1: Analyse og Planlegging
1. **Gå gjennom din nåværende terrariumkode** - Identifiser hvilke elementer som for øyeblikket bruker absolutt posisjonering
2. **Velg din layoutmetode** - Bestem om Flexbox eller CSS Grid passer best til dine designmål
3. **Skisser din nye layoutstruktur** - Planlegg hvordan containere og planteelementer skal organiseres

### Fase 2: Implementering
1. **Lag en ny versjon** av terrarium-prosjektet ditt i en separat mappe
2. **Oppdater HTML-strukturen** etter behov for å støtte den valgte layoutmetoden
3. **Refaktorer CSS** til å bruke Flexbox eller CSS Grid i stedet for absolutt posisjonering
4. **Oppretthold visuell konsistens** - Sørg for at plantene og terrarium-glasset vises på samme posisjoner
5. **Implementer responsiv oppførsel** - Layouten din skal tilpasse seg elegant til ulike skjermstørrelser

### Fase 3: Testing og Dokumentasjon
1. **Tverrnettlesertesting** - Verifiser at designet ditt fungerer i Chrome, Firefox, Edge og Safari
2. **Responsiv testing** - Sjekk layouten din på mobil, nettbrett og desktop-skjermstørrelser
3. **Dokumentasjon** - Legg til kommentarer i CSS som forklarer dine layoutvalg
4. **Skjermbilder** - Ta bilder av terrariet ditt i ulike nettlesere og skjermstørrelser

## Tekniske Krav

### Layoutimplementering
- **Velg EN**: Implementer enten Flexbox ELLER CSS Grid (ikke begge for de samme elementene)
- **Responsivt Design**: Bruk relative enheter (`rem`, `em`, `%`, `vw`, `vh`) i stedet for faste piksler
- **Tilgjengelighet**: Oppretthold riktig semantisk HTML-struktur og alt-tekst
- **Kodekvalitet**: Bruk konsistente navnekonvensjoner og organiser CSS logisk

### Moderne CSS-funksjoner som skal inkluderes
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Nettleserstøttekrav
- **Chrome/Edge**: De nyeste 2 versjonene
- **Firefox**: De nyeste 2 versjonene  
- **Safari**: De nyeste 2 versjonene
- **Mobilnettlesere**: iOS Safari, Chrome Mobile

## Leveranser

1. **Oppdatert HTML-fil** med forbedret semantisk struktur
2. **Refaktorert CSS-fil** som bruker moderne layoutteknikker
3. **Skjermbilde-samling** som viser tverrnettleserkompatibilitet:
   - Desktop-visning (1920x1080)
   - Nettbrett-visning (768x1024) 
   - Mobil-visning (375x667)
   - Minst 2 forskjellige nettlesere
4. **README.md-fil** som dokumenterer:
   - Ditt layoutvalg (Flexbox vs Grid) og begrunnelse
   - Utfordringer møtt under refaktoreringen
   - Notater om nettleserkompatibilitet
   - Instruksjoner for å kjøre koden din

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Under utvikling (2) | Nybegynner (1) |
|-----------|-----------------|---------|---------------------|----------------|
| **Layoutimplementering** | Fremragende bruk av Flexbox/Grid med avanserte funksjoner; fullt responsiv | Korrekt implementering med god responsiv oppførsel | Grunnleggende implementering med mindre responsproblemer | Ufullstendig eller feil layoutimplementering |
| **Kodekvalitet** | Ren, godt organisert CSS med meningsfulle kommentarer og konsistent navngivning | God organisering med noen kommentarer | Tilfredsstillende organisering med minimale kommentarer | Dårlig organisering; vanskelig å forstå |
| **Tverrnettleserkompatibilitet** | Perfekt konsistens på alle nødvendige nettlesere med skjermbilder | God kompatibilitet med mindre forskjeller dokumentert | Noen kompatibilitetsproblemer som ikke bryter funksjonaliteten | Store kompatibilitetsproblemer eller manglende testing |
| **Responsivt Design** | Eksepsjonell mobil-først tilnærming med jevne brytningspunkter | God responsiv oppførsel med passende brytningspunkter | Grunnleggende responsiv funksjonalitet med noen layoutproblemer | Begrenset eller ødelagt responsiv oppførsel |
| **Dokumentasjon** | Omfattende README med detaljerte forklaringer og innsikt | God dokumentasjon som dekker alle nødvendige elementer | Grunnleggende dokumentasjon med minimale forklaringer | Ufullstendig eller manglende dokumentasjon |

## Nyttige Ressurser

### Layoutmetode Guider
- 📖 [En komplett guide til Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [En komplett guide til CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Velg riktig verktøy](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Verktøy for nettlesertesting
- 🛠️ [Nettleser DevTools Responsiv Modus](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Funksjonsstøtte](https://caniuse.com/)
- 🛠️ [BrowserStack - Tverrnettlesertesting](https://www.browserstack.com/)

### Verktøy for kodekvalitet
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Kontrastkontroll](https://webaim.org/resources/contrastchecker/)

## Ekstra Utfordringer

🌟 **Avanserte Layouts**: Implementer både Flexbox OG Grid i ulike deler av designet ditt  
🌟 **Integrering av Animasjoner**: Legg til CSS-overganger eller animasjoner som fungerer med din nye layout  
🌟 **Mørk Modus**: Implementer en tema-bryter basert på CSS-tilpassede egenskaper  
🌟 **Container Queries**: Bruk moderne container query-teknikker for komponentnivå responsivitet  

> 💡 **Husk**: Målet er ikke bare å få det til å fungere, men å forstå HVORFOR den valgte layoutmetoden er den beste løsningen for akkurat denne designutfordringen!

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.