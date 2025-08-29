<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T16:30:32+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "pl"
}
-->
# Stwórz grę kosmiczną, część 4: Dodawanie lasera i wykrywanie kolizji

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/35)

W tej lekcji nauczysz się, jak strzelać laserami za pomocą JavaScript! Dodamy dwie rzeczy do naszej gry:

- **Laser**: laser wystrzeliwany z Twojego statku bohatera, poruszający się pionowo w górę
- **Wykrywanie kolizji**, jako część implementacji możliwości *strzelania*, dodamy również kilka zasad gry:
   - **Laser trafia wroga**: Wróg ginie, jeśli zostanie trafiony laserem
   - **Laser trafia górną część ekranu**: Laser zostaje zniszczony, jeśli uderzy w górną część ekranu
   - **Kolizja wroga i bohatera**: Wróg i bohater zostają zniszczeni, jeśli się zderzą
   - **Wróg trafia dolną część ekranu**: Wróg i bohater zostają zniszczeni, jeśli wróg dotrze do dolnej części ekranu

Krótko mówiąc, Ty -- *bohater* -- musisz trafić wszystkich wrogów laserem, zanim uda im się dotrzeć do dolnej części ekranu.

✅ Poszukaj informacji o pierwszej grze komputerowej, jaka kiedykolwiek powstała. Jakie miała funkcje?

Bądźmy bohaterami razem!

## Wykrywanie kolizji

Jak wykrywać kolizje? Musimy traktować nasze obiekty w grze jako prostokąty poruszające się po ekranie. Dlaczego? Ponieważ obraz używany do rysowania obiektu w grze to prostokąt: ma `x`, `y`, `szerokość` i `wysokość`.

Jeśli dwa prostokąty, np. bohater i wróg, *przecinają się*, mamy kolizję. Co powinno się wtedy wydarzyć, zależy od zasad gry. Aby zaimplementować wykrywanie kolizji, potrzebujesz:

1. Sposobu na uzyskanie reprezentacji prostokąta dla obiektu w grze, coś takiego:

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

2. Funkcji porównującej, która może wyglądać tak:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Jak niszczyć obiekty

Aby niszczyć obiekty w grze, musisz poinformować grę, że nie powinna już rysować tego elementu w pętli gry, która uruchamia się w określonych odstępach czasu. Można to zrobić, oznaczając obiekt w grze jako *martwy*, gdy coś się wydarzy, na przykład:

```javascript
// collision happened
enemy.dead = true
```

Następnie możesz usunąć *martwe* obiekty przed ponownym rysowaniem ekranu, na przykład:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Jak wystrzelić laser

Wystrzelenie lasera oznacza reakcję na zdarzenie klawisza i utworzenie obiektu, który porusza się w określonym kierunku. Musimy zatem wykonać następujące kroki:

1. **Utwórz obiekt lasera**: zaczynając od górnej części statku bohatera, który po utworzeniu zaczyna poruszać się w górę w kierunku górnej części ekranu.
2. **Podłącz kod do zdarzenia klawisza**: musimy wybrać klawisz na klawiaturze, który będzie reprezentował strzał lasera przez gracza.
3. **Utwórz obiekt gry, który wygląda jak laser**, gdy klawisz zostanie naciśnięty.

## Czas odnowienia lasera

Laser musi być wystrzeliwany za każdym razem, gdy naciśniesz klawisz, na przykład *spację*. Aby zapobiec tworzeniu zbyt wielu laserów w krótkim czasie, musimy to naprawić. Rozwiązaniem jest zaimplementowanie tzw. *czasu odnowienia* (cooldown), czyli timera, który zapewnia, że laser może być wystrzeliwany tylko co jakiś czas. Możesz to zaimplementować w następujący sposób:

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

✅ Przypomnij sobie lekcję 1 z serii o grze kosmicznej, aby przypomnieć sobie, czym jest *cooldown*.

## Co zbudować

