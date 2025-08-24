<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-23T23:54:17+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "ko"
}
-->
# 카본 트리거 브라우저 확장 기능: 완성된 코드

tmrow의 CO2 Signal API를 사용하여 전력 사용량을 추적하고, 브라우저에서 지역의 전력 사용량이 얼마나 많은지 알림으로 표시할 수 있는 브라우저 확장 기능을 구축합니다. 이 확장 기능을 활용하면 이 정보를 바탕으로 자신의 활동을 결정할 수 있습니다.

![extension screenshot](../../../../../5-browser-extension/extension-screenshot.png)

## 시작하기

[npm](https://npmjs.com)이 설치되어 있어야 합니다. 이 코드를 컴퓨터의 폴더에 다운로드하세요.

필요한 패키지를 모두 설치합니다.

```
npm install
```

webpack을 사용하여 확장 기능을 빌드합니다.

```
npm run build
```

Edge에 설치하려면 브라우저 오른쪽 상단의 "세 개의 점" 메뉴에서 "확장 기능" 패널을 찾습니다. 거기서 "Load Unpacked"를 선택하여 새 확장 기능을 로드합니다. 프롬프트에서 "dist" 폴더를 열면 확장 기능이 로드됩니다. 사용하려면 CO2 Signal API의 API 키 ([이메일을 통해 여기서 받기](https://www.co2signal.com/) - 페이지의 박스에 이메일을 입력하세요)와 [Electricity Map](https://www.electricitymap.org/map)에 해당하는 [지역 코드](http://api.electricitymap.org/v3/zones)가 필요합니다 (예를 들어, 보스턴에서는 'US-NEISO'를 사용합니다).

![installing](../../../../../5-browser-extension/install-on-edge.png)

API 키와 지역 코드를 확장 인터페이스에 입력하면 브라우저 확장 바에 표시되는 색깔 있는 점이 변하며, 해당 지역의 에너지 사용량을 반영하여 어떤 에너지를 필요로 하는 활동을 수행하기에 적합한지 알려줍니다. 이 "점" 시스템의 개념은 캘리포니아주의 배출량을 위한 [Energy Lollipop extension](https://energylollipop.com/)에서 영감을 받았습니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있으나, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.