<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-23T22:00:32+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "da"
}
-->
# Byg en Chat-assistent med AI

Kan du huske i Star Trek, når besætningen afslappet talte med skibets computer, stillede komplekse spørgsmål og fik gennemtænkte svar? Det, der virkede som ren science fiction i 1960'erne, er nu noget, du kan bygge ved hjælp af webteknologier, du allerede kender.

I denne lektion vil vi skabe en AI-chatassistent ved hjælp af HTML, CSS, JavaScript og noget backend-integration. Du vil opdage, hvordan de samme færdigheder, du har lært, kan forbindes til kraftfulde AI-tjenester, der kan forstå kontekst og generere meningsfulde svar.

Tænk på AI som at have adgang til et enormt bibliotek, der ikke kun kan finde information, men også syntetisere det til sammenhængende svar skræddersyet til dine specifikke spørgsmål. I stedet for at søge gennem tusindvis af sider får du direkte, kontekstuelle svar.

Integrationen sker gennem velkendte webteknologier, der arbejder sammen. HTML skaber chatgrænsefladen, CSS håndterer det visuelle design, JavaScript styrer brugerinteraktioner, og en backend-API forbinder det hele til AI-tjenesterne. Det er lidt som hvordan forskellige sektioner af et orkester arbejder sammen for at skabe en symfoni.

Vi bygger i bund og grund en bro mellem naturlig menneskelig kommunikation og maskinbearbejdning. Du vil lære både den tekniske implementering af AI-tjenesteintegration og de designmønstre, der gør interaktioner intuitive.

Ved slutningen af denne lektion vil AI-integration føles mindre som en mystisk proces og mere som en anden API, du kan arbejde med. Du vil forstå de grundlæggende mønstre, der driver applikationer som ChatGPT og Claude, ved hjælp af de samme webudviklingsprincipper, du har lært.

Her er, hvordan dit færdige projekt vil se ud:

![Chat-app-grænseflade, der viser en samtale mellem bruger og AI-assistent](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.da.png)

## Forstå AI: Fra mystik til mestring

Før vi dykker ned i koden, lad os forstå, hvad vi arbejder med. Hvis du har brugt API'er før, kender du det grundlæggende mønster: send en forespørgsel, modtag et svar.

AI-API'er følger en lignende struktur, men i stedet for at hente forudlagret data fra en database genererer de nye svar baseret på mønstre, der er lært fra enorme mængder tekst. Tænk på det som forskellen mellem et bibliotekskatalogsystem og en vidende bibliotekar, der kan syntetisere information fra flere kilder.

### Hvad er "Generativ AI" egentlig?

Tænk på, hvordan Rosetta-stenen gjorde det muligt for forskere at forstå egyptiske hieroglyffer ved at finde mønstre mellem kendte og ukendte sprog. AI-modeller fungerer på samme måde – de finder mønstre i enorme mængder tekst for at forstå, hvordan sprog fungerer, og bruger derefter disse mønstre til at generere passende svar på nye spørgsmål.

**Lad mig forklare det med en simpel sammenligning:**
- **Traditionel database**: Som at bede om din fødselsattest – du får det samme dokument hver gang.
- **Søgemaskine**: Som at bede en bibliotekar om at finde bøger om katte – de viser dig, hvad der er tilgængeligt.
- **Generativ AI**: Som at spørge en vidende ven om katte – de fortæller dig interessante ting med deres egne ord, skræddersyet til det, du vil vide.

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Hvordan AI-modeller lærer (den enkle version)

AI-modeller lærer gennem eksponering for enorme datasæt, der indeholder tekst fra bøger, artikler og samtaler. Gennem denne proces identificerer de mønstre i:
- Hvordan tanker er struktureret i skriftlig kommunikation
- Hvilke ord der ofte optræder sammen
- Hvordan samtaler typisk forløber
- Kontekstuelle forskelle mellem formel og uformel kommunikation

**Det er lidt som hvordan arkæologer afkoder gamle sprog**: De analyserer tusindvis af eksempler for at forstå grammatik, ordforråd og kulturel kontekst og bliver til sidst i stand til at tolke nye tekster ved hjælp af de lærte mønstre.

### Hvorfor GitHub-modeller?

Vi bruger GitHub-modeller af en ret praktisk grund – det giver os adgang til AI på virksomhedsniveau uden at skulle opsætte vores egen AI-infrastruktur (hvilket, tro mig, du ikke har lyst til lige nu!). Tænk på det som at bruge en vejr-API i stedet for at forsøge at forudsige vejret selv ved at opsætte vejrstationer overalt.

Det er i bund og grund "AI-som-en-tjeneste", og det bedste? Det er gratis at komme i gang, så du kan eksperimentere uden at bekymre dig om at få en stor regning.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Vi bruger GitHub-modeller til vores backend-integration, som giver adgang til professionelle AI-funktioner gennem en udviklervenlig grænseflade. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) fungerer som et testmiljø, hvor du kan eksperimentere med forskellige AI-modeller og forstå deres kapaciteter, før du implementerer dem i kode.

![GitHub Models AI Playground-grænseflade med modelvalg og testområde](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.da.png)

**Her er, hvad der gør playground så nyttig:**
- **Prøv** forskellige AI-modeller som GPT-4o-mini, Claude og andre (alle gratis!)
- **Test** dine ideer og prompts, før du skriver nogen kode
- **Få** klar-til-brug kodeeksempler i dit foretrukne programmeringssprog
- **Tilpas** indstillinger som kreativitet og svarlængde for at se, hvordan de påvirker output

Når du har leget lidt, skal du bare klikke på fanen "Code" og vælge dit programmeringssprog for at få den implementeringskode, du har brug for.

![Playground-valg, der viser kodegenereringsmuligheder for forskellige programmeringssprog](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.da.png)

## Opsætning af Python-backend-integration

Nu skal vi implementere AI-integrationen ved hjælp af Python. Python er fremragende til AI-applikationer på grund af sin enkle syntaks og kraftfulde biblioteker. Vi starter med koden fra GitHub Models Playground og refaktorerer den derefter til en genanvendelig, produktionsklar funktion.

### Forståelse af basisimplementeringen

Når du henter Python-koden fra playground, får du noget, der ser sådan ud. Bare rolig, hvis det virker som meget i starten – lad os gennemgå det stykke for stykke:

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

**Her er, hvad der sker i denne kode:**
- **Vi importerer** de værktøjer, vi har brug for: `os` til at læse miljøvariabler og `OpenAI` til at kommunikere med AI
- **Vi opsætter** OpenAI-klienten til at pege på GitHubs AI-servere i stedet for OpenAI direkte
- **Vi autentificerer** med en speciel GitHub-token (mere om det om lidt!)
- **Vi strukturerer** vores samtale med forskellige "roller" – tænk på det som at sætte scenen for et skuespil
- **Vi sender** vores forespørgsel til AI med nogle finjusteringsparametre
- **Vi udtrækker** den faktiske svartekst fra alle de data, der kommer tilbage

### Forståelse af beskedroller: AI-samtalens rammeværk

AI-samtaler bruger en specifik struktur med forskellige "roller", der tjener forskellige formål:

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

**Tænk på det som at instruere et skuespil:**
- **Systemrolle**: Som sceneanvisninger for en skuespiller – det fortæller AI, hvordan den skal opføre sig, hvilken personlighed den skal have, og hvordan den skal svare
- **Brugerrolle**: Det faktiske spørgsmål eller besked fra personen, der bruger din applikation
- **Assistentrolle**: AI's svar (du sender ikke dette, men det vises i samtalehistorikken)

