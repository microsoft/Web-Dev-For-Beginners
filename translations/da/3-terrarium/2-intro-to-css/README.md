<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-23T22:03:08+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "da"
}
-->
# Terrarium Projekt Del 2: Introduktion til CSS

![Introduktion til CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

Kan du huske, hvordan dit HTML-terrarium så ret enkelt ud? Med CSS kan vi forvandle den enkle struktur til noget visuelt tiltalende.

Hvis HTML er som at bygge rammen til et hus, så er CSS alt det, der får det til at føles som et hjem - farverne på væggene, møblernes placering, belysningen og hvordan rummene hænger sammen. Tænk på, hvordan Versailles-paladset startede som en simpel jagthytte, men med omhyggelig opmærksomhed på dekoration og layout blev det forvandlet til en af verdens mest storslåede bygninger.

I dag vil vi forvandle dit terrarium fra funktionelt til poleret. Du vil lære, hvordan man placerer elementer præcist, skaber layouts, der reagerer på forskellige skærmstørrelser, og skaber den visuelle appel, der gør hjemmesider engagerende.

Ved slutningen af denne lektion vil du se, hvordan strategisk CSS-styling kan forbedre dit projekt dramatisk. Lad os tilføje lidt stil til dit terrarium.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/17)

## Kom godt i gang med CSS

CSS bliver ofte betragtet som "at gøre tingene pæne," men det tjener et langt bredere formål. CSS er som at være instruktør for en film - du styrer ikke kun, hvordan alt ser ud, men også hvordan det bevæger sig, reagerer på interaktion og tilpasser sig forskellige situationer.

Moderne CSS er utroligt kapabelt. Du kan skrive kode, der automatisk justerer layouts til telefoner, tablets og computere. Du kan skabe glidende animationer, der leder brugernes opmærksomhed derhen, hvor det er nødvendigt. Resultaterne kan være ret imponerende, når alt fungerer sammen.

