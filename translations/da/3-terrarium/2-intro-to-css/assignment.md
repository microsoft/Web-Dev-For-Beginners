# CSS Refaktorering Opgave

## Formål

Transformér dit terrarieprojekt til at bruge moderne CSS-layoutteknikker! Refaktorer den nuværende tilgang med absolut positionering og implementér **Flexbox** eller **CSS Grid** for et mere vedligeholdelsesvenligt og responsivt design. Denne opgave udfordrer dig til at anvende moderne CSS-standarder, samtidig med at du bevarer terrariets visuelle udtryk.

At forstå hvornår og hvordan man bruger forskellige layoutmetoder er en afgørende færdighed inden for moderne webudvikling. Denne øvelse bygger bro mellem traditionelle positioneringsteknikker og nutidens CSS-layoutsystemer.

## Opgaveinstruktioner

### Fase 1: Analyse og Planlægning
1. **Gennemgå din nuværende terrariekode** - Identificér hvilke elementer der i øjeblikket bruger absolut positionering
2. **Vælg din layoutmetode** - Beslut om Flexbox eller CSS Grid bedst passer til dine designmål
3. **Skitsér din nye layoutstruktur** - Planlæg hvordan containere og planteelementer skal organiseres

### Fase 2: Implementering
1. **Opret en ny version** af dit terrarieprojekt i en separat mappe
2. **Opdater HTML-strukturen** efter behov for at understøtte din valgte layoutmetode
3. **Refaktorer CSS** til at bruge Flexbox eller CSS Grid i stedet for absolut positionering
4. **Bevar visuel konsistens** - Sørg for, at dine planter og terrarieglas fremstår på samme positioner
5. **Implementér responsiv adfærd** - Dit layout skal tilpasse sig elegant til forskellige skærmstørrelser

### Fase 3: Test og Dokumentation
1. **Tværbrowser-test** - Bekræft, at dit design fungerer i Chrome, Firefox, Edge og Safari
2. **Responsiv test** - Tjek dit layout på mobil-, tablet- og desktopskærmstørrelser
3. **Dokumentation** - Tilføj kommentarer til din CSS, der forklarer dine layoutvalg
4. **Skærmbilleder** - Tag billeder af dit terrarie i forskellige browsere og skærmstørrelser

## Tekniske Krav

### Layoutimplementering
- **Vælg ÉN**: Implementér enten Flexbox ELLER CSS Grid (ikke begge for de samme elementer)
- **Responsivt Design**: Brug relative enheder (`rem`, `em`, `%`, `vw`, `vh`) i stedet for faste pixels
- **Tilgængelighed**: Bevar korrekt semantisk HTML-struktur og alt-tekst
- **Kodekvalitet**: Brug konsistente navngivningskonventioner og organiser CSS logisk

### Moderne CSS-funktioner, der skal inkluderes
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

### Browserstøttekrav
- **Chrome/Edge**: Seneste 2 versioner
- **Firefox**: Seneste 2 versioner  
- **Safari**: Seneste 2 versioner
- **Mobilbrowsere**: iOS Safari, Chrome Mobile

## Leverancer

1. **Opdateret HTML-fil** med forbedret semantisk struktur
2. **Refaktoreret CSS-fil** med moderne layoutteknikker
3. **Samling af skærmbilleder** der viser tværbrowser-kompatibilitet:
   - Desktopvisning (1920x1080)
   - Tabletvisning (768x1024) 
   - Mobilvisning (375x667)
   - Mindst 2 forskellige browsere
4. **README.md-fil** der dokumenterer:
   - Dit layoutvalg (Flexbox vs Grid) og begrundelse
   - Udfordringer under refaktoreringen
   - Noter om browserkompatibilitet
   - Instruktioner til at køre din kode

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Under udvikling (2) | Begynder (1) |
|-----------|-----------------|---------|---------------------|--------------|
| **Layoutimplementering** | Fremragende brug af Flexbox/Grid med avancerede funktioner; fuldt responsivt | Korrekt implementering med god responsiv adfærd | Grundlæggende implementering med mindre responsiv problemer | Ufuldstændig eller forkert layoutimplementering |
| **Kodekvalitet** | Ren, velorganiseret CSS med meningsfulde kommentarer og konsistent navngivning | God organisering med nogle kommentarer | Tilstrækkelig organisering med få kommentarer | Dårlig organisering; svær at forstå |
| **Tværbrowser-kompatibilitet** | Perfekt konsistens på alle krævede browsere med skærmbilleder | God kompatibilitet med mindre forskelle dokumenteret | Nogle kompatibilitetsproblemer, der ikke bryder funktionaliteten | Store kompatibilitetsproblemer eller manglende test |
| **Responsivt Design** | Eksemplarisk mobil-først tilgang med glidende breakpoints | God responsiv adfærd med passende breakpoints | Grundlæggende responsive funktioner med nogle layoutproblemer | Begrænset eller ødelagt responsiv adfærd |
| **Dokumentation** | Omfattende README med detaljerede forklaringer og indsigt | God dokumentation, der dækker alle nødvendige elementer | Grundlæggende dokumentation med få forklaringer | Ufuldstændig eller manglende dokumentation |

## Hjælpsomme Ressourcer

### Layoutmetode Guides
- 📖 [En komplet guide til Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [En komplet guide til CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Vælg det rigtige værktøj](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

### Browser Testværktøjer
- 🛠️ [Browser DevTools Responsiv Tilstand](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Funktionel Støtte](https://caniuse.com/)
- 🛠️ [BrowserStack - Tværbrowser Test](https://www.browserstack.com/)

### Værktøjer til Kodekvalitet
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Kontrastkontrol](https://webaim.org/resources/contrastchecker/)

## Ekstra Udfordringer

🌟 **Avancerede Layouts**: Implementér både Flexbox OG Grid i forskellige dele af dit design  
🌟 **Animation Integration**: Tilføj CSS-overgange eller animationer, der fungerer med dit nye layout  
🌟 **Mørk tilstand**: Implementér en temaomskifter baseret på CSS-variabler  
🌟 **Container Queries**: Brug moderne container query-teknikker til komponentniveau-responsivitet  

> 💡 **Husk**: Målet er ikke bare at få det til at fungere, men at forstå HVORFOR din valgte layoutmetode er den bedste løsning til netop denne designudfordring!

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.