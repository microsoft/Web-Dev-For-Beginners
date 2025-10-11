<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:28:48+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "vi"
}
-->
# Khung AI

Có rất nhiều khung AI hiện nay có thể giúp tăng tốc đáng kể thời gian xây dựng một dự án. Trong dự án này, chúng ta sẽ tập trung vào việc hiểu các vấn đề mà các khung này giải quyết và tự xây dựng một dự án như vậy.

## Tại sao cần khung

Khi sử dụng AI, có nhiều cách tiếp cận khác nhau và lý do để chọn các cách tiếp cận này, dưới đây là một số:

- **Không dùng SDK**, hầu hết các mô hình AI cho phép bạn tương tác trực tiếp với mô hình AI thông qua, ví dụ, các yêu cầu HTTP. Cách tiếp cận này hoạt động và đôi khi có thể là lựa chọn duy nhất nếu không có tùy chọn SDK.
- **SDK**. Sử dụng SDK thường là cách được khuyến nghị vì nó cho phép bạn viết ít mã hơn để tương tác với mô hình của mình. SDK thường bị giới hạn cho một mô hình cụ thể và nếu sử dụng các mô hình khác nhau, bạn có thể cần viết mã mới để hỗ trợ các mô hình bổ sung đó.
- **Khung**. Một khung thường đưa mọi thứ lên một cấp độ khác, theo nghĩa rằng nếu bạn cần sử dụng các mô hình khác nhau, chỉ cần một API cho tất cả, điều khác biệt thường là thiết lập ban đầu. Ngoài ra, các khung mang lại các trừu tượng hữu ích như trong lĩnh vực AI, chúng có thể xử lý công cụ, bộ nhớ, quy trình làm việc, tác nhân và nhiều hơn nữa trong khi viết ít mã hơn. Vì các khung thường có quan điểm riêng, chúng thực sự có thể hữu ích nếu bạn đồng ý với cách chúng hoạt động, nhưng có thể không phù hợp nếu bạn muốn làm điều gì đó tùy chỉnh mà khung không hỗ trợ. Đôi khi, một khung cũng có thể đơn giản hóa quá mức và bạn có thể không học được một chủ đề quan trọng, điều này sau đó có thể ảnh hưởng đến hiệu suất.

Nói chung, hãy sử dụng công cụ phù hợp cho công việc.

## Giới thiệu

Trong bài học này, chúng ta sẽ học cách:

- Sử dụng một khung AI phổ biến.
- Giải quyết các vấn đề phổ biến như hội thoại, sử dụng công cụ, bộ nhớ và ngữ cảnh.
- Tận dụng điều này để xây dựng ứng dụng AI.

## Lời nhắc đầu tiên

Trong ví dụ ứng dụng đầu tiên của chúng ta, chúng ta sẽ học cách kết nối với một mô hình AI và truy vấn nó bằng một lời nhắc.

### Sử dụng Python

Trong ví dụ này, chúng ta sẽ sử dụng Langchain để kết nối với GitHub Models. Chúng ta có thể sử dụng một lớp gọi là `ChatOpenAI` và cung cấp các trường `api_key`, `base_url` và `model`. Token là thứ tự động được điền trong GitHub Codespaces và nếu bạn chạy ứng dụng cục bộ, bạn cần thiết lập một token truy cập cá nhân để điều này hoạt động.

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

Trong đoạn mã này, chúng ta:

- Gọi `ChatOpenAI` để tạo một client.
- Sử dụng `llm.invoke` với một lời nhắc để tạo phản hồi.
- In phản hồi bằng `print(response.content)`.

Bạn sẽ thấy một phản hồi tương tự như:

```text
The capital of France is Paris.
```

## Hội thoại

Trong phần trước, bạn đã thấy cách chúng ta sử dụng cái thường được gọi là zero shot prompting, một lời nhắc duy nhất theo sau là một phản hồi.

Tuy nhiên, thường bạn sẽ gặp tình huống cần duy trì một cuộc hội thoại với nhiều tin nhắn được trao đổi giữa bạn và trợ lý AI.

### Sử dụng Python

