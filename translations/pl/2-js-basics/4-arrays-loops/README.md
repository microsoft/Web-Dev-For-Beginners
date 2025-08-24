<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f7f87871312cf6cc12662da7d973182",
  "translation_date": "2025-08-24T12:19:55+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "pl"
}
-->
# Podstawy JavaScript: Tablice i Pętle

![Podstawy JavaScript - Tablice](../../../../sketchnotes/webdev101-js-arrays.png)
> Sketchnote autorstwa [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz przed wykładem
[Quiz przed wykładem](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/13)

Ta lekcja obejmuje podstawy JavaScript, języka, który zapewnia interaktywność w sieci. W tej lekcji nauczysz się o tablicach i pętlach, które są używane do manipulacji danymi.

[![Tablice](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tablice")

[![Pętle](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Pętle")

> 🎥 Kliknij obrazy powyżej, aby obejrzeć filmy o tablicach i pętlach.

> Możesz przerobić tę lekcję na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Tablice

Praca z danymi to częste zadanie w każdym języku programowania, a jest ono znacznie łatwiejsze, gdy dane są zorganizowane w strukturalnym formacie, takim jak tablice. W tablicach dane są przechowywane w strukturze podobnej do listy. Jedną z głównych zalet tablic jest to, że można w nich przechowywać różne typy danych.

✅ Tablice są wszędzie wokół nas! Czy potrafisz wymyślić przykład tablicy w prawdziwym życiu, na przykład tablicę paneli słonecznych?

Składnia tablicy to para nawiasów kwadratowych.

```javascript
let myArray = [];
```

To jest pusta tablica, ale tablice mogą być deklarowane już wypełnione danymi. Wartości w tablicy są oddzielone przecinkiem.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Wartości w tablicy są przypisane do unikalnej wartości zwanej **indeksem**, która jest liczbą całkowitą przypisaną na podstawie jej odległości od początku tablicy. W powyższym przykładzie wartość "Chocolate" ma indeks 0, a indeks "Rocky Road" to 4. Użyj indeksu z nawiasami kwadratowymi, aby pobrać, zmienić lub wstawić wartości tablicy.

✅ Czy zaskakuje Cię, że tablice zaczynają się od indeksu zero? W niektórych językach programowania indeksy zaczynają się od 1. To ciekawa historia, którą możesz [przeczytać na Wikipedii](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Możesz wykorzystać indeks, aby zmienić wartość, na przykład tak:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

A możesz wstawić nową wartość na określonym indeksie w ten sposób:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Bardziej powszechnym sposobem dodawania wartości do tablicy jest użycie operatorów tablicowych, takich jak array.push()

Aby dowiedzieć się, ile elementów znajduje się w tablicy, użyj właściwości `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Spróbuj sam! Użyj konsoli przeglądarki, aby stworzyć i manipulować tablicą własnego pomysłu.

## Pętle

Pętle pozwalają nam wykonywać powtarzalne lub **iteracyjne** zadania i mogą zaoszczędzić dużo czasu oraz kodu. Każda iteracja może różnić się zmiennymi, wartościami i warunkami. W JavaScript istnieją różne rodzaje pętli, które mają drobne różnice, ale zasadniczo robią to samo: iterują dane.

### Pętla for

Pętla `for` wymaga 3 części do iteracji:
- `counter` Zmienna, która zazwyczaj jest inicjalizowana liczbą i liczy liczbę iteracji
- `condition` Wyrażenie używające operatorów porównania, które powoduje zatrzymanie pętli, gdy zwróci wartość `false`
- `iteration-expression` Uruchamiane na końcu każdej iteracji, zazwyczaj używane do zmiany wartości licznika
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Uruchom ten kod w konsoli przeglądarki. Co się stanie, gdy wprowadzisz drobne zmiany w liczniku, warunku lub wyrażeniu iteracyjnym? Czy możesz sprawić, by działała wstecz, tworząc odliczanie?

### Pętla while

W przeciwieństwie do składni pętli `for`, pętle `while` wymagają jedynie warunku, który zatrzyma pętlę, gdy warunek stanie się `false`. Warunki w pętlach zazwyczaj opierają się na innych wartościach, takich jak liczniki, i muszą być zarządzane podczas pętli. Wartości początkowe liczników muszą być utworzone poza pętlą, a wszelkie wyrażenia spełniające warunek, w tym zmiana licznika, muszą być utrzymywane wewnątrz pętli.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Dlaczego wybrałbyś pętlę for zamiast while? 17 tysięcy użytkowników miało to samo pytanie na StackOverflow, a niektóre opinie [mogą Cię zainteresować](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Pętle i tablice

Tablice są często używane z pętlami, ponieważ większość warunków wymaga długości tablicy, aby zatrzymać pętlę, a indeks może również być wartością licznika.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Eksperymentuj z iterowaniem po tablicy własnego pomysłu w konsoli przeglądarki. 

---

## 🚀 Wyzwanie

Istnieją inne sposoby iterowania po tablicach niż pętle for i while. Są to [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) oraz [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Przepisz swoją pętlę tablicową, używając jednej z tych technik.

## Quiz po wykładzie
[Quiz po wykładzie](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/14)

## Przegląd i samodzielna nauka

Tablice w JavaScript mają wiele metod, które są niezwykle przydatne do manipulacji danymi. [Przeczytaj o tych metodach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) i wypróbuj niektóre z nich (takie jak push, pop, slice i splice) na tablicy własnego pomysłu.

## Zadanie

[Iterowanie po tablicy](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.