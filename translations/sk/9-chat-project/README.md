<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T21:32:40+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie chatového asistenta s AI

Pamätáte si na Star Trek, keď posádka neformálne komunikovala s počítačom lode, kládla mu zložité otázky a dostávala premyslené odpovede? To, čo sa v 60. rokoch zdalo ako čistá vedecká fikcia, je teraz niečo, čo môžete vytvoriť pomocou webových technológií, ktoré už poznáte.

V tejto lekcii vytvoríme AI chatového asistenta pomocou HTML, CSS, JavaScriptu a niektorých backendových integrácií. Objavíte, ako môžu rovnaké zručnosti, ktoré ste sa učili, spojiť sa s výkonnými AI službami, ktoré dokážu pochopiť kontext a generovať zmysluplné odpovede.

Predstavte si AI ako prístup k obrovskej knižnici, ktorá nielenže dokáže nájsť informácie, ale aj ich syntetizovať do zrozumiteľných odpovedí prispôsobených vašim konkrétnym otázkam. Namiesto prehľadávania tisícov stránok dostanete priame, kontextové odpovede.

Integrácia prebieha prostredníctvom známych webových technológií, ktoré spolupracujú. HTML vytvára chatovacie rozhranie, CSS sa stará o vizuálny dizajn, JavaScript riadi interakcie používateľa a backendové API všetko spája s AI službami. Je to podobné ako rôzne sekcie orchestra, ktoré spolupracujú na vytvorení symfónie.

V podstate budujeme most medzi prirodzenou ľudskou komunikáciou a strojovým spracovaním. Naučíte sa technickú implementáciu integrácie AI služieb a dizajnové vzory, ktoré robia interakcie intuitívnymi.

Na konci tejto lekcie bude integrácia AI menej záhadná a viac ako ďalšie API, s ktorým môžete pracovať. Pochopíte základné vzory, ktoré poháňajú aplikácie ako ChatGPT a Claude, pričom využijete rovnaké princípy webového vývoja, ktoré ste sa učili.

Takto bude vyzerať váš hotový projekt:

![Rozhranie chatovej aplikácie zobrazujúce konverzáciu medzi používateľom a AI asistentom](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.sk.png)

## Pochopenie AI: Od tajomstva k majstrovstvu

Predtým, než sa pustíme do kódu, poďme pochopiť, s čím pracujeme. Ak ste už používali API, poznáte základný vzor: pošlite požiadavku, dostanete odpoveď.

AI API fungujú podobne, ale namiesto získavania preduložených údajov z databázy generujú nové odpovede na základe vzorov naučených z obrovského množstva textu. Predstavte si to ako rozdiel medzi katalógovým systémom knižnice a znalým knihovníkom, ktorý dokáže syntetizovať informácie z viacerých zdrojov.

### Čo vlastne znamená "Generatívna AI"?

Predstavte si, ako Rosettská doska umožnila vedcom pochopiť egyptské hieroglyfy tým, že našli vzory medzi známymi a neznámymi jazykmi. Modely AI fungujú podobne – nachádzajú vzory v obrovskom množstve textu, aby pochopili, ako jazyk funguje, a potom tieto vzory využívajú na generovanie vhodných odpovedí na nové otázky.

**Jednoduché porovnanie:**
- **Tradičná databáza**: Ako žiadosť o rodný list – vždy dostanete ten istý dokument
- **Vyhľadávač**: Ako žiadosť knihovníkovi o knihy o mačkách – ukáže vám, čo je dostupné
- **Generatívna AI**: Ako otázka znalému priateľovi o mačkách – povie vám zaujímavé veci vlastnými slovami, prispôsobené tomu, čo chcete vedieť

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Ako sa modely AI učia (jednoduchá verzia)

Modely AI sa učia prostredníctvom vystavenia obrovským množstvám textov z kníh, článkov a konverzácií. Prostredníctvom tohto procesu identifikujú vzory v:
- Štruktúre myšlienok v písomnej komunikácii
- Kombináciách slov, ktoré sa často vyskytujú spolu
- Typickom priebehu konverzácií
- Kontextových rozdieloch medzi formálnou a neformálnou komunikáciou

**Je to podobné ako dekódovanie starovekých jazykov archeológmi**: analyzujú tisíce príkladov, aby pochopili gramatiku, slovnú zásobu a kultúrny kontext, a nakoniec dokážu interpretovať nové texty pomocou naučených vzorov.

### Prečo GitHub Models?

Používame GitHub Models z praktického dôvodu – poskytuje nám prístup k AI na podnikovej úrovni bez nutnosti nastavovať vlastnú AI infraštruktúru (čo, verte mi, teraz nechcete robiť!). Je to v podstate "AI ako služba" a najlepšie na tom je, že začať je zadarmo, takže môžete experimentovať bez obáv z vysokých nákladov.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Použijeme GitHub Models na našu backendovú integráciu, ktorá poskytuje prístup k profesionálnym AI schopnostiam prostredníctvom rozhrania priateľského pre vývojárov. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) slúži ako testovacie prostredie, kde môžete experimentovať s rôznymi AI modelmi a pochopiť ich schopnosti pred ich implementáciou do kódu.

![Rozhranie GitHub Models AI Playground s výberom modelu a testovacou oblasťou](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.sk.png)

**Prečo je playground taký užitočný:**
- **Vyskúšajte** rôzne AI modely ako GPT-4o-mini, Claude a ďalšie (všetko zadarmo!)
- **Otestujte** svoje nápady a otázky predtým, než napíšete akýkoľvek kód
- **Získajte** hotové útržky kódu vo vašom obľúbenom programovacom jazyku
- **Upravte** nastavenia ako úroveň kreativity a dĺžku odpovede, aby ste videli, ako ovplyvňujú výstup

Keď sa trochu pohráte, stačí kliknúť na kartu "Code" a vybrať si programovací jazyk, aby ste získali implementačný kód, ktorý potrebujete.

![Výber v playgrounde zobrazujúci možnosti generovania kódu pre rôzne programovacie jazyky](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.sk.png)

## Nastavenie backendovej integrácie v Pythone

Teraz implementujeme integráciu AI pomocou Pythonu. Python je vynikajúci pre AI aplikácie vďaka svojej jednoduchej syntaxe a výkonným knižniciam. Začneme s kódom z GitHub Models playgroundu a potom ho upravíme na opakovane použiteľnú funkciu pripravenú na produkciu.

### Pochopenie základnej implementácie

Keď si stiahnete Python kód z playgroundu, dostanete niečo, čo vyzerá takto. Nebojte sa, ak sa vám to na prvý pohľad zdá veľa – prejdeme si to krok za krokom:

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

**Čo sa deje v tomto kóde:**
- **Importujeme** nástroje, ktoré potrebujeme: `os` na čítanie environmentálnych premenných a `OpenAI` na komunikáciu s AI
- **Nastavujeme** klienta OpenAI, aby smeroval na servery GitHubu namiesto priamo na OpenAI
- **Autentifikujeme sa** pomocou špeciálneho GitHub tokenu (o tom viac neskôr!)
- **Štruktúrujeme** našu konverzáciu s rôznymi "rolami" – niečo ako nastavenie scény pre divadelnú hru
- **Posielame** našu požiadavku na AI s niektorými parametrami jemného doladenia
- **Extrahujeme** skutočný text odpovede zo všetkých údajov, ktoré sa vrátia

### Pochopenie rolí správ: Rámec AI konverzácie

