<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:22:56+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "bn"
}
-->
# AI ফ্রেমওয়ার্ক

অনেক AI ফ্রেমওয়ার্ক রয়েছে যা ব্যবহার করলে একটি প্রকল্প তৈরি করার সময় উল্লেখযোগ্যভাবে কমে যায়। এই প্রকল্পে আমরা এই ফ্রেমওয়ার্কগুলো কী সমস্যার সমাধান করে তা বুঝতে এবং নিজেরাই একটি প্রকল্প তৈরি করতে শিখব।

## কেন একটি ফ্রেমওয়ার্ক

AI ব্যবহারের ক্ষেত্রে বিভিন্ন পদ্ধতি এবং এই পদ্ধতিগুলো বেছে নেওয়ার বিভিন্ন কারণ রয়েছে। এখানে কিছু উল্লেখ করা হলো:

- **কোনো SDK নেই**, বেশিরভাগ AI মডেল আপনাকে HTTP অনুরোধের মাধ্যমে সরাসরি AI মডেলের সাথে যোগাযোগ করার অনুমতি দেয়। এই পদ্ধতি কার্যকর এবং যদি SDK বিকল্প অনুপস্থিত থাকে তবে এটি আপনার একমাত্র বিকল্প হতে পারে।
- **SDK**। SDK ব্যবহার সাধারণত সুপারিশ করা হয় কারণ এটি মডেলের সাথে যোগাযোগ করার জন্য কম কোড লিখতে সাহায্য করে। এটি সাধারণত একটি নির্দিষ্ট মডেলের জন্য সীমাবদ্ধ এবং যদি বিভিন্ন মডেল ব্যবহার করতে হয়, তবে আপনাকে সেই অতিরিক্ত মডেলগুলোর জন্য নতুন কোড লিখতে হতে পারে।
- **একটি ফ্রেমওয়ার্ক**। একটি ফ্রেমওয়ার্ক সাধারণত জিনিসগুলোকে আরও উন্নত স্তরে নিয়ে যায়। যদি বিভিন্ন মডেল ব্যবহার করতে হয়, তাহলে সবার জন্য একটি API থাকে, যা আলাদা হয় সাধারণত প্রাথমিক সেটআপে। এছাড়াও ফ্রেমওয়ার্কগুলো দরকারী বিমূর্ততা নিয়ে আসে যেমন AI ক্ষেত্রে, তারা টুল, মেমরি, ওয়ার্কফ্লো, এজেন্ট এবং আরও অনেক কিছু পরিচালনা করতে পারে এবং কম কোড লিখতে হয়। যেহেতু ফ্রেমওয়ার্কগুলো সাধারণত মতামতপূর্ণ হয়, তারা সত্যিই সহায়ক হতে পারে যদি আপনি তাদের পদ্ধতিগুলো গ্রহণ করেন। তবে যদি আপনি এমন কিছু করতে চান যা ফ্রেমওয়ার্কটি তৈরি করা হয়নি, তাহলে এটি কম কার্যকর হতে পারে। কখনও কখনও একটি ফ্রেমওয়ার্ক খুব বেশি সরলীকরণ করতে পারে এবং আপনি একটি গুরুত্বপূর্ণ বিষয় শিখতে না পারলে পরে পারফরম্যান্সে ক্ষতি হতে পারে।

সাধারণভাবে, কাজের জন্য সঠিক টুল ব্যবহার করুন।

## পরিচিতি

এই পাঠে আমরা শিখব:

- একটি সাধারণ AI ফ্রেমওয়ার্ক ব্যবহার করতে।
- চ্যাট কথোপকথন, টুল ব্যবহার, মেমরি এবং প্রসঙ্গের মতো সাধারণ সমস্যাগুলো সমাধান করতে।
- AI অ্যাপ তৈরি করতে এটি ব্যবহার করতে।

## প্রথম প্রম্পট

