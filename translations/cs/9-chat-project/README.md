<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T03:24:03+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "cs"
}
-->
# Vytvořte chat asistenta s AI

Pamatujete, jak v Star Treku posádka nenuceně mluvila s počítačem lodi, kladla mu složité otázky a dostávala promyšlené odpovědi? To, co v 60. letech vypadalo jako čistá science fiction, je dnes něco, co můžete vytvořit pomocí webových technologií, které už znáte.

V této lekci vytvoříme AI chat asistenta pomocí HTML, CSS, JavaScriptu a nějaké backendové integrace. Objevíte, jak ty samé dovednosti, které se učíte, mohou spojit s výkonnými AI službami, které dokážou rozumět kontextu a generovat smysluplné odpovědi.

Představte si AI jako přístup k obrovské knihovně, která nejenže najde informace, ale také je syntetizuje do koherentních odpovědí přizpůsobených vašim konkrétním otázkám. Místo prohledávání tisíců stránek dostanete přímé, kontextuální odpovědi.

Integrace probíhá přes známé webové technologie, které spolupracují. HTML vytváří rozhraní chatu, CSS se stará o vizuální design, JavaScript řídí uživatelské interakce a backendové API spojuje vše s AI službami. Je to podobné jako různé sekce orchestru, které společně vytvářejí symfonii.

V podstatě stavíme most mezi přirozenou lidskou komunikací a strojovým zpracováním. Naučíte se jak technickou implementaci integrace AI služeb, tak i návrhové vzory, které činí interakce intuitivními.

Na konci této lekce vám integrace AI bude připadat méně jako záhadný proces a spíše jako další API, se kterým můžete pracovat. Pochopíte základní vzory, které pohánějí aplikace jako ChatGPT a Claude, za použití stejných principů webového vývoje, které se učíte.

## ⚡ Co můžete udělat během příštích 5 minut

**Rychlý start pro zaneprázdněné vývojáře**

```mermaid
flowchart LR
    A[⚡ 5 minut] --> B[Získat GitHub token]
    B --> C[Testovat AI hřiště]
    C --> D[Zkopírovat Python kód]
    D --> E[Zobrazit odpovědi AI]
```
- **Minuta 1**: Navštivte [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) a vytvořte osobní přístupový token
- **Minuta 2**: Otestujte AI interakce přímo v rozhraní playgroundu
- **Minuta 3**: Klikněte na záložku "Code" a zkopírujte Python ukázku
- **Minuta 4**: Spusťte kód lokálně s vaším tokenem: `GITHUB_TOKEN=your_token python test.py`
- **Minuta 5**: Sledujte, jak se vygeneruje vaše první AI odpověď z vlastního kódu

**Rychlý testovací kód**:
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

**Proč je to důležité**: Za 5 minut zažijete kouzlo programové AI interakce. To představuje základní stavební prvek, který pohání každou AI aplikaci, kterou používáte.

Takto bude vypadat váš hotový projekt:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/cs/screenshot.0a1ee0d123df681b.png)

## 🗺️ Vaše cesta za vývojem AI aplikací

```mermaid
journey
    title Od webového vývoje k AI integraci
    section Porozumění základům AI
      Objevte koncepty generativní AI: 4: You
      Prozkoumejte platformu GitHub Models: 6: You
      Ovládněte parametry a výzvy AI: 8: You
    section Integrace backendu
      Vytvořte Python API server: 5: You
      Implementujte volání AI funkcí: 7: You
      Zpracovávejte asynchronní operace: 8: You
    section Vývoj frontendu
      Vytvořte moderní chatovací rozhraní: 6: You
      Ovládněte interakce v reálném čase: 8: You
      Vytvořte responzivní uživatelskou zkušenost: 9: You
    section Profesionální aplikace
      Nasazení kompletního AI systému: 7: You
      Optimalizujte vzory výkonu: 8: You
      Vytvořte aplikaci připravenou pro produkci: 9: You
```
**Cíl vaší cesty**: Na konci této lekce budete mít vytvořenou kompletní aplikaci s podporou AI, která používá stejné technologie a vzory, jež pohánějí moderní AI asistenty jako ChatGPT, Claude a Google Bard.

## Pochopení AI: Od záhady k mistrovství

Než se ponoříme do kódu, pojďme si vysvětlit, s čím pracujeme. Pokud jste dříve používali API, znáte základní vzor: pošlete požadavek, obdržíte odpověď.

AI API fungují podobně, ale místo získávání předem uložených dat z databáze generují nové odpovědi na základě vzorů naučených z obrovského množství textů. Představte si to jako rozdíl mezi knihovní katalogovou službou a znalým knihovníkem, který dokáže syntetizovat informace z různých zdrojů.

### Co je vlastně "Generativní AI"?

Představte si, jak Rosettská deska umožnila vědcům porozumět egyptským hieroglyfům tím, že našla vzory mezi známými a neznámými jazyky. AI modely fungují podobně – hledají vzory v obrovských množstvích textu, aby pochopily, jak jazyk funguje, a pak tyto vzory používají k vytváření vhodných odpovědí na nové otázky.

**Tady je jednoduché srovnání:**
- **Tradiční databáze**: Jako kdybyste žádali o svůj rodný list – pokaždé dostanete stejný dokument
- **Vyhledávač**: Jako poradit se s knihovníkem o knihách o kočkách – ukáže vám, co je k dispozici
- **Generativní AI**: Jako zeptat se znalého přítele na kočky – řekne vám zajímavé věci svými slovy, přizpůsobené tomu, co chcete vědět

```mermaid
graph LR
    A[Vaše otázka] --> B[AI model]
    B --> C[Rozpoznávání vzorů]
    C --> D[Generování obsahu]
    D --> E[Kontextová odpověď]
    
    F[Tréninková data<br/>Knihy, články, web] --> B
```
### Jak se AI modely učí (jednoduchá verze)

AI modely se učí díky expozici obrovským datasetům obsahujícím texty z knih, článků a rozhovorů. Během tohoto procesu identifikují vzory v:
- Jak jsou myšlenky strukturované v psané komunikaci
- Která slova se často objevují společně
- Jak typicky probíhají rozhovory
- Kontextuální rozdíly mezi formální a neformální komunikací

**Je to podobné jako archeologové, kteří rozlušťují starověké jazyky**: analyzují tisíce příkladů, aby pochopili gramatiku, slovní zásobu a kulturní kontext, až se nakonec naučí interpretovat nové texty pomocí těchto vzorů.

### Proč GitHub Models?

Používáme GitHub Models z praktického důvodu – umožňuje nám přístup k AI na úrovni podniku bez nutnosti nastavovat vlastní AI infrastrukturu (a věřte, teď to rozhodně nechcete dělat!). Je to jako používat počasovou API místo pokusu předpovídat počasí sami zaváděním stanic všude.

Je to v podstatě "AI jako služba" a nejlepší na tom je, že začít je zdarma, takže můžete experimentovat bez obav z vysokých nákladů.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Váš Backend API]
    B --> C[GitHub Modely API]
    C --> D[Zpracování AI Modelu]
    D --> C
    C --> B
    B --> A
```
Použijeme GitHub Models pro naši backendovou integraci, která poskytuje přístup k profesionálním AI schopnostem přes vývojářsky přívětivé rozhraní. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) slouží jako testovací prostředí, kde můžete experimentovat s různými AI modely a pochopit jejich schopnosti před implementací do kódu.

## 🧠 Ekosystém vývoje AI aplikací

```mermaid
mindmap
  root((Vývoj AI))
    Understanding AI
      Generative Models
        Rozpoznávání vzorů
        Generování obsahu
        Porozumění kontextu
        Syntéza odpovědí
      AI Parameters
        Řízení teploty
        Limity tokenů
        Filtrování Top-p
        Systémové výzvy
    Backend Architecture
      API Integration
        Modely GitHubu
        Autentizace
        Zpracování požadavků
        Správa chyb
      Python Infrastructure
        Rámec FastAPI
        Asynchronní operace
        Ochrana prostředí
        Konfigurace CORS
    Frontend Experience
      Chat Interface
        Aktualizace v reálném čase
        Historie zpráv
        Zpětná vazba uživatelů
        Stav načítání
      Modern Web Tech
        Třídy ES6
        Async/Await
        Manipulace s DOM
        Zpracování událostí
    Professional Patterns
      Security Best Practices
        Správa tokenů
        Validace vstupů
        Prevence XSS
        Hraniční kontroly chyb
      Production Readiness
        Optimalizace výkonu
        Responzivní design
        Přístupnost
        Testovací strategie
