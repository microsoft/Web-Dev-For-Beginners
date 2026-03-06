# Web Development for Beginners - A Curriculum

Learn di fundamentals of web development wit our 12-week complete course by Microsoft Cloud Advocates. Each of di 24 lessons dey dive into JavaScript, CSS, an HTML through hands-on projects like terrariums, browser extensions, an space games. Engage wit quizzes, discussions, an practical assignments. Enhance your skills an optimize your knowledge retention wit our effective project-based way wey we teach. Start your coding journey today!

Join di Azure AI Foundry Discord Community

Follow these steps to get started using these resources:
1. **Fork di Repository**: Click [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **Clone di Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Join The Azure AI Foundry Discord an meet experts an fellow developers**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 Multi-Language Support

#### Supported via GitHub Action (Automated & Always Up-to-Date)

> **Prefer to Clone Locally?**
>
> Dis repository get 50+ language translations wey dey increase di download size well well. To clone without translations, use sparse checkout:
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
> Dis go give you everything you need to complete di course wit better faster download.

**If you wan get more language translations wey support dey listed [here](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

#### 🧑‍🎓 _You be student?_

Visit [**Student Hub page**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon) wey you go find beginner resources, Student packs an even ways to get free certificate voucher. Dis na di page you for bookmark an dey check sometimes as we dey switch content monthly.

### 📣 Announcement - New GitHub Copilot Agent mode challenges to complete!

New Challenge add, look for "GitHub Copilot Agent Challenge 🚀" inside plenty chapters. Na new challenge you fit complete using GitHub Copilot an Agent mode. If you never use Agent mode before, e fit not only generate text but fit also create an edit files, run commands an more.

### 📣 Announcement - _New Project to build using Generative AI_ 

New AI Assistant project just add, check am [project](./9-chat-project/README.md)

### 📣 Announcement - _New Curriculum_ on Generative AI for JavaScript just release

No miss our new Generative AI curriculum!

Visit [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) to start!

- Lessons wey cover everything from basics go RAG.
- Interact wit historical characters usin GenAI an our companion app.
- Fun an engaging story, you go dey time travel!

Each lesson get assignment to complete, knowledge check an challenge to guide you for learning topics like:
- Prompting an prompt engineering
- Text an image app generation
- Search apps

Visit [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) to start!



## 🌱 Getting Started

> **Teachers**, wey don [put some suggestions](for-teachers.md) on how to use dis curriculum. We go like hear your feedback [for our discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[Learners](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, for every lesson, start wit pre-lecture quiz an follow through by reading di lecture material, complete di different activities an check your understanding wit di post-lecture quiz.

To better your learning experience, connect wit your peers make una work on di projects together! Discussions dem dey encouraged for our [discussion forum](https://github.com/microsoft/Web-Dev-For-Beginners/discussions) where our moderators go dey ready to answer your questions.

To go further your education, we highly recommend say you explore [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) for extra study materials.

### 📋 Setting up your environment

Dis curriculum get development environment ready! As you start you fit choose to run di curriculum in a [Codespace](https://github.com/features/codespaces/) (_na browser-based, no installation environment_), or locally for your computer using text editor like [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).

#### Create your repository
Make you fit save your work well well, e good make you create your own copy of this repository. You fit do am by clicking **Use this template** button wey dey top of di page. E go create new repository inside your GitHub account wit copy of di curriculum.

Follow these steps:
1. **Fork di Repository**: Click di "Fork" button wey dey top-right corner of this page.
2. **Clone di Repository**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Running di curriculum inside Codespace

For your copy of dis repository wey you create, click di **Code** button then select **Open with Codespaces**. E go create new Codespace for you work.

#### Running di curriculum locally on your computer

To run dis curriculum locally for your computer, you need text editor, browser an command line tool. Our first lesson, [Introduction to Programming Languages and Tools of the Trade](../../1-getting-started-lessons/1-intro-to-programming-languages), go show you different options for all these tools make you choose wetin best for you.

We recommend say you use [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) as your editor, wey get built-in [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon). You fit download Visual Studio Code [here](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon).
1. Copy yor repository go yor computer. You fit do dis by klik di **Code** button den copy di URL:

    [CodeSpace](./images/createcodespace.png)

    Den, open [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) for [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) den run dis command, change `<your-repository-url>` wit di URL wey you just copy:

    ```bash 
    git clone <your-repository-url>
    ```

2. Open di folder inside Visual Studio Code. You fit do dis by clicking **File** > **Open Folder** den select di folder wey you just clone.

>  Recommended Visual Studio Code extensions:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - to preview HTML pages inside Visual Studio Code
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - to help you write code quick quick

## 📂 Each lesson get:

- sketchnote if you want
- extra video if you want
- quiz to prepare for lesson
- di lesson wey dem write
- for project-based lessons, guide step by step how to build di project
- knowledge checks
- challenge
- extra reading
- assignment
- [post-lesson quiz](https://ff-quizzes.netlify.app/web/)

> **Note about quizzes**: All di quizzes dey inside Quiz-app folder, 48 quizzes total and every one get three questions. You fit find dem [here](https://ff-quizzes.netlify.app/web/) quiz app fit run for your own machine or you fit deploy am for Azure; follow instruction for di `quiz-app` folder.

## 🗃️ Lessons

|     |                       Project Name                       |                            Concepts Taught                             | Learning Objectives                                                                                                                 |                                                         Linked Lesson                                                          |         Author          |
| :-: | :------------------------------------------------------: | :--------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| 01  |                     Getting Started                      |           Introduction to Programming and Tools of the Trade           | Learn di basic foundation behind most programming languages and software wey dey help pro developers do their work                 | [Intro to Programming Languages and Tools of the Trade](./1-getting-started-lessons/1-intro-to-programming-languages/README.md) |         Jasmine         |
| 02  |                     Getting Started                      |             Basics of GitHub, dey include work with team               | How to use GitHub for your project, how to collaborate wit others for code base                                                     |                            [Intro to GitHub](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor          |
| 03  |                     Getting Started                      |                             Accessibility                              | Learn di basics of web accessibility                                                                                               |                       [Accessibility Fundamentals](./1-getting-started-lessons/3-accessibility/README.md)                       |       Christopher       |
| 04  |                        JS Basics                         |                         JavaScript Data Types                          | Di basics of JavaScript data types                                                                                                 |                                       [Data Types](./2-js-basics/1-data-types/README.md)                                        |         Jasmine         |
| 05  |                        JS Basics                         |                         Functions and Methods                          | Learn about functions and methods to manage an app logic flow                                                                      |                              [Functions and Methods](./2-js-basics/2-functions-methods/README.md)                               | Jasmine and Christopher |
| 06  |                        JS Basics                         |                        Making Decisions with JS                        | Learn how to create conditions for your code using decision-making methods                                                           |                                 [Making Decisions](./2-js-basics/3-making-decisions/README.md)                                  |         Jasmine         |
| 07  |                        JS Basics                         |                            Arrays and Loops                            | Work wit data using arrays and loops inside JavaScript                                                                              |                                   [Arrays and Loops](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine         |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)       |                            HTML in Practice                            | Build di HTML to create online terrarium, focus on building layout                                                                  |                                 [Introduction to HTML](./3-terrarium/1-intro-to-html/README.md)                                 |           Jen           |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)       |                            CSS in Practice                             | Build di CSS to style the online terrarium, focus on basics of CSS including how to make di page responsive                          |                                  [Introduction to CSS](./3-terrarium/2-intro-to-css/README.md)                                  |           Jen           |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)            |                 JavaScript Closures, DOM manipulation                  | Build di JavaScript to make di terrarium work as drag/drop interface, focus on closures and DOM manipulation                         |                  [JavaScript Closures, DOM manipulation](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                   |           Jen           |
| 11  |          [Typing Game](./4-typing-game/solution/README.md)          |                          Build a Typing Game                           | Learn how to use keyboard events to drive the logic of your JavaScript app                                                          |                                [Event-Driven Programming](./4-typing-game/typing-game/README.md)                                |       Christopher       |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                         Working with Browsers                          | Learn how browsers dey work, their history, and how to scaffold first elements of browser extension                                 |                               [About Browsers](./5-browser-extension/1-about-browsers/README.md)                                |           Jen           |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | Build form, call API and store variables for local storage             | Build di JavaScript elements for your browser extension to call API using variables wey dey inside local storage                    |                [APIs, Forms, and Local Storage](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen           |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          Background processes inside browser, web performance          | Use browser background processes to manage extension icon; learn about web performance and optimizations                            |             [Background Tasks and Performance](./5-browser-extension/3-background-tasks-and-performance/README.md)              |           Jen           |
| 15  |           [Space Game](./6-space-game/solution/README.md)           |             More Advanced Game Development with JavaScript             | Learn about Inheritance using Classes and Composition and Pub/Sub pattern, prepare for building a game                              |                      [Introduction to Advanced Game Development](./6-space-game/1-introduction/README.md)                       |          Chris          |
| 16  |           [Space Game](./6-space-game/solution/README.md)           |                           Drawing to canvas                            | Learn about Canvas API, wey dem use to draw elements for screen                                                                      |                                [Drawing to Canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris          |
| 17  |           [Space Game](./6-space-game/solution/README.md)           |                   Moving elements around screen                        | Find out how elements fit move using cartesian coordinates and Canvas API                                                             |                           [Moving Elements Around](./6-space-game/3-moving-elements-around/README.md)                           |          Chris          |
| 18  |           [Space Game](./6-space-game/solution/README.md)           |                          Collision detection                           | Make elements collide and react to each other using keypress and provide cooldown to keep game performance                           |                              [Collision Detection](./6-space-game/4-collision-detection/README.md)                              |          Chris          |
| 19  |           [Space Game](./6-space-game/solution/README.md)           |                             Keeping score                              | Do maths calculations based on game's status and performance                                                                        |                                    [Keeping Score](./6-space-game/5-keeping-score/README.md)                                    |          Chris          |
| 20  |           [Space Game](./6-space-game/solution/README.md)           |                     Ending and restarting game                        | Learn about how to end and restart game, including cleaning up assets and reseting variables                                          |                                [The Ending Condition](./6-space-game/6-end-condition/README.md)                                 |          Chris          |
| 21  |         [Banking App](./7-bank-project/solution/README.md)          |                 HTML Templates and Routes for Web App                 | Learn how to create scaffold for multipage website architecture using routing and HTML templates                                      |                            [HTML Templates and Routes](./7-bank-project/1-template-route/README.md)                             |          Yohan          |
| 22  |         [Banking App](./7-bank-project/solution/README.md)          |                  Build Login and Registration Form                    | Learn about building forms and how to handle validation routines                                                                     |                                           [Forms](./7-bank-project/2-forms/README.md)                                           |          Yohan          |
| 23  |         [Banking App](./7-bank-project/solution/README.md)          |                   Methods of Fetching and Using Data                   | How data go inside and outside your app, how to fetch, store am, and clear am                                                        |                                            [Data](./7-bank-project/3-data/README.md)                                            |          Yohan          |
| 24  |         [Banking App](./7-bank-project/solution/README.md)          |                      Concepts of State Management                      | Learn how your app dey keep state and how to manage am programmatically                                                              |                                [State Management](./7-bank-project/4-state-management/README.md)                                |          Yohan          |
| 25 | [Browser/VScode Code](../../8-code-editor) | Working with VScode | Learn how to use code editor | [Use VScode Code Editor](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | Working with AI | Learn how to build your own AI assistant | [AI Assistant project](./9-chat-project/README.md) | Chris |

## 🏫 Pedagogy

Our curriculum design get two important pedagogical principles in mind:
* project-based learning
* frequent quizzes

Di program dey teach fundamentals of JavaScript, HTML, and CSS, plus di latest tools and techniques wey web developers dey use today. Students go get chance to build hands-on experience by making typing game, virtual terrarium, eco-friendly browser extension, space-invader-style game, and banking app for business dem. By end of di series, students go sabi web development well well.

> 🎓 You fit take di first few lessons for dis curriculum as [Learn Path](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) for Microsoft Learn!

By making sure say di content match projects, e make di process beta and more interesting for students and e go help dem remember concepts well. We self write some starter lessons for JavaScript basics to introduce concepts, plus video from "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)" video collection, wey some authors contribute to this curriculum.

Plus, a low-stakes quiz before class dey set student mind to learn topic, while second quiz after class go help dem remember am pass. This curriculum design to be flexible and fun and fit be taken as whole or part. The projects start small and go dey more complex by end of 12-week cycle.

Even though we no include JavaScript frameworks purposely to focus on basic skills wey web developer suppose get before using framework, next step wey fit make sense after dis curriculum na to learn about Node.js via another video collection: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)".

> Check our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing](CONTRIBUTING.md) guidelines. We dey welcome your constructive feedback!

## 🧭 Offline access

You fit run dis documentation offline by using [Docsify](https://docsify.js.org/#/). Fork dis repo, [install Docsify](https://docsify.js.org/#/quickstart) for your local machine, then for root folder of this repo, type `docsify serve`. Di website go run for port 3000 on your localhost: `localhost:3000`.

## 📘 PDF
A PDF of all of the lessons fit find [here](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf).


## 🎒 Other Courses

Our team dey produce other courses! Check am out:

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

If you jam or get any questions about how to build AI apps, join other learners and experienced developers for discussions about MCP. Na supportive community where questions dey welcome and knowledge dey shared freely.

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

If you get product feedback or find errors while you dey build, visit:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## License

This repository get MIT license. See the [LICENSE](../../LICENSE) file for more info.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document e been translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even tho we dey try make am correct, abeg sabi say automatic translation fit get some mistakes or no too correct. Di original document wey e dey for im correct language na di correct one. For important tins, make person wey sabi translate do di work. We no go responsible if pipo no understand well or if dem misinterpret tins because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->