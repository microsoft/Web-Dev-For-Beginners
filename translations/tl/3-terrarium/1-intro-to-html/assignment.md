# HTML Practice Assignment: Gumawa ng Mockup ng Blog

## Mga Layunin sa Pag-aaral

I-apply ang iyong kaalaman sa HTML sa pamamagitan ng pagdidisenyo at pag-code ng kumpletong istruktura ng homepage ng blog. Ang hands-on na assignment na ito ay magpapalakas sa mga konsepto ng semantic HTML, pinakamahusay na mga kasanayan sa accessibility, at mga propesyonal na kasanayan sa pag-aayos ng code na magagamit mo sa buong paglalakbay mo sa web development.

**Sa pagtatapos ng assignment na ito, ikaw ay:**
- Magpapraktis sa pagpaplano ng layout ng website bago mag-code
- Mag-aapply ng mga semantic HTML elements nang tama
- Lilikha ng accessible at maayos na markup
- Magde-develop ng propesyonal na coding habits gamit ang mga komento at organisasyon

## Mga Kinakailangan sa Proyekto

### Bahagi 1: Pagpaplano ng Disenyo (Visual Mockup)

**Gumawa ng visual mockup ng iyong homepage ng blog na naglalaman ng:**
- Header na may pamagat ng site at navigation
- Pangunahing content area na may hindi bababa sa 2-3 preview ng blog post
- Sidebar na may karagdagang impormasyon (about section, recent posts, categories)
- Footer na may impormasyon sa contact o mga link

**Mga Opsyon sa Paglikha ng Mockup:**
- **Hand-drawn sketch**: Gumamit ng papel at lapis, pagkatapos kunan ng larawan o i-scan ang iyong disenyo
- **Digital tools**: Figma, Adobe XD, Canva, PowerPoint, o anumang drawing application
- **Wireframe tools**: Balsamiq, MockFlow, o katulad na wireframing software

**Lagyan ng label ang mga seksyon ng iyong mockup** gamit ang mga HTML elements na balak mong gamitin (hal., "Header - `<header>`", "Blog Posts - `<article>`").

### Bahagi 2: Pagpaplano ng HTML Element

**Gumawa ng listahan na nagmamapa sa bawat seksyon ng iyong mockup sa mga partikular na HTML elements:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Mga Kinakailangang Elemento na Isama:**
Ang iyong HTML ay dapat maglaman ng hindi bababa sa 10 iba't ibang semantic elements mula sa listahang ito:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Bahagi 3: Implementasyon ng HTML

**I-code ang iyong homepage ng blog ayon sa mga pamantayan na ito:**

1. **Istruktura ng Dokumento**: Isama ang tamang DOCTYPE, html, head, at body elements
2. **Semantic Markup**: Gumamit ng mga HTML elements para sa kanilang tamang layunin
3. **Accessibility**: Isama ang tamang alt text para sa mga imahe at makabuluhang link text
4. **Kalidad ng Code**: Gumamit ng pare-parehong indentation at makabuluhang mga komento
5. **Nilalaman**: Isama ang makatotohanang nilalaman ng blog (maaari kang gumamit ng placeholder text)

**Halimbawang Istruktura ng HTML:**
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

### Bahagi 4: Pagninilay

**Sumulat ng maikling pagninilay (3-5 pangungusap) na tumutugon sa:**
- Aling mga HTML elements ang pinaka-kumpiyansa kang gamitin?
- Anong mga hamon ang iyong naranasan habang nagpaplano o nag-code?
- Paano nakatulong ang semantic HTML sa pag-aayos ng iyong nilalaman?
- Ano ang gagawin mo nang iba sa iyong susunod na proyekto sa HTML?

## Checklist ng Pagsusumite

**Bago magsumite, tiyakin na mayroon ka:**
- [ ] Visual mockup na may labeled HTML elements
- [ ] Kumpletong HTML file na may tamang istruktura ng dokumento
- [ ] Hindi bababa sa 10 iba't ibang semantic HTML elements na ginamit nang tama
- [ ] Makabuluhang mga komento na nagpapaliwanag sa istruktura ng iyong code
- [ ] Valid na syntax ng HTML (subukan sa browser)
- [ ] Nakasulat na pagninilay na tumutugon sa mga tanong sa prompt

