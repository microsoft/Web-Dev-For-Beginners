<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2026-01-06T15:40:49+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "ko"
}
-->
# CSS 리팩토링 과제

## 목표

테라리움 프로젝트를 현대적인 CSS 레이아웃 기법을 사용하도록 변환하세요! 현재 절대 위치 지정 방식을 리팩토링하여 유지보수가 쉽고 반응형 디자인을 구현하기 위해 **Flexbox** 또는 **CSS Grid**를 사용하세요. 이 과제는 테라리움의 시각적 매력을 유지하면서 최신 CSS 표준을 적용하는 도전을 제공합니다.

언제 어떤 레이아웃 방식을 사용하는지 이해하는 것은 현대 웹 개발에 있어 중요한 기술입니다. 이 연습은 전통적인 위치 지정 기법과 현대적인 CSS 레이아웃 시스템 사이를 연결합니다.

## 과제 지침

### 1단계: 분석 및 계획
1. **현재 테라리움 코드를 검토하세요** - 절대 위치 지정을 사용 중인 요소를 식별합니다.
2. **레이아웃 방식을 선택하세요** - Flexbox 또는 CSS Grid 중 디자인 목표에 더 적합한 방식을 결정합니다.
3. **새로운 레이아웃 구조를 스케치하세요** - 컨테이너와 식물 요소들이 어떻게 구성될지 계획합니다.

### 2단계: 구현
1. **테라리움 프로젝트의 새 버전을 별도의 폴더에 만드세요.**
2. **선택한 레이아웃 방식을 지원하도록 HTML 구조를 필요에 따라 업데이트하세요.**
3. **절대 위치 지정 대신 Flexbox 또는 CSS Grid를 사용하도록 CSS를 리팩토링하세요.**
4. **시각적 일관성 유지** - 식물과 테라리움 병이 동일한 위치에 나타나도록 합니다.
5. **반응형 동작 구현** - 다양한 화면 크기에 부드럽게 적응하는 레이아웃이어야 합니다.

### 3단계: 테스트 및 문서화
1. **크로스 브라우저 테스트** - Chrome, Firefox, Edge, Safari에서 디자인이 잘 작동하는지 확인하세요.
2. **반응형 테스트** - 모바일, 태블릿, 데스크톱 화면 크기에서 레이아웃을 점검하세요.
3. **문서화** - CSS에 레이아웃 선택 이유를 주석으로 추가하세요.
4. **스크린샷** - 다양한 브라우저와 화면 크기에서 테라리움을 캡처하세요.

## 기술 요구사항

### 레이아웃 구현
- **하나 선택**: Flexbox 또는 CSS Grid 중 하나를 구현하세요 (같은 요소에는 동시에 사용하지 않습니다).
- **반응형 디자인**: 고정 픽셀 대신 상대 단위(`rem`, `em`, `%`, `vw`, `vh`)를 사용하세요.
- **접근성**: 적절한 시맨틱 HTML 구조와 alt 텍스트를 유지하세요.
- **코드 품질**: 일관된 명명 규칙을 사용하고 CSS를 논리적으로 구성하세요.

### 포함할 최신 CSS 기능
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### 브라우저 지원 요구사항
- **Chrome/Edge**: 최신 2버전
- **Firefox**: 최신 2버전  
- **Safari**: 최신 2버전
- **모바일 브라우저**: iOS Safari, Chrome Mobile

## 제출물

1. **개선된 시맨틱 구조의 업데이트된 HTML 파일**
2. **현대 레이아웃 기법을 사용한 리팩토링된 CSS 파일**
3. **크로스 브라우저 호환성을 보여주는 스크린샷 모음:**
   - 데스크톱 뷰 (1920x1080)
   - 태블릿 뷰 (768x1024)
   - 모바일 뷰 (375x667)
   - 최소 2가지 다른 브라우저
4. **README.md 파일**에 다음 내용 문서화:
   - 선택한 레이아웃(Flexbox vs Grid) 및 이유
   - 리팩토링 중 마주친 어려움
   - 브라우저 호환성 관련 참고사항
   - 코드 실행 방법 안내

## 평가 기준표

| 기준 | 우수 (4) | 적절 (3) | 개발 중 (2) | 시작 (1) |
|----------|---------------|----------------|---------------|---------------|
| **레이아웃 구현** | 고급 기능을 포함한 Flexbox/Grid 완벽 사용; 완전 반응형 | 올바른 구현 및 우수한 반응형 동작 | 기본 구현, 경미한 반응형 문제 | 미완성 또는 잘못된 레이아웃 구현 |
| **코드 품질** | 깔끔하고 잘 조직된 CSS, 의미 있는 주석 및 일관된 명명 | 좋은 조직화, 일부 주석 포함 | 적절한 조직, 최소한의 주석 | 조직이 미흡하고 이해하기 어려움 |
| **크로스 브라우저 호환성** | 모든 필수 브라우저 간 완벽한 일관성, 스크린샷 포함 | 호환성 양호, 경미한 차이 문서화 | 일부 호환성 문제 있으나 기능에는 영향 없음 | 심각한 호환성 문제 또는 테스트 누락 |
| **반응형 디자인** | 뛰어난 모바일 우선 접근, 부드러운 브레이크포인트 | 우수한 반응형 동작, 적절한 브레이크포인트 | 기본 반응형 기능에 일부 레이아웃 문제 | 제한적이거나 깨진 반응형 동작 |
| **문서화** | 상세한 설명과 인사이트가 담긴 포괄적 README | 모든 필수 요소를 포함한 좋은 문서화 | 최소한의 설명을 담은 기본 문서화 | 불완전하거나 문서화 누락 |

## 유용한 자료

### 레이아웃 방법 가이드
- 📖 [Flexbox 완전 가이드](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid 완전 가이드](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - 적합한 도구 선택하기](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### 브라우저 테스트 도구
- 🛠️ [브라우저 개발자 도구 반응형 모드](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - 기능 지원 현황](https://caniuse.com/)
- 🛠️ [BrowserStack - 크로스 브라우저 테스트](https://www.browserstack.com/)

### 코드 품질 도구
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM 대비 체크 도구](https://webaim.org/resources/contrastchecker/)

## 추가 도전 과제

🌟 **고급 레이아웃**: 디자인의 다른 부분에 Flexbox와 Grid 둘 다 구현  
🌟 **애니메이션 통합**: 새 레이아웃과 함께 작동하는 CSS 전환 또는 애니메이션 추가  
🌟 **다크 모드**: CSS 커스텀 프로퍼티 기반 테마 스위처 구현  
🌟 **컨테이너 쿼리**: 컴포넌트 수준 반응형을 위한 최신 컨테이너 쿼리 기법 사용  

> 💡 **기억하세요**: 단순히 작동하는 것이 목표가 아니라, 선택한 레이아웃 방식이 왜 이 특정 디자인 과제에 최선의 해결책인지 이해하는 것이 중요합니다!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 있을 수 있음을 유의해 주시기 바랍니다. 원문은 해당 문서의 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우 전문적인 인간 번역을 권장합니다. 본 번역 사용으로 인해 발생하는 어떠한 오해나 잘못된 해석에 대해서도 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->