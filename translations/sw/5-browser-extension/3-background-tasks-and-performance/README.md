<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T19:44:25+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Kiendelezi cha Kivinjari Sehemu ya 3: Jifunze Kuhusu Kazi za Nyuma na Utendaji

Umewahi kujiuliza ni nini hufanya baadhi ya viendelezi vya kivinjari kuhisi haraka na vyenye mwitikio huku vingine vikionekana kuwa polepole? Siri iko katika kile kinachotokea nyuma ya pazia. Wakati watumiaji wanabonyeza kwenye kiolesura cha kiendelezi chako, kuna ulimwengu mzima wa michakato ya nyuma inayosimamia upatikanaji wa data, masasisho ya ikoni, na rasilimali za mfumo kwa utulivu.

Hii ni somo letu la mwisho katika mfululizo wa viendelezi vya kivinjari, na tunakwenda kufanya kifuatiliaji chako cha alama ya kaboni kifanye kazi kwa urahisi. Utaongeza masasisho ya ikoni ya nguvu na kujifunza jinsi ya kugundua masuala ya utendaji kabla hayajawa matatizo. Ni kama kurekebisha gari la mbio - marekebisho madogo yanaweza kufanya tofauti kubwa katika jinsi kila kitu kinavyofanya kazi.

Tunapomaliza, utakuwa na kiendelezi kilichosafishwa na kuelewa kanuni za utendaji zinazotofautisha programu za wavuti nzuri na zile bora. Hebu tuzame katika ulimwengu wa uboreshaji wa kivinjari.

## Maswali ya Kabla ya Somo

[Maswali ya kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/27)

### Utangulizi

Katika masomo yetu ya awali, ulijenga fomu, ukaunganisha na API, na ukashughulikia upatikanaji wa data usio wa moja kwa moja. Kiendelezi chako kinachukua sura vizuri.

Sasa tunahitaji kuongeza ukamilifu - kama kufanya ikoni ya kiendelezi hicho ibadilishe rangi kulingana na data ya kaboni. Hii inanikumbusha jinsi NASA ilivyolazimika kuboresha kila mfumo kwenye chombo cha Apollo. Hawakuweza kumudu mizunguko au kumbukumbu iliyopotea kwa sababu maisha yalitegemea utendaji. Ingawa kiendelezi chetu cha kivinjari si muhimu kiasi hicho, kanuni zile zile zinatumika - msimbo mzuri huunda uzoefu bora wa mtumiaji.

## Misingi ya Utendaji wa Wavuti

Wakati msimbo wako unafanya kazi kwa ufanisi, watu wanaweza *kuhisi* tofauti. Unajua wakati ambapo ukurasa unapakia mara moja au uhuishaji unafanyika kwa urahisi? Huo ni utendaji mzuri kazini.

Utendaji si tu kuhusu kasi - ni kuhusu kuunda uzoefu wa wavuti unaohisi wa asili badala ya kuwa wa kusumbua na wa kufadhaisha. Katika siku za mwanzo za kompyuta, Grace Hopper maarufu alihifadhi nanosekondi (kipande cha waya chenye urefu wa futi moja) kwenye dawati lake kuonyesha jinsi mwanga unavyosafiri kwa sekunde bilioni moja. Ilikuwa njia yake ya kuelezea kwa nini kila mikrosekondi ni muhimu katika kompyuta. Hebu tuchunguze zana za upelelezi zinazokusaidia kugundua kinachochelewesha mambo.

> "Utendaji wa wavuti ni kuhusu mambo mawili: jinsi ukurasa unavyopakia haraka, na jinsi msimbo wake unavyofanya kazi haraka." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Mada ya jinsi ya kufanya tovuti zako ziwe haraka sana kwenye aina zote za vifaa, kwa aina zote za watumiaji, katika hali zote, bila shaka ni pana. Hapa kuna mambo ya kuzingatia unapoijenga mradi wa kawaida wa wavuti au kiendelezi cha kivinjari.

Hatua ya kwanza ya kuboresha tovuti yako ni kuelewa kinachotokea kwa kweli nyuma ya pazia. Kwa bahati nzuri, kivinjari chako kina zana za upelelezi zenye nguvu zilizojengwa ndani.

Ili kufungua Zana za Watengenezaji katika Edge, bonyeza zile nukta tatu juu kulia, kisha nenda kwenye Zana Zaidi > Zana za Watengenezaji. Au tumia njia ya mkato ya kibodi: `Ctrl` + `Shift` + `I` kwenye Windows au `Option` + `Command` + `I` kwenye Mac. Ukishafika hapo, bonyeza kichupo cha Utendaji - hapa ndipo utakapofanya uchunguzi wako.

**Hii ndiyo zana yako ya upelelezi wa utendaji:**
- **Fungua** Zana za Watengenezaji (utazitumia mara kwa mara kama mtengenezaji!)
- **Nenda** kwenye kichupo cha Utendaji - fikiria kama kifuatiliaji cha usawa wa programu yako ya wavuti
- **Bonyeza** kitufe cha Rekodi na tazama ukurasa wako ukifanya kazi
- **Chunguza** matokeo ili kugundua kinachochelewesha mambo

Hebu jaribu hili. Fungua tovuti (Microsoft.com inafanya kazi vizuri kwa hili) na bonyeza kitufe cha 'Rekodi'. Sasa fresha ukurasa na tazama profaili ikikamata kila kitu kinachotokea. Unapomaliza kurekodi, utaona muhtasari wa kina wa jinsi kivinjari kinavyofanya 'scripts', 'renders', na 'paints' tovuti. Inanikumbusha jinsi udhibiti wa misheni unavyofuatilia kila mfumo wakati wa uzinduzi wa roketi - unapata data ya wakati halisi juu ya kinachotokea na lini.

✅ [Nyaraka za Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) zina maelezo mengi zaidi ikiwa unataka kuchimba zaidi

> Kidokezo cha kitaalamu: Futa akiba ya kivinjari chako kabla ya kupima ili kuona jinsi tovuti yako inavyofanya kazi kwa wageni wa mara ya kwanza - kawaida ni tofauti sana na ziara za kurudia!

Chagua vipengele vya muda wa profaili ili kukuza matukio yanayotokea wakati ukurasa wako unapakia.

Pata muhtasari wa utendaji wa ukurasa wako kwa kuchagua sehemu ya muda wa profaili na kuangalia jopo la muhtasari:

![Muhtasari wa profaili ya Edge](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.sw.png)

Angalia jopo la Kumbukumbu ya Matukio ili kuona kama tukio lolote lilichukua zaidi ya ms 15:

![Kumbukumbu ya matukio ya Edge](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.sw.png)

✅ Jifunze profaili yako! Fungua zana za watengenezaji kwenye tovuti hii na uone kama kuna vizuizi. Ni rasilimali gani inayopakia polepole zaidi? Haraka zaidi?

## Nini cha Kuangalia Unapofanya Profaili

Kuendesha profaili ni mwanzo tu - ujuzi halisi ni kujua kile grafu za rangi zinakuambia. Usijali, utazoea kuzisoma. Watengenezaji wenye uzoefu wamejifunza kugundua ishara za onyo kabla hazijawa matatizo makubwa.

Hebu tuzungumze kuhusu wahalifu wa kawaida - matatizo ya utendaji yanayopenda kujificha kwenye miradi ya wavuti. Kama jinsi Marie Curie alivyolazimika kufuatilia viwango vya mionzi kwa uangalifu katika maabara yake, tunahitaji kuangalia mifumo fulani inayonyesha matatizo yanayokuja. Kuyagundua mapema kutakuokoa (na watumiaji wako) kutoka kwa kufadhaika.

