<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:22:02+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ja"
}
-->
# AIフレームワーク

AIフレームワークは数多く存在し、それらを使用することでプロジェクトの構築時間を大幅に短縮することができます。このプロジェクトでは、これらのフレームワークが解決する問題を理解し、自分たちでそのようなプロジェクトを構築することに焦点を当てます。

## フレームワークを使う理由

AIを使用する際には、さまざまなアプローチがあり、それを選ぶ理由も異なります。以下はその例です：

- **SDKなし**: 多くのAIモデルは、例えばHTTPリクエストを介して直接モデルとやり取りすることを可能にします。このアプローチは機能しますが、SDKオプションがない場合には唯一の選択肢となることがあります。
- **SDK**: SDKを使用することは通常推奨されるアプローチです。モデルとやり取りするためのコード量を減らすことができます。ただし、特定のモデルに限定されることが多く、異なるモデルを使用する場合には追加のコードを書く必要があるかもしれません。
- **フレームワーク**: フレームワークは通常、さらに高いレベルの抽象化を提供します。異なるモデルを使用する場合でも、すべてのモデルに対して1つのAPIを使用できることが多く、違いは初期設定に限られることが一般的です。さらに、フレームワークはツール、メモリ、ワークフロー、エージェントなどを扱う便利な抽象化を提供し、コード量を減らすことができます。ただし、フレームワークは意見が強い場合があり、その方法に従うことで大いに役立つことがありますが、フレームワークが対応していない独自の方法を試みると失敗することがあります。また、フレームワークが簡略化しすぎる場合があり、その結果、重要なトピックを学ばずに後でパフォーマンスに悪影響を及ぼす可能性があります。

一般的に、適切なツールを選ぶことが重要です。

## はじめに

このレッスンでは以下を学びます：

- 一般的なAIフレームワークの使用方法
- チャット会話、ツールの使用、メモリとコンテキストなどの一般的な問題への対処
- これを活用してAIアプリを構築する方法

## 最初のプロンプト

最初のアプリ例では、AIモデルに接続し、プロンプトを使用してクエリを実行する方法を学びます。

### Pythonを使用する

この例では、Langchainを使用してGitHubモデルに接続します。`ChatOpenAI`というクラスを使用し、`api_key`、`base_url`、`model`のフィールドを指定します。トークンはGitHub Codespaces内で自動的に設定されますが、ローカルでアプリを実行する場合は、個人アクセストークンを設定する必要があります。

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

このコードでは以下を行います：

- `ChatOpenAI`を呼び出してクライアントを作成
- プロンプトを使用して`llm.invoke`を呼び出し、レスポンスを生成
- `print(response.content)`でレスポンスを出力

以下のようなレスポンスが表示されるはずです：

```text
The capital of France is Paris.
```

## チャット会話

前のセクションでは、通常「ゼロショットプロンプティング」と呼ばれる単一のプロンプトとレスポンスを使用する方法を見ました。

しかし、多くの場合、AIアシスタントとの複数のメッセージを交換する会話を維持する必要があります。

### Pythonを使用する

Langchainでは、会話をリストに保存することができます。`HumanMessage`はユーザーからのメッセージを表し、`SystemMessage`はAIの「性格」を設定するためのメッセージです。以下の例では、AIにキャプテン・ピカードの性格を持たせ、ユーザーが「あなたについて教えて」と尋ねるプロンプトを設定しています。

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

この例の完全なコードは以下のようになります：

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

以下のような結果が表示されるはずです：

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

会話の状態を保持するためには、チャットからのレスポンスを追加して会話を記憶させることができます。以下はその方法です：

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

上記の会話からわかるのは、最初に2つのメッセージだけで会話を構成し、次に会話にさらにメッセージを追加してLLMを2回呼び出していることです。

実際にこれを実行すると、2回目のレスポンスは以下のようなものになるでしょう：

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

それは「多分」ということでしょうね ;)

## ストリーミングレスポンス

TODO

## プロンプトテンプレート

TODO

## 構造化された出力

TODO

## ツールの呼び出し

ツールはLLMに追加のスキルを与える方法です。アイデアは、LLMに関数について教え、プロンプトがこれらのツールの説明に一致する場合にそれらを呼び出すことです。

### Pythonを使用する

以下のようにツールを追加してみましょう：

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

ここでは、`add`というツールの説明を作成しています。`TypedDict`を継承し、`a`や`b`のような`Annotated`型のメンバーを追加することで、LLMが理解できるスキーマに変換できます。関数の作成は辞書を使用しており、特定のツールが識別された場合に何をすべきかを定義しています。

次に、このツールを使用してLLMを呼び出す方法を見てみましょう：

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

ここでは、`tools`配列を`bind_tools`に渡すことで、LLM `llm_with_tools`がこのツールを認識するようになります。

この新しいLLMを使用するには、以下のコードを入力します：

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

この新しいLLMで`invoke`を呼び出すと、`tool_calls`プロパティが設定される可能性があります。その場合、識別されたツールには`name`と`args`プロパティがあり、どのツールをどの引数で呼び出すべきかが識別されます。完全なコードは以下のようになります：

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

このコードを実行すると、以下のような出力が表示されるはずです：

```text
TOOL CALL:  15
CONTENT: 
```

この出力が意味するのは、LLMがプロンプト「3 + 12は何ですか」を`add`ツールを呼び出すべきだと分析したことです。それはツールの名前、説明、メンバーフィールドの説明のおかげです。答えが15であるのは、辞書`functions`を使用してそれを呼び出したためです：

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Web APIを呼び出すより興味深いツール

2つの数字を加算するツールは、ツール呼び出しの仕組みを示すために興味深いですが、通常ツールはより興味深いことを行います。例えば、Web APIを呼び出すことです。以下のコードでそれを試してみましょう：

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

このコードを実行すると、以下のようなレスポンスが表示されるはずです：

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

以下はコード全体です：

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

## 埋め込み

コンテンツをベクトル化し、コサイン類似度で比較

https://python.langchain.com/docs/how_to/embed_text/

### ドキュメントローダー

PDFとCSV

## アプリの構築

TODO

## 課題

## まとめ

---

**免責事項**:  
この文書は、AI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。