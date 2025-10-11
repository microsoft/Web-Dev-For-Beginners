<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T10:08:37+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "nl"
}
-->
# Introductie tot programmeertalen en hulpmiddelen van het vak

Deze les behandelt de basisprincipes van programmeertalen. De onderwerpen die hier worden behandeld, zijn van toepassing op de meeste moderne programmeertalen van vandaag. In de sectie 'Hulpmiddelen van het vak' leer je over nuttige software die je als ontwikkelaar helpt.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voorafgaand aan de les
[Quiz voorafgaand aan de les](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introductie

In deze les behandelen we:

- Wat is programmeren?
- Soorten programmeertalen
- Basiscomponenten van een programma
- Nuttige software en tools voor de professionele ontwikkelaar

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Wat is programmeren?

Programmeren (ook wel coderen genoemd) is het proces van het schrijven van instructies voor een apparaat zoals een computer of mobiele apparaat. We schrijven deze instructies met een programmeertaal, die vervolgens door het apparaat wordt geïnterpreteerd. Deze sets van instructies kunnen verschillende namen hebben, zoals *programma*, *computerprogramma*, *applicatie (app)* en *uitvoerbaar bestand*.

Een *programma* kan alles zijn wat met code is geschreven; websites, games en telefoonapps zijn allemaal programma's. Hoewel het mogelijk is om een programma te maken zonder code te schrijven, wordt de onderliggende logica geïnterpreteerd door het apparaat en die logica is hoogstwaarschijnlijk met code geschreven. Een programma dat *draait* of *uitgevoerd* wordt, voert instructies uit. Het apparaat waarmee je deze les leest, draait een programma om het op je scherm weer te geven.

✅ Doe wat onderzoek: wie wordt beschouwd als de eerste computerprogrammeur ter wereld?

## Programmeertalen

Programmeertalen stellen ontwikkelaars in staat om instructies voor een apparaat te schrijven. Apparaten begrijpen alleen binair (1-en en 0-en), en voor *de meeste* ontwikkelaars is dat geen efficiënte manier van communiceren. Programmeertalen zijn het middel om te communiceren tussen mensen en computers.

Programmeertalen komen in verschillende formaten en kunnen verschillende doelen dienen. Bijvoorbeeld, JavaScript wordt voornamelijk gebruikt voor webapplicaties, terwijl Bash voornamelijk wordt gebruikt voor besturingssystemen.

*Lage niveau talen* vereisen doorgaans minder stappen dan *hoge niveau talen* voor een apparaat om instructies te interpreteren. Wat hoge niveau talen populair maakt, is echter hun leesbaarheid en ondersteuning. JavaScript wordt beschouwd als een hoge niveau taal.

De volgende code illustreert het verschil tussen een hoge niveau taal met JavaScript en een lage niveau taal met ARM assembly code.

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

Geloof het of niet, *ze doen allebei hetzelfde*: een Fibonacci-reeks tot 10 afdrukken.

✅ Een Fibonacci-reeks wordt [gedefinieerd](https://en.wikipedia.org/wiki/Fibonacci_number) als een reeks getallen waarbij elk getal de som is van de twee voorgaande, beginnend bij 0 en 1. De eerste 10 getallen in de Fibonacci-reeks zijn 0, 1, 1, 2, 3, 5, 8, 13, 21 en 34.

## Elementen van een programma

Een enkele instructie in een programma wordt een *statement* genoemd en heeft meestal een teken of regelafstand die aangeeft waar de instructie eindigt, of *beëindigt*. Hoe een programma beëindigt, verschilt per taal.

Statements binnen een programma kunnen afhankelijk zijn van gegevens die door een gebruiker of elders worden verstrekt om instructies uit te voeren. Gegevens kunnen beïnvloeden hoe een programma zich gedraagt, dus programmeertalen hebben een manier om gegevens tijdelijk op te slaan zodat ze later kunnen worden gebruikt. Dit worden *variabelen* genoemd. Variabelen zijn statements die een apparaat instrueren om gegevens in zijn geheugen op te slaan. Variabelen in programma's zijn vergelijkbaar met variabelen in algebra, waarbij ze een unieke naam hebben en hun waarde in de loop van de tijd kan veranderen.

Het kan voorkomen dat sommige statements niet door een apparaat worden uitgevoerd. Dit gebeurt meestal opzettelijk wanneer geschreven door de ontwikkelaar, of per ongeluk wanneer er een onverwachte fout optreedt. Dit soort controle over een applicatie maakt het robuuster en beter onderhoudbaar. Meestal vinden deze veranderingen in controle plaats wanneer aan bepaalde voorwaarden wordt voldaan. Een veelgebruikt statement in moderne programmering om te bepalen hoe een programma wordt uitgevoerd, is de `if..else`-statement.

✅ Je leert meer over dit type statement in de volgende lessen.

## Hulpmiddelen van het vak

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Klik op de afbeelding hierboven voor een video over tools

In deze sectie leer je over enkele softwaretools die je erg nuttig kunt vinden als je begint aan je professionele ontwikkelingsreis.

Een **ontwikkelomgeving** is een unieke set van tools en functies die een ontwikkelaar vaak gebruikt bij het schrijven van software. Sommige van deze tools zijn aangepast aan de specifieke behoeften van een ontwikkelaar en kunnen in de loop van de tijd veranderen als die ontwikkelaar andere prioriteiten krijgt in werk, persoonlijke projecten of bij het gebruik van een andere programmeertaal. Ontwikkelomgevingen zijn zo uniek als de ontwikkelaars die ze gebruiken.

### Editors

Een van de belangrijkste tools voor softwareontwikkeling is de editor. Editors zijn waar je je code schrijft en soms ook uitvoert.

Ontwikkelaars vertrouwen om een paar extra redenen op editors:

- *Debugging* helpt bij het opsporen van bugs en fouten door de code regel voor regel door te nemen. Sommige editors hebben debuggingmogelijkheden; ze kunnen worden aangepast en toegevoegd voor specifieke programmeertalen.
- *Syntax highlighting* voegt kleuren en tekstopmaak toe aan code, waardoor het gemakkelijker te lezen is. De meeste editors staan aangepaste syntax highlighting toe.
- *Extensies en integraties* zijn gespecialiseerde tools voor ontwikkelaars, door ontwikkelaars. Deze tools zijn niet ingebouwd in de basiseditor. Bijvoorbeeld, veel ontwikkelaars documenteren hun code om uit te leggen hoe het werkt. Ze kunnen een spellingscontrole-extensie installeren om typfouten in de documentatie te vinden. De meeste extensies zijn bedoeld voor gebruik binnen een specifieke editor, en de meeste editors hebben een manier om beschikbare extensies te zoeken.
- *Aanpassing* stelt ontwikkelaars in staat om een unieke ontwikkelomgeving te creëren die aan hun behoeften voldoet. De meeste editors zijn extreem aanpasbaar en kunnen ontwikkelaars ook in staat stellen om aangepaste extensies te maken.

#### Populaire editors en webontwikkeling-extensies

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

Een andere cruciale tool is de browser. Webontwikkelaars vertrouwen op de browser om te zien hoe hun code op het web wordt uitgevoerd. Het wordt ook gebruikt om de visuele elementen van een webpagina weer te geven die in de editor zijn geschreven, zoals HTML.

Veel browsers worden geleverd met *ontwikkelaarstools* (DevTools) die een set handige functies en informatie bevatten om ontwikkelaars te helpen belangrijke informatie over hun applicatie te verzamelen en vast te leggen. Bijvoorbeeld: als een webpagina fouten bevat, is het soms handig om te weten wanneer ze zijn opgetreden. DevTools in een browser kunnen worden geconfigureerd om deze informatie vast te leggen.

#### Populaire browsers en DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Tools

Sommige ontwikkelaars geven de voorkeur aan een minder grafische weergave voor hun dagelijkse taken en vertrouwen op de commandoregel om dit te bereiken. Code schrijven vereist een aanzienlijke hoeveelheid typen en sommige ontwikkelaars geven er de voorkeur aan hun flow op het toetsenbord niet te onderbreken. Ze gebruiken sneltoetsen om te wisselen tussen desktopvensters, aan verschillende bestanden te werken en tools te gebruiken. De meeste taken kunnen met een muis worden uitgevoerd, maar een voordeel van het gebruik van de commandoregel is dat veel kan worden gedaan met commandoregeltools zonder dat je tussen muis en toetsenbord hoeft te wisselen. Een ander voordeel van de commandoregel is dat deze configureerbaar is en dat je een aangepaste configuratie kunt opslaan, later kunt wijzigen en kunt importeren naar andere ontwikkelmachines. Omdat ontwikkelomgevingen zo uniek zijn voor elke ontwikkelaar, zullen sommigen de commandoregel vermijden, anderen zullen er volledig op vertrouwen, en weer anderen geven de voorkeur aan een mix van beide.

### Populaire opties voor de commandoregel

Opties voor de commandoregel verschillen afhankelijk van het besturingssysteem dat je gebruikt.

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

#### Populaire commandoregeltools

- [Git](https://git-scm.com/) (💻 op de meeste besturingssystemen)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentatie

Wanneer een ontwikkelaar iets nieuws wil leren, zal hij hoogstwaarschijnlijk naar documentatie grijpen om te leren hoe hij het moet gebruiken. Ontwikkelaars vertrouwen vaak op documentatie om hen te begeleiden bij het correct gebruiken van tools en talen, en om diepere kennis te verkrijgen over hoe ze werken.

#### Populaire documentatie over webontwikkeling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), van Mozilla, de uitgevers van de [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), van Google, uitgevers van [Chrome](https://www.google.com/chrome/)
- [Microsoft's eigen ontwikkelaarsdocumentatie](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), voor [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Doe wat onderzoek: Nu je de basis van de omgeving van een webontwikkelaar kent, vergelijk en contrasteer deze met de omgeving van een webdesigner.

---

## 🚀 Uitdaging

Vergelijk enkele programmeertalen. Wat zijn enkele unieke eigenschappen van JavaScript versus Java? En hoe zit het met COBOL versus Go?

## Quiz na de les
[Quiz na de les](https://ff-quizzes.netlify.app/web/)

## Herhaling & Zelfstudie

Bestudeer de verschillende talen die beschikbaar zijn voor programmeurs. Probeer een regel in één taal te schrijven en herschrijf deze vervolgens in twee andere talen. Wat heb je geleerd?


## Opdracht

[Documentatie lezen](assignment.md)

> Opmerking: Kies bij het selecteren van tools voor je opdracht geen editors, browsers of commandoregeltools die hierboven al zijn vermeld.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.