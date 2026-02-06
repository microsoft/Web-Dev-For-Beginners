# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자에게 웹 개발 기초를 가르치기 위한 교육 커리큘럼 저장소입니다. 이 커리큘럼은 Microsoft Cloud Advocates가 개발한 종합적인 12주 과정으로, JavaScript, CSS, HTML을 다루는 24개의 실습 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 조직된 24개의 구조화된 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장, 우주 게임, 뱅킹 앱, 코드 편집기, AI 채팅 도우미
- **인터랙티브 퀴즈**: 각 3문항씩 48개의 퀴즈 (수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육용 저장소
- 각 수업 폴더에는 README, 코드 예제, 솔루션 포함
- quiz-app, 여러 수업 프로젝트와 같이 독립 프로젝트 별도 디렉터리
- GitHub Actions (co-op-translator)를 이용한 번역 시스템
- Docsify로 제공되는 문서 및 PDF 형태로 이용 가능

## 설치 명령어

이 저장소는 주로 교육 콘텐츠 소비용입니다. 특정 프로젝트를 실행하려면:

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
# 브라우저 별 확장 프로그램 로딩 지침을 따르세요
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

### 콘텐츠 기여자를 위해

1. 저장소를 GitHub 계정으로 **포크**합니다.
2. 포크한 저장소를 로컬에 **클론**합니다.
3. 변경사항용으로 **새 브랜치**를 생성합니다.
4. 수업 콘텐츠 또는 코드 예제를 수정합니다.
5. 관련 프로젝트 디렉터리에서 코드 변경사항을 테스트합니다.
6. 기여 가이드라인에 따라 풀 리퀘스트를 제출합니다.

### 학습자를 위해

1. 저장소를 포크하거나 클론합니다.
2. 수업 디렉터리를 순차적으로 이동합니다.
3. 각 수업의 README 파일을 읽습니다.
4. https://ff-quizzes.netlify.app/web/ 에서 수업 전 퀴즈를 완료합니다.
5. 수업 폴더 내 코드 예제를 실행해 봅니다.
6. 과제 및 챌린지를 완료합니다.
7. 수업 후 퀴즈를 응시합니다.

### 실시간 개발

- **문서**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉터리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
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

### 일반 테스트 접근법

- 이 저장소는 교육용으로 포괄적인 자동화 테스트는 포함하지 않음
- 수동 테스트는 다음에 중점:
  - 코드 예제가 오류 없이 실행되는지
  - 문서 내 링크가 정상 작동하는지
  - 프로젝트 빌드가 성공적으로 완료되는지
  - 예제가 모범 사례를 따르는지

### 제출 전 점검

- package.json이 있는 디렉터리에서 `npm run lint` 실행
- 마크다운 링크가 유효한지 검증
- 브라우저나 Node.js에서 코드 예제 테스트
- 번역이 올바른 구조를 유지하는지 확인

## 코드 스타일 가이드라인

### JavaScript

- 최신 ES6+ 구문 사용
- 프로젝트에 제공된 표준 ESLint 설정 준수
- 교육적 명확성을 위해 의미 있는 변수 및 함수명 사용
- 학습자를 위한 개념 설명 주석 추가
- 설정된 경우 Prettier로 포맷팅

### HTML/CSS

- 시멘틱 HTML5 요소 사용
- 반응형 디자인 원칙 적용
- 명확한 클래스 명명 규칙
- 학습자를 위한 CSS 기술 설명 주석 포함

### Python

- PEP 8 스타일 가이드 준수
- 명확하고 교육적인 코드 예제
- 학습에 도움이 되는 타입 힌트 사용

### 마크다운 문서화

- 명확한 헤딩 계층 구조
- 언어 지정 코드 블록 사용
- 추가 자료에 대한 링크 포함
- `images/` 폴더의 스크린샷 및 이미지
- 접근성을 위한 이미지 대체 텍스트

### 파일 조직

- 수업은 순서대로 번호 매김 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트는 `solution/` 및 `start/` 또는 `your-work/` 폴더 포함
- 이미지 파일은 수업별 `images/` 하위 폴더에 저장
- 번역은 `translations/{language-code}/` 구조로 저장

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

quiz-app은 Azure Static Web Apps 배포용으로 구성됨:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 생성합니다
# main 브랜치에 푸시할 때 GitHub Actions 워크플로를 통해 배포합니다
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

### Docsify 문서화

```bash
npm install -g docsify-cli    # Docsify를 전역에 설치
docsify serve                 # localhost:3000에서 서비스 제공
```

### 프로젝트별 빌드

각 프로젝트 디렉터리는 자체 빌드 프로세스를 가질 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없음, 파일 직접 제공

## 풀 리퀘스트 가이드라인

### 제목 형식

변경 영역을 명확히 나타내는 제목 사용:
- `[Quiz-app] 수업 X에 새 퀴즈 추가`
- `[Lesson-3] 테라리움 프로젝트 오타 수정`
- `[Translation] 5과 스페인어 번역 추가`
- `[Docs] 설치 지침 업데이트`

### 필수 점검사항

PR 제출 전에:

1. **코드 품질**:
   - 관련 프로젝트 디렉터리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 검증**:
   - 가능한 경우 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 검증**:
   - 모든 마크다운 링크 테스트
   - 이미지 참조 정상 작동 확인

4. **내용 검토**:
   - 맞춤법과 문법 교정
   - 코드 예제의 정확성 및 교육적 적합성 확인
   - 번역이 원래 의미를 유지하는지 검증

### 기여 조건

- Microsoft CLA 동의 (첫 PR에서 자동 검사)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md) 참조
- PR 설명에 관련 이슈 번호 참조 가능

