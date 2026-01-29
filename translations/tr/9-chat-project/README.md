# AI ile Sohbet Asistanı Oluşturma

Star Trek'te mürettebatın geminin bilgisayarıyla rahatça konuşup karmaşık sorular sorduğunu ve düşünceli yanıtlar aldığını hatırlıyor musunuz? 1960'larda saf bilim kurgu gibi görünen şey, artık bildiğiniz web teknolojilerini kullanarak oluşturabileceğiniz bir şey.

Bu derste, HTML, CSS, JavaScript ve biraz backend entegrasyonu kullanarak bir AI sohbet asistanı oluşturacağız. Öğrendiğiniz aynı becerilerin, bağlamı anlayabilen ve anlamlı yanıtlar üretebilen güçlü AI hizmetlerine nasıl bağlanabileceğini keşfedeceksiniz.

AI'yi, yalnızca bilgi bulmakla kalmayıp aynı zamanda bunu sizin özel sorularınıza uygun şekilde anlamlı yanıtlar halinde sentezleyebilen geniş bir kütüphaneye erişim olarak düşünün. Binlerce sayfa arasında arama yapmak yerine, doğrudan bağlamsal yanıtlar alırsınız.

Entegrasyon, tanıdık web teknolojilerinin bir arada çalışmasıyla gerçekleşir. HTML sohbet arayüzünü oluşturur, CSS görsel tasarımı yönetir, JavaScript kullanıcı etkileşimlerini yönetir ve bir backend API her şeyi AI hizmetlerine bağlar. Bu, bir orkestranın farklı bölümlerinin bir senfoni oluşturmak için birlikte çalışmasına benzer.

Temelde, doğal insan iletişimi ile makine işleme arasında bir köprü kuruyoruz. Hem AI hizmet entegrasyonunun teknik uygulamasını hem de etkileşimleri sezgisel hissettiren tasarım kalıplarını öğreneceksiniz.

Bu dersin sonunda, AI entegrasyonu gizemli bir süreçten ziyade çalışabileceğiniz başka bir API gibi hissedilecek. ChatGPT ve Claude gibi uygulamaları güçlendiren temel kalıpları, öğrendiğiniz aynı web geliştirme prensiplerini kullanarak anlayacaksınız.

## ⚡ Sonraki 5 Dakikada Yapabilecekleriniz

**Yoğun Geliştiriciler için Hızlı Başlangıç Yolu**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Get GitHub token]
    B --> C[Test AI playground]
    C --> D[Copy Python code]
    D --> E[See AI responses]
