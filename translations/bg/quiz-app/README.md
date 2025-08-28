<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-28T08:17:50+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "bg"
}
-->
# Приложение за тестове

Тези тестове са предварителни и последващи тестове към лекциите от учебната програма за наука за данни на https://aka.ms/webdev-beginners

## Добавяне на преведен набор от тестове

Добавете превод на тестовете, като създадете съответстващи структури на тестовете в папката `assets/translations`. Оригиналните тестове се намират в `assets/translations/en`. Тестовете са разделени на няколко групи. Уверете се, че номерацията съответства на правилния раздел от тестовете. В тази учебна програма има общо 40 теста, като броенето започва от 0.

  
<details>
<summary>Ето как изглежда файлът за превод:</summary>

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

След като редактирате преводите, редактирайте файла `index.js` в папката за преводи, за да импортирате всички файлове, следвайки конвенциите в `en`.

Редактирайте файла `index.js` в `assets/translations`, за да импортирате новите преведени файлове.

Например, ако вашият JSON файл за превод е `ex.json`, направете 'ex' ключ за локализация, след което го въведете, както е показано по-долу, за да го импортирате:

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

## Стартиране на приложението за тестове локално

### Предварителни условия

- Акаунт в GitHub
- [Node.js и Git](https://nodejs.org/)

### Инсталиране и настройка

1. Създайте хранилище от този [шаблон](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Клонирайте новото си хранилище и навигирайте до папката quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Инсталирайте npm пакетите и зависимостите

   ```bash
   npm install
   ```

### Създаване на приложението

1. За да създадете решението, изпълнете:

   ```bash
   npm run build
   ```

### Стартиране на приложението

1. За да стартирате решението, изпълнете:

    ```bash
    npm run dev
    ```

### [Опционално] Линтинг

1. За да се уверите, че кодът е проверен, изпълнете:

    ```bash
    npm run lint
    ```

## Деплой на приложението за тестове в Azure 

### Предварителни условия
- Абонамент за Azure. Регистрирайте се за безплатен [тук](https://aka.ms/azure-free).

    _Оценка на разходите за деплой на това приложение за тестове: БЕЗПЛАТНО_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

След като влезете в Azure чрез горния линк, изберете абонамент и ресурсна група, след това:

- Детайли за статичното уеб приложение: Въведете име и изберете хостинг план
- Вход в GitHub: Задайте източника на деплой като GitHub, след това влезте и попълнете необходимите полета във формуляра:
    - *Организация* – Изберете вашата организация.
    - *Хранилище* – Изберете хранилището за учебната програма Web Dev for Beginners. 
    - *Клон* - Изберете клон (main) 
- Предварителни настройки за създаване: Azure Static Web Apps използва алгоритъм за откриване на рамката, използвана във вашето приложение. 
    - *Местоположение на приложението* - ./quiz-app
    - *Местоположение на API* -
    - *Местоположение на изхода* - dist
- Деплой: Кликнете 'Review + Create', след това 'Create'

    След като деплойът е завършен, файл за работен процес ще бъде създаден в директорията *.github* на вашето хранилище. Този файл за работен процес съдържа инструкции за събития, които ще задействат повторен деплой на приложението в Azure, например _**push** на клон **main**_ и др.

    <details>
    <summary>Примерен файл за работен процес</summary>
    Ето как може да изглежда файлът за работен процес на GitHub Actions:
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

- След деплой: След като деплойът е завършен, кликнете върху 'Go to Deployment', след това 'View app in browser'.

След като GitHub Action (работен процес) бъде успешно изпълнен, обновете страницата на живо, за да видите вашето приложение.

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия изходен език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален превод от човек. Ние не носим отговорност за каквито и да е недоразумения или погрешни интерпретации, произтичащи от използването на този превод.