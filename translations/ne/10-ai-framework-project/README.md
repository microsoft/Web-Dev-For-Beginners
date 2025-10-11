<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:23:39+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ne"
}
-->
# एआई फ्रेमवर्क

त्यहाँ धेरै एआई फ्रेमवर्कहरू छन् जसको प्रयोगले परियोजना निर्माण गर्न लाग्ने समयलाई धेरै छिटो बनाउन सक्छ। यस परियोजनामा, हामी यी फ्रेमवर्कहरूले कुन समस्याहरू समाधान गर्छन् भनेर बुझ्न र आफैंले यस्तै परियोजना निर्माण गर्न ध्यान केन्द्रित गर्नेछौं।

## किन फ्रेमवर्क?

एआई प्रयोग गर्दा विभिन्न दृष्टिकोणहरू र ती दृष्टिकोणहरू छनोट गर्ने विभिन्न कारणहरू हुन्छन्। यहाँ केही कारणहरू छन्:

- **एसडीके छैन**, धेरैजसो एआई मोडेलहरूले तपाईंलाई HTTP अनुरोधहरू जस्तै सिधै एआई मोडेलसँग अन्तरक्रिया गर्न अनुमति दिन्छ। यो दृष्टिकोण काम गर्छ र कहिलेकाहीँ एसडीके विकल्प उपलब्ध नभएमा यो मात्र विकल्प हुन सक्छ।
- **एसडीके**। एसडीके प्रयोग गर्नु सामान्यतया सिफारिस गरिएको दृष्टिकोण हो किनभने यसले तपाईंलाई आफ्नो मोडेलसँग अन्तरक्रिया गर्न कम कोड लेख्न अनुमति दिन्छ। यो सामान्यतया एक विशिष्ट मोडेलमा सीमित हुन्छ र यदि विभिन्न मोडेलहरू प्रयोग गर्दै हुनुहुन्छ भने, ती थप मोडेलहरूलाई समर्थन गर्न नयाँ कोड लेख्न आवश्यक हुन सक्छ।
- **फ्रेमवर्क**। फ्रेमवर्कले सामान्यतया चीजहरूलाई अर्को स्तरमा लैजान्छ, यदि तपाईंले विभिन्न मोडेलहरू प्रयोग गर्न आवश्यक छ भने, तिनीहरूका लागि एउटै एपीआई हुन्छ, फरक भनेको सामान्यतया प्रारम्भिक सेटअप हो। थप रूपमा, फ्रेमवर्कहरूले उपयोगी अमूर्तता ल्याउँछन्, जस्तै एआई क्षेत्रमा, तिनीहरूले उपकरणहरू, मेमोरी, वर्कफ्लो, एजेन्टहरू र कम कोड लेख्दै अन्य कुराहरूको व्यवस्थापन गर्न सक्छन्। किनभने फ्रेमवर्कहरू सामान्यतया निश्चित विचारधारामा आधारित हुन्छन्, तिनीहरूले तपाईंलाई सहयोग गर्न सक्छन् यदि तपाईंले तिनीहरूको तरिकालाई स्वीकार गर्नुभयो भने, तर यदि तपाईंले फ्रेमवर्कले बनाएको भन्दा फरक केही गर्न खोज्नुभयो भने तिनीहरू असफल हुन सक्छन्। कहिलेकाहीँ फ्रेमवर्कले धेरै सरल बनाउँछ र त्यसैले तपाईंले महत्त्वपूर्ण विषय सिक्न सक्नुहुन्न, जसले पछि प्रदर्शनलाई हानि पुर्‍याउन सक्छ।

सामान्यतया, कामको लागि सही उपकरण प्रयोग गर्नुहोस्।

## परिचय

यस पाठमा, हामी सिक्नेछौं:

- सामान्य एआई फ्रेमवर्क प्रयोग गर्न।
- च्याट संवाद, उपकरण प्रयोग, मेमोरी र सन्दर्भ जस्ता सामान्य समस्याहरू समाधान गर्न।
- यसलाई एआई एप्स निर्माण गर्न उपयोग गर्न।

## पहिलो प्रम्प्ट

हाम्रो पहिलो एप उदाहरणमा, हामी एआई मोडेलसँग कसरी जडान गर्ने र प्रम्प्ट प्रयोग गरेर यसलाई कसरी सोधपुछ गर्ने भनेर सिक्नेछौं।

