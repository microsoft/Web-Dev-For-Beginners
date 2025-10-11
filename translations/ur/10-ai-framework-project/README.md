<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:20:33+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ur"
}
-->
# AI فریم ورک

بہت سے AI فریم ورک موجود ہیں جو استعمال کرنے پر کسی پروجیکٹ کو بنانے میں لگنے والے وقت کو بہت تیزی سے کم کر سکتے ہیں۔ اس پروجیکٹ میں ہم یہ سمجھنے پر توجہ دیں گے کہ یہ فریم ورک کس قسم کے مسائل حل کرتے ہیں اور خود ایک ایسا پروجیکٹ بنائیں گے۔

## فریم ورک کیوں؟

AI استعمال کرنے کے معاملے میں مختلف طریقے اور مختلف وجوہات ہوتی ہیں کہ ان طریقوں کو کیوں منتخب کیا جائے، یہاں کچھ وجوہات دی گئی ہیں:

- **کوئی SDK نہیں**، زیادہ تر AI ماڈلز آپ کو براہ راست HTTP درخواستوں کے ذریعے ماڈل کے ساتھ تعامل کرنے کی اجازت دیتے ہیں۔ یہ طریقہ کارگر ہے اور اگر SDK کا آپشن موجود نہ ہو تو یہ آپ کا واحد انتخاب ہو سکتا ہے۔
- **SDK**۔ SDK استعمال کرنا عام طور پر تجویز کردہ طریقہ ہے کیونکہ یہ ماڈل کے ساتھ تعامل کرنے کے لیے کم کوڈ لکھنے کی اجازت دیتا ہے۔ یہ عام طور پر ایک مخصوص ماڈل تک محدود ہوتا ہے اور اگر مختلف ماڈلز استعمال کیے جائیں تو آپ کو ان اضافی ماڈلز کی حمایت کے لیے نیا کوڈ لکھنا پڑ سکتا ہے۔
- **ایک فریم ورک**۔ فریم ورک عام طور پر چیزوں کو ایک اور سطح پر لے جاتا ہے، اس لحاظ سے کہ اگر آپ کو مختلف ماڈلز استعمال کرنے کی ضرورت ہو تو ان سب کے لیے ایک API ہوتا ہے، فرق عام طور پر ابتدائی سیٹ اپ میں ہوتا ہے۔ اس کے علاوہ، فریم ورک مفید خلاصے فراہم کرتے ہیں جیسے AI اسپیس میں، وہ ٹولز، میموری، ورک فلو، ایجنٹس وغیرہ کے ساتھ کم کوڈ لکھتے ہوئے کام کر سکتے ہیں۔ چونکہ فریم ورک عام طور پر اپنی رائے رکھتے ہیں، وہ واقعی مددگار ثابت ہو سکتے ہیں اگر آپ ان کے طریقے کو اپنانا چاہتے ہیں، لیکن اگر آپ کچھ منفرد کرنا چاہتے ہیں جو فریم ورک کے لیے نہیں بنایا گیا تو وہ کمزور پڑ سکتے ہیں۔ کبھی کبھی فریم ورک بہت زیادہ آسانی پیدا کر سکتا ہے اور آپ ایک اہم موضوع سیکھنے سے محروم ہو سکتے ہیں جو بعد میں کارکردگی کو نقصان پہنچا سکتا ہے۔

عام طور پر، کام کے لیے صحیح ٹول استعمال کریں۔

## تعارف

اس سبق میں، ہم سیکھیں گے:

- ایک عام AI فریم ورک استعمال کرنا۔
- عام مسائل جیسے چیٹ گفتگو، ٹولز کا استعمال، میموری اور سیاق و سباق کو حل کرنا۔
- AI ایپس بنانے کے لیے اس سے فائدہ اٹھانا۔

## پہلا پرامپٹ

