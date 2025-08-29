<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T14:10:34+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "de"
}
-->
# Baue ein Weltraumspiel Teil 3: Bewegung hinzufügen

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/33)

Spiele machen erst richtig Spaß, wenn Aliens auf dem Bildschirm herumlaufen! In diesem Spiel werden wir zwei Arten von Bewegungen verwenden:

- **Tastatur-/Mausbewegung**: wenn der Benutzer mit der Tastatur oder Maus interagiert, um ein Objekt auf dem Bildschirm zu bewegen.
- **Spielinduzierte Bewegung**: wenn das Spiel ein Objekt in bestimmten Zeitintervallen bewegt.

Wie bewegen wir also Dinge auf einem Bildschirm? Es dreht sich alles um kartesische Koordinaten: Wir ändern die Position (x,y) des Objekts und zeichnen den Bildschirm neu.

Typischerweise sind die folgenden Schritte erforderlich, um *Bewegung* auf einem Bildschirm zu erreichen:

1. **Neue Position festlegen** für ein Objekt; dies ist notwendig, um das Objekt als bewegt wahrzunehmen.
2. **Bildschirm löschen**, der Bildschirm muss zwischen den Zeichnungen gelöscht werden. Wir können ihn löschen, indem wir ein Rechteck zeichnen, das wir mit einer Hintergrundfarbe füllen.
3. **Objekt neu zeichnen** an der neuen Position. Dadurch erreichen wir schließlich, dass das Objekt von einer Position zur anderen bewegt wird.

