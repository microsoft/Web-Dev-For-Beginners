<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e2c4ae5688e34b4b8b09d52aec56c79e",
  "translation_date": "2025-10-22T23:52:36+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "tr"
}
-->
# AI Çerçevesi

Hiç sıfırdan yapay zeka uygulamaları oluştururken bunalmış hissettiniz mi? Yalnız değilsiniz! Yapay zeka çerçeveleri, yapay zeka geliştirme için bir İsviçre çakısı gibidir - akıllı uygulamalar oluştururken zaman ve zahmetten tasarruf etmenizi sağlayan güçlü araçlardır. Bir yapay zeka çerçevesini iyi organize edilmiş bir kütüphane gibi düşünün: önceden oluşturulmuş bileşenler, standartlaştırılmış API'ler ve akıllı soyutlamalar sunar, böylece uygulama detaylarıyla uğraşmak yerine sorunları çözmeye odaklanabilirsiniz.

Bu derste, LangChain gibi çerçevelerin eskiden karmaşık olan yapay zeka entegrasyon görevlerini nasıl temiz ve okunabilir kodlara dönüştürebileceğini keşfedeceğiz. Gerçek dünya zorluklarını, örneğin konuşmaları takip etme, araç çağırma uygulama ve farklı yapay zeka modellerini tek bir birleşik arayüz üzerinden yönetme gibi konuları ele almayı öğreneceksiniz.

Dersin sonunda, çerçeveleri ne zaman ham API çağrıları yerine kullanmanız gerektiğini, soyutlamalarını nasıl etkili bir şekilde kullanacağınızı ve gerçek dünya kullanımı için hazır yapay zeka uygulamaları nasıl oluşturacağınızı öğreneceksiniz. Hadi, yapay zeka çerçevelerinin projeleriniz için neler yapabileceğini keşfedelim.

## Neden bir çerçeve seçmelisiniz?

Yapay zeka uygulaması oluşturmaya hazırsınız - harika! Ama işte mesele şu: birkaç farklı yol seçeneğiniz var ve her birinin kendi avantajları ve dezavantajları var. Bu, bir yere gitmek için yürümek, bisiklete binmek veya araba kullanmak arasında seçim yapmaya benzer - hepsi sizi oraya götürür, ancak deneyim (ve çaba) tamamen farklı olacaktır.

Yapay zekayı projelerinize entegre etmenin üç ana yolunu inceleyelim:

| Yaklaşım | Avantajlar | En İyi Kullanım Alanı | Dikkat Edilmesi Gerekenler |
|----------|------------|-----------------------|---------------------------|
| **Doğrudan HTTP İstekleri** | Tam kontrol, bağımlılık yok | Basit sorgular, temel bilgileri öğrenme | Daha uzun kod, manuel hata yönetimi |
| **SDK Entegrasyonu** | Daha az kod tekrarı, modele özgü optimizasyon | Tek model uygulamaları | Belirli sağlayıcılarla sınırlı |
| **Yapay Zeka Çerçeveleri** | Birleşik API, yerleşik soyutlamalar | Çoklu model uygulamaları, karmaşık iş akışları | Öğrenme eğrisi, aşırı soyutlama riski |

### Çerçeve Faydaları Pratikte

```mermaid
graph TD
    A[Your Application] --> B[AI Framework]
    B --> C[OpenAI GPT]
    B --> D[Anthropic Claude]
    B --> E[GitHub Models]
    B --> F[Local Models]
    
    B --> G[Built-in Tools]
    G --> H[Memory Management]
    G --> I[Conversation History]
    G --> J[Function Calling]
    G --> K[Error Handling]
```

**Çerçeveler neden önemlidir:**
- **Birleştirir** birden fazla yapay zeka sağlayıcısını tek bir arayüz altında
- **Otomatik olarak yönetir** konuşma hafızasını
- **Hazır araçlar sağlar** gömme ve fonksiyon çağırma gibi yaygın görevler için
- **Hata yönetimi ve yeniden deneme mantığını** düzenler
- **Karmaşık iş akışlarını** okunabilir metot çağrılarına dönüştürür

