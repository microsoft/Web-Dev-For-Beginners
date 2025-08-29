<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T08:02:37+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "sv"
}
-->
# Skapa tillgängliga webbsidor

![Allt om tillgänglighet](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Förkunskapsquiz
[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/)

> Webben är kraftfull tack vare sin universalitet. Tillgång för alla, oavsett funktionsnedsättning, är en grundläggande aspekt.
>
> \- Sir Timothy Berners-Lee, W3C-direktör och uppfinnare av World Wide Web

Detta citat belyser perfekt vikten av att skapa tillgängliga webbplatser. En applikation som inte kan nås av alla är per definition exkluderande. Som webbutvecklare bör vi alltid ha tillgänglighet i åtanke. Genom att fokusera på detta från början är du på god väg att säkerställa att alla kan använda de sidor du skapar. I denna lektion kommer du att lära dig om verktyg som kan hjälpa dig att säkerställa att dina webbtillgångar är tillgängliga och hur du bygger med tillgänglighet i åtanke.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Verktyg att använda

### Skärmläsare

Ett av de mest kända tillgänglighetsverktygen är skärmläsare.

[Skärmläsare](https://en.wikipedia.org/wiki/Screen_reader) är vanliga hjälpmedel för personer med synnedsättningar. När vi lägger tid på att säkerställa att en webbläsare korrekt förmedlar den information vi vill dela, måste vi också säkerställa att en skärmläsare gör detsamma.

I sin enklaste form läser en skärmläsare en sida från topp till botten med ljud. Om din sida bara innehåller text kommer läsaren att förmedla informationen på ett liknande sätt som en webbläsare. Självklart är webbsidor sällan enbart text; de innehåller länkar, grafik, färger och andra visuella komponenter. Det är viktigt att se till att denna information läses korrekt av en skärmläsare.

Varje webbutvecklare bör bekanta sig med en skärmläsare. Som nämnts ovan är det verktyget dina användare kommer att använda. På samma sätt som du är bekant med hur en webbläsare fungerar, bör du lära dig hur en skärmläsare fungerar. Lyckligtvis är skärmläsare inbyggda i de flesta operativsystem.

Vissa webbläsare har också inbyggda verktyg och tillägg som kan läsa text högt eller tillhandahålla grundläggande navigeringsfunktioner, såsom [dessa tillgänglighetsfokuserade verktyg för Edge-webbläsaren](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Dessa är också viktiga tillgänglighetsverktyg, men fungerar mycket annorlunda än skärmläsare och bör inte förväxlas med testverktyg för skärmläsare.

✅ Prova en skärmläsare och webbläsarens textläsare. På Windows är [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) inkluderad som standard, och [JAWS](https://webaim.org/articles/jaws/) och [NVDA](https://www.nvaccess.org/about-nvda/) kan också installeras. På macOS och iOS är [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) förinstallerad.

### Zoom

Ett annat verktyg som ofta används av personer med synnedsättningar är zoomning. Den mest grundläggande typen av zoomning är statisk zoom, som styrs med `Control + plustecken (+)` eller genom att minska skärmupplösningen. Denna typ av zoomning gör att hela sidan ändrar storlek, så att använda [responsiv design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) är viktigt för att ge en bra användarupplevelse vid högre zoomnivåer.

En annan typ av zoomning använder specialiserad programvara för att förstora ett område på skärmen och panorera, ungefär som att använda ett förstoringsglas. På Windows är [Förstoringsglas](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) inbyggt, och [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) är en tredjepartsförstoringsprogramvara med fler funktioner och en större användarbas. Både macOS och iOS har en inbyggd förstoringsprogramvara som heter [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrastkontroller

Färger på webbplatser måste väljas noggrant för att möta behoven hos färgblinda användare eller personer som har svårt att se färger med låg kontrast.

✅ Testa en webbplats du gillar att använda för färganvändning med ett webbläsartillägg som [WCAG:s färgkontroll](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Vad lär du dig?

### Lighthouse

I utvecklarverktygsområdet i din webbläsare hittar du Lighthouse-verktyget. Detta verktyg är viktigt för att få en första överblick över tillgängligheten (samt annan analys) av en webbplats. Även om det är viktigt att inte enbart förlita sig på Lighthouse, är en 100%-poäng mycket hjälpsam som en grundläggande riktlinje.

✅ Hitta Lighthouse i din webbläsares utvecklarverktygspanel och kör en analys på valfri webbplats. Vad upptäcker du?

## Designa för tillgänglighet

Tillgänglighet är ett relativt stort ämne. För att hjälpa dig finns det många resurser tillgängliga.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Även om vi inte kommer att kunna täcka alla aspekter av att skapa tillgängliga webbplatser, är nedan några av de grundläggande principer du vill implementera. Att designa en tillgänglig sida från början är **alltid** enklare än att gå tillbaka till en befintlig sida för att göra den tillgänglig.

## Bra visningsprinciper

### Färgsäkra paletter

Människor ser världen på olika sätt, och detta inkluderar färger. När du väljer ett färgschema för din webbplats bör du säkerställa att det är tillgängligt för alla. Ett utmärkt [verktyg för att generera färgpaletter är Color Safe](http://colorsafe.co/).

✅ Identifiera en webbplats som är mycket problematisk i sin användning av färger. Varför?

### Använd korrekt HTML

Med CSS och JavaScript är det möjligt att få vilket element som helst att se ut som vilken typ av kontroll som helst. `<span>` kan användas för att skapa en `<button>`, och `<b>` kan bli en hyperlänk. Även om detta kan anses vara enklare att styla, förmedlar det ingenting till en skärmläsare. Använd lämplig HTML när du skapar kontroller på en sida. Om du vill ha en hyperlänk, använd `<a>`. Att använda rätt HTML för rätt kontroll kallas att använda semantisk HTML.

✅ Gå till valfri webbplats och se om designers och utvecklare använder HTML korrekt. Kan du hitta en knapp som borde vara en länk? Tips: högerklicka och välj 'Visa sidkälla' i din webbläsare för att titta på underliggande kod.

### Skapa en beskrivande rubrikhierarki

Användare av skärmläsare [förlitar sig starkt på rubriker](https://webaim.org/projects/screenreadersurvey8/#finding) för att hitta information och navigera genom en sida. Att skriva beskrivande rubrikinnehåll och använda semantiska rubriktaggar är viktigt för att skapa en lättnavigerad webbplats för användare av skärmläsare.

### Använd bra visuella ledtrådar

CSS erbjuder fullständig kontroll över utseendet på alla element på en sida. Du kan skapa textrutor utan kontur eller hyperlänkar utan understrykning. Tyvärr kan borttagning av dessa ledtrådar göra det svårare för någon som är beroende av dem att känna igen typen av kontroll.

## Vikten av länktext

Hyperlänkar är kärnan i att navigera på webben. Därför är det viktigt att en skärmläsare kan läsa länkar korrekt så att alla användare kan navigera på din webbplats.

### Skärmläsare och länkar

Som du kan förvänta dig läser skärmläsare länktext på samma sätt som de läser annan text på sidan. Med detta i åtanke kan texten nedan kännas helt acceptabel.

> Den lilla pingvinen, ibland kallad älvpingvinen, är den minsta pingvinen i världen. [Klicka här](https://en.wikipedia.org/wiki/Little_penguin) för mer information.

> Den lilla pingvinen, ibland kallad älvpingvinen, är den minsta pingvinen i världen. Besök https://en.wikipedia.org/wiki/Little_penguin för mer information.

> **NOTE** Som du snart kommer att läsa bör du **aldrig** skapa länkar som ser ut som ovanstående.

Kom ihåg att skärmläsare är ett annat gränssnitt än webbläsare med en annan uppsättning funktioner.

### Problemet med att använda URL:en

Skärmläsare läser texten. Om en URL visas i texten kommer skärmläsaren att läsa URL:en. Generellt sett förmedlar URL:en inte meningsfull information och kan låta irriterande. Du kanske har upplevt detta om din telefon någonsin har läst upp ett textmeddelande med en URL.

### Problemet med "klicka här"

Skärmläsare har också möjlighet att läsa endast hyperlänkarna på en sida, ungefär som en seende person skulle skanna en sida efter länkar. Om länktexten alltid är "klicka här" kommer användaren bara att höra "klicka här, klicka här, klicka här, klicka här, klicka här, ..." Alla länkar blir nu oskiljbara från varandra.

### Bra länktext

Bra länktext beskriver kort vad som finns på andra sidan länken. I exemplet ovan som handlar om små pingviner går länken till Wikipedias sida om arten. Frasen *små pingviner* skulle vara perfekt länktext eftersom det tydligt anger vad någon kommer att lära sig om om de klickar på länken - små pingviner.

> Den [lilla pingvinen](https://en.wikipedia.org/wiki/Little_penguin), ibland kallad älvpingvinen, är den minsta pingvinen i världen.

✅ Surfa på webben i några minuter för att hitta sidor som använder otydliga länkstrategier. Jämför dem med andra, bättre länkade sidor. Vad lär du dig?

#### Anteckningar om sökmotorer

Som en extra bonus för att säkerställa att din webbplats är tillgänglig för alla, hjälper du sökmotorer att navigera på din webbplats också. Sökmotorer använder länktext för att lära sig ämnena på sidor. Så att använda bra länktext hjälper alla!

### ARIA

Föreställ dig följande sida:

| Produkt      | Beskrivning        | Beställ      |
| ------------ | ------------------ | ------------ |
| Widget       | [Beskrivning](../../../../1-getting-started-lessons/3-accessibility/') | [Beställ](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Beskrivning](../../../../1-getting-started-lessons/3-accessibility/') | [Beställ](../../../../1-getting-started-lessons/3-accessibility/') |

I detta exempel är det logiskt att duplicera texten för beskrivning och beställning för någon som använder en webbläsare. Men någon som använder en skärmläsare skulle bara höra orden *beskrivning* och *beställning* upprepas utan sammanhang.

För att stödja dessa typer av scenarier stöder HTML en uppsättning attribut som kallas [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Dessa attribut gör det möjligt att ge ytterligare information till skärmläsare.

> **NOTE**: Precis som många aspekter av HTML kan stöd för webbläsare och skärmläsare variera. Men de flesta huvudklienter stöder ARIA-attribut.

Du kan använda `aria-label` för att beskriva länken när sidans format inte tillåter det. Beskrivningen för widget kan ställas in som

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Generellt sett överträffar användningen av semantisk markup som beskrivs ovan användningen av ARIA, men ibland finns det ingen semantisk motsvarighet för olika HTML-widgetar. Ett bra exempel är ett träd. Det finns ingen HTML-motsvarighet för ett träd, så du identifierar den generiska `<div>` för detta element med en korrekt roll och ARIA-värden. [MDN-dokumentationen om ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) innehåller mer användbar information.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Bilder

Det säger sig självt att skärmläsare inte automatiskt kan läsa vad som finns i en bild. Att säkerställa att bilder är tillgängliga kräver inte mycket arbete - det är vad `alt`-attributet handlar om. Alla meningsfulla bilder bör ha ett `alt` som beskriver vad de är.  
Bilder som är rent dekorativa bör ha sitt `alt`-attribut inställt på en tom sträng: `alt=""`. Detta förhindrar att skärmläsare onödigt annonserar den dekorativa bilden.

✅ Som du kanske förväntar dig kan sökmotorer inte heller förstå vad som finns i en bild. De använder också alt-text. Så återigen ger det extra fördelar att säkerställa att din sida är tillgänglig!

## Tangentbordet

Vissa användare kan inte använda en mus eller pekplatta, utan förlitar sig istället på tangentbordsinteraktioner för att tabba från ett element till nästa. Det är viktigt att din webbplats presenterar ditt innehåll i logisk ordning så att en tangentbordsanvändare kan komma åt varje interaktivt element när de rör sig nedåt i dokumentet. Om du bygger dina webbsidor med semantisk markup och använder CSS för att styla deras visuella layout, bör din webbplats vara tangentbordsnavigerbar, men det är viktigt att testa denna aspekt manuellt. Läs mer om [strategier för tangentbordsnavigering](https://webaim.org/techniques/keyboard/).

✅ Gå till valfri webbplats och försök navigera genom den med endast tangentbordet. Vad fungerar, vad fungerar inte? Varför?

## Sammanfattning

En webb som bara är tillgänglig för vissa är inte en verkligt "världsomspännande webb". Det bästa sättet att säkerställa att de webbplatser du skapar är tillgängliga är att integrera bästa praxis för tillgänglighet från början. Även om det innebär extra steg, kommer det att innebära att alla sidor du skapar blir tillgängliga om du införlivar dessa färdigheter i ditt arbetsflöde nu.

---

## 🚀 Utmaning

Ta denna HTML och skriv om den för att vara så tillgänglig som möjligt, med hjälp av de strategier du lärt dig.

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
      <p class="footer-copyright">&copy; 2016 Instrument</p>
    </div>
  </body>
</html>
```

## Quiz efter föreläsningen
[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/en/)

## Granskning & Självstudier
Många regeringar har lagar om tillgänglighetskrav. Läs på om ditt hemlands lagar kring tillgänglighet. Vad täcks, och vad täcks inte? Ett exempel är [denna regeringswebbplats](https://accessibility.blog.gov.uk/).

## Uppgift

[Analysera en otillgänglig webbplats](assignment.md)

Källor: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) av Instrument

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.