<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-23T00:31:02+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "fi"
}
-->
# HTML-harjoitustehtävä: Blogimallin rakentaminen

## Oppimistavoitteet

Käytä HTML-osaamistasi suunnittelemalla ja koodaamalla blogin etusivun rakenne. Tämä käytännön tehtävä vahvistaa semanttisen HTML:n käsitteitä, saavutettavuuden parhaita käytäntöjä ja ammattimaisia koodauskäytäntöjä, joita tarvitset verkkokehityksen urallasi.

**Tehtävän suorittamalla:**
- Harjoittelet verkkosivuston ulkoasun suunnittelua ennen koodaamista
- Käytät semanttisia HTML-elementtejä tarkoituksenmukaisesti
- Luot saavutettavaa ja hyvin jäsenneltyä merkkausta
- Kehität ammattimaisia koodauskäytäntöjä kommenttien ja organisoinnin avulla

## Projektivaatimukset

### Osa 1: Suunnittelun suunnittelu (visuaalinen mallinnus)

**Luo visuaalinen mallinnus blogisi etusivusta, joka sisältää:**
- Otsikko, jossa sivuston nimi ja navigaatio
- Pääsisältöalue, jossa vähintään 2-3 blogipostauksen esikatselua
- Sivupalkki, jossa lisätietoja (esittelyosio, viimeisimmät postaukset, kategoriat)
- Alatunniste, jossa yhteystiedot tai linkit

**Mallinnusvaihtoehdot:**
- **Käsin piirretty luonnos**: Käytä paperia ja kynää, ja valokuvaa tai skannaa suunnitelmasi
- **Digitaaliset työkalut**: Figma, Adobe XD, Canva, PowerPoint tai mikä tahansa piirto-ohjelma
- **Wireframe-työkalut**: Balsamiq, MockFlow tai vastaavat wireframe-ohjelmistot

**Merkitse mallinnuksen osiot** HTML-elementeillä, joita aiot käyttää (esim. "Otsikko - `<header>`", "Blogipostaukset - `<article>`").

### Osa 2: HTML-elementtien suunnittelu

**Laadi lista, joka yhdistää mallinnuksen jokaisen osion tiettyihin HTML-elementteihin:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Pakolliset elementit:**
HTML-tiedostossasi tulee olla vähintään 10 erilaista semanttista elementtiä seuraavasta listasta:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Osa 3: HTML-toteutus

**Koodaa blogisi etusivu seuraavien standardien mukaisesti:**

1. **Dokumentin rakenne**: Sisällytä oikea DOCTYPE, html-, head- ja body-elementit
2. **Semanttinen merkkaus**: Käytä HTML-elementtejä niiden tarkoituksen mukaisesti
3. **Saavutettavuus**: Sisällytä kuville asianmukaiset alt-tekstit ja merkitykselliset linkkitekstit
4. **Koodin laatu**: Käytä johdonmukaista sisennystä ja merkityksellisiä kommentteja
5. **Sisältö**: Sisällytä realistista blogisisältöä (voit käyttää paikkamerkkitekstiä)

**Esimerkkirakenne HTML:lle:**
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

### Osa 4: Reflektio

**Kirjoita lyhyt reflektio (3-5 lausetta), jossa käsittelet:**
- Mitä HTML-elementtejä käytit kaikkein varmemmin?
- Mitä haasteita kohtasit suunnittelussa tai koodauksessa?
- Miten semanttinen HTML auttoi sisällön organisoinnissa?
- Mitä tekisit toisin seuraavassa HTML-projektissasi?

## Palautuslista

**Ennen palauttamista varmista, että:**
- [ ] Visuaalinen mallinnus, jossa HTML-elementit on merkitty
- [ ] Täydellinen HTML-tiedosto, jossa oikea dokumenttirakenne
- [ ] Vähintään 10 erilaista semanttista HTML-elementtiä käytetty tarkoituksenmukaisesti
- [ ] Merkitykselliset kommentit, jotka selittävät koodin rakenteen
- [ ] Validia HTML-syntaksia (testaa selaimessa)
- [ ] Kirjallinen reflektio, joka vastaa annettuihin kysymyksiin