### पाइथन प्रयोग गर्दै

यस उदाहरणको लागि, हामी Langchain प्रयोग गर्नेछौं GitHub Models सँग जडान गर्न। हामी `ChatOpenAI` नामक कक्षाको प्रयोग गर्न सक्छौं र यसलाई `api_key`, `base_url` र `model` जस्ता क्षेत्रहरू दिन सक्छौं। टोकन स्वचालित रूपमा GitHub Codespaces भित्र जनाइएको हुन्छ र यदि तपाईंले एपलाई स्थानीय रूपमा चलाउँदै हुनुहुन्छ भने, यो काम गर्न व्यक्तिगत पहुँच टोकन सेटअप गर्न आवश्यक छ।

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

यस कोडमा, हामी:

- `ChatOpenAI` लाई कल गरेर क्लाइन्ट सिर्जना गर्छौं।
- `llm.invoke` लाई प्रम्प्टसँग प्रयोग गरेर प्रतिक्रिया सिर्जना गर्छौं।
- `print(response.content)` प्रयोग गरेर प्रतिक्रिया प्रिन्ट गर्छौं।

तपाईंले निम्न जस्तै प्रतिक्रिया देख्नुहुनेछ:

```text
The capital of France is Paris.
```

## च्याट संवाद

अघिल्लो खण्डमा, तपाईंले देख्नुभयो कि हामीले सामान्यतया शून्य शट प्रम्प्टिङ भनेर चिनिने कुरा कसरी प्रयोग गर्यौं, एकल प्रम्प्ट र त्यसपछि प्रतिक्रिया।

तर, प्रायः तपाईं आफैं र एआई सहायक बीच धेरै सन्देशहरू आदानप्रदान गर्नुपर्ने अवस्थामा हुनुहुन्छ।

### पाइथन प्रयोग गर्दै

Langchain मा, हामीले संवादलाई सूचीमा भण्डारण गर्न सक्छौं। `HumanMessage` ले प्रयोगकर्ताबाट आएको सन्देशलाई प्रतिनिधित्व गर्छ, र `SystemMessage` एआईको "व्यक्तित्व" सेट गर्नको लागि सन्देश हो। तलको उदाहरणमा, तपाईंले देख्नुहुनेछ कि हामीले एआईलाई क्याप्टेन पिकार्डको व्यक्तित्व ग्रहण गर्न निर्देशन दिएका छौं र मानव/प्रयोगकर्ताले "तपाईंको बारेमा बताउनुहोस्" भनेर सोध्न प्रम्प्टको रूपमा प्रयोग गरेका छौं।

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

यस उदाहरणको पूर्ण कोड यसरी देखिन्छ:

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

तपाईंले निम्न जस्तै परिणाम देख्नुहुनेछ:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

संवादको अवस्था कायम राख्न, तपाईं च्याटबाट प्रतिक्रिया थप्न सक्नुहुन्छ, ताकि संवाद सम्झन सकियोस्। यसलाई यसरी गर्न सकिन्छ:

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

माथिको संवादबाट हामीले देख्न सक्छौं कि हामीले LLM लाई दुई पटक कसरी बोलायौं, पहिलो पटक संवादमा केवल दुई सन्देशहरू समावेश थिए, तर दोस्रो पटक संवादमा थप सन्देशहरू थपेर।

वास्तवमा, यदि तपाईंले यो चलाउनुभयो भने, तपाईंले दोस्रो प्रतिक्रिया यस प्रकारको देख्नुहुनेछ:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

म यसलाई "सायद" भनेर लिन्छु ;)

## स्ट्रिमिङ प्रतिक्रियाहरू

TODO

## प्रम्प्ट टेम्प्लेटहरू

TODO

## संरचित आउटपुट

TODO

## उपकरण कल गर्ने

उपकरणहरू भनेको हामीले LLM लाई अतिरिक्त सीप दिने तरिका हो। विचार यो हो कि LLM लाई उपलब्ध कार्यहरूबारे जानकारी दिनु र यदि कुनै प्रम्प्टले ती उपकरणहरूको वर्णनसँग मेल खायो भने, तिनीहरूलाई कल गर्नु हो।

