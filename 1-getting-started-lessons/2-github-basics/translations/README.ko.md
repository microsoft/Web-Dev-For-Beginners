# GitHub 소개

이 강의에서는 코드 변경점을 호스팅하고 관리하는 플랫폼인 GitHub의 기본 사항을 다룹니다.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3?loc=ko)

## 소개

이 강의에서는 다룹니다:

- 기계에서 수행하는 작업 추적
- 다른 사람들과 프로젝트 작업
- 오픈소스 소프트웨어에 기여하는 방법

### 작업 필요

시작하기 전에 Git이 설치되어 있는지 확인해야합니다. 터미널에서 작업:
`git --version`

만약 Git이 설치되어 있지 않다면, [Git 내려받습니다](https://git-scm.com/downloads). 그리고, 터미널에서 로컬 Git 프로필을 설정합니다:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Git이 이미 구성되어 있는지 확인하려면 다음을 입력합니다:
`git config --list`

GitHub 계정, (Visual Studio Code와 같은) 코드 에디터가 필요하며, 터미널(혹은: command prompt)을 열어야 합니다.

아직 계정이 없는 경우에는 [github.com](https://github.com/)으로 이동하여 계정을 생성하거나, 로그인하여 프로필을 작성합니다.

✅ GitHub는 유일한 코드 저장소가 아닙니다. 다른 곳들도 있지만 GitHub가 가장 잘 알려져 있습니다.

### 준비

로컬 장치(노트북 또는 PC)에 코드 프로젝트 폴더와 다른 프로젝트에 기여하는 방법의 예시가 될 GitHub 공개 저장소가 모두 필요합니다.

---

## 코드 관리

일부 코드 프로젝트에 포함된 폴더가 로컬에 있고 버전 제어 시스템인 git을 사용하여 진행 상황을 추적하려고 한다고 가정해보겠습니다. 어떤 사람들은 git을 사용하여 미래의 자신에게 연애 편지를 쓰는 것과 비교합니다. 며칠, 몇 주 또는 몇 달 후에 커밋 메시지를 읽으면 그 때 결정을 한 이유를 기억하거나 변경점을 "롤백"할 수 있습니다. 즉, 좋은 "커밋 메시지"를 작성할 때입니다.

### 작업: 저장소 만들고 코드 커밋하기

1. **GitHub에 저장소 만들기**. GitHub.com에서 repositories 탭을 보거나, 우측 상단 네비케이션 바에서 **new repo** 버튼을 찾습니다.

   1. 저장소(폴더)에 이름을 지정합니다
   1. **create repository** 선택합니다.

1. **작업 폴더로 이동하기**. 터미널에서 추적을 시작할 폴더(디렉토리)로 이동하기 위해 입력합니다:

   ```bash
   cd [name of your folder]
   ```

1. **git 저장소 초기화하기**. 프로젝트에서 입력합니다:

   ```bash
   git init
   ```

1. **상태 확인하기**. 상태를 확인하려면 저장소에서 입력합니다:

   ```bash
   git status
   ```

   다음과 같이 출력될 수 있습니다:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   일반적으로 `git status` 명령은 어떤 파일이 저장소에 _저장_ 될 준비가 되었는 지 또는 유지하고 싶은 변경점이 있는 지 등을 알려줍니다.

1. **추적할 파일 추가하기**

   ```bash
   git add .
   ```

   `git add`와 같이 있는 `.` 인수는 모든 파일 및 변경점을 나타냅니다.

1. **작업 지속하기**. Git이 파일을 추적하는 곳에 _staging area_ 라는 파일을 추가했습니다. 영구적으로 변경하려면 파일을 _commit_ 해야합니다. 그렇게 하려면`git commit` 명령으로 _commit_ 을 생성합니다. _commit_ 은 저장소 기록의 저장 시점을 나타냅니다. 다음을 입력하여 _commit_ 을 생성합니다:
 
   ```bash
   git commit -m "first commit"
   ```

   이렇게하면 모든 파일이 커밋되고, "first commit" 메시지가 추가됩니다. 향후 커밋 메시지의 경우 변경점을 전달하기 위해 설명을 구체적으로 작성해야합니다.

1. **GitHub와 로컬 Git 저장소 연결하기**. Git 저장소는 장치에 존재하기에 좋지만, 어느 시점에서 파일을 어딘가에 백업하고 다른 사람이 저장소에서 함께 작업하도록 초대하고 싶습니다. 그렇게 하기에 좋은 곳 중 하나는 GitHub입니다. 이미 GitHub에 저장소를 만들었으므로 로컬 Git 저장소를 GitHub에 연결할 뿐입니다. `git remote add`  명령을 수행합니다. 다음 명령을 입력합니다:

   > Note, 명령을 입력하기 전에 GitHub 저장소 페이지로 이동하여 저장소 URL을 찾아두십시오. 아래 명령에서 사용됩니다. `repository_name`을 GitHub URL로 바꿉니다.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   이렇게 이전에 만든 GitHub 저장소를 가리키는 "origin"이라는 _remote_ 또는 커넥션이 생성됩니다.

1. **GitHub로 로컬 파일 보내기**. 지금까지 로컬 저장소와 GitHub 저장소 사이에 _connection_ 을 생성했습니다. 다음과 같이 `git push` 명령을 사용하여 이러한 파일을 GitHub로 보냅니다:

   ```bash
   git push -u origin main
   ```

   "main" 브랜치는 GitHub로 커밋이 보내집니다.

1. **더 많은 변경점 추가하기**. 계속 작업하여 GitHub로 푸시하려면 다음 세 가지 명령을 사용하면됩니다:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, 추적하고 싶지 않은 파일이 GitHub에 표시되는 것을 방지하기 위해 `.gitignore` 파일을 채용할 수 있습니다. 동일한 폴더에 저장하지만 공개 저장소에는 존재하지 않는 노트 파일과 같습니다. `.gitignore` 파일의 템플릿은 [.gitignore templates](github.com/github/gitignore)에서 찾을 수 있습니다.

#### 커밋 메시지

A great Git commit subject line completes the following sentence:
If applied, this commit will <your subject line here>

훌륭한 Git 커밋 제목 줄은 다음 문장을 완성합니다:
적용되면, 이 커밋은 <your subject line here>이 됩니다.

제목에 대해서는 명령문 또는 현재 시제를 사용하십시오 : "변경됨" 또는 "변경점"이 아닌 "변경".
제목과 마찬가지로 본문(선택 사항)에서도 명령문, 현재 시제를 사용합니다. 본문은 변화에 대한 동기를 포함하고 이를 이전 변경점과 대조해야 합니다. '어떻게'가 아니라 '왜'를 설명하고 있습니다.

✅ 몇 분 동안 GitHub를 둘러보세요. 정말 훌륭한 커밋 메시지를 찾을 수 있습니까? 정말 최소한의 것을 찾을 수 있습니까? 커밋 메시지에서 전달하는 데 가장 중요하고 유용한 정보는 무엇이라고 생각하십니까?

### 작업: 협업하기

GitHub에 코드를 올리는 주 이유는 다른 개발자와 협력할 수 있도록 하기 위함입니다.

## 다른 사람들과 함께 프로젝트 작업하기

저장소에서, `Insights> Community`로 이동하여 프로젝트에 권장되는 커뮤니티 표준과 어떻게 비교되는지 확인합니다.

다음은 GitHub 저장소를 개선 할 수있는 몇 가지 사항입니다:
   - **설명**. 프로젝트에 설명을 추가했습니까?
   - **README**. README를 추가했습니까? GitHub는 [README](https://docs.github.com/articles/about-readmes/) 작성에 대한 지침을 제공합니다.
   - **기여 가이드**. [기여 가이드](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Code of Conduct**. [Code of Conduct](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **라이선스**. 아마도, 가장 중요한 [라이선스](https://docs.github.com/articles/adding-a-license-to-a-repository/)도 가지고 있습니까?

이러한 모든 리소스는 새로운 팀원을 온보딩하는 데 도움이 됩니다. 그리고 일반적으로 새로운 기여자들이 여러분의 프로젝트가 시간을 보내기에 적합한 장소인지 확인하기 위해  코드를 보기 전 살펴 보는 것입니다.

✅ README 파일은 준비하는 데 시간이 걸리지만 바쁜 관리자들은 종종 무시합니다. 특히 설명적인 예를 찾을 수 있습니까? Note: 몇 가지 [tools to help create good READMEs](https://www.makeareadme.com/)를 시도해 볼 수 있습니다.

### 작업: 코드 병합하기

문서를 제공하면 사람들이 프로젝트에 기여하는 데 도움이 됩니다. 찾고있는 기여 유형과 프로세스 작동 방식을 설명합니다. 기여자는 GitHub의 저장소에 기여할 수 있도록 일련의 단계를 거쳐야합니다:

1. **저장소 포크하기** 아마도 사람들이 당신의 프로젝트를 _fork_ 하기를 원할 것입니다. 포크는 자신의 GitHub 프로필에 저장소 복제본을 만드는 걸 의미합니다.
1. **복제하기**. 프로젝트를 로컬 컴퓨터에 복제합니다.
1. **브랜치 생성하기**. 작업을 위해 _branch_ 를 만들도록 요청하고 싶을 것입니다.
1. **한 영역에 변화를 집중하기**. 기여자에게 한 번에 한 가지만 집중하도록 요청하세요 - 그러면 작업에 _병합_ 할 수 있는 가능성이 더 높아집니다. 그들이 버그 수정을 작성하고, 새로운 기능을 추가하고, 여러 테스트를 추가한다고 상상해보십시오. 원한다면 3개 중 2개 또는 3개 중 1개만 구현할 수 있습니까?

✅ 좋은 코드를 작성하고 전달하는 데 branches가 중요한 상황을 상상해보십시오. 어떤 사용 사례를 생각할 수 있습니까?

> Note, 모두가 보고싶은 변경점이나, 자신의 작업만을 위한 브랜치를 만들 수도 있습니다. 모든 커밋은 현재 "체크 아웃"된 브랜치에서 이루어집니다. `git status`를 사용하여 어떤 브랜치인지 확인하십시오.

기여자 워크플로우를 살펴봅니다. 기여자가 이미 저장소를 _forked_ 하거나 _cloned_ 했기 때문에 로컬 머신에서 작업할 준비가 된 Git 저장소가 있다고 가정합니다.

1. **브랜치 생성하기**. `git branch` 명령을 사용하여 기여하려는 변경 사항을 포함하는 브랜치를 만듭니다:

   ```bash
   git branch [branch-name]
   ```

1. **작업 브랜치 변경하기**. 지정된 브랜치로 전환하고 `git switch`으로 작업 디렉토리를 업데이트합니다:

   ```bash
   git switch [branch-name]
   ```

1. **일하기**. 이 시점에서 변경 사항을 추가하려고 합니다. 다음 명령을 사용하여 Git에 알리는 것을 잊지 마시기 바랍니다:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   도와주고 있는 저장소의 관리자뿐만 아니라 당신을 위해서, 커밋에 좋은 이름을 부여해야 합니다.

1. **`main` 브랜치에서 작업하기**. 어느 시점에서 작업을 마치고 `main` 브랜치의 작업과 병합하려고 합니다. 그동안 `main` 브랜치가 변경되었을 수 있으므로, 먼저 다음 명령을 사용하여 최신 버전으로 업데이트해야합니다:

   ```bash
   git switch main
   git pull
   ```

   이 시점에서 Git이 변경 사항을 쉽게 _결합_ 할 수 없는 _충돌_ 상황이 작업 브랜치에서 발생하는지 확인하려고합니다. 따라서 다음 명령을 실행합니다:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   이렇게하면 `main` 에서 브랜치로 모든 변경점을 가져올 수 있으며 계속 진행할 수 있습니다. 그렇지 않은 경우에는 VS Code는 Git이 _혼란스러운_ 위치를 알려주고 영향받는 파일을 변경하여 가장 정확한 곳을 알려주면 됩니다.

1. **GitHub로 작업 보내기**. 작업을 GitHub에 보내는 것은 두 가지를 의미합니다. 브랜치를 저장소로 푸시 한 다음 PR, Pull Request를 엽니다.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   위의 명령은 포크된 저장소에 브랜치를 만듭니다.

1. **PR 열기**. 다음으로, PR을 열고 싶습니다. GitHub의 포크된 저장소로 이동하면 됩니다. GitHub에서 새 PR을 만들 것인지 묻는 표시가 표시되고 이를 클릭하면 커밋 메시지 제목을 변경할 수 있는 인터페이스로 이동하게 되며 더 적절한 설명을 작성할 수 있습니다. 이제 포크한 저장소의 관리자는 이 PR을 보고 _행운을 빌며_ 감사하고 _병합_ PR을 수행합니다. 당신은 이제 기여자입니다, yay :)

1. **정라하기**. 나중에 _정리_ 하는 것은 좋은 습관으로 간주됩니다. 로컬 브랜치와 GitHub에 푸시한 브랜치를 모두 정리하려고 합니다. 먼저 다음 명령을 사용하여 로컬에서 삭제하겠습니다:

   ```bash
   git branch -d [branch-name]
   ```

   포크된 저장소의 GitHub 페이지로 이동하여 방금 푸시한 원격 브랜치를 제거합니다.

변경점을 프로젝트에 푸시하고 싶기 때문에 `Pull request`는 어리석은 용어처럼 보입니다. 그러나 관리자(프로젝트 소유자) 또는 핵심 팀은 변경점을 프로젝트의 "main" 브랜치와 병합하기 전에 고려해야 하므로 실제로 유지 관리자에게 결정을 요청하는 것입니다.

pull request는 리뷰, 코멘트, 통합 테스트 등을 통해 브랜치에 도입된 차이점을 비교하고 논의하는 곳입니다. 좋은 pull request는 커밋 메시지와 거의 동일한 규칙을 따릅니다. 예를 들어 작업에서 문제를 해결할 때 이슈 트래커에서 이슈에 대한 참조를 추가할 수 있습니다. 이 작업은 `#` 다음에 이슈 번호를 사용하여 수행됩니다. 예를 들어 `#97` 처럼 말입니다.

🤞 모든 검사가 통과되고 프로젝트 소유자가 변경 사항을 프로젝트에 병합한다는 손가락이 교차했습니다 🤞

현재 로컬 작업 브랜치를 GitHub의 원격 브랜치의 커밋으로 모두 업데이트합니다:

`git pull`

## 오픈소스에 기여하는 방법

먼저, GitHub에서 관심있고 변경 사항을 기여할 저장소를 찾아 보겠습니다. 그 곳의 내용을 자신의 장치에 복사하고 싶을 것입니다.

✅ '입문-친화적'인 저장소를 찾는 좋은 방법은 ['good-first-issue 태그로 검색하는 것입니다.'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](../images/clone_repo.png)

코드를 복사하는 방법에는 여러 가지가 있습니다. 한 가지 방법은 HTTPS, SSH 또는 GitHub CLI (Command Line 인터페이스)를 사용하여 저장소의 내용을 "복제"하는 것입니다.

터미널을 열고 다음과 같이 저장소를 복제합니다:
`git clone https://github.com/ProjectURL`

프로젝트에서 작업하려면 올바른 폴더로 전환합니다:
`cd ProjectURL`

[Codespaces](https://github.com/features/codespaces), GitHub의 내장 코드 에디터 / 클라우드 개발 환경 또는 [GitHub Desktop](https://desktop.github.com/)을 사용하여 전체 프로젝트를 열 수 있습니다.

마지막으로 압축된 폴더로 코드를 내려받을 수 있습니다.

### GitHub에 대한 몇 가지 흥미로운 사항

GitHub의 모든 공개 저장소에 스타 표시, 워치 및/또는 "포크" 할 수 있습니다. 우측 상단 드롭다운 메뉴에서 스타 표시한 저장소를 찾을 수 있습니다. 북마크와 비슷하지만 코드를 위한 것 입니다.

프로젝트에는 달리 명시되지 않는 한 대부분 GitHub에 "이슈" 탭의 이슈 트레커가 있습니다. 그리고 Pull Requests 탭은 사람들이 진행중인 변경 사항을 논의하고 검토하는 곳입니다.

프로젝트는 포럼, 메일링 리스트 또는 Slack, Discord 또는 IRC와 같은 채팅 채널에서 토론 할 수도 있습니다.

✅ 새로운 GitHub 리포지토리를 둘러보고 설정 편집, 저장소 정보 추가, (Kanban 보드와 같은) 프로젝트 생성을 비롯한 몇 가지 작업을 시도해보시기 바랍니다. 할 수 있는 일이 많이 있습니다!

---

## 🚀 도전 

친구와 페어링하여 서로의 코드를 작업하세요. 공동으로 프로젝트를 만들고, 코드를 포크하고, 브랜치를 만들고, 변경 사항을 병합합니다.

## 강의 후 퀴즈
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4?loc=ko)

## 리뷰 & 자기주도 학습

[contributing to open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution)에 대해 읽습니다. 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Practice, practice, practice. GitHub에는 [lab.github.com](https://lab.github.com/)을 통해 사용할 수 있는 훌륭한 학습 경로가 있습니다:

- [First Week on GitHub](https://lab.github.com/githubtraining/first-week-on-github)

더 많은 고급 실습도 찾을 수 있습니다.

## 과제 

[the First Week on GitHub training lab](https://lab.github.com/githubtraining/first-week-on-github) 완료하기