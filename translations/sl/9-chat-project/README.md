<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-25T00:30:06+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sl"
}
-->
# Ustvarjanje klepetalnega asistenta z umetno inteligenco

Se spomnite v Zvezdnih stezah, ko je posadka sproščeno klepetala z računalnikom ladje, ga spraševala zapletena vprašanja in prejemala premišljene odgovore? Kar je v šestdesetih letih prejšnjega stoletja delovalo kot čista znanstvena fantastika, je zdaj nekaj, kar lahko ustvarite z uporabo spletnih tehnologij, ki jih že poznate.

V tej lekciji bomo ustvarili AI klepetalnega asistenta z uporabo HTML, CSS, JavaScripta in nekaj integracije z backendom. Odkrijte, kako lahko iste veščine, ki jih že obvladate, povežete z zmogljivimi storitvami umetne inteligence, ki razumejo kontekst in generirajo smiselne odgovore.

Pomislite na AI kot na dostop do ogromne knjižnice, ki ne le najde informacije, ampak jih tudi sintetizira v koherentne odgovore, prilagojene vašim specifičnim vprašanjem. Namesto da bi iskali med tisočimi stranmi, dobite neposredne, kontekstualne odgovore.

Integracija poteka prek znanih spletnih tehnologij, ki delujejo skupaj. HTML ustvari vmesnik za klepet, CSS poskrbi za vizualno oblikovanje, JavaScript upravlja interakcije z uporabnikom, medtem ko backend API poveže vse z AI storitvami. To je podobno kot različni deli orkestra, ki skupaj ustvarijo simfonijo.

Pravzaprav gradimo most med naravno človeško komunikacijo in strojno obdelavo. Naučili se boste tako tehnične implementacije integracije AI storitev kot tudi oblikovalskih vzorcev, ki naredijo interakcije intuitivne.

Do konca te lekcije bo integracija AI manj skrivnosten proces in bolj kot še en API, s katerim lahko delate. Razumeli boste osnovne vzorce, ki poganjajo aplikacije, kot sta ChatGPT in Claude, z uporabo istih načel spletnega razvoja, ki jih že poznate.

Tako bo videti vaš končni projekt:

![Vmesnik aplikacije za klepet, ki prikazuje pogovor med uporabnikom in AI asistentom](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.sl.png)

## Razumevanje AI: Od skrivnosti do obvladanja

Preden se lotimo kode, razumimo, s čim delamo. Če ste že uporabljali API-je, poznate osnovni vzorec: pošljite zahtevo, prejmite odgovor.

AI API-ji sledijo podobni strukturi, vendar namesto da bi pridobili vnaprej shranjene podatke iz baze, generirajo nove odgovore na podlagi vzorcev, naučenih iz ogromnih količin besedila. Pomislite na razliko med knjižničnim katalogom in izkušenim knjižničarjem, ki lahko sintetizira informacije iz več virov.

### Kaj pravzaprav pomeni "generativna umetna inteligenca"?

Pomislite, kako je Rosetta Stone omogočila učenjakom razumevanje egipčanskih hieroglifov z iskanjem vzorcev med znanimi in neznanimi jeziki. AI modeli delujejo podobno – iščejo vzorce v ogromnih količinah besedila, da razumejo, kako deluje jezik, nato pa te vzorce uporabijo za generiranje ustreznih odgovorov na nova vprašanja.

**Naj razložim s preprosto primerjavo:**
- **Tradicionalna baza podatkov**: Kot zahteva za rojstni list – vedno dobite isti dokument
- **Iskalnik**: Kot vprašanje knjižničarju, da poišče knjige o mačkah – pokaže vam, kaj je na voljo
- **Generativna AI**: Kot vprašanje izkušenemu prijatelju o mačkah – pove vam zanimive stvari s svojimi besedami, prilagojene temu, kar želite vedeti

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Kako se AI modeli učijo (preprosta razlaga)

AI modeli se učijo z izpostavljenostjo ogromnim podatkovnim zbirkam, ki vsebujejo besedila iz knjig, člankov in pogovorov. S tem procesom prepoznajo vzorce v:
- Strukturi misli v pisni komunikaciji
- Besedah, ki se pogosto pojavljajo skupaj
- Tipičnem poteku pogovorov
- Kontekstualnih razlikah med formalno in neformalno komunikacijo

**To je podobno kot arheologi, ki dekodirajo starodavne jezike**: analizirajo tisoče primerov, da razumejo slovnico, besedišče in kulturni kontekst, nato pa lahko interpretirajo nova besedila z uporabo naučenih vzorcev.

### Zakaj GitHub Models?

Uporabljamo GitHub Models iz praktičnega razloga – omogoča dostop do AI na ravni podjetja, ne da bi morali postaviti lastno infrastrukturo AI (kar, verjemite mi, trenutno ne želite početi!). To je kot uporaba vremenskega API-ja namesto poskusa napovedovanja vremena z vzpostavitvijo vremenskih postaj povsod.

To je v bistvu "AI-kot-storitev", najboljši del pa? Za začetek je brezplačno, tako da lahko eksperimentirate, ne da bi vas skrbelo za visoke stroške.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Uporabili bomo GitHub Models za našo backend integracijo, ki omogoča dostop do profesionalnih AI zmogljivosti prek uporabniku prijaznega vmesnika. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) služi kot testno okolje, kjer lahko eksperimentirate z različnimi AI modeli in razumete njihove zmogljivosti, preden jih implementirate v kodo.

![Vmesnik GitHub Models AI Playground z izbiro modela in testnim območjem](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.sl.png)

**Zakaj je playground tako uporaben:**
- **Preizkusite** različne AI modele, kot so GPT-4o-mini, Claude in drugi (vse brezplačno!)
- **Testirajte** svoje ideje in pozive, preden napišete kodo
- **Pridobite** pripravljene kode v vašem najljubšem programskem jeziku
- **Prilagodite** nastavitve, kot so raven ustvarjalnosti in dolžina odgovora, da vidite, kako vplivajo na rezultat

Ko se malo poigrate, preprosto kliknite zavihek "Code" in izberite svoj programski jezik, da dobite implementacijsko kodo, ki jo potrebujete.

![Izbira v playgroundu, ki prikazuje možnosti generiranja kode za različne programske jezike](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.sl.png)

## Nastavitev Python backend integracije

Zdaj implementirajmo AI integracijo z uporabo Pythona. Python je odličen za AI aplikacije zaradi svoje preproste sintakse in zmogljivih knjižnic. Začeli bomo s kodo iz GitHub Models playgrounda in jo nato preoblikovali v ponovno uporabno funkcijo, pripravljeno za produkcijo.

### Razumevanje osnovne implementacije

Ko prenesete Python kodo iz playgrounda, bo videti nekako takole. Ne skrbite, če se vam na začetku zdi veliko – poglejmo jo korak za korakom:

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

**Kaj se dogaja v tej kodi:**
- **Uvozimo** orodja, ki jih potrebujemo: `os` za branje okoljskih spremenljivk in `OpenAI` za komunikacijo z AI
- **Nastavimo** odjemalca OpenAI, da kaže na GitHubove AI strežnike namesto neposredno na OpenAI
- **Avtenticiramo** z uporabo posebnega GitHub žetona (več o tem kasneje!)
- **Strukturiramo** naš pogovor z različnimi "vlogami" – pomislite na to kot na postavitev scene za igro
- **Pošljemo** zahtevo AI-ju z nekaj parametri za fino nastavitev
- **Izvlečemo** dejansko besedilo odgovora iz vseh podatkov, ki se vrnejo

### Razumevanje vlog sporočil: Okvir za AI pogovor

AI pogovori uporabljajo specifično strukturo z različnimi "vlogami", ki služijo različnim namenom:

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

**Pomislite na to kot na režijo igre:**
- **Vloga sistema**: Kot režijske smernice za igralca – pove AI-ju, kako se obnašati, kakšno osebnost imeti in kako odgovarjati
- **Vloga uporabnika**: Dejanska vprašanja ali sporočila osebe, ki uporablja vašo aplikacijo
- **Vloga asistenta**: Odgovor AI-ja (tega ne pošljete, ampak se pojavi v zgodovini pogovora)

