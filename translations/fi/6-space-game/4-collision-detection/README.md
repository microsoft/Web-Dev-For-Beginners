<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T00:41:40+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli osa 4: Lisää laser ja tunnista törmäykset

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/35)

Ajattele Star Wars -elokuvan hetkeä, kun Luken protonitorpedot osuivat Kuolemantähden pakoputkeen. Juuri tuo tarkka törmäyksen tunnistus muutti galaksin kohtalon! Peleissä törmäyksen tunnistus toimii samalla tavalla – se määrittää, milloin objektit ovat vuorovaikutuksessa ja mitä tapahtuu seuraavaksi.

Tässä oppitunnissa lisäät laseraseet avaruuspeliisi ja toteutat törmäyksen tunnistuksen. Aivan kuten NASAn tehtäväsuunnittelijat laskevat avaruusalusten reittejä välttääkseen avaruusromun, opit tunnistamaan, milloin pelin objektit leikkaavat toisensa. Pilkomme tämän hallittaviin osiin, jotka rakentuvat toistensa päälle.

Lopuksi sinulla on toimiva taistelujärjestelmä, jossa laserit tuhoavat vihollisia ja törmäykset käynnistävät pelitapahtumia. Samoja törmäyksen tunnistusperiaatteita käytetään kaikkeen fysiikkasimulaatioista interaktiivisiin verkkokäyttöliittymiin.

✅ Tee hieman tutkimusta ensimmäisestä koskaan kirjoitetusta tietokonepelistä. Mitä toiminnallisuuksia siinä oli?

## Törmäyksen tunnistus

Törmäyksen tunnistus toimii kuin Apollo-kuumoduulin läheisyysanturit – se tarkistaa jatkuvasti etäisyyksiä ja antaa hälytyksiä, kun objektit tulevat liian lähelle. Peleissä tämä järjestelmä määrittää, milloin objektit ovat vuorovaikutuksessa ja mitä pitäisi tapahtua seuraavaksi.

Käyttämämme lähestymistapa käsittelee jokaista peliobjektia suorakulmiona, aivan kuten lennonjohtojärjestelmät käyttävät yksinkertaistettuja geometrisia muotoja lentokoneiden seuraamiseen. Tämä suorakulmainen menetelmä saattaa vaikuttaa yksinkertaiselta, mutta se on laskennallisesti tehokas ja toimii hyvin useimmissa pelitilanteissa.

### Suorakulmion määrittely

Jokaisella peliobjektilla on oltava koordinaattirajat, aivan kuten Mars Pathfinder -mönkijä kartoitti sijaintinsa Marsin pinnalla. Näin määrittelemme nämä rajakoordinaatit:

```javascript
rectFromGameObject() {
  return {
    top: this.y,
    left: this.x,
    bottom: this.y + this.height,
    right: this.x + this.width
  }
}
```

**Puretaan tämä osiin:**
- **Yläreuna**: Se on vain objektin pystysuuntainen aloituskohta (sen y-sijainti)
- **Vasemmassa reunassa**: Missä se alkaa vaakasuunnassa (sen x-sijainti)
- **Alareuna**: Lisää korkeus y-sijaintiin – nyt tiedät, mihin se päättyy!
- **Oikea reuna**: Lisää leveys x-sijaintiin – ja sinulla on täydelliset rajat.

### Leikkausalgoritmi

Suorakulmion leikkausten tunnistaminen käyttää logiikkaa, joka on samanlainen kuin Hubble-avaruusteleskoopin tapa määrittää, ovatko taivaankappaleet päällekkäin sen näkökentässä. Algoritmi tarkistaa erottelun:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Erottelutesti toimii kuin tutkajärjestelmät:**
- Onko suorakulmio 2 kokonaan suorakulmion 1 oikealla puolella?
- Onko suorakulmio 2 kokonaan suorakulmion 1 vasemmalla puolella?
- Onko suorakulmio 2 kokonaan suorakulmion 1 alapuolella?
- Onko suorakulmio 2 kokonaan suorakulmion 1 yläpuolella?

Jos mikään näistä ehdoista ei ole totta, suorakulmiot ovat päällekkäin. Tämä lähestymistapa muistuttaa sitä, miten tutkaoperaattorit määrittävät, ovatko kaksi lentokonetta turvallisella etäisyydellä toisistaan.

## Objektien elinkaaren hallinta

