<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46a0639e719b9cf1dfd062aa24cad639",
  "translation_date": "2025-08-23T22:26:03+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "ko"
}
-->
# 테라리움 프로젝트 1부: HTML 소개

![HTML 소개](../../../../sketchnotes/webdev101-html.png)
> 스케치노트: [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈

[강의 전 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/15)

> 비디오를 확인하세요

> 
> [![Git 및 GitHub 기본 비디오](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### 소개

HTML(HyperText Markup Language)은 웹의 '뼈대'입니다. CSS가 HTML을 '꾸미고', JavaScript가 생명을 불어넣는다면, HTML은 웹 애플리케이션의 몸체입니다. HTML의 문법은 이러한 개념을 반영하며, "head", "body", "footer" 태그를 포함합니다.

이번 강의에서는 HTML을 사용하여 가상 테라리움 인터페이스의 '뼈대'를 구성할 것입니다. 인터페이스에는 제목과 세 개의 열이 포함됩니다: 드래그 가능한 식물이 위치하는 왼쪽과 오른쪽 열, 그리고 실제 유리처럼 보이는 테라리움이 될 중앙 영역입니다. 이번 강의를 마치면 열에 식물이 표시되지만, 인터페이스는 약간 이상해 보일 수 있습니다. 걱정하지 마세요, 다음 섹션에서 CSS 스타일을 추가하여 인터페이스를 더 보기 좋게 만들 것입니다.

### 작업

컴퓨터에서 'terrarium'이라는 폴더를 만들고 그 안에 'index.html' 파일을 생성하세요. Visual Studio Code에서 테라리움 폴더를 만든 후 새 VS Code 창을 열고 '폴더 열기'를 클릭하여 새 폴더로 이동합니다. 탐색기 창에서 작은 '파일' 버튼을 클릭하여 새 파일을 생성하세요:

![VS Code 탐색기](../../../../3-terrarium/1-intro-to-html/images/vs-code-index.png)

또는

Git Bash에서 다음 명령어를 사용하세요:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` 또는 `nano index.html`

> index.html 파일은 브라우저에 폴더의 기본 파일임을 나타냅니다. 예를 들어, `https://anysite.com/test`와 같은 URL은 `test`라는 폴더와 그 안에 있는 `index.html` 파일을 포함하는 폴더 구조를 기반으로 할 수 있습니다. URL에 `index.html`이 표시되지 않아도 됩니다.

---

## DocType과 html 태그

HTML 파일의 첫 번째 줄은 doctype입니다. 파일 맨 위에 이 줄을 추가해야 한다는 점이 약간 놀라울 수 있지만, 이는 브라우저가 현재 HTML 사양을 따르는 표준 모드로 페이지를 렌더링해야 한다는 것을 알려줍니다.

> 팁: VS Code에서 태그 위에 마우스를 올리면 MDN 참조 가이드에서 해당 태그의 사용에 대한 정보를 확인할 수 있습니다.

두 번째 줄은 `<html>` 태그의 시작 태그와 현재는 닫는 태그 `</html>`가 있어야 합니다. 이 태그들은 인터페이스의 루트 요소입니다.

### 작업

`index.html` 파일 맨 위에 다음 줄을 추가하세요:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ DocType을 쿼리 문자열로 설정하여 결정할 수 있는 몇 가지 모드가 있습니다: [Quirks Mode와 Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). 이러한 모드는 현재 거의 사용되지 않는 오래된 브라우저(예: Netscape Navigator 4 및 Internet Explorer 5)를 지원하기 위해 사용되었습니다. 표준 doctype 선언을 사용하는 것이 좋습니다.

---

## 문서의 'head'

HTML 문서의 'head' 영역에는 웹 페이지에 대한 중요한 정보, 즉 [메타데이터](https://developer.mozilla.org/docs/Web/HTML/Element/meta)가 포함됩니다. 우리의 경우, 이 페이지가 렌더링될 웹 서버에 다음 네 가지를 전달합니다:

- 페이지 제목
- 페이지 메타데이터:
    - 페이지에서 사용되는 문자 인코딩을 나타내는 'character set'
    - 브라우저 정보, 특히 IE=edge 브라우저 지원을 나타내는 `x-ua-compatible`
    - 페이지가 로드될 때 뷰포트가 어떻게 동작해야 하는지에 대한 정보. 뷰포트를 초기 스케일 1로 설정하면 페이지가 처음 로드될 때의 줌 수준을 제어합니다.

### 작업

열고 닫는 `<html>` 태그 사이에 'head' 블록을 추가하세요.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ `<meta name="viewport" content="width=600">`와 같이 뷰포트 메타 태그를 설정하면 어떤 일이 발생할까요? [뷰포트](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag)에 대해 더 읽어보세요.

---

## 문서의 `body`

### HTML 태그

HTML에서는 .html 파일에 태그를 추가하여 웹 페이지의 요소를 만듭니다. 각 태그는 일반적으로 `<p>hello</p>`와 같이 열고 닫는 태그를 가집니다. `<html>` 태그 쌍 안에 `<body>` 태그를 추가하여 인터페이스의 본문을 만드세요. 이제 마크업은 다음과 같이 보입니다:

### 작업

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

이제 페이지를 구성하기 시작할 수 있습니다. 일반적으로 `<div>` 태그를 사용하여 페이지의 개별 요소를 만듭니다. 우리는 이미지를 포함할 `<div>` 요소를 시리즈로 생성할 것입니다.

### 이미지

닫는 태그가 필요 없는 HTML 태그 중 하나는 `<img>` 태그입니다. 이 태그는 `src` 요소를 포함하여 페이지가 항목을 렌더링하는 데 필요한 모든 정보를 제공합니다.

앱에 `images`라는 폴더를 만들고, [소스 코드 폴더](../../../../3-terrarium/solution/images)에 있는 모든 이미지를 추가하세요. (식물 이미지 14개가 있습니다.)

### 작업

`<body></body>` 태그 사이에 두 개의 열로 식물 이미지를 추가하세요:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> 참고: Spans vs. Divs. Divs는 '블록' 요소로 간주되고, Spans는 '인라인' 요소로 간주됩니다. 이 div를 span으로 변환하면 어떻게 될까요?

이 마크업으로 식물이 화면에 표시됩니다. 아직 CSS로 스타일링되지 않았기 때문에 보기 좋지 않지만, 다음 강의에서 스타일을 추가할 것입니다.

각 이미지에는 이미지가 보이지 않거나 렌더링되지 않을 경우에도 나타나는 alt 텍스트가 있습니다. 이는 접근성을 위해 포함해야 하는 중요한 속성입니다. 접근성에 대해 더 배우려면 이후 강의를 참고하세요. 지금은 alt 속성이 느린 연결, src 속성의 오류, 또는 화면 읽기 프로그램을 사용하는 경우와 같은 이유로 사용자가 이미지를 볼 수 없을 때 대체 정보를 제공한다는 점을 기억하세요.

✅ 각 이미지에 동일한 alt 태그가 있는 것을 확인했나요? 이것이 좋은 관행일까요? 왜 그렇지 않을까요? 이 코드를 개선할 수 있을까요?

---

## 의미론적 마크업

일반적으로 HTML을 작성할 때 의미 있는 '의미론'을 사용하는 것이 좋습니다. 이것은 무엇을 의미할까요? 이는 데이터 또는 상호작용 유형을 나타내도록 설계된 HTML 태그를 사용하는 것을 의미합니다. 예를 들어, 페이지의 주요 제목 텍스트는 `<h1>` 태그를 사용해야 합니다.

열리는 `<body>` 태그 바로 아래에 다음 줄을 추가하세요:

```html
<h1>My Terrarium</h1>
```

헤더를 `<h1>`로, 정렬되지 않은 목록을 `<ul>`로 렌더링하는 것과 같은 의미론적 마크업을 사용하면 화면 읽기 프로그램이 페이지를 탐색하는 데 도움이 됩니다. 일반적으로 버튼은 `<button>`으로 작성되어야 하고, 목록은 `<li>`로 작성되어야 합니다. 특별히 스타일링된 `<span>` 요소에 클릭 핸들러를 추가하여 버튼을 모방하는 것이 _가능_하지만, 비활성화된 사용자가 페이지에서 버튼이 어디에 있는지 확인하고 상호작용할 수 있도록 기술을 사용하는 것이 더 좋습니다. 이러한 이유로 가능한 한 의미론적 마크업을 사용하도록 노력하세요.

✅ 화면 읽기 프로그램이 [웹 페이지와 상호작용하는 방식](https://www.youtube.com/watch?v=OUDV1gqs9GA)을 확인하세요. 의미론적 마크업이 없으면 사용자가 왜 좌절할 수 있는지 알 수 있나요?

## 테라리움

인터페이스의 마지막 부분은 스타일링되어 테라리움을 생성할 마크업을 추가하는 것입니다.

### 작업:

마지막 `</div>` 태그 위에 다음 마크업을 추가하세요:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ 화면에 이 마크업을 추가했지만 아무것도 렌더링되지 않는 이유는 무엇일까요?

---

## 🚀도전 과제

HTML에는 여전히 재미있게 사용할 수 있는 '오래된' 태그들이 있지만, [이러한 태그](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)와 같은 사용 중단된 태그는 마크업에서 사용하지 않는 것이 좋습니다. 그래도 오래된 `<marquee>` 태그를 사용하여 h1 제목을 수평으로 스크롤하도록 만들 수 있나요? (만약 사용했다면 나중에 제거하는 것을 잊지 마세요)

## 강의 후 퀴즈

[강의 후 퀴즈](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/16)

## 복습 및 자기 학습

HTML은 오늘날 웹을 구축하는 데 도움을 준 '검증된' 빌딩 블록 시스템입니다. 오래된 태그와 새로운 태그를 공부하며 그 역사를 조금 배워보세요. 어떤 태그가 사용 중단되었고 어떤 태그가 추가되었는지 알아낼 수 있나요? 미래에는 어떤 태그가 도입될까요?

웹 및 모바일 장치를 위한 사이트 구축에 대해 더 알아보세요: [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## 과제

[HTML 연습: 블로그 목업 만들기](assignment.md)

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.