<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:34:23+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "et"
}
-->
# AI Raamistik

On palju AI raamistikke, mis võivad oluliselt kiirendada projekti loomise aega. Selles projektis keskendume nende raamistikuga lahendatavate probleemide mõistmisele ja loome ise sellise projekti.

## Miks kasutada raamistikku

AI kasutamisel on erinevaid lähenemisviise ja põhjuseid nende valimiseks. Siin on mõned:

- **Ilma SDK-ta**. Enamik AI mudeleid võimaldab suhelda otse mudeliga näiteks HTTP-päringute kaudu. See lähenemine toimib ja võib olla ainus võimalus, kui SDK valik puudub.
- **SDK**. SDK kasutamine on tavaliselt soovitatav, kuna see võimaldab vähem koodi kirjutada mudeliga suhtlemiseks. Tavaliselt on see piiratud konkreetse mudeliga ja kui kasutada erinevaid mudeleid, võib olla vaja kirjutada uus kood nende täiendavate mudelite toetamiseks.
- **Raamistik**. Raamistik viib asjad tavaliselt järgmisele tasemele, pakkudes ühtset API-d erinevate mudelite jaoks, kusjuures erinevused seisnevad tavaliselt algseadistuses. Lisaks toovad raamistikud sisse kasulikke abstraktsioone, nagu tööriistad, mälu, töövood, agendid ja palju muud, võimaldades kirjutada vähem koodi. Kuna raamistikud on tavaliselt arvamuslikud, võivad need olla väga kasulikud, kui aktsepteerida nende lähenemist, kuid võivad jääda hätta, kui proovida teha midagi kohandatud, mida raamistik ei toeta. Mõnikord võib raamistik asju liiga lihtsustada, mistõttu ei pruugi õppida olulist teemat, mis hiljem võib mõjutada näiteks jõudlust.

Üldiselt tuleks kasutada õiget tööriista vastavalt ülesandele.

## Sissejuhatus

Selles õppetükis õpime:

- Kasutama levinud AI raamistikku.
- Lahendama levinud probleeme, nagu vestlused, tööriistade kasutamine, mälu ja kontekst.
- Kasutama seda AI rakenduste loomiseks.

## Esimene päring

Meie esimeses rakenduse näites õpime, kuidas ühendada AI mudeliga ja pärida seda kasutades päringut.

### Pythoniga

Selles näites kasutame Langchaini, et ühendada GitHubi mudelitega. Kasutame klassi `ChatOpenAI` ja anname sellele väljad `api_key`, `base_url` ja `model`. Token täidetakse automaatselt GitHub Codespaces'is ja kui rakendust käitatakse lokaalselt, tuleb seadistada isiklik juurdepääsutoken, et see töötaks.

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

Selles koodis:

- Kutsume `ChatOpenAI`, et luua klient.
- Kasutame `llm.invoke` päringuga, et luua vastus.
- Trükime vastuse `print(response.content)` abil.

Näete vastust, mis on sarnane:

```text
The capital of France is Paris.
```

## Vestlus

Eelmises osas nägite, kuidas kasutasime nn nullvõtte päringut, kus on üks päring ja sellele järgnev vastus.

Sageli on aga olukordi, kus tuleb säilitada vestlus mitme sõnumi vahetamisega kasutaja ja AI assistendi vahel.

### Pythoniga

Langchainis saame vestlust salvestada loendisse. `HumanMessage` esindab kasutaja sõnumit ja `SystemMessage` on sõnum, mis määrab AI "isiksuse". Allolevas näites näete, kuidas juhendame AI-d võtma kapten Picardi isiksuse ja kasutaja/kasutaja küsib "Räägi mulle endast" päringuna.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Selle näite täielik kood näeb välja selline:

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

Näete tulemust, mis on sarnane:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Vestluse oleku säilitamiseks saate lisada vestlusele vastuse, et vestlus jääks meelde. Siin on, kuidas seda teha:

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

Ülaltoodud vestlusest näeme, kuidas kutsume LLM-i kaks korda: esmalt vestlusega, mis koosneb kahest sõnumist, ja teist korda, kui vestlusele on lisatud rohkem sõnumeid.

Tegelikult, kui seda käitate, näete teist vastust, mis on midagi sellist:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Võtan seda kui "võib-olla" ;)

## Voogesituse vastused

TODO

## Päringumallid

TODO

## Struktureeritud väljund

TODO

## Tööriistade kasutamine

Tööriistad on viis, kuidas anda LLM-ile lisavõimeid. Idee on teavitada LLM-i funktsioonidest, mis tal on, ja kui päring vastab ühe tööriista kirjeldusele, siis kutsutakse see tööriist.

### Pythoniga

Lisame mõned tööriistad järgmiselt:

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

Siin loome tööriista nimega `add` kirjelduse. Pärides `TypedDict`-i ja lisades liikmeid nagu `a` ja `b` tüübiga `Annotated`, saab selle teisendada skeemiks, mida LLM mõistab. Funktsioonide loomine on sõnastik, mis tagab, et teame, mida teha, kui konkreetne tööriist tuvastatakse.

Vaatame, kuidas kutsume LLM-i selle tööriistaga:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Siin kutsume `bind_tools` meie `tools` massiiviga, mistõttu LLM `llm_with_tools` teab nüüd sellest tööriistast.

Selle uue LLM-i kasutamiseks saame kirjutada järgmise koodi:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nüüd, kui kutsume `invoke` sellel uuel LLM-il, millel on tööriistad, võib omadus `tool_calls` olla täidetud. Kui see on nii, siis tuvastatud tööriistadel on omadused `name` ja `args`, mis määravad, millist tööriista tuleks kutsuda ja milliste argumentidega. Täielik kood näeb välja selline:

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

Selle koodi käivitamisel näete väljundit, mis on sarnane:

```text
TOOL CALL:  15
CONTENT: 
```

See väljund tähendab, et LLM analüüsis päringut "Mis on 3 + 12" kui tähendust, et tuleks kutsuda tööriist `add`, ja ta teadis seda tänu selle nimele, kirjeldusele ja liikmeväljade kirjeldustele. Et vastus on 15, tuleneb meie koodist, mis kasutab sõnastikku `functions`, et seda kutsuda:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Huvitavam tööriist, mis kutsub veebirakenduse API-d

Tööriist, mis liidab kaks arvu, on huvitav, kuna see illustreerib, kuidas tööriistade kutsumine toimib, kuid tavaliselt teevad tööriistad midagi huvitavamat, näiteks kutsuvad veebirakenduse API-d. Teeme seda järgmise koodiga:

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

Nüüd, kui käivitate selle koodi, saate vastuse, mis ütleb midagi sellist:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Siin on kogu kood:

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

Sisu vektoriseerimine, võrdlemine kosinuse sarnasuse kaudu

https://python.langchain.com/docs/how_to/embed_text/

### dokumendi laadijad

pdf ja csv

## Rakenduse loomine

TODO

## Ülesanne

## Kokkuvõte

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.