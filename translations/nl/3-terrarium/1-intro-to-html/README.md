<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-29T01:01:13+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "nl"
}
-->
# Terrarium Project Deel 1: Introductie tot HTML

![Introductie tot HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vóór de les

[Quiz vóór de les](https://ff-quizzes.netlify.app/web/quiz/15)


> Bekijk de video

> 
> [![Git en GitHub basisvideo](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Introductie

HTML, of HyperText Markup Language, is het 'skelet' van het web. Als CSS je HTML 'aankleedt' en JavaScript het tot leven brengt, dan is HTML het lichaam van je webapplicatie. De syntax van HTML weerspiegelt dit idee, met tags zoals "head", "body" en "footer".

In deze les gaan we HTML gebruiken om het 'skelet' van de interface van ons virtuele terrarium op te zetten. Het zal een titel en drie kolommen bevatten: een rechter- en een linkerkolom waar de versleepbare planten zich bevinden, en een middengebied dat het glazen terrarium zal voorstellen. Aan het einde van deze les kun je de planten in de kolommen zien, maar de interface zal er nog wat vreemd uitzien; maak je geen zorgen, in het volgende deel voeg je CSS-stijlen toe om de interface er beter uit te laten zien.

### Opdracht

Maak op je computer een map genaamd 'terrarium' en daarin een bestand genaamd 'index.html'. Dit kun je doen in Visual Studio Code nadat je je terrarium-map hebt aangemaakt door een nieuw VS Code-venster te openen, op 'map openen' te klikken en naar je nieuwe map te navigeren. Klik op de kleine 'bestand'-knop in het Explorer-paneel en maak het nieuwe bestand aan:

![explorer in VS Code](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.nl.png)

Of

Gebruik deze commando's in je git bash:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` of `nano index.html`

> index.html-bestanden geven aan een browser aan dat het het standaardbestand in een map is; URL's zoals `https://anysite.com/test` kunnen worden opgebouwd met een mapstructuur die een map genaamd `test` bevat met daarin `index.html`; `index.html` hoeft niet in een URL te worden weergegeven.

---

## De DocType en html-tags

De eerste regel van een HTML-bestand is de doctype. Het is misschien verrassend dat je deze regel helemaal bovenaan het bestand moet hebben, maar het vertelt oudere browsers dat de pagina in een standaardmodus moet worden gerenderd, volgens de huidige HTML-specificatie.

> Tip: in VS Code kun je over een tag zweven om informatie over het gebruik ervan te krijgen uit de MDN Reference-gidsen.

De tweede regel moet de openingstag `<html>` zijn, direct gevolgd door de sluitingstag `</html>`. Deze tags zijn de root-elementen van je interface.

### Opdracht

Voeg deze regels toe bovenaan je `index.html`-bestand:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Er zijn een paar verschillende modi die kunnen worden bepaald door de DocType in te stellen met een querystring: [Quirks Mode en Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Deze modi werden gebruikt om echt oude browsers te ondersteunen die tegenwoordig niet meer vaak worden gebruikt (zoals Netscape Navigator 4 en Internet Explorer 5). Je kunt je houden aan de standaard doctype-declaratie.

---

## Het 'head'-gedeelte van het document

Het 'head'-gedeelte van het HTML-document bevat cruciale informatie over je webpagina, ook wel [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta) genoemd. In ons geval vertellen we de webserver, waaraan deze pagina wordt verzonden om te worden gerenderd, de volgende vier dingen:

-   de titel van de pagina
-   metadata van de pagina, waaronder:
    -   het 'character set', dat aangeeft welke tekencodering wordt gebruikt op de pagina
    -   browserinformatie, inclusief `x-ua-compatible` die aangeeft dat de IE=edge-browser wordt ondersteund
    -   informatie over hoe de viewport zich moet gedragen wanneer deze wordt geladen. Het instellen van de viewport op een initiële schaal van 1 regelt het zoomniveau wanneer de pagina voor het eerst wordt geladen.

### Opdracht

Voeg een 'head'-blok toe aan je document tussen de opening en sluiting van de `<html>`-tags.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Wat zou er gebeuren als je een viewport-meta-tag instelt zoals deze: `<meta name="viewport" content="width=600">`? Lees meer over de [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## Het `body`-gedeelte van het document

### HTML-tags

In HTML voeg je tags toe aan je .html-bestand om elementen van een webpagina te maken. Elke tag heeft meestal een opening en een sluiting, zoals dit: `<p>hallo</p>` om een alinea aan te geven. Maak het body-gedeelte van je interface door een set `<body>`-tags toe te voegen binnen het paar `<html>`-tags; je markup ziet er nu zo uit:

### Opdracht

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Nu kun je beginnen met het opbouwen van je pagina. Normaal gesproken gebruik je `<div>`-tags om de afzonderlijke elementen op een pagina te maken. We maken een reeks `<div>`-elementen die afbeeldingen bevatten.

### Afbeeldingen

Een HTML-tag die geen sluiting nodig heeft, is de `<img>`-tag, omdat deze een `src`-element heeft dat alle informatie bevat die de pagina nodig heeft om het item weer te geven.

Maak een map in je app genaamd `images` en voeg daarin alle afbeeldingen toe uit de [broncode-map](../../../../3-terrarium/solution/images); (er zijn 14 afbeeldingen van planten).

### Opdracht

Voeg die plantenafbeeldingen toe in twee kolommen tussen de `<body></body>`-tags:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Opmerking: Spans vs. Divs. Divs worden beschouwd als 'block'-elementen en Spans als 'inline'. Wat zou er gebeuren als je deze divs zou omzetten naar spans?

Met deze markup verschijnen de planten nu op het scherm. Het ziet er behoorlijk slecht uit, omdat ze nog niet zijn gestyled met CSS, en dat gaan we in de volgende les doen.

Elke afbeelding heeft alt-tekst die verschijnt, zelfs als je een afbeelding niet kunt zien of weergeven. Dit is een belangrijke eigenschap om op te nemen voor toegankelijkheid. Leer meer over toegankelijkheid in toekomstige lessen; onthoud voor nu dat het alt-attribuut alternatieve informatie biedt voor een afbeelding als een gebruiker om een of andere reden de afbeelding niet kan bekijken (vanwege een trage verbinding, een fout in het src-attribuut, of als de gebruiker een schermlezer gebruikt).

✅ Is het je opgevallen dat elke afbeelding dezelfde alt-tag heeft? Is dit goede praktijk? Waarom wel of niet? Kun je deze code verbeteren?

---

## Semantische markup

Over het algemeen is het beter om betekenisvolle 'semantiek' te gebruiken bij het schrijven van HTML. Wat betekent dat? Het betekent dat je HTML-tags gebruikt om het type gegevens of interactie te vertegenwoordigen waarvoor ze zijn ontworpen. Bijvoorbeeld, de hoofdtekst van een pagina moet een `<h1>`-tag gebruiken.

Voeg de volgende regel toe direct onder je opening `<body>`-tag:

```html
<h1>My Terrarium</h1>
```

Het gebruik van semantische markup, zoals het gebruik van `<h1>` voor kopteksten en `<ul>` voor ongenummerde lijsten, helpt schermlezers om door een pagina te navigeren. Over het algemeen moeten knoppen worden geschreven als `<button>` en lijsten als `<li>`. Hoewel het _mogelijk_ is om speciaal gestylede `<span>`-elementen met klikhandlers te gebruiken om knoppen na te bootsen, is het beter voor gebruikers met een beperking om technologieën te gebruiken om te bepalen waar een knop zich op een pagina bevindt en ermee te interacteren, als het element verschijnt als een knop. Om deze reden, probeer zoveel mogelijk semantische markup te gebruiken.

✅ Bekijk een schermlezer en [hoe deze interageert met een webpagina](https://www.youtube.com/watch?v=OUDV1gqs9GA). Kun je zien waarom niet-semantische markup frustrerend kan zijn voor de gebruiker?

## Het terrarium

Het laatste deel van deze interface omvat het maken van markup die wordt gestyled om een terrarium te creëren.

### Opdracht:

Voeg deze markup toe boven de laatste `</div>`-tag:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ Hoewel je deze markup aan het scherm hebt toegevoegd, zie je absoluut niets weergegeven. Waarom?

---

## 🚀Uitdaging

Er zijn enkele 'oude' tags in HTML die nog steeds leuk zijn om mee te spelen, hoewel je geen verouderde tags zoals [deze tags](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) in je markup zou moeten gebruiken. Kun je de oude `<marquee>`-tag gebruiken om de h1-titel horizontaal te laten scrollen? (als je dit doet, vergeet dan niet om het daarna te verwijderen)

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/16)

## Herziening & Zelfstudie

HTML is het 'beproefde en betrouwbare' bouwsysteem dat heeft bijgedragen aan het web zoals we dat vandaag kennen. Leer een beetje over de geschiedenis door oude en nieuwe tags te bestuderen. Kun je achterhalen waarom sommige tags zijn verouderd en andere zijn toegevoegd? Welke tags zouden in de toekomst kunnen worden geïntroduceerd?

Leer meer over het bouwen van sites voor het web en mobiele apparaten op [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## Opdracht

[Oefen je HTML: Bouw een blogmockup](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, willen we u erop wijzen dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.