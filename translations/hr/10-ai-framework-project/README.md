<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:32:21+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "hr"
}
-->
# AI Framework

Postoji mnogo AI okvira koji, kada se koriste, mogu značajno ubrzati vrijeme potrebno za izradu projekta. U ovom projektu fokusirat ćemo se na razumijevanje problema koje ti okviri rješavaju i izraditi takav projekt sami.

## Zašto okvir

Kada je riječ o korištenju AI-a, postoje različiti pristupi i razlozi za odabir tih pristupa. Evo nekoliko primjera:

- **Bez SDK-a**. Većina AI modela omogućuje izravnu interakciju s modelom putem, primjerice, HTTP zahtjeva. Taj pristup funkcionira i ponekad može biti jedina opcija ako SDK nije dostupan.
- **SDK**. Korištenje SDK-a obično je preporučeni pristup jer omogućuje pisanje manje koda za interakciju s modelom. Obično je ograničen na određeni model, a ako koristite različite modele, možda ćete morati napisati novi kod za podršku tim dodatnim modelima.
- **Okvir**. Okvir obično podiže stvari na višu razinu u smislu da, ako trebate koristiti različite modele, postoji jedan API za sve njih, a razlika je obično u početnom postavljanju. Osim toga, okviri donose korisne apstrakcije, poput alata, memorije, tijeka rada, agenata i drugih funkcionalnosti u AI prostoru, uz pisanje manje koda. Budući da su okviri obično "opinionated", mogu biti vrlo korisni ako prihvatite njihov način rada, ali mogu biti nedostatni ako pokušate napraviti nešto prilagođeno što okvir nije predviđen za. Ponekad okvir može pojednostaviti stvari previše, pa možda nećete naučiti važnu temu koja kasnije može negativno utjecati na performanse, na primjer.

Općenito, koristite pravi alat za posao.

## Uvod

U ovoj lekciji naučit ćemo:

- Koristiti uobičajeni AI okvir.
- Rješavati uobičajene probleme poput razgovora, korištenja alata, memorije i konteksta.
- Iskoristiti ovo za izradu AI aplikacija.

## Prvi upit

U našem prvom primjeru aplikacije naučit ćemo kako se povezati s AI modelom i postaviti mu upit koristeći prompt.

### Korištenje Pythona

Za ovaj primjer koristit ćemo Langchain za povezivanje s GitHub modelima. Možemo koristiti klasu `ChatOpenAI` i dodijeliti joj polja `api_key`, `base_url` i `model`. Token se automatski generira unutar GitHub Codespacesa, a ako aplikaciju pokrećete lokalno, trebate postaviti osobni pristupni token da bi ovo funkcioniralo.

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

U ovom kodu:

- Pozivamo `ChatOpenAI` za stvaranje klijenta.
- Koristimo `llm.invoke` s promptom za stvaranje odgovora.
- Ispisujemo odgovor pomoću `print(response.content)`.

Trebali biste vidjeti odgovor sličan:

```text
The capital of France is Paris.
```

## Razgovor

U prethodnom odjeljku vidjeli ste kako smo koristili ono što se obično naziva zero-shot prompting, jedan prompt praćen odgovorom.

Međutim, često se nađete u situaciji gdje trebate održavati razgovor s više poruka koje se izmjenjuju između vas i AI asistenta.

### Korištenje Pythona

U Langchainu možemo pohraniti razgovor u listu. `HumanMessage` predstavlja poruku od korisnika, a `SystemMessage` je poruka namijenjena postavljanju "osobnosti" AI-a. U primjeru ispod vidjet ćete kako AI-u dajemo uputu da preuzme osobnost kapetana Picarda, dok korisnik postavlja pitanje "Reci mi nešto o sebi" kao prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Cijeli kod za ovaj primjer izgleda ovako:

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

Trebali biste vidjeti rezultat sličan:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Kako biste zadržali stanje razgovora, možete dodati odgovor iz chata, tako da se razgovor pamti. Evo kako to učiniti:

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

Iz gornjeg razgovora možemo vidjeti kako dva puta pozivamo LLM, prvo s razgovorom koji se sastoji od samo dvije poruke, a zatim drugi put s više poruka dodanih u razgovor.

Zapravo, ako pokrenete ovo, vidjet ćete drugi odgovor koji izgleda otprilike ovako:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Uzeti ću to kao možda ;)

## Streaming odgovori

TODO

## Predlošci za promptove

TODO

## Strukturirani izlaz

TODO

## Pozivanje alata

Alati su način na koji LLM-u dajemo dodatne vještine. Ideja je da LLM-u kažemo za funkcije koje ima, a ako se postavi prompt koji odgovara opisu jednog od tih alata, tada ga pozivamo.

### Korištenje Pythona

Dodajmo neke alate ovako:

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

Ono što ovdje radimo je stvaranje opisa alata nazvanog `add`. Nasljeđivanjem iz `TypedDict` i dodavanjem članova poput `a` i `b` tipa `Annotated`, ovo se može pretvoriti u shemu koju LLM može razumjeti. Stvaranje funkcija je rječnik koji osigurava da znamo što učiniti ako se identificira određeni alat.

Pogledajmo kako pozivamo LLM s ovim alatom:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Ovdje pozivamo `bind_tools` s našim nizom `tools`, čime LLM `llm_with_tools` sada ima znanje o ovom alatu.

Kako bismo koristili ovaj novi LLM, možemo napisati sljedeći kod:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Sada kada pozivamo `invoke` na ovom novom LLM-u, koji ima alate, možda će svojstvo `tool_calls` biti popunjeno. Ako je tako, bilo koji identificirani alat ima svojstva `name` i `args` koja identificiraju koji alat treba pozvati i s kojim argumentima. Cijeli kod izgleda ovako:

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

Pokretanjem ovog koda trebali biste vidjeti izlaz sličan:

```text
TOOL CALL:  15
CONTENT: 
```

Ono što ovaj izlaz znači je da je LLM analizirao prompt "Koliko je 3 + 12" kao zahtjev za pozivanjem alata `add` i to je znao zahvaljujući njegovom nazivu, opisu i opisima polja članova. Da je odgovor 15, zaslužno je naše korištenje rječnika `functions` za njegovo pozivanje:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Zanimljiviji alat koji poziva web API

Alati koji zbrajaju dva broja su zanimljivi jer ilustriraju kako pozivanje alata funkcionira, ali obično alati rade nešto zanimljivije, poput pozivanja web API-ja. Napravimo upravo to s ovim kodom:

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

Sada, ako pokrenete ovaj kod, dobit ćete odgovor koji izgleda otprilike ovako:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Evo cijelog koda:

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

## Ugrađivanje

Vektorizirajte sadržaj, usporedite pomoću kosinusne sličnosti.

https://python.langchain.com/docs/how_to/embed_text/

### Učitavanje dokumenata

PDF i CSV

## Izrada aplikacije

TODO

## Zadatak

## Sažetak

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.