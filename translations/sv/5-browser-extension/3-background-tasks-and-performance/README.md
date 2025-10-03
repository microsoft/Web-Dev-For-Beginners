<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:25:39+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "sv"
}
-->
# Webbläsartilläggsprojekt Del 3: Lär dig om bakgrundsuppgifter och prestanda

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Introduktion

I de två senaste lektionerna i denna modul lärde du dig hur man bygger ett formulär och en visningsyta för data hämtad från ett API. Det är ett mycket vanligt sätt att skapa en webbnärvaro. Du lärde dig till och med hur man hanterar asynkron datainhämtning. Ditt webbläsartillägg är nästan klart.

Det återstår att hantera några bakgrundsuppgifter, inklusive att uppdatera färgen på tilläggets ikon, så det är ett bra tillfälle att prata om hur webbläsaren hanterar denna typ av uppgifter. Låt oss tänka på dessa webbläsaruppgifter i kontexten av prestandan för dina webbresurser när du bygger dem.

## Grundläggande om webbprestanda

> "Webbplatsens prestanda handlar om två saker: hur snabbt sidan laddas och hur snabbt koden på den körs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Ämnet om hur man gör sina webbplatser blixtsnabba på alla typer av enheter, för alla typer av användare, i alla typer av situationer, är föga förvånande omfattande. Här är några punkter att tänka på när du bygger antingen ett standardwebbprojekt eller ett webbläsartillägg.

Det första du behöver göra för att säkerställa att din webbplats fungerar effektivt är att samla in data om dess prestanda. Den första platsen att göra detta är i utvecklarverktygen i din webbläsare. I Edge kan du välja knappen "Inställningar och mer" (ikonen med tre punkter längst upp till höger i webbläsaren), sedan navigera till Fler verktyg > Utvecklarverktyg och öppna fliken Prestanda. Du kan också använda tangentbordsgenvägarna `Ctrl` + `Shift` + `I` på Windows eller `Option` + `Command` + `I` på Mac för att öppna utvecklarverktygen.

Fliken Prestanda innehåller ett profileringsverktyg. Öppna en webbplats (prova till exempel [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) och klicka på 'Record'-knappen, sedan uppdatera sidan. Stoppa inspelningen när som helst, och du kommer att kunna se rutinerna som genereras för att 'skripta', 'rendera' och 'måla' sidan:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.sv.png)

✅ Besök [Microsoft Dokumentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) om prestandapanelen i Edge

> Tips: för att få en korrekt avläsning av din webbplats starttid, rensa webbläsarens cache

Välj element i profilens tidslinje för att zooma in på händelser som inträffar medan din sida laddas.

Få en ögonblicksbild av din sidas prestanda genom att välja en del av profilens tidslinje och titta på sammanfattningspanelen:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.sv.png)

Kontrollera händelseloggen för att se om någon händelse tog längre än 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.sv.png)

✅ Lär känna din profiler! Öppna utvecklarverktygen på denna webbplats och se om det finns några flaskhalsar. Vilken resurs laddar långsammast? Vilken snabbast?

## Profilkontroller

Generellt sett finns det några "problemområden" som varje webbutvecklare bör hålla utkik efter när de bygger en webbplats för att undvika obehagliga överraskningar när det är dags att distribuera till produktion.

**Resursstorlekar**: Webben har blivit 'tyngre' och därmed långsammare under de senaste åren. En del av denna tyngd har att göra med användningen av bilder.

