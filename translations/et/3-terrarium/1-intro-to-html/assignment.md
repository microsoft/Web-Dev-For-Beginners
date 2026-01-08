<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-08T09:48:42+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "et"
}
-->
# HTML harjutusülesanne: ehita blogi visand

## Õpieesmärgid

Rakenda oma HTML-oskusi, kujundades ja kodeerides tervikliku blogi avalehe struktuuri. See praktiline ülesanne tugevdab semantilise HTML mõisteid, ligipääsetavuse parimaid tavasid ja professionaalse koodi organiseerimise oskusi, mida kasutad kogu veebiarenduse teekonna jooksul.

**Selle ülesande täites sa:**
- Harjutad veebilehe paigutuse planeerimist enne kodeerimist
- Rakendad semantilisi HTML elemente asjakohaselt
- Loovad ligipääsetava ja korrapärase markupe
- Arendad professionaalseid kodeerimisharjumusi koos kommentaaride ja organiseerimisega

## Projekti nõuded

### Osa 1: Kujunduse planeerimine (visuaalne visand)

**Loo oma blogi avalehe visuaalne visand, mis sisaldab:**
- Päis saidi pealkirja ja navigeerimisega
- Peamine sisuala vähemalt 2-3 blogipostituse eelvaatega
- Külgriba täiendava informatsiooniga (teave, uuemad postitused, kategooriad)
- Jalus kontaktinfo või linkidega

**Visandi loomise võimalused:**
- **Käsitsi joonistatud visand**: Kasuta paberit ja pliiatsit, seejärel pildista või skaneeri oma kujundus
- **Digitaalsed tööriistad**: Figma, Adobe XD, Canva, PowerPoint või mõni joonistusprogramm
- **Juhtraamatööriistad**: Balsamiq, MockFlow või muu sarnane juhtraamatu tarkvara

**Märgista oma visandi sektsioonid** HTML elementidega, mida plaanid kasutada (nt "Päis - `<header>`", "Blogipostitused - `<article>`").

### Osa 2: HTML elementide planeerimine

**Koosta nimekiri, mis seob iga visandi sektsiooni konkreetsete HTML elementidega:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Nõutavad elemendid lisamiseks:**
Sinu HTML peab sisaldama vähemalt 10 erinevat semantilist elementi sellest loendist:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Osa 3: HTML teostus

**Kodeeri oma blogi avaleht järgides neid standardeid:**

1. **Dokumendi struktuur**: Sisalda korrektne DOCTYPE, html, head ja body elemendid
2. **Semantiline märgistus**: Kasuta HTML elemente nende mõeldud otstarbel
3. **Ligipääsetavus**: Lisa piltidele korrektsed alt-tekstid ja tähenduslikud lingitekstid
4. **Koodi kvaliteet**: Kasuta ühtlast taanet ja tähenduslikke kommentaare
5. **Sisu**: Sisalda realistlik blogisisu (saad kasutada ka asendusteksti)

**Näidis HTML struktuur:**
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

### Osa 4: Refleksioon

**Kirjuta lühike refleksioon (3–5 lauset), mille käigus vastad:**
- Millised HTML elemendid pakkusid sulle enim kindlustunnet kasutamisel?
- Milliseid väljakutseid kogesid planeerimisel või kodeerimisel?
- Kuidas aitas semantiline HTML sinu sisu organiseerida?
- Mida teeksid järgmises HTML projektis teisiti?

## Esitamise kontrollnimekiri

**Enne esitust veendu, et sul on:**
- [ ] Visuaalne visand HTML elementide märgistustega
- [ ] Täielik HTML fail nõuetekohase dokumendisstruktuuriga
- [ ] Vähemalt 10 erinevat semantilist HTML elementi korrektselt kasutatud
- [ ] Tähenduslikud kommentaarid, mis selgitavad sinu koodi struktuuri
- [ ] Kehtiv HTML süntaks (testi brauseris)
- [ ] Kirjutatud refleksioon, mis vastab ülesande küsimustele

