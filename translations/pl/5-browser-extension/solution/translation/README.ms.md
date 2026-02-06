# Rozszerzenie przeglądarki Carbon Trigger: Pełny kod

Korzystając z API CO2 Signal od tmrow do monitorowania zużycia energii elektrycznej, stwórz rozszerzenie przeglądarki, które pozwoli Ci otrzymywać powiadomienia o intensywności zużycia energii w Twoim regionie. Używanie tego rozszerzenia pomoże Ci podejmować decyzje dotyczące Twoich działań na podstawie tych informacji.

![zrzut ekranu rozszerzenia przeglądarki](../../../../../5-browser-extension/extension-screenshot.png)

## Zaczynamy

Musisz zainstalować [npm](https://npmjs.com). Pobierz kopię tego kodu do folderu na swoim komputerze.

Zainstaluj wszystkie wymagane pakiety:

```
npm install
```

Zbuduj rozszerzenie za pomocą webpacka:

```
npm run build
```

Aby zainstalować w Edge, użyj menu „trzech kropek” w prawym górnym rogu przeglądarki, aby znaleźć panel Rozszerzenia. Tam wybierz „Załaduj bez pakowania”, aby dodać nowe rozszerzenie. Otwórz folder „dist” na żądanie, a rozszerzenie zostanie załadowane. Aby z niego korzystać, potrzebujesz klucza API do API CO2 Signal ([zdobądź go tutaj przez e-mail](https://www.co2signal.com/) - wpisz swój e-mail w polu na tej stronie) oraz [kodu dla swojego regionu](http://api.electricitymap.org/v3/zones), który odpowiada [Mapie Elektryczności](https://www.electricitymap.org/map) (na przykład w Bostonie używam „US-NEISO”).

![pobieranie](../../../../../5-browser-extension/install-on-edge.png)

Po wprowadzeniu klucza API i regionu do interfejsu rozszerzenia, kolorowa kropka na pasku rozszerzeń przeglądarki zmieni się, aby odzwierciedlić zużycie energii w Twoim regionie i podpowiedzieć Ci, jakie działania są odpowiednie w danym momencie. Koncepcja systemu „kropki” została zaczerpnięta z [rozszerzenia przeglądarki Energy Lollipop](https://energylollipop.com/) dla emisji w Kalifornii.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.