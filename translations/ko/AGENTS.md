# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자를 위한 웹 개발 기초 교육 커리큘럼 저장소입니다. 본 커리큘럼은 Microsoft Cloud Advocates가 개발한 12주 과정이며, JavaScript, CSS, HTML을 다루는 24개의 실습 중심 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장 프로그램, 우주 게임, 은행 앱, 코드 에디터, AI 채팅 어시스턴트
- **인터랙티브 퀴즈**: 수업 전후 평가용 3문항씩 48개의 퀴즈
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육용 저장소
- 각 수업 폴더는 README, 코드 예제, 솔루션 포함
- 별도의 디렉터리에 독립 프로젝트(quiz-app 및 다양한 수업 프로젝트)
- GitHub Actions(co-op-translator)를 활용한 번역 시스템
- Docsify를 사용한 문서 제공 및 PDF 형식으로 이용 가능

## 설치 명령어

이 저장소는 주로 교육 콘텐츠 소비용입니다. 특정 프로젝트 작업 시:

### 메인 저장소 설치

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 퀴즈 앱 설치 (Vue 3 + Vite)

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
npm run format     # Prettier로 포맷하기
```

### 브라우저 확장 프로그램 프로젝트

```bash
cd 5-browser-extension/solution
npm install
# 브라우저별 확장 프로그램 로딩 지침을 따르세요
```

### 우주 게임 프로젝트

```bash
cd 6-space-game/solution
npm install
# index.html을 브라우저에서 열거나 Live Server를 사용하세요
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

1. 저장소를 GitHub 계정으로 <strong>포크</strong>합니다.
2. 포크한 저장소를 로컬에 <strong>클론</strong>합니다.
3. 변경사항을 위한 <strong>새로운 브랜치</strong>를 만듭니다.
4. 수업 콘텐츠나 코드 예제를 수정합니다.
5. 관련 프로젝트 디렉터리에서 코드 변경 사항을 테스트합니다.
6. 기여 가이드라인에 따라 풀 리퀘스트를 제출합니다.

### 학습자용

1. 저장소를 포크하거나 클론합니다.
2. 수업 디렉터리를 순차적으로 탐색합니다.
3. 각 수업 README 파일을 읽습니다.
4. https://ff-quizzes.netlify.app/web/ 에서 수업 전 퀴즈를 풉니다.
5. 수업 폴더 내의 코드 예제를 진행합니다.
6. 과제와 챌린지를 완료합니다.
7. 수업 후 퀴즈를 풉니다.

### 실시간 개발

- <strong>문서</strong>: 루트에서 `docsify serve` 명령 실행 (포트 3000)
- **퀴즈 앱**: 퀴즈 앱 디렉터리에서 `npm run dev` 실행
- <strong>프로젝트들</strong>: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 해당 API 디렉터리에서 `npm start` 실행

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
npm run lint       # 코드 스타일 문제를 확인합니다
node server.js     # 서버가 오류 없이 시작되는지 확인합니다
```

### 일반 테스트 방식

- 이 저장소는 포괄적인 자동화 테스트 없이 교육용임
- 수동 테스트는 다음에 집중:
  - 코드 예제가 오류 없이 실행되는지
  - 문서 내 링크가 정상 작동하는지
  - 프로젝트 빌드가 성공하는지
  - 예제가 최선의 관행을 따르는지

### 제출 전 점검

- package.json이 있는 디렉터리에서 `npm run lint` 실행
- 마크다운 링크의 유효성 확인
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역본의 구조가 올바르게 유지되는지 확인

## 코드 스타일 가이드라인

### JavaScript

- 최신 ES6+ 구문 사용
- 프로젝트별 표준 ESLint 설정 준수
- 교육 목적에 맞는 의미 있는 변수 및 함수명 사용
- 학습자를 위한 개념 설명용 주석 추가
- Prettier가 설정된 곳에서는 코드 포맷팅 적용

### HTML/CSS

- 시맨틱 HTML5 요소 사용
- 반응형 디자인 원칙 준수
- 명확한 클래스 명명 규칙 사용
- 학습자를 위한 CSS 기법 설명 주석 포함

### Python

- PEP 8 스타일 가이드 준수
- 명확하고 교육적인 코드 예제 제공
- 학습에 도움이 되는 곳에 타입 힌트 사용

### 마크다운 문서

- 명확한 제목 계층 구조
- 언어 명시가 있는 코드 블록
- 추가 자료 링크 포함
- `images/` 폴더 내 스크린샷 및 이미지
- 접근성 향상을 위한 이미지 대체 텍스트

### 파일 구성

- 수업은 순차적으로 번호 부여 (예: 1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트는 `solution/`, 종종 `start/` 또는 `your-work/` 디렉터리 포함
- 수업별 `images/` 폴더에 이미지 저장
- 번역본은 `translations/{language-code}/` 구조로 분류

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

퀴즈 앱은 Azure Static Web Apps용으로 구성되어 있습니다:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 생성합니다
# main 브랜치에 푸시될 때 GitHub Actions 워크플로를 통해 배포합니다
```

Azure Static Web Apps 구성:
- **앱 위치**: `/quiz-app`
- **출력 위치**: `dist`
- <strong>워크플로우</strong>: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 문서 PDF 생성

```bash
npm install                    # docsify-to-pdf 설치
npm run convert               # docs에서 PDF 생성
```

### Docsify 문서

```bash
npm install -g docsify-cli    # Docsify를 전역에 설치합니다
docsify serve                 # localhost:3000에서 서비스합니다
```

### 프로젝트별 빌드

