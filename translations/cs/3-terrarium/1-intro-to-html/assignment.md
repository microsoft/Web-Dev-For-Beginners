<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T21:01:00+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "cs"
}
-->
# HTML Praktické zadání: Vytvořte návrh blogu

## Cíle učení

Procvičte si své znalosti HTML navržením a kódováním kompletní struktury úvodní stránky blogu. Toto praktické zadání posílí vaše znalosti o sémantickém HTML, osvědčených postupech v oblasti přístupnosti a dovednostech profesionální organizace kódu, které budete využívat během své cesty webového vývoje.

**Po dokončení tohoto zadání budete:**
- Procvičovat plánování rozvržení webových stránek před kódováním
- Správně používat sémantické HTML prvky
- Vytvářet přístupný a dobře strukturovaný kód
- Rozvíjet profesionální návyky při psaní kódu, včetně komentářů a organizace

## Požadavky na projekt

### Část 1: Plánování návrhu (vizuální návrh)

**Vytvořte vizuální návrh úvodní stránky blogu, který zahrnuje:**
- Hlavičku s názvem stránky a navigací
- Hlavní obsahovou oblast s alespoň 2-3 náhledy blogových příspěvků
- Postranní panel s doplňujícími informacemi (sekce o autorovi, poslední příspěvky, kategorie)
- Patičku s kontaktními informacemi nebo odkazy

**Možnosti vytvoření návrhu:**
- **Ruční kresba**: Použijte papír a tužku, poté svůj návrh vyfotografujte nebo naskenujte
- **Digitální nástroje**: Figma, Adobe XD, Canva, PowerPoint nebo jakákoliv aplikace pro kreslení
- **Nástroje pro wireframe**: Balsamiq, MockFlow nebo podobný software pro wireframe

**Označte sekce svého návrhu** HTML prvky, které plánujete použít (např. "Hlavička - `<header>`", "Blogové příspěvky - `<article>`").

### Část 2: Plánování HTML prvků

**Vytvořte seznam, který mapuje každou sekci vašeho návrhu na konkrétní HTML prvky:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Povinné prvky k zahrnutí:**
Váš HTML musí obsahovat alespoň 10 různých sémantických prvků z tohoto seznamu:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Část 3: Implementace HTML

**Nakódujte úvodní stránku blogu podle těchto standardů:**

1. **Struktura dokumentu**: Zahrňte správný DOCTYPE, html, head a body prvky
2. **Sémantické značky**: Používejte HTML prvky pro jejich zamýšlený účel
3. **Přístupnost**: Zahrňte správný alt text pro obrázky a smysluplný text odkazů
4. **Kvalita kódu**: Používejte konzistentní odsazení a smysluplné komentáře
5. **Obsah**: Zahrňte realistický obsah blogu (můžete použít zástupný text)

**Ukázková struktura HTML:**
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

### Část 4: Reflexe

**Napište krátkou reflexi (3-5 vět), která se zaměřuje na:**
- Které HTML prvky jste používali s největší jistotou?
- Jaké výzvy jste potkali při plánování nebo kódování?
- Jak vám sémantické HTML pomohlo organizovat obsah?
- Co byste udělali jinak při dalším HTML projektu?

## Kontrolní seznam pro odevzdání

**Před odevzdáním se ujistěte, že máte:**
- [ ] Vizuální návrh s označenými HTML prvky
- [ ] Kompletní HTML soubor se správnou strukturou dokumentu
- [ ] Použitých alespoň 10 různých sémantických HTML prvků správně
- [ ] Smysluplné komentáře vysvětlující strukturu kódu
- [ ] Platnou HTML syntaxi (otestujte v prohlížeči)
- [ ] Napsanou reflexi odpovídající na otázky v zadání

## Hodnotící kritéria

| Kritéria | Vynikající (4) | Dobré (3) | Rozvíjející se (2) | Začínající (1) |
|----------|---------------|-----------|--------------------|---------------|
| **Plánování a návrh** | Detailní, dobře označený návrh ukazující jasné pochopení rozvržení a sémantické struktury HTML | Jasný návrh s většinou sekcí správně označených | Základní návrh s některým označením, ukazuje obecné pochopení | Minimální nebo nejasný návrh, chybí správné označení sekcí |
| **Použití sémantického HTML** | Používá 10+ sémantických prvků správně, ukazuje hluboké pochopení struktury HTML a přístupnosti | Používá 8-9 sémantických prvků správně, ukazuje dobré pochopení sémantického označení | Používá 6-7 sémantických prvků, některé nejasnosti ohledně správného použití | Používá méně než 6 prvků nebo nesprávně používá sémantické prvky |
| **Kvalita a organizace kódu** | Výjimečně dobře organizovaný, správně odsazený kód s komplexními komentáři a perfektní HTML syntaxí | Dobře organizovaný kód s dobrým odsazením, užitečné komentáře a platná syntaxe | Většinou organizovaný kód s některými komentáři, drobné problémy se syntaxí | Špatná organizace, minimální komentáře, více chyb v syntaxi |
| **Přístupnost a osvědčené postupy** | Vynikající přístupnost, smysluplný alt text, správná hierarchie nadpisů, dodržuje všechny moderní osvědčené postupy HTML | Dobré přístupové prvky, vhodné použití nadpisů a alt textu, dodržuje většinu osvědčených postupů | Některé přístupové prvky, základní alt text a struktura nadpisů | Omezené přístupové prvky, špatná struktura nadpisů, nedodržuje osvědčené postupy |
| **Reflexe a učení** | Přemýšlivá reflexe ukazující hluboké pochopení HTML konceptů a promyšlenou analýzu procesu učení | Dobrá reflexe ukazující pochopení klíčových konceptů a určitou sebereflexi učení | Základní reflexe s omezeným vhledem do HTML konceptů nebo procesu učení | Minimální nebo chybějící reflexe, ukazuje malou znalost naučených konceptů |

## Zdroje pro učení

**Základní odkazy:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Kompletní průvodce všemi HTML prvky
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Pochopení sémantického označení
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Vytváření přístupného webového obsahu
- [HTML Validator](https://validator.w3.org/) - Kontrola syntaxe HTML

**Tipy pro úspěch:**
- Začněte s návrhem před psaním kódu
- Používejte nástroje pro vývojáře v prohlížeči k inspekci struktury HTML
- Testujte svou stránku na různých velikostech obrazovky (i bez CSS)
- Čtěte svůj HTML nahlas, abyste zkontrolovali, zda má logickou strukturu
- Zvažte, jak by čtečka obrazovky interpretovala strukturu vaší stránky

> 💡 **Pamatujte**: Toto zadání se zaměřuje na strukturu a sémantiku HTML. Nedělejte si starosti s vizuálním stylováním – to je úkol pro CSS! Vaše stránka může vypadat jednoduše, ale měla by být dobře strukturovaná a smysluplná.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.