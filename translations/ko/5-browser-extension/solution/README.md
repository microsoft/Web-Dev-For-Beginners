<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-23T23:48:58+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "ko"
}
-->
# Carbon Trigger 브라우저 확장 프로그램: 완성된 코드

tmrow의 C02 Signal API를 사용하여 전력 사용량을 추적하고, 브라우저에서 바로 지역의 전력 사용량이 얼마나 높은지 알 수 있는 알림을 제공하는 브라우저 확장 프로그램을 만들어보세요. 이 확장 프로그램을 즉석에서 사용하면 이 정보를 바탕으로 활동에 대한 판단을 내리는 데 도움이 됩니다.

![확장 프로그램 스크린샷](../../../../5-browser-extension/extension-screenshot.png)

## 시작하기

먼저 [npm](https://npmjs.com)을 설치해야 합니다. 이 코드를 컴퓨터의 폴더에 다운로드하세요.

필요한 패키지를 모두 설치합니다:

```
npm install
```

webpack을 사용하여 확장 프로그램을 빌드합니다:

```
npm run build
```

Edge 브라우저에 설치하려면 브라우저 오른쪽 상단의 '세 개의 점' 메뉴를 사용하여 확장 프로그램 패널을 찾으세요. 여기서 'Load Unpacked'를 선택하여 새 확장 프로그램을 로드합니다. 프롬프트에서 'dist' 폴더를 열면 확장 프로그램이 로드됩니다. 사용하려면 CO2 Signal API의 API 키가 필요합니다 ([이메일을 통해 여기서 받기](https://www.co2signal.com/) - 이 페이지의 상자에 이메일을 입력하세요)와 [Electricity Map](https://www.electricitymap.org/map)에 해당하는 [지역 코드](http://api.electricitymap.org/v3/zones)가 필요합니다 (예를 들어, 보스턴에서는 'US-NEISO'를 사용합니다).

![설치 과정](../../../../5-browser-extension/install-on-edge.png)

확장 프로그램 인터페이스에 API 키와 지역 코드를 입력하면 브라우저 확장 프로그램 바의 색상 점이 지역의 에너지 사용량을 반영하도록 변경됩니다. 이 점은 에너지 사용량에 따라 어떤 에너지 집약적인 활동이 적합한지에 대한 지침을 제공합니다. 이 '점' 시스템의 개념은 캘리포니아 배출량을 위한 [Energy Lollipop 확장 프로그램](https://energylollipop.com/)에서 영감을 받았습니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.