> 💡 **Profesyonel İpucu**: Farklı yapay zeka modelleri arasında geçiş yaparken veya ajanlar, hafıza ya da araç çağırma gibi karmaşık özellikler oluştururken çerçeveleri kullanın. Temel bilgileri öğrenirken veya basit, odaklanmış uygulamalar oluştururken doğrudan API'lerle çalışmaya devam edin.

**Sonuç**: Bir zanaatkarın özel araçları ile tam bir atölye arasında seçim yapmak gibi, araçları göreve uygun şekilde eşleştirmekle ilgilidir. Çerçeveler karmaşık, özellik açısından zengin uygulamalar için mükemmeldir, doğrudan API'ler ise basit kullanım durumları için iyi çalışır.

## Giriş

Bu derste şunları öğreneceğiz:

- Yaygın bir yapay zeka çerçevesi kullanmak.
- Sohbet konuşmaları, araç kullanımı, hafıza ve bağlam gibi yaygın sorunları ele almak.
- Bunları yapay zeka uygulamaları oluşturmak için kullanmak.

## İlk Yapay Zeka İsteğiniz

Bir soruyu gönderip bir cevap alarak ilk yapay zeka uygulamanızı oluşturarak temellerle başlayalım. Arşimet'in banyosunda yer değiştirme prensibini keşfetmesi gibi, bazen en basit gözlemler en güçlü içgörülere yol açar - ve çerçeveler bu içgörüleri erişilebilir kılar.

### LangChain'i GitHub Modelleriyle Kurmak

GitHub Modellerine bağlanmak için LangChain'i kullanacağız, bu oldukça harika çünkü çeşitli yapay zeka modellerine ücretsiz erişim sağlıyor. En iyi kısmı? Başlamak için yalnızca birkaç basit yapılandırma parametresine ihtiyacınız var:

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# Send a simple prompt
response = llm.invoke("What's the capital of France?")
print(response.content)
```

**Burada neler oluyor:**
- **Bir LangChain istemcisi oluşturur** `ChatOpenAI` sınıfını kullanarak - bu sizin yapay zekaya açılan kapınız!
- **GitHub Modellerine bağlantıyı yapılandırır** kimlik doğrulama tokeninizle
- **Hangi yapay zeka modelinin kullanılacağını belirtir** (`gpt-4o-mini`) - bunu yapay zeka asistanınızı seçmek gibi düşünün
- **Sorunuzu gönderir** `invoke()` metodu ile - işte sihir burada gerçekleşiyor
- **Yanıtı çıkarır ve görüntüler** - ve işte, yapay zeka ile sohbet ediyorsunuz!

> 🔧 **Kurulum Notu**: GitHub Codespaces kullanıyorsanız şanslısınız - `GITHUB_TOKEN` zaten ayarlanmış! Yerel olarak mı çalışıyorsunuz? Endişelenmeyin, sadece doğru izinlere sahip bir kişisel erişim tokeni oluşturmanız gerekecek.

**Beklenen çıktı:**
```text
The capital of France is Paris.
```

```mermaid
sequenceDiagram
    participant App as Your Python App
    participant LC as LangChain
    participant GM as GitHub Models
    participant AI as GPT-4o-mini
    
    App->>LC: llm.invoke("What's the capital of France?")
    LC->>GM: HTTP request with prompt
    GM->>AI: Process prompt
    AI->>GM: Generated response
    GM->>LC: Return response
    LC->>App: response.content
