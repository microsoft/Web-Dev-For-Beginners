<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T20:55:46+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "cs"
}
-->
# Vytvořte chatovacího asistenta s AI

Pamatujete si na Star Trek, kdy posádka neformálně komunikovala s počítačem lodi, kladla mu složité otázky a dostávala promyšlené odpovědi? Co v 60. letech vypadalo jako čistá sci-fi, je nyní něco, co můžete vytvořit pomocí webových technologií, které už znáte.

V této lekci vytvoříme chatovacího asistenta s umělou inteligencí pomocí HTML, CSS, JavaScriptu a integrace backendu. Zjistíte, jak mohou dovednosti, které jste se učili, propojit s výkonnými AI službami, které rozumí kontextu a generují smysluplné odpovědi.

Představte si AI jako přístup k obrovské knihovně, která nejenže dokáže najít informace, ale také je syntetizovat do koherentních odpovědí přizpůsobených vašim konkrétním otázkám. Místo prohledávání tisíců stránek získáte přímé, kontextové odpovědi.

Integrace probíhá prostřednictvím známých webových technologií, které spolupracují. HTML vytváří rozhraní chatu, CSS se stará o vizuální design, JavaScript spravuje interakce uživatele a backendové API vše propojuje s AI službami. Je to podobné jako spolupráce různých sekcí orchestru při tvorbě symfonie.

V podstatě budujeme most mezi přirozenou lidskou komunikací a strojovým zpracováním. Naučíte se jak technickou implementaci integrace AI služeb, tak i návrhové vzory, které činí interakce intuitivními.

Na konci této lekce vám integrace AI nebude připadat jako tajemný proces, ale spíše jako další API, se kterým můžete pracovat. Pochopíte základní vzory, které pohánějí aplikace jako ChatGPT a Claude, a to pomocí stejných principů webového vývoje, které jste se učili.

Takto bude váš hotový projekt vypadat:

![Rozhraní chatovací aplikace zobrazující konverzaci mezi uživatelem a AI asistentem](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.cs.png)

## Porozumění AI: Od tajemství k mistrovství

Než se pustíme do kódu, pojďme si ujasnit, s čím pracujeme. Pokud jste už někdy používali API, znáte základní vzor: odeslat požadavek, přijmout odpověď.

API pro AI fungují podobně, ale místo získávání předem uložených dat z databáze generují nové odpovědi na základě vzorů naučených z obrovského množství textu. Je to jako rozdíl mezi katalogovým systémem knihovny a znalým knihovníkem, který dokáže syntetizovat informace z více zdrojů.

### Co vlastně znamená "Generativní AI"?

Představte si, jak Rosettská deska umožnila vědcům porozumět egyptským hieroglyfům tím, že našli vzory mezi známými a neznámými jazyky. AI modely fungují podobně – hledají vzory v obrovském množství textu, aby pochopily, jak jazyk funguje, a poté tyto vzory využívají k generování vhodných odpovědí na nové otázky.

**Jednoduché srovnání:**
- **Tradiční databáze**: Jako když žádáte o svůj rodný list – pokaždé dostanete stejný dokument
- **Vyhledávač**: Jako když žádáte knihovníka, aby našel knihy o kočkách – ukáže vám, co je k dispozici
- **Generativní AI**: Jako když se ptáte znalého přítele na kočky – řekne vám zajímavé věci svými vlastními slovy, přizpůsobené tomu, co chcete vědět

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Jak se AI modely učí (jednodušená verze)

AI modely se učí prostřednictvím expozice obrovským datovým sadám obsahujícím texty z knih, článků a konverzací. Během tohoto procesu identifikují vzory v:
- Struktuře myšlenek v psané komunikaci
- Slovních spojeních, která se často objevují společně
- Typickém průběhu konverzací
- Kontextových rozdílech mezi formální a neformální komunikací

**Je to podobné jako když archeologové rozlušťují starověké jazyky**: analyzují tisíce příkladů, aby pochopili gramatiku, slovní zásobu a kulturní kontext, a nakonec dokážou interpretovat nové texty pomocí naučených vzorů.

### Proč GitHub Models?

Používáme GitHub Models z praktického důvodu – poskytuje nám přístup k AI na podnikové úrovni, aniž bychom museli nastavovat vlastní AI infrastrukturu (což, věřte mi, teď nechcete dělat!). Je to jako používat API pro počasí místo pokusu o předpověď počasí sami tím, že všude rozmístíte meteorologické stanice.

Je to v podstatě "AI jako služba" a nejlepší na tom je? Začít je zdarma, takže můžete experimentovat, aniž byste se museli obávat vysokých nákladů.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Použijeme GitHub Models pro naši backendovou integraci, která poskytuje přístup k profesionálním AI schopnostem prostřednictvím rozhraní přívětivého pro vývojáře. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) slouží jako testovací prostředí, kde můžete experimentovat s různými AI modely a pochopit jejich schopnosti před jejich implementací do kódu.

![Rozhraní GitHub Models AI Playground s výběrem modelů a testovací oblastí](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.cs.png)

**Co dělá playground tak užitečným:**
- **Vyzkoušejte** různé AI modely jako GPT-4o-mini, Claude a další (vše zdarma!)
- **Otestujte** své nápady a výzvy před psaním kódu
- **Získejte** připravené úryvky kódu ve vašem oblíbeném programovacím jazyce
- **Upravte** nastavení jako úroveň kreativity a délku odpovědi, abyste viděli, jak ovlivňují výstup

Jakmile si trochu pohrajete, stačí kliknout na záložku "Code" a vybrat svůj programovací jazyk, abyste získali implementační kód, který potřebujete.

![Výběr v playgroundu ukazující generování kódu pro různé programovací jazyky](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.cs.png)

## Nastavení backendové integrace v Pythonu

Nyní implementujeme integraci AI pomocí Pythonu. Python je skvělý pro AI aplikace díky své jednoduché syntaxi a výkonným knihovnám. Začneme s kódem z GitHub Models playground a poté ho upravíme do znovupoužitelné funkce připravené pro produkci.

### Porozumění základní implementaci

Když si stáhnete Python kód z playgroundu, dostanete něco, co vypadá takto. Nebojte se, pokud to na první pohled vypadá složitě – projdeme si to krok za krokem:

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

**Co se v tomto kódu děje:**
- **Importujeme** nástroje, které potřebujeme: `os` pro čtení environmentálních proměnných a `OpenAI` pro komunikaci s AI
- **Nastavujeme** klienta OpenAI, aby ukazoval na servery GitHubu místo přímo na OpenAI
- **Autentizujeme** pomocí speciálního GitHub tokenu (více o tom za chvíli!)
- **Strukturalizujeme** naši konverzaci s různými "rolemi" – je to jako nastavení scény pro divadelní hru
- **Odesíláme** náš požadavek na AI s některými parametry pro jemné doladění
- **Extrahujeme** skutečný text odpovědi ze všech dat, která se vrátí

### Porozumění rolím zpráv: Rámec AI konverzace

Konverzace s AI používají specifickou strukturu s různými "rolemi", které mají odlišné účely:

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

