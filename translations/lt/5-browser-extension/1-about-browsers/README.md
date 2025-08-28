<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0bb55e0b98600afab801eea115228873",
  "translation_date": "2025-08-28T11:23:39+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinio projektas 1 dalis: Viskas apie naršykles

![Naršyklės eskizas](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.lt.jpg)  
> Eskizas sukurtas [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/23)

### Įvadas

Naršyklės plėtiniai prideda papildomų funkcijų naršyklei. Tačiau prieš kuriant plėtinį, verta šiek tiek sužinoti, kaip naršyklės atlieka savo darbą.

### Apie naršyklę

Šioje pamokų serijoje išmoksite kurti naršyklės plėtinį, kuris veiks „Chrome“, „Firefox“ ir „Edge“ naršyklėse. Šioje dalyje sužinosite, kaip veikia naršyklės, ir sukursite naršyklės plėtinio struktūrą.

Bet kas iš tikrųjų yra naršyklė? Tai programinė įranga, leidžianti galutiniam vartotojui pasiekti turinį iš serverio ir rodyti jį tinklalapiuose.

✅ Šiek tiek istorijos: pirmoji naršyklė vadinosi „WorldWideWeb“ ir ją 1990 m. sukūrė seras Timotis Berners-Lee.

![ankstyvosios naršyklės](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.lt.jpg)  
> Kai kurios ankstyvosios naršyklės, šaltinis [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Kai vartotojas prisijungia prie interneto naudodamas URL (Uniform Resource Locator) adresą, paprastai per Hypertext Transfer Protocol su `http` arba `https` adresu, naršyklė bendrauja su žiniatinklio serveriu ir gauna tinklalapį.

Šiuo metu naršyklės atvaizdavimo variklis rodo jį vartotojo įrenginyje, kuris gali būti mobilusis telefonas, stacionarus kompiuteris ar nešiojamasis kompiuteris.

Naršyklės taip pat gali talpinti turinį, kad jo nereikėtų kiekvieną kartą gauti iš serverio. Jos gali įrašyti vartotojo naršymo istoriją, saugoti „sausainėlius“ (mažus duomenų fragmentus, kuriuose yra informacija apie vartotojo veiklą) ir dar daugiau.

Labai svarbu prisiminti, kad naršyklės nėra vienodos! Kiekviena naršyklė turi savo privalumų ir trūkumų, o profesionalus žiniatinklio kūrėjas turi suprasti, kaip užtikrinti, kad tinklalapiai gerai veiktų įvairiose naršyklėse. Tai apima mažų ekranų, tokių kaip mobiliojo telefono, palaikymą, taip pat vartotojų, kurie yra neprisijungę, poreikius.

Labai naudinga svetainė, kurią tikriausiai turėtumėte įtraukti į savo mėgstamos naršyklės žymes, yra [caniuse.com](https://www.caniuse.com). Kurdami tinklalapius, galite naudotis „caniuse“ palaikomų technologijų sąrašais, kad geriausiai palaikytumėte savo vartotojus.

✅ Kaip galite sužinoti, kurios naršyklės yra populiariausios tarp jūsų svetainės vartotojų? Patikrinkite savo analizės duomenis – galite įdiegti įvairias analizės programas kaip savo žiniatinklio kūrimo proceso dalį, ir jos parodys, kurios naršyklės yra dažniausiai naudojamos.

## Naršyklės plėtiniai

Kodėl verta kurti naršyklės plėtinį? Tai patogus įrankis, kurį galima pridėti prie naršyklės, kai reikia greitai atlikti pasikartojančias užduotis. Pavyzdžiui, jei dažnai reikia tikrinti spalvas įvairiuose tinklalapiuose, galite įdiegti spalvų parinkiklio plėtinį. Jei sunku prisiminti slaptažodžius, galite naudoti slaptažodžių valdymo plėtinį.

Naršyklės plėtinius taip pat smagu kurti. Jie paprastai atlieka ribotą skaičių užduočių, kurias atlieka labai gerai.

✅ Kokie yra jūsų mėgstamiausi naršyklės plėtiniai? Kokias užduotis jie atlieka?

### Plėtinių diegimas

Prieš pradėdami kurti, pažvelkite į naršyklės plėtinio kūrimo ir diegimo procesą. Nors kiekviena naršyklė šiek tiek skiriasi, procesas „Chrome“ ir „Firefox“ yra panašus į šį pavyzdį „Edge“ naršyklėje:

![ekrano nuotrauka iš Edge naršyklės, rodanti atidarytą edge://extensions puslapį ir nustatymų meniu](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.lt.png)

> Pastaba: Įsitikinkite, kad įjungėte kūrėjo režimą ir leidote plėtinius iš kitų parduotuvių.

Iš esmės procesas bus toks:

- sukurkite savo plėtinį naudodami `npm run build`  
- naršyklėje eikite į plėtinių skydelį naudodami mygtuką „Nustatymai ir daugiau“ (piktograma `...`) viršutiniame dešiniajame kampe  
- jei tai naujas diegimas, pasirinkite `load unpacked`, kad įkeltumėte naują plėtinį iš jo kūrimo aplanko (mūsų atveju tai yra `/dist`)  
- arba spustelėkite `reload`, jei atnaujinate jau įdiegtą plėtinį  

✅ Šios instrukcijos taikomos jūsų pačių sukurtiems plėtiniams; norėdami įdiegti plėtinius, kurie jau yra išleisti naršyklės plėtinių parduotuvėje, turėtumėte apsilankyti šiose [parduotuvėse](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) ir įdiegti norimą plėtinį.

### Pradėkite

Jūs sukursite naršyklės plėtinį, kuris rodys jūsų regiono anglies pėdsaką, pateikdamas jūsų regiono energijos suvartojimą ir energijos šaltinį. Plėtinys turės formą, kuri surinks API raktą, kad galėtumėte pasiekti CO2 Signal API.

**Jums reikės:**

- [API rakto](https://www.co2signal.com/); įveskite savo el. pašto adresą šiame puslapyje ir jums bus atsiųstas raktas  
- [kodo jūsų regionui](http://api.electricitymap.org/v3/zones), atitinkančio [Electricity Map](https://www.electricitymap.org/map) (pavyzdžiui, Bostone naudoju „US-NEISO“)  
- [pradinio kodo](../../../../5-browser-extension/start). Atsisiųskite aplanką `start`; užbaigsite kodą šiame aplanke  
- [NPM](https://www.npmjs.com) – NPM yra paketų valdymo įrankis; įdiekite jį lokaliai, ir paketai, išvardyti jūsų `package.json` faile, bus įdiegti naudojimui jūsų žiniatinklio projekte  

✅ Sužinokite daugiau apie paketų valdymą šiame [puikiame mokymosi modulyje](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Skirkite minutę peržiūrėti kodo bazę:

dist  
    -|manifest.json (numatytosios reikšmės nustatomos čia)  
    -|index.html (HTML žymėjimas čia)  
    -|background.js (JS foninis kodas čia)  
    -|main.js (sukurtas JS)  
src  
    -|index.js (jūsų JS kodas čia)  

✅ Kai turėsite savo API raktą ir regiono kodą, išsaugokite juos kur nors užrašuose, kad galėtumėte naudoti ateityje.

### Sukurkite HTML plėtiniui

Šis plėtinys turi dvi peržiūras. Viena skirta API rakto ir regiono kodo surinkimui:

![ekrano nuotrauka iš užbaigto plėtinio, atidaryto naršyklėje, rodanti formą su įvestimis regiono pavadinimui ir API raktui.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.lt.png)

Ir kita – regiono anglies suvartojimo rodymui:

![ekrano nuotrauka iš užbaigto plėtinio, rodanti anglies suvartojimo ir iškastinio kuro procento reikšmes regionui US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.lt.png)

Pradėkime nuo formos HTML kūrimo ir jos stiliaus pritaikymo naudojant CSS.

Aplanke `/dist` sukursite formą ir rezultatų sritį. Faile `index.html` užpildykite nurodytą formos sritį:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```  
Tai yra forma, kurioje jūsų išsaugota informacija bus įvesta ir išsaugota vietinėje saugykloje.

Toliau sukurkite rezultatų sritį; po paskutinės formos žymos pridėkite keletą div elementų:

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```  
Šiuo metu galite pabandyti sukurti projektą. Įsitikinkite, kad įdiegėte šio plėtinio paketų priklausomybes:

```
npm install
```  

Ši komanda naudos npm, „Node Package Manager“, kad įdiegtų „webpack“ jūsų plėtinio kūrimo procesui. Šio proceso išvestį galite pamatyti aplanke `/dist/main.js` – pamatysite, kad kodas buvo sujungtas.

Kol kas plėtinys turėtų būti sukurtas, ir jei jį įdiegsite „Edge“ kaip plėtinį, pamatysite tvarkingai rodomą formą.

Sveikiname, jūs žengėte pirmuosius žingsnius kuriant naršyklės plėtinį. Kitose pamokose padarysite jį funkcionalesnį ir naudingesnį.

---

## 🚀 Iššūkis

Apsilankykite naršyklės plėtinių parduotuvėje ir įdiekite vieną plėtinį į savo naršyklę. Galite įdomiais būdais išnagrinėti jo failus. Ką atrandate?

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/24)

## Apžvalga ir savarankiškas mokymasis

Šioje pamokoje sužinojote šiek tiek apie žiniatinklio naršyklės istoriją; pasinaudokite šia galimybe sužinoti, kaip Pasaulinio tinklo išradėjai įsivaizdavo jo naudojimą, skaitydami daugiau apie jo istoriją. Naudingos svetainės:

[Žiniatinklio naršyklių istorija](https://www.mozilla.org/firefox/browsers/browser-history/)

[Žiniatinklio istorija](https://webfoundation.org/about/vision/history-of-the-web/)

[Interviu su Timu Bernersu-Li](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Užduotis

[Perdarykite savo plėtinį](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.