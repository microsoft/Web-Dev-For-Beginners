<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:30:41+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "cs"
}
-->
# AI Framework

Existuje mnoho AI frameworků, které mohou výrazně urychlit dobu potřebnou k vytvoření projektu. V tomto projektu se zaměříme na pochopení problémů, které tyto frameworky řeší, a vytvoříme si vlastní projekt.

## Proč framework

Pokud jde o využití AI, existují různé přístupy a důvody, proč si je vybrat. Zde jsou některé z nich:

- **Bez SDK**. Většina AI modelů umožňuje přímou interakci s modelem například prostřednictvím HTTP požadavků. Tento přístup funguje a někdy může být jedinou možností, pokud SDK chybí.
- **SDK**. Použití SDK je obvykle doporučený přístup, protože umožňuje psát méně kódu pro interakci s modelem. Obvykle je omezeno na konkrétní model, a pokud používáte různé modely, možná budete muset napsat nový kód pro podporu těchto dalších modelů.
- **Framework**. Framework obvykle posouvá věci na vyšší úroveň v tom smyslu, že pokud potřebujete používat různé modely, existuje jedno API pro všechny, rozdíl je obvykle v počátečním nastavení. Navíc frameworky přinášejí užitečné abstrakce, například v oblasti AI mohou pracovat s nástroji, pamětí, pracovními postupy, agenty a dalšími funkcemi, přičemž je potřeba psát méně kódu. Protože frameworky jsou obvykle názorové, mohou být velmi užitečné, pokud přijmete jejich způsob práce, ale mohou být nedostatečné, pokud se pokusíte udělat něco na míru, co framework nepodporuje. Někdy může framework také příliš zjednodušovat, což může vést k tomu, že se nenaučíte důležité téma, které později může ovlivnit výkon.

Obecně platí, že je třeba použít správný nástroj pro daný úkol.

## Úvod

V této lekci se naučíme:

- Používat běžný AI framework.
- Řešit běžné problémy, jako jsou konverzace, používání nástrojů, paměť a kontext.
- Využít tyto znalosti k vytváření AI aplikací.

## První prompt

V našem prvním příkladu aplikace se naučíme, jak se připojit k AI modelu a dotazovat ho pomocí promptu.

### Použití Pythonu

V tomto příkladu použijeme Langchain k připojení k GitHub modelům. Můžeme použít třídu `ChatOpenAI` a zadat jí pole `api_key`, `base_url` a `model`. Token se automaticky generuje v GitHub Codespaces, a pokud aplikaci spouštíte lokálně, musíte si nastavit osobní přístupový token, aby to fungovalo.

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

V tomto kódu:

- Voláme `ChatOpenAI` pro vytvoření klienta.
- Používáme `llm.invoke` s promptem pro vytvoření odpovědi.
- Tiskneme odpověď pomocí `print(response.content)`.

Měli byste vidět odpověď podobnou:

```text
The capital of France is Paris.
```

## Konverzace

V předchozí části jste viděli, jak jsme použili to, co je běžně známé jako zero shot prompting, tedy jeden prompt následovaný odpovědí.

Často se však ocitnete v situaci, kdy potřebujete udržovat konverzaci skládající se z několika zpráv, které si vyměňujete s AI asistentem.

### Použití Pythonu

V Langchainu můžeme konverzaci uložit do seznamu. `HumanMessage` představuje zprávu od uživatele a `SystemMessage` je zpráva určená k nastavení "osobnosti" AI. V níže uvedeném příkladu vidíte, jak instruujeme AI, aby přijala osobnost kapitána Picarda, a uživatel se ptá "Pověz mi o sobě" jako prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Celý kód pro tento příklad vypadá takto:

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

Měli byste vidět výsledek podobný:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Pro udržení stavu konverzace můžete přidat odpověď z chatu, aby si konverzace pamatovala, zde je postup, jak to udělat:

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

Z výše uvedené konverzace vidíme, jak jsme dvakrát vyvolali LLM, nejprve s konverzací sestávající pouze ze dvou zpráv, ale poté podruhé s více zprávami přidanými do konverzace.

Ve skutečnosti, pokud to spustíte, uvidíte druhou odpověď, která bude vypadat nějak takto:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

To beru jako možná ;)

## Streamování odpovědí

TODO

## Šablony promptů

TODO

## Strukturovaný výstup

TODO

## Volání nástrojů

Nástroje jsou způsob, jak dát LLM další schopnosti. Myšlenkou je informovat LLM o funkcích, které má, a pokud je vytvořen prompt, který odpovídá popisu jednoho z těchto nástrojů, pak je tento nástroj vyvolán.

### Použití Pythonu

Přidáme některé nástroje takto:

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

Co zde děláme, je vytvoření popisu nástroje nazvaného `add`. Děděním z `TypedDict` a přidáním členů jako `a` a `b` typu `Annotated` to může být převedeno na schéma, kterému LLM rozumí. Vytvoření funkcí je slovník, který zajišťuje, že víme, co dělat, pokud je identifikován konkrétní nástroj.

Podívejme se, jak zavolat LLM s tímto nástrojem:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Zde voláme `bind_tools` s naším polem `tools`, a tím pádem má LLM `llm_with_tools` nyní znalosti o tomto nástroji.

Pro použití tohoto nového LLM můžeme napsat následující kód:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nyní, když voláme `invoke` na tomto novém LLM, který má nástroje, může být vlastnost `tool_calls` naplněna. Pokud ano, jakýkoli identifikovaný nástroj má vlastnosti `name` a `args`, které identifikují, jaký nástroj by měl být vyvolán a s jakými argumenty. Celý kód vypadá takto:

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

Při spuštění tohoto kódu byste měli vidět výstup podobný:

```text
TOOL CALL:  15
CONTENT: 
```

Co tento výstup znamená, je, že LLM analyzoval prompt "Co je 3 + 12" jako znamenající, že by měl být vyvolán nástroj `add`, a věděl to díky jeho názvu, popisu a popisům členů. To, že odpověď je 15, je díky našemu kódu, který používá slovník `functions` k jeho vyvolání:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Zajímavější nástroj, který volá webové API

Nástroje, které sčítají dvě čísla, jsou zajímavé, protože ilustrují, jak funguje volání nástrojů, ale obvykle nástroje dělají něco zajímavějšího, například volání webového API. Udělejme to s tímto kódem:

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

Nyní, pokud tento kód spustíte, dostanete odpověď, která bude vypadat nějak takto:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Zde je celý kód:

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

## Vkládání

Vektorizace obsahu, porovnání pomocí kosinové podobnosti

https://python.langchain.com/docs/how_to/embed_text/

### Načítání dokumentů

pdf a csv

## Vytvoření aplikace

TODO

## Úkol

## Shrnutí

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nejsme zodpovědní za jakékoli nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.