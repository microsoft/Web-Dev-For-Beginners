# HTML-øvelse: Lag en bloggmockup

## Læringsmål

Bruk HTML-kunnskapene dine til å designe og kode en komplett blogg-hjemmeside. Denne praktiske oppgaven vil styrke forståelsen av semantisk HTML, beste praksis for tilgjengelighet, og profesjonelle ferdigheter innen kodeorganisering som du vil bruke gjennom hele din webutviklingsreise.

**Ved å fullføre denne oppgaven vil du:**
- Øve på å planlegge nettsidelayout før koding
- Bruke semantiske HTML-elementer på riktig måte
- Lage tilgjengelig og godt strukturert markup
- Utvikle profesjonelle kodevaner med kommentarer og organisering

## Prosjektkrav

### Del 1: Designplanlegging (Visuell mockup)

**Lag en visuell mockup av blogg-hjemmesiden din som inkluderer:**
- Header med nettstedets tittel og navigasjon
- Hovedinnholdsområde med minst 2-3 forhåndsvisninger av blogginnlegg
- Sidebar med tilleggsinformasjon (om-seksjon, nylige innlegg, kategorier)
- Footer med kontaktinformasjon eller lenker

**Alternativer for å lage mockup:**
- **Håndtegnet skisse**: Bruk papir og blyant, og ta deretter bilde eller skann designet ditt
- **Digitale verktøy**: Figma, Adobe XD, Canva, PowerPoint eller andre tegneprogrammer
- **Wireframe-verktøy**: Balsamiq, MockFlow eller lignende wireframe-programvare

**Merk mockup-seksjonene dine** med HTML-elementene du planlegger å bruke (f.eks. "Header - `<header>`", "Blogginnlegg - `<article>`").

### Del 2: Planlegging av HTML-elementer

**Lag en liste som kobler hver seksjon i mockupen til spesifikke HTML-elementer:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Påkrevde elementer som må inkluderes:**
HTML-en din må inneholde minst 10 forskjellige semantiske elementer fra denne listen:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Del 3: HTML-implementering

**Kode blogg-hjemmesiden din i henhold til disse standardene:**

1. **Dokumentstruktur**: Inkluder riktig DOCTYPE, html, head og body-elementer
2. **Semantisk markup**: Bruk HTML-elementer til deres tiltenkte formål
3. **Tilgjengelighet**: Inkluder riktig alt-tekst for bilder og meningsfulle lenketekster
4. **Kodekvalitet**: Bruk konsekvent innrykk og meningsfulle kommentarer
5. **Innhold**: Inkluder realistisk blogginnhold (du kan bruke plassholdertekst)

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

### Del 4: Refleksjon

**Skriv en kort refleksjon (3-5 setninger) som tar for seg:**
- Hvilke HTML-elementer følte du deg mest trygg på å bruke?
- Hvilke utfordringer møtte du under planlegging eller koding?
- Hvordan hjalp semantisk HTML deg med å organisere innholdet?
- Hva ville du gjort annerledes i ditt neste HTML-prosjekt?

## Innsendingskontrolliste

**Før du sender inn, sørg for at du har:**
- [ ] Visuell mockup med merkede HTML-elementer
- [ ] Komplett HTML-fil med riktig dokumentstruktur
- [ ] Minst 10 forskjellige semantiske HTML-elementer brukt på riktig måte
- [ ] Meningsfulle kommentarer som forklarer kodens struktur
- [ ] Gyldig HTML-syntaks (test i en nettleser)
- [ ] Skriftlig refleksjon som svarer på spørsmålene i oppgaven

## Vurderingskriterier

| Kriterier | Fremragende (4) | God (3) | Under utvikling (2) | Nybegynner (1) |
|-----------|-----------------|---------|---------------------|----------------|
| **Planlegging og design** | Detaljert, godt merket mockup som viser klar forståelse av layout og semantisk HTML-struktur | Klar mockup med de fleste seksjoner merket riktig | Enkel mockup med noe merking, viser generell forståelse | Minimal eller uklar mockup, mangler riktig seksjonsidentifikasjon |
| **Bruk av semantisk HTML** | Bruker 10+ semantiske elementer riktig, viser dyp forståelse av HTML-struktur og tilgjengelighet | Bruker 8-9 semantiske elementer korrekt, viser god forståelse av semantisk markup | Bruker 6-7 semantiske elementer, noe forvirring om riktig bruk | Bruker færre enn 6 elementer eller misbruker semantiske elementer |
| **Kodekvalitet og organisering** | Eksepsjonelt godt organisert, riktig innrykket kode med omfattende kommentarer og perfekt HTML-syntaks | Godt organisert kode med bra innrykk, nyttige kommentarer og gyldig syntaks | Mest organisert kode med noen kommentarer, mindre syntaksproblemer | Dårlig organisering, minimale kommentarer, flere syntaksfeil |
| **Tilgjengelighet og beste praksis** | Utmerkede tilgjengelighetsvurderinger, meningsfull alt-tekst, riktig overskriftsstruktur, følger alle moderne HTML beste praksis | Gode tilgjengelighetsfunksjoner, passende bruk av overskrifter og alt-tekst, følger de fleste beste praksis | Noen tilgjengelighetsvurderinger, grunnleggende alt-tekst og overskriftsstruktur | Begrensede tilgjengelighetsfunksjoner, dårlig overskriftsstruktur, følger ikke beste praksis |
| **Refleksjon og læring** | Innsiktsfull refleksjon som viser dyp forståelse av HTML-konsepter og gjennomtenkt analyse av læringsprosessen | God refleksjon som viser forståelse av nøkkelkonsepter og noe selvinnsikt i læring | Enkel refleksjon med begrenset innsikt i HTML-konsepter eller læringsprosess | Minimal eller manglende refleksjon, viser liten forståelse av lærte konsepter |

## Læringsressurser

**Essensielle referanser:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Komplett guide til alle HTML-elementer
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Forstå semantisk markup
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Lage tilgjengelig webinnhold
- [HTML Validator](https://validator.w3.org/) - Sjekk HTML-syntaksen din

**Pro Tips for Suksess:**
- Start med mockupen din før du skriver kode
- Bruk nettleserens utviklerverktøy for å inspisere HTML-strukturen din
- Test siden din med forskjellige skjermstørrelser (selv uten CSS)
- Les HTML-en din høyt for å sjekke om strukturen gir logisk mening
- Tenk på hvordan en skjermleser ville tolket sidens struktur

> 💡 **Husk**: Denne oppgaven fokuserer på HTML-struktur og semantikk. Ikke bekymre deg for visuell styling – det er det CSS er til for! Siden din kan se enkel ut, men den bør være godt strukturert og meningsfull.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi etterstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.