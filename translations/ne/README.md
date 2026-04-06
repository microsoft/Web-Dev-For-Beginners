# वेब विकास शुरुआतीहरूको लागि - एक पाठ्यक्रम

माइक्रोसफ्ट क्लाउड एड्भोकेट्सद्वारा तयार गरिएको हाम्रो १२ हप्ते व्यापक पाठ्यक्रमसँग वेब विकासका आधारभूत कुरा सिक्नुहोस्। २४ वटा पाठहरू मध्ये प्रत्येक JavaScript, CSS, र HTML लाई व्यावहारिक परियोजनाहरू जस्तै टेरारियम, ब्राउजर एक्स्टेन्सन, र स्पेस गेमहरू मार्फत गहिरोसँग बुझिन्छ। क्विजहरू, छलफलहरू, र व्यावहारिक कार्यहरूमा सहभागी हुनुहोस्। हाम्रो प्रभावकारी परियोजना-आधारित शिक्षण विधिका साथ आफ्नो सीपहरू बढाउनुहोस् र आफ्नो ज्ञानको स्थायित्व बढाउनुहोस्। आजै आफ्नो कोडिङ यात्रा सुरू गर्नुहोस्!

Azure AI Foundry Discord समुदायमा सामेल हुनुहोस्

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

यी स्रोतहरू प्रयोग गर्न सुरू गर्नका लागि यी कदमहरू पछ्याउनुहोस्:
1. **रिपोजिटरीलाई फोर्क गर्नुहोस्**: क्लिक गर्नुहोस् [![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-beginners.svg?style=social&label=Fork)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/fork)
2. **रिपोजिटरीलाई क्लोन गर्नुहोस्**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`
3. [**Azure AI Foundry Discord मा सामेल हुनुहोस् र विशेषज्ञहरू तथा अन्य विकासकर्ताहरूलाई भेट्नुहोस्**](https://discord.com/invite/ByRwuEEgH4)

### 🌐 बहुभाषिक समर्थन

#### GitHub Action मार्फत समर्थित (स्वचालित र सधैं अद्यावधिक)

<!-- CO-OP TRANSLATOR LANGUAGES TABLE START -->
[Arabic](../ar/README.md) | [Bengali](../bn/README.md) | [Bulgarian](../bg/README.md) | [Burmese (Myanmar)](../my/README.md) | [Chinese (Simplified)](../zh-CN/README.md) | [Chinese (Traditional, Hong Kong)](../zh-HK/README.md) | [Chinese (Traditional, Macau)](../zh-MO/README.md) | [Chinese (Traditional, Taiwan)](../zh-TW/README.md) | [Croatian](../hr/README.md) | [Czech](../cs/README.md) | [Danish](../da/README.md) | [Dutch](../nl/README.md) | [Estonian](../et/README.md) | [Finnish](../fi/README.md) | [French](../fr/README.md) | [German](../de/README.md) | [Greek](../el/README.md) | [Hebrew](../he/README.md) | [Hindi](../hi/README.md) | [Hungarian](../hu/README.md) | [Indonesian](../id/README.md) | [Italian](../it/README.md) | [Japanese](../ja/README.md) | [Kannada](../kn/README.md) | [Khmer](../km/README.md) | [Korean](../ko/README.md) | [Lithuanian](../lt/README.md) | [Malay](../ms/README.md) | [Malayalam](../ml/README.md) | [Marathi](../mr/README.md) | [Nepali](./README.md) | [Nigerian Pidgin](../pcm/README.md) | [Norwegian](../no/README.md) | [Persian (Farsi)](../fa/README.md) | [Polish](../pl/README.md) | [Portuguese (Brazil)](../pt-BR/README.md) | [Portuguese (Portugal)](../pt-PT/README.md) | [Punjabi (Gurmukhi)](../pa/README.md) | [Romanian](../ro/README.md) | [Russian](../ru/README.md) | [Serbian (Cyrillic)](../sr/README.md) | [Slovak](../sk/README.md) | [Slovenian](../sl/README.md) | [Spanish](../es/README.md) | [Swahili](../sw/README.md) | [Swedish](../sv/README.md) | [Tagalog (Filipino)](../tl/README.md) | [Tamil](../ta/README.md) | [Telugu](../te/README.md) | [Thai](../th/README.md) | [Turkish](../tr/README.md) | [Ukrainian](../uk/README.md) | [Urdu](../ur/README.md) | [Vietnamese](../vi/README.md)

> **स्थानीय रूपमा क्लोन गर्न चाहनुहुन्छ?**
>
> यो रिपोजिटरीमा ५० भन्दा बढी भाषामा अनुवादहरू छन् जसले डाउनलोड साइजलाई धेरै बढाउँछ। अनुवादहरू बिना क्लोन गर्न, sparse checkout प्रयोग गर्नुहोस्:
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
> यसले तपाईंलाई सबै आवश्यक सामग्री छिटो डाउनलोडको साथ दिन्छ।
<!-- CO-OP TRANSLATOR LANGUAGES TABLE END -->

**यदि तपाईं थप भाषाहरू समर्थित गर्न चाहनुहुन्छ भने ती यहाँ सूचीबद्ध छन् [यहाँ](https://github.com/Azure/co-op-translator/blob/main/getting_started/supported-languages.md)**

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/microsoft/Web-Dev-For-Beginners)

#### 🧑‍🎓 _तिमी विद्यार्थी हौ?_

[**Student Hub पृष्ठ**](https://docs.microsoft.com/learn/student-hub/?WT.mc_id=academic-77807-sagibbon) भ्रमण गर्नुहोस् जहाँ तपाईं प्रारम्भिक स्रोतहरू, विद्यार्थी प्याकहरू, र निशुल्क प्रमाणपत्र भाउचर प्राप्त गर्ने तरिका पाउनुहुनेछ। यो पृष्ठ तपाईंले बुकमार्क गर्न र महिनावारी नयाँ सामग्री आउँदा जाँच गर्न चाहिने छ।

### 📣 सूचना - नयाँ GitHub Copilot Agent मोड चुनौतीहरू पूरा गर्ने!

नयाँ चुनौती थपिएको छ, प्रायः अध्यायहरूमा "GitHub Copilot Agent Challenge 🚀" खोज्नुहोस्। यो GitHub Copilot र Agent मोड प्रयोग गरी पूरा गर्न नयाँ चुनौती हो। यदि तपाईंले पहिले Agent मोड प्रयोग गर्नुभएको छैन भने, यो केवल टेक्स्ट मात्र उत्पन्न गर्न सक्दैन, फाइलहरू सिर्जना र सम्पादन गर्न, कमाण्डहरू चलाउन र धेरै गर्न सक्षम छ।

### 📣 सूचना - _Generative AI प्रयोग गरेर नयाँ परियोजना बनाउने_ 

नयाँ AI सहायक परियोजना हालै थपियो, जाँच गर्नुहोस् [परियोजना](./9-chat-project/README.md)

### 📣 सूचना - _Generative AI को लागि नयाँ पाठ्यक्रम_ हालै जारी भयो

हाम्रो नयाँ Generative AI पाठ्यक्रम नछुटाउनुहोस्!

सुरु गर्न [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) भ्रमण गर्नुहोस्!

![Background](../../translated_images/ne/background.148a8d43afde5730.webp)

- आधारभूतदेखि RAG सम्मका सबै विषयहरू समेटिएको पाठहरू।
- GenAI र हाम्रो सहायक एपको माध्यमले ऐतिहासिक पात्रहरू सँग अन्तरक्रिया गर्नुहोस्।
- रमाईलो र आकर्षक कथा, तपाईं समय यात्रा गर्दै हुनुहुन्छ!

![character](../../translated_images/ne/character.5c0dd8e067ffd693.webp)

प्रत्येक पाठमा पूरा गर्नुपर्ने असाइनमेन्ट, ज्ञान जाँच, र चुनौतीहरू छन्, जस्तै:
- प्रम्प्टिङ र प्रम्प्ट ईन्जिनियरिङ
- टेक्स्ट र छवि एप निर्माण
- खोज एपहरू

सुरु गर्न [https://aka.ms/genai-js-course](https://aka.ms/genai-js-course) भ्रमण गर्नुहोस्!



## 🌱 सुरु गर्ने तरिका

> **शिक्षकहरू**, हामीले यस पाठ्यक्रम प्रयोग गर्ने सल्लाहहरू समावेश गरेका छौं [यहाँ](for-teachers.md)। कृपया तपाईंहरूको प्रतिक्रिया [हामीलाई हाम्रो छलफल फोरममा दिनुहोस्](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

**[शिक्षार्थीहरू](https://aka.ms/student-page/?WT.mc_id=academic-77807-sagibbon)**, प्रत्येक पाठको लागि, प्रि-लेक्चर क्विजबाट सुरु गर्नुहोस् र त्यसपछि व्याख्या सामग्री पढ्नुहोस्, विभिन्न गतिविधिहरू पूरा गर्नुहोस् र पोष्ट-लेक्चर क्विजसँग आफ्नो बुझाइ जाँच गर्नुहोस्।

तपाईंको सिकाइ अनुभव बढाउन, आफ्ना साथीहरू सँग परियोजनाहरुमा सँगै काम गर्न जडान हुनुहोस्! छलफलहरू हाम्रो [चर्चा फोरम](https://github.com/microsoft/Web-Dev-For-Beginners/discussions) मा प्रोत्साहित छन् जहाँ हाम्रो मोडरेटर टोली तपाईंका प्रश्नहरूको जवाफ दिन उपलब्ध हुनेछ।

आफ्नो अध्ययनलाई अझ अघि बढाउन, हामी [Microsoft Learn](https://learn.microsoft.com/users/wirelesslife/collections/p1ddcy5jwy0jkm?WT.mc_id=academic-77807-sagibbon) मा थप अध्ययन सामग्री अन्वेषण गर्न अत्यन्त सिफारिस गर्दछौं।

### 📋 तपाईंको वातावरण सेटअप गर्ने तरिका

यो पाठ्यक्रमसँग विकास वातावरण तयार छ! तपाईं सुरु गर्दा तपाईं [Codespace](https://github.com/features/codespaces/) (एक ब्राउजर-आधारित, कुनै इन्स्टल आवश्यक नभएको वातावरण) मा चलाउन सक्छौं, वा आफ्नो कम्प्युटरमा [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) जस्तै टेक्स्ट सम्पादक प्रयोग गरी स्थानीय रूपमा चलाउन सक्नुहुन्छ।

#### आफ्नो रिपोजिटरी सिर्जना गर्नुहोस्
तपाईंले आफ्नो काम सजिलै सुरक्षित गर्नका लागि, यो रिपोजिटरीको आफ्नो प्रतिलिपि सिर्जना गर्नु सिफारिस गरिन्छ। तपाईंले यो पृष्ठको माथि रहेको **Use this template** बटन थिचेर गर्न सक्नुहुन्छ। यसले तपाईंको GitHub खातामा पाठ्यक्रमको प्रतिलिपि सहित नयाँ रिपोजिटरी सिर्जना गर्नेछ।

यी कदमहरू पछ्याउनुहोस्:
1. **रिपोजिटरीलाई फोर्क गर्नुहोस्**: यो पृष्ठको माथि-दायाँ कुनामा रहेको "Fork" बटन क्लिक गर्नुहोस्।
2. **रिपोजिटरीलाई क्लोन गर्नुहोस्**:   `git clone https://github.com/microsoft/Web-Dev-For-Beginners.git`

