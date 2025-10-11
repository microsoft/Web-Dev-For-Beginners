<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:33:20+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "uk"
}
-->
# AI Framework

Існує багато AI-фреймворків, які можуть значно прискорити час, необхідний для створення проєкту. У цьому проєкті ми зосередимося на розумінні проблем, які ці фреймворки вирішують, і створимо такий проєкт самостійно.

## Чому фреймворк

Коли справа доходить до використання AI, існують різні підходи та причини для їх вибору. Ось деякі з них:

- **Без SDK**. Більшість AI-моделей дозволяють взаємодіяти безпосередньо з моделлю, наприклад, через HTTP-запити. Цей підхід працює і може бути єдиним варіантом, якщо SDK недоступний.
- **SDK**. Використання SDK зазвичай є рекомендованим підходом, оскільки це дозволяє писати менше коду для взаємодії з моделлю. Зазвичай SDK обмежується конкретною моделлю, і якщо ви використовуєте різні моделі, можливо, доведеться писати новий код для підтримки додаткових моделей.
- **Фреймворк**. Фреймворк зазвичай піднімає роботу на новий рівень, оскільки для використання різних моделей є один API для всіх, а відмінності зазвичай полягають у початковому налаштуванні. Крім того, фреймворки пропонують корисні абстракції, такі як інструменти, пам'ять, робочі процеси, агенти тощо, при цьому потрібно писати менше коду. Оскільки фреймворки зазвичай мають свою думку щодо того, як все має працювати, вони можуть бути дуже корисними, якщо ви приймаєте їх підхід, але можуть бути недостатніми, якщо ви намагаєтеся зробити щось унікальне, що не передбачено фреймворком. Іноді фреймворк може спростити процес занадто сильно, і ви можете не засвоїти важливу тему, що згодом може негативно вплинути на продуктивність.

Загалом, використовуйте правильний інструмент для конкретного завдання.

## Вступ

У цьому уроці ми навчимося:

- Використовувати поширений AI-фреймворк.
- Вирішувати поширені проблеми, такі як чат-розмови, використання інструментів, пам'ять і контекст.
- Використовувати це для створення AI-додатків.

## Перший запит

У нашому першому прикладі додатка ми навчимося підключатися до AI-моделі та надсилати їй запит за допомогою промпта.

### Використання Python

У цьому прикладі ми використаємо Langchain для підключення до GitHub Models. Ми можемо використовувати клас `ChatOpenAI` і надати йому поля `api_key`, `base_url` і `model`. Токен автоматично заповнюється в GitHub Codespaces, а якщо ви запускаєте додаток локально, вам потрібно налаштувати персональний токен доступу, щоб це працювало.

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

У цьому коді ми:

- Викликаємо `ChatOpenAI`, щоб створити клієнт.
- Використовуємо `llm.invoke` із промптом для створення відповіді.
- Виводимо відповідь за допомогою `print(response.content)`.

Ви повинні побачити відповідь, схожу на:

```text
The capital of France is Paris.
```

## Чат-розмова

У попередньому розділі ви побачили, як ми використовували те, що зазвичай називають zero shot prompting — один промпт, за яким слідує відповідь.

Однак часто ви опиняєтеся в ситуації, коли потрібно підтримувати розмову з кількома повідомленнями, які обмінюються між вами та AI-асистентом.

### Використання Python

У Langchain ми можемо зберігати розмову в списку. `HumanMessage` представляє повідомлення від користувача, а `SystemMessage` — це повідомлення, призначене для встановлення "особистості" AI. У наведеному нижче прикладі ви бачите, як ми інструктуємо AI прийняти особистість капітана Пікара, а користувач/людина задає запитання "Розкажи мені про себе" як промпт.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Повний код для цього прикладу виглядає так:

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

Ви повинні побачити результат, схожий на:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Щоб зберегти стан розмови, ви можете додати відповідь із чату, щоб розмова запам'ятовувалася. Ось як це зробити:

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

З наведеного вище прикладу розмови ми бачимо, як ми викликаємо LLM двічі: спочатку з розмовою, що складається лише з двох повідомлень, а потім вдруге з додатковими повідомленнями, доданими до розмови.

Насправді, якщо ви запустите це, ви побачите, що друга відповідь буде схожою на:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Я прийму це як "можливо" ;)

## Стримінг відповідей

TODO

## Шаблони промптів

TODO

## Структурований вихід

TODO

## Виклик інструментів

Інструменти — це спосіб надання LLM додаткових навичок. Ідея полягає в тому, щоб повідомити LLM про функції, які він має, і якщо промпт відповідає опису одного з цих інструментів, тоді ми викликаємо їх.

### Використання Python

Додамо кілька інструментів, як показано нижче:

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

Тут ми створюємо опис інструменту під назвою `add`. Спадкуючи від `TypedDict` і додаючи члени, такі як `a` і `b` типу `Annotated`, це може бути перетворено в схему, яку LLM може зрозуміти. Створення функцій — це словник, який гарантує, що ми знаємо, що робити, якщо визначено конкретний інструмент.

Давайте подивимося, як ми викликаємо LLM із цим інструментом:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Тут ми викликаємо `bind_tools` із нашим масивом `tools`, і таким чином LLM `llm_with_tools` тепер має знання про цей інструмент.

Щоб використовувати цей новий LLM, ми можемо написати наступний код:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Тепер, коли ми викликаємо `invoke` на цьому новому LLM, який має інструменти, можливо, властивість `tool_calls` буде заповнена. Якщо так, будь-які визначені інструменти мають властивості `name` і `args`, які визначають, який інструмент слід викликати і з якими аргументами. Повний код виглядає так:

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

Запустивши цей код, ви повинні побачити результат, схожий на:

```text
TOOL CALL:  15
CONTENT: 
```

Цей результат означає, що LLM проаналізував промпт "Що таке 3 + 12" як такий, що означає, що інструмент `add` має бути викликаний, і він знав це завдяки його назві, опису та опису полів-членів. Те, що відповідь — 15, пояснюється нашим кодом, який використовує словник `functions` для його виклику:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Більш цікавий інструмент, який викликає веб-API

Інструменти, які додають два числа, цікаві, оскільки ілюструють, як працює виклик інструментів, але зазвичай інструменти виконують щось більш цікаве, наприклад, виклик веб-API. Давайте зробимо це за допомогою цього коду:

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

Тепер, якщо ви запустите цей код, ви отримаєте відповідь, схожу на:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Ось код у його повному вигляді:

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

## Вбудовування

векторизація контенту, порівняння через косинусну схожість

https://python.langchain.com/docs/how_to/embed_text/

### Завантажувачі документів

pdf і csv

## Створення додатка

TODO

## Завдання

## Підсумок

---

**Відмова від відповідальності**:  
Цей документ був перекладений за допомогою сервісу автоматичного перекладу [Co-op Translator](https://github.com/Azure/co-op-translator). Хоча ми прагнемо до точності, будь ласка, майте на увазі, що автоматичні переклади можуть містити помилки або неточності. Оригінальний документ на його рідній мові слід вважати авторитетним джерелом. Для критичної інформації рекомендується професійний людський переклад. Ми не несемо відповідальності за будь-які непорозуміння або неправильні тлумачення, що виникають внаслідок використання цього перекладу.