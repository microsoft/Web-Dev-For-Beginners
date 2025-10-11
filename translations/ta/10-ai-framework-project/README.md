<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:34:02+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ta"
}
-->
# AI Framework

AI கட்டமைப்புகள் பல உள்ளன, அவற்றைப் பயன்படுத்துவதால் ஒரு திட்டத்தை உருவாக்க எடுக்கும் நேரத்தை மிகவும் வேகமாகக் குறைக்க முடியும். இந்த திட்டத்தில், இந்த கட்டமைப்புகள் எந்த பிரச்சினைகளைத் தீர்க்கின்றன என்பதைப் புரிந்து கொண்டு, நாங்கள் ஒரு திட்டத்தை உருவாக்குவோம்.

## ஏன் ஒரு கட்டமைப்பு?

AI பயன்படுத்துவதில் பல்வேறு அணுகுமுறைகள் மற்றும் காரணங்கள் உள்ளன. இங்கே சிலவற்றை பார்க்கலாம்:

- **SDK இல்லாமல்**: பெரும்பாலான AI மாதிரிகள் HTTP கோரிக்கைகள் மூலம் நேரடியாக தொடர்பு கொள்ள அனுமதிக்கின்றன. இந்த அணுகுமுறை செயல்படும், மேலும் SDK விருப்பம் இல்லாதபோது இது ஒரே விருப்பமாக இருக்கலாம்.
- **SDK**: SDK பயன்படுத்துவது பொதுவாக பரிந்துரைக்கப்படும் அணுகுமுறையாகும், ஏனெனில் இது உங்கள் மாதிரியுடன் தொடர்பு கொள்ள குறைவான குறியீட்டை எழுத அனுமதிக்கிறது. இது பொதுவாக ஒரு குறிப்பிட்ட மாதிரிக்கு மட்டுமே வரையறுக்கப்பட்டிருக்கும், மேலும் பல மாதிரிகளைப் பயன்படுத்தினால், கூடுதல் மாதிரிகளை ஆதரிக்க புதிய குறியீட்டை எழுத வேண்டியிருக்கும்.
- **ஒரு கட்டமைப்பு**: ஒரு கட்டமைப்பு பொதுவாக விஷயங்களை மற்றொரு நிலைக்கு எடுத்துச் செல்கிறது. பல மாதிரிகளைப் பயன்படுத்த வேண்டியிருந்தால், அவற்றிற்கான API ஒன்று இருக்கும், வேறுபாடு பொதுவாக ஆரம்ப அமைப்பில் இருக்கும். மேலும், AI துறையில், கருவிகள், நினைவகம், வேலைப்பாடுகள், முகவர்கள் போன்றவற்றை குறைவான குறியீட்டில் கையாள உதவும் பயனுள்ள சுருக்கங்களை கட்டமைப்புகள் கொண்டுவருகின்றன. கட்டமைப்புகள் பொதுவாக ஒரு குறிப்பிட்ட வழியில் செயல்படுவதால், அவற்றின் அணுகுமுறையை ஏற்றுக்கொண்டால் மிகவும் பயனுள்ளதாக இருக்கும், ஆனால் கட்டமைப்பு உருவாக்கப்படாத தனிப்பயன் விஷயங்களைச் செய்ய முயற்சித்தால் குறைவாக இருக்கலாம். சில நேரங்களில் ஒரு கட்டமைப்பு மிகவும் எளிமைப்படுத்தி விடும், இதனால் முக்கியமான தலைப்பை நீங்கள் கற்றுக்கொள்ள முடியாமல் போகலாம், இது பின்னர் செயல்திறனை பாதிக்கக்கூடும்.

பொதுவாக, வேலைக்கு சரியான கருவியைப் பயன்படுத்துங்கள்.

## அறிமுகம்

இந்த பாடத்தில், நாங்கள் கற்றுக்கொள்வோம்:

- பொதுவான AI கட்டமைப்பைப் பயன்படுத்துவது.
- உரையாடல்கள், கருவி பயன்பாடு, நினைவகம் மற்றும் சூழல் போன்ற பொதுவான பிரச்சினைகளைத் தீர்ப்பது.
- AI பயன்பாடுகளை உருவாக்க இதைப் பயன்படுத்துவது.

## முதல் கேள்வி

எங்கள் முதல் பயன்பாட்டு எடுத்துக்காட்டில், AI மாதிரியுடன் இணைந்து ஒரு கேள்வியைப் பயன்படுத்தி அதை விசாரிப்பது எப்படி என்பதை கற்றுக்கொள்வோம்.

