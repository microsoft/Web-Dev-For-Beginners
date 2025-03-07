# Toegankelijke webpagina's maken

![Alles over toegankelijkheid](/sketchnotes/webdev101-a11y.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voorafgaand aan de lezing
[Quiz voorafgaand aan de lezing](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> De kracht van het web zit in zijn universaliteit. Toegang voor iedereen, ongeacht hun handicap, is een essentieel aspect.
>
> \- Sir Timothy Berners-Lee, W3C-directeur en uitvinder van het World Wide Web

Deze quote benadrukt perfect het belang van het creëren van toegankelijke websites. Een applicatie die niet voor iedereen toegankelijk is, is per definitie uitsluiting. Als webontwikkelaars moeten we altijd rekening houden met toegankelijkheid. Door deze focus vanaf het begin te hebben, bent u goed op weg om ervoor te zorgen dat iedereen toegang heeft tot de pagina's die u maakt. In deze les leert u over de tools die u kunnen helpen ervoor te zorgen dat uw webitems toegankelijk zijn en hoe u kunt bouwen met toegankelijkheid in gedachten. 

## Tools om te gebruiken

### Schermlezers

Een van de bekendste toegankelijkheidstools zijn schermlezers.

[Schermlezers](https://nl.wikipedia.org/wiki/Schermlezer) zijn veelgebruikte clients voor mensen met een visuele beperking. Omdat we er tijd voor besteden om ervoor te zorgen dat een browser de informatie die we willen delen correct overbrengt, moeten we er ook voor zorgen dat een schermlezer hetzelfde doet.

In de basis leest een schermlezer een pagina hoorbaar van boven naar beneden. Als uw pagina alleen uit tekst bestaat, zal de lezer de informatie op dezelfde manier overbrengen naar een browser. Webpagina's zijn natuurlijk zelden louter tekst; ze bevatten links, afbeeldingen, kleur en andere visuele componenten. Er moet voor worden gezorgd dat deze informatie correct wordt gelezen door een schermlezer.

Elke webontwikkelaar moet vertrouwd raken met een schermlezer. Zoals hierboven aangegeven, is het de client die uw gebruikers zullen gebruiken. Net zoals u bekend bent met hoe een browser werkt, moet u leren hoe een schermlezer werkt. Gelukkig zijn schermlezers in de meeste besturingssystemen ingebouwd.

Sommige browsers hebben ook ingebouwde tools en extensies die tekst hardop kunnen voorlezen of zelfs enkele basisnavigatiefuncties bieden, zoals [deze op toegankelijkheid gerichte Edge-browserhulpmiddelen](https://support.microsoft.com/nl-nl/microsoft-edge/toegankelijkheidsfuncties-in-microsoft-edge-4c696192-338e-9465-b2cd-bd9b698ad19a). Dit zijn ook belangrijke toegankelijkheidstools, maar ze werken heel anders dan schermlezers en ze mogen niet worden aangezien voor testtools voor schermlezers.

✅ Probeer een schermlezer en browsertekstlezer. Op Windows is [Narrator](https://support.microsoft.com/nl-nl/windows/volledige-handleiding-voor-verteller-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) standaard inbegrepen, en [JAWS](https://webaim.org/articles/jaws/) en [NVDA](https://www.nvaccess.org/about-nvda/) kunnen ook worden geïnstalleerd. Op macOS en iOS is [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) standaard geïnstalleerd.

### Zoom

Een ander hulpmiddel dat vaak wordt gebruikt door mensen met een visuele beperking, is zoomen. De meest basale manier van zoomen is statische zoom, bestuurd via `Control + plusteken (+)` of door de schermresolutie te verlagen. Dit type zoom zorgt ervoor dat het formaat van de hele pagina wordt aangepast, dus het gebruik van [responsive design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) is belangrijk om een goede gebruikerservaring te bieden bij verhoogde zoomniveaus.

Een ander type zoom is afhankelijk van gespecialiseerde software om een deel van het scherm te vergroten en te pannen, net zoals bij het gebruik van een echt vergrootglas. Op Windows is [Magnifier](https://support.microsoft.com/nl-nl/windows/vergrootglas-gebruiken-voor-een-betere-zichtbaarheid-op-het-scherm-414948ba-8b1c-d3bd-8615-0e5e32204198) ingebouwd en [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) is vergrotingssoftware van derden met meer functies en een groter gebruikersbestand. Zowel macOS als iOS hebben ingebouwde vergrotingssoftware genaamd [Zoom](https://www.apple.com/nl/accessibility/vision/).

### Contrast checkers

Kleuren op websites moeten zorgvuldig worden gekozen om tegemoet te komen aan de behoeften van kleurenblinde gebruikers of mensen die moeite hebben met het zien van kleuren met een laag contrast.

✅ Test een website die u graag gebruikt voor kleurgebruik met een browserextensie zoals [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US). Wat leer je?

### Lighthouse

In het ontwikkelaarstoolgedeelte van uw browser vindt u de Lighthouse-tool. Deze tool is belangrijk om een eerste beeld te krijgen van de toegankelijkheid (en ook andere analyses) van een website. Hoewel het belangrijk is om niet uitsluitend op Lighthouse te vertrouwen, is een score van 100% erg nuttig als uitgangspunt.

✅ Zoek Lighthouse in het ontwikkelaarstoolpaneel van uw browser en voer een analyse uit op elke site. wat ontdek je?

## Ontwerpen voor toegankelijkheid

Toegankelijkheid is een relatief groot onderwerp. Om u te helpen, zijn er tal van bronnen beschikbaar.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Hoewel we niet elk aspect van het maken van toegankelijke sites kunnen behandelen, staan hieronder enkele van de kernprincipes die u wilt implementeren. Het ontwerpen van een toegankelijke pagina vanaf het begin is **altijd** gemakkelijker dan teruggaan naar een bestaande pagina om deze toegankelijk te maken.

## Goede weergaveprincipes

### Kleur veilige paletten

Mensen zien de wereld op verschillende manieren, inclusief kleuren. Wanneer u een kleurenschema voor uw site selecteert, moet u ervoor zorgen dat het voor iedereen toegankelijk is. Een geweldig [hulpmiddel voor het genereren van kleurenpaletten is Color Safe](http://colorsafe.co/).

✅ Identificeer een website die erg problematisch is in het gebruik van kleur. Waarom?

### Gebruik de juiste HTML

Met CSS en JavaScript is het mogelijk om elk element eruit te laten zien als elk type besturingselement. `<span>` kan worden gebruikt om een `<button>` te maken en `<b>` kan een hyperlink worden. Hoewel dit misschien als gemakkelijker te stylen wordt beschouwd, brengt het niets over op een schermlezer. Gebruik de juiste HTML bij het maken van besturingselementen op een pagina. Als u een hyperlink wilt, gebruik dan `<a>`. Het gebruik van de juiste HTML voor de juiste besturing wordt het gebruik van Semantische HTML genoemd.

✅ Ga naar een website en kijk of de ontwerpers en ontwikkelaars HTML correct gebruiken. Kunt u een button vinden die een link zou moeten zijn? Tip: klik met de rechtermuisknop en kies 'View Page Source' in uw browser om de onderliggende code te bekijken.

### Maak een beschrijvende kophiërarchie

Gebruikers van schermlezers [zijn sterk afhankelijk van koppen](https://webaim.org/projects/screenreadersurvey8/#finding) om informatie te vinden en door een pagina te navigeren. Het schrijven van beschrijvende koptekst en het gebruik van semantische koptags zijn belangrijk voor het maken van een gemakkelijk navigeerbare site voor gebruikers van schermlezers.

### Gebruik goede visuele aanwijzingen

CSS biedt volledige controle over het uiterlijk van elk element op een pagina. U kunt tekstvakken zonder omtreklijn of hyperlinks zonder onderstreping maken. Helaas kan het verwijderen van die aanwijzingen het voor iemand die van hen afhankelijk is, uitdagender maken om het type controle te herkennen.

## Het belang van linktekst

Hyperlinks zijn essentieel voor het navigeren op internet. Als gevolg hiervan kunnen alle gebruikers door uw site navigeren door ervoor te zorgen dat een schermlezer links correct kan lezen.

### Schermlezers en links

Zoals u zou verwachten, lezen schermlezers linktekst op dezelfde manier als andere tekst op de pagina. Met dit in gedachten kan de onderstaande tekst volkomen acceptabel aanvoelen.

> De Dwergpinguïn, ook wel bekend als de sprookjespinguïn, is de kleinste pinguïn ter wereld. [Klik hier](https://nl.wikipedia.org/wiki/Dwergpingu%C3%AFn) voor meer informatie.

> De Dwergpinguïn, ook wel bekend als de sprookjespinguïn, is de kleinste pinguïn ter wereld. Bezoek https://nl.wikipedia.org/wiki/Dwergpingu%C3%AFn voor meer informatie.

> **OPMERKING** Zoals u gaat lezen, moet u **nooit** links maken die er als hierboven uitzien.

Onthoud dat schermlezers een andere interface zijn dan browsers met een andere set functies.

### Het probleem met het gebruik van de URL

Schermlezers lezen de tekst. Als er een URL in de tekst voorkomt, leest de schermlezer de URL. Over het algemeen geeft de URL geen zinvolle informatie over en kan deze vervelend klinken. Mogelijk heeft u dit ondervonden als uw telefoon ooit een sms-bericht met een URL hoorbaar heeft gelezen.

### Het probleem met "klik hier"

Schermlezers hebben ook de mogelijkheid om alleen de hyperlinks op een pagina te lezen, net zoals een ziende een pagina zou scannen op links. Als de linktekst altijd "klik hier" is, hoort de gebruiker alleen "klik hier, klik hier, klik hier, klik hier, klik hier, ..." Alle links zijn nu niet meer van elkaar te onderscheiden.

### Goede linktekst

Een goede linktekst beschrijft in het kort wat er aan de andere kant van de link staat. In het bovenstaande voorbeeld over Dwergpinguïns, is de link naar de Wikipedia-pagina over de soort. De zin *Dwergpinguïns* zou zorgen voor perfecte linktekst, omdat het duidelijk maakt wat iemand zal leren als ze op de link klikken - Dwergpinguïns.

> De [Dwergpinguïn](https://nl.wikipedia.org/wiki/Dwergpingu%C3%AFn), ook wel bekend als de sprookjespinguïn, is de kleinste pinguïn ter wereld.

✅ Surf een paar minuten op internet om pagina's te vinden die obscure koppelingsstrategieën gebruiken. Vergelijk ze met andere, beter gekoppelde sites. Wat leer je?

#### Aantekeningen bij zoekmachines

Als extra bonus om ervoor te zorgen dat uw site voor iedereen toegankelijk is, helpt u zoekmachines ook bij het navigeren op uw site. Zoekmachines gebruiken linktekst om de onderwerpen van pagina's te leren. Het gebruik van goede linkteksten helpt dus iedereen!

### ARIA

Stelt u de volgende pagina voor:

| Product      | beschrijving        | Volgorde        |
| ------------ | ------------------- | --------------- |
| Widget       | [beschrijving]('#') | [Volgorde]('#') |
| Super widget | [beschrijving]('#') | [Volgorde]('#') |

In dit voorbeeld is het zinvol om de tekst van de beschrijving en volgorde te dupliceren voor iemand die een browser gebruikt. Iemand die een schermlezer gebruikt, hoort echter alleen de woorden *beschrijving* en *volgorde* herhaald zonder context.

Om dit soort scenario's te ondersteunen, ondersteunt HTML een set attributen die bekend staan als [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Met deze attributen kunt u aanvullende informatie verstrekken aan schermlezers.

> **OPMERKING**: Zoals veel aspecten van HTML, kan de ondersteuning van browser en schermlezer variëren. De meeste mainline-clients ondersteunen echter ARIA-attributen.

U kunt `aria-label` gebruiken om de link te beschrijven als het formaat van de pagina dat niet toestaat. De beschrijving voor widget kan worden ingesteld als

``` html
<a href="#" aria-label="Widget description">beschrijving</a>
```

✅ Over het algemeen vervangt het gebruik van semantische opmaak zoals hierboven beschreven het gebruik van ARIA, maar soms is er geen semantisch equivalent voor verschillende HTML-widgets. Een goed voorbeeld is een boom. Er is geen HTML-equivalent voor een boomstructuur, dus identificeert u de generieke `<div>` voor dit element met een juiste rol en aria-waarden. De [MDN-documentatie over ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) bevat meer nuttige informatie.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Afbeeldingen

Het spreekt voor zich dat schermlezers niet automatisch kunnen lezen wat er in een afbeelding staat. Ervoor zorgen dat afbeeldingen toegankelijk zijn, kost niet veel werk - daar gaat het bij het `alt`-attribuut om. Alle betekenisvolle afbeeldingen moeten een `alt` hebben om te beschrijven wat ze zijn.
Voor afbeeldingen die puur decoratief zijn, moet het `alt`-attribuut worden ingesteld op een lege tekenreeks: `alt=""`. Hiermee wordt voorkomen dat schermlezers de decoratieve afbeelding onnodig aankondigen.

✅ Zoals u zou verwachten, kunnen zoekmachines ook niet begrijpen wat er in een afbeelding staat. Ze gebruiken ook alt-tekst. Dus nogmaals, ervoor zorgen dat uw pagina toegankelijk is, levert extra bonussen op!

## Het toetsenbord

Sommige gebruikers kunnen geen muis of trackpad gebruiken, maar vertrouwen op toetsenbordinteracties om van het ene element naar het andere te gaan. Het is belangrijk dat uw website uw inhoud in een logische volgorde presenteert, zodat een toetsenbordgebruiker toegang heeft tot elk interactief element terwijl ze door een document bladeren. Als u uw webpagina's bouwt met semantische opmaak en CSS gebruikt om hun visuele lay-out op te maken, moet uw site toetsenbord-navigeerbaar zijn, maar het is belangrijk om dit aspect handmatig te testen. Meer informatie over [strategieën voor toetsenbordnavigatie](https://webaim.org/techniques/keyboard/).

✅ Ga naar een website en probeer er doorheen te navigeren met alleen uw toetsenbord. Wat werkt, wat werkt niet? Waarom?

## Overzicht

Een web dat voor sommigen toegankelijk is, is niet echt een 'world-wide web'. De beste manier om ervoor te zorgen dat de sites die u maakt, toegankelijk zijn, is door vanaf het begin de best practices voor toegankelijkheid op te nemen. Hoewel er extra stappen bij betrokken zijn, betekent het opnemen van deze vaardigheden in uw workflow dat alle pagina's die u maakt, toegankelijk zijn.

---

## 🚀 Uitdaging

Neem deze HTML en herschrijf deze zodat deze zo toegankelijk mogelijk is, gezien de strategieën die u hebt geleerd.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz na de lezing
[Quiz na de lezing](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Beoordeling en zelfstudie

Veel regeringen hebben wetten met betrekking tot toegankelijkheidseisen. Lees de toegankelijkheidswetten van uw thuisland. Wat wordt er gedekt en wat niet? Een voorbeeld is [deze overheidswebsite](https://accessibility.blog.gov.uk/).

## Toewijzing
 
[Analyseer een niet-toegankelijke website](assignment.nl.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) door instrument