**Primer iz resničnega življenja**: Predstavljajte si, da na zabavi predstavite prijatelja nekomu:
- **Sistemsko sporočilo**: "To je moja prijateljica Sara, zdravnica, ki odlično razlaga medicinske koncepte na preprost način"
- **Uporabniško sporočilo**: "Ali mi lahko razložiš, kako delujejo cepiva?"
- **Odgovor asistenta**: Sara odgovori kot prijazna zdravnica, ne kot odvetnica ali kuharica

### Razumevanje AI parametrov: Fino nastavljanje vedenja odgovora

Številčni parametri v klicih AI API nadzorujejo, kako model generira odgovore. Te nastavitve vam omogočajo prilagoditev vedenja AI za različne primere uporabe:

#### Temperatura (0,0 do 2,0): Nadzor ustvarjalnosti

**Kaj počne**: Nadzoruje, kako ustvarjalni ali predvidljivi bodo odgovori AI.

**Pomislite na to kot na raven improvizacije jazz glasbenika:**
- **Temperatura = 0,1**: Vedno igra isto melodijo (zelo predvidljivo)
- **Temperatura = 0,7**: Dodaja nekaj okusnih variacij, a ostaja prepoznavna (uravnotežena ustvarjalnost)
- **Temperatura = 1,5**: Popolnoma eksperimentalni jazz z nepričakovanimi obrati (zelo nepredvidljivo)

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

#### Max Tokens (1 do 4096+): Nadzor dolžine odgovora

**Kaj počne**: Določa omejitev dolžine odgovora AI.

**Pomislite na tokene kot približno enakovredne besedam** (približno 1 token = 0,75 besede v angleščini):
- **max_tokens=50**: Kratko in jedrnato (kot SMS sporočilo)
- **max_tokens=500**: Lep odstavek ali dva
- **max_tokens=2000**: Podrobna razlaga z zgledi

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

#### Top_p (0,0 do 1,0): Parameter osredotočenosti

**Kaj počne**: Nadzoruje, kako osredotočen ostane AI na najbolj verjetne odgovore.

**Predstavljajte si AI z ogromnim besednjakom, razvrščenim po verjetnosti vsake besede:**
- **top_p=0,1**: Upošteva le najbolj verjetnih 10 % besed (zelo osredotočeno)
- **top_p=0,9**: Upošteva 90 % možnih besed (bolj ustvarjalno)
- **top_p=1,0**: Upošteva vse (največja raznolikost)

**Na primer**: Če vprašate "Nebo je običajno..."
- **Nizek top_p**: Skoraj zagotovo odgovori "modro"
- **Visok top_p**: Morda odgovori "modro", "oblačno", "prostrano", "spremenljivo", "čudovito" itd.

### Združevanje vsega: Kombinacije parametrov za različne primere uporabe

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

**Razumevanje, zakaj so ti parametri pomembni**: Različne aplikacije potrebujejo različne vrste odgovorov. Bot za podporo strankam mora biti dosleden in dejanski (nizka temperatura), medtem ko mora biti asistent za kreativno pisanje domiseln in raznolik (visoka temperatura). Razumevanje teh parametrov vam omogoča nadzor nad osebnostjo in slogom odgovora vašega AI-ja.
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

**Razumevanje te izboljšane funkcije:**
- **Sprejema** dva parametra: uporabnikov poziv in neobvezno sistemsko sporočilo
- **Nudi** privzeto sistemsko sporočilo za splošno vedenje asistenta
- **Uporablja** ustrezne tipe v Pythonu za boljšo dokumentacijo kode
- **Vrne** le vsebino odgovora, kar olajša uporabo v našem spletnem API-ju
- **Ohranja** iste parametre modela za dosledno vedenje AI-ja

### Magija sistemskih pozivov: Programiranje osebnosti AI

Če parametri nadzorujejo, kako AI razmišlja, sistemski pozivi nadzorujejo, kdo AI misli, da je. To je resnično ena najbolj kul stvari pri delu z AI – v bistvu dajete AI-ju celotno osebnost, raven strokovnosti in slog komunikacije.

**Pomislite na sistemske pozive kot na izbiro različnih igralcev za različne vloge**: Namesto da bi imeli enega generičnega asistenta, lahko ustvarite specializirane strokovnjake za različne situacije. Potrebujete potrpežljivega učitelja? Kreativnega partnerja za brainstorming? Resnega poslovnega svetovalca? Preprosto spremenite sistemski poziv!

#### Zakaj so sistemski pozivi tako močni

Tukaj je fascinanten del: AI modeli so bili usposobljeni na neštetih pogovorih, kjer ljudje prevzemajo različne vloge in ravni strokovnosti. Ko AI-ju dodelite določeno vlogo, je to kot preklop stikala, ki aktivira vse te naučene vzorce.

**To je kot metoda igranja za AI**: Povejte igralcu "ti si modri stari profesor" in opazujte, kako samodejno prilagodi svojo držo, besedišče in manire. AI naredi nekaj izjemno podobnega z jezikovnimi vzorci.

#### Oblikovanje učinkovitih sistemskih pozivov: Umetnost in znanost

**Anatomija odličnega sistemskega poziva:**
1. **Vloga/identiteta**: Kdo je AI?
2. **Strokovnost**: Kaj zna?
3. **Slog komunikacije**: Kako govori?
4. **Specifična navodila**: Na kaj naj se osredotoči?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Primeri sistemskih pozivov s kontekstom

Poglejmo, kako različni sistemski pozivi ustvarijo popolnoma različne osebnosti AI:

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

#### Opazovanje sistemskih pozivov v akciji

Testirajmo isto vprašanje z različnimi sistemskimi pozivi, da vidimo dramatične razlike:

**Vprašanje**: "Kako naj upravljam avtentikacijo uporabnikov v svoji spletni aplikaciji?"

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

#### Napredne tehnike sistemskih pozivov

**1. Nastavitev konteksta**: Dajte AI-ju ozadje
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Oblikovanje izhoda**: Povejte AI-ju, kako naj strukturira odgovore
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

**3. Nastavitev omejitev**: Določite, kaj AI ne sme početi
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Zakaj je to pomembno za vašega klepetalnega asistenta

Razumevanje sistemskih pozivov vam daje neverjetno moč za ustvarjanje specializiranih AI asistentov:
- **Bot za podporo strankam**: Uporaben, potrpežljiv, seznanjen s politiko
- **Učitelj za učenje**: Spodbuden, korak za korakom, preverja razumevanje
- **Kreativni partner**: Domiseln, gradi na idejah, sprašuje "kaj če?"
- **Tehnični strokovnjak**: Natančen, podroben, osredotočen na varnost

**Ključni vpogled**: Ne kličete le AI API-ja – ustvarjate prilagojeno AI osebnost, ki ustreza vašemu specifičnemu primeru uporabe. To je tisto, zaradi česar se sodobne AI aplikacije zdijo prilagojene in uporabne, namesto generične.

## Gradnja spletnega API-ja z FastAPI: Vaš visokozmogljiv komunikacijski hub za AI

Zdaj zgradimo backend, ki povezuje vaš frontend z AI storitvami. Uporabili bomo FastAPI, sodoben Python okvir, ki odlično podpira gradnjo API-jev za AI aplikacije.

FastAPI ponuja več prednosti za tovrstne projekte: vgrajena podpora za asinhrono obdelavo sočasnih zahtev, samodejno generiranje dokumentacije API-ja in odlična zmogljivost. Vaš FastAPI strežnik deluje kot posrednik, ki prejema zahteve od frontenda, komunicira z AI storitvami in vrača formatirane odgovore.

### Zakaj FastAPI za AI aplikacije?

