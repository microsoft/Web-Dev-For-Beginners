<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:33:00+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 6: Kraj i ponovno pokretanje

## Kviz prije predavanja

[Kviz prije predavanja](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Postoji mnogo načina za izražavanje *uvjeta završetka* u igri. Na vama kao kreatoru igre je da odredite zašto je igra završila. Evo nekoliko razloga, pod pretpostavkom da govorimo o svemirskoj igri koju ste do sada gradili:

- **Uništeno je `N` neprijateljskih brodova**: Često je slučaj da, ako podijelite igru na različite razine, trebate uništiti `N` neprijateljskih brodova kako biste završili razinu.
- **Vaš brod je uništen**: Postoje igre u kojima gubite ako je vaš brod uništen. Drugi uobičajeni pristup je koncept života. Svaki put kada je vaš brod uništen, oduzima se jedan život. Kada izgubite sve živote, gubite igru.
- **Prikupili ste `N` bodova**: Još jedan uobičajeni uvjet završetka je prikupljanje bodova. Kako ćete dobiti bodove ovisi o vama, ali često se bodovi dodjeljuju za različite aktivnosti, poput uništavanja neprijateljskog broda ili prikupljanja predmeta koji *ispadnu* kada su uništeni.
- **Završetak razine**: Ovo može uključivati nekoliko uvjeta, poput uništenja `X` neprijateljskih brodova, prikupljanja `Y` bodova ili možda prikupljanja određenog predmeta.

## Ponovno pokretanje

Ako se ljudima svidi vaša igra, vjerojatno će je htjeti ponovno igrati. Kada igra završi iz bilo kojeg razloga, trebali biste ponuditi mogućnost ponovnog pokretanja.

✅ Razmislite malo o uvjetima pod kojima igra završava i kako vas potiču da je ponovno pokrenete.

## Što izgraditi

Dodati ćete sljedeća pravila svojoj igri:

1. **Pobjeda u igri**. Kada su svi neprijateljski brodovi uništeni, pobjeđujete u igri. Također, prikažite neku vrstu poruke o pobjedi.
1. **Ponovno pokretanje**. Kada izgubite sve živote ili pobijedite u igri, trebali biste ponuditi način za ponovno pokretanje igre. Zapamtite! Trebat ćete ponovno inicijalizirati igru i očistiti prethodno stanje igre.

## Preporučeni koraci

Pronađite datoteke koje su stvorene za vas u podmapi `your-work`. Trebale bi sadržavati sljedeće:

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

Pokrenite svoj projekt u mapi `your_work` unosom:

```bash
cd your-work
npm start
```

Gornji unos pokrenut će HTTP poslužitelj na adresi `http://localhost:5000`. Otvorite preglednik i unesite tu adresu. Vaša igra bi trebala biti u stanju za igranje.

> savjet: kako biste izbjegli upozorenja u Visual Studio Codeu, uredite funkciju `window.onload` tako da poziva `gameLoopId` bez `let`, i deklarirajte `gameLoopId` na vrhu datoteke, neovisno: `let gameLoopId;`

### Dodavanje koda

1. **Praćenje uvjeta završetka**. Dodajte kod koji prati broj neprijatelja ili je li herojski brod uništen dodavanjem ove dvije funkcije:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Dodavanje logike u rukovatelje porukama**. Uredite `eventEmitter` kako biste obradili ove uvjete:

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

1. **Dodavanje novih tipova poruka**. Dodajte ove poruke u objekt konstanti:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Dodavanje koda za ponovno pokretanje** koji ponovno pokreće igru pritiskom na odabranu tipku.

   1. **Slušanje pritiska tipke `Enter`**. Uredite `eventListener` vašeg prozora kako bi slušao ovaj pritisak:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Dodavanje poruke za ponovno pokretanje**. Dodajte ovu poruku u svoje konstante poruka:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementacija pravila igre**. Implementirajte sljedeća pravila igre:

   1. **Uvjet pobjede igrača**. Kada su svi neprijateljski brodovi uništeni, prikažite poruku o pobjedi.

      1. Prvo, kreirajte funkciju `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Kreirajte funkciju `endGame()`:

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

   1. **Logika ponovnog pokretanja**. Kada su svi životi izgubljeni ili je igrač pobijedio, prikažite da se igra može ponovno pokrenuti. Također, ponovno pokrenite igru kada se pritisne tipka za ponovno pokretanje (možete odlučiti koja tipka će biti mapirana za ponovno pokretanje).

      1. Kreirajte funkciju `resetGame()`:

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

     1. Dodajte poziv `eventEmitter`-u za resetiranje igre u `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Dodajte funkciju `clear()` u EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Čestitamo, Kapetane! Vaša igra je gotova! Bravo! 🚀 💥 👽

---

## 🚀 Izazov

Dodajte zvuk! Možete li dodati zvuk kako biste poboljšali igranje, možda kada laser pogodi metu, ili kada heroj umre ili pobijedi? Pogledajte ovaj [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) kako biste naučili kako reproducirati zvuk pomoću JavaScripta.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Pregled i samostalno učenje

Vaš zadatak je stvoriti novu uzornu igru, pa istražite neke zanimljive igre kako biste vidjeli kakvu biste igru mogli izgraditi.

## Zadatak

[Izgradite uzornu igru](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakva nesporazuma ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.