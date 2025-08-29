<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T16:37:58+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "pl"
}
-->
# Tworzenie gry za pomocą zdarzeń

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/21)

## Programowanie sterowane zdarzeniami

Tworząc aplikację przeglądarkową, zapewniamy graficzny interfejs użytkownika (GUI), który umożliwia użytkownikowi interakcję z tym, co stworzyliśmy. Najczęstszym sposobem interakcji z przeglądarką jest klikanie i wpisywanie tekstu w różnych elementach. Wyzwaniem dla nas jako programistów jest to, że nie wiemy, kiedy użytkownik wykona te operacje!

[Programowanie sterowane zdarzeniami](https://en.wikipedia.org/wiki/Event-driven_programming) to nazwa rodzaju programowania, którego potrzebujemy, aby stworzyć nasz GUI. Jeśli rozłożymy to wyrażenie na części, zauważymy, że kluczowym słowem jest tutaj **zdarzenie**. [Zdarzenie](https://www.merriam-webster.com/dictionary/event), według Merriam-Webster, jest definiowane jako "coś, co się dzieje". To idealnie opisuje naszą sytuację. Wiemy, że coś się wydarzy, co wymaga wykonania kodu w odpowiedzi, ale nie wiemy, kiedy to nastąpi.

Sposobem na oznaczenie sekcji kodu, którą chcemy wykonać, jest utworzenie funkcji. W przypadku [programowania proceduralnego](https://en.wikipedia.org/wiki/Procedural_programming) funkcje są wywoływane w określonej kolejności. To samo dotyczy programowania sterowanego zdarzeniami. Różnica polega na tym, **jak** funkcje są wywoływane.

Aby obsłużyć zdarzenia (klikanie przycisków, wpisywanie tekstu itp.), rejestrujemy **nasłuchiwacze zdarzeń**. Nasłuchiwacz zdarzeń to funkcja, która "nasłuchuje", czy zdarzenie wystąpi, i wykonuje się w odpowiedzi. Nasłuchiwacze zdarzeń mogą aktualizować interfejs użytkownika, wykonywać zapytania do serwera lub robić cokolwiek innego, co jest potrzebne w odpowiedzi na akcję użytkownika. Dodajemy nasłuchiwacz zdarzeń za pomocą [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) i przekazujemy funkcję do wykonania.

> **NOTE:** Warto podkreślić, że istnieje wiele sposobów tworzenia nasłuchiwaczy zdarzeń. Można używać funkcji anonimowych lub tworzyć nazwane. Można korzystać z różnych skrótów, takich jak ustawianie właściwości `click` lub używanie `addEventListener`. W naszym ćwiczeniu skupimy się na `addEventListener` i funkcjach anonimowych, ponieważ jest to prawdopodobnie najczęściej stosowana technika przez programistów webowych. Jest również najbardziej elastyczna, ponieważ `addEventListener` działa dla wszystkich zdarzeń, a nazwę zdarzenia można podać jako parametr.

### Popularne zdarzenia

Istnieje [dziesiątki zdarzeń](https://developer.mozilla.org/docs/Web/Events), które można nasłuchiwać podczas tworzenia aplikacji. W zasadzie każda akcja użytkownika na stronie generuje zdarzenie, co daje ogromną moc w zapewnieniu użytkownikowi pożądanego doświadczenia. Na szczęście zazwyczaj potrzebujesz tylko kilku zdarzeń. Oto kilka popularnych (w tym dwa, których użyjemy podczas tworzenia naszej gry):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Użytkownik kliknął coś, zazwyczaj przycisk lub hiperłącze
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Użytkownik kliknął prawym przyciskiem myszy
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Użytkownik zaznaczył jakiś tekst
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Użytkownik wpisał jakiś tekst

## Tworzenie gry

Stworzymy grę, aby zgłębić, jak działają zdarzenia w JavaScript. Nasza gra będzie testować umiejętności pisania na klawiaturze gracza, co jest jedną z najbardziej niedocenianych umiejętności, które powinien posiadać każdy programista. Wszyscy powinniśmy ćwiczyć pisanie! Ogólny przebieg gry będzie wyglądał tak:

- Gracz klika przycisk start i otrzymuje cytat do przepisania
- Gracz wpisuje cytat tak szybko, jak potrafi, w polu tekstowym
  - Po ukończeniu każdego słowa następne zostaje podświetlone
  - Jeśli gracz popełni literówkę, pole tekstowe zmienia kolor na czerwony
  - Po ukończeniu cytatu wyświetlana jest wiadomość o sukcesie wraz z czasem, który upłynął

Zbudujmy naszą grę i nauczmy się o zdarzeniach!

### Struktura plików

Będziemy potrzebować trzech plików: **index.html**, **script.js** i **style.css**. Zacznijmy od ich przygotowania, aby ułatwić sobie pracę.

- Utwórz nowy folder na swoje pliki, otwierając konsolę lub terminal i wydając następujące polecenie:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Otwórz Visual Studio Code

```bash
code .
```

- Dodaj trzy pliki do folderu w Visual Studio Code o następujących nazwach:
  - index.html
  - script.js
  - style.css

## Tworzenie interfejsu użytkownika

Analizując wymagania, wiemy, że będziemy potrzebować kilku elementów na naszej stronie HTML. To trochę jak przepis, gdzie potrzebujemy składników:

- Miejsce do wyświetlenia cytatu, który użytkownik ma przepisać
- Miejsce do wyświetlenia wiadomości, np. wiadomości o sukcesie
- Pole tekstowe do wpisywania
- Przycisk start

Każdy z tych elementów będzie potrzebował identyfikatorów, abyśmy mogli z nimi pracować w naszym JavaScript. Dodamy również odwołania do plików CSS i JavaScript, które stworzymy.

Utwórz nowy plik o nazwie **index.html**. Dodaj następujący kod HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Uruchomienie aplikacji

Zawsze najlepiej jest rozwijać aplikację iteracyjnie, aby zobaczyć, jak wygląda. Uruchommy naszą aplikację. Istnieje świetne rozszerzenie dla Visual Studio Code o nazwie [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), które będzie hostować Twoją aplikację lokalnie i odświeżać przeglądarkę za każdym razem, gdy zapiszesz zmiany.

- Zainstaluj [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), klikając **Install**
  - Przeglądarka poprosi Cię o otwarcie Visual Studio Code, a następnie Visual Studio Code poprosi o wykonanie instalacji
  - Uruchom ponownie Visual Studio Code, jeśli zostaniesz o to poproszony
- Po zainstalowaniu, w Visual Studio Code, kliknij Ctrl-Shift-P (lub Cmd-Shift-P), aby otworzyć paletę poleceń
- Wpisz **Live Server: Open with Live Server**
  - Live Server zacznie hostować Twoją aplikację
- Otwórz przeglądarkę i przejdź do **https://localhost:5500**
- Powinieneś teraz zobaczyć stronę, którą stworzyłeś!

Dodajmy trochę funkcjonalności.

## Dodanie CSS

Po stworzeniu HTML, dodajmy CSS dla podstawowego stylu. Musimy podświetlić słowo, które gracz powinien wpisywać, oraz zmienić kolor pola tekstowego, jeśli wpisane słowo jest niepoprawne. Zrobimy to za pomocą dwóch klas.

Utwórz nowy plik o nazwie **style.css** i dodaj następujący kod.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Jeśli chodzi o CSS, możesz zaprojektować swoją stronę według własnego uznania. Poświęć trochę czasu, aby uczynić stronę bardziej atrakcyjną:

- Wybierz inną czcionkę
- Pokoloruj nagłówki
- Zmień rozmiar elementów

## JavaScript

Po stworzeniu interfejsu użytkownika, czas skupić się na JavaScript, który dostarczy logikę. Podzielimy to na kilka kroków:

- [Tworzenie stałych](../../../../4-typing-game/typing-game)
- [Nasłuchiwacz zdarzeń do rozpoczęcia gry](../../../../4-typing-game/typing-game)
- [Nasłuchiwacz zdarzeń do wpisywania](../../../../4-typing-game/typing-game)

Najpierw utwórz nowy plik o nazwie **script.js**.

### Tworzenie stałych

Będziemy potrzebować kilku elementów, aby ułatwić sobie programowanie. Podobnie jak w przepisie, oto czego będziemy potrzebować:

- Tablica z listą wszystkich cytatów
- Pusta tablica do przechowywania wszystkich słów z bieżącego cytatu
- Miejsce do przechowywania indeksu słowa, które gracz aktualnie wpisuje
- Czas, w którym gracz kliknął start

Będziemy również potrzebować odwołań do elementów interfejsu użytkownika:

- Pole tekstowe (**typed-value**)
- Wyświetlanie cytatu (**quote**)
- Wiadomość (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Dodaj więcej cytatów do swojej gry

> **NOTE:** Możemy pobierać elementy w dowolnym momencie w kodzie za pomocą `document.getElementById`. Ponieważ będziemy regularnie odwoływać się do tych elementów, unikniemy literówek w ciągach znaków, używając stałych. Frameworki takie jak [Vue.js](https://vuejs.org/) lub [React](https://reactjs.org/) mogą pomóc w lepszym zarządzaniu centralizacją kodu.

Poświęć chwilę na obejrzenie filmu o używaniu `const`, `let` i `var`

[![Rodzaje zmiennych](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Rodzaje zmiennych")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć film o zmiennych.

### Dodanie logiki startu

Aby rozpocząć grę, gracz kliknie przycisk start. Oczywiście nie wiemy, kiedy to zrobi. Tutaj wkracza [nasłuchiwacz zdarzeń](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Nasłuchiwacz zdarzeń pozwoli nam "nasłuchiwać", czy coś się wydarzy (zdarzenie) i wykonać kod w odpowiedzi. W naszym przypadku chcemy wykonać kod, gdy użytkownik kliknie start.

Kiedy użytkownik kliknie **start**, musimy wybrać cytat, skonfigurować interfejs użytkownika oraz ustawić śledzenie bieżącego słowa i czasu. Poniżej znajduje się kod JavaScript, który należy dodać; omówimy go zaraz po bloku kodu.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Rozbijmy kod na części!

- Konfiguracja śledzenia słów
  - Użycie [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) i [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) pozwala nam losowo wybrać cytat z tablicy `quotes`
  - Konwertujemy `quote` na tablicę `words`, aby móc śledzić słowo, które gracz aktualnie wpisuje
  - `wordIndex` ustawiamy na 0, ponieważ gracz zacznie od pierwszego słowa
- Konfiguracja interfejsu użytkownika
  - Tworzymy tablicę `spanWords`, która zawiera każde słowo w elemencie `span`
    - Pozwoli nam to podświetlić słowo na wyświetlaczu
  - `join` tablicy tworzy ciąg znaków, który możemy użyć do aktualizacji `innerHTML` w `quoteElement`
    - To wyświetli cytat graczowi
  - Ustawiamy `className` pierwszego elementu `span` na `highlight`, aby podświetlić go na żółto
  - Czyścimy `messageElement`, ustawiając `innerText` na `''`
- Konfiguracja pola tekstowego
  - Czyścimy bieżącą `value` w `typedValueElement`
  - Ustawiamy `focus` na `typedValueElement`
- Rozpoczynamy timer, wywołując `getTime`

### Dodanie logiki wpisywania

Podczas wpisywania przez gracza generowane jest zdarzenie `input`. Ten nasłuchiwacz zdarzeń sprawdzi, czy gracz poprawnie wpisuje słowo, i obsłuży bieżący status gry. Wracając do **script.js**, dodaj poniższy kod na końcu. Omówimy go zaraz po bloku kodu.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Rozbijmy kod na części! Zaczynamy od pobrania bieżącego słowa i wartości, którą gracz wpisał do tej pory. Następnie mamy logikę kaskadową, gdzie sprawdzamy, czy cytat jest ukończony, słowo jest ukończone, słowo jest poprawne, czy (na końcu) wystąpił błąd.

- Cytat jest ukończony, co wskazuje, że `typedValue` jest równe `currentWord`, a `wordIndex` jest równy jednemu mniej niż `length` `words`
  - Obliczamy `elapsedTime`, odejmując `startTime` od bieżącego czasu
  - Dzielimy `elapsedTime` przez 1,000, aby przeliczyć milisekundy na sekundy
  - Wyświetlamy wiadomość o sukcesie
- Słowo jest ukończone, co wskazuje, że `typedValue` kończy się spacją (koniec słowa) i `typedValue` jest równe `currentWord`
  - Ustawiamy `value` w `typedElement` na `''`, aby umożliwić wpisanie następnego słowa
  - Zwiększamy `wordIndex`, aby przejść do następnego słowa
  - Przechodzimy przez wszystkie `childNodes` w `quoteElement`, ustawiając `className` na `''`, aby przywrócić domyślny wygląd
  - Ustawiamy `className` bieżącego słowa na `highlight`, aby oznaczyć je jako następne słowo do wpisania
- Słowo jest aktualnie wpisywane poprawnie (ale nie ukończone), co wskazuje, że `currentWord` zaczyna się od `typedValue`
  - Upewniamy się, że `typedValueElement` jest wyświetlane jako domyślne, czyszcząc `className`
- Jeśli dotarliśmy do tego miejsca, mamy błąd
  - Ustawiamy `className` w `typedValueElement` na `error`

## Testowanie aplikacji

Dotarłeś do końca! Ostatnim krokiem jest upewnienie się, że nasza aplikacja działa. Wypróbuj ją! Nie martw się, jeśli pojawią się błędy; **wszyscy programiści** mają błędy. Przeanalizuj komunikaty i debuguj w razie potrzeby.

Kliknij **start** i zacznij pisać! Powinno to wyglądać trochę jak animacja, którą widzieliśmy wcześniej.

![Animacja gry w akcji](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Wyzwanie

Dodaj więcej funkcjonalności

- Wyłącz nasłuchiwacz zdarzeń `input` po ukończeniu gry i włącz go ponownie po kliknięciu przycisku
- Wyłącz pole tekstowe, gdy gracz ukończy cytat
- Wyświetl okno dialogowe modalne z wiadomością o sukcesie
- Zapisz najlepsze wyniki za pomocą [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Quiz po wykładzie

[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/22)

## Przegląd i samodzielna nauka

Przeczytaj o [wszystkich dostępnych zdarzeniach](https://developer.mozilla.org/docs/Web/Events) dla programisty w przeglądarce internetowej i zastanów się nad scenariuszami, w których można by użyć każdego z nich.

## Zadanie

[Stwórz nową grę na klawiaturę](assignment.md)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.