# Introductie van Programmeertalen en Bijbehorend Vakgereedschap

Deze les beschrijft de basis over programmeertalen. De onderwerpen zijn van toepassing op de meeste hedendaagse programeertalen. In het 'Vakgereedschap' onderdeel leer je over nuttige toepassingen die je helpen als ontwikkelaar.

![Introductie Programmeren](webdev101-programming.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz

[Pre-lecture quiz](1-getting-started-lessons/1-intro-to-programming-languages/.github/pre-lecture-quiz.md)

## Introductie

In deze les hebben we het over:

- Wat is programmeren?
- Verschillende programmeertaal typen.
- Basis elementen van een programma.
- Nuttige toepassingen en gereedschap voor de professionele ontwikkelaar.

## Wat is programmeren?

Programmeren (ook wel coderen genoemd) is het process van het schrijven van instructies naar een apparaat, zoals een computer of een mobieltje. We schrijven deze instructies met een programmeertaal, welke wordt geinterpreteerd door het apparaat. Deze sets van instructies staan bekend onder verschillende namen zoals; *programma*, *computer programma*, *applicatie (app)*, en *executable*.

Een *programma* kan van alles zijn wat met code is geschreven; websites, spellen, en mobiele apps zijn programmas. Hoewel het mogelijk is om een programma te maken zonder code te schrijven, is de onderliggende logica, dat wordt geinterpreteerd door het apparaat, hoogstwaarschijnlijk wel geschreven met code. Een programma dat *draait* of *code uitvoert* voert instructies uit. Het apparaat wat je nu gebruikt om deze les te volgen draait een programma om deze tekst op het scherm te tonen.

✅ Doe wat onderzoek: wie wordt gezien als werelds eerste computer programmeur?

## Programmeertalen

Programmeertalen hebben maar één hoofddoel: het voor ontwikkelaars mogelijk maken om instructies te sturen naar een apparaat. Apparaten begrijpen slechts binaire instructies (1-en en 0-en), en voor de meeste ontwikkelaars is dit niet een erg efficiente manier om instructies te schrijven. Programmeertalen zijn daarom een mooi communicatiemiddel tussen mensen en computers.

Programmeertalen zijn er in verschillende uitvoeringen en hebben soms specifieke doeleinden. Javascript wordt bijvoorbeeld voornamelijk gebruikt voor webapplicaties terwijl Bash hoofdzakelijk wordt gebruikt voor operating systemen.

*Lagere programmertalen* hebben over het algemeen minder stappen nodig dan *hogere programmeertalen* om door een apparaat geinterpreteerd te worden. Hogere programmeertalen zijn echter populairder omdat ze veel leesbaarder zijn. Een voorbeeld van een hogere programmeertaal is Javascript.

Het volgende codevoorbeeld laat het verschil zien tussen een hogere (Javascript) en een lagere (ARM assembly) programeertaal.

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

Geloof het of niet maar beide codevoorbeelden *doen exact hetzelfde*: het printen van een Fibonacci reeks tot en met het tiende getal.

✅ Een Fibonacci reeks is [gedefinieerd](https://nl.wikipedia.org/wiki/Rij_van_Fibonacci) als een set van getallen waarvan elk getal de som is van de vorige twee getallen, beginnend met 0 en 1.

## Elementen van een programma

Een enkele instructie in een programma wordt ook wel *statement* genoemd en bevat vaak een karakter of witruimte om aan te geven waar de instructie begint en eindigt. Hoe een programma eindigt varieert per programmertaal.

De meeste programma's zijn afhankelijk van gegevens, die ofwel door een gebruiker wordt ingevoerd, ofwel ergens vandaan wordt gehaald. De statements zijn afhankelijk van deze data om instructies uit te voeren. Data is van invloed hoe een programma reageert. Daarom hebben programmeertalen een manier een tijdelijk data op te slaan om later weer gebruikt te worden. Deze data wordt ook wel *variabelen* genoemd. Variabeled zijn statements die een apparaat een instructie geven om de data op te slaan in het geheugen van het apparaat. Variabelen in programma's zijn gelijkwaardig aan hun tegenhanger in algebra. Ook daar hebben variabelen een unieke naam en kan de waarde veranderen in de loop der tijd.

Niet alle statements in een programma worden altijd uitgevoerd. Dit is meestal zo bedacht door de ontwikkelaar of het treed onbedoelt op bij onverwachte fouten. Het is een vorm van controle in een applicatie dat het robuuster en onderhoudbaarder maakt. De keuze in welke statements worden uitgevoerd hangt vaak af van de data en of dit aan bepaalde condities voldoet. Een veelvoorkomend statement in een moderne programmeertaal om te controle van een programma te beinvloeden is het `if..else` statement.

✅ Je leert meer over het `if..else` statement in de volgende lessen.

## Vakgereedschap

[![Vakgereedschap](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Vakgereedschap")

In dit onderdeel leer je welke applicaties je wellicht handig vindt om mee te werken als je je professionele ontwikkel carriere start.

Een **ontwikkelomgeving** is een unieke set van applicaties wat een ontwikkelaar regelmatig gebruikt om software te schrijven. Sommige van deze applicaties zijn aangepast voor de specifieke eisen die de ontwikkelaar heeft en kunnen veranderen over de tijd. Dit kan te maken hebben met het type werk wat de ontwikkelaar uitvoert, bijvoorbeeld persoonlijke projecten versus projecten voor werk, of als ze een andere programmeertaal moeten gebruiken. Ontwikkelomgevingen zijn zo uniek als de ontwikkelaars die ze gebruikten.

### Editors

One of the most crucial tools for software development is the editor. Editors are where you write your code and sometimes where you will run your code.

Developers rely on editors for a few additional reasons:

- *Debugging* Discovering bugs and errors by stepping through code, line by line. Some editors have debugging capabilities, or can be customized and added for specific programming languages.  
- *Syntax highlighting* Adds colors and text formatting to code, makes it easier to read. Most editors allow customized syntax highlighting.
- *Extensions and Integrations* Additions that are specialized for developers, by developers, for access to additional tools that aren't built into the base editor. For example, many developers also need a way to document their code and explain how it works and will install a spell check extension to check for typos. Most of these additions are intended for use within a specific editor, and most editors come with a way to search for available extensions.
- *Customization* Most editors are extremely customizable, and each developer will have their own unique development environment that suits their needs. Many also allow developers to create their own extension.

#### Popular Editors and Web Development Extensions

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Browsers

Another crucial tool is the browser. Web developers rely on the browser to observe how their code runs on the web, it's also used to view visual elements of a web page that are written in the editor, like HTML.

Many browsers come with *developer tools* (DevTools) that contain a set of helpful features and information to assist developers to collect and capture important insights about their application. For example: If a web page has errors, it's sometimes helpful to know when they occurred. DevTools in a browser can be configured to capture this information.

#### Popular Browsers and DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Tools

Some developers prefer a less graphical view for their daily tasks and rely on the command line to achieve this. Developing code requires a significant amount of typing, and some developers prefer to not disrupt their flow on the keyboard and will use keyboard shortcuts to swap between desktop windows, work on different files, and use tools. Most tasks can be completed with a mouse, but one benefit of using the command line is that a lot can be done with command line tools without the need of swapping between the mouse and keyboard. Another benefit of the command line is that they're configurable and you can save your custom configuration, change it later, and also import it to new development machines. Because development environments are so unique to each developer, some will avoid using the command line, some will rely on it entirely, and some prefer a mix of the two.

### Popular Command Line Options

Options for the command line will differ based on the operating system you use.

*💻 = comes preinstalled on the operating system.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/applications/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7)

#### Popular Command Line Tools

- [Git](https://git-scm.com/) (💻 on most operating sytems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

When a developer wants to learn something new, they'll most likely turn to documentation to learn how to use it. Developers rely on documentation often to guide them through how to use tools and languages properly, and also to gain deeper knowledge of how it works.

#### Popular Documentation on Web Development

- [Mozilla Developer Network](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)

✅ Do some research: Now that you know the basics of a web developer's environment, compare and contrast it with a web designer's environment.

---

## 🚀 Challenge

Compare some programming languages. What are some of the unique traits of JavaScript vs. Java? How about COBOL vs. Go?

## Post-Lecture Quiz
[Post-lecture quiz](1-getting-started-lessons/1-intro-to-programming-languages/.github/post-lecture-quiz.md)

## Review & Self Study

Study a bit on the different languages available to the programmer. Try to write a line in one language, and then redo it in two others. What do you learn? 

## Assignment 

[Reading the Docs](1-getting-started-lessons/1-intro-to-programming-languages/assignment.md)
