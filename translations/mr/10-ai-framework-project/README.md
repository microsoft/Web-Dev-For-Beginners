<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:23:16+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "mr"
}
-->
# AI फ्रेमवर्क

AI फ्रेमवर्क वापरल्याने प्रकल्प तयार करण्यासाठी लागणारा वेळ मोठ्या प्रमाणात कमी होतो. या प्रकल्पात आपण या फ्रेमवर्क कोणत्या समस्या सोडवतात हे समजून घेणार आहोत आणि स्वतःचा असा एक प्रकल्प तयार करणार आहोत.

## फ्रेमवर्क का वापरावे?

AI वापरण्याच्या बाबतीत वेगवेगळ्या पद्धती आणि कारणे असतात. खाली काही उदाहरणे दिली आहेत:

- **कोणतेही SDK नाही**, बहुतेक AI मॉडेल्स तुम्हाला HTTP विनंत्यांसारख्या पद्धतीने थेट AI मॉडेलशी संवाद साधण्याची परवानगी देतात. ही पद्धत कार्य करते आणि SDK पर्याय उपलब्ध नसल्यास कधी कधी हीच एकमेव पर्याय असते.
- **SDK**, SDK वापरणे सामान्यतः शिफारस केले जाते कारण ते तुमच्या मॉडेलशी संवाद साधण्यासाठी कमी कोड लिहिण्याची परवानगी देते. हे सामान्यतः विशिष्ट मॉडेलपुरते मर्यादित असते आणि वेगवेगळ्या मॉडेल्स वापरत असल्यास, तुम्हाला त्या अतिरिक्त मॉडेल्ससाठी नवीन कोड लिहावा लागतो.
- **फ्रेमवर्क**, फ्रेमवर्क सामान्यतः गोष्टी एका वेगळ्या स्तरावर नेते. जर तुम्हाला वेगवेगळ्या मॉडेल्स वापरायचे असतील, तर त्यांच्यासाठी एकच API असते, फरक फक्त सुरुवातीच्या सेटअपमध्ये असतो. याशिवाय, फ्रेमवर्क उपयोगी संकल्पना आणते जसे की AI क्षेत्रात, ते टूल्स, मेमरी, वर्कफ्लो, एजंट्स आणि अधिक गोष्टी हाताळू शकते आणि कमी कोड लिहिण्याची आवश्यकता असते. फ्रेमवर्क सामान्यतः ठराविक पद्धतीने कार्य करते, त्यामुळे जर तुम्ही त्याच्या पद्धतींना स्वीकारले तर ते खूप उपयुक्त ठरते, पण जर तुम्हाला काही वेगळे करायचे असेल तर ते कमी पडू शकते. कधी कधी फ्रेमवर्क गोष्टी खूप सोप्या करते आणि त्यामुळे तुम्हाला काही महत्त्वाचे विषय शिकता येत नाहीत, जे नंतर कार्यक्षमतेवर परिणाम करू शकतात.

सामान्यतः, योग्य कामासाठी योग्य साधन वापरा.

## परिचय

या धड्यात आपण शिकणार आहोत:

- एक सामान्य AI फ्रेमवर्क वापरणे.
- चॅट संवाद, टूल्सचा वापर, मेमरी आणि संदर्भ यासारख्या सामान्य समस्या सोडवणे.
- याचा उपयोग करून AI अॅप्स तयार करणे.

## पहिला प्रॉम्प्ट

आपल्या पहिल्या अॅप उदाहरणात, आपण AI मॉडेलशी कसे कनेक्ट करायचे आणि प्रॉम्प्ट वापरून त्याला क्वेरी कसे करायचे ते शिकणार आहोत.

### Python वापरून

या उदाहरणासाठी, आपण Langchain वापरून GitHub मॉडेल्सशी कनेक्ट होणार आहोत. आपण `ChatOpenAI` नावाचा क्लास वापरणार आहोत आणि त्याला `api_key`, `base_url` आणि `model` फील्ड्स देणार आहोत. टोकन GitHub Codespaces मध्ये आपोआप भरले जाते आणि जर तुम्ही अॅप स्थानिकपणे चालवत असाल, तर तुम्हाला वैयक्तिक प्रवेश टोकन सेट करावे लागेल.

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

या कोडमध्ये आपण:

- `ChatOpenAI` कॉल करून क्लायंट तयार करतो.
- `llm.invoke` वापरून प्रॉम्प्टसह प्रतिसाद तयार करतो.
- `print(response.content)` वापरून प्रतिसाद प्रिंट करतो.

तुम्हाला खालीलप्रमाणे प्रतिसाद दिसेल:

```text
The capital of France is Paris.
```

## चॅट संवाद

पूर्वीच्या विभागात, आपण शून्य शॉट प्रॉम्प्टिंग कसे वापरले ते पाहिले, म्हणजे एकच प्रॉम्प्ट आणि त्यानंतर प्रतिसाद.

तथापि, अनेकदा तुम्ही अशा परिस्थितीत असता जिथे तुम्हाला तुमच्यात आणि AI सहाय्यकामध्ये अनेक संदेशांची देवाणघेवाण करायची असते.

### Python वापरून

