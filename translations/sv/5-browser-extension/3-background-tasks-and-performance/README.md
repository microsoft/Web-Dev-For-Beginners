<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-23T21:49:16+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "sv"
}
-->
# Webbläsartillägg Projekt Del 3: Lär dig om Bakgrundsuppgifter och Prestanda

Har du någonsin undrat vad som gör att vissa webbläsartillägg känns snabba och responsiva medan andra verkar långsamma? Hemligheten ligger i vad som händer bakom kulisserna. Medan användare klickar runt i ditt tilläggs gränssnitt, finns det en hel värld av bakgrundsprocesser som tyst hanterar datahämtning, ikonuppdateringar och systemresurser.

Detta är vår sista lektion i serien om webbläsartillägg, och vi ska få din koldioxidspårning att fungera smidigt. Du kommer att lägga till dynamiska ikonuppdateringar och lära dig att upptäcka prestandaproblem innan de blir problem. Det är som att finjustera en tävlingsbil - små optimeringar kan göra en enorm skillnad i hur allt fungerar.

När vi är klara kommer du att ha ett polerat tillägg och förstå de prestandaprinciper som skiljer bra webbappar från fantastiska. Låt oss dyka in i webbläsaroptimeringens värld.

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduktion

I våra tidigare lektioner byggde du ett formulär, kopplade det till ett API och hanterade asynkron datahämtning. Ditt tillägg börjar ta form riktigt bra.

Nu behöver vi lägga till de sista detaljerna - som att få tilläggsikonen att ändra färg baserat på koldioxiddata. Det påminner mig om hur NASA var tvungna att optimera varje system på Apollo-rymdfarkosten. De kunde inte ha råd med några bortkastade cykler eller minne eftersom liv hängde på prestandan. Även om vårt webbläsartillägg inte är riktigt så kritiskt, gäller samma principer - effektiv kod skapar bättre användarupplevelser.

## Grundläggande om Webbprestanda

När din kod körs effektivt kan människor faktiskt *känna* skillnaden. Du vet den där känslan när en sida laddas direkt eller en animation flyter smidigt? Det är bra prestanda i arbete.

Prestanda handlar inte bara om hastighet - det handlar om att skapa webbupplevelser som känns naturliga istället för klumpiga och frustrerande. Tidigt i databehandlingens historia höll Grace Hopper berömt en nanosekund (en bit tråd ungefär en fot lång) på sitt skrivbord för att visa hur långt ljus färdas på en miljarddel av en sekund. Det var hennes sätt att förklara varför varje mikrosekund spelar roll i databehandling. Låt oss utforska de verktyg som hjälper dig att lista ut vad som saktar ner saker och ting.

> "Webbplatsens prestanda handlar om två saker: hur snabbt sidan laddas och hur snabbt koden på den körs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Ämnet om hur man gör dina webbplatser blixtsnabba på alla typer av enheter, för alla typer av användare, i alla typer av situationer, är föga förvånande omfattande. Här är några punkter att tänka på när du bygger antingen ett standardwebbprojekt eller ett webbläsartillägg.

Det första steget i att optimera din webbplats är att förstå vad som faktiskt händer under huven. Lyckligtvis kommer din webbläsare med kraftfulla verktyg för att undersöka detta inbyggt.

För att öppna utvecklarverktyg i Edge, klicka på de tre prickarna längst upp till höger, gå sedan till Fler verktyg > Utvecklarverktyg. Eller använd tangentbordsgenvägen: `Ctrl` + `Shift` + `I` på Windows eller `Option` + `Command` + `I` på Mac. När du är där, klicka på fliken Prestanda - det är här du kommer att göra din undersökning.

**Här är din prestandadetektivverktygslåda:**
- **Öppna** utvecklarverktygen (du kommer att använda dessa konstant som utvecklare!)
- **Gå till** fliken Prestanda - tänk på det som din webbapps träningsspårare
- **Tryck på** inspelningsknappen och se din sida i aktion
- **Studera** resultaten för att upptäcka vad som saktar ner saker och ting

Låt oss prova detta. Öppna en webbplats (Microsoft.com fungerar bra för detta) och klicka på 'Record'-knappen. Uppdatera nu sidan och se hur profilverktyget fångar allt som händer. När du slutar spela in kommer du att se en detaljerad uppdelning av hur webbläsaren 'skriptar', 'renderar' och 'målar' webbplatsen. Det påminner mig om hur kontrollrummet övervakar varje system under en raketuppskjutning - du får realtidsdata om exakt vad som händer och när.

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.sv.png)

✅ [Microsoft Dokumentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) har massor av detaljer om du vill fördjupa dig.

> Proffstips: Rensa din webbläsares cache innan du testar för att se hur din webbplats presterar för förstagångsbesökare - det är vanligtvis ganska annorlunda än vid återkommande besök!

Välj element i profiltidslinjen för att zooma in på händelser som inträffar medan din sida laddas.

Få en ögonblicksbild av din sidas prestanda genom att välja en del av profiltidslinjen och titta på sammanfattningspanelen:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.sv.png)

Kontrollera händelseloggen för att se om någon händelse tog längre än 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.sv.png)

