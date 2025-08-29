<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "361249da70432ddfd4741c917d1a6f50",
  "translation_date": "2025-08-29T15:46:33+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "ko"
}
-->
# GitHub 소개

이 강의에서는 코드를 호스팅하고 변경 사항을 관리할 수 있는 플랫폼인 GitHub의 기본 사항을 다룹니다.

![GitHub 소개](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.ko.png)
> [Tomomi Imura](https://twitter.com/girlie_mac)의 스케치노트

## 강의 전 퀴즈
[강의 전 퀴즈](https://ff-quizzes.netlify.app)

## 소개

이번 강의에서는 다음 내용을 다룹니다:

- 로컬 컴퓨터에서 작업을 추적하는 방법
- 다른 사람들과 프로젝트를 함께 작업하는 방법
- 오픈 소스 소프트웨어에 기여하는 방법

### 사전 준비 사항

시작하기 전에 Git이 설치되어 있는지 확인해야 합니다. 터미널에 다음을 입력하세요:  
`git --version`

Git이 설치되어 있지 않다면, [Git 다운로드](https://git-scm.com/downloads) 페이지에서 설치하세요. 그런 다음 터미널에서 로컬 Git 프로필을 설정하세요:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Git이 이미 설정되어 있는지 확인하려면 다음을 입력하세요:  
`git config --list`

또한 GitHub 계정, 코드 편집기(예: Visual Studio Code), 터미널(또는 명령 프롬프트)이 필요합니다.

[github.com](https://github.com/)으로 이동하여 계정을 생성하거나 로그인한 후 프로필을 작성하세요.

✅ GitHub는 세상에 존재하는 유일한 코드 저장소가 아닙니다. 다른 저장소도 있지만, GitHub가 가장 잘 알려져 있습니다.

### 준비

로컬 컴퓨터(노트북 또는 PC)에 코드 프로젝트가 포함된 폴더와 GitHub에 있는 공개 저장소가 필요합니다. 이 저장소는 다른 사람들의 프로젝트에 기여하는 방법을 배우는 예제로 사용됩니다.

---

## 코드 관리

로컬에 코드 프로젝트가 포함된 폴더가 있다고 가정해 봅시다. 이 폴더에서 Git(버전 관리 시스템)을 사용하여 작업 진행 상황을 추적하고 싶습니다. Git을 사용하는 것은 미래의 자신에게 사랑의 편지를 쓰는 것과 같다고 비유되곤 합니다. 며칠, 몇 주, 몇 달 후에 커밋 메시지를 읽으면 왜 특정 결정을 내렸는지 기억하거나 변경 사항을 "롤백"할 수 있습니다. 단, 좋은 "커밋 메시지"를 작성했을 때만 가능합니다.

### 작업: 저장소 생성 및 코드 커밋  

> 동영상 확인하기  
> 
> [![Git 및 GitHub 기본 동영상](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **GitHub에서 저장소 생성**. GitHub.com에서 저장소 탭 또는 오른쪽 상단의 탐색 바에서 **새 저장소** 버튼을 찾으세요.

   1. 저장소(폴더)에 이름을 지정하세요.
   1. **저장소 생성**을 선택하세요.

1. **작업 폴더로 이동**. 터미널에서 추적을 시작하려는 폴더(디렉토리)로 이동하세요. 다음을 입력하세요:

   ```bash
   cd [name of your folder]
   ```

1. **Git 저장소 초기화**. 프로젝트에서 다음을 입력하세요:

   ```bash
   git init
   ```

1. **상태 확인**. 저장소 상태를 확인하려면 다음을 입력하세요:

   ```bash
   git status
   ```

   출력은 다음과 비슷할 수 있습니다:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   일반적으로 `git status` 명령은 저장소에 _저장_할 준비가 된 파일이나 변경 사항이 있는 파일을 알려줍니다.

1. **추적할 모든 파일 추가**  
   이는 파일을 스테이징 영역에 추가하는 작업으로도 불립니다.

   ```bash
   git add .
   ```

   `git add`와 `.` 인수는 모든 파일 및 변경 사항을 추적하도록 지정합니다.

1. **선택한 파일만 추가**  

   ```bash
   git add [file or folder name]
   ```

   이는 모든 파일을 한 번에 커밋하지 않고 선택한 파일만 스테이징 영역에 추가할 때 유용합니다.

1. **모든 파일 스테이징 해제**  

   ```bash
   git reset
   ```

   이 명령은 한 번에 모든 파일의 스테이징을 해제하는 데 유용합니다.

1. **특정 파일 스테이징 해제**  

   ```bash
   git reset [file or folder name]
   ```

   이 명령은 특정 파일만 스테이징 해제하려는 경우에 유용합니다.

1. **작업 저장**. 이 시점에서 파일을 _스테이징 영역_에 추가했습니다. Git이 파일을 추적하고 있는 상태입니다. 변경 사항을 영구적으로 저장하려면 파일을 _커밋_해야 합니다. `git commit` 명령을 사용하여 _커밋_을 생성하세요. 커밋은 저장소의 기록에서 저장 지점을 나타냅니다. 다음을 입력하여 _커밋_을 생성하세요:

   ```bash
   git commit -m "first commit"
   ```

   이는 "첫 번째 커밋"이라는 메시지와 함께 모든 파일을 커밋합니다. 이후 커밋 메시지에서는 변경 사항의 유형을 전달할 수 있도록 더 구체적인 설명을 작성하는 것이 좋습니다.

1. **로컬 Git 저장소를 GitHub와 연결**. 로컬 Git 저장소는 유용하지만, 파일을 백업하거나 다른 사람들과 협업하려면 GitHub와 연결해야 합니다. `git remote add` 명령을 사용하여 이를 수행할 수 있습니다. 다음 명령을 입력하세요:

   > 명령을 입력하기 전에 GitHub 저장소 페이지로 이동하여 저장소 URL을 찾으세요. 아래 명령에서 ```https://github.com/username/repository_name.git```를 GitHub URL로 바꾸세요.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   이는 "origin"이라는 이름의 _원격_ 연결을 생성하며, 이는 이전에 생성한 GitHub 저장소를 가리킵니다.

1. **로컬 파일을 GitHub로 전송**. 지금까지 로컬 저장소와 GitHub 저장소 간의 _연결_을 생성했습니다. 이제 다음 명령 `git push`를 사용하여 파일을 GitHub로 전송하세요:

   > 기본 브랜치 이름이 ```main```와 다를 수 있습니다.

   ```bash
   git push -u origin main
   ```

   이는 "main" 브랜치의 커밋을 GitHub로 전송합니다.

2. **추가 변경 사항 추가**. 계속해서 변경 사항을 만들고 이를 GitHub로 푸시하려면 다음 세 가지 명령만 사용하면 됩니다:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > 팁: `.gitignore` 파일을 사용하여 GitHub에 추적되지 않도록 하고 싶은 파일(예: 공개 저장소에 포함되지 않아야 하는 메모 파일)을 제외할 수도 있습니다. `.gitignore` 파일 템플릿은 [.gitignore templates](https://github.com/github/gitignore)에서 찾을 수 있습니다.

#### 커밋 메시지

훌륭한 Git 커밋 제목은 다음 문장을 완성합니다:  
"적용된다면, 이 커밋은 <여기에 제목 입력>을 수행합니다."

제목에서는 명령형 현재 시제를 사용하세요: "변경" (changed나 changes가 아님).  
본문(선택 사항)에서도 명령형 현재 시제를 사용하세요. 본문에는 변경 사항의 동기를 포함하고 이전 동작과의 차이를 설명하세요. `어떻게`가 아니라 `왜`를 설명하는 것입니다.

✅ GitHub를 몇 분 동안 둘러보세요. 정말 훌륭한 커밋 메시지를 찾을 수 있나요? 정말 간단한 메시지는요? 커밋 메시지에서 가장 중요하고 유용한 정보는 무엇이라고 생각하나요?

### 작업: 협업하기

GitHub에 파일을 올리는 주된 이유는 다른 개발자들과 협업할 수 있도록 하기 위함입니다.

## 다른 사람들과 프로젝트 작업하기

> 동영상 확인하기  
>
> [![Git 및 GitHub 기본 동영상](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

저장소에서 `Insights > Community`로 이동하여 프로젝트가 권장 커뮤니티 표준과 어떻게 비교되는지 확인하세요.

다음은 GitHub 저장소를 개선할 수 있는 몇 가지 사항입니다:
- **설명**. 프로젝트에 대한 설명을 추가했나요?
- **README**. README를 추가했나요? GitHub는 [README 작성 가이드](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon)를 제공합니다.
- **기여 가이드라인**. 프로젝트에 [기여 가이드라인](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)이 있나요?
- **행동 강령**. [행동 강령](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)이 있나요?
- **라이선스**. 아마도 가장 중요한 [라이선스](https://docs.github.com/articles/adding-a-license-to-a-repository/)가 있나요?

이 모든 리소스는 새로운 팀원을 온보딩하는 데 유용합니다. 새로운 기여자들은 일반적으로 코드를 보기 전에 이러한 리소스를 확인하여 프로젝트가 자신이 시간을 투자할 가치가 있는 곳인지 판단합니다.

✅ README 파일은 준비하는 데 시간이 걸리지만, 바쁜 유지 관리자가 종종 간과합니다. 특히 설명이 잘 된 README의 예를 찾을 수 있나요? 참고로, [좋은 README를 작성하는 데 도움이 되는 도구](https://www.makeareadme.com/)도 있습니다.

### 작업: 코드 병합하기

기여 문서는 사람들이 프로젝트에 기여할 수 있도록 돕습니다. 기여 문서에는 어떤 유형의 기여를 원하는지, 프로세스가 어떻게 진행되는지 설명합니다. 기여자는 GitHub 저장소에 기여하기 위해 일련의 단계를 거쳐야 합니다:

1. **저장소 포크**. 기여자는 프로젝트를 _포크_해야 합니다. 포크는 자신의 GitHub 프로필에 저장소 복제본을 만드는 것을 의미합니다.
1. **클론**. 그런 다음 프로젝트를 로컬 컴퓨터로 클론합니다.
1. **브랜치 생성**. 작업을 위한 _브랜치_를 생성해야 합니다.
1. **변경 사항을 한 영역에 집중**. 기여자에게 한 번에 한 가지에 집중하도록 요청하세요. 이렇게 하면 작업을 _병합_할 가능성이 높아집니다. 예를 들어, 버그 수정, 새로운 기능 추가, 여러 테스트 업데이트를 한 번에 수행하면, 3가지 중 2가지만 구현하거나 1가지만 구현할 수 있는 상황이 발생할 수 있습니다.

✅ 브랜치가 좋은 코드 작성 및 배포에 특히 중요한 상황을 상상해 보세요. 어떤 사용 사례가 떠오르나요?

> 참고: 세상에 변화를 만들고 싶다면, 자신의 작업에도 브랜치를 생성하세요. 현재 "체크아웃"된 브랜치에서 모든 커밋이 이루어집니다. `git status`를 사용하여 현재 브랜치를 확인하세요.

기여자 워크플로를 살펴보겠습니다. 기여자가 이미 저장소를 _포크_하고 _클론_하여 로컬 컴퓨터에서 작업할 준비가 된 Git 저장소를 가지고 있다고 가정합니다:

1. **브랜치 생성**. `git branch` 명령을 사용하여 기여하려는 변경 사항을 포함할 브랜치를 생성하세요:

   ```bash
   git branch [branch-name]
   ```

1. **작업 브랜치로 전환**. 지정된 브랜치로 전환하고 `git switch`를 사용하여 작업 디렉토리를 업데이트하세요:

   ```bash
   git switch [branch-name]
   ```

1. **작업 수행**. 이 시점에서 변경 사항을 추가하세요. Git에 이를 알리는 것을 잊지 마세요. 다음 명령을 사용하세요:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   커밋에 좋은 이름을 지정하세요. 이는 기여자 자신과 저장소 유지 관리자를 위해 중요합니다.

1. **`main` 브랜치와 작업 병합**. 작업이 완료되면 `main` 브랜치와 작업을 병합하고 싶을 것입니다. `main` 브랜치는 그동안 변경되었을 수 있으므로 다음 명령을 사용하여 먼저 최신 상태로 업데이트하세요:

   ```bash
   git switch main
   git pull
   ```

   이 시점에서 Git이 변경 사항을 쉽게 _병합_할 수 없는 _충돌_이 발생하지 않도록 하세요. 이를 위해 다음 명령을 실행하세요:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   이는 `main` 브랜치의 모든 변경 사항을 작업 브랜치로 가져오며, 문제가 없기를 바랍니다. 문제가 발생하면 VS Code가 Git이 _혼란스러워하는_ 부분을 알려주며, 영향을 받는 파일을 수정하여 가장 정확한 내용을 반영하도록 변경하면 됩니다.

1. **작업을 GitHub로 전송**. 작업을 GitHub로 전송한다는 것은 두 가지를 의미합니다. 브랜치를 자신의 저장소로 푸시하고 PR(Pull Request)을 여는 것입니다.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   위 명령은 포크된 저장소에 브랜치를 생성합니다.

1. **PR 열기**. 다음으로 PR을 열고 싶습니다. GitHub에서 포크된 저장소로 이동하면 새 PR을 생성할지 묻는 표시가 나타납니다. 이를 클릭하면 커밋 메시지 제목을 변경하거나 더 적합한 설명을 추가할 수 있는 인터페이스로 이동합니다. 이제 포크된 저장소의 유지 관리자가 이 PR을 확인하고, _운이 좋다면_ PR을 _병합_할 것입니다. 이제 기여자가 된 것입니다. 축하합니다 :)

1. **정리**. PR을 성공적으로 병합한 후에는 정리하는 것이 좋은 관행으로 간주됩니다. 로컬 브랜치와 GitHub에 푸시한 브랜치를 정리하세요. 먼저 다음 명령을 사용하여 로컬에서 삭제하세요:

   ```bash
   git branch -d [branch-name]
   ```

   그런 다음 포크된 저장소의 GitHub 페이지로 이동하여 방금 푸시한 원격 브랜치를 삭제하세요.
`Pull request`라는 용어는 다소 이상하게 들릴 수 있습니다. 왜냐하면 실제로는 프로젝트에 변경 사항을 "푸시"하고 싶어 하기 때문이죠. 하지만 프로젝트 소유자나 핵심 팀이 변경 사항을 검토한 후 프로젝트의 "main" 브랜치에 병합할지 결정해야 하므로, 사실상 유지 관리자에게 변경 사항에 대한 결정을 요청하는 것입니다.

Pull request는 브랜치에서 도입된 차이점을 리뷰, 댓글, 통합 테스트 등을 통해 비교하고 논의하는 공간입니다. 좋은 pull request는 커밋 메시지와 대체로 비슷한 규칙을 따릅니다. 예를 들어, 작업이 특정 문제를 해결하는 경우, 이슈 트래커에서 해당 문제를 참조할 수 있습니다. 이는 `#` 뒤에 이슈 번호를 붙여서 수행합니다. 예: `#97`.

🤞모든 검사가 통과되고 프로젝트 소유자가 변경 사항을 프로젝트에 병합해 주기를 기원합니다🤞

현재 로컬 작업 브랜치를 GitHub의 해당 원격 브랜치에서 새 커밋으로 업데이트하려면 다음 명령어를 사용하세요:

`git pull`

## 오픈 소스에 기여하는 방법

먼저, GitHub에서 관심 있는 저장소(**repo**)를 찾아 변경 사항을 기여하고 싶다면 해당 내용을 자신의 컴퓨터로 복사해야 합니다.

✅ '초보자 친화적'인 저장소를 찾는 좋은 방법은 [‘good-first-issue’ 태그로 검색](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)하는 것입니다.

![로컬에 저장소 복사하기](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.ko.png)

코드를 복사하는 방법은 여러 가지가 있습니다. 한 가지 방법은 HTTPS, SSH, 또는 GitHub CLI(명령줄 인터페이스)를 사용하여 저장소의 내용을 "클론"하는 것입니다.

터미널을 열고 다음과 같이 저장소를 클론하세요:
`git clone https://github.com/ProjectURL`

프로젝트 작업을 위해 올바른 폴더로 이동하세요:
`cd ProjectURL`

또한 [Codespaces](https://github.com/features/codespaces)(GitHub의 내장 코드 편집기/클라우드 개발 환경)나 [GitHub Desktop](https://desktop.github.com/)을 사용하여 전체 프로젝트를 열 수도 있습니다.

마지막으로, 코드를 압축된 폴더로 다운로드할 수도 있습니다.

### GitHub에 대한 몇 가지 흥미로운 점

GitHub에서 모든 공개 저장소를 별표 표시(star), 구독(watch), 또는 "포크(fork)"할 수 있습니다. 별표 표시한 저장소는 오른쪽 상단 드롭다운 메뉴에서 찾을 수 있습니다. 이는 코드 북마크와 비슷합니다.

프로젝트에는 주로 GitHub의 "Issues" 탭에 있는 이슈 트래커(별도 표시가 없는 한)가 있으며, 여기서 프로젝트와 관련된 문제를 논의합니다. Pull Requests 탭에서는 진행 중인 변경 사항을 논의하고 검토합니다.

프로젝트는 또한 포럼, 메일링 리스트, Slack, Discord, IRC와 같은 채팅 채널에서 논의가 이루어질 수도 있습니다.

✅ 새 GitHub 저장소를 둘러보고 설정을 편집하거나, 저장소에 정보를 추가하거나, 프로젝트(예: 칸반 보드)를 생성하는 등 몇 가지를 시도해 보세요. 할 수 있는 일이 많습니다!

---

## 🚀 도전 과제

친구와 짝을 이루어 서로의 코드를 작업해 보세요. 협업 프로젝트를 만들고, 코드를 포크하고, 브랜치를 생성하고, 변경 사항을 병합해 보세요.

## 강의 후 퀴즈
[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/en/)

## 복습 및 자기 학습

[오픈 소스 소프트웨어에 기여하기](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution)에 대해 더 읽어보세요.

[Git 치트시트](https://training.github.com/downloads/github-git-cheat-sheet/).

연습, 연습, 연습. GitHub는 [skills.github.com](https://skills.github.com)를 통해 훌륭한 학습 경로를 제공합니다:

- [GitHub 첫 주](https://skills.github.com/#first-week-on-github)

더 고급 과정도 찾아볼 수 있습니다.

## 과제

[GitHub 첫 주 과정](https://skills.github.com/#first-week-on-github)을 완료하세요.

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.