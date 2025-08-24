<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-24T13:56:55+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "hi"
}
-->
# क्विज़ ऐप

ये क्विज़ डेटा साइंस पाठ्यक्रम के लिए प्री- और पोस्ट-लेक्चर क्विज़ हैं, जो https://aka.ms/webdev-beginners पर उपलब्ध है।

## अनुवादित क्विज़ सेट जोड़ना

किसी क्विज़ का अनुवाद जोड़ने के लिए, `assets/translations` फोल्डर में समान क्विज़ संरचनाएँ बनाएं। मूल क्विज़ `assets/translations/en` में हैं। क्विज़ को कई समूहों में विभाजित किया गया है। सुनिश्चित करें कि सही क्विज़ सेक्शन के साथ नंबरिंग मेल खाती हो। इस पाठ्यक्रम में कुल 40 क्विज़ हैं, जिनकी गिनती 0 से शुरू होती है।

  
<details>
<summary>यहाँ अनुवाद फ़ाइल की संरचना दी गई है:</summary>

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

अनुवाद संपादित करने के बाद, `en` में दिए गए नियमों का पालन करते हुए, अनुवाद फोल्डर में `index.js` फ़ाइल को संपादित करें और सभी फाइलें इम्पोर्ट करें।

`assets/translations` में `index.js` फ़ाइल को संपादित करें और नई अनुवादित फाइलें इम्पोर्ट करें।

उदाहरण के लिए, यदि आपका अनुवाद JSON `ex.json` में है, तो 'ex' को स्थानीयकरण कुंजी बनाएं और इसे नीचे दिखाए गए अनुसार इम्पोर्ट करें:

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

## क्विज़ ऐप को लोकल रूप से चलाएं

### आवश्यकताएँ

- एक GitHub खाता
- [Node.js और Git](https://nodejs.org/)

### इंस्टॉल और सेटअप

1. इस [टेम्पलेट](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) से एक रिपॉजिटरी बनाएं।

1. अपनी नई रिपॉजिटरी को क्लोन करें और क्विज़-ऐप पर नेविगेट करें:

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm पैकेज और डिपेंडेंसी इंस्टॉल करें:

   ```bash
   npm install
   ```

### ऐप बनाएं

1. समाधान बनाने के लिए, यह कमांड चलाएं:

   ```bash
   npm run build
   ```

### ऐप शुरू करें

1. समाधान चलाने के लिए, यह कमांड चलाएं:

    ```bash
    npm run dev
    ```

### [वैकल्पिक] लिंटिंग

1. कोड को लिंट करने के लिए, यह कमांड चलाएं:

    ```bash
    npm run lint
    ```

## क्विज़ ऐप को Azure पर डिप्लॉय करें

### आवश्यकताएँ
- एक Azure सब्सक्रिप्शन। [यहाँ](https://aka.ms/azure-free) मुफ्त में साइन अप करें।

    _इस क्विज़ ऐप को डिप्लॉय करने की लागत: मुफ्त_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

ऊपर दिए गए लिंक के माध्यम से Azure पर साइन इन करने के बाद, एक सब्सक्रिप्शन और रिसोर्स ग्रुप चुनें, फिर:

- स्टैटिक वेब ऐप विवरण: एक नाम प्रदान करें और होस्टिंग प्लान चुनें।
- GitHub लॉगिन: अपना डिप्लॉयमेंट स्रोत GitHub के रूप में सेट करें, फिर लॉग इन करें और फॉर्म में आवश्यक फ़ील्ड भरें:
    - *Organization* – अपना संगठन चुनें।
    - *Repository* – Web Dev for Beginners पाठ्यक्रम रिपॉजिटरी चुनें।
    - *Branch* - एक ब्रांच चुनें (main)।
- बिल्ड प्रीसेट्स: Azure Static Web Apps आपके ऐप्लिकेशन में उपयोग किए गए फ्रेमवर्क का पता लगाने के लिए एक डिटेक्शन एल्गोरिदम का उपयोग करता है।
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- डिप्लॉयमेंट: 'Review + Create' पर क्लिक करें, फिर 'Create' पर क्लिक करें।

    एक बार डिप्लॉय होने के बाद, आपकी रिपॉजिटरी की *.github* डायरेक्टरी में एक वर्कफ़्लो फ़ाइल बनाई जाएगी। यह वर्कफ़्लो फ़ाइल उन इवेंट्स के निर्देश देती है जो ऐप को Azure पर फिर से डिप्लॉय करेंगे, जैसे कि _ब्रांच **main** पर **push**_।

    <details>
    <summary>वर्कफ़्लो फ़ाइल का उदाहरण</summary>
    यहाँ GitHub Actions वर्कफ़्लो फ़ाइल का एक उदाहरण दिया गया है:
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

- पोस्ट-डिप्लॉयमेंट: डिप्लॉयमेंट पूरा होने के बाद, 'Go to Deployment' पर क्लिक करें और फिर 'View app in browser' पर क्लिक करें।

एक बार जब आपका GitHub Action (वर्कफ़्लो) सफलतापूर्वक निष्पादित हो जाए, तो लाइव पेज को रिफ्रेश करें और अपना ऐप्लिकेशन देखें।

**अस्वीकरण**:  
यह दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके अनुवादित किया गया है। जबकि हम सटीकता के लिए प्रयासरत हैं, कृपया ध्यान दें कि स्वचालित अनुवाद में त्रुटियां या अशुद्धियां हो सकती हैं। मूल भाषा में उपलब्ध मूल दस्तावेज़ को प्रामाणिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए, पेशेवर मानव अनुवाद की सिफारिश की जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम उत्तरदायी नहीं हैं।