각 프로젝트 디렉터리에 고유 빌드 프로세스가 있을 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없이 파일 직접 제공

## 풀 리퀘스트 가이드라인

### 제목 형식

변경 영역을 명확히 나타내는 설명적인 제목 사용:
- `[Quiz-app] 수업 X용 신규 퀴즈 추가`
- `[Lesson-3] 테라리움 프로젝트 오타 수정`
- `[Translation] 수업 5 스페인어 번역 추가`
- `[Docs] 설치 지침 업데이트`

### 필수 점검 사항

PR 제출 전:

1. **코드 품질**:
   - 영향 받은 프로젝트 디렉터리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 검증**:
   - 적용 가능한 경우 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 검증**:
   - 모든 마크다운 링크 테스트
   - 이미지 참조 작동 확인

4. **내용 검토**:
   - 맞춤법 및 문법 교정
   - 코드 예제가 올바르고 교육적임 확인
   - 번역본 원 의미 유지 점검

### 기여 요구사항

- Microsoft CLA 동의 (첫 PR 시 자동 검사)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md) 참조
- 관련 이슈 번호 PR 설명에 명시

### 리뷰 절차

- 유지 관리자 및 커뮤니티가 PR 검토
- 교육적 명료성 우선
- 코드 예제는 현행 최선의 관행 준수
- 번역은 정확성과 문화적 적합성 검토

## 번역 시스템

### 자동 번역

- GitHub Actions의 co-op-translator 워크플로우 사용
- 50개 이상의 언어로 자동 번역
- 소스 파일은 메인 디렉터리에 위치
- 번역 파일은 `translations/{language-code}/` 에 저장

### 수동 번역 개선 추가

1. `translations/{language-code}/` 내 파일 위치 파악
2. 구조를 유지하며 개선 작업 수행
3. 코드 예제가 정상적으로 작동하는지 확인
4. 현지화된 퀴즈 콘텐츠 테스트

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

### 흔한 문제

**퀴즈 앱 실행 실패**:
- Node.js 버전 확인 (권장 v14 이상)
- `node_modules`와 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 확인 (기본: Vite 5173 포트 사용)

**API 서버 시작 실패**:
- Node.js 최소 버전(node >=10) 확인
- 포트 사용 중 여부 확인
- 모든 의존성 `npm install`로 설치 완료 확인

**브라우저 확장 프로그램 로딩 실패**:
- manifest.json 형식 올바른지 검사
- 브라우저 콘솔 에러 확인
- 브라우저별 확장 프로그램 설치 지침 준수

**Python 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 여부 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 확인
- GitHub Models 접근 권한 점검

**Docsify 문서 제공 안 됨**:
- docsify-cli 글로벌 설치: `npm install -g docsify-cli`
- 저장소 루트에서 실행
- `docs/_sidebar.md` 존재 여부 확인

### 개발 환경 팁

- HTML 프로젝트는 VS Code Live Server 확장 사용 권장
- ESLint 및 Prettier 확장 설치하여 꾸준한 코드 포맷 유지
- 브라우저 개발자 도구를 통한 JavaScript 디버깅
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### 성능 고려 사항

- 50개 이상의 언어 번역 파일 다수로 인해 전체 클론 시 용량 큼
- 콘텐츠 작업 시에는 `git clone --depth 1`를 사용한 얕은 클론 권장
- 영어 콘텐츠 작업 시 번역 파일 검색 제외 권장
- 빌드 프로세스는 초기 실행 시 (npm 설치, Vite 빌드) 다소 느릴 수 있음

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (이미 `.gitignore`에 포함)
- 프로젝트 README에 필요한 환경 변수 문서화

### Python 프로젝트

- 가상 환경 사용 권장: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰의 최소 권한 부여

### GitHub Models 접근

- GitHub Models 사용 위해 개인 접근 토큰(PAT) 필수
- 토큰은 환경 변수로 저장
- 토큰 및 인증 정보 절대 커밋 금지

## 추가 참고사항

### 대상 사용자

- 웹 개발 완전 초보자
- 학생 및 독학자
- 교실에서 커리큘럼 활용하는 교사
- 접근성 및 점진적 실력 향상에 맞게 설계된 콘텐츠

### 교육 철학

- 프로젝트 기반 학습 방식
- 빈번한 지식 점검(퀴즈)
- 실습 위주의 코딩 연습
- 실세계 적용 사례 제공
- 프레임워크보다 기초에 집중

### 저장소 유지 관리

- 활발한 학습자 및 기여자 커뮤니티
- 의존성 및 콘텐츠 지속적 업데이트
- 유지 관리자 모니터링 하 이슈 및 토론 관리
- GitHub Actions로 번역 자동화

### 관련 리소스

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [학생 허브 리소스](https://docs.microsoft.com/learn/student-hub/)
- 학습자에게 권장되는 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 생성형 AI, 데이터 사이언스, ML, IoT 커리큘럼 등의 추가 과정 제공

### 특정 프로젝트 작업

개별 프로젝트 지침은 각 프로젝트 README 참고:
- `quiz-app/README.md` - Vue 3 퀴즈 애플리케이션
- `7-bank-project/README.md` - 인증 포함 은행 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 어시스턴트 프로젝트

### 모노레포 구조

전통적인 모노레포는 아니지만, 이 저장소는 여러 독립 프로젝트로 구성됨:
- 각 수업은 독립적
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼 경험을 위해 전체 저장소 클론 권장

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있음을 알려드립니다. 원문 문서는 권위 있는 출처로 간주되어야 합니다. 중요한 정보에 대해서는 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->