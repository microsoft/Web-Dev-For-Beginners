# Zabawa z funkcjami

## Instrukcje

W tym zadaniu poćwiczysz tworzenie różnych typów funkcji, aby utrwalić sobie koncepcje związane z funkcjami w JavaScript, parametrami, wartościami domyślnymi oraz instrukcjami zwracającymi wartość.

Utwórz plik JavaScript o nazwie `functions-practice.js` i zaimplementuj następujące funkcje:

### Część 1: Podstawowe funkcje
1. **Utwórz funkcję o nazwie `sayHello`**, która nie przyjmuje żadnych parametrów i po prostu wypisuje w konsoli "Hello!".

2. **Utwórz funkcję o nazwie `introduceYourself`**, która przyjmuje parametr `name` i wypisuje w konsoli komunikat typu "Hi, my name is [name]".

### Część 2: Funkcje z parametrami domyślnymi
3. **Utwórz funkcję o nazwie `greetPerson`**, która przyjmuje dwa parametry: `name` (wymagany) oraz `greeting` (opcjonalny, domyślnie "Hello"). Funkcja powinna wypisać w konsoli komunikat typu "[greeting], [name]!".

### Część 3: Funkcje zwracające wartości
4. **Utwórz funkcję o nazwie `addNumbers`**, która przyjmuje dwa parametry (`num1` i `num2`) i zwraca ich sumę.

5. **Utwórz funkcję o nazwie `createFullName`**, która przyjmuje parametry `firstName` i `lastName` i zwraca pełne imię i nazwisko jako pojedynczy ciąg znaków.

### Część 4: Połącz wszystko razem
6. **Utwórz funkcję o nazwie `calculateTip`**, która przyjmuje dwa parametry: `billAmount` (wymagany) oraz `tipPercentage` (opcjonalny, domyślnie 15). Funkcja powinna obliczyć i zwrócić kwotę napiwku.

### Część 5: Przetestuj swoje funkcje
Dodaj wywołania funkcji, aby przetestować każdą z nich i wyświetl wyniki za pomocą `console.log()`.

**Przykładowe wywołania testowe:**
```javascript
// Przetestuj tutaj swoje funkcje
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Kryteria oceny

| Kryterium | Wzorowe | Wystarczające | Do poprawy |
| -------- | --------- | -------- | ----------------- |
| **Tworzenie funkcji** | Wszystkie 6 funkcji jest poprawnie zaimplementowanych z prawidłową składnią i nazwami | 4-5 funkcji jest poprawnie zaimplementowanych z drobnymi błędami składniowymi | 3 lub mniej funkcji zaimplementowanych lub poważne błędy składniowe |
| **Parametry i wartości domyślne** | Poprawne użycie wymaganych i opcjonalnych parametrów oraz wartości domyślnych zgodnie z wymaganiami | Parametry są używane poprawnie, ale mogą występować problemy z wartościami domyślnymi | Niepoprawna lub brak implementacji parametrów |
| **Wartości zwracane** | Funkcje, które mają zwracać wartości robią to poprawnie, a funkcje bez zwracania wykonują tylko akcje | Większość wartości zwracanych jest poprawna z drobnymi błędami | Znaczące problemy z instrukcjami zwracającymi wartości |
| **Jakość kodu** | Czysty, dobrze zorganizowany kod z czytelnymi nazwami zmiennych i odpowiednim wcięciem | Kod działa, ale mógłby być czyściej napisany lub lepiej zorganizowany | Kod jest trudny do odczytania lub źle zorganizowany |
| **Testowanie** | Wszystkie funkcje są przetestowane odpowiednimi wywołaniami, a wyniki są jasno wyświetlone | Większość funkcji jest odpowiednio przetestowana | Ograniczone lub niepoprawne testowanie funkcji |

## Wyzwania dodatkowe (opcjonalne)

Jeśli chcesz się dodatkowo sprawdzić:

1. **Utwórz wersję funkcji jako funkcję strzałkową** jednej ze swoich funkcji
2. **Utwórz funkcję, która przyjmuje inną funkcję jako parametr** (jak w przykładach z `setTimeout` z lekcji)
3. **Dodaj walidację danych wejściowych**, aby funkcje obsługiwały niepoprawne dane wejściowe w sposób łagodny

---

> 💡 **Wskazówka**: Pamiętaj, aby otworzyć konsolę deweloperską przeglądarki (F12), aby zobaczyć wyniki twoich poleceń `console.log()`!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że staramy się zapewnić dokładność, prosimy pamiętać, że tłumaczenia automatyczne mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy uważać za źródło autorytatywne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonywanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->