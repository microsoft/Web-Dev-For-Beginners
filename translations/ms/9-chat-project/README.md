<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T14:29:02+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "ms"
}
-->
# Bina Pembantu Chat dengan AI

Ingat dalam Star Trek apabila kru berbual santai dengan komputer kapal, bertanya soalan kompleks dan mendapat jawapan yang bijak? Apa yang kelihatan seperti fiksyen sains semata-mata pada tahun 1960-an kini adalah sesuatu yang boleh anda bina menggunakan teknologi web yang sudah anda kenal.

Dalam pelajaran ini, kita akan mencipta pembantu chat AI menggunakan HTML, CSS, JavaScript, dan beberapa integrasi backend. Anda akan mendapati bagaimana kemahiran yang sama yang telah anda pelajari boleh dihubungkan dengan perkhidmatan AI yang berkuasa yang boleh memahami konteks dan menghasilkan jawapan yang bermakna.

Fikirkan AI seperti mempunyai akses kepada perpustakaan besar yang bukan sahaja boleh mencari maklumat tetapi juga menyusunnya menjadi jawapan yang koheren dan disesuaikan dengan soalan spesifik anda. Daripada mencari ribuan halaman, anda mendapat jawapan langsung dan kontekstual.

Integrasi ini berlaku melalui teknologi web yang biasa bekerja bersama. HTML mencipta antara muka chat, CSS menguruskan reka bentuk visual, JavaScript mengendalikan interaksi pengguna, dan API backend menghubungkan semuanya kepada perkhidmatan AI. Ia serupa dengan bagaimana bahagian-bahagian orkestra yang berbeza bekerjasama untuk mencipta simfoni.

Kita pada dasarnya membina jambatan antara komunikasi manusia semula jadi dan pemprosesan mesin. Anda akan belajar kedua-dua pelaksanaan teknikal integrasi perkhidmatan AI dan corak reka bentuk yang membuat interaksi terasa intuitif.

Menjelang akhir pelajaran ini, integrasi AI akan terasa kurang seperti proses misteri dan lebih seperti API lain yang boleh anda gunakan. Anda akan memahami corak asas yang menggerakkan aplikasi seperti ChatGPT dan Claude, menggunakan prinsip pembangunan web yang sama yang telah anda pelajari.

Inilah rupa projek siap anda:

![Antara muka aplikasi chat menunjukkan perbualan antara pengguna dan pembantu AI](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.ms.png)

## Memahami AI: Dari Misteri ke Penguasaan

Sebelum mendalami kod, mari kita fahami apa yang kita sedang kerjakan. Jika anda pernah menggunakan API sebelum ini, anda tahu corak asasnya: hantar permintaan, terima jawapan.

API AI mengikuti struktur yang serupa, tetapi bukannya mengambil data yang telah disimpan dari pangkalan data, ia menghasilkan jawapan baru berdasarkan corak yang dipelajari daripada sejumlah besar teks. Fikirkan ia seperti perbezaan antara sistem katalog perpustakaan dan pustakawan yang berpengetahuan yang boleh menyusun maklumat dari pelbagai sumber.

### Apa Sebenarnya "Generative AI"?

Pertimbangkan bagaimana Batu Rosetta membolehkan para sarjana memahami hieroglif Mesir dengan mencari corak antara bahasa yang diketahui dan tidak diketahui. Model AI berfungsi dengan cara yang sama – mereka mencari corak dalam sejumlah besar teks untuk memahami bagaimana bahasa berfungsi, kemudian menggunakan corak tersebut untuk menghasilkan jawapan yang sesuai kepada soalan baru.

**Mari saya pecahkan ini dengan perbandingan mudah:**
- **Pangkalan data tradisional**: Seperti meminta sijil kelahiran anda – anda mendapat dokumen yang sama setiap kali
- **Enjin carian**: Seperti meminta pustakawan mencari buku tentang kucing – mereka menunjukkan apa yang tersedia
- **Generative AI**: Seperti bertanya kepada rakan yang berpengetahuan tentang kucing – mereka memberitahu anda perkara menarik dengan kata-kata mereka sendiri, disesuaikan dengan apa yang anda ingin tahu

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Bagaimana Model AI Belajar (Versi Mudah)

Model AI belajar melalui pendedahan kepada dataset yang sangat besar yang mengandungi teks dari buku, artikel, dan perbualan. Melalui proses ini, mereka mengenal pasti corak dalam:
- Bagaimana pemikiran disusun dalam komunikasi bertulis
- Perkataan mana yang biasanya muncul bersama
- Bagaimana perbualan biasanya mengalir
- Perbezaan kontekstual antara komunikasi formal dan tidak formal

**Ia serupa dengan bagaimana ahli arkeologi menguraikan bahasa kuno**: mereka menganalisis ribuan contoh untuk memahami tatabahasa, kosa kata, dan konteks budaya, akhirnya mampu menafsirkan teks baru menggunakan corak yang dipelajari.

### Mengapa Model GitHub?

Kami menggunakan Model GitHub atas alasan yang sangat praktikal – ia memberi kami akses kepada AI peringkat perusahaan tanpa perlu menyediakan infrastruktur AI kami sendiri (yang, percayalah, anda tidak mahu lakukan sekarang!). Fikirkan ia seperti menggunakan API cuaca daripada cuba meramalkan cuaca sendiri dengan menyediakan stesen cuaca di mana-mana.

Ia pada dasarnya "AI-as-a-Service," dan bahagian terbaiknya? Ia percuma untuk bermula, jadi anda boleh bereksperimen tanpa perlu risau tentang kos yang tinggi.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Kami akan menggunakan Model GitHub untuk integrasi backend kami, yang menyediakan akses kepada keupayaan AI peringkat profesional melalui antara muka mesra pemaju. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) berfungsi sebagai persekitaran ujian di mana anda boleh bereksperimen dengan model AI yang berbeza dan memahami keupayaannya sebelum melaksanakannya dalam kod.

![Antara muka GitHub Models AI Playground dengan pilihan model dan kawasan ujian](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.ms.png)

**Inilah yang membuatkan playground sangat berguna:**
- **Cuba** model AI yang berbeza seperti GPT-4o-mini, Claude, dan lain-lain (semuanya percuma!)
- **Uji** idea dan arahan anda sebelum menulis sebarang kod
- **Dapatkan** snippet kod siap guna dalam bahasa pengaturcaraan kegemaran anda
- **Laraskan** tetapan seperti tahap kreativiti dan panjang jawapan untuk melihat bagaimana ia mempengaruhi output

Setelah anda bermain-main sedikit, hanya klik tab "Code" dan pilih bahasa pengaturcaraan anda untuk mendapatkan kod pelaksanaan yang anda perlukan.

![Pilihan playground menunjukkan pilihan penjanaan kod untuk pelbagai bahasa pengaturcaraan](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.ms.png)

## Menyediakan Integrasi Backend Python

Sekarang mari kita laksanakan integrasi AI menggunakan Python. Python sangat baik untuk aplikasi AI kerana sintaksnya yang mudah dan perpustakaan yang berkuasa. Kita akan mulakan dengan kod dari playground Model GitHub dan kemudian menyesuaikannya menjadi fungsi yang boleh digunakan semula dan siap untuk pengeluaran.

### Memahami Pelaksanaan Asas

Apabila anda mengambil kod Python dari playground, anda akan mendapat sesuatu yang kelihatan seperti ini. Jangan risau jika ia kelihatan banyak pada mulanya – mari kita lalui satu persatu:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

```python
response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    model="openai/gpt-4o-mini",
    temperature=1,
    max_tokens=4096,
    top_p=1
)

print(response.choices[0].message.content)
```

**Inilah yang berlaku dalam kod ini:**
- **Kita mengimport** alat yang kita perlukan: `os` untuk membaca pembolehubah persekitaran dan `OpenAI` untuk bercakap dengan AI
- **Kita menyediakan** klien OpenAI untuk menunjuk kepada pelayan AI GitHub dan bukannya OpenAI secara langsung
- **Kita mengesahkan** menggunakan token GitHub khas (lebih lanjut tentang ini sebentar lagi!)
- **Kita menyusun** perbualan kita dengan "peranan" yang berbeza – fikirkan ia seperti menetapkan adegan untuk drama
- **Kita menghantar** permintaan kita kepada AI dengan beberapa parameter penalaan halus
- **Kita mengekstrak** teks jawapan sebenar daripada semua data yang kembali

### Memahami Peranan Mesej: Kerangka Perbualan AI

Perbualan AI menggunakan struktur tertentu dengan "peranan" yang berbeza yang berfungsi untuk tujuan tertentu:

```python
messages=[
    {
        "role": "system",
        "content": "You are a helpful assistant who explains things simply."
    },
    {
        "role": "user", 
        "content": "What is machine learning?"
    }
]
```

**Fikirkan ia seperti mengarahkan drama:**
- **Peranan sistem**: Seperti arahan pentas untuk pelakon – ia memberitahu AI bagaimana untuk bertindak, keperibadian apa yang dimiliki, dan bagaimana untuk menjawab
- **Peranan pengguna**: Soalan atau mesej sebenar daripada orang yang menggunakan aplikasi anda
- **Peranan pembantu**: Jawapan AI (anda tidak menghantar ini, tetapi ia muncul dalam sejarah perbualan)

**Analogi dunia nyata**: Bayangkan anda memperkenalkan seorang rakan kepada seseorang di sebuah pesta:
- **Mesej sistem**: "Ini kawan saya Sarah, dia seorang doktor yang pandai menerangkan konsep perubatan dengan cara yang mudah difahami"
- **Mesej pengguna**: "Boleh tak awak terangkan bagaimana vaksin berfungsi?"
- **Jawapan pembantu**: Sarah menjawab sebagai doktor yang mesra, bukan sebagai peguam atau tukang masak

### Memahami Parameter AI: Penalaan Tingkah Laku Jawapan

Parameter berangka dalam panggilan API AI mengawal bagaimana model menghasilkan jawapan. Tetapan ini membolehkan anda melaraskan tingkah laku AI untuk pelbagai kegunaan:

#### Temperature (0.0 hingga 2.0): Dail Kreativiti

**Apa yang ia lakukan**: Mengawal sejauh mana kreatif atau boleh diramal jawapan AI.

**Fikirkan ia seperti tahap improvisasi pemuzik jazz:**
- **Temperature = 0.1**: Memainkan melodi yang sama setiap kali (sangat boleh diramal)
- **Temperature = 0.7**: Menambah beberapa variasi yang menarik sambil tetap dikenali (kreativiti seimbang)
- **Temperature = 1.5**: Jazz eksperimen penuh dengan perubahan yang tidak dijangka (sangat tidak boleh diramal)

```python
# Very predictable responses (good for factual questions)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Will almost always say "4"
)

# Creative responses (good for brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Will generate unique, unexpected stories
)
```

#### Max Tokens (1 hingga 4096+): Pengawal Panjang Jawapan

**Apa yang ia lakukan**: Menetapkan had pada berapa panjang jawapan AI boleh jadi.

**Fikirkan token sebagai kira-kira setara dengan perkataan** (kira-kira 1 token = 0.75 perkataan dalam Bahasa Inggeris):
- **max_tokens=50**: Pendek dan ringkas (seperti mesej teks)
- **max_tokens=500**: Satu atau dua perenggan yang baik
- **max_tokens=2000**: Penjelasan terperinci dengan contoh

```python
# Short, concise answers
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Forces a brief explanation
)

# Detailed, comprehensive answers  
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Allows for detailed explanations with examples
)
```

#### Top_p (0.0 hingga 1.0): Parameter Fokus

**Apa yang ia lakukan**: Mengawal sejauh mana AI tetap fokus pada jawapan yang paling mungkin.

**Bayangkan AI mempunyai perbendaharaan kata yang besar, disusun mengikut kemungkinan setiap perkataan:**
- **top_p=0.1**: Hanya mempertimbangkan 10% perkataan yang paling mungkin (sangat fokus)
- **top_p=0.9**: Mempertimbangkan 90% perkataan yang mungkin (lebih kreatif)
- **top_p=1.0**: Mempertimbangkan segalanya (variasi maksimum)

**Sebagai contoh**: Jika anda bertanya "Langit biasanya..."
- **Top_p rendah**: Hampir pasti mengatakan "biru"
- **Top_p tinggi**: Mungkin mengatakan "biru", "berawan", "luas", "berubah", "indah", dll.

### Menggabungkan Semua: Kombinasi Parameter untuk Pelbagai Kegunaan

```python
# For factual, consistent answers (like a documentation bot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# For creative writing assistance
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# For conversational, helpful responses (balanced)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

**Memahami mengapa parameter ini penting**: Aplikasi yang berbeza memerlukan jenis jawapan yang berbeza. Bot khidmat pelanggan harus konsisten dan faktual (temperature rendah), manakala pembantu penulisan kreatif harus imaginatif dan pelbagai (temperature tinggi). Memahami parameter ini memberi anda kawalan ke atas keperibadian dan gaya jawapan AI.
```

**Here's what's happening in this code:**
- **We import** the tools we need: `os` for reading environment variables and `OpenAI` for talking to the AI
- **We set up** the OpenAI client to point to GitHub's AI servers instead of OpenAI directly
- **We authenticate** using a special GitHub token (more on that in a minute!)
- **We structure** our conversation with different "roles" – think of it like setting the scene for a play
- **We send** our request to the AI with some fine-tuning parameters
- **We extract** the actual response text from all the data that comes back

> 🔐 **Security Note**: Never hardcode API keys in your source code! Always use environment variables to store sensitive credentials like your `GITHUB_TOKEN`.

### Creating a Reusable AI Function

Let's refactor this code into a clean, reusable function that we can easily integrate into our web application:

```python
import asyncio
from openai import AsyncOpenAI

# Use AsyncOpenAI for better performance
client = AsyncOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

async def call_llm_async(prompt: str, system_message: str = "You are a helpful assistant."):
    """
    Sends a prompt to the AI model asynchronously and returns the response.
    
    Args:
        prompt: The user's question or message
        system_message: Instructions that define the AI's behavior and personality
    
    Returns:
        str: The AI's response to the prompt
    """
    try:
        response = await client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": system_message,
                },
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="openai/gpt-4o-mini",
            temperature=1,
            max_tokens=4096,
            top_p=1
        )
        return response.choices[0].message.content
    except Exception as e:
        logger.error(f"AI API error: {str(e)}")
        return "I'm sorry, I'm having trouble processing your request right now."

# Backward compatibility function for synchronous calls
def call_llm(prompt: str, system_message: str = "You are a helpful assistant."):
    """Synchronous wrapper for async AI calls."""
    return asyncio.run(call_llm_async(prompt, system_message))
```

**Memahami fungsi yang diperbaiki ini:**
- **Menerima** dua parameter: arahan pengguna dan mesej sistem pilihan
- **Menyediakan** mesej sistem lalai untuk tingkah laku pembantu umum
- **Menggunakan** petunjuk jenis Python yang betul untuk dokumentasi kod yang lebih baik
- **Mengembalikan** hanya kandungan jawapan, menjadikannya mudah digunakan dalam API web kami
- **Menjaga** parameter model yang sama untuk tingkah laku AI yang konsisten

### Keajaiban Mesej Sistem: Memprogram Keperibadian AI

Jika parameter mengawal bagaimana AI berfikir, mesej sistem mengawal siapa AI fikir ia adalah. Ini sebenarnya salah satu bahagian paling menarik dalam bekerja dengan AI – anda pada dasarnya memberikan AI keperibadian lengkap, tahap kepakaran, dan gaya komunikasi.

**Fikirkan mesej sistem seperti memilih pelakon untuk peranan yang berbeza**: Daripada mempunyai satu pembantu generik, anda boleh mencipta pakar khusus untuk situasi yang berbeza. Perlukan guru yang sabar? Rakan kongsi yang kreatif? Penasihat perniagaan yang tegas? Hanya ubah mesej sistem!

#### Mengapa Mesej Sistem Sangat Berkuasa

Inilah bahagian yang menarik: Model AI telah dilatih pada banyak perbualan di mana orang mengadopsi peranan dan tahap kepakaran yang berbeza. Apabila anda memberikan AI peranan tertentu, ia seperti menekan suis yang mengaktifkan semua corak yang dipelajari.

**Ia seperti lakonan kaedah untuk AI**: Beritahu seorang pelakon "anda seorang profesor tua yang bijak" dan lihat bagaimana mereka secara automatik menyesuaikan postur, kosa kata, dan tingkah laku mereka. AI melakukan sesuatu yang sangat serupa dengan corak bahasa.

#### Membentuk Mesej Sistem yang Berkesan: Seni dan Sains

**Anatomi mesej sistem yang hebat:**
1. **Peranan/Identiti**: Siapa AI itu?
2. **Kepakaran**: Apa yang mereka tahu?
3. **Gaya komunikasi**: Bagaimana mereka bercakap?
4. **Arahan khusus**: Apa yang harus mereka fokuskan?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Contoh Mesej Sistem dengan Konteks

Mari kita lihat bagaimana mesej sistem yang berbeza mencipta keperibadian AI yang sangat berbeza:

```python
# Example 1: The Patient Teacher
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Example 2: The Creative Collaborator  
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Example 3: The Strategic Business Advisor
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Melihat Mesej Sistem Beraksi

Mari kita uji soalan yang sama dengan mesej sistem yang berbeza untuk melihat perbezaan yang ketara:

**Soalan**: "Bagaimana saya mengendalikan pengesahan pengguna dalam aplikasi web saya?"

```python
# With teacher prompt:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typical response: "Great question! Let's break authentication down into simple steps. 
# Think of it like a nightclub bouncer checking IDs..."

