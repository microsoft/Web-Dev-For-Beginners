<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2fcb983b8dbadadb1bc2e97f8c12dac5",
  "translation_date": "2025-08-23T23:36:40+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "ko"
}
-->
# vscode.dev을 사용하여 이력서 웹사이트 만들기

_채용 담당자가 이력서를 요청했을 때 URL을 보내줄 수 있다면 얼마나 멋질까요?_ 😎

## 목표

이 과제를 통해 다음을 배울 수 있습니다:

- 이력서를 보여줄 웹사이트를 만드는 방법

### 사전 준비

1. GitHub 계정이 필요합니다. [GitHub](https://github.com/)에 접속하여 계정이 없다면 새로 만드세요.

## 단계

**1단계:** 새 GitHub 저장소를 만들고 이름을 `my-resume`로 지정하세요.

**2단계:** 저장소에 `index.html` 파일을 만드세요. github.com에서 파일을 하나라도 추가해야 vscode.dev에서 빈 저장소를 열 수 없습니다.

`새 파일 생성` 링크를 클릭하고, 파일 이름을 `index.html`로 입력한 후 `새 파일 커밋` 버튼을 선택하세요.

![github.com에서 새 파일 생성](../../../../8-code-editor/images/new-file-github.com.png)

**3단계:** [VSCode.dev](https://vscode.dev)를 열고 `원격 저장소 열기` 버튼을 선택하세요.

방금 만든 이력서 사이트 저장소의 URL을 복사하여 입력란에 붙여넣으세요.

_`your-username`을 자신의 GitHub 사용자 이름으로 바꾸세요._

```
https://github.com/your-username/my-resume
```

✅ 성공하면 프로젝트와 `index.html` 파일이 브라우저의 텍스트 편집기에 열립니다.

![새 파일 생성](../../../../8-code-editor/images/project-on-vscode.dev.png)

**4단계:** `index.html` 파일을 열고 아래 코드를 코드 영역에 붙여넣고 저장하세요.

<details>
    <summary><b>이력서 웹사이트의 콘텐츠를 담당하는 HTML 코드.</b></summary>
    
        <html>

            <head>
                <link href="style.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                <title>Your Name Goes Here!</title>
            </head>
            <body>
                <header id="header">
                    <!-- 이력서 헤더: 이름과 직함 -->
                    <h1>Your Name Goes Here!</h1>
                    <hr>
                    Your Role!
                    <hr>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>CONTACT</h2>
                            <!-- 연락처 정보 및 소셜 미디어 -->
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:username@domain.top-level domain">Write your email here</a>
                            </p>
                            <p>
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <a href="github.com/yourGitHubUsername">Write your username here!</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="linkedin.com/yourLinkedInUsername">Write your username here!</a>
                            </p>
                        </section>
                        <section>
                            <h2>SKILLS</h2>
                            <!-- 보유 기술 -->
                            <ul>
                                <li>Skill 1!</li>
                                <li>Skill 2!</li>
                                <li>Skill 3!</li>
                                <li>Skill 4!</li>
                            </ul>
                        </section>
                        <section>
                            <h2>EDUCATION</h2>
                            <!-- 학력 -->
                            <h3>Write your course here!</h3>
                            <p>
                                Write your institution here!
                            </p>
                            <p>
                                Start - End Date
                            </p>
                        </section>            
                    </article>
                    <article id="mainRight">
                        <section>
                            <h2>ABOUT</h2>
                            <!-- 자기소개 -->
                            <p>Write a blurb about yourself!</p>
                        </section>
                        <section>
                            <h2>WORK EXPERIENCE</h2>
                            <!-- 경력 -->
                            <h3>Job Title</h3>
                            <p>
                                Organization Name Goes Here | Start Month – End Month
                            </p>
                            <ul>
                                    <li>Task 1 - Write what you did!</li>
                                    <li>Task 2 - Write what you did!</li>
                                    <li>Write the outcomes/impact of your contribution</li>
                                    
                            </ul>
                            <h3>Job Title 2</h3>
                            <p>
                                Organization Name Goes Here | Start Month – End Month
                            </p>
                            <ul>
                                    <li>Task 1 - Write what you did!</li>
                                    <li>Task 2 - Write what you did!</li>
                                    <li>Write the outcomes/impact of your contribution</li>
                                    
                            </ul>
                        </section>
                    </article>
                </main>
            </body>
        </html>
</details>

HTML 코드의 _플레이스홀더 텍스트_를 자신의 이력서 정보로 교체하세요.

**5단계:** My-Resume 폴더 위에 마우스를 올리고 `새 파일 ...` 아이콘을 클릭하여 프로젝트에 `style.css`와 `codeswing.json` 파일을 새로 만드세요.

**6단계:** `style.css` 파일을 열고 아래 코드를 붙여넣고 저장하세요.

<details>
        <summary><b>사이트 레이아웃을 포맷하는 CSS 코드.</b></summary>
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 16px;
                max-width: 960px;
                margin: auto;
            }
            h1 {
                font-size: 3em;
                letter-spacing: .6em;
                padding-top: 1em;
                padding-bottom: 1em;
            }

            h2 {
                font-size: 1.5em;
                padding-bottom: 1em;
            }

            h3 {
                font-size: 1em;
                padding-bottom: 1em;
            }
            main { 
                display: grid;
                grid-template-columns: 40% 60%;
                margin-top: 3em;
            }
            header {
                text-align: center;
                margin: auto 2em;
            }

            section {
                margin: auto 1em 4em 2em;
            }

            i {
                margin-right: .5em;
            }

            p {
                margin: .2em auto
            }

            hr {
                border: none;
                background-color: lightgray;
                height: 1px;
            }

            h1, h2, h3 {
                font-weight: 100;
                margin-bottom: 0;
            }
            #mainLeft {
                border-right: 1px solid lightgray;
            }
            
