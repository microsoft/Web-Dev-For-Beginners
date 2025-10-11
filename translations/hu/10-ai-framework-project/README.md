<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:30:17+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "hu"
}
-->
# AI Keretrendszer

Számos AI keretrendszer létezik, amelyek használatával jelentősen felgyorsítható egy projekt elkészítési ideje. Ebben a projektben arra fogunk összpontosítani, hogy megértsük, milyen problémákat oldanak meg ezek a keretrendszerek, és saját magunk is építünk egy ilyen projektet.

## Miért keretrendszer?

Az AI használatával kapcsolatban különböző megközelítések és okok vannak ezek választására. Íme néhány példa:

- **Nincs SDK**: A legtöbb AI modell lehetővé teszi, hogy közvetlenül, például HTTP kéréseken keresztül lépjünk kapcsolatba a modellel. Ez a megközelítés működik, és néha az egyetlen lehetőség, ha nincs SDK opció.
- **SDK**: Az SDK használata általában ajánlott, mivel kevesebb kódot kell írni a modellel való interakcióhoz. Ez általában egy adott modellre korlátozódik, és ha különböző modelleket használunk, új kódot kell írni az új modellek támogatásához.
- **Keretrendszer**: A keretrendszer általában egy magasabb szintet képvisel, mivel lehetővé teszi, hogy különböző modelleket egyetlen API-n keresztül használjunk, ahol általában csak a kezdeti beállítások különböznek. Ezenkívül a keretrendszerek hasznos absztrakciókat hoznak be, például az AI területén eszközökkel, memóriával, munkafolyamatokkal, ügynökökkel és más funkciókkal foglalkoznak, miközben kevesebb kódot kell írni. Mivel a keretrendszerek általában véleményvezéreltek, nagyon hasznosak lehetnek, ha elfogadjuk az általuk kínált megközelítést, de korlátozottak lehetnek, ha valami egyedi dolgot próbálunk megvalósítani, amit a keretrendszer nem támogat. Néha a keretrendszer túlságosan leegyszerűsítheti a dolgokat, és emiatt nem tanulunk meg egy fontos témát, ami később például teljesítményproblémákat okozhat.

Általánosságban: használjuk a megfelelő eszközt a feladathoz.

## Bevezetés

Ebben a leckében megtanuljuk:

- Egy általános AI keretrendszer használatát.
- Gyakori problémák megoldását, mint például chatbeszélgetések, eszközhasználat, memória és kontextus.
- Ezt kihasználva AI alkalmazások építését.

## Első kérés

Az első alkalmazáspéldánkban megtanuljuk, hogyan csatlakozzunk egy AI modellhez, és hogyan kérdezzük meg egy kérés segítségével.

### Python használata

Ebben a példában a Langchain-t fogjuk használni, hogy csatlakozzunk a GitHub Modellekhez. Használhatunk egy `ChatOpenAI` nevű osztályt, amelynek mezői az `api_key`, `base_url` és `model`. A token automatikusan kitöltődik a GitHub Codespaces-ben, és ha helyileg futtatjuk az alkalmazást, személyes hozzáférési tokent kell beállítanunk, hogy ez működjön.

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

Ebben a kódban:

- Meghívjuk a `ChatOpenAI`-t, hogy létrehozzunk egy klienst.
- Használjuk az `llm.invoke`-t egy kéréshez, hogy választ kapjunk.
- A választ a `print(response.content)` segítségével nyomtatjuk ki.

A válasz hasonló lesz ehhez:

```text
The capital of France is Paris.
```

## Chatbeszélgetés

Az előző szakaszban láttuk, hogyan használtuk az úgynevezett "zero shot prompting"-ot, egyetlen kérés követi a választ.

Azonban gyakran olyan helyzetben találjuk magunkat, ahol több üzenetváltás történik köztünk és az AI asszisztens között.

### Python használata

A Langchain-ben a beszélgetést egy listában tárolhatjuk. A `HumanMessage` egy felhasználótól származó üzenetet képvisel, míg a `SystemMessage` az AI "személyiségét" beállító üzenet. Az alábbi példában láthatjuk, hogyan utasítjuk az AI-t, hogy vegye fel Captain Picard személyiségét, és a felhasználó kérdése legyen: "Mesélj magadról".

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

A teljes kód ehhez a példához így néz ki:

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

Az eredmény hasonló lesz ehhez:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

A beszélgetés állapotának megőrzéséhez hozzáadhatjuk a chat válaszát, így a beszélgetés emlékezhető marad. Így tehetjük meg:

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

A fenti beszélgetésből láthatjuk, hogyan hívtuk meg az LLM-et kétszer, először csak két üzenettel, majd másodszor több üzenettel a beszélgetésben.

Valójában, ha futtatjuk ezt, a második válasz valami ilyesmi lesz:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Ezt talán igennek veszem ;)

## Folyamatos válaszok

TODO

## Kérés sablonok

TODO

## Strukturált kimenet

TODO

## Eszközök meghívása

Az eszközök segítségével extra képességeket adhatunk az LLM-nek. Az ötlet az, hogy tájékoztatjuk az LLM-et az általa elérhető funkciókról, és ha egy kérés megfelel valamelyik eszköz leírásának, akkor azt meghívjuk.

### Python használata

Adjunk hozzá néhány eszközt, például így:

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

Itt egy `add` nevű eszköz leírását hozzuk létre. A `TypedDict` öröklésével és olyan tagok hozzáadásával, mint az `a` és `b` az `Annotated` típusból, ez átalakítható egy olyan sémává, amelyet az LLM megérthet. A funkciók létrehozása egy szótár, amely biztosítja, hogy tudjuk, mit kell tenni, ha egy adott eszközt azonosítanak.

Nézzük meg, hogyan hívjuk meg az LLM-et ezzel az eszközzel:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Itt az `bind_tools`-t hívjuk meg a `tools` tömbünkkel, így az LLM `llm_with_tools` most már ismeri ezt az eszközt.

Az új LLM használatához az alábbi kódot írhatjuk:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Most, hogy az új LLM-en meghívjuk az `invoke`-t, amely eszközökkel rendelkezik, előfordulhat, hogy a `tool_calls` tulajdonság kitöltődik. Ha igen, bármely azonosított eszköznek van egy `name` és `args` tulajdonsága, amely azonosítja, hogy melyik eszközt kell meghívni és milyen argumentumokkal. A teljes kód így néz ki:

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

Ha futtatjuk ezt a kódot, az eredmény hasonló lesz ehhez:

```text
TOOL CALL:  15
CONTENT: 
```

Ez az eredmény azt jelenti, hogy az LLM elemezte a "Mi az 3 + 12" kérdést, és úgy értelmezte, hogy az `add` eszközt kell meghívni. Ezt az eszköz nevén, leírásán és tagmező leírásainak köszönhetően tudta. Az, hogy a válasz 15, annak köszönhető, hogy a kódunk a `functions` szótárat használta a meghívásra:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Egy érdekesebb eszköz, amely webes API-t hív

Az eszközök, amelyek két számot összeadnak, érdekesek, mivel illusztrálják, hogyan működik az eszközök meghívása, de általában az eszközök valami érdekesebbet csinálnak, például egy webes API-t hívnak meg. Nézzük meg, hogyan tehetjük ezt meg ezzel a kóddal:

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

Ha most futtatjuk ezt a kódot, a válasz valami ilyesmi lesz:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Íme a teljes kód:

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

## Beágyazás

Tartalom vektorizálása, összehasonlítás koszinusz hasonlóság alapján

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentum betöltők

pdf és csv

## Alkalmazás építése

TODO

## Feladat

## Összefoglalás

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.