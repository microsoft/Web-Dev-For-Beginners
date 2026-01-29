# Opdracht: Restyle je browserextensie

## Overzicht

Nu je de HTML-structuur voor je browserextensie over de ecologische voetafdruk hebt gebouwd, is het tijd om deze visueel aantrekkelijk en gebruiksvriendelijk te maken. Een goed ontwerp verbetert de gebruikerservaring en maakt je extensie professioneler en boeiender.

Je extensie heeft al een basis CSS-styling, maar deze opdracht daagt je uit om een unieke visuele identiteit te creëren die jouw persoonlijke stijl weerspiegelt, terwijl je uitstekende bruikbaarheid behoudt.

## Instructies

### Deel 1: Analyseer het huidige ontwerp

Voordat je wijzigingen aanbrengt, bekijk je de bestaande CSS-structuur:

1. **Vind** de CSS-bestanden in je extensieproject
2. **Bekijk** de huidige stylingaanpak en het kleurenschema
3. **Identificeer** verbeterpunten in de lay-out, typografie en visuele hiërarchie
4. **Overweeg** hoe het ontwerp de gebruikersdoelen ondersteunt (gemakkelijk formulieren invullen en duidelijke gegevensweergave)

### Deel 2: Ontwerp je eigen styling

Creëer een samenhangend visueel ontwerp dat het volgende omvat:

**Kleurenschema:**
- Kies een primaire kleurenpalet dat milieuthema's weerspiegelt
- Zorg voor voldoende contrast voor toegankelijkheid (gebruik tools zoals de contrastchecker van WebAIM)
- Denk na over hoe kleuren eruitzien in verschillende browserthema's

**Typografie:**
- Kies goed leesbare lettertypen die geschikt zijn voor kleine extensieformaten
- Stel een duidelijke hiërarchie op met passende lettergroottes en -diktes
- Zorg ervoor dat tekst leesbaar blijft in zowel lichte als donkere browserthema's

**Lay-out en ruimtegebruik:**
- Verbeter de visuele organisatie van formulieronderdelen en gegevensweergave
- Voeg passende marges en opvulling toe voor betere leesbaarheid
- Pas principes van responsief ontwerp toe voor verschillende schermformaten

### Deel 3: Implementeer je ontwerp

Pas de CSS-bestanden aan om je ontwerp te implementeren:

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

**Belangrijke onderdelen om te stylen:**
- **Formulieronderdelen**: Invoervelden, labels en verzendknop
- **Resultatenweergave**: Gegevenscontainer, tekststyling en laadstatus
- **Interactieve elementen**: Hover-effecten, knopstatussen en overgangen
- **Algemene lay-out**: Containerafstand, achtergrondkleuren en visuele hiërarchie

### Deel 4: Test en verfijn

1. **Bouw** je extensie met `npm run build`
2. **Laad** de bijgewerkte extensie in je browser
3. **Test** alle visuele staten (formuliervelden, laden, resultatenweergave, fouten)
4. **Controleer** de toegankelijkheid met ontwikkelaarstools van de browser
5. **Verfijn** je stijlen op basis van daadwerkelijk gebruik

## Creatieve uitdagingen

### Basisniveau
- Werk kleuren en lettertypen bij om een samenhangend thema te creëren
- Verbeter de ruimte en uitlijning in de interface
- Voeg subtiele hover-effecten toe aan interactieve elementen

### Gemiddeld niveau
- Ontwerp aangepaste pictogrammen of grafische elementen voor je extensie
- Implementeer vloeiende overgangen tussen verschillende staten
- Maak een unieke laadanimatie voor API-aanroepen

### Geavanceerd niveau
- Ontwerp meerdere thema-opties (licht/donker/hoog contrast)
- Implementeer responsief ontwerp voor verschillende browservenstergroottes
- Voeg micro-interacties toe die de gebruikerservaring verbeteren

## Richtlijnen voor inzending

Je voltooide opdracht moet bevatten:

- **Aangepaste CSS-bestanden** met jouw eigen styling
- **Screenshots** die je extensie in verschillende staten tonen (formulier, laden, resultaten)
- **Korte beschrijving** (2-3 zinnen) waarin je je ontwerpkeuzes uitlegt en hoe deze de gebruikerservaring verbeteren

## Beoordelingscriteria

| Criteria | Uitmuntend (4) | Voldoende (3) | Ontwikkelend (2) | Beginnend (1) |
|----------|----------------|---------------|-------------------|---------------|
| **Visueel ontwerp** | Creatief, samenhangend ontwerp dat de bruikbaarheid verbetert en sterke ontwerpprincipes weerspiegelt | Goede ontwerpkeuzes met consistente styling en duidelijke visuele hiërarchie | Basisontwerpverbeteringen met enkele inconsistenties | Minimale stijlwijzigingen of inconsistent ontwerp |
| **Functionaliteit** | Alle stijlen werken perfect in verschillende staten en browseromgevingen | Stijlen werken goed met kleine problemen in randgevallen | Meeste stijlen functioneel met enkele weergaveproblemen | Significante stijlproblemen die de bruikbaarheid beïnvloeden |
| **Codekwaliteit** | Schone, goed georganiseerde CSS met betekenisvolle klassenamen en efficiënte selectors | Goede CSS-structuur met passend gebruik van selectors en eigenschappen | Acceptabele CSS met enkele organisatieproblemen | Slechte CSS-structuur of te complexe styling |
| **Toegankelijkheid** | Uitstekend kleurcontrast, leesbare lettertypen en aandacht voor gebruikers met een beperking | Goede toegankelijkheidspraktijken met kleine verbeterpunten | Basisoverwegingen voor toegankelijkheid met enkele problemen | Beperkte aandacht voor toegankelijkheidseisen |

## Tips voor succes

> 💡 **Ontwerptip**: Begin met subtiele wijzigingen en werk toe naar meer opvallende styling. Kleine verbeteringen in typografie en ruimtegebruik hebben vaak een grote impact op de waargenomen kwaliteit.

**Beste praktijken om te volgen:**
- **Test** je extensie in zowel lichte als donkere browserthema's
- **Gebruik** relatieve eenheden (em, rem) voor betere schaalbaarheid
- **Behoud** consistente ruimtegebruik met CSS-custom properties
- **Overweeg** hoe je ontwerp eruitziet voor gebruikers met verschillende visuele behoeften
- **Valideer** je CSS om ervoor te zorgen dat het de juiste syntaxis volgt

> ⚠️ **Veelgemaakte fout**: Lever geen bruikbaarheid in voor visuele aantrekkingskracht. Je extensie moet zowel mooi als functioneel zijn.

**Onthoud:**
- **Houd** belangrijke informatie gemakkelijk leesbaar
- **Zorg ervoor** dat knoppen en interactieve elementen eenvoudig te klikken zijn
- **Behoud** duidelijke visuele feedback voor gebruikersacties
- **Test** je ontwerp met echte gegevens, niet alleen met tijdelijke tekst

Veel succes met het creëren van een browserextensie die zowel functioneel als visueel indrukwekkend is!

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.