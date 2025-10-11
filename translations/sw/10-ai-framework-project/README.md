<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:29:57+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "sw"
}
-->
# Mfumo wa AI

Kuna mifumo mingi ya AI ambayo, ikitumiwa, inaweza kuharakisha sana muda unaohitajika kujenga mradi. Katika mradi huu, tutazingatia kuelewa matatizo ambayo mifumo hii inashughulikia na kujenga mradi kama huo sisi wenyewe.

## Kwa nini mfumo

Linapokuja suala la kutumia AI, kuna mbinu tofauti na sababu tofauti za kuchagua mbinu hizi. Hapa kuna baadhi:

- **Hakuna SDK**, mifano mingi ya AI hukuruhusu kuwasiliana moja kwa moja na mfano wa AI kupitia, kwa mfano, maombi ya HTTP. Mbinu hiyo inafanya kazi na wakati mwingine inaweza kuwa chaguo lako pekee ikiwa chaguo la SDK halipo.
- **SDK**. Kutumia SDK kwa kawaida ni mbinu inayopendekezwa kwani hukuruhusu kuandika msimbo mdogo kuwasiliana na mfano wako. Kwa kawaida, inahusiana na mfano maalum, na ikiwa unatumia mifano tofauti, unaweza kuhitaji kuandika msimbo mpya ili kuunga mkono mifano hiyo ya ziada.
- **Mfumo**. Mfumo kwa kawaida huchukua mambo kwa kiwango kingine kwa maana kwamba ikiwa unahitaji kutumia mifano tofauti, kuna API moja kwa yote, kinachotofautiana kwa kawaida ni usanidi wa awali. Zaidi ya hayo, mifumo huleta unyumbufu muhimu kama vile katika nafasi ya AI, inaweza kushughulikia zana, kumbukumbu, mtiririko wa kazi, mawakala na zaidi huku ukiandika msimbo mdogo. Kwa sababu mifumo kwa kawaida ina maoni maalum, inaweza kuwa ya msaada sana ikiwa unakubaliana na jinsi inavyofanya mambo, lakini inaweza kushindwa ikiwa unajaribu kufanya kitu cha kipekee ambacho mfumo haujatengenezwa kwa ajili yake. Wakati mwingine mfumo unaweza pia kurahisisha sana na kwa hivyo unaweza usijifunze mada muhimu ambayo baadaye inaweza kuathiri utendaji, kwa mfano.

Kwa ujumla, tumia zana sahihi kwa kazi husika.

## Utangulizi

Katika somo hili, tutajifunza:

- Kutumia mfumo wa kawaida wa AI.
- Kushughulikia matatizo ya kawaida kama mazungumzo ya gumzo, matumizi ya zana, kumbukumbu na muktadha.
- Kutumia hili kujenga programu za AI.

## Swali la kwanza

Katika mfano wetu wa kwanza wa programu, tutajifunza jinsi ya kuunganishwa na mfano wa AI na kuuliza swali kwa kutumia swali la maelekezo.

### Kutumia Python

Kwa mfano huu, tutatumia Langchain kuunganishwa na Mifano ya GitHub. Tunaweza kutumia darasa linaloitwa `ChatOpenAI` na kulipa mashamba `api_key`, `base_url` na `model`. Tokeni ni kitu kinachojazwa kiotomatiki ndani ya GitHub Codespaces, na ikiwa unaendesha programu hiyo kwa ndani, unahitaji kuanzisha tokeni ya ufikiaji wa kibinafsi ili hili lifanye kazi.

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

Katika msimbo huu, tunafanya:

- Kupiga `ChatOpenAI` kuunda mteja.
- Kutumia `llm.invoke` na swali la maelekezo kuunda jibu.
- Kuchapisha jibu kwa kutumia `print(response.content)`.

Unapaswa kuona jibu linalofanana na:

```text
The capital of France is Paris.
```

## Mazungumzo ya gumzo

Katika sehemu iliyotangulia, umeona jinsi tulivyotumia kile kinachojulikana kama zero shot prompting, swali moja likifuatiwa na jibu.

Hata hivyo, mara nyingi unajikuta katika hali ambapo unahitaji kudumisha mazungumzo ya ujumbe kadhaa unaobadilishana kati yako na msaidizi wa AI.

### Kutumia Python