Konverzácie s AI používajú špecifickú štruktúru s rôznymi "rolami", ktoré majú odlišné účely:

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

**Predstavte si to ako réžiu divadelnej hry:**
- **Rola systému**: Ako pokyny pre herca – hovorí AI, ako sa má správať, akú osobnosť má mať a ako má odpovedať
- **Rola používateľa**: Skutočná otázka alebo správa od osoby používajúcej vašu aplikáciu
- **Rola asistenta**: Odpoveď AI (tú neposielate, ale objaví sa v histórii konverzácie)

**Analógia zo skutočného života**: Predstavte si, že predstavujete priateľa niekomu na večierku:
- **Správa systému**: "Toto je moja priateľka Sarah, je lekárka, ktorá vie skvele vysvetliť medicínske koncepty jednoduchým spôsobom"
- **Správa používateľa**: "Môžete mi vysvetliť, ako fungujú vakcíny?"
- **Odpoveď asistenta**: Sarah odpovedá ako priateľská lekárka, nie ako právnička alebo kuchárka

### Pochopenie AI parametrov: Jemné doladenie správania odpovedí

Číselné parametre v API volaniach AI kontrolujú, ako model generuje odpovede. Tieto nastavenia vám umožňujú upraviť správanie AI pre rôzne použitia:

#### Teplota (0,0 až 2,0): Ovládanie kreativity

**Čo robí**: Kontroluje, ako kreatívne alebo predvídateľné budú odpovede AI.

**Predstavte si to ako úroveň improvizácie jazzového hudobníka:**
- **Teplota = 0,1**: Hranie presne tej istej melódie vždy (veľmi predvídateľné)
- **Teplota = 0,7**: Pridanie niekoľkých vkusných variácií pri zachovaní rozpoznateľnosti (vyvážená kreativita)
- **Teplota = 1,5**: Plná experimentálna improvizácia s neočakávanými zmenami (veľmi nepredvídateľné)

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

#### Max Tokens (1 až 4096+): Ovládanie dĺžky odpovede

**Čo robí**: Nastavuje limit na dĺžku odpovede AI.

**Predstavte si tokeny ako približne ekvivalentné slovám** (asi 1 token = 0,75 slova v angličtine):
- **max_tokens=50**: Krátke a výstižné (ako textová správa)
- **max_tokens=500**: Pekný odstavec alebo dva
- **max_tokens=2000**: Podrobný výklad s príkladmi

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

#### Top_p (0,0 až 1,0): Parameter zamerania

**Čo robí**: Kontroluje, ako sa AI sústredí na najpravdepodobnejšie odpovede.

**Predstavte si AI s obrovskou slovnou zásobou, zoradenou podľa pravdepodobnosti každého slova:**
- **top_p=0,1**: Zvažuje iba 10% najpravdepodobnejších slov (veľmi zamerané)
- **top_p=0,9**: Zvažuje 90% možných slov (viac kreatívne)
- **top_p=1,0**: Zvažuje všetko (maximálna rozmanitosť)

**Napríklad**: Ak sa opýtate "Obloha je zvyčajne..."
- **Nízke top_p**: Takmer určite odpovie "modrá"
- **Vysoké top_p**: Môže odpovedať "modrá", "zamračená", "rozľahlá", "menlivá", "krásna" atď.

### Spojenie všetkého: Kombinácie parametrov pre rôzne použitia

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

**Prečo na týchto parametroch záleží**: Rôzne aplikácie potrebujú rôzne typy odpovedí. Chatbot pre zákaznícku podporu by mal byť konzistentný a faktický (nízka teplota), zatiaľ čo kreatívny asistent pre písanie by mal byť imaginatívny a rozmanitý (vysoká teplota). Pochopenie týchto parametrov vám dáva kontrolu nad osobnosťou a štýlom odpovedí AI.
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
- **Prijíma** dva parametre: používateľský podnet a voliteľnú systémovú správu
- **Poskytuje** predvolenú systémovú správu pre všeobecné správanie asistenta
- **Používa** správne typové náznaky Pythonu pre lepšiu dokumentáciu kódu
- **Obsahuje** podrobný docstring vysvetľujúci účel a parametre funkcie
- **Vracia** iba obsah odpovede, čo uľahčuje jej použitie v našom webovom API
- **Zachováva** rovnaké parametre modelu pre konzistentné správanie AI

### Magia systémových podnetov: Programovanie osobnosti AI

Ak parametre kontrolujú, ako AI myslí, systémové podnety kontrolujú, kým si AI myslí, že je. Toto je úprimne jedna z najzaujímavejších častí práce s AI – v podstate dávate AI kompletnú osobnosť, úroveň odbornosti a štýl komunikácie.

**Predstavte si systémové podnety ako obsadzovanie rôznych hercov do rôznych rolí**: Namiesto jedného generického asistenta môžete vytvoriť špecializovaných expertov pre rôzne situácie. Potrebujete trpezlivého učiteľa? Kreatívneho partnera na brainstorming? Rázneho obchodného poradcu? Stačí zmeniť systémový podnet!

#### Prečo sú systémové podnety také silné

Tu je fascinujúca časť: Modely AI boli trénované na nespočetných konverzáciách, kde ľudia prijímajú rôzne role a úrovne odbornosti. Keď dáte AI konkrétnu rolu, je to ako zapnutie prepínača, ktorý aktivuje všetky tieto naučené vzory.

**Je to ako metóda herectva pre AI**: Povedzte hercovi "si múdry starý profesor" a sledujte, ako automaticky upraví svoje držanie tela, slovnú zásobu a správanie. AI robí niečo pozoruhodne podobné s jazykovými vzormi.

#### Tvorba efektívnych systémových podnetov: Umenie a veda

**Anatómia skvelého systémového podnetu:**
1. **Rola/Identita**: Kto je AI?
2. **Odbornosť**: Čo vie?
3. **Štýl komunikácie**: Ako hovorí?
4. **Konkrétne pokyny**: Na čo by sa mala zamerať?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Príklady systémových podnetov s kontextom

Pozrime sa, ako rôzne systémové podnety vytvárajú úplne odlišné osobnosti AI:

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

#### Ukážka systémových podnetov v praxi

Otestujme tú istú otázku s rôznymi systémovými podnetmi, aby sme videli dramatické rozdiely:

**Otázka**: "Ako mám riešiť autentifikáciu používateľov vo svojej webovej aplikácii?"

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

#### Pokročilé techniky systémových podnetov

**1. Nastavenie kontextu**: Poskytnite AI základné informácie
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formátovanie výstupu**: Povedzte AI, ako má štruktúrovať odpovede
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

**3. Nastavenie obmedzení**: Definujte, čo AI nemá robiť
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Prečo je to dôležité pre váš chatový asistent

Pochopenie systémových podnetov vám dáva neuveriteľnú moc vytvárať špecializovaných AI asistentov:
- **Chatbot pre zákaznícku podporu**: Nápomocný, trpezlivý, oboznámený s politikami
- **Učiteľ**: Povzbudzujúci, krok za krokom, kontroluje pochopenie
- **Kreatívny partner**: Imaginatívny, rozvíja nápady, pýta sa "čo ak?"
- **Technický expert**: Presný, detailný, zameraný na bezpečnosť

