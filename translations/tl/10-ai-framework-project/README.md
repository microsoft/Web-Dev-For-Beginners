<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:29:37+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "tl"
}
-->
# AI Framework

Maraming AI framework ang magagamit na maaaring lubos na mapabilis ang oras ng paggawa ng isang proyekto. Sa proyektong ito, magtutuon tayo sa pag-unawa sa mga problemang tinutugunan ng mga framework na ito at gagawa tayo ng sarili nating proyekto.

## Bakit gumamit ng framework

Pagdating sa paggamit ng AI, may iba't ibang paraan at dahilan para piliin ang mga ito. Narito ang ilan:

- **Walang SDK**, karamihan sa mga AI model ay nagbibigay-daan sa iyo na direktang makipag-ugnayan sa AI model gamit ang halimbawa, HTTP requests. Ang paraang ito ay gumagana at minsan ay maaaring maging tanging opsyon kung walang SDK na magagamit.
- **SDK**, ang paggamit ng SDK ay karaniwang inirerekomenda dahil mas kaunting code ang kailangang isulat para makipag-ugnayan sa iyong model. Karaniwan itong limitado sa isang partikular na model, at kung gumagamit ng iba't ibang model, maaaring kailangan mong magsulat ng bagong code para suportahan ang mga karagdagang model.
- **Framework**, ang framework ay karaniwang nagdadala ng mga bagay sa mas mataas na antas sa paraang kung kailangan mong gumamit ng iba't ibang model, may isang API para sa lahat ng ito, at ang pagkakaiba ay karaniwang nasa paunang setup. Bukod dito, ang mga framework ay nagdadala ng kapaki-pakinabang na mga abstraction tulad ng sa AI space, maaari nilang pamahalaan ang mga tool, memory, workflows, agents, at iba pa habang mas kaunting code ang isinusulat. Dahil ang mga framework ay karaniwang may sariling pananaw, maaari itong maging kapaki-pakinabang kung susundin mo ang kanilang paraan, ngunit maaaring hindi ito sapat kung susubukan mong gumawa ng isang bagay na hindi karaniwan na hindi saklaw ng framework. Minsan, ang framework ay maaaring masyadong gawing simple ang mga bagay, kaya maaaring hindi mo matutunan ang isang mahalagang paksa na maaaring makaapekto sa performance sa hinaharap.

Sa pangkalahatan, gamitin ang tamang tool para sa trabaho.

## Panimula

Sa araling ito, matututunan natin:

- Gumamit ng karaniwang AI framework.
- Tugunan ang mga karaniwang problema tulad ng chat conversations, paggamit ng tool, memorya, at konteksto.
- Gamitin ito upang makabuo ng mga AI app.

## Unang prompt

Sa unang halimbawa ng app, matututunan natin kung paano kumonekta sa isang AI model at mag-query gamit ang isang prompt.

### Gamit ang Python

Para sa halimbawang ito, gagamit tayo ng Langchain upang kumonekta sa GitHub Models. Maaari nating gamitin ang isang klase na tinatawag na `ChatOpenAI` at bigyan ito ng mga field na `api_key`, `base_url`, at `model`. Ang token ay awtomatikong pinupunan sa loob ng GitHub Codespaces, at kung pinapatakbo mo ang app nang lokal, kailangan mong mag-set up ng personal access token para gumana ito.

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

Sa code na ito, ginagawa natin ang sumusunod:

- Tumawag sa `ChatOpenAI` upang lumikha ng client.
- Gumamit ng `llm.invoke` gamit ang isang prompt upang lumikha ng response.
- I-print ang response gamit ang `print(response.content)`.

Makikita mo ang isang response na katulad ng:

```text
The capital of France is Paris.
```

## Chat conversation

Sa nakaraang seksyon, nakita mo kung paano natin ginamit ang tinatawag na zero shot prompting, isang prompt na sinusundan ng response.

Gayunpaman, madalas kang nasa sitwasyon kung saan kailangan mong panatilihin ang isang pag-uusap na may maraming mensahe na ipinagpapalitan sa pagitan mo at ng AI assistant.

### Gamit ang Python

