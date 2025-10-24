<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-23T22:03:58+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "da"
}
-->
# Terrarium Projekt Del 1: Introduktion til HTML

![Introduktion til HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, eller HyperText Markup Language, er fundamentet for alle hjemmesider, du nogensinde har besøgt. Tænk på HTML som skelettet, der giver struktur til websider – det definerer, hvor indholdet skal placeres, hvordan det er organiseret, og hvad hver del repræsenterer. Mens CSS senere vil "klæde" din HTML med farver og layout, og JavaScript vil bringe det til live med interaktivitet, giver HTML den essentielle struktur, der gør alt andet muligt.

I denne lektion vil du oprette HTML-strukturen til en virtuel terrarium-grænseflade. Dette praktiske projekt vil lære dig grundlæggende HTML-koncepter, mens du bygger noget visuelt engagerende. Du vil lære, hvordan man organiserer indhold ved hjælp af semantiske elementer, arbejder med billeder og skaber fundamentet for en interaktiv webapplikation.

Ved slutningen af denne lektion vil du have en fungerende HTML-side, der viser plantebilleder i organiserede kolonner, klar til styling i næste lektion. Bare rolig, hvis det ser enkelt ud i starten – det er præcis, hvad HTML skal gøre, før CSS tilføjer den visuelle finish.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Se og lær**: Tjek denne nyttige videooversigt
> 
> [![HTML Fundamentals Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Opsætning af dit projekt

Før vi dykker ned i HTML-koden, lad os oprette et ordentligt arbejdsområde til dit terrarium-projekt. At skabe en organiseret filstruktur fra starten er en vigtig vane, der vil gavne dig gennem hele din webudviklingsrejse.

### Opgave: Opret din projektstruktur

Du vil oprette en dedikeret mappe til dit terrarium-projekt og tilføje din første HTML-fil. Her er to metoder, du kan bruge:

**Mulighed 1: Brug af Visual Studio Code**
1. Åbn Visual Studio Code
2. Klik på "File" → "Open Folder" eller brug `Ctrl+K, Ctrl+O` (Windows/Linux) eller `Cmd+K, Cmd+O` (Mac)
3. Opret en ny mappe kaldet `terrarium` og vælg den
4. I Explorer-panelet skal du klikke på ikonet "New File"
5. Navngiv din fil `index.html`

![VS Code Explorer viser oprettelse af ny fil](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.da.png)

**Mulighed 2: Brug af terminalkommandoer**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Her er, hvad disse kommandoer gør:**
- **Opretter** en ny mappe kaldet `terrarium` til dit projekt
- **Navigerer** ind i terrarium-mappen 
- **Opretter** en tom `index.html`-fil
- **Åbner** filen i Visual Studio Code til redigering

> 💡 **Pro Tip**: Filnavnet `index.html` er specielt i webudvikling. Når nogen besøger en hjemmeside, leder browsere automatisk efter `index.html` som standard-siden, der skal vises. Det betyder, at en URL som `https://mysite.com/projects/` automatisk vil vise `index.html`-filen fra `projects`-mappen uden at skulle angive filnavnet i URL'en.

## Forstå HTML-dokumentstruktur

Hvert HTML-dokument følger en specifik struktur, som browsere skal forstå og vise korrekt. Tænk på denne struktur som et formelt brev – det har nødvendige elementer i en bestemt rækkefølge, der hjælper modtageren (i dette tilfælde browseren) med at behandle indholdet korrekt.

Lad os starte med at tilføje det essentielle fundament, som hvert HTML-dokument har brug for.

### DOCTYPE-deklarationen og roden

De første to linjer i enhver HTML-fil fungerer som dokumentets "introduktion" til browseren:

```html
<!DOCTYPE html>
<html></html>
```

**Forstå, hvad denne kode gør:**
- **Deklarerer** dokumenttypen som HTML5 ved hjælp af `<!DOCTYPE html>`
- **Opretter** rod-elementet `<html>`, der vil indeholde alt sideindhold
- **Etablerer** moderne webstandarder for korrekt browsergengivelse
- **Sikrer** ensartet visning på tværs af forskellige browsere og enheder

> 💡 **VS Code Tip**: Hold musen over ethvert HTML-tag i VS Code for at se nyttige oplysninger fra MDN Web Docs, inklusive eksempler på brug og browserkompatibilitet.

> 📚 **Lær mere**: DOCTYPE-deklarationen forhindrer browsere i at gå ind i "quirks mode", som blev brugt til at understøtte meget gamle hjemmesider. Moderne webudvikling bruger den enkle `<!DOCTYPE html>`-deklaration for at sikre [standards-kompatibel rendering](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Tilføjelse af essentiel dokumentmetadata

Sektionen `<head>` i et HTML-dokument indeholder vigtig information, som browsere og søgemaskiner har brug for, men som besøgende ikke ser direkte på siden. Tænk på det som "bag kulisserne"-information, der hjælper din webside med at fungere korrekt og vises korrekt på tværs af forskellige enheder og platforme.

Denne metadata fortæller browsere, hvordan de skal vise din side, hvilken tegnkodning der skal bruges, og hvordan de skal håndtere forskellige skærmstørrelser – alt sammen essentielt for at skabe professionelle, tilgængelige websider.

### Opgave: Tilføj dokumentets hoved

Indsæt denne `<head>`-sektion mellem dine åbning og lukning `<html>`-tags:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Gennemgang af, hvad hvert element gør:**
- **Indstiller** sidens titel, der vises i browserfaner og søgeresultater
- **Angiver** UTF-8 tegnkodning for korrekt tekstvisning verden over
- **Sikrer** kompatibilitet med moderne versioner af Internet Explorer
- **Konfigurerer** responsivt design ved at indstille viewport til at matche enhedens bredde
- **Kontrollerer** initial zoom-niveau for at vise indhold i naturlig størrelse

> 🤔 **Tænk over dette**: Hvad ville der ske, hvis du indstillede en viewport meta-tag som denne: `<meta name="viewport" content="width=600">`? Dette ville tvinge siden til altid at være 600 pixels bred, hvilket ville ødelægge responsivt design! Lær mere om [korrekt viewport-konfiguration](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Opbygning af dokumentets krop

Elementet `<body>` indeholder alt det synlige indhold på din webside – alt, hvad brugerne vil se og interagere med. Mens sektionen `<head>` gav instruktioner til browseren, indeholder sektionen `<body>` det faktiske indhold: tekst, billeder, knapper og andre elementer, der skaber din brugergrænseflade.

Lad os tilføje kropsstrukturen og forstå, hvordan HTML-tags arbejder sammen for at skabe meningsfuldt indhold.

### Forstå HTML-tagstruktur

HTML bruger parrede tags til at definere elementer. De fleste tags har et åbningstag som `<p>` og et lukningstag som `</p>`, med indhold imellem: `<p>Hello, world!</p>`. Dette skaber et afsnitselement, der indeholder teksten "Hello, world!".

### Opgave: Tilføj kropselementet

Opdater din HTML-fil for at inkludere elementet `<body>`:

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

**Her er, hvad denne komplette struktur giver:**
- **Etablerer** den grundlæggende HTML5-dokumentramme
- **Inkluderer** essentiel metadata for korrekt browsergengivelse
- **Opretter** en tom krop klar til dit synlige indhold
- **Følger** moderne webudviklings bedste praksis

Nu er du klar til at tilføje de synlige elementer i dit terrarium. Vi vil bruge `<div>`-elementer som beholdere til at organisere forskellige sektioner af indhold og `<img>`-elementer til at vise plantebilleder.

### Arbejde med billeder og layoutbeholdere

Billeder er specielle i HTML, fordi de bruger "selvlukkende" tags. I modsætning til elementer som `<p></p>`, der omslutter indhold, indeholder `<img>`-tagget alle de oplysninger, det har brug for, inden for selve tagget ved hjælp af attributter som `src` til billedfilens sti og `alt` for tilgængelighed.

Før du tilføjer billeder til din HTML, skal du organisere dine projektfiler korrekt ved at oprette en billedmappe og tilføje plantegrafikken.

**Først skal du opsætte dine billeder:**
1. Opret en mappe kaldet `images` inde i din terrarium-projektmappe
2. Download plantebillederne fra [løsningsmappen](../../../../3-terrarium/solution/images) (14 plantebilleder i alt)
3. Kopier alle plantebillederne ind i din nye `images`-mappe

### Opgave: Opret plantevisningslayoutet

Tilføj nu plantebillederne organiseret i to kolonner mellem dine `<body></body>`-tags:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.da.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.da.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.da.png" />
		</div>
	</div>
</div>
```

**Trin for trin, her er hvad der sker i denne kode:**
- **Opretter** en hovedsidebeholder med `id="page"` til at holde alt indhold
- **Etablerer** to kolonnebeholdere: `left-container` og `right-container`
- **Organiserer** 7 planter i venstre kolonne og 7 planter i højre kolonne
- **Omslutter** hvert plantebillede i en `plant-holder` div for individuel positionering
- **Anvender** konsistente klassenavne til CSS-styling i næste lektion
- **Tildeler** unikke ID'er til hvert plantebillede for JavaScript-interaktion senere
- **Inkluderer** korrekte filstier, der peger på billedmappen

> 🤔 **Overvej dette**: Bemærk, at alle billeder i øjeblikket har den samme alt-tekst "plant". Dette er ikke ideelt for tilgængelighed. Brugere af skærmlæsere ville høre "plant" gentaget 14 gange uden at vide, hvilken specifik plante hvert billede viser. Kan du tænke på bedre, mere beskrivende alt-tekst for hvert billede?

> 📝 **HTML-elementtyper**: `<div>`-elementer er "blokniveau" og optager fuld bredde, mens `<span>`-elementer er "inline" og kun optager nødvendig bredde. Hvad tror du, der ville ske, hvis du ændrede alle disse `<div>`-tags til `<span>`-tags?

Med denne markup tilføjet vil planterne vises på skærmen, selvom de endnu ikke ser polerede ud – det er det, CSS er til i næste lektion! For nu har du et solidt HTML-fundament, der organiserer dit indhold korrekt og følger bedste praksis for tilgængelighed.

## Brug af semantisk HTML for tilgængelighed

Semantisk HTML betyder at vælge HTML-elementer baseret på deres betydning og formål, ikke kun deres udseende. Når du bruger semantisk markup, kommunikerer du strukturen og betydningen af dit indhold til browsere, søgemaskiner og hjælpemidler som skærmlæsere.

Denne tilgang gør dine hjemmesider mere tilgængelige for brugere med handicap og hjælper søgemaskiner med bedre at forstå dit indhold. Det er et grundlæggende princip for moderne webudvikling, der skaber bedre oplevelser for alle.

### Tilføjelse af en semantisk sidetitel

Lad os tilføje en ordentlig overskrift til din terrarium-side. Indsæt denne linje lige efter dit åbningstag `<body>`:

```html
<h1>My Terrarium</h1>
```

**Hvorfor semantisk markup er vigtig:**
- **Hjælper** skærmlæsere med at navigere og forstå sidestruktur
- **Forbedrer** søgemaskineoptimering (SEO) ved at tydeliggøre indholdshierarki
- **Øger** tilgængeligheden for brugere med synshandicap eller kognitive forskelle
- **Skaber** bedre brugeroplevelser på tværs af alle enheder og platforme
- **Følger** webstandarder og bedste praksis for professionel udvikling

**Eksempler på semantiske vs. ikke-semantiske valg:**

| Formål | ✅ Semantisk valg | ❌ Ikke-semantisk valg |
|---------|-------------------|------------------------|
| Hovedoverskrift | `<h1>Title</h1>` | `<div class="big-text">Title</div>` |
| Navigation | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Knap | `<button>Click me</button>` | `<span onclick="...">Click me</span>` |
| Artikelindhold | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Se det i aktion**: Se [hvordan skærmlæsere interagerer med websider](https://www.youtube.com/watch?v=OUDV1gqs9GA) for at forstå, hvorfor semantisk markup er afgørende for tilgængelighed. Bemærk, hvordan korrekt HTML-struktur hjælper brugere med at navigere effektivt.

## Oprettelse af terrarium-beholderen

Lad os nu tilføje HTML-strukturen til selve terrariet – glasbeholderen, hvor planter senere vil blive placeret. Denne sektion demonstrerer et vigtigt koncept: HTML giver struktur, men uden CSS-styling vil disse elementer endnu ikke være synlige.

Terrarium-markupen bruger beskrivende klassenavne, der vil gøre CSS-styling intuitiv og vedligeholdelsesvenlig i næste lektion.

### Opgave: Tilføj terrarium-strukturen

Indsæt denne markup over det sidste `</div>`-tag (før lukningstaget for sidebeholderen):

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

**Forstå denne terrarium-struktur:**
- **Opretter** en hovedterrarium-beholder med et unikt ID til styling
- **Definerer** separate elementer for hver visuel komponent (top, vægge, jord, bund)
- **Inkluderer** indlejrede elementer for glaseffekter (glossy elementer)
- **Bruger** beskrivende klassenavne, der tydeligt angiver hvert elements formål
- **Forbereder** strukturen til CSS-styling, der vil skabe glas-terrarium-udseendet

> 🤔 **Bemærk noget?**: Selvom du har tilføjet denne markup, ser du ikke noget nyt på siden! Dette illustrerer perfekt, hvordan HTML giver struktur, mens CSS giver udseende. Disse `<div>`-elementer eksisterer, men har endnu ingen visuel styling – det kommer i næste lektion!

---

## GitHub Copilot Agent Udfordring

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Opret en semantisk HTML-struktur til en planteplejevejledning, der kunne tilføjes til terrarium-projektet.
**Prompt:** Opret en semantisk HTML-sektion, der inkluderer en hovedoverskrift "Guide til plantepleje", tre underafsnit med overskrifterne "Vanding", "Lyskrav" og "Jordpleje", hver med et afsnit om planteplejeinformation. Brug korrekte semantiske HTML-tags som `<section>`, `<h2>`, `<h3>` og `<p>` til at strukturere indholdet korrekt.

Lær mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## Udforsk HTML-historieudfordring

**Lær om webudviklingens historie**

HTML har udviklet sig markant, siden Tim Berners-Lee skabte den første webbrowser på CERN i 1990. Nogle ældre tags som `<marquee>` er nu forældede, fordi de ikke fungerer godt med moderne tilgængelighedsstandarder og principper for responsivt design.

**Prøv dette eksperiment:**
1. Indpak midlertidigt din `<h1>` titel i et `<marquee>` tag: `<marquee><h1>Mit terrarium</h1></marquee>`
2. Åbn din side i en browser og observer den rullende effekt
3. Overvej, hvorfor dette tag blev forældet (hint: tænk på brugeroplevelse og tilgængelighed)
4. Fjern `<marquee>` tagget og vend tilbage til semantisk markup

**Refleksionsspørgsmål:**
- Hvordan kan en rullende titel påvirke brugere med synshandicap eller følsomhed over for bevægelse?
- Hvilke moderne CSS-teknikker kan opnå lignende visuelle effekter mere tilgængeligt?
- Hvorfor er det vigtigt at bruge aktuelle webstandarder i stedet for forældede elementer?

Udforsk mere om [forældede og udgåede HTML-elementer](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) for at forstå, hvordan webstandarder udvikler sig for at forbedre brugeroplevelsen.


## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/16)

## Gennemgang & Selvstudie

**Uddyb din HTML-viden**

HTML har været fundamentet for internettet i over 30 år og har udviklet sig fra et simpelt dokumentmærkningssprog til en sofistikeret platform til opbygning af interaktive applikationer. At forstå denne udvikling hjælper dig med at værdsætte moderne webstandarder og træffe bedre udviklingsbeslutninger.

**Anbefalede læringsveje:**

1. **HTML-historie og udvikling**
   - Undersøg tidslinjen fra HTML 1.0 til HTML5
   - Udforsk, hvorfor visse tags blev forældede (tilgængelighed, mobilvenlighed, vedligeholdelse)
   - Undersøg nye HTML-funktioner og forslag

2. **Dybdegående semantisk HTML**
   - Studér den komplette liste over [HTML5 semantiske elementer](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Øv dig i at identificere, hvornår du skal bruge `<article>`, `<section>`, `<aside>` og `<main>`
   - Lær om ARIA-attributter for forbedret tilgængelighed

3. **Moderne webudvikling**
   - Udforsk [opbygning af responsive websites](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) på Microsoft Learn
   - Forstå, hvordan HTML integreres med CSS og JavaScript
   - Lær om webperformance og SEO bedste praksis

**Refleksionsspørgsmål:**
- Hvilke forældede HTML-tags opdagede du, og hvorfor blev de fjernet?
- Hvilke nye HTML-funktioner bliver foreslået til fremtidige versioner?
- Hvordan bidrager semantisk HTML til webtilgængelighed og SEO?


## Opgave

[Øv dig i HTML: Byg en blogmockup](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.