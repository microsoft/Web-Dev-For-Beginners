# क्विझ अ‍ॅप

हे क्विझेस डेटा सायन्स अभ्यासक्रमासाठीच्या व्याख्यानांपूर्वी आणि नंतरचे क्विझेस आहेत. अधिक माहितीसाठी https://aka.ms/webdev-beginners येथे भेट द्या.

## अनुवादित क्विझ सेट जोडणे

क्विझ अनुवाद जोडण्यासाठी `assets/translations` फोल्डरमध्ये योग्य क्विझ संरचना तयार करा. मूळ क्विझेस `assets/translations/en` मध्ये आहेत. क्विझेस अनेक गटांमध्ये विभागलेले आहेत. योग्य क्विझ विभागासह क्रमांक जुळवून ठेवा. या अभ्यासक्रमात एकूण 40 क्विझेस आहेत, ज्यांची क्रमवारी 0 पासून सुरू होते.

  
<details>
<summary>अनुवाद फाइलची रचना येथे दिली आहे:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

अनुवाद संपादित केल्यानंतर, `en` मधील पद्धतींचे अनुसरण करून अनुवाद फोल्डरमधील index.js फाइल संपादित करा आणि सर्व फाइल्स आयात करा.

`assets/translations` मधील `index.js` फाइल संपादित करा आणि नवीन अनुवादित फाइल्स आयात करा.

उदाहरणार्थ, जर तुमचा अनुवादित JSON `ex.json` मध्ये असेल, तर 'ex' ला स्थानिकीकरण की म्हणून ठेवा आणि खाली दाखवल्याप्रमाणे आयात करा:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## क्विझ अ‍ॅप स्थानिक पातळीवर चालवा

### पूर्वतयारी

- GitHub खाते
- [Node.js आणि Git](https://nodejs.org/)

### इंस्टॉल आणि सेटअप

1. या [टेम्पलेट](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) वरून एक रेपॉझिटरी तयार करा.

1. तुमची नवीन रेपॉझिटरी क्लोन करा आणि quiz-app फोल्डरमध्ये जा.

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm पॅकेजेस आणि डिपेंडन्सी इंस्टॉल करा.

   ```bash
   npm install
   ```

### अ‍ॅप तयार करा

1. सोल्यूशन तयार करण्यासाठी, खालील कमांड चालवा:

   ```bash
   npm run build
   ```

### अ‍ॅप सुरू करा

1. सोल्यूशन चालवण्यासाठी, खालील कमांड चालवा:

    ```bash
    npm run dev
    ```

### [ऐच्छिक] लिंटिंग

1. कोड लिंटिंग सुनिश्चित करण्यासाठी, खालील कमांड चालवा:

    ```bash
    npm run lint
    ```

## क्विझ अ‍ॅप Azure वर डिप्लॉय करा 

### पूर्वतयारी
- Azure सबस्क्रिप्शन. विनामूल्य साइन अप करण्यासाठी [येथे](https://aka.ms/azure-free) भेट द्या.

    _या क्विझ अ‍ॅपला डिप्लॉय करण्याचा खर्च: विनामूल्य_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

वरील लिंकद्वारे Azure वर साइन इन केल्यानंतर, सबस्क्रिप्शन आणि रिसोर्स ग्रुप निवडा:

- स्टॅटिक वेब अ‍ॅप तपशील: नाव द्या आणि होस्टिंग प्लॅन निवडा.
- GitHub लॉगिन: तुमचा डिप्लॉयमेंट स्रोत GitHub म्हणून सेट करा, नंतर लॉगिन करा आणि फॉर्मवरील आवश्यक फील्ड भरा:
    - *संस्था* – तुमची संस्था निवडा.
    - *रेपॉझिटरी* – Web Dev for Beginners अभ्यासक्रमाची रेपॉझिटरी निवडा.
    - *शाखा* - शाखा निवडा (main)
- बिल्ड प्रीसेट्स: Azure Static Web Apps तुमच्या अ‍ॅप्लिकेशनमध्ये वापरलेला फ्रेमवर्क ओळखण्यासाठी डिटेक्शन अल्गोरिदम वापरते.
    - *अ‍ॅप लोकेशन* - ./quiz-app
    - *Api लोकेशन* -
    - *आउटपुट लोकेशन* - dist
- डिप्लॉयमेंट: 'Review + Create' वर क्लिक करा, नंतर 'Create' वर क्लिक करा.

    एकदा डिप्लॉय झाल्यावर, *.github* डिरेक्टरीमध्ये एक वर्कफ्लो फाइल तयार केली जाईल. ही वर्कफ्लो फाइल अशा इव्हेंट्सच्या सूचना देते ज्यामुळे अ‍ॅप पुन्हा Azure वर डिप्लॉय होईल, उदाहरणार्थ, _शाखा **main** वर **push** इत्यादी._

    <details>
    <summary>वर्कफ्लो फाइलचे उदाहरण</summary>
    GitHub Actions वर्कफ्लो फाइल कशी दिसेल याचे उदाहरण येथे दिले आहे:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- डिप्लॉयमेंटनंतर: डिप्लॉयमेंट पूर्ण झाल्यावर 'Go to Deployment' वर क्लिक करा आणि 'View app in browser' निवडा.

तुमचा GitHub Action (वर्कफ्लो) यशस्वीपणे पूर्ण झाल्यावर, लाईव्ह पृष्ठ रीफ्रेश करा आणि तुमचे अ‍ॅप्लिकेशन पहा.

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी कृपया लक्षात ठेवा की स्वयंचलित भाषांतरांमध्ये त्रुटी किंवा अचूकतेचा अभाव असू शकतो. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानला जावा. महत्त्वाच्या माहितीसाठी व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून उद्भवलेल्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.