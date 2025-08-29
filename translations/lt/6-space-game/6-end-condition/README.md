<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T16:52:18+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "lt"
}
-->
# Sukurkite kosminį žaidimą 6 dalis: Pabaiga ir paleidimas iš naujo

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/39)

Yra įvairių būdų išreikšti *žaidimo pabaigos sąlygą*. Jūs, kaip žaidimo kūrėjas, nusprendžiate, kodėl žaidimas baigiasi. Štai keletas priežasčių, jei kalbame apie kosminį žaidimą, kurį kūrėte iki šiol:

- **`N` Priešo laivų sunaikinta**: Dažnai žaidimas yra padalintas į lygius, kuriuose reikia sunaikinti `N` priešo laivų, kad užbaigtumėte lygį.
- **Jūsų laivas sunaikintas**: Yra žaidimų, kuriuose pralaimite, jei jūsų laivas sunaikinamas. Kitas dažnas požiūris yra gyvybių koncepcija. Kiekvieną kartą, kai jūsų laivas sunaikinamas, prarandate gyvybę. Kai visos gyvybės prarandamos, žaidimas baigiasi.
- **Surinkote `N` taškų**: Kita dažna pabaigos sąlyga yra taškų rinkimas. Kaip gaunate taškus, priklauso nuo jūsų, tačiau dažnai taškai priskiriami įvairioms veikloms, pvz., priešo laivo sunaikinimui arba daiktų rinkimui, kurie *iškrenta*, kai jie sunaikinami.
- **Užbaigėte lygį**: Tai gali apimti kelias sąlygas, tokias kaip `X` priešo laivų sunaikinta, `Y` taškų surinkta arba galbūt surinktas konkretus daiktas.

## Paleidimas iš naujo

Jei žmonėms patinka jūsų žaidimas, jie greičiausiai norės jį žaisti dar kartą. Kai žaidimas baigiasi dėl bet kokios priežasties, turėtumėte pasiūlyti galimybę jį paleisti iš naujo.

✅ Pagalvokite, kokiomis sąlygomis žaidimas baigiasi, ir kaip jums siūloma jį paleisti iš naujo.

## Ką sukurti

Jūs pridėsite šias taisykles į savo žaidimą:

1. **Žaidimo laimėjimas**. Kai visi priešo laivai sunaikinami, jūs laimite žaidimą. Be to, parodykite pergalės pranešimą.
1. **Paleidimas iš naujo**. Kai visos gyvybės prarandamos arba žaidimas laimimas, turėtumėte pasiūlyti būdą paleisti žaidimą iš naujo. Nepamirškite! Jums reikės iš naujo inicializuoti žaidimą ir išvalyti ankstesnę žaidimo būseną.

## Rekomenduojami žingsniai

Raskite failus, kurie buvo sukurti jums aplanke `your-work`. Jame turėtų būti:

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

Pradėkite savo projektą aplanke `your_work`, įvesdami:

```bash
cd your-work
npm start
```

Tai paleis HTTP serverį adresu `http://localhost:5000`. Atidarykite naršyklę ir įveskite šį adresą. Jūsų žaidimas turėtų būti paruoštas žaisti.

> patarimas: kad išvengtumėte įspėjimų Visual Studio Code, redaguokite funkciją `window.onload`, kad ji kviestų `gameLoopId` kaip yra (be `let`), ir deklaruokite `gameLoopId` failo viršuje, nepriklausomai: `let gameLoopId;`

### Pridėkite kodą

1. **Sekite pabaigos sąlygą**. Pridėkite kodą, kuris seka priešų skaičių arba ar herojaus laivas buvo sunaikintas, pridėdami šias dvi funkcijas:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Pridėkite logiką pranešimų tvarkytojams**. Redaguokite `eventEmitter`, kad tvarkytų šias sąlygas:

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

1. **Pridėkite naujų pranešimų tipų**. Pridėkite šiuos pranešimus į constants objektą:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Pridėkite kodą paleidimui iš naujo**. Pridėkite kodą, kuris paleidžia žaidimą iš naujo paspaudus pasirinktą mygtuką.

   1. **Klausykite klavišo paspaudimo `Enter`**. Redaguokite savo lango eventListener, kad klausytų šio paspaudimo:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Pridėkite paleidimo iš naujo pranešimą**. Pridėkite šį pranešimą į Messages constant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Įgyvendinkite žaidimo taisykles**. Įgyvendinkite šias žaidimo taisykles:

   1. **Žaidėjo laimėjimo sąlyga**. Kai visi priešo laivai sunaikinami, parodykite pergalės pranešimą.

      1. Pirmiausia sukurkite funkciją `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Sukurkite funkciją `endGame()`:

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

   1. **Paleidimo iš naujo logika**. Kai visos gyvybės prarandamos arba žaidėjas laimi žaidimą, parodykite, kad žaidimą galima paleisti iš naujo. Be to, paleiskite žaidimą iš naujo, kai paspaudžiamas *restart* klavišas (jūs galite nuspręsti, kuris klavišas bus priskirtas paleidimui iš naujo).

      1. Sukurkite funkciją `resetGame()`:

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

     1. Pridėkite skambutį į `eventEmitter`, kad iš naujo inicializuotų žaidimą funkcijoje `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Pridėkite funkciją `clear()` į EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Sveikiname, Kapitone! Jūsų žaidimas baigtas! Puikiai padirbėta! 🚀 💥 👽

---

## 🚀 Iššūkis

Pridėkite garsą! Ar galite pridėti garsą, kad pagerintumėte žaidimo patirtį, galbūt kai lazeris pataiko, arba kai herojus miršta ar laimi? Pažvelkite į šį [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), kad sužinotumėte, kaip groti garsą naudojant JavaScript.

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/40)

## Apžvalga ir savarankiškas mokymasis

Jūsų užduotis yra sukurti naują pavyzdinį žaidimą, todėl išnagrinėkite keletą įdomių žaidimų, kad pamatytumėte, kokio tipo žaidimą galėtumėte sukurti.

## Užduotis

[Sukurkite pavyzdinį žaidimą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.