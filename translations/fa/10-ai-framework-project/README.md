<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:20:16+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "fa"
}
-->
# چارچوب هوش مصنوعی

چارچوب‌های هوش مصنوعی زیادی وجود دارند که استفاده از آن‌ها می‌تواند زمان لازم برای ساخت یک پروژه را به شدت کاهش دهد. در این پروژه، ما بر درک مشکلاتی که این چارچوب‌ها حل می‌کنند تمرکز خواهیم کرد و خودمان چنین پروژه‌ای را خواهیم ساخت.

## چرا یک چارچوب؟

وقتی صحبت از استفاده از هوش مصنوعی می‌شود، رویکردها و دلایل مختلفی برای انتخاب این رویکردها وجود دارد. در اینجا چند مورد آورده شده است:

- **بدون SDK**، بیشتر مدل‌های هوش مصنوعی به شما اجازه می‌دهند مستقیماً از طریق درخواست‌های HTTP با مدل هوش مصنوعی تعامل داشته باشید. این رویکرد کار می‌کند و گاهی ممکن است تنها گزینه شما باشد اگر گزینه SDK وجود نداشته باشد.
- **SDK**. استفاده از یک SDK معمولاً رویکرد توصیه‌شده است، زیرا به شما اجازه می‌دهد با نوشتن کد کمتر با مدل خود تعامل داشته باشید. معمولاً به یک مدل خاص محدود است و اگر از مدل‌های مختلف استفاده کنید، ممکن است نیاز به نوشتن کد جدید برای پشتیبانی از آن مدل‌ها داشته باشید.
- **یک چارچوب**. یک چارچوب معمولاً کار را به سطح دیگری می‌برد، به این معنا که اگر نیاز به استفاده از مدل‌های مختلف داشته باشید، یک API برای همه آن‌ها وجود دارد و تفاوت‌ها معمولاً در تنظیمات اولیه است. علاوه بر این، چارچوب‌ها انتزاعات مفیدی را ارائه می‌دهند، مانند مدیریت ابزارها، حافظه، جریان‌های کاری، عوامل و موارد دیگر در فضای هوش مصنوعی، در حالی که نیاز به نوشتن کد کمتری دارید. از آنجا که چارچوب‌ها معمولاً نظر خاصی دارند، اگر با روش کار آن‌ها موافق باشید، می‌توانند واقعاً مفید باشند، اما اگر بخواهید کاری خاص انجام دهید که چارچوب برای آن طراحی نشده باشد، ممکن است ناکارآمد باشند. گاهی اوقات یک چارچوب ممکن است بیش از حد ساده‌سازی کند و بنابراین ممکن است یک موضوع مهم را یاد نگیرید که بعداً ممکن است به عملکرد آسیب برساند.

به طور کلی، از ابزار مناسب برای کار استفاده کنید.

## مقدمه

در این درس، ما یاد خواهیم گرفت که:

- از یک چارچوب هوش مصنوعی رایج استفاده کنیم.
- مشکلات رایج مانند مکالمات چت، استفاده از ابزارها، حافظه و زمینه را حل کنیم.
- از این موارد برای ساخت برنامه‌های هوش مصنوعی بهره ببریم.

## اولین درخواست

در مثال اول برنامه خود، یاد می‌گیریم که چگونه به یک مدل هوش مصنوعی متصل شویم و با استفاده از یک درخواست از آن پرس‌وجو کنیم.

### استفاده از پایتون

برای این مثال، از Langchain برای اتصال به مدل‌های GitHub استفاده خواهیم کرد. ما می‌توانیم از کلاسی به نام `ChatOpenAI` استفاده کنیم و فیلدهای `api_key`، `base_url` و `model` را به آن بدهیم. توکن به صورت خودکار در GitHub Codespaces پر می‌شود و اگر برنامه را به صورت محلی اجرا می‌کنید، باید یک توکن دسترسی شخصی برای این کار تنظیم کنید.

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

در این کد، ما:

- `ChatOpenAI` را برای ایجاد یک کلاینت فراخوانی می‌کنیم.
- از `llm.invoke` با یک درخواست برای ایجاد یک پاسخ استفاده می‌کنیم.
- پاسخ را با `print(response.content)` چاپ می‌کنیم.

باید پاسخی مشابه زیر ببینید:

```text
The capital of France is Paris.
```

## مکالمه چت

در بخش قبلی، دیدید که چگونه از چیزی که معمولاً به عنوان درخواست تک‌مرحله‌ای شناخته می‌شود، استفاده کردیم؛ یک درخواست و سپس یک پاسخ.

با این حال، اغلب خود را در موقعیتی می‌بینید که نیاز دارید مکالمه‌ای شامل چندین پیام رد و بدل شده بین خود و دستیار هوش مصنوعی را حفظ کنید.

### استفاده از پایتون

در Langchain، می‌توانیم مکالمه را در یک لیست ذخیره کنیم. `HumanMessage` نمایانگر یک پیام از طرف کاربر است و `SystemMessage` یک پیام است که برای تنظیم "شخصیت" هوش مصنوعی استفاده می‌شود. در مثال زیر می‌بینید که چگونه به هوش مصنوعی دستور می‌دهیم شخصیت کاپیتان پیکارد را بپذیرد و کاربر انسانی از او بخواهد "درباره خودت بگو" به عنوان درخواست.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

