<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:27:18+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "da"
}
-->
# AI Framework

Der findes mange AI-frameworks, som kan markant reducere den tid, det tager at bygge et projekt. I dette projekt vil vi fokusere på at forstå, hvilke problemer disse frameworks løser, og bygge et sådant projekt selv.

## Hvorfor et framework

Når det kommer til at bruge AI, er der forskellige tilgange og grunde til at vælge disse tilgange. Her er nogle eksempler:

- **Ingen SDK**. De fleste AI-modeller giver dig mulighed for at interagere direkte med modellen via f.eks. HTTP-forespørgsler. Denne tilgang fungerer og kan nogle gange være din eneste mulighed, hvis der ikke findes en SDK-løsning.
- **SDK**. Brug af en SDK er normalt den anbefalede tilgang, da det kræver mindre kode for at interagere med din model. Det er typisk begrænset til en specifik model, og hvis du bruger forskellige modeller, kan du være nødt til at skrive ny kode for at understøtte disse.
- **Et framework**. Et framework tager tingene til et nyt niveau, da det ofte tilbyder én API til flere modeller, hvor forskellen typisk ligger i den indledende opsætning. Derudover tilbyder frameworks nyttige abstraktioner, som i AI-verdenen kan håndtere værktøjer, hukommelse, workflows, agenter og mere, mens du skriver mindre kode. Fordi frameworks ofte er meningsdannende, kan de være meget nyttige, hvis du accepterer deres tilgang, men de kan være begrænsende, hvis du forsøger at gøre noget skræddersyet, som frameworket ikke er designet til. Nogle gange kan et framework også forenkle for meget, hvilket kan føre til, at du ikke lærer et vigtigt emne, der senere kan påvirke ydeevnen negativt.

Generelt gælder det om at bruge det rigtige værktøj til opgaven.

## Introduktion

I denne lektion vil vi lære at:

- Bruge et almindeligt AI-framework.
- Løse almindelige problemer som chat-samtaler, værktøjsbrug, hukommelse og kontekst.
- Udnytte dette til at bygge AI-applikationer.

## Første prompt

I vores første app-eksempel vil vi lære, hvordan man forbinder til en AI-model og forespørger den ved hjælp af et prompt.

### Brug af Python

I dette eksempel vil vi bruge Langchain til at forbinde til GitHub-modeller. Vi kan bruge en klasse kaldet `ChatOpenAI` og give den felterne `api_key`, `base_url` og `model`. Tokenet bliver automatisk genereret i GitHub Codespaces, og hvis du kører appen lokalt, skal du oprette en personlig adgangstoken for at få det til at fungere.

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

I denne kode:

- Kalder vi `ChatOpenAI` for at oprette en klient.
- Bruger vi `llm.invoke` med et prompt for at generere et svar.
- Udskriver vi svaret med `print(response.content)`.

Du bør se et svar, der ligner:

```text
The capital of France is Paris.
```

## Chat-samtale

I det foregående afsnit så du, hvordan vi brugte det, der normalt kaldes zero-shot prompting, et enkelt prompt efterfulgt af et svar.

Men ofte befinder du dig i en situation, hvor du skal opretholde en samtale med flere beskeder, der udveksles mellem dig og AI-assistenten.

### Brug af Python

I Langchain kan vi gemme samtalen i en liste. `HumanMessage` repræsenterer en besked fra en bruger, og `SystemMessage` er en besked, der skal sætte AI'ens "personlighed". I nedenstående eksempel ser du, hvordan vi instruerer AI'en til at antage personligheden af Captain Picard, og hvordan brugeren spørger "Fortæl mig om dig" som prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Den fulde kode for dette eksempel ser sådan ud:

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

Du bør se et resultat, der ligner:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

For at bevare samtalens tilstand kan du tilføje svaret fra en chat, så samtalen huskes. Her er, hvordan du gør det:

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

Det, vi kan se fra ovenstående samtale, er, hvordan vi kalder LLM to gange, først med samtalen bestående af kun to beskeder, men derefter en anden gang med flere beskeder tilføjet til samtalen.

Faktisk, hvis du kører dette, vil du se det andet svar være noget i stil med:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Jeg tager det som et måske ;)

## Streaming-svar

TODO

## Prompt-skabeloner

TODO

## Struktureret output

TODO

## Værktøjskald

Værktøjer er, hvordan vi giver LLM ekstra færdigheder. Ideen er at fortælle LLM om funktioner, den har, og hvis et prompt matcher beskrivelsen af et af disse værktøjer, så kalder vi dem.

### Brug af Python

Lad os tilføje nogle værktøjer som følger:

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

Det, vi gør her, er at oprette en beskrivelse af et værktøj kaldet `add`. Ved at arve fra `TypedDict` og tilføje medlemmer som `a` og `b` af typen `Annotated` kan dette konverteres til et skema, som LLM kan forstå. Oprettelsen af funktioner er en ordbog, der sikrer, at vi ved, hvad vi skal gøre, hvis et specifikt værktøj identificeres.

Lad os se, hvordan vi kalder LLM med dette værktøj næste gang:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Her kalder vi `bind_tools` med vores `tools` array, og dermed har LLM `llm_with_tools` nu kendskab til dette værktøj.

For at bruge denne nye LLM kan vi skrive følgende kode:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nu, når vi kalder `invoke` på denne nye LLM, der har værktøjer, kan egenskaben `tool_calls` blive udfyldt. Hvis det er tilfældet, har identificerede værktøjer en `name` og `args` egenskab, der identificerer, hvilket værktøj der skal kaldes og med hvilke argumenter. Den fulde kode ser sådan ud:

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

Når du kører denne kode, bør du se output, der ligner:

```text
TOOL CALL:  15
CONTENT: 
```

Hvad dette output betyder, er, at LLM analyserede prompten "Hvad er 3 + 12" som værende, at værktøjet `add` skulle kaldes, og det vidste det takket være dets navn, beskrivelse og medlemfeltbeskrivelser. At svaret er 15 skyldes vores kode, der bruger ordbogen `functions` til at udføre det:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Et mere interessant værktøj, der kalder en web-API

Værktøjer, der lægger to tal sammen, er interessante, da de illustrerer, hvordan værktøjskald fungerer, men normalt gør værktøjer noget mere interessant, som for eksempel at kalde en web-API. Lad os gøre netop det med denne kode:

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

Nu, hvis du kører denne kode, vil du få et svar, der siger noget i stil med:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Her er koden i sin helhed:

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

Vectoriser indhold, sammenlign via cosinus-similaritet

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentindlæsere

PDF og CSV

## Bygge en app

TODO

## Opgave

## Opsummering

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.