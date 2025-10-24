<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-23T21:38:55+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "sv"
}
-->
# Terrariumprojekt Del 2: Introduktion till CSS

![Introduktion till CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

Minns du hur ditt HTML-terrarium såg ganska enkelt ut? Med CSS kan vi förvandla den enkla strukturen till något visuellt tilltalande.

Om HTML är som att bygga husets ram, så är CSS allt som får det att kännas som ett hem – färgerna på väggarna, möblernas placering, belysningen och hur rummen hänger ihop. Tänk på hur Versaillespalatset började som en enkel jaktstuga, men med noggrann uppmärksamhet på dekoration och layout förvandlades det till en av världens mest magnifika byggnader.

Idag ska vi förvandla ditt terrarium från funktionellt till polerat. Du kommer att lära dig hur man positionerar element exakt, skapar layouter som anpassar sig till olika skärmstorlekar och skapar den visuella attraktionskraften som gör webbplatser engagerande.

I slutet av denna lektion kommer du att se hur strategisk CSS-styling kan förbättra ditt projekt dramatiskt. Låt oss lägga till lite stil i ditt terrarium.

## Förberedande Quiz

[Förberedande quiz](https://ff-quizzes.netlify.app/web/quiz/17)

## Kom igång med CSS

CSS ses ofta som något som bara "gör saker snygga", men det har ett mycket bredare syfte. CSS är som att vara regissör för en film – du kontrollerar inte bara hur allt ser ut, utan också hur det rör sig, reagerar på interaktion och anpassar sig till olika situationer.

Modern CSS är otroligt kapabelt. Du kan skriva kod som automatiskt justerar layouter för telefoner, surfplattor och stationära datorer. Du kan skapa mjuka animationer som guidar användarnas uppmärksamhet dit den behövs. Resultaten kan vara ganska imponerande när allt fungerar tillsammans.

> 💡 **Proffstips**: CSS utvecklas ständigt med nya funktioner och kapaciteter. Kontrollera alltid [CanIUse.com](https://caniuse.com) för att verifiera webbläsarstöd för nyare CSS-funktioner innan du använder dem i produktionsprojekt.

**Det här ska vi uppnå i denna lektion:**
- **Skapa** en komplett visuell design för ditt terrarium med moderna CSS-tekniker
- **Utforska** grundläggande koncept som kaskad, arv och CSS-selektorer
- **Implementera** responsiv positionering och layoutstrategier
- **Bygga** terrariumbehållaren med CSS-former och styling

### Förkunskaper

Du bör ha slutfört HTML-strukturen för ditt terrarium från föregående lektion och ha det redo att stylas.

> 📺 **Videoresurs**: Kolla in denna hjälpsamma videogenomgång
>
> [![CSS-grunder Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Ställa in din CSS-fil

Innan vi kan börja styla måste vi koppla CSS till vår HTML. Denna koppling talar om för webbläsaren var den ska hitta stylinginstruktionerna för vårt terrarium.

I din terrarium-mapp, skapa en ny fil som heter `style.css`, och länka den sedan i din HTML-dokuments `<head>`-sektion:

```html
<link rel="stylesheet" href="./style.css" />
```

**Vad denna kod gör:**
- **Skapar** en koppling mellan dina HTML- och CSS-filer
- **Talar om** för webbläsaren att ladda och tillämpa stilarna från `style.css`
- **Använder** attributet `rel="stylesheet"` för att specificera att detta är en CSS-fil
- **Refererar** till filvägen med `href="./style.css"`

## Förstå CSS-kaskaden

Har du någonsin undrat varför CSS kallas "Cascading Style Sheets"? Stilar faller ner som ett vattenfall, och ibland krockar de med varandra.

Tänk på hur militära kommandostrukturer fungerar – en generell order kan säga "alla soldater ska ha grönt", men en specifik order till din enhet kan säga "ha på er blå uniform för ceremonin". Den mer specifika instruktionen har företräde. CSS följer liknande logik, och att förstå denna hierarki gör felsökning mycket enklare.

### Experimentera med kaskadprioritet

Låt oss se kaskaden i aktion genom att skapa en stilkonflikt. Lägg först till en inline-stil till din `<h1>`-tagg:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Vad denna kod gör:**
- **Tillämpa** en röd färg direkt på `<h1>`-elementet med inline-styling
- **Använder** attributet `style` för att bädda in CSS direkt i HTML
- **Skapar** den högsta prioriteten för denna specifika stilregel

Lägg sedan till denna regel i din `style.css`-fil:

```css
h1 {
  color: blue;
}
```

**I ovanstående har vi:**
- **Definierat** en CSS-regel som riktar sig till alla `<h1>`-element
- **Ställt in** textfärgen till blå med en extern stilmall
- **Skapat** en lägre prioritet jämfört med inline-stilar

✅ **Kunskapskontroll**: Vilken färg visas i din webbapp? Varför vinner den färgen? Kan du tänka dig scenarier där du kanske vill åsidosätta stilar?

> 💡 **CSS-prioritetsordning (högst till lägst):**
> 1. **Inline-stilar** (style-attribut)
> 2. **IDs** (#myId)
> 3. **Klasser** (.myClass) och attribut
> 4. **Elementselektorer** (h1, div, p)
> 5. **Webbläsarens standardinställningar**

## CSS-arv i praktiken

CSS-arv fungerar som genetik – element ärver vissa egenskaper från sina förälderelement. Om du ställer in teckensnittet på body-elementet, använder all text automatiskt samma teckensnitt. Det är ungefär som hur Habsburg-familjens distinkta käklinje dök upp över generationer utan att specificeras för varje individ.

Men inte allt ärvs. Textstilar som teckensnitt och färger ärvs, men layoutegenskaper som marginaler och ramar är det inte. Precis som barn kan ärva fysiska drag men inte sina föräldrars klädstil.

### Observera teckensnittsarv

Låt oss se arv i praktiken genom att ställa in ett teckensnitt på `<body>`-elementet:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Bryta ner vad som händer här:**
- **Ställer in** teckensnittet för hela sidan genom att rikta in sig på `<body>`-elementet
- **Använder** en teckensnittsstapel med reservalternativ för bättre webbläsarkompatibilitet
- **Tillämpa** moderna systemteckensnitt som ser bra ut på olika operativsystem
- **Säkerställer** att alla underordnade element ärver detta teckensnitt om det inte specifikt åsidosätts

Öppna webbläsarens utvecklarverktyg (F12), navigera till fliken Elements och inspektera ditt `<h1>`-element. Du kommer att se att det ärver teckensnittet från body:

![ärvt teckensnitt](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.sv.png)

✅ **Experimentera**: Försök att ställa in andra ärvbara egenskaper på `<body>` som `color`, `line-height` eller `text-align`. Vad händer med din rubrik och andra element?

> 📝 **Ärvbara egenskaper inkluderar**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Icke-ärvbara egenskaper inkluderar**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Bemästra CSS-selektorer

CSS-selektorer är ditt sätt att rikta in dig på specifika element för styling. De fungerar som att ge exakta anvisningar – istället för att säga "huset", kanske du säger "det blå huset med den röda dörren på Maple Street."

CSS erbjuder olika sätt att vara specifik, och att välja rätt selektor är som att välja rätt verktyg för uppgiften. Ibland behöver du styla varje dörr i grannskapet, och ibland bara en specifik dörr.

### Elementselektorer (Taggar)

Elementselektorer riktar sig till HTML-element med deras taggnamn. De är perfekta för att ställa in grundläggande stilar som gäller brett över din sida:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Förstå dessa stilar:**
- **Ställer in** konsekvent typografi över hela sidan med `body`-selektorn
- **Tar bort** webbläsarens standardmarginaler och padding för bättre kontroll
- **Stylar** alla rubrikelement med färg, justering och avstånd
- **Använder** `rem`-enheter för skalbar, tillgänglig teckenstorlek

Medan elementselektorer fungerar bra för generell styling, behöver du mer specifika selektorer för att styla individuella komponenter som växterna i ditt terrarium.

### ID-selektorer för unika element

ID-selektorer använder symbolen `#` och riktar sig till element med specifika `id`-attribut. Eftersom ID:n måste vara unika på en sida är de perfekta för att styla individuella, speciella element som våra vänstra och högra växtbehållare.

Låt oss skapa styling för terrariets sidobehållare där växterna ska placeras:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Vad denna kod gör:**
- **Positionerar** behållare vid de yttersta vänstra och högra kanterna med `absolute` positionering
- **Använder** `vh` (viewport height) enheter för responsiv höjd som anpassar sig till skärmstorlek
- **Tillämpa** `box-sizing: border-box` så att padding inkluderas i den totala bredden
- **Tar bort** onödiga `px`-enheter från nollvärden för renare kod
- **Ställer in** en subtil bakgrundsfärg som är lättare för ögonen än skarp grå

✅ **Kodkvalitetsutmaning**: Märk hur denna CSS bryter mot DRY (Don't Repeat Yourself)-principen. Kan du omstrukturera den med både ett ID och en klass?

**Förbättrad metod:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Klass-selektorer för återanvändbara stilar

Klass-selektorer använder symbolen `.` och är perfekta när du vill tillämpa samma stilar på flera element. Till skillnad från ID:n kan klasser återanvändas i hela din HTML, vilket gör dem idealiska för konsekventa stylingmönster.

I vårt terrarium behöver varje växt liknande styling men också individuell positionering. Vi kommer att använda en kombination av klasser för gemensamma stilar och ID:n för unik positionering.

**Här är HTML-strukturen för varje växt:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.sv.png" />
</div>
```

**Nyckelelement förklarade:**
- **Använder** `class="plant-holder"` för konsekvent behållarstyling över alla växter
- **Tillämpa** `class="plant"` för gemensam bildstyling och beteende
- **Inkluderar** unikt `id="plant1"` för individuell positionering och JavaScript-interaktion
- **Ger** beskrivande alt-text för skärmläsartillgänglighet

Lägg nu till dessa stilar i din `style.css`-fil:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Bryta ner dessa stilar:**
- **Skapar** relativ positionering för växthållaren för att etablera en positioneringskontext
- **Ställer in** varje växthållare till 13% höjd, vilket säkerställer att alla växter passar vertikalt utan att scrolla
- **Flyttar** hållare något åt vänster för att bättre centrera växterna inom deras behållare
- **Tillåter** växter att skalas responsivt med `max-width` och `max-height` egenskaper
- **Använder** `z-index` för att placera växter ovanför andra element i terrariet
- **Lägger till** en subtil hover-effekt med CSS-övergångar för bättre användarinteraktion

✅ **Kritiskt tänkande**: Varför behöver vi både `.plant-holder` och `.plant` selektorer? Vad skulle hända om vi försökte använda bara en?

> 💡 **Designmönster**: Behållaren (`.plant-holder`) kontrollerar layout och positionering, medan innehållet (`.plant`) kontrollerar utseende och skalning. Denna separation gör koden mer underhållbar och flexibel.

## Förstå CSS-positionering

CSS-positionering är som att vara scenregissör för en pjäs – du styr var varje aktör står och hur de rör sig på scenen. Vissa aktörer följer standardformationen, medan andra behöver specifik positionering för dramatisk effekt.

När du förstår positionering blir många layoututmaningar hanterbara. Behöver du en navigeringsbar som stannar högst upp medan användare scrollar? Positionering hanterar det. Vill du ha en tooltip som visas på en specifik plats? Det är också positionering.

### De fem positioneringsvärdena

| Positioneringsvärde | Beteende | Användningsfall |
|---------------------|----------|-----------------|
| `static` | Standardflöde, ignorerar top/left/right/bottom | Normal dokumentlayout |
| `relative` | Positionerad relativt sin normala position | Små justeringar, skapa positioneringskontext |
| `absolute` | Positionerad relativt närmaste positionerade förfader | Exakt placering, överlägg |
| `fixed` | Positionerad relativt viewport | Navigeringsbarer, flytande element |
| `sticky` | Växlar mellan relativ och fast baserat på scroll | Rubriker som fastnar vid scrollning |

### Positionering i vårt terrarium

Vårt terrarium använder en strategisk kombination av positioneringstyper för att skapa den önskade layouten:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Förstå positioneringsstrategin:**
- **Absoluta behållare** tas bort från normalt dokumentflöde och fästs vid skärmens kanter
- **Relativa växthållare** skapar en positioneringskontext medan de stannar i dokumentflödet
- **Absoluta växter** kan positioneras exakt inom sina relativa behållare
- **Denna kombination** tillåter växter att staplas vertikalt samtidigt som de är individuellt positionerbara

> 🎯 **Varför detta är viktigt**: Växtelementen behöver absolut positionering för att bli dragbara i nästa lektion. Absolut positionering tar bort dem från det normala layoutflödet, vilket gör drag-och-släpp-interaktioner möjliga.

✅ **Experimentera**: Försök att ändra positioneringsvärdena och observera resultaten:
- Vad händer om du ändrar `.container` från `absolute` till `relative`?
- Hur förändras layouten om `.plant-holder` använder `absolute` istället för `relative`?
- Vad händer när du byter `.plant` till `relative` positionering?

## Bygga terrariet med CSS

Nu ska vi bygga en glasburk med bara CSS – inga bilder eller grafikprogram behövs.

Att skapa realistiskt glas, skuggor och djupseffekter med positionering och transparens visar CSS:s visuella kapacitet. Denna teknik speglar hur arkitekter i Bauhaus-rörelsen använde enkla geometriska former för att skapa komplexa, vackra strukturer. När du förstår dessa principer kommer du att känna igen CSS-teknikerna bakom många webbdesigner.

### Skapa glasburkens komponenter
Låt oss bygga terrariumet steg för steg. Varje del använder absolut positionering och procentbaserad storlek för responsiv design:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Förstå terrariumets konstruktion:**
- **Använder** procentbaserade dimensioner för att skala responsivt över alla skärmstorlekar
- **Positionerar** element absolut för att stapla och justera dem exakt
- **Tillämpas** olika opacitetsvärden för att skapa en glaseffekt med transparens
- **Implementerar** `z-index` lager så att växterna visas inuti burken
- **Lägger till** subtila skuggor och förfinad rundning av kanterna för en mer realistisk look

### Responsiv design med procent

Lägg märke till hur alla dimensioner använder procent istället för fasta pixelvärden:

**Varför detta är viktigt:**
- **Säkerställer** att terrariumet skalar proportionellt på alla skärmstorlekar
- **Bibehåller** de visuella relationerna mellan burkens komponenter
- **Ger** en konsekvent upplevelse från mobiltelefoner till stora datorskärmar
- **Gör** att designen kan anpassas utan att bryta den visuella layouten

### CSS-enheter i praktiken

Vi använder `rem`-enheter för rundning av kanter, vilket skalar relativt till rotens teckenstorlek. Detta skapar mer tillgängliga designer som respekterar användarens teckenpreferenser. Läs mer om [CSS relativa enheter](https://www.w3.org/TR/css-values-3/#font-relative-lengths) i den officiella specifikationen.

✅ **Visuella experiment**: Prova att ändra dessa värden och observera effekterna:
- Ändra burkens opacitet från 0.5 till 0.8 – hur påverkar detta glasets utseende?
- Justera jordens färg från `#3a241d` till `#8B4513` – vilken visuell effekt har detta?
- Ändra jordens `z-index` till 2 – vad händer med lagren?

---

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa en CSS-animation som får terrariumets växter att svaja mjukt fram och tillbaka, vilket simulerar en naturlig briseffekt. Detta hjälper dig att öva på CSS-animationer, transformeringar och nyckelramsfunktioner samtidigt som du förbättrar terrariumets visuella attraktionskraft.

**Uppmaning:** Lägg till CSS-nyckelramsanimationer för att få växterna i terrariumet att svaja mjukt från sida till sida. Skapa en svajande animation som roterar varje växt något (2-3 grader) åt vänster och höger med en varaktighet på 3-4 sekunder, och tillämpa den på `.plant`-klassen. Se till att animationen loopar oändligt och har en easing-funktion för naturlig rörelse.

Läs mer om [agentläge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning: Lägg till glasreflektioner

Redo att förbättra ditt terrarium med realistiska glasreflektioner? Denna teknik kommer att ge designen djup och realism.

Du kommer att skapa subtila höjdpunkter som simulerar hur ljus reflekteras från glasytor. Denna metod liknar hur renässansmålare som Jan van Eyck använde ljus och reflektion för att få målat glas att se tredimensionellt ut. Här är vad du ska sträva efter:

![färdigt terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.sv.png)

**Din utmaning:**
- **Skapa** subtila vita eller ljusa ovala former för glasreflektionerna
- **Placera** dem strategiskt på burkens vänstra sida
- **Tillämpa** lämpliga opacitets- och oskärpningseffekter för realistisk ljusreflektion
- **Använd** `border-radius` för att skapa organiska, bubbel-liknande former
- **Experimentera** med gradienter eller skuggor för förbättrad realism

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/18)

## Utöka din CSS-kunskap

CSS kan kännas komplext i början, men att förstå dessa grundläggande koncept ger en solid grund för mer avancerade tekniker.

**Dina nästa CSS-lärandeområden:**
- **Flexbox** - förenklar justering och fördelning av element
- **CSS Grid** - erbjuder kraftfulla verktyg för att skapa komplexa layouter
- **CSS-variabler** - minskar repetition och förbättrar underhållbarhet
- **Responsiv design** - säkerställer att webbplatser fungerar bra på olika skärmstorlekar

### Interaktiva lärresurser

Öva på dessa koncept med dessa engagerande, praktiska spel:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Bemästra Flexbox genom roliga utmaningar
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Lär dig CSS Grid genom att odla virtuella morötter
- 🎯 [CSS Battle](https://cssbattle.dev/) - Testa dina CSS-färdigheter med kodningsutmaningar

### Ytterligare lärande

För omfattande CSS-grunder, slutför denna Microsoft Learn-modul: [Styla din HTML-app med CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Uppgift

[CSS Refactoring](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.