کد کامل برای این مثال به این صورت است:

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

باید نتیجه‌ای مشابه زیر ببینید:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

برای حفظ وضعیت مکالمه، می‌توانید پاسخ چت را اضافه کنید تا مکالمه به خاطر سپرده شود. در اینجا نحوه انجام این کار آمده است:

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

آنچه از مکالمه بالا می‌توانیم ببینیم این است که چگونه دو بار LLM را فراخوانی می‌کنیم، ابتدا با مکالمه‌ای که فقط شامل دو پیام است و سپس بار دوم با پیام‌های بیشتری که به مکالمه اضافه شده‌اند.

در واقع، اگر این را اجرا کنید، پاسخ دوم چیزی شبیه به این خواهد بود:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

این را به عنوان یک شاید قبول می‌کنم ;)

## پاسخ‌های جریانی

TODO

## قالب‌های درخواست

TODO

## خروجی ساختاریافته

TODO

## فراخوانی ابزار

ابزارها راهی هستند که ما به LLM مهارت‌های اضافی می‌دهیم. ایده این است که به LLM درباره توابعی که دارد بگوییم و اگر درخواستی داده شود که با توضیحات یکی از این ابزارها مطابقت داشته باشد، آن‌ها را فراخوانی کنیم.

### استفاده از پایتون

بیایید چند ابزار اضافه کنیم، به این صورت:

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

کاری که اینجا انجام می‌دهیم این است که توضیحی از یک ابزار به نام `add` ایجاد می‌کنیم. با ارث‌بری از `TypedDict` و افزودن اعضایی مانند `a` و `b` از نوع `Annotated`، این می‌تواند به یک اسکیما تبدیل شود که LLM بتواند آن را درک کند. ایجاد توابع یک دیکشنری است که اطمینان می‌دهد می‌دانیم اگر یک ابزار خاص شناسایی شود، چه کاری باید انجام دهیم.

بیایید ببینیم چگونه LLM را با این ابزار فراخوانی می‌کنیم:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

اینجا ما `bind_tools` را با آرایه `tools` خود فراخوانی می‌کنیم و به این ترتیب LLM `llm_with_tools` اکنون از این ابزار آگاهی دارد.

برای استفاده از این LLM جدید، می‌توانیم کد زیر را تایپ کنیم:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

اکنون که `invoke` را روی این LLM جدید که ابزارها را دارد فراخوانی می‌کنیم، ممکن است ویژگی `tool_calls` پر شود. اگر چنین باشد، هر ابزار شناسایی‌شده دارای ویژگی‌های `name` و `args` است که مشخص می‌کند کدام ابزار باید فراخوانی شود و با چه آرگومان‌هایی. کد کامل به این صورت است:

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

اجرای این کد، باید خروجی مشابه زیر را نشان دهد:

```text
TOOL CALL:  15
CONTENT: 
```

این خروجی به این معناست که LLM درخواست "What is 3 + 12" را به این معنا تحلیل کرده است که ابزار `add` باید فراخوانی شود و این را به لطف نام، توضیحات و توضیحات فیلدهای عضو آن می‌دانست. اینکه پاسخ 15 است به این دلیل است که کد ما از دیکشنری `functions` برای فراخوانی آن استفاده کرده است:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### یک ابزار جالب‌تر که یک API وب را فراخوانی می‌کند

ابزارهایی که دو عدد را جمع می‌کنند جالب هستند زیرا نشان می‌دهند که چگونه فراخوانی ابزار کار می‌کند، اما معمولاً ابزارها تمایل دارند کارهای جالب‌تری انجام دهند، مانند فراخوانی یک API وب. بیایید این کار را با این کد انجام دهیم:

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

اکنون اگر این کد را اجرا کنید، پاسخی شبیه به این دریافت خواهید کرد:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

در اینجا کد به طور کامل آورده شده است:

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

## تعبیه‌سازی

محتوا را برداری کنید، از طریق شباهت کسینوسی مقایسه کنید.

https://python.langchain.com/docs/how_to/embed_text/

### بارگذاری اسناد

PDF و CSV

## ساخت یک برنامه

TODO

## تمرین

## خلاصه

---

**سلب مسئولیت**:  
این سند با استفاده از سرویس ترجمه هوش مصنوعی [Co-op Translator](https://github.com/Azure/co-op-translator) ترجمه شده است. در حالی که ما تلاش می‌کنیم ترجمه‌ها دقیق باشند، لطفاً توجه داشته باشید که ترجمه‌های خودکار ممکن است شامل خطاها یا نادرستی‌ها باشند. سند اصلی به زبان اصلی آن باید به عنوان منبع معتبر در نظر گرفته شود. برای اطلاعات حساس، توصیه می‌شود از ترجمه انسانی حرفه‌ای استفاده کنید. ما هیچ مسئولیتی در قبال سوء تفاهم‌ها یا تفسیرهای نادرست ناشی از استفاده از این ترجمه نداریم.