```

- **1. Dakika**: [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) adresini ziyaret edin ve kişisel erişim tokeni oluşturun
- **2. Dakika**: AI etkileşimlerini doğrudan oyun alanı arayüzünde test edin
- **3. Dakika**: "Code" sekmesine tıklayın ve Python kod parçacığını kopyalayın
- **4. Dakika**: Tokeninizle kodu yerel olarak çalıştırın: `GITHUB_TOKEN=your_token python test.py`
- **5. Dakika**: Kendi kodunuzdan ilk AI yanıtınızın nasıl oluşturulduğunu izleyin

**Hızlı Test Kodu**:
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

**Neden Önemli**: 5 dakika içinde programlanabilir AI etkileşiminin büyüsünü deneyimleyeceksiniz. Bu, kullandığınız her AI uygulamasını güçlendiren temel yapı taşını temsil eder.

İşte bitmiş projenizin nasıl görüneceği:

![Kullanıcı ve AI asistanı arasındaki sohbeti gösteren sohbet uygulaması arayüzü](../../../translated_images/tr/screenshot.0a1ee0d123df681b.webp)

## 🗺️ AI Uygulama Geliştirme Yolculuğunuz

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

**Yolculuğunuzun Hedefi**: Bu dersin sonunda, ChatGPT, Claude ve Google Bard gibi modern AI asistanlarını güçlendiren aynı teknolojiler ve kalıpları kullanarak tam bir AI destekli uygulama oluşturmuş olacaksınız.

## AI'yı Anlamak: Gizemden Ustalığa

Koda dalmadan önce, üzerinde çalıştığımız şeyi anlamaya çalışalım. Daha önce API'ler kullandıysanız, temel kalıbı bilirsiniz: bir istek gönderin, bir yanıt alın.

AI API'leri benzer bir yapıyı takip eder, ancak bir veritabanından önceden saklanmış verileri almak yerine, metinlerden öğrenilen kalıplara dayanarak yeni yanıtlar oluştururlar. Bu, bir kütüphane katalog sistemi ile birden fazla kaynaktan bilgi sentezleyebilen bilgili bir kütüphaneci arasındaki fark gibidir.

### "Üretken AI" Gerçekte Nedir?

Rosetta Taşı'nın bilinen ve bilinmeyen diller arasındaki kalıpları bulmasıyla Mısır hiyerogliflerini anlamayı nasıl sağladığını düşünün. AI modelleri benzer şekilde çalışır – dilin nasıl çalıştığını anlamak için büyük miktarda metindeki kalıpları bulur ve ardından yeni sorulara uygun yanıtlar oluşturmak için bu kalıpları kullanır.

**Basit bir karşılaştırmayla açıklayayım:**
- **Geleneksel veritabanı**: Doğum belgenizi istemek gibi – her seferinde aynı belgeyi alırsınız
- **Arama motoru**: Bir kütüphaneciden kediler hakkında kitaplar bulmasını istemek gibi – size mevcut olanı gösterir
- **Üretken AI**: Bilgili bir arkadaşa kediler hakkında sormak gibi – size ilginç şeyler kendi kelimeleriyle, istediğiniz şekilde anlatır

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### AI Modelleri Nasıl Öğrenir (Basit Versiyon)

AI modelleri, kitaplar, makaleler ve konuşmalardan oluşan büyük veri setlerine maruz kalarak öğrenir. Bu süreçte şunları belirlerler:
- Yazılı iletişimde düşüncelerin nasıl yapılandırıldığı
- Hangi kelimelerin genellikle birlikte göründüğü
- Konuşmaların genellikle nasıl aktığı
- Resmi ve gayri resmi iletişim arasındaki bağlamsal farklar

**Bu, arkeologların eski dilleri çözme şekline benzer**: dilbilgisi, kelime dağarcığı ve kültürel bağlamı anlamak için binlerce örneği analiz ederler ve sonunda bu öğrenilen kalıpları kullanarak yeni metinleri yorumlayabilirler.

### Neden GitHub Modelleri?

GitHub Modellerini oldukça pratik bir nedenle kullanıyoruz – kendi AI altyapımızı kurmak zorunda kalmadan kurumsal düzeyde AI'ye erişim sağlıyor (şu anda bunu yapmak istemeyeceğinize eminim!). Bu, hava durumu API'si kullanmak yerine her yerde hava durumu istasyonları kurarak hava tahmini yapmaya çalışmaya benzer.

Temelde "Hizmet Olarak AI" ve en iyi kısmı? Başlamak ücretsiz, böylece büyük bir fatura endişesi olmadan deney yapabilirsiniz.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Backend entegrasyonumuz için GitHub Modellerini kullanacağız, bu da geliştirici dostu bir arayüz aracılığıyla profesyonel düzeyde AI yeteneklerine erişim sağlar. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground), farklı AI modellerini deneyebileceğiniz ve bunları kodda uygulamadan önce yeteneklerini anlayabileceğiniz bir test ortamı olarak hizmet eder.

## 🧠 AI Uygulama Geliştirme Ekosistemi

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

**Temel İlke**: AI uygulama geliştirme, geleneksel web geliştirme becerilerini AI hizmet entegrasyonu ile birleştirerek kullanıcılar için doğal ve duyarlı hissedilen akıllı uygulamalar oluşturur.

![Model seçimi ve test alanı içeren GitHub Models AI Playground arayüzü](../../../translated_images/tr/playground.d2b927122224ff8f.webp)

**Oyun alanını bu kadar kullanışlı yapan şey:**
- **Farklı AI modellerini deneyin**: GPT-4o-mini, Claude ve diğerleri (hepsi ücretsiz!)
- **Fikirlerinizi ve istemlerinizi test edin**: Kod yazmadan önce
- **Hazır kod parçacıkları alın**: Favori programlama dilinizde
- **Ayarları değiştirin**: Yaratıcılık seviyesi ve yanıt uzunluğu gibi, çıktıyı nasıl etkilediğini görmek için

Biraz oynadıktan sonra, sadece "Code" sekmesine tıklayın ve ihtiyacınız olan uygulama kodunu almak için programlama dilinizi seçin.

![Farklı programlama dilleri için kod oluşturma seçeneklerini gösteren oyun alanı seçimi](../../../translated_images/tr/playground-choice.1d23ba7d407f4758.webp)

## Python Backend Entegrasyonunu Kurma

Şimdi Python kullanarak AI entegrasyonunu uygulayalım. Python, basit sözdizimi ve güçlü kütüphaneleri nedeniyle AI uygulamaları için mükemmeldir. GitHub Models oyun alanından kodu alarak başlayacağız ve ardından bunu yeniden kullanılabilir, üretime hazır bir fonksiyona dönüştüreceğiz.

### Temel Uygulamayı Anlamak

Oyun alanından Python kodunu aldığınızda, aşağıdaki gibi bir şey elde edersiniz. İlk başta çok gibi görünüyorsa endişelenmeyin – bunu parça parça inceleyelim:

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

**Bu kodda neler oluyor:**
- **Gerekli araçları içe aktarıyoruz**: `os` ortam değişkenlerini okumak için ve `OpenAI` AI ile iletişim kurmak için
- **OpenAI istemcisini ayarlıyoruz**: GitHub'ın AI sunucularına yönlendirmek için
- **Kimlik doğrulaması yapıyoruz**: Özel bir GitHub tokeni kullanarak (bunun hakkında birazdan daha fazla bilgi!)
- **Konuşmamızı yapılandırıyoruz**: Farklı "roller" ile – bunu bir oyun sahnesi kurmak gibi düşünün
- **İsteğimizi AI'ye gönderiyoruz**: Bazı ince ayar parametreleriyle
- **Gelen verilerden yanıt metnini çıkarıyoruz**

### Mesaj Rolleri: AI Konuşma Çerçevesini Anlamak

AI konuşmaları, farklı "roller" ile belirli bir yapı kullanır ve her biri farklı amaçlara hizmet eder:

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

**Bunu bir oyun yönetmek gibi düşünün:**
- **Sistem rolü**: Bir aktör için sahne talimatları gibi – AI'ye nasıl davranması gerektiğini, hangi kişiliğe sahip olması gerektiğini ve nasıl yanıt vermesi gerektiğini söyler
- **Kullanıcı rolü**: Uygulamanızı kullanan kişinin gerçek sorusu veya mesajı
- **Asistan rolü**: AI'nin yanıtı (bunu göndermezsiniz, ancak konuşma geçmişinde görünür)

**Gerçek dünya analojisi**: Bir arkadaşınızı bir partide birine tanıttığınızı hayal edin:
- **Sistem mesajı**: "Bu benim arkadaşım Sarah, tıbbi kavramları basit terimlerle açıklamakta harika olan bir doktor"
- **Kullanıcı mesajı**: "Aşıların nasıl çalıştığını açıklayabilir misiniz?"
- **Asistan yanıtı**: Sarah, bir avukat veya şef gibi değil, dost canlısı bir doktor olarak yanıt verir

### AI Parametrelerini Anlamak: Yanıt Davranışını İnce Ayar Yapma

AI API çağrılarındaki sayısal parametreler, modelin yanıtları nasıl oluşturduğunu kontrol eder. Bu ayarlar, AI'nin davranışını farklı kullanım durumları için ayarlamanıza olanak tanır:

#### Sıcaklık (0.0 ila 2.0): Yaratıcılık Ayarı

**Ne yapar**: AI'nin yanıtlarının ne kadar yaratıcı veya tahmin edilebilir olacağını kontrol eder.

**Bunu bir caz müzisyeninin doğaçlama seviyesi gibi düşünün:**
- **Sıcaklık = 0.1**: Her seferinde aynı melodiyi çalmak (çok tahmin edilebilir)
- **Sıcaklık = 0.7**: Tanınabilir kalırken bazı hoş varyasyonlar eklemek (dengeli yaratıcılık)
- **Sıcaklık = 1.5**: Beklenmedik dönüşlerle tam deneysel caz (çok tahmin edilemez)

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

#### Maksimum Token (1 ila 4096+): Yanıt Uzunluğu Kontrolü

**Ne yapar**: AI'nin yanıtının ne kadar uzun olabileceğine bir sınır koyar.

**Tokenleri yaklaşık olarak kelimelere eşdeğer olarak düşünün** (İngilizce'de yaklaşık 1 token = 0.75 kelime):
- **max_tokens=50**: Kısa ve öz (bir metin mesajı gibi)
- **max_tokens=500**: Güzel bir paragraf veya iki
- **max_tokens=2000**: Örneklerle detaylı bir açıklama

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

#### Top_p (0.0 ila 1.0): Odak Parametresi

**Ne yapar**: AI'nin en olası yanıtlar üzerinde ne kadar odaklanacağını kontrol eder.

**AI'nin büyük bir kelime dağarcığına sahip olduğunu ve her kelimenin ne kadar olası olduğuna göre sıralandığını hayal edin:**
- **top_p=0.1**: En olası %10 kelimeleri dikkate alır (çok odaklı)
- **top_p=0.9**: Olası kelimelerin %90'ını dikkate alır (daha yaratıcı)
- **top_p=1.0**: Her şeyi dikkate alır (maksimum çeşitlilik)

**Örneğin**: "Gökyüzü genellikle..." diye sorarsanız:
- **Düşük top_p**: Neredeyse kesinlikle "mavi" der
- **Yüksek top_p**: "mavi", "bulutlu", "geniş", "değişken", "güzel" vb. diyebilir

### Hepsini Bir Araya Getirmek: Farklı Kullanım Durumları için Parametre Kombinasyonları

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

**Bu parametrelerin neden önemli olduğunu anlamak**: Farklı uygulamalar farklı türde yanıtlar gerektirir. Bir müşteri hizmetleri botu tutarlı ve gerçekçi olmalı (düşük sıcaklık), bir yaratıcı yazma asistanı ise hayal gücü yüksek ve çeşitli olmalı (yüksek sıcaklık). Bu parametreleri anlamak, AI'nin kişiliği ve yanıt tarzı üzerinde kontrol sağlar.
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

**Bu geliştirilmiş fonksiyonu anlamak:**
- **İki parametre kabul eder**: Kullanıcının istemi ve isteğe bağlı bir sistem mesajı
- **Genel asistan davranışı için varsayılan bir sistem mesajı sağlar**
- **Daha iyi kod belgeleri için uygun Python tür ipuçları kullanır**
- **Fonksiyonun amacını ve parametrelerini açıklayan ayrıntılı bir docstring içerir**
- **Sadece yanıt içeriğini döndürür**, web API'mizde kullanımı kolaylaştırır
- **Aynı model parametrelerini korur**: Tutarlı AI davranışı için

### Sistem İstemlerinin Büyüsü: AI Kişiliğini Programlama

Parametreler AI'nin nasıl düşündüğünü kontrol ediyorsa, sistem istemleri AI'nin kim olduğunu kontrol eder. Bu, AI ile çalışmanın en havalı bölümlerinden biri – temelde AI'ye tam bir kişilik, uzmanlık seviyesi ve iletişim tarzı veriyorsunuz.

**Sistem istemlerini farklı roller için farklı aktörler seçmek gibi düşünün**: Tek bir genel asistan yerine, farklı durumlar için özel uzmanlar oluşturabilirsiniz. Sabırlı bir öğretmene mi ihtiyacınız var? Yaratıcı bir beyin fırtınası ortağı mı? Ciddi bir iş danışmanı mı? Sadece sistem istemini değiştirin!

#### Sistem İstemleri Neden Bu Kadar Güçlü?

İşte ilginç kısım: AI modelleri, insanların farklı roller ve uzmanlık seviyeleri benimsediği sayısız konuşma üzerinde eğitilmiştir. AI'ye belirli bir rol verdiğinizde, tüm bu öğrenilen kalıpları etkinleştiren bir düğmeyi çevirmek gibi bir şeydir.

**Bu, AI için bir tür yöntem oyunculuğu gibidir**: Bir aktöre "sen bilge bir profesörsün" deyin ve duruşlarını, kelime dağarcıklarını ve tavırlarını otomatik olarak nasıl ayarladıklarını izleyin. AI, dil kalıplarıyla şaşırtıcı derecede benzer bir şey yapar.

#### Etkili Sistem İstemleri Oluşturma: Sanat ve Bilim

**Harika bir sistem isteminin anatomisi:**
1. **Rol/Kimlik**: AI kimdir?
2. **Uzmanlık**: Ne biliyor?
3. **İletişim tarzı**: Nasıl konuşuyor?
4. **Özel talimatlar**: Neye odaklanmalı?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Bağlamla Sistem İstem Örnekleri

Farklı sistem istemlerinin tamamen farklı AI kişilikleri oluşturduğunu görelim:

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

#### Sistem İstemlerini Eylemde Görmek

Aynı soruyu farklı sistem istemleriyle test edelim ve dramatik farkları görelim:

**Soru**: "Web uygulamamda kullanıcı kimlik doğrulamasını nasıl halledebilirim?"

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

#### Gelişmiş Sistem İstem Teknikleri

**1. Bağlam Ayarı**: AI'ye arka plan bilgisi verin
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Çıktı Formatlama**: AI'ye yanıtları nasıl yapılandıracağını söyleyin  
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
  
**3. Kısıtlama Ayarları**: AI'nin yapmaması gerekenleri tanımlayın  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  

#### Sohbet Asistanınız İçin Neden Önemli?

Sistem istemlerini anlamak, özel AI asistanları oluşturma gücünü size verir:  
- **Müşteri hizmetleri botu**: Yardımsever, sabırlı, politika bilgisine sahip  
- **Öğrenme eğitmeni**: Cesaretlendirici, adım adım ilerleyen, anlayışı kontrol eden  
- **Yaratıcı ortak**: Hayal gücü geniş, fikirleri geliştiren, "ya şöyle olursa?" diye soran  
- **Teknik uzman**: Kesin, detaylı, güvenlik bilinci yüksek  

**Anahtar fikir**: Sadece bir AI API'si çağırmıyorsunuz – belirli kullanım amacınıza hizmet eden özel bir AI kişiliği yaratıyorsunuz. Bu, modern AI uygulamalarını genel değil, özel ve faydalı hissettiren şeydir.

### 🎯 Pedagojik Kontrol: AI Kişilik Programlama

**Dur ve Düşün**: Sistem istemleri aracılığıyla AI kişiliklerini programlamayı yeni öğrendiniz. Bu, modern AI uygulama geliştirmede temel bir beceridir.

**Hızlı Öz Değerlendirme**:  
- Sistem istemlerinin normal kullanıcı mesajlarından nasıl farklı olduğunu açıklayabilir misiniz?  
- Temperature ve top_p parametreleri arasındaki fark nedir?  
- Belirli bir kullanım amacı için (örneğin, kodlama eğitmeni) bir sistem istemi nasıl oluşturursunuz?  

**Gerçek Dünya Bağlantısı**: Öğrendiğiniz sistem istemi teknikleri, GitHub Copilot'un kodlama yardımı sağlamasından ChatGPT'nin sohbet arayüzüne kadar her büyük AI uygulamasında kullanılır. Büyük teknoloji şirketlerindeki AI ürün ekipleri tarafından kullanılan aynı kalıpları öğreniyorsunuz.

**Zorluk Sorusu**: Farklı kullanıcı türleri (başlangıç seviyesindeki vs. uzman) için farklı AI kişiliklerini nasıl tasarlarsınız? Aynı temel AI modelinin istem mühendisliği aracılığıyla farklı kitlelere nasıl hizmet edebileceğini düşünün.

## FastAPI ile Web API Oluşturma: Yüksek Performanslı AI İletişim Merkezi

Şimdi, ön yüzünüzü AI hizmetlerine bağlayan arka ucu oluşturacağız. AI uygulamaları için API'ler oluşturmakta mükemmel olan modern bir Python framework olan FastAPI'yi kullanacağız.

FastAPI, bu tür projeler için birkaç avantaj sunar: eş zamanlı istekleri işlemek için yerleşik async desteği, otomatik API dokümantasyonu oluşturma ve mükemmel performans. FastAPI sunucunuz, ön yüzünden gelen istekleri alıp AI hizmetleriyle iletişim kuran ve biçimlendirilmiş yanıtlar döndüren bir aracı olarak çalışır.

### AI Uygulamaları İçin Neden FastAPI?

"AI'yi doğrudan ön yüz JavaScript'inden çağıramaz mıyım?" veya "Neden Flask ya da Django yerine FastAPI?" diye merak ediyor olabilirsiniz. Harika sorular!

**İşte FastAPI'nin inşa ettiğimiz şey için mükemmel olmasının nedenleri:**  
- **Varsayılan olarak async**: Birden fazla AI isteğini aynı anda işleyebilir, takılma yaşamaz  
- **Otomatik dokümantasyon**: `/docs` adresine gidin ve ücretsiz, etkileşimli bir API dokümantasyon sayfası alın  
- **Yerleşik doğrulama**: Sorunlara neden olmadan önce hataları yakalar  
- **Son derece hızlı**: En hızlı Python framework'lerinden biri  
- **Modern Python**: Python'un en son ve en iyi özelliklerini kullanır  

**Ve neden bir arka uca ihtiyacımız var:**

**Güvenlik**: AI API anahtarınız bir şifre gibidir – ön yüz JavaScript'ine koyarsanız, web sitenizin kaynak kodunu görüntüleyen herkes bunu çalabilir ve AI kredilerinizi kullanabilir. Arka uç, hassas kimlik bilgilerini güvende tutar.

**Hız Sınırlama ve Kontrol**: Arka uç, kullanıcıların ne sıklıkla istek yapabileceğini kontrol etmenize, kullanıcı kimlik doğrulamasını uygulamanıza ve kullanım takibi için günlük kaydı eklemenize olanak tanır.

**Veri İşleme**: Sohbetleri kaydetmek, uygunsuz içeriği filtrelemek veya birden fazla AI hizmetini birleştirmek isteyebilirsiniz. Bu mantık arka uçta yer alır.

**Mimari, istemci-sunucu modeline benzer:**
- **Ön yüz**: Etkileşim için kullanıcı arayüzü katmanı  
- **Arka uç API**: İstek işleme ve yönlendirme katmanı  
- **AI Hizmeti**: Harici hesaplama ve yanıt oluşturma  
- **Ortam Değişkenleri**: Güvenli yapılandırma ve kimlik bilgisi depolama  

### İstek-Yanıt Akışını Anlama

Bir kullanıcı bir mesaj gönderdiğinde neler olduğunu inceleyelim:

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
  
**Her adımı anlamak:**  
1. **Kullanıcı etkileşimi**: Kişi sohbet arayüzüne bir şeyler yazar  
2. **Ön yüz işleme**: JavaScript girdiyi yakalar ve JSON olarak biçimlendirir  
3. **API doğrulama**: FastAPI, isteği Pydantic modelleri kullanarak otomatik olarak doğrular  
4. **AI entegrasyonu**: Arka uç bağlam (sistem istemi) ekler ve AI hizmetini çağırır  
5. **Yanıt işleme**: API, AI yanıtını alır ve gerekirse değiştirebilir  
6. **Ön yüz gösterimi**: JavaScript, yanıtı sohbet arayüzünde gösterir  

### API Mimarisini Anlama

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
  

### FastAPI Uygulamasını Oluşturma

API'mizi adım adım oluşturalım. `api.py` adlı bir dosya oluşturun ve aşağıdaki FastAPI kodunu ekleyin:

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
  
**FastAPI uygulamasını anlama:**  
- **İçe aktarımlar**: Modern web framework işlevselliği için FastAPI ve veri doğrulama için Pydantic  
- **Otomatik API dokümantasyonu oluşturur** (sunucu çalıştığında `/docs` adresinde mevcut)  
- **CORS middleware'i etkinleştirir** farklı kökenlerden gelen ön yüz isteklerine izin vermek için  
- **Pydantic modelleri tanımlar** otomatik istek/yanıt doğrulama ve dokümantasyon için  
- **Daha iyi performans için async uç noktalar kullanır**  
- **HTTP durum kodları ve hata işleme uygular** HTTPException ile  
- **Yapılandırılmış günlük kaydı içerir** izleme ve hata ayıklama için  
- **Hizmet durumu izleme için sağlık kontrolü uç noktası sağlar**  

**FastAPI'nin geleneksel framework'lere göre avantajları:**  
- **Otomatik doğrulama**: Pydantic modelleri, işleme başlamadan önce veri bütünlüğünü sağlar  
- **Etkileşimli dokümantasyon**: `/docs` adresine gidin ve otomatik olarak oluşturulan, test edilebilir API dokümantasyonunu görün  
- **Tip güvenliği**: Python tip ipuçları, çalışma zamanı hatalarını önler ve kod kalitesini artırır  
- **Async desteği**: Birden fazla AI isteğini aynı anda engellemeden işleyin  
- **Performans**: Gerçek zamanlı uygulamalar için önemli ölçüde daha hızlı istek işleme  

### CORS'u Anlama: Web'in Güvenlik Bekçisi

CORS (Cross-Origin Resource Sharing), bir binadaki güvenlik görevlisi gibidir; ziyaretçilerin içeri girip giremeyeceğini kontrol eder. Bunun neden önemli olduğunu ve uygulamanızı nasıl etkilediğini anlayalım.

#### CORS Nedir ve Neden Var?

**Sorun**: Herhangi bir web sitesinin izniniz olmadan bankanızın web sitesine sizin adınıza istek gönderebildiğini hayal edin. Bu bir güvenlik kabusu olurdu! Tarayıcılar bunu varsayılan olarak "Aynı Köken Politikası" ile önler.

**Aynı Köken Politikası**: Tarayıcılar yalnızca yüklendikleri aynı alan adı, port ve protokolden gelen web sayfalarının istek yapmasına izin verir.

**Gerçek dünya analojisi**: Apartman binası güvenliği gibi – yalnızca sakinler (aynı köken) varsayılan olarak binaya erişebilir. Bir arkadaşınızın (farklı köken) ziyaret etmesini istiyorsanız, güvenliğe açıkça izin vermeniz gerekir.

#### Geliştirme Ortamınızda CORS

Geliştirme sırasında, ön yüz ve arka uç farklı portlarda çalışır:  
- Ön yüz: `http://localhost:3000` (veya HTML'yi doğrudan açıyorsanız file://)  
- Arka uç: `http://localhost:5000`  

