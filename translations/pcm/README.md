# Web Development for Beginners - A Curriculum

Learn di fundamentals of web development wit our 12-week comprehensive course by Microsoft Cloud Advocates. Each of di 24 lessons go deep inside JavaScript, CSS, and HTML wit hand-on projects like terrariums, browser extensions, and space games. Join quizzes, discussions, and practical assignments. Make your skills better and make you sabi more wit our correct project-based way to learn. Start your coding journey today!

Join di Azure AI Foundry Discord and meet experts and other developers dem.

Follow these steps to start to use these resources:
1. **Fork di Repository**: Click [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **Clone di Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Join The Azure AI Foundry Discord and meet experts and other developers dem**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Multi-Language Support

#### Supported via GitHub Action (Automated & Always Up-to-Date)

> **Prefer to Clone Locally?**
>
> This repository get over 50 language translations wey increase di download size well-well. To clone without translations, use sparse checkout:
>
> **Bash / macOS / Linux:**
> ```bash
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone '/*' '!translations' '!translated_images'
> ```
>
> **CMD (Windows):**
> ```cmd
> git clone --filter=blob:none --sparse https://github.com/microsoft/Web-Dev-For-Beginners.git
> cd Web-Dev-For-Beginners
> git sparse-checkout set --no-cone "/*" "!translations" "!translated_images"
> ```
>
> This one go give you everything you need to complete di course wit faster download.

**If you want make we add more translations, di languages wey we support dey here. [here](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _You student?_ 

Visit [**Student Hub page**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon) wey go get beginning resources, student packs and even chance to collect free certificate voucher. Na page for you to bookmark and check from time to time as we dey change content monthly.

### 📣 Announcement - New GitHub Copilot Agent mode challenges to complete!

New Challenge don add, look for "GitHub Copilot Agent Challenge 🚀" inside plenty chapters. Na new challenge for you to complete using GitHub Copilot and Agent mode. If you never use Agent mode before e fit no only generate text but fit also create and edit files, run commands and more.

### 📣 Announcement - _New Project to build using Generative AI_ 

New AI Assistant project just add, try am [project](./9-chat-project/README.md)

### 📣 Announcement - _New Curriculum_ on Generative AI for JavaScript just released

No miss our new Generative AI curriculum!

Visit [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) to start!

- Lessons wey cover everything from basics to RAG.
- Talk with historical characters using GenAI and our companion app.
- Fun and interesting story, you go like time travel!

Each lesson get assignment to complete, knowledge check and challenge wey go guide you for di learning of topics like:
- Prompting and prompt engineering
- Text and image app generation
- Search apps

Visit [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) to start!

## 🌱 Getting Started

> **Teachers**, we don [include some suggestions](for-teachers.md) on how to use this curriculum. We go like hear your feedback [for our discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Learners](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, for every lesson, start wit pre-lecture quiz come follow wit reading the lecture material, complete the different activities and check your understanding with post-lecture quiz.

To make your learning better, join with your friends to work on the projects together! Discussions dey encouraged for our [discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions) where our moderators go dey ready to answer your questions.

To increase your education, we highly recommend to explore [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) for more study materials.

### 📋 Setting up your environment

This curriculum get development environment wey ready to go! As you dey start, you fit choose to run the curriculum for [Codespace](https://github.com/features/codespaces/) (_browser-based, no install needed environment_), or locally for your computer using text editor like [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Create your repository
To make e easy for you to save your work, e good make you create your own copy of this repository. You fit do am by clicking **Use this template** button dey top of the page. This go create new repository for your GitHub account with copy of the curriculum.

Follow these steps:
1. **Fork di Repository**: Click di "Fork" button for top-right corner of this page.
2. **Clone di Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Running curriculum in Codespace

Inside your copy of this repository wey you create, click **Code** button then select **Open with Codespaces**. This go create new Codespace for you to work inside.

#### Running curriculum locally on your computer

To run this curriculum for your computer, you need text editor, browser and command line tool. Our first lesson, [Introduction to Programming Languages and Tools of the Trade](../../1-getting-started-lessons/1-intro-to-programming-languages), go show you different options for each of these tools to choose which one work best for you.

We recommend to use [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) as your editor wey get built-in [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). You fit download Visual Studio Code [here](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).
1. Clone your repository for your computer. You fit do dis by clicking the **Code** button and copy di URL:

    [CodeSpace](./images/createcodespace.png)

    Den, open [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) for [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) and run dis command, replace `<your-repository-url>` wit di URL wey you just copy:

    ```bash 
    git clone <your-repository-url>
    ```

2. Open di folder for Visual Studio Code. You fit do dis by clicking **File** > **Open Folder** and select di folder wey you just clone.

>  Recommended Visual Studio Code extensions:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - to preview HTML pages within Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - to help you write code faster

## 📂 Each lesson includes:

- optional sketchnote
- optional supplemental video
- pre-lesson warmup quiz
- written lesson
- for project-based lessons, step-by-step guides on how to build the project
- knowledge checks
- a challenge
- supplemental reading
- assignment
- [post-lesson quiz](https://ff-quizzes.netlify.app/web/)

> **A note about quizzes**: All quizzes dey inside di Quiz-app folder, 48 total quizzes wey get three questions each. Dem dey available [here](https://ff-quizzes.netlify.app/web/) di quiz app fit run locally or e fit deployed to Azure; follow di instruction wey dey di `quiz-app` folder.

## 🗃️ Lessons

|     |                       Project Name                       |                            Concepts Taught                             | Learning Objectives                                                                                                                 |                                                         Linked Lesson                                                          |         Author          |
| :-: | :------------------------------------------------------: | :--------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Getting Started                      |           Introduction to Programming and Tools of the Trade           | Learn di basic underpinnings behind most programming languages and about software wey dey help professional developers do their jobs | [Intro to Programming Languages and Tools of the Trade](./1-getting-started-lessons/1-intro-to-programming-languages/README.md) |         Jasmine         |
| 02  |                     Getting Started                      |             Basics of GitHub, includes working with a team             | How to use GitHub for your project, how to collaborate wit others for code base                                                    |                            [Intro to GitHub](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor          |
| 03  |                     Getting Started                      |                             Accessibility                              | Learn di basics of web accessibility                                                                                               |                       [Accessibility Fundamentals](./1-getting-started-lessons/3-accessibility/README.md)                       |       Christopher       |
| 04  |                        JS Basics                         |                         JavaScript Data Types                          | Di basics of JavaScript data types                                                                                                 |                                       [Data Types](./2-js-basics/1-data-types/README.md)                                        |         Jasmine         |
| 05  |                        JS Basics                         |                         Functions and Methods                          | Learn about functions and methods to manage application logic flow                                                                  |                              [Functions and Methods](./2-js-basics/2-functions-methods/README.md)                               | Jasmine and Christopher |
| 06  |                        JS Basics                         |                        Making Decisions with JS                        | Learn how to create conditions for your code using decision-making methods                                                           |                                 [Making Decisions](./2-js-basics/3-making-decisions/README.md)                                  |         Jasmine         |
| 07  |                        JS Basics                         |                            Arrays and Loops                            | Work with data using arrays and loops in JavaScript                                                                                 |                                   [Arrays and Loops](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine         |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)       |                            HTML in Practice                            | Build di HTML to create online terrarium, focus on building layout                                                                  |                                 [Introduction to HTML](./3-terrarium/1-intro-to-html/README.md)                                 |           Jen           |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)       |                            CSS in Practice                             | Build di CSS to style di online terrarium, focus on di basics of CSS including making di page responsive                            |                                  [Introduction to CSS](./3-terrarium/2-intro-to-css/README.md)                                  |           Jen           |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)            |                 JavaScript Closures, DOM manipulation                  | Build di JavaScript to make di terrarium function as drag/drop interface, focus on closures and DOM manipulation                     |                  [JavaScript Closures, DOM manipulation](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                   |           Jen           |
| 11  |          [Typing Game](./4-typing-game/solution/README.md)          |                          Build a Typing Game                           | Learn how to use keyboard events to drive di logic of your JavaScript app                                                           |                                [Event-Driven Programming](./4-typing-game/typing-game/README.md)                                |       Christopher       |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                         Working with Browsers                          | Learn how browsers work, their history, and how to scaffold di first elements of browser extension                                  |                               [About Browsers](./5-browser-extension/1-about-browsers/README.md)                                |           Jen           |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | Building a form, calling an API and storing variables in local storage | Build di JavaScript elements of your browser extension to call API using variables wey dem store inside local storage             |                [APIs, Forms, and Local Storage](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen           |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          Background processes in the browser, web performance          | Use di browser background processes to manage di extension’s icon; learn about web performance and some optimizations to make       |             [Background Tasks and Performance](./5-browser-extension/3-background-tasks-and-performance/README.md)              |           Jen           |
| 15  |           [Space Game](./6-space-game/solution/README.md)           |             More Advanced Game Development with JavaScript             | Learn about Inheritance using both Classes and Composition and di Pub/Sub pattern, to prepare for building game                    |                      [Introduction to Advanced Game Development](./6-space-game/1-introduction/README.md)                       |          Chris          |
| 16  |           [Space Game](./6-space-game/solution/README.md)           |                           Drawing to canvas                            | Learn about di Canvas API, wey dem dey use to draw elements for screen                                                             |                                [Drawing to Canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris          |
| 17  |           [Space Game](./6-space-game/solution/README.md)           |                   Moving elements around the screen                    | Discover how elements fit get motion using cartesian coordinates and di Canvas API                                                  |                           [Moving Elements Around](./6-space-game/3-moving-elements-around/README.md)                           |          Chris          |
| 18  |           [Space Game](./6-space-game/solution/README.md)           |                          Collision detection                           | Make elements collide and react to each other using keypresses and provide cooldown function to make sure say di game perform well |                              [Collision Detection](./6-space-game/4-collision-detection/README.md)                              |          Chris          |
| 19  |           [Space Game](./6-space-game/solution/README.md)           |                             Keeping score                              | Perform math calculations based on di game’s status and performance                                                                |                                    [Keeping Score](./6-space-game/5-keeping-score/README.md)                                    |          Chris          |
| 20  |           [Space Game](./6-space-game/solution/README.md)           |                     Ending and restarting the game                     | Learn about ending and restarting di game, including cleaning up assets and resetting variable values                              |                                [The Ending Condition](./6-space-game/6-end-condition/README.md)                                 |          Chris          |
| 21  |         [Banking App](./7-bank-project/solution/README.md)          |                 HTML Templates and Routes in a Web App                 | Learn how to create scaffold of multipage website architecture using routing and HTML templates                                     |                            [HTML Templates and Routes](./7-bank-project/1-template-route/README.md)                             |          Yohan          |
| 22  |         [Banking App](./7-bank-project/solution/README.md)          |                  Build a Login and Registration Form                   | Learn about building forms and handling validation routines                                                                          |                                           [Forms](./7-bank-project/2-forms/README.md)                                           |          Yohan          |
| 23  |         [Banking App](./7-bank-project/solution/README.md)          |                   Methods of Fetching and Using Data                   | How data dey flow in and out of your app, how to fetch am, store am, and dispose am                                                 |                                            [Data](./7-bank-project/3-data/README.md)                                            |          Yohan          |
| 24  |         [Banking App](./7-bank-project/solution/README.md)          |                      Concepts of State Management                      | Learn how your app retain state and how to manage am programmatically                                                              |                                [State Management](./7-bank-project/4-state-management/README.md)                                |          Yohan          |
| 25 | [Browser/VScode Code](../../8-code-editor) | Working with VScode | Learn how to Using a code editor| [Use VScode Code Editor](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | Working with AI | Learn how to build your own AI assistant | [AI Assistant project](./9-chat-project/README.md) | Chris |

## 🏫 Pedagogy

Our curriculum design get two major pedagogical principles wey dey mind:
* project-based learning
* frequent quizzes

Di program dey teach fundamentals of JavaScript, HTML, and CSS, as well as di latest tools and techniques wey today's web developers dey use. Students go get chance to develop hands-on experience by building typing game, virtual terrarium, eco-friendly browser extension, space-invader-style game, and banking app for business. By end of di series, students go get solid understanding of web development.

> 🎓 You fit take di first few lessons inside this curriculum as [Learn Path](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) for Microsoft Learn!

By making sure say content match projects, di process dey more interesting for students and dem go remember di concepts better. We also write some starter lessons for JavaScript basics to introduce concepts, paired with video from "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)" video tutorials collection, some authors for am help write dis curriculum.

Plus, low-stakes quiz before class set student intention to learn topic, while second quiz after class dey help retention. This curriculum design to be flexible and fun and students fit take am all or part. Projects start small and dey increase in complexity by end of 12-week cycle.

Even though we purposely no add JavaScript frameworks to focus on basic skills wey web developer need before e start to use framework, the next step after dis curriculum na to learn Node.js using another video collection: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Visit our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing](CONTRIBUTING.md) guidelines. We dey welcome your constructive feedback!

## 🧭 Offline access

You fit run dis documentation offline by using [Docsify](https://docsify.js.org/#/). Fork dis repo, [install Docsify](https://docsify.js.org/#/quickstart) for your local machine, then for di root folder of dis repo, type `docsify serve`. Di website go dey served for port 3000 on your localhost: `localhost:3000`.

## 📘 PDF
A PDF of all di lessons fit waka find [here](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Odda Kurs

Our team dey produce oda kurs dem! Check am out:

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

## Getting Help

If you jam or get any question about how to build AI apps. Join other learners and experienced developers to yan about MCP. Na supportive community wey dey open for questions and wey knowledge dey share freely.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

If you get product feedback or error while you dey build, waka go:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## License

Dis repository dey licensed under di MIT license. See di [LICENSE](../../LICENSE) file for more info.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis dokument don get translate wit AI translation service wey dem call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automated translations fit get mistake or no too correct. Di original dokument wey dey im original language na di true correct source. For important matter dem, e good make professional human translator do am. We no go nor carry any kain blame if person no understand well or if e misinterpret di translation wey we provide.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->