✅ Lär känna din profiler! Öppna utvecklarverktygen på den här webbplatsen och se om det finns några flaskhalsar. Vilken är den långsammast laddande resursen? Den snabbaste?

## Vad man ska leta efter vid profilering

Att köra profilverktyget är bara början - den verkliga färdigheten är att veta vad de färgglada diagrammen faktiskt berättar för dig. Oroa dig inte, du kommer att lära dig att läsa dem. Erfaren utvecklare har lärt sig att upptäcka varningssignaler innan de blir fullskaliga problem.

Låt oss prata om de vanliga misstänkta - prestandaproblemen som tenderar att smyga sig in i webbprojekt. Precis som Marie Curie var tvungen att noggrant övervaka strålningsnivåer i sitt laboratorium, måste vi hålla utkik efter vissa mönster som indikerar att problem är på väg. Att fånga dessa tidigt kommer att spara dig (och dina användare) mycket frustration.

**Resursstorlekar**: Webbplatser har blivit "tyngre" över åren, och mycket av den extra vikten kommer från bilder. Det är som om vi har packat mer och mer i våra digitala resväskor.

✅ Kolla in [Internet Archive](https://httparchive.org/reports/page-weight) för att se hur sidstorlekar har vuxit över tid - det är ganska avslöjande.

**Så här håller du dina resurser optimerade:**
- **Komprimera** bilderna! Moderna format som WebP kan minska filstorlekar dramatiskt
- **Servera** rätt bildstorlek för varje enhet - det finns ingen anledning att skicka stora skrivbordsbilder till telefoner
- **Minimera** din CSS och JavaScript - varje byte räknas
- **Använd** lazy loading så att bilder bara laddas när användare faktiskt scrollar till dem

**DOM-traverseringar**: Webbläsaren måste bygga sin Document Object Model baserat på koden du skriver, så det är i intresset av god sidprestanda att hålla dina taggar minimala, endast använda och styla vad sidan behöver. Till denna punkt kan överflödig CSS som är associerad med en sida optimeras; stilar som bara behöver användas på en sida behöver inte inkluderas i huvudstilbladet, till exempel.

**Nyckelstrategier för DOM-optimering:**
- **Minimera** antalet HTML-element och nivåer av nästling
- **Ta bort** oanvända CSS-regler och konsolidera stilmallar effektivt
- **Organisera** CSS för att ladda endast det som behövs för varje sida
- **Strukturera** HTML semantiskt för bättre webbläsarparsing

**JavaScript**: Varje JavaScript-utvecklare bör hålla utkik efter 'render-blocking'-skript som måste laddas innan resten av DOM kan traverseras och målas till webbläsaren. Överväg att använda `defer` med dina inline-skript (som det görs i Terrarium-modulen).

**Moderna JavaScript-optimeringstekniker:**
- **Använd** attributet `defer` för att ladda skript efter DOM-parsing
- **Implementera** koddelning för att endast ladda nödvändig JavaScript
- **Applicera** lazy loading för icke-kritisk funktionalitet
- **Minimera** användningen av tunga bibliotek och ramverk när det är möjligt

✅ Testa några webbplatser på en [Site Speed Test-webbplats](https://www.webpagetest.org/) för att lära dig mer om de vanliga kontroller som görs för att avgöra webbplatsens prestanda.

Nu när du har en idé om hur webbläsaren renderar de resurser du skickar till den, låt oss titta på de sista sakerna du behöver göra för att slutföra ditt tillägg:

### Skapa en funktion för att beräkna färg

Nu ska vi skapa en funktion som omvandlar numeriska data till meningsfulla färger. Tänk på det som ett trafikljussystem - grönt för ren energi, rött för hög koldioxidintensitet.

Denna funktion kommer att ta CO2-data från vårt API och avgöra vilken färg som bäst representerar miljöpåverkan. Det liknar hur forskare använder färgkodning i värmekartor för att visualisera komplexa datamönster - från havstemperaturer till stjärnbildning. Låt oss lägga till detta i `/src/index.js`, precis efter de `const`-variabler vi satte upp tidigare:

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

**Låt oss bryta ner denna smarta lilla funktion:**
- **Ställer in** två arrayer - en för CO2-nivåer, en annan för färger (grönt = rent, brunt = smutsigt!)
- **Hittar** den närmaste matchningen till vårt faktiska CO2-värde med hjälp av lite snygg array-sortering
- **Hämtar** den matchande färgen med hjälp av metoden findIndex()
- **Skickar** ett meddelande till Chromes bakgrundsskript med vår valda färg
- **Använder** mallsträngar (de där backticks) för renare strängformatering
- **Håller** allt organiserat med const-deklarationer

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) är som nervsystemet i ditt tillägg - det hanterar all kommunikation och uppgifter bakom kulisserna:

> "Använd chrome.runtime API för att hämta bakgrundssidan, returnera detaljer om manifestet och lyssna på och svara på händelser i appens eller tilläggets livscykel. Du kan också använda detta API för att konvertera den relativa sökvägen för URL:er till fullständigt kvalificerade URL:er."

**Varför Chrome Runtime API är så praktiskt:**
- **Låter** olika delar av ditt tillägg prata med varandra
- **Hanterar** bakgrundsarbete utan att frysa användargränssnittet
- **Hantera** tilläggets livscykelhändelser
- **Gör** meddelandeöverföring mellan skript superenkelt

✅ Om du utvecklar detta webbläsartillägg för Edge, kanske det förvånar dig att du använder ett chrome API. De nyare Edge-webbläsarversionerna körs på Chromium-webbläsarmotorn, så du kan dra nytta av dessa verktyg.

> **Proffstips**: Om du vill profilera ett webbläsartillägg, starta utvecklarverktygen från själva tillägget, eftersom det är sin egen separata webbläsarinstans. Detta ger dig tillgång till tilläggsspecifika prestandamått.

### Ställ in en standardfärg för ikonen

Innan vi börjar hämta verkliga data, låt oss ge vårt tillägg en startpunkt. Ingen gillar att stirra på en tom eller trasig ikon. Vi börjar med en grön färg så att användarna vet att tillägget fungerar från det ögonblick de installerar det.

I din `init()`-funktion, låt oss ställa in den där standardgröna ikonen:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Vad denna initialisering åstadkommer:**
- **Ställer in** en neutral grön färg som standardläge
- **Ger** omedelbar visuell feedback när tillägget laddas
- **Etablerar** kommunikationsmönstret med bakgrundsskriptet
- **Säkerställer** att användarna ser ett fungerande tillägg innan data laddas

### Anropa funktionen, utför anropet

Nu ska vi koppla ihop allt så att när ny CO2-data kommer in, uppdateras din ikon automatiskt med rätt färg. Det är som att koppla den sista kretsen i en elektronisk enhet - plötsligt fungerar alla individuella komponenter som ett system.

Lägg till denna rad precis efter att du hämtat CO2-data från API:et:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Vad denna integration åstadkommer:**
- **Kopplar** API-datainflödet med det visuella indikator-systemet
- **Triggar** ikonuppdateringar automatiskt när ny data anländer
- **Säkerställer** realtidsvisuell feedback baserat på aktuell koldioxidintensitet
- **Bibehåller** separationen mellan datahämtning och visuell logik

Och slutligen, i `/dist/background.js`, lägg till lyssnaren för dessa bakgrundsåtgärdsanrop:

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

**Vad detta bakgrundsskript gör:**
- **Lyssnar** på meddelanden från ditt huvudsakliga skript (som en receptionist som tar emot samtal)
- **Bearbetar** dessa 'updateIcon'-förfrågningar för att ändra din verktygsfältsikon
- **Skapar** nya ikoner i farten med hjälp av Canvas API
- **Ritar** en enkel färgad cirkel som visar aktuell koldioxidintensitet
- **Uppdaterar** din webbläsares verktygsfält med den nya ikonen
- **Använder** OffscreenCanvas för smidig prestanda (ingen UI-blockering)

✅ Du kommer att lära dig mer om Canvas API i [Space Game-lektionerna](../../6-space-game/2-drawing-to-canvas/README.md).

**Dags att testa ditt tillägg:**
- **Bygg** allt med `npm run build`
- **Ladda om** ditt tillägg i webbläsaren (glöm inte detta steg)
- **Öppna** ditt tillägg och se hur ikonen ändrar färg
- **Kontrollera** hur det reagerar på verklig koldioxiddata från hela världen

Nu kommer du att veta med en blick om det är en bra tid för den där tvätten eller om du bör vänta på renare energi. Du har precis byggt något genuint användbart och lärt dig om webbläsarprestanda på vägen.

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra webbläsartilläggets prestandaövervakningsfunktioner genom att lägga till en funktion som spårar och visar laddningstider för olika komponenter i tillägget.

**Uppmaning:** Skapa ett prestandaövervakningssystem för webbläsartillägget som mäter och loggar tiden det tar att hämta CO2-data från API:et, beräkna färger och uppdatera ikonen. Lägg till en funktion som heter `performanceTracker` som använder Performance API för att mäta dessa operationer och visar resultaten i webbläsarens konsol med tidsstämplar och varaktighetsmått.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning
Här är ett intressant detektivuppdrag: välj några öppna källkodssajter som har funnits i flera år (tänk Wikipedia, GitHub eller Stack Overflow) och granska deras commit-historik. Kan du hitta var de gjorde prestandaförbättringar? Vilka problem dök upp gång på gång?

**Din undersökningsmetod:**
- **Sök** i commit-meddelanden efter ord som "optimera," "prestanda," eller "snabbare"
- **Titta** efter mönster - fixar de samma typer av problem om och om igen?
- **Identifiera** vanliga orsaker till att webbplatser blir långsamma
- **Dela** vad du upptäcker - andra utvecklare kan lära sig av verkliga exempel

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/28)

## Granskning & Självstudier

Överväg att prenumerera på ett [nyhetsbrev om prestanda](https://perf.email/)

Undersök några av de sätt som webbläsare mäter webbprestanda genom att titta på prestandaflikarna i deras webverktyg. Hittar du några stora skillnader?

## Uppgift

[Analysera en webbplats för prestanda](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.