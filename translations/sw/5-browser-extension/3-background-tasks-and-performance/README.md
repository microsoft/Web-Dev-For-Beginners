<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "49b58721a71cfda824e2f3e1f46908c6",
  "translation_date": "2025-08-29T10:02:59+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Kiendelezi cha Kivinjari Sehemu ya 3: Jifunze Kuhusu Kazi za Nyuma na Utendaji

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/27)

### Utangulizi

Katika masomo mawili yaliyopita ya moduli hii, ulijifunza jinsi ya kujenga fomu na eneo la kuonyesha data iliyopatikana kutoka kwa API. Hii ni njia ya kawaida sana ya kuunda uwepo wa mtandao. Pia ulijifunza jinsi ya kushughulikia upatikanaji wa data kwa njia isiyo ya moja kwa moja. Kiendelezi chako cha kivinjari karibu kimekamilika.

Kinachobaki ni kusimamia baadhi ya kazi za nyuma, ikiwa ni pamoja na kusasisha rangi ya ikoni ya kiendelezi, kwa hivyo huu ni wakati mzuri wa kuzungumzia jinsi kivinjari kinavyosimamia aina hii ya kazi. Hebu tufikirie kuhusu kazi hizi za kivinjari katika muktadha wa utendaji wa mali zako za mtandao unapoziunda.

## Misingi ya Utendaji wa Mtandao

> "Utendaji wa tovuti unahusu mambo mawili: jinsi ukurasa unavyopakia haraka, na jinsi msimbo wake unavyokimbia haraka." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Mada ya jinsi ya kufanya tovuti zako ziwe za haraka sana kwenye aina zote za vifaa, kwa aina zote za watumiaji, katika hali zote, bila shaka ni pana. Hapa kuna mambo ya kuzingatia unapoanzisha mradi wa kawaida wa mtandao au kiendelezi cha kivinjari.

Jambo la kwanza unalohitaji kufanya ili kuhakikisha kuwa tovuti yako inafanya kazi kwa ufanisi ni kukusanya data kuhusu utendaji wake. Mahali pa kwanza pa kufanya hivyo ni katika zana za msanidi wa kivinjari chako cha wavuti. Katika Edge, unaweza kuchagua kitufe cha "Mipangilio na zaidi" (ikoni ya nukta tatu juu kulia ya kivinjari), kisha uende kwenye Zana Zaidi > Zana za Wasanidi na ufungue kichupo cha Utendaji. Unaweza pia kutumia njia za mkato za kibodi `Ctrl` + `Shift` + `I` kwenye Windows au `Option` + `Command` + `I` kwenye Mac kufungua zana za wasanidi.

Kichupo cha Utendaji kina chombo cha Profaili. Fungua tovuti (jaribu, kwa mfano, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) na ubofye kitufe cha 'Rekodi', kisha upya tovuti. Acha kurekodi wakati wowote, na utaweza kuona taratibu zinazozalishwa kwa 'script', 'render', na 'paint' tovuti:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.sw.png)

✅ Tembelea [Nyaraka za Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) kuhusu jopo la Utendaji katika Edge.

> Kidokezo: ili kupata usomaji sahihi wa muda wa kuanza wa tovuti yako, futa akiba ya kivinjari chako.

Chagua vipengele vya muda wa wasifu ili kukuza matukio yanayotokea wakati ukurasa wako unapopakia.

Pata muhtasari wa utendaji wa ukurasa wako kwa kuchagua sehemu ya muda wa wasifu na kuangalia jopo la muhtasari:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.sw.png)

Angalia jopo la Ingizo la Matukio ili kuona kama kuna tukio lolote lililochukua zaidi ya 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.sw.png)

✅ Fahamu zaidi kuhusu profaili yako! Fungua zana za wasanidi kwenye tovuti hii na uone kama kuna vizuizi vyovyote. Ni mali gani inayopakia polepole zaidi? Haraka zaidi?

## Ukaguzi wa Profaili

Kwa ujumla, kuna baadhi ya "maeneo ya tatizo" ambayo kila msanidi wa wavuti anapaswa kuangalia anapojenga tovuti ili kuepuka mshangao mbaya wakati wa kupeleka kwenye uzalishaji.

**Ukubwa wa mali**: Mtandao umekuwa 'mzito', na hivyo polepole, katika miaka michache iliyopita. Baadhi ya uzito huu unahusiana na matumizi ya picha.

