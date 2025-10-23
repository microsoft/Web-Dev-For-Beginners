<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T00:40:51+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli osa 6: Loppu ja uudelleenkäynnistys

Jokainen hyvä peli tarvitsee selkeät loppuehdot ja sujuvan uudelleenkäynnistysmekanismin. Olet rakentanut vaikuttavan avaruuspelin, jossa on liikkumista, taistelua ja pisteiden keräämistä – nyt on aika lisätä viimeiset palaset, jotka tekevät siitä täydellisen.

Pelisi pyörii tällä hetkellä loputtomasti, kuten NASA:n vuonna 1977 laukaisemat Voyager-luotaimet, jotka yhä matkaavat avaruudessa vuosikymmeniä myöhemmin. Vaikka tämä sopii avaruustutkimukseen, peleissä tarvitaan määriteltyjä loppupisteitä, jotta kokemus olisi tyydyttävä.

Tänään toteutamme kunnolliset voitto-/häviöehdot ja uudelleenkäynnistysjärjestelmän. Tämän oppitunnin lopussa sinulla on viimeistelty peli, jonka pelaajat voivat suorittaa ja pelata uudelleen, aivan kuten klassiset arcade-pelit, jotka määrittelivät pelialan.

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/39)

## Pelin loppuehtojen ymmärtäminen

Milloin pelisi pitäisi päättyä? Tämä perustavanlaatuinen kysymys on muokannut pelisuunnittelua arcade-pelien alkuajoista lähtien. Pac-Man päättyy, kun haamut saavat sinut kiinni tai kaikki pisteet on kerätty, kun taas Space Invaders päättyy, kun avaruusolennot saavuttavat pohjan tai kun olet tuhonnut ne kaikki.

Pelintekijänä sinä määrittelet voitto- ja häviöehdot. Avaruuspeliämme varten tässä on todistettuja lähestymistapoja, jotka luovat mukaansatempaavaa pelattavuutta:

- **`N` vihollisalusta on tuhottu**: On melko yleistä, että pelin eri tasot jaetaan siten, että sinun täytyy tuhota `N` vihollisalusta tason suorittamiseksi.
- **Aluksesi on tuhottu**: On pelejä, joissa häviät pelin, jos aluksesi tuhoutuu. Toinen yleinen lähestymistapa on elämien käsite. Joka kerta, kun aluksesi tuhoutuu, menetät yhden elämän. Kun kaikki elämät ovat menneet, häviät pelin.
- **Olet kerännyt `N` pistettä**: Toinen yleinen loppuehto on pisteiden kerääminen. Miten pisteitä kerätään, on sinun päätettävissäsi, mutta on melko yleistä antaa pisteitä erilaisista toiminnoista, kuten vihollisaluksen tuhoamisesta tai esineiden keräämisestä, jotka putoavat, kun ne tuhotaan.
- **Tason suorittaminen**: Tämä voi sisältää useita ehtoja, kuten `X` vihollisaluksen tuhoaminen, `Y` pisteiden kerääminen tai ehkä tietyn esineen kerääminen.

## Pelin uudelleenkäynnistystoiminnon toteuttaminen

Hyvät pelit kannustavat uudelleenpelattavuuteen sujuvien uudelleenkäynnistysmekanismien avulla. Kun pelaajat suorittavat pelin (tai häviävät), he haluavat usein yrittää uudelleen heti – joko parantaakseen pisteitään tai suoritustaan.

Tetris on tästä täydellinen esimerkki: kun palikat saavuttavat huipun, voit aloittaa uuden pelin välittömästi ilman monimutkaisia valikoita. Rakennamme vastaavan uudelleenkäynnistysjärjestelmän, joka puhdistaa pelitilan ja palauttaa pelaajat nopeasti toimintaan.

✅ **Pohdinta**: Mieti pelejä, joita olet pelannut. Millä ehdoilla ne päättyvät, ja miten sinua kehotetaan aloittamaan uudelleen? Mikä tekee uudelleenkäynnistyskokemuksesta sujuvan tai turhauttavan?

