<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-22T23:55:11+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "tr"
}
-->
# AI ile Sohbet Asistanı Oluşturma

Star Trek'te mürettebatın gemi bilgisayarıyla rahatça konuşup karmaşık sorular sorduğunu ve düşünceli yanıtlar aldığını hatırlıyor musunuz? 1960'larda saf bilim kurgu gibi görünen şey, artık zaten bildiğiniz web teknolojilerini kullanarak oluşturabileceğiniz bir şey.

Bu derste, HTML, CSS, JavaScript ve biraz arka uç entegrasyonu kullanarak bir AI sohbet asistanı oluşturacağız. Öğrendiğiniz aynı becerilerin, bağlamı anlayabilen ve anlamlı yanıtlar üretebilen güçlü AI hizmetlerine nasıl bağlanabileceğini keşfedeceksiniz.

AI'yi, yalnızca bilgi bulmakla kalmayıp aynı zamanda bunu sizin özel sorularınıza uygun şekilde anlamlı yanıtlar haline getirebilen devasa bir kütüphaneye erişim olarak düşünün. Binlerce sayfa arasında arama yapmak yerine, doğrudan ve bağlamsal yanıtlar alırsınız.

Entegrasyon, tanıdık web teknolojilerinin bir arada çalışmasıyla gerçekleşir. HTML sohbet arayüzünü oluşturur, CSS görsel tasarımı yönetir, JavaScript kullanıcı etkileşimlerini yönetir ve bir arka uç API her şeyi AI hizmetlerine bağlar. Bu, bir orkestranın farklı bölümlerinin bir senfoni yaratmak için birlikte çalışmasına benzer.

Temelde, doğal insan iletişimi ile makine işleme arasında bir köprü kuruyoruz. Hem AI hizmet entegrasyonunun teknik uygulamasını hem de etkileşimleri sezgisel hissettiren tasarım kalıplarını öğreneceksiniz.

Bu dersin sonunda, AI entegrasyonu gizemli bir süreçten çok, çalışabileceğiniz başka bir API gibi hissedilecek. ChatGPT ve Claude gibi uygulamaları destekleyen temel kalıpları, öğrendiğiniz aynı web geliştirme prensiplerini kullanarak anlayacaksınız.

İşte bitmiş projenizin nasıl görüneceği:

![Kullanıcı ile AI asistanı arasındaki konuşmayı gösteren sohbet uygulaması arayüzü](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.tr.png)

## AI'yı Anlamak: Gizemden Ustalığa

Koda dalmadan önce, neyle çalıştığımızı anlamaya çalışalım. Daha önce API'ler kullandıysanız, temel deseni bilirsiniz: bir istek gönderin, bir yanıt alın.

AI API'leri benzer bir yapıyı takip eder, ancak bir veritabanından önceden saklanmış verileri almak yerine, metinlerden öğrenilen kalıplara dayanarak yeni yanıtlar oluştururlar. Bunu, bir kütüphane katalog sisteminden bilgi sentezleyebilen bilgili bir kütüphaneci arasındaki fark gibi düşünün.

### "Üretken AI" Gerçekte Nedir?

Rosetta Taşı'nın, bilinen ve bilinmeyen diller arasındaki kalıpları bularak Mısır hiyerogliflerini anlamalarına nasıl yardımcı olduğunu düşünün. AI modelleri benzer şekilde çalışır – dilin nasıl işlediğini anlamak için büyük miktarda metin içinde kalıplar bulurlar ve ardından bu kalıpları yeni sorulara uygun yanıtlar oluşturmak için kullanırlar.

**Basit bir karşılaştırma ile açıklayayım:**
- **Geleneksel veritabanı**: Doğum belgenizi sormak gibi – her seferinde aynı belgeyi alırsınız.
- **Arama motoru**: Bir kütüphaneciden kediler hakkında kitaplar bulmasını istemek gibi – size mevcut olanı gösterir.
- **Üretken AI**: Bilgili bir arkadaşa kediler hakkında sormak gibi – size ilginç şeyler anlatır, istediğiniz bilgilere göre uyarlanmış şekilde.

### AI Modelleri Nasıl Öğrenir? (Basit Versiyon)

AI modelleri, kitaplar, makaleler ve konuşmalardan oluşan büyük veri setlerine maruz kalarak öğrenir. Bu süreçte şu kalıpları tanımlarlar:
- Yazılı iletişimde düşüncelerin nasıl yapılandırıldığı
- Hangi kelimelerin genellikle birlikte göründüğü
- Konuşmaların tipik olarak nasıl aktığı
- Resmi ve gayri resmi iletişim arasındaki bağlamsal farklar

**Bu, arkeologların eski dilleri çözümlemesine benzer**: Dilbilgisi, kelime dağarcığı ve kültürel bağlamı anlamak için binlerce örneği analiz ederler ve sonunda bu öğrenilen kalıpları kullanarak yeni metinleri yorumlayabilirler.

### Neden GitHub Modelleri?

GitHub Modellerini kullanıyoruz çünkü oldukça pratik bir sebebi var – kendi AI altyapımızı kurmak zorunda kalmadan kurumsal düzeyde AI'ya erişim sağlıyor (şu anda bunu yapmak istemezsiniz, emin olun!). Bu, bir hava durumu API'si kullanmak yerine her yerde hava durumu istasyonları kurarak hava durumunu tahmin etmeye çalışmak gibi bir şey.

Bu, temelde "Hizmet Olarak AI" ve en iyi yanı? Başlamak ücretsiz, böylece büyük bir fatura konusunda endişelenmeden deney yapabilirsiniz.

GitHub Modellerini arka uç entegrasyonu için kullanacağız. Bu, geliştirici dostu bir arayüz aracılığıyla profesyonel düzeyde AI yeteneklerine erişim sağlar. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground), farklı AI modellerini denemenize ve kodda uygulamadan önce yeteneklerini anlamanıza olanak tanıyan bir test ortamı olarak hizmet eder.

![GitHub Models AI Playground arayüzü, model seçimi ve test alanı](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.tr.png)

**Playground'u bu kadar kullanışlı yapan şeyler:**
- **Farklı AI modellerini deneyin**: GPT-4o-mini, Claude ve diğerleri gibi (hepsi ücretsiz!)
- **Fikirlerinizi ve istemlerinizi test edin**: Kod yazmadan önce
- **Hazır kod parçacıkları alın**: Favori programlama dilinizde
- **Ayarları düzenleyin**: Yaratıcılık seviyesi ve yanıt uzunluğu gibi, çıktıyı nasıl etkilediğini görmek için

Biraz oynadıktan sonra, sadece "Kod" sekmesine tıklayın ve uygulama kodunu almak için programlama dilinizi seçin.

![Playground seçimi, farklı programlama dilleri için kod oluşturma seçeneklerini gösteriyor](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.tr.png)

## Python Arka Uç Entegrasyonunu Kurma

Şimdi AI entegrasyonunu Python kullanarak uygulayalım. Python, basit sözdizimi ve güçlü kütüphaneleri sayesinde AI uygulamaları için mükemmel bir seçimdir. GitHub Models playground'dan aldığımız kodla başlayacağız ve ardından bunu yeniden kullanılabilir, üretime hazır bir fonksiyona dönüştüreceğiz.

### Temel Uygulamayı Anlamak

Playground'dan Python kodunu aldığınızda, aşağıdaki gibi bir şeyle karşılaşırsınız. İlk başta çok gibi görünse de, parça parça inceleyelim:

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

**Bu kodda neler oluyor:**
- **Gerekli araçları içe aktarıyoruz**: `os` ortam değişkenlerini okumak için, `OpenAI` ise AI ile iletişim kurmak için
- **OpenAI istemcisini ayarlıyoruz**: GitHub'ın AI sunucularına yönlendirmek için
- **Kimlik doğrulama yapıyoruz**: Özel bir GitHub token kullanarak (bunun hakkında birazdan daha fazla bilgi!)
- **Konuşmamızı yapılandırıyoruz**: Farklı "roller" ile – bunu bir oyun sahnesi kurmak gibi düşünün
- **İsteğimizi AI'ya gönderiyoruz**: Bazı ince ayar parametreleriyle
- **Gelen verilerden yanıt metnini çıkarıyoruz**

