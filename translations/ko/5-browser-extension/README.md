# 브라우저 확장 프로그램 만들기

브라우저 확장 프로그램을 만드는 것은 앱의 성능을 생각하면서 새로운 유형의 웹 자산을 구축하는 재미있고 흥미로운 방법입니다. 이 모듈에서는 브라우저가 어떻게 작동하는지, 브라우저 확장 프로그램을 배포하는 방법, 폼을 만드는 방법, API를 호출하고 로컬 스토리지를 사용하는 방법, 웹사이트의 성능을 평가하고 개선하는 방법에 대한 수업을 포함하고 있습니다.

여러분은 Edge, Chrome, Firefox에서 작동하는 브라우저 확장 프로그램을 만들게 됩니다. 이 확장 프로그램은 특정 작업에 맞춰진 작은 웹사이트와 같은 형태로, [C02 Signal API](https://www.co2signal.com)를 사용하여 특정 지역의 전력 사용량과 탄소 집약도를 확인하고 해당 지역의 탄소 발자국에 대한 정보를 제공합니다.

이 확장 프로그램은 사용자가 API 키와 지역 코드를 폼에 입력하면 임시로 호출되어 지역 전력 사용량을 확인하고, 이를 통해 사용자의 전력 사용 결정을 영향을 줄 수 있는 데이터를 제공합니다. 예를 들어, 사용자는 자신의 지역에서 전력 사용량이 높은 시기에 탄소 집약적인 활동인 옷 건조기를 작동시키는 것을 지연시키는 것이 더 나을 수 있습니다.

### 주제

1. [브라우저에 대해](1-about-browsers/README.md)
2. [폼과 로컬 스토리지](2-forms-browsers-local-storage/README.md)
3. [백그라운드 작업과 성능](3-background-tasks-and-performance/README.md)

### 크레딧

![녹색 브라우저 확장 프로그램](../../../5-browser-extension/extension-screenshot.png)

## 크레딧

이 웹 탄소 트리거 아이디어는 Microsoft의 Green Cloud Advocacy 팀 리더이자 [Green Principles](https://principles.green/)의 저자인 Asim Hussain이 제공했습니다. 원래는 [웹사이트 프로젝트](https://github.com/jlooper/green)였습니다.

브라우저 확장 프로그램의 구조는 [Adebola Adeniran의 COVID 확장 프로그램](https://github.com/onedebos/covtension)에서 영향을 받았습니다.

'점' 아이콘 시스템의 개념은 캘리포니아 배출량을 위한 [Energy Lollipop](https://energylollipop.com/) 브라우저 확장 프로그램의 아이콘 구조에서 영감을 받았습니다.

이 수업은 [Jen Looper](https://www.twitter.com/jenlooper)가 ♥️를 담아 작성했습니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.