# With business prompt:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typical response: "From a strategic perspective, authentication is crucial for user 
# trust and regulatory compliance. Let me outline a framework considering security, 
# user experience, and scalability..."
```

#### Teknik Lanjutan Mesej Sistem

**1. Menetapkan Konteks**: Berikan AI maklumat latar belakang
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Pemformatan Output**: Beritahu AI bagaimana untuk menyusun jawapan
```python
system_prompt = """
You are a technical mentor. Always structure your responses as:
1. Quick Answer (1-2 sentences)
2. Detailed Explanation 
3. Code Example
4. Common Pitfalls to Avoid
5. Next Steps for Learning
"""
```

**3. Menetapkan Kekangan**: Tentukan apa yang AI tidak boleh lakukan
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Mengapa Ini Penting untuk Pembantu Chat Anda

Memahami mesej sistem memberi anda kuasa luar biasa untuk mencipta pembantu AI khusus:
- **Bot khidmat pelanggan**: Membantu, sabar, sedar polisi
- **Tutor pembelajaran**: Menggalakkan, langkah demi langkah, memeriksa pemahaman
- **Rakan kongsi kreatif**: Imaginatif, membina idea, bertanya "bagaimana jika?"
- **Pakar teknikal**: Tepat, terperinci, sedar keselamatan

**Wawasan utama**: Anda bukan hanya memanggil API AI – anda mencipta keperibadian AI khusus yang memenuhi keperluan penggunaan anda. Inilah yang membuat aplikasi AI moden terasa disesuaikan dan berguna daripada generik.

## Membina API Web dengan FastAPI: Hab Komunikasi AI Berprestasi Tinggi Anda

Sekarang mari kita bina backend yang menghubungkan frontend anda kepada perkhidmatan AI. Kami akan menggunakan FastAPI, sebuah rangka kerja Python moden yang cemerlang dalam membina API untuk aplikasi AI.

FastAPI menawarkan beberapa kelebihan untuk jenis projek ini: sokongan async terbina dalam untuk mengendalikan permintaan serentak, penjanaan dokumentasi API automatik, dan prestasi yang sangat baik. Pelayan FastAPI anda bertindak sebagai perantara yang menerima permintaan dari frontend, berkomunikasi dengan perkhidmatan AI, dan mengembalikan jawapan yang diformatkan.

### Mengapa FastAPI untuk Aplikasi AI?

Anda mungkin tertanya-tanya: "Tak bolehkah saya panggil AI terus dari JavaScript frontend saya?" atau "Kenapa FastAPI dan bukan Flask atau Django?" Soalan yang bagus! 
**Inilah sebabnya mengapa FastAPI sesuai untuk apa yang kita bina:**
- **Async secara lalai**: Boleh mengendalikan banyak permintaan AI sekaligus tanpa tersekat
- **Dokumentasi automatik**: Lawati `/docs` dan dapatkan halaman dokumentasi API interaktif yang cantik secara percuma
- **Validasi terbina dalam**: Menangkap kesilapan sebelum ia menjadi masalah
- **Sangat pantas**: Salah satu rangka kerja Python yang paling laju
- **Python moden**: Menggunakan semua ciri terkini dan terbaik Python

**Dan inilah sebabnya mengapa kita memerlukan backend:**

**Keselamatan**: Kunci API AI anda seperti kata laluan – jika anda meletakkannya dalam JavaScript frontend, sesiapa yang melihat kod sumber laman web anda boleh mencurinya dan menggunakan kredit AI anda. Backend memastikan kredensial sensitif kekal selamat.

**Had Kadar & Kawalan**: Backend membolehkan anda mengawal kekerapan pengguna membuat permintaan, melaksanakan pengesahan pengguna, dan menambah log untuk menjejaki penggunaan.

**Pemprosesan Data**: Anda mungkin ingin menyimpan perbualan, menapis kandungan yang tidak sesuai, atau menggabungkan pelbagai perkhidmatan AI. Backend adalah tempat logik ini berada.

**Senibina menyerupai model klien-pelayan:**
- **Frontend**: Lapisan antara muka pengguna untuk interaksi
- **Backend API**: Lapisan pemprosesan dan penghalaan permintaan
- **Perkhidmatan AI**: Pengiraan luaran dan penjanaan respons
- **Pembolehubah Persekitaran**: Penyimpanan konfigurasi dan kredensial yang selamat

### Memahami Aliran Permintaan-Respons

Mari kita jejak apa yang berlaku apabila pengguna menghantar mesej:

```mermaid
sequenceDiagram
    participant User as 👤 User
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI Service
    
    User->>Frontend: Types "Hello AI!"
    Frontend->>API: POST /hello {"message": "Hello AI!"}
    Note over API: Validates request<br/>Adds system prompt
    API->>AI: Sends formatted request
    AI->>API: Returns AI response
    Note over API: Processes response<br/>Logs conversation
    API->>Frontend: {"response": "Hello! How can I help?"}
    Frontend->>User: Displays AI message
```

**Memahami setiap langkah:**
1. **Interaksi pengguna**: Orang menaip dalam antara muka sembang
2. **Pemprosesan frontend**: JavaScript menangkap input dan memformatnya sebagai JSON
3. **Validasi API**: FastAPI secara automatik memvalidasi permintaan menggunakan model Pydantic
4. **Integrasi AI**: Backend menambah konteks (prompt sistem) dan memanggil perkhidmatan AI
5. **Pengendalian respons**: API menerima respons AI dan boleh mengubahnya jika perlu
6. **Paparan frontend**: JavaScript menunjukkan respons dalam antara muka sembang

### Memahami Senibina API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hello AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API request
    GitHub Models->>AI Function: AI response
    AI Function->>FastAPI: response text
    FastAPI->>Frontend: {"response": "Hello! How can I help?"}
```

### Membina Aplikasi FastAPI

Mari bina API kita langkah demi langkah. Buat fail bernama `api.py` dengan kod FastAPI berikut:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI application
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response validation
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.get("/")
async def root():
    """Root endpoint providing API information."""
    return {
        "message": "Welcome to the AI Chat API",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "ai-chat-api"}

@app.post("/hello", response_model=ChatResponse)
async def chat_endpoint(chat_message: ChatMessage):
    """Main chat endpoint that processes messages and returns AI responses."""
    try:
        # Extract and validate message
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Call AI service (note: call_llm should be made async for better performance)
        ai_response = await call_llm_async(message, "You are a helpful and friendly assistant.")
        
        logger.info("AI response generated successfully")
        return ChatResponse(response=ai_response)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing chat message: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000, reload=True)
```

**Memahami pelaksanaan FastAPI:**
- **Mengimport** FastAPI untuk fungsi rangka kerja web moden dan Pydantic untuk validasi data
- **Mencipta** dokumentasi API automatik (tersedia di `/docs` apabila pelayan berjalan)
- **Mengaktifkan** middleware CORS untuk membenarkan permintaan frontend dari asal yang berbeza
- **Menentukan** model Pydantic untuk validasi dan dokumentasi permintaan/respons automatik
- **Menggunakan** endpoint async untuk prestasi lebih baik dengan permintaan serentak
- **Melaksanakan** kod status HTTP yang sesuai dan pengendalian kesilapan dengan HTTPException
- **Menyertakan** log berstruktur untuk pemantauan dan debugging
- **Menyediakan** endpoint pemeriksaan kesihatan untuk memantau status perkhidmatan

**Kelebihan utama FastAPI berbanding rangka kerja tradisional:**
- **Validasi automatik**: Model Pydantic memastikan integriti data sebelum pemprosesan
- **Dokumentasi interaktif**: Lawati `/docs` untuk dokumentasi API yang dijana secara automatik dan boleh diuji
- **Keselamatan jenis**: Petunjuk jenis Python mencegah kesilapan runtime dan meningkatkan kualiti kod
- **Sokongan async**: Mengendalikan banyak permintaan AI secara serentak tanpa tersekat
- **Prestasi**: Pemprosesan permintaan yang jauh lebih pantas untuk aplikasi masa nyata

### Memahami CORS: Pengawal Keselamatan Web

CORS (Cross-Origin Resource Sharing) seperti pengawal keselamatan di sebuah bangunan yang memeriksa sama ada pelawat dibenarkan masuk. Mari kita fahami mengapa ini penting dan bagaimana ia mempengaruhi aplikasi anda.

#### Apa itu CORS dan Mengapa Ia Wujud?

**Masalahnya**: Bayangkan jika mana-mana laman web boleh membuat permintaan ke laman web bank anda bagi pihak anda tanpa kebenaran anda. Itu akan menjadi mimpi ngeri keselamatan! Pelayar mencegah ini secara lalai melalui "Dasar Asal Sama."

**Dasar Asal Sama**: Pelayar hanya membenarkan halaman web membuat permintaan ke domain, port, dan protokol yang sama dari mana ia dimuatkan.

**Analogi dunia nyata**: Ia seperti keselamatan bangunan apartmen – hanya penghuni (asal yang sama) boleh mengakses bangunan secara lalai. Jika anda ingin membenarkan rakan (asal yang berbeza) melawat, anda perlu memberitahu keselamatan secara eksplisit bahawa ia dibenarkan.

#### CORS dalam Persekitaran Pembangunan Anda

Semasa pembangunan, frontend dan backend anda berjalan pada port yang berbeza:
- Frontend: `http://localhost:3000` (atau file:// jika membuka HTML secara langsung)
- Backend: `http://localhost:5000`

Ini dianggap "asal yang berbeza" walaupun ia berada di komputer yang sama!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Apa yang dilakukan oleh konfigurasi CORS dalam amalan:**
- **Menambah** header HTTP khas kepada respons API yang memberitahu pelayar "permintaan asal silang ini dibenarkan"
- **Mengendalikan** permintaan "preflight" (pelayar kadang-kadang memeriksa kebenaran sebelum menghantar permintaan sebenar)
- **Mencegah** kesilapan "disekat oleh polisi CORS" dalam konsol pelayar anda

#### Keselamatan CORS: Pembangunan vs Pengeluaran

```python
# 🚨 Development: Allows ALL origins (convenient but insecure)
CORS(app)

# ✅ Production: Only allow your specific frontend domain
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Advanced: Different origins for different environments
if app.debug:  # Development mode
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Production mode
    CORS(app, origins=["https://yourdomain.com"])
```

**Mengapa ini penting**: Dalam pembangunan, `CORS(app)` seperti meninggalkan pintu depan anda tidak berkunci – mudah tetapi tidak selamat. Dalam pengeluaran, anda ingin menentukan dengan tepat laman web mana yang boleh bercakap dengan API anda.

#### Senario dan Penyelesaian CORS yang Biasa

| Senario | Masalah | Penyelesaian |
|----------|---------|----------|
| **Pembangunan Tempatan** | Frontend tidak dapat mencapai backend | Tambahkan CORSMiddleware ke FastAPI |
| **GitHub Pages + Heroku** | Frontend yang diterapkan tidak dapat mencapai API | Tambahkan URL GitHub Pages anda ke asal CORS |
| **Domain Tersuai** | Kesilapan CORS dalam pengeluaran | Kemas kini asal CORS untuk sepadan dengan domain anda |
| **Aplikasi Mudah Alih** | Aplikasi tidak dapat mencapai API web | Tambahkan domain aplikasi anda atau gunakan `*` dengan berhati-hati |

**Tip pro**: Anda boleh memeriksa header CORS dalam Alat Pembangun pelayar anda di bawah tab Network. Cari header seperti `Access-Control-Allow-Origin` dalam respons.

### Pengendalian Kesilapan dan Validasi

Perhatikan bagaimana API kita termasuk pengendalian kesilapan yang betul:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Prinsip validasi utama:**
- **Memeriksa** medan yang diperlukan sebelum memproses permintaan
- **Mengembalikan** mesej kesilapan yang bermakna dalam format JSON
- **Menggunakan** kod status HTTP yang sesuai (400 untuk permintaan buruk)
- **Memberikan** maklum balas yang jelas untuk membantu pembangun frontend menyelesaikan masalah

## Menyiapkan dan Menjalankan Backend Anda

Sekarang kita mempunyai integrasi AI dan pelayan FastAPI yang siap, mari kita jalankan semuanya. Proses persediaan melibatkan pemasangan kebergantungan Python, konfigurasi pembolehubah persekitaran, dan memulakan pelayan pembangunan anda.