## Rubric ng Pagtatasa

| Pamantayan | Napakahusay (4) | Mahusay (3) | Paunlad (2) | Nagsisimula (1) |
|------------|-----------------|-------------|-------------|-----------------|
| **Pagpaplano at Disenyo** | Detalyado, maayos na labeled mockup na nagpapakita ng malinaw na pag-unawa sa layout at istruktura ng semantic HTML | Malinaw na mockup na may karamihan sa mga seksyon na labeled nang tama | Pangunahing mockup na may ilang labeling, nagpapakita ng pangkalahatang pag-unawa | Minimal o hindi malinaw na mockup, kulang sa tamang pagkakakilanlan ng seksyon |
| **Paggamit ng Semantic HTML** | Gumagamit ng 10+ semantic elements nang tama, nagpapakita ng malalim na pag-unawa sa istruktura ng HTML at accessibility | Gumagamit ng 8-9 semantic elements nang tama, nagpapakita ng mahusay na pag-unawa sa semantic markup | Gumagamit ng 6-7 semantic elements, may kaunting kalituhan sa tamang paggamit | Gumagamit ng mas kaunti sa 6 na elemento o maling paggamit ng semantic elements |
| **Kalidad ng Code at Organisasyon** | Napakahusay na naayos, tamang indentation ng code na may komprehensibong mga komento at perpektong syntax ng HTML | Maayos na naayos na code na may magandang indentation, kapaki-pakinabang na mga komento, at valid na syntax | Karamihan ay maayos na code na may ilang mga komento, menor de edad na isyu sa syntax | Mahinang organisasyon, minimal na mga komento, maraming isyu sa syntax |
| **Accessibility at Pinakamahusay na Mga Kasanayan** | Napakahusay na mga konsiderasyon sa accessibility, makabuluhang alt text, tamang hierarchy ng heading, sumusunod sa lahat ng modernong pinakamahusay na kasanayan sa HTML | Magandang mga tampok sa accessibility, tamang paggamit ng headings at alt text, sumusunod sa karamihan ng pinakamahusay na kasanayan | Ilang konsiderasyon sa accessibility, pangunahing alt text at istruktura ng heading | Limitadong mga tampok sa accessibility, mahinang istruktura ng heading, hindi sumusunod sa pinakamahusay na kasanayan |
| **Pagninilay at Pag-aaral** | Malalim na pagninilay na nagpapakita ng malalim na pag-unawa sa mga konsepto ng HTML at maingat na pagsusuri sa proseso ng pag-aaral | Magandang pagninilay na nagpapakita ng pag-unawa sa mga pangunahing konsepto at kaunting kamalayan sa pag-aaral | Pangunahing pagninilay na may limitadong pananaw sa mga konsepto ng HTML o proseso ng pag-aaral | Minimal o nawawalang pagninilay, nagpapakita ng kaunting pag-unawa sa mga natutunang konsepto |

## Mga Mapagkukunan sa Pag-aaral

**Mahalagang Sanggunian:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Kumpletong gabay sa lahat ng HTML elements
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Pag-unawa sa semantic markup
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Paglikha ng accessible na web content
- [HTML Validator](https://validator.w3.org/) - Suriin ang syntax ng iyong HTML

**Mga Pro Tips para sa Tagumpay:**
- Magsimula sa iyong mockup bago magsulat ng anumang code
- Gamitin ang developer tools ng browser upang suriin ang istruktura ng iyong HTML
- Subukan ang iyong pahina sa iba't ibang laki ng screen (kahit walang CSS)
- Basahin nang malakas ang iyong HTML upang suriin kung ang istruktura ay may lohikal na kahulugan
- Isaalang-alang kung paano i-interpret ng screen reader ang istruktura ng iyong pahina

> 💡 **Tandaan**: Ang assignment na ito ay nakatuon sa istruktura at semantics ng HTML. Huwag mag-alala tungkol sa visual styling – para diyan ang CSS! Maaaring mukhang plain ang iyong pahina, ngunit dapat itong maayos ang istruktura at makabuluhan.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi eksaktong pagsasalin. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.