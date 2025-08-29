<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T16:28:39+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "pl"
}
-->
# Projekt rozszerzenia przeglądarki, część 2: Wywołanie API, użycie Local Storage

## Quiz przed lekcją

[Quiz przed lekcją](https://ff-quizzes.netlify.app/web/quiz/25)

### Wprowadzenie

W tej lekcji wywołasz API, przesyłając formularz rozszerzenia przeglądarki i wyświetlając wyniki w rozszerzeniu. Dodatkowo dowiesz się, jak przechowywać dane w lokalnej pamięci przeglądarki, aby móc je wykorzystać w przyszłości.

✅ Postępuj zgodnie z numerowanymi segmentami w odpowiednich plikach, aby wiedzieć, gdzie umieścić swój kod.

### Przygotowanie elementów do manipulacji w rozszerzeniu:

Do tej pory stworzyłeś HTML dla formularza i `<div>` wyników w swoim rozszerzeniu przeglądarki. Od teraz będziesz pracować w pliku `/src/index.js` i budować swoje rozszerzenie krok po kroku. Odwołaj się do [poprzedniej lekcji](../1-about-browsers/README.md), aby przypomnieć sobie, jak skonfigurować projekt i proces budowania.

Pracując w pliku `index.js`, zacznij od utworzenia kilku zmiennych `const`, które będą przechowywać wartości związane z różnymi polami:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Wszystkie te pola są odwoływane za pomocą ich klas CSS, które ustawiłeś w HTML w poprzedniej lekcji.

### Dodaj nasłuchiwacze zdarzeń

Następnie dodaj nasłuchiwacze zdarzeń do formularza i przycisku czyszczenia, który resetuje formularz, aby coś się działo, gdy użytkownik przesyła formularz lub klika przycisk resetowania. Na końcu pliku dodaj wywołanie funkcji inicjalizującej aplikację:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Zwróć uwagę na skróconą metodę nasłuchiwania zdarzeń submit lub click oraz na to, jak zdarzenie jest przekazywane do funkcji handleSubmit lub reset. Czy potrafisz napisać równoważny kod w dłuższym formacie? Który sposób preferujesz?

### Rozbudowa funkcji init() i reset():

Teraz zbudujesz funkcję inicjalizującą rozszerzenie, nazwaną init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

W tej funkcji znajduje się interesująca logika. Czytając ją, możesz zauważyć, co się dzieje:

- ustawiane są dwie zmienne `const`, które sprawdzają, czy użytkownik przechował APIKey i kod regionu w lokalnej pamięci.
- jeśli którakolwiek z tych wartości jest null, formularz jest wyświetlany poprzez zmianę jego stylu na 'block'.
- ukrywane są wyniki, komunikat ładowania oraz clearBtn, a tekst błędu jest ustawiany na pusty ciąg znaków.
- jeśli istnieje klucz i region, rozpoczyna się procedura:
  - wywołanie API w celu uzyskania danych o zużyciu węgla,
  - ukrycie obszaru wyników,
  - ukrycie formularza,
  - wyświetlenie przycisku resetowania.

Zanim przejdziesz dalej, warto dowiedzieć się o bardzo ważnym koncepcie dostępnym w przeglądarkach: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage to przydatny sposób przechowywania ciągów znaków w przeglądarce jako pary `klucz-wartość`. Ten typ pamięci internetowej może być manipulowany za pomocą JavaScriptu w celu zarządzania danymi w przeglądarce. LocalStorage nie wygasa, podczas gdy SessionStorage, inny rodzaj pamięci internetowej, jest czyszczony po zamknięciu przeglądarki. Różne typy pamięci mają swoje zalety i wady.

> Uwaga - Twoje rozszerzenie przeglądarki ma własną lokalną pamięć; główne okno przeglądarki to inna instancja i działa niezależnie.

Ustawiasz wartość APIKey jako ciąg znaków, na przykład, i możesz zobaczyć, że jest ustawiona w Edge, "inspekcjonując" stronę internetową (możesz kliknąć prawym przyciskiem myszy w przeglądarce, aby inspekcjonować) i przechodząc do zakładki Applications, aby zobaczyć pamięć.

![Panel lokalnej pamięci](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.pl.png)

✅ Zastanów się nad sytuacjami, w których NIE chciałbyś przechowywać danych w LocalStorage. Ogólnie rzecz biorąc, umieszczanie kluczy API w LocalStorage to zły pomysł! Czy widzisz dlaczego? W naszym przypadku, ponieważ nasza aplikacja jest wyłącznie do nauki i nie będzie publikowana w sklepie z aplikacjami, użyjemy tej metody.

Zauważ, że używasz Web API do manipulowania LocalStorage, korzystając z `getItem()`, `setItem()` lub `removeItem()`. Jest szeroko wspierane w przeglądarkach.

Zanim zbudujesz funkcję `displayCarbonUsage()`, która jest wywoływana w `init()`, stwórz funkcjonalność obsługującą początkowe przesłanie formularza.

### Obsługa przesłania formularza

Utwórz funkcję nazwaną `handleSubmit`, która akceptuje argument zdarzenia `(e)`. Zatrzymaj propagację zdarzenia (w tym przypadku chcemy zatrzymać odświeżanie przeglądarki) i wywołaj nową funkcję `setUpUser`, przekazując argumenty `apiKey.value` i `region.value`. W ten sposób używasz dwóch wartości, które są wprowadzone za pomocą początkowego formularza, gdy odpowiednie pola są wypełnione.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Przypomnij sobie - HTML, który ustawiłeś w ostatniej lekcji, ma dwa pola wejściowe, których `values` są przechwytywane za pomocą `const`, które ustawiłeś na początku pliku, i oba są `required`, więc przeglądarka uniemożliwia użytkownikom wprowadzenie wartości null.

### Konfiguracja użytkownika

Przechodząc do funkcji `setUpUser`, tutaj ustawiasz wartości lokalnej pamięci dla apiKey i regionName. Dodaj nową funkcję:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Ta funkcja ustawia komunikat ładowania, który jest wyświetlany podczas wywoływania API. W tym momencie dotarłeś do stworzenia najważniejszej funkcji tego rozszerzenia przeglądarki!

### Wyświetlanie zużycia węgla

W końcu nadszedł czas na zapytanie API!

Zanim przejdziesz dalej, powinniśmy omówić API. API, czyli [Interfejsy Programowania Aplikacji](https://www.webopedia.com/TERM/A/API.html), są kluczowym elementem narzędzi web developera. Zapewniają standardowe sposoby interakcji i komunikacji między programami. Na przykład, jeśli budujesz stronę internetową, która musi zapytać bazę danych, ktoś mógł stworzyć API, które możesz użyć. Chociaż istnieje wiele typów API, jednym z najpopularniejszych jest [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Termin 'REST' oznacza 'Representational State Transfer' i polega na używaniu różnie skonfigurowanych URL do pobierania danych. Zrób małe badania na temat różnych typów API dostępnych dla programistów. Który format najbardziej Ci odpowiada?

Istnieją ważne rzeczy do zauważenia w tej funkcji. Po pierwsze, zwróć uwagę na słowo kluczowe [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Pisanie funkcji tak, aby działały asynchronicznie, oznacza, że czekają na zakończenie akcji, takiej jak zwrócenie danych, zanim przejdą dalej.

Oto krótki film o `async`:

[![Async i Await do zarządzania obietnicami](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async i Await do zarządzania obietnicami")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć film o async/await.

Utwórz nową funkcję do zapytania API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

To duża funkcja. Co się tutaj dzieje?

- zgodnie z najlepszymi praktykami używasz słowa kluczowego `async`, aby funkcja działała asynchronicznie. Funkcja zawiera blok `try/catch`, ponieważ zwróci obietnicę, gdy API zwróci dane. Ponieważ nie masz kontroli nad szybkością odpowiedzi API (może w ogóle nie odpowiedzieć!), musisz obsłużyć tę niepewność, wywołując ją asynchronicznie.
- zapytujesz API co2signal, aby uzyskać dane dla swojego regionu, używając swojego klucza API. Aby użyć tego klucza, musisz użyć rodzaju uwierzytelnienia w parametrach nagłówka.
- gdy API odpowie, przypisujesz różne elementy jego danych odpowiedzi do części ekranu, które ustawiłeś, aby wyświetlać te dane.
- jeśli wystąpi błąd lub nie ma wyniku, wyświetlasz komunikat o błędzie.

✅ Korzystanie z wzorców programowania asynchronicznego to kolejny bardzo przydatny element w Twoim zestawie narzędzi. Przeczytaj [o różnych sposobach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), w jakie możesz skonfigurować tego typu kod.

Gratulacje! Jeśli zbudujesz swoje rozszerzenie (`npm run build`) i odświeżysz je w panelu rozszerzeń, masz działające rozszerzenie! Jedyną rzeczą, która nie działa, jest ikona, którą naprawisz w następnej lekcji.

---

## 🚀 Wyzwanie

Omówiliśmy kilka typów API w tych lekcjach. Wybierz jedno API internetowe i zbadaj szczegółowo, co oferuje. Na przykład, przyjrzyj się API dostępnemu w przeglądarkach, takim jak [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Co według Ciebie czyni API świetnym?

## Quiz po lekcji

[Quiz po lekcji](https://ff-quizzes.netlify.app/web/quiz/26)

## Przegląd i samodzielna nauka

W tej lekcji nauczyłeś się o LocalStorage i API, które są bardzo przydatne dla profesjonalnego web developera. Czy potrafisz pomyśleć, jak te dwie rzeczy współpracują? Zastanów się, jak zaprojektowałbyś stronę internetową, która przechowuje elementy do wykorzystania przez API.

## Zadanie

[Zaadoptuj API](assignment.md)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.