Bunlar aynı bilgisayarda olsalar bile "farklı kökenler" olarak kabul edilir!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```
  
**CORS yapılandırmasının pratikte yaptığı şey:**  
- **API yanıtlarına özel HTTP başlıkları ekler** tarayıcılara "bu kökenler arası istek izinlidir" der  
- **"Ön uç" isteklerini işler** (tarayıcılar bazen gerçek isteği göndermeden önce izinleri kontrol eder)  
- **Tarayıcı konsolunuzdaki "CORS politikası tarafından engellendi" hatasını önler**  

#### CORS Güvenliği: Geliştirme vs Üretim

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
  
**Neden önemli**: Geliştirme sırasında, `CORS(app)` ön kapınızı kilitlememek gibidir – kullanışlı ama güvenli değil. Üretimde, API'nizle konuşabilecek web sitelerini tam olarak belirtmek istersiniz.

#### Yaygın CORS Senaryoları ve Çözümleri

| Senaryo | Sorun | Çözüm |  
|----------|---------|----------|  
| **Yerel Geliştirme** | Ön yüz arka uca ulaşamıyor | FastAPI'ye CORSMiddleware ekleyin |  
| **GitHub Pages + Heroku** | Dağıtılmış ön yüz API'ye ulaşamıyor | GitHub Pages URL'nizi CORS kökenlerine ekleyin |  
| **Özel Alan Adı** | Üretimde CORS hataları | CORS kökenlerini alan adınıza uyacak şekilde güncelleyin |  
| **Mobil Uygulama** | Uygulama web API'ye ulaşamıyor | Uygulamanızın alan adını ekleyin veya dikkatli bir şekilde `*` kullanın |  

**İpucu**: Tarayıcınızın Geliştirici Araçları'ndaki Ağ sekmesinde CORS başlıklarını kontrol edebilirsiniz. Yanıtta `Access-Control-Allow-Origin` gibi başlıkları arayın.

### Hata İşleme ve Doğrulama

API'mizin doğru hata işleme içerdiğini fark edin:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Temel doğrulama ilkeleri:**  
- **Gerekli alanları kontrol eder** istekleri işlemeye başlamadan önce  
- **Anlamlı hata mesajları döndürür** JSON formatında  
- **Uygun HTTP durum kodlarını kullanır** (kötü istekler için 400)  
- **Ön yüz geliştiricilere sorunları çözmeleri için net geri bildirim sağlar**  

## Arka Ucu Kurma ve Çalıştırma

Artık AI entegrasyonumuz ve FastAPI sunucumuz hazır olduğuna göre, her şeyi çalıştırmaya başlayalım. Kurulum süreci Python bağımlılıklarını yüklemeyi, ortam değişkenlerini yapılandırmayı ve geliştirme sunucunuzu başlatmayı içerir.

### Python Ortam Kurulumu

Python geliştirme ortamınızı ayarlayalım. Sanal ortamlar, Manhattan Projesi'nin bölümlenmiş yaklaşımı gibidir – her proje, diğer projelerle çakışmayı önleyen kendi izole alanını alır.

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
  
**Az önce yaptığımız şey:**  
- **Kendi küçük Python balonumuzu oluşturduk** paketleri yükleyebileceğimiz, diğer hiçbir şeyi etkilemeden  
- **Aktifleştirdik** böylece terminalimiz bu özel ortamı kullanacağını bilir  
- **Gerekli olanları yükledik**: OpenAI için AI büyüsü, FastAPI için web API'miz, Uvicorn bunu çalıştırmak için ve python-dotenv güvenli sır yönetimi için  

**Temel bağımlılıkların açıklaması:**  
- **FastAPI**: Modern, hızlı web framework'ü, otomatik API dokümantasyonu ile  
- **Uvicorn**: FastAPI uygulamalarını çalıştıran son derece hızlı ASGI sunucusu  
- **OpenAI**: GitHub Modelleri ve OpenAI API entegrasyonu için resmi kütüphane  
- **python-dotenv**: .env dosyalarından güvenli ortam değişkeni yükleme  

### Ortam Yapılandırması: Sırları Güvende Tutma

API'mizi başlatmadan önce, web geliştirmede en önemli derslerden biri hakkında konuşmamız gerekiyor: sırlarınızı gerçekten nasıl gizli tutarsınız. Ortam değişkenleri, yalnızca uygulamanızın erişebileceği güvenli bir kasa gibidir.

#### Ortam Değişkenleri Nedir?

**Ortaml değişkenlerini bir güvenli depo kutusu gibi düşünün** – değerli şeylerinizi içine koyarsınız ve yalnızca siz (ve uygulamanız) bunu açma anahtarına sahipsiniz. Hassas bilgileri doğrudan kodunuza yazmak yerine (herkesin görebileceği yerde), bunları güvenli bir şekilde ortamda saklarsınız.

**İşte fark:**  
- **Yanlış yol**: Şifrenizi bir yapışkan not kağıdına yazıp monitörünüze yapıştırmak  
- **Doğru yol**: Şifrenizi yalnızca sizin erişebileceğiniz güvenli bir şifre yöneticisinde tutmak  

#### Ortam Değişkenlerinin Önemi

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
  
**Sırları kodda sabitlediğinizde ne olur:**  
1. **Sürüm kontrolü açığa çıkarır**: Git deposuna erişimi olan herkes API anahtarınızı görür  
2. **Herkese açık depolar**: GitHub'a gönderirseniz, anahtarınız tüm internete görünür olur  
3. **Ekip paylaşımı**: Projenizde çalışan diğer geliştiriciler kişisel API anahtarınıza erişir  
4. **Güvenlik ihlalleri**: Birisi API anahtarınızı çalarsa, AI kredilerinizi kullanabilir  

#### Ortam Dosyanızı Ayarlama

Arka uç dizininizde bir `.env` dosyası oluşturun. Bu dosya sırlarınızı yerel olarak saklar:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**.env dosyasını anlama:**  
- **Her satırda bir sır** `KEY=value` formatında  
- **Eşittir işaretinin etrafında boşluk yok**  
- **Genellikle** değerlerin etrafında tırnak işareti gerekmez  
- **Yorumlar** `#` ile başlar  

