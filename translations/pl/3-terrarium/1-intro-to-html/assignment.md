<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T19:46:53+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "pl"
}
-->
# Zadanie praktyczne z HTML: Stwórz makietę bloga

## Cele nauki

Zastosuj swoją wiedzę z HTML, projektując i kodując kompletną strukturę strony głównej bloga. To praktyczne zadanie utrwali koncepcje semantycznego HTML, najlepsze praktyki dostępności oraz umiejętności profesjonalnej organizacji kodu, które wykorzystasz podczas całej swojej przygody z tworzeniem stron internetowych.

**Po wykonaniu tego zadania będziesz potrafić:**
- Planować układy stron przed rozpoczęciem kodowania
- Stosować odpowiednio semantyczne elementy HTML
- Tworzyć dostępny i dobrze zorganizowany markup
- Rozwijać profesjonalne nawyki kodowania z komentarzami i organizacją

## Wymagania projektu

### Część 1: Planowanie projektu (Wizualna makieta)

**Stwórz wizualną makietę swojej strony głównej bloga, która zawiera:**
- Nagłówek z tytułem strony i nawigacją
- Główną sekcję z co najmniej 2-3 podglądami wpisów na blogu
- Pasek boczny z dodatkowymi informacjami (sekcja „o mnie”, ostatnie wpisy, kategorie)
- Stopkę z danymi kontaktowymi lub linkami

**Opcje tworzenia makiety:**
- **Szkic odręczny**: Użyj papieru i ołówka, następnie zrób zdjęcie lub skan swojego projektu
- **Narzędzia cyfrowe**: Figma, Adobe XD, Canva, PowerPoint lub dowolna aplikacja do rysowania
- **Narzędzia do wireframingu**: Balsamiq, MockFlow lub podobne oprogramowanie do tworzenia szkieletów

**Oznacz sekcje swojej makiety** nazwami elementów HTML, które planujesz użyć (np. "Nagłówek - `<header>`", "Posty bloga - `<article>`").

### Część 2: Planowanie elementów HTML

**Stwórz listę przyporządkowującą każdą sekcję makiety do konkretnych elementów HTML:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Wymagane elementy do uwzględnienia:**
Twój kod HTML musi zawierać co najmniej 10 różnych semantycznych elementów z tej listy:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Część 3: Implementacja HTML

**Zakoduj stronę główną bloga, stosując się do poniższych standardów:**

1. **Struktura dokumentu**: Uwzględnij poprawny DOCTYPE, elementy html, head i body
2. **Semantyczny markup**: Używaj elementów HTML zgodnie z ich przeznaczeniem
3. **Dostępność**: Dodaj odpowiednie teksty alt do obrazów i znaczące teksty linków
4. **Jakość kodu**: Stosuj spójną indentację i znaczące komentarze
5. **Zawartość**: Dodaj realistyczną zawartość bloga (możesz użyć tekstu zastępczego)

**Przykładowa struktura HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Część 4: Refleksja

**Napisz krótką refleksję (3–5 zdań), odpowiadając na:**
- Z których elementów HTML czułeś się najbardziej pewnie?
- Jakie napotkałeś wyzwania podczas planowania lub kodowania?
- Jak semantyczny HTML pomógł zorganizować Twoją zawartość?
- Co zrobiłbyś inaczej w kolejnym projekcie HTML?

## Lista kontrolna przed oddaniem

**Przed wysłaniem upewnij się, że:**
- [ ] Posiadasz wizualną makietę z oznaczonymi elementami HTML
- [ ] Masz kompletny plik HTML z właściwą strukturą dokumentu
- [ ] Użyłeś co najmniej 10 różnych semantycznych elementów HTML w odpowiedni sposób
- [ ] Dodałeś znaczące komentarze wyjaśniające strukturę kodu
- [ ] Kod HTML ma poprawną składnię (przetestuj w przeglądarce)
- [ ] Napisałeś refleksję odpowiadającą na zadane pytania

