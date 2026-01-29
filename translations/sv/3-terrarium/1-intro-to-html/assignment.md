# HTML Övningsuppgift: Skapa en bloggmockup

## Lärandemål

Använd dina HTML-kunskaper genom att designa och koda en komplett struktur för en bloggsida. Denna praktiska uppgift kommer att stärka dina kunskaper om semantisk HTML, bästa praxis för tillgänglighet och färdigheter i professionell kodorganisering som du kommer att använda under hela din resa inom webbutveckling.

**Genom att slutföra denna uppgift kommer du att:**
- Öva på att planera webbplatslayouter innan kodning
- Använda semantiska HTML-element på rätt sätt
- Skapa tillgänglig och välstrukturerad markup
- Utveckla professionella kodvanor med kommentarer och organisering

## Projektkrav

### Del 1: Designplanering (Visuell Mockup)

**Skapa en visuell mockup av din bloggsida som inkluderar:**
- Header med webbplatsens titel och navigering
- Huvudinnehållsområde med minst 2-3 förhandsvisningar av blogginlägg
- Sidopanel med ytterligare information (om-sektion, senaste inlägg, kategorier)
- Footer med kontaktinformation eller länkar

**Alternativ för att skapa mockup:**
- **Handritad skiss**: Använd papper och penna, fotografera eller skanna din design
- **Digitala verktyg**: Figma, Adobe XD, Canva, PowerPoint eller någon annan ritapplikation
- **Wireframe-verktyg**: Balsamiq, MockFlow eller liknande wireframe-programvara

**Märk mockupens sektioner** med de HTML-element du planerar att använda (t.ex. "Header - `<header>`", "Blogginlägg - `<article>`").

### Del 2: Planering av HTML-element

**Skapa en lista som kopplar varje sektion i din mockup till specifika HTML-element:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Obligatoriska element att inkludera:**
Din HTML måste innehålla minst 10 olika semantiska element från denna lista:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Del 3: HTML-implementering

**Koda din bloggsida enligt dessa standarder:**

1. **Dokumentstruktur**: Inkludera korrekt DOCTYPE, html, head och body-element
2. **Semantisk markup**: Använd HTML-element för deras avsedda syfte
3. **Tillgänglighet**: Inkludera korrekt alt-text för bilder och meningsfull länktext
4. **Kodkvalitet**: Använd konsekvent indragning och meningsfulla kommentarer
5. **Innehåll**: Inkludera realistiskt blogginnehåll (du kan använda platshållartext)

**Exempel på HTML-struktur:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Del 4: Reflektion

**Skriv en kort reflektion (3-5 meningar) som tar upp:**
- Vilka HTML-element var du mest säker på att använda?
- Vilka utmaningar stötte du på under planeringen eller kodningen?
- Hur hjälpte semantisk HTML till att organisera ditt innehåll?
- Vad skulle du göra annorlunda i ditt nästa HTML-projekt?

## Inlämningschecklista

**Innan du lämnar in, se till att du har:**
- [ ] Visuell mockup med märkta HTML-element
- [ ] Komplett HTML-fil med korrekt dokumentstruktur
- [ ] Minst 10 olika semantiska HTML-element som används på rätt sätt
- [ ] Meningsfulla kommentarer som förklarar din kodstruktur
- [ ] Giltig HTML-syntax (testa i en webbläsare)
- [ ] Skriven reflektion som tar upp frågorna i uppgiften

## Bedömningskriterier

| Kriterier | Exemplariskt (4) | Godkänt (3) | Under utveckling (2) | Början (1) |
|-----------|------------------|-------------|-----------------------|------------|
| **Planering & Design** | Detaljerad, välmärkt mockup som visar tydlig förståelse för layout och semantisk HTML-struktur | Tydlig mockup med de flesta sektioner korrekt märkta | Grundläggande mockup med viss märkning, visar generell förståelse | Minimal eller oklar mockup, saknar korrekt sektionsidentifiering |
| **Användning av semantisk HTML** | Använder 10+ semantiska element korrekt, visar djup förståelse för HTML-struktur och tillgänglighet | Använder 8-9 semantiska element korrekt, visar god förståelse för semantisk markup | Använder 6-7 semantiska element, viss förvirring kring korrekt användning | Använder färre än 6 element eller använder semantiska element felaktigt |
| **Kodkvalitet & organisering** | Exceptionellt välorganiserad, korrekt indragen kod med omfattande kommentarer och perfekt HTML-syntax | Välorganiserad kod med bra indragning, hjälpsamma kommentarer och giltig syntax | Mest organiserad kod med några kommentarer, mindre syntaxproblem | Dålig organisering, minimala kommentarer, flera syntaxfel |
| **Tillgänglighet & bästa praxis** | Utmärkta tillgänglighetshänsyn, meningsfull alt-text, korrekt rubrikhierarki, följer alla moderna HTML-bästa praxis | Bra tillgänglighetsfunktioner, lämplig användning av rubriker och alt-text, följer de flesta bästa praxis | Vissa tillgänglighetshänsyn, grundläggande alt-text och rubrikstruktur | Begränsade tillgänglighetsfunktioner, dålig rubrikstruktur, följer inte bästa praxis |
| **Reflektion & lärande** | Insiktsfull reflektion som visar djup förståelse för HTML-koncept och genomtänkt analys av lärandeprocessen | Bra reflektion som visar förståelse för nyckelkoncept och viss självinsikt om lärande | Grundläggande reflektion med begränsad insikt i HTML-koncept eller lärandeprocess | Minimal eller saknad reflektion, visar liten förståelse för lärda koncept |

## Lärresurser

**Viktiga referenser:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Komplett guide till alla HTML-element
- [HTML5 Semantiska Element](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Förstå semantisk markup
- [Webbtillgänglighetsriktlinjer](https://www.w3.org/WAI/WCAG21/quickref/) - Skapa tillgängligt webbinnehåll
- [HTML Validator](https://validator.w3.org/) - Kontrollera din HTML-syntax

**Proffstips för framgång:**
- Börja med din mockup innan du skriver någon kod
- Använd webbläsarens utvecklingsverktyg för att inspektera din HTML-struktur
- Testa din sida med olika skärmstorlekar (även utan CSS)
- Läs din HTML högt för att kontrollera om strukturen är logisk
- Fundera på hur en skärmläsare skulle tolka din sidstruktur

> 💡 **Kom ihåg**: Denna uppgift fokuserar på HTML-struktur och semantik. Oroa dig inte för visuell styling – det är vad CSS är till för! Din sida kanske ser enkel ut, men den bör vara välstrukturerad och meningsfull.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.