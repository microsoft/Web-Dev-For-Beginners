<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-24T12:55:31+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "pl"
}
-->
# Tworzenie Dostępnych Stron Internetowych

![Wszystko o Dostępności](../../../../sketchnotes/webdev101-a11y.png)  
> Sketchnote autorstwa [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Przed Lekcją  
[Quiz przed lekcją](https://ff-quizzes.netlify.app/web/quiz/5)

> Siła internetu tkwi w jego uniwersalności. Dostęp dla każdego, niezależnie od niepełnosprawności, jest kluczowym aspektem.  
>  
> \- Sir Timothy Berners-Lee, Dyrektor W3C i wynalazca World Wide Web

Ten cytat doskonale podkreśla znaczenie tworzenia dostępnych stron internetowych. Aplikacja, która nie jest dostępna dla wszystkich, z definicji wyklucza pewne grupy użytkowników. Jako twórcy stron internetowych powinniśmy zawsze mieć na uwadze dostępność. Skupiając się na tym od samego początku, będziesz na dobrej drodze do zapewnienia, że każdy może korzystać z tworzonych przez Ciebie stron. W tej lekcji dowiesz się, jakie narzędzia mogą pomóc w zapewnieniu dostępności Twoich zasobów internetowych oraz jak projektować z myślą o dostępności.

> Możesz przerobić tę lekcję na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Narzędzia do wykorzystania

### Czytniki ekranowe

Jednym z najbardziej znanych narzędzi wspierających dostępność są czytniki ekranowe.

[Czytniki ekranowe](https://en.wikipedia.org/wiki/Screen_reader) są często używane przez osoby z zaburzeniami wzroku. Podczas gdy poświęcamy czas na zapewnienie, że przeglądarka prawidłowo przekazuje informacje, które chcemy udostępnić, musimy również upewnić się, że czytnik ekranowy robi to samo.

W swojej podstawowej formie czytnik ekranowy odczytuje stronę od góry do dołu w sposób słyszalny. Jeśli Twoja strona składa się wyłącznie z tekstu, czytnik ekranowy przekaże informacje w sposób podobny do przeglądarki. Oczywiście strony internetowe rzadko są czystym tekstem; zawierają linki, grafiki, kolory i inne elementy wizualne. Należy zadbać o to, aby te informacje były poprawnie odczytywane przez czytnik ekranowy.

Każdy twórca stron internetowych powinien zapoznać się z czytnikiem ekranowym. Jak wspomniano wcześniej, jest to narzędzie, z którego będą korzystać Twoi użytkownicy. Podobnie jak znasz sposób działania przeglądarki, powinieneś nauczyć się obsługi czytnika ekranowego. Na szczęście czytniki ekranowe są wbudowane w większość systemów operacyjnych.

Niektóre przeglądarki mają również wbudowane narzędzia i rozszerzenia, które mogą odczytywać tekst na głos lub oferować podstawowe funkcje nawigacyjne, takie jak [te narzędzia dostępności w przeglądarce Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Są to również ważne narzędzia wspierające dostępność, ale działają inaczej niż czytniki ekranowe i nie powinny być mylone z narzędziami do testowania czytników ekranowych.

✅ Wypróbuj czytnik ekranowy i narzędzie do odczytu tekstu w przeglądarce. W systemie Windows [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) jest dostępny domyślnie, a [JAWS](https://webaim.org/articles/jaws/) i [NVDA](https://www.nvaccess.org/about-nvda/) można zainstalować. W systemach macOS i iOS domyślnie zainstalowany jest [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10).

### Powiększenie

Innym narzędziem często używanym przez osoby z zaburzeniami wzroku jest powiększenie. Najbardziej podstawowy typ powiększenia to statyczne powiększenie, kontrolowane za pomocą `Control + znak plus (+)` lub przez zmniejszenie rozdzielczości ekranu. Ten typ powiększenia powoduje zmianę rozmiaru całej strony, dlatego ważne jest stosowanie [projektowania responsywnego](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design), aby zapewnić dobrą jakość użytkowania przy zwiększonych poziomach powiększenia.

Inny typ powiększenia opiera się na specjalistycznym oprogramowaniu, które powiększa jeden obszar ekranu i przesuwa go, podobnie jak użycie prawdziwego szkła powiększającego. W systemie Windows wbudowane jest narzędzie [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198), a [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) to oprogramowanie zewnętrzne z większą liczbą funkcji i szerszą bazą użytkowników. Zarówno macOS, jak i iOS mają wbudowane oprogramowanie do powiększania o nazwie [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Narzędzia do sprawdzania kontrastu

Kolory na stronach internetowych muszą być starannie dobrane, aby odpowiadać potrzebom użytkowników z daltonizmem lub osób mających trudności z widzeniem kolorów o niskim kontraście.

✅ Przetestuj stronę internetową, którą lubisz, pod kątem użycia kolorów za pomocą rozszerzenia przeglądarki, takiego jak [narzędzie do sprawdzania kontrastu WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Czego się dowiadujesz?

### Lighthouse

W obszarze narzędzi deweloperskich Twojej przeglądarki znajdziesz narzędzie Lighthouse. To narzędzie jest ważne, aby uzyskać pierwszy wgląd w dostępność (oraz inne analizy) strony internetowej. Chociaż ważne jest, aby nie polegać wyłącznie na Lighthouse, wynik 100% jest bardzo pomocny jako punkt odniesienia.

✅ Znajdź Lighthouse w panelu narzędzi deweloperskich swojej przeglądarki i przeprowadź analizę dowolnej strony. Co odkrywasz?

## Projektowanie z myślą o dostępności

Dostępność to stosunkowo szeroki temat. Aby Ci pomóc, dostępnych jest wiele zasobów.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Chociaż nie będziemy w stanie omówić każdego aspektu tworzenia dostępnych stron, poniżej znajdują się niektóre z podstawowych zasad, które warto wdrożyć. Projektowanie dostępnej strony od samego początku jest **zawsze** łatwiejsze niż późniejsze dostosowywanie istniejącej strony.

## Dobre zasady wyświetlania

### Bezpieczne palety kolorów

Ludzie widzą świat na różne sposoby, w tym kolory. Wybierając schemat kolorów dla swojej strony, powinieneś upewnić się, że jest on dostępny dla wszystkich. Jednym z świetnych [narzędzi do generowania palet kolorów jest Color Safe](http://colorsafe.co/).

✅ Zidentyfikuj stronę internetową, która ma poważne problemy z użyciem kolorów. Dlaczego?

### Używaj poprawnego HTML

Dzięki CSS i JavaScript można sprawić, że dowolny element będzie wyglądał jak dowolny typ kontrolki. `<span>` może być użyty do stworzenia `<button>`, a `<b>` może stać się hiperłączem. Chociaż może to być uznane za łatwiejsze do stylizacji, nie przekazuje żadnych informacji czytnikowi ekranowemu. Używaj odpowiedniego HTML podczas tworzenia kontrolek na stronie. Jeśli chcesz stworzyć hiperłącze, użyj `<a>`. Używanie właściwego HTML dla odpowiedniej kontrolki nazywa się stosowaniem Semantycznego HTML.

✅ Przejdź na dowolną stronę internetową i sprawdź, czy projektanci i deweloperzy używają HTML poprawnie. Czy znajdziesz przycisk, który powinien być linkiem? Podpowiedź: kliknij prawym przyciskiem myszy i wybierz 'Wyświetl kod strony' w swojej przeglądarce, aby zobaczyć kod źródłowy.

### Twórz opisową hierarchię nagłówków

Użytkownicy czytników ekranowych [polegają w dużej mierze na nagłówkach](https://webaim.org/projects/screenreadersurvey8/#finding), aby znaleźć informacje i nawigować po stronie. Pisanie opisowych treści nagłówków i używanie semantycznych tagów nagłówków jest ważne dla stworzenia łatwej w nawigacji strony dla użytkowników czytników ekranowych.

### Używaj dobrych wskazówek wizualnych

CSS oferuje pełną kontrolę nad wyglądem dowolnego elementu na stronie. Możesz stworzyć pola tekstowe bez obramowania lub hiperłącza bez podkreślenia. Niestety, usunięcie tych wskazówek może utrudnić osobom, które na nich polegają, rozpoznanie typu kontrolki.

## Znaczenie tekstu linków

Hiperłącza są kluczowe dla nawigacji w internecie. W związku z tym, zapewnienie, że czytnik ekranowy może poprawnie odczytać linki, pozwala wszystkim użytkownikom nawigować po Twojej stronie.

### Czytniki ekranowe i linki

Jak można się spodziewać, czytniki ekranowe odczytują tekst linków w taki sam sposób, jak każdy inny tekst na stronie. Mając to na uwadze, poniższy przykład tekstu może wydawać się całkowicie akceptowalny.

> Mały pingwin, czasami nazywany pingwinem wróżką, jest najmniejszym pingwinem na świecie. [Kliknij tutaj](https://en.wikipedia.org/wiki/Little_penguin), aby uzyskać więcej informacji.

> Mały pingwin, czasami nazywany pingwinem wróżką, jest najmniejszym pingwinem na świecie. Odwiedź https://en.wikipedia.org/wiki/Little_penguin, aby uzyskać więcej informacji.

> **NOTE** Jak zaraz przeczytasz, **nigdy** nie powinieneś tworzyć linków, które wyglądają jak powyżej.

Pamiętaj, że czytniki ekranowe to inny interfejs niż przeglądarki, z innym zestawem funkcji.

### Problem z używaniem URL

Czytniki ekranowe odczytują tekst. Jeśli w tekście pojawi się URL, czytnik ekranowy odczyta URL. Ogólnie rzecz biorąc, URL nie przekazuje znaczących informacji i może brzmieć irytująco. Możesz tego doświadczyć, jeśli Twój telefon kiedykolwiek odczytał na głos wiadomość tekstową z URL.

### Problem z "kliknij tutaj"

Czytniki ekranowe mają również możliwość odczytywania tylko hiperłączy na stronie, podobnie jak osoba widząca skanuje stronę w poszukiwaniu linków. Jeśli tekst linków zawsze brzmi "kliknij tutaj", użytkownik usłyszy tylko "kliknij tutaj, kliknij tutaj, kliknij tutaj, kliknij tutaj, kliknij tutaj, ...". Wszystkie linki stają się teraz nieodróżnialne od siebie.

### Dobry tekst linków

Dobry tekst linków krótko opisuje, co znajduje się po drugiej stronie linku. W powyższym przykładzie dotyczącym małych pingwinów, link prowadzi do strony Wikipedii o tym gatunku. Fraza *mały pingwin* byłaby idealnym tekstem linku, ponieważ jasno wskazuje, czego dowie się użytkownik, klikając link - małe pingwiny.

> [Mały pingwin](https://en.wikipedia.org/wiki/Little_penguin), czasami nazywany pingwinem wróżką, jest najmniejszym pingwinem na świecie.

✅ Przeglądaj internet przez kilka minut, aby znaleźć strony, które używają niejasnych strategii linkowania. Porównaj je z innymi, lepiej zaprojektowanymi stronami. Czego się uczysz?

#### Uwagi dotyczące wyszukiwarek

Dodatkową korzyścią z zapewnienia dostępności Twojej strony dla wszystkich jest pomoc wyszukiwarkom w nawigacji po Twojej stronie. Wyszukiwarki używają tekstu linków, aby dowiedzieć się, jakie tematy poruszają strony. Tak więc używanie dobrego tekstu linków pomaga wszystkim!

### ARIA

Wyobraź sobie następującą stronę:

| Produkt      | Opis              | Zamówienie   |
| ------------ | ----------------- | ------------ |
| Widget       | [Opis](../../../../1-getting-started-lessons/3-accessibility/')       | [Zamówienie](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Opis](../../../../1-getting-started-lessons/3-accessibility/')       | [Zamówienie](../../../../1-getting-started-lessons/3-accessibility/') |

W tym przykładzie powielanie tekstu "opis" i "zamówienie" ma sens dla osoby korzystającej z przeglądarki. Jednak osoba korzystająca z czytnika ekranowego usłyszy tylko słowa *opis* i *zamówienie* powtarzane bez kontekstu.

Aby wspierać tego typu scenariusze, HTML obsługuje zestaw atrybutów znanych jako [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Te atrybuty pozwalają na dostarczenie dodatkowych informacji czytnikom ekranowym.

> **NOTE**: Podobnie jak w przypadku wielu aspektów HTML, obsługa przeglądarek i czytników ekranowych może się różnić. Jednak większość głównych klientów obsługuje atrybuty ARIA.

Możesz użyć `aria-label`, aby opisać link, gdy format strony na to nie pozwala. Opis dla widgetu można ustawić jako

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Ogólnie rzecz biorąc, używanie semantycznego oznaczenia, jak opisano powyżej, przewyższa użycie ARIA, ale czasami nie ma semantycznego odpowiednika dla różnych widżetów HTML. Dobrym przykładem jest drzewo. Nie ma odpowiednika HTML dla drzewa, więc identyfikujesz ogólny `<div>` dla tego elementu z odpowiednią rolą i wartościami ARIA. [Dokumentacja MDN na temat ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) zawiera więcej przydatnych informacji.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Obrazy

Oczywiste jest, że czytniki ekranowe nie są w stanie automatycznie odczytać, co znajduje się na obrazie. Zapewnienie dostępności obrazów nie wymaga dużego wysiłku - właśnie do tego służy atrybut `alt`. Wszystkie znaczące obrazy powinny mieć `alt`, aby opisać, czym są.  
Obrazy, które są czysto dekoracyjne, powinny mieć atrybut `alt` ustawiony na pusty ciąg: `alt=""`. Zapobiega to niepotrzebnemu ogłaszaniu dekoracyjnego obrazu przez czytniki ekranowe.

✅ Jak można się spodziewać, wyszukiwarki również nie są w stanie zrozumieć, co znajduje się na obrazie. One również używają tekstu alt. Tak więc, jak widać, zapewnienie dostępności strony przynosi dodatkowe korzyści!

## Klawiatura

Niektórzy użytkownicy nie są w stanie korzystać z myszy lub touchpada, zamiast tego polegają na interakcjach klawiatury, aby przechodzić od jednego elementu do następnego. Ważne jest, aby Twoja strona internetowa prezentowała treści w logicznej kolejności, aby użytkownik klawiatury mógł uzyskać dostęp do każdego interaktywnego elementu, przechodząc w dół dokumentu. Jeśli tworzysz swoje strony internetowe z semantycznym oznaczeniem i używasz CSS do stylizacji ich wizualnego układu, Twoja strona powinna być nawigowalna za pomocą klawiatury, ale ważne jest, aby przetestować ten aspekt ręcznie. Dowiedz się więcej o [strategiach nawigacji klawiaturą](https://webaim.org/techniques/keyboard/).

✅ Przejdź na dowolną stronę internetową i spróbuj nawigować po niej, używając tylko klawiatury. Co działa, a co nie działa? Dlaczego?

## Podsumowanie

Internet dostępny dla niektórych nie jest prawdziwym "światowym internetem". Najlepszym sposobem na zapewnienie dostępności tworzonych przez Ciebie stron jest wdrożenie najlepszych praktyk dostępności od samego początku. Chociaż wymaga to dodatkowych kroków, włączenie tych umiejętności do swojego procesu pracy teraz sprawi, że wszystkie strony, które stworzysz, będą dostępne.

---

## 🚀 Wyzwanie

Weź ten kod HTML i
Wiele rządów posiada przepisy dotyczące wymagań w zakresie dostępności. Zapoznaj się z przepisami dotyczącymi dostępności w swoim kraju. Co jest objęte regulacjami, a co nie? Przykładem może być [ta strona rządowa](https://accessibility.blog.gov.uk/).

## Zadanie

[Przeanalizuj stronę internetową niedostosowaną do potrzeb osób z niepełnosprawnościami](assignment.md)

Źródło: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) autorstwa Instrument

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.