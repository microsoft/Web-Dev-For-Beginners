<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-23T00:58:20+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "nl"
}
-->
# Terrarium Project Deel 1: Introductie tot HTML

![Introductie tot HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, of HyperText Markup Language, is de basis van elke website die je ooit hebt bezocht. Zie HTML als het skelet dat structuur geeft aan webpagina's – het bepaalt waar de inhoud komt, hoe deze georganiseerd is en wat elk onderdeel betekent. Terwijl CSS later je HTML "aankleedt" met kleuren en lay-outs, en JavaScript het tot leven brengt met interactiviteit, biedt HTML de essentiële structuur die alles mogelijk maakt.

In deze les maak je de HTML-structuur voor een virtuele terrariuminterface. Dit praktische project leert je fundamentele HTML-concepten terwijl je iets visueel aantrekkelijk bouwt. Je leert hoe je inhoud organiseert met semantische elementen, werkt met afbeeldingen en de basis legt voor een interactieve webapplicatie.

Aan het einde van deze les heb je een werkende HTML-pagina die plantafbeeldingen in georganiseerde kolommen weergeeft, klaar om gestyled te worden in de volgende les. Maak je geen zorgen als het er in het begin eenvoudig uitziet – dat is precies wat HTML moet doen voordat CSS de visuele afwerking toevoegt.

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Bekijk en leer**: Bekijk deze handige video-overzicht
> 
> [![HTML Fundamentals Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Je project opzetten

Voordat we in de HTML-code duiken, gaan we een goede werkruimte opzetten voor je terrariumproject. Het creëren van een georganiseerde bestandsstructuur vanaf het begin is een cruciale gewoonte die je goed van pas zal komen tijdens je webontwikkelingsreis.

### Taak: Maak je projectstructuur

Je maakt een speciale map voor je terrariumproject en voegt je eerste HTML-bestand toe. Hier zijn twee benaderingen die je kunt gebruiken:

**Optie 1: Gebruik Visual Studio Code**
1. Open Visual Studio Code
2. Klik op "File" → "Open Folder" of gebruik `Ctrl+K, Ctrl+O` (Windows/Linux) of `Cmd+K, Cmd+O` (Mac)
3. Maak een nieuwe map genaamd `terrarium` en selecteer deze
4. Klik in het Explorer-paneel op het pictogram "New File"
5. Noem je bestand `index.html`

![VS Code Explorer toont het maken van een nieuw bestand](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.nl.png)

**Optie 2: Gebruik Terminal-commando's**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Wat deze commando's doen:**
- **Maakt** een nieuwe map genaamd `terrarium` voor je project
- **Navigeert** naar de terrarium-map
- **Maakt** een leeg `index.html`-bestand
- **Opent** het bestand in Visual Studio Code om te bewerken

> 💡 **Pro Tip**: De bestandsnaam `index.html` is speciaal in webontwikkeling. Wanneer iemand een website bezoekt, zoeken browsers automatisch naar `index.html` als de standaardpagina om weer te geven. Dit betekent dat een URL zoals `https://mysite.com/projects/` automatisch het `index.html`-bestand uit de map `projects` weergeeft zonder dat de bestandsnaam in de URL hoeft te worden opgegeven.

## Begrijpen van HTML-documentstructuur

Elk HTML-document volgt een specifieke structuur die browsers nodig hebben om correct te begrijpen en weer te geven. Zie deze structuur als een formele brief – het heeft vereiste elementen in een bepaalde volgorde die de ontvanger (in dit geval de browser) helpen de inhoud correct te verwerken.

Laten we beginnen met het toevoegen van de essentiële basis die elk HTML-document nodig heeft.

### De DOCTYPE-verklaring en root-element

De eerste twee regels van elk HTML-bestand dienen als de "introductie" van het document aan de browser:

```html
<!DOCTYPE html>
<html></html>
```

**Wat deze code doet:**
- **Verklaart** het documenttype als HTML5 met `<!DOCTYPE html>`
- **Creëert** het root `<html>`-element dat alle pagina-inhoud bevat
- **Stelt** moderne webstandaarden vast voor correcte browserweergave
- **Zorgt** voor consistente weergave in verschillende browsers en apparaten

> 💡 **VS Code Tip**: Beweeg je muis over een HTML-tag in VS Code om nuttige informatie van MDN Web Docs te zien, inclusief gebruiksvoorbeelden en compatibiliteitsdetails van browsers.

> 📚 **Meer leren**: De DOCTYPE-verklaring voorkomt dat browsers "quirks mode" ingaan, wat werd gebruikt om zeer oude websites te ondersteunen. Moderne webontwikkeling gebruikt de eenvoudige `<!DOCTYPE html>`-verklaring om [standaard-conforme weergave](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) te garanderen.

## Essentiële documentmetadata toevoegen

De `<head>`-sectie van een HTML-document bevat cruciale informatie die browsers en zoekmachines nodig hebben, maar die bezoekers niet direct op de pagina zien. Zie het als de "achter-de-schermen"-informatie die helpt je webpagina correct te laten werken en weer te geven op verschillende apparaten en platforms.

Deze metadata vertelt browsers hoe ze je pagina moeten weergeven, welke tekencodering ze moeten gebruiken en hoe ze met verschillende schermformaten moeten omgaan – allemaal essentieel voor het maken van professionele, toegankelijke webpagina's.

### Taak: Voeg de documentkop toe

Voeg deze `<head>`-sectie in tussen je opening en sluitende `<html>`-tags:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Wat elk element doet:**
- **Stelt** de paginatitel in die verschijnt in browsertabbladen en zoekresultaten
- **Specificeert** UTF-8 tekencodering voor correcte tekstweergave wereldwijd
- **Zorgt** voor compatibiliteit met moderne versies van Internet Explorer
- **Configureert** responsief ontwerp door de viewport aan te passen aan de breedte van het apparaat
- **Regelt** het initiële zoomniveau om inhoud op natuurlijke grootte weer te geven

> 🤔 **Denk hier eens over na**: Wat zou er gebeuren als je een viewport meta-tag instelt zoals deze: `<meta name="viewport" content="width=600">`? Dit zou de pagina dwingen altijd 600 pixels breed te zijn, wat responsief ontwerp zou breken! Leer meer over [correcte viewport-configuratie](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Het documentlichaam opbouwen

Het `<body>`-element bevat alle zichtbare inhoud van je webpagina – alles wat gebruikers zullen zien en mee zullen interageren. Terwijl de `<head>`-sectie instructies gaf aan de browser, bevat de `<body>`-sectie de daadwerkelijke inhoud: tekst, afbeeldingen, knoppen en andere elementen die je gebruikersinterface creëren.

Laten we de structuur van het lichaam toevoegen en begrijpen hoe HTML-tags samenwerken om betekenisvolle inhoud te creëren.

### Begrijpen van HTML-tagstructuur

HTML gebruikt gekoppelde tags om elementen te definiëren. De meeste tags hebben een openingstag zoals `<p>` en een sluitingstag zoals `</p>`, met inhoud ertussen: `<p>Hello, world!</p>`. Dit creëert een paragraafelement met de tekst "Hello, world!".

### Taak: Voeg het lichaamselement toe

Werk je HTML-bestand bij om het `<body>`-element op te nemen:

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

**Wat deze complete structuur biedt:**
- **Stelt** het basis HTML5-documentraamwerk vast
- **Bevat** essentiële metadata voor correcte browserweergave
- **Creëert** een leeg lichaam klaar voor je zichtbare inhoud
- **Volgt** moderne webontwikkelingsbest practices

Nu ben je klaar om de zichtbare elementen van je terrarium toe te voegen. We zullen `<div>`-elementen gebruiken als containers om verschillende secties van inhoud te organiseren, en `<img>`-elementen om de plantafbeeldingen weer te geven.

### Werken met afbeeldingen en lay-outcontainers

Afbeeldingen zijn speciaal in HTML omdat ze "zelfsluitende" tags gebruiken. In tegenstelling tot elementen zoals `<p></p>` die inhoud omsluiten, bevat de `<img>`-tag alle informatie die het nodig heeft binnen de tag zelf met attributen zoals `src` voor het afbeeldingsbestandspad en `alt` voor toegankelijkheid.

Voordat je afbeeldingen aan je HTML toevoegt, moet je je projectbestanden goed organiseren door een afbeeldingenmap te maken en de plantgrafieken toe te voegen.

**Eerst, stel je afbeeldingen in:**
1. Maak een map genaamd `images` in je terrariumprojectmap
2. Download de plantafbeeldingen uit de [oplossingsmap](../../../../3-terrarium/solution/images) (14 plantafbeeldingen in totaal)
3. Kopieer alle plantafbeeldingen naar je nieuwe `images`-map

### Taak: Maak de plantweergavelay-out

Voeg nu de plantafbeeldingen georganiseerd in twee kolommen toe tussen je `<body></body>`-tags:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.nl.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.nl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.nl.png" />
		</div>
	</div>
</div>
```

**Stap voor stap, wat er gebeurt in deze code:**
- **Creëert** een hoofdcontainer met `id="page"` om alle inhoud te bevatten
- **Stelt** twee kolomcontainers in: `left-container` en `right-container`
- **Organiseert** 7 planten in de linker kolom en 7 planten in de rechter kolom
- **Omvat** elke plantafbeelding in een `plant-holder` div voor individuele positionering
- **Past** consistente klassenamen toe voor CSS-styling in de volgende les
- **Kent** unieke ID's toe aan elke plantafbeelding voor JavaScript-interactie later
- **Bevat** correcte bestandspaden die wijzen naar de afbeeldingenmap

> 🤔 **Overweeg dit**: Merk op dat alle afbeeldingen momenteel dezelfde alt-tekst "plant" hebben. Dit is niet ideaal voor toegankelijkheid. Gebruikers van schermlezers zouden "plant" 14 keer horen zonder te weten welke specifieke plant elke afbeelding toont. Kun je betere, meer beschrijvende alt-tekst bedenken voor elke afbeelding?

> 📝 **HTML-elementtypen**: `<div>`-elementen zijn "block-level" en nemen volledige breedte in, terwijl `<span>`-elementen "inline" zijn en alleen de benodigde breedte innemen. Wat denk je dat er zou gebeuren als je al deze `<div>`-tags zou veranderen in `<span>`-tags?

Met deze markup toegevoegd, verschijnen de planten op het scherm, hoewel ze er nog niet gepolijst uitzien – daar is CSS voor in de volgende les! Voor nu heb je een solide HTML-basis die je inhoud correct organiseert en toegankelijkheidsbest practices volgt.

## Semantische HTML gebruiken voor toegankelijkheid

Semantische HTML betekent dat je HTML-elementen kiest op basis van hun betekenis en doel, niet alleen hun uiterlijk. Wanneer je semantische markup gebruikt, communiceer je de structuur en betekenis van je inhoud aan browsers, zoekmachines en hulpmiddelen zoals schermlezers.

Deze aanpak maakt je websites toegankelijker voor gebruikers met een beperking en helpt zoekmachines je inhoud beter te begrijpen. Het is een fundamenteel principe van moderne webontwikkeling dat betere ervaringen voor iedereen creëert.

### Een semantische paginatitel toevoegen

Laten we een juiste kop toevoegen aan je terrariumpagina. Voeg deze regel in direct na je openingstag `<body>`:

```html
<h1>My Terrarium</h1>
```

**Waarom semantische markup belangrijk is:**
- **Helpt** schermlezers navigeren en de structuur van de pagina begrijpen
- **Verbetert** zoekmachineoptimalisatie (SEO) door de inhoudshiërarchie te verduidelijken
- **Verhoogt** toegankelijkheid voor gebruikers met visuele beperkingen of cognitieve verschillen
- **Creëert** betere gebruikerservaringen op alle apparaten en platforms
- **Volgt** webstandaarden en best practices voor professionele ontwikkeling

**Voorbeelden van semantische versus niet-semantische keuzes:**

| Doel | ✅ Semantische keuze | ❌ Niet-semantische keuze |
|------|---------------------|--------------------------|
| Hoofdkop | `<h1>Titel</h1>` | `<div class="big-text">Titel</div>` |
| Navigatie | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Knop | `<button>Klik hier</button>` | `<span onclick="...">Klik hier</span>` |
| Artikelinhoud | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Bekijk het in actie**: Bekijk [hoe schermlezers omgaan met webpagina's](https://www.youtube.com/watch?v=OUDV1gqs9GA) om te begrijpen waarom semantische markup cruciaal is voor toegankelijkheid. Merk op hoe een correcte HTML-structuur gebruikers helpt efficiënt te navigeren.

## Het terrariumcontainer maken

Laten we nu de HTML-structuur toevoegen voor het terrarium zelf – de glazen container waar planten uiteindelijk worden geplaatst. Dit gedeelte demonstreert een belangrijk concept: HTML biedt structuur, maar zonder CSS-styling zijn deze elementen nog niet zichtbaar.

De terrariummarkup gebruikt beschrijvende klassenamen die CSS-styling intuïtief en onderhoudbaar maken in de volgende les.

### Taak: Voeg de terrariumstructuur toe

Voeg deze markup in boven de laatste `</div>`-tag (voor de sluitingstag van de pagina-container):

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

**Begrijpen van deze terrariumstructuur:**
- **Creëert** een hoofdterrariumcontainer met een unieke ID voor styling
- **Definieert** afzonderlijke elementen voor elk visueel onderdeel (bovenkant, wanden, aarde, onderkant)
- **Bevat** geneste elementen voor glaseffecten (glanzende elementen)
- **Gebruikt** beschrijvende klassenamen die duidelijk het doel van elk element aangeven
- **Bereidt** de structuur voor op CSS-styling die het uiterlijk van het glazen terrarium zal creëren

> 🤔 **Merk iets op?**: Hoewel je deze markup hebt toegevoegd, zie je nog niets nieuws op de pagina! Dit illustreert perfect hoe HTML structuur biedt, terwijl CSS zorgt voor het uiterlijk. Deze `<div>`-elementen bestaan, maar hebben nog geen visuele styling – dat komt in de volgende les!

---

## GitHub Copilot Agent Challenge

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een semantische HTML-structuur voor een sectie over plantenverzorging die aan het terrariumproject kan worden toegevoegd.
**Prompt:** Maak een semantische HTML-sectie met een hoofdkop "Plantenzorggids", drie subsecties met koppen "Water geven", "Lichtvereisten" en "Bodemverzorging", elk met een alinea met informatie over plantenzorg. Gebruik geschikte semantische HTML-tags zoals `<section>`, `<h2>`, `<h3>` en `<p>` om de inhoud op de juiste manier te structureren.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## Ontdek de HTML Geschiedenis Uitdaging

**Leren over de evolutie van het web**

HTML heeft zich aanzienlijk ontwikkeld sinds Tim Berners-Lee in 1990 de eerste webbrowser bij CERN creëerde. Sommige oudere tags, zoals `<marquee>`, zijn nu verouderd omdat ze niet goed werken met moderne toegankelijkheidsnormen en principes van responsief ontwerp.

**Probeer dit experiment:**
1. Wikkel tijdelijk je `<h1>` titel in een `<marquee>` tag: `<marquee><h1>Mijn Terrarium</h1></marquee>`
2. Open je pagina in een browser en observeer het scroll-effect
3. Overweeg waarom deze tag is verouderd (tip: denk aan gebruikerservaring en toegankelijkheid)
4. Verwijder de `<marquee>` tag en keer terug naar semantische opmaak

**Reflectievragen:**
- Hoe kan een scrollende titel gebruikers met visuele beperkingen of gevoeligheid voor beweging beïnvloeden?
- Welke moderne CSS-technieken kunnen vergelijkbare visuele effecten op een meer toegankelijke manier bereiken?
- Waarom is het belangrijk om huidige webstandaarden te gebruiken in plaats van verouderde elementen?

Ontdek meer over [verouderde en afgeschafte HTML-elementen](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) om te begrijpen hoe webstandaarden evolueren om de gebruikerservaring te verbeteren.


## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/16)

## Review & Zelfstudie

**Verdiep je kennis van HTML**

HTML is al meer dan 30 jaar de basis van het web en is geëvolueerd van een eenvoudige documentopmaaktaal naar een geavanceerd platform voor het bouwen van interactieve applicaties. Het begrijpen van deze evolutie helpt je om moderne webstandaarden te waarderen en betere ontwikkelingsbeslissingen te nemen.

**Aanbevolen leerpaden:**

1. **HTML Geschiedenis en Evolutie**
   - Onderzoek de tijdlijn van HTML 1.0 tot HTML5
   - Ontdek waarom bepaalde tags zijn verouderd (toegankelijkheid, mobiele bruikbaarheid, onderhoudbaarheid)
   - Onderzoek opkomende HTML-functies en voorstellen

2. **Diepgaande Semantische HTML**
   - Bestudeer de volledige lijst van [HTML5 semantische elementen](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Oefen met het identificeren wanneer je `<article>`, `<section>`, `<aside>` en `<main>` moet gebruiken
   - Leer over ARIA-attributen voor verbeterde toegankelijkheid

3. **Moderne Webontwikkeling**
   - Ontdek [het bouwen van responsieve websites](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) op Microsoft Learn
   - Begrijp hoe HTML integreert met CSS en JavaScript
   - Leer over webprestaties en SEO best practices

**Reflectievragen:**
- Welke verouderde HTML-tags heb je ontdekt en waarom zijn ze verwijderd?
- Welke nieuwe HTML-functies worden voorgesteld voor toekomstige versies?
- Hoe draagt semantische HTML bij aan webtoegankelijkheid en SEO?


## Opdracht

[Oefen je HTML: Bouw een blogmockup](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.