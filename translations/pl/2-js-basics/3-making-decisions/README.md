<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T16:33:25+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "pl"
}
-->
# Podstawy JavaScript: Podejmowanie decyzji

![Podstawy JavaScript - Podejmowanie decyzji](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.pl.png)

> Sketchnote autorstwa [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/11)

Podejmowanie decyzji i kontrolowanie kolejności wykonywania kodu sprawia, że Twój kod staje się bardziej uniwersalny i solidny. W tej sekcji omówimy składnię kontrolowania przepływu danych w JavaScript oraz jej znaczenie w połączeniu z typami danych Boolean.

[![Podejmowanie decyzji](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Podejmowanie decyzji")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć wideo o podejmowaniu decyzji.

> Możesz przerobić tę lekcję na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Krótkie przypomnienie o typach Boolean

Typy Boolean mogą przyjmować tylko dwie wartości: `true` lub `false`. Typy Boolean pomagają podejmować decyzje, które linie kodu powinny być wykonane, gdy spełnione są określone warunki.

Ustaw wartość Boolean na true lub false w ten sposób:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Typy Boolean zostały nazwane na cześć angielskiego matematyka, filozofa i logika George'a Boole'a (1815–1864).

## Operatory porównania i typy Boolean

Operatory są używane do oceny warunków poprzez porównania, które generują wartość typu Boolean. Poniżej znajduje się lista często używanych operatorów.

| Symbol | Opis                                                                                                                                                          | Przykład           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mniejsze niż**: Porównuje dwie wartości i zwraca wartość `true`, jeśli wartość po lewej stronie jest mniejsza niż wartość po prawej                         | `5 < 6 // true`    |
| `<=`   | **Mniejsze lub równe**: Porównuje dwie wartości i zwraca wartość `true`, jeśli wartość po lewej stronie jest mniejsza lub równa wartości po prawej            | `5 <= 6 // true`   |
| `>`    | **Większe niż**: Porównuje dwie wartości i zwraca wartość `true`, jeśli wartość po lewej stronie jest większa niż wartość po prawej                           | `5 > 6 // false`   |
| `>=`   | **Większe lub równe**: Porównuje dwie wartości i zwraca wartość `true`, jeśli wartość po lewej stronie jest większa lub równa wartości po prawej              | `5 >= 6 // false`  |
| `===`  | **Ścisła równość**: Porównuje dwie wartości i zwraca wartość `true`, jeśli wartości po prawej i lewej stronie są równe **i** mają ten sam typ danych          | `5 === 6 // false` |
| `!==`  | **Nierówność**: Porównuje dwie wartości i zwraca przeciwną wartość Boolean do tej, którą zwróciłby operator ścisłej równości                                  | `5 !== 6 // true`  |

✅ Sprawdź swoją wiedzę, pisząc kilka porównań w konsoli przeglądarki. Czy jakieś zwrócone dane Cię zaskoczyły?

## Instrukcja If

Instrukcja if wykona kod znajdujący się w jej blokach, jeśli warunek jest spełniony.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Operatory logiczne są często używane do tworzenia warunków.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## Instrukcja If..Else

Instrukcja `else` wykona kod znajdujący się w jej blokach, gdy warunek jest fałszywy. Jest opcjonalna w przypadku instrukcji `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Przetestuj swoje zrozumienie tego kodu oraz poniższego kodu, uruchamiając go w konsoli przeglądarki. Zmień wartości zmiennych currentMoney i laptopPrice, aby zmienić zwrócone `console.log()`.

## Instrukcja Switch

Instrukcja `switch` jest używana do wykonywania różnych działań w zależności od różnych warunków. Użyj instrukcji `switch`, aby wybrać jeden z wielu bloków kodu do wykonania.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Przetestuj swoje zrozumienie tego kodu oraz poniższego kodu, uruchamiając go w konsoli przeglądarki. Zmień wartości zmiennej a, aby zmienić zwrócone `console.log()`.

## Operatory logiczne i typy Boolean

Podejmowanie decyzji może wymagać więcej niż jednego porównania, które można połączyć za pomocą operatorów logicznych, aby uzyskać wartość typu Boolean.

| Symbol | Opis                                                                                     | Przykład                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logiczne AND**: Porównuje dwa wyrażenia Boolean. Zwraca true **tylko** wtedy, gdy obie strony są true | `(5 > 6) && (5 < 6 ) //Jedna strona jest fałszywa, druga prawdziwa. Zwraca false` |
| `\|\|` | **Logiczne OR**: Porównuje dwa wyrażenia Boolean. Zwraca true, jeśli przynajmniej jedna strona jest true | `(5 > 6) \|\| (5 < 6) //Jedna strona jest fałszywa, druga prawdziwa. Zwraca true` |
| `!`    | **Logiczne NOT**: Zwraca przeciwną wartość wyrażenia Boolean                             | `!(5 > 6) // 5 nie jest większe niż 6, ale "!" zwróci true`             |

## Warunki i decyzje z operatorami logicznymi

Operatory logiczne mogą być używane do tworzenia warunków w instrukcjach if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Operator negacji

Do tej pory widziałeś, jak można używać instrukcji `if...else` do tworzenia logiki warunkowej. Wszystko, co trafia do `if`, musi być ocenione jako true/false. Korzystając z operatora `!`, możesz _zanegować_ wyrażenie. Wyglądałoby to tak:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Wyrażenia trójargumentowe

`if...else` nie jest jedynym sposobem wyrażania logiki decyzji. Możesz również użyć czegoś, co nazywa się operatorem trójargumentowym. Jego składnia wygląda tak:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Poniżej znajduje się bardziej konkretny przykład:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Poświęć chwilę, aby przeczytać ten kod kilka razy. Czy rozumiesz, jak działają te operatory?

Powyższy kod mówi, że:

- jeśli `firstNumber` jest większy niż `secondNumber`
- przypisz `firstNumber` do `biggestNumber`
- w przeciwnym razie przypisz `secondNumber`.

Wyrażenie trójargumentowe to po prostu zwarta forma zapisu poniższego kodu:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Wyzwanie

Napisz program, który najpierw używa operatorów logicznych, a następnie przepisz go, używając wyrażenia trójargumentowego. Która składnia jest dla Ciebie bardziej intuicyjna?

---

## Quiz po wykładzie

[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/12)

## Przegląd i samodzielna nauka

Przeczytaj więcej o wielu dostępnych operatorach [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Przejrzyj wspaniałą [wyszukiwarkę operatorów](https://joshwcomeau.com/operator-lookup/) autorstwa Josha Comeau!

## Zadanie

[Operatory](assignment.md)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.