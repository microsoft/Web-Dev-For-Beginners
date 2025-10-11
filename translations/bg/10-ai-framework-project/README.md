<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:31:40+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "bg"
}
-->
# AI Framework

Съществуват много AI рамки, които могат значително да ускорят времето за разработка на проект. В този проект ще се фокусираме върху разбирането на проблемите, които тези рамки решават, и ще създадем такъв проект сами.

## Защо рамка

Когато става въпрос за използване на AI, има различни подходи и причини за избора им. Ето някои от тях:

- **Без SDK**. Повечето AI модели позволяват директно взаимодействие с модела, например чрез HTTP заявки. Този подход работи и понякога може да бъде единствената опция, ако липсва SDK.
- **SDK**. Използването на SDK обикновено е препоръчителният подход, тъй като позволява писането на по-малко код за взаимодействие с модела. SDK обикновено е ограничен до конкретен модел, и ако използвате различни модели, може да се наложи да напишете нов код за поддръжка на допълнителните модели.
- **Рамка**. Рамката обикновено издига нещата на друго ниво, като предоставя един API за различни модели, като разликите обикновено са в първоначалната настройка. Освен това рамките предлагат полезни абстракции, като например инструменти, памет, работни потоци, агенти и други, като изискват писането на по-малко код. Тъй като рамките обикновено са с определени принципи, те могат да бъдат много полезни, ако приемете техния начин на работа, но могат да се окажат недостатъчни, ако се опитате да направите нещо специфично, което рамката не поддържа. Понякога рамката може да опрости прекалено много и това може да доведе до пропускане на важни теми, които по-късно могат да навредят на производителността, например.

Общо казано, използвайте правилния инструмент за задачата.

## Въведение

В този урок ще научим:

- Как да използваме обща AI рамка.
- Как да решаваме често срещани проблеми като чат разговори, използване на инструменти, памет и контекст.
- Как да използваме това за създаване на AI приложения.

## Първа заявка

В първия пример за приложение ще научим как да се свържем с AI модел и да го запитаме чрез заявка.

### Използване на Python

За този пример ще използваме Langchain, за да се свържем с GitHub Models. Можем да използваме клас, наречен `ChatOpenAI`, и да му зададем полетата `api_key`, `base_url` и `model`. Токенът автоматично се попълва в GitHub Codespaces, а ако стартирате приложението локално, трябва да настроите личен токен за достъп, за да работи.

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

В този код:

- Извикваме `ChatOpenAI`, за да създадем клиент.
- Използваме `llm.invoke` със заявка, за да създадем отговор.
- Отпечатваме отговора с `print(response.content)`.

Трябва да видите отговор, подобен на:

```text
The capital of France is Paris.
```

## Чат разговор

В предходния раздел видяхте как използвахме това, което обикновено се нарича zero shot prompting – единична заявка, последвана от отговор.

Въпреки това, често се оказвате в ситуация, в която трябва да поддържате разговор с няколко съобщения, обменяни между вас и AI асистента.

### Използване на Python

В Langchain можем да съхраняваме разговора в списък. `HumanMessage` представлява съобщение от потребител, а `SystemMessage` е съобщение, предназначено да зададе "личността" на AI. В примера по-долу виждате как инструктираме AI да приеме личността на капитан Пикард, а човекът/потребителят да зададе "Разкажи ми за себе си" като заявка.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Пълният код за този пример изглежда така:

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

Трябва да видите резултат, подобен на:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

За да запазите състоянието на разговора, можете да добавите отговора от чата, така че разговорът да се запомни. Ето как да направите това:

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

От горния разговор виждаме как извикваме LLM два пъти – първо с разговор, състоящ се само от две съобщения, а след това втори път с повече съобщения, добавени към разговора.

Всъщност, ако стартирате това, ще видите втория отговор, който изглежда като:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Ще го приемем като "може би" ;)

## Потокови отговори

TODO

## Шаблони за заявки

TODO

## Структуриран изход

TODO

## Извикване на инструменти

Инструментите са начинът, по който даваме на LLM допълнителни умения. Идеята е да кажем на LLM за функциите, които има, и ако се направи заявка, която съответства на описанието на някой от тези инструменти, тогава го извикваме.

### Използване на Python

Нека добавим някои инструменти, както следва:

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

Тук създаваме описание на инструмент, наречен `add`. Чрез наследяване от `TypedDict` и добавяне на членове като `a` и `b` от тип `Annotated`, това може да бъде преобразувано в схема, която LLM може да разбере. Създаването на функции е речник, който гарантира, че знаем какво да правим, ако бъде идентифициран конкретен инструмент.

Нека видим как извикваме LLM с този инструмент:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Тук извикваме `bind_tools` с нашия масив `tools`, и така LLM `llm_with_tools` вече има знания за този инструмент.

За да използваме този нов LLM, можем да напишем следния код:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Сега, когато извикваме `invoke` на този нов LLM, който има инструменти, може да видим свойството `tool_calls`, което е попълнено. Ако е така, всеки идентифициран инструмент има свойства `name` и `args`, които идентифицират кой инструмент трябва да бъде извикан и с какви аргументи. Пълният код изглежда така:

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

При стартиране на този код трябва да видите изход, подобен на:

```text
TOOL CALL:  15
CONTENT: 
```

Това означава, че LLM анализира заявката "Какво е 3 + 12" като означаваща, че инструментът `add` трябва да бъде извикан, и знаеше това благодарение на името, описанието и описанията на полетата на членовете. Че отговорът е 15, е благодарение на нашия код, който използва речника `functions`, за да го извика:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### По-интересен инструмент, който извиква уеб API

Инструментите, които добавят две числа, са интересни, тъй като илюстрират как работи извикването на инструменти, но обикновено инструментите правят нещо по-интересно, като например извикване на уеб API. Нека направим точно това с този код:

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

Сега, ако стартирате този код, ще получите отговор, който казва нещо като:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Ето кода в неговата цялост:

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

## Вграждане

векторизиране на съдържание, сравнение чрез косинусова сходност

https://python.langchain.com/docs/how_to/embed_text/

### Зареждачи на документи

pdf и csv

## Създаване на приложение

TODO

## Задача

## Обобщение

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.