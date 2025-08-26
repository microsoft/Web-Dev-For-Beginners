<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-26T22:24:39+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "no"
}
-->
# Introduksjon til programmeringsspråk og verktøyene i faget

Denne leksjonen dekker det grunnleggende om programmeringsspråk. Temaene som tas opp her gjelder for de fleste moderne programmeringsspråk i dag. I delen 'Verktøyene i faget' vil du lære om nyttig programvare som hjelper deg som utvikler.

![Intro Programmering](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før leksjonen
[Quiz før leksjonen](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introduksjon

I denne leksjonen skal vi dekke:

- Hva er programmering?
- Typer programmeringsspråk
- Grunnleggende elementer i et program
- Nyttig programvare og verktøy for den profesjonelle utvikleren

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Hva er programmering?

Programmering (også kjent som koding) er prosessen med å skrive instruksjoner for en enhet, som en datamaskin eller mobil enhet. Vi skriver disse instruksjonene med et programmeringsspråk, som deretter tolkes av enheten. Disse instruksjonene kan ha ulike navn, men *program*, *dataprogram*, *applikasjon (app)* og *kjørbar fil* er noen populære navn.

Et *program* kan være hva som helst som er skrevet med kode; nettsider, spill og mobilapper er programmer. Selv om det er mulig å lage et program uten å skrive kode, blir den underliggende logikken tolket av enheten, og den logikken er mest sannsynlig skrevet med kode. Et program som *kjører* eller *utfører* kode, utfører instruksjoner. Enheten du leser denne leksjonen med, kjører et program for å vise den på skjermen din.

✅ Gjør litt research: Hvem regnes som verdens første dataprogrammerer?

## Programmeringsspråk

Programmeringsspråk gjør det mulig for utviklere å skrive instruksjoner for en enhet. Enheter kan bare forstå binærkode (1 og 0), og for *de fleste* utviklere er det ikke en veldig effektiv måte å kommunisere på. Programmeringsspråk er verktøyet for kommunikasjon mellom mennesker og datamaskiner.

Programmeringsspråk kommer i ulike formater og kan tjene forskjellige formål. For eksempel brukes JavaScript primært til webapplikasjoner, mens Bash brukes hovedsakelig til operativsystemer.

*Lavnivåspråk* krever vanligvis færre steg enn *høynivåspråk* for at en enhet skal tolke instruksjoner. Det som gjør høynivåspråk populære, er imidlertid deres lesbarhet og støtte. JavaScript regnes som et høynivåspråk.

Følgende kode illustrerer forskjellen mellom et høynivåspråk med JavaScript og et lavnivåspråk med ARM assembly-kode.

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

Tro det eller ei, *de gjør begge det samme*: skriver ut en Fibonacci-sekvens opp til 10.

✅ En Fibonacci-sekvens er [definert](https://en.wikipedia.org/wiki/Fibonacci_number) som en rekke tall der hvert tall er summen av de to foregående, med start fra 0 og 1. De første 10 tallene i Fibonacci-sekvensen er 0, 1, 1, 2, 3, 5, 8, 13, 21 og 34.

## Elementer i et program

En enkelt instruksjon i et program kalles en *setning* og vil vanligvis ha et tegn eller linjeavstand som markerer hvor instruksjonen slutter, eller *terminerer*. Hvordan en setning terminerer varierer med hvert språk.

Setninger i et program kan være avhengige av data som er gitt av en bruker eller fra andre steder for å utføre instruksjoner. Data kan endre hvordan et program oppfører seg, så programmeringsspråk kommer med en måte å midlertidig lagre data slik at det kan brukes senere. Disse kalles *variabler*. Variabler er setninger som instruerer en enhet til å lagre data i minnet sitt. Variabler i programmer er lik variabler i algebra, der de har et unikt navn og verdien kan endres over tid.

Det er en sjanse for at noen setninger ikke blir utført av en enhet. Dette er vanligvis med vilje når det er skrevet av utvikleren, eller ved et uhell når en uventet feil oppstår. Denne typen kontroll over en applikasjon gjør den mer robust og vedlikeholdbar. Typisk skjer disse endringene i kontroll når visse betingelser er oppfylt. En vanlig setning som brukes i moderne programmering for å kontrollere hvordan et program kjører, er `if..else`-setningen.

✅ Du vil lære mer om denne typen setning i senere leksjoner.

## Verktøyene i faget

[![Verktøyene i faget](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Verktøyene i faget")

> 🎥 Klikk på bildet over for en video om verktøy

I denne delen vil du lære om noen programvarer som du kan finne svært nyttige når du starter din profesjonelle utviklingsreise.

Et **utviklingsmiljø** er et unikt sett med verktøy og funksjoner som en utvikler ofte bruker når de skriver programvare. Noen av disse verktøyene har blitt tilpasset for en utviklers spesifikke behov, og kan endres over tid hvis utvikleren endrer prioriteringer i arbeid, personlige prosjekter, eller når de bruker et annet programmeringsspråk. Utviklingsmiljøer er like unike som utviklerne som bruker dem.

### Editorer

Et av de mest avgjørende verktøyene for programvareutvikling er editoren. Editorer er der du skriver koden din og noen ganger der du kjører koden din.

Utviklere stoler på editorer av flere grunner:

- *Feilsøking* hjelper med å avdekke feil og problemer ved å gå gjennom koden linje for linje. Noen editorer har feilsøkingsfunksjoner; de kan tilpasses og legges til for spesifikke programmeringsspråk.
- *Syntaksmarkering* legger til farger og tekstformatering i koden, noe som gjør den lettere å lese. De fleste editorer tillater tilpasset syntaksmarkering.
- *Utvidelser og integrasjoner* er spesialiserte verktøy for utviklere, laget av utviklere. Disse verktøyene var ikke innebygd i editoren. For eksempel dokumenterer mange utviklere koden sin for å forklare hvordan den fungerer. De kan installere en stavekontrollutvidelse for å finne skrivefeil i dokumentasjonen. De fleste utvidelser er ment for bruk i en spesifikk editor, og de fleste editorer har en måte å søke etter tilgjengelige utvidelser.
- *Tilpasning* gjør det mulig for utviklere å lage et unikt utviklingsmiljø som passer deres behov. De fleste editorer er svært tilpassbare og kan også tillate utviklere å lage egne utvidelser.

#### Populære editorer og webutviklingsutvidelser

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

### Nettlesere

Et annet avgjørende verktøy er nettleseren. Webutviklere stoler på nettleseren for å se hvordan koden deres kjører på nettet. Den brukes også til å vise de visuelle elementene på en nettside som er skrevet i editoren, som HTML.

Mange nettlesere kommer med *utviklerverktøy* (DevTools) som inneholder et sett med nyttige funksjoner og informasjon for å hjelpe utviklere med å samle og fange viktig informasjon om applikasjonen deres. For eksempel: Hvis en nettside har feil, kan det noen ganger være nyttig å vite når de oppsto. DevTools i en nettleser kan konfigureres til å fange denne informasjonen.

#### Populære nettlesere og DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Kommandolinjeverktøy

Noen utviklere foretrekker en mindre grafisk visning for sine daglige oppgaver og stoler på kommandolinjen for å oppnå dette. Å skrive kode krever en betydelig mengde tasting, og noen utviklere foretrekker å ikke forstyrre flyten på tastaturet. De bruker hurtigtaster for å bytte mellom vinduer, jobbe med forskjellige filer og bruke verktøy. De fleste oppgaver kan utføres med en mus, men en fordel med å bruke kommandolinjen er at mye kan gjøres med kommandolinjeverktøy uten behov for å bytte mellom mus og tastatur. En annen fordel med kommandolinjen er at den kan konfigureres, og du kan lagre en tilpasset konfigurasjon, endre den senere og importere den til andre utviklingsmaskiner. Fordi utviklingsmiljøer er så unike for hver utvikler, vil noen unngå å bruke kommandolinjen, noen vil stole helt på den, og noen foretrekker en blanding av de to.

### Populære kommandolinjealternativer

Alternativer for kommandolinjen vil variere basert på operativsystemet du bruker.

*💻 = kommer forhåndsinstallert på operativsystemet.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Kommandolinje](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (også kjent som CMD) 💻
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

#### Populære kommandolinjeverktøy

- [Git](https://git-scm.com/) (💻 på de fleste operativsystemer)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentasjon

Når en utvikler ønsker å lære noe nytt, vil de mest sannsynlig vende seg til dokumentasjon for å lære hvordan de skal bruke det. Utviklere stoler ofte på dokumentasjon for å veilede dem gjennom hvordan de skal bruke verktøy og språk riktig, og også for å få dypere kunnskap om hvordan det fungerer.

#### Populær dokumentasjon om webutvikling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), fra Mozilla, utgiverne av [Firefox](https://www.mozilla.org/firefox/) nettleseren
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), fra Google, utgiverne av [Chrome](https://www.google.com/chrome/)
- [Microsofts egne utviklerdokumenter](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Gjør litt research: Nå som du kjenner det grunnleggende om en webutviklers miljø, sammenlign det med en webdesigners miljø.

---

## 🚀 Utfordring

Sammenlign noen programmeringsspråk. Hva er noen av de unike egenskapene til JavaScript vs. Java? Hva med COBOL vs. Go?

## Quiz etter leksjonen
[Quiz etter leksjonen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Gjennomgang og selvstudium

Studer litt om de forskjellige språkene som er tilgjengelige for programmereren. Prøv å skrive en linje i ett språk, og skriv det deretter om i to andre. Hva lærte du?

## Oppgave

[Les dokumentasjonen](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.