```

## Konuşma Tabanlı Yapay Zeka Oluşturma

İlk örnek temel bilgileri gösteriyor, ancak bu sadece tek bir alışveriş - bir soru soruyorsunuz, bir cevap alıyorsunuz ve işte bu kadar. Gerçek uygulamalarda, yapay zekanızın ne hakkında konuştuğunuzu hatırlamasını istersiniz, tıpkı Watson ve Holmes'un zamanla araştırma konuşmalarını inşa ettiği gibi.

LangChain burada özellikle kullanışlı hale geliyor. Konuşmaları yapılandırmaya yardımcı olan ve yapay zekanıza bir kişilik vermenizi sağlayan farklı mesaj türleri sunar. Bağlam ve karakteri koruyan sohbet deneyimleri oluşturacaksınız.

### Mesaj Türlerini Anlamak

Bu mesaj türlerini bir konuşmada katılımcıların taktığı farklı "şapkalar" olarak düşünün. LangChain, kimin ne söylediğini takip etmek için farklı mesaj sınıfları kullanır:

| Mesaj Türü | Amaç | Örnek Kullanım Durumu |
|------------|------|-----------------------|
| `SystemMessage` | Yapay zekanın kişiliğini ve davranışını tanımlar | "Sen yardımcı bir kodlama asistanısın" |
| `HumanMessage` | Kullanıcı girdisini temsil eder | "Fonksiyonların nasıl çalıştığını açıkla" |
| `AIMessage` | Yapay zeka yanıtlarını saklar | Konuşmadaki önceki yapay zeka yanıtları |

### İlk Konuşmanızı Oluşturmak

Yapay zekamızın belirli bir rol üstlendiği bir konuşma oluşturalım. Onu diplomatik bilgelik ve liderlik ile tanınan bir karakter olan Kaptan Picard olarak canlandıracağız:

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

**Bu konuşma kurulumunu açıklamak:**
- **Yapay zekanın rolünü ve kişiliğini** `SystemMessage` ile belirler
- **İlk kullanıcı sorgusunu** `HumanMessage` ile sağlar
- **Çoklu dönüşlü konuşma için bir temel oluşturur**

Bu örneğin tam kodu şöyle görünüyor:

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

Şuna benzer bir sonuç görmelisiniz:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Konuşma sürekliliğini korumak için (her seferinde bağlamı sıfırlamak yerine), yanıtları mesaj listenize eklemeye devam etmeniz gerekir. Tıpkı hikayeleri nesiller boyunca koruyan sözlü gelenekler gibi, bu yaklaşım kalıcı bir hafıza oluşturur:

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

Oldukça havalı, değil mi? Burada olan şey, LLM'yi iki kez çağırmamız - önce sadece ilk iki mesajımızla, sonra tüm konuşma geçmişiyle. Bu, yapay zekanın sohbetimizi gerçekten takip ediyormuş gibi davranmasını sağlıyor!

Bu kodu çalıştırdığınızda, şöyle bir ikinci yanıt alırsınız:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Bunu bir "belki" olarak alıyorum ;)

## Akış Yanıtları

Hiç ChatGPT'nin yanıtlarını gerçek zamanlı olarak "yazıyormuş" gibi göründüğünü fark ettiniz mi? İşte bu, akışın iş başında olduğu an. Tıpkı yetenekli bir hattatın çalışmasını izlemek gibi - karakterlerin bir anda ortaya çıkması yerine vuruş vuruş belirmesi - akış, etkileşimi daha doğal hissettirir ve anında geri bildirim sağlar.

### LangChain ile Akışı Uygulamak

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
    streaming=True
)

# Stream the response
for chunk in llm.stream("Write a short story about a robot learning to code"):
    print(chunk.content, end="", flush=True)
```

**Akış neden harika:**
- **İçeriği** oluşturulurken gösterir - artık garip beklemeler yok!
- **Kullanıcıların** bir şeylerin gerçekten olduğunu hissetmesini sağlar
- **Daha hızlı hissedilir**, teknik olarak öyle olmasa bile
- **Kullanıcıların** yapay zeka "düşünürken" okumaya başlamasına olanak tanır

> 💡 **Kullanıcı Deneyimi İpucu**: Akış, kod açıklamaları, yaratıcı yazılar veya ayrıntılı eğitimler gibi daha uzun yanıtlarla uğraşırken gerçekten parlıyor. Kullanıcılarınız boş bir ekrana bakmak yerine ilerlemeyi görmeyi sevecek!

## İstek Şablonları

İstek şablonları, klasik hitabet sanatında kullanılan retorik yapılar gibi çalışır - Cicero'nun farklı dinleyicilere hitap ederken aynı ikna edici çerçeveyi koruyarak konuşma kalıplarını nasıl uyarladığını düşünün. Yeniden yazmak zorunda kalmadan farklı bilgileri değiştirerek yeniden kullanılabilir istekler oluşturmanıza olanak tanır. Şablonu bir kez ayarladıktan sonra, sadece değişkenleri ihtiyacınız olan değerlerle doldurursunuz.

### Yeniden Kullanılabilir İstekler Oluşturmak

