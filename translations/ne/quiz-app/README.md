# क्विज एप

यी क्विजहरू डेटा साइन्स पाठ्यक्रमका लागि प्रि-र र पोस्ट-लेक्चर क्विजहरू हुन्, जुन https://aka.ms/webdev-beginners मा उपलब्ध छ।

## अनुवादित क्विज सेट थप्ने

क्विज अनुवाद थप्न `assets/translations` फोल्डरमा मिल्दो क्विज संरचना सिर्जना गर्नुहोस्। मूल क्विजहरू `assets/translations/en` मा छन्। क्विजहरू विभिन्न समूहहरूमा विभाजित छन्। सही क्विज सेक्सनसँग नम्बरिङ मिलाउन सुनिश्चित गर्नुहोस्। यो पाठ्यक्रममा जम्मा ४० वटा क्विजहरू छन्, जसको गणना ० बाट सुरु हुन्छ।

  
<details>
<summary>अनुवाद फाइलको संरचना यस प्रकारको हुन्छ:</summary>

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

अनुवाद सम्पादन गरेपछि, `en` मा भएका नियमहरू पालना गर्दै अनुवाद फोल्डरको `index.js` फाइल सम्पादन गरी सबै फाइलहरू इम्पोर्ट गर्नुहोस्।

`assets/translations` को `index.js` फाइल सम्पादन गरी नयाँ अनुवादित फाइलहरू इम्पोर्ट गर्नुहोस्। 

उदाहरणका लागि, यदि तपाईंको अनुवाद JSON `ex.json` मा छ भने, 'ex' लाई स्थानीयकरण कुञ्जी बनाउनुहोस्, त्यसपछि यसलाई तल देखाइएको अनुसार इम्पोर्ट गर्नुहोस्:

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

## क्विज एपलाई स्थानीय रूपमा चलाउनुहोस्

### आवश्यकताहरू

- GitHub खाता
- [Node.js र Git](https://nodejs.org/)

### स्थापना र सेटअप

1. यो [टेम्प्लेट](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) बाट एउटा रिपोजिटरी सिर्जना गर्नुहोस्।

1. आफ्नो नयाँ रिपोजिटरी क्लोन गर्नुहोस्, र `quiz-app` मा जानुहोस्।

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm प्याकेजहरू र निर्भरता स्थापना गर्नुहोस्।

   ```bash
   npm install
   ```

### एप निर्माण गर्नुहोस्

1. समाधान निर्माण गर्न, निम्न कमाण्ड चलाउनुहोस्:

   ```bash
   npm run build
   ```

### एप सुरु गर्नुहोस्

1. समाधान चलाउन, निम्न कमाण्ड चलाउनुहोस्:

    ```bash
    npm run dev
    ```

### [वैकल्पिक] लिन्टिङ

1. कोड लिन्ट गरिएको सुनिश्चित गर्न, निम्न कमाण्ड चलाउनुहोस्:

    ```bash
    npm run lint
    ```

## क्विज एपलाई Azure मा डिप्लोय गर्नुहोस्

### आवश्यकताहरू
- Azure सदस्यता। निःशुल्क सदस्यता लिन यहाँ साइन अप गर्नुहोस् [यहाँ](https://aka.ms/azure-free)।

    _यो क्विज एप डिप्लोय गर्न लाग्ने अनुमानित लागत: निःशुल्क_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

माथिको लिंकमार्फत Azure मा साइन इन गरेपछि, सदस्यता र स्रोत समूह चयन गर्नुहोस्:

- स्टाटिक वेब एप विवरण: नाम प्रदान गर्नुहोस् र होस्टिङ योजना चयन गर्नुहोस्।
- GitHub लगइन: आफ्नो डिप्लोयमेन्ट स्रोत GitHub सेट गर्नुहोस्, त्यसपछि लगइन गरी फारममा आवश्यक विवरणहरू भर्नुहोस्:
    - *Organization* – आफ्नो संगठन चयन गर्नुहोस्।
    - *Repository* – Web Dev for Beginners पाठ्यक्रमको रिपोजिटरी चयन गर्नुहोस्। 
    - *Branch* - शाखा चयन गर्नुहोस् (main) 
- निर्माण प्रिसेट: Azure Static Web Apps ले तपाईंको एप्लिकेसनमा प्रयोग गरिएको फ्रेमवर्क पत्ता लगाउन एल्गोरिदम प्रयोग गर्दछ। 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- डिप्लोयमेन्ट: 'Review + Create' मा क्लिक गर्नुहोस्, त्यसपछि 'Create' मा क्लिक गर्नुहोस्।

    डिप्लोय भएपछि, तपाईंको रिपोजिटरीको *.github* डाइरेक्टरीमा एउटा वर्कफ्लो फाइल सिर्जना हुनेछ। यो वर्कफ्लो फाइलमा एप Azure मा पुनःडिप्लोय गर्न ट्रिगर गर्ने घटनाहरूको निर्देशन हुनेछ, जस्तै _शाखा **main** मा **push**_ आदि।

    <details>
    <summary>वर्कफ्लो फाइलको उदाहरण</summary>
    यहाँ GitHub Actions वर्कफ्लो फाइलको उदाहरण छ:
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

- पोस्ट-डिप्लोयमेन्ट: डिप्लोयमेन्ट पूरा भएपछि, 'Go to Deployment' मा क्लिक गर्नुहोस्, त्यसपछि 'View app in browser' मा क्लिक गर्नुहोस्।

तपाईंको GitHub Action (वर्कफ्लो) सफलतापूर्वक कार्यान्वयन भएपछि, लाइभ पेज रिफ्रेस गरी आफ्नो एप हेर्नुहोस्।

**अस्वीकरण**:  
यो दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) प्रयोग गरेर अनुवाद गरिएको हो। हामी शुद्धताको लागि प्रयास गर्छौं, तर कृपया ध्यान दिनुहोस् कि स्वचालित अनुवादमा त्रुटिहरू वा अशुद्धताहरू हुन सक्छ। यसको मूल भाषा मा रहेको मूल दस्तावेज़लाई आधिकारिक स्रोत मानिनुपर्छ। महत्वपूर्ण जानकारीको लागि, व्यावसायिक मानव अनुवाद सिफारिस गरिन्छ। यस अनुवादको प्रयोगबाट उत्पन्न हुने कुनै पनि गलतफहमी वा गलत व्याख्याको लागि हामी जिम्मेवार हुने छैनौं।