```
**Základní princip**: Vývoj AI aplikací kombinuje tradiční webové dovednosti s integrací AI služeb, vytvářející inteligentní aplikace, které působí přirozeně a reagují na uživatele.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/cs/playground.d2b927122224ff8f.png)

**Co dělá playground tak užitečným:**
- **Vyzkoušejte** různé AI modely jako GPT-4o-mini, Claude a další (vše zdarma!)
- **Otestujte** své nápady a prompt předtím, než začnete psát kód
- **Získejte** připravené ukázky kódu ve svém oblíbeném programovacím jazyce
- **Nastavte** parametry jako úroveň kreativity a délku odpovědi a pozorujte dopad na výstup

Jakmile si trochu pohrajete, stačí kliknout na záložku "Code" a vybrat programovací jazyk, abyste získali implementační kód, který budete potřebovat.

![Playground choice showing code generation options for different programming languages](../../../translated_images/cs/playground-choice.1d23ba7d407f4758.png)

## Nastavení Python backendové integrace

Nyní implementujeme AI integraci za pomoci Pythonu. Python je skvělý pro AI aplikace díky své jednoduché syntaxi a silným knihovnám. Začneme kódem z playgroundu GitHub Models a pak jej přepracujeme do znovupoužitelné, produkčně připravené funkce.

### Pochopení základní implementace

Když z playgroundu stáhnete Python kód, dostanete něco, co vypadá takto. Nebojte se, pokud to ze začátku působí složitě – pojďme si to rozebrat kousek po kousku:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Pro autentizaci u modelu budete muset v nastavení GitHubu vygenerovat osobní přístupový token (PAT).
# Vytvořte svůj PAT token podle pokynů zde: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Co se v kódu děje:**
- **Importujeme** nástroje, které potřebujeme: `os` pro čtení proměnných prostředí a `OpenAI` pro komunikaci s AI
- **Nastavujeme** klienta OpenAI, aby směřoval na AI servery GitHubu místo přímo na OpenAI
- **Autentizujeme** se pomocí speciálního GitHub tokenu (více o tom za chvíli!)
- **Strukturalizujeme** náš rozhovor s různými "rolemi" – představte si to jako nastavení scény pro divadelní hru
- **Posíláme** náš požadavek AI s nějakými doladěnými parametry
- **Vytahujeme** skutečný text odpovědi ze všech dat, která se vrátí

### Pochopení rolí zpráv: rámec AI konverzace

AI konverzace používají specifickou strukturu s různými "rolemi", které mají určité účely:

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

**Představte si to jako režii hry:**
- **Role systému**: Jako režijní pokyny pro herce – říká AI, jak se chovat, jakou mít osobnost a jak odpovídat
- **Role uživatele**: Skutečná otázka nebo zpráva od osoby, která vaši aplikaci používá
- **Role asistenta**: AI odpověď (tu neodesíláte, ale objevuje se v historii konverzace)

**Analogie z reálného života**: Představte si, že představujete kamaráda na večírku:
- **Systémová zpráva**: „Tohle je moje kamarádka Sarah, je doktorka, která výborně vysvětluje lékařské pojmy jednoduše“
- **Uživatelská zpráva**: „Můžeš mi vysvětlit, jak fungují vakcíny?“
- **Asistentova odpověď**: Sarah odpovídá jako přátelská doktorka, ne jako právník nebo kuchař

### Pochopení AI parametrů: doladění chování odpovědi

Číselné parametry v AI API volání řídí, jak model generuje odpovědi. Tato nastavení vám umožňují přizpůsobit chování AI pro různé účely:

#### Teplota (0.0 až 2.0): Regulátor kreativity

**Co dělá**: Řídí, jak kreativní nebo předvídatelné budou odpovědi AI.

**Představte si to jako úroveň improvizace jazzového hudebníka:**
- **Teplota = 0,1**: Hraje úplně stejnou melodii pokaždé (velmi předvídatelné)
- **Teplota = 0,7**: Přidává pár vhodných variací, ale stále je rozpoznatelný (vyvážená kreativita)
- **Teplota = 1,5**: Plně experimentální jazz s neočekávanými obraty (velmi nepředvídatelné)

```python
# Velmi předvídatelné odpovědi (dobré pro faktické otázky)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Téměř vždy odpoví „4“
)

# Kreativní odpovědi (dobré pro brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Vygeneruje jedinečné, nečekané příběhy
)
```

#### Max Tokens (1 až 4096+): Kontrola délky odpovědi

**Co dělá**: Nastavuje limit, jak dlouhá může být odpověď AI.

**Tokeny jsou zhruba ekvivalentní slovům** (asi 1 token = 0,75 slov v angličtině):
- **max_tokens=50**: Krátké a výstižné (jako SMS)
- **max_tokens=500**: Pěkný odstavec nebo dva
- **max_tokens=2000**: Podrobné vysvětlení s příklady

```python
# Krátké, výstižné odpovědi
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Nutí k stručnému vysvětlení
)

# Podrobné, komplexní odpovědi
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Umožňuje podrobné vysvětlení s příklady
)
```

#### Top_p (0,0 až 1,0): Parametr zaměření

**Co dělá**: Řídí, jak moc se AI soustředí na nejpravděpodobnější odpovědi.

**Představte si AI, která má obrovskou slovní zásobu seřazenou podle pravděpodobnosti slov:**
- **top_p=0,1**: Zvažuje jen nejpravděpodobnějších 10 % slov (velmi zaměřené)
- **top_p=0,9**: Zahrnuje 90 % možných slov (více kreativní)
- **top_p=1,0**: Zahrnuje všechna slova (maximální rozmanitost)

**Například**: Pokud se zeptáte „Obloha je obvykle…“
- **Nízké top_p**: Řekne téměř jistě „modrá“
- **Vysoké top_p**: Může říct „modrá“, „zamračená“, „rozlehlá“, „měnící se“, „krásná“ atd.

### Shrnutí: Kombinace parametrů pro různé případy použití

```python
# Pro faktické, konzistentní odpovědi (jako dokumentační bot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Pro pomoc s kreativním psaním
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Pro konverzační, užitečné odpovědi (vyvážené)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matice optimalizace parametrů AI
    x-axis Nízká kreativita --> Vysoká kreativita
    y-axis Krátká odpověď --> Dlouhá odpověď
    
    quadrant-1 Kreativní obsah
    quadrant-2 Detailní analýza
    quadrant-3 Rychlá fakta
    quadrant-4 Konverzační AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Proč jsou tyto parametry důležité**: Různé aplikace potřebují různé typy odpovědí. Zákaznický servis by měl být konzistentní a faktický (nízká teplota), zatímco kreativní pomocník pro psaní by měl být imaginativní a různorodý (vysoká teplota). Porozumění těmto parametrům vám dává kontrolu nad osobností AI a stylem odpovědí.
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

**Co tato vylepšená funkce dělá:**
- **Přijímá** dva parametry: prompt uživatele a volitelnou systémovou zprávu
- **Poskytuje** výchozí systémovou zprávu pro obecné chování asistenta
- **Používá** správné typové nápovědy v Pythonu pro lepší dokumentaci kódu
- **Obsahuje** detailní docstring vysvětlující účel a parametry funkce
- **Vrací** jen obsah odpovědi, aby se snadno používala v našem webovém API
- **Zachovává** stejné parametry modelu pro konzistentní chování AI

### Kouzlo systémových promptů: programování osobnosti AI

Pokud parametry řídí, jak AI přemýšlí, systémové prompty řídí, kdo AI „myslí“, že je. To je upřímně jedna z nejsilnějších částí práce s AI – v podstatě dáváte AI kompletní osobnost, úroveň odbornosti a způsob komunikace.

**Představte si systémové prompty jako herecký casting různých rolí**: Místo jednoho obecného asistenta můžete vytvořit specializované experty pro různé situace. Potřebujete trpělivého učitele? Kreativního brainstormingového partnera? Rigorózního obchodního poradce? Stačí změnit systémový prompt!

#### Proč jsou systémové prompty tak silné

Zajímavé je, že AI modely byly trénovány na nespočtu konverzací, kde lidé zaujímají různé role a úrovně odbornosti. Když AI dáte konkrétní roli, je to jako přepnout vypínač, který aktivuje všechny ty naučené vzory.

**Je to jako method acting pro AI**: Řekněte herci „jsi moudrý starý profesor“ a sledujte, jak automaticky upraví držení těla, slovník a chování. AI dělá něco velmi podobného s jazykovými vzory.

#### Jak vytvořit efektivní systémové prompty: umění a věda

**Anatomie skvělého systémového promptu:**
1. **Role/identita**: Kdo AI je?
2. **Odbornost**: Co zná?
3. **Styl komunikace**: Jak mluví?
4. **Konkrétní instrukce**: Na co se má zaměřit?

```python
# ❌ Nejasný systémový pokyn
"You are helpful."

# ✅ Podrobný, efektivní systémový pokyn
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Příklady systémových promptů s kontextem

Podívejme se, jak různé systémové prompty vytvoří naprosto odlišné osobnosti AI:

```python
# Příklad 1: Trpělivý učitel
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Příklad 2: Kreativní spolupracovník
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Příklad 3: Strategický obchodní poradce
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Systémové prompty v akci

Otestujme stejnou otázku s různými systémovými prompty a uvidíme dramatické rozdíly:

**Otázka**: „Jak řeším uživatelskou autentifikaci v mé webové aplikaci?“

```python
# S pokynem učitele:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typická odpověď: "Skvělá otázka! Rozdělme autentizaci na jednoduché kroky.
# Představte si to jako výběrčího v nočním klubu kontrolujícího průkazy totožnosti..."

# S obchodním pokynem:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typická odpověď: "Z strategického hlediska je autentizace zásadní pro důvěru uživatele
# a dodržování předpisů. Nastíním rámec zohledňující bezpečnost,
# uživatelský zážitek a škálovatelnost..."
```

#### Pokročilé techniky systémových promptů

**1. Nastavení kontextu**: Dejte AI pozadí informace
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formátování výstupu**: Řekněte AI, jak strukturovat odpovědi  
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
  
**3. Nastavení omezení**: Definujte, co by AI NEMĚLA dělat  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### Proč je to důležité pro vašeho chat asistenta

Pochopení systémových promptů vám dává neuvěřitelnou sílu vytvořit specializované AI asistenty:  
- **Bot zákaznické podpory**: Užitečný, trpělivý, se znalostí pravidel  
- **Výukový tutor**: Povzbuzující, krok za krokem, kontroluje pochopení  
- **Kreativní partner**: Nápaditý, rozvíjí myšlenky, ptá se "co kdyby?"  
- **Technický expert**: Přesný, detailní, dbá na bezpečnost

**Hlavní poznatek**: Nejste jen volající AI API – vytváříte vlastní AI osobnost, která slouží vašemu konkrétnímu případu použití. To je důvod, proč moderní AI aplikace působí šité na míru a užitečné, nikoli obecné.

### 🎯 Pedagogická kontrola: Programování AI osobnosti

**Zastavte se a zamyslete**: Právě jste se naučili programovat AI osobnosti pomocí systémových promptů. To je základní dovednost v moderním vývoji AI aplikací.