```python
from langchain_core.prompts import ChatPromptTemplate

# Define a template for code explanations
template = ChatPromptTemplate.from_messages([
    ("system", "You are an expert programming instructor. Explain concepts clearly with examples."),
    ("human", "Explain {concept} in {language} with a practical example for {skill_level} developers")
])

# Use the template with different values
questions = [
    {"concept": "functions", "language": "JavaScript", "skill_level": "beginner"},
    {"concept": "classes", "language": "Python", "skill_level": "intermediate"},
    {"concept": "async/await", "language": "JavaScript", "skill_level": "advanced"}
]

for question in questions:
    prompt = template.format_messages(**question)
    response = llm.invoke(prompt)
    print(f"Topic: {question['concept']}\n{response.content}\n---\n")
```

**Şablonları kullanmayı neden seveceksiniz:**
- **İsteklerinizi** uygulamanızın tamamında tutarlı tutar
- **Dağınık dize birleştirme yok** - sadece temiz, basit değişkenler
- **Yapay zekanız** öngörülebilir şekilde davranır çünkü yapı aynı kalır
- **Güncellemeler** çok kolay - şablonu bir kez değiştirin ve her yerde düzelir

## Yapılandırılmış Çıktı

Yapay zekadan gelen yanıtları yapılandırılmamış metin olarak almaya çalışırken hiç hayal kırıklığına uğradınız mı? Yapılandırılmış çıktı, yapay zekanıza biyolojik sınıflandırma için Linnaeus'un kullandığı sistematik yaklaşımı öğretmek gibidir - düzenli, öngörülebilir ve çalışması kolay. JSON, belirli veri yapıları veya ihtiyacınız olan herhangi bir formatı talep edebilirsiniz.

### Çıktı Şemalarını Tanımlamak

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field

class CodeReview(BaseModel):
    score: int = Field(description="Code quality score from 1-10")
    strengths: list[str] = Field(description="List of code strengths")
    improvements: list[str] = Field(description="List of suggested improvements")
    overall_feedback: str = Field(description="Summary feedback")

# Set up the parser
parser = JsonOutputParser(pydantic_object=CodeReview)

# Create prompt with format instructions
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a code reviewer. {format_instructions}"),
    ("human", "Review this code: {code}")
])

# Format the prompt with instructions
chain = prompt | llm | parser

# Get structured response
code_sample = """
def calculate_average(numbers):
    return sum(numbers) / len(numbers)
"""

result = chain.invoke({
    "code": code_sample,
    "format_instructions": parser.get_format_instructions()
})

