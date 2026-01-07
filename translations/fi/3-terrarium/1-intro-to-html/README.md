<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3fcfa99c4897e051b558b5eaf1e8cc74",
  "translation_date": "2025-11-04T01:29:03+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "fi"
}
-->
# Terrarium-projekti Osa 1: Johdatus HTML:ään

```mermaid
journey
    title Your HTML Learning Journey
    section Foundation
      Create HTML file: 3: Student
      Add DOCTYPE: 4: Student
      Structure document: 5: Student
    section Content
      Add metadata: 4: Student
      Include images: 5: Student
      Organize layout: 5: Student
    section Semantics
      Use proper tags: 4: Student
      Enhance accessibility: 5: Student
      Build terrarium: 5: Student
```

![Johdatus HTML:ään](../../../../translated_images/webdev101-html.4389c2067af68e98.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

HTML eli HyperText Markup Language on jokaisen verkkosivun perusta, jonka olet koskaan vieraillut. Ajattele HTML:ää verkkosivujen "luurankona" – se määrittää, mihin sisältö sijoitetaan, miten se järjestetään ja mitä kukin osa edustaa. Vaikka CSS myöhemmin "pukee" HTML:n väreillä ja asetteluilla ja JavaScript tuo siihen interaktiivisuutta, HTML tarjoaa olennaisen rakenteen, joka tekee kaiken muun mahdolliseksi.

Tässä oppitunnissa luot HTML-rakenteen virtuaaliselle terraario-käyttöliittymälle. Tämä käytännön projekti opettaa sinulle HTML:n peruskäsitteitä samalla, kun rakennat visuaalisesti houkuttelevaa sisältöä. Opit järjestämään sisältöä semanttisten elementtien avulla, työskentelemään kuvien kanssa ja luomaan perustan interaktiiviselle verkkosovellukselle.

Oppitunnin lopussa sinulla on toimiva HTML-sivu, joka näyttää kasvikuvia järjestetyissä sarakkeissa ja on valmis tyyliteltäväksi seuraavassa oppitunnissa. Älä huoli, jos se näyttää aluksi yksinkertaiselta – juuri siltä HTML:n kuuluukin näyttää ennen kuin CSS lisää visuaalista viimeistelyä.

```mermaid
mindmap
  root((HTML Fundamentals))
    Structure
      DOCTYPE Declaration
      HTML Element
      Head Section
      Body Content
    Elements
      Tags & Attributes
      Self-closing Tags
      Nested Elements
      Block vs Inline
    Content
      Text Elements
      Images
      Containers (div)
      Lists
    Semantics
      Meaningful Tags
      Accessibility
      Screen Readers
      SEO Benefits
    Best Practices
      Proper Nesting
      Valid Markup
      Descriptive Alt Text
      Organized Structure
```

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Katso ja opi**: Tutustu tähän hyödylliseen videoesittelyyn
> 
> [![HTML:n perusteet -video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Projektin valmistelu

Ennen kuin sukellamme HTML-koodiin, luodaan kunnollinen työtila terraario-projektillesi. Järjestelmällisen tiedostorakenteen luominen alusta alkaen on tärkeä tapa, joka hyödyttää sinua koko verkkokehitysmatkasi ajan.

### Tehtävä: Luo projektirakenne

Luo oma kansio terraario-projektillesi ja lisää ensimmäinen HTML-tiedostosi. Tässä on kaksi lähestymistapaa, joita voit käyttää:

**Vaihtoehto 1: Visual Studio Code -editorin käyttö**
1. Avaa Visual Studio Code
2. Klikkaa "File" → "Open Folder" tai käytä `Ctrl+K, Ctrl+O` (Windows/Linux) tai `Cmd+K, Cmd+O` (Mac)
3. Luo uusi kansio nimeltä `terrarium` ja valitse se
4. Explorer-paneelissa klikkaa "New File" -ikonia
5. Nimeä tiedostosi `index.html`

![VS Code Explorer näyttää uuden tiedoston luomisen](../../../../translated_images/vs-code-index.e2986cf919471eb9.fi.png)

**Vaihtoehto 2: Käytä terminaalikomentoja**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Mitä nämä komennot tekevät:**
- **Luo** uuden hakemiston nimeltä `terrarium` projektillesi
- **Siirtyy** terraariohakemistoon
- **Luo** tyhjän `index.html`-tiedoston
- **Avaa** tiedoston Visual Studio Codessa muokattavaksi

> 💡 **Vinkki**: Tiedostonimi `index.html` on erityinen verkkokehityksessä. Kun joku vierailee verkkosivustolla, selaimet etsivät automaattisesti `index.html`-tiedostoa oletussivuksi. Tämä tarkoittaa, että URL-osoite kuten `https://mysite.com/projects/` näyttää automaattisesti `projects`-kansion `index.html`-tiedoston ilman, että tiedostonimeä tarvitsee erikseen määrittää URL-osoitteessa.

## HTML-dokumentin rakenteen ymmärtäminen

Jokainen HTML-dokumentti noudattaa tiettyä rakennetta, jonka selaimet tarvitsevat ymmärtääkseen ja näyttääkseen sisällön oikein. Ajattele tätä rakennetta kuin virallista kirjettä – siinä on vaadittuja elementtejä tietyssä järjestyksessä, jotka auttavat vastaanottajaa (tässä tapauksessa selainta) käsittelemään sisältöä oikein.

```mermaid
flowchart TD
    A["<!DOCTYPE html>"] --> B["<html>"]
    B --> C["<head>"]
    C --> D["<title>"]
    C --> E["<meta charset>"]
    C --> F["<meta viewport>"]
    B --> G["<body>"]
    G --> H["<h1> Heading"]
    G --> I["<div> Containers"]
    G --> J["<img> Images"]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style G fill:#e8f5e8
```

Aloitetaan lisäämällä jokaisen HTML-dokumentin tarvitsema perusta.

### DOCTYPE-määrittely ja juurielementti

HTML-tiedoston kaksi ensimmäistä riviä toimivat dokumentin "esittelynä" selaimelle:

```html
<!DOCTYPE html>
<html></html>
```

**Mitä tämä koodi tekee:**
- **Määrittää** dokumenttityypin HTML5:ksi käyttämällä `<!DOCTYPE html>`
- **Luo** juurielementin `<html>`, joka sisältää kaiken sivun sisällön
- **Vakiinnuttaa** modernit verkkostandardit oikeaa selaimen renderöintiä varten
- **Varmistaa** yhtenäisen ulkoasun eri selaimissa ja laitteissa

> 💡 **VS Code -vinkki**: Vie hiiri minkä tahansa HTML-tagin päälle Visual Studio Codessa nähdäksesi hyödyllistä tietoa MDN Web Docsista, mukaan lukien käyttöesimerkit ja selainten yhteensopivuustiedot.

> 📚 **Lisätietoa**: DOCTYPE-määrittely estää selaimia siirtymästä "quirks mode" -tilaan, jota käytettiin tukemaan hyvin vanhoja verkkosivustoja. Moderni verkkokehitys käyttää yksinkertaista `<!DOCTYPE html>`-määrittelyä varmistaakseen [standardien mukaisen renderöinnin](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

### 🔄 **Pedagoginen tarkistus**
**Pysähdy ja pohdi**: Ennen kuin jatkat, varmista että ymmärrät:
- ✅ Miksi jokainen HTML-dokumentti tarvitsee DOCTYPE-määrittelyn
- ✅ Mitä `<html>`-juurielementti sisältää
- ✅ Kuinka tämä rakenne auttaa selaimia renderöimään sivuja oikein

**Nopea itsearviointi**: Voitko selittää omin sanoin, mitä "standardien mukainen renderöinti" tarkoittaa?

## Välttämättömän dokumenttimetadata lisääminen

HTML-dokumentin `<head>`-osio sisältää tärkeää tietoa, jota selaimet ja hakukoneet tarvitsevat, mutta jota vierailijat eivät näe suoraan sivulla. Ajattele sitä "kulissien takana" olevana tietona, joka auttaa verkkosivua toimimaan oikein ja näyttämään oikein eri laitteilla ja alustoilla.

Tämä metadata kertoo selaimille, miten sivu näytetään, mitä merkistöä käytetään ja miten eri näyttökokoja käsitellään – kaikki olennaisia asioita ammattimaisen ja saavutettavan verkkosivun luomisessa.

### Tehtävä: Lisää dokumentin pääosa

Lisää tämä `<head>`-osio avaus- ja sulkevien `<html>`-tagien väliin:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Mitä kukin elementti tekee:**
- **Asettaa** sivun otsikon, joka näkyy selaimen välilehdissä ja hakutuloksissa
- **Määrittää** UTF-8-merkistökoodauksen tekstin oikeaa näyttämistä varten maailmanlaajuisesti
- **Varmistaa** yhteensopivuuden Internet Explorerin modernien versioiden kanssa
- **Konfiguroi** responsiivisen suunnittelun asettamalla näkymän laitteen leveyden mukaiseksi
- **Säätää** alkuperäisen zoomaustason sisällön luonnollisen koon näyttämiseksi

> 🤔 **Pohdittavaa**: Mitä tapahtuisi, jos asettaisit näkymän meta-tagin näin: `<meta name="viewport" content="width=600">`? Tämä pakottaisi sivun aina 600 pikselin levyiseksi, mikä rikkoisi responsiivisen suunnittelun! Lue lisää [näkymän oikeasta konfiguroinnista](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Dokumentin rungon rakentaminen

`<body>`-elementti sisältää kaiken verkkosivusi näkyvän sisällön – kaiken, mitä käyttäjät näkevät ja minkä kanssa he ovat vuorovaikutuksessa. Vaikka `<head>`-osio antoi ohjeita selaimelle, `<body>`-osio sisältää varsinaisen sisällön: tekstiä, kuvia, painikkeita ja muita elementtejä, jotka luovat käyttöliittymän.

Lisätään rungon rakenne ja ymmärretään, miten HTML-tagit toimivat yhdessä merkityksellisen sisällön luomiseksi.

### HTML-tagin rakenteen ymmärtäminen

HTML käyttää parillisia tageja elementtien määrittämiseen. Useimmilla tageilla on avaus-tagi, kuten `<p>`, ja sulkeva tagi, kuten `</p>`, joiden välissä on sisältö: `<p>Hello, world!</p>`. Tämä luo kappale-elementin, joka sisältää tekstin "Hello, world!".

### Tehtävä: Lisää rungon elementti

Päivitä HTML-tiedostosi sisältämään `<body>`-elementti:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Mitä tämä kokonaisrakenne tarjoaa:**
- **Luo** HTML5-dokumentin peruskehikon
- **Sisältää** olennaisen metadatan oikeaa selaimen renderöintiä varten
- **Luo** tyhjän rungon näkyvälle sisällöllesi
- **Noudattaa** modernin verkkokehityksen parhaita käytäntöjä

Nyt olet valmis lisäämään terraarion näkyvät elementit. Käytämme `<div>`-elementtejä säiliöinä eri sisältöosioiden järjestämiseen ja `<img>`-elementtejä kasvikuvien näyttämiseen.

### Kuvien ja asettelusäiliöiden käyttö

Kuvat ovat erityisiä HTML:ssä, koska ne käyttävät "itse sulkeutuvia" tageja. Toisin kuin elementit, kuten `<p></p>`, jotka ympäröivät sisältöä, `<img>`-tagi sisältää kaiken tarvittavan tiedon itsessään käyttämällä attribuutteja, kuten `src` kuvatiedoston polulle ja `alt` saavutettavuuden parantamiseksi.

Ennen kuin lisäät kuvia HTML:ään, sinun on järjestettävä projektitiedostosi oikein luomalla kuvat-kansio ja lisäämällä kasvigrafiikat.

**Ensin, valmistele kuvasi:**
1. Luo kansio nimeltä `images` terraario-projektikansiosi sisälle
2. Lataa kasvikuvat [ratkaisukansiosta](../../../../3-terrarium/solution/images) (yhteensä 14 kasvikuvan tiedostoa)
3. Kopioi kaikki kasvikuvat uuteen `images`-kansioosi

### Tehtävä: Luo kasvien näyttöasettelu

Lisää kasvikuvat järjestettyinä kahteen sarakkeeseen `<body></body>`-tagien väliin:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.fi.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.fi.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.fi.png" />
		</div>
	</div>
</div>
```

**Vaihe vaiheelta, mitä tässä koodissa tapahtuu:**
- **Luo** pääsivun säiliön `id="page"`, joka sisältää kaiken sisällön
- **Määrittää** kaksi sarakesäiliötä: `left-container` ja `right-container`
- **Järjestää** 7 kasvia vasempaan sarakkeeseen ja 7 kasvia oikeaan sarakkeeseen
- **Käärii** jokaisen kasvikuvan `plant-holder`-diviin yksittäistä sijoittelua varten
- **Käyttää** yhtenäisiä luokkanimiä CSS-tyylittelyä varten seuraavassa oppitunnissa
- **Määrittää** jokaiselle kasvikuville yksilölliset ID:t JavaScript-vuorovaikutusta varten myöhemmin
- **Sisältää** oikeat tiedostopolut, jotka osoittavat kuvat-kansioon

> 🤔 **Pohdittavaa**: Huomaa, että kaikilla kuvilla on tällä hetkellä sama alt-teksti "plant". Tämä ei ole ihanteellista saavutettavuuden kannalta. Näytönlukijan käyttäjät kuulisivat "plant" 14 kertaa peräkkäin tietämättä, mitä kukin kuva esittää. Voisitko keksiä parempia, kuvaavampia alt-tekstejä jokaiselle kuvalle?

> 📝 **HTML-elementtityypit**: `<div>`-elementit ovat "block-level" ja vievät koko leveyden, kun taas `<span>`-elementit ovat "inline" ja vievät vain tarvittavan leveyden. Mitä luulet tapahtuvan, jos vaihtaisit kaikki nämä `<div>`-tagit `<span>`-tageiksi?

### 🔄 **Pedagoginen tarkistus**
**Rakenteen ymmärtäminen**: Käy läpi HTML-rakenteesi:
- ✅ Voitko tunnistaa pääsäiliöt asettelussasi?
- ✅ Ymmärrätkö, miksi jokaisella kuvalla on yksilöllinen ID?
- ✅ Kuinka kuvailisit `plant-holder`-divien tarkoitusta?

**Visuaalinen tarkistus**: Avaa HTML-tiedostosi selaimessa. Sinun pitäisi nähdä:
- Yksinkertainen lista kasvikuvista
- Kuvat järjestettyinä kahteen sarakkeeseen
- Yksinkertainen, tyylittelemätön asettelu

**Muista**: Tämä yksinkertainen ulkoasu on juuri sitä, miltä HTML:n kuuluukin näyttää ennen CSS-tyylittelyä!

Kun tämä merkintä on lisätty, kasvit näkyvät näytöllä, vaikka ne eivät vielä näytä viimeistellyiltä – siihen tarvitaan CSS seuraavassa oppitunnissa! Tällä hetkellä sinulla on vankka HTML-perusta, joka järjestää sisältösi oikein ja noudattaa saavutettavuuden parhaita käytäntöjä.

## Semanttisen HTML:n käyttö saavutettavuuden parantamiseksi

Semanttinen HTML tarkoittaa HTML-elementtien valitsemista niiden merkityksen ja tarkoituksen, ei vain ulkonäön perusteella. Kun käytät semanttista merkintää, kommunikoit sisältösi rakenteen ja merkityksen selaimille, hakukoneille ja apuvälineille, kuten näytönlukijoille.

```mermaid
flowchart TD
    A[Need to add content?] --> B{What type?}
    B -->|Main heading| C["<h1>"]
    B -->|Subheading| D["<h2>, <h3>, etc."]
    B -->|Paragraph| E["<p>"]
    B -->|List| F["<ul>, <ol>"]
    B -->|Navigation| G["<nav>"]
    B -->|Article| H["<article>"]
    B -->|Section| I["<section>"]
    B -->|Generic container| J["<div>"]
    
    C --> K[Screen readers announce as main title]
    D --> L[Creates proper heading hierarchy]
    E --> M[Provides proper text spacing]
    F --> N[Enables list navigation shortcuts]
    G --> O[Identifies navigation landmarks]
    H --> P[Marks standalone content]
    I --> Q[Groups related content]
    J --> R[Use only when no semantic tag fits]
    
    style C fill:#4caf50
    style D fill:#4caf50
    style E fill:#4caf50
    style F fill:#4caf50
    style G fill:#2196f3
    style H fill:#2196f3
    style I fill:#2196f3
    style J fill:#ff9800
```

Tämä lähestymistapa tekee verkkosivustoistasi saavutettavampia vammaisille käyttäjille ja auttaa hakukoneita ymmärtämään sisältöäsi paremmin. Se on modernin verkkokehityksen perusperiaate, joka luo parempia kokemuksia kaikille.

### Semanttisen sivuotsikon lisääminen

Lisätään kunnollinen otsikko terraario-sivullesi. Lisää tämä rivi heti avaus-`<body>`-tagin jälkeen:

```html
<h1>My Terrarium</h1>
```

**Miksi semanttinen merkintä on tärkeää:**
- **Auttaa** näytönlukijoita navigoimaan ja ymmärtämään sivun rakennetta
- **Parantaa** hakukoneoptimointia (SEO) selkeyttämällä sisällön hierarkiaa
- **Lisää** saavutettavuutta näkövammaisille tai kognitiivisista eroista kärsiville käyttäjille
- **Luo** parempia käyttäjäkokemuksia kaikilla laitteilla ja alustoilla
- **Noudattaa** verkkostandardeja ja parhaita käytäntöjä ammattimaisessa kehityksessä

**Esimerkkejä semanttisista vs. ei-semattisista valinnoista:**

| Tarkoitus | ✅ Semanttinen valinta | ❌ Ei-semanttinen valinta |
|-----------|-----------------------|--------------------------|
| Pääotsikko | `<h1>Otsikko</h1>` | `<div class="big-text">Otsikko</div>` |
| Navigointi | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Painike | `<button>Paina tästä</button>` | `<span onclick="...">Paina tästä</span>` |
| Artikkelin sisältö | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Katso käytännössä**: Katso [miten näytönlukijat vuorovaikuttavat verkkosivujen kanssa](https://www.youtube.com/watch?v=OUDV1gqs9GA) ymmärtääksesi, miksi semanttinen merkintä on tärkeää saavutettavuuden kannalta. Huomaa, kuinka oikea HTML-rakenne auttaa käyttäjiä navigoimaan tehokkaasti.

## Terraariosäiliön luominen

Lisätään nyt HTML-rakenne itse terraariolle – lasisäiliölle, johon kasvit lopulta sijoitetaan. Tämä osio havainnollistaa tärkeää konseptia: HTML tarjoaa rakenteen, mutta ilman CSS-tyylittelyä nämä elementit eivät vielä näy kunnolla.

Terraarion merkintä käyttää kuvaavia luokkanimiä, jotka tekevät CSS-tyylittelystä intuitiivista ja helposti hallittavaa seuraavassa oppitunnissa.

### Tehtävä: Lisää terraarion rakenne

Lisää tämä merkintä viimeisen `</div>`-tagin yläpuolelle (ennen sivusäiliön sulkevaa tagia):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Tämän terraarion rakenteen ymmärtäminen:**
- **Luo** pääterraariosäiliön, jolla on yksilöllinen ID tyyl
- **Määrittää** erilliset elementit kullekin visuaaliselle komponentille (yläosa, seinät, multa, pohja)
- **Sisältää** sisäkkäisiä elementtejä lasin heijastusefektejä varten (kiiltävät elementit)
- **Käyttää** kuvailevia luokkanimiä, jotka selkeästi kertovat kunkin elementin tarkoituksen
- **Valmistelee** rakenteen CSS-tyylittelyä varten, joka luo lasiterraarion ulkonäön

> 🤔 **Huomaatko jotain?**: Vaikka lisäsit tämän merkinnän, et näe mitään uutta sivulla! Tämä havainnollistaa täydellisesti, kuinka HTML tarjoaa rakenteen, kun taas CSS tuo ulkonäön. Nämä `<div>`-elementit ovat olemassa, mutta niillä ei ole vielä visuaalista tyylittelyä – se tulee seuraavassa oppitunnissa!

```mermaid
flowchart TD
    A[HTML Document] --> B[Document Head]
    A --> C[Document Body]
    B --> D[Title Element]
    B --> E[Meta Charset]
    B --> F[Meta Viewport]
    C --> G[Main Heading]
    C --> H[Page Container]
    H --> I[Left Container with 7 plants]
    H --> J[Right Container with 7 plants]
    H --> K[Terrarium Structure]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#e8f5e8
    style H fill:#f3e5f5
```

### 🔄 **Pedagoginen tarkistus**
**HTML-rakenteen hallinta**: Ennen kuin etenet, varmista että osaat:
- ✅ Selittää HTML-rakenteen ja visuaalisen ulkonäön eron
- ✅ Tunnistaa semanttiset ja ei-semanttiset HTML-elementit
- ✅ Kuvailla, miten oikea merkintä parantaa saavutettavuutta
- ✅ Tunnistaa koko dokumenttipuun rakenteen

**Ymmärryksen testaaminen**: Kokeile avata HTML-tiedostosi selaimessa, jossa JavaScript on pois päältä ja CSS poistettu. Näet näin luomasi puhtaan semanttisen rakenteen!

---

## GitHub Copilot Agent -haaste

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Luo semanttinen HTML-rakenne kasvien hoito-ohjeiden osioon, joka voidaan lisätä terraarioprojektiin.

**Ohje:** Luo semanttinen HTML-osio, joka sisältää pääotsikon "Kasvien hoito-ohjeet", kolme alaotsikkoa "Kastelu", "Valon tarpeet" ja "Maan hoito", joista jokainen sisältää kappaleen kasvien hoitoon liittyvää tietoa. Käytä asianmukaisia semanttisia HTML-tageja, kuten `<section>`, `<h2>`, `<h3>` ja `<p>` sisällön rakenteistamiseen.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löydät täältä.

## HTML:n historian tutkimushaaste

**Tietoa verkkokehityksen evoluutiosta**

HTML on kehittynyt merkittävästi sen jälkeen, kun Tim Berners-Lee loi ensimmäisen verkkoselaimen CERNissä vuonna 1990. Jotkut vanhat tagit, kuten `<marquee>`, ovat nyt vanhentuneita, koska ne eivät toimi hyvin modernien saavutettavuusstandardien ja responsiivisen suunnittelun periaatteiden kanssa.

**Kokeile tätä:**
1. Kääri `<h1>`-otsikkosi väliaikaisesti `<marquee>`-tagiin: `<marquee><h1>Minun terraarioni</h1></marquee>`
2. Avaa sivusi selaimessa ja tarkkaile vieritysefektiä
3. Mieti, miksi tämä tagi on vanhentunut (vihje: ajattele käyttäjäkokemusta ja saavutettavuutta)
4. Poista `<marquee>`-tagi ja palaa semanttiseen merkintään

**Pohdintakysymykset:**
- Miten vierivä otsikko voisi vaikuttaa käyttäjiin, joilla on näkövamma tai liikeherkkyys?
- Mitkä modernit CSS-tekniikat voisivat saavuttaa samanlaisia visuaalisia efektejä saavutettavammin?
- Miksi on tärkeää käyttää nykyisiä verkkostandardeja vanhentuneiden elementtien sijaan?

Tutustu lisää [vanhentuneisiin ja poistettuihin HTML-elementteihin](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) ymmärtääksesi, miten verkkostandardit kehittyvät parantaakseen käyttäjäkokemusta.

## Oppitunnin jälkeinen kysely

[Oppitunnin jälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/16)

## Kertaus ja itseopiskelu

**Syvennä HTML-tietämystäsi**

HTML on ollut verkkosivujen perusta yli 30 vuoden ajan, kehittyen yksinkertaisesta dokumenttien merkintäkielestä monimutkaiseksi alustaksi interaktiivisten sovellusten rakentamiseen. Tämän kehityksen ymmärtäminen auttaa arvostamaan moderneja verkkostandardeja ja tekemään parempia kehityspäätöksiä.

**Suositellut oppimispolut:**

1. **HTML:n historia ja kehitys**
   - Tutki aikajanaa HTML 1.0:sta HTML5:een
   - Selvitä, miksi tietyt tagit poistettiin käytöstä (saavutettavuus, mobiiliystävällisyys, ylläpidettävyys)
   - Tutki uusia HTML-ominaisuuksia ja ehdotuksia

2. **Semanttisen HTML:n syväluotaus**
   - Tutustu [HTML5:n semanttisten elementtien](https://developer.mozilla.org/docs/Web/HTML/Element) täydelliseen listaan
   - Harjoittele tunnistamaan, milloin käyttää `<article>`, `<section>`, `<aside>` ja `<main>`
   - Opi ARIA-attribuuteista saavutettavuuden parantamiseksi

3. **Moderni verkkokehitys**
   - Tutustu [responsiivisten verkkosivujen rakentamiseen](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) Microsoft Learnissa
   - Ymmärrä, miten HTML integroituu CSS:n ja JavaScriptin kanssa
   - Opi verkkosuorituskyvyn ja SEO:n parhaista käytännöistä

**Pohdintakysymykset:**
- Mitkä vanhentuneet HTML-tagit löysit, ja miksi ne poistettiin käytöstä?
- Mitä uusia HTML-ominaisuuksia ehdotetaan tuleviin versioihin?
- Miten semanttinen HTML edistää verkkosivujen saavutettavuutta ja SEO:ta?

### ⚡ **Mitä voit tehdä seuraavan 5 minuutin aikana**
- [ ] Avaa DevTools (F12) ja tarkastele suosikkisivustosi HTML-rakennetta
- [ ] Luo yksinkertainen HTML-tiedosto peruselementeillä: `<h1>`, `<p>` ja `<img>`
- [ ] Vahvista HTML:si W3C HTML Validator -työkalulla verkossa
- [ ] Kokeile lisätä kommentti HTML:si sisään käyttämällä `<!-- kommentti -->`

### 🎯 **Mitä voit saavuttaa tämän tunnin aikana**
- [ ] Suorita oppitunnin jälkeinen kysely ja kertaa semanttisen HTML:n käsitteet
- [ ] Rakenna yksinkertainen verkkosivu itsestäsi käyttäen oikeaa HTML-rakennetta
- [ ] Kokeile eri otsikkotasoja ja tekstin muotoilutageja
- [ ] Lisää kuvia ja linkkejä harjoitellaksesi multimedia-integraatiota
- [ ] Tutki HTML5-ominaisuuksia, joita et ole vielä kokeillut

### 📅 **Viikon mittainen HTML-matka**
- [ ] Suorita terraarioprojektin tehtävä semanttisella merkinnällä
- [ ] Luo saavutettava verkkosivu käyttäen ARIA-tunnisteita ja rooleja
- [ ] Harjoittele lomakkeiden luomista eri syöttötyypeillä
- [ ] Tutki HTML5 API:ita, kuten localStorage tai geolocation
- [ ] Opiskele responsiivisia HTML-malleja ja mobiiliystävällistä suunnittelua
- [ ] Tarkastele muiden kehittäjien HTML-koodia parhaiden käytäntöjen oppimiseksi

### 🌟 **Kuukauden mittainen verkkosivujen perusta**
- [ ] Rakenna portfoliosivusto, joka esittelee HTML-osaamistasi
- [ ] Opi HTML-mallinnusta esimerkiksi Handlebars-kehyksellä
- [ ] Osallistu avoimen lähdekoodin projekteihin parantamalla HTML-dokumentaatiota
- [ ] Hallitse edistyneitä HTML-käsitteitä, kuten mukautettuja elementtejä
- [ ] Integroi HTML CSS-kehysten ja JavaScript-kirjastojen kanssa
- [ ] Mentoroi muita, jotka opettelevat HTML:n perusteita

## 🎯 HTML-osaamisen aikajana

```mermaid
timeline
    title HTML Learning Progression
    
    section Foundation (5 minutes)
        Document Structure: DOCTYPE declaration
                         : HTML root element
                         : Head vs Body understanding
        
    section Metadata (10 minutes)
        Essential Meta Tags: Character encoding
                           : Viewport configuration
                           : Browser compatibility
        
    section Content Creation (15 minutes)
        Image Integration: Proper file paths
                         : Alt text importance
                         : Self-closing tags
        
    section Layout Organization (20 minutes)
        Container Strategy: Div elements for structure
                          : Class and ID naming
                          : Nested element hierarchy
        
    section Semantic Mastery (30 minutes)
        Meaningful Markup: Heading hierarchy
                         : Screen reader navigation
                         : Accessibility best practices
        
    section Advanced Concepts (1 hour)
        HTML5 Features: Modern semantic elements
                      : ARIA attributes
                      : Performance considerations
        
    section Professional Skills (1 week)
        Code Organization: File structure patterns
                         : Maintainable markup
                         : Team collaboration
        
    section Expert Level (1 month)
        Modern Web Standards: Progressive enhancement
                            : Cross-browser compatibility
                            : HTML specification updates
```

### 🛠️ HTML-työkalupakin yhteenveto

Tämän oppitunnin jälkeen sinulla on:
- **Dokumenttirakenne**: Täydellinen HTML5-perusta oikealla DOCTYPE:lla
- **Semanttinen merkintä**: Merkitykselliset tagit, jotka parantavat saavutettavuutta ja SEO:ta
- **Kuvien integrointi**: Oikea tiedostojen organisointi ja alt-tekstin käyttö
- **Layout-kontit**: Strateginen divien käyttö kuvailevilla luokkanimillä
- **Saavutettavuustietoisuus**: Ymmärrys ruudunlukijan navigoinnista
- **Modernit standardit**: Nykyiset HTML5-käytännöt ja tieto vanhentuneista tageista
- **Projektin perusta**: Vahva pohja CSS-tyylittelylle ja JavaScript-interaktiivisuudelle

**Seuraavat askeleet**: HTML-rakenteesi on valmis CSS-tyylittelyä varten! Rakentamasi semanttinen perusta tekee seuraavasta oppitunnista paljon helpomman ymmärtää.

## Tehtävä

[Harjoittele HTML:ää: Rakenna blogin mallinnus](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.