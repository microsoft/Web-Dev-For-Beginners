<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-24T12:37:24+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "pl"
}
-->
# Budowanie gry kosmicznej, część 4: Dodawanie lasera i wykrywanie kolizji

## Quiz przed lekcją

[Quiz przed lekcją](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

W tej lekcji nauczysz się strzelać laserami za pomocą JavaScriptu! Dodamy dwie rzeczy do naszej gry:

- **Laser**: laser wystrzeliwany z statku bohatera, poruszający się pionowo w górę
- **Wykrywanie kolizji**, jako część implementacji możliwości *strzelania*, dodamy również kilka zasad gry:
   - **Laser trafia w przeciwnika**: Przeciwnik ginie, jeśli zostanie trafiony laserem
   - **Laser trafia w górną część ekranu**: Laser zostaje zniszczony, jeśli trafi w górną część ekranu
   - **Kolizja przeciwnika z bohaterem**: Przeciwnik i bohater giną, jeśli zderzą się ze sobą
   - **Przeciwnik trafia w dolną część ekranu**: Przeciwnik i bohater giną, jeśli przeciwnik dotrze do dolnej części ekranu

Krótko mówiąc, Ty -- *bohater* -- musisz zestrzelić wszystkich przeciwników laserem, zanim dotrą do dolnej części ekranu.

✅ Zrób małe badania na temat pierwszej gry komputerowej, jaka kiedykolwiek została napisana. Jakie miała funkcje?

Bądźmy razem bohaterami!

## Wykrywanie kolizji

Jak wykrywać kolizje? Musimy traktować nasze obiekty w grze jako poruszające się prostokąty. Dlaczego? Ponieważ obraz używany do rysowania obiektu gry to prostokąt: ma `x`, `y`, `szerokość` i `wysokość`.

Jeśli dwa prostokąty, np. bohater i przeciwnik, *przecinają się*, mamy kolizję. Co powinno się wtedy wydarzyć, zależy od zasad gry. Aby zaimplementować wykrywanie kolizji, potrzebujesz:

1. Sposobu na uzyskanie reprezentacji prostokąta obiektu gry, coś takiego:

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

Aby niszczyć obiekty w grze, musisz poinformować grę, że nie powinna już rysować tego elementu w pętli gry, która uruchamia się w określonych odstępach czasu. Można to zrobić, oznaczając obiekt gry jako *martwy*, gdy coś się wydarzy, na przykład tak:

```javascript
// collision happened
enemy.dead = true
```

Następnie możesz przefiltrować *martwe* obiekty przed ponownym narysowaniem ekranu, na przykład tak:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Jak wystrzelić laser

Wystrzelenie lasera oznacza reakcję na zdarzenie klawisza i stworzenie obiektu, który porusza się w określonym kierunku. Musimy wykonać następujące kroki:

1. **Stworzyć obiekt lasera**: z górnej części statku bohatera, który po utworzeniu zaczyna poruszać się w górę, w kierunku górnej części ekranu.
2. **Podłączyć kod do zdarzenia klawisza**: musimy wybrać klawisz na klawiaturze, który będzie reprezentował strzał laserem przez gracza.
3. **Stworzyć obiekt gry, który wygląda jak laser**, gdy klawisz zostanie naciśnięty.

## Czas odnowienia lasera

Laser musi być wystrzeliwany za każdym razem, gdy naciśniesz klawisz, na przykład *spację*. Aby zapobiec generowaniu zbyt wielu laserów w krótkim czasie, musimy to naprawić. Rozwiązaniem jest zaimplementowanie tzw. *czasu odnowienia*, czyli timera, który zapewnia, że laser może być wystrzeliwany tylko co jakiś czas. Możesz to zaimplementować w następujący sposób:

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

✅ Przypomnij sobie lekcję 1 z serii o grze kosmicznej, aby przypomnieć sobie, czym jest *czas odnowienia*.

## Co zbudować

Weźmiesz istniejący kod (który powinieneś już uporządkować i zrefaktoryzować) z poprzedniej lekcji i rozszerzysz go. Możesz zacząć od kodu z części II lub użyć kodu z [Część III - starter](../../../../../../../../../your-work).

> wskazówka: laser, nad którym będziesz pracować, znajduje się już w folderze z zasobami i jest referencjonowany przez Twój kod

- **Dodaj wykrywanie kolizji**, gdy laser zderzy się z czymś, powinny obowiązywać następujące zasady:
   1. **Laser trafia w przeciwnika**: przeciwnik ginie, jeśli zostanie trafiony laserem
   2. **Laser trafia w górną część ekranu**: laser zostaje zniszczony, jeśli trafi w górną część ekranu
   3. **Kolizja przeciwnika z bohaterem**: przeciwnik i bohater giną, jeśli zderzą się ze sobą
   4. **Przeciwnik trafia w dolną część ekranu**: przeciwnik i bohater giną, jeśli przeciwnik dotrze do dolnej części ekranu

## Zalecane kroki

Znajdź pliki, które zostały dla Ciebie utworzone w podfolderze `your-work`. Powinny zawierać:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Rozpocznij swój projekt w folderze `your_work`, wpisując:

```bash
cd your-work
npm start
```

Powyższe uruchomi serwer HTTP pod adresem `http://localhost:5000`. Otwórz przeglądarkę i wpisz ten adres, obecnie powinien renderować bohatera i wszystkich przeciwników, nic się jeszcze nie porusza :).

