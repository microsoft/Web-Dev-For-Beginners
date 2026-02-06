# Naloga za vajo HTML: Ustvarite maketo bloga

## Cilji učenja

Uporabite svoje znanje HTML za oblikovanje in kodiranje celotne strukture domače strani bloga. Ta praktična naloga bo okrepila koncept semantičnega HTML-ja, najboljše prakse dostopnosti in veščine profesionalne organizacije kode, ki jih boste uporabljali skozi celotno pot spletnega razvoja.

**Z dokončanjem te naloge boste:**
- Vadili načrtovanje postavitve spletne strani pred kodiranjem
- Ustrezno uporabili semantične HTML elemente
- Ustvarili dostopno, dobro strukturirano označevanje
- Razvili profesionalne navade kodiranja z uporabo komentarjev in organizacije

## Zahteve projekta

### 1. del: Načrtovanje dizajna (vizualna maketa)

**Ustvarite vizualno maketo domače strani bloga, ki vključuje:**
- Glavo z naslovom strani in navigacijo
- Glavno vsebinsko območje z vsaj 2-3 predogledi objav na blogu
- Stransko vrstico z dodatnimi informacijami (oddelek o avtorju, nedavne objave, kategorije)
- Nogo z kontaktnimi informacijami ali povezavami

**Možnosti za ustvarjanje makete:**
- **Ročno narisana skica**: Uporabite papir in svinčnik, nato fotografirajte ali skenirajte svoj dizajn
- **Digitalna orodja**: Figma, Adobe XD, Canva, PowerPoint ali katera koli aplikacija za risanje
- **Orodja za žične modele**: Balsamiq, MockFlow ali podobna programska oprema za žične modele

**Označite odseke svoje makete** z HTML elementi, ki jih nameravate uporabiti (npr. "Glava - `<header>`", "Objave na blogu - `<article>`").

### 2. del: Načrtovanje HTML elementov

**Ustvarite seznam, ki povezuje vsak odsek vaše makete s specifičnimi HTML elementi:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Obvezni elementi za vključitev:**
Vaš HTML mora vsebovati vsaj 10 različnih semantičnih elementov s tega seznama:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 3. del: Implementacija HTML

**Kodirajte domačo stran bloga v skladu s temi standardi:**

1. **Struktura dokumenta**: Vključite pravilne elemente DOCTYPE, html, head in body
2. **Semantično označevanje**: Uporabite HTML elemente za njihov namen
3. **Dostopnost**: Vključite ustrezno alt besedilo za slike in smiselno besedilo povezav
4. **Kakovost kode**: Uporabite dosledno zamikanje in smiselne komentarje
5. **Vsebina**: Vključite realistično vsebino bloga (lahko uporabite nadomestno besedilo)

**Vzorec strukture HTML:**
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

### 4. del: Refleksija

**Napišite kratko refleksijo (3-5 stavkov), ki obravnava:**
- Kateri HTML elementi so vam bili najbolj domači za uporabo?
- S kakšnimi izzivi ste se soočili med načrtovanjem ali kodiranjem?
- Kako vam je semantični HTML pomagal organizirati vsebino?
- Kaj bi naredili drugače pri naslednjem HTML projektu?

## Seznam za oddajo

**Pred oddajo se prepričajte, da imate:**
- [ ] Vizualno maketo z označenimi HTML elementi
- [ ] Popolno HTML datoteko s pravilno strukturo dokumenta
- [ ] Vsaj 10 različnih semantičnih HTML elementov, uporabljenih ustrezno
- [ ] Smiselne komentarje, ki pojasnjujejo strukturo vaše kode
- [ ] Veljavno HTML sintakso (testirajte v brskalniku)
- [ ] Pisno refleksijo, ki obravnava vprašanja iz navodil

## Ocenjevalna lestvica

| Merila | Odlično (4) | Dobro (3) | Razvijajoče (2) | Začetno (1) |
|--------|-------------|-----------|-----------------|-------------|
| **Načrtovanje in dizajn** | Podrobna, dobro označena maketa, ki jasno prikazuje razumevanje postavitve in semantične strukture HTML | Jasna maketa z večino ustrezno označenih odsekov | Osnovna maketa z nekaj označbami, kaže splošno razumevanje | Minimalna ali nejasna maketa, brez ustrezne identifikacije odsekov |
| **Uporaba semantičnega HTML** | Uporablja 10+ semantičnih elementov ustrezno, kaže globoko razumevanje strukture HTML in dostopnosti | Uporablja 8-9 semantičnih elementov pravilno, kaže dobro razumevanje semantičnega označevanja | Uporablja 6-7 semantičnih elementov, nekaj zmede glede ustrezne uporabe | Uporablja manj kot 6 elementov ali napačno uporablja semantične elemente |
| **Kakovost in organizacija kode** | Izjemno dobro organizirana, pravilno zamaknjena koda s celovitimi komentarji in popolno HTML sintakso | Dobro organizirana koda z dobro zamikanjem, koristnimi komentarji in veljavno sintakso | Večinoma organizirana koda z nekaj komentarji, manjše težave s sintakso | Slaba organizacija, minimalni komentarji, več napak v sintaksi |
| **Dostopnost in najboljše prakse** | Odlične dostopnostne rešitve, smiselno alt besedilo, pravilna hierarhija naslovov, sledi vsem sodobnim najboljšim praksam HTML | Dobri dostopnostni elementi, ustrezna uporaba naslovov in alt besedila, sledi večini najboljših praks | Nekatere dostopnostne rešitve, osnovno alt besedilo in struktura naslovov | Omejene dostopnostne rešitve, slaba struktura naslovov, ne sledi najboljšim praksam |
| **Refleksija in učenje** | Poglobljena refleksija, ki kaže globoko razumevanje konceptov HTML in premišljeno analizo učnega procesa | Dobra refleksija, ki kaže razumevanje ključnih konceptov in nekaj samorefleksije o učenju | Osnovna refleksija z omejenim vpogledom v koncepte HTML ali učni proces | Minimalna ali manjkajoča refleksija, kaže malo razumevanja naučenih konceptov |

## Učni viri

**Osnovni viri:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Celoten vodnik po vseh HTML elementih
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Razumevanje semantičnega označevanja
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Ustvarjanje dostopne spletne vsebine
- [HTML Validator](https://validator.w3.org/) - Preverite svojo HTML sintakso

**Nasveti za uspeh:**
- Začnite z maketo, preden napišete kodo
- Uporabite orodja za razvijalce v brskalniku za pregled strukture HTML
- Testirajte svojo stran na različnih velikostih zaslona (tudi brez CSS)
- Preberite svoj HTML na glas, da preverite, ali struktura logično deluje
- Razmislite, kako bi bralnik zaslona interpretiral strukturo vaše strani

> 💡 **Zapomnite si**: Ta naloga se osredotoča na strukturo in semantiko HTML. Ne skrbite za vizualno oblikovanje – za to je namenjen CSS! Vaša stran morda izgleda preprosto, vendar mora biti dobro strukturirana in smiselna.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.