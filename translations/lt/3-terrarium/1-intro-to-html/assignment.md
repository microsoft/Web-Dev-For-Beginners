<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-07T12:07:33+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "lt"
}
-->
# HTML praktikos užduotis: sukurkite tinklaraščio maketą

## Mokymosi tikslai

Pritaikykite savo HTML žinias, sukurdami ir užkoduodami visos tinklaraščio pagrindinio puslapio struktūrą. Ši praktinė užduotis sustiprins semantinio HTML koncepcijas, prieinamumo geriausias praktikas ir profesionalaus kodo organizavimo įgūdžius, kuriuos naudosite viso savo žiniatinklio kūrimo kelionėje.

**Atlikdami šią užduotį, jūs:**
- Praktikuosite svetainės maketo planavimą prieš kodavimą
- Tinkamai taikysite semantinius HTML elementus
- Sukursite prieinamą, gerai struktūruotą žymėjimą
- Ugdysite profesionalias kodo rašymo įpročius su komentarais ir organizavimu

## Projekto reikalavimai

### 1 dalis: dizaino planavimas (vizualus maketas)

**Sukurkite savo tinklaraščio pagrindinio puslapio vizualų maketą, kuriame būtų:**
- Antraštė su svetainės pavadinimu ir navigacija
- Pagrindinė turinio sritis su bent 2–3 tinklaraščio įrašų peržiūromis
- Šoninėje juostoje papildoma informacija (apie skyrių, naujausi įrašai, kategorijos)
- Poraštė su kontaktine informacija arba nuorodomis

**Maketų kūrimo pasirinkimai:**
- **Ranka nupieštas eskizas**: naudokite popierių ir pieštuką, tada nufotografuokite arba nuskaitykite savo dizainą
- **Skaitmeniniai įrankiai**: Figma, Adobe XD, Canva, PowerPoint ar bet kuri piešimo programa
- **Skeleto įrankiai**: Balsamiq, MockFlow ar panaši skeleto programinė įranga

**Pažymėkite savo maketo skiltis** su HTML elementais, kuriuos planuojate naudoti (pvz., "Antraštė - `<header>`", "Tinklaraščio įrašai - `<article>`").

### 2 dalis: HTML elementų planavimas

**Sukurkite sąrašą, susiejantį kiekvieną jūsų maketo skyrių su konkrečiais HTML elementais:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Privalomi įtraukti elementai:**
Jūsų HTML turi turėti bent 10 skirtingų semantinių elementų iš šio sąrašo:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 3 dalis: HTML įgyvendinimas

**Užkoduokite savo tinklaraščio pagrindinį puslapį laikydamiesi šių standartų:**

1. **Dokumento struktūra**: įtraukti tinkamą DOCTYPE, html, head ir body elementus
2. **Semantinis žymėjimas**: naudoti HTML elementus pagal jų paskirtį
3. **Prieinamumas**: įtraukti tinkamus alt tekstus vaizdams ir prasmingas nuorodų anotacijas
4. **Kodo kokybė**: naudoti nuoseklų įtraukimą ir prasmingus komentarus
5. **Turinys**: įtraukti realistišką tinklaraščio turinį (galite naudoti laikinuosius tekstus)

**Pavyzdinė HTML struktūra:**
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


### 4 dalis: refleksija

**Parašykite trumpą refleksiją (3-5 sakinius), atsakydami į šiuos klausimus:**
- Kurie HTML elementai jums buvo patys lengviausiai naudoti?
- Kokius iššūkius patyrėte planuodami arba koduodami?
- Kaip semantinis HTML padėjo organizuoti jūsų turinį?
- Ką padarytumėte kitaip kitame HTML projekte?

## Pateikimo kontrolinis sąrašas

**Prieš pateikdami įsitikinkite, kad turite:**
- [ ] Vizualų maketą su pažymėtais HTML elementais
- [ ] Baigtą HTML failą su tinkama dokumento struktūra
- [ ] Bent 10 skirtingų semantinių HTML elementų, tinkamai panaudotų
- [ ] Prasmingus komentarus, paaiškinančius kodo struktūrą
- [ ] Galiojančią HTML sintaksę (patikrinkite naršyklėje)
- [ ] Rašytinę refleksiją, atsakančią į nurodytus klausimus