Trong langchain, chúng ta có thể lưu trữ cuộc hội thoại trong một danh sách. `HumanMessage` đại diện cho một tin nhắn từ người dùng, và `SystemMessage` là một tin nhắn nhằm thiết lập "tính cách" của AI. Trong ví dụ dưới đây, bạn sẽ thấy cách chúng ta hướng dẫn AI giả định tính cách của Captain Picard và người dùng hỏi "Tell me about you" làm lời nhắc.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Đoạn mã đầy đủ cho ví dụ này trông như sau:

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

Bạn sẽ thấy kết quả tương tự như:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Để giữ trạng thái của cuộc hội thoại, bạn có thể thêm phản hồi từ một cuộc trò chuyện, để cuộc hội thoại được ghi nhớ, đây là cách thực hiện:

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

Những gì chúng ta thấy từ cuộc hội thoại trên là cách chúng ta gọi LLM hai lần, lần đầu với cuộc hội thoại chỉ gồm hai tin nhắn, nhưng sau đó lần thứ hai với nhiều tin nhắn hơn được thêm vào cuộc hội thoại.

Thực tế, nếu bạn chạy điều này, bạn sẽ thấy phản hồi thứ hai giống như:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Tôi sẽ coi đó là một câu trả lời có thể ;)

## Phản hồi theo luồng

TODO

## Mẫu lời nhắc

TODO

## Kết quả có cấu trúc

TODO

## Gọi công cụ

Công cụ là cách chúng ta cung cấp cho LLM các kỹ năng bổ sung. Ý tưởng là nói cho LLM biết về các hàm mà nó có và nếu một lời nhắc được đưa ra phù hợp với mô tả của một trong các công cụ này thì chúng ta sẽ gọi chúng.

### Sử dụng Python

Hãy thêm một số công cụ như sau:

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

Những gì chúng ta làm ở đây là tạo một mô tả về một công cụ gọi là `add`. Bằng cách kế thừa từ `TypedDict` và thêm các thành viên như `a` và `b` thuộc kiểu `Annotated`, điều này có thể được chuyển đổi thành một schema mà LLM có thể hiểu. Việc tạo các hàm là một từ điển đảm bảo rằng chúng ta biết phải làm gì nếu một công cụ cụ thể được xác định.

Hãy xem cách chúng ta gọi LLM với công cụ này tiếp theo:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Ở đây chúng ta gọi `bind_tools` với mảng `tools` của mình và do đó LLM `llm_with_tools` bây giờ có kiến thức về công cụ này.

Để sử dụng LLM mới này, chúng ta có thể gõ đoạn mã sau:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Bây giờ khi chúng ta gọi `invoke` trên LLM mới này, có công cụ, chúng ta có thể thấy thuộc tính `tool_calls` được điền. Nếu có, bất kỳ công cụ nào được xác định đều có thuộc tính `name` và `args` xác định công cụ nào nên được gọi và với các tham số. Đoạn mã đầy đủ trông như sau:

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

Khi chạy đoạn mã này, bạn sẽ thấy đầu ra tương tự như:

```text
TOOL CALL:  15
CONTENT: 
```

Ý nghĩa của đầu ra này là LLM đã phân tích lời nhắc "What is 3 + 12" như là yêu cầu gọi công cụ `add` và nó biết điều đó nhờ tên, mô tả và mô tả các trường thành viên. Kết quả là 15 vì mã của chúng ta sử dụng từ điển `functions` để gọi nó:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Một công cụ thú vị hơn gọi API web

Công cụ cộng hai số thì thú vị vì nó minh họa cách gọi công cụ hoạt động, nhưng thường các công cụ có xu hướng làm điều gì đó thú vị hơn như, ví dụ, gọi một API web, hãy làm điều đó với đoạn mã này:

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

Bây giờ nếu bạn chạy đoạn mã này, bạn sẽ nhận được phản hồi nói điều gì đó như:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Đây là đoạn mã đầy đủ:

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

## Nhúng

vector hóa nội dung, so sánh qua độ tương đồng cosine

https://python.langchain.com/docs/how_to/embed_text/

### Tải tài liệu

pdf và csv

## Xây dựng ứng dụng

TODO

## Bài tập

## Tóm tắt

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.