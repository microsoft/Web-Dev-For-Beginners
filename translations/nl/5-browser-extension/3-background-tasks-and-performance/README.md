<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-23T01:06:58+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "nl"
}
-->
# Browserextensieproject Deel 3: Leer over Achtergrondtaken en Prestaties

Heb je je ooit afgevraagd waarom sommige browserextensies snel en responsief aanvoelen, terwijl andere traag lijken? Het geheim zit in wat er achter de schermen gebeurt. Terwijl gebruikers door de interface van je extensie klikken, is er een hele wereld van achtergrondprocessen die stilletjes gegevens ophalen, iconen bijwerken en systeembronnen beheren.

Dit is onze laatste les in de browserextensiereeks, en we gaan ervoor zorgen dat jouw CO2-voetafdruktracker soepel werkt. Je voegt dynamische icoonupdates toe en leert hoe je prestatieproblemen kunt opsporen voordat ze echte problemen worden. Het is alsof je een raceauto afstemt - kleine optimalisaties kunnen een enorm verschil maken in hoe alles werkt.

Tegen de tijd dat we klaar zijn, heb je een gepolijste extensie en begrijp je de prestatieprincipes die goede webapps onderscheiden van geweldige. Laten we ons verdiepen in de wereld van browseroptimalisatie.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introductie

In onze vorige lessen heb je een formulier gebouwd, verbonden met een API en asynchrone gegevensophaling aangepakt. Je extensie begint al mooi vorm te krijgen.

Nu moeten we de laatste puntjes op de i zetten - zoals het laten veranderen van de kleur van het extensie-icoon op basis van de CO2-gegevens. Dit doet me denken aan hoe NASA elk systeem op het Apollo-ruimtevaartuig moest optimaliseren. Ze konden zich geen verspilde cycli of geheugen veroorloven omdat levens afhankelijk waren van prestaties. Hoewel onze browserextensie niet zo kritisch is, gelden dezelfde principes - efficiënte code zorgt voor betere gebruikerservaringen.

## Basisprincipes van Webprestaties

Wanneer je code efficiënt draait, kunnen mensen het verschil daadwerkelijk *voelen*. Je kent dat moment wel wanneer een pagina direct laadt of een animatie soepel verloopt? Dat is goede prestatie aan het werk.

Prestaties gaan niet alleen over snelheid - het gaat om het creëren van webervaringen die natuurlijk aanvoelen in plaats van haperend en frustrerend. In de vroege dagen van de informatica hield Grace Hopper een nanoseconde (een stukje draad van ongeveer een voet lang) op haar bureau om te laten zien hoe ver licht reist in een miljardste van een seconde. Het was haar manier om uit te leggen waarom elke microseconde telt in de informatica. Laten we de detectietools verkennen die je helpen te achterhalen wat dingen vertraagt.

> "Websiteprestaties gaan over twee dingen: hoe snel de pagina laadt en hoe snel de code erop draait." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Het onderwerp hoe je je websites razendsnel maakt op allerlei apparaten, voor allerlei gebruikers, in allerlei situaties, is begrijpelijkerwijs enorm. Hier zijn enkele punten om in gedachten te houden terwijl je een standaard webproject of een browserextensie bouwt.

De eerste stap in het optimaliseren van je site is begrijpen wat er daadwerkelijk onder de motorkap gebeurt. Gelukkig heeft je browser krachtige detectietools ingebouwd.

Om Developer Tools in Edge te openen, klik je op die drie puntjes rechtsboven, ga je naar Meer Hulpmiddelen > Developer Tools. Of gebruik de sneltoets: `Ctrl` + `Shift` + `I` op Windows of `Option` + `Command` + `I` op Mac. Zodra je daar bent, klik je op het tabblad Prestaties - hier ga je je onderzoek doen.

**Hier is je prestatie-detective toolkit:**
- **Open** Developer Tools (je zult deze constant gebruiken als ontwikkelaar!)
- **Ga naar** het tabblad Prestaties - zie het als de fitness tracker van je webapp
- **Druk op** de opnameknop en bekijk je pagina in actie
- **Bestudeer** de resultaten om te zien wat dingen vertraagt

