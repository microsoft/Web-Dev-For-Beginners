<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-29T01:04:17+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "nl"
}
-->
# Introductie tot Programmeertalen en Tools van het Vak

Deze les behandelt de basisprincipes van programmeertalen. De onderwerpen die hier aan bod komen, zijn van toepassing op de meeste moderne programmeertalen van vandaag. In de sectie 'Tools van het Vak' leer je over nuttige software die je als ontwikkelaar kan helpen.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voor de Les
[Quiz voor de les](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introductie

In deze les behandelen we:

- Wat is programmeren?
- Soorten programmeertalen
- Basiscomponenten van een programma
- Nuttige software en tools voor de professionele ontwikkelaar

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Wat is Programmeren?

Programmeren (ook wel coderen genoemd) is het proces van het schrijven van instructies voor een apparaat zoals een computer of mobiel apparaat. We schrijven deze instructies met een programmeertaal, die vervolgens door het apparaat wordt geïnterpreteerd. Deze sets van instructies kunnen verschillende namen hebben, zoals *programma*, *computerprogramma*, *applicatie (app)* en *uitvoerbaar bestand*.

Een *programma* kan alles zijn wat met code is geschreven; websites, games en telefoonapps zijn allemaal programma's. Hoewel het mogelijk is om een programma te maken zonder code te schrijven, wordt de onderliggende logica geïnterpreteerd door het apparaat, en die logica is hoogstwaarschijnlijk met code geschreven. Een programma dat *draait* of *uitgevoerd* wordt, voert instructies uit. Het apparaat waarmee je deze les leest, draait een programma om het op je scherm weer te geven.

✅ Doe wat onderzoek: wie wordt beschouwd als de eerste computerprogrammeur ter wereld?

## Programmeertalen

Programmeertalen stellen ontwikkelaars in staat om instructies voor een apparaat te schrijven. Apparaten begrijpen alleen binaire code (1-en en 0-en), en voor *de meeste* ontwikkelaars is dat geen efficiënte manier van communiceren. Programmeertalen zijn het middel voor communicatie tussen mensen en computers.

Programmeertalen hebben verschillende formaten en kunnen verschillende doelen dienen. Bijvoorbeeld, JavaScript wordt voornamelijk gebruikt voor webapplicaties, terwijl Bash voornamelijk wordt gebruikt voor besturingssystemen.

*Lage niveau talen* vereisen doorgaans minder stappen dan *hoge niveau talen* voor een apparaat om instructies te interpreteren. Wat hoge niveau talen echter populair maakt, is hun leesbaarheid en ondersteuning. JavaScript wordt beschouwd als een hoge niveau taal.

De volgende code illustreert het verschil tussen een hoge niveau taal met JavaScript en een lage niveau taal met ARM-assemblycode.

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

Geloof het of niet, *ze doen allebei hetzelfde*: het afdrukken van een Fibonacci-reeks tot 10.

✅ Een Fibonacci-reeks wordt [gedefinieerd](https://en.wikipedia.org/wiki/Fibonacci_number) als een reeks getallen waarbij elk getal de som is van de twee voorgaande, beginnend bij 0 en 1. De eerste 10 getallen in de Fibonacci-reeks zijn 0, 1, 1, 2, 3, 5, 8, 13, 21 en 34.

## Componenten van een Programma

Een enkele instructie in een programma wordt een *statement* genoemd en heeft meestal een teken of regelafstand die aangeeft waar de instructie eindigt, of *beëindigt*. Hoe een programma beëindigt, verschilt per taal.

Statements in een programma kunnen afhankelijk zijn van gegevens die door een gebruiker of elders worden geleverd om instructies uit te voeren. Gegevens kunnen het gedrag van een programma veranderen, dus programmeertalen hebben een manier om gegevens tijdelijk op te slaan zodat ze later kunnen worden gebruikt. Dit worden *variabelen* genoemd. Variabelen zijn statements die een apparaat instrueren om gegevens in zijn geheugen op te slaan. Variabelen in programma's lijken op variabelen in algebra, waar ze een unieke naam hebben en hun waarde in de loop van de tijd kan veranderen.

Het kan voorkomen dat sommige statements niet door een apparaat worden uitgevoerd. Dit is meestal met opzet door de ontwikkelaar geschreven of per ongeluk wanneer er een onverwachte fout optreedt. Dit soort controle over een applicatie maakt het robuuster en beter onderhoudbaar. Meestal vinden deze wijzigingen in controle plaats wanneer aan bepaalde voorwaarden wordt voldaan. Een veelgebruikt statement in moderne programmering om te bepalen hoe een programma wordt uitgevoerd, is het `if..else` statement.

✅ Je leert meer over dit soort statements in latere lessen.

## Tools van het Vak

[![Tools van het Vak](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools van het Vak")

> 🎥 Klik op de afbeelding hierboven voor een video over tools

In deze sectie leer je over enkele software die je erg nuttig kunt vinden als je aan je professionele ontwikkelreis begint.

Een **ontwikkelomgeving** is een unieke set tools en functies die een ontwikkelaar vaak gebruikt bij het schrijven van software. Sommige van deze tools zijn aangepast aan de specifieke behoeften van een ontwikkelaar en kunnen in de loop van de tijd veranderen als die ontwikkelaar andere prioriteiten krijgt in werk, persoonlijke projecten of bij het gebruik van een andere programmeertaal. Ontwikkelomgevingen zijn net zo uniek als de ontwikkelaars die ze gebruiken.

### Editors

Een van de belangrijkste tools voor softwareontwikkeling is de editor. Editors zijn waar je je code schrijft en soms ook uitvoert.

Ontwikkelaars vertrouwen op editors om een paar extra redenen:

- *Debuggen* helpt bugs en fouten op te sporen door de code regel voor regel door te lopen. Sommige editors hebben debuggingmogelijkheden; ze kunnen worden aangepast en toegevoegd voor specifieke programmeertalen.
- *Syntax highlighting* voegt kleuren en tekstopmaak toe aan code, waardoor het gemakkelijker te lezen is. De meeste editors staan aangepaste syntax highlighting toe.
- *Extensies en integraties* zijn gespecialiseerde tools voor ontwikkelaars, door ontwikkelaars. Deze tools zijn niet ingebouwd in de basiseditor. Bijvoorbeeld, veel ontwikkelaars documenteren hun code om uit te leggen hoe het werkt. Ze kunnen een spellingscontrole-extensie installeren om typefouten in de documentatie te vinden. De meeste extensies zijn bedoeld voor gebruik binnen een specifieke editor, en de meeste editors hebben een manier om beschikbare extensies te zoeken.
- *Aanpassing* stelt ontwikkelaars in staat om een unieke ontwikkelomgeving te creëren die aan hun behoeften voldoet. De meeste editors zijn extreem aanpasbaar en kunnen ontwikkelaars ook toestaan om aangepaste extensies te maken.

#### Populaire Editors en Webontwikkeling Extensies

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

### Browsers

Een andere cruciale tool is de browser. Webontwikkelaars vertrouwen op de browser om te zien hoe hun code op het web draait. Het wordt ook gebruikt om de visuele elementen van een webpagina weer te geven die in de editor zijn geschreven, zoals HTML.

Veel browsers worden geleverd met *ontwikkelaarstools* (DevTools) die een set handige functies en informatie bevatten om ontwikkelaars te helpen belangrijke informatie over hun applicatie te verzamelen en vast te leggen. Bijvoorbeeld: Als een webpagina fouten heeft, is het soms handig om te weten wanneer ze zijn opgetreden. DevTools in een browser kunnen worden geconfigureerd om deze informatie vast te leggen.

#### Populaire Browsers en DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Tools

Sommige ontwikkelaars geven de voorkeur aan een minder grafische weergave voor hun dagelijkse taken en vertrouwen op de command line om dit te bereiken. Code schrijven vereist een aanzienlijke hoeveelheid typen, en sommige ontwikkelaars willen hun flow op het toetsenbord niet onderbreken. Ze gebruiken sneltoetsen om te wisselen tussen desktopvensters, aan verschillende bestanden te werken en tools te gebruiken. De meeste taken kunnen met een muis worden uitgevoerd, maar een voordeel van de command line is dat veel kan worden gedaan zonder te wisselen tussen muis en toetsenbord. Een ander voordeel van de command line is dat deze configureerbaar is en je een aangepaste configuratie kunt opslaan, later kunt wijzigen en kunt importeren naar andere ontwikkelmachines. Omdat ontwikkelomgevingen zo uniek zijn voor elke ontwikkelaar, zullen sommigen de command line vermijden, anderen vertrouwen er volledig op, en weer anderen geven de voorkeur aan een mix van beide.

### Populaire Command Line Opties

De opties voor de command line verschillen afhankelijk van het besturingssysteem dat je gebruikt.

*💻 = wordt vooraf geïnstalleerd op het besturingssysteem.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (ook bekend als CMD) 💻
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

#### Populaire Command Line Tools

- [Git](https://git-scm.com/) (💻 op de meeste besturingssystemen)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentatie

Wanneer een ontwikkelaar iets nieuws wil leren, zal hij of zij hoogstwaarschijnlijk naar documentatie grijpen om te leren hoe het te gebruiken. Ontwikkelaars vertrouwen vaak op documentatie om hen te begeleiden in het correct gebruik van tools en talen, en ook om diepere kennis te verkrijgen over hoe het werkt.

#### Populaire Documentatie over Webontwikkeling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), van Mozilla, de uitgevers van de [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), van Google, uitgevers van [Chrome](https://www.google.com/chrome/)
- [Microsoft's eigen ontwikkelaarsdocumentatie](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), voor [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Doe wat onderzoek: Nu je de basis kent van de omgeving van een webontwikkelaar, vergelijk en contrasteer deze met de omgeving van een webdesigner.

---

## 🚀 Uitdaging

Vergelijk enkele programmeertalen. Wat zijn enkele unieke eigenschappen van JavaScript versus Java? En hoe zit het met COBOL versus Go?

## Quiz na de Les
[Quiz na de les](https://ff-quizzes.netlify.app/web/)

## Herziening & Zelfstudie

Bestudeer de verschillende talen die beschikbaar zijn voor de programmeur. Probeer een regel in één taal te schrijven en herschrijf deze vervolgens in twee andere talen. Wat heb je geleerd?

## Opdracht

[De Documentatie Lezen](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.