**Virkelighedsanalog**: Forestil dig, at du introducerer en ven til nogen til en fest:
- **Systembesked**: "Dette er min ven Sarah, hun er læge og er fantastisk til at forklare medicinske begreber på en enkel måde"
- **Brugerbesked**: "Kan du forklare, hvordan vacciner fungerer?"
- **Assistentens svar**: Sarah svarer som en venlig læge, ikke som en advokat eller kok

### Forståelse af AI-parametre: Finjustering af svaradfærd

De numeriske parametre i AI-API-kald styrer, hvordan modellen genererer svar. Disse indstillinger giver dig mulighed for at justere AI's adfærd til forskellige anvendelser:

#### Temperatur (0.0 til 2.0): Kreativitetsknappen

**Hvad det gør**: Styrer, hvor kreativ eller forudsigelig AI's svar vil være.

**Tænk på det som en jazzmusikers improvisationsniveau:**
- **Temperatur = 0.1**: Spiller den samme melodi hver gang (meget forudsigelig)
- **Temperatur = 0.7**: Tilføjer nogle smagfulde variationer, mens den forbliver genkendelig (balanceret kreativitet)
- **Temperatur = 1.5**: Fuld eksperimentel jazz med uventede drejninger (meget uforudsigelig)

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

#### Max Tokens (1 til 4096+): Kontrol af svarlængde

**Hvad det gør**: Sætter en grænse for, hvor langt AI's svar kan være.

**Tænk på tokens som nogenlunde svarende til ord** (ca. 1 token = 0.75 ord på engelsk):
- **max_tokens=50**: Kort og præcist (som en tekstbesked)
- **max_tokens=500**: Et pænt afsnit eller to
- **max_tokens=2000**: En detaljeret forklaring med eksempler

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

#### Top_p (0.0 til 1.0): Fokusparameteren

**Hvad det gør**: Styrer, hvor fokuseret AI forbliver på de mest sandsynlige svar.

**Forestil dig, at AI har et enormt ordforråd, rangeret efter hvor sandsynligt hvert ord er:**
- **top_p=0.1**: Overvejer kun de 10% mest sandsynlige ord (meget fokuseret)
- **top_p=0.9**: Overvejer 90% af mulige ord (mere kreativ)
- **top_p=1.0**: Overvejer alt (maksimal variation)

**For eksempel**: Hvis du spørger "Himlen er normalt..."
- **Lav top_p**: Siger næsten helt sikkert "blå"
- **Høj top_p**: Kan sige "blå", "overskyet", "vidstrakt", "foranderlig", "smuk" osv.

### Sammenkobling af det hele: Parameterkombinationer til forskellige anvendelser

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

**Forståelse af, hvorfor disse parametre betyder noget**: Forskellige applikationer har brug for forskellige typer svar. En kundeservicebot bør være konsekvent og faktuel (lav temperatur), mens en kreativ skriveassistent bør være fantasifuld og varieret (høj temperatur). Forståelse af disse parametre giver dig kontrol over din AI's personlighed og svarstil.
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

**Forståelse af denne forbedrede funktion:**
- **Accepterer** to parametre: brugerens prompt og en valgfri systembesked
- **Tilbyder** en standard systembesked for generel assistentadfærd
- **Bruger** korrekte Python-type hints for bedre kodedokumentation
- **Returnerer** kun svarindholdet, hvilket gør det nemt at bruge i vores web-API
- **Bevarer** de samme modelparametre for konsekvent AI-adfærd

### Magien ved systemprompter: Programmering af AI's personlighed

Hvis parametre styrer, hvordan AI tænker, styrer systemprompter, hvem AI tror, den er. Dette er ærligt talt en af de mest fascinerende dele ved at arbejde med AI – du giver i bund og grund AI en komplet personlighed, ekspertiseniveau og kommunikationsstil.

**Tænk på systemprompter som at caste forskellige skuespillere til forskellige roller**: I stedet for at have én generisk assistent kan du skabe specialiserede eksperter til forskellige situationer. Har du brug for en tålmodig lærer? En kreativ sparringspartner? En no-nonsense forretningsrådgiver? Bare ændr systemprompten!

#### Hvorfor systemprompter er så kraftfulde

Her er det fascinerende: AI-modeller er blevet trænet på utallige samtaler, hvor folk indtager forskellige roller og ekspertiseniveauer. Når du giver AI en specifik rolle, er det som at aktivere alle de lærte mønstre.

**Det er som metode-skuespil for AI**: Fortæl en skuespiller "du er en klog gammel professor" og se, hvordan de automatisk justerer deres holdning, ordforråd og manerer. AI gør noget bemærkelsesværdigt lignende med sprogmønstre.

#### Udformning af effektive systemprompter: Kunst og videnskab

**Anatomien af en god systemprompt:**
1. **Rolle/Identitet**: Hvem er AI?
2. **Ekspertise**: Hvad ved den?
3. **Kommunikationsstil**: Hvordan taler den?
4. **Specifikke instruktioner**: Hvad skal den fokusere på?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Eksempler på systemprompter med kontekst

Lad os se, hvordan forskellige systemprompter skaber helt forskellige AI-personligheder:

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

#### Se systemprompter i aktion

Lad os teste det samme spørgsmål med forskellige systemprompter for at se de dramatiske forskelle:

**Spørgsmål**: "Hvordan håndterer jeg brugerautentifikation i min webapp?"

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

#### Avancerede teknikker til systemprompter

**1. Kontekstopsætning**: Giv AI baggrundsinformation
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Outputformatering**: Fortæl AI, hvordan den skal strukturere svar
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

**3. Begrænsningsopsætning**: Definer, hvad AI ikke skal gøre
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Hvorfor dette er vigtigt for din chat-assistent

Forståelse af systemprompter giver dig utrolig magt til at skabe specialiserede AI-assistenter:
- **Kundeservicebot**: Hjælpsom, tålmodig, politikbevidst
- **Læringsvejleder**: Opmuntrende, trin-for-trin, tjekker forståelse
- **Kreativ partner**: Fantasifuld, bygger videre på ideer, spørger "hvad nu hvis?"
- **Teknisk ekspert**: Præcis, detaljeret, sikkerhedsbevidst

**Den vigtigste indsigt**: Du kalder ikke bare en AI-API – du skaber en skræddersyet AI-personlighed, der tjener din specifikke anvendelse. Det er det, der gør moderne AI-applikationer føles skræddersyede og nyttige frem for generiske.

## Bygning af web-API med FastAPI: Din højtydende AI-kommunikationshub

Nu skal vi bygge den backend, der forbinder din frontend med AI-tjenesterne. Vi bruger FastAPI, et moderne Python-framework, der er fremragende til at bygge API'er til AI-applikationer.

FastAPI tilbyder flere fordele for denne type projekt: indbygget async-support til håndtering af samtidige forespørgsler, automatisk API-dokumentationsgenerering og fremragende ydeevne. Din FastAPI-server fungerer som en mellemmand, der modtager forespørgsler fra frontend, kommunikerer med AI-tjenester og returnerer formaterede svar.

### Hvorfor FastAPI til AI-applikationer?

