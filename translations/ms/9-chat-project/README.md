<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2025-11-06T12:08:50+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "ms"
}
-->
# Bina Pembantu Chat dengan AI

Ingat dalam Star Trek apabila kru berbual santai dengan komputer kapal, bertanya soalan kompleks dan mendapat jawapan yang bijak? Apa yang kelihatan seperti fiksyen sains semata-mata pada tahun 1960-an kini adalah sesuatu yang anda boleh bina menggunakan teknologi web yang sudah anda ketahui.

Dalam pelajaran ini, kita akan mencipta pembantu chat AI menggunakan HTML, CSS, JavaScript, dan beberapa integrasi backend. Anda akan mendapati bagaimana kemahiran yang sama yang telah anda pelajari boleh disambungkan kepada perkhidmatan AI yang berkuasa yang boleh memahami konteks dan menghasilkan jawapan yang bermakna.

Fikirkan AI seperti mempunyai akses kepada perpustakaan besar yang bukan sahaja boleh mencari maklumat tetapi juga mensintesisnya menjadi jawapan yang koheren yang disesuaikan dengan soalan spesifik anda. Daripada mencari ribuan halaman, anda mendapat jawapan langsung dan kontekstual.

Integrasi berlaku melalui teknologi web yang biasa bekerja bersama. HTML mencipta antara muka chat, CSS menguruskan reka bentuk visual, JavaScript mengendalikan interaksi pengguna, dan API backend menghubungkan semuanya kepada perkhidmatan AI. Ia serupa dengan bagaimana bahagian-bahagian berbeza dalam orkestra bekerjasama untuk mencipta simfoni.

Kita pada dasarnya membina jambatan antara komunikasi manusia semula jadi dan pemprosesan mesin. Anda akan belajar kedua-dua pelaksanaan teknikal integrasi perkhidmatan AI dan corak reka bentuk yang membuat interaksi terasa intuitif.

Menjelang akhir pelajaran ini, integrasi AI akan terasa kurang seperti proses misteri dan lebih seperti API lain yang boleh anda gunakan. Anda akan memahami corak asas yang menggerakkan aplikasi seperti ChatGPT dan Claude, menggunakan prinsip pembangunan web yang sama yang telah anda pelajari.

## ⚡ Apa Yang Anda Boleh Lakukan Dalam 5 Minit Seterusnya

**Laluan Permulaan Cepat untuk Pembangun Sibuk**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Get GitHub token]
    B --> C[Test AI playground]
    C --> D[Copy Python code]
    D --> E[See AI responses]
```

- **Minit 1**: Lawati [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) dan cipta token akses peribadi
- **Minit 2**: Uji interaksi AI secara langsung dalam antara muka playground
- **Minit 3**: Klik tab "Code" dan salin snippet Python
- **Minit 4**: Jalankan kod secara tempatan dengan token anda: `GITHUB_TOKEN=your_token python test.py`
- **Minit 5**: Saksikan respons AI pertama anda dijana daripada kod anda sendiri

**Kod Ujian Cepat**:
```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key="your_token_here"
)

response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Hello AI!"}],
    model="openai/gpt-4o-mini"
)

print(response.choices[0].message.content)
```

**Kenapa Ini Penting**: Dalam 5 minit, anda akan mengalami keajaiban interaksi AI secara programatik. Ini mewakili blok asas yang menggerakkan setiap aplikasi AI yang anda gunakan.

Inilah rupa projek siap anda:

![Antara muka aplikasi chat menunjukkan perbualan antara pengguna dan pembantu AI](../../../translated_images/ms/screenshot.0a1ee0d123df681b.webp)

## 🗺️ Perjalanan Pembelajaran Anda Melalui Pembangunan Aplikasi AI

```mermaid
journey
    title From Web Development to AI Integration
    section Understanding AI Foundations
      Discover generative AI concepts: 4: You
      Explore GitHub Models platform: 6: You
      Master AI parameters and prompts: 8: You
    section Backend Integration
      Build Python API server: 5: You
      Implement AI function calls: 7: You
      Handle async operations: 8: You
    section Frontend Development
      Create modern chat interface: 6: You
      Master real-time interactions: 8: You
      Build responsive user experience: 9: You
    section Professional Application
      Deploy complete AI system: 7: You
      Optimize performance patterns: 8: You
      Create production-ready app: 9: You
```

**Destinasi Perjalanan Anda**: Menjelang akhir pelajaran ini, anda akan membina aplikasi lengkap yang dikuasakan AI menggunakan teknologi dan corak yang sama yang menggerakkan pembantu AI moden seperti ChatGPT, Claude, dan Google Bard.

## Memahami AI: Daripada Misteri kepada Penguasaan

Sebelum menyelami kod, mari kita fahami apa yang kita sedang kerjakan. Jika anda pernah menggunakan API sebelum ini, anda tahu corak asasnya: hantar permintaan, terima respons.

API AI mengikuti struktur yang serupa, tetapi bukannya mengambil data yang telah disimpan daripada pangkalan data, mereka menjana respons baru berdasarkan corak yang dipelajari daripada sejumlah besar teks. Fikirkan ia seperti perbezaan antara sistem katalog perpustakaan dan pustakawan yang berpengetahuan yang boleh mensintesis maklumat daripada pelbagai sumber.

### Apa Sebenarnya "Generative AI"?

Pertimbangkan bagaimana Batu Rosetta membolehkan sarjana memahami hieroglif Mesir dengan mencari corak antara bahasa yang diketahui dan tidak diketahui. Model AI berfungsi dengan cara yang sama – mereka mencari corak dalam sejumlah besar teks untuk memahami bagaimana bahasa berfungsi, kemudian menggunakan corak tersebut untuk menjana respons yang sesuai kepada soalan baru.

**Mari saya pecahkan ini dengan perbandingan ringkas:**
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

Model AI belajar melalui pendedahan kepada dataset yang sangat besar yang mengandungi teks daripada buku, artikel, dan perbualan. Melalui proses ini, mereka mengenal pasti corak dalam:
- Bagaimana pemikiran disusun dalam komunikasi bertulis
- Perkataan mana yang biasanya muncul bersama
- Bagaimana perbualan biasanya mengalir
- Perbezaan kontekstual antara komunikasi formal dan tidak formal

**Ia serupa dengan bagaimana ahli arkeologi menyahkod bahasa purba**: mereka menganalisis ribuan contoh untuk memahami tatabahasa, perbendaharaan kata, dan konteks budaya, akhirnya mampu mentafsir teks baru menggunakan corak yang dipelajari.

### Kenapa GitHub Models?

Kita menggunakan GitHub Models atas sebab yang sangat praktikal – ia memberi kita akses kepada AI peringkat perusahaan tanpa perlu menyediakan infrastruktur AI kita sendiri (yang, percayalah, anda tidak mahu lakukan sekarang!). Fikirkan ia seperti menggunakan API cuaca daripada cuba meramalkan cuaca sendiri dengan menyediakan stesen cuaca di mana-mana.

Ia pada dasarnya "AI-as-a-Service," dan bahagian terbaiknya? Ia percuma untuk bermula, jadi anda boleh bereksperimen tanpa risau tentang bil yang besar.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Kita akan menggunakan GitHub Models untuk integrasi backend kita, yang menyediakan akses kepada keupayaan AI peringkat profesional melalui antara muka mesra pembangun. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) berfungsi sebagai persekitaran ujian di mana anda boleh bereksperimen dengan model AI yang berbeza dan memahami keupayaannya sebelum melaksanakannya dalam kod.

## 🧠 Ekosistem Pembangunan Aplikasi AI

```mermaid
mindmap
  root((AI Development))
    Understanding AI
      Generative Models
        Pattern Recognition
        Content Generation
        Context Understanding
        Response Synthesis
      AI Parameters
        Temperature Control
        Token Limits
        Top-p Filtering
        System Prompts
    Backend Architecture
      API Integration
        GitHub Models
        Authentication
        Request Handling
        Error Management
      Python Infrastructure
        FastAPI Framework
        Async Operations
        Environment Security
        CORS Configuration
    Frontend Experience
      Chat Interface
        Real-time Updates
        Message History
        User Feedback
        Loading States
      Modern Web Tech
        ES6 Classes
        Async/Await
        DOM Manipulation
        Event Handling
    Professional Patterns
      Security Best Practices
        Token Management
        Input Validation
        XSS Prevention
        Error Boundaries
      Production Readiness
        Performance Optimization
        Responsive Design
        Accessibility
        Testing Strategies
