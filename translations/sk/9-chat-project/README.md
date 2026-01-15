<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T04:23:37+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sk"
}
-->
# Vytvorte chat asistenta s AI

Pamätáte si Star Trek, keď posádka voľne komunikovala s počítačom lode, pýtala sa zložité otázky a dostávala premyslené odpovede? To, čo v 60. rokoch vyzeralo ako čistá sci-fi, je dnes niečo, čo môžete vytvoriť pomocou webových technológií, ktoré už poznáte.

V tejto lekcii vytvoríme AI chat asistenta pomocou HTML, CSS, JavaScriptu a určitej backendovej integrácie. Objavíte, ako rovnaké zručnosti, ktoré sa učíte, môžu byť prepojené s výkonnými AI službami, ktoré rozumejú kontextu a generujú zmysluplné odpovede.

Myslite na AI ako na prístup k obrovskej knižnici, ktorá nielenže nájde informácie, ale aj ich syntetizuje do koherentných odpovedí prispôsobených vašim konkrétnym otázkam. Namiesto prehľadávania tisícok strán dostanete priame, kontextové odpovede.

Integrácia prebieha cez známe webové technológie pracujúce spolu. HTML vytvára chatové rozhranie, CSS rieši vizuálny dizajn, JavaScript spravuje interakcie používateľa a backendové API spája všetko s AI službami. Je to podobné, ako keď rôzne sekcie orchestra spolupracujú na vytvorení symfónie.

V podstate budujeme most medzi prirodzenou ľudskou komunikáciou a strojovým spracovaním. Naučíte sa technickú implementáciu integrácie AI služieb aj návrhové vzory, ktoré robia interakcie intuitívnymi.

Na konci tejto lekcie bude integrácia AI pôsobiť menej tajomne a viac ako ďalšie API, s ktorým môžete pracovať. Pochopíte základné vzory, ktoré poháňajú aplikácie ako ChatGPT a Claude, za použitia rovnakých webových vývojárskych princípov, ktoré sa učíte.

## ⚡ Čo môžete spraviť za nasledujúcich 5 minút

**Rýchla cesta pre zaneprázdnených vývojárov**

```mermaid
flowchart LR
    A[⚡ 5 minút] --> B[Získajte GitHub token]
    B --> C[Otestujte AI ihrisko]
    C --> D[Skopírujte Python kód]
    D --> E[Zobrazte odpovede AI]
```
- **Minúta 1**: Navštívte [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) a vytvorte si osobný prístupový token
- **Minúta 2**: Testujte AI interakcie priamo v rozhraní playgroundu
- **Minúta 3**: Kliknite na záložku "Code" a skopírujte pythonovský útržok
- **Minúta 4**: Spustite kód lokálne so svojím tokenom: `GITHUB_TOKEN=your_token python test.py`
- **Minúta 5**: Sledujte, ako vaša prvá AI odpoveď vzniká z vášho vlastného kódu

**Rýchly testovací kód**:
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

**Prečo je to dôležité**: Za 5 minút zažijete kúzlo programovej AI interakcie. Toto reprezentuje základný stavebný blok, ktorý poháňa každú AI aplikáciu, ktorú používate.

Takto bude vyzerať váš hotový projekt:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/sk/screenshot.0a1ee0d123df681b.webp)

## 🗺️ Vaša cesta učenia sa vývoja AI aplikácií

```mermaid
journey
    title Od webového vývoja po integráciu AI
    section Porozumenie základom AI
      Objavte koncepty generatívnej AI: 4: You
      Preskúmajte platformu GitHub Models: 6: You
      Ovládnite parametre a prompt AI: 8: You
    section Integrácia backendu
      Vytvorte Python API server: 5: You
      Implementujte volania funkcií AI: 7: You
      Spravujte asynchrónne operácie: 8: You
    section Vývoj frontend
      Vytvorte moderné chatové rozhranie: 6: You
      Ovládnite interakcie v reálnom čase: 8: You
      Vytvorte responzívny používateľský zážitok: 9: You
    section Profesionálna aplikácia
      Nasadzujte kompletný AI systém: 7: You
      Optimalizujte výkonnostné vzory: 8: You
      Vytvorte aplikáciu pripravenú na produkciu: 9: You
```
**Cieľ vašej cesty**: Na konci tejto lekcie ste vytvorili kompletnú AI poháňanú aplikáciu pomocou tých istých technológií a vzorov, ktoré poháňajú moderných AI asistentov ako ChatGPT, Claude a Google Bard.

## Pochopenie AI: Od záhady k majstrovstvu

Predtým, než sa pustíme do kódu, poďme pochopiť, s čím pracujeme. Ak ste už použili API, poznáte základný vzor: pošlite požiadavku, príjmite odpoveď.

AI API fungujú podobne, ale namiesto vyhľadávania v databáze generujú nové odpovede na základe vzorov naučených z obrovského množstva textu. Predstavte si to ako rozdiel medzi knižničným katalógom a znalým knihovníkom, ktorý vie syntetizovať informácie z viacerých zdrojov.

### Čo je vlastne "Generatívna AI"?

Zvažujte, ako Rosettská doska umožnila vedcom porozumieť egyptským hieroglyfom tým, že našla vzory medzi známymi a neznámymi jazykmi. AI modely pracujú podobne – nachádzajú vzory v enormnom množstve textu, aby pochopili, ako jazyk funguje, a potom používajú tieto vzory na generovanie vhodných odpovedí na nové otázky.

**Rozoberme si to na jednoduchom porovnaní:**
- **Tradičná databáza**: Ako keď si žiadate rodný list – získate vždy ten istý presný dokument
- **Vyhľadávač**: Ako keď žiadate knihovníka nájsť knihy o mačkách – ukáže vám, čo je dostupné
- **Generatívna AI**: Ako keď sa pýtate znalého priateľa na mačky – povie vám zaujímavé veci svojimi slovami, prispôsobené tomu, čo chcete vedieť

```mermaid
graph LR
    A[Vaša otázka] --> B[AI Model]
    B --> C[Rozpoznávanie vzorov]
    C --> D[Generovanie obsahu]
    D --> E[Kontextuálna odpoveď]
    
    F[Tréningové dáta<br/>Knihy, články, web] --> B
```
### Ako sa AI modely učia (jednoduchá verzia)

AI modely sa učia vystavením obrovským datasetom obsahujúcim texty z kníh, článkov a rozhovorov. Počas tohto procesu identifikujú vzory v:
- Štruktúre myšlienok v písanej komunikácii
- Ktoré slová sa často vyskytujú spolu
- Ako plynú bežné konverzácie
- Kontextových rozdieloch medzi formálnou a neformálnou komunikáciou

**Je to podobné ako keď archeológovia dešifrujú staroveké jazyky**: analyzujú tisícky príkladov, aby pochopili gramatiku, slovnú zásobu a kultúrny kontext, a nakoniec sú schopní interpretovať nové texty pomocou naučených vzorov.

### Prečo GitHub Models?

Používame GitHub Models z praktického dôvodu – poskytuje nám prístup k podnikovej úrovni AI bez potreby zriaďovať vlastnú AI infraštruktúru (verím, že to teraz nechcete robiť!). Predstavte si to ako používanie API pre počasie namiesto pokusu predpovedať počasie sami zriadením počasia všade.

Je to v podstate "AI ako služba" a najlepšie na tom je, že začať je zadarmo, takže môžete experimentovať bez obáv o vysoké náklady.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Vaše Backend API]
    B --> C[GitHub Models API]
    C --> D[Spracovanie AI modelu]
    D --> C
    C --> B
    B --> A
```
Budeme používať GitHub Models pre našu backendovú integráciu, ktorá poskytuje prístup k profesionálnym AI schopnostiam cez vývojársky priateľské rozhranie. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) slúži ako testovacie prostredie, kde môžete experimentovať s rôznymi AI modelmi a pochopiť ich schopnosti pred implementáciou v kóde.

## 🧠 Ekosystém vývoja AI aplikácií

```mermaid
mindmap
  root((Vývoj AI))
    Understanding AI
      Generative Models
        Rozpoznávanie vzorov
        Generovanie obsahu
        Pochopenie kontextu
        Syntéza odpovedí
      AI Parameters
        Riadenie teploty
        Limity tokenov
        Top-p filtrovanie
        Systémové prompt-y
    Backend Architecture
      API Integration
        GitHub modely
        Autentifikácia
        Spracovanie požiadaviek
        Správa chýb
      Python Infrastructure
        FastAPI rámec
        Asynchrónne operácie
        Bezpečnosť prostredia
        Konfigurácia CORS
    Frontend Experience
      Chat Interface
        Aktualizácie v reálnom čase
        História správ
        Spätná väzba užívateľa
        Stav načítania
      Modern Web Tech
        ES6 triedy
        Async/Await
        Manipulácia s DOM
        Spracovanie udalostí
    Professional Patterns
      Security Best Practices
        Správa tokenov
        Validácia vstupu
        Prevencia XSS
        Chybové hranice
      Production Readiness
        Optimalizácia výkonu
        Responzívny dizajn
        Prístupnosť
        Testovacie stratégie