So könnte das im Code aussehen:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Kannst du dir einen Grund vorstellen, warum das mehrfache Neuzeichnen deines Helden pro Sekunde Leistungskosten verursachen könnte? Lies über [Alternativen zu diesem Muster](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Tastaturereignisse behandeln

Ereignisse werden behandelt, indem spezifische Ereignisse mit Code verknüpft werden. Tastaturereignisse werden für das gesamte Fenster ausgelöst, während Mausereignisse wie ein `click` mit einem bestimmten Element verbunden werden können. Wir werden in diesem Projekt Tastaturereignisse verwenden.

Um ein Ereignis zu behandeln, musst du die Methode `addEventListener()` des Fensters verwenden und ihr zwei Eingabeparameter übergeben. Der erste Parameter ist der Name des Ereignisses, zum Beispiel `keyup`. Der zweite Parameter ist die Funktion, die als Ergebnis des Ereignisses aufgerufen werden soll.

Hier ist ein Beispiel:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Für Tastaturereignisse gibt es zwei Eigenschaften des Ereignisses, die du verwenden kannst, um zu sehen, welche Taste gedrückt wurde:

- `key`, dies ist eine Zeichenketten-Darstellung der gedrückten Taste, zum Beispiel `ArrowUp`.
- `keyCode`, dies ist eine numerische Darstellung, zum Beispiel `37`, entspricht `ArrowLeft`.

✅ Die Manipulation von Tastaturereignissen ist auch außerhalb der Spieleentwicklung nützlich. Welche anderen Anwendungen kannst du dir für diese Technik vorstellen?

### Besondere Tasten: ein Hinweis

Es gibt einige *besondere* Tasten, die das Fenster beeinflussen. Das bedeutet, dass wenn du ein `keyup`-Ereignis hörst und diese besonderen Tasten verwendest, um deinen Helden zu bewegen, auch ein horizontales Scrollen ausgeführt wird. Aus diesem Grund möchtest du möglicherweise dieses eingebaute Browserverhalten *abschalten*, während du dein Spiel entwickelst. Du benötigst Code wie diesen:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Der obige Code stellt sicher, dass die Pfeiltasten und die Leertaste ihr *Standardverhalten* abschalten. Der *Abschaltmechanismus* erfolgt, wenn wir `e.preventDefault()` aufrufen.

## Spielinduzierte Bewegung

Wir können Dinge von selbst bewegen, indem wir Timer wie die Funktionen `setTimeout()` oder `setInterval()` verwenden, die die Position des Objekts bei jedem Tick oder Zeitintervall aktualisieren. So könnte das aussehen:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Die Spielschleife

Die Spielschleife ist ein Konzept, das im Wesentlichen eine Funktion ist, die in regelmäßigen Abständen aufgerufen wird. Sie wird Spielschleife genannt, da alles, was für den Benutzer sichtbar sein soll, in die Schleife gezeichnet wird. Die Spielschleife verwendet alle Spielobjekte, die Teil des Spiels sind, und zeichnet sie, es sei denn, sie sollten aus irgendeinem Grund nicht mehr Teil des Spiels sein. Zum Beispiel, wenn ein Objekt ein Feind ist, der von einem Laser getroffen und zerstört wurde, ist es nicht mehr Teil der aktuellen Spielschleife (du wirst mehr darüber in späteren Lektionen lernen).

So könnte eine Spielschleife typischerweise aussehen, ausgedrückt im Code:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Die obige Schleife wird alle `200` Millisekunden aufgerufen, um die Leinwand neu zu zeichnen. Du kannst das beste Intervall wählen, das für dein Spiel sinnvoll ist.

## Fortsetzung des Weltraumspiels

Du wirst den bestehenden Code nehmen und erweitern. Entweder beginnst du mit dem Code, den du während Teil I abgeschlossen hast, oder du verwendest den Code aus [Teil II - Starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Bewegung des Helden**: Du wirst Code hinzufügen, um sicherzustellen, dass du den Helden mit den Pfeiltasten bewegen kannst.
- **Bewegung der Feinde**: Du wirst auch Code hinzufügen, um sicherzustellen, dass sich die Feinde von oben nach unten mit einer bestimmten Geschwindigkeit bewegen.

## Empfohlene Schritte

Finde die Dateien, die für dich im Unterordner `your-work` erstellt wurden. Sie sollten Folgendes enthalten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Du startest dein Projekt im Ordner `your_work`, indem du Folgendes eingibst:

```bash
cd your-work
npm start
```

Das obige wird einen HTTP-Server unter der Adresse `http://localhost:5000` starten. Öffne einen Browser und gib diese Adresse ein, derzeit sollte der Held und alle Feinde angezeigt werden; noch bewegt sich nichts!

### Code hinzufügen

1. **Dedizierte Objekte hinzufügen** für `hero`, `enemy` und `game object`, sie sollten `x`- und `y`-Eigenschaften haben. (Erinnere dich an den Abschnitt über [Vererbung oder Komposition](../README.md)).

   *HINWEIS* `game object` sollte das Objekt sein, das `x` und `y` sowie die Fähigkeit hat, sich selbst auf eine Leinwand zu zeichnen.

   > Tipp: Beginne damit, eine neue GameObject-Klasse mit ihrem Konstruktor wie unten beschrieben hinzuzufügen und sie dann auf die Leinwand zu zeichnen:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Erweitere nun dieses GameObject, um den Helden und den Feind zu erstellen.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Tastaturereignis-Handler hinzufügen**, um die Navigation mit den Tasten zu behandeln (Bewegung des Helden nach oben/unten/links/rechts).

   *DENKE DARAN*: Es ist ein kartesisches System, oben links ist `0,0`. Denke auch daran, Code hinzuzufügen, um das *Standardverhalten* zu stoppen.

   > Tipp: Erstelle deine onKeyDown-Funktion und verknüpfe sie mit dem Fenster:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Überprüfe zu diesem Zeitpunkt die Konsole deines Browsers und beobachte, wie die Tastendrücke protokolliert werden.

3. **Implementiere** das [Pub-Sub-Muster](../README.md), dies wird deinen Code sauber halten, während du die verbleibenden Teile befolgst.

   Um diesen letzten Teil zu erledigen, kannst du:

   1. **Einen Ereignis-Listener hinzufügen** zum Fenster:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Eine EventEmitter-Klasse erstellen**, um Nachrichten zu veröffentlichen und zu abonnieren:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Konstanten hinzufügen** und den EventEmitter einrichten:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Das Spiel initialisieren**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Die Spielschleife einrichten**

   Refaktoriere die window.onload-Funktion, um das Spiel zu initialisieren und eine Spielschleife in einem guten Intervall einzurichten. Du wirst auch einen Laserstrahl hinzufügen:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Code hinzufügen**, um Feinde in bestimmten Intervallen zu bewegen.

    Refaktoriere die Funktion `createEnemies()`, um die Feinde zu erstellen und sie in die neue GameObjects-Klasse zu verschieben:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    und füge eine Funktion `createHero()` hinzu, um einen ähnlichen Prozess für den Helden durchzuführen.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    und schließlich füge eine Funktion `drawGameObjects()` hinzu, um mit dem Zeichnen zu beginnen:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Deine Feinde sollten beginnen, auf dein Heldenschiff vorzurücken!

---

## 🚀 Herausforderung

Wie du sehen kannst, kann dein Code zu 'Spaghetti-Code' werden, wenn du anfängst, Funktionen, Variablen und Klassen hinzuzufügen. Wie kannst du deinen Code besser organisieren, damit er lesbarer wird? Skizziere ein System, um deinen Code zu organisieren, auch wenn er noch in einer Datei bleibt.

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/34)

## Überprüfung & Selbststudium

Während wir unser Spiel ohne Frameworks schreiben, gibt es viele JavaScript-basierte Canvas-Frameworks für die Spieleentwicklung. Nimm dir Zeit, um [darüber zu lesen](https://github.com/collections/javascript-game-engines).

## Aufgabe

[Kommentiere deinen Code](assignment.md)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.