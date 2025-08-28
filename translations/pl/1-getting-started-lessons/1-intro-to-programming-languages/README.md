<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-24T13:00:04+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "pl"
}
-->
# Wprowadzenie do języków programowania i narzędzi dla programistów

Ta lekcja obejmuje podstawy języków programowania. Poruszane tutaj tematy dotyczą większości współczesnych języków programowania. W sekcji „Narzędzia dla programistów” dowiesz się o przydatnym oprogramowaniu, które wspiera pracę dewelopera.

![Intro Programming](../../../../sketchnotes/webdev101-programming.png)
> Sketchnote autorstwa [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz przed wykładem
[Quiz przed wykładem](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Wprowadzenie

W tej lekcji omówimy:

- Czym jest programowanie?
- Rodzaje języków programowania
- Podstawowe elementy programu
- Przydatne oprogramowanie i narzędzia dla profesjonalnego programisty

> Możesz przejść tę lekcję na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Czym jest programowanie?

Programowanie (znane również jako kodowanie) to proces pisania instrukcji dla urządzenia, takiego jak komputer czy urządzenie mobilne. Instrukcje te piszemy w języku programowania, który następnie jest interpretowany przez urządzenie. Zestawy instrukcji mogą być nazywane różnie, ale *program*, *program komputerowy*, *aplikacja (app)* i *plik wykonywalny* to kilka popularnych nazw.

*Program* może być wszystkim, co zostało napisane za pomocą kodu; strony internetowe, gry i aplikacje na telefon to programy. Chociaż możliwe jest stworzenie programu bez pisania kodu, logika, która jest interpretowana przez urządzenie, najprawdopodobniej została napisana w kodzie. Program, który *działa* lub *wykonuje* kod, realizuje instrukcje. Urządzenie, na którym czytasz tę lekcję, uruchamia program, aby wyświetlić ją na ekranie.

✅ Zrób małe badania: kto jest uważany za pierwszego programistę komputerowego na świecie?

## Języki programowania

Języki programowania umożliwiają programistom pisanie instrukcji dla urządzenia. Urządzenia rozumieją tylko kod binarny (1 i 0), a dla *większości* programistów nie jest to efektywny sposób komunikacji. Języki programowania są środkiem komunikacji między ludźmi a komputerami.

Języki programowania występują w różnych formatach i mogą służyć różnym celom. Na przykład JavaScript jest głównie używany do aplikacji internetowych, podczas gdy Bash jest głównie używany w systemach operacyjnych.

*Języki niskiego poziomu* zazwyczaj wymagają mniej kroków niż *języki wysokiego poziomu*, aby urządzenie mogło zinterpretować instrukcje. Jednak to, co sprawia, że języki wysokiego poziomu są popularne, to ich czytelność i wsparcie. JavaScript jest uważany za język wysokiego poziomu.

Poniższy kod ilustruje różnicę między językiem wysokiego poziomu (JavaScript) a językiem niskiego poziomu (ARM assembly).

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Uwierz lub nie, *obie wersje robią to samo*: drukują ciąg Fibonacciego do 10.

✅ Ciąg Fibonacciego jest [zdefiniowany](https://en.wikipedia.org/wiki/Fibonacci_number) jako zestaw liczb, w którym każda liczba jest sumą dwóch poprzednich, zaczynając od 0 i 1. Pierwsze 10 liczb w ciągu Fibonacciego to 0, 1, 1, 2, 3, 5, 8, 13, 21 i 34.

## Elementy programu

Pojedyncza instrukcja w programie nazywana jest *wyrażeniem* i zazwyczaj ma znak lub odstęp, który oznacza, gdzie instrukcja się kończy, czyli *kończy się*. Sposób zakończenia programu różni się w zależności od języka.

Wyrażenia w programie mogą opierać się na danych dostarczonych przez użytkownika lub z innych źródeł, aby wykonać instrukcje. Dane mogą zmieniać sposób działania programu, dlatego języki programowania oferują sposób na tymczasowe przechowywanie danych, aby można było je wykorzystać później. Są to tak zwane *zmienne*. Zmienne to wyrażenia, które instruują urządzenie, aby zapisało dane w swojej pamięci. Zmienne w programach są podobne do zmiennych w algebrze, gdzie mają unikalną nazwę, a ich wartość może zmieniać się w czasie.

Istnieje możliwość, że niektóre wyrażenia nie zostaną wykonane przez urządzenie. Zazwyczaj jest to zamierzone przez programistę lub przypadkowe, gdy wystąpi nieoczekiwany błąd. Tego typu kontrola nad aplikacją sprawia, że jest ona bardziej solidna i łatwiejsza w utrzymaniu. Zmiany w kontroli zazwyczaj zachodzą, gdy spełnione są określone warunki. Popularnym wyrażeniem używanym we współczesnym programowaniu do kontrolowania działania programu jest wyrażenie `if..else`.

✅ Dowiesz się więcej o tego typu wyrażeniach w kolejnych lekcjach.

## Narzędzia dla programistów

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Kliknij obrazek powyżej, aby obejrzeć wideo o narzędziach

W tej sekcji dowiesz się o oprogramowaniu, które może być bardzo przydatne na początku Twojej profesjonalnej drogi jako programista.

**Środowisko programistyczne** to unikalny zestaw narzędzi i funkcji, które programista często wykorzystuje podczas pisania oprogramowania. Niektóre z tych narzędzi zostały dostosowane do specyficznych potrzeb programisty i mogą zmieniać się w czasie, jeśli programista zmieni priorytety w pracy, projektach osobistych lub gdy użyje innego języka programowania. Środowiska programistyczne są tak unikalne, jak programiści, którzy z nich korzystają.

### Edytory

Jednym z najważniejszych narzędzi w programowaniu jest edytor. Edytory to miejsca, w których piszesz kod, a czasami także go uruchamiasz.

Programiści polegają na edytorach z kilku dodatkowych powodów:

- *Debugowanie* pomaga wykrywać błędy, przechodząc przez kod linia po linii. Niektóre edytory mają wbudowane funkcje debugowania; można je dostosować i dodać dla konkretnych języków programowania.
- *Podświetlanie składni* dodaje kolory i formatowanie tekstu do kodu, co ułatwia jego czytanie. Większość edytorów pozwala na dostosowanie podświetlania składni.
- *Rozszerzenia i integracje* to specjalistyczne narzędzia dla programistów, stworzone przez programistów. Te narzędzia nie są wbudowane w podstawowy edytor. Na przykład wielu programistów dokumentuje swój kod, aby wyjaśnić, jak działa. Mogą zainstalować rozszerzenie do sprawdzania pisowni, aby znaleźć literówki w dokumentacji. Większość rozszerzeń jest przeznaczona do użycia w konkretnym edytorze, a większość edytorów ma możliwość wyszukiwania dostępnych rozszerzeń.
- *Personalizacja* umożliwia programistom tworzenie unikalnego środowiska programistycznego dostosowanego do ich potrzeb. Większość edytorów jest bardzo elastyczna i pozwala programistom na tworzenie własnych rozszerzeń.

#### Popularne edytory i rozszerzenia dla programistów webowych

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Przeglądarki

Kolejnym kluczowym narzędziem jest przeglądarka. Programiści webowi polegają na przeglądarce, aby zobaczyć, jak ich kod działa w sieci. Przeglądarka jest również używana do wyświetlania elementów wizualnych strony internetowej napisanych w edytorze, takich jak HTML.

Wiele przeglądarek ma wbudowane *narzędzia dla programistów* (DevTools), które zawierają zestaw przydatnych funkcji i informacji, pomagających programistom zbierać i rejestrować ważne dane o ich aplikacji. Na przykład: jeśli na stronie internetowej występują błędy, czasami pomocne jest wiedzieć, kiedy się pojawiły. DevTools w przeglądarce można skonfigurować, aby rejestrować te informacje.

#### Popularne przeglądarki i DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Narzędzia wiersza poleceń

Niektórzy programiści preferują mniej graficzny widok swoich codziennych zadań i polegają na wierszu poleceń, aby to osiągnąć. Pisanie kodu wymaga dużej ilości pisania, a niektórzy programiści wolą nie przerywać swojego rytmu na klawiaturze. Używają skrótów klawiaturowych, aby przełączać się między oknami na pulpicie, pracować nad różnymi plikami i korzystać z narzędzi. Większość zadań można wykonać za pomocą myszy, ale jedną z zalet wiersza poleceń jest to, że wiele można zrobić za pomocą narzędzi wiersza poleceń bez konieczności przełączania się między myszą a klawiaturą. Kolejną zaletą wiersza poleceń jest to, że można go skonfigurować, zapisać konfigurację, zmienić ją później i zaimportować na inne maszyny programistyczne. Ponieważ środowiska programistyczne są tak unikalne dla każdego programisty, niektórzy unikają używania wiersza poleceń, inni polegają na nim całkowicie, a jeszcze inni preferują mieszankę obu podejść.

### Popularne opcje wiersza poleceń

Opcje wiersza poleceń różnią się w zależności od używanego systemu operacyjnego.

*💻 = jest preinstalowane w systemie operacyjnym.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (znane również jako CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Popularne narzędzia wiersza poleceń

- [Git](https://git-scm.com/) (💻 na większości systemów operacyjnych)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentacja

Kiedy programista chce nauczyć się czegoś nowego, najprawdopodobniej sięgnie po dokumentację, aby dowiedzieć się, jak tego używać. Programiści często polegają na dokumentacji, aby dowiedzieć się, jak poprawnie korzystać z narzędzi i języków, a także zdobyć głębszą wiedzę na temat ich działania.

#### Popularna dokumentacja dotycząca programowania webowego

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), od Mozilli, wydawcy przeglądarki [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), od Google, wydawcy przeglądarki [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), dla [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Zrób badania: Teraz, gdy znasz podstawy środowiska programisty webowego, porównaj je z środowiskiem projektanta webowego.

---

## 🚀 Wyzwanie

Porównaj kilka języków programowania. Jakie są unikalne cechy JavaScript w porównaniu do Javy? A jak wygląda porównanie COBOL z Go?

## Quiz po wykładzie
[Quiz po wykładzie](https://ff-quizzes.netlify.app/web/quiz/2)

## Przegląd i samodzielna nauka

Przeanalizuj różne języki dostępne dla programisty. Spróbuj napisać linię kodu w jednym języku, a następnie przepisz ją w dwóch innych. Czego się nauczyłeś?

## Zadanie

[Reading the Docs](assignment.md)

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.