### Persediaan Persekitaran Python

Mari kita siapkan persekitaran pembangunan Python anda. Persekitaran maya seperti pendekatan compartmentalized Projek Manhattan – setiap projek mendapat ruang terpencil sendiri dengan alat dan kebergantungan tertentu, mencegah konflik antara projek yang berbeza.

```bash
# Navigate to your backend directory
cd backend

# Create a virtual environment (like creating a clean room for your project)
python -m venv venv

# Activate it (Linux/Mac)
source ./venv/bin/activate

# On Windows, use:
# venv\Scripts\activate

# Install the good stuff
pip install openai fastapi uvicorn python-dotenv
```

**Apa yang baru kita lakukan:**
- **Mencipta** gelembung Python kita sendiri di mana kita boleh memasang pakej tanpa menjejaskan apa-apa yang lain
- **Mengaktifkan** supaya terminal kita tahu untuk menggunakan persekitaran tertentu ini
- **Memasang** keperluan: OpenAI untuk magik AI, FastAPI untuk API web kita, Uvicorn untuk menjalankannya, dan python-dotenv untuk pengurusan rahsia yang selamat

**Kebergantungan utama dijelaskan:**
- **FastAPI**: Rangka kerja web moden dan pantas dengan dokumentasi API automatik
- **Uvicorn**: Pelayan ASGI yang sangat pantas yang menjalankan aplikasi FastAPI
- **OpenAI**: Perpustakaan rasmi untuk Model GitHub dan integrasi API OpenAI
- **python-dotenv**: Pemuatan pembolehubah persekitaran yang selamat dari fail .env

### Konfigurasi Persekitaran: Menjaga Rahsia Tetap Selamat

Sebelum kita memulakan API kita, kita perlu bercakap tentang salah satu pelajaran paling penting dalam pembangunan web: bagaimana menjaga rahsia anda benar-benar rahsia. Pembolehubah persekitaran seperti peti simpanan yang selamat yang hanya aplikasi anda boleh akses.

#### Apa itu Pembolehubah Persekitaran?

**Fikirkan pembolehubah persekitaran seperti kotak simpanan keselamatan** – anda meletakkan barang berharga anda di sana, dan hanya anda (dan aplikasi anda) mempunyai kunci untuk mengeluarkannya. Daripada menulis maklumat sensitif secara langsung dalam kod anda (di mana sesiapa sahaja boleh melihatnya), anda menyimpannya dengan selamat dalam persekitaran.

**Inilah perbezaannya:**
- **Cara yang salah**: Menulis kata laluan anda pada nota melekit dan meletakkannya di monitor anda
- **Cara yang betul**: Menyimpan kata laluan anda dalam pengurus kata laluan yang selamat yang hanya anda boleh akses

#### Mengapa Pembolehubah Persekitaran Penting

```python
# 🚨 NEVER DO THIS - API key visible to everyone
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Anyone can steal this!
    base_url="https://models.github.ai/inference"
)

# ✅ DO THIS - API key stored securely
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Only your app can access this
    base_url="https://models.github.ai/inference"
)
```

**Apa yang berlaku apabila anda menulis rahsia secara langsung:**
1. **Pendedahan kawalan versi**: Sesiapa yang mempunyai akses ke repositori Git anda dapat melihat kunci API anda
2. **Repositori awam**: Jika anda menolak ke GitHub, kunci anda dapat dilihat oleh seluruh internet
3. **Perkongsian pasukan**: Pembangun lain yang bekerja pada projek anda mendapat akses ke kunci API peribadi anda
4. **Pelanggaran keselamatan**: Jika seseorang mencuri kunci API anda, mereka boleh menggunakan kredit AI anda

#### Menyiapkan Fail Persekitaran Anda

Buat fail `.env` dalam direktori backend anda. Fail ini menyimpan rahsia anda secara tempatan:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Memahami fail .env:**
- **Satu rahsia setiap baris** dalam format `KEY=value`
- **Tiada ruang** di sekitar tanda sama dengan
- **Tiada tanda petikan** diperlukan di sekitar nilai (biasanya)
- **Komen** bermula dengan `#`

#### Membuat Token Akses Peribadi GitHub Anda

Token GitHub anda seperti kata laluan khas yang memberikan aplikasi anda kebenaran untuk menggunakan perkhidmatan AI GitHub:

**Langkah-langkah membuat token:**
1. **Pergi ke Tetapan GitHub** → Tetapan pembangun → Token akses peribadi → Token (klasik)
2. **Klik "Hasilkan token baru (klasik)"**
3. **Tetapkan tarikh luput** (30 hari untuk ujian, lebih lama untuk pengeluaran)
4. **Pilih skop**: Tandakan "repo" dan sebarang kebenaran lain yang anda perlukan
5. **Hasilkan token** dan salin segera (anda tidak dapat melihatnya lagi!)
6. **Tampal ke dalam fail .env anda**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Memuatkan Pembolehubah Persekitaran dalam Python

```python
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Now you can access them securely
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Apa yang dilakukan oleh kod ini:**
- **Memuatkan** fail .env anda dan menjadikan pembolehubah tersedia untuk Python
- **Memeriksa** jika token yang diperlukan wujud (pengendalian kesilapan yang baik!)
- **Menaikkan** kesilapan yang jelas jika token hilang
- **Menggunakan** token dengan selamat tanpa mendedahkannya dalam kod

#### Keselamatan Git: Fail .gitignore

Fail `.gitignore` anda memberitahu Git fail mana yang tidak boleh dilacak atau dimuat naik:

```bash
# .gitignore - Add these lines
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Mengapa ini penting**: Setelah anda menambah `.env` ke `.gitignore`, Git akan mengabaikan fail persekitaran anda, mencegah anda secara tidak sengaja memuat naik rahsia anda ke GitHub.

#### Persekitaran Berbeza, Rahsia Berbeza

Aplikasi profesional menggunakan kunci API yang berbeza untuk persekitaran yang berbeza:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Mengapa ini penting**: Anda tidak mahu eksperimen pembangunan anda mempengaruhi kuota penggunaan AI pengeluaran anda, dan anda mahukan tahap keselamatan yang berbeza untuk persekitaran yang berbeza.

### Memulakan Pelayan Pembangunan Anda: Menghidupkan FastAPI Anda

Kini tiba saat yang mendebarkan – memulakan pelayan pembangunan FastAPI anda dan melihat integrasi AI anda hidup! FastAPI menggunakan Uvicorn, pelayan ASGI yang sangat pantas yang direka khusus untuk aplikasi Python async.

#### Memahami Proses Permulaan Pelayan FastAPI

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Apabila anda menjalankan arahan ini, inilah yang berlaku di belakang tabir:

**1. Python memuatkan aplikasi FastAPI anda**:
- Mengimport semua perpustakaan yang diperlukan (FastAPI, Pydantic, OpenAI, dll.)
- Memuatkan pembolehubah persekitaran dari fail `.env` anda
- Mencipta contoh aplikasi FastAPI dengan dokumentasi automatik

**2. Uvicorn mengkonfigurasi pelayan ASGI**:
- Mengikat ke port 5000 dengan keupayaan pengendalian permintaan async
- Menyediakan penghalaan permintaan dengan validasi automatik
- Mengaktifkan muat semula panas untuk pembangunan (memulakan semula pada perubahan fail)
- Menjana dokumentasi API interaktif

**3. Pelayan mula mendengar**:
- Terminal anda menunjukkan: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Pelayan boleh mengendalikan banyak permintaan AI serentak
- API anda sedia dengan dokumentasi automatik di `http://localhost:5000/docs`

#### Apa yang Anda Harus Lihat Apabila Semuanya Berfungsi

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Memahami output FastAPI:**
- **Akan memantau perubahan**: Muat semula automatik diaktifkan untuk pembangunan
- **Uvicorn berjalan**: Pelayan ASGI berprestasi tinggi aktif
- **Proses pemuat semula dimulakan**: Pemantau fail untuk pemulaan semula automatik
- **Permulaan aplikasi selesai**: Aplikasi FastAPI berjaya dimulakan
- **Dokumentasi interaktif tersedia**: Lawati `/docs` untuk dokumentasi API automatik

#### Menguji FastAPI Anda: Pelbagai Pendekatan Berkuasa

FastAPI menyediakan beberapa cara mudah untuk menguji API anda, termasuk dokumentasi interaktif automatik:

**Kaedah 1: Dokumentasi API Interaktif (Disyorkan)**
1. Buka pelayar anda dan pergi ke `http://localhost:5000/docs`
2. Anda akan melihat Swagger UI dengan semua endpoint anda didokumentasikan
3. Klik pada `/hello` → "Cuba" → Masukkan mesej ujian → "Laksanakan"
4. Lihat respons secara langsung dalam pelayar dengan format yang betul

**Kaedah 2: Ujian Pelayar Asas**
1. Pergi ke `http://localhost:5000` untuk endpoint root
2. Pergi ke `http://localhost:5000/health` untuk memeriksa kesihatan pelayan
3. Ini mengesahkan pelayan FastAPI anda berjalan dengan betul

