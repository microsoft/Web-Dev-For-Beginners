# 은행 앱 제작하기 파트 4: 상태 관리의 컨셉

## 강의 전 퀴즈

[Pre-lecture quiz](../.github/pre-lecture-quiz.md)

### 소개

웹 애플리케이션이 커지면서, 모든 데이터 흐름을 추적하는 것은 어렵습니다. 어떤 코드가 데이터를 가져오고, 어떤 페이지가 데이터를 사용하고, 언제 어디서 갱신해야 하는지... 관리하기 어려운 복잡한 코드로 끝날 수 있습니다. 이는 앱의 여러 페이지가 서로 데이터를 공유하는 경우에 특히 더 그렇습니다, 예시로 사용자 데이터. *상태 관리*의 컨셉은 항상 모든 종류의 프로그램에 존재했지만, 웹 앱이 계속 복잡해지면서 이제는 개발하면서 고려해야 할 키 포인트가 되었습니다.

이 최종 부분에서는, 상태 관리하는 방법을 다시 생각해보며, 언제든 브라우저 새로고침을 지원하고, 사용자 세션에서 데이터를 유지하기 위해서 작성한 앱을 살펴 보겠습니다.

### 준비물

이 강의의 웹 앱 [data fetching](../../3-data/translations/README.ko.md) 파트를 완료해둬야 합니다. [Node.js](https://nodejs.org)와 [run the server API](../../api/README.md)를 로컬에 설치해야 계정 정보를 관리할 수 있습니다.

터미널에서 다음 명령을 수행하여 서버가 잘 실행되고 있는지 테스트할 수 있습니다:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## 상태 관리에 대하여 다시 생각하기

[이전 강의](../../3-data/translations/README.ko.md)에서는, 현재 로그인한 사용자의 은행 데이터를 포함하는 전역 `account` 변수를 사용하여 앱에 기초 상태 개념을 도입했습니다. 그러나, 현재 구현에는 조금 취약점이 있습니다. 대시보드에서 페이지를 새로 고쳐보기 바랍니다. 무슨 일이 일어나고 있나요?

현재 코드에는 3가지 이슈가 있습니다:

- 브라우저를 새로 고치면 로그인 페이지로 돌아가기 때문에, 상태가 유지되지 않습니다.
- 상태를 바꾸는 여러 함수들이 있습니다. 앱이 커지면서, 변경점을 추적하기 어렵고 갱신한 것을 잊어버리기 쉽습니다.
- 상태가 정리되지 않았습니다, *로그아웃*을 클릭하면 로그인 페이지에 있어도 계정 데이터가 그대로 유지됩니다.

이런 이슈를 하나씩 해결하기 위해 코드를 갱신할 수는 있지만, 코드 중복이 더 많이 발생되고 앱이 더 복잡해져서 유지 관리가 어려워집니다. 또는 몇 분 동안 잠시 멈춰서 다시 기획할 수도 있습니다.

> 여기서 우리가 실제로 해결할 문제는 무엇인가요?

[State management](https://en.wikipedia.org/wiki/State_management)는 다음 2가지 특정한 문제를 해결하기 위해 좋은 접근 방식을 찾습니다:

- 이해하기 쉽게 앱의 데이터 흐름을 유지하는 방법은 무엇인가요?
- 상태 데이터를 사용자 인터페이스와 항상 동기화하는 방법은 있나요 (혹은 그 반대로)?

이런 문제를 해결한 후에는 다른 이슈가 이미 고쳐졌거나 더 쉽게 고칠 수 있습니다. 이러한 문제를 해결하기 위한 여러 가능한 방식들이 있지만, **데이터를 중앙 집중화하고 변경하는 방법**으로 구성된 공통 솔루션을 사용합니다. 데이터 흐름은 다음과 같습니다:

![Schema showing the data flows between the HTML, user actions and state](.././images/data-flow.png)

> 데이터와 뷰 갱신을 자동으로 연결하는 부분은, [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming)의 고급 컨셉과 연결되었으므로 여기서 다루지는 않습니다. 깊게 분석한다면 좋게 팔로우 업할 주제입니다.

✅ 상태 관리에 대한 접근 방식이 다른 수 많은 라이브러리가 있으며, [Redux](https://redux.js.org)는 인기있는 옵션입니다. 큰 웹 앱에서 마주할 수 있는 잠재적 이슈와 해결 방식을 알 수 있으므로 사용된 컨셉과 패턴을 살펴보세요.

### 작업

조금 리팩토링을 해보면서 시작해봅니다. `account` 선언을 바꿉니다:

```js
let account = null;
```

With:

```js
let state = {
  account: null
};
```

이 아이디어는 모든 앱 데이터를 단일 상태 개체에서 *중앙에 모으는* 것 입니다. 현재 상태에서는 `account`만 가지고 있으므로 많이 변하지 않지만, 발전을 위한 길을 닦아둡니다.

또한 그것을 사용하여 함수를 갱신해야 합니다. `register()`와 `login()` 함수에서, `account = ...`를 `state.account = ...`로 바꿉니다.

`updateDashboard()` 함수 상단에, 이 줄을 추가합니다:

```js
const account = state.account;
```

이 리팩토링만으로는 많은 개선이 이루어지지 않지만, 아이디어는 다음 변경점의 토대를 마련해줍니다.

## 데이터 변경 추적하기

데이터로 저장할 `state` 객체를 두었으므로, 다음 단계는 갱신 작업을 중앙 집중화하는 것입니다. 목표는 모든 변경점과 발생 시점을 쉽게 ​​추적하는 것입니다.

`state` 객체가 변경되지 않으려면, [*immutable*](https://en.wikipedia.org/wiki/Immutable_object)한 것으로 간주하는 것이 좋습니다. 즉, 전혀 수정할 수 없다는 점을 의미합니다. 또한 변경하려는 경우에는 새로운 상태 객체를 만들어야 된다는 점을 의미합니다. 이렇게 하면, 잠재적으로 원하지 않는 [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science))에 보호하도록 만들고, undo/redo를 구현하는 것 처럼 앱의 새로운 기능에 대한 가능성을 열어 디버깅을 더 쉽게 만듭니다. 예를 들자면, 상태에 대한 모든 변경점을 남기고 유지하여 버그의 원인을 파악할 수 있습니다.

JavaScript에서, [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)를 사용하여 변경할 수 없는 버전의 객체를 만들 수 있습니다. 변경 불가능한 객체를 바꾸려고 하면 예외가 발생합니다.

✅ *shallow*와 *deep* 불변 객체의 차이점을 알고 계시나요? [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze)에서 읽을 수 있습니다.

### 작업

새로운 `updateState()` 함수를 만듭니다:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

이 함수에서는, 새로운 상태 객체를 만들고 [*spread (`...`) operator*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)로 이전 상태의 데이터를 복사합니다. 그러고  할당을 위해 [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]`를 사용하여 상태 객체의 특정한 속성을 새로운 데이터로 다시 정의합니다. 최종적으로, 변경되는 것을 막기 위해 `Object.freeze()`를 사용하여 객체를 잠급니다. 지금 상태에는 `account` 속성만 저장되어 있지만, 이 접근 방식으로 상태에 필요한 순간마다 많은 속성들을 추가할 수 있습니다.

또한 초기 상태가 동결되도록 `state` 초기화 작업도 갱신합니다:

```js
let state = Object.freeze({
  account: null
});
```

그런 다음, `state.account = result;` 할당을 이 것으로 대체하여 `register` 함수를 갱신합니다:

```js
updateState('account', result);
```

`login` 함수에서도 동일하게 진행하고, `state.account = data;`도 이 것으로 바꿉니다:

```js
updateState('account', data);
```

이제 사용자가 *Logout*을 클릭 할 때 계정 데이터가 지워지지 않는 이슈를 해결할 수 있습니다.

새로운 함수 `logout()`을 만듭니다:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` 에서, 리다이렉션하는 `return navigate('/login');`을 `return logout()`으로 바꿉니다;

새로운 계정으로 가입을 시도하면, 로그아웃하고 다시 로그인하여 모두 잘 작동하는지 확인합니다.

> Tip: `updateState()` 하단에 `console.log(state)`를 추가하고 브라우저의 개발 도구에서 콘솔을 열면 모든 상태 변경점을 볼 수 있습니다.

## 상태 유지하기

대부분 웹 앱이 잘 작동하려면 데이터를 유지할 필요가 있습니다. 모든 중요한 데이터는 일반적으로 데이터베이스에 저장되고 우리 케이스에는 사용자 계정 데이터처럼, 서버 API를 통해 접근됩니다. 그러나 때로는, 더 좋은 사용자 경험이나 로딩 퍼포먼스를 개선하기 위해서, 브라우저에서 실행중인 클라이언트 앱에 일부 데이터를 유지하는 것도 흥미롭습니다.

브라우저에서 데이터를 유지하려면, 스스로에게 몇 중요한 질문을 해야합니다:

- *민감한 데이터인가요?* 사용자 암호와 같은, 민감한 데이터는 클라이언트에 저장하지 않아야 합니다.
- *데이터를 얼마나 오래 보관해야 하나요?* 현재 세션에서만 데이터에 접근하거나 계속 저장할 계획인가요?

달성하려는 목표에 따라, 웹 앱 안에서 정보를 저장하는 방법에는 여러 가지가 있습니다. 예를 들면, URL을 사용하여 검색 쿼리를 저장하고, 사용자끼리 공유할 수 있습니다. [authentication](https://en.wikipedia.org/wiki/Authentication) 정보처럼, 데이터를 서버와 공유해야하는 경우에도 [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)를 사용할 수 있습니다.

다른 옵션으로는 데이터 저장을 위해 여러 브라우저 API 중 하나를 사용하는 것입니다. 그 중 2가지가 특히 흥미롭습니다:

- [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)는 다른 세션에서 현재 웹 사이트에 대한 특정 데이터를 유지할 수 있습니다. 저장된 데이터는 만료되지 않습니다.
- [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage): 이는 세션이 끝날 때(브라우저가 닫힐 때)에 저장된 데이터가 지워진다는 점을 제외하면 `localStorage`와 동일하게 작동합니다.

이 두 API는 모두 [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)만 저장할 수 있습니다. 복잡한 객체를 저장하려면, [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)를 사용하여 [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) 포맷으로 직렬화해야 합니다.

✅ 서버에서 동작하지 않는 웹 앱을 만드려면, [`IndexedDB` API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)로 클라이언트에 데이터베이스를 만들 수도 있습니다. 이는 고급 사용 케이스이거나, 사용하기 복잡한 많은 양의 데이터를 저장해야 할 때에 사용하도록 되어있습니다.

### 작업

*Logout* 버튼을 명시적으로 클릭할 때까지 로그인 상태가 유지되기를 원하므로, `localStorage`로 계정 데이터를 저장합니다. 먼저, 데이터를 저장하는 데 사용할 키를 정의하겠습니다.

```js
const storageKey = 'savedAccount';
```

그러고 `updateState()` 함수의 하단에 이 줄을 추가합니다:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

이를 통해, 이전의 모든 상태를 갱신하는 작업이 가운데로 모임에 따라 사용자 계정 데이터가 유지되고 항상 최신-상태를 유지합니다. 이것으로 이전 모든 리팩터링 작업의 혜택을 받기 시작했습니다 🙂.

더 많은 초기화 코드를 가지게 될 예정이므로 새로운 `init` 함수를 만드는 것이 좋습니다, 여기에는 `app.js`의 하단에 이전 코드가 포함됩니다:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

여기에서 저장된 데이터를 검색하고, 그에 따라서 상태를 갱신합니다. 페이지를 갱신하다가 상태에 의존하는 코드가 있을 수 있으므로, 라우터를 갱신하기 *전에* 하는 것이 중요합니다.

이제 계정 데이터를 유지하고 있으므로, *대시보드* 페이지를 애플리케이션 기본 페이지로 만들 수도 있습니다. 데이터가 없다면, 대시보드는 언제나 *로그인* 페이지로 리다이렉팅합니다. `updateRoute ()`에서, `return navigate('/login');`을 `return navigate('dashboard');`로 바꿉니다.

이제 앱에 로그인하고 페이지를 새로 고쳐보면, 대시보드에 남아있어야 합니다. 이 업데이트로 모든 초기 이슈를 처리했습니다...

## 데이터 새로 고치기

...그러나 새로운 것을 만들 수도 있습니다. 웁스!

`test` 계정을 사용하여 대시보드로 이동하면, 터미널에서 이 명령을 실행하여 새로운 트랜잭션을 만듭니다:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

지금 브라우저에서 대시보드 페이지를 새로 고쳐봅니다. 어떤 일이 일어났나요? 새로운 트랜잭션이 보이나요?

상태는 `localStorage` 덕분에 무한으로 유지하지만, 앱에서 로그아웃하고 다시 로그인할 때까지 갱신하지 않는다는 점을 의미합니다!

해결할 수 있는 한 가지 전략은 대시보드를 불러올 때마다 계정 데이터를 다시 불러와서, 데이터가 오래되는 현상을 방지하는 것 입니다.

### 작업

새로운 함수 `updateAccountData`를 만듭니다:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

이 메소드는 현재 로그인되어 있는지 본 다음에 서버에서 계정 데이터를 다시 불러옵니다.

`refresh`라고 이름을 지은 또 다른 함수를 만듭니다:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

이는 계정 데이터를 갱신하고나서, 대시보드 페이지의 HTML도 갱신하게 됩니다. 대시보드 라우터를 불러올 때마다 호출해야 합니다. 다음으로 라우터 정의를 갱신합니다:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

지금 대시보드를 다시 불러옵니다, 갱신된 계정 데이터를 볼 수 있어야 합니다.

---

## 🚀 도전

이제 대시보드를 불러올 때마다 계정 데이터가 다시 불러와지는데, 여전히 *모든 계정* 데이터를 유지해야 된다고 생각하나요?

앱이 동작하는 데 꼭 필요한 것만 있도록 `localStorage` 에 저장하고 불러온 항목을 함께 바꿔봅니다.

## 강의 후 퀴즈

[Post-lecture quiz](../.github/post-lecture-quiz.md)

## 과제

[Implement "Add transaction" dialog](../assignment.md)

다음은 과제를 완료한 뒤의 예시 결과입니다:

![Screenshot showing an example "Add transaction" dialog](.././images/dialog.png)
