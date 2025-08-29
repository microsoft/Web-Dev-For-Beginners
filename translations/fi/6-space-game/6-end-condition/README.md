<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T00:41:55+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli Osa 6: Loppu ja uudelleenkäynnistys

## Esiluennon kysely

[Esiluennon kysely](https://ff-quizzes.netlify.app/web/quiz/39)

Pelissä on erilaisia tapoja ilmaista *lopetusehto*. Pelin luojana sinun tehtäväsi on määrittää, miksi peli päättyy. Tässä muutamia syitä, olettaen että puhumme avaruuspelistä, jota olet tähän mennessä rakentanut:

- **`N` Vihollisalusta on tuhottu**: On melko yleistä, että peli jaetaan eri tasoihin, joissa sinun täytyy tuhota `N` vihollisalusta päästäksesi tasosta läpi.
- **Aluksesi on tuhottu**: On olemassa pelejä, joissa häviät pelin, jos aluksesi tuhoutuu. Toinen yleinen lähestymistapa on elämien käsite. Joka kerta kun aluksesi tuhoutuu, menetät yhden elämän. Kun kaikki elämät on menetetty, peli päättyy.
- **Olet kerännyt `N` pistettä**: Toinen yleinen lopetusehto on pisteiden kerääminen. Miten pisteitä kerätään, on sinun päätettävissäsi, mutta on melko yleistä antaa pisteitä erilaisista toiminnoista, kuten vihollisaluksen tuhoamisesta tai esineiden keräämisestä, joita esineet *pudottavat* tuhoutessaan.
- **Tason suorittaminen**: Tämä voi sisältää useita ehtoja, kuten `X` vihollisalusta tuhottu, `Y` pistettä kerätty tai ehkä tietty esine on kerätty.

## Uudelleenkäynnistys

Jos ihmiset pitävät pelistäsi, he todennäköisesti haluavat pelata sitä uudelleen. Kun peli päättyy mistä tahansa syystä, sinun tulisi tarjota vaihtoehto aloittaa peli uudelleen.

✅ Mieti hetki, millä ehdoilla peli mielestäsi päättyy ja miten sinua kehotetaan käynnistämään peli uudelleen.

## Mitä rakentaa

Lisäät nämä säännöt peliisi:

1. **Pelin voittaminen**. Kun kaikki vihollisalukset on tuhottu, voitat pelin. Lisäksi näytä jonkinlainen voittoviesti.
1. **Uudelleenkäynnistys**. Kun kaikki elämäsi on menetetty tai peli on voitettu, sinun tulisi tarjota tapa käynnistää peli uudelleen. Muista! Sinun täytyy alustaa peli uudelleen ja tyhjentää edellinen pelitila.

## Suositellut vaiheet

Etsi tiedostot, jotka on luotu sinulle `your-work`-alikansiossa. Sen pitäisi sisältää seuraavat:

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

Aloitat projektisi `your_work`-kansiossa kirjoittamalla:

```bash
cd your-work
npm start
```

Yllä oleva käynnistää HTTP-palvelimen osoitteessa `http://localhost:5000`. Avaa selain ja syötä kyseinen osoite. Pelisi pitäisi olla pelattavassa tilassa.

> vinkki: välttääksesi varoituksia Visual Studio Codessa, muokkaa `window.onload`-funktiota kutsumaan `gameLoopId` sellaisenaan (ilman `let`-määrittelyä) ja määritä `gameLoopId` tiedoston yläosassa erikseen: `let gameLoopId;`

### Lisää koodia

1. **Seuraa lopetusehtoa**. Lisää koodia, joka seuraa vihollisten määrää tai sitä, onko sankarialus tuhottu, lisäämällä nämä kaksi funktiota:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Lisää logiikkaa viestinkäsittelijöihin**. Muokkaa `eventEmitter`-objektia käsittelemään näitä ehtoja:

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

1. **Lisää uusia viestityyppejä**. Lisää nämä viestit constants-objektiin:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Lisää uudelleenkäynnistyskoodi**, joka käynnistää pelin uudelleen valitun painikkeen painalluksella.

   1. **Kuuntele Enter-painallusta**. Muokkaa ikkunasi eventListeneria kuuntelemaan tätä painallusta:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Lisää uudelleenkäynnistysviesti**. Lisää tämä viesti Messages-constanttiin:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Toteuta pelisäännöt**. Toteuta seuraavat pelisäännöt:

   1. **Pelaajan voittamisehto**. Kun kaikki vihollisalukset on tuhottu, näytä voittoviesti.

      1. Luo ensin `displayMessage()`-funktio:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Luo `endGame()`-funktio:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
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

   1. **Uudelleenkäynnistyslogiikka**. Kun kaikki elämät on menetetty tai pelaaja on voittanut pelin, näytä, että peli voidaan käynnistää uudelleen. Lisäksi käynnistä peli uudelleen, kun *uudelleenkäynnistys*-näppäintä painetaan (voit päättää, mikä näppäin vastaa uudelleenkäynnistystä).

      1. Luo `resetGame()`-funktio:

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

     1. Lisää kutsu `eventEmitter`-objektiin pelin alustamisessa `initGame()`-funktiossa:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Lisää `clear()`-funktio EventEmitteriin:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Onnittelut, Kapteeni! Pelisi on valmis! Hyvin tehty! 🚀 💥 👽

---

## 🚀 Haaste

Lisää ääni! Voitko lisätä äänen parantaaksesi pelikokemusta, esimerkiksi kun laser osuu, sankari kuolee tai voittaa? Katso tämä [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) oppiaksesi, miten ääntä toistetaan JavaScriptillä.

## Jälkiluennon kysely

[Jälkiluennon kysely](https://ff-quizzes.netlify.app/web/quiz/40)

## Kertaus ja itseopiskelu

Tehtäväsi on luoda uusi näytepeli, joten tutki joitakin mielenkiintoisia pelejä nähdäksesi, millaisen pelin voisit rakentaa.

## Tehtävä

[Rakenna näytepeli](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.