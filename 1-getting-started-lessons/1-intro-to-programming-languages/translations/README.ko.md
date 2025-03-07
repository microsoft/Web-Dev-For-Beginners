# 프로그래밍 언어 및 도구 소개

이 강의에서는 프로그래밍 언어의 기초를 다룹니다. 여기에서 다루는 주제는 오늘 날 많은 최신 프로그래밍 언어에 적용됩니다. 'Tools of the Trade' 세션에서는 개발자에게 도움이 되는 유용한 소프트웨어에 대해 알아보겠습니다.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=ko)

## 소개

이 강의에서 다음 내용을 다룹니다.

- 프로그래밍이란?
- 프로그래밍 언어의 타입
- 프로그램의 기본 요소
- 전문적인 개발자를 위한 유용한 소프트웨어와 도구

## 프로그래밍이란?

프로그래밍(코딩)은 컴퓨터 또는 모바일에 명령을 내리는 프로세스입니다. 프로그래밍 언어로 명령어를 작성한 후 장치에서 해석합니다. 이러한 명령어 세트는 다양한 이름으로 참조 될 수 있지만 *program*, *computer program*, *application (app)*, 그리고 *executable* 로도 인기있는 이름입니다.

*program*은 코드로 작성된 모든 것이 될 수 있습니다; 웹 사이트, 게임과 전화 앱도 프로그램입니다. 코드를 작성하지 않고 프로그램을 만들 수는 있지만, 기본 로직은 장치로 해석되며 코드로 작성되었을 가능성이 높습니다. *running* 또는 *executing code* 프로그램이 명령을 수행하고 있습니다. 현재 이 강의를 읽고있는 장치는 화면에 출력하는 프로그램을 실행하고 있습니다.

✅ 약간의 조사를 해보세요: 세계 최초의 컴퓨터 프로그래머는 누구일까요?

## 프로그래밍 언어

프로그래밍 언어는 개발자가 기기에 보낼 명령어를 빌드할 때 사용됩니다. 장치는 바이너리(0과 1)만 이해할 수 있으며, *대부분* 개발자에게는 매우 효율적인 통신 방법이 아닙니다. 프로그래밍 언어는 인간과 컴퓨터의 소통을 위한 방법입니다.

프로그래밍 언어는 각자 다른 형식으로 제공되며 다른 용도로 사용될 수 있습니다. 예를 들어 JavaScript는 주로 웹 애플리케이션에 사용되지만, Bash는 주로 운영체제에서 사용됩니다.

*저레벨 언어*는 일반적으로 기기에서 명령을 해석할 때 *고수준 언어*보다 적은 단계로 할 수 있습니다. 그러나 고수준 언어가 인기있는 이유는 가독성과 지원입니다. JavaScript는 고수준 언어로 간주됩니다.

다음 코드는 JavaScript를 사용하는 고수준 언어와 ARM 어셈블리 코드를 사용하는 저수준 언어의 차이점을 보여줍니다.

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

안 믿어도 되지만, *두 언어는 같은 일을 하고 있습니다* : 피보나치 수열을 최대 10개까지 출력합니다.

