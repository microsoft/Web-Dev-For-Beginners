<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:19:15+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "es"
}
-->
# Marco de IA

Existen muchos marcos de IA que, al utilizarlos, pueden acelerar significativamente el tiempo necesario para construir un proyecto. En este proyecto nos centraremos en entender qué problemas abordan estos marcos y construiremos un proyecto de este tipo nosotros mismos.

## Por qué un marco

Cuando se trata de usar IA, hay diferentes enfoques y razones para elegirlos. Aquí algunos ejemplos:

- **Sin SDK**, la mayoría de los modelos de IA permiten interactuar directamente con el modelo de IA, por ejemplo, mediante solicitudes HTTP. Este enfoque funciona y, a veces, puede ser tu única opción si no existe una opción de SDK.
- **SDK**. Usar un SDK suele ser el enfoque recomendado, ya que te permite escribir menos código para interactuar con tu modelo. Generalmente está limitado a un modelo específico y, si utilizas diferentes modelos, es posible que necesites escribir nuevo código para soportar esos modelos adicionales.
- **Un marco**. Un marco generalmente lleva las cosas a otro nivel en el sentido de que, si necesitas usar diferentes modelos, hay una API para todos ellos; lo que varía suele ser la configuración inicial. Además, los marcos aportan abstracciones útiles, como en el ámbito de la IA, pueden manejar herramientas, memoria, flujos de trabajo, agentes y más, mientras se escribe menos código. Debido a que los marcos suelen ser opinados, pueden ser realmente útiles si aceptas cómo hacen las cosas, pero pueden quedarse cortos si intentas hacer algo personalizado para lo que el marco no está diseñado. A veces, un marco también puede simplificar demasiado y, por lo tanto, podrías no aprender un tema importante que más adelante podría afectar el rendimiento, por ejemplo.

En general, utiliza la herramienta adecuada para el trabajo.

## Introducción

En esta lección, aprenderemos a:

- Usar un marco de IA común.
- Abordar problemas comunes como conversaciones de chat, uso de herramientas, memoria y contexto.
- Aprovechar esto para construir aplicaciones de IA.

## Primer prompt

En nuestro primer ejemplo de aplicación, aprenderemos cómo conectarnos a un modelo de IA y consultarlo utilizando un prompt.

### Usando Python

Para este ejemplo, utilizaremos Langchain para conectarnos a los modelos de GitHub. Podemos usar una clase llamada `ChatOpenAI` y proporcionarle los campos `api_key`, `base_url` y `model`. El token se genera automáticamente dentro de GitHub Codespaces y, si estás ejecutando la aplicación localmente, necesitas configurar un token de acceso personal para que esto funcione.

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

En este código, hacemos lo siguiente:

- Llamamos a `ChatOpenAI` para crear un cliente.
- Usamos `llm.invoke` con un prompt para crear una respuesta.
- Imprimimos la respuesta con `print(response.content)`.

Deberías ver una respuesta similar a:

```text
The capital of France is Paris.
```

## Conversación de chat

En la sección anterior, viste cómo usamos lo que normalmente se conoce como "zero shot prompting", un único prompt seguido de una respuesta.

Sin embargo, a menudo te encuentras en una situación en la que necesitas mantener una conversación con varios mensajes intercambiados entre tú y el asistente de IA.

### Usando Python

En Langchain, podemos almacenar la conversación en una lista. El `HumanMessage` representa un mensaje de un usuario, y `SystemMessage` es un mensaje destinado a establecer la "personalidad" de la IA. En el ejemplo a continuación, ves cómo instruimos a la IA para que asuma la personalidad del Capitán Picard y para que el humano/usuario pregunte "Háblame de ti" como prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

El código completo para este ejemplo se ve así:

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

Deberías ver un resultado similar a:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Para mantener el estado de la conversación, puedes agregar la respuesta de un chat, de modo que la conversación se recuerde. Aquí está cómo hacerlo:

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

Lo que podemos ver de la conversación anterior es cómo invocamos el LLM dos veces, primero con la conversación que consiste en solo dos mensajes, pero luego una segunda vez con más mensajes añadidos a la conversación.

De hecho, si ejecutas esto, verás que la segunda respuesta es algo como:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Lo tomaré como un "tal vez" ;)

## Respuestas en streaming

TODO

## Plantillas de prompts

TODO

## Salida estructurada

TODO

## Llamada a herramientas

Las herramientas son cómo le damos habilidades adicionales al LLM. La idea es decirle al LLM sobre las funciones que tiene y, si se hace un prompt que coincide con la descripción de una de estas herramientas, entonces las llamamos.

### Usando Python

Agreguemos algunas herramientas de esta manera:

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

Lo que estamos haciendo aquí es crear una descripción de una herramienta llamada `add`. Al heredar de `TypedDict` y agregar miembros como `a` y `b` de tipo `Annotated`, esto puede convertirse en un esquema que el LLM pueda entender. La creación de funciones es un diccionario que asegura que sepamos qué hacer si se identifica una herramienta específica.

Veamos cómo llamamos al LLM con esta herramienta a continuación:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Aquí llamamos a `bind_tools` con nuestro array `tools` y, por lo tanto, el LLM `llm_with_tools` ahora tiene conocimiento de esta herramienta.

Para usar este nuevo LLM, podemos escribir el siguiente código:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Ahora que llamamos a `invoke` en este nuevo LLM, que tiene herramientas, tal vez la propiedad `tool_calls` esté poblada. Si es así, cualquier herramienta identificada tiene una propiedad `name` y `args` que identifica qué herramienta debe ser llamada y con qué argumentos. El código completo se ve así:

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

Al ejecutar este código, deberías ver una salida similar a:

```text
TOOL CALL:  15
CONTENT: 
```

Lo que significa esta salida es que el LLM analizó el prompt "¿Qué es 3 + 12?" como que la herramienta `add` debería ser llamada y lo supo gracias a su nombre, descripción y descripciones de los campos de los miembros. Que la respuesta sea 15 se debe a nuestro código que utiliza el diccionario `functions` para invocarlo:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Una herramienta más interesante que llama a una API web

Las herramientas que suman dos números son interesantes ya que ilustran cómo funciona la llamada a herramientas, pero generalmente las herramientas tienden a hacer algo más interesante, como por ejemplo llamar a una API web. Hagamos eso con este código:

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

Ahora, si ejecutas este código, obtendrás una respuesta diciendo algo como:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Aquí está el código en su totalidad:

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

Vectorizar contenido, comparar mediante similitud coseno.

https://python.langchain.com/docs/how_to/embed_text/

### Cargadores de documentos

PDF y CSV.

## Construyendo una aplicación

TODO

## Tarea

## Resumen

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.