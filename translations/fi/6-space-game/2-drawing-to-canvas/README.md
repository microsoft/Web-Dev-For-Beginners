<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T00:40:12+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli osa 2: Piirrä sankari ja hirviöt kankaalle

Canvas API on yksi web-kehityksen tehokkaimmista ominaisuuksista, joka mahdollistaa dynaamisten ja interaktiivisten grafiikoiden luomisen suoraan selaimessasi. Tässä oppitunnissa muutamme tyhjän HTML `<canvas>` -elementin pelimaailmaksi, joka on täynnä sankareita ja hirviöitä. Ajattele canvasia digitaalisena tauluna, jossa koodi muuttuu visuaaliseksi.

Rakennamme aiemmin oppimasi päälle ja sukellamme nyt visuaalisiin elementteihin. Opit lataamaan ja näyttämään pelin spritejä, sijoittamaan elementtejä tarkasti ja luomaan visuaalisen perustan avaruuspelillesi. Tämä yhdistää staattiset verkkosivut dynaamisiin ja interaktiivisiin kokemuksiin.

Oppitunnin lopussa sinulla on valmis pelikohtaus, jossa sankarilaivasi on sijoitettu oikein ja vihollisjoukot valmiina taisteluun. Ymmärrät, miten modernit pelit renderöivät grafiikkaa selaimissa, ja saat taitoja luoda omia interaktiivisia visuaalisia kokemuksia. Tutkitaan canvas-grafiikkaa ja herätetään avaruuspelisi eloon!

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Mikä tämä `<canvas>`-elementti oikein on? Se on HTML5:n ratkaisu dynaamisten grafiikoiden ja animaatioiden luomiseen verkkoselaimissa. Toisin kuin tavalliset kuvat tai videot, jotka ovat staattisia, canvas antaa sinulle pikselitason hallinnan kaikesta, mitä näytöllä näkyy. Tämä tekee siitä täydellisen peleille, datavisualisoinneille ja interaktiiviselle taiteelle. Ajattele sitä ohjelmoitavana piirtoalustana, jossa JavaScript toimii siveltimenäsi.

Oletuksena canvas-elementti näyttää tyhjältä, läpinäkyvältä suorakulmiolta sivullasi. Mutta juuri tässä piilee sen potentiaali! Sen todellinen voima tulee esiin, kun käytät JavaScriptiä muotojen piirtämiseen, kuvien lataamiseen, animaatioiden luomiseen ja asioiden reagoimiseen käyttäjän toimintoihin. Se on samanlaista kuin varhaisten tietokonegrafiikan pioneereilla Bell Labsissa 1960-luvulla, jotka joutuivat ohjelmoimaan jokaisen pikselin luodakseen ensimmäiset digitaaliset animaatiot.

