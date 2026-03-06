# Webový vývoj pre začiatočníkov - učebný plán

Naučte sa základy webového vývoja s naším komplexným 12-týždňovým kurzom od Microsoft Cloud Advocates. Každá z 24 lekcií sa zameriava na JavaScript, CSS a HTML prostredníctvom praktických projektov ako teráriá, rozšírenia pre prehliadače a vesmírne hry. Zapojte sa do kvízov, diskusií a praktických úloh. Zlepšite svoje zručnosti a optimalizujte si zapamätanie vedomostí pomocou našej efektívnej projektovo orientovanej pedagogiky. Začnite svoju cestu kódovania už dnes!

Pridajte sa do komunity Azure AI Foundry na Discorde

Nasledujte tieto kroky, aby ste mohli začať používať tieto zdroje:
1. **Vytvorte fork repozitára**: Kliknite na [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **Naklonujte repozitár**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Pridajte sa do Azure AI Foundry Discordu a stretnite expertov a ďalších vývojárov**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Podpora viacerých jazykov

#### Podporované cez GitHub Action (automatizované a vždy aktuálne)

> **Uprednostňujete lokálne klonovanie?**

> Tento repozitár obsahuje viac ako 50 jazykových prekladov, čo výrazne zvyšuje veľkosť sťahovania. Ak chcete klonovať bez prekladov, použite sparse checkout:
> ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
> Tým získate všetko, čo potrebujete na absolvovanie kurzu s oveľa rýchlejším sťahovaním.

**Ak chcete, aby boli podporované ďalšie jazyky prekladov, nájdete ich [tu](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _Ste študent?_

Navštívte [**študentskú stránku**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon), kde nájdete zdroje pre začiatočníkov, študentské balíčky a dokonca spôsoby, ako získať bezplatný certifikát. Toto je stránka, ktorú si chcete uložiť do záložiek a občas si ju pozrieť, pretože obsah sa mení každý mesiac.

### 📣 Oznámenie - nové výzvy režimu GitHub Copilot Agent na dokončenie!

Pridaná nová výzva, hľadajte "GitHub Copilot Agent Challenge 🚀" v najväčšine kapitol. To je nová výzva na dokončenie pomocou GitHub Copilot a režimu Agent. Ak ste režim Agent ešte nepoužili, dokáže nielen generovať text, ale aj vytvárať a upravovať súbory, spúšťať príkazy a ďalšie.

### 📣 Oznámenie - _nový projekt na vybudovanie pomocou generatívnej AI_

Práve bol pridaný nový projekt AI asistenta, pozrite si [projekt](./9-chat-project/README.md)

### 📣 Oznámenie - _nový učebný plán_ o generatívnej AI pre JavaScript práve vydaný

Nezmeškajte náš nový učebný plán o generatívnej AI!

Navštívte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course), aby ste mohli začať!

![Background](../../translated_images/sk/background.148a8d43afde5730.webp)

- Lekcie pokrývajú všetko od základov po RAG.
- Interagujte s historickými postavami pomocou GenAI a našej doplnkovej aplikácie.
- Zábavný a pútavý príbeh, budete cestovať časom!

![character](../../translated_images/sk/character.5c0dd8e067ffd693.webp)

Každá lekcia obsahuje úlohu na dokončenie, kontrolu vedomostí a výzvu, ktoré vás prevedú témami ako:
- Promptovanie a prompt engineering
- Generovanie textových a obrazových aplikácií
- Vyhľadávacie aplikácie

Navštívte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course), aby ste mohli začať!



## 🌱 Začíname

