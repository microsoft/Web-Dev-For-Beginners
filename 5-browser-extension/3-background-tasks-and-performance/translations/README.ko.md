# 브라우저 확장 프로젝트 파트 3: 백그라운드 작업과 성능 학습

## 강의 전 퀴즈

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/27?loc=ko)

### 소개

이 모듈의 마지막 두 강의에서는, API에서 가져온 데이터에 대한 폼과 출력 영역을 만드는 방법을 배웠습니다. 웹에서 웹 프레즌스를 만드는 매우 표준적인 방법입니다. 비동기로 데이터를 가져와서 처리하는 방법도 배웠습니다. 브라우저 확장이 거의 완성되었습니다.

확장의 아이콘 색상을 새로 고치는 것부터 포함하여, 일부 백그라운드 작업을 관리하는 것도 남아있으므로, 브라우저가 이러한 종류의 작업을 관리하는 방법에 대해 이야기해 볼 수 있는 시간입니다. 웹 어셋을 구축하며 성능과 관련한 브라우저 작업에 대해 생각합시다.

## 웹 성능 기초

> "Website performance is about two things: how fast the page loads, and how fast the code on it runs." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

모든 종류의 사용자와 상황에서의 모든 장치에서, 웹 사이트를 매우 빠르게 작동하도록 만드는 방법은 놀랍지 않을 정도로 많습니다. 표준 웹 프로젝트 혹은 브라우저 확장을 만들 때 알아두어야 할 몇 가지 사항이 있습니다.

사이트가 효율적으로 실행되는지 확인하기 위해 가장 먼저 할 일은 성능 데이터를 모으는 것입니다. 첫 번째 장소는 웹 브라우저의 개발자 도구입니다. Edge에서는, 브라우저 우측 상단에 존재하는 세 개 점을 선택한 다음, More Tools > Developer Tools로 이동하여 Performance 탭을 열 수 있습니다.

