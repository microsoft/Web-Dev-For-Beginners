<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:18:42+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "en"
}
-->
# AI Framework

There are many AI frameworks available that can significantly speed up the process of building a project. In this project, we will focus on understanding the problems these frameworks address and create such a project ourselves.

## Why use a framework

When working with AI, there are different approaches and reasons for choosing them. Here are some:

- **No SDK**: Most AI models allow you to interact directly with the model, for example, via HTTP requests. This approach works and may sometimes be your only option if an SDK is unavailable.
- **SDK**: Using an SDK is usually the recommended approach as it requires less code to interact with your model. However, it is often limited to a specific model, and if you use different models, you might need to write new code to support those additional models.
- **A framework**: A framework typically takes things to the next level by providing a unified API for interacting with different models, with differences usually limited to the initial setup. Frameworks also offer useful abstractions, such as tools, memory, workflows, agents, and more, while requiring less code. Because frameworks are often opinionated, they can be very helpful if you align with their approach, but they may fall short if you need to implement something custom that the framework isn't designed for. Additionally, frameworks can sometimes oversimplify things, which might prevent you from learning important concepts that could later impact performance.

In general, use the right tool for the job.

## Introduction

In this lesson, we'll learn to:

- Use a common AI framework.
- Address common challenges like chat conversations, tool usage, memory, and context.
- Leverage these capabilities to build AI applications.

## First prompt

In our first app example, we'll learn how to connect to an AI model and query it using a prompt.

### Using Python

For this example, we'll use Langchain to connect to GitHub Models. We can use a class called `ChatOpenAI` and provide it with the fields `api_key`, `base_url`, and `model`. The token is automatically populated within GitHub Codespaces, but if you're running the app locally, you'll need to set up a personal access token for this to work.

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

In this code, we:

- Call `ChatOpenAI` to create a client.
- Use `llm.invoke` with a prompt to generate a response.
- Print the response using `print(response.content)`.

You should see a response similar to:

```text
The capital of France is Paris.
```

## Chat conversation

In the previous section, we used what's commonly known as zero-shot prompting—a single prompt followed by a response.

However, you may often find yourself in situations where you need to maintain a conversation involving multiple exchanges between you and the AI assistant.

### Using Python

In Langchain, we can store the conversation in a list. The `HumanMessage` represents a message from the user, and `SystemMessage` is a message meant to set the "personality" of the AI. In the example below, we instruct the AI to take on the personality of Captain Picard, and the user asks, "Tell me about you" as the prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

The full code for this example looks like this:

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

You should see an output similar to:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

To maintain the state of the conversation, you can add the response from the chat so the conversation is remembered. Here's how to do that:

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

From the above conversation, we can see how the LLM is invoked twice—first with a conversation consisting of just two messages, and then a second time with additional messages added to the conversation.

If you run this, you'll see the second response being something like:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

I'll take that as a maybe ;)

## Streaming responses

TODO

## Prompt templates

TODO

## Structured output

TODO

## Tool calling

Tools allow us to give the LLM additional capabilities. The idea is to inform the LLM about available functions, and if a prompt matches the description of one of these tools, the tool is invoked.

### Using Python

Let's add some tools like this:

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

Here, we create a description of a tool called `add`. By inheriting from `TypedDict` and adding members like `a` and `b` of type `Annotated`, this can be converted into a schema that the LLM can understand. The creation of functions is managed through a dictionary that ensures we know what to do if a specific tool is identified.

Next, let's see how we call the LLM with this tool:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Here, we use `bind_tools` with our `tools` array, enabling the LLM `llm_with_tools` to recognize this tool.

To use this new LLM, we can write the following code:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

When we call `invoke` on this new LLM that has tools, the property `tool_calls` may be populated. If so, any identified tools will have a `name` and `args` property that specifies which tool should be called and with what arguments. The full code looks like this:

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

Running this code, you should see output similar to:

```text
TOOL CALL:  15
CONTENT: 
```

This output indicates that the LLM interpreted the prompt "What is 3 + 12" as requiring the `add` tool, based on its name, description, and member field descriptions. The answer, 15, is derived from our code using the dictionary `functions` to invoke it:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### A more interesting tool that calls a web API

While tools that add two numbers are useful for illustrating how tool calling works, tools often perform more complex tasks, such as calling a web API. Let's implement that with this code:

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

Running this code will produce a response similar to:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Here's the complete code:

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

Vectorize content and compare using cosine similarity.

https://python.langchain.com/docs/how_to/embed_text/

### Document loaders

PDF and CSV

## Building an app

TODO

## Assignment

## Summary

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.