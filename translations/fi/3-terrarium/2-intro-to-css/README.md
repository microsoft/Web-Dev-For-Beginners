<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-27T20:09:59+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "fi"
}
-->
# Terrarium-projekti, osa 2: Johdatus CSS:ään

![Johdatus CSS:ään](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.fi.png)  
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/17)

### Johdanto

CSS eli Cascading Style Sheets ratkaisee tärkeän ongelman verkkokehityksessä: miten saada verkkosivustosi näyttämään hyvältä. Sovellusten tyylittely tekee niistä käytettävämpiä ja visuaalisesti miellyttävämpiä; CSS:ää voidaan myös käyttää luomaan responsiivista verkkosuunnittelua (Responsive Web Design, RWD), jolloin sovellukset näyttävät hyviltä riippumatta siitä, minkä kokoisella näytöllä niitä käytetään. CSS ei ole pelkästään ulkonäön parantamista varten; sen määrittely sisältää myös animaatioita ja muunnoksia, jotka mahdollistavat kehittyneitä vuorovaikutuksia sovelluksissasi. CSS Working Group ylläpitää nykyisiä CSS-määrittelyjä; voit seurata heidän työtään [World Wide Web Consortiumin sivustolla](https://www.w3.org/Style/CSS/members).

> Huomaa, että CSS on kieli, joka kehittyy kuten kaikki muutkin verkkoteknologiat, eikä kaikki selaimet tue uusimpia määrittelyn osia. Tarkista aina toteutuksesi [CanIUse.com](https://caniuse.com)-sivustolta.

Tässä oppitunnissa lisäämme tyylejä verkkoterrariumiimme ja opimme lisää useista CSS-käsitteistä: kaskadista, periytymisestä sekä valitsimien, asemoinnin ja CSS:n avulla tehtävien asettelujen käytöstä. Samalla rakennamme terrariumin asettelun ja luomme itse terrariumin.

### Esitiedot

Sinulla tulisi olla terrariumisi HTML valmiina tyylittelyä varten.

> Katso video

> 
> [![Git- ja GitHub-perusteet -video](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Tehtävä

Luo terrarium-kansioosi uusi tiedosto nimeltä `style.css`. Tuo tämä tiedosto `<head>`-osioon:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskadi

Cascading Style Sheets sisältää ajatuksen siitä, että tyylit "kaskadoituvat", eli tyylin soveltaminen määräytyy sen prioriteetin mukaan. Verkkosivuston tekijän määrittämät tyylit ovat etusijalla selaimen oletustyyleihin nähden. "Inline"-tyylit ovat etusijalla ulkoisessa tyylitiedostossa määritettyihin tyyleihin nähden.

### Tehtävä

Lisää "inline"-tyyli "color: red" `<h1>`-tagiisi:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Lisää sitten seuraava koodi `style.css`-tiedostoosi:

```CSS
h1 {
 color: blue;
}
```

✅ Mikä väri näkyy verkkosovelluksessasi? Miksi? Voitko löytää tavan ohittaa tyylit? Milloin haluaisit tehdä näin, tai miksi et?

---

## Periytyminen

Tyylit periytyvät esivanhemmalta jälkeläiselle, eli sisäkkäiset elementit perivät vanhempiensa tyylit.

### Tehtävä

Aseta bodylle tietty fontti ja tarkista, periytyykö fontti sisäkkäiselle elementille:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Avaa selaimesi konsolista 'Elements'-välilehti ja tarkkaile H1:n fonttia. Se perii fonttinsa bodysta, kuten selain ilmoittaa:

![peritty fontti](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.fi.png)

✅ Voitko saada sisäkkäisen tyylin perimään eri ominaisuuden?

---

## CSS-valitsimet

### Tagit

Tähän mennessä `style.css`-tiedostossasi on vain muutama tagi tyyliteltynä, ja sovellus näyttää melko oudolta:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Tällä tavalla tagin tyylittely antaa sinulle hallinnan yksittäisiin elementteihin, mutta sinun täytyy hallita monien kasvien tyylejä terrariumissasi. Tätä varten sinun täytyy hyödyntää CSS-valitsimia.

### Id:t

Lisää tyyliä asettelemaan vasen ja oikea säilö. Koska merkinnässä on vain yksi vasen säilö ja yksi oikea säilö, niille on annettu id:t. Tyylittele niitä käyttämällä `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Tässä olet asettanut nämä säilöt absoluuttisella asemoinnilla aivan näytön vasempaan ja oikeaan reunaan ja käyttänyt prosentteja niiden leveydelle, jotta ne voivat mukautua pienille mobiilinäytöille.

✅ Tämä koodi on melko toistuvaa, joten se ei ole "DRY" (Don't Repeat Yourself); voitko löytää paremman tavan tyylitellä näitä id:itä, ehkä yhdistämällä id:n ja luokan? Sinun täytyisi muuttaa merkintää ja refaktoroida CSS:

```html
<div id="left-container" class="container"></div>
```

### Luokat

Yllä olevassa esimerkissä tyylittelit kahta ainutlaatuista elementtiä näytöllä. Jos haluat tyylien koskevan monia elementtejä näytöllä, voit käyttää CSS-luokkia. Tee näin asettelemaan kasvit vasemmassa ja oikeassa säilössä.

Huomaa, että jokaisella kasvilla HTML-merkinnässä on yhdistelmä id:itä ja luokkia. Id:tä käytetään tässä myöhemmin lisättävän JavaScriptin avulla manipuloimaan terrariumin kasvien sijoittelua. Luokat taas antavat kaikille kasveille tietyn tyylin.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Lisää seuraava `style.css`-tiedostoosi:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Tässä koodinpätkässä on huomionarvoista suhteellisen ja absoluuttisen asemoinnin yhdistelmä, jota käsitellään seuraavassa osiossa. Tarkastele tapaa, jolla korkeuksia käsitellään prosentteina:

Olet asettanut kasvien säilön korkeudeksi 13 %, mikä on hyvä luku varmistaaksesi, että kaikki kasvit näkyvät pystysuorassa säilössä ilman tarvetta vierittää.

Olet siirtänyt kasvien säilöä vasemmalle, jotta kasvit olisivat paremmin keskitettyjä säilöönsä. Kuvilla on paljon läpinäkyvää taustaa, jotta ne olisivat helpommin vedettäviä, joten ne täytyy siirtää vasemmalle, jotta ne sopivat paremmin näytölle.

Kasville itselleen on annettu enimmäisleveys 150 %. Tämä mahdollistaa sen skaalautumisen alaspäin selaimen pienentyessä. Kokeile muuttaa selaimesi kokoa; kasvit pysyvät säilöissään mutta skaalautuvat sopimaan.

Huomionarvoista on myös z-indeksin käyttö, joka hallitsee elementin suhteellista korkeutta (jotta kasvit istuvat säilön päällä ja näyttävät olevan terrariumin sisällä).

✅ Miksi tarvitset sekä kasvien säilön että kasvin CSS-valitsimen?

## CSS-asemointi

Eri asemointiominaisuuksien (staattinen, suhteellinen, kiinteä, absoluuttinen ja tahmea asemointi) yhdistäminen voi olla hieman hankalaa, mutta kun se tehdään oikein, se antaa sinulle hyvän hallinnan sivujesi elementteihin.

Absoluuttisesti asemoidut elementit asemoidaan lähimpään asemoituun esivanhempaansa nähden, ja jos sellaista ei ole, ne asemoidaan dokumentin runkoon nähden.

Suhteellisesti asemoidut elementit asemoidaan CSS:n ohjeiden mukaan siirtymään pois alkuperäisestä sijainnistaan.

Esimerkissämme `plant-holder` on suhteellisesti asemoitu elementti, joka on asemoitu absoluuttisesti asemoidun säilön sisällä. Tuloksena on, että sivupalkkisäilöt on kiinnitetty vasemmalle ja oikealle, ja `plant-holder` on sisäkkäinen, mukautuen sivupalkkien sisällä ja antaen tilaa kasvien sijoittamiselle pystysuoraan riviin.

> Itse `plant` on myös absoluuttisesti asemoitu, mikä on tarpeen sen vedettävyyden mahdollistamiseksi, kuten huomaat seuraavassa oppitunnissa.

✅ Kokeile vaihtaa sivusäilöjen ja `plant-holder`-elementin asemointityyppejä. Mitä tapahtuu?

## CSS-asettelut

Nyt käytät oppimaasi rakentaaksesi itse terrariumin, täysin CSS:n avulla!

Tyylittele ensin `.terrarium`-divin lapset pyöristetyksi suorakulmioksi CSS:n avulla:

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Huomaa prosenttien käyttö tässä. Jos pienennät selaintasi, näet, kuinka purkki skaalautuu. Huomaa myös purkkielementtien leveys- ja korkeuspisteet sekä se, kuinka jokainen elementti on absoluuttisesti asemoitu keskelle ja kiinnitetty näkymän alareunaan.

Käytämme myös `rem`-yksikköä border-radius-ominaisuudessa, joka on fonttiin suhteutettu mitta. Lue lisää tästä suhteellisesta mittayksiköstä [CSS-määrittelystä](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Kokeile muuttaa purkin värejä ja läpinäkyvyyttä verrattuna maahan. Mitä tapahtuu? Miksi?

---

## 🚀Haaste

Lisää "kuplamainen" kiilto purkin vasempaan alareunaan, jotta se näyttäisi lasimaisemmalta. Tyylittele `.jar-glossy-long` ja `.jar-glossy-short` näyttämään heijastavalta kiillolta. Tässä on esimerkki lopputuloksesta:

![valmis terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.fi.png)

Suorita jälkikysely käymällä läpi tämä Learn-moduuli: [Tyylittele HTML-sovelluksesi CSS:llä](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/18)

## Kertaus ja itseopiskelu

CSS vaikuttaa petollisen yksinkertaiselta, mutta täydellisen sovelluksen tyylittely kaikille selaimille ja kaikille näytön kokoille voi olla haastavaa. CSS-Grid ja Flexbox ovat työkaluja, jotka on kehitetty tekemään työstä hieman rakenteellisempaa ja luotettavampaa. Opi näistä työkaluista pelaamalla [Flexbox Froggy](https://flexboxfroggy.com/) ja [Grid Garden](https://codepip.com/games/grid-garden/).

## Tehtävä

[CSS Refaktorointi](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.