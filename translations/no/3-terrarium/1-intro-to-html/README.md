<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-23T22:29:08+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "no"
}
-->
# Terrarium-prosjekt del 1: Introduksjon til HTML

![Introduksjon til HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, eller HyperText Markup Language, er grunnlaget for alle nettsider du noen gang har besøkt. Tenk på HTML som skjelettet som gir struktur til nettsider – det definerer hvor innholdet skal plasseres, hvordan det er organisert, og hva hver del representerer. Mens CSS senere vil "kle opp" HTML-en din med farger og oppsett, og JavaScript vil gi den liv med interaktivitet, gir HTML den essensielle strukturen som gjør alt annet mulig.

I denne leksjonen skal du lage HTML-strukturen for et virtuelt terrarium-grensesnitt. Dette praktiske prosjektet vil lære deg grunnleggende HTML-konsepter mens du bygger noe visuelt engasjerende. Du vil lære hvordan du organiserer innhold ved hjelp av semantiske elementer, jobber med bilder, og lager grunnlaget for en interaktiv webapplikasjon.

Ved slutten av denne leksjonen vil du ha en fungerende HTML-side som viser plantebilder i organiserte kolonner, klar for styling i neste leksjon. Ikke bekymre deg hvis det ser enkelt ut i starten – det er akkurat slik HTML skal være før CSS legger til den visuelle finishen.

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Se og lær**: Sjekk ut denne nyttige videooversikten
> 
> [![HTML Grunnleggende Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Sette opp prosjektet ditt

Før vi dykker inn i HTML-koden, la oss sette opp et ordentlig arbeidsområde for terrarium-prosjektet ditt. Å lage en organisert filstruktur fra starten av er en viktig vane som vil være nyttig gjennom hele din webutviklingsreise.

### Oppgave: Lag prosjektstrukturen din

Du skal lage en dedikert mappe for terrarium-prosjektet ditt og legge til din første HTML-fil. Her er to tilnærminger du kan bruke:

**Alternativ 1: Bruke Visual Studio Code**
1. Åpne Visual Studio Code
2. Klikk "File" → "Open Folder" eller bruk `Ctrl+K, Ctrl+O` (Windows/Linux) eller `Cmd+K, Cmd+O` (Mac)
3. Lag en ny mappe kalt `terrarium` og velg den
4. I Explorer-panelet, klikk på "New File"-ikonet
5. Navngi filen din `index.html`

![VS Code Explorer viser opprettelse av ny fil](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.no.png)

**Alternativ 2: Bruke terminalkommandoer**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Dette oppnår disse kommandoene:**
- **Oppretter** en ny katalog kalt `terrarium` for prosjektet ditt
- **Navigerer** inn i terrarium-katalogen 
- **Oppretter** en tom `index.html`-fil
- **Åpner** filen i Visual Studio Code for redigering

> 💡 **Proff-tips**: Filnavnet `index.html` er spesielt i webutvikling. Når noen besøker et nettsted, ser nettlesere automatisk etter `index.html` som standard siden som skal vises. Dette betyr at en URL som `https://mysite.com/projects/` automatisk vil vise `index.html`-filen fra `projects`-mappen uten å måtte spesifisere filnavnet i URL-en.

## Forstå HTML-dokumentstruktur

Hvert HTML-dokument følger en spesifikk struktur som nettlesere trenger for å forstå og vise korrekt. Tenk på denne strukturen som et formelt brev – det har nødvendige elementer i en bestemt rekkefølge som hjelper mottakeren (i dette tilfellet nettleseren) med å prosessere innholdet riktig.

La oss starte med å legge til det essensielle fundamentet som hvert HTML-dokument trenger.

### DOCTYPE-deklarasjon og rootelement

De to første linjene i en HTML-fil fungerer som dokumentets "introduksjon" til nettleseren:

```html
<!DOCTYPE html>
<html></html>
```

**Forstå hva denne koden gjør:**
- **Deklarerer** dokumenttypen som HTML5 ved å bruke `<!DOCTYPE html>`
- **Oppretter** rootelementet `<html>` som vil inneholde alt sideinnhold
- **Etablerer** moderne webstandarder for korrekt nettleservisning
- **Sikrer** konsistent visning på tvers av forskjellige nettlesere og enheter

> 💡 **VS Code-tips**: Hold musepekeren over en HTML-tag i VS Code for å se nyttig informasjon fra MDN Web Docs, inkludert eksempler på bruk og nettleserkompatibilitet.

> 📚 **Lær mer**: DOCTYPE-deklarasjonen forhindrer nettlesere fra å gå inn i "quirks mode", som ble brukt for å støtte veldig gamle nettsteder. Moderne webutvikling bruker den enkle `<!DOCTYPE html>`-deklarasjonen for å sikre [standardkompatibel visning](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Legge til essensiell dokumentmetadata

`<head>`-seksjonen i et HTML-dokument inneholder viktig informasjon som nettlesere og søkemotorer trenger, men som besøkende ikke ser direkte på siden. Tenk på det som "bak kulissene"-informasjon som hjelper nettsiden din med å fungere riktig og vises korrekt på tvers av forskjellige enheter og plattformer.

Denne metadataen forteller nettlesere hvordan de skal vise siden din, hvilken tegnkoding som skal brukes, og hvordan de skal håndtere forskjellige skjermstørrelser – alt essensielt for å lage profesjonelle, tilgjengelige nettsider.

### Oppgave: Legg til dokumenthodet

Sett inn denne `<head>`-seksjonen mellom dine åpne og lukkede `<html>`-tagger:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Bryte ned hva hvert element oppnår:**
- **Setter** sidetittelen som vises i nettleserfaner og søkeresultater
- **Spesifiserer** UTF-8 tegnkoding for korrekt tekstvisning over hele verden
- **Sikrer** kompatibilitet med moderne versjoner av Internet Explorer
- **Konfigurerer** responsivt design ved å sette viewport til å matche enhetens bredde
- **Kontrollerer** startzoomnivå for å vise innhold i naturlig størrelse

> 🤔 **Tenk på dette**: Hva ville skje hvis du satte en viewport meta-tag som dette: `<meta name="viewport" content="width=600">`? Dette ville tvinge siden til alltid å være 600 piksler bred, og bryte responsivt design! Lær mer om [korrekt viewport-konfigurasjon](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Bygge dokumentets kropp

`<body>`-elementet inneholder alt synlig innhold på nettsiden din – alt brukerne vil se og samhandle med. Mens `<head>`-seksjonen ga instruksjoner til nettleseren, inneholder `<body>`-seksjonen det faktiske innholdet: tekst, bilder, knapper og andre elementer som skaper brukergrensesnittet ditt.

La oss legge til kroppstrukturen og forstå hvordan HTML-tagger fungerer sammen for å lage meningsfylt innhold.

### Forstå HTML-tagstruktur

HTML bruker parvise tagger for å definere elementer. De fleste tagger har en åpningstag som `<p>` og en lukkingstag som `</p>`, med innhold imellom: `<p>Hei, verden!</p>`. Dette skaper et avsnittselement som inneholder teksten "Hei, verden!".

### Oppgave: Legg til body-elementet

Oppdater HTML-filen din for å inkludere `<body>`-elementet:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Her er hva denne komplette strukturen gir:**
- **Etablerer** det grunnleggende HTML5-dokumentrammeverket
- **Inkluderer** essensiell metadata for korrekt nettleservisning
- **Oppretter** en tom kropp klar for ditt synlige innhold
- **Følger** moderne webutviklings beste praksis

Nå er du klar til å legge til de synlige elementene i terrariet ditt. Vi vil bruke `<div>`-elementer som beholdere for å organisere forskjellige seksjoner av innholdet, og `<img>`-elementer for å vise plantebildene.

### Arbeide med bilder og layoutbeholdere

Bilder er spesielle i HTML fordi de bruker "selvlukkende" tagger. I motsetning til elementer som `<p></p>` som omslutter innhold, inneholder `<img>`-taggen all informasjon den trenger innenfor selve taggen ved hjelp av attributter som `src` for bildefilstien og `alt` for tilgjengelighet.

Før du legger til bilder i HTML-en din, må du organisere prosjektfilene dine riktig ved å opprette en bildemappe og legge til plantegrafikken.

**Først, sett opp bildene dine:**
1. Opprett en mappe kalt `images` inne i terrarium-prosjektmappen din
2. Last ned plantebildene fra [løsningsmappen](../../../../3-terrarium/solution/images) (14 plantebilder totalt)
3. Kopier alle plantebildene inn i den nye `images`-mappen din

### Oppgave: Lag plantevisningslayouten

Legg nå til plantebildene organisert i to kolonner mellom `<body></body>`-taggene dine:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.no.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.no.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.no.png" />
		</div>
	</div>
</div>
```

**Steg for steg, her er hva som skjer i denne koden:**
- **Oppretter** en hovedsidebeholder med `id="page"` for å holde alt innhold
- **Etablerer** to kolonnebeholdere: `left-container` og `right-container`
- **Organiserer** 7 planter i venstre kolonne og 7 planter i høyre kolonne
- **Omslutter** hvert plantebilde i en `plant-holder` div for individuell plassering
- **Bruker** konsistente klassenavn for CSS-styling i neste leksjon
- **Tildeler** unike ID-er til hvert plantebilde for senere interaksjon med JavaScript
- **Inkluderer** riktige filstier som peker til bildemappen

> 🤔 **Tenk på dette**: Legg merke til at alle bilder for øyeblikket har samme alt-tekst "plant". Dette er ikke ideelt for tilgjengelighet. Brukere av skjermlesere vil høre "plant" gjentatt 14 ganger uten å vite hvilken spesifikk plante hvert bilde viser. Kan du komme på bedre, mer beskrivende alt-tekst for hvert bilde?

> 📝 **HTML-elementtyper**: `<div>`-elementer er "blokknivå" og tar opp full bredde, mens `<span>`-elementer er "inline" og tar bare opp nødvendig bredde. Hva tror du ville skje hvis du endret alle disse `<div>`-taggene til `<span>`-tagger?

Med denne markeringen lagt til, vil plantene vises på skjermen, selv om de ikke ser polerte ut ennå – det er det CSS er til for i neste leksjon! For nå har du et solid HTML-grunnlag som organiserer innholdet ditt riktig og følger beste praksis for tilgjengelighet.

## Bruke semantisk HTML for tilgjengelighet

Semantisk HTML betyr å velge HTML-elementer basert på deres betydning og formål, ikke bare deres utseende. Når du bruker semantisk markering, kommuniserer du strukturen og betydningen av innholdet ditt til nettlesere, søkemotorer og hjelpemidler som skjermlesere.

Denne tilnærmingen gjør nettstedene dine mer tilgjengelige for brukere med funksjonshemninger og hjelper søkemotorer med å forstå innholdet ditt bedre. Det er et grunnleggende prinsipp for moderne webutvikling som skaper bedre opplevelser for alle.

### Legge til en semantisk sidetittel

La oss legge til en ordentlig overskrift på terrariumsiden din. Sett inn denne linjen rett etter den åpne `<body>`-taggen:

```html
<h1>My Terrarium</h1>
```

**Hvorfor semantisk markering er viktig:**
- **Hjelper** skjermlesere med å navigere og forstå sidestrukturen
- **Forbedrer** søkemotoroptimalisering (SEO) ved å klargjøre innholdshierarkiet
- **Øker** tilgjengeligheten for brukere med synshemninger eller kognitive forskjeller
- **Skaper** bedre brukeropplevelser på tvers av alle enheter og plattformer
- **Følger** webstandarder og beste praksis for profesjonell utvikling

**Eksempler på semantiske vs. ikke-semantiske valg:**

| Formål | ✅ Semantisk valg | ❌ Ikke-semantisk valg |
|--------|------------------|-----------------------|
| Hovedoverskrift | `<h1>Tittel</h1>` | `<div class="big-text">Tittel</div>` |
| Navigasjon | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Knapp | `<button>Klikk her</button>` | `<span onclick="...">Klikk her</span>` |
| Artikkelinnhold | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Se det i aksjon**: Se [hvordan skjermlesere interagerer med nettsider](https://www.youtube.com/watch?v=OUDV1gqs9GA) for å forstå hvorfor semantisk markering er avgjørende for tilgjengelighet. Legg merke til hvordan korrekt HTML-struktur hjelper brukere med å navigere effektivt.

## Lage terrarium-beholderen

La oss nå legge til HTML-strukturen for selve terrariet – glassbeholderen der plantene til slutt vil bli plassert. Denne delen demonstrerer et viktig konsept: HTML gir struktur, men uten CSS-styling vil disse elementene ikke være synlige ennå.

Terrarium-markeringen bruker beskrivende klassenavn som vil gjøre CSS-styling intuitiv og vedlikeholdbar i neste leksjon.

### Oppgave: Legg til terrarium-strukturen

Sett inn denne markeringen over den siste `</div>`-taggen (før den lukkende taggen til sidebeholderen):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Forstå denne terrarium-strukturen:**
- **Oppretter** en hovedterrarium-beholder med en unik ID for styling
- **Definerer** separate elementer for hver visuell komponent (topp, vegger, jord, bunn)
- **Inkluderer** nestede elementer for glasseffekter (glansfulle elementer)
- **Bruker** beskrivende klassenavn som tydelig indikerer hvert elements formål
- **Forbereder** strukturen for CSS-styling som vil skape glass-terrarium-utseendet

> 🤔 **Legg merke til noe?**: Selv om du la til denne markeringen, ser du ikke noe nytt på siden! Dette illustrerer perfekt hvordan HTML gir struktur mens CSS gir utseende. Disse `<div>`-elementene eksisterer, men har ingen visuell styling ennå – det kommer i neste leksjon!

---

## GitHub Copilot Agent-utfordring

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Lag en semantisk HTML-struktur for en plantepleieveiledning som kan legges til terrarium-prosjektet.
**Prompt:** Lag en semantisk HTML-seksjon som inkluderer en hovedoverskrift "Plant Care Guide", tre underseksjoner med overskriftene "Watering", "Light Requirements" og "Soil Care", hver med et avsnitt med informasjon om plantepleie. Bruk riktige semantiske HTML-tagger som `<section>`, `<h2>`, `<h3>` og `<p>` for å strukturere innholdet på en passende måte.

Lær mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## Utforsk HTML-historieutfordring

**Lær om webutviklingens evolusjon**

HTML har utviklet seg betydelig siden Tim Berners-Lee skapte den første nettleseren ved CERN i 1990. Noen eldre tagger som `<marquee>` er nå avviklet fordi de ikke fungerer godt med moderne tilgjengelighetsstandarder og prinsipper for responsiv design.

**Prøv dette eksperimentet:**
1. Pakk midlertidig inn din `<h1>`-tittel i en `<marquee>`-tag: `<marquee><h1>My Terrarium</h1></marquee>`
2. Åpne siden din i en nettleser og observer rulleffekten
3. Reflekter over hvorfor denne taggen ble avviklet (hint: tenk på brukeropplevelse og tilgjengelighet)
4. Fjern `<marquee>`-taggen og gå tilbake til semantisk oppmerking

**Refleksjonsspørsmål:**
- Hvordan kan en rullende tittel påvirke brukere med synshemming eller følsomhet for bevegelse?
- Hvilke moderne CSS-teknikker kan oppnå lignende visuelle effekter på en mer tilgjengelig måte?
- Hvorfor er det viktig å bruke gjeldende webstandarder i stedet for avviklede elementer?

Utforsk mer om [utgåtte og avviklede HTML-elementer](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) for å forstå hvordan webstandarder utvikler seg for å forbedre brukeropplevelsen.


## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/16)

## Gjennomgang og selvstudium

**Fordyp deg i HTML-kunnskap**

HTML har vært grunnlaget for nettet i over 30 år, og har utviklet seg fra et enkelt dokumentmarkeringsspråk til en sofistikert plattform for å bygge interaktive applikasjoner. Å forstå denne utviklingen hjelper deg med å sette pris på moderne webstandarder og ta bedre utviklingsbeslutninger.

**Anbefalte læringsveier:**

1. **HTML-historie og evolusjon**
   - Undersøk tidslinjen fra HTML 1.0 til HTML5
   - Utforsk hvorfor visse tagger ble avviklet (tilgjengelighet, mobilvennlighet, vedlikeholdbarhet)
   - Undersøk nye HTML-funksjoner og forslag

2. **Dypdykk i semantisk HTML**
   - Studer den komplette listen over [HTML5 semantiske elementer](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Øv på å identifisere når du skal bruke `<article>`, `<section>`, `<aside>` og `<main>`
   - Lær om ARIA-attributter for forbedret tilgjengelighet

3. **Moderne webutvikling**
   - Utforsk [bygging av responsive nettsteder](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) på Microsoft Learn
   - Forstå hvordan HTML integreres med CSS og JavaScript
   - Lær om webytelse og SEO beste praksis

**Refleksjonsspørsmål:**
- Hvilke avviklede HTML-tagger oppdaget du, og hvorfor ble de fjernet?
- Hvilke nye HTML-funksjoner blir foreslått for fremtidige versjoner?
- Hvordan bidrar semantisk HTML til webtilgjengelighet og SEO?


## Oppgave

[Øv på HTML: Bygg en bloggmockup](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.