✅ 피보나치 수열은 각 숫자가 0과 1에서 시작하는 앞의 두 숫자의 합이되는 숫자의 집합으로 [정의](https://en.wikipedia.org/wiki/Fibonacci_number)됩니다.

## 프로그램의 요소

프로그램의 단일 명령어를 *statement*라고 불리며, 일반적으로 명령어가 끝나거나 *terminates*되는 위치를 표시하는 문자 또는 줄 간격이 있습니다. 프로그램 종료 방법은 언어마다 다릅니다.

대부분의 프로그램은 명령을 수행하기 위해 명령문을 데이터에 의존 할 수 있는 사용자 또는 다른 곳의 데이터 사용에 의존합니다. 데이터는 프로그램의 작동 방식을 변경할 수 있으므로 프로그래밍 언어에서 나중에 사용할 수 있는 데이터를 임시 저장하도록 제공합니다. 이 데이터를 *변수*라고 불립니다. 변수는 메모리에 데이터를 저장하도록 장치에 지시하는 명령입니다. 프로그램의 변수는 고유 이름을 가지며, 시간이 지남에 따라 값이 변경 될 수 있는 대수학의 변수와 유사합니다.

일부 구문이 장치에서 실행되지 않을 가능성이 있습니다. 이는 일반적으로 개발자가 코드 작성할 때 의도적으로 설계되었거나, 오류가 발생할 때 우연히 발생합니다. 이러한 유형의 애플리케이션 제어는 더 강력하게 유지될 수 ​​있도록 합니다. 일반적으로 제어를 변경하려면 특정 조건이 충족되는 순간에 발생합니다. 프로그램 실행 방법을 제어하는 ​​최신 프로그래밍 언어의 일반적인 구문은`if..else` 구문입니다.

✅ 이후 강의에서 이러한 구문의 타입에 대해 자세히 알아볼 것입니다.

## Tools of the Trade

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

이 세션에서는 전문적인 개발 여정을 떠날 때 매우 유용할 수 있는 일부 소프트웨어에 대해 알아봅니다.

**개발 환경**은 개발자가 소프트웨어를 작성할 때 자주 사용하는 도구 및 기능 집합입니다. 이러한 도구 중 일부는 개발자의 특정 요구에 맞게 변경되었으며, 개발자가 작업 또는 개인 프로젝트에서 우선 순위를 변경하거나 다른 프로그래밍 언어를 사용할 때 시간이 지남에 따라 변경 될 수 있습니다. 개발 환경은 이를 사용하는 개발자만큼 독특합니다.

### 에디터

소프트웨어 개발을 위한 가장 중요한 도구 중 하나는 에디터입니다. 에디터는 코드를 작성하고 때로는 코드를 실행하는 곳입니다.

개발자는 몇 가지 추가 이유로 에디터에 의존합니다.

- *디버깅* 코드를 한 줄씩 단계별로 실행하여 버그와 오류를 발견합니다. 일부 에디터에는 디버깅 기능이 있거나, 특정 프로그래밍 언어에 맞게 변경하거나 추가할 수 있습니다.
- *Syntax highlighting* 코드에 색상 및 텍스트 서식을 추가하여 읽기 쉽게 만듭니다. 대부분 에디터에는 Syntax highlighting을 허용합니다.
- *확장 및 통합* 기본 에디터에는 없는 추가 도구에 접근하기 위해 개발자를 위한 전문화된 추가 기능입니다. 예를 들어, 많은 개발자는 코드를 문서화하고 작동 방식을 설명하는 방법이 필요하며 오타를 확인하기 위해 맞춤법 검사 확장 프로그램을 설치합니다. 이러한 추가 기능의 대부분은 특정 에디터 내에서 사용하기 위한 것이며, 대부분의 에디터는 사용 가능한 확장 검색을 제공합니다.
- *커스터마이즈* 대부분의 에디터는 커스터마이즈가 가능하며 각 개발자는 자신이 필요한 개발 환경을 가지게 됩니다. 또한 많은 개발자가 자신의 확장을 만들 수 있습니다.

#### 인기있는 에디터와 웹 개발 확장

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### 브라우저

또 다른 중요 도구는 브라우저입니다. 웹 개발자는 웹에서 코드가 어떻게 실행되는지 보기 위해 브라우저에 의존하며, HTML과 같은 에디터에서 작성된 웹 페이지의 시각적 요소를 보는데도 사용됩니다.

많은 브라우저에는 개발자가 애플리케이션에 대한 중요한 인사이트를 수집하고 잡아내는 것에 도움이 되는 유용한 기능 및 정보가 포함된 *개발자 도구* (DevTools)가 함께 제공됩니다. 예시: 웹 페이지에 오류가 있는 경우, 오류가 발생한 시기를 아는 것이 도움될 때가 있습니다. 이 정보를 잡을 수 있도록 브라우저의 DevTools를 구성 할 수 있습니다.

#### 인기있는 브라우저와 DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line 도구

일부 개발자는 일상적인 작업에 그래픽 작업을 덜 하기 위해 Command Line에 의존합니다. 코드를 개발하려면 상당한 양의 코드 타이핑이 필요하며, 일부 개발자는 키보드의 흐름을 방해하지 않는 것을 선호하므로 키보드 단축키를 사용하여 데스크톱 창을 전환하여 다른 파일에서 작업하거나, 도구를 사용합니다. 대부분 작업은 마우스로 완료할 수 있지만, Command Line을 사용하는 한 가지 이점은 마우스와 키보드를 서로 바꾸지 않고도 Command Line 도구로 많은 작업을 수행할 수 있다는 것입니다. Command Line의 또 다른 이점은 사용자 지정 구성을 저장하고, 나중에 변경하거나 새 컴퓨터로 개발 할 때 그대로 가져올 수도 있다는 것입니다. 개발 환경은 각 개발자마다 다르기  때문에 일부는 Command Line 사용을 피하고 일부는 전적으로 의존하며 일부는 두 가지를 혼용하여 사용하는 것을 선호합니다.

### 인기 있는 Command Line 옵션

command line 옵션은 사용하는 운영체제에 따라 다릅니다.

*💻 = 운영체제에 사전 설치되어 있습니다.*

#### 윈도우즈

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### 맥OS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos/?view=powershell-7&WT.mc_id=academic-77807-sagibbon)

#### 리눅스

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux/?view=powershell-7&WT.mc_id=academic-77807-sagibbon)

#### 인기있는 Command Line 도구

- [Git](https://git-scm.com/) (💻 on most operating sytems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 문서

개발자가 새로운 것을 배우고 싶거나, 방식을 알기 위해 문서를 찾을 가능성이 높습니다. 개발자는 종종 문서에 의존하여 도구와 언어를 올바르게 사용하는 방법을 안내하고, 작동 방식에 대한 더 깊은 지식을 얻습니다.

#### 웹 개발의 인기있는 문서

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), Mozilla, [Firefox](https://www.mozilla.org/firefox/) 게시자
- [Frontend Masters](https://frontendmasters.com/learn/)
-[Web.dev](https://web.dev), Google의 [Chrome](https://www.google.com/chrome/) 게시자
-[Microsoft 자체 개발자 문서](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) 용 

✅ 약간의 조사를 해보세요: 이제 웹 개발자 환경의 기본 사항을 알았으므로, 웹 디자이너 환경과 비교하고 대조하십시오.

---

## 🚀 도전

일부 프로그래밍 언어를 비교하십시오. JavaScript와 자바의 특징은 무엇입니까? COBOL과 Go는 어떻습니까?

## 강의 후 퀴즈
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2?loc=ko)

## 리뷰 & 자기주도 학습

프로그래머가 사용할 수 있는 다른 언어에 대해 조금 공부하십시오. 한 언어로 한 줄을 쓴 다음, 다른 언어로 다시 실행하십시오. 무엇을 배우나요?

## 과제 

[Reading the Docs](../assignment.md)
