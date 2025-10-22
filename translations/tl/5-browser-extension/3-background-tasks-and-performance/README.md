<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-22T15:43:24+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Browser Extension Bahagi 3: Alamin ang Tungkol sa Background Tasks at Performance

Naisip mo na ba kung bakit ang ilang browser extensions ay mabilis at tumutugon habang ang iba ay tila mabagal? Ang sikreto ay nasa kung ano ang nangyayari sa likod ng eksena. Habang nagki-click ang mga user sa interface ng iyong extension, may mundo ng mga background processes na tahimik na nagma-manage ng pagkuha ng data, pag-update ng icon, at mga system resources.

Ito ang huling aralin natin sa serye ng browser extension, at gagawin nating maayos ang takbo ng iyong carbon footprint tracker. Magdadagdag ka ng mga dynamic na pag-update ng icon at matututo kung paano matukoy ang mga isyu sa performance bago pa ito maging problema. Para kang nagtu-tune ng race car - ang maliliit na pag-optimize ay maaaring magdulot ng malaking pagbabago sa takbo ng lahat.

Kapag natapos na tayo, magkakaroon ka ng isang pinakinis na extension at maiintindihan mo ang mga prinsipyo ng performance na nagtatangi sa magagandang web apps mula sa mga mahusay na apps. Halika't sumisid sa mundo ng browser optimization.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Panimula

Sa mga nakaraang aralin, gumawa ka ng form, ikinonekta ito sa isang API, at hinarap ang asynchronous na pagkuha ng data. Maganda na ang hugis ng iyong extension.

Ngayon, kailangan nating idagdag ang mga huling detalye - tulad ng pagpapalit ng kulay ng icon ng extension batay sa carbon data. Parang NASA na kailangang i-optimize ang bawat sistema sa Apollo spacecraft. Hindi sila maaaring mag-aksaya ng kahit anong cycle o memorya dahil buhay ang nakasalalay sa performance. Bagama't hindi kasing kritikal ang ating browser extension, pareho pa rin ang mga prinsipyo - ang mahusay na code ay lumilikha ng mas magagandang karanasan para sa user.

## Mga Pangunahing Kaalaman sa Web Performance

Kapag mahusay ang takbo ng iyong code, mararamdaman ito ng mga tao. Alam mo ba ang sandaling mabilis na naglo-load ang isang pahina o maayos ang daloy ng animation? Iyan ang magandang performance sa trabaho.

Ang performance ay hindi lang tungkol sa bilis - ito ay tungkol sa paggawa ng mga web experience na natural sa halip na mabagal at nakakainis. Noong unang panahon ng computing, si Grace Hopper ay kilalang may nanosecond (isang piraso ng kawad na humigit-kumulang isang talampakan ang haba) sa kanyang desk upang ipakita kung gaano kalayo ang nararating ng liwanag sa isang bilyong bahagi ng isang segundo. Paraan niya ito upang ipaliwanag kung bakit mahalaga ang bawat microsecond sa computing. Tuklasin natin ang mga detective tools na tumutulong sa iyo na matukoy kung ano ang nagpapabagal sa mga bagay.

> "Ang performance ng website ay tungkol sa dalawang bagay: kung gaano kabilis naglo-load ang pahina, at kung gaano kabilis tumatakbo ang code nito." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Ang paksa ng kung paano gawing napakabilis ang iyong mga website sa lahat ng uri ng device, para sa lahat ng uri ng user, sa lahat ng uri ng sitwasyon, ay hindi nakakagulat na malawak. Narito ang ilang mga punto na dapat tandaan habang bumubuo ka ng isang karaniwang web project o browser extension.

Ang unang hakbang sa pag-optimize ng iyong site ay ang pag-unawa sa kung ano talaga ang nangyayari sa likod ng eksena. Sa kabutihang-palad, ang iyong browser ay may makapangyarihang mga detective tools na naka-built in.

Upang buksan ang Developer Tools sa Edge, i-click ang tatlong tuldok sa kanang itaas, pagkatapos ay pumunta sa More Tools > Developer Tools. O gamitin ang keyboard shortcut: `Ctrl` + `Shift` + `I` sa Windows o `Option` + `Command` + `I` sa Mac. Kapag naroon ka na, i-click ang tab na Performance - dito mo gagawin ang iyong imbestigasyon.

**Narito ang iyong performance detective toolkit:**
- **Buksan** ang Developer Tools (palagi mo itong gagamitin bilang developer!)
- **Pumunta** sa tab na Performance - isipin ito bilang fitness tracker ng iyong web app
- **I-click** ang Record button at panoorin ang iyong pahina sa aksyon
- **Pag-aralan** ang mga resulta upang matukoy kung ano ang nagpapabagal sa mga bagay

