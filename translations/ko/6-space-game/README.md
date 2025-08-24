<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c40a698395ee5102715f7880bba3f2e7",
  "translation_date": "2025-08-23T22:51:38+00:00",
  "source_file": "6-space-game/README.md",
  "language_code": "ko"
}
-->
# 우주 게임 만들기

더 고급 JavaScript 기초를 배우기 위한 우주 게임

이 강의에서는 여러분만의 우주 게임을 만드는 방법을 배웁니다. "스페이스 인베이더"라는 게임을 해본 적이 있다면, 이 게임은 같은 아이디어를 가지고 있습니다: 우주선을 조종하며 위에서 내려오는 몬스터를 공격하는 것입니다. 완성된 게임은 다음과 같은 모습입니다:

![완성된 게임](../../../6-space-game/images/pewpew.gif)

이 여섯 가지 강의에서 다음을 배우게 됩니다:

- **상호작용**: Canvas 요소를 사용하여 화면에 그림을 그리는 방법
- **이해**: 데카르트 좌표계
- **학습**: Pub-Sub 패턴을 활용하여 유지보수와 확장이 쉬운 게임 아키텍처를 만드는 방법
- **활용**: Async/Await를 사용하여 게임 리소스를 로드하는 방법
- **처리**: 키보드 이벤트를 다루는 방법

## 개요

- 이론
   - [JavaScript로 게임 만들기 소개](1-introduction/README.md)
- 실습
   - [캔버스에 그리기](2-drawing-to-canvas/README.md)
   - [화면에서 요소 이동시키기](3-moving-elements-around/README.md)
   - [충돌 감지](4-collision-detection/README.md)
   - [점수 기록](5-keeping-score/README.md)
   - [게임 종료 및 재시작](6-end-condition/README.md)

## 출처

이 게임에 사용된 에셋은 https://www.kenney.nl/에서 가져왔습니다.  
게임 제작에 관심이 있다면, 이곳에는 정말 훌륭한 에셋들이 많습니다. 대부분 무료이고 일부는 유료입니다.

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 당사는 책임을 지지 않습니다.