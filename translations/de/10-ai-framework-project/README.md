<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:19:27+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "de"
}
-->
# KI-Framework

Es gibt viele KI-Frameworks, die die Entwicklungszeit eines Projekts erheblich verkürzen können. In diesem Projekt konzentrieren wir uns darauf, zu verstehen, welche Probleme diese Frameworks lösen und ein solches Projekt selbst zu erstellen.

## Warum ein Framework?

Beim Einsatz von KI gibt es verschiedene Ansätze und Gründe, diese Ansätze zu wählen. Hier sind einige davon:

- **Kein SDK**: Die meisten KI-Modelle ermöglichen es, direkt über beispielsweise HTTP-Anfragen mit dem Modell zu interagieren. Dieser Ansatz funktioniert und ist manchmal die einzige Option, wenn ein SDK fehlt.
- **SDK**: Die Verwendung eines SDK wird in der Regel empfohlen, da es weniger Code erfordert, um mit dem Modell zu interagieren. Es ist normalerweise auf ein bestimmtes Modell beschränkt, und wenn man verschiedene Modelle verwendet, muss man möglicherweise neuen Code schreiben, um diese zusätzlichen Modelle zu unterstützen.
- **Ein Framework**: Ein Framework geht oft einen Schritt weiter, indem es eine einheitliche API für verschiedene Modelle bietet. Der Unterschied liegt meist in der anfänglichen Einrichtung. Darüber hinaus bieten Frameworks nützliche Abstraktionen, wie Werkzeuge, Speicher, Workflows, Agenten und mehr, während weniger Code geschrieben werden muss. Da Frameworks oft eine bestimmte Vorgehensweise vorgeben, können sie sehr hilfreich sein, wenn man sich auf ihre Arbeitsweise einlässt. Sie können jedoch unzureichend sein, wenn man etwas Individuelles machen möchte, das nicht vom Framework unterstützt wird. Manchmal vereinfacht ein Framework auch zu stark, sodass wichtige Themen nicht gelernt werden, was später beispielsweise die Leistung beeinträchtigen könnte.

Im Allgemeinen gilt: Verwende das richtige Werkzeug für die jeweilige Aufgabe.

## Einführung

In dieser Lektion lernen wir:

- Ein gängiges KI-Framework zu verwenden.
- Häufige Probleme wie Chat-Konversationen, Werkzeugnutzung, Speicher und Kontext zu lösen.
- Dies zu nutzen, um KI-Anwendungen zu erstellen.

## Erster Prompt

In unserem ersten App-Beispiel lernen wir, wie man sich mit einem KI-Modell verbindet und es mit einem Prompt abfragt.

### Mit Python

Für dieses Beispiel verwenden wir Langchain, um eine Verbindung zu GitHub-Modellen herzustellen. Wir können eine Klasse namens `ChatOpenAI` verwenden und ihr die Felder `api_key`, `base_url` und `model` übergeben. Der Token wird automatisch in GitHub Codespaces generiert, und wenn du die App lokal ausführst, musst du einen persönlichen Zugriffstoken einrichten, damit dies funktioniert.

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

In diesem Code:

- Rufen wir `ChatOpenAI` auf, um einen Client zu erstellen.
- Verwenden wir `llm.invoke` mit einem Prompt, um eine Antwort zu generieren.
- Drucken wir die Antwort mit `print(response.content)`.

Du solltest eine Antwort sehen, die etwa so aussieht:

```text
The capital of France is Paris.
```

## Chat-Konversation

Im vorherigen Abschnitt hast du gesehen, wie wir das verwenden, was normalerweise als Zero-Shot-Prompting bekannt ist: ein einzelner Prompt, gefolgt von einer Antwort.

Oft befindet man sich jedoch in einer Situation, in der man eine Konversation mit mehreren Nachrichten zwischen sich und dem KI-Assistenten führen muss.

### Mit Python

