<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-23T22:38:36+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "no"
}
-->
# Nettleserutvidelsesprosjekt Del 3: Lær om bakgrunnsoppgaver og ytelse

Har du noen gang lurt på hvorfor noen nettleserutvidelser føles raske og responsive, mens andre virker trege? Hemmeligheten ligger i hva som skjer bak kulissene. Mens brukerne klikker rundt i grensesnittet til utvidelsen din, er det en hel verden av bakgrunnsprosesser som stille og rolig håndterer datahenting, ikonoppdateringer og systemressurser.

Dette er vår siste leksjon i serien om nettleserutvidelser, og vi skal få din karbonfotavtrykk-tracker til å fungere knirkefritt. Du vil legge til dynamiske ikonoppdateringer og lære hvordan du kan oppdage ytelsesproblemer før de blir et problem. Det er som å finjustere en racerbil - små optimaliseringer kan gjøre en enorm forskjell i hvordan alt fungerer.

Når vi er ferdige, vil du ha en polert utvidelse og forstå ytelsesprinsippene som skiller gode webapplikasjoner fra de virkelig gode. La oss dykke inn i nettleseroptimaliseringens verden.

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduksjon

I våre tidligere leksjoner har du laget et skjema, koblet det til en API og taklet asynkron datahenting. Utvidelsen din begynner å ta form.

Nå må vi legge til de siste detaljene - som å få ikonet til utvidelsen til å endre farger basert på karbondataene. Dette minner meg om hvordan NASA måtte optimalisere hvert system på Apollo-romfartøyet. De kunne ikke tillate noen bortkastede sykluser eller minne fordi liv avhang av ytelsen. Selv om nettleserutvidelsen vår ikke er fullt så kritisk, gjelder de samme prinsippene - effektiv kode skaper bedre brukeropplevelser.

## Grunnleggende om webytelse

Når koden din kjører effektivt, kan folk faktisk *føle* forskjellen. Du vet det øyeblikket når en side lastes umiddelbart eller en animasjon flyter jevnt? Det er god ytelse i arbeid.

Ytelse handler ikke bare om hastighet - det handler om å skape webopplevelser som føles naturlige i stedet for klønete og frustrerende. Tilbake i datamaskinens tidlige dager hadde Grace Hopper berømt en nanosekund (et stykke ledning omtrent en fot lang) på skrivebordet sitt for å vise hvor langt lyset reiser på en milliarddel av et sekund. Det var hennes måte å forklare hvorfor hver mikrosekund betyr noe i databehandling. La oss utforske detektivverktøyene som hjelper deg med å finne ut hva som bremser ting.

> "Nettstedsytelse handler om to ting: hvor raskt siden lastes, og hvor raskt koden på den kjører." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Temaet om hvordan du gjør nettstedene dine lynraske på alle slags enheter, for alle slags brukere, i alle slags situasjoner, er ikke overraskende omfattende. Her er noen punkter å huske på når du bygger enten et standard webprosjekt eller en nettleserutvidelse.

Det første steget i å optimalisere nettstedet ditt er å forstå hva som faktisk skjer under panseret. Heldigvis kommer nettleseren din med kraftige detektivverktøy innebygd.

For å åpne Developer Tools i Edge, klikk på de tre prikkene øverst til høyre, gå deretter til Flere verktøy > Utviklerverktøy. Eller bruk hurtigtasten: `Ctrl` + `Shift` + `I` på Windows eller `Option` + `Command` + `I` på Mac. Når du er der, klikker du på Ytelse-fanen - det er her du skal gjøre undersøkelsene dine.

**Her er ditt ytelsesdetektivverktøy:**
- **Åpne** Developer Tools (du vil bruke disse konstant som utvikler!)
- **Gå til** Ytelse-fanen - tenk på det som din webapps treningssporer
- **Trykk** på opptaksknappen og se siden din i aksjon
- **Studer** resultatene for å finne ut hva som bremser ting

La oss prøve dette. Åpne et nettsted (Microsoft.com fungerer godt for dette) og klikk på 'Opptak'-knappen. Oppdater siden og se hvordan profileren fanger alt som skjer. Når du stopper opptaket, vil du se en detaljert oversikt over hvordan nettleseren 'skriver', 'renderer' og 'maler' siden. Det minner meg om hvordan kontrollsenteret overvåker hvert system under en rakettoppskyting - du får sanntidsdata om nøyaktig hva som skjer og når.

✅ [Microsoft-dokumentasjonen](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) har massevis av detaljer hvis du vil dykke dypere.

> Proff-tips: Tøm nettleserens cache før testing for å se hvordan nettstedet ditt presterer for førstegangsbesøkende - det er vanligvis ganske annerledes enn ved gjentatte besøk!

Velg elementer i profilens tidslinje for å zoome inn på hendelser som skjer mens siden din lastes.

Få et øyeblikksbilde av sidens ytelse ved å velge en del av profilens tidslinje og se på oppsummeringspanelet:

✅ Bli kjent med profileren din! Åpne utviklerverktøyene på dette nettstedet og se om det er noen flaskehalser. Hva er den tregest lastende ressursen? Den raskeste?