#### GitHub Kişisel Erişim Jetonunuzu Oluşturma

GitHub jetonunuz, uygulamanıza GitHub'ın AI hizmetlerini kullanma izni veren özel bir şifre gibidir:

**Adım adım jeton oluşturma:**  
1. **GitHub Ayarlarına gidin** → Geliştirici ayarları → Kişisel erişim jetonları → Jetonlar (klasik)  
2. **"Yeni jeton oluştur (klasik)" seçeneğine tıklayın**  
3. **Son kullanma tarihi ayarlayın** (test için 30 gün, üretim için daha uzun)  
4. **Kapsamları seçin**: "repo" ve ihtiyacınız olan diğer izinleri işaretleyin  
5. **Jeton oluşturun** ve hemen kopyalayın (bir daha göremezsiniz!)  
6. **.env dosyanıza yapıştırın**  

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  

#### Python'da Ortam Değişkenlerini Yükleme

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
  
**Bu kodun yaptığı şey:**  
- **.env dosyanızı yükler** ve değişkenleri Python'a erişilebilir hale getirir  
- **Gerekli jetonun varlığını kontrol eder** (iyi hata işleme!)  
- **Jeton eksikse net bir hata verir**  
- **Jetonu güvenli bir şekilde kullanır** kodda açığa çıkarmadan  

#### Git Güvenliği: .gitignore Dosyası

`.gitignore` dosyanız, Git'e hangi dosyaları asla izlememesi veya yüklememesi gerektiğini söyler:

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
  
**Neden bu çok önemli**: `.env` dosyasını `.gitignore`'a eklediğinizde, Git ortam dosyanızı görmezden gelir ve sırlarınızı yanlışlıkla GitHub'a yüklemenizi önler.

#### Farklı Ortamlar, Farklı Sırlar

Profesyonel uygulamalar, farklı ortamlar için farklı API anahtarları kullanır:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Neden önemli**: Geliştirme deneylerinizin üretim AI kullanım kotanızı etkilemesini istemezsiniz ve farklı ortamlar için farklı güvenlik seviyeleri istersiniz.

### Geliştirme Sunucunuzu Başlatma: FastAPI'nizi Hayata Geçirme
Şimdi heyecan verici an geldi – FastAPI geliştirme sunucunuzu başlatmak ve yapay zeka entegrasyonunuzun hayata geçtiğini görmek! FastAPI, özellikle asenkron Python uygulamaları için tasarlanmış, son derece hızlı bir ASGI sunucusu olan Uvicorn'u kullanır.

#### FastAPI Sunucu Başlatma Sürecini Anlama

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Bu komutu çalıştırdığınızda, arka planda şu işlemler gerçekleşir:

**1. Python, FastAPI uygulamanızı yükler**:
- Gerekli tüm kütüphaneleri (FastAPI, Pydantic, OpenAI, vb.) içe aktarır
- `.env` dosyanızdan ortam değişkenlerini yükler
- Otomatik belgelerle birlikte FastAPI uygulama örneğini oluşturur

**2. Uvicorn, ASGI sunucusunu yapılandırır**:
- Asenkron istek işleme yetenekleriyle 5000 numaralı porta bağlanır
- Otomatik doğrulama ile istek yönlendirmesini ayarlar
- Geliştirme için sıcak yeniden yüklemeyi etkinleştirir (dosya değişikliklerinde yeniden başlatır)
- Etkileşimli API belgeleri oluşturur

**3. Sunucu dinlemeye başlar**:
- Terminalinizde şu mesajı görürsünüz: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Sunucu, birden fazla eşzamanlı yapay zeka isteğini işleyebilir
- API'niz, `http://localhost:5000/docs` adresinde otomatik belgelerle hazırdır

#### Her Şey Çalıştığında Görmeniz Gerekenler

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**FastAPI çıktısını anlama:**
- **Değişiklikleri izler**: Geliştirme için otomatik yeniden yükleme etkin
- **Uvicorn çalışıyor**: Yüksek performanslı ASGI sunucusu aktif
- **Yeniden yükleyici süreci başlatıldı**: Dosya değişikliklerinde otomatik yeniden başlatma
- **Uygulama başlatma tamamlandı**: FastAPI uygulaması başarıyla başlatıldı
- **Etkileşimli belgeler mevcut**: Otomatik API belgeleri için `/docs` adresini ziyaret edin

#### FastAPI'nizi Test Etme: Güçlü Yöntemler

FastAPI, API'nizi test etmek için otomatik etkileşimli belgeler dahil olmak üzere birkaç kullanışlı yöntem sunar:

**Yöntem 1: Etkileşimli API Belgeleri (Önerilir)**
1. Tarayıcınızı açın ve `http://localhost:5000/docs` adresine gidin
2. Tüm uç noktalarınızın belgelenmiş olduğu Swagger UI'yi göreceksiniz
3. `/hello` üzerine tıklayın → "Try it out" → Test mesajı girin → "Execute"
4. Yanıtı doğrudan tarayıcıda düzgün bir formatta görün

**Yöntem 2: Temel Tarayıcı Testi**
1. Ana uç nokta için `http://localhost:5000` adresine gidin
2. Sunucu durumunu kontrol etmek için `http://localhost:5000/health` adresine gidin
3. Bu, FastAPI sunucunuzun düzgün çalıştığını doğrular