### Mesaj Rolleri: AI Konuşma Çerçevesini Anlamak

AI konuşmaları, farklı "roller" ile belirli bir yapı kullanır ve her biri farklı bir amaca hizmet eder:

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
- **Sistem rolü**: Bir aktör için sahne talimatları gibi – AI'ya nasıl davranması gerektiğini, ne tür bir kişiliğe sahip olması gerektiğini ve nasıl yanıt vermesi gerektiğini söyler
- **Kullanıcı rolü**: Uygulamayı kullanan kişinin gerçek sorusu veya mesajı
- **Asistan rolü**: AI'nın yanıtı (bunu göndermezsiniz, ancak konuşma geçmişinde görünür)

**Gerçek dünya analojisi**: Bir arkadaşınızı bir partide birine tanıttığınızı hayal edin:
- **Sistem mesajı**: "Bu benim arkadaşım Sarah, tıbbi kavramları basit terimlerle açıklamakta harikadır."
- **Kullanıcı mesajı**: "Aşıların nasıl çalıştığını açıklayabilir misiniz?"
- **Asistan yanıtı**: Sarah, dost canlısı bir doktor olarak yanıt verir, bir avukat veya aşçı gibi değil.

### AI Parametrelerini Anlamak: Yanıt Davranışını İnce Ayarlama

AI API çağrılarındaki sayısal parametreler, modelin yanıtları nasıl oluşturduğunu kontrol eder. Bu ayarlar, AI'nın davranışını farklı kullanım durumlarına uyarlamanıza olanak tanır.

#### Sıcaklık (0.0 - 2.0): Yaratıcılık Ayarı

**Ne yapar**: AI'nın yanıtlarının ne kadar yaratıcı veya tahmin edilebilir olacağını kontrol eder.

**Bunu bir caz müzisyeninin doğaçlama seviyesi gibi düşünün:**
- **Sıcaklık = 0.1**: Her seferinde tam olarak aynı melodiyi çalmak (çok tahmin edilebilir)
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

#### Maksimum Token (1 - 4096+): Yanıt Uzunluğu Kontrolü

**Ne yapar**: AI'nın yanıtının ne kadar uzun olabileceğine bir sınır koyar.

**Token'ları yaklaşık olarak kelimelere eşdeğer olarak düşünün** (İngilizce'de yaklaşık 1 token = 0.75 kelime):
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

#### Top_p (0.0 - 1.0): Odak Parametresi

**Ne yapar**: AI'nın en olası yanıtlar üzerinde ne kadar odaklanacağını kontrol eder.

**AI'nın büyük bir kelime dağarcığına sahip olduğunu ve her kelimenin ne kadar olası olduğuna göre sıralandığını hayal edin:**
- **top_p=0.1**: Sadece en olası %10 kelimeleri dikkate alır (çok odaklı)
- **top_p=0.9**: Olası kelimelerin %90'ını dikkate alır (daha yaratıcı)
- **top_p=1.0**: Her şeyi dikkate alır (maksimum çeşitlilik)

**Örneğin**: "Gökyüzü genellikle..."
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

**Bu parametrelerin neden önemli olduğunu anlamak**: Farklı uygulamalar farklı türde yanıtlar gerektirir. Bir müşteri hizmetleri botu tutarlı ve gerçekçi olmalı (düşük sıcaklık), bir yaratıcı yazma asistanı ise hayal gücü yüksek ve çeşitli olmalı (yüksek sıcaklık). Bu parametreleri anlamak, AI'nın kişiliği ve yanıt tarzı üzerinde kontrol sağlar.
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
- **İki parametre alır**: Kullanıcının istemi ve isteğe bağlı bir sistem mesajı
- **Genel asistan davranışı için** varsayılan bir sistem mesajı sağlar
- **Doğru Python tür ipuçlarını kullanır**: Daha iyi kod belgeleri için
- **Sadece yanıt içeriğini döndürür**, web API'mizde kullanımı kolaylaştırır
- **Aynı model parametrelerini korur**: Tutarlı AI davranışı için

### Sistem İstemlerinin Büyüsü: AI Kişiliğini Programlama

Parametreler AI'nın nasıl düşündüğünü kontrol ediyorsa, sistem istemleri AI'nın kim olduğunu kontrol eder. Bu, AI ile çalışmanın en havalı kısımlarından biridir – temelde AI'ya tam bir kişilik, uzmanlık seviyesi ve iletişim tarzı veriyorsunuz.

**Sistem istemlerini farklı roller için farklı aktörler seçmek gibi düşünün**: Tek bir genel asistan yerine, farklı durumlar için özel uzmanlar oluşturabilirsiniz. Sabırlı bir öğretmene mi ihtiyacınız var? Yaratıcı bir beyin fırtınası ortağı mı? Katı bir iş danışmanı mı? Sadece sistem istemini değiştirin!

#### Sistem İstemlerinin Neden Bu Kadar Güçlü Olduğu

İşte ilginç kısım: AI modelleri, insanların farklı roller ve uzmanlık seviyeleri benimsediği sayısız konuşma üzerinde eğitilmiştir. AI'ya belirli bir rol verdiğinizde, tüm bu öğrenilen kalıpları etkinleştiren bir düğmeyi açmak gibi bir şeydir.

**AI için yöntem oyunculuğu gibi**: Bir aktöre "sen bilge bir profesörsün" deyin ve nasıl duruşlarını, kelime dağarcığını ve davranışlarını otomatik olarak ayarladığını izleyin. AI, dil kalıplarıyla benzer bir şey yapar.

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

**Soru**: "Web uygulamamda kullanıcı kimlik doğrulamasını nasıl ele alırım?"

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

**1. Bağlam Ayarı**: AI'ya arka plan bilgisi verin
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Çıktı Formatlama**: AI'ya yanıtları nasıl yapılandıracağını söyleyin
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

**3. Kısıtlama Ayarı**: AI'nın ne yapmaması gerektiğini tanımlayın
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Bu Neden Sohbet Asistanınız İçin Önemli?

Sistem istemlerini anlamak, özel AI asistanları oluşturmak için inanılmaz bir güç sağlar:
- **Müşteri hizmetleri botu**: Yardımsever, sabırlı, politika bilgisine sahip
- **Öğrenme eğitmeni**: Cesaret verici, adım adım, anlayışı kontrol eder
- **Yaratıcı ortak**: Hayal gücü yüksek, fikirler geliştirir, "ya şöyle olursa?" diye sorar
- **Teknik uzman**: Kesin, detaylı, güvenlik bilinci yüksek

**Anahtar fikir**: Sadece bir AI API'si çağırmıyorsunuz – belirli kullanım durumunuza hizmet eden özel bir AI kişiliği oluşturuyorsunuz. Bu, modern AI uygulamalarını genel değil, özel ve kullanışlı hissettiren şeydir.

## FastAPI ile Web API'si Oluşturma: Yüksek Performanslı AI İletişim Merkezi

Şimdi, ön yüzünüzü AI hizmetlerine bağlayan arka ucu oluşturacağız. FastAPI'yi kullanacağız; bu, AI uygulamaları için API'ler oluşturmakta mükemmel bir modern Python çerçevesidir.

FastAPI, bu tür projeler için birkaç avantaj sunar: eşzamanlı istekleri işlemek için yerleşik asenkron destek, otomatik API dokümantasyonu oluşturma ve mükemmel performans. FastAPI sunucunuz, ön yüzünüzden gelen istekleri alan, AI hizmetleriyle iletişim kuran ve biçimlendirilmiş yanıtlar döndüren bir aracı olarak işlev görür.

### Neden AI Uygulamaları için FastAPI?

