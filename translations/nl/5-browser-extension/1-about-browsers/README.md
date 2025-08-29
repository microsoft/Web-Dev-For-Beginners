<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2326d04e194a10aa760b51f5e5a1f61d",
  "translation_date": "2025-08-29T00:55:15+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "nl"
}
-->
# Browserextensieproject Deel 1: Alles over Browsers

![Browser sketchnote](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.nl.jpg)
> Sketchnote door [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Quiz vóór de les

[Quiz vóór de les](https://ff-quizzes.netlify.app/web/quiz/23)

### Introductie

Browserextensies voegen extra functionaliteit toe aan een browser. Maar voordat je er een bouwt, is het handig om eerst te begrijpen hoe browsers werken.

### Over de browser

In deze lessenreeks leer je hoe je een browserextensie bouwt die werkt in Chrome, Firefox en Edge. In dit deel ontdek je hoe browsers werken en zet je de basis op voor de elementen van de browserextensie.

Maar wat is een browser precies? Het is een softwaretoepassing waarmee een eindgebruiker inhoud van een server kan ophalen en deze kan weergeven op webpagina's.

✅ Een beetje geschiedenis: de eerste browser heette 'WorldWideWeb' en werd in 1990 gemaakt door Sir Timothy Berners-Lee.

![early browsers](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.nl.jpg)
> Enkele vroege browsers, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Wanneer een gebruiker verbinding maakt met het internet via een URL (Uniform Resource Locator)-adres, meestal met behulp van het Hypertext Transfer Protocol via een `http`- of `https`-adres, communiceert de browser met een webserver en haalt een webpagina op.

Op dat moment toont de render-engine van de browser de pagina op het apparaat van de gebruiker, zoals een mobiele telefoon, desktop of laptop.

Browsers kunnen ook inhoud cachen, zodat deze niet elke keer opnieuw van de server hoeft te worden opgehaald. Ze kunnen de geschiedenis van het browsegedrag van een gebruiker bijhouden, 'cookies' opslaan (kleine stukjes data met informatie over het gebruikersgedrag), en meer.

Een belangrijk punt om te onthouden is dat browsers niet allemaal hetzelfde zijn! Elke browser heeft zijn eigen sterke en zwakke punten, en een professionele webontwikkelaar moet begrijpen hoe webpagina's goed kunnen presteren in verschillende browsers. Dit omvat het omgaan met kleine schermen, zoals die van een mobiele telefoon, en gebruikers die offline zijn.

Een erg handige website die je waarschijnlijk zou moeten bookmarken in je favoriete browser is [caniuse.com](https://www.caniuse.com). Bij het bouwen van webpagina's is het erg nuttig om de lijsten met ondersteunde technologieën van caniuse te gebruiken, zodat je je gebruikers zo goed mogelijk kunt ondersteunen.

✅ Hoe kun je zien welke browsers het populairst zijn bij de gebruikers van je website? Controleer je analytics - je kunt verschillende analysetools installeren als onderdeel van je webontwikkelingsproces, en deze laten zien welke browsers het meest worden gebruikt.

## Browserextensies

Waarom zou je een browserextensie willen bouwen? Het is een handige toevoeging aan je browser voor snelle toegang tot taken die je vaak herhaalt. Als je bijvoorbeeld vaak kleuren moet controleren op verschillende webpagina's, kun je een kleurkiezer-extensie installeren. Als je moeite hebt om wachtwoorden te onthouden, kun je een wachtwoordbeheer-extensie gebruiken.

Browserextensies zijn ook leuk om te ontwikkelen. Ze richten zich meestal op een beperkt aantal taken die ze goed uitvoeren.

✅ Wat zijn jouw favoriete browserextensies? Welke taken voeren ze uit?

### Extensies installeren

Voordat je begint met bouwen, is het handig om te kijken naar het proces van het bouwen en implementeren van een browserextensie. Hoewel elk browserplatform hier iets anders mee omgaat, is het proces op Chrome en Firefox vergelijkbaar met dit voorbeeld op Edge:

![screenshot van de Edge-browser met de geopende edge://extensions-pagina en het instellingenmenu](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.nl.png)

> Opmerking: Zorg ervoor dat je de ontwikkelaarsmodus inschakelt en extensies van andere winkels toestaat.

In essentie zal het proces er als volgt uitzien:

- bouw je extensie met `npm run build`  
- navigeer in de browser naar het extensiepaneel via de knop "Instellingen en meer" (het `...`-pictogram) rechtsboven  
- als het een nieuwe installatie betreft, kies `load unpacked` om een nieuwe extensie te uploaden vanuit de buildmap (in ons geval is dat `/dist`)  
- of klik op `reload` als je een al geïnstalleerde extensie opnieuw wilt laden  

✅ Deze instructies zijn van toepassing op extensies die je zelf bouwt; om extensies te installeren die beschikbaar zijn in de extensiewinkel van een browser, navigeer je naar die [winkels](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) en installeer je de extensie van je keuze.

### Aan de slag

Je gaat een browserextensie bouwen die de CO2-voetafdruk van jouw regio weergeeft, inclusief het energieverbruik en de bron van de energie. De extensie bevat een formulier waarin je een API-sleutel kunt invoeren om toegang te krijgen tot de API van CO2 Signal.

**Wat je nodig hebt:**

- [een API-sleutel](https://www.co2signal.com/); voer je e-mailadres in op deze pagina en je ontvangt een sleutel  
- de [code voor jouw regio](http://api.electricitymap.org/v3/zones) die overeenkomt met de [Electricity Map](https://www.electricitymap.org/map) (in Boston gebruik ik bijvoorbeeld 'US-NEISO')  
- de [starter code](../../../../5-browser-extension/start). Download de `start`-map; je voltooit de code in deze map  
- [NPM](https://www.npmjs.com) - NPM is een pakketbeheerder; installeer het lokaal en de pakketten die in je `package.json`-bestand staan, worden geïnstalleerd voor gebruik in je webproject  

✅ Meer leren over pakketbeheer? Bekijk deze [uitstekende Learn-module](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Neem even de tijd om de codebase te bekijken:

dist  
    -|manifest.json (standaardinstellingen hier)  
    -|index.html (HTML-markup hier)  
    -|background.js (achtergrond-JS hier)  
    -|main.js (gebundelde JS)  
src  
    -|index.js (je JS-code komt hier)  

✅ Zodra je je API-sleutel en regiocode hebt, sla deze ergens op voor toekomstig gebruik.

### Bouw de HTML voor de extensie

Deze extensie heeft twee weergaven. Eén om de API-sleutel en regiocode in te voeren:

![screenshot van de voltooide extensie geopend in een browser, met een formulier met invoervelden voor regiocode en API-sleutel.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.nl.png)

En een tweede om het koolstofverbruik van de regio weer te geven:

![screenshot van de voltooide extensie met waarden voor koolstofverbruik en percentage fossiele brandstoffen voor de regio US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.nl.png)

Laten we beginnen met het bouwen van de HTML voor het formulier en het stylen met CSS.

In de `/dist`-map bouw je een formulier en een resultaatgebied. Vul in het `index.html`-bestand het aangegeven formuliergebied in:

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
Dit is het formulier waarin je opgeslagen informatie wordt ingevoerd en opgeslagen in de lokale opslag.

Maak vervolgens het resultaatgebied; voeg onder de laatste form-tag enkele divs toe:

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
Op dit punt kun je een build proberen. Zorg ervoor dat je de pakketafhankelijkheden van deze extensie installeert:

```
npm install
```  

Met dit commando gebruik je npm, de Node Package Manager, om webpack te installeren voor het buildproces van je extensie. Webpack is een bundelaar die code compileert. Je kunt het resultaat van dit proces bekijken in `/dist/main.js` - je ziet dat de code is gebundeld.

Voor nu zou de extensie moeten bouwen en, als je deze in Edge als extensie implementeert, zie je een net weergegeven formulier.

Gefeliciteerd, je hebt de eerste stappen gezet in het bouwen van een browserextensie. In de volgende lessen maak je deze functioneler en nuttiger.

---

## 🚀 Uitdaging

Bekijk een extensiewinkel van een browser en installeer een extensie in je browser. Onderzoek de bestanden van de extensie. Wat ontdek je?

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/24)

## Herhaling & Zelfstudie

In deze les heb je iets geleerd over de geschiedenis van de webbrowser; neem de tijd om meer te leren over hoe de uitvinders van het World Wide Web het gebruik ervan voor ogen hadden door meer te lezen over de geschiedenis. Enkele nuttige sites zijn:

[De geschiedenis van webbrowsers](https://www.mozilla.org/firefox/browsers/browser-history/)

[Geschiedenis van het web](https://webfoundation.org/about/vision/history-of-the-web/)

[Een interview met Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Opdracht 

[Restyle je extensie](assignment.md)  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, willen we u erop wijzen dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.