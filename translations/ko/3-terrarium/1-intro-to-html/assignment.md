<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T15:35:44+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "ko"
}
-->
# HTML 실습 과제: 블로그 목업 만들기

## 학습 목표

HTML 지식을 적용하여 완전한 블로그 홈페이지 구조를 설계하고 코딩합니다. 이 실습 과제는 시맨틱 HTML 개념, 접근성 모범 사례, 그리고 전문적인 코드 조직 기술을 강화하여 웹 개발 여정 전반에 걸쳐 활용할 수 있도록 합니다.

**이 과제를 완료하면 다음을 할 수 있습니다:**
- 코딩 전에 웹사이트 레이아웃 계획 연습
- 시맨틱 HTML 요소를 적절히 적용
- 접근 가능하고 잘 구성된 마크업 생성
- 주석과 조직을 통한 전문적인 코딩 습관 개발

## 프로젝트 요구 사항

### 1부: 설계 계획 (시각적 목업)

**블로그 홈페이지의 시각적 목업을 생성하세요. 목업에는 다음이 포함되어야 합니다:**
- 사이트 제목과 내비게이션을 포함한 헤더
- 최소 2-3개의 블로그 게시물 미리보기가 있는 메인 콘텐츠 영역
- 추가 정보(소개 섹션, 최근 게시물, 카테고리)가 있는 사이드바
- 연락처 정보 또는 링크가 있는 푸터

**목업 생성 옵션:**
- **손으로 그린 스케치**: 종이와 연필을 사용하여 디자인한 후 사진 촬영 또는 스캔
- **디지털 도구**: Figma, Adobe XD, Canva, PowerPoint 또는 기타 그리기 앱
- **와이어프레임 도구**: Balsamiq, MockFlow 또는 유사 와이어프레밍 소프트웨어

**목업 섹션에 사용할 HTML 요소를 라벨로 붙이세요** (예: "Header - `<header>`", "Blog Posts - `<article>`").

### 2부: HTML 요소 계획

**목업의 각 섹션을 특정 HTML 요소에 매핑하는 목록을 만드세요:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**포함해야 할 필수 요소들:**
HTML에는 다음 목록에서 최소 10개의 다른 시맨틱 요소가 포함되어야 합니다:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 3부: HTML 구현

**다음 표준에 따라 블로그 홈페이지를 코딩하세요:**

1. **문서 구조**: 적절한 DOCTYPE, html, head, body 요소 포함
2. **시맨틱 마크업**: HTML 요소를 해당 목적에 맞게 사용
3. **접근성**: 이미지에 적절한 alt 텍스트 포함, 의미 있는 링크 텍스트 사용
4. **코드 품질**: 일관된 들여쓰기와 의미 있는 주석 사용
5. **콘텐츠**: 현실적인 블로그 콘텐츠 포함 (플레이스홀더 텍스트 사용 가능)

**샘플 HTML 구조:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### 4부: 반성문

**다음 사항을 포함하여 간단한 반성문(3-5문장)을 작성하세요:**
- 가장 자신 있게 사용한 HTML 요소는 무엇인가요?
- 기획이나 코딩 과정에서 어떤 어려움을 겪었나요?
- 시맨틱 HTML이 콘텐츠 정리에 어떻게 도움이 되었나요?
- 다음 HTML 프로젝트에서 달리 하고 싶은 점은 무엇인가요?

## 제출 체크리스트

**제출 전 다음 사항을 확인하세요:**
- [ ] HTML 요소가 라벨로 붙은 시각적 목업
- [ ] 적절한 문서 구조를 가진 완성된 HTML 파일
- [ ] 최소 10개의 다양한 시맨틱 HTML 요소가 적절히 사용됨
- [ ] 코드 구조를 설명하는 의미 있는 주석
- [ ] 유효한 HTML 구문(브라우저에서 테스트)
- [ ] 위 질문에 답한 반성문

## 평가 기준표

| 기준 | 뛰어남 (4) | 능숙함 (3) | 발전 중 (2) | 시작 단계 (1) |
|----------|---------------|----------------|----------------|---------------|
| **기획 및 설계** | 레이아웃과 HTML 시맨틱 구조에 대한 명확한 이해를 보여주는 상세하고 잘 라벨링된 목업 | 대부분의 섹션에 적절히 라벨을 붙인 명확한 목업 | 일부 라벨링이 있는 기본 목업, 일반적 이해 보여줌 | 불명확하거나 최소한의 목업, 섹션 구분 부족 |
| **시맨틱 HTML 사용** | 10개 이상의 시맨틱 요소를 적절히 사용, HTML 구조와 접근성에 대한 깊은 이해 | 8-9개의 시맨틱 요소를 올바르게 사용, 시맨틱 마크업에 대한 좋은 이해 | 6-7개의 시맨틱 요소 사용, 적절한 사용에 다소 혼란 | 6개 미만의 요소 사용 또는 시맨틱 요소 오용 |
| **코드 품질 및 조직** | 매우 잘 조직된 코드, 일관된 들여쓰기와 포괄적 주석, 완벽한 HTML 문법 | 잘 조직된 코드, 적절한 들여쓰기, 유용한 주석, 올바른 문법 | 대부분 조직된 코드, 다소의 주석과 경미한 문법 오류 | 조직 부실, 주석 최소, 다수의 문법 오류 |
| **접근성 및 모범 사례** | 우수한 접근성 고려, 의미 있는 alt 텍스트, 올바른 헤딩 계층, 현대 HTML 모범 사례 준수 | 좋은 접근성 기능, 적절한 헤딩 및 alt 텍스트 사용, 대부분의 모범 사례 따름 | 일부 접근성 고려, 기본 alt 텍스트 및 헤딩 구조 | 제한된 접근성, 부적절한 헤딩 구조, 모범 사례 미준수 |
| **반성과 학습** | HTML 개념에 대한 깊은 이해와 학습 과정에 대한 사려 깊은 분석을 보여주는 통찰력 있는 반성 | 주요 개념 이해와 일부 학습 인식을 보여주는 좋은 반성 | 제한된 통찰력을 가진 기본적인 반성 | 반성 부족 또는 누락, 학습 개념 이해 부족 |

## 학습 자료

**필수 참고 자료:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - 모든 HTML 요소에 대한 완벽 가이드
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - 시맨틱 마크업 이해하기
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - 접근 가능한 웹 콘텐츠 만들기
- [HTML Validator](https://validator.w3.org/) - HTML 구문 검사

**성공을 위한 전문가 팁:**
- 코딩 전에 목업부터 시작하세요
- 브라우저 개발자 도구로 HTML 구조를 검사하세요
- CSS 없이도 다양한 화면 크기에서 페이지를 테스트하세요
- HTML을 소리내어 읽어 구조가 논리적인지 확인하세요
- 스크린 리더가 페이지 구조를 어떻게 해석할지 고려하세요

> 💡 **기억하세요**: 이 과제는 HTML 구조와 시맨틱에 중점을 둡니다. 시각적 스타일링은 걱정하지 마세요 – 그건 CSS의 역할입니다! 페이지가 단순해 보일 수 있지만, 잘 구조화되고 의미 있어야 합니다.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확한 내용이 포함될 수 있음을 알려드립니다. 원문이 작성된 언어의 문서를 권위 있는 출처로 간주하시기 바랍니다. 중요한 정보의 경우 전문적인 인력에 의한 번역을 권장합니다. 본 번역문의 사용으로 인해 발생하는 모든 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->