```

**Prinsip Teras**: Pembangunan aplikasi AI menggabungkan kemahiran pembangunan web tradisional dengan integrasi perkhidmatan AI, mencipta aplikasi pintar yang terasa semula jadi dan responsif kepada pengguna.

![Antara muka GitHub Models AI Playground dengan pilihan model dan kawasan ujian](../../../translated_images/ms/playground.d2b927122224ff8f.webp)

**Inilah yang membuatkan playground sangat berguna:**
- **Cuba** model AI yang berbeza seperti GPT-4o-mini, Claude, dan lain-lain (semuanya percuma!)
- **Uji** idea dan arahan anda sebelum menulis sebarang kod
- **Dapatkan** snippet kod siap guna dalam bahasa pengaturcaraan kegemaran anda
- **Laraskan** tetapan seperti tahap kreativiti dan panjang respons untuk melihat bagaimana ia mempengaruhi output

Setelah anda bermain-main sedikit, hanya klik tab "Code" dan pilih bahasa pengaturcaraan anda untuk mendapatkan kod pelaksanaan yang anda perlukan.

![Pilihan playground menunjukkan pilihan penjanaan kod untuk bahasa pengaturcaraan yang berbeza](../../../translated_images/ms/playground-choice.1d23ba7d407f4758.webp)

## Menyediakan Integrasi Backend Python

Sekarang mari kita laksanakan integrasi AI menggunakan Python. Python sangat baik untuk aplikasi AI kerana sintaksnya yang mudah dan perpustakaan yang berkuasa. Kita akan bermula dengan kod daripada playground GitHub Models dan kemudian menstruktur semula ia menjadi fungsi yang boleh digunakan semula dan sedia untuk pengeluaran.

### Memahami Pelaksanaan Asas

Apabila anda mengambil kod Python daripada playground, anda akan mendapat sesuatu yang kelihatan seperti ini. Jangan risau jika ia kelihatan banyak pada mulanya – mari kita lalui ia satu persatu:

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
- **Kita menyusun** perbualan kita dengan "peranan" yang berbeza – fikirkan ia seperti menetapkan adegan untuk lakonan
- **Kita menghantar** permintaan kita kepada AI dengan beberapa parameter penalaan halus
- **Kita mengekstrak** teks respons sebenar daripada semua data yang kembali

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

**Fikirkan ia seperti mengarahkan lakonan:**
- **Peranan sistem**: Seperti arahan pentas untuk pelakon – ia memberitahu AI bagaimana untuk bertindak, keperibadian apa yang dimiliki, dan bagaimana untuk memberi respons
- **Peranan pengguna**: Soalan atau mesej sebenar daripada orang yang menggunakan aplikasi anda
- **Peranan pembantu**: Respons AI (anda tidak menghantar ini, tetapi ia muncul dalam sejarah perbualan)

**Analogi dunia nyata**: Bayangkan anda memperkenalkan seorang rakan kepada seseorang di pesta:
- **Mesej sistem**: "Ini rakan saya Sarah, dia seorang doktor yang hebat dalam menjelaskan konsep perubatan dengan cara yang mudah"
- **Mesej pengguna**: "Boleh terangkan bagaimana vaksin berfungsi?"
- **Respons pembantu**: Sarah menjawab sebagai doktor yang mesra, bukan sebagai peguam atau chef

### Memahami Parameter AI: Penalaan Tingkah Laku Respons

Parameter berangka dalam panggilan API AI mengawal bagaimana model menjana respons. Tetapan ini membolehkan anda melaraskan tingkah laku AI untuk pelbagai kegunaan:

#### Temperature (0.0 hingga 2.0): Dail Kreativiti

**Apa yang ia lakukan**: Mengawal sejauh mana kreatif atau boleh diramal respons AI.

**Fikirkan ia seperti tahap improvisasi pemuzik jazz:**
- **Temperature = 0.1**: Bermain melodi yang sama setiap kali (sangat boleh diramal)
- **Temperature = 0.7**: Menambah beberapa variasi yang menarik sambil tetap dikenali (kreativiti seimbang)
- **Temperature = 1.5**: Jazz eksperimen penuh dengan giliran yang tidak dijangka (sangat tidak boleh diramal)

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

#### Max Tokens (1 hingga 4096+): Pengawal Panjang Respons

**Apa yang ia lakukan**: Menetapkan had pada sejauh mana respons AI boleh menjadi panjang.

**Fikirkan token sebagai kira-kira bersamaan dengan perkataan** (kira-kira 1 token = 0.75 perkataan dalam Bahasa Inggeris):
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

**Apa yang ia lakukan**: Mengawal sejauh mana AI tetap fokus pada respons yang paling mungkin.

**Bayangkan AI mempunyai perbendaharaan kata yang besar, disenaraikan mengikut sejauh mana setiap perkataan mungkin**:
- **top_p=0.1**: Hanya mempertimbangkan 10% perkataan yang paling mungkin (sangat fokus)
- **top_p=0.9**: Mempertimbangkan 90% perkataan yang mungkin (lebih kreatif)
- **top_p=1.0**: Mempertimbangkan segalanya (variasi maksimum)

**Sebagai contoh**: Jika anda bertanya "Langit biasanya..."
- **Top_p rendah**: Hampir pasti mengatakan "biru"
- **Top_p tinggi**: Mungkin mengatakan "biru", "berawan", "luas", "berubah", "indah", dll.

### Menggabungkan Semuanya: Kombinasi Parameter untuk Kegunaan Berbeza

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

```mermaid
quadrantChart
    title AI Parameter Optimization Matrix
    x-axis Low Creativity --> High Creativity
    y-axis Short Response --> Long Response
    
    quadrant-1 Creative Content
    quadrant-2 Detailed Analysis
    quadrant-3 Quick Facts
    quadrant-4 Conversational AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```

**Memahami kenapa parameter ini penting**: Aplikasi yang berbeza memerlukan jenis respons yang berbeza. Bot khidmat pelanggan harus konsisten dan faktual (temperature rendah), manakala pembantu penulisan kreatif harus imaginatif dan pelbagai (temperature tinggi). Memahami parameter ini memberi anda kawalan ke atas keperibadian dan gaya respons AI anda.
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
- **Termasuk** docstring terperinci yang menerangkan tujuan dan parameter fungsi
- **Mengembalikan** hanya kandungan respons, menjadikannya mudah digunakan dalam API web kita
- **Menjaga** parameter model yang sama untuk tingkah laku AI yang konsisten

### Keajaiban Mesej Sistem: Memprogram Keperibadian AI

Jika parameter mengawal bagaimana AI berfikir, mesej sistem mengawal siapa AI fikir ia adalah. Ini sebenarnya salah satu bahagian paling menarik dalam bekerja dengan AI – anda pada dasarnya memberikan AI keperibadian lengkap, tahap kepakaran, dan gaya komunikasi.

**Fikirkan mesej sistem seperti memilih pelakon untuk peranan yang berbeza**: Daripada mempunyai satu pembantu generik, anda boleh mencipta pakar khusus untuk situasi yang berbeza. Perlukan guru yang sabar? Rakan brainstorming yang kreatif? Penasihat perniagaan yang tegas? Hanya ubah mesej sistem!

#### Kenapa Mesej Sistem Sangat Berkuasa

Inilah bahagian yang menarik: Model AI telah dilatih pada banyak perbualan di mana orang mengadopsi peranan dan tahap kepakaran yang berbeza. Apabila anda memberikan AI peranan tertentu, ia seperti mengaktifkan semua corak yang dipelajari itu.

**Ia seperti lakonan kaedah untuk AI**: Beritahu seorang pelakon "anda seorang profesor tua yang bijak" dan lihat bagaimana mereka secara automatik menyesuaikan postur, perbendaharaan kata, dan tingkah laku mereka. AI melakukan sesuatu yang sangat serupa dengan corak bahasa.

#### Membina Mesej Sistem yang Berkesan: Seni dan Sains

**Anatomi mesej sistem yang hebat:**
1. **Peranan/Identiti**: Siapa AI?
2. **Kepakaran**: Apa yang mereka tahu?
3. **Gaya komunikasi**: Bagaimana mereka bercakap?
4. **Arahan spesifik**: Apa yang mereka harus fokuskan?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Contoh Mesej Sistem dengan Konteks

Mari lihat bagaimana mesej sistem yang berbeza mencipta keperibadian AI yang sama sekali berbeza:

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

Mari uji soalan yang sama dengan mesej sistem yang berbeza untuk melihat perbezaan dramatik:

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

#### Teknik Mesej Sistem Lanjutan

**1. Menetapkan Konteks**: Berikan AI maklumat latar belakang
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Format Output**: Beritahu AI bagaimana untuk menyusun respons
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

**3. Tetapan Kekangan**: Tentukan apa yang AI TIDAK boleh lakukan
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Kenapa Ini Penting untuk Pembantu Chat Anda

Memahami arahan sistem memberikan kuasa luar biasa untuk mencipta pembantu AI yang khusus:
- **Bot khidmat pelanggan**: Membantu, sabar, sedar polisi
- **Tutor pembelajaran**: Menggalakkan, langkah demi langkah, memeriksa pemahaman
- **Rakan kreatif**: Imaginatif, membina idea, bertanya "bagaimana jika?"
- **Pakar teknikal**: Tepat, terperinci, sedar keselamatan

**Wawasan utama**: Anda bukan sekadar menggunakan API AI – anda sedang mencipta personaliti AI yang disesuaikan untuk memenuhi keperluan khusus anda. Inilah yang menjadikan aplikasi AI moden terasa peribadi dan berguna, bukannya generik.

### 🎯 Pemeriksaan Pedagogi: Pengaturcaraan Personaliti AI

**Berhenti dan Renungkan**: Anda baru sahaja belajar untuk memprogram personaliti AI melalui arahan sistem. Ini adalah kemahiran asas dalam pembangunan aplikasi AI moden.

**Penilaian Diri Pantas**:
- Bolehkah anda menerangkan bagaimana arahan sistem berbeza daripada mesej pengguna biasa?
- Apa perbezaan antara parameter suhu dan top_p?
- Bagaimana anda akan mencipta arahan sistem untuk kegunaan tertentu (seperti tutor pengaturcaraan)?

**Hubungan Dunia Nyata**: Teknik arahan sistem yang anda pelajari digunakan dalam setiap aplikasi AI utama - daripada bantuan pengaturcaraan GitHub Copilot hingga antara muka perbualan ChatGPT. Anda sedang menguasai corak yang sama digunakan oleh pasukan produk AI di syarikat teknologi besar.

**Soalan Cabaran**: Bagaimana anda boleh mereka personaliti AI yang berbeza untuk jenis pengguna yang berbeza (pemula vs pakar)? Pertimbangkan bagaimana model AI yang sama boleh melayani khalayak yang berbeza melalui kejuruteraan arahan.

## Membina API Web dengan FastAPI: Hab Komunikasi AI Berprestasi Tinggi Anda

Sekarang mari kita bina backend yang menghubungkan frontend anda kepada perkhidmatan AI. Kita akan menggunakan FastAPI, rangka kerja Python moden yang cemerlang dalam membina API untuk aplikasi AI.

FastAPI menawarkan beberapa kelebihan untuk projek jenis ini: sokongan async terbina untuk menangani permintaan serentak, penjanaan dokumentasi API automatik, dan prestasi yang sangat baik. Pelayan FastAPI anda bertindak sebagai perantara yang menerima permintaan daripada frontend, berkomunikasi dengan perkhidmatan AI, dan mengembalikan respons yang diformatkan.

### Kenapa FastAPI untuk Aplikasi AI?

Anda mungkin tertanya-tanya: "Bukankah saya boleh terus memanggil AI dari JavaScript frontend saya?" atau "Kenapa FastAPI dan bukan Flask atau Django?" Soalan yang bagus!

**Inilah sebabnya FastAPI sesuai untuk apa yang kita bina:**
- **Async secara lalai**: Boleh menguruskan pelbagai permintaan AI sekaligus tanpa tersekat
- **Dokumentasi automatik**: Lawati `/docs` dan dapatkan halaman dokumentasi API interaktif yang cantik secara percuma
- **Validasi terbina**: Menangkap kesilapan sebelum ia menyebabkan masalah
- **Sangat pantas**: Salah satu rangka kerja Python terpantas
- **Python moden**: Menggunakan semua ciri Python terkini dan terbaik

**Dan inilah sebabnya kita memerlukan backend:**

**Keselamatan**: Kunci API AI anda seperti kata laluan – jika anda meletakkannya dalam JavaScript frontend, sesiapa yang melihat kod sumber laman web anda boleh mencurinya dan menggunakan kredit AI anda. Backend memastikan kredensial sensitif selamat.

**Had Kadar & Kawalan**: Backend membolehkan anda mengawal kekerapan pengguna boleh membuat permintaan, melaksanakan pengesahan pengguna, dan menambah log untuk menjejaki penggunaan.

**Pemprosesan Data**: Anda mungkin ingin menyimpan perbualan, menapis kandungan yang tidak sesuai, atau menggabungkan pelbagai perkhidmatan AI. Backend adalah tempat logik ini berada.

**Senibina menyerupai model klien-pelayan:**
- **Frontend**: Lapisan antara muka pengguna untuk interaksi
- **Backend API**: Lapisan pemprosesan dan penghalaan permintaan
- **Perkhidmatan AI**: Pengiraan luaran dan penjanaan respons
- **Pembolehubah Persekitaran**: Konfigurasi dan penyimpanan kredensial yang selamat

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
1. **Interaksi pengguna**: Orang menaip dalam antara muka chat
2. **Pemprosesan frontend**: JavaScript menangkap input dan memformatnya sebagai JSON
3. **Validasi API**: FastAPI secara automatik memvalidasi permintaan menggunakan model Pydantic
4. **Integrasi AI**: Backend menambah konteks (arahan sistem) dan memanggil perkhidmatan AI
5. **Pengendalian respons**: API menerima respons AI dan boleh mengubahnya jika diperlukan
6. **Paparan frontend**: JavaScript menunjukkan respons dalam antara muka chat

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

```mermaid
flowchart TD
    A[User Input] --> B[Frontend Validation]
    B --> C[HTTP POST Request]
    C --> D[FastAPI Router]
    D --> E[Pydantic Validation]
    E --> F[AI Function Call]
    F --> G[GitHub Models API]
    G --> H[Response Processing]
    H --> I[JSON Response]
    I --> J[Frontend Update]
    
    subgraph "Security Layer"
        K[CORS Middleware]
        L[Environment Variables]
        M[Error Handling]
    end
    
    D --> K
    F --> L
    H --> M
