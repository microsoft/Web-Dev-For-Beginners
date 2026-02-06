# Fun with Functions

## Instructions

이번 과제에서는 JavaScript 함수, 매개변수, 기본값, 반환문에 대해 배운 개념들을 강화하기 위해 다양한 종류의 함수를 만들어보는 연습을 합니다.

`functions-practice.js`라는 JavaScript 파일을 만들어 다음 함수를 구현하세요:

### Part 1: Basic Functions
1. **`sayHello`라는 이름의 함수를 만드세요**. 이 함수는 매개변수를 받지 않고 단순히 콘솔에 "Hello!"를 출력합니다.

2. **`introduceYourself`라는 이름의 함수를 만드세요**. 이 함수는 `name` 매개변수를 받아서 "Hi, my name is [name]" 같은 메시지를 콘솔에 출력합니다.

### Part 2: Functions with Default Parameters
3. **`greetPerson`라는 이름의 함수를 만드세요**. 이 함수는 두 개의 매개변수를 받습니다: `name` (필수)와 `greeting` (선택적, 기본값은 "Hello"). 함수는 "[greeting], [name]!" 같은 메시지를 콘솔에 출력해야 합니다.

### Part 3: Functions that Return Values
4. **`addNumbers`라는 이름의 함수를 만드세요**. 이 함수는 두 개의 매개변수 (`num1`과 `num2`)를 받아 이들의 합을 반환합니다.

5. **`createFullName`라는 이름의 함수를 만드세요**. 이 함수는 `firstName`과 `lastName` 매개변수를 받아서 전체 이름을 하나의 문자열로 반환합니다.

### Part 4: Mix It All Together
6. **`calculateTip`라는 이름의 함수를 만드세요**. 이 함수는 두 개의 매개변수를 받습니다: `billAmount` (필수)와 `tipPercentage` (선택적, 기본값은 15). 함수는 팁 금액을 계산하여 반환해야 합니다.

### Part 5: Test Your Functions
각 함수를 테스트하기 위해 함수 호출을 추가하고 `console.log()`를 사용하여 결과를 표시하세요.

**예시 테스트 호출:**
```javascript
// 여기에서 함수를 테스트하세요
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubric

| Criteria | Exemplary | Adequate | Needs Improvement |
| -------- | --------- | -------- | ----------------- |
| **Function Creation** | 모든 6개 함수가 올바른 문법과 이름 규칙으로 정확히 구현됨 | 4-5개 함수가 약간의 문법 오류와 함께 올바르게 구현됨 | 3개 이하의 함수만 구현되었거나 심각한 문법 오류 존재 |
| **Parameters & Default Values** | 요구되는 매개변수와 선택 매개변수, 기본값을 정확히 사용함 | 매개변수는 올바르게 사용하지만 기본값에는 약간의 문제 있음 | 매개변수 구현이 잘못되었거나 누락됨 |
| **Return Values** | 값을 반환해야 하는 함수는 정확히 반환하며, 반환하지 않아야 하는 함수는 동작만 수행함 | 대부분의 반환값이 정확하지만 약간의 문제 있음 | 반환문 관련 심각한 문제 존재 |
| **Code Quality** | 깔끔하고 잘 조직된 코드, 의미 있는 변수명과 적절한 들여쓰기 사용 | 코드가 동작하지만 더 깔끔하거나 조직적일 수 있음 | 읽기 어려운 코드 또는 잘못 구조화된 코드 |
| **Testing** | 모든 함수가 적절한 함수 호출로 테스트되어 결과가 명확하게 표시됨 | 대부분의 함수가 적절히 테스트됨 | 함수 테스트가 제한적이거나 부정확함 |

## Bonus Challenges (Optional)

추가 도전을 원한다면:

1. **함수 중 하나에 대해 화살표 함수 버전을 만드세요**
2. **다른 함수를 매개변수로 받는 함수를 만드세요** (예: 강의의 `setTimeout` 예제처럼)
3. **입력 검증을 추가하여 함수가 잘못된 입력을 우아하게 처리하도록 하세요**

---

> 💡 **팁**: 브라우저 개발자 콘솔(F12)을 열어 `console.log()` 문 출력 결과를 확인하는 것을 잊지 마세요!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있으나, 자동 번역은 오류나 부정확한 내용이 포함될 수 있음을 유의하시기 바랍니다. 원문 문서가 공식적인 자료로 간주되어야 합니다. 중요한 정보의 경우 전문 인간 번역을 권장합니다. 본 번역 사용으로 인한 어떠한 오해나 오해에 대해서도 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->