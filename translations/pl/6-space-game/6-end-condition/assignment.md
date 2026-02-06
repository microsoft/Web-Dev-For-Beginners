# Zbuduj Przykładową Grę

## Przegląd Zadania

Teraz, gdy opanowałeś warunki zakończenia gry i funkcję restartu w swojej kosmicznej grze, czas zastosować te koncepcje w zupełnie nowym doświadczeniu gamingowym. Zaprojektujesz i zbudujesz własną grę, która pokaże różne wzorce zakończenia gry i mechaniki restartu.

To zadanie zachęca Cię do kreatywnego myślenia o projektowaniu gier, jednocześnie ćwicząc nabyte umiejętności techniczne. Poznasz różne scenariusze zwycięstwa i porażki, zaimplementujesz progresję gracza oraz stworzysz angażujące doświadczenia restartu.

## Wymagania Projektowe

### Podstawowe Funkcje Gry

Twoja gra musi zawierać następujące kluczowe elementy:

**Różnorodność warunków zakończenia**: Zaimplementuj co najmniej dwa różne sposoby na zakończenie gry:
- **Zwycięstwo punktowe**: Gracz osiąga docelowy wynik lub zbiera określone przedmioty
- **Porażka na podstawie żyć**: Gracz traci wszystkie dostępne życia lub punkty zdrowia
- **Wykonanie celu**: Wszyscy wrogowie pokonani, zebrane określone przedmioty lub osiągnięte cele
- **Na czas**: Gra kończy się po ustalonym czasie lub gdy licznik odliczania osiąga zero

**Funkcja restartu**: 
- **Wyczyszczenie stanu gry**: Usuń wszystkie poprzednie obiekty gry i zresetuj zmienne
- **Reinicjalizacja systemów**: Rozpocznij od nowa z nowymi statystykami gracza, wrogami i celami
- **Przyjazne sterowanie**: Zapewnij jasne instrukcje do restartu gry

**Informacje zwrotne dla gracza**:
- **Wiadomości o zwycięstwie**: Świętuj osiągnięcia gracza pozytywnym feedbackiem
- **Wiadomości o porażce**: Dostarcz zachęcające komunikaty motywujące do ponownej gry
- **Wskaźniki postępu**: Pokaż aktualny wynik, życie lub status celu

### Pomysły na gry i inspiracje

Wybierz jedną z tych koncepcji lub stwórz własną:

#### 1. Przygodowa Gra Konsolowa
Stwórz tekstową przygodę z mechaniką walki:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Kluczowe cechy do zaimplementowania:**
- **Rozgrywka turowa** z różnymi opcjami ataku
- **Punkty zdrowia** dla gracza i wrogów
- **System ekwipunku** do zbierania monet lub przedmiotów
- **Kilka typów wrogów** o różnym poziomie trudności
- **Warunek zwycięstwa** gdy wszyscy wrogowie zostaną pokonani

#### 2. Gra Kolekcjonerska
- **Cel**: Zbieraj określone przedmioty unikając przeszkód
- **Warunki zakończenia**: Osiągnięcie docelowej liczby zbiorów lub utrata wszystkich żyć
- **Progresja**: Przedmioty stają się trudniejsze do zdobycia w miarę postępu gry

#### 3. Gra Łamigłówka
- **Cel**: Rozwiązuj coraz trudniejsze zagadki
- **Warunki zakończenia**: Ukończenie wszystkich poziomów lub wyczerpanie ruchów/czasu
- **Restart**: Reset do pierwszego poziomu z wyczyszczonym postępem

#### 4. Gra Obrońca
- **Cel**: Chroń swoją bazę przed falami wrogów
- **Warunki zakończenia**: Przetrwaj wszystkie fale (zwycięstwo) lub baza zostanie zniszczona (porażka)
- **Progresja**: Fale wrogów rosną w trudności i liczbie

## Wytyczne dotyczące implementacji

### Zacznijmy

1. **Zaplanuj projekt gry**:
   - Nakreśl podstawową pętlę rozgrywki
   - Jasno zdefiniuj warunki zakończenia
   - Określ, które dane należy zresetować przy restarcie

2. **Ustaw strukturę projektu**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Utwórz główną pętlę gry**:
   - Zainicjuj stan gry
   - Obsłuż dane wejściowe użytkownika
   - Zaktualizuj logikę gry
   - Sprawdź warunki zakończenia
   - Renderuj aktualny stan

### Wymagania techniczne

**Używaj nowoczesnego JavaScript**: 
- Zastosuj `const` i `let` do deklaracji zmiennych
- Używaj funkcji strzałkowych tam, gdzie to stosowne
- Wdrażaj funkcje ES6+ takie jak literały szablonowe i destrukturyzację

**Architektura zdarzeniowa**:
- Twórz obsługiwacze zdarzeń do interakcji użytkownika
- Implementuj zmiany stanu gry poprzez zdarzenia
- Używaj nasłuchiwaczy zdarzeń do funkcji restartu

