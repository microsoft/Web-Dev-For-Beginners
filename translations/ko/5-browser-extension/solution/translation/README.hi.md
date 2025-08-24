<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-23T23:50:46+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "ko"
}
-->
# 카본 트리거 브라우저 확장 프로그램: 완성된 코드

tmrow의 CO2 Signal API를 사용하여 전력 사용량을 추적하고, 브라우저에서 해당 지역의 전력 사용이 얼마나 높은지 알려주는 알림을 제공하는 브라우저 확장 프로그램을 제작합니다. 이 확장 프로그램을 사용하면 이러한 정보를 바탕으로 자신의 활동을 결정하는 데 도움을 받을 수 있습니다.

![확장 프로그램 스크린샷](../../../../../5-browser-extension/extension-screenshot.png)

## 시작하기

[npm](https://npmjs.com)을 설치해야 합니다. 이 코드를 컴퓨터의 폴더에 다운로드하세요.

필요한 모든 패키지를 설치합니다:

```
npm install
```

웹팩을 사용해 확장 프로그램을 빌드합니다:

```
npm run build
```

Edge 브라우저에 설치하려면, 브라우저 오른쪽 상단의 '세 개의 점' 메뉴를 사용해 확장 프로그램 패널을 찾으세요. 거기에서 '압축 해제된 확장 프로그램 로드'를 선택합니다. 프롬프트가 나타나면 'dist' 폴더를 열어 확장 프로그램을 로드하세요. 이 확장 프로그램을 사용하려면 CO2 Signal API ([여기에서 이메일을 통해 API 키를 받으세요](https://www.co2signal.com/) - 해당 페이지의 상자에 이메일을 입력하세요)와 [지역 코드](http://api.electricitymap.org/v3/zones)가 필요합니다. 지역 코드는 [Electricity Map](https://www.electricitymap.org/map)에서 확인할 수 있습니다 (예: 보스턴의 경우 'US-NEISO'를 사용합니다).

![설치 중](../../../../../5-browser-extension/install-on-edge.png)

API 키와 지역 코드를 확장 프로그램 인터페이스에 입력하면, 브라우저 확장 프로그램 바에 있는 색깔 점이 해당 지역의 에너지 사용량을 반영하도록 변경됩니다. 이를 통해 에너지 집약적인 활동이 적절한지 여부를 판단할 수 있는 지표를 제공합니다. 이 '점' 시스템의 개념은 캘리포니아 배출량을 위한 [Energy Lollipop 확장 프로그램](https://energylollipop.com/)에서 영감을 받았습니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.