#### Codespace मा पाठ्यक्रम चलाउँदै

तपाईंले सिर्जना गरेको यस रिपोजिटरीको प्रतिलिपिमा, **Code** बटन क्लिक गर्नुहोस् र **Open with Codespaces** चयन गर्नुहोस्। यसले तपाईंका लागि नयाँ Codespace सिर्जना गर्नेछ।

![Codespace](../../translated_images/ne/createcodespace.0238bbf4d7a8d955.webp)

#### आफ्नो कम्प्युटरमा स्थानीय रूपमा पाठ्यक्रम चलाउँदै

यो पाठ्यक्रम स्थानीय रूपमा चलाउन तपाईंलाई टेक्स्ट सम्पादक, ब्राउजर र कमाण्ड लाइन उपकरण आवश्यक पर्छ। हाम्रो पहिलो पाठ, [Introduction to Programming Languages and Tools of the Trade](../../1-getting-started-lessons/1-intro-to-programming-languages), तपाईंलाई यी उपकरणहरूको विभिन्न विकल्पहरू मार्फत जानकारी दिनेछ, जसले तपाईंलाई उत्तम काम गर्ने छनोट गर्न मद्दत पुर्‍याउनेछ।

हामी यसको लागि [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) प्रयोग गर्न सिफारिस गर्छौं, जससँग बिल्ट-इन [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) पनि छ। Visual Studio Code यहाँबाट डाउनलोड गर्न सकिन्छ [यहाँ](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)।
1. तपाईंको रिपोजिटरीलाई आफ्नो कम्प्युटरमा क्लोन गर्नुहोस्। तपाईं **Code** बटनमा क्लिक गरी URL कपी गरेर यो गर्न सक्नुहुन्छ:

    [CodeSpace](./images/createcodespace.png)

    त्यसपछि, [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon) भित्र [Terminal](https://code.visualstudio.com/docs/terminal/basics/?WT.mc_id=academic-77807-sagibbon) खोल्नुहोस् र तलको कमाण्ड चलाउनुहोस्, जहाँ `<your-repository-url>` लाई तपाईंले भर्खर कपी गर्नुभएको URL सँग परिवर्तन गर्नुहोस्:

    ```bash 
    git clone <your-repository-url>
    ```

2. Visual Studio Code मा फोल्डर खोल्नुहोस्। तपाईं यो गर्न सक्नुहुन्छ **File** > **Open Folder** मा क्लिक गरी क्लोन गरिएको फोल्डर छानेर।


>  सिफारिस गरिएको Visual Studio Code एक्सटेन्सनहरू:
>
> * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) - Visual Studio Code भित्र HTML पेजहरू पूर्वावलोकन गर्न
> * [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot&WT.mc_id=academic-77807-sagibbon) - तपाईंलाई छिटो कोड लेख्न मद्दत गर्न

