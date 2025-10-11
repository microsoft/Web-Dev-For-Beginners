<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:32:56+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "my"
}
-->
# AI Framework

AI Framework များစွာရှိပြီး၊ ၎င်းတို့ကို အသုံးပြုခြင်းဖြင့် ပရောဂျက်တစ်ခုကို တည်ဆောက်ရန် လိုအပ်သောအချိန်ကို အလွန်လျင်မြန်စေပါသည်။ ဒီပရောဂျက်မှာတော့ Framework များက ဖြေရှင်းပေးနိုင်သော ပြဿနာများကို နားလည်ရန်နှင့် ပရောဂျက်တစ်ခုကို ကိုယ်တိုင်တည်ဆောက်ရန် အာရုံစိုက်ပါမည်။

## Framework သုံးရတဲ့အကြောင်း

AI ကို အသုံးပြုတဲ့အခါမှာ နည်းလမ်းအမျိုးမျိုးရှိပြီး၊ အဲဒီနည်းလမ်းတွေကို ရွေးချယ်ရတဲ့အကြောင်းအရင်းတွေကလည်း မတူညီပါတယ်။ အောက်မှာ အချို့ကို ဖော်ပြထားပါတယ်-

- **SDK မရှိခြင်း**: AI မော်ဒယ်များအများစုက HTTP request များကို အသုံးပြု၍ မော်ဒယ်နှင့်တိုက်ရိုက် ဆက်သွယ်နိုင်စေပါတယ်။ ဒီနည်းလမ်းက အလုပ်လုပ်နိုင်ပြီး၊ SDK ရွေးချယ်စရာမရှိတဲ့အခါမှာ တစ်ခါတစ်ရံ အဲဒီနည်းလမ်းကိုသာ အသုံးပြုရနိုင်ပါတယ်။
- **SDK**: SDK ကို အသုံးပြုခြင်းက မော်ဒယ်နှင့် ဆက်သွယ်ရန် လိုအပ်သော ကုဒ်ကို လျှော့ချနိုင်စေသောကြောင့် အကြံပြုထားသော နည်းလမ်းဖြစ်ပါတယ်။ ဒါပေမယ့်၊ SDK သည် သတ်မှတ်ထားသော မော်ဒယ်တစ်ခုအတွက်သာ အကျိုးရှိပြီး၊ မော်ဒယ်အမျိုးမျိုးကို အသုံးပြုလိုပါက ထပ်မံကုဒ်ရေးရန် လိုအပ်နိုင်ပါတယ်။
- **Framework**: Framework သည် မော်ဒယ်အမျိုးမျိုးကို အသုံးပြုလိုပါက API တစ်ခုတည်းကို အသုံးပြုနိုင်စေပြီး၊ မတူညီသောအရာမှာ စတင်ပြင်ဆင်မှုသာ ဖြစ်ပါတယ်။ ထို့အပြင် Framework များက AI နယ်ပယ်တွင် အသုံးဝင်သော အဆင့်မြှင့်တင်မှုများကို ပေးစွမ်းနိုင်ပြီး၊ Tools, Memory, Workflows, Agents စသည်တို့ကို လျှော့ချထားသော ကုဒ်ဖြင့် စီမံနိုင်စေပါတယ်။ Framework များသည် အမြဲတမ်း အမြင်တစ်ခုတည်းကို အခြေခံထားသောကြောင့်၊ ၎င်းတို့၏ နည်းလမ်းကို လက်ခံနိုင်ပါက အလွန်အသုံးဝင်နိုင်သော်လည်း၊ Framework များမထောက်ပံ့သော အထူးပြုလုပ်ဆောင်မှုများကို လုပ်ဆောင်လိုပါက အခက်အခဲဖြစ်နိုင်ပါတယ်။ တစ်ခါတစ်ရံ Framework များက အလွန်လွယ်ကူစွာ ရှင်းလင်းပေးနိုင်ပြီး၊ အရေးကြီးသောအကြောင်းအရာများကို မသိရှိစေခြင်းကြောင့် နောက်ပိုင်းတွင် စွမ်းဆောင်ရည်ကို ထိခိုက်စေနိုင်ပါသည်။

ယေဘူယျအားဖြင့်၊ အလုပ်အတွက် သင့်တော်သော Tools ကို အသုံးပြုပါ။