**Rychlé sebehodnocení**:  
- Dokážete vysvětlit, čím se systémové prompty liší od běžných uživatelských zpráv?  
- Jaký je rozdíl mezi parametry temperature a top_p?  
- Jak byste vytvořili systémový prompt pro konkrétní případ použití (například tutor kódování)?

**Spojení s reálným světem**: Techniky systémových promptů, které jste se naučili, se používají v každé velké AI aplikaci – od GitHub Copilota až po konverzační rozhraní ChatGPT. Ovládáte stejné postupy, jaké používají AI týmy ve velkých technologických firmách.

**Výzva**: Jak byste navrhli různé AI osobnosti pro různé typy uživatelů (začátečník vs expert)? Zvažte, jak jeden základní AI model může díky prompt engineeringu sloužit různým cílovým skupinám.

## Vytvoření Web API pomocí FastAPI: Vaše výkonné AI komunikační centrum

Nyní postavme backend, který propojí frontend s AI službami. Použijeme FastAPI, moderní Python framework, který vyniká ve tvorbě API pro AI aplikace.

FastAPI nabízí několik výhod pro tento typ projektu: vestavěná asynchronní podpora pro zpracování více požadavků současně, automatická generace dokumentace API a výborný výkon. Váš FastAPI server funguje jako prostředník, který přijímá požadavky z frontendu, komunikuje s AI službami a vrací naformátované odpovědi.

### Proč FastAPI pro AI aplikace?

Možná přemýšlíte: „Nemohu AI volat přímo z JavaScriptu frontendu?“ nebo „Proč FastAPI místo Flasku nebo Djangoinu?“ Skvělé otázky!

**Důvody, proč je FastAPI ideální pro to, co stavíme:**  
- **Asynchronní jako výchozí**: Zvládne najednou vyřizovat více AI požadavků bez zaseknutí  
- **Automatická dokumentace**: Navštivte `/docs` a získáte krásnou, interaktivní dokumentaci API zdarma  
- **Vestavěná validace**: Odhalí chyby dřív, než způsobí problémy  
- **Bleskově rychlý**: Jeden z nejrychlejších Python frameworků  
- **Moderní Python**: Využívá nejnovější a nejlepší Python funkce

**Proč vůbec potřebujeme backend:**

**Bezpečnost**: Váš AI API klíč je jako heslo – pokud ho vložíte do frontendového JavaScriptu, kdokoli, kdo uvidí zdrojový kód vašich webových stránek, ho může ukrást a zneužít vaše AI kredity. Backend uchovává citlivé údaje v bezpečí.

**Omezení a kontrola**: Backend vám umožní kontrolovat, jak často mohou uživatelé posílat požadavky, implementovat autentizaci uživatelů a přidávat logování pro sledování využití.

**Zpracování dat**: Můžete chtít ukládat konverzace, filtrovat nevhodný obsah nebo kombinovat více AI služeb. Logika to všechno probíhá na backendu.

**Architektura připomíná model klient-server:**  
- **Frontend**: Vrstva uživatelského rozhraní pro interakci  
- **Backend API**: Vrstva zpracování a směrování požadavků  
- **AI služba**: Externí výpočty a generování odpovědí  
- **Proměnné prostředí**: Bezpečné uložení konfigurace a přístupových údajů

### Pochopení toku požadavku a odpovědi

Pojďme sledovat, co se děje, když uživatel odešle zprávu:

```mermaid
sequenceDiagram
    participant User as 👤 Uživateli
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI služba
    
    User->>Frontend: Zadává "Ahoj AI!"
    Frontend->>API: POST /hello {"message": "Ahoj AI!"}
    Note over API: Ověřuje požadavek<br/>Přidává systémovou výzvu
    API->>AI: Odesílá formátovaný požadavek
    AI->>API: Vrací odpověď AI
    Note over API: Zpracovává odpověď<br/>Loguje konverzaci
    API->>Frontend: {"response": "Ahoj! Jak vám mohu pomoci?"}
    Frontend->>User: Zobrazuje zprávu AI
```  
**Porozumění jednotlivým krokům:**  
1. **Interakce uživatele**: Osoba zadává text do chatovacího rozhraní  
2. **Zpracování frontendu**: JavaScript zachytí vstup a naformátuje ho jako JSON  
3. **Validace API**: FastAPI automaticky ověří požadavek pomocí Pydantic modelů  
4. **Integrace AI**: Backend přidá kontext (systémový prompt) a zavolá AI službu  
5. **Zpracování odpovědi**: API přijme odpověď AI a může ji upravit podle potřeby  
6. **Zobrazení ve frontendu**: JavaScript zobrazí odpověď v chatovacím rozhraní

### Porozumění architektuře API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Ahoj AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API request
    GitHub Models->>AI Function: AI response
    AI Function->>FastAPI: response text
    FastAPI->>Frontend: {"response": "Ahoj! Jak vám mohu pomoci?"}
```  
```mermaid
flowchart TD
    A[Uživatelský vstup] --> B[Validace na frontend]
    B --> C[HTTP POST požadavek]
    C --> D[FastAPI router]
    D --> E[Validace Pydantic]
    E --> F[Volání funkce AI]
    F --> G[GitHub Models API]
    G --> H[Zpracování odpovědi]
    H --> I[JSON odpověď]
    I --> J[Aktualizace frontendu]
    
    subgraph "Bezpečnostní vrstva"
        K[CORS middleware]
        L[Proměnné prostředí]
        M[Zpracování chyb]
    end
    
    D --> K
    F --> L
    H --> M
```  
### Vytvoření aplikace FastAPI

Postupně si vytvoříme API. Vytvořte soubor `api.py` s tímto FastAPI kódem:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Nastavit protokolování
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Vytvořit FastAPI aplikaci
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Nastavit CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Nastavit vhodně pro produkci
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic modely pro validaci požadavků/odpovědí
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
        # Vyextrahovat a ověřit zprávu
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Zavolat AI službu (poznámka: call_llm by měla být asynchronní pro lepší výkon)
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
  
**Porozumění implementaci FastAPI:**  
- **Importuje** FastAPI pro moderní webové framework funkce a Pydantic pro validaci dat  
- **Vytváří** automatickou dokumentaci API (dostupnou na `/docs` při běhu serveru)  
- **Aktivuje** CORS middleware pro povolení požadavků z různých zdrojů frontendu  
- **Definuje** Pydantic modely pro automatickou validaci požadavků/odpovědí a dokumentaci  
- **Používá** asynchronní endpointy pro lepší výkon při paralelním zpracování požadavků  
- **Implementuje** správné HTTP status kódy a zpracování chyb s HTTPException  
- **Zahrnuje** strukturované logování pro monitoring a ladění  
- **Poskytuje** health check endpoint pro sledování stavu služby

**Klíčové výhody FastAPI oproti tradičním frameworkům:**  
- **Automatická validace**: Pydantic modely garantují integritu dat před zpracováním  
- **Interaktivní dokumentace**: Na `/docs` naleznete auto-generovanou testovatelnou dokumentaci API  
- **Typová bezpečnost**: Python typové anotace zabraňují runtime chybám a zvyšují kvalitu kódu  
- **Asynchronní podpora**: Zpracuje více AI požadavků najednou bez blokování  
- **Výkon**: Výrazně rychlejší zpracování požadavků pro aplikace v reálném čase

### Porozumění CORS: Bezpečnostní stráž webu

CORS (Cross-Origin Resource Sharing) je jako bezpečnostní hlídač u budovy, který kontroluje, jestli návštěvníci smí vstoupit. Pojďme pochopit, proč je to důležité a jak to ovlivňuje vaši aplikaci.

#### Co je CORS a proč existuje?

**Problém**: Představte si, že by jakákoli webová stránka mohla bez vašeho svolení posílat požadavky na váš bankovní web. To by byla bezpečnostní noční můra! Prohlížeče to ve výchozím nastavení zabraňují pomocí „Same-Origin Policy.“

**Same-Origin Policy**: Prohlížeče dovolují webovým stránkám posílat požadavky pouze na stejnou doménu, port a protokol, ze kterých byly načteny.

**Analogie ze života**: Je to jako bezpečnostní služba v bytovém domě – jen obyvatelé (stejný origin) mají přístup do budovy. Pokud chcete pustit přítele (jiný origin), musíte o tom hlídače výslovně informovat.

#### CORS ve vašem vývojovém prostředí

Během vývoje běží frontend a backend na různých portech:  
- Frontend: `http://localhost:3000` (nebo file:// při přímém otevření HTML)  
- Backend: `http://localhost:5000`

I když jsou na stejném počítači, považují se za „různé originy“!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Toto říká prohlížečům: „Je v pořádku, aby jiné zdroje prováděly požadavky na toto API“
```
  
**Co konfigurace CORS v praxi dělá:**  
- **Přidává** speciální HTTP hlavičky do odpovědí API, které říkají prohlížeči „tomu je tento cross-origin požadavek povolen“  
- **Zpracovává** „preflight“ požadavky (prohlížeče někdy ověřují oprávnění před odesláním skutečného požadavku)  
- **Zabraňuje** nechvalně známé chybě „blocked by CORS policy“ v konzoli prohlížeče

#### CORS bezpečnost: Vývoj vs produkce

```python
# 🚨 Vývoj: Povolit VŠECHNY zdroje (praktické, ale nebezpečné)
CORS(app)

# ✅ Produkce: Povolit pouze vaši konkrétní doménu frontend
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Pokročilé: Různé zdroje pro různá prostředí
if app.debug:  # Režim vývoje
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Produkční režim
    CORS(app, origins=["https://yourdomain.com"])