## 📂 प्रत्येक पाठले समावेश गर्छ:

- वैकल्पिक स्केचनोट
- वैकल्पिक पूरक भिडियो
- पाठ पूर्वको वार्मअप क्विज
- लिखित पाठ
- परियोजना आधारित पाठहरूमा, परियोजना निर्माण गर्ने चरण-द्वारा-चरण मार्गदर्शन
- ज्ञान परीक्षणहरू
- एउटा चुनौती
- पूरक पठन सामग्री
- असाइनमेन्ट
- [पाठ पश्चात क्विज](https://ff-quizzes.netlify.app/web/)

> **क्विजहरूको बारेमा एक नोट**: सबै क्विजहरू Quiz-app फोल्डरमा समावेश छन्, तीन प्रश्नहरु भएका ४८ कुल क्विजहरू। तिनीहरू [यहाँ](https://ff-quizzes.netlify.app/web/) उपलब्ध छन् र क्विज एप्लिकेशन स्थानीय रूपमा चलाउन वा Azure मा डिप्लोय गर्न सकिन्छ; `quiz-app` फोल्डरमा निर्देशनहरू अनुसरण गर्नुहोस्।

## 🗃️ पाठहरू

|     |                       परियोजनाको नाम                       |                            सिकाइका अवधारणाहरू                             | सिकाइ उद्देश्यहरू                                                                                                                 |                                                         सम्बन्धित पाठ                                                          |         लेखक          |
| :-: | :--------------------------------------------------------: | :-----------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------: | :-------------------: |
| 01  |                     Getting Started                        |           प्रोग्रामिङ परिचय र उपकरणहरूको आधारभूत ज्ञान                    | प्रायः प्रोग्रामिङ भाषाहरूको आधार बुझ्न र व्यावसायिक विकासकर्ताहरूले प्रयोग गर्ने सफ्टवेयरबारे जानकारी लिनुहोस्                       | [Intro to Programming Languages and Tools of the Trade](./1-getting-started-lessons/1-intro-to-programming-languages/README.md) |         Jasmine       |
| 02  |                     Getting Started                        |             GitHub को आधारभूत कुराहरू, टिमसँग काम गर्ने तरिका             | तपाईंको परियोजनामा GitHub कसरी प्रयोग गर्ने, र कोड आधारमा अरू सँग सहकार्य गर्ने तरिका                                              |                            [Intro to GitHub](./1-getting-started-lessons/2-github-basics/README.md)                             |          Floor        |
| 03  |                     Getting Started                        |                             पहुँचयोग्यता                                | वेब पहुँचयोग्यताको आधारभूत कुराहरू सिक्नुहोस्                                                                                     |                       [Accessibility Fundamentals](./1-getting-started-lessons/3-accessibility/README.md)                       |       Christopher     |
| 04  |                        JS Basics                           |                         JavaScript डेटा प्रकारहरू                         | JavaScript डेटा प्रकारहरूको आधारभूत कुरा                                                                                           |                                       [Data Types](./2-js-basics/1-data-types/README.md)                                        |         Jasmine       |
| 05  |                        JS Basics                           |                         कार्यहरू र विधिहरू                               | अनुप्रयोगको तर्क प्रवाह व्यवस्थापन गर्ने कार्यहरू र विधिहरूका बारेमा सिक्नुहोस्                                                      |                              [Functions and Methods](./2-js-basics/2-functions-methods/README.md)                               | Jasmine and Christopher |
| 06  |                        JS Basics                           |                        JS सँग निर्णय लिनु                                 | कोडमा निर्णय प्रक्रियाका लागि सर्तहरू कसरी सिर्जना गर्ने सिक्नुहोस्                                                                  |                                 [Making Decisions](./2-js-basics/3-making-decisions/README.md)                                  |         Jasmine       |
| 07  |                        JS Basics                           |                            एर्रेहरू र लूपहरू                             | JavaScript मा एर्रे र लूपहरूसँग काम गर्ने तरिका                                                                                     |                                   [Arrays and Loops](./2-js-basics/4-arrays-loops/README.md)                                    |         Jasmine       |
| 08  |       [Terrarium](./3-terrarium/solution/README.md)        |                            HTML व्यवहारमा                                | अनलाइन टेरारियम बनाउन HTML निर्माण गर्नुहोस्, लेआउट निर्माणमा ध्यान केन्द्रित गर्दै                                                   |                                 [Introduction to HTML](./3-terrarium/1-intro-to-html/README.md)                                 |           Jen         |
| 09  |       [Terrarium](./3-terrarium/solution/README.md)        |                            CSS व्यवहारमा                                 | अनलाइन टेरारियमलाई CSS द्वारा स्टाइल गर्नुहोस्, पृष्ठलाई प्रतिक्रियाशील बनाउन CSS का आधार सिक्दै                                        |                                  [Introduction to CSS](./3-terrarium/2-intro-to-css/README.md)                                  |           Jen         |
| 10  |            [Terrarium](./3-terrarium/solution/README.md)            |                 JavaScript क्लोजरहरू, DOM हेरफेर                   | टेरारियमलाई ड्र्याग/ड्रप इन्टरफेस बनाउन JavaScript लेख्नुहोस्, क्लोजर र DOM हेरफेरमा ध्यान दिँदै                                       |                  [JavaScript Closures, DOM manipulation](./3-terrarium/3-intro-to-DOM-and-closures/README.md)                   |           Jen         |
| 11  |          [Typing Game](./4-typing-game/solution/README.md)          |                          टाइपिङ खेल बनाउने                          | JavaScript एप्सको तर्क चलाउन किबोर्ड घटनाहरू कसरी प्रयोग गर्ने सिक्नुहोस्                                                            |                                [Event-Driven Programming](./4-typing-game/typing-game/README.md)                                |       Christopher     |
| 12  | [Green Browser Extension](./5-browser-extension/solution/README.md) |                         ब्राउजरसँग काम गर्ने                        | ब्राउजर कसरि काम गर्दछ, इतिहास, र ब्राउजर एक्स्टेन्सनका पहिलो तत्वहरू कसरी तयार गर्ने                                                |                               [About Browsers](./5-browser-extension/1-about-browsers/README.md)                                |           Jen         |
| 13  | [Green Browser Extension](./5-browser-extension/solution/README.md) | फारम बनाउने, API कल गर्ने र स्थानिय भण्डारणमा भेरिएबल राख्ने तरीका           | API कल गर्न र स्थानिय भण्डारणमा राखिएका भेरिएबलहरू प्रयोग गर्न ब्राउजर एक्स्टेन्सनाका JavaScript तत्वहरू तयार पार्नुहोस्              |                [APIs, Forms, and Local Storage](./5-browser-extension/2-forms-browsers-local-storage/README.md)                 |           Jen         |
| 14  | [Green Browser Extension](./5-browser-extension/solution/README.md) |          ब्राउजरमा पृष्ठभूमि प्रक्रियाहरू, वेब प्रदर्शन                | एक्स्टेन्सन आइकन व्यवस्थापनका लागि ब्राउजरको पृष्ठभूमि प्रक्रियाहरू प्रयोग गर्नुहोस्; वेब प्रदर्शन र केही अनुकूलनहरूका बारेमा सिक्नुहोस्   |             [Background Tasks and Performance](./5-browser-extension/3-background-tasks-and-performance/README.md)              |           Jen         |
| 15  |           [Space Game](./6-space-game/solution/README.md)           |             JavaScript सँग उन्नत खेल विकास                           | क्लासहरू, कम्पोजिशन, र Pub/Sub ढाँचा प्रयोग गरी इनहेरिटेन्सका बारेमा जान्नुहोस्, खेल विकासको तयारीका लागि                           |                      [Introduction to Advanced Game Development](./6-space-game/1-introduction/README.md)                       |          Chris        |
| 16  |           [Space Game](./6-space-game/solution/README.md)           |                           क्यानभासमा चित्र बनाउने                    | क्यानभास API को उपयोगबाट स्क्रिनमा तत्वहरू कसरी चित्रित गर्ने जान्नुहोस्                                                             |                                [Drawing to Canvas](./6-space-game/2-drawing-to-canvas/README.md)                                |          Chris        |
| 17  |           [Space Game](./6-space-game/solution/README.md)           |                   स्क्रिनभरि तत्वहरू सार्ने तरिका                    | कर्टिशियन कोअर्डिनेट र क्यानभास API मार्फत तत्वहरूलाई गति दिन सिक्नुहोस्                                                            |                           [Moving Elements Around](./6-space-game/3-moving-elements-around/README.md)                           |          Chris        |
| 18  |           [Space Game](./6-space-game/solution/README.md)           |                          ठोक्किने पहिचान                           | तत्वहरूलाई ठोक्किन लगाएर एक अर्कामा प्रतिक्रिया जनाउन, किप्रेसिङ प्रयोग गरी र खेलको प्रदर्शन सुनिश्चित गर्न कोल्डडाउन फंक्सन सहित        |                              [Collision Detection](./6-space-game/4-collision-detection/README.md)                              |          Chris        |
| 19  |           [Space Game](./6-space-game/solution/README.md)           |                             स्कोर राख्ने                            | खेलको स्थिति र प्रदर्शनको आधारमा गणना गर्ने                                                                                            |                                    [Keeping Score](./6-space-game/5-keeping-score/README.md)                                    |          Chris        |
| 20  |           [Space Game](./6-space-game/solution/README.md)           |                     खेल अन्त्य गर्ने र पुन: सुरु गर्ने                  | खेल अन्त्य र पुन: सुरु गर्ने तरिका सिक्न, स्रोतहरू सफा गर्ने र भेरिएबल मानहरू रिसेट गर्ने                                                |                                [The Ending Condition](./6-space-game/6-end-condition/README.md)                                 |          Chris        |
| 21  |         [Banking App](./7-bank-project/solution/README.md)          |                 वेब एपको HTML टेम्प्लेट र राउटहरू                      | मल्टिपेज वेबसाइटको आयोजना तयार गर्न राउटिङ र HTML टेम्प्लेट कसरी प्रयोग गर्ने सिक्नुहोस्                                             |                            [HTML Templates and Routes](./7-bank-project/1-template-route/README.md)                             |          Yohan        |
| 22  |         [Banking App](./7-bank-project/solution/README.md)          |                  लगइन र दर्ता फारम बनाउने                            | फारम बनाउने र मान्यकरण प्रक्रिया ह्यान्डल गर्ने बारेमा सिक्नुहोस्                                                                       |                                           [Forms](./7-bank-project/2-forms/README.md)                                           |          Yohan        |
| 23  |         [Banking App](./7-bank-project/solution/README.md)          |                  डाटा प्राप्त गर्ने र प्रयोग गर्ने तरिका              | तपाईंको एपमा डाटा कसरी आउने जाने, कसरी प्राप्त गर्ने, भण्डारण गर्ने, र नष्ट गर्ने सिक्नुहोस्                                           |                                            [Data](./7-bank-project/3-data/README.md)                                            |          Yohan        |
| 24  |         [Banking App](./7-bank-project/solution/README.md)          |                      State Management का अवधारणाहरू                  | तपाईंको एपले कसरी स्टेट राख्छ र यसलाई कार्यक्रमबाट कसरी व्यवस्थापन गर्ने सिक्नुहोस्                                                   |                                [State Management](./7-bank-project/4-state-management/README.md)                                |          Yohan        |
| 25 | [Browser/VScode Code](../../8-code-editor) | VScode सँग काम गर्ने | कोड एडिटर कसरी प्रयोग गर्ने जान्नुहोस् | [Use VScode Code Editor](./8-code-editor/1-using-a-code-editor/README.md) | Chris |
| 26 | [AI Assistants](./9-chat-project/README.md) | AI सँग काम गर्ने | आफ्नै AI सहायक कसरी निर्माण गर्ने | [AI Assistant project](./9-chat-project/README.md) | Chris |

## 🏫 शिक्षाशास्त्र

हाम्रो पाठ्यक्रम दुई प्रमुख शिक्षाशास्त्रीय सिद्धान्तहरूसँग डिजाइन गरिएको छ:
* परियोजना आधारित सिकाइ
* बारम्बार क्विजहरू

कार्यक्रमले JavaScript, HTML, CSS का आधारभूत कुरा र आजको वेब विकासकर्ताहरूले प्रयोग गर्ने आधुनिक उपकरण र प्रविधिहरू सिकाउँछ। विद्यार्थीहरूले टाइपिङ खेल, भर्चुअल टेरारियम, पर्यावरणमैत्री ब्राउजर एक्स्टेन्सन, अन्तरिक्ष आक्रमण खेल, र व्यवसायका लागि बैंकिङ एप निर्माण गरेर व्यावहारिक अनुभव प्राप्त गर्ने मौका पाउनेछन्। पाठ्यक्रमको अन्त्यसम्म विद्यार्थीहरूले वेब विकासको राम्रो बुझाइ हासिल गर्नेछन्।

> 🎓 तपाईंले यस पाठ्यक्रमका पहिला केही पाठहरू Microsoft Learn मा [Learning Path](https://docs.microsoft.com/learn/paths/web-development-101/?WT.mc_id=academic-77807-sagibbon) को रूपमा लिन सक्नुहुन्छ!

सामग्री परियोजनासँग मेल खाने हुँदा विद्यार्थीहरूले सिकाइमा थप रुचि लिने र अवधारणाहरूको अवधारण क्षमता बढ्नेछ। हामीले JavaScript आधारभूत विषयहरूमा प्रारम्भिक पाठहरू तयार पारेका छौं, जसमा "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/?WT.mc_id=academic-77807-sagibbon)" भिडियो ट्युटोरियलहरूको संग्रहबाट भिडियो समावेश गरिएको छ, जसका केही लेखकहरूले यो पाठ्यक्रमको निर्माणमा योगदान दिएका छन्।

थप रूपमा, कक्षाको पहिले सानो क्विज विद्यार्थीलाई विषय सिक्ने मानसिकतामा तयार पार्छ भने कक्षा पछि अर्को क्विजले अवधारणालाई मजबुत बनाउँछ। यो पाठ्यक्रम लचिलो र रमाइलो हुने गरी डिजाइन गरिएको छ र पूर्ण वा अंशमा लिन सकिन्छ। परियोजनाहरू सानोबाट सुरु भएर १२ हप्ताको समापनमा थप जटिल बन्दै जान्छन्।

हामीले जानबुझेर JavaScript फ्रेमवर्कहरू परिचय गराउन छाडेका छौं ताकि वेब विकासकर्ताको रूपमा आवश्यक आधारभूत सीपहरूमा केन्द्रित रहन सकियोस्, तर यस पाठ्यक्रम पूरा गरेपछि अर्को राम्रो कदम Node.js सिक्नु हुनेछ, जुन अर्को भिडियो संग्रह "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs/?WT.mc_id=academic-77807-sagibbon)" बाट प्राप्त गर्न सकिन्छ।

> हाम्रो [Code of Conduct](CODE_OF_CONDUCT.md) र [Contributing](CONTRIBUTING.md) दिशानिर्देशनहरू अवलोकन गर्नुहोस्। हामी तपाईंको रचनात्मक प्रतिक्रिया स्वागत गर्दछौं!


## 🧭 अफलाइन पहुँच

तपाईं [Docsify](https://docsify.js.org/#/) प्रयोग गरेर यो दस्तावेज अफलाइन चलाउन सक्नुहुन्छ। यो रिपो फोर्क गरी आफ्नो स्थानीय मेसिनमा [Docsify स्थापना](https://docsify.js.org/#/quickstart) गर्नुहोस्, अनि यस रिपोको रुट फोल्डरमा `docsify serve` टाइप गर्नुहोस्। वेब साइट पोर्ट ३००० मा चल्नेछ: `localhost:3000`।

## 📘 PDF
सबै पाठहरूको PDF यहाँ पाउन सकिन्छ [यहाँ](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf)।

## 🎒 अन्य पाठ्यक्रमहरू

हाम्रो टोलीले अन्य पाठ्यक्रमहरू उत्पादन गर्दछ! हेर्नुहोस्:

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
 
### जनरेटिभ AI सिरिज
[![Generative AI for Beginners](https://img.shields.io/badge/Generative%20AI%20for%20Beginners-8B5CF6?style=for-the-badge&labelColor=E5E7EB&color=8B5CF6)](https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst)
[![Generative AI (.NET)](https://img.shields.io/badge/Generative%20AI%20(.NET)-9333EA?style=for-the-badge&labelColor=E5E7EB&color=9333EA)](https://github.com/microsoft/Generative-AI-for-beginners-dotnet?WT.mc_id=academic-105485-koreyst)
[![Generative AI (Java)](https://img.shields.io/badge/Generative%20AI%20(Java)-C084FC?style=for-the-badge&labelColor=E5E7EB&color=C084FC)](https://github.com/microsoft/generative-ai-for-beginners-java?WT.mc_id=academic-105485-koreyst)
[![Generative AI (JavaScript)](https://img.shields.io/badge/Generative%20AI%20(JavaScript)-E879F9?style=for-the-badge&labelColor=E5E7EB&color=E879F9)](https://github.com/microsoft/generative-ai-with-javascript?WT.mc_id=academic-105485-koreyst)

---
 
### मूल सिकाइ
[![ML for Beginners](https://img.shields.io/badge/ML%20for%20Beginners-22C55E?style=for-the-badge&labelColor=E5E7EB&color=22C55E)](https://aka.ms/ml-beginners?WT.mc_id=academic-105485-koreyst)
[![Data Science for Beginners](https://img.shields.io/badge/Data%20Science%20for%20Beginners-84CC16?style=for-the-badge&labelColor=E5E7EB&color=84CC16)](https://aka.ms/datascience-beginners?WT.mc_id=academic-105485-koreyst)
[![AI for Beginners](https://img.shields.io/badge/AI%20for%20Beginners-A3E635?style=for-the-badge&labelColor=E5E7EB&color=A3E635)](https://aka.ms/ai-beginners?WT.mc_id=academic-105485-koreyst)
[![Cybersecurity for Beginners](https://img.shields.io/badge/Cybersecurity%20for%20Beginners-F97316?style=for-the-badge&labelColor=E5E7EB&color=F97316)](https://github.com/microsoft/Security-101?WT.mc_id=academic-96948-sayoung)
[![Web Dev for Beginners](https://img.shields.io/badge/Web%20Dev%20for%20Beginners-EC4899?style=for-the-badge&labelColor=E5E7EB&color=EC4899)](https://aka.ms/webdev-beginners?WT.mc_id=academic-105485-koreyst)
[![IoT for Beginners](https://img.shields.io/badge/IoT%20for%20Beginners-14B8A6?style=for-the-badge&labelColor=E5E7EB&color=14B8A6)](https://aka.ms/iot-beginners?WT.mc_id=academic-105485-koreyst)
[![XR Development for Beginners](https://img.shields.io/badge/XR%20Development%20for%20Beginners-38BDF8?style=for-the-badge&labelColor=E5E7EB&color=38BDF8)](https://github.com/microsoft/xr-development-for-beginners?WT.mc_id=academic-105485-koreyst)

---
 
### कोपाइलट सिरिज
[![Copilot for AI Paired Programming](https://img.shields.io/badge/Copilot%20for%20AI%20Paired%20Programming-FACC15?style=for-the-badge&labelColor=E5E7EB&color=FACC15)](https://aka.ms/GitHubCopilotAI?WT.mc_id=academic-105485-koreyst)
[![Copilot for C#/.NET](https://img.shields.io/badge/Copilot%20for%20C%23/.NET-FBBF24?style=for-the-badge&labelColor=E5E7EB&color=FBBF24)](https://github.com/microsoft/mastering-github-copilot-for-dotnet-csharp-developers?WT.mc_id=academic-105485-koreyst)
[![Copilot Adventure](https://img.shields.io/badge/Copilot%20Adventure-FDE68A?style=for-the-badge&labelColor=E5E7EB&color=FDE68A)](https://github.com/microsoft/CopilotAdventures?WT.mc_id=academic-105485-koreyst)
<!-- CO-OP TRANSLATOR OTHER COURSES END -->

## मद्दत पाउने तरिका

यदि तपाईं अड्किनु भयो वा AI एपहरू निर्माण गर्दा कुनै प्रश्न छ भने। MCP सम्बन्धी छलफलमा सहपाठी सिक्नेहरू र अनुभवी विकासकर्ताहरूमा सामेल हुनुहोस्। यो एक सहयोगी समुदाय हो जहाँ प्रश्नहरू स्वागत योग्य छन् र ज्ञान स्वतन्त्र रूपमा साझा गरिन्छ।

[![Microsoft Foundry Discord](https://dcbadge.limes.pink/api/server/nTYy5BXMWG)](https://discord.gg/nTYy5BXMWG)

यदि तपाईंलाई उत्पादन सुझाव वा निर्माण गर्दा त्रुटिहरू छन् भने भ्रमण गर्नुहोस्:

[![Microsoft Foundry Developer Forum](https://img.shields.io/badge/GitHub-Microsoft_Foundry_Developer_Forum-blue?style=for-the-badge&logo=github&color=000000&logoColor=fff)](https://aka.ms/foundry/forum)

## अनुमति पत्र

यो भण्डार MIT अनुमति पत्र अन्तर्गत लाइसेन्स गरिएको छ। थप जानकारीको लागि [LICENSE](../../LICENSE) फाइल हेर्नुहोस्।

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**अस्वीकरण**:
यस दस्तावेजलाई AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) प्रयोग गरेर अनुवाद गरिएको हो। हामी शुद्धताका लागि प्रयासरत छौं, तर कृपया ध्यान दिनुहोस् कि स्वचालित अनुवादमा त्रुटि वा अशुद्धिहरू हुन सक्छन्। मूल भाषामा रहेको दस्तावेजलाई आधिकारिक स्रोतको रूपमा मानिनु पर्दछ। महत्वपूर्ण जानकारीका लागि, व्यावसायिक मानव अनुवाद सिफारिस गरिन्छ। यस अनुवादको प्रयोगबाट उत्पन्न कुनै पनि गलतफहमी वा गलत व्याख्याको लागि हामी जिम्मेवार छैनौं।
<!-- CO-OP TRANSLATOR DISCLAIMER END -->