### Python பயன்படுத்துவது

இந்த எடுத்துக்காட்டுக்கு, Langchain ஐ பயன்படுத்தி GitHub மாதிரிகளுடன் இணைவோம். `ChatOpenAI` என்ற வகுப்பைப் பயன்படுத்தி `api_key`, `base_url` மற்றும் `model` ஆகிய புலங்களை கொடுக்கலாம். GitHub Codespaces-இல் டோக்கன் தானாகவே நிரப்பப்படும், மேலும் நீங்கள் பயன்பாட்டை உள்ளூரில் இயக்கினால், இது செயல்பட தனிப்பட்ட அணுகல் டோக்கனை அமைக்க வேண்டும்.

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

இந்த குறியீட்டில், நாங்கள்:

- `ChatOpenAI` ஐ அழைத்து ஒரு கிளையண்டை உருவாக்குகிறோம்.
- `llm.invoke` ஐ ஒரு கேள்வியுடன் பயன்படுத்தி ஒரு பதிலை உருவாக்குகிறோம்.
- `print(response.content)` மூலம் பதிலை அச்சிடுகிறோம்.

நீங்கள் இதற்குச் சமமான ஒரு பதிலைப் பார்க்க வேண்டும்:

```text
The capital of France is Paris.
```

## உரையாடல்

முந்தைய பிரிவில், ஒரு கேள்வி மற்றும் பதில் கொண்ட zero shot prompting ஐ எப்படி பயன்படுத்தினோம் என்பதைப் பார்த்தீர்கள்.

ஆனால், பல முறை நீங்கள் பல செய்திகளை AI உதவியாளருடன் பரிமாற்றம் செய்யும் உரையாடலில் ஈடுபட வேண்டிய சூழலில் இருப்பீர்கள்.

### Python பயன்படுத்துவது

Langchain-இல், உரையாடலை ஒரு பட்டியலில் சேமிக்கலாம். `HumanMessage` என்பது பயனரிடமிருந்து வரும் ஒரு செய்தியை பிரதிநிதித்துவப்படுத்துகிறது, மற்றும் `SystemMessage` என்பது AI-யின் "பண்பு" அமைக்கப்பட வேண்டிய ஒரு செய்தியாகும். கீழே உள்ள எடுத்துக்காட்டில், AI-யை Captain Picard ஆக நடிக்கச் சொல்லி, மனிதன்/பயனர் "Tell me about you" என்று கேட்கும் கேள்வியை கேட்கும் விதமாக எப்படி வழிகாட்டுகிறோம் என்பதைப் பார்க்கலாம்.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

இந்த எடுத்துக்காட்டின் முழு குறியீடு இவ்வாறு இருக்கும்:

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

நீங்கள் இதற்குச் சமமான ஒரு முடிவைப் பார்க்க வேண்டும்:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

உரையாடலின் நிலையைப் பராமரிக்க, ஒரு உரையாடலின் பதிலைச் சேர்க்கலாம், இதனால் உரையாடல் நினைவில் இருக்கும். இதை எப்படி செய்வது என்பதை இங்கே பார்க்கலாம்:

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

மேலே உள்ள உரையாடலிலிருந்து, இரண்டு முறை LLM ஐ invoke செய்வது எப்படி என்பதைப் பார்க்கலாம், முதலில் இரண்டு செய்திகளைக் கொண்ட உரையாடலுடன், பின்னர் உரையாடலுக்கு மேலும் செய்திகளைச் சேர்த்து இரண்டாவது முறை.

உண்மையில், நீங்கள் இதை இயக்கினால், இரண்டாவது பதில் இவ்வாறு இருக்கும்:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

நான் அதை "முடிந்தால்" என்று எடுத்துக்கொள்கிறேன் ;)

## ஸ்ட்ரீமிங் பதில்கள்

TODO

## கேள்வி வார்ப்புருக்கள்

TODO

## அமைப்பான வெளியீடு

TODO

## கருவி அழைப்புகள்

கருவிகள் என்பது LLM-க்கு கூடுதல் திறன்களை வழங்கும் வழியாகும். இந்த கருத்து, LLM-க்கு அதன் செயல்பாடுகள் பற்றி சொல்லி, ஒரு கேள்வி ஒரு குறிப்பிட்ட கருவியின் விளக்கத்துடன் பொருந்தினால், அதை அழைக்க வேண்டும் என்பதே.

