# JavaScript 기초: 메소드와 함수

![JavaScript Basics - Functions](/sketchnotes/webdev101-js-functions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/9?loc=ko)

코드 작성에 대해 생각할 때 항상 코드를 읽을 수 있도록 해야합니다. 직설적이지 않지만, 코드는 작성된 것보다 더 많이 읽힙니다. 개발자의 툴 박스에서 유지관리 가능한 코드를 보장하는 핵심 도구는 **함수**입니다.

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

## 함수

핵심으로, 함수는 요청 시 실행할 수 있는 코드 블록입니다. 동일한 작업을 여러 번 수행하는 시나리오에 적합합니다; 로직을 여러 위치에 복사하는 대신(특정 시기에 업데이트하기 어렵게 만들 수 있음), 한 위치에 로직을 집중하고, 작업이 필요할 때마다 호출할 수 있습니다. 다른 함수에서 함수를 호출할 수도 있습니다!.

함수의 이름을 지정하는 능력도 중요합니다. 사소할 수 있지만, 이름은 코드 문서화를 빠르게 해줍니다. 버튼의 레이블로 생각할 수도 있습니다. "타이머 취소"라는 버튼을 클릭하면, 시계가 중지된다는 것을 알 수 있습니다.

## 함수 만들고 호출하기

함수 구문은 다음과 같습니다:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

인사말 출력하는 함수를 만들고 싶다면, 다음과 같이 보일 수 있습니다:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

함수를 호출(또는 invoke)할 때마다, 함수 이름 뒤에 `()`를 사용합니다. 함수를 호출하기 전후에 정의할 수 있다는 사실에 주목할 가치가 있습니다; JavaScript 컴파일러가 찾을 것입니다.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** 이미 사용하고 있는 **메소드**라는 특별한 타입의 함수가 있습니다! 실제로, 데모에서 `console.log`를 사용할 때 보았습니다. 메소드가 함수와 다른 점은 메소드가 객체(`console`)에 연결되어있는 반면에, 함수는 free floating 상태라는 것입니다. 많은 개발자들이 같은 의미로 사용하는 걸 듣게 될 것입니다.

### 좋은 함수 예시

함수를 만들 때 알아야 할 몇 가지 좋은 사례가 있습니다

- 항상 그렇듯이, 설명이 포함된 이름을 사용해서 함수가 수행하는 작업을 알 수 있습니다
- **camelCasing** 를 사용하여 단어 결합
- 특정 작업에 맞춘 함수 유지

## 함수에 정보 전달하기

함수를 더 재사용하기 위해 종종 정보를 전달하고 싶을 것입니다. 아래의 `displayGreeting` 예시를 고려하면 **Hello, world!** 만 출력됩니다. 만들 수 있는 가장 유용한 함수는 아닙니다. 인사할 사람의 이름을 정하는 것 처럼 더 유연하게 만들고 싶다면, 매개 변수를 추가할 수 있습니다. 매개 변수(**인수**)는 함수에 전달되는 추가 정보입니다.

매개 변수는 괄호 안에 나열되며 쉼표로 구분됩니다.

```javascript
function name(param, param2, param3) {

}
```

`displayGreeting` 함수를 업데이트해서 이름을 받아 출력할 수 있습니다.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

함수를 호출하고 매개 변수를 전달하려면, 괄호 안에 지정합니다.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## 기본 값

더 많은 매개 변수를 추가하여 힘수를 유연하게 만들 수 있습니다. 그러나 모든 값을 지정하지 않으려면 어떻게 해야할까요? 인사 예시를 유지하면서 필요하면 이름을 남길 수 있지만 (인사말하는 사람을 알아야 합니다), 원하는대로 인사를 커스터마이징할 수 있습니다. 누군가 커스터마이징을 원하지 않는 경우에는 대신 기본값을 제공합니다. 매개 변수에 기본값을 제공하기 위해서는 변수에 대한 값을 지정하는 것과 같은 방식으로 설정합니다 - `parameterName = 'defaultValue'`. 전체 예시를 보십시오:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

함수를 호출할 때, `salutation`에 대한 값을 설정할 것인지 결정할 수 있습니다.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 반환 값

