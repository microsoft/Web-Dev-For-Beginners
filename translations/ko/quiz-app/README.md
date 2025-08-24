<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-24T00:23:54+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "ko"
}
-->
# 퀴즈 앱

이 퀴즈들은 데이터 과학 커리큘럼의 강의 전후 퀴즈로, https://aka.ms/webdev-beginners에서 제공됩니다.

## 번역된 퀴즈 세트 추가하기

번역된 퀴즈를 추가하려면 `assets/translations` 폴더에 일치하는 퀴즈 구조를 생성하세요. 원본 퀴즈는 `assets/translations/en`에 있습니다. 퀴즈는 여러 그룹으로 나뉘어 있으며, 올바른 퀴즈 섹션과 번호를 맞춰야 합니다. 이 커리큘럼에는 총 40개의 퀴즈가 있으며, 번호는 0부터 시작합니다.

<details>
<summary>번역 파일의 구조는 다음과 같습니다:</summary>

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

번역을 완료한 후, `en`의 규칙을 따라 번역 폴더의 index.js 파일을 편집하여 모든 파일을 가져오도록 수정하세요.

`assets/translations`의 `index.js` 파일을 편집하여 새 번역 파일을 가져오도록 설정하세요.

예를 들어, 번역된 JSON 파일이 `ex.json`이라면, 'ex'를 로컬라이제이션 키로 설정하고 아래와 같이 입력하세요:

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

## 퀴즈 앱을 로컬에서 실행하기

### 사전 준비

- GitHub 계정
- [Node.js와 Git](https://nodejs.org/)

### 설치 및 설정

1. 이 [템플릿](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft)에서 리포지토리를 생성하세요.

1. 새로 생성한 리포지토리를 클론하고, quiz-app 디렉토리로 이동하세요.

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm 패키지와 의존성을 설치하세요.

   ```bash
   npm install
   ```

### 앱 빌드하기

1. 솔루션을 빌드하려면 다음 명령을 실행하세요:

   ```bash
   npm run build
   ```

### 앱 시작하기

1. 솔루션을 실행하려면 다음 명령을 실행하세요:

    ```bash
    npm run dev
    ```

### [선택 사항] 린팅

1. 코드가 린트되었는지 확인하려면 다음 명령을 실행하세요:

    ```bash
    npm run lint
    ```

## 퀴즈 앱을 Azure에 배포하기

### 사전 준비
- Azure 구독. 무료로 가입하려면 [여기](https://aka.ms/azure-free)를 클릭하세요.

    _이 퀴즈 앱을 배포하는 비용 추정: 무료_

[![Azure에 배포하기](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

위 링크를 통해 Azure에 로그인한 후, 구독과 리소스 그룹을 선택하세요:

- 정적 웹 앱 세부 정보: 이름을 제공하고 호스팅 플랜을 선택하세요.
- GitHub 로그인: 배포 소스를 GitHub로 설정한 후 로그인하고 양식의 필수 필드를 채우세요:
    - *Organization* – 조직을 선택하세요.
    - *Repository* – Web Dev for Beginners 커리큘럼 리포지토리를 선택하세요.
    - *Branch* - 브랜치(main)를 선택하세요.
- 빌드 프리셋: Azure Static Web Apps는 애플리케이션에서 사용된 프레임워크를 감지하는 알고리즘을 사용합니다.
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- 배포: 'Review + Create'를 클릭한 후 'Create'를 클릭하세요.

    배포가 완료되면, 리포지토리의 *.github* 디렉토리에 워크플로 파일이 생성됩니다. 이 워크플로 파일에는 앱이 Azure에 다시 배포되는 이벤트에 대한 지침이 포함되어 있습니다. 예를 들어, _브랜치 **main**에서 **push**가 발생했을 때_ 등.

    <details>
    <summary>워크플로 파일 예시</summary>
    GitHub Actions 워크플로 파일의 예시는 다음과 같습니다:
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

- 배포 후: 배포가 완료되면 'Go to Deployment'를 클릭한 후 'View app in browser'를 클릭하세요.

GitHub Action(워크플로)이 성공적으로 실행되면, 라이브 페이지를 새로고침하여 애플리케이션을 확인하세요.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.