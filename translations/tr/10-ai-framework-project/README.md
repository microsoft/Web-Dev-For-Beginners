<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:25:52+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "tr"
}
-->
# AI Çerçevesi

Bir projeyi oluşturma süresini ciddi şekilde hızlandırabilecek birçok AI çerçevesi bulunmaktadır. Bu projede, bu çerçevelerin hangi sorunları ele aldığını anlamaya odaklanacağız ve kendi çerçevemizi oluşturacağız.

## Neden bir çerçeve?

AI kullanımı söz konusu olduğunda, farklı yaklaşımlar ve bu yaklaşımları seçmek için farklı nedenler vardır. İşte bazıları:

- **SDK olmadan**, çoğu AI modeli, örneğin HTTP istekleri aracılığıyla doğrudan modelle etkileşim kurmanıza olanak tanır. Bu yaklaşım işe yarar ve bir SDK seçeneği yoksa bazen tek seçeneğiniz olabilir.
- **SDK**. Bir SDK kullanmak genellikle önerilen yaklaşımdır çünkü modelinizle etkileşim kurmak için daha az kod yazmanızı sağlar. Genellikle belirli bir modelle sınırlıdır ve farklı modeller kullanıyorsanız, bu ek modelleri desteklemek için yeni kod yazmanız gerekebilir.
- **Bir çerçeve**. Bir çerçeve genellikle işleri başka bir seviyeye taşır; farklı modeller kullanmanız gerektiğinde, hepsi için tek bir API vardır, genellikle farklı olan şey başlangıç ayarlarıdır. Ayrıca çerçeveler, AI alanında araçlar, hafıza, iş akışları, ajanlar gibi yararlı soyutlamalar getirir ve daha az kod yazarak bunları yönetir. Çerçeveler genellikle belirli bir görüşe sahip oldukları için, onların çalışma şekline uyum sağlarsanız gerçekten faydalı olabilirler, ancak çerçevenin tasarlanmadığı özel bir şey yapmaya çalışırsanız yetersiz kalabilirler. Bazen bir çerçeve çok fazla basitleştirebilir ve bu nedenle daha sonra performansa zarar verebilecek önemli bir konuyu öğrenemeyebilirsiniz.

Genel olarak, işe uygun aracı kullanın.

## Giriş

Bu derste şunları öğreneceğiz:

- Yaygın bir AI çerçevesi kullanmak.
- Sohbet konuşmaları, araç kullanımı, hafıza ve bağlam gibi yaygın sorunları ele almak.
- AI uygulamaları oluşturmak için bunlardan yararlanmak.

## İlk İstek

İlk uygulama örneğimizde, bir AI modeline nasıl bağlanacağımızı ve bir istek kullanarak nasıl sorgulayacağımızı öğreneceğiz.

### Python Kullanımı

Bu örnek için, GitHub Modellerine bağlanmak için Langchain kullanacağız. `ChatOpenAI` adlı bir sınıf kullanabilir ve ona `api_key`, `base_url` ve `model` alanlarını verebiliriz. Token, GitHub Codespaces içinde otomatik olarak doldurulur ve uygulamayı yerel olarak çalıştırıyorsanız, bunun çalışması için kişisel bir erişim tokeni ayarlamanız gerekir.

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

Bu kodda:

- Bir istemci oluşturmak için `ChatOpenAI` çağırıyoruz.
- Bir yanıt oluşturmak için bir istekle `llm.invoke` kullanıyoruz.
- Yanıtı `print(response.content)` ile yazdırıyoruz.

Şuna benzer bir yanıt görmelisiniz:

```text
The capital of France is Paris.
```

## Sohbet Konuşması

Önceki bölümde, genellikle sıfır atış istemi olarak bilinen, tek bir istek ve ardından bir yanıt kullandığımızı gördünüz.