## Hindamiskriteeriumid

| Kriteerium | Silmapaistev (4) | Pädev (3) | Arenev (2) | Algaja (1) |
|------------|------------------|-----------|------------|------------|
| **Planeerimine & disain** | Põhjalik, selgelt märgistatud visand, mis näitab head arusaamist paigutusest ja HTML semantilisest struktuurist | Selge visand, kus enamik sektsioone on nõuetekohaselt märgistatud | Lihtne visand mõningase märgistusega, näitab üldist arusaama | Väike või ebaselge visand, puudub sektsioonide õige identifitseerimine |
| **Semantilise HTML kasutamine** | Kasutab korrektselt 10+ semantilist elementi, demonstreerib sügavat HTML struktuuri ja ligipääsetavuse mõistmist | Kasutab korrektselt 8-9 semantilist elementi, näitab head semantilise märgistuse mõistmist | Kasutab 6-7 semantilist elementi, mõningane segadus sobivas kasutamises | Kasutab vähem kui 6 elemente või eksib semantiliste elementide kasutamisel |
| **Koodi kvaliteet ja organiseeritus** | Väga hästi organiseeritud, korrektselt taanetud kood koos põhjalike kommentaaridega ja täiusliku HTML süntaksiga | Hästi organiseeritud kood hea taanetuse ja kasulike kommentaaridega ning kehtiva süntaksiga | Peamiselt organiseeritud kood mõnede kommentaaridega ja väikeste süntaksiprobleemidega | Kehv organiseeritus, minimaalsed kommentaarid, mitmed süntaksivead |
| **Ligipääsetavus ja parimad tavad** | Suurepärane ligipääsetavus, tähenduslik alt-tekst, korrektne pealkirjade hierarhia, järgitakse kõiki kaasaegseid HTML parimaid tavasid | Hea ligipääsetavus, sobivad pealkirjad ja alt-tekstid, järgitakse enamust parimatest tavadest | Mõningane ligipääsetavuse arvestus, põhilised alt-tekstid ja pealkirjastruktuur | Piiratud ligipääsetavuse arvestus, kehv pealkirjastruktuur, ei järgi parimaid tavasid |
| **Refleksioon ja õppimine** | Sisukas refleksioon, mis demonstreerib sügavat HTML kontseptsioonide mõistmist ja põhjalikku analüüsi õppimise protsessist | Hea refleksioon, mis näitab põhiliste mõistete arusaamist ja eneseanalüüsi õppimisest | Lihtne refleksioon piiratud arusaamaga HTML kontseptsioonidest või õppimisest | Väike või puuduv refleksioon, vähene arusaam õpitust |

## Õppematerjalid

**Olulised allikad:**
- [MDN HTML Elementide viide](https://developer.mozilla.org/docs/Web/HTML/Element) – täielik juhend kõigi HTML elementide kohta
- [HTML5 semantilised elemendid](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) – semantilise märgistuse mõistmine
- [Veebi ligipääsetavuse juhised](https://www.w3.org/WAI/WCAG21/quickref/) – ligipääsetava veebisisu loomine
- [HTML valideerija](https://validator.w3.org/) – kontrolli oma HTML süntaksit

**Edu näpunäited:**
- Alusta visandist enne koodi kirjutamist
- Kasuta brauseri arendajatööriistu HTML struktuuri vaatamiseks
- Testi lehte erinevate ekraanisuurustega (ka ilma CSS-ita)
- Loe oma HTML-i valjult läbi, et kontrollida loogilist struktuuri
- Mõtle, kuidas ekraaniluger sinu lehe struktuuri tõlgendaks

> 💡 **Meelespea**: see ülesanne keskendub HTML struktuurile ja semantikale. Ära muretse visuaalse stiili pärast – selleks on CSS! Sinu leht võib tunduda lihtne, kuid see peab olema hästi organiseeritud ja tähenduslik.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellektil põhinevat tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi pingutame täpsuse tagamiseks, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Kriitilise tähtsusega teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste ega väärarusaamade eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->