print(f"Score: {result['score']}")
print(f"Strengths: {', '.join(result['strengths'])}")
```

**Yapılandırılmış çıktı neden oyunun kurallarını değiştirir:**
- **Artık** hangi formatı alacağınızı tahmin etmeye gerek yok - her zaman tutarlı
- **Veritabanlarınıza ve API'lerinize** ekstra iş olmadan doğrudan bağlanır
- **Garip yapay zeka yanıtlarını** uygulamanızı bozmadan önce yakalar
- **Kodunuzu** daha temiz hale getirir çünkü tam olarak neyle çalıştığınızı bilirsiniz

## Araç Çağırma

Şimdi en güçlü özelliklerden birine ulaşıyoruz: araçlar. Bu, yapay zekanıza konuşmanın ötesinde pratik yetenekler kazandırmanın yoludur. Tıpkı ortaçağ loncalarının belirli zanaatlar için özel araçlar geliştirdiği gibi, yapay zekanızı odaklanmış enstrümanlarla donatabilirsiniz. Hangi araçların mevcut olduğunu tanımlarsınız ve biri eşleşen bir şey talep ettiğinde, yapay zekanız harekete geçebilir.

### Python Kullanımı

Şöyle araçlar ekleyelim:

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

Burada ne oluyor? `add` adlı bir araç için bir taslak oluşturuyoruz. `TypedDict`'ten türeyerek ve `a` ve `b` için bu şık `Annotated` türlerini kullanarak, LLM'ye bu aracın ne yaptığı ve neye ihtiyaç duyduğu hakkında net bir resim veriyoruz. `functions` sözlüğü bizim araç kutumuz gibi - yapay zeka belirli bir aracı kullanmaya karar verdiğinde kodumuzun tam olarak ne yapması gerektiğini söylüyor.

Sonraki adımda bu aracı nasıl çağıracağımızı görelim:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Burada `bind_tools`'u `tools` dizimizle çağırıyoruz ve böylece LLM `llm_with_tools` artık bu aracı biliyor.

Bu yeni LLM'yi kullanmak için şu kodu yazabiliriz:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Artık araçlara sahip olan bu yeni LLM'de `invoke` çağrısı yaptığımızda, `tool_calls` özelliği dolu olabilir. Eğer öyleyse, tanımlanan herhangi bir araç, hangi aracın çağrılması gerektiğini ve hangi argümanlarla çağrılması gerektiğini belirten bir `name` ve `args` özelliğine sahiptir. Tam kod şöyle görünüyor:

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

Bu kodu çalıştırdığınızda, şuna benzer bir çıktı görmelisiniz:

```text
TOOL CALL:  15
CONTENT: 
```

Yapay zeka "3 + 12 nedir" sorusunu inceledi ve bunu `add` aracı için bir görev olarak tanımladı. Tıpkı yetenekli bir kütüphanecinin sorulan sorunun türüne göre hangi kaynağa başvuracağını bilmesi gibi, bu kararı aracın adı, açıklaması ve alan özelliklerinden yaptı. 15 sonucu, aracın `functions` sözlüğümüz tarafından yürütülmesinden geliyor:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Bir web API'sini çağıran daha ilginç bir araç

Sayıları toplamak konsepti gösteriyor, ancak gerçek araçlar genellikle web API'lerini çağırmak gibi daha karmaşık işlemler gerçekleştirir. Örneğimizi genişletelim ve yapay zekanın internetten içerik almasını sağlayalım - tıpkı telgraf operatörlerinin bir zamanlar uzak yerleri birbirine bağlaması gibi:

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

Şimdi bu kodu çalıştırırsanız, şöyle bir yanıt alırsınız:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

İşte kodun tamamı:

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

## Gömme ve Belge İşleme

Gömme, modern yapay zekanın en zarif çözümlerinden birini temsil eder. Herhangi bir metni alıp anlamını yakalayan sayısal koordinatlara dönüştürebileceğinizi hayal edin. Gömme tam olarak bunu yapar - metni çok boyutlu bir uzayda benzer kavramların bir arada toplandığı noktalara dönüştürür. Bu, fikirler için bir koordinat sistemi oluşturmak gibidir, tıpkı Mendeleev'in periyodik tabloyu atomik özelliklere göre düzenlemesi gibi.

### Gömme Oluşturma ve Kullanma

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="text-embedding-3-small"
)

# Load and split documents
loader = TextLoader("documentation.txt")
documents = loader.load()

text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

# Create vector store
vectorstore = FAISS.from_documents(texts, embeddings)

# Perform similarity search
query = "How do I handle user authentication?"
similar_docs = vectorstore.similarity_search(query, k=3)

for doc in similar_docs:
    print(f"Relevant content: {doc.page_content[:200]}...")
```

### Çeşitli Formatlar için Belge Yükleyiciler

```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    CSVLoader,
    JSONLoader,
    WebBaseLoader
)

# Load different document types
pdf_loader = PyPDFLoader("manual.pdf")
csv_loader = CSVLoader("data.csv")
json_loader = JSONLoader("config.json")
web_loader = WebBaseLoader("https://example.com/docs")

# Process all documents
all_documents = []
for loader in [pdf_loader, csv_loader, json_loader, web_loader]:
    docs = loader.load()
    all_documents.extend(docs)
```

**Gömme ile neler yapabilirsiniz:**
- **Arama oluşturun** ki gerçekten ne demek istediğinizi anlasın, sadece anahtar kelimeleri eşleştirmekle kalmasın
- **Yapay zeka oluşturun** ki belgeleriniz hakkında soruları yanıtlayabilsin
- **Öneri sistemleri oluşturun** ki gerçekten ilgili içerikleri önerebilsin
- **İçeriğinizi otomatik olarak** organize edin ve kategorilere ayırın

## Tam Bir Yapay Zeka Uygulaması Oluşturmak

