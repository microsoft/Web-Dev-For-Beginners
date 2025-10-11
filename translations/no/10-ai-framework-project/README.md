<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:27:36+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "no"
}
-->
# AI-rammeverk

Det finnes mange AI-rammeverk som kan drastisk redusere tiden det tar å bygge et prosjekt. I dette prosjektet skal vi fokusere på å forstå hvilke problemer disse rammeverkene løser, og bygge et slikt prosjekt selv.

## Hvorfor et rammeverk

Når det gjelder bruk av AI, finnes det ulike tilnærminger og grunner til å velge disse tilnærmingene. Her er noen:

- **Ingen SDK**, de fleste AI-modeller lar deg samhandle direkte med modellen via for eksempel HTTP-forespørsler. Denne tilnærmingen fungerer og kan noen ganger være det eneste alternativet hvis en SDK-mulighet mangler.
- **SDK**. Å bruke en SDK er vanligvis den anbefalte tilnærmingen, da det lar deg skrive mindre kode for å samhandle med modellen din. Det er vanligvis begrenset til en spesifikk modell, og hvis du bruker forskjellige modeller, må du kanskje skrive ny kode for å støtte disse.
- **Et rammeverk**. Et rammeverk tar ting til et nytt nivå ved at hvis du trenger å bruke forskjellige modeller, finnes det én API for alle. Det som varierer, er vanligvis den innledende oppsettet. I tillegg gir rammeverk nyttige abstraksjoner, som i AI-verdenen kan håndtere verktøy, minne, arbeidsflyter, agenter og mer, samtidig som du skriver mindre kode. Fordi rammeverk ofte er meningsbærende, kan de være svært nyttige hvis du aksepterer måten de gjør ting på, men de kan være mindre nyttige hvis du prøver å gjøre noe skreddersydd som rammeverket ikke er laget for. Noen ganger kan et rammeverk også forenkle for mye, og du kan derfor gå glipp av et viktig tema som senere kan påvirke ytelsen negativt.

Generelt sett, bruk riktig verktøy for oppgaven.

## Introduksjon

I denne leksjonen skal vi lære å:

- Bruke et vanlig AI-rammeverk.
- Løse vanlige problemer som samtaler, verktøybruk, minne og kontekst.
- Utnytte dette til å bygge AI-apper.

## Første prompt

I vårt første app-eksempel skal vi lære hvordan vi kobler til en AI-modell og sender en forespørsel ved hjelp av et prompt.

### Bruke Python

For dette eksemplet skal vi bruke Langchain for å koble til GitHub-modeller. Vi kan bruke en klasse kalt `ChatOpenAI` og gi den feltene `api_key`, `base_url` og `model`. Tokenet blir automatisk fylt inn i GitHub Codespaces, og hvis du kjører appen lokalt, må du sette opp et personlig tilgangstoken for at dette skal fungere.

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

I denne koden:

- Kaller vi `ChatOpenAI` for å opprette en klient.
- Bruker vi `llm.invoke` med et prompt for å generere et svar.
- Skriver vi ut svaret med `print(response.content)`.

Du bør se et svar som ligner på:

```text
The capital of France is Paris.
```

## Samtale

I den forrige delen så du hvordan vi brukte det som vanligvis kalles zero shot prompting, et enkelt prompt etterfulgt av et svar.

Ofte befinner du deg imidlertid i en situasjon der du må opprettholde en samtale med flere meldinger som utveksles mellom deg og AI-assistenten.

### Bruke Python

I Langchain kan vi lagre samtalen i en liste. `HumanMessage` representerer en melding fra en bruker, og `SystemMessage` er en melding ment for å sette "personligheten" til AI-en. I eksempelet nedenfor ser du hvordan vi instruerer AI-en til å anta personligheten til Captain Picard, og for mennesket/brukeren å spørre "Fortell meg om deg" som prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Den fullstendige koden for dette eksempelet ser slik ut:

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

Du bør se et resultat som ligner på:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

For å holde samtalens tilstand kan du legge til svaret fra en chat, slik at samtalen huskes. Slik gjør du det:

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

Det vi ser fra samtalen ovenfor, er hvordan vi kaller LLM to ganger, først med samtalen som består av bare to meldinger, men deretter en andre gang med flere meldinger lagt til samtalen.

Faktisk, hvis du kjører dette, vil du se det andre svaret være noe som:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Jeg tar det som et kanskje ;)

## Strømming av svar

TODO

## Prompt-maler

TODO

## Strukturert output

TODO

## Verktøykall

Verktøy er hvordan vi gir LLM ekstra ferdigheter. Ideen er å fortelle LLM om funksjoner den har, og hvis et prompt samsvarer med beskrivelsen av et av disse verktøyene, kaller vi dem.

### Bruke Python

La oss legge til noen verktøy slik:

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

Det vi gjør her, er å lage en beskrivelse av et verktøy kalt `add`. Ved å arve fra `TypedDict` og legge til medlemmer som `a` og `b` av typen `Annotated`, kan dette konverteres til et skjema som LLM kan forstå. Opprettelsen av funksjoner er en ordbok som sikrer at vi vet hva vi skal gjøre hvis et spesifikt verktøy identifiseres.

La oss se hvordan vi kaller LLM med dette verktøyet neste:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Her kaller vi `bind_tools` med vår `tools`-array, og dermed har LLM `llm_with_tools` nå kunnskap om dette verktøyet.

For å bruke denne nye LLM-en kan vi skrive følgende kode:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nå som vi kaller `invoke` på denne nye LLM-en, som har verktøy, kan egenskapen `tool_calls` bli fylt ut. Hvis det skjer, har identifiserte verktøy en `name` og `args`-egenskap som identifiserer hvilket verktøy som skal kalles og med hvilke argumenter. Den fullstendige koden ser slik ut:

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

Når du kjører denne koden, bør du se en utdata som ligner på:

```text
TOOL CALL:  15
CONTENT: 
```

Det denne utdataen betyr, er at LLM analyserte promptet "Hva er 3 + 12" som at verktøyet `add` skulle kalles, og den visste det takket være navnet, beskrivelsen og medlemfeltbeskrivelsene. At svaret er 15, skyldes vår kode som bruker ordboken `functions` for å kalle det:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Et mer interessant verktøy som kaller en web-API

Verktøy som legger sammen to tall er interessant da det illustrerer hvordan verktøykall fungerer, men vanligvis gjør verktøy noe mer interessant, som for eksempel å kalle en web-API. La oss gjøre nettopp det med denne koden:

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

Nå, hvis du kjører denne koden, vil du få et svar som sier noe som:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Her er koden i sin helhet:

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

Vektorisere innhold, sammenligne via cosinuslikhet

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentlastere

PDF og CSV

## Bygge en app

TODO

## Oppgave

## Oppsummering

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vennligst vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør betraktes som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.