আমাদের প্রথম অ্যাপ উদাহরণে, আমরা শিখব কীভাবে একটি AI মডেলের সাথে সংযোগ স্থাপন করতে এবং একটি প্রম্পট ব্যবহার করে এটি থেকে প্রশ্ন করতে হয়।

### পাইথন ব্যবহার করে

এই উদাহরণে, আমরা Langchain ব্যবহার করব GitHub মডেলের সাথে সংযোগ স্থাপন করতে। আমরা `ChatOpenAI` নামক একটি ক্লাস ব্যবহার করতে পারি এবং এটিকে `api_key`, `base_url` এবং `model` ফিল্ড দিতে পারি। টোকেনটি GitHub Codespaces-এ স্বয়ংক্রিয়ভাবে পূরণ হয় এবং যদি আপনি অ্যাপটি স্থানীয়ভাবে চালান, তাহলে এটি কাজ করার জন্য আপনাকে একটি ব্যক্তিগত অ্যাক্সেস টোকেন সেট আপ করতে হবে।

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

এই কোডে আমরা:

- `ChatOpenAI` কল করে একটি ক্লায়েন্ট তৈরি করি।
- একটি প্রম্পট ব্যবহার করে `llm.invoke` কল করে একটি প্রতিক্রিয়া তৈরি করি।
- `print(response.content)` দিয়ে প্রতিক্রিয়া মুদ্রণ করি।

আপনার একটি প্রতিক্রিয়া দেখতে পাওয়া উচিত যা এরকম:

```text
The capital of France is Paris.
```

## চ্যাট কথোপকথন

পূর্ববর্তী অংশে, আপনি দেখেছেন কীভাবে আমরা সাধারণত জিরো শট প্রম্পটিং ব্যবহার করি, একটি একক প্রম্পট এবং তারপরে একটি প্রতিক্রিয়া।

তবে, প্রায়ই আপনি নিজেকে এমন পরিস্থিতিতে খুঁজে পাবেন যেখানে আপনাকে AI সহকারীর সাথে একাধিক বার্তা বিনিময়ের কথোপকথন বজায় রাখতে হবে।

### পাইথন ব্যবহার করে

Langchain-এ, আমরা কথোপকথন একটি তালিকায় সংরক্ষণ করতে পারি। `HumanMessage` ব্যবহারকারীর একটি বার্তা উপস্থাপন করে এবং `SystemMessage` AI-এর "ব্যক্তিত্ব" সেট করার জন্য একটি বার্তা। নিচের উদাহরণে আপনি দেখতে পাবেন কীভাবে আমরা AI-কে ক্যাপ্টেন পিকার্ডের ব্যক্তিত্ব গ্রহণ করতে নির্দেশ দিই এবং মানব/ব্যবহারকারীকে "Tell me about you" জিজ্ঞাসা করতে বলি।

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

এই উদাহরণের সম্পূর্ণ কোড দেখতে এরকম:

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

আপনার একটি ফলাফল দেখতে পাওয়া উচিত যা এরকম:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

কথোপকথনের অবস্থা বজায় রাখতে, আপনি একটি চ্যাট থেকে প্রতিক্রিয়া যোগ করতে পারেন, যাতে কথোপকথন মনে রাখা যায়। এটি কীভাবে করা যায় তা এখানে:

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

উপরের কথোপকথন থেকে আমরা দেখতে পাই কীভাবে আমরা প্রথমে কথোপকথন দুটি বার্তা নিয়ে শুরু করি এবং তারপর দ্বিতীয়বার আরও বার্তা যোগ করে কথোপকথন চালাই।

প্রকৃতপক্ষে, যদি আপনি এটি চালান, আপনি দ্বিতীয় প্রতিক্রিয়া দেখতে পাবেন যা এরকম:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

আমি এটিকে "সম্ভবত" ধরে নিলাম ;)

## স্ট্রিমিং প্রতিক্রিয়া

TODO

## প্রম্পট টেমপ্লেট

TODO

## কাঠামোগত আউটপুট

TODO

