# AGENTS.md

## Project Overview

이 저장소는 초보자를 위한 웹 개발 기초 교육 커리큘럼 저장소입니다. 해당 커리큘럼은 Microsoft Cloud Advocates가 개발한 총 12주 과정으로, JavaScript, CSS 및 HTML을 다루는 24회의 실습 중심 수업으로 구성되어 있습니다.

### Key Components

- **교육 콘텐츠**: 프로젝트 기반 모듈로 구성된 24개의 체계적인 수업
- **실습 프로젝트**: 테라리움, 타이핑 게임, 브라우저 확장, 우주 게임, 뱅킹 앱, 코드 편집기, AI 채팅 도우미
- **인터랙티브 퀴즈**: 각 3문항씩 총 48개의 퀴즈 (수업 전/후 평가)
- **다국어 지원**: GitHub Actions를 통한 50개 이상의 언어 자동 번역
- **기술 스택**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI 프로젝트용)

### Architecture

- 수업 기반 구조의 교육 저장소
- 각 수업 폴더는 README, 코드 예제, 솔루션 포함
- 독립 프로젝트는 별도 디렉토리(quiz-app, 여러 수업 프로젝트)
- GitHub Actions(co-op-translator) 기반 번역 시스템
- Docsify로 문서 제공 및 PDF로 이용 가능

## Setup Commands

이 저장소는 주로 교육 콘텐츠 소비용입니다. 특정 프로젝트 작업 시:

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 개발 서버 시작
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 실행
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API 서버 시작
npm run lint       # ESLint 실행
npm run format     # Prettier로 포맷팅
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# 브라우저별 확장 프로그램 로딩 지침을 따르세요
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# 브라우저에서 index.html을 열거나 Live Server를 사용하세요
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN 환경 변수를 설정합니다
python api.py
```

## Development Workflow

### For Content Contributors

1. <strong>저장소를 포크</strong>하여 GitHub 계정에 복사
2. **포크한 저장소를 로컬에 클론**
3. **변경용 새 브랜치 생성**
4. 수업 콘텐츠 또는 코드 예제 수정
5. 관련 프로젝트 디렉토리에서 변경한 코드 테스트
6. 기여 가이드라인에 맞춘 Pull Request 제출

### For Learners

1. 저장소를 포크하거나 클론
2. 수업 디렉토리를 순서대로 이동
3. 각 수업의 README 파일 읽기
4. 수업 전 퀴즈 진행: https://ff-quizzes.netlify.app/web/
5. 수업 폴더 내 코드 예제 학습
6. 과제 및 도전 과제 수행
7. 수업 후 퀴즈 응시

### Live Development

- **문서 서버 실행**: 루트에서 `docsify serve` 실행 (포트 3000)
- **Quiz App**: quiz-app 디렉토리에서 `npm run dev` 실행
- <strong>프로젝트</strong>: HTML 프로젝트는 VS Code Live Server 확장 사용
- **API 프로젝트**: 해당 API 디렉토리에서 `npm start` 실행

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # 코드 스타일 문제 확인
npm run build      # 빌드 성공 여부 확인
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # 코드 스타일 문제 확인
node server.js     # 서버가 오류 없이 시작하는지 확인
```

### General Testing Approach

- 이 저장소는 포괄적인 자동화 테스트를 포함하지 않음 (교육용)
- 수동 테스트는 다음에 중점:
  - 코드 예제 오류 없이 실행 여부
  - 문서 내 링크 정상 작동
  - 프로젝트 빌드 성공
  - 예제가 베스트 프랙티스 준수

### Pre-submission Checks

- package.json 있는 디렉토리에서 `npm run lint` 실행
- 마크다운 링크 유효성 검사
- 브라우저 또는 Node.js에서 코드 예제 테스트
- 번역 파일 구조 유지 확인

## Code Style Guidelines

### JavaScript

- 최신 ES6+ 문법 사용
- 프로젝트 내 표준 ESLint 설정 준수
- 교육적 이해를 돕는 의미 있는 변수 및 함수명 사용
- 학습자를 위한 개념 설명 주석 추가
- Prettier 설정되어 있으면 포맷팅 적용

### HTML/CSS

- 시맨틱 HTML5 요소 사용
- 반응형 디자인 원칙 준수
- 명확한 클래스 명명 규칙
- CSS 기법 설명 주석 포함

