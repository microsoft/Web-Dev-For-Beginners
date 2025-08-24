<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-24T00:09:09+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "ko"
}
-->
# 은행 앱 만들기 Part 1: 웹 앱에서 HTML 템플릿과 라우트

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### 소개

브라우저에서 JavaScript가 등장한 이후로, 웹사이트는 이전보다 훨씬 더 상호작용적이고 복잡해졌습니다. 웹 기술은 이제 브라우저에서 직접 실행되는 완전한 기능을 갖춘 애플리케이션을 만드는 데 일반적으로 사용되며, 이를 [웹 애플리케이션](https://en.wikipedia.org/wiki/Web_application)이라고 부릅니다. 웹 앱은 매우 상호작용적이기 때문에 사용자는 작업이 수행될 때마다 전체 페이지를 다시 로드하는 것을 원하지 않습니다. 그래서 JavaScript를 사용하여 DOM을 통해 HTML을 직접 업데이트하여 더 부드러운 사용자 경험을 제공합니다.

이번 강의에서는 HTML 템플릿을 사용하여 전체 HTML 페이지를 다시 로드하지 않고도 여러 화면을 표시하고 업데이트할 수 있는 은행 웹 앱을 만드는 기초를 다질 것입니다.

### 사전 요구사항

이번 강의에서 만들 웹 앱을 테스트하려면 로컬 웹 서버가 필요합니다. 로컬 웹 서버가 없다면 [Node.js](https://nodejs.org)를 설치하고 프로젝트 폴더에서 `npx lite-server` 명령을 사용할 수 있습니다. 이 명령은 로컬 웹 서버를 생성하고 브라우저에서 앱을 열어줍니다.

### 준비

컴퓨터에서 `bank`라는 폴더를 만들고 그 안에 `index.html`이라는 파일을 생성하세요. 우리는 이 HTML [보일러플레이트](https://en.wikipedia.org/wiki/Boilerplate_code)에서 시작할 것입니다:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML 템플릿

웹 페이지에 여러 화면을 만들고 싶다면, 화면마다 HTML 파일을 하나씩 생성하는 방법이 있습니다. 하지만 이 방법은 몇 가지 불편함을 초래합니다:

- 화면을 전환할 때마다 전체 HTML을 다시 로드해야 하므로 느릴 수 있습니다.
- 서로 다른 화면 간에 데이터를 공유하기가 어렵습니다.

다른 접근 방식은 하나의 HTML 파일만 사용하고 `<template>` 요소를 사용하여 여러 [HTML 템플릿](https://developer.mozilla.org/docs/Web/HTML/Element/template)을 정의하는 것입니다. 템플릿은 브라우저에서 표시되지 않는 재사용 가능한 HTML 블록이며, JavaScript를 사용하여 런타임에 인스턴스화해야 합니다.

### 작업

우리는 로그인 페이지와 대시보드 두 화면을 가진 은행 앱을 만들 것입니다. 먼저, HTML 본문에 앱의 다양한 화면을 인스턴스화하는 데 사용할 자리 표시자 요소를 추가해 보겠습니다:

```html
<div id="app">Loading...</div>
```

JavaScript로 나중에 쉽게 찾을 수 있도록 `id`를 부여합니다.

> 팁: 이 요소의 내용이 교체될 것이므로 앱이 로드되는 동안 표시될 로딩 메시지나 표시기를 넣을 수 있습니다.

다음으로, 로그인 페이지를 위한 HTML 템플릿을 아래에 추가합니다. 지금은 제목과 탐색을 수행하는 링크를 포함하는 섹션만 넣겠습니다.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

그런 다음 대시보드 페이지를 위한 HTML 템플릿을 추가합니다. 이 페이지는 다음 섹션을 포함합니다:

- 제목과 로그아웃 링크가 있는 헤더
- 은행 계좌의 현재 잔액
- 테이블에 표시된 거래 목록

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> 팁: HTML 템플릿을 만들 때 어떻게 보일지 확인하고 싶다면 `<template>` 및 `</template>` 줄을 `<!-- -->`로 감싸서 주석 처리할 수 있습니다.

✅ 왜 템플릿에 `id` 속성을 사용하는 것일까요? 클래스 같은 다른 것을 사용할 수 있을까요?

## JavaScript로 템플릿 표시하기

현재 HTML 파일을 브라우저에서 실행해 보면 `Loading...`만 표시된 채 멈춰 있을 것입니다. 이는 HTML 템플릿을 인스턴스화하고 표시하기 위해 JavaScript 코드를 추가해야 하기 때문입니다.

템플릿을 인스턴스화하는 과정은 일반적으로 3단계로 이루어집니다:

1. DOM에서 템플릿 요소를 검색합니다. 예를 들어 [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById)를 사용합니다.
2. [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)를 사용하여 템플릿 요소를 복제합니다.
3. [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)를 사용하여 복제된 요소를 DOM의 표시 가능한 요소 아래에 첨부합니다.

✅ 템플릿을 DOM에 첨부하기 전에 복제해야 하는 이유는 무엇일까요? 이 단계를 생략하면 어떤 일이 발생할까요?

### 작업

프로젝트 폴더에 `app.js`라는 새 파일을 만들고 HTML의 `<head>` 섹션에 해당 파일을 가져옵니다:

```html
<script src="app.js" defer></script>
```

이제 `app.js`에서 `updateRoute`라는 새 함수를 만들어 보겠습니다:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

여기서 우리는 위에서 설명한 3단계를 정확히 수행합니다. `templateId`를 가진 템플릿을 인스턴스화하고 복제된 내용을 앱 자리 표시자 안에 넣습니다. `cloneNode(true)`를 사용하여 템플릿의 전체 하위 트리를 복사해야 한다는 점에 유의하세요.

이제 이 함수를 템플릿 중 하나에 호출하고 결과를 확인하세요.

```js
updateRoute('login');
```

✅ 이 코드 `app.innerHTML = '';`의 목적은 무엇일까요? 이 코드가 없으면 어떤 일이 발생할까요?

## 라우트 생성하기

웹 앱에 대해 이야기할 때, **라우팅**은 특정 화면을 표시하기 위해 **URL**을 매핑하는 의도를 의미합니다. 여러 HTML 파일이 있는 웹사이트에서는 파일 경로가 URL에 반영되므로 자동으로 수행됩니다. 예를 들어, 프로젝트 폴더에 다음 파일이 있다면:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

`mywebsite`를 루트로 웹 서버를 생성하면 URL 매핑은 다음과 같습니다:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

하지만 우리의 웹 앱은 모든 화면을 포함하는 단일 HTML 파일을 사용하고 있으므로 이 기본 동작은 도움이 되지 않습니다. 우리는 이 매핑을 수동으로 생성하고 JavaScript를 사용하여 표시된 템플릿을 업데이트해야 합니다.

### 작업

URL 경로와 템플릿을 매핑하기 위해 간단한 객체를 사용할 것입니다. 이 객체를 `app.js` 파일 상단에 추가하세요.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

이제 `updateRoute` 함수를 약간 수정해 보겠습니다. `templateId`를 직접 전달하는 대신 현재 URL을 먼저 확인한 다음, 매핑을 사용하여 해당 템플릿 ID 값을 가져옵니다. [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname)을 사용하여 URL에서 경로 섹션만 가져올 수 있습니다.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

여기서 선언한 라우트를 해당 템플릿에 매핑했습니다. 브라우저에서 URL을 수동으로 변경하여 올바르게 작동하는지 확인할 수 있습니다.

✅ URL에 알 수 없는 경로를 입력하면 어떤 일이 발생할까요? 이를 어떻게 해결할 수 있을까요?

## 탐색 추가하기

앱의 다음 단계는 URL을 수동으로 변경하지 않고 페이지 간 탐색할 수 있는 기능을 추가하는 것입니다. 이는 두 가지를 포함합니다:

1. 현재 URL 업데이트
2. 새로운 URL을 기반으로 표시된 템플릿 업데이트

두 번째 부분은 이미 `updateRoute` 함수로 처리했으므로, 현재 URL을 업데이트하는 방법을 알아내야 합니다.

JavaScript와 더 구체적으로는 [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)를 사용해야 합니다. 이 메서드는 HTML을 다시 로드하지 않고 URL을 업데이트하고 브라우저 기록에 새 항목을 생성할 수 있습니다.

> 참고: HTML 앵커 요소 [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a)는 자체적으로 다른 URL로 하이퍼링크를 생성할 수 있지만, 기본적으로 브라우저가 HTML을 다시 로드하게 만듭니다. `preventDefault()` 함수를 클릭 이벤트에서 사용하여 이 동작을 방지해야 합니다.

### 작업

앱에서 탐색에 사용할 새 함수를 만들어 보겠습니다:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

이 메서드는 주어진 경로를 기반으로 현재 URL을 먼저 업데이트한 다음 템플릿을 업데이트합니다. `window.location.origin` 속성은 URL 루트를 반환하여 주어진 경로에서 전체 URL을 재구성할 수 있게 합니다.

이제 이 함수가 있으면 경로가 정의된 라우트와 일치하지 않을 경우 발생하는 문제를 해결할 수 있습니다. `updateRoute` 함수를 수정하여 일치하는 경로를 찾을 수 없을 경우 기존 라우트 중 하나로 대체하도록 추가합니다.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

경로를 찾을 수 없으면 이제 `login` 페이지로 리디렉션됩니다.

이제 링크가 클릭되었을 때 URL을 가져오고 브라우저의 기본 링크 동작을 방지하는 함수를 만들어 보겠습니다:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

탐색 시스템을 완성하기 위해 HTML의 *Login* 및 *Logout* 링크에 바인딩을 추가합니다.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

위의 `event` 객체는 `click` 이벤트를 캡처하여 `onLinkClick` 함수에 전달합니다.

[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 속성을 사용하여 `click` 이벤트를 JavaScript 코드에 바인딩합니다. 여기서는 `navigate()` 함수 호출입니다.

이 링크를 클릭해 보세요. 이제 앱의 다양한 화면 간 탐색이 가능해야 합니다.

✅ `history.pushState` 메서드는 HTML5 표준의 일부이며 [모든 최신 브라우저](https://caniuse.com/?search=pushState)에 구현되어 있습니다. 오래된 브라우저용 웹 앱을 만들고 있다면 이 API 대신 사용할 수 있는 트릭이 있습니다: 경로 앞에 [해시(`#`)](https://en.wikipedia.org/wiki/URI_fragment)를 사용하면 정규 앵커 탐색과 함께 페이지를 다시 로드하지 않고 라우팅을 구현할 수 있습니다. 이는 페이지 내 내부 링크를 생성하기 위한 목적이었습니다.

## 브라우저의 뒤로 및 앞으로 버튼 처리하기

`history.pushState`를 사용하면 브라우저의 탐색 기록에 새 항목이 생성됩니다. 브라우저의 *뒤로 버튼*을 길게 누르면 다음과 같은 화면이 표시될 것입니다:

![탐색 기록 스크린샷](../../../../7-bank-project/1-template-route/history.png)

뒤로 버튼을 몇 번 클릭해 보면 현재 URL이 변경되고 기록이 업데이트되지만 동일한 템플릿이 계속 표시됩니다.

이는 상태가 변경되었을 때 - 즉, 다른 URL로 이동했을 때 - [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) 이벤트가 트리거된다는 것을 애플리케이션이 알지 못하기 때문입니다. 이를 사용하여 문제를 해결할 것입니다.

### 작업

브라우저 기록이 변경될 때 표시된 템플릿이 업데이트되도록 `updateRoute()`를 호출하는 새 함수를 추가합니다. 이를 `app.js` 파일 하단에 추가합니다:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> 참고: 여기서는 간결함을 위해 [화살표 함수](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 사용하여 `popstate` 이벤트 핸들러를 선언했지만, 일반 함수도 동일하게 작동합니다.

화살표 함수에 대한 리프레셔 영상입니다:

[![화살표 함수](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "화살표 함수")

> 🎥 위 이미지를 클릭하면 화살표 함수에 대한 영상을 볼 수 있습니다.

이제 브라우저의 뒤로 및 앞으로 버튼을 사용해 보고, 이번에는 표시된 라우트가 올바르게 업데이트되는지 확인하세요.

---

## 🚀 도전 과제

이 앱의 크레딧을 표시하는 세 번째 페이지를 위한 새 템플릿과 라우트를 추가하세요.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## 복습 및 자기 학습

라우팅은 웹 개발에서 놀랍도록 까다로운 부분 중 하나이며, 특히 웹이 페이지 새로고침 동작에서 단일 페이지 애플리케이션 새로고침으로 이동함에 따라 더욱 그렇습니다. [Azure Static Web App 서비스](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon)가 라우팅을 처리하는 방법에 대해 조금 읽어보세요. 해당 문서에서 설명된 일부 결정이 왜 필요한지 설명할 수 있나요?

## 과제

[라우팅 개선하기](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.