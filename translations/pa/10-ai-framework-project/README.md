<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:24:00+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "pa"
}
-->
# AI ਫਰੇਮਵਰਕ

ਬਹੁਤ ਸਾਰੇ AI ਫਰੇਮਵਰਕ ਮੌਜੂਦ ਹਨ ਜੋ ਪ੍ਰੋਜੈਕਟ ਬਣਾਉਣ ਦੇ ਸਮੇਂ ਨੂੰ ਕਾਫ਼ੀ ਘਟਾ ਸਕਦੇ ਹਨ। ਇਸ ਪ੍ਰੋਜੈਕਟ ਵਿੱਚ ਅਸੀਂ ਸਮਝਾਂਗੇ ਕਿ ਇਹ ਫਰੇਮਵਰਕ ਕਿਹੜੀਆਂ ਸਮੱਸਿਆਵਾਂ ਦਾ ਹੱਲ ਕਰਦੇ ਹਨ ਅਤੇ ਖੁਦ ਇੱਕ ਪ੍ਰੋਜੈਕਟ ਬਣਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਾਂਗੇ।

## ਫਰੇਮਵਰਕ ਕਿਉਂ?

AI ਵਰਤਣ ਦੇ ਮਾਮਲੇ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਤਰੀਕੇ ਅਤੇ ਕਾਰਨ ਹੁੰਦੇ ਹਨ। ਇੱਥੇ ਕੁਝ ਹਨ:

- **ਕੋਈ SDK ਨਹੀਂ**, ਜ਼ਿਆਦਾਤਰ AI ਮਾਡਲ ਤੁਹਾਨੂੰ HTTP ਰਿਕਵੈਸਟ ਜਿਵੇਂ ਤਰੀਕਿਆਂ ਰਾਹੀਂ ਮਾਡਲ ਨਾਲ ਸਿੱਧਾ ਇੰਟਰੈਕਟ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦੇ ਹਨ। ਇਹ ਤਰੀਕਾ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਕਈ ਵਾਰ ਜਦੋਂ SDK ਦਾ ਵਿਕਲਪ ਨਹੀਂ ਹੁੰਦਾ, ਇਹ ਤੁਹਾਡਾ ਇਕੋ ਵਿਕਲਪ ਹੋ ਸਕਦਾ ਹੈ।
- **SDK**। SDK ਵਰਤਣਾ ਆਮ ਤੌਰ 'ਤੇ ਸਿਫਾਰਸ਼ੀ ਤਰੀਕਾ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਮਾਡਲ ਨਾਲ ਇੰਟਰੈਕਟ ਕਰਨ ਲਈ ਘੱਟ ਕੋਡ ਲਿਖਣ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ। ਇਹ ਆਮ ਤੌਰ 'ਤੇ ਕਿਸੇ ਖਾਸ ਮਾਡਲ ਤੱਕ ਸੀਮਿਤ ਹੁੰਦਾ ਹੈ ਅਤੇ ਜੇਕਰ ਵੱਖ-ਵੱਖ ਮਾਡਲ ਵਰਤਣੇ ਹੋਣ ਤਾਂ ਤੁਹਾਨੂੰ ਉਹਨਾਂ ਲਈ ਨਵਾਂ ਕੋਡ ਲਿਖਣਾ ਪਵੇਗਾ।
- **ਫਰੇਮਵਰਕ**। ਫਰੇਮਵਰਕ ਆਮ ਤੌਰ 'ਤੇ ਚੀਜ਼ਾਂ ਨੂੰ ਇੱਕ ਹੋਰ ਪੱਧਰ 'ਤੇ ਲੈ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ ਤੁਹਾਨੂੰ ਵੱਖ-ਵੱਖ ਮਾਡਲ ਵਰਤਣੇ ਹੋਣ ਤਾਂ ਇੱਕ API ਸਾਰੇ ਲਈ ਹੁੰਦੀ ਹੈ, ਫਰਕ ਸਿਰਫ਼ ਸ਼ੁਰੂਆਤੀ ਸੈਟਅੱਪ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਇਸ ਤੋਂ ਇਲਾਵਾ, ਫਰੇਮਵਰਕ ਵਰਤਣ ਨਾਲ ਟੂਲ, ਮੈਮੋਰੀ, ਵਰਕਫਲੋਜ਼, ਏਜੰਟ ਆਦਿ ਵਰਗੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਸੰਭਾਲਣ ਲਈ ਸਹੂਲਤ ਮਿਲਦੀ ਹੈ। ਫਰੇਮਵਰਕ ਆਮ ਤੌਰ 'ਤੇ ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ ਕੰਮ ਕਰਦੇ ਹਨ, ਜੋ ਕਿ ਸਹਾਇਕ ਹੋ ਸਕਦੇ ਹਨ ਜੇਕਰ ਤੁਸੀਂ ਉਹਨਾਂ ਦੇ ਤਰੀਕੇ ਨੂੰ ਪਸੰਦ ਕਰਦੇ ਹੋ। ਪਰ ਜੇਕਰ ਤੁਸੀਂ ਕੁਝ ਅਜਿਹਾ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹੋ ਜੋ ਫਰੇਮਵਰਕ ਲਈ ਨਹੀਂ ਬਣਾਇਆ ਗਿਆ, ਤਾਂ ਇਹ ਘਾਟਾ ਕਰ ਸਕਦਾ ਹੈ। ਕਈ ਵਾਰ ਫਰੇਮਵਰਕ ਚੀਜ਼ਾਂ ਨੂੰ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਧਾਰਨ ਕਰ ਦਿੰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਕੋਈ ਮਹੱਤਵਪੂਰਨ ਵਿਸ਼ਾ ਨਹੀਂ ਸਿੱਖਦੇ ਜੋ ਬਾਅਦ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾ ਸਕਦਾ ਹੈ।

