# Skapa tillgängliga webbsidor

![Allt om tillgänglighet](../../../sketchnotes/webdev101-a11y.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
> \- Sir Timothy Berners-Lee, W3C Director and inventor of the World Wide Web

Detta citat belyser perfekt vikten av att skapa tillgängliga webbplatser. En applikation som inte kan nås av alla är per definition uteslutande. Som webbutvecklare bör vi alltid ha tillgänglighet i åtanke. Genom att ha detta fokus från början kommer du att vara på god väg att säkerställa att alla kan komma åt sidorna du skapar. I den här lektionen lär du dig om verktygen som kan hjälpa dig att säkerställa att dina webbtillgångar är tillgängliga och hur du bygger med tillgänglighet i åtanke.

> Du kan ta den här lektionen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility?WT.mc_id=academic-13441-cxa)!

## Verktyg att använda

### Skärmläsare

Ett av de mest kända tillgänglighetsverktygen är skärmläsare.

[Skärmläsare](https://en.wikipedia.org/wiki/Screen_reader) är vanliga klienter för personer med synnedsättning. Eftersom vi lägger tid på att se till att en webbläsare förmedlar informationen vi vill dela på rätt sätt, måste vi också se till att en skärmläsare gör detsamma.

Som mest grundläggande läser en skärmläsare en sida uppifrån och ner med hörbara ljud. Om din sida är helt text, kommer läsaren att förmedla informationen på ett liknande sätt till en webbläsare. Naturligtvis är webbsidor sällan enbart text; de kommer att innehålla länkar, grafik, färg och andra visuella komponenter. Försiktighet måste iakttas för att säkerställa att denna information läses korrekt av en skärmläsare.

Varje webbutvecklare bör bekanta sig med en skärmläsare. Som framhållits ovan är det klienten dina användare kommer att använda. Ungefär på samma sätt som du är bekant med hur en webbläsare fungerar, bör du lära dig hur en skärmläsare fungerar. Lyckligtvis finns skärmläsare inbyggda i de flesta operativsystem.

Vissa webbläsare har också inbyggda verktyg och tillägg som kan läsa text högt eller till och med tillhandahålla några grundläggande navigeringsfunktioner, såsom [dessa tillgänglighetsfokuserade Edge-webbläsarverktyg](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Dessa är också viktiga tillgänglighetsverktyg, men fungerar väldigt annorlunda än skärmläsare och de ska inte förväxlas med testverktyg för skärmläsare.

✅ Prova en skärmläsare och webbläsares textläsare. I Windows ingår [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) som standard, och [JAWS](https:// webaim.org/articles/jaws/) och [NVDA](https://www.nvaccess.org/about-nvda/) kan också installeras. På macOS och iOS är [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) installerat som standard.

### Zoom

Ett annat verktyg som ofta används av personer med synnedsättning är zoomning. Den mest grundläggande typen av zoomning är statisk zoom, kontrollerad med `Kontroll + plustecken (+)` eller genom att minska skärmupplösningen. Denna typ av zoom får hela sidan att ändra storlek, så att använda [responsiv design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) är viktigt för att ge en bra användarupplevelse med ökade zoomnivåer .

En annan typ av zoom är beroende av specialiserad programvara för att förstora ett område av skärmen och panorera, ungefär som att använda ett riktigt förstoringsglas. På Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198 ) är inbyggt, och [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) är en förstoringsprogramvara från tredje part med fler funktioner och en större användarbas. Både macOS och iOS har en inbyggd förstoringsprogram som heter [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrastpjäser

Färger på webbplatser måste väljas noggrant för att möta behoven hos färgblinda användare eller personer som har svårt att se färger med låg kontrast.

✅ Testa en webbplats som du tycker om att använda för färganvändning med ett webbläsartillägg som [WCAGs färgkontroll](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-USA). Vad lärde du dig?

### Lighthouse

I området för utvecklarverktyg i din webbläsare hittar du verktyget Lighthouse. Detta verktyg är viktigt för att få en första bild av tillgängligheten (liksom annan analys) av en webbplats. Även om det är viktigt att inte förlita sig enbart på Lighthouse, är ett 100 %-poäng till stor hjälp som baslinje.

✅ Hitta Lighthouse i din webbläsares utvecklarverktygspanel och kör en analys på vilken webbplats som helst. Vad upptäcker du?

## Designa för tillgänglighet

Tillgänglighet är ett relativt stort ämne. För att hjälpa dig finns det många resurser tillgängliga.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Även om vi inte kommer att kunna täcka alla aspekter av att skapa tillgängliga webbplatser, nedan är några av de grundläggande principerna du vill implementera. Att designa en tillgänglig sida från början är **alltid** enklare än att gå tillbaka till en befintlig sida för att göra den tillgänglig.

## Bra visningsprinciper

### Färgsäkra paletter

Människor ser världen på olika sätt, och detta inkluderar färger. När du väljer ett färgschema för din webbplats bör du se till att det är tillgängligt för alla. Ett bra [verktyg för att skapa färgpaletter är Color Safe](http://colorsafe.co/).

✅ Identifiera en webbplats som är mycket problematisk i sin färganvändning. Varför är den det?

### Använd rätt HTML

Med CSS och JavaScript är det möjligt att få vilket element som helst att se ut som vilken typ av kontroll som helst. `<span>` kan användas för att skapa en `<knapp>`, och `<b>` kan bli en hyperlänk. Även om detta kan anses vara lättare att designa, förmedlar det ingenting till en skärmläsare. Använd lämplig HTML när du skapar kontroller på en sida. Om du vill ha en hyperlänk, använd `<a>`. Att använda rätt HTML för rätt kontroll kallas att använda semantisk HTML.

✅ Gå till valfri webbplats och se om designers och utvecklare använder HTML korrekt. Kan du hitta en knapp som ska vara en länk? Tips: högerklicka och välj "Visa sidkälla" i din webbläsare för att titta på underliggande kod.

### Skapa en beskrivande rubrikhierarki

Användare av skärmläsare [litar starkt på rubriker](https://webaim.org/projects/screenreadersurvey8/#finding) för att hitta information och navigera genom en sida. Att skriva beskrivande rubrikinnehåll och använda semantiska rubriktaggar är viktigt för att skapa en lättnavigerad webbplats för användare av skärmläsare.

### Använd bra visuella ledtrådar

CSS erbjuder fullständig kontroll över utseendet på alla element på en sida. Du kan skapa textrutor utan kontur eller hyperlänkar utan understrykning. Att ta bort dessa ledtrådar kan tyvärr göra det mer utmanande för någon som är beroende av dem att kunna känna igen typen av kontroll.

## Vikten av länktext

Hyperlänkar är kärnan för att navigera på webben. Som ett resultat kan alla användare navigera på din webbplats genom att säkerställa att en skärmläsare kan läsa länkar korrekt.

### Skärmläsare och länkar

Som du kan förvänta dig läser skärmläsare länktext på samma sätt som de läser all annan text på sidan. Med detta i åtanke kan texten som visas nedan kännas helt acceptabel.

> Den lilla pingvinen, ibland känd som älvpingvinen, är den minsta pingvinen i världen. [Klicka här](https://en.wikipedia.org/wiki/Little_penguin) för mer information.

> Den lilla pingvinen, ibland känd som älvpingvinen, är den minsta pingvinen i världen. Besök https://en.wikipedia.org/wiki/Little_penguin för mer information.

> **OBS** Som du håller på att läsa bör du **aldrig** skapa länkar som ser ut som ovan.

Kom ihåg att skärmläsare är ett annat gränssnitt än webbläsare med en annan uppsättning funktioner.

### Problemet med att använda URL:en

Skärmläsare läser texten. Om en URL visas i texten kommer skärmläsaren att läsa URL:en. Generellt sett förmedlar webbadressen inte meningsfull information och kan låta irriterande. Du kanske har upplevt detta om din telefon någonsin har hört ett textmeddelande med en URL.

### Problemet med "klicka här"

Skärmläsare har också möjlighet att bara läsa hyperlänkarna på en sida, ungefär på samma sätt som en seende person skulle skanna en sida efter länkar. Om länktexten alltid är "klicka här", kommer allt användaren att höra "klicka här, klicka här, klicka här, klicka här, klicka här, ..." Alla länkar går nu inte att skilja från varandra.

### Bra länktext

Bra länktext beskriver kort vad som finns på andra sidan av länken. I exemplet ovan som talar om små pingviner är länken till Wikipedia-sidan om arten. Frasen *små pingviner* skulle ge perfekt länktext eftersom den gör det tydligt vad någon kommer att lära sig om om de klickar på länken - små pingviner.

> Den [lilla pingvinen](https://en.wikipedia.org/wiki/Little_penguin), ibland känd som älvpingvinen, är den minsta pingvinen i världen.

✅ Kola runt på webben i några minuter för att hitta sidor som använder obskyra länkstrategier. Jämför dem med andra, bättre länkade webbplatser. Vad lärde du dig?

#### Sökmotoranteckningar

Som en extra bonus för att säkerställa att din webbplats är tillgänglig för alla, hjälper du även sökmotorer att navigera på din webbplats. Sökmotorer använder länktext för att lära sig sidornas ämnen. Så att använda bra länktext hjälper alla!

### ARIA

Föreställ dig följande sida:

| Produkt | Beskrivning | Beställning |
| ------- | ----------- | ----------- |
| Widget | [Beskrivning]('#') | [Beställning]('#') |
| Super widget | [Beskrivning]('#') | [Beställning]('#') |

I det här exemplet är det meningsfullt att duplicera texten i beskrivning och ordning för någon som använder en webbläsare. Men någon som använder en skärmläsare skulle bara höra orden *beskrivning* och *beställning* upprepas utan sammanhang.

För att stödja dessa typer av scenarier stödjer HTML en uppsättning attribut som kallas [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Dessa attribut gör att du kan ge ytterligare information till skärmläsare.

> **OBS**: Liksom många aspekter av HTML kan stödet för webbläsare och skärmläsare variera. De flesta mainline-klienter stöder dock ARIA-attribut.

Du kan använda `aria-label` för att beskriva länken när formatet på sidan inte tillåter dig. Beskrivningen för widget kan ställas in som

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Generellt sett ersätter användningen av semantisk uppmärkning enligt beskrivningen ovan användningen av ARIA, men ibland finns det ingen semantisk motsvarighet för olika HTML-widgets. Ett bra exempel är ett träd. Det finns ingen HTML-ekvivalent för ett träd, så du identifierar den generiska `<div>` för detta element med en korrekt roll och ariavärden. [MDN-dokumentationen om ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) innehåller mer användbar information.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Bilder

Det säger sig självt att skärmläsare inte automatiskt kan läsa vad som finns i en bild. Att se till att bilder är tillgängliga kräver inte mycket arbete - det är vad "alt"-attributet handlar om. Alla meningsfulla bilder bör ha en "alt" för att beskriva vad de är.
Bilder som är rent dekorativa bör ha sitt `alt`-attribut inställt på en tom sträng: `alt=""`. Detta förhindrar skärmläsare från att i onödan meddela den dekorativa bilden.

✅ Som du kanske förväntar dig kan sökmotorer inte heller förstå vad som finns i en bild. De använder också alternativ text. Så återigen, se till att din sida är tillgänglig som ger ytterligare bonusar!

## Tangentbordet

Vissa användare kan inte använda en mus eller styrplatta, utan förlitar sig istället på tangentbordsinteraktioner för att flytta från ett element till nästa. Det är viktigt för din webbplats att presentera ditt innehåll i logisk ordning så att en tangentbordsanvändare kan komma åt varje interaktivt element när de flyttar ner i ett dokument. Om du bygger dina webbsidor med semantisk uppmärkning och använder CSS för att styla sin visuella layout, bör din webbplats vara tangentbordsnavigerbar, men det är viktigt att testa denna aspekt manuellt. Läs mer om [strategier för tangentbordsnavigering](https://webaim.org/techniques/keyboard/).

✅ Gå till valfri webbplats och försök att navigera genom den med endast ditt tangentbord. Vad fungerar, vad fungerar inte? Varför?

## Sammanfattning

Webben som är tillgänglig för vissa är inte en verkligt "world-wide web". Det bästa sättet att säkerställa att webbplatserna du skapar är tillgängliga är att införliva bästa praxis för tillgänglighet från början. Även om det finns extra steg involverade, införliva dessa färdigheter i ditt arbetsflöde innebär att alla sidor du skapar kommer att vara tillgängliga.

---

## 🚀 Utmaning

Ta den här HTML-koden och skriv om den så att den är så tillgänglig som möjligt, med tanke på de strategier du lärt dig.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum.
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz efter föreläsningen

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Recension och självstudier

Många regeringar har lagar om tillgänglighetskrav. Läs upp om ditt hemlands tillgänglighetslagar. Vad omfattas och vad täcks inte? Ett exempel är [denna statliga webbplats](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20181937-om-tillganglighet-till-digital_sfs-2018-1937).

## Uppgift

[Analysera en otillgänglig webbplats](assignment.sv.md)

Tack: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) av Instrument