## Mitä rakennat

Toteutat viimeiset ominaisuudet, jotka muuttavat projektisi täydelliseksi peliksi. Nämä elementit erottavat viimeistellyt pelit perusprototyypeistä.

**Tänään lisäämme seuraavat:**

1. **Voittoehto**: Tuhot kaikki viholliset ja saat ansaitun juhlan!
2. **Häviöehto**: Menetät kaikki elämät ja kohtaat tappion ruudulla
3. **Uudelleenkäynnistysmekanismi**: Paina Enter ja hyppää takaisin peliin – yksi peli ei koskaan riitä
4. **Tilanhallinta**: Puhdas alku joka kerta – ei jäljelle jääneitä vihollisia tai outoja häiriöitä edellisestä pelistä

## Aloittaminen

Valmista kehitysympäristösi. Sinulla pitäisi olla kaikki aiemmista oppitunneista peräisin olevat avaruuspelitiedostot valmiina.

**Projektisi pitäisi näyttää suunnilleen tältä:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Käynnistä kehityspalvelin:**

```bash
cd your-work
npm start
```

**Tämä komento:**
- Käynnistää paikallisen palvelimen osoitteessa `http://localhost:5000`
- Palvelee tiedostosi oikein
- Päivittää automaattisesti, kun teet muutoksia

Avaa `http://localhost:5000` selaimessasi ja varmista, että pelisi toimii. Sinun pitäisi pystyä liikkumaan, ampumaan ja vuorovaikuttamaan vihollisten kanssa. Kun tämä on vahvistettu, voimme siirtyä toteutukseen.

> 💡 **Vinkki**: Välttääksesi varoitukset Visual Studio Codessa, määritä `gameLoopId` tiedostosi yläosassa `let gameLoopId;` sen sijaan, että määrittäisit sen `window.onload`-funktion sisällä. Tämä noudattaa modernin JavaScriptin muuttujien määrittelykäytäntöjä.

## Toteutusvaiheet

### Vaihe 1: Luo loppuehtojen seuranta

Tarvitsemme funktioita, jotka seuraavat, milloin pelin pitäisi päättyä. Kuten kansainvälisen avaruusaseman sensorit, jotka jatkuvasti tarkkailevat kriittisiä järjestelmiä, nämä funktiot tarkistavat jatkuvasti pelitilaa.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Mitä tapahtuu kulissien takana:**
- **Tarkistaa**, onko sankarimme menettänyt kaikki elämänsä (auts!)
- **Laskee**, kuinka monta vihollista on vielä elossa ja toiminnassa
- **Palauttaa** `true`, kun taistelukenttä on tyhjä vihollisista
- **Käyttää** yksinkertaista true/false-logiikkaa pitääkseen asiat selkeinä
- **Suodattaa** kaikki pelin objektit löytääkseen selviytyjät

### Vaihe 2: Päivitä tapahtumakäsittelijät loppuehtoja varten

Nyt yhdistämme nämä ehtotarkistukset pelin tapahtumajärjestelmään. Joka kerta, kun törmäys tapahtuu, peli arvioi, laukaiseeko se loppuehdon. Tämä luo välitöntä palautetta kriittisille pelitapahtumille.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Mitä tässä tapahtuu:**
- **Laser osuu viholliseen**: Molemmat katoavat, saat pisteitä, ja tarkistamme, oletko voittanut
- **Vihollinen osuu sinuun**: Menetät elämän, ja tarkistamme, oletko vielä hengissä
- **Älykäs järjestys**: Tarkistamme ensin tappion (kukapa haluaisi voittaa ja hävitä samaan aikaan!)
- **Välittömät reaktiot**: Heti kun jotain tärkeää tapahtuu, peli tietää siitä

### Vaihe 3: Lisää uusia viestivakioita

