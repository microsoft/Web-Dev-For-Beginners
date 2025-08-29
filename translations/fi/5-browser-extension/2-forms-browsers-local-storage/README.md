<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T00:39:43+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "fi"
}
-->
# Selaimen laajennusprojekti osa 2: API:n kutsuminen, Local Storagen käyttö

## Ennakkoquiz

[Ennakkoquiz](https://ff-quizzes.netlify.app/web/quiz/25)

### Johdanto

Tässä oppitunnissa opit kutsumaan API:a lähettämällä selaimen laajennuksen lomakkeen ja näyttämään tulokset laajennuksessa. Lisäksi opit, kuinka voit tallentaa tietoja selaimen local storageen tulevaa käyttöä varten.

✅ Seuraa numeroituja osioita oikeissa tiedostoissa tietääksesi, mihin koodi sijoitetaan.

### Aseta laajennuksessa käsiteltävät elementit:

Tässä vaiheessa olet jo rakentanut HTML:n lomakkeelle ja tulosten `<div>`-elementille selaimen laajennusta varten. Tästä eteenpäin sinun tulee työskennellä `/src/index.js`-tiedostossa ja rakentaa laajennusta pala palalta. Viittaa [edelliseen oppituntiin](../1-about-browsers/README.md) projektin asennuksesta ja rakennusprosessista.

Työskennellessäsi `index.js`-tiedostossa aloita luomalla joitakin `const`-muuttujia, jotka pitävät arvot eri kentille:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Kaikki nämä kentät viittaavat niiden CSS-luokkaan, kuten määritit HTML:ssä edellisessä oppitunnissa.

### Lisää kuuntelijat

Seuraavaksi lisää tapahtumakuuntelijat lomakkeelle ja tyhjennysnapille, joka nollaa lomakkeen. Näin käyttäjän lähettäessä lomakkeen tai klikattaessa tyhjennysnappia tapahtuu jotain. Lisää myös kutsu sovelluksen alustamiseen tiedoston loppuun:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Huomaa lyhyt tapa kuunnella submit- tai click-tapahtumaa ja kuinka tapahtuma välitetään handleSubmit- tai reset-funktioille. Voitko kirjoittaa tämän lyhyen muodon pidemmässä muodossa? Kumpaa tapaa suosittelet?

### Rakenna init()- ja reset()-funktiot:

Nyt rakennat funktiota, joka alustaa laajennuksen, nimeltään init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```
Tässä funktiossa on mielenkiintoista logiikkaa. Lukemalla sen läpi, näetkö mitä tapahtuu?

- Kaksi `const`-muuttujaa asetetaan tarkistamaan, onko käyttäjä tallentanut APIKey:n ja aluekoodin local storageen.
- Jos jompikumpi näistä on null, näytä lomake muuttamalla sen tyyliä 'block'-näkyväksi.
- Piilota tulokset, latausviesti ja clearBtn sekä aseta virheteksti tyhjäksi.
- Jos avain ja aluekoodi ovat olemassa, aloita rutiini:
  - kutsu API saadaksesi hiilidioksidinkäyttötiedot
  - piilota tulosalue
  - piilota lomake
  - näytä tyhjennysnappi

Ennen kuin jatkat, on hyödyllistä oppia tärkeästä selaimissa saatavilla olevasta käsitteestä: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage on hyödyllinen tapa tallentaa merkkijonoja selaimeen `key-value`-parina. Tämäntyyppistä verkkotallennusta voidaan käsitellä JavaScriptillä tietojen hallintaan selaimessa. LocalStorage ei vanhene, kun taas SessionStorage, toinen verkkotallennustyyppi, tyhjennetään selaimen sulkemisen yhteydessä. Eri tallennustyypeillä on omat hyvät ja huonot puolensa.

> Huomio - selaimen laajennuksella on oma local storage; pääselaimen ikkuna on eri instanssi ja käyttäytyy erillään.

Asetat APIKey:lle merkkijonoarvon esimerkiksi, ja voit nähdä sen Edgessä "tarkastamalla" verkkosivua (voit klikata selainta oikealla ja valita tarkasta) ja siirtymällä Sovellukset-välilehteen nähdäksesi tallennuksen.

![Local storage -näkymä](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.fi.png)

✅ Mieti tilanteita, joissa et haluaisi tallentaa tietoja LocalStorageen. Yleisesti ottaen API-avainten tallentaminen LocalStorageen on huono idea! Näetkö miksi? Meidän tapauksessamme, koska sovelluksemme on tarkoitettu vain oppimiseen eikä sitä julkaista sovelluskaupassa, käytämme tätä menetelmää.

Huomaa, että käytät Web API:a LocalStoragen käsittelyyn joko `getItem()`, `setItem()` tai `removeItem()`-metodeilla. Se on laajasti tuettu eri selaimissa.

Ennen kuin rakennat `displayCarbonUsage()`-funktion, joka kutsutaan `init()`-funktiossa, rakennetaan toiminnallisuus alkuperäisen lomakkeen lähettämisen käsittelyyn.

### Käsittele lomakkeen lähetys

Luo funktio nimeltä `handleSubmit`, joka hyväksyy tapahtuma-argumentin `(e)`. Estä tapahtuman eteneminen (tässä tapauksessa haluamme estää selainta päivittämästä) ja kutsu uusi funktio, `setUpUser`, välittäen argumentit `apiKey.value` ja `region.value`. Näin käytät kahta arvoa, jotka tuodaan alkuperäisestä lomakkeesta, kun asianmukaiset kentät on täytetty.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Kertaa muistiasi - HTML, jonka rakensit viime oppitunnilla, sisältää kaksi syöttökenttää, joiden `values`-arvot tallennetaan `const`-muuttujiin tiedoston alussa, ja ne ovat molemmat `required`, joten selain estää käyttäjiä syöttämästä null-arvoja.

### Käyttäjän asettaminen

Siirrytään `setUpUser`-funktioon, jossa asetetaan local storagen arvot apiKey:lle ja regionName:lle. Lisää uusi funktio:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```
Tämä funktio näyttää latausviestin, kun API:a kutsutaan. Tässä vaiheessa olet saapunut selaimen laajennuksen tärkeimmän funktion luomiseen!

### Näytä hiilidioksidinkäyttö

Lopuksi on aika kysyä API:lta!

Ennen kuin jatkamme, meidän tulisi keskustella API:sta. API:t eli [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html) ovat kriittinen osa web-kehittäjän työkalupakkia. Ne tarjoavat standardoituja tapoja ohjelmien vuorovaikutukseen ja rajapintaan keskenään. Esimerkiksi, jos rakennat verkkosivustoa, joka tarvitsee kysyä tietokantaa, joku on saattanut luoda API:n, jota voit käyttää. Vaikka API:ita on monenlaisia, yksi suosituimmista on [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Termi 'REST' tarkoittaa 'Representational State Transfer' ja sisältää erilaisten URL-osoitteiden käyttämisen datan hakemiseen. Tee hieman tutkimusta eri API-tyypeistä, jotka ovat kehittäjien saatavilla. Mikä formaatti miellyttää sinua?

Tässä funktiossa on tärkeää huomioida [`async`-avainsana](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Kirjoittamalla funktiosi niin, että ne toimivat asynkronisesti, ne odottavat toiminnon, kuten datan palauttamisen, valmistumista ennen jatkamista.

Tässä on lyhyt video `async`-toiminnasta:

[![Async ja Await lupauksien hallintaan](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ja Await lupauksien hallintaan")

> 🎥 Klikkaa yllä olevaa kuvaa nähdäksesi videon async/await-toiminnasta.

Luo uusi funktio kysyäksesi C02Signal API:lta:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Tämä on iso funktio. Mitä tässä tapahtuu?

- Parhaiden käytäntöjen mukaisesti käytät `async`-avainsanaa, jotta funktio toimii asynkronisesti. Funktio sisältää `try/catch`-lohkon, koska se palauttaa lupauksen, kun API palauttaa dataa. Koska et voi hallita API:n vastausnopeutta (se ei ehkä vastaa ollenkaan!), sinun täytyy käsitellä tämä epävarmuus kutsumalla sitä asynkronisesti.
- Kysyt co2signal API:lta saadaksesi alueesi dataa käyttämällä API-avaintasi. Käyttääksesi avainta sinun täytyy käyttää eräänlaista autentikointia header-parametreissa.
- Kun API vastaa, määrität sen vastausdatan eri elementit näytön osiin, jotka olet asettanut näyttämään nämä tiedot.
- Jos tapahtuu virhe tai tulosta ei ole, näytät virheviestin.

✅ Asynkronisten ohjelmointimallien käyttö on toinen erittäin hyödyllinen työkalu työkalupakissasi. Lue [eri tavoista](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), joilla voit konfiguroida tämän tyyppistä koodia.

Onnittelut! Jos rakennat laajennuksesi (`npm run build`) ja päivität sen laajennuspaneelissa, sinulla on toimiva laajennus! Ainoa asia, joka ei toimi, on kuvake, ja korjaat sen seuraavassa oppitunnissa.

---

## 🚀 Haaste

Olemme keskustelleet useista API-tyypeistä näissä oppitunneissa. Valitse verkkosivusto API ja tutki syvällisesti, mitä se tarjoaa. Esimerkiksi tutustu selaimissa saatavilla oleviin API:ihin, kuten [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Mikä tekee API:sta mielestäsi hyvän?

## Jälkiquiz

[Jälkiquiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Kertaus ja itseopiskelu

Tässä oppitunnissa opit LocalStoragesta ja API:ista, jotka ovat molemmat erittäin hyödyllisiä ammattimaiselle web-kehittäjälle. Voitko miettiä, kuinka nämä kaksi asiaa toimivat yhdessä? Mieti, kuinka suunnittelisit verkkosivuston, joka tallentaisi kohteita API:n käytettäväksi.

## Tehtävä

[Adoptoi API](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.