اپنی پہلی ایپ مثال میں، ہم سیکھیں گے کہ AI ماڈل سے کیسے جڑیں اور پرامپٹ کا استعمال کرتے ہوئے اسے کیسے کوئری کریں۔

### Python کا استعمال

اس مثال کے لیے، ہم Langchain استعمال کریں گے تاکہ GitHub ماڈلز سے جڑ سکیں۔ ہم ایک کلاس `ChatOpenAI` استعمال کر سکتے ہیں اور اسے `api_key`, `base_url` اور `model` فیلڈز دے سکتے ہیں۔ ٹوکن وہ چیز ہے جو خود بخود GitHub Codespaces میں آباد ہو جاتی ہے اور اگر آپ ایپ کو مقامی طور پر چلا رہے ہیں تو آپ کو اس کے کام کرنے کے لیے ایک ذاتی رسائی ٹوکن ترتیب دینا ہوگا۔

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

اس کوڈ میں، ہم:

- `ChatOpenAI` کو کال کرتے ہیں تاکہ ایک کلائنٹ بنایا جا سکے۔
- `llm.invoke` کو پرامپٹ کے ساتھ استعمال کرتے ہیں تاکہ ایک جواب بنایا جا سکے۔
- جواب کو `print(response.content)` کے ساتھ پرنٹ کرتے ہیں۔

آپ کو ایک جواب کچھ اس طرح نظر آنا چاہیے:

```text
The capital of France is Paris.
```

## چیٹ گفتگو

پچھلے حصے میں، آپ نے دیکھا کہ ہم نے عام طور پر زیرو شاٹ پرامپٹنگ کے طور پر جانا جاتا ہے، ایک واحد پرامپٹ کے بعد ایک جواب استعمال کیا۔

تاہم، اکثر آپ خود کو ایسی صورتحال میں پاتے ہیں جہاں آپ کو کئی پیغامات کے تبادلے کے ساتھ AI اسسٹنٹ کے ساتھ گفتگو برقرار رکھنے کی ضرورت ہوتی ہے۔

### Python کا استعمال

Langchain میں، ہم گفتگو کو ایک فہرست میں محفوظ کر سکتے ہیں۔ `HumanMessage` صارف کی طرف سے ایک پیغام کی نمائندگی کرتا ہے، اور `SystemMessage` AI کی "شخصیت" کو ترتیب دینے کے لیے ایک پیغام ہے۔ نیچے دی گئی مثال میں آپ دیکھتے ہیں کہ ہم AI کو کیپٹن پیکارڈ کی شخصیت اختیار کرنے کی ہدایت دیتے ہیں اور انسانی/صارف کو "Tell me about you" پرامپٹ کے طور پر پوچھنے کے لیے کہتے ہیں۔

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

اس مثال کا مکمل کوڈ کچھ اس طرح نظر آتا ہے:

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

آپ کو ایک نتیجہ کچھ اس طرح نظر آنا چاہیے:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

گفتگو کی حالت کو برقرار رکھنے کے لیے، آپ چیٹ سے جواب شامل کر سکتے ہیں، تاکہ گفتگو یاد رکھی جائے، یہاں یہ کیسے کیا جاتا ہے:

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

اوپر دی گئی گفتگو سے ہم دیکھ سکتے ہیں کہ ہم نے LLM کو دو بار کال کیا، پہلے گفتگو کے ساتھ جس میں صرف دو پیغامات شامل تھے لیکن پھر دوسری بار مزید پیغامات کے ساتھ گفتگو میں اضافہ کیا۔

حقیقت میں، اگر آپ اسے چلائیں تو آپ دیکھیں گے کہ دوسرا جواب کچھ اس طرح ہوگا:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

میں اسے شاید کے طور پر لوں گا ;)

## اسٹریمنگ جوابات

TODO

## پرامپٹ ٹیمپلیٹس

TODO

## ساختی جواب

TODO

## ٹول کالنگ

