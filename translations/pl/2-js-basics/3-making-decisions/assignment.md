# Podejmowanie decyzji: Procesor ocen uczniów

## Cele nauki

W tym zadaniu poćwiczysz koncepcje podejmowania decyzji z tej lekcji, tworząc program przetwarzający oceny uczniów z różnych systemów oceniania. Użyjesz instrukcji `if...else`, operatorów porównania i operatorów logicznych, aby określić, którzy uczniowie zaliczają swoje kursy.

## Wyzwanie

Pracujesz w szkole, która niedawno połączyła się z inną instytucją. Teraz musisz przetworzyć oceny uczniów z dwóch zupełnie różnych systemów oceniania i określić, którzy uczniowie zaliczają. To doskonała okazja do ćwiczenia logiki warunkowej!

### Zrozumienie systemów oceniania

#### Pierwszy system oceniania (numeryczny)
- Oceny są wyrażane liczbami od 1 do 5
- **Ocena zaliczająca**: 3 i powyżej (3, 4 lub 5)
- **Ocena niezaliczająca**: poniżej 3 (1 lub 2)

#### Drugi system oceniania (oceny literowe)
- Oceny używają liter: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Oceny zaliczające**: `A`, `A-`, `B`, `B-`, `C`, `C-` (wszystkie wymienione oceny zaliczają)
- **Uwaga**: Ten system nie zawiera ocen niezaliczających, takich jak `D` lub `F`

### Twoje zadanie

Mając podaną tablicę `allStudents` przedstawiającą wszystkich uczniów i ich oceny, utwórz nową tablicę `studentsWhoPass`, zawierającą wszystkich uczniów, którzy zaliczają zgodnie z ich odpowiednimi systemami oceniania.

```javascript
let allStudents = [
  'A',    // Ocena literowa - zaliczone
  'B-',   // Ocena literowa - zaliczone
  1,      // Ocena liczbowa - niezaliczone
  4,      // Ocena liczbowa - zaliczone
  5,      // Ocena liczbowa - zaliczone
  2       // Ocena liczbowa - niezaliczone
];

let studentsWhoPass = [];
```

### Podejście krok po kroku

1. **Ustaw pętlę**, aby przejść przez każdą ocenę w tablicy `allStudents`
2. **Sprawdź typ oceny** (czy jest to liczba czy łańcuch znaków?)
3. **Zastosuj odpowiednie zasady systemu oceniania**:
   - Dla liczb: sprawdź, czy ocena >= 3
   - Dla łańcuchów znaków: sprawdź, czy to jedna z ważnych zaliczających ocen literowych
4. **Dodaj zaliczające oceny** do tablicy `studentsWhoPass`

### Przydatne techniki kodowania

Użyj tych koncepcji JavaScript z lekcji:

- **operator typeof**: `typeof grade === 'number'` aby sprawdzić, czy to ocena numeryczna
- **operatory porównania**: `>=` do porównywania ocen numerycznych
- **operatory logiczne**: `||` do sprawdzania wielu warunków oceny literowej
- **instrukcje if...else**: do obsługi różnych systemów oceniania
- **metody tablicowe**: `.push()` do dodawania zaliczających ocen do nowej tablicy

### Oczekiwany wynik

Po uruchomieniu programu `studentsWhoPass` powinno zawierać: `['A', 'B-', 4, 5]`

**Dlaczego te oceny zaliczają:**
- `'A'` i `'B-'` to ważne oceny literowe (wszystkie oceny literowe w tym systemie zaliczają)
- `4` i `5` to oceny numeryczne >= 3
- `1` i `2` nie zaliczają, bo to oceny numeryczne < 3

## Testowanie rozwiązania

Testuj swój kod w różnych scenariuszach:

```javascript
// Testuj z różnymi kombinacjami ocen
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Twoje rozwiązanie powinno działać z dowolną kombinacją ważnych ocen
```

## Bonusowe wyzwania

Po ukończeniu podstawowego zadania wypróbuj te rozszerzenia:

1. **Dodaj walidację**: Sprawdź nieprawidłowe oceny (np. liczby ujemne lub niepoprawne litery)
2. **Zlicz statystyki**: Oblicz, ile uczniów zalicza, a ile nie
3. **Konwersja ocen**: Przekonwertuj wszystkie oceny na jeden system numeryczny (A=5, B=4, C=3, itd.)

## Kryteria oceny

| Kryterium | Wzorowe (4) | Dobre (3) | Rozwijające się (2) | Początkujące (1) |
|-----------|-------------|-----------|---------------------|------------------|
| **Funkcjonalność** | Program poprawnie identyfikuje wszystkie zaliczające oceny z obu systemów | Program działa z drobnymi problemami lub wyjątkami | Program działa częściowo, ale ma błędy logiczne | Program ma poważne błędy lub nie działa |
| **Struktura kodu** | Czysty, dobrze zorganizowany kod z właściwą logiką if...else | Dobra struktura z odpowiednimi instrukcjami warunkowymi | Akceptowalna struktura z pewnymi problemami organizacyjnymi | Słaba struktura, trudna do zrozumienia logika |
| **Użycie koncepcji** | Skuteczne wykorzystanie operatorów porównania, operatorów logicznych i instrukcji warunkowych | Dobre użycie koncepcji lekcji z drobnymi lukami | Częściowe użycie koncepcji lekcji, ale brak kluczowych elementów | Ograniczone użycie koncepcji lekcji |
| **Rozwiązywanie problemów** | Jasne zrozumienie problemu i eleganckie podejście do rozwiązania | Dobre podejście do rozwiązywania problemu z solidną logiką | Wystarczające rozwiązywanie problemów z pewnym zamieszaniem | Niejasne podejście, brak wykazania zrozumienia |

## Wytyczne dotyczące przesyłania

1. **Dokładnie testuj kod** z podanymi przykładami
2. **Dodaj komentarze** wyjaśniające logikę, szczególnie instrukcje warunkowe
3. **Sprawdź, czy wynik** odpowiada oczekiwanym rezultatom: `['A', 'B-', 4, 5]`
4. **Uwzględnij przypadki brzegowe** takie jak puste tablice lub nieoczekiwane typy danych

> 💡 **Przydatna wskazówka**: Zacznij prosto! Najpierw uruchom podstawową funkcjonalność, a potem dodaj bardziej zaawansowane funkcje. Pamiętaj, celem jest ćwiczenie logiki podejmowania decyzji przy użyciu narzędzi poznanych w tej lekcji.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu automatycznej usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy mieć na uwadze, że tłumaczenia automatyczne mogą zawierać błędy lub niedokładności. Oryginalny dokument w języku źródłowym należy traktować jako autorytatywne źródło. W przypadku informacji o istotnym znaczeniu zalecamy skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->