```

### Mencipta Aplikasi FastAPI

Mari kita bina API kita langkah demi langkah. Cipta fail bernama `api.py` dengan kod FastAPI berikut:

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
- **Import** FastAPI untuk fungsi rangka kerja web moden dan Pydantic untuk validasi data
- **Cipta** dokumentasi API automatik (tersedia di `/docs` apabila pelayan berjalan)
- **Aktifkan** middleware CORS untuk membenarkan permintaan frontend dari asal yang berbeza
- **Tentukan** model Pydantic untuk validasi dan dokumentasi permintaan/respons automatik
- **Gunakan** endpoint async untuk prestasi lebih baik dengan permintaan serentak
- **Laksanakan** kod status HTTP yang betul dan pengendalian kesilapan dengan HTTPException
- **Sertakan** log berstruktur untuk pemantauan dan debugging
- **Sediakan** endpoint pemeriksaan kesihatan untuk memantau status perkhidmatan

**Kelebihan utama FastAPI berbanding rangka kerja tradisional:**
- **Validasi automatik**: Model Pydantic memastikan integriti data sebelum pemprosesan
- **Dokumentasi interaktif**: Lawati `/docs` untuk dokumentasi API yang dijana secara automatik dan boleh diuji
- **Keselamatan jenis**: Petunjuk jenis Python mencegah kesilapan runtime dan meningkatkan kualiti kod
- **Sokongan async**: Menguruskan pelbagai permintaan AI secara serentak tanpa menyekat
- **Prestasi**: Pemprosesan permintaan yang jauh lebih pantas untuk aplikasi masa nyata

### Memahami CORS: Pengawal Keselamatan Web

CORS (Cross-Origin Resource Sharing) seperti pengawal keselamatan di bangunan yang memeriksa sama ada pelawat dibenarkan masuk. Mari kita fahami kenapa ini penting dan bagaimana ia mempengaruhi aplikasi anda.

#### Apa itu CORS dan Kenapa Ia Wujud?

**Masalah**: Bayangkan jika mana-mana laman web boleh membuat permintaan ke laman web bank anda bagi pihak anda tanpa kebenaran anda. Itu akan menjadi mimpi ngeri keselamatan! Penyemak imbas mencegah ini secara lalai melalui "Dasar Asal Sama."

**Dasar Asal Sama**: Penyemak imbas hanya membenarkan laman web membuat permintaan ke domain, port, dan protokol yang sama dari mana ia dimuatkan.

**Analogi dunia nyata**: Ia seperti keselamatan bangunan apartmen – hanya penduduk (asal sama) boleh mengakses bangunan secara lalai. Jika anda ingin membenarkan rakan (asal berbeza) melawat, anda perlu memberitahu keselamatan bahawa ia dibenarkan.

#### CORS dalam Persekitaran Pembangunan Anda

Semasa pembangunan, frontend dan backend anda berjalan pada port yang berbeza:
- Frontend: `http://localhost:3000` (atau file:// jika membuka HTML secara langsung)
- Backend: `http://localhost:5000`

