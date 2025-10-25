<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T19:30:29+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "sw"
}
-->
# HTML Mazoezi ya Kazi: Tengeneza Mfano wa Blogu

## Malengo ya Kujifunza

Tumia maarifa yako ya HTML kwa kubuni na kuandika muundo kamili wa ukurasa wa mwanzo wa blogu. Kazi hii ya vitendo itaimarisha dhana za HTML ya kimantiki, mbinu bora za upatikanaji, na ujuzi wa kupanga msimbo kitaalamu ambao utatumia katika safari yako ya maendeleo ya wavuti.

**Kwa kukamilisha kazi hii, utaweza:**
- Kufanya mazoezi ya kupanga muundo wa tovuti kabla ya kuandika msimbo
- Kutumia vipengele vya HTML ya kimantiki kwa usahihi
- Kuunda alama inayopatikana na iliyopangwa vizuri
- Kuendeleza tabia za kitaalamu za kuandika msimbo kwa maelezo na mpangilio

## Mahitaji ya Mradi

### Sehemu ya 1: Mipango ya Ubunifu (Mfano wa Muonekano)

**Tengeneza mfano wa muonekano wa ukurasa wa mwanzo wa blogu yako unaojumuisha:**
- Kichwa chenye jina la tovuti na urambazaji
- Eneo kuu la maudhui lenye angalau muhtasari wa machapisho 2-3 ya blogu
- Upande wa pembeni wenye maelezo ya ziada (sehemu ya kuhusu, machapisho ya hivi karibuni, kategoria)
- Kijachini chenye maelezo ya mawasiliano au viungo

**Chaguo za Kutengeneza Mfano:**
- **Mchoro wa mkono**: Tumia karatasi na penseli, kisha piga picha au skani muundo wako
- **Zana za kidijitali**: Figma, Adobe XD, Canva, PowerPoint, au programu yoyote ya kuchora
- **Zana za muundo wa waya**: Balsamiq, MockFlow, au programu nyingine za muundo wa waya

**Weka lebo kwenye sehemu za mfano wako** na vipengele vya HTML unavyopanga kutumia (mfano, "Kichwa - `<header>`", "Machapisho ya Blogu - `<article>`").

### Sehemu ya 2: Mipango ya Vipengele vya HTML

**Tengeneza orodha inayolinganishwa kila sehemu ya mfano wako na vipengele maalum vya HTML:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Vipengele Vinavyohitajika Kujumuishwa:**
HTML yako lazima iwe na angalau vipengele 10 tofauti vya kimantiki kutoka kwenye orodha hii:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Sehemu ya 3: Utekelezaji wa HTML

**Andika msimbo wa ukurasa wa mwanzo wa blogu yako ukifuata viwango hivi:**

1. **Muundo wa Hati**: Jumuisha DOCTYPE sahihi, html, head, na vipengele vya body
2. **Alama ya Kimantiki**: Tumia vipengele vya HTML kwa madhumuni yake yaliyokusudiwa
3. **Upatikanaji**: Jumuisha maandishi sahihi ya alt kwa picha na maandishi ya kiungo yenye maana
4. **Ubora wa Msimbo**: Tumia upatanisho thabiti na maelezo yenye maana
5. **Maudhui**: Jumuisha maudhui halisi ya blogu (unaweza kutumia maandishi ya mfano)

**Mfano wa Muundo wa HTML:**
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

### Sehemu ya 4: Tafakari

**Andika tafakari fupi (sentensi 3-5) inayojibu:**
- Ni vipengele vya HTML gani ulikuwa na uhakika zaidi wa kutumia?
- Ni changamoto gani ulizokutana nazo wakati wa kupanga au kuandika msimbo?
- HTML ya kimantiki ilisaidiaje kupanga maudhui yako?
- Ungefanya nini tofauti katika mradi wako wa HTML unaofuata?

## Orodha ya Uwasilishaji

**Kabla ya kuwasilisha, hakikisha una:**
- [ ] Mfano wa muonekano wenye vipengele vya HTML vilivyowekwa lebo
- [ ] Faili kamili ya HTML yenye muundo sahihi wa hati
- [ ] Angalau vipengele 10 tofauti vya HTML ya kimantiki vilivyotumika kwa usahihi
- [ ] Maelezo yenye maana yanayoelezea muundo wa msimbo wako
- [ ] Sintaksia sahihi ya HTML (jaribu kwenye kivinjari)
- [ ] Tafakari iliyoandikwa inayojibu maswali ya mwongozo