## Vertinimo kriterijai

| Kriterijus | Puikiai (4) | Gerai (3) | Besivystantis (2) | Pradedantis (1) |
|------------|-------------|-----------|-------------------|-----------------|
| **Planavimas ir dizainas** | Išsamus, aiškiai pažymėtas maketas, rodantis supratimą apie maketą ir HTML semantinę struktūrą | Aiškus maketas, dauguma skyrių tinkamai pažymėti | Pagrindinis maketas su kai kuriomis žymėmis, rodo bendrą supratimą | Minimalus arba neaiškus maketas, trūksta tinkamo skirsnių identifikavimo |
| **Semantinis HTML naudojimas** | Naudoja 10+ semantinių elementų tinkamai, demonstruoja gilų HTML struktūros ir prieinamumo supratimą | Naudoja 8-9 semantinius elementus teisingai, rodo gerą supratimą apie žymėjimą | Naudoja 6-7 semantinius elementus, kai kur painiavos dėl tinkamo naudojimo | Naudoja mažiau nei 6 elementus arba netinkamai naudoja semantinius elementus |
| **Kodo kokybė ir organizavimas** | Išskirtinai gerai organizuotas, tinkamai įtrauktas kodas su išsamiais komentarais ir puikia HTML sintakse | Gerai organizuotas kodas su gera įtrauka, naudingais komentarais ir galiojančia sintakse | Daugiausia organizuotas kodas su kai kuriais komentarais, smulkios sintaksės klaidos | Bloga organizacija, minimalūs komentarai, daug sintaksės klaidų |
| **Prieinamumas ir gerosios praktikos** | Puikiai integruotos prieinamumo priemonės, prasmingi alt tekstai, tinkama antraščių hierarchija, laikomasi visų modernių HTML gerųjų praktikų | Geros prieinamumo savybės, tinkamas antraščių ir alt tekstų naudojimas, laikomasi daugumos gerųjų praktikų | Kai kurios prieinamumo priemonės, pagrindinis alt tekstas ir antraščių struktūra | Ribotos prieinamumo savybės, prasta antraščių struktūra, nesilaikoma gerųjų praktikų |
| **Refleksija ir mokymasis** | Įžvalgi refleksija, demonstruojanti gilų HTML koncepcijų supratimą ir apgalvotą mokymosi proceso analizę | Gera refleksija, rodanti supratimą apie pagrindines sąvokas ir dalinį savimonę apie mokymąsi | Pagrindinė refleksija su ribota įžvalga apie HTML koncepcijas arba mokymosi procesą | Minimalioji arba trūkstanti refleksija, mažai supratimo apie įgytas sąvokas |

## Mokymosi ištekliai

**Būtinos nuorodos:**
- [MDN HTML elementų žinynas](https://developer.mozilla.org/docs/Web/HTML/Element) – išsamus visų HTML elementų vadovas
- [HTML5 semantiniai elementai](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) – semantinio žymėjimo supratimas
- [Interneto prieinamumo gairės](https://www.w3.org/WAI/WCAG21/quickref/) – kaip kurti prieinamą tinklalapį
- [HTML įrankis sintaksės tikrinimui](https://validator.w3.org/) – tikrinkite savo HTML sintaksę

**Sėkmės patarimai:**
- Pradėkite nuo maketo prieš rašydami kodą
- Naudokitės naršyklės kūrėjų įrankiais, kad patikrintumėte HTML struktūrą
- Bandykite savo puslapį skirtinguose ekrano dydžiuose (net be CSS)
- Skaitykite savo HTML garsiai, kad įsitikintumėte, jog struktūra logiška
- Pagalvokite, kaip ekranų skaitytuvas interpretuotų jūsų puslapio struktūrą

> 💡 **Atminkite**: ši užduotis orientuota į HTML struktūrą ir semantiką. Nesirūpinkite vizualiu stiliumi – tam yra CSS! Jūsų puslapis gali atrodyti paprastas, bet jis turėtų būti gerai struktūruotas ir prasmingas.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų arba netikslumų. Pradinė dokumento versija gimtąja kalba turėtų būti laikoma autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar neteisingus aiškinimus, kilusius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->