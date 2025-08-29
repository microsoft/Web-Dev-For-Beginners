<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T08:23:36+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "da"
}
-->
# Oprettelse af tilgængelige websider

![Alt om tilgængelighed](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før lektionen
[Quiz før lektionen](https://ff-quizzes.netlify.app/web/)

> Internettets styrke ligger i dets universalitet. Adgang for alle, uanset handicap, er en essentiel del.
>
> \- Sir Timothy Berners-Lee, W3C-direktør og opfinder af World Wide Web

Dette citat fremhæver perfekt vigtigheden af at skabe tilgængelige hjemmesider. En applikation, der ikke kan tilgås af alle, er per definition ekskluderende. Som webudviklere bør vi altid have tilgængelighed i tankerne. Ved at fokusere på dette fra starten er du godt på vej til at sikre, at alle kan få adgang til de sider, du skaber. I denne lektion lærer du om værktøjer, der kan hjælpe dig med at sikre, at dine webressourcer er tilgængelige, og hvordan du bygger med tilgængelighed for øje.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Værktøjer at bruge

### Skærmlæsere

Et af de mest kendte tilgængelighedsværktøjer er skærmlæsere.

[Skærmlæsere](https://en.wikipedia.org/wiki/Screen_reader) bruges ofte af personer med synsnedsættelser. Når vi bruger tid på at sikre, at en browser korrekt formidler den information, vi ønsker at dele, skal vi også sikre, at en skærmlæser gør det samme.

En skærmlæser vil i sin enkleste form læse en side højt fra top til bund. Hvis din side kun består af tekst, vil læseren formidle informationen på en lignende måde som en browser. Men websteder er sjældent kun tekst; de indeholder links, grafik, farver og andre visuelle komponenter. Der skal tages hensyn til, at denne information læses korrekt af en skærmlæser.

Alle webudviklere bør sætte sig ind i, hvordan en skærmlæser fungerer. Som nævnt ovenfor er det det værktøj, dine brugere vil benytte. På samme måde som du kender til, hvordan en browser fungerer, bør du lære, hvordan en skærmlæser fungerer. Heldigvis er skærmlæsere indbygget i de fleste operativsystemer.

Nogle browsere har også indbyggede værktøjer og udvidelser, der kan læse tekst højt eller give nogle grundlæggende navigationsfunktioner, som f.eks. [disse tilgængelighedsfokuserede Edge-browserværktøjer](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Disse er også vigtige tilgængelighedsværktøjer, men fungerer meget anderledes end skærmlæsere og bør ikke forveksles med testværktøjer til skærmlæsere.

✅ Prøv en skærmlæser og en browsertekstlæser. På Windows er [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) inkluderet som standard, og [JAWS](https://webaim.org/articles/jaws/) og [NVDA](https://www.nvaccess.org/about-nvda/) kan også installeres. På macOS og iOS er [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) installeret som standard.

### Zoom

Et andet værktøj, der ofte bruges af personer med synsnedsættelser, er zoom. Den mest grundlæggende form for zoom er statisk zoom, som styres med `Control + plus-tegn (+)` eller ved at reducere skærmopløsningen. Denne type zoom får hele siden til at ændre størrelse, så det er vigtigt at bruge [responsivt design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) for at give en god brugeroplevelse ved øgede zoomniveauer.

En anden type zoom bruger specialiseret software til at forstørre et område af skærmen og panorere, ligesom man bruger et forstørrelsesglas. På Windows er [Forstørrelsesglas](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) indbygget, og [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) er en tredjeparts forstørrelsessoftware med flere funktioner og en større brugerbase. Både macOS og iOS har en indbygget forstørrelsessoftware kaldet [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrasttestere

Farver på websteder skal vælges omhyggeligt for at imødekomme behovene hos farveblinde brugere eller personer, der har svært ved at se farver med lav kontrast.

✅ Test et websted, du godt kan lide, for farvebrug med en browserudvidelse som [WCAG's farvetester](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Hvad lærer du?

### Lighthouse

I udviklerværktøjsområdet i din browser finder du Lighthouse-værktøjet. Dette værktøj er vigtigt for at få et første indtryk af tilgængeligheden (samt andre analyser) af et websted. Selvom det er vigtigt ikke at stole udelukkende på Lighthouse, er en score på 100 % meget nyttig som udgangspunkt.

✅ Find Lighthouse i din browsers udviklerværktøjspanel, og kør en analyse på et vilkårligt websted. Hvad opdager du?

## Design med tilgængelighed for øje

Tilgængelighed er et relativt stort emne. For at hjælpe dig er der mange ressourcer tilgængelige.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Selvom vi ikke kan dække alle aspekter af at skabe tilgængelige sider, er nedenfor nogle af de grundlæggende principper, du bør implementere. At designe en tilgængelig side fra starten er **altid** lettere end at gå tilbage til en eksisterende side for at gøre den tilgængelig.

## Gode visuelle principper

### Farvesikre paletter

Folk ser verden på forskellige måder, og det inkluderer farver. Når du vælger et farveskema til dit websted, bør du sikre, at det er tilgængeligt for alle. Et fantastisk [værktøj til at generere farvepaletter er Color Safe](http://colorsafe.co/).

✅ Identificer et websted, der er meget problematisk i dets brug af farver. Hvorfor?

### Brug korrekt HTML

Med CSS og JavaScript er det muligt at få ethvert element til at ligne enhver type kontrol. `<span>` kunne bruges til at skabe en `<button>`, og `<b>` kunne blive til et hyperlink. Selvom dette måske anses for lettere at style, formidler det intet til en skærmlæser. Brug den passende HTML, når du opretter kontroller på en side. Hvis du vil have et hyperlink, skal du bruge `<a>`. At bruge den rigtige HTML til den rigtige kontrol kaldes at gøre brug af Semantisk HTML.

✅ Gå til et vilkårligt websted og se, om designerne og udviklerne bruger HTML korrekt. Kan du finde en knap, der burde være et link? Tip: højreklik og vælg 'Vis sidekilde' i din browser for at se den underliggende kode.

### Skab en beskrivende overskrifthierarki

Brugere af skærmlæsere [afhænger meget af overskrifter](https://webaim.org/projects/screenreadersurvey8/#finding) for at finde information og navigere gennem en side. At skrive beskrivende overskriftsindhold og bruge semantiske overskriftstags er vigtigt for at skabe et let navigerbart websted for brugere af skærmlæsere.

### Brug gode visuelle ledetråde

CSS giver fuld kontrol over udseendet af ethvert element på en side. Du kan skabe tekstbokse uden en ramme eller hyperlinks uden en understregning. Desværre kan fjernelse af disse ledetråde gøre det mere udfordrende for nogen, der er afhængige af dem, at genkende typen af kontrol.

## Vigtigheden af linktekst

Hyperlinks er kernen i at navigere på nettet. Derfor er det vigtigt at sikre, at en skærmlæser korrekt kan læse links, så alle brugere kan navigere på dit websted.

### Skærmlæsere og links

Som forventet læser skærmlæsere linktekst på samme måde, som de ville læse enhver anden tekst på siden. Med dette i tankerne kan teksten nedenfor virke helt acceptabel.

> Den lille pingvin, nogle gange kendt som eventyrpingvinen, er verdens mindste pingvin. [Klik her](https://en.wikipedia.org/wiki/Little_penguin) for mere information.

> Den lille pingvin, nogle gange kendt som eventyrpingvinen, er verdens mindste pingvin. Besøg https://en.wikipedia.org/wiki/Little_penguin for mere information.

> **NOTE** Som du snart vil læse, bør du **aldrig** oprette links, der ser ud som ovenstående.

Husk, at skærmlæsere er en anden grænseflade end browsere med et andet sæt funktioner.

### Problemet med at bruge URL'en

Skærmlæsere læser teksten. Hvis en URL vises i teksten, vil skærmlæseren læse URL'en. Generelt set formidler URL'en ikke meningsfuld information og kan lyde irriterende. Du har måske oplevet dette, hvis din telefon nogensinde har læst en tekstbesked med en URL højt.

### Problemet med "klik her"

Skærmlæsere har også evnen til kun at læse hyperlinks på en side, på samme måde som en seende person ville scanne en side for links. Hvis linkteksten altid er "klik her", vil brugeren kun høre "klik her, klik her, klik her, klik her, klik her, ..." Alle links bliver nu uadskillelige fra hinanden.

### God linktekst

God linktekst beskriver kort, hvad der er på den anden side af linket. I det ovenstående eksempel om små pingviner linker teksten til Wikipedia-siden om arten. Udtrykket *små pingviner* ville være perfekt som linktekst, da det gør det klart, hvad nogen vil lære om, hvis de klikker på linket - små pingviner.

> Den [lille pingvin](https://en.wikipedia.org/wiki/Little_penguin), nogle gange kendt som eventyrpingvinen, er verdens mindste pingvin.

✅ Surf på nettet i et par minutter for at finde sider, der bruger uklare linkstrategier. Sammenlign dem med andre, bedre linkede sider. Hvad lærer du?

#### Noter om søgemaskiner

Som en ekstra bonus ved at sikre, at dit websted er tilgængeligt for alle, hjælper du også søgemaskiner med at navigere på dit websted. Søgemaskiner bruger linktekst til at lære emnerne på sider. Så ved at bruge god linktekst hjælper du alle!

### ARIA

Forestil dig følgende side:

| Produkt      | Beskrivelse        | Bestil       |
| ------------ | ------------------ | ------------ |
| Widget       | [Beskrivelse](../../../../1-getting-started-lessons/3-accessibility/') | [Bestil](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Beskrivelse](../../../../1-getting-started-lessons/3-accessibility/') | [Bestil](../../../../1-getting-started-lessons/3-accessibility/') |

I dette eksempel giver det mening for en browserbruger at gentage teksten "beskrivelse" og "bestil". Men for en skærmlæserbruger vil ordene *beskrivelse* og *bestil* kun blive gentaget uden kontekst.

For at understøtte disse typer scenarier understøtter HTML et sæt attributter kendt som [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Disse attributter giver dig mulighed for at give yderligere information til skærmlæsere.

> **NOTE**: Som med mange aspekter af HTML kan browser- og skærmlæserstøtte variere. Dog understøtter de fleste mainstream-klienter ARIA-attributter.

Du kan bruge `aria-label` til at beskrive linket, når sidens format ikke tillader det. Beskrivelsen for widget kunne sættes som

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Generelt overgår brugen af semantisk markup som beskrevet ovenfor brugen af ARIA, men nogle gange findes der ikke en semantisk ækvivalent for forskellige HTML-widgets. Et godt eksempel er et træ. Der findes ingen HTML-ækvivalent for et træ, så du identificerer den generiske `<div>` for dette element med en passende rolle og ARIA-værdier. [MDN-dokumentationen om ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) indeholder mere nyttig information.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Billeder

Det siger sig selv, at skærmlæsere ikke automatisk kan læse, hvad der er i et billede. At sikre, at billeder er tilgængelige, kræver ikke meget arbejde - det er, hvad `alt`-attributten handler om. Alle meningsfulde billeder bør have en `alt`-beskrivelse, der forklarer, hvad de er.
Billeder, der kun er dekorative, bør have deres `alt`-attribut sat til en tom streng: `alt=""`. Dette forhindrer skærmlæsere i unødvendigt at annoncere det dekorative billede.

✅ Som du måske forventer, kan søgemaskiner heller ikke forstå, hvad der er i et billede. De bruger også alt-tekst. Så endnu en gang giver det at sikre, at din side er tilgængelig, ekstra fordele!

## Tastaturet

Nogle brugere er ude af stand til at bruge en mus eller en touchpad og er i stedet afhængige af tastaturinteraktioner for at navigere fra et element til det næste. Det er vigtigt, at dit websted præsenterer dit indhold i en logisk rækkefølge, så en tastaturbruger kan få adgang til hvert interaktivt element, mens de bevæger sig ned gennem dokumentet. Hvis du bygger dine websider med semantisk markup og bruger CSS til at style deres visuelle layout, bør dit websted være tastaturnavigerbart, men det er vigtigt at teste dette aspekt manuelt. Læs mere om [tastaturnavigationsstrategier](https://webaim.org/techniques/keyboard/).

✅ Gå til et vilkårligt websted og prøv at navigere gennem det kun ved hjælp af dit tastatur. Hvad fungerer, og hvad fungerer ikke? Hvorfor?

## Opsummering

Et web, der kun er tilgængeligt for nogle, er ikke et ægte 'world-wide web'. Den bedste måde at sikre, at de sider, du skaber, er tilgængelige, er at inkorporere tilgængelighedsprincipper fra starten. Selvom der er ekstra trin involveret, vil det at integrere disse færdigheder i din arbejdsgang nu betyde, at alle sider, du skaber, vil være tilgængelige.

---

## 🚀 Udfordring

Tag denne HTML og omskriv den, så den er så tilgængelig som muligt, givet de strategier, du har lært.

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

## Quiz efter lektionen
[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/en/)

## Gennemgang & Selvstudie
Mange regeringer har love om tilgængelighedskrav. Undersøg dit hjemlands love om tilgængelighed. Hvad er dækket, og hvad er ikke? Et eksempel er [denne regeringswebside](https://accessibility.blog.gov.uk/).

## Opgave

[Analyser en ikke-tilgængelig webside](assignment.md)

Kreditering: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) af Instrument

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.