<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:37:15+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinio projektas 3 dalis: Sužinokite apie fonines užduotis ir našumą

## Prieš paskaitą – testas

[Prieš paskaitą – testas](https://ff-quizzes.netlify.app/web/quiz/27)

### Įvadas

Paskutinėse dviejose šio modulio pamokose išmokote sukurti formą ir duomenų rodymo sritį, skirtą informacijai, gautai iš API. Tai labai standartinis būdas kurti internetinį projektą. Jūs netgi išmokote tvarkyti asinchroninį duomenų gavimą. Jūsų naršyklės plėtinys beveik baigtas.

Liko valdyti kai kurias fonines užduotis, įskaitant plėtinio piktogramos spalvos atnaujinimą, todėl dabar puikus metas aptarti, kaip naršyklė tvarko tokio tipo užduotis. Pažvelkime į šias naršyklės užduotis jūsų interneto turinio našumo kontekste, kai jį kuriate.

## Interneto našumo pagrindai

> „Interneto svetainės našumas susijęs su dviem dalykais: kaip greitai puslapis įkeliamas ir kaip greitai jame veikia kodas.“ – [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Kaip padaryti, kad jūsų svetainės būtų itin greitos visų tipų įrenginiuose, visiems vartotojams ir visose situacijose, yra labai plati tema. Štai keletas dalykų, kuriuos verta prisiminti, kuriant standartinį interneto projektą ar naršyklės plėtinį.

Pirmas dalykas, kurį reikia padaryti, kad užtikrintumėte efektyvų svetainės veikimą, yra surinkti duomenis apie jos našumą. Pirmoji vieta, kur tai galima padaryti, yra jūsų naršyklės kūrėjų įrankiai. „Edge“ naršyklėje galite pasirinkti mygtuką „Nustatymai ir daugiau“ (trijų taškų piktograma viršutiniame dešiniajame naršyklės kampe), tada eiti į „Daugiau įrankių“ > „Kūrėjų įrankiai“ ir atidaryti našumo skirtuką. Taip pat galite naudoti klaviatūros sparčiuosius klavišus `Ctrl` + `Shift` + `I` „Windows“ arba `Option` + `Command` + `I` „Mac“, kad atidarytumėte kūrėjų įrankius.

Našumo skirtuke yra profiliavimo įrankis. Atidarykite svetainę (pavyzdžiui, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) ir spustelėkite mygtuką „Įrašyti“, tada atnaujinkite svetainę. Bet kuriuo metu sustabdę įrašymą galėsite pamatyti rutinas, kurios generuojamos „script“, „render“ ir „paint“ procesams:

![Edge profiliavimo įrankis](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.lt.png)

✅ Apsilankykite [Microsoft dokumentacijoje](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) apie „Edge“ našumo panelę.

> Patarimas: norėdami gauti tikslius svetainės paleidimo laiko duomenis, išvalykite naršyklės talpyklą.

Pasirinkite profilio laiko juostos elementus, kad priartintumėte įvykius, vykstančius puslapio įkėlimo metu.

Gaukite savo puslapio našumo momentinę nuotrauką, pasirinkdami profilio laiko juostos dalį ir peržiūrėdami santraukos skydelį:

![Edge profiliavimo momentinė nuotrauka](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.lt.png)

Patikrinkite įvykių žurnalo skydelį, kad pamatytumėte, ar kuris nors įvykis užtruko ilgiau nei 15 ms:

![Edge įvykių žurnalas](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.lt.png)

✅ Susipažinkite su savo profiliavimo įrankiu! Atidarykite kūrėjų įrankius šioje svetainėje ir pažiūrėkite, ar yra kokių nors kliūčių. Koks lėčiausiai įkeliamas turinys? Greičiausias?

## Profiliavimo patikrinimai

Apskritai, yra keletas „probleminių sričių“, kurias kiekvienas interneto kūrėjas turėtų stebėti, kurdamas svetainę, kad išvengtų nemalonių staigmenų, kai ateis laikas ją paleisti į gamybą.

**Turinio dydžiai**: Internetas per pastaruosius metus tapo „sunkesnis“, todėl lėtesnis. Dalis šio svorio susijusi su vaizdų naudojimu.

✅ Peržiūrėkite [Internet Archive](https://httparchive.org/reports/page-weight) istorinį puslapių svorio vaizdą ir daugiau.

Gera praktika yra užtikrinti, kad jūsų vaizdai būtų optimizuoti ir pateikti tinkamo dydžio bei raiškos jūsų vartotojams.

**DOM perėjimai**: Naršyklė turi sukurti savo dokumento objektų modelį (DOM) pagal jūsų parašytą kodą, todėl geram puslapio našumui svarbu, kad jūsų žymės būtų minimalios, naudojant ir stilizuojant tik tai, ko reikia puslapiui. Pavyzdžiui, CSS stiliai, kurie naudojami tik viename puslapyje, neturėtų būti įtraukti į pagrindinį stilių lapą.

**JavaScript**: Kiekvienas JavaScript kūrėjas turėtų stebėti „render-blocking“ scenarijus, kurie turi būti įkelti prieš naršyklės DOM perėjimą ir piešimą. Apsvarstykite galimybę naudoti `defer` su savo įterptaisiais scenarijais (kaip tai daroma „Terrarium“ modulyje).

✅ Išbandykite keletą svetainių [Svetainės greičio testavimo svetainėje](https://www.webpagetest.org/), kad sužinotumėte daugiau apie bendrus patikrinimus, kurie atliekami siekiant nustatyti svetainės našumą.

Dabar, kai turite idėją, kaip naršyklė pateikia jūsų siunčiamą turinį, pažvelkime į paskutinius dalykus, kuriuos reikia padaryti, kad užbaigtumėte savo plėtinį:

### Sukurkite funkciją spalvai apskaičiuoti

Dirbdami su `/src/index.js`, pridėkite funkciją, pavadintą `calculateColor()`, po serijos `const` kintamųjų, kuriuos nustatėte, kad gautumėte prieigą prie DOM:

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

Kas čia vyksta? Jūs perduodate vertę (anglies intensyvumą) iš API užklausos, kurią atlikote paskutinėje pamokoje, ir tada apskaičiuojate, kaip arti jos vertė yra spalvų masyve pateikto indekso. Tada siunčiate artimiausią spalvos vertę į „chrome runtime“.

„chrome.runtime“ turi [API](https://developer.chrome.com/extensions/runtime), kuris tvarko įvairias fonines užduotis, ir jūsų plėtinys tuo naudojasi:

> „Naudokite „chrome.runtime“ API, kad gautumėte foninį puslapį, grąžintumėte informaciją apie manifestą ir klausytumėte bei reaguotumėte į įvykius programos ar plėtinio gyvavimo cikle. Taip pat galite naudoti šį API, kad konvertuotumėte santykinius URL kelių į pilnai kvalifikuotus URL.“

✅ Jei kuriate šį naršyklės plėtinį „Edge“, gali nustebinti, kad naudojate „chrome“ API. Naujesnės „Edge“ naršyklės versijos veikia „Chromium“ naršyklės variklyje, todėl galite naudotis šiais įrankiais.

> Pastaba: jei norite profiliuoti naršyklės plėtinį, paleiskite kūrėjų įrankius pačiame plėtinyje, nes tai yra atskira naršyklės instancija.

### Nustatykite numatytąją piktogramos spalvą

Dabar, funkcijoje `init()`, nustatykite piktogramą kaip bendrą žalią spalvą, iš naujo iškviesdami „chrome“ `updateIcon` veiksmą:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Iškvieskite funkciją, vykdykite užklausą

Tada iškvieskite ką tik sukurtą funkciją, pridėdami ją prie pažado, grąžinto C02Signal API:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Ir galiausiai, faile `/dist/background.js`, pridėkite klausytoją šiems foninių veiksmų užklausoms:

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
Šiame kode jūs pridedate klausytoją bet kokioms žinutėms, siunčiamoms į foninių užduočių tvarkyklę. Jei ji vadinama „updateIcon“, tada vykdomas kitas kodas, kuris piešia tinkamos spalvos piktogramą naudojant „Canvas API“.

✅ Daugiau apie „Canvas API“ sužinosite [Kosminio žaidimo pamokose](../../6-space-game/2-drawing-to-canvas/README.md).

Dabar, perkurkite savo plėtinį (`npm run build`), atnaujinkite ir paleiskite plėtinį, ir stebėkite, kaip keičiasi spalva. Ar tai geras metas atlikti kokį nors darbą ar išplauti indus? Dabar žinote!

Sveikiname, jūs sukūrėte naudingą naršyklės plėtinį ir sužinojote daugiau apie tai, kaip veikia naršyklė ir kaip profiliuoti jos našumą.

---

## 🚀 Iššūkis

Ištirkite kai kurias atvirojo kodo svetaines, kurios egzistuoja jau seniai, ir, remdamiesi jų „GitHub“ istorija, pabandykite nustatyti, kaip jos buvo optimizuotos našumui per metus, jei iš viso buvo. Koks yra dažniausias skausmo taškas?

## Po paskaitos – testas

[Po paskaitos – testas](https://ff-quizzes.netlify.app/web/quiz/28)

## Apžvalga ir savarankiškas mokymasis

Apsvarstykite galimybę užsiprenumeruoti [našumo naujienlaiškį](https://perf.email/)

Ištirkite kai kuriuos būdus, kuriais naršyklės vertina interneto našumą, peržiūrėdami našumo skirtukus jų interneto įrankiuose. Ar pastebėjote kokių nors didelių skirtumų?

## Užduotis

[Analizuokite svetainės našumą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, atsiradusius dėl šio vertimo naudojimo.