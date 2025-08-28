<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-24T12:40:54+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "pl"
}
-->
# Tworzenie gry kosmicznej, część 1: Wprowadzenie

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/29)

### Dziedziczenie i kompozycja w tworzeniu gier

W poprzednich lekcjach nie było potrzeby martwić się o architekturę aplikacji, ponieważ projekty były bardzo małe. Jednak gdy aplikacje rosną pod względem rozmiaru i zakresu, decyzje architektoniczne stają się coraz ważniejsze. Istnieją dwa główne podejścia do tworzenia większych aplikacji w JavaScript: *kompozycja* lub *dziedziczenie*. Oba mają swoje zalety i wady, ale wyjaśnijmy je w kontekście gry.

✅ Jedna z najbardziej znanych książek o programowaniu dotyczy [wzorców projektowych](https://en.wikipedia.org/wiki/Design_Patterns).

W grze mamy `obiekty gry`, czyli obiekty, które istnieją na ekranie. Oznacza to, że mają lokalizację w układzie współrzędnych kartezjańskich, charakteryzowaną przez współrzędne `x` i `y`. Podczas tworzenia gry zauważysz, że wszystkie obiekty gry mają standardowe właściwości, wspólne dla każdej gry, które obejmują:

- **oparte na lokalizacji** Większość, jeśli nie wszystkie, elementy gry są oparte na lokalizacji. Oznacza to, że mają lokalizację, `x` i `y`.
- **ruchome** Są to obiekty, które mogą przemieszczać się do nowej lokalizacji. Zazwyczaj jest to bohater, potwór lub NPC (postać niezależna), ale nie na przykład obiekt statyczny, taki jak drzewo.
- **samodestrukcyjne** Te obiekty istnieją tylko przez określony czas, zanim zostaną oznaczone do usunięcia. Zwykle jest to reprezentowane przez wartość logiczną `dead` lub `destroyed`, która sygnalizuje silnikowi gry, że obiekt nie powinien być już renderowany.
- **czas odnowienia** 'Czas odnowienia' to typowa właściwość krótkotrwałych obiektów. Typowym przykładem jest kawałek tekstu lub efekt graficzny, taki jak eksplozja, który powinien być widoczny tylko przez kilka milisekund.

✅ Pomyśl o grze Pac-Man. Czy potrafisz zidentyfikować cztery typy obiektów wymienione powyżej w tej grze?

### Wyrażanie zachowań

Wszystko, co opisaliśmy powyżej, to zachowania, które mogą mieć obiekty gry. Jak je zakodować? Możemy wyrazić te zachowania jako metody powiązane z klasami lub obiektami.

**Klasy**

Pomysł polega na użyciu `klas` w połączeniu z `dziedziczeniem`, aby dodać określone zachowanie do klasy.

✅ Dziedziczenie to ważna koncepcja, którą warto zrozumieć. Dowiedz się więcej z [artykułu MDN o dziedziczeniu](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Wyrażone w kodzie, obiekt gry może wyglądać tak:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Poświęć kilka minut, aby wyobrazić sobie bohatera Pac-Mana (na przykład Inky, Pinky lub Blinky) i jak można go napisać w JavaScript.

**Kompozycja**

Innym sposobem obsługi dziedziczenia obiektów jest użycie *kompozycji*. Wtedy obiekty wyrażają swoje zachowanie w następujący sposób:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Który wzorzec powinienem wybrać?**

To zależy od Ciebie, który wzorzec wybierzesz. JavaScript obsługuje oba te paradygmaty.

--

Innym wzorcem często stosowanym w tworzeniu gier jest wzorzec, który rozwiązuje problem obsługi doświadczenia użytkownika i wydajności gry.

## Wzorzec pub/sub

✅ Pub/Sub oznacza 'publish-subscribe' (publikuj-subskrybuj)

Ten wzorzec zakłada, że różne części Twojej aplikacji nie powinny wiedzieć o sobie nawzajem. Dlaczego? Dzięki temu łatwiej jest zrozumieć, co się dzieje w ogóle, jeśli różne części są od siebie oddzielone. Ułatwia to również nagłą zmianę zachowania, jeśli zajdzie taka potrzeba. Jak to osiągnąć? Robimy to, wprowadzając kilka koncepcji:

- **wiadomość**: Wiadomość to zazwyczaj ciąg tekstowy z opcjonalnym ładunkiem (dane, które wyjaśniają, czego dotyczy wiadomość). Typowa wiadomość w grze może być `KEY_PRESSED_ENTER`.
- **wydawca**: Ten element *publikuje* wiadomość i wysyła ją do wszystkich subskrybentów.
- **subskrybent**: Ten element *nasłuchuje* określonych wiadomości i wykonuje jakieś zadanie w wyniku ich otrzymania, na przykład wystrzelenie lasera.

Implementacja jest bardzo mała, ale to bardzo potężny wzorzec. Oto jak można go zaimplementować:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Aby użyć powyższego kodu, możemy stworzyć bardzo małą implementację:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Powyżej łączymy zdarzenie klawiatury, `ArrowLeft`, i wysyłamy wiadomość `HERO_MOVE_LEFT`. Nasłuchujemy tej wiadomości i w wyniku tego przesuwamy `hero`. Siła tego wzorca polega na tym, że nasłuchiwacz zdarzeń i bohater nie wiedzą o sobie nawzajem. Możesz przypisać `ArrowLeft` do klawisza `A`. Dodatkowo możliwe byłoby zrobienie czegoś zupełnie innego na `ArrowLeft`, dokonując kilku edycji funkcji `on` w eventEmitterze:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Gdy gra staje się bardziej skomplikowana, ten wzorzec pozostaje tak samo prosty, a Twój kod pozostaje czysty. Naprawdę warto przyjąć ten wzorzec.

---

## 🚀 Wyzwanie

Pomyśl, jak wzorzec pub-sub może ulepszyć grę. Które części powinny emitować zdarzenia, a jak gra powinna na nie reagować? Teraz masz szansę być kreatywnym, wymyślając nową grę i sposób, w jaki jej części mogą się zachowywać.

## Quiz po wykładzie

[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/30)

## Przegląd i samodzielna nauka

Dowiedz się więcej o Pub/Sub, [czytając o tym](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadanie

[Zaprojektuj grę](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.