ਸਧਾਰਨ ਤੌਰ 'ਤੇ, ਕੰਮ ਲਈ ਸਹੀ ਟੂਲ ਦੀ ਵਰਤੋਂ ਕਰੋ।

## ਪਰਿਚਯ

ਇਸ ਪਾਠ ਵਿੱਚ, ਅਸੀਂ ਸਿੱਖਾਂਗੇ:

- ਇੱਕ ਆਮ AI ਫਰੇਮਵਰਕ ਦੀ ਵਰਤੋਂ ਕਰਨਾ।
- ਗੱਲਬਾਤ, ਟੂਲ ਵਰਤੋਂ, ਮੈਮੋਰੀ ਅਤੇ ਸੰਦਰਭ ਵਰਗੀਆਂ ਆਮ ਸਮੱਸਿਆਵਾਂ ਦਾ ਹੱਲ ਕਰਨਾ।
- ਇਸਨੂੰ ਵਰਤ ਕੇ AI ਐਪਸ ਬਣਾਉਣਾ।

## ਪਹਿਲਾ ਪ੍ਰੋੰਪਟ

ਸਾਡੇ ਪਹਿਲੇ ਐਪ ਉਦਾਹਰਨ ਵਿੱਚ, ਅਸੀਂ ਸਿੱਖਾਂਗੇ ਕਿ AI ਮਾਡਲ ਨਾਲ ਕਿਵੇਂ ਜੁੜਨਾ ਹੈ ਅਤੇ ਇੱਕ ਪ੍ਰੋੰਪਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇਸਨੂੰ ਕਿਵੇਂ ਪੁੱਛਣਾ ਹੈ।

### ਪਾਇਥਨ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ

ਇਸ ਉਦਾਹਰਨ ਲਈ, ਅਸੀਂ Langchain ਦੀ ਵਰਤੋਂ ਕਰਕੇ GitHub ਮਾਡਲ ਨਾਲ ਜੁੜਾਂਗੇ। ਅਸੀਂ `ChatOpenAI` ਕਲਾਸ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ ਅਤੇ ਇਸਨੂੰ `api_key`, `base_url` ਅਤੇ `model` ਦੇ ਖੇਤਰ ਦੇਵਾਂਗੇ। ਟੋਕਨ ਕੁਦਰਤੀ ਤੌਰ 'ਤੇ GitHub Codespaces ਵਿੱਚ ਭਰਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜੇਕਰ ਤੁਸੀਂ ਐਪ ਨੂੰ ਲੋਕਲ ਤੌਰ 'ਤੇ ਚਲਾ ਰਹੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਇਸ ਲਈ ਇੱਕ ਪੈਰਸਨਲ ਐਕਸੈਸ ਟੋਕਨ ਸੈਟਅੱਪ ਕਰਨਾ ਪਵੇਗਾ।

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

ਇਸ ਕੋਡ ਵਿੱਚ, ਅਸੀਂ:

- `ChatOpenAI` ਨੂੰ ਕਾਲ ਕਰਕੇ ਇੱਕ ਕਲਾਇੰਟ ਬਣਾਇਆ।
- ਇੱਕ ਪ੍ਰੋੰਪਟ ਨਾਲ `llm.invoke` ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ ਜਵਾਬ ਬਣਾਇਆ।
- `print(response.content)` ਨਾਲ ਜਵਾਬ ਪ੍ਰਿੰਟ ਕੀਤਾ।