**Kaedah 2: Ujian Baris Perintah (Lanjutan)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Kaedah 3: Skrip Ujian Python**
```python
# test_api.py - Create this file to test your API
import requests
import json

# Test the API endpoint
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Menyelesaikan Masalah Permulaan Biasa

| Mesej Ralat | Maksudnya | Cara Membetulkan |
|-------------|-----------|------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI tidak dipasang | Jalankan `pip install fastapi uvicorn` dalam persekitaran maya anda |
| `ModuleNotFoundError: No module named 'uvicorn'` | Pelayan ASGI tidak dipasang | Jalankan `pip install uvicorn` dalam persekitaran maya anda |
| `KeyError: 'GITHUB_TOKEN'` | Pembolehubah persekitaran tidak dijumpai | Periksa fail `.env` anda dan panggilan `load_dotenv()` |
| `Address already in use` | Port 5000 sedang digunakan | Matikan proses lain yang menggunakan port 5000 atau tukar port |
| `ValidationError` | Data permintaan tidak sepadan dengan model Pydantic | Periksa format permintaan anda agar sesuai dengan skema yang dijangka |
| `HTTPException 422` | Entiti tidak dapat diproses | Validasi permintaan gagal, periksa `/docs` untuk format yang betul |
| `OpenAI API error` | Pengesahan perkhidmatan AI gagal | Pastikan token GitHub anda betul dan mempunyai kebenaran yang sesuai |

#### Amalan Terbaik Pembangunan

**Hot Reloading**: FastAPI dengan Uvicorn menyediakan pemuatan semula automatik apabila anda menyimpan perubahan pada fail Python anda. Ini bermakna anda boleh mengubah kod anda dan mengujinya dengan segera tanpa perlu memulakan semula secara manual.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Logging untuk Pembangunan**: Tambahkan logging untuk memahami apa yang sedang berlaku:

```python
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.get_json()
    message = data.get("message", "")
    
    logger.info(f"Received message: {message}")
    
    if not message:
        logger.warning("Empty message received")
        return jsonify({"error": "Message field is required"}), 400
    
    try:
        response = call_llm(message, "You are a helpful and friendly assistant.")
        logger.info(f"AI response generated successfully")
        return jsonify({"response": response})
    except Exception as e:
        logger.error(f"AI API error: {str(e)}")
        return jsonify({"error": "AI service temporarily unavailable"}), 500
```

**Mengapa logging membantu**: Semasa pembangunan, anda boleh melihat dengan tepat apa permintaan yang masuk, apa yang AI balas, dan di mana kesilapan berlaku. Ini menjadikan proses debugging lebih cepat.

### Konfigurasi untuk GitHub Codespaces: Pembangunan Awan yang Mudah

GitHub Codespaces adalah seperti mempunyai komputer pembangunan yang berkuasa di awan yang boleh anda akses dari mana-mana pelayar. Jika anda bekerja di Codespaces, terdapat beberapa langkah tambahan untuk menjadikan backend anda boleh diakses oleh frontend anda.

#### Memahami Rangkaian Codespaces

Dalam persekitaran pembangunan tempatan, semuanya berjalan pada komputer yang sama:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (atau file://)

Dalam Codespaces, persekitaran pembangunan anda berjalan di pelayan GitHub, jadi "localhost" mempunyai makna yang berbeza. GitHub secara automatik mencipta URL awam untuk perkhidmatan anda, tetapi anda perlu mengkonfigurasinya dengan betul.

#### Langkah-langkah Konfigurasi Codespaces

**1. Mulakan pelayan backend anda**:
```bash
cd backend
python api.py
```

Anda akan melihat mesej permulaan FastAPI/Uvicorn yang biasa, tetapi perhatikan ia berjalan di dalam persekitaran Codespace.

**2. Konfigurasi keterlihatan port**:
- Cari tab "Ports" di panel bawah VS Code
- Cari port 5000 dalam senarai
- Klik kanan pada port 5000
- Pilih "Port Visibility" → "Public"

**Mengapa menjadikannya awam?** Secara lalai, port Codespace adalah peribadi (hanya boleh diakses oleh anda). Menjadikannya awam membolehkan frontend anda (yang berjalan dalam pelayar) berkomunikasi dengan backend anda.

**3. Dapatkan URL awam anda**:
Selepas menjadikan port awam, anda akan melihat URL seperti:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Kemas kini konfigurasi frontend anda**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Memahami URL Codespace

URL Codespace mengikuti pola yang boleh diramal:
```
https://[codespace-name]-[port].app.github.dev
```

**Penjelasan ringkas:**
- `codespace-name`: Pengenal unik untuk Codespace anda (biasanya termasuk nama pengguna anda)
- `port`: Nombor port di mana perkhidmatan anda berjalan (5000 untuk aplikasi FastAPI kami)
- `app.github.dev`: Domain GitHub untuk aplikasi Codespace

#### Menguji Persediaan Codespace Anda

**1. Uji backend secara langsung**:
Buka URL awam anda dalam tab pelayar baru. Anda sepatutnya melihat:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Uji dengan alat pembangun pelayar**:
```javascript
// Open browser console and test your API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Pembangunan Tempatan

| Aspek | Pembangunan Tempatan | GitHub Codespaces |
|-------|-----------------------|-------------------|
| **Masa Persediaan** | Lebih lama (pasang Python, kebergantungan) | Segera (persekitaran yang telah dikonfigurasi) |
| **Akses URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfigurasi Port** | Automatik | Manual (jadikan port awam) |
| **Kekal Fail** | Mesin tempatan | Repositori GitHub |
| **Kerjasama** | Sukar untuk berkongsi persekitaran | Mudah untuk berkongsi pautan Codespace |
| **Kebergantungan Internet** | Hanya untuk panggilan API AI | Diperlukan untuk segalanya |

#### Tips Pembangunan Codespace

**Pembolehubah Persekitaran dalam Codespaces**:
Fail `.env` anda berfungsi sama dalam Codespaces, tetapi anda juga boleh menetapkan pembolehubah persekitaran secara langsung dalam Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Pengurusan Port**:
- Codespaces secara automatik mengesan apabila aplikasi anda mula mendengar pada port
- Anda boleh meneruskan beberapa port secara serentak (berguna jika anda menambah pangkalan data kemudian)
- Port tetap boleh diakses selagi Codespace anda berjalan

**Aliran Kerja Pembangunan**:
1. Buat perubahan kod dalam VS Code
2. FastAPI memuat semula secara automatik (terima kasih kepada mod pemuatan semula Uvicorn)
3. Uji perubahan dengan segera melalui URL awam
4. Komit dan tolak apabila bersedia

> 💡 **Tip Pro**: Tandakan URL backend Codespace anda semasa pembangunan. Oleh kerana nama Codespace adalah stabil, URL tidak akan berubah selagi anda menggunakan Codespace yang sama.

## Membina Antara Muka Chat Frontend: Tempat Manusia Bertemu AI

Sekarang kita akan membina antara muka pengguna – bahagian yang menentukan bagaimana orang berinteraksi dengan pembantu AI anda. Seperti reka bentuk antara muka iPhone asal, kita fokus untuk menjadikan teknologi kompleks terasa intuitif dan mudah digunakan.

### Memahami Seni Bina Frontend Moden

Antara muka chat kita akan menjadi apa yang kita panggil "Aplikasi Halaman Tunggal" atau SPA. Daripada pendekatan lama di mana setiap klik memuatkan halaman baru, aplikasi kita akan dikemas kini dengan lancar dan segera:

**Laman web lama**: Seperti membaca buku fizikal – anda membalik ke halaman yang benar-benar baru
**Aplikasi chat kita**: Seperti menggunakan telefon anda – semuanya mengalir dan dikemas kini dengan lancar

```mermaid
graph TD
    A[User Types Message] --> B[JavaScript Captures Input]
    B --> C[Validate & Format Data]
    C --> D[Send to Backend API]
    D --> E[Display Loading State]
    E --> F[Receive AI Response]
    F --> G[Update Chat Interface]
    G --> H[Ready for Next Message]
```

### Tiga Tiang Pembangunan Frontend

Setiap aplikasi frontend – daripada laman web ringkas hingga aplikasi kompleks seperti Discord atau Slack – dibina berdasarkan tiga teknologi teras. Anggaplah mereka sebagai asas kepada segala yang anda lihat dan berinteraksi di web:

**HTML (Struktur)**: Ini adalah asas anda
- Menentukan elemen apa yang wujud (butang, kawasan teks, bekas)
- Memberi makna kepada kandungan (ini adalah tajuk, ini adalah borang, dll.)
- Mencipta struktur asas yang dibina oleh segala yang lain

**CSS (Persembahan)**: Ini adalah pereka dalaman anda
- Menjadikan semuanya kelihatan cantik (warna, fon, susun atur)
- Mengendalikan saiz skrin yang berbeza (telefon vs komputer riba vs tablet)
- Mencipta animasi yang lancar dan maklum balas visual

**JavaScript (Kelakuan)**: Ini adalah otak anda
- Bertindak balas terhadap apa yang pengguna lakukan (klik, menaip, menatal)
- Berkomunikasi dengan backend anda dan mengemas kini halaman
- Menjadikan semuanya interaktif dan dinamik

**Anggaplah ia seperti reka bentuk seni bina:**
- **HTML**: Pelan struktur (menentukan ruang dan hubungan)
- **CSS**: Reka bentuk estetik dan persekitaran (gaya visual dan pengalaman pengguna)
- **JavaScript**: Sistem mekanikal (fungsi dan interaktiviti)

### Mengapa Seni Bina JavaScript Moden Penting

Aplikasi chat kita akan menggunakan pola JavaScript moden yang akan anda lihat dalam aplikasi profesional. Memahami konsep ini akan membantu anda berkembang sebagai pembangun:

**Seni Bina Berasaskan Kelas**: Kita akan mengatur kod kita ke dalam kelas, yang seperti mencipta pelan untuk objek
**Async/Await**: Cara moden untuk mengendalikan operasi yang mengambil masa (seperti panggilan API)
**Pengaturcaraan Berasaskan Acara**: Aplikasi kita bertindak balas terhadap tindakan pengguna (klik, tekan kekunci) daripada berjalan dalam gelung
**Manipulasi DOM**: Mengemas kini kandungan halaman web secara dinamik berdasarkan interaksi pengguna dan respons API

### Persediaan Struktur Projek

Buat direktori frontend dengan struktur yang teratur ini:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Memahami seni bina:**
- **Memisahkan** kebimbangan antara struktur (HTML), kelakuan (JavaScript), dan persembahan (CSS)
- **Menjaga** struktur fail yang mudah dinavigasi dan diubah
- **Mengikuti** amalan terbaik pembangunan web untuk organisasi dan kebolehselenggaraan

### Membina Asas HTML: Struktur Semantik untuk Kebolehaksesan