Sa Langchain, maaari nating i-store ang pag-uusap sa isang listahan. Ang `HumanMessage` ay kumakatawan sa mensahe mula sa user, at ang `SystemMessage` ay mensahe na nagtatakda ng "personality" ng AI. Sa halimbawa sa ibaba, makikita mo kung paano natin inutusan ang AI na mag-assume ng personality ni Captain Picard at para sa tao/user na magtanong ng "Tell me about you" bilang prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Ang buong code para sa halimbawang ito ay ganito:

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

Makikita mo ang resulta na katulad ng:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Upang mapanatili ang estado ng pag-uusap, maaari mong idagdag ang response mula sa chat upang maalala ang pag-uusap. Ganito ang paraan:

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

Makikita natin mula sa pag-uusap sa itaas kung paano natin tinawag ang LLM nang dalawang beses, una sa pag-uusap na binubuo ng dalawang mensahe lamang, at pagkatapos ay pangalawang beses na may mas maraming mensahe na idinagdag sa pag-uusap.

Sa katunayan, kung patakbuhin mo ito, makikita mo ang pangalawang response na katulad ng:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Sasabihin ko na maaaring oo ;)

## Streaming responses

TODO

## Prompt templates

TODO

## Structured output

TODO

## Tool calling

Ang mga tool ay kung paano natin binibigyan ang LLM ng karagdagang kakayahan. Ang ideya ay sabihin sa LLM ang tungkol sa mga function na mayroon ito, at kung ang isang prompt ay tumutugma sa deskripsyon ng isa sa mga tool na ito, tatawagin natin ang mga ito.

### Gamit ang Python

Magdagdag tayo ng ilang tool tulad nito:

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

Ang ginagawa natin dito ay lumikha ng deskripsyon ng isang tool na tinatawag na `add`. Sa pamamagitan ng pagmamana mula sa `TypedDict` at pagdaragdag ng mga miyembro tulad ng `a` at `b` ng uri na `Annotated`, maaari itong ma-convert sa isang schema na maiintindihan ng LLM. Ang paglikha ng mga function ay isang dictionary na nagsisiguro na alam natin kung ano ang gagawin kung ang isang partikular na tool ay natukoy.

Tingnan natin kung paano natin tatawagin ang LLM gamit ang tool na ito:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Dito, tinatawag natin ang `bind_tools` gamit ang ating `tools` array, kaya ang LLM `llm_with_tools` ay may kaalaman na tungkol sa tool na ito.

Upang magamit ang bagong LLM na ito, maaari nating i-type ang sumusunod na code:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Ngayon na tinawag natin ang `invoke` sa bagong LLM na may mga tool, maaaring mapunan ang property na `tool_calls`. Kung gayon, ang anumang natukoy na tool ay may `name` at `args` property na tumutukoy kung anong tool ang dapat tawagin at kung anong mga argumento. Ang buong code ay ganito:

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

Kapag pinatakbo mo ang code na ito, makikita mo ang output na katulad ng:

```text
TOOL CALL:  15
CONTENT: 
```

Ang ibig sabihin ng output na ito ay na-analyze ng LLM ang prompt na "What is 3 + 12" bilang nangangahulugang ang tool na `add` ay dapat tawagin, at alam ito salamat sa pangalan, deskripsyon, at mga deskripsyon ng field ng miyembro. Ang sagot na 15 ay dahil sa ating code na gumagamit ng dictionary na `functions` upang tawagin ito:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Isang mas kawili-wiling tool na tumatawag sa web API

Ang mga tool na nagdadagdag ng dalawang numero ay kawili-wili dahil ipinapakita nito kung paano gumagana ang tool calling, ngunit karaniwang ang mga tool ay may mas kawili-wiling ginagawa tulad ng halimbawa, pagtawag sa Web API. Gawin natin iyon gamit ang code na ito:

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

Ngayon, kung patakbuhin mo ang code na ito, makakakuha ka ng response na nagsasabing katulad ng:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Narito ang buong code:

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

## Embedding

I-vectorize ang content, ikumpara gamit ang cosine similarity

https://python.langchain.com/docs/how_to/embed_text/

### Document loaders

PDF at CSV

## Paggawa ng app

TODO

## Takdang-aralin

## Buod

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.