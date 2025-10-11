<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:19:59+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ar"
}
-->
# إطار عمل الذكاء الاصطناعي

هناك العديد من أطر عمل الذكاء الاصطناعي التي يمكن أن تسرّع بشكل كبير الوقت اللازم لبناء مشروع. في هذا المشروع، سنركز على فهم المشاكل التي تعالجها هذه الأطر وبناء مشروع مشابه بأنفسنا.

## لماذا نحتاج إلى إطار عمل؟

عند استخدام الذكاء الاصطناعي، هناك طرق مختلفة وأسباب مختلفة لاختيار هذه الطرق، ومنها:

- **بدون SDK**، معظم نماذج الذكاء الاصطناعي تسمح لك بالتفاعل مباشرة مع النموذج عبر طلبات HTTP على سبيل المثال. هذه الطريقة تعمل وقد تكون الخيار الوحيد إذا لم يكن هناك خيار SDK متاح.
- **SDK**. استخدام SDK عادةً ما يكون الخيار الموصى به لأنه يسمح لك بكتابة كود أقل للتفاعل مع النموذج. عادةً ما يكون محدودًا بنموذج معين، وإذا كنت تستخدم نماذج مختلفة، قد تحتاج إلى كتابة كود جديد لدعم هذه النماذج الإضافية.
- **إطار عمل**. إطار العمل يأخذ الأمور إلى مستوى آخر بمعنى أنه إذا كنت بحاجة إلى استخدام نماذج مختلفة، هناك واجهة برمجية واحدة لجميعها، وما يختلف عادةً هو الإعداد الأولي. بالإضافة إلى ذلك، توفر أطر العمل تجريدات مفيدة مثل التعامل مع الأدوات، الذاكرة، سير العمل، الوكلاء والمزيد مع كتابة كود أقل. لأن أطر العمل عادةً ما تكون ذات توجه معين، يمكن أن تكون مفيدة جدًا إذا كنت تتبع الطريقة التي تعمل بها، ولكن قد تكون غير كافية إذا حاولت القيام بشيء مخصص لا يدعمه الإطار. أحيانًا قد تبسط أطر العمل الأمور بشكل زائد، مما قد يؤدي إلى عدم تعلم موضوع مهم قد يؤثر لاحقًا على الأداء.

بشكل عام، استخدم الأداة المناسبة للمهمة.

## المقدمة

في هذه الدرس، سنتعلم:

- استخدام إطار عمل شائع للذكاء الاصطناعي.
- معالجة مشاكل شائعة مثل المحادثات، استخدام الأدوات، الذاكرة والسياق.
- الاستفادة من ذلك لبناء تطبيقات ذكاء اصطناعي.

## أول طلب

في مثال التطبيق الأول لدينا، سنتعلم كيفية الاتصال بنموذج ذكاء اصطناعي واستجوابه باستخدام طلب.

### باستخدام بايثون

في هذا المثال، سنستخدم Langchain للاتصال بنماذج GitHub. يمكننا استخدام فئة تسمى `ChatOpenAI` وإعطائها الحقول `api_key`، `base_url` و`model`. يتم تعبئة الرمز تلقائيًا داخل GitHub Codespaces، وإذا كنت تشغل التطبيق محليًا، تحتاج إلى إعداد رمز وصول شخصي ليعمل.

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

في هذا الكود، نحن:

- نستدعي `ChatOpenAI` لإنشاء عميل.
- نستخدم `llm.invoke` مع طلب لإنشاء استجابة.
- نطبع الاستجابة باستخدام `print(response.content)`.

يجب أن ترى استجابة مشابهة لـ:

```text
The capital of France is Paris.
```

## محادثة الدردشة

في القسم السابق، رأيت كيف استخدمنا ما يُعرف عادةً بالطلب بدون سياق، وهو طلب واحد يتبعه استجابة.

ومع ذلك، غالبًا ما تجد نفسك في موقف تحتاج فيه إلى الحفاظ على محادثة تتكون من عدة رسائل يتم تبادلها بينك وبين مساعد الذكاء الاصطناعي.

### باستخدام بايثون

في Langchain، يمكننا تخزين المحادثة في قائمة. يمثل `HumanMessage` رسالة من المستخدم، و`SystemMessage` هي رسالة تهدف إلى تحديد "شخصية" الذكاء الاصطناعي. في المثال أدناه، ترى كيف نوجه الذكاء الاصطناعي لتبني شخصية الكابتن بيكارد وللمستخدم أن يسأل "أخبرني عنك" كطلب.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

