<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:32:39+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "sl"
}
-->
# AI Okvir

Obstaja veliko AI okvirov, ki lahko bistveno pospešijo čas, potreben za izdelavo projekta. V tem projektu se bomo osredotočili na razumevanje težav, ki jih ti okviri rešujejo, in sami zgradili tak projekt.

## Zakaj okvir

Pri uporabi AI obstajajo različni pristopi in razlogi za izbiro teh pristopov, tukaj je nekaj primerov:

- **Brez SDK-ja**, večina AI modelov omogoča neposredno interakcijo z modelom prek na primer HTTP zahtevkov. Ta pristop deluje in je včasih edina možnost, če SDK ni na voljo.
- **SDK**. Uporaba SDK-ja je običajno priporočena, saj omogoča manj pisanja kode za interakcijo z modelom. Običajno je omejen na določen model, in če uporabljate različne modele, boste morda morali napisati novo kodo za podporo dodatnim modelom.
- **Okvir**. Okvir običajno dvigne stvari na višjo raven, saj omogoča uporabo različnih modelov prek enega API-ja, pri čemer se razlikuje predvsem začetna nastavitev. Poleg tega okviri prinašajo uporabne abstrakcije, kot so orodja, pomnilnik, delovni tokovi, agenti in drugo, medtem ko pišete manj kode. Ker so okviri običajno mnenjski, so lahko zelo koristni, če sprejmete njihov način delovanja, vendar lahko razočarajo, če poskušate narediti nekaj po meri, česar okvir ni zasnovan za. Včasih lahko okvir tudi preveč poenostavi stvari, kar lahko vodi do neznanja pomembnih tem, ki kasneje lahko škodijo zmogljivosti, na primer.

Na splošno uporabite pravo orodje za nalogo.

## Uvod

V tej lekciji se bomo naučili:

- Uporabiti običajen AI okvir.
- Reševati pogoste težave, kot so pogovori, uporaba orodij, pomnilnik in kontekst.
- Izkoristiti to za gradnjo AI aplikacij.

## Prvi poziv

V našem prvem primeru aplikacije se bomo naučili, kako se povezati z AI modelom in ga poizvedovati z uporabo poziva.

### Uporaba Pythona

Za ta primer bomo uporabili Langchain za povezavo z GitHub modeli. Uporabimo lahko razred `ChatOpenAI` in mu podamo polja `api_key`, `base_url` in `model`. Žeton se samodejno nastavi znotraj GitHub Codespaces, če pa aplikacijo izvajate lokalno, morate nastaviti osebni dostopni žeton, da bo delovalo.

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

V tej kodi:

- Pokličemo `ChatOpenAI`, da ustvarimo odjemalca.
- Uporabimo `llm.invoke` s pozivom za ustvarjanje odgovora.
- Natisnemo odgovor z `print(response.content)`.

Videti bi morali odgovor, podoben:

```text
The capital of France is Paris.
```

## Pogovor

V prejšnjem razdelku ste videli, kako smo uporabili t.i. zero shot prompting, en sam poziv, ki mu sledi odgovor.

Vendar se pogosto znajdete v situaciji, ko morate vzdrževati pogovor z več izmenjanimi sporočili med vami in AI asistentom.

### Uporaba Pythona

V Langchainu lahko pogovor shranimo v seznam. `HumanMessage` predstavlja sporočilo uporabnika, `SystemMessage` pa sporočilo, namenjeno nastavitvi "osebnosti" AI-ja. V spodnjem primeru vidite, kako AI-ju naročimo, naj prevzame osebnost kapitana Picarda, medtem ko uporabnik vpraša "Povej mi kaj o sebi" kot poziv.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Celotna koda za ta primer izgleda takole:

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

Videti bi morali rezultat, podoben:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Da ohranite stanje pogovora, lahko dodate odgovor iz klepeta, tako da se pogovor zapomni, tukaj je, kako to storiti:

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

Iz zgornjega pogovora lahko vidimo, kako dvakrat pokličemo LLM, najprej s pogovorom, ki vsebuje le dve sporočili, nato pa drugič z več sporočili, dodanimi v pogovor.

Dejansko, če to zaženete, boste videli drugi odgovor, ki je nekaj takega:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

To bom vzel kot morda ;)

## Pretakanje odgovorov

TODO

## Predloge pozivov

TODO

## Strukturiran izhod

TODO

## Klicanje orodij

Orodja so način, kako LLM-ju dodamo dodatne sposobnosti. Ideja je, da LLM-ju povemo o funkcijah, ki jih ima, in če je podan poziv, ki ustreza opisu enega od teh orodij, ga pokličemo.

### Uporaba Pythona

Dodajmo nekaj orodij, kot je prikazano:

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

Tukaj ustvarjamo opis orodja, imenovanega `add`. Z dedovanjem iz `TypedDict` in dodajanjem članov, kot sta `a` in `b` tipa `Annotated`, se to lahko pretvori v shemo, ki jo LLM razume. Ustvarjanje funkcij je slovar, ki zagotavlja, da vemo, kaj storiti, če je določeno orodje identificirano.

Poglejmo, kako naslednjič pokličemo LLM s tem orodjem:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Tukaj pokličemo `bind_tools` z našim poljem `tools`, s čimer LLM `llm_with_tools` zdaj pozna to orodje.

Za uporabo tega novega LLM-ja lahko napišemo naslednjo kodo:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Ko zdaj pokličemo `invoke` na tem novem LLM-ju, ki ima orodja, se morda lastnost `tool_calls` napolni. Če je tako, ima vsako identificirano orodje lastnosti `name` in `args`, ki identificirajo, katero orodje naj bo poklicano in s katerimi argumenti. Celotna koda izgleda takole:

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

Če zaženete to kodo, bi morali videti izhod, podoben:

```text
TOOL CALL:  15
CONTENT: 
```

Ta izhod pomeni, da je LLM analiziral poziv "Kaj je 3 + 12" kot pomen, da je treba poklicati orodje `add`, in to je vedel zahvaljujoč njegovemu imenu, opisu in opisom polj članov. Da je odgovor 15, je posledica naše kode, ki uporablja slovar `functions` za njegovo izvedbo:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Bolj zanimivo orodje, ki kliče spletni API

Orodja, ki seštevajo dve številki, so zanimiva, saj ilustrirajo, kako deluje klicanje orodij, vendar običajno orodja počnejo nekaj bolj zanimivega, kot na primer klicanje spletnega API-ja. Naredimo to z naslednjo kodo:

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

Če zdaj zaženete to kodo, boste dobili odgovor, ki pravi nekaj takega:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Tukaj je celotna koda:

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

## Vdelava

Vektorizirajte vsebino, primerjajte prek kosinusne podobnosti

https://python.langchain.com/docs/how_to/embed_text/

### Nalagalniki dokumentov

pdf in csv

## Gradnja aplikacije

TODO

## Naloga

## Povzetek

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.