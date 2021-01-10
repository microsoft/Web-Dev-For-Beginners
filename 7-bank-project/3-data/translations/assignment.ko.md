# 코드 리팩터링 및 주석

## 설명

코드베이스가 커짐에 따라 코드를 자주 리팩터링하여 시간이 지남에 따라 가독성과 유지 관리가 가능하도록 유지하는 것이 중요합니다. 주석을 추가하고 `app.js` 를 리팩터링하여 코드 품질을 개선합니다.

- 서버 API 기본 URL과 같은 상수 추출
- 유사한 코드를 분해합니다. 예를 들어 `createAccount()` 및 `getAccount()` 모두에서 사용되는 코드를 다시 그룹화하는 `sendRequest()` 함수를 만들 수 있습니다.
- 읽기 쉽도록 코드 재구성 및 주석 추가

## 평가 기준

기준 | 모범 답안 | 적당한 답안 | 개선이 필요한 답안
--- | --- | --- | ---
 | Code is commented, well-organized in different sections and easy to read. Constants are extracted and a factorized `sendRequest()` function has been created. | Code is clean but can still be improved with more comments, constant extraction or factorization. | Code is messy, not commented, constants are not extracted and code is not factorized.
