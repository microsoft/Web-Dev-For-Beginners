<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-23T22:04:29+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "da"
}
-->
# HTML Øvelsesopgave: Byg en blogmockup

## Læringsmål

Anvend din HTML-viden ved at designe og kode en komplet blogforside. Denne praktiske opgave vil styrke dine begreber om semantisk HTML, bedste praksis for tilgængelighed og professionelle færdigheder inden for kodeorganisation, som du vil bruge gennem hele din webudviklingsrejse.

**Ved at fuldføre denne opgave vil du:**
- Øve dig i at planlægge webside-layouts før kodning
- Anvende semantiske HTML-elementer korrekt
- Skabe tilgængelig og velstruktureret markup
- Udvikle professionelle kodningsvaner med kommentarer og organisering

## Projektkrav

### Del 1: Designplanlægning (Visuel mockup)

**Lav en visuel mockup af din blogforside, der inkluderer:**
- Header med sidetitel og navigation
- Hovedindholdsområde med mindst 2-3 blogindlæg
- Sidebar med yderligere information (om-sektion, seneste indlæg, kategorier)
- Footer med kontaktinformation eller links

**Muligheder for mockup-oprettelse:**
- **Håndtegnet skitse**: Brug papir og blyant, og tag derefter et foto eller scan din design
- **Digitale værktøjer**: Figma, Adobe XD, Canva, PowerPoint eller enhver tegneapplikation
- **Wireframe-værktøjer**: Balsamiq, MockFlow eller lignende wireframe-software

**Mærk dine mockup-sektioner** med de HTML-elementer, du planlægger at bruge (f.eks. "Header - `<header>`", "Blogindlæg - `<article>`").

### Del 2: HTML-elementplanlægning

**Lav en liste, der kortlægger hver sektion af din mockup til specifikke HTML-elementer:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Påkrævede elementer at inkludere:**
Din HTML skal indeholde mindst 10 forskellige semantiske elementer fra denne liste:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Del 3: HTML-implementering

**Kod din blogforside efter disse standarder:**

1. **Dokumentstruktur**: Inkluder korrekt DOCTYPE, html, head og body-elementer
2. **Semantisk markup**: Brug HTML-elementer til deres tilsigtede formål
3. **Tilgængelighed**: Inkluder korrekt alt-tekst til billeder og meningsfuld linktekst
4. **Kodekvalitet**: Brug konsekvent indrykning og meningsfulde kommentarer
5. **Indhold**: Inkluder realistisk blogindhold (du kan bruge pladsholdertekst)

**Eksempel på HTML-struktur:**
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

### Del 4: Refleksion

**Skriv en kort refleksion (3-5 sætninger), der adresserer:**
- Hvilke HTML-elementer var du mest sikker på at bruge?
- Hvilke udfordringer stødte du på under planlægning eller kodning?
- Hvordan hjalp semantisk HTML med at organisere dit indhold?
- Hvad ville du gøre anderledes i dit næste HTML-projekt?

## Indsendelsestjekliste

**Før du indsender, skal du sikre dig, at du har:**
- [ ] Visuel mockup med mærkede HTML-elementer
- [ ] Komplet HTML-fil med korrekt dokumentstruktur
- [ ] Mindst 10 forskellige semantiske HTML-elementer brugt korrekt
- [ ] Meningsfulde kommentarer, der forklarer din kodestruktur
- [ ] Gyldig HTML-syntaks (test i en browser)
- [ ] Skriftlig refleksion, der adresserer spørgsmålene i prompten

## Vurderingsrubrik

| Kriterier | Fremragende (4) | Kompetent (3) | Under udvikling (2) | Begynder (1) |
|-----------|-----------------|---------------|----------------------|--------------|
| **Planlægning & Design** | Detaljeret, velmærket mockup, der viser klar forståelse af layout og HTML semantisk struktur | Klart mockup med de fleste sektioner korrekt mærket | Grundlæggende mockup med noget mærkning, viser generel forståelse | Minimal eller uklar mockup, mangler korrekt sektionidentifikation |
| **Semantisk HTML-brug** | Bruger 10+ semantiske elementer korrekt, demonstrerer dyb forståelse af HTML-struktur og tilgængelighed | Bruger 8-9 semantiske elementer korrekt, viser god forståelse af semantisk markup | Bruger 6-7 semantiske elementer, noget forvirring om korrekt brug | Bruger færre end 6 elementer eller misbruger semantiske elementer |
| **Kodekvalitet & Organisation** | Ekstremt velorganiseret, korrekt indrykket kode med omfattende kommentarer og perfekt HTML-syntaks | Velorganiseret kode med god indrykning, nyttige kommentarer og gyldig syntaks | Mest organiseret kode med nogle kommentarer, mindre syntaksproblemer | Dårlig organisation, minimale kommentarer, flere syntaksfejl |
| **Tilgængelighed & Bedste praksis** | Fremragende tilgængelighedsovervejelser, meningsfuld alt-tekst, korrekt overskriftsstruktur, følger alle moderne HTML bedste praksis | Gode tilgængelighedsfunktioner, passende brug af overskrifter og alt-tekst, følger de fleste bedste praksis | Nogle tilgængelighedsovervejelser, grundlæggende alt-tekst og overskriftsstruktur | Begrænsede tilgængelighedsfunktioner, dårlig overskriftsstruktur, følger ikke bedste praksis |
| **Refleksion & Læring** | Indsigtsfuld refleksion, der demonstrerer dyb forståelse af HTML-koncepter og gennemtænkt analyse af læringsprocessen | God refleksion, der viser forståelse af nøglekoncepter og noget selvindsigt i læring | Grundlæggende refleksion med begrænset indsigt i HTML-koncepter eller læringsproces | Minimal eller manglende refleksion, viser lidt forståelse af lærte koncepter |

## Læringsressourcer

**Vigtige referencer:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Komplet guide til alle HTML-elementer
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Forståelse af semantisk markup
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Oprettelse af tilgængeligt webindhold
- [HTML Validator](https://validator.w3.org/) - Tjek din HTML-syntaks

**Tips til succes:**
- Start med din mockup, før du skriver nogen kode
- Brug browserens udviklerværktøjer til at inspicere din HTML-struktur
- Test din side med forskellige skærmstørrelser (selv uden CSS)
- Læs din HTML højt for at tjekke, om strukturen giver logisk mening
- Overvej, hvordan en skærmlæser ville tolke din sidestruktur

> 💡 **Husk**: Denne opgave fokuserer på HTML-struktur og semantik. Bekymr dig ikke om visuel styling – det er det, CSS er til! Din side kan se enkel ud, men den skal være velstruktureret og meningsfuld.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.