**Ukubwa wa rasilimali**: Tovuti zimekuwa "nzito" zaidi kwa miaka, na uzito mwingi wa ziada unatokana na picha. Ni kama tumekuwa tukijaza zaidi na zaidi kwenye masanduku yetu ya kidijitali.

✅ Angalia [Arki ya Mtandao](https://httparchive.org/reports/page-weight) ili kuona jinsi ukubwa wa kurasa umekua kwa muda - ni wazi sana.

**Hivi ndivyo unavyoweza kuweka rasilimali zako zikiwa bora:**
- **Banisha** picha hizo! Miundo ya kisasa kama WebP inaweza kupunguza ukubwa wa faili kwa kiasi kikubwa
- **Toa** saizi sahihi ya picha kwa kila kifaa - hakuna haja ya kutuma picha kubwa za desktop kwa simu
- **Punguza** CSS na JavaScript yako - kila byte ni muhimu
- **Tumia** upakiaji wa polepole ili picha zipakie tu wakati watumiaji wanapozisogeza

**Uchambuzi wa DOM**: Kivinjari kinapaswa kujenga Mfano wa Kitu cha Nyaraka kulingana na msimbo unaoandika, kwa hivyo ni kwa maslahi ya utendaji mzuri wa ukurasa kuweka lebo zako kwa kiwango cha chini, ukitumia na kuunda tu kile kinachohitajika na ukurasa. Kwa hatua hii, CSS ya ziada inayohusiana na ukurasa inaweza kuboreshwa; mitindo inayohitajika kutumika tu kwenye ukurasa mmoja haitahitaji kujumuishwa kwenye karatasi kuu ya mitindo, kwa mfano.

**Mikakati muhimu ya uboreshaji wa DOM:**
- **Punguza** idadi ya vipengele vya HTML na viwango vya kuingiza
- **Ondoa** sheria za CSS zisizotumika na unganisha karatasi za mitindo kwa ufanisi
- **Panga** CSS kupakia tu kinachohitajika kwa kila ukurasa
- **Unda** HTML kwa njia ya kimantiki kwa uchambuzi bora wa kivinjari

**JavaScript**: Kila mtengenezaji wa JavaScript anapaswa kuangalia 'scripts' zinazozuia uchoraji ambazo lazima zipakie kabla ya DOM nyingine kuweza kuchambuliwa na kuchorwa kwenye kivinjari. Fikiria kutumia `defer` na scripts zako za ndani (kama inavyofanyika kwenye moduli ya Terrarium).

**Mbinu za kisasa za uboreshaji wa JavaScript:**
- **Tumia** sifa ya `defer` kupakia scripts baada ya uchambuzi wa DOM
- **Tekeleza** kugawanya msimbo ili kupakia JavaScript inayohitajika tu
- **Tumia** upakiaji wa polepole kwa utendaji usio wa muhimu
- **Punguza** matumizi ya maktaba na mifumo mizito inapowezekana

✅ Jaribu tovuti kadhaa kwenye [Tovuti ya Mtihani wa Kasi ya Tovuti](https://www.webpagetest.org/) ili kujifunza zaidi kuhusu ukaguzi wa kawaida unaofanywa ili kubaini utendaji wa tovuti.

Sasa kwa kuwa una wazo la jinsi kivinjari kinavyotoa rasilimali unazotuma kwake, hebu tuangalie mambo ya mwisho unayohitaji kufanya ili kukamilisha kiendelezi chako:

### Unda kazi ya kuhesabu rangi

Sasa tutaunda kazi inayogeuza data ya nambari kuwa rangi zenye maana. Fikiria kama mfumo wa taa za barabarani - kijani kwa nishati safi, nyekundu kwa kiwango cha juu cha kaboni.

Kazi hii itachukua data ya CO2 kutoka API yetu na kuamua ni rangi gani inayoonyesha vyema athari za mazingira. Ni sawa na jinsi wanasayansi wanavyotumia mfumo wa rangi katika ramani za joto kuonyesha mifumo tata ya data - kutoka kwa joto la bahari hadi uundaji wa nyota. Hebu tuongeze hii kwenye `/src/index.js`, mara tu baada ya zile `const` tulizoanzisha awali:

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

**Hebu tuchambue kazi hii ya busara:**
- **Inaweka** safu mbili - moja kwa viwango vya CO2, nyingine kwa rangi (kijani = safi, kahawia = chafu!)
- **Inapata** mechi ya karibu zaidi na thamani yetu halisi ya CO2 kwa kutumia upangaji wa safu
- **Inachukua** rangi inayolingana kwa kutumia njia ya findIndex()
- **Inatuma** ujumbe kwa script ya nyuma ya Chrome na rangi yetu iliyochaguliwa
- **Inatumia** maandishi ya kiolezo (hizo backticks) kwa muundo safi wa maandishi
- **Inahifadhi** kila kitu kikiwa kimepangwa kwa tamko la const

API ya `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) ni kama mfumo wa neva wa kiendelezi chako - inashughulikia mawasiliano yote ya nyuma ya pazia na kazi:

> "Tumia API ya chrome.runtime kupata ukurasa wa nyuma, kurudisha maelezo kuhusu manifest, na kusikiliza na kujibu matukio katika maisha ya programu au kiendelezi. Unaweza pia kutumia API hii kubadilisha njia ya URL za jamaa kuwa URL zilizo na sifa kamili."

**Kwa nini API ya Chrome Runtime ni muhimu:**
- **Inaruhusu** sehemu tofauti za kiendelezi chako kuzungumza
- **Inashughulikia** kazi za nyuma bila kufungia kiolesura cha mtumiaji
- **Inasimamia** matukio ya maisha ya kiendelezi chako
- **Inafanya** kupitisha ujumbe kati ya scripts kuwa rahisi sana

✅ Ikiwa unakijenga kiendelezi hiki cha kivinjari kwa Edge, inaweza kushangaza kwamba unatumia API ya chrome. Matoleo mapya ya kivinjari cha Edge yanaendesha injini ya kivinjari ya Chromium, kwa hivyo unaweza kutumia zana hizi.

> **Kidokezo cha Kitaalamu**: Ikiwa unataka kufanya profaili ya kiendelezi cha kivinjari, fungua zana za watengenezaji kutoka ndani ya kiendelezi chenyewe, kwani ni kivinjari chake tofauti. Hii inakupa ufikiaji wa vipimo vya utendaji maalum vya kiendelezi.

### Weka rangi ya ikoni ya msingi

Kabla ya kuanza kupata data halisi, hebu tupe kiendelezi chetu mwanzo. Hakuna mtu anayependa kutazama ikoni tupu au inayovunjika. Tutaanza na rangi ya kijani ili watumiaji wajue kiendelezi kinafanya kazi mara tu wanapokisakinisha.

Katika kazi yako ya `init()`, hebu weka ikoni ya kijani ya msingi:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Hii uanzishaji unakamilisha:**
- **Inaweka** rangi ya kijani ya kawaida kama hali ya msingi
- **Inatoa** maoni ya haraka ya kuona wakati kiendelezi kinapopakia
- **Inaanzisha** muundo wa mawasiliano na script ya nyuma
- **Inahakikisha** watumiaji wanaona kiendelezi kinachofanya kazi kabla ya data kupakia
### Piga kazi, tekeleza wito

Sasa hebu tuunganishe kila kitu pamoja ili kwamba data mpya ya CO2 inapokuja, ikoni yako ibadilike kiotomatiki na rangi sahihi. Ni kama kuunganisha mzunguko wa mwisho katika kifaa cha elektroniki - ghafla vipengele vyote vya mtu binafsi vinafanya kazi kama mfumo mmoja.

Ongeza mstari huu mara tu baada ya kupata data ya CO2 kutoka API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Muunganiko huu unakamilisha:**
- **Unaunganisha** mtiririko wa data ya API na mfumo wa kiashiria cha kuona
- **Unasababisha** masasisho ya ikoni kiotomatiki wakati data mpya inafika
- **Unahakikisha** maoni ya kuona ya wakati halisi kulingana na kiwango cha sasa cha kaboni
- **Unadumisha** mgawanyo wa wasiwasi kati ya upatikanaji wa data na mantiki ya kuonyesha

Na hatimaye, katika `/dist/background.js`, ongeza msikilizaji wa simu hizi za hatua za nyuma:

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

**Hii script ya nyuma inafanya:**
- **Inasikiliza** ujumbe kutoka kwa script yako kuu (kama mpokeaji wa simu)
- **Inashughulikia** maombi hayo ya 'updateIcon' kubadilisha ikoni ya zana yako
- **Inaunda** ikoni mpya papo hapo kwa kutumia API ya Canvas
- **Inachora** duara rahisi la rangi linaloonyesha kiwango cha sasa cha kaboni
- **Inasasisha** zana ya kivinjari chako na ikoni mpya
- **Inatumia** OffscreenCanvas kwa utendaji laini (hakuna kuzuia UI)

✅ Utajifunza zaidi kuhusu API ya Canvas katika [Masomo ya Mchezo wa Anga](../../6-space-game/2-drawing-to-canvas/README.md).

**Wakati wa kujaribu kiendelezi chako:**
- **Jenga** kila kitu kwa `npm run build`
- **Pakia upya** kiendelezi chako kwenye kivinjari (usisahau hatua hii)
- **Fungua** kiendelezi chako na tazama ikoni hiyo ikibadilisha rangi
- **Angalia** jinsi inavyoitikia data halisi ya kaboni kutoka kote ulimwenguni

Sasa utajua kwa haraka ikiwa ni wakati mzuri wa kufua nguo au ikiwa unapaswa kusubiri nishati safi zaidi. Umejenga kitu chenye manufaa halisi na umejifunza kuhusu utendaji wa kivinjari njiani.

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha uwezo wa ufuatiliaji wa utendaji wa kiendelezi cha kivinjari kwa kuongeza kipengele kinachofuatilia na kuonyesha nyakati za upakiaji kwa vipengele tofauti vya kiendelezi.

**Kichocheo:** Unda mfumo wa ufuatiliaji wa utendaji kwa kiendelezi cha kivinjari kinachopima na kurekodi muda unaochukua kupata data ya CO2 kutoka API, kuhesabu rangi, na kusasisha ikoni. Ongeza kazi inayoitwa `performanceTracker` inayotumia API ya
Hapa kuna misheni ya kuvutia ya upelelezi: chagua tovuti chache za chanzo huria ambazo zimekuwepo kwa miaka mingi (fikiri Wikipedia, GitHub, au Stack Overflow) na chunguza historia yao ya commit. Je, unaweza kugundua walipofanya maboresho ya utendaji? Ni matatizo gani yaliendelea kujitokeza?

**Mbinu yako ya uchunguzi:**
- **Tafuta** ujumbe wa commit kwa maneno kama "boresha," "utendaji," au "haraka"
- **Angalia** mifumo - je, wanazidi kurekebisha aina zile zile za matatizo?
- **Tambua** sababu za kawaida zinazochelewesha tovuti
- **Shiriki** unachogundua - waendelezaji wengine hujifunza kutoka kwa mifano halisi

## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ff-quizzes.netlify.app/web/quiz/28)

## Mapitio na Kujisomea

Fikiria kujisajili kwa [jarida la utendaji](https://perf.email/)

Chunguza baadhi ya njia ambazo vivinjari hupima utendaji wa wavuti kwa kuangalia kupitia tabo za utendaji katika zana zao za wavuti. Je, unapata tofauti kubwa?

## Kazi

[Chambua tovuti kwa utendaji](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.