**Yöntem 3: Komut Satırı Testi (İleri Seviye)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Yöntem 4: Python Test Scripti**
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

#### Yaygın Başlatma Sorunlarını Giderme

| Hata Mesajı | Anlamı | Çözüm |
|-------------|--------|-------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI yüklenmemiş | Sanal ortamınızda `pip install fastapi uvicorn` komutunu çalıştırın |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI sunucusu yüklenmemiş | Sanal ortamınızda `pip install uvicorn` komutunu çalıştırın |
| `KeyError: 'GITHUB_TOKEN'` | Ortam değişkeni bulunamadı | `.env` dosyanızı ve `load_dotenv()` çağrısını kontrol edin |
| `Address already in use` | 5000 numaralı port meşgul | 5000 numaralı portu kullanan diğer işlemleri sonlandırın veya portu değiştirin |
| `ValidationError` | İstek verileri Pydantic modeline uymuyor | İstek formatınızın beklenen şemaya uygun olup olmadığını kontrol edin |
| `HTTPException 422` | İşlenemeyen varlık | İstek doğrulaması başarısız oldu, doğru format için `/docs` adresini kontrol edin |
| `OpenAI API error` | Yapay zeka hizmeti kimlik doğrulaması başarısız | GitHub token'ınızın doğru olduğunu ve uygun izinlere sahip olduğunu doğrulayın |

#### Geliştirme İçin En İyi Uygulamalar

**Sıcak Yeniden Yükleme**: FastAPI ve Uvicorn, Python dosyalarınızı kaydettiğinizde otomatik olarak yeniden yükleme sağlar. Bu, kodunuzu değiştirip manuel olarak yeniden başlatmadan hemen test edebileceğiniz anlamına gelir.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Geliştirme İçin Günlük Tutma**: Neler olduğunu anlamak için günlük ekleyin:

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

**Günlük tutmanın faydası**: Geliştirme sırasında hangi isteklerin geldiğini, yapay zekanın ne yanıt verdiğini ve hataların nerede oluştuğunu görebilirsiniz. Bu, hata ayıklamayı çok daha hızlı hale getirir.

### GitHub Codespaces için Yapılandırma: Bulut Geliştirme Kolaylığı

GitHub Codespaces, herhangi bir tarayıcıdan erişebileceğiniz güçlü bir geliştirme bilgisayarına sahip olmak gibidir. Codespaces'te çalışıyorsanız, arka ucunuzu ön uca erişilebilir hale getirmek için birkaç ek adım atmanız gerekir.

#### Codespaces Ağını Anlama