## Rubric ya Tathmini

| Kigezo | Bora Zaidi (4) | Wastani (3) | Inayoendelea (2) | Mwanzo (1) |
|--------|----------------|-------------|------------------|------------|
| **Mipango & Ubunifu** | Mfano wa muonekano ulioelezwa vizuri, unaonyesha uelewa wa wazi wa muundo na HTML ya kimantiki | Mfano wa muonekano ulio wazi na sehemu nyingi zikiwa na lebo sahihi | Mfano wa muonekano wa msingi na lebo chache, unaonyesha uelewa wa jumla | Mfano wa muonekano usioeleweka, hauonyeshi utambulisho sahihi wa sehemu |
| **Matumizi ya HTML ya Kimantiki** | Inatumia vipengele 10+ vya kimantiki kwa usahihi, inaonyesha uelewa wa kina wa muundo wa HTML na upatikanaji | Inatumia vipengele 8-9 vya kimantiki kwa usahihi, inaonyesha uelewa mzuri wa alama ya kimantiki | Inatumia vipengele 6-7 vya kimantiki, kuna mkanganyiko kuhusu matumizi sahihi | Inatumia vipengele chini ya 6 au inatumia vibaya vipengele vya kimantiki |
| **Ubora wa Msimbo & Mpangilio** | Msimbo uliopangwa vizuri sana, ulio na upatanisho sahihi, maelezo ya kina, na sintaksia kamilifu ya HTML | Msimbo uliopangwa vizuri na upatanisho mzuri, maelezo ya msaada, na sintaksia sahihi | Msimbo uliopangwa kwa kiasi, maelezo machache, masuala madogo ya sintaksia | Mpangilio mbaya, maelezo kidogo, makosa mengi ya sintaksia |
| **Upatikanaji & Mbinu Bora** | Vipengele bora vya upatikanaji, maandishi ya alt yenye maana, muundo sahihi wa vichwa, inafuata mbinu zote bora za HTML za kisasa | Vipengele vizuri vya upatikanaji, matumizi sahihi ya vichwa na maandishi ya alt, inafuata mbinu nyingi bora | Vipengele vya msingi vya upatikanaji, maandishi ya alt ya msingi na muundo wa vichwa | Vipengele vichache vya upatikanaji, muundo mbaya wa vichwa, haifuati mbinu bora |
| **Tafakari & Kujifunza** | Tafakari yenye maarifa inayoonyesha uelewa wa kina wa dhana za HTML na uchambuzi wa kujifunza kwa makini | Tafakari nzuri inayoonyesha uelewa wa dhana muhimu na ufahamu wa kujifunza | Tafakari ya msingi yenye maarifa kidogo kuhusu dhana za HTML au mchakato wa kujifunza | Tafakari kidogo au haipo, inaonyesha uelewa mdogo wa dhana zilizojifunza |

## Rasilimali za Kujifunza

**Marejeleo Muhimu:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Mwongozo kamili wa vipengele vyote vya HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Uelewa wa alama ya kimantiki
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Kuunda maudhui ya wavuti yanayopatikana
- [HTML Validator](https://validator.w3.org/) - Angalia sintaksia ya HTML yako

**Vidokezo vya Mafanikio:**
- Anza na mfano wako kabla ya kuandika msimbo wowote
- Tumia zana za msanidi wa kivinjari kuangalia muundo wa HTML yako
- Jaribu ukurasa wako kwa ukubwa tofauti wa skrini (hata bila CSS)
- Soma HTML yako kwa sauti ili kuangalia kama muundo una mantiki
- Fikiria jinsi msomaji wa skrini atakavyotafsiri muundo wa ukurasa wako

> 💡 **Kumbuka**: Kazi hii inalenga muundo wa HTML na mantiki. Usijali kuhusu muonekano wa kuona – hiyo ni kazi ya CSS! Ukurasa wako unaweza kuonekana rahisi, lakini unapaswa kuwa na muundo mzuri na wa maana.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.