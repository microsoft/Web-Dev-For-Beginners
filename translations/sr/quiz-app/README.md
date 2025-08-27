<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T23:11:13+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "sr"
}
-->
# Квиз апликација

Ови квизови су предавања пре и после лекција у оквиру наставног плана и програма за науку о подацима на https://aka.ms/webdev-beginners

## Додавање преведеног скупа квизова

Додајте превод квиза креирањем одговарајућих структура квиза у фасцикли `assets/translations`. Канонски квизови се налазе у `assets/translations/en`. Квизови су подељени у неколико група. Уверите се да је нумерација усклађена са одговарајућим делом квиза. У овом наставном плану и програму постоји укупно 40 квизова, а бројање почиње од 0.

  
<details>
<summary>Овако изгледа структура датотеке за превод:</summary>

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

Након уређивања превода, измените датотеку `index.js` у фасцикли за преводе како бисте увезли све датотеке пратећи конвенције у `en`.

Измените датотеку `index.js` у `assets/translations` како бисте увезли нове преведене датотеке. 

На пример, ако је ваш превод у JSON формату у датотеци `ex.json`, поставите 'ex' као кључ за локализацију, а затим га унесите као што је приказано испод за увоз:

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

## Покретање квиз апликације локално

### Предуслови

- Налог на GitHub-у
- [Node.js и Git](https://nodejs.org/)

### Инсталација и подешавање

1. Креирајте репозиторијум из овог [темплејта](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Клонирајте свој нови репозиторијум и идите у фасциклу квиз апликације

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Инсталирајте npm пакете и зависности

   ```bash
   npm install
   ```

### Изградња апликације

1. Да бисте изградили решење, покрените:

   ```bash
   npm run build
   ```

### Покретање апликације

1. Да бисте покренули решење, покрените:

    ```bash
    npm run dev
    ```

### [Опционо] Линтовање

1. Да бисте осигурали да је код линтован, покрените:

    ```bash
    npm run lint
    ```

## Деплој квиз апликације на Azure 

### Предуслови
- Azure претплата. Пријавите се за бесплатну претплату [овде](https://aka.ms/azure-free).

    _Процена трошкова за деплој ове квиз апликације: БЕСПЛАТНО_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Када се пријавите на Azure преко горњег линка, изаберите претплату и ресурсну групу, а затим:

- Детаљи за Static Web App: Унесите име и изаберите план хостинга
- Пријава на GitHub: Поставите извор деплоја као GitHub, затим се пријавите и попуните потребна поља у формулару:
    - *Организација* – Изаберите своју организацију.
    - *Репозиторијум* – Изаберите репозиторијум наставног плана и програма Web Dev for Beginners. 
    - *Грана* - Изаберите грану (main) 
- Пресети за изградњу: Azure Static Web Apps користи алгоритам за детекцију како би открио оквир који се користи у вашој апликацији. 
    - *Локација апликације* - ./quiz-app
    - *Локација API-ја* -
    - *Локација излаза* - dist
- Деплој: Кликните 'Review + Create', затим 'Create'

    Када се деплој заврши, датотека за workflow ће бити креирана у *.github* директоријуму вашег репозиторијума. Ова workflow датотека садржи инструкције о догађајима који ће покренути поновни деплој апликације на Azure, на пример, _**push** на грану **main**_ итд.

    <details>
    <summary>Пример workflow датотеке</summary>
    Ево примера како би workflow датотека за GitHub Actions могла изгледати:
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

- Пост-деплој: Након што је деплој завршен, кликните на 'Go to Deployment', затим 'View app in browser'.

Када се ваш GitHub Action (workflow) успешно изврши, освежите живу страницу да бисте видели своју апликацију.

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.