## Kryteria oceny

| Kryterium | Wzorcowo (4) | Dobrze (3) | W trakcie nauki (2) | Na początku (1) |
|----------|---------------|------------|--------------------|-----------------|
| **Planowanie i projekt** | Szczegółowa, dobrze opisana makieta pokazująca jasne zrozumienie układu i semantycznej struktury HTML | Jasna makieta z odpowiednio oznaczonymi większością sekcji | Podstawowa makieta z częściowym oznaczeniem, pokazuje ogólne rozumienie | Minimalna lub niejasna makieta, brak właściwej identyfikacji sekcji |
| **Użycie semantycznego HTML** | Wykorzystuje 10+ semantycznych elementów poprawnie, demonstruje głębokie zrozumienie struktury HTML i dostępności | Używa 8-9 semantycznych elementów poprawnie, pokazuje dobre zrozumienie semantycznego markup | Stosuje 6-7 elementów semantycznych, czasem niepewność co do prawidłowego użycia | Używa mniej niż 6 elementów lub nieprawidłowo stosuje elementy semantyczne |
| **Jakość kodu i organizacja** | Wyjątkowo dobrze zorganizowany, odpowiednio wcięty kod z wyczerpującymi komentarzami i bezbłędną składnią HTML | Dobrze zorganizowany kod, z dobrą indentacją, użytecznymi komentarzami i poprawną składnią | Przeważnie zorganizowany kod z kilkoma komentarzami, drobne błędy w składni | Słaba organizacja, minimalna liczba komentarzy, liczne błędy składniowe |
| **Dostępność i najlepsze praktyki** | Doskonałe uwzględnienie dostępności, znaczący tekst alt, poprawna hierarchia nagłówków, stosuje wszystkie nowoczesne praktyki HTML | Dobre cechy dostępności, odpowiednie użycie nagłówków i tekstu alt, stosuje większość najlepszych praktyk | Pewne uwagi dotyczące dostępności, podstawowy tekst alt i struktura nagłówków | Ograniczone funkcje dostępności, słaba struktura nagłówków, brak najlepszych praktyk |
| **Refleksja i nauka** | Przenikliwa refleksja pokazująca głębokie zrozumienie koncepcji HTML i przemyślaną analizę procesu nauki | Dobra refleksja, pokazująca zrozumienie kluczowych koncepcji i pewną samoświadomość nauki | Podstawowa refleksja z ograniczonym wglądem w koncepcje HTML lub proces nauki | Minimalna lub brak refleksji, brak zrozumienia nauczonych koncepcji |

## Materiały do nauki

**Podstawowe źródła:**
- [MDN Referencja elementów HTML](https://developer.mozilla.org/docs/Web/HTML/Element) – Kompletny przewodnik po wszystkich elementach HTML
- [Semantyczne elementy HTML5](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) – Zrozumienie semantycznego markup
- [Wytyczne dostępności w sieci](https://www.w3.org/WAI/WCAG21/quickref/) – Tworzenie dostępnych stron internetowych
- [Walidator HTML](https://validator.w3.org/) – Sprawdzanie składni HTML

**Przydatne wskazówki:**
- Zacznij od makiety, zanim napiszesz jakikolwiek kod
- Używaj narzędzi deweloperskich przeglądarki do analizowania struktury HTML
- Testuj stronę na różnych rozmiarach ekranu (nawet bez CSS)
- Czytaj swój kod HTML na głos, sprawdzając, czy struktura ma logiczny sens
- Zastanów się, jak czytnik ekranu odczyta strukturę Twojej strony

> 💡 **Pamiętaj**: To zadanie skupia się na strukturze i semantyce HTML. Nie przejmuj się wyglądem wizualnym – do tego służy CSS! Twoja strona może wyglądać prosto, ale powinna być dobrze ustrukturyzowana i znacząca.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się o dokładność, prosimy pamiętać, że tłumaczenia automatyczne mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy traktować jako źródło autorytatywne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z wykorzystania tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->