Laten we dit uitproberen. Open een website (Microsoft.com werkt goed hiervoor) en klik op die 'Opnemen'-knop. Vernieuw nu de pagina en bekijk hoe de profiler alles vastlegt wat er gebeurt. Wanneer je stopt met opnemen, zie je een gedetailleerd overzicht van hoe de browser de site 'script', 'rendert' en 'schildert'. Het doet me denken aan hoe missiecontrole elk systeem monitort tijdens een raketlancering - je krijgt realtime gegevens over precies wat er gebeurt en wanneer.

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.nl.png)

✅ De [Microsoft Documentatie](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) heeft veel meer details als je dieper wilt duiken.

> Pro tip: Wis je browsercache voordat je test om te zien hoe je site presteert voor nieuwe bezoekers - dit is meestal heel anders dan herhaalbezoeken!

Selecteer elementen van de profieltijdlijn om in te zoomen op gebeurtenissen die plaatsvinden terwijl je pagina laadt.

Krijg een momentopname van de prestaties van je pagina door een deel van de profieltijdlijn te selecteren en naar het samenvattingspaneel te kijken:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.nl.png)

Controleer het Event Log-paneel om te zien of een gebeurtenis langer dan 15 ms duurde:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.nl.png)

✅ Leer je profiler kennen! Open de ontwikkelaarstools op deze site en kijk of er knelpunten zijn. Wat is het langzaamst ladende bestand? Het snelste?

## Waarop te letten bij profileren

De profiler uitvoeren is slechts het begin - de echte vaardigheid is weten wat die kleurrijke grafieken je eigenlijk vertellen. Maak je geen zorgen, je zult het leren. Ervaren ontwikkelaars hebben geleerd de waarschuwingssignalen te herkennen voordat ze volledige problemen worden.

Laten we het hebben over de gebruikelijke verdachten - de prestatieproblemen die vaak in webprojecten sluipen. Net zoals Marie Curie zorgvuldig de stralingsniveaus in haar laboratorium moest monitoren, moeten wij letten op bepaalde patronen die op problemen wijzen. Deze vroegtijdig opsporen bespaart jou (en je gebruikers) veel frustratie.

**Bestandsgroottes**: Websites zijn door de jaren heen "zwaarder" geworden, en veel van dat extra gewicht komt van afbeeldingen. Het is alsof we steeds meer in onze digitale koffers stoppen.