**Představte si to jako režii divadelní hry:**
- **Role systému**: Jako scénické pokyny pro herce – říká AI, jak se chovat, jakou osobnost mít a jak odpovídat
- **Role uživatele**: Skutečná otázka nebo zpráva od osoby používající vaši aplikaci
- **Role asistenta**: Odpověď AI (tuto roli neposíláte, ale objevuje se v historii konverzace)

**Analogická situace v reálném světě**: Představte si, že představujete svého přítele někomu na večírku:
- **Zpráva systému**: "Tohle je moje kamarádka Sarah, je to doktorka, která skvěle vysvětluje lékařské koncepty jednoduchými slovy"
- **Zpráva uživatele**: "Můžete mi vysvětlit, jak fungují vakcíny?"
- **Odpověď asistenta**: Sarah odpovídá jako přátelská doktorka, ne jako právník nebo kuchař

### Porozumění parametrům AI: Jemné ladění chování odpovědí

Číselné parametry v API voláních AI kontrolují, jak model generuje odpovědi. Tato nastavení vám umožňují upravit chování AI pro různé případy použití:

#### Teplota (0.0 až 2.0): Ovladač kreativity

**Co dělá**: Řídí, jak kreativní nebo předvídatelné budou odpovědi AI.

**Představte si to jako úroveň improvizace jazzového hudebníka:**
- **Teplota = 0.1**: Hraje pokaždé stejnou melodii (velmi předvídatelné)
- **Teplota = 0.7**: Přidává nějaké vkusné variace, ale zůstává rozpoznatelný (vyvážená kreativita)
- **Teplota = 1.5**: Plná experimentální improvizace s nečekanými zvraty (velmi nepředvídatelné)

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

#### Max Tokens (1 až 4096+): Ovladač délky odpovědi

**Co dělá**: Nastavuje limit na délku odpovědi AI.

**Představte si tokeny jako přibližně ekvivalentní slovům** (asi 1 token = 0.75 slova v angličtině):
- **max_tokens=50**: Krátké a výstižné (jako textová zpráva)
- **max_tokens=500**: Pěkný odstavec nebo dva
- **max_tokens=2000**: Podrobný výklad s příklady

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

#### Top_p (0.0 až 1.0): Parametr zaměření

**Co dělá**: Řídí, jak moc se AI soustředí na nejpravděpodobnější odpovědi.

**Představte si AI s obrovskou slovní zásobou, seřazenou podle pravděpodobnosti každého slova:**
- **top_p=0.1**: Zvažuje pouze 10 % nejpravděpodobnějších slov (velmi zaměřené)
- **top_p=0.9**: Zvažuje 90 % možných slov (více kreativní)
- **top_p=1.0**: Zvažuje všechno (maximální rozmanitost)

**Například**: Pokud se zeptáte "Obloha je obvykle..."
- **Nízké top_p**: Téměř jistě odpoví "modrá"
- **Vysoké top_p**: Může odpovědět "modrá", "zamračená", "rozlehlá", "měnící se", "krásná" atd.

### Spojení všeho dohromady: Kombinace parametrů pro různé případy použití

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

**Proč na těchto parametrech záleží**: Různé aplikace potřebují různé typy odpovědí. Bot zákaznické podpory by měl být konzistentní a faktický (nízká teplota), zatímco asistent pro kreativní psaní by měl být nápaditý a rozmanitý (vysoká teplota). Porozumění těmto parametrům vám dává kontrolu nad osobností a stylem odpovědí AI.
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

**Porozumění této vylepšené funkci:**
- **Přijímá** dva parametry: uživatelský dotaz a volitelnou systémovou zprávu
- **Poskytuje** výchozí systémovou zprávu pro obecné chování asistenta
- **Používá** správné typové nápovědy Pythonu pro lepší dokumentaci kódu
- **Vrací** pouze obsah odpovědi, což usnadňuje použití v našem webovém API
- **Zachovává** stejné parametry modelu pro konzistentní chování AI

### Kouzlo systémových výzev: Programování osobnosti AI

Pokud parametry kontrolují, jak AI přemýšlí, systémové výzvy kontrolují, kým AI si myslí, že je. To je upřímně jedna z nejúžasnějších částí práce s AI – v podstatě dáváte AI kompletní osobnost, úroveň odbornosti a styl komunikace.

**Představte si systémové výzvy jako obsazování různých herců do různých rolí**: Místo jednoho obecného asistenta můžete vytvořit specializované odborníky pro různé situace. Potřebujete trpělivého učitele? Kreativního partnera pro brainstorming? Neústupného obchodního poradce? Stačí změnit systémovou výzvu!

#### Proč jsou systémové výzvy tak silné

Tady je fascinující část: AI modely byly vyškoleny na nesčetných konverzacích, kde lidé přijímají různé role a úrovně odbornosti. Když dáte AI konkrétní roli, je to jako přepnutí přepínače, který aktivuje všechny tyto naučené vzory.

**Je to jako metoda herectví pro AI**: Řekněte herci "jste moudrý starý profesor" a sledujte, jak automaticky upraví své držení těla, slovní zásobu a způsoby. AI dělá něco pozoruhodně podobného s jazykovými vzory.

#### Tvorba efektivních systémových výzev: Umění a věda

**Anatomie skvělé systémové výzvy:**
1. **Role/Identita**: Kdo je AI?
2. **Odbornost**: Co ví?
3. **Styl komunikace**: Jak mluví?
4. **Specifické pokyny**: Na co by se měla zaměřit?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Příklady systémových výzev s kontextem

Podívejme se, jak různé systémové výzvy vytvářejí zcela odlišné osobnosti AI:

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

#### Vidět systémové výzvy v akci

Otestujme stejnou otázku s různými systémovými výzvami, abychom viděli dramatické rozdíly:

**Otázka**: "Jak mám řešit autentizaci uživatelů ve své webové aplikaci?"

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

#### Pokročilé techniky systémových výzev

**1. Nastavení kontextu**: Poskytněte AI základní informace
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formátování výstupu**: Řekněte AI, jak má strukturovat odpovědi
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

**3. Nastavení omezení**: Definujte, co AI nemá dělat
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Proč je to důležité pro vašeho chatovacího asistenta

Porozumění systémovým výzvám vám dává neuvěřitelnou moc vytvářet specializované AI asistenty:
- **Bot zákaznické podpory**: Nápomocný, trpělivý, obeznámený s politikami
- **Učitel**: Povzbuzující, krok za krokem, kontroluje porozumění
- **Kreativní partner**: Nápaditý, rozvíjí nápady, ptá se "co kdyby?"
- **Technický expert**: Přesný, detailní, dbá na bezpečnost

**Klíčový poznatek**: Nejenže voláte API AI – vytváříte vlastní AI osobnost, která slouží vašemu konkrétnímu účelu. To je to, co dělá moderní AI aplikace přizpůsobené a užitečné.

## Vytvoření webového API s FastAPI: Váš vysoce výkonný
**Proč je FastAPI ideální pro to, co stavíme:**
- **Asynchronní ve výchozím nastavení**: Může zpracovávat více požadavků na AI najednou, aniž by se zasekl
- **Automatická dokumentace**: Navštivte `/docs` a získáte krásnou, interaktivní stránku API dokumentace zdarma
- **Vestavěná validace**: Zachytí chyby dříve, než způsobí problémy
- **Bleskově rychlé**: Jedna z nejrychlejších Python frameworků
- **Moderní Python**: Využívá všechny nejnovější a nejlepší funkce Pythonu

