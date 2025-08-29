<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T15:37:09+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "ko"
}
-->
# 브라우저 확장 프로그램 프로젝트 Part 2: API 호출 및 로컬 스토리지 사용

## 강의 전 퀴즈

[강의 전 퀴즈](https://ff-quizzes.netlify.app/web/quiz/25)

### 소개

이번 강의에서는 브라우저 확장 프로그램의 폼을 제출하여 API를 호출하고 결과를 브라우저 확장 프로그램에 표시하는 방법을 배웁니다. 또한, 브라우저의 로컬 스토리지에 데이터를 저장하여 나중에 참조하고 사용하는 방법도 배울 것입니다.

✅ 적절한 파일의 번호가 매겨진 섹션을 따라가며 코드를 어디에 배치해야 하는지 확인하세요.

### 확장에서 조작할 요소 설정하기:

지금까지 브라우저 확장 프로그램을 위한 폼과 결과 `<div>`의 HTML을 작성했습니다. 이제부터는 `/src/index.js` 파일에서 작업하며 확장 프로그램을 조금씩 구축해야 합니다. 프로젝트 설정 및 빌드 프로세스에 대한 자세한 내용은 [이전 강의](../1-about-browsers/README.md)를 참조하세요.

`index.js` 파일에서 작업을 시작하며, 다양한 필드와 관련된 값을 저장할 `const` 변수를 생성하세요:

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

이 모든 필드는 이전 강의에서 HTML에 설정한 CSS 클래스에 의해 참조됩니다.

### 리스너 추가하기

다음으로, 폼과 폼을 초기화하는 초기화 버튼에 이벤트 리스너를 추가하세요. 사용자가 폼을 제출하거나 초기화 버튼을 클릭하면 어떤 일이 발생하도록 설정하고, 파일 하단에 앱을 초기화하는 호출을 추가하세요:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ 제출 또는 클릭 이벤트를 듣기 위해 사용된 간단한 표현법을 주목하세요. 이벤트가 handleSubmit 또는 reset 함수로 전달되는 방식도 확인하세요. 이 간단한 표현법을 더 긴 형식으로 작성할 수 있나요? 어떤 방식이 더 선호되나요?

### init() 함수와 reset() 함수 작성하기:

이제 확장을 초기화하는 init() 함수를 작성할 차례입니다:

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

이 함수에는 흥미로운 로직이 포함되어 있습니다. 읽어보면서 어떤 일이 발생하는지 확인할 수 있나요?

- 로컬 스토리지에 APIKey와 지역 코드가 저장되어 있는지 확인하기 위해 두 개의 `const`를 설정합니다.
- 둘 중 하나라도 null이면 폼의 스타일을 'block'으로 변경하여 폼을 표시합니다.
- 결과, 로딩, clearBtn을 숨기고 오류 텍스트를 빈 문자열로 설정합니다.
- 키와 지역이 존재하면 다음 루틴을 시작합니다:
  - API를 호출하여 탄소 사용 데이터를 가져옵니다.
  - 결과 영역을 숨깁니다.
  - 폼을 숨깁니다.
  - 초기화 버튼을 표시합니다.

다음으로 넘어가기 전에 브라우저에서 사용할 수 있는 매우 중요한 개념인 [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)에 대해 배우는 것이 유용합니다. LocalStorage는 브라우저에서 문자열을 `key-value` 쌍으로 저장하는 유용한 방법입니다. 이 유형의 웹 스토리지는 JavaScript를 사용하여 브라우저에서 데이터를 관리할 수 있습니다. LocalStorage는 만료되지 않지만, SessionStorage라는 또 다른 유형의 웹 스토리지는 브라우저를 닫으면 삭제됩니다. 다양한 스토리지 유형은 각각 장단점이 있습니다.

> 참고 - 브라우저 확장 프로그램은 자체 로컬 스토리지를 가지고 있으며, 메인 브라우저 창은 별도의 인스턴스로 작동합니다.

APIKey를 문자열 값으로 설정하면, Edge에서 웹 페이지를 "검사"하여 (브라우저를 오른쪽 클릭하여 검사 가능) Applications 탭으로 이동하여 스토리지를 확인할 수 있습니다.

![로컬 스토리지 창](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.ko.png)

✅ LocalStorage에 데이터를 저장하지 말아야 할 상황을 생각해보세요. 일반적으로 API 키를 LocalStorage에 저장하는 것은 좋지 않은 아이디어입니다! 왜 그런지 알 수 있나요? 이번 경우에는 앱이 학습 목적으로만 사용되며 앱 스토어에 배포되지 않을 것이기 때문에 이 방법을 사용합니다.

Web API를 사용하여 LocalStorage를 조작할 수 있습니다. `getItem()`, `setItem()`, 또는 `removeItem()`을 사용합니다. 이는 대부분의 브라우저에서 널리 지원됩니다.

`displayCarbonUsage()` 함수가 `init()`에서 호출되기 전에 초기 폼 제출을 처리하는 기능을 작성해봅시다.

### 폼 제출 처리하기

이벤트 인수 `(e)`를 받는 `handleSubmit`이라는 함수를 만드세요. 이벤트가 전파되지 않도록 중지시키고 (이 경우 브라우저가 새로고침되지 않도록 합니다) 새로운 함수 `setUpUser`를 호출하며 `apiKey.value`와 `region.value` 인수를 전달합니다. 이렇게 하면 초기 폼에서 적절한 필드가 채워질 때 가져온 두 값을 사용할 수 있습니다.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ 기억을 되살려보세요 - 지난 강의에서 설정한 HTML에는 두 개의 입력 필드가 있으며, 해당 필드의 `values`는 파일 상단에 설정한 `const`를 통해 캡처됩니다. 두 필드는 `required`로 설정되어 있어 브라우저가 사용자가 null 값을 입력하지 못하도록 합니다.

### 사용자 설정하기

`setUpUser` 함수로 이동하여 여기에서 apiKey와 regionName에 대한 로컬 스토리지 값을 설정합니다. 새로운 함수를 추가하세요:

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

이 함수는 API가 호출되는 동안 로딩 메시지를 표시하도록 설정합니다. 이제 브라우저 확장 프로그램의 가장 중요한 기능을 작성할 준비가 되었습니다!

### 탄소 사용량 표시하기

마침내 API를 쿼리할 시간입니다!

더 나아가기 전에 API에 대해 논의해봅시다. API는 [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html)의 약자로, 웹 개발자의 도구 상자에서 중요한 요소입니다. API는 프로그램 간 상호작용 및 인터페이스를 표준화된 방식으로 제공합니다. 예를 들어, 데이터베이스를 쿼리해야 하는 웹 사이트를 구축하는 경우, 누군가가 사용할 수 있는 API를 생성했을 수 있습니다. API에는 여러 유형이 있지만, 가장 인기 있는 유형 중 하나는 [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)입니다.

✅ 'REST'는 'Representational State Transfer'의 약자로, 다양한 URL을 사용하여 데이터를 가져오는 특징이 있습니다. 개발자가 사용할 수 있는 다양한 유형의 API에 대해 조사해보세요. 어떤 형식이 가장 마음에 드나요?

이 함수에서 중요한 점을 몇 가지 살펴보겠습니다. 먼저 [`async` 키워드](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)를 확인하세요. 함수가 비동기적으로 실행되도록 작성하면 데이터가 반환되는 등의 작업이 완료될 때까지 기다린 후 계속 진행합니다.

`async`에 대한 간단한 동영상이 있습니다:

[![Async와 Await를 사용한 Promise 관리](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async와 Await를 사용한 Promise 관리")

> 🎥 위 이미지를 클릭하면 async/await에 대한 동영상을 볼 수 있습니다.

C02Signal API를 쿼리하는 새로운 함수를 만드세요:

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

이 함수는 꽤 큽니다. 여기서 어떤 일이 일어나고 있나요?

- 모범 사례를 따르며, `async` 키워드를 사용하여 이 함수가 비동기적으로 작동하도록 설정합니다. 이 함수는 API가 데이터를 반환할 때 Promise를 반환하므로 `try/catch` 블록을 포함합니다. API가 응답하는 속도를 제어할 수 없기 때문에 (응답하지 않을 수도 있음), 비동기적으로 호출하여 이러한 불확실성을 처리해야 합니다.
- co2signal API를 쿼리하여 API 키를 사용해 지역 데이터를 가져옵니다. 이 키를 사용하려면 헤더 매개변수에서 인증 유형을 사용해야 합니다.
- API가 응답하면 응답 데이터의 다양한 요소를 화면의 적절한 부분에 할당하여 데이터를 표시합니다.
- 오류가 발생하거나 결과가 없으면 오류 메시지를 표시합니다.

✅ 비동기 프로그래밍 패턴을 사용하는 것은 매우 유용한 도구입니다. [다양한 구성 방법](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)에 대해 읽어보세요.

축하합니다! 확장 프로그램을 빌드하고 (`npm run build`) 확장 프로그램 창에서 새로고침하면 작동하는 확장 프로그램이 완성됩니다! 아이콘만 작동하지 않으며, 다음 강의에서 이를 수정할 것입니다.

---

## 🚀 도전 과제

이번 강의에서 여러 유형의 API에 대해 논의했습니다. 웹 API를 선택하여 해당 API가 제공하는 내용을 깊이 조사해보세요. 예를 들어, [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)와 같은 브라우저 내에서 사용할 수 있는 API를 살펴보세요. 훌륭한 API란 무엇이라고 생각하나요?

## 강의 후 퀴즈

[강의 후 퀴즈](https://ff-quizzes.netlify.app/web/quiz/26)

## 복습 및 자기 학습

이번 강의에서는 LocalStorage와 API에 대해 배웠습니다. 둘 다 전문 웹 개발자에게 매우 유용한 도구입니다. 이 두 가지가 어떻게 함께 작동하는지 생각해볼 수 있나요? API에서 사용할 항목을 저장하는 웹 사이트를 설계하는 방법을 생각해보세요.

## 과제

[API 채택하기](assignment.md)

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서(원어로 작성된 문서)를 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.  