Şunu merak ediyor olabilirsiniz: "AI'yı doğrudan ön yüz JavaScript'imden çağıramaz mıyım?" veya "Neden Flask veya Django yerine FastAPI?" Harika sorular! 
**İşte FastAPI'nin bizim için mükemmel olmasının nedenleri:**
- **Varsayılan olarak asenkron**: Birden fazla yapay zeka isteğini aynı anda işleyebilir, takılmadan çalışır
- **Otomatik dokümantasyon**: `/docs` adresine gidin ve ücretsiz olarak güzel, etkileşimli bir API dokümantasyon sayfası alın
- **Yerleşik doğrulama**: Hataları sorunlara yol açmadan önce yakalar
- **Şimşek hızında**: En hızlı Python frameworklerinden biri
- **Modern Python**: Python'un en yeni ve en iyi özelliklerini kullanır

**Peki neden bir backend'e ihtiyacımız var?**

**Güvenlik**: Yapay zeka API anahtarınız bir şifre gibidir – eğer bunu frontend JavaScript'e koyarsanız, web sitenizin kaynak kodunu gören herkes bunu çalabilir ve yapay zeka kredilerinizi kullanabilir. Backend, hassas kimlik bilgilerini güvende tutar.

**Hız Sınırlandırma ve Kontrol**: Backend, kullanıcıların ne sıklıkla istek yapabileceğini kontrol etmenizi, kullanıcı kimlik doğrulamasını uygulamanızı ve kullanım takibi için günlük kaydı eklemenizi sağlar.

**Veri İşleme**: Sohbetleri kaydetmek, uygunsuz içeriği filtrelemek veya birden fazla yapay zeka hizmetini birleştirmek isteyebilirsiniz. Bu mantık backend'de yer alır.

**Mimari, istemci-sunucu modeline benzer:**
- **Frontend**: Kullanıcı arayüzü katmanı
- **Backend API**: İstek işleme ve yönlendirme katmanı
- **Yapay Zeka Hizmeti**: Harici hesaplama ve yanıt oluşturma
- **Ortam Değişkenleri**: Güvenli yapılandırma ve kimlik bilgileri depolama

### İstek-Cevap Akışını Anlamak

Bir kullanıcı mesaj gönderdiğinde neler olduğunu inceleyelim:

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
2. **Frontend işleme**: JavaScript girdiyi yakalar ve JSON olarak biçimlendirir
3. **API doğrulama**: FastAPI, Pydantic modelleri kullanarak isteği otomatik olarak doğrular
4. **Yapay zeka entegrasyonu**: Backend bağlam ekler (sistem istemi) ve yapay zeka hizmetini çağırır
5. **Yanıt işleme**: API, yapay zekadan gelen yanıtı alır ve gerekirse değiştirir
6. **Frontend görüntüleme**: JavaScript yanıtı sohbet arayüzünde gösterir

### API Mimarisini Anlamak

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

**FastAPI uygulamasını anlamak:**
- **İçe aktarır**: Modern web framework işlevselliği için FastAPI ve veri doğrulama için Pydantic
- **Otomatik API dokümantasyonu oluşturur** (sunucu çalıştığında `/docs` adresinde mevcut)
- **CORS ara yazılımını etkinleştirir**: Farklı kaynaklardan gelen frontend isteklerine izin verir
- **Pydantic modellerini tanımlar**: Otomatik istek/yanıt doğrulama ve dokümantasyon için
- **Asenkron uç noktalar kullanır**: Eşzamanlı isteklerle daha iyi performans sağlar
- **Uygun HTTP durum kodları ve hata işleme uygular**: HTTPException ile
- **Yapılandırılmış günlük kaydı içerir**: İzleme ve hata ayıklama için
- **Hizmet durumu izleme için sağlık kontrolü uç noktası sağlar**

**FastAPI'nin geleneksel frameworklere göre avantajları:**
- **Otomatik doğrulama**: Pydantic modelleri, işlemden önce veri bütünlüğünü sağlar
- **Etkileşimli dokümantasyon**: `/docs` adresine giderek otomatik oluşturulan, test edilebilir API dokümantasyonunu görüntüleyin
- **Tip güvenliği**: Python tip ipuçları, çalışma zamanı hatalarını önler ve kod kalitesini artırır
- **Asenkron destek**: Birden fazla yapay zeka isteğini aynı anda engellemeden işleyebilir
- **Performans**: Gerçek zamanlı uygulamalar için önemli ölçüde daha hızlı istek işleme

### CORS'u Anlamak: Web'in Güvenlik Bekçisi

CORS (Cross-Origin Resource Sharing), bir binadaki güvenlik görevlisi gibidir; ziyaretçilerin içeri girip giremeyeceğini kontrol eder. Bunun neden önemli olduğunu ve uygulamanızı nasıl etkilediğini anlayalım.

#### CORS Nedir ve Neden Var?

**Sorun**: Herhangi bir web sitesi, izniniz olmadan bankanızın web sitesine sizin adınıza istek gönderebilseydi, bu bir güvenlik felaketi olurdu! Tarayıcılar bunu "Aynı Kaynak Politikası" ile varsayılan olarak engeller.

**Aynı Kaynak Politikası**: Tarayıcılar, yalnızca yüklendikleri aynı alan adı, port ve protokolden gelen web sayfalarının istek yapmasına izin verir.

**Gerçek dünya benzetmesi**: Bu, bir apartman binası güvenliği gibidir – yalnızca sakinler (aynı kaynak) varsayılan olarak binaya erişebilir. Bir arkadaşınızı (farklı bir kaynak) ziyaret etmek istiyorsanız, güvenliğe açıkça izin vermeniz gerekir.

#### Geliştirme Ortamınızda CORS