### Dodaj kod

1. **Ustaw reprezentację prostokąta dla swojego obiektu gry, aby obsłużyć kolizję**. Poniższy kod pozwala uzyskać reprezentację prostokąta dla `GameObject`. Edytuj klasę GameObject, aby ją rozszerzyć:

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

2. **Dodaj kod sprawdzający kolizję**. To będzie nowa funkcja testująca, czy dwa prostokąty się przecinają:

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

   1. **Obsłuż klawisz spacji**. Edytuj funkcję `window.addEventListener` dla zdarzenia keyup, aby obsłużyć spację:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Dodaj nasłuchy**. Edytuj funkcję `initGame()`, aby upewnić się, że bohater może strzelać, gdy naciśnięty zostanie klawisz spacji:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       i dodaj nową funkcję `eventEmitter.on()`, aby zapewnić odpowiednie zachowanie, gdy przeciwnik zderzy się z laserem:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Porusz obiektem**, Upewnij się, że laser stopniowo porusza się w górę ekranu. Stworzysz nową klasę Laser, która rozszerza `GameObject`, tak jak wcześniej: 
   
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

   1. **Obsłuż kolizje**, Zaimplementuj zasady kolizji dla lasera. Dodaj funkcję `updateGameObjects()`, która testuje zderzające się obiekty pod kątem trafień:

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

      Upewnij się, że dodasz `updateGameObjects()` do swojej pętli gry w `window.onload`.

   4. **Zaimplementuj czas odnowienia** dla lasera, aby mógł być wystrzeliwany tylko co jakiś czas.

      Na koniec edytuj klasę Hero, aby mogła obsłużyć czas odnowienia:

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

Na tym etapie Twoja gra ma już pewną funkcjonalność! Możesz poruszać się za pomocą klawiszy strzałek, strzelać laserem za pomocą klawisza spacji, a przeciwnicy znikają, gdy ich trafisz. Brawo!

---

## 🚀 Wyzwanie

Dodaj eksplozję! Sprawdź zasoby gry w [repozytorium Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) i spróbuj dodać eksplozję, gdy laser trafi w obcego.

## Quiz po lekcji

[Quiz po lekcji](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Przegląd i samodzielna nauka

Eksperymentuj z interwałami w swojej grze. Co się stanie, gdy je zmienisz? Przeczytaj więcej o [zdarzeniach czasowych w JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadanie

[Zbadaj kolizje](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.