# Rozszerzenie przeglądarki Carbon Trigger: kod na start

Będziemy korzystać z API Signal CO2 od tmrow, aby monitorować zużycie energii elektrycznej i stworzyć rozszerzenie do przeglądarki, które będzie przypominać bezpośrednio w przeglądarce, jak duże jest obciążenie elektryczne w danym regionie. Korzystanie z tego dedykowanego rozszerzenia pomoże ocenić swoje działania na podstawie tych informacji.

![zrzut ekranu rozszerzenia](../../../../../5-browser-extension/extension-screenshot.png)

## Jak zacząć

Należy upewnić się, że [npm](https://npmjs.com) jest zainstalowane. Pobierz kopię tego kodu do folderu na swoim komputerze.

Zainstaluj wszystkie wymagane pakiety:

```
npm install
```

Utwórz rozszerzenie za pomocą webpack:

```
npm run build
```

Aby zainstalować na Edge, użyj menu "trzy kropki" w prawym górnym rogu przeglądarki, aby znaleźć panel Rozszerzenia. Jeśli nie jest jeszcze aktywowany, włącz Tryb deweloperski (w lewym dolnym rogu). Wybierz "Załaduj rozpakowane", aby załadować nowe rozszerzenie. Wskaż folder "dist" w wyświetlonym oknie, a rozszerzenie zostanie załadowane. Aby z niego korzystać, będziesz potrzebować klucza API do API CO2 Signal (możesz [uzyskać go tutaj przez e-mail](https://www.co2signal.com/) - wpisz swój e-mail w polu na tej stronie) oraz [kodu dla swojego regionu](http://api.electricitymap.org/v3/zones) odpowiadającego [mapie elektrycznej](https://www.electricitymap.org/map) (na przykład w Bostonie jest to "US-NEISO").

![instalacja](../../../../../5-browser-extension/install-on-edge.png)

Po wprowadzeniu klucza API i regionu w interfejsie rozszerzenia, kolorowa kropka na pasku rozszerzeń przeglądarki powinna zmieniać kolor, aby odzwierciedlić zużycie energii w regionie. Dodatkowo, wskaże, jakie działania o wysokim zużyciu energii są odpowiednie do wykonania w danym momencie. Koncepcja tego systemu "punktowego" została zaczerpnięta z [rozszerzenia Energy Lollipop](https://energylollipop.com/) dla emisji w Kalifornii.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.