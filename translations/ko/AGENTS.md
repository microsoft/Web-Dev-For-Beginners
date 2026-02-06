# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자를 위한 웹 개발 기본 교육 커리큘럼 저장소입니다. 이 커리큘럼은 Microsoft Cloud Advocates가 개발한 12주 과정의 종합 교육 과정으로, JavaScript, CSS, HTML을 다루는 24개의 실습 중심 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장, 우주 게임, 은행 앱, 코드 편집기 및 AI 채팅 어시스턴트
- **인터랙티브 퀴즈**: 각 3문항씩 포함된 48개의 퀴즈 (수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육용 저장소
- 각 수업 폴더에 README, 코드 예제 및 솔루션 포함
- 독립형 프로젝트들은 별도의 디렉토리에 위치 (quiz-app, 다양한 수업 프로젝트)
- GitHub Actions (co-op-translator)를 이용한 번역 시스템
- Docsify를 통해 문서 제공 및 PDF 형식으로도 사용 가능

## 설치 명령어

이 저장소는 주로 교육 콘텐츠 소비를 위한 것입니다. 특정 프로젝트 작업 시:

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
npm run build      # 프로덕션 빌드
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

### 채팅 프로젝트 (Python 백엔드)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 환경 변수를 설정하세요
python api.py
```

## 개발 워크플로우

### 콘텐츠 기여자용

1. 저장소를 GitHub 계정으로 **포크(fork)** 합니다.
2. 포크한 저장소를 **로컬에 클론(clone)** 합니다.
3. 변경 사항을 위한 새로운 **브랜치 생성** 합니다.
4. 수업 콘텐츠나 코드 예제를 수정합니다.
5. 관련 프로젝트 디렉토리에서 코드 변경 사항을 테스트합니다.
6. 기여 가이드라인에 따라 풀 리퀘스트를 제출합니다.

### 학습자용

1. 저장소를 포크하거나 클론합니다.
2. 수업 디렉토리를 순서대로 이동합니다.
3. 각 수업의 README 파일을 읽습니다.
4. https://ff-quizzes.netlify.app/web/ 에서 수업 전 퀴즈를 완료합니다.
5. 수업 폴더 내 코드 예제를 따라 작업합니다.
6. 과제 및 도전을 완료합니다.
7. 수업 후 퀴즈를 완료합니다.

### 라이브 개발

- **문서화**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉토리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 각 API 디렉토리에서 `npm start` 실행

## 테스트 지침

### 퀴즈 앱 테스트

```bash
cd quiz-app
npm run lint       # 코드 스타일 문제 확인
npm run build      # 빌드 성공 여부 확인
```

### 은행 API 테스트

```bash
cd 7-bank-project/api
npm run lint       # 코드 스타일 문제 확인
node server.js     # 오류 없이 서버가 시작되는지 확인
```

### 일반 테스트 접근법

- 본 저장소는 포괄적인 자동화 테스트는 없습니다.
- 수동 테스트는 다음에 중점 둡니다:
  - 코드 예제가 오류 없이 실행되는지
  - 문서 내 링크 작동 여부
  - 프로젝트 빌드가 정상 완료되는지
  - 예제가 최선의 실무 관행을 따르는지

### 사전 제출 체크

- package.json 있는 디렉토리에서 `npm run lint` 실행
- 마크다운 링크 유효성 확인
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역물의 구조 유지 확인

## 코드 스타일 지침

### JavaScript

- 최신 ES6+ 문법 사용
- 프로젝트에서 제공하는 표준 ESLint 설정 준수
- 교육 목적에 맞는 의미 있는 변수 및 함수명 사용
- 학습자 이해를 돕는 주석 추가
- 설정된 곳에서는 Prettier로 포맷팅

### HTML/CSS

- 의미론적 HTML5 요소 사용
- 반응형 디자인 원칙 적용
- 명확한 클래스 명명 규칙
- CSS 기법에 관한 설명 주석 추가

### Python

- PEP 8 스타일 가이드 준수
- 교육용 명확한 코드 예제 제공
- 학습에 도움이 되는 타입 힌트 사용

### 마크다운 문서화

- 명확한 제목 계층 구조
- 언어 명시가 있는 코드 블록
- 추가 자료 링크 제공
- `images/` 폴더에 스크린샷 및 이미지 저장
- 접근성을 위한 이미지 Alt 텍스트 제공

### 파일 구성

- 수업은 순차 번호로 정리 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트에 `solution/` 과 보통 `start/` 또는 `your-work/` 디렉토리 포함
- 수업별 `images/` 폴더에 이미지 저장
- 번역 파일은 `translations/{language-code}/` 구조

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

퀴즈 앱은 Azure Static Web Apps 배포에 맞게 설정됨:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 만듭니다
# main 브랜치에 푸시할 때 GitHub Actions 워크플로를 통해 배포합니다
```

Azure Static Web Apps 설정:
- **앱 위치**: `/quiz-app`
- **출력 위치**: `dist`
- **워크플로우**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 문서 PDF 생성

```bash
npm install                    # docsify-to-pdf 설치
npm run convert               # docs에서 PDF 생성
```

### Docsify 문서화

```bash
npm install -g docsify-cli    # Docsify를 전역으로 설치합니다
docsify serve                 # localhost:3000에서 서비스합니다
```

### 프로젝트별 빌드

각 프로젝트 디렉토리는 자체 빌드 프로세스가 있을 수 있음:
- Vue 프로젝트: `npm run build` 로 배포용 번들 생성
- 정적 프로젝트: 빌드 단계 없음, 파일 직접 서빙

## 풀 리퀘스트 가이드라인

### 제목 형식

변경 영역을 명확하게 표현하는 제목 사용:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### 필수 검사

PR 제출 전:

1. **코드 품질**:
   - 관련 프로젝트 디렉토리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 확인**:
   - 해당 시 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 검증**:
   - 모든 마크다운 링크 테스트
   - 이미지 참조 작동 확인

4. **내용 검토**:
   - 맞춤법 및 문법 교정
   - 코드 예제의 정확성과 교육적 가치 확인
   - 번역물의 원 뜻 유지 여부 확인

### 기여 요건

- Microsoft CLA 동의 (첫 PR 시 자동 검사)
- [Microsoft 오픈소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 지침은 [CONTRIBUTING.md](./CONTRIBUTING.md) 참고
- PR 설명에 이슈 번호 참조 가능 시 명시

### 리뷰 프로세스

- PR은 메인테이너와 커뮤니티 리뷰
- 교육적 명확성 최우선
- 코드 예제는 최신 최선 관행 준수 필요
- 번역 정확성과 문화적 적합성 검토

## 번역 시스템

### 자동 번역

- GitHub Actions의 co-op-translator 워크플로우 사용
- 50개 이상의 언어로 자동 번역
- 소스 파일은 메인 디렉토리에 위치
- 번역 파일은 `translations/{language-code}/` 에 저장

### 수동 번역 개선 추가

1. `translations/{language-code}/` 내 파일 위치 확인
2. 구조를 유지하며 개선 진행
3. 코드 예제가 정상 작동하는지 확인
4. 현지화된 퀴즈 콘텐츠 테스트

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

### 흔한 문제

**퀴즈 앱 실행 실패**:
- Node.js 버전 확인 (v14 이상 권장)
- `node_modules` 와 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 여부 확인 (기본: Vite 포트 5173)

**API 서버가 시작되지 않을 때**:
- Node.js 최소 버전 충족 확인 (node >=10)
- 포트 사용 중인지 확인
- `npm install`로 모든 의존성 설치 확인

**브라우저 확장 로드 실패**:
- manifest.json 형식 올바른지 확인
- 브라우저 콘솔 오류 확인
- 브라우저별 확장 설치 지침 따름

**Python 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 여부 확인
- GitHub Models 접근 권한 확인

**Docsify 문서 미서빙 문제**:
- 전역에 docsify-cli 설치: `npm install -g docsify-cli`
- 저장소 루트에서 실행
- `docs/_sidebar.md` 파일 존재 확인

### 개발 환경 팁

- Vue 프로젝트는 Vue DevTools 브라우저 확장 사용
- HTML 프로젝트는 VS Code Live Server 확장 활용
- ESLint, Prettier 확장 설치로 일관된 코드 포맷팅 적용
- JavaScript 디버깅 시 브라우저 개발자 도구 사용

### 성능 고려사항

- 50개 이상의 언어 번역 파일 수 많아 전체 클론 시 크기 큼
- 콘텐츠 작업만 할 시 얕은 클론 사용: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역물 검색에서 제외 권장
- 초기 빌드 (npm install, Vite 빌드) 시 느릴 수 있음

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (이미 `.gitignore` 등록)
- 프로젝트 README에 필요한 환경 변수 문서화

### Python 프로젝트

- 가상 환경 사용: `python -m venv venv`
- 종속성 최신 상태 유지
- GitHub 토큰 권한 최소화

### GitHub Models 접근

- 개인 접근 토큰(PAT) 필요
- 토큰은 환경 변수로 저장
- 토큰이나 자격 증명 절대 커밋 금지

## 추가 참고 사항

### 대상 사용자

- 웹 개발 완전 초보자
- 학생 및 독학자
- 교실에서 커리큘럼 사용하는 교사
- 접근성과 점진적 스킬 향상에 맞춘 콘텐츠

### 교육 철학

- 프로젝트 기반 학습법
- 빈번한 지식 점검(퀴즈)
- 실습 코딩 연습
- 실무 적용 사례 중심
- 프레임워크 전 기초 집중

### 저장소 유지 관리

- 활발한 학습자 및 기여자 커뮤니티
- 종속성 및 콘텐츠 정기 업데이트
- 메인테이너가 이슈 및 토론 모니터링
- GitHub Actions 통한 번역 업데이트 자동화

### 관련 자료

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [학생 허브 자료](https://docs.microsoft.com/learn/student-hub/)
- 학습자에게 권장하는 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 추가 과정: 생성형 AI, 데이터 과학, ML, IoT 커리큘럼 제공

### 특정 프로젝트 작업

개별 프로젝트에 대한 상세 지침은 다음 README 파일 참조:
- `quiz-app/README.md` - Vue 3 퀴즈 앱
- `7-bank-project/README.md` - 인증 기능 있는 은행 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 어시스턴트 프로젝트

### 모노레포 구조

전통적 모노레포는 아니지만 여러 독립 프로젝트 포함:
- 각 수업은 독립적 구성
- 프로젝트 간 종속성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼 체험하려면 전체 저장소를 클론하세요

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있으나, 자동 번역에는 오류나 부정확한 내용이 포함될 수 있음을 유의하시기 바랍니다. 원본 문서의 원어 버전이 권위 있는 자료로 간주되어야 합니다. 중요한 정보의 경우 전문적인 사람 번역을 권장합니다. 본 번역의 사용으로 인해 발생하는 오해나 오역에 대해 당사는 책임지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->