```
**Základný princíp**: Vývoj AI aplikácií kombinuje tradičné webové vývojárske zručnosti s integráciou AI služieb, čím vytvára inteligentné aplikácie, ktoré pôsobia prirodzene a reagujú na používateľov.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/sk/playground.d2b927122224ff8f.webp)

**Čo robí playground tak užitočným:**
- **Vyskúšajte** rôzne AI modely ako GPT-4o-mini, Claude a ďalšie (všetky zadarmo!)
- **Testujte** svoje nápady a vstupy pred písaním kódu
- **Získajte** hotové kódy vo vašom obľúbenom programovacom jazyku
- **Ladte** nastavenia ako úroveň kreativity a dĺžka odpovede a sledujte ich vplyv na výstup

Keď si trošku pohrajete, stačí kliknúť na záložku "Code" a vybrať programovací jazyk, aby ste získali implementačný kód, ktorý budete potrebovať.

![Playground choice showing code generation options for different programming languages](../../../translated_images/sk/playground-choice.1d23ba7d407f4758.webp)

## Nastavenie backendovej integrácie v Pythone

Teraz implementujeme integráciu AI pomocou Pythonu. Python je výborný pre AI aplikácie vďaka svojej jednoduchej syntaxe a výkonným knižniciam. Začneme so kódom z GitHub Models playground a potom ho preformulujeme do znovu použiteľnej, produkčne pripravenej funkcie.

### Pochopenie základnej implementácie

Keď si stiahnete Python kód z playgroundu, dostanete niečo takéto. Nebojte sa, ak sa vám to na začiatok zdá veľa – pozrieme si to krok za krokom:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Na overenie pomocou modelu budete potrebovať vytvoriť osobný prístupový token (PAT) vo vašich nastaveniach GitHubu.
# Vytvorte si svoj PAT token podľa pokynov tu: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Čo sa v tomto kóde deje:**
- **Importujeme** nástroje, ktoré potrebujeme: `os` pre čítanie premenných prostredia a `OpenAI` na komunikáciu s AI
- **Nastavujeme** klienta OpenAI, aby smeroval na GitHub AI servery namiesto priamo na OpenAI
- **Autentifikujeme sa** špeciálnym GitHub tokenom (viac o tom o chvíľu!)
- **Štruktúrujeme** našu konverzáciu s rôznymi "rolami" – predstavte si to ako nastavenie scény pre divadlo
- **Posielame** požiadavku AI s niektorými ladenými parametrami
- **Vyťahujeme** skutočný text odpovede zo všetkých prijatých dát

### Pochopenie rolí správ: Rámec AI konverzácie

AI konverzácie používajú špecifickú štruktúru s rôznymi "rolami", ktoré majú rôzne účely:

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

**Predstavte si to ako režisérsku réžiu:**
- **Systémová rola**: Ako režijné poznámky pre herca – hovorí AI, ako sa má správať, akú má mať osobnosť a ako odpovedať
- **Používateľská rola**: Skutočná otázka alebo správa od osoby používajúcej vašu aplikáciu
- **Asistentova rola**: AI odpoveď (tú neodosielate, ale zobrazuje sa v histórii konverzácie)

**Analógia z reálneho sveta**: Predstavte si, že predstavujete priateľa niekomu na párty:
- **Systémová správa**: "Toto je moja priateľka Sarah, je lekárka, ktorá skvele vysvetľuje lekárske koncepty jednoduchým spôsobom"
- **Používateľská správa**: "Môžeš mi vysvetliť, ako fungujú vakcíny?"
- **Asistentova odpoveď**: Sarah odpovedá ako priateľská lekárka, nie ako právnička alebo kuchár

### Pochopenie AI parametrov: Ladenie správania odpovede

Číselné parametre v AI API volaniach riadia, ako model generuje odpovede. Tieto nastavenia umožňujú upraviť správanie AI pre rôzne použitia:

#### Temperaturu (0.0 až 2.0): Regulátor kreativity

**Čo robí**: Riadi, ako kreatívne alebo predvídateľné budú odpovede AI.

**Predstavte si to ako mieru improvizácie jazzového hudobníka:**
- **Temperatúra = 0.1**: Hrá presne tú istú melódiu zakaždým (veľmi predvídateľné)
- **Temperatúra = 0.7**: Pridáva chutné variácie, pričom zostáva rozpoznateľný (vyvážená kreativita)
- **Temperatúra = 1.5**: Plná experimentálna jazzová hra s nečakanými obratmi (veľmi nepredvídateľné)

```python
# Veľmi predvídateľné odpovede (dobré pre faktické otázky)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Takmer vždy povie "4"
)

# Kreatívne odpovede (dobré na brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Vygeneruje jedinečné, nečakané príbehy
)
```

#### Max Tokens (1 až 4096+): Regulátor dĺžky odpovede

**Čo robí**: Určuje limit, ako dlhá môže byť odpoveď AI.

**Predstavte si tokeny ako približne ekvivalent slov** (asi 1 token = 0,75 slova v angličtine):
- **max_tokens=50**: Krátke a výstižné (ako SMS)
- **max_tokens=500**: Pekný odstavec alebo dva
- **max_tokens=2000**: Detailné vysvetlenie s príkladmi

```python
# Krátke, výstižné odpovede
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Vyžaduje stručné vysvetlenie
)

# Podrobné, komplexné odpovede
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Umožňuje podrobné vysvetlenia s príkladmi
)
```

#### Top_p (0.0 až 1.0): Parameter zamerania

**Čo robí**: Riadi, ako veľmi sa AI drží pravdepodobných odpovedí.

**Predstavte si AI s obrovskou slovnou zásobou zoradenou podľa pravdepodobnosti použitia slov:**
- **top_p=0.1**: Zohľadňuje iba najlepších 10 % pravdepodobných slov (veľmi zamerané)
- **top_p=0.9**: Zohľadňuje 90 % možných slov (kreatívnejšie)
- **top_p=1.0**: Zohľadňuje všetky slová (maximálna rozmanitosť)

**Napríklad**: Ak sa pýtate "Obloha je zvyčajne..."
- **Nízke top_p**: Skoro určite "modrá"
- **Vysoké top_p**: Môže povedať "modrá", "zamračená", "rozľahlá", "mení sa", "krásna" atď.

### Dáme to dokopy: Kombinácie parametrov pre rôzne prípady použitia

```python
# Pre faktické, konzistentné odpovede (ako dokumentačný bot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Pre pomoc pri tvorivom písaní
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Pre konverzačné, užitočné odpovede (vyvážené)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matica optimalizácie parametrov AI
    x-axis Nízka kreativita --> Vysoká kreativita
    y-axis Krátka odozva --> Dlhá odozva
    
    quadrant-1 Kreatívny obsah
    quadrant-2 Podrobná analýza
    quadrant-3 Rýchle fakty
    quadrant-4 Konverzačná AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Prečo tieto parametre záležia**: Rôzne aplikácie potrebujú rôzne typy odpovedí. Zákaznícky servis bot by mal byť konzistentný a faktický (nízka teplota), zatiaľ čo kreatívny asistent písania by mal byť nápaditý a rozmanitý (vysoká teplota). Pochopenie týchto parametrov vám dáva kontrolu nad osobnosťou a štýlom odpovedí AI.
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

**Pochopenie tejto vylepšenej funkcie:**
- **Prijíma** dva parametre: požiadavku používateľa a voliteľnú systémovú správu
- **Poskytuje** predvolenú systémovú správu pre všeobecné správanie asistenta
- **Používa** správne typové anotácie Pythonu pre lepšiu dokumentáciu kódu
- **Obsahuje** detailný docstring vysvetľujúci účel a parametre funkcie
- **Vracia** iba obsah odpovede, čo uľahčuje použitie v našom webovom API
- **Udržiava** rovnaké modelové parametre pre konzistentné správanie AI

### Magia systémových promptov: Programovanie osobnosti AI

Ak parametre riadia, ako AI premýšľa, systémové prompty riadia, kým AI myslí, že je. Toto je úprimne jedna z najzaujímavejších častí práce s AI – v podstate dávate AI kompletnú osobnosť, úroveň odbornosti a komunikačný štýl.

**Myslite na systémové prompty ako na obsadzovanie hercov do rôznych rolí**: Namiesto jednej generickej asistentky môžete vytvoriť špecializovaných expertov pre rôzne situácie. Potrebujete trpezlivého učiteľa? Kreatívneho brainstorming partnera? Rezolútneho obchodného poradcu? Stačí zmeniť systémový prompt!

#### Prečo sú systémové prompty také silné

Tu je fascinujúca časť: AI modely boli trénované na nespočítateľných konverzáciách, kde ľudia prijímajú rôzne roly a úrovne odbornosti. Keď dáte AI špecifickú rolu, je to ako prepnutie spínača, ktorý aktivuje všetky naučené vzory.

**Je to ako metóda herectva pre AI**: Povedzte hercovi "ste múdry starý profesor" a sledujte, ako automaticky prispôsobí držanie tela, slovnú zásobu a spôsoby. AI robí niečo pozoruhodne podobné s jazykovými vzormi.

#### Tvorba efektívnych systémových promptov: umenie a veda

**Anatómia skvelého systémového promptu:**
1. **Rola/Identita**: Kto je AI?
2. **Odbornosť**: Čo vie?
3. **Komunikačný štýl**: Ako hovorí?
4. **Konkrétne inštrukcie**: Na čo sa má zamerať?

```python
# ❌ Nejasný systémový príkaz
"You are helpful."

# ✅ Detailný, efektívny systémový príkaz
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Príklady systémových promptov s kontextom

Pozrime sa, ako rôzne systémové prompty vytvárajú úplne odlišné osobnosti AI:

```python
# Príklad 1: Trpezlivý učiteľ
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Príklad 2: Kreatívny spolupracovník
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Príklad 3: Strategický obchodný poradca
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Ako systémové prompty fungujú v akcii

Otestujme tú istú otázku s rôznymi systémovými promptmi a sledujme dramatické rozdiely:

**Otázka**: "Ako riešim autentifikáciu používateľov vo svojej webovej aplikácii?"

```python
# S otázkou od učiteľa:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typická odpoveď: "Skvelá otázka! Poďme si rozobrať autentifikáciu na jednoduché kroky.
# Predstavte si to ako vrátnika v nočnom klube, ktorý kontroluje občianske preukazy..."

# S otázkou z podnikateľského prostredia:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typická odpoveď: "Z strategického hľadiska je autentifikácia kľúčová pre dôveru používateľov
# a dodržiavanie predpisov. Nechajte ma načrtnúť rámec, ktorý zohľadňuje bezpečnosť,
# používateľskú skúsenosť a škálovateľnosť..."
```

#### Pokročilé techniky systémových promptov

**1. Nastavenie kontextu**: Poskytnite AI základné informácie
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formátovanie výstupu**: Povedzte AI, ako štruktúrovať odpovede
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

**3. Nastavenie obmedzení**: Definujte, čo AI NESMIE robiť
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Prečo je to dôležité pre váš chatovací asistent

Pochopenie systémových promptov vám dáva neuveriteľnú moc vytvárať špecializovaných AI asistentov:
- **Chatbot zákazníckej podpory**: Užitočný, trpezlivý, oboznámený s pravidlami
- **Učebný lektor**: Povzbudzujúci, krok za krokom, overuje porozumenie
- **Tvorivý partner**: Fantazijný, stavia na nápadoch, pýta sa „čo keby?"
- **Technický expert**: Presný, detailný, so zameraním na bezpečnosť

**Kľúčový poznatok**: Nevoláte iba AI API – vytvárate vlastnú AI osobnosť, ktorá slúži vášmu konkrétnemu prípadu použitia. Práve to spôsobuje, že moderné AI aplikácie pôsobia prispôsobene a užitočne namiesto obecne.