Subukan natin ito. Buksan ang isang website (Microsoft.com ay mahusay para dito) at i-click ang 'Record' button. Ngayon i-refresh ang pahina at panoorin ang profiler na kinukuha ang lahat ng nangyayari. Kapag natapos mo ang pagre-record, makikita mo ang detalyadong breakdown kung paano 'scripts', 'renders', at 'paints' ng browser ang site. Parang mission control na nagmo-monitor ng bawat sistema sa panahon ng rocket launch - makakakuha ka ng real-time na data kung ano ang nangyayari at kailan.

✅ Ang [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) ay may maraming detalye kung gusto mong sumisid nang mas malalim.

> Pro tip: I-clear ang cache ng iyong browser bago mag-test upang makita kung paano nagpe-perform ang iyong site para sa mga unang beses na bisita - kadalasan ay iba ito sa mga paulit-ulit na pagbisita!

Piliin ang mga elemento ng profile timeline upang mag-zoom in sa mga event na nangyayari habang naglo-load ang iyong pahina.

Makakuha ng snapshot ng performance ng iyong pahina sa pamamagitan ng pagpili ng bahagi ng profile timeline at pagtingin sa summary pane:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.tl.png)

Suriin ang Event Log pane upang makita kung may anumang event na tumagal ng higit sa 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.tl.png)

✅ Kilalanin ang iyong profiler! Buksan ang developer tools sa site na ito at tingnan kung may mga bottleneck. Ano ang pinakamabagal na asset na naglo-load? Ang pinakamabilis?

## Ano ang Dapat Hanapin Kapag Nagpo-profile

Ang pagtakbo ng profiler ay simula pa lang - ang tunay na kasanayan ay ang pag-unawa sa sinasabi ng mga makukulay na chart na iyon. Huwag mag-alala, makukuha mo rin ang tamang pagbasa sa mga ito. Ang mga bihasang developer ay natututo kung paano matukoy ang mga babala bago ito maging ganap na problema.

Pag-usapan natin ang mga karaniwang salarin - ang mga problema sa performance na madalas sumingit sa mga web project. Tulad ng kung paano kailangang maingat na subaybayan ni Marie Curie ang radiation levels sa kanyang laboratoryo, kailangan nating bantayan ang ilang mga pattern na nagpapahiwatig ng paparating na problema. Ang maagang pagtukoy sa mga ito ay makakatipid sa iyo (at sa iyong mga user) ng maraming pagkabigo.

**Mga laki ng asset**: Ang mga website ay nagiging "mas mabigat" sa paglipas ng mga taon, at karamihan sa dagdag na timbang na ito ay mula sa mga imahe. Parang pinupuno natin ng sobra ang ating digital na maleta.

