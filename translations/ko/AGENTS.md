# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자를 위한 웹 개발 기초 교육을 위한 교육 커리큘럼 저장소입니다. 커리큘럼은 Microsoft Cloud Advocates가 개발한 종합 12주 과정으로, JavaScript, CSS, HTML을 다루는 24개의 실습 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장, 우주 게임, 뱅킹 앱, 코드 에디터, AI 채팅 도우미
- **인터랙티브 퀴즈**: 각 3문항씩 48개의 퀴즈 (수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육 저장소
- 각 수업 폴더에는 README, 코드 예제, 솔루션 포함
- 별도 디렉터리에 독립 프로젝트 존재 (quiz-app, 다양한 수업 프로젝트)
- GitHub Actions(co-op-translator) 기반 번역 시스템
- Docsify를 통한 문서 제공 및 PDF 형식도 제공

## 설치 명령어

이 저장소는 주로 교육 콘텐츠 소비용입니다. 특정 프로젝트 작업을 위해:

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
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 실행
```

### 뱅크 프로젝트 API (Node.js + Express)

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
# index.html을 브라우저에서 열거나 라이브 서버를 사용하세요
```

### 채팅 프로젝트 (Python 백엔드)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 환경 변수를 설정하십시오
python api.py
```

## 개발 워크플로우

### 콘텐츠 기여자용

1. 저장소를 GitHub 계정에 **포크**합니다.
2. 포크한 저장소를 **로컬에 클론**합니다.
3. 변경사항을 위한 **새 브랜치 생성**합니다.
4. 수업 콘텐츠 또는 코드 예제를 수정합니다.
5. 관련 프로젝트 폴더 내 코드 변경 사항을 테스트합니다.
6. 기여 가이드라인에 따라 풀 리퀘스트를 제출합니다.

### 학습자용

1. 저장소를 포크하거나 클론합니다.
2. 수업 디렉터리를 순서대로 탐색합니다.
3. 각 수업의 README 파일을 읽습니다.
4. 수업 전 퀴즈를 https://ff-quizzes.netlify.app/web/ 에서 완료합니다.
5. 수업 폴더 내 코드 예제를 따라 작업합니다.
6. 과제와 챌린지를 완료합니다.
7. 수업 후 퀴즈를 봅니다.

### 실시간 개발

- **문서**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉터리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 각 API 디렉터리에서 `npm start` 실행

## 테스트 지침

### 퀴즈 앱 테스트

```bash
cd quiz-app
npm run lint       # 코드 스타일 문제 확인
npm run build      # 빌드 성공 여부 확인
```

### 뱅크 API 테스트

```bash
cd 7-bank-project/api
npm run lint       # 코드 스타일 문제를 확인하세요
node server.js     # 서버가 오류 없이 시작되는지 확인하세요
```

### 일반 테스트 접근법

- 이 저장소는 포괄적인 자동 테스트가 없는 교육용 저장소입니다.
- 수동 테스트는 다음에 집중합니다:
  - 코드 예제가 오류 없이 실행되는지
  - 문서 내 링크가 정상 작동하는지
  - 프로젝트 빌드가 성공적으로 완료되는지
  - 예제가 모범 사례를 따르는지

### 제출 전 점검 사항

- package.json 있는 디렉터리에서 `npm run lint` 실행
- 마크다운 링크가 유효한지 확인
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역본이 구조를 유지하는지 확인

## 코드 스타일 가이드

### 자바스크립트

- 최신 ES6+ 문법 사용
- 프로젝트에 제공된 표준 ESLint 설정 따름
- 교육용 명확성을 위한 의미 있는 변수 및 함수명 사용
- 개념 설명을 위한 주석 추가
- 설정된 경우 Prettier로 포맷팅

### HTML/CSS

- 의미 있는 HTML5 요소 사용
- 반응형 디자인 원칙 적용
- 명확한 클래스 명명 규칙
- CSS 기술 설명 주석

### 파이썬

- PEP 8 스타일 가이드 준수
- 명확하고 교육적인 코드 예제
- 학습에 도움이 되는 경우 타입 힌트 사용

### 마크다운 문서

- 명확한 제목 계층 구조
- 언어 지정 코드 블록
- 추가 자료로의 링크 포함
- `images/` 디렉터리 내 스크린샷 및 이미지
- 접근성을 위한 이미지 대체 텍스트

### 파일 구성

- 수업은 순차적으로 번호 매김 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트는 `solution/`과 종종 `start/` 또는 `your-work/` 디렉터리 포함
- 이미지는 수업별 `images/` 폴더에 저장
- 번역은 `translations/{language-code}/` 구조

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

quiz-app은 Azure Static Web Apps 배포에 맞게 구성됨:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 생성합니다
# main 브랜치에 푸시할 때 GitHub Actions 워크플로우를 통해 배포합니다
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
docsify serve                 # localhost:3000에서 서비스
```

### 프로젝트별 빌드

각 프로젝트 디렉터리에는 별도의 빌드 프로세스가 있을 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없이 직접 파일 제공

## 풀 리퀘스트 가이드라인

### 제목 형식

변경 영역을 명확하고 서술적으로 표시:
- `[Quiz-app] 새로운 퀴즈 추가 - 수업 X`
- `[Lesson-3] 테라리움 프로젝트 오타 수정`
- `[Translation] 수업 5 스페인어 번역 추가`
- `[Docs] 설치 지침 업데이트`

### 필요한 점검 사항

PR 제출 전:

1. **코드 품질**:
   - 관련 프로젝트 디렉터리에서 `npm run lint` 실행
   - 모든 린트 오류 및 경고 수정

2. **빌드 검증**:
   - 적용 가능한 경우 `npm run build` 실행
   - 빌드 오류 없는지 확인

3. **링크 검증**:
   - 마크다운 내 모든 링크 테스트
   - 이미지 참조 정상 작동 확인

4. **콘텐츠 검토**:
   - 맞춤법 및 문법 교정
   - 코드 예제가 정확하고 교육적임 확인
   - 번역이 원문 의미 유지하는지 검증

### 기여 조건

- Microsoft CLA 동의 (첫 PR 시 자동 검사)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md) 참조
- PR 설명에 이슈 번호 포함 시 명기

