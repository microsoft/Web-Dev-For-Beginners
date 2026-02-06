# Carbon Trigger 브라우저 확장: 전체 코드

tmrow의 CO2 Signal API를 사용하여 전기 사용량을 추적하고, 브라우저에서 바로 지역의 전기 소비에 대한 알림을 받을 수 있는 브라우저 확장을 만드세요. 이 임시 확장을 사용하면 이러한 정보를 기반으로 활동에 대한 결정을 내리는 데 도움이 됩니다.

![extension screenshot](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## 시작하기

[npm](https://npmjs.com)을 설치해야 합니다. 이 코드를 컴퓨터의 폴더에 다운로드하세요.

필요한 모든 패키지를 설치하세요:

```
npm install
```

Webpack을 사용하여 확장을 빌드하세요:

```
npm run build
```

Edge에 설치하려면, 브라우저 오른쪽 상단의 '세 점' 메뉴를 사용하여 확장 프로그램 패널을 찾으세요. 거기에서 '압축 해제된 확장 프로그램 로드'를 선택하여 새 확장을 로드하세요. 요청 시 'dist' 폴더를 열면 확장이 로드됩니다. 사용하려면 CO2 Signal API의 API 키가 필요합니다 ([여기에서 이메일로 받을 수 있습니다](https://www.co2signal.com/) - 이 페이지의 상자에 이메일을 입력하세요) 그리고 [전기 지도](https://www.electricitymap.org/map)에 해당하는 [지역 코드](http://api.electricitymap.org/v3/zones)가 필요합니다 (예: 보스턴에서는 'US-NEISO'를 사용합니다).

![installing](../../../../../5-browser-extension/solution/start/install-on-edge.png)

확장 프로그램 인터페이스에 API 키와 지역을 입력하면, 브라우저 확장 바의 색상 점이 지역의 에너지 사용량을 반영하도록 변경되고, 에너지 소비가 높은 활동에 대한 적합성을 알려주는 지표를 제공합니다. 이 "점" 시스템의 개념은 캘리포니아 배출량을 위한 [Energy Lollipop 확장](https://energylollipop.com/)에서 영감을 받았습니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.