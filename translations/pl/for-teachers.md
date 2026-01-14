<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T09:38:34+00:00",
  "source_file": "for-teachers.md",
  "language_code": "pl"
}
-->
### Dla nauczycieli

Zapraszamy do korzystania z tego programu nauczania w swojej klasie. Doskonale współpracuje z GitHub Classroom i wiodącymi platformami LMS, a także może być używany jako samodzielne repozytorium z uczniami.

### Korzystanie z GitHub Classroom

Aby zarządzać lekcjami i zadaniami dla każdej grupy, utwórz jedno repozytorium na lekcję, aby GitHub Classroom mógł przypisać każde zadanie niezależnie.

- Sforkuj to repozytorium do swojej organizacji.
- Utwórz osobne repozytorium dla każdej lekcji, wyodrębniając folder lekcji do osobnego repozytorium.
  - Opcja A: Utwórz puste repozytoria (jedno na lekcję) i skopiuj zawartość folderu lekcji do każdego z nich.
  - Opcja B: Użyj podejścia zachowującego historię Git (np. podziel folder na nowe repozytorium), jeśli potrzebujesz zachować pochodzenie.
- W GitHub Classroom utwórz zadanie dla każdej lekcji i wskaż odpowiednie repozytorium lekcji.
- Zalecane ustawienia:
  - Widoczność repozytorium: prywatne dla pracy uczniów.
  - Użyj kodu startowego z domyślnej gałęzi repozytorium lekcji.
  - Dodaj szablony zgłoszeń i pull requestów dla quizów i zgłoszeń.
  - Opcjonalnie skonfiguruj automatyczne ocenianie i testy, jeśli lekcje je zawierają.
- Przydatne konwencje:
  - Nazwy repozytoriów, takie jak lesson-01-intro, lesson-02-html, itd.
  - Etykiety: quiz, assignment, needs-review, late, resubmission.
  - Tagowanie/wydania dla każdej grupy (np. v2025-term1).

Wskazówka: Unikaj przechowywania repozytoriów w folderach synchronizowanych (np. OneDrive/Google Drive), aby zapobiec konfliktom Git na Windows.

### Korzystanie z Moodle, Canvas lub Blackboard

Ten program nauczania zawiera pakiety do importowania dla popularnych przepływów pracy LMS.

- Moodle: Użyj pliku do przesyłania [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz), aby załadować cały kurs.
- Common Cartridge: Użyj pliku [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) dla szerszej kompatybilności LMS.
- Uwagi:
  - Moodle Cloud ma ograniczone wsparcie dla Common Cartridge. Preferuj powyższy plik Moodle, który można również przesłać do Canvas.
  - Po zaimportowaniu przejrzyj moduły, terminy i ustawienia quizów, aby dopasować je do harmonogramu semestru.

![Moodle](../../translated_images/moodle.94eb93d714a50cb2.pl.png)
> Program nauczania w klasie Moodle

![Canvas](../../translated_images/canvas.fbd605ff8e5b8aff.pl.png)
> Program nauczania w Canvas

### Korzystanie bezpośrednio z repozytorium (bez Classroom)

Jeśli wolisz nie korzystać z GitHub Classroom, możesz prowadzić kurs bezpośrednio z tego repozytorium.

- Format synchroniczny/online (Zoom/Teams):
  - Prowadź krótkie rozgrzewki z mentorem; używaj pokoi grupowych do quizów.
  - Ogłoś okno czasowe na quizy; uczniowie przesyłają odpowiedzi jako GitHub Issues.
  - W przypadku zadań zespołowych uczniowie pracują w publicznych repozytoriach lekcji i otwierają pull requesty.
- Format prywatny/asynchroniczny:
  - Uczniowie forkają każdą lekcję do swoich **prywatnych** repozytoriów i dodają Cię jako współpracownika.
  - Przesyłają zgłoszenia przez Issues (quizy) i Pull Requests (zadania) na Twoje repozytorium klasowe lub swoje prywatne forki.

### Najlepsze praktyki

- Zapewnij lekcję orientacyjną na temat podstaw Git/GitHub, Issues i PR.
- Używaj list kontrolnych w Issues dla quizów/zadań wieloetapowych.
- Dodaj CONTRIBUTING.md i CODE_OF_CONDUCT.md, aby ustalić normy klasowe.
- Dodaj uwagi dotyczące dostępności (tekst alternatywny, napisy) i oferuj drukowalne pliki PDF.
- Wersjonuj swoje treści na semestr i zamrażaj repozytoria lekcji po ich opublikowaniu.

### Opinie i wsparcie

Chcemy, aby ten program nauczania działał dla Ciebie i Twoich uczniów. Proszę otwórz nowe Issue w tym repozytorium w przypadku błędów, próśb lub ulepszeń, lub rozpocznij dyskusję w Teacher Corner.

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, należy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.