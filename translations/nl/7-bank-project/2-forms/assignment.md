# Style Je Bank App met Moderne CSS

## Projectoverzicht

Transformeer je functionele bankapplicatie in een visueel aantrekkelijke, professioneel ogende webapp met moderne CSS-technieken. Je creëert een samenhangend ontwerp dat de gebruikerservaring verbetert, terwijl je toegankelijkheid en principes van responsief design behoudt.

Deze opdracht daagt je uit om hedendaagse webdesignpatronen toe te passen, een consistente visuele identiteit te implementeren en een interface te creëren die gebruikers zowel aantrekkelijk als intuïtief vinden om te navigeren.

## Instructies

### Stap 1: Stel je stylesheet in

**Maak je CSS-basis:**

1. **Maak** een nieuw bestand genaamd `styles.css` in de hoofdmap van je project.
2. **Link** de stylesheet in je `index.html`-bestand:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Begin** met een CSS-reset en moderne standaarden:
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


### Stap 2: Vereisten voor het ontwerp

**Implementeer deze essentiële ontwerpelementen:**

#### Kleurenpalet
- **Primaire kleur**: Kies een professionele kleur voor knoppen en highlights.
- **Secundaire kleur**: Een complementaire kleur voor accenten en secundaire acties.
- **Neutrale kleuren**: Grijstinten voor tekst, randen en achtergronden.
- **Succes-/foutkleuren**: Groen voor successtatussen, rood voor fouten.

#### Typografie
- **Kopteksthiërarchie**: Duidelijk onderscheid tussen H1-, H2- en H3-elementen.
- **Bodytekst**: Leesbare lettergrootte (minimaal 16px) en een geschikte regelhoogte.
- **Formulierlabels**: Duidelijke, toegankelijke tekststijl.

#### Layout en afstand
- **Consistente afstand**: Gebruik een afstandsschaal (8px, 16px, 24px, 32px).
- **Gridsysteem**: Georganiseerde layout voor formulieren en inhoudssecties.
- **Responsief design**: Mobile-first aanpak met breakpoints.

### Stap 3: Componentstyling

**Stijl deze specifieke componenten:**

#### Formulieren
- **Invoervelden**: Professionele randen, focusstaten en validatiestijlen.
- **Knoppen**: Hover-effecten, uitgeschakelde staten en laadindicatoren.
- **Labels**: Duidelijke positionering en indicatoren voor verplichte velden.
- **Foutmeldingen**: Zichtbare foutstijlen en behulpzame meldingen.

#### Navigatie
- **Header**: Schone, merkgebonden navigatiezone.
- **Links**: Duidelijke hoverstaten en actieve indicatoren.
- **Logo/Titel**: Onderscheidend merkelement.

#### Inhoudsgebieden
- **Secties**: Duidelijke visuele scheiding tussen verschillende gebieden.
- **Kaarten**: Als je kaartgebaseerde layouts gebruikt, voeg schaduwen en randen toe.
- **Achtergronden**: Passend gebruik van witruimte en subtiele achtergronden.

### Stap 4: Verbeterde functies (optioneel)

**Overweeg het implementeren van deze geavanceerde functies:**
- **Donkere modus**: Schakel tussen lichte en donkere thema's.
- **Animaties**: Subtiele overgangen en micro-interacties.
- **Laadstaten**: Visuele feedback tijdens het indienen van formulieren.
- **Responsieve afbeeldingen**: Geoptimaliseerde afbeeldingen voor verschillende schermformaten.

## Ontwerpinspiratie

**Kenmerken van moderne bankapps:**
- **Strak, minimalistisch ontwerp** met veel witruimte.
- **Professionele kleurenschema's** (blauw, groen of verfijnde neutrale tinten).
- **Duidelijke visuele hiërarchie** met prominente call-to-action knoppen.
- **Toegankelijke contrastverhoudingen** die voldoen aan WCAG-richtlijnen.
- **Mobiel-responsieve layouts** die op alle apparaten werken.

## Technische vereisten

### CSS-organisatie
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


### Toegankelijkheidsvereisten
- **Kleurcontrast**: Zorg voor een verhouding van minimaal 4.5:1 voor normale tekst.
- **Focusindicatoren**: Zichtbare focusstaten voor toetsenbordnavigatie.
- **Formulierlabels**: Correct gekoppeld aan invoervelden.
- **Responsief design**: Bruikbaar op schermen van 320px tot 1920px breed.

## Evaluatierubric

| Criteria | Uitmuntend (A) | Voldoende (B) | Ontwikkelend (C) | Verbetering nodig (F) |
|----------|----------------|---------------|-------------------|-----------------------|
| **Ontwerpsysteem** | Implementeert een uitgebreid ontwerpsysteem met consistente kleuren, typografie en afstand overal | Gebruikt consistente styling met duidelijke ontwerpprincipes en goede visuele hiërarchie | Basisstyling toegepast met enkele consistentieproblemen of ontbrekende ontwerpelementen | Minimale styling met inconsistente of conflicterende ontwerpkeuzes |
| **Gebruikerservaring** | Creëert een intuïtieve, professionele interface met uitstekende bruikbaarheid en visuele aantrekkingskracht | Biedt een goede gebruikerservaring met duidelijke navigatie en leesbare inhoud | Basisbruikbaarheid met enkele verbeterpunten voor UX | Slechte bruikbaarheid, moeilijk te navigeren of te lezen |
| **Technische implementatie** | Gebruikt moderne CSS-technieken, georganiseerde code en volgt best practices | Implementeert CSS effectief met goede organisatie en passende technieken | CSS werkt correct maar kan gebrek aan organisatie of moderne benaderingen vertonen | Slechte CSS-implementatie met technische problemen of browsercompatibiliteitsproblemen |
| **Responsief design** | Volledig responsief ontwerp dat prachtig werkt op alle apparaatformaten | Goed responsief gedrag met kleine problemen op sommige schermformaten | Basisresponsieve implementatie met enkele layoutproblemen | Niet responsief of significante problemen op mobiele apparaten |
| **Toegankelijkheid** | Voldoet aan WCAG-richtlijnen met uitstekende toetsenbordnavigatie en ondersteuning voor schermlezers | Goede toegankelijkheidspraktijken met correct contrast en focusindicatoren | Basis toegankelijkheidsoverwegingen met enkele ontbrekende elementen | Slechte toegankelijkheid, moeilijk voor gebruikers met een beperking |

## Richtlijnen voor inzending

**Voeg bij je inzending:**
- **styles.css**: Je complete stylesheet.
- **Aangepaste HTML**: Eventuele wijzigingen die je hebt aangebracht in de HTML.
- **Screenshots**: Afbeeldingen die je ontwerp op desktop en mobiel laten zien.
- **README**: Korte beschrijving van je ontwerpkeuzes en kleurenpalet.

**Bonuspunten voor:**
- **CSS custom properties** voor onderhoudbare thema's.
- **Geavanceerde CSS-functies** zoals Grid, Flexbox of CSS-animaties.
- **Prestatieoverwegingen** zoals geoptimaliseerde CSS en minimale bestandsgrootte.
- **Cross-browser testen** om compatibiliteit op verschillende browsers te garanderen.

> 💡 **Pro Tip**: Begin eerst met het ontwerpen voor mobiele apparaten en breid daarna uit voor grotere schermen. Deze mobile-first aanpak zorgt ervoor dat je app goed werkt op alle apparaten en voldoet aan moderne webontwikkelingsstandaarden.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.