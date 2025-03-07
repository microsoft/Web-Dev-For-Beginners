# 브라우저 확장 프로젝트 파트 2: 로컬 저장소를 사용한, API 호출

## 강의 전 퀴즈

[Pre-lecture quiz][Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25?loc=ko)

### 소개

이 강의에서는, 브라우저 확장의 폼을 제출하여 API를 호출하고 브라우저 확장에 결과를 출력합니다. 또한, 나중에 참조하고 사용하도록 브라우저의 로컬 저장소에 데이터를 저장하는 방법에 대해 알아봅니다.

✅ 적절한 파일 번호가 매겨진 세그먼트를 따라서 코드를 둘 위치를 알아봅니다.

### 확장에서 조작할 요소를 설정합니다:

지금까지 HTML 폼과 브라우저 확장에 대한 결과 `<div>`를 작성했습니다. 이제부터, `/src/index.js` 파일에서 작업하고 확장을 조금씩 빌드해야 합니다. 프로젝트 설정 및 빌드 프로세스에 대해서는 [이전 강의](../../1-about-browsers/translations/README.ko.md)를 참조하세요.

`index.js` 파일에서 작업하면서, 다양한 필드에 값을 저장할 `const` 변수를 만드는 것으로 시작합니다:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

모든 필드는 이전 강의에서 HTML을 설정한 것처럼 CSS 클래스에서 참조됩니다.

### 리스너 추가하기

다음으로, 폼에 이벤트 리스너를 추가하고 폼을 리셋해주는 clear 버튼을 추가하여, 폼을 제출하거나 reset 버튼을 클릭하면 실행되도록, 파일 하단에 앱 초기화를 호출하도록 추가합니다:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ submit 또는 click 이벤트를 받을 때 사용되는 약칭과, 이벤트가 handleSubmit 또는 reset 함수에 전달되는 방법에 유의하십시오. 이 약칭에 관련된 것을 더 긴 형식으로 바꿔 작성할 수 있나요? 어느 쪽을 선호하나요?

### init() 함수와 reset() 함수 작성하기:

이제 init()라고 불리는 확장 초기화하는 함수를 만드려고 합니다:

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```
함수에는, 약간의 흥미로운 로직이 있습니다. 이것을 읽어보면, 어떤 것이 보이나요?

- 사용자가 로컬 저장소에 APIKey 및 지역 코드를 저장했는지 확인하기 위해 두 'const'가 설정됩니다.
- 둘 중 하나가 null이면, 'block'으로 출력되도록 스타일을 변경하여 폼을 나타냅니다.
- 결과를 숨기거나, 불러오고, 또한 clearBtn을 숨기며 오류 텍스트를 빈 문자열로 설정합니다
- 키와 지역이 존재하는 경우에는, 다음 루틴이 시작됩니다:
  - 탄소 사용량 데이터를 얻기 위한 API 호출
  - 결과 영역 숨기기
  - 폼 숨기기
  - 리셋 버튼 보이기

계속 진행하기 전, 브라우저에서 사용할 수 있는 매우 중요한 개념: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)에 대해 알아 보는 것이 좋습니다. LocalStorage는 브라우저에 문자열을 `key-value` 쌍으로 저장하는 유용한 방법입니다. 이런 타입의 웹 저장소는 브라우저에서 데이터를 관리하기 위해 JavaScript로 제어할 수 있습니다. LocalStorage는 만료되지 않지만, 다른 종류의 웹 저장소인 SessionStorage는 브라우저를 닫는 즉시 지워집니다. 다양한 타입의 저장소를 사용하는 것은 장점과 단점이 존재합니다.

> Note - 이 브라우저 확장은 로컬 저장소를 가집니다; 주요 브라우저 창은 각자 다른 객체이며 별도로 동작합니다.

APIKey를 문자열 값으로 설정한다고 하면, 예를 들어 웹 페이지를 "inspecting" 하고 (브라우저를 우측 클릭하여 검사할 수 있습니다) 애플리케이션 탭으로 이동하여 저장소를 확인했을 때 Edge에 설정되어 있다는 것을 볼 수 있습니다.

![Local storage pane](../images/localstorage.png)

✅ LocalStorage에 일부 데이터를 저장하기 꺼리는 상황을 생각해보세요. 일반적으로 API 키를 LocalStorage에 배치하는 것은 좋지 않은 생각입니다! 알 수 있나요? 우리 경우, 앱은 순수하게 학습을 위함이고, 앱 스토어에도 배포하지 않으므로 이 방법을 사용합니다.

Web API로 `getItem()`, `setItem()` 또는 `removeItem()`을 사용하여 LocalStorage를 제어합니다. 대부분 브라우저에서 광범위하게 지원됩니다.

`init()`에서 호출되는 `displayCarbonUsage()` 함수를 만들기 전에 초기 폼 제출을 하는 기능을 만들어 보겠습니다.

### 양식 제출 제어하기

이벤트 인자 `(e)`를 받는 `handleSubmit` 함수를 만듭니다. 이벤트 전달을 중단하고(브라우저 새로 고침을 중단) `apiKey.value`와 `region.value` 인자를 전달하는 새로운 함수 `setUpUser` 를 호출합니다. 이런 방식으로, 적절한 필드가 채워지는 순간 초기 폼을 통해 가져온 두 값을 사용합니다.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ 메모리를 초기화합니다 - 지난 강의에서 설정한 HTML에는 파일 상단에 지정한 `const`를 통해 `values`이 잡히는 두 입력 필드가 있으며, 둘 다 `required`이므로 브라우저에서 사용자가 null 값을 입력하지 못하도록 합니다.

### 사용자 설정하기

`setUpUser` 함수로 이동하고, 여기에 apiKey와 regionName에 대한 로컬 저장소 값을 설정합니다. 새로운 함수를 추가합니다:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```
이 함수는 API가 호출되는 동안 로딩 메시지를 설정하게 합니다. 핵심으로, 이 브라우저 확장의 가장 중요한 함수를 만드는 데 도달했습니다!

