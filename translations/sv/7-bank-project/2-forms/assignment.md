<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-23T21:44:37+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "sv"
}
-->
# Styla din bankapp med modern CSS

## Projektöversikt

Förvandla din funktionella bankapplikation till en visuellt tilltalande och professionell webapp med hjälp av moderna CSS-tekniker. Du kommer att skapa ett sammanhängande designsystem som förbättrar användarupplevelsen samtidigt som du upprätthåller principer för tillgänglighet och responsiv design.

Denna uppgift utmanar dig att tillämpa moderna webbdesignmönster, implementera en konsekvent visuell identitet och skapa ett gränssnitt som användarna både tycker är attraktivt och intuitivt att navigera.

## Instruktioner

### Steg 1: Skapa din stilmall

**Skapa grunden för din CSS:**

1. **Skapa** en ny fil som heter `styles.css` i projektets rotmapp.
2. **Länka** stilmallen i din `index.html`-fil:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Börja** med CSS-reset och moderna standardinställningar:
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


### Steg 2: Krav för designsystemet

**Implementera dessa viktiga designelement:**

#### Färgpalett
- **Primär färg**: Välj en professionell färg för knappar och markeringar.
- **Sekundär färg**: Kompletterande färg för accenter och sekundära åtgärder.
- **Neutrala färger**: Gråtoner för text, ramar och bakgrunder.
- **Framgångs-/fel-färger**: Grönt för framgång och rött för felmeddelanden.

#### Typografi
- **Rubrikhierarki**: Tydlig skillnad mellan H1-, H2- och H3-element.
- **Brödtext**: Läsbar fontstorlek (minst 16px) och lämplig radavstånd.
- **Formuläretiketter**: Tydlig och tillgänglig textstil.

#### Layout och avstånd
- **Konsekvent avstånd**: Använd en avståndsskala (8px, 16px, 24px, 32px).
- **Gridsystem**: Organiserad layout för formulär och innehållssektioner.
- **Responsiv design**: Mobil-först-approach med brytpunkter.

### Steg 3: Komponentstyling

**Styla dessa specifika komponenter:**

#### Formulär
- **Inmatningsfält**: Professionella ramar, fokusstatus och valideringsstil.
- **Knappar**: Hover-effekter, inaktiverade status och laddningsindikatorer.
- **Etiketter**: Tydlig positionering och indikatorer för obligatoriska fält.
- **Felmeddelanden**: Synlig felstil och hjälpsamma meddelanden.

#### Navigering
- **Header**: Ren, varumärkesanpassad navigeringsyta.
- **Länkar**: Tydliga hover-effekter och aktiva indikatorer.
- **Logotyp/titel**: Distinkt varumärkeselement.

#### Innehållsområden
- **Sektioner**: Tydlig visuell separation mellan olika områden.
- **Kort**: Om du använder kortbaserade layouter, inkludera skuggor och ramar.
- **Bakgrunder**: Lämplig användning av tomrum och subtila bakgrunder.

### Steg 4: Förbättrade funktioner (valfritt)

**Överväg att implementera dessa avancerade funktioner:**
- **Mörkt läge**: Växla mellan ljusa och mörka teman.
- **Animationer**: Subtila övergångar och mikrointeraktioner.
- **Laddningsstatus**: Visuell feedback under formulärinlämningar.
- **Responsiva bilder**: Optimerade bilder för olika skärmstorlekar.

## Designinspiration

**Karakteristiska drag för moderna bankappar:**
- **Ren, minimalistisk design** med gott om tomrum.
- **Professionella färgscheman** (blått, grönt eller sofistikerade neutrala färger).
- **Tydlig visuell hierarki** med framträdande call-to-action-knappar.
- **Tillgängliga kontrastförhållanden** som uppfyller WCAG-riktlinjer.
- **Mobilresponsiva layouter** som fungerar på alla enheter.

## Tekniska krav

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


### Tillgänglighetskrav
- **Färgkontrast**: Säkerställ minst 4.5:1 förhållande för vanlig text.
- **Fokusindikatorer**: Synliga fokusstatus för tangentbordsnavigering.
- **Formuläretiketter**: Korrekt associerade med inmatningsfält.
- **Responsiv design**: Användbar på skärmar från 320px till 1920px breda.

## Utvärderingskriterier

| Kriterier | Exemplariskt (A) | Godkänt (B) | Under utveckling (C) | Behöver förbättras (F) |
|-----------|------------------|-------------|-----------------------|------------------------|
| **Designsystem** | Implementerar ett omfattande designsystem med konsekventa färger, typografi och avstånd | Använder konsekvent styling med tydliga designmönster och bra visuell hierarki | Grundläggande styling med vissa konsistensproblem eller saknade designelement | Minimal styling med inkonsekventa eller motstridiga designval |
| **Användarupplevelse** | Skapar ett intuitivt, professionellt gränssnitt med utmärkt användbarhet och visuell tilltalande design | Ger en bra användarupplevelse med tydlig navigering och läsbar text | Grundläggande användbarhet med vissa förbättringar som behövs | Dålig användbarhet, svårt att navigera eller läsa |
| **Teknisk implementering** | Använder moderna CSS-tekniker, organiserad kodstruktur och följer bästa praxis | Implementerar CSS effektivt med bra organisation och lämpliga tekniker | CSS fungerar korrekt men kan sakna organisation eller moderna metoder | Dålig CSS-implementering med tekniska problem eller kompatibilitetsproblem |
| **Responsiv design** | Fullt responsiv design som fungerar utmärkt på alla enhetsstorlekar | Bra responsivt beteende med mindre problem på vissa skärmstorlekar | Grundläggande responsiv implementering med vissa layoutproblem | Inte responsiv eller betydande problem på mobila enheter |
| **Tillgänglighet** | Uppfyller WCAG-riktlinjer med utmärkt tangentbordsnavigering och stöd för skärmläsare | Bra tillgänglighetspraktiker med korrekt kontrast och fokusindikatorer | Grundläggande tillgänglighetsöverväganden med vissa saknade element | Dålig tillgänglighet, svårt för användare med funktionsnedsättningar |

## Inlämningsriktlinjer

**Inkludera i din inlämning:**
- **styles.css**: Din kompletta stilmall.
- **Uppdaterad HTML**: Eventuella HTML-modifikationer du gjort.
- **Skärmdumpar**: Bilder som visar din design på desktop och mobil.
- **README**: Kort beskrivning av dina designval och färgpalett.

**Bonuspoäng för:**
- **CSS-custom properties** för hållbar tematisering.
- **Avancerade CSS-funktioner** som Grid, Flexbox eller CSS-animationer.
- **Prestandaöverväganden** som optimerad CSS och minimal filstorlek.
- **Testning i olika webbläsare** för att säkerställa kompatibilitet.

> 💡 **Proffstips**: Börja med mobil design först och förbättra sedan för större skärmar. Denna mobil-först-approach säkerställer att din app fungerar bra på alla enheter och följer moderna webbdesignprinciper.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.