```
  
**Proč je to důležité**: Ve vývoji je `CORS(app)` jako mít otevřené dveře – pohodlné, ale nezabezpečené. V produkci chcete přesně definovat, které weby mohou vaše API používat.

#### Běžné scénáře CORS a řešení

| Scénář             | Problém                   | Řešení                             |
|--------------------|---------------------------|----------------------------------|
| **Lokální vývoj**   | Frontend nedosáhne backend| Přidat CORSMiddleware do FastAPI |
| **GitHub Pages + Heroku** | Nasazený frontend nemůže volat API | Přidat URL GitHub Pages do CORS |
| **Vlastní doména**  | CORS chyby v produkci      | Aktualizovat CORS origins dle domény |
| **Mobilní aplikace**| Aplikace nemá přístup k webovému API | Přidat doménu aplikace nebo použít `*` opatrně |

**Tip na závěr**: V DevTools v záložce Síť můžete zkontrolovat CORS hlavičky v odpovědích. Hledejte např. `Access-Control-Allow-Origin`.

### Zpracování chyb a validace

Všimněte si, že naše API obsahuje správné zpracování chyb:

```python
# Ověřte, že jsme obdrželi zprávu
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Klíčové principy validace:**  
- **Kontroluje** požadovaná pole před zpracováním požadavku  
- **Vrací** smysluplné chybové zprávy v JSON formátu  
- **Používá** správné HTTP status kódy (400 pro špatné požadavky)  
- **Poskytuje** jasnou zpětnou vazbu, která pomůže frontendovým vývojářům s laděním

## Nastavení a spuštění vašeho backendu

Nyní, když máme připravenou integraci AI a FastAPI server, pojďme vše spustit. Nastavení zahrnuje instalaci Python závislostí, konfiguraci proměnných prostředí a spuštění vývojového serveru.

### Nastavení Python prostředí

Nastavíme si Python vývojové prostředí. Virtuální prostředí jsou jako Manhattan Project – každý projekt má svůj izolovaný prostor s konkrétními nástroji a závislostmi, aby se vzájemně nerušily.

```bash
# Přejděte do vašeho backendového adresáře
cd backend

# Vytvořte virtuální prostředí (jako vytvoření čisté místnosti pro váš projekt)
python -m venv venv

# Aktivujte ho (Linux/Mac)
source ./venv/bin/activate

# Na Windows použijte:
# venv\Scripts\activate

# Nainstalujte dobré věci
pip install openai fastapi uvicorn python-dotenv
```
  
**Co jsme právě udělali:**  
- **Vytvořili** vlastní izolovanou bublinu Pythonu, kde můžeme instalovat balíčky bez ovlivnění ostatních projektů  
- **Aktivovali** ji, aby terminál věděl, že má používat toto specifické prostředí  
- **Nainstalovali** základní balíčky: OpenAI pro AI magii, FastAPI pro webové API, Uvicorn pro spuštění serveru a python-dotenv pro bezpečné načítání tajemství

**Vysvětlení klíčových závislostí:**  
- **FastAPI**: Moderní, rychlý webový framework s automatickou dokumentací API  
- **Uvicorn**: Bleskově rychlý ASGI server pro běh FastAPI aplikací  
- **OpenAI**: Oficiální knihovna pro GitHub Modely a integraci OpenAI API  
- **python-dotenv**: Bezpečné načítání proměnných prostředí ze souborů .env

### Konfigurace prostředí: Jak udržet tajemství v bezpečí

Než spustíme API, pojďme si říct jedno z nejdůležitějších pravidel webového vývoje: jak udržet svoje tajemství skutečně tajemstvími. Proměnné prostředí jsou jako bezpečnostní schránka, ke které má přístup jen vaše aplikace.

#### Co jsou proměnné prostředí?

**Představte si proměnné prostředí jako bezpečný trezor** – uložíte do něj cennosti a pouze vy (a vaše aplikace) máte klíč, jak je vyjmout. Místo aby citlivé údaje byly přímo v kódu (který vidí doslova každý), ukládají se bezpečně v prostředí.

**Rozdíl je:**
- **Špatný způsob**: Heslo napsané na lepícím papírku přilepeném na monitoru  
- **Správný způsob**: Heslo uložené v bezpečném správci hesel, ke kterému máte přístup jen vy

#### Proč jsou proměnné prostředí důležité

```python
# 🚨 NIKDY TO NEDĚLEJTE - API klíč je viditelný pro všechny
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Každý ho může ukrást!
    base_url="https://models.github.ai/inference"
)

# ✅ DĚLEJTE TO TAKTO - API klíč je ukládán bezpečně
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Přístup má jen vaše aplikace
    base_url="https://models.github.ai/inference"
)
```
  
**Co se stane, když máte tajemství napevno vložená v kódu:**  
1. **Vystavení v verzovacím systému**: Každý s přístupem ke Git repozitáři vidí váš API klíč  
2. **Veřejné repozitáře**: Když to nahrajete na GitHub, váš klíč je viditelný celému internetu  
3. **Sdílení v týmu**: Další vývojáři projektu získají přístup k vašemu osobnímu API klíči  
4. **Bezpečnostní rizika**: Pokud někdo ukradne váš API klíč, může vyčerpat vaše AI kredity

#### Vytvoření vašeho konfiguračního souboru .env

V backendovém adresáři vytvořte soubor `.env`. Tento soubor lokalně ukládá vaše tajemství:

```bash
# Soubor .env - Tento by NEMĚL být nikdy přidán do Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**Jak funguje soubor .env:**  
- **Jedno tajemství na řádek** v podobě `KEY=value`  
- **Bez mezer** okolo rovnítka  
- **Nemusíte používat uvozovky** kolem hodnot (většinou)  
- **Komentáře** začínají znakem `#`

#### Vytvoření osobního přístupového tokenu pro GitHub

Váš GitHub token je jako speciální heslo, které dává aplikaci oprávnění používat GitHub AI služby:

**Postup vytvoření tokenu:**  
1. **Přejděte na GitHub Nastavení** → Developer settings → Personal access tokens → Tokens (classic)  
2. **Klikněte na "Generate new token (classic)"**  
3. **Nastavte expiraci** (30 dní pro testování, delší pro produkci)  
4. **Vyberte oprávnění**: Zaškrtněte „repo“ a další potřebná práva  
5. **Vygenerujte token** a okamžitě ho zkopírujte (už ho jednou neuvidíte!)  
6. **Vložte ho do souboru .env**

```bash
# Příklad toho, jak váš token vypadá (tohle je falešné!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### Načítání proměnných prostředí v Pythonu

```python
import os
from dotenv import load_dotenv

# Načíst proměnné prostředí ze souboru .env
load_dotenv()

# Nyní k nim můžete bezpečně přistupovat
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**Co tento kód dělá:**  
- **Načte** váš `.env` soubor a zpřístupní proměnné Pythonu  
- **Kontroluje**, zda je token dostupný (dobrá praxe pro ošetření chyb)  
- **Vyhodí** jasnou chybu, pokud token chybí  
- **Používá** token bezpečně, aniž by ho vystavoval v kódu

#### Bezpečnost Git: Soubor .gitignore

Soubor `.gitignore` říká Gitu, které soubory nikdy nesledovat nebo nahrávat:

```bash
# .gitignore - Přidejte tyto řádky
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**Proč je to klíčové**: Jakmile přidáte `.env` do `.gitignore`, Git tento soubor ignoruje a vyhnete se tak nechtěnému nahrání tajemství na GitHub.

#### Různá prostředí, různá tajemství

Profesionální aplikace používají různé API klíče pro různá prostředí:

```bash
# .env.vyvoj
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.produkce
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Proč je to důležité**: Nechcete, aby vaše testování ovlivnilo kvótu AI v produkci a chcete mít různou úroveň zabezpečení podle prostředí.

### Spuštění vývojového serveru: Oživení vašeho FastAPI
Teď přichází vzrušující okamžik – spuštění vašeho FastAPI vývojového serveru a sledování, jak vaše AI integrace ožívá! FastAPI používá Uvicorn, bleskurychlý ASGI server, který je speciálně navržen pro asynchronní Python aplikace.

#### Pochopení procesu spuštění FastAPI serveru

```bash
# Metoda 1: Přímé spuštění Pythonu (zahrnuje automatické znovunačtení)
python api.py

# Metoda 2: Použití Uvicorn přímo (více kontroly)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Když spustíte tento příkaz, děje se za scénou následující:

**1. Python načte vaši FastAPI aplikaci**:
- Importuje všechny požadované knihovny (FastAPI, Pydantic, OpenAI atd.)
- Načte proměnné prostředí z vašeho souboru `.env`
- Vytvoří instanci FastAPI aplikace s automatickou dokumentací

**2. Uvicorn konfiguruje ASGI server**:
- Naváže spojení na portu 5000 s asynchronními schopnostmi zpracování požadavků
- Nastaví směrování požadavků s automatickou validací
- Povolení hot reload pro vývoj (restartuje při změně souborů)
- Generuje interaktivní API dokumentaci

**3. Server začne naslouchat**:
- Ve vašem terminálu se zobrazí: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Server dokáže obsluhovat více současných AI požadavků
- Vaše API je připravené s automatickou dokumentací na `http://localhost:5000/docs`

#### Co byste měli vidět, když vše funguje

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Pochopení výstupu FastAPI:**
- **Will watch for changes**: Automatické přenačítání povoleno pro vývoj
- **Uvicorn running**: Vysokovýkonný ASGI server je aktivní
- **Started reloader process**: Sledovač souborů pro automatické restarty
- **Application startup complete**: FastAPI aplikace úspěšně inicializována
- **Interactive docs available**: Navštivte `/docs` pro automatickou API dokumentaci

#### Testování vašeho FastAPI: Více výkonných metod

FastAPI nabízí několik pohodlných způsobů, jak otestovat vaše API, včetně automatické interaktivní dokumentace:

**Metoda 1: Interaktivní API dokumentace (doporučeno)**
1. Otevřete prohlížeč a přejděte na `http://localhost:5000/docs`
2. Uvidíte Swagger UI se všemi zdokumentovanými endpointy
3. Klikněte na `/hello` → "Try it out" → Zadejte testovací zprávu → "Execute"
4. Odpověď uvidíte přímo v prohlížeči s odpovídajícím formátováním

