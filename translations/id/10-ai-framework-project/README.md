<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:29:05+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "id"
}
-->
# Kerangka AI

Ada banyak kerangka AI yang tersedia yang dapat mempercepat waktu pembangunan proyek secara signifikan. Dalam proyek ini, kita akan fokus memahami masalah yang diatasi oleh kerangka tersebut dan membangun proyek serupa sendiri.

## Mengapa menggunakan kerangka

Dalam menggunakan AI, ada berbagai pendekatan dan alasan untuk memilih pendekatan tersebut, berikut beberapa di antaranya:

- **Tanpa SDK**, sebagian besar model AI memungkinkan Anda berinteraksi langsung dengan model AI melalui, misalnya, permintaan HTTP. Pendekatan ini berfungsi dan kadang-kadang menjadi satu-satunya pilihan jika opsi SDK tidak tersedia.
- **SDK**. Menggunakan SDK biasanya merupakan pendekatan yang direkomendasikan karena memungkinkan Anda menulis lebih sedikit kode untuk berinteraksi dengan model Anda. Biasanya terbatas pada model tertentu, dan jika menggunakan model yang berbeda, Anda mungkin perlu menulis kode baru untuk mendukung model tambahan tersebut.
- **Kerangka kerja**. Kerangka kerja biasanya membawa segalanya ke tingkat yang lebih tinggi dalam arti bahwa jika Anda perlu menggunakan model yang berbeda, ada satu API untuk semuanya, yang berbeda biasanya adalah pengaturan awal. Selain itu, kerangka kerja menghadirkan abstraksi yang berguna seperti dalam ruang AI, mereka dapat menangani alat, memori, alur kerja, agen, dan lainnya sambil menulis lebih sedikit kode. Karena kerangka kerja biasanya memiliki pendekatan yang sudah ditentukan, mereka bisa sangat membantu jika Anda mengikuti cara mereka bekerja, tetapi mungkin kurang efektif jika Anda mencoba melakukan sesuatu yang khusus yang tidak dirancang oleh kerangka tersebut. Kadang-kadang kerangka kerja juga dapat menyederhanakan terlalu banyak sehingga Anda mungkin tidak mempelajari topik penting yang nantinya dapat merugikan kinerja, misalnya.

Secara umum, gunakan alat yang tepat untuk pekerjaan yang tepat.

## Pendahuluan

Dalam pelajaran ini, kita akan belajar untuk:

- Menggunakan kerangka AI yang umum.
- Mengatasi masalah umum seperti percakapan chat, penggunaan alat, memori, dan konteks.
- Memanfaatkan ini untuk membangun aplikasi AI.

## Prompt pertama

Dalam contoh aplikasi pertama kita, kita akan belajar bagaimana menghubungkan ke model AI dan mengajukan pertanyaan menggunakan prompt.

### Menggunakan Python

Untuk contoh ini, kita akan menggunakan Langchain untuk terhubung ke GitHub Models. Kita dapat menggunakan kelas `ChatOpenAI` dan memberikan field `api_key`, `base_url`, dan `model`. Token secara otomatis diisi dalam GitHub Codespaces, dan jika Anda menjalankan aplikasi secara lokal, Anda perlu mengatur token akses pribadi agar ini berfungsi.

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

Dalam kode ini, kita:

- Memanggil `ChatOpenAI` untuk membuat klien.
- Menggunakan `llm.invoke` dengan prompt untuk membuat respons.
- Mencetak respons dengan `print(response.content)`.

Anda seharusnya melihat respons yang mirip dengan:

```text
The capital of France is Paris.
```

## Percakapan chat

Pada bagian sebelumnya, Anda melihat bagaimana kita menggunakan apa yang biasanya dikenal sebagai zero shot prompting, yaitu satu prompt diikuti oleh respons.

Namun, sering kali Anda berada dalam situasi di mana Anda perlu mempertahankan percakapan dengan beberapa pesan yang dipertukarkan antara Anda dan asisten AI.

### Menggunakan Python

