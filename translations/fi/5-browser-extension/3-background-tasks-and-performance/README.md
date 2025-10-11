<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:27:18+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "fi"
}
-->
# Selaimen laajennusprojekti, osa 3: Taustatehtävät ja suorituskyky

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/27)

### Johdanto

Edellisissä kahdessa oppitunnissa opit rakentamaan lomakkeen ja näyttöalueen API:sta haetuille tiedoille. Tämä on hyvin yleinen tapa luoda verkkosivusto. Opit myös käsittelemään tietojen hakua asynkronisesti. Selaimen laajennuksesi on melkein valmis.

Jäljellä on taustatehtävien hallinta, kuten laajennuksen kuvakkeen värin päivittäminen. Tämä on hyvä hetki keskustella siitä, miten selain hallitsee tällaisia tehtäviä. Tarkastellaan näitä selaimen tehtäviä verkkosivustosi suorituskyvyn näkökulmasta.

## Verkkosuorituskyvyn perusteet

> "Verkkosivuston suorituskyky liittyy kahteen asiaan: kuinka nopeasti sivu latautuu ja kuinka nopeasti sen koodi toimii." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Se, miten verkkosivustot saadaan toimimaan salamannopeasti kaikilla laitteilla, kaikille käyttäjille ja kaikissa tilanteissa, on laaja aihe. Tässä on muutamia asioita, jotka kannattaa pitää mielessä, kun rakennat joko tavallista verkkoprojektia tai selaimen laajennusta.

Ensimmäinen asia, joka sinun tulee tehdä varmistaaksesi sivustosi tehokkaan toiminnan, on kerätä tietoa sen suorituskyvystä. Ensimmäinen paikka tähän on verkkoselaimesi kehittäjätyökalut. Edgessä voit valita "Asetukset ja lisää" -painikkeen (kolmen pisteen kuvake selaimen oikeassa yläkulmassa), siirtyä kohtaan Lisää työkaluja > Kehittäjätyökalut ja avata Suorituskyky-välilehden. Voit myös käyttää pikanäppäimiä `Ctrl` + `Shift` + `I` Windowsissa tai `Option` + `Command` + `I` Macissa avataksesi kehittäjätyökalut.

Suorituskyky-välilehdellä on Profilointi-työkalu. Avaa verkkosivusto (kokeile esimerkiksi [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) ja napsauta 'Tallenna'-painiketta, sitten päivitä sivusto. Voit lopettaa tallennuksen milloin tahansa, ja näet rutiinit, jotka on luotu 'script', 'render' ja 'paint' -toimintoja varten:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.fi.png)

✅ Tutustu [Microsoftin dokumentaatioon](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) Edgen Suorituskyky-paneelista.

> Vinkki: saadaksesi tarkat tiedot verkkosivustosi käynnistysajasta, tyhjennä selaimesi välimuisti.

Valitse profiilin aikajanan elementtejä zoomataksesi tapahtumiin, jotka tapahtuvat sivusi latautuessa.

Saat yleiskuvan sivusi suorituskyvystä valitsemalla osan profiilin aikajanasta ja tarkastelemalla yhteenvetopaneelia:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.fi.png)

Tarkista Tapahtumaloki-paneeli nähdäksesi, kestikö jokin tapahtuma yli 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.fi.png)

✅ Tutustu profilointityökaluun! Avaa kehittäjätyökalut tällä sivustolla ja katso, onko pullonkauloja. Mikä on hitaimmin latautuva resurssi? Nopein?

## Profilointitarkistukset

Yleisesti ottaen on olemassa joitakin "ongelma-alueita", joita jokaisen verkkokehittäjän tulisi tarkkailla rakentaessaan sivustoa välttääkseen ikäviä yllätyksiä, kun sivusto on valmis tuotantoon.

**Resurssien koot**: Verkkosivustot ovat viime vuosina "raskautuneet" ja siten hidastuneet. Osa tästä painosta liittyy kuvien käyttöön.