Katika langchain, tunaweza kuhifadhi mazungumzo katika orodha. `HumanMessage` inawakilisha ujumbe kutoka kwa mtumiaji, na `SystemMessage` ni ujumbe unaokusudiwa kuweka "tabia" ya AI. Katika mfano hapa chini, unaona jinsi tunavyomwelekeza AI kuchukua tabia ya Captain Picard na kwa binadamu/mtumiaji kuuliza "Niambie kuhusu wewe" kama swali la maelekezo.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Msimbo kamili wa mfano huu unaonekana kama ifuatavyo:

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

Unapaswa kuona matokeo yanayofanana na:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Ili kudumisha hali ya mazungumzo, unaweza kuongeza jibu kutoka kwa gumzo, ili mazungumzo yakumbukwe. Hivi ndivyo unavyoweza kufanya hivyo:

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

Tunachoweza kuona kutoka kwa mazungumzo hapo juu ni jinsi tunavyotumia LLM mara mbili, mara ya kwanza na mazungumzo yanayojumuisha ujumbe mbili tu, lakini kisha mara ya pili na ujumbe zaidi ulioongezwa kwenye mazungumzo.

Kwa kweli, ikiwa utaendesha hili, utaona jibu la pili likiwa kitu kama:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Nitachukulia hilo kama labda ;)

## Majibu ya mtiririko

TODO

## Violezo vya maelekezo

TODO

## Matokeo yaliyopangwa

TODO

## Kutumia zana

Zana ni jinsi tunavyompa LLM ujuzi wa ziada. Wazo ni kumwambia LLM kuhusu kazi alizonazo, na ikiwa swali linatolewa linalolingana na maelezo ya mojawapo ya zana hizi, basi tunazitumia.

### Kutumia Python

Hebu tuongeze zana kama ifuatavyo:

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

Tunachofanya hapa ni kuunda maelezo ya zana inayoitwa `add`. Kwa kurithi kutoka kwa `TypedDict` na kuongeza wanachama kama `a` na `b` wa aina `Annotated`, hii inaweza kubadilishwa kuwa schema ambayo LLM inaweza kuelewa. Uundaji wa kazi ni kamusi inayohakikisha tunajua cha kufanya ikiwa zana maalum itatambuliwa.

Hebu tuone jinsi tunavyomwita LLM na zana hii:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Hapa tunaita `bind_tools` na safu yetu ya `tools`, na kwa hivyo LLM `llm_with_tools` sasa ina maarifa ya zana hii.

Ili kutumia LLM mpya hii, tunaweza kuandika msimbo ufuatao:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Sasa kwamba tunaita `invoke` kwenye LLM hii mpya, ambayo ina zana, tunaweza kuwa na mali ya `tool_calls` ikijazwa. Ikiwa ni hivyo, zana yoyote iliyotambuliwa ina mali ya `name` na `args` inayotambua zana gani inapaswa kuitwa na kwa hoja gani. Msimbo kamili unaonekana kama ifuatavyo:

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

Kuendesha msimbo huu, unapaswa kuona matokeo yanayofanana na:

```text
TOOL CALL:  15
CONTENT: 
```

Kinachomaanisha matokeo haya ni kwamba LLM ilichambua swali "What is 3 + 12" kama kumaanisha kwamba zana `add` inapaswa kuitwa, na ilijua hivyo kutokana na jina lake, maelezo na maelezo ya uwanja wa wanachama. Kwamba jibu ni 15 ni kwa sababu ya msimbo wetu kutumia kamusi `functions` kuitekeleza:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Zana ya kuvutia zaidi inayotumia API ya wavuti

Zana inayoongeza namba mbili ni ya kuvutia kwani inaonyesha jinsi matumizi ya zana yanavyofanya kazi, lakini kwa kawaida zana huwa na kufanya kitu cha kuvutia zaidi kama, kwa mfano, kutumia API ya wavuti. Hebu tufanye hivyo na msimbo huu:

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

Sasa ikiwa utaendesha msimbo huu, utapata jibu linalosema kitu kama:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Hapa kuna msimbo mzima:

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

## Kuweka alama

vectorize maudhui, linganisha kupitia cosine similarity

https://python.langchain.com/docs/how_to/embed_text/

### Vipakiaji vya hati

pdf na csv

## Kujenga programu

TODO

## Kazi ya nyumbani

## Muhtasari

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.