ਤੁਹਾਨੂੰ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਾ ਜਵਾਬ ਦੇਖਣ ਨੂੰ ਮਿਲੇਗਾ:

```text
The capital of France is Paris.
```

## ਗੱਲਬਾਤ

ਪਿਛਲੇ ਹਿੱਸੇ ਵਿੱਚ, ਤੁਸੀਂ ਦੇਖਿਆ ਕਿ ਅਸੀਂ ਕਿਵੇਂ ਇੱਕ ਸਿੰਗਲ ਪ੍ਰੋੰਪਟ ਦੇ ਜਵਾਬ ਦੇ ਤੌਰ 'ਤੇ ਜ਼ੀਰੋ ਸ਼ਾਟ ਪ੍ਰੋੰਪਟਿੰਗ ਦੀ ਵਰਤੋਂ ਕੀਤੀ।

ਹਾਲਾਂਕਿ, ਅਕਸਰ ਤੁਸੀਂ ਆਪਣੇ ਆਪ ਨੂੰ ਇੱਕ ਅਜਿਹੀ ਸਥਿਤੀ ਵਿੱਚ ਪਾਉਂਦੇ ਹੋ ਜਿੱਥੇ ਤੁਹਾਨੂੰ ਆਪਣੇ ਅਤੇ AI ਸਹਾਇਕ ਦੇ ਵਿਚਕਾਰ ਕਈ ਸੁਨੇਹੇ ਅਦਲਾ-ਬਦਲੀ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।

### ਪਾਇਥਨ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ

Langchain ਵਿੱਚ, ਅਸੀਂ ਗੱਲਬਾਤ ਨੂੰ ਇੱਕ ਲਿਸਟ ਵਿੱਚ ਸਟੋਰ ਕਰ ਸਕਦੇ ਹਾਂ। `HumanMessage` ਵਰਤੋਂਕਾਰ ਵੱਲੋਂ ਭੇਜਿਆ ਸੁਨੇਹਾ ਦਰਸਾਉਂਦਾ ਹੈ, ਅਤੇ `SystemMessage` AI ਦੀ "ਪ੍ਰਸਨਲਿਟੀ" ਸੈਟ ਕਰਨ ਲਈ ਸੁਨੇਹਾ ਹੁੰਦਾ ਹੈ। ਹੇਠਾਂ ਦਿੱਤੇ ਉਦਾਹਰਨ ਵਿੱਚ ਤੁਸੀਂ ਦੇਖਦੇ ਹੋ ਕਿ ਅਸੀਂ AI ਨੂੰ ਕੈਪਟਨ ਪਿਕਾਰਡ ਦੀ ਪ੍ਰਸਨਲਿਟੀ ਅਪਣਾਉਣ ਲਈ ਕਿਵੇਂ ਕਹਿੰਦੇ ਹਾਂ ਅਤੇ ਵਰਤੋਂਕਾਰ ਨੂੰ "Tell me about you" ਪੁੱਛਣ ਲਈ ਕਿਵੇਂ ਕਹਿੰਦੇ ਹਾਂ।

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

ਇਸ ਉਦਾਹਰਨ ਦਾ ਪੂਰਾ ਕੋਡ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ:

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

ਤੁਹਾਨੂੰ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਾ ਨਤੀਜਾ ਦੇਖਣ ਨੂੰ ਮਿਲੇਗਾ:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

ਗੱਲਬਾਤ ਦੀ ਸਥਿਤੀ ਨੂੰ ਯਾਦ ਰੱਖਣ ਲਈ, ਤੁਸੀਂ ਗੱਲਬਾਤ ਤੋਂ ਜਵਾਬ ਸ਼ਾਮਲ ਕਰ ਸਕਦੇ ਹੋ, ਤਾਂ ਜੋ ਗੱਲਬਾਤ ਯਾਦ ਰਹੇ। ਇੱਥੇ ਇਹ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:

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

ਉਪਰੋਕਤ ਗੱਲਬਾਤ ਤੋਂ ਅਸੀਂ ਦੇਖ ਸਕਦੇ ਹਾਂ ਕਿ ਅਸੀਂ LLM ਨੂੰ ਦੋ ਵਾਰ ਕਿਵੇਂ ਕਾਲ ਕਰਦੇ ਹਾਂ, ਪਹਿਲੀ ਵਾਰ ਸਿਰਫ਼ ਦੋ ਸੁਨੇਹਿਆਂ ਵਾਲੀ ਗੱਲਬਾਤ ਨਾਲ, ਪਰ ਫਿਰ ਦੂਜੀ ਵਾਰ ਹੋਰ ਸੁਨੇਹੇ ਸ਼ਾਮਲ ਕਰਕੇ। 