✅ Tutustu [Internet Archiven](https://httparchive.org/reports/page-weight) historialliseen näkymään sivustojen painosta ja muusta.

Hyvä käytäntö on varmistaa, että kuvasi ovat optimoituja ja toimitetaan oikeassa koossa ja resoluutiossa käyttäjillesi.

**DOM-läpikäynnit**: Selaimen täytyy rakentaa Document Object Model (DOM) kirjoittamasi koodin perusteella, joten hyvän sivuston suorituskyvyn kannalta on tärkeää pitää tagit minimissä ja käyttää vain sitä, mitä sivu tarvitsee. Esimerkiksi ylimääräinen CSS, joka liittyy sivuun, voidaan optimoida; tyylit, joita tarvitaan vain yhdellä sivulla, eivät tarvitse olla mukana päätyylitiedostossa.

**JavaScript**: Jokaisen JavaScript-kehittäjän tulisi tarkkailla 'render-blocking' -skriptejä, jotka täytyy ladata ennen kuin DOM voidaan käydä läpi ja piirtää selaimeen. Harkitse `defer`-attribuutin käyttöä inline-skripteissä (kuten Terrarium-moduulissa).

✅ Kokeile joitakin sivustoja [Site Speed Test -sivustolla](https://www.webpagetest.org/) oppiaksesi lisää yleisistä tarkistuksista, joita tehdään sivuston suorituskyvyn määrittämiseksi.

Nyt kun sinulla on käsitys siitä, miten selain renderöi lähettämäsi resurssit, tarkastellaan viimeisiä asioita, jotka sinun täytyy tehdä laajennuksesi viimeistelemiseksi:

### Luo funktio värin laskemiseen

Työskentele tiedostossa `/src/index.js` ja lisää funktio nimeltä `calculateColor()` niiden `const`-muuttujien jälkeen, jotka määritit saadaksesi pääsyn DOM:iin:

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

Mitä tässä tapahtuu? Syötät arvon (hiili-intensiteetti) API-kutsusta, jonka teit edellisessä oppitunnissa, ja sitten lasket, kuinka lähellä sen arvo on värien taulukossa esitettyä indeksiä. Sen jälkeen lähetät lähimmän värin arvon chrome runtimeen.

Chrome.runtime sisältää [API:n](https://developer.chrome.com/extensions/runtime), joka käsittelee kaikenlaisia taustatehtäviä, ja laajennuksesi hyödyntää sitä:

> "Käytä chrome.runtime API:a hakeaksesi taustasivun, saadaksesi tietoja manifestista ja kuunnellaksesi sekä vastataksesi sovelluksen tai laajennuksen elinkaaren tapahtumiin. Voit myös käyttää tätä API:a muuntaaksesi URL-osoitteiden suhteelliset polut täysin määritellyiksi URL-osoitteiksi."

✅ Jos kehität tätä selaimen laajennusta Edgelle, voi olla yllättävää, että käytät chrome API:a. Uudemmat Edge-selaimen versiot toimivat Chromium-selainmoottorilla, joten voit hyödyntää näitä työkaluja.

> Huomaa, että jos haluat profiloida selaimen laajennusta, avaa kehittäjätyökalut laajennuksen sisältä, koska se on oma erillinen selaininstanssinsa.

### Aseta oletuskuvakkeen väri

Nyt, `init()`-funktiossa, aseta kuvake aluksi yleiseksi vihreäksi kutsumalla jälleen chromen `updateIcon`-toimintoa:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Kutsu funktio ja suorita kutsu

Seuraavaksi kutsu juuri luomasi funktio lisäämällä se C02Signal API:n palauttamaan lupaukseen:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Ja lopuksi, tiedostossa `/dist/background.js`, lisää kuuntelija näille taustatehtäväkutsuille:

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

Tässä koodissa lisäät kuuntelijan kaikille viesteille, jotka tulevat taustatehtävien hallintaan. Jos viesti on nimeltään 'updateIcon', seuraava koodi suoritetaan piirtämään oikean värinen kuvake Canvas API:n avulla.

✅ Opit lisää Canvas API:sta [Avaruuspeli-oppitunneilla](../../6-space-game/2-drawing-to-canvas/README.md).

Nyt, rakenna laajennuksesi uudelleen (`npm run build`), päivitä ja käynnistä laajennuksesi ja katso värin muuttuvan. Onko hyvä hetki käydä asioilla tai tiskata? Nyt tiedät!

Onnittelut, olet rakentanut hyödyllisen selaimen laajennuksen ja oppinut lisää siitä, miten selain toimii ja miten sen suorituskykyä profiloidaan.

---

## 🚀 Haaste

Tutki joitakin avoimen lähdekoodin verkkosivustoja, jotka ovat olleet olemassa pitkään, ja yritä GitHub-historian perusteella selvittää, miten niitä on optimoitu vuosien varrella suorituskyvyn osalta, jos ollenkaan. Mikä on yleisin ongelmakohta?

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/28)

## Kertaus ja itseopiskelu

Harkitse [suorituskykyuutiskirjeen](https://perf.email/) tilaamista.

Tutki joitakin tapoja, joilla selaimet arvioivat verkkosuorituskykyä tarkastelemalla niiden kehittäjätyökalujen suorituskyky-välilehtiä. Löydätkö merkittäviä eroja?

## Tehtävä

[Analysoi sivuston suorituskykyä](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.