> **Učitelia**, pridali sme [niekoľko návrhov](for-teachers.md), ako používať tento učebný plán. Radi uvítame vaše pripomienky [v našom diskusnom fóre](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Študenti](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, pre každú lekciu začnite kvízom pred prednáškou, pokračujte čítaním prednáškového materiálu, dokončite rôzne aktivity a overte si svoje porozumenie pomocou kvízu po prednáške.

Pre zlepšenie vášho učenia sa spojte so svojimi rovesníkmi a pracujte spoločne na projektoch! Diskusie sú vítané v našom [diskusnom fóre](https://github.com/microsoft/Web-Dev-For-Beginners/discussions), kde vám bude k dispozícii náš tím moderátorov na zodpovedanie otázok.

Pre rozšírenie vašich vedomostí dôrazne odporúčame preskúmať [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) pre ďalšie študijné materiály.

### 📋 Nastavenie vášho prostredia

Tento učebný plán má pripravené vývojové prostredie! Keď začnete, môžete si vybrať spustenie kurzu v [Codespace](https://github.com/features/codespaces/) (_prostredie v prehliadači, ktoré nevyžaduje inštaláciu_), alebo lokálne na vašom počítači pomocou textového editora ako [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Vytvorte si svoj repozitár
Pre jednoduché uloženie vašej práce sa odporúča vytvoriť si vlastnú kópiu tohto repozitára. Môžete to urobiť kliknutím na tlačidlo **Použiť túto šablónu** v hornej časti stránky. Tým sa vytvorí nový repozitár vo vašom GitHub účte s kópiou učebného plánu.

Postupujte podľa týchto krokov:
1. **Vytvorte fork repozitára**: Kliknite na tlačidlo "Fork" v pravom hornom rohu tejto stránky.
2. **Naklonujte repozitár**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Spustenie kurzu v Codespace

Vo vašej kópii repozitára, ktorú ste vytvorili, kliknite na tlačidlo **Code** a vyberte **Open with Codespaces**. Tým sa pre vás vytvorí nový Codespace na prácu.

![Codespace](../../translated_images/sk/createcodespace.0238bbf4d7a8d955.webp)

#### Spustenie kurzu lokálne na vašom počítači

Na spustenie tohto kurzu lokálne potrebujete textový editor, prehliadač a nástroj príkazového riadka. Naša prvá lekcia, [Úvod do programovacích jazykov a nástrojov remesla](../../1-getting-started-lessons/1-intro-to-programming-languages), vás prevedie rôznymi možnosťami pre každý z týchto nástrojov, aby ste si vybrali, čo vám najviac vyhovuje.

Odporúčame použiť [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) ako editor, ktorý má tiež zabudovaný [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). Visual Studio Code si môžete stiahnuť [tu](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).


1. Naklonujte svoj repozitár do počítača. Môžete to urobiť kliknutím na tlačidlo **Code** a skopírovaním URL:

    [CodeSpace](./images/createcodespace.png)
Potom otvorte [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) vo [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) a spustite nasledujúci príkaz, pričom `<your-repository-url>` nahraďte URL, ktorú ste práve skopírovali:

    ```bash 
    git clone <your-repository-url>
    ```

2. Otvorte priečinok vo Visual Studio Code. Môžete to urobiť kliknutím na **Súbor** > **Otvoriť priečinok** a vybratím priečinka, ktorý ste práve naklonovali.


> Odporúčané rozšírenia Visual Studio Code:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - na náhľad HTML stránok priamo vo Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - na pomoc pri rýchlejšom písaní kódu

## 📂 Každá lekcia obsahuje:

- voliteľnú sketchnotku
- voliteľné doplnkové video
- rozcvičku pred lekciou formou kvízu
- napísanú lekciu
- pre projektové lekcie krok za krokom návody, ako projekt vybudovať
- kontroly vedomostí
- výzvu
- doplnkové čítanie
- zadanie
- [kvíz po lekcii](https://ff-quizzes.netlify.app/web/)

> **Poznámka o kvízoch**: Všetky kvízy sú obsiahnuté v priečinku Quiz-app, celkovo 48 kvízov po troch otázkach. Nájdete ich [tu](https://ff-quizzes.netlify.app/web/). Kvízová aplikácia môže byť spustená lokálne alebo nasadená na Azure; postupujte podľa inštrukcií v priečinku `quiz-app`.

## 🗃️ Lekcie

|     |                       Názov projektu                       |                            Prebrané koncepty                             | Ciele učenia                                                                                                                      |                                                         Prepojená lekcia                                                          |         Autor          |
| :-: | :---------------------------------------------------------: | :-----------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Začíname                               |           Úvod do programovania a nástroje remesla                      | Naučte sa základné princípy väčšiny programovacích jazykov a o softvéri pomáhajúcom profesionálnym vývojárom                      | [Úvod do programovacích jazykov a nástrojov remesla](./1-getting-started-lessons/1-intro-to-programming-languages/README.md)       |         Jasmine         |
| 02  |                     Začíname                               |             Základy GitHub, vrátane práce v tíme                        | Ako používať GitHub vo vašom projekte, ako spolupracovať s ostatnými na kóde                                                      |                            [Úvod do GitHub](./1-getting-started-lessons/2-github-basics/README.md)                                   |          Floor          |
| 03  |                     Začíname                               |                             Prístupnosť                                  | Naučte sa základy prístupnosti na webe                                                                                            |                       [Základy prístupnosti](./1-getting-started-lessons/3-accessibility/README.md)                                  |       Christopher       |
| 04  |                        Základy JS                          |                         Dátové typy JavaScriptu                         | Základy dátových typov v JavaScripte                                                                                              |                                       [Dátové typy](./2-js-basics/1-data-types/README.md)                                          |         Jasmine         |
| 05  |                        Základy JS                          |                         Funkcie a metódy                               | Naučte sa o funkciách a metódach na riadenie logiky aplikácie                                                                    |                              [Funkcie a metódy](./2-js-basics/2-functions-methods/README.md)                                       | Jasmine a Christopher   |
| 06  |                        Základy JS                          |                        Rozhodovanie v JS                                | Naučte sa, ako vytvárať podmienky vo vašom kóde pomocou rozhodovacích metód                                                       |                                 [Rozhodovanie](./2-js-basics/3-making-decisions/README.md)                                       |         Jasmine         |
| 07  |                        Základy JS                          |                            Polia a cykly                                | Práca s dátami pomocou polí a cyklov v JavaScripte                                                                               |                                   [Polia a cykly](./2-js-basics/4-arrays-loops/README.md)                                        |         Jasmine         |
| 08  |       [Terrárium](./3-terrarium/solution/README.md)        |                            HTML v praxi                                | Postavte HTML pre online terrárium, zamerané na tvorbu rozloženia stránky                                                        |                                 [Úvod do HTML](./3-terrarium/1-intro-to-html/README.md)                                         |           Jen           |
| 09  |       [Terrárium](./3-terrarium/solution/README.md)        |                            CSS v praxi                                 | Postavte CSS na štýlovanie online terrária, zamerajte sa na základy CSS vrátane responzívneho dizajnu                            |                                  [Úvod do CSS](./3-terrarium/2-intro-to-css/README.md)                                          |           Jen           |
| 10  |            [Terrárium](./3-terrarium/solution/README.md)   |                 JavaScript Closure, manipulácia s DOM                 | Vybudujte JavaScript, ktorý umožní drag/drop rozhranie terrária, zamerajte sa na closure a manipuláciu s DOM                    |                  [JavaScript Closure, manipulácia s DOM](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                    |           Jen           |
| 11  |          [Hra na písanie](./4-typing-game/solution/README.md)  |                          Vytvorenie hry na písanie                     | Naučte sa používať udalosti klávesnice na riadenie logiky JavaScriptovej aplikácie                                              |                                [Programovanie riadené udalosťami](./4-typing-game/typing-game/README.md)                            |       Christopher       |
| 12  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) |                         Práca s prehliadačmi                          | Naučte sa, ako fungujú prehliadače, ich históriu a ako vytvoriť základy rozšírenia prehliadača                                   |                               [O prehliadačoch](./5-browser-extension/1-about-browsers/README.md)                                  |           Jen           |
| 13  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) | Vytváranie formulára, volanie API a ukladanie premenných             | Vytvorte JavaScriptové prvky rozšírenia prehliadača, ktoré volajú API a používajú premenné uložené v lokálnom úložisku           |                [API, formuláre a lokálne úložisko](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen           |
| 14  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) |       Pozadie procesov v prehliadači, webový výkon                   | Použite pozadné procesy prehliadača na správu ikony rozšírenia; naučte sa o webovom výkone a optimalizáciách                    |             [Pozadné úlohy a výkon](./5-browser-extension/3-background-tasks-and-performance/README.md)                         |           Jen           |
| 15  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |        Pokročilejšie vývoj hier v JavaScripte                        | Naučte sa o dedičnosti cez triedy aj kompozíciu a o vzore Pub/Sub, v príprave na vytvorenie hry                                 |                      [Úvod do pokročilého vývoja hier](./6-space-game/1-introduction/README.md)                                    |          Chris          |
| 16  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |                            Kreslenie na canvas                        | Naučte sa o Canvas API, ktoré sa používa na kreslenie prvkov na obrazovku                                                      |                                [Kreslenie na Canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris          |
| 17  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |                    Pohyb prvkov na obrazovke                         | Objavte, ako môžu prvky získať pohyb pomocou kartézskych súradníc a Canvas API                                                 |                           [Pohyb prvkov](./6-space-game/3-moving-elements-around/README.md)                                        |          Chris          |
| 18  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |                          Detekcia kolízií                            | Urobte, aby sa prvky zrážali a reagovali navzájom pomocou stlačení klávesov; pridajte cooldown funkciu na zabezpečenie výkonu   |                              [Detekcia kolízií](./6-space-game/4-collision-detection/README.md)                                   |          Chris          |
| 19  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |                             Udržiavanie skóre                         | Vykonávajte matematické výpočty na základe stavu a výkonu hry                                                                  |                                    [Udržiavanie skóre](./6-space-game/5-keeping-score/README.md)                                  |          Chris          |
| 20  |           [Hra vo vesmíre](./6-space-game/solution/README.md)           |                      Ukončenie a reštart hry                         | Naučte sa o ukončení a reštartovaní hry vrátane čistenia zdrojov a resetovania premenných                                      |                                [Podmienka ukončenia](./6-space-game/6-end-condition/README.md)                                     |          Chris          |
| 21  |         [Banková aplikácia](./7-bank-project/solution/README.md)         |              HTML šablóny a trasy vo webovej aplikácii               | Naučte sa vytvoriť kostru viacstránkovej webovej architektúry pomocou routovania a HTML šablón                                   |                            [HTML šablóny a trasy](./7-bank-project/1-template-route/README.md)                                   |          Yohan          |
| 22  |         [Banková aplikácia](./7-bank-project/solution/README.md)         |               Vytvorenie prihlasovacieho a registračného formulára    | Naučte sa vytvárať formuláre a spracovávať validačné rutiny                                                                     |                                           [Formuláre](./7-bank-project/2-forms/README.md)                                       |          Yohan          |
| 23  |         [Banková aplikácia](./7-bank-project/solution/README.md)         |                Spôsoby získavania a využívania dát                    | Ako do vašej aplikácie vstupujú a z nej vychádzajú dáta, ako ich získavať, ukladať a likvidovať                                  |                                            [Dáta](./7-bank-project/3-data/README.md)                                          |          Yohan          |
| 24  |         [Banková aplikácia](./7-bank-project/solution/README.md)         |                    Koncepty správy stavu                             | Naučte sa, ako si vaša aplikácia udržiava stav a ako s ním manažovať programovo                                                |                                [Správa stavu](./7-bank-project/4-state-management/README.md)                                    |          Yohan          |
| 25 | [Kód prehliadača/VScode](../../8-code-editor) | Práca s VScode | Naučte sa používať editor kódu | [Použitie VScode Editora](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI asistenti](./9-chat-project/README.md) | Práca s AI | Naučte sa vytvoriť vlastného AI asistenta | [Projekt AI asistenta](./9-chat-project/README.md) | Chris |

## 🏫 Pedagógia

Náš učebný plán je navrhnutý s ohľadom na dve kľúčové pedagogické princípy:
* učenie založené na projektoch
* časté kvízy

Program učí základy JavaScriptu, HTML a CSS, ako aj najnovšie nástroje a techniky používané dnešnými webovými vývojármi. Študenti budú mať možnosť získať praktické skúsenosti tvorbou hry na písanie, virtuálneho terrária, ekologického rozšírenia prehliadača, hry typu space invaders a bankovej aplikácie pre podniky. Na konci série získajú študenti pevné základy vo webovom vývoji.

> 🎓 Môžete absolvovať prvé lekcie tohto učebného plánu ako [Learn Path](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) na Microsoft Learn!

Zaradením obsahu do projektov sa celý proces stáva pre študentov atraktívnejším a zvyšuje sa udržanie naučených konceptov. Tiež sme pripravili niekoľko úvodných lekcií o základoch JavaScriptu, ktoré vysvetľujú koncepty, doplnených videom z kolekcie "[Séria pre začiatočníkov: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)", ktorých niektorí autori prispeli k tomuto učebnému plánu.

Okrem toho nízko-stresový kvíz pred vyučovaním nastaví študentovi zámer učiť sa tému, zatiaľ čo druhý kvíz po vyučovaní zabezpečuje ďalšie upevnenie vedomostí. Tento učebný plán bol navrhnutý tak, aby bol flexibilný a zábavný, a dá sa absolvovať celý alebo čiastočne. Projekty začínajú malé a na konci 12-týždňového cyklu sú čoraz zložitejšie.

Aj keď sme zámerne vynechali zavedenie JavaScriptových frameworkov, aby sme sa sústredili na základné zručnosti potrebné ako webový vývojár pred osvojením frameworku, ďalším dobrým krokom po dokončení tohto učebného plánu je naučiť sa o Node.js pomocou ďalšej video kolekcie: "[Séria pre začiatočníkov: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Navštívte naše [Pravidlá správania](CODE_OF_CONDUCT.md) a pokyny k [Príspevkom](CONTRIBUTING.md). Vaša konštruktívna spätná väzba je vítaná!


## 🧭 Offline prístup

Túto dokumentáciu môžete spustiť offline pomocou [Docsify](https://docsify.js.org/#/). Vytvorte si fork tohoto repozitára, [nainštalujte Docsify](https://docsify.js.org/#/quickstart) na svoj lokálny stroj a potom v koreňovom priečinku tohto repozitára zadajte príkaz `docsify serve`. Webová stránka bude dostupná na porte 3000 na localhoste: `localhost:3000`.

## 📘 PDF

PDF so všetkými lekciami nájdete [tu](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Ďalšie kurzy
Náš tím vytvára aj iné kurzy! Pozrite sa na:

<!-- CO-OP TRANSLATOR OTHER COURSES START -->
### LangChain
[![LangChain4j pre začiatočníkov](https://img.shields.io/badge/LangChain4j%20for%20Beginners-22C55E?style=for-the-badge&&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchain4j-for-beginners)
[![LangChain.js pre začiatočníkov](https://img.shields.io/badge/LangChain.js%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchainjs-for-beginners?WT.mc_id=m365-94501-dwahlin)
[![LangChain pre začiatočníkov](https://img.shields.io/badge/LangChain%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://github.com/microsoft/langchain-for-beginners?WT.mc_id=m365-94501-dwahlin)
---

### Azure / Edge / MCP / Agentúry
[![AZD pre začiatočníkov](https://img.shields.io/badge/AZD%20for%20Beginners-0078D4?style=for-the-badge&labelColor=E5E7EB&color=0078D4)](https://github.com/microsoft/AZD-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Edge AI pre začiatočníkov](https://img.shields.io/badge/Edge%20AI%20for%20Beginners-00B8E4?style=for-the-badge&labelColor=E5E7EB&color=00B8E4)](https://github.com/microsoft/edgeai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![MCP pre začiatočníkov](https://img.shields.io/badge/MCP%20for%20Beginners-009688?style=for-the-badge&labelColor=E5E7EB&color=009688)](https://github.com/microsoft/mcp-for-beginners?WT.mc_id=academic-105485-koreyst)
[![AI Agentúry pre začiatočníkov](https://img.shields.io/badge/AI%20Agents%20for%20Beginners-00C49A?style=for-the-badge&labelColor=E5E7EB&color=00C49A)](https://github.com/microsoft/ai-agents-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Generatívna AI séria
[![Generatívna AI pre začiatočníkov](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generatívna AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generatívna AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generatívna AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---
 
### Základné učenie
[![ML pre začiatočníkov](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Dátová veda pre začiatočníkov](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI pre začiatočníkov](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Kyberbezpečnosť pre začiatočníkov](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Webový vývoj pre začiatočníkov](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT pre začiatočníkov](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![XR vývoj pre začiatočníkov](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Copilot séria
[![Copilot pre AI párované programovanie](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot pre C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Copilot dobrodružstvo](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## Získanie pomoci

Ak sa zaseknete alebo máte akékoľvek otázky ohľadom tvorby AI aplikácií, pripojte sa ku komunite študentov a skúsených vývojárov k diskusiám o MCP. Je to podporná komunita, kde sú otázky vítané a zdieľanie vedomostí je voľné.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

Ak máte spätnú väzbu k produktu alebo ste narazili na chyby počas vývoja, navštívte:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## Licencia

Tento repozitár je licencovaný pod licenciou MIT. Pre viac informácií pozrite súbor [LICENSE](../../LICENSE).

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Výhrada**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->