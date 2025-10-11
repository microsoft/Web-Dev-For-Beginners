<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T09:06:42+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "ko"
}
-->
# 프로그래밍 언어와 개발 도구 소개

이 강의에서는 프로그래밍 언어의 기본을 다룹니다. 여기서 다루는 주제는 오늘날 대부분의 현대 프로그래밍 언어에 적용됩니다. '개발 도구' 섹션에서는 개발자로서 유용한 소프트웨어에 대해 배울 수 있습니다.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.ko.png)
> 스케치노트 제공: [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[강의 전 퀴즈](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## 소개

이 강의에서 다룰 내용은 다음과 같습니다:

- 프로그래밍이란 무엇인가?
- 프로그래밍 언어의 종류
- 프로그램의 기본 요소
- 전문 개발자를 위한 유용한 소프트웨어와 도구

> 이 강의를 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)에서 수강할 수 있습니다!

## 프로그래밍이란 무엇인가?

프로그래밍(코딩이라고도 함)은 컴퓨터나 모바일 기기와 같은 장치에 명령을 작성하는 과정입니다. 우리는 이러한 명령을 프로그래밍 언어로 작성하며, 이는 장치에 의해 해석됩니다. 이러한 명령 세트는 다양한 이름으로 불릴 수 있지만, *프로그램*, *컴퓨터 프로그램*, *애플리케이션(앱)*, *실행 파일* 등이 널리 사용되는 이름입니다.

*프로그램*은 코드로 작성된 모든 것을 의미합니다. 웹사이트, 게임, 휴대폰 앱 등이 프로그램에 해당합니다. 코드를 작성하지 않고 프로그램을 만드는 것도 가능하지만, 장치가 해석하는 기본 논리는 대부분 코드로 작성됩니다. *실행 중*인 프로그램은 명령을 수행하고 있는 상태입니다. 여러분이 이 강의를 읽고 있는 장치도 화면에 내용을 출력하기 위해 프로그램을 실행 중입니다.

✅ 간단한 조사: 세계 최초의 컴퓨터 프로그래머로 여겨지는 사람은 누구인가요?

## 프로그래밍 언어

프로그래밍 언어는 개발자가 장치에 명령을 작성할 수 있도록 합니다. 장치는 이진수(1과 0)만 이해할 수 있으며, *대부분*의 개발자에게 이는 효율적인 의사소통 방식이 아닙니다. 프로그래밍 언어는 인간과 컴퓨터 간의 의사소통을 위한 도구입니다.

프로그래밍 언어는 다양한 형식으로 제공되며, 각기 다른 목적을 가질 수 있습니다. 예를 들어, JavaScript는 주로 웹 애플리케이션에 사용되며, Bash는 주로 운영 체제에 사용됩니다.

*저수준 언어*는 장치가 명령을 해석하는 데 필요한 단계가 *고수준 언어*보다 적습니다. 하지만 고수준 언어가 인기 있는 이유는 가독성과 지원 때문입니다. JavaScript는 고수준 언어로 간주됩니다.

다음 코드는 JavaScript와 ARM 어셈블리 코드로 작성된 고수준 언어와 저수준 언어의 차이를 보여줍니다.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

놀랍게도, *두 코드 모두 같은 일을 수행합니다*: 피보나치 수열을 10까지 출력합니다.

✅ 피보나치 수열은 [정의](https://en.wikipedia.org/wiki/Fibonacci_number)에 따르면, 0과 1에서 시작하여 각 숫자가 이전 두 숫자의 합인 숫자 집합입니다. 피보나치 수열을 따르는 첫 10개의 숫자는 0, 1, 1, 2, 3, 5, 8, 13, 21, 34입니다.

## 프로그램의 요소

프로그램의 단일 명령은 *문장(statement)*이라고 하며, 일반적으로 명령이 끝나는 지점을 표시하는 문자나 줄 간격을 포함합니다. 프로그램이 종료되는 방식은 각 언어마다 다릅니다.

프로그램 내의 문장은 사용자가 제공하거나 다른 곳에서 제공된 데이터를 기반으로 명령을 수행할 수 있습니다. 데이터는 프로그램의 동작을 변경할 수 있으므로, 프로그래밍 언어는 데이터를 임시로 저장하여 나중에 사용할 수 있는 방법을 제공합니다. 이를 *변수*라고 합니다. 변수는 장치가 데이터를 메모리에 저장하도록 지시하는 문장입니다. 프로그램의 변수는 대수학의 변수와 유사하며, 고유한 이름을 가지며 값이 시간이 지나면서 변경될 수 있습니다.

일부 문장은 장치에 의해 실행되지 않을 가능성이 있습니다. 이는 일반적으로 개발자가 의도적으로 작성했거나 예상치 못한 오류가 발생했을 때입니다. 애플리케이션의 이러한 제어는 더 견고하고 유지 관리가 용이하게 만듭니다. 일반적으로 이러한 제어 변경은 특정 조건이 충족될 때 발생합니다. 현대 프로그래밍에서 프로그램 실행 방식을 제어하는 데 자주 사용되는 문장은 `if..else` 문입니다.

✅ 이러한 유형의 문장에 대해 다음 강의에서 더 자세히 배울 것입니다.

## 개발 도구

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 위 이미지를 클릭하면 도구에 대한 동영상을 볼 수 있습니다.

이 섹션에서는 전문 개발자로서의 여정을 시작할 때 유용할 수 있는 몇 가지 소프트웨어에 대해 배웁니다.

**개발 환경**은 개발자가 소프트웨어를 작성할 때 자주 사용하는 도구와 기능의 독특한 집합입니다. 이러한 도구는 개발자의 특정 요구에 맞게 맞춤화되었으며, 작업 우선순위, 개인 프로젝트, 또는 다른 프로그래밍 언어를 사용할 때 변경될 수 있습니다. 개발 환경은 이를 사용하는 개발자만큼 독특합니다.

### 에디터

소프트웨어 개발에서 가장 중요한 도구 중 하나는 에디터입니다. 에디터는 코드를 작성하고 때로는 코드를 실행하는 곳입니다.

개발자가 에디터를 사용하는 몇 가지 추가 이유는 다음과 같습니다:

- *디버깅*: 코드를 한 줄씩 실행하며 버그와 오류를 찾아냅니다. 일부 에디터는 디버깅 기능을 제공하며, 특정 프로그래밍 언어에 맞게 맞춤화하거나 추가할 수 있습니다.
- *구문 강조*: 코드에 색상과 텍스트 형식을 추가하여 읽기 쉽게 만듭니다. 대부분의 에디터는 맞춤형 구문 강조를 허용합니다.
- *확장 및 통합*: 개발자를 위한 전문 도구입니다. 이러한 도구는 기본 에디터에 포함되지 않았습니다. 예를 들어, 많은 개발자가 코드의 작동 방식을 설명하기 위해 문서를 작성합니다. 문서 내의 오타를 찾는 데 도움을 주는 맞춤법 검사 확장을 설치할 수 있습니다. 대부분의 확장은 특정 에디터 내에서 사용하도록 설계되었으며, 대부분의 에디터는 사용 가능한 확장을 검색할 수 있는 방법을 제공합니다.
- *맞춤화*: 개발자가 자신의 필요에 맞는 독특한 개발 환경을 만들 수 있도록 합니다. 대부분의 에디터는 매우 맞춤화가 가능하며, 개발자가 맞춤형 확장을 만들 수 있도록 허용할 수도 있습니다.

#### 인기 있는 에디터와 웹 개발 확장

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### 브라우저

또 다른 중요한 도구는 브라우저입니다. 웹 개발자는 브라우저를 사용하여 웹에서 코드가 어떻게 실행되는지 확인합니다. 또한 HTML과 같은 에디터에서 작성된 웹 페이지의 시각적 요소를 표시하는 데 사용됩니다.

많은 브라우저는 *개발자 도구*(DevTools)를 제공하며, 이는 애플리케이션에 대한 중요한 정보를 수집하고 캡처하는 데 도움이 되는 유용한 기능과 정보를 포함합니다. 예를 들어, 웹 페이지에 오류가 발생하면 오류가 발생한 시점을 아는 것이 도움이 될 때가 있습니다. 브라우저의 개발자 도구는 이러한 정보를 캡처하도록 구성할 수 있습니다.

#### 인기 있는 브라우저와 개발자 도구

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### 명령줄 도구

일부 개발자는 그래픽 인터페이스가 적은 환경을 선호하며 명령줄을 사용하여 작업을 수행합니다. 코드를 작성하는 데는 많은 타이핑이 필요하며, 일부 개발자는 키보드 작업 흐름을 방해하지 않으려 합니다. 이들은 키보드 단축키를 사용하여 데스크톱 창을 전환하거나, 다른 파일에서 작업하거나, 도구를 사용할 수 있습니다. 대부분의 작업은 마우스로 완료할 수 있지만, 명령줄을 사용하면 마우스와 키보드 간 전환 없이 많은 작업을 수행할 수 있습니다. 명령줄의 또 다른 장점은 구성 가능하며, 사용자 정의 구성을 저장하고 나중에 변경하거나 다른 개발 머신에 가져올 수 있다는 점입니다. 개발 환경은 각 개발자마다 매우 독특하기 때문에, 일부는 명령줄을 전혀 사용하지 않거나, 일부는 완전히 의존하거나, 일부는 두 가지를 혼합하여 사용하는 것을 선호합니다.

### 인기 있는 명령줄 옵션

명령줄 옵션은 사용하는 운영 체제에 따라 다릅니다.

*💻 = 운영 체제에 기본 설치되어 있음.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (CMD로도 알려짐) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### 인기 있는 명령줄 도구

- [Git](https://git-scm.com/) (💻 대부분의 운영 체제에 기본 설치됨)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 문서화

개발자가 새로운 것을 배우고 싶을 때, 가장 먼저 문서를 찾아보며 사용 방법을 익힙니다. 개발자는 도구와 언어를 올바르게 사용하는 방법을 안내받고, 작동 방식을 더 깊이 이해하기 위해 문서에 의존합니다.

#### 웹 개발 관련 인기 문서

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), [Firefox](https://www.mozilla.org/firefox/) 브라우저를 발행한 Mozilla에서 제공
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), [Chrome](https://www.google.com/chrome/)을 발행한 Google에서 제공
- [Microsoft의 개발자 문서](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge)를 위한 문서
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ 조사하기: 이제 웹 개발자의 환경에 대한 기본 사항을 알게 되었으니, 웹 디자이너의 환경과 비교해 보세요.

---

## 🚀 도전 과제

프로그래밍 언어를 비교해 보세요. JavaScript와 Java의 독특한 특징은 무엇인가요? COBOL과 Go는 어떨까요?

## 강의 후 퀴즈
[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/)

## 복습 및 자기 학습

프로그래머가 사용할 수 있는 다양한 언어에 대해 공부해 보세요. 한 언어로 한 줄을 작성한 후, 다른 두 언어로 다시 작성해 보세요. 무엇을 배웠나요?

## 과제

[문서 읽기](assignment.md)

> 참고: 과제를 위해 도구를 선택할 때, 위에 나열된 에디터, 브라우저, 명령줄 도구를 선택하지 마세요.

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.