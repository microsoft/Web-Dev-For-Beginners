<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-28T07:59:59+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 6: Final și Restart

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ff-quizzes.netlify.app/web/quiz/39)

Există diferite moduri de a exprima o *condiție de final* într-un joc. Depinde de tine, ca creator al jocului, să decizi de ce jocul se termină. Iată câteva motive, presupunând că vorbim despre jocul spațial pe care l-ai construit până acum:

- **Au fost distruse `N` nave inamice**: Este destul de comun ca, dacă împarți un joc în diferite niveluri, să fie necesar să distrugi `N` nave inamice pentru a completa un nivel.
- **Nava ta a fost distrusă**: Există cu siguranță jocuri în care pierzi dacă nava ta este distrusă. O altă abordare comună este conceptul de vieți. De fiecare dată când nava ta este distrusă, pierzi o viață. Odată ce toate viețile sunt pierdute, pierzi jocul.
- **Ai colectat `N` puncte**: O altă condiție comună de final este să colectezi puncte. Modul în care obții punctele depinde de tine, dar este destul de obișnuit să atribui puncte diferitelor activități, cum ar fi distrugerea unei nave inamice sau colectarea unor obiecte care *cad* atunci când sunt distruse.
- **Completează un nivel**: Acest lucru poate implica mai multe condiții, cum ar fi distrugerea a `X` nave inamice, colectarea a `Y` puncte sau poate colectarea unui obiect specific.

## Restart

Dacă oamenilor le place jocul tău, este probabil să dorească să-l rejocă. Odată ce jocul se termină, indiferent de motiv, ar trebui să oferi o opțiune de restart.

✅ Gândește-te puțin la condițiile în care consideri că un joc se termină și cum ești invitat să-l repornești.

## Ce să construiești

Vei adăuga aceste reguli jocului tău:

1. **Câștigarea jocului**. Odată ce toate navele inamice au fost distruse, câștigi jocul. În plus, afișează un mesaj de victorie.
1. **Restart**. Odată ce toate viețile sunt pierdute sau jocul este câștigat, ar trebui să oferi o modalitate de a reporni jocul. Amintește-ți! Va trebui să reinitializezi jocul, iar starea anterioară a jocului ar trebui să fie ștearsă.

## Pași recomandați

Găsește fișierele care au fost create pentru tine în subfolderul `your-work`. Acesta ar trebui să conțină următoarele:

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

Pornește proiectul din folderul `your_work` tastând:

```bash
cd your-work
npm start
```

Comanda de mai sus va porni un server HTTP la adresa `http://localhost:5000`. Deschide un browser și introdu această adresă. Jocul tău ar trebui să fie într-o stare jucabilă.

> sfat: pentru a evita avertismentele în Visual Studio Code, editează funcția `window.onload` pentru a apela `gameLoopId` așa cum este (fără `let`) și declară `gameLoopId` în partea de sus a fișierului, independent: `let gameLoopId;`

### Adaugă cod

1. **Urmărește condiția de final**. Adaugă cod care ține evidența numărului de inamici sau dacă nava eroului a fost distrusă, adăugând aceste două funcții:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Adaugă logică în handler-ele de mesaje**. Editează `eventEmitter` pentru a gestiona aceste condiții:

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

1. **Adaugă noi tipuri de mesaje**. Adaugă aceste Mesaje în obiectul constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Adaugă cod pentru restart** care repornește jocul la apăsarea unui buton selectat.

   1. **Ascultă apăsarea tastei `Enter`**. Editează eventListener-ul ferestrei pentru a asculta această apăsare:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Adaugă mesajul de restart**. Adaugă acest Mesaj în constantul Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementează regulile jocului**. Implementează următoarele reguli:

   1. **Condiția de câștig a jucătorului**. Când toate navele inamice sunt distruse, afișează un mesaj de victorie.

      1. Mai întâi, creează o funcție `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Creează o funcție `endGame()`:

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

   1. **Logica de restart**. Când toate viețile sunt pierdute sau jucătorul a câștigat jocul, afișează că jocul poate fi repornit. În plus, repornește jocul când tasta de *restart* este apăsată (poți decide ce tastă să fie mapată pentru restart).

      1. Creează funcția `resetGame()`:

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

     1. Adaugă un apel la `eventEmitter` pentru a reseta jocul în `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Adaugă o funcție `clear()` în EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Felicitări, Căpitane! Jocul tău este complet! Bravo! 🚀 💥 👽

---

## 🚀 Provocare

Adaugă un sunet! Poți adăuga un sunet pentru a îmbunătăți experiența de joc, poate atunci când există o lovitură de laser, sau când eroul moare sau câștigă? Aruncă o privire la acest [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) pentru a învăța cum să redai sunete folosind JavaScript.

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ff-quizzes.netlify.app/web/quiz/40)

## Recapitulare și Studiu Individual

Sarcina ta este să creezi un joc nou, așa că explorează câteva jocuri interesante pentru a vedea ce tip de joc ai putea construi.

## Temă

[Construiește un Joc Exemplu](assignment.md)

---

**Declinarea responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși depunem eforturi pentru a asigura acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.