Kun laser osuu viholliseen, molemmat objektit on poistettava pelistä. Objektien poistaminen kesken silmukan voi kuitenkin aiheuttaa kaatumisia – oppitunti, joka opittiin kantapään kautta varhaisissa tietokonejärjestelmissä, kuten Apollo Guidance Computerissa. Sen sijaan käytämme "merkitse poistettavaksi" -lähestymistapaa, joka poistaa objektit turvallisesti ruutujen välillä.

Näin merkitsemme jotain poistettavaksi:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Miksi tämä lähestymistapa toimii:**
- Merkitsemme objektin "kuolleeksi", mutta emme poista sitä heti
- Tämä antaa nykyisen peliruudun valmistua turvallisesti
- Ei kaatumisia, kun yritetään käyttää jotain, joka on jo poistettu!

Sitten suodatamme merkityt objektit ennen seuraavaa renderöintikierrosta:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Mitä tämä suodatus tekee:**
- Luo uuden listan, jossa on vain "elävät" objektit
- Poistaa kaiken, mikä on merkitty kuolleeksi
- Pitää pelin sujuvana
- Estää muistin täyttymisen tuhoutuneista objekteista

## Laserin mekaniikan toteuttaminen

Laserprojektiilit peleissä toimivat samalla periaatteella kuin Star Trekin fotonitorpedot – ne ovat erillisiä objekteja, jotka liikkuvat suoraviivaisesti, kunnes osuvat johonkin. Jokainen välilyöntinäppäimen painallus luo uuden laserobjektin, joka liikkuu ruudulla.

Tämän toteuttamiseksi meidän on koordinoitava muutamia eri osia:

**Keskeiset toteutettavat osat:**
- **Luo** laserobjekteja, jotka syntyvät sankarin sijainnista
- **Käsittele** näppäimistön syötteet laserin luomisen käynnistämiseksi
- **Hallinnoi** laserin liikettä ja elinkaarta
- **Toteuta** visuaalinen esitys laserprojektiileille

## Tulinopeuden hallinnan toteuttaminen

Rajoittamaton tulinopeus kuormittaisi pelimoottoria liikaa ja tekisi pelaamisesta liian helppoa. Todelliset asejärjestelmät kohtaavat samanlaisia rajoituksia – jopa USS Enterprisen faaserit tarvitsivat aikaa latautuakseen laukauksien välillä.

Toteutamme jäähdytysjärjestelmän, joka estää nopean tulituksen samalla kun säilyttää ohjainten reagoivuuden:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Miten jäähdytys toimii:**
- Luotaessa ase on "kuuma" (ei voi ampua vielä)
- Aikakatkaisun jälkeen se muuttuu "viileäksi" (valmis ampumaan)
- Ennen ampumista tarkistamme: "Onko ase viileä?"
- Tämä estää nopean klikkailun ja pitää ohjaimet reagoivina

✅ Palaa avaruuspelisarjan ensimmäiseen oppituntiin muistuttaaksesi itseäsi jäähdytyksistä.

## Törmäysjärjestelmän rakentaminen

Laajennat olemassa olevaa avaruuspelikoodiasi luodaksesi törmäyksen tunnistusjärjestelmän. Kuten Kansainvälisen avaruusaseman automatisoitu törmäyksen välttämisjärjestelmä, pelisi seuraa jatkuvasti objektien sijainteja ja reagoi leikkauksiin.

Aloittaen edellisen oppitunnin koodista, lisäät törmäyksen tunnistuksen erityisillä säännöillä, jotka ohjaavat objektien vuorovaikutusta.

> 💡 **Vinkki**: Laser-sprite on jo mukana omaisuuskansiossasi ja viitattu koodissasi, valmiina toteutettavaksi.

### Toteutettavat törmäyssäännöt

**Lisättävät pelimekaniikat:**
1. **Laser osuu viholliseen**: Vihollisobjekti tuhoutuu, kun laserprojektiili osuu siihen
2. **Laser osuu ruudun rajaan**: Laser poistetaan, kun se saavuttaa ruudun yläreunan
3. **Vihollinen ja sankari törmäävät**: Molemmat objektit tuhoutuvat, kun ne leikkaavat toisensa
4. **Vihollinen saavuttaa alareunan**: Pelin loppumistila, kun viholliset saavuttavat ruudun alareunan

## Kehitysympäristön asettaminen