### 검토 프로세스

- PR은 유지 관리자 및 커뮤니티가 검토
- 교육적 명확성 우선시
- 코드 예제는 최신 모범 사례 따라야 함
- 번역은 정확성 및 문화 적합성 검토

## 번역 시스템

### 자동 번역

- co-op-translator 워크플로우가 포함된 GitHub Actions 사용
- 50개 이상의 언어로 자동 번역
- 소스 파일은 메인 디렉터리 내
- 번역 파일은 `translations/{language-code}/` 위치

### 수동 번역 개선 추가 방법

1. `translations/{language-code}/`에서 파일 위치 확인
2. 구조를 유지하며 개선 작업 수행
3. 코드 예제 기능 유지 확인
4. 현지화된 퀴즈 콘텐츠 테스트

### 번역 메타데이터

번역 파일은 다음과 같은 메타데이터 헤더 포함:
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

**퀴즈 앱 실행 실패**:
- Node.js 버전 확인 (v14+ 권장)
- `node_modules`와 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 확인 (기본: Vite는 5173 포트 사용)

**API 서버 시작 안 됨**:
- Node.js 버전(≥10) 확인
- 포트 사용 중인지 확인
- `npm install`로 모든 의존성 설치 여부 확인

**브라우저 확장 로드 실패**:
- manifest.json 형식 점검
- 브라우저 콘솔 오류 확인
- 브라우저별 확장 설치 지침 준수

**파이썬 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 확인
- GitHub Models 접근 권한 점검

**Docsify 문서 미서빙**:
- docsify-cli 전역 설치: `npm install -g docsify-cli`
- 저장소 루트 디렉터리에서 실행
- `docs/_sidebar.md` 파일 존재 확인

### 개발 환경 팁

- HTML 프로젝트에 VS Code Live Server 확장 사용
- 일관된 포맷팅을 위해 ESLint 및 Prettier 확장 설치
- JavaScript 디버깅에 브라우저 개발자 도구 활용
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### 성능 고려사항

- 번역 파일이 50여 개 이상이라 전체 클론 시 용량 큼
- 콘텐츠 작업만 할 경우 `git clone --depth 1` 등 얕은 클론 사용 권장
- 영어 콘텐츠 작업 시 번역 파일 검색 제외
- 초기 실행 시 빌드 및 설치 속도 느릴 수 있음

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (이미 `.gitignore`에 포함됨)
- 프로젝트 README에 필요한 환경 변수 문서화

### 파이썬 프로젝트

- 가상 환경 사용: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰은 최소 권한 설정

### GitHub Models 접근

- 개인 액세스 토큰(PAT) 필요
- 토큰은 환경 변수로 저장
- 토큰이나 인증 정보를 절대 커밋하지 말 것

## 추가 참고 사항

### 대상 사용자

- 웹 개발 완전 초보자
- 학생과 독학자
- 교실 수업에 커리큘럼 활용하는 교사
- 접근성 및 점진적 기술 향상을 위한 콘텐츠 설계

### 교육 철학

- 프로젝트 기반 학습 방식
- 빈번한 지식 점검 (퀴즈)
- 실습 코딩 연습
- 실세계 적용 예제
- 프레임워크보다 기본기 집중

### 저장소 유지 관리

- 활발한 학습자 및 기여자 커뮤니티
- 의존성과 콘텐츠 정기 업데이트
- 이슈 및 토론 지속 모니터링
- 번역 업데이트 자동화(GitHub Actions)

### 관련 리소스

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [Student Hub 리소스](https://docs.microsoft.com/learn/student-hub/)
- 학습자를 위한 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 권장
- 추가 코스: 생성형 AI, 데이터 과학, 머신러닝, IoT 커리큘럼 제공

### 개별 프로젝트 작업 방법

개별 프로젝트에 대한 자세한 지침은 다음 README 참조:
- `quiz-app/README.md` - Vue 3 퀴즈 애플리케이션
- `7-bank-project/README.md` - 인증 기능 있는 뱅킹 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 도우미 프로젝트

### 모노레포 구조

전통적인 모노레포는 아니지만, 이 저장소는 다수 독립 프로젝트 포함:
- 각 수업은 독립적으로 구성됨
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼 경험을 위해 저장소 전체 클론 권장

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있으나, 자동 번역은 오류나 부정확성이 포함될 수 있음을 양지하시기 바랍니다. 원본 문서는 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우 전문적인 인간 번역을 권장합니다. 본 번역의 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->