</details>

**6단계:** `codeswing.json` 파일을 열고 아래 코드를 붙여넣고 저장하세요.

    {
    "scripts": [],
    "styles": []
    }

**7단계:** `Codeswing 확장 프로그램`을 설치하여 코드 영역에서 이력서 웹사이트를 시각화하세요.

활동 표시줄에서 _`확장 프로그램`_ 아이콘을 클릭하고 Codeswing을 입력하세요. 확장 프로그램을 선택하여 추가 정보를 로드한 후 _파란색 설치 버튼_을 클릭하거나 코드 영역에 나타나는 설치 버튼을 사용하여 설치하세요. 확장 프로그램을 설치한 직후, 프로젝트에 대한 변경 사항을 코드 영역에서 확인할 수 있습니다. 😃

![확장 프로그램 설치](../../../../8-code-editor/images/install-extension.gif)

확장 프로그램 설치 후 화면에 나타나는 모습입니다.

![Codeswing 확장 프로그램 실행](../../../../8-code-editor/images/after-codeswing-extension-pb.png)

변경 사항에 만족하면 `Changes` 폴더 위에 마우스를 올리고 `+` 버튼을 클릭하여 변경 사항을 스테이징하세요.

커밋 메시지 _(프로젝트에 대한 변경 사항 설명)_를 입력하고 `체크`를 클릭하여 변경 사항을 커밋하세요. 작업이 완료되면 왼쪽 상단의 햄버거 메뉴 아이콘을 선택하여 GitHub의 저장소로 돌아가세요.

축하합니다 🎉 몇 가지 단계만으로 vscode.dev를 사용하여 이력서 웹사이트를 만들었습니다.

## 🚀 도전 과제

변경 권한이 있는 원격 저장소를 열고 몇 가지 파일을 업데이트해 보세요. 그런 다음, 변경 사항이 포함된 새 브랜치를 만들어 Pull Request를 생성해 보세요.

## 복습 및 자기 학습

[VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) 및 기타 기능에 대해 더 읽어보세요.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.