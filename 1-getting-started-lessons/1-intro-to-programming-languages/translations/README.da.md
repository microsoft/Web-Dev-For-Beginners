# Introduktion til programmeringssprog og værktøjer i branchen

Denne lektion dækker det grundlæggende i programmeringssprog. De emner, der omtales her, gælder for de fleste moderne programmeringssprog i dag. I afsnittet 'Tools of the Trade' lærer du om nyttig software, der hjælper dig som udvikler.

![Introduktion til Programmering](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før undervisning
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Introduktion

I denne lektion vil vi dække:

- Hvad er programmering?
- Typer af programmeringssprog
- Grundlæggende elementer i et program
- Nyttig software og værktøj til den professionelle udvikler

> Du kan tage denne lektion på [Microsoft Learn] (https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Hvad er programmering?

Programmering (også kendt som kodning) er processen med at skrive instruktioner til en enhed som f.eks. en computer eller en mobil enhed. Vi skriver disse instruktioner med et programmeringssprog, som derefter fortolkes af enheden. Disse sæt af instruktioner kan have forskellige navne, men *program*, *computerprogram*, *applikation (app)* og *eksekverbar (executable)* er nogle få populære navne.

Et *program* kan være alt, der er skrevet med kode; hjemmesider, spil og telefonapps er programmer. Selvom det er muligt at skabe et program uden at skrive kode, fortolkes den underliggende logik af enheden, og den logik blev sandsynligvis skrevet med kode. Et program, der *kører* eller *eksekverer* kode, udfører instruktioner. Den enhed, du læser denne lektion med, kører et program for at udskrive den til din skærm.

✅ Lav lidt research: Hvem anses for at have været verdens første computerprogrammør?

## Programmeringssprog

Programmeringssprog gør det muligt for udviklere at skrive instruktioner til en enhed. Enheder kan kun forstå binære tal (1'ere og 0'ere), og for *de fleste* udviklere er det ikke en særlig effektiv måde at kommunikere på. Programmeringssprog er midlet til kommunikation mellem mennesker og computere.

Programmeringssprog findes i forskellige formater og kan tjene forskellige formål. For eksempel bruges JavaScript primært til webapplikationer, mens Bash primært bruges til operativsystemer.

*Lavniveausprog* kræver typisk færre trin end *højniveausprog*, for at en enhed kan fortolke instruktioner. Men det, der gør højniveausprog populære, er deres læsbarhed og support. JavaScript betragtes som et højniveausprog.

Følgende kode illustrerer forskellen mellem et højniveausprog med JavaScript og et lavniveausprog med ARM-assemblerkode.

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

Tro det eller ej, *de gør begge det samme*: udskriver en Fibonacci-sekvens op til 10.

✅ En Fibonacci-sekvens er [defineret](https://en.wikipedia.org/wiki/Fibonacci_number) som et sæt tal, hvor hvert tal er summen af de to foregående, startende fra 0 og 1. De første 10 tal, der følger Fibonacci-sekvensen, er 0, 1, 1, 2, 3, 5, 8, 13, 21 og 34.

## Elementer i et program

En enkelt instruktion i et program kaldes et *statement* og vil normalt have et tegn eller en linjeafstand, der markerer, hvor instruktionen slutter, eller *terminates*. Hvordan et program afsluttes, varierer fra sprog til sprog.

Udsagn i et program kan være afhængige af data fra en bruger eller andre steder for at udføre instruktioner. Data kan ændre, hvordan et program opfører sig, så programmeringssprog har en måde at gemme data midlertidigt på, så de kan bruges senere. Disse kaldes *variabler*. Variabler er udsagn, der instruerer en enhed i at gemme data i dens hukommelse. Variabler i programmer svarer til variabler i algebra, hvor de har et unikt navn, og deres værdi kan ændre sig over tid.

Der er en chance for, at nogle udsagn ikke vil blive udført af en enhed. Det er som regel bevidst, når det er skrevet af udvikleren, eller ved et uheld, når der opstår en uventet fejl. Denne form for kontrol over en applikation gør den mere robust og vedligeholdelig. Typisk sker disse ændringer i kontrollen, når visse betingelser er opfyldt. En almindelig sætning, der bruges i moderne programmering til at kontrollere, hvordan et program kører, er `if..else`-sætningen.

✅ Du vil lære mere om denne type udsagn i de efterfølgende lektioner.

## Fagets værktøjer

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Klik på billedet ovenfor for at se en video om værktøjer

I dette afsnit vil du lære om noget software, som du måske vil finde meget nyttigt, når du starter din professionelle udviklingsrejse.

Et **udviklingsmiljø** er et unikt sæt af værktøjer og funktioner, som en udvikler ofte bruger, når han skriver software. Nogle af disse værktøjer er blevet tilpasset en udviklers specifikke behov og kan ændre sig over tid, hvis udvikleren ændrer prioriteter i arbejdet, personlige projekter, eller når de bruger et andet programmeringssprog. Udviklingsmiljøer er lige så unikke som de udviklere, der bruger dem.

### Editorer

Et af de mest afgørende værktøjer til softwareudvikling er editoren. Editorer er der, hvor du skriver din kode, og nogle gange der, hvor du kører din kode.

Udviklere er afhængige af editorer af et par andre grunde:

- *Debugging* hjælper med at afdække fejl og mangler ved at gennemgå koden linje for linje. Nogle editorer har debugging-funktioner; de kan tilpasses og tilføjes til specifikke programmeringssprog.
- *Syntaksfremhævning* tilføjer farver og tekstformatering til koden, hvilket gør den lettere at læse. De fleste editorer tillader tilpasset syntaksfremhævning.
- *Udvidelser og integrationer* er specialiserede værktøjer til udviklere, af udviklere. Disse værktøjer er ikke indbygget i basiseditoren. For eksempel dokumenterer mange udviklere deres kode for at forklare, hvordan den fungerer. De installerer måske en stavekontroludvidelse for at hjælpe med at finde stavefejl i dokumentationen. De fleste udvidelser er beregnet til brug i en bestemt editor, og de fleste editorer kommer med en måde at søge efter tilgængelige udvidelser.
- *Tilpasning* gør det muligt for udviklere at skabe et unikt udviklingsmiljø, der passer til deres behov. De fleste editorer kan tilpasses ekstremt meget og kan også give udviklere mulighed for at oprette tilpassede udvidelser.

#### Populære editorer og udvidelser til webudvikling

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [www.sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Browsere

Et andet vigtigt værktøj er browseren. Webudviklere er afhængige af browseren for at se, hvordan deres kode kører på nettet. Den bruges også til at vise de visuelle elementer på en webside, der er skrevet i editoren, som HTML.

Mange browsere leveres med *udviklerværktøjer* (DevTools), der indeholder et sæt nyttige funktioner og oplysninger, der hjælper udviklere med at indsamle og registrere vigtige oplysninger om deres applikation. For eksempel: Hvis en webside har fejl, er det nogle gange nyttigt at vide, hvornår de opstod. DevTools i en browser kan konfigureres til at indfange disse oplysninger.

#### Populære browsere og DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Kommandolinjeværktøjer (Command Line Tools)

Nogle udviklere foretrækker en mindre grafisk visning til deres daglige opgaver og er afhængige af kommandolinjen for at opnå dette. At skrive kode kræver en betydelig mængde indtastning, og nogle udviklere foretrækker ikke at forstyrre deres flow på tastaturet. De vil bruge tastaturgenveje til at skifte mellem skrivebordsvinduer, arbejde på forskellige filer og bruge værktøjer. De fleste opgaver kan udføres med musen, men en fordel ved at bruge kommandolinjen er, at meget kan gøres med kommandolinjeværktøjer, uden at man behøver at skifte mellem mus og tastatur. En anden fordel ved kommandolinjen er, at de kan konfigureres, og du kan gemme en brugerdefineret konfiguration, ændre den senere og importere den til andre udviklingsmaskiner. Fordi udviklingsmiljøer er så unikke for hver enkelt udvikler, vil nogle undgå at bruge kommandolinjen, andre vil være helt afhængige af den, og nogle foretrækker en blanding af de to.

### Populære indstillinger for kommandolinjen

Indstillingerne for kommandolinjen vil variere afhængigt af det operativsystem, du bruger.

*💻 = er forudinstalleret på operativsystemet.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
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

#### Populære kommandolinjeværktøjer

- [Git](https://git-scm.com/) (💻 på de fleste operativsystemer)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentation

Når en udvikler vil lære noget nyt, vil han eller hun højst sandsynligt se på dokumentationen for at lære, hvordan man bruger det. Udviklere er ofte afhængige af dokumentation til at guide dem gennem, hvordan man bruger værktøjer og sprog korrekt, og også til at få dybere viden om, hvordan det fungerer.

#### Populær dokumentation om webudvikling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), fra Mozilla, udgiverne af browseren [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), fra Google, udgiverne af [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Lav noget research: Nu, hvor du kender det grundlæggende i en webudviklers miljø, kan du sammenligne og kontrastere det med en webdesigners miljø.

---

## 🚀 Udfordring

Sammenlign nogle programmeringssprog. Hvad er nogle af de unikke træk ved JavaScript vs. Java? Hvad med COBOL vs. Go?

## Quiz efter undervisning
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Gennemgang og selvstudium

Læs lidt om de forskellige sprog, der er til rådighed for programmøren. Prøv at skrive en linje i ét sprog, og skriv den så om i to andre. Hvad har du lært?

## Opgave

[Læsning af dokumentation](assignment.md)