### 🎯 Pedagogické zhodnotenie: Programovanie AI osobnosti

**Zastavte sa a zamyslite sa**: Práve ste sa naučili programovať AI osobnosti cez systémové prompty. Toto je základná zručnosť v modernom vývoji AI aplikácií.

**Rýchle sebahodnotenie**:
- Viete vysvetliť, čím sa systémové prompty líšia od bežných používateľských správ?
- Aký je rozdiel medzi parametrami temperature a top_p?
- Ako by ste vytvorili systémový prompt pre konkrétny prípad použitia (napr. koderského lektora)?

**Spojenie s reálnym svetom**: Techniky systémových promptov, ktoré ste sa naučili, sú používané v každej hlavnej AI aplikácii – od GitHub Copilot pomoci pri kódovaní až po konverzačné rozhranie ChatGPT. Ovládate rovnaké vzory, ktoré využívajú AI tímy v popredných technologických firmách.

**Výzva**: Ako by ste navrhli rôzne AI osobnosti pre rôzne typy používateľov (začiatočník vs expert)? Zvážte, ako môže ten istý základný AI model slúžiť rôznym publikám cez inžinierstvo promptov.

## Budovanie Web API s FastAPI: Vaše výkonné AI komunikačné centrum

Teraz si postavme backend, ktorý prepája váš frontend s AI službami. Použijeme FastAPI, moderný Python framework, ktorý exceluje vo vývoji API pre AI aplikácie.

FastAPI ponúka niekoľko výhod pre tento typ projektu: vstavaná podpora asynchrónnosti pre spracovanie paralelných požiadaviek, automatické generovanie dokumentácie API a vynikajúci výkon. Váš FastAPI server slúži ako sprostredkovateľ, ktorý prijíma požiadavky z frontendu, komunikuje s AI službami a vráti naformátované odpovede.

### Prečo FastAPI pre AI aplikácie?

Možno sa pýtate: „Nemôžem volať AI priamo z môjho frontend JavaScriptu?“ alebo „Prečo FastAPI namiesto Flask alebo Django?“ Skvelé otázky!

**Tu je dôvod, prečo je FastAPI ideálny pre to, čo stavame:**
- **Asynchrónny štandardne**: Vie súčasne spracovávať viac AI požiadaviek bez zaseknutia
- **Automatická dokumentácia**: Navštívte `/docs` a získate krásnu, interaktívnu API dokumentáciu zadarmo
- **Vstavaná validácia**: Odhalí chyby ešte pred ich spracovaním
- **Bleskovo rýchly**: Jeden z najrýchlejších Python frameworkov
- **Moderný Python**: Využíva všetky najnovšie Python funkcie

**A prečo vôbec potrebujeme backend:**

**Bezpečnosť**: Váš AI API kľúč je ako heslo – ak ho uložíte do frontend JavaScriptu, ktokoľvek, kto prezrie zdrojový kód vašej stránky, si ho môže ukradnúť a použiť vaše AI kredity. Backend udržiava citlivé údaje v bezpečí.

**Limitovanie počtu požiadaviek a kontrola**: Backend umožňuje kontrolovať, ako často môžu používatelia posielať požiadavky, implementovať autentifikáciu používateľov a pridávať logovanie na sledovanie používania.

**Spracovanie dát**: Môžete chcieť ukladať rozhovory, filtrovať nevhodný obsah alebo kombinovať viac AI služieb. Toto všetko beží na backendovej logike.

**Architektúra pripomína klient-server model:**
- **Frontend**: Vrstva používateľského rozhrania
- **Backend API**: Vrstva na spracovanie a smerovanie požiadaviek
- **AI služba**: Externý výpočtový zdroj a generátor odpovedí
- **Premenné prostredia**: Bezpečné ukladanie konfigurácie a údajov

### Pochopenie toku požiadavka a odpovede

Pozrime sa, čo sa stane, keď používateľ odošle správu:

```mermaid
sequenceDiagram
    participant User as 👤 Používateľ
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI služba
    
    User->>Frontend: Zadáva "Ahoj AI!"
    Frontend->>API: POST /hello {"message": "Ahoj AI!"}
    Note over API: Overuje požiadavku<br/>Pridáva systémový prompt
    API->>AI: Posiela naformátovanú požiadavku
    AI->>API: Vracia odpoveď AI
    Note over API: Spracováva odpoveď<br/>Zaznamenáva konverzáciu
    API->>Frontend: {"response": "Ahoj! Ako vám môžem pomôcť?"}
    Frontend->>User: Zobrazuje správu AI
```
**Pochopenie každého kroku:**
1. **Interakcia používateľa**: Osoba zadá text do chatu
2. **Spracovanie frontendom**: JavaScript zachytí vstup a naformátuje ho do JSONu
3. **Validácia API**: FastAPI automaticky overí požiadavku pomocou Pydantic modelov
4. **Integrácia AI**: Backend pridá kontext (systémový prompt) a zavolá AI službu
5. **Spracovanie odpovede**: API prijme odpoveď od AI a môže ju upraviť podľa potreby
6. **Zobrazenie vo frontende**: JavaScript ukáže odpoveď v chatovom rozhraní

### Pochopenie architektúry API

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
    FastAPI->>Frontend: {"response": "Ahoj! Ako vám môžem pomôcť?"}
```
```mermaid
flowchart TD
    A[Zadanie používateľa] --> B[Frontend Validácia]
    B --> C[HTTP POST Žiadosť]
    C --> D[FastAPI Router]
    D --> E[Pydantic Validácia]
    E --> F[Volanie AI Funkcie]
    F --> G[GitHub Models API]
    G --> H[Spracovanie Odpovede]
    H --> I[JSON Odpoveď]
    I --> J[Aktualizácia Frontendu]
    
    subgraph "Bezpečnostná Vrstva"
        K[CORS Middleware]
        L[Premenné Prostredia]
        M[Spracovanie Chýb]
    end
    
    D --> K
    F --> L
    H --> M
```
### Vytvorenie FastAPI aplikácie

Postupne si vytvorme API. Vytvorte súbor `api.py` s nasledujúcim FastAPI kódom:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfigurácia logovania
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Vytvorte aplikáciu FastAPI
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfigurácia CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Konfigurujte vhodne pre produkciu
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic modely na validáciu požiadaviek/odpovedí
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
        # Extrahujte a overte správu
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Zavolajte AI službu (poznámka: call_llm by mala byť asynchrónna pre lepší výkon)
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

**Pochopenie implementácie FastAPI:**
- **Importuje** FastAPI pre modernú webovú funkcionalitu a Pydantic pre validáciu dát
- **Vytvára** automatickú dokumentáciu API (dostupnú na `/docs` počas behu servera)
- **Povoľuje** CORS middleware, ktorý umožňuje požiadavky frontendu z iných zdrojov
- **Definuje** Pydantic modely pre automatickú validáciu požiadaviek/odpovedí a dokumentáciu
- **Používa** asynchrónne endpointy pre lepší výkon pri súbežných požiadavkách
- **Implementuje** správne HTTP status kódy a spracovanie chýb pomocou HTTPException
- **Zahŕňa** štruktúrované logovanie pre monitorovanie a ladenie
- **Poskytuje** health check endpoint pre monitorovanie stavu služby

**Kľúčové výhody FastAPI oproti tradičným frameworkom:**
- **Automatická validácia**: Pydantic modely zabezpečujú integritu dát pred ich spracovaním
- **Interaktívna dokumentácia**: Navštívte `/docs` pre auto-generovanú a testovateľnú API dokumentáciu
- **Typová bezpečnosť**: Python typové anotácie zabraňujú runtime chybám a zvyšujú kvalitu kódu
- **Podpora asynchrónnosti**: Spracovanie viacerých AI požiadaviek súčasne bez blokovania
- **Výkon**: Výrazne rýchlejšie spracovanie požiadaviek vhodné pre realtime aplikácie

### Pochopenie CORS: Ochranca bezpečnosti webu

CORS (Cross-Origin Resource Sharing) je ako ochranca na budove, ktorý kontroluje, či návštevníci môžu vstúpiť. Pozrime sa, prečo je to dôležité a ako to ovplyvňuje vašu aplikáciu.

#### Čo je CORS a prečo existuje?

**Problém**: Predstavte si, že by ktorákoľvek webstránka mohla robiť požiadavky na váš bankový web bez vášho súhlasu. To by bola bezpečnostná nočná mora! Browsery to predvolene zakazujú cez „Same-Origin Policy“.

**Same-Origin Policy**: Browsery povoľujú webstránkam robiť požiadavky len na rovnakú doménu, port a protokol, z ktorého boli načítané.

**Analógia z reálneho sveta**: Je to ako bezpečnostná služba v obytnom dome – predvolene môžu vstúpiť len obyvatelia (rovnaký origin). Ak chcete pustiť návštevu (iný origin), musíte ochranku explicitne upozorniť.

#### CORS vo vašom vývojovom prostredí

Počas vývoja váš frontend a backend bežia na rôznych portoch:
- Frontend: `http://localhost:3000` (alebo file:// ak otvárate HTML priamo)
- Backend: `http://localhost:5000`

Prehliadače ich teda považujú za „různe originy“, hoci sú na tom istom počítači!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Toto hovorí prehliadačom: "Je v poriadku, ak iné pôvody robia požiadavky na toto API"
```

**Čo CORS konfigurácia robí v praxi:**
- **Pridáva** špeciálne HTTP hlavičky do odpovedí API, ktoré prehliadaču hovoria „táto cross-origin požiadavka je povolená“
- **Spracováva** „preflight“ požiadavky (browsere niekedy najprv kontrolujú povolenia pred skutočnou požiadavkou)
- **Zabraňuje** nepríjemnej chybe „blocked by CORS policy“ vo vašej konzole prehliadača

#### CORS bezpečnosť: vývoj vs produkcia

```python
# 🚨 Vývoj: Povoliť VŠETKY pôvody (pohodlné, ale nebezpečné)
CORS(app)

# ✅ Produkcia: Povoliť iba konkrétnu doménu frontendu
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Pokročilé: Rôzne pôvody pre rôzne prostredia
if app.debug:  # Režim vývoja
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Režim produkcie
    CORS(app, origins=["https://yourdomain.com"])