## Arviointimatriisi

| Kriteeri | Erinomainen (4) | Hyvä (3) | Kehittyvä (2) | Alkuvaiheessa (1) |
|----------|-----------------|----------|---------------|-------------------|
| **Suunnittelu ja mallinnus** | Yksityiskohtainen, hyvin merkitty mallinnus, joka osoittaa selkeän ymmärryksen ulkoasusta ja HTML:n semanttisesta rakenteesta | Selkeä mallinnus, jossa suurin osa osioista merkitty oikein | Perusmallinnus, jossa joitakin merkintöjä, osoittaa yleistä ymmärrystä | Vähäinen tai epäselvä mallinnus, puuttuu asianmukainen osioiden tunnistus |
| **Semanttisen HTML:n käyttö** | Käyttää 10+ semanttista elementtiä tarkoituksenmukaisesti, osoittaa syvää ymmärrystä HTML-rakenteesta ja saavutettavuudesta | Käyttää 8-9 semanttista elementtiä oikein, osoittaa hyvää semanttisen merkkaamisen ymmärrystä | Käyttää 6-7 semanttista elementtiä, jonkin verran epäselvyyttä käytön tarkoituksenmukaisuudessa | Käyttää alle 6 elementtiä tai käyttää semanttisia elementtejä väärin |
| **Koodin laatu ja organisointi** | Poikkeuksellisen hyvin organisoitu, oikein sisennetty koodi, kattavat kommentit ja täydellinen HTML-syntaksi | Hyvin organisoitu koodi, hyvä sisennys, hyödylliset kommentit ja validi syntaksi | Enimmäkseen organisoitu koodi, joitakin kommentteja, pieniä syntaksivirheitä | Huonosti organisoitu, vähäiset kommentit, useita syntaksivirheitä |
| **Saavutettavuus ja parhaat käytännöt** | Erinomainen saavutettavuus, merkitykselliset alt-tekstit, oikea otsikkohierarkia, noudattaa kaikkia moderneja HTML:n parhaita käytäntöjä | Hyvät saavutettavuusominaisuudet, asianmukainen otsikkorakenne ja alt-tekstit, noudattaa useimpia parhaita käytäntöjä | Joitakin saavutettavuusominaisuuksia, perus alt-tekstit ja otsikkorakenne | Rajoitetut saavutettavuusominaisuudet, huono otsikkorakenne, ei noudata parhaita käytäntöjä |
| **Reflektio ja oppiminen** | Oivaltava reflektio, joka osoittaa syvää ymmärrystä HTML-käsitteistä ja harkittua oppimisprosessin analyysiä | Hyvä reflektio, joka osoittaa keskeisten käsitteiden ymmärrystä ja jonkin verran itsetietoisuutta oppimisesta | Perusreflektio, jossa rajallista ymmärrystä HTML-käsitteistä tai oppimisprosessista | Vähäinen tai puuttuva reflektio, osoittaa vähän ymmärrystä opituista käsitteistä |

## Oppimisresurssit

**Keskeiset lähteet:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Täydellinen opas kaikkiin HTML-elementteihin
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Semanttisen merkkaamisen ymmärtäminen
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Saavutettavan verkkosisällön luominen
- [HTML Validator](https://validator.w3.org/) - Tarkista HTML-syntaksisi

**Vinkkejä onnistumiseen:**
- Aloita mallinnuksesta ennen koodin kirjoittamista
- Käytä selaimen kehittäjätyökaluja HTML-rakenteen tarkasteluun
- Testaa sivusi eri näytön kokoilla (ilman CSS:ääkin)
- Lue HTML:si ääneen tarkistaaksesi, onko rakenne looginen
- Mieti, miten ruudunlukija tulkitsisi sivusi rakenteen

> 💡 **Muista**: Tämä tehtävä keskittyy HTML-rakenteeseen ja semantiikkaan. Älä huolehdi visuaalisesta tyylistä – sitä varten on CSS! Sivusi voi näyttää yksinkertaiselta, mutta sen tulisi olla hyvin jäsennelty ja merkityksellinen.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.