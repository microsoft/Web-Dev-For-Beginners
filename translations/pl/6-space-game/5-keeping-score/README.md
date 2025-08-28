<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-24T12:27:58+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "pl"
}
-->
# Stwórz grę kosmiczną, część 5: Punkty i życia

## Quiz przed lekcją

[Quiz przed lekcją](https://ff-quizzes.netlify.app/web/quiz/37)

W tej lekcji dowiesz się, jak dodać system punktacji do gry oraz jak obliczać życia.

## Wyświetlanie tekstu na ekranie

Aby wyświetlić wynik gry na ekranie, musisz wiedzieć, jak umieścić tekst na ekranie. Odpowiedzią jest użycie metody `fillText()` na obiekcie canvas. Możesz również kontrolować inne aspekty, takie jak czcionka, kolor tekstu, a nawet jego wyrównanie (lewo, prawo, środek). Poniżej znajduje się kod rysujący tekst na ekranie.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Przeczytaj więcej o [dodawaniu tekstu do canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) i spróbuj sprawić, by Twój tekst wyglądał bardziej efektownie!

## Życie jako koncepcja w grze

Koncepcja życia w grze to po prostu liczba. W kontekście gry kosmicznej często przypisuje się zestaw żyć, które są odejmowane jedno po drugim, gdy Twój statek zostaje uszkodzony. Fajnie jest, jeśli możesz pokazać graficzną reprezentację tego, na przykład w postaci miniaturowych statków lub serc zamiast liczby.

## Co zbudować

Dodajmy następujące elementy do Twojej gry:

- **Wynik gry**: Za każdy zniszczony statek wroga bohater powinien otrzymać punkty, sugerujemy 100 punktów za statek. Wynik gry powinien być wyświetlany w dolnym lewym rogu.
- **Życia**: Twój statek ma trzy życia. Tracisz jedno życie za każdym razem, gdy statek wroga zderzy się z Tobą. Liczba żyć powinna być wyświetlana w dolnym prawym rogu i przedstawiona za pomocą następującej grafiki ![grafika życia](../../../../6-space-game/5-keeping-score/solution/assets/life.png).

## Sugerowane kroki

Znajdź pliki, które zostały dla Ciebie utworzone w podfolderze `your-work`. Powinny zawierać następujące elementy:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Uruchom swój projekt w folderze `your_work`, wpisując:

```bash
cd your-work
npm start
```

Powyższe polecenie uruchomi serwer HTTP pod adresem `http://localhost:5000`. Otwórz przeglądarkę i wpisz ten adres. W tym momencie powinien być widoczny bohater i wszyscy wrogowie, a po naciśnięciu strzałek w lewo i w prawo bohater będzie się poruszał i mógł zestrzeliwać wrogów.

### Dodaj kod

1. **Skopiuj potrzebne zasoby** z folderu `solution/assets/` do folderu `your-work`; dodasz zasób `life.png`. Dodaj `lifeImg` do funkcji `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Dodaj `lifeImg` do listy zasobów:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Dodaj zmienne**. Dodaj kod reprezentujący Twój całkowity wynik (0) i pozostałe życia (3), wyświetl te wartości na ekranie.

3. **Rozszerz funkcję `updateGameObjects()`**. Rozszerz funkcję `updateGameObjects()`, aby obsługiwała kolizje z wrogami:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Dodaj `life` i `points`**. 
   1. **Zainicjalizuj zmienne**. Pod `this.cooldown = 0` w klasie `Hero` ustaw zmienne `life` i `points`:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Wyświetl zmienne na ekranie**. Wyświetl te wartości na ekranie:

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

   1. **Dodaj metody do pętli gry**. Upewnij się, że dodałeś te funkcje do swojej funkcji `window.onload` pod `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Zaimplementuj zasady gry**. Zaimplementuj następujące zasady gry:

   1. **Za każdą kolizję bohatera z wrogiem** odejmij jedno życie.
   
      Rozszerz klasę `Hero`, aby odjąć życie:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Za każdy laser trafiający w wroga** zwiększ wynik gry o 100 punktów.

      Rozszerz klasę `Hero`, aby zwiększyć wynik:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Dodaj te funkcje do swoich Emiterów Zdarzeń Kolizji:

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

✅ Poszukaj informacji o innych grach stworzonych za pomocą JavaScript/Canvas. Jakie mają wspólne cechy?

Po zakończeniu tej pracy powinieneś zobaczyć małe statki reprezentujące życie w dolnym prawym rogu, punkty w dolnym lewym rogu, a także zmniejszającą się liczbę żyć po kolizji z wrogami i rosnące punkty po zestrzeleniu wrogów. Świetna robota! Twoja gra jest prawie gotowa.

---

## 🚀 Wyzwanie

Twój kod jest prawie gotowy. Czy potrafisz wyobrazić sobie kolejne kroki?

## Quiz po lekcji

[Quiz po lekcji](https://ff-quizzes.netlify.app/web/quiz/38)

## Przegląd i samodzielna nauka

Poszukaj sposobów na zwiększanie i zmniejszanie punktów oraz żyć w grze. Istnieją ciekawe silniki gier, takie jak [PlayFab](https://playfab.com). Jak ich użycie mogłoby ulepszyć Twoją grę?

## Zadanie

[Stwórz grę z punktacją](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby zapewnić precyzję, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.