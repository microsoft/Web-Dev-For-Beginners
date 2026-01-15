<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fea3a0fceb8ad86fd640c09cf63a2aac",
  "translation_date": "2026-01-07T01:03:20+00:00",
  "source_file": "README.md",
  "language_code": "nl"
}
-->
# Webontwikkeling voor beginners - Een curriculum

Leer de basisprincipes van webontwikkeling met onze 12 weken durende uitgebreide cursus van Microsoft Cloud Advocates. Elke van de 24 lessen duikt in JavaScript, CSS en HTML door middel van praktische projecten zoals terrariums, browserextensies en ruimtespellen. Doe mee met quizzen, discussies en praktische opdrachten. Verbeter je vaardigheden en optimaliseer je kennisretentie met onze effectieve projectgerichte didactiek. Begin vandaag nog met coderen!

Doe mee met de Azure AI Foundry Discord-community

Volg deze stappen om aan de slag te gaan met deze bronnen:
1. **Fork de repository**: Klik [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **Clone de repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Word lid van de Azure AI Foundry Discord en ontmoet experts en medeontwikkelaars**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Ondersteuning in meerdere talen

#### Ondersteund via GitHub Action (Geautomatiseerd & altijd up-to-date)

> **Voorkeur om lokaal te klonen?**

> Deze repository bevat vertalingen in 50+ talen, wat de downloadgrootte aanzienlijk vergroot. Om te klonen zonder vertalingen, gebruik sparse checkout:
> ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
> Dit geeft je alles wat je nodig hebt om de cursus te voltooien met een veel snellere download.

**Als je extra vertalingsondersteuning wenst, zijn ondersteunde talen hier vermeld [hier](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _Ben je een student?_

Bezoek de [**Student Hub-pagina**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon) waar je beginnersmaterialen, studentenpakketten en zelfs mogelijkheden voor een gratis certificaatvoucher vindt. Dit is de pagina die je wilt bookmarken en van tijd tot tijd wilt bekijken, omdat we maandelijks de inhoud vernieuwen.

### 📣 Aankondiging - Nieuwe GitHub Copilot Agent modus uitdagingen om te voltooien!

Nieuwe uitdaging toegevoegd, zoek naar "GitHub Copilot Agent Challenge 🚀" in de meeste hoofdstukken. Dat is een nieuwe uitdaging die je kunt voltooien met GitHub Copilot en de Agent-modus. Als je deze modus nog niet hebt gebruikt, kan het niet alleen tekst genereren, maar ook bestanden maken en bewerken, commando's uitvoeren en meer.

### 📣 Aankondiging - _Nieuw project te bouwen met Generative AI_ 

Nieuw AI Assistant-project toegevoegd, bekijk het [project](./9-chat-project/README.md)

### 📣 Aankondiging - _Nieuw Curriculum_ over Generative AI voor JavaScript is net uitgebracht

Mis ons nieuwe Generative AI curriculum niet!

Bezoek [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) om te beginnen!

- Lessen die alles behandelen van basis tot RAG.
- Interactie met historische figuren via GenAI en onze begeleidende app.
- Leuk en boeiend verhaal, je reist door de tijd!

Elke les bevat een opdracht om te voltooien, een kennistoets en een uitdaging om je te begeleiden bij het leren van onderwerpen zoals:
- Prompting en prompt engineering
- Tekst- en beeldapp-generatie
- Zoekapps

Bezoek [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) om te beginnen!

## 🌱 Aan de slag

> **Docenten**, we hebben [een aantal suggesties opgenomen](for-teachers.md) over hoe je dit curriculum kunt gebruiken. We horen graag je feedback [in ons discussieforum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Leerlingen](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, begin bij elke les met een pre-lecture quiz en volg deze op met het lezen van het lesmateriaal, het voltooien van de verschillende activiteiten en controleer je begrip met de post-lecture quiz.

Verbeter je leerervaring door samen met je medestudenten aan de projecten te werken! Discussies worden aangemoedigd in ons [discussieforum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions) waar ons team van moderators beschikbaar zal zijn om je vragen te beantwoorden.

Om je opleiding verder te verrijken raden we aan de extra studiematerialen op [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) te verkennen.

### 📋 Je omgeving instellen

Dit curriculum heeft een kant-en-klare ontwikkelomgeving! Je kunt ervoor kiezen om het curriculum te draaien in een [Codespace](https://github.com/features/codespaces/) (_een browsergebaseerde omgeving zonder installatie_) of lokaal op je computer met een teksteditor zoals [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Creëer je repository
Om je werk makkelijk op te slaan, wordt aanbevolen om een eigen kopie van deze repository te maken. Dit kan door bovenaan de pagina op de knop **Use this template** te klikken. Hierdoor wordt een nieuwe repository gemaakt in jouw GitHub-account met een kopie van het curriculum.

Volg de volgende stappen:
1. **Fork de repository**: Klik op de knop "Fork" rechtsboven op deze pagina.
2. **Clone de repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Het curriculum draaien in een Codespace

Klik in jouw eigen repository op de knop **Code** en selecteer **Open with Codespaces**. Dit maakt een nieuwe Codespace aan waarin je kunt werken.

![Codespace](../../translated_images/nl/createcodespace.0238bbf4d7a8d955.png)

#### Het curriculum lokaal draaien op je computer

Om dit curriculum lokaal te draaien op je computer, heb je een teksteditor, een browser en een opdrachtregeltool nodig. Onze eerste les, [Introductie tot programmeertalen en tools van het vak](../../1-getting-started-lessons/1-intro-to-programming-languages), laat je verschillende opties zien van elk van deze tools zodat je degene kunt kiezen die het beste bij je past.

Wij raden aan [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) te gebruiken als editor, die ook een ingebouwde [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) bevat. Je kunt Visual Studio Code [hier downloaden](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

1. Clone je repository naar je computer. Dit doe je door op de knop **Code** te klikken en de URL te kopiëren:

    [CodeSpace](./images/createcodespace.png)
    Open vervolgens [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) binnen [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) en voer het volgende commando uit, waarbij je `<your-repository-url>` vervangt door de URL die je zojuist hebt gekopieerd:

    ```bash 
    git clone <your-repository-url>
    ```

2. Open de map in Visual Studio Code. Dit kun je doen door te klikken op **Bestand** > **Map openen** en de map te selecteren die je zojuist hebt gekloond.


>  Aanbevolen Visual Studio Code-extensies:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - om HTML-pagina's binnen Visual Studio Code te bekijken
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - om je te helpen sneller code te schrijven

## 📂 Elke les bevat:

- optionele sketchnote
- optionele aanvullende video
- warming-up quiz voor de les
- geschreven les
- voor projectgebaseerde lessen, stapsgewijze handleidingen over hoe je het project bouwt
- kennistests
- een uitdaging
- aanvullende leesstof
- opdracht
- [quiz na de les](https://ff-quizzes.netlify.app/web/)

> **Een opmerking over quizzen**: Alle quizzen bevinden zich in de Quiz-app map, in totaal 48 quizzen met elk drie vragen. Ze zijn beschikbaar [hier](https://ff-quizzes.netlify.app/web/). De quiz-app kan lokaal worden uitgevoerd of worden ingezet op Azure; volg de instructies in de `quiz-app` map.

## 🗃️ Lessen

|     |                       Projectnaam                        |                           Behandelde Concepten                            | Leerdoelen                                                                                                                        |                                                        Gekoppelde Les                                                        |         Auteur          |
| :-: | :------------------------------------------------------: | :------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Aan de slag                         |          Introductie in programmeren en tools van het vak          | Leer de basisprincipes achter de meeste programmeertalen en over software die professionele ontwikkelaars helpt bij hun werk | [Introductie tot programmeertalen en tools van het vak](./1-getting-started-lessons/1-intro-to-programming-languages/README.md) |         Jasmine         |
| 02  |                     Aan de slag                         |          Basisprincipes van GitHub, inclusief samenwerken in team          | Hoe je GitHub gebruikt in je project, hoe je samenwerkt met anderen aan een codebase                                           |                             [Introductie tot GitHub](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor          |
| 03  |                     Aan de slag                         |                            Toegankelijkheid                             | Leer de basisprincipes van webtoegankelijkheid                                                                                  |                      [Fundamentals toegankelijkheid](./1-getting-started-lessons/3-accessibility/README.md)                      |       Christopher       |
| 04  |                        JS Basis                         |                       JavaScript-datatypen                          | De basis van JavaScript-datatypen                                                                                                |                                      [Datatypes](./2-js-basics/1-data-types/README.md)                                       |         Jasmine         |
| 05  |                        JS Basis                         |                       Functies en methoden                          | Leer over functies en methoden om de logica van een applicatie te beheren                                                      |                             [Functies en methoden](./2-js-basics/2-functions-methods/README.md)                              | Jasmine en Christopher  |
| 06  |                        JS Basis                         |                      Beslissingen maken met JS                     | Leer hoe je condities maakt in je code met beslissingsmethoden                                                                |                                [Beslissingen maken](./2-js-basics/3-making-decisions/README.md)                               |         Jasmine         |
| 07  |                        JS Basis                         |                         Arrays en lussen                            | Werken met data met behulp van arrays en lussen in JavaScript                                                                   |                                  [Arrays en lussen](./2-js-basics/4-arrays-loops/README.md)                                   |         Jasmine         |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)       |                            HTML in de praktijk                          | Bouw de HTML voor een online terrarium, met focus op het bouwen van een layout                                                  |                                    [Introductie tot HTML](./3-terrarium/1-intro-to-html/README.md)                                   |           Jen           |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)       |                            CSS in de praktijk                           | Bouw de CSS om het online terrarium op te maken met focus op basisbeginselen van CSS, inclusief responsive maken van de pagina  |                                     [Introductie tot CSS](./3-terrarium/2-intro-to-css/README.md)                                   |           Jen           |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)            |               JavaScript-closures, DOM-manipulatie                    | Bouw de JavaScript om het terrarium te laten functioneren als een sleep/plaats-interface, met focus op closures en DOM-manipulatie |                   [JavaScript-closures, DOM-manipulatie](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                    |           Jen           |
| 11  |          [Typeren Spel](./4-typing-game/solution/README.md)          |                          Bouw een Typeren Spel                          | Leer hoe je toetsenbordgebeurtenissen gebruikt om de logica van je JavaScript-app te sturen                                      |                               [Event-Driven Programming](./4-typing-game/typing-game/README.md)                                |       Christopher       |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                         Werken met browsers                          | Leer hoe browsers werken, hun geschiedenis, en hoe je de eerste elementen van een browserextensie bouwt                         |                              [Over browsers](./5-browser-extension/1-about-browsers/README.md)                                |           Jen           |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | Formulieren maken, API aanroepen en variabelen opslaan in lokale opslag | Bouw de JavaScript-elementen van je browserextensie om een API aan te roepen met variabelen opgeslagen in lokale opslag          |                 [API's, formulieren en lokale opslag](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen           |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          Achtergrondprocessen in de browser, webprestaties          | Gebruik de achtergrondprocessen van de browser om het pictogram van de extensie te beheren; leer over webprestaties en optimalisaties |            [Achtergrondtaken en prestaties](./5-browser-extension/3-background-tasks-and-performance/README.md)               |           Jen           |
| 15  |           [Space Game](./6-space-game/solution/README.md)           |              Gevorderde Spelontwikkeling met JavaScript              | Leer over overerving met zowel Classes als Composition en het Pub/Sub-patroon, ter voorbereiding op het bouwen van een spel      |                     [Introductie tot gevorderde spelontwikkeling](./6-space-game/1-introduction/README.md)                      |          Chris          |
| 16  |           [Space Game](./6-space-game/solution/README.md)           |                         Tekenen op canvas                            | Leer over de Canvas API, gebruikt om elementen op een scherm te tekenen                                                         |                               [Tekenen op canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris          |
| 17  |           [Space Game](./6-space-game/solution/README.md)           |                    Elementen op het scherm verplaatsen               | Ontdek hoe elementen beweging krijgen met behulp van cartesische coördinaten en de Canvas API                                   |                            [Elementen verplaatsen](./6-space-game/3-moving-elements-around/README.md)                          |          Chris          |
| 18  |           [Space Game](./6-space-game/solution/README.md)           |                           Botsingsdetectie                           | Zorg dat elementen botsen en op elkaar reageren met behulp van toetsaanslagen en een cooldown-functie om de prestaties te garanderen |                             [Botsingsdetectie](./6-space-game/4-collision-detection/README.md)                                 |          Chris          |
| 19  |           [Space Game](./6-space-game/solution/README.md)           |                            Score bijhouden                            | Voer wiskundige berekeningen uit op basis van de status en prestaties van het spel                                               |                                   [Score bijhouden](./6-space-game/5-keeping-score/README.md)                                   |          Chris          |
| 20  |           [Space Game](./6-space-game/solution/README.md)           |                          Het spel beëindigen en herstarten          | Leer over het beëindigen en herstarten van het spel, inclusief het opruimen van resources en het resetten van variabelen        |                                [De eindvoorwaarde](./6-space-game/6-end-condition/README.md)                                  |          Chris          |
| 21  |         [Bankapp](./7-bank-project/solution/README.md)           |               HTML-sjablonen en routes in een webapp                 | Leer hoe je het framework van een multipage website opbouwt met routing en HTML-sjablonen                                         |                             [HTML-sjablonen en routes](./7-bank-project/1-template-route/README.md)                             |          Yohan          |
| 22  |         [Bankapp](./7-bank-project/solution/README.md)           |                   Bouw een inlog- en registratieformulier             | Leer over het bouwen van formulieren en het afhandelen van validatieroutines                                                     |                                            [Formulieren](./7-bank-project/2-forms/README.md)                                          |          Yohan          |
| 23  |         [Bankapp](./7-bank-project/solution/README.md)           |                 Methoden voor ophalen en gebruiken van data           | Hoe data in en uit je app stroomt, hoe je het ophaalt, opslaat en verwijdert                                                     |                                              [Data](./7-bank-project/3-data/README.md)                                              |          Yohan          |
| 24  |         [Bankapp](./7-bank-project/solution/README.md)           |                         Concepten van state management               | Leer hoe je app staat bijhoudt en hoe je deze programmatisch beheert                                                             |                                   [State management](./7-bank-project/4-state-management/README.md)                              |          Yohan          |
| 25 | [Browser/VScode Code](../../8-code-editor) | Werken met VScode | Leer hoe je een code-editor gebruikt| [Gebruik VScode Code-editor](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | Werken met AI | Leer hoe je je eigen AI-assistent bouwt | [AI Assistent project](./9-chat-project/README.md) | Chris |

## 🏫 Pedagogiek

Ons curriculum is ontworpen met twee belangrijke pedagogische principes in gedachten:
* projectgericht leren
* frequente quizzen

Het programma leert de basisprincipes van JavaScript, HTML en CSS, evenals de nieuwste tools en technieken die door hedendaagse webontwikkelaars worden gebruikt. Studenten krijgen de kans praktische ervaring op te doen door het bouwen van een typeringsspel, virtueel terrarium, milieuvriendelijke browserextensie, space-invader-stijl spel, en een bankapp voor bedrijven. Aan het einde van de serie hebben studenten een solide begrip van webontwikkeling opgedaan.

> 🎓 Je kunt de eerste paar lessen van dit curriculum volgen als een [Leerpad](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) op Microsoft Learn!

Door ervoor te zorgen dat de inhoud aansluit bij projecten, wordt het proces boeiender voor studenten en wordt het vasthouden van concepten vergroot. We hebben ook meerdere starterlessen in JavaScript basics geschreven om concepten te introduceren, gekoppeld aan een video uit de "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)" collectie videotutorials, waarvan enkele auteurs een bijdrage hebben geleverd aan dit curriculum.

Daarnaast stelt een quiz met lage inzet voor de les de intentie van de student om een onderwerp te leren, terwijl een tweede quiz na de les verdere retentie verzekert. Dit curriculum is ontworpen om flexibel en leuk te zijn en kan in zijn geheel of gedeeltelijk worden gevolgd. De projecten beginnen klein en worden steeds complexer tegen het einde van de 12-weekse cyclus.

Hoewel we er bewust voor hebben gekozen geen JavaScript-frameworks te introduceren om ons te concentreren op de basisvaardigheden die nodig zijn als webontwikkelaar voordat een framework wordt aangenomen, is een goede volgende stap na dit curriculum het leren over Node.js via een andere verzameling video's: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Bezoek onze [Gedragscode](CODE_OF_CONDUCT.md) en [Bijdragen](CONTRIBUTING.md) richtlijnen. We verwelkomen je constructieve feedback!


## 🧭 Offline toegang

Je kunt deze documentatie offline gebruiken met [Docsify](https://docsify.js.org/#/). Fork deze repo, installeer [Docsify](https://docsify.js.org/#/quickstart) op je lokale machine en typ dan in de hoofdmap van deze repo `docsify serve`. De website wordt geserveerd op poort 3000 op je localhost: `localhost:3000`.

## 📘 PDF

Een PDF met alle lessen is te vinden [hier](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Andere Cursussen
Ons team maakt ook andere cursussen! Bekijk:

<!-- CO-OP TRANSLATOR OTHER COURSES START -->
### LangChain
[![LangChain4j for Beginners](https://img.shields.io/badge/LangChain4j%20for%20Beginners-22C55E?style=for-the-badge&&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchain4j-for-beginners)
[![LangChain.js for Beginners](https://img.shields.io/badge/LangChain.js%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchainjs-for-beginners?WT.mc_id=m365-94501-dwahlin)

---

### Azure / Edge / MCP / Agents
[![AZD for Beginners](https://img.shields.io/badge/AZD%20for%20Beginners-0078D4?style=for-the-badge&labelColor=E5E7EB&color=0078D4)](https://github.com/microsoft/AZD-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Edge AI for Beginners](https://img.shields.io/badge/Edge%20AI%20for%20Beginners-00B8E4?style=for-the-badge&labelColor=E5E7EB&color=00B8E4)](https://github.com/microsoft/edgeai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![MCP for Beginners](https://img.shields.io/badge/MCP%20for%20Beginners-009688?style=for-the-badge&labelColor=E5E7EB&color=009688)](https://github.com/microsoft/mcp-for-beginners?WT.mc_id=academic-105485-koreyst)
[![AI Agents for Beginners](https://img.shields.io/badge/AI%20Agents%20for%20Beginners-00C49A?style=for-the-badge&labelColor=E5E7EB&color=00C49A)](https://github.com/microsoft/ai-agents-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Generatieve AI-serie
[![Generative AI for Beginners](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generative AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generative AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generative AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---
 
### Kernleren
[![ML for Beginners](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Data Science for Beginners](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI for Beginners](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Cybersecurity for Beginners](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Web Dev for Beginners](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT for Beginners](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![XR Development for Beginners](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Copilot-serie
[![Copilot for AI Paired Programming](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot for C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Copilot Adventure](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## Hulp krijgen

Als je vastloopt of vragen hebt over het bouwen van AI-apps. Doe mee met mede-leerlingen en ervaren ontwikkelaars in discussies over MCP. Het is een ondersteunende community waar vragen welkom zijn en kennis vrij wordt gedeeld.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

Als je productfeedback hebt of fouten tegenkomt tijdens het bouwen bezoek:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## Licentie

Deze repository is gelicenseerd onder de MIT-licentie. Zie het [LICENSE](../../LICENSE) bestand voor meer informatie.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel wij streven naar nauwkeurigheid, dient u er rekening mee te houden dat automatische vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet als de gezaghebbende bron worden beschouwd. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->