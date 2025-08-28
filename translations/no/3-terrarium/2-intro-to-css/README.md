<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-26T21:37:44+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "no"
}
-->
# Terrarium-prosjekt del 2: Introduksjon til CSS

![Introduksjon til CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/17)

### Introduksjon

CSS, eller Cascading Style Sheets, løser et viktig problem innen webutvikling: hvordan få nettstedet ditt til å se bra ut. Å style appene dine gjør dem mer brukervennlige og visuelt tiltalende; du kan også bruke CSS til å lage Responsive Web Design (RWD) - slik at appene dine ser bra ut uansett skjermstørrelse. CSS handler ikke bare om å få appen din til å se bra ut; spesifikasjonen inkluderer også animasjoner og transformasjoner som kan muliggjøre avanserte interaksjoner for appene dine. CSS Working Group hjelper til med å vedlikeholde gjeldende CSS-spesifikasjoner; du kan følge arbeidet deres på [World Wide Web Consortiums nettsted](https://www.w3.org/Style/CSS/members).

> Merk, CSS er et språk som utvikler seg, som alt annet på nettet, og ikke alle nettlesere støtter nyere deler av spesifikasjonen. Sjekk alltid implementeringene dine ved å konsultere [CanIUse.com](https://caniuse.com).

I denne leksjonen skal vi legge til stiler i vårt online terrarium og lære mer om flere CSS-konsepter: kaskaden, arv, bruk av selektorer, posisjonering og bruk av CSS til å bygge oppsett. Underveis skal vi lage oppsettet for terrariet og selve terrariet.

### Forutsetning

Du bør ha HTML-en for terrariet ditt ferdig og klar til å styles.

> Se video

> 
> [![Git og GitHub-grunnleggende video](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Oppgave

I terrarium-mappen din, opprett en ny fil kalt `style.css`. Importer den filen i `<head>`-seksjonen:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskaden

Cascading Style Sheets inkorporerer ideen om at stilene 'kaskader', slik at anvendelsen av en stil styres av dens prioritet. Stiler satt av en nettstedforfatter har prioritet over de som er satt av en nettleser. Stiler satt 'inline' har prioritet over de som er satt i et eksternt stilark.

### Oppgave

Legg til den inline stilen "color: red" i `<h1>`-taggen din:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Deretter legger du til følgende kode i `style.css`-filen din:

```CSS
h1 {
 color: blue;
}
```

✅ Hvilken farge vises i webappen din? Hvorfor? Kan du finne en måte å overstyre stiler på? Når ville du ønsket å gjøre dette, eller hvorfor ikke?

---

## Arv

Stiler arves fra en forfaderstil til en etterkommer, slik at nestede elementer arver stilene til sine foreldre.

### Oppgave

Sett fonten til body til en gitt font, og sjekk fonten til et nestet element:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Åpne nettleserens konsoll til 'Elements'-fanen og observer fonten til H1. Den arver fonten fra body, som angitt i nettleseren:

![arvet font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.no.png)

✅ Kan du få en nestet stil til å arve en annen egenskap?

---

## CSS-selektorer

### Tagger

Så langt har `style.css`-filen din bare noen få tagger stylet, og appen ser ganske merkelig ut:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Denne måten å style en tag på gir deg kontroll over unike elementer, men du trenger å kontrollere stilene til mange planter i terrariet ditt. For å gjøre det, må du bruke CSS-selektorer.

### Id-er

Legg til litt stil for å plassere venstre og høyre containere. Siden det bare er én venstre container og én høyre container, har de fått id-er i markupen. For å style dem, bruk `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Her har du plassert disse containerne med absolutt posisjonering helt til venstre og høyre på skjermen, og brukt prosent for bredden deres slik at de kan skalere for små mobilskjermer.

✅ Denne koden er ganske repetitiv, altså ikke "DRY" (Don't Repeat Yourself); kan du finne en bedre måte å style disse id-ene på, kanskje med en id og en klasse? Du må endre markupen og refaktorere CSS-en:

```html
<div id="left-container" class="container"></div>
```

### Klasser

I eksempelet ovenfor stylet du to unike elementer på skjermen. Hvis du vil at stiler skal gjelde for mange elementer på skjermen, kan du bruke CSS-klasser. Gjør dette for å plassere plantene i venstre og høyre containere.

Legg merke til at hver plante i HTML-markupen har en kombinasjon av id-er og klasser. Id-ene her brukes av JavaScript som du vil legge til senere for å manipulere plasseringen av terrarieplantene. Klassene gir imidlertid alle plantene en gitt stil.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Legg til følgende i `style.css`-filen din:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Merkbart i denne kodesnutten er blandingen av relativ og absolutt posisjonering, som vi skal dekke i neste seksjon. Se på hvordan høyder håndteres med prosent:

Du setter høyden til planteholderen til 13%, et godt tall for å sikre at alle plantene vises i hver vertikal container uten behov for scrolling.

Du setter planteholderen til å bevege seg til venstre for å gjøre plantene mer sentrert i containeren. Bildene har en stor mengde gjennomsiktig bakgrunn for å gjøre dem mer flyttbare, så de må skyves til venstre for å passe bedre på skjermen.

Deretter får selve planten en maks-bredde på 150%. Dette gjør at den skalerer ned når nettleseren skalerer ned. Prøv å endre størrelsen på nettleseren din; plantene holder seg i containerne, men skalerer ned for å passe.

Også merkbart er bruken av z-index, som kontrollerer den relative høyden til et element (slik at plantene sitter på toppen av containeren og ser ut til å sitte inne i terrariet).

✅ Hvorfor trenger du både en planteholder og en plante CSS-selektor?

## CSS-posisjonering

Å blande posisjons-egenskaper (det finnes statisk, relativ, fast, absolutt og sticky posisjonering) kan være litt vanskelig, men når det gjøres riktig gir det deg god kontroll over elementene på sidene dine.

Absolutt posisjonerte elementer er posisjonert relativt til sine nærmeste posisjonerte forfedre, og hvis det ikke finnes noen, er de posisjonert i henhold til dokumentets body.

Relativt posisjonerte elementer er posisjonert basert på CSS-instruksjonene for å justere plasseringen bort fra sin opprinnelige posisjon.

I vårt eksempel er `plant-holder` et relativt posisjonert element som er posisjonert innenfor en absolutt posisjonert container. Den resulterende oppførselen er at sidebarkontainerne er festet til venstre og høyre, og planteholderen er nestet, justerer seg selv innenfor sidebarkene, og gir plass til at plantene kan plasseres i en vertikal rad.

> Selve `plant` har også absolutt posisjonering, nødvendig for å gjøre den flyttbar, som du vil oppdage i neste leksjon.

✅ Eksperimenter med å bytte posisjonstyper for sidecontainerne og planteholderen. Hva skjer?

## CSS-oppsett

Nå skal du bruke det du har lært til å bygge selve terrariet, alt ved hjelp av CSS!

Først, style `.terrarium` div-barna som en avrundet rektangel ved hjelp av CSS:

```CSS
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
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
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

Legg merke til bruken av prosent her. Hvis du skalerer nettleseren din ned, kan du se hvordan glasset også skalerer. Legg også merke til bredder og høydeprosent for glasselementene og hvordan hvert element er absolutt posisjonert i midten, festet til bunnen av visningsområdet.

Vi bruker også `rem` for border-radius, en font-relativ lengde. Les mer om denne typen relativ måling i [CSS-spesifikasjonen](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Prøv å endre fargene og opasiteten til glasset kontra jorden. Hva skjer? Hvorfor?

---

## 🚀Utfordring

Legg til en 'boble'-glans nederst til venstre på glasset for å få det til å se mer glassaktig ut. Du vil style `.jar-glossy-long` og `.jar-glossy-short` for å se ut som en reflektert glans. Slik vil det se ut:

![ferdig terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.no.png)

For å fullføre quiz etter forelesning, gå gjennom dette Learn-modulet: [Style HTML-appen din med CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/18)

## Gjennomgang og selvstudium

CSS virker tilsynelatende enkelt, men det er mange utfordringer når man prøver å style en app perfekt for alle nettlesere og skjermstørrelser. CSS-Grid og Flexbox er verktøy som er utviklet for å gjøre jobben litt mer strukturert og pålitelig. Lær om disse verktøyene ved å spille [Flexbox Froggy](https://flexboxfroggy.com/) og [Grid Garden](https://codepip.com/games/grid-garden/).

## Oppgave

[CSS Refaktorering](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.