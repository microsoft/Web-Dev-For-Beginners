<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:00:13+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "pl"
}
-->
# Budowa aplikacji bankowej, część 4: Koncepcje zarządzania stanem

## Quiz przed wykładem

[Quiz przed wykładem](https://ff-quizzes.netlify.app/web/quiz/47)

### Wprowadzenie

Wraz z rozwojem aplikacji internetowej śledzenie przepływów danych staje się coraz trudniejsze. Który kod pobiera dane, która strona je wykorzystuje, gdzie i kiedy należy je zaktualizować... łatwo skończyć z chaotycznym kodem, który trudno utrzymać. Jest to szczególnie problematyczne, gdy trzeba udostępniać dane między różnymi stronami aplikacji, na przykład dane użytkownika. Koncepcja *zarządzania stanem* zawsze istniała w różnego rodzaju programach, ale wraz ze wzrostem złożoności aplikacji internetowych stała się kluczowym punktem do przemyślenia podczas ich tworzenia.

W tej ostatniej części przyjrzymy się aplikacji, którą zbudowaliśmy, aby przemyśleć sposób zarządzania stanem, umożliwiając obsługę odświeżania przeglądarki w dowolnym momencie oraz utrzymywanie danych między sesjami użytkownika.

### Wymagania wstępne

Musisz ukończyć część dotyczącą [pobierania danych](../3-data/README.md) w aplikacji internetowej. Musisz także zainstalować [Node.js](https://nodejs.org) i [uruchomić lokalnie serwer API](../api/README.md), aby zarządzać danymi konta.

Możesz sprawdzić, czy serwer działa poprawnie, wykonując to polecenie w terminalu:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Przemyślenie zarządzania stanem

W [poprzedniej lekcji](../3-data/README.md) wprowadziliśmy podstawową koncepcję stanu w naszej aplikacji za pomocą globalnej zmiennej `account`, która zawiera dane bankowe aktualnie zalogowanego użytkownika. Jednak nasza obecna implementacja ma pewne wady. Spróbuj odświeżyć stronę, gdy jesteś na pulpicie nawigacyjnym. Co się dzieje?

Obecny kod ma trzy problemy:

- Stan nie jest utrwalany, ponieważ odświeżenie przeglądarki przenosi Cię z powrotem na stronę logowania.
- Istnieje wiele funkcji, które modyfikują stan. Wraz z rozwojem aplikacji może to utrudnić śledzenie zmian i łatwo zapomnieć o ich aktualizacji.
- Stan nie jest czyszczony, więc po kliknięciu *Wyloguj się* dane konta nadal są dostępne, mimo że jesteś na stronie logowania.

Moglibyśmy zaktualizować nasz kod, aby rozwiązać te problemy pojedynczo, ale spowodowałoby to powielenie kodu i uczyniło aplikację bardziej skomplikowaną i trudniejszą w utrzymaniu. Albo moglibyśmy zatrzymać się na chwilę i przemyśleć naszą strategię.

> Jakie problemy tak naprawdę próbujemy tutaj rozwiązać?

[Zarządzanie stanem](https://en.wikipedia.org/wiki/State_management) polega na znalezieniu dobrego podejścia do rozwiązania tych dwóch konkretnych problemów:

- Jak utrzymać przepływy danych w aplikacji w sposób zrozumiały?
- Jak utrzymać dane stanu zawsze zsynchronizowane z interfejsem użytkownika (i odwrotnie)?

Gdy zajmiesz się tymi kwestiami, inne problemy, które możesz napotkać, mogą zostać już rozwiązane lub stać się łatwiejsze do naprawienia. Istnieje wiele możliwych podejść do rozwiązania tych problemów, ale my zastosujemy popularne rozwiązanie polegające na **centralizacji danych i sposobów ich zmiany**. Przepływy danych wyglądałyby następująco:

![Schemat pokazujący przepływy danych między HTML, akcjami użytkownika i stanem](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.pl.png)

> Nie będziemy tutaj omawiać części, w której dane automatycznie wyzwalają aktualizację widoku, ponieważ jest to związane z bardziej zaawansowanymi koncepcjami [programowania reaktywnego](https://en.wikipedia.org/wiki/Reactive_programming). To dobry temat do zgłębienia, jeśli chcesz się zagłębić.

✅ Istnieje wiele bibliotek oferujących różne podejścia do zarządzania stanem, z których popularną opcją jest [Redux](https://redux.js.org). Zapoznaj się z koncepcjami i wzorcami, które są w niej stosowane, ponieważ często jest to dobry sposób na zrozumienie potencjalnych problemów, z jakimi możesz się zmierzyć w dużych aplikacjach internetowych, oraz sposobów ich rozwiązania.

### Zadanie

Zaczniemy od niewielkiego refaktoringu. Zamień deklarację `account`:

```js
let account = null;
```

Na:

```js
let state = {
  account: null
};
```

Pomysł polega na *centralizacji* wszystkich danych aplikacji w jednym obiekcie stanu. Na razie mamy tylko `account` w stanie, więc niewiele się zmienia, ale tworzy to podstawę do dalszego rozwoju.

Musimy także zaktualizować funkcje, które go używają. W funkcjach `register()` i `login()` zamień `account = ...` na `state.account = ...`;

Na początku funkcji `updateDashboard()` dodaj tę linię:

```js
const account = state.account;
```

Sam ten refaktoring nie przyniósł dużych ulepszeń, ale jego celem było stworzenie podstawy pod kolejne zmiany.

## Śledzenie zmian danych

Teraz, gdy wprowadziliśmy obiekt `state` do przechowywania danych, kolejnym krokiem jest centralizacja aktualizacji. Celem jest ułatwienie śledzenia wszelkich zmian i momentów, w których one występują.

Aby uniknąć wprowadzania zmian w obiekcie `state`, warto również traktować go jako [*niezmienny*](https://en.wikipedia.org/wiki/Immutable_object), co oznacza, że nie można go w ogóle modyfikować. Oznacza to również, że musisz utworzyć nowy obiekt stanu, jeśli chcesz coś w nim zmienić. Dzięki temu budujesz ochronę przed potencjalnie niepożądanymi [efektami ubocznymi](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) i otwierasz możliwości wprowadzenia nowych funkcji w aplikacji, takich jak implementacja cofania/powtarzania, a także ułatwiasz debugowanie. Na przykład możesz rejestrować każdą zmianę w stanie i przechowywać historię zmian, aby zrozumieć źródło błędu.

W JavaScript możesz użyć [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), aby utworzyć niezmienną wersję obiektu. Jeśli spróbujesz wprowadzić zmiany w niezmiennym obiekcie, zostanie zgłoszony wyjątek.

✅ Czy wiesz, jaka jest różnica między obiektem *płytko* a *głęboko* niezmiennym? Możesz o tym przeczytać [tutaj](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Zadanie

Utwórzmy nową funkcję `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

W tej funkcji tworzymy nowy obiekt stanu i kopiujemy dane z poprzedniego stanu za pomocą [operatora *spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Następnie nadpisujemy konkretną właściwość obiektu stanu nowymi danymi, używając [notacji nawiasowej](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` do przypisania. Na koniec blokujemy obiekt, aby zapobiec modyfikacjom, używając `Object.freeze()`. Na razie przechowujemy w stanie tylko właściwość `account`, ale dzięki temu podejściu możesz dodać tyle właściwości, ile potrzebujesz.

Zaktualizujemy również inicjalizację `state`, aby upewnić się, że początkowy stan jest również zamrożony:

```js
let state = Object.freeze({
  account: null
});
```

Następnie zaktualizuj funkcję `register`, zastępując przypisanie `state.account = result;`:

```js
updateState('account', result);
```

Zrób to samo z funkcją `login`, zastępując `state.account = data;`:

```js
updateState('account', data);
```

Teraz skorzystamy z okazji, aby rozwiązać problem z danymi konta, które nie są czyszczone, gdy użytkownik klika *Wyloguj się*.

Utwórz nową funkcję `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

W `updateDashboard()` zamień przekierowanie `return navigate('/login');` na `return logout()`;

Spróbuj zarejestrować nowe konto, wylogować się i zalogować ponownie, aby sprawdzić, czy wszystko działa poprawnie.

> Wskazówka: możesz przejrzeć wszystkie zmiany stanu, dodając `console.log(state)` na końcu `updateState()` i otwierając konsolę w narzędziach deweloperskich przeglądarki.

## Utrwalanie stanu

Większość aplikacji internetowych musi utrwalać dane, aby działać poprawnie. Wszystkie krytyczne dane są zwykle przechowywane w bazie danych i dostępne za pośrednictwem serwera API, jak w przypadku danych konta użytkownika. Ale czasami warto również utrwalać pewne dane w aplikacji klienckiej działającej w przeglądarce, aby poprawić doświadczenie użytkownika lub zwiększyć wydajność ładowania.

Kiedy chcesz utrwalać dane w przeglądarce, warto zadać sobie kilka ważnych pytań:

- *Czy dane są wrażliwe?* Należy unikać przechowywania wrażliwych danych po stronie klienta, takich jak hasła użytkowników.
- *Jak długo potrzebujesz przechowywać te dane?* Czy planujesz korzystać z tych danych tylko podczas bieżącej sesji, czy chcesz, aby były przechowywane na stałe?

Istnieje wiele sposobów przechowywania informacji w aplikacji internetowej, w zależności od tego, co chcesz osiągnąć. Na przykład możesz użyć adresów URL do przechowywania zapytania wyszukiwania i udostępniania go między użytkownikami. Możesz także użyć [ciasteczek HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies), jeśli dane muszą być współdzielone z serwerem, na przykład informacje o [uwierzytelnianiu](https://en.wikipedia.org/wiki/Authentication).

Inną opcją jest użycie jednej z wielu przeglądarkowych API do przechowywania danych. Dwie z nich są szczególnie interesujące:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): [Magazyn klucz/wartość](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), który pozwala na utrwalanie danych specyficznych dla bieżącej strony internetowej między różnymi sesjami. Dane zapisane w nim nigdy nie wygasają.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): działa tak samo jak `localStorage`, z tą różnicą, że dane przechowywane w nim są usuwane po zakończeniu sesji (po zamknięciu przeglądarki).

Należy pamiętać, że oba te API pozwalają przechowywać tylko [ciągi znaków](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Jeśli chcesz przechowywać złożone obiekty, musisz je zserializować do formatu [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) za pomocą [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Jeśli chcesz stworzyć aplikację internetową, która nie współpracuje z serwerem, możliwe jest również utworzenie bazy danych po stronie klienta za pomocą API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Jest to jednak zarezerwowane dla zaawansowanych przypadków użycia lub jeśli potrzebujesz przechowywać znaczną ilość danych, ponieważ jest bardziej skomplikowane w użyciu.

### Zadanie

Chcemy, aby nasi użytkownicy pozostawali zalogowani, dopóki nie klikną przycisku *Wyloguj się*, więc użyjemy `localStorage` do przechowywania danych konta. Najpierw zdefiniujmy klucz, którego użyjemy do przechowywania naszych danych.

```js
const storageKey = 'savedAccount';
```

Następnie dodaj tę linię na końcu funkcji `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Dzięki temu dane konta użytkownika będą utrwalane i zawsze aktualne, ponieważ wcześniej scentralizowaliśmy wszystkie aktualizacje stanu. To właśnie tutaj zaczynamy czerpać korzyści z wcześniejszych refaktoryzacji 🙂.

Ponieważ dane są zapisywane, musimy również zadbać o ich przywracanie podczas ładowania aplikacji. Ponieważ zaczniemy mieć więcej kodu inicjalizacyjnego, warto utworzyć nową funkcję `init`, która obejmuje również nasz wcześniejszy kod na końcu `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Tutaj pobieramy zapisane dane, a jeśli jakieś istnieją, aktualizujemy stan odpowiednio. Ważne jest, aby zrobić to *przed* aktualizacją trasy, ponieważ może istnieć kod, który polega na stanie podczas aktualizacji strony.

Możemy również ustawić stronę *Dashboard* jako domyślną stronę naszej aplikacji, ponieważ teraz utrwalamy dane konta. Jeśli nie znaleziono danych, pulpit nawigacyjny i tak zajmuje się przekierowaniem na stronę *Login*. W `updateRoute()` zamień domyślne `return navigate('/login');` na `return navigate('/dashboard');`.

Zaloguj się teraz do aplikacji i spróbuj odświeżyć stronę. Powinieneś pozostać na pulpicie nawigacyjnym. Dzięki tej aktualizacji rozwiązaliśmy wszystkie nasze początkowe problemy...

## Odświeżanie danych

...Ale mogliśmy również stworzyć nowy problem. Ups!

Przejdź do pulpitu nawigacyjnego, używając konta `test`, a następnie uruchom to polecenie w terminalu, aby utworzyć nową transakcję:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Spróbuj teraz odświeżyć stronę pulpitu nawigacyjnego w przeglądarce. Co się dzieje? Czy widzisz nową transakcję?

Stan jest utrwalany na stałe dzięki `localStorage`, ale to oznacza, że nigdy nie jest aktualizowany, dopóki nie wylogujesz się z aplikacji i nie zalogujesz ponownie!

Jedną z możliwych strategii rozwiązania tego problemu jest ponowne ładowanie danych konta za każdym razem, gdy ładowany jest pulpit nawigacyjny, aby uniknąć przestarzałych danych.

### Zadanie

Utwórz nową funkcję `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Ta metoda sprawdza, czy jesteśmy aktualnie zalogowani, a następnie ponownie ładuje dane konta z serwera.

Utwórz kolejną funkcję o nazwie `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Ta funkcja aktualizuje dane konta, a następnie zajmuje się aktualizacją HTML strony pulpitu nawigacyjnego. To właśnie ją musimy wywołać, gdy ładowana jest trasa pulpitu nawigacyjnego. Zaktualizuj definicję trasy:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Spróbuj teraz odświeżyć pulpit nawigacyjny, powinien wyświetlać zaktualizowane dane konta.

---

## 🚀 Wyzwanie

Teraz, gdy ponownie ładujemy dane konta za każdym razem, gdy ładowany jest pulpit nawigacyjny, czy uważasz, że nadal musimy utrwalać *wszystkie dane konta*?

Spróbujcie wspólnie zmienić to, co jest zapisywane i ładowane z `localStorage`, aby obejmowało tylko to, co jest absolutnie wymagane do działania aplikacji.

## Quiz po wykładzie
[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/48)

## Zadanie

[Zaimplementuj okno dialogowe "Dodaj transakcję"](assignment.md)

Oto przykład rezultatu po ukończeniu zadania:

![Zrzut ekranu przedstawiający przykładowe okno dialogowe "Dodaj transakcję"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.pl.png)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.