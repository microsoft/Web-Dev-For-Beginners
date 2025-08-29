<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T14:12:19+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "de"
}
-->
# Baue ein Weltraumspiel Teil 6: Beenden und Neustarten

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/39)

Es gibt verschiedene Möglichkeiten, eine *Endbedingung* in einem Spiel auszudrücken. Es liegt an dir als Ersteller des Spiels zu entscheiden, warum das Spiel endet. Hier sind einige Gründe, wenn wir davon ausgehen, dass wir über das Weltraumspiel sprechen, das du bisher gebaut hast:

- **`N` feindliche Schiffe wurden zerstört**: Es ist ziemlich üblich, dass man in einem Spiel, das in verschiedene Level unterteilt ist, `N` feindliche Schiffe zerstören muss, um ein Level abzuschließen.
- **Dein Schiff wurde zerstört**: Es gibt definitiv Spiele, bei denen du verlierst, wenn dein Schiff zerstört wird. Eine andere gängige Herangehensweise ist das Konzept von Leben. Jedes Mal, wenn dein Schiff zerstört wird, wird ein Leben abgezogen. Sobald alle Leben verloren sind, verlierst du das Spiel.
- **Du hast `N` Punkte gesammelt**: Eine weitere häufige Endbedingung ist das Sammeln von Punkten. Wie du Punkte erhältst, bleibt dir überlassen, aber es ist ziemlich üblich, Punkte für verschiedene Aktivitäten zu vergeben, wie z. B. das Zerstören eines feindlichen Schiffs oder das Sammeln von Gegenständen, die beim Zerstören *fallen gelassen* werden.
- **Ein Level abschließen**: Dies könnte mehrere Bedingungen umfassen, wie z. B. `X` zerstörte feindliche Schiffe, `Y` gesammelte Punkte oder vielleicht das Einsammeln eines bestimmten Gegenstands.

## Neustarten

Wenn Menschen dein Spiel mögen, möchten sie es wahrscheinlich erneut spielen. Sobald das Spiel aus irgendeinem Grund endet, solltest du eine Möglichkeit anbieten, es neu zu starten.

✅ Überlege dir, unter welchen Bedingungen ein Spiel für dich endet und wie du dazu aufgefordert wirst, es neu zu starten.

## Was du bauen sollst

Du wirst diese Regeln zu deinem Spiel hinzufügen:

1. **Das Spiel gewinnen**. Sobald alle feindlichen Schiffe zerstört sind, gewinnst du das Spiel. Zeige zusätzlich eine Art Siegesnachricht an.
1. **Neustart**. Sobald alle Leben verloren sind oder das Spiel gewonnen wurde, solltest du eine Möglichkeit anbieten, das Spiel neu zu starten. Denke daran! Du musst das Spiel neu initialisieren und den vorherigen Spielzustand löschen.

## Empfohlene Schritte

Finde die Dateien, die für dich im Unterordner `your-work` erstellt wurden. Sie sollten Folgendes enthalten:

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

Starte dein Projekt im Ordner `your_work`, indem du Folgendes eingibst:

```bash
cd your-work
npm start
```

Das obige Kommando startet einen HTTP-Server unter der Adresse `http://localhost:5000`. Öffne einen Browser und gib diese Adresse ein. Dein Spiel sollte spielbereit sein.

> Tipp: Um Warnungen in Visual Studio Code zu vermeiden, bearbeite die Funktion `window.onload`, sodass sie `gameLoopId` direkt aufruft (ohne `let`), und deklariere `gameLoopId` oben in der Datei unabhängig: `let gameLoopId;`

### Code hinzufügen

1. **Endbedingung verfolgen**. Füge Code hinzu, der die Anzahl der Feinde oder die Zerstörung des Helden-Schiffs verfolgt, indem du diese beiden Funktionen hinzufügst:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Logik zu Nachrichten-Handlern hinzufügen**. Bearbeite den `eventEmitter`, um diese Bedingungen zu behandeln:

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

1. **Neue Nachrichtentypen hinzufügen**. Füge diese Nachrichten dem Konstanten-Objekt hinzu:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Code für Neustart hinzufügen**. Füge Code hinzu, der das Spiel durch Drücken einer ausgewählten Taste neu startet.

   1. **Auf Tastendruck `Enter` hören**. Bearbeite den EventListener deines Fensters, um auf diesen Tastendruck zu hören:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Neustart-Nachricht hinzufügen**. Füge diese Nachricht deinem Nachrichten-Konstanten hinzu:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Spielregeln implementieren**. Implementiere die folgenden Spielregeln:

   1. **Spieler-Siegesbedingung**. Wenn alle feindlichen Schiffe zerstört sind, zeige eine Siegesnachricht an.

      1. Erstelle zuerst eine Funktion `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Erstelle eine Funktion `endGame()`:

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

   1. **Neustart-Logik**. Wenn alle Leben verloren sind oder der Spieler das Spiel gewonnen hat, zeige an, dass das Spiel neu gestartet werden kann. Starte das Spiel zusätzlich neu, wenn die *Neustart*-Taste gedrückt wird (du kannst entscheiden, welche Taste dem Neustart zugeordnet wird).

      1. Erstelle die Funktion `resetGame()`:

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

     1. Füge einen Aufruf zum `eventEmitter` hinzu, um das Spiel in `initGame()` zurückzusetzen:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Füge dem EventEmitter eine Funktion `clear()` hinzu:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Glückwunsch, Captain! Dein Spiel ist fertig! Gut gemacht! 🚀 💥 👽

---

## 🚀 Herausforderung

Füge einen Sound hinzu! Kannst du einen Sound hinzufügen, um dein Spielerlebnis zu verbessern, vielleicht bei einem Lasertreffer, wenn der Held stirbt oder gewinnt? Schau dir dieses [Sandbox-Beispiel](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) an, um zu lernen, wie man mit JavaScript Sound abspielt.

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/40)

## Rückblick & Selbststudium

Deine Aufgabe ist es, ein neues Beispielspiel zu erstellen. Erkunde einige der interessanten Spiele da draußen, um zu sehen, welche Art von Spiel du bauen könntest.

## Aufgabe

[Erstelle ein Beispielspiel](assignment.md)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.