Sinun täytyy lisätä uusia viestityyppejä `Messages`-vakio-objektiisi. Nämä vakiot auttavat ylläpitämään johdonmukaisuutta ja estämään kirjoitusvirheitä tapahtumajärjestelmässäsi.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Yllä olemme:**
- **Lisänneet** vakiot pelin lopputapahtumille johdonmukaisuuden ylläpitämiseksi
- **Käyttäneet** kuvailevia nimiä, jotka selkeästi ilmaisevat tapahtuman tarkoituksen
- **Noudattaneet** olemassa olevaa viestityyppien nimeämiskäytäntöä

### Vaihe 4: Toteuta uudelleenkäynnistyksen ohjaimet

Nyt lisäät näppäimistöohjaimet, joiden avulla pelaajat voivat käynnistää pelin uudelleen. Enter-näppäin on luonnollinen valinta, koska se yhdistetään usein toiminnan vahvistamiseen ja uusien pelien aloittamiseen.

**Lisää Enter-näppäimen tunnistus olemassa olevaan keydown-tapahtumankuuntelijaasi:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Lisää uusi viestivakio:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Mitä sinun tulee tietää:**
- **Laajentaa** olemassa olevaa näppäimistötapahtumien käsittelyjärjestelmää
- **Käyttää** Enter-näppäintä uudelleenkäynnistyksen laukaisijana intuitiivisen käyttäjäkokemuksen vuoksi
- **Lähettää** mukautetun tapahtuman, jota pelin muut osat voivat kuunnella
- **Ylläpitää** samaa kaavaa kuin muut näppäimistöohjaimet

### Vaihe 5: Luo viestien näyttöjärjestelmä

Pelisi tarvitsee selkeän tavan viestiä pelaajille tuloksista. Luomme viestijärjestelmän, joka näyttää voitto- ja tappiotilat värikoodatulla tekstillä, kuten varhaisten tietokonejärjestelmien terminaaliliittymissä, joissa vihreä tarkoitti onnistumista ja punainen virheitä.

**Luo `displayMessage()`-funktio:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Askel askeleelta, tässä tapahtuu:**
- **Asettaa** fonttikoon ja -tyypin selkeän ja luettavan tekstin varmistamiseksi
- **Käyttää** väriparametria, jossa "punainen" on oletusvaroitusväri
- **Keskittää** tekstin vaakasuunnassa ja pystysuunnassa kankaalle
- **Hyödyntää** modernia JavaScriptin oletusparametrien käyttöä joustavien värivaihtoehtojen tarjoamiseksi
- **Käyttää** canvasin 2D-kontekstia suoraan tekstin renderöintiin

**Luo `endGame()`-funktio:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Mitä tämä funktio tekee:**
- **Pysäyttää** kaiken paikoilleen – ei enää liikkuvia aluksia tai lasereita
- **Ottaa** pienen tauon (200ms), jotta viimeinen ruutu ehtii piirtyä
- **Pyyhkii** ruudun puhtaaksi ja maalaa sen mustaksi dramaattisen vaikutuksen vuoksi
- **Näyttää** eri viestit voittajille ja häviäjille
- **Värikoodaa** uutiset – vihreä hyvästä, punainen... no, ei niin hyvästä
- **Kertoo** pelaajille, miten hypätä takaisin peliin

### Vaihe 6: Toteuta pelin nollaus

Nollausjärjestelmän täytyy puhdistaa nykyinen pelitila kokonaan ja käynnistää uusi pelisessio. Tämä varmistaa, että pelaajat saavat puhtaan alun ilman edellisen pelin jäänteitä.

**Luo `resetGame()`-funktio:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Ymmärretään jokainen osa:**
- **Tarkistaa**, onko pelisilmukka käynnissä ennen nollausta
- **Tyhjentää** olemassa olevan pelisilmukan pysäyttääkseen kaiken nykyisen pelitoiminnan
- **Poistaa** kaikki tapahtumankuuntelijat muistivuotojen estämiseksi
- **Alustaa** pelitilan uusilla objekteilla ja muuttujilla
- **Käynnistää** uuden pelisilmukan kaikilla olennaisilla pelitoiminnoilla
- **Ylläpitää** samaa 100ms väliä pelin suorituskyvyn johdonmukaisuuden vuoksi

