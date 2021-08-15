# 접근 가능한 웹 페이지 생성하기

![All About Accessibility](/sketchnotes/webdev101-a11y.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 강의 전 퀴즈
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/5?loc=ko)

> 웹의 힘은 보편성에 있습니다. 장애에 관계없이 모든 사람이 접근하는 것은 필수 요소입니다.
>
> \- Sir Timothy Berners-Lee, W3C Director and inventor of the World Wide Web

이 인용문은 접근 가능한 웹 사이트를 만든다는 것의 중요성을 완벽하게 강조합니다. 모든 사람이 접근할 수 없는 애플리케이션은 정의에 따라 제외됩니다. 웹 개발자로서 우리는 항상 접근성을 염두에 두어야합니다. 처음부터 이 곳에 초점을 두면 모든 사람이 자신이 만든 페이지에 접근할 수 있도록 하는 데 도움이 됩니다. 이 강의에서는 웹 어셋에 접근할 수 있는지 확인하는 데 도움이 되는 도구와 접근성을 염두에 두고 빌드하는 방법에 대해 알아 봅니다.

## 사용 도구

### 스크린 리더

가장 잘 알려진 접근성 도구 중 하나는 스크린 리더입니다.

[스크린 리더](https://en.wikipedia.org/wiki/Screen_reader)는 시각 장애가 있는 사람들을 위해 일반적으로 사용되는 클라이언트입니다. 브라우저에서 공유하려는 정보를 올바르게 전달하는지 확인하는 데 시간을 할애 할 때 스크린 리더도 동일한 작업을 수행하도록 해야합니다.

가장 기본적인 스크린 리더는 페이지를 위에서 아래로 소리내며 읽습니다. 페이지가 모두 텍스트인 경우 리더는 브라우저와 유사한 방식으로 정보를 전달합니다. 물론 웹 페이지는 문자 그대로가 아닌 텍스트가 있습니다. 여기에는 링크, 그래픽, 색상 및 기타 시각적 구성 요소가 포함됩니다. 스크린 리더가 정보를 올바르게 읽을 수 있도록 주의를 기울여야 합니다.

모든 웹 개발자는 스크린 리더에 익숙해야합니다. 위에서 강조한 것처럼 사용자가 활용할 클라이언트입니다. 브라우저가 작동하는 방식에 익숙한 것과 마찬가지로 스크린 리더가 작동하는 방식을 배워야합니다. 다행히 스크린 리더는 대부분의 운영체제에 내장되어 있으며, 많은 브라우저에는 스크린 리더를 모방하는 확장이 포함되어 있습니다.

✅ 스크린 리더 브라우저 확장이나 도구를 시도해보세요.[JAWS](https://webaim.org/articles/jaws/)는 윈도우에서만 작동합니다. 브라우저에는 이러한 목적으로 사용할 수 있는 내장 도구도 있습니다; [these accessibility-focused Edge browser tools](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features) 확인합니다.

### Contrast checkers

웹 사이트의 색상은 색맹 혹은 저대비 색상을 보기 어려운 사람들의 요구에 맞게 신중하게 선택해야 합니다.

✅ [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US)와 같은 브라우저 확장 프로그램을 사용하여 어떤 색상을 쓰는 지 웹 사이트를 테스트합니다. 무엇을 배울 수 있나요?

### Lighthouse

브라우저의 개발자 도구에서 Lighthouse 도구를 찾을 수 있습니다. 이 도구는 웹 사이트의 접근성(기타 분석)을 처음으로 파악하는 데 중요합니다. Lighthouse에만 의존하지 않는 것은 중요하지만, 100점을 기준으로 보면 매우 유용합니다.

✅ 브라우저의 개발자 도구 패널에서 Lighthouse를 찾아 모든 사이트에서 분석을 실행하세요. 무엇을 발견했나요?

## 접근성을 위한 디자인

접근성은 비교적 큰 주제입니다. 도움을 주기 위한 다양한 리소스들이 있습니다.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

접근 가능한 사이트를 만드는 모든 사항을 다룰 수 없지만, 이는 구현하려는 핵심 원칙 중 일부입니다. 처음부터 접근 가능한 페이지를 기획하는 것은 접근할 수 있도록 기존 페이지로 돌아가는 것보다 **항상** 쉽습니다.

## 좋은 디스플레이 원칙

### 색상 안전 팔레트

사람들은 세상을 다른 방식으로 봅니다. 여기에는 색상도 포함됩니다. 사이트에 대한 색상 스키마를 선택할 때 모든 사람이 접근할 수 있는지 확인해야 합니다. [색상 팔레트를 생성하는 한 가지 훌륭한 도구는 Color Safe](http://colorsafe.co/)입니다.

✅ 색상을 사용할 때 매우 문제가 있는 웹 사이트를 식별하십시오. 왜 해야될까요?

### 텍스트를 적절하게 강조하기

색상, [font weight](https://developer.mozilla.org/docs/Web/CSS/font-weight) 또는 기타 [text decoration](https://developer.mozilla.org/docs/Web/CSS/text-decoration)으로 텍스트를 강조하는 것은 본질적으로 스크린 리더에 중요하다고 알리지 않습니다. 단어는 키워드이기 때문에 굵게 표시되었거나 첫 번째 단어 혹은 디자이너가 굵게 표시해야한다고 결정했기 때문입니다.

특정 구문을 강조 표시해야 하는 경우에는, `<strong>` 또는 `<em>` 요소를 사용하세요. 이는 스크린 리더에 해당 항목이 중요함을 나타냅니다.

### 올바른 HTML 사용하기

CSS와 JavaScript를 사용하면 많은 요소가 모든 유형를 제어할 수 있는 것처럼 보일 수 있습니다. `<span>` 은`<button>` 을 만드는 데 사용할 수 있으며, `<b>` 는 하이퍼 링크가 될 수 있습니다. 스타일링이 더 쉽다고 생각될 수 있지만, 스크린 리더에게는 당황스럽습니다. 페이지에 컨트롤을 만들 때는 적절한 HTML을 사용하십시오. 하이퍼 링크를 원하면 `<a>` 를 사용하세요. 올바른 제어를 위해 올바른 HTML을 사용하는 것은 Semantic HTML이라고 의미합니다.

✅ 웹 사이트로 이동하여 디자이너와 개발자가 HTML을 올바르게 사용하고 있는지 확인하십시오. 링크의 역할을 하는 버튼을 찾을 수 있나요? Hint: 기반 코드를 보려면 브라우저에서 마우스 우측 버튼을 클릭하고 'View Page Source'를 선택하십시오.

### 좋은 시각적 단서를 사용하기

CSS는 페이지에 있는 모든 요소의 형태를 완벽하게 제어합니다. 윤곽선없이 텍스트 상자를 만들거나 밑줄없이 하이퍼 링크를 만들 수 있습니다. 불행히도 이러한 단서를 제거하면 그 단서를 의존하는 사람이 제어 유형을 인식하는 것이 더 어려워질 수 있습니다.

## 링크 텍스트의 중요성

하이퍼 링크는 웹 탐색의 핵심 기능입니다. 결과적으로 스크린 리더가 링크를 제대로 읽을 수 있도록 한다면 모든 사용자가 사이트를 탐색할 수 있습니다.

### 스크린 리더 및 링크

예상대로 스크린 리더는 페이지 내부의 다른 텍스트를 읽는 것과 같은 방식으로 링크 텍스트를 읽습니다. 이를 염두하고 아래 설명된 텍스트는 완벽하게 수용 가능하다고 느낄 수 있습니다.

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. [Click here](https://en.wikipedia.org/wiki/Little_penguin) for more information.

> The little penguin, sometimes known as the fairy penguin, is the smallest penguin in the world. Visit https://en.wikipedia.org/wiki/Little_penguin for more information.

> **NOTE** 읽으려고 한다면, 위와 같은 링크는 **절대** 만들지 않아야 합니다.

다시 말하지만, 스크린 리더는 브라우저마다 기능이 다른 인터페이스입니다.

### URL 사용 문제점

스크린 리더는 텍스트를 읽습니다. 텍스트에 URL이 표시되면, 스크린 리더가 URL을 읽습니다. 일반적으로 URL은 의미있는 정보를 전달하지 않으며, 불편하게 들릴 수 있습니다. 스마트폰에서 URL이 포함된 문자 메시지를 음성으로 읽은 적이 있다면 이 문제를 경험했을 수 있습니다.

### "click here"의 문제점

스크린 리더는 또한 시력이 있는 사람이 페이지에서 링크를 찾는 것과 동일한 방식으로 페이지의 하이퍼 링크만 읽을 수 있습니다. 링크 텍스트가 항상 "click here"인 경우 사용자는 "click here, click here, click here, click here, click here, ..." 라는 소리를 들을 수 있습니다. 이는 모든 링크를 서로 구별할 수 없습니다.

### 좋은 링크 텍스트

좋은 링크 텍스트는 링크의 다른 측면에 있는 내용을 간략하게 설명합니다. 작은 펭귄에 대해 이야기하는 예시에서 링크는 종에 대한 Wikipedia 페이지로 연결됩니다. *little penguins* 라는 문구는 누군가가 링크를 클릭하면 무엇을 배울 수 있는지를 명확하게 해주기 때문에 완벽한 링크 텍스트가 됩니다.-little penguins.

> The [little penguin](https://en.wikipedia.org/wiki/Little_penguin), sometimes known as the fairy penguin, is the smallest penguin in the world.

✅ 모호한 연결 전략을 사용하는 페이지를 찾으려면 몇 분 동안 웹을 검색하십시오. 연결이 더 좋은 다른 사이트와 비교하십시오. 무엇을 배울 수 있나요?

#### 검색 엔진 노트

모든 사람이 사이트에 접근할 수 있도록 하면 추가 보너스로 검색 엔진이 사이트를 탐색하는데도 도움이 됩니다. 검색 엔진은 링크 텍스트를 사용하여 페이지 주제를 학습합니다. 따라서 좋은 링크 텍스트를 사용하면 모두에게 도움이 됩니다!

### ARIA

다음 페이지를 상상해보시기 바랍니다:

| Product      | Description        | Order        |
| ------------ | ------------------ | ------------ |
| Widget       | [Description]('#') | [Order]('#') |
| Super widget | [Description]('#') | [Order]('#') |

이 예시에서는 설명 텍스트와 순서를 복사하는 것이 브라우저를 사용하는 사람에게 의미가 있습니다. 그러나 스크린 리더를 사용하는 사람은 문맥없이 반복되는 *설명* 및 *순서* 라는 단어만 듣게됩니다.

이러한 유형의 시나리오를 지원하기 위해 HTML은 [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)라는 속성 집합을 지원합니다. 이러한 속성을 사용하면 스크린 리더에 추가 정보를 제공할 수 있습니다.

> **NOTE**: HTML의 여러 측면과 마찬가지로, 브라우저 및 스크린 리더 지원은 다를 수 있습니다. 그러나 대부분의 주요 클라이언트는 ARIA 속성을 지원합니다.

페이지 형식이 허용하지 않는 경우에는 `aria-label`을 사용하여 링크에 설명할 수 있습니다. 위젯에 대한 설명은 다음과 같이 설정할 수 있습니다

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ 일반적으로, 위에서 설명한 시맨틱 마크업을 사용하는 것은 ARIA의 사용을 대체하지만, 때때로 다양한 HTML 위젯에 해당하는 시맨틱이 없습니다. 좋은 예는 Progressbar입니다. 진행률 표시줄에 해당하는 HTML이 없으므로 적절한 역할 및 aria 값을 사용하여 일반 `<div>`를 식별합니다. [AMDN documentation on ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)에 더 유용한 정보가 포함되어 있습니다.

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
</div>
```

## 이미지

스크린 리더는 이미지에 있는 내용을 자동으로 읽을 수 없습니다. 이미지에 접근할 수 있는지 확인하는 데 많은 작업이 필요하지 않습니다. 바로 `alt` 속성이 끝입니다. 모든 이미지에는 이미지를 설명하는 `alt`가 있어야합니다.

✅ 예상대로, 검색 엔진은 이미지의 내용을 이해할 수 없습니다. 그래서 대체 텍스트를 사용합니다. 다시 한 번, 페이지에 접근할 수 있는지 확인하면 추가 보너스가 제공됩니다!

## 키보드

일부 사용자는 마우스 또는 트랙패드를 사용할 수 없으며, 대신 키보드로 의존하여 한 요소에서 다음 요소로 이동합니다. 사용자가 문서를 아래로 이동할 때 키보드가 각 요소에 접근할 수 있도록 웹 사이트에서 콘텐츠를 논리적 순서로 표시하는 것이 중요합니다. 시맨틱 마크업으로 웹 페이지를 만들고 CSS를 사용하여 시각적 레이아웃 스타일을 지정하는 경우, 사이트에서 키보드로 탐색할 수 있어야 하지만, 이 사항은 수동으로 테스트하는 것이 중요합니다. [keyboard navigation strategies](https://webaim.org/techniques/keyboard/)에 대해 자세히 알아보세요.

✅ 웹 사이트로 이동하여 탭 키만 사용하여 탐색해보십시오. 작동하는 것과 작동하지 않는 것은 무엇입니까? 왜 그럴까요?

## 요약

일부가 접근할 수 있는 웹은 진정한 'world-wide web'이 아닙니다. 만든 사이트에 접근할 수 있도록 하는 가장 좋은 방법은 처음부터 접근성 모범 사례를 통합하는 것입니다. 추가 단계가 포함되어 있지만 이러한 기술을 워크 플로우에 통합하면 만드는 모든 페이지에 접근할 수 있습니다.

---

## 🚀 도전

이 HTML을 가져와서 학습한 내용에 따라 가능한 하나의 접근을 할 수 있도록 다시 작성하십시오.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## 강의 후 퀴즈
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/6?loc=ko)

## 리뷰 & 자기주도 학습

많은 정부 기관에는 접근성 요구사항에 관한 법률이 있습니다. 자신의 나라에 해당하는 접근성 법률을 읽어보십시오. 보장되거나 안되는 항목은 무엇입니까? [this government web site](https://accessibility.blog.gov.uk/) 예시 입니다.

## 과제
 
[Analyze a non-accessible web site](../assignment.md)

크레딧: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument
