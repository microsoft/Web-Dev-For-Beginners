<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-23T21:51:11+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "sv"
}
-->
# Uppgift: Ge din webbläsartillägg en ny stil

## Översikt

Nu när du har byggt HTML-strukturen för ditt webbläsartillägg som mäter koldioxidavtryck, är det dags att göra det visuellt tilltalande och användarvänligt. Bra design förbättrar användarupplevelsen och gör ditt tillägg mer professionellt och engagerande.

Ditt tillägg har grundläggande CSS-styling, men denna uppgift utmanar dig att skapa en unik visuell identitet som reflekterar din personliga stil samtidigt som du upprätthåller utmärkt användbarhet.

## Instruktioner

### Del 1: Analysera den nuvarande designen

Innan du gör ändringar, undersök den befintliga CSS-strukturen:

1. **Leta upp** CSS-filerna i ditt tilläggsprojekt
2. **Granska** den nuvarande stylingmetoden och färgschemat
3. **Identifiera** förbättringsområden inom layout, typografi och visuell hierarki
4. **Fundera över** hur designen stödjer användarens mål (enkel formulärifyllning och tydlig datavisning)

### Del 2: Designa din egen styling

Skapa en sammanhängande visuell design som inkluderar:

**Färgschema:**
- Välj en primär färgpalett som reflekterar miljöteman
- Säkerställ tillräcklig kontrast för tillgänglighet (använd verktyg som WebAIM:s kontrastkontroll)
- Tänk på hur färger ser ut i olika webbläsarteman

**Typografi:**
- Välj läsbara typsnitt som fungerar bra i små tilläggsstorlekar
- Etablera en tydlig hierarki med lämpliga teckenstorlekar och vikter
- Säkerställ att texten förblir läsbar i både ljusa och mörka webbläsarteman

**Layout och avstånd:**
- Förbättra den visuella organiseringen av formulärelement och datavisning
- Lägg till lämplig padding och marginaler för bättre läsbarhet
- Tänk på principer för responsiv design för olika skärmstorlekar

### Del 3: Implementera din design

Ändra CSS-filerna för att implementera din design:

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

**Viktiga områden att styla:**
- **Formulärelement**: Inmatningsfält, etiketter och skicka-knapp
- **Resultatvisning**: Databehållare, textstyling och laddningstillstånd
- **Interaktiva element**: Hover-effekter, knappstatus och övergångar
- **Övergripande layout**: Behållaravstånd, bakgrundsfärger och visuell hierarki

### Del 4: Testa och förbättra

1. **Bygg** ditt tillägg med `npm run build`
2. **Ladda** det uppdaterade tillägget i din webbläsare
3. **Testa** alla visuella tillstånd (formulärifyllning, laddning, resultatvisning, fel)
4. **Verifiera** tillgänglighet med webbläsarens utvecklarverktyg
5. **Förbättra** din styling baserat på faktisk användning

## Kreativa utmaningar

### Grundläggande nivå
- Uppdatera färger och typsnitt för att skapa ett sammanhängande tema
- Förbättra avstånd och justering i hela gränssnittet
- Lägg till subtila hover-effekter på interaktiva element

### Mellannivå
- Designa egna ikoner eller grafik för ditt tillägg
- Implementera mjuka övergångar mellan olika tillstånd
- Skapa en unik laddningsanimation för API-anrop

### Avancerad nivå
- Designa flera temaalternativ (ljus/mörk/hög kontrast)
- Implementera responsiv design för olika webbläsarfönsterstorlekar
- Lägg till mikrointeraktioner som förbättrar användarupplevelsen

## Inlämningsriktlinjer

Din färdiga uppgift ska inkludera:

- **Modifierade CSS-filer** med din egen styling
- **Skärmdumpar** som visar ditt tillägg i olika tillstånd (formulär, laddning, resultat)
- **Kort beskrivning** (2-3 meningar) som förklarar dina designval och hur de förbättrar användarupplevelsen

## Bedömningskriterier

| Kriterier | Exemplariskt (4) | Kompetent (3) | Under utveckling (2) | Början (1) |
|-----------|------------------|----------------|-----------------------|------------|
| **Visuell design** | Kreativ, sammanhängande design som förbättrar användbarhet och reflekterar starka designprinciper | Bra designval med konsekvent styling och tydlig visuell hierarki | Grundläggande designförbättringar med vissa konsistensproblem | Minimala stylingändringar eller inkonsekvent design |
| **Funktionalitet** | Alla stilar fungerar perfekt i olika tillstånd och webbläsarmiljöer | Stilar fungerar bra med mindre problem i kantfall | De flesta stilar fungerar med vissa visningsproblem | Betydande stylingproblem som påverkar användbarheten |
| **Kodkvalitet** | Ren, välorganiserad CSS med meningsfulla klassnamn och effektiva selektorer | Bra CSS-struktur med lämplig användning av selektorer och egenskaper | Acceptabel CSS med vissa organisationsproblem | Dålig CSS-struktur eller överdrivet komplex styling |
| **Tillgänglighet** | Utmärkt färgkontrast, läsbara typsnitt och hänsyn till användare med funktionsnedsättningar | Bra tillgänglighetspraktik med mindre förbättringsområden | Grundläggande tillgänglighetsöverväganden med vissa problem | Begränsad uppmärksamhet på tillgänglighetskrav |

## Tips för framgång

> 💡 **Designtips**: Börja med subtila förändringar och bygg upp till mer dramatiska stylingar. Små förbättringar i typografi och avstånd har ofta stor påverkan på upplevd kvalitet.

**Bästa praxis att följa:**
- **Testa** ditt tillägg i både ljusa och mörka webbläsarteman
- **Använd** relativa enheter (em, rem) för bättre skalbarhet
- **Upprätthåll** konsekvent avstånd med hjälp av CSS-anpassade egenskaper
- **Fundera över** hur din design ser ut för användare med olika visuella behov
- **Validera** din CSS för att säkerställa att den följer korrekt syntax

> ⚠️ **Vanligt misstag**: Offra inte användbarhet för visuell attraktionskraft. Ditt tillägg ska vara både vackert och funktionellt.

**Kom ihåg att:**
- **Hålla** viktig information lättläst
- **Säkerställa** att knappar och interaktiva element är enkla att klicka på
- **Upprätthålla** tydlig visuell feedback för användaråtgärder
- **Testa** din design med verklig data, inte bara platshållartext

Lycka till med att skapa ett webbläsartillägg som är både funktionellt och visuellt imponerande!

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.