Weź istniejący kod (który powinieneś już uporządkować i zrefaktoryzować) z poprzedniej lekcji i rozbuduj go. Możesz zacząć od kodu z części II lub użyć kodu z [Części III - starter](../../../../../../../../../your-work).

> wskazówka: laser, z którym będziesz pracować, znajduje się już w Twoim folderze z zasobami i jest odwoływany w Twoim kodzie

- **Dodaj wykrywanie kolizji**, gdy laser zderzy się z czymś, powinny obowiązywać następujące zasady:
   1. **Laser trafia wroga**: wróg ginie, jeśli zostanie trafiony laserem
   2. **Laser trafia górną część ekranu**: laser zostaje zniszczony, jeśli uderzy w górną część ekranu
   3. **Kolizja wroga i bohatera**: wróg i bohater zostają zniszczeni, jeśli się zderzą
   4. **Wróg trafia dolną część ekranu**: wróg i bohater zostają zniszczeni, jeśli wróg dotrze do dolnej części ekranu

## Zalecane kroki

Zlokalizuj pliki, które zostały dla Ciebie utworzone w podfolderze `your-work`. Powinny zawierać:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Rozpocznij projekt w folderze `your_work`, wpisując:

```bash
cd your-work
npm start
```

Powyższe uruchomi serwer HTTP pod adresem `http://localhost:5000`. Otwórz przeglądarkę i wpisz ten adres, obecnie powinien wyświetlać bohatera i wszystkich wrogów, ale nic się jeszcze nie porusza :).

### Dodaj kod

1. **Utwórz reprezentację prostokąta dla obiektu gry, aby obsłużyć kolizje**. Poniższy kod pozwala uzyskać reprezentację prostokąta dla `GameObject`. Edytuj klasę GameObject, aby ją rozszerzyć:

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

2. **Dodaj kod sprawdzający kolizje**. Będzie to nowa funkcja testująca, czy dwa prostokąty się przecinają:

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

3. **Dodaj możliwość wystrzeliwania lasera**
   1. **Dodaj komunikat o zdarzeniu klawisza**. Klawisz *spacja* powinien tworzyć laser tuż nad statkiem bohatera. Dodaj trzy stałe w obiekcie Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Obsłuż klawisz spacji**. Edytuj funkcję `window.addEventListener` dla zdarzenia keyup, aby obsługiwała spację:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Dodaj nasłuchiwacze**. Edytuj funkcję `initGame()`, aby upewnić się, że bohater może strzelać, gdy naciśnięty zostanie klawisz spacji:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       oraz dodaj nową funkcję `eventEmitter.on()`, aby zapewnić odpowiednie zachowanie, gdy wróg zderzy się z laserem:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Porusz obiektem**, Upewnij się, że laser stopniowo przesuwa się w górę ekranu. Utworzysz nową klasę Laser, która rozszerza `GameObject`, jak wcześniej:

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

   1. **Obsłuż kolizje**, Zaimplementuj zasady kolizji dla lasera. Dodaj funkcję `updateGameObjects()`, która testuje kolidujące obiekty:

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

      Upewnij się, że dodałeś `updateGameObjects()` do swojej pętli gry w `window.onload`.

   4. **Zaimplementuj cooldown** dla lasera, aby mógł być wystrzeliwany tylko co jakiś czas.

      Na koniec edytuj klasę Hero, aby mogła obsługiwać cooldown:

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

Na tym etapie Twoja gra ma już pewną funkcjonalność! Możesz poruszać się za pomocą klawiszy strzałek, strzelać laserem za pomocą spacji, a wrogowie znikają, gdy ich trafisz. Brawo!

---

## 🚀 Wyzwanie

Dodaj eksplozję! Sprawdź zasoby gry w [repozytorium Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) i spróbuj dodać eksplozję, gdy laser trafi w obcego.

## Quiz po wykładzie

[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/36)

## Przegląd i samodzielna nauka

Eksperymentuj z interwałami w swojej grze. Co się stanie, gdy je zmienisz? Przeczytaj więcej o [zdarzeniach czasowych w JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadanie

[Zbadaj kolizje](assignment.md)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.