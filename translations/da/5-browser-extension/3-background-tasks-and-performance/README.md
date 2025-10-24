<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-23T22:12:59+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "da"
}
-->
# Browserudvidelsesprojekt del 3: Lær om baggrundsopgaver og ydeevne

Har du nogensinde undret dig over, hvad der gør nogle browserudvidelser hurtige og responsive, mens andre virker langsomme? Hemmeligheden ligger i, hvad der sker bag kulisserne. Mens brugerne klikker rundt i din udvidelses grænseflade, er der en hel verden af baggrundsprocesser, der stille og roligt håndterer datahentning, ikonopdateringer og systemressourcer.

Dette er vores sidste lektion i browserudvidelses-serien, og vi vil gøre din CO2-fodaftryk-tracker mere effektiv. Du vil tilføje dynamiske ikonopdateringer og lære, hvordan du opdager ydeevneproblemer, før de bliver til reelle udfordringer. Det er som at finjustere en racerbil - små optimeringer kan gøre en stor forskel i, hvordan alt fungerer.

Når vi er færdige, vil du have en poleret udvidelse og forstå de ydeevneprincipper, der adskiller gode webapps fra fantastiske. Lad os dykke ned i browseroptimeringens verden.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduktion

I vores tidligere lektioner har du bygget en formular, forbundet den til en API og arbejdet med asynkron datahentning. Din udvidelse tager form på en flot måde.

Nu skal vi tilføje de sidste detaljer - som at få udvidelsesikonet til at skifte farve baseret på CO2-dataene. Det minder mig om, hvordan NASA måtte optimere hvert system på Apollo-rumfartøjet. De kunne ikke tillade sig at spilde cyklusser eller hukommelse, fordi liv afhængede af ydeevnen. Selvom vores browserudvidelse ikke er helt så kritisk, gælder de samme principper - effektiv kode skaber bedre brugeroplevelser.

## Grundlæggende om webydeevne

Når din kode kører effektivt, kan folk faktisk *mærke* forskellen. Du kender det øjeblik, hvor en side indlæses med det samme, eller en animation flyder glat? Det er god ydeevne i aktion.

Ydeevne handler ikke kun om hastighed - det handler om at skabe weboplevelser, der føles naturlige i stedet for klodsede og frustrerende. Tilbage i computerens tidlige dage havde Grace Hopper berømt en nanosekund (et stykke ledning omkring en fod lang) på sit skrivebord for at vise, hvor langt lys rejser på en milliardtedel af et sekund. Det var hendes måde at forklare, hvorfor hver mikrosekund betyder noget i computing. Lad os udforske de værktøjer, der hjælper dig med at finde ud af, hvad der sænker farten.

> "Webside-ydeevne handler om to ting: hvor hurtigt siden indlæses, og hvor hurtigt koden på den kører." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Emnet om, hvordan man gør sine websites lynhurtige på alle slags enheder, for alle slags brugere, i alle slags situationer, er naturligvis omfattende. Her er nogle punkter at huske på, når du bygger enten et standard webprojekt eller en browserudvidelse.

Det første skridt i at optimere dit site er at forstå, hvad der faktisk sker bag kulisserne. Heldigvis har din browser kraftfulde værktøjer indbygget.

For at åbne Developer Tools i Edge skal du klikke på de tre prikker øverst til højre, derefter gå til Flere værktøjer > Developer Tools. Eller brug tastaturgenvejen: `Ctrl` + `Shift` + `I` på Windows eller `Option` + `Command` + `I` på Mac. Når du er der, skal du klikke på fanen Ydeevne - det er her, du vil foretage din undersøgelse.

**Her er dit ydeevne-detektion værktøj:**
- **Åbn** Developer Tools (du vil bruge dem konstant som udvikler!)
- **Gå til** fanen Ydeevne - tænk på det som din webapps fitness tracker
- **Tryk på** optageknappen og se din side i aktion
- **Undersøg** resultaterne for at finde ud af, hvad der sænker farten

