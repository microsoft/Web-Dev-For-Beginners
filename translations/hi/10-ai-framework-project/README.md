<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:22:38+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "hi"
}
-->
# एआई फ्रेमवर्क

आजकल कई एआई फ्रेमवर्क उपलब्ध हैं, जिनका उपयोग करके प्रोजेक्ट बनाने में लगने वाला समय काफी कम किया जा सकता है। इस प्रोजेक्ट में, हम यह समझने पर ध्यान केंद्रित करेंगे कि ये फ्रेमवर्क किन समस्याओं का समाधान करते हैं और खुद एक ऐसा प्रोजेक्ट बनाएंगे।

## फ्रेमवर्क क्यों?

एआई का उपयोग करने के लिए विभिन्न दृष्टिकोण और कारण होते हैं, जिनके आधार पर आप इन दृष्टिकोणों को चुन सकते हैं। यहां कुछ उदाहरण दिए गए हैं:

- **कोई SDK नहीं**, अधिकांश एआई मॉडल आपको सीधे एचटीटीपी अनुरोधों के माध्यम से एआई मॉडल के साथ इंटरैक्ट करने की अनुमति देते हैं। यह दृष्टिकोण काम करता है और यदि एसडीके विकल्प उपलब्ध नहीं है, तो यह आपका एकमात्र विकल्प हो सकता है।
- **SDK**। एसडीके का उपयोग करना आमतौर पर अनुशंसित दृष्टिकोण होता है क्योंकि यह आपके मॉडल के साथ इंटरैक्ट करने के लिए कम कोड लिखने की अनुमति देता है। यह आमतौर पर एक विशिष्ट मॉडल तक सीमित होता है और यदि आप विभिन्न मॉडलों का उपयोग कर रहे हैं, तो आपको उन अतिरिक्त मॉडलों का समर्थन करने के लिए नया कोड लिखने की आवश्यकता हो सकती है।
- **एक फ्रेमवर्क**। एक फ्रेमवर्क आमतौर पर चीजों को एक और स्तर तक ले जाता है, इस अर्थ में कि यदि आपको विभिन्न मॉडलों का उपयोग करने की आवश्यकता है, तो उन सभी के लिए एक एपीआई होता है, जो भिन्न होता है वह आमतौर पर प्रारंभिक सेटअप होता है। इसके अतिरिक्त, फ्रेमवर्क उपयोगी अमूर्तता लाते हैं जैसे कि एआई क्षेत्र में, वे टूल्स, मेमोरी, वर्कफ्लो, एजेंट्स आदि को कम कोड लिखते हुए संभाल सकते हैं। क्योंकि फ्रेमवर्क आमतौर पर एक निश्चित दृष्टिकोण अपनाते हैं, वे वास्तव में मददगार हो सकते हैं यदि आप उनके तरीके को अपनाते हैं, लेकिन यदि आप कुछ अनुकूलित करना चाहते हैं जो फ्रेमवर्क के लिए नहीं बनाया गया है, तो वे कम प्रभावी हो सकते हैं। कभी-कभी फ्रेमवर्क चीजों को इतना सरल बना देते हैं कि आप किसी महत्वपूर्ण विषय को नहीं सीख पाते, जो बाद में प्रदर्शन को नुकसान पहुंचा सकता है।

सामान्यतः, काम के लिए सही उपकरण का उपयोग करें।

## परिचय

इस पाठ में, हम सीखेंगे:

- एक सामान्य एआई फ्रेमवर्क का उपयोग करना।
- सामान्य समस्याओं जैसे कि चैट वार्तालाप, टूल उपयोग, मेमोरी और संदर्भ को संबोधित करना।
- एआई ऐप्स बनाने के लिए इसका लाभ उठाना।

## पहला प्रॉम्प्ट

हमारे पहले ऐप उदाहरण में, हम सीखेंगे कि एआई मॉडल से कैसे कनेक्ट करें और एक प्रॉम्प्ट का उपयोग करके इसे क्वेरी करें।

### पायथन का उपयोग करना

इस उदाहरण के लिए, हम Langchain का उपयोग GitHub Models से कनेक्ट करने के लिए करेंगे। हम `ChatOpenAI` नामक एक क्लास का उपयोग करेंगे और इसे `api_key`, `base_url` और `model` फील्ड देंगे। टोकन कुछ ऐसा है जो स्वचालित रूप से GitHub Codespaces में पॉप्युलेट होता है और यदि आप ऐप को लोकली चला रहे हैं, तो आपको इसे काम करने के लिए एक व्यक्तिगत एक्सेस टोकन सेट करना होगा।

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

इस कोड में, हम:

- `ChatOpenAI` को कॉल करके एक क्लाइंट बनाते हैं।
- एक प्रॉम्प्ट के साथ `llm.invoke` का उपयोग करके एक प्रतिक्रिया बनाते हैं।
- `print(response.content)` के साथ प्रतिक्रिया को प्रिंट करते हैं।

आपको कुछ इस तरह की प्रतिक्रिया दिखाई देगी:

```text
The capital of France is Paris.
```

## चैट वार्तालाप

पिछले खंड में, आपने देखा कि हमने आमतौर पर जिसे ज़ीरो शॉट प्रॉम्प्टिंग कहा जाता है, उसका उपयोग कैसे किया, एक सिंगल प्रॉम्प्ट और उसके बाद एक प्रतिक्रिया।

हालांकि, अक्सर आप खुद को ऐसी स्थिति में पाते हैं जहां आपको और एआई सहायक के बीच कई संदेशों का आदान-प्रदान करते हुए एक वार्तालाप बनाए रखना होता है।

### पायथन का उपयोग करना

