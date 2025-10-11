<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:18:57+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "fr"
}
-->
# Cadre d'IA

Il existe de nombreux cadres d'IA qui, lorsqu'ils sont utilisés, peuvent considérablement accélérer le temps nécessaire pour développer un projet. Dans ce projet, nous allons nous concentrer sur la compréhension des problèmes que ces cadres abordent et construire un tel projet nous-mêmes.

## Pourquoi un cadre

Lorsqu'il s'agit d'utiliser l'IA, il existe différentes approches et raisons de choisir ces approches. Voici quelques exemples :

- **Pas de SDK** : La plupart des modèles d'IA permettent d'interagir directement avec le modèle via, par exemple, des requêtes HTTP. Cette approche fonctionne et peut parfois être votre seule option si un SDK n'est pas disponible.
- **SDK** : Utiliser un SDK est généralement l'approche recommandée, car cela permet d'écrire moins de code pour interagir avec votre modèle. Cependant, cela est souvent limité à un modèle spécifique, et si vous utilisez différents modèles, vous devrez peut-être écrire du nouveau code pour prendre en charge ces modèles supplémentaires.
- **Un cadre** : Un cadre va généralement plus loin en offrant une API unique pour différents modèles, ce qui simplifie leur utilisation. Ce qui change généralement, c'est la configuration initiale. De plus, les cadres apportent des abstractions utiles, comme dans le domaine de l'IA, où ils peuvent gérer des outils, la mémoire, les flux de travail, les agents, et plus encore, tout en nécessitant moins de code. Parce que les cadres sont souvent opinionnés, ils peuvent être très utiles si vous adhérez à leur façon de faire, mais peuvent être limités si vous essayez de faire quelque chose de sur mesure qui n'est pas prévu par le cadre. Parfois, un cadre peut également simplifier à l'excès, ce qui peut vous empêcher d'apprendre un sujet important qui pourrait nuire aux performances par la suite.

En général, utilisez l'outil adapté à la tâche.

## Introduction

Dans cette leçon, nous allons apprendre à :

- Utiliser un cadre d'IA courant.
- Résoudre des problèmes courants comme les conversations, l'utilisation d'outils, la mémoire et le contexte.
- Exploiter cela pour créer des applications d'IA.

## Premier prompt

Dans notre premier exemple d'application, nous allons apprendre à nous connecter à un modèle d'IA et à l'interroger à l'aide d'un prompt.

### Utilisation de Python

Pour cet exemple, nous utiliserons Langchain pour nous connecter aux modèles GitHub. Nous pouvons utiliser une classe appelée `ChatOpenAI` et lui fournir les champs `api_key`, `base_url` et `model`. Le jeton est automatiquement renseigné dans GitHub Codespaces, et si vous exécutez l'application localement, vous devez configurer un jeton d'accès personnel pour que cela fonctionne.

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

Dans ce code, nous :

- Appelons `ChatOpenAI` pour créer un client.
- Utilisons `llm.invoke` avec un prompt pour générer une réponse.
- Affichons la réponse avec `print(response.content)`.

Vous devriez voir une réponse similaire à :

```text
The capital of France is Paris.
```

## Conversation

Dans la section précédente, vous avez vu comment nous avons utilisé ce qui est généralement appelé un prompt "zero shot", un seul prompt suivi d'une réponse.

Cependant, il arrive souvent que vous deviez maintenir une conversation avec plusieurs messages échangés entre vous et l'assistant IA.

### Utilisation de Python

Dans Langchain, nous pouvons stocker la conversation dans une liste. Le `HumanMessage` représente un message de l'utilisateur, et le `SystemMessage` est un message destiné à définir la "personnalité" de l'IA. Dans l'exemple ci-dessous, vous voyez comment nous instruisons l'IA pour qu'elle adopte la personnalité du capitaine Picard, et pour que l'utilisateur demande "Parlez-moi de vous" comme prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Le code complet pour cet exemple ressemble à ceci :

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

Vous devriez voir un résultat similaire à :

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Pour conserver l'état de la conversation, vous pouvez ajouter la réponse d'un chat afin que la conversation soit mémorisée. Voici comment faire :

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

Ce que nous pouvons voir dans la conversation ci-dessus, c'est comment nous invoquons le LLM deux fois : d'abord avec une conversation composée de seulement deux messages, puis une deuxième fois avec plus de messages ajoutés à la conversation.

En fait, si vous exécutez cela, vous verrez que la deuxième réponse ressemble à :

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Je prends cela comme un "peut-être" ;)

## Réponses en streaming

À faire

## Modèles de prompt

À faire

## Sortie structurée

À faire

## Appel d'outils

Les outils permettent de donner des compétences supplémentaires au LLM. L'idée est d'informer le LLM des fonctions disponibles, et si un prompt correspond à la description de l'un de ces outils, alors nous l'appelons.

### Utilisation de Python

Ajoutons quelques outils comme ceci :

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

Ce que nous faisons ici, c'est créer une description d'un outil appelé `add`. En héritant de `TypedDict` et en ajoutant des membres comme `a` et `b` de type `Annotated`, cela peut être converti en un schéma que le LLM peut comprendre. La création de fonctions est un dictionnaire qui garantit que nous savons quoi faire si un outil spécifique est identifié.

Voyons comment appeler le LLM avec cet outil :

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Ici, nous appelons `bind_tools` avec notre tableau `tools`, et ainsi le LLM `llm_with_tools` a maintenant connaissance de cet outil.

Pour utiliser ce nouveau LLM, nous pouvons écrire le code suivant :

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Maintenant que nous appelons `invoke` sur ce nouveau LLM, qui dispose d'outils, la propriété `tool_calls` peut être renseignée. Si c'est le cas, les outils identifiés ont une propriété `name` et `args` qui identifie quel outil doit être appelé et avec quels arguments. Le code complet ressemble à ceci :

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

En exécutant ce code, vous devriez voir une sortie similaire à :

```text
TOOL CALL:  15
CONTENT: 
```

Ce que cette sortie signifie, c'est que le LLM a analysé le prompt "Quel est 3 + 12" comme signifiant que l'outil `add` doit être appelé, et il le savait grâce à son nom, sa description et les descriptions des champs membres. Que la réponse soit 15 est dû à notre code utilisant le dictionnaire `functions` pour l'invoquer :

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Un outil plus intéressant qui appelle une API web

Les outils qui additionnent deux nombres sont intéressants car ils illustrent comment fonctionne l'appel d'outils, mais généralement, les outils ont tendance à faire quelque chose de plus intéressant, comme par exemple appeler une API web. Faisons cela avec ce code :

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

Maintenant, si vous exécutez ce code, vous obtiendrez une réponse disant quelque chose comme :

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Voici le code dans son intégralité :

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

Vectoriser du contenu, comparer via la similarité cosinus

https://python.langchain.com/docs/how_to/embed_text/

### Chargeurs de documents

PDF et CSV

## Création d'une application

À faire

## Devoir

## Résumé

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.