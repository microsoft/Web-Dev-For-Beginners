# AI Framework

There are many AI frameworks out there that when used can severely quicken up the time it takes to build a project. In this project we will focus on understanding what problems these frameworks address and build such a project ourselves.

## Why a framework

When it comes to using AI there are different approaches and different reasons for choosing these approaches, here are some:

- **No SDK**, most AI models allows you to interact directly with the AI model via for example HTTP requests. That approach works and may sometimes be your only option if an SDK option is missing. 
- **SDK**. Using an SDK is usually the recommended approach as it allows you to type less code to interact with your model. It usually is limited to a specific model and if using different models, you might need to write new code to support those additional models.
- **A framework**. A framework usually takes things to another level in the sense that if you need to use different models, there's one API for all of them, what differs is usually the initial set up. Additionally frameworks brings in useful abstractions like in the AI space, they can deal with tools, memory, workflows, agents and more while writing less code. Because frameworks are usually opinionated they can really be helpful if you buy into how they do things but may fall short if you try to do something bespoke that the framework isn't made for. Sometimes a framework can also simplify too much and you may therefore not learn an important topic that later may harm performance for example. 

Generally, use the right tool for the job.

## Introduction

In this lesson, we'll learn to:

- Use a common AI framework.
- Address common problems like chat conversations, tool usage, memory and context.
- Leverage this to build AI apps.

## First prompt

In our first app example, we'll learn how to connect to an AI model and query it using a prompt. 

### Using Python

For this example, we'll use Langchain to connect to GitHub Models.  We can use a class called `ChatOpenAI` and give it the fields `api_key`, `base_url` and `model`. The token is something that automatically is populated within GitHub Codespaces and if you're running the app locally, you need to set up a personal access token for this to work.

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
- Use `llm.invoke` with a prompt to create a response
- Print the response with `print(response.content)`.

You should see a response similar to:

```text
The capital of France is Paris.
```

## Chat conversation

In the preceding section, you saw how we used what's normally known as zero shot prompting, a single prompt followed by a response. 

However, often you find yourself in a situation where you need to maintain a conversation of several messages being exchanged between yourself and the AI assistant.

### Using Python

In langchain, we can store the conversation in a list. The `HumanMessage` represents a message from a user, and `SystemMessage` is a message meant to set the "personality" of the AI. In below example you see how we instruct the AI to assume the personality of Captain Picard and for the human/user to ask "Tell me about you" as the prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

The full code for this example looks like so:

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
    SystemMessage(content="You are Captain Picard of the Startship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

You should see an outcome similar to:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

To keep the state of the conversation, you can add the response from a chat, so conversation is remembered, here's how to do that:

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
    SystemMessage(content="You are Captain Picard of the Startship Enterprise"),
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

What we can see from the above conversation is how we invoke the LLM two times, first with the conversation consisting of just two messages but then a second time with more messages added to the conversation. 

In fact, if you run this, you will see the second response being something like:

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

Tools are how we give the LLM extra skills. The idea is to tell the LLM about functions it has and if a prompt is made that matches the description of one of these tools then we call them. 

### Using Python

Let's add some tools like so:

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

What we're doing here is to create a description of a tool called `add`. By inheriting from `TypedDict` and adding members like `a` and `b` of type `Annotated` this can be converted to a schema that the LLM can understand. Ther creation of functions is a dictionary that ensures that we know what to do if a specific tool is identified.

Let's see how we call the LLM with this tool next:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Here we call `bind_tools` with our `tools` array and thereby the LLM `llm_with_tools` now has knowledge of this tool.

To use this new LLM, we can type the following code:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](**tool["args"]))
print("CONTENT: ",res.content)
```

Now that we call `invoke` on this new llm, that has tools, we maybe the the property `tool_calls` populated. If so, any identified tools has a `name` and `args` property that identifies what tool should be called and with arguments. The full code looks like so:

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
        print("TOOL CALL: ", functions[tool["name"]](**tool["args"]))
print("CONTENT: ",res.content)
```

Running this coode, you should see output similar to:

```text
TOOL CALL:  15
CONTENT: 
```

What this output mean is that the LLM analyzed the prompt "What is 3 + 12" as meaning that the `add` tool should be called and it knew that thanks to its name, description and member field descriptions. That the answer is 15 is because of our code using the dictionary `functions` to invoke it:

```python
print("TOOL CALL: ", functions[tool["name"]](**tool["args"]))
```

### A more interesting tool that calls a web api

Tools that adds two numbers is interesting as it illustrates how tool calling works but usually tools tend to do something more interesting like for example calling a Web API, let's do just that with this code:

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

Now if you run this code you will get a response saying something like:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Here's the code in its entirety:

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
        print("TOOL CALL: ", functions[tool["name"]](**tool["args"]))
print("CONTENT: ",res.content)
```

## Embedding

vectorize content, compare via cosine similarity

https://python.langchain.com/docs/how_to/embed_text/

### document loaders

pdf and csv

## Building an app

TODO

## Assignment

## Summary