Şimdi öğrendiklerinizi kapsamlı bir uygulamaya entegre edeceğiz - soruları yanıtlayabilen, araçları kullanabilen ve konuşma hafızasını koruyabilen bir kodlama asistanı. Tıpkı matbaanın mevcut teknolojileri (hareketli harfler, mürekkep, kağıt ve baskı) bir araya getirerek dönüştürücü bir şey yaratması gibi, yapay zeka bileşenlerimizi pratik ve kullanışlı bir şeye dönüştüreceğiz.

### Tam Uygulama Örneği

```python
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from langchain_community.vectorstores import FAISS
from typing_extensions import Annotated, TypedDict
import os
import requests

class CodingAssistant:
    def __init__(self):
        self.llm = ChatOpenAI(
            api_key=os.environ["GITHUB_TOKEN"],
            base_url="https://models.github.ai/inference",
            model="openai/gpt-4o-mini"
        )
        
        self.conversation_history = [
            SystemMessage(content="""You are an expert coding assistant. 
            Help users learn programming concepts, debug code, and write better software.
            Use tools when needed and maintain a helpful, encouraging tone.""")
        ]
        
        # Define tools
        self.setup_tools()
    
    def setup_tools(self):
        class web_search(TypedDict):
            """Search for programming documentation or examples."""
            query: Annotated[str, "Search query for programming help"]
        
        class code_formatter(TypedDict):
            """Format and validate code snippets."""
            code: Annotated[str, "Code to format"]
            language: Annotated[str, "Programming language"]
        
        self.tools = [web_search, code_formatter]
        self.llm_with_tools = self.llm.bind_tools(self.tools)
    
    def chat(self, user_input: str):
        # Add user message to conversation
        self.conversation_history.append(HumanMessage(content=user_input))
        
        # Get AI response
        response = self.llm_with_tools.invoke(self.conversation_history)
        
        # Handle tool calls if any
        if response.tool_calls:
            for tool_call in response.tool_calls:
                tool_result = self.execute_tool(tool_call)
                print(f"🔧 Tool used: {tool_call['name']}")
                print(f"📊 Result: {tool_result}")
        
        # Add AI response to conversation
        self.conversation_history.append(response)
        
        return response.content
    
    def execute_tool(self, tool_call):
        tool_name = tool_call['name']
        args = tool_call['args']
        
        if tool_name == 'web_search':
            return f"Found documentation for: {args['query']}"
        elif tool_name == 'code_formatter':
            return f"Formatted {args['language']} code: {args['code'][:50]}..."
        
        return "Tool execution completed"

# Usage example
assistant = CodingAssistant()

print("🤖 Coding Assistant Ready! Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    
    response = assistant.chat(user_input)
    print(f"🤖 Assistant: {response}\n")
```

**Uygulama mimarisi:**

```mermaid
graph TD
    A[User Input] --> B[Coding Assistant]
    B --> C[Conversation Memory]
    B --> D[Tool Detection]
    B --> E[LLM Processing]
    
    D --> F[Web Search Tool]
    D --> G[Code Formatter Tool]
    
    E --> H[Response Generation]
    F --> H
    G --> H
    
    H --> I[User Interface]
    H --> C
```

**Uyguladığımız temel özellikler:**
- **Tüm konuşmanızı hatırlar** bağlam sürekliliği için
- **Araç çağırma yoluyla işlem yapar**, sadece konuşma değil
- **Öngörülebilir etkileşim kalıplarını takip eder**
- **Hata yönetimini ve karmaşık iş akışlarını otomatik olarak düzenler**

## Ödev: Kendi Yapay Zeka Destekli Çalışma Asistanınızı Oluşturun

**
3. **Kişiselleştirilmiş Öğrenme**: Sistem mesajlarını kullanarak yanıtları farklı beceri seviyelerine uyarlayın  
4. **Yanıt Formatlama**: Quiz soruları için yapılandırılmış çıktı uygulayın  

### Uygulama Adımları  

**Adım 1: Ortamınızı kurun**  
```bash
pip install langchain langchain-openai
```
  
**Adım 2: Temel sohbet işlevselliği**  
- `StudyAssistant` sınıfını oluşturun  
- Konuşma hafızasını uygulayın  
- Eğitim desteği için kişilik yapılandırması ekleyin  