Lad os prøve dette. Åbn en hjemmeside (Microsoft.com fungerer godt til dette) og klik på 'Optag'-knappen. Opdater nu siden og se profileringsværktøjet fange alt, hvad der sker. Når du stopper optagelsen, vil du se en detaljeret oversigt over, hvordan browseren 'scriptede', 'renderede' og 'malede' siden. Det minder mig om, hvordan kontrolcenteret overvåger hvert system under en raketopsendelse - du får realtidsdata om præcis, hvad der sker og hvornår.

✅ [Microsoft Dokumentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) har masser af detaljer, hvis du vil dykke dybere.

> Pro tip: Ryd din browsercache før testning for at se, hvordan dit site performer for førstegangsbesøgende - det er normalt ret anderledes end gentagne besøg!

Vælg elementer på profilens tidslinje for at zoome ind på begivenheder, der sker, mens din side indlæses.

Få et øjebliksbillede af din sides ydeevne ved at vælge en del af profilens tidslinje og kigge på oversigtspanelet:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.da.png)

Tjek begivenhedslogpanelet for at se, om nogen begivenhed tog længere end 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.da.png)

✅ Lær din profiler at kende! Åbn udviklerværktøjerne på denne side og se, om der er nogen flaskehalse. Hvilken ressource tager længst tid at indlæse? Hvilken er hurtigst?

## Hvad skal man kigge efter, når man profilerer

At køre profileringsværktøjet er kun begyndelsen - den virkelige færdighed er at vide, hvad de farverige diagrammer faktisk fortæller dig. Bare rolig, du vil lære at læse dem. Erfarne udviklere har lært at spotte advarselstegn, før de bliver til fuldgyldige problemer.

Lad os tale om de sædvanlige mistænkte - de ydeevneproblemer, der har en tendens til at snige sig ind i webprojekter. Ligesom Marie Curie nøje måtte overvåge strålingsniveauer i sit laboratorium, skal vi holde øje med visse mønstre, der indikerer problemer under opsejling. At fange disse tidligt vil spare dig (og dine brugere) for en masse frustration.

**Filstørrelser**: Websites er blevet "tungere" gennem årene, og meget af den ekstra vægt kommer fra billeder. Det er som om, vi har fyldt mere og mere i vores digitale kufferter.

