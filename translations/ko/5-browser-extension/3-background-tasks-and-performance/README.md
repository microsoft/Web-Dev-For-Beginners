<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f198c6b817b4b2a99749f4662e7cae98",
  "translation_date": "2025-08-23T23:47:18+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "ko"
}
-->
# 브라우저 확장 프로그램 프로젝트 Part 3: 백그라운드 작업과 성능에 대해 배우기

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/27)

### 소개

이 모듈의 지난 두 강의에서는 API에서 데이터를 가져와 표시하는 폼과 영역을 만드는 방법을 배웠습니다. 이는 웹에서 웹 존재감을 만드는 매우 일반적인 방법입니다. 또한 데이터를 비동기적으로 가져오는 방법도 배웠습니다. 이제 브라우저 확장 프로그램은 거의 완성되었습니다.

남은 작업은 확장 프로그램 아이콘의 색상을 새로 고치는 등 몇 가지 백그라운드 작업을 관리하는 것입니다. 브라우저가 이러한 작업을 관리하는 방법에 대해 이야기하기 좋은 시점입니다. 웹 자산을 구축하면서 브라우저 작업을 성능 관점에서 생각해 봅시다.

## 웹 성능 기본 사항

> "웹사이트 성능은 두 가지에 관한 것입니다: 페이지가 얼마나 빨리 로드되는지, 그리고 그 위의 코드가 얼마나 빨리 실행되는지." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

모든 종류의 기기, 모든 종류의 사용자, 모든 상황에서 웹사이트를 빠르게 만드는 방법에 대한 주제는 예상대로 방대합니다. 표준 웹 프로젝트나 브라우저 확장 프로그램을 구축할 때 염두에 두어야 할 몇 가지 사항을 소개합니다.

사이트가 효율적으로 실행되도록 하려면 먼저 성능 데이터를 수집해야 합니다. 이를 위한 첫 번째 장소는 웹 브라우저의 개발자 도구입니다. Edge에서는 "설정 및 기타" 버튼(브라우저 오른쪽 상단의 세 개의 점 아이콘)을 선택한 다음, "추가 도구 > 개발자 도구"로 이동하여 성능 탭을 엽니다. Windows에서는 `Ctrl` + `Shift` + `I`, Mac에서는 `Option` + `Command` + `I` 키보드 단축키를 사용하여 개발자 도구를 열 수 있습니다.