**Metoda 2: Základní test v prohlížeči**
1. Přejděte na `http://localhost:5000` pro kořenový endpoint
2. Přejděte na `http://localhost:5000/health` pro kontrolu stavu serveru
3. Tím potvrdíte, že váš FastAPI server správně běží

**Metoda 2: Test z příkazové řádky (pokročilé)**
```bash
# Test s curl (pokud je dostupný)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Očekávaná odpověď:
# {"response": "Ahoj! Jsem váš AI asistent. Jak vám mohu dnes pomoci?"}
```

**Metoda 3: Python testovací skript**
```python
# test_api.py - Vytvořte tento soubor pro testování vaší API
import requests
import json

# Otestujte API endpoint
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Řešení běžných problémů při startu

| Chybová zpráva | Co to znamená | Jak to opravit |
|---------------|---------------|------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI není nainstalováno | Spusťte `pip install fastapi uvicorn` ve vašem virtuálním prostředí |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI server není nainstalován | Spusťte `pip install uvicorn` ve vašem virtuálním prostředí |
| `KeyError: 'GITHUB_TOKEN'` | Proměnná prostředí nenalezena | Zkontrolujte váš `.env` soubor a volání `load_dotenv()` |
| `Address already in use` | Port 5000 je obsazen | Ukončete jiné procesy používající port 5000 nebo změňte port |
| `ValidationError` | Data požadavku neodpovídají Pydantic modelu | Zkontrolujte, zda formát požadavku odpovídá očekávanému schématu |
| `HTTPException 422` | Nezpracovatelná entita | Validace požadavku selhala, zkontrolujte `/docs` pro správný formát |
| `OpenAI API error` | Selhání autentizace AI služby | Ověřte, zda je váš GitHub token správný a má příslušná oprávnění |

#### Nejlepší postupy pro vývoj

**Hot Reloading**: FastAPI s Uvicorn poskytuje automatické přenačítání při ukládání změn do Python souborů. To znamená, že můžete upravovat kód a okamžitě testovat bez nutnosti manuálního restartu.

```python
# Explicitně povolit horké načítání
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True povoluje horké načítání
```

**Logging pro vývoj**: Přidejte logování, abyste pochopili, co se děje:

```python
import logging

# Nastavit protokolování
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

**Proč logování pomáhá**: Během vývoje přesně vidíte, jaké požadavky přicházejí, jak AI odpovídá a kde se vyskytují chyby. To výrazně urychluje debugování.

### Konfigurace pro GitHub Codespaces: Cloudový vývoj snadno

GitHub Codespaces je jako mít výkonný vývojový počítač v cloudu, ke kterému máte přístup z jakéhokoliv prohlížeče. Pokud pracujete v Codespaces, je potřeba udělat pár dalších kroků, aby byl váš backend přístupný z frontendu.

#### Pochopení síťování v Codespaces