Langchain में, हम वार्तालाप को एक सूची में संग्रहीत कर सकते हैं। `HumanMessage` उपयोगकर्ता से एक संदेश का प्रतिनिधित्व करता है, और `SystemMessage` एक संदेश है जो एआई की "व्यक्तित्व" सेट करने के लिए होता है। नीचे दिए गए उदाहरण में, आप देख सकते हैं कि हम एआई को कैप्टन पिकार्ड की व्यक्तित्व मानने का निर्देश कैसे देते हैं और मानव/उपयोगकर्ता को "अपने बारे में बताओ" पूछने के लिए प्रॉम्प्ट के रूप में निर्देशित करते हैं।

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

इस उदाहरण का पूरा कोड इस प्रकार दिखता है:

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

आपको कुछ इस तरह का परिणाम दिखाई देगा:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

वार्तालाप की स्थिति को बनाए रखने के लिए, आप चैट से प्रतिक्रिया जोड़ सकते हैं, ताकि वार्तालाप याद रखा जा सके। इसे इस प्रकार किया जा सकता है:

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

ऊपर दिए गए वार्तालाप से हम देख सकते हैं कि हमने LLM को दो बार कैसे इनवोक किया, पहले वार्तालाप में केवल दो संदेशों के साथ और फिर दूसरी बार वार्तालाप में अधिक संदेश जोड़कर।

वास्तव में, यदि आप इसे चलाते हैं, तो आप देखेंगे कि दूसरी प्रतिक्रिया कुछ इस प्रकार होगी:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

मैं इसे शायद के रूप में लूंगा ;)

## स्ट्रीमिंग प्रतिक्रियाएं

TODO

## प्रॉम्प्ट टेम्पलेट्स

TODO

## संरचित आउटपुट

TODO

## टूल कॉलिंग

टूल्स वह माध्यम हैं जिससे हम LLM को अतिरिक्त कौशल प्रदान करते हैं। विचार यह है कि LLM को उन फंक्शन्स के बारे में बताया जाए जो उसके पास हैं और यदि कोई प्रॉम्प्ट इन टूल्स के विवरण से मेल खाता है, तो हम उन्हें कॉल कर सकते हैं।

### पायथन का उपयोग करना

आइए कुछ टूल्स जोड़ें:

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

यहां हम एक टूल `add` का विवरण बना रहे हैं। `TypedDict` से इनहेरिट करके और `a` और `b` जैसे मेंबर्स को `Annotated` प्रकार के रूप में जोड़कर, इसे एक स्कीमा में परिवर्तित किया जा सकता है जिसे LLM समझ सकता है। फंक्शन्स का निर्माण एक डिक्शनरी है जो यह सुनिश्चित करता है कि यदि कोई विशिष्ट टूल पहचाना जाता है तो हमें क्या करना है।

आइए देखें कि हम इस टूल के साथ LLM को कैसे कॉल करते हैं:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

यहां हम अपने `tools` ऐरे के साथ `bind_tools` को कॉल करते हैं और इस प्रकार LLM `llm_with_tools` अब इस टूल के बारे में जानकारी रखता है।

इस नए LLM का उपयोग करने के लिए, हम निम्न कोड टाइप कर सकते हैं:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

अब जब हम इस नए LLM पर `invoke` को कॉल करते हैं, जिसमें टूल्स हैं, तो हमें शायद `tool_calls` प्रॉपर्टी पॉप्युलेटेड मिलेगी। यदि ऐसा है, तो किसी भी पहचाने गए टूल्स में एक `name` और `args` प्रॉपर्टी होगी जो यह पहचानती है कि किस टूल को कॉल करना चाहिए और किस आर्ग्युमेंट्स के साथ। पूरा कोड इस प्रकार दिखता है:

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

इस कोड को चलाने पर, आपको कुछ इस तरह का आउटपुट दिखाई देगा:

```text
TOOL CALL:  15
CONTENT: 
```

इस आउटपुट का मतलब यह है कि LLM ने प्रॉम्प्ट "What is 3 + 12" का विश्लेषण इस रूप में किया कि `add` टूल को कॉल किया जाना चाहिए और यह जानता था कि इसका नाम, विवरण और मेंबर फील्ड विवरणों के कारण। उत्तर 15 इसलिए है क्योंकि हमारी डिक्शनरी `functions` का उपयोग करके कोड ने इसे इनवोक किया:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### एक और दिलचस्प टूल जो एक वेब एपीआई को कॉल करता है

दो नंबर जोड़ने वाले टूल्स दिलचस्प हैं क्योंकि यह दिखाता है कि टूल कॉलिंग कैसे काम करती है, लेकिन आमतौर पर टूल्स कुछ अधिक दिलचस्प करते हैं, जैसे कि एक वेब एपीआई को कॉल करना। आइए इस कोड के साथ ऐसा ही करें:

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

अब यदि आप इस कोड को चलाते हैं, तो आपको कुछ इस प्रकार की प्रतिक्रिया मिलेगी:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

यहां पूरा कोड है:

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

## एम्बेडिंग

सामग्री को वेक्टर में बदलें, कोसाइन समानता के माध्यम से तुलना करें

https://python.langchain.com/docs/how_to/embed_text/

### डॉक्यूमेंट लोडर्स

पीडीएफ और सीएसवी

## ऐप बनाना

TODO

## असाइनमेंट

## सारांश

---

**अस्वीकरण**:  
यह दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके अनुवादित किया गया है। जबकि हम सटीकता के लिए प्रयास करते हैं, कृपया ध्यान दें कि स्वचालित अनुवाद में त्रुटियां या अशुद्धियां हो सकती हैं। मूल भाषा में दस्तावेज़ को प्रामाणिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए, पेशेवर मानव अनुवाद की सिफारिश की जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम उत्तरदायी नहीं हैं।