Geliştirme sırasında, frontend ve backend farklı portlarda çalışır:
- Frontend: `http://localhost:3000` (veya HTML'yi doğrudan açıyorsanız file://)
- Backend: `http://localhost:5000`

Bunlar aynı bilgisayarda olsalar bile "farklı kaynaklar" olarak kabul edilir!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**CORS yapılandırmasının pratikte yaptığı şey:**
- **API yanıtlarına özel HTTP başlıkları ekler** ve tarayıcılara "bu kaynaklar arası istek izinlidir" der
- **"Ön uçuş" isteklerini işler** (tarayıcılar bazen gerçek isteği göndermeden önce izinleri kontrol eder)
- **Tarayıcı konsolunuzdaki "CORS politikası tarafından engellendi" hatasını önler**

#### CORS Güvenliği: Geliştirme ve Üretim

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

**Neden önemli**: Geliştirme sırasında `CORS(app)` ön kapınızı kilitlememek gibidir – kullanışlı ama güvenli değil. Üretimde, API'nizle hangi web sitelerinin iletişim kurabileceğini tam olarak belirtmek istersiniz.

#### Yaygın CORS Senaryoları ve Çözümleri

| Senaryo | Sorun | Çözüm |
|---------|-------|-------|
| **Yerel Geliştirme** | Frontend backend'e ulaşamıyor | FastAPI'ye CORSMiddleware ekleyin |
| **GitHub Pages + Heroku** | Yayınlanmış frontend API'ye ulaşamıyor | GitHub Pages URL'nizi CORS kaynaklarına ekleyin |
| **Özel Alan Adı** | Üretimde CORS hataları | CORS kaynaklarını alan adınıza göre güncelleyin |
| **Mobil Uygulama** | Uygulama web API'sine ulaşamıyor | Uygulamanızın alan adını ekleyin veya dikkatli bir şekilde `*` kullanın |

**İpucu**: Tarayıcınızın Geliştirici Araçları'ndaki Ağ sekmesinde CORS başlıklarını kontrol edebilirsiniz. Yanıtta `Access-Control-Allow-Origin` gibi başlıkları arayın.

### Hata İşleme ve Doğrulama

API'mizin uygun hata işleme içerdiğini fark edeceksiniz:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Temel doğrulama ilkeleri:**
- **Gerekli alanları kontrol eder**: İstekleri işlemeye başlamadan önce
- **Anlamlı hata mesajları döner**: JSON formatında
- **Uygun HTTP durum kodlarını kullanır**: (400 kötü istekler için)
- **Frontend geliştiricilere sorunları çözmeleri için net geri bildirim sağlar**

## Backend'i Kurma ve Çalıştırma

Artık yapay zeka entegrasyonumuz ve FastAPI sunucumuz hazır olduğuna göre, her şeyi çalıştırmaya başlayalım. Kurulum süreci, Python bağımlılıklarını yüklemeyi, ortam değişkenlerini yapılandırmayı ve geliştirme sunucunuzu başlatmayı içerir.

### Python Ortamını Ayarlama

Python geliştirme ortamınızı ayarlayalım. Sanal ortamlar, Manhattan Projesi'nin bölümlenmiş yaklaşımı gibidir – her proje, diğer projeler arasında çakışmaları önleyen kendi izole alanına sahip olur.

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
- **Kendi küçük Python balonumuzu oluşturduk**: Paketleri başka bir şeyi etkilemeden yükleyebileceğimiz bir alan
- **Aktif hale getirdik**: Terminalimizin bu özel ortamı kullanmasını sağladık
- **Gerekli olanları yükledik**: OpenAI için yapay zeka sihri, FastAPI için web API'si, Uvicorn'u çalıştırmak için ve python-dotenv güvenli sır yönetimi için

**Temel bağımlılıkların açıklaması:**
- **FastAPI**: Modern, hızlı web framework ile otomatik API dokümantasyonu
- **Uvicorn**: FastAPI uygulamalarını çalıştıran şimşek hızında ASGI sunucusu
- **OpenAI**: GitHub Modelleri ve OpenAI API entegrasyonu için resmi kütüphane
- **python-dotenv**: .env dosyalarından güvenli ortam değişkeni yükleme

### Ortam Yapılandırması: Sırları Güvende Tutmak

API'mizi başlatmadan önce, web geliştirmede en önemli derslerden birini konuşmamız gerekiyor: sırlarınızı gerçekten nasıl gizli tutabilirsiniz. Ortam değişkenleri, yalnızca uygulamanızın erişebileceği güvenli bir kasa gibidir.

#### Ortam Değişkenleri Nedir?

**Ortama değişkenlerini bir güvenli depo kutusu gibi düşünün** – değerli şeylerinizi oraya koyarsınız ve yalnızca siz (ve uygulamanız) bunlara erişim sağlayabilirsiniz. Hassas bilgileri doğrudan kodunuza yazmak yerine (herkesin görebileceği yer), bunları güvenli bir şekilde ortamda saklarsınız.

**Fark şu:**
- **Yanlış yol**: Şifrenizi bir yapışkan not kağıdına yazıp monitörünüze yapıştırmak
- **Doğru yol**: Şifrenizi yalnızca sizin erişebileceğiniz güvenli bir şifre yöneticisinde saklamak

#### Ortam Değişkenleri Neden Önemlidir?

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

**Sırları kodda sabitlerseniz ne olur:**
1. **Versiyon kontrolü açığa çıkarır**: Git deposuna erişimi olan herkes API anahtarınızı görür
2. **Herkese açık depolar**: GitHub'a yüklerseniz, anahtarınız tüm internete görünür olur
3. **Ekip paylaşımı**: Projenizde çalışan diğer geliştiriciler kişisel API anahtarınıza erişir
4. **Güvenlik ihlalleri**: Birisi API anahtarınızı çalarsa, yapay zeka kredilerinizi kullanabilir

#### Ortam Dosyanızı Ayarlama

Backend dizininizde bir `.env` dosyası oluşturun. Bu dosya sırlarınızı yerel olarak saklar:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**.env dosyasını anlamak:**
- **Her satırda bir sır**: `KEY=value` formatında
- **Eşittir işaretinin etrafında boşluk yok**
- **Genellikle** değerlerin etrafında tırnak işareti gerekmez
- **Yorumlar** `#` ile başlar

#### GitHub Kişisel Erişim Jetonu Oluşturma

GitHub jetonunuz, uygulamanıza GitHub'ın yapay zeka hizmetlerini kullanma izni veren özel bir şifre gibidir:

**Adım adım jeton oluşturma:**
1. **GitHub Ayarlarına gidin** → Geliştirici ayarları → Kişisel erişim jetonları → Jetonlar (klasik)
2. **"Yeni jeton oluştur (klasik)" seçeneğine tıklayın**
3. **Sona erme süresini ayarlayın** (test için 30 gün, üretim için daha uzun)
4. **Kapsamları seçin**: "repo" ve ihtiyacınız olan diğer izinleri işaretleyin
5. **Jeton oluşturun** ve hemen kopyalayın (tekrar göremezsiniz!)
6. **.env dosyanıza yapıştırın**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Ortam Değişkenlerini Python'da Yükleme

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
- **Gerekli jetonun varlığını kontrol eder** (iyi bir hata işleme!)
- **Jeton eksikse açık bir hata verir**
- **Jetonu güvenli bir şekilde kullanır**: Kodda açığa çıkarmadan

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

**Neden bu çok önemli**: `.env` dosyasını `.gitignore` dosyasına eklediğinizde, Git ortam dosyanızı görmezden gelir ve sırlarınızı yanlışlıkla GitHub'a yüklemenizi önler.

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

**Neden önemli**: Geliştirme deneylerinizin üretim yapay zeka kullanım kotanızı etkilemesini istemezsiniz ve farklı ortamlar için farklı güvenlik seviyeleri istersiniz.

### Geliştirme Sunucunuzu Başlatma: FastAPI'nizi Hayata Geçirme

Şimdi heyecan verici an geldi – FastAPI geliştirme sunucunuzu başlatmak ve yapay zeka entegrasyonunuzu hayata geçirmek! FastAPI, özellikle asenkron Python uygulamaları için tasarlanmış şimşek hızında bir ASGI sunucusu olan Uvicorn'u kullanır.

#### FastAPI Sunucu Başlatma Sürecini Anlamak

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Bu komutu çalıştırdığınızda, perde arkasında şu işlemler gerçekleşir:

**1. Python, FastAPI uygulamanızı yükler**:
- Gerekli tüm kütüphaneleri (FastAPI, Pydantic, OpenAI, vb.) içe aktarır
- Ortam değişkenlerini `.env` dosyanızdan yükler
- Otomatik dokümantasyon ile FastAPI uygulama örneğini oluşturur

**2. Uvicorn, ASGI sunucusunu yapılandırır**:
- Asenkron istek işleme yetenekleriyle 5000 portuna bağlanır
- Otomatik doğrulama ile istek yönlendirmesini ayarlar
- Geliştirme için sıcak yeniden yüklemeyi etkinleştirir (dosya değişikliklerinde yeniden başlatır)
- Etkileşimli API dokümantasyonu oluşturur

**3. Sunucu dinlemeye başlar**:
- Terminalinizde şu mesajı görürsünüz: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Sunucu birden fazla eşzamanlı yapay zeka isteğini işleyebilir
- API'niz, `http://localhost:5000/docs` adresinde otomatik dokümantasyon ile hazırdır

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

**FastAPI çıktısını anlamak:**
- **Değişiklikleri izler**: Geliştirme için otomatik yeniden yükleme etkin
- **Uvicorn çalışıyor**: Yüksek performanslı ASGI sunucusu aktif
- **Yeniden yükleyici süreci başlatıldı**: Otomatik yeniden başlatmalar için dosya izleyici
- **Uygulama başlatma tamamlandı**: FastAPI uygulaması başarıyla başlatıldı
- **Etkileşimli dokümantasyon mevcut**: Otomatik API dokümantasyonu için `/docs` adresini ziyaret edin

#### FastAPI'nizi Test Etmek: Birden Fazla Güçlü Yöntem

FastAPI, otomatik etkileşimli dokümantasyon dahil olmak üzere API'nizi test etmek için birkaç kullanışlı yöntem sunar:

**Yöntem 1: Etkileşimli API Dokümantasyonu (Önerilir)**
1. Tarayıcınızı açın ve `http://localhost:5000/docs` adresine gidin
2. Tüm uç noktalarınızın belgelenmiş olduğu Swagger UI'yi göreceksiniz
3. `/hello` üzerine tıklayın → "Try it out" → Test mesajı girin → "Execute"
4. Yanıtı doğrudan tarayıcıda uygun formatta görün

**Yöntem 2: Temel Tarayıcı Testi**
1. Kök uç nokta için `http://localhost:5000` adresine gidin
2. Sunucu sağlığını kontrol etmek için `http://localhost:5000/health` adresine gidin
3. Bu, FastAPI sunucunuzun düzgün çalıştığını doğrular

**Yöntem 3: Komut Satırı Testi (Gelişmiş)
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

#### Yaygın Başlangıç Sorunlarını Giderme

| Hata Mesajı | Anlamı | Çözüm Yolu |
|-------------|--------|------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI yüklenmemiş | Sanal ortamınızda `pip install fastapi uvicorn` komutunu çalıştırın |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI sunucusu yüklenmemiş | Sanal ortamınızda `pip install uvicorn` komutunu çalıştırın |
| `KeyError: 'GITHUB_TOKEN'` | Ortam değişkeni bulunamadı | `.env` dosyanızı ve `load_dotenv()` çağrısını kontrol edin |
| `Address already in use` | 5000 portu meşgul | 5000 portunu kullanan diğer işlemleri sonlandırın veya portu değiştirin |
| `ValidationError` | İstek verileri Pydantic modeline uymuyor | İstek formatınızın beklenen şemaya uygun olup olmadığını kontrol edin |
| `HTTPException 422` | İşlenemeyen varlık | İstek doğrulaması başarısız oldu, doğru format için `/docs` adresini kontrol edin |
| `OpenAI API error` | AI hizmeti kimlik doğrulaması başarısız | GitHub token'ınızın doğru olduğundan ve uygun izinlere sahip olduğundan emin olun |

#### Geliştirme İçin En İyi Uygulamalar

**Anlık Yeniden Yükleme**: FastAPI ve Uvicorn, Python dosyalarınızda yaptığınız değişiklikleri kaydettiğinizde otomatik olarak yeniden yükleme sağlar. Bu, kodunuzu değiştirip manuel olarak yeniden başlatmadan hemen test edebileceğiniz anlamına gelir.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Geliştirme İçin Günlükleme**: Neler olduğunu anlamak için günlükleme ekleyin:

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

**Günlükleme neden yardımcı olur**: Geliştirme sırasında hangi isteklerin geldiğini, AI'nın ne yanıt verdiğini ve hataların nerede oluştuğunu tam olarak görebilirsiniz. Bu, hata ayıklamayı çok daha hızlı hale getirir.

### GitHub Codespaces için Yapılandırma: Bulut Tabanlı Geliştirme Kolaylaştı

GitHub Codespaces, herhangi bir tarayıcıdan erişebileceğiniz bulutta güçlü bir geliştirme bilgisayarına sahip olmak gibidir. Codespaces'te çalışıyorsanız, arka ucunuzu ön uç ile erişilebilir hale getirmek için birkaç ek adım gereklidir.

#### Codespaces Ağını Anlamak

Yerel bir geliştirme ortamında her şey aynı bilgisayarda çalışır:
- Arka uç: `http://localhost:5000`
- Ön uç: `http://localhost:3000` (veya file://)

Codespaces'te geliştirme ortamınız GitHub'ın sunucularında çalışır, bu nedenle "localhost" farklı bir anlam taşır. GitHub, hizmetleriniz için otomatik olarak genel URL'ler oluşturur, ancak bunları doğru şekilde yapılandırmanız gerekir.

#### Codespaces Yapılandırma Adımları

**1. Arka uç sunucunuzu başlatın**:
```bash
cd backend
python api.py
```

FastAPI/Uvicorn başlangıç mesajını göreceksiniz, ancak bunun Codespace ortamında çalıştığını fark edeceksiniz.

**2. Port görünürlüğünü yapılandırın**:
- VS Code'un alt panelindeki "Ports" sekmesini bulun
- Listede 5000 portunu bulun
- 5000 portuna sağ tıklayın
- "Port Visibility" → "Public" seçeneğini seçin

**Neden genel yapmalısınız?** Varsayılan olarak, Codespace portları özeldir (yalnızca size erişilebilir). Genel hale getirmek, tarayıcıda çalışan ön ucunuzun arka ucunuzla iletişim kurmasını sağlar.

**3. Genel URL'nizi alın**:
Portu genel hale getirdikten sonra şu gibi bir URL göreceksiniz:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Ön uç yapılandırmanızı güncelleyin**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Codespace URL'lerini Anlamak

Codespace URL'leri tahmin edilebilir bir deseni takip eder:
```
https://[codespace-name]-[port].app.github.dev
```

**Bunu parçalayalım:**
- `codespace-name`: Codespace'iniz için benzersiz bir tanımlayıcı (genellikle kullanıcı adınızı içerir)
- `port`: Hizmetinizin çalıştığı port numarası (FastAPI uygulamamız için 5000)
- `app.github.dev`: Codespace uygulamaları için GitHub'ın alan adı

#### Codespace Kurulumunuzu Test Etmek

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
| **Port Yapılandırması** | Otomatik | Manuel (portları genel yapma) |
| **Dosya Kalıcılığı** | Yerel bilgisayar | GitHub deposu |
| **İşbirliği** | Ortamı paylaşmak zor | Codespace bağlantısını paylaşmak kolay |
| **İnternet Bağımlılığı** | Sadece AI API çağrıları için | Her şey için gerekli |

#### Codespace Geliştirme İpuçları

**Codespaces'te Ortam Değişkenleri**:
`.env` dosyanız Codespaces'te aynı şekilde çalışır, ancak ortam değişkenlerini doğrudan Codespace içinde de ayarlayabilirsiniz:

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
4. Hazır olduğunuzda commit yapın ve gönderin

> 💡 **Pro İpucu**: Geliştirme sırasında Codespace arka uç URL'nizi yer imlerine ekleyin. Codespace adları sabit olduğundan, aynı Codespace'i kullandığınız sürece URL değişmez.

## Ön Uç Sohbet Arayüzü Oluşturma: İnsanların AI ile Buluştuğu Yer

Şimdi kullanıcı arayüzünü oluşturacağız – insanların AI asistanınızla nasıl etkileşimde bulunacağını belirleyen kısmı. Orijinal iPhone'un arayüz tasarımı gibi, karmaşık teknolojiyi kullanımı kolay ve doğal hissettiren bir hale getirmeye odaklanıyoruz.

### Modern Ön Uç Mimarisi Anlamak

Sohbet arayüzümüz "Tek Sayfa Uygulaması" veya SPA olarak adlandırılan bir şey olacak. Her tıklamada yeni bir sayfa yüklenen eski yöntem yerine, uygulamamız sorunsuz ve anında güncellenir:

**Eski web siteleri**: Fiziksel bir kitap okumak gibi – tamamen yeni sayfalara geçersiniz
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

### Ön Uç Geliştirmenin Üç Temel Taşı

Her ön uç uygulaması – basit web sitelerinden Discord veya Slack gibi karmaşık uygulamalara kadar – üç temel teknoloji üzerine inşa edilir. Bunları webde gördüğünüz ve etkileşimde bulunduğunuz her şeyin temeli olarak düşünebilirsiniz:

**HTML (Yapı)**: Temeliniz budur
- Hangi öğelerin var olduğunu belirler (düğmeler, metin alanları, konteynerler)
- İçeriğe anlam verir (bu bir başlık, bu bir form, vb.)
- Her şeyin üzerine inşa edildiği temel yapıyı oluşturur

**CSS (Sunum)**: İç tasarımcınızdır
- Her şeyi güzel hale getirir (renkler, yazı tipleri, düzenler)
- Farklı ekran boyutlarını yönetir (telefon vs dizüstü vs tablet)
- Akıcı animasyonlar ve görsel geri bildirimler oluşturur

**JavaScript (Davranış)**: Beyninizdir
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

Bu düzenli yapıya sahip bir ön uç dizini oluşturun:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Mimariyi anlamak:**
- **Yapıyı** (HTML), davranışı (JavaScript) ve sunumu (CSS) birbirinden ayırır
- **Basit** bir dosya yapısını korur, gezinmesi ve değiştirilmesi kolaydır
- **Web geliştirme** en iyi uygulamalarını organizasyon ve sürdürülebilirlik açısından takip eder

### HTML Temelini Oluşturma: Erişilebilirlik İçin Anlamlı Yapı

HTML yapısıyla başlayalım. Modern web geliştirme "anlamlı HTML"yi vurgular – yalnızca görünümünü değil, amacını açıkça tanımlayan HTML öğelerini kullanmak. Bu, uygulamanızı ekran okuyucular, arama motorları ve diğer araçlar için erişilebilir hale getirir.

**Anlamlı HTML neden önemlidir**: Sohbet uygulamanızı telefonda birine tarif ettiğinizi hayal edin. "Başlık ve açıklama içeren bir üst kısım, konuşmaların göründüğü ana alan ve mesaj yazmak için bir form var" dersiniz. Anlamlı HTML, bu doğal açıklamaya uygun öğeler kullanır.

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

**Her HTML öğesini ve amacını anlamak:**

#### Belge Yapısı
- **`<!DOCTYPE html>`**: Tarayıcıya bunun modern HTML5 olduğunu söyler
- **`<html lang="en">`**: Sayfa dilini ekran okuyucular ve çeviri araçları için belirtir
- **`<meta charset="UTF-8">`**: Uluslararası metinler için doğru karakter kodlamasını sağlar
- **`<meta name="viewport"...>`**: Sayfayı mobil uyumlu hale getirir, yakınlaştırma ve ölçeklemeyi kontrol eder

#### Anlamlı Öğeler
- **`<header>`**: Başlık ve açıklama içeren üst bölümü açıkça tanımlar
- **`<main>`**: Ana içerik alanını belirtir (konuşmaların olduğu yer)
- **`<form>`**: Kullanıcı girişi için anlamlıdır, doğru klavye navigasyonunu sağlar

#### Erişilebilirlik Özellikleri
- **`role="log"`**: Ekran okuyuculara bu alanın mesajların kronolojik bir kaydını içerdiğini söyler
- **`aria-live="polite"`**: Yeni mesajları ekran okuyuculara kesintisiz olarak duyurur
- **`aria-label`**: Form kontrolleri için açıklayıcı etiketler sağlar
- **`required`**: Tarayıcı, kullanıcıların bir mesaj girmesini doğrular

#### CSS ve JavaScript Entegrasyonu
- **`class` nitelikleri**: CSS için stil bağlantı noktaları sağlar (ör. `chat-container`, `input-group`)
- **`id` nitelikleri**: JavaScript'in belirli öğeleri bulmasını ve manipüle etmesini sağlar
- **Script yerleşimi**: JavaScript dosyası en son yüklenir, böylece önce HTML yüklenir

**Bu yapı neden işe yarar:**
- **Mantıksal akış**: Başlık → Ana içerik → Giriş formu doğal okuma sırasına uygundur
- **Klavyeye erişilebilir**: Kullanıcılar tüm etkileşimli öğeler arasında sekme yapabilir
- **Ekran okuyucu dostu**: Görme engelli kullanıcılar için net işaretler ve açıklamalar
- **Mobil uyumlu**: Viewport meta etiketi, duyarlı tasarımı etkinleştirir
- **Kademeli geliştirme**: CSS veya JavaScript yüklenmezse bile çalışır

### Etkileşimli JavaScript Ekleme: Modern Web Uygulama Mantığı

Şimdi sohbet arayüzümüzü hayata geçiren JavaScript'i oluşturacağız. ES6 sınıfları, async/await ve olay tabanlı programlama gibi profesyonel web geliştirme sırasında karşılaşacağınız modern JavaScript kalıplarını kullanacağız.

#### Modern JavaScript Mimarisi Anlamak

Prosedürel kod yazmak (sırayla çalışan bir dizi fonksiyon) yerine, **sınıf tabanlı bir mimari** oluşturacağız. Bir sınıfı, nesneler oluşturmak için bir plan olarak düşünebilirsiniz – bir mimarın planının birden fazla ev inşa etmek için kullanılabilmesi gibi.

**Web uygulamaları için neden sınıflar kullanılır?**
- **Organizasyon**: İlgili tüm işlevsellik bir araya getirilir
- **Yeniden kullanılabilirlik**: Aynı sayfada birden fazla sohbet örneği oluşturabilirsiniz
- **Sürdürülebilirlik**: Belirli özellikleri hata ayıklamak ve değiştirmek daha kolaydır
- **Profesyonel standart**: Bu model React, Vue ve Angular gibi çerçevelerde kullanılır

`app.js` dosyasını modern, iyi yapılandırılmış JavaScript ile oluşturun:

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

#### Her JavaScript Kavramını Anlamak

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

**Async/Await Deseni**:
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

**Olay Tabanlı Programlama**:
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

**Neden önemlidir**: Bir kullanıcı `<script>alert('hack')</script>` yazarsa, bu işlev bunun kod olarak çalışması yerine metin olarak görüntülenmesini sağlar.

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
- **Giriş doğrulama**: Boş mesaj göndermeyin
- **Klavye kısayolları**: Enter tuşu mesajları gönderir (gerçek sohbet uygulamaları gibi)

#### Uygulama Akışını Anlamak

1. **Sayfa yüklenir** → `DOMContentLoaded` olayı tetiklenir → `new ChatApp()` oluşturulur
2. **Yapıcı çalışır** → DOM öğesi referanslarını alır → Olay dinleyicilerini ayarlar
3. **Kullanıcı mesaj yazar** → Enter tuşuna basar veya Gönder'e tıklar → `handleSubmit` çalışır
4. **handleSubmit** → Girişi doğrular → Yükleme durumunu gösterir → API'yi çağırır
5. **API yanıt verir** → Sohbete AI mesajı eklenir → Arayüz yeniden etkinleştirilir
6. **Bir sonraki mesaja hazır** → Kullanıcı sohbet etmeye devam edebilir
Bu mimari ölçeklenebilir – çekirdek yapıyı yeniden yazmadan mesaj düzenleme, dosya yükleme veya birden fazla sohbet dizisi gibi özellikler kolayca eklenebilir.

### Sohbet Arayüzünüzü Stilize Etme

Şimdi CSS ile modern ve görsel olarak çekici bir sohbet arayüzü oluşturalım. İyi bir stil uygulaması, uygulamanızın profesyonel görünmesini sağlar ve genel kullanıcı deneyimini iyileştirir. Duyarlı ve erişilebilir bir tasarım için Flexbox, CSS Grid ve özel özellikler gibi modern CSS özelliklerini kullanacağız.

`styles.css` dosyasını şu kapsamlı stillerle oluşturun:

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
- **Kullanır** tutarlı temalar ve kolay bakım için CSS özel özelliklerini (değişkenler)
- **Uygular** duyarlı tasarım ve doğru hizalama için Flexbox düzenini
- **Dahil eder** dikkat dağıtmayan mesaj görünümü için yumuşak animasyonlar
- **Sağlar** kullanıcı mesajları, yapay zeka yanıtları ve hata durumları arasında görsel ayrım
- **Destekler** hem masaüstü hem de mobil cihazlarda çalışan duyarlı tasarım
- **Dikkate alır** hareket azaltma tercihleri ve uygun kontrast oranları ile erişilebilirlik
- **Sunar** kullanıcının sistem tercihlerine dayalı karanlık mod desteği

### Backend URL'nizi Yapılandırma

Son adım, JavaScript'teki `BASE_URL` değerini backend sunucunuzla eşleştirecek şekilde güncellemektir:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Backend URL'nizi belirleme:**
- **Yerel geliştirme**: Hem frontend hem de backend'i yerel olarak çalıştırıyorsanız `http://localhost:5000` kullanın
- **Codespaces**: 5000 numaralı portu herkese açık hale getirdikten sonra Ports sekmesinde backend URL'nizi bulun
- **Üretim**: Bir barındırma hizmetine dağıtırken gerçek alan adınızı kullanın

> 💡 **Test İpucu**: Backend'inizi doğrudan tarayıcınızda kök URL'yi ziyaret ederek test edebilirsiniz. FastAPI sunucunuzdan hoş geldiniz mesajını görmelisiniz.

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
   - Daha iyi bir geliştirme deneyimi için VS Code'un Live Server uzantısını kullanabilirsiniz

4. **Sohbet işlevselliğini test edin**:
   - Giriş alanına bir mesaj yazın
   - "Gönder" düğmesine tıklayın veya Enter tuşuna basın
   - Yapay zekanın uygun şekilde yanıt verdiğini doğrulayın
   - Tarayıcı konsolunda herhangi bir JavaScript hatası olup olmadığını kontrol edin

### Yaygın Sorunları Giderme

| Sorun | Belirtiler | Çözüm |
|-------|------------|-------|
| **CORS Hatası** | Frontend backend'e ulaşamıyor | FastAPI CORSMiddleware'in doğru yapılandırıldığından emin olun |
| **API Anahtarı Hatası** | 401 Yetkisiz yanıtlar | `GITHUB_TOKEN` ortam değişkeninizi kontrol edin |
| **Bağlantı Reddedildi** | Frontend'de ağ hataları | Backend URL'sini ve Flask sunucusunun çalıştığını doğrulayın |
| **Yapay Zeka Yanıtı Yok** | Boş veya hata yanıtları | API kotası veya kimlik doğrulama sorunları için backend günlüklerini kontrol edin |

**Yaygın hata ayıklama adımları:**
- **Kontrol eder** tarayıcı Geliştirici Araçları Konsolunda JavaScript hatalarını
- **Doğrular** Ağ sekmesinde başarılı API istekleri ve yanıtları gösteriliyor
- **Gözden geçirir** backend terminal çıktısını Python hataları veya API sorunları için
- **Onaylar** ortam değişkenlerinin doğru şekilde yüklendiğini ve erişilebilir olduğunu

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Sohbet asistanını geliştirin ve konuşma geçmişi ile mesajların kalıcılığını ekleyin. Bu meydan okuma, sohbet uygulamalarında durumu yönetmeyi ve daha iyi bir kullanıcı deneyimi için veri depolamayı anlamanıza yardımcı olacaktır.

**Görev:** Sohbet uygulamasını, oturumlar arasında kalıcı olan konuşma geçmişini içerecek şekilde değiştirin. Sohbet mesajlarını yerel depolamaya kaydetme, sayfa yüklendiğinde konuşma geçmişini görüntüleme ve bir "Geçmişi Temizle" düğmesi ekleme işlevselliği ekleyin. Ayrıca, sohbet deneyimini daha gerçekçi hale getirmek için yazma göstergeleri ve mesaj zaman damgaları ekleyin.

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında buradan bilgi edinin.

## Ödev: Kendi Kişisel Yapay Zeka Asistanınızı Oluşturun

Şimdi kendi yapay zeka asistanı uygulamanızı oluşturacaksınız. Sadece eğitim kodunu kopyalamak yerine, bu, kendi ilgi alanlarınızı ve kullanım durumlarınızı yansıtan bir şey oluştururken konseptleri uygulama fırsatıdır.

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
- **Benzersiz bir yapay zeka kişiliği oluşturun** – belki yardımcı bir yemek asistanı, yaratıcı bir yazı ortağı veya bir çalışma arkadaşı?
- **Sağlam hata işleme ekleyin** böylece uygulamanız bir şeyler ters gittiğinde çökmesin
- **API'nizin nasıl çalıştığını anlamak isteyenler için** açık belgeler yazın

**Frontend Geliştirme:**
- **Kullanıcı dostu ve davetkar bir sohbet arayüzü oluşturun**
- **Diğer geliştiricilere gururla gösterebileceğiniz temiz, modern JavaScript yazın**
- **Yapay zekanızın kişiliğini yansıtan özel bir tasarım yapın** – eğlenceli ve renkli mi? Temiz ve minimal mi? Tamamen size bağlı!
- **Hem telefonlarda hem de bilgisayarlarda harika çalıştığından emin olun**

**Kişiselleştirme Gereksinimleri:**
- **Yapay zeka asistanınız için benzersiz bir isim ve kişilik seçin** – belki ilgi alanlarınızı veya çözmek istediğiniz sorunları yansıtan bir şey
- **Görsel tasarımı asistanınızın havasına uygun şekilde özelleştirin**
- **İnsanların sohbet etmeye başlamak istemesini sağlayacak etkileyici bir hoş geldiniz mesajı yazın**
- **Asistanınızı farklı türdeki sorularla test edin ve nasıl yanıt verdiğini görün**

### Geliştirme Fikirleri (Opsiyonel)

Projenizi bir üst seviyeye taşımak mı istiyorsunuz? İşte keşfedebileceğiniz eğlenceli fikirler:

| Özellik | Açıklama | Pratik Yapacağınız Beceriler |
|---------|----------|-----------------------------|
| **Mesaj Geçmişi** | Sayfa yenilendikten sonra bile konuşmaları hatırlayın | localStorage ile çalışma, JSON işleme |
| **Yazma Göstergeleri** | Yanıt beklerken "Yapay Zeka yazıyor..." gösterimi | CSS animasyonları, asenkron programlama |
| **Mesaj Zaman Damgaları** | Her mesajın gönderildiği zamanı gösterin | Tarih/saat formatlama, kullanıcı deneyimi tasarımı |
| **Sohbeti Dışa Aktarma** | Kullanıcıların konuşmalarını indirmesine izin verin | Dosya işleme, veri dışa aktarma |
| **Tema Değiştirme** | Açık/koyu mod geçişi | CSS değişkenleri, kullanıcı tercihleri |
| **Sesli Giriş** | Konuşma metni işlevselliği ekleyin | Web API'leri, erişilebilirlik |

### Test ve Belgelendirme

**Kalite Güvencesi:**
- **Uygulamanızı** çeşitli giriş türleri ve uç durumlarla test edin
- **Duyarlı tasarımın** farklı ekran boyutlarında çalıştığını doğrulayın
- **Erişilebilirliği** klavye navigasyonu ve ekran okuyucularla kontrol edin
- **HTML ve CSS'yi** standartlara uygunluk açısından doğrulayın

**Belgelendirme Gereksinimleri:**
- **README.md dosyası yazın** ve projenizi açıklayın, nasıl çalıştırılacağını belirtin
- **Sohbet arayüzünüzün çalışırken ekran görüntülerini ekleyin**
- **Eklediğiniz benzersiz özellikleri veya özelleştirmeleri belgeleyin**
- **Diğer geliştiriciler için** net kurulum talimatları sağlayın

### Teslimat Yönergeleri

**Proje Teslimatları:**
1. Tüm kaynak koduyla birlikte tam proje klasörü
2. README.md dosyası ile proje açıklaması ve kurulum talimatları
3. Sohbet asistanınızın çalışırken ekran görüntüleri
4. Öğrendikleriniz ve karşılaştığınız zorluklar hakkında kısa bir değerlendirme

**Değerlendirme Kriterleri:**
- **İşlevsellik**: Sohbet asistanı beklendiği gibi çalışıyor mu?
- **Kod Kalitesi**: Kod iyi organize edilmiş, yorumlanmış ve sürdürülebilir mi?
- **Tasarım**: Arayüz görsel olarak çekici ve kullanıcı dostu mu?
- **Yaratıcılık**: Uygulamanız ne kadar benzersiz ve kişiselleştirilmiş?
- **Belgelendirme**: Kurulum talimatları açık ve eksiksiz mi?

> 💡 **Başarı İpucu**: Önce temel gereksinimlerle başlayın, ardından her şey çalıştıktan sonra geliştirmeler ekleyin. Gelişmiş özellikler eklemeden önce cilalı bir temel deneyim oluşturmaya odaklanın.

## Çözüm

[Çözüm](./solution/README.md)

## Bonus Meydan Okumalar

Yapay zeka asistanınızı bir üst seviyeye taşımaya hazır mısınız? Üretim uygulamalarında kullanılan gelişmiş yapay zeka entegrasyonu ve web geliştirme tekniklerini anlamanızı derinleştirecek bu ileri düzey meydan okumaları deneyin.

### Kişilik Özelleştirme

Gerçek sihir, yapay zeka asistanınıza benzersiz bir kişilik verdiğinizde gerçekleşir. Özel asistanlar oluşturmak için farklı sistem istemlerini deneyin:

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

Sohbet arayüzünüzü bu görsel ve işlevsel iyileştirmelerle dönüştürün:

**Gelişmiş CSS Özellikleri:**
- **Yumuşak mesaj animasyonları ve geçişleri uygulayın**
- **CSS şekilleri ve gradyanlarla özel sohbet balonu tasarımları ekleyin**
- **Yapay zekanın "düşünme" anı için yazma göstergesi animasyonu oluşturun**
- **Emoji tepkileri veya mesaj derecelendirme sistemi tasarlayın**

**JavaScript Geliştirmeleri:**
- **Klavye kısayolları ekleyin** (Gönder için Ctrl+Enter, giriş temizleme için Escape)
- **Mesaj arama ve filtreleme işlevselliği uygulayın**
- **Konuşma dışa aktarma özelliği oluşturun** (metin veya JSON olarak indir)
- **Mesaj kaybını önlemek için** localStorage'a otomatik kaydetme ekleyin

### Gelişmiş Yapay Zeka Entegrasyonu

**Birden Fazla Yapay Zeka Kişiliği:**
- **Farklı yapay zeka kişilikleri arasında geçiş yapmak için bir açılır menü oluşturun**
- **Kullanıcının tercih ettiği kişiliği localStorage'da kaydedin**
- **Konuşma akışını koruyan bağlam değiştirme işlevi uygulayın**

**Akıllı Yanıt Özellikleri:**
- **Konuşma bağlamı farkındalığı ekleyin** (Yapay zeka önceki mesajları hatırlar)
- **Konuşma konusuna dayalı akıllı öneriler uygulayın**
- **Yaygın sorular için hızlı yanıt düğmeleri oluşturun**

> 🎯 **Öğrenme Hedefi**: Bu bonus meydan okumalar, üretim uygulamalarında kullanılan gelişmiş web geliştirme desenlerini ve yapay zeka entegrasyon tekniklerini anlamanıza yardımcı olur.

## Özet ve Sonraki Adımlar

Tebrikler! Baştan sona yapay zeka destekli bir sohbet asistanı oluşturmayı başarıyla tamamladınız. Bu proje, modern web geliştirme teknolojileri ve yapay zeka entegrasyonu ile ilgili pratik deneyim kazandırdı – günümüzün teknoloji dünyasında giderek daha değerli hale gelen beceriler.

### Başardıklarınız

Bu ders boyunca, birkaç önemli teknoloji ve konsepti öğrendiniz:

**Backend Geliştirme:**
- **GitHub Models API ile** yapay zeka işlevselliği entegre ettiniz
- **Hataları düzgün bir şekilde işleyen** bir RESTful API oluşturdunuz
- **Ortam değişkenlerini kullanarak** güvenli kimlik doğrulama uyguladınız
- **Frontend ve backend arasında** çapraz kaynak istekleri için CORS yapılandırdınız

**Frontend Geliştirme:**
- **Semantik HTML kullanarak** duyarlı bir sohbet arayüzü oluşturdunuz
- **Asenkron JavaScript ve sınıf tabanlı mimari ile** modern JavaScript uyguladınız
- **CSS Grid, Flexbox ve animasyonlarla** etkileyici bir kullanıcı arayüzü tasarladınız
- **Erişilebilirlik özellikleri ve duyarlı tasarım ilkeleri eklediniz**

**Tam Yığın Entegrasyonu:**
- **Frontend ve backend'i** HTTP API çağrılarıyla bağladınız
- **Gerçek zamanlı kullanıcı etkileşimlerini ve asenkron veri akışını** yönettiniz
- **Uygulama boyunca hata işleme ve kullanıcı geri bildirimi uyguladınız**
- **Kullanıcı girdisinden yapay zeka yanıtına kadar** tam uygulama iş akışını test ettiniz

### Temel Öğrenme Çıktıları

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

Bu proje, yapay zeka destekli uygulamalar oluşturmanın temellerini size tanıttı ve bu, web geliştirme geleceğini temsil ediyor. Artık yapay zeka yeteneklerini geleneksel web uygulamalarına entegre etmeyi, akıllı ve duyarlı kullanıcı deneyimleri oluşturmayı anlıyorsunuz.

### Profesyonel Uygulamalar

Bu derste geliştirdiğiniz beceriler, modern yazılım geliştirme kariyerlerinde doğrudan uygulanabilir:

- **Modern çerçeveler ve API'ler kullanarak** tam yığın web geliştirme
- **Web uygulamaları ve mobil uygulamalarda yapay zeka entegrasyonu**
- **Mikro hizmet mimarileri için API tasarımı ve geliştirme**
- **Erişilebilirlik ve duyarlı tasarım odaklı** kullanıcı arayüzü geliştirme
- **DevOps uygulamaları** dahil olmak üzere ortam yapılandırması ve dağıtım

### Yapay Zeka Geliştirme Yolculuğunuza Devam Etmek

**Sonraki Öğrenme Adımları:**
- **Daha gelişmiş yapay zeka modelleri ve API'leri keşfedin** (GPT-4, Claude, Gemini)
- **Daha iyi yapay zeka yanıtları için istem mühendisliği tekniklerini öğrenin**
- **Konuşma tasarımı ve chatbot kullanıcı deneyimi ilkelerini inceleyin**
- **Yapay zeka güvenliği, etik ve sorumlu yapay zeka geliştirme uygulamalarını araştırın**
- **Konuşma hafızası ve bağlam farkındalığı ile** daha karmaşık uygulamalar oluşturun

**Gelişmiş Proje Fikirleri:**
- Yapay zeka moderasyonu ile çok kullanıcılı sohbet odaları
- Yapay zeka destekli müşteri hizmetleri chatbotları
- Kişiselleştirilmiş öğrenme ile eğitimsel öğretim asistanları
- Farklı yapay zeka kişilikleriyle yaratıcı yazı işbirlikçileri
- Geliştiriciler için teknik dokümantasyon asistanları

## GitHub Codespaces ile Başlangıç

Bu projeyi bir bulut geliştirme ortamında denemek ister misiniz? GitHub Codespaces, yerel kurulum gereksinimleri olmadan yapay zeka uygulamalarıyla denemeler yapmak için mükemmel bir tarayıcı geliştirme
- **Uygulamalarınızı test etmek için port yönlendirme**

**Codespaces'ın sağladıkları:**
- Yerel ortam kurulum ve yapılandırma sorunlarını **ortadan kaldırır**
- Farklı cihazlarda tutarlı bir geliştirme ortamı **sunar**
- Web geliştirme için önceden yapılandırılmış araçlar ve uzantılar **içerir**
- Sürüm kontrolü ve iş birliği için GitHub ile sorunsuz entegrasyon **sunar**

> 🚀 **Profesyonel İpucu**: Codespaces, AI uygulamalarını öğrenmek ve prototip oluşturmak için mükemmeldir çünkü karmaşık ortam kurulumlarını otomatik olarak halleder. Bu sayede yapılandırma sorunlarıyla uğraşmak yerine öğrenmeye ve geliştirmeye odaklanabilirsiniz.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.