**Kľúčový
**Tu je dôvod, prečo je FastAPI ideálny pre to, čo budujeme:**
- **Asynchrónne predvolene**: Dokáže spracovať viacero požiadaviek na AI naraz bez toho, aby sa zasekol
- **Automatická dokumentácia**: Navštívte `/docs` a získajte krásnu, interaktívnu stránku API dokumentácie zadarmo
- **Vstavaná validácia**: Zachytí chyby skôr, než spôsobia problémy
- **Extrémne rýchly**: Jeden z najrýchlejších Python frameworkov
- **Moderný Python**: Využíva všetky najnovšie a najlepšie funkcie Pythonu

**A tu je dôvod, prečo vôbec potrebujeme backend:**

**Bezpečnosť**: Váš API kľúč pre AI je ako heslo – ak ho vložíte do frontendového JavaScriptu, ktokoľvek, kto si pozrie zdrojový kód vašej webovej stránky, ho môže ukradnúť a použiť vaše AI kredity. Backend uchováva citlivé údaje bezpečne.

**Obmedzenie rýchlosti a kontrola**: Backend vám umožňuje kontrolovať, ako často môžu používatelia posielať požiadavky, implementovať autentifikáciu používateľov a pridávať logovanie na sledovanie používania.

**Spracovanie dát**: Možno budete chcieť ukladať konverzácie, filtrovať nevhodný obsah alebo kombinovať viaceré AI služby. Backend je miesto, kde táto logika žije.

**Architektúra pripomína model klient-server:**
- **Frontend**: Vrstva používateľského rozhrania pre interakciu
- **Backend API**: Vrstva spracovania požiadaviek a smerovania
- **AI služba**: Externé výpočty a generovanie odpovedí
- **Environment Variables**: Bezpečné uloženie konfigurácie a prihlasovacích údajov

### Pochopenie toku požiadaviek a odpovedí

Pozrime sa, čo sa stane, keď používateľ pošle správu:

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

**Pochopenie jednotlivých krokov:**
1. **Interakcia používateľa**: Osoba píše do rozhrania chatu
2. **Spracovanie na frontende**: JavaScript zachytí vstup a formátuje ho ako JSON
3. **Validácia API**: FastAPI automaticky validuje požiadavku pomocou Pydantic modelov
4. **Integrácia AI**: Backend pridá kontext (systémový prompt) a zavolá AI službu
5. **Spracovanie odpovede**: API prijme odpoveď od AI a môže ju upraviť, ak je to potrebné
6. **Zobrazenie na frontende**: JavaScript zobrazí odpoveď v rozhraní chatu

### Pochopenie architektúry API

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

### Vytvorenie aplikácie FastAPI

Postupne si vytvoríme naše API. Vytvorte súbor s názvom `api.py` s nasledujúcim kódom pre FastAPI:

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

**Pochopenie implementácie FastAPI:**
- **Importuje** FastAPI pre moderné funkcie webového frameworku a Pydantic pre validáciu dát
- **Vytvára** automatickú dokumentáciu API (dostupnú na `/docs` po spustení servera)
- **Povoľuje** CORS middleware, aby umožnil požiadavky z frontendu z rôznych zdrojov
- **Definuje** Pydantic modely pre automatickú validáciu požiadaviek/odpovedí a dokumentáciu
- **Používa** asynchrónne endpointy pre lepší výkon pri súbežných požiadavkách
- **Implementuje** správne HTTP status kódy a spracovanie chýb pomocou HTTPException
- **Zahŕňa** štruktúrované logovanie pre monitorovanie a ladenie
- **Poskytuje** endpoint na kontrolu stavu služby

**Kľúčové výhody FastAPI oproti tradičným frameworkom:**
- **Automatická validácia**: Pydantic modely zabezpečujú integritu dát pred ich spracovaním
- **Interaktívna dokumentácia**: Navštívte `/docs` pre automaticky generovanú, testovateľnú dokumentáciu API
- **Typová bezpečnosť**: Typové anotácie v Pythone zabraňujú chybám počas behu a zlepšujú kvalitu kódu
- **Podpora asynchrónnosti**: Spracovanie viacerých požiadaviek na AI súčasne bez blokovania
- **Výkon**: Výrazne rýchlejšie spracovanie požiadaviek pre aplikácie v reálnom čase

### Pochopenie CORS: Strážca bezpečnosti webu

CORS (Cross-Origin Resource Sharing) je ako strážca bezpečnosti v budove, ktorý kontroluje, či sú návštevníci oprávnení vstúpiť. Poďme pochopiť, prečo je to dôležité a ako to ovplyvňuje vašu aplikáciu.

#### Čo je CORS a prečo existuje?

**Problém**: Predstavte si, že by akákoľvek webová stránka mohla posielať požiadavky na webovú stránku vašej banky vo vašom mene bez vášho povolenia. To by bola bezpečnostná nočná mora! Prehliadače tomu predchádzajú predvoleným nastavením "Same-Origin Policy."

**Same-Origin Policy**: Prehliadače umožňujú webovým stránkam posielať požiadavky iba na rovnakú doménu, port a protokol, z ktorých boli načítané.

**Analógia zo skutočného sveta**: Je to ako bezpečnosť v bytovom dome – iba obyvatelia (rovnaký pôvod) môžu predvolene vstúpiť do budovy. Ak chcete, aby vás navštívil priateľ (iný pôvod), musíte výslovne povedať bezpečnosti, že je to v poriadku.

#### CORS vo vašom vývojovom prostredí

