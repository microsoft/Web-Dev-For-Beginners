# Space 게임 제작하기 파트 1: 소개

![video](../../images/pewpew.gif)

## 강의 전 퀴즈

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29?loc=ko)

### 게임 개발의 상속과 구성

이전 강의에서는, 프로젝트의 범위가 매우 작았으므로, 만든 앱의 디자인 아키텍처에 대해 걱정할 필요가 없었습니다. 그러나, 애플리케이션의 크기와 범위가 커지면, 아키텍처 결정이 더 힘듭니다. JavaScript에서 더 큰 응용 프로그램을 만드는 데는 두 가지 주요 방식이 있습니다: *composition* 또는 *inheritance*. 둘 다 장점과 단점이 존재하지만 게임의 맥락에서 설명할 것 입니다.

✅ 가장 유명한 프로그래밍 책 중에는 [design patterns](https://en.wikipedia.org/wiki/Design_Patterns)과 관련이 있습니다.

게임에서는 화면에 존재하는 객체인 `game objects`가 있습니다. `x`와 `y` 좌표를 갖는 것이 특징인, 데카르트 좌표계에 있음을 의미합니다. 게임을 개발할 때 만드는, 모든 게임 객체를 가지고 있는 게임에는 공통적인 표준 속성이 있습니다:

- **location-based** 전부는 아니지만, 대부분의 게임 요소는 위치 기반입니다. `x`와 `y`, 위치를 가지고 있음을 의미합니다.
- **movable** 새 위치로 이동할 수 있는 객체입니다. 이는 일반적으로 영웅, 몬스터 혹은 NPC(non player character)이지만, 예를 들어, 나무와 같은 정적 객체는 아닙니다.
- **self-destructing** 이런 객체는 삭제 작업을 위해 설정되기 전 일정한 시간에만 존재합니다. 일반적으로 이 객체가 더 이상 렌더링하지 않도록 게임 엔진에 알리기 위해서는 `dead` 또는 `destroyed` 논리 자료형으로 표시됩니다.
- **cool-down** 'Cool-down'은 짧은-수명 객체의 일반적인 속성입니다. 일반적인 예시는 몇 milli 초 동안만 보이는 폭발과 같은 텍스트 또는 그래픽 이펙트입니다.

✅ Pac-Man과 같은 게임을 생각해보세요. 이 게임에서 위 나열된 4가지 객체 타입을 구별할 수 있나요?

### 행동 표현

설명한 모든 것은 게임 객체가 가질 수 있는 동작입니다. 그럼 어떻게 인코딩 될까요? 이 동작을 클래스 혹은 객체와 관련된 메소드로 나타낼 수 있습니다.

**Classes**

아이디어로는 클래스에 특정 동작을 추가하기 위해 `inheritance`과 함께 `classes`를 사용하는 것입니다.

✅ 상속은 이해해야 할 중요한 컨셉입니다. [MDN's article about inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)로 더 배워보세요.

코드를 통해 표현되는, 게임 객체는 일반적으로 다음과 같습니다:

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

✅ 잠시 시간을 내어 Pac-Man 영웅 (예를 들어, Inky, Pinky 혹은 Blinky)과 JavaScript로 작성되는 방법을 다시 구상하십시오.

**Composition**

객체 상속을 처리하는 다른 방법으로는 *Composition* 을 사용하는 것입니다. 그러면, 객체는 다음과 같이 동작을 표현합니다:

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

**어떤 패턴을 사용해야 하나요?**

어떤 패턴을 선택하는 지는 여러분에게 달려 있습니다. JavaScript는 이러한 패러다임을 모두 지원합니다.

--

게임 개발에서 흔히 볼 수 있는 또 다른 패턴으로는 게임의 사용자 경험과 성능 문제를 다룹니다.

## Pub/sub 패턴

✅ Pub/Sub은 'publish-subscribe'를 의미합니다

이 패턴은 애플리케이션에서 각자 다른 부분이 서로 알고 있으면 안된다는 아이디어를 다룹니다. 왜 그럴까요? 여러 부분이 분리 되어있다면 보통 무슨 일이 일어나는지 쉽게 볼 수 있습니다. 필요한 경우에는 바로 동작을 변경하기도 더 쉽습니다. 어떻게 해야 할까요? 몇 가지 컨셉을 정하고 지킵시다.

- **message**: 메시지는 일반적으로 선택적 payload (명확한 메시지 내용 데이터 조각)와 함께 제공되는 텍스트 문자열입니다. 게임의 일반적인 메시지는 `KEY_PRESSED_ENTER` 일 수 있습니다.
- **publisher**: 이 요소는 메시지를 *publishes*하고 모든 구독자에게 보냅니다.
- **subscriber**: 이 요소는 특정 메시지를 *listens* 하고 메시지를 수신한 결과로 레이저 발사와 같은 일부 작업을 수행합니다.

implementation은 크기가 매우 작지만 매우 강한 패턴입니다. 구현 방법은 다음과 같습니다:

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

위의 코드를 사용하기 위해서 매우 작은 implementation을 만들 수 있습니다:

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

위에서 우리는 키보드 이벤트 `ArrowLeft`를 연결하고, `HERO_MOVE_LEFT` 메시지를 보냅니다. 우리는 그 메시지를 듣고 최종적으로 `hero`을 움직입니다. 이 패턴의 강점은 이벤트 리스너와 영웅이 서로 알지 못한다는 점입니다. `ArrowLeft`를 `A`키로 다시 매핑할 수도 있습니다. 추가적으로 eventEmitter의 `on` 함수를 조금 수정하여 `ArrowLeft`로 완전히 다른 작업을 할 수 있습니다:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

게임의 몸집이 커질 때 더 복잡해진다면, 이 패턴은 복잡성을 동일하면서 코드도 깨끗하게 유지합니다. 이 패턴을 채택하는 것은 정말 추천드립니다.

---

## 🚀 도전

pub-sub 패턴이 어떻게 게임을 발전시킬 수 있는지 생각해보세요. 어떤 부분이 이벤트를 어떻게 발생하고, 반응해야 하나요? 이제는 창의력을 발휘하고, 새로운 게임과 그 부분에 대해 어떻게 작동하는지 생각해볼 수 있는 기회입니다.

## 강의 후 퀴즈

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30?loc=ko)

## 리뷰 & 자기주도 학습

[reading about it](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-77807-sagibbon)으로 Pub/Sub에 대해 조금 더 배워봅시다.

## 과제

[Mock up a game](../assignment.md)