ਅਸਲ ਵਿੱਚ, ਜੇਕਰ ਤੁਸੀਂ ਇਹ ਚਲਾਉਂਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਦੂਜਾ ਜਵਾਬ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦੇਖੋਗੇ:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

ਮੈਂ ਇਸਨੂੰ "ਸ਼ਾਇਦ" ਮੰਨ ਲਵਾਂਗਾ ;)

## ਸਟ੍ਰੀਮਿੰਗ ਜਵਾਬ

TODO

## ਪ੍ਰੋੰਪਟ ਟੈਂਪਲੇਟਸ

TODO

## ਸਟ੍ਰਕਚਰਡ ਆਉਟਪੁਟ

TODO

## ਟੂਲ ਕਾਲਿੰਗ

ਟੂਲ ਉਹ ਹਨ ਜਿਨ੍ਹਾਂ ਰਾਹੀਂ ਅਸੀਂ LLM ਨੂੰ ਵਾਧੂ ਕੌਸ਼ਲ ਦਿੰਦੇ ਹਾਂ। ਵਿਚਾਰ ਇਹ ਹੈ ਕਿ LLM ਨੂੰ ਫੰਕਸ਼ਨਜ਼ ਬਾਰੇ ਦੱਸਿਆ ਜਾਵੇ ਅਤੇ ਜੇਕਰ ਕੋਈ ਪ੍ਰੋੰਪਟ ਕਿਸੇ ਟੂਲ ਦੇ ਵੇਰਵੇ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਤਾਂ ਅਸੀਂ ਉਹਨਾਂ ਨੂੰ ਕਾਲ ਕਰਦੇ ਹਾਂ।

### ਪਾਇਥਨ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ

ਆਓ ਕੁਝ ਟੂਲ ਸ਼ਾਮਲ ਕਰੀਏ:

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

ਇੱਥੇ ਅਸੀਂ ਇੱਕ ਟੂਲ `add` ਦਾ ਵੇਰਵਾ ਬਣਾਉਂਦੇ ਹਾਂ। `TypedDict` ਤੋਂ ਵਾਰਸਤ ਲੈ ਕੇ ਅਤੇ `a` ਅਤੇ `b` ਵਰਗੇ ਮੈਂਬਰ ਸ਼ਾਮਲ ਕਰਕੇ, ਜੋ ਕਿ `Annotated` ਕਿਸਮ ਦੇ ਹਨ, ਇਹ ਇੱਕ ਸਕੀਮਾ ਵਿੱਚ ਤਬਦੀਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਜਿਸਨੂੰ LLM ਸਮਝ ਸਕਦਾ ਹੈ। ਫੰਕਸ਼ਨਜ਼ ਦੀ ਰਚਨਾ ਇੱਕ ਡਿਕਸ਼ਨਰੀ ਹੈ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦੀ ਹੈ ਕਿ ਜੇਕਰ ਕੋਈ ਖਾਸ ਟੂਲ ਪਛਾਣਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਕੀ ਕਰਨਾ ਹੈ।

ਆਓ ਅਗਲੇ ਕਦਮ ਵਿੱਚ ਦੇਖੀਏ ਕਿ ਅਸੀਂ ਇਸ ਟੂਲ ਨਾਲ LLM ਨੂੰ ਕਿਵੇਂ ਕਾਲ ਕਰਦੇ ਹਾਂ:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

ਇੱਥੇ ਅਸੀਂ `bind_tools` ਨੂੰ ਆਪਣੇ `tools` ਐਰੇ ਨਾਲ ਕਾਲ ਕਰਦੇ ਹਾਂ ਅਤੇ ਇਸ ਤਰ੍ਹਾਂ LLM `llm_with_tools` ਹੁਣ ਇਸ ਟੂਲ ਬਾਰੇ ਜਾਣਕਾਰੀ ਰੱਖਦਾ ਹੈ।

ਇਸ ਨਵੇਂ LLM ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਅਸੀਂ ਹੇਠਾਂ ਦਿੱਤਾ ਕੋਡ ਲਿਖ ਸਕਦੇ ਹਾਂ:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