**Adım 3: Eğitim araçları ekleyin**  
- **Kod Açıklayıcı**: Kodları anlaşılır parçalara ayırır  
- **Quiz Oluşturucu**: Programlama kavramları hakkında sorular oluşturur  
- **İlerleme Takipçisi**: Ele alınan konuları takip eder  

**Adım 4: Gelişmiş özellikler (Opsiyonel)**  
- Daha iyi kullanıcı deneyimi için akış yanıtlarını uygulayın  
- Ders materyallerini dahil etmek için belge yükleme ekleyin  
- Benzerlik tabanlı içerik alımı için gömme oluşturun  

### Değerlendirme Kriterleri  

| Özellik | Mükemmel (4) | İyi (3) | Tatmin Edici (2) | Geliştirme Gerekli (1) |  
|---------|---------------|----------|------------------|----------------|  
| **Konuşma Akışı** | Doğal, bağlama duyarlı yanıtlar | İyi bağlam koruma | Temel sohbet | Değişimler arasında hafıza yok |  
| **Araç Entegrasyonu** | Birden fazla faydalı araç sorunsuz çalışıyor | 2+ araç doğru şekilde uygulanmış | 1-2 temel araç | Araçlar işlevsel değil |  
| **Kod Kalitesi** | Temiz, iyi belgelenmiş, hata yönetimi | İyi yapı, biraz belgeleme | Temel işlevsellik çalışıyor | Kötü yapı, hata yönetimi yok |  
| **Eğitim Değeri** | Öğrenme için gerçekten faydalı, uyarlanabilir | İyi öğrenme desteği | Temel açıklamalar | Sınırlı eğitim faydası |  

### Örnek kod yapısı  

```python
class StudyAssistant:
    def __init__(self, skill_level="beginner"):
        # Initialize LLM, tools, and conversation memory
        pass
    
    def explain_code(self, code, language):
        # Tool: Explain how code works
        pass
    
    def generate_quiz(self, topic, difficulty):
        # Tool: Create practice questions
        pass
    
    def chat(self, user_input):
        # Main conversation interface
        pass

# Example usage
assistant = StudyAssistant(skill_level="intermediate")
response = assistant.chat("Explain how Python functions work")
```
  
**Bonus Zorluklar:**  
- Ses giriş/çıkış yetenekleri ekleyin  
- Streamlit veya Flask kullanarak bir web arayüzü uygulayın  
- Gömme kullanarak ders materyallerinden bir bilgi tabanı oluşturun  
- İlerleme takibi ve kişiselleştirilmiş öğrenme yolları ekleyin  

## Özet  

🎉 Artık AI çerçeve geliştirme temellerini öğrendiniz ve LangChain kullanarak sofistike AI uygulamaları oluşturmayı başardınız. Kapsamlı bir çıraklık tamamlamış gibi, önemli bir beceri seti kazandınız. Şimdi neler başardığınızı gözden geçirelim.  

### Neler öğrendiniz  

**Temel Çerçeve Kavramları:**  
- **Çerçeve Faydaları**: Çerçeveleri doğrudan API çağrılarına tercih etme zamanını anlamak  
- **LangChain Temelleri**: AI model bağlantılarını kurma ve yapılandırma  
- **Mesaj Türleri**: Yapılandırılmış konuşmalar için `SystemMessage`, `HumanMessage` ve `AIMessage` kullanımı  

**Gelişmiş Özellikler:**  
- **Araç Çağırma**: Gelişmiş AI yetenekleri için özel araçlar oluşturma ve entegre etme  
- **Konuşma Hafızası**: Birden fazla konuşma turunda bağlamı koruma  
- **Akış Yanıtları**: Gerçek zamanlı yanıt teslimatı uygulama  
- **Prompt Şablonları**: Yeniden kullanılabilir, dinamik promptlar oluşturma  
- **Yapılandırılmış Çıktı**: Tutarlı, ayrıştırılabilir AI yanıtları sağlama  
- **Gömme**: Anlamsal arama ve belge işleme yetenekleri oluşturma  

**Pratik Uygulamalar:**  
- **Tam Uygulamalar Oluşturma**: Birden fazla özelliği üretime hazır uygulamalara birleştirme  
- **Hata Yönetimi**: Sağlam hata yönetimi ve doğrulama uygulama  
- **Araç Entegrasyonu**: AI yeteneklerini genişleten özel araçlar oluşturma  

