# Rozszerzenie przeglądarki Carbon Trigger: Kod początkowy

Korzystając z API C02 Signal od tmrow, możesz śledzić zużycie energii elektrycznej i stworzyć rozszerzenie przeglądarki, które przypomni Ci o obciążeniu energetycznym w Twoim regionie. Używanie tego rozszerzenia ad hoc pomoże Ci podejmować decyzje dotyczące Twoich działań na podstawie tych informacji.

![zrzut ekranu rozszerzenia](../../../../5-browser-extension/extension-screenshot.png)

## Pierwsze kroki

Musisz mieć zainstalowany [npm](https://npmjs.com). Pobierz kopię tego kodu do folderu na swoim komputerze.

Zainstaluj wszystkie wymagane pakiety:

```
npm install
```

Zbuduj rozszerzenie za pomocą webpack:

```
npm run build
```

Aby zainstalować na Edge, użyj menu z trzema kropkami w prawym górnym rogu przeglądarki, aby znaleźć panel Rozszerzenia. Następnie wybierz opcję „Załaduj rozpakowane”, aby załadować nowe rozszerzenie. W wyświetlonym oknie wybierz folder „dist”, a rozszerzenie zostanie załadowane. Aby z niego korzystać, będziesz potrzebować klucza API do API CO2 Signal ([zdobądź go tutaj przez e-mail](https://www.co2signal.com/) - wpisz swój e-mail w polu na tej stronie) oraz [kodu dla swojego regionu](http://api.electricitymap.org/v3/zones) odpowiadającego [Electricity Map](https://www.electricitymap.org/map) (na przykład w Bostonie używam „US-NEISO”).

![instalacja](../../../../5-browser-extension/install-on-edge.png)

Po wprowadzeniu klucza API i regionu w interfejsie rozszerzenia, kolorowa kropka na pasku rozszerzeń przeglądarki powinna zmienić kolor, aby odzwierciedlić zużycie energii w Twoim regionie. Dodatkowo, wskaże Ci, jakie działania wymagające dużej ilości energii są odpowiednie w danym momencie. Koncepcja tego systemu „kropek” została zainspirowana przez [rozszerzenie Energy Lollipop](https://energylollipop.com/) dla emisji w Kalifornii.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.