## အကျဉ်းချုပ်

ဒီသင်ခန်းစာမှာ ကျွန်တော်တို့-

- AI Framework တစ်ခုကို အသုံးပြုခြင်းကို လေ့လာမည်။
- Chat Conversations, Tool Usage, Memory နှင့် Context ကဲ့သို့သော ပြဿနာများကို ဖြေရှင်းမည်။
- AI Apps တည်ဆောက်ရန် အထောက်အကူပြုမည်။

## ပထမဆုံး Prompt

ပထမဆုံး App နမူနာမှာ AI Model ကို ချိတ်ဆက်ပြီး Prompt ကို အသုံးပြု၍ Query လုပ်နည်းကို လေ့လာမည်။

### Python အသုံးပြုခြင်း

ဒီနမူနာအတွက် Langchain ကို အသုံးပြု၍ GitHub Models ကို ချိတ်ဆက်မည်။ `ChatOpenAI` ဟုခေါ်သော Class ကို အသုံးပြုပြီး၊ `api_key`, `base_url` နှင့် `model` ကဲ့သို့သော Fields များကို ပေးရမည်။ Token သည် GitHub Codespaces တွင် အလိုအလျောက် Populate ဖြစ်ပြီး၊ App ကို Local မှာ Run လုပ်ပါက Personal Access Token ကို စီစဉ်ရမည်။

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

ဒီကုဒ်မှာ-

- `ChatOpenAI` ကို ခေါ်ပြီး Client တစ်ခုကို ဖန်တီးသည်။
- `llm.invoke` ကို Prompt ဖြင့် Response ဖန်တီးရန် အသုံးပြုသည်။
- `print(response.content)` ဖြင့် Response ကို Print လုပ်သည်။

သင်ရရှိမည့် Response သည် အောက်ပါအတိုင်းဖြစ်နိုင်ပါသည်-

```text
The capital of France is Paris.
```

## Chat Conversation

အထက်ပါအပိုင်းတွင် Zero Shot Prompting ဟုခေါ်သော Prompt တစ်ခုနှင့် Response တစ်ခုကို အသုံးပြုနည်းကို တွေ့မြင်ခဲ့ပါသည်။

သို့သော်၊ တစ်ခါတစ်ရံ AI Assistant နှင့် မက်ဆေ့များ အပြန်အလှန် လွှဲပြောင်းရသော Conversation ကို ထိန်းသိမ်းရန် လိုအပ်နိုင်ပါသည်။

### Python အသုံးပြုခြင်း

Langchain တွင် Conversation ကို List အဖြစ် သိမ်းဆည်းနိုင်သည်။ `HumanMessage` သည် User မှ ပေးပို့သော Message ကို ကိုယ်စားပြုပြီး၊ `SystemMessage` သည် AI ၏ "ပုဂ္ဂိုလ်ရေး" ကို သတ်မှတ်ရန် Message ဖြစ်သည်။ အောက်ပါနမူနာတွင် AI ကို Captain Picard အဖြစ် သတ်မှတ်ရန်နှင့် Human/User မှ "Tell me about you" ဟု မေးမြန်းရန် Prompt ကို အသုံးပြုထားသည်။

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

ဒီနမူနာ၏ အပြည့်အစုံကုဒ်မှာ အောက်ပါအတိုင်းဖြစ်သည်-

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

သင်ရရှိမည့် ရလဒ်မှာ အောက်ပါအတိုင်းဖြစ်နိုင်ပါသည်-

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Conversation ၏ State ကို ထိန်းသိမ်းရန် Chat Response ကို Conversation ထဲသို့ ထည့်နိုင်ပြီး၊ အောက်ပါအတိုင်းလုပ်ဆောင်နိုင်ပါသည်-

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

အထက်ပါ Conversation မှာ LLM ကို နှစ်ကြိမ် Invoke လုပ်နည်းကို တွေ့မြင်နိုင်ပြီး၊ ပထမဆုံးမှာ Message နှစ်ခုသာပါရှိသော်လည်း၊ ဒုတိယအကြိမ်မှာ Message များပိုမိုထည့်သွင်းထားသည်။

အမှန်တကယ် Run လုပ်ပါက ဒုတိယ Response သည် အောက်ပါအတိုင်းဖြစ်နိုင်ပါသည်-

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