✅ Titta igenom [Internetarkivet](https://httparchive.org/reports/page-weight) för en historisk översikt av sidvikt och mer.

En bra praxis är att säkerställa att dina bilder är optimerade och levereras i rätt storlek och upplösning för dina användare.

**DOM-traverseringar**: Webbläsaren måste bygga sin Document Object Model baserat på koden du skriver, så det är i intresset av god sidprestanda att hålla dina taggar minimala, endast använda och styla det som sidan behöver. I detta avseende kan överflödig CSS som är associerad med en sida optimeras; stilar som bara behöver användas på en sida behöver till exempel inte inkluderas i huvudstilbladet.

**JavaScript**: Varje JavaScript-utvecklare bör hålla utkik efter 'render-blockerande' skript som måste laddas innan resten av DOM kan traverseras och målas till webbläsaren. Överväg att använda `defer` med dina inline-skript (som görs i Terrarium-modulen).

✅ Prova några webbplatser på en [Webbplatshastighetstest-webbplats](https://www.webpagetest.org/) för att lära dig mer om de vanliga kontroller som görs för att avgöra webbplatsens prestanda.

Nu när du har en idé om hur webbläsaren renderar de resurser du skickar till den, låt oss titta på de sista sakerna du behöver göra för att slutföra ditt tillägg:

### Skapa en funktion för att beräkna färg

Arbeta i `/src/index.js`, lägg till en funktion som heter `calculateColor()` efter serien av `const`-variabler du ställde in för att få tillgång till DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

Vad händer här? Du skickar in ett värde (koldioxidintensiteten) från API-anropet du slutförde i förra lektionen, och sedan beräknar du hur nära dess värde är till indexet som presenteras i färgarrayen. Sedan skickar du det närmaste färgvärdet vidare till chrome runtime.

Chrome.runtime har [ett API](https://developer.chrome.com/extensions/runtime) som hanterar alla typer av bakgrundsuppgifter, och ditt tillägg utnyttjar det:

> "Använd chrome.runtime API för att hämta bakgrundssidan, returnera detaljer om manifestet och lyssna på och svara på händelser i appens eller tilläggets livscykel. Du kan också använda detta API för att konvertera relativa sökvägar för URL:er till fullständiga URL:er."

✅ Om du utvecklar detta webbläsartillägg för Edge, kanske det förvånar dig att du använder ett chrome API. De nyare Edge-webbläsarversionerna körs på Chromium-webbläsarmotorn, så du kan utnyttja dessa verktyg.

> Observera, om du vill profilera ett webbläsartillägg, starta utvecklarverktygen från själva tillägget, eftersom det är sin egen separata webbläsarinstans.

### Ställ in en standardfärg för ikonen

Nu, i `init()`-funktionen, ställ in ikonen till att vara generiskt grön från början genom att återigen kalla chromes `updateIcon`-åtgärd:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Anropa funktionen, utför anropet

Nästa steg är att anropa den funktion du just skapade genom att lägga till den i löftet som returneras av C02Signal API:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Och slutligen, i `/dist/background.js`, lägg till lyssnaren för dessa bakgrundsåtgärdsanrop:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
I denna kod lägger du till en lyssnare för alla meddelanden som kommer till backend-uppgiftshanteraren. Om det kallas 'updateIcon', körs nästa kod för att rita en ikon med rätt färg med hjälp av Canvas API.

✅ Du kommer att lära dig mer om Canvas API i [Space Game-lektionerna](../../6-space-game/2-drawing-to-canvas/README.md).

Nu, bygg om ditt tillägg (`npm run build`), uppdatera och starta ditt tillägg, och se färgen ändras. Är det dags att göra ett ärende eller diska? Nu vet du!

Grattis, du har byggt ett användbart webbläsartillägg och lärt dig mer om hur webbläsaren fungerar och hur man profilerar dess prestanda.

---

## 🚀 Utmaning

Undersök några öppna källkod-webbplatser som har funnits länge, och baserat på deras GitHub-historik, se om du kan avgöra hur de har optimerats över åren för prestanda, om alls. Vilken är den vanligaste smärtpunkten?

## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/28)

## Granskning & Självstudier

Överväg att prenumerera på ett [prestandanyhetsbrev](https://perf.email/)

Undersök några av de sätt som webbläsare mäter webbprestanda genom att titta igenom prestandaflikarna i deras webbverktyg. Hittar du några stora skillnader?

## Uppgift

[Analysera en webbplats för prestanda](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.