### Python

- PEP 8 스타일 가이드라인 준수
- 명확하고 교육적인 코드 예제 작성
- 학습에 유용한 경우 타입 힌트 포함

### Markdown Documentation

- 명확한 제목 계층 구조
- 언어 명시된 코드 블록 사용
- 추가 자료 링크 포함
- `images/` 폴더 내 스크린샷 및 이미지
- 접근성을 위한 이미지 대체 텍스트 작성

### File Organization

- 수업은 순차적 번호로 정리 (1-getting-started-lessons, 2-js-basics 등)
- 각 프로젝트 내 `solution/`, `start/` 또는 `your-work/` 디렉토리 포함
- 수업별 `images/` 폴더에 이미지 저장
- 번역은 `translations/{language-code}/` 구조로 관리

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app은 Azure Static Web Apps 배포로 구성됨:

```bash
cd quiz-app
npm run build      # dist/ 폴더를 생성합니다
# main 브랜치에 푸시 시 GitHub Actions 워크플로를 통해 배포합니다
```

Azure Static Web Apps 구성:
- **앱 위치**: `/quiz-app`
- **출력 위치**: `dist`
- <strong>워크플로우</strong>: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # docsify-to-pdf 설치
npm run convert               # docs에서 PDF 생성
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # Docsify를 전역으로 설치
docsify serve                 # localhost:3000에서 서비스 실행
```

### Project-specific Builds

각 프로젝트 디렉토리별 별도 빌드 프로세스 가능:
- Vue 프로젝트: `npm run build`로 프로덕션 번들 생성
- 정적 프로젝트: 빌드 단계 없이 파일 직접 서빙

## Pull Request Guidelines

### Title Format

변경 분야가 명확하게 드러나는 제목 사용:
- `[Quiz-app] 수업 X용 신규 퀴즈 추가`
- `[Lesson-3] 테라리움 프로젝트 오타 수정`
- `[Translation] 5과 스페인어 번역 추가`
- `[Docs] 설치 지침 업데이트`

### Required Checks

PR 제출 전:

1. **코드 품질**:
   - 영향 받은 프로젝트 디렉토리에서 `npm run lint` 실행
   - 모든 린트 경고 및 오류 수정

2. **빌드 검증**:
   - 해당 시 `npm run build` 실행
   - 빌드 오류 없음 확인

3. **링크 검증**:
   - 모든 마크다운 링크 테스트
   - 이미지 참조 작동 여부 확인

4. **내용 검토**:
   - 맞춤법 및 문법 확인
   - 코드 예제 정확하고 교육적임 점 검토
   - 번역이 원래 의미 유지하는지 검토

### Contribution Requirements

- Microsoft CLA 동의 (첫 PR 자동 체크)
- [Microsoft 오픈소스 행동강령](https://opensource.microsoft.com/codeofconduct/) 준수
- 자세한 내용은 [CONTRIBUTING.md](./CONTRIBUTING.md) 참고
- 해당 시 PR 설명에 이슈 번호 명시

### Review Process

- 유지 관리자 및 커뮤니티가 PR 검토
- 교육적 명확성 우선 고려
- 코드 예제는 최신 모범 사례 준수해야 함
- 번역은 정확성과 문화적 적합성 검토

## Translation System

### Automated Translation

- GitHub Actions의 co-op-translator 워크플로우 사용
- 50개 이상의 언어로 자동 번역
- 원본 파일은 메인 디렉토리에 존재
- 번역 파일은 `translations/{language-code}/` 에 위치

### Adding Manual Translation Improvements

1. `translations/{language-code}/`에서 해당 파일 찾기
2. 구조 유지하며 개선 사항 적용
3. 코드 예제가 정상 작동하는지 확인
4. 현지화된 퀴즈 콘텐츠 테스트

### Translation Metadata

번역 파일들은 메타데이터 헤더 포함:
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

## Debugging and Troubleshooting

### Common Issues

**퀴즈 앱이 시작하지 않을 때**:
- Node.js 버전 (v14 이상 권장) 확인
- `node_modules` 및 `package-lock.json` 삭제 후 `npm install` 재실행
- 포트 충돌 확인 (기본: Vite는 5173 포트 사용)

**API 서버가 시작되지 않을 때**:
- Node.js 버전이 최소 요구(node >=10)인지 확인
- 포트 사용 중 여부 확인
- `npm install`로 모든 의존성 설치 완료 여부 확인

**브라우저 확장 프로그램이 로드되지 않을 때**:
- manifest.json 형식 올바른지 확인
- 브라우저 콘솔 오류 점검
- 브라우저별 확장 설치 지침 따라 설치

**Python 채팅 프로젝트 문제 시**:
- OpenAI 패키지 설치 확인: `pip install openai`
- GITHUB_TOKEN 환경변수 설정 여부 확인
- GitHub Models 접근 권한 점검

**Docsify가 문서 제공하지 않을 때**:
- 전역에 docsify-cli 설치: `npm install -g docsify-cli`
- 저장소 루트 디렉토리에서 실행
- `docs/_sidebar.md` 존재 확인

### Development Environment Tips

- HTML 프로젝트는 VS Code Live Server 확장 사용
- 일관된 포맷팅을위해 ESLint 및 Prettier 확장 설치
- 자바스크립트 디버깅은 브라우저 개발자 도구 활용
- Vue 프로젝트는 Vue DevTools 브라우저 확장 설치

### Performance Considerations

- 50개 이상 언어 번역 파일로 인해 전체 클론 시 용량 큼
- 콘텐츠 작업만 할 경우 얕은 클론 사용: `git clone --depth 1`
- 영어 콘텐츠 작업 시 번역 검색 제외 권장
- 빌드 초기 실행 시 느릴 수 있음 (npm install, Vite 빌드)

## Security Considerations

### Environment Variables

- API 키는 절대 저장소에 커밋하지 말 것
- `.env` 파일 사용 (.gitignore에 포함됨)
- 프로젝트 README에 필요 환경 변수 명시

### Python Projects

- 가상환경 사용 권장: `python -m venv venv`
- 의존성 최신 상태 유지
- GitHub 토큰 최소 권한 부여

### GitHub Models Access

- GitHub Models 접근에는 개인 액세스 토큰(PAT) 필요
- 토큰은 환경 변수로 관리
- 토큰 및 인증정보 저장소에 커밋 금지

## Additional Notes

### Target Audience

- 웹 개발 입문자
- 학생과 자기주도 학습자
- 교실 수업용 교육자
- 접근성과 점진적인 기술 향상에 중점 둔 콘텐츠

### Educational Philosophy

- 프로젝트 기반 학습 방식
- 빈번한 지식 점검(퀴즈)
- 실습 코딩 연습
- 실제 사례 적용 예시
- 프레임워크 학습 전에 기초에 집중

### Repository Maintenance

- 활발한 학습자 및 기여자 커뮤니티
- 정기적 의존성 및 콘텐츠 업데이트
- 유지 관리자에 의한 이슈 및 논의 모니터링
- GitHub Actions를 통한 번역 자동 업데이트

### Related Resources

- [Microsoft Learn 모듈](https://docs.microsoft.com/learn/)
- [학생 허브 리소스](https://docs.microsoft.com/learn/student-hub/)
- 학습자 추천 도구: [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 추가 강좌: 생성 AI, 데이터 사이언스, ML, IoT 커리큘럼 제공

### Working with Specific Projects

각 프로젝트별 자세한 지침은 README 파일 참조:
- `quiz-app/README.md` - Vue 3 기반 퀴즈 앱
- `7-bank-project/README.md` - 인증 기능 포함 뱅킹 앱
- `5-browser-extension/README.md` - 브라우저 확장 개발
- `6-space-game/README.md` - 캔버스 기반 게임 개발
- `9-chat-project/README.md` - AI 채팅 도우미 프로젝트

### Monorepo Structure

전통적인 모노레포는 아니지만 여러 독립 프로젝트 포함:
- 각 수업은 자립형
- 프로젝트 간 의존성 공유 없음
- 개별 프로젝트 작업 시 다른 프로젝트에 영향 없음
- 전체 커리큘럼을 위해 저장소 전체 클론 가능

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있으나, 자동 번역에는 오류나 부정확성이 있을 수 있음을 유의하시기 바랍니다. 원문 문서가 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우 전문적인 인간 번역을 권장합니다. 본 번역문 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->