Langchain मध्ये, आपण संवाद एका यादीत साठवू शकतो. `HumanMessage` वापरकर्त्याचा संदेश दर्शवतो, आणि `SystemMessage` AI च्या "व्यक्तिमत्व" सेट करण्यासाठी संदेश असतो. खालील उदाहरणात तुम्ही पाहू शकता की आम्ही AI ला कॅप्टन पिकार्डचे व्यक्तिमत्व स्वीकारण्याचे निर्देश दिले आहेत आणि मानव/वापरकर्त्याने "Tell me about you" हा प्रॉम्प्ट विचारला आहे.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

या उदाहरणाचा पूर्ण कोड खालीलप्रमाणे दिसतो:

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

तुम्हाला खालीलप्रमाणे परिणाम दिसेल:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

संवादाची स्थिती टिकवून ठेवण्यासाठी, तुम्ही चॅटमधून प्रतिसाद जोडू शकता, त्यामुळे संवाद लक्षात ठेवला जातो. हे कसे करायचे ते येथे आहे:

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

वरील संवादातून आपण पाहू शकतो की आपण LLM दोन वेळा कसे कॉल करतो, प्रथम संवाद फक्त दोन संदेशांसह असतो, पण नंतर दुसऱ्या वेळी अधिक संदेश संवादात जोडले जातात.

खरं तर, जर तुम्ही हे चालवले, तर तुम्हाला दुसरा प्रतिसाद खालीलप्रमाणे दिसेल:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

मी याला "कदाचित" म्हणून घेईन ;)

## स्ट्रीमिंग प्रतिसाद

TODO

## प्रॉम्प्ट टेम्पलेट्स

TODO

## संरचित आउटपुट

TODO

## टूल कॉलिंग

टूल्स म्हणजे LLM ला अतिरिक्त कौशल्ये देण्याचा मार्ग. कल्पना अशी आहे की LLM ला त्याच्याकडे असलेल्या फंक्शन्सबद्दल सांगावे आणि जर एखादा प्रॉम्प्ट दिला गेला जो या टूल्सच्या वर्णनाशी जुळतो, तर आपण त्यांना कॉल करतो.

### Python वापरून

चला काही टूल्स जोडूया:

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

येथे आपण `add` नावाच्या टूलचे वर्णन तयार करतो. `TypedDict` पासून वारसा घेऊन आणि `a` आणि `b` सारख्या सदस्यांना `Annotated` प्रकार देऊन, हे LLM समजू शकणाऱ्या स्कीमामध्ये रूपांतरित केले जाऊ शकते. फंक्शन्स तयार करणे म्हणजे एक डिक्शनरी आहे जी सुनिश्चित करते की एखादे विशिष्ट टूल ओळखले गेल्यास काय करायचे ते आपल्याला माहित आहे.

चला पाहूया की आपण हे टूल LLM सह कसे कॉल करतो:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

येथे आपण `bind_tools` ला आपल्या `tools` अ‍ॅरेसह कॉल करतो आणि त्यामुळे LLM `llm_with_tools` ला आता या टूलची माहिती असते.

हे नवीन LLM वापरण्यासाठी, आपण खालील कोड टाइप करू शकतो:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

आता आपण `invoke` कॉल करतो या नवीन llm वर, ज्यामध्ये टूल्स आहेत, आपल्याला कदाचित `tool_calls` प्रॉपर्टी भरलेली दिसेल. जर तसे असेल, तर कोणतेही ओळखलेले टूल्स `name` आणि `args` प्रॉपर्टी असते, जे कोणते टूल कॉल करायचे आणि कोणत्या अर्ग्युमेंट्ससह हे ओळखते. संपूर्ण कोड खालीलप्रमाणे दिसतो:

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

हा कोड चालवल्यावर, तुम्हाला खालीलप्रमाणे आउटपुट दिसेल:

```text
TOOL CALL:  15
CONTENT: 
```

या आउटपुटचा अर्थ असा आहे की LLM ने "What is 3 + 12" या प्रॉम्प्टचे विश्लेषण केले आणि `add` टूल कॉल करायचे आहे हे ओळखले. हे त्याच्या नाव, वर्णन आणि सदस्य फील्ड वर्णनांमुळे शक्य झाले. उत्तर 15 आहे कारण आपल्या कोडने डिक्शनरी `functions` वापरून ते कॉल केले:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### वेब API कॉल करणारे अधिक मनोरंजक टूल

दोन संख्यांची बेरीज करणारे टूल टूल कॉलिंग कसे कार्य करते हे स्पष्ट करते, पण सामान्यतः टूल्स काहीतरी अधिक मनोरंजक करतात, जसे की वेब API कॉल करणे. चला खालील कोडसह ते करूया:

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

आता जर तुम्ही हा कोड चालवला तर तुम्हाला खालीलप्रमाणे प्रतिसाद मिळेल:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

संपूर्ण कोड खालीलप्रमाणे आहे:

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

सामग्रीचे व्हेक्टरायझेशन करा, कोसाइन साम्यतेद्वारे तुलना करा.

https://python.langchain.com/docs/how_to/embed_text/

### दस्तऐवज लोडर्स

PDF आणि CSV

## अॅप तयार करणे

TODO

## असाइनमेंट

## सारांश

---

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी कृपया लक्षात ठेवा की स्वयंचलित भाषांतरांमध्ये त्रुटी किंवा अचूकतेचा अभाव असू शकतो. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानला जावा. महत्त्वाच्या माहितीसाठी व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून निर्माण होणाऱ्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.