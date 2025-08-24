<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-24T13:40:16+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "pl"
}
-->
# Budowa aplikacji bankowej, część 1: Szablony HTML i trasy w aplikacji internetowej

## Quiz przed wykładem

[Quiz przed wykładem](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Wprowadzenie

Od czasu pojawienia się JavaScriptu w przeglądarkach, strony internetowe stają się bardziej interaktywne i złożone niż kiedykolwiek wcześniej. Technologie webowe są obecnie powszechnie wykorzystywane do tworzenia w pełni funkcjonalnych aplikacji działających bezpośrednio w przeglądarce, które nazywamy [aplikacjami internetowymi](https://en.wikipedia.org/wiki/Web_application). Ponieważ aplikacje internetowe są bardzo interaktywne, użytkownicy nie chcą czekać na pełne przeładowanie strony za każdym razem, gdy wykonują jakąś akcję. Dlatego JavaScript jest używany do bezpośredniej aktualizacji HTML za pomocą DOM, co zapewnia płynniejsze doświadczenie użytkownika.

W tej lekcji położymy fundamenty do stworzenia aplikacji bankowej, używając szablonów HTML do tworzenia wielu ekranów, które można wyświetlać i aktualizować bez konieczności przeładowywania całej strony HTML.

### Wymagania wstępne

Potrzebujesz lokalnego serwera internetowego, aby przetestować aplikację, którą stworzymy w tej lekcji. Jeśli go nie masz, możesz zainstalować [Node.js](https://nodejs.org) i użyć polecenia `npx lite-server` w folderze projektu. Utworzy to lokalny serwer internetowy i otworzy Twoją aplikację w przeglądarce.

### Przygotowanie

Na swoim komputerze utwórz folder o nazwie `bank` z plikiem `index.html` w środku. Zaczniemy od tego [szablonu HTML](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Szablony HTML

Jeśli chcesz stworzyć wiele ekranów dla strony internetowej, jednym z rozwiązań byłoby utworzenie jednego pliku HTML dla każdego ekranu, który chcesz wyświetlić. Jednak to rozwiązanie ma pewne niedogodności:

- Musisz przeładować cały HTML podczas przełączania ekranu, co może być wolne.
- Trudno jest udostępniać dane między różnymi ekranami.

Innym podejściem jest posiadanie tylko jednego pliku HTML i definiowanie wielu [szablonów HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) za pomocą elementu `<template>`. Szablon to wielokrotnego użytku blok HTML, który nie jest wyświetlany przez przeglądarkę i musi być zainicjowany w czasie działania za pomocą JavaScriptu.

### Zadanie

Stworzymy aplikację bankową z dwoma ekranami: stroną logowania i pulpitem nawigacyjnym. Najpierw dodajmy w ciele HTML element zastępczy, którego użyjemy do inicjowania różnych ekranów naszej aplikacji:

```html
<div id="app">Loading...</div>
```

Nadajemy mu `id`, aby łatwiej było go zlokalizować później za pomocą JavaScriptu.

> Wskazówka: ponieważ zawartość tego elementu zostanie zastąpiona, możemy umieścić w nim komunikat ładowania lub wskaźnik, który będzie wyświetlany podczas ładowania aplikacji.

Następnie dodajmy poniżej szablon HTML dla strony logowania. Na razie umieścimy tam tylko tytuł i sekcję zawierającą link, którego użyjemy do nawigacji.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Potem dodamy kolejny szablon HTML dla strony pulpitu nawigacyjnego. Ta strona będzie zawierać różne sekcje:

- Nagłówek z tytułem i linkiem do wylogowania
- Aktualne saldo konta bankowego
- Listę transakcji wyświetlaną w tabeli

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Wskazówka: podczas tworzenia szablonów HTML, jeśli chcesz zobaczyć, jak będą wyglądać, możesz zakomentować linie `<template>` i `</template>`, otaczając je `<!-- -->`.

✅ Dlaczego Twoim zdaniem używamy atrybutów `id` w szablonach? Czy moglibyśmy użyć czegoś innego, na przykład klas?

## Wyświetlanie szablonów za pomocą JavaScriptu

Jeśli spróbujesz otworzyć swój obecny plik HTML w przeglądarce, zobaczysz, że zatrzymuje się na wyświetlaniu `Loading...`. Dzieje się tak, ponieważ musimy dodać kod JavaScript, aby zainicjować i wyświetlić szablony HTML.

Inicjowanie szablonu zazwyczaj odbywa się w 3 krokach:

1. Pobranie elementu szablonu w DOM, na przykład za pomocą [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Sklonowanie elementu szablonu za pomocą [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Dołączenie go do DOM pod widocznym elementem, na przykład za pomocą [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Dlaczego musimy sklonować szablon przed dołączeniem go do DOM? Co Twoim zdaniem by się stało, gdybyśmy pominęli ten krok?

### Zadanie

Utwórz nowy plik o nazwie `app.js` w folderze projektu i zaimportuj ten plik w sekcji `<head>` swojego HTML:

```html
<script src="app.js" defer></script>
```

Teraz w `app.js` utworzymy nową funkcję `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

To, co tutaj robimy, to dokładnie 3 kroki opisane powyżej. Inicjujemy szablon o `id` równym `templateId` i umieszczamy jego sklonowaną zawartość w naszym elemencie zastępczym aplikacji. Zauważ, że musimy użyć `cloneNode(true)`, aby skopiować całą strukturę drzewa szablonu.

Teraz wywołaj tę funkcję z jednym z szablonów i zobacz wynik.

```js
updateRoute('login');
```

✅ Jaki jest cel tego kodu `app.innerHTML = '';`? Co się stanie, jeśli go zabraknie?

## Tworzenie tras

W kontekście aplikacji internetowej, *Routing* oznacza mapowanie **URL-i** na konkretne ekrany, które powinny być wyświetlane. Na stronie internetowej z wieloma plikami HTML dzieje się to automatycznie, ponieważ ścieżki plików są odzwierciedlane w URL-u. Na przykład, mając te pliki w folderze projektu:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Jeśli utworzysz serwer internetowy z `mywebsite` jako root, mapowanie URL-i będzie wyglądać tak:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Jednak w naszej aplikacji internetowej używamy jednego pliku HTML zawierającego wszystkie ekrany, więc to domyślne zachowanie nam nie pomoże. Musimy ręcznie utworzyć tę mapę i aktualizować wyświetlany szablon za pomocą JavaScriptu.

### Zadanie

Użyjemy prostego obiektu do zaimplementowania [mapy](https://en.wikipedia.org/wiki/Associative_array) między ścieżkami URL a naszymi szablonami. Dodaj ten obiekt na początku swojego pliku `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Teraz zmodyfikujmy trochę funkcję `updateRoute`. Zamiast przekazywać bezpośrednio `templateId` jako argument, chcemy najpierw sprawdzić aktualny URL, a następnie użyć naszej mapy, aby uzyskać odpowiadającą wartość `templateId`. Możemy użyć [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname), aby uzyskać tylko sekcję ścieżki z URL-a.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Tutaj mapujemy zadeklarowane trasy na odpowiadające im szablony. Możesz sprawdzić, czy działa poprawnie, zmieniając URL ręcznie w przeglądarce.

✅ Co się stanie, jeśli wpiszesz nieznaną ścieżkę w URL-u? Jak moglibyśmy to rozwiązać?

## Dodawanie nawigacji

Kolejnym krokiem w naszej aplikacji jest dodanie możliwości nawigacji między stronami bez konieczności ręcznego zmieniania URL-a. Oznacza to dwie rzeczy:

1. Aktualizowanie bieżącego URL-a
2. Aktualizowanie wyświetlanego szablonu na podstawie nowego URL-a

Drugą częścią zajęliśmy się już w funkcji `updateRoute`, więc musimy wymyślić, jak zaktualizować bieżący URL.

Będziemy musieli użyć JavaScriptu, a konkretnie [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), który pozwala na aktualizację URL-a i tworzenie nowego wpisu w historii przeglądania, bez przeładowywania HTML.

> Uwaga: Chociaż element HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) może być używany samodzielnie do tworzenia hiperłączy do różnych URL-i, domyślnie powoduje przeładowanie HTML. Należy zapobiec temu zachowaniu podczas obsługi tras za pomocą niestandardowego JavaScriptu, używając funkcji `preventDefault()` na zdarzeniu kliknięcia.

### Zadanie

Utwórzmy nową funkcję, której możemy użyć do nawigacji w naszej aplikacji:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Ta metoda najpierw aktualizuje bieżący URL na podstawie podanej ścieżki, a następnie aktualizuje szablon. Właściwość `window.location.origin` zwraca root URL-a, co pozwala nam zrekonstruować pełny URL z podanej ścieżki.

Teraz, gdy mamy tę funkcję, możemy zająć się problemem, który mamy, jeśli ścieżka nie pasuje do żadnej zdefiniowanej trasy. Zmodyfikujemy funkcję `updateRoute`, dodając domyślne przejście do jednej z istniejących tras, jeśli nie znajdziemy dopasowania.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Jeśli trasa nie może zostać znaleziona, teraz przekierujemy na stronę `login`.

Teraz utwórzmy funkcję, aby uzyskać URL po kliknięciu linku i zapobiec domyślnemu zachowaniu przeglądarki:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Uzupełnijmy system nawigacji, dodając powiązania do naszych linków *Login* i *Logout* w HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Obiekt `event` powyżej przechwytuje zdarzenie `click` i przekazuje je do naszej funkcji `onLinkClick`.

Używając atrybutu [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick), powiąż zdarzenie `click` z kodem JavaScript, tutaj wywołaniem funkcji `navigate()`.

Spróbuj kliknąć te linki, powinieneś teraz móc nawigować między różnymi ekranami swojej aplikacji.

✅ Metoda `history.pushState` jest częścią standardu HTML5 i zaimplementowana we [wszystkich nowoczesnych przeglądarkach](https://caniuse.com/?search=pushState). Jeśli tworzysz aplikację internetową dla starszych przeglądarek, istnieje trik, którego możesz użyć zamiast tego API: użycie [hasha (`#`)](https://en.wikipedia.org/wiki/URI_fragment) przed ścieżką pozwala zaimplementować routing, który działa z regularną nawigacją za pomocą kotwic i nie przeładowuje strony, ponieważ jego celem było tworzenie wewnętrznych linków w obrębie strony.

## Obsługa przycisków wstecz i dalej w przeglądarce

Użycie `history.pushState` tworzy nowe wpisy w historii nawigacji przeglądarki. Możesz to sprawdzić, przytrzymując *przycisk wstecz* w przeglądarce, powinno to wyglądać mniej więcej tak:

![Zrzut ekranu historii nawigacji](../../../../7-bank-project/1-template-route/history.png)

Jeśli spróbujesz kliknąć kilka razy przycisk wstecz, zobaczysz, że bieżący URL się zmienia, a historia jest aktualizowana, ale ten sam szablon nadal jest wyświetlany.

Dzieje się tak, ponieważ aplikacja nie wie, że musimy wywołać `updateRoute()` za każdym razem, gdy historia się zmienia. Jeśli spojrzysz na [dokumentację `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), zobaczysz, że jeśli stan się zmienia - oznacza to, że przeszliśmy do innego URL-a - wyzwalane jest zdarzenie [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event). Użyjemy tego, aby naprawić ten problem.

### Zadanie

Aby upewnić się, że wyświetlany szablon jest aktualizowany, gdy historia przeglądarki się zmienia, dołączymy nową funkcję, która wywołuje `updateRoute()`. Zrobimy to na końcu naszego pliku `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Uwaga: użyliśmy tutaj [funkcji strzałkowej](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) do zadeklarowania naszego obsługiwacza zdarzenia `popstate` dla zwięzłości, ale zwykła funkcja działałaby tak samo.

Oto przypomnienie wideo o funkcjach strzałkowych:

[![Funkcje strzałkowe](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funkcje strzałkowe")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć wideo o funkcjach strzałkowych.

Teraz spróbuj użyć przycisków wstecz i dalej w przeglądarce i sprawdź, czy wyświetlana trasa jest teraz poprawnie aktualizowana.

---

## 🚀 Wyzwanie

Dodaj nowy szablon i trasę dla trzeciej strony, która pokazuje autorów tej aplikacji.

## Quiz po wykładzie

[Quiz po wykładzie](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Przegląd i samodzielna nauka

Routing jest jednym z zaskakująco trudnych elementów tworzenia stron internetowych, szczególnie w miarę przechodzenia sieci z zachowań odświeżania stron na odświeżanie w aplikacjach jednostronicowych (SPA). Przeczytaj trochę o tym, [jak usługa Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) obsługuje routing. Czy potrafisz wyjaśnić, dlaczego niektóre z opisanych tam decyzji są konieczne?

## Zadanie

[Ulepsz routing](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.