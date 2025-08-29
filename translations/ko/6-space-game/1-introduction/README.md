<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T15:40:01+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기 1부: 소개

![video](../../../../6-space-game/images/pewpew.gif)

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/29)

### 게임 개발에서의 상속과 구성

이전 강의에서는 프로젝트의 범위가 매우 작았기 때문에 앱의 설계 구조에 대해 크게 고민할 필요가 없었습니다. 하지만 애플리케이션의 크기와 범위가 커질수록 설계 구조에 대한 결정이 더 중요해집니다. JavaScript에서 더 큰 애플리케이션을 만드는 데는 두 가지 주요 접근 방식이 있습니다: *구성(Composition)* 또는 *상속(Inheritance)*. 두 가지 모두 장단점이 있지만, 게임의 맥락에서 이를 설명해 보겠습니다.

✅ 가장 유명한 프로그래밍 책 중 하나는 [디자인 패턴](https://en.wikipedia.org/wiki/Design_Patterns)에 관한 것입니다.

게임에서는 화면에 존재하는 `게임 객체`가 있습니다. 이는 데카르트 좌표계에서 `x`와 `y` 좌표를 가지는 위치를 의미합니다. 게임을 개발하다 보면 모든 게임 객체가 공통적으로 가지는 표준 속성이 있다는 것을 알게 됩니다. 이는 모든 게임에서 공통적으로 나타나는 요소들입니다:

- **위치 기반** 대부분의 게임 요소는 위치 기반입니다. 즉, `x`와 `y`라는 위치를 가집니다.
- **이동 가능** 새로운 위치로 이동할 수 있는 객체들입니다. 일반적으로 영웅, 몬스터 또는 NPC(비플레이어 캐릭터)가 이에 해당하며, 예를 들어 나무와 같은 정적인 객체는 포함되지 않습니다.
- **자체 소멸** 일정 기간 동안만 존재하고 이후 삭제를 위해 설정되는 객체들입니다. 보통 `dead` 또는 `destroyed`라는 불리언 값으로 게임 엔진에 더 이상 렌더링하지 않아도 된다는 신호를 보냅니다.
- **쿨다운** '쿨다운'은 단명하는 객체들 사이에서 일반적인 속성입니다. 전형적인 예로는 몇 밀리초 동안만 보이는 텍스트나 폭발 같은 그래픽 효과가 있습니다.

✅ 팩맨 같은 게임을 생각해 보세요. 위에서 언급한 네 가지 객체 유형을 이 게임에서 식별할 수 있나요?

### 행동 표현하기

위에서 설명한 모든 것은 게임 객체가 가질 수 있는 행동입니다. 그렇다면 이를 어떻게 코드로 표현할까요? 이러한 행동은 클래스 또는 객체와 연관된 메서드로 표현할 수 있습니다.

**클래스**

`클래스`를 `상속`과 함께 사용하여 특정 행동을 클래스에 추가하는 방식입니다.

✅ 상속은 이해해야 할 중요한 개념입니다. [MDN의 상속에 관한 글](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 읽어보세요.

코드로 표현하면, 게임 객체는 일반적으로 다음과 같이 보일 수 있습니다:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ 팩맨의 영웅(예: 잉키, 핑키, 블링키)을 JavaScript로 어떻게 작성할지 몇 분 동안 생각해 보세요.

**구성**

객체 상속을 처리하는 또 다른 방법은 *구성(Composition)*을 사용하는 것입니다. 이 경우 객체는 다음과 같이 행동을 표현합니다:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**어떤 패턴을 사용해야 할까요?**

어떤 패턴을 선택할지는 여러분에게 달려 있습니다. JavaScript는 이 두 가지 패러다임을 모두 지원합니다.

--

게임 개발에서 일반적으로 사용되는 또 다른 패턴은 게임의 사용자 경험과 성능을 처리하는 문제를 다룹니다.

## Pub/Sub 패턴

✅ Pub/Sub는 '발행-구독'을 의미합니다.

이 패턴은 애플리케이션의 다양한 부분이 서로를 알지 않아야 한다는 아이디어를 다룹니다. 왜 그럴까요? 애플리케이션의 각 부분이 분리되어 있으면 전체적으로 무슨 일이 일어나고 있는지 더 쉽게 파악할 수 있습니다. 또한, 필요할 경우 동작을 갑자기 변경하기도 더 쉬워집니다. 이를 어떻게 구현할까요? 다음과 같은 개념을 설정함으로써 가능합니다:

- **메시지**: 메시지는 일반적으로 텍스트 문자열과 선택적 페이로드(메시지의 내용을 명확히 하는 데이터 조각)로 구성됩니다. 게임에서 일반적인 메시지는 `KEY_PRESSED_ENTER`일 수 있습니다.
- **발행자**: 이 요소는 메시지를 *발행*하고 모든 구독자에게 보냅니다.
- **구독자**: 이 요소는 특정 메시지를 *청취*하고, 이 메시지를 수신한 결과로 작업을 수행합니다. 예를 들어 레이저를 발사하는 것과 같은 작업입니다.

이 패턴의 구현은 크기가 매우 작지만 매우 강력한 패턴입니다. 다음은 이를 구현하는 방법입니다:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

위 코드를 사용하여 매우 간단한 구현을 만들 수 있습니다:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

위에서는 키보드 이벤트 `ArrowLeft`를 연결하고 `HERO_MOVE_LEFT` 메시지를 보냅니다. 이 메시지를 듣고 결과적으로 `hero`를 이동시킵니다. 이 패턴의 강점은 이벤트 리스너와 영웅이 서로를 알지 못한다는 점입니다. `ArrowLeft`를 `A` 키로 다시 매핑할 수 있습니다. 또한, 이벤트Emitter의 `on` 함수에 몇 가지 수정을 가하여 `ArrowLeft`에서 완전히 다른 작업을 수행할 수도 있습니다:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

게임이 커지면서 더 복잡해지더라도 이 패턴은 복잡성이 동일하게 유지되며 코드가 깔끔하게 유지됩니다. 이 패턴을 채택하는 것을 강력히 추천합니다.

---

## 🚀 도전 과제

Pub/Sub 패턴이 게임을 어떻게 향상시킬 수 있을지 생각해 보세요. 어떤 부분이 이벤트를 발행해야 하며, 게임은 이를 어떻게 반응해야 할까요? 새로운 게임을 구상하고 그 구성 요소들이 어떻게 동작할지 창의적으로 생각해볼 기회입니다.

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/30)

## 복습 및 자기 학습

Pub/Sub에 대해 더 알아보려면 [관련 자료 읽기](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)를 참고하세요.

## 과제

[게임 목업 만들기](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확한 내용이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.