# Introductie van Programmeertalen en Bijbehorend Vakgereedschap

Deze les beschrijft de basis over programmeertalen. De onderwerpen zijn van toepassing op de meeste hedendaagse programeertalen. In het 'Vakgereedschap' onderdeel leert u over nuttige toepassingen die u helpen als web ontwikkelaar.

![Introductie Programmeren](/sketchnotes/webdev101-programming.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Introductie

In deze les hebben we het over:

- Wat is programmeren?
- Verschillende typen programmeertalen.
- Basis elementen van een programma.
- Nuttige toepassingen en gereedschap voor de professionele web ontwikkelaar.

## Wat is programmeren?

Programmeren (ook wel coderen genoemd) is het process van het schrijven van instructies voor een apparaat, zoals een computer of een mobieltje. We schrijven deze instructies met een programmeertaal, welke wordt geinterpreteerd door het apparaat. Deze sets van instructies staan bekend onder verschillende namen zoals; *programma*, *computer programma*, *applicatie (app)*, *script* en *executable*.

Een *programma* kan van alles zijn wat met code is geschreven; websites, spellen, en mobiele apps zijn programmas. Hoewel het mogelijk is om een programma te maken zonder code te schrijven, is de onderliggende logica, dat wordt geinterpreteerd door het apparaat, hoogstwaarschijnlijk wel geschreven met code. Een programma dat *draait* of *code uitvoert* voert instructies uit. Het apparaat wat u nu gebruikt om deze les te volgen draait een programma om deze tekst op het scherm te tonen.

✅ Doe wat onderzoek: wie wordt gezien als werelds eerste computer programmeur?

## Programmeertalen

Programmeertalen hebben maar één hoofddoel: het voor ontwikkelaars mogelijk maken om instructies te sturen naar een apparaat. Apparaten begrijpen slechts binaire instructies (1-en en 0-en), en voor de meeste ontwikkelaars is dit niet een erg efficiënte manier om instructies te schrijven. Programmeertalen zijn daarom een mooi communicatiemiddel tussen mensen en computers.

Programmeertalen zijn er in verschillende uitvoeringen en hebben soms specifieke doeleinden. JavaScript wordt bijvoorbeeld voornamelijk gebruikt voor webapplicaties terwijl Bash hoofdzakelijk wordt gebruikt voor besturingssystemen.

*Lagere programmertalen* hebben over het algemeen minder stappen nodig dan *hogere programmeertalen* om door een apparaat geinterpreteerd te worden. Hogere programmeertalen zijn echter populairder omdat ze veel leesbaarder zijn. Een voorbeeld van een hogere programmeertaal is JavaScript.

Het volgende codevoorbeeld laat het verschil zien tussen een hogere (JavaScript) en een lagere (ARM assembly) programeertaal.

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

Geloof het of niet, maar beide codevoorbeelden *doen exact hetzelfde*: het printen van een Fibonacci reeks tot en met het tiende getal.

✅ Een Fibonacci reeks is [gedefinieerd](https://nl.wikipedia.org/wiki/Rij_van_Fibonacci) als een set van getallen waarvan elk getal de som is van de vorige twee getallen, beginnend met 0 en 1.

## Elementen van een programma

Een enkele instructie in een programma wordt ook wel *statement* genoemd en bevat vaak een karakter of witruimte om aan te geven waar de instructie begint en eindigt. Hoe een programma eindigt varieert per programmertaal.

De meeste programma's zijn afhankelijk van gegevens, die ofwel door een gebruiker wordt ingevoerd, ofwel ergens vandaan wordt gehaald. De statements zijn afhankelijk van deze data om instructies uit te voeren. Data is van invloed hoe een programma reageert. Daarom hebben programmeertalen een manier om tijdelijk data op te slaan wat later weer gebruikt wordt. Deze data wordt ook wel *variabelen* genoemd. Variabelen zijn statements die een apparaat een instructie geven om de data op te slaan in het geheugen van het apparaat. Variabelen in programma's zijn gelijkwaardig aan hun tegenhanger in algebra. Ook daar hebben variabelen een unieke naam en kan de waarde veranderen in de loop der tijd.

Niet alle statements in een programma worden altijd uitgevoerd. Dit is meestal zo bedacht door de ontwikkelaar of het treed onbedoeld op bij onverwachte fouten. Het is een vorm van controle in een applicatie, dat het robuuster en onderhoudbaarder maakt. De keuze in welke statements worden uitgevoerd hangt vaak af van de data en of dit voldoet aan bepaalde condities. Een veelvoorkomend statement in een moderne programmeertaal om de controle van een programma te beïnvloeden is het `if..else` statement.

✅ U leert meer over het `if..else` statement in de volgende lessen.

## Vakgereedschap

[![Vakgereedschap](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Vakgereedschap")

In dit onderdeel leert u welke applicaties u wellicht handig vindt om mee te werken als u uw professionele web ontwikkelaar carrière start.

Een **ontwikkelomgeving** is een unieke set van applicaties wat een ontwikkelaar regelmatig gebruikt om software te schrijven. Sommige van deze applicaties zijn aangepast voor de specifieke eisen die de ontwikkelaar heeft en kunnen veranderen over de tijd. Dit kan te maken hebben met het type werk wat de ontwikkelaar uitvoert, bijvoorbeeld persoonlijke projecten versus projecten voor werk, of als er een andere programmeertaal moet worden gebruikt. Ontwikkelomgevingen zijn zo uniek als de ontwikkelaars die ze gebruiken.

### Editors

Een van de meest cruciale applicaties voor software ontwikkeling is de code editor. In een editor schrijft u uw code en soms runt u daar ook uw code.

Ontwikkelaars gebruiken editors ook om de volgende redenen:

- *Debugging* Het regel voor regel runnen van uw code om bugs te ontdekken. Sommige editors hebben debugging mogelijkheden, of kunnen aangepast worden voor specifieke programmeertalen.
- *Syntax markering* Voegt kleuren en tekst opmaak toe aan code om het leesbaarder te maken. De meeste editors hebben de mogelijkheid om dit aan te passen naar uw eigen smaak.  
- *Extensies en Integraties* Uitbreidingen van de editor, speciaal voor ontwikkelaars en gemaakt door ontwikkelaars, om extra functionaliteiten toe te voegen die standaard niet in de editor inzitten. Bijvoorbeeld een spellingscontrole extensie wat documentatie kan controleren op spelfouten. Vaak zijn extensies ontwikkeld voor een specifieke code editor. De meeste editors bieden een zoekfunctie om relevante extensies te vinden.
- *Persoonlijke instellingen* De meeste editors hebben instellingen die volledig aan te passen zijn naar de wens van de ontwikkelaar. Elke ontwikkelaar zal daarom een unieke ontwikkelomgeving hebben wat voldoet aan hun specifieke wensen.

#### Populaire Editors en Web Ontwikkeling Extensies

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Browsers

Nog een zeer belangrijke applicatie is de webbrowser. Web ontwikkelaars zijn afhankelijk van de browser om na te gaan hoe hun code draait op het web. De browser wordt ook gebruikt om de visuele elementen van een web pagina weer te geven die geschreven zijn in de editor, zoals HTML.  

Veel browsers hebben ingebouwd *ontwikkel gereedschap* (DevTools) waarmee ontwikkelaars makkelijk inzicht kunnen krijgen over hun applicatie. Bijvoorbeeld: als een webpagina fouten heeft, is het handig om te weten wanneer die fouten zijn opgetreden. In zo'n situatie kan DevTools kan geconfigureerd worden om deze informatie te verzamelen.

#### Populaire Browsers en DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Applicaties

Sommige ontwikkelaars hebben de voorkeur om minder grafische applicaties te gebruiken voor hun dagelijks werk. Zij gebruiken *command line applicaties* om hun werk te doen. Voor het schrijven van code is veel typewerk nodig, en aangezien sommige ontwikkelaars niet teveel afgeleid willen worden in hun keyboardgebruik maken zij daarom gebruik van keyboard shortcuts om bijvoorbeeld met verschillende bestanden te werken en tussen applicaties te wisselen. De meeste taken kunnen met een muis worden uitgevoerd, maar één van de voordelen van de command line is dat u heel veel kunt doen zonder te wisselen van keyboard en muis. Een bijkomend voordeel is dat command line applicaties aanpasbaar zijn en u deze naar wens kunt instellen. De instellingen kunnen opgeslagen worden op een andere computer weer herbruikt worden. Omdat elke ontwikkelaar een andere voorkeur heeft qua ontwikkelomgeving, gebruiken sommigen de command line nooit, sommigen doen juist alles ermee, en anderen gebruiken zowel de command line als grafische applicaties.

### Populaire Command Lines

Beschikbaarheid van command lines verschilt op basis van het besturingssysteem wat u gebruikt.

*💻 = is geïnstalleerd met het besturingssysteem.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (ook bekend als CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Populaire Command Line Applicaties

- [Git](https://git-scm.com/) (💻 op de meeste besturingssystemen)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentatie

Wanneer een ontwikkelaar iets nieuws wil leren dan zullen ze waarschijnlijk de bijbehorende documentatie (Docs) raadplegen. Ontwikkelaars zijn erg afhankelijk van goede documentatie, wat hun verder helpt om nieuwe programmeertalen of applicaties te gebruiken waardoor ze een beter inzicht krijgen hoe dit toe te passen in hun dagelijks werk.

#### Populaire Documentatie over Web Ontwikkeling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), van Mozilla, uitgevers van [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), van Google, uitgevers van [Chrome](https://www.google.com/chrome/)
- [eigen ontwikkelaarsdocumenten van Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), voor [Microsoft Edge](https://www.microsoft.com/edge)

✅ Doe wat onderzoek: Nu u de basis weet van de omgeving van een web ontwikkelaar, probeer eens uit te zoeken in hoeverre dit verschilt van een omgeving voor een web designer.

---

## 🚀 Uitdaging

Vergelijk wat programmeertalen. Wat zijn unieke kenmerken van JavaScript vs. Java. En het verschil tussen COBOL en Go?

## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Review & Zelfstudie

Bestudeer wat voor verschillende programmeertalen er zijn. Zoek in 3 talen een 'Hello World' voorbeeld op. Zo krijgt u een goed idee wat er voor nodig is om tekst in de browser te tonen.

## Opdracht

[Lees de documentatie](../assignment.md)