**Praktyki czystego kodu**:
- Pisz funkcje o pojedynczej odpowiedzialności
- Używaj opisowych nazw zmiennych i funkcji
- Dodawaj komentarze wyjaśniające logikę i zasady gry
- Organizuj kod w logiczne sekcje

## Wymagania dotyczące dostarczenia

### Pliki do oddania

1. **Kompletne pliki gry**: Wszystkie pliki HTML, CSS i JavaScript potrzebne do uruchomienia gry
2. **README.md**: Dokumentacja wyjaśniająca:
   - Jak grać w Twoją grę
   - Jakie warunki zakończenia zaimplementowałeś
   - Instrukcje dotyczące restartu
   - Specjalne funkcje lub mechaniki
3. **Komentarze w kodzie**: Jasne wyjaśnienia logiki i algorytmów gry

### Lista kontrolna testów

Przed wysłaniem sprawdź, czy Twoja gra:

- [ ] **Działa bez błędów** w konsoli przeglądarki
- [ ] **Implementuje wiele warunków zakończenia** zgodnie z wymaganiami
- [ ] **Restartuje się poprawnie** z czystym resetem stanu
- [ ] **Dostarcza jasną informację zwrotną** dla graczy o stanie gry
- [ ] **Używa nowoczesnej składni JavaScript** i najlepszych praktyk
- [ ] **Zawiera kompletną dokumentację** w pliku README.md

## Kryteria Oceny

| Kryteria | Wzorowy (4) | Zaawansowany (3) | Średniozaawansowany (2) | Początkujący (1) |
|----------|-------------|------------------|------------------------|------------------|
| **Funkcjonalność gry** | Pełna gra z wieloma warunkami zakończenia, płynnym restartem i dopracowanym doświadczeniem rozgrywki | Pełna gra z podstawowymi warunkami zakończenia i funkcjonalnym mechanizmem restartu | Częściowa gra z kilkoma zaimplementowanymi warunkami zakończenia, restart może mieć drobne błędy | Niekompletna gra z ograniczoną funkcjonalnością i poważnymi błędami |
| **Jakość kodu** | Czysty, dobrze zorganizowany kod z nowoczesnymi praktykami JavaScript, wyczerpującymi komentarzami i doskonałą strukturą | Dobra organizacja kodu z nowoczesną składnią, odpowiednimi komentarzami i czytelną strukturą | Podstawowa organizacja kodu z niektórymi nowoczesnymi praktykami, minimalne komentarze | Słaba organizacja kodu, przestarzała składnia, brak komentarzy i struktury |
| **Doświadczenie użytkownika** | Intuicyjna rozgrywka z jasnymi instrukcjami, doskonałą informacją zwrotną i angażującym zakończeniem/restartem | Dobra rozgrywka z odpowiednimi instrukcjami i informacją zwrotną, funkcjonalne zakończenie/restart | Podstawowa rozgrywka z minimalnymi instrukcjami, ograniczona informacja zwrotna o stanie gry | Myląca rozgrywka z niejasnymi instrukcjami i słabym feedbackiem dla użytkownika |
| **Implementacja techniczna** | Wykazuje mistrzostwo w koncepcjach tworzenia gier, obsłudze zdarzeń i zarządzaniu stanem | Wykazuje solidne zrozumienie koncepcji gier z dobrą implementacją | Podstawowe zrozumienie z akceptowalną implementacją | Ograniczone zrozumienie z słabą implementacją |
| **Dokumentacja** | Kompleksowy README z jasnymi instrukcjami, dobrze udokumentowanym kodem i dokładnymi dowodami testów | Dobra dokumentacja z czytelnymi instrukcjami i adekwatnymi komentarzami w kodzie | Podstawowa dokumentacja z minimalnymi instrukcjami | Słaba lub brakująca dokumentacja |

### Skala ocen
- **Wzorowy (16-20 punktów)**: Przewyższa oczekiwania z kreatywnymi funkcjami i dopracowaną implementacją
- **Zaawansowany (12-15 punktów)**: Spełnia wszystkie wymagania z solidną realizacją
- **Średniozaawansowany (8-11 punktów)**: Spełnia większość wymagań z drobnymi problemami
- **Początkujący (4-7 punktów)**: Spełnia niektóre wymagania, ale wymaga znacznej poprawy

## Dodatkowe Zasoby Edukacyjne

- [MDN Przewodnik po tworzeniu gier](https://developer.mozilla.org/en-US/docs/Games)
- [Tutoriale tworzenia gier w JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentacja Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Zasady projektowania gier](https://www.gamasutra.com/blogs/)

> 💡 **Wskazówka**: Zacznij od prostego i dodawaj funkcje stopniowo. Dobrze dopracowana prosta gra jest lepsza niż skomplikowana gra z błędami!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:
Niniejszy dokument został przetłumaczony przy użyciu automatycznej usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo iż dokładamy wszelkich starań, aby tłumaczenie było poprawne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym powinien być uznawany za źródło autorytatywne. W przypadku informacji o krytycznym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->