Mari kita mulakan dengan struktur HTML. Pembangunan web moden menekankan "HTML semantik" – menggunakan elemen HTML yang jelas menggambarkan tujuan mereka, bukan hanya penampilan mereka. Ini menjadikan aplikasi anda boleh diakses oleh pembaca skrin, enjin carian, dan alat lain.

**Mengapa HTML semantik penting**: Bayangkan menerangkan aplikasi chat anda kepada seseorang melalui telefon. Anda akan berkata "ada tajuk dengan judul, kawasan utama di mana perbualan muncul, dan borang di bahagian bawah untuk menaip mesej." HTML semantik menggunakan elemen yang sepadan dengan penerangan semula jadi ini.

Buat `index.html` dengan markup yang terstruktur dengan teliti ini:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chat Assistant</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="chat-container">
        <header class="chat-header">
            <h1>AI Chat Assistant</h1>
            <p>Ask me anything!</p>
        </header>
        
        <main class="chat-messages" id="messages" role="log" aria-live="polite">
            <!-- Messages will be dynamically added here -->
        </main>
        
        <form class="chat-form" id="chatForm">
            <div class="input-group">
                <input 
                    type="text" 
                    id="messageInput" 
                    placeholder="Type your message here..." 
                    required
                    aria-label="Chat message input"
                >
                <button type="submit" id="sendBtn" aria-label="Send message">
                    Send
                </button>
            </div>
        </form>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

**Memahami setiap elemen HTML dan tujuannya:**

#### Struktur Dokumen
- **`<!DOCTYPE html>`**: Memberitahu pelayar ini adalah HTML5 moden
- **`<html lang="en">`**: Menentukan bahasa halaman untuk pembaca skrin dan alat terjemahan
- **`<meta charset="UTF-8">`**: Memastikan pengekodan watak yang betul untuk teks antarabangsa
- **`<meta name="viewport"...>`**: Menjadikan halaman responsif mudah alih dengan mengawal zoom dan skala

#### Elemen Semantik
- **`<header>`**: Jelas mengenal pasti bahagian atas dengan judul dan penerangan
- **`<main>`**: Menetapkan kawasan kandungan utama (di mana perbualan berlaku)
- **`<form>`**: Semantik betul untuk input pengguna, membolehkan navigasi papan kekunci yang betul

#### Ciri Kebolehaksesan
- **`role="log"`**: Memberitahu pembaca skrin kawasan ini mengandungi log mesej kronologi
- **`aria-live="polite"`**: Mengumumkan mesej baru kepada pembaca skrin tanpa mengganggu
- **`aria-label`**: Memberikan label deskriptif untuk kawalan borang
- **`required`**: Pelayar mengesahkan bahawa pengguna memasukkan mesej sebelum menghantar

#### Integrasi CSS dan JavaScript
- **Atribut `class`**: Memberikan kaitan gaya untuk CSS (contohnya, `chat-container`, `input-group`)
- **Atribut `id`**: Membolehkan JavaScript mencari dan memanipulasi elemen tertentu
- **Penempatan Skrip**: Fail JavaScript dimuatkan di akhir supaya HTML dimuatkan terlebih dahulu

**Mengapa struktur ini berfungsi:**
- **Aliran logik**: Header → Kandungan utama → Borang input sepadan dengan susunan bacaan semula jadi
- **Boleh diakses papan kekunci**: Pengguna boleh tab melalui semua elemen interaktif
- **Mesra pembaca skrin**: Landmark dan penerangan yang jelas untuk pengguna yang kurang penglihatan
- **Responsif mudah alih**: Tag meta viewport membolehkan reka bentuk responsif
- **Peningkatan progresif**: Berfungsi walaupun CSS atau JavaScript gagal dimuatkan

### Menambah JavaScript Interaktif: Logik Aplikasi Web Moden

Sekarang mari kita bina JavaScript yang menghidupkan antara muka chat kita. Kita akan menggunakan pola JavaScript moden yang akan anda temui dalam pembangunan web profesional, termasuk kelas ES6, async/await, dan pengaturcaraan berasaskan acara.

#### Memahami Seni Bina JavaScript Moden

Daripada menulis kod prosedur (siri fungsi yang berjalan mengikut urutan), kita akan mencipta **seni bina berasaskan kelas**. Anggaplah kelas sebagai pelan untuk mencipta objek – seperti bagaimana pelan arkitek boleh digunakan untuk membina beberapa rumah.

**Mengapa menggunakan kelas untuk aplikasi web?**
- **Organisasi**: Semua fungsi berkaitan dikumpulkan bersama
- **Kebolehgunaan semula**: Anda boleh mencipta beberapa instans chat pada halaman yang sama
- **Kebolehselenggaraan**: Lebih mudah untuk debug dan mengubah ciri tertentu
- **Standard profesional**: Pola ini digunakan dalam rangka kerja seperti React, Vue, dan Angular

Buat `app.js` dengan JavaScript yang moden dan terstruktur dengan baik ini:

```javascript
// app.js - Modern chat application logic

class ChatApp {
    constructor() {
        // Get references to DOM elements we'll need to manipulate
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Configure your backend URL here
        this.BASE_URL = "http://localhost:5000"; // Update this for your environment
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Set up event listeners when the chat app is created
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Listen for form submission (when user clicks Send or presses Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Also listen for Enter key in the input field (better UX)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Don't send empty messages
        
        // Provide user feedback that something is happening
        this.setLoading(true);
        
        // Add user message to chat immediately (optimistic UI)
        this.appendMessage(messageText, "user");
        
        // Clear input field so user can type next message
        this.input.value = '';
        
        try {
            // Call the AI API and wait for response
            const reply = await this.callAPI(messageText);
            
            // Add AI response to chat
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Re-enable the interface regardless of success or failure
            this.setLoading(false);
        }
    }
    
    async callAPI(message) {
        const response = await fetch(this.API_ENDPOINT, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ message })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.response;
    }
    
    appendMessage(text, role) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${role}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <span class="message-text">${this.escapeHtml(text)}</span>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        
        this.messages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    setLoading(isLoading) {
        this.sendButton.disabled = isLoading;
        this.input.disabled = isLoading;
        this.sendButton.textContent = isLoading ? "Sending..." : "Send";
    }
}

// Initialize the chat application when the page loads
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Memahami Setiap Konsep JavaScript

**Struktur Kelas ES6**:
```javascript
class ChatApp {
    constructor() {
        // This runs when you create a new ChatApp instance
        // It's like the "setup" function for your chat
    }
    
    methodName() {
        // Methods are functions that belong to the class
        // They can access class properties using "this"
    }
}
```

**Pola Async/Await**:
```javascript
// Old way (callback hell):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Modern way (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Pengaturcaraan Berasaskan Acara**:
Daripada sentiasa memeriksa jika sesuatu berlaku, kita "mendengar" untuk acara:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulasi DOM**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Keselamatan dan Amalan Terbaik

**Pencegahan XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Mengapa ini penting**: Jika pengguna menaip `<script>alert('hack')</script>`, fungsi ini memastikan ia dipaparkan sebagai teks dan bukannya dilaksanakan sebagai kod.

**Pengendalian Ralat**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Pertimbangan Pengalaman Pengguna**:
- **UI Optimistik**: Tambahkan mesej pengguna dengan segera, jangan tunggu respons pelayan
- **Keadaan pemuatan**: Lumpuhkan butang dan tunjukkan "Menghantar..." semasa menunggu
- **Auto-scroll**: Pastikan mesej terbaru kelihatan
- **Validasi input**: Jangan hantar mesej kosong
- **Pintasan papan kekunci**: Kekunci Enter menghantar mesej (seperti aplikasi chat sebenar)

#### Memahami Aliran Aplikasi

1. **Halaman dimuatkan** → Acara `DOMContentLoaded` dicetuskan → `new ChatApp()` dicipta
2. **Konstruktor berjalan** → Mendapatkan rujukan elemen DOM → Menetapkan pendengar acara
3. **Pengguna menaip mesej** → Menekan Enter atau klik Hantar → `handleSubmit` berjalan
4. **handleSubmit** → Memvalidasi input → Menunjukkan keadaan pemuatan → Memanggil API
5. **API memberi respons** → Tambahkan mesej AI ke chat → Aktifkan semula antara muka
6. **Sedia untuk mesej seterusnya** → Pengguna boleh terus berbual
Senibina ini boleh diskalakan – anda boleh menambah ciri seperti penyuntingan mesej, muat naik fail, atau pelbagai benang perbualan tanpa perlu menulis semula struktur teras.

### Gaya Antara Muka Chat Anda

Sekarang mari kita cipta antara muka chat yang moden dan menarik secara visual dengan CSS. Gaya yang baik menjadikan aplikasi anda kelihatan profesional dan meningkatkan pengalaman pengguna secara keseluruhan. Kita akan menggunakan ciri CSS moden seperti Flexbox, CSS Grid, dan sifat tersuai untuk reka bentuk yang responsif dan mudah diakses.

Cipta `styles.css` dengan gaya yang menyeluruh ini:

