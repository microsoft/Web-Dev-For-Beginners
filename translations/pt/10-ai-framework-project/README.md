<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:24:38+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "pt"
}
-->
# Framework de IA

Existem muitos frameworks de IA disponíveis que, quando utilizados, podem acelerar significativamente o tempo necessário para construir um projeto. Neste projeto, vamos focar em compreender os problemas que esses frameworks resolvem e construir um projeto desse tipo por conta própria.

## Porquê um framework

Quando se trata de usar IA, existem diferentes abordagens e razões para escolher essas abordagens. Aqui estão algumas:

- **Sem SDK**: A maioria dos modelos de IA permite interagir diretamente com o modelo via, por exemplo, pedidos HTTP. Essa abordagem funciona e pode, por vezes, ser a única opção se não houver um SDK disponível.
- **SDK**: Usar um SDK é geralmente a abordagem recomendada, pois permite escrever menos código para interagir com o modelo. Normalmente, é limitado a um modelo específico e, se usar modelos diferentes, pode ser necessário escrever novo código para suportar esses modelos adicionais.
- **Um framework**: Um framework geralmente eleva as coisas a outro nível, no sentido de que, se precisar usar modelos diferentes, há uma API única para todos eles, sendo a configuração inicial o que geralmente varia. Além disso, frameworks trazem abstrações úteis, como no espaço de IA, onde podem lidar com ferramentas, memória, fluxos de trabalho, agentes e mais, enquanto se escreve menos código. Como os frameworks geralmente são opinativos, podem ser realmente úteis se aceitar a forma como eles funcionam, mas podem ser limitantes se tentar fazer algo personalizado que o framework não foi projetado para suportar. Às vezes, um framework pode também simplificar demais, o que pode levar a não aprender um tópico importante que, mais tarde, pode prejudicar o desempenho, por exemplo.

De forma geral, use a ferramenta certa para o trabalho.

## Introdução

Nesta lição, vamos aprender a:

- Usar um framework de IA comum.
- Resolver problemas comuns como conversas de chat, uso de ferramentas, memória e contexto.
- Aproveitar isso para construir aplicações de IA.

## Primeiro prompt

No nosso primeiro exemplo de aplicação, vamos aprender como conectar a um modelo de IA e consultá-lo usando um prompt.

### Usando Python

Para este exemplo, vamos usar Langchain para conectar aos Modelos do GitHub. Podemos usar uma classe chamada `ChatOpenAI` e fornecer os campos `api_key`, `base_url` e `model`. O token é algo que é automaticamente preenchido no GitHub Codespaces e, se estiver a executar a aplicação localmente, precisará configurar um token de acesso pessoal para que funcione.

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

Neste código, nós:

- Chamamos `ChatOpenAI` para criar um cliente.
- Usamos `llm.invoke` com um prompt para criar uma resposta.
- Imprimimos a resposta com `print(response.content)`.

Deverá ver uma resposta semelhante a:

```text
The capital of France is Paris.
```

## Conversa de chat

Na secção anterior, viu como usamos o que normalmente é conhecido como zero shot prompting, um único prompt seguido de uma resposta.

No entanto, muitas vezes encontra-se numa situação em que precisa de manter uma conversa com várias mensagens trocadas entre si e o assistente de IA.

### Usando Python

No Langchain, podemos armazenar a conversa numa lista. A `HumanMessage` representa uma mensagem de um utilizador, e a `SystemMessage` é uma mensagem destinada a definir a "personalidade" da IA. No exemplo abaixo, vê como instruímos a IA a assumir a personalidade do Capitão Picard e para o humano/utilizador perguntar "Fala-me sobre ti" como o prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

O código completo para este exemplo é o seguinte:

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

Deverá ver um resultado semelhante a:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Para manter o estado da conversa, pode adicionar a resposta de um chat, para que a conversa seja lembrada. Aqui está como fazer isso:

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

O que podemos ver na conversa acima é como invocamos o LLM duas vezes, primeiro com a conversa consistindo apenas de duas mensagens, mas depois uma segunda vez com mais mensagens adicionadas à conversa.

De facto, se executar isto, verá que a segunda resposta será algo como:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Vou interpretar isso como um "talvez" ;)

## Respostas em streaming

TODO

## Modelos de prompts

TODO

## Saída estruturada

TODO

## Chamada de ferramentas

As ferramentas são como damos habilidades extras ao LLM. A ideia é informar o LLM sobre funções que ele possui e, se for feito um prompt que corresponda à descrição de uma dessas ferramentas, então chamamo-las.

### Usando Python

Vamos adicionar algumas ferramentas como segue:

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

O que estamos a fazer aqui é criar uma descrição de uma ferramenta chamada `add`. Ao herdar de `TypedDict` e adicionar membros como `a` e `b` do tipo `Annotated`, isto pode ser convertido num esquema que o LLM pode entender. A criação de funções é um dicionário que garante que sabemos o que fazer se uma ferramenta específica for identificada.

Vamos ver como chamamos o LLM com esta ferramenta a seguir:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Aqui chamamos `bind_tools` com o nosso array `tools` e, assim, o LLM `llm_with_tools` agora tem conhecimento desta ferramenta.

Para usar este novo LLM, podemos escrever o seguinte código:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Agora que chamamos `invoke` neste novo LLM, que tem ferramentas, podemos ter a propriedade `tool_calls` preenchida. Se assim for, quaisquer ferramentas identificadas têm uma propriedade `name` e `args` que identifica qual ferramenta deve ser chamada e com quais argumentos. O código completo é o seguinte:

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

Ao executar este código, deverá ver uma saída semelhante a:

```text
TOOL CALL:  15
CONTENT: 
```

O que esta saída significa é que o LLM analisou o prompt "Quanto é 3 + 12" como significando que a ferramenta `add` deve ser chamada e soube disso graças ao seu nome, descrição e descrições dos campos dos membros. Que a resposta é 15 deve-se ao nosso código usar o dicionário `functions` para invocá-lo:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Uma ferramenta mais interessante que chama uma API web

Ferramentas que somam dois números são interessantes, pois ilustram como funciona a chamada de ferramentas, mas geralmente as ferramentas tendem a fazer algo mais interessante, como, por exemplo, chamar uma API web. Vamos fazer isso com este código:

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

Agora, se executar este código, receberá uma resposta dizendo algo como:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Aqui está o código na sua totalidade:

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

Vectorizar conteúdo, comparar via similaridade cosseno.

https://python.langchain.com/docs/how_to/embed_text/

### Carregadores de documentos

PDF e CSV.

## Construir uma aplicação

TODO

## Tarefa

## Resumo

---

**Aviso**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.