# Szkic gry: Zastosuj wzorce projektowe

## Podsumowanie zadania

Wykorzystaj swoją nowo nabytą wiedzę o wzorcach projektowych, tworząc prosty prototyp gry! To zadanie pomoże Ci poćwiczyć zarówno wzorce architektoniczne (dziedziczenie lub kompozycję), jak i system komunikacji pub/sub, który poznałeś podczas lekcji.

## Instrukcje

Stwórz prostą reprezentację gry, która demonstruje wzorce projektowe z tej lekcji. Twoja gra powinna być funkcjonalna, ale nie musi mieć skomplikowanej grafiki – skup się na podstawowej architekturze i wzorcach komunikacji.

### Wymagania

**Wybierz wzorzec architektury:**
- **Opcja A**: Użyj dziedziczenia opartego na klasach (tak jak w przykładzie `GameObject` → `Movable` → `Hero`)
- **Opcja B**: Użyj kompozycji (tak jak w podejściu fabryki funkcji z mieszanymi zachowaniami)

**Zaimplementuj komunikację:**
- **Dołącz** klasę `EventEmitter` do wiadomości pub/sub
- **Skonfiguruj** co najmniej 2-3 różne typy wiadomości (np. `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Połącz** wejście użytkownika (klawiatura/mysz) z zdarzeniami gry poprzez system zdarzeń

**Elementy gry do zawarcia:**
- Co najmniej jedna postać sterowana przez gracza
- Co najmniej jeden inny obiekt gry (wróg, przedmiot do zbierania lub element środowiska)
- Podstawowa interakcja między obiektami (kolizja, zbieranie lub komunikacja)

### Proponowane pomysły na grę

**Proste gry do rozważenia:**
- **Gra w Węża** – segmenty węża podążają za głową, jedzenie pojawia się losowo
- **Wariacja Pong** – paletka reaguje na wejście, piłka odbija się od ścian
- **Gra Kolekcjonerska** – gracz porusza się, zbierając przedmioty i unikając przeszkód
- **Podstawy Tower Defense** – wieże wykrywają i strzelają do poruszających się wrogów

### Wytyczne dotyczące struktury kodu

```javascript
// Przykładowa struktura początkowa
const Messages = {
  // Zdefiniuj tutaj wiadomości swojej gry
};

class EventEmitter {
  // Twoja implementacja systemu zdarzeń
}

// Wybierz podejście oparte na klasach LUB kompozycji
// Przykład oparty na klasach:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// LUB przykład kompozycji:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testowanie twojej implementacji

**Sprawdź, czy twój kod działa poprzez:**
- **Testowanie**, czy obiekty się poruszają lub zmieniają po wywołaniu zdarzeń
- **Potwierdzenie**, że wiele obiektów może reagować na to samo zdarzenie
- **Sprawdzenie**, czy można dodać nowe zachowania bez modyfikowania istniejącego kodu
- **Zapewnienie**, że wejście z klawiatury/myszy prawidłowo wywołuje zdarzenia gry

## Wytyczne dotyczące przesłania

**Twoje zgłoszenie powinno zawierać:**
1. **Plik(i) JavaScript** z implementacją Twojej gry
2. **Plik HTML** do uruchamiania i testowania gry (może być prosty)
3. **Komentarze** wyjaśniające, który wzorzec wybrałeś i dlaczego
4. **Krótka dokumentacja** Twoich typów wiadomości i ich funkcji

## Kryteria oceny

| Kryterium | Wzorowy (3 punkty) | Wystarczający (2 punkty) | Wymaga poprawy (1 punkt) |
|-----------|--------------------|--------------------------|--------------------------|
| **Wzorzec architektury** | Poprawna implementacja dziedziczenia LUB kompozycji z klarowną hierarchią klas/obiektów | Użycie wybranego wzorca z drobnymi problemami lub niespójnościami | Próba zastosowania wzorca, ale implementacja zawiera poważne błędy |
| **Implementacja pub/sub** | EventEmitter działa poprawnie z wieloma typami wiadomości i prawidłowym przepływem zdarzeń | Podstawowy system pub/sub działa z częściową obsługą zdarzeń | System zdarzeń istnieje, ale nie działa niezawodnie |
| **Funkcjonalność gry** | Co najmniej trzy interaktywne elementy komunikujące się za pomocą zdarzeń | Dwa interaktywne elementy z podstawową komunikacją zdarzeń | Jeden element reaguje na zdarzenia lub podstawowa interakcja |
| **Jakość kodu** | Czysty, dobrze skomentowany kod z logiczną organizacją i nowoczesnym JavaScriptem | Ogólnie zorganizowany kod z adekwatnymi komentarzami | Kod działa, ale brakuje organizacji lub jasnych komentarzy |

**Punkty dodatkowe:**
- **Kreatywne mechaniki gry**, które pokazują ciekawe zastosowania wzorców
- **Wielorakie metody wejścia** (zarówno zdarzenia z klawiatury, jak i myszy)
- **Skalowalna architektura** łatwa do rozbudowy o nowe funkcje

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że staramy się o dokładność, należy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub niedokładności. Oryginalny dokument w języku źródłowym powinien być uznawany za źródło ostateczne. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia dokonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->