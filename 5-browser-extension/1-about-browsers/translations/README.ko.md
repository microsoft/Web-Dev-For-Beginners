# 브라우저 확장 프로젝트 파트 1: 브라우저에 대한 모든 것

![Browser sketchnote](/sketchnotes/browser.jpg)
> Sketchnote by [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## 강의 전 퀴즈

[Pre-lecture quiz][Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/23?loc=ko)

### 소개

브라우저 확장은 브라우저에 추가적인 기능을 추가합니다. 그러나 빌드하기 전에, 브라우저가 작동하는 방식에 대해 약간 알아야 합니다.

### 브라우저에 대하여

이 강의의 시리즈에서는, Chrome, Firefox와 Edge 브라우저에서 작동하는 브라우저 확장을 빌드하는 방법을 배웁니다. 이 부분에서는, 브라우저가 작동하는 방식을 발견하고 브라우저 확장의 요소를 발판으로 딛습니다.

그러나 브라우저는 정확히 무엇일까요? 엔드 유저가 서버에서 콘텐츠에 접근하여 웹 페이지로 볼 수 있도록 해주는 소프트웨어 애플리케이션입니다.

✅ 약간의 역사: 첫번째 브라우저는 'WorldWideWeb'라고 불렸으며 Sir Timothy Berners-Lee가 1990년에 만들었습니다.

![early browsers](../images/earlybrowsers.jpg)
> Some early browsers, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

사용자가 URL(Uniform Resource Locator) 주소를 사용하여 인터넷에 연결하고, `http` 혹은 `https` 주소를 통해 Hypertext Transfer Protocol을 사용하면, 브라우저가 웹 서버와 통신하여 웹 페이지를 가져옵니다.

이 시점에서, 브라우저의 렌더링 엔진은 모바일 폰, 데스크톱 혹은 노트북과 같은 사용자의 장치에 출력합니다.

또한 브라우저는 콘텐츠를 캐시할 수 있으므로 매번 서버에서 찾을 필요가 없습니다. 브라우징 활동 기록을 기록할 때 필요한 정보가 포함된 작은 데이터인 'cookies'를 저장할 수 있습니다.

브라우저에 대해 알아야 할 중요한 점은 브라우저가 모두 같지 않다는 것입니다! 각 브라우저에는 장점과 단점이 있으며, 전문 웹 개발자는 웹 페이지가 크로스 브라우저로 잘 작동하도록 만드는 방법을 이해해야 합니다. 여기에는 모바일 폰과 같은 작은 뷰포트 제어와 오프라인 처리 작업을 포함합니다.

선호하는 브라우저에 책갈피를 추가한다면 정말 유용한 웹 사이트는 [caniuse.com](https://www.caniuse.com)입니다. 웹 페이지를 만들 때, caniuse의 지원 기술 목록을 사용하면 사용자의 브라우저를 가장 잘 지원할 수 있습니다.

✅ 웹 사이트의 사용자 층에서 가장 인기있는 브라우저가 어떤 것인지 어떻게 알 수 있나요? analytics를 확인해보세요 - 웹 개발 프로세스의 일부로 다양한 분석 패키지를 설치할 수 있으며, 다양한 인기 브라우저에서 가장 많이 사용되는 브라우저를 알려줍니다.

## 브라우저 확장

브라우저 확장을 만드려는 이유는 무엇입니까? 반복 작업을 빠르게 할 때 브라우저로 연결하면 편리합니다. 예를 들어, 상호 작용하는 다양한 웹 페이지에서 색상을 확인하는 경우에는, color-picker 브라우저 확장을 설치할 수 있습니다. 비밀번호를 기억할 때 어려운 경우에는, password-management 브라우저 확장을 설치할 수 있습니다.

브라우저 확장도 재미있게 개발할 수 있습니다. 제한된 수의 작업을 잘 관리하는 경향이 있습니다.

✅ 가장 좋아하는 브라우저 확장은 무엇입니까? 어떤 작업을 수행하나요?

### 확장 설치하기

만들기 전에, 브라우저 확장을 작성하고 배포하는 프로세스를 찾아보세요. 브라우저마다 이 작업을 관리하는 방법이 다소 다르지만, 프로세스는 Chrome과 Firefox와 같이 Edge의 예제와 유사합니다:

![install a browser extension](../images/install-on-edge.png)

본질적으로, 프로세스는 다음과 같습니다:

- `npm build`를 사용하여 확장을 빌드합니다
- 우측 상단의 `...` 아이콘을 사용하여 브라우저에서 extensions 패널로 이동합니다
- 새로 설치하는 경우, `load unpacked`를 선택하여 build 폴더(이 경우에는 `/dist`)에서 새 확장을 올립니다
- 또는, 이미 설치된 확장 프로그램을 다시 불러오는 경우에 `reload`를 클릭합니다

✅ 이 설명서는 직접 만든 확장과 관련이 있습니다; 각 브라우저와 관련된 브라우저 확장 저장소에 출시된 확장을 설치하려면, 해당 [stores](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home)로 이동하여 원하는 확장을 설치해야 합니다.

### 시작하기

지역 탄소 발자국을 표시하는 브라우저 확장을 만들어서 지역의 에너지 사용량과 소스를 표시합니다. 확장에는 CO2 Signal의 API에 접근할 수 있도록 API 키를 모으는 폼이 있습니다.

**필요합니다:**

- [an API key](https://www.co2signal.com/); 이 페이지의 상자에 이메일을 입력하면 이메일이 전송됩니다.
- [Electricity Map](https://www.electricitymap.org/map)에 해당하는 [code for your region](http://api.electricitymap.org/v3/zones) (보스턴에서 예시를 들면, 'US-NEISO'를 사용합니다).
- [starter code](../start). `start` 폴더를 다운로드하세요; 이 폴더에서 코드를 완성하게됩니다.
- [NPM](https://www.npmjs.com) - NPM은 패키지 관리 도구입니다. 로컬에 설치하고 `package.json` 파일에 나열된 패키지를 웹 어셋에서 사용하도록 설치합니다.

✅ 이 [excellent Learn module](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-13441-cxa)에서 패키지 관리에 대해 자세히 알아보세요

잠시 시간을 내어 코드베이스를 보세요:

dist
    -|manifest.json (defaults set here)
    -|index.html (front-end HTML markup here)
    -|background.js (background JS here)
    -|main.js (built JS)
src
    -|index.js (your JS code goes here)

✅ API 키와 지역 코드를 가지고 있다면, 나중에 다시 사용할 수 있도록 메모하세요.

### 확장을 위한 HTML 제작하기

이 확장은 두 화면을 가집니다. 한 화면에는 API 키와 지역 코드를 수집합니다:

![extension form](../images/1.png)

그리고 두번째 화면에는 지역의 탄소 사용량을 출력합니다:

![carbon usage](../images/2.png)

이제 HTML 폼을 작성하고 CSS 스타일을 지정하는 것으로 시작하겠습니다.

`/dist` 폴더에서, 폼과 결과 영역을 작성합니다. `index.html` 파일에서, 구분된 폼 영역을 채웁니다:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
	<label>Region Name</label>
		<input type="text" required class="region-name" />
	</div>
	<div>
		<label>Your API Key from tmrow</label>
		<input type="text" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
저장된 정보를 입력하고 로컬 저장소에 저장하는 양식입니다.

다음, 결과 영역을 만듭니다; 마지막 폼 태그 아래에 약간의 div를 추가합니다:

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
이 시점에서 다시 빌드할 수 있습니다. 이 확장의 패키지 의존성을 설치해야 합니다:

```
npm install
```

이 명령은 Node 패키지 관리자인 npm을 사용하여, 확장의 빌드 프로세스를 위한 webpack을 설치합니다. Webpack은 컴파일 코드를 제어하는 bundler입니다. 이 프로세스의 출력은 `/dist/main.js`에서 볼 수 있습니다. - 코드가 번들로 제공됨을 알 수 있습니다.

지금은, 확장이 빌드되어 확장으로 Edge에 배포된다면, 폼은 깔끔하게 출력됩니다.

축하합니다, 브라우저 확장을 만들기 위한 첫 단계를 수행했습니다. 이어지는 강의에서, 더 기능적이고 유용하게 만들 것입니다.

---

## 🚀 도전

브라우저 확장 저장소를 살펴보고 브라우저에 하나 설치하세요. 흥미로운 방식으로 파일을 뜯어볼 수 있습니다. 무엇을 발견할 수 있나요?

## 강의 후 퀴즈

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/24?loc=ko)

## 리뷰 & 자기주도 학습

이 강의에서는 웹 브라우저의 역사에 대해 조금 배웠습니다; 이 기회에 역사를 더 많이 읽어보면서 World Wide Web의 탐험가들이 어떻게 사용했는지에 대해 알아보십시오. 유용한 사이트는 다음과 같습니다:

[The History of Web Browsers](https://www.mozilla.org/firefox/browsers/browser-history/)

[History of the Web](https://webfoundation.org/about/vision/history-of-the-web/)

[An interview with Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## 과제 

[Restyle your extension](../assignment.md)

