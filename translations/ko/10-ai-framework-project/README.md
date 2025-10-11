<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:22:21+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ko"
}
-->
# AI 프레임워크

AI 프레임워크는 프로젝트를 구축하는 데 걸리는 시간을 크게 단축시킬 수 있는 도구입니다. 이 프로젝트에서는 이러한 프레임워크가 해결하는 문제를 이해하고 직접 프로젝트를 만들어 보겠습니다.

## 프레임워크를 사용하는 이유

AI를 사용할 때는 다양한 접근 방식과 이를 선택하는 이유가 있습니다. 다음은 몇 가지 예입니다:

- **SDK 없음**: 대부분의 AI 모델은 HTTP 요청을 통해 직접 상호작용할 수 있습니다. 이 접근 방식은 작동하며, SDK 옵션이 없는 경우 유일한 선택일 수 있습니다.
- **SDK 사용**: SDK를 사용하는 것이 일반적으로 권장됩니다. SDK를 사용하면 모델과 상호작용하기 위해 작성해야 할 코드가 줄어듭니다. 하지만 SDK는 특정 모델에 한정되는 경우가 많아, 다른 모델을 사용할 때는 추가적인 코드를 작성해야 할 수도 있습니다.
- **프레임워크 사용**: 프레임워크는 일반적으로 한 단계 더 나아가, 여러 모델을 사용할 때 하나의 API를 제공하며, 초기 설정만 다를 뿐입니다. 또한 프레임워크는 도구, 메모리, 워크플로우, 에이전트 등을 처리하는 유용한 추상화를 제공하며, 코드 작성량을 줄여줍니다. 프레임워크는 보통 특정 방식에 대해 의견을 가지고 있어, 그 방식에 동의한다면 매우 유용할 수 있지만, 프레임워크가 지원하지 않는 맞춤형 작업을 시도할 경우 한계가 있을 수 있습니다. 또한 프레임워크가 지나치게 단순화하여 중요한 주제를 배우지 못하게 되어 성능에 악영향을 미칠 수도 있습니다.

일반적으로, 작업에 적합한 도구를 사용하는 것이 중요합니다.

## 소개

이 강의에서는 다음을 배웁니다:

- 일반적인 AI 프레임워크 사용법
- 대화형 문제, 도구 사용, 메모리 및 컨텍스트와 같은 일반적인 문제 해결
- 이를 활용하여 AI 앱을 구축하는 방법

## 첫 번째 프롬프트

첫 번째 앱 예제에서는 AI 모델에 연결하고 프롬프트를 사용하여 쿼리하는 방법을 배웁니다.

### Python 사용하기

이 예제에서는 Langchain을 사용하여 GitHub 모델에 연결합니다. `ChatOpenAI`라는 클래스를 사용하며, `api_key`, `base_url`, `model` 필드를 제공합니다. 토큰은 GitHub Codespaces에서 자동으로 채워지며, 로컬에서 앱을 실행하는 경우 개인 액세스 토큰을 설정해야 합니다.

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What's the capital of France?")
print(response.content)
```

이 코드에서 우리는:

- `ChatOpenAI`를 호출하여 클라이언트를 생성합니다.
- `llm.invoke`를 사용하여 프롬프트로 응답을 생성합니다.
- `print(response.content)`로 응답을 출력합니다.

다음과 같은 응답을 볼 수 있습니다:

```text
The capital of France is Paris.
```

## 대화형 채팅

앞서 본 섹션에서는 일반적으로 "제로 샷 프롬팅"이라고 불리는 단일 프롬프트와 응답을 사용하는 방법을 살펴보았습니다.

하지만 종종 여러 메시지가 교환되는 대화를 유지해야 하는 상황에 직면하게 됩니다.

### Python 사용하기

Langchain에서는 대화를 리스트에 저장할 수 있습니다. `HumanMessage`는 사용자로부터의 메시지를 나타내며, `SystemMessage`는 AI의 "성격"을 설정하기 위한 메시지입니다. 아래 예제에서는 AI에게 캡틴 피카드의 성격을 가지도록 지시하고, 인간/사용자가 "Tell me about you"라는 프롬프트를 묻는 방법을 보여줍니다.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

이 예제의 전체 코드는 다음과 같습니다:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

다음과 같은 결과를 볼 수 있습니다:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

대화 상태를 유지하려면, 채팅 응답을 추가하여 대화를 기억할 수 있습니다. 다음은 그 방법입니다:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)

print(response.content)

print("---- Next ----")

messages.append(response)
messages.append(HumanMessage(content="Now that I know about you, I'm Chris, can I be in your crew?"))

response  = llm.invoke(messages)

print(response.content)

```

