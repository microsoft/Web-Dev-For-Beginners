# Приложение для викторин

Эти викторины предназначены для предварительных и итоговых тестов в рамках учебной программы по науке о данных на https://aka.ms/webdev-beginners

## Добавление переведенного набора викторин

Добавьте перевод викторины, создав соответствующие структуры викторин в папке `assets/translations`. Оригинальные викторины находятся в `assets/translations/en`. Викторины разделены на несколько групп. Убедитесь, что нумерация соответствует правильному разделу викторин. В этой учебной программе всего 40 викторин, начиная с номера 0.

  
<details>
<summary>Вот структура файла перевода:</summary>

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

После редактирования переводов отредактируйте файл index.js в папке перевода, чтобы импортировать все файлы в соответствии с конвенциями в `en`.

Отредактируйте файл `index.js` в `assets/translations`, чтобы импортировать новые переведенные файлы. 

Например, если ваш перевод в формате JSON находится в `ex.json`, используйте 'ex' в качестве ключа локализации, затем добавьте его, как показано ниже, чтобы импортировать:

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

## Запуск приложения для викторин локально

### Предварительные требования

- Аккаунт на GitHub
- [Node.js и Git](https://nodejs.org/)

### Установка и настройка

1. Создайте репозиторий из этого [шаблона](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Клонируйте ваш новый репозиторий и перейдите в папку quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Установите npm-пакеты и зависимости

   ```bash
   npm install
   ```

### Сборка приложения

1. Чтобы собрать решение, выполните:

   ```bash
   npm run build
   ```

### Запуск приложения

1. Чтобы запустить решение, выполните:

    ```bash
    npm run dev
    ```

### [Опционально] Линтинг

1. Чтобы убедиться, что код соответствует стандартам, выполните:

    ```bash
    npm run lint
    ```

## Развертывание приложения для викторин в Azure 

### Предварительные требования
- Подписка на Azure. Зарегистрируйтесь бесплатно [здесь](https://aka.ms/azure-free).

    _Оценка стоимости развертывания этого приложения: БЕСПЛАТНО_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

После входа в Azure через ссылку выше выберите подписку и группу ресурсов, затем:

- Детали статического веб-приложения: Укажите имя и выберите план хостинга
- Вход в GitHub: Установите источник развертывания как GitHub, затем войдите и заполните необходимые поля формы:
    - *Organization* – Выберите вашу организацию.
    - *Repository* – Выберите репозиторий учебной программы Web Dev for Beginners. 
    - *Branch* - Выберите ветку (main) 
- Предустановки сборки: Azure Static Web Apps использует алгоритм для определения фреймворка, используемого в вашем приложении. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Развертывание: Нажмите 'Review + Create', затем 'Create'

    После развертывания в директории *.github* вашего репозитория будет создан файл workflow. Этот файл содержит инструкции о событиях, которые будут запускать повторное развертывание приложения в Azure, например, _**push** в ветку **main**_ и т.д.

    <details>
    <summary>Пример файла Workflow</summary>
    Вот пример того, как может выглядеть файл workflow для GitHub Actions:
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

- После развертывания: После завершения развертывания нажмите 'Go to Deployment', затем 'View app in browser'.

После успешного выполнения GitHub Action (workflow) обновите страницу, чтобы увидеть ваше приложение в действии.

**Отказ от ответственности**:  
Этот документ был переведен с использованием сервиса автоматического перевода [Co-op Translator](https://github.com/Azure/co-op-translator). Хотя мы стремимся к точности, пожалуйста, учитывайте, что автоматические переводы могут содержать ошибки или неточности. Оригинальный документ на его родном языке следует считать авторитетным источником. Для получения критически важной информации рекомендуется профессиональный перевод человеком. Мы не несем ответственности за любые недоразумения или неправильные интерпретации, возникшие в результате использования данного перевода.