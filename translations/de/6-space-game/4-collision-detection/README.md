<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T14:11:28+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "de"
}
-->
# Baue ein Weltraumspiel Teil 4: Hinzufügen eines Lasers und Erkennen von Kollisionen

## Quiz vor der Lektion

[Quiz vor der Lektion](https://ff-quizzes.netlify.app/web/quiz/35)

In dieser Lektion lernst du, wie man mit JavaScript Laser abfeuert! Wir fügen zwei Dinge zu unserem Spiel hinzu:

- **Einen Laser**: Dieser Laser wird von dem Schiff deines Helden abgefeuert und bewegt sich vertikal nach oben.
- **Kollisionserkennung**: Im Rahmen der Implementierung der Schussfähigkeit fügen wir auch einige interessante Spielregeln hinzu:
   - **Laser trifft Gegner**: Gegner stirbt, wenn er von einem Laser getroffen wird.
   - **Laser trifft oberen Bildschirmrand**: Ein Laser wird zerstört, wenn er den oberen Teil des Bildschirms erreicht.
   - **Kollision zwischen Gegner und Held**: Ein Gegner und der Held werden zerstört, wenn sie miteinander kollidieren.
   - **Gegner erreicht unteren Bildschirmrand**: Ein Gegner und der Held werden zerstört, wenn der Gegner den unteren Bildschirmrand erreicht.

Kurz gesagt, du – *der Held* – musst alle Gegner mit einem Laser treffen, bevor sie es schaffen, den unteren Bildschirmrand zu erreichen.

✅ Recherchiere ein wenig über das allererste Computerspiel, das jemals geschrieben wurde. Welche Funktionalität hatte es?

Lasst uns gemeinsam heldenhaft sein!

## Kollisionserkennung

Wie erkennen wir Kollisionen? Wir müssen unsere Spielobjekte als Rechtecke betrachten, die sich bewegen. Warum, fragst du dich vielleicht? Nun, das Bild, das verwendet wird, um ein Spielobjekt darzustellen, ist ein Rechteck: Es hat `x`, `y`, `width` und `height`.

Wenn sich zwei Rechtecke, z. B. ein Held und ein Gegner, *überschneiden*, liegt eine Kollision vor. Was dann passieren soll, hängt von den Spielregeln ab. Um die Kollisionserkennung zu implementieren, benötigst du Folgendes:

1. Eine Möglichkeit, eine Rechteckdarstellung eines Spielobjekts zu erhalten, etwa so:

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

2. Eine Vergleichsfunktion, die so aussehen kann:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Wie zerstören wir Dinge

Um Dinge in einem Spiel zu zerstören, musst du dem Spiel mitteilen, dass es dieses Objekt nicht mehr im Spielzyklus zeichnen soll, der in einem bestimmten Intervall ausgelöst wird. Eine Möglichkeit, dies zu tun, besteht darin, ein Spielobjekt als *tot* zu markieren, wenn etwas passiert, etwa so:

```javascript
// collision happened
enemy.dead = true
```

Dann kannst du *tote* Objekte aussortieren, bevor der Bildschirm neu gezeichnet wird, etwa so:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Wie feuern wir einen Laser ab

Einen Laser abzufeuern bedeutet, auf ein Tastenevent zu reagieren und ein Objekt zu erstellen, das sich in eine bestimmte Richtung bewegt. Wir müssen daher die folgenden Schritte ausführen:

1. **Einen Laserobjekt erstellen**: Vom oberen Teil des Schiffes unseres Helden aus, das bei der Erstellung beginnt, sich nach oben in Richtung des oberen Bildschirmrands zu bewegen.
2. **Code an ein Tastenevent anhängen**: Wir müssen eine Taste auf der Tastatur auswählen, die das Abfeuern des Lasers durch den Spieler darstellt.
3. **Ein Spielobjekt erstellen, das wie ein Laser aussieht**, wenn die Taste gedrückt wird.

## Abkühlzeit für unseren Laser

Der Laser muss jedes Mal abgefeuert werden, wenn du eine Taste drückst, z. B. *Leertaste*. Um zu verhindern, dass das Spiel in kurzer Zeit zu viele Laser produziert, müssen wir dies beheben. Die Lösung besteht darin, eine sogenannte *Abkühlzeit* zu implementieren, einen Timer, der sicherstellt, dass ein Laser nur in bestimmten Abständen abgefeuert werden kann. Du kannst das folgendermaßen umsetzen:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Sieh dir Lektion 1 der Weltraumspiel-Serie an, um dich an *Abkühlzeiten* zu erinnern.

## Was soll gebaut werden

Du wirst den bestehenden Code (den du bereinigt und refaktoriert haben solltest) aus der vorherigen Lektion erweitern. Entweder beginnst du mit dem Code aus Teil II oder verwendest den Code unter [Teil III - Starter](../../../../../../../../../your-work).

> Tipp: Der Laser, mit dem du arbeiten wirst, befindet sich bereits in deinem Assets-Ordner und wird von deinem Code referenziert.

- **Füge Kollisionserkennung hinzu**, wenn ein Laser mit etwas kollidiert, sollten die folgenden Regeln gelten:
   1. **Laser trifft Gegner**: Gegner stirbt, wenn er von einem Laser getroffen wird.
   2. **Laser trifft oberen Bildschirmrand**: Ein Laser wird zerstört, wenn er den oberen Teil unseres Bildschirms erreicht.
   3. **Kollision zwischen Gegner und Held**: Ein Gegner und der Held werden zerstört, wenn sie miteinander kollidieren.
   4. **Gegner erreicht unteren Bildschirmrand**: Ein Gegner und der Held werden zerstört, wenn der Gegner den unteren Bildschirmrand erreicht.

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

Das obige startet einen HTTP-Server unter der Adresse `http://localhost:5000`. Öffne einen Browser und gib diese Adresse ein, derzeit sollte der Held und alle Gegner angezeigt werden, aber nichts bewegt sich – noch nicht :).

