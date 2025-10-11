<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:29:21+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "ms"
}
-->
# Rangka Kerja AI

Terdapat banyak rangka kerja AI yang boleh digunakan untuk mempercepatkan masa yang diperlukan untuk membina projek. Dalam projek ini, kita akan fokus untuk memahami masalah yang ditangani oleh rangka kerja ini dan membina projek seperti itu sendiri.

## Mengapa rangka kerja

Apabila menggunakan AI, terdapat pelbagai pendekatan dan sebab untuk memilih pendekatan tersebut, berikut adalah beberapa:

- **Tiada SDK**, kebanyakan model AI membolehkan anda berinteraksi secara langsung dengan model AI melalui contohnya permintaan HTTP. Pendekatan ini berfungsi dan kadangkala mungkin menjadi satu-satunya pilihan jika tiada pilihan SDK tersedia.
- **SDK**. Menggunakan SDK biasanya adalah pendekatan yang disyorkan kerana ia membolehkan anda menulis kod yang lebih sedikit untuk berinteraksi dengan model anda. Ia biasanya terhad kepada model tertentu dan jika menggunakan model yang berbeza, anda mungkin perlu menulis kod baru untuk menyokong model tambahan tersebut.
- **Rangka kerja**. Rangka kerja biasanya membawa perkara ke tahap yang lebih tinggi dalam erti kata jika anda perlu menggunakan model yang berbeza, terdapat satu API untuk semuanya, yang berbeza biasanya adalah persediaan awal. Selain itu, rangka kerja membawa abstraksi berguna seperti dalam ruang AI, mereka boleh menguruskan alat, memori, aliran kerja, agen dan banyak lagi sambil menulis kod yang lebih sedikit. Oleh kerana rangka kerja biasanya mempunyai pendapat tertentu, ia boleh sangat membantu jika anda bersetuju dengan cara mereka melakukan sesuatu tetapi mungkin kurang berkesan jika anda cuba melakukan sesuatu yang khusus yang tidak dibuat oleh rangka kerja tersebut. Kadangkala rangka kerja juga boleh menyederhanakan terlalu banyak dan oleh itu anda mungkin tidak mempelajari topik penting yang kemudian boleh menjejaskan prestasi contohnya.

Secara amnya, gunakan alat yang sesuai untuk tugas.

## Pengenalan

Dalam pelajaran ini, kita akan belajar untuk:

- Menggunakan rangka kerja AI yang biasa.
- Menangani masalah biasa seperti perbualan chat, penggunaan alat, memori dan konteks.
- Memanfaatkan ini untuk membina aplikasi AI.

## Prompt pertama

Dalam contoh aplikasi pertama kita, kita akan belajar bagaimana untuk menyambung ke model AI dan membuat pertanyaan menggunakan prompt.

### Menggunakan Python

Untuk contoh ini, kita akan menggunakan Langchain untuk menyambung ke Model GitHub. Kita boleh menggunakan kelas `ChatOpenAI` dan memberikannya medan `api_key`, `base_url` dan `model`. Token adalah sesuatu yang secara automatik diisi dalam GitHub Codespaces dan jika anda menjalankan aplikasi secara tempatan, anda perlu menyediakan token akses peribadi untuk ini berfungsi.

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

Dalam kod ini, kita:

- Memanggil `ChatOpenAI` untuk mencipta klien.
- Menggunakan `llm.invoke` dengan prompt untuk mencipta respons.
- Mencetak respons dengan `print(response.content)`.

Anda sepatutnya melihat respons yang serupa dengan:

```text
The capital of France is Paris.
```

## Perbualan chat

Dalam bahagian sebelumnya, anda melihat bagaimana kita menggunakan apa yang biasanya dikenali sebagai zero shot prompting, satu prompt diikuti oleh respons.

Namun, sering kali anda berada dalam situasi di mana anda perlu mengekalkan perbualan beberapa mesej yang ditukar antara anda dan pembantu AI.

### Menggunakan Python

