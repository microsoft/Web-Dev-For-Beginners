<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T21:37:56+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "sk"
}
-->
# HTML Praktická úloha: Vytvorenie návrhu blogu

## Ciele učenia

Použite svoje znalosti HTML na navrhnutie a kódovanie kompletnej štruktúry úvodnej stránky blogu. Táto praktická úloha posilní vaše znalosti o semantickom HTML, najlepších praktikách prístupnosti a profesionálnych zručnostiach v organizácii kódu, ktoré budete používať počas svojej cesty webového vývoja.

**Splnením tejto úlohy:**
- Precvičíte si plánovanie rozloženia webových stránok pred kódovaním
- Správne použijete semantické HTML prvky
- Vytvoríte prístupný a dobre štruktúrovaný kód
- Rozviniete profesionálne návyky v kódovaní pomocou komentárov a organizácie

## Požiadavky na projekt

### Časť 1: Plánovanie návrhu (vizuálny návrh)

**Vytvorte vizuálny návrh úvodnej stránky blogu, ktorý obsahuje:**
- Hlavičku s názvom stránky a navigáciou
- Hlavnú obsahovú oblasť s minimálne 2-3 ukážkami blogových príspevkov
- Bočný panel s doplnkovými informáciami (sekcia o autorovi, posledné príspevky, kategórie)
- Pätičku s kontaktnými informáciami alebo odkazmi

**Možnosti vytvorenia návrhu:**
- **Ručne kreslený návrh**: Použite papier a ceruzku, potom svoj návrh odfoťte alebo naskenujte
- **Digitálne nástroje**: Figma, Adobe XD, Canva, PowerPoint alebo akákoľvek aplikácia na kreslenie
- **Nástroje na tvorbu wireframov**: Balsamiq, MockFlow alebo podobný softvér na tvorbu wireframov

**Označte sekcie svojho návrhu** HTML prvkami, ktoré plánujete použiť (napr. "Hlavička - `<header>`", "Blogové príspevky - `<article>`").

### Časť 2: Plánovanie HTML prvkov

**Vytvorte zoznam, ktorý mapuje každú sekciu vášho návrhu na konkrétne HTML prvky:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Povinné prvky, ktoré musíte zahrnúť:**
Váš HTML musí obsahovať minimálne 10 rôznych semantických prvkov z tohto zoznamu:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Časť 3: Implementácia HTML

**Napíšte kód úvodnej stránky blogu podľa týchto štandardov:**

1. **Štruktúra dokumentu**: Zahrňte správny DOCTYPE, html, head a body prvky
2. **Semantické značkovanie**: Používajte HTML prvky na ich určený účel
3. **Prístupnosť**: Zahrňte správny alt text pre obrázky a zmysluplný text odkazov
4. **Kvalita kódu**: Používajte konzistentné odsadenie a zmysluplné komentáre
5. **Obsah**: Zahrňte realistický obsah blogu (môžete použiť zástupný text)

**Ukážková štruktúra HTML:**
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

### Časť 4: Reflexia

**Napíšte krátku reflexiu (3-5 viet), ktorá sa zaoberá:**
- Ktoré HTML prvky ste používali najistejšie?
- Aké výzvy ste stretli pri plánovaní alebo kódovaní?
- Ako vám semantický HTML pomohol organizovať obsah?
- Čo by ste urobili inak pri vašom ďalšom HTML projekte?

## Kontrolný zoznam na odovzdanie

**Pred odovzdaním sa uistite, že máte:**
- [ ] Vizuálny návrh s označenými HTML prvkami
- [ ] Kompletný HTML súbor so správnou štruktúrou dokumentu
- [ ] Použitých minimálne 10 rôznych semantických HTML prvkov správne
- [ ] Zmysluplné komentáre vysvetľujúce štruktúru vášho kódu
- [ ] Platnú syntax HTML (otestujte v prehliadači)
- [ ] Napísanú reflexiu, ktorá odpovedá na otázky v zadanej úlohe

## Hodnotiaca tabuľka

| Kritérium | Vynikajúce (4) | Dostačujúce (3) | Rozvíjajúce sa (2) | Začiatočnícke (1) |
|-----------|----------------|-----------------|--------------------|-------------------|
| **Plánovanie a návrh** | Detailný, dobre označený návrh ukazujúci jasné pochopenie rozloženia a semantickej štruktúry HTML | Jasný návrh s väčšinou sekcií správne označených | Základný návrh s niektorými označeniami, ukazuje všeobecné pochopenie | Minimálny alebo nejasný návrh, chýba správna identifikácia sekcií |
| **Použitie semantického HTML** | Používa 10+ semantických prvkov správne, demonštruje hlboké pochopenie štruktúry HTML a prístupnosti | Používa 8-9 semantických prvkov správne, ukazuje dobré pochopenie semantického značkovania | Používa 6-7 semantických prvkov, niektoré nejasnosti o správnom použití | Používa menej ako 6 prvkov alebo nesprávne používa semantické prvky |
| **Kvalita a organizácia kódu** | Výnimočne dobre organizovaný, správne odsadený kód s komplexnými komentármi a dokonalou syntaxou HTML | Dobre organizovaný kód s dobrým odsadením, užitočnými komentármi a platnou syntaxou | Väčšinou organizovaný kód s niektorými komentármi, drobné problémy so syntaxou | Slabá organizácia, minimálne komentáre, viaceré chyby v syntaxe |
| **Prístupnosť a najlepšie praktiky** | Vynikajúce zohľadnenie prístupnosti, zmysluplný alt text, správna hierarchia nadpisov, dodržiava všetky moderné najlepšie praktiky HTML | Dobré prvky prístupnosti, vhodné použitie nadpisov a alt textu, dodržiava väčšinu najlepších praktík | Niektoré zohľadnenia prístupnosti, základný alt text a štruktúra nadpisov | Obmedzené prvky prístupnosti, slabá štruktúra nadpisov, nedodržiava najlepšie praktiky |
| **Reflexia a učenie** | Premyslená reflexia demonštrujúca hlboké pochopenie HTML konceptov a dôkladnú analýzu procesu učenia | Dobrá reflexia ukazujúca pochopenie kľúčových konceptov a určitú sebareflexiu učenia | Základná reflexia s obmedzeným pohľadom na HTML koncepty alebo proces učenia | Minimálna alebo chýbajúca reflexia, ukazuje málo pochopenia naučených konceptov |

## Zdroje na učenie

**Základné referencie:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Kompletný sprievodca všetkými HTML prvkami
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Pochopenie semantického značkovania
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Tvorba prístupného webového obsahu
- [HTML Validator](https://validator.w3.org/) - Kontrola syntaxe HTML

**Tipy pre úspech:**
- Začnite s návrhom predtým, než začnete písať kód
- Používajte nástroje prehliadača na kontrolu štruktúry HTML
- Testujte svoju stránku na rôznych veľkostiach obrazovky (aj bez CSS)
- Čítajte svoj HTML nahlas, aby ste skontrolovali, či štruktúra dáva logický zmysel
- Zvážte, ako by čítačka obrazovky interpretovala štruktúru vašej stránky

> 💡 **Pamätajte**: Táto úloha sa zameriava na štruktúru a semantiku HTML. Nemusíte sa obávať vizuálneho štýlu – na to slúži CSS! Vaša stránka môže vyzerať jednoducho, ale mala by byť dobre štruktúrovaná a zmysluplná.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.