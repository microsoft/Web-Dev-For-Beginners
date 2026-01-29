# Tworzenie rozszerzenia przeglądarki

Tworzenie rozszerzeń przeglądarki to ciekawy i angażujący sposób na analizowanie wydajności swoich aplikacji, jednocześnie budując inny rodzaj zasobu internetowego. Ten moduł zawiera lekcje na temat działania przeglądarek, wdrażania rozszerzenia przeglądarki, tworzenia formularzy, wywoływania API, korzystania z lokalnej pamięci oraz oceny i poprawy wydajności witryny.

Zbudujesz rozszerzenie przeglądarki, które działa w Edge, Chrome i Firefox. To rozszerzenie, które przypomina mini stronę internetową dostosowaną do bardzo konkretnego zadania, sprawdza [C02 Signal API](https://www.co2signal.com) w celu uzyskania danych o zużyciu energii elektrycznej i intensywności emisji dwutlenku węgla w danym regionie, a następnie zwraca odczyt dotyczący śladu węglowego tego regionu.

To rozszerzenie może być wywoływane ad hoc przez użytkownika po wprowadzeniu klucza API i kodu regionu do formularza, aby określić lokalne zużycie energii elektrycznej, dostarczając tym samym dane, które mogą wpłynąć na decyzje użytkownika dotyczące korzystania z energii. Na przykład, może być korzystniej opóźnić włączenie suszarki do ubrań (czynność generująca dużo emisji) w okresie wysokiego zużycia energii w danym regionie.

### Tematy

1. [O przeglądarkach](1-about-browsers/README.md)
2. [Formularze i lokalna pamięć](2-forms-browsers-local-storage/README.md)
3. [Zadania w tle i wydajność](3-background-tasks-and-performance/README.md)

### Podziękowania

![zielone rozszerzenie przeglądarki](../../../5-browser-extension/extension-screenshot.png)

## Podziękowania

Pomysł na ten projekt "web carbon trigger" został zaproponowany przez Asima Hussaina, lidera zespołu Green Cloud Advocacy w Microsoft i autora [Green Principles](https://principles.green/). Początkowo był to [projekt strony internetowej](https://github.com/jlooper/green).

Struktura rozszerzenia przeglądarki została zainspirowana [rozszerzeniem COVID autorstwa Adeboli Adenirana](https://github.com/onedebos/covtension).

Koncepcja systemu ikon w formie "kropek" została zasugerowana przez strukturę ikon w rozszerzeniu przeglądarki [Energy Lollipop](https://energylollipop.com/) dotyczącym emisji w Kalifornii.

Te lekcje zostały napisane z ♥️ przez [Jen Looper](https://www.twitter.com/jenlooper).

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.