ٹولز وہ ہیں جن کے ذریعے ہم LLM کو اضافی مہارتیں دیتے ہیں۔ خیال یہ ہے کہ LLM کو ان فنکشنز کے بارے میں بتائیں جو اس کے پاس ہیں اور اگر کوئی پرامپٹ بنایا جائے جو ان ٹولز کی وضاحت سے میل کھاتا ہو تو ہم انہیں کال کریں۔

### Python کا استعمال

آئیے کچھ ٹولز شامل کریں جیسے:

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

یہاں ہم ایک ٹول `add` کی وضاحت کر رہے ہیں۔ `TypedDict` سے وراثت حاصل کر کے اور ممبرز جیسے `a` اور `b` کو `Annotated` کی قسم کے طور پر شامل کر کے، یہ ایک اسکیم میں تبدیل کیا جا سکتا ہے جسے LLM سمجھ سکتا ہے۔ فنکشنز کی تخلیق ایک ڈکشنری ہے جو یہ یقینی بناتی ہے کہ اگر کوئی مخصوص ٹول شناخت کیا جائے تو ہمیں کیا کرنا ہے۔

آئیے دیکھتے ہیں کہ ہم اس ٹول کے ساتھ LLM کو کیسے کال کرتے ہیں:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

یہاں ہم `bind_tools` کو اپنے `tools` array کے ساتھ کال کرتے ہیں اور اس طرح LLM `llm_with_tools` اب اس ٹول کے بارے میں معلومات رکھتا ہے۔

اس نئے LLM کو استعمال کرنے کے لیے، ہم درج ذیل کوڈ لکھ سکتے ہیں:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

اب جب ہم اس نئے LLM پر `invoke` کال کرتے ہیں، جس کے پاس ٹولز ہیں، تو شاید پراپرٹی `tool_calls` آباد ہو جائے۔ اگر ایسا ہو تو، کوئی بھی شناخت شدہ ٹولز ایک `name` اور `args` پراپرٹی رکھتے ہیں جو شناخت کرتے ہیں کہ کون سا ٹول کال کیا جانا چاہیے اور دلائل کے ساتھ۔ مکمل کوڈ کچھ اس طرح نظر آتا ہے:

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

اس کوڈ کو چلانے پر، آپ کو آؤٹ پٹ کچھ اس طرح نظر آنا چاہیے:

```text
TOOL CALL:  15
CONTENT: 
```

اس آؤٹ پٹ کا مطلب یہ ہے کہ LLM نے پرامپٹ "What is 3 + 12" کا تجزیہ `add` ٹول کے طور پر کیا اور یہ جانا کہ اس کا نام، وضاحت اور ممبر فیلڈ کی وضاحت کی بدولت۔ جواب 15 ہے کیونکہ ہماری ڈکشنری `functions` نے اسے کال کیا:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### ایک زیادہ دلچسپ ٹول جو ویب API کو کال کرتا ہے

ٹولز جو دو نمبروں کو جمع کرتے ہیں دلچسپ ہیں کیونکہ یہ ظاہر کرتے ہیں کہ ٹول کالنگ کیسے کام کرتی ہے، لیکن عام طور پر ٹولز کچھ زیادہ دلچسپ کام کرتے ہیں جیسے کہ ویب API کو کال کرنا، آئیے اس کوڈ کے ساتھ ایسا کرتے ہیں:

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

اب اگر آپ اس کوڈ کو چلائیں گے تو آپ کو کچھ اس طرح کا جواب ملے گا:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

یہاں مکمل کوڈ ہے:

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

## ایمبیڈنگ

مواد کو ویکٹرائز کریں، کوسائن مماثلت کے ذریعے موازنہ کریں

https://python.langchain.com/docs/how_to/embed_text/

### دستاویز لوڈرز

PDF اور CSV

## ایپ بنانا

TODO

## اسائنمنٹ

## خلاصہ

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