```

**Prečo je to dôležité**: Vo vývoji je `CORS(app)` ako nechať dvere otvorené – pohodlné, ale nie bezpečné. V produkcii chcete presne určiť, ktoré webstránky môžu komunikovať s vašim API.

#### Bežné scenáre a riešenia CORS

| Scenár | Problém | Riešenie |
|----------|---------|----------|
| **Lokálny vývoj** | Frontend nedosiahne backend | Pridajte CORSMiddleware do FastAPI |
| **GitHub Pages + Heroku** | Nasadený frontend nepristupuje k API | Pridajte URL GitHub Pages do CORS origins |
| **Vlastná doména** | CORS chyby v produkcii | Aktualizujte CORS origins podľa vašej domény |
| **Mobilná aplikácia** | Aplikácia nedosiahne webové API | Pridajte doménu aplikácie alebo opatrne použite `*` |

**Tip**: Môžete kontrolovať CORS hlavičky v Nástrojoch pre vývojárov vášho prehliadača v záložke Sieť. Hľadajte hlavičky ako `Access-Control-Allow-Origin` v odpovedi.

### Spracovanie chýb a validácia

Všimnite si, že naše API obsahuje správne spracovanie chýb:

```python
# Overiť, či sme prijali správu
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Kľúčové princípy validácie:**
- **Overuje** povinné polia ešte pred spracovaním požiadavky
- **Vracia** zmysluplné chybové správy v JSON formáte
- **Používa** správne HTTP status kódy (napr. 400 pre zlé požiadavky)
- **Poskytuje** jasnú spätnú väzbu, ktorá pomáha frontend vývojárom chyby odstrániť

## Nastavenie a spustenie vášho backendu

Teraz, keď máme AI integráciu a FastAPI server pripravené, poďme všetko spustiť. Proces nastavenia zahŕňa inštaláciu Python závislostí, konfiguráciu premenných prostredia a spustenie vývojového servera.

### Nastavenie Python prostredia

Nastavme si Python vývojové prostredie. Virtuálne prostredia sú ako Manhattan Project – každý projekt dostane vlastné izolované miesto so špecifickými nástrojmi a závislosťami, aby sa predišlo konfliktom medzi projektmi.

```bash
# Prejdite do svojho backend adresára
cd backend

# Vytvorte virtuálne prostredie (ako vytvorenie čistej miestnosti pre váš projekt)
python -m venv venv

# Aktivujte ho (Linux/Mac)
source ./venv/bin/activate

# Na Windows použite:
# venv\Scripts\activate

# Nainštalujte potrebné veci
pip install openai fastapi uvicorn python-dotenv
```

**Čo sme práve urobili:**
- **Vytvorili** vlastný malý Python bublinu, kde môžeme inštalovať balíčky bez ovplyvnenia ostatných projektov
- **Aktivovali** ju, aby náš terminál vedel používať toto konkrétne prostredie
- **Inštalovali** základné knižnice: OpenAI pre AI zázraky, FastAPI pre naše webové API, Uvicorn na spustenie servera, a python-dotenv pre bezpečné spravovanie tajomstiev

**Vysvetlenie hlavných závislostí:**
- **FastAPI**: Moderný, rýchly webový framework s automatickou dokumentáciou API
- **Uvicorn**: Bleskurýchly ASGI server spúšťajúci FastAPI aplikácie
- **OpenAI**: Oficiálna knižnica pre GitHub modely a integráciu OpenAI API
- **python-dotenv**: Bezpečné načítavanie premenných prostredia z .env súborov

### Konfigurácia prostredia: Ako udržať tajomstvá v bezpečí

Predtým, než spustíme API, musíme si povedať jedno z najdôležitejších pravidiel webového vývoja: ako naozaj držať vaše tajomstvá tajnými. Premenné prostredia sú ako bezpečný trezor, ku ktorému má prístup iba vaša aplikácia.

#### Čo sú premenné prostredia?

**Predstavte si ich ako bezpečnostnú schránku** – vložíte tam svoje cennosti a len vy (a vaša aplikácia) máte kľúč. Namiesto písania citlivých údajov priamo v kóde (kde ich môže každý vidieť), ich bezpečne ukladáte do prostredia.

**Rozdiel je tento:**
- **Zlý prístup**: Napísať si heslo na lístok a prilepiť ho na monitor
- **Správny prístup**: Uchovávať heslo v bezpečnom manažéri hesiel, ku ktorému máte prístup len vy

#### Prečo sú premenné prostredia dôležité

```python
# 🚨 NIKDY TO NEROBTE - API kľúč viditeľný pre všetkých
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Každý ho môže ukradnúť!
    base_url="https://models.github.ai/inference"
)

# ✅ ROBTE TO - API kľúč bezpečne uložený
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # K tomu má prístup iba vaša aplikácia
    base_url="https://models.github.ai/inference"
)
```

**Čo sa stane, ak natvrdo zadáte tajomstvá do kódu:**
1. **Expozícia v riadení verzií**: Každý s prístupom ku Git repozitáru vidí váš API kľúč
2. **Verejné repozitáre**: Ak ho pushnete na GitHub, kľúč je viditeľný pre celý internet
3. **Zdieľanie s tímom**: Iní vývojári získajú prístup k vášmu osobnému API kľúču
4. **Bezpečnostné incidenty**: Ak niekto ukradne váš API kľúč, môže míňať vaše AI kredity

#### Nastavenie súboru prostredia

Vytvorte `.env` súbor v adresári backendu. Tento súbor bezpečne uloží vaše tajomstvá lokálne:

```bash
# .env súbor - Tento by sa NIKDY nemal commitovať do Gitu
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Ako funguje súbor .env:**
- **Jeden kľúč a jedna hodnota na riadok** vo formáte `KEY=value`
- **Bez medzier** okolo rovná sa
- **Zväčša bez úvodzoviek** okolo hodnôt
- **Komentáre** začínajú znakom `#`

#### Vytvorenie osobného prístupového tokenu GitHub

Váš GitHub token je špeciálne heslo, ktoré umožňuje vašej aplikácii používať AI služby GitHubu:

**Postupný návod na vytvorenie tokenu:**
1. **Prejdite do GitHub nastavení** → Developer settings → Personal access tokens → Tokens (classic)
2. **Kliknite na "Generate new token (classic)"**
3. **Nastavte platnosť** (30 dní na testovanie, dlhšie pre produkciu)
4. **Vyberte oprávnenia**: Zaškrtnite „repo“ a ďalšie, ktoré potrebujete
5. **Vygenerujte token** a hneď si ho skopírujte (už ho neuvidíte!)
6. **Vložte ho do vášho .env súboru**

```bash
# Príklad toho, ako vyzerá váš token (toto je falošné!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Načítanie premenných prostredia v Pythone

```python
import os
from dotenv import load_dotenv

# Načítajte premenné prostredia zo súboru .env
load_dotenv()

# Teraz k nim môžete bezpečne pristupovať
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Čo tento kód robí:**
- **Načíta** váš .env súbor a sprístupní premenné Pythonu
- **Skontroluje**, či požadovaný token existuje (dobré spracovanie chýb!)
- **Vyrukuje** s jasnou chybou, ak chýba token
- **Bezpečne používa** token bez jeho zverejnenia v kóde

#### Git bezpečnosť: Súbor .gitignore

Váš `.gitignore` súbor hovorí Gitu, ktoré súbory nikdy nesledovať alebo nahrávať:

```bash
# .gitignore - Pridajte tieto riadky
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Prečo je to kľúčové**: Keď pridáte `.env` do `.gitignore`, Git ignoruje váš .env súbor, čím zabraňuje náhodnému uploadu tajomstiev na GitHub.

#### Rôzne prostredia, rôzne tajomstvá

Profesionálne aplikácie používajú rozdielne API kľúče pre rôzne prostredia:

```bash
# .env.vývoj
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.produkcia
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Prečo to má význam**: Nechcete, aby vaše vývojové experimenty ovplyvnili produkčnú AI kvótu a chcete rôzne bezpečnostné úrovne pre rôzne prostredia.

### Spustenie vývojového servera: Oživenie vášho FastAPI


Teraz prichádza vzrušujúci moment – spustenie vývojového servera FastAPI a sledovanie, ako vaša AI integrácia ožíva! FastAPI používa Uvicorn, bleskovo rýchly ASGI server, ktorý je špeciálne navrhnutý pre asynchrónne Python aplikácie.

#### Pochopenie procesu spustenia servera FastAPI

```bash
# Metóda 1: Priame vykonanie v Pythone (zahŕňa automatické obnovenie)
python api.py

# Metóda 2: Priame použitie Uvicornu (viac kontroly)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Keď spustíte tento príkaz, za scénou sa deje toto:

**1. Python načíta vašu FastAPI aplikáciu**:
- Importuje všetky požadované knižnice (FastAPI, Pydantic, OpenAI atď.)
- Načíta premenné prostredia z vášho `.env` súboru
- Vytvorí inštanciu FastAPI aplikácie s automatickou dokumentáciou

**2. Uvicorn konfiguruje ASGI server**:
- Pripája sa na port 5000 s asynchrónnym spracovaním požiadaviek
- Nastaví smerovanie požiadaviek s automatickou validáciou
- Povolenie hot reload pre vývoj (reštart pri zmene súborov)
- Generuje interaktívnu API dokumentáciu

**3. Server začne počúvať**:
- Vo vašom termináli sa zobrazí: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Server zvládne viacero súčasných AI požiadaviek
- Vaše API je pripravené s automatickou dokumentáciou na `http://localhost:5000/docs`

#### Čo by ste mali vidieť, keď všetko funguje

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Pochopenie výstupu FastAPI:**
- **Bude sledovať zmeny**: Auto-reload povolený pre vývoj
- **Uvicorn beží**: Výkonný ASGI server je aktívny
- **Spustený proces reloadera**: Sledovač súborov pre automatické reštarty
- **Spustenie aplikácie dokončené**: FastAPI app úspešne inicializovaná
- **Interaktívna dokumentácia dostupná**: Navštívte `/docs` pre automatickú API dokumentáciu

#### Testovanie FastAPI: Viaceré výkonné prístupy

FastAPI poskytuje niekoľko pohodlných spôsobov, ako otestovať vaše API, vrátane automatickej interaktívnej dokumentácie:

**Metóda 1: Interaktívna API dokumentácia (odporúčaná)**
1. Otvorte prehliadač a choďte na `http://localhost:5000/docs`
2. Uvidíte Swagger UI so všetkými zdokumentovanými koncovými bodmi
3. Kliknite na `/hello` → "Try it out" → Zadajte testovaciu správu → "Execute"
4. Odpoveď uvidíte priamo v prehliadači s správnym formátovaním

