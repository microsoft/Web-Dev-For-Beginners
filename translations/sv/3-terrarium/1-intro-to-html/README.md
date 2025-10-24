<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-23T21:39:44+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "sv"
}
-->
# Terrariumprojekt Del 1: Introduktion till HTML

![Introduktion till HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, eller HyperText Markup Language, är grunden för varje webbplats du någonsin har besökt. Tänk på HTML som skelettet som ger struktur åt webbsidor – det definierar var innehållet ska placeras, hur det organiseras och vad varje del representerar. Medan CSS senare kommer att "klä upp" din HTML med färger och layout, och JavaScript kommer att ge den liv med interaktivitet, tillhandahåller HTML den grundläggande strukturen som gör allt annat möjligt.

I denna lektion kommer du att skapa HTML-strukturen för ett virtuellt terrariumgränssnitt. Detta praktiska projekt kommer att lära dig grundläggande HTML-koncept samtidigt som du bygger något visuellt engagerande. Du kommer att lära dig att organisera innehåll med semantiska element, arbeta med bilder och skapa grunden för en interaktiv webbapplikation.

I slutet av denna lektion kommer du att ha en fungerande HTML-sida som visar växtbilder i organiserade kolumner, redo att stylas i nästa lektion. Oroa dig inte om det ser enkelt ut till en början – det är precis vad HTML ska göra innan CSS lägger till den visuella finishen.

## Förkunskapsquiz

[Förkunskapsquiz](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Titta och lär**: Kolla in denna hjälpsamma videogenomgång
> 
> [![HTML Fundamentals Video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Förbered ditt projekt

Innan vi dyker in i HTML-kod, låt oss skapa en ordentlig arbetsyta för ditt terrariumprojekt. Att skapa en organiserad filstruktur från början är en viktig vana som kommer att tjäna dig väl under hela din resa inom webbutveckling.

### Uppgift: Skapa din projektstruktur

Du kommer att skapa en dedikerad mapp för ditt terrariumprojekt och lägga till din första HTML-fil. Här är två tillvägagångssätt du kan använda:

**Alternativ 1: Använda Visual Studio Code**
1. Öppna Visual Studio Code
2. Klicka på "File" → "Open Folder" eller använd `Ctrl+K, Ctrl+O` (Windows/Linux) eller `Cmd+K, Cmd+O` (Mac)
3. Skapa en ny mapp som heter `terrarium` och välj den
4. I Explorer-panelen, klicka på ikonen "New File"
5. Namnge din fil `index.html`

![VS Code Explorer visar hur man skapar en ny fil](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.sv.png)

**Alternativ 2: Använda terminalkommandon**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Det här gör kommandona:**
- **Skapar** en ny katalog som heter `terrarium` för ditt projekt
- **Navigerar** in i terrariumkatalogen 
- **Skapar** en tom `index.html`-fil
- **Öppnar** filen i Visual Studio Code för redigering

> 💡 **Proffstips**: Filnamnet `index.html` är speciellt inom webbutveckling. När någon besöker en webbplats letar webbläsare automatiskt efter `index.html` som standardfil att visa. Detta innebär att en URL som `https://mysite.com/projects/` automatiskt kommer att visa `index.html`-filen från mappen `projects` utan att behöva ange filnamnet i URL:en.

## Förstå HTML-dokumentstruktur

Varje HTML-dokument följer en specifik struktur som webbläsare behöver för att förstå och visa korrekt. Tänk på denna struktur som ett formellt brev – det har nödvändiga element i en viss ordning som hjälper mottagaren (i detta fall webbläsaren) att bearbeta innehållet korrekt.

Låt oss börja med att lägga till den grundläggande grunden som varje HTML-dokument behöver.

### DOCTYPE-deklarationen och rootelementet

De två första raderna i en HTML-fil fungerar som dokumentets "introduktion" till webbläsaren:

```html
<!DOCTYPE html>
<html></html>
```

**Förstå vad denna kod gör:**
- **Deklarerar** dokumenttypen som HTML5 med `<!DOCTYPE html>`
- **Skapar** rootelementet `<html>` som kommer att innehålla allt sidinnehåll
- **Fastställer** moderna webbstandarder för korrekt rendering i webbläsaren
- **Säkerställer** konsekvent visning över olika webbläsare och enheter

> 💡 **VS Code-tips**: Håll muspekaren över en HTML-tagg i VS Code för att se användbar information från MDN Web Docs, inklusive användningsexempel och webbläsarkompatibilitet.

> 📚 **Läs mer**: DOCTYPE-deklarationen förhindrar att webbläsare går in i "quirks mode", som användes för att stödja mycket gamla webbplatser. Modern webbutveckling använder den enkla deklarationen `<!DOCTYPE html>` för att säkerställa [standardkompatibel rendering](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Lägga till viktig dokumentmetadata

Sektionen `<head>` i ett HTML-dokument innehåller viktig information som webbläsare och sökmotorer behöver, men som besökare inte ser direkt på sidan. Tänk på det som "bakom kulisserna"-information som hjälper din webbsida att fungera korrekt och visas korrekt på olika enheter och plattformar.

Denna metadata berättar för webbläsare hur de ska visa din sida, vilken teckenkodning som ska användas och hur man hanterar olika skärmstorlekar – allt som är viktigt för att skapa professionella, tillgängliga webbsidor.

### Uppgift: Lägg till dokumenthuvudet

Infoga denna `<head>`-sektion mellan dina öppnande och avslutande `<html>`-taggar:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Bryta ner vad varje element gör:**
- **Ställer in** sidtiteln som visas i webbläsarflikar och sökresultat
- **Anger** UTF-8-teckenkodning för korrekt textvisning världen över
- **Säkerställer** kompatibilitet med moderna versioner av Internet Explorer
- **Konfigurerar** responsiv design genom att ställa in viewporten för att matcha enhetens bredd
- **Kontrollerar** initial zoomnivå för att visa innehåll i naturlig storlek

> 🤔 **Fundera på detta**: Vad skulle hända om du ställde in en viewport-meta-tagg som denna: `<meta name="viewport" content="width=600">`? Detta skulle tvinga sidan att alltid vara 600 pixlar bred, vilket bryter mot responsiv design! Läs mer om [korrekt viewport-konfiguration](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Bygga dokumentets kropp

Elementet `<body>` innehåller allt synligt innehåll på din webbsida – allt som användare kommer att se och interagera med. Medan sektionen `<head>` gav instruktioner till webbläsaren, innehåller sektionen `<body>` det faktiska innehållet: text, bilder, knappar och andra element som skapar ditt användargränssnitt.

Låt oss lägga till kroppens struktur och förstå hur HTML-taggar fungerar tillsammans för att skapa meningsfullt innehåll.

### Förstå HTML-taggstruktur

HTML använder parade taggar för att definiera element. De flesta taggar har en öppningstagg som `<p>` och en avslutningstagg som `</p>`, med innehåll däremellan: `<p>Hello, world!</p>`. Detta skapar ett paragrafelement som innehåller texten "Hello, world!".

### Uppgift: Lägg till kroppselementet

Uppdatera din HTML-fil för att inkludera elementet `<body>`:

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

**Det här ger den kompletta strukturen:**
- **Fastställer** den grundläggande HTML5-dokumentramen
- **Inkluderar** viktig metadata för korrekt rendering i webbläsaren
- **Skapar** en tom kropp redo för ditt synliga innehåll
- **Följer** moderna webbutvecklingsbästa praxis

Nu är du redo att lägga till de synliga elementen i ditt terrarium. Vi kommer att använda `<div>`-element som behållare för att organisera olika sektioner av innehåll och `<img>`-element för att visa växtbilder.

### Arbeta med bilder och layoutbehållare

Bilder är speciella i HTML eftersom de använder "självstängande" taggar. Till skillnad från element som `<p></p>` som omsluter innehåll, innehåller `<img>`-taggen all information den behöver inom själva taggen med attribut som `src` för bildfilens sökväg och `alt` för tillgänglighet.

Innan du lägger till bilder i din HTML måste du organisera dina projektfiler korrekt genom att skapa en bildmapp och lägga till växtgrafiken.

**Först, ställ in dina bilder:**
1. Skapa en mapp som heter `images` inuti din terrariumprojektmapp
2. Ladda ner växtbilderna från [lösningsmappen](../../../../3-terrarium/solution/images) (14 växtbilder totalt)
3. Kopiera alla växtbilder till din nya `images`-mapp

### Uppgift: Skapa layouten för växtvisningen

Lägg nu till växtbilderna organiserade i två kolumner mellan dina `<body></body>`-taggar:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.sv.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.sv.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.sv.png" />
		</div>
	</div>
</div>
```

**Steg för steg, här är vad som händer i denna kod:**
- **Skapar** en huvudbehållare för sidan med `id="page"` för att hålla allt innehåll
- **Fastställer** två kolumnbehållare: `left-container` och `right-container`
- **Organiserar** 7 växter i vänstra kolumnen och 7 växter i högra kolumnen
- **Omsluter** varje växtbild i en `plant-holder` div för individuell positionering
- **Använder** konsekventa klassnamn för CSS-styling i nästa lektion
- **Tilldelar** unika ID:n till varje växtbild för JavaScript-interaktion senare
- **Inkluderar** korrekta filvägar som pekar på bildmappen

> 🤔 **Fundera på detta**: Lägg märke till att alla bilder för närvarande har samma alt-text "plant". Detta är inte idealiskt för tillgänglighet. Användare av skärmläsare skulle höra "plant" upprepas 14 gånger utan att veta vilken specifik växt varje bild visar. Kan du tänka dig bättre, mer beskrivande alt-text för varje bild?

> 📝 **HTML-elementtyper**: `<div>`-element är "blocknivå" och tar upp hela bredden, medan `<span>`-element är "inline" och tar bara upp nödvändig bredd. Vad tror du skulle hända om du ändrade alla dessa `<div>`-taggar till `<span>`-taggar?

Med denna markup tillagd kommer växterna att visas på skärmen, även om de inte ser polerade ut än – det är vad CSS är till för i nästa lektion! För tillfället har du en solid HTML-grund som organiserar ditt innehåll korrekt och följer bästa praxis för tillgänglighet.

## Använda semantisk HTML för tillgänglighet

Semantisk HTML innebär att välja HTML-element baserat på deras betydelse och syfte, inte bara deras utseende. När du använder semantisk markup kommunicerar du strukturen och betydelsen av ditt innehåll till webbläsare, sökmotorer och hjälpmedelstekniker som skärmläsare.

Denna metod gör dina webbplatser mer tillgängliga för användare med funktionsnedsättningar och hjälper sökmotorer att bättre förstå ditt innehåll. Det är en grundläggande princip inom modern webbutveckling som skapar bättre upplevelser för alla.

### Lägga till en semantisk sidtitel

Låt oss lägga till en korrekt rubrik till din terrariumsida. Infoga denna rad direkt efter din öppnande `<body>`-tag:

```html
<h1>My Terrarium</h1>
```

**Varför semantisk markup är viktig:**
- **Hjälper** skärmläsare att navigera och förstå sidstrukturen
- **Förbättrar** sökmotoroptimering (SEO) genom att klargöra innehållshierarkin
- **Ökar** tillgängligheten för användare med synnedsättningar eller kognitiva skillnader
- **Skapar** bättre användarupplevelser över alla enheter och plattformar
- **Följer** webbstandarder och bästa praxis för professionell utveckling

**Exempel på semantiska vs. icke-semantiska val:**

| Syfte | ✅ Semantiskt val | ❌ Icke-semantiskt val |
|-------|------------------|-----------------------|
| Huvudrubrik | `<h1>Title</h1>` | `<div class="big-text">Title</div>` |
| Navigering | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Knapp | `<button>Click me</button>` | `<span onclick="...">Click me</span>` |
| Artikelinnehåll | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Se det i praktiken**: Titta på [hur skärmläsare interagerar med webbsidor](https://www.youtube.com/watch?v=OUDV1gqs9GA) för att förstå varför semantisk markup är avgörande för tillgänglighet. Lägg märke till hur korrekt HTML-struktur hjälper användare att navigera effektivt.

## Skapa terrariumbehållaren

Nu ska vi lägga till HTML-strukturen för själva terrariet – glasbehållaren där växterna så småningom kommer att placeras. Denna sektion demonstrerar ett viktigt koncept: HTML tillhandahåller struktur, men utan CSS-styling kommer dessa element ännu inte att vara synliga.

Terrariummarkupen använder beskrivande klassnamn som kommer att göra CSS-styling intuitiv och lätt att underhålla i nästa lektion.

### Uppgift: Lägg till terrariumstrukturen

Infoga denna markup ovanför den sista `</div>`-taggen (före den avslutande taggen för sidbehållaren):

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

**Förstå denna terrariumstruktur:**
- **Skapar** en huvudbehållare för terrariet med ett unikt ID för styling
- **Definierar** separata element för varje visuell komponent (topp, väggar, jord, botten)
- **Inkluderar** nästlade element för glaseffekter (glansiga element)
- **Använder** beskrivande klassnamn som tydligt indikerar varje elements syfte
- **Förbereder** strukturen för CSS-styling som kommer att skapa glasterrariumutseendet

> 🤔 **Lägg märke till något?**: Även om du har lagt till denna markup, ser du inget nytt på sidan! Detta illustrerar perfekt hur HTML tillhandahåller struktur medan CSS tillhandahåller utseende. Dessa `<div>`-element existerar men har ännu ingen visuell styling – det kommer i nästa lektion!

---

## GitHub Copilot Agent-utmaning

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa en semantisk HTML-struktur för en sektion om växtvård som kan läggas till i terrariumprojektet.
**Uppgift:** Skapa en semantisk HTML-sektion som innehåller en huvudrubrik "Växtvårdsguide", tre undersektioner med rubrikerna "Vattning", "Ljusbehov" och "Jordvård", där varje sektion innehåller ett stycke med information om växtvård. Använd korrekta semantiska HTML-taggar som `<section>`, `<h2>`, `<h3>` och `<p>` för att strukturera innehållet på rätt sätt.

Läs mer om [agentläge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## Utforska HTML:s historia-utmaning

**Lär dig om webbens utveckling**

HTML har utvecklats avsevärt sedan Tim Berners-Lee skapade den första webbläsaren på CERN 1990. Vissa äldre taggar som `<marquee>` är nu föråldrade eftersom de inte fungerar bra med moderna tillgänglighetsstandarder och principer för responsiv design.

**Prova detta experiment:**
1. Omslut tillfälligt din `<h1>`-titel i en `<marquee>`-tagg: `<marquee><h1>Mitt terrarium</h1></marquee>`
2. Öppna din sida i en webbläsare och observera rullningseffekten
3. Fundera på varför denna tagg blev föråldrad (ledtråd: tänk på användarupplevelse och tillgänglighet)
4. Ta bort `<marquee>`-taggen och återgå till semantisk markup

**Reflektionsfrågor:**
- Hur kan en rullande titel påverka användare med synnedsättningar eller känslighet för rörelse?
- Vilka moderna CSS-tekniker kan uppnå liknande visuella effekter på ett mer tillgängligt sätt?
- Varför är det viktigt att använda aktuella webbstandarder istället för föråldrade element?

Utforska mer om [föråldrade och avvecklade HTML-element](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) för att förstå hur webbstandarder utvecklas för att förbättra användarupplevelsen.


## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/16)

## Granskning och självstudier

**Fördjupa din HTML-kunskap**

HTML har varit grunden för webben i över 30 år och har utvecklats från ett enkelt märkningsspråk för dokument till en sofistikerad plattform för att bygga interaktiva applikationer. Att förstå denna utveckling hjälper dig att uppskatta moderna webbstandarder och fatta bättre utvecklingsbeslut.

**Rekommenderade inlärningsvägar:**

1. **HTML:s historia och utveckling**
   - Undersök tidslinjen från HTML 1.0 till HTML5
   - Utforska varför vissa taggar blev föråldrade (tillgänglighet, mobilvänlighet, underhållbarhet)
   - Undersök nya HTML-funktioner och förslag

2. **Fördjupning i semantisk HTML**
   - Studera den kompletta listan över [HTML5:s semantiska element](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Öva på att identifiera när du ska använda `<article>`, `<section>`, `<aside>` och `<main>`
   - Lär dig om ARIA-attribut för förbättrad tillgänglighet

3. **Modern webbutveckling**
   - Utforska [hur man bygger responsiva webbplatser](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) på Microsoft Learn
   - Förstå hur HTML integreras med CSS och JavaScript
   - Lär dig om webbprestanda och SEO-bästa praxis

**Reflektionsfrågor:**
- Vilka föråldrade HTML-taggar upptäckte du, och varför togs de bort?
- Vilka nya HTML-funktioner föreslås för framtida versioner?
- Hur bidrar semantisk HTML till webbtillgänglighet och SEO?


## Uppgift

[Öva på din HTML: Bygg en bloggmockup](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.