In Langchain können wir die Konversation in einer Liste speichern. Die `HumanMessage` repräsentiert eine Nachricht von einem Benutzer, und `SystemMessage` ist eine Nachricht, die die "Persönlichkeit" der KI festlegt. Im folgenden Beispiel siehst du, wie wir die KI anweisen, die Persönlichkeit von Captain Picard anzunehmen, und der Mensch/Benutzer die Frage "Erzähl mir von dir" als Prompt stellt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Der vollständige Code für dieses Beispiel sieht so aus:

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

Du solltest ein Ergebnis sehen, das etwa so aussieht:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Um den Zustand der Konversation beizubehalten, kannst du die Antwort aus einem Chat hinzufügen, sodass die Konversation gespeichert wird. So funktioniert das:

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

Was wir aus der obigen Konversation sehen können, ist, wie wir das LLM zweimal aufrufen: zuerst mit der Konversation, die nur aus zwei Nachrichten besteht, und dann ein zweites Mal mit weiteren Nachrichten, die der Konversation hinzugefügt wurden.

Tatsächlich wirst du, wenn du dies ausführst, sehen, dass die zweite Antwort etwa so aussieht:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Ich nehme das als ein "Vielleicht" ;)

## Streaming-Antworten

TODO

## Prompt-Vorlagen

TODO

## Strukturierte Ausgabe

TODO

## Werkzeugaufrufe

Werkzeuge sind eine Möglichkeit, dem LLM zusätzliche Fähigkeiten zu geben. Die Idee ist, dem LLM Funktionen mitzuteilen, die es hat, und wenn ein Prompt gemacht wird, der der Beschreibung eines dieser Werkzeuge entspricht, wird es aufgerufen.

### Mit Python

Lass uns einige Werkzeuge hinzufügen, wie folgt:

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

Was wir hier tun, ist, eine Beschreibung eines Werkzeugs namens `add` zu erstellen. Indem wir von `TypedDict` erben und Mitglieder wie `a` und `b` vom Typ `Annotated` hinzufügen, kann dies in ein Schema umgewandelt werden, das das LLM versteht. Die Erstellung von Funktionen erfolgt über ein Dictionary, das sicherstellt, dass wir wissen, was zu tun ist, wenn ein bestimmtes Werkzeug identifiziert wird.

Lass uns sehen, wie wir das LLM mit diesem Werkzeug aufrufen:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Hier rufen wir `bind_tools` mit unserem `tools`-Array auf, und dadurch hat das LLM `llm_with_tools` nun Kenntnis von diesem Werkzeug.

Um dieses neue LLM zu verwenden, können wir den folgenden Code eingeben:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Wenn wir nun `invoke` auf diesem neuen LLM aufrufen, das Werkzeuge hat, wird möglicherweise die Eigenschaft `tool_calls` ausgefüllt. Falls ja, hat jedes identifizierte Werkzeug eine `name`- und `args`-Eigenschaft, die angibt, welches Werkzeug aufgerufen werden soll und mit welchen Argumenten. Der vollständige Code sieht so aus:

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

Wenn du diesen Code ausführst, solltest du eine Ausgabe sehen, die etwa so aussieht:

```text
TOOL CALL:  15
CONTENT: 
```

Was diese Ausgabe bedeutet, ist, dass das LLM den Prompt "Was ist 3 + 12" als Aufforderung interpretiert hat, das Werkzeug `add` aufzurufen. Es wusste das dank seines Namens, seiner Beschreibung und der Beschreibungen der Mitgliederfelder. Dass die Antwort 15 ist, liegt daran, dass unser Code das Dictionary `functions` verwendet, um es auszuführen:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Ein interessanteres Werkzeug, das eine Web-API aufruft

Werkzeuge, die zwei Zahlen addieren, sind interessant, da sie veranschaulichen, wie Werkzeugaufrufe funktionieren. Üblicherweise tun Werkzeuge jedoch etwas Interessanteres, wie beispielsweise eine Web-API aufzurufen. Lass uns das mit diesem Code tun:

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

Wenn du diesen Code ausführst, erhältst du eine Antwort, die etwa so lautet:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Hier ist der gesamte Code:

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

## Einbettung

Inhalte vektorisieren, Vergleich über Kosinus-Ähnlichkeit

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentenlader

PDF und CSV

## Eine App erstellen

TODO

## Aufgabe

## Zusammenfassung

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.