**Metóda 2: Základný test v prehliadači**
1. Choďte na `http://localhost:5000` pre koreňový endpoint
2. Choďte na `http://localhost:5000/health` pre kontrolu stavu servera
3. Týmto potvrdíte, že váš FastAPI server funguje správne

**Metóda 2: Test z príkazového riadku (pokročilé)**
```bash
# Testujte s curl (ak je k dispozícii)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Očakávaná odpoveď:
# {"response": "Ahoj! Som tvoj AI asistent. Ako ti môžem dnes pomôcť?"}
```

**Metóda 3: Python testovací skript**
```python
# test_api.py - Vytvorte tento súbor na otestovanie vášho API
import requests
import json

# Otestujte API koncový bod
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Riešenie bežných problémov so spustením

| Chybové hlásenie | Čo to znamená | Ako to opraviť |
|------------------|---------------|---------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI nie je nainštalované | Spustite `pip install fastapi uvicorn` vo vašom virtuálnom prostredí |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI server nie je nainštalovaný | Spustite `pip install uvicorn` vo vašom virtuálnom prostredí |
| `KeyError: 'GITHUB_TOKEN'` | Premenná prostredia chýba | Skontrolujte svoj `.env` súbor a volanie `load_dotenv()` |
| `Address already in use` | Port 5000 je obsadený | Ukončite iné procesy používajúce port 5000 alebo zmeňte port |
| `ValidationError` | Dáta požiadavky nezodpovedajú Pydantic modelu | Skontrolujte, či formát požiadavky zodpovedá očakávanej schéme |
| `HTTPException 422` | Entita sa nedá spracovať | Validácia požiadavky zlyhala, skontrolujte správny formát v `/docs` |
| `OpenAI API error` | Overenie AI služby zlyhalo | Overte, či váš GitHub token je správny a má potrebné oprávnenia |

#### Najlepšie praktiky pre vývoj

**Hot Reloading**: FastAPI s Uvicorn umožňuje automatický reload pri uložení zmien v Python súboroch. To znamená, že môžete meniť kód a okamžite testovať bez manuálneho reštartu.

```python
# Explicitne povoliť horúce preťaženie
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True povoľuje horúce preťaženie
```

**Logging pre vývoj**: Pridajte logovanie, aby ste rozumeli tomu, čo sa deje:

```python
import logging

# Nastaviť protokolovanie
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

**Prečo je logging užitočný**: Počas vývoja presne vidíte, aké požiadavky prichádzajú, aké odpovede AI vracia a kde sa vyskytli chyby. To urýchľuje ladenie.

### Konfigurácia pre GitHub Codespaces: Cloudový vývoj jednoducho

GitHub Codespaces je ako mať výkonný vývojový počítač v cloude, ku ktorému pristupujete z ľubovoľného prehliadača. Ak pracujete v Codespaces, je potrebné vykonať niekoľko ďalších krokov, aby bol váš backend prístupný fronendovej časti.

#### Pochopenie sieťovania v Codespaces

