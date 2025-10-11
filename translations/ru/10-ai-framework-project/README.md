<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:19:43+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ru"
}
-->
# AI Framework

Существует множество AI-фреймворков, которые могут значительно ускорить процесс создания проекта. В этом проекте мы сосредоточимся на изучении проблем, которые решают эти фреймворки, и создадим такой проект самостоятельно.

## Зачем нужен фреймворк

При использовании AI существуют разные подходы и причины для их выбора. Вот некоторые из них:

- **Без SDK**. Большинство AI-моделей позволяют взаимодействовать с ними напрямую, например, через HTTP-запросы. Этот подход работает и иногда может быть единственным вариантом, если SDK отсутствует.
- **SDK**. Использование SDK обычно рекомендуется, так как это позволяет писать меньше кода для взаимодействия с моделью. Однако SDK обычно ограничен конкретной моделью, и если вы используете разные модели, вам может понадобиться написать новый код для поддержки этих дополнительных моделей.
- **Фреймворк**. Фреймворк обычно выводит работу на новый уровень, предоставляя единый API для взаимодействия с различными моделями, где различия заключаются в начальной настройке. Кроме того, фреймворки предлагают полезные абстракции, такие как инструменты, память, рабочие процессы, агенты и многое другое, позволяя писать меньше кода. Поскольку фреймворки обычно имеют определённые подходы, они могут быть очень полезны, если вы принимаете их способ работы, но могут оказаться недостаточными, если вы пытаетесь сделать что-то уникальное, для чего фреймворк не предназначен. Иногда фреймворк может чрезмерно упростить процесс, и вы можете не изучить важную тему, что впоследствии может негативно сказаться на производительности, например.

В общем, используйте подходящий инструмент для выполнения задачи.

## Введение

В этом уроке мы научимся:

- Использовать популярный AI-фреймворк.
- Решать распространённые задачи, такие как ведение чата, использование инструментов, память и контекст.
- Использовать это для создания AI-приложений.

## Первый запрос

В нашем первом примере приложения мы научимся подключаться к AI-модели и отправлять ей запрос с помощью промпта.

### Использование Python

Для этого примера мы будем использовать Langchain для подключения к моделям GitHub. Мы можем использовать класс `ChatOpenAI` и задать ему поля `api_key`, `base_url` и `model`. Токен автоматически заполняется в GitHub Codespaces, а если вы запускаете приложение локально, вам нужно настроить персональный токен доступа, чтобы это работало.

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

В этом коде мы:

- Вызываем `ChatOpenAI` для создания клиента.
- Используем `llm.invoke` с промптом для создания ответа.
- Выводим ответ с помощью `print(response.content)`.

Вы должны увидеть ответ, похожий на:

```text
The capital of France is Paris.
```

## Чат-диалог

В предыдущем разделе вы увидели, как мы использовали то, что обычно называют zero shot prompting — один запрос, за которым следует ответ.

Однако часто возникает ситуация, когда необходимо поддерживать диалог из нескольких сообщений, которыми обмениваются пользователь и AI-ассистент.

### Использование Python

В Langchain мы можем хранить диалог в списке. `HumanMessage` представляет сообщение от пользователя, а `SystemMessage` — сообщение, предназначенное для задания "личности" AI. В приведённом ниже примере вы увидите, как мы инструктируем AI принять личность капитана Пикарда, а пользователь задаёт вопрос "Расскажите о себе" в качестве промпта.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Полный код для этого примера выглядит следующим образом:

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

Вы должны увидеть результат, похожий на:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Чтобы сохранить состояние диалога, вы можете добавить ответ от чата, чтобы диалог запоминался. Вот как это сделать:

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

Из приведённого выше диалога видно, как мы дважды вызываем LLM: сначала с диалогом, состоящим всего из двух сообщений, а затем второй раз с добавлением новых сообщений в диалог.

Фактически, если вы выполните этот код, вы увидите второй ответ, похожий на:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Я приму это за "возможно" ;)

## Потоковые ответы

TODO

## Шаблоны промптов

TODO

## Структурированный вывод

TODO

## Вызов инструментов

Инструменты — это способ дать LLM дополнительные возможности. Идея заключается в том, чтобы сообщить LLM о доступных функциях, и если запрос соответствует описанию одного из этих инструментов, то он будет вызван.

### Использование Python

Добавим несколько инструментов следующим образом:

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

Здесь мы создаём описание инструмента под названием `add`. Наследуя от `TypedDict` и добавляя члены, такие как `a` и `b` типа `Annotated`, это можно преобразовать в схему, которую LLM сможет понять. Создание функций — это словарь, который гарантирует, что мы знаем, что делать, если определённый инструмент был идентифицирован.

Давайте посмотрим, как мы вызываем LLM с этим инструментом:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Здесь мы вызываем `bind_tools` с массивом `tools`, и таким образом LLM `llm_with_tools` теперь знает об этом инструменте.

Чтобы использовать этот новый LLM, мы можем написать следующий код:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Теперь, когда мы вызываем `invoke` на этом новом LLM, который имеет инструменты, возможно, свойство `tool_calls` будет заполнено. Если это так, любые идентифицированные инструменты имеют свойства `name` и `args`, которые определяют, какой инструмент должен быть вызван и с какими аргументами. Полный код выглядит следующим образом:

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

Выполнив этот код, вы должны увидеть вывод, похожий на:

```text
TOOL CALL:  15
CONTENT: 
```

Этот вывод означает, что LLM проанализировал запрос "Что такое 3 + 12" как указание на вызов инструмента `add`, и он понял это благодаря его имени, описанию и описаниям полей. То, что ответ равен 15, связано с нашим кодом, использующим словарь `functions` для его вызова:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Более интересный инструмент, который вызывает веб-API

Инструмент, который складывает два числа, интересен, так как иллюстрирует, как работает вызов инструментов, но обычно инструменты выполняют что-то более интересное, например, вызывают веб-API. Давайте сделаем это с помощью следующего кода:

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

Теперь, если вы выполните этот код, вы получите ответ, похожий на:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Вот код целиком:

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

## Встраивание

векторизация контента, сравнение через косинусное сходство

https://python.langchain.com/docs/how_to/embed_text/

### Загрузчики документов

pdf и csv

## Создание приложения

TODO

## Задание

## Итоги

---

**Отказ от ответственности**:  
Этот документ был переведен с помощью сервиса автоматического перевода [Co-op Translator](https://github.com/Azure/co-op-translator). Несмотря на наши усилия обеспечить точность, автоматические переводы могут содержать ошибки или неточности. Оригинальный документ на его родном языке следует считать авторитетным источником. Для получения критически важной информации рекомендуется профессиональный перевод человеком. Мы не несем ответственности за любые недоразумения или неправильные интерпретации, возникшие в результате использования данного перевода.