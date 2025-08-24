<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-24T12:27:27+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "de"
}
-->
# Baue ein Weltraumspiel Teil 5: Punkte und Leben

## Quiz vor der Lektion

[Quiz vor der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

In dieser Lektion lernst du, wie man Punkte zu einem Spiel hinzufügt und Leben berechnet.

## Text auf dem Bildschirm anzeigen

Um den Punktestand eines Spiels auf dem Bildschirm anzuzeigen, musst du wissen, wie man Text auf dem Bildschirm platziert. Die Antwort ist die Methode `fillText()` des Canvas-Objekts. Du kannst auch andere Aspekte steuern, wie die Schriftart, die Farbe des Textes und sogar die Ausrichtung (links, rechts, zentriert). Unten findest du Code, der Text auf dem Bildschirm zeichnet.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lies mehr darüber, [wie man Text zu einem Canvas hinzufügt](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), und gestalte deinen Text ruhig etwas schicker!

## Leben als Spielkonzept

Das Konzept von Leben in einem Spiel ist lediglich eine Zahl. Im Kontext eines Weltraumspiels ist es üblich, eine bestimmte Anzahl von Leben zuzuweisen, die nach und nach abgezogen werden, wenn dein Schiff Schaden nimmt. Es ist schön, wenn man dies grafisch darstellen kann, z. B. mit kleinen Schiffen oder Herzen anstelle einer Zahl.

## Was soll gebaut werden?

Füge deinem Spiel Folgendes hinzu:

- **Punktestand**: Für jedes feindliche Schiff, das zerstört wird, sollte der Held Punkte erhalten. Wir schlagen 100 Punkte pro Schiff vor. Der Punktestand sollte unten links angezeigt werden.
- **Leben**: Dein Schiff hat drei Leben. Du verlierst ein Leben, jedes Mal wenn ein feindliches Schiff mit dir kollidiert. Die Lebensanzeige sollte unten rechts angezeigt werden und aus der folgenden Grafik bestehen: ![life image](../../../../6-space-game/5-keeping-score/solution/assets/life.png).

## Empfohlene Schritte

Finde die Dateien, die für dich im Unterordner `your-work` erstellt wurden. Sie sollten Folgendes enthalten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Starte dein Projekt im Ordner `your_work`, indem du Folgendes eingibst:

```bash
cd your-work
npm start
```

Das oben Genannte startet einen HTTP-Server unter der Adresse `http://localhost:5000`. Öffne einen Browser und gib diese Adresse ein. Derzeit sollten der Held und alle Feinde angezeigt werden, und wenn du die Pfeiltasten links und rechts drückst, bewegt sich der Held und kann Feinde abschießen.

### Code hinzufügen

1. **Kopiere die benötigten Assets** aus dem Ordner `solution/assets/` in den Ordner `your-work`; du wirst ein `life.png`-Asset hinzufügen. Füge das `lifeImg` zur Funktion `window.onload` hinzu:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Füge das `lifeImg` zur Liste der Assets hinzu:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Variablen hinzufügen**. Füge Code hinzu, der deinen Gesamtpunktestand (0) und die verbleibenden Leben (3) darstellt, und zeige diese Werte auf dem Bildschirm an.

3. **Erweitere die Funktion `updateGameObjects()`**. Erweitere die Funktion `updateGameObjects()`, um Kollisionen mit Feinden zu behandeln:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Füge Leben und Punkte hinzu**. 
   1. **Initialisiere Variablen**. Unter `this.cooldown = 0` in der Klasse `Hero` setze Leben und Punkte:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Zeichne Variablen auf den Bildschirm**. Zeige diese Werte auf dem Bildschirm an:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Füge Methoden zur Spielschleife hinzu**. Stelle sicher, dass du diese Funktionen zur Funktion `window.onload` unter `updateGameObjects()` hinzufügst:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementiere Spielregeln**. Implementiere die folgenden Spielregeln:

   1. **Für jede Kollision zwischen Held und Feind** ziehe ein Leben ab.
   
      Erweitere die Klasse `Hero`, um diese Abzüge vorzunehmen:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Für jeden Laser, der einen Feind trifft**, erhöhe den Punktestand um 100 Punkte.

      Erweitere die Klasse `Hero`, um diese Erhöhung vorzunehmen:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Füge diese Funktionen zu deinen Collision Event Emitters hinzu:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Recherchiere ein wenig, um andere Spiele zu entdecken, die mit JavaScript/Canvas erstellt wurden. Was sind ihre gemeinsamen Merkmale?

Am Ende dieser Arbeit solltest du die kleinen 'Lebens'-Schiffe unten rechts, Punkte unten links sehen und beobachten können, wie deine Lebensanzahl bei Kollisionen mit Feinden abnimmt und deine Punkte steigen, wenn du Feinde abschießt. Gut gemacht! Dein Spiel ist fast fertig.

---

## 🚀 Herausforderung

Dein Code ist fast fertig. Kannst du dir die nächsten Schritte vorstellen?

## Quiz nach der Lektion

[Quiz nach der Lektion](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Überprüfung & Selbststudium

Recherchiere einige Möglichkeiten, wie du Punktestände und Leben in einem Spiel erhöhen und verringern kannst. Es gibt einige interessante Spiel-Engines wie [PlayFab](https://playfab.com). Wie könnte die Verwendung einer solchen Engine dein Spiel verbessern?

## Aufgabe

[Baue ein Punktespiel](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.