Du tænker måske: "Kan jeg ikke bare kalde AI direkte fra min frontend JavaScript?" eller "Hvorfor FastAPI i stedet for Flask eller Django?" Gode spørgsmål! 
**Her er hvorfor FastAPI er perfekt til det, vi bygger:**
- **Async som standard**: Kan håndtere flere AI-anmodninger på én gang uden at gå i stå
- **Automatisk dokumentation**: Besøg `/docs` og få en flot, interaktiv API-dokumentationsside gratis
- **Indbygget validering**: Fanger fejl, før de skaber problemer
- **Lynhurtig**: En af de hurtigste Python-frameworks der findes
- **Moderne Python**: Udnytter de nyeste og bedste Python-funktioner

**Og her er hvorfor vi overhovedet har brug for en backend:**

**Sikkerhed**: Din AI API-nøgle er som en adgangskode – hvis du placerer den i frontend JavaScript, kan enhver, der ser din hjemmesides kildekode, stjæle den og bruge dine AI-kreditter. Backenden holder følsomme legitimationsoplysninger sikre.

**Ratebegrænsning & kontrol**: Backenden giver dig mulighed for at kontrollere, hvor ofte brugere kan sende anmodninger, implementere brugerautentifikation og tilføje logning for at spore brugen.

**Databehandling**: Du vil måske gemme samtaler, filtrere upassende indhold eller kombinere flere AI-tjenester. Backenden er stedet, hvor denne logik lever.

**Arkitekturen ligner en klient-server-model:**
- **Frontend**: Brugergrænsefladelag til interaktion
- **Backend API**: Anmodningsbehandlings- og routingslag
- **AI-tjeneste**: Ekstern beregning og responsgenerering
- **Miljøvariabler**: Sikker konfiguration og opbevaring af legitimationsoplysninger

### Forståelse af anmodnings-respons flow

Lad os spore, hvad der sker, når en bruger sender en besked:

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

**Forståelse af hvert trin:**
1. **Brugerinteraktion**: Personen skriver i chatgrænsefladen
2. **Frontend-behandling**: JavaScript fanger input og formaterer det som JSON
3. **API-validering**: FastAPI validerer automatisk anmodningen ved hjælp af Pydantic-modeller
4. **AI-integration**: Backend tilføjer kontekst (systemprompt) og kalder AI-tjenesten
5. **Responshåndtering**: API modtager AI-responsen og kan ændre den, hvis nødvendigt
6. **Frontend-visning**: JavaScript viser responsen i chatgrænsefladen

### Forståelse af API-arkitektur

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

### Oprettelse af FastAPI-applikationen

Lad os bygge vores API trin for trin. Opret en fil kaldet `api.py` med følgende FastAPI-kode:

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

**Forståelse af FastAPI-implementeringen:**
- **Importer** FastAPI for moderne webframework-funktionalitet og Pydantic for datavalidering
- **Opretter** automatisk API-dokumentation (tilgængelig på `/docs`, når serveren kører)
- **Aktiverer** CORS-middleware for at tillade frontend-anmodninger fra forskellige oprindelser
- **Definerer** Pydantic-modeller for automatisk validering og dokumentation af anmodninger/responser
- **Bruger** asynkrone endpoints for bedre ydeevne med samtidige anmodninger
- **Implementerer** korrekte HTTP-statuskoder og fejlhåndtering med HTTPException
- **Inkluderer** struktureret logning til overvågning og fejlfinding
- **Tilbyder** en sundhedstjek-endpoint til overvågning af tjenestens status

**Vigtige fordele ved FastAPI frem for traditionelle frameworks:**
- **Automatisk validering**: Pydantic-modeller sikrer dataintegritet før behandling
- **Interaktiv dokumentation**: Besøg `/docs` for auto-genereret, testbar API-dokumentation
- **Type-sikkerhed**: Python type hints forhindrer runtime-fejl og forbedrer kodekvaliteten
- **Async support**: Håndter flere AI-anmodninger samtidigt uden blokering
- **Ydeevne**: Markant hurtigere anmodningsbehandling til realtidsapplikationer

### Forståelse af CORS: Webs sikkerhedsvagt

CORS (Cross-Origin Resource Sharing) er som en sikkerhedsvagt ved en bygning, der tjekker, om besøgende har tilladelse til at komme ind. Lad os forstå, hvorfor dette er vigtigt, og hvordan det påvirker din applikation.

#### Hvad er CORS, og hvorfor eksisterer det?

**Problemet**: Forestil dig, hvis enhver hjemmeside kunne sende anmodninger til din banks hjemmeside på dine vegne uden din tilladelse. Det ville være en sikkerhedskatastrofe! Browsere forhindrer dette som standard gennem "Same-Origin Policy."

**Same-Origin Policy**: Browsere tillader kun websider at sende anmodninger til det samme domæne, port og protokol, som de blev indlæst fra.

**Virkelighedens analogi**: Det er som sikkerheden i en lejlighedsbygning – kun beboere (samme oprindelse) kan få adgang til bygningen som standard. Hvis du vil lade en ven (anden oprindelse) besøge, skal du eksplicit fortælle sikkerheden, at det er okay.

#### CORS i dit udviklingsmiljø

