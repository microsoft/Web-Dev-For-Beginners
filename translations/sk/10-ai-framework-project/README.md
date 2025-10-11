<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:31:00+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "sk"
}
-->
# AI Framework

Existuje mnoho AI frameworkov, ktoré môžu výrazne urýchliť čas potrebný na vytvorenie projektu. V tomto projekte sa zameriame na pochopenie problémov, ktoré tieto frameworky riešia, a vytvoríme si takýto projekt sami.

## Prečo framework

Pri používaní AI existujú rôzne prístupy a dôvody na ich výber. Tu sú niektoré z nich:

- **Bez SDK**. Väčšina AI modelov umožňuje priamu interakciu s modelom, napríklad prostredníctvom HTTP požiadaviek. Tento prístup funguje a môže byť vašou jedinou možnosťou, ak SDK nie je k dispozícii.
- **SDK**. Používanie SDK je zvyčajne odporúčaný prístup, pretože umožňuje písať menej kódu na interakciu s modelom. SDK je však často obmedzené na konkrétny model, a ak používate rôzne modely, budete musieť napísať nový kód na podporu týchto ďalších modelov.
- **Framework**. Framework zvyčajne posúva veci na vyššiu úroveň v tom zmysle, že ak potrebujete používať rôzne modely, existuje jedno API pre všetky z nich, pričom rozdiely sú zvyčajne v počiatočnom nastavení. Okrem toho frameworky prinášajú užitočné abstrakcie, ako napríklad nástroje, pamäť, pracovné postupy, agentov a ďalšie, pričom vyžadujú menej kódu. Frameworky sú často názorové, čo znamená, že môžu byť veľmi užitočné, ak sa stotožníte s ich prístupom, ale môžu byť nedostatočné, ak sa pokúsite urobiť niečo na mieru, na čo nie sú určené. Niekedy môže framework veci až príliš zjednodušiť, čo môže viesť k tomu, že sa nenaučíte dôležitú tému, ktorá môže neskôr negatívne ovplyvniť výkon.

Vo všeobecnosti platí: použite správny nástroj na danú úlohu.

## Úvod

V tejto lekcii sa naučíme:

- Používať bežný AI framework.
- Riešiť bežné problémy, ako sú konverzácie, používanie nástrojov, pamäť a kontext.
- Využiť tieto znalosti na vytváranie AI aplikácií.

## Prvý prompt

V našom prvom príklade aplikácie sa naučíme, ako sa pripojiť k AI modelu a dotazovať ho pomocou promptu.

### Použitie Pythonu

V tomto príklade použijeme Langchain na pripojenie k GitHub modelom. Môžeme použiť triedu `ChatOpenAI` a zadať jej polia `api_key`, `base_url` a `model`. Token sa automaticky nastaví v GitHub Codespaces, a ak aplikáciu spúšťate lokálne, musíte si nastaviť osobný prístupový token, aby to fungovalo.

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

V tomto kóde:

- Voláme `ChatOpenAI` na vytvorenie klienta.
- Používame `llm.invoke` s promptom na vytvorenie odpovede.
- Tlačíme odpoveď pomocou `print(response.content)`.

Mali by ste vidieť odpoveď podobnú:

```text
The capital of France is Paris.
```

## Konverzácia

V predchádzajúcej časti ste videli, ako sme použili to, čo sa bežne nazýva zero shot prompting, teda jeden prompt nasledovaný odpoveďou.

Často sa však ocitnete v situácii, kde potrebujete udržiavať konverzáciu pozostávajúcu z viacerých správ medzi vami a AI asistentom.

### Použitie Pythonu

V Langchain môžeme konverzáciu ukladať do zoznamu. `HumanMessage` predstavuje správu od používateľa a `SystemMessage` je správa určená na nastavenie "osobnosti" AI. V nasledujúcom príklade vidíte, ako inštruujeme AI, aby si osvojilo osobnosť kapitána Picarda, a používateľ sa pýta "Povedz mi o sebe" ako prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Celý kód pre tento príklad vyzerá takto:

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

Mali by ste vidieť výsledok podobný:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Na udržanie stavu konverzácie môžete pridať odpoveď z chatu, aby si konverzácia pamätala, tu je postup:

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

Z vyššie uvedenej konverzácie vidíme, ako sme dvakrát zavolali LLM, najprv s konverzáciou pozostávajúcou len z dvoch správ, ale potom druhýkrát s viacerými správami pridanými do konverzácie.

Ak tento kód spustíte, druhá odpoveď bude pravdepodobne niečo ako:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Beriem to ako možno ;)

## Streamovanie odpovedí

TODO

## Šablóny promptov

TODO

## Štruktúrovaný výstup

TODO

## Volanie nástrojov

Nástroje sú spôsob, ako dať LLM ďalšie schopnosti. Myšlienka je povedať LLM o funkciách, ktoré má, a ak je prompt vytvorený tak, že zodpovedá popisu jedného z týchto nástrojov, potom ho zavoláme.

### Použitie Pythonu

Pridajme niektoré nástroje takto:

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

Tu vytvárame popis nástroja nazvaného `add`. Dedením z `TypedDict` a pridaním členov ako `a` a `b` typu `Annotated` to môže byť konvertované na schému, ktorú LLM rozumie. Vytvorenie funkcií je slovník, ktorý zabezpečuje, že vieme, čo robiť, ak je identifikovaný konkrétny nástroj.

Pozrime sa, ako zavoláme LLM s týmto nástrojom:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Tu voláme `bind_tools` s naším poľom `tools`, čím LLM `llm_with_tools` teraz pozná tento nástroj.

Na použitie tohto nového LLM môžeme napísať nasledujúci kód:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Keď teraz zavoláme `invoke` na tomto novom LLM, ktorý má nástroje, môže byť vlastnosť `tool_calls` naplnená. Ak áno, akékoľvek identifikované nástroje majú vlastnosti `name` a `args`, ktoré identifikujú, aký nástroj by mal byť zavolaný a s akými argumentmi. Celý kód vyzerá takto:

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

Spustením tohto kódu by ste mali vidieť výstup podobný:

```text
TOOL CALL:  15
CONTENT: 
```

Tento výstup znamená, že LLM analyzoval prompt "Čo je 3 + 12" ako požiadavku na zavolanie nástroja `add` a vedel to vďaka jeho názvu, popisu a popisom členov. To, že odpoveď je 15, je výsledkom nášho kódu, ktorý používa slovník `functions` na jeho vykonanie:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Zaujímavejší nástroj, ktorý volá webové API

Nástroje, ktoré sčítavajú dve čísla, sú zaujímavé, pretože ilustrujú, ako funguje volanie nástrojov, ale zvyčajne nástroje robia niečo zaujímavejšie, napríklad volanie webového API. Urobme to s týmto kódom:

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

Ak teraz spustíte tento kód, dostanete odpoveď podobnú:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Tu je celý kód:

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

Vektorizácia obsahu, porovnanie pomocou kosínovej podobnosti

https://python.langchain.com/docs/how_to/embed_text/

### Načítavače dokumentov

PDF a CSV

## Vytvorenie aplikácie

TODO

## Zadanie

## Zhrnutie

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.