Ini dianggap "asal berbeza" walaupun ia berada pada komputer yang sama!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Apa yang konfigurasi CORS lakukan dalam praktik:**
- **Tambah** header HTTP khas kepada respons API yang memberitahu penyemak imbas "permintaan asal silang ini dibenarkan"
- **Tangani** permintaan "preflight" (penyemak imbas kadang-kadang memeriksa kebenaran sebelum menghantar permintaan sebenar)
- **Cegah** kesilapan "disekat oleh polisi CORS" dalam konsol penyemak imbas anda

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

**Kenapa ini penting**: Dalam pembangunan, `CORS(app)` seperti membiarkan pintu depan anda tidak berkunci – mudah tetapi tidak selamat. Dalam pengeluaran, anda ingin menentukan dengan tepat laman web mana yang boleh berkomunikasi dengan API anda.

#### Senario dan Penyelesaian CORS yang Biasa

| Senario | Masalah | Penyelesaian |
|---------|---------|--------------|
| **Pembangunan Tempatan** | Frontend tidak dapat mencapai backend | Tambah CORSMiddleware ke FastAPI |
| **GitHub Pages + Heroku** | Frontend yang diterbitkan tidak dapat mencapai API | Tambah URL GitHub Pages anda ke asal CORS |
| **Domain Tersuai** | Kesilapan CORS dalam pengeluaran | Kemas kini asal CORS untuk sepadan dengan domain anda |
| **Aplikasi Mudah Alih** | Aplikasi tidak dapat mencapai API web | Tambah domain aplikasi anda atau gunakan `*` dengan berhati-hati |

**Petua profesional**: Anda boleh memeriksa header CORS dalam Alat Pembangun penyemak imbas anda di bawah tab Network. Cari header seperti `Access-Control-Allow-Origin` dalam respons.

### Pengendalian Kesilapan dan Validasi

Perhatikan bagaimana API kita termasuk pengendalian kesilapan yang betul:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Prinsip validasi utama:**
- **Periksa** medan yang diperlukan sebelum memproses permintaan
- **Kembalikan** mesej kesilapan yang bermakna dalam format JSON
- **Gunakan** kod status HTTP yang sesuai (400 untuk permintaan buruk)
- **Sediakan** maklum balas yang jelas untuk membantu pembangun frontend menyelesaikan masalah

## Menyediakan dan Menjalankan Backend Anda

Sekarang kita mempunyai integrasi AI dan pelayan FastAPI yang siap, mari kita jalankan semuanya. Proses penyediaan melibatkan pemasangan kebergantungan Python, konfigurasi pembolehubah persekitaran, dan memulakan pelayan pembangunan anda.

### Penyediaan Persekitaran Python

Mari kita sediakan persekitaran pembangunan Python anda. Persekitaran maya seperti pendekatan compartmentalized Projek Manhattan – setiap projek mendapat ruang terpencil sendiri dengan alat dan kebergantungan tertentu, mencegah konflik antara projek yang berbeza.

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
- **Cipta** gelembung Python kita sendiri di mana kita boleh memasang pakej tanpa menjejaskan apa-apa yang lain
- **Aktifkan** supaya terminal kita tahu untuk menggunakan persekitaran tertentu ini
- **Pasang** keperluan: OpenAI untuk magik AI, FastAPI untuk API web kita, Uvicorn untuk menjalankannya, dan python-dotenv untuk pengurusan rahsia yang selamat

**Kebergantungan utama dijelaskan:**
- **FastAPI**: Rangka kerja web moden dan pantas dengan dokumentasi API automatik
- **Uvicorn**: Pelayan ASGI yang sangat pantas yang menjalankan aplikasi FastAPI
- **OpenAI**: Perpustakaan rasmi untuk integrasi Model GitHub dan API OpenAI
- **python-dotenv**: Pemuatan pembolehubah persekitaran yang selamat dari fail .env

### Konfigurasi Persekitaran: Menjaga Rahsia Tetap Selamat

Sebelum kita memulakan API kita, kita perlu bercakap tentang salah satu pelajaran paling penting dalam pembangunan web: bagaimana menjaga rahsia anda benar-benar rahsia. Pembolehubah persekitaran seperti peti deposit keselamatan yang hanya aplikasi anda boleh akses.

#### Apa itu Pembolehubah Persekitaran?

**Fikirkan pembolehubah persekitaran seperti peti deposit keselamatan** – anda meletakkan barang berharga anda di sana, dan hanya anda (dan aplikasi anda) mempunyai kunci untuk mengeluarkannya. Daripada menulis maklumat sensitif secara langsung dalam kod anda (di mana sesiapa sahaja boleh melihatnya), anda menyimpannya dengan selamat dalam persekitaran.

**Inilah perbezaannya:**
- **Cara yang salah**: Menulis kata laluan anda pada nota melekit dan meletakkannya di monitor anda
- **Cara yang betul**: Menyimpan kata laluan anda dalam pengurus kata laluan yang selamat yang hanya anda boleh akses

#### Kenapa Pembolehubah Persekitaran Penting

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

**Apa yang berlaku apabila anda kodkan rahsia:**
1. **Pendedahan kawalan versi**: Sesiapa yang mempunyai akses kepada repositori Git anda melihat kunci API anda
2. **Repositori awam**: Jika anda menolak ke GitHub, kunci anda kelihatan kepada seluruh internet
3. **Perkongsian pasukan**: Pembangun lain yang bekerja pada projek anda mendapat akses kepada kunci API peribadi anda
4. **Pelanggaran keselamatan**: Jika seseorang mencuri kunci API anda, mereka boleh menggunakan kredit AI anda

#### Menyediakan Fail Persekitaran Anda

Cipta fail `.env` dalam direktori backend anda. Fail ini menyimpan rahsia anda secara tempatan:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Memahami fail .env:**
- **Satu rahsia setiap baris** dalam format `KEY=value`
- **Tiada ruang** di sekitar tanda sama
- **Tiada tanda petikan** diperlukan di sekitar nilai (biasanya)
- **Komen** bermula dengan `#`

#### Mencipta Token Akses Peribadi GitHub Anda

Token GitHub anda seperti kata laluan khas yang memberikan aplikasi anda kebenaran untuk menggunakan perkhidmatan AI GitHub:

**Langkah demi langkah penciptaan token:**
1. **Pergi ke Tetapan GitHub** → Tetapan pembangun → Token akses peribadi → Token (klasik)
2. **Klik "Cipta token baru (klasik)"**
3. **Tetapkan tamat tempoh** (30 hari untuk ujian, lebih lama untuk pengeluaran)
4. **Pilih skop**: Tandakan "repo" dan mana-mana kebenaran lain yang anda perlukan
5. **Cipta token** dan salin segera (anda tidak boleh melihatnya lagi!)
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

**Apa yang kod ini lakukan:**
- **Muatkan** fail .env anda dan membuat pembolehubah tersedia untuk Python
- **Periksa** jika token yang diperlukan wujud (pengendalian kesilapan yang baik!)
- **Naikkan** kesilapan yang jelas jika token hilang
- **Gunakan** token dengan selamat tanpa mendedahkannya dalam kod

#### Keselamatan Git: Fail .gitignore

Fail `.gitignore` anda memberitahu Git fail mana yang tidak pernah dijejak atau dimuat naik:

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

**Kenapa ini penting**: Sebaik sahaja anda menambah `.env` ke `.gitignore`, Git akan mengabaikan fail persekitaran anda, mencegah anda daripada secara tidak sengaja memuat naik rahsia anda ke GitHub.

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

**Kenapa ini penting**: Anda tidak mahu eksperimen pembangunan anda mempengaruhi kuota penggunaan AI pengeluaran anda, dan anda mahukan tahap keselamatan yang berbeza untuk persekitaran yang berbeza.

### Memulakan Pelayan Pembangunan Anda: Menghidupkan FastAPI Anda
Kini tiba saat yang dinanti-nantikan – memulakan pelayan pembangunan FastAPI anda dan melihat integrasi AI anda berfungsi! FastAPI menggunakan Uvicorn, pelayan ASGI yang sangat pantas yang direka khas untuk aplikasi Python async.

#### Memahami Proses Permulaan Pelayan FastAPI

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Apabila anda menjalankan arahan ini, berikut adalah apa yang berlaku di belakang tabir:

**1. Python memuatkan aplikasi FastAPI anda**:
- Mengimport semua perpustakaan yang diperlukan (FastAPI, Pydantic, OpenAI, dll.)
- Memuatkan pembolehubah persekitaran dari fail `.env` anda
- Mencipta instance aplikasi FastAPI dengan dokumentasi automatik

**2. Uvicorn mengkonfigurasi pelayan ASGI**:
- Mengikat ke port 5000 dengan keupayaan pengendalian permintaan async
- Menyediakan penghalaan permintaan dengan pengesahan automatik
- Mengaktifkan hot reload untuk pembangunan (memulakan semula apabila fail berubah)
- Menjana dokumentasi API interaktif

**3. Pelayan mula mendengar**:
- Terminal anda menunjukkan: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Pelayan boleh mengendalikan permintaan AI serentak
- API anda sedia dengan dokumentasi automatik di `http://localhost:5000/docs`

#### Apa Yang Anda Akan Lihat Apabila Semuanya Berfungsi

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
- **Akan memantau perubahan**: Auto-reload diaktifkan untuk pembangunan
- **Uvicorn running**: Pelayan ASGI berprestasi tinggi aktif
- **Proses reloader dimulakan**: Pemantau fail untuk memulakan semula secara automatik
- **Permulaan aplikasi selesai**: Aplikasi FastAPI berjaya diinisialisasi
- **Dokumentasi interaktif tersedia**: Lawati `/docs` untuk dokumentasi API automatik

#### Menguji FastAPI Anda: Pelbagai Pendekatan Berkuasa

FastAPI menyediakan beberapa cara mudah untuk menguji API anda, termasuk dokumentasi interaktif automatik:

**Kaedah 1: Dokumentasi API Interaktif (Disyorkan)**
1. Buka pelayar anda dan pergi ke `http://localhost:5000/docs`
2. Anda akan melihat Swagger UI dengan semua endpoint anda didokumentasikan
3. Klik pada `/hello` → "Try it out" → Masukkan mesej ujian → "Execute"
4. Lihat respons terus di pelayar dengan format yang betul

**Kaedah 2: Ujian Pelayar Asas**
1. Pergi ke `http://localhost:5000` untuk endpoint root
2. Pergi ke `http://localhost:5000/health` untuk memeriksa kesihatan pelayan
3. Ini mengesahkan pelayan FastAPI anda berjalan dengan betul

**Kaedah 3: Ujian Baris Perintah (Lanjutan)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Kaedah 4: Skrip Ujian Python**
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
| `KeyError: 'GITHUB_TOKEN'` | Pembolehubah persekitaran tidak ditemui | Periksa fail `.env` anda dan panggilan `load_dotenv()` |
| `Address already in use` | Port 5000 sedang digunakan | Matikan proses lain yang menggunakan port 5000 atau tukar port |
| `ValidationError` | Data permintaan tidak sepadan dengan model Pydantic | Periksa format permintaan anda sepadan dengan skema yang dijangka |
| `HTTPException 422` | Entiti tidak dapat diproses | Pengesahan permintaan gagal, periksa `/docs` untuk format yang betul |
| `OpenAI API error` | Pengesahan perkhidmatan AI gagal | Pastikan token GitHub anda betul dan mempunyai kebenaran yang sesuai |

#### Amalan Terbaik Pembangunan

**Hot Reloading**: FastAPI dengan Uvicorn menyediakan pemuatan semula automatik apabila anda menyimpan perubahan pada fail Python anda. Ini bermakna anda boleh mengubah kod anda dan menguji dengan segera tanpa memulakan semula secara manual.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Logging untuk Pembangunan**: Tambahkan logging untuk memahami apa yang berlaku:

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

**Mengapa logging membantu**: Semasa pembangunan, anda boleh melihat dengan tepat permintaan apa yang masuk, apa yang AI balas, dan di mana kesilapan berlaku. Ini menjadikan penyahpepijatan lebih pantas.

### Konfigurasi untuk GitHub Codespaces: Pembangunan Awan yang Mudah

GitHub Codespaces adalah seperti mempunyai komputer pembangunan yang berkuasa di awan yang boleh anda akses dari mana-mana pelayar. Jika anda bekerja dalam Codespaces, terdapat beberapa langkah tambahan untuk menjadikan backend anda boleh diakses oleh frontend anda.

#### Memahami Rangkaian Codespaces