Under udvikling kører din frontend og backend på forskellige porte:
- Frontend: `http://localhost:3000` (eller file:// hvis du åbner HTML direkte)
- Backend: `http://localhost:5000`

Disse betragtes som "forskellige oprindelser", selvom de er på den samme computer!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Hvad CORS-konfiguration gør i praksis:**
- **Tilføjer** specielle HTTP-headers til API-responser, der fortæller browsere "denne cross-origin anmodning er tilladt"
- **Håndterer** "preflight"-anmodninger (browsere tjekker nogle gange tilladelser, før de sender den faktiske anmodning)
- **Forhindrer** den frygtede "blokeret af CORS-politik"-fejl i din browserkonsol

#### CORS-sikkerhed: Udvikling vs produktion

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

**Hvorfor dette er vigtigt**: Under udvikling er `CORS(app)` som at lade din hoveddør stå ulåst – praktisk, men ikke sikkert. I produktion vil du specificere præcis, hvilke hjemmesider der kan kommunikere med din API.

#### Almindelige CORS-scenarier og løsninger

| Scenario | Problem | Løsning |
|----------|---------|---------|
| **Lokal udvikling** | Frontend kan ikke nå backend | Tilføj CORSMiddleware til FastAPI |
| **GitHub Pages + Heroku** | Udrullet frontend kan ikke nå API | Tilføj din GitHub Pages URL til CORS oprindelser |
| **Eget domæne** | CORS-fejl i produktion | Opdater CORS oprindelser til at matche dit domæne |
| **Mobilapp** | App kan ikke nå web-API | Tilføj din apps domæne eller brug `*` med forsigtighed |

**Tip**: Du kan tjekke CORS-headers i din browsers Developer Tools under fanen Network. Kig efter headers som `Access-Control-Allow-Origin` i responsen.

### Fejlhåndtering og validering

Bemærk, hvordan vores API inkluderer korrekt fejlhåndtering:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Vigtige valideringsprincipper:**
- **Tjekker** for påkrævede felter før behandling af anmodninger
- **Returnerer** meningsfulde fejlmeddelelser i JSON-format
- **Bruger** passende HTTP-statuskoder (400 for dårlige anmodninger)
- **Giver** klar feedback for at hjælpe frontend-udviklere med at fejlfinde problemer

## Opsætning og kørsel af din backend

Nu hvor vi har vores AI-integration og FastAPI-server klar, lad os få det hele i gang. Opsætningsprocessen involverer installation af Python-afhængigheder, konfiguration af miljøvariabler og start af din udviklingsserver.

### Python-miljøopsætning

Lad os opsætte dit Python-udviklingsmiljø. Virtuelle miljøer er som Manhattan-projektets compartmentaliserede tilgang – hvert projekt får sit eget isolerede rum med specifikke værktøjer og afhængigheder, hvilket forhindrer konflikter mellem forskellige projekter.

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

**Hvad vi lige gjorde:**
- **Oprettede** vores egen lille Python-boble, hvor vi kan installere pakker uden at påvirke noget andet
- **Aktiverede** det, så vores terminal ved at bruge dette specifikke miljø
- **Installerede** det nødvendige: OpenAI til AI-magi, FastAPI til vores web-API, Uvicorn til faktisk at køre det, og python-dotenv til sikker håndtering af hemmeligheder

**Vigtige afhængigheder forklaret:**
- **FastAPI**: Moderne, hurtigt webframework med automatisk API-dokumentation
- **Uvicorn**: Lynhurtig ASGI-server, der kører FastAPI-applikationer
- **OpenAI**: Officiel bibliotek til GitHub-modeller og OpenAI API-integration
- **python-dotenv**: Sikker indlæsning af miljøvariabler fra .env-filer

### Miljøkonfiguration: Hold hemmeligheder sikre

Før vi starter vores API, skal vi tale om en af de vigtigste lektioner i webudvikling: hvordan man holder sine hemmeligheder faktisk hemmelige. Miljøvariabler er som en sikker boks, som kun din applikation kan få adgang til.

#### Hvad er miljøvariabler?

**Tænk på miljøvariabler som en sikkerhedsboks** – du lægger dine værdigenstande derind, og kun du (og din app) har nøglen til at få dem ud. I stedet for at skrive følsomme oplysninger direkte i din kode (hvor bogstaveligt talt alle kan se dem), gemmer du dem sikkert i miljøet.

**Her er forskellen:**
- **Den forkerte måde**: Skrive din adgangskode på en post-it og sætte den på din skærm
- **Den rigtige måde**: Opbevare din adgangskode i en sikker adgangskode-manager, som kun du kan få adgang til

#### Hvorfor miljøvariabler er vigtige

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

**Hvad der sker, når du hardcoder hemmeligheder:**
1. **Eksponering i versionskontrol**: Alle med adgang til dit Git-repository kan se din API-nøgle
2. **Offentlige repositories**: Hvis du uploader til GitHub, er din nøgle synlig for hele internettet
3. **Deling med teamet**: Andre udviklere, der arbejder på dit projekt, får adgang til din personlige API-nøgle
4. **Sikkerhedsbrud**: Hvis nogen stjæler din API-nøgle, kan de bruge dine AI-kreditter

#### Opsætning af din miljøfil

Opret en `.env`-fil i din backend-mappe. Denne fil gemmer dine hemmeligheder lokalt:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Forståelse af .env-filen:**
- **Én hemmelighed per linje** i `KEY=value`-format
- **Ingen mellemrum** omkring lighedstegnet
- **Ingen anførselstegn** nødvendige omkring værdier (normalt)
- **Kommentarer** starter med `#`

#### Oprettelse af din GitHub Personal Access Token

Din GitHub-token er som en speciel adgangskode, der giver din applikation tilladelse til at bruge GitHubs AI-tjenester:

**Trin-for-trin token-oprettelse:**
1. **Gå til GitHub-indstillinger** → Udviklerindstillinger → Personlige adgangstokens → Tokens (klassisk)
2. **Klik på "Generer nyt token (klassisk)"**
3. **Indstil udløb** (30 dage til test, længere til produktion)
4. **Vælg scopes**: Marker "repo" og andre nødvendige tilladelser
5. **Generer token** og kopier det med det samme (du kan ikke se det igen!)
6. **Indsæt det i din .env-fil**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Indlæsning af miljøvariabler i Python

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

**Hvad denne kode gør:**
- **Indlæser** din .env-fil og gør variabler tilgængelige for Python
- **Tjekker** om den nødvendige token eksisterer (god fejlhåndtering!)
- **Rejser** en klar fejl, hvis token mangler
- **Bruger** token sikkert uden at eksponere det i koden

#### Git-sikkerhed: .gitignore-filen

Din `.gitignore`-fil fortæller Git, hvilke filer der aldrig skal spores eller uploades:

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

**Hvorfor dette er afgørende**: Når du tilføjer `.env` til `.gitignore`, vil Git ignorere din miljøfil, hvilket forhindrer dig i utilsigtet at uploade dine hemmeligheder til GitHub.

#### Forskellige miljøer, forskellige hemmeligheder

Professionelle applikationer bruger forskellige API-nøgler til forskellige miljøer:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Hvorfor dette er vigtigt**: Du vil ikke have, at dine udviklingseksperimenter påvirker din produktions-AI-brugskvote, og du ønsker forskellige sikkerhedsniveauer for forskellige miljøer.

### Start af din udviklingsserver: Bring din FastAPI til live

Nu kommer det spændende øjeblik – start din FastAPI-udviklingsserver og se din AI-integration komme til live! FastAPI bruger Uvicorn, en lynhurtig ASGI-server, der er specielt designet til asynkrone Python-applikationer.

#### Forståelse af FastAPI-serverens opstartsproces

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Når du kører denne kommando, sker følgende bag kulisserne:

**1. Python indlæser din FastAPI-applikation**:
- Importerer alle nødvendige biblioteker (FastAPI, Pydantic, OpenAI osv.)
- Indlæser miljøvariabler fra din `.env`-fil
- Opretter FastAPI-applikationsinstansen med automatisk dokumentation

**2. Uvicorn konfigurerer ASGI-serveren**:
- Binder til port 5000 med asynkron anmodningshåndtering
- Opsætter anmodningsrouting med automatisk validering
- Aktiverer hot reload til udvikling (genstarter ved filændringer)
- Genererer interaktiv API-dokumentation

**3. Serveren begynder at lytte**:
- Din terminal viser: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Serveren kan håndtere flere samtidige AI-anmodninger
- Din API er klar med automatisk dokumentation på `http://localhost:5000/docs`

#### Hvad du bør se, når alt fungerer

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Forståelse af FastAPI-output:**
- **Vil overvåge ændringer**: Auto-reload aktiveret til udvikling
- **Uvicorn kører**: Højtydende ASGI-server er aktiv
- **Genstarter proces**: Filovervågning til automatiske genstarter
- **Applikationsopstart fuldført**: FastAPI-app initialiseret med succes
- **Interaktiv dokumentation tilgængelig**: Besøg `/docs` for automatisk API-dokumentation

#### Test af din FastAPI: Flere kraftfulde metoder

FastAPI tilbyder flere praktiske måder at teste din API på, inklusive automatisk interaktiv dokumentation:

**Metode 1: Interaktiv API-dokumentation (anbefales)**
1. Åbn din browser og gå til `http://localhost:5000/docs`
2. Du vil se Swagger UI med alle dine endpoints dokumenteret
3. Klik på `/hello` → "Prøv det" → Indtast en testbesked → "Udfør"
4. Se responsen direkte i browseren med korrekt formatering

**Metode 2: Grundlæggende browser-test**
1. Gå til `http://localhost:5000` for root-endpointet
2. Gå til `http://localhost:5000/health` for at tjekke serverens sundhed
3. Dette bekræfter, at din FastAPI-server kører korrekt

**Metode 2: Kommandolinjetest (avanceret)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Metode 3: Python-testscript**
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

#### Fejlfinding af almindelige opstartsproblemer

| Fejlmeddelelse | Hvad det betyder | Sådan løser du det |
|----------------|------------------|--------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI er ikke installeret | Kør `pip install fastapi uvicorn` i din virtuelle miljø |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-serveren er ikke installeret | Kør `pip install uvicorn` i din virtuelle miljø |
| `KeyError: 'GITHUB_TOKEN'` | Miljøvariabel ikke fundet | Tjek din `.env`-fil og `load_dotenv()`-kald |
| `Address already in use` | Port 5000 er optaget | Luk andre processer, der bruger port 5000, eller skift porten |
| `ValidationError` | Forespørgselsdata matcher ikke Pydantic-modellen | Tjek, om din forespørgselsformat matcher det forventede skema |
| `HTTPException 422` | Ubehandlingsbar enhed | Forespørgselsvalidering mislykkedes, tjek `/docs` for korrekt format |
| `OpenAI API error` | AI-tjenesteautentificering mislykkedes | Bekræft, at din GitHub-token er korrekt og har de nødvendige tilladelser |

#### Bedste praksis for udvikling

**Automatisk genindlæsning**: FastAPI med Uvicorn tilbyder automatisk genindlæsning, når du gemmer ændringer i dine Python-filer. Det betyder, at du kan ændre din kode og teste med det samme uden at genstarte manuelt.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Logning til udvikling**: Tilføj logning for at forstå, hvad der sker:

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

**Hvorfor logning hjælper**: Under udvikling kan du se præcis, hvilke forespørgsler der kommer ind, hvad AI'en svarer med, og hvor fejl opstår. Det gør fejlfinding meget hurtigere.

### Konfiguration til GitHub Codespaces: Cloud-udvikling gjort nemt

GitHub Codespaces er som at have en kraftfuld udviklingscomputer i skyen, som du kan tilgå fra enhver browser. Hvis du arbejder i Codespaces, er der nogle ekstra trin for at gøre din backend tilgængelig for din frontend.

#### Forstå Codespaces-netværk

I et lokalt udviklingsmiljø kører alt på den samme computer:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (eller file://)

I Codespaces kører dit udviklingsmiljø på GitHubs servere, så "localhost" har en anden betydning. GitHub opretter automatisk offentlige URL'er til dine tjenester, men du skal konfigurere dem korrekt.

#### Trin-for-trin Codespaces-konfiguration

**1. Start din backend-server**:
```bash
cd backend
python api.py
```

Du vil se den velkendte FastAPI/Uvicorn-opstartsbesked, men bemærk, at den kører inde i Codespace-miljøet.

**2. Konfigurer portens synlighed**:
- Kig efter fanen "Ports" i den nederste panel i VS Code
- Find port 5000 på listen
- Højreklik på port 5000
- Vælg "Port Visibility" → "Public"

**Hvorfor gøre den offentlig?** Som standard er Codespace-porte private (kun tilgængelige for dig). Ved at gøre den offentlig kan din frontend (som kører i browseren) kommunikere med din backend.

**3. Få din offentlige URL**:
Efter at have gjort porten offentlig, vil du se en URL som:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Opdater din frontend-konfiguration**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Forstå Codespace-URL'er

Codespace-URL'er følger et forudsigeligt mønster:
```
https://[codespace-name]-[port].app.github.dev
```

**Forklaring**:
- `codespace-name`: En unik identifikator for din Codespace (inkluderer normalt dit brugernavn)
- `port`: Portnummeret din tjeneste kører på (5000 for vores FastAPI-app)
- `app.github.dev`: GitHubs domæne for Codespace-applikationer

#### Test din Codespace-opsætning

**1. Test backend direkte**:
Åbn din offentlige URL i en ny browserfane. Du bør se:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Test med browserens udviklerværktøjer**:
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

#### Codespaces vs Lokal Udvikling

| Aspekt | Lokal Udvikling | GitHub Codespaces |
|--------|-----------------|-------------------|
| **Opsætningstid** | Længere (installér Python, afhængigheder) | Øjeblikkelig (forudkonfigureret miljø) |
| **URL-adgang** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Portkonfiguration** | Automatisk | Manuel (gør porte offentlige) |
| **Filpersistens** | Lokal maskine | GitHub-repository |
| **Samarbejde** | Svært at dele miljø | Nem at dele Codespace-link |
| **Internetafhængighed** | Kun for AI API-kald | Nødvendigt for alt |

#### Tips til udvikling i Codespaces

**Miljøvariabler i Codespaces**:
Din `.env`-fil fungerer på samme måde i Codespaces, men du kan også indstille miljøvariabler direkte i Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Porthåndtering**:
- Codespaces registrerer automatisk, når din applikation begynder at lytte på en port
- Du kan videresende flere porte samtidigt (nyttigt, hvis du senere tilføjer en database)
- Porte forbliver tilgængelige, så længe din Codespace kører

**Udviklingsworkflow**:
1. Lav kodeændringer i VS Code
2. FastAPI genindlæser automatisk (takket være Uvicorns genindlæsningsfunktion)
3. Test ændringer med det samme via den offentlige URL
4. Commit og push, når du er klar

> 💡 **Pro Tip**: Bogmærk din Codespace backend-URL under udvikling. Da Codespace-navne er stabile, ændrer URL'en sig ikke, så længe du bruger den samme Codespace.

## Oprettelse af frontend-chatgrænsefladen: Hvor mennesker møder AI

Nu skal vi bygge brugergrænsefladen – den del, der bestemmer, hvordan folk interagerer med din AI-assistent. Ligesom designet af den originale iPhone-grænseflade fokuserer vi på at gøre kompleks teknologi intuitiv og nem at bruge.

### Forstå moderne frontend-arkitektur

Vores chatgrænseflade vil være det, vi kalder en "Single Page Application" eller SPA. I stedet for den gammeldags tilgang, hvor hvert klik indlæser en ny side, opdaterer vores app glat og øjeblikkeligt:

**Gamle hjemmesider**: Som at læse en fysisk bog – du bladrer til helt nye sider
**Vores chat-app**: Som at bruge din telefon – alt flyder og opdateres problemfrit

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

### De tre søjler i frontend-udvikling

Hver frontend-applikation – fra simple hjemmesider til komplekse apps som Discord eller Slack – er bygget på tre kerne-teknologier. Tænk på dem som fundamentet for alt, hvad du ser og interagerer med på nettet:

**HTML (Struktur)**: Dette er dit fundament
- Bestemmer, hvilke elementer der findes (knapper, tekstfelter, containere)
- Giver mening til indhold (dette er en overskrift, dette er en formular osv.)
- Skaber den grundlæggende struktur, som alt andet bygger på

**CSS (Præsentation)**: Dette er din indretningsarkitekt
- Får alt til at se smukt ud (farver, skrifttyper, layouts)
- Håndterer forskellige skærmstørrelser (telefon vs laptop vs tablet)
- Skaber glatte animationer og visuel feedback

**JavaScript (Adfærd)**: Dette er din hjerne
- Reagerer på, hvad brugerne gør (klik, indtastning, scrolling)
- Kommunikerer med din backend og opdaterer siden
- Gør alt interaktivt og dynamisk

**Tænk på det som arkitektonisk design:**
- **HTML**: Den strukturelle plan (definerer rum og relationer)
- **CSS**: Den æstetiske og miljømæssige design (visuel stil og brugeroplevelse)
- **JavaScript**: De mekaniske systemer (funktionalitet og interaktivitet)

### Hvorfor moderne JavaScript-arkitektur er vigtig

Vores chatapplikation vil bruge moderne JavaScript-mønstre, som du vil se i professionelle applikationer. At forstå disse koncepter vil hjælpe dig med at vokse som udvikler:

**Klassebaseret arkitektur**: Vi organiserer vores kode i klasser, som er som at skabe blåtryk for objekter
**Async/Await**: Moderne måde at håndtere operationer, der tager tid (som API-kald)
**Event-drevet programmering**: Vores app reagerer på brugerhandlinger (klik, tastetryk) i stedet for at køre i en løkke
**DOM-manipulation**: Dynamisk opdatering af websideindhold baseret på brugerinteraktioner og API-svar

### Projektstruktur-opsætning

Opret en frontend-mappe med denne organiserede struktur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Forstå arkitekturen:**
- **Adskiller** bekymringer mellem struktur (HTML), adfærd (JavaScript) og præsentation (CSS)
- **Bevarer** en simpel filstruktur, der er nem at navigere og ændre
- **Følger** bedste praksis for webudvikling med hensyn til organisation og vedligeholdelse

### Byg HTML-fundamentet: Semantisk struktur for tilgængelighed

Lad os starte med HTML-strukturen. Moderne webudvikling lægger vægt på "semantisk HTML" – brug af HTML-elementer, der tydeligt beskriver deres formål, ikke kun deres udseende. Dette gør din applikation tilgængelig for skærmlæsere, søgemaskiner og andre værktøjer.

**Hvorfor semantisk HTML er vigtigt**: Forestil dig at beskrive din chat-app til nogen over telefonen. Du ville sige "der er en header med titlen, et hovedområde, hvor samtaler vises, og en formular nederst til at skrive beskeder." Semantisk HTML bruger elementer, der matcher denne naturlige beskrivelse.

Opret `index.html` med denne gennemtænkte struktur:

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

**Forstå hvert HTML-element og dets formål:**

#### Dokumentstruktur
- **`<!DOCTYPE html>`**: Fortæller browseren, at dette er moderne HTML5
- **`<html lang="en">`**: Angiver sidens sprog for skærmlæsere og oversættelsesværktøjer
- **`<meta charset="UTF-8">`**: Sikrer korrekt tegnkodning for international tekst
- **`<meta name="viewport"...>`**: Gør siden mobilresponsiv ved at kontrollere zoom og skala

#### Semantiske elementer
- **`<header>`**: Identificerer tydeligt den øverste sektion med titel og beskrivelse
- **`<main>`**: Angiver det primære indholdsområde (hvor samtaler foregår)
- **`<form>`**: Semantisk korrekt til brugerinput, muliggør korrekt tastaturnavigation

#### Tilgængelighedsfunktioner
- **`role="log"`**: Fortæller skærmlæsere, at dette område indeholder en kronologisk log af beskeder
- **`aria-live="polite"`**: Annoncerer nye beskeder til skærmlæsere uden at afbryde
- **`aria-label`**: Giver beskrivende etiketter til formularkontroller
- **`required`**: Browseren validerer, at brugerne indtaster en besked, før de sender

#### CSS og JavaScript-integration
- **`class`-attributter**: Giver styling-hooks til CSS (f.eks. `chat-container`, `input-group`)
- **`id`-attributter**: Tillader JavaScript at finde og manipulere specifikke elementer
- **Scriptplacering**: JavaScript-fil indlæses til sidst, så HTML indlæses først

**Hvorfor denne struktur fungerer:**
- **Logisk flow**: Header → Hovedindhold → Inputformular matcher naturlig læserækkefølge
- **Tastaturtilgængelig**: Brugere kan navigere gennem alle interaktive elementer med tabulator
- **Skærmlæservenlig**: Klare landemærker og beskrivelser for synshandicappede brugere
- **Mobilresponsiv**: Viewport-meta-tag muliggør responsivt design
- **Progressiv forbedring**: Fungerer selv hvis CSS eller JavaScript ikke indlæses

### Tilføj interaktiv JavaScript: Moderne webapplikationslogik

Nu skal vi bygge JavaScript, der bringer vores chatgrænseflade til live. Vi bruger moderne JavaScript-mønstre, som du vil støde på i professionel webudvikling, herunder ES6-klasser, async/await og event-drevet programmering.

#### Forstå moderne JavaScript-arkitektur

I stedet for at skrive procedurekode (en række funktioner, der kører i rækkefølge), opretter vi en **klassebaseret arkitektur**. Tænk på en klasse som en blåtryk til at skabe objekter – ligesom en arkitekts blåtryk kan bruges til at bygge flere huse.

**Hvorfor bruge klasser til webapplikationer?**
- **Organisation**: Al relateret funktionalitet er samlet
- **Genanvendelighed**: Du kunne oprette flere chatinstanser på samme side
- **Vedligeholdelse**: Nem at fejlfinde og ændre specifikke funktioner
- **Professionel standard**: Dette mønster bruges i frameworks som React, Vue og Angular

Opret `app.js` med denne moderne, velstrukturerede JavaScript:

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

#### Forstå hver JavaScript-koncept

**ES6-klasse-struktur**:
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

**Async/Await-mønster**:
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

**Event-drevet programmering**:
I stedet for konstant at tjekke, om noget er sket, "lytter" vi efter begivenheder:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-manipulation**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Sikkerhed og bedste praksis

**Forebyggelse af XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Hvorfor dette er vigtigt**: Hvis en bruger skriver `<script>alert('hack')</script>`, sikrer denne funktion, at det vises som tekst i stedet for at blive udført som kode.

**Fejlhåndtering**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Overvejelser om brugeroplevelse**:
- **Optimistisk UI**: Tilføj brugerbesked med det samme, vent ikke på serverens svar
- **Indlæsningsstatus**: Deaktiver knapper og vis "Sender..." mens du venter
- **Auto-scroll**: Hold de nyeste beskeder synlige
- **Inputvalidering**: Send ikke tomme beskeder
- **Tastaturgenveje**: Enter-tasten sender beskeder (som rigtige chat-apps)

#### Forstå applikationsflowet

1. **Siden indlæses** → `DOMContentLoaded`-begivenhed udløses → `new ChatApp()` oprettes
2. **Konstruktør kører** → Får DOM-elementreferencer → Opsætter begivenhedslyttere
3. **Bruger skriver besked** → Trykker Enter eller klikker Send → `handleSubmit` kører
4. **handleSubmit** → Validerer input → Viser indlæsningsstatus → Kalder API
5. **API svarer** → Tilføjer AI-besked til chat → Genaktiverer grænsefladen
6. **Klar til næste besked** → Brugeren kan fortsætte med at chatte
Denne arkitektur er skalerbar – du kan nemt tilføje funktioner som redigering af beskeder, filuploads eller flere samtaletråde uden at skulle omskrive den grundlæggende struktur.

### Styling din chatgrænseflade

Lad os nu skabe en moderne og visuelt tiltalende chatgrænseflade med CSS. God styling får din applikation til at føles professionel og forbedrer den samlede brugeroplevelse. Vi vil bruge moderne CSS-funktioner som Flexbox, CSS Grid og brugerdefinerede egenskaber for et responsivt og tilgængeligt design.

Opret `styles.css` med disse omfattende styles:

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

**Forståelse af CSS-arkitekturen:**
- **Bruger** CSS-brugerdefinerede egenskaber (variabler) for konsistent tema og nem vedligeholdelse
- **Implementerer** Flexbox-layout for responsivt design og korrekt justering
- **Inkluderer** glidende animationer for beskedvisning uden at være distraherende
- **Giver** visuel forskel mellem brugerbeskeder, AI-svar og fejltilstande
- **Understøtter** responsivt design, der fungerer både på desktop og mobile enheder
- **Tager hensyn til** tilgængelighed med reducerede bevægelsespræferencer og korrekte kontrastforhold
- **Tilbyder** mørk tilstand baseret på brugerens systempræferencer

### Konfiguration af din backend-URL

Det sidste trin er at opdatere `BASE_URL` i din JavaScript, så den matcher din backend-server:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Bestemmelse af din backend-URL:**
- **Lokal udvikling**: Brug `http://localhost:5000`, hvis du kører både frontend og backend lokalt
- **Codespaces**: Find din backend-URL i fanen Ports, efter du har gjort port 5000 offentlig
- **Produktion**: Erstat med dit faktiske domæne, når du deployer til en hostingtjeneste

> 💡 **Testtip**: Du kan teste din backend direkte ved at besøge root-URL'en i din browser. Du bør se velkomstbeskeden fra din FastAPI-server.

## Test og deployment

Nu hvor du har bygget både frontend- og backend-komponenter, lad os teste, at alt fungerer sammen og udforske deployment-muligheder for at dele din chatassistent med andre.

### Lokal testarbejdsgang

Følg disse trin for at teste din komplette applikation:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Trin-for-trin testproces:**

1. **Start din backend-server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Bekræft, at API'en fungerer**:
   - Åbn `http://localhost:5000` i din browser
   - Du bør se velkomstbeskeden fra din FastAPI-server

3. **Åbn din frontend**:
   - Naviger til din frontend-mappe
   - Åbn `index.html` i din webbrowser
   - Eller brug VS Codes Live Server-udvidelse for en bedre udviklingsoplevelse

4. **Test chatfunktionen**:
   - Skriv en besked i inputfeltet
   - Klik på "Send" eller tryk Enter
   - Bekræft, at AI'en svarer korrekt
   - Tjek browserkonsollen for eventuelle JavaScript-fejl

### Fejlfinding af almindelige problemer

| Problem | Symptomer | Løsning |
|---------|----------|----------|
| **CORS-fejl** | Frontend kan ikke nå backend | Sørg for, at FastAPI CORSMiddleware er korrekt konfigureret |
| **API-nøglefejl** | 401 Uautoriserede svar | Tjek din `GITHUB_TOKEN` miljøvariabel |
| **Forbindelse nægtet** | Netværksfejl i frontend | Bekræft backend-URL og at Flask-serveren kører |
| **Ingen AI-svar** | Tomme eller fejlbeskeder | Tjek backend-logfiler for API-kvote eller autentificeringsproblemer |

**Almindelige fejlsøgningsskridt:**
- **Tjekker** browserens Developer Tools Console for JavaScript-fejl
- **Bekræfter** at Network-fanen viser succesfulde API-anmodninger og svar
- **Gennemgår** backend-terminaloutput for Python-fejl eller API-problemer
- **Bekræfter** at miljøvariabler er korrekt indlæst og tilgængelige

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr chatassistenten ved at tilføje samtalehistorik og beskedpersistens. Denne udfordring vil hjælpe dig med at forstå, hvordan man håndterer tilstand i chatapplikationer og implementerer datalagring for bedre brugeroplevelse.

**Opgave:** Modificer chatapplikationen til at inkludere samtalehistorik, der bevares mellem sessioner. Tilføj funktionalitet til at gemme chatbeskeder i lokal lagring, vise samtalehistorik, når siden indlæses, og inkluder en "Ryd historik"-knap. Implementer også skriveindikatorer og tidsstempler for beskeder for at gøre chatteoplevelsen mere realistisk.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## Opgave: Byg din personlige AI-assistent

Nu skal du skabe din egen AI-assistent-implementering. I stedet for blot at kopiere tutorial-koden er dette en mulighed for at anvende koncepterne, mens du bygger noget, der afspejler dine egne interesser og anvendelsesområder.

### Projektkrav

Lad os opsætte dit projekt med en ren, organiseret struktur:

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

### Kerneimplementeringsopgaver

**Backend-udvikling:**
- **Tag** vores FastAPI-kode og gør den til din egen
- **Skab** en unik AI-personlighed – måske en hjælpsom madlavningsassistent, en kreativ skrivepartner eller en studieven?
- **Tilføj** solid fejlhåndtering, så din app ikke går ned, når tingene går galt
- **Skriv** klar dokumentation for alle, der ønsker at forstå, hvordan din API fungerer

**Frontend-udvikling:**
- **Byg** en chatgrænseflade, der føles intuitiv og indbydende
- **Skriv** ren, moderne JavaScript, som du ville være stolt af at vise andre udviklere
- **Design** brugerdefineret styling, der afspejler din AI's personlighed – sjov og farverig? Ren og minimalistisk? Det er helt op til dig!
- **Sørg for** at det fungerer godt både på telefoner og computere

**Personaliseringskrav:**
- **Vælg** et unikt navn og en personlighed til din AI-assistent – måske noget, der afspejler dine interesser eller de problemer, du vil løse
- **Tilpas** det visuelle design, så det matcher din assistents stil
- **Skriv** en fængende velkomstbesked, der får folk til at starte en samtale
- **Test** din assistent med forskellige typer spørgsmål for at se, hvordan den reagerer

### Forbedringsidéer (valgfrit)

Vil du tage dit projekt til næste niveau? Her er nogle sjove idéer at udforske:

| Funktion | Beskrivelse | Færdigheder du vil øve |
|---------|-------------|------------------------|
| **Beskedhistorik** | Husk samtaler selv efter sideopdatering | Arbejde med localStorage, JSON-håndtering |
| **Skriveindikatorer** | Vis "AI skriver..." mens du venter på svar | CSS-animationer, asynkron programmering |
| **Besked-tidsstempler** | Vis, hvornår hver besked blev sendt | Dato/tid-formattering, UX-design |
| **Eksport af chat** | Lad brugere downloade deres samtale | Filhåndtering, dataeksport |
| **Tema-skift** | Skift mellem lys/mørk tilstand | CSS-variabler, brugerpræferencer |
| **Steminput** | Tilføj tale-til-tekst funktionalitet | Web-API'er, tilgængelighed |

### Test og dokumentation

**Kvalitetssikring:**
- **Test** din applikation med forskellige inputtyper og kanttilfælde
- **Bekræft** responsivt design fungerer på forskellige skærmstørrelser
- **Tjek** tilgængelighed med tastaturnavigation og skærmlæsere
- **Valider** HTML og CSS for standardoverholdelse

**Dokumentationskrav:**
- **Skriv** en README.md, der forklarer dit projekt og hvordan man kører det
- **Inkluder** skærmbilleder af din chatgrænseflade i aktion
- **Dokumenter** eventuelle unikke funktioner eller tilpasninger, du har tilføjet
- **Giv** klare installationsinstruktioner til andre udviklere

### Indsendelsesretningslinjer

**Projektleverancer:**
1. Komplet projektmappe med al kildekode
2. README.md med projektbeskrivelse og installationsinstruktioner
3. Skærmbilleder, der viser din chatassistent i aktion
4. Kort refleksion over, hvad du har lært, og hvilke udfordringer du har stået overfor

**Evalueringskriterier:**
- **Funktionalitet**: Fungerer chatassistenten som forventet?
- **Kodekvalitet**: Er koden velorganiseret, kommenteret og vedligeholdelsesvenlig?
- **Design**: Er grænsefladen visuelt tiltalende og brugervenlig?
- **Kreativitet**: Hvor unik og personlig er din implementering?
- **Dokumentation**: Er installationsinstruktionerne klare og komplette?

> 💡 **Succes-tip**: Start med de grundlæggende krav først, og tilføj forbedringer, når alt fungerer. Fokuser på at skabe en poleret kerneoplevelse, før du tilføjer avancerede funktioner.

## Løsning

[Løsning](./solution/README.md)

## Bonusudfordringer

Klar til at tage din AI-assistent til næste niveau? Prøv disse avancerede udfordringer, der vil uddybe din forståelse af AI-integration og webudvikling.

### Personlighedstilpasning

Den virkelige magi sker, når du giver din AI-assistent en unik personlighed. Eksperimenter med forskellige systemprompter for at skabe specialiserede assistenter:

**Eksempel på professionel assistent:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Eksempel på kreativ skrivehjælper:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Eksempel på teknisk mentor:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend-forbedringer

Transformér din chatgrænseflade med disse visuelle og funktionelle forbedringer:

**Avancerede CSS-funktioner:**
- **Implementer** glidende beskedsanimationer og overgange
- **Tilføj** brugerdefinerede chatboble-designs med CSS-former og gradienter
- **Skab** en skriveindikator-animation til, når AI'en "tænker"
- **Design** emoji-reaktioner eller et beskedvurderingssystem

**JavaScript-forbedringer:**
- **Tilføj** tastaturgenveje (Ctrl+Enter for at sende, Escape for at rydde input)
- **Implementer** beskedsøgning og filtreringsfunktionalitet
- **Skab** en samtaleeksportfunktion (download som tekst eller JSON)
- **Tilføj** automatisk lagring til localStorage for at forhindre tab af beskeder

### Avanceret AI-integration

**Flere AI-personligheder:**
- **Skab** en dropdown-menu til at skifte mellem forskellige AI-personligheder
- **Gem** brugerens foretrukne personlighed i localStorage
- **Implementer** kontekstskift, der opretholder samtaleflowet

**Smart svarfunktioner:**
- **Tilføj** samtalekontekstbevidsthed (AI husker tidligere beskeder)
- **Implementer** smarte forslag baseret på samtaleemne
- **Skab** hurtige svarknapper til almindelige spørgsmål

> 🎯 **Læringsmål**: Disse bonusudfordringer hjælper dig med at forstå avancerede webudviklingsmønstre og AI-integrationsteknikker, der bruges i produktionsapplikationer.

## Opsummering og næste skridt

Tillykke! Du har med succes bygget en komplet AI-drevet chatassistent fra bunden. Dette projekt har givet dig praktisk erfaring med moderne webudviklingsteknologier og AI-integration – færdigheder, der er stadig mere værdifulde i dagens teknologilandskab.

### Hvad du har opnået

Gennem denne lektion har du mestret flere nøgleteknologier og -koncepter:

**Backend-udvikling:**
- **Integreret** med GitHub Models API for AI-funktionalitet
- **Bygget** en RESTful API med Flask med korrekt fejlhåndtering
- **Implementeret** sikker autentificering ved hjælp af miljøvariabler
- **Konfigureret** CORS for cross-origin-anmodninger mellem frontend og backend

**Frontend-udvikling:**
- **Skabt** en responsiv chatgrænseflade med semantisk HTML
- **Implementeret** moderne JavaScript med async/await og klassebaseret arkitektur
- **Designet** en engagerende brugergrænseflade med CSS Grid, Flexbox og animationer
- **Tilføjet** tilgængelighedsfunktioner og principper for responsivt design

**Full-stack integration:**
- **Forbundet** frontend og backend gennem HTTP API-anmodninger
- **Håndteret** realtidsbrugerinteraktioner og asynkron dataflow
- **Implementeret** fejlhåndtering og brugerfeedback i hele applikationen
- **Testet** den komplette applikationsarbejdsgang fra brugerinput til AI-svar

### Vigtige læringsresultater

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

Dette projekt har introduceret dig til fundamentet for at bygge AI-drevne applikationer, som repræsenterer fremtiden for webudvikling. Du forstår nu, hvordan man integrerer AI-funktioner i traditionelle webapplikationer og skaber engagerende brugeroplevelser, der føles intelligente og responsive.

### Professionelle anvendelser

De færdigheder, du har udviklet i denne lektion, er direkte anvendelige i moderne softwareudviklingskarrierer:

- **Full-stack webudvikling** med moderne frameworks og API'er
- **AI-integration** i webapplikationer og mobilapps
- **API-design og udvikling** til mikroservice-arkitekturer
- **Udvikling af brugergrænseflader** med fokus på tilgængelighed og responsivt design
- **DevOps-praksis** inklusive miljøkonfiguration og deployment

### Fortsæt din AI-udviklingsrejse

**Næste læringstrin:**
- **Udforsk** mere avancerede AI-modeller og API'er (GPT-4, Claude, Gemini)
- **Lær** om prompt engineering-teknikker for bedre AI-svar
- **Studér** samtaledesign og chatbot-brugeroplevelsesprincipper
- **Undersøg** AI-sikkerhed, etik og ansvarlig AI-udviklingspraksis
- **Byg** mere komplekse applikationer med samtalehukommelse og kontekstbevidsthed

**Avancerede projektidéer:**
- Multi-bruger chatrum med AI-moderation
- AI-drevne kundeservice-chatbots
- Uddannelsesmæssige tutorassistenter med personlig læring
- Kreative skrivepartnere med forskellige AI-personligheder
- Teknisk dokumentationsassistenter for udviklere

## Kom i gang med GitHub Codespaces

Vil du prøve dette projekt i et cloud-udviklingsmiljø? GitHub Codespaces tilbyder et komplet udviklingssetup i din browser, perfekt til at eksperimentere med AI-applikationer uden lokale opsætningskrav.

### Opsætning af dit udviklingsmiljø

**Trin 1: Opret fra skabelon**
- **Naviger** til [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klik** på "Use this template" øverst til højre (sørg for, at du er logget ind på GitHub)

![Opret fra skabelon interface, der viser den grønne "Use this template"-knap](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.da.png)

**Trin 2: Start Codespaces**
- **Åbn** dit nyoprettede repository
- **Klik** på den grønne "Code"-knap og vælg "Codespaces"
- **Vælg** "Create codespace on main" for at starte dit udviklingsmiljø

![Opret codespace interface med muligheder for at starte cloud-udviklingsmiljø](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.da.png)

**Trin 3: Miljøkonfiguration**
Når din Codespace er indlæst, har du adgang til:
- **Forudinstalleret** Python, Node.js og alle nødvendige udviklingsværktøjer
- **VS Code interface** med udvidelser til webudvikling
- **Terminaladgang** til at køre backend- og frontend-servere
- **Port forwarding** til test af dine applikationer

**Hvad Codespaces tilbyder:**
- **Eliminerer** problemer med opsætning og konfiguration af lokale miljøer
- **Giver** et ensartet udviklingsmiljø på tværs af forskellige enheder
- **Indeholder** forudkonfigurerede værktøjer og udvidelser til webudvikling
- **Tilbyder** problemfri integration med GitHub til versionskontrol og samarbejde

> 🚀 **Pro Tip**: Codespaces er perfekt til at lære og prototypere AI-applikationer, da det automatisk håndterer al den komplekse miljøopsætning, så du kan fokusere på at bygge og lære i stedet for at løse konfigurationsproblemer.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.