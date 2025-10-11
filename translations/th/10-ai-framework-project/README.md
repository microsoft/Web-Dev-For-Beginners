<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:26:34+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "th"
}
-->
# เฟรมเวิร์ก AI

มีเฟรมเวิร์ก AI มากมายที่สามารถช่วยลดระยะเวลาในการสร้างโปรเจกต์ได้อย่างมาก ในโปรเจกต์นี้เราจะมุ่งเน้นไปที่การทำความเข้าใจปัญหาที่เฟรมเวิร์กเหล่านี้แก้ไข และสร้างโปรเจกต์แบบนี้ด้วยตัวเราเอง

## ทำไมต้องใช้เฟรมเวิร์ก

เมื่อพูดถึงการใช้งาน AI มีหลายวิธีและเหตุผลที่แตกต่างกันในการเลือกใช้วิธีเหล่านั้น ดังนี้:

- **ไม่มี SDK**: โมเดล AI ส่วนใหญ่ให้คุณโต้ตอบกับโมเดลได้โดยตรง เช่น ผ่าน HTTP requests วิธีนี้ใช้งานได้และบางครั้งอาจเป็นตัวเลือกเดียวหากไม่มี SDK ให้ใช้
- **SDK**: การใช้ SDK มักเป็นวิธีที่แนะนำ เพราะช่วยลดโค้ดที่ต้องเขียนเพื่อโต้ตอบกับโมเดล โดยปกติจะจำกัดการใช้งานกับโมเดลเฉพาะ และหากต้องการใช้โมเดลอื่น คุณอาจต้องเขียนโค้ดใหม่เพื่อรองรับโมเดลเพิ่มเติม
- **เฟรมเวิร์ก**: เฟรมเวิร์กมักยกระดับการทำงานไปอีกขั้น โดยให้ API เดียวสำหรับโมเดลที่หลากหลาย สิ่งที่แตกต่างกันคือการตั้งค่าเริ่มต้น นอกจากนี้ เฟรมเวิร์กยังมีการจัดการ abstraction ที่มีประโยชน์ เช่น การจัดการเครื่องมือ หน่วยความจำ เวิร์กโฟลว์ เอเจนต์ และอื่น ๆ โดยเขียนโค้ดน้อยลง เฟรมเวิร์กมักมีแนวทางที่ชัดเจน ซึ่งจะช่วยได้มากหากคุณยอมรับวิธีการของมัน แต่หากคุณต้องการทำสิ่งที่เฉพาะเจาะจงที่เฟรมเวิร์กไม่ได้ออกแบบมา อาจไม่ตอบโจทย์ บางครั้งเฟรมเวิร์กอาจทำให้สิ่งต่าง ๆ ง่ายเกินไปจนคุณไม่ได้เรียนรู้หัวข้อสำคัญที่อาจส่งผลต่อประสิทธิภาพในภายหลัง

โดยทั่วไปแล้ว ควรเลือกเครื่องมือที่เหมาะสมกับงาน

## บทนำ

ในบทเรียนนี้ เราจะได้เรียนรู้:

- การใช้เฟรมเวิร์ก AI ที่เป็นที่นิยม
- การแก้ปัญหาทั่วไป เช่น การสนทนา การใช้เครื่องมือ หน่วยความจำ และบริบท
- การนำสิ่งเหล่านี้ไปใช้สร้างแอป AI

## พรอมต์แรก

ในตัวอย่างแอปแรกของเรา เราจะเรียนรู้วิธีเชื่อมต่อกับโมเดล AI และส่งคำถามไปยังมันโดยใช้พรอมต์

### การใช้ Python

ในตัวอย่างนี้ เราจะใช้ Langchain เพื่อเชื่อมต่อกับ GitHub Models เราสามารถใช้คลาส `ChatOpenAI` และกำหนดฟิลด์ `api_key`, `base_url` และ `model` โทเค็นจะถูกเติมโดยอัตโนมัติใน GitHub Codespaces และหากคุณรันแอปในเครื่อง คุณต้องตั้งค่า personal access token เพื่อให้ทำงานได้

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

ในโค้ดนี้ เรา:

- เรียก `ChatOpenAI` เพื่อสร้างไคลเอนต์
- ใช้ `llm.invoke` พร้อมพรอมต์เพื่อสร้างคำตอบ
- พิมพ์คำตอบด้วย `print(response.content)`

คุณควรเห็นคำตอบที่คล้ายกับ:

```text
The capital of France is Paris.
```

## การสนทนา

ในส่วนก่อนหน้า คุณได้เห็นวิธีที่เราใช้สิ่งที่เรียกว่าการตั้งคำถามแบบ zero shot ซึ่งเป็นการตั้งคำถามเพียงครั้งเดียวและได้รับคำตอบกลับมา

อย่างไรก็ตาม บ่อยครั้งที่คุณต้องการรักษาการสนทนาที่มีการแลกเปลี่ยนข้อความหลายครั้งระหว่างคุณและผู้ช่วย AI

### การใช้ Python

