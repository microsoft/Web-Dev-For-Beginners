<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "124efddbb65166cddb38075ad6dae324",
  "translation_date": "2026-01-06T19:09:31+00:00",
  "source_file": "6-space-game/4-collision-detection/assignment.md",
  "language_code": "pl"
}
-->
# Eksploruj Kolizje

## Instrukcje

Wykorzystaj swoją wiedzę na temat wykrywania kolizji, tworząc niestandardową mini-grę, która demonstruje różne typy interakcji obiektów. To zadanie pomoże Ci zrozumieć mechanikę kolizji poprzez kreatywną implementację i eksperymentowanie.

### Wymagania projektu

**Stwórz małą interaktywną grę zawierającą:**
- **Wiele poruszających się obiektów**, które można kontrolować za pomocą klawiatury lub myszy
- **System wykrywania kolizji** oparty na zasadach przecięcia prostokątów z lekcji
- **Wizualne informacje zwrotne** w momencie kolizji (niszczenie obiektów, zmiany koloru, efekty)
- **Zasady gry** nadające kolizjom sens i angażujące gracza

### Kreatywne sugestie

**Rozważ zaimplementowanie jednego z tych scenariuszy:**
- **Pole asteroid**: Kieruj statkiem przez niebezpieczne kosmiczne szczątki
- **Samochodziki zderzeniowe**: Stwórz arenę kolizji opartą na fizyce
- **Obrona przed meteorytami**: Chroń Ziemię przed nadlatującymi kosmicznymi skałami
- **Gra zbierania**: Zbieraj przedmioty, unikając przeszkód
- **Kontrola terytorium**: Rywalizujące obiekty próbujące zająć przestrzeń

### Implementacja techniczna

**Twoje rozwiązanie powinno wykazywać:**
- Prawidłowe użycie wykrywania kolizji opartego na prostokątach
- Programowanie zdarzeniowe do obsługi wejścia od użytkownika
- Zarządzanie cyklem życia obiektów (tworzenie i usuwanie)
- Czystą organizację kodu z odpowiednią strukturą klas

### Wyzwania dodatkowe

**Ulepsz swoją grę o dodatkowe funkcje:**
- **Efekty cząsteczkowe** podczas kolizji
- **Efekty dźwiękowe** dla różnych typów kolizji
- **System punktacji** oparty na wynikach kolizji
- **Wiele typów kolizji** z różnymi zachowaniami
- **Progresywnie zwiększający się poziom trudności**

## Kryteria oceny

| Kryterium | Przykładowy poziom | Wystarczający | Wymaga poprawy |
|-----------|--------------------|---------------|----------------|
| **Wykrywanie kolizji** | Implementuje dokładne wykrywanie kolizji oparte na prostokątach z wieloma typami obiektów i zaawansowanymi regułami interakcji | Podstawowe wykrywanie kolizji działa poprawnie przy prostych interakcjach obiektów | Wykrywanie kolizji ma problemy lub działa niestabilnie |
| **Jakość kodu** | Czysty, dobrze zorganizowany kod z odpowiednią strukturą klas, znaczącymi nazwami zmiennych i stosownymi komentarzami | Kod działa, ale mógłby być lepiej zorganizowany lub udokumentowany | Kod jest trudny do zrozumienia lub słabo zorganizowany |
| **Interakcja użytkownika** | Responsywne sterowanie z płynną rozgrywką, jasną informacją zwrotną i angażującą mechaniką | Podstawowe sterowanie działa z adekwatną informacją zwrotną | Sterowanie jest niereagujące lub mylące |
| **Kreatywność** | Oryginalna koncepcja z unikalnymi funkcjami, dopracowaną oprawą wizualną i innowacyjnymi zachowaniami kolizji | Standardowa implementacja z pewnymi elementami kreatywnymi | Podstawowa funkcjonalność bez kreatywnych ulepszeń |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą automatycznej usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dokładamy starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że tłumaczenia automatyczne mogą zawierać błędy lub niedokładności. Oryginalny dokument w języku źródłowym należy traktować jako wersję obowiązującą. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->