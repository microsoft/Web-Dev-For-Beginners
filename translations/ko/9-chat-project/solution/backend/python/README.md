<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T15:52:00+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ko"
}
-->
# 코드 실행

## 설정

가상 환경 생성

```sh
python -m venv venv
source ./venv/bin/activate
```

## 종속성 설치

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API 실행

```sh
# 방법 1: 직접 실행
python api.py

# 방법 2: uvicorn 사용
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API 테스트

대화형 API 문서 방문: `http://localhost:5000/docs`

## 프론트엔드 실행

반드시 프론트엔드 폴더에 위치해 있어야 합니다

*app.js*를 찾아 `BASE_URL`을 백엔드 URL로 변경하세요

실행하세요

```
npx http-server -p 8000
```

채팅에 메시지를 입력해보세요, 응답을 볼 수 있을 것입니다 (Codespace에서 실행 중이거나 액세스 토큰을 설정한 경우).

## 액세스 토큰 설정 (Codespace에서 실행하지 않는 경우)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) 참조하세요

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있음을 양지해 주시기 바랍니다. 본래 문서의 원본 언어가 권위 있는 출처임을 참고하시기 바랍니다. 중요한 정보의 경우, 전문 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->