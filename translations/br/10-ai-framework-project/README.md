<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:24:57+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "br"
}
-->
# Framework de IA

Existem muitos frameworks de IA disponíveis que, quando utilizados, podem acelerar significativamente o tempo necessário para construir um projeto. Neste projeto, vamos focar em entender quais problemas esses frameworks resolvem e construir um projeto desse tipo por conta própria.

## Por que usar um framework

Quando se trata de usar IA, existem diferentes abordagens e razões para escolher essas abordagens. Aqui estão algumas delas:

- **Sem SDK**: A maioria dos modelos de IA permite que você interaja diretamente com o modelo via, por exemplo, requisições HTTP. Essa abordagem funciona e pode, às vezes, ser sua única opção se não houver um SDK disponível.
- **SDK**: Usar um SDK geralmente é a abordagem recomendada, pois permite que você escreva menos código para interagir com seu modelo. Normalmente, é limitado a um modelo específico e, se você usar diferentes modelos, pode precisar escrever novo código para suportar esses modelos adicionais.
- **Um framework**: Um framework geralmente leva as coisas a outro nível, no sentido de que, se você precisar usar diferentes modelos, há uma API única para todos eles; o que muda geralmente é a configuração inicial. Além disso, frameworks trazem abstrações úteis, como ferramentas, memória, fluxos de trabalho, agentes e mais, enquanto você escreve menos código. Como frameworks geralmente são opinativos, eles podem ser muito úteis se você aceitar a forma como eles funcionam, mas podem ser insuficientes se você tentar fazer algo personalizado que o framework não foi projetado para fazer. Às vezes, um framework também pode simplificar demais, e você pode não aprender um tópico importante que, mais tarde, pode prejudicar o desempenho, por exemplo.

De forma geral, use a ferramenta certa para o trabalho.

## Introdução

Nesta lição, vamos aprender a:

- Usar um framework de IA comum.
- Resolver problemas comuns como conversas de chat, uso de ferramentas, memória e contexto.
- Aproveitar isso para construir aplicativos de IA.

## Primeiro prompt

No nosso primeiro exemplo de aplicativo, vamos aprender como conectar a um modelo de IA e consultá-lo usando um prompt.

### Usando Python

Para este exemplo, usaremos Langchain para conectar aos modelos do GitHub. Podemos usar uma classe chamada `ChatOpenAI` e fornecer os campos `api_key`, `base_url` e `model`. O token é algo que é automaticamente preenchido dentro do GitHub Codespaces e, se você estiver executando o aplicativo localmente, precisará configurar um token de acesso pessoal para que isso funcione.

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

Você deve ver uma resposta semelhante a:

```text
The capital of France is Paris.
```

## Conversa de chat

Na seção anterior, você viu como usamos o que normalmente é conhecido como "zero shot prompting", um único prompt seguido por uma resposta.

No entanto, frequentemente você se encontra em uma situação onde precisa manter uma conversa com várias mensagens sendo trocadas entre você e o assistente de IA.

### Usando Python

No Langchain, podemos armazenar a conversa em uma lista. A `HumanMessage` representa uma mensagem de um usuário, e `SystemMessage` é uma mensagem destinada a definir a "personalidade" da IA. No exemplo abaixo, você verá como instruímos a IA a assumir a personalidade do Capitão Picard e o humano/usuário a perguntar "Fale sobre você" como o prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

O código completo para este exemplo é assim:

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

Você deve ver um resultado semelhante a:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Para manter o estado da conversa, você pode adicionar a resposta de um chat, para que a conversa seja lembrada. Veja como fazer isso:

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

O que podemos ver na conversa acima é como invocamos o LLM duas vezes, primeiro com a conversa consistindo de apenas duas mensagens, mas depois uma segunda vez com mais mensagens adicionadas à conversa.

Na verdade, se você executar isso, verá a segunda resposta sendo algo como:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Vou interpretar isso como um "talvez" ;)

## Respostas em streaming

TODO

## Templates de prompt

TODO

## Saída estruturada

TODO

## Chamada de ferramentas

Ferramentas são como damos habilidades extras ao LLM. A ideia é informar ao LLM sobre funções que ele possui e, se um prompt for feito que corresponda à descrição de uma dessas ferramentas, então as chamamos.

### Usando Python

Vamos adicionar algumas ferramentas assim:

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

O que estamos fazendo aqui é criar uma descrição de uma ferramenta chamada `add`. Ao herdar de `TypedDict` e adicionar membros como `a` e `b` do tipo `Annotated`, isso pode ser convertido em um esquema que o LLM pode entender. A criação de funções é um dicionário que garante que sabemos o que fazer se uma ferramenta específica for identificada.

Vamos ver como chamamos o LLM com esta ferramenta a seguir:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Aqui chamamos `bind_tools` com nosso array `tools` e, assim, o LLM `llm_with_tools` agora tem conhecimento dessa ferramenta.

Para usar este novo LLM, podemos digitar o seguinte código:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Agora que chamamos `invoke` neste novo LLM, que possui ferramentas, talvez a propriedade `tool_calls` seja preenchida. Se for o caso, qualquer ferramenta identificada terá uma propriedade `name` e `args` que identifica qual ferramenta deve ser chamada e com quais argumentos. O código completo é assim:

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

Executando este código, você deve ver uma saída semelhante a:

```text
TOOL CALL:  15
CONTENT: 
```

O que esta saída significa é que o LLM analisou o prompt "Qual é 3 + 12" como significando que a ferramenta `add` deveria ser chamada, e ele sabia disso graças ao seu nome, descrição e descrições dos campos dos membros. Que a resposta é 15 é porque nosso código usou o dicionário `functions` para invocá-lo:

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

Agora, se você executar este código, receberá uma resposta dizendo algo como:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Aqui está o código na íntegra:

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

PDF e CSV

## Construindo um aplicativo

TODO

## Tarefa

## Resumo

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante estar ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.