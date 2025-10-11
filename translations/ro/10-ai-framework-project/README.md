<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:31:20+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ro"
}
-->
# Cadru AI

Există multe cadre AI disponibile care, atunci când sunt utilizate, pot accelera considerabil timpul necesar pentru a construi un proiect. În acest proiect, ne vom concentra pe înțelegerea problemelor pe care aceste cadre le abordează și vom construi un astfel de proiect noi înșine.

## De ce un cadru

Când vine vorba de utilizarea AI, există diferite abordări și motive pentru alegerea acestor abordări, iată câteva:

- **Fără SDK**, majoritatea modelelor AI permit interacțiunea directă cu modelul AI, de exemplu, prin cereri HTTP. Această abordare funcționează și poate fi uneori singura opțiune dacă lipsește o opțiune SDK.
- **SDK**. Utilizarea unui SDK este de obicei abordarea recomandată, deoarece permite scrierea unui cod mai redus pentru a interacționa cu modelul. De obicei, este limitat la un model specific, iar dacă utilizați modele diferite, s-ar putea să fie nevoie să scrieți cod nou pentru a sprijini acele modele suplimentare.
- **Un cadru**. Un cadru duce lucrurile la un alt nivel, în sensul că, dacă aveți nevoie să utilizați modele diferite, există un singur API pentru toate, diferența constând de obicei în configurarea inițială. În plus, cadrele aduc abstracții utile, cum ar fi în spațiul AI, ele pot gestiona instrumente, memorie, fluxuri de lucru, agenți și altele, scriind mai puțin cod. Deoarece cadrele sunt de obicei opiniate, ele pot fi cu adevărat utile dacă acceptați modul în care fac lucrurile, dar pot fi insuficiente dacă încercați să faceți ceva personalizat pentru care cadrul nu este conceput. Uneori, un cadru poate simplifica prea mult și, prin urmare, s-ar putea să nu învățați un subiect important care ulterior poate afecta performanța, de exemplu.

În general, utilizați instrumentul potrivit pentru sarcina respectivă.

## Introducere

În această lecție, vom învăța să:

- Utilizăm un cadru AI comun.
- Abordăm probleme comune, cum ar fi conversațiile de chat, utilizarea instrumentelor, memoria și contextul.
- Valorificăm acest lucru pentru a construi aplicații AI.

## Primul prompt

În primul nostru exemplu de aplicație, vom învăța cum să ne conectăm la un model AI și să-l interogăm folosind un prompt.

### Utilizând Python

Pentru acest exemplu, vom folosi Langchain pentru a ne conecta la modelele GitHub. Putem utiliza o clasă numită `ChatOpenAI` și să-i oferim câmpurile `api_key`, `base_url` și `model`. Tokenul este ceva ce se populează automat în GitHub Codespaces, iar dacă rulați aplicația local, trebuie să configurați un token de acces personal pentru ca acest lucru să funcționeze.

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

În acest cod, noi:

- Apelăm `ChatOpenAI` pentru a crea un client.
- Utilizăm `llm.invoke` cu un prompt pentru a crea un răspuns.
- Afișăm răspunsul cu `print(response.content)`.

Ar trebui să vedeți un răspuns similar cu:

```text
The capital of France is Paris.
```

## Conversație de chat

În secțiunea precedentă, ați văzut cum am utilizat ceea ce este cunoscut în mod normal ca zero shot prompting, un singur prompt urmat de un răspuns.

Cu toate acestea, deseori vă aflați într-o situație în care trebuie să mențineți o conversație cu mai multe mesaje schimbate între dumneavoastră și asistentul AI.

### Utilizând Python

În Langchain, putem stoca conversația într-o listă. `HumanMessage` reprezintă un mesaj de la utilizator, iar `SystemMessage` este un mesaj destinat să seteze "personalitatea" AI-ului. În exemplul de mai jos, vedeți cum instruim AI-ul să adopte personalitatea lui Captain Picard, iar utilizatorul să întrebe "Spune-mi despre tine" ca prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Codul complet pentru acest exemplu arată astfel:

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

Ar trebui să vedeți un rezultat similar cu:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Pentru a păstra starea conversației, puteți adăuga răspunsul de la un chat, astfel încât conversația să fie reținută, iată cum se face acest lucru:

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

Ceea ce putem observa din conversația de mai sus este cum invocăm LLM de două ori, mai întâi cu conversația constând doar din două mesaje, dar apoi a doua oară cu mai multe mesaje adăugate la conversație.

De fapt, dacă rulați acest lucru, veți vedea al doilea răspuns fiind ceva de genul:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

O să iau asta ca un "poate" ;)

## Răspunsuri în flux

TODO

## Șabloane de prompt

TODO

## Rezultate structurate

TODO

## Apelarea instrumentelor

Instrumentele sunt modul în care oferim LLM-ului abilități suplimentare. Ideea este să informăm LLM-ul despre funcțiile pe care le are, iar dacă se face un prompt care se potrivește descrierii unuia dintre aceste instrumente, atunci le apelăm.

### Utilizând Python

Să adăugăm câteva instrumente astfel:

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

Ceea ce facem aici este să creăm o descriere a unui instrument numit `add`. Prin moștenirea de la `TypedDict` și adăugarea de membri precum `a` și `b` de tip `Annotated`, acest lucru poate fi convertit într-o schemă pe care LLM-ul o poate înțelege. Crearea funcțiilor este un dicționar care asigură că știm ce să facem dacă un instrument specific este identificat.

Să vedem cum apelăm LLM-ul cu acest instrument în continuare:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Aici apelăm `bind_tools` cu array-ul nostru `tools`, iar astfel LLM-ul `llm_with_tools` are acum cunoștință despre acest instrument.

Pentru a utiliza acest nou LLM, putem scrie următorul cod:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Acum, când apelăm `invoke` pe acest nou LLM, care are instrumente, proprietatea `tool_calls` poate fi populată. Dacă da, orice instrument identificat are o proprietate `name` și `args` care identifică ce instrument ar trebui să fie apelat și cu ce argumente. Codul complet arată astfel:

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

Rulând acest cod, ar trebui să vedeți un rezultat similar cu:

```text
TOOL CALL:  15
CONTENT: 
```

Ceea ce înseamnă acest rezultat este că LLM-ul a analizat promptul "Ce este 3 + 12" ca însemnând că instrumentul `add` ar trebui să fie apelat și a știut acest lucru datorită numelui său, descrierii și descrierilor câmpurilor membrilor. Faptul că răspunsul este 15 se datorează codului nostru care utilizează dicționarul `functions` pentru a-l invoca:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Un instrument mai interesant care apelează un API web

Instrumentele care adaugă două numere sunt interesante, deoarece ilustrează modul în care funcționează apelarea instrumentelor, dar de obicei instrumentele tind să facă ceva mai interesant, cum ar fi, de exemplu, apelarea unui API web. Să facem exact asta cu acest cod:

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

Acum, dacă rulați acest cod, veți primi un răspuns care spune ceva de genul:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Iată codul în întregime:

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

## Încorporare

Vectorizați conținutul, comparați prin similaritatea cosinusului

https://python.langchain.com/docs/how_to/embed_text/

### Încărcătoare de documente

PDF și CSV

## Construirea unei aplicații

TODO

## Temă

## Rezumat

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.