✅ Tingnan ang [Internet Archive](https://httparchive.org/reports/page-weight) upang makita kung paano lumaki ang mga laki ng pahina sa paglipas ng panahon - napaka-revealing nito.

**Narito kung paano panatilihing optimized ang iyong mga asset:**
- **I-compress** ang mga imahe! Ang mga modernong format tulad ng WebP ay maaaring magbawas ng laki ng file nang malaki
- **I-serve** ang tamang laki ng imahe para sa bawat device - walang dahilan upang magpadala ng malalaking desktop images sa mga telepono
- **I-minify** ang iyong CSS at JavaScript - bawat byte ay mahalaga
- **Gamitin** ang lazy loading upang ang mga imahe ay mag-download lamang kapag talagang na-scroll ng mga user

**DOM traversals**: Kailangang buuin ng browser ang Document Object Model batay sa code na isinulat mo, kaya't mahalaga para sa magandang performance ng pahina na panatilihing minimal ang iyong mga tag, gamit lamang ang kailangan ng pahina.

**Mga pangunahing estratehiya para sa DOM optimization:**
- **Minimizes** ang bilang ng mga HTML elements at nesting levels
- **Removes** ang mga hindi nagagamit na CSS rules at mahusay na pinagsasama ang mga stylesheet
- **Organizes** ang CSS upang mag-load lamang ng kailangan para sa bawat pahina
- **Structures** ang HTML nang semantically para sa mas mahusay na parsing ng browser

**JavaScript**: Ang bawat JavaScript developer ay dapat magbantay para sa 'render-blocking' scripts na kailangang ma-load bago ma-traverse at ma-paint ang natitirang bahagi ng DOM sa browser. Isaalang-alang ang paggamit ng `defer` sa iyong inline scripts (tulad ng ginawa sa Terrarium module).

**Mga modernong teknolohiya sa pag-optimize ng JavaScript:**
- **Uses** ang `defer` attribute upang ma-load ang mga script pagkatapos ng DOM parsing
- **Implements** ang code splitting upang ma-load lamang ang kinakailangang JavaScript
- **Applies** ang lazy loading para sa mga non-critical functionality
- **Minimizes** ang paggamit ng mabibigat na libraries at frameworks kung maaari

✅ Subukan ang ilang mga site sa isang [Site Speed Test website](https://www.webpagetest.org/) upang matuto nang higit pa tungkol sa mga karaniwang pagsusuri na ginagawa upang matukoy ang performance ng site.

Ngayon na mayroon kang ideya kung paano nire-render ng browser ang mga asset na ipinapadala mo dito, tingnan natin ang huling ilang bagay na kailangan mong gawin upang makumpleto ang iyong extension:

### Gumawa ng function para kalkulahin ang kulay

Ngayon gagawa tayo ng function na magpapalit ng numerical data sa makabuluhang mga kulay. Isipin ito na parang sistema ng traffic light - berde para sa malinis na enerhiya, pula para sa mataas na carbon intensity.

Ang function na ito ay kukuha ng CO2 data mula sa ating API at tutukuyin kung anong kulay ang pinakamahusay na kumakatawan sa epekto sa kapaligiran. Katulad ito ng kung paano ginagamit ng mga siyentipiko ang color-coding sa heat maps upang ma-visualize ang mga kumplikadong pattern ng data - mula sa temperatura ng karagatan hanggang sa pagbuo ng mga bituin. Idagdag natin ito sa `/src/index.js`, pagkatapos ng mga `const` variables na itinakda natin kanina:

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

**I-breakdown natin ang matalinong function na ito:**
- **Nagse-set up** ng dalawang arrays - isa para sa CO2 levels, isa para sa mga kulay (berde = malinis, kayumanggi = marumi!)
- **Hinahanap** ang pinakamalapit na tugma sa ating aktwal na CO2 value gamit ang array sorting
- **Kinukuha** ang tugmang kulay gamit ang findIndex() method
- **Nagpapadala** ng mensahe sa background script ng Chrome gamit ang napiling kulay
- **Gumagamit** ng template literals (mga backticks) para sa mas malinis na string formatting
- **Pinapanatili** ang lahat ng maayos gamit ang const declarations

Ang `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) ay parang nervous system ng iyong extension - ito ang nagma-manage ng lahat ng behind-the-scenes na komunikasyon at tasks:

> "Gamitin ang chrome.runtime API upang kunin ang background page, magbalik ng mga detalye tungkol sa manifest, at makinig at tumugon sa mga event sa lifecycle ng app o extension. Maaari mo ring gamitin ang API na ito upang i-convert ang relative path ng mga URL sa fully-qualified URLs."

**Bakit kapaki-pakinabang ang Chrome Runtime API:**
- **Pinapayagan** ang iba't ibang bahagi ng iyong extension na makipag-usap sa isa't isa
- **Nagma-manage** ng background work nang hindi nag-freeze ang user interface
- **Nagma-manage** ng mga lifecycle events ng iyong extension
- **Ginagawang** madali ang pagpapasa ng mensahe sa pagitan ng mga script

✅ Kung dine-develop mo ang browser extension na ito para sa Edge, maaaring magulat ka na gumagamit ka ng chrome API. Ang mga mas bagong bersyon ng Edge browser ay tumatakbo sa Chromium browser engine, kaya maaari mong gamitin ang mga tools na ito.

> **Pro Tip**: Kung gusto mong i-profile ang isang browser extension, i-launch ang dev tools mula sa loob ng extension mismo, dahil ito ay sarili nitong hiwalay na browser instance. Bibigyan ka nito ng access sa mga extension-specific performance metrics.

### Mag-set ng default na kulay ng icon

Bago tayo magsimulang kumuha ng totoong data, bigyan natin ang extension ng panimulang punto. Walang may gusto na tumingin sa isang blangko o sirang icon. Magsisimula tayo sa kulay berde upang malaman ng mga user na gumagana ang extension mula sa sandaling ito ay mai-install.

Sa iyong `init()` function, mag-set tayo ng default na berde na icon:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Ano ang nagagawa ng initialization na ito:**
- **Nagse-set** ng neutral na berde na kulay bilang default na estado
- **Nagbibigay** ng agarang visual feedback kapag nag-load ang extension
- **Nagtatatag** ng pattern ng komunikasyon sa background script
- **Tinitiyak** na makikita ng mga user ang functional na extension bago mag-load ang data

### Tawagin ang function, i-execute ang tawag

Ngayon, ikonekta natin ang lahat upang kapag dumating ang sariwang CO2 data, ang iyong icon ay awtomatikong mag-update sa tamang kulay. Parang pag-konekta sa huling circuit sa isang electronic device - biglang gumagana ang lahat ng indibidwal na bahagi bilang isang sistema.

Idagdag ang linyang ito pagkatapos mong makuha ang CO2 data mula sa API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Ang integration na ito ay nagagawa:**
- **Ikonekta** ang daloy ng API data sa visual indicator system
- **I-trigger** ang pag-update ng icon nang awtomatiko kapag dumating ang bagong data
- **Tinitiyak** ang real-time na visual feedback batay sa kasalukuyang carbon intensity
- **Pinapanatili** ang separation of concerns sa pagitan ng data fetching at display logic

At sa wakas, sa `/dist/background.js`, idagdag ang listener para sa mga background action calls na ito:

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

**Ano ang ginagawa ng background script na ito:**
- **Nakikinig** sa mga mensahe mula sa iyong main script (parang receptionist na sumasagot sa tawag)
- **Pinoproseso** ang mga 'updateIcon' requests upang baguhin ang toolbar icon
- **Lumilikha** ng mga bagong icon gamit ang Canvas API
- **Nagdo-drawing** ng simpleng colored circle na nagpapakita ng kasalukuyang carbon intensity
- **Ina-update** ang toolbar ng browser gamit ang bagong icon
- **Gumagamit** ng OffscreenCanvas para sa maayos na performance (walang UI blocking)

✅ Matututo ka pa tungkol sa Canvas API sa [Space Game lessons](../../6-space-game/2-drawing-to-canvas/README.md).

**Oras na para i-test ang iyong extension:**
- **I-build** ang lahat gamit ang `npm run build`
- **I-reload** ang iyong extension sa browser (huwag kalimutan ang hakbang na ito)
- **Buksan** ang iyong extension at panoorin ang icon na magpalit ng kulay
- **Suriin** kung paano ito tumutugon sa totoong carbon data mula sa iba't ibang bahagi ng mundo

Ngayon, malalaman mo agad kung magandang panahon para maglaba o kung dapat kang maghintay para sa mas malinis na enerhiya. Nakagawa ka ng isang bagay na tunay na kapaki-pakinabang at natutunan ang tungkol sa browser performance sa proseso.

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang kakayahan ng browser extension sa pag-monitor ng performance sa pamamagitan ng pagdaragdag ng feature na sumusubaybay at nagpapakita ng load times para sa iba't ibang bahagi ng extension.

**Prompt:** Gumawa ng performance monitoring system para sa browser extension na sumusukat at naglo-log ng oras na kinakailangan upang makuha ang CO2 data mula sa API, kalkulahin ang mga kulay, at i-update ang icon. Magdagdag ng function na tinatawag na `performanceTracker` na gumagamit ng Performance API upang sukatin ang mga operasyong ito at ipakita ang mga resulta sa browser console na may timestamps at duration metrics.

Matuto pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon
Narito ang isang kawili-wiling misyon para sa mga detektib: pumili ng ilang open source na mga website na matagal nang umiiral (halimbawa, Wikipedia, GitHub, o Stack Overflow) at suriin ang kanilang commit history. Kaya mo bang matukoy kung saan sila gumawa ng mga pagpapabuti sa performance? Anong mga problema ang paulit-ulit na lumilitaw?

**Ang iyong paraan ng pagsisiyasat:**
- **Hanapin** ang mga commit message para sa mga salitang tulad ng "optimize," "performance," o "faster"
- **Obserbahan** ang mga pattern - patuloy ba nilang inaayos ang parehong uri ng mga isyu?
- **Kilalanin** ang mga karaniwang sanhi ng pagbagal ng mga website
- **Ibahagi** ang iyong natuklasan - matututo ang ibang mga developer mula sa mga halimbawa sa totoong buhay

## Quiz Pagkatapos ng Leksyon

[Quiz pagkatapos ng leksyon](https://ff-quizzes.netlify.app/web/quiz/28)

## Review at Sariling Pag-aaral

Isaalang-alang ang pag-subscribe sa isang [performance newsletter](https://perf.email/)

Siyasatin ang ilan sa mga paraan kung paano sinusukat ng mga browser ang web performance sa pamamagitan ng pagtingin sa performance tabs sa kanilang web tools. May napansin ka bang malalaking pagkakaiba?

## Takdang-Aralin

[Suriin ang isang site para sa performance](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.