Ancak, genellikle kendinizi AI asistanıyla birkaç mesaj alışverişinde bulunduğunuz bir konuşmayı sürdürmeniz gereken bir durumda bulursunuz.

### Python Kullanımı

Langchain'de konuşmayı bir listede saklayabiliriz. `HumanMessage`, bir kullanıcıdan gelen mesajı temsil eder ve `SystemMessage`, AI'nın "kişiliğini" ayarlamak için tasarlanmış bir mesajdır. Aşağıdaki örnekte, AI'ya Kaptan Picard'ın kişiliğini üstlenmesini ve insan/kullanıcının "Bana kendinden bahset" istemini sormasını nasıl talimat verdiğimizi görebilirsiniz.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

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

Konuşmanın durumunu korumak için, bir sohbetten gelen yanıtı ekleyebilir ve böylece konuşma hatırlanır. İşte bunu nasıl yapacağınız:

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

Yukarıdaki konuşmadan görebileceğimiz şey, LLM'yi iki kez çağırmamızdır; ilk olarak sadece iki mesajdan oluşan bir konuşmayla, ardından konuşmaya daha fazla mesaj eklenmiş bir şekilde ikinci kez.

Aslında, bunu çalıştırırsanız, ikinci yanıtın şöyle bir şey olduğunu göreceksiniz:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Bunu bir "belki" olarak alıyorum ;)

## Akış Yanıtları

TODO

## İstek Şablonları

TODO

## Yapılandırılmış Çıktı

TODO

## Araç Çağırma

Araçlar, LLM'ye ekstra beceriler kazandırma şeklimizdir. Fikir, LLM'ye sahip olduğu işlevler hakkında bilgi vermek ve bir istek, bu araçlardan birinin açıklamasına uyuyorsa, onu çağırmaktır.

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

Burada, `add` adlı bir aracın açıklamasını oluşturuyoruz. `TypedDict`'ten türeyerek ve `a` ve `b` gibi `Annotated` türündeki üyeler ekleyerek, bu LLM'nin anlayabileceği bir şemaya dönüştürülebilir. İşlevlerin oluşturulması, belirli bir araç tanımlandığında ne yapılması gerektiğini bildiğimizden emin olan bir sözlüktür.

Bu aracı LLM ile nasıl çağıracağımızı görelim:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Burada `bind_tools`'u `tools` dizimizle çağırıyoruz ve böylece LLM `llm_with_tools` artık bu araç hakkında bilgi sahibi oluyor.

Bu yeni LLM'yi kullanmak için şu kodu yazabiliriz:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Artık araçlara sahip bu yeni LLM'de `invoke` çağırdığımızda, belki `tool_calls` özelliği doldurulmuş olur. Eğer öyleyse, tanımlanan herhangi bir araç, hangi aracın çağrılması gerektiğini ve argümanlarla birlikte `name` ve `args` özelliğine sahiptir. Tam kod şöyle görünüyor:

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

Bu çıktının anlamı, LLM'nin "3 + 12 nedir" istemini `add` aracının çağrılması gerektiği şeklinde analiz etmesidir ve bunu adı, açıklaması ve üye alan açıklamaları sayesinde bilmiştir. Cevabın 15 olması, sözlüğümüzün `functions` kullanılarak bunu çağırması nedeniyle:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Bir Web API'sini Çağıran Daha İlginç Bir Araç

İki sayıyı toplayan araçlar, araç çağırmanın nasıl çalıştığını gösterdiği için ilginçtir, ancak genellikle araçlar daha ilginç bir şey yapma eğilimindedir, örneğin bir Web API'sini çağırmak gibi. Şimdi bu kodla bunu yapalım:

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

## Gömme

içeriği vektörleştirme, kosin benzerliği ile karşılaştırma

https://python.langchain.com/docs/how_to/embed_text/

### belge yükleyiciler

pdf ve csv

## Bir Uygulama Oluşturma

TODO

## Ödev

## Özet

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.