**A proč vůbec potřebujeme backend:**

**Bezpečnost**: Váš API klíč pro AI je jako heslo – pokud ho vložíte do frontendového JavaScriptu, kdokoli, kdo si prohlédne zdrojový kód vašeho webu, ho může ukrást a použít vaše AI kredity. Backend uchovává citlivé údaje v bezpečí.

**Omezení rychlosti a kontrola**: Backend vám umožňuje kontrolovat, jak často mohou uživatelé posílat požadavky, implementovat autentizaci uživatelů a přidat logování pro sledování využití.

**Zpracování dat**: Možná budete chtít ukládat konverzace, filtrovat nevhodný obsah nebo kombinovat více AI služeb. Backend je místo, kde tato logika žije.

**Architektura připomíná model klient-server:**
- **Frontend**: Vrstva uživatelského rozhraní pro interakci
- **Backend API**: Vrstva pro zpracování požadavků a směrování
- **AI služba**: Externí výpočty a generování odpovědí
- **Environmentální proměnné**: Bezpečné ukládání konfigurace a přihlašovacích údajů

### Porozumění toku požadavků a odpovědí

Podívejme se, co se stane, když uživatel odešle zprávu:

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

**Porozumění jednotlivým krokům:**
1. **Interakce uživatele**: Osoba napíše zprávu do chatovacího rozhraní
2. **Zpracování na frontendu**: JavaScript zachytí vstup a naformátuje ho jako JSON
3. **Validace API**: FastAPI automaticky validuje požadavek pomocí modelů Pydantic
4. **Integrace AI**: Backend přidá kontext (systémový prompt) a zavolá AI službu
5. **Zpracování odpovědi**: API obdrží odpověď od AI a může ji upravit, pokud je to potřeba
6. **Zobrazení na frontendu**: JavaScript zobrazí odpověď v chatovacím rozhraní

### Porozumění architektuře API

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

### Vytvoření aplikace FastAPI

Postupně vytvoříme naše API. Vytvořte soubor `api.py` s následujícím kódem pro FastAPI:

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

**Porozumění implementaci FastAPI:**
- **Importuje** FastAPI pro moderní funkce webového frameworku a Pydantic pro validaci dat
- **Vytváří** automatickou dokumentaci API (dostupnou na `/docs`, když server běží)
- **Povoluje** middleware CORS, aby umožnil požadavky z frontendu z různých zdrojů
- **Definuje** modely Pydantic pro automatickou validaci požadavků/odpovědí a dokumentaci
- **Používá** asynchronní endpointy pro lepší výkon při současných požadavcích
- **Implementuje** správné HTTP status kódy a zpracování chyb pomocí HTTPException
- **Zahrnuje** strukturované logování pro monitorování a ladění
- **Poskytuje** endpoint pro kontrolu stavu služby

**Klíčové výhody FastAPI oproti tradičním frameworkům:**
- **Automatická validace**: Modely Pydantic zajišťují integritu dat před zpracováním
- **Interaktivní dokumentace**: Navštivte `/docs` pro automaticky generovanou, testovatelnou dokumentaci API
- **Bezpečnost typů**: Typové anotace v Pythonu zabraňují chybám za běhu a zlepšují kvalitu kódu
- **Podpora asynchronních operací**: Zpracování více požadavků na AI současně bez blokování
- **Výkon**: Výrazně rychlejší zpracování požadavků pro aplikace v reálném čase

### Porozumění CORS: Bezpečnostní stráž webu

CORS (Cross-Origin Resource Sharing) je jako bezpečnostní stráž v budově, která kontroluje, zda návštěvníci mají povolení vstoupit. Pojďme pochopit, proč na tom záleží a jak to ovlivňuje vaši aplikaci.

#### Co je CORS a proč existuje?

**Problém**: Představte si, že by jakýkoli web mohl posílat požadavky na web vaší banky vaším jménem bez vašeho svolení. To by byla bezpečnostní noční můra! Prohlížeče tomu ve výchozím nastavení brání pomocí "Politiky stejného původu".

**Politika stejného původu**: Prohlížeče umožňují webovým stránkám posílat požadavky pouze na stejnou doménu, port a protokol, ze kterého byly načteny.

**Analogická situace**: Je to jako bezpečnost v bytovém domě – pouze rezidenti (stejný původ) mají přístup do budovy ve výchozím nastavení. Pokud chcete, aby vás navštívil přítel (jiný původ), musíte explicitně říct bezpečnosti, že je to v pořádku.

#### CORS ve vašem vývojovém prostředí

