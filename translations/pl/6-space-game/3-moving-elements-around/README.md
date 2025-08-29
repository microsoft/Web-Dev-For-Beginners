<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T16:29:25+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "pl"
}
-->
# Tworzenie gry kosmicznej, część 3: Dodawanie ruchu

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/33)

Gry nie są zbyt ekscytujące, dopóki na ekranie nie pojawią się poruszające się obiekty! W tej grze wykorzystamy dwa rodzaje ruchu:

- **Ruch za pomocą klawiatury/myszy**: gdy użytkownik używa klawiatury lub myszy, aby poruszać obiektem na ekranie.
- **Ruch generowany przez grę**: gdy gra automatycznie porusza obiektem w określonych odstępach czasu.

Jak więc poruszać obiektami na ekranie? Wszystko sprowadza się do współrzędnych kartezjańskich: zmieniamy położenie (x, y) obiektu, a następnie odświeżamy ekran.

Typowe kroki, aby osiągnąć *ruch* na ekranie, to:

1. **Ustawienie nowej lokalizacji** obiektu; jest to konieczne, aby obiekt wydawał się poruszać.
2. **Wyczyszczenie ekranu**, ekran musi być czyszczony pomiędzy kolejnymi rysowaniami. Możemy to zrobić, rysując prostokąt wypełniony kolorem tła.
3. **Ponowne narysowanie obiektu** w nowej lokalizacji. Dzięki temu osiągamy efekt przesunięcia obiektu z jednego miejsca na drugie.

Oto jak to może wyglądać w kodzie:

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