Hyviä uutisia – olemme jo valmistelleet suurimman osan pohjatyöstä sinulle! Kaikki pelin omaisuudet ja perusrakenne odottavat sinua `your-work`-alikansiossa, valmiina lisättäväksi siisteihin törmäystoimintoihin.

### Projektin rakenne

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Tiedostorakenteen ymmärtäminen:**
- **Sisältää** kaikki pelin objektien tarvitsemat sprite-kuvat
- **Sisältää** pääasiallisen HTML-dokumentin ja JavaScript-sovellustiedoston
- **Tarjoaa** pakettikonfiguraation paikalliselle kehityspalvelimelle

### Kehityspalvelimen käynnistäminen

Siirry projektikansioosi ja käynnistä paikallinen palvelin:

```bash
cd your-work
npm start
```

**Tämä komentosekvenssi:**
- **Siirtyy** työprojektikansioon
- **Käynnistää** paikallisen HTTP-palvelimen osoitteessa `http://localhost:5000`
- **Palvelee** pelitiedostosi testaukseen ja kehitykseen
- **Mahdollistaa** live-kehityksen automaattisella päivityksellä

Avaa selaimesi ja siirry osoitteeseen `http://localhost:5000` nähdäksesi nykyisen pelitilasi, jossa sankari ja viholliset on renderöity ruudulle.

### Toteutuksen vaiheittainen eteneminen

Kuten systemaattinen lähestymistapa, jota NASA käytti Voyager-avaruusaluksen ohjelmointiin, toteutamme törmäyksen tunnistuksen metodisesti, rakentaen jokaisen komponentin vaihe vaiheelta.

#### 1. Lisää suorakulmion törmäysrajat

Ensiksi opetetaan peliobjekteille, miten ne kuvaavat rajansa. Lisää tämä metodi `GameObject`-luokkaasi:

```javascript
rectFromGameObject() {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
  }
```

**Tämä metodi tekee:**
- **Luo** suorakulmio-objektin tarkkojen rajakoordinaattien kanssa
- **Laskee** alareunan ja oikean reunan sijainnin lisäämällä mitat
- **Palauttaa** objektin, joka on valmis törmäyksen tunnistusalgoritmeille
- **Tarjoaa** standardoidun rajapinnan kaikille peliobjekteille

#### 2. Toteuta leikkausten tunnistus

Nyt luodaan törmäysten tunnistaja – funktio, joka osaa kertoa, milloin kaksi suorakulmiota ovat päällekkäin:

```javascript
function intersectRect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}
```

**Tämä algoritmi toimii:**
- **Testaa** neljä erotteluehtoa suorakulmioiden välillä
- **Palauttaa** `false`, jos jokin erotteluehto on totta
- **Ilmaisee** törmäyksen, kun erottelua ei ole
- **Käyttää** negatiivista logiikkaa tehokkaaseen leikkausten testaukseen

#### 3. Toteuta laserin ampumisjärjestelmä

Nyt asiat muuttuvat jännittäviksi! Luodaan laserin ampumisjärjestelmä.

##### Viestikonstantit

Määritellään ensin joitain viestityyppejä, jotta pelin eri osat voivat kommunikoida keskenään:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Nämä konstantit tarjoavat:**
- **Standardoi** tapahtumien nimet koko sovelluksessa
- **Mahdollistaa** johdonmukaisen viestinnän pelijärjestelmien välillä
- **Estää** kirjoitusvirheet tapahtumankäsittelijöiden rekisteröinnissä

##### Näppäimistön syötteen käsittely

Lisää välilyöntinäppäimen tunnistus näppäintapahtumien kuuntelijaan:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Tämä syötteen käsittelijä:**
- **Tunnistaa** välilyöntinäppäimen painallukset käyttämällä keyCode 32
- **Lähettää** standardoidun tapahtumaviestin
- **Mahdollistaa** irrotetun ampumislogiikan

##### Tapahtumankuuntelijan asettaminen

Rekisteröi ampumiskäyttäytyminen `initGame()`-funktiossasi:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Tämä tapahtumankuuntelija:**
- **Reagoi** välilyöntinäppäimen tapahtumiin
- **Tarkistaa** ampumisen jäähdytysajan tilan
- **Käynnistää** laserin luomisen, kun se on sallittua