الكود الكامل لهذا المثال يبدو كالتالي:

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

يجب أن ترى نتيجة مشابهة لـ:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

للحفاظ على حالة المحادثة، يمكنك إضافة الاستجابة من الدردشة، بحيث يتم تذكر المحادثة، إليك كيفية القيام بذلك:

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

ما يمكننا رؤيته من المحادثة أعلاه هو كيف نستدعي LLM مرتين، أولاً مع المحادثة التي تتكون من رسالتين فقط، ثم مرة ثانية مع المزيد من الرسائل المضافة إلى المحادثة.

في الواقع، إذا قمت بتشغيل هذا، سترى الاستجابة الثانية تكون شيئًا مثل:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

سأعتبر ذلك ربما ;)

## استجابات متدفقة

TODO

## قوالب الطلبات

TODO

## إخراج منظم

TODO

## استدعاء الأدوات

الأدوات هي الطريقة التي نعطي بها LLM مهارات إضافية. الفكرة هي إخبار LLM عن الوظائف التي يمتلكها وإذا تم تقديم طلب يتطابق مع وصف إحدى هذه الأدوات، يتم استدعاؤها.

### باستخدام بايثون

لنقم بإضافة بعض الأدوات كالتالي:

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

ما نقوم به هنا هو إنشاء وصف لأداة تسمى `add`. من خلال الوراثة من `TypedDict` وإضافة أعضاء مثل `a` و`b` من النوع `Annotated`، يمكن تحويل ذلك إلى مخطط يمكن لـ LLM فهمه. إنشاء الوظائف هو قاموس يضمن أننا نعرف ما يجب القيام به إذا تم تحديد أداة معينة.

لنرى كيف نستدعي LLM بهذه الأداة بعد ذلك:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

هنا نستدعي `bind_tools` مع مصفوفة `tools` الخاصة بنا، وبالتالي فإن LLM `llm_with_tools` لديه الآن معرفة بهذه الأداة.

لاستخدام هذا LLM الجديد، يمكننا كتابة الكود التالي:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

الآن عندما نستدعي `invoke` على هذا LLM الجديد، الذي يحتوي على أدوات، قد يتم تعبئة الخاصية `tool_calls`. إذا كان الأمر كذلك، فإن أي أدوات محددة لديها خاصية `name` و`args` التي تحدد الأداة التي يجب استدعاؤها ومع الوسائط. الكود الكامل يبدو كالتالي:

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

عند تشغيل هذا الكود، يجب أن ترى مخرجات مشابهة لـ:

```text
TOOL CALL:  15
CONTENT: 
```

ما تعنيه هذه المخرجات هو أن LLM حلل الطلب "ما هو 3 + 12" على أنه يعني أن أداة `add` يجب أن تُستدعى، وعرف ذلك بفضل اسمها، وصفها ووصف الحقول الأعضاء. أن الإجابة هي 15 يعود إلى الكود الخاص بنا الذي يستخدم القاموس `functions` لاستدعائها:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### أداة أكثر إثارة للاهتمام تستدعي واجهة برمجة تطبيقات ويب

الأدوات التي تضيف رقمين مثيرة للاهتمام لأنها توضح كيفية عمل استدعاء الأدوات، ولكن عادةً ما تقوم الأدوات بشيء أكثر إثارة مثل استدعاء واجهة برمجة تطبيقات ويب، لنقم بذلك باستخدام هذا الكود:

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

الآن إذا قمت بتشغيل هذا الكود، ستحصل على استجابة تقول شيئًا مثل:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

إليك الكود بالكامل:

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

## تضمين

تحويل المحتوى إلى متجهات، المقارنة عبر تشابه جيب التمام

https://python.langchain.com/docs/how_to/embed_text/

### محملات المستندات

PDF وCSV

## بناء تطبيق

TODO

## المهمة

## الملخص

---

**إخلاء المسؤولية**:  
تمت ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو عدم دقة. يجب اعتبار المستند الأصلي بلغته الأصلية هو المصدر الموثوق. للحصول على معلومات حاسمة، يُوصى بالترجمة البشرية الاحترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة ناتجة عن استخدام هذه الترجمة.