### पाइथन प्रयोग गर्दै

हामी यसरी केही उपकरणहरू थपौं:

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

यहाँ हामीले `add` नामक उपकरणको वर्णन सिर्जना गरेका छौं। `TypedDict` बाट उत्तराधिकार गरेर र `a` र `b` जस्ता सदस्यहरूलाई `Annotated` प्रकारको रूपमा थपेर, यसलाई LLM ले बुझ्न सक्ने स्किमामा रूपान्तरण गर्न सकिन्छ। कार्यहरूको सिर्जना एउटा डिक्सनरी हो जसले सुनिश्चित गर्दछ कि यदि कुनै विशिष्ट उपकरण पहिचान गरियो भने के गर्नुपर्छ भन्ने थाहा हुन्छ।

अब हेरौं कि हामीले यो उपकरणसँग LLM लाई कसरी कल गर्छौं:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

यहाँ हामीले `bind_tools` लाई हाम्रो `tools` एर्रे सँग कल गरेका छौं र यसरी LLM `llm_with_tools` ले अब यो उपकरणको ज्ञान राख्छ।

यो नयाँ LLM प्रयोग गर्न, हामीले निम्न कोड टाइप गर्न सक्छौं:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

अब हामीले उपकरण भएको यो नयाँ LLM मा `invoke` कल गर्दा, हामीले सम्भवतः `tool_calls` गुणलाई भरिएको देख्न सक्छौं। यदि हो भने, कुनै पनि पहिचान गरिएका उपकरणहरूको `name` र `args` गुण हुन्छ, जसले कुन उपकरण कल गर्नुपर्छ र कुन तर्कहरूसँग भनेर पहिचान गर्दछ। पूर्ण कोड यसरी देखिन्छ:

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

यो कोड चलाउँदा, तपाईंले निम्न जस्तै आउटपुट देख्नुहुनेछ:

```text
TOOL CALL:  15
CONTENT: 
```

यस आउटपुटको अर्थ हो कि LLM ले प्रम्प्ट "What is 3 + 12" लाई `add` उपकरण कल गर्नुपर्ने अर्थमा विश्लेषण गर्यो र यसलाई यसको नाम, वर्णन र सदस्य क्षेत्रको वर्णनहरूको कारण थाहा भयो। उत्तर 15 हुनुको कारण हाम्रो कोडले डिक्सनरी `functions` प्रयोग गरेर यसलाई कल गरेको हो:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### वेब एपीआई कल गर्ने थप रोचक उपकरण

दुई संख्याहरू जोड्ने उपकरणहरू रोचक छन् किनभने यसले उपकरण कल गर्ने तरिकालाई चित्रण गर्छ, तर सामान्यतया उपकरणहरूले केही थप रोचक काम गर्छन्, जस्तै वेब एपीआई कल गर्नु। यस कोडसँगै हामी त्यस्तै गरौं:

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

अब यदि तपाईंले यो कोड चलाउनुभयो भने, तपाईंले निम्न जस्तै प्रतिक्रिया प्राप्त गर्नुहुनेछ:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

यहाँ सम्पूर्ण कोड छ:

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

## एम्बेडिङ

सामग्रीलाई भेक्टराइज गर्नुहोस्, कोसाइन समानताको माध्यमबाट तुलना गर्नुहोस्।

https://python.langchain.com/docs/how_to/embed_text/

### कागजात लोडरहरू

पीडीएफ र सीएसभी

## एप निर्माण

TODO

## असाइनमेन्ट

## सारांश

---

**अस्वीकरण**:  
यो दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) प्रयोग गरेर अनुवाद गरिएको हो। हामी शुद्धताको लागि प्रयास गर्छौं, तर कृपया ध्यान दिनुहोस् कि स्वचालित अनुवादमा त्रुटिहरू वा अशुद्धताहरू हुन सक्छ। मूल दस्तावेज़ यसको मातृभाषामा आधिकारिक स्रोत मानिनुपर्छ। महत्वपूर्ण जानकारीको लागि, व्यावसायिक मानव अनुवाद सिफारिस गरिन्छ। यस अनुवादको प्रयोगबाट उत्पन्न हुने कुनै पनि गलतफहमी वा गलत व्याख्याको लागि हामी जिम्मेवार हुने छैनौं।