ใน Langchain เราสามารถเก็บการสนทนาไว้ในลิสต์ได้ `HumanMessage` แทนข้อความจากผู้ใช้ และ `SystemMessage` เป็นข้อความที่ใช้กำหนด "บุคลิกภาพ" ของ AI ในตัวอย่างด้านล่าง คุณจะเห็นว่าเราสั่งให้ AI รับบทเป็น Captain Picard และให้มนุษย์/ผู้ใช้ถามว่า "Tell me about you" เป็นพรอมต์

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

โค้ดทั้งหมดสำหรับตัวอย่างนี้มีลักษณะดังนี้:

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

คุณควรเห็นผลลัพธ์ที่คล้ายกับ:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

เพื่อรักษาสถานะของการสนทนา คุณสามารถเพิ่มคำตอบจากการแชทเพื่อให้การสนทนาถูกจดจำได้ ดังนี้:

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

จากการสนทนาข้างต้น เราจะเห็นได้ว่าเราเรียกใช้ LLM สองครั้ง ครั้งแรกด้วยการสนทนาที่มีเพียงสองข้อความ และครั้งที่สองด้วยข้อความเพิ่มเติมในบทสนทนา

ในความเป็นจริง หากคุณรันโค้ดนี้ คุณจะเห็นคำตอบที่สองเป็นบางอย่างเช่น:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

ถือว่าเป็นคำตอบที่น่าสนใจ ;)

## การตอบกลับแบบสตรีม

TODO

## แม่แบบพรอมต์

TODO

## ผลลัพธ์ที่มีโครงสร้าง

TODO

## การเรียกใช้เครื่องมือ

เครื่องมือคือวิธีที่เราให้ LLM มีทักษะเพิ่มเติม แนวคิดคือการบอก LLM เกี่ยวกับฟังก์ชันที่มีอยู่ และหากมีพรอมต์ที่ตรงกับคำอธิบายของเครื่องมือเหล่านี้ เราจะเรียกใช้มัน

### การใช้ Python

มาลองเพิ่มเครื่องมือกัน:

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

สิ่งที่เราทำที่นี่คือการสร้างคำอธิบายของเครื่องมือที่เรียกว่า `add` โดยการสืบทอดจาก `TypedDict` และเพิ่มสมาชิกเช่น `a` และ `b` ที่เป็นประเภท `Annotated` สิ่งนี้สามารถแปลงเป็น schema ที่ LLM เข้าใจได้ การสร้างฟังก์ชันเป็นดิกชันนารีที่ช่วยให้เรารู้ว่าต้องทำอะไรหากมีการระบุเครื่องมือเฉพาะ

มาดูวิธีที่เราเรียกใช้ LLM ด้วยเครื่องมือนี้:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

ที่นี่เราเรียก `bind_tools` พร้อมกับอาร์เรย์ `tools` ของเรา และทำให้ LLM `llm_with_tools` มีความรู้เกี่ยวกับเครื่องมือนี้

เพื่อใช้ LLM ใหม่นี้ เราสามารถพิมพ์โค้ดดังนี้:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

ตอนนี้เมื่อเราเรียก `invoke` บน LLM ใหม่นี้ที่มีเครื่องมือ เราอาจเห็น property `tool_calls` ถูกเติมเต็ม หากเป็นเช่นนั้น เครื่องมือที่ระบุจะมี property `name` และ `args` ที่ระบุว่าเครื่องมือใดควรถูกเรียกใช้และมีอาร์กิวเมนต์อะไร โค้ดทั้งหมดมีลักษณะดังนี้:

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

เมื่อรันโค้ดนี้ คุณควรเห็นผลลัพธ์ที่คล้ายกับ:

```text
TOOL CALL:  15
CONTENT: 
```

ผลลัพธ์นี้หมายความว่า LLM วิเคราะห์พรอมต์ "What is 3 + 12" ว่าหมายถึงเครื่องมือ `add` ควรถูกเรียกใช้ และมันรู้ได้จากชื่อ คำอธิบาย และคำอธิบายฟิลด์สมาชิก คำตอบที่ได้คือ 15 เพราะโค้ดของเราใช้ดิกชันนารี `functions` เพื่อเรียกใช้:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### เครื่องมือที่น่าสนใจกว่าที่เรียกใช้ Web API

เครื่องมือที่บวกตัวเลขสองตัวเป็นตัวอย่างที่น่าสนใจเพราะแสดงให้เห็นว่าการเรียกใช้เครื่องมือทำงานอย่างไร แต่โดยปกติเครื่องมือมักทำสิ่งที่น่าสนใจกว่า เช่น การเรียกใช้ Web API มาลองทำสิ่งนี้ด้วยโค้ด:

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

ตอนนี้หากคุณรันโค้ดนี้ คุณจะได้รับคำตอบบางอย่างเช่น:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

นี่คือโค้ดทั้งหมด:

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

## การฝังข้อมูล

แปลงเนื้อหาเป็นเวกเตอร์ เปรียบเทียบด้วย cosine similarity

https://python.langchain.com/docs/how_to/embed_text/

### ตัวโหลดเอกสาร

PDF และ CSV

## การสร้างแอป

TODO

## งานที่มอบหมาย

## สรุป

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้อง แต่โปรดทราบว่าการแปลโดยอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้