Během vývoje váš frontend a backend běží na různých portech:
- Frontend: `http://localhost:3000` (nebo file:// při přímém otevření HTML)
- Backend: `http://localhost:5000`

Tyto jsou považovány za "různé původy", i když jsou na stejném počítači!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Co konfigurace CORS prakticky dělá:**
- **Přidává** speciální HTTP hlavičky do odpovědí API, které říkají prohlížečům "tento požadavek z jiného původu je povolen"
- **Zpracovává** "preflight" požadavky (prohlížeče někdy kontrolují oprávnění před odesláním skutečného požadavku)
- **Zabraňuje** obávané chybě "zablokováno politikou CORS" v konzoli vašeho prohlížeče

#### Bezpečnost CORS: Vývoj vs produkce

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

**Proč na tom záleží**: Ve vývoji je `CORS(app)` jako nechat odemčené dveře – pohodlné, ale ne bezpečné. V produkci chcete přesně určit, které weby mohou komunikovat s vaším API.

#### Běžné scénáře CORS a jejich řešení

| Scénář | Problém | Řešení |
|--------|---------|--------|
| **Lokální vývoj** | Frontend nemůže dosáhnout na backend | Přidejte CORSMiddleware do FastAPI |
| **GitHub Pages + Heroku** | Nasazený frontend nemůže dosáhnout na API | Přidejte URL GitHub Pages do původů CORS |
| **Vlastní doména** | Chyby CORS v produkci | Aktualizujte původy CORS tak, aby odpovídaly vaší doméně |
| **Mobilní aplikace** | Aplikace nemůže dosáhnout na webové API | Přidejte doménu aplikace nebo opatrně použijte `*` |

**Tip**: Můžete zkontrolovat hlavičky CORS v nástrojích pro vývojáře vašeho prohlížeče na kartě Síť. Hledejte hlavičky jako `Access-Control-Allow-Origin` v odpovědi.

### Zpracování chyb a validace

Všimněte si, jak naše API zahrnuje správné zpracování chyb:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Klíčové principy validace:**
- **Kontroluje** požadovaná pole před zpracováním požadavků
- **Vrací** smysluplné chybové zprávy ve formátu JSON
- **Používá** vhodné HTTP status kódy (400 pro špatné požadavky)
- **Poskytuje** jasnou zpětnou vazbu, která pomáhá vývojářům frontendu ladit problémy

## Nastavení a spuštění backendu

Nyní, když máme připravenou integraci AI a server FastAPI, pojďme vše spustit. Proces nastavení zahrnuje instalaci Python závislostí, konfiguraci environmentálních proměnných a spuštění vývojového serveru.

### Nastavení Python prostředí

Pojďme nastavit vaše Python vývojové prostředí. Virtuální prostředí jsou jako přístup k odděleným prostorům – každý projekt má svůj vlastní izolovaný prostor se specifickými nástroji a závislostmi, což zabraňuje konfliktům mezi různými projekty.

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

**Co jsme právě udělali:**
- **Vytvořili** jsme vlastní malou Python bublinu, kde můžeme instalovat balíčky, aniž bychom ovlivnili cokoli jiného
- **Aktivovali** jsme ji, aby náš terminál věděl, že má používat toto konkrétní prostředí
- **Nainstalovali** jsme základní nástroje: OpenAI pro AI magii, FastAPI pro naše webové API, Uvicorn pro jeho spuštění a python-dotenv pro bezpečné spravování tajných údajů

**Klíčové závislosti vysvětleny:**
- **FastAPI**: Moderní, rychlý webový framework s automatickou dokumentací API
- **Uvicorn**: Bleskově rychlý ASGI server, který spouští aplikace FastAPI
- **OpenAI**: Oficiální knihovna pro modely GitHub a integraci OpenAI API
- **python-dotenv**: Bezpečné načítání environmentálních proměnných ze souborů .env

### Konfigurace prostředí: Udržování tajemství v bezpečí

Než spustíme naše API, musíme si promluvit o jedné z nejdůležitějších lekcí ve webovém vývoji: jak udržet vaše tajemství skutečně tajná. Environmentální proměnné jsou jako bezpečný trezor, ke kterému má přístup pouze vaše aplikace.

#### Co jsou environmentální proměnné?

**Představte si environmentální proměnné jako bezpečnostní schránku** – vložíte tam své cenné věci a pouze vy (a vaše aplikace) máte klíč k jejich získání. Místo psaní citlivých informací přímo do kódu (kde je může vidět doslova kdokoli) je bezpečně uložíte v prostředí.

**Tady je rozdíl:**
- **Špatný způsob**: Napsat si heslo na lístek a přilepit ho na monitor
- **Správný způsob**: Uložit heslo do bezpečného správce hesel, ke kterému máte přístup jen vy

#### Proč na environmentálních proměnných záleží

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

**Co se stane, když tvrdě zakódujete tajemství:**
1. **Expozice verzovacího systému**: Každý, kdo má přístup k vašemu Git repozitáři, vidí váš API klíč
2. **Veřejné repozitáře**: Pokud nahrajete na GitHub, váš klíč je viditelný pro celý internet
3. **Sdílení týmu**: Ostatní vývojáři pracující na vašem projektu získají přístup k vašemu osobnímu API klíči
4. **Bezpečnostní narušení**: Pokud někdo ukradne váš API klíč, může použít vaše AI kredity

#### Nastavení souboru prostředí

Vytvořte soubor `.env` ve vašem backendovém adresáři. Tento soubor ukládá vaše tajemství lokálně:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Porozumění souboru .env:**
- **Jedno tajemství na řádek** ve formátu `KLÍČ=hodnota`
- **Žádné mezery** kolem znaménka rovnosti
- **Není potřeba uvozovek** kolem hodnot (obvykle)
- **Komentáře** začínají `#`

#### Vytvoření osobního přístupového tokenu GitHub

Váš GitHub token je jako speciální heslo, které dává vaší aplikaci oprávnění používat AI služby GitHub:

**Postup vytvoření tokenu:**
1. **Přejděte do Nastavení GitHub** → Nastavení vývojáře → Osobní přístupové tokeny → Tokeny (klasické)
2. **Klikněte na "Vytvořit nový token (klasický)"**
3. **Nastavte expiraci** (30 dní pro testování, delší pro produkci)
4. **Vyberte oprávnění**: Zaškrtněte "repo" a jakákoli další potřebná oprávnění
5. **Vygenerujte token** a ihned ho zkopírujte (později ho už neuvidíte!)
6. **Vložte ho do svého souboru .env**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Načítání environmentálních proměnných v Pythonu

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

**Co tento kód dělá:**
- **Načítá** váš soubor .env a zpřístupňuje proměnné Pythonu
- **Kontroluje**, zda existuje požadovaný token (dobré zpracování chyb!)
- **Vyvolává** jasnou chybu, pokud token chybí
- **Používá** token bezpečně, aniž by ho odhaloval v kódu

#### Bezpečnost Git: Soubor .gitignore

Váš soubor `.gitignore` říká Gitu, které soubory nikdy nesledovat nebo nahrávat:

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

**Proč je to důležité**: Jakmile přidáte `.env` do `.gitignore`, Git bude ignorovat váš environmentální soubor, což vám zabrání náhodně nahrát vaše tajemství na GitHub.

#### Různá prostředí, různá tajemství

Profesionální aplikace používají různé API klíče pro různá prostředí:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Proč na tom záleží**: Nechcete, aby vaše experimenty ve vývoji ovlivnily váš produkční AI kvótu, a chcete různé úrovně bezpečnosti pro různá prostředí.

### Spuštění vývojového serveru: Oživení vašeho FastAPI

Nyní přichází vzrušující okamžik – spuštění vývojového serveru FastAPI a sledování, jak vaše integrace AI ožívá! FastAPI používá Uvicorn, bleskově rychlý ASGI server, který je speciálně navržen pro asynchronní Python aplikace.

#### Porozumění procesu spuštění serveru FastAPI

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Když spustíte tento příkaz, zde je, co se děje v zákulisí:

**1. Python načte vaši aplikaci FastAPI**:
- Importuje všechny potřebné knihovny (FastAPI, Pydantic, OpenAI, atd.)
- Načte environmentální proměnné ze souboru `.env`
- Vytvoří instanci aplikace FastAPI s automatickou dokumentací

**2. Uvicorn konfiguruje ASGI server**:
- Připojí se k portu 5000 s možnostmi asynchronního zpracování požadavků
- Nastaví směrování požadavků s automatickou validací
- Povolí automatické obnovení pro vývoj (restartuje se při změně souborů)
- Generuje interaktivní dokumentaci API

**3. Server začne naslouchat**:
- Váš terminál zobrazí: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Server může zpracovávat více současných požadavků na AI
- Vaše API je připraveno s automatickou dokumentací na `http://localhost:5000/docs`

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

**Porozumění výstupu FastAPI:**
- **Sleduje změny**: Automatické obnovení povoleno pro vývoj
- **Uvicorn běží**: Vysoce výkonný ASGI server je aktivní
- **Proces obnovení spuštěn**: Sledování souborů pro automatické restartování
- **Spuštění aplikace dokončeno**: Aplikace FastAPI úspěšně inicializována
- **Interaktivní dokumentace dostupná**: Navštivte `/docs` pro automatickou dokumentaci API

#### Testování vašeho FastAPI: Několik výkonných přístupů

FastAPI poskytuje několik pohodlných způsobů
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

#### Řešení běžných problémů při spuštění

| Chybová zpráva | Co znamená | Jak opravit |
|----------------|------------|-------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI není nainstalováno | Spusťte `pip install fastapi uvicorn` ve svém virtuálním prostředí |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI server není nainstalován | Spusťte `pip install uvicorn` ve svém virtuálním prostředí |
| `KeyError: 'GITHUB_TOKEN'` | Environmentální proměnná nebyla nalezena | Zkontrolujte svůj soubor `.env` a volání `load_dotenv()` |
| `Address already in use` | Port 5000 je obsazen | Ukončete ostatní procesy používající port 5000 nebo změňte port |
| `ValidationError` | Data požadavku neodpovídají modelu Pydantic | Zkontrolujte, zda formát vašeho požadavku odpovídá očekávanému schématu |
| `HTTPException 422` | Nezpracovatelná entita | Validace požadavku selhala, zkontrolujte `/docs` pro správný formát |
| `OpenAI API error` | Autentizace AI služby selhala | Ověřte, zda je váš GitHub token správný a má odpovídající oprávnění |

#### Nejlepší postupy při vývoji

**Automatické načítání změn**: FastAPI s Uvicornem poskytuje automatické načítání změn při ukládání úprav v Python souborech. To znamená, že můžete upravovat kód a ihned ho testovat bez nutnosti ručního restartování.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Logování pro vývoj**: Přidejte logování, abyste lépe pochopili, co se děje:

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

**Proč logování pomáhá**: Během vývoje můžete přesně vidět, jaké požadavky přicházejí, jak AI odpovídá a kde dochází k chybám. To výrazně urychluje ladění.

### Konfigurace pro GitHub Codespaces: Snadný vývoj v cloudu

GitHub Codespaces je jako mít výkonný vývojový počítač v cloudu, ke kterému máte přístup z jakéhokoli prohlížeče. Pokud pracujete v Codespaces, existuje několik dalších kroků, jak zpřístupnit backend vašemu frontendu.

#### Porozumění síťování v Codespaces

V lokálním vývojovém prostředí vše běží na stejném počítači:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (nebo file://)

V Codespaces běží vaše vývojové prostředí na serverech GitHubu, takže "localhost" má jiný význam. GitHub automaticky vytváří veřejné URL pro vaše služby, ale je třeba je správně nakonfigurovat.

#### Krok za krokem: Konfigurace Codespaces

**1. Spusťte svůj backend server**:
```bash
cd backend
python api.py
```

Uvidíte známou zprávu o spuštění FastAPI/Uvicorn, ale všimněte si, že běží uvnitř prostředí Codespaces.

**2. Nastavte viditelnost portu**:
- Najděte záložku "Ports" v dolním panelu VS Code
- Najděte port 5000 v seznamu
- Klikněte pravým tlačítkem na port 5000
- Vyberte "Port Visibility" → "Public"

**Proč ho udělat veřejným?** Ve výchozím nastavení jsou porty Codespaces soukromé (přístupné pouze vám). Zveřejnění umožní vašemu frontendu (který běží v prohlížeči) komunikovat s backendem.

**3. Získejte veřejné URL**:
Po zveřejnění portu uvidíte URL jako:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Aktualizujte konfiguraci frontendu**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Porozumění URL adresám Codespaces

URL adresy Codespaces mají předvídatelný vzor:
```
https://[codespace-name]-[port].app.github.dev
```

**Rozbor:**
- `codespace-name`: Jedinečný identifikátor vašeho Codespace (obvykle obsahuje vaše uživatelské jméno)
- `port`: Číslo portu, na kterém běží vaše služba (5000 pro naši aplikaci FastAPI)
- `app.github.dev`: Doména GitHubu pro aplikace Codespace

#### Testování nastavení Codespaces

**1. Otestujte backend přímo**:
Otevřete své veřejné URL v novém okně prohlížeče. Měli byste vidět:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testujte pomocí nástrojů pro vývojáře v prohlížeči**:
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

#### Codespaces vs Lokální vývoj

| Aspekt | Lokální vývoj | GitHub Codespaces |
|--------|---------------|-------------------|
| **Doba nastavení** | Delší (instalace Pythonu, závislostí) | Okamžitá (předkonfigurované prostředí) |
| **Přístup k URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfigurace portů** | Automatická | Manuální (zveřejnění portů) |
| **Ukládání souborů** | Lokální počítač | GitHub repozitář |
| **Spolupráce** | Obtížné sdílení prostředí | Snadné sdílení odkazu na Codespace |
| **Závislost na internetu** | Pouze pro volání AI API | Nutná pro vše |

#### Tipy pro vývoj v Codespaces

**Environmentální proměnné v Codespaces**:
Váš soubor `.env` funguje stejně v Codespaces, ale environmentální proměnné můžete nastavit přímo v Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Správa portů**:
- Codespaces automaticky detekuje, když vaše aplikace začne naslouchat na portu
- Můžete současně přesměrovat více portů (užitečné, pokud později přidáte databázi)
- Porty zůstávají přístupné, dokud váš Codespace běží

**Pracovní postup vývoje**:
1. Provádějte změny kódu ve VS Code
2. FastAPI se automaticky znovu načte (díky režimu reload v Uvicornu)
3. Okamžitě testujte změny prostřednictvím veřejného URL
4. Uložte a odešlete změny, až budete připraveni

> 💡 **Tip**: Během vývoje si uložte záložku na URL adresu backendu Codespace. Protože názvy Codespace jsou stabilní, URL se nezmění, pokud používáte stejný Codespace.

## Vytvoření uživatelského rozhraní pro chat: Kde se lidé setkávají s AI

Nyní vytvoříme uživatelské rozhraní – část, která určuje, jak lidé komunikují s vaším AI asistentem. Stejně jako design původního rozhraní iPhonu se zaměříme na to, aby složitá technologie působila intuitivně a přirozeně.

### Porozumění moderní architektuře frontendu

Naše chatovací rozhraní bude tzv. "Single Page Application" (SPA). Místo staromódního přístupu, kdy každý klik načítá novou stránku, naše aplikace bude aktualizovat plynule a okamžitě:

**Staré webové stránky**: Jako čtení fyzické knihy – otáčíte na zcela nové stránky
**Naše chatovací aplikace**: Jako používání telefonu – vše plyne a aktualizuje se hladce

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

### Tři pilíře vývoje frontendu

Každá frontendová aplikace – od jednoduchých webových stránek po složité aplikace jako Discord nebo Slack – je postavena na třech základních technologiích. Představte si je jako základ všeho, co na webu vidíte a s čím interagujete:

**HTML (Struktura)**: To je váš základ
- Určuje, jaké prvky existují (tlačítka, textová pole, kontejnery)
- Dává obsahu význam (toto je nadpis, toto je formulář, atd.)
- Vytváří základní strukturu, na které vše ostatní staví

**CSS (Prezentace)**: To je váš interiérový designér
- Dělá vše krásné (barvy, písma, rozvržení)
- Přizpůsobuje se různým velikostem obrazovky (telefon vs notebook vs tablet)
- Vytváří plynulé animace a vizuální odezvu

**JavaScript (Chování)**: To je váš mozek
- Reaguje na to, co uživatelé dělají (klikání, psaní, posouvání)
- Komunikuje s backendem a aktualizuje stránku
- Dělá vše interaktivní a dynamické

**Představte si to jako architektonický design:**
- **HTML**: Strukturní plán (definování prostorů a vztahů)
- **CSS**: Estetický a uživatelský design (vizuální styl a uživatelský zážitek)
- **JavaScript**: Mechanické systémy (funkčnost a interaktivita)

### Proč záleží na moderní architektuře JavaScriptu

Naše chatovací aplikace bude používat moderní JavaScriptové vzory, které uvidíte v profesionálních aplikacích. Porozumění těmto konceptům vám pomůže růst jako vývojáři:

**Architektura založená na třídách**: Organizujeme náš kód do tříd, což je jako vytváření plánů pro objekty
**Async/Await**: Moderní způsob, jak zpracovávat operace, které trvají (např. volání API)
**Programování řízené událostmi**: Naše aplikace reaguje na akce uživatele (klikání, stisk kláves) místo běhu v cyklu
**Manipulace s DOM**: Dynamické aktualizování obsahu webové stránky na základě interakcí uživatele a odpovědí API

### Nastavení struktury projektu

Vytvořte adresář frontendu s touto organizovanou strukturou:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Porozumění architektuře:**
- **Odděluje** záležitosti mezi strukturou (HTML), chováním (JavaScript) a prezentací (CSS)
- **Udržuje** jednoduchou strukturu souborů, která je snadno přístupná a upravitelná
- **Dodržuje** nejlepší praktiky webového vývoje pro organizaci a udržitelnost

### Vytvoření HTML základu: Semantická struktura pro přístupnost

Začněme strukturou HTML. Moderní webový vývoj klade důraz na "semantické HTML" – používání HTML prvků, které jasně popisují svůj účel, nejen svůj vzhled. To činí vaši aplikaci přístupnou pro čtečky obrazovky, vyhledávače a další nástroje.

**Proč na semantickém HTML záleží**: Představte si, že popisujete svou chatovací aplikaci někomu po telefonu. Řekli byste "je tam záhlaví s názvem, hlavní oblast, kde se objevují konverzace, a dole formulář pro psaní zpráv." Semantické HTML používá prvky, které odpovídají tomuto přirozenému popisu.

Vytvořte `index.html` s tímto promyšleně strukturovaným označením:

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

**Porozumění každému HTML prvku a jeho účelu:**

#### Struktura dokumentu
- **`<!DOCTYPE html>`**: Říká prohlížeči, že se jedná o moderní HTML5
- **`<html lang="en">`**: Určuje jazyk stránky pro čtečky obrazovky a nástroje pro překlad
- **`<meta charset="UTF-8">`**: Zajišťuje správné kódování znaků pro mezinárodní text
- **`<meta name="viewport"...>`**: Dělá stránku mobilně přívětivou kontrolou přiblížení a měřítka

#### Semantické prvky
- **`<header>`**: Jasně identifikuje horní část s názvem a popisem
- **`<main>`**: Označuje hlavní obsahovou oblast (kde probíhají konverzace)
- **`<form>`**: Semanticky správné pro uživatelský vstup, umožňuje správnou navigaci klávesnicí

#### Funkce pro přístupnost
- **`role="log"`**: Říká čtečkám obrazovky, že tato oblast obsahuje chronologický záznam zpráv
- **`aria-live="polite"`**: Oznámí nové zprávy čtečkám obrazovky bez přerušení
- **`aria-label`**: Poskytuje popisné štítky pro ovládací prvky formuláře
- **`required`**: Prohlížeč ověří, že uživatel zadal zprávu před odesláním

#### Integrace CSS a JavaScriptu
- **`class` atributy**: Poskytují styly pro CSS (např. `chat-container`, `input-group`)
- **`id` atributy**: Umožňují JavaScriptu najít a manipulovat s konkrétními prvky
- **Umístění skriptu**: JavaScriptový soubor se načítá na konci, aby se HTML načetlo jako první

**Proč tato struktura funguje:**
- **Logický tok**: Záhlaví → Hlavní obsah → Formulář pro vstup odpovídá přirozenému pořadí čtení
- **Přístupné klávesnicí**: Uživatelé mohou procházet všechny interaktivní prvky pomocí klávesy Tab
- **Přátelské pro čtečky obrazovky**: Jasné orientační body a popisy pro zrakově postižené uživatele
- **Mobilně přívětivé**: Meta tag viewport umožňuje responzivní design
- **Progresivní vylepšení**: Funguje i v případě, že se CSS nebo JavaScript nenačte

### Přidání interaktivního JavaScriptu: Logika moderní webové aplikace

Nyní vytvoříme JavaScript, který oživí naše chatovací rozhraní. Použijeme moderní JavaScriptové vzory, které se běžně používají v profesionálním webovém vývoji, včetně ES6 tříd, async/await a programování řízeného událostmi.

#### Porozumění moderní architektuře JavaScriptu

Místo psaní procedurálního kódu (série funkcí, které se spouštějí v pořadí) vytvoříme **architekturu založenou na třídách**. Třídu si můžete představit jako plán pro vytváření objektů – podobně jako plán architekta může být použit k výstavbě více domů.

**Proč používat třídy pro webové aplikace?**
- **Organizace**: Veškerá související funkcionalita je seskupena dohromady
- **Znovupoužitelnost**: Můžete vytvořit více instancí chatu na stejné stránce
- **Udržitelnost**: Snadnější ladění a úpravy konkrétních funkcí
- **Profesionální standard**: Tento vzor se používá v frameworkech jako React, Vue a Angular

Vytvořte `app.js` s tímto moderním, dobře strukturovaným JavaScriptem:

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

#### Porozumění každému JavaScriptovému konceptu

**Struktura ES6 třídy**:
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

**Async/Await vzor**:
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

**Programování řízené událostmi**:
Namísto neustálého kontrolování, zda se něco stalo, "posloucháme" události:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulace s DOM**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Bezpečnost a nejlepší postupy

**Prevence XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Proč na tom záleží**: Pokud uživatel napíše `<script>alert('hack')</script>`, tato funkce zajistí, že se zobrazí jako text, místo aby se vykonala jako kód.

**Zpracování chyb**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Úvahy o uživatelském zážitku**:
- **Optimistické UI**: Přidejte uživatelskou zprávu okamžitě, nečekejte na odpověď serveru
- **Stavy načítání**: Deaktivujte tlačítka a zobrazte "Odesílání..." během čekání
- **Automatické posouvání**: Udržujte viditelné nejnovější zprávy
- **Validace vstupu**: Neodesílejte prázdné zprávy
- **Klávesové zkratky**: Kláves
Tato architektura je škálovatelná – můžete snadno přidat funkce jako úpravy zpráv, nahrávání souborů nebo více konverzačních vláken, aniž byste museli přepisovat základní strukturu.

### Stylování vašeho chatovacího rozhraní

Nyní vytvoříme moderní, vizuálně atraktivní chatovací rozhraní pomocí CSS. Dobré stylování dodává vaší aplikaci profesionální vzhled a zlepšuje celkový uživatelský zážitek. Použijeme moderní funkce CSS, jako jsou Flexbox, CSS Grid a vlastní vlastnosti pro responzivní a přístupný design.

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

**Porozumění architektuře CSS:**
- **Používá** vlastní vlastnosti CSS (proměnné) pro konzistentní vzhled a snadnou údržbu
- **Implementuje** rozložení Flexbox pro responzivní design a správné zarovnání
- **Obsahuje** plynulé animace pro zobrazení zpráv, které nejsou rušivé
- **Poskytuje** vizuální rozlišení mezi zprávami uživatele, odpověďmi AI a chybovými stavy
- **Podporuje** responzivní design, který funguje na stolních počítačích i mobilních zařízeních
- **Zohledňuje** přístupnost s preferencemi sníženého pohybu a správnými kontrastními poměry
- **Nabízí** podporu tmavého režimu na základě systémových preferencí uživatele

### Konfigurace URL backendu

Posledním krokem je aktualizace `BASE_URL` ve vašem JavaScriptu tak, aby odpovídala vašemu backendovému serveru:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Určení URL backendu:**
- **Lokální vývoj**: Použijte `http://localhost:5000`, pokud běžíte frontend i backend lokálně
- **Codespaces**: Najděte URL svého backendu na kartě Ports poté, co nastavíte port 5000 jako veřejný
- **Produkce**: Nahraďte skutečnou doménou při nasazení na hostingovou službu

> 💡 **Tip pro testování**: Můžete otestovat svůj backend přímo návštěvou kořenové URL ve vašem prohlížeči. Měli byste vidět uvítací zprávu z vašeho serveru FastAPI.

## Testování a nasazení

Nyní, když máte vytvořené komponenty frontendu i backendu, otestujeme, zda vše funguje společně, a prozkoumáme možnosti nasazení, abyste mohli svůj chatovací asistent sdílet s ostatními.

### Workflow lokálního testování

Postupujte podle těchto kroků pro testování celé aplikace:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Postup testování krok za krokem:**

1. **Spusťte backendový server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Ověřte funkčnost API**:
   - Otevřete `http://localhost:5000` ve svém prohlížeči
   - Měli byste vidět uvítací zprávu z vašeho serveru FastAPI

3. **Otevřete frontend**:
   - Přejděte do adresáře frontendu
   - Otevřete `index.html` ve svém webovém prohlížeči
   - Nebo použijte rozšíření Live Server v VS Code pro lepší vývojové prostředí

4. **Otestujte funkčnost chatu**:
   - Napište zprávu do vstupního pole
   - Klikněte na "Odeslat" nebo stiskněte Enter
   - Ověřte, zda AI odpovídá správně
   - Zkontrolujte konzoli prohlížeče, zda neobsahuje chyby JavaScriptu

### Řešení běžných problémů

| Problém | Příznaky | Řešení |
|---------|----------|--------|
| **CORS Error** | Frontend nemůže dosáhnout na backend | Ujistěte se, že FastAPI CORSMiddleware je správně nakonfigurován |
| **API Key Error** | 401 Neautorizované odpovědi | Zkontrolujte proměnnou prostředí `GITHUB_TOKEN` |
| **Connection Refused** | Síťové chyby ve frontendu | Ověřte URL backendu a zda server Flask běží |
| **No AI Response** | Prázdné nebo chybové odpovědi | Zkontrolujte logy backendu kvůli problémům s kvótou API nebo autentizací |

**Běžné kroky při ladění:**
- **Zkontrolujte** konzoli nástrojů pro vývojáře v prohlížeči kvůli chybám JavaScriptu
- **Ověřte**, že karta Síť ukazuje úspěšné požadavky a odpovědi API
- **Projděte** výstup terminálu backendu kvůli chybám Pythonu nebo problémům s API
- **Potvrďte**, že proměnné prostředí jsou správně načteny a dostupné

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vylepšete chatovacího asistenta přidáním historie konverzací a uchovávání zpráv. Tato výzva vám pomůže pochopit, jak spravovat stav v chatovacích aplikacích a implementovat ukládání dat pro lepší uživatelský zážitek.

**Úkol:** Upravte chatovací aplikaci tak, aby zahrnovala historii konverzací, která přetrvává mezi relacemi. Přidejte funkci pro ukládání zpráv do místního úložiště, zobrazte historii konverzací při načtení stránky a přidejte tlačítko "Vymazat historii". Také implementujte indikátory psaní a časové značky zpráv, aby byl zážitek z chatu realističtější.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## Zadání: Vytvořte svého osobního AI asistenta

Nyní vytvoříte vlastní implementaci AI asistenta. Místo pouhého kopírování kódu z tutoriálu je to příležitost aplikovat koncepty a vytvořit něco, co odráží vaše vlastní zájmy a potřeby.

### Požadavky na projekt

Nastavme váš projekt s čistou, organizovanou strukturou:

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

### Základní úkoly implementace

**Vývoj backendu:**
- **Přizpůsobte** náš kód FastAPI podle svých potřeb
- **Vytvořte** jedinečnou osobnost AI – třeba užitečného kuchařského asistenta, kreativního partnera pro psaní nebo studijního pomocníka?
- **Přidejte** spolehlivé zpracování chyb, aby vaše aplikace nezkolabovala při problémech
- **Napište** jasnou dokumentaci pro každého, kdo chce pochopit, jak vaše API funguje

**Vývoj frontendu:**
- **Vytvořte** chatovací rozhraní, které působí intuitivně a přívětivě
- **Napište** čistý, moderní JavaScript, na který byste byli hrdí
- **Navrhněte** vlastní stylování, které odráží osobnost vašeho AI – zábavné a barevné? Čisté a minimalistické? Je to zcela na vás!
- **Ujistěte se**, že funguje skvěle na telefonech i počítačích

**Požadavky na personalizaci:**
- **Vyberte** jedinečné jméno a osobnost pro svého AI asistenta – možná něco, co odráží vaše zájmy nebo problémy, které chcete řešit
- **Přizpůsobte** vizuální design tak, aby odpovídal stylu vašeho asistenta
- **Napište** poutavou uvítací zprávu, která lidi přiměje začít chatovat
- **Otestujte** svého asistenta s různými typy otázek, abyste viděli, jak reaguje

### Nápady na vylepšení (volitelné)

Chcete svůj projekt posunout na vyšší úroveň? Zde je několik zajímavých nápadů k prozkoumání:

| Funkce | Popis | Dovednosti, které procvičíte |
|--------|-------|-----------------------------|
| **Historie zpráv** | Pamatujte si konverzace i po obnovení stránky | Práce s localStorage, zpracování JSON |
| **Indikátory psaní** | Zobrazte "AI píše..." při čekání na odpovědi | Animace CSS, asynchronní programování |
| **Časové značky zpráv** | Zobrazte, kdy byla každá zpráva odeslána | Formátování data/času, UX design |
| **Export chatu** | Umožněte uživatelům stáhnout jejich konverzaci | Práce se soubory, export dat |
| **Přepínání témat** | Přepínač mezi světlým/tmavým režimem | Proměnné CSS, uživatelské preference |
| **Hlasový vstup** | Přidejte funkci převodu řeči na text | Webové API, přístupnost |

### Testování a dokumentace

**Zajištění kvality:**
- **Otestujte** svou aplikaci s různými typy vstupů a hraničními případy
- **Ověřte**, že responzivní design funguje na různých velikostech obrazovky
- **Zkontrolujte** přístupnost pomocí navigace klávesnicí a čteček obrazovky
- **Validujte** HTML a CSS podle standardů

**Požadavky na dokumentaci:**
- **Napište** README.md vysvětlující váš projekt a jak jej spustit
- **Přidejte** snímky obrazovky vašeho chatovacího rozhraní v akci
- **Zdokumentujte** jakékoli jedinečné funkce nebo úpravy, které jste přidali
- **Poskytněte** jasné pokyny k nastavení pro ostatní vývojáře

### Pokyny k odevzdání

**Výstupy projektu:**
1. Kompletní složka projektu se všemi zdrojovými kódy
2. README.md s popisem projektu a pokyny k nastavení
3. Snímky obrazovky ukazující vašeho chatovacího asistenta v akci
4. Krátká reflexe o tom, co jste se naučili a jaké výzvy jste čelili

**Kritéria hodnocení:**
- **Funkčnost**: Funguje chatovací asistent podle očekávání?
- **Kvalita kódu**: Je kód dobře organizovaný, okomentovaný a udržovatelný?
- **Design**: Je rozhraní vizuálně atraktivní a uživatelsky přívětivé?
- **Kreativita**: Jak jedinečná a personalizovaná je vaše implementace?
- **Dokumentace**: Jsou pokyny k nastavení jasné a kompletní?

> 💡 **Tip pro úspěch**: Začněte nejprve se základními požadavky, poté přidejte vylepšení, jakmile vše funguje. Zaměřte se na vytvoření propracovaného základního zážitku, než přidáte pokročilé funkce.

## Řešení

[Řešení](./solution/README.md)

## Bonusové výzvy

Připraveni posunout svého AI asistenta na další úroveň? Vyzkoušejte tyto pokročilé výzvy, které prohloubí vaše znalosti integrace AI a webového vývoje.

### Personalizace osobnosti

Skutečná magie nastává, když dáte svému AI asistentovi jedinečnou osobnost. Experimentujte s různými systémovými výzvami pro vytvoření specializovaných asistentů:

**Příklad profesionálního asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Příklad pomocníka pro kreativní psaní:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Příklad technického mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Vylepšení frontendu

Transformujte své chatovací rozhraní pomocí těchto vizuálních a funkčních vylepšení:

**Pokročilé funkce CSS:**
- **Implementujte** plynulé animace a přechody zpráv
- **Přidejte** vlastní design bublin chatu pomocí tvarů a přechodů CSS
- **Vytvořte** animaci indikátoru psaní pro chvíle, kdy AI "přemýšlí"
- **Navrhněte** emoji reakce nebo systém hodnocení zpráv

**Vylepšení JavaScriptu:**
- **Přidejte** klávesové zkratky (Ctrl+Enter pro odeslání, Escape pro vymazání vstupu)
- **Implementujte** funkci vyhledávání a filtrování zpráv
- **Vytvořte** funkci exportu konverzace (stáhnout jako text nebo JSON)
- **Přidejte** automatické ukládání do localStorage, aby nedošlo ke ztrátě zpráv

### Pokročilá integrace AI

**Více osobností AI:**
- **Vytvořte** rozbalovací nabídku pro přepínání mezi různými osobnostmi AI
- **Uložte** preferovanou osobnost uživatele do localStorage
- **Implementujte** přepínání kontextu, které udržuje tok konverzace

**Funkce chytré odpovědi:**
- **Přidejte** povědomí o kontextu konverzace (AI si pamatuje předchozí zprávy)
- **Implementujte** chytré návrhy na základě tématu konverzace
- **Vytvořte** tlačítka rychlé odpovědi na běžné otázky

> 🎯 **Cíl učení**: Tyto bonusové výzvy vám pomohou pochopit pokročilé vzory webového vývoje a techniky integrace AI, které se používají v produkčních aplikacích.

## Shrnutí a další kroky

Gratulujeme! Úspěšně jste vytvořili kompletní chatovacího asistenta poháněného AI od základu. Tento projekt vám poskytl praktické zkušenosti s moderními technologiemi webového vývoje a integrací AI – dovednosti, které jsou stále cennější v dnešním technologickém prostředí.

### Co jste dosáhli

Během této lekce jste zvládli několik klíčových technologií a konceptů:

**Vývoj backendu:**
- **Integrace** s GitHub Models API pro funkčnost AI
- **Vytvoření** RESTful API pomocí Flasku s řádným zpracováním chyb
- **Implementace** bezpečné autentizace pomocí proměnných prostředí
- **Konfigurace** CORS pro požadavky mezi frontendem a backendem

**Vývoj frontendu:**
- **Vytvoření** responzivního chatovacího rozhraní pomocí sémantického HTML
- **Implementace** moderního JavaScriptu s async/await a architekturou založenou na třídách
- **Navržení** poutavého uživatelského rozhraní pomocí CSS Grid, Flexboxu a animací
- **Přidání** funkcí přístupnosti a principů responzivního designu

**Integrace full-stack:**
- **Propojení** frontendu a backendu prostřednictvím HTTP API volání
- **Zpracování** interakcí uživatele v reálném čase a asynchronního toku dat
- **Implementace** zpracování chyb a zpětné vazby uživatele v celé aplikaci
- **Testování** kompletního workflow aplikace od vstupu uživatele po odpověď AI

### Klíčové výsledky učení

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

Tento projekt vás seznámil se základy budování aplikací poháněných AI, což představuje budoucnost webového vývoje. Nyní rozumíte tomu, jak integrovat schopnosti AI do tradičních webových aplikací a vytvářet poutavé uživatelské zážitky, které působí inteligentně a reagují na potřeby uživatelů.

### Profesionální aplikace

Dovednosti, které jste si během této lekce osvojili, jsou přímo použitelné v moderních kariérách v oblasti softwarového vývoje:

- **Full-stack webový vývoj** s využitím moderních frameworků a API
- **Integrace AI** do webových aplikací a mobilních aplikací
- **Návrh a vývoj API** pro architektury mikroslužeb
- **Vývoj uživatelského rozhraní** se zaměřením na přístupnost a responzivní design
- **DevOps praktiky**, včetně konfigurace prostředí a nasazení

### Pokračování vaší cesty vývoje AI

**Další kroky v učení:**
- **Prozkoumejte** pokročilejší modely AI a API (
- **Přesměrování portů** pro testování vašich aplikací

**Co Codespaces poskytuje:**
- **Odstraňuje** problémy s nastavením a konfigurací lokálního prostředí
- **Zajišťuje** konzistentní vývojové prostředí na různých zařízeních
- **Obsahuje** předem nakonfigurované nástroje a rozšíření pro webový vývoj
- **Nabízí** bezproblémovou integraci s GitHubem pro správu verzí a spolupráci

> 🚀 **Tip pro profesionály**: Codespaces je ideální pro učení a prototypování AI aplikací, protože automaticky řeší veškeré složité nastavení prostředí, což vám umožní soustředit se na tvorbu a učení místo řešení problémů s konfigurací.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.