Dalam Langchain, kita dapat menyimpan percakapan dalam sebuah daftar. `HumanMessage` mewakili pesan dari pengguna, dan `SystemMessage` adalah pesan yang dimaksudkan untuk mengatur "kepribadian" AI. Dalam contoh di bawah ini, Anda melihat bagaimana kita menginstruksikan AI untuk berperan sebagai Captain Picard dan pengguna/human untuk bertanya "Ceritakan tentang dirimu" sebagai prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Kode lengkap untuk contoh ini terlihat seperti berikut:

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

Anda seharusnya melihat hasil yang mirip dengan:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Untuk mempertahankan status percakapan, Anda dapat menambahkan respons dari chat, sehingga percakapan diingat, berikut cara melakukannya:

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

Apa yang dapat kita lihat dari percakapan di atas adalah bagaimana kita memanggil LLM dua kali, pertama dengan percakapan yang hanya terdiri dari dua pesan, tetapi kemudian kedua kalinya dengan lebih banyak pesan yang ditambahkan ke percakapan.

Faktanya, jika Anda menjalankan ini, Anda akan melihat respons kedua yang mirip dengan:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Saya anggap itu sebagai "mungkin" ;)

## Respons streaming

TODO

## Template prompt

TODO

## Output terstruktur

TODO

## Pemanggilan alat

Alat adalah cara kita memberikan LLM keterampilan tambahan. Ide utamanya adalah memberi tahu LLM tentang fungsi-fungsi yang dimilikinya, dan jika ada prompt yang sesuai dengan deskripsi salah satu alat ini, maka kita memanggilnya.

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

Apa yang kita lakukan di sini adalah membuat deskripsi alat yang disebut `add`. Dengan mewarisi dari `TypedDict` dan menambahkan anggota seperti `a` dan `b` dari tipe `Annotated`, ini dapat dikonversi menjadi skema yang dapat dipahami oleh LLM. Pembuatan fungsi adalah sebuah dictionary yang memastikan kita tahu apa yang harus dilakukan jika alat tertentu diidentifikasi.

Mari kita lihat bagaimana kita memanggil LLM dengan alat ini selanjutnya:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Di sini kita memanggil `bind_tools` dengan array `tools` kita, sehingga LLM `llm_with_tools` sekarang memiliki pengetahuan tentang alat ini.

Untuk menggunakan LLM baru ini, kita dapat mengetik kode berikut:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Sekarang ketika kita memanggil `invoke` pada LLM baru ini, yang memiliki alat, properti `tool_calls` mungkin terisi. Jika demikian, alat yang diidentifikasi memiliki properti `name` dan `args` yang mengidentifikasi alat mana yang harus dipanggil dan dengan argumen apa. Kode lengkapnya terlihat seperti berikut:

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

Menjalankan kode ini, Anda seharusnya melihat output yang mirip dengan:

```text
TOOL CALL:  15
CONTENT: 
```

Apa yang dimaksud dengan output ini adalah bahwa LLM menganalisis prompt "Berapa 3 + 12" sebagai berarti bahwa alat `add` harus dipanggil, dan ia tahu itu berkat nama, deskripsi, dan deskripsi field anggota. Bahwa jawabannya adalah 15 karena kode kita menggunakan dictionary `functions` untuk memanggilnya:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Alat yang lebih menarik yang memanggil API web

Alat yang menambahkan dua angka menarik karena menggambarkan bagaimana pemanggilan alat bekerja, tetapi biasanya alat cenderung melakukan sesuatu yang lebih menarik seperti, misalnya, memanggil API Web. Mari kita lakukan itu dengan kode berikut:

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

Sekarang jika Anda menjalankan kode ini, Anda akan mendapatkan respons yang mengatakan sesuatu seperti:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Berikut kode lengkapnya:

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

Membuat vektor konten, membandingkan melalui cosine similarity

https://python.langchain.com/docs/how_to/embed_text/

### Pemuat dokumen

pdf dan csv

## Membangun aplikasi

TODO

## Tugas

## Ringkasan

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang berwenang. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemah manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.