위 대화에서 볼 수 있듯이, 우리는 LLM을 두 번 호출합니다. 처음에는 두 개의 메시지로 구성된 대화로 호출하고, 두 번째는 더 많은 메시지가 추가된 대화로 호출합니다.

실제로 이 코드를 실행하면 두 번째 응답이 다음과 비슷한 내용일 것입니다:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

그걸 긍정으로 받아들일게요 ;)

## 스트리밍 응답

TODO

## 프롬프트 템플릿

TODO

## 구조화된 출력

TODO

## 도구 호출

도구는 LLM에 추가적인 능력을 부여하는 방법입니다. 아이디어는 LLM에게 사용할 수 있는 함수에 대해 알려주고, 프롬프트가 이러한 도구의 설명과 일치하면 해당 도구를 호출하는 것입니다.

### Python 사용하기

다음과 같이 도구를 추가해 보겠습니다:

```python
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}
```

여기서 우리는 `add`라는 도구의 설명을 생성합니다. `TypedDict`를 상속받고 `a`와 `b` 같은 `Annotated` 타입의 멤버를 추가함으로써, 이를 LLM이 이해할 수 있는 스키마로 변환할 수 있습니다. 함수 생성은 특정 도구가 식별되었을 때 수행할 작업을 보장하는 딕셔너리입니다.

다음으로 이 도구를 사용하여 LLM을 호출하는 방법을 살펴보겠습니다:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

여기서 우리는 `bind_tools`를 `tools` 배열과 함께 호출하여 LLM `llm_with_tools`가 이 도구에 대한 지식을 가지게 합니다.

이 새로운 LLM을 사용하려면 다음 코드를 입력할 수 있습니다:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

이제 도구가 있는 새로운 LLM에서 `invoke`를 호출하면, `tool_calls` 속성이 채워질 수 있습니다. 이 속성에는 식별된 도구의 `name`과 `args` 속성이 포함되어 있어 어떤 도구를 호출해야 하는지와 인수를 식별합니다. 전체 코드는 다음과 같습니다:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

이 코드를 실행하면 다음과 비슷한 출력이 나타납니다:

```text
TOOL CALL:  15
CONTENT: 
```

이 출력은 LLM이 "What is 3 + 12"라는 프롬프트를 `add` 도구를 호출해야 한다고 분석했음을 의미합니다. 이는 도구의 이름, 설명 및 멤버 필드 설명 덕분입니다. 답이 15인 이유는 우리가 `functions` 딕셔너리를 사용하여 이를 호출했기 때문입니다:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### 웹 API를 호출하는 더 흥미로운 도구

두 숫자를 더하는 도구는 도구 호출이 어떻게 작동하는지 보여주는 데는 흥미롭지만, 일반적으로 도구는 웹 API를 호출하는 것과 같이 더 흥미로운 작업을 수행합니다. 다음 코드를 사용하여 이를 수행해 보겠습니다:

```python
class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

query = "Tell me a joke about animals"

# the rest of the code is the same
```

이 코드를 실행하면 다음과 같은 응답을 받을 수 있습니다:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

전체 코드는 다음과 같습니다:

```python
from langchain_openai import ChatOpenAI
import requests
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

tools = [add, joke]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "Tell me a joke about animals"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        # print("TOOL CALL: ", tool)
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

## 임베딩

콘텐츠를 벡터화하고 코사인 유사도를 통해 비교합니다.

https://python.langchain.com/docs/how_to/embed_text/

### 문서 로더

PDF 및 CSV

## 앱 구축

TODO

## 과제

## 요약

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 노력하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서를 해당 언어로 작성된 상태에서 권위 있는 자료로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.