<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:25:12+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "it"
}
-->
# Framework AI

Esistono molti framework AI che, se utilizzati, possono accelerare notevolmente il tempo necessario per sviluppare un progetto. In questo progetto ci concentreremo sulla comprensione dei problemi che questi framework affrontano e costruiremo un progetto simile noi stessi.

## Perché un framework

Quando si utilizza l'AI, ci sono diversi approcci e motivi per scegliere questi approcci. Ecco alcuni esempi:

- **Nessun SDK**, la maggior parte dei modelli AI consente di interagire direttamente con il modello AI tramite, ad esempio, richieste HTTP. Questo approccio funziona e a volte può essere l'unica opzione disponibile se manca un'opzione SDK.
- **SDK**. Utilizzare un SDK è solitamente l'approccio consigliato, poiché consente di scrivere meno codice per interagire con il modello. Di solito è limitato a un modello specifico e, se si utilizzano modelli diversi, potrebbe essere necessario scrivere nuovo codice per supportare quei modelli aggiuntivi.
- **Un framework**. Un framework di solito porta le cose a un livello superiore nel senso che, se è necessario utilizzare modelli diversi, c'è un'unica API per tutti, ciò che cambia è solitamente la configurazione iniziale. Inoltre, i framework offrono astrazioni utili, come nel campo dell'AI, possono gestire strumenti, memoria, flussi di lavoro, agenti e altro, scrivendo meno codice. Poiché i framework sono solitamente opinabili, possono essere davvero utili se si accetta il loro modo di operare, ma possono risultare limitanti se si cerca di fare qualcosa di personalizzato che il framework non supporta. A volte un framework può anche semplificare troppo e, di conseguenza, si potrebbe non apprendere un argomento importante che in seguito potrebbe influire negativamente sulle prestazioni, ad esempio.

In generale, usa lo strumento giusto per il lavoro.

## Introduzione

In questa lezione, impareremo a:

- Utilizzare un framework AI comune.
- Affrontare problemi comuni come conversazioni, utilizzo di strumenti, memoria e contesto.
- Sfruttare tutto ciò per costruire app AI.

## Primo prompt

Nel nostro primo esempio di app, impareremo come connetterci a un modello AI e interrogarlo utilizzando un prompt.

### Utilizzando Python

Per questo esempio, utilizzeremo Langchain per connetterci ai modelli GitHub. Possiamo utilizzare una classe chiamata `ChatOpenAI` e fornire i campi `api_key`, `base_url` e `model`. Il token viene automaticamente popolato all'interno di GitHub Codespaces e, se si esegue l'app localmente, è necessario configurare un token di accesso personale affinché funzioni.

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

In questo codice, facciamo quanto segue:

- Chiamiamo `ChatOpenAI` per creare un client.
- Utilizziamo `llm.invoke` con un prompt per creare una risposta.
- Stampiamo la risposta con `print(response.content)`.

Dovresti vedere una risposta simile a:

```text
The capital of France is Paris.
```

## Conversazione

Nella sezione precedente, hai visto come abbiamo utilizzato ciò che normalmente è noto come zero shot prompting, un singolo prompt seguito da una risposta.

Tuttavia, spesso ci si trova in situazioni in cui è necessario mantenere una conversazione composta da diversi messaggi scambiati tra te e l'assistente AI.

### Utilizzando Python

In Langchain, possiamo memorizzare la conversazione in una lista. Il `HumanMessage` rappresenta un messaggio da parte dell'utente, mentre `SystemMessage` è un messaggio destinato a impostare la "personalità" dell'AI. Nell'esempio seguente, vedrai come istruiamo l'AI ad assumere la personalità del Capitano Picard e per l'umano/utente a chiedere "Parlami di te" come prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Il codice completo per questo esempio è il seguente:

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

Dovresti vedere un risultato simile a:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Per mantenere lo stato della conversazione, puoi aggiungere la risposta di una chat, in modo che la conversazione venga ricordata. Ecco come farlo:

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

Quello che possiamo vedere dalla conversazione sopra è come invochiamo il LLM due volte, prima con la conversazione composta da soli due messaggi e poi una seconda volta con più messaggi aggiunti alla conversazione.

Infatti, se esegui questo codice, vedrai che la seconda risposta sarà qualcosa come:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Lo prenderò come un "forse" ;)

## Risposte in streaming

TODO

## Template di prompt

TODO

## Output strutturato

TODO

## Chiamata di strumenti

Gli strumenti sono il modo in cui diamo al LLM abilità aggiuntive. L'idea è di informare il LLM sulle funzioni disponibili e, se viene fatto un prompt che corrisponde alla descrizione di uno di questi strumenti, allora lo chiamiamo.

### Utilizzando Python

Aggiungiamo alcuni strumenti come segue:

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

Quello che stiamo facendo qui è creare una descrizione di uno strumento chiamato `add`. Ereditando da `TypedDict` e aggiungendo membri come `a` e `b` di tipo `Annotated`, questo può essere convertito in uno schema che il LLM può comprendere. La creazione delle funzioni è un dizionario che garantisce che sappiamo cosa fare se viene identificato uno strumento specifico.

Vediamo come chiamiamo il LLM con questo strumento:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Qui chiamiamo `bind_tools` con il nostro array `tools` e, di conseguenza, il LLM `llm_with_tools` ora ha conoscenza di questo strumento.

Per utilizzare questo nuovo LLM, possiamo digitare il seguente codice:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Ora che chiamiamo `invoke` su questo nuovo LLM, che ha strumenti, potremmo vedere la proprietà `tool_calls` popolata. Se è così, qualsiasi strumento identificato avrà una proprietà `name` e `args` che identifica quale strumento dovrebbe essere chiamato e con quali argomenti. Il codice completo è il seguente:

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

Eseguendo questo codice, dovresti vedere un output simile a:

```text
TOOL CALL:  15
CONTENT: 
```

Quello che significa questo output è che il LLM ha analizzato il prompt "Quanto fa 3 + 12" come significato che lo strumento `add` dovrebbe essere chiamato e lo ha capito grazie al suo nome, descrizione e descrizioni dei campi membri. Che la risposta sia 15 è dovuto al nostro codice che utilizza il dizionario `functions` per invocarlo:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Uno strumento più interessante che chiama un'API web

Gli strumenti che sommano due numeri sono interessanti poiché illustrano come funziona la chiamata di strumenti, ma di solito gli strumenti tendono a fare qualcosa di più interessante, come ad esempio chiamare un'API web. Facciamo proprio questo con questo codice:

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

Ora, se esegui questo codice, otterrai una risposta simile a:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Ecco il codice nella sua interezza:

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

Vettorizzare contenuti, confrontare tramite similarità coseno

https://python.langchain.com/docs/how_to/embed_text/

### Caricamento documenti

PDF e CSV

## Creazione di un'app

TODO

## Compito

## Riepilogo

---

**Clausola di esclusione della responsabilità**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di tenere presente che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.