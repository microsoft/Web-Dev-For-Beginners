# Oprettelse af tilgængelige websider

![Alt om tilgængelighed](/sketchnotes/webdev101-a11y.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før undervisning
[Quiz før undervisning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.
>
> \- Sir Timothy Berners-Lee, W3C-direktør og opfinder af World Wide Web

Dette citat fremhæver perfekt vigtigheden af at skabe tilgængelige hjemmesider. En applikation, der ikke kan tilgås af alle, er pr. definition ekskluderende. Som webudviklere bør vi altid have tilgængelighed i tankerne. Ved at have dette fokus fra begyndelsen vil du være godt på vej til at sikre, at alle kan få adgang til de sider, du opretter. I denne lektion lærer du om de værktøjer, der kan hjælpe dig med at sikre, at dine webaktiver er tilgængelige, og hvordan du bygger med tilgængelighed i tankerne. 

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Værktøjer, der skal bruges

### Skærmlæsere

Et af de mest kendte tilgængelighedsværktøjer er skærmlæsere.

[Screen readers](https://en.wikipedia.org/wiki/Screen_reader) er almindeligt anvendte klienter til personer med nedsat syn. Når vi bruger tid på at sikre, at en browser korrekt formidler de oplysninger, vi ønsker at dele, skal vi også sikre, at en skærmlæser gør det samme.

Helt grundlæggende vil en skærmlæser læse en side fra top til bund med lyd. Hvis din side kun består af tekst, vil læseren formidle informationen på samme måde som en browser. Selvfølgelig er websider sjældent ren tekst; de vil indeholde links, grafik, farver og andre visuelle komponenter. Der skal udvises omhu for at sikre, at disse oplysninger læses korrekt af en skærmlæser.

Enhver webudvikler bør gøre sig bekendt med en skærmlæser. Som fremhævet ovenfor, er det den klient, dine brugere vil bruge. På samme måde som du er bekendt med, hvordan en browser fungerer, bør du lære, hvordan en skærmlæser fungerer. Heldigvis er skærmlæsere indbygget i de fleste operativsystemer.

Nogle browsere har også indbyggede værktøjer og udvidelser, der kan læse tekst højt eller endda give nogle grundlæggende navigationsfunktioner, såsom [disse tilgængelighedsfokuserede Edge-browserværktøjer](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Disse er også vigtige tilgængelighedsværktøjer, men fungerer meget forskelligt fra skærmlæsere, og de bør ikke forveksles med testværktøjer til skærmlæsere.

✅ Prøv en skærmlæser og en browsertekstlæser. På Windows er [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) inkluderet som standard, og [JAWS](https://webaim.org/articles/jaws/) og [NVDA](https://www.nvaccess.org/about-nvda/) kan også installeres. På macOS og iOS er [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) installeret som standard.

### Zoom

Et andet værktøj, der ofte bruges af mennesker med synsnedsættelse, er zoom. Den mest basale form for zoom er statisk zoom, der styres med `Control + plustegn (+)` eller ved at mindske skærmopløsningen. Denne type zoom får hele siden til at ændre størrelse, så det er vigtigt at bruge [responsivt design](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) for at give en god brugeroplevelse ved øgede zoomniveauer.

En anden type zoom er afhængig af specialiseret software til at forstørre et område af skærmen og panorere, ligesom når man bruger et rigtigt forstørrelsesglas. I Windows er [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) indbygget, og [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) er et forstørrelsesprogram fra en tredjepart med flere funktioner og en større brugerbase. Både macOS og iOS har en indbygget forstørrelsessoftware kaldet [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrasttjek

Farver på hjemmesider skal vælges med omhu for at imødekomme behovene hos farveblinde brugere eller folk, der har svært ved at se farver med lav kontrast.

✅ Test et websted, du nyder at bruge, for farvebrug med en browserudvidelse som [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Hvad lærer du af det?

### Lighthouse

I udviklerværktøjsområdet i din browser finder du Lighthouse-værktøjet. Dette værktøj er vigtigt for at få et første overblik over tilgængeligheden (samt andre analyser) af et websted. Selvom det er vigtigt ikke udelukkende at stole på Lighthouse, er en score på 100 % meget nyttig som udgangspunkt.

✅ Find Lighthouse i din browsers udviklerværktøjspanel, og kør en analyse på et hvilket som helst websted. hvad opdager du?

## Design for tilgængelighed

Tilgængelighed er et relativt stort emne. For at hjælpe dig er der mange ressourcer til rådighed.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Vi vil ikke kunne dække alle aspekter af at skabe tilgængelige sider, men nedenfor er nogle af de grundlæggende principper, du bør implementere. At designe en tilgængelig side fra starten er **altid** lettere end at gå tilbage til en eksisterende side for at gøre den tilgængelig.

## Gode principper for visning

### Farvesikre paletter

Folk ser verden på forskellige måder, og det gælder også farver. Når du vælger et farveskema til din hjemmeside, bør du sikre dig, at det er tilgængeligt for alle. Et godt [værktøj til at generere farvepaletter er Color Safe](http://colorsafe.co/).

✅ Identificer et websted, der er meget problematisk i sin brug af farver. Hvorfor er den det?

### Brug korrekt HTML

Med CSS og JavaScript er det muligt af omdanne alle elementer til enhver type af kontrolelement. `<span>` kan bruge til at skabe et `<button>` element, og `<b>` kunne omdannes til et hyperlink. Selv om det kan gøre det nemmere i forhold til styling, bærer det ikke meget mening videre til en skærmlæser. Brug den hensigtsmæsige HTML når du skaber kontrolelementer på din side. Hvis du vil vise et hyperlink så brug `<a>`. At bruge den rigtige HTML til den rigtige kontrol kaldes at gøre brug af semantisk HTML (Semantic HTML).

✅ Gå ind på et hvilket som helst websted, og se, om designerne og udviklerne bruger HTML korrekt. Kan du finde en knap, der burde være et link? Tip: Højreklik og vælg 'View Page Source' i din browser for at se den underliggende kode.

### Skab et beskrivende overskriftshierarki

Skærmlæserbrugere [er meget afhængige af overskrifter](https://webaim.org/projects/screenreadersurvey8/#finding) for at finde information og navigere gennem en side. At skrive beskrivende overskriftsindhold og bruge semantiske overskriftskoder er vigtigt for at skabe en let navigerbar side for skærmlæserbrugere.

### Brug gode visuelle ledetråde

CSS giver fuld kontrol over udseendet af ethvert element på en side. Du kan lave tekstbokse uden omrids eller hyperlinks uden understregning. Desværre kan fjernelse af disse ledetråde gøre det mere udfordrende for en person, der er afhængig af dem, at kunne genkende typen af kontrol.

## Vigtigheden af linktekst

Hyperlinks er kernen i at navigere på nettet. Derfor er det vigtigt at sikre, at en skærmlæser kan læse links korrekt, så alle brugere kan navigere rundt på din hjemmeside.

### Skærmlæsere og links

Som man kan forvente, læser skærmlæsere linktekst på samme måde, som de læser enhver anden tekst på siden. Med dette i tankerne kan teksten, der demonstreres nedenfor, føles helt acceptabel.

> Den lille pingvin, også kendt som dværgpingvinen, er den mindste pingvin i verden. [Klik her](https://en.wikipedia.org/wiki/Little_penguin) for mere information.

> Den lille pingvin, også kendt som dværgpingvinen, er den mindste pingvin i verden. Besøg https://en.wikipedia.org/wiki/Little_penguin for mere information.

> **BEMÆRK** Som du vil læse nu, bør du **aldrig** oprette links, der ser ud som ovenstående.

Husk, at skærmlæsere er et andet interface end browsere med et andet sæt funktioner.

### Problemet med at bruge URL'en

Skærmlæsere læser teksten. Hvis der er en URL i teksten, vil skærmlæseren læse URL'en. Generelt formidler URL'en ikke meningsfuld information, og den kan lyde irriterende. Du har måske oplevet dette, hvis din telefon nogensinde har læst en tekstbesked med en URL op.

### Problemet med "klik her"

Skærmlæsere har også mulighed for kun at læse hyperlinks på en side, på samme måde som en seende person ville scanne en side for links. Hvis linkteksten altid er "klik her", vil brugeren kun høre "klik her, klik her, klik her, klik her, klik her, ...". Alle links er nu umulige at skelne fra hinanden.

### God linktekst

En god linktekst beskriver kort, hvad der er på den anden side af linket. I eksemplet ovenfor, der handler om små pingviner, er linket til Wikipedia-siden om arten. Sætningen *lille pingviner* ville være en perfekt linktekst, da den gør det klart, hvad man vil lære om, hvis man klikker på linket - små pingviner.

> Den [lille pingvin](https://en.wikipedia.org/wiki/Little_penguin), også kendt som dværgpingvinen, er den mindste pingvin i verden.

✅ Surf rundt på nettet i et par minutter for at finde sider, der bruger obskure linkstrategier. Sammenlign dem med andre, bedre linkede sider. Hvad lærer du af det?

#### Noter til søgemaskiner

Som en ekstra bonus for at sikre, at din hjemmeside er tilgængelig for alle, hjælper du også søgemaskinerne med at navigere på din hjemmeside. Søgemaskiner bruger linktekst til at lære sidernes emner at kende. Så at bruge god linktekst hjælper alle!

### ARIA

Forestil dig følgende side:

| Produkt      | Beskrivelse        | Ordre        |
| ------------ | ------------------ | ------------ |
| Widget       | [Beskrivelse]('#') | [Ordre]('#') |
| Super widget | [Beskrivelse]('#') | [Ordre]('#') |

I dette eksempel giver det mening at duplikere teksten i beskrivelse og rækkefølge for en person, der bruger en browser. Men en person, der bruger en skærmlæser, vil kun høre ordene *description* og *order* gentaget uden kontekst.

For at understøtte denne type scenarier understøtter HTML et sæt attributter, der kaldes [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Disse attributter giver dig mulighed for at give yderligere oplysninger til skærmlæsere.

> **BEMÆRK**: Som mange andre aspekter af HTML kan understøttelsen af browsere og skærmlæsere variere. De fleste mainline-klienter understøtter dog ARIA-attributter.

Du kan bruge `aria-label` til at beskrive linket, når formatet på siden ikke tillader det. Beskrivelsen af widgetten kan indstilles som

``` html
<a href="#" aria-label="Widget beskrivelse">beskrivelse</a>
```

✅ Generelt erstatter brugen af semantisk markup som beskrevet ovenfor brugen af ARIA, men nogle gange er der ingen semantisk ækvivalent for forskellige HTML-widgets. Et godt eksempel er et træ. Der er ingen HTML-ækvivalent for et træ, så du identificerer den generiske `<div>` for dette element med en korrekt rolle og aria-værdier. [MDN-dokumentation om ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) indeholder flere nyttige oplysninger.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Billeder

Det siger sig selv, at skærmlæsere ikke automatisk kan læse, hvad der er i et billede. Det kræver ikke meget arbejde at sikre, at billeder er tilgængelige - det er det, `alt`-attributten handler om. Alle meningsfulde billeder skal have en `alt` til at beskrive, hvad de er.
Billeder, der er rent dekorative, skal have deres `alt`-attribut sat til en tom streng: `alt=""`. Dette forhindrer skærmlæsere i unødigt at annoncere det dekorative billede.

✅ Som du måske forventer, er søgemaskiner heller ikke i stand til at forstå, hvad der er i et billede. De bruger også alt-tekst. Så endnu en gang giver det ekstra bonus at sikre, at din side er tilgængelig!

## Tastaturet

Nogle brugere kan ikke bruge en mus eller en trackpad og er i stedet afhængige af tastaturinteraktioner for at kunne tabbe fra et element til det næste. Det er vigtigt, at din hjemmeside præsenterer dit indhold i en logisk rækkefølge, så en tastaturbruger kan få adgang til hvert interaktivt element, når de bevæger sig ned gennem et dokument. Hvis du bygger dine websider med semantisk markup og bruger CSS til at style deres visuelle layout, bør dit site være tastatur-navigerbart, men det er vigtigt at teste dette aspekt manuelt. Læs mere om [keyboard navigation strategies](https://webaim.org/techniques/keyboard/).

✅ Gå ind på et hvilket som helst websted, og prøv at navigere gennem det udelukkende ved hjælp af dit tastatur. Hvad virker, hvad virker ikke? Og hvorfor?

## Resumé

Et web, der er tilgængeligt for nogle, er ikke et ægte "world-wide web". Den bedste måde at sikre, at de sider, du opretter, er tilgængelige, er at indarbejde best practices for tilgængelighed fra starten. Selvom der er ekstra trin involveret, vil det at indarbejde disse færdigheder i dit workflow nu betyde, at alle sider, du opretter, vil være tilgængelige.

---

## 🚀 Udfordring

Tag denne HTML og omskriv den, så den bliver så tilgængelig som muligt med de strategier, du har lært.

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
      <p class="site-subtitle">Verdens førende skildpadde fanklub</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"Jeg elsker skildspadder"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Grundlæggende viden om skildpadder</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chokoladeskildpadder</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Velkommen til Turtle Ipsum. 
            <a href="">Klik her</a> for at lære mere.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Skriv dig op til skildpadde nyheder</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Interne sider
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantisk eksempel</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz efter undervisning
[Quiz efter forelæsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Gennemgang og selvstudium

Mange regeringer har love om tilgængelighedskrav. Læs op på dit hjemlands tilgængelighedslove. Hvad er dækket, og hvad er ikke? Et eksempel er [dette regeringswebsted](https://accessibility.blog.gov.uk/).

## Opgave
 
[Analyser et ikke-tilgængeligt websted](assignment.md)

Kreditering: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) af Instrument
