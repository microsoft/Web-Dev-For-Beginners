# 은행 API

> [Node.js](https://nodejs.org) + [Express](https://expressjs.com/)로 구축된 은행 API입니다.

이 API는 이미 완성되어 있으며, 이번 연습의 일부가 아닙니다.

하지만 이런 API를 직접 구축하는 방법을 배우고 싶다면 다음 영상 시리즈를 참고하세요: https://aka.ms/NodeBeginner (17번부터 21번 영상에서 이 API를 다룹니다).

또한, 이 인터랙티브 튜토리얼을 확인해볼 수도 있습니다: https://aka.ms/learn/express-api

## 서버 실행하기

[Node.js](https://nodejs.org)가 설치되어 있는지 확인하세요.

1. 이 저장소를 Git 클론합니다: [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. 터미널을 열고 `Web-Dev-For-Beginners/7-bank-project/api` 폴더로 이동합니다.
3. `npm install`을 실행하고 패키지가 설치될 때까지 기다립니다(인터넷 연결 상태에 따라 시간이 걸릴 수 있습니다).
4. 설치가 완료되면 `npm start`를 실행하면 준비가 완료됩니다.

서버는 포트 `5000`에서 시작됩니다.  
*이 서버는 메인 은행 앱 서버 터미널(포트 `3000`에서 실행 중)과 함께 실행됩니다. 서버를 닫지 마세요.*

> 참고: 모든 항목은 메모리에 저장되며 영구적으로 저장되지 않습니다. 따라서 서버가 중지되면 모든 데이터가 손실됩니다.

## API 세부사항

경로                                         | 설명
---------------------------------------------|------------------------------------
GET    /api/                                 | 서버 정보를 가져옵니다
POST   /api/accounts/                        | 계정을 생성합니다. 예: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | 지정된 계정의 모든 데이터를 가져옵니다
DELETE /api/accounts/:user                   | 지정된 계정을 삭제합니다
POST   /api/accounts/:user/transactions      | 거래를 추가합니다. 예: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | 지정된 거래를 삭제합니다

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.