### Python பயன்படுத்துவது

இங்கே சில கருவிகளைச் சேர்ப்போம்:

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

இங்கே நாம் `add` என்ற கருவியின் விளக்கத்தை உருவாக்குகிறோம். `TypedDict`-இல் இருந்து மரபுரீதியாகப் பெறுவதன் மூலம், `a` மற்றும் `b` போன்ற உறுப்புகளை `Annotated` வகையாகச் சேர்ப்பதன் மூலம், இது LLM புரிந்துகொள்ளக்கூடிய ஒரு schema ஆக மாற்றப்படலாம். செயல்பாடுகளை உருவாக்குவது ஒரு அகராதி ஆகும், இது ஒரு குறிப்பிட்ட கருவி அடையாளம் காணப்பட்டால் என்ன செய்ய வேண்டும் என்பதை உறுதிப்படுத்துகிறது.

இந்த கருவியுடன் LLM ஐ எப்படி அழைக்கிறோம் என்பதைப் பார்ப்போம்:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

இங்கே நாம் `bind_tools` ஐ எங்கள் `tools` வரிசையுடன் அழைக்கிறோம், இதனால் LLM `llm_with_tools` இப்போது இந்த கருவியின் அறிவைப் பெற்றுள்ளது.

இந்த புதிய LLM ஐ பயன்படுத்த, கீழே உள்ள குறியீட்டை எழுதலாம்:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

இப்போது இந்த புதிய LLM-ல் `invoke` ஐ அழைக்கும்போது, `tool_calls` சொத்து நிரப்பப்பட்டிருக்கலாம். அப்படியானால், அடையாளம் காணப்பட்ட எந்த கருவிகளும் `name` மற்றும் `args` சொத்துகளைக் கொண்டிருக்கும், இது எந்த கருவி அழைக்கப்பட வேண்டும் மற்றும் எந்த வாதங்களுடன் என்பதை அடையாளம் காண்கிறது. முழு குறியீடு இவ்வாறு இருக்கும்:

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

இந்த குறியீட்டை இயக்கும்போது, நீங்கள் இதற்குச் சமமான ஒரு வெளியீட்டைப் பார்க்க வேண்டும்:

```text
TOOL CALL:  15
CONTENT: 
```

இந்த வெளியீடு என்ன அர்த்தம் என்பதாவது, LLM "What is 3 + 12" என்ற கேள்வியை `add` கருவி அழைக்கப்பட வேண்டும் என்று பகுப்பாய்வு செய்தது, அதன் பெயர், விளக்கம் மற்றும் உறுப்பினர் புல விளக்கங்களின் காரணமாக. பதில் 15 என்பது எங்கள் குறியீடு அகராதி `functions` ஐ பயன்படுத்தி அதை invoke செய்ததால்தான்:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### ஒரு வலை API ஐ அழைக்கும் மேலும் சுவாரஸ்யமான கருவி

இரண்டு எண்களைச் சேர்க்கும் கருவிகள், கருவி அழைப்புகள் எப்படி செயல்படுகின்றன என்பதை விளக்குவதால் சுவாரஸ்யமாக இருக்கும், ஆனால் பொதுவாக கருவிகள், உதாரணமாக ஒரு வலை API ஐ அழைப்பது போன்ற மேலும் சுவாரஸ்யமான விஷயங்களைச் செய்யும். இதை கீழே உள்ள குறியீட்டுடன் செய்வோம்:

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

இப்போது இந்த குறியீட்டை இயக்கினால், நீங்கள் இதற்குச் சமமான ஒரு பதிலைப் பெறுவீர்கள்:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

முழு குறியீடு இங்கே உள்ளது:

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

## எம்பெடிங்

உள்ளடக்கத்தை வெக்டராக்கவும், கோசைன் சிமிலாரிட்டி மூலம் ஒப்பிடவும்

https://python.langchain.com/docs/how_to/embed_text/

### ஆவண ஏற்றுதல்கள்

pdf மற்றும் csv

## பயன்பாட்டை உருவாக்குவது

TODO

## பணிக்கட்டளை

## சுருக்கம்

---

**குறிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையைப் பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கின்றோம், ஆனால் தானியக்க மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறான தகவல்கள் இருக்கக்கூடும் என்பதை தயவுசெய்து கவனத்தில் கொள்ளுங்கள். அதன் தாய்மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாக கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்கள் அல்லது தவறான விளக்கங்களுக்கு நாங்கள் பொறுப்பல்ல.