Yerel bir geliştirme ortamında, her şey aynı bilgisayarda çalışır:
- Arka uç: `http://localhost:5000`
- Ön uç: `http://localhost:3000` (veya file://)

Codespaces'te geliştirme ortamınız GitHub'ın sunucularında çalışır, bu nedenle "localhost" farklı bir anlam taşır. GitHub, hizmetleriniz için otomatik olarak genel URL'ler oluşturur, ancak bunları doğru şekilde yapılandırmanız gerekir.

#### Codespaces Yapılandırma Adımları

**1. Arka uç sunucunuzu başlatın**:
```bash
cd backend
python api.py
```

FastAPI/Uvicorn başlatma mesajını göreceksiniz, ancak bunun Codespace ortamında çalıştığını fark edeceksiniz.

**2. Port görünürlüğünü yapılandırın**:
- VS Code'un alt panelindeki "Ports" sekmesini arayın
- Listede 5000 numaralı portu bulun
- 5000 numaralı porta sağ tıklayın
- "Port Visibility" → "Public" seçeneğini seçin

**Neden herkese açık yapmalısınız?** Varsayılan olarak, Codespace portları özeldir (yalnızca size erişilebilir). Herkese açık hale getirmek, tarayıcıda çalışan ön ucunuzun arka ucunuzla iletişim kurmasını sağlar.

**3. Genel URL'nizi alın**:
Portu herkese açık hale getirdikten sonra şu gibi bir URL göreceksiniz:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Ön uç yapılandırmanızı güncelleyin**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Codespace URL'lerini Anlama

Codespace URL'leri tahmin edilebilir bir deseni takip eder:
```
https://[codespace-name]-[port].app.github.dev
```

**Bunu açıklamak gerekirse:**
- `codespace-name`: Codespace'iniz için benzersiz bir tanımlayıcı (genellikle kullanıcı adınızı içerir)
- `port`: Hizmetinizin çalıştığı port numarası (FastAPI uygulamamız için 5000)
- `app.github.dev`: Codespace uygulamaları için GitHub'ın alan adı

#### Codespace Kurulumunuzu Test Etme

**1. Arka ucu doğrudan test edin**:
Genel URL'nizi yeni bir tarayıcı sekmesinde açın. Şunu görmelisiniz:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Tarayıcı geliştirici araçlarıyla test edin**:
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

#### Codespaces ve Yerel Geliştirme Karşılaştırması

| Özellik | Yerel Geliştirme | GitHub Codespaces |
|---------|------------------|-------------------|
| **Kurulum Süresi** | Daha uzun (Python, bağımlılıkları yükleme) | Anında (önceden yapılandırılmış ortam) |
| **URL Erişimi** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Port Yapılandırması** | Otomatik | Manuel (portları herkese açık yapma) |
| **Dosya Kalıcılığı** | Yerel bilgisayar | GitHub deposu |
| **İşbirliği** | Ortamı paylaşmak zor | Codespace bağlantısını paylaşmak kolay |
| **İnternet Bağımlılığı** | Sadece yapay zeka API çağrıları için | Her şey için gerekli |

#### Codespace Geliştirme İpuçları

**Codespaces'te Ortam Değişkenleri**:
Codespaces'te `.env` dosyanız aynı şekilde çalışır, ancak ortam değişkenlerini doğrudan Codespace içinde de ayarlayabilirsiniz:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Port Yönetimi**:
- Codespaces, uygulamanız bir portta dinlemeye başladığında bunu otomatik olarak algılar
- Daha sonra bir veritabanı eklemeniz durumunda birden fazla portu aynı anda yönlendirebilirsiniz
- Portlar, Codespace'iniz çalıştığı sürece erişilebilir durumda kalır

**Geliştirme İş Akışı**:
1. VS Code'da kod değişiklikleri yapın
2. FastAPI otomatik olarak yeniden yüklenir (Uvicorn'un yeniden yükleme modu sayesinde)
3. Değişiklikleri hemen genel URL üzerinden test edin
4. Hazır olduğunuzda commit yapın ve push edin

> 💡 **İpucu**: Geliştirme sırasında Codespace arka uç URL'nizi yer imlerine ekleyin. Codespace adları sabit olduğundan, aynı Codespace'i kullandığınız sürece URL değişmez.

## Ön Uç Sohbet Arayüzü Oluşturma: İnsanların Yapay Zeka ile Buluştuğu Yer

Şimdi, insanların yapay zeka asistanınızla nasıl etkileşim kuracağını belirleyen kullanıcı arayüzünü oluşturacağız. Orijinal iPhone'un arayüz tasarımı gibi, karmaşık teknolojiyi sezgisel ve doğal bir şekilde kullanımı kolay hale getirmeye odaklanıyoruz.

### Modern Ön Uç Mimarisi Anlama

Sohbet arayüzümüz "Tek Sayfa Uygulaması" veya SPA olarak adlandırılan bir şey olacak. Her tıklamada yeni bir sayfa yüklenen eski yöntem yerine, uygulamamız sorunsuz ve anında güncellenir:

**Eski web siteleri**: Fiziksel bir kitap okumak gibi – tamamen yeni sayfalar çevirirsiniz
**Sohbet uygulamamız**: Telefonunuzu kullanmak gibi – her şey akıcı ve anında güncellenir

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

### Ön Uç Geliştirmenin Üç Temel Direği

Her ön uç uygulaması – basit web sitelerinden Discord veya Slack gibi karmaşık uygulamalara kadar – üç temel teknoloji üzerine inşa edilir. Bunları webde gördüğünüz ve etkileşimde bulunduğunuz her şeyin temeli olarak düşünebilirsiniz:

**HTML (Yapı)**: Bu sizin temeliniz
- Hangi öğelerin var olduğunu belirler (düğmeler, metin alanları, konteynerler)
- İçeriğe anlam verir (bu bir başlık, bu bir form, vb.)
- Her şeyin üzerine inşa edildiği temel yapıyı oluşturur

**CSS (Sunum)**: Bu sizin iç tasarımcınız
- Her şeyi güzel hale getirir (renkler, yazı tipleri, düzenler)
- Farklı ekran boyutlarını yönetir (telefon, dizüstü bilgisayar, tablet)
- Akıcı animasyonlar ve görsel geri bildirimler oluşturur

**JavaScript (Davranış)**: Bu sizin beyniniz
- Kullanıcıların yaptıklarına yanıt verir (tıklamalar, yazma, kaydırma)
- Arka uç ile iletişim kurar ve sayfayı günceller
- Her şeyi etkileşimli ve dinamik hale getirir

**Bunu mimari tasarım gibi düşünün:**
- **HTML**: Yapısal plan (alanları ve ilişkileri tanımlama)
- **CSS**: Estetik ve çevresel tasarım (görsel stil ve kullanıcı deneyimi)
- **JavaScript**: Mekanik sistemler (işlevsellik ve etkileşim)

### Modern JavaScript Mimarisi Neden Önemlidir?

Sohbet uygulamamız, profesyonel uygulamalarda göreceğiniz modern JavaScript kalıplarını kullanacaktır. Bu kavramları anlamak, bir geliştirici olarak büyümenize yardımcı olacaktır:

**Sınıf Tabanlı Mimari**: Kodumuzu nesneler için planlar oluşturmak gibi sınıflara organize edeceğiz
**Async/Await**: Zaman alan işlemleri (API çağrıları gibi) yönetmenin modern yolu
**Olay Tabanlı Programlama**: Uygulamamız kullanıcı eylemlerine (tıklamalar, tuş vuruşları) yanıt verir, döngüde çalışmaz
**DOM Manipülasyonu**: Kullanıcı etkileşimlerine ve API yanıtlarına göre web sayfası içeriğini dinamik olarak güncelleme

### Proje Yapısı Kurulumu

Organize bir yapıyla bir ön uç dizini oluşturun:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Mimariyi anlama:**
- **Ayırır** yapı (HTML), davranış (JavaScript) ve sunum (CSS) arasındaki endişeleri
- **Basit** bir dosya yapısını korur, gezinmesi ve değiştirilmesi kolaydır
- **Takip eder** web geliştirme en iyi uygulamalarını organizasyon ve sürdürülebilirlik için

### HTML Temelini Oluşturma: Erişilebilirlik için Anlamlı Yapı

HTML yapısıyla başlayalım. Modern web geliştirme "anlamlı HTML"yi vurgular – sadece görünüşlerini değil, amaçlarını açıkça tanımlayan HTML öğelerini kullanmak. Bu, uygulamanızı ekran okuyucular, arama motorları ve diğer araçlar için erişilebilir hale getirir.

**Anlamlı HTML neden önemlidir**: Sohbet uygulamanızı telefonda birine anlatmayı hayal edin. "Başlık ve açıklama içeren bir üst bölüm, konuşmaların göründüğü ana alan ve mesaj yazmak için altta bir form var" dersiniz. Anlamlı HTML, bu doğal açıklamaya uygun öğeler kullanır.

`index.html` dosyasını şu düşünceli yapılandırılmış işaretlemeyle oluşturun:

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

**Her HTML öğesini ve amacını anlama:**

#### Belge Yapısı
- **`<!DOCTYPE html>`**: Tarayıcıya bunun modern HTML5 olduğunu söyler
- **`<html lang="en">`**: Sayfa dilini ekran okuyucular ve çeviri araçları için belirtir
- **`<meta charset="UTF-8">`**: Uluslararası metin için doğru karakter kodlamasını sağlar
- **`<meta name="viewport"...>`**: Sayfayı mobil uyumlu hale getirir, yakınlaştırma ve ölçeklemeyi kontrol eder

#### Anlamlı Öğeler
- **`<header>`**: Başlık ve açıklama içeren üst bölümü açıkça tanımlar
- **`<main>`**: Ana içerik alanını belirtir (konuşmaların olduğu yer)
- **`<form>`**: Kullanıcı girişi için anlamlıdır, doğru klavye navigasyonunu sağlar

#### Erişilebilirlik Özellikleri
- **`role="log"`**: Ekran okuyuculara bu alanın mesajların kronolojik bir kaydını içerdiğini söyler
- **`aria-live="polite"`**: Yeni mesajları ekran okuyuculara kesintisiz olarak duyurur
- **`aria-label`**: Form kontrolleri için açıklayıcı etiketler sağlar
- **`required`**: Kullanıcıların mesaj göndermeden önce bir şeyler girmesini sağlar

#### CSS ve JavaScript Entegrasyonu
- **`class` nitelikleri**: CSS için stil kancaları sağlar (örneğin, `chat-container`, `input-group`)
- **`id` nitelikleri**: JavaScript'in belirli öğeleri bulmasını ve manipüle etmesini sağlar
- **Script yerleşimi**: JavaScript dosyası, HTML'nin önce yüklenmesi için en sona yerleştirilir

**Bu yapının neden işe yaradığı:**
- **Mantıksal akış**: Başlık → Ana içerik → Giriş formu doğal okuma sırasına uygundur
- **Klavye erişilebilir**: Kullanıcılar tüm etkileşimli öğeler arasında sekme yapabilir
- **Ekran okuyucu dostu**: Görme engelli kullanıcılar için net işaretler ve açıklamalar
- **Mobil uyumlu**: Viewport meta etiketi, duyarlı tasarımı etkinleştirir
- **Aşamalı geliştirme**: CSS veya JavaScript yüklenmezse bile çalışır

### Etkileşimli JavaScript Ekleme: Modern Web Uygulama Mantığı
Şimdi sohbet arayüzümüzü hayata geçirecek JavaScript'i oluşturacağız. Profesyonel web geliştirmede karşılaşacağınız modern JavaScript kalıplarını kullanacağız; bunlar arasında ES6 sınıfları, async/await ve olay odaklı programlama bulunuyor.

#### Modern JavaScript Mimarisi Anlama

Prosedürel kod (sırasıyla çalışan bir dizi fonksiyon) yazmak yerine, **sınıf tabanlı bir mimari** oluşturacağız. Bir sınıfı, nesneler oluşturmak için bir taslak olarak düşünebilirsiniz – tıpkı bir mimarın taslağının birden fazla ev inşa etmek için kullanılabilmesi gibi.

**Web uygulamaları için neden sınıflar kullanılır?**
- **Organizasyon**: İlgili tüm işlevler bir arada gruplandırılır
- **Yeniden kullanılabilirlik**: Aynı sayfada birden fazla sohbet örneği oluşturabilirsiniz
- **Bakım kolaylığı**: Belirli özellikleri hata ayıklamak ve değiştirmek daha kolaydır
- **Profesyonel standart**: Bu kalıp React, Vue ve Angular gibi çerçevelerde kullanılır

Bu modern ve iyi yapılandırılmış JavaScript ile `app.js` dosyasını oluşturun:

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

#### Her JavaScript Kavramını Anlama

**ES6 Sınıf Yapısı**:
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

**Async/Await Kalıbı**:
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

**Olay Odaklı Programlama**:
Bir şeyin olup olmadığını sürekli kontrol etmek yerine, olayları "dinleriz":
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM Manipülasyonu**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Güvenlik ve En İyi Uygulamalar

**XSS Önleme**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Neden önemli**: Bir kullanıcı `<script>alert('hack')</script>` yazarsa, bu fonksiyon bunun kod olarak çalışması yerine metin olarak görüntülenmesini sağlar.

**Hata Yönetimi**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Kullanıcı Deneyimi Düşünceleri**:
- **İyimser UI**: Kullanıcı mesajını hemen ekleyin, sunucu yanıtını beklemeyin
- **Yükleme durumları**: Düğmeleri devre dışı bırakın ve beklerken "Gönderiliyor..." gösterin
- **Otomatik kaydırma**: En yeni mesajları görünür tutun
- **Girdi doğrulama**: Boş mesaj göndermeyin
- **Klavye kısayolları**: Enter tuşu mesajları gönderir (gerçek sohbet uygulamaları gibi)

#### Uygulama Akışını Anlama

1. **Sayfa yüklenir** → `DOMContentLoaded` olayı tetiklenir → `new ChatApp()` oluşturulur
2. **Yapıcı çalışır** → DOM öğesi referanslarını alır → Olay dinleyicilerini ayarlar
3. **Kullanıcı mesaj yazar** → Enter tuşuna basar veya Gönder'e tıklar → `handleSubmit` çalışır
4. **handleSubmit** → Girdiyi doğrular → Yükleme durumunu gösterir → API'yi çağırır
5. **API yanıt verir** → Sohbete AI mesajı eklenir → Arayüz yeniden etkinleştirilir
6. **Bir sonraki mesaja hazır** → Kullanıcı sohbete devam edebilir

Bu mimari ölçeklenebilir – mesaj düzenleme, dosya yükleme veya birden fazla sohbet dizisi gibi özellikler eklemek, temel yapıyı yeniden yazmayı gerektirmez.

### 🎯 Pedagojik Kontrol: Modern Frontend Mimarisi

**Mimari Anlayış**: Modern JavaScript kalıplarını kullanarak eksiksiz bir tek sayfa uygulaması uyguladınız. Bu, profesyonel düzeyde bir frontend geliştirme temsil eder.

**Ustalaşılan Temel Kavramlar**:
- **ES6 Sınıf Mimarisi**: Düzenli, bakımı kolay kod yapısı
- **Async/Await Kalıpları**: Modern asenkron programlama
- **Olay Odaklı Programlama**: Duyarlı kullanıcı arayüzü tasarımı
- **Güvenlik En İyi Uygulamaları**: XSS önleme ve girdi doğrulama

**Endüstri Bağlantısı**: Öğrendiğiniz kalıplar (sınıf tabanlı mimari, asenkron işlemler, DOM manipülasyonu), React, Vue ve Angular gibi modern çerçevelerin temelini oluşturur. Üretim uygulamalarında kullanılan aynı mimari düşünceyle inşa ediyorsunuz.

**Düşünme Sorusu**: Bu sohbet uygulamasını birden fazla sohbeti veya kullanıcı kimlik doğrulamasını işlemek için nasıl genişletirsiniz? Gerekli mimari değişiklikleri ve sınıf yapısının nasıl evrileceğini düşünün.

### Sohbet Arayüzünüzü Stilize Etme

Şimdi CSS ile modern, görsel olarak çekici bir sohbet arayüzü oluşturacağız. İyi bir stil, uygulamanızın profesyonel hissettirmesini sağlar ve genel kullanıcı deneyimini iyileştirir. Flexbox, CSS Grid ve özel özellikler gibi modern CSS özelliklerini kullanarak duyarlı, erişilebilir bir tasarım oluşturacağız.

Bu kapsamlı stillerle `styles.css` dosyasını oluşturun:

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

**CSS mimarisini anlama:**
- **Kullanır** CSS özel özelliklerini (değişkenler) tutarlı temalar ve kolay bakım için
- **Uygular** Flexbox düzenini duyarlı tasarım ve doğru hizalama için
- **Dahil eder** dikkat dağıtmayan mesaj görünümü için yumuşak animasyonlar
- **Sağlar** kullanıcı mesajları, AI yanıtları ve hata durumları arasında görsel ayrım
- **Destekler** hem masaüstü hem de mobil cihazlarda çalışan duyarlı tasarım
- **Düşünür** erişilebilirlik için hareket azaltma tercihleri ve uygun kontrast oranları
- **Sunar** kullanıcının sistem tercihlerine dayalı karanlık mod desteği

### Backend URL'inizi Yapılandırma

Son adım, JavaScript'teki `BASE_URL`'ü backend sunucunuza uygun şekilde güncellemektir:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Backend URL'inizi belirleme:**
- **Yerel geliştirme**: Hem frontend hem de backend'i yerel olarak çalıştırıyorsanız `http://localhost:5000` kullanın
- **Codespaces**: 5000 portunu halka açık yaptıktan sonra Ports sekmesinde backend URL'inizi bulun
- **Üretim**: Hosting hizmetine dağıtırken gerçek domaininizi kullanın

> 💡 **Test İpucu**: Backend'inizi doğrudan test etmek için tarayıcınızda kök URL'yi ziyaret edebilirsiniz. FastAPI sunucunuzdan hoş geldiniz mesajını görmelisiniz.

## Test ve Dağıtım

Artık hem frontend hem de backend bileşenlerini oluşturduğunuza göre, her şeyin birlikte çalıştığını test edelim ve sohbet asistanınızı başkalarıyla paylaşmak için dağıtım seçeneklerini keşfedelim.

### Yerel Test Çalışma Akışı

Tam uygulamanızı test etmek için şu adımları izleyin:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Adım adım test süreci:**

1. **Backend sunucunuzu başlatın**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **API'nin çalıştığını doğrulayın**:
   - Tarayıcınızda `http://localhost:5000` adresini açın
   - FastAPI sunucunuzdan hoş geldiniz mesajını görmelisiniz

3. **Frontend'inizi açın**:
   - Frontend dizinine gidin
   - Tarayıcınızda `index.html` dosyasını açın
   - Veya daha iyi bir geliştirme deneyimi için VS Code'un Live Server uzantısını kullanın

4. **Sohbet işlevselliğini test edin**:
   - Girdi alanına bir mesaj yazın
   - "Gönder"e tıklayın veya Enter tuşuna basın
   - AI'nın uygun şekilde yanıt verdiğini doğrulayın
   - Tarayıcı konsolunda herhangi bir JavaScript hatası olup olmadığını kontrol edin

### Yaygın Sorunları Giderme

| Sorun | Belirtiler | Çözüm |
|-------|------------|-------|
| **CORS Hatası** | Frontend backend'e ulaşamıyor | FastAPI CORSMiddleware'in doğru yapılandırıldığından emin olun |
| **API Anahtar Hatası** | 401 Yetkisiz yanıtlar | `GITHUB_TOKEN` ortam değişkeninizi kontrol edin |
| **Bağlantı Reddedildi** | Frontend'de ağ hataları | Backend URL'ini ve Flask sunucusunun çalıştığını doğrulayın |
| **AI Yanıtı Yok** | Boş veya hata yanıtları | API kotası veya kimlik doğrulama sorunları için backend günlüklerini kontrol edin |

**Yaygın hata ayıklama adımları:**
- **Kontrol eder** tarayıcı Geliştirici Araçları Konsolunda JavaScript hatalarını
- **Doğrular** Ağ sekmesi başarılı API isteklerini ve yanıtlarını gösteriyor
- **İnceler** backend terminal çıktısını Python hataları veya API sorunları için
- **Onaylar** ortam değişkenlerinin doğru şekilde yüklendiğini ve erişilebilir olduğunu

## 📈 AI Uygulama Geliştirme Ustalık Zaman Çizelgesi

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

**🎓 Mezuniyet Dönüm Noktası**: Modern AI asistanlarını güçlendiren aynı teknolojiler ve mimari kalıpları kullanarak eksiksiz bir AI destekli uygulama geliştirdiniz. Bu beceriler, geleneksel web geliştirme ile en son AI entegrasyonunun kesişimini temsil eder.

**🔄 Bir Sonraki Seviye Yetkinlikler**:
- Gelişmiş AI çerçevelerini (LangChain, LangGraph) keşfetmeye hazır
- Çok modlu AI uygulamaları (metin, görüntü, ses) oluşturmaya hazır
- Vektör veritabanları ve geri alma sistemlerini uygulamaya hazır
- Makine öğrenimi ve AI model ince ayarları için temel oluşturuldu

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Sohbet asistanını geliştirin ve konuşma geçmişi ile mesaj kalıcılığı ekleyin. Bu meydan okuma, sohbet uygulamalarında durumu yönetmeyi ve daha iyi bir kullanıcı deneyimi için veri depolamayı anlamanıza yardımcı olacaktır.

**İpucu:** Sohbet uygulamasını, oturumlar arasında konuşma geçmişini içerecek şekilde değiştirin. Sohbet mesajlarını yerel depolamaya kaydetme, sayfa yüklendiğinde konuşma geçmişini görüntüleme ve "Geçmişi Temizle" düğmesi ekleme işlevselliği ekleyin. Ayrıca yazma göstergeleri ve mesaj zaman damgaları ekleyerek sohbet deneyimini daha gerçekçi hale getirin.

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) adresini ziyaret edin.

## Ödev: Kendi Kişisel AI Asistanınızı Oluşturun

Şimdi kendi AI asistanı uygulamanızı oluşturacaksınız. Eğitim kodunu basitçe kopyalamak yerine, bu kavramları uygularken kendi ilgi alanlarınızı ve kullanım durumlarınızı yansıtan bir şey oluşturma fırsatınız var.

### Proje Gereksinimleri

Projenizi temiz ve düzenli bir yapıyla kurmaya başlayalım:

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

### Temel Uygulama Görevleri

**Backend Geliştirme:**
- **FastAPI kodumuzu alın** ve kendinize göre uyarlayın
- **Benzersiz bir AI kişiliği oluşturun** – belki yardımcı bir yemek asistanı, yaratıcı bir yazı ortağı veya bir çalışma arkadaşı?
- **Sağlam hata yönetimi ekleyin** böylece uygulamanız bir şeyler ters gittiğinde çökmez
- **API'nizin nasıl çalıştığını anlamak isteyenler için açık bir dokümantasyon yazın**

**Frontend Geliştirme:**
- **Sezgisel ve davetkar bir sohbet arayüzü oluşturun**
- **Diğer geliştiricilere gururla gösterebileceğiniz temiz, modern JavaScript yazın**
- **AI'nizin kişiliğini yansıtan özel bir stil tasarlayın** – eğlenceli ve renkli mi? Temiz ve minimal mi? Tamamen size bağlı!
- **Hem telefonlarda hem de bilgisayarlarda harika çalıştığından emin olun**

**Kişiselleştirme Gereksinimleri:**
- **AI asistanınız için benzersiz bir isim ve kişilik seçin** – belki ilgi alanlarınızı veya çözmek istediğiniz sorunları yansıtan bir şey
- **Görsel tasarımı asistanınızın havasına uygun şekilde özelleştirin**
- **İnsanların sohbet etmeye başlamak istemesini sağlayacak etkileyici bir hoş geldiniz mesajı yazın**
- **Asistanınızı farklı türdeki sorularla test edin ve nasıl yanıt verdiğini görün**

### Geliştirme Fikirleri (İsteğe Bağlı)

Projenizi bir üst seviyeye taşımak mı istiyorsunuz? İşte keşfetmek için bazı eğlenceli fikirler:

| Özellik | Açıklama | Pratik Yapacağınız Beceriler |
|---------|----------|-----------------------------|
| **Mesaj Geçmişi** | Sayfa yenilendikten sonra bile konuşmaları hatırlayın | localStorage ile çalışma, JSON işleme |
| **Yazma Göstergeleri** | Yanıt beklerken "AI yazıyor..." göster | CSS animasyonları, asenkron programlama |
| **Mesaj Zaman Damgaları** | Her mesajın ne zaman gönderildiğini göster | Tarih/saat formatlama, UX tasarımı |
| **Sohbeti Dışa Aktar** | Kullanıcıların konuşmalarını indirmesine izin verin | Dosya işleme, veri dışa aktarma |
| **Tema Değiştirme** | Açık/koyu mod geçişi ekleyin | CSS değişkenleri, kullanıcı tercihleri |
| **Sesli Giriş** | Konuşma metni işlevselliği ekleyin | Web API'leri, erişilebilirlik |

### Test ve Dokümantasyon

**Kalite Güvencesi:**
- **Uygulamanızı çeşitli giriş türleri ve uç durumlarla test edin**
- **Duyarlı tasarımın farklı ekran boyutlarında çalıştığını doğrulayın**
- **Erişilebilirliği klavye navigasyonu ve ekran okuyucularla kontrol edin**
- **HTML ve CSS'nin standartlara uygunluğunu doğrulayın**

**Dokümantasyon Gereksinimleri:**
- **README.md dosyası yazın** projenizi ve nasıl çalıştırılacağını açıklayan
- **Sohbet arayüzünüzün çalışırken ekran görüntülerini ekleyin**
- **Eklediğiniz benzersiz özellikleri veya özelleştirmeleri belgeleyin**
- **Diğer geliştiriciler için açık kurulum talimatları sağlayın**

### Teslimat Yönergeleri

**Proje Teslimatları:**
1. Tüm kaynak koduyla eksiksiz proje klasörü
2. README.md dosyası ile proje açıklaması ve kurulum talimatları
3. Sohbet asistanınızın çalışırken ekran görüntüleri
4. Öğrendikleriniz ve karşılaştığınız zorluklar hakkında kısa bir yansıma

**Değerlendirme Kriterleri:**
- **İşlevsellik**: Sohbet asistanı beklendiği gibi çalışıyor mu?
- **Kod Kalitesi**: Kod düzenli, yorumlanmış ve bakımı kolay mı?
- **Tasarım**: Arayüz görsel olarak çekici ve kullanıcı dostu mu?
- **Yaratıcılık**: Uygulamanız ne kadar benzersiz ve kişiselleştirilmiş?
- **Dokümantasyon**: Kurulum talimatları açık ve eksiksiz mi?

> 💡 **Başarı İpucu**: Önce temel gereksinimlerle başlayın, ardından her şey çalıştıktan sonra geliştirmeler ekleyin. Gelişmiş özellikler eklemeden önce cilalı bir temel deneyim oluşturmayı hedefleyin.

## Çözüm

[Çözüm](./solution/README.md)

## Bonus Meydan Okumalar

AI asistanınızı bir üst seviyeye taşımaya hazır mısınız? AI entegrasyonu ve web geliştirme anlayışınızı derinleştirecek bu ileri düzey meydan okumaları deneyin.

### Kişilik Özelleştirme

Gerçek sihir, AI asistanınıza benzersiz bir kişilik verdiğinizde gerçekleşir. Özel asistanlar oluşturmak için farklı sistem istemlerini deneyin:

**Profesyonel Asistan Örneği:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Yaratıcı Yazı Yardımcısı Örneği:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Teknik Mentor Örneği:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend Geliştirmeleri

Sohbet arayüzünüzü görsel ve işlevsel iyileştirmelerle dönüştürün:

**Gelişmiş CSS Özellikleri:**
- **Uygulayın** yumuşak mesaj animasyonları ve geçişleri
- **Ekleyin** özel sohbet balonu tasarımları CSS şekilleri ve gradyanlarla
- **Oluşturun** AI "düşünürken" yazma göstergesi animasyonu
- **Tasarım yapın** emoji tepkileri veya mesaj derecelendirme sistemi

**JavaScript Geliştirmeleri:**
- **Klavye kısayolları ekleyin** (Ctrl+Enter gönder, Escape girişi temizle)
- **Mesaj arama ve filtreleme işlevselliği uygulayın**
- **S
- **Konuşma konusuna** dayalı akıllı öneriler **uygulayın**  
- **Sıkça sorulan sorular** için hızlı yanıt butonları **oluşturun**  

> 🎯 **Öğrenme Hedefi**: Bu ek zorluklar, üretim uygulamalarında kullanılan gelişmiş web geliştirme kalıplarını ve yapay zeka entegrasyon tekniklerini anlamanıza yardımcı olur.

## Özet ve Sonraki Adımlar

Tebrikler! Sıfırdan yapay zeka destekli bir sohbet asistanı oluşturmayı başardınız. Bu proje, size modern web geliştirme teknolojileri ve yapay zeka entegrasyonu ile ilgili pratik deneyim kazandırdı – bu beceriler günümüz teknoloji dünyasında giderek daha değerli hale geliyor.

### Başardıklarınız

Bu ders boyunca, birkaç önemli teknoloji ve kavramda ustalaştınız:

**Backend Geliştirme:**
- Yapay zeka işlevselliği için GitHub Models API ile **entegre oldunuz**
- Hataları doğru bir şekilde ele alan Flask kullanarak bir RESTful API **oluşturdunuz**
- Ortam değişkenlerini kullanarak güvenli kimlik doğrulama **uyguladınız**
- Ön uç ve arka uç arasında çapraz kaynak istekleri için CORS **yapılandırdınız**

**Frontend Geliştirme:**
- Semantik HTML kullanarak duyarlı bir sohbet arayüzü **oluşturdunuz**
- Async/await ve sınıf tabanlı mimari ile modern JavaScript **uyguladınız**
- CSS Grid, Flexbox ve animasyonlarla etkileyici bir kullanıcı arayüzü **tasarladınız**
- Erişilebilirlik özellikleri ve duyarlı tasarım ilkeleri **eklediniz**

**Tam Yığın Entegrasyonu:**
- Ön uç ve arka ucu HTTP API çağrılarıyla **bağladınız**
- Gerçek zamanlı kullanıcı etkileşimlerini ve asenkron veri akışını **yönettiniz**
- Uygulama genelinde hata yönetimi ve kullanıcı geri bildirimi **uyguladınız**
- Kullanıcı girişinden yapay zeka yanıtına kadar tüm uygulama iş akışını **test ettiniz**

### Temel Öğrenim Çıktıları

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
  
Bu proje, sizi yapay zeka destekli uygulamalar oluşturmanın temelleriyle tanıştırdı ve bu, web geliştirmenin geleceğini temsil ediyor. Artık yapay zeka yeteneklerini geleneksel web uygulamalarına nasıl entegre edeceğinizi ve akıllı ve duyarlı kullanıcı deneyimleri yaratmayı biliyorsunuz.

### Profesyonel Uygulamalar

Bu derste geliştirdiğiniz beceriler, modern yazılım geliştirme kariyerlerinde doğrudan uygulanabilir:

- Modern çerçeveler ve API'ler kullanarak **tam yığın web geliştirme**
- Web uygulamaları ve mobil uygulamalarda **yapay zeka entegrasyonu**
- Mikro hizmet mimarileri için **API tasarımı ve geliştirme**
- **Erişilebilirlik ve duyarlı tasarım** odaklı kullanıcı arayüzü geliştirme
- Ortam yapılandırması ve dağıtımı dahil **DevOps uygulamaları**

### Yapay Zeka Geliştirme Yolculuğunuza Devam Etmek

**Sonraki Öğrenim Adımları:**
- Daha gelişmiş yapay zeka modelleri ve API'leri (GPT-4, Claude, Gemini) **keşfedin**
- Daha iyi yapay zeka yanıtları için istem mühendisliği tekniklerini **öğrenin**
- Sohbet tasarımı ve chatbot kullanıcı deneyimi ilkelerini **inceleyin**
- Yapay zeka güvenliği, etik ve sorumlu yapay zeka geliştirme uygulamalarını **araştırın**
- Konuşma hafızası ve bağlam farkındalığına sahip daha karmaşık uygulamalar **oluşturun**

**Gelişmiş Proje Fikirleri:**
- Yapay zeka moderasyonu ile çok kullanıcılı sohbet odaları
- Yapay zeka destekli müşteri hizmetleri chatbot'ları
- Kişiselleştirilmiş öğrenme sunan eğitim asistanları
- Farklı yapay zeka kişilikleriyle yaratıcı yazım işbirlikçileri
- Geliştiriciler için teknik dokümantasyon asistanları

## GitHub Codespaces ile Başlarken

Bu projeyi bir bulut geliştirme ortamında denemek ister misiniz? GitHub Codespaces, yerel kurulum gereksinimleri olmadan yapay zeka uygulamaları üzerinde denemeler yapmak için mükemmel bir tarayıcı tabanlı geliştirme ortamı sunar.

### Geliştirme Ortamınızı Ayarlama

**Adım 1: Şablondan Oluştur**
- [Web Dev For Beginners deposuna](https://github.com/microsoft/Web-Dev-For-Beginners) **gidin**
- Sağ üst köşedeki "Use this template" (Bu şablonu kullan) düğmesine **tıklayın** (GitHub'da oturum açtığınızdan emin olun)

![Şablondan oluşturma arayüzü, yeşil "Use this template" düğmesini gösteriyor](../../../translated_images/tr/template.67ad477109d29a2b.webp)

**Adım 2: Codespaces'i Başlat**
- Yeni oluşturduğunuz depoyu **açın**
- Yeşil "Code" düğmesine **tıklayın** ve "Codespaces" seçeneğini seçin
- Geliştirme ortamınızı başlatmak için "Create codespace on main" seçeneğini **seçin**

![Bulut geliştirme ortamını başlatma seçenekleriyle Codespace oluşturma arayüzü](../../../translated_images/tr/codespace.bcecbdf5d2747d3d.webp)

**Adım 3: Ortam Yapılandırması**  
Codespace yüklendiğinde, şu özelliklere erişiminiz olacak:  
- **Önceden yüklenmiş** Python, Node.js ve gerekli tüm geliştirme araçları  
- Web geliştirme için uzantılarla birlikte **VS Code arayüzü**  
- Arka uç ve ön uç sunucularını çalıştırmak için **terminal erişimi**  
- Uygulamalarınızı test etmek için **port yönlendirme**  

**Codespaces'in sağladıkları:**
- Yerel ortam kurulum ve yapılandırma sorunlarını **ortadan kaldırır**
- Farklı cihazlar arasında tutarlı bir geliştirme ortamı **sağlar**
- Web geliştirme için önceden yapılandırılmış araçlar ve uzantılar **içerir**
- Sürüm kontrolü ve iş birliği için GitHub ile sorunsuz entegrasyon **sunar**

> 🚀 **Profesyonel İpucu**: Codespaces, tüm karmaşık ortam kurulumunu otomatik olarak hallettiği için öğrenmeye ve yapay zeka uygulamaları geliştirmeye odaklanmanıza olanak tanır ve yapılandırma sorunlarıyla uğraşmanıza gerek kalmaz.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.