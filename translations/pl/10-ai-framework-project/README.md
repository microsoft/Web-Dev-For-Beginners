<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:25:32+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "pl"
}
-->
# Framework AI

Istnieje wiele frameworków AI, które mogą znacznie przyspieszyć czas potrzebny na stworzenie projektu. W tym projekcie skupimy się na zrozumieniu, jakie problemy te frameworki rozwiązują, oraz stworzymy własny projekt oparty na jednym z nich.

## Dlaczego framework?

W przypadku korzystania z AI istnieją różne podejścia i powody ich wyboru. Oto kilka z nich:

- **Brak SDK**: Większość modeli AI pozwala na bezpośrednią interakcję z modelem, na przykład za pomocą żądań HTTP. To podejście działa i czasami może być jedyną opcją, jeśli SDK nie jest dostępne.
- **SDK**: Korzystanie z SDK jest zazwyczaj zalecane, ponieważ pozwala na napisanie mniejszej ilości kodu do interakcji z modelem. Zwykle jest ograniczone do konkretnego modelu, a jeśli korzystasz z różnych modeli, może być konieczne napisanie nowego kodu, aby je obsłużyć.
- **Framework**: Framework zazwyczaj podnosi poziom abstrakcji, oferując jedno API dla różnych modeli, gdzie różnice dotyczą głównie konfiguracji początkowej. Dodatkowo frameworki wprowadzają przydatne abstrakcje, takie jak narzędzia, pamięć, przepływy pracy, agenci i inne, przy jednoczesnym ograniczeniu ilości kodu. Frameworki są zazwyczaj opiniotwórcze, co może być pomocne, jeśli akceptujesz ich sposób działania, ale mogą być mniej skuteczne, jeśli próbujesz zrobić coś niestandardowego, czego framework nie obsługuje. Czasami framework może uprościć proces zbyt mocno, co może prowadzić do pominięcia ważnych tematów, które później mogą wpłynąć na wydajność.

Ogólnie rzecz biorąc, należy używać odpowiedniego narzędzia do danego zadania.

## Wprowadzenie

W tej lekcji nauczymy się:

- Korzystać z popularnego frameworku AI.
- Rozwiązywać typowe problemy, takie jak rozmowy, użycie narzędzi, pamięć i kontekst.
- Wykorzystać te umiejętności do budowy aplikacji AI.

## Pierwszy prompt

W naszym pierwszym przykładzie aplikacji nauczymy się, jak połączyć się z modelem AI i zapytać go za pomocą promptu.

### Korzystanie z Pythona

W tym przykładzie użyjemy Langchain do połączenia z modelami GitHub. Możemy użyć klasy `ChatOpenAI` i podać jej pola `api_key`, `base_url` oraz `model`. Token jest automatycznie generowany w GitHub Codespaces, a jeśli uruchamiasz aplikację lokalnie, musisz skonfigurować osobisty token dostępu, aby to działało.

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

W tym kodzie:

- Wywołujemy `ChatOpenAI`, aby utworzyć klienta.
- Używamy `llm.invoke` z promptem, aby wygenerować odpowiedź.
- Wyświetlamy odpowiedź za pomocą `print(response.content)`.

Powinieneś zobaczyć odpowiedź podobną do:

```text
The capital of France is Paris.
```

## Rozmowa

W poprzedniej sekcji zobaczyłeś, jak używaliśmy tzw. zero shot prompting, czyli pojedynczego promptu, po którym następuje odpowiedź.

Jednak często znajdujesz się w sytuacji, w której musisz utrzymać rozmowę składającą się z kilku wymienianych wiadomości między Tobą a asystentem AI.

### Korzystanie z Pythona

W Langchain możemy przechowywać rozmowę w liście. `HumanMessage` reprezentuje wiadomość od użytkownika, a `SystemMessage` to wiadomość mająca na celu ustawienie "osobowości" AI. W poniższym przykładzie pokazujemy, jak instruujemy AI, aby przyjęło osobowość Kapitana Picarda, a użytkownik zadaje pytanie "Opowiedz mi o sobie" jako prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Pełny kod dla tego przykładu wygląda następująco:

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

Powinieneś zobaczyć wynik podobny do:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Aby zachować stan rozmowy, możesz dodać odpowiedź z czatu, aby rozmowa była zapamiętana. Oto jak to zrobić:

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

Z powyższej rozmowy widzimy, jak dwukrotnie wywołujemy LLM, najpierw z rozmową składającą się z dwóch wiadomości, a następnie drugi raz z większą liczbą wiadomości dodanych do rozmowy.

W rzeczywistości, jeśli uruchomisz ten kod, zobaczysz drugą odpowiedź podobną do:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Wezmę to za "może" ;)

## Strumieniowanie odpowiedzi

TODO

## Szablony promptów

TODO

## Strukturalne wyniki

TODO

## Wywoływanie narzędzi

Narzędzia pozwalają LLM na zdobycie dodatkowych umiejętności. Idea polega na poinformowaniu LLM o funkcjach, które posiada, a jeśli prompt pasuje do opisu jednego z tych narzędzi, to zostaje ono wywołane.

### Korzystanie z Pythona

Dodajmy kilka narzędzi w następujący sposób:

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

Tworzymy tutaj opis narzędzia o nazwie `add`. Dziedzicząc po `TypedDict` i dodając członków takich jak `a` i `b` typu `Annotated`, można to przekształcić w schemat, który LLM rozumie. Tworzenie funkcji to słownik, który zapewnia, że wiemy, co zrobić, jeśli zostanie zidentyfikowane konkretne narzędzie.

Zobaczmy, jak wywołać LLM z tym narzędziem:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Tutaj wywołujemy `bind_tools` z naszą tablicą `tools`, dzięki czemu LLM `llm_with_tools` ma teraz wiedzę o tym narzędziu.

Aby użyć tego nowego LLM, możemy wpisać następujący kod:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Teraz, gdy wywołujemy `invoke` na tym nowym LLM, który ma narzędzia, może być wypełniona właściwość `tool_calls`. Jeśli tak, każde zidentyfikowane narzędzie ma właściwości `name` i `args`, które identyfikują, jakie narzędzie powinno zostać wywołane i z jakimi argumentami. Pełny kod wygląda następująco:

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

Uruchamiając ten kod, powinieneś zobaczyć wynik podobny do:

```text
TOOL CALL:  15
CONTENT: 
```

Ten wynik oznacza, że LLM przeanalizował prompt "What is 3 + 12" jako wskazujący, że narzędzie `add` powinno zostać wywołane, i wiedział to dzięki jego nazwie, opisowi i opisom pól członkowskich. Odpowiedź 15 wynika z naszego kodu używającego słownika `functions` do jego wywołania:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Bardziej interesujące narzędzie wywołujące API sieciowe

Narzędzia dodające dwie liczby są interesujące, ponieważ ilustrują, jak działa wywoływanie narzędzi, ale zazwyczaj narzędzia robią coś bardziej interesującego, na przykład wywołują API sieciowe. Zróbmy to za pomocą tego kodu:

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

Teraz, jeśli uruchomisz ten kod, otrzymasz odpowiedź podobną do:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Oto pełny kod:

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

Wektoryzacja treści, porównanie za pomocą podobieństwa kosinusowego

https://python.langchain.com/docs/how_to/embed_text/

### Ładowanie dokumentów

PDF i CSV

## Tworzenie aplikacji

TODO

## Zadanie

## Podsumowanie

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.