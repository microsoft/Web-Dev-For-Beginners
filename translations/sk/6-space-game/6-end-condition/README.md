<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T11:12:07+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 6: Koniec a reštart

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/39)

Existuje mnoho spôsobov, ako vyjadriť *podmienku konca* v hre. Je na vás ako tvorcovi hry, aby ste určili, prečo hra skončila. Tu sú niektoré dôvody, ak predpokladáme, že hovoríme o vesmírnej hre, ktorú ste doteraz vytvárali:

- **Zničených `N` nepriateľských lodí**: Je bežné, že ak rozdelíte hru na rôzne úrovne, musíte zničiť `N` nepriateľských lodí, aby ste dokončili úroveň.
- **Vaša loď bola zničená**: Existujú hry, kde prehráte, ak je vaša loď zničená. Ďalším bežným prístupom je koncept životov. Každý raz, keď je vaša loď zničená, odpočíta sa jeden život. Ak stratíte všetky životy, prehráte hru.
- **Nazbierali ste `N` bodov**: Ďalšou bežnou podmienkou konca je nazbieranie bodov. Ako získavate body, je na vás, ale je bežné priradiť body k rôznym aktivitám, ako je zničenie nepriateľskej lode alebo zbieranie predmetov, ktoré sa *objavia*, keď sú zničené.
- **Dokončenie úrovne**: To môže zahŕňať niekoľko podmienok, ako napríklad zničenie `X` nepriateľských lodí, nazbieranie `Y` bodov alebo možno získanie konkrétneho predmetu.

## Reštartovanie

Ak sa ľuďom vaša hra páči, pravdepodobne ju budú chcieť hrať znova. Keď hra skončí z akéhokoľvek dôvodu, mali by ste ponúknuť možnosť reštartovať.

✅ Zamyslite sa nad tým, za akých podmienok hra končí, a ako ste vyzvaní na jej reštartovanie.

## Čo vytvoriť

Do svojej hry pridáte tieto pravidlá:

1. **Víťazstvo v hre**. Keď sú všetky nepriateľské lode zničené, vyhrávate hru. Navyše zobrazte nejakú formu víťaznej správy.
1. **Reštart**. Keď stratíte všetky životy alebo vyhráte hru, mali by ste ponúknuť možnosť reštartovať hru. Pamätajte! Budete musieť inicializovať hru nanovo a vymazať predchádzajúci stav hry.

## Odporúčané kroky

Vyhľadajte súbory, ktoré boli pre vás vytvorené v podpriečinku `your-work`. Mali by obsahovať nasledujúce:

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

Spustite svoj projekt v priečinku `your_work` zadaním:

```bash
cd your-work
npm start
```

Vyššie uvedené spustí HTTP server na adrese `http://localhost:5000`. Otvorte prehliadač a zadajte túto adresu. Vaša hra by mala byť v hrateľnom stave.

> tip: aby ste sa vyhli varovaniam vo Visual Studio Code, upravte funkciu `window.onload`, aby volala `gameLoopId` tak, ako je (bez `let`), a deklarujte premennú `gameLoopId` na začiatku súboru nezávisle: `let gameLoopId;`

### Pridanie kódu

1. **Sledovanie podmienky konca**. Pridajte kód, ktorý sleduje počet nepriateľov alebo či bola hrdinská loď zničená, pridaním týchto dvoch funkcií:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Pridanie logiky do spracovania správ**. Upraviť `eventEmitter`, aby spracovával tieto podmienky:

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

1. **Pridanie nových typov správ**. Pridajte tieto správy do objektu constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Pridanie kódu na reštart**. Pridajte kód, ktorý reštartuje hru po stlačení vybraného tlačidla.

   1. **Počúvanie stlačenia klávesu `Enter`**. Upraviť eventListener okna, aby počúval toto stlačenie:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Pridanie správy o reštarte**. Pridajte túto správu do constants Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementácia pravidiel hry**. Implementujte nasledujúce pravidlá hry:

   1. **Podmienka víťazstva hráča**. Keď sú všetky nepriateľské lode zničené, zobrazte víťaznú správu.

      1. Najskôr vytvorte funkciu `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Vytvorte funkciu `endGame()`:

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

   1. **Logika reštartu**. Keď sú všetky životy stratené alebo hráč vyhral hru, zobrazte, že hru je možné reštartovať. Navyše reštartujte hru, keď je stlačený *reštartovací* kláves (môžete rozhodnúť, ktorý kláves bude mapovaný na reštart).

      1. Vytvorte funkciu `resetGame()`:

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

     1. Pridajte volanie do `eventEmitter`, aby sa hra resetovala v `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Pridajte funkciu `clear()` do EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Gratulujeme, kapitán! Vaša hra je dokončená! Skvelá práca! 🚀 💥 👽

---

## 🚀 Výzva

Pridajte zvuk! Dokážete pridať zvuk na zlepšenie herného zážitku, napríklad pri zásahu laserom, smrti hrdinu alebo víťazstve? Pozrite si tento [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), aby ste sa naučili, ako prehrávať zvuk pomocou JavaScriptu.

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/40)

## Prehľad a samostatné štúdium

Vašou úlohou je vytvoriť novú ukážkovú hru, takže preskúmajte niektoré zaujímavé hry, aby ste zistili, aký typ hry by ste mohli vytvoriť.

## Úloha

[Vytvorte ukážkovú hru](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.