Dalam langchain, kita boleh menyimpan perbualan dalam senarai. `HumanMessage` mewakili mesej daripada pengguna, dan `SystemMessage` adalah mesej yang bertujuan untuk menetapkan "personaliti" AI. Dalam contoh di bawah, anda melihat bagaimana kita mengarahkan AI untuk menganggap personaliti Kapten Picard dan untuk manusia/pengguna bertanya "Ceritakan tentang diri anda" sebagai prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Kod penuh untuk contoh ini kelihatan seperti berikut:

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

Anda sepatutnya melihat hasil yang serupa dengan:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Untuk mengekalkan keadaan perbualan, anda boleh menambah respons daripada chat, jadi perbualan diingati, berikut adalah cara untuk melakukannya:

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

Apa yang kita dapat lihat daripada perbualan di atas ialah bagaimana kita memanggil LLM dua kali, pertama dengan perbualan yang terdiri daripada hanya dua mesej tetapi kemudian kali kedua dengan lebih banyak mesej ditambah kepada perbualan.

Malah, jika anda menjalankan ini, anda akan melihat respons kedua menjadi sesuatu seperti:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Saya anggap itu sebagai mungkin ;)

## Respons penstriman

TODO

## Template prompt

TODO

## Output berstruktur

TODO

## Pemanggilan alat

Alat adalah cara kita memberikan LLM kemahiran tambahan. Ideanya adalah untuk memberitahu LLM tentang fungsi yang dimilikinya dan jika prompt dibuat yang sepadan dengan penerangan salah satu alat ini maka kita memanggilnya.

### Menggunakan Python

Mari tambahkan beberapa alat seperti berikut:

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

Apa yang kita lakukan di sini adalah mencipta penerangan alat yang dipanggil `add`. Dengan mewarisi daripada `TypedDict` dan menambah ahli seperti `a` dan `b` jenis `Annotated` ini boleh ditukar kepada skema yang LLM boleh fahami. Penciptaan fungsi adalah kamus yang memastikan kita tahu apa yang perlu dilakukan jika alat tertentu dikenal pasti.

Mari lihat bagaimana kita memanggil LLM dengan alat ini seterusnya:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Di sini kita memanggil `bind_tools` dengan array `tools` kita dan dengan itu LLM `llm_with_tools` kini mempunyai pengetahuan tentang alat ini.

Untuk menggunakan LLM baru ini, kita boleh menaip kod berikut:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Sekarang apabila kita memanggil `invoke` pada llm baru ini, yang mempunyai alat, kita mungkin melihat sifat `tool_calls` diisi. Jika ya, mana-mana alat yang dikenal pasti mempunyai sifat `name` dan `args` yang mengenal pasti alat apa yang harus dipanggil dan dengan argumen. Kod penuh kelihatan seperti berikut:

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

Menjalankan kod ini, anda sepatutnya melihat output yang serupa dengan:

```text
TOOL CALL:  15
CONTENT: 
```

Apa yang output ini maksudkan ialah LLM menganalisis prompt "What is 3 + 12" sebagai bermaksud bahawa alat `add` harus dipanggil dan ia tahu itu terima kasih kepada namanya, penerangan dan penerangan medan ahli. Bahawa jawapannya adalah 15 adalah kerana kod kita menggunakan kamus `functions` untuk memanggilnya:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Alat yang lebih menarik yang memanggil API web

Alat yang menambah dua nombor adalah menarik kerana ia menggambarkan bagaimana pemanggilan alat berfungsi tetapi biasanya alat cenderung melakukan sesuatu yang lebih menarik seperti contohnya memanggil API Web, mari lakukan itu dengan kod ini:

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

Sekarang jika anda menjalankan kod ini, anda akan mendapat respons yang mengatakan sesuatu seperti:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Berikut adalah kod sepenuhnya:

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

vektor kandungan, bandingkan melalui kesamaan kosinus

https://python.langchain.com/docs/how_to/embed_text/

### pemuat dokumen

pdf dan csv

## Membina aplikasi

TODO

## Tugasan

## Ringkasan

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.