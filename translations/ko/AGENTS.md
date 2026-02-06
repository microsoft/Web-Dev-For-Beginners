# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자를 대상으로 웹 개발 기초를 교육하기 위한 커리큘럼을 제공합니다. Microsoft Cloud Advocates가 개발한 12주 과정으로, JavaScript, CSS, HTML을 다루는 24개의 실습 중심 레슨을 포함하고 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 레슨
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장 프로그램, 우주 게임, 은행 앱, 코드 편집기, AI 채팅 어시스턴트
- **인터랙티브 퀴즈**: 각 레슨 전후로 3문제씩 구성된 48개의 퀴즈
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **사용 기술**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 레슨 기반 구조의 교육용 저장소
- 각 레슨 폴더에는 README, 코드 예제, 솔루션 포함
- 독립적인 프로젝트는 별도 디렉토리에 저장 (quiz-app, 다양한 레슨 프로젝트)
- GitHub Actions를 활용한 번역 시스템 (co-op-translator)
- Docsify를 통해 문서 제공 및 PDF로 다운로드 가능

## 설정 명령어

이 저장소는 주로 교육 콘텐츠 소비를 위한 것입니다. 특정 프로젝트 작업을 위해:

### 메인 저장소 설정

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 퀴즈 앱 설정 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### 은행 프로젝트 API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### 브라우저 확장 프로그램 프로젝트

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### 우주 게임 프로젝트

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### 채팅 프로젝트 (Python 백엔드)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## 개발 워크플로우

### 콘텐츠 기여자를 위한 지침

1. **저장소를 포크**하여 GitHub 계정에 복사
2. **포크한 저장소를 로컬로 클론**
3. **변경 사항을 위한 새 브랜치 생성**
4. 레슨 콘텐츠 또는 코드 예제 수정
5. 관련 프로젝트 디렉토리에서 코드 변경 사항 테스트
6. 기여 지침을 따라 풀 리퀘스트 제출

### 학습자를 위한 지침

1. 저장소를 포크하거나 클론
2. 레슨 디렉토리를 순차적으로 탐색
3. 각 레슨의 README 파일 읽기
4. https://ff-quizzes.netlify.app/web/에서 레슨 전 퀴즈 완료
5. 레슨 폴더의 코드 예제 학습
6. 과제와 챌린지 완료
7. 레슨 후 퀴즈 수행

### 실시간 개발

- **문서화**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉토리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 해당 API 디렉토리에서 `npm start` 실행

## 테스트 지침

### 퀴즈 앱 테스트

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### 은행 API 테스트

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### 일반 테스트 접근법

- 이 저장소는 포괄적인 자동화 테스트를 포함하지 않음
- 수동 테스트 초점:
  - 코드 예제가 오류 없이 실행되는지 확인
  - 문서의 링크가 올바르게 작동하는지 확인
  - 프로젝트 빌드가 성공적으로 완료되는지 확인
  - 예제가 모범 사례를 따르는지 확인

### 제출 전 확인 사항

- `npm run lint`를 package.json이 있는 디렉토리에서 실행
- Markdown 링크가 유효한지 확인
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역이 올바른 구조를 유지하는지 확인

## 코드 스타일 지침

### JavaScript

- 최신 ES6+ 문법 사용
- 프로젝트에서 제공된 표준 ESLint 구성 준수
- 교육적 명확성을 위한 의미 있는 변수 및 함수 이름 사용
- 학습자를 위한 개념 설명 주석 추가
- Prettier로 포맷팅 (설정된 경우)

### HTML/CSS

- 시맨틱 HTML5 요소 사용
- 반응형 디자인 원칙 준수
- 명확한 클래스 명명 규칙
- 학습자를 위한 CSS 기술 설명 주석 추가

### Python

- PEP 8 스타일 지침 준수
- 명확하고 교육적인 코드 예제 제공
- 학습에 도움이 되는 경우 타입 힌트 추가

### Markdown 문서화

- 명확한 제목 계층 구조
- 언어 지정된 코드 블록
- 추가 리소스 링크
- `images/` 디렉토리에 스크린샷 및 이미지 저장
- 접근성을 위한 이미지 대체 텍스트 제공

### 파일 구성

- 레슨은 순차적으로 번호 매김 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트는 `solution/`과 종종 `start/` 또는 `your-work/` 디렉토리 포함
- 이미지는 레슨별 `images/` 폴더에 저장
- 번역은 `translations/{language-code}/` 구조로 저장

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

퀴즈 앱은 Azure Static Web Apps 배포를 위해 구성됨:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps 구성:
- **앱 위치**: `/quiz-app`
- **출력 위치**: `dist`
- **워크플로우**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 문서 PDF 생성

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify 문서화

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### 프로젝트별 빌드

각 프로젝트 디렉토리는 자체 빌드 프로세스를 가질 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없음, 파일을 직접 제공

## 풀 리퀘스트 지침

### 제목 형식

변경 영역을 명확히 나타내는 제목 사용:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### 필수 확인 사항

PR 제출 전:

1. **코드 품질**:
   - 영향을 받은 프로젝트 디렉토리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 확인**:
   - 적용 가능한 경우 `npm run build` 실행
   - 빌드 오류가 없는지 확인

3. **링크 검증**:
   - 모든 Markdown 링크 테스트
   - 이미지 참조가 작동하는지 확인

