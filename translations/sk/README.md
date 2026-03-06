# Vývoj webu pre začiatočníkov - Učebný plán

Naučte sa základy vývoja webu s naším 12-týždňovým komplexným kurzom od Microsoft Cloud Advocates. Každá z 24 lekcií sa zameriava na JavaScript, CSS a HTML prostredníctvom praktických projektov ako teráriá, rozšírenia pre prehliadače a vesmírne hry. Zapojte sa do kvízov, diskusií a praktických úloh. Zlepšite svoje zručnosti a optimalizujte uchovávanie vedomostí pomocou našej efektívnej projektovo orientovanej pedagogiky. Začnite svoju cestu programovania ešte dnes!

Pripojte sa ku komunite Azure AI Foundry na Discorde

Nasledujte tieto kroky, aby ste začali používať tieto zdroje:  
1. **Forknite si repozitár**: Kliknite na [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)  
2. **Klónujte repozitár**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`  
3. [**Pripojte sa ku komunite Azure AI Foundry na Discorde a spoznajte odborníkov a kolegov vývojárov**](https://discord.com/invite/ByRwuEEgH4)  

### 🌐 Podpora viacerých jazykov

#### Podporované cez GitHub Action (automatizované a vždy aktuálne)

> **Preferujete klonovanie lokálne?**  
>  
> Tento repozitár obsahuje viac ako 50 jazykových prekladov, čo výrazne zväčšuje veľkosť sťahovania. Ak chcete klonovať bez prekladov, použite sparse checkout:  
>  
> **Bash / macOS / Linux:**  
> > ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
>  
> **CMD (Windows):**  
> > ```cmd
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone "/*" "!translations" "!translated_images"
> ```
>  
>  
> Toto vám poskytne všetko potrebné na dokončenie kurzu s oveľa rýchlejším sťahovaním.

**Ak chcete podporu ďalších jazykov prekladov, nájdete ich zoznam [tu](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _Ste študent?_

Navštívte [**študentskú stránku Student Hub**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon), kde nájdete zdroje pre začiatočníkov, študentské balíčky a dokonca spôsoby, ako získať bezplatný certifikátový poukaz. Toto je stránka, ktorú si chcete uložiť medzi záložky a čas od času ju skontrolovať, pretože obsah sa mení každý mesiac.

### 📣 Oznámenie - Nové výzvy režimu GitHub Copilot Agent na dokončenie!

Pridaná nová výzva, nájdite "GitHub Copilot Agent Challenge 🚀" v väčšine kapitol. Je to nová výzva pre vás na dokončenie pomocou GitHub Copilot a režimu Agent. Ak ste režim Agent ešte nepoužili, dokáže nielen generovať text, ale aj tvoriť a upravovať súbory, spúšťať príkazy a ďalšie.

### 📣 Oznámenie - _Nový projekt postavený pomocou generatívnej AI_ 

Pridaný nový projekt AI asistenta, pozrite si ho [projekt](./9-chat-project/README.md)

### 📣 Oznámenie - _Nový učebný plán_ na Generatívnu AI pre JavaScript práve vydaný

Nezmeškajte náš nový učebný plán Generatívnej AI!

Navštívte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) a začnite!

- Lekcie pokrývajú všetko od základov po RAG.  
- Interagujte s historickými postavami pomocou GenAI a našej sprievodnej aplikácie.  
- Zábavný a pútavý príbeh, budete cestovať časom!  

Každá lekcia obsahuje úlohu na dokončenie, kontrolu vedomostí a výzvu, ktorá vás prevedie učením tém ako:  
- Promptovanie a návrh promptov  
- Generovanie textových a obrazových aplikácií  
- Vyhľadávacie aplikácie  

Navštívte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) a začnite!



## 🌱 Začíname

> **Učitelia**, pridali sme [niekoľko návrhov](for-teachers.md), ako používať tento učebný plán. Budeme radi za vašu spätnú väzbu [v našom diskusnom fóre](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Študenti](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, ku každej lekcii začnite prednáškovým kvízom a pokračujte čítaním prednáškového materiálu, dokončovaním rôznych aktivít a overte si pochopenie pomocou povykaného kvízu.

Pre lepší zážitok z učenia sa spojte so svojimi spolužiakmi, aby ste mohli spoločne pracovať na projektoch! Diskusie sú vítané v našom [diskusnom fóre](https://github.com/microsoft/Web-Dev-For-Beginners/discussions), kde bude tím moderátorov pripravený odpovedať na vaše otázky.

Pre ďalšie vzdelávanie dôrazne odporúčame preskúmať [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) pre ďalšie študijné materiály.

### 📋 Nastavenie vášho prostredia

Tento učebný plán má pripravené vývojové prostredie! Na začiatku môžete vybrať spustenie učebného plánu v [Codespace](https://github.com/features/codespaces/) (_prostredie v prehliadači, nie je potrebná inštalácia_) alebo lokálne vo vašom počítači pomocou textového editora ako [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Vytvorte si vlastný repozitár  
Pre jednoduché ukladanie svojej práce odporúčame vytvoriť si vlastnú kópiu tohto repozitára. Môžete to urobiť kliknutím na tlačidlo **Použiť túto šablónu** v hornej časti stránky. Toto vytvorí nový repozitár vo vašom účte GitHub s kópiou učebného plánu.

Postupujte podľa týchto krokov:  
1. **Forknite si repozitár**: Kliknite na tlačidlo „Fork“ v pravom hornom rohu tejto stránky.  
2. **Klónujte repozitár**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`  

#### Spustenie učebného plánu v Codespace

Vo vašej vlastnej kópii repozitára, ktorú ste vytvorili, kliknite na tlačidlo **Code** a vyberte **Open with Codespaces**. Tým sa pre vás vytvorí nový Codespace na prácu.

#### Spustenie učebného plánu lokálne na vašom počítači

Ak chcete spustiť učebný plán lokálne, budete potrebovať textový editor, prehliadač a nástroj príkazového riadku. Naša prvá lekcia, [Úvod do programovacích jazykov a nástrojov remesla](../../1-getting-started-lessons/1-intro-to-programming-languages), vás prevedie rôznymi možnosťami pre každý z týchto nástrojov, aby ste si vybrali, čo vám najviac vyhovuje.

Našou odporúčanou voľbou je použiť [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) ako editor, ktorý má tiež zabudovaný [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). Visual Studio Code si môžete stiahnuť [tu](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).
1. Klonujte si svoj repozitár do svojho počítača. Môžete to urobiť kliknutím na tlačidlo **Code** a skopírovaním URL:

    [CodeSpace](./images/createcodespace.png)

    Potom otvorte [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) v [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) a spustite nasledujúci príkaz, pričom `<your-repository-url>` nahraďte URL, ktorú ste práve skopírovali:

    ```bash 
    git clone <your-repository-url>
    ```

2. Otvorte priečinok vo Visual Studio Code. Môžete to urobiť kliknutím na **File** > **Open Folder** a výberom práve sklonovaného priečinka.


>  Odporúčané rozšírenia Visual Studio Code:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - na náhľad HTML stránok priamo vo Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - na rýchlejšie písanie kódu

## 📂 Každá lekcia obsahuje:

- voliteľnú náčrtovú poznámku (sketchnote)
- voliteľné doplnkové video
- rozcvičujúci kvíz pred lekciou
- písanú lekciu
- pre lekcie založené na projekte, podrobné návody krok za krokom ako projekt zostrojiť
- overenia vedomostí
- výzvu
- doplnkové čítanie
- zadanie
- [kvíz po lekcii](https://ff-quizzes.netlify.app/web/)

> **Poznámka o kvízoch**: Všetky kvízy sú obsiahnuté v priečinku Quiz-app, celkovo 48 kvízov so zloženými z troch otázok. Sú dostupné [tu](https://ff-quizzes.netlify.app/web/) a aplikáciu kvízov môžeš spustiť lokálne alebo nasadiť do Azure; postupuj podľa pokynov v priečinku `quiz-app`.

## 🗃️ Lekcie

|     |                       Názov projektu                       |                            Naučené koncepty                             | Učebné ciele                                                                                                                 |                                                         Prepojená lekcia                                                          |         Autor          |
| :-: | :--------------------------------------------------------: | :---------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Začíname                              |           Úvod do programovania a nástrojov remesla                    | Naučiť sa základné princípy väčšiny programovacích jazykov a softvér, ktorý pomáha profesionálnym vývojárom                   | [Úvod do programovacích jazykov a nástrojov](./1-getting-started-lessons/1-intro-to-programming-languages/README.md)         |         Jasmine         |
| 02  |                     Začíname                              |             Základy GitHubu, vrátane práce v tíme                      | Ako používať GitHub v projekte, ako spolupracovať s ostatnými na zdrojovom kóde                                               |                            [Úvod do GitHubu](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor          |
| 03  |                     Začíname                              |                              Prístupnosť                               | Naučiť sa základy webovej prístupnosti                                                                                       |                       [Základy prístupnosti](./1-getting-started-lessons/3-accessibility/README.md)                             |       Christopher       |
| 04  |                        Základy JS                         |                      Dátové typy v JavaScripte                        | Základy dátových typov v JavaScripte                                                                                          |                                       [Dátové typy](./2-js-basics/1-data-types/README.md)                                        |         Jasmine         |
| 05  |                        Základy JS                         |                       Funkcie a metódy                                | Naučiť sa o funkciách a metódach na riadenie logiky aplikácie                                                                |                              [Funkcie a metódy](./2-js-basics/2-functions-methods/README.md)                               | Jasmine a Christopher   |
| 06  |                        Základy JS                         |                      Rozhodovanie s JS                                | Naučiť sa vytvárať podmienky v kóde pomocou rozhodovacích metód                                                              |                                 [Rozhodovanie](./2-js-basics/3-making-decisions/README.md)                                  |         Jasmine         |
| 07  |                        Základy JS                         |                        Pole a cykly                                  | Práca s dátami pomocou polí a cyklov v JavaScripte                                                                           |                                   [Pole a cykly](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine         |
| 08  |       [Terrárium](./3-terrarium/solution/README.md)       |                            HTML v praxi                              | Vytvoriť HTML pre online terrárium so zameraním na rozloženie                                                                |                                 [Úvod do HTML](./3-terrarium/1-intro-to-html/README.md)                                         |           Jen           |
| 09  |       [Terrárium](./3-terrarium/solution/README.md)       |                            CSS v praxi                               | Vytvoriť CSS pre štýlovanie online terrária, so zameraním na základy CSS vrátane responzívneho dizajnu                        |                                  [Úvod do CSS](./3-terrarium/2-intro-to-css/README.md)                                        |           Jen           |
| 10  |            [Terrárium](./3-terrarium/solution/README.md)            |                 JavaScript Closures, manipulácia s DOM               | Vytvoriť JavaScript pre funkčný drag/drop rozhranie terrária, so zameraním na closures a manipuláciu s DOM                    |                  [JavaScript Closures, manipulácia s DOM](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                  |           Jen           |
| 11  |          [Hra na písanie](./4-typing-game/solution/README.md)       |                          Vytvorenie hry na písanie                    | Naučiť sa používať klávesnicové udalosti pre ovládanie logiky JavaScript aplikácie                                            |                                [Programovanie na základe udalostí](./4-typing-game/typing-game/README.md)                       |       Christopher       |
| 12  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) |                         Práca s prehliadačmi                         | Naučiť sa ako fungujú prehliadače, ich históriu a ako vytvoriť základné prvky prehliadačového rozšírenia                       |                               [O prehliadačoch](./5-browser-extension/1-about-browsers/README.md)                               |           Jen           |
| 13  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) | Vytváranie formulára, volanie API a ukladanie premenných do lokálneho ukladiska | Vytvoriť JavaScript prvky rozšírenia prehliadača na volanie API pomocou premenných uložených v lokálnom ukladisku              |                [API, formuláre a lokálne ukladisko](./5-browser-extension/2-forms-browsers-local-storage/README.md)               |           Jen           |
| 14  | [Zelené rozšírenie prehliadača](./5-browser-extension/solution/README.md) |          Procesy na pozadí v prehliadači, výkon webu                  | Použiť procesy na pozadí pre správu ikony rozšírenia, naučiť sa o výkone webu a optimalizáciách                                |             [Procesy na pozadí a výkon](./5-browser-extension/3-background-tasks-and-performance/README.md)                   |           Jen           |
| 15  |           [Hra v priestore](./6-space-game/solution/README.md)           |             Pokročilejšie vývoj hier v JavaScripte                   | Naučiť sa o dedičnosti pomocou tried a kompozície a o vzore Pub/Sub, ako prípravu na tvorbu hry                                |                      [Úvod do pokročilého vývoja hier](./6-space-game/1-introduction/README.md)                                |          Chris          |
| 16  |           [Hra v priestore](./6-space-game/solution/README.md)           |                           Kreslenie na plátno                         | Naučiť sa o Canvas API, používanom na kreslenie prvkov na obrazovke                                                           |                                [Kreslenie na plátno](./6-space-game/2-drawing-to-canvas/README.md)                             |          Chris          |
| 17  |           [Hra v priestore](./6-space-game/solution/README.md)           |                   Pohybovanie prvkov po obrazovke                    | Zistiť, ako prvky získavajú pohyb pomocou karteziánskych súradníc a Canvas API                                                |                           [Pohybovanie prvkov](./6-space-game/3-moving-elements-around/README.md)                              |          Chris          |
| 18  |           [Hra v priestore](./6-space-game/solution/README.md)           |                          Detekcia kolízie                             | Vytvoriť kolízie medzi prvkami a reakcie na seba prostredníctvom stlačení klávesov a poskytnúť cooldown funkciu pre výkon hry  |                              [Detekcia kolízie](./6-space-game/4-collision-detection/README.md)                               |          Chris          |
| 19  |           [Hra v priestore](./6-space-game/solution/README.md)           |                             Sledovanie skóre                          | Vykonávať matematické výpočty podľa stavu a výkonu hry                                                                       |                                    [Sledovanie skóre](./6-space-game/5-keeping-score/README.md)                              |          Chris          |
| 20  |           [Hra v priestore](./6-space-game/solution/README.md)           |                     Končenie a reštart hry                            | Naučiť sa o ukončení a reštartovaní hry, vrátane čistenia zdrojov a resetovania premenných                                    |                                [Podmienka ukončenia](./6-space-game/6-end-condition/README.md)                                 |          Chris          |
| 21  |         [Banková aplikácia](./7-bank-project/solution/README.md)          |                 Šablóny HTML a routovanie v webovej aplikácii        | Naučiť sa vytvoriť rozvrhnutie viacstránkového webu pomocou routovania a HTML šablón                                            |                            [HTML Šablóny a routovanie](./7-bank-project/1-template-route/README.md)                           |          Yohan          |
| 22  |         [Banková aplikácia](./7-bank-project/solution/README.md)          |                  Vytvorenie prihlasovacieho a registračného formulára | Naučiť sa o tvorbe formulárov a spracovaní validácie                                                                          |                                           [Formuláre](./7-bank-project/2-forms/README.md)                                  |          Yohan          |
| 23  |         [Banková aplikácia](./7-bank-project/solution/README.md)          |                   Spôsoby získavania a používania dát                 | Ako do aplikácie prenikajú dáta, ako ich načítať, uložiť a odstrániť                                                         |                                            [Dáta](./7-bank-project/3-data/README.md)                                       |          Yohan          |
| 24  |         [Banková aplikácia](./7-bank-project/solution/README.md)          |                      Koncepty riadenia stavu                         | Naučiť sa, ako aplikácia uchováva stav a ako ho programovo riadiť                                                            |                                [Riadenie stavu](./7-bank-project/4-state-management/README.md)                               |          Yohan          |
| 25  | [Kód editor/Brower/VScode](../../8-code-editor) | Práca s VScode | Naučiť sa používať editor kódu | [Použitie editora VScode](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26  | [AI asistenti](./9-chat-project/README.md) | Práca s AI | Naučiť sa vytvoriť vlastného AI asistenta | [Projekt AI asistenta](./9-chat-project/README.md) | Chris |

## 🏫 Pedagogika

Naše učebné osnovy sú navrhnuté s dvoma kľúčovými pedagogickými princípmi na pamäti:
* učenie založené na projektoch
* časté kvízy

Program vyučuje základy JavaScriptu, HTML a CSS, ako aj najnovšie nástroje a techniky používané dnešnými webovými vývojármi. Študenti budú mať príležitosť získať praktické skúsenosti vytvorením hry na písanie, virtuálneho terária, ekologicky šetrného rozšírenia prehliadača, hry v štýle Space Invader a bankovej aplikácie pre firmy. Na konci série študenti získajú pevné základy webového vývoja.

> 🎓 Môžete absolvovať prvých niekoľko lekcií z tohto učebného plánu ako [Cestu učenia](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) na Microsoft Learn!

Zabezpečením souladu obsahu s projektmi je proces pre študentov atraktívnejší a dochádza k lepšiemu zapamätaniu si konceptov. Napísali sme takisto niekoľko úvodných lekcií k základom JavaScriptu na predstavenie konceptov, sprevádzané videom zo série "[Séria pre začiatočníkov: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)", ktorej niektorí autori prispeli aj k týmto osnovám.

Okrem toho nízko náročný kvíz pred hodinou nastaví študentovi cieľ učiť sa danú tému, zatiaľ čo druhý kvíz po hodine zabezpečí ďalšie upevnenie vedomostí. Tento učebný plán je navrhnutý tak, aby bol flexibilný a zábavný a dá sa absolvovať celý alebo jeho časť. Projekty začínajú jednoducho a postupne sa počas 12-týždňového cyklu komplikujú.

Hoci sme zámerne vynechali zavedenie JavaScript frameworkov, aby sme sa sústredili na základné zručnosti potrebné ako webový vývojár pred osvojením si frameworku, ďalším dobrým krokom po dokončení týchto osnov je naučiť sa Node.js prostredníctvom inej video série: "[Séria pre začiatočníkov: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Navštívte naše pravidlá [Code of Conduct](CODE_OF_CONDUCT.md) a [Contributing](CONTRIBUTING.md). Radi privítame vaše konštruktívne pripomienky!


## 🧭 Offline prístup

Túto dokumentáciu môžete spustiť offline pomocou [Docsify](https://docsify.js.org/#/). Zforknite si tento repozitár, [nainštalujte Docsify](https://docsify.js.org/#/quickstart) na svojom miestnom počítači a potom v koreňovom priečinku tohto repozitára zadajte príkaz `docsify serve`. Web stránka bude dostupná na porte 3000 na vašom localhost: `localhost:3000`.

## 📘 PDF
PDF so všetkými lekciami nájdete [tu](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Iné kurzy

Náš tím vytvára aj ďalšie kurzy! Pozrite sa:

<!-- CO-OP TRANSLATOR OTHER COURSES START -->
### LangChain
[![LangChain4j for Beginners](https://img.shields.io/badge/LangChain4j%20for%20Beginners-22C55E?style=for-the-badge&&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchain4j-for-beginners)
[![LangChain.js for Beginners](https://img.shields.io/badge/LangChain.js%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchainjs-for-beginners?WT.mc_id=m365-94501-dwahlin)
[![LangChain for Beginners](https://img.shields.io/badge/LangChain%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://github.com/microsoft/langchain-for-beginners?WT.mc_id=m365-94501-dwahlin)
---

### Azure / Edge / MCP / Agents
[![AZD for Beginners](https://img.shields.io/badge/AZD%20for%20Beginners-0078D4?style=for-the-badge&labelColor=E5E7EB&color=0078D4)](https://github.com/microsoft/AZD-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Edge AI for Beginners](https://img.shields.io/badge/Edge%20AI%20for%20Beginners-00B8E4?style=for-the-badge&labelColor=E5E7EB&color=00B8E4)](https://github.com/microsoft/edgeai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![MCP for Beginners](https://img.shields.io/badge/MCP%20for%20Beginners-009688?style=for-the-badge&labelColor=E5E7EB&color=009688)](https://github.com/microsoft/mcp-for-beginners?WT.mc_id=academic-105485-koreyst)
[![AI Agents for Beginners](https://img.shields.io/badge/AI%20Agents%20for%20Beginners-00C49A?style=for-the-badge&labelColor=E5E7EB&color=00C49A)](https://github.com/microsoft/ai-agents-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Séria Generatívnej AI
[![Generative AI for Beginners](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generative AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generative AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generative AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---
 
### Základné vzdelávanie
[![ML for Beginners](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Data Science for Beginners](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI for Beginners](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Cybersecurity for Beginners](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Web Dev for Beginners](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT for Beginners](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![XR Development for Beginners](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Séria Copilot
[![Copilot for AI Paired Programming](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot for C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Copilot Adventure](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## Získanie pomoci

Ak máte problém alebo otázky týkajúce sa tvorby AI aplikácií, pripojte sa k ostatným študentom a skúseným vývojárom v diskusiách o MCP. Je to podporná komunita, kde sú otázky vítané a zdieľanie znalostí je bezplatné.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

Ak máte spätnú väzbu k produktu alebo chyby počas vývoja, navštívte:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## Licencia

Tento repozitár je licencovaný pod licenciou MIT. Viac informácií nájdete v súbore [LICENSE](../../LICENSE).

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Upozornenie**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre dôležité informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne výklady vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->