✅ Lue [lisää Canvas API:sta](https://developer.mozilla.org/docs/Web/API/Canvas_API) MDN:ssä.

Näin se yleensä määritellään osana sivun runkoa:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Mitä tämä koodi tekee:**
- **Asettaa** `id`-attribuutin, jotta voit viitata tähän tiettyyn canvas-elementtiin JavaScriptissä
- **Määrittää** leveyden pikseleinä hallitakseen canvasin vaakasuoraa kokoa
- **Asettaa** korkeuden pikseleinä määrittääkseen canvasin pystysuorat mitat

## Yksinkertaisten geometrioiden piirtäminen

Nyt kun tiedät, mikä canvas-elementti on, tutustutaan sen käyttöön piirtämisessä! Canvas käyttää koordinaattijärjestelmää, joka saattaa tuntua tutulta matematiikan tunneilta, mutta siinä on yksi tärkeä ero, joka liittyy tietokonegrafiikkaan.

Canvas käyttää kartesiilaista koordinaatistoa, jossa x-akseli (vaakasuora) ja y-akseli (pystysuora) määrittävät kaiken, mitä piirrät. Mutta tässä on tärkeä ero: toisin kuin matematiikan koordinaatistossa, alkuperäpiste `(0,0)` alkaa vasemmasta yläkulmasta, ja x-arvot kasvavat siirryttäessä oikealle ja y-arvot kasvavat siirryttäessä alaspäin. Tämä lähestymistapa juontaa juurensa varhaisiin tietokonenäyttöihin, joissa elektronisäteet skannasivat ylhäältä alas, tehden vasemmasta yläkulmasta luonnollisen lähtöpisteen.

![canvasin ruudukko](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.fi.png)
> Kuva [MDN:stä](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Canvas-elementille piirtäminen tapahtuu aina samalla kolmen vaiheen prosessilla, joka muodostaa perustan kaikelle canvas-grafiikalle. Kun teet tämän muutaman kerran, se tulee luonnostaan:

1. **Hanki viittaus** canvas-elementtiisi DOM:sta (kuten mihin tahansa muuhun HTML-elementtiin)
2. **Hanki 2D-renderöintikonteksti** – tämä tarjoaa kaikki piirtomenetelmät
3. **Aloita piirtäminen!** Käytä kontekstin sisäänrakennettuja menetelmiä grafiikan luomiseen

Näin se näyttää koodissa:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Puretaan tämä vaihe vaiheelta:**
- **Haemme** canvas-elementtimme sen ID:n avulla ja tallennamme sen muuttujaan
- **Hankimme** 2D-renderöintikontekstin – tämä on työkalupakkimme täynnä piirtomenetelmiä
- **Käskemme** canvasia täyttämään asiat punaisella `fillStyle`-ominaisuuden avulla
- **Piirrämme** suorakulmion, joka alkaa vasemmasta yläkulmasta (0,0) ja on 200 pikseliä leveä ja korkea

✅ Canvas API keskittyy pääasiassa 2D-muotoihin, mutta voit myös piirtää 3D-elementtejä verkkosivulle; tätä varten voit käyttää [WebGL API:a](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Canvas API:lla voit piirtää monenlaisia asioita, kuten:

- **Geometrisia muotoja**, olemme jo näyttäneet, miten suorakulmio piirretään, mutta voit piirtää paljon muutakin.
- **Tekstiä**, voit piirtää tekstiä haluamallasi fontilla ja värillä.
- **Kuvia**, voit piirtää kuvan esimerkiksi .jpg- tai .png-tiedostosta.

✅ Kokeile! Nyt kun osaat piirtää suorakulmion, voitko piirtää ympyrän sivulle? Katso joitain mielenkiintoisia Canvas-piirroksia CodePenistä. Tässä on [erityisen vaikuttava esimerkki](https://codepen.io/dissimulate/pen/KrAwx).

## Kuvan lataaminen ja piirtäminen

Perusmuotojen piirtäminen on hyödyllistä alkuun pääsemiseksi, mutta useimmat pelit tarvitsevat oikeita kuvia! Spritet, taustat ja tekstuurit antavat peleille niiden visuaalisen viehätyksen. Kuvien lataaminen ja näyttäminen canvasilla toimii eri tavalla kuin geometristen muotojen piirtäminen, mutta kun ymmärrät prosessin, se on melko suoraviivaista.

Meidän täytyy luoda `Image`-objekti, ladata kuvatiedostomme (tämä tapahtuu asynkronisesti, eli "taustalla") ja sitten piirtää se canvasille, kun se on valmis. Tämä lähestymistapa varmistaa, että kuvasi näkyvät oikein estämättä sovellustasi latautumisen aikana.

### Peruskuvan lataaminen

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Mitä tässä koodissa tapahtuu:**
- **Luomme** uuden Image-objektin spriteä tai tekstuuria varten
- **Määritämme**, mikä kuvatiedosto ladataan asettamalla lähdepolku
- **Kuuntelemme** lataustapahtumaa, jotta tiedämme tarkalleen, milloin kuva on valmis käytettäväksi

### Parempi tapa ladata kuvia

Tässä on ammattimaisempi tapa käsitellä kuvien lataamista, jota kehittäjät usein käyttävät. Kääritään kuvien lataaminen Promise-pohjaiseen funktioon – tämä lähestymistapa, joka yleistyi JavaScript Promises -standardin myötä ES6:ssa, tekee koodistasi järjestelmällisempää ja käsittelee virheitä sujuvasti:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Mitä olemme tehneet tässä:**
- **Kääritty** kaikki kuvien latauslogiikka Promiseen, jotta voimme käsitellä sitä paremmin
- **Lisätty** virheenkäsittely, joka kertoo meille, kun jokin menee pieleen
- **Käytetty** modernia async/await-syntaksia, koska se on paljon selkeämpää lukea
- **Sisällytetty** try/catch-lohkot, jotta latausongelmat käsitellään sujuvasti

Kun kuvasi on ladattu, niiden piirtäminen canvasille on itse asiassa melko yksinkertaista:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Käydään tämä läpi vaihe vaiheelta:**
- **Lataamme** sekä sankari- että hirviökuvat taustalla käyttäen awaitia
- **Haemme** canvas-elementtimme ja hankimme tarvittavan 2D-renderöintikontekstin
- **Sijoitamme** sankarikuva keskelle käyttäen nopeaa koordinaattimatematiikkaa
- **Asetamme** hirviökuvan vasempaan yläkulmaan aloittaaksemme vihollisjoukon
- **Käsittelemme** mahdolliset virheet, jotka saattavat tapahtua latauksen tai renderöinnin aikana

## Nyt on aika aloittaa pelin rakentaminen

Nyt yhdistämme kaiken luodaksemme avaruuspelisi visuaalisen perustan. Sinulla on vankka ymmärrys canvasin perusteista ja kuvien lataustekniikoista, joten tämä käytännön osio opastaa sinua luomaan täydellisen pelinäytön, jossa spritet on sijoitettu oikein.

### Mitä rakentaa

Sinun tulee rakentaa verkkosivu, jossa on Canvas-elementti. Sen tulisi näyttää musta ruutu, jonka koko on `1024*768`. Olemme toimittaneet sinulle kaksi kuvaa:

- Sankarilaiva

   ![Sankarilaiva](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.fi.png)

- 5*5 hirviöitä

   ![Hirviölaiva](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.fi.png)

### Suositellut kehitysvaiheet

Etsi aloitustiedostot, jotka on luotu sinulle `your-work`-alikansiossa. Projektirakenteesi tulisi sisältää:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Tässä on, mitä sinulla on käytettävissäsi:**
- **Pelinspritet** sijaitsevat `assets/`-kansiossa, jotta kaikki pysyy järjestyksessä
- **Pää-HTML-tiedostosi** asettaa canvas-elementin ja valmistaa kaiken
- **JavaScript-tiedosto**, jossa kirjoitat kaiken pelin renderöintitaikuuden
- **package.json**, joka asettaa kehityspalvelimen, jotta voit testata paikallisesti

Avaa tämä kansio Visual Studio Codessa aloittaaksesi kehityksen. Tarvitset paikallisen kehitysympäristön, jossa on Visual Studio Code, NPM ja Node.js asennettuna. Jos sinulla ei ole `npm`:ää asennettuna tietokoneellesi, [näin voit asentaa sen](https://www.npmjs.com/get-npm).

Käynnistä kehityspalvelimesi siirtymällä `your-work`-kansioon:

```bash
cd your-work
npm start
```

**Tämä komento tekee seuraavat asiat:**
- **Käynnistää** paikallisen palvelimen osoitteessa `http://localhost:5000`, jotta voit testata peliäsi
- **Palvelee** kaikki tiedostosi oikein, jotta selaimesi voi ladata ne oikein
- **Tarkkailee** tiedostojasi muutosten varalta, jotta voit kehittää sujuvasti
- **Tarjoaa** ammattimaisen kehitysympäristön kaiken testaamiseen

> 💡 **Huomio**: Selaimesi näyttää aluksi tyhjän sivun – se on odotettavissa! Kun lisäät koodia, päivitä selaimesi nähdäksesi muutokset. Tämä iteratiivinen kehitystapa on samanlainen kuin NASA:n Apollo-ohjaustietokoneen rakentamisessa – testattiin jokaista komponenttia ennen sen integroimista suurempaan järjestelmään.

### Lisää koodia

Lisää tarvittava koodi `your-work/app.js`-tiedostoon seuraavien tehtävien suorittamiseksi:

1. **Piirrä canvas mustalla taustalla**
   > 💡 **Näin se tehdään**: Etsi TODO `/app.js`-tiedostosta ja lisää vain kaksi riviä. Aseta `ctx.fillStyle` mustaksi, sitten käytä `ctx.fillRect()`-metodia alkaen (0,0) canvasin mittojen mukaan. Helppoa!

2. **Lataa pelin tekstuurit**
   > 💡 **Näin se tehdään**: Käytä `await loadAsset()`-metodia pelaajan ja vihollisen kuvien lataamiseen. Tallenna ne muuttujiksi, jotta voit käyttää niitä myöhemmin. Muista – ne eivät näy ennen kuin oikeasti piirrät ne!

3. **Piirrä sankarilaiva keskelle alareunaan**
   > 💡 **Näin se tehdään**: Käytä `ctx.drawImage()`-metodia sankarin sijoittamiseen. X-koordinaatille kokeile `canvas.width / 2 - 45` keskittämiseen ja Y-koordinaatille käytä `canvas.height - canvas.height / 4` sijoittaaksesi sen alaosaan.

4. **Piirrä 5×5 muodostelma vihollislaivoja**
   > 💡 **Näin se tehdään**: Etsi `createEnemies`-funktio ja aseta sisäkkäinen silmukka. Sinun täytyy tehdä hieman matematiikkaa tilan ja sijoittelun suhteen, mutta älä huoli – näytän sinulle tarkalleen, miten!

Ensin määritä vakioita oikean vihollismuodostelman asettelua varten:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Puretaan, mitä nämä vakiot tekevät:**
- **Asetamme** 5 vihollista per rivi ja sarake (mukava 5×5 ruudukko)
- **Määritämme**, kuinka paljon tilaa vihollisten väliin jätetään, jotta ne eivät näytä ahtailta
- **Laskemme**, kuinka leveä koko muodostelma tulee olemaan
- **Selvitämme**, mistä aloittaa ja lopettaa, jotta muodostelma näyttää keskitettyltä

Sitten luomme sisäkkäiset silmukat vihollismuodostelman piirtämiseksi:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Tässä on, mitä tämä sisäkkäinen silmukka tekee:**
- Ulompi silmukka **liikkuu** vasemmalta oikealle muodostelman läpi
- Sisempi silmukka **kulkee** ylhäältä alas luoden siistejä rivejä
- **Piirrämme** jokaisen vihollisspriten tarkalleen laskettuihin x,y-koordinaatteihin
- Kaikki pysyy **tasaisesti sijoitettuna**, jotta se näyttää ammattimaiselta ja järjestäytyneeltä

## Lopputulos

Valmis tulos näyttää tältä:

![Musta ruutu, jossa sankari ja 5*5 hirviöitä](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.fi.png)

## Ratkaisu

Yritä ratkaista itse ensin, mutta jos jäät jumiin, katso [ratkaisu](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Paranna avaruuspelisi canvasia lisäämällä visuaalisia tehosteita ja interaktiivisia elementtejä käyttäen oppimiasi Canvas API -tekniikoita.

**Tehtävä:** Luo uusi tiedosto nimeltä `enhanced-canvas.html`, jossa canvas näyttää animoituja tähtiä taustalla, sykkivän sankarilaivan terveyspalkin ja vihollislaivoja, jotka liikkuvat hitaasti alaspäin. Sisällytä JavaScript-koodi, joka piirtää välkkyviä tähtiä satunnaisilla paikoilla ja opasiteetilla, toteuttaa terveyspalkin, joka vaihtaa väriä terveyden tason mukaan (vihreä > keltainen > punainen), ja animoi vihollislaivat liikkumaan alas eri nopeuksilla.

Lue lisää [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) täältä.

## 🚀 Haaste

Olet oppinut piirtämään 2D-keskeisellä Canvas API:lla; tutustu [WebGL API:iin](https://developer.mozilla.org/docs/Web/API/WebGL_API) ja yritä piirtää 3D-objekti.

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/32)

## Kertaus ja itseopiskelu

Lue lisää Canvas API:sta [täältä](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Tehtävä

[Kokeile Canvas API:ta](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.