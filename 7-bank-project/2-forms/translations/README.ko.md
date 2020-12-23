# 은행 앱 제작하기 파트 2: 로그인과 가입 폼 작성하기

## 강의 전 퀴즈

[Pre-lecture quiz](../.github/pre-lecture-quiz.md)

### 소개

모든 모던 웹 앱에서 대부분은, 자신의 개인 공간을 가질 계정을 만들 수 있습니다. 여러 사용자가 동시에 웹 앱에 접근할 수 있으므로, 각자 사용자의 개인 데이터를 별도로 저장하고 어느 정보를 보여줄 지에 대하여 선택하는 메커니즘이 필요합니다. 자체적으로 광범위한 주제이므로 [user identity securely](https://en.wikipedia.org/wiki/Authentication) 관리하는 방법은 다루지 않지만, 각자가 앱에서 하나 (이상)의 은행 계좌를 만들 수 있는지 확인합니다.

이 파트에서는 HTML 폼으로 웹 앱에 로그인과 가입을 추가합니다. 프로그래밍 방식으로 데이터를 서버 API에 보내는 방법과, 최종적으로 사용자 입력에 대한 기본 유효성 검사 규칙을 정의하는 방법에 대해 보겠습니다.

### 준비물

이 강의를 위해 웹 앱의 [HTML templates and routing](../../1-template-route/translations/README.ko.md)을 완료해야합니다. 또한 [Node.js](https://nodejs.org)와 [run the server API](../../api/README.md)를 로컬에 설치해야 계정을 만들 데이터를 보낼 수 있습니다.

터미널에서 다음 명령을 실행하여 서버가 잘 실행되고 있는지 테스트할 수 있습니다:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## 폼과 컨트롤

`<form>` 요소는 사용자가 대화형 컨트롤을 사용하여 데이터를 입력하고 제출할 수 있는 HTML 문서의 섹션을 캡슐화합니다. 폼 내에서 쓸 수 있는 모든 종류의 사용자 인터페이스(UI) 컨트롤이 있으며, 가장 일반적인 컨트롤은 `<input>`과 `<button>` 요소입니다.

`<input>`에는 다양한 [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)이 많이 있습니다, 예를 들어 사용자 이름으로 입력 가능한 필드를 만들려면 다음과 같이 사용할 수 있습니다:

```html
<input name="username" type="text">
```

`name` 속성은 컨트롤을 식별하는 데 사용되고 폼 데이터를 전송할 때 속성 이름으로 사용됩니다.

> UI를 작성할 때 쓸 수 있는 모든 네이티브 UI 요소에 대한 아이디어를 얻으려면 [`<input>` types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)과 [other form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls)의 전체 목록을 찾아봅시다.

✅ `<input>`은 닫는 태그를 맞추지 *않는* [empty element](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)입니다. 자동으로-닫는 `<input/>` 표기법을 사용할 수 있지만, 필수는 아닙니다.

폼 내의 `<button>` 요소는 약간 특별합니다. `type` 속성을 지정하지 않으면, 눌렀을 때 폼 데이터가 자동으로 서버에 제출됩니다. 가능한 `type` 값은 다음과 같습니다:

- `submit`: `<form>`내의 기본값이며, 버튼은 폼 제출 작업으로 연결합니다.
- `reset`: 버튼은 모든 폼 컨트롤을 초기 값으로 다시 설정합니다.
- `button`: 버튼을 눌렀을 때 기본 동작을 지정하지 않습니다. JavaScript를 사용하여 커스텀 작업을 할당할 수 있습니다.

### 작업

`login` 템플릿에 폼을 추가하는 것으로 시작하겠습니다. *username* 필드와 *Login* 버튼이 필요합니다.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="user">Username</label>
      <input name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

자세히 살펴보면, 여기에 `<label>` 요소도 추가된 것을 알 수 있습니다. `<label>`은 username 필드와 같은, UI 컨트롤의 캡션을 추가하는 데 사용됩니다. 라벨은 폼의 가독성을 위해서 중요하지만, 추가적인 장점도 제공합니다:

- 라벨을 폼 컨트롤에 연결하면, (화면 판독기와 같은) 보조 기술을 사용하는 사용자가 받는 것으로 예상되는 데이터를 이해하는 데 도움이 됩니다.
- 라벨을 클릭하여 연결된 입력에 직접 맞출 수 있으므로, 터치-스크린 기반 장치에서 더 쉽게 접근할 수 있습니다.

> 웹에서의 [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)은 종종 간과되는 매우 중요한 주제입니다. [HTML5 semantic elements](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) 덕분에 이를 적절하게 사용한다면 접근성 콘텐츠로 만드는 것은 어렵지 않습니다. 일반적인 실수를 피하고 책임있는 개발자가 되기 위해 [accessibility에 대하여 읽을 수](https://developer.mozilla.org/en-US/docs/Web/Accessibility) 있습니다.

이제 이전 항목의 바로 아래에, 가입을 위한 두번째 폼을 추가합니다:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input name="user" type="text">
  <label for="currency">Currency</label>
  <input name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input name="description" type="text">
  <label for="balance">Current balance</label>
  <input name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

`value` 속성을 사용하여 주어진 입력에 대한 기본값을 정의할 수 있습니다.
`balance`에 대한 입력에는 `number` 타입이 존재 합니다. 다른 입력과 다르게 보이나요? 상호작용 해보세요.

✅ 키보드만 사용하여 폼을 탐색하고 상호 작용할 수 있나요? 어떻게 하나요?

## 서버에 데이터 제출하기

이제 기능 UI가 있으므로, 다음 단계는 데이터를 서버로 보내는 것입니다. 현재 코드를 사용하여 간단한 테스트를 해봅시다. *Login* 혹은 *Register* 버튼을 클릭하면 어떻게 되나요?

브라우저의 URL 섹션에서 변경된 것을 알고 있나요?

![Screenshot of the browser's URL change after clicking the Register button](.././images/click-register.png)

`<form>`의 기본 작업은 [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)를 사용하여 현재 서버 URL에 폼을 제출하고, 폼 데이터를 URL에 직접 추가하는 것입니다. 이 방식에는 몇 가지 단점이 있습니다:

- 전송되는 데이터는 크기가 매우 제한적입니다 (2000 자)
- 데이터가 URL에 직접 보입니다 (비밀번호에 적절하지 않습니다)
- 파일 업로드는 작동하지 않습니다

그러므로 아무런 제한없이 하려면, HTTP 요청 본문에서 폼 데이터를 서버로 보내는 [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)를 사용하게 변경할 수 있습니다.

> POST는 데이터를 보낼 때 가장 일반적인 방식이지만, [some specific scenarios](https://www.w3.org/2001/tag/doc/whenToUseGet.html)에서 검색 필드를 구현할 때는, GET 방법을 사용하는 것이 더 좋습니다.

### 작업

가입 폼에 `action`과 `method` 속성을 추가합니다:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

이제 이름으로 새로운 계정을 가입합니다. *Register* 버튼을 클릭하면 다음과 같은 내용이 표시됩니다:

![](.././images/form-post.png)

모든 것이 잘 되면, 서버에 생성된 계정 데이터가 포함되어 [JSON](https://www.json.org/json-en.html)으로 응답해야 합니다.

✅ 같은 이름으로 다시 가입해보세요. 무슨 일이 일어났나요?

## 페이지를 다시 불러오지 않고 데이터 제출하기

알다시피, 사용한 접근 방식에는 약간 이슈가 있습니다: 폼을 제출할 때, 앱에서 나가면서 브라우저가 서버 URL로 리디렉션됩니다. [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application)을 만들고 있으므로, 웹 앱으로 모든 페이지를 다시 불러오지 않으려 합니다.

페이지를 강제로 다시 불러오지 않고 폼 데이터를 서버로 보내려면, JavaScript 코드를 사용해야 합니다. `<form>` 요소의 `action` 속성에 URL을 넣는 대신, `javascript:` 문자열이 앞에 붙은 JavaScript 코드를 사용하여 커스텀 작업을 할 수 있습니다. 이를 사용하면 이전에 끝낸 브라우저로 자동 수행한 일부 작업을 구현해야 합니다:

- 폼 데이터 검색하기
- 폼 데이터를 알맞은 포맷으로 변환하고 인코딩하기
- HTTP 요청을 생성하고 서버로 전송하기

### 작업

가입 폼 `action`을 다음으로 바꿉니다:

```html
<form id="registerForm" action="javascript:register()">
```

`app.js` 열어서 `register`라고 지어진 새로운 함수를 추가합니다:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

여기서는 `getElementById()`를 사용하여 폼 요소를 검색하고, [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) 헬퍼를 사용하여 키/값 쌍 집합으로 폼 컨트롤에서 값을 추출합니다. 그러고 [`Object.fromEntries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)를 사용하여 데이터를 일반 객체로 변환하여 최종적으로 웹에서 데이터를 교환할 때, 일반적으로 사용되는 포맷인 [JSON](https://www.json.org/json-en.html)으로 데이터를 직렬화합니다.

데이터는 이제 서버에 보낼 준비가 되었습니다. `createAccount`라고 지은 새로운 함수를 만듭니다:

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

이 함수는 어떤 일을 할까요? 먼저, 여기있는 `async` 키워드를 확인하세요. 이 함수는 [**asynchronously**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)하게 실행하는 코드가 포함되어 있다는 것을 의미합니다. `await` 키워드와 함께 사용하면, 비동기 코드가 실행될 때까지 기다릴 수 있습니다 - 여기에서 서버의 응답을 기다리는 것과 같습니다 - 계속하기 전에.

여기는 ``async/await` 사용 방식에 대한 간단한 영상입니다:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

`fetch()` API를 사용하여 JSON 데이터를 서버로 보냅니다. 이 메소드는 2개의 파라미터가 사용됩니다:

- 서버의 URL이므로, 여기에 `//localhost:5000/api/accounts`를 다시 넣습니다.
- 요청의 설정입니다. 여기서 메소드를 `POST`로 설정하고 요청한 `body`를 줍니다. JSON 데이터를 서버로 보낼 때, `Content-Type` 헤더를 `application/json`으로 설정하여 서버가 인터프리터하는 방식을 알 수 있도록 합니다.

서버가 JSON으로 응답하므로, `await response.json()`을 사용하여 JSON 콘텐츠를 파싱하고 결과 객체를 반환할 수 있습니다. 이 메소드는 비동기이므로, 반환하기 전 여기에서 `await` 키워드를 사용하여 파싱하는 도중에도 오류가 발생하는지 확인합니다.

이제 `register` 함수에 코드를 추가하여 `createAccount()`를 호출합니다:

```js
const result = await createAccount(jsonData);
```

`await` 함수를 여기에서 사용하기 때문에, 가입 함수 전에 `async` 키워드를 추가해야 합니다:

```js
async function register() {
```

마지막으로, 결과를 보기 위해서 로그를 추가하겠습니다. 최종 함수은 다음과 같습니다:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  console.log('Account created!', result);
}
```

조금 길지만 도착했습니다! [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)를 열고, 새 계정을 가입하면, 웹 페이지에 변경 사항이 표시되지 않으면서 콘솔에 작동을 확인할 메시지가 나타납니다.

![Screenshot showing log message in the browser console](.././images/browser-console.png)

✅ 데이터가 안전하게 서버로 보내졌다고 생각하나요? 누군가 요청을 가져갈 수 있다면 어떤가요? 보안 데이터 통신에 대해 자세히 보려면 [HTTPS](https://en.wikipedia.org/wiki/HTTPS)를 읽어보세요.

## Data 검증하기

사용자 이름을 먼저 설정하지 않고 새 계정을 가입하려하면, 서버에서 상태 코드 [400 (Bad Request)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).) 오류를 반환하는 것으로 볼 수 있습니다.

데이터를 서버로 보내기 전에 할 수 있다면, 유요한 요청을 보낼 수 있도록, 미리 [validate the form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)를 실습하는 것이 좋습니다. HTML5 포맷 컨트롤은 다양한 속성을 사용하여 빌트인 유효성 검사를 제공합니다:

- `required`: 필드를 채워야하며 안 채운다면 폼을 제출할 수 없습니다.
- `minlength`와 `maxlength`: 텍스트 입력의 최소 및 최대 문자 수를 정의합니다.
- `min`과 `max`: 숫자 필드의 최소값과 최대값을 정의합니다.
- `type`: `number`, `email`, `file` 또는 [other built-in types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)처럼, 예상되는 데이터의 종류를 정의합니다. 이 속성은 폼 컨트롤의 비주얼 렌더링을 바꿀 수도 있습니다.
- `pattern`: 입력된 데이터가 유효한지 테스트하기 위해 [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) 패턴을 정의할 수 있습니다.

> Tip: 유효하거나 `:valid`와 `:invalid` CSS pseudo-classes를 사용하지 않는 여부에 따라 폼 컨트롤의 모양을 커스텀할 수 있습니다.

### 작업

유효한 새로운 계정을 만들 때에 username과 currency라는 2개의 필수 필드가 필요하며, 다른 필드는 옵션입니다. HTML에서 폼을 갱신하여 다음 사항을 반영합니다:

```html
<input name="user" type="text" required>
...
<input name="currency" type="text" value="$" required>
```

이 특정 서버을 구현하는 것은 필드의 최대 길이에 제한을 걸진 않지만, 항상 사용자 텍스트 항목에 대하여 적당한 제한을 두는 것이 좋습니다.

`maxlength` 속성을 이 텍스트 필드에 추가합니다:

```html
<input name="user" type="text" maxlength="20" required>
...
<input name="currency" type="text" value="$" maxlength="5" required>
...
<input name="description" type="text" maxlength="100">
```

이제 *Register* 버튼을 누르고 정의한 유효성 검사 규칙을 필드가 따르지 않는 경우에는, 다음과 같이 보입니다:

![Screenshot showing the validation error when trying to submit the form](./images/validation-error.png)

서버에 데이터를 보내기 *전에 하는* 유효성 검사를 **client-side** 유효성 검사라고 합니다. 그러나 데이터를 보내지 않고 모든 검사를 하는 것은 항상 가능하지 않습니다. 예를 들면, 서버에 요청을 보내지 않고 동일한 사용자 이름을 가진 계정이 이미 존재하는지 확인할 수 있는 방식은 없습니다. 서버에서 수행되는 추가적인 유효성 검사를 **server-side** 유효성 검사라고합니다.

일반적으로 모두 구현해야하며, 클라이언트-측 유효성 검사를 사용하면 사용자에게 즉시 피드백을 주고 사용자 경험도 향상되지만, 서버-측 유효성 검사도 바뀌는 사용자 데이터가 건전하고 안전한지 확인하려면 중요합니다.

---

## 🚀 도전

이미 사용자가 존재한다면 HTML 오류 메시지가 나옵니다.

다음은 살짝 스타일을 적용한 뒤에 최종 로그인 페이지를 보여주는 예시입니다:

![Screenshot of the login page after adding CSS styles](.././images/result.png)

## 강의 후 퀴즈

[Post-lecture quiz](../.github/post-lecture-quiz.md)

## 리뷰 & 자기주도 학습

개발자는 특히 유효성 검사 전략과 관련하여, 폼을 작성하는 노력에 대해 매우 창의적으로 생각했습니다. [CodePen](https://codepen.com)으로 다양한 폼 흐름에 대해 알아보세요; 흥미롭고 영감이 생기는 폼을 찾을 수 있나요?

## 과제

[Style your bank app](../assignment.md)
