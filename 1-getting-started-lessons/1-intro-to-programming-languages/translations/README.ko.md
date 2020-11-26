# 프로그래밍 언어와 도구에 대한 소개

이 수업에서는 프로그래밍 언어 기초에 대한 내용을 다룹니다. 다뤄지는 주제들은 대부분의 최신 프로그래밍 언어들에 적용할 수 있습니다. 프로그래밍 도구를 소개하는 부분에서는 개발자로서 사용할 수 있는 유용한 소프트웨어에 대해서 소개합니다.

![프로그래밍 소개](webdev101-programming.png)
> [Tomomi Imura](https://twitter.com/girlie_mac)의 스케치

## 강의 전 퀴즈
[강의 전 퀴즈](.github/pre-lecture-quiz.ko.md)

## 소개

이번 수업에서 다룰 내용:

- 프로그래밍은 무엇인가?
- 프로그래밍 언어 유형
- 프로그램의 기본 요소들
- 프로페서널한 개발자들을 위한 유용한 소프트웨어와 도구

## 프로그래밍이란 무엇인가?

프로그래밍(일명 코딩이라고도 하는)은 컴퓨터나 모바일 장치에 지시사항들을 작성하는 과정입니다. 기기에 의해서 해석될 수 있는 프로그래밍 언어를 사용하여 지시사항들을 작성합니다. 위와 같은 지시사항들은 다양한 이름으로 불리울 수 있습니다. 그 중에서도 *프로그램*, *컴퓨터 프로그램*, *어플리케이션(앱)*, 혹은 *실행파일*들이 주로 사용되는 이름입니다.

코드로 작성되는 어떤 것이든 *프로그램*이 될 수 있습니다. 예를 들어 웹사이드, 게임, 모바일앱들도 프로그램입니다. 하지만 코드를 작성하지 않고도 프로그램을 만들 수 있습니다. 기본적인 논리는 장치에 의해서 해석되고 그 논리는 대부분 코드가 사용되어 작성되었을 가능성이 큽니다. *실행하는* 혹은 *코드 실행하는* 프로그램은 지시사항들을 수행할 것입니다. 이 수업을 읽으면서 사용하고 있는 장치 또한 수업 내용을 화면에 보여주기 위하여 프로그램을 실행하고 있습니다.

✅ 검색하여 알아 봅시다: 세계 최초의 컴퓨터 프로그래머는 누구일까요?

## 프로그래밍 언어

프로그래밍 언어는 다음과 같은 주요한 목적들을 수행합니다: 개발자들이 장치에 보낼 지시사항들을 만드는 일. 장치들은 오직 바이너리(1과 0)만을 이해할 수 있지만 바이너리는 대부분의 개발자들에게 소통하기에 가장 효율적인 방법은 아닙니다. 프로그래밍 언어는 인간과 컴퓨터 사이의 소통을 위한 수단이라고 생각할 수 있습니다.

프로그래밍 언어들은 서로 다른 형태들을 가지고 있고 다른 목적들을 수행하기도 합니다. 예를 들어 Javascript는 주로 웹 어플리케이션을 위해서 사용되지만 Bash는 주로 운영체제를 위해서 사용됩니다.

*Low level 언어*들은 *high level 언어*들보다 기기가 지시사항들을 해석하기에 더 적은 과정을 요구합니다. 하지만 high level 언어들을 인기있게 만드는 이유는 더 읽기 쉽고 지원의 범위가 크기 때문입니다. Javascript는 high level 언어라고 생각할 수 있습니다.

아래의 코드는 high level 언어인 Javascript와 low level 언어인 ARM 어셈블리 코드의 차이점을 보여줍니다.

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

믿거나 말거나, *두개의 언어 모두 똑같은 일을 하고 있습니다.*: 10까지 피보나치 수열의 결과를 보여주고 있습니다.

✅ [피보나치 수열 정의](https://en.wikipedia.org/wiki/Fibonacci_number)는 0과 1에서 시작해서 각각의 숫자가 앞에 나왔던 두개의 숫자들의 합을 나타내는 숫자의 모음입니다.

## 프로그램의 요소들

프로그램에서 하나의 지시사항은 *진술*이라고 하고 보통 하나의 글자 혹은 한줄이 하나의 지시사항이 끝나거나 *종료되는* 곳입니다. 어떻게 프로그램이 종료되는 방법은 각각의 언어들에 따라서 다양합니다.

대부분의 프로그램들은 사용자 혹은 다른 곳으로부터의 데이터를 사용하는 것에 의존하고 *진술*들은 지시사항들을 수행하기 위해서 해당 데이터에 의존합니다. 데이터는 프로그램이 작동하는 방식에 따라 변경되고 프로그래밍 언어들은 나중에 사용할 수 있도록 데이터를 임시적으로 보관하는 방식을 사용합니다. 이 데이터들은 *변수*라고 합니다. 프로그램의 변수들은 수학에서의 변수와 비슷하고 변수들은 각각 고유한 이름을 가지고 있고 값은 시간에 따라 변할 수 있습니다.

어떤 진술들은 기기에 따라서 실행되지 않을 수도 있습니다. 개발자가 의도했거나 예기치 않은 에러가 발생하였을 때 발생할 수 있습니다. 이와 같은 어플리케이션의 통제 유형은 프로그램을 더 단단하고 유지할 수 있도록 만들어 줍니다. 주로 이런 변화는 어떤 기준이 충족되었을 때에 발생합니다. 프로그램이 실행되는 방식을 조종하는 현대 프로그래밍 언어들의 보편적인 진술은 `if..else` 진술입니다.

✅ 다음 수업에서 진술의 유형에 대해서 배울 예정입니다

## 프로그래밍 도구

[![프로그래밍 도구](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "프로그래밍 도구")

이번 파트에서는 직업으로서 개발을 시작하면서 매우 유용할 소프트웨어에 대해서 배웁니다.

**개발 환경**은 소프웨어를 작성할 때에 자주 개발자들이 사용하는 도구나 기능들의 고유한 모음입니다. 어떤 도구들은 개발자의 구체적인 니즈에 따라 커스터마이징될 수 있고 개발자가 일의 우선순위 혹은 개인적인 프로젝트에 따라 변경할 수도 있습니다. 혹은 다른 프로그래밍 언어에 사용할 떄에는 또 다른 환경을 사용할 수 있습니다. 개발 환경은 개발자마다 고유한 특성을 가지고 있습니다. 

### 에디터

소프트웨어 개발에서 가장 중요한 도구 중 하나는 에디터입니다. 에디터는 코드를 작성하고 때로는 코드를 실행시킬 수 있는 도구입니다.

개발자들은 아래의 이유들 때문에 에디터를 사용합니다:

- *디버깅* 코드 단계 혹은 한 줄 한 줄 마다 보면서 버그나 에러들을 발견할 때 사용합니다. 어떤 에디터들은 디버킹 기능을 가지고 있고 이 기능들은 프로그래밍 언어들에 따라 커스터마이징되거나 추가될 수 있습니다.
- *문법 하이라이팅* 코드를 읽기 쉽게 하기 위해서 색깔을 더하거나 형태를 편집합니다. 대부분의 에디터들은 커스터마이징된 문법 하이라이팅을 제공합니다.
- *확장형 프로그램 혹은 통합 프로그램* 에디터에서 기본적으로 제공하지 않는 개발자들을 위한 추가적인 도구의 추가. 예를 들어, 많은 개발자들이 코드를 문서화하고 어떻게 동작하는 지 설명하기 위한 방법을 필요로 합니다. 또 오타 체크를 위하여 철자 확인 확장프로그램을 설치할 수 있습니다. 이런 대부분의 추가적인 프로그램은 이용가능한 확장 프로그램 검색 방법도 같이 제공됩니다.
- *커스터마이징* 대부분의 에디터는 완전 커스터마이징이 가능합니다. 그리고 각 개발자들은 본인 니즈에 맞는 고유한 개발 환경을 가지고 있습니다. 많은 개발자들은 또한 자신만을 위한 확장프로그램을 만들기도 합니다.

#### 인기있는 에티더와 웹개발 확장프로그램

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### 브라우저 (Browsers)

또 다른 중요한 도구는 브라우저입니다. 웹 개발자들은 코드가 웹에서 어떻게 동작하는 지 관찰하기 위해서 브라우저를 사용합니다. 또한 에디터에 작성된 HTML과 같은 웹 페이지의 시각적인 요소들을 확인하기 위해서 사용되기도 합니다.

많은 브라우저들은 개발자의 어플리케이션에 대한 중요한 인사이트를 수집할 수 있는 특징들이나 정보들을 포함하고 있는 *개발자 도구(DevTools)*를 가지고 있습니다. 예를 들어: 만약 웹 페잊가 에러가 있다면, 때로 언제 에러가 발생했는 지 아는 것이 필요합니다. 브라우저 개발자도구는 이런 정보들을 포착할 수 있도록 설정되어있습니다.

#### 인기있는 브라우저와 개발자 도구들

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line 도구들

어떤 개발자들은 일상의 업무를 위해서 덜 그래픽적인 화면을 선호합니다. 그래서 Command line을 사용하기도 합니다. 코드를 개발하는 것은 많은 양의 타이핑을 필요로 하기에 어떤 개발자들은 다른 파일 혹은 다른 도구를 사용하거나 데스크탑 화면을 변경한다고 할 때에 키보드 단축키를 많이 사용합니다. 이런 단축키들을 키보드 작업의 흐름을 방해하는 것을 예방할 수 있습니다. 많은 업무들이 마우스로 처리될 수 있지만 Command line을 사용하는 하나의 이점으로는 마우스와 키보드 사이를 많이 이동하지 않고도 많은 것들을 처리할 수 있다는 것입니다. 또 다른 이점으로는 설정을 변경할 수 있고 자신만의 설정도 만들 수 있습니다. 설저을 변경하고 또 다른 새로운 개발 장비에 해당 설정을 가져올 수 있습니다. 개발 장비는 한 개발자에게 고유하기때문에 어떤 사람들은 command line 사용을 피하고 어떤 사람들은 전적으로 의존합니다. 물론 어떤 사람들은 두개를 섞어서 사용합니다.

### 인기있는 Command Line 옵션들

Command line 옵선들은 사용하는 운영체제에 따라 다르다.

*💻 = 운영체제에 미리 설치되어 있다.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/applications/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7)

#### 인기있는 Command Line 도구들

- [Git](https://git-scm.com/) (💻 on most operating sytems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 문서

개발자가 새로운 것을 배울 때에 어떻게 사용하는 지 배우기 위해서 문서에 의존하곤 한다. 개발자들은 도구나 언어들을 정확하게 사용하는 방법을 알기 위해서 문서에 의존하고 어떻게 작동하는 지에 대한 더 깊은 지식을 얻는다.

#### 웹 개발 관련된 인기 문서

- [Mozilla Developer Network](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)

✅ 검색해보세요: 웹 개발 환경의 기본에 대해서 알게 되었습니다. 웹 개발 환경과 웹 디자인 환경을 비교해보세요

---

## 🚀 연습 문제

프로그래밍 언어들을 비교하세요. Javascript와 Java 사이의 고유한 특징들은 무엇이 있나요? COBOL과 Go는 어떤가요?

## Post-Lecture Quiz
[강의 후 퀴즈](.github/post-lecture-quiz.ko.md)

## 리뷰 및 스스로 공부하기

프로그래머가 사용가능한 다른 언어들을 조금 공부해보자. 한 언어로 한 줄을 써보고 다른 두 가지 언어 모두 그것을 다시 똑같이 해보자. 무엇을 배울 수 있는가?

## 과제 

[문서 읽기](assignment.ko.md)
