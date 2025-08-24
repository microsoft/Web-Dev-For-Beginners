<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-24T13:25:32+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "pl"
}
-->
# Rozszerzenie przeglądarki Carbon Trigger: Gotowy kod

Zbuduj rozszerzenie przeglądarki, które wykorzystuje API CO2 Signal od tmrow do śledzenia zużycia energii elektrycznej w Twoim regionie. Rozszerzenie wyświetla przypomnienie na przeglądarce, pokazując, jak intensywne jest zużycie energii w Twojej okolicy. Dzięki temu możesz podejmować decyzje dotyczące swoich działań na podstawie tych informacji.

![zrzut ekranu rozszerzenia](../../../../../5-browser-extension/extension-screenshot.png)

## Wprowadzenie

Musisz mieć zainstalowany [npm](https://npmjs.com). Pobierz kopię tego kodu do folderu na swoim komputerze.

Zainstaluj wszystkie wymagane pakiety.

```
npm install
```

Zbuduj rozszerzenie za pomocą webpack.

```
npm run build
```

Aby zainstalować rozszerzenie w Edge, znajdź panel „Rozszerzenia” w menu „trzy kropki” w prawym górnym rogu przeglądarki. Następnie wybierz „Załaduj niepakowane” i załaduj nowe rozszerzenie. Po wyświetleniu monitu otwórz folder „dist”, aby załadować rozszerzenie. Aby korzystać z rozszerzenia, potrzebujesz klucza API CO2 Signal ([zdobądź go tutaj przez e-mail](https://www.co2signal.com/) - wpisz swój adres e-mail w polu na tej stronie) oraz [kod dla Twojego regionu](http://api.electricitymap.org/v3/zones) zgodny z [Electricity Map](https://www.electricitymap.org/map) (na przykład w Bostonie używa się 'US-NEISO').

![instalacja](../../../../../5-browser-extension/install-on-edge.png)

Po wprowadzeniu klucza API i kodu regionu w interfejsie rozszerzenia, kolorowa kropka wyświetlana na pasku rozszerzeń przeglądarki zmienia się, odzwierciedlając zużycie energii w Twoim regionie. Kropka wskazuje, jakie działania wymagające energii są odpowiednie w danym momencie. Koncepcja tego systemu „kropki” została zainspirowana rozszerzeniem [Energy Lollipop](https://energylollipop.com/) dla emisji w Kalifornii.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.