✅ Tjek [Internet Archive](https://httparchive.org/reports/page-weight) for at se, hvordan sidestørrelser er vokset over tid - det er ret afslørende.

**Sådan optimerer du dine filer:**
- **Komprimer** billederne! Moderne formater som WebP kan reducere filstørrelser dramatisk
- **Server** den rigtige billedstørrelse til hver enhed - der er ingen grund til at sende enorme desktopbilleder til telefoner
- **Minimer** din CSS og JavaScript - hver byte tæller
- **Brug** lazy loading, så billeder kun downloades, når brugerne faktisk ruller ned til dem

**DOM-gennemløb**: Browseren skal opbygge sin Document Object Model baseret på den kode, du skriver, så det er i god sideydeevnes interesse at holde dine tags minimale og kun bruge og style det, siden har brug for. For eksempel kan overskydende CSS, der er knyttet til en side, optimeres; stilarter, der kun skal bruges på én side, behøver ikke at være inkluderet i hovedstilarket.

**Nøglestrategier for DOM-optimering:**
- **Minimerer** antallet af HTML-elementer og indlejringsniveauer
- **Fjerner** ubrugte CSS-regler og konsoliderer stilark effektivt
- **Organiserer** CSS til kun at indlæse det, der er nødvendigt for hver side
- **Strukturerer** HTML semantisk for bedre browserparsing

**JavaScript**: Hver JavaScript-udvikler bør holde øje med 'render-blocking' scripts, der skal indlæses, før resten af DOM kan gennemløbes og males til browseren. Overvej at bruge `defer` med dine inline scripts (som det gøres i Terrarium-modulet).

**Moderne JavaScript-optimeringsteknikker:**
- **Bruger** attributten `defer` til at indlæse scripts efter DOM-parsing
- **Implementerer** kodeopdeling for kun at indlæse nødvendigt JavaScript
- **Anvender** lazy loading til ikke-kritisk funktionalitet
- **Minimerer** brugen af tunge biblioteker og frameworks, når det er muligt

✅ Prøv nogle websites på en [Site Speed Test website](https://www.webpagetest.org/) for at lære mere om de almindelige kontrolpunkter, der bruges til at bestemme sideydeevne.

Nu hvor du har en idé om, hvordan browseren gengiver de ressourcer, du sender til den, lad os se på de sidste ting, du skal gøre for at fuldføre din udvidelse:

### Opret en funktion til at beregne farve

Nu vil vi oprette en funktion, der omdanner numeriske data til meningsfulde farver. Tænk på det som et trafiklyssystem - grønt for ren energi, rødt for høj CO2-intensitet.

Denne funktion vil tage CO2-dataene fra vores API og bestemme, hvilken farve der bedst repræsenterer miljøpåvirkningen. Det er ligesom hvordan forskere bruger farvekodning i varmekort til at visualisere komplekse dataprofiler - fra havtemperaturer til stjernedannelse. Lad os tilføje dette til `/src/index.js`, lige efter de `const`-variabler, vi tidligere har oprettet:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Lad os bryde denne smarte lille funktion ned:**
- **Opsætter** to arrays - et for CO2-niveauer, et andet for farver (grøn = ren, brun = beskidt!)
- **Finder** det nærmeste match til vores faktiske CO2-værdi ved hjælp af smart array-sortering
- **Henter** den matchende farve ved hjælp af metoden findIndex()
- **Sender** en besked til Chromes baggrundsscript med den valgte farve
- **Bruger** template literals (de der backticks) for renere strengformatering
- **Holder** alt organiseret med const-deklarationer

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) er som nervesystemet i din udvidelse - det håndterer al baggrundskommunikation og opgaver:

> "Brug chrome.runtime API til at hente baggrundssiden, returnere detaljer om manifestet og lytte til og reagere på begivenheder i appens eller udvidelsens livscyklus. Du kan også bruge denne API til at konvertere relative URL-stier til fuldt kvalificerede URL'er."

**Hvorfor Chrome Runtime API er så praktisk:**
- **Lader** forskellige dele af din udvidelse tale med hinanden
- **Håndterer** baggrundsarbejde uden at fryse brugergrænsefladen
- **Administrerer** din udvidelses livscyklusbegivenheder
- **Gør** beskedudveksling mellem scripts super nemt

✅ Hvis du udvikler denne browserudvidelse til Edge, kan det overraske dig, at du bruger en Chrome API. De nyere Edge-browserversioner kører på Chromium-browsermotoren, så du kan drage fordel af disse værktøjer.

> **Pro Tip**: Hvis du vil profilere en browserudvidelse, skal du åbne udviklerværktøjerne inden for selve udvidelsen, da det er sin egen separate browserinstans. Dette giver dig adgang til udvidelsesspecifikke ydeevnemålinger.

### Sæt en standard ikonfarve

Før vi begynder at hente rigtige data, lad os give vores udvidelse et startpunkt. Ingen kan lide at stirre på et tomt eller ødelagt ikon. Vi starter med en grøn farve, så brugerne ved, at udvidelsen fungerer fra det øjeblik, de installerer den.

I din `init()`-funktion, lad os opsætte det standard grønne ikon:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Hvad denne initialisering opnår:**
- **Sætter** en neutral grøn farve som standardtilstand
- **Giver** øjeblikkelig visuel feedback, når udvidelsen indlæses
- **Etablerer** kommunikationsmønsteret med baggrundsscriptet
- **Sikrer** at brugerne ser en funktionel udvidelse, før data indlæses

### Kald funktionen, udfør kaldet

Nu skal vi forbinde det hele, så når friske CO2-data kommer ind, opdaterer dit ikon automatisk med den rigtige farve. Det er som at forbinde den sidste kreds i en elektronisk enhed - pludselig fungerer alle de individuelle komponenter som et system.

Tilføj denne linje lige efter, at du får CO2-dataene fra API'en:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Denne integration opnår:**
- **Forbinder** API-datastrømmen med det visuelle indikator-system
- **Udløser** ikonopdateringer automatisk, når nye data ankommer
- **Sikrer** realtids visuel feedback baseret på den aktuelle CO2-intensitet
- **Bevarer** adskillelsen af ansvar mellem datahentning og visuel logik

Og til sidst, i `/dist/background.js`, tilføj lytteren for disse baggrundsaktionskald:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Hvad dette baggrundsscript gør:**
- **Lytter** til beskeder fra dit hovedscript (som en receptionist, der tager imod opkald)
- **Behandler** disse 'updateIcon'-anmodninger for at ændre dit værktøjslinjeikon
- **Opretter** nye ikoner dynamisk ved hjælp af Canvas API
- **Tegner** en simpel farvet cirkel, der viser den aktuelle CO2-intensitet
- **Opdaterer** din browser-værktøjslinje med det nye ikon
- **Bruger** OffscreenCanvas for glat ydeevne (ingen UI-blokering)

✅ Du vil lære mere om Canvas API i [Space Game-lektionerne](../../6-space-game/2-drawing-to-canvas/README.md).

**Tid til at teste din udvidelse:**
- **Byg** alt med `npm run build`
- **Genindlæs** din udvidelse i browseren (glem ikke dette trin)
- **Åbn** din udvidelse og se ikonet skifte farve
- **Tjek** hvordan det reagerer på rigtige CO2-data fra hele verden

Nu vil du ved et øjekast vide, om det er et godt tidspunkt at vaske tøj, eller om du skal vente på renere energi. Du har lige bygget noget virkelig nyttigt og lært om browserens ydeevne undervejs.

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr browserudvidelsens ydeevneovervågningsfunktioner ved at tilføje en funktion, der sporer og viser indlæsningstider for forskellige komponenter i udvidelsen.

**Opgave:** Opret et ydeevneovervågningssystem for browserudvidelsen, der måler og logger den tid, det tager at hente CO2-data fra API'en, beregne farver og opdatere ikonet. Tilføj en funktion kaldet `performanceTracker`, der bruger Performance API til at måle disse operationer og viser resultaterne i browserens konsol med tidsstempler og varighedsmetrikker.

Lær mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring
Her er en interessant detektivopgave: vælg et par open source-websites, der har eksisteret i flere år (tænk Wikipedia, GitHub eller Stack Overflow), og dyk ned i deres commit-historik. Kan du finde steder, hvor de har foretaget forbedringer af ydeevnen? Hvilke problemer blev ved med at dukke op?

**Din undersøgelsesmetode:**
- **Søg** i commit-beskeder efter ord som "optimere," "ydeevne," eller "hurtigere"
- **Se** efter mønstre - bliver de ved med at rette de samme typer problemer?
- **Identificer** de almindelige syndere, der gør websites langsomme
- **Del** hvad du opdager - andre udviklere kan lære af eksempler fra den virkelige verden

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/28)

## Gennemgang & Selvstudie

Overvej at tilmelde dig et [nyhedsbrev om ydeevne](https://perf.email/)

Undersøg nogle af de måder, browsere vurderer webydeevne på ved at kigge gennem ydeevnefanerne i deres webværktøjer. Finder du nogen væsentlige forskelle?

## Opgave

[Analyser et site for ydeevne](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.