ਹੁਣ ਜਦੋਂ ਅਸੀਂ ਇਸ ਨਵੇਂ LLM, ਜਿਸਦੇ ਕੋਲ ਟੂਲ ਹਨ, 'ਤੇ `invoke` ਕਾਲ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਸਾਨੂੰ ਸੰਭਵ ਹੈ ਕਿ `tool_calls` ਪ੍ਰਾਪਰਟੀ ਭਰੀ ਹੋਈ ਮਿਲੇ। ਜੇਕਰ ਐਸਾ ਹੈ, ਤਾਂ ਕੋਈ ਵੀ ਪਛਾਣੇ ਗਏ ਟੂਲ ਵਿੱਚ ਇੱਕ `name` ਅਤੇ `args` ਪ੍ਰਾਪਰਟੀ ਹੁੰਦੀ ਹੈ ਜੋ ਦੱਸਦੀ ਹੈ ਕਿ ਕਿਹੜਾ ਟੂਲ ਕਾਲ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਕਿਹੜੇ ਆਰਗਯੂਮੈਂਟਸ ਨਾਲ। ਪੂਰਾ ਕੋਡ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ:

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

ਇਹ ਕੋਡ ਚਲਾਉਣ 'ਤੇ, ਤੁਹਾਨੂੰ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਾ ਆਉਟਪੁਟ ਦੇਖਣ ਨੂੰ ਮਿਲੇਗਾ:

```text
TOOL CALL:  15
CONTENT: 
```

ਇਸ ਆਉਟਪੁਟ ਦਾ ਮਤਲਬ ਹੈ ਕਿ LLM ਨੇ ਪ੍ਰੋੰਪਟ "What is 3 + 12" ਨੂੰ `add` ਟੂਲ ਕਾਲ ਕਰਨ ਦੇ ਤੌਰ 'ਤੇ ਵਿਵਚਾਰਿਆ ਅਤੇ ਇਸਨੂੰ ਇਸਦੇ ਨਾਮ, ਵੇਰਵੇ ਅਤੇ ਮੈਂਬਰ ਫੀਲਡ ਵੇਰਵਿਆਂ ਦੀ ਬਦੌਲਤ ਪਛਾਣਿਆ। ਜਵਾਬ 15 ਹੈ ਕਿਉਂਕਿ ਸਾਡਾ ਕੋਡ ਡਿਕਸ਼ਨਰੀ `functions` ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ ਇਸਨੂੰ ਕਾਲ ਕਰਨ ਲਈ:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### ਇੱਕ ਹੋਰ ਦਿਲਚਸਪ ਟੂਲ ਜੋ ਵੈੱਬ API ਕਾਲ ਕਰਦਾ ਹੈ

ਜੋੜਨ ਵਾਲੇ ਟੂਲ ਦਿਲਚਸਪ ਹਨ ਕਿਉਂਕਿ ਇਹ ਦਿਖਾਉਂਦੇ ਹਨ ਕਿ ਟੂਲ ਕਾਲਿੰਗ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ, ਪਰ ਆਮ ਤੌਰ 'ਤੇ ਟੂਲ ਕੁਝ ਹੋਰ ਦਿਲਚਸਪ ਕਰਦੇ ਹਨ ਜਿਵੇਂ ਕਿ ਵੈੱਬ API ਕਾਲ ਕਰਨਾ। ਆਓ ਇਸ ਕੋਡ ਨਾਲ ਇਹ ਕਰੀਏ:

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

ਹੁਣ ਜੇਕਰ ਤੁਸੀਂ ਇਹ ਕੋਡ ਚਲਾਉਂਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਕੁਝ ਇਸ ਤਰ੍ਹਾਂ ਦਾ ਜਵਾਬ ਮਿਲੇਗਾ:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

ਇੱਥੇ ਪੂਰਾ ਕੋਡ ਹੈ:

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

## ਐਮਬੈਡਿੰਗ

ਸਮੱਗਰੀ ਨੂੰ ਵੈਕਟਰਾਈਜ਼ ਕਰੋ, ਕੋਸਾਈਨ ਸਿਮਿਲਾਰਿਟੀ ਰਾਹੀਂ ਤੁਲਨਾ ਕਰੋ।

https://python.langchain.com/docs/how_to/embed_text/

### ਡੌਕਯੂਮੈਂਟ ਲੋਡਰਜ਼

PDF ਅਤੇ CSV

## ਐਪ ਬਣਾਉਣਾ

TODO

## ਅਸਾਈਨਮੈਂਟ

## ਸਾਰांश

---

**ਅਸਵੀਕਰਤੀ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁਚੀਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਇਸ ਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤ ਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।