<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T22:40:11+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "uk"
}
-->
# Додаток для вікторин

Ці вікторини є попередніми та підсумковими тестами для навчальної програми з науки про дані на https://aka.ms/webdev-beginners

## Додавання перекладеного набору вікторин

Додайте переклад вікторини, створивши відповідні структури вікторин у папках `assets/translations`. Оригінальні вікторини знаходяться в `assets/translations/en`. Вікторини розділені на кілька груп. Переконайтеся, що нумерація відповідає правильному розділу вікторини. У цій навчальній програмі всього 40 вікторин, починаючи з 0.

  
<details>
<summary>Ось структура файлу перекладу:</summary>

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

Після редагування перекладів відредагуйте файл index.js у папці перекладу, щоб імпортувати всі файли відповідно до конвенцій у `en`.

Відредагуйте файл `index.js` у `assets/translations`, щоб імпортувати нові перекладені файли.

Наприклад, якщо ваш перекладений JSON знаходиться у файлі `ex.json`, зробіть 'ex' ключем локалізації, а потім додайте його, як показано нижче, для імпорту:

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

## Запуск додатка для вікторин локально

### Попередні вимоги

- Обліковий запис GitHub
- [Node.js та Git](https://nodejs.org/)

### Встановлення та налаштування

1. Створіть репозиторій із цього [шаблону](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Клонуйте ваш новий репозиторій і перейдіть до папки quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Встановіть npm-пакети та залежності

   ```bash
   npm install
   ```

### Збірка додатка

1. Для збірки рішення виконайте:

   ```bash
   npm run build
   ```

### Запуск додатка

1. Для запуску рішення виконайте:

    ```bash
    npm run dev
    ```

### [Необов'язково] Лінтинг

1. Щоб переконатися, що код пройшов лінтинг, виконайте:

    ```bash
    npm run lint
    ```

## Розгортання додатка для вікторин на Azure 

### Попередні вимоги
- Підписка на Azure. Зареєструйтеся безкоштовно [тут](https://aka.ms/azure-free).

    _Орієнтовна вартість розгортання цього додатка: БЕЗКОШТОВНО_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Після входу в Azure через посилання вище виберіть підписку та групу ресурсів, а потім:

- Деталі статичного веб-додатка: Вкажіть назву та виберіть план хостингу
- Вхід до GitHub: Встановіть джерело розгортання як GitHub, потім увійдіть і заповніть необхідні поля у формі:
    - *Організація* – Виберіть вашу організацію.
    - *Репозиторій* – Виберіть репозиторій навчальної програми Web Dev for Beginners. 
    - *Гілка* - Виберіть гілку (main) 
- Налаштування збірки: Azure Static Web Apps використовує алгоритм для визначення фреймворку, який використовується у вашому додатку. 
    - *Розташування додатка* - ./quiz-app
    - *Розташування API* -
    - *Розташування вихідних даних* - dist
- Розгортання: Натисніть 'Review + Create', потім 'Create'

    Після розгортання у вашому репозиторії в директорії *.github* буде створено файл workflow. Цей файл містить інструкції щодо подій, які ініціюють повторне розгортання додатка на Azure, наприклад, _**push** у гілку **main**_ тощо.

    <details>
    <summary>Приклад файлу Workflow</summary>
    Ось приклад того, як може виглядати файл workflow для GitHub Actions:
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

- Після розгортання: Після завершення розгортання натисніть 'Go to Deployment', а потім 'View app in browser'.

Після успішного виконання GitHub Action (workflow) оновіть сторінку, щоб переглянути ваш додаток.

---

**Відмова від відповідальності**:  
Цей документ був перекладений за допомогою сервісу автоматичного перекладу [Co-op Translator](https://github.com/Azure/co-op-translator). Хоча ми прагнемо до точності, будь ласка, майте на увазі, що автоматичні переклади можуть містити помилки або неточності. Оригінальний документ на його рідній мові слід вважати авторитетним джерелом. Для критичної інформації рекомендується професійний людський переклад. Ми не несемо відповідальності за будь-які непорозуміння або неправильні тлумачення, що виникають внаслідок використання цього перекладу.