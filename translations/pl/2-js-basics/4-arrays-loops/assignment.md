<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2026-01-06T19:02:52+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "pl"
}
-->
# Tablice i Pętle - Zadanie

## Instrukcje

Wykonaj następujące ćwiczenia, aby poćwiczyć pracę z tablicami i pętlami. Każde ćwiczenie opiera się na koncepcjach z lekcji i zachęca do stosowania różnych typów pętli i metod tablicowych.

### Ćwiczenie 1: Generator wzoru liczbowego
Stwórz program, który wypisuje co trzecią liczbę w zakresie 1-20 i wyświetla ją w konsoli.

**Wymagania:**
- Użyj pętli `for` z niestandardowym przyrostem
- Wyświetl liczby w formacie przyjaznym dla użytkownika
- Dodaj opisowe komentarze wyjaśniające Twoją logikę

**Oczekiwany wynik:**
```
3, 6, 9, 12, 15, 18
```

> **Wskazówka:** Zmodyfikuj wyrażenie iteracyjne w swojej pętli for, aby pomijać liczby.

### Ćwiczenie 2: Analiza tablicy
Stwórz tablicę z co najmniej 8 różnymi liczbami i napisz funkcje analizujące dane.

**Wymagania:**
- Stwórz tablicę o nazwie `numbers` zawierającą co najmniej 8 wartości
- Napisz funkcję `findMaximum()`, która zwraca największą liczbę
- Napisz funkcję `findMinimum()`, która zwraca najmniejszą liczbę  
- Napisz funkcję `calculateSum()`, która zwraca sumę wszystkich liczb
- Przetestuj każdą funkcję i wyświetl wyniki

**Dodatkowe wyzwanie:** Stwórz funkcję, która znajdzie drugą co do wielkości liczbę w tablicy.

### Ćwiczenie 3: Przetwarzanie tablicy łańcuchów znaków
Stwórz tablicę swoich ulubionych filmów/książek/piosenek i poćwicz różne typy pętli.

**Wymagania:**
- Stwórz tablicę z co najmniej 5 wartościami typu string
- Użyj tradycyjnej pętli `for`, aby wyświetlić elementy z numeracją (1. Nazwa elementu)
- Użyj pętli `for...of`, aby wyświetlić elementy wielkimi literami
- Użyj metody `forEach()`, aby policzyć i wyświetlić łączną liczbę znaków

**Przykładowy wynik:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Ćwiczenie 4: Filtrowanie danych (zaawansowane)
Stwórz program, który przetwarza tablicę obiektów reprezentujących studentów.

**Wymagania:**
- Stwórz tablicę co najmniej 5 obiektów studenckich z właściwościami: `name`, `age`, `grade`
- Użyj pętli, aby znaleźć studentów mających 18 lat lub więcej
- Oblicz średnią ocenę wszystkich studentów
- Stwórz nową tablicę zawierającą tylko studentów z ocenami powyżej 85

**Przykładowa struktura:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Dodaj więcej uczniów...
];
```

## Testowanie Twojego kodu

Przetestuj swoje programy poprzez:
1. Uruchomienie każdego ćwiczenia w konsoli przeglądarki
2. Sprawdzenie, czy wyniki odpowiadają oczekiwanym rezultatom
3. Testowanie na różnych zestawach danych
4. Sprawdzenie, czy kod radzi sobie z przypadkami brzegowymi (puste tablice, pojedyncze elementy)

## Wytyczne dotyczące zgłoszenia

Załącz w swoim zgłoszeniu:
- Dobrze skomentowany kod JavaScript dla każdego ćwiczenia
- Zrzuty ekranu lub tekstowe wyniki pokazujące działanie programów
- Krótkie wyjaśnienie, którego rodzaju pętli użyłeś dla każdego zadania i dlaczego

## Kryteria oceny

| Kryteria | Wzorowe (3 punkty) | Wystarczające (2 punkty) | Wymaga poprawy (1 punkt) |
| -------- | ------------------ | ----------------------- | ----------------------- |
| **Funkcjonalność** | Wszystkie ćwiczenia wykonane poprawnie wraz z dodatkowymi wyzwaniami | Wszystkie wymagane ćwiczenia działają poprawnie | Niektóre ćwiczenia niekompletne lub zawierają błędy |
| **Jakość kodu** | Czysty, dobrze zorganizowany kod z opisowymi nazwami zmiennych | Kod działa, ale mógłby być czyściej napisany | Kod jest nieuporządkowany lub trudny do zrozumienia |
| **Komentarze** | Szczegółowe komentarze wyjaśniające logikę i decyzje | Obecne podstawowe komentarze | Minimalna ilość lub brak komentarzy |
| **Użycie pętli** | Pokazuje odpowiednie zrozumienie różnych typów pętli | Użycie pętli jest poprawne, ale mało różnorodne | Nieprawidłowe lub nieefektywne użycie pętli |
| **Testowanie** | Dowody dokładnego testowania w różnych scenariuszach | Podstawowe testowanie jest widoczne | Brak lub niewielka ilość dowodów testowania |

## Pytania do refleksji

Po ukończeniu ćwiczeń zastanów się:
1. Który typ pętli był dla Ciebie najnaturalniejszy do użycia i dlaczego?
2. Jakie wyzwania napotkałeś pracując z tablicami?
3. Jak te umiejętności mogą się przydać w rzeczywistych projektach webowych?
4. Co zrobił(a)byś inaczej, aby zoptymalizować swój kod pod kątem wydajności?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub niedokładności. Oryginalny dokument w jego rodzinnym języku powinien być traktowany jako źródło autorytatywne. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia wykonywanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->