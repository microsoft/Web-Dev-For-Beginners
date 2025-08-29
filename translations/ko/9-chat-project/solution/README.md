<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:08:23+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "ko"
}
-->
# 코드 실행

## 설정

가상 환경 생성

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## 의존성 설치

```sh
pip install openai flask flask-cors 
```

## API 실행

```sh
python api.py
```

## 프론트엔드 실행

프론트엔드 폴더에 있는지 확인하세요.

*app.js* 파일을 찾아 `BASE_URL`을 백엔드 URL로 변경하세요.

실행하세요.

```
npx http-server -p 8000
```

채팅창에 메시지를 입력해보세요. 응답이 표시될 것입니다(이 작업을 Codespace에서 실행하거나 액세스 토큰을 설정한 경우).

## 액세스 토큰 설정 (Codespace에서 실행하지 않는 경우)

[개인 액세스 토큰 설정](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)을 참조하세요.

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전이 권위 있는 출처로 간주되어야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.