**Lisää Enter-näppäimen tapahtumankäsittelijä `initGame()`-funktioosi:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Lisää `clear()`-metodi EventEmitter-luokkaasi:**

```javascript
clear() {
  this.listeners = {};
}
```

**Tärkeät kohdat muistaa:**
- **Yhdistää** Enter-näppäimen painalluksen pelin nollausominaisuuteen
- **Rekisteröi** tämän tapahtumankuuntelijan pelin alustuksen aikana
- **Tarjoaa** selkeän tavan poistaa kaikki tapahtumankuuntelijat pelien välillä
- **Estää** muistivuodot tyhjentämällä tapahtumankäsittelijät pelien välillä
- **Nollaa** kuuntelijaobjektin tyhjään tilaan uutta aloitusta varten

## Onnittelut! 🎉

👽 💥 🚀 Olet onnistuneesti rakentanut täydellisen pelin alusta alkaen. Kuten 1970-luvun ensimmäisten videopelien ohjelmoijat, olet muuttanut koodirivejä interaktiiviseksi kokemukseksi, jossa on kunnolliset pelimekaniikat ja käyttäjäpalautteet. 🚀 💥 👽

**Olet saavuttanut:**
- **Toteuttanut** täydelliset voitto- ja häviöehdot käyttäjäpalautteella
- **Luonut** saumattoman uudelleenkäynnistysjärjestelmän jatkuvaa pelattavuutta varten
- **Suunnitellut** selkeän visuaalisen viestinnän pelitiloille
- **Hallinnut** monimutkaisia pelitilan siirtymiä ja siivousta
- **Koonnut** kaikki komponentit yhtenäiseksi, pelattavaksi peliksi

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Paranna avaruuspeliä toteuttamalla tasojärjestelmä, jossa vaikeustaso kasvaa ja lisäominaisuuksia lisätään.

**Tehtävä:** Luo monitasoinen avaruuspeli, jossa jokaisella tasolla on enemmän vihollisaluksia, joilla on suurempi nopeus ja kestävyys. Lisää pistekerroin, joka kasvaa jokaisella tasolla, ja toteuta voimaesineitä (kuten nopea ampuminen tai suojakilpi), jotka ilmestyvät satunnaisesti, kun viholliset tuhoutuvat. Sisällytä tason suoritusbonus ja näytä nykyinen taso ruudulla olemassa olevien pisteiden ja elämien rinnalla.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) täällä.

## 🚀 Valinnainen parannushaaste

**Lisää ääni peliisi**: Paranna pelin kokemusta toteuttamalla äänitehosteita! Harkitse äänen lisäämistä seuraaviin:

- **Laserin laukaukset**, kun pelaaja ampuu
- **Vihollisen tuhoaminen**, kun alukset osuvat
- **Sankarin vahingoittuminen**, kun pelaaja saa osuman
- **Voittomusiikki**, kun peli voitetaan
- **Tappioääni**, kun peli hävitään

**Äänitoteutuksen esimerkki:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Mitä sinun tulee tietää:**
- **Luo** Audio-objekteja eri äänitehosteille
- **Nollaa** `currentTime`-arvon, jotta äänitehosteet voidaan toistaa nopeasti peräkkäin
- **Käsittelee** selaimen automaattisen toiston käytäntöjä käynnistämällä äänet käyttäjän vuorovaikutuksesta
- **Hallinnoi** äänenvoimakkuutta ja ajoitusta paremman pelikokemuksen saavuttamiseksi

> 💡 **Oppimisresurssi**: Tutustu tähän [audiohiekkalaatikkoon](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) oppiaksesi lisää äänen toteuttamisesta JavaScript-peleissä.

## Jälki-luennon kysely

[Jälki-luennon kysely](https://ff-quizzes.netlify.app/web/quiz/40)

## Kertaus ja itseopiskelu

Tehtäväsi on luoda uusi näytepeli, joten tutustu joihinkin mielenkiintoisiin peleihin nähdäksesi, millaisen pelin voisit rakentaa.

## Tehtävä

[Rakenna näytepeli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.