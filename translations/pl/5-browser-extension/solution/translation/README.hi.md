<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-24T13:21:50+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "pl"
}
-->
# Rozszerzenie przeglądarki Carbon Trigger: Gotowy kod

Wykorzystanie API CO2 Signal od tmrow do śledzenia zużycia energii elektrycznej, aby stworzyć rozszerzenie przeglądarki, które przypomni Ci, jak obciążone jest zużycie energii w Twoim regionie. Korzystanie z tego rozszerzenia pomoże Ci podejmować decyzje dotyczące Twoich działań na podstawie tych informacji.

![Zrzut ekranu rozszerzenia](../../../../../5-browser-extension/extension-screenshot.png)

## Rozpoczęcie

Musisz zainstalować [npm](https://npmjs.com). Pobierz kopię tego kodu do folderu na swoim komputerze.

Zainstaluj wszystkie wymagane pakiety:

```
npm install
```

Zbuduj rozszerzenie za pomocą webpacka:

```
npm run build
```

Aby zainstalować w przeglądarce Edge, użyj menu „trzy kropki” w prawym górnym rogu przeglądarki, aby znaleźć panel rozszerzeń. Stamtąd wybierz „Załaduj niepakowane”, aby załadować nowe rozszerzenie. W otwartym oknie wybierz folder „dist”, a rozszerzenie zostanie załadowane. Aby z niego korzystać, będziesz potrzebować klucza API CO2 Signal ([uzyskaj go tutaj przez e-mail](https://www.co2snal.com/) – wpisz swój e-mail w polu na tej stronie) oraz [kodu dla swojego regionu](http://api.electricitymap.org/v3/zones) z [Electricity Map](https://www.electricitymap.org/map) (na przykład w Bostonie używam „US-NEISO”).

![instalacja](../../../../../5-browser-extension/install-on-edge.png)

Po wprowadzeniu klucza API i kodu regionu w interfejsie rozszerzenia, kolorowa kropka na pasku rozszerzeń przeglądarki powinna zmieniać się, odzwierciedlając zużycie energii w Twoim regionie. Da Ci to wskaźnik, które działania związane z dużym zużyciem energii są odpowiednie w danym momencie. Koncepcja tej „kropkowej” metody została zainspirowana przez rozszerzenie [Energy Lollipop](https://energylollipop.com/) dla emisji w Kalifornii.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.