✅ Bekijk het [Internet Archive](https://httparchive.org/reports/page-weight) om te zien hoe paginagroottes in de loop van de tijd zijn gegroeid - het is behoorlijk onthullend.

**Hier is hoe je je bestanden geoptimaliseerd houdt:**
- **Comprimeer** die afbeeldingen! Moderne formaten zoals WebP kunnen bestandsgroottes drastisch verkleinen
- **Lever** de juiste afbeeldingsgrootte voor elk apparaat - geen enorme desktopafbeeldingen naar telefoons sturen
- **Minimaliseer** je CSS en JavaScript - elke byte telt
- **Gebruik** lazy loading zodat afbeeldingen alleen worden gedownload wanneer gebruikers er daadwerkelijk naartoe scrollen

**DOM-traversals**: De browser moet zijn Document Object Model bouwen op basis van de code die je schrijft, dus het is in het belang van goede paginaprestaties om je tags minimaal te houden, alleen te gebruiken en te stylen wat de pagina nodig heeft. Overbodige CSS die aan een pagina is gekoppeld, kan bijvoorbeeld worden geoptimaliseerd; stijlen die alleen op één pagina nodig zijn, hoeven niet in het hoofdstijlblad te worden opgenomen.

**Belangrijke strategieën voor DOM-optimalisatie:**
- **Minimaliseer** het aantal HTML-elementen en nestingsniveaus
- **Verwijder** ongebruikte CSS-regels en consolideer stijlen efficiënt
- **Organiseer** CSS om alleen te laden wat nodig is voor elke pagina
- **Structureer** HTML semantisch voor betere browserparsing

**JavaScript**: Elke JavaScript-ontwikkelaar moet letten op 'render-blocking' scripts die moeten worden geladen voordat de rest van de DOM kan worden doorlopen en weergegeven in de browser. Overweeg het gebruik van `defer` met je inline scripts (zoals gedaan in de Terrarium-module).

**Moderne JavaScript-optimalisatietechnieken:**
- **Gebruik** het `defer`-attribuut om scripts te laden na DOM-parsing
- **Implementeer** code-splitsing om alleen noodzakelijke JavaScript te laden
- **Pas** lazy loading toe voor niet-kritieke functionaliteit
- **Minimaliseer** het gebruik van zware bibliotheken en frameworks waar mogelijk

✅ Probeer enkele sites op een [Site Speed Test website](https://www.webpagetest.org/) om meer te leren over de gebruikelijke controles die worden uitgevoerd om de prestaties van een site te bepalen.

Nu je een idee hebt van hoe de browser de bestanden rendert die je naar hem stuurt, laten we kijken naar de laatste paar dingen die je moet doen om je extensie te voltooien:

### Maak een functie om kleur te berekenen

Nu gaan we een functie maken die numerieke gegevens omzet in betekenisvolle kleuren. Denk aan een verkeerslichtsysteem - groen voor schone energie, rood voor hoge koolstofintensiteit.

Deze functie neemt de CO2-gegevens van onze API en bepaalt welke kleur het beste de milieueffecten vertegenwoordigt. Het is vergelijkbaar met hoe wetenschappers kleurcodering gebruiken in warmtekaarten om complexe gegevenspatronen te visualiseren - van oceaantemperaturen tot stervorming. Laten we dit toevoegen aan `/src/index.js`, direct na die `const`-variabelen die we eerder hebben ingesteld:

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

**Laten we deze slimme kleine functie opsplitsen:**
- **Stelt** twee arrays in - één voor CO2-niveaus, een andere voor kleuren (groen = schoon, bruin = vervuild!)
- **Vindt** de dichtstbijzijnde match met onze werkelijke CO2-waarde met behulp van een nette array-sorting
- **Pakt** de bijpassende kleur met behulp van de findIndex()-methode
- **Stuurt** een bericht naar Chrome's achtergrondscript met onze gekozen kleur
- **Gebruikt** template literals (die backticks) voor schonere stringformattering
- **Houdt** alles georganiseerd met const-declaraties

De `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) is als het zenuwstelsel van je extensie - het handelt alle communicatie en taken achter de schermen af:

> "Gebruik de chrome.runtime API om de achtergrondpagina op te halen, details over het manifest terug te geven en te luisteren naar en te reageren op gebeurtenissen in de levenscyclus van de app of extensie. Je kunt deze API ook gebruiken om het relatieve pad van URL's om te zetten naar volledig gekwalificeerde URL's."

**Waarom de Chrome Runtime API zo handig is:**
- **Laat** verschillende delen van je extensie met elkaar communiceren
- **Handelt** achtergrondwerk af zonder de gebruikersinterface te bevriezen
- **Beheert** de levenscyclusgebeurtenissen van je extensie
- **Maakt** berichtuitwisseling tussen scripts super eenvoudig

✅ Als je deze browserextensie voor Edge ontwikkelt, kan het je verrassen dat je een chrome API gebruikt. De nieuwere Edge-browserversies draaien op de Chromium-browserengine, waardoor je deze tools kunt gebruiken.

> **Pro Tip**: Als je een browserextensie wilt profileren, start de ontwikkelaarstools vanuit de extensie zelf, aangezien dit een aparte browserinstantie is. Dit geeft je toegang tot extensiespecifieke prestatiestatistieken.

### Stel een standaard icoonkleur in

Voordat we echte gegevens gaan ophalen, geven we onze extensie een startpunt. Niemand houdt ervan om naar een leeg of kapot ogend icoon te staren. We beginnen met een groene kleur, zodat gebruikers weten dat de extensie werkt vanaf het moment dat ze deze installeren.

In je `init()`-functie, laten we die standaard groene icoon instellen:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Wat deze initialisatie bereikt:**
- **Stelt** een neutrale groene kleur in als de standaardstatus
- **Biedt** onmiddellijke visuele feedback wanneer de extensie wordt geladen
- **Vestigt** het communicatiepatroon met het achtergrondscript
- **Zorgt ervoor** dat gebruikers een functionele extensie zien voordat gegevens worden geladen

### Roep de functie aan, voer de oproep uit

Laten we nu alles met elkaar verbinden, zodat wanneer er nieuwe CO2-gegevens binnenkomen, je icoon automatisch wordt bijgewerkt met de juiste kleur. Het is alsof je de laatste schakeling in een elektronisch apparaat aansluit - ineens werken alle afzonderlijke componenten als één systeem.

Voeg deze regel toe direct nadat je de CO2-gegevens van de API hebt ontvangen:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Wat deze integratie bereikt:**
- **Verbindt** de gegevensstroom van de API met het visuele indicatorensysteem
- **Activeert** icoonupdates automatisch wanneer nieuwe gegevens binnenkomen
- **Zorgt voor** realtime visuele feedback op basis van de huidige koolstofintensiteit
- **Behoudt** de scheiding van verantwoordelijkheden tussen gegevensophaling en weergavelogica

En tot slot, voeg in `/dist/background.js` de listener toe voor deze achtergrondactie-oproepen:

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

**Wat dit achtergrondscript doet:**
- **Luistert** naar berichten van je hoofdscript (zoals een receptionist die telefoontjes aanneemt)
- **Verwerkt** die 'updateIcon'-verzoeken om je werkbalkicoon te wijzigen
- **Creëert** nieuwe iconen on-the-fly met behulp van de Canvas API
- **Tekent** een eenvoudige gekleurde cirkel die de huidige koolstofintensiteit weergeeft
- **Werk bij** je browserwerkbalk met het nieuwe icoon
- **Gebruikt** OffscreenCanvas voor soepele prestaties (geen UI-blokkering)

✅ Je leert meer over de Canvas API in de [Space Game-lessen](../../6-space-game/2-drawing-to-canvas/README.md).

**Tijd om je extensie te testen:**
- **Bouw** alles met `npm run build`
- **Herlaad** je extensie in de browser (vergeet deze stap niet)
- **Open** je extensie en bekijk hoe dat icoon van kleur verandert
- **Controleer** hoe het reageert op echte CO2-gegevens van over de hele wereld

Nu weet je in één oogopslag of het een goed moment is voor die lading was of dat je beter kunt wachten op schonere energie. Je hebt zojuist iets echt nuttigs gebouwd en geleerd over browserprestaties onderweg.

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter de prestatiemonitoringmogelijkheden van de browserextensie door een functie toe te voegen die de laadtijden voor verschillende componenten van de extensie bijhoudt en weergeeft.

**Prompt:** Maak een prestatiemonitoringssysteem voor de browserextensie dat de tijd meet en registreert die nodig is om CO2-gegevens van de API op te halen, kleuren te berekenen en het icoon bij te werken. Voeg een functie genaamd `performanceTracker` toe die de Performance API gebruikt om deze operaties te meten en de resultaten weergeeft in de browserconsole met tijdstempels en duurmetingen.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Uitdaging
Hier is een interessante detective-missie: kies een paar open source websites die al jaren bestaan (denk aan Wikipedia, GitHub of Stack Overflow) en duik in hun commitgeschiedenis. Kun je ontdekken waar ze prestatieverbeteringen hebben doorgevoerd? Welke problemen bleven steeds terugkomen?

**Jouw onderzoeksaanpak:**
- **Zoek** in commitberichten naar woorden zoals "optimaliseren," "prestatie," of "sneller"
- **Let op** patronen - blijven ze dezelfde soorten problemen oplossen?
- **Identificeer** de veelvoorkomende oorzaken die websites vertragen
- **Deel** wat je ontdekt - andere ontwikkelaars leren van voorbeelden uit de praktijk

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/28)

## Review & Zelfstudie

Overweeg je aan te melden voor een [prestatie-nieuwsbrief](https://perf.email/)

Onderzoek enkele manieren waarop browsers webprestaties meten door de prestatietabbladen in hun webtools te bekijken. Zie je grote verschillen?

## Opdracht

[Analyseer een site op prestaties](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.