4. **콘텐츠 검토**:
   - 철자 및 문법 확인
   - 코드 예제가 정확하고 교육적인지 확인
   - 번역이 원래 의미를 유지하는지 확인

### 기여 요구 사항

- Microsoft CLA 동의 (첫 PR에서 자동 확인)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 지침은 [CONTRIBUTING.md](./CONTRIBUTING.md) 참조
- 관련된 경우 PR 설명에 이슈 번호 참조

### 리뷰 프로세스

- 유지 관리자 및 커뮤니티가 PR 검토
- 교육적 명확성을 우선시
- 코드 예제는 최신 모범 사례를 따라야 함
- 번역은 정확성과 문화적 적합성을 검토

## 번역 시스템

### 자동 번역

- co-op-translator 워크플로우를 사용하는 GitHub Actions 활용
- 50개 이상의 언어로 자동 번역
- 메인 디렉토리의 원본 파일
- 번역된 파일은 `translations/{language-code}/` 디렉토리에 저장

### 수동 번역 개선 추가

1. `translations/{language-code}/`에서 파일 찾기
2. 구조를 유지하며 개선 사항 추가
3. 코드 예제가 기능을 유지하는지 확인
4. 로컬화된 퀴즈 콘텐츠 테스트

### 번역 메타데이터

번역된 파일에는 메타데이터 헤더 포함:
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

### 일반적인 문제

**퀴즈 앱이 시작되지 않음**:
- Node.js 버전 확인 (v14+ 권장)
- `node_modules` 및 `package-lock.json` 삭제 후 `npm install` 다시 실행
- 포트 충돌 확인 (기본: Vite는 포트 5173 사용)

**API 서버가 시작되지 않음**:
- Node.js 버전이 최소 요구 사항을 충족하는지 확인 (node >=10)
- 포트가 이미 사용 중인지 확인
- `npm install`로 모든 종속성 설치 확인

**브라우저 확장이 로드되지 않음**:
- manifest.json이 올바르게 포맷되었는지 확인
- 브라우저 콘솔에서 오류 확인
- 브라우저별 확장 설치 지침 따르기

**Python 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수가 설정되었는지 확인
- GitHub Models 접근 권한 확인

**Docsify가 문서를 제공하지 않음**:
- docsify-cli를 전역 설치: `npm install -g docsify-cli`
- 저장소 루트 디렉토리에서 실행
- `docs/_sidebar.md`가 존재하는지 확인

### 개발 환경 팁

- HTML 프로젝트는 VS Code와 Live Server 확장 사용
- ESLint 및 Prettier 확장 설치로 일관된 포맷 유지
- 브라우저 개발자 도구로 JavaScript 디버깅
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### 성능 고려 사항

- 번역된 파일 수가 많아 (50개 이상) 전체 클론 크기가 큼
- 콘텐츠 작업만 할 경우 얕은 클론 사용: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역 파일 검색 제외
- 첫 실행 시 빌드 프로세스가 느릴 수 있음 (npm install, Vite build)

## 보안 고려 사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (`.gitignore`에 이미 포함됨)
- 프로젝트 README에 필요한 환경 변수 문서화

### Python 프로젝트

- 가상 환경 사용: `python -m venv venv`
- 종속성 최신 상태 유지
- GitHub 토큰은 최소한의 권한만 부여

### GitHub Models 접근

- GitHub Models에는 개인 액세스 토큰(PAT)이 필요
- 토큰은 환경 변수로 저장해야 함
- 토큰이나 자격 증명을 절대 커밋하지 말 것

## 추가 참고 사항

### 대상 사용자

- 웹 개발 초보자
- 학생 및 자기 주도 학습자
- 교실에서 커리큘럼을 사용하는 교사
- 콘텐츠는 접근성과 점진적 기술 향상을 목표로 설계됨

### 교육 철학

- 프로젝트 기반 학습 접근법
- 빈번한 지식 확인 (퀴즈)
- 실습 코딩 연습
- 실제 응용 예제
- 프레임워크보다 기초에 집중

### 저장소 유지 관리

- 학습자와 기여자로 구성된 활발한 커뮤니티
- 종속성과 콘텐츠의 정기적인 업데이트
- 유지 관리자가 이슈와 논의 모니터링
- GitHub Actions를 통한 번역 업데이트 자동화

### 관련 리소스

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [Student Hub 리소스](https://docs.microsoft.com/learn/student-hub/)
- 학습자를 위한 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 추천
- 추가 과정: 생성형 AI, 데이터 과학, ML, IoT 커리큘럼 제공

### 특정 프로젝트 작업

개별 프로젝트에 대한 자세한 지침은 다음 README 파일 참조:
- `quiz-app/README.md` - Vue 3 퀴즈 애플리케이션
- `7-bank-project/README.md` - 인증 기능이 포함된 은행 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 프로그램 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 어시스턴트 프로젝트

### 모노레포 구조

전통적인 모노레포는 아니지만, 이 저장소는 여러 독립적인 프로젝트를 포함:
- 각 레슨은 독립적임
- 프로젝트는 종속성을 공유하지 않음
- 개별 프로젝트 작업은 다른 프로젝트에 영향을 주지 않음
- 전체 커리큘럼 경험을 위해 저장소 전체 클론 가능

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.