### Önemli Çıkarımlar  

> 🎯 **Unutmayın**: LangChain gibi AI çerçeveleri, karmaşıklığı gizleyen, özelliklerle dolu en iyi arkadaşlarınızdır. Konuşma hafızasına, araç çağırmaya veya birden fazla AI modeliyle çalışmaya ihtiyacınız olduğunda mükemmeldir.  

**AI entegrasyonu için karar çerçevesi:**  

```mermaid
flowchart TD
    A[AI Integration Need] --> B{Simple single query?}
    B -->|Yes| C[Direct API calls]
    B -->|No| D{Need conversation memory?}
    D -->|No| E[SDK Integration]
    D -->|Yes| F{Need tools or complex features?}
    F -->|No| G[Framework with basic setup]
    F -->|Yes| H[Full framework implementation]
    
    C --> I[HTTP requests, minimal dependencies]
    E --> J[Provider SDK, model-specific]
    G --> K[LangChain basic chat]
    H --> L[LangChain with tools, memory, agents]
```
  
### Buradan nereye gidebilirsiniz?  

**Hemen inşa etmeye başlayın:**  
- Bu kavramları alın ve sizi heyecanlandıran bir şeyler inşa edin!  
- LangChain ile farklı AI modellerini deneyin - bu, AI modellerinin oyun alanı gibi  
- İşinizde veya projelerinizde karşılaştığınız gerçek sorunları çözen araçlar oluşturun  

**Bir sonraki seviyeye hazır mısınız?**  
- **AI Ajanları**: Kendi başına karmaşık görevleri planlayıp gerçekleştirebilen AI sistemleri oluşturun  
- **RAG (Retrieval-Augmented Generation)**: AI'ı kendi bilgi tabanlarınızla birleştirerek süper güçlü uygulamalar oluşturun  
- **Multi-Modal AI**: Metin, görüntü ve sesle birlikte çalışın - olasılıklar sınırsız!  
- **Üretim Dağıtımı**: AI uygulamalarınızı ölçeklendirmeyi ve gerçek dünyada izlemeyi öğrenin  

**Topluluğa katılın:**  
- LangChain topluluğu, güncel kalmak ve en iyi uygulamaları öğrenmek için harikadır  
- GitHub Modelleri, en son AI yeteneklerine erişim sağlar - denemeler için mükemmel  
- Farklı kullanım durumlarıyla pratik yapmaya devam edin - her proje size yeni bir şey öğretecek  

Artık insanlara gerçek sorunları çözmede yardımcı olabilecek akıllı, konuşkan uygulamalar oluşturma bilgisine sahipsiniz. Sanatsal vizyonu teknik beceriyle birleştiren Rönesans zanaatkarları gibi, AI yeteneklerini pratik uygulamalarla birleştirebilirsiniz. Soru şu: ne yaratacaksınız? 🚀  

## GitHub Copilot Agent Challenge 🚀  

Agent modunu kullanarak aşağıdaki zorluğu tamamlayın:  

**Açıklama:** Birden fazla LangChain özelliğini birleştirerek, araç çağırma, yapılandırılmış çıktı ve konuşma hafızası içeren gelişmiş bir AI destekli kod inceleme asistanı oluşturun.  

**Prompt:** Şu özellikleri uygulayan bir CodeReviewAssistant sınıfı oluşturun:  
1. Kod karmaşıklığını analiz eden ve iyileştirme önerileri sunan bir araç  
2. Kodun en iyi uygulamalara uygunluğunu kontrol eden bir araç  
3. Tutarlı inceleme formatı için Pydantic modelleri kullanarak yapılandırılmış çıktı  
4. İnceleme oturumlarını takip etmek için konuşma hafızası  
5. Kod gönderimlerini işleyebilen ve ayrıntılı, uygulanabilir geri bildirim sağlayan bir ana sohbet arayüzü  

Asistan, birden fazla programlama dilinde kod inceleyebilmeli, bir oturumdaki birden fazla kod gönderimi arasında bağlamı koruyabilmeli ve hem özet puanlar hem de ayrıntılı iyileştirme önerileri sunabilmelidir.  

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) adresini ziyaret edin.  

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.