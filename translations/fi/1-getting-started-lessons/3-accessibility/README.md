<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T00:49:13+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "fi"
}
-->
# Luodaan saavutettavia verkkosivuja

![Kaikki saavutettavuudesta](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app/web/)

> Verkon voima on sen universaalisuudessa. Pääsy kaikille, riippumatta vammaisuudesta, on olennainen osa.
>
> \- Sir Timothy Berners-Lee, W3C:n johtaja ja World Wide Webin keksijä

Tämä lainaus korostaa täydellisesti saavutettavien verkkosivustojen merkitystä. Sovellus, jota kaikki eivät voi käyttää, on määritelmällisesti poissulkeva. Verkkokehittäjinä meidän tulisi aina pitää saavutettavuus mielessä. Kun keskityt tähän alusta alkaen, olet hyvällä tiellä varmistamaan, että kaikki voivat käyttää luomiasi sivuja. Tässä oppitunnissa opit työkaluista, jotka auttavat varmistamaan verkkosivustojesi saavutettavuuden, sekä siitä, miten rakentaa saavutettavuus huomioiden.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Käytettävät työkalut

### Ruudunlukijat

Yksi tunnetuimmista saavutettavuustyökaluista on ruudunlukijat.

[Ruudunlukijat](https://en.wikipedia.org/wiki/Screen_reader) ovat yleisesti käytettyjä apuvälineitä näkövammaisille. Kun käytämme aikaa varmistaaksemme, että selain välittää haluamamme tiedot oikein, meidän on myös varmistettava, että ruudunlukija tekee saman.

Perustasolla ruudunlukija lukee sivun ylhäältä alas ääneen. Jos sivusi on pelkkää tekstiä, lukija välittää tiedot samalla tavalla kuin selain. Tietenkin verkkosivut harvoin koostuvat pelkästä tekstistä; ne sisältävät linkkejä, grafiikkaa, värejä ja muita visuaalisia elementtejä. On tärkeää varmistaa, että nämä tiedot luetaan oikein ruudunlukijalla.

Jokaisen verkkokehittäjän tulisi tutustua ruudunlukijaan. Kuten yllä korostettiin, se on asiakkaasi käyttämä väline. Samalla tavalla kuin tunnet selaimen toiminnan, sinun tulisi oppia, miten ruudunlukija toimii. Onneksi ruudunlukijat ovat sisäänrakennettu useimpiin käyttöjärjestelmiin.

Jotkut selaimet sisältävät myös sisäänrakennettuja työkaluja ja laajennuksia, jotka voivat lukea tekstiä ääneen tai tarjota perusnavigointiominaisuuksia, kuten [nämä saavutettavuuteen keskittyvät Edge-selaimen työkalut](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Nämä ovat myös tärkeitä saavutettavuustyökaluja, mutta ne toimivat hyvin eri tavalla kuin ruudunlukijat, eikä niitä tulisi sekoittaa ruudunlukijatestaustyökaluihin.

✅ Kokeile ruudunlukijaa ja selaimen tekstinlukijaa. Windowsissa [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) on oletuksena mukana, ja [JAWS](https://webaim.org/articles/jaws/) ja [NVDA](https://www.nvaccess.org/about-nvda/) voidaan asentaa. macOS:ssä ja iOS:ssä [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) on oletuksena asennettu.

### Zoomaus

Toinen näkövammaisten yleisesti käyttämä työkalu on zoomaus. Yksinkertaisin zoomauksen muoto on staattinen zoomaus, jota ohjataan `Control + plus-merkki (+)` tai näytön resoluutiota pienentämällä. Tämä zoomaus muuttaa koko sivun kokoa, joten [responsiivisen suunnittelun](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) käyttö on tärkeää hyvän käyttökokemuksen tarjoamiseksi suurennetuilla zoomaustasoilla.

Toinen zoomauksen muoto käyttää erikoistunutta ohjelmistoa suurentamaan yhden alueen näytöstä ja siirtymään sen ympärillä, aivan kuten käyttäisit oikeaa suurennuslasia. Windowsissa [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) on sisäänrakennettu, ja [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) on kolmannen osapuolen suurennusohjelmisto, jossa on enemmän ominaisuuksia ja suurempi käyttäjäkunta. Sekä macOS että iOS sisältävät sisäänrakennetun suurennusohjelmiston nimeltä [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrastin tarkistajat

Verkkosivustojen värit tulee valita huolellisesti värisokeiden käyttäjien tai niiden henkilöiden tarpeisiin, joilla on vaikeuksia nähdä matalan kontrastin värejä.

✅ Testaa suosikkisivustosi värien käyttöä selaimen laajennuksella, kuten [WCAG:n värikontrastin tarkistajalla](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Mitä opit?

### Lighthouse

Selaimesi kehittäjätyökalujen alueelta löydät Lighthouse-työkalun. Tämä työkalu on tärkeä saadaksesi ensimmäisen näkymän verkkosivuston saavutettavuudesta (sekä muista analyyseista). Vaikka Lighthouseen ei tulisi luottaa yksinomaan, 100 %:n tulos on erittäin hyödyllinen lähtökohtana.

✅ Etsi Lighthouse selaimesi kehittäjätyökalupaneelista ja suorita analyysi millä tahansa sivustolla. Mitä huomaat?

## Suunnittelu saavutettavuutta varten

Saavutettavuus on suhteellisen laaja aihe. Avuksesi on saatavilla lukuisia resursseja.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Vaikka emme pysty kattamaan kaikkia saavutettavien sivustojen luomisen osa-alueita, alla on joitakin keskeisiä periaatteita, jotka haluat toteuttaa. Saavutettavan sivun suunnittelu alusta alkaen on **aina** helpompaa kuin olemassa olevan sivun muuttaminen saavutettavaksi.

## Hyvät näyttöperiaatteet

### Väriystävälliset paletit

Ihmiset näkevät maailman eri tavoin, ja tämä koskee myös värejä. Kun valitset sivustosi värimaailmaa, sinun tulisi varmistaa, että se on saavutettavissa kaikille. Yksi erinomainen [työkalu väripalettien luomiseen on Color Safe](http://colorsafe.co/).

✅ Tunnista verkkosivusto, joka on erittäin ongelmallinen värien käytössä. Miksi?

### Käytä oikeaa HTML:ää

CSS:n ja JavaScriptin avulla on mahdollista saada mikä tahansa elementti näyttämään miltä tahansa ohjausobjektilta. `<span>` voisi olla `<button>`, ja `<b>` voisi muuttua hyperlinkiksi. Vaikka tämä saattaa olla helpompi muotoilla, se ei välitä mitään ruudunlukijalle. Käytä asianmukaista HTML:ää luodessasi ohjausobjekteja sivulle. Jos haluat hyperlinkin, käytä `<a>`. Oikean HTML:n käyttö oikealle ohjausobjektille tunnetaan nimellä semanttisen HTML:n hyödyntäminen.

✅ Mene mille tahansa verkkosivustolle ja katso, käyttävätkö suunnittelijat ja kehittäjät HTML:ää oikein. Löydätkö painikkeen, joka pitäisi olla linkki? Vinkki: napsauta hiiren oikealla painikkeella ja valitse 'Näytä sivun lähdekoodi' selaimessasi nähdäksesi taustalla olevan koodin.

### Luo kuvaileva otsikkohierarkia

Ruudunlukijakäyttäjät [luottavat vahvasti otsikoihin](https://webaim.org/projects/screenreadersurvey8/#finding) löytääkseen tietoa ja navigoidakseen sivulla. Kuvailevien otsikkosisältöjen kirjoittaminen ja semanttisten otsikkotunnisteiden käyttö ovat tärkeitä helposti navigoitavan sivuston luomisessa ruudunlukijakäyttäjille.

### Käytä hyviä visuaalisia vihjeitä

CSS tarjoaa täydellisen hallinnan minkä tahansa elementin ulkoasuun sivulla. Voit luoda tekstilaatikoita ilman reunaviivaa tai hyperlinkkejä ilman alleviivausta. Valitettavasti näiden vihjeiden poistaminen voi tehdä haastavammaksi niiden tunnistamisen, jotka ovat riippuvaisia näistä vihjeistä.

## Linkkitekstin merkitys

Hyperlinkit ovat keskeisiä verkossa navigoimiseen. Siksi on tärkeää varmistaa, että ruudunlukija voi lukea linkit oikein, jotta kaikki käyttäjät voivat navigoida sivustollasi.

### Ruudunlukijat ja linkit

Kuten odotat, ruudunlukijat lukevat linkkitekstin samalla tavalla kuin ne lukevat minkä tahansa muun tekstin sivulla. Tämän mielessä alla oleva teksti saattaa tuntua täysin hyväksyttävältä.

> Pikkupingviini, jota joskus kutsutaan keijupingviiniksi, on maailman pienin pingviini. [Klikkaa tästä](https://en.wikipedia.org/wiki/Little_penguin) saadaksesi lisätietoja.

> Pikkupingviini, jota joskus kutsutaan keijupingviiniksi, on maailman pienin pingviini. Käy osoitteessa https://en.wikipedia.org/wiki/Little_penguin saadaksesi lisätietoja.

> **NOTE** Kuten kohta luet, sinun ei koskaan tulisi luoda linkkejä, jotka näyttävät yllä olevilta.

Muista, että ruudunlukijat ovat erilainen käyttöliittymä kuin selaimet, ja niillä on erilainen ominaisuusjoukko.

### Ongelma URL:n käytössä

Ruudunlukijat lukevat tekstin. Jos URL näkyy tekstissä, ruudunlukija lukee URL:n. Yleisesti ottaen URL ei välitä merkityksellistä tietoa ja voi kuulostaa ärsyttävältä. Olet ehkä kokenut tämän, jos puhelimesi on koskaan lukenut tekstiviestin URL:n ääneen.

### Ongelma "klikkaa tästä" -tekstissä

Ruudunlukijat voivat myös lukea vain hyperlinkit sivulla, aivan kuten näkevä henkilö skannaa sivua linkkien varalta. Jos linkkiteksti on aina "klikkaa tästä", käyttäjä kuulee vain "klikkaa tästä, klikkaa tästä, klikkaa tästä, klikkaa tästä, klikkaa tästä, ..." Kaikki linkit ovat nyt erottamattomia toisistaan.

### Hyvä linkkiteksti

Hyvä linkkiteksti kuvaa lyhyesti, mitä linkin takana on. Yllä olevassa esimerkissä, joka käsittelee pikkupingviinejä, linkki vie Wikipedia-sivulle lajista. Fraasi *pikkupingviini* olisi täydellinen linkkiteksti, koska se tekee selväksi, mitä joku oppii, jos hän klikkaa linkkiä - pikkupingviineistä.

> [Pikkupingviini](https://en.wikipedia.org/wiki/Little_penguin), jota joskus kutsutaan keijupingviiniksi, on maailman pienin pingviini.

✅ Surffaa verkossa muutaman minuutin ajan löytääksesi sivuja, jotka käyttävät epäselviä linkkistrategioita. Vertaa niitä muihin, paremmin linkitettyihin sivustoihin. Mitä opit?

#### Hakukonehuomioita

Lisäetuna siitä, että varmistat sivustosi olevan saavutettavissa kaikille, autat hakukoneita navigoimaan sivustollasi. Hakukoneet käyttävät linkkitekstiä oppiakseen sivujen aiheista. Hyvän linkkitekstin käyttö auttaa siis kaikkia!

### ARIA

Kuvittele seuraava sivu:

| Tuote         | Kuvaus            | Tilaa         |
| ------------- | ----------------- | ------------- |
| Widget        | [Kuvaus](../../../../1-getting-started-lessons/3-accessibility/')     | [Tilaa](../../../../1-getting-started-lessons/3-accessibility/')  |
| Super widget  | [Kuvaus](../../../../1-getting-started-lessons/3-accessibility/')     | [Tilaa](../../../../1-getting-started-lessons/3-accessibility/')  |

Tässä esimerkissä kuvauksen ja tilauksen tekstin toistaminen on järkevää selainta käyttävälle henkilölle. Kuitenkin ruudunlukijaa käyttävä henkilö kuulisi vain sanat *kuvaus* ja *tilaa* toistettuna ilman kontekstia.

Näiden tilanteiden tukemiseksi HTML tukee joukkoa attribuutteja, joita kutsutaan [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Nämä attribuutit mahdollistavat lisätiedon tarjoamisen ruudunlukijoille.

> **NOTE**: Kuten monet HTML:n osa-alueet, selaimen ja ruudunlukijan tuki voi vaihdella. Kuitenkin useimmat päälinjan asiakkaat tukevat ARIA-attribuutteja.

Voit käyttää `aria-label`-attribuuttia kuvaamaan linkkiä, kun sivun muoto ei sitä salli. Widgetin kuvaus voisi olla asetettu seuraavasti:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Yleisesti ottaen semanttisen merkinnän käyttö, kuten yllä kuvattu, on ARIA:n käyttöä parempi, mutta joskus ei ole semanttista vastinetta eri HTML-widgeteille. Hyvä esimerkki on puu. HTML:ssä ei ole vastinetta puulle, joten tunnistat tämän elementin yleisen `<div>`-tunnisteen oikealla roolilla ja ARIA-arvoilla. [MDN:n dokumentaatio ARIA:sta](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) sisältää lisää hyödyllistä tietoa.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Kuvat

On sanomattakin selvää, että ruudunlukijat eivät voi automaattisesti lukea, mitä kuvassa on. Kuvien saavutettavuuden varmistaminen ei vaadi paljon työtä - juuri tätä varten `alt`-attribuutti on olemassa. Kaikilla merkityksellisillä kuvilla tulisi olla `alt`, joka kuvaa, mitä ne ovat.
Pelkästään koristeellisilla kuvilla tulisi olla `alt`-attribuutti asetettuna tyhjäksi: `alt=""`. Tämä estää ruudunlukijoita ilmoittamasta tarpeettomasti koristeellista kuvaa.

✅ Kuten arvata saattaa, hakukoneet eivät myöskään pysty ymmärtämään, mitä kuvassa on. Ne käyttävät myös alt-tekstiä. Joten jälleen kerran, sivusi saavutettavuuden varmistaminen tarjoaa lisäbonuksia!

## Näppäimistö

Jotkut käyttäjät eivät pysty käyttämään hiirtä tai kosketuslevyä, vaan luottavat näppäimistön vuorovaikutuksiin siirtyäkseen elementistä toiseen. On tärkeää, että verkkosivustosi esittää sisältösi loogisessa järjestyksessä, jotta näppäimistökäyttäjä voi käyttää jokaista interaktiivista elementtiä siirtyessään dokumentissa alaspäin. Jos rakennat verkkosivusi semanttisella merkinnällä ja käytät CSS:ää niiden visuaalisen asettelun muotoiluun, sivustosi pitäisi olla näppäimistöllä navigoitava, mutta on tärkeää testata tämä osa-alue manuaalisesti. Lue lisää [näppäimistön navigointistrategioista](https://webaim.org/techniques/keyboard/).

✅ Mene mille tahansa verkkosivustolle ja yritä navigoida siinä vain näppäimistöä käyttäen. Mikä toimii, mikä ei toimi? Miksi?

## Yhteenveto

Verkko, joka on saavutettavissa vain osalle, ei ole todellinen 'maailmanlaajuinen verkko'. Paras tapa varmistaa, että luomasi sivustot ovat saavutettavia, on sisällyttää saavutettavuuden parhaat käytännöt alusta alkaen. Vaikka lisäaskeleita tarvitaan, näiden taitojen sisällyttäminen työnkulkuusi nyt tarkoittaa, että kaikki luomasi sivut ovat saavutettavia.

---

## 🚀 Haaste

Ota tämä HTML ja kirjoita se mahdollisimman saavutettavaksi käyttäen oppimiasi strategioita.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</p>
    </div>
  </body>
</html>
```

## Jälkikysely
[Jälkikysely](https://ff-quizzes.netlify.app/web/en/)

## Kertaus ja itseopiskelu
Monilla hallituksilla on lakeja, jotka koskevat saavutettavuusvaatimuksia. Tutustu oman maasi saavutettavuuslakeihin. Mitä ne kattavat ja mitä ne eivät kata? Esimerkkinä on [tämä hallituksen verkkosivusto](https://accessibility.blog.gov.uk/).

## Tehtävä

[Analysoi ei-saavutettava verkkosivusto](assignment.md)

Lähde: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.