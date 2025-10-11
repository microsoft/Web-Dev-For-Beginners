<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:31:59+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "sr"
}
-->
# AI Фрејмворк

Постоји много AI фрејмворкова који могу значајно убрзати време потребно за изградњу пројекта. У овом пројекту ћемо се фокусирати на разумевање проблема које ови фрејмворкови решавају и направити сопствени пројекат.

## Зашто фрејмворк

Када је реч о коришћењу AI-а, постоје различити приступи и разлози за њихов избор. Ево неких:

- **Без SDK-а**, већина AI модела омогућава директну интеракцију са моделом, на пример путем HTTP захтева. Тај приступ функционише и понекад може бити једина опција ако SDK недостаје.
- **SDK**. Коришћење SDK-а је обично препоручени приступ јер омогућава писање мање кода за интеракцију са моделом. Обично је ограничен на одређени модел, па ако користите различите моделе, можда ћете морати да напишете нови код за подршку тим додатним моделима.
- **Фрејмворк**. Фрејмворк обично подиже ствари на виши ниво у смислу да, ако треба да користите различите моделе, постоји један API за све њих, а разлике су обично у почетном подешавању. Поред тога, фрејмворкови доносе корисне апстракције, као што су алати, меморија, токови рада, агенти и друго, уз мање писања кода. Због тога што су фрејмворкови обично "опинионирани", могу бити веома корисни ако прихватите њихов начин рада, али могу бити недовољни ако покушате да урадите нешто специфично што фрејмворк није предвиђен за. Понекад фрејмворк може превише поједноставити ствари, па можда нећете научити важну тему која касније може утицати на перформансе, на пример.

Уопштено, користите прави алат за посао.

## Увод

У овој лекцији ћемо научити:

- Како користити уобичајени AI фрејмворк.
- Како решити уобичајене проблеме као што су разговори, коришћење алата, меморија и контекст.
- Како искористити ово за изградњу AI апликација.

## Први упит

У нашем првом примеру апликације, научићемо како да се повежемо са AI моделом и упитамо га користећи упит.

### Коришћење Python-а

За овај пример, користићемо Langchain за повезивање са GitHub моделима. Можемо користити класу `ChatOpenAI` и дати јој поља `api_key`, `base_url` и `model`. Токен се аутоматски попуњава унутар GitHub Codespaces-а, а ако апликацију покрећете локално, потребно је да подесите лични приступни токен да би ово функционисало.

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

У овом коду:

- Позивамо `ChatOpenAI` да креирамо клијента.
- Користимо `llm.invoke` са упитом да креирамо одговор.
- Штампамо одговор помоћу `print(response.content)`.

Требало би да видите одговор сличан:

```text
The capital of France is Paris.
```

## Разговор

У претходном делу, видели сте како користимо оно што је обично познато као "zero shot prompting", један упит праћен одговором.

Међутим, често се нађете у ситуацији где треба да одржавате разговор са више порука које се размењују између вас и AI асистента.

### Коришћење Python-а

У Langchain-у, можемо чувати разговор у листи. `HumanMessage` представља поруку од корисника, а `SystemMessage` је порука која поставља "личност" AI-а. У примеру испод, видите како упућујемо AI да преузме личност капетана Пикарда, а корисник/човек поставља питање "Реци ми нешто о себи" као упит.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Цео код за овај пример изгледа овако:

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

Требало би да видите исход сличан:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Да бисте задржали стање разговора, можете додати одговор из чета, тако да се разговор памти. Ево како то можете урадити:

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

Оно што можемо видети из горњег разговора је како два пута позивамо LLM, прво са разговором који се састоји од само две поруке, а затим други пут са више порука додатих у разговор.

У ствари, ако покренете ово, видећете други одговор који изгледа отприлике овако:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Претпоставићу да је то можда ;)

## Стримовање одговора

TODO

## Шаблони упита

TODO

## Структурисани излаз

TODO

## Позивање алата

Алати су начин на који дајемо LLM-у додатне способности. Идеја је да се LLM-у каже о функцијама које има, и ако се направи упит који одговара опису неког од ових алата, онда га позивамо.

### Коришћење Python-а

Додајмо неке алате овако:

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

Овде креирамо опис алата названог `add`. Наслеђивањем од `TypedDict` и додавањем чланова као што су `a` и `b` типа `Annotated`, ово се може конвертовати у шему коју LLM може разумети. Креирање функција је речник који осигурава да знамо шта да радимо ако је одређени алат идентификован.

Хајде да видимо како позивамо LLM са овим алатом:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Овде позивамо `bind_tools` са нашим низом `tools`, чиме LLM `llm_with_tools` сада има знање о овом алату.

Да бисмо користили овај нови LLM, можемо написати следећи код:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Сада када позивамо `invoke` на овом новом LLM-у, који има алате, можда ће својство `tool_calls` бити попуњено. Ако јесте, било који идентификовани алат има својства `name` и `args` која идентификују који алат треба позвати и са којим аргументима. Цео код изгледа овако:

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

Покретањем овог кода, требало би да видите излаз сличан:

```text
TOOL CALL:  15
CONTENT: 
```

Оно што овај излаз значи је да је LLM анализирао упит "Шта је 3 + 12" као значење да треба позвати алат `add`, и то је знао захваљујући његовом имену, опису и описима поља чланова. Да је одговор 15, то је због нашег кода који користи речник `functions` за његово позивање:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Занимљивији алат који позива веб API

Алат који сабира два броја је занимљив јер илуструје како позивање алата функционише, али обично алати раде нешто занимљивије, као што је, на пример, позивање веб API-а. Хајде да то урадимо са овим кодом:

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

Сада, ако покренете овај код, добићете одговор који изгледа отприлике овако:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Ево кода у целини:

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

## Ембедовање

векторизујте садржај, упоредите преко косинусне сличности

https://python.langchain.com/docs/how_to/embed_text/

### учитавачи докумената

pdf и csv

## Изградња апликације

TODO

## Задатак

## Резиме

---

**Одрицање од одговорности**:  
Овај документ је преведен помоћу услуге за превођење уз помоћ вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.