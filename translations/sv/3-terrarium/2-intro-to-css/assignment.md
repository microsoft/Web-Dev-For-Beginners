<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2025-10-23T21:39:30+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "sv"
}
-->
# CSS-omstruktureringsuppgift

## Syfte

Omvandla ditt terrariumprojekt för att använda moderna CSS-layouttekniker! Omstrukturera den nuvarande metoden med absolut positionering och implementera **Flexbox** eller **CSS Grid** för en mer lättunderhållen och responsiv design. Denna uppgift utmanar dig att tillämpa moderna CSS-standarder samtidigt som du behåller terrariets visuella attraktionskraft.

Att förstå när och hur man använder olika layoutmetoder är en viktig färdighet inom modern webbutveckling. Denna övning bygger en bro mellan traditionella positioneringsmetoder och moderna CSS-layoutsystem.

## Uppgiftsinstruktioner

### Fas 1: Analys och planering
1. **Granska din nuvarande terrariumkod** - Identifiera vilka element som för närvarande använder absolut positionering
2. **Välj din layoutmetod** - Bestäm om Flexbox eller CSS Grid passar bäst för dina designmål
3. **Skissa din nya layoutstruktur** - Planera hur behållare och plantelement ska organiseras

### Fas 2: Implementering
1. **Skapa en ny version** av ditt terrariumprojekt i en separat mapp
2. **Uppdatera HTML-strukturen** vid behov för att stödja din valda layoutmetod
3. **Omstrukturera CSS** för att använda Flexbox eller CSS Grid istället för absolut positionering
4. **Behåll visuell konsekvens** - Se till att dina växter och terrariumglasburk visas på samma positioner
5. **Implementera responsivt beteende** - Din layout ska anpassa sig smidigt till olika skärmstorlekar

### Fas 3: Testning och dokumentation
1. **Testa i olika webbläsare** - Kontrollera att din design fungerar i Chrome, Firefox, Edge och Safari
2. **Responsiv testning** - Kontrollera din layout på mobil, surfplatta och skrivbordsskärmar
3. **Dokumentation** - Lägg till kommentarer i din CSS som förklarar dina layoutval
4. **Skärmdumpar** - Ta bilder av ditt terrarium i olika webbläsare och skärmstorlekar

## Tekniska krav

### Layoutimplementering
- **Välj EN**: Implementera antingen Flexbox ELLER CSS Grid (inte båda för samma element)
- **Responsiv design**: Använd relativa enheter (`rem`, `em`, `%`, `vw`, `vh`) istället för fasta pixlar
- **Tillgänglighet**: Behåll korrekt semantisk HTML-struktur och alt-text
- **Kodkvalitet**: Använd konsekventa namngivningskonventioner och organisera CSS logiskt

### Moderna CSS-funktioner att inkludera
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

### Webbläsarstödskrav
- **Chrome/Edge**: De senaste 2 versionerna
- **Firefox**: De senaste 2 versionerna  
- **Safari**: De senaste 2 versionerna
- **Mobilwebbläsare**: iOS Safari, Chrome Mobile

## Leveranser

1. **Uppdaterad HTML-fil** med förbättrad semantisk struktur
2. **Omstrukturerad CSS-fil** som använder moderna layouttekniker
3. **Samling av skärmdumpar** som visar kompatibilitet mellan webbläsare:
   - Skrivbordsvy (1920x1080)
   - Surfplattevy (768x1024) 
   - Mobilvy (375x667)
   - Minst 2 olika webbläsare
4. **README.md-fil** som dokumenterar:
   - Ditt layoutval (Flexbox vs Grid) och motivering
   - Utmaningar som uppstod under omstruktureringen
   - Anteckningar om webbläsarkompatibilitet
   - Instruktioner för att köra din kod

## Bedömningskriterier

| Kriterier | Exemplariskt (4) | Kompetent (3) | Under utveckling (2) | Början (1) |
|-----------|------------------|----------------|-----------------------|------------|
| **Layoutimplementering** | Mästerlig användning av Flexbox/Grid med avancerade funktioner; fullt responsiv | Korrekt implementering med bra responsivt beteende | Grundläggande implementering med mindre responsiva problem | Ofullständig eller felaktig layoutimplementering |
| **Kodkvalitet** | Ren, välorganiserad CSS med meningsfulla kommentarer och konsekvent namngivning | Bra organisation med några kommentarer | Tillräcklig organisation med minimala kommentarer | Dålig organisation; svår att förstå |
| **Kompatibilitet mellan webbläsare** | Perfekt konsekvens i alla krävs webbläsare med skärmdumpar | Bra kompatibilitet med mindre skillnader dokumenterade | Vissa kompatibilitetsproblem som inte bryter funktionaliteten | Stora kompatibilitetsproblem eller saknad testning |
| **Responsiv design** | Exceptionellt mobilförst-tänk med smidiga brytpunkter | Bra responsivt beteende med lämpliga brytpunkter | Grundläggande responsiva funktioner med vissa layoutproblem | Begränsat eller trasigt responsivt beteende |
| **Dokumentation** | Omfattande README med detaljerade förklaringar och insikter | Bra dokumentation som täcker alla nödvändiga element | Grundläggande dokumentation med minimala förklaringar | Ofullständig eller saknad dokumentation |

## Hjälpsamma resurser

### Guider för layoutmetoder
- 📖 [En komplett guide till Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [En komplett guide till CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Välj rätt verktyg](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Verktyg för webbläsartestning
- 🛠️ [Webbläsarens utvecklingsverktyg för responsivt läge](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Funktionstöd](https://caniuse.com/)
- 🛠️ [BrowserStack - Testning mellan webbläsare](https://www.browserstack.com/)

### Verktyg för kodkvalitet
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bonusutmaningar

🌟 **Avancerade layouter**: Implementera både Flexbox OCH Grid i olika delar av din design  
🌟 **Integrering av animationer**: Lägg till CSS-övergångar eller animationer som fungerar med din nya layout  
🌟 **Mörkt läge**: Implementera en CSS-egenskapsbaserad temaväxlare  
🌟 **Container Queries**: Använd moderna containerfrågetekniker för komponentnivåns responsivitet  

> 💡 **Kom ihåg**: Målet är inte bara att få det att fungera, utan att förstå VARFÖR din valda layoutmetod är den bästa lösningen för just denna designutmaning!

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.