### 탄소 사용량 출력하기

마지막으로 API 쿼리할 시간입니다!

계속 진행하기 전에, API에 대해 논의해야 합니다. API, 또는 [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html)는 웹 개발자의 툴박스에서 중요한 요소입니다. 프로그램이 상호 작용하거나 할 수 있게 도와주는 표준 방법을 제공합니다. 예시로, 데이터베이스를 쿼리할 웹 사이트를 구축하는 경우, 누군가 사용할 API를 만들었을 수 있습니다. 다양한 유형의 API가 있지만 가장 인기있는 API 중 하나는 [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)입니다.

✅ 'REST'라는 용어는 'Representational State Transfer'를 의미하고 데이터를 가져오기 위해서 다양하게-구성된 URL을 쓰는 기능입니다. 개발자가 사용할 수 있는 다양한 타입의 API에 대해 약간 알아보십시오. 어떤 포맷이 좋습니까?

이 함수에 대해 유의해야 할 중요 사항이 있습니다. 먼저 [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)를 확인합니다. 비동기로 실행되도록 함수를 작성한다는 것은 수행되기 전 데이터 반환 작업이 완료될 때를 기다린다는 점을 의미합니다.

다음은 `async`에 대한 간단한 영상입니다 :

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

C02Signal API를 쿼리할 새로운 함수를 만듭니다:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

이는 큰 함수입니다. 여기에 어떤 일이 일어나고 있나요?

- 좋은 사례에 따라, `async` 키워드를 사용하여 이 함수가 비동기로 동작하도록 합니다. 이 함수는 API가 데이터를 반환할 때 promise를 반환하므로 `try/catch` 블록을 포함합니다. API 응답 속도를 제어할 수 없기 때문에 (전혀 응답을 못 받을 수 있습니다!) 확실하지 않은 일은 비동기로 호출하여 처리해야 합니다.
- API 키를 사용해서, 지역의 데이터를 얻기 위해 co2signal API를 쿼리하고 있습니다. 이 키를 사용하려면, 헤더 파라미터에 인증 타입을 사용해야 합니다.
- API가 응답하면, 이 데이터를 출력하도록 설정한 화면에 응답 데이터의 다양한 요소를 할당합니다.
- 오류가 있거나, 결과가 없는 경우에는, 오류 메시지가 출력됩니다.

✅ 비동기 프로그래밍 패턴을 사용하는 것은 툴박스의 다른 매우 유용한 도구입니다. [about the various ways](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)를 읽고 이런 타입의 코드를 구성할 수 있습니다.

축하합니다! 확장을 빌드하고 (`npm run build`) 확장 패널에서 새로 고치면, 작동하는 확장이 있습니다! 아이콘만 작동하지 않으며 다음 강의에서 수정할 예정입니다.

---

## 🚀 도전

지금까지 이 강의에서 여러 타입의 API에 대해 논의했습니다. 웹 API를 선택하고 제공하는 내용에 대해 자세히 알아보세요. 예시로, [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)와 같은 브라우저에서 쓸 수 있는 API를 보세요. 당신의 의견에 비추어 볼 때 좋은 API를 만드는 방법은 무엇일까요?

## 강의 후 퀴즈

[Post-lecture quiz][Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26?loc=ko)

## 리뷰 & 자기주도 학습

이 강의에서는 전문 웹 개발자에게 매우 유용한, LocalStorage와 API에 대해 학습했습니다. 어떻게 두 가지가 같이 작동하는지 생각해볼 수 있나요? API에서 사용할 아이템을 저장하는 웹 사이트를 어떻게 설계할지 생각해보세요.

## 과제

[Adopt an API](../assignment.md)

