# AGENTS.md

## 프로젝트 개요

이 저장소는 웹 개발 기초를 초보자에게 가르치기 위한 교육 과정 저장소입니다. 이 교육 과정은 Microsoft Cloud Advocates가 개발한 12주간의 종합 코스로, JavaScript, CSS, HTML을 다루는 24개의 실습 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장, 우주 게임, 은행 앱, 코드 에디터, AI 챗 어시스턴트
- **인터랙티브 퀴즈**: 각 3문항으로 구성된 48개의 퀴즈(수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상 언어의 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육 저장소
- 각 수업 폴더에는 README, 코드 예제, 솔루션 포함
- 독립 실행형 프로젝트는 별도의 디렉터리에 위치(quiz-app, 다양한 수업 프로젝트)
- GitHub Actions(co-op-translator)를 이용한 번역 시스템
- Docsify를 통한 문서 서비스 및 PDF로 제공

## 설정 명령어

이 저장소는 주로 교육 콘텐츠 열람용입니다. 특정 프로젝트 작업 시:

### 메인 저장소 설정

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 퀴즈 앱 설정 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 개발 서버 시작
npm run build      # 프로덕션용 빌드
npm run lint       # ESLint 실행
```

### 은행 프로젝트 API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API 서버 시작
npm run lint       # ESLint 실행
npm run format     # Prettier로 포맷팅
```

### 브라우저 확장 프로젝트

```bash
cd 5-browser-extension/solution
npm install
# 브라우저별 확장 프로그램 로딩 지침을 따르십시오
```

### 우주 게임 프로젝트

```bash
cd 6-space-game/solution
npm install
# 브라우저에서 index.html을 열거나 Live Server를 사용하세요
```

### 챗 프로젝트 (Python 백엔드)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 환경 변수를 설정하세요
python api.py
```

## 개발 워크플로우

### 콘텐츠 기여자용

1. 저장소를 GitHub 계정에 **포크**하기
2. 로컬로 **포크 복제**하기
3. 변경을 위한 **새 브랜치 생성**
4. 수업 콘텐츠 또는 코드 예제 수정
5. 관련 프로젝트 디렉터리에서 코드 변경 사항 테스트
6. 기여 지침에 따라 풀 리퀘스트 제출

### 학습자용

1. 저장소 포크 또는 클론
2. 수업 디렉터리를 순차적으로 탐색
3. 각 수업의 README 파일 읽기
4. https://ff-quizzes.netlify.app/web/에서 수업 전 퀴즈 완료
5. 수업 폴더의 코드 예제 따라하기
6. 과제 및 도전 과제 완료
7. 수업 후 퀴즈 응시

### 라이브 개발

- **문서**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉터리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 각 API 디렉터리에서 `npm start` 실행

## 테스트 지침

### 퀴즈 앱 테스트

```bash
cd quiz-app
npm run lint       # 코드 스타일 문제를 확인하세요
npm run build      # 빌드가 성공하는지 확인하세요
```

### 은행 API 테스트

```bash
cd 7-bank-project/api
npm run lint       # 코드 스타일 문제 확인
node server.js     # 서버가 오류 없이 시작하는지 확인
```

### 일반 테스트 접근법

- 이 저장소는 포괄적인 자동화 테스트가 없습니다
- 수동 테스트는 다음에 중점:
  - 코드 예제 오류 없이 실행되는지
  - 문서 내 링크가 제대로 작동하는지
  - 프로젝트 빌드가 성공적으로 완료되는지
  - 예제가 베스트 프랙티스를 따르는지

### 제출 전 점검 사항

- package.json이 있는 디렉터리에서 `npm run lint` 실행
- 마크다운 링크 유효성 검증
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역 구조가 제대로 유지되는지 확인

## 코드 스타일 가이드라인

### JavaScript

- 최신 ES6+ 문법 사용
- 프로젝트별 표준 ESLint 설정 준수
- 교육 용이성을 위한 의미 있는 변수 및 함수 이름 사용
- 학습자 이해를 돕는 주석 추가
- 구성된 경우 Prettier로 코드 포맷팅 수행

### HTML/CSS

- 의미론적 HTML5 요소 사용
- 반응형 디자인 원칙 적용
- 명확한 클래스 명명 규칙
- 학습자 이해를 위한 CSS 기법 주석

### Python

- PEP 8 스타일 가이드라인 준수
- 명확하고 교육적인 코드 예제
- 학습에 도움이 되는 경우 타입 힌트 사용

### 마크다운 문서

- 명확한 제목 계층 구조
- 언어 명시가 있는 코드 블록
- 추가 자료 링크 제공
- `images/` 디렉터리 내 스크린샷 및 이미지 포함
- 접근성을 위한 이미지 Alt 텍스트 제공

### 파일 구성

- 순차 번호가 있는 수업 폴더 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트에 `solution/` 및 종종 `start/` 또는 `your-work/` 폴더 포함
- 수업별 `images/` 폴더에 이미지 저장
- `translations/{language-code}/` 구조로 번역 파일 관리

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

quiz-app은 Azure Static Web Apps 배포 구성됨:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 생성합니다
# main 브랜치에 푸시 시 GitHub Actions 워크플로를 통해 배포합니다
```

Azure Static Web Apps 구성:
- **앱 위치**: `/quiz-app`
- **출력 위치**: `dist`
- **워크플로우**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 문서 PDF 생성

```bash
npm install                    # docsify-to-pdf 설치
npm run convert               # docs에서 PDF 생성
```

### Docsify 문서

```bash
npm install -g docsify-cli    # Docsify를 전역으로 설치
docsify serve                 # localhost:3000에서 서비스하기
```

### 프로젝트별 빌드

각 프로젝트 디렉터리는 자체 빌드 과정이 있을 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 과정 없음, 파일 직접 서빙

## 풀 리퀘스트 가이드라인

### 제목 형식

명확하고 변경 영역을 나타내는 제목 사용:
- `[Quiz-app] 수업 X용 새로운 퀴즈 추가`
- `[Lesson-3] 테라리움 프로젝트 오탈자 수정`
- `[Translation] 5번째 수업의 스페인어 번역 추가`
- `[Docs] 설정 지침 업데이트`

### 필수 점검 사항

PR 제출 전:

1. **코드 품질**:
   - 영향 받는 프로젝트 디렉터리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 검증**:
   - 해당 시 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 유효성 검사**:
   - 마크다운 내 모든 링크 테스트
   - 이미지 참조 확인

4. **콘텐츠 검토**:
   - 맞춤법 및 문법 확인
   - 코드 예제가 정확하고 교육적으로 적합한지 확인
   - 번역이 원본 의미를 유지하는지 검토

### 기여 요구 사항

- Microsoft CLA 동의 (첫 PR 자동 체크)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 지침은 [CONTRIBUTING.md](./CONTRIBUTING.md) 참고
- 이슈 번호가 있으면 PR 설명에 언급

### 검토 절차

- 메인테이너 및 커뮤니티 리뷰 진행
- 교육적 명확성 우선시
- 코드 예제는 최신 베스트 프랙티스 준수
- 번역은 정확성과 문화적 적합성 검토

## 번역 시스템

### 자동 번역

- co-op-translator 워크플로우가 적용된 GitHub Actions 사용
- 50개 이상의 언어로 자동 번역
- 메인 디렉터리에 원본 파일 존재
- 번역된 파일은 `translations/{language-code}/` 에 저장

### 수동 번역 개선 추가 방법

1. `translations/{language-code}/` 안의 파일 찾기
2. 구조를 유지하며 개선 사항 반영
3. 코드 예제가 정상 작동하는지 확인
4. 지역화된 퀴즈 콘텐츠 테스트

### 번역 메타데이터

번역 파일은 메타데이터 헤더 포함:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## 디버깅 및 문제 해결

### 흔한 문제들

**퀴즈 앱 시작 실패**:
- Node.js 버전 확인 (v14 이상 권장)
- `node_modules` 및 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 확인 (기본: Vite는 포트 5173 사용)

**API 서버가 시작되지 않음**:
- Node.js 버전 최소 충족 확인 (node >=10)
- 포트 사용 중 여부 확인
- `npm install`로 모든 의존성 설치 확인

**브라우저 확장 로드 실패**:
- manifest.json 포맷 확인
- 브라우저 콘솔에서 오류 확인
- 브라우저별 확장 설치 지침 준수

**Python 챗 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 확인
- GitHub Models 접근 권한 확인

**Docsify가 문서 서빙 안됨**:
- 전역에 docsify-cli 설치: `npm install -g docsify-cli`
- 저장소 루트에서 실행
- `docs/_sidebar.md` 파일 존재 확인

### 개발 환경 팁

- HTML 프로젝트는 VS Code Live Server 확장 사용
- 일관된 포맷을 위해 ESLint 및 Prettier 확장 설치
- JavaScript 디버깅에 브라우저 개발자 도구 활용
- Vue 프로젝트를 위한 Vue DevTools 브라우저 확장 설치

### 성능 고려사항

- 번역 파일이 많아 (50개 이상 언어) 전체 클론 크기 큼
- 콘텐츠 작업 시 깊이 1로 얕은 클론 권장: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역 파일 검색 제외 권장
- 첫 실행 시 빌드 과정이 느릴 수 있음 (npm install, Vite 빌드)

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (이미 `.gitignore`에 포함)
- 필요한 환경 변수는 프로젝트 README에 문서화

### Python 프로젝트

- 가상 환경 사용 권장: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰은 최소 권한으로 설정

### GitHub Models 접근

- GitHub Models 사용을 위한 개인 액세스 토큰(PAT) 필요
- 토큰은 환경 변수로 저장
- 토큰 및 자격 증명 절대 커밋 금지

## 추가 참고 사항

### 대상 사용자

- 웹 개발 전혀 모르는 초보자
- 학생 및 자기주도 학습자
- 교실에서 커리큘럼 활용하는 교사
- 접근성 및 점진적 기술 상승에 초점

### 교육 철학

- 프로젝트 기반 학습
- 빈번한 지식 확인(퀴즈)
- 실습 코딩 연습
- 실세계 적용 예제
- 프레임워크보다 기초 개념 중점

### 저장소 유지 관리

- 활발한 학습자 및 기여자 커뮤니티
- 의존성 및 콘텐츠 정기 업데이트
- 이슈 및 토론 상시 모니터링
- 번역 업데이트는 GitHub Actions 자동화

### 관련 자료

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [학생 허브 자료](https://docs.microsoft.com/learn/student-hub/)
- 학습자에게 권장되는 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 추가 강좌: 생성 AI, 데이터 과학, ML, IoT 커리큘럼 제공

### 특정 프로젝트 작업

개별 프로젝트의 상세 지침은 다음 README 파일 참고:
- `quiz-app/README.md` - Vue 3 퀴즈 앱
- `7-bank-project/README.md` - 인증 포함 은행 앱
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 챗 어시스턴트 프로젝트

### 모노레포 구조

전통적 모노레포는 아니지만, 여러 독립형 프로젝트 포함:
- 각 수업은 독립적
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼 경험을 위해 전체 저장소 클론 가능

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역은 오류나 부정확성이 포함될 수 있음을 유의하시기 바랍니다. 원문 문서는 해당 언어로 작성된 원본이 권위 있는 자료로 간주되어야 합니다. 중요한 정보의 경우, 전문 인간 번역을 권장합니다. 본 번역 사용으로 인해 발생한 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->