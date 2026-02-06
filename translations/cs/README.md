# Webový vývoj pro začátečníky – učební plán

Naučte se základy webového vývoje s naším 12týdenním komplexním kurzem od Microsoft Cloud Advocates. Každá ze 24 lekcí se věnuje JavaScriptu, CSS a HTML prostřednictvím praktických projektů jako terária, rozšíření prohlížeče a vesmírné hry. Zapojte se do kvízů, diskuzí a praktických úkolů. Zlepšete své dovednosti a optimalizujte uchování znalostí díky naší efektivní pedagogice založené na projektech. Začněte svou cestu programováním ještě dnes!

Připojte se ke komunitě Azure AI Foundry na Discordu

Postupujte podle těchto kroků, abyste začali používat tyto zdroje:
1. **Vytvořte fork repositáře**: Klikněte na [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **Naklonujte repositář**: `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Připojte se k Azure AI Foundry Discordu a potkejte odborníky a další vývojáře**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Podpora více jazyků

#### Podporováno pomocí GitHub Action (automatizováno a vždy aktuální)

> **Raději chcete klonovat lokálně?**

> Tento repozitář obsahuje více než 50 jazykových překladů, což výrazně zvětšuje velikost stažení. Pro klonování bez překladů použijte sparse checkout:
> ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
> To vám poskytne vše potřebné k dokončení kurzu s mnohem rychlejším stahováním.

**Pokud chcete podporu dalších jazyků překladu, jsou uvedeny [zde](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _Jste student?_

Navštivte stránku [**Student Hub**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon), kde najdete zdroje pro začátečníky, studentské balíčky a dokonce způsoby, jak získat bezplatný voucher na certifikát. Tuto stránku si uložte a čas od času zkontrolujte, protože obsah měníme každý měsíc.

### 📣 Oznámení – nové výzvy v režimu GitHub Copilot Agent k dokončení!

Přidána nová výzva, hledejte "GitHub Copilot Agent Challenge 🚀" v většině kapitol. Je to nová výzva k dokončení s využitím GitHub Copilot a režimu Agenta. Pokud jste režim Agenta dosud nepoužívali, zvládá nejen generovat text, ale také vytvářet a upravovat soubory, spouštět příkazy a další.

### 📣 Oznámení – _nový projekt k vytvoření pomocí generativní AI_

Nový projekt s AI Asistentem právě přidán, podívejte se na něj [projekt](./9-chat-project/README.md)

### 📣 Oznámení – _nový učební plán_ na Generativní AI pro JavaScript právě vydán

Nezmeškejte náš nový učební plán Generativní AI!

Navštivte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) a začněte!

- Lekce pokrývají vše od základů po RAG.
- Komunikujte s historickými postavami pomocí GenAI a naší doprovodné aplikace.
- Zábavný a poutavý příběh, budete cestovat časem!

Každá lekce obsahuje zadání k dokončení, kontrolu znalostí a výzvu, která vás provede tématy jako:
- Promptování a návrh promptů
- Generování textových a obrazových aplikací
- Vyhledávací aplikace

Navštivte [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) a začněte!



## 🌱 Začínáme

> **Učitelé**, přidali jsme [několik návrhů](for-teachers.md), jak tento učební plán využívat. Budeme rádi za vaši zpětnou vazbu [v naší diskusní fóru](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Studenti](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, u každé lekce začněte přednáškovým kvízem a pokračujte čtením výukového materiálu, dokončením různých aktivit a ověřením pochopení pomocí závěrečného kvízu.

Pro lepší zážitek z učení se spojte se svými spolužáky a pracujte společně na projektech! Diskuse jsou vítány v našem [diskusním fóru](https://github.com/microsoft/Web-Dev-For-Beginners/discussions), kde je náš tým moderátorů připraven odpovědět na vaše dotazy.

Pro další vzdělávání silně doporučujeme prozkoumat [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) pro další studijní materiály.

### 📋 Nastavení vašeho prostředí

Tento učební plán má připravené vývojové prostředí! Při začátku si můžete vybrat spuštění kurzu v [Codespace](https://github.com/features/codespaces/) (_prostředí v prohlížeči bez nutnosti instalací_), nebo lokálně na vašem počítači s textovým editorem, například [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Vytvořte si svůj repozitář
Pro snadné ukládání své práce doporučujeme vytvořit si vlastní kopii tohoto repozitáře. Můžete to udělat kliknutím na tlačítko **Use this template** v horní části stránky. Tím se vytvoří nový repozitář ve vašem účtu GitHub s kopií učebního plánu.

Postupujte následovně:
1. **Vytvořte fork repositáře**: Klikněte na tlačítko "Fork" v pravém horním rohu této stránky.
2. **Naklonujte repozitář**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Spuštění učebního plánu v Codespace

Ve své kopii repozitáře klikněte na tlačítko **Code** a vyberte **Open with Codespaces**. Tím se vytvoří nový Codespace, ve kterém budete pracovat.

![Codespace](../../translated_images/cs/createcodespace.0238bbf4d7a8d955.webp)

#### Spuštění učebního plánu lokálně na vašem počítači

Pro spuštění kurzu lokálně budete potřebovat textový editor, prohlížeč a příkazový řádek. Naše první lekce, [Úvod do programovacích jazyků a nástrojů](../../1-getting-started-lessons/1-intro-to-programming-languages), vás provede různými možnostmi těchto nástrojů, abyste si vybrali, co vám vyhovuje nejlépe.

Doporučujeme použít [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) jako editor, který má integrovaný i [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). Visual Studio Code si stáhněte [zde](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

1. Naklonujte svůj repozitář do počítače. Učiňte tak kliknutím na tlačítko **Code** a zkopírováním URL:

    [CodeSpace](./images/createcodespace.png)
    Poté otevřete [Terminál](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) v rámci [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) a spusťte následující příkaz, přičemž `<your-repository-url>` nahraďte URL, kterou jste právě zkopírovali:

    ```bash 
    git clone <your-repository-url>
    ```

2. Otevřete složku ve Visual Studio Code. To můžete udělat kliknutím na **Soubor** > **Otevřít složku** a vybráním složky, kterou jste právě naklonovali.


>  Doporučené rozšíření Visual Studio Code:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - náhled HTML stránek přímo ve Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - pomáhá psát kód rychleji

## 📂 Každá lekce obsahuje:

- volitelnou skicovou poznámku
- volitelné doplňkové video
- rozehřívací kvíz před lekcí
- psanou lekci
- u lekcí založených na projektu krok za krokem návody, jak projekt postavit
- kontroly znalostí
- výzvu
- doplňující čtení
- úkol
- [kvíz po lekci](https://ff-quizzes.netlify.app/web/)

> **Poznámka ke kvízům**: Všechny kvízy jsou umístěny ve složce Quiz-app, celkem 48 kvízů po třech otázkách. Jsou dostupné [zde](https://ff-quizzes.netlify.app/web/), aplikaci kvízu lze spustit lokálně nebo nasadit na Azure; postupujte podle instrukcí v složce `quiz-app`.

## 🗃️ Lekce

|     |                       Název projektu                       |                            Učené koncepty                             | Učební cíle                                                                                                                 |                                                         Připojená lekce                                                          |         Autor          |
| :-: | :--------------------------------------------------------: | :------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Začínáme                              |           Úvod do programování a nástroje profese                    | Naučit se základní principy většiny programovacích jazyků a o softwaru, který pomáhá profesionálním vývojářům v jejich práci | [Úvod do programovacích jazyků a nástrojů profese](./1-getting-started-lessons/1-intro-to-programming-languages/README.md)    |         Jasmine         |
| 02  |                     Začínáme                              |             Základy GitHubu, práce v týmu                            | Jak používat GitHub ve vašem projektu, jak spolupracovat s ostatními na kódu                                                 |                            [Úvod do GitHubu](./1-getting-started-lessons/2-github-basics/README.md)                              |          Floor          |
| 03  |                     Začínáme                              |                             Přístupnost                              | Naučit se základy přístupnosti na webu                                                                                       |                       [Základy přístupnosti](./1-getting-started-lessons/3-accessibility/README.md)                             |       Christopher       |
| 04  |                        Základy JS                         |                         Datové typy v JavaScriptu                    | Základy datových typů v JavaScriptu                                                                                           |                                       [Datové typy](./2-js-basics/1-data-types/README.md)                                      |         Jasmine         |
| 05  |                        Základy JS                         |                         Funkce a metody                               | Naučte se o funkcích a metodách pro řízení logiky aplikace                                                                   |                              [Funkce a metody](./2-js-basics/2-functions-methods/README.md)                                     | Jasmine a Christopher   |
| 06  |                        Základy JS                         |                        Rozhodování v JS                              | Naučte se vytvářet podmínky ve vašem kódu pomocí rozhodovacích metod                                                         |                                 [Rozhodování](./2-js-basics/3-making-decisions/README.md)                                    |         Jasmine         |
| 07  |                        Základy JS                         |                            Pole a smyčky                              | Práce s daty pomocí polí a smyček v JavaScriptu                                                                               |                                   [Pole a smyčky](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine         |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)       |                            HTML v praxi                              | Vytvoření HTML pro online terárium, se zaměřením na rozvržení                                                                |                                 [Úvod do HTML](./3-terrarium/1-intro-to-html/README.md)                                     |           Jen           |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)       |                            CSS v praxi                               | Vytvoření CSS pro stylování online terária, se zaměřením na základy CSS včetně responzivního designu                          |                                  [Úvod do CSS](./3-terrarium/2-intro-to-css/README.md)                                      |           Jen           |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)  |                 JavaScript Closures, manipulace s DOM                | Vytvoření JavaScriptu pro funkční terárium s drag/drop rozhraním, se zaměřením na uzávěry (closures) a manipulaci s DOM       |                  [JavaScript Closures, manipulace s DOM](./3-terrarium/3-intro-to-DOM-and-closures/README.md)               |           Jen           |
| 11  |          [Typing Game](./4-typing-game/solution/README.md) |                          Vytvoření hry psaní na klávesnici          | Naučit se používat události klávesnice k řízení logiky vaší JavaScript aplikace                                               |                                [Programování řízené událostmi](./4-typing-game/typing-game/README.md)                         |       Christopher       |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                          Práce s prohlížeči                         | Naučit se, jak prohlížeče fungují, jejich historii a jak vytvořit první prvky rozšíření pro prohlížeč                         |                               [O prohlížečích](./5-browser-extension/1-about-browsers/README.md)                            |           Jen           |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | Vytváření formuláře, volání API a ukládání proměnných do lokálního úložiště | Vytvoření JavaScriptových prvků rozšíření pro volání API a práci s proměnnými uloženými v lokálním úložišti                   |                [API, formuláře a lokální úložiště](./5-browser-extension/2-forms-browsers-local-storage/README.md)            |           Jen           |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          Procesy na pozadí v prohlížeči, výkon webu                  | Použití background procesů pro správu ikony rozšíření; naučit se o výkonu webu a optimalizacích                               |             [Pozadí a výkon](./5-browser-extension/3-background-tasks-and-performance/README.md)                       |           Jen           |
| 15  |           [Space Game](./6-space-game/solution/README.md)   |             Pokročilejší vývoj her v JavaScriptu                     | Naučit se o dědičnosti pomocí tříd a kompozice a o vzoru Pub/Sub, jako příprava na tvorbu hry                                 |                      [Úvod do pokročilého vývoje her](./6-space-game/1-introduction/README.md)                                |          Chris          |
| 16  |           [Space Game](./6-space-game/solution/README.md)   |                           Kreslení na plátno                         | Naučit se o Canvas API, používaném ke kreslení na obrazovku                                                                  |                                [Kreslení na plátno](./6-space-game/2-drawing-to-canvas/README.md)                        |          Chris          |
| 17  |           [Space Game](./6-space-game/solution/README.md)   |                   Pohyb prvků po obrazovce                           | Objevte, jak mohou prvky získat pohyb pomocí kartézských souřadnic a Canvas API                                              |                           [Pohyb prvků](./6-space-game/3-moving-elements-around/README.md)                                |          Chris          |
| 18  |           [Space Game](./6-space-game/solution/README.md)   |                          Detekce kolizí                              | Umožnit prvkům kolidovat a reagovat na sebe navzájem pomocí stisků kláves a zároveň poskytnout funkci cooldownu pro výkon hry |                              [Detekce kolizí](./6-space-game/4-collision-detection/README.md)                            |          Chris          |
| 19  |           [Space Game](./6-space-game/solution/README.md)   |                             Udržování skóre                           | Provádění matematických výpočtů na základě stavu hry a výkonu                                                                |                                    [Udržování skóre](./6-space-game/5-keeping-score/README.md)                            |          Chris          |
| 20  |           [Space Game](./6-space-game/solution/README.md)   |                     Ukončení a restart hry                           | Naučit se ukončovat a restartovat hru včetně uvolnění zdrojů a resetování proměnných                                          |                                [Konečná podmínka](./6-space-game/6-end-condition/README.md)                             |          Chris          |
| 21  |         [Banking App](./7-bank-project/solution/README.md)  |                 HTML šablony a routování ve webové aplikaci           | Naučit se vytvářet strukturu vícestránkového webu pomocí routování a HTML šablon                                              |                            [HTML šablony a routování](./7-bank-project/1-template-route/README.md)                           |          Yohan          |
| 22  |         [Banking App](./7-bank-project/solution/README.md)  |                  Vytvoření přihlašovacího a registračního formuláře  | Naučit se vytvářet formuláře a zpracovávat validační rutiny                                                                   |                                           [Formuláře](./7-bank-project/2-forms/README.md)                                   |          Yohan          |
| 23  |         [Banking App](./7-bank-project/solution/README.md)  |                   Způsoby získávání a používání dat                   | Jak data proudí ve vaší aplikaci, jak je získávat, ukládat a likvidovat                                                        |                                            [Data](./7-bank-project/3-data/README.md)                                    |          Yohan          |
| 24  |         [Banking App](./7-bank-project/solution/README.md)  |                      Koncepty správy stavu                           | Naučit se, jak si aplikace uchovává stav a jak ho programově spravovat                                                         |                                [Správa stavu](./7-bank-project/4-state-management/README.md)                            |          Yohan          |
| 25 | [Browser/VScode Code](../../8-code-editor) | Práce s VScode | Naučte se používat kódový editor| [Používání kódového editoru VScode](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | Práce s AI | Naučte se vytvořit vlastního AI asistenta | [Projekt AI Assistant](./9-chat-project/README.md) | Chris |

## 🏫 Pedagogika

Naše učební plán je navržen se dvěma klíčovými pedagogickými principy:
* učení založené na projektech
* časté kvízy

Program učí základy JavaScriptu, HTML a CSS, stejně jako nejnovější nástroje a techniky používané dnešními webovými vývojáři. Studenti budou mít příležitost získat praktické zkušenosti vytvořením hry na psaní na klávesnici, virtuálního terária, ekologicky šetrného rozšíření prohlížeče, hry ve stylu Space Invader a bankovní aplikace pro firmy. Na konci série získají studenti solidní porozumění webovému vývoji.

> 🎓 První lekce tohoto učebního plánu si můžete projít i jako [Učební cestu](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) na Microsoft Learn!

Díky sladění obsahu s projekty je proces pro studenty více poutavý a zlepšuje se zapamatování konceptů. Také jsme napsali několik úvodních lekcí o základech JavaScriptu, které představují koncepty, doplněné videem ze série "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)", jejíž autoři přispěli k tomuto učebnímu plánu.

Navíc nízkoryzový kvíz před hodinou nastavuje záměr studenta k učení daného tématu, zatímco druhý kvíz po hodině zajišťuje další zapamatování. Tento učební plán je navržen flexibilně a zábavně a může být absolvován celý nebo částečně. Projekty začínají malé a postupně se během 12týdenního cyklu stávají složitějšími.

I když jsme záměrně neuváděli frameworky JavaScriptu, abychom se soustředili na základní dovednosti nutné jako webový vývojář před přijetím frameworku, dalším dobrým krokem k dokončení tohoto učebního plánu je naučit se Node.js prostřednictvím jiné série videí: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Navštivte naše [Kodex chování](CODE_OF_CONDUCT.md) a [Příspěvky](CONTRIBUTING.md) pravidla. Vítáme vaše konstruktivní zpětné vazby!


## 🧭 Offline přístup

Tuto dokumentaci si můžete prohlížet i offline pomocí [Docsify](https://docsify.js.org/#/). Zforkujte toto repo, [nainstalujte Docsify](https://docsify.js.org/#/quickstart) na váš počítač a poté v kořenové složce tohoto repozitáře napište `docsify serve`. Webová stránka poběží na portu 3000 na vašem localhostu: `localhost:3000`.

## 📘 PDF

PDF všech lekcí naleznete [zde](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Další kurzy
Náš tým vytváří další kurzy! Podívejte se:

<!-- CO-OP TRANSLATOR OTHER COURSES START -->
### LangChain
[![LangChain4j pro začátečníky](https://img.shields.io/badge/LangChain4j%20for%20Beginners-22C55E?style=for-the-badge&&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchain4j-for-beginners)
[![LangChain.js pro začátečníky](https://img.shields.io/badge/LangChain.js%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://aka.ms/langchainjs-for-beginners?WT.mc_id=m365-94501-dwahlin)
[![LangChain pro začátečníky](https://img.shields.io/badge/LangChain%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=0553D6)](https://github.com/microsoft/langchain-for-beginners?WT.mc_id=m365-94501-dwahlin)
---

### Azure / Edge / MCP / Agenti
[![AZD pro začátečníky](https://img.shields.io/badge/AZD%20for%20Beginners-0078D4?style=for-the-badge&labelColor=E5E7EB&color=0078D4)](https://github.com/microsoft/AZD-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Edge AI pro začátečníky](https://img.shields.io/badge/Edge%20AI%20for%20Beginners-00B8E4?style=for-the-badge&labelColor=E5E7EB&color=00B8E4)](https://github.com/microsoft/edgeai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![MCP pro začátečníky](https://img.shields.io/badge/MCP%20for%20Beginners-009688?style=for-the-badge&labelColor=E5E7EB&color=009688)](https://github.com/microsoft/mcp-for-beginners?WT.mc_id=academic-105485-koreyst)
[![AI agenti pro začátečníky](https://img.shields.io/badge/AI%20Agents%20for%20Beginners-00C49A?style=for-the-badge&labelColor=E5E7EB&color=00C49A)](https://github.com/microsoft/ai-agents-for-beginners?WT.mc_id=academic-105485-koreyst)

---

### Série Generativní AI
[![Generativní AI pro začátečníky](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generativní AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generativní AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generativní AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---

### Základní vzdělávání
[![ML pro začátečníky](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Data Science pro začátečníky](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI pro začátečníky](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Kybernetická bezpečnost pro začátečníky](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Webový vývoj pro začátečníky](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT pro začátečníky](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![Vývoj XR pro začátečníky](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---

### Série Copilot
[![Copilot pro AI párové programování](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot pro C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Dobrodružství Copilot](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## Získání pomoci

Pokud máte potíže nebo jakékoli dotazy ohledně tvorby AI aplikací, připojte se ke společné diskusi s ostatními studenty a zkušenými vývojáři o MCP. Je to podpůrná komunita, kde jsou otázky vítány a znalosti jsou volně sdíleny.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

Pokud máte zpětnou vazbu k produktu nebo narazíte na chyby při vývoji, navštivte:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## Licence

Tento repozitář je licencován pod licencí MIT. Pro více informací si přečtěte soubor [LICENSE](../../LICENSE).

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí automatické překladové služby [Co-op Translator](https://github.com/Azure/co-op-translator). Přestože usilujeme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Originální dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro kritické informace doporučujeme využít profesionální lidský překlad. Nejsme odpovědní za jakékoli nedorozumění nebo nesprávné výklady vzniklé použitím tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->