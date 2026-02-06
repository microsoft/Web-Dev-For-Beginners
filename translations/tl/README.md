# Web Development para sa mga Baguhan - Isang Kurikulum

Matutunan ang mga pundasyon ng web development sa aming 12-linggong komprehensibong kurso mula sa Microsoft Cloud Advocates. Bawat isa sa 24 na aralin ay sumisid sa JavaScript, CSS, at HTML sa pamamagitan ng mga hands-on na proyekto tulad ng terrariums, browser extensions, at space games. Makilahok sa mga kuis, talakayan, at praktikal na mga takdang-aralin. Pagandahin ang iyong mga kasanayan at i-optimize ang iyong kaalaman gamit ang aming epektibong pedagohiya na nakabatay sa proyekto. Simulan ang iyong paglalakbay sa pag-cocode ngayon!

Sumali sa Azure AI Foundry Discord Community

Sundin ang mga hakbang na ito upang makapagsimula gamit ang mga resources na ito:
1. **I-fork ang Repository**: I-click [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **I-clone ang Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Sumali sa Azure AI Foundry Discord at makipagkilala sa mga eksperto at kapwa developer**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Suporta para sa Maraming Wika

#### Sinusuportahan sa pamamagitan ng GitHub Action (Awtomatiko at Laging Napapanahon)

> **Mas gusto bang mag-clone nang lokal?**

> Kasama sa repository na ito ang 50+ na pagsasalin sa iba't ibang wika na nagpapalaki nang malaki sa laki ng pag-download. Para mag-clone nang walang mga pagsasalin, gamitin ang sparse checkout:
> ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
> Magbibigay ito sa'yo ng lahat ng kailangan mo upang matapos ang kurso nang mas mabilis ang pag-download.

**Kung nais mo ng karagdagang suporta sa mga wikang pagsasalin, nakalista ito [dito](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _Estudyante ka ba?_

Bisitahin ang [**Student Hub page**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon) kung saan makakakita ka ng mga panimulang resource, Student packs, at mga paraan upang makakuha ng libreng voucher para sa sertipiko. Ito ang pahina na nais mong i-bookmark at balikan paminsan-minsan dahil palagi kaming nagbabago ng nilalaman buwan-buwan.

### 📣 Anunsyo - Mga bagong hamon ng GitHub Copilot Agent mode na dapat tapusin!

May bagong hamon na idinagdag, hanapin ang "GitHub Copilot Agent Challenge 🚀" sa karamihan ng mga kabanata. Ito ay isang bagong hamon na dapat mong tapusin gamit ang GitHub Copilot at Agent mode. Kung hindi mo pa nagagamit ang Agent mode, kaya nitong hindi lamang gumawa ng teksto kundi makagawa at mag-edit ng mga file, magpatakbo ng mga command, at higit pa.

### 📣 Anunsyo - _Bagong Proyekto gamit ang Generative AI_ 

May bagong AI Assistant project na idinagdag, tingnan ito [project](./9-chat-project/README.md)

### 📣 Anunsyo - _Bagong Kurikulum_ tungkol sa Generative AI para sa JavaScript ay inilabas na

Huwag palampasin ang aming bagong Generative AI curriculum!

Bisitahin ang [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) upang makapagsimula!

- Mga aralin na sumasaklaw sa lahat mula sa mga batayan hanggang RAG.
- Makipag-ugnayan sa mga makasaysayang karakter gamit ang GenAI at ang aming companion app.
- Masaya at nakakaaliw na salaysay, para kang naglalakbay sa oras!

Bawat aralin ay may kasamang takdang-aralin, pagsusuri ng kaalaman, at hamon na gagabay sa iyong pag-aaral ng mga paksang tulad ng:
- Prompting at prompt engineering
- Pagbuo ng text at image app
- Mga search app

Bisitahin ang [https://aka.ms/genai-js-course](../../[https:/aka.ms/genai-js-course) upang makapagsimula!



## 🌱 Pagsisimula

> **Mga guro**, mayroon kaming [ilang mungkahi](for-teachers.md) kung paano gagamitin ang kurikulum na ito. Gusto naming marinig ang inyong feedback [sa aming discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Mga mag-aaral](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, sa bawat aralin, simulan sa pamamagitan ng pre-lecture quiz at sundan ito sa pagbabasa ng materyal ng lektura, pagtapos ng mga iba't ibang aktibidad, at suriin ang iyong pang-unawa gamit ang post-lecture quiz.

Upang mapahusay ang iyong karanasan sa pag-aaral, kumonekta sa iyong mga kaklase upang magtrabaho nang magkakasama sa mga proyekto! Inaanyayahan ang mga talakayan sa aming [discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions) kung saan ang aming mga moderator ay handang sagutin ang iyong mga katanungan.

Upang higit pang mapalawak ang iyong edukasyon, lubos naming inirerekumenda na tuklasin ang [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) para sa karagdagang mga materyales sa pag-aaral.

### 📋 Pagset-up ng iyong kapaligiran

Ang kurikulum na ito ay may handang development environment! Sa pagsisimula mo, maaari kang pumili na patakbuhin ang kurikulum gamit ang [Codespace](https://github.com/features/codespaces/) (_isang browser-based na kapaligiran na hindi kailangan ng install_), o lokal sa iyong kompyuter gamit ang text editor tulad ng [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Gumawa ng iyong repository
Para madali mong ma-save ang iyong trabaho, inirerekomenda namin na gumawa ka ng sariling kopya ng repository na ito. Magagawa mo ito sa pamamagitan ng pag-click sa **Use this template** na button sa taas ng pahina. Ito ay gagawa ng bagong repository sa iyong GitHub account na may kopya ng kurikulum.

Sundin ang mga hakbang na ito:
1. **I-fork ang Repository**: I-click ang "Fork" na button sa kanang-itaas na sulok ng pahinang ito.
2. **I-clone ang Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Pagpatakbo ng kurikulum sa isang Codespace

Sa iyong kopya ng repository na ginawa mo, i-click ang **Code** na button at piliin ang **Open with Codespaces**. Ito ay gagawa ng bagong Codespace para sa iyong pagtatrabaho.

![Codespace](../../translated_images/tl/createcodespace.0238bbf4d7a8d955.webp)

#### Pagpatakbo ng kurikulum lokal sa iyong kompyuter

Upang patakbuhin ang kurikulum na ito lokal sa iyong kompyuter, kakailanganin mo ng text editor, browser at command line tool. Ang aming unang aralin, [Introduction to Programming Languages and Tools of the Trade](../../1-getting-started-lessons/1-intro-to-programming-languages), ay gagabay sa'yo sa iba't ibang opsyon para sa bawat isa sa mga tool na ito para mapili mo kung ano ang pinakamainam para sa'yo.

Inirerekomenda namin ang paggamit ng [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) bilang iyong editor, na may built-in na [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). Maaari mong i-download ang Visual Studio Code [dito](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

1. I-clone ang iyong repository sa iyong kompyuter. Magagawa mo ito sa pamamagitan ng pag-click sa **Code** na button at pagkopya ng URL:

    [CodeSpace](./images/createcodespace.png)
    Pagkatapos, buksan ang [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) sa loob ng [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) at patakbuhin ang sumusunod na utos, palitan ang `<your-repository-url>` ng URL na kakopya mo lang:

    ```bash 
    git clone <your-repository-url>
    ```

2. Buksan ang folder sa Visual Studio Code. Maaari mo itong gawin sa pamamagitan ng pag-click sa **File** > **Open Folder** at piliin ang folder na kaklone mo lang.


>  Inirerekomendang mga extension para sa Visual Studio Code:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - upang makita ang preview ng mga HTML na pahina sa loob ng Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - upang tulungan kang magsulat ng code nang mas mabilis

## 📂 Kasama sa bawat aralin:

- opsyonal na sketchnote
- opsyonal na karagdagang video
- paunang warmup quiz bago ang aralin
- nakasulat na aralin
- para sa mga aralin na nakabatay sa proyekto, may step-by-step na gabay kung paano bumuo ng proyekto
- pagsubok ng kaalaman
- isang hamon
- dagdag na babasahin
- takdang-aralin
- [post-lesson quiz](https://ff-quizzes.netlify.app/web/)

> **Isang tala tungkol sa mga quiz**: Lahat ng quiz ay nasa Quiz-app folder, 48 na kabuuang quiz na may tig-tatlong tanong bawat isa. Makukuha ang mga ito [dito](https://ff-quizzes.netlify.app/web/). Maaaring patakbuhin ang quiz app nang lokal o i-deploy sa Azure; sundin ang mga tagubilin sa `quiz-app` folder.

## 🗃️ Mga Aralin

|     |                       Pangalan ng Proyekto                      |                            Mga Konseptong Itinuro                          | Mga Layunin sa Pagkatuto                                                                                                             |                                                         Linked Lesson                                                          |         May-akda         |
| :-: | :--------------------------------------------------------------: | :-----------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------: |
| 01  |                     Getting Started                              |           Panimula sa Programming at Mga Kasangkapan                      | Matutuhan ang mga pangunahing pundasyon sa likod ng karamihang programming languages at tungkol sa software na tumutulong sa mga propesyonal na developer | [Intro to Programming Languages and Tools of the Trade](./1-getting-started-lessons/1-intro-to-programming-languages/README.md) |         Jasmine          |
| 02  |                     Getting Started                              |             Mga Pangunahing Kaalaman sa GitHub, kabilang ang pagtatrabaho sa isang koponan             | Paano gamitin ang GitHub sa iyong proyekto, kung paano makipagtulungan sa iba sa isang code base                                     |                            [Intro to GitHub](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor           |
| 03  |                     Getting Started                              |                             Accessibility                                 | Matutuhan ang mga pangunahing kaalaman sa web accessibility                                                                            |                       [Accessibility Fundamentals](./1-getting-started-lessons/3-accessibility/README.md)                       |       Christopher        |
| 04  |                        JS Basics                                 |                         JavaScript Data Types                            | Ang mga pangunahing tungkol sa mga uri ng data sa JavaScript                                                                          |                                       [Data Types](./2-js-basics/1-data-types/README.md)                                        |         Jasmine          |
| 05  |                        JS Basics                                 |                         Mga Function at Method                           | Matutuhan ang tungkol sa mga function at method para pamahalaan ang daloy ng lohika ng aplikasyon                                      |                              [Functions and Methods](./2-js-basics/2-functions-methods/README.md)                               | Jasmine at Christopher   |
| 06  |                        JS Basics                                 |                        Paggawa ng mga Desisyon gamit ang JS             | Matutuhan kung paano gumawa ng mga kundisyon sa iyong code gamit ang mga paraan ng paggawa ng desisyon                                 |                                 [Making Decisions](./2-js-basics/3-making-decisions/README.md)                                  |         Jasmine          |
| 07  |                        JS Basics                                 |                            Arrays at Loops                              | Gamitin ang mga data gamit ang arrays at loops sa JavaScript                                                                          |                                   [Arrays and Loops](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine          |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)             |                            HTML in Practice                             | Bumuo ng HTML para gumawa ng online terrarium, naka-focus sa paggawa ng layout                                                        |                                 [Introduction to HTML](./3-terrarium/1-intro-to-html/README.md)                                 |           Jen            |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)             |                            CSS in Practice                              | Gamitin ang CSS upang istilohan ang online terrarium, nakatuon sa mga pangunahing kaalaman sa CSS kabilang ang paggawa na responsive ng pahina |                                  [Introduction to CSS](./3-terrarium/2-intro-to-css/README.md)                                  |           Jen            |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)        |                 JavaScript Closures, DOM manipulation                   | Gumawa ng JavaScript upang paganahin ang terrarium bilang drag/drop interface, naka-focus sa closures at DOM manipulation             |                  [JavaScript Closures, DOM manipulation](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                   |           Jen            |
| 11  |          [Typing Game](./4-typing-game/solution/README.md)       |                          Gumawa ng Typing Game                          | Matutuhan kung paano gamitin ang keyboard events upang patakbuhin ang lohika ng iyong JavaScript app                                   |                                [Event-Driven Programming](./4-typing-game/typing-game/README.md)                                |       Christopher        |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                         Paggamit ng Browsers                           | Alamin kung paano gumagana ang mga browser, kanilang kasaysayan, at paano mag-scaffold ng mga unang elemento ng isang browser extension |                               [About Browsers](./5-browser-extension/1-about-browsers/README.md)                                |           Jen            |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | Paggawa ng form, pagtawag sa API at pagtatago ng mga variable sa lokal na storage | Gumawa ng mga JavaScript na elemento ng iyong browser extension upang tumawag sa isang API gamit ang mga variable na nakaimbak sa lokal na imbakan |                [APIs, Forms, and Local Storage](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen            |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          Mga background process sa browser, performance ng web          | Gamitin ang mga background process ng browser upang pamahalaan ang icon ng extension; matutuhan ang tungkol sa performance ng web at ilang mga optimisasyon upang mapabuti |             [Background Tasks and Performance](./5-browser-extension/3-background-tasks-and-performance/README.md)              |           Jen            |
| 15  |           [Space Game](./6-space-game/solution/README.md)         |            Mas Advanced na Pag-develop ng Game gamit ang JavaScript    | Matutuhan ang tungkol sa Inheritance gamit ang Classes at Composition pati na ang Pub/Sub na pattern, bilang paghahanda sa paggawa ng laro |                      [Introduction to Advanced Game Development](./6-space-game/1-introduction/README.md)                       |          Chris           |
| 16  |           [Space Game](./6-space-game/solution/README.md)         |                           Pagguhit sa canvas                           | Matutuhan ang Canvas API, ginagamit para mag-draw ng mga elemento sa screen                                                          |                                [Drawing to Canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris           |
| 17  |           [Space Game](./6-space-game/solution/README.md)         |                   Paggalaw ng mga elemento sa screen                   | Tuklasin kung paano mapapagalaw ang mga elemento gamit ang cartesian coordinates at Canvas API                                         |                           [Moving Elements Around](./6-space-game/3-moving-elements-around/README.md)                           |          Chris           |
| 18  |           [Space Game](./6-space-game/solution/README.md)         |                         Pag-detect ng banggaan                         | Gawin ang mga elemento na magbanggaan at mag-react sa isa't isa gamit ang mga keypress at magbigay ng cooldown function upang matiyak ang performance ng laro |                              [Collision Detection](./6-space-game/4-collision-detection/README.md)                              |          Chris           |
| 19  |           [Space Game](./6-space-game/solution/README.md)         |                             Pagpapanatili ng score                      | Isagawa ang mga kalkulasyon batay sa status at performance ng laro                                                                     |                                    [Keeping Score](./6-space-game/5-keeping-score/README.md)                                    |          Chris           |
| 20  |           [Space Game](./6-space-game/solution/README.md)         |                     Pagtatapos at pag-restart ng laro                  | Matutuhan ang tungkol sa pagtatapos at pag-restart ng laro, kabilang ang paglilinis ng mga assets at pag-reset ng mga variable       |                                [The Ending Condition](./6-space-game/6-end-condition/README.md)                                 |          Chris           |
| 21  |         [Banking App](./7-bank-project/solution/README.md)        |                 HTML Templates at Routes sa Web App                    | Matutuhan kung paano gumawa ng scaffold ng arkitektura ng isang multipage na website gamit ang routing at HTML templates             |                            [HTML Templates and Routes](./7-bank-project/1-template-route/README.md)                             |          Yohan           |
| 22  |         [Banking App](./7-bank-project/solution/README.md)        |                  Gumawa ng Login at Registration Form                   | Matutuhan ang tungkol sa paggawa ng mga form at paghawak ng mga validation routine                                                    |                                           [Forms](./7-bank-project/2-forms/README.md)                                           |          Yohan           |
| 23  |         [Banking App](./7-bank-project/solution/README.md)        |                   Mga Paraan ng Pagkuha at Paggamit ng Data            | Paano dumadaloy ang data papasok at palabas ng iyong app, paano ito kunin, itago, at itapon                                         |                                            [Data](./7-bank-project/3-data/README.md)                                            |          Yohan           |
| 24  |         [Banking App](./7-bank-project/solution/README.md)        |                      Mga Konsepto sa Pamamahala ng Estado              | Matutuhan kung paano ang iyong app ay nagtatago ng estado at kung paano pamahalaan ito gamit ang programa                             |                                [State Management](./7-bank-project/4-state-management/README.md)                                |          Yohan           |
| 25 | [Browser/VScode Code](../../8-code-editor) | Paggamit ng VScode | Matutuhan kung paano gumamit ng isang code editor| [Use VScode Code Editor](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | Paggamit ng AI | Matutuhan kung paano gumawa ng sarili mong AI assistant | [AI Assistant project](./9-chat-project/README.md) | Chris |

## 🏫 Pedagohiya

Ang aming kurikulum ay dinisenyo gamit ang dalawang pangunahing prinsipyo sa pagtuturo:
* pagkatuto na nakabatay sa proyekto
* madalas na mga pagsusulit

Itinuturo ng programa ang mga pundasyon ng JavaScript, HTML, at CSS, pati na rin ang mga pinakabagong kasangkapan at teknik na ginagamit ng mga web developer ngayon. Magkakaroon ang mga estudyante ng pagkakataong magpraktis sa pamamagitan ng paggawa ng isang typing game, virtual terrarium, eco-friendly browser extension, space-invader-style na laro, at isang banking app para sa mga negosyo. Sa pagtatapos ng serye, magkakaroon ang mga estudyante ng matibay na pag-unawa sa pagbuo ng web.

> 🎓 Maaari mong kunin ang unang ilang aralin sa kurikulum na ito bilang isang [Learn Path](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) sa Microsoft Learn!

Sa pagsisiguro na ang mga nilalaman ay naka-align sa mga proyekto, mas nagiging kapana-panabik ang proseso para sa mga estudyante at mas nalalago ang pagtanda ng mga konsepto. Nagsulat din kami ng ilang mga panimulang aralin sa mga batayang JavaScript upang ipakilala ang mga konsepto, kasabay ng video mula sa "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)" na koleksyon ng mga tutorial na video, na ilan sa mga may-akda ay nag-ambag sa kurikulum na ito.

Bilang karagdagan, isang low-stakes na pagsusulit bago ang klase ang nagtatakda ng layunin ng estudyante para matutunan ang isang paksa, habang ang pangalawang pagsusulit pagkatapos ng klase ay nagsisiguro ng karagdagang retention. Ang kurikulum na ito ay dinisenyo upang maging malikhain at masaya at maaaring kunin nang buo o bahagi lamang. Ang mga proyekto ay nagsisimula sa maliit at unti-unting lumalalim sa kahirapan sa pagtatapos ng 12-linggong siklo.

Habang sinadyang iniiwasan naming ipakilala ang mga JavaScript frameworks upang tumuon sa mga pangunahing kasanayan na kailangan bilang isang web developer bago mag-adopt ng framework, ang isang magandang susunod na hakbang upang tapusin ang kurikulum na ito ay ang pag-aaral tungkol sa Node.js sa pamamagitan ng isa pang koleksyon ng mga video: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Bisitahin ang aming [Code of Conduct](CODE_OF_CONDUCT.md) at ang [Contributing](CONTRIBUTING.md) na mga patnubay. Malugod naming tinatanggap ang iyong makatutulong na puna!


## 🧭 Offline na access

Maaari mong patakbuhin ang dokumentasyong ito nang offline gamit ang [Docsify](https://docsify.js.org/#/). I-fork ang repo na ito, [i-install ang Docsify](https://docsify.js.org/#/quickstart) sa iyong lokal na makina, at pagkatapos ay sa root folder ng repo na ito, i-type `docsify serve`. Ang website ay ihahain sa port 3000 sa iyong localhost: `localhost:3000`.

## 📘 PDF

Isang PDF ng lahat ng aralin ay maaaring makuha [dito](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Iba pang Mga Kurso
Ang aming koponan ay gumagawa ng iba pang mga kurso! Tingnan ang:

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
 
### Generative AI Series
[![Generative AI for Beginners](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generative AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generative AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generative AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---
 
### Core Learning
[![ML for Beginners](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Data Science for Beginners](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI for Beginners](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Cybersecurity for Beginners](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Web Dev for Beginners](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT for Beginners](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![XR Development for Beginners](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### Copilot Series
[![Copilot for AI Paired Programming](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot for C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Copilot Adventure](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## Pagkuha ng Tulong

Kung ikaw ay naipit o may mga tanong tungkol sa paggawa ng mga AI na app. Sumali sa mga kapwa mag-aaral at mga bihasang developer sa mga talakayan tungkol sa MCP. Ito ay isang sumusuportang komunidad kung saan malugod ang mga tanong at malayang ibinabahagi ang kaalaman.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

Kung mayroon kang puna sa produkto o mga error habang gumagawa, bisitahin ang:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## Lisensya

Ang repositoryong ito ay may lisensyang MIT. Tingnan ang [LICENSE](../../LICENSE) na file para sa karagdagang impormasyon.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Pahayag ng Paalala**:  
Ang dokumentong ito ay isinalin gamit ang serbisyong AI na pagsasalin na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't nagsusumikap kami para sa katumpakan, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o di-tumpak na impormasyon. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na pinagmumulan ng awtoridad. Para sa mahahalagang impormasyon, inirerekomenda ang propesyonal na pagsasaling pantao. Hindi kami mananagot sa anumang hindi pagkakaintindihan o maling interpretasyon na nagmumula sa paggamit ng pagsasaling ito.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->