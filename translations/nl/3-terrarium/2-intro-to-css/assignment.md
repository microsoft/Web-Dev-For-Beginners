# CSS Refactoring Opdracht

## Doelstelling

Transformeer je terrariumproject om moderne CSS-layouttechnieken te gebruiken! Refactor de huidige aanpak met absolute positionering en implementeer **Flexbox** of **CSS Grid** voor een beter onderhoudbare, responsieve vormgeving. Deze opdracht daagt je uit om moderne CSS-standaarden toe te passen terwijl je de visuele aantrekkingskracht van je terrarium behoudt.

Begrijpen wanneer en hoe je verschillende layoutmethoden gebruikt, is een essentiële vaardigheid voor moderne webontwikkeling. Deze oefening vormt een brug tussen traditionele positioneringstechnieken en hedendaagse CSS-layoutsystemen.

## Opdrachtinstructies

### Fase 1: Analyse en Planning
1. **Bekijk je huidige terrariumcode** - Identificeer welke elementen momenteel absolute positionering gebruiken.
2. **Kies je layoutmethode** - Bepaal of Flexbox of CSS Grid beter past bij je ontwerpdoelen.
3. **Schets je nieuwe layoutstructuur** - Plan hoe containers en plantelementen georganiseerd zullen worden.

### Fase 2: Implementatie
1. **Maak een nieuwe versie** van je terrariumproject in een aparte map.
2. **Werk de HTML-structuur bij** indien nodig om je gekozen layoutmethode te ondersteunen.
3. **Refactor de CSS** om Flexbox of CSS Grid te gebruiken in plaats van absolute positionering.
4. **Behoud visuele consistentie** - Zorg ervoor dat je planten en terrariumfles op dezelfde posities blijven.
5. **Implementeer responsief gedrag** - Je layout moet zich soepel aanpassen aan verschillende schermformaten.

### Fase 3: Testen en Documentatie
1. **Cross-browser testen** - Controleer of je ontwerp werkt in Chrome, Firefox, Edge en Safari.
2. **Responsief testen** - Test je layout op mobiele, tablet- en desktopformaten.
3. **Documentatie** - Voeg opmerkingen toe aan je CSS waarin je je layoutkeuzes uitlegt.
4. **Screenshots** - Maak screenshots van je terrarium in verschillende browsers en schermformaten.

## Technische Vereisten

### Layoutimplementatie
- **Kies ÉÉN**: Implementeer ofwel Flexbox OF CSS Grid (niet beide voor dezelfde elementen).
- **Responsief ontwerp**: Gebruik relatieve eenheden (`rem`, `em`, `%`, `vw`, `vh`) in plaats van vaste pixels.
- **Toegankelijkheid**: Behoud een correcte semantische HTML-structuur en alt-tekst.
- **Codekwaliteit**: Gebruik consistente naamgevingsconventies en organiseer CSS logisch.

### Moderne CSS-functies om te gebruiken
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

### Browserondersteuningsvereisten
- **Chrome/Edge**: Laatste 2 versies
- **Firefox**: Laatste 2 versies  
- **Safari**: Laatste 2 versies
- **Mobiele browsers**: iOS Safari, Chrome Mobile

## Op te leveren

1. **Bijgewerkte HTML-bestand** met verbeterde semantische structuur.
2. **Gerefactored CSS-bestand** met moderne layouttechnieken.
3. **Screenshotverzameling** die cross-browser compatibiliteit toont:
   - Desktopweergave (1920x1080)
   - Tabletweergave (768x1024) 
   - Mobiele weergave (375x667)
   - Minimaal 2 verschillende browsers
4. **README.md-bestand** met documentatie:
   - Je keuze voor layout (Flexbox vs Grid) en de reden daarvoor
   - Uitdagingen tijdens het refactoren
   - Opmerkingen over browsercompatibiliteit
   - Instructies voor het uitvoeren van je code

## Beoordelingsrubriek

| Criteria | Uitmuntend (4) | Voldoende (3) | Ontwikkelend (2) | Beginnend (1) |
|----------|----------------|---------------|------------------|---------------|
| **Layoutimplementatie** | Meesterlijk gebruik van Flexbox/Grid met geavanceerde functies; volledig responsief | Correcte implementatie met goede responsieve werking | Basisimplementatie met kleine responsieve problemen | Onvolledige of incorrecte layoutimplementatie |
| **Codekwaliteit** | Schone, goed georganiseerde CSS met betekenisvolle opmerkingen en consistente naamgeving | Goede organisatie met enkele opmerkingen | Adequate organisatie met minimale opmerkingen | Slechte organisatie; moeilijk te begrijpen |
| **Cross-browser compatibiliteit** | Perfecte consistentie in alle vereiste browsers met screenshots | Goede compatibiliteit met kleine gedocumenteerde verschillen | Enkele compatibiliteitsproblemen die de functionaliteit niet breken | Grote compatibiliteitsproblemen of ontbrekende tests |
| **Responsief ontwerp** | Uitzonderlijke mobile-first aanpak met vloeiende breekpunten | Goede responsieve werking met geschikte breekpunten | Basis responsieve functies met enkele layoutproblemen | Beperkt of gebroken responsief gedrag |
| **Documentatie** | Uitgebreide README met gedetailleerde uitleg en inzichten | Goede documentatie die alle vereiste elementen behandelt | Basisdocumentatie met minimale uitleg | Onvolledige of ontbrekende documentatie |

## Nuttige Bronnen

### Layoutmethoden Gidsen
- 📖 [Een complete gids voor Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Een complete gids voor CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Kies het juiste hulpmiddel](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Browser Testtools
- 🛠️ [Browser DevTools Responsieve Modus](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Functieondersteuning](https://caniuse.com/)
- 🛠️ [BrowserStack - Cross-browser testen](https://www.browserstack.com/)

### Codekwaliteit Tools
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bonusuitdagingen

🌟 **Geavanceerde layouts**: Implementeer zowel Flexbox ALS Grid in verschillende delen van je ontwerp.  
🌟 **Animatie-integratie**: Voeg CSS-transities of animaties toe die werken met je nieuwe layout.  
🌟 **Donkere modus**: Implementeer een CSS-themawisselaar op basis van aangepaste eigenschappen.  
🌟 **Containerqueries**: Gebruik moderne containerquerytechnieken voor componentniveau-responsiviteit.

> 💡 **Onthoud**: Het doel is niet alleen om het te laten werken, maar om te begrijpen WAAROM jouw gekozen layoutmethode de beste oplossing is voor deze specifieke ontwerpuitdaging!

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.