### Code hinzufügen

1. **Richte eine Rechteckdarstellung deines Spielobjekts ein, um Kollisionen zu behandeln**. Der folgende Code ermöglicht es dir, eine Rechteckdarstellung eines `GameObject` zu erhalten. Bearbeite deine GameObject-Klasse, um sie zu erweitern:

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

2. **Füge Code hinzu, der Kollisionen überprüft**. Dies wird eine neue Funktion sein, die testet, ob sich zwei Rechtecke überschneiden:

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

3. **Füge die Fähigkeit hinzu, Laser abzufeuern**
   1. **Füge eine Key-Event-Nachricht hinzu**. Die *Leertaste* sollte einen Laser direkt über dem Schiff des Helden erstellen. Füge drei Konstanten im Nachrichtenobjekt hinzu:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Bearbeite die Leertaste**. Bearbeite die `window.addEventListener`-Funktion für `keyup`, um die Leertaste zu behandeln:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Füge Listener hinzu**. Bearbeite die Funktion `initGame()`, um sicherzustellen, dass der Held schießen kann, wenn die Leertaste gedrückt wird:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       und füge eine neue `eventEmitter.on()`-Funktion hinzu, um das Verhalten zu gewährleisten, wenn ein Gegner mit einem Laser kollidiert:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Bewege das Objekt**, Stelle sicher, dass sich der Laser allmählich zum oberen Bildschirmrand bewegt. Du wirst eine neue Laser-Klasse erstellen, die `GameObject` erweitert, wie du es zuvor getan hast: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Behandle Kollisionen**, Implementiere Kollisionsregeln für den Laser. Füge eine Funktion `updateGameObjects()` hinzu, die kollidierende Objekte auf Treffer testet:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Stelle sicher, dass du `updateGameObjects()` in deinen Spielzyklus in `window.onload` einfügst.

   4. **Implementiere eine Abkühlzeit** für den Laser, sodass er nur in bestimmten Abständen abgefeuert werden kann.

      Bearbeite abschließend die Hero-Klasse, damit sie eine Abkühlzeit hat:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
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

An diesem Punkt hat dein Spiel einige Funktionalitäten! Du kannst dich mit deinen Pfeiltasten bewegen, mit der Leertaste einen Laser abfeuern, und Gegner verschwinden, wenn du sie triffst. Gut gemacht!

---

## 🚀 Herausforderung

Füge eine Explosion hinzu! Sieh dir die Spielassets im [Space Art Repo](../../../../6-space-game/solution/spaceArt/readme.txt) an und versuche, eine Explosion hinzuzufügen, wenn der Laser einen Alien trifft.

## Quiz nach der Lektion

[Quiz nach der Lektion](https://ff-quizzes.netlify.app/web/quiz/36)

## Überprüfung & Selbststudium

Experimentiere mit den Intervallen in deinem Spiel bis jetzt. Was passiert, wenn du sie änderst? Lies mehr über [JavaScript-Timing-Events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Aufgabe

[Erkunde Kollisionen](assignment.md)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.