# AGENTS.md

## 프로젝트 개요

이 저장소는 초보자에게 웹 개발 기본을 가르치기 위한 교육 커리큘럼 저장소입니다. 커리큘럼은 Microsoft Cloud Advocates가 개발한 12주 과정으로, JavaScript, CSS, HTML을 다루는 24개의 실습 중심 수업으로 구성되어 있습니다.

### 주요 구성 요소

- **교육 콘텐츠**: 프로젝트 기반 모듈로 조직된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타자 게임, 브라우저 확장, 우주 게임, 뱅킹 앱, 코드 편집기, AI 채팅 어시스턴트
- **대화형 퀴즈**: 각 3문항씩 48개의 퀴즈 (수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### 아키텍처

- 수업 기반 구조의 교육 저장소
- 각 수업 폴더는 README, 코드 예제 및 솔루션 포함
- 별도의 디렉터리에 독립 프로젝트 존재 (quiz-app, 다양한 수업 프로젝트)
- GitHub Actions(co-op-translator)를 이용한 번역 시스템
- Docsify를 통한 문서 제공 및 PDF로도 이용 가능

## 설치 명령어

이 저장소는 주로 교육 콘텐츠 소비를 위한 것입니다. 특정 프로젝트 작업을 원할 경우:

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
# 브라우저별 확장 프로그램 로딩 지침을 따르세요
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

1. **저장소를 포크**하여 자신의 GitHub 계정으로 복사
2. **포크한 저장소를 로컬에 클론**
3. **변경 사항 작업용 브랜치 생성**
4. 수업 콘텐츠 또는 코드 예제 변경
5. 관련 프로젝트 디렉터리에서 코드 변경 사항 테스트
6. 기여 지침에 따라 풀 리퀘스트 제출

### 학습자용

1. 저장소를 포크하거나 클론
2. 수업 디렉터리를 순서대로 탐색
3. 각 수업의 README 파일 읽기
4. https://ff-quizzes.netlify.app/web/ 에서 수업 전 퀴즈 완료
5. 수업 폴더 내 코드 예제 실습
6. 과제 및 챌린지 완료
7. 수업 후 퀴즈 응시

### 실시간 개발

- **문서**: 루트에서 `docsify serve` 실행 (포트 3000)
- **퀴즈 앱**: quiz-app 디렉터리에서 `npm run dev` 실행
- **프로젝트**: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 해당 API 디렉터리에서 `npm start` 실행

## 테스트 지침

### 퀴즈 앱 테스트

```bash
cd quiz-app
npm run lint       # 코드 스타일 문제를 확인하세요
npm run build      # 빌드 성공 여부를 검증하세요
```

### 뱅크 API 테스트

```bash
cd 7-bank-project/api
npm run lint       # 코드 스타일 문제 확인
node server.js     # 오류 없이 서버가 시작되는지 확인
```

### 일반 테스트 방식

- 이 저장소는 포괄적인 자동화 테스트가 없는 교육 저장소입니다
- 수동 테스트는 다음에 중점:
  - 코드 예제 오류 없이 실행
  - 문서 내 링크 정상 작동
  - 프로젝트 빌드 성공 완료
  - 예제는 베스트 프랙티스 준수

### 사전 제출 점검

- package.json 있는 디렉터리에서 `npm run lint` 실행
- 마크다운 링크 유효성 확인
- 브라우저나 Node.js에서 코드 예제 테스트
- 번역 내용이 올바른 구조 유지하는지 점검

## 코드 스타일 지침

### JavaScript

- 최신 ES6+ 문법 사용
- 프로젝트에 제공된 표준 ESLint 설정 준수
- 교육적 명확성을 위한 의미 있는 변수 및 함수명 사용
- 학습자를 위한 개념 설명 주석 추가
- 구성된 경우 Prettier로 포맷팅

### HTML/CSS

- 시맨틱 HTML5 요소 사용
- 반응형 디자인 원칙 적용
- 명확한 클래스 명명 규칙
- 학습자용 CSS 기술 설명 주석

### Python

- PEP 8 스타일 가이드 준수
- 명확하고 교육적인 코드 예제
- 학습에 도움이 되는 타입 힌트 추가

### 마크다운 문서화

- 명확한 제목 계층 구조
- 언어 지정 코드 블록
- 추가 자료 링크 제공
- `images/` 디렉터리 내 스크린샷 및 이미지
- 접근성 위한 이미지 대체 텍스트 포함

### 파일 구성

- 수업은 순차 번호 매김 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트는 `solution/`과 종종 `start/` 또는 `your-work/` 디렉터리 포함
- 수업별 `images/` 폴더에 이미지 저장
- `translations/{language-code}/` 구조의 번역 파일

## 빌드 및 배포

### 퀴즈 앱 배포 (Azure Static Web Apps)

퀴즈 앱은 Azure Static Web Apps 배포용으로 설정됨:

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

### Docsify 문서

```bash
npm install -g docsify-cli    # Docsify를 전역으로 설치합니다
docsify serve                 # localhost:3000에서 서비스합니다
```

### 프로젝트별 빌드

각 프로젝트 디렉터리는 자체 빌드 프로세스 가질 수 있음:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없이 파일 직접 서빙

## 풀 리퀘스트 지침

### 제목 형식

변경 영역을 명확히 나타내는 제목 사용:
- `[Quiz-app] 레슨 X용 새 퀴즈 추가`
- `[Lesson-3] 테라리움 프로젝트 오타 수정`
- `[Translation] 레슨 5 스페인어 번역 추가`
- `[Docs] 설치 지침 업데이트`

### 필수 점검 사항

PR 제출 전:

1. **코드 품질**:
   - 관련 프로젝트 디렉터리에서 `npm run lint` 실행
   - 모든 린트 오류와 경고 수정

2. **빌드 확인**:
   - 해당 시 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 검증**:
   - 마크다운 내 모든 링크 테스트
   - 이미지 참조 정상 작동 확인

4. **콘텐츠 검토**:
   - 맞춤법 및 문법 교정
   - 코드 예제 정확하고 교육적임 확인
   - 번역이 원문의 의미 유지하는지 검증

### 기여 요건

- Microsoft CLA 동의(첫 PR 자동 검사)
- [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 상세 지침은 [CONTRIBUTING.md](./CONTRIBUTING.md) 참고
- 가능 시 PR 설명에 이슈 번호 참조

### 리뷰 프로세스

- PR은 유지 관리자 및 커뮤니티가 검토
- 교육적 명확성 우선시
- 코드 예제는 최신 베스트 프랙티스 준수 필요
- 번역은 정확성과 문화적 적합성 검토

## 번역 시스템

### 자동 번역

- co-op-translator 워크플로우가 포함된 GitHub Actions 사용
- 50개 이상의 언어로 자동 번역
- 원본 파일은 메인 디렉터리에 위치
- 번역 파일은 `translations/{language-code}/`에 위치

### 수동 번역 개선 추가

1. `translations/{language-code}/`에서 파일 찾기
2. 구조를 유지하며 개선 작업
3. 코드 예제가 정상 작동 유지 확인
4. 지역화된 퀴즈 내용 테스트

### 번역 메타데이터

번역 파일에는 메타데이터 헤더 포함:
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
- `node_modules`와 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 확인 (기본: Vite 5173 포트 사용)

**API 서버 실행 안 됨**:
- Node.js 버전 최소 요구사항 충족(node >=10) 확인
- 포트 사용 중인지 점검
- `npm install`로 모든 의존성 설치 여부 확인

**브라우저 확장 불러오기 실패**:
- manifest.json 형식 올바른지 확인
- 브라우저 콘솔에서 오류 점검
- 브라우저별 확장 설치 지침 준수

**Python 채팅 프로젝트 문제**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경 변수 설정 확인
- GitHub Models 접근 권한 점검

**Docsify 문서 미제공**:
- 전역 docsify-cli 설치: `npm install -g docsify-cli`
- 저장소 루트에서 실행
- `docs/_sidebar.md` 파일 존재 확인

### 개발 환경 팁

- HTML 프로젝트는 VS Code Live Server 확장 활용
- 일관된 포맷을 위한 ESLint 및 Prettier 확장 설치
- JavaScript 디버깅에 브라우저 개발자 도구 사용
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### 성능 고려 사항

- 50개 이상 언어 번역 파일 다수로 전체 클론 시 용량 큼
- 콘텐츠 작업 시는 얕은 복제 사용 권장: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역 파일 검색 제외 권장
- 첫 빌드 시 (npm install, Vite 빌드) 속도 느릴 수 있음

## 보안 고려사항

### 환경 변수

- API 키는 절대 저장소에 커밋 금지
- `.env` 파일 사용(이미 `.gitignore`에 포함)
- 프로젝트 README에 필요한 환경 변수 문서화

### Python 프로젝트

- 가상 환경 사용: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰은 최소 권한 부여

### GitHub Models 접근

- 개인 액세스 토큰(PAT) 필요
- 토큰은 환경 변수로 저장
- 절대 토큰이나 자격 증명 저장소 커밋 금지

## 추가 참고 사항

### 대상 사용자

- 웹 개발 완전 초보자
- 학생 및 독학자
- 교실에서 커리큘럼 이용하는 교사
- 접근성과 점진적 기술 향상에 중점 둔 콘텐츠

### 교육 철학

- 프로젝트 기반 학습 방법론
- 빈번한 지식 점검(퀴즈)
- 실습 코딩 연습
- 실제 적용 사례 예시
- 프레임워크보다 기본기에 집중

### 저장소 유지 관리

- 활발한 학습자 및 기여자 커뮤니티
- 의존성 및 콘텐츠 정기 업데이트
- 유지관리자가 이슈 및 토론 모니터링
- 번역 업데이트는 GitHub Actions로 자동화

### 관련 리소스

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [Student Hub 자료](https://docs.microsoft.com/learn/student-hub/)
- 학습자 추천: [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 추가 강좌: 생성 AI, 데이터 과학, ML, IoT 커리큘럼 제공

### 개별 프로젝트 작업

개별 프로젝트 관련 자세한 지침은 다음 README 파일 참고:
- `quiz-app/README.md` - Vue 3 퀴즈 애플리케이션
- `7-bank-project/README.md` - 인증 기능 포함 뱅킹 애플리케이션
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 어시스턴트 프로젝트

### 모노레포 구조

전통적 모노레포는 아니지만, 이 저장소에는 여러 독립 프로젝트가 포함됨:
- 각 수업은 독립적
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼 체험을 위해 전체 저장소 클론 가능

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있으나, 자동 번역은 오류나 부정확성이 포함될 수 있음을 유의해 주시기 바랍니다. 원문은 해당 언어의 원본 문서가 권위 있는 자료로 간주되어야 합니다. 중요한 정보의 경우, 전문 인간 번역가의 번역을 권장합니다. 본 번역의 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->