성능 탭에는 프로파일링 도구가 포함되어 있습니다. 웹사이트를 열고(예: [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) '기록' 버튼을 클릭한 다음 사이트를 새로 고칩니다. 언제든지 기록을 중지하면 사이트를 '스크립트', '렌더링', '페인트'하는 데 생성된 루틴을 확인할 수 있습니다:

![Edge 프로파일러](../../../../5-browser-extension/3-background-tasks-and-performance/images/profiler.png)

✅ [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon)에서 Edge의 성능 패널에 대해 알아보세요.

> 팁: 웹사이트의 시작 시간을 정확히 측정하려면 브라우저 캐시를 지우세요.

프로파일 타임라인의 요소를 선택하여 페이지가 로드되는 동안 발생하는 이벤트를 확대하세요.

프로파일 타임라인의 일부를 선택하고 요약 창을 확인하여 페이지 성능의 스냅샷을 얻으세요:

![Edge 프로파일러 스냅샷](../../../../5-browser-extension/3-background-tasks-and-performance/images/snapshot.png)

이벤트 로그 창을 확인하여 15ms 이상 소요된 이벤트가 있는지 확인하세요:

![Edge 이벤트 로그](../../../../5-browser-extension/3-background-tasks-and-performance/images/log.png)

✅ 프로파일러를 익히세요! 이 사이트에서 개발자 도구를 열어 병목 현상이 있는지 확인하세요. 가장 느리게 로드되는 자산은 무엇인가요? 가장 빠른 것은 무엇인가요?

## 프로파일링 체크

일반적으로, 웹 개발자가 사이트를 구축할 때 프로덕션에 배포할 때 발생할 수 있는 문제를 방지하기 위해 주의해야 할 몇 가지 "문제 영역"이 있습니다.

**자산 크기**: 최근 몇 년 동안 웹은 '무거워지고' 따라서 느려졌습니다. 이러한 무게의 일부는 이미지 사용과 관련이 있습니다.

✅ [Internet Archive](https://httparchive.org/reports/page-weight)에서 페이지 무게의 역사적 관점과 더 많은 정보를 확인하세요.

이미지가 최적화되고 사용자에게 적합한 크기와 해상도로 제공되도록 하는 것이 좋은 관행입니다.

**DOM 탐색**: 브라우저는 작성한 코드를 기반으로 문서 객체 모델을 구축해야 하므로 태그를 최소화하고 페이지에 필요한 것만 사용하고 스타일링하는 것이 좋은 페이지 성능을 위해 중요합니다. 예를 들어, 특정 페이지에서만 필요한 스타일은 메인 스타일 시트에 포함될 필요가 없습니다.

**JavaScript**: 모든 JavaScript 개발자는 DOM이 탐색되고 브라우저에 페인트되기 전에 로드되어야 하는 '렌더링 차단' 스크립트를 주의해야 합니다. 인라인 스크립트에 `defer`를 사용하는 것을 고려하세요(예: Terrarium 모듈에서 사용됨).

✅ [Site Speed Test 웹사이트](https://www.webpagetest.org/)에서 사이트 성능을 결정하기 위해 수행되는 일반적인 체크를 확인하세요.

이제 브라우저가 전송한 자산을 렌더링하는 방법에 대한 아이디어를 얻었으니, 확장을 완료하기 위해 해야 할 마지막 몇 가지 작업을 살펴보겠습니다:

### 색상을 계산하는 함수 생성

`/src/index.js`에서 DOM에 액세스하기 위해 설정한 일련의 `const` 변수 뒤에 `calculateColor()`라는 함수를 추가하세요:

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

여기서 무슨 일이 일어나고 있나요? 이전 강의에서 완료한 API 호출에서 탄소 강도를 값으로 전달하고, 색상 배열에 표시된 인덱스와 값이 얼마나 가까운지 계산합니다. 그런 다음 가장 가까운 색상 값을 chrome 런타임으로 보냅니다.

chrome.runtime에는 모든 종류의 백그라운드 작업을 처리하는 [API](https://developer.chrome.com/extensions/runtime)가 있습니다. 확장 프로그램은 이를 활용하고 있습니다:

> "chrome.runtime API를 사용하여 백그라운드 페이지를 검색하고, 매니페스트에 대한 세부 정보를 반환하며, 앱 또는 확장 프로그램 라이프사이클의 이벤트를 수신하고 응답합니다. 또한 이 API를 사용하여 URL의 상대 경로를 완전히 자격이 부여된 URL로 변환할 수 있습니다."

✅ Edge용 브라우저 확장 프로그램을 개발 중이라면 chrome API를 사용하는 것이 놀라울 수 있습니다. 최신 Edge 브라우저 버전은 Chromium 브라우저 엔진에서 실행되므로 이러한 도구를 활용할 수 있습니다.

> 참고로, 브라우저 확장 프로그램을 프로파일링하려면 확장 프로그램 자체에서 개발자 도구를 실행하세요. 확장 프로그램은 별도의 브라우저 인스턴스입니다.

### 기본 아이콘 색상 설정

이제 `init()` 함수에서 chrome의 `updateIcon` 작업을 호출하여 아이콘을 기본 녹색으로 설정하세요:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### 함수 호출 및 실행

다음으로, 이전 강의에서 완료한 C02Signal API에서 반환된 promise에 방금 생성한 함수를 추가하여 호출하세요:

```JavaScript
//let CO2...
calculateColor(CO2);
```

마지막으로, `/dist/background.js`에서 이러한 백그라운드 작업 호출에 대한 리스너를 추가하세요:

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

이 코드에서는 백그라운드 작업 관리자에 들어오는 메시지에 대한 리스너를 추가합니다. 메시지가 'updateIcon'으로 호출되면, Canvas API를 사용하여 적절한 색상의 아이콘을 그리는 다음 코드가 실행됩니다.

✅ [Space Game 강의](../../6-space-game/2-drawing-to-canvas/README.md)에서 Canvas API에 대해 더 배울 수 있습니다.

이제 확장 프로그램을 다시 빌드하세요(`npm run build`). 확장을 새로 고치고 실행하여 색상이 변경되는 것을 확인하세요. 지금이 심부름을 하거나 설거지를 할 좋은 시간인가요? 이제 알게 되었습니다!

축하합니다! 유용한 브라우저 확장 프로그램을 구축하고 브라우저가 작동하는 방식과 성능을 프로파일링하는 방법에 대해 더 많이 배웠습니다.

---

## 🚀 도전 과제

오랫동안 존재했던 오픈 소스 웹사이트를 조사하고, GitHub 기록을 기반으로 성능을 위해 어떻게 최적화되었는지 확인하세요. 가장 일반적인 문제점은 무엇인가요?

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/28)

## 복습 및 자기 학습

[성능 뉴스레터](https://perf.email)에 가입하는 것을 고려해보세요.

브라우저가 웹 성능을 측정하는 방법을 조사하기 위해 웹 도구의 성능 탭을 살펴보세요. 주요 차이점을 발견했나요?

## 과제

[사이트 성능 분석](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.