✅ Angalia kupitia [Internet Archive](https://httparchive.org/reports/page-weight) kwa mtazamo wa kihistoria wa uzito wa ukurasa na zaidi.

Mazoezi mazuri ni kuhakikisha kuwa picha zako zimeboreshwa na kutolewa kwa ukubwa na azimio sahihi kwa watumiaji wako.

**Upitiaji wa DOM**: Kivinjari kinapaswa kujenga Mfano wa Kitu cha Hati (DOM) kulingana na msimbo unaoandika, kwa hivyo ni kwa maslahi ya utendaji mzuri wa ukurasa kuweka lebo zako kuwa ndogo, ukitumia na kuunda tu kile ambacho ukurasa unahitaji. Kwa hatua hii, CSS ya ziada inayohusishwa na ukurasa inaweza kuboreshwa; mitindo inayohitajika kutumika tu kwenye ukurasa mmoja haihitaji kujumuishwa kwenye karatasi kuu ya mitindo, kwa mfano.

**JavaScript**: Kila msanidi wa JavaScript anapaswa kuangalia 'scripts zinazozuia uchoraji' ambazo lazima zipakuliwe kabla ya DOM nyingine kupitiwa na kuchorwa kwenye kivinjari. Fikiria kutumia `defer` na maandishi yako ya ndani (kama inavyofanyika katika moduli ya Terrarium).

✅ Jaribu baadhi ya tovuti kwenye [Tovuti ya Mtihani wa Kasi ya Tovuti](https://www.webpagetest.org/) ili kujifunza zaidi kuhusu ukaguzi wa kawaida unaofanywa ili kubaini utendaji wa tovuti.

Sasa kwa kuwa una wazo la jinsi kivinjari kinavyotoa mali unazotuma kwake, hebu tuangalie mambo machache ya mwisho unayohitaji kufanya ili kukamilisha kiendelezi chako:

### Unda kazi ya kuhesabu rangi

Ukifanya kazi katika `/src/index.js`, ongeza kazi inayoitwa `calculateColor()` baada ya mfululizo wa `const` ulioweka ili kupata ufikiaji wa DOM:

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

Nini kinaendelea hapa? Unapokea thamani (ukali wa kaboni) kutoka kwa API uliyokamilisha katika somo lililopita, kisha unahesabu jinsi thamani yake ilivyo karibu na faharasa iliyowasilishwa kwenye safu ya rangi. Kisha unatuma thamani ya rangi iliyo karibu zaidi kwa muda wa chrome.

Chrome.runtime ina [API](https://developer.chrome.com/extensions/runtime) inayoshughulikia aina zote za kazi za nyuma, na kiendelezi chako kinatumia hiyo:

> "Tumia API ya chrome.runtime kupata ukurasa wa nyuma, rudisha maelezo kuhusu manifest, na usikilize na kujibu matukio katika mzunguko wa maisha wa programu au kiendelezi. Unaweza pia kutumia API hii kubadilisha njia za URL za jamaa kuwa URL zilizo na sifa kamili."

✅ Ikiwa unakua kiendelezi hiki cha kivinjari kwa Edge, inaweza kukushangaza kuwa unatumia API ya chrome. Matoleo mapya ya kivinjari cha Edge yanaendesha injini ya kivinjari ya Chromium, kwa hivyo unaweza kutumia zana hizi.

> Kumbuka, ikiwa unataka kupima kiendelezi cha kivinjari, zindua zana za wasanidi kutoka ndani ya kiendelezi chenyewe, kwani ni kivinjari chake tofauti.

### Weka rangi ya ikoni ya msingi

Sasa, katika kazi ya `init()`, weka ikoni kuwa kijani cha kawaida kuanza kwa tena kuita hatua ya `updateIcon` ya chrome:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### Ita kazi, tekeleza mwito

Kisha, ita kazi hiyo uliyounda kwa kuiongeza kwenye ahadi inayorejeshwa na API ya C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Na hatimaye, katika `/dist/background.js`, ongeza msikilizaji wa simu hizi za hatua za nyuma:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

Katika msimbo huu, unaongeza msikilizaji wa ujumbe wowote unaokuja kwa msimamizi wa kazi za nyuma. Ikiwa inaitwa 'updateIcon', basi msimbo unaofuata unakimbia kuchora ikoni ya rangi sahihi kwa kutumia Canvas API.

✅ Utajifunza zaidi kuhusu Canvas API katika [masomo ya Mchezo wa Anga](../../6-space-game/2-drawing-to-canvas/README.md).

Sasa, jenga upya kiendelezi chako (`npm run build`), upya na uzindue kiendelezi chako, na uangalie rangi ikibadilika. Je, ni wakati mzuri wa kwenda kufanya shughuli au kuosha vyombo? Sasa unajua!

Hongera, umejenga kiendelezi cha kivinjari chenye manufaa na kujifunza zaidi kuhusu jinsi kivinjari kinavyofanya kazi na jinsi ya kupima utendaji wake.

---

## 🚀 Changamoto

Chunguza baadhi ya tovuti za chanzo huria ambazo zimekuwepo kwa muda mrefu, na, kulingana na historia yao ya GitHub, angalia ikiwa unaweza kubaini jinsi zilivyoboreshwa kwa miaka kwa utendaji, ikiwa zilibadilishwa kabisa. Ni sehemu gani ya maumivu ya kawaida?

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/28)

## Mapitio na Kujisomea

Fikiria kujisajili kwa [jarida la utendaji](https://perf.email/)

Chunguza baadhi ya njia ambazo vivinjari hupima utendaji wa wavuti kwa kuangalia kupitia vichupo vya utendaji katika zana zao za wavuti. Je, unapata tofauti kubwa yoyote?

## Kazi

[Changanua tovuti kwa utendaji](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.