V lokálním vývojovém prostředí vše běží na stejném počítači:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (nebo file://)

V Codespaces běží vaše vývojové prostředí na serverech GitHubu, takže "localhost" znamená něco jiného. GitHub automaticky vytváří veřejné URL pro vaše služby, ale musíte je správně nakonfigurovat.

#### Konfigurace Codespaces krok za krokem

**1. Spusťte svůj backend server**:
```bash
cd backend
python api.py
```

Uvidíte známou zprávu o spuštění FastAPI/Uvicorn, ale běží to uvnitř Codespace prostředí.

**2. Nastavte viditelnost portu**:
- Najděte záložku "Ports" ve spodním panelu VS Code
- Najděte port 5000 v seznamu
- Klikněte pravým tlačítkem na port 5000
- Vyberte "Port Visibility" → "Public"

**Proč jej zpřístupnit veřejně?** Ve výchozím nastavení jsou porty v Codespaces soukromé (přístupné jen vám). Umožněním veřejného přístupu váš frontend (běžící v prohlížeči) může komunikovat s backendem.

**3. Získejte své veřejné URL**:
Po zpřístupnění portu uvidíte URL jako:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Aktualizujte konfiguraci frontendu**:
```javascript
// Ve vašem frontendovém souboru app.js aktualizujte BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Pochopení Codespace URL

URL v Codespaces mají předvídatelný vzor:
```
https://[codespace-name]-[port].app.github.dev
```

**Vysvětlení:**
- `codespace-name`: unikátní identifikátor vašeho Codespace (obvykle obsahuje vaše uživatelské jméno)
- `port`: číslo portu, na kterém vaše služba běží (5000 pro naši FastAPI aplikaci)
- `app.github.dev`: doména GitHubu pro Codespace aplikace

#### Testování nastavení Codespaces

**1. Otestujte backend přímo**:
Otevřete své veřejné URL v nové záložce prohlížeče. Měli byste vidět:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testujte s nástroji pro vývojáře v prohlížeči**:
```javascript
// Otevřete konzoli prohlížeče a otestujte své API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Lokální vývoj

| Aspekt | Lokální vývoj | GitHub Codespaces |
|--------|--------------|-------------------|
| **Čas na nastavení** | Delší (instalace Pythonu, závislostí) | Okamžitý (přednastavené prostředí) |
| **Přístupová URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Nastavení portu** | Automatické | Manuální (zpřístupnit porty) |
| **Perzistence souborů** | Lokální počítač | GitHub repository |
| **Spolupráce** | Obtížné sdílet prostředí | Snadné sdílení odkazu na Codespace |
| **Závislost na internetu** | Pouze pro AI API volání | Nutná pro vše |

#### Tipy pro vývoj v Codespaces

**Proměnné prostředí v Codespaces**:
Váš `.env` soubor funguje stejně v Codespaces, ale můžete proměnné prostředí nastavit také přímo v Codespace:

```bash
# Nastavit proměnnou prostředí pro aktuální relaci
export GITHUB_TOKEN="your_token_here"

# Nebo přidat do vašeho .bashrc pro trvalost
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Správa portů**:
- Codespaces automaticky rozpozná, když vaše aplikace začne naslouchat na portu
- Můžete současně přeposílat více portů (užitečné, pokud přidáte databázi)
- Porty zůstávají přístupné, dokud váš Codespace běží

**Vývojový pracovní postup**:
1. Provádějte změny kódu ve VS Code
2. FastAPI se automaticky přenačítá (díky Uvicorn reload módu)
3. Ihned testujte změny přes veřejné URL
4. Commitujte a pushujte, až jste připraveni

> 💡 **Užitečný tip**: Při vývoji si přidejte záložku na backend URL Codespace. Jelikož názvy Codespace jsou stabilní, URL se nebude měnit, pokud používáte stejný Codespace.

## Vytvoření chatovacího rozhraní frontendu: Kde se potkávají lidé a AI

Teď vybudujeme uživatelské rozhraní – tu část, která určuje, jak lidé komunikují s vaším AI asistentem. Stejně jako design původního rozhraní iPhonu, zaměřujeme se na to, aby složitá technologie působila intuitivně a přirozeně.

### Pochopení moderní frontend architektury

Naše chatovací rozhraní bude to, co nazýváme „Single Page Application“ nebo SPA. Místo staromódního přístupu, kdy každé kliknutí načítá novou stránku, naše aplikace se aktualizuje plynule a okamžitě:

**Staré weby**: Jako čtení fyzické knihy – listujete po úplně nových stránkách  
**Naše chatovací aplikace**: Jako používání telefonu – všechno plyne a aktualizuje se bez přerušení

```mermaid
graph TD
    A[Uživatel napíše zprávu] --> B[JavaScript zachytí vstup]
    B --> C[Ověření a formátování dat]
    C --> D[Odeslat na backendové API]
    D --> E[Zobrazit stav načítání]
    E --> F[Obdržet odpověď AI]
    F --> G[Aktualizovat rozhraní chatu]
    G --> H[Připraveno na další zprávu]
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
    
    ChatApp --> DOM : manipuluje
    ChatApp --> FastAPI : odesílá požadavky
```  
### Tři pilíře frontend vývoje

Každá frontend aplikace – od jednoduchých webů až po složité aplikace jako Discord nebo Slack – stojí na třech základních technologiích. Představte si je jako základ všeho, co vidíte a s čím interagujete na webu:

**HTML (Struktura)**: To je váš základ  
- Určuje, jaké prvky existují (tlačítka, textová pole, kontejnery)  
- Dává obsahu význam (tohle je nadpis, tohle je formulář atd.)  
- Vytváří základní strukturu, na které vše ostatní staví

**CSS (Prezentace)**: To je váš interiérový designér  
- Dělá všechno krásným (barvy, fonty, rozvržení)  
- Zpracovává různé velikosti obrazovek (mobil, notebook, tablet)  
- Vytváří plynulé animace a vizuální zpětnou vazbu

**JavaScript (Chování)**: To je váš mozek  
- Reaguje na uživatelské akce (kliknutí, psaní, rolování)  
- Komunikuje s backendem a aktualizuje stránku  
- Dělá vše interaktivním a dynamickým

**Představte si to jako architektonický návrh:**  
- **HTML**: Stavební plán (definice prostor a vztahů)  
- **CSS**: Estetický a environmentální design (vizuální styl a uživatelský zážitek)  
- **JavaScript**: Mechanické systémy (funkčnost a interaktivita)

### Proč záleží na moderní architektuře JavaScriptu

Naše chatovací aplikace bude používat moderní JavaScriptové vzory, které uvidíte i v profesionálních aplikacích. Pochopení těchto konceptů vám pomůže růst jako vývojáři:

**Architektura založená na třídách**: Organizujeme náš kód do tříd, což je jako vytváření plánů pro objekty  
**Async/Await**: Moderní způsob, jak řešit operace, které trvají déle (např. API volání)  
**Programování řízené událostmi**: Aplikace reaguje na uživatelské akce (kliknutí, stisky kláves), místo aby běžela v nekonečné smyčce  
**Manipulace s DOM**: Dynamicky aktualizuje obsah webové stránky na základě interakcí uživatele a odpovědí API

### Nastavení struktury projektu

Vytvořte složku frontend s touto uspořádanou strukturou:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Pochopení architektury:**  
- **Odděluje** starosti mezi strukturou (HTML), chováním (JavaScript) a prezentací (CSS)  
- **Udržuje** jednoduchou strukturu souborů, která se snadno naviguje a upravuje  
- **Následuje** nejlepší webové vývojové praktiky pro organizaci a udržovatelnost

### Budování HTML základu: Semantická struktura pro přístupnost

Začneme strukturou HTML. Moderní webový vývoj klade důraz na „semantické HTML“ – používaní HTML prvků, které jasně popisují svůj účel, ne jen vzhled. To dělá vaši aplikaci přístupnou pro čtečky obrazovky, vyhledávače a další nástroje.

**Proč je semantické HTML důležité**: Představte si, že popisujete svou chatovací aplikaci někomu po telefonu. Řeknete „je tam hlavička s titulkem, hlavní oblast, kde jsou konverzace, a formulář dole pro psaní zpráv.“ Semantické HTML používá prvky, které odpovídají tomuto přirozenému popisu.

Vytvořte `index.html` s touto promyšleně strukturovanou značkovací strukturou:

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
  
**Pochopení jednotlivých HTML prvků a jejich účelu:**

#### Struktura dokumentu  
- **`<!DOCTYPE html>`**: Říká prohlížeči, že se jedná o moderní HTML5  
- **`<html lang="en">`**: Určuje jazyk stránky pro čtečky a překladače  
- **`<meta charset="UTF-8">`**: Zajišťuje správné kódování znaků pro mezinárodní text  
- **`<meta name="viewport"...>`**: Umožňuje responzivní zobrazení na mobilech kontroloí zoom a velikost

#### Semantické prvky  
- **`<header>`**: Jasně identifikuje horní část s titulkem a popisem  
- **`<main>`**: Vyhrazuje hlavní oblast obsahu (kde probíhají konverzace)  
- **`<form>`**: Semanticky správný prvek pro uživatelský vstup, umožňuje správnou klávesovou navigaci

#### Přístupnost  
- **`role="log"`**: Říká čtečkám, že tato oblast obsahuje chronologický záznam zpráv  
- **`aria-live="polite"`**: Oznamuje nové zprávy čtečkám, aniž by přerušoval  
- **`aria-label`**: Poskytuje popisné štítky formulářovým ovládacím prvkům  
- **`required`**: Prohlížeč ověřuje, že uživatel zadá zprávu před odesláním

#### Integrace CSS a JavaScriptu  
- **`class` atributy**: Poskytují kotevní body pro CSS styly (např. `chat-container`, `input-group`)  
- **`id` atributy**: Umožňují JavaScriptu najít a manipulovat s konkrétními prvky  
- **Umístění skriptu**: JavaScript je načten na konci, aby se nejdřív načetlo HTML

**Proč tato struktura funguje:**  
- **Logický tok**: Hlavička → Hlavní obsah → Vstupní formulář odpovídá přirozenému pořadí čtení  
- **Klávesnicově přístupné**: Uživatelé mohou procházet všechna interaktivní místa tabulátorem  
- **Přátelské ke čtečkám obrazovky**: Jasné orientační body a popisy pro zrakově postižené  
- **Responzivní design**: Meta viewport umožňuje adaptaci na různá zařízení  
- **Progresivní zlepšování**: Funguje i kdyby CSS nebo JavaScript nefungoval či se nenačetl

### Přidání interaktivního JavaScriptu: Logika moderní webové aplikace
Nyní vytvoříme JavaScript, který oživí naše chatovací rozhraní. Použijeme moderní JavaScriptové vzory, se kterými se setkáte v profesionálním webovém vývoji, včetně ES6 tříd, async/await a událostmi řízeného programování.

#### Pochopení moderní JavaScriptové architektury

Místo psaní procedurálního kódu (série funkcí, které se spouštějí za sebou) vytvoříme **architekturu založenou na třídách**. Můžete si třídu představit jako plán pro vytváření objektů – podobně jako architektonický plán může sloužit k postavení více domů.

**Proč používat třídy pro webové aplikace?**
- **Organizace**: Veškerá související funkcionalita je seskupena pohromadě
- **Opakovatelnost**: Můžete vytvořit více instancí chatu na stejné stránce
- **Udržovatelnost**: Snazší ladění a úprava konkrétních funkcí
- **Profesionální standard**: Tento vzor je používán ve frameworkech jako React, Vue a Angular

Vytvořte `app.js` s tímto moderním, dobře strukturovaným JavaScriptem:

```javascript
// app.js - Logika moderní chatovací aplikace

class ChatApp {
    constructor() {
        // Získejte odkazy na DOM prvky, se kterými budeme manipulovat
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Nakonfigurujte zde URL svého backendu
        this.BASE_URL = "http://localhost:5000"; // Aktualizujte toto pro vaše prostředí
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Nastavte posluchače událostí při vytvoření chatovací aplikace
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Naslouchejte odeslání formuláře (když uživatel klikne na Odeslat nebo stiskne Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Také naslouchejte klávese Enter v poli pro zadávání (lepší uživatelská zkušenost)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Zabraňte formuláři v obnovení stránky
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Neodesílejte prázdné zprávy
        
        // Poskytněte uživateli zpětnou vazbu, že se něco děje
        this.setLoading(true);
        
        // Přidejte uživatelskou zprávu do chatu okamžitě (optimistické UI)
        this.appendMessage(messageText, "user");
        
        // Vymažte vstupní pole, aby uživatel mohl napsat další zprávu
        this.input.value = '';
        
        try {
            // Zavolejte AI API a čekejte na odpověď
            const reply = await this.callAPI(messageText);
            
            // Přidejte odpověď AI do chatu
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Znovu aktivujte rozhraní bez ohledu na úspěch nebo selhání
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

// Inicializujte chatovací aplikaci při načtení stránky
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Pochopení každého JavaScriptového konceptu

**Struktura třídy ES6**:
```javascript
class ChatApp {
    constructor() {
        // Toto se spustí při vytvoření nové instance ChatApp
        // Je to jako funkce "setup" pro váš chat
    }
    
    methodName() {
        // Metody jsou funkce, které patří do třídy
        // Mohou přistupovat k vlastnostem třídy pomocí "this"
    }
}
```

**Vzorec Async/Await**:
```javascript
// Starý způsob (callback peklo):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Moderní způsob (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Událostmi řízené programování**:
Místo neustálého kontrolování, zda něco nastalo, „nasloucháme“ událostem:
```javascript
// Když je formulář odeslán, spusťte handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Když je stisknuta klávesa Enter, také spusťte handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulace s DOM**:
```javascript
// Vytvořit nové prvky
const messageElement = document.createElement("div");

// Upravit jejich vlastnosti
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Přidat na stránku
this.messages.appendChild(messageElement);
```

#### Bezpečnost a osvědčené postupy

**Prevence XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Toto automaticky escapuje HTML
    return div.innerHTML;
}
```

**Proč je to důležité**: Pokud uživatel napíše `<script>alert('hack')</script>`, tato funkce zajistí, že se zobrazí jako text místo spuštění kódu.

**Zpracování chyb**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Zobrazit uživatelsky přívětivou chybu místo pádu aplikace
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Zohlednění uživatelské zkušenosti**:
- **Optimistické UI**: Okamžitě přidejte uživatelskou zprávu, nečekejte na odpověď serveru
- **Stavy načítání**: Zakázat tlačítka a zobrazit „Odesílám...“ během čekání
- **Automatický scroll**: Udržujte aktuální zprávy viditelné
- **Validace vstupu**: Neodesílejte prázdné zprávy
- **Klávesové zkratky**: Klávesa Enter odesílá zprávy (jako v opravdových chat aplikacích)

#### Pochopení toku aplikace

1. **Načtení stránky** → spustí se událost `DOMContentLoaded` → vytvoří se `new ChatApp()`
2. **Spuštění konstruktoru** → získání odkazů na prvky DOM → nastavení posluchačů událostí
3. **Uživatel napíše zprávu** → stiskne Enter nebo klikne na Odeslat → spustí `handleSubmit`
4. **handleSubmit** → validuje vstup → zobrazí stav načítání → zavolá API
5. **API odpovídá** → přidá AI zprávu do chatu → znovu povolí rozhraní
6. **Připraveno na další zprávu** → uživatel může pokračovat v konverzaci

Tato architektura je škálovatelná – můžete snadno přidat funkce jako úpravu zpráv, nahrávání souborů nebo více konverzačních vláken bez přepisování jádra.

### 🎯 Pedagogická kontrola: Moderní frontendová architektura

**Pochopení architektury**: Implementovali jste kompletní single-page aplikaci pomocí moderních JavaScriptových vzorů. To představuje profesionální úroveň frontendového vývoje.

**Osvojené klíčové koncepty**:
- **Architektura ES6 tříd**: Organizovaná, udržovatelná struktura kódu
- **Async/Await vzory**: Moderní asynchronní programování
- **Událostmi řízené programování**: Reaktivní design uživatelského rozhraní
- **Bezpečnostní osvědčené postupy**: Prevence XSS a validace vstupu

**Spojení s průmyslem**: Vzory, které jste se naučili (architektura založená na třídách, asynchronní operace, manipulace s DOM) jsou základem moderních frameworků jako React, Vue a Angular. Stavíte s architektonickým myšlením používaným v produkčních aplikacích.

**Reflexní otázka**: Jak byste rozšířili tuto chatovací aplikaci, aby zvládala více konverzací nebo uživatelskou autentifikaci? Zvažte potřebné architektonické změny a vývoj struktury třídy.

### Stylování vašeho chatovacího rozhraní

Nyní vytvoříme moderní, vizuálně atraktivní chatovací rozhraní pomocí CSS. Dobré stylování dodá vaší aplikaci profesionální pocit a zlepší uživatelský zážitek. Použijeme moderní CSS vlastnosti jako Flexbox, CSS Grid a vlastní proměnné pro responzivní a přístupný design.

Vytvořte `styles.css` s těmito komplexními styly:

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

**Pochopení CSS architektury:**
- **Používá** CSS vlastní proměnné (variables) pro konzistentní téma a snadnou údržbu
- **Implementuje** Flexbox layout pro responzivní design a správné zarovnání
- **Obsahuje** plynulé animace pro zobrazování zpráv bez rozptylování
- **Zajišťuje** vizuální odlišení uživatelských zpráv, AI odpovědí a stavů chyb
- **Podporuje** responzivní design fungující na desktopu i mobilních zařízeních
- **Zohledňuje** přístupnost s preferencemi pro snížený pohyb a správné kontrastní poměry
- **Nabízí** podporu tmavého režimu podle systémových preferencí uživatele

### Nastavení URL backendu

Posledním krokem je aktualizace `BASE_URL` ve vašem JavaScriptu, aby odpovídala vašemu backendovému serveru:

```javascript
// Pro lokální vývoj
this.BASE_URL = "http://localhost:5000";

// Pro GitHub Codespaces (vyměňte za svou skutečnou URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Určení adresy backendu:**
- **Lokální vývoj**: Použijte `http://localhost:5000`, pokud máte frontend i backend lokálně
- **Codespaces**: Najděte URL backendu v záložce Ports po zpřístupnění portu 5000
- **Produkce**: Nahraďte skutečnou doménou při nasazení na hostingovou službu

> 💡 **Tip pro testování**: Backend můžete otestovat přímo návštěvou základní URL ve vašem prohlížeči. Měli byste vidět uvítací zprávu z FastAPI serveru.



## Testování a nasazení

Nyní, když máte postavené jak frontendové, tak backendové komponenty, vyzkoušíme, že vše spolu funguje, a prozkoumáme možnosti nasazení, jak svého chat asistenta sdílet s ostatními.

### Průběh lokálního testování

Postupujte podle těchto kroků k otestování vaší kompletní aplikace:

```mermaid
graph TD
    A[Spustit backendový server] --> B[Nastavit proměnné prostředí]
    B --> C[Testovat API koncové body]
    C --> D[Otevřít frontend v prohlížeči]
    D --> E[Testovat funkci chatu]
    E --> F[Ladit případné problémy]
```
**Postup testování krok za krokem:**

1. **Spusťte backendový server**:
   ```bash
   cd backend
   source venv/bin/activate  # nebo venv\Scripts\activate ve Windows
   python api.py
   ```

2. **Ověřte, že API funguje**:
   - Otevřete `http://localhost:5000` ve svém prohlížeči
   - Měli byste vidět uvítací zprávu z FastAPI serveru

3. **Otevřete frontend**:
   - Přejděte do adresáře frontendu
   - Otevřete `index.html` ve webovém prohlížeči
   - Nebo použijte VS Code rozšíření Live Server pro lepší vývojový zážitek

4. **Otestujte chatovací funkčnost**:
   - Napište zprávu do vstupního pole
   - Klikněte na „Odeslat“ nebo stiskněte Enter
   - Ověřte, že AI odpovídá správně
   - Zkontrolujte v konzoli prohlížeče případné JavaScriptové chyby

### Řešení běžných problémů

| Problém | Příznaky | Řešení |
|---------|----------|--------|
| **Chyba CORS** | Frontend se nedostane k backendu | Ujistěte se, že FastAPI CORSMiddleware je správně nakonfigurováno |
| **Chyba API klíče** | Odpovědi 401 Unauthorized | Zkontrolujte svou proměnnou prostředí `GITHUB_TOKEN` |
| **Připojení odmítnuto** | Síťové chyby ve frontendu | Ověřte URL backendu a běžící Flask server |
| **Žádná AI odpověď** | Prázdné nebo chybové odpovědi | Prohlédněte backendové logy kvůli limitům API nebo problémům s autentizací |

**Běžné kroky ladění:**
- **Kontrola** konzole vývojářských nástrojů v prohlížeči na chyby v JavaScriptu
- **Ověření** v Network záložce úspěšných požadavků a odpovědí API
- **Revize** výstupu terminálu backendu na chyby Pythonu nebo API
- **Potvrzení** správného načtení a dostupnosti environmentálních proměnných

## 📈 Časová osa vašeho zvládnutí vývoje AI aplikací

```mermaid
timeline
    title Kompletní cesta vývoje AI aplikací
    
    section Základy AI
        Pochopení generativní AI
            : Pochopit koncepty rozpoznávání vzorů
            : Ovládnout řízení parametrů AI
            : Naučit se techniky prompt inženýrství
        
        Integrace GitHub modelů
            : Orientovat se na platformách AI služeb
            : Zabezpečeně zvládat autentizaci
            : Optimalizovat parametry modelu
    
    section Vývoj backendu
        Architektura Python API
            : Vytvářet aplikace FastAPI
            : Implementovat asynchronní operace
            : Vytvářet zabezpečené koncové body
        
        Integrace AI služeb
            : Připojit se k externím AI API
            : Zvládat limitování požadavků
            : Implementovat hranice chyb
    
    section Mistrovství frontendu
        Moderní JavaScript vzory
            : Ovládnout architekturu ES6 tříd
            : Implementovat asynchronní/čekací toky
            : Vytvářet responzivní rozhraní
        
        Uživatelský zážitek v reálném čase
            : Vytvářet dynamická chatovací rozhraní
            : Zvládat stavy načítání
            : Optimalizovat uživatelské interakce
    
    section Připravenost na produkci
        Bezpečnost & výkon
            : Implementovat bezpečnou správu tokenů
            : Předcházet XSS zranitelnostem
            : Optimalizovat výkon API
        
        Profesionální nasazení
            : Vytvářet škálovatelné architektury
            : Vytvářet udržitelný kód
            : Dokumentovat vývojové procesy
```
**🎓 Milník absolvování**: Úspěšně jste vytvořili kompletní aplikaci poháněnou AI za použití stejných technologií a architektonických vzorů, které pohánějí moderní AI asistenty. Tyto dovednosti reprezentují spojení tradičního webového vývoje s moderní AI integrací.

**🔄 Další úroveň schopností**:
- Připravenost prozkoumat pokročilé AI frameworky (LangChain, LangGraph)
- Schopnost vytvářet multimodální AI aplikace (text, obrázek, hlas)
- Výbava k implementaci vektorových databází a systémů vyhledávání
- Základ pro strojové učení a doladění AI modelů

## Výzva GitHub Copilot Agenta 🚀

Použijte režim Agenta k dokončení následující výzvy:

**Popis:** Vylepšete chat asistenta přidáním historie konverzací a uchovávání zpráv. Tato výzva vám pomůže pochopit, jak spravovat stav v chat aplikacích a implementovat ukládání dat pro lepší uživatelský zážitek.

**Zadání:** Upravte chat aplikaci tak, aby zahrnovala historii konverzací přetrvávající mezi relacemi. Přidejte funkci ukládání chat zpráv do lokálního úložiště, zobrazování historie konverzace při načtení stránky a tlačítko „Vymazat historii“. Implementujte také indikátory psaní a časová razítka zpráv pro realističtější zážitek z chatu.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## Úkol: Vytvořte svého osobního AI asistenta

Nyní vytvoříte svou vlastní implementaci AI asistenta. Nepůjde jen o kopírování kódu z tutoriálu, ale o příležitost aplikovat koncepty a vytvořit něco, co odráží vaše vlastní zájmy a použití.

### Požadavky projektu

Nastavme projekt s čistou, organizovanou strukturou:

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

### Hlavní implementační úkoly

**Backendový vývoj:**
- **Vezměte** náš FastAPI kód a přetvořte jej podle sebe
- **Vytvořte** jedinečnou AI osobnost – třeba užitečný kuchařský asistent, kreativního partnera pro psaní nebo studijního kamaráda?
- **Přidejte** robustní zpracování chyb, aby se aplikace nerozpadla při problémech
- **Napište** jasnou dokumentaci pro každého, kdo chce pochopit, jak funguje vaše API

**Frontendový vývoj:**
- **Postavte** chatovací rozhraní, které je intuitivní a přívětivé
- **Napište** čistý, moderní JavaScript, za který byste se nemuseli stydět před ostatními vývojáři
- **Navrhněte** vlastní stylování, které odráží osobnost vašeho AI – zábavné a barevné? Čisté a minimalistické? Je to jen na vás!
- **Ujistěte se**, že to funguje skvěle na telefonech i počítačích

**Požadavky na personalizaci:**
- **Zvolte** jedinečné jméno a osobnost vašeho AI asistenta – třeba něco, co reflektuje vaše zájmy nebo problémy, které chcete řešit
- **Přizpůsobte** vizuální design tak, aby ladil s osobností asistenta
- **Napište** poutavou uvítací zprávu, která lidi motivuje začít si povídat
- **Otestujte** asistenta s různými druhy otázek a sledujte, jak reaguje

### Nápady na vylepšení (volitelné)

Chcete projekt posunout dál? Zde je pár zábavných nápadů k prozkoumání:

| Funkce | Popis | Dovednosti, které procvičíte |
|--------|-------|------------------------------|
| **Historie zpráv** | Zapamatuje si konverzace i po obnovení stránky | Práce s localStorage, JSON |
| **Indikátory psaní** | Ukazuje „AI právě píše...“ během čekání na odpověď | CSS animace, asynchronní programování |
| **Časová razítka zpráv** | Zobrazuje čas odeslání každé zprávy | Formátování data/času, UX design |
| **Export chatu** | Umožní uživatelům stáhnout konverzaci | Práce se soubory, export dat |
| **Přepínání témat** | Přepínání světlého/tmavého režimu | CSS proměnné, uživatelské preference |
| **Hlasový vstup** | Přidání převodu řeči na text | Web API, přístupnost |

### Testování a dokumentace

**Zajištění kvality:**
- **Testujte** aplikaci s různými typy vstupů a okrajovými případy
- **Ověřte**, že responzivní design funguje na různých velikostech obrazovky
- **Zkontrolujte** přístupnost pomocí klávesové navigace a čteček obrazovky
- **Validujte** HTML a CSS pro splnění standardů

**Požadavky na dokumentaci:**
- **Napište** README.md vysvětlující váš projekt a jak jej spustit
- **Přiložte** screenshoty chatovacího rozhraní v akci
- **Zdokumentujte** případné speciální funkce nebo úpravy, které jste přidali
- **Poskytněte** jasné instrukce pro nastavení ostatním vývojářům

### Pokyny k odevzdání

**Dodávky projektu:**
1. Kompletní složka s projektem a veškerým zdrojovým kódem
2. README.md s popisem projektu a návodem na spuštění
3. Screenshoty zobrazující vašeho chat asistenta v akci
4. Krátké zamyšlení o tom, co jste se naučili a jaké výzvy jste potkali

**Kritéria hodnocení:**
- **Funkčnost**: Funguje chatovací asistent očekávaně?
- **Kvalita kódu**: Je kód dobře organizovaný, komentovaný a udržovatelný?
- **Design**: Je rozhraní vizuálně přitažlivé a uživatelsky přívětivé?
- **Kreativita**: Jak jedinečná a personalizovaná je vaše implementace?
- **Dokumentace**: Jsou instrukce k nastavení jasné a kompletní?

> 💡 **Tip pro úspěch**: Začněte s hlavními požadavky, pak přidávejte vylepšení, až bude vše fungovat. Zaměřte se na důkladně vyladěnou základní zkušenost před přidáváním pokročilých funkcí.

## Řešení

[Řešení](./solution/README.md)

## Bonusové výzvy

Chcete svého AI asistenta posunout na další úroveň? Vyzkoušejte tyto pokročilé výzvy, které prohloubí vaše porozumění AI integraci a webovému vývoji.

### Přizpůsobení osobnosti

Skutečná magie nastává, když dáte svému AI asistentovi jedinečnou osobnost. Experimentujte s různými systémovými podněty, abyste vytvořili specializované asistenty:

**Příklad profesionálního asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Příklad kreativního pomocníka pro psaní:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Příklad technického mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontendová vylepšení

Proměňte své chatovné rozhraní těmito vizuálními a funkčními vylepšeními:

**Pokročilé CSS funkce:**
- **Implementujte** plynulé animace a přechody zpráv
- **Přidejte** vlastní designy chatovacích bublin pomocí CSS tvarů a přechodů
- **Vytvořte** animaci indikátoru psaní pro chvíle, kdy AI „přemýšlí“
- **Navrhněte** emoji reakce nebo systém hodnocení zpráv

**JavaScriptová vylepšení:**
- **Přidejte** klávesové zkratky (Ctrl+Enter pro odeslání, Escape pro vymazání)
- **Implementujte** vyhledávání a filtrování zpráv
- **Vytvořte** funkci exportu konverzace (stažení jako text nebo JSON)
- **Přidejte** automatické ukládání do localStorage, aby nedošlo ke ztrátě zpráv

### Pokročilá AI integrace

**Více AI osobností:**
- **Vytvořte** rozbalovací menu pro přepínání mezi různými AI osobnostmi
- **Uložte** preferovanou osobnost uživatele do localStorage
- **Implementujte** přepínání kontextu, které udržuje tok konverzace

**Chytré funkce odpovědí:**
- **Přidejte** kontextovou znalost konverzace (AI si pamatuje předchozí zprávy)
- **Implementujte** chytrá doporučení na základě tématu konverzace
- **Vytvořte** tlačítka rychlých odpovědí pro běžné otázky

> 🎯 **Cíl učení**: Tyto bonusové výzvy vám pomohou pochopit pokročilé vzory webového vývoje a techniky integrace AI, které se používají v produkčních aplikacích.

## Shrnutí a další kroky

Gratulujeme! Úspěšně jste vybudovali kompletní chatovacího asistenta poháněného AI od základu. Tento projekt vám poskytl praktické zkušenosti s moderními technologiemi webového vývoje a integrací AI – dovednosti, které jsou v dnešním technologickém světě stále cennější.

### Čeho jste dosáhli

Během této lekce jste se naučili několik klíčových technologií a konceptů:

**Vývoj backendu:**
- **Integrovali** jste GitHub Models API pro funkce AI
- **Postavili** jste RESTful API pomocí Flask s řádným zpracováním chyb
- **Implementovali** bezpečné ověřování pomocí proměnných prostředí
- **Nakonfigurovali** jste CORS pro cross-origin požadavky mezi frontendem a backendem

**Vývoj frontendu:**
- **Vytvořili** jste responzivní chatovací rozhraní pomocí sémantického HTML
- **Implementovali** moderní JavaScript s async/await a architekturou založenou na třídách
- **Navrhli** atraktivní uživatelské rozhraní s CSS Grid, Flexboxem a animacemi
- **Přidali** jste funkce přístupnosti a principy responzivního designu

**Full-stack integrace:**
- **Propojili** frontend a backend přes HTTP API volání
- **Zvládli** jste interakce uživatelů v reálném čase a asynchronní tok dat
- **Implementovali** jste zpracování chyb a zpětnou vazbu uživatelům v celé aplikaci
- **Testovali** jste kompletní pracovní tok aplikace od vstupu uživatele po odpověď AI

### Klíčové výstupy učení

```mermaid
mindmap
  root((Dovednosti aplikace AI Chat))
    API Integration
      Authentication
      Error Handling
      Async Programming
    Web Development
      HTML5 Semantics
      Modern CSS
      ES6+ JavaScript
    User Experience
      Responzivní design
      Přístupnost
      Interakce v reálném čase
    AI Understanding
      Prompt Engineering
      Parametry modelu
      Průběh konverzace
```
Tento projekt vás seznámil se základy vytváření aplikací poháněných AI, které představují budoucnost webového vývoje. Nyní rozumíte tomu, jak začlenit schopnosti AI do tradičních webových aplikací a vytvářet poutavé uživatelské zážitky, které působí inteligentně a citlivě.

### Profesionální uplatnění

Dovednosti, které jste získali v této lekci, jsou přímo použitelné v moderních softwarových kariérách:

- **Full-stack webový vývoj** za použití moderních frameworků a API
- **Integrace AI** do webových aplikací a mobilních aplikací
- **Návrh a vývoj API** pro architektury mikroservis
- **Vývoj uživatelského rozhraní** se zaměřením na přístupnost a responzivní design
- **Praktiky DevOps** včetně konfigurace prostředí a nasazení

### Pokračování ve vaší AI vývojové cestě

**Další kroky ve vzdělávání:**
- **Prozkoumejte** pokročilejší modely AI a API (GPT-4, Claude, Gemini)
- **Naučte se** techniky prompt engineeringu pro lepší AI odpovědi
- **Studujte** návrh konverzací a principy uživatelské zkušenosti chatbotů
- **Zkoumejte** bezpečnost AI, etiku a odpovědné praktiky vývoje AI
- **Vytvářejte** složitější aplikace s pamětí konverzace a povědomím o kontextu

**Pokročilé nápady na projekty:**
- Víceuživatelské chatovací místnosti s AI moderací
- Chatboti zákaznického servisu s AI
- Vzdělávací asistenti s přizpůsobeným učením
- Spolupracovníci na kreativní psaní s různými AI osobnostmi
- Asistenti pro technickou dokumentaci pro vývojáře

## Začínáme s GitHub Codespaces

Chcete si tento projekt vyzkoušet v cloudovém vývojovém prostředí? GitHub Codespaces poskytuje kompletní vývojové prostředí ve vašem prohlížeči, ideální pro experimentování s AI aplikacemi bez potřeby lokálního nastavení.

### Nastavení vývojového prostředí

**Krok 1: Vytvořte z šablony**
- **Přejděte** do [repositáře Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klikněte** na „Use this template“ v pravém horním rohu (ujistěte se, že máte přihlášený účet GitHub)

![Rozhraní pro vytvoření ze šablony, ukazující zelené tlačítko "Use this template"](../../../translated_images/cs/template.67ad477109d29a2b.png)

**Krok 2: Spusťte Codespaces**
- **Otevřete** právě vytvořený repozitář
- **Klikněte** na zelené tlačítko "Code" a vyberte "Codespaces"
- **Zvolte** "Create codespace on main" pro spuštění vašeho vývojového prostředí

![Rozhraní pro vytvoření codespace s možnostmi spuštění cloudového vývojového prostředí](../../../translated_images/cs/codespace.bcecbdf5d2747d3d.png)

**Krok 3: Konfigurace prostředí**
Po načtení Codespace budete mít k dispozici:
- **Předinstalované** Python, Node.js a všechny potřebné vývojové nástroje
- **Rozhraní VS Code** s rozšířeními pro webový vývoj
- **Terminálový přístup** pro spuštění backend a frontend serverů
- **Přesměrování portů** pro testování vašich aplikací

**Co Codespaces nabízí:**
- **Odstraňuje** problémy s nastavením a konfigurací lokálního prostředí
- **Poskytuje** konzistentní vývojové prostředí na různých zařízeních
- **Obsahuje** předkonfigurované nástroje a rozšíření pro webový vývoj
- **Nabízí** bezproblémovou integraci s GitHubem pro správu verzí a spolupráci

> 🚀 **Profesionální tip**: Codespaces je ideální pro učení a prototypování AI aplikací, protože automaticky zvládá veškerou složitou konfiguraci prostředí, což vám umožní soustředit se na tvorbu a učení místo řešení konfigurace.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). Přestože usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za závazný zdroj. Pro kritické informace se doporučuje profesionální překlad lidským překladatelem. Nejsme odpovědní za jakékoli nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->