Lisää törmäyksen käsittely laser-vihollinen vuorovaikutuksille:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Tämä törmäyksen käsittelijä:**
- **Vastaanottaa** törmäystapahtuman tiedot molemmista objekteista
- **Merkitsee** molemmat objektit poistettaviksi
- **Varmistaa** asianmukaisen siivouksen törmäyksen jälkeen

#### 4. Luo Laser-luokka

Toteuta laserprojektiili, joka liikkuu ylöspäin ja hallitsee omaa elinkaartaan:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Tämä luokan toteutus:**
- **Laajentaa** GameObject-luokkaa perien perustoiminnallisuuden
- **Asettaa** sopivat mitat laser-sprite-kuvalle
- **Luo** automaattisen ylöspäin liikkeen käyttämällä `setInterval()`
- **Käsittelee** itsensä tuhoamisen, kun se saavuttaa ruudun yläreunan
- **Hallinnoi** omaa animaatioaikatauluaan ja siivousta

#### 5. Toteuta törmäyksen tunnistusjärjestelmä

Luo kattava törmäyksen tunnistusfunktio:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Tämä törmäysjärjestelmä:**
- **Suodattaa** peliobjektit tyypin mukaan tehokasta testausta varten
- **Testaa** jokaisen laserin ja vihollisen leikkaukset
- **Lähettää** törmäystapahtumia, kun leikkauksia havaitaan
- **Siivoaa** tuhoutuneet objektit törmäyskäsittelyn jälkeen

> ⚠️ **Tärkeää**: Lisää `updateGameObjects()` pääpelisilmukkaasi `window.onload`-kohdassa aktivoidaksesi törmäyksen tunnistuksen.

#### 6. Lisää jäähdytysjärjestelmä Hero-luokkaan

Paranna Hero-luokkaa ampumismekaniikalla ja tulinopeuden rajoituksella:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.type = "Hero";
    this.speed = { x: 0, y: 0 };
    this.cooldown = 0;
  }
  
  fire() {
    gameObjects.push(new Laser(this.x + 45, this.y - 10));
    this.cooldown = 500;

    let id = setInterval(() => {
      if (this.cooldown > 0) {
        this.cooldown -= 100;
      } else {
        clearInterval(id);
      }
    }, 200);
  }
  
  canFire() {
    return this.cooldown === 0;
  }
}
```

**Parannetun Hero-luokan ymmärtäminen:**
- **Alustaa** jäähdytystimerin nollaan (valmis ampumaan)
- **Luo** laserobjekteja sankarialuksen yläpuolelle
- **Asettaa** jäähdytysajan estääkseen nopean ampumisen
- **Vähentää** jäähdytystimeriä intervallipohjaisilla päivityksillä
- **Tarjoaa** ampumistilan tarkistuksen `canFire()`-metodin kautta

### Toteutuksen testaus

Avaruuspeliisi on nyt lisätty täydellinen törmäyksen tunnistus ja taistelumekaniikka. 🚀 Testaa nämä uudet ominaisuudet:
- **Liiku** nuolinäppäimillä varmistaaksesi liikkeen hallinnan
- **Ammu lasereita** välilyöntinäppäimellä – huomaa, kuinka jäähdytys estää nopean klikkailun
- **Tarkkaile törmäyksiä**, kun laserit osuvat vihollisiin ja käynnistävät poistamisen
- **Varmista siivous**, kun tuhoutuneet objektit katoavat pelistä

Olet onnistuneesti toteuttanut törmäyksen tunnistusjärjestelmän käyttäen samoja matemaattisia periaatteita, jotka ohjaavat avaruusalusten navigointia ja robotiikkaa.

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Paranna törmäyksen tunnistusjärjestelmää toteuttamalla voimaesineitä, jotka syntyvät satunnaisesti ja tarjoavat väliaikaisia kykyjä, kun sankarialus kerää ne.

**Tehtävä:** Luo PowerUp-luokka, joka laajentaa GameObject-luokkaa, ja toteuta törmäyksen tunnistus sankarin ja voimaesineiden välillä. Lisää vähintään kaksi voimaesinetyyppiä: yksi, joka lisää tulinopeutta (vähentää jäähdytystä), ja toinen, joka luo väliaikaisen suojan. Sisällytä syntymislogiikka, joka luo voimaesineitä satunnaisin väliajoin ja paikoissa.

---



## 🚀 Haaste

Lisää räjähdys! Katso pelin omaisuuksia [Space Art -repo](../../../../6-space-game/solution/spaceArt/readme.txt) ja yritä lisätä

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.