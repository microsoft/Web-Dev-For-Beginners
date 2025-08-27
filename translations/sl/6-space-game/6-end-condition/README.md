<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:33:20+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 6. del: Konec in ponovni začetek

## Predhodni kviz

[Predhodni kviz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Obstajajo različni načini, kako izraziti *konec igre*. Kot ustvarjalec igre se odločite, zakaj se igra konča. Tukaj je nekaj razlogov, če predpostavimo, da govorimo o vesoljski igri, ki ste jo do zdaj gradili:

- **Uničenih je `N` sovražnih ladij**: Pogosto je v igrah, ki so razdeljene na različne nivoje, potrebno uničiti `N` sovražnih ladij, da dokončate nivo.
- **Vaša ladja je uničena**: Obstajajo igre, kjer izgubite, če je vaša ladja uničena. Pogost pristop je tudi koncept življenj. Vsakič, ko je vaša ladja uničena, izgubite eno življenje. Ko so vsa življenja izgubljena, izgubite igro.
- **Zbrali ste `N` točk**: Pogost pogoj za konec igre je zbiranje točk. Kako pridobite točke, je odvisno od vas, vendar je pogosto, da točke dodelite različnim dejavnostim, kot je uničenje sovražne ladje ali zbiranje predmetov, ki jih sovražniki *izpustijo*, ko so uničeni.
- **Dokončanje nivoja**: To lahko vključuje več pogojev, kot so uničenje `X` sovražnih ladij, zbiranje `Y` točk ali morda zbiranje določenega predmeta.

## Ponovni začetek

Če ljudje uživajo v vaši igri, bodo verjetno želeli igrati znova. Ko se igra konča, ne glede na razlog, bi morali ponuditi možnost za ponovni začetek.

✅ Razmislite, pod kakšnimi pogoji se igra konča in kako vas igra pozove k ponovnemu začetku.

## Kaj boste zgradili

Dodali boste naslednja pravila v svojo igro:

1. **Zmagovanje igre**. Ko so vse sovražne ladje uničene, zmagate. Poleg tega prikažite sporočilo o zmagi.
1. **Ponovni začetek**. Ko izgubite vsa življenja ali zmagate v igri, bi morali ponuditi možnost za ponovni začetek. Ne pozabite! Ponovno boste morali inicializirati igro, pri čemer se mora prejšnje stanje igre izbrisati.

## Priporočeni koraki

Poiščite datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Vsebujejo naslednje:

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

Svoj projekt začnete v mapi `your_work` z vnosom:

```bash
cd your-work
npm start
```

Zgornji ukaz bo zagnal HTTP strežnik na naslovu `http://localhost:5000`. Odprite brskalnik in vnesite ta naslov. Vaša igra bi morala biti v stanju, ki ga je mogoče igrati.

> nasvet: da se izognete opozorilom v Visual Studio Code, uredite funkcijo `window.onload`, da pokliče `gameLoopId` takšno, kot je (brez `let`), in deklarirajte `gameLoopId` na vrhu datoteke, ločeno: `let gameLoopId;`

### Dodajte kodo

1. **Spremljajte pogoje za konec igre**. Dodajte kodo, ki spremlja število sovražnikov ali če je junakova ladja uničena, z dodajanjem teh dveh funkcij:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Dodajte logiko obdelovalcem sporočil**. Uredite `eventEmitter`, da obravnava te pogoje:

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

1. **Dodajte nove vrste sporočil**. Dodajte ta sporočila v objekt constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Dodajte kodo za ponovni začetek**. Dodajte kodo, ki omogoča ponovni začetek igre ob pritisku izbrane tipke.

   1. **Poslušajte pritisk tipke `Enter`**. Uredite `eventListener` okna, da posluša ta pritisk:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Dodajte sporočilo za ponovni začetek**. Dodajte to sporočilo v constants Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementirajte pravila igre**. Implementirajte naslednja pravila igre:

   1. **Pogoj za zmago igralca**. Ko so vse sovražne ladje uničene, prikažite sporočilo o zmagi.

      1. Najprej ustvarite funkcijo `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Ustvarite funkcijo `endGame()`:

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

   1. **Logika za ponovni začetek**. Ko so vsa življenja izgubljena ali igralec zmaga, prikažite, da je mogoče igro ponovno začeti. Poleg tega ponovno zaženite igro, ko pritisnete tipko za ponovni začetek (lahko sami določite, katera tipka bo dodeljena za ponovni začetek).

      1. Ustvarite funkcijo `resetGame()`:

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

     1. Dodajte klic na `eventEmitter` za ponovni začetek igre v `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Dodajte funkcijo `clear()` v EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Čestitke, kapitan! Vaša igra je končana! Odlično opravljeno! 🚀 💥 👽

---

## 🚀 Izziv

Dodajte zvok! Ali lahko dodate zvok, da izboljšate igranje, morda ob zadetku z laserjem, smrti junaka ali zmagi? Oglejte si ta [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), da se naučite, kako predvajati zvok z uporabo JavaScripta.

## Zaključni kviz

[Zaključni kviz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Pregled in samostojno učenje

Vaša naloga je ustvariti novo vzorčno igro, zato raziščite nekaj zanimivih iger, da vidite, kakšno igro bi lahko ustvarili.

## Naloga

[Zgradite vzorčno igro](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna napačna razumevanja ali napačne interpretacije, ki bi nastale zaradi uporabe tega prevoda.