Performance 탭에는 Profiling 도구가 있습니다. 웹 사이트를 열고 (예를 들어, https://www.microsoft.com) 'Record' 버튼을 클릭한 뒤에, 사이트를 새로 고칩니다. 언제든 recording을 중단하면, 사이트를 'script', 'render', 그리고 'paint' 하려고 만든 루틴을 볼 수 있습니다:

![Edge profiler](.././images/profiler.png)

✅ Edge에서 Performance 패널에서 [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance?WT.mc_id=academic-77807-sagibbon)를 방문하세요

> Tip: 웹 사이트의 시작 시간을 순수하게 보려면, 브라우저의 캐시를 지우세요

프로필 타임라인의 요소를 선택하여 페이지가 불러지는 동안에 발생하는 이벤트를 확대합니다.

프로필 타임라인의 일부를 선택하고 요약 패널을 보게된 뒤 페이지 performance의 snapshot을 가져옵니다:

![Edge profiler snapshot](.././images/snapshot.png)

이벤트 로그 패널을 확인하여 15ms 이상 넘긴 이벤트가 있는지 확인합니다:

![Edge event log](.././images/log.png)

✅ 프로파일러에 대해 알아보세요! 이 사이트에서 개발자 도구를 열고 병목 현상이 있는지 확인하세요. 불러오는 속도가 가장 느린 어셋은 무엇인가요? 가장 빠른가요?

## 프로파일링 점검

일반적으로 모든 웹 개발자가 사이트를 만들 때는 주의해야 하는 몇 가지 "problem areas"가 있습니다, 따라서 프로덕션으로 배포할 때 깜짝 놀라는 것을 피할 수 있습니다.

**어셋 크기**: 웹은 지난 몇 년 동안 '무거워'지고 느려졌습니다. 이렇게 무거워지는 일부 원인은 이미지를 사용하는 것과 관련이 있습니다.

✅ 페이지 무게 등의 역사적 관점을 보려면 [Internet Archive](https://httparchive.org/reports/page-weight) 를 살펴보세요.

이미지가 최적화되어 사용자에게 적당한 크기와 해상도로 제공하고 있는지, 확인해보는 것이 좋습니다.

**DOM 순회**: 브라우저는 작성한 코드를 기반으로 Document Object Model을 작성하므로, 페이지에 필요한 것만 사용하며 스타일을 지정하고, 태그도 적게 사용하는 것이 좋은 페이지 성능을 위해 필요합니다. 이 시점에서, 페이지와 관련되어 많은 CSS를 최적화할 수 있습니다: 예를 들면, 한 페이지에서만 사용할 스타일은 main style sheet에 포함할 필요가 없습니다.

**JavaScript**: 모든 JavaScript 개발자는 나머지 DOM을 탐색하는 과정을 브라우저에 그리기 전에 불러와야 한다면 'render-blocking' 스크립트를 봐야 합니다. inline 스크립트와 (Terrarium 모듈에서 한 것처럼) `defer` 사용을 고려해보세요.

✅ [Site Speed Test website](https://www.webpagetest.org/)에서 일부 사이트를 시도해보고 사이트 성능을 결정하기 위해 수행되는 일반적인 확인 사항에 대해 알아보세요.

이제 브라우저가 전송한 어셋을 렌더링하는 방법에 대한 아이디어를 얻었으므로, 확장을 완료하고자 하는 마지막 몇 작업을 봅시다:

### 색상 계산하는 함수 생성하기

`/src/index.js`에서 작업하면서, DOM에 접근하기 위해 설정한 `const` 변수 뒤에 `calculateColor()`라는 함수를 추가합니다:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

여기에 어떤 일이 일어나고 있나요? 지난 강의에서 완료한 API 호출에서 값(탄소 강도)을 전달한 다음에, 값이 colors 배열에 표시된 인덱스에서 얼마나 가까운 지 계산합니다. 그러고 가장 가까운 색상 값을 chrome 런타임으로 보냅니다.

hrome.runtime은 [API](https://developer.chrome.com/extensions/runtime)는 모든 종류의 백그라운드 작업을 제어하며, 확장은 다음을 활용합니다:

> "Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs."

✅ Edge 용 브라우저 확장을 개발하고 있다면, chrome API를 사용하고 있다는 점에 놀랄 수 있습니다. 최신 Edge 브라우저 버전은 Chromium 브라우저 엔진에서 실행되므로, 이 도구를 활용할 수 있습니다.

> 참고로 브라우저 확장을 프로파일링하려면, 이는 분리된 브라우저 인스턴스이므로 확장 자체적으로 dev tools를 시작합니다.

### 기본 아이콘 색상 지정하기

이제, `init()` 함수에서, chrome의 `updateIcon` 액션을 다시 호출하여 시작할 때의 아이콘을 평범한 녹색으로 설정합니다:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### 함수 호출하고, call 실행하기

다음, 방금 전에 만든 함수를 C02Signal API가 반환한 promise에 추가하여 호출합니다:

```JavaScript
//let CO2...
calculateColor(CO2);
```

그리고 마지막으로, `/dist/background.js` 에서, 백그라운드 엑션 호출하는 리스너를 추가합니다:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
코드에서, 백엔드 작업 매니저로 들어오는 모든 메시지 리스너를 추가합니다. 'updateIcon' 이라고 불리면, 다음 코드가 수행되고, Canvas API를 사용해서 적절한 색상의 아이콘을 그립니다.

✅ [Space Game lessons](../../../6-space-game/2-drawing-to-canvas/translations/README.ko.md)에서 Canvas API에 대해 더 배울 것 입니다.

이제, 확장을 (`npm run build`)로 다시 빌드합니다, 확장을 새로 고치고 시작한 뒤, 색상이 변하는 것을 봅니다. 심부름을 하거나 설거지를 하기에 좋을 때 인가요? 이제 압니다!

축하합니다, 유용한 브라우저 확장을 만들었고 브라우저 작동 방식과 성능 프로파일링 방식에 대해 더 배웠습니다.

---

## 🚀 도전

일부 오픈소스 웹 사이트가 옛날에도 있었는지 알아보고, GitHub 히스토리를 바탕으로, 몇 년 동안 성능을 위해 최적화되고 있었는가에 대해 확인하세요. 가장 일반적인 문제점은 무엇일까요?

## 강의 후 퀴즈

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/28?loc=ko)

## 리뷰 & 자기주도 학습

[performance newsletter](https://perf.email/) 가입을 고려해보세요

웹 도구의 performance 탭을 통하여 브라우저에서 웹 성능을 측정하는 방식이 어떤 것인지 알아보세요. 큰 차이점을 찾을 수 있나요?

## 과제

[Analyze a site for performance](../assignment.md)