Dalam persekitaran pembangunan tempatan, semuanya berjalan pada komputer yang sama:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (atau file://)

Dalam Codespaces, persekitaran pembangunan anda berjalan di pelayan GitHub, jadi "localhost" mempunyai makna yang berbeza. GitHub secara automatik mencipta URL awam untuk perkhidmatan anda, tetapi anda perlu mengkonfigurasinya dengan betul.

#### Langkah-Langkah Konfigurasi Codespaces

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

URL Codespace mengikuti corak yang boleh diramal:
```
https://[codespace-name]-[port].app.github.dev
```

**Memecahkan ini:**
- `codespace-name`: Pengenal unik untuk Codespace anda (biasanya termasuk nama pengguna anda)
- `port`: Nombor port di mana perkhidmatan anda berjalan (5000 untuk aplikasi FastAPI kami)
- `app.github.dev`: Domain GitHub untuk aplikasi Codespace

#### Menguji Tetapan Codespace Anda

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
| **Kekekalan Fail** | Mesin tempatan | Repositori GitHub |
| **Kerjasama** | Sukar untuk berkongsi persekitaran | Mudah untuk berkongsi pautan Codespace |
| **Kebergantungan Internet** | Hanya untuk panggilan API AI | Diperlukan untuk segalanya |

#### Tips Pembangunan Codespace

**Pembolehubah Persekitaran dalam Codespaces**:
Fail `.env` anda berfungsi dengan cara yang sama dalam Codespaces, tetapi anda juga boleh menetapkan pembolehubah persekitaran secara langsung dalam Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Pengurusan Port**:
- Codespaces secara automatik mengesan apabila aplikasi anda mula mendengar pada port
- Anda boleh meneruskan beberapa port secara serentak (berguna jika anda menambah pangkalan data kemudian)
- Port kekal boleh diakses selagi Codespace anda berjalan

**Aliran Kerja Pembangunan**:
1. Buat perubahan kod dalam VS Code
2. FastAPI auto-reload (terima kasih kepada mod reload Uvicorn)
3. Uji perubahan dengan segera melalui URL awam
4. Commit dan push apabila bersedia

> 💡 **Tip Pro**: Tandakan URL backend Codespace anda semasa pembangunan. Oleh kerana nama Codespace adalah stabil, URL tidak akan berubah selagi anda menggunakan Codespace yang sama.

## Mencipta Antara Muka Chat Frontend: Tempat Manusia Bertemu AI

Sekarang kita akan membina antara muka pengguna – bahagian yang menentukan bagaimana orang berinteraksi dengan pembantu AI anda. Seperti reka bentuk antara muka iPhone asal, kita memberi tumpuan kepada menjadikan teknologi kompleks terasa intuitif dan mudah digunakan.

### Memahami Seni Bina Frontend Moden

Antara muka chat kita akan menjadi apa yang kita panggil "Aplikasi Halaman Tunggal" atau SPA. Daripada pendekatan lama di mana setiap klik memuatkan halaman baru, aplikasi kita akan dikemas kini dengan lancar dan serta-merta:

**Laman web lama**: Seperti membaca buku fizikal – anda membalik ke halaman baru sepenuhnya
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

```mermaid
classDiagram
    class ChatApp {
        +messages: HTMLElement
        +form: HTMLElement
        +input: HTMLElement
        +sendButton: HTMLElement
        +BASE_URL: string
        +API_ENDPOINT: string
        
        +constructor()
        +initializeEventListeners()
        +handleSubmit(event)
        +callAPI(message)
        +appendMessage(text, role)
        +escapeHtml(text)
        +scrollToBottom()
        +setLoading(isLoading)
    }
    
    ChatApp --> DOM : manipulates
    ChatApp --> FastAPI : sends requests
```

### Tiga Tiang Pembangunan Frontend

Setiap aplikasi frontend – daripada laman web mudah kepada aplikasi kompleks seperti Discord atau Slack – dibina berdasarkan tiga teknologi teras. Anggaplah mereka sebagai asas kepada segala yang anda lihat dan berinteraksi di web:

**HTML (Struktur)**: Ini adalah asas anda
- Menentukan elemen apa yang wujud (butang, kawasan teks, bekas)
- Memberi makna kepada kandungan (ini adalah tajuk, ini adalah borang, dll.)
- Mencipta struktur asas yang membina segalanya

**CSS (Persembahan)**: Ini adalah pereka dalaman anda
- Menjadikan semuanya kelihatan cantik (warna, fon, susun atur)
- Mengendalikan saiz skrin yang berbeza (telefon vs laptop vs tablet)
- Mencipta animasi lancar dan maklum balas visual

**JavaScript (Kelakuan)**: Ini adalah otak anda
- Bertindak balas kepada apa yang pengguna lakukan (klik, menaip, menatal)
- Berkomunikasi dengan backend anda dan mengemas kini halaman
- Menjadikan semuanya interaktif dan dinamik

**Anggaplah ia seperti reka bentuk seni bina:**
- **HTML**: Pelan struktur (menentukan ruang dan hubungan)
- **CSS**: Reka bentuk estetik dan persekitaran (gaya visual dan pengalaman pengguna)
- **JavaScript**: Sistem mekanikal (fungsi dan interaktiviti)

### Mengapa Seni Bina JavaScript Moden Penting

Aplikasi chat kita akan menggunakan corak JavaScript moden yang anda akan lihat dalam aplikasi profesional. Memahami konsep ini akan membantu anda berkembang sebagai pembangun:

**Seni Bina Berasaskan Kelas**: Kita akan mengatur kod kita ke dalam kelas, yang seperti mencipta pelan untuk objek
**Async/Await**: Cara moden untuk mengendalikan operasi yang mengambil masa (seperti panggilan API)
**Pengaturcaraan Berasaskan Acara**: Aplikasi kita bertindak balas kepada tindakan pengguna (klik, tekan kekunci) daripada berjalan dalam gelung
**Manipulasi DOM**: Mengemas kini kandungan halaman web secara dinamik berdasarkan interaksi pengguna dan respons API

### Tetapan Struktur Projek

Cipta direktori frontend dengan struktur teratur ini:

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

Mari kita mulakan dengan struktur HTML. Pembangunan web moden menekankan "HTML semantik" – menggunakan elemen HTML yang jelas menerangkan tujuannya, bukan hanya penampilannya. Ini menjadikan aplikasi anda boleh diakses oleh pembaca skrin, enjin carian, dan alat lain.

**Mengapa HTML semantik penting**: Bayangkan menerangkan aplikasi chat anda kepada seseorang melalui telefon. Anda akan berkata "ada tajuk di bahagian atas, kawasan utama di mana perbualan muncul, dan borang di bahagian bawah untuk menaip mesej." HTML semantik menggunakan elemen yang sepadan dengan penerangan semula jadi ini.

Cipta `index.html` dengan markup yang disusun dengan teliti ini:

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
- **`<header>`**: Jelas mengenal pasti bahagian atas dengan tajuk dan penerangan
- **`<main>`**: Menetapkan kawasan kandungan utama (di mana perbualan berlaku)
- **`<form>`**: Semantik betul untuk input pengguna, membolehkan navigasi papan kekunci yang betul

#### Ciri Kebolehaksesan
- **`role="log"`**: Memberitahu pembaca skrin kawasan ini mengandungi log mesej kronologi
- **`aria-live="polite"`**: Mengumumkan mesej baru kepada pembaca skrin tanpa mengganggu
- **`aria-label`**: Memberikan label deskriptif untuk kawalan borang
- **`required`**: Pelayar mengesahkan bahawa pengguna memasukkan mesej sebelum menghantar

#### Integrasi CSS dan JavaScript
- **`class` atribut**: Memberikan cangkuk gaya untuk CSS (contohnya, `chat-container`, `input-group`)
- **`id` atribut**: Membolehkan JavaScript mencari dan memanipulasi elemen tertentu
- **Penempatan Skrip**: Fail JavaScript dimuatkan di akhir supaya HTML dimuatkan terlebih dahulu

**Mengapa struktur ini berfungsi:**
- **Aliran logik**: Header → Kandungan utama → Borang input sepadan dengan susunan bacaan semula jadi
- **Boleh diakses papan kekunci**: Pengguna boleh tab melalui semua elemen interaktif
- **Mesra pembaca skrin**: Landmark dan penerangan yang jelas untuk pengguna yang kurang upaya penglihatan
- **Responsif mudah alih**: Tag meta viewport membolehkan reka bentuk responsif
- **Peningkatan progresif**: Berfungsi walaupun CSS atau JavaScript gagal dimuatkan

### Menambah JavaScript Interaktif: Logik Aplikasi Web Moden
Sekarang mari kita bina JavaScript yang menghidupkan antara muka sembang kita. Kita akan menggunakan corak JavaScript moden yang sering digunakan dalam pembangunan web profesional, termasuk kelas ES6, async/await, dan pengaturcaraan berasaskan acara.

#### Memahami Seni Bina JavaScript Moden

Daripada menulis kod prosedur (siri fungsi yang dijalankan mengikut urutan), kita akan mencipta **seni bina berasaskan kelas**. Anggaplah kelas sebagai pelan untuk mencipta objek – seperti bagaimana pelan arkitek boleh digunakan untuk membina beberapa rumah.

**Mengapa menggunakan kelas untuk aplikasi web?**
- **Organisasi**: Semua fungsi berkaitan dikelompokkan bersama
- **Kebolehgunaan semula**: Anda boleh mencipta beberapa instans sembang pada halaman yang sama
- **Penyelenggaraan**: Lebih mudah untuk menyahpepijat dan mengubah ciri tertentu
- **Piawaian profesional**: Corak ini digunakan dalam rangka kerja seperti React, Vue, dan Angular

Cipta `app.js` dengan JavaScript moden dan berstruktur ini:

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

**Corak Async/Await**:
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
Daripada sentiasa memeriksa jika sesuatu berlaku, kita "mendengar" acara:
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
- **Keadaan memuatkan**: Lumpuhkan butang dan paparkan "Menghantar..." semasa menunggu
- **Auto-skrol**: Pastikan mesej terbaru kelihatan
- **Pengesahan input**: Jangan hantar mesej kosong
- **Pintasan papan kekunci**: Kekunci Enter menghantar mesej (seperti aplikasi sembang sebenar)

#### Memahami Aliran Aplikasi

1. **Halaman dimuatkan** → Acara `DOMContentLoaded` dicetuskan → `new ChatApp()` dicipta
2. **Pembina dijalankan** → Mendapatkan rujukan elemen DOM → Menyediakan pendengar acara
3. **Pengguna menaip mesej** → Menekan Enter atau klik Hantar → `handleSubmit` dijalankan
4. **handleSubmit** → Mengesahkan input → Menunjukkan keadaan memuatkan → Memanggil API
5. **API memberi respons** → Tambahkan mesej AI ke sembang → Aktifkan semula antara muka
6. **Sedia untuk mesej seterusnya** → Pengguna boleh terus berbual

Seni bina ini boleh diskalakan – anda boleh menambah ciri seperti penyuntingan mesej, muat naik fail, atau beberapa utas perbualan tanpa menulis semula struktur teras.

### 🎯 Pemeriksaan Pedagogi: Seni Bina Frontend Moden

**Pemahaman Seni Bina**: Anda telah melaksanakan aplikasi halaman tunggal lengkap menggunakan corak JavaScript moden. Ini mewakili pembangunan frontend peringkat profesional.

**Konsep Utama yang Dikuasai**:
- **Seni Bina Kelas ES6**: Struktur kod yang teratur dan mudah diselenggara
- **Corak Async/Await**: Pengaturcaraan asinkron moden
- **Pengaturcaraan Berasaskan Acara**: Reka bentuk antara muka pengguna yang responsif
- **Amalan Keselamatan Terbaik**: Pencegahan XSS dan pengesahan input

**Hubungan Industri**: Corak yang anda pelajari (seni bina berasaskan kelas, operasi asinkron, manipulasi DOM) adalah asas kepada rangka kerja moden seperti React, Vue, dan Angular. Anda sedang membina dengan pemikiran seni bina yang sama digunakan dalam aplikasi pengeluaran.

**Soalan Refleksi**: Bagaimana anda akan memperluaskan aplikasi sembang ini untuk mengendalikan beberapa perbualan atau pengesahan pengguna? Pertimbangkan perubahan seni bina yang diperlukan dan bagaimana struktur kelas akan berkembang.

### Menyusun Antara Muka Sembang Anda

Sekarang mari kita cipta antara muka sembang yang moden dan menarik secara visual dengan CSS. Gaya yang baik menjadikan aplikasi anda kelihatan profesional dan meningkatkan pengalaman pengguna secara keseluruhan. Kita akan menggunakan ciri CSS moden seperti Flexbox, CSS Grid, dan sifat tersuai untuk reka bentuk yang responsif dan boleh diakses.

Cipta `styles.css` dengan gaya komprehensif ini:

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

**Memahami seni bina CSS:**
- **Menggunakan** sifat tersuai CSS (pembolehubah) untuk tema yang konsisten dan penyelenggaraan mudah
- **Melaksanakan** susun atur Flexbox untuk reka bentuk responsif dan penjajaran yang betul
- **Termasuk** animasi lancar untuk penampilan mesej tanpa mengganggu
- **Menyediakan** perbezaan visual antara mesej pengguna, respons AI, dan keadaan ralat
- **Menyokong** reka bentuk responsif yang berfungsi pada peranti desktop dan mudah alih
- **Mempertimbangkan** kebolehaksesan dengan keutamaan gerakan yang dikurangkan dan nisbah kontras yang betul
- **Menawarkan** sokongan mod gelap berdasarkan keutamaan sistem pengguna

### Mengkonfigurasi URL Backend Anda

Langkah terakhir adalah mengemas kini `BASE_URL` dalam JavaScript anda untuk sepadan dengan pelayan backend anda:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Menentukan URL backend anda:**
- **Pembangunan tempatan**: Gunakan `http://localhost:5000` jika menjalankan frontend dan backend secara tempatan
- **Codespaces**: Cari URL backend anda di tab Ports selepas menjadikan port 5000 awam
- **Pengeluaran**: Gantikan dengan domain sebenar anda semasa menyebarkan ke perkhidmatan hosting

> 💡 **Petua Ujian**: Anda boleh menguji backend anda secara langsung dengan melawat URL root dalam pelayar anda. Anda sepatutnya melihat mesej selamat datang daripada pelayan FastAPI anda.

## Ujian dan Penyebaran

Sekarang anda telah membina komponen frontend dan backend, mari kita uji semuanya berfungsi bersama dan terokai pilihan penyebaran untuk berkongsi pembantu sembang anda dengan orang lain.

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

4. **Uji fungsi sembang**:
   - Taip mesej dalam medan input
   - Klik "Hantar" atau tekan Enter
   - Sahkan AI memberi respons dengan betul
   - Periksa konsol pelayar untuk sebarang ralat JavaScript

### Menyelesaikan Masalah Biasa

| Masalah | Gejala | Penyelesaian |
|---------|----------|----------|
| **Ralat CORS** | Frontend tidak dapat mencapai backend | Pastikan FastAPI CORSMiddleware dikonfigurasi dengan betul |
| **Ralat Kunci API** | Respons 401 Unauthorized | Periksa pembolehubah persekitaran `GITHUB_TOKEN` anda |
| **Sambungan Ditolak** | Ralat rangkaian dalam frontend | Sahkan URL backend dan bahawa pelayan Flask sedang berjalan |
| **Tiada Respons AI** | Respons kosong atau ralat | Periksa log backend untuk kuota API atau isu pengesahan |

**Langkah penyahpepijatan biasa:**
- **Periksa** Konsol Alat Pembangun pelayar untuk ralat JavaScript
- **Sahkan** tab Rangkaian menunjukkan permintaan dan respons API yang berjaya
- **Semak** output terminal backend untuk ralat Python atau isu API
- **Pastikan** pembolehubah persekitaran dimuatkan dan boleh diakses dengan betul

## 📈 Garis Masa Penguasaan Pembangunan Aplikasi AI Anda

```mermaid
timeline
    title Complete AI Application Development Journey
    
    section AI Foundations
        Understanding Generative AI
            : Grasp pattern recognition concepts
            : Master AI parameter control
            : Learn prompt engineering techniques
        
        GitHub Models Integration
            : Navigate AI service platforms
            : Handle authentication securely
            : Optimize model parameters
    
    section Backend Development
        Python API Architecture
            : Build FastAPI applications
            : Implement async operations
            : Create secure endpoints
        
        AI Service Integration
            : Connect to external AI APIs
            : Handle rate limiting
            : Implement error boundaries
    
    section Frontend Mastery
        Modern JavaScript Patterns
            : Master ES6 class architecture
            : Implement async/await flows
            : Build responsive interfaces
        
        Real-time User Experience
            : Create dynamic chat interfaces
            : Handle loading states
            : Optimize user interactions
    
    section Production Readiness
        Security & Performance
            : Implement secure token management
            : Prevent XSS vulnerabilities
            : Optimize API performance
        
        Professional Deployment
            : Build scalable architectures
            : Create maintainable code
            : Document development processes
```

**🎓 Pencapaian Graduasi**: Anda telah berjaya membina aplikasi berkuasa AI lengkap menggunakan teknologi dan corak seni bina yang sama yang menggerakkan pembantu AI moden. Kemahiran ini mewakili persimpangan pembangunan web tradisional dan integrasi AI terkini.

**🔄 Keupayaan Tahap Seterusnya**:
- Bersedia untuk meneroka rangka kerja AI lanjutan (LangChain, LangGraph)
- Bersedia untuk membina aplikasi AI multi-modal (teks, imej, suara)
- Dilengkapi untuk melaksanakan pangkalan data vektor dan sistem pengambilan
- Asas disediakan untuk pembelajaran mesin dan penalaan model AI

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Deskripsi:** Tingkatkan pembantu sembang dengan menambah sejarah perbualan dan ketekalan mesej. Cabaran ini akan membantu anda memahami cara menguruskan keadaan dalam aplikasi sembang dan melaksanakan penyimpanan data untuk pengalaman pengguna yang lebih baik.

**Arahan:** Ubah aplikasi sembang untuk memasukkan sejarah perbualan yang kekal antara sesi. Tambahkan fungsi untuk menyimpan mesej sembang ke storan tempatan, paparkan sejarah perbualan apabila halaman dimuatkan, dan sertakan butang "Padam Sejarah". Juga laksanakan indikator menaip dan cap masa mesej untuk menjadikan pengalaman sembang lebih realistik.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Tugasan: Bina Pembantu AI Peribadi Anda

Sekarang anda akan mencipta pelaksanaan pembantu AI anda sendiri. Daripada hanya meniru kod tutorial, ini adalah peluang untuk menerapkan konsep sambil membina sesuatu yang mencerminkan minat dan kegunaan anda sendiri.

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
- **Cipta** personaliti AI yang unik – mungkin pembantu memasak yang berguna, rakan penulis kreatif, atau rakan belajar?
- **Tambah** pengendalian ralat yang kukuh supaya aplikasi anda tidak rosak apabila berlaku masalah
- **Tulis** dokumentasi yang jelas untuk sesiapa yang ingin memahami cara API anda berfungsi

**Pembangunan Frontend:**
- **Bina** antara muka sembang yang terasa intuitif dan mesra
- **Tulis** JavaScript moden yang bersih dan membanggakan untuk ditunjukkan kepada pembangun lain
- **Reka** gaya tersuai yang mencerminkan personaliti AI anda – menyeronokkan dan berwarna-warni? Bersih dan minimal? Terpulang kepada anda!
- **Pastikan** ia berfungsi dengan baik pada telefon dan komputer

**Keperluan Personaliti:**
- **Pilih** nama dan personaliti unik untuk pembantu AI anda – mungkin sesuatu yang mencerminkan minat anda atau masalah yang ingin anda selesaikan
- **Sesuaikan** reka bentuk visual untuk sepadan dengan suasana pembantu anda
- **Tulis** mesej selamat datang yang menarik perhatian orang untuk mula berbual
- **Uji** pembantu anda dengan pelbagai jenis soalan untuk melihat bagaimana ia memberi respons

### Idea Peningkatan (Pilihan)

Ingin membawa projek anda ke tahap seterusnya? Berikut adalah beberapa idea menarik untuk diterokai:

| Ciri | Deskripsi | Kemahiran yang Akan Dipraktikkan |
|---------|-------------|------------------------|
| **Sejarah Mesej** | Ingat perbualan walaupun selepas penyegaran halaman | Bekerja dengan localStorage, pengendalian JSON |
| **Indikator Menaip** | Paparkan "AI sedang menaip..." semasa menunggu respons | Animasi CSS, pengaturcaraan async |
| **Cap Masa Mesej** | Paparkan bila setiap mesej dihantar | Pemformatan tarikh/masa, reka bentuk UX |
| **Eksport Sembang** | Benarkan pengguna memuat turun perbualan mereka | Pengendalian fail, eksport data |
| **Penukaran Tema** | Togol mod terang/gelap | Pembolehubah CSS, keutamaan pengguna |
| **Input Suara** | Tambahkan fungsi teks-ke-ucapan | API Web, kebolehaksesan |

### Ujian dan Dokumentasi

**Jaminan Kualiti:**
- **Uji** aplikasi anda dengan pelbagai jenis input dan kes tepi
- **Sahkan** reka bentuk responsif berfungsi pada saiz skrin yang berbeza
- **Periksa** kebolehaksesan dengan navigasi papan kekunci dan pembaca skrin
- **Sahkan** HTML dan CSS untuk pematuhan piawaian

**Keperluan Dokumentasi:**
- **Tulis** README.md yang menerangkan projek anda dan cara menjalankannya
- **Sertakan** tangkapan skrin antara muka sembang anda dalam tindakan
- **Dokumentasikan** sebarang ciri unik atau penyesuaian yang anda tambahkan
- **Berikan** arahan persediaan yang jelas untuk pembangun lain

### Garis Panduan Penyerahan

**Hasil Projek:**
1. Folder projek lengkap dengan semua kod sumber
2. README.md dengan deskripsi projek dan arahan persediaan
3. Tangkapan skrin yang menunjukkan pembantu sembang anda dalam tindakan
4. Refleksi ringkas tentang apa yang anda pelajari dan cabaran yang anda hadapi

**Kriteria Penilaian:**
- **Fungsi**: Adakah pembantu sembang berfungsi seperti yang diharapkan?
- **Kualiti Kod**: Adakah kod teratur, dikomen, dan mudah diselenggara?
- **Reka Bentuk**: Adakah antara muka kelihatan menarik dan mesra pengguna?
- **Kreativiti**: Sejauh mana unik dan diperibadikan pelaksanaan anda?
- **Dokumentasi**: Adakah arahan persediaan jelas dan lengkap?

> 💡 **Petua Kejayaan**: Mulakan dengan keperluan asas dahulu, kemudian tambahkan peningkatan apabila semuanya berfungsi. Fokus pada mencipta pengalaman teras yang kemas sebelum menambah ciri lanjutan.

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

Transformasikan antara muka sembang anda dengan peningkatan visual dan fungsi ini:

**Ciri CSS Lanjutan:**
- **Laksanakan** animasi mesej dan peralihan yang lancar
- **Tambahkan** reka bentuk gelembung sembang tersuai dengan bentuk dan kecerunan CSS
- **Cipta** animasi indikator menaip untuk apabila AI "berfikir"
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
- **Cipta** butang balasan pantas untuk soalan biasa

> 🎯 **Matlamat Pembelajaran**: Cabaran bonus ini membantu anda memahami corak pembangunan web yang maju dan teknik integrasi AI yang digunakan dalam aplikasi produksi.

## Ringkasan dan Langkah Seterusnya

Tahniah! Anda telah berjaya membina pembantu chat berkuasa AI sepenuhnya dari awal. Projek ini telah memberikan anda pengalaman langsung dengan teknologi pembangunan web moden dan integrasi AI – kemahiran yang semakin bernilai dalam landskap teknologi masa kini.

### Apa yang Anda Capai

Sepanjang pelajaran ini, anda telah menguasai beberapa teknologi dan konsep utama:

**Pembangunan Backend:**
- **Mengintegrasikan** dengan GitHub Models API untuk fungsi AI
- **Membina** API RESTful menggunakan Flask dengan pengendalian ralat yang betul
- **Melaksanakan** pengesahan yang selamat menggunakan pembolehubah persekitaran
- **Mengkonfigurasi** CORS untuk permintaan lintas asal antara frontend dan backend

**Pembangunan Frontend:**
- **Mencipta** antara muka chat responsif menggunakan HTML semantik
- **Melaksanakan** JavaScript moden dengan async/await dan seni bina berasaskan kelas
- **Mereka bentuk** antara muka pengguna yang menarik dengan CSS Grid, Flexbox, dan animasi
- **Menambah** ciri kebolehaksesan dan prinsip reka bentuk responsif

**Integrasi Full-Stack:**
- **Menyambungkan** frontend dan backend melalui panggilan API HTTP
- **Mengendalikan** interaksi pengguna masa nyata dan aliran data tak segerak
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

Projek ini telah memperkenalkan anda kepada asas-asas membina aplikasi berkuasa AI, yang mewakili masa depan pembangunan web. Anda kini memahami cara mengintegrasikan keupayaan AI ke dalam aplikasi web tradisional, mencipta pengalaman pengguna yang pintar dan responsif.

### Aplikasi Profesional

Kemahiran yang anda kembangkan dalam pelajaran ini boleh digunakan secara langsung dalam kerjaya pembangunan perisian moden:

- **Pembangunan web full-stack** menggunakan rangka kerja dan API moden
- **Integrasi AI** dalam aplikasi web dan aplikasi mudah alih
- **Reka bentuk dan pembangunan API** untuk seni bina mikroservis
- **Pembangunan antara muka pengguna** dengan fokus pada kebolehaksesan dan reka bentuk responsif
- **Amalan DevOps** termasuk konfigurasi persekitaran dan penyebaran

### Meneruskan Perjalanan Pembangunan AI Anda

**Langkah Pembelajaran Seterusnya:**
- **Terokai** model AI dan API yang lebih maju (GPT-4, Claude, Gemini)
- **Pelajari** teknik kejuruteraan prompt untuk respons AI yang lebih baik
- **Kajian** reka bentuk perbualan dan prinsip pengalaman pengguna chatbot
- **Selidik** keselamatan AI, etika, dan amalan pembangunan AI yang bertanggungjawab
- **Bina** aplikasi yang lebih kompleks dengan memori perbualan dan kesedaran konteks

**Idea Projek Lanjutan:**
- Bilik chat berbilang pengguna dengan moderasi AI
- Chatbot perkhidmatan pelanggan berkuasa AI
- Pembantu pengajaran pendidikan dengan pembelajaran yang diperibadikan
- Kolaborator penulisan kreatif dengan personaliti AI yang berbeza
- Pembantu dokumentasi teknikal untuk pembangun

## Bermula dengan GitHub Codespaces

Ingin mencuba projek ini dalam persekitaran pembangunan awan? GitHub Codespaces menyediakan tetapan pembangunan lengkap dalam pelayar anda, sesuai untuk bereksperimen dengan aplikasi AI tanpa keperluan tetapan tempatan.

### Menyediakan Persekitaran Pembangunan Anda

**Langkah 1: Cipta dari Templat**
- **Navigasi** ke [repositori Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klik** "Use this template" di sudut kanan atas (pastikan anda log masuk ke GitHub)

![Antara muka cipta dari templat menunjukkan butang hijau "Use this template"](../../../translated_images/ms/template.67ad477109d29a2b.webp)

**Langkah 2: Lancarkan Codespaces**
- **Buka** repositori yang baru anda cipta
- **Klik** butang hijau "Code" dan pilih "Codespaces"
- **Pilih** "Create codespace on main" untuk memulakan persekitaran pembangunan anda

![Antara muka cipta codespace dengan pilihan untuk melancarkan persekitaran pembangunan awan](../../../translated_images/ms/codespace.bcecbdf5d2747d3d.webp)

**Langkah 3: Konfigurasi Persekitaran**
Sebaik sahaja Codespace anda dimuatkan, anda akan mempunyai akses kepada:
- **Pra-pasang** Python, Node.js, dan semua alat pembangunan yang diperlukan
- **Antara muka VS Code** dengan sambungan untuk pembangunan web
- **Akses terminal** untuk menjalankan pelayan backend dan frontend
- **Pemajuan port** untuk menguji aplikasi anda

**Apa yang disediakan oleh Codespaces:**
- **Menghapuskan** masalah tetapan dan konfigurasi persekitaran tempatan
- **Menyediakan** persekitaran pembangunan yang konsisten di pelbagai peranti
- **Termasuk** alat dan sambungan yang telah dikonfigurasi untuk pembangunan web
- **Menawarkan** integrasi lancar dengan GitHub untuk kawalan versi dan kolaborasi

> 🚀 **Tip Pro**: Codespaces sangat sesuai untuk pembelajaran dan prototaip aplikasi AI kerana ia menguruskan semua tetapan persekitaran yang kompleks secara automatik, membolehkan anda fokus pada pembinaan dan pembelajaran tanpa masalah konfigurasi.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.