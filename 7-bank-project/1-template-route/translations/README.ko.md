# 은행 앱 제작하기 파트 1: 웹 앱의 HTML 템플릿과 라우터

## 강의 전 퀴즈

[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/41?loc=ko)

### 소개

브라우저에 JavaScript가 등장한 이후, 웹 사이트는 그 어느 순간보다 상호 작용하며 복잡해지고 있습니다. 웹 기술은 일반적으로 [web applications](https://en.wikipedia.org/wiki/Web_application)라고 불리는 브라우저로 직접 실행되는 완전한 기능의 애플리케이션을 만들 때 사용됩니다. 웹 앱은 매우 대화형이므로, 사용자는 작업되는 순간에 전체 페이지가 다시 불러오며 기다리는 것을 원치 않습니다. 원활한 사용자 경험을 제공하기 위해, JavaScript로 DOM을 사용하여 HTML을 직접 갱신합니다.

이번 강의에서는, 전체 HTML 페이지를 다시 불러오지 않으면서 출력하고 갱신할 여러 화면을 만들기 위해 HTML 템플릿을 사용할 것이므로, 은행 웹 앱을 만들기 위한 기초를 레이아웃합니다.

### 준비물

이 강의에서 만들 웹 앱을 테스트하려면 로컬 웹 서버가 필요합니다. 없는 경우에는, [Node.js](https://nodejs.org)를 설치하고 프로젝트 폴더에서 `npx lite-server` 명령을 수행할 수 있습니다. 로컬 웹 서버를 만들고 브라우저에서 앱을 엽니다.

### 준비

컴퓨터에서, `index.html` 파일이 있는 `bank`라는 폴더를 만듭니다. 이 HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code)에서 시작할 것 입니다.

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

웹 페이지에 여러 화면을 만드려는 경우에는, 하나의 솔루션은 출력하려는 모든 화면에 대해 각자 HTML 파일을 만드는 것입니다. 그러나, 이 솔루션에는 몇 가지 불편한 점이 있습니다:

- 화면 전환 시 전체 HTML을 다시 불러와야 하므로, 속도가 느릴 수 있습니다.
- 서로 다른 화면 간 데이터 공유가 어렵습니다.

또 다른 방법은 HTML 파일이 하나일 때, `<template>` 요소로 여러 [HTML templates](https://developer.mozilla.org/docs/Web/HTML/Element/template)을 정의하는 것입니다. 템플릿은 브라우저에 보이지 않는 재사용 가능한 HTML 블록이면서, JavaScript를 사용해서 런타임에 인스턴스화합니다.

### 작업

두 화면이 있는 은행 앱을 만들 것입니다: 로그인 페이지와 대시보드. 먼저, 앱의 다양한 화면을 인스턴스화할 때 사용할 placeholder 요소를 HTML 본문에 추가하겠습니다:

```html
<div id="app">Loading...</div>
```

나중에 JavaScript로 쉽게 찾도록 `id`를 제공합니다.

> Tip: 이 요소의 내용은 바뀌므로, 앱이 불러와지는 동안 보여지는 로딩 메시지 또는 인디케이터를 넣을 수 있습니다.

다음은, 로그인 페이지 HTML 템플릿 아래에 추가하겠습니다. 지금은 탐색하며 사용할 버튼이 포함된 제목과 섹션만 여기에 넣겠습니다.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <button>Login</button>
  </section>
</template>
```

그러고 대시보드 페이지에 대한 다른 HTML 템플릿을 추가합니다. 이 페이지에는 다른 섹션도 포함됩니다:

- 제목과 로그아웃 버튼이 있는 헤더
- 은행 계정의 현재 잔액
- 테이블에 표시된, 트랜잭션 목록

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <button>Logout</button>
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

> Tip: HTML 템플릿을 만들 때, 모양을 확인하려면, `<!-->`로 묶어 `<template>` 혹은 `</template>` 줄을 주석 처리할 수 있습니다.

✅ 템플릿에 `id` 속성을 사용하는 이유는 무엇일까요? 강의처럼 다른 것을 쓸 수 있나요?

## JavaScript로 템플릿 출력하기

브라우저에서 현재 HTML 파일을 시도하면, `Loading...`이 출력되는 것을 볼 수 있습니다. HTML 템플릿을 인스턴스화하고 출력하기 위해 JavaScript 코드를 추가했기 때문입니다.

템플릿 인스턴스화는 일반적으로 3 단계로 진행됩니다:

1. [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById)를 사용한 예시로, DOM에서 템플릿 요소 검색합니다.
2. [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)로, 템플릿 요소를 복제합니다.
3. [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)를 사용한 예시로, 보이는 요소 아래의 DOM에 붙입니다.

✅ DOM에 붙이기 전에 템플릿을 복제해야하는 이유는 무엇일까요? 이 단계를 넘기면 어떻게 될까요?

### 작업

프로젝트 폴더에 `app.js`라는 새 파일을 만들고 HTML의 `<head>` 섹션에서 해당 파일을 가져옵니다:

```html
<script src="app.js" defer></script>
```

이제 `app.js`에서, 새로운 함수인 `updateRoute`를 만듭니다: 

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

우리가 하는 일은 정확히 위에서 설명한 3단계입니다. id `templateId`로 템플릿을 인스턴스화하고, 복제된 콘텐츠를 앱 placeholder에 넣습니다. 템플릿의 전체 하위 트리를 복사하려면 `cloneNode(true)`로 사용해야 합니다.

이제 템플릿 중 하나를 사용하여 이 함수를 호출하고 결과를 봅니다.

```js
updateRoute('login');
```

✅ 이 `app.innerHTML = '';` 코드의 목적은 무엇인가요? 없다면 어떻게 될까요?

## 라우터 생성하기

웹 앱에 대해 이야기할 때, **URLs**을 보여주기 위해 특정 화면에 매핑하려는 의도를 *Routing*이라고 합니다. 여러 HTML 파일에, 웹 사이트에서 파일 경로가 URL에 반영되므로 자동으로 수행됩니다. 예를 들면, 프로젝트 폴더에 다음 파일이 있습니다:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

만약 상위에 `mywebsite`로 웹 서버를 생성하면, URL 맵핑은 이렇게 이루어집니다:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

그러나, 웹 앱이라면 모든 화면이 포함된 단일 HTML 파일을 사용하므로 이러한 기본 동작은 도와주지 못합니다. 이 맵을 수동으로 만들고 JavaScript로 출력되는 템플릿을 갱신해야 합니다.

### 작업

간단한 객체로 URL 경로와 템플릿 사이에서 [map](https://en.wikipedia.org/wiki/Associative_array)을 구현합니다. `app.js` 파일의 상단에 객체를 추가합니다.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

이제 `updateRoute` 함수를 약간 수정합니다. `templateId`를 인수로 직접 주는 대신, 먼저 현재 URL을 보고 찾은 다음, 맵을 사용하여 해당 템플릿 ID 값을 가져오려 합니다. [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname)으로 URL에서 경로 섹션만 가져올 수 있습니다.

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

여기에서 선언한 라우터를 해당 템플릿에 매핑했습니다. 브라우저에서 수동으로 URL을 변경하여 잘 작동하는지 볼 수 있습니다.

✅ URL에 알 수 없는 경로를 입력하면 어떤 일이 벌어지나요? 어떻게 해결할 수 있나요?

## 네비게이션 추가하기

앱의 다음 단계는 URL을 수동으로 안 바꾸고 페이지 사이를 이동할 수 있도록 추가하는 것입니다. 이는 두 가지를 의미합니다:

  1. 현재 URL로 갱신하기
  2. 새로운 URL를 기반으로 출력된 템플릿 갱신하기

두 번째 부분은 `updateRoute` 함수로 이미 처리했으므로, 현재 URL로 갱신하는 방법을 알아냅니다.

HTML 앵커 요소 [`<a>`](https://developer.mozilla.org/docs/Web/HTML/Element/a)를 사용하여 다른 URL에 대한 하이퍼링크를 만들 수 있지만, 여기에서 사용하면 브라우저가 HTML을 다시 불러오게 됩니다.

대신 URL을 업데이트 할 수 있는 JavaScript와 더 구체적으로 [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)를 사용해야합니다. HTML을 다시 불러오지 않고 검색 기록에 새로운 항목을 만듭니다.

### 작업

앱에서 탐색할 때 사용할 수 있는 새로운 함수를 만들어 보겠습니다:

```js
function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute();
}
```

이 메소드는 먼저 주어진 경로에 따라 현재 URL을 갱신한 다음에, 템플릿을 업데이트합니다. `window.location.origin` 속성은 URL 최상위를 반환하므로, 주어진 경로에서 전체 URL을 다시 구성할 수 있습니다.

이제 함수가 있으므로, 경로가 정의된 라우터와 일치하지 않는 경우에 발생할 문제를 해결할 수 있습니다. 일치하는 경로를 찾을 수 없는 경우에는 기존 경로 중 하나에 fallback로 추가하고자 `updateRoute` 함수를 수정합니다.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

만약 라우터를 찾지 못한다면, `login` 페이지로 리다이렉트됩니다.

HTML의 *Login*과 *Logout* 버튼에 바인딩을 추가하여 내비게이션 시스템을 완성해봅니다.

```html
<button onclick="navigate('/dashboard')">Login</button>
...
<button onclick="navigate('/login')">Logout</button>
```

[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 속성을 사용하여 `click` 이벤트를 JavaScript 코드로 바인딩합니다, 여기에서 `navigate()` 함수를 호출합니다.

이 버튼들을 클릭해보세요, 이제 앱의 여러 화면들을 이동할 수 있습니다.

✅ `history.pushState` 메소드는 HTML5 표준의 일부이며 [모든 모던 브라우저](https://caniuse.com/?search=pushState)에서 구현됩니다. 옛날 브라우저의 웹 앱을 제작하는 경우, 이 API 대신 사용할 수 있는 트릭이 있습니다: 경로 앞에 [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment)를 사용한다면 일반 앵커 탐색처럼 동작하면서 페이지를 다시 안 불러오는 라우팅을 구현할 수 있습니다, 페이지 내에 내부 링크를 만드는 것이 목적입니다.

## 브라우저의 뒤로가기와 앞으로가기 버튼 제어하기

`history.pushState`를 사용하면 브라우저의 탐색 기록에 새로운 항목이 생성됩니다. 브라우저의 *back button*을 누르고 있으면 다음처럼 내용이 표시되는지 볼 수 있습니다:

![Screenshot of navigation history](.././history.png)

뒤로가기 버튼을 몇 번 클릭하면, 현재 URL이 변경되며 히스토리가 갱신되지만 동일한 템플릿이 계속 출력되는 것을 볼 수 있습니다.

히스토리가 바뀔 때마다 `updateRoute()`를 호출해야 한다는 사실을 모르기 때문입니다. [`history.pushState` documentation](https://developer.mozilla.org/docs/Web/API/History/pushState)을 살펴보면, 상태가 바뀌는 지 확인할 수 있습니다 - 다른 URL로 이동했다고 의미합니다. - [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) 이벤트가 연결됩니다. 이 이슈를 해결하는 데 사용할 것입니다.

### 작업

브라우저 히스토리가 바뀔 때마다 출력된 템플릿을 갱신하도록 `updateRoute()`를 호출하는 새 함수를 붙입니다. `app.js` 파일 하단에서 작업합니다:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Note: 여기서는 간결함을 위해 [arrow function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)을 사용하여 `popstate` 이벤트 핸들러를 선언했지만, 일반적인 함수와 동일하게 작동합니다.

다음은 화살표 함수에 대한 복습 동영상입니다:

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Arrow Functions")

이제 브라우저의 뒤로가기와 앞으로가기 버튼을 사용해보세요, 그리고 이 순간마다 올바르게 갱신되어 출력되는 지에 대하여 확인합니다.

---

## 🚀 도전

이 앱의 크레딧을 보여주는 세 번째 페이지에 새로운 템플릿과 라우터를 추가합니다.

## 강의 후 퀴즈

[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/42?loc=ko)

## 리뷰 & 자기주도 학습

라우팅은 웹 개발의 놀랍고 까다로운 부분 중 하나입니다, 특히 웹의 페이지 새로고침 동작에서 단일 페이지 애플리케이션 페이지 새로고침으로 이동함에 따라 더욱 더 그렇습니다. [how the Azure Static Web App service](https://docs.microsoft.com/azure/static-web-apps/routes?WT.mc_id=academic-13441-cxa)의 라우터 제어에 대해 약간 봅니다. 그 문서에 기술된 몇 가지 결정이 필요한 이유를 설명할 수 있나요?

## 과제

[Improve the routing](../assignment.md)
