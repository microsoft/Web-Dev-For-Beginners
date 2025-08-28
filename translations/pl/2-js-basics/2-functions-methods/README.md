<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-24T12:17:00+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "pl"
}
-->
# Podstawy JavaScript: Metody i Funkcje

![Podstawy JavaScript - Funkcje](../../../../sketchnotes/webdev101-js-functions.png)
> Sketchnotka autorstwa [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz przed wykładem
[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/9)

Kiedy myślimy o pisaniu kodu, zawsze chcemy, aby był on czytelny. Choć może to brzmieć paradoksalnie, kod jest czytany znacznie częściej niż pisany. Jednym z podstawowych narzędzi w zestawie programisty, które pomaga w tworzeniu łatwego do utrzymania kodu, jest **funkcja**.

[![Metody i Funkcje](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metody i Funkcje")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć wideo o metodach i funkcjach.

> Możesz przerobić tę lekcję na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funkcje

Funkcja to w swojej istocie blok kodu, który możemy wykonać na żądanie. Jest to idealne rozwiązanie w sytuacjach, gdy musimy wykonać to samo zadanie wielokrotnie; zamiast duplikować logikę w różnych miejscach (co utrudniałoby jej aktualizację w przyszłości), możemy scentralizować ją w jednym miejscu i wywoływać, gdy tylko zajdzie potrzeba. Co więcej, funkcje można wywoływać z innych funkcji!

Równie ważna jest możliwość nadania funkcji nazwy. Choć może to wydawać się trywialne, nazwa stanowi szybki sposób na udokumentowanie fragmentu kodu. Można to porównać do etykiety na przycisku. Jeśli kliknę przycisk z napisem „Anuluj timer”, wiem, że zatrzyma on odliczanie.

## Tworzenie i wywoływanie funkcji

Składnia funkcji wygląda następująco:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Jeśli chciałbym stworzyć funkcję wyświetlającą powitanie, mogłaby wyglądać tak:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Kiedy chcemy wywołać (lub uruchomić) naszą funkcję, używamy jej nazwy, a następnie `()`. Warto zauważyć, że funkcja może być zdefiniowana zarówno przed, jak i po jej wywołaniu; kompilator JavaScript znajdzie ją za nas.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Istnieje specjalny typ funkcji znany jako **metoda**, z którym już się spotkałeś! Widzieliśmy to w naszym przykładzie, gdy używaliśmy `console.log`. To, co odróżnia metodę od funkcji, to fakt, że metoda jest przypisana do obiektu (w naszym przykładzie `console`), podczas gdy funkcja jest niezależna. Wielu programistów używa tych terminów zamiennie.

### Najlepsze praktyki dotyczące funkcji

Oto kilka najlepszych praktyk, o których warto pamiętać podczas tworzenia funkcji:

- Zawsze używaj opisowych nazw, aby wiedzieć, co dana funkcja robi
- Stosuj **camelCase** do łączenia słów
- Skupiaj funkcje na jednym, konkretnym zadaniu

## Przekazywanie informacji do funkcji

Aby funkcja była bardziej uniwersalna, często będziesz chciał przekazywać do niej informacje. Jeśli weźmiemy nasz przykład `displayGreeting`, wyświetli on jedynie **Hello, world!**. Niezbyt użyteczna funkcja, prawda? Aby uczynić ją bardziej elastyczną, możemy pozwolić użytkownikowi określić imię osoby, którą chcemy powitać, dodając **parametr**. Parametr (czasami nazywany również **argumentem**) to dodatkowa informacja przekazywana do funkcji.

Parametry są wymieniane w definicji funkcji w nawiasach i oddzielane przecinkami, jak poniżej:

```javascript
function name(param, param2, param3) {

}
```

Możemy zaktualizować naszą funkcję `displayGreeting`, aby akceptowała imię i wyświetlała je.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Kiedy chcemy wywołać funkcję i przekazać parametr, podajemy go w nawiasach.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Wartości domyślne

Możemy uczynić naszą funkcję jeszcze bardziej elastyczną, dodając więcej parametrów. Ale co, jeśli nie chcemy wymagać podania każdej wartości? Wracając do naszego przykładu powitania, możemy pozostawić imię jako wymagane (musimy wiedzieć, kogo witamy), ale chcemy umożliwić dostosowanie samego powitania. Jeśli ktoś nie chce go zmieniać, możemy zapewnić wartość domyślną. Aby ustawić wartość domyślną dla parametru, przypisujemy ją w podobny sposób, jak przypisujemy wartość do zmiennej - `parameterName = 'defaultValue'`. Oto pełny przykład:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Podczas wywoływania funkcji możemy zdecydować, czy chcemy ustawić wartość dla `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Wartości zwracane

Do tej pory funkcje, które stworzyliśmy, zawsze wyświetlały wynik w [konsoli](https://developer.mozilla.org/docs/Web/API/console). Czasami jest to dokładnie to, czego potrzebujemy, zwłaszcza gdy tworzymy funkcje wywołujące inne usługi. Ale co, jeśli chcemy stworzyć funkcję pomocniczą, która wykona obliczenie i zwróci wynik, abyśmy mogli go użyć gdzie indziej?

Możemy to zrobić, używając **wartości zwracanej**. Wartość zwracana jest zwracana przez funkcję i może być przechowywana w zmiennej, tak samo jak możemy przechowywać wartość literalną, taką jak ciąg znaków lub liczba.

Jeśli funkcja zwraca coś, używamy słowa kluczowego `return`. Słowo kluczowe `return` oczekuje wartości lub referencji tego, co jest zwracane, jak poniżej:

```javascript
return myVariable;
```  

Możemy stworzyć funkcję, która tworzy wiadomość powitalną i zwraca ją do wywołującego.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Podczas wywoływania tej funkcji przechowamy wartość w zmiennej. Jest to bardzo podobne do przypisania zmiennej wartości statycznej (np. `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funkcje jako parametry dla funkcji

W miarę postępów w karierze programistycznej napotkasz funkcje, które akceptują inne funkcje jako parametry. Ten sprytny trik jest często używany, gdy nie wiemy, kiedy coś się wydarzy lub zakończy, ale wiemy, że musimy wykonać operację w odpowiedzi.

Na przykład, rozważ [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), który uruchamia timer i wykonuje kod po jego zakończeniu. Musimy powiedzieć mu, jaki kod chcemy wykonać. Brzmi jak idealne zadanie dla funkcji!

Jeśli uruchomisz poniższy kod, po 3 sekundach zobaczysz wiadomość **3 sekundy minęły**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Funkcje anonimowe

Przyjrzyjmy się jeszcze raz temu, co stworzyliśmy. Tworzymy funkcję z nazwą, która zostanie użyta tylko raz. W miarę jak nasza aplikacja staje się bardziej złożona, możemy zauważyć, że tworzymy wiele funkcji, które będą wywoływane tylko raz. Nie jest to idealne. Jak się okazuje, nie zawsze musimy nadawać funkcji nazwę!

Kiedy przekazujemy funkcję jako parametr, możemy pominąć jej wcześniejsze tworzenie i zamiast tego zbudować ją jako część parametru. Używamy tego samego słowa kluczowego `function`, ale tworzymy ją jako parametr.

Przepiszmy powyższy kod, aby użyć funkcji anonimowej:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Jeśli uruchomisz nasz nowy kod, zauważysz, że uzyskujemy te same wyniki. Stworzyliśmy funkcję, ale nie musieliśmy nadawać jej nazwy!

### Funkcje strzałkowe

Jednym z uproszczeń powszechnych w wielu językach programowania (w tym w JavaScript) jest możliwość użycia tzw. **funkcji strzałkowych** lub **grubych strzałek**. Używają one specjalnego wskaźnika `=>`, który wygląda jak strzałka - stąd nazwa! Dzięki `=>` możemy pominąć słowo kluczowe `function`.

Przepiszmy nasz kod jeszcze raz, aby użyć funkcji strzałkowej:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Kiedy używać której strategii

Widziałeś teraz trzy sposoby przekazywania funkcji jako parametru i możesz się zastanawiać, kiedy używać którego. Jeśli wiesz, że będziesz używać funkcji więcej niż raz, stwórz ją w tradycyjny sposób. Jeśli będziesz jej używać tylko w jednym miejscu, zazwyczaj najlepiej jest użyć funkcji anonimowej. To, czy użyjesz funkcji strzałkowej, czy bardziej tradycyjnej składni `function`, zależy od Ciebie, ale zauważysz, że większość nowoczesnych programistów preferuje `=>`.

---

## 🚀 Wyzwanie

Czy potrafisz w jednym zdaniu wyjaśnić różnicę między funkcjami a metodami? Spróbuj!

## Quiz po wykładzie
[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/10)

## Przegląd i samodzielna nauka

Warto [przeczytać więcej o funkcjach strzałkowych](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), ponieważ są one coraz częściej używane w kodzie. Poćwicz pisanie funkcji, a następnie przepisz ją, używając tej składni.

## Zadanie

[Zabawa z funkcjami](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.