> 💡 **Pro Tip**: CSS udvikler sig konstant med nye funktioner og kapaciteter. Tjek altid [CanIUse.com](https://caniuse.com) for at verificere browserstøtte til nyere CSS-funktioner, før du bruger dem i produktionsprojekter.

**Her er, hvad vi vil opnå i denne lektion:**
- **Skaber** et komplet visuelt design til dit terrarium ved hjælp af moderne CSS-teknikker
- **Udforsker** grundlæggende begreber som kaskade, arv og CSS-selektorer
- **Implementerer** responsive positionerings- og layoutstrategier
- **Bygger** terrariumbeholderen ved hjælp af CSS-former og styling

### Forudsætning

Du bør have fuldført HTML-strukturen for dit terrarium fra den forrige lektion og have det klar til at blive stylet.

> 📺 **Videomateriale**: Se denne nyttige video-gennemgang
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Opsætning af din CSS-fil

Før vi kan begynde at style, skal vi forbinde CSS til vores HTML. Denne forbindelse fortæller browseren, hvor den skal finde stylinginstruktionerne til vores terrarium.

I din terrarium-mappe skal du oprette en ny fil kaldet `style.css` og derefter linke den i din HTML-dokuments `<head>`-sektion:

```html
<link rel="stylesheet" href="./style.css" />
```

**Hvad denne kode gør:**
- **Opretter** en forbindelse mellem dine HTML- og CSS-filer
- **Fortæller** browseren at indlæse og anvende stilarterne fra `style.css`
- **Bruger** attributten `rel="stylesheet"` for at specificere, at dette er en CSS-fil
- **Refererer** til filstien med `href="./style.css"`

## Forstå CSS-kaskaden

Har du nogensinde undret dig over, hvorfor CSS kaldes "Cascading" Style Sheets? Stilarter kaskaderer ned som et vandfald, og nogle gange konflikter de med hinanden.

Tænk på, hvordan militære kommandostrukturer fungerer - en generel ordre kan sige "alle tropper skal bære grønt," men en specifik ordre til din enhed kan sige "bær blå uniformer til ceremonien." Den mere specifikke instruktion har forrang. CSS følger lignende logik, og det gør fejlfinding meget mere håndterbart, når man forstår denne hierarki.

### Eksperimenter med kaskadeprioritet

Lad os se kaskaden i aktion ved at skabe en stilkonflikt. Først skal du tilføje en inline-stil til din `<h1>`-tag:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Hvad denne kode gør:**
- **Anvender** en rød farve direkte på `<h1>`-elementet ved hjælp af inline-styling
- **Bruger** attributten `style` til at indlejre CSS direkte i HTML
- **Skaber** den højeste prioritet for stilreglen for dette specifikke element

Tilføj derefter denne regel til din `style.css`-fil:

```css
h1 {
  color: blue;
}
```

**I ovenstående har vi:**
- **Defineret** en CSS-regel, der målretter alle `<h1>`-elementer
- **Indstillet** tekstfarven til blå ved hjælp af et eksternt stylesheet
- **Skabt** en lavere prioritet regel sammenlignet med inline-stilarter

✅ **Videnscheck**: Hvilken farve vises i din webapp? Hvorfor vinder den farve? Kan du tænke på scenarier, hvor du måske vil tilsidesætte stilarter?

> 💡 **CSS-prioritetsrækkefølge (højeste til laveste):**
> 1. **Inline-stilarter** (style-attribut)
> 2. **IDs** (#myId)
> 3. **Klasser** (.myClass) og attributter
> 4. **Element-selektorer** (h1, div, p)
> 5. **Browser-standarder**

## CSS-arv i praksis

CSS-arv fungerer som genetik - elementer arver visse egenskaber fra deres forældrelementer. Hvis du indstiller skrifttypen på body-elementet, vil al tekst indeni automatisk bruge den samme skrifttype. Det er lidt som hvordan Habsburg-familiens karakteristiske kæbelinje dukkede op gennem generationer uden at være specificeret for hver enkelt person.

Men ikke alt bliver arvet. Tekststilarter som skrifttyper og farver arves, men layoutegenskaber som marginer og kanter gør ikke. Ligesom børn kan arve fysiske træk, men ikke deres forældres tøjstil.

### Observering af skrifttypearv

Lad os se arv i aktion ved at indstille en skrifttype på `<body>`-elementet:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Hvad der sker her:**
- **Indstiller** skrifttypen for hele siden ved at målrette `<body>`-elementet
- **Bruger** en skrifttype-stak med alternative muligheder for bedre browserkompatibilitet
- **Anvender** moderne systemskrifttyper, der ser godt ud på tværs af forskellige operativsystemer
- **Sikrer**, at alle underordnede elementer arver denne skrifttype, medmindre det specifikt tilsidesættes

Åbn din browsers udviklerværktøjer (F12), naviger til fanen Elements, og inspicer dit `<h1>`-element. Du vil se, at det arver skrifttypen fra body:

![arvet skrifttype](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.da.png)

✅ **Eksperimenttid**: Prøv at indstille andre arvelige egenskaber på `<body>` som `color`, `line-height` eller `text-align`. Hvad sker der med din overskrift og andre elementer?

> 📝 **Arvelige egenskaber inkluderer**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Ikke-arvelige egenskaber inkluderer**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Mestre CSS-selektorer

CSS-selektorer er din måde at målrette specifikke elementer for styling. De fungerer som at give præcise anvisninger - i stedet for at sige "huset," kan du sige "det blå hus med den røde dør på Maple Street."

CSS tilbyder forskellige måder at være specifik på, og det at vælge den rigtige selektor er som at vælge det passende værktøj til opgaven. Nogle gange skal du style alle døre i nabolaget, og andre gange kun én specifik dør.

### Element-selektorer (Tags)

Element-selektorer målretter HTML-elementer efter deres tag-navn. De er perfekte til at indstille basisstilarter, der gælder bredt på tværs af din side:

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

**Forståelse af disse stilarter:**
- **Indstiller** konsekvent typografi på hele siden med `body`-selektoren
- **Fjerner** standard browser-marginer og -polstring for bedre kontrol
- **Styler** alle overskriftselementer med farve, justering og afstand
- **Bruger** `rem`-enheder for skalerbar, tilgængelig skrifttypestørrelse

Selvom element-selektorer fungerer godt til generel styling, har du brug for mere specifikke selektorer for at style individuelle komponenter som planterne i dit terrarium.

### ID-selektorer til unikke elementer

ID-selektorer bruger symbolet `#` og målretter elementer med specifikke `id`-attributter. Da ID'er skal være unikke på en side, er de perfekte til at style individuelle, specielle elementer som vores venstre og højre plantebeholdere.

Lad os oprette styling til vores terrariums sidebeholdere, hvor planterne skal være:

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

**Hvad denne kode opnår:**
- **Placerer** beholdere ved de yderste venstre og højre kanter ved hjælp af `absolute` positionering
- **Bruger** `vh` (viewport height) enheder for responsiv højde, der tilpasser sig skærmstørrelsen
- **Anvender** `box-sizing: border-box`, så polstring inkluderes i den samlede bredde
- **Fjerner** unødvendige `px`-enheder fra nulværdier for renere kode
- **Indstiller** en subtil baggrundsfarve, der er mere behagelig for øjnene end skarp grå

✅ **Kodekvalitetsudfordring**: Bemærk, hvordan denne CSS bryder DRY-princippet (Don't Repeat Yourself). Kan du omstrukturere det ved at bruge både en ID og en klasse?

**Forbedret tilgang:**
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

### Klasse-selektorer til genanvendelige stilarter

Klasse-selektorer bruger symbolet `.` og er perfekte, når du vil anvende de samme stilarter på flere elementer. I modsætning til ID'er kan klasser genbruges i hele din HTML, hvilket gør dem ideelle til konsistente stylingmønstre.

I vores terrarium har hver plante brug for lignende styling, men også individuel placering. Vi vil bruge en kombination af klasser til fælles stilarter og ID'er til unik placering.

**Her er HTML-strukturen for hver plante:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.da.png" />
</div>
```

**Vigtige elementer forklaret:**
- **Bruger** `class="plant-holder"` for ensartet container-styling på tværs af alle planter
- **Anvender** `class="plant"` for fælles billedstyling og adfærd
- **Inkluderer** unik `id="plant1"` for individuel placering og JavaScript-interaktion
- **Giver** beskrivende alt-tekst for skærmlæser-tilgængelighed

Tilføj nu disse stilarter til din `style.css`-fil:

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

**Nedbrydning af disse stilarter:**
- **Skaber** relativ positionering for planteholderen for at etablere en positioneringskontekst
- **Indstiller** hver planteholder til 13% højde, så alle planter passer lodret uden scrolling
- **Flytter** holdere lidt til venstre for bedre at centrere planter inden for deres beholdere
- **Tillader** planter at skalere responsivt med `max-width` og `max-height` egenskaber
- **Bruger** `z-index` til at placere planter over andre elementer i terrariet
- **Tilføjer** en subtil hover-effekt med CSS-overgange for bedre brugerinteraktion

✅ **Kritisk tænkning**: Hvorfor har vi brug for både `.plant-holder` og `.plant` selektorer? Hvad ville der ske, hvis vi kun prøvede at bruge én?

> 💡 **Designmønster**: Containeren (`.plant-holder`) styrer layout og positionering, mens indholdet (`.plant`) styrer udseende og skalering. Denne adskillelse gør koden mere vedligeholdelsesvenlig og fleksibel.

## Forstå CSS-positionering

CSS-positionering er som at være scenedirektør for et teaterstykke - du styrer, hvor hver skuespiller står, og hvordan de bevæger sig rundt på scenen. Nogle skuespillere følger standardformationen, mens andre har brug for specifik placering for dramatisk effekt.

Når du forstår positionering, bliver mange layoutudfordringer håndterbare. Har du brug for en navigationsbjælke, der forbliver øverst, mens brugerne scroller? Positionering klarer det. Vil du have en tooltip, der vises på et specifikt sted? Det er også positionering.

### De fem positioneringsværdier

| Positioneringsværdi | Adfærd | Brugsscenarie |
|---------------------|--------|---------------|
| `static` | Standardflow, ignorerer top/left/right/bottom | Normal dokumentlayout |
| `relative` | Positioneret relativt til sin normale position | Små justeringer, skaber positioneringskontekst |
| `absolute` | Positioneret relativt til nærmeste positionerede forfader | Præcis placering, overlays |
| `fixed` | Positioneret relativt til viewport | Navigationsbjælker, flydende elementer |
| `sticky` | Skifter mellem relativ og fast baseret på scroll | Overskrifter, der klæber ved scrolling |

### Positionering i vores terrarium

Vores terrarium bruger en strategisk kombination af positioneringstyper til at skabe det ønskede layout:

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

**Forståelse af positioneringsstrategien:**
- **Absolutte containere** fjernes fra det normale dokumentflow og fastgøres til skærmkanten
- **Relativ planteholder** skaber en positioneringskontekst, mens den forbliver i dokumentflowet
- **Absolutte planter** kan placeres præcist inden for deres relative containere
- **Denne kombination** gør det muligt for planter at stables lodret, mens de kan placeres individuelt

> 🎯 **Hvorfor dette er vigtigt**: `plant`-elementerne har brug for absolut positionering for at kunne blive trukket og flyttet i den næste lektion. Absolut positionering fjerner dem fra det normale layoutflow, hvilket gør drag-and-drop-interaktioner mulige.

✅ **Eksperimenttid**: Prøv at ændre positioneringsværdierne og observer resultaterne:
- Hvad sker der, hvis du ændrer `.container` fra `absolute` til `relative`?
- Hvordan ændrer layoutet sig, hvis `.plant-holder` bruger `absolute` i stedet for `relative`?
- Hvad sker der, når du skifter `.plant` til `relative` positionering?

## Bygning af terrariet med CSS

Nu skal vi bygge en glasbeholder ved hjælp af kun CSS - ingen billeder eller grafisk software er nødvendige.

At skabe realistisk udseende glas, skygger og dybdeeffekter ved hjælp af positionering og gennemsigtighed demonstrerer CSS's visuelle kapaciteter. Denne teknik minder om, hvordan arkitekter i Bauhaus-bevægelsen brugte simple geometriske former til at skabe komplekse, smukke strukturer. Når du forstår disse principper, vil du genkende CSS-teknikkerne bag mange webdesigns.

### Skabelse af glasbeholderens komponenter
Lad os bygge terrarium-krukken stykke for stykke. Hver del bruger absolut positionering og procentbaseret størrelsesangivelse for responsivt design:

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

**Forståelse af terrarium-konstruktionen:**
- **Bruger** procentbaserede dimensioner for responsiv skalering på tværs af alle skærmstørrelser
- **Positionerer** elementer absolut for at stable og justere dem præcist
- **Anvender** forskellige opacitetsværdier for at skabe glaseffekten
- **Implementerer** `z-index` lagdeling, så planterne vises inde i krukken
- **Tilføjer** subtile skygger og raffineret afrunding af kanter for et mere realistisk udseende

### Responsivt design med procentangivelser

Bemærk, hvordan alle dimensioner bruger procentangivelser i stedet for faste pixelværdier:

**Hvorfor det er vigtigt:**
- **Sikrer**, at terrariet skalerer proportionalt på enhver skærmstørrelse
- **Bevarer** de visuelle relationer mellem krukkens komponenter
- **Giver** en ensartet oplevelse fra mobiltelefoner til store desktop-skærme
- **Tillader**, at designet tilpasser sig uden at bryde den visuelle layout

### CSS-enheder i praksis

Vi bruger `rem`-enheder til afrunding af kanter, som skalerer i forhold til rodens skriftstørrelse. Dette skaber mere tilgængelige designs, der respekterer brugerens skriftpræferencer. Læs mere om [CSS relative enheder](https://www.w3.org/TR/css-values-3/#font-relative-lengths) i den officielle specifikation.

✅ **Visuel eksperimentering**: Prøv at ændre disse værdier og observer effekterne:
- Ændre krukkens opacitet fra 0.5 til 0.8 – hvordan påvirker det glaseffekten?
- Juster jordens farve fra `#3a241d` til `#8B4513` – hvilken visuel effekt har det?
- Modificer jordens `z-index` til 2 – hvad sker der med lagdelingen?

---

## GitHub Copilot Agent-udfordring 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Opret en CSS-animation, der får terrarium-planterne til at svaje blidt frem og tilbage, som om de bevæger sig i en naturlig brise. Dette vil hjælpe dig med at øve CSS-animationer, transformationer og keyframes, samtidig med at det forbedrer terrariets visuelle appel.

**Opgave:** Tilføj CSS-keyframe-animationer for at få planterne i terrariet til at svaje blidt fra side til side. Opret en svajende animation, der roterer hver plante let (2-3 grader) til venstre og højre med en varighed på 3-4 sekunder, og anvend den på `.plant`-klassen. Sørg for, at animationen kører uendeligt og har en easing-funktion for naturlig bevægelse.

Læs mere om [agent-tilstand](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring: Tilføj glasreflektioner

Klar til at forbedre dit terrarium med realistiske glasreflektioner? Denne teknik vil tilføje dybde og realisme til designet.

Du vil skabe subtile highlights, der simulerer, hvordan lys reflekteres på glasoverflader. Denne tilgang minder om, hvordan renæssancemalere som Jan van Eyck brugte lys og refleksion til at få malet glas til at fremstå tredimensionelt. Her er, hvad du sigter efter:

![færdigt terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.da.png)

**Din udfordring:**
- **Skab** subtile hvide eller lyse ovale former til glasreflektionerne
- **Positioner** dem strategisk på venstre side af krukken
- **Anvend** passende opacitet og sløringseffekter for realistisk lysreflektion
- **Brug** `border-radius` til at skabe organiske, boblelignende former
- **Eksperimenter** med gradienter eller skygger for forbedret realisme

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/18)

## Udvid din CSS-viden

CSS kan virke komplekst i starten, men forståelse af disse kernekoncepter giver et solidt fundament for mere avancerede teknikker.

**Dine næste CSS-læringsområder:**
- **Flexbox** - gør det nemmere at justere og fordele elementer
- **CSS Grid** - giver kraftfulde værktøjer til at skabe komplekse layouts
- **CSS-variabler** - reducerer gentagelse og forbedrer vedligeholdelse
- **Responsivt design** - sikrer, at websites fungerer godt på tværs af forskellige skærmstørrelser

### Interaktive læringsressourcer

Øv dig på disse koncepter med disse engagerende, praktiske spil:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Bliv mester i Flexbox gennem sjove udfordringer
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Lær CSS Grid ved at dyrke virtuelle gulerødder
- 🎯 [CSS Battle](https://cssbattle.dev/) - Test dine CSS-færdigheder med kodningsudfordringer

### Yderligere læring

For omfattende CSS-grundlæggende, gennemfør dette Microsoft Learn-modul: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Opgave

[CSS Refactoring](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.