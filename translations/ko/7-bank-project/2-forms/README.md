<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-24T00:00:05+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "ko"
}
-->
# 은행 앱 만들기 Part 2: 로그인 및 회원가입 폼 만들기

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/43)

### 소개

대부분의 현대 웹 앱에서는 계정을 생성하여 개인 공간을 가질 수 있습니다. 여러 사용자가 동시에 웹 앱에 접근할 수 있기 때문에, 각 사용자의 개인 데이터를 별도로 저장하고 어떤 정보를 표시할지 선택하는 메커니즘이 필요합니다. [사용자 인증을 안전하게 관리하는 방법](https://en.wikipedia.org/wiki/Authentication)은 별도의 방대한 주제이므로 다루지 않겠지만, 각 사용자가 우리 앱에서 하나 이상의 은행 계좌를 생성할 수 있도록 할 것입니다.

이번 파트에서는 HTML 폼을 사용하여 웹 앱에 로그인 및 회원가입 기능을 추가합니다. 데이터를 서버 API로 프로그래밍 방식으로 전송하는 방법과 사용자 입력에 대한 기본 유효성 검사 규칙을 정의하는 방법을 배웁니다.

### 사전 요구사항

이 강의를 진행하기 위해 [HTML 템플릿 및 라우팅](../1-template-route/README.md)을 완료해야 합니다. 또한 [Node.js](https://nodejs.org)를 설치하고 [서버 API 실행](../api/README.md)을 로컬에서 설정하여 계정을 생성할 데이터를 전송할 수 있어야 합니다.

**주의사항**  
다음 두 개의 터미널을 동시에 실행해야 합니다.
1. [HTML 템플릿 및 라우팅](../1-template-route/README.md) 강의에서 만든 메인 은행 앱
2. 위에서 설정한 [은행 앱 서버 API](../api/README.md)

두 서버가 실행 중이어야 강의를 따라갈 수 있습니다. 두 서버는 서로 다른 포트(포트 `3000`과 포트 `5000`)에서 실행되므로 문제없이 작동할 것입니다.

서버가 제대로 실행 중인지 확인하려면 터미널에서 다음 명령을 실행하세요:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## 폼과 컨트롤

`<form>` 요소는 사용자가 대화형 컨트롤을 통해 데이터를 입력하고 제출할 수 있는 HTML 문서의 섹션을 캡슐화합니다. 폼 내에서 사용할 수 있는 다양한 사용자 인터페이스(UI) 컨트롤이 있으며, 가장 일반적인 것은 `<input>` 및 `<button>` 요소입니다.

예를 들어, 사용자가 사용자 이름을 입력할 수 있는 필드를 생성하려면 다음과 같이 사용할 수 있습니다:

```html
<input id="username" name="username" type="text">
```

`name` 속성은 폼 데이터가 전송될 때 속성 이름으로 사용됩니다. `id` 속성은 `<label>`과 폼 컨트롤을 연결하는 데 사용됩니다.

> [`<input>` 유형](https://developer.mozilla.org/docs/Web/HTML/Element/input) 및 [다른 폼 컨트롤](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls)의 전체 목록을 확인하여 UI를 구축할 때 사용할 수 있는 모든 기본 UI 요소를 알아보세요.

✅ `<input>`은 [빈 요소](https://developer.mozilla.org/docs/Glossary/Empty_element)로, 닫는 태그를 추가하지 않아야 합니다. 그러나 셀프 클로징 `<input/>` 표기법을 사용할 수 있지만 필수는 아닙니다.

폼 내의 `<button>` 요소는 약간 특별합니다. `type` 속성을 지정하지 않으면 기본적으로 버튼을 누를 때 폼 데이터를 서버에 제출합니다. 가능한 `type` 값은 다음과 같습니다:

- `submit`: `<form>` 내에서 기본값으로, 버튼이 폼 제출 동작을 트리거합니다.
- `reset`: 버튼이 모든 폼 컨트롤을 초기값으로 재설정합니다.
- `button`: 버튼을 눌렀을 때 기본 동작을 할당하지 않습니다. JavaScript를 사용하여 사용자 지정 동작을 할당할 수 있습니다.

### 과제

`login` 템플릿에 폼을 추가하는 것부터 시작해 봅시다. *사용자 이름* 필드와 *로그인* 버튼이 필요합니다.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

자세히 보면 `<label>` 요소도 추가된 것을 알 수 있습니다. `<label>` 요소는 사용자 이름 필드와 같은 UI 컨트롤에 이름을 추가하는 데 사용됩니다. 라벨은 폼의 가독성을 높이는 데 중요할 뿐만 아니라 추가적인 이점도 제공합니다:

- 라벨을 폼 컨트롤에 연결하면 보조 기술(예: 화면 읽기 프로그램)을 사용하는 사용자가 제공해야 할 데이터를 이해하는 데 도움이 됩니다.
- 라벨을 클릭하면 연결된 입력 필드에 바로 포커스를 맞출 수 있어 터치스크린 기반 장치에서 더 쉽게 접근할 수 있습니다.

> [웹 접근성](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility)은 종종 간과되는 매우 중요한 주제입니다. [시맨틱 HTML 요소](https://developer.mozilla.org/docs/Learn/Accessibility/HTML)를 올바르게 사용하면 접근 가능한 콘텐츠를 만드는 것이 어렵지 않습니다. [접근성에 대해 더 알아보기](https://developer.mozilla.org/docs/Web/Accessibility)를 통해 일반적인 실수를 피하고 책임감 있는 개발자가 되어 보세요.

이제 바로 아래에 회원가입을 위한 두 번째 폼을 추가해 봅시다:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

`value` 속성을 사용하여 특정 입력 필드의 기본값을 정의할 수 있습니다.  
또한 `balance` 입력 필드가 `number` 유형인 것을 확인하세요. 다른 입력 필드와 다르게 보이나요? 직접 상호작용해 보세요.

✅ 키보드만 사용하여 폼을 탐색하고 상호작용할 수 있나요? 어떻게 하면 될까요?

## 데이터를 서버로 제출하기

이제 UI가 준비되었으니, 다음 단계는 데이터를 서버로 전송하는 것입니다. 현재 코드를 사용하여 빠르게 테스트해 봅시다: *로그인* 또는 *회원가입* 버튼을 클릭하면 어떤 일이 발생하나요?

브라우저의 URL 섹션이 변경된 것을 확인했나요?

![회원가입 버튼 클릭 후 브라우저 URL 변경 스크린샷](../../../../7-bank-project/2-forms/images/click-register.png)

`<form>`의 기본 동작은 [GET 메서드](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)를 사용하여 현재 서버 URL로 폼 데이터를 제출하고, 데이터를 URL에 직접 추가하는 것입니다. 하지만 이 방법에는 몇 가지 단점이 있습니다:

- 전송할 수 있는 데이터 크기가 제한적입니다(약 2000자).
- 데이터가 URL에 직접 표시됩니다(비밀번호에는 적합하지 않음).
- 파일 업로드와 함께 사용할 수 없습니다.

이러한 이유로 [POST 메서드](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)를 사용하여 폼 데이터를 HTTP 요청 본문에 전송할 수 있습니다. 이 방법은 위의 제한 사항이 없습니다.

> POST는 데이터를 전송하는 데 가장 일반적으로 사용되는 메서드이지만, [특정 시나리오](https://www.w3.org/2001/tag/doc/whenToUseGet.html)에서는 검색 필드 구현과 같은 경우 GET 메서드를 사용하는 것이 더 적합할 수 있습니다.

### 과제

회원가입 폼에 `action` 및 `method` 속성을 추가하세요:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

이제 이름을 입력하여 새 계정을 등록해 보세요. *회원가입* 버튼을 클릭하면 다음과 같은 화면이 나타날 것입니다:

![localhost:5000/api/accounts 주소에서 JSON 문자열로 사용자 데이터를 보여주는 브라우저 창](../../../../7-bank-project/2-forms/images/form-post.png)

모든 것이 잘 작동하면 서버가 요청에 대해 생성된 계정 데이터를 포함한 [JSON](https://www.json.org/json-ko.html) 응답을 반환할 것입니다.

✅ 동일한 이름으로 다시 회원가입을 시도해 보세요. 어떤 일이 발생하나요?

## 페이지를 새로고침하지 않고 데이터 제출하기

방금 사용한 방법에는 약간의 문제가 있습니다: 폼을 제출하면 앱을 벗어나 브라우저가 서버 URL로 리디렉션됩니다. 우리는 [단일 페이지 애플리케이션(SPA)](https://en.wikipedia.org/wiki/Single-page_application)을 만들고 있으므로 모든 페이지 새로고침을 피하려고 합니다.

페이지를 새로고침하지 않고 폼 데이터를 서버로 전송하려면 JavaScript 코드를 사용해야 합니다. `<form>` 요소의 `action` 속성에 URL 대신 `javascript:` 문자열로 시작하는 JavaScript 코드를 사용할 수 있습니다. 이를 사용하면 브라우저가 자동으로 처리하던 작업을 직접 구현해야 합니다:

- 폼 데이터 가져오기
- 폼 데이터를 적절한 형식으로 변환 및 인코딩
- HTTP 요청 생성 및 서버로 전송

### 과제

회원가입 폼의 `action`을 다음으로 교체하세요:

```html
<form id="registerForm" action="javascript:register()">
```

`app.js`를 열고 `register`라는 새 함수를 추가하세요:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

여기서는 `getElementById()`를 사용하여 폼 요소를 가져오고, [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) 도우미를 사용하여 폼 컨트롤에서 키/값 쌍으로 값을 추출합니다. 그런 다음 [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)를 사용하여 데이터를 일반 객체로 변환하고, 마지막으로 데이터를 [JSON](https://www.json.org/json-ko.html)으로 직렬화합니다. JSON은 웹에서 데이터를 교환할 때 일반적으로 사용되는 형식입니다.

데이터가 이제 서버로 전송할 준비가 되었습니다. `createAccount`라는 새 함수를 만드세요:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

이 함수는 무엇을 하나요? 먼저, 여기서 `async` 키워드에 주목하세요. 이는 함수에 [**비동기**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)로 실행될 코드가 포함되어 있음을 의미합니다. `await` 키워드와 함께 사용하면 서버 응답을 기다리는 것처럼 비동기 코드를 실행한 후 계속 진행할 수 있습니다.

`fetch()` API를 사용하여 JSON 데이터를 서버로 전송합니다. 이 메서드는 두 개의 매개변수를 받습니다:

- 서버의 URL: 여기서는 `//localhost:5000/api/accounts`를 다시 넣습니다.
- 요청 설정: 여기서 메서드를 `POST`로 설정하고 요청의 `body`를 제공합니다. JSON 데이터를 서버로 전송하므로 `Content-Type` 헤더를 `application/json`으로 설정하여 서버가 내용을 해석할 수 있도록 합니다.

서버가 요청에 대해 JSON으로 응답하므로, `await response.json()`을 사용하여 JSON 내용을 구문 분석하고 결과 객체를 반환할 수 있습니다. 이 메서드는 비동기이므로, 구문 분석 중 발생할 수 있는 오류를 포착하기 위해 여기서도 `await` 키워드를 사용합니다.

이제 `register` 함수에 `createAccount()`를 호출하는 코드를 추가하세요:

```js
const result = await createAccount(jsonData);
```

`await` 키워드를 사용하므로, `register` 함수 앞에 `async` 키워드를 추가해야 합니다:

```js
async function register() {
```

마지막으로 결과를 확인하기 위해 로그를 추가합니다. 최종 함수는 다음과 같아야 합니다:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

조금 길었지만 여기까지 왔습니다! [브라우저 개발자 도구](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools)를 열고 새 계정을 등록해 보세요. 웹 페이지에는 아무런 변화가 없지만, 콘솔에 메시지가 나타나 모든 것이 잘 작동함을 확인할 수 있습니다.

![브라우저 콘솔에 로그 메시지가 표시된 스크린샷](../../../../7-bank-project/2-forms/images/browser-console.png)

✅ 데이터가 서버로 안전하게 전송된다고 생각하나요? 누군가 요청을 가로챌 수 있다면 어떻게 될까요? [HTTPS](https://en.wikipedia.org/wiki/HTTPS)에 대해 읽어보며 안전한 데이터 통신에 대해 알아보세요.

## 데이터 유효성 검사

사용자 이름을 설정하지 않고 새 계정을 등록하려고 하면, 서버가 [400 (잘못된 요청)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).) 상태 코드와 함께 오류를 반환하는 것을 볼 수 있습니다.

서버로 데이터를 전송하기 전에 가능한 경우 [폼 데이터를 유효성 검사](https://developer.mozilla.org/docs/Learn/Forms/Form_validation)하여 유효한 요청을 보낼 수 있도록 하는 것이 좋습니다. HTML5 폼 컨트롤은 다양한 속성을 사용하여 기본 제공 유효성 검사를 제공합니다:

- `required`: 필드가 채워지지 않으면 폼을 제출할 수 없습니다.
- `minlength` 및 `maxlength`: 텍스트 필드의 최소 및 최대 문자 수를 정의합니다.
- `min` 및 `max`: 숫자 필드의 최소 및 최대 값을 정의합니다.
- `type`: `number`, `email`, `file` 또는 [다른 기본 제공 유형](https://developer.mozilla.org/docs/Web/HTML/Element/input)과 같은 기대되는 데이터 유형을 정의합니다. 이 속성은 폼 컨트롤의 시각적 렌더링을 변경할 수도 있습니다.
- `pattern`: [정규 표현식](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) 패턴을 정의하여 입력된 데이터가 유효한지 테스트합니다.
팁: `:valid` 및 `:invalid` CSS 의사 클래스들을 사용하여 폼 컨트롤이 유효한지 아닌지에 따라 외형을 사용자 정의할 수 있습니다.
### 작업

새 계정을 생성하려면 사용자 이름과 통화가 필수 필드이며, 다른 필드는 선택 사항입니다. HTML 양식을 업데이트하여 `required` 속성과 필드 레이블의 텍스트를 사용해 다음과 같이 만드세요:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

이 서버 구현에서는 필드의 최대 길이에 대한 특정 제한을 강제하지 않지만, 사용자 텍스트 입력에 대해 합리적인 제한을 정의하는 것은 항상 좋은 습관입니다.

텍스트 필드에 `maxlength` 속성을 추가하세요:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

이제 *등록* 버튼을 누르고 정의된 유효성 검사 규칙을 준수하지 않는 필드가 있으면 다음과 같은 화면을 볼 수 있습니다:

![양식을 제출하려고 할 때 발생하는 유효성 검사 오류를 보여주는 스크린샷](../../../../7-bank-project/2-forms/images/validation-error.png)

이와 같은 유효성 검사는 데이터를 서버로 보내기 *전에* 수행되며, 이를 **클라이언트 측** 유효성 검사라고 합니다. 하지만 데이터를 보내지 않고 모든 검사를 수행하는 것이 항상 가능한 것은 아닙니다. 예를 들어, 동일한 사용자 이름으로 계정이 이미 존재하는지 확인하려면 서버에 요청을 보내야 합니다. 서버에서 추가로 수행되는 유효성 검사는 **서버 측** 유효성 검사라고 합니다.

일반적으로 두 가지 모두 구현해야 하며, 클라이언트 측 유효성 검사는 사용자에게 즉각적인 피드백을 제공하여 사용자 경험을 개선하지만, 서버 측 유효성 검사는 처리하는 사용자 데이터가 안전하고 신뢰할 수 있도록 보장하는 데 필수적입니다.

---

## 🚀 도전 과제

사용자가 이미 존재하는 경우 HTML에 오류 메시지를 표시하세요.

다음은 약간의 스타일링을 추가한 후 최종 로그인 페이지가 어떻게 보일 수 있는지에 대한 예시입니다:

![CSS 스타일을 추가한 후 로그인 페이지의 스크린샷](../../../../7-bank-project/2-forms/images/result.png)

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/44)

## 복습 및 자기 학습

개발자들은 특히 유효성 검사 전략과 관련하여 양식 작성에 대해 매우 창의적인 접근을 하고 있습니다. [CodePen](https://codepen.com)을 살펴보며 다양한 양식 흐름에 대해 알아보세요. 흥미롭고 영감을 주는 양식을 찾을 수 있나요?

## 과제

[은행 앱 스타일링하기](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.