✅ Czy potrafisz wymyślić, dlaczego rysowanie bohatera wiele razy na sekundę może powodować problemy z wydajnością? Przeczytaj o [alternatywach dla tego wzorca](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Obsługa zdarzeń klawiatury

Zdarzenia obsługujemy, przypisując konkretne zdarzenia do kodu. Zdarzenia klawiatury są wywoływane na całym oknie, podczas gdy zdarzenia myszy, takie jak `click`, mogą być powiązane z kliknięciem konkretnego elementu. W tym projekcie będziemy korzystać ze zdarzeń klawiatury.

Aby obsłużyć zdarzenie, należy użyć metody `addEventListener()` okna i podać jej dwa parametry wejściowe. Pierwszy parametr to nazwa zdarzenia, na przykład `keyup`. Drugi parametr to funkcja, która ma zostać wywołana w wyniku wystąpienia zdarzenia.

Oto przykład:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Dla zdarzeń klawiatury istnieją dwie właściwości zdarzenia, które można wykorzystać, aby sprawdzić, który klawisz został naciśnięty:

- `key`, czyli reprezentacja tekstowa naciśniętego klawisza, na przykład `ArrowUp`.
- `keyCode`, czyli reprezentacja numeryczna, na przykład `37`, odpowiadająca `ArrowLeft`.

✅ Manipulacja zdarzeniami klawiatury jest przydatna nie tylko w tworzeniu gier. Jakie inne zastosowania tej techniki przychodzą Ci do głowy?

### Klawisze specjalne: uwaga

Istnieją pewne *specjalne* klawisze, które wpływają na okno. Oznacza to, że jeśli nasłuchujesz zdarzenia `keyup` i używasz tych klawiszy do poruszania bohaterem, może to również powodować przewijanie poziome. Z tego powodu możesz chcieć *wyłączyć* to wbudowane zachowanie przeglądarki podczas tworzenia gry. Potrzebujesz kodu takiego jak ten:

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

Powyższy kod zapewni, że klawisze strzałek i spacja będą miały *domyślne* zachowanie wyłączone. Mechanizm *wyłączania* działa, gdy wywołujemy `e.preventDefault()`.

## Ruch generowany przez grę

Możemy sprawić, że obiekty będą poruszać się same, używając timerów, takich jak funkcje `setTimeout()` lub `setInterval()`, które aktualizują lokalizację obiektu w każdym cyklu czasowym. Oto jak to może wyglądać:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Pętla gry

Pętla gry to koncepcja, która polega na funkcji wywoływanej w regularnych odstępach czasu. Nazywa się ją pętlą gry, ponieważ wszystko, co powinno być widoczne dla użytkownika, jest rysowane w tej pętli. Pętla gry wykorzystuje wszystkie obiekty gry, które są jej częścią, rysując je, chyba że z jakiegoś powodu nie powinny już być częścią gry. Na przykład, jeśli obiekt to wróg, który został trafiony laserem i eksploduje, nie jest już częścią bieżącej pętli gry (więcej na ten temat dowiesz się w kolejnych lekcjach).

Oto jak typowa pętla gry może wyglądać w kodzie:

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

Powyższa pętla jest wywoływana co `200` milisekund, aby odświeżyć płótno. Możesz wybrać najlepszy interwał, który ma sens dla Twojej gry.

## Kontynuacja gry kosmicznej

Weźmiesz istniejący kod i go rozbudujesz. Możesz zacząć od kodu, który ukończyłeś w części I, lub użyć kodu z [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Ruch bohatera**: dodasz kod, aby umożliwić poruszanie bohaterem za pomocą klawiszy strzałek.
- **Ruch wrogów**: dodasz również kod, aby wrogowie poruszali się z góry na dół w określonym tempie.

## Zalecane kroki

Znajdź pliki, które zostały dla Ciebie utworzone w podfolderze `your-work`. Powinny zawierać następujące:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Uruchom swój projekt w folderze `your_work`, wpisując:

```bash
cd your-work
npm start
```

Powyższe polecenie uruchomi serwer HTTP pod adresem `http://localhost:5000`. Otwórz przeglądarkę i wpisz ten adres. Na razie powinien wyświetlać bohatera i wszystkich wrogów; nic się jeszcze nie porusza!

### Dodaj kod

1. **Dodaj dedykowane obiekty** dla `hero`, `enemy` i `game object`, które powinny mieć właściwości `x` i `y`. (Pamiętaj o części dotyczącej [dziedziczenia lub kompozycji](../README.md)).

   *PODPOWIEDŹ* `game object` powinien być tym, który ma `x` i `y` oraz zdolność rysowania się na płótnie.

   > wskazówka: zacznij od dodania nowej klasy GameObject z jej konstruktorem zdefiniowanym jak poniżej, a następnie narysuj ją na płótnie:
  
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

    Teraz rozszerz ten GameObject, aby utworzyć Hero i Enemy.
    
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

2. **Dodaj obsługę zdarzeń klawiatury**, aby obsługiwać nawigację klawiszami (poruszanie bohaterem w górę/dół, w lewo/prawo).

   *PAMIĘTAJ* to układ kartezjański, lewy górny róg to `0,0`. Pamiętaj również, aby dodać kod zatrzymujący *domyślne zachowanie*.

   > wskazówka: utwórz swoją funkcję onKeyDown i przypisz ją do okna:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Sprawdź konsolę przeglądarki w tym momencie i obserwuj logowane naciśnięcia klawiszy.

3. **Zaimplementuj** [wzorzec Pub-Sub](../README.md), aby Twój kod był bardziej przejrzysty w kolejnych częściach.

   Aby to zrobić, możesz:

   1. **Dodać nasłuchiwacza zdarzeń** do okna:

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

    1. **Utworzyć klasę EventEmitter**, aby publikować i subskrybować wiadomości:

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

    1. **Dodać stałe** i skonfigurować EventEmitter:

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

    1. **Zainicjalizować grę**

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

1. **Skonfiguruj pętlę gry**

   Zrefaktoruj funkcję window.onload, aby zainicjalizować grę i ustawić pętlę gry w odpowiednim interwale. Dodasz również wiązkę laserową:

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

5. **Dodaj kod**, aby wrogowie poruszali się w określonych odstępach czasu.

    Zrefaktoruj funkcję `createEnemies()`, aby tworzyła wrogów i dodawała ich do nowej klasy gameObjects:

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
    
    oraz dodaj funkcję `createHero()`, aby wykonać podobny proces dla bohatera.
    
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

    Na koniec dodaj funkcję `drawGameObjects()`, aby rozpocząć rysowanie:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Twoi wrogowie powinni zacząć zbliżać się do statku kosmicznego bohatera!

---

## 🚀 Wyzwanie

Jak widzisz, Twój kod może zamienić się w "spaghetti", gdy zaczynasz dodawać funkcje, zmienne i klasy. Jak możesz lepiej zorganizować swój kod, aby był bardziej czytelny? Naszkicuj system organizacji kodu, nawet jeśli nadal znajduje się w jednym pliku.

## Quiz po wykładzie

[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/34)

## Przegląd i samodzielna nauka

Chociaż piszemy naszą grę bez użycia frameworków, istnieje wiele frameworków opartych na JavaScript do tworzenia gier na płótnie. Poświęć trochę czasu na [przeczytanie o nich](https://github.com/collections/javascript-game-engines).

## Zadanie

[Skomentuj swój kod](assignment.md)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.