### 검토 과정

- PR은 유지관리자 및 커뮤니티가 검토
- 교육적 명확성 우선
- 코드 예제는 최신 모범 사례 준수 필요
- 번역은 정확성과 문화적 적합성 검토

## 번역 시스템

### 자동 번역

- GitHub Actions와 co-op-translator 워크플로우 사용
- 50개 이상 언어로 자동 번역 지원
- 소스 파일은 메인 디렉터리에 위치
- 번역 파일은 `translations/{language-code}/`에 위치

### 수동 번역 개선 추가 방법

1. `translations/{language-code}/` 내 파일 위치 찾기
2. 구조를 유지하며 개선 작업 수행
3. 코드 예제가 정상 작동하는지 확인
4. 현지화된 퀴즈 내용 테스트

### 번역 메타데이터

번역 파일에 메타데이터 헤더 포함:
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

### 일반 문제

**퀴즈 앱이 시작되지 않는 경우**:
- Node.js 버전 확인 (v14 이상 권장)
- `node_modules` 및 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 여부 확인 (기본: Vite는 포트 5173 사용)

**API 서버가 시작되지 않는 경우**:
- Node.js 버전 최소 요구 사항 확인 (node >=10)
- 포트가 이미 사용 중인지 점검
- 모든 의존성 `npm install`로 설치 여부 확인

**브라우저 확장이 로드되지 않는 경우**:
- manifest.json 형식 확인
- 브라우저 콘솔 오류 점검
- 브라우저별 확장 설치 지침 준수

**Python 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 여부 확인
- GitHub Models 접근 권한 점검

**Docsify가 문서를 제공하지 않는 경우**:
- 전역에 docsify-cli 설치: `npm install -g docsify-cli`
- 저장소 루트에서 실행
- `docs/_sidebar.md` 파일 존재 여부 확인

### 개발 환경 팁

- HTML 프로젝트는 VS Code와 Live Server 확장 사용
- 일관된 포맷팅을 위해 ESLint, Prettier 확장 설치
- JavaScript 디버깅에 브라우저 개발자 도구 사용
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### 성능 고려사항

- 50개 이상의 번역 파일로 인해 전체 클론 시 큰 용량 발생
- 콘텐츠 작업만 할 경우 얕은 클론 사용: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역 파일 검색 제외 권장
- 초기 실행 시 빌드 프로세스가 느릴 수 있음 (npm install, Vite 빌드)

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (.gitignore에 포함됨)
- 프로젝트 README에 필요한 환경 변수 문서화

### Python 프로젝트

- 가상환경 사용 권장: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰은 최소 권한 적용

### GitHub Models 접근

- 개인 액세스 토큰(PAT) 필요
- 토큰은 환경 변수로 저장
- 토큰 또는 자격 증명 절대 커밋 금지

## 추가 참고 사항

### 대상 사용자

- 웹 개발 완전 초보자
- 학생 및 독학자
- 교실에서 커리큘럼을 사용하는 교사
- 접근성 및 단계적 기술 습득에 최적화된 콘텐츠

### 교육 철학

- 프로젝트 기반 학습 방식
- 빈번한 지식 점검(퀴즈)
- 실습 코딩 연습
- 실제 적용 사례
- 프레임워크보다 기초에 집중

### 저장소 유지 관리

- 학습자와 기여자 커뮤니티 활성화
- 의존성 및 콘텐츠 정기 업데이트
- 유지관리자가 이슈 및 토론 감시
- GitHub Actions를 통한 번역 자동 업데이트

### 관련 리소스

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [학생 허브 자료](https://docs.microsoft.com/learn/student-hub/)
- 학습자에게 추천하는 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 추가 과정: 생성 AI, 데이터 과학, ML, IoT 커리큘럼 제공

### 특정 프로젝트 작업 방법

각 프로젝트별 상세 지침은 README 파일에서 확인:
- `quiz-app/README.md` - Vue 3 퀴즈 애플리케이션
- `7-bank-project/README.md` - 인증 기능이 포함된 뱅킹 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 도우미 프로젝트

### 모노레포 구조

전통적인 모노레포는 아니지만, 이 저장소는 여러 독립 프로젝트 포함:
- 각 수업은 독립적
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트에 집중해 작업 가능
- 전체 커리큘럼 체험을 위해 전체 저장소 클론 가능

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다했으나, 자동 번역에는 오류나 부정확성이 포함될 수 있음을 알려드립니다. 원문 문서는 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우 전문적인 인간 번역을 권장합니다. 본 번역의 사용으로 인한 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->