ဒါကို "သေချာမဟုတ်တဲ့ အဖြေ" လို့ယူဆလိုက်မယ် ;)

## Streaming Responses

TODO

## Prompt Templates

TODO

## Structured Output

TODO

## Tool Calling

Tools သည် LLM ကို အပိုစွမ်းရည်များပေးစွမ်းသော နည်းလမ်းဖြစ်သည်။ Tools များကို ဖန်တီးပြီး၊ Prompt တစ်ခုသည် Tools တစ်ခု၏ ဖော်ပြချက်နှင့် ကိုက်ညီပါက Tools ကို ခေါ်နိုင်သည်။

### Python အသုံးပြုခြင်း

Tools များကို အောက်ပါအတိုင်း ထည့်သွင်းနိုင်သည်-

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

ဒီမှာ `add` ဟုခေါ်သော Tool တစ်ခု၏ ဖော်ပြချက်ကို ဖန်တီးထားသည်။ `TypedDict` ကို အခြေခံပြီး `a` နှင့် `b` ကဲ့သို့သော Members ကို ထည့်သွင်းထားသည်။ Tools ကို Dictionary အဖြစ် ဖန်တီးထားပြီး၊ Tools တစ်ခုကို ရွေးချယ်ပါက ဘာလုပ်ရမည်ကို သတ်မှတ်ထားသည်။

ဒီ Tool ကို အသုံးပြုနည်းကို အောက်တွင် ဖော်ပြထားသည်-

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

ဒီမှာ `bind_tools` ကို `tools` Array နှင့် ချိတ်ဆက်ထားပြီး၊ LLM `llm_with_tools` သည် Tool ၏ Knowledge ရရှိထားသည်။

ဒီ LLM ကို အသုံးပြုရန် အောက်ပါကုဒ်ကို ရေးနိုင်သည်-

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Tools ပါရှိသော LLM ကို `invoke` ခေါ်ပါက `tool_calls` Property တွင် Tools များကို `name` နှင့် `args` Properties ဖြင့် ဖော်ပြထားသည်။ အပြည့်အစုံကုဒ်မှာ အောက်ပါအတိုင်းဖြစ်သည်-

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

ဒီကုဒ်ကို Run လုပ်ပါက အောက်ပါအတိုင်း Output ရရှိနိုင်ပါသည်-

```text
TOOL CALL:  15
CONTENT: 
```

ဒီ Output သည် Prompt "What is 3 + 12" ကို `add` Tool ကို ခေါ်ရန်လိုအပ်သည်ဟု LLM မှ ခွဲခြားနိုင်ပြီး၊ Tool ၏ Name, Description နှင့် Member Field Descriptions ကြောင့် သိရှိနိုင်သည်။ အဖြေ 15 ဖြစ်သည်မှာ Dictionary `functions` ကို အသုံးပြု၍ Tool ကို Invoke လုပ်ထားသောကြောင့်ဖြစ်သည်-

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Web API ကို ခေါ်သော Tool တစ်ခု

နံပါတ်နှစ်ခုကို ပေါင်းစပ်သော Tool သည် Tool Calling ကို ရှင်းလင်းပေးနိုင်သော်လည်း၊ Tools များသည် Web API ကို ခေါ်ဆိုခြင်းကဲ့သို့ ပိုမိုစိတ်ဝင်စားဖွယ်ရာများကို လုပ်ဆောင်နိုင်သည်။ အောက်ပါကုဒ်ဖြင့် လုပ်ဆောင်ပါမည်-

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

ဒီကုဒ်ကို Run လုပ်ပါက အောက်ပါအတိုင်း Response ရရှိနိုင်ပါသည်-

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

အပြည့်အစုံကုဒ်မှာ အောက်ပါအတိုင်းဖြစ်သည်-

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

အကြောင်းအရာကို Vectorize လုပ်ပြီး၊ Cosine Similarity ဖြင့် နှိုင်းယှဉ်ပါ။

https://python.langchain.com/docs/how_to/embed_text/

### Document Loaders

PDF နှင့် CSV

## App တစ်ခုတည်ဆောက်ခြင်း

TODO

## လုပ်ငန်းတာဝန်

## အကျဉ်းချုပ်

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။