지금까지 만든 함수는 항상 [console](https://developer.mozilla.org/docs/Web/API/console)에 출력됩니다. 특히 다른 서비스를 호출할 함수를 만들 때도 이것이 찾고 있을 수 있습니다. 하지만 계산을 하고 값을 다른 곳에 다시 제공하고자 헬퍼 함수를 만들고 싶으면 어떻게 해야합니까?

**반환 값**을 사용하면 할 수 있습니다. 반환 값은 함수에 의해 반환되며, 문자열이나 숫자와 같은 리터럴 값을 저장할 수 있고 똑같은 변수에 저장할 수 있습니다.

함수가 무언가 반환하면 `return` 키워드가 사용됩니다. `return` 키워드는 다음과 같이 반환되는 항목의 값 또는 참조를 예상합니다:

```javascript
return myVariable;
```  

인사 메시지를 만들고 호출하는 곳에 값을 반환해주는 함수를 만들 수 있습니다.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

이 함수를 호출하면 값을 변수에 저장합니다. 변수를 정적 값(`const name = 'Christopher'`)으로 지정하는 것과 거의 동일합니다.

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 함수의 파라미터에서 함수

프로그래밍 경력을 쌓으면서, 함수를 매개 변수로 받는 함수를 보게 될 것 입니다. 이 깔끔한 트릭은 일반적으로 어떤 일이 발생되거나 완료되는 때를 알지 못하지만, 이에 반응하여 작업해야 한다는 것을 알고있을 때 사용됩니다.

예시로, 타이머를 시작하고 완료되면 코드를 실행하는 [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)을 고려해보세요. 실행하려는 코드를 먼저 알려줘야 합니다. 함수에 대한 완벽한 직업인 것 같습니다!

아래 코드를 실행하면, 3초 후에 **3 seconds has elapsed**는 메시지가 표시됩니다.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(3000, displayDone);
```

### 익명 함수

우리가 만든 것을 다시 보겠습니다. 한 번 사용할 이름으로 함수를 만들고 있습니다. 애플리케이션이 점점 복잡해지면서 한 번만 호출되는 함수를 많이 생성하는 것을 볼 수 있습니다. 이상적이지 않습니다. 결과적으로 항상 이름을 제공 할 필요가 없습니다!

함수를 매개 변수로 전달할 때 미리 하나를 생성하지 않고 대신 매개 변수의 일부로 만들 수 있습니다. 동일한 `function` 키워드를 사용하지만 대신 매개 변수로 작성합니다.

익명 함수를 사용하도록 위 코드를 다시 작성해 보겠습니다:

```javascript
setTimeout(3000, function() {
  console.log('3 seconds has elapsed');
});
```

새 코드를 실행해도 동일한 결과를 얻을 수 있습니다. 함수를 만들었지만, 이름을 지정할 필요가 없어졌습니다!

### 화살표 함수

많은 프로그래밍 언어(JavaScript 등)에서 흔히 볼 수 있는 한 가지 단축키는 **화살표** 또는 **fat 화살표** 함수를 사용하는 능력입니다. 화살표처럼 보이는 `=>`의 특수 인디케이터를 사용합니다. `=>` 를 사용하면, `function` 키워드를 건너 뛸 수 있습니다.

화살표 함수를 사용하기 위해 코드를 다시 작성해봅니다:

```javascript
setTimeout(3000, () => {
  console.log('3 seconds has elapsed');
});
```

### 각 strategy를 사용하는 경우

이제 매개 변수로 함수에 전달하는 세 가지 방법이 있으며 각자 언제 사용하는 지 궁금할 것입니다. 함수를 두번 이상 사용한다는 것을 알고 있다면 정상적으로 만들게 됩니다. 한 위치에만 사용하는 경우, 일반적으로 익명 함수를 사용하는 것이 가장 좋습니다. 화살표 함수를 사용하거나 더 전통적인 `함수` 구문을 사용하거나 안하거나 대부분의 요즘 개발자들이 `=>`를 선호한다는 것을 알게 될 것입니다.

---

## 🚀 도전

함수와 메소드의 차이점을 한 문장으로 표현할 수 있나요? 시도해보세요!

## 강의 후 퀴즈
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/10?loc=ko)

## 리뷰 & 자기주도 학습

화살표 함수는 코드 베이스에서 점점 많이 사용되고 있으므로, [읽어 볼 가치](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)가 있습니다. 함수 작성을 연습한 다음에 syntax로 다시 작성하십시오.

## 과제

[Fun with Functions](../assignment.md)