## টুল কলিং

টুল হলো কীভাবে আমরা LLM-কে অতিরিক্ত দক্ষতা প্রদান করি। ধারণাটি হলো LLM-কে তার ফাংশন সম্পর্কে জানানো এবং যদি কোনো প্রম্পট তৈরি হয় যা এই টুলগুলোর বর্ণনার সাথে মিলে যায়, তাহলে আমরা সেগুলো কল করি।

### পাইথন ব্যবহার করে

চলুন কিছু টুল যোগ করি এরকম:

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

এখানে আমরা `add` নামক একটি টুলের বর্ণনা তৈরি করছি। `TypedDict` থেকে উত্তরাধিকার গ্রহণ করে এবং `a` এবং `b` এর মতো সদস্য যোগ করে যা `Annotated` টাইপের, এটি একটি স্কিমায় রূপান্তরিত হতে পারে যা LLM বুঝতে পারে। ফাংশন তৈরির জন্য একটি ডিকশনারি ব্যবহার করা হয় যা নিশ্চিত করে যে নির্দিষ্ট টুল চিহ্নিত হলে কী করতে হবে।

চলুন দেখি কীভাবে আমরা এই টুল দিয়ে LLM কল করি:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

এখানে আমরা `bind_tools` কল করি আমাদের `tools` অ্যারের সাথে এবং এর ফলে LLM `llm_with_tools` এখন এই টুল সম্পর্কে জ্ঞান রাখে।

এই নতুন LLM ব্যবহার করতে, আমরা নিম্নলিখিত কোড লিখতে পারি:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

এখন আমরা এই নতুন LLM-এ `invoke` কল করি, যার টুল রয়েছে। যদি `tool_calls` প্রপার্টি পূরণ হয়, তাহলে কোনো চিহ্নিত টুলের একটি `name` এবং `args` প্রপার্টি থাকে যা চিহ্নিত করে কোন টুল কল করা উচিত এবং কী আর্গুমেন্ট দিয়ে। সম্পূর্ণ কোড দেখতে এরকম:

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

এই কোড চালালে আপনি এরকম আউটপুট দেখতে পাবেন:

```text
TOOL CALL:  15
CONTENT: 
```

এই আউটপুটের অর্থ হলো LLM প্রম্পট "What is 3 + 12" বিশ্লেষণ করে বুঝেছে যে `add` টুলটি কল করা উচিত এবং এটি তার নাম, বর্ণনা এবং সদস্য ক্ষেত্রের বর্ণনার জন্য জানে। যে উত্তরটি 15 হয়েছে তা আমাদের কোডের ডিকশনারি `functions` ব্যবহার করে এটি কল করার কারণে:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### একটি আরও আকর্ষণীয় টুল যা একটি ওয়েব API কল করে

যে টুল দুটি সংখ্যা যোগ করে তা আকর্ষণীয় কারণ এটি টুল কলিং কীভাবে কাজ করে তা চিত্রিত করে। তবে সাধারণত টুলগুলো আরও আকর্ষণীয় কিছু করে, যেমন একটি ওয়েব API কল করা। চলুন এই কোড দিয়ে তা করি:

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

এখন যদি আপনি এই কোড চালান, আপনি একটি প্রতিক্রিয়া পাবেন যা এরকম কিছু বলবে:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

এখানে সম্পূর্ণ কোড:

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

## এমবেডিং

কন্টেন্টকে ভেক্টরাইজ করুন, কসাইন সিমিলারিটির মাধ্যমে তুলনা করুন।

https://python.langchain.com/docs/how_to/embed_text/

### ডকুমেন্ট লোডার

PDF এবং CSV

## একটি অ্যাপ তৈরি করা

TODO

## অ্যাসাইনমেন্ট

## সারসংক্ষেপ

---

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসাধ্য সঠিকতার জন্য চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। মূল ভাষায় থাকা নথিটিকে প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য, পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যা হলে আমরা দায়বদ্ধ থাকব না।