Morda se sprašujete: "Ali ne morem preprosto klicati AI neposredno iz svojega JavaScripta na frontendu?" ali "Zakaj
**Zakaj je FastAPI popoln za to, kar gradimo:**
- **Privzeto asinhrono**: Omogoča obdelavo več AI zahtev hkrati, ne da bi se zataknilo
- **Samodejna dokumentacija**: Obiščite `/docs` in brezplačno pridobite čudovito, interaktivno stran z dokumentacijo API-ja
- **Vgrajena validacija**: Zazna napake, preden povzročijo težave
- **Izjemno hitro**: Eden najhitrejših Python ogrodij
- **Sodobni Python**: Uporablja najnovejše in najboljše funkcije Pythona

**Zakaj sploh potrebujemo zaledje:**

**Varnost**: Vaš API ključ za AI je kot geslo – če ga postavite v JavaScript na sprednji strani, ga lahko vsakdo, ki si ogleda izvorno kodo vaše spletne strani, ukrade in uporabi vaše AI kredite. Zaledje ohranja občutljive podatke varne.

**Omejevanje hitrosti in nadzor**: Zaledje omogoča nadzor nad tem, kako pogosto lahko uporabniki pošiljajo zahteve, implementacijo avtentikacije uporabnikov in dodajanje beleženja za sledenje uporabi.

**Obdelava podatkov**: Morda želite shraniti pogovore, filtrirati neprimerno vsebino ali združiti več AI storitev. Zaledje je mesto, kjer živi ta logika.

**Arhitektura spominja na model odjemalec-strežnik:**
- **Sprednja stran**: Plast uporabniškega vmesnika za interakcijo
- **API zaledja**: Plast za obdelavo zahtev in usmerjanje
- **AI storitev**: Zunanja računalniška obdelava in generiranje odgovorov
- **Okoljske spremenljivke**: Varno shranjevanje konfiguracije in poverilnic

### Razumevanje toka zahteva-odgovor

Sledimo, kaj se zgodi, ko uporabnik pošlje sporočilo:

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

**Razumevanje vsakega koraka:**
1. **Interakcija uporabnika**: Oseba vtipka v klepetalni vmesnik
2. **Obdelava na sprednji strani**: JavaScript zajame vnos in ga oblikuje kot JSON
3. **Validacija API-ja**: FastAPI samodejno validira zahtevo z uporabo Pydantic modelov
4. **Integracija AI**: Zaledje doda kontekst (sistemski poziv) in pokliče AI storitev
5. **Obdelava odgovora**: API prejme AI odgovor in ga po potrebi spremeni
6. **Prikaz na sprednji strani**: JavaScript prikaže odgovor v klepetalnem vmesniku

### Razumevanje arhitekture API-ja

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

### Ustvarjanje aplikacije FastAPI

Gradimo naš API korak za korakom. Ustvarite datoteko `api.py` z naslednjo kodo FastAPI:

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

**Razumevanje implementacije FastAPI:**
- **Uvozi** FastAPI za funkcionalnost sodobnega spletnega ogrodja in Pydantic za validacijo podatkov
- **Ustvari** samodejno dokumentacijo API-ja (na voljo na `/docs`, ko strežnik deluje)
- **Omogoči** CORS middleware za omogočanje zahtev s sprednje strani z različnih izvorov
- **Določi** Pydantic modele za samodejno validacijo zahtev/odgovorov in dokumentacijo
- **Uporablja** asinhrone končne točke za boljšo zmogljivost pri sočasnih zahtevah
- **Izvaja** ustrezne HTTP statusne kode in obravnavo napak z HTTPException
- **Vključuje** strukturirano beleženje za spremljanje in odpravljanje napak
- **Ponuja** končno točko za preverjanje zdravja za spremljanje stanja storitve

**Ključne prednosti FastAPI v primerjavi s tradicionalnimi ogrodji:**
- **Samodejna validacija**: Pydantic modeli zagotavljajo integriteto podatkov pred obdelavo
- **Interaktivna dokumentacija**: Obiščite `/docs` za samodejno generirano, testno dokumentacijo API-ja
- **Tipna varnost**: Pythonovi namigi tipov preprečujejo napake med izvajanjem in izboljšujejo kakovost kode
- **Podpora za asinhronost**: Obdelava več AI zahtev hkrati brez blokiranja
- **Zmogljivost**: Znatno hitrejša obdelava zahtev za aplikacije v realnem času

### Razumevanje CORS: varnostni stražar spleta

CORS (Cross-Origin Resource Sharing) je kot varnostni stražar v stavbi, ki preverja, ali so obiskovalci dovoljeni vstopiti. Razumimo, zakaj je to pomembno in kako vpliva na vašo aplikacijo.

#### Kaj je CORS in zakaj obstaja?

**Problem**: Predstavljajte si, da bi katera koli spletna stran lahko pošiljala zahteve na spletno stran vaše banke v vašem imenu brez vašega dovoljenja. To bi bila varnostna nočna mora! Brskalniki to privzeto preprečujejo s "politiko istega izvora".

**Politika istega izvora**: Brskalniki dovolijo, da spletne strani pošiljajo zahteve samo na isti domeni, vratih in protokolu, iz katerega so bile naložene.

**Resnična analogija**: To je kot varnost v stanovanjski stavbi – samo stanovalci (isti izvor) lahko privzeto dostopajo do stavbe. Če želite, da prijatelj (drugi izvor) obišče, morate izrecno obvestiti varnostnika, da je to v redu.

#### CORS v vašem razvojnem okolju