V lokálnom vývojovom prostredí všetko beží na rovnakom počítači:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (alebo file://)

V Codespaces vaše prostredie beží na serveroch GitHubu, preto "localhost" znamená niečo iné. GitHub automaticky vytvára verejné URL pre vaše služby, ale musíte ich správne nakonfigurovať.

#### Konfigurácia Codespaces krok za krokom

**1. Spustite svoj backend server**:
```bash
cd backend
python api.py
```

Uvidíte známe spúšťacie hlásenie FastAPI/Uvicorn, ale všimnite si, že beží vo vnútri prostredia Codespace.

**2. Konfigurujte viditeľnosť portu**:
- Nájdite kartu "Ports" v spodnom paneli VS Code
- Nájdite port 5000 v zozname
- Kliknite pravým tlačidlom na port 5000
- Vyberte "Port Visibility" → "Public"

**Prečo ho sprístupniť?** Štandardne sú porty v Codespace súkromné (prístupné len vám). Verejný port umožní, aby sa váš frontend (bežiaci v prehliadači) mohol spojiť s backendom.

**3. Získajte verejnú URL adresu**:
Po sprístupnení portu uvidíte URL podobné tejto:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Aktualizujte konfiguráciu frontendu**:
```javascript
// Vo vašom frontend app.js aktualizujte BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Pochopenie URL adries Codespace

URL adresy v Codespace majú predvídateľný vzor:
```
https://[codespace-name]-[port].app.github.dev
```

**Rozdelenie:**
- `codespace-name`: Jedinečný identifikátor vášho Codespace (často obsahuje vaše používateľské meno)
- `port`: Číslo portu, na ktorom beží služba (5000 pre našu FastAPI aplikáciu)
- `app.github.dev`: Doména GitHubu pre aplikácie Codespace

#### Testovanie nastavenia Codespace

**1. Otestujte backend priamo**:
Otvorte vašu verejnú URL v novom prehliadači. Mali by ste vidieť:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testujte pomocou developerských nástrojov prehliadača**:
```javascript
// Otvorte konzolu prehliadača a otestujte svoje API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs lokálny vývoj

| Aspekt | Lokálny vývoj | GitHub Codespaces |
|--------|--------------|-------------------|
| **Čas nastavenia** | Dlhší (inštalácia Pythonu, závislostí) | Okamžitý (predkonfigurované prostredie) |
| **Prístup k URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfigurácia portov** | Automatická | Manuálna (sprístupniť porty) |
| **Ukladanie súborov** | Lokálny počítač | GitHub repozitár |
| **Spolupráca** | Ťažké zdieľať prostredie | Ľahké zdieľať odkaz na Codespace |
| **Závislosť od internetu** | Len pre AI API volania | Nutná pre všetko |

#### Tipy pre vývoj v Codespaces

**Premenné prostredia v Codespaces**:
Váš `.env` súbor funguje rovnako v Codespaces, ale premenné prostredia môžete nastaviť aj priamo v Codespace:

```bash
# Nastavte premennú prostredia pre aktuálnu reláciu
export GITHUB_TOKEN="your_token_here"

# Alebo pridajte do vášho .bashrc pre trvalosť
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Správa portov**:
- Codespaces automaticky rozpozná, keď aplikácia začne počúvať na porte
- Môžete presmerovať viacero portov súčasne (užitočné pri pridávaní databázy)
- Porty zostanú prístupné, kým váš Codespace beží

**Vývojový pracovný tok**:
1. Robte zmeny v kóde vo VS Code
2. FastAPI sa automaticky preloží (vďaka reload módu Uvicornu)
3. Okamžite testujte zmeny cez verejnú URL
4. Po ukončení uložte zmeny a pushnite

> 💡 **Tip**: Počas vývoja si uložte záložku s URL adresou backendu v Codespace. Pretože názvy Codespace sú stabilné, táto URL sa nezmení, pokiaľ používate ten istý Codespace.

## Vytvorenie frontendového chatového rozhrania: Kde sa stretávajú ľudia s AI

Teraz postavíme používateľské rozhranie – časť, ktorá určuje, ako ľudia interagujú s vaším AI asistentom. Podobne ako dizajn pôvodného iPhonu, kladieme dôraz na to, aby bola zložitá technológia intuitívna a prirodzená na používanie.

### Pochopenie modernej frontend architektúry

Naše chatové rozhranie bude to, čomu hovoríme "Single Page Application" alebo SPA. Namiesto starého modelu, kde každé kliknutie načítavalo novú stránku, naša appka sa aktualizuje plynulo a okamžite:

**Staré weby**: Ako čítanie fyzickej knihy – listujete celými novými stránkami  
**Náš chat**: Ako používanie telefónu – všetko plynie a aktualizuje sa hladko a bez prerušenia

```mermaid
graph TD
    A[Používateľ napíše správu] --> B[JavaScript zachytí vstup]
    B --> C[Overiť a naformátovať dáta]
    C --> D[Odoslať do backend API]
    D --> E[Zobraziť stav načítania]
    E --> F[Prijať odpoveď AI]
    F --> G[Aktualizovať chat rozhranie]
    G --> H[Pripravené na ďalšiu správu]
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
    ChatApp --> FastAPI : posiela požiadavky
```
### Tri piliere frontendového vývoja

Každá frontendová aplikácia – od jednoduchých stránok až po zložité appky ako Discord alebo Slack – je postavená na troch základných technológiách. Považujte ich za základ všetkého, čo na webe vidíte a s čím interagujete:

**HTML (Štruktúra)**: To je váš základ  
- Určuje, ktoré prvky existujú (tlačidlá, textové polia, kontajnery)  
- Dáva význam obsahu (toto je hlavička, toto je formulár, atď.)  
- Vytvára základnú štruktúru, na ktorú sa stavia všetko ostatné  

**CSS (Prezentácia)**: To je váš interiérový dizajnér  
- Robí všetko pekným (farby, fonty, rozloženia)  
- Zabezpečuje responzívnosť na rôznych zariadeniach (mobil, notebook, tablet)  
- Vytvára plynulé animácie a vizuálnu spätnú väzbu  

**JavaScript (Správanie)**: To je váš mozog  
- Reaguje na akcie používateľov (kliknutia, písanie, rolovanie)  
- Komunikuje s backendom a aktualizuje stránku  
- Robí všetko interaktívnym a dynamickým  

**Predstavte si to ako architektonický dizajn:**  
- **HTML**: Štrukturálny plán (definovanie priestorov a vzťahov)  
- **CSS**: Estetický a environmentálny dizajn (vizuálny štýl a používateľský zážitok)  
- **JavaScript**: Mechanické systémy (funkcionalita a interaktivita)  

### Prečo je dôležitá moderná JavaScript architektúra

Naša chatová aplikácia bude používať moderné JavaScriptové vzory, ktoré uvidíte v profesionálnych aplikáciách. Pochopenie týchto konceptov vám pomôže ako developerovi rásť:

**Architektúra založená na triedach**: Organizujeme kód do tried, čo je ako vytváranie plánov pre objekty  
**Async/Await**: Moderný spôsob spracovania operácií trvajúcich nejaký čas (napríklad volania API)  
**Programovanie riadené udalosťami**: Aplikácia reaguje na používateľské akcie (kliknutia, stlačenia kláves) namiesto stáleho cyklu  
**Manipulácia s DOM**: Dynamická aktualizácia obsahu stránky podľa používateľských akcií a odpovedí API  

### Nastavenie projektovej štruktúry

Vytvorte frontendový adresár s touto organizovanou štruktúrou:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Pochopenie architektúry:**
- **Oddelzuje** zodpovednosti medzi štruktúru (HTML), správanie (JavaScript) a prezentáciu (CSS)  
- **Udržiava** jednoduchú štruktúru súborov, ktorú je ľahké prehliadať a meniť  
- **Nasleduje** najlepšie webové praktiky pre organizáciu a údržbu  

### Budovanie HTML základu: Semantická štruktúra pre prístupnosť

Začnime s HTML štruktúrou. Moderný webový vývoj zdôrazňuje "semantický HTML" – používanie HTML elementov, ktoré jasne opisujú svoj účel, nie len vzhľad. To robí vašu aplikáciu prístupnou pre čítačky obrazovky, vyhľadávače a iné nástroje.

**Prečo je semantický HTML dôležitý**: Predstavte si, že opisujete svoju chatovú appku niekomu cez telefón. Povedali by ste: "je tam hlavička s titulom, hlavná plocha, kde prebiehajú konverzácie, a formulár v spodnej časti, kde sa píšu správy." Semantický HTML používa elementy, ktoré zodpovedajú tomuto prirodzenému opisu.

Vytvorte `index.html` s touto premyslenou štruktúrou:

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

**Pochopenie jednotlivých HTML prvkov a ich účelu:**

#### Štruktúra dokumentu
- **`<!DOCTYPE html>`**: Oznamuje prehliadaču, že ide o moderný HTML5 dokument  
- **`<html lang="en">`**: Určuje jazyk stránky pre čítačky obrazovky a preklady  
- **`<meta charset="UTF-8">`**: Zaisťuje správne kódovanie znakov pre medzinárodný text  
- **`<meta name="viewport"...>`**: Umožňuje responzívny dizajn pre mobily riadením zoomu a mierky  

#### Semantické elementy
- **`<header>`**: Jasne označuje hornú časť s titulom a popisom  
- **`<main>`**: Určuje primárnu obsahovú časť (kde sa zobrazujú konverzácie)  
- **`<form>`**: Semanticky správny pre vstup používateľa, podporuje správnu navigáciu klávesnicou  

#### Prvky prístupnosti
- **`role="log"`**: Informuje čítačky obrazovky, že táto oblasť obsahuje chronologický záznam správ  
- **`aria-live="polite"`**: Oznamuje nové správy čítačkám obrazovky bez prerušovania  
- **`aria-label`**: Poskytuje popisné označenia pre ovládacie prvky formulára  
- **`required`**: Prehliadač kontroluje, že používateľ zadal správu pred odoslaním  

#### Integrácia CSS a JavaScriptu
- **`class` atribúty**: Poskytujú štýlovacie háky pre CSS (napr. `chat-container`, `input-group`)  
- **`id` atribúty**: Umožňujú JavaScriptu nájsť a manipulovať s konkrétnymi prvkami  
- **Umiesťovanie skriptu**: JavaScript súbor je načítaný na konci, aby sa HTML načítalo ako prvé  

**Prečo táto štruktúra funguje:**
- **Logický tok**: Hlavička → Hlavný obsah → Vstupný formulár zodpovedá prirodzenému poradiu čítania  
- **Prístupné pomocou klávesnice**: Používatelia môžu prechádzať všetky interaktívne prvky tabulátorom  
- **Používateľsky prívetivé pre čítačky obrazovky**: Jasné orientačné body a popisy pre zrakovo postihnutých  
- **Responzívnosť na mobily**: Meta tag viewport umožňuje responzívny dizajn  
- **Postupné vylepšovanie**: Funguje aj keď CSS alebo JavaScript nie sú načítané  

### Pridanie interaktívneho JavaScriptu: Logika modernej webovej aplikácie

Teraz vytvorme JavaScript, ktorý oživí naše chatové rozhranie. Použijeme moderné javascriptové vzory, s ktorými sa stretnete v profesionálnom webovom vývoji, vrátane ES6 tried, async/await a programovania založeného na udalostiach.

#### Pochopenie modernej architektúry JavaScriptu

Namiesto písania procedurálneho kódu (séria funkcií spustených v poradí) vytvoríme **architektúru založenú na triedach**. Predstavte si triedu ako plán na vytváranie objektov – podobne ako architektov plán môže byť použitý na stavbu viacerých domov.

**Prečo používať triedy pre webové aplikácie?**
- **Organizácia**: Všetka súvisiaca funkcionalita je zoskupená dohromady
- **Znovupoužiteľnosť**: Môžete na rovnakej stránke vytvoriť viacero inštancií chatu
- **Údržba**: Jednoduchšie ladovanie a modifikácia špecifických funkcií
- **Profesionálny štandard**: Tento vzor sa používa v rámci ako React, Vue a Angular

Vytvorte `app.js` s týmto moderným, dobre štruktúrovaným JavaScriptom:

```javascript
// app.js - Logika modernej chat aplikácie

class ChatApp {
    constructor() {
        // Získajte odkazy na DOM elementy, ktoré budeme potrebovať manipulovať
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Nastavte URL adresu vášho backendu tu
        this.BASE_URL = "http://localhost:5000"; // Aktualizujte to podľa vášho prostredia
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Nastavte poslucháčov udalostí pri vytvorení chat aplikácie
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Počúvajte odoslanie formulára (keď používateľ klikne na Odošli alebo stlačí Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Tiež počúvajte kláves Enter v poli pre zadávanie (lepšie používateľské prostredie)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Zabraňte obnove stránky po odoslaní formulára
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Neodosielajte prázdne správy
        
        // Poskytnite používateľovi spätnú väzbu, že sa niečo deje
        this.setLoading(true);
        
        // Pridajte správu používateľa do chatu okamžite (optimistické UI)
        this.appendMessage(messageText, "user");
        
        // Vymažte pole pre zadávanie, aby používateľ mohol napísať ďalšiu správu
        this.input.value = '';
        
        try {
            // Zavolajte AI API a čakajte na odpoveď
            const reply = await this.callAPI(messageText);
            
            // Pridajte odpoveď AI do chatu
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Opätovne povoľte rozhranie bez ohľadu na úspech alebo zlyhanie
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

// Inicializujte chat aplikáciu pri načítaní stránky
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Pochopenie každého javascriptového konceptu

**Štruktúra ES6 triedy**:
```javascript
class ChatApp {
    constructor() {
        // Toto sa spustí, keď vytvoríte novú inštanciu ChatApp
        // Je to ako funkcia "setup" pre váš chat
    }
    
    methodName() {
        // Metódy sú funkcie, ktoré patria do triedy
        // Môžu pristupovať k vlastnostiam triedy pomocou "this"
    }
}
```

**Vzorec Async/Await**:
```javascript
// Starý spôsob (callback peklo):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Moderný spôsob (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Programovanie založené na udalostiach**:
Namiesto neustáleho kontrolovania, či sa niečo stalo, „počúvame“ udalosti:
```javascript
// Keď je formulár odoslaný, spusti handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Keď je stlačená klávesa Enter, tiež spusti handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulácia s DOM**:
```javascript
// Vytvoriť nové prvky
const messageElement = document.createElement("div");

// Upraviť ich vlastnosti
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Pridať na stránku
this.messages.appendChild(messageElement);
```

#### Bezpečnosť a najlepšie praktiky

**Prevencia XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Toto automaticky unikne HTML
    return div.innerHTML;
}
```

**Prečo je to dôležité**: Ak používateľ napíše `<script>alert('hack')</script>`, táto funkcia zabezpečí, že sa zobrazí ako text, nie ako vykonaný kód.

**Spracovanie chýb**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Zobraziť používateľsky prívetivú chybu namiesto toho, aby aplikácia spadla
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Úvahy o používateľskej skúsenosti**:
- **Optimistické UI**: Pridajte správu používateľa okamžite, nečakajte na odpoveď servera
- **Stavy načítania**: Deaktivujte tlačidlá a zobrazte "Odosielanie..." počas čakania
- **Automatické posúvanie**: Udržujte viditeľné najnovšie správy
- **Validácia vstupu**: Neposielajte prázdne správy
- **Klávesové skratky**: Kláves Enter odošle správu (ako v reálnych chat aplikáciách)

#### Pochopenie toku aplikácie

1. **Stránka sa načíta** → spustí sa udalosť `DOMContentLoaded` → vytvorí sa `new ChatApp()`
2. **Beží konštruktor** → Získa referencie na DOM elementy → Nastaví poslucháčov udalostí
3. **Používateľ píše správu** → Stlačí Enter alebo klikne na Odoslať → Spustí sa `handleSubmit`
4. **handleSubmit** → Validuje vstup → Zobrazí stav načítania → Zavolá API
5. **API odpovedá** → Pridá správu AI do chatu → Znovu povolí rozhranie
6. **Pripravený na ďalšiu správu** → Používateľ môže pokračovať v chatovaní

Táto architektúra je škálovateľná – môžete ľahko pridať funkcie ako úprava správ, nahrávanie súborov, alebo viaceré konverzačné vlákna bez prepísania základnej štruktúry.

### 🎯 Pedagogická kontrola: Moderná frontend architektúra

**Pochopenie architektúry**: Implementovali ste kompletnú jednorazovú aplikáciu s použitím moderných JavaScript vzorov. To reprezentuje profesionálnu úroveň frontend vývoja.

**Osvojené kľúčové koncepty**:
- **ES6 triedna architektúra**: Organizovaná, udržiavateľná štruktúra kódu
- **Async/Await vzorce**: Moderné asynchrónne programovanie
- **Programovanie založené na udalostiach**: Reaktívny dizajn užívateľského rozhrania
- **Najlepšie praktiky bezpečnosti**: Prevencia XSS a validácia vstupov

**Prepojenie s praxou**: Vzory, ktoré ste sa naučili (architektúra založená na triedach, asynchrónne operácie, manipulácia s DOM), sú základom moderných frameworkov ako React, Vue a Angular. Budujete s rovnakým architektonickým myslením ako používa produkčný softvér.

**Reflexná otázka**: Ako by ste rozšírili túto chatovú aplikáciu, aby zvládala viaceré konverzácie alebo autentifikáciu používateľov? Zamyslite sa nad potrebnými architektonickými zmenami a ako by sa vyvíjala štruktúra triedy.

### Štýlovanie vášho chatového rozhrania

Teraz vytvorme moderné, vizuálne príťažlivé chatové rozhranie pomocou CSS. Dobré štýlovanie robí vašu aplikáciu profesionálnejšou a zlepšuje celkový používateľský zážitok. Použijeme moderné CSS vlastnosti ako Flexbox, CSS Grid a vlastné premenné pre responzívny a prístupný dizajn.

Vytvorte `styles.css` s týmito komplexnými štýlmi:

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

**Pochopenie CSS architektúry:**
- **Používa** CSS vlastné premenné (variables) pre konzistentné tematizovanie a jednoduchú údržbu
- **Implementuje** Flexbox rozloženie pre responzívny dizajn a správne zarovnanie
- **Zahŕňa** plynulé animácie pre zobrazovanie správ bez rušenia
- **Poskytuje** vizuálne rozlíšenie medzi správami používateľa, odpoveďami AI a stavmi chýb
- **Podporuje** responzívny dizajn vhodný pre desktop aj mobilné zariadenia
- **Zohľadňuje** prístupnosť s preferenciami zníženia pohybu a vhodnými kontrastami
- **Ponúka** podporu tmavého režimu podľa preferencií používateľa systému

### Konfigurácia URL vášho backendu

Posledným krokom je aktualizácia `BASE_URL` vo vašom JavaScripte tak, aby zodpovedala vášmu backend serveru:

```javascript
// Pre miestny vývoj
this.BASE_URL = "http://localhost:5000";

// Pre GitHub Codespaces (nahraďte svojou skutočnou URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Určenie URL backendu:**
- **Lokálny vývoj**: Použite `http://localhost:5000`, ak beží frontend a backend lokálne
- **Codespaces**: Nájdite URL backendu v záložke Ports po sprístupnení portu 5000
- **Produkcia**: Nahraďte skutočnou doménou pri nasadzovaní na hosting

> 💡 **Tip na testovanie**: Backend môžete priamo otestovať otvorením hlavnej URL vo vašom prehliadači. Mali by ste vidieť uvítaciu správu od FastAPI servera.



## Testovanie a nasadenie

Teraz, keď máte hotové frontend aj backend komponenty, otestujme ich spoluprácu a preskúmajme možnosti nasadenia, ako zdieľať váš chatový asistent s ostatnými.

### Lokálny testovací workflow

Postupujte podľa týchto krokov pre otestovanie celej vašej aplikácie:

```mermaid
graph TD
    A[Spustiť backendový server] --> B[Konfigurovať premenné prostredia]
    B --> C[Testovať API koncové body]
    C --> D[Otvoriť frontend v prehliadači]
    D --> E[Testovať funkčnosť chatu]
    E --> F[Ladiť prípadné problémy]
```
**Krok za krokom testovací proces:**

1. **Spustite backend server**:
   ```bash
   cd backend
   source venv/bin/activate  # alebo venv\Scripts\activate vo Windows
   python api.py
   ```

2. **Overte, že API funguje**:
   - Otvorte `http://localhost:5000` vo vašom prehliadači
   - Mali by ste vidieť uvítaciu správu od FastAPI servera

3. **Otvorte frontend**:
   - Prejdite do priečinka frontend
   - Otvorte `index.html` vo webovom prehliadači
   - Alebo použite VS Code rozšírenie Live Server pre lepší vývojový zážitok

4. **Otestujte funkčnosť chatu**:
   - Napíšte správu do vstupného poľa
   - Kliknite na „Odoslať“ alebo stlačte Enter
   - Overte, či AI správne odpovedá
   - Skontrolujte konzolu prehliadača pre prípadné JavaScript chyby

### Riešenie bežných problémov

| Problém | Príznaky | Riešenie |
|---------|----------|----------|
| **CORS chyba** | Frontend nemôže dosiahnuť backend | Skontrolujte správnu konfiguráciu CORSMiddleware vo FastAPI |
| **Chyba API kľúča** | Odpovede 401 Unauthorized | Skontrolujte vašu premennú prostredia `GITHUB_TOKEN` |
| **Pripojenie odmietnuté** | Sieťové chyby vo fronte | Overte URL backendu a či beží Flask server |
| **Žiadna odpoveď AI** | Prázdne alebo chybné odpovede | Skontrolujte backend logy kvóty API alebo autentifikácie |

**Bežné kroky ladovania:**
- **Kontrola** Konzoly v nástrojoch pre vývojárov pre JavaScript chyby
- **Overenie** Záložky Sieť (Network) ukazujú úspešné API požiadavky a odpovede
- **Preskúmanie** výstupu backend terminálu pre chyby Pythonu alebo API problémy
- **Potvrdenie** načítania a prístupu k premenným prostredia

## 📈 Váš časový rámec ovládania vývoja AI aplikácie

```mermaid
timeline
    title Kompletná cesta vývoja AI aplikácií
    
    section Základy AI
        Pochopenie generatívnej AI
            : Ovládnuť koncepty rozpoznávania vzorov
            : Ovládnuť riadenie parametrov AI
            : Naučiť sa techniky promptového inžinierstva
        
        Integrácia modelov GitHub
            : Orientovať sa na platformách AI služieb
            : Bezpečne spravovať autentifikáciu
            : Optimalizovať parametre modelov
    
    section Vývoj backendu
        Architektúra Python API
            : Stavať aplikácie FastAPI
            : Implementovať asynchrónne operácie
            : Vytvárať zabezpečené koncové body
        
        Integrácia AI služieb
            : Pripojiť sa k externým AI API
            : Riešiť obmedzenia rýchlosti požiadaviek
            : Implementovať hranice chýb
    
    section Zvládnutie frontendu
        Moderné JavaScript vzory
            : Ovládnuť architektúru tried ES6
            : Implementovať async/await toky
            : Stavať responzívne rozhrania
        
        Užívateľský zážitok v reálnom čase
            : Vytvárať dynamické chatovacie rozhrania
            : Riešiť stavy načítania
            : Optimalizovať interakcie používateľov
    
    section Pripravenosť na produkciu
        Bezpečnosť a výkon
            : Implementovať bezpečnú správu tokenov
            : Predchádzať zraniteľnostiam XSS
            : Optimalizovať výkon API
        
        Profesionálne nasadenie
            : Stavať škálovateľné architektúry
            : Vytvárať udržiavateľný kód
            : Dokumentovať vývojové procesy
```
**🎓 Uzávierkový míľnik**: Úspešne ste vytvorili kompletnú AI aplikáciu poháňanú rovnakými technológiami a architektonickými vzormi, ktoré používajú moderní AI asistenti. Tieto schopnosti predstavujú prienik tradičného webového vývoja a špičkovej AI integrácie.

**🔄 Schopnosti na ďalšej úrovni**:
- Pripravení preskúmať pokročilé AI rámce (LangChain, LangGraph)
- Zaúčtovaní na stavbu multimodálnych AI aplikácií (text, obrázok, hlas)
- Osvojený základ pre implementáciu vektorových databáz a vyhľadávacích systémov
- Položený základ pre strojové učenie a doladenie AI modelov

## Výzva GitHub Copilot Agent 🚀

Využite režim Agenta na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite chatový asistent pridaním histórie konverzácií a trvalosti správ. Táto výzva vám pomôže pochopiť, ako spravovať stav v chat aplikáciách a implementovať ukladanie dát pre lepší používateľský zážitok.

**Zadanie:** Upravte chatovú aplikáciu tak, aby zahŕňala históriu konverzácií, ktorá pretrváva medzi reláciami. Pridajte funkciu ukladania správ do lokálneho úložiska (localStorage), zobrazte históriu konverzácie pri načítaní stránky a pridajte tlačidlo „Vyčistiť históriu“. Implementujte tiež indikátory písania a časové pečiatky správ, aby bol chat realistickejší.

Viac o [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.

## Zadanie: Vytvorte svojho osobného AI asistenta

Teraz si vytvoríte vlastnú implementáciu AI asistenta. Namiesto jednoduchého kopírovania ukážkového kódu máte príležitosť aplikovať koncepty na tvorbu niečoho, čo odráža vaše záujmy a použitie.

### Požiadavky projektu

Nastavme váš projekt s čistou, usporiadanou štruktúrou:

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

### Základné implementačné úlohy

**Backend vývoj:**
- **Prevezmite** naše FastAPI kódy a prispôsobte si ich
- **Vytvorte** jedinečnú AI osobnosť – možno užitočný kuchársky asistent, kreatívny partner na písanie alebo študijný kamarát?
- **Pridajte** spoľahlivé spracovanie chýb, aby sa aplikácia nezrútila pri problémoch
- **Napíšte** zrozumiteľnú dokumentáciu pre kohokoľvek, kto chce pochopiť vašu API

**Frontend vývoj:**
- **Vytvorte** chatové rozhranie, ktoré je intuitívne a prívetivé
- **Napíšte** čistý, moderný JavaScript, na ktorý budete hrdí predviesť iným vývojárom
- **Navrhnite** vlastné štýly, ktoré odzrkadľujú osobnosť vášho AI – zábavný a farebný? Čistý a minimalistický? Celkom na vás!
- **Zabezpečte**, že skvele funguje na telefónoch aj počítačoch

**Požiadavky na personalizáciu:**
- **Vyberte** jedinečné meno a osobnosť vášho AI asistenta – možno niečo, čo odráža vaše záujmy alebo problémy, ktoré chcete riešiť
- **Prispôsobte** vizuálny dizajn, aby ladil s atmosférou asistenta
- **Napíšte** pútavú uvítaciu správu, ktorá povzbudí ľudí začať chatovať
- **Otestujte** svojho asistenta s rôznymi typmi otázok a sledujte odpovede

### Nápady na rozšírenie (voliteľné)

Chcete projekt posunúť na ďalšiu úroveň? Tu je niekoľko zábavných nápadov na preskúmanie:

| Funkcia | Popis | Zručnosti, ktoré si precvičíte |
|---------|-------------|------------------------|
| **História správ** | Zapamätajte si konverzácie aj po obnovení stránky | Práca s localStorage, manipulácia s JSON |
| **Indikátory písania** | Zobrazte „AI píše...“ počas čakania na odpoveď | CSS animácie, asynchrónne programovanie |
| **Časové značky správ** | Ukážte, kedy bola každá správa odoslaná | Formátovanie dátumu/času, UX dizajn |
| **Export chatu** | Umožnite používateľom stiahnuť si konverzáciu | Práca so súbormi, export dát |
| **Prepínanie tém** | Prepínač svetlého/tmavého režimu | CSS premenné, používateľské preferencie |
| **Hlasový vstup** | Pridajte funkciu prevodu reči na text | Web API, prístupnosť |

### Testovanie a dokumentácia

**Zabezpečenie kvality:**
- **Testujte** aplikáciu s rôznymi vstupmi a hraničnými prípadmi
- **Overte** responzívnosť dizajnu na rôznych veľkostiach obrazovky
- **Skontrolujte** prístupnosť s navigáciou klávesnicou a čítačkami obrazovky
- **Validujte** HTML a CSS pre dodržiavanie štandardov

**Požiadavky na dokumentáciu:**
- **Napíšte** README.md, ktorý vysvetľuje projekt a ako ho spustiť
- **Priložte** screenshoty chatového rozhrania v akcii
- **Zdokumentujte** všetky jedinečné funkcie alebo vlastné úpravy
- **Poskytnite** jasné inštrukcie na nastavenie pre iných vývojárov

### Pokyny na odovzdanie

**Projektové výstupy:**
1. Kompletný priečinok projektu so všetkým zdrojovým kódom
2. README.md s popisom projektu a inštrukciami na spustenie
3. Screenshoty prezentujúce vášho chatového asistenta v akcii
4. Krátka reflexia o tom, čo ste sa naučili a aké výzvy ste čelili

**Kritériá hodnotenia:**
- **Funkčnosť**: Funguje chatový asistent podľa očakávania?
- **Kvalita kódu**: Je kód dobre organizovaný, komentovaný a udržiavateľný?
- **Dizajn**: Je rozhranie vizuálne príťažlivé a používateľsky prívetivé?
- **Kreativita**: Ako jedinečná a personalizovaná je vaša implementácia?
- **Dokumentácia**: Sú inštrukcie na nastavenie jasné a kompletné?

> 💡 **Tip na úspech**: Začnite s základnými požiadavkami, potom pridajte rozšírenia, keď všetko funguje. Zamerajte sa na vytvorenie vycibreného jadra pred implementáciou pokročilých funkcií.

## Riešenie

[Riešenie](./solution/README.md)

## Bonusové výzvy

Pripravení posunúť svojho AI asistenta na ďalšiu úroveň? Vyskúšajte tieto pokročilé výzvy, ktoré prehĺbia vaše chápanie AI integrácie a webového vývoja.

### Personalizácia osobnosti

Skutočná mágia sa deje, keď dáte svojmu AI asistentovi jedinečnú osobnosť. Experimentujte s rôznymi systémovými promptmi pre vytvorenie špecializovaných asistentov:

**Príklad profesionálneho asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Príklad kreatívneho pomocníka na písanie:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Príklad technického mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontendové vylepšenia

Premeňte svoje chatové rozhranie týmito vizuálnymi a funkčnými vylepšeniami:

**Pokročilé CSS funkcie:**
- **Implementujte** plynulé animácie a prechody správ
- **Pridajte** vlastné dizajny bublín chatu s CSS tvarmi a gradientmi
- **Vytvorte** animáciu indikátora písania, keď AI „premýšľa“
- **Navrhnite** reakcie emoji alebo hodnotiaci systém správ

**JavaScript vylepšenia:**
- **Pridajte** klávesové skratky (Ctrl+Enter na odoslanie, Escape na vyčistenie vstupu)
- **Implementujte** vyhľadávanie a filtrovanie správ
- **Vytvorte** funkciu exportu konverzácií (stiahnuť ako text alebo JSON)
- **Pridajte** automatické ukladanie do localStorage pre zabránenie strate správ

### Pokročilá AI integrácia

**Viaceré AI osobnosti:**
- **Vytvorte** rozbaľovací zoznam na prepínanie medzi rôznymi AI osobnosťami
- **Uložte** preferovanú osobnosť používateľa v localStorage
- **Implementujte** prepínanie kontextu, ktoré udržiava tok konverzácie

**Funkcie inteligentnej odpovede:**
- **Pridajte** vedomie kontextu konverzácie (AI si pamätá predchádzajúce správy)
- **Implementujte** inteligentné návrhy na základe témy konverzácie
- **Vytvorte** rýchle tlačidlá odpovede pre bežné otázky

> 🎯 **Cieľ učenia**: Tieto bonusové výzvy vám pomôžu pochopiť pokročilé vzory vývoja webu a techniky integrácie AI, ktoré sa používajú v produkčných aplikáciách.

## Zhrnutie a ďalšie kroky

Gratulujeme! Úspešne ste vytvorili kompletného chat asistenta s podporou AI od základov. Tento projekt vám poskytol praktické skúsenosti s modernými webovými technológiami a integráciou AI – zručnosti, ktoré sú čoraz cennejšie v dnešnom tech prostredí.

### Čo ste dosiahli

Počas tejto lekcie ste zvládli niekoľko kľúčových technológií a konceptov:

**Backend vývoj:**
- **Integrovali** ste sa s GitHub Models API pre AI funkcionalitu
- **Postavili** ste RESTful API pomocou Flask s riadnym spracovaním chýb
- **Implementovali** ste bezpečnú autentifikáciu pomocou environmentálnych premenných
- **Nakonfigurovali** ste CORS pre požiadavky medzi frontend a backend

**Frontend vývoj:**
- **Vytvorili** ste responzívne chat rozhranie pomocou semantického HTML
- **Implementovali** ste moderný JavaScript s async/await a architektúrou založenou na triedach
- **Navrhli** ste pútavé užívateľské rozhranie pomocou CSS Grid, Flexbox a animácií
- **Pridali** ste funkcie prístupnosti a princípy responzívneho dizajnu

**Full-stack integrácia:**
- **Prepojili** ste frontend a backend cez HTTP API volania
- **Spracovávali** ste interakcie používateľa v reálnom čase a asynchrónny tok dát
- **Implementovali** ste spracovanie chýb a spätnú väzbu pre používateľa v celej aplikácii
- **Otestovali** ste kompletný pracovný tok aplikácie od vstupu používateľa až po odpoveď AI

### Kľúčové výsledky učenia

```mermaid
mindmap
  root((Dovednosti AI Chat Aplikácie))
    API Integration
      Authentication
      Error Handling
      Async Programming
    Web Development
      HTML5 Semantics
      Modern CSS
      ES6+ JavaScript
    User Experience
      Responzívny Dizajn
      Prístupnosť
      Interakcia v Reálnom Čase
    AI Understanding
      Návrh Promptov
      Parametre Modelu
      Tok Konverzácie
```
Tento projekt vás zoznámil so základmi tvorby AI-poháňaných aplikácií, ktoré predstavujú budúcnosť webového vývoja. Teraz rozumiete, ako integrovať schopnosti AI do tradičných webových aplikácií, čím vytvárate pútavé používateľské zážitky, ktoré pôsobia inteligentne a interaktívne.

### Profesionálne uplatnenie

Zručnosti, ktoré ste získali v tejto lekcii, sa priamo uplatnia v moderných kariérach softvérového vývoja:

- **Full-stack webový vývoj** s modernými frameworkmi a API
- **Integrácia AI** vo webových a mobilných aplikáciách
- **Návrh a vývoj API** pre mikroservisné architektúry
- **Vývoj užívateľského rozhrania** so zameraním na prístupnosť a responzívny dizajn
- **DevOps praktiky** vrátane konfigurácie prostredia a nasadenia

### Pokračovanie vo vašej AI vývojovej ceste

**Ďalšie kroky učenia:**
- **Preskúmajte** pokročilejšie AI modely a API (GPT-4, Claude, Gemini)
- **Naučte sa** techniky prompt inžinierstva pre lepšie odpovede AI
- **Študujte** návrh konverzácií a princípy používateľského zážitku chatbotov
- **Preskúmajte** bezpečnosť AI, etiku a zodpovedné praktiky vývoja AI
- **Vytvorte** zložitejšie aplikácie s pamäťou konverzácií a kontextovým povedomím

**Návrhy pokročilých projektov:**
- Viacužívateľské chat miestnosti s AI moderovaním
- AI-poháňané chatboty pre zákaznícku podporu
- Vzdelávacie tutoriály s personalizovaným učením
- Kreatívni spoluautori písania s rôznymi AI osobnosťami
- Asistenti technickej dokumentácie pre vývojárov

## Začíname s GitHub Codespaces

Chcete si tento projekt vyskúšať v cloudovom vývojovom prostredí? GitHub Codespaces poskytuje kompletné vývojové prostredie priamo v prehliadači, ideálne na experimentovanie s AI aplikáciami bez nutnosti lokálneho nastavenia.

### Nastavenie vývojového prostredia

**Krok 1: Vytvorte z šablóny**
- **Prejdite** na [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Kliknite** na "Use this template" v pravom hornom rohu (uistite sa, že ste prihlásení do GitHubu)

![Create from template interface showing the green "Use this template" button](../../../translated_images/sk/template.67ad477109d29a2b.webp)

**Krok 2: Spustite Codespaces**
- **Otvorte** práve vytvorený repozitár
- **Kliknite** na zelené tlačidlo "Code" a vyberte "Codespaces"
- **Zvoľte** "Create codespace on main" pre spustenie vývojového prostredia

![Create codespace interface with options for launching cloud development environment](../../../translated_images/sk/codespace.bcecbdf5d2747d3d.webp)

**Krok 3: Konfigurácia prostredia**
Po načítaní Codespace budete mať prístup k:
- **Predinštalovanému** Python, Node.js a všetkým potrebným vývojovým nástrojom
- **VS Code rozhraniu** s rozšíreniami pre webový vývoj
- **Terminálu** pre spustenie backendových a frontendových serverov
- **Presmerovaniu portov** na testovanie vašich aplikácií

**Čo Codespaces poskytuje:**
- **Odstraňuje** potrebu lokálneho nastavenia a konfigurácie prostredia
- **Zabezpečuje** jednotné vývojové prostredie na rôznych zariadeniach
- **Obsahuje** predkonfigurované nástroje a rozšírenia pre webový vývoj
- **Ponúka** plynulú integráciu s GitHubom pre správu verzií a spoluprácu

> 🚀 **Profesionálna rada**: Codespaces je ideálne na učenie a prototypovanie AI aplikácií, pretože všetko zložité nastavenie prostredia zvládne automaticky, čím vám umožní sústrediť sa na tvorbu a učenie, nie na riešenie konfigurácie.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zrieknutie sa zodpovednosti**:
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, vezmite prosím na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre dôležité informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne výklady vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->