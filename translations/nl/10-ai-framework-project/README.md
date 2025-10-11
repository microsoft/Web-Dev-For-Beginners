<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:28:11+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "nl"
}
-->
# AI Framework

Er zijn veel AI-frameworks beschikbaar die, wanneer gebruikt, de tijd die nodig is om een project te bouwen aanzienlijk kunnen verkorten. In dit project richten we ons op het begrijpen van de problemen die deze frameworks aanpakken en bouwen we zelf zo'n project.

## Waarom een framework

Bij het gebruik van AI zijn er verschillende benaderingen en redenen om voor een bepaalde aanpak te kiezen. Hier zijn enkele voorbeelden:

- **Geen SDK**. De meeste AI-modellen stellen je in staat om rechtstreeks met het model te communiceren, bijvoorbeeld via HTTP-verzoeken. Deze aanpak werkt en kan soms je enige optie zijn als er geen SDK beschikbaar is.
- **SDK**. Het gebruik van een SDK wordt meestal aanbevolen, omdat je minder code hoeft te schrijven om met je model te communiceren. Het is vaak beperkt tot een specifiek model, en als je verschillende modellen gebruikt, moet je mogelijk nieuwe code schrijven om die extra modellen te ondersteunen.
- **Een framework**. Een framework tilt dingen meestal naar een hoger niveau. Als je verschillende modellen moet gebruiken, is er één API voor allemaal; wat verschilt, is meestal de initiële configuratie. Bovendien bieden frameworks handige abstracties, zoals tools, geheugen, workflows, agents en meer, terwijl je minder code hoeft te schrijven. Omdat frameworks vaak een bepaalde aanpak volgen, kunnen ze erg nuttig zijn als je hun werkwijze accepteert, maar ze kunnen tekortschieten als je iets op maat wilt doen dat niet binnen het framework past. Soms kan een framework ook te veel vereenvoudigen, waardoor je een belangrijk onderwerp niet leert dat later bijvoorbeeld de prestaties kan schaden.

Over het algemeen geldt: gebruik het juiste gereedschap voor de klus.

## Introductie

In deze les leren we:

- Een veelgebruikt AI-framework te gebruiken.
- Veelvoorkomende problemen aan te pakken, zoals chatgesprekken, het gebruik van tools, geheugen en context.
- Dit te benutten om AI-apps te bouwen.

## Eerste prompt

In ons eerste appvoorbeeld leren we hoe we verbinding kunnen maken met een AI-model en het kunnen bevragen met een prompt.

### Met Python

Voor dit voorbeeld gebruiken we Langchain om verbinding te maken met GitHub Models. We kunnen een klasse genaamd `ChatOpenAI` gebruiken en deze de velden `api_key`, `base_url` en `model` geven. De token wordt automatisch ingevuld binnen GitHub Codespaces, en als je de app lokaal uitvoert, moet je een persoonlijke toegangstoken instellen om dit te laten werken.

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

In deze code:

- Roepen we `ChatOpenAI` aan om een client te maken.
- Gebruiken we `llm.invoke` met een prompt om een reactie te genereren.
- Printen we de reactie met `print(response.content)`.

Je zou een reactie moeten zien die lijkt op:

```text
The capital of France is Paris.
```

## Chatgesprek

In de vorige sectie zag je hoe we gebruik maakten van wat normaal bekend staat als zero shot prompting: een enkele prompt gevolgd door een reactie.

Vaak bevind je je echter in een situatie waarin je een gesprek moet onderhouden met meerdere berichten die worden uitgewisseld tussen jou en de AI-assistent.

### Met Python

In Langchain kunnen we het gesprek opslaan in een lijst. De `HumanMessage` vertegenwoordigt een bericht van een gebruiker, en `SystemMessage` is een bericht bedoeld om de "persoonlijkheid" van de AI in te stellen. In het onderstaande voorbeeld zie je hoe we de AI instrueren om de persoonlijkheid van Captain Picard aan te nemen en de mens/gebruiker te vragen "Vertel me over jezelf" als prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

De volledige code voor dit voorbeeld ziet er als volgt uit:

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

Je zou een resultaat moeten zien dat lijkt op:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Om de staat van het gesprek te behouden, kun je de reactie van een chat toevoegen, zodat het gesprek wordt onthouden. Hier is hoe je dat doet:

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

Wat we kunnen zien uit het bovenstaande gesprek is hoe we de LLM twee keer aanroepen: eerst met het gesprek dat slechts uit twee berichten bestaat, maar daarna een tweede keer met meer berichten toegevoegd aan het gesprek.

Als je dit uitvoert, zie je de tweede reactie die lijkt op:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Ik neem dat als een misschien ;)

## Streaming reacties

TODO

## Prompt templates

TODO

## Gestructureerde output

TODO

## Toolgebruik

Tools zijn hoe we de LLM extra vaardigheden geven. Het idee is om de LLM te vertellen over functies die het heeft, en als een prompt overeenkomt met de beschrijving van een van deze tools, dan roepen we ze aan.

### Met Python

Laten we enkele tools toevoegen zoals hieronder:

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

Wat we hier doen, is een beschrijving maken van een tool genaamd `add`. Door te erven van `TypedDict` en leden zoals `a` en `b` van het type `Annotated` toe te voegen, kan dit worden omgezet in een schema dat de LLM kan begrijpen. Het maken van functies is een woordenboek dat ervoor zorgt dat we weten wat te doen als een specifieke tool wordt geïdentificeerd.

Laten we zien hoe we de LLM met deze tool aanroepen:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Hier roepen we `bind_tools` aan met onze `tools` array, waardoor de LLM `llm_with_tools` nu kennis heeft van deze tool.

Om deze nieuwe LLM te gebruiken, kunnen we de volgende code typen:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nu we `invoke` aanroepen op deze nieuwe LLM, die tools heeft, wordt mogelijk de eigenschap `tool_calls` gevuld. Als dat zo is, heeft elke geïdentificeerde tool een `name` en `args` eigenschap die aangeeft welke tool moet worden aangeroepen en met welke argumenten. De volledige code ziet er als volgt uit:

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

Als je deze code uitvoert, zou je een output moeten zien die lijkt op:

```text
TOOL CALL:  15
CONTENT: 
```

Wat deze output betekent, is dat de LLM de prompt "Wat is 3 + 12" analyseerde als zijnde dat de `add` tool moest worden aangeroepen. Het wist dat dankzij de naam, beschrijving en beschrijvingen van de ledenvelden. Dat het antwoord 15 is, komt door onze code die het woordenboek `functions` gebruikt om het aan te roepen:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Een interessantere tool die een web-API aanroept

Tools die twee getallen optellen zijn interessant omdat ze illustreren hoe toolgebruik werkt, maar meestal doen tools iets interessanters, zoals bijvoorbeeld een web-API aanroepen. Laten we dat doen met deze code:

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

Als je deze code nu uitvoert, krijg je een reactie die lijkt op:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Hier is de volledige code:

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

Inhoud vectoriseren, vergelijken via cosinusgelijkenis

https://python.langchain.com/docs/how_to/embed_text/

### Document loaders

PDF en CSV

## Een app bouwen

TODO

## Opdracht

## Samenvatting

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.