## Hva du bør se etter når du profilerer

Å kjøre profileren er bare begynnelsen - den virkelige ferdigheten er å vite hva de fargerike diagrammene faktisk forteller deg. Ikke bekymre deg, du vil lære å lese dem. Erfarne utviklere har lært å oppdage faresignalene før de blir fullverdige problemer.

La oss snakke om de vanlige mistenkte - ytelsesproblemene som har en tendens til å snike seg inn i webprosjekter. Som Marie Curie måtte nøye overvåke strålingsnivåene i laboratoriet sitt, må vi se etter visse mønstre som indikerer problemer som brygger. Å fange disse tidlig vil spare deg (og brukerne dine) for mye frustrasjon.

**Ressursstørrelser**: Nettsteder har blitt "tyngre" gjennom årene, og mye av den ekstra vekten kommer fra bilder. Det er som om vi har stappet mer og mer inn i våre digitale kofferter.

✅ Sjekk ut [Internet Archive](https://httparchive.org/reports/page-weight) for å se hvordan sidestørrelser har vokst over tid - det er ganske avslørende.

**Slik holder du ressursene dine optimalisert:**
- **Komprimer** bildene! Moderne formater som WebP kan redusere filstørrelser dramatisk
- **Server** riktig bildestørrelse for hver enhet - det er ikke nødvendig å sende store skrivebordsbilder til telefoner
- **Minimer** CSS og JavaScript - hver byte teller
- **Bruk** lazy loading slik at bilder bare lastes ned når brukerne faktisk ruller til dem

**DOM-traverseringer**: Nettleseren må bygge sitt Document Object Model basert på koden du skriver, så det er i interesse for god sideytelse å holde taggene minimale, og bare bruke og style det siden trenger. For eksempel kan overflødig CSS assosiert med en side optimaliseres; stiler som bare trenger å brukes på én side, trenger ikke å inkluderes i hovedstilarket.

**Nøkkelstrategier for DOM-optimalisering:**
- **Minimerer** antall HTML-elementer og nivåer av nesting
- **Fjerner** ubrukte CSS-regler og konsoliderer stilark effektivt
- **Organiserer** CSS for å laste bare det som trengs for hver side
- **Strukturerer** HTML semantisk for bedre nettleserparsing

**JavaScript**: Hver JavaScript-utvikler bør passe på 'render-blocking'-skript som må lastes før resten av DOM kan traverseres og males til nettleseren. Vurder å bruke `defer` med dine inline-skript (som gjort i Terrarium-modulen).

**Moderne JavaScript-optimaliseringsteknikker:**
- **Bruker** `defer`-attributtet for å laste skript etter DOM-parsing
- **Implementerer** kode-splitting for å laste bare nødvendig JavaScript
- **Bruker** lazy loading for ikke-kritisk funksjonalitet
- **Minimerer** bruken av tunge biblioteker og rammeverk når mulig

✅ Prøv noen nettsteder på en [Site Speed Test-nettside](https://www.webpagetest.org/) for å lære mer om de vanlige kontrollene som gjøres for å bestemme nettstedets ytelse.

Nå som du har en idé om hvordan nettleseren renderer ressursene du sender til den, la oss se på de siste tingene du trenger å gjøre for å fullføre utvidelsen din:

### Lag en funksjon for å beregne farge

Nå skal vi lage en funksjon som gjør numeriske data om til meningsfulle farger. Tenk på det som et trafikklyssystem - grønt for ren energi, rødt for høy karbonintensitet.

Denne funksjonen vil ta CO2-dataene fra vår API og bestemme hvilken farge som best representerer miljøpåvirkningen. Det ligner på hvordan forskere bruker fargekoding i varmekart for å visualisere komplekse dataprofiler - fra havtemperaturer til stjernedannelse. La oss legge dette til `/src/index.js`, rett etter de `const`-variablene vi satte opp tidligere:

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

**La oss bryte ned denne smarte lille funksjonen:**
- **Setter opp** to arrays - en for CO2-nivåer, en annen for farger (grønn = ren, brun = skitten!)
- **Finner** den nærmeste matchen til vår faktiske CO2-verdi ved hjelp av noen smarte array-sorteringer
- **Henter** den matchende fargen ved hjelp av findIndex()-metoden
- **Sender** en melding til Chromes bakgrunnsskript med vår valgte farge
- **Bruker** malstrenger (de backticks) for renere strengformatering
- **Holder** alt organisert med const-deklarasjoner

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) er som nervesystemet til utvidelsen din - det håndterer all kommunikasjon og oppgaver bak kulissene:

> "Bruk chrome.runtime API for å hente bakgrunnssiden, returnere detaljer om manifestet, og lytte til og svare på hendelser i appen eller utvidelsens livssyklus. Du kan også bruke denne API-en for å konvertere relative URL-stier til fullt kvalifiserte URL-er."

**Hvorfor Chrome Runtime API er så nyttig:**
- **Lar** forskjellige deler av utvidelsen din snakke med hverandre
- **Håndterer** bakgrunnsarbeid uten å fryse brukergrensesnittet
- **Administrerer** utvidelsens livssyklus-hendelser
- **Gjør** meldingsutveksling mellom skript superenkelt

✅ Hvis du utvikler denne nettleserutvidelsen for Edge, kan det overraske deg at du bruker en Chrome API. De nyere Edge-nettleserversjonene kjører på Chromium-nettlesermotoren, så du kan dra nytte av disse verktøyene.

> **Proff-tips**: Hvis du vil profilere en nettleserutvidelse, åpne utviklerverktøyene fra selve utvidelsen, da den er sin egen separate nettleserinstans. Dette gir deg tilgang til utvidelsesspesifikke ytelsesmetrikker.

### Sett en standard ikonfarge

Før vi begynner å hente ekte data, la oss gi utvidelsen vår et utgangspunkt. Ingen liker å stirre på et tomt eller ødelagt ikon. Vi starter med en grønn farge slik at brukerne vet at utvidelsen fungerer fra det øyeblikket de installerer den.

I din `init()`-funksjon, la oss sette opp det standard grønne ikonet:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Hva denne initialiseringen oppnår:**
- **Setter** en nøytral grønn farge som standardtilstand
- **Gir** umiddelbar visuell tilbakemelding når utvidelsen lastes
- **Etablerer** kommunikasjonsmønsteret med bakgrunnsskriptet
- **Sikrer** at brukerne ser en funksjonell utvidelse før data lastes

### Kall funksjonen, utfør kallet

Nå skal vi koble alt sammen slik at når ferske CO2-data kommer inn, oppdateres ikonet ditt automatisk med riktig farge. Det er som å koble den siste kretsen i en elektronisk enhet - plutselig fungerer alle de individuelle komponentene som ett system.

Legg til denne linjen rett etter at du får CO2-dataene fra API-en:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Denne integrasjonen oppnår:**
- **Kobler** API-datastrømmen med det visuelle indikator-systemet
- **Trigger** ikonoppdateringer automatisk når nye data ankommer
- **Sikrer** sanntids visuell tilbakemelding basert på nåværende karbonintensitet
- **Opprettholder** separasjonen mellom datahenting og visningslogikk

Og til slutt, i `/dist/background.js`, legg til lytteren for disse bakgrunnsaksjonskallene:

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

**Hva dette bakgrunnsskriptet gjør:**
- **Lytter** etter meldinger fra hovedskriptet ditt (som en resepsjonist som tar imot samtaler)
- **Behandler** disse 'updateIcon'-forespørslene for å endre verktøylinjeikonet ditt
- **Oppretter** nye ikoner på farten ved hjelp av Canvas API
- **Tegner** en enkel farget sirkel som viser nåværende karbonintensitet
- **Oppdaterer** nettleserens verktøylinje med det ferske ikonet
- **Bruker** OffscreenCanvas for jevn ytelse (ingen UI-blokkering)

✅ Du vil lære mer om Canvas API i [Space Game-leksjonene](../../6-space-game/2-drawing-to-canvas/README.md).

**Tid for å teste utvidelsen din:**
- **Bygg** alt med `npm run build`
- **Last** utvidelsen din på nytt i nettleseren (ikke glem dette steget)
- **Åpne** utvidelsen din og se ikonet endre farger
- **Sjekk** hvordan det reagerer på ekte karbondata fra hele verden

Nå vil du vite med et blikk om det er et godt tidspunkt for den klesvasken eller om du bør vente på renere energi. Du har nettopp bygget noe genuint nyttig og lært om nettleserytelse underveis.

## GitHub Copilot Agent-utfordring 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre nettleserutvidelsens ytelsesovervåkingskapabiliteter ved å legge til en funksjon som sporer og viser lastetider for forskjellige komponenter i utvidelsen.

**Prompt:** Lag et ytelsesovervåkingssystem for nettleserutvidelsen som måler og logger tiden det tar å hente CO2-data fra API-en, beregne farger og oppdatere ikonet. Legg til en funksjon kalt `performanceTracker` som bruker Performance API for å måle disse operasjonene og viser resultatene i nettleserkonsollen med tidsstempler og varighetsmetrikker.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring
Her er et interessant detektivoppdrag: velg noen åpne kildekode-nettsteder som har eksistert i flere år (tenk Wikipedia, GitHub eller Stack Overflow) og dykk ned i deres commit-historikk. Kan du finne ut hvor de har gjort ytelsesforbedringer? Hvilke problemer dukker stadig opp?

**Din undersøkelsesmetode:**
- **Søk** i commit-meldinger etter ord som "optimalisere," "ytelse," eller "raskere"
- **Se** etter mønstre - fikser de stadig de samme typene problemer?
- **Identifiser** de vanlige årsakene til at nettsteder blir tregere
- **Del** det du oppdager - andre utviklere kan lære av eksempler fra virkeligheten

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/28)

## Gjennomgang og selvstudium

Vurder å melde deg på et [nyhetsbrev om ytelse](https://perf.email/)

Undersøk noen av måtene nettlesere måler webytelse ved å se gjennom ytelsesfanene i deres webverktøy. Finner du noen store forskjeller?

## Oppgave

[Analyser et nettsted for ytelse](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.