Počas vývoja váš frontend a backend bežia na rôznych portoch:
- Frontend: `http://localhost:3000` (alebo file:// ak otvárate HTML priamo)
- Backend: `http://localhost:5000`

Tieto sa považujú za "rôzne pôvody," aj keď sú na rovnakom počítači!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Čo CORS konfigurácia robí v praxi:**
- **Pridáva** špeciálne HTTP hlavičky do odpovedí API, ktoré hovoria prehliadačom "táto požiadavka z iného pôvodu je povolená"
- **Spracováva** "preflight" požiadavky (prehliadače niekedy kontrolujú povolenia pred odoslaním skutočnej požiadavky)
- **Zabraňuje** obávanému chybe "blocked by CORS policy" vo vašej konzole prehliadača

#### CORS bezpečnosť: Vývoj vs produkcia

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

**Prečo na tom záleží**: Vo vývoji je `CORS(app)` ako nechať odomknuté dvere – pohodlné, ale nie bezpečné. V produkcii chcete presne špecifikovať, ktoré webové stránky môžu komunikovať s vaším API.

#### Bežné scenáre CORS a riešenia

| Scenár | Problém | Riešenie |
|--------|---------|----------|
| **Lokálny vývoj** | Frontend nemôže dosiahnuť backend | Pridajte CORSMiddleware do FastAPI |
| **GitHub Pages + Heroku** | Nasadený frontend nemôže dosiahnuť API | Pridajte URL GitHub Pages do CORS pôvodov |
| **Vlastná doména** | CORS chyby v produkcii | Aktualizujte CORS pôvody tak, aby zodpovedali vašej doméne |
| **Mobilná aplikácia** | Aplikácia nemôže dosiahnuť webové API | Pridajte doménu aplikácie alebo opatrne použite `*` |

**Tip**: Môžete skontrolovať CORS hlavičky v nástrojoch pre vývojárov prehliadača v záložke Sieť. Hľadajte hlavičky ako `Access-Control-Allow-Origin` v odpovedi.

### Spracovanie chýb a validácia

Všimnite si, ako naše API zahŕňa správne spracovanie chýb:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Kľúčové princípy validácie:**
- **Kontroluje** požadované polia pred spracovaním požiadaviek
- **Vracia** zmysluplné chybové správy vo formáte JSON
- **Používa** vhodné HTTP status kódy (400 pre zlé požiadavky)
- **Poskytuje** jasnú spätnú väzbu, ktorá pomáha frontendovým vývojárom odstraňovať problémy

## Nastavenie a spustenie vášho backendu

Teraz, keď máme pripravenú integráciu AI a server FastAPI, poďme všetko spustiť. Proces nastavenia zahŕňa inštaláciu Python závislostí, konfiguráciu environmentálnych premenných a spustenie vášho vývojového servera.

### Nastavenie Python prostredia

Poďme nastaviť vaše Python vývojové prostredie. Virtuálne prostredia sú ako oddelené priestory – každý projekt má svoj vlastný izolovaný priestor so špecifickými nástrojmi a závislosťami, čo zabraňuje konfliktom medzi rôznymi projektmi.

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

**Čo sme práve urobili:**
- **Vytvorili** sme vlastnú malú Python bublinu, kde môžeme inštalovať balíčky bez ovplyvnenia čohokoľvek iného
- **Aktivovali** sme ju, aby náš terminál vedel používať toto konkrétne prostredie
- **Nainštalovali** sme základné veci: OpenAI pre AI, FastAPI pre naše webové API, Uvicorn na jeho spustenie a python-dotenv na bezpečné spravovanie tajných údajov

**Kľúčové závislosti vysvetlené:**
- **FastAPI**: Moderný, rýchly webový framework s automatickou dokumentáciou API
- **Uvicorn**: Extrémne rýchly ASGI server, ktorý spúšťa aplikácie FastAPI
- **OpenAI**: Oficiálna knižnica pre GitHub Models a integráciu OpenAI API
- **python-dotenv**: Bezpečné načítanie environmentálnych premenných zo súborov .env

### Konfigurácia prostredia: Udržanie tajomstiev v bezpečí

Predtým, než spustíme naše API, musíme sa porozprávať o jednej z najdôležitejších lekcií vo webovom vývoji: ako udržať vaše tajomstvá skutočne tajné. Environmentálne premenné sú ako bezpečný trezor, ku ktorému má prístup iba vaša aplikácia.

#### Čo sú environmentálne premenné?

**Predstavte si environmentálne premenné ako bezpečnostnú schránku** – vložíte tam svoje cennosti a iba vy (a vaša aplikácia) máte kľúč na ich získanie. Namiesto toho, aby ste písali citlivé informácie priamo do vášho kódu (kde ich môže vidieť doslova každý), ich bezpečne uložíte do prostredia.

**Tu je rozdiel:**
- **Nesprávny spôsob**: Napísať svoje heslo na lepiaci papierik a prilepiť ho na monitor
- **Správny spôsob**: Uchovávať svoje heslo v bezpečnom správcovi hesiel, ku ktorému máte prístup iba vy

#### Prečo sú environmentálne premenné dôležité

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

**Čo sa stane, keď tvrdohlavo zakódujete tajomstvá:**
1. **Zverejnenie vo verziovom systéme**: Každý, kto má prístup k vášmu Git repozitáru, vidí váš API kľúč
2. **Verejné repozitáre**: Ak ich nahráte na GitHub, váš kľúč je viditeľný pre celý internet
3. **Zdieľanie v tíme**: Ostatní vývojári pracujúci na vašom projekte získajú prístup k vášmu osobnému API kľúču
4. **Bezpečnostné porušenia**: Ak niekto ukradne váš API kľúč, môže použiť vaše AI kredity

#### Nastavenie súboru prostredia

Vytvorte súbor `.env` vo vašom backendovom adresári. Tento súbor uchováva vaše tajomstvá lokálne:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Pochopenie súboru .env:**
- **Jedno tajomstvo na riadok** vo formáte `KEY=value`
- **Žiadne medzery** okolo znamienka rovnosti
- **Nie sú potrebné úvodzovky** okolo hodnôt (zvyčajne)
- **Komentáre** začínajú `#`

#### Vytvorenie osobného prístupového tokenu GitHub

Váš GitHub token je ako špeciálne heslo, ktoré dáva vašej aplikácii povolenie používať AI služby GitHub:

**Krok za krokom vytvorenie tokenu:**
1. **Prejdite na GitHub Nastavenia** → Nastavenia vývojára → Osobné prístupové tokeny → Tokeny (klasické)
2. **Kliknite na "Vytvoriť nový token (klasický)"**
3. **Nastavte expiráciu** (30 dní na testovanie, dlhšie na produkciu)
4. **Vyberte oprávnenia**: Zaškrtnite "repo" a akékoľvek ďalšie potrebné povolenia
5. **Vytvorte token** a okamžite ho skopírujte (neskôr ho už neuvidíte!)
6. **Vložte ho do vášho .env súboru**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Načítanie environmentálnych premenných v Pythone

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

**Čo tento kód robí:**
- **Načíta** váš .env súbor a sprístupní premenné pre Python
- **Skontroluje**, či existuje požadovaný token (dobré spracovanie chýb!)
- **Vyvolá** jasnú chybu, ak token chýba
- **Používa** token bezpečne bez jeho zverejnenia v kóde

#### Git bezpečnosť: Súbor .gitignore

Váš `.gitignore` súbor hovorí Git-u, ktoré súbory nikdy nesledovať alebo nahrávať:

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

**Prečo je to dôležité**: Keď pridáte `.env` do `.gitignore`, Git bude ignorovať váš environmentálny súbor, čím zabránite jeho náhodnému nahratiu na GitHub.

#### Rôzne prostredia, rôzne tajomstvá

Profesionálne aplikácie používajú rôzne API kľúče pre rôzne prostredia:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Prečo na tom záleží**: Nechcete, aby vaše experimenty vo vývoji ovplyvnili váš produkčný AI kvótu, a chcete rôzne úrovne bezpečnosti pre rôzne prostredia.

### Spustenie vášho vývojového servera: Oživenie vášho FastAPI

Teraz prichádza vzrušujúci moment – spustenie vášho vývojového servera FastAPI a sledovanie, ako vaša AI integrácia ožíva! FastAPI používa Uvicorn, extrémne rýchly ASGI server, ktorý je špeciálne navrhnutý pre asynchrónne Python aplikácie.

#### Pochopenie procesu spustenia servera FastAPI

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Keď spustíte tento príkaz, tu je, čo sa deje v zákulisí:

**1. Python načíta vašu aplikáciu FastAPI**:
- Importuje všetky potrebné knižnice (FastAPI, Pydantic, OpenAI, atď.)
- Načíta environmentálne premenné z vášho `.env` súboru
- Vytvorí inštanciu aplikácie FastAPI s automatickou dokumentáciou

**2. Uvicorn konfiguruje ASGI server**:
- Pripojí sa na port 5000 s možnosťami asynchrónneho spracovania požiadaviek
- Nastaví smerovanie požiadaviek s automatickou validáciou
- Povoľuje automatické obnovenie počas vývoja (reštart pri zmene súborov)
- Generuje interaktívnu dokumentáciu API

**3. Server začne počúvať**:
- Váš terminál ukáže: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Server dokáže spracovať viacero súbežných požiadaviek na AI
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
-
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

#### Riešenie bežných problémov pri spustení

| Chybová správa | Čo znamená | Ako opraviť |
|----------------|------------|-------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI nie je nainštalovaný | Spustite `pip install fastapi uvicorn` vo vašom virtuálnom prostredí |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI server nie je nainštalovaný | Spustite `pip install uvicorn` vo vašom virtuálnom prostredí |
| `KeyError: 'GITHUB_TOKEN'` | Premenná prostredia nebola nájdená | Skontrolujte váš súbor `.env` a volanie `load_dotenv()` |
| `Address already in use` | Port 5000 je obsadený | Ukončite iné procesy používajúce port 5000 alebo zmeňte port |
| `ValidationError` | Dáta požiadavky nezodpovedajú modelu Pydantic | Skontrolujte, či formát vašej požiadavky zodpovedá očakávanej schéme |
| `HTTPException 422` | Nepoužiteľná entita | Validácia požiadavky zlyhala, skontrolujte `/docs` pre správny formát |
| `OpenAI API error` | Autentifikácia AI služby zlyhala | Overte, či je váš GitHub token správny a má potrebné povolenia |

#### Najlepšie praktiky pri vývoji

**Automatické načítanie zmien**: FastAPI s Uvicorn poskytuje automatické načítanie zmien pri ukladaní zmien v súboroch Pythonu. To znamená, že môžete upravovať kód a okamžite ho testovať bez manuálneho reštartovania.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Logovanie pre vývoj**: Pridajte logovanie, aby ste pochopili, čo sa deje:

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

**Prečo logovanie pomáha**: Počas vývoja môžete presne vidieť, aké požiadavky prichádzajú, aké odpovede poskytuje AI a kde sa vyskytujú chyby. To výrazne urýchľuje proces ladenia.

### Konfigurácia pre GitHub Codespaces: Jednoduchý vývoj v cloude

GitHub Codespaces je ako mať výkonný vývojový počítač v cloude, ku ktorému máte prístup z akéhokoľvek prehliadača. Ak pracujete v Codespaces, existuje niekoľko dodatočných krokov, aby bol váš backend prístupný pre frontend.

#### Pochopenie siete Codespaces

V lokálnom vývojovom prostredí všetko beží na rovnakom počítači:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (alebo file://)

V Codespaces vaše vývojové prostredie beží na serveroch GitHubu, takže "localhost" má iný význam. GitHub automaticky vytvára verejné URL pre vaše služby, ale musíte ich správne nakonfigurovať.

#### Krok za krokom konfigurácia Codespaces

**1. Spustite váš backend server**:
```bash
cd backend
python api.py
```

Uvidíte známe štartovacie hlásenie FastAPI/Uvicorn, ale všimnite si, že beží vo vnútri prostredia Codespace.

**2. Konfigurujte viditeľnosť portu**:
- Nájdite kartu "Ports" v dolnom paneli VS Code
- Nájdite port 5000 v zozname
- Kliknite pravým tlačidlom na port 5000
- Vyberte "Port Visibility" → "Public"

**Prečo ho sprístupniť verejne?** Štandardne sú porty Codespace súkromné (prístupné iba vám). Sprístupnenie verejne umožňuje vášmu frontendu (ktorý beží v prehliadači) komunikovať s backendom.

**3. Získajte vaše verejné URL**:
Po sprístupnení portu verejne uvidíte URL ako:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Aktualizujte konfiguráciu frontendu**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Pochopenie URL Codespace

URL Codespace majú predvídateľný vzor:
```
https://[codespace-name]-[port].app.github.dev
```

**Rozdelenie:**
- `codespace-name`: Jedinečný identifikátor pre váš Codespace (zvyčajne obsahuje vaše používateľské meno)
- `port`: Číslo portu, na ktorom beží vaša služba (5000 pre našu aplikáciu FastAPI)
- `app.github.dev`: Doména GitHubu pre aplikácie Codespace

#### Testovanie nastavenia Codespace

**1. Testujte backend priamo**:
Otvorte vaše verejné URL v novom okne prehliadača. Mali by ste vidieť:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testujte pomocou vývojárskych nástrojov prehliadača**:
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

#### Codespaces vs Lokálny vývoj

| Aspekt | Lokálny vývoj | GitHub Codespaces |
|--------|---------------|-------------------|
| **Čas nastavenia** | Dlhší (inštalácia Pythonu, závislostí) | Okamžitý (predkonfigurované prostredie) |
| **Prístup k URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfigurácia portov** | Automatická | Manuálna (sprístupnenie portov verejne) |
| **Ukladanie súborov** | Lokálny počítač | GitHub repozitár |
| **Spolupráca** | Ťažké zdieľanie prostredia | Jednoduché zdieľanie odkazu na Codespace |
| **Závislosť na internete** | Iba pre volania AI API | Potrebná pre všetko |

#### Tipy pre vývoj v Codespaces

**Premenné prostredia v Codespaces**:
Váš súbor `.env` funguje rovnako v Codespaces, ale premenné prostredia môžete nastaviť aj priamo v Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Správa portov**:
- Codespaces automaticky detekuje, keď vaša aplikácia začne počúvať na porte
- Môžete súčasne presmerovať viacero portov (užitočné, ak neskôr pridáte databázu)
- Porty zostanú prístupné, pokiaľ váš Codespace beží

**Pracovný postup vývoja**:
1. Upravte kód vo VS Code
2. FastAPI sa automaticky načíta (vďaka režimu reload v Uvicorn)
3. Okamžite testujte zmeny cez verejné URL
4. Uložte a odošlite zmeny, keď ste pripravení

> 💡 **Tip**: Počas vývoja si uložte záložku na URL vášho backendu Codespace. Keďže názvy Codespace sú stabilné, URL sa nezmení, pokiaľ používate ten istý Codespace.

## Vytvorenie frontendového rozhrania pre chat: Miesto, kde sa stretávajú ľudia a AI

Teraz vytvoríme používateľské rozhranie – časť, ktorá určuje, ako ľudia komunikujú s vaším AI asistentom. Rovnako ako dizajn rozhrania pôvodného iPhonu, zameriavame sa na to, aby bola zložitá technológia intuitívna a prirodzená na používanie.

### Pochopenie modernej frontendovej architektúry

Naše rozhranie pre chat bude tzv. "Jednostránková aplikácia" alebo SPA. Namiesto staromódneho prístupu, kde každé kliknutie načíta novú stránku, naša aplikácia sa bude aktualizovať plynulo a okamžite:

**Staré webové stránky**: Ako čítanie fyzickej knihy – otáčate na úplne nové stránky
**Naša chatovacia aplikácia**: Ako používanie telefónu – všetko plynule prechádza a aktualizuje sa

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

### Tri piliere frontendového vývoja

Každá frontendová aplikácia – od jednoduchých webových stránok po komplexné aplikácie ako Discord alebo Slack – je postavená na troch základných technológiách. Myslite na ne ako na základ všetkého, čo vidíte a s čím interagujete na webe:

**HTML (Štruktúra)**: Toto je váš základ
- Určuje, aké prvky existujú (tlačidlá, textové polia, kontajnery)
- Dáva obsahu význam (toto je nadpis, toto je formulár, atď.)
- Vytvára základnú štruktúru, na ktorej sa všetko ostatné stavia

**CSS (Prezentácia)**: Toto je váš interiérový dizajnér
- Robí všetko krásnym (farby, písma, rozloženia)
- Rieši rôzne veľkosti obrazoviek (telefón vs laptop vs tablet)
- Vytvára plynulé animácie a vizuálnu spätnú väzbu

**JavaScript (Správanie)**: Toto je váš mozog
- Reaguje na to, čo používatelia robia (kliknutia, písanie, posúvanie)
- Komunikuje s backendom a aktualizuje stránku
- Robí všetko interaktívnym a dynamickým

**Myslite na to ako na architektonický dizajn:**
- **HTML**: Štrukturálny plán (definovanie priestorov a vzťahov)
- **CSS**: Estetický a environmentálny dizajn (vizuálny štýl a používateľská skúsenosť)
- **JavaScript**: Mechanické systémy (funkcionalita a interaktivita)

### Prečo záleží na modernej architektúre JavaScriptu

Naša chatovacia aplikácia bude používať moderné JavaScriptové vzory, ktoré uvidíte v profesionálnych aplikáciách. Pochopenie týchto konceptov vám pomôže rásť ako vývojár:

**Architektúra založená na triedach**: Organizujeme náš kód do tried, čo je ako vytváranie plánov pre objekty  
**Async/Await**: Moderný spôsob, ako spracovať operácie, ktoré trvajú určitý čas (napr. volania API)  
**Programovanie riadené udalosťami**: Naša aplikácia reaguje na akcie používateľa (kliknutia, stlačenia kláves) namiesto toho, aby bežala v slučke  
**Manipulácia s DOM**: Dynamická aktualizácia obsahu webovej stránky na základe interakcií používateľa a odpovedí API  

### Nastavenie štruktúry projektu

Vytvorte frontendový adresár s touto organizovanou štruktúrou:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Pochopenie architektúry:**
- **Oddelenie** záležitostí medzi štruktúrou (HTML), správaním (JavaScript) a prezentáciou (CSS)
- **Udržiavanie** jednoduchej štruktúry súborov, ktorá je ľahko navigovateľná a upraviteľná
- **Dodržiavanie** najlepších praktík webového vývoja pre organizáciu a udržateľnosť

### Vytvorenie HTML základu: Semantická štruktúra pre prístupnosť

Začnime štruktúrou HTML. Moderný webový vývoj kladie dôraz na "semantické HTML" – používanie HTML prvkov, ktoré jasne opisujú svoj účel, nielen svoj vzhľad. To robí vašu aplikáciu prístupnou pre čítačky obrazovky, vyhľadávače a iné nástroje.

**Prečo záleží na semantickom HTML**: Predstavte si, že opisujete svoju chatovaciu aplikáciu niekomu cez telefón. Povedali by ste "je tam hlavička s názvom, hlavná oblasť, kde sa zobrazujú konverzácie, a formulár na spodku na písanie správ." Semantické HTML používa prvky, ktoré zodpovedajú tomuto prirodzenému opisu.

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

**Pochopenie každého HTML prvku a jeho účelu:**

#### Štruktúra dokumentu
- **`<!DOCTYPE html>`**: Informuje prehliadač, že ide o moderný HTML5
- **`<html lang="en">`**: Určuje jazyk stránky pre čítačky obrazovky a nástroje na preklad
- **`<meta charset="UTF-8">`**: Zabezpečuje správne kódovanie znakov pre medzinárodný text
- **`<meta name="viewport"...>`**: Robí stránku mobilne responzívnou kontrolou priblíženia a mierky

#### Semantické prvky
- **`<header>`**: Jasne identifikuje hornú sekciu s názvom a popisom
- **`<main>`**: Označuje primárnu obsahovú oblasť (kde prebiehajú konverzácie)
- **`<form>`**: Semanticky správne pre vstup používateľa, umožňuje správnu navigáciu klávesnicou

#### Funkcie prístupnosti
- **`role="log"`**: Informuje čítačky obrazovky, že táto oblasť obsahuje chronologický záznam správ
- **`aria-live="polite"`**: Oznámi nové správy čítačkám obrazovky bez prerušenia
- **`aria-label`**: Poskytuje popisné označenia pre ovládacie prvky formulára
- **`required`**: Prehliadač overí, že používateľ zadal správu pred odoslaním

#### Integrácia CSS a JavaScriptu
- **`class` atribúty**: Poskytujú háčiky na štýlovanie pre CSS (napr. `chat-container`, `input-group`)
- **`id` atribúty**: Umožňujú JavaScriptu nájsť a manipulovať konkrétne prvky
- **Umiestnenie skriptu**: Súbor JavaScript sa načíta na konci, aby sa najskôr načítal HTML

**Prečo táto štruktúra funguje:**
- **Logický tok**: Hlavička → Hlavný obsah → Formulár na zadávanie správ zodpovedá prirodzenému poradiu čítania
- **Prístupné klávesnicou**: Používatelia môžu prechádzať všetky interaktívne prvky pomocou klávesnice
- **Prívetivé pre čítačky obrazovky**: Jasné orientačné body a popisy pre zrakovo postihnutých používateľov
- **Mobilne responzívne**: Meta tag viewport umožňuje responzívny dizajn
- **Progresívne vylepšenie**: Funguje aj v prípade, že CSS alebo JavaScript zlyhá

### Pridanie interaktívneho JavaScriptu: Logika modernej webovej aplikácie

Teraz vytvoríme JavaScript, ktorý oživí naše chatovacie rozhranie. Použijeme moderné JavaScriptové vzory, ktoré sa vyskytujú v profesionálnom webovom vývoji, vrátane tried ES6, async/await a programovania riadeného udalosťami.

#### Pochopenie modernej JavaScriptovej architektúry

Namiesto písania procedurálneho kódu (séria funkcií, ktoré sa vykonávajú v poradí), vytvoríme **architektúru založenú na triedach**. Myslite na triedu ako na plán na vytvorenie objektov – podobne ako plán architekta môže byť použitý na stavbu viacerých domov.

**Prečo používať triedy pre webové aplikácie?**
- **Organizácia**: Všetka súvisiaca funkcionalita je zoskupená
- **Znovupoužiteľnosť**: Môžete vytvoriť viacero chatovacích inštancií na tej istej stránke
- **Udržateľnosť**: Jednoduchšie ladíte a upravujete konkrétne funkcie
- **Profesionálny štandard**: Tento vzor sa používa v frameworkoch ako React, Vue a Angular

Vytvorte `app.js` s týmto moderným, dobre štruktúrovaným JavaScriptom:

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

#### Pochopenie každého JavaScriptového konceptu

**Štruktúra tried ES6**:
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

**Programovanie riadené udalosťami**:
Namiesto neustáleho kontrolovania, či sa niečo stalo, "počúvame" udalosti:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulácia s DOM**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Bezpečnosť a najlepšie praktiky

**Prevencia XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Prečo na tom záleží**: Ak používateľ napíše `<script>alert('hack')</script>`, táto funkcia zabezpečí, že sa zobrazí ako text, namiesto toho, aby sa vykonala ako kód.

**Spracovanie chýb**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Úvahy o používateľ
Táto architektúra je škálovateľná – môžete ľahko pridať funkcie ako úprava správ, nahrávanie súborov alebo viaceré vlákna konverzácií bez potreby prepisovania základnej štruktúry.

### Štýlovanie vášho chatovacieho rozhrania

Teraz vytvoríme moderné, vizuálne atraktívne chatovacie rozhranie pomocou CSS. Dobré štýlovanie dodáva vašej aplikácii profesionálny vzhľad a zlepšuje celkový používateľský zážitok. Použijeme moderné funkcie CSS ako Flexbox, CSS Grid a vlastné vlastnosti pre responzívny a prístupný dizajn.

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

**Porozumenie architektúre CSS:**
- **Používa** vlastné vlastnosti CSS (premenné) pre konzistentnú tému a jednoduchú údržbu
- **Implementuje** rozloženie Flexbox pre responzívny dizajn a správne zarovnanie
- **Zahŕňa** plynulé animácie pre zobrazovanie správ bez rušivých efektov
- **Poskytuje** vizuálne rozlíšenie medzi správami používateľa, odpoveďami AI a chybovými stavmi
- **Podporuje** responzívny dizajn, ktorý funguje na stolných počítačoch aj mobilných zariadeniach
- **Zohľadňuje** prístupnosť s preferenciami zníženého pohybu a správnymi kontrastnými pomermi
- **Ponúka** podporu tmavého režimu na základe preferencií systému používateľa

### Konfigurácia URL adresy vášho backendu

Posledným krokom je aktualizácia `BASE_URL` vo vašom JavaScripte tak, aby zodpovedala vášmu backend serveru:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Určenie URL adresy vášho backendu:**
- **Lokálny vývoj**: Použite `http://localhost:5000`, ak spúšťate frontend aj backend lokálne
- **Codespaces**: Nájdite URL adresu vášho backendu na karte Ports po tom, ako sprístupníte port 5000
- **Produkcia**: Nahraďte skutočnou doménou pri nasadení na hostingovú službu

> 💡 **Tip na testovanie**: Môžete testovať váš backend priamo návštevou koreňovej URL adresy vo vašom prehliadači. Mali by ste vidieť uvítaciu správu z vášho FastAPI servera.

## Testovanie a nasadenie

Teraz, keď máte postavené frontendové aj backendové komponenty, otestujme, či všetko funguje spolu, a preskúmajme možnosti nasadenia na zdieľanie vášho chatovacieho asistenta s ostatnými.

### Lokálny testovací postup

Postupujte podľa týchto krokov na testovanie vašej kompletnej aplikácie:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Postup krok za krokom:**

1. **Spustite váš backend server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Overte, že API funguje**:
   - Otvorte `http://localhost:5000` vo vašom prehliadači
   - Mali by ste vidieť uvítaciu správu z vášho FastAPI servera

3. **Otvorte váš frontend**:
   - Prejdite do adresára vášho frontendu
   - Otvorte `index.html` vo vašom webovom prehliadači
   - Alebo použite rozšírenie Live Server vo VS Code pre lepší vývojový zážitok

4. **Otestujte funkčnosť chatu**:
   - Napíšte správu do vstupného poľa
   - Kliknite na "Odoslať" alebo stlačte Enter
   - Overte, či AI odpovedá správne
   - Skontrolujte konzolu prehliadača pre akékoľvek chyby v JavaScripte

### Riešenie bežných problémov

| Problém | Príznaky | Riešenie |
|---------|----------|----------|
| **CORS chyba** | Frontend nemôže dosiahnuť backend | Uistite sa, že FastAPI CORSMiddleware je správne nakonfigurovaný |
| **Chyba API kľúča** | 401 Neautorizované odpovede | Skontrolujte vašu environmentálnu premennú `GITHUB_TOKEN` |
| **Odmietnuté pripojenie** | Sieťové chyby vo fronte | Overte URL adresu backendu a či Flask server beží |
| **Žiadna odpoveď AI** | Prázdne alebo chybové odpovede | Skontrolujte logy backendu pre problémy s kvótou API alebo autentifikáciou |

**Bežné kroky pri ladení:**
- **Skontrolujte** konzolu nástrojov pre vývojárov prehliadača pre chyby v JavaScripte
- **Overte** kartu Siete, či ukazuje úspešné API požiadavky a odpovede
- **Preskúmajte** výstup terminálu backendu pre chyby v Pythone alebo problémy s API
- **Potvrďte**, že environmentálne premenné sú správne načítané a dostupné

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite chatovacieho asistenta pridaním histórie konverzácií a uchovávaním správ. Táto výzva vám pomôže pochopiť, ako spravovať stav v chatovacích aplikáciách a implementovať ukladanie dát pre lepší používateľský zážitok.

**Úloha:** Upraviť chatovaciu aplikáciu tak, aby obsahovala históriu konverzácií, ktorá pretrváva medzi reláciami. Pridajte funkciu na uloženie správ do lokálneho úložiska, zobrazte históriu konverzácií pri načítaní stránky a pridajte tlačidlo "Vymazať históriu". Tiež implementujte indikátory písania a časové pečiatky správ, aby bol zážitok z chatu realistickejší.

Viac informácií o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) nájdete tu.

## Zadanie: Vytvorte svojho osobného AI asistenta

Teraz vytvoríte vlastnú implementáciu AI asistenta. Namiesto jednoduchého kopírovania kódu z tutoriálu je to príležitosť aplikovať koncepty a vytvoriť niečo, čo odráža vaše vlastné záujmy a použitie.

### Požiadavky na projekt

Nastavme váš projekt s čistou, organizovanou štruktúrou:

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

### Hlavné úlohy implementácie

**Vývoj backendu:**
- **Použite** náš kód FastAPI a prispôsobte si ho
- **Vytvorte** jedinečnú osobnosť AI – možno užitočný kuchársky asistent, kreatívny partner na písanie alebo študijný pomocník?
- **Pridajte** spoľahlivé spracovanie chýb, aby sa vaša aplikácia nezrútila, keď sa niečo pokazí
- **Napíšte** jasnú dokumentáciu pre každého, kto chce pochopiť, ako váš API funguje

**Vývoj frontendu:**
- **Vytvorte** chatovacie rozhranie, ktoré je intuitívne a príjemné
- **Napíšte** čistý, moderný JavaScript, na ktorý budete hrdí
- **Navrhnite** vlastné štýlovanie, ktoré odráža osobnosť vášho AI – zábavné a farebné? Čisté a minimalistické? Je to úplne na vás!
- **Uistite sa**, že funguje skvele na telefónoch aj počítačoch

**Požiadavky na personalizáciu:**
- **Vyberte** jedinečné meno a osobnosť pre vášho AI asistenta – možno niečo, čo odráža vaše záujmy alebo problémy, ktoré chcete riešiť
- **Prispôsobte** vizuálny dizajn tak, aby zodpovedal štýlu vášho asistenta
- **Napíšte** presvedčivú uvítaciu správu, ktorá motivuje ľudí začať chatovať
- **Otestujte** vášho asistenta s rôznymi typmi otázok, aby ste videli, ako reaguje

### Nápady na vylepšenie (voliteľné)

Chcete posunúť svoj projekt na vyššiu úroveň? Tu je niekoľko zaujímavých nápadov na preskúmanie:

| Funkcia | Popis | Zručnosti, ktoré si precvičíte |
|---------|-------|-------------------------------|
| **História správ** | Pamätajte si konverzácie aj po obnovení stránky | Práca s localStorage, manipulácia s JSON |
| **Indikátory písania** | Zobrazenie "AI píše..." počas čakania na odpovede | Animácie v CSS, asynchrónne programovanie |
| **Časové pečiatky správ** | Zobrazenie času odoslania každej správy | Formátovanie dátumu/času, UX dizajn |
| **Export chatu** | Umožnite používateľom stiahnuť ich konverzáciu | Práca so súbormi, export dát |
| **Prepínanie témy** | Prepínač medzi svetlým/tmavým režimom | Premenné CSS, preferencie používateľa |
| **Hlasový vstup** | Pridajte funkciu prevodu reči na text | Webové API, prístupnosť |

### Testovanie a dokumentácia

**Zabezpečenie kvality:**
- **Testujte** vašu aplikáciu s rôznymi typmi vstupov a hraničnými prípadmi
- **Overte**, že responzívny dizajn funguje na rôznych veľkostiach obrazovky
- **Skontrolujte** prístupnosť pomocou navigácie klávesnicou a čítačiek obrazovky
- **Validujte** HTML a CSS pre súlad so štandardmi

**Požiadavky na dokumentáciu:**
- **Napíšte** README.md, ktorý vysvetľuje váš projekt a ako ho spustiť
- **Priložte** snímky obrazovky vášho chatovacieho rozhrania v akcii
- **Zdokumentujte** akékoľvek jedinečné funkcie alebo prispôsobenia, ktoré ste pridali
- **Poskytnite** jasné pokyny na nastavenie pre ostatných vývojárov

### Pokyny na odovzdanie

**Výstupy projektu:**
1. Kompletný priečinok projektu so všetkým zdrojovým kódom
2. README.md s popisom projektu a pokynmi na nastavenie
3. Snímky obrazovky demonštrujúce vášho chatovacieho asistenta v akcii
4. Krátka reflexia o tom, čo ste sa naučili a aké výzvy ste čelili

**Kritériá hodnotenia:**
- **Funkčnosť**: Funguje chatovací asistent podľa očakávania?
- **Kvalita kódu**: Je kód dobre organizovaný, komentovaný a udržiavateľný?
- **Dizajn**: Je rozhranie vizuálne atraktívne a užívateľsky prívetivé?
- **Kreativita**: Aká jedinečná a personalizovaná je vaša implementácia?
- **Dokumentácia**: Sú pokyny na nastavenie jasné a kompletné?

> 💡 **Tip na úspech**: Začnite najprv so základnými požiadavkami, potom pridajte vylepšenia, keď bude všetko fungovať. Zamerajte sa na vytvorenie vylešteného základného zážitku pred pridaním pokročilých funkcií.

## Riešenie

[Riešenie](./solution/README.md)

## Bonusové výzvy

Pripravení posunúť váš AI asistent na vyššiu úroveň? Vyskúšajte tieto pokročilé výzvy, ktoré prehĺbia vaše porozumenie integrácie AI a webového vývoja.

### Prispôsobenie osobnosti

Skutočná mágia nastáva, keď dáte svojmu AI asistentovi jedinečnú osobnosť. Experimentujte s rôznymi systémovými výzvami na vytvorenie špecializovaných asistentov:

**Príklad profesionálneho asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Príklad kreatívneho pomocníka pri písaní:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Príklad technického mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Vylepšenia frontendu

Transformujte svoje chatovacie rozhranie pomocou týchto vizuálnych a funkčných vylepšení:

**Pokročilé funkcie CSS:**
- **Implementujte** plynulé animácie a prechody správ
- **Pridajte** vlastné dizajny bublín chatu s tvarmi a gradientmi v CSS
- **Vytvorte** animáciu indikátora písania, keď AI "premýšľa"
- **Navrhnite** emoji reakcie alebo systém hodnotenia správ

**Vylepšenia JavaScriptu:**
- **Pridajte** klávesové skratky (Ctrl+Enter na odoslanie, Escape na vymazanie vstupu)
- **Implementujte** funkciu vyhľadávania a filtrovania správ
- **Vytvorte** funkciu exportu konverzácie (stiahnutie ako text alebo JSON)
- **Pridajte** automatické ukladanie do localStorage, aby sa zabránilo strate správ

### Pokročilá integrácia AI

**Viacero osobností AI:**
- **Vytvorte** rozbaľovací zoznam na prepínanie medzi rôznymi osobnosťami AI
- **Uložte** preferovanú osobnosť používateľa do localStorage
- **Implementujte** prepínanie kontextu, ktoré udržiava tok konverzácie

**Funkcie inteligentnej odpovede:**
- **Pridajte** povedomie o kontexte konverzácie (AI si pamätá predchádzajúce správy)
- **Implementujte** inteligentné návrhy na základe témy konverzácie
- **Vytvorte** tlačidlá rýchlej odpovede na bežné otázky

> 🎯 **Cieľ učenia**: Tieto bonusové výzvy vám pomôžu pochopiť pokročilé vzory webového vývoja a techniky integrácie AI, ktoré sa používajú v produkčných aplikáciách.

## Zhrnutie a ďalšie kroky

Gratulujeme! Úspešne ste vytvorili kompletného AI-powered chatovacieho asistenta od základu. Tento projekt vám poskytol praktické skúsenosti s modernými technológiami webového vývoja a integráciou AI – zručnosti, ktoré sú čoraz cennejšie v dnešnom technologickom prostredí.

### Čo ste dosiahli

Počas tejto lekcie ste zvládli niekoľko kľúčových technológií a konceptov:

**Vývoj backendu:**
- **Integrácia** s GitHub Models API pre funkčnosť AI
- **Vytvorenie** RESTful API pomocou Flasku s riadnym spracovaním chýb
- **Implementácia** bezpečnej autentifikácie pomocou environmentálnych premenných
- **Konfigurácia** CORS pre požiadavky medzi frontendom a backendom

**Vývoj frontendu:**
- **Vytvorenie** responzívneho chatovacieho rozhrania pomocou sémantického HTML
- **Implementácia** moderného JavaScriptu s async/await a architektúrou založenou na triedach
- **Navrhnutie** pútavého používateľského rozhrania s CSS Grid, Flexboxom a animáciami
- **Pridanie** funkcií prístupnosti a princípov responzívneho dizajnu

**Integrácia full-stacku:**
- **Prepojenie** frontendu a backendu prostredníctvom HTTP API volaní
- **Spracovanie** interakcií používateľov v reálnom čase a asynchrónneho toku dát
- **Implementácia** spracovania chýb a spätnej väzby používateľovi v celej aplikácii
- **Testovanie** kompletného pracovného toku aplikácie od vstupu používateľa po odpoveď AI

### Kľúčové výsledky učenia

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

Tento projekt vás uviedol do základov budovania aplikácií poháňaných AI, čo predstavuje budúcnosť webového vývoja. Teraz rozumiete, ako integrovať schopnosti AI do tradičných webových aplikácií, čím vytvárate pútavé používateľské zážitky, ktoré pôsobia inteligentne a reagujú.

### Profesionálne aplikácie

Zručnosti, ktoré ste si osvojili v tejto lekcii, sú priamo aplikovateľné na moderné kariéry v oblasti softvérového vývoja:

- **Full-stack webový vývoj** pomocou moderných frameworkov a API
- **Integrácia AI** do webových aplik
- **Presmerovanie portov** na testovanie vašich aplikácií

**Čo poskytuje Codespaces:**
- **Odstraňuje** problémy s nastavením a konfiguráciou lokálneho prostredia
- **Zabezpečuje** konzistentné vývojové prostredie na rôznych zariadeniach
- **Obsahuje** predkonfigurované nástroje a rozšírenia pre webový vývoj
- **Ponúka** bezproblémovú integráciu s GitHubom pre správu verzií a spoluprácu

> 🚀 **Profesionálny tip**: Codespaces je ideálny na učenie a prototypovanie AI aplikácií, pretože automaticky rieši všetky zložité nastavenia prostredia, čo vám umožní sústrediť sa na tvorbu a učenie namiesto riešenia problémov s konfiguráciou.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.