Med razvojem vaša sprednja in zaledna stran delujeta na različnih vratih:
- Sprednja stran: `http://localhost:3000` (ali file://, če odpirate HTML neposredno)
- Zaledje: `http://localhost:5000`

To se šteje za "različne izvore", čeprav sta na istem računalniku!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Kaj konfiguracija CORS dejansko počne:**
- **Doda** posebne HTTP glave v odgovore API-ja, ki brskalnikom povedo "ta zahteva iz drugega izvora je dovoljena"
- **Obravnava** "predhodne" zahteve (brskalniki včasih preverijo dovoljenja pred pošiljanjem dejanske zahteve)
- **Preprečuje** zloglasno napako "blocked by CORS policy" v konzoli brskalnika

#### Varnost CORS: razvoj proti produkciji

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

**Zakaj je to pomembno**: Med razvojem je `CORS(app)` kot da pustite vhodna vrata odklenjena – priročno, a ne varno. V produkciji želite natančno določiti, katere spletne strani lahko komunicirajo z vašim API-jem.

#### Pogosti scenariji CORS in rešitve

| Scenarij | Problem | Rešitev |
|----------|---------|----------|
| **Lokalni razvoj** | Sprednja stran ne more doseči zaledja | Dodajte CORSMiddleware v FastAPI |
| **GitHub Pages + Heroku** | Nameščena sprednja stran ne more doseči API-ja | Dodajte URL vaše GitHub Pages v izvor CORS |
| **Prilagojena domena** | Napake CORS v produkciji | Posodobite izvor CORS, da ustreza vaši domeni |
| **Mobilna aplikacija** | Aplikacija ne more doseči spletnega API-ja | Dodajte domeno vaše aplikacije ali previdno uporabite `*` |

**Nasvet**: Glave CORS lahko preverite v orodjih za razvijalce brskalnika pod zavihkom Network. Poiščite glave, kot je `Access-Control-Allow-Origin` v odgovoru.

### Obravnava napak in validacija

Opazite, kako naš API vključuje ustrezno obravnavo napak:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Ključna načela validacije:**
- **Preverja** zahtevana polja pred obdelavo zahtev
- **Vrne** smiselna sporočila o napakah v formatu JSON
- **Uporablja** ustrezne HTTP statusne kode (400 za slabe zahteve)
- **Ponuja** jasne povratne informacije za pomoč razvijalcem sprednje strani pri odpravljanju težav

## Nastavitev in zagon vašega zaledja

Zdaj, ko imamo pripravljeno integracijo AI in strežnik FastAPI, začnimo z delovanjem. Postopek nastavitve vključuje namestitev Python odvisnosti, konfiguracijo okoljskih spremenljivk in zagon vašega razvojnega strežnika.

### Nastavitev Python okolja

Nastavimo vaše Python razvojno okolje. Virtualna okolja so kot pristop razdelitve projekta – vsak projekt dobi svoj izoliran prostor s specifičnimi orodji in odvisnostmi, kar preprečuje konflikte med različnimi projekti.

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

**Kaj smo pravkar naredili:**
- **Ustvarili** smo svoj lasten Python mehurček, kjer lahko namestimo pakete, ne da bi vplivali na karkoli drugega
- **Aktivirali** smo ga, da naš terminal ve, da uporablja to specifično okolje
- **Namestili** smo bistvene stvari: OpenAI za AI čarovnijo, FastAPI za naš spletni API, Uvicorn za dejanski zagon in python-dotenv za varno upravljanje skrivnosti

**Razlaga ključnih odvisnosti:**
- **FastAPI**: Sodobno, hitro spletno ogrodje s samodejno dokumentacijo API-ja
- **Uvicorn**: Izjemno hiter ASGI strežnik, ki poganja aplikacije FastAPI
- **OpenAI**: Uradna knjižnica za GitHub modele in integracijo OpenAI API-ja
- **python-dotenv**: Varno nalaganje okoljskih spremenljivk iz .env datotek

### Konfiguracija okolja: ohranjanje skrivnosti varnih

Preden začnemo z našim API-jem, moramo govoriti o eni najpomembnejših lekcij v spletnem razvoju: kako ohraniti vaše skrivnosti resnično skrivne. Okoljske spremenljivke so kot varni trezor, do katerega ima dostop samo vaša aplikacija.

#### Kaj so okoljske spremenljivke?

**Pomislite na okoljske spremenljivke kot na sef** – vanj shranite dragocene stvari, do katerih imate dostop samo vi (in vaša aplikacija). Namesto da občutljive informacije neposredno napišete v kodo (kjer jih lahko vidi dobesedno vsak), jih varno shranite v okolje.

**Razlika:**
- **Napačen način**: Zapisati geslo na samolepilni listek in ga prilepiti na monitor
- **Pravi način**: Shraniti geslo v varen upravitelj gesel, do katerega imate dostop samo vi

#### Zakaj so okoljske spremenljivke pomembne

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

**Kaj se zgodi, ko trdo kodirate skrivnosti:**
1. **Izpostavljenost nadzoru različic**: Kdor koli z dostopom do vašega Git repozitorija vidi vaš API ključ
2. **Javni repozitoriji**: Če potisnete na GitHub, je vaš ključ viden celotnemu internetu
3. **Deljenje z ekipo**: Drugi razvijalci, ki delajo na vašem projektu, dobijo dostop do vašega osebnega API ključa
4. **Varnostne kršitve**: Če nekdo ukrade vaš API ključ, lahko uporabi vaše AI kredite

#### Nastavitev vaše okoljske datoteke

Ustvarite `.env` datoteko v vaši zaledni mapi. Ta datoteka lokalno shranjuje vaše skrivnosti:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Razumevanje .env datoteke:**
- **Ena skrivnost na vrstico** v formatu `KEY=value`
- **Brez presledkov** okoli znaka enakosti
- **Brez narekovajev** okoli vrednosti (običajno)
- **Komentarji** se začnejo z `#`

#### Ustvarjanje vašega GitHub osebnega dostopnega žetona

Vaš GitHub žeton je kot posebno geslo, ki daje vaši aplikaciji dovoljenje za uporabo GitHub AI storitev:

**Koraki za ustvarjanje žetona:**
1. **Pojdite v GitHub Nastavitve** → Nastavitve razvijalca → Osebni dostopni žetoni → Žetoni (klasični)
2. **Kliknite "Ustvari nov žeton (klasični)"**
3. **Nastavite potek veljavnosti** (30 dni za testiranje, daljše za produkcijo)
4. **Izberite obseg**: Označite "repo" in vse druge potrebne pravice
5. **Ustvarite žeton** in ga takoj kopirajte (kasneje ga ne boste več videli!)
6. **Prilepite v vašo .env datoteko**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Nalaganje okoljskih spremenljivk v Pythonu

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

**Kaj ta koda počne:**
- **Naloži** vašo .env datoteko in naredi spremenljivke dostopne Pythonu
- **Preveri**, ali zahtevani žeton obstaja (dobra obravnava napak!)
- **Dvigne** jasno napako, če žetona ni
- **Uporablja** žeton varno, ne da bi ga izpostavil v kodi

#### Git varnost: datoteka .gitignore

Vaša `.gitignore` datoteka pove Gitu, katere datoteke naj nikoli ne sledi ali naloži:

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

**Zakaj je to ključno**: Ko dodate `.env` v `.gitignore`, bo Git ignoriral vašo okoljsko datoteko, kar preprečuje, da bi pomotoma naložili svoje skrivnosti na GitHub.

#### Različna okolja, različne skrivnosti

Profesionalne aplikacije uporabljajo različne API ključe za različna okolja:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Zakaj je to pomembno**: Ne želite, da vaši razvojni eksperimenti vplivajo na vašo produkcijsko AI kvoto, in želite različne varnostne ravni za različna okolja.

### Zagon vašega razvojnega strežnika: oživitev vašega FastAPI-ja

Zdaj prihaja razburljiv trenutek – zagon vašega razvojnega strežnika FastAPI in oživitev vaše AI integracije! FastAPI uporablja Uvicorn, izjemno hiter ASGI strežnik, ki je posebej zasnovan za asinhrone Python aplikacije.

#### Razumevanje procesa zagona strežnika FastAPI

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Ko zaženete ta ukaz, se za kulisami zgodi naslednje:

**1. Python naloži vašo aplikacijo FastAPI**:
- Uvozi vse potrebne knjižnice (FastAPI, Pydantic, OpenAI itd.)
- Naloži okoljske spremenljivke iz vaše `.env` datoteke
- Ustvari instanco aplikacije FastAPI s samodejno dokumentacijo

**2. Uvicorn konfigurira ASGI strežnik**:
- Poveže se na vrata 5000 z zmogljivostmi za asinhrono obdelavo zahtev
- Nastavi usmerjanje zahtev s samodejno validacijo
- Omogoči samodejno ponovno nalaganje za razvoj (ponovni zagon ob spremembah datotek)
- Ustvari interaktivno dokumentacijo API-ja

**3. Strežnik začne poslušati**:
- Vaš terminal prikaže: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Strežnik lahko obdeluje več sočasnih AI zahtev
- Vaš API je pripravljen s samodejno dokumentacijo na `http://localhost:5000/docs`

#### Kaj bi morali videti, ko vse deluje

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Razumevanje izhoda FastAPI:**
- **Bo spremljal spremembe**: Samodejno ponovno nalaganje omogočeno za razvoj
- **Uvicorn deluje**: Visoko zmogljiv ASGI strežnik je aktiven
- **Začetek procesa ponovnega nalaganja**: Opazovalec datotek za samodejne ponovne zagone
- **Zagon aplikacije zaključen**: Aplikacija FastAPI uspešno inicializirana
- **Interaktivna dokumentacija na voljo**: Obiščite `/docs` za samodejno dokumentacijo API-ja

#### Testiranje vašega FastAPI-ja: več močnih pristopov

FastAPI ponuja več priročnih načinov za testiranje vašega API-ja, vključno s samodejno interaktivno dokumentacijo:

**Metoda 1: Interaktivna dokumentacija API-ja (priporočeno)**
1. Odprite brskalnik in pojdite na `http://localhost:5000/docs`
2. Videli boste Swagger UI z dokumentiranimi vsemi vašimi končnimi točkami
3. Kliknite na `/hello` → "Try it out" → Vnesite testno sporočilo → "Execute"
4. Oglejte si odgovor neposredno v brskalniku z ustreznim formatiranjem

**Metoda 2: Osnovni
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

#### Odpravljanje pogostih težav pri zagonu

| Sporočilo o napaki | Kaj pomeni | Kako odpraviti |
|--------------------|------------|----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI ni nameščen | Zaženite `pip install fastapi uvicorn` v vašem virtualnem okolju |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI strežnik ni nameščen | Zaženite `pip install uvicorn` v vašem virtualnem okolju |
| `KeyError: 'GITHUB_TOKEN'` | Okoljska spremenljivka ni najdena | Preverite svojo `.env` datoteko in klic `load_dotenv()` |
| `Address already in use` | Vrata 5000 so zasedena | Ustavite druge procese, ki uporabljajo vrata 5000, ali spremenite vrata |
| `ValidationError` | Podatki zahteve se ne ujemajo z modelom Pydantic | Preverite, ali format vaše zahteve ustreza pričakovani shemi |
| `HTTPException 422` | Neobdelana entiteta | Validacija zahteve ni uspela, preverite `/docs` za pravilen format |
| `OpenAI API error` | Avtentikacija AI storitve ni uspela | Preverite, ali je vaš GitHub token pravilen in ima ustrezne pravice |

#### Najboljše prakse za razvoj

**Samodejno osveževanje**: FastAPI z Uvicorn omogoča samodejno osveževanje ob shranjevanju sprememb v Python datotekah. To pomeni, da lahko takoj preizkusite spremembe, ne da bi morali ročno znova zagnati aplikacijo.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Beleženje za razvoj**: Dodajte beleženje, da boste razumeli, kaj se dogaja:

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

**Zakaj beleženje pomaga**: Med razvojem lahko vidite, katere zahteve prihajajo, kako AI odgovarja in kje se pojavljajo napake. To močno pospeši odpravljanje težav.

### Konfiguracija za GitHub Codespaces: Enostaven razvoj v oblaku

GitHub Codespaces je kot zmogljiv razvojni računalnik v oblaku, do katerega lahko dostopate iz katerega koli brskalnika. Če delate v Codespaces, je nekaj dodatnih korakov, da omogočite dostop do vašega zaledja iz sprednjega dela aplikacije.

#### Razumevanje omrežja Codespaces

V lokalnem razvojnem okolju vse deluje na istem računalniku:
- Zaledje: `http://localhost:5000`
- Sprednji del: `http://localhost:3000` (ali file://)

V Codespaces vaše razvojno okolje deluje na strežnikih GitHuba, zato "localhost" pomeni nekaj drugega. GitHub samodejno ustvari javne URL-je za vaše storitve, vendar jih morate pravilno konfigurirati.

#### Koraki za konfiguracijo Codespaces

**1. Zaženite svoj zaledni strežnik**:
```bash
cd backend
python api.py
```

Videli boste znano sporočilo o zagonu FastAPI/Uvicorn, vendar opazite, da deluje znotraj okolja Codespace.

**2. Konfigurirajte vidnost vrat**:
- Poiščite zavihek "Ports" v spodnjem panelu VS Code
- Poiščite vrata 5000 na seznamu
- Kliknite z desno tipko na vrata 5000
- Izberite "Port Visibility" → "Public"

**Zakaj jih narediti javna?** Privzeto so vrata v Codespace zasebna (dostopna samo vam). Če jih naredite javna, omogočite komunikacijo med sprednjim delom (ki deluje v brskalniku) in zaledjem.

**3. Pridobite svoj javni URL**:
Ko vrata nastavite na javna, boste videli URL, kot je:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Posodobite konfiguracijo sprednjega dela**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Razumevanje URL-jev Codespace

URL-ji Codespace sledijo predvidljivemu vzorcu:
```
https://[codespace-name]-[port].app.github.dev
```

**Razlaga:**
- `codespace-name`: Edinstven identifikator za vaš Codespace (običajno vključuje vaše uporabniško ime)
- `port`: Številka vrat, na katerih deluje vaša storitev (5000 za našo FastAPI aplikacijo)
- `app.github.dev`: GitHubova domena za aplikacije Codespace

#### Testiranje vaše konfiguracije Codespace

**1. Testirajte zaledje neposredno**:
Odprite svoj javni URL v novem zavihku brskalnika. Videti bi morali:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testirajte z orodji za razvijalce v brskalniku**:
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

#### Codespaces vs lokalni razvoj

| Vidik | Lokalni razvoj | GitHub Codespaces |
|-------|----------------|-------------------|
| **Čas nastavitve** | Daljši (namestitev Pythona, odvisnosti) | Trenuten (vnaprej konfigurirano okolje) |
| **Dostop do URL-ja** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfiguracija vrat** | Samodejna | Ročna (naredite vrata javna) |
| **Shranjevanje datotek** | Lokalni računalnik | GitHub repozitorij |
| **Sodelovanje** | Težko deliti okolje | Enostavno deliti povezavo Codespace |
| **Odvisnost od interneta** | Samo za klice AI API | Potrebno za vse |

#### Nasveti za razvoj v Codespaces

**Okoljske spremenljivke v Codespaces**:
Vaša `.env` datoteka deluje enako v Codespaces, vendar lahko okoljske spremenljivke nastavite tudi neposredno v Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Upravljanje vrat**:
- Codespaces samodejno zazna, ko vaša aplikacija začne poslušati na vratih
- Hkrati lahko posredujete več vrat (koristno, če kasneje dodate bazo podatkov)
- Vrata ostanejo dostopna, dokler vaš Codespace deluje

**Delovni proces razvoja**:
1. Naredite spremembe kode v VS Code
2. FastAPI se samodejno osveži (zahvaljujoč načinu ponovnega nalaganja Uvicorn)
3. Takoj preizkusite spremembe prek javnega URL-ja
4. Ko ste pripravljeni, jih zavežite in potisnite

> 💡 **Nasvet**: Med razvojem si shranite zaznamek za URL zaledja Codespace. Ker so imena Codespace stabilna, se URL ne bo spremenil, dokler uporabljate isti Codespace.

## Ustvarjanje vmesnika za klepet: Kjer se ljudje srečajo z AI

Zdaj bomo zgradili uporabniški vmesnik – del, ki določa, kako ljudje komunicirajo z vašim AI asistentom. Tako kot pri oblikovanju prvotnega vmesnika iPhona se osredotočamo na to, da kompleksno tehnologijo naredimo intuitivno in naravno za uporabo.

### Razumevanje sodobne arhitekture sprednjega dela

Naš vmesnik za klepet bo tisto, kar imenujemo "enostranska aplikacija" ali SPA. Namesto starega pristopa, kjer vsak klik naloži novo stran, naša aplikacija posodablja gladko in takoj:

**Stare spletne strani**: Kot branje fizične knjige – obračate popolnoma nove strani
**Naša aplikacija za klepet**: Kot uporaba telefona – vse teče in se posodablja brez prekinitev

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

### Trije stebri razvoja sprednjega dela

Vsaka aplikacija sprednjega dela – od preprostih spletnih strani do kompleksnih aplikacij, kot sta Discord ali Slack – temelji na treh osnovnih tehnologijah. Pomislite nanje kot na temelj vsega, kar vidite in s čimer interagirate na spletu:

**HTML (Struktura)**: To je vaš temelj
- Določa, kateri elementi obstajajo (gumbi, besedilna polja, vsebniki)
- Daje pomen vsebini (to je naslov, to je obrazec itd.)
- Ustvari osnovno strukturo, na kateri se gradi vse ostalo

**CSS (Predstavitev)**: To je vaš notranji oblikovalec
- Naredi vse lepo (barve, pisave, postavitve)
- Upošteva različne velikosti zaslona (telefon, prenosnik, tablica)
- Ustvari gladke animacije in vizualne povratne informacije

**JavaScript (Obnašanje)**: To je vaš možgani
- Odziva se na to, kar uporabniki počnejo (kliki, tipkanje, pomikanje)
- Komunicira z vašim zaledjem in posodablja stran
- Naredi vse interaktivno in dinamično

**Pomislite na to kot na arhitekturno zasnovo:**
- **HTML**: Strukturni načrt (določanje prostorov in odnosov)
- **CSS**: Estetska in okoljska zasnova (vizualni slog in uporabniška izkušnja)
- **JavaScript**: Mehanski sistemi (funkcionalnost in interaktivnost)

### Zakaj je sodobna arhitektura JavaScripta pomembna

Naša aplikacija za klepet bo uporabljala sodobne vzorce JavaScripta, ki jih boste videli v profesionalnih aplikacijah. Razumevanje teh konceptov vam bo pomagalo pri razvoju kot razvijalcu:

**Arhitektura na osnovi razredov**: Našo kodo bomo organizirali v razrede, kar je podobno ustvarjanju načrtov za objekte
**Async/Await**: Sodobni način obravnave operacij, ki trajajo (kot so klici API)
**Programiranje na osnovi dogodkov**: Naša aplikacija se odziva na dejanja uporabnika (kliki, pritiski tipk) namesto da bi delovala v zanki
**Manipulacija DOM**: Dinamično posodabljanje vsebine spletne strani na podlagi interakcij uporabnika in odgovorov API

### Nastavitev strukture projekta

Ustvarite mapo sprednjega dela z organizirano strukturo:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Razumevanje arhitekture:**
- **Ločuje** skrbi med strukturo (HTML), obnašanjem (JavaScript) in predstavitvijo (CSS)
- **Ohranja** preprosto strukturo datotek, ki je enostavna za navigacijo in spreminjanje
- **Sledi** najboljšim praksam spletnega razvoja za organizacijo in vzdrževanje

### Gradnja HTML temeljev: Semantična struktura za dostopnost

Začnimo z HTML strukturo. Sodobni spletni razvoj poudarja "semantični HTML" – uporabo HTML elementov, ki jasno opisujejo svoj namen, ne le svoj videz. To naredi vašo aplikacijo dostopno bralnikom zaslona, iskalnikom in drugim orodjem.

**Zakaj je semantični HTML pomemben**: Predstavljajte si, da opisujete svojo aplikacijo za klepet nekomu po telefonu. Rekli bi "na vrhu je glava z naslovom, glavno območje, kjer se pojavljajo pogovori, in obrazec na dnu za vnos sporočil." Semantični HTML uporablja elemente, ki ustrezajo temu naravnemu opisu.

Ustvarite `index.html` z premišljeno strukturirano oznako:

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

**Razumevanje vsakega HTML elementa in njegovega namena:**

#### Struktura dokumenta
- **`<!DOCTYPE html>`**: Brskalniku pove, da gre za sodobni HTML5
- **`<html lang="en">`**: Določa jezik strani za bralnike zaslona in orodja za prevajanje
- **`<meta charset="UTF-8">`**: Zagotavlja pravilno kodiranje znakov za mednarodna besedila
- **`<meta name="viewport"...>`**: Omogoča mobilno odzivnost strani z nadzorom povečave in merila

#### Semantični elementi
- **`<header>`**: Jasno označuje zgornji del z naslovom in opisom
- **`<main>`**: Označuje glavno vsebinsko območje (kjer se dogajajo pogovori)
- **`<form>`**: Semantično pravilno za vnos uporabnika, omogoča pravilno navigacijo s tipkovnico

#### Funkcije dostopnosti
- **`role="log"`**: Bralnikom zaslona pove, da to območje vsebuje kronološki dnevnik sporočil
- **`aria-live="polite"`**: Napoveduje nova sporočila bralnikom zaslona brez prekinitev
- **`aria-label`**: Zagotavlja opisne oznake za kontrolnike obrazca
- **`required`**: Brskalnik preveri, da uporabniki vnesejo sporočilo pred pošiljanjem

#### Integracija CSS in JavaScript
- **`class` atributi**: Zagotavljajo stilne kljuke za CSS (npr. `chat-container`, `input-group`)
- **`id` atributi**: Omogočajo JavaScriptu iskanje in manipulacijo specifičnih elementov
- **Postavitev skriptov**: JavaScript datoteka se naloži na koncu, da se HTML najprej naloži

**Zakaj ta struktura deluje:**
- **Logičen tok**: Glava → Glavna vsebina → Obrazec za vnos ustreza naravnemu vrstnemu redu branja
- **Dostopno s tipkovnico**: Uporabniki lahko prehajajo med vsemi interaktivnimi elementi
- **Prijazno bralnikom zaslona**: Jasne oznake in opisi za slabovidne uporabnike
- **Odzivno na mobilnih napravah**: Meta oznaka za viewport omogoča odzivno oblikovanje
- **Progresivna izboljšava**: Deluje tudi, če CSS ali JavaScript ne uspe naložiti

### Dodajanje interaktivnega JavaScripta: Logika sodobne spletne aplikacije

Zdaj bomo zgradili JavaScript, ki bo oživil naš vmesnik za klepet. Uporabili bomo sodobne vzorce JavaScripta, ki jih boste srečali v profesionalnem spletnem razvoju, vključno z razredi ES6, async/await in programiranjem na osnovi dogodkov.

#### Razumevanje sodobne arhitekture JavaScripta

Namesto pisanja proceduralne kode (serija funkcij, ki se izvajajo zaporedno), bomo ustvarili **arhitekturo na osnovi razredov**. Razred si lahko predstavljate kot načrt za ustvarjanje objektov – kot arhitektov načrt, ki se lahko uporabi za gradnjo več hiš.

**Zakaj uporabljati razrede za spletne aplikacije?**
- **Organizacija**: Vsa povezana funkcionalnost je združena
- **Ponovna uporaba**: Na isti strani lahko ustvarite več primerkov klepeta
- **Vzdrževanje**: Lažje odpravljanje napak in spreminjanje specifičnih funkcij
- **Profesionalni standard**: Ta vzorec se uporablja v ogrodjih, kot so React, Vue in Angular

Ustvarite `app.js` z modernim, dobro strukturiranim JavaScriptom:

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

#### Razumevanje vsakega koncepta JavaScripta

**Struktura razreda ES6**:
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

**Vzorec Async/Await**:
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

**Programiranje na osnovi dogodkov**:
Namesto nenehnega preverjanja, ali se je nekaj zgodilo, "poslušamo" dogodke:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulacija DOM**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Varnost in najboljše prakse

**Preprečevanje XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Zakaj je to pomembno**: Če uporabnik vpiše `<script>alert('hack')</script>`, ta funkcija zagotovi, da se prikaže kot besedilo in se ne izvrši kot koda.

**Obravnava napak**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Premisleki o uporabniški izkušnji**:
- **Optimistični UI**: Dodajte uporabniško sporočilo takoj, ne čakajte na odgovor strežnika
- **Stanja nalaganja**: Onemogočite gumbe in prikažite "Pošiljanje..." med čakanjem
- **Samodejno pomikanje**: Najnovejša sporočila naj bodo vidna
- **Validacija vnosa**: Ne pošiljajte praznih sporočil
- **Bližnjice na tipkovnici**: Tipka Enter pošlje sporočila (kot v pravih aplikacijah za klepet)

#### Razumevanje toka aplikacije

1. **Stran se naloži** → Sproži se dogodek `DOMContentLoaded` → Ustvari se `new ChatApp()`
2. **Konstruktor se zažene** → Pridobi reference na elemente DOM → Nastavi poslušalce dogodkov
3. **Uporabnik vpiše sporočilo** → Pritisne Enter ali klikne Pošlji → Zažene se `handleSubmit`
4. **handleSubmit** → Validira vnos
Ta arhitektura je razširljiva – funkcije, kot so urejanje sporočil, nalaganje datotek ali več pogovornih niti, lahko enostavno dodate brez preoblikovanja osnovne strukture.

### Oblikovanje vašega vmesnika za klepet

Zdaj bomo ustvarili sodoben, vizualno privlačen vmesnik za klepet s CSS. Dobra oblikovna zasnova naredi vašo aplikacijo profesionalno in izboljša splošno uporabniško izkušnjo. Uporabili bomo sodobne funkcije CSS, kot so Flexbox, CSS Grid in prilagojene lastnosti za odziven in dostopen dizajn.

Ustvarite datoteko `styles.css` s temi celovitimi slogi:

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

**Razumevanje arhitekture CSS:**
- **Uporablja** prilagojene lastnosti CSS (spremenljivke) za dosledno tematsko oblikovanje in enostavno vzdrževanje
- **Izvaja** postavitev Flexbox za odziven dizajn in pravilno poravnavo
- **Vključuje** gladke animacije za prikaz sporočil, ki niso moteče
- **Omogoča** vizualno razlikovanje med uporabniškimi sporočili, odgovori AI in stanji napak
- **Podpira** odziven dizajn, ki deluje tako na namiznih kot mobilnih napravah
- **Upošteva** dostopnost z zmanjšanimi preferencami gibanja in ustreznimi kontrastnimi razmerji
- **Ponuja** podporo za temni način glede na uporabnikove sistemske nastavitve

### Konfiguracija URL-ja vašega zalednega strežnika

Zadnji korak je posodobitev `BASE_URL` v vašem JavaScriptu, da se ujema z vašim zalednim strežnikom:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Določanje URL-ja vašega zalednega strežnika:**
- **Lokalni razvoj**: Uporabite `http://localhost:5000`, če lokalno poganjate tako sprednji kot zaledni del
- **Codespaces**: Poiščite URL vašega zalednega strežnika v zavihku Ports, potem ko naredite vrata 5000 javna
- **Produkcija**: Zamenjajte z vašo dejansko domeno ob namestitvi na gostiteljsko storitev

> 💡 **Nasvet za testiranje**: Vaš zaledni strežnik lahko neposredno testirate tako, da obiščete korenski URL v vašem brskalniku. Videti bi morali pozdravno sporočilo vašega strežnika FastAPI.



## Testiranje in namestitev

Zdaj, ko ste zgradili tako sprednji kot zaledni del, preverimo, ali vse deluje skupaj, in raziščimo možnosti namestitve za deljenje vašega klepetalnega asistenta z drugimi.

### Delovni proces lokalnega testiranja

Sledite tem korakom za testiranje vaše celotne aplikacije:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Postopek testiranja korak za korakom:**

1. **Zaženite vaš zaledni strežnik**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Preverite, ali API deluje**:
   - Odprite `http://localhost:5000` v vašem brskalniku
   - Videti bi morali pozdravno sporočilo vašega strežnika FastAPI

3. **Odprite vaš sprednji del**:
   - Pojdite v mapo vašega sprednjega dela
   - Odprite `index.html` v vašem spletnem brskalniku
   - Ali uporabite razširitev Live Server v VS Code za boljšo izkušnjo razvoja

4. **Testirajte funkcionalnost klepeta**:
   - Vnesite sporočilo v vnosno polje
   - Kliknite "Pošlji" ali pritisnite Enter
   - Preverite, ali AI ustrezno odgovarja
   - Preverite konzolo brskalnika za morebitne napake v JavaScriptu

### Odpravljanje pogostih težav

| Težava | Simptomi | Rešitev |
|--------|----------|---------|
| **Napaka CORS** | Sprednji del ne more doseči zalednega dela | Prepričajte se, da je FastAPI CORSMiddleware pravilno konfiguriran |
| **Napaka API ključa** | Odzivi 401 Unauthorized | Preverite vašo okoljsko spremenljivko `GITHUB_TOKEN` |
| **Zavrnjena povezava** | Napake omrežja v sprednjem delu | Preverite URL zalednega strežnika in ali strežnik Flask deluje |
| **Brez odgovora AI** | Prazni ali napačni odgovori | Preverite dnevnike zalednega dela za težave s kvoto API ali avtentikacijo |

**Pogosti koraki za odpravljanje napak:**
- **Preverite** konzolo orodij za razvijalce brskalnika za napake v JavaScriptu
- **Preverite** zavihek Network za uspešne zahteve in odgovore API
- **Preglejte** izhod terminala zalednega dela za napake v Pythonu ali težave z API
- **Preverite**, ali so okoljske spremenljivke pravilno naložene in dostopne

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte klepetalnega asistenta z dodajanjem zgodovine pogovorov in trajnosti sporočil. Ta izziv vam bo pomagal razumeti, kako upravljati stanje v aplikacijah za klepet in implementirati shranjevanje podatkov za boljšo uporabniško izkušnjo.

**Navodilo:** Spremenite aplikacijo za klepet tako, da vključuje zgodovino pogovorov, ki se ohrani med sejami. Dodajte funkcionalnost za shranjevanje sporočil klepeta v lokalno shrambo, prikaz zgodovine pogovorov ob nalaganju strani in vključite gumb "Počisti zgodovino". Prav tako implementirajte indikatorje tipkanja in časovne oznake sporočil, da bo izkušnja klepeta bolj realistična.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## Naloga: Zgradite svojega osebnega AI asistenta

Zdaj boste ustvarili svojo implementacijo AI asistenta. Namesto da preprosto ponovite kodo iz vadnice, je to priložnost, da uporabite koncepte in ustvarite nekaj, kar odraža vaše interese in potrebe.

### Zahteve projekta

Postavimo vaš projekt z jasno in organizirano strukturo:

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

### Osnovne naloge implementacije

**Razvoj zalednega dela:**
- **Prilagodite** našo kodo FastAPI in jo naredite svojo
- **Ustvarite** edinstveno osebnost AI – morda koristnega kuharskega asistenta, kreativnega pisateljskega partnerja ali učnega pomočnika?
- **Dodajte** zanesljivo obravnavo napak, da se vaša aplikacija ne bo zrušila, ko gre kaj narobe
- **Napišite** jasno dokumentacijo za vsakogar, ki želi razumeti, kako deluje vaš API

**Razvoj sprednjega dela:**
- **Zgradite** vmesnik za klepet, ki je intuitiven in prijazen
- **Napišite** čisto, sodobno JavaScript kodo, na katero boste ponosni
- **Oblikujte** prilagojeno oblikovanje, ki odraža osebnost vašega AI – zabavno in barvito? Čisto in minimalistično? Popolnoma po vaši izbiri!
- **Poskrbite**, da bo delovalo odlično tako na telefonih kot računalnikih

**Zahteve za personalizacijo:**
- **Izberite** edinstveno ime in osebnost za vašega AI asistenta – morda nekaj, kar odraža vaše interese ali težave, ki jih želite rešiti
- **Prilagodite** vizualno oblikovanje, da ustreza vibracijam vašega asistenta
- **Napišite** privlačno pozdravno sporočilo, ki bo ljudi spodbudilo k začetku klepeta
- **Testirajte** vašega asistenta z različnimi vrstami vprašanj, da vidite, kako se odziva

### Ideje za izboljšave (neobvezno)

Želite svoj projekt dvigniti na višjo raven? Tukaj je nekaj zabavnih idej za raziskovanje:

| Funkcija | Opis | Spretnosti, ki jih boste vadili |
|----------|------|--------------------------------|
| **Zgodovina sporočil** | Zapomni si pogovore tudi po osvežitvi strani | Delo z localStorage, obdelava JSON |
| **Indikatorji tipkanja** | Prikaži "AI tipka..." med čakanjem na odgovore | Animacije CSS, asinhrono programiranje |
| **Časovne oznake sporočil** | Prikaži, kdaj je bilo poslano vsako sporočilo | Oblikovanje datuma/časa, UX dizajn |
| **Izvoz klepeta** | Omogoči uporabnikom prenos njihovega pogovora | Upravljanje datotek, izvoz podatkov |
| **Preklapljanje tem** | Preklop med svetlim in temnim načinom | Spremenljivke CSS, uporabniške nastavitve |
| **Vnos glasu** | Dodaj funkcionalnost pretvorbe govora v besedilo | Spletni API-ji, dostopnost |

### Testiranje in dokumentacija

**Zagotavljanje kakovosti:**
- **Testirajte** vašo aplikacijo z različnimi vrstami vnosov in robnimi primeri
- **Preverite**, ali odziven dizajn deluje na različnih velikostih zaslona
- **Preverite** dostopnost s pomočjo navigacije s tipkovnico in bralnikov zaslona
- **Validirajte** HTML in CSS za skladnost s standardi

**Zahteve za dokumentacijo:**
- **Napišite** README.md, ki pojasnjuje vaš projekt in kako ga zagnati
- **Vključite** posnetke zaslona vašega vmesnika za klepet v akciji
- **Dokumentirajte** vse edinstvene funkcije ali prilagoditve, ki ste jih dodali
- **Zagotovite** jasna navodila za nastavitev za druge razvijalce

### Smernice za oddajo

**Dostava projekta:**
1. Popolna mapa projekta z vso izvorno kodo
2. README.md z opisom projekta in navodili za nastavitev
3. Posnetki zaslona, ki prikazujejo vašega klepetalnega asistenta v akciji
4. Kratek razmislek o tem, kaj ste se naučili in s kakšnimi izzivi ste se soočili

**Merila za ocenjevanje:**
- **Funkcionalnost**: Ali klepetalni asistent deluje, kot je pričakovano?
- **Kakovost kode**: Ali je koda dobro organizirana, komentirana in vzdržljiva?
- **Oblikovanje**: Ali je vmesnik vizualno privlačen in uporabniku prijazen?
- **Kreativnost**: Kako edinstvena in personalizirana je vaša implementacija?
- **Dokumentacija**: Ali so navodila za nastavitev jasna in popolna?

> 💡 **Nasvet za uspeh**: Najprej se osredotočite na osnovne zahteve, nato pa dodajte izboljšave, ko bo vse delovalo. Osredotočite se na ustvarjanje izpopolnjene osnovne izkušnje, preden dodate napredne funkcije.

## Rešitev

[Rešitev](./solution/README.md)

## Bonusni izzivi

Pripravljeni, da svojega AI asistenta dvignete na višjo raven? Preizkusite te napredne izzive, ki bodo poglobili vaše razumevanje integracije AI in spletnega razvoja.

### Prilagoditev osebnosti

Prava magija se zgodi, ko svojemu AI asistentu dodate edinstveno osebnost. Eksperimentirajte z različnimi sistemskimi pozivi za ustvarjanje specializiranih asistentov:

**Primer profesionalnega asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Primer pomočnika za kreativno pisanje:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Primer tehničnega mentorja:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Izboljšave sprednjega dela

Preoblikujte svoj vmesnik za klepet s temi vizualnimi in funkcionalnimi izboljšavami:

**Napredne funkcije CSS:**
- **Izvedite** gladke animacije in prehode sporočil
- **Dodajte** prilagojene oblike mehurčkov za klepet s CSS oblikami in gradienti
- **Ustvarite** animacijo indikatorja tipkanja za čas, ko AI "razmišlja"
- **Oblikujte** emoji reakcije ali sistem ocenjevanja sporočil

**Izboljšave JavaScripta:**
- **Dodajte** bližnjice na tipkovnici (Ctrl+Enter za pošiljanje, Escape za čiščenje vnosa)
- **Izvedite** funkcionalnost iskanja in filtriranja sporočil
- **Ustvarite** funkcijo izvoza pogovora (prenos kot besedilo ali JSON)
- **Dodajte** samodejno shranjevanje v localStorage, da preprečite izgubo sporočil

### Napredna integracija AI

**Več osebnosti AI:**
- **Ustvarite** spustni meni za preklapljanje med različnimi osebnostmi AI
- **Shranjujte** uporabnikovo izbrano osebnost v localStorage
- **Izvedite** preklapljanje konteksta, ki ohranja tok pogovora

**Pametne funkcije odgovarjanja:**
- **Dodajte** zavedanje konteksta pogovora (AI si zapomni prejšnja sporočila)
- **Izvedite** pametne predloge na podlagi teme pogovora
- **Ustvarite** gumbe za hitre odgovore na pogosta vprašanja

> 🎯 **Cilj učenja**: Ti bonusni izzivi vam pomagajo razumeti napredne vzorce spletnega razvoja in tehnike integracije AI, ki se uporabljajo v produkcijskih aplikacijah.

## Povzetek in naslednji koraki

Čestitke! Uspešno ste zgradili popolnega klepetalnega asistenta, ki ga poganja AI, od začetka. Ta projekt vam je omogočil praktične izkušnje s sodobnimi tehnologijami spletnega razvoja in integracijo AI – veščine, ki so v današnjem tehnološkem okolju vse bolj dragocene.

### Kaj ste dosegli

V tem poglavju ste obvladali več ključnih tehnologij in konceptov:

**Razvoj zalednega dela:**
- **Integrirali** z GitHub Models API za funkcionalnost AI
- **Zgradili** RESTful API z uporabo Flask z ustrezno obravnavo napak
- **Izvedli** varno avtentikacijo z uporabo okoljskih spremenljivk
- **Konfigurirali** CORS za zahteve med sprednjim in zalednim delom

**Razvoj sprednjega dela:**
- **Ustvarili** odziven vmesnik za klepet z uporabo semantičnega HTML
- **Izvedli** sodoben JavaScript z async/await in arhitekturo na osnovi razredov
- **Oblikovali** privlačen uporabniški vmesnik z CSS Grid, Flexbox in animacijami
- **Dodali** funkcije dostopnosti in načela odzivnega dizajna

**Integracija celotnega sklopa:**
- **Povezali** sprednji in zaledni del prek HTTP API klicev
- **Obravnavali** interakcije uporabnikov v realnem času in asinhroni tok podatkov
- **Izvedli** obravnavo napak in povratne informacije uporabnikom skozi aplikacijo
- **Testirali** celoten delovni proces aplikacije od vnosa uporabnika do odgovora AI

### Ključni učni izidi

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

Ta projekt vas je uvedel v osnove gradnje aplikacij, ki jih poganja AI, kar predstavlja prihodnost spletnega razvoja. Zdaj razumete, kako integrirati zmogljivosti AI v tradicionalne spletne aplikacije in ustvariti privlačne uporabniške izkušnje, ki se zdijo inteligentne in odzivne.

### Profesionalne aplikacije

Spretnosti, ki ste jih razvili v tem poglavju, so neposredno uporabne v sodobnih karierah programske opreme:

- **Spletni razvoj celotnega sklopa** z uporabo sodobnih ogrodij in API-jev
- **Integracija AI** v spletne aplikacije in mobilne aplikacije
- **Oblikovanje in razvoj API-jev** za arhitekture mikrostoritev
- **Razvoj uporabniškega vmesnika** s poudarkom na dostopnosti in odzivnem dizajnu
- **Prakse DevOps**, vključno s konfiguracijo okolja in namestitvijo

### Nadaljevanje vaše poti razvoja AI

**Naslednji koraki učenja:**
- **Raziščite** bolj napredne modele AI in API-je (GPT-4, Claude, Gemini)
- **Naučite se** tehnik oblikovanja pozivov za boljše odgovore AI
- **Preučite** oblikovanje pogovorov
- **Posredovanje vrat** za testiranje vaših aplikacij

**Kaj Codespaces omogoča:**
- **Odpravlja** težave z nastavitvijo in konfiguracijo lokalnega okolja
- **Omogoča** dosledno razvojno okolje na različnih napravah
- **Vključuje** vnaprej konfigurirana orodja in razširitve za spletni razvoj
- **Ponuja** brezhibno integracijo z GitHubom za nadzor različic in sodelovanje

> 🚀 **Nasvet za strokovnjake**: Codespaces je idealen za učenje in prototipiranje AI aplikacij, saj samodejno poskrbi za zapleteno nastavitev okolja, kar vam omogoča, da se osredotočite na ustvarjanje in učenje namesto na odpravljanje težav s konfiguracijo.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.