```css
/* styles.css - Modern chat interface styling */

:root {
    --primary-color: #2563eb;
    --secondary-color: #f1f5f9;
    --user-color: #3b82f6;
    --assistant-color: #6b7280;
    --error-color: #ef4444;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border-radius: 12px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.chat-container {
    width: 100%;
    max-width: 800px;
    height: 600px;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chat-header {
    background: var(--primary-color);
    color: white;
    padding: 20px;
    text-align: center;
}

.chat-header h1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.chat-header p {
    opacity: 0.9;
    font-size: 0.9rem;
}

.chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: var(--secondary-color);
}

.message {
    display: flex;
    max-width: 80%;
    animation: slideIn 0.3s ease-out;
}

.message.user {
    align-self: flex-end;
}

.message.user .message-content {
    background: var(--user-color);
    color: white;
    border-radius: var(--border-radius) var(--border-radius) 4px var(--border-radius);
}

.message.assistant {
    align-self: flex-start;
}

.message.assistant .message-content {
    background: white;
    color: var(--text-primary);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 4px;
    border: 1px solid #e2e8f0;
}

.message.error .message-content {
    background: var(--error-color);
    color: white;
    border-radius: var(--border-radius);
}

.message-content {
    padding: 12px 16px;
    box-shadow: var(--shadow);
    position: relative;
}

.message-text {
    display: block;
    line-height: 1.5;
    word-wrap: break-word;
}

.message-time {
    display: block;
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 5px;
}

.chat-form {
    padding: 20px;
    border-top: 1px solid #e2e8f0;
    background: white;
}

.input-group {
    display: flex;
    gap: 10px;
    align-items: center;
}

#messageInput {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: var(--border-radius);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
}

#messageInput:focus {
    border-color: var(--primary-color);
}

#messageInput:disabled {
    background: #f8fafc;
    opacity: 0.6;
    cursor: not-allowed;
}

#sendBtn {
    padding: 12px 24px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    min-width: 80px;
}

#sendBtn:hover:not(:disabled) {
    background: #1d4ed8;
}

#sendBtn:disabled {
    background: #94a3b8;
    cursor: not-allowed;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive design for mobile devices */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    .chat-container {
        height: calc(100vh - 20px);
        border-radius: 8px;
    }
    
    .message {
        max-width: 90%;
    }
    
    .input-group {
        flex-direction: column;
        gap: 10px;
    }
    
    #messageInput {
        width: 100%;
    }
    
    #sendBtn {
        width: 100%;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    .message {
        animation: none;
    }
    
    * {
        transition: none !important;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .chat-container {
        background: #1e293b;
        color: #f1f5f9;
    }
    
    .chat-messages {
        background: #0f172a;
    }
    
    .message.assistant .message-content {
        background: #334155;
        color: #f1f5f9;
        border-color: #475569;
    }
    
    .chat-form {
        background: #1e293b;
        border-color: #475569;
    }
    
    #messageInput {
        background: #334155;
        color: #f1f5f9;
        border-color: #475569;
    }
}
```

**Memahami senibina CSS:**
- **Menggunakan** sifat tersuai CSS (pembolehubah) untuk tema yang konsisten dan penyelenggaraan yang mudah
- **Melaksanakan** susun atur Flexbox untuk reka bentuk responsif dan penjajaran yang betul
- **Termasuk** animasi yang lancar untuk kemunculan mesej tanpa mengganggu
- **Memberikan** perbezaan visual antara mesej pengguna, respons AI, dan keadaan ralat
- **Menyokong** reka bentuk responsif yang berfungsi pada kedua-dua peranti desktop dan mudah alih
- **Mengambil kira** kebolehaksesan dengan keutamaan gerakan yang dikurangkan dan nisbah kontras yang betul
- **Menawarkan** sokongan mod gelap berdasarkan keutamaan sistem pengguna

### Konfigurasi URL Backend Anda

Langkah terakhir adalah mengemas kini `BASE_URL` dalam JavaScript anda untuk sepadan dengan pelayan backend anda:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Menentukan URL backend anda:**
- **Pembangunan tempatan**: Gunakan `http://localhost:5000` jika menjalankan kedua-dua frontend dan backend secara tempatan
- **Codespaces**: Cari URL backend anda dalam tab Ports selepas menjadikan port 5000 awam
- **Pengeluaran**: Gantikan dengan domain sebenar anda apabila menyebarkan ke perkhidmatan hosting

> 💡 **Tip Ujian**: Anda boleh menguji backend anda secara langsung dengan melawat URL root dalam pelayar anda. Anda sepatutnya melihat mesej selamat datang daripada pelayan FastAPI anda.

## Ujian dan Penyebaran

Sekarang anda telah membina kedua-dua komponen frontend dan backend, mari kita uji semuanya berfungsi bersama dan terokai pilihan penyebaran untuk berkongsi pembantu chat anda dengan orang lain.

### Aliran Kerja Ujian Tempatan

Ikuti langkah-langkah ini untuk menguji aplikasi lengkap anda:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Proses ujian langkah demi langkah:**

1. **Mulakan pelayan backend anda**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Sahkan API berfungsi**:
   - Buka `http://localhost:5000` dalam pelayar anda
   - Anda sepatutnya melihat mesej selamat datang daripada pelayan FastAPI anda

3. **Buka frontend anda**:
   - Navigasi ke direktori frontend anda
   - Buka `index.html` dalam pelayar web anda
   - Atau gunakan sambungan Live Server VS Code untuk pengalaman pembangunan yang lebih baik

4. **Uji fungsi chat**:
   - Taip mesej dalam medan input
   - Klik "Send" atau tekan Enter
   - Sahkan AI memberi respons dengan betul
   - Periksa konsol pelayar untuk sebarang ralat JavaScript

### Menyelesaikan Masalah Biasa

| Masalah | Gejala | Penyelesaian |
|---------|--------|--------------|
| **Ralat CORS** | Frontend tidak dapat mencapai backend | Pastikan FastAPI CORSMiddleware dikonfigurasi dengan betul |
| **Ralat API Key** | Respons 401 Unauthorized | Periksa pembolehubah persekitaran `GITHUB_TOKEN` anda |
| **Sambungan Ditolak** | Ralat rangkaian dalam frontend | Sahkan URL backend dan pastikan pelayan Flask berjalan |
| **Tiada Respons AI** | Respons kosong atau ralat | Periksa log backend untuk kuota API atau isu pengesahan |

**Langkah penyahpepijatan biasa:**
- **Periksa** Konsol Alat Pembangun pelayar untuk ralat JavaScript
- **Sahkan** tab Rangkaian menunjukkan permintaan dan respons API yang berjaya
- **Semak** output terminal backend untuk ralat Python atau isu API
- **Pastikan** pembolehubah persekitaran dimuatkan dan boleh diakses dengan betul

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk menyelesaikan cabaran berikut:

**Penerangan:** Tingkatkan pembantu chat dengan menambah sejarah perbualan dan ketekalan mesej. Cabaran ini akan membantu anda memahami cara menguruskan keadaan dalam aplikasi chat dan melaksanakan penyimpanan data untuk pengalaman pengguna yang lebih baik.

**Arahan:** Ubah aplikasi chat untuk memasukkan sejarah perbualan yang kekal antara sesi. Tambahkan fungsi untuk menyimpan mesej chat ke penyimpanan tempatan, memaparkan sejarah perbualan apabila halaman dimuatkan, dan sertakan butang "Clear History". Juga laksanakan penunjuk menaip dan cap masa mesej untuk menjadikan pengalaman chat lebih realistik.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Tugasan: Bina Pembantu AI Peribadi Anda

Sekarang anda akan mencipta pelaksanaan pembantu AI anda sendiri. Daripada hanya meniru kod tutorial, ini adalah peluang untuk menerapkan konsep sambil membina sesuatu yang mencerminkan minat dan kes penggunaan anda sendiri.

### Keperluan Projek

Mari kita sediakan projek anda dengan struktur yang bersih dan teratur:

```text
my-ai-assistant/
├── backend/
│   ├── api.py          # Your FastAPI server
│   ├── llm.py          # AI integration functions
│   ├── .env            # Your secrets (keep this safe!)
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── index.html      # Your chat interface
│   ├── app.js          # The JavaScript magic
│   └── styles.css      # Make it look amazing
└── README.md           # Tell the world about your creation
```

### Tugas Pelaksanaan Teras

**Pembangunan Backend:**
- **Ambil** kod FastAPI kami dan jadikan ia milik anda
- **Cipta** personaliti AI yang unik – mungkin pembantu memasak yang berguna, rakan penulisan kreatif, atau teman belajar?
- **Tambah** pengendalian ralat yang kukuh supaya aplikasi anda tidak rosak apabila berlaku masalah
- **Tulis** dokumentasi yang jelas untuk sesiapa yang ingin memahami cara API anda berfungsi

**Pembangunan Frontend:**
- **Bina** antara muka chat yang terasa intuitif dan mesra
- **Tulis** JavaScript moden yang bersih yang anda banggakan untuk tunjukkan kepada pemaju lain
- **Reka** gaya tersuai yang mencerminkan personaliti AI anda – menyeronokkan dan berwarna-warni? Bersih dan minimal? Terpulang kepada anda!
- **Pastikan** ia berfungsi dengan baik pada kedua-dua telefon dan komputer

**Keperluan Personaliti:**
- **Pilih** nama dan personaliti unik untuk pembantu AI anda – mungkin sesuatu yang mencerminkan minat anda atau masalah yang ingin anda selesaikan
- **Sesuaikan** reka bentuk visual untuk sepadan dengan suasana pembantu anda
- **Tulis** mesej selamat datang yang menarik perhatian orang untuk mula berbual
- **Uji** pembantu anda dengan pelbagai jenis soalan untuk melihat bagaimana ia memberi respons

### Idea Peningkatan (Pilihan)

Ingin membawa projek anda ke tahap seterusnya? Berikut adalah beberapa idea menarik untuk diterokai:

| Ciri | Penerangan | Kemahiran Yang Akan Anda Latih |
|------|------------|-------------------------------|
| **Sejarah Mesej** | Ingat perbualan walaupun selepas halaman dimuat semula | Bekerja dengan localStorage, pengendalian JSON |
| **Penunjuk Menaip** | Tunjukkan "AI sedang menaip..." semasa menunggu respons | Animasi CSS, pengaturcaraan async |
| **Cap Masa Mesej** | Tunjukkan bila setiap mesej dihantar | Pemformatan tarikh/masa, reka bentuk UX |
| **Eksport Chat** | Benarkan pengguna memuat turun perbualan mereka | Pengendalian fail, eksport data |
| **Penukaran Tema** | Togol mod terang/gelap | Pembolehubah CSS, keutamaan pengguna |
| **Input Suara** | Tambahkan fungsi pertuturan-ke-teks | API Web, kebolehaksesan |

### Ujian dan Dokumentasi

**Jaminan Kualiti:**
- **Uji** aplikasi anda dengan pelbagai jenis input dan kes tepi
- **Sahkan** reka bentuk responsif berfungsi pada pelbagai saiz skrin
- **Periksa** kebolehaksesan dengan navigasi papan kekunci dan pembaca skrin
- **Sahkan** HTML dan CSS untuk pematuhan piawaian

**Keperluan Dokumentasi:**
- **Tulis** README.md yang menerangkan projek anda dan cara menjalankannya
- **Sertakan** tangkapan skrin antara muka chat anda dalam tindakan
- **Dokumentasikan** sebarang ciri unik atau penyesuaian yang anda tambahkan
- **Berikan** arahan persediaan yang jelas untuk pemaju lain

### Garis Panduan Penyerahan

**Hasil Projek:**
1. Folder projek lengkap dengan semua kod sumber
2. README.md dengan penerangan projek dan arahan persediaan
3. Tangkapan skrin yang menunjukkan pembantu chat anda dalam tindakan
4. Refleksi ringkas tentang apa yang anda pelajari dan cabaran yang anda hadapi

**Kriteria Penilaian:**
- **Fungsi**: Adakah pembantu chat berfungsi seperti yang diharapkan?
- **Kualiti Kod**: Adakah kod teratur, diberi komen, dan boleh diselenggara?
- **Reka Bentuk**: Adakah antara muka kelihatan menarik dan mesra pengguna?
- **Kreativiti**: Sejauh mana unik dan diperibadikan pelaksanaan anda?
- **Dokumentasi**: Adakah arahan persediaan jelas dan lengkap?

> 💡 **Tip Kejayaan**: Mulakan dengan keperluan asas dahulu, kemudian tambahkan peningkatan apabila semuanya berfungsi. Fokus pada mencipta pengalaman teras yang digilap sebelum menambah ciri lanjutan.

## Penyelesaian

[Penyelesaian](./solution/README.md)

## Cabaran Bonus

Bersedia untuk membawa pembantu AI anda ke tahap seterusnya? Cuba cabaran lanjutan ini yang akan memperdalam pemahaman anda tentang integrasi AI dan pembangunan web.

### Penyesuaian Personaliti

Keajaiban sebenar berlaku apabila anda memberikan pembantu AI anda personaliti yang unik. Bereksperimen dengan arahan sistem yang berbeza untuk mencipta pembantu khusus:

**Contoh Pembantu Profesional:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Contoh Pembantu Penulisan Kreatif:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Contoh Mentor Teknikal:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Peningkatan Frontend

Transformasikan antara muka chat anda dengan peningkatan visual dan fungsi ini:

**Ciri CSS Lanjutan:**
- **Laksanakan** animasi mesej dan peralihan yang lancar
- **Tambahkan** reka bentuk gelembung chat tersuai dengan bentuk dan kecerunan CSS
- **Cipta** animasi penunjuk menaip untuk apabila AI "berfikir"
- **Reka** reaksi emoji atau sistem penilaian mesej

**Peningkatan JavaScript:**
- **Tambahkan** pintasan papan kekunci (Ctrl+Enter untuk hantar, Escape untuk kosongkan input)
- **Laksanakan** fungsi carian dan penapisan mesej
- **Cipta** ciri eksport perbualan (muat turun sebagai teks atau JSON)
- **Tambahkan** auto-simpan ke localStorage untuk mengelakkan kehilangan mesej

### Integrasi AI Lanjutan

**Pelbagai Personaliti AI:**
- **Cipta** dropdown untuk bertukar antara personaliti AI yang berbeza
- **Simpan** personaliti pilihan pengguna dalam localStorage
- **Laksanakan** penukaran konteks yang mengekalkan aliran perbualan

**Ciri Respons Pintar:**
- **Tambahkan** kesedaran konteks perbualan (AI mengingati mesej sebelumnya)
- **Laksanakan** cadangan pintar berdasarkan topik perbualan
- **Cipta** butang balasan cepat untuk soalan biasa

> 🎯 **Matlamat Pembelajaran**: Cabaran bonus ini membantu anda memahami corak pembangunan web lanjutan dan teknik integrasi AI yang digunakan dalam aplikasi pengeluaran.

## Ringkasan dan Langkah Seterusnya

Tahniah! Anda telah berjaya membina pembantu chat berkuasa AI lengkap dari awal. Projek ini telah memberikan anda pengalaman langsung dengan teknologi pembangunan web moden dan integrasi AI – kemahiran yang semakin bernilai dalam landskap teknologi hari ini.

### Apa Yang Anda Capai

Sepanjang pelajaran ini, anda telah menguasai beberapa teknologi dan konsep utama:

**Pembangunan Backend:**
- **Mengintegrasikan** dengan GitHub Models API untuk fungsi AI
- **Membina** API RESTful menggunakan Flask dengan pengendalian ralat yang betul
- **Melaksanakan** pengesahan yang selamat menggunakan pembolehubah persekitaran
- **Mengkonfigurasi** CORS untuk permintaan asal silang antara frontend dan backend

**Pembangunan Frontend:**
- **Mencipta** antara muka chat responsif menggunakan HTML semantik
- **Melaksanakan** JavaScript moden dengan async/await dan senibina berasaskan kelas
- **Mereka bentuk** antara muka pengguna yang menarik dengan CSS Grid, Flexbox, dan animasi
- **Menambah** ciri kebolehaksesan dan prinsip reka bentuk responsif

**Integrasi Full-Stack:**
- **Menyambungkan** frontend dan backend melalui panggilan API HTTP
- **Mengendalikan** interaksi pengguna masa nyata dan aliran data asinkron
- **Melaksanakan** pengendalian ralat dan maklum balas pengguna sepanjang aplikasi
- **Menguji** aliran kerja aplikasi lengkap dari input pengguna hingga respons AI

### Hasil Pembelajaran Utama

```mermaid
mindmap
  root((AI Chat App Skills))
    API Integration
      Authentication
      Error Handling
      Async Programming
    Web Development
      HTML5 Semantics
      Modern CSS
      ES6+ JavaScript
    User Experience
      Responsive Design
      Accessibility
      Real-time Interaction
    AI Understanding
      Prompt Engineering
      Model Parameters
      Conversation Flow
```

Projek ini telah memperkenalkan anda kepada asas-asas membina aplikasi berkuasa AI, yang mewakili masa depan pembangunan web. Anda kini memahami cara mengintegrasikan keupayaan AI ke dalam aplikasi web tradisional, mencipta pengalaman pengguna yang menarik yang terasa pintar dan responsif.

### Aplikasi Profesional

Kemahiran yang anda kembangkan dalam pelajaran ini boleh digunakan secara langsung dalam kerjaya pembangunan perisian moden:

- **Pembangunan web full-stack** menggunakan rangka kerja dan API moden
- **Integrasi AI** dalam aplikasi web dan aplikasi mudah alih
- **Reka bentuk dan pembangunan API** untuk senibina mikroservis
- **Pembangunan antara muka pengguna** dengan fokus pada kebolehaksesan dan reka bentuk responsif
- **Amalan DevOps** termasuk konfigurasi persekitaran dan penyebaran

### Meneruskan Perjalanan Pembangunan AI Anda

**Langkah Pembelajaran Seterusnya:**
- **Terokai** model AI dan API yang lebih maju (GPT-4, Claude, Gemini)
- **Pelajari** teknik kejuruteraan arahan untuk respons AI yang lebih baik
- **Kajian** reka bentuk perbualan dan prinsip pengalaman pengguna chatbot
- **Selidik** keselamatan AI, etika, dan amalan pembangunan AI yang bertanggungjawab
- **Bina** aplikasi yang lebih kompleks dengan memori perbualan dan kesedaran konteks

**Idea Projek Lanjutan:**
- Bilik chat berbilang pengguna dengan moderasi AI
- Chatbot perkhidmatan pelanggan berkuasa AI
- Pembantu pengajaran pendidikan dengan pembelajaran yang diperibadikan
- Rakan penulisan kreatif dengan personaliti AI yang berbeza
- Pembantu dokumentasi teknikal untuk pemaju

## Bermula dengan GitHub Codespaces

Ingin mencuba projek ini dalam persekitaran pembangunan awan? GitHub Codespaces menyediakan persediaan pembangunan lengkap dalam pelayar anda, sesuai untuk bereksperimen dengan aplikasi AI tanpa keperluan persediaan tempatan.

### Menyediakan Persekitaran Pembangunan Anda

**Langkah 1: Cipta dari Template**
- **Navigasi** ke [repositori Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klik** "Use this template" di sudut kanan atas (pastikan anda log masuk ke GitHub)

![Antara muka cipta dari template menunjukkan butang hijau "Use this template"](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.ms.png)

**Langkah 2: Lancarkan Codespaces**
- **Buka** repositori yang baru anda cipta
- **Klik** butang hijau "Code" dan pilih "Codespaces"
- **Pilih** "Create codespace on main" untuk memulakan persekitaran pembangunan anda

![Antara muka cipta codespace dengan pilihan untuk melancarkan persekitaran pembangunan awan](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.ms.png)

**Langkah 3: Konfigurasi Persekitaran**
Sebaik sahaja Codespace anda dimuatkan, anda akan mempunyai akses kepada:
- **Pra-pasang** Python, Node.js, dan semua alat pembangunan yang diperlukan
- **Antara muka VS Code** dengan sambungan untuk pembangunan web
- **Akses terminal** untuk menjalankan pelayan backend dan frontend
- **Port forwarding** untuk menguji aplikasi anda

**Apa yang disediakan oleh Codespaces:**
- **Menghapuskan** masalah penyediaan dan konfigurasi persekitaran tempatan
- **Menyediakan** persekitaran pembangunan yang konsisten di pelbagai peranti
- **Termasuk** alat dan sambungan yang telah dikonfigurasi untuk pembangunan web
- **Menawarkan** integrasi lancar dengan GitHub untuk kawalan versi dan kerjasama

> 🚀 **Tip Hebat**: Codespaces sangat sesuai untuk pembelajaran dan prototaip aplikasi AI kerana ia menguruskan semua penyediaan persekitaran yang kompleks secara automatik, membolehkan anda fokus pada pembangunan dan pembelajaran tanpa perlu menyelesaikan masalah konfigurasi.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.