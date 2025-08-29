<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T00:45:07+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "fi"
}
-->
# Terrarium-projekti Osa 2: Johdatus CSS:ään

![Johdatus CSS:ään](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/17)

### Johdanto

CSS eli Cascading Style Sheets ratkaisee tärkeän ongelman verkkosivujen kehityksessä: miten saada verkkosivusto näyttämään hyvältä. Sovellusten tyylittely tekee niistä käytettävämpiä ja visuaalisesti miellyttävämpiä; CSS:ää voidaan myös käyttää luomaan responsiivista verkkosuunnittelua (RWD), jolloin sovellukset näyttävät hyviltä riippumatta näytön koosta. CSS ei ole pelkästään ulkoasun parantamista varten; sen määrittely sisältää animaatioita ja muunnoksia, jotka mahdollistavat kehittyneitä vuorovaikutuksia sovelluksille. CSS Working Group ylläpitää nykyisiä CSS-määrittelyjä; voit seurata heidän työtään [World Wide Web Consortiumin sivustolla](https://www.w3.org/Style/CSS/members).

> Huomaa, että CSS on kehittyvä kieli, kuten kaikki verkkoteknologiat, eikä kaikki selaimet tue uusimpia määrittelyjä. Tarkista aina toteutuksesi [CanIUse.com](https://caniuse.com) -sivustolta.

Tässä oppitunnissa lisäämme tyylejä verkkoterrariumiimme ja opimme lisää useista CSS-konsepteista: kaskadista, periytymisestä sekä valitsimien, asemoinnin ja CSS:n käytöstä asettelujen rakentamiseen. Samalla asetamme terrariumin ja luomme itse terrariumin.

### Esitietovaatimukset

Sinulla tulisi olla HTML-tiedosto terrariumillesi valmiina tyyliteltäväksi.

> Katso video

> 
> [![Git ja GitHub perusteet -video](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Tehtävä

Luo terrarium-kansioosi uusi tiedosto nimeltä `style.css`. Tuo tämä tiedosto `<head>`-osioon:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskadi

Cascading Style Sheets sisältää ajatuksen, että tyylit "kaskadoituvat", jolloin tyylin soveltaminen määräytyy sen prioriteetin mukaan. Verkkosivuston tekijän määrittämät tyylit ovat etusijalla selaimen määrittämiin tyyleihin nähden. "Inline"-tyylit ovat etusijalla ulkoisessa tyylitiedostossa määritettyihin tyyleihin nähden.

### Tehtävä

Lisää "inline"-tyyli "color: red" `<h1>`-tunnisteeseesi:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Lisää sitten seuraava koodi `style.css`-tiedostoosi:

```CSS
h1 {
 color: blue;
}
```

✅ Mikä väri näkyy verkkosovelluksessasi? Miksi? Voitko löytää tavan ohittaa tyylit? Milloin haluaisit tehdä tämän, tai miksi et?

---

## Periytyminen

Tyylit periytyvät esivanhemmalta jälkeläiselle, jolloin sisäkkäiset elementit perivät vanhempiensa tyylit.

### Tehtävä

Aseta body-tunnisteen fontti tiettyyn fonttiin ja tarkista sisäkkäisen elementin fontti:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Avaa selaimesi konsoli ja siirry 'Elements'-välilehteen. Tarkkaile H1:n fonttia. Se perii fonttinsa body-tunnisteesta, kuten selaimessa ilmoitetaan:

![peritty fontti](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.fi.png)

✅ Voitko saada sisäkkäisen tyylin perimään eri ominaisuuden?

---

## CSS-valitsimet

### Tunnisteet

Tähän mennessä `style.css`-tiedostossasi on vain muutama tunniste tyyliteltynä, ja sovellus näyttää melko oudolta:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Tämä tapa tyylitellä tunniste antaa sinulle hallinnan yksittäisiin elementteihin, mutta sinun täytyy hallita monien kasvien tyylejä terrariumissasi. Tätä varten sinun täytyy hyödyntää CSS-valitsimia.

### Id:t

Lisää tyyliä vasemman ja oikean säiliön asetteluun. Koska on vain yksi vasen säiliö ja yksi oikea säiliö, niille annetaan id:t merkinnässä. Tyylittele niitä käyttämällä `#`:

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

Tässä olet sijoittanut nämä säiliöt absoluuttisella asemoinnilla näytön vasempaan ja oikeaan reunaan ja käyttänyt prosentteja niiden leveydessä, jotta ne voivat skaalautua pienille mobiilinäytöille.

✅ Tämä koodi on melko toistuva, eikä siis "DRY" (Don't Repeat Yourself); voitko löytää paremman tavan tyylitellä näitä id:itä, ehkä id:n ja luokan avulla? Sinun täytyisi muuttaa merkintää ja refaktoroida CSS:

```html
<div id="left-container" class="container"></div>
```

### Luokat

Yllä olevassa esimerkissä tyylittelit kaksi yksittäistä elementtiä näytöllä. Jos haluat tyylien koskevan monia elementtejä näytöllä, voit käyttää CSS-luokkia. Tee tämä asettaaksesi kasvit vasemman ja oikean säiliön sisälle.

Huomaa, että jokaisella kasvilla HTML-merkinnässä on yhdistelmä id:itä ja luokkia. Id:t tässä käytetään myöhemmin lisättävän JavaScriptin avulla manipuloimaan terrariumin kasvien sijoittelua. Luokat taas antavat kaikille kasveille tietyn tyylin.

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

Huomionarvoista tässä koodissa on suhteellisen ja absoluuttisen asemoinnin sekoittaminen, jota käsitellään seuraavassa osiossa. Tarkastele tapaa, jolla korkeudet käsitellään prosentteina:

Asetat kasvien pidikkeen korkeudeksi 13 %, mikä on hyvä luku, jotta kaikki kasvit näkyvät pystysuorassa säiliössä ilman tarvetta vierittää.

Kasvien pidike siirretään vasemmalle, jotta kasvit ovat paremmin keskitettyinä säiliön sisällä. Kuvilla on suuri määrä läpinäkyvää taustaa, jotta ne ovat helpommin vedettäviä, joten ne täytyy siirtää vasemmalle, jotta ne sopivat paremmin näytölle.

Kasville itselleen annetaan enimmäisleveys 150 %. Tämä mahdollistaa sen skaalautumisen alas, kun selain skaalautuu alas. Kokeile muuttaa selaimesi kokoa; kasvit pysyvät säiliöissään mutta skaalautuvat alas sopimaan.

Huomionarvoista on myös z-indeksin käyttö, joka hallitsee elementin suhteellista korkeutta (jotta kasvit istuvat säiliön päällä ja näyttävät olevan terrariumin sisällä).

✅ Miksi tarvitset sekä kasvien pidikkeen että kasvin CSS-valitsimen?

## CSS-asemointi

Eri asemointiominaisuuksien (staattinen, suhteellinen, kiinteä, absoluuttinen ja tahmea asemointi) yhdistäminen voi olla hieman hankalaa, mutta kun se tehdään oikein, se antaa hyvän hallinnan elementteihin sivuillasi.

Absoluuttisesti asemoidut elementit asemoidaan lähimpään asemoituun esivanhempaan, ja jos sellaista ei ole, ne asemoidaan asiakirjan runkoon.

Suhteellisesti asemoidut elementit asemoidaan CSS:n ohjeiden mukaan siirtämään niiden sijoittelua pois alkuperäisestä sijainnistaan.

Esimerkissämme `plant-holder` on suhteellisesti asemoitu elementti, joka asemoidaan absoluuttisesti asemoidun säiliön sisälle. Tuloksena on, että sivupalkkisäiliöt kiinnitetään vasemmalle ja oikealle, ja `plant-holder` on sisäkkäinen, mukautuen sivupalkkien sisälle ja antaen tilaa kasvien sijoittamiselle pystysuoraan riviin.

> `plant` itse on myös absoluuttisesti asemoitu, mikä on välttämätöntä sen vedettävyyden kannalta, kuten huomaat seuraavassa oppitunnissa.

✅ Kokeile vaihtaa sivusäiliöiden ja kasvien pidikkeen asemointityyppejä. Mitä tapahtuu?

## CSS-asettelut

Nyt käytät oppimaasi rakentaaksesi terrariumin kokonaan CSS:n avulla!

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

Huomaa prosenttien käyttö tässä. Jos pienennät selaintasi, näet kuinka purkki skaalautuu myös. Huomaa myös purkin elementtien leveys- ja korkeuspisteet sekä kuinka kukin elementti asemoidaan absoluuttisesti keskelle ja kiinnitetään näkymän alareunaan.

Käytämme myös `rem`-yksikköä border-radiusissa, joka on fonttiin suhteutettu mitta. Lue lisää tästä suhteellisesta mittayksiköstä [CSS-määrittelyssä](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Kokeile muuttaa purkin värejä ja läpinäkyvyyttä verrattuna maahan. Mitä tapahtuu? Miksi?

---

## 🚀Haaste

Lisää 'kupla'-kiilto purkin vasempaan alareunaan, jotta se näyttää lasimaisemmalta. Tyylittele `.jar-glossy-long` ja `.jar-glossy-short` näyttämään heijastavalta kiillolta. Tässä on esimerkkikuva:

![valmis terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.fi.png)

Suorita jälkikysely käymällä läpi tämä Learn-moduuli: [Tyylittele HTML-sovelluksesi CSS:llä](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/18)

## Kertaus ja itseopiskelu

CSS vaikuttaa petollisen yksinkertaiselta, mutta sovelluksen täydellinen tyylittely kaikille selaimille ja näytön kokoille voi olla haastavaa. CSS-Grid ja Flexbox ovat työkaluja, jotka on kehitetty tekemään työstä hieman rakenteellisempaa ja luotettavampaa. Tutustu näihin työkaluihin pelaamalla [Flexbox Froggy](https://flexboxfroggy.com/) ja [Grid Garden](https://codepip.com/games/grid-garden/).

## Tehtävä

[CSS Refaktorointi](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.