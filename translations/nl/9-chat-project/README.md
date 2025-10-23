<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-23T00:54:40+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "nl"
}
-->
# Bouw een Chat Assistent met AI

Herinner je je nog in Star Trek, toen de bemanning moeiteloos met de boordcomputer praatte, complexe vragen stelde en doordachte antwoorden kreeg? Wat in de jaren '60 pure sciencefiction leek, kun je nu zelf bouwen met webtechnologieën die je al kent.

In deze les gaan we een AI-chatassistent maken met HTML, CSS, JavaScript en wat backend-integratie. Je zult ontdekken hoe de vaardigheden die je al hebt geleerd, kunnen worden verbonden met krachtige AI-diensten die context begrijpen en zinvolle antwoorden genereren.

Denk aan AI als toegang tot een enorme bibliotheek die niet alleen informatie kan vinden, maar deze ook kan synthetiseren tot samenhangende antwoorden die zijn afgestemd op jouw specifieke vragen. In plaats van duizenden pagina's door te zoeken, krijg je directe, contextuele antwoorden.

De integratie gebeurt via bekende webtechnologieën die samenwerken. HTML creëert de chatinterface, CSS zorgt voor het visuele ontwerp, JavaScript beheert gebruikersinteracties en een backend-API verbindt alles met AI-diensten. Het is vergelijkbaar met hoe verschillende secties van een orkest samenwerken om een symfonie te creëren.

We bouwen in feite een brug tussen natuurlijke menselijke communicatie en machineverwerking. Je leert zowel de technische implementatie van AI-dienstintegratie als de ontwerpprincipes die interacties intuïtief maken.

Aan het einde van deze les voelt AI-integratie minder als een mysterieus proces en meer als een andere API waarmee je kunt werken. Je zult de fundamentele patronen begrijpen die toepassingen zoals ChatGPT en Claude aandrijven, met behulp van dezelfde webontwikkelingsprincipes die je al hebt geleerd.

Zo ziet je eindproject eruit:

![Chat-appinterface met een gesprek tussen gebruiker en AI-assistent](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.nl.png)

## AI begrijpen: van mysterie naar meesterschap

Voordat we in de code duiken, laten we eerst begrijpen waar we mee werken. Als je eerder met API's hebt gewerkt, ken je het basispatroon: een verzoek sturen, een antwoord ontvangen.

AI-API's volgen een vergelijkbare structuur, maar in plaats van vooraf opgeslagen gegevens uit een database op te halen, genereren ze nieuwe antwoorden op basis van patronen die zijn geleerd uit enorme hoeveelheden tekst. Denk aan het verschil tussen een bibliotheekcatalogussysteem en een deskundige bibliothecaris die informatie uit meerdere bronnen kan synthetiseren.

### Wat is "Generatieve AI" eigenlijk?

Denk aan hoe de Steen van Rosetta geleerden in staat stelde Egyptische hiërogliefen te begrijpen door patronen te vinden tussen bekende en onbekende talen. AI-modellen werken op een vergelijkbare manier – ze vinden patronen in enorme hoeveelheden tekst om te begrijpen hoe taal werkt en gebruiken die patronen vervolgens om passende antwoorden te genereren op nieuwe vragen.

**Laten we dit uitleggen met een eenvoudige vergelijking:**
- **Traditionele database**: Zoals vragen om je geboorteakte – je krijgt elke keer exact hetzelfde document.
- **Zoekmachine**: Zoals een bibliothecaris vragen om boeken over katten – ze laten je zien wat beschikbaar is.
- **Generatieve AI**: Zoals een slimme vriend vragen naar katten – ze vertellen je interessante dingen in hun eigen woorden, afgestemd op wat je wilt weten.

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Hoe AI-modellen leren (De eenvoudige versie)

AI-modellen leren door blootstelling aan enorme datasets met tekst uit boeken, artikelen en gesprekken. Door dit proces identificeren ze patronen in:
- Hoe gedachten worden gestructureerd in geschreven communicatie
- Welke woorden vaak samen voorkomen
- Hoe gesprekken meestal verlopen
- Contextuele verschillen tussen formele en informele communicatie

**Het is vergelijkbaar met hoe archeologen oude talen ontcijferen**: ze analyseren duizenden voorbeelden om grammatica, woordenschat en culturele context te begrijpen, en worden uiteindelijk in staat om nieuwe teksten te interpreteren met behulp van die geleerde patronen.

### Waarom GitHub Models?

We gebruiken GitHub Models om een vrij praktische reden – het geeft ons toegang tot AI op ondernemingsniveau zonder dat we onze eigen AI-infrastructuur hoeven op te zetten (wat je nu echt niet wilt doen!). Denk aan het gebruik van een weer-API in plaats van zelf het weer te proberen te voorspellen door overal weerstations op te zetten.

Het is in feite "AI-als-een-dienst", en het beste deel? Het is gratis om te beginnen, zodat je kunt experimenteren zonder je zorgen te maken over hoge kosten.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

We gebruiken GitHub Models voor onze backend-integratie, die toegang biedt tot professionele AI-mogelijkheden via een gebruiksvriendelijke interface voor ontwikkelaars. De [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) dient als een testomgeving waar je kunt experimenteren met verschillende AI-modellen en hun mogelijkheden kunt begrijpen voordat je ze implementeert in code.

![GitHub Models AI Playground-interface met modelselectie en testgebied](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.nl.png)

**Wat de playground zo handig maakt:**
- **Probeer** verschillende AI-modellen zoals GPT-4o-mini, Claude en anderen (allemaal gratis!)
- **Test** je ideeën en prompts voordat je code schrijft
- **Ontvang** kant-en-klare codefragmenten in je favoriete programmeertaal
- **Pas** instellingen aan zoals creativiteitsniveau en antwoordlengte om te zien hoe ze de output beïnvloeden

Als je een beetje hebt geëxperimenteerd, klik je gewoon op het tabblad "Code" en kies je je programmeertaal om de implementatiecode te krijgen die je nodig hebt.

![Playground-keuze met codegeneratieopties voor verschillende programmeertalen](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.nl.png)

## Het instellen van de Python Backend Integratie

Laten we nu de AI-integratie implementeren met Python. Python is uitstekend geschikt voor AI-toepassingen vanwege de eenvoudige syntaxis en krachtige bibliotheken. We beginnen met de code van de GitHub Models playground en refactoren deze vervolgens tot een herbruikbare, productieklare functie.

### Begrijpen van de basisimplementatie

Wanneer je de Python-code uit de playground haalt, krijg je iets dat er ongeveer zo uitziet. Maak je geen zorgen als het in het begin veel lijkt – laten we het stukje bij beetje doorlopen:

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

**Wat er in deze code gebeurt:**
- **We importeren** de benodigde tools: `os` voor het lezen van omgevingsvariabelen en `OpenAI` voor communicatie met de AI.
- **We stellen** de OpenAI-client in om te wijzen naar de AI-servers van GitHub in plaats van direct naar OpenAI.
- **We authenticeren** met een speciale GitHub-token (daarover later meer!).
- **We structureren** ons gesprek met verschillende "rollen" – denk aan het instellen van de scène voor een toneelstuk.
- **We sturen** ons verzoek naar de AI met enkele parameters voor fijne afstemming.
- **We halen** de daadwerkelijke antwoordtekst uit alle gegevens die terugkomen.

### Begrijpen van berichtrollen: Het AI-gesprekskader

AI-gesprekken gebruiken een specifieke structuur met verschillende "rollen" die verschillende doelen dienen:

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

**Denk aan het als het regisseren van een toneelstuk:**
- **Systeemrol**: Zoals toneelaanwijzingen voor een acteur – het vertelt de AI hoe te gedragen, welke persoonlijkheid te hebben en hoe te reageren.
- **Gebruikersrol**: De daadwerkelijke vraag of boodschap van de persoon die je applicatie gebruikt.
- **Assistentrol**: Het antwoord van de AI (je stuurt dit niet, maar het verschijnt in de gespreksgeschiedenis).

**Echte wereld analogie**: Stel je voor dat je een vriend aan iemand op een feestje voorstelt:
- **Systeembericht**: "Dit is mijn vriend Sarah, ze is een dokter die geweldig is in het eenvoudig uitleggen van medische concepten."
- **Gebruikersbericht**: "Kun je uitleggen hoe vaccins werken?"
- **Assistentantwoord**: Sarah reageert als een vriendelijke dokter, niet als een advocaat of chef-kok.

### Begrijpen van AI-parameters: Het verfijnen van responsgedrag

De numerieke parameters in AI-API-aanroepen bepalen hoe het model antwoorden genereert. Met deze instellingen kun je het gedrag van de AI aanpassen voor verschillende toepassingen:

#### Temperature (0.0 tot 2.0): De Creativiteitsknop

**Wat het doet**: Bepaalt hoe creatief of voorspelbaar de antwoorden van de AI zullen zijn.

**Denk aan het als het improvisatieniveau van een jazzmuzikant:**
- **Temperature = 0.1**: Elke keer exact dezelfde melodie spelen (zeer voorspelbaar).
- **Temperature = 0.7**: Enkele smaakvolle variaties toevoegen terwijl het herkenbaar blijft (gebalanceerde creativiteit).
- **Temperature = 1.5**: Volledig experimentele jazz met onverwachte wendingen (zeer onvoorspelbaar).

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

#### Max Tokens (1 tot 4096+): De Lengtecontroller van het Antwoord

**Wat het doet**: Stelt een limiet aan hoe lang het antwoord van de AI kan zijn.

**Denk aan tokens als ongeveer gelijkwaardig aan woorden** (ongeveer 1 token = 0,75 woorden in het Engels):
- **max_tokens=50**: Kort en bondig (zoals een sms).
- **max_tokens=500**: Een mooie alinea of twee.
- **max_tokens=2000**: Een gedetailleerde uitleg met voorbeelden.

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

#### Top_p (0.0 tot 1.0): De Focusparameter

**Wat het doet**: Bepaalt hoe gefocust de AI blijft op de meest waarschijnlijke antwoorden.

**Stel je voor dat de AI een enorme woordenschat heeft, gerangschikt op hoe waarschijnlijk elk woord is:**
- **top_p=0.1**: Beschouwt alleen de top 10% meest waarschijnlijke woorden (zeer gefocust).
- **top_p=0.9**: Beschouwt 90% van de mogelijke woorden (meer creatief).
- **top_p=1.0**: Beschouwt alles (maximale variatie).

**Bijvoorbeeld**: Als je vraagt "De lucht is meestal..."
- **Lage top_p**: Zegt bijna zeker "blauw".
- **Hoge top_p**: Kan zeggen "blauw", "bewolkt", "uitgestrekt", "veranderlijk", "mooi", enz.

### Alles samenvoegen: Parametercombinaties voor verschillende toepassingen

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

**Begrijpen waarom deze parameters belangrijk zijn**: Verschillende toepassingen hebben verschillende soorten antwoorden nodig. Een klantenservicebot moet consistent en feitelijk zijn (lage temperatuur), terwijl een creatieve schrijfassistent fantasierijk en gevarieerd moet zijn (hoge temperatuur). Het begrijpen van deze parameters geeft je controle over de persoonlijkheid en stijl van je AI.

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

**Begrijpen van deze verbeterde functie:**
- **Accepteert** twee parameters: de prompt van de gebruiker en een optioneel systeembericht.
- **Biedt** een standaard systeembericht voor algemeen assistentgedrag.
- **Gebruikt** juiste Python type hints voor betere code-documentatie.
- **Geeft** alleen de inhoud van het antwoord terug, waardoor het gemakkelijk te gebruiken is in onze web-API.
- **Behoudt** dezelfde modelparameters voor consistent AI-gedrag.

### De magie van systeemprompts: De persoonlijkheid van AI programmeren

Als parameters bepalen hoe de AI denkt, bepalen systeemprompts wie de AI denkt dat het is. Dit is eerlijk gezegd een van de coolste aspecten van werken met AI – je geeft de AI in feite een complete persoonlijkheid, deskundigheidsniveau en communicatiestijl.

**Denk aan systeemprompts als het casten van verschillende acteurs voor verschillende rollen**: In plaats van één generieke assistent te hebben, kun je gespecialiseerde experts creëren voor verschillende situaties. Heb je een geduldige leraar nodig? Een creatieve brainstormpartner? Een zakelijke adviseur zonder poespas? Verander gewoon de systeemprompt!

#### Waarom systeemprompts zo krachtig zijn

Hier is het fascinerende deel: AI-modellen zijn getraind op talloze gesprekken waarin mensen verschillende rollen en deskundigheidsniveaus aannemen. Wanneer je de AI een specifieke rol geeft, is het alsof je een schakelaar omzet die al die geleerde patronen activeert.

**Het is als method acting voor AI**: Vertel een acteur "je bent een wijze oude professor" en kijk hoe ze automatisch hun houding, woordenschat en manieren aanpassen. AI doet iets opmerkelijk vergelijkbaars met taalpatronen.

#### Effectieve systeemprompts maken: De kunst en wetenschap

**De anatomie van een geweldige systeemprompt:**
1. **Rol/Identiteit**: Wie is de AI?
2. **Deskundigheid**: Wat weet de AI?
3. **Communicatiestijl**: Hoe spreekt de AI?
4. **Specifieke instructies**: Waar moet de AI zich op concentreren?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Voorbeelden van systeemprompts met context

Laten we zien hoe verschillende systeemprompts compleet verschillende AI-persoonlijkheden creëren:

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

#### Systeemprompts in actie zien

Laten we dezelfde vraag testen met verschillende systeemprompts om de dramatische verschillen te zien:

**Vraag**: "Hoe ga ik om met gebruikersauthenticatie in mijn webapp?"

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

#### Geavanceerde technieken voor systeemprompts

**1. Context instellen**: Geef de AI achtergrondinformatie.
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Output formatteren**: Vertel de AI hoe antwoorden gestructureerd moeten worden.
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

**3. Beperkingen instellen**: Definieer wat de AI NIET moet doen.
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Waarom dit belangrijk is voor jouw chatassistent

Het begrijpen van systeemprompts geeft je ongelooflijke kracht om gespecialiseerde AI-assistenten te creëren:
- **Klantenservicebot**: Behulpzaam, geduldig, bekend met beleid.
- **Leermeester**: Aanmoedigend, stap-voor-stap, controleert begrip.
- **Creatieve partner**: Fantasierijk, bouwt voort op ideeën, vraagt "wat als?"
- **Technisch expert**: Nauwkeurig, gedetailleerd, beveiligingsbewust.

**Het belangrijkste inzicht**: Je roept niet zomaar een AI-API aan – je creëert een aangepaste AI-persoonlijkheid die aansluit bij jouw specifieke toepassing. Dit is wat moderne AI-toepassingen op maat en nuttig maakt in plaats van generiek.

## De Web-API bouwen met FastAPI: Jouw krachtige AI-communicatiehub

Laten we nu de backend bouwen die jouw frontend verbindt met AI-diensten. We gebruiken FastAPI, een modern Python-framework dat uitblinkt in het bouwen van API's voor AI-toepassingen.

FastAPI biedt verschillende voordelen voor dit type project: ingebouwde ondersteuning voor asynchrone verwerking van gelijktijdige verzoeken, automatische generatie van API-documentatie en uitstekende prestaties. Jouw FastAPI-server fungeert als een tussenpersoon die verzoeken van de frontend ontvangt, communiceert met AI-diensten en geformatteerde antwoorden retourneert.

### Waarom FastAPI voor AI-toepassingen?

Je vraagt je misschien af: "Kan ik de AI niet gewoon rechtstreeks vanuit mijn frontend JavaScript aanroepen?" of "Waarom FastAPI in plaats van Flask of Django?" Goede vragen! 
**Waarom FastAPI perfect is voor wat we bouwen:**
- **Standaard asynchroon**: Kan meerdere AI-verzoeken tegelijk verwerken zonder vast te lopen
- **Automatische documentatie**: Bezoek `/docs` en krijg gratis een prachtige, interactieve API-documentatiepagina
- **Ingebouwde validatie**: Vangt fouten op voordat ze problemen veroorzaken
- **Razendsnel**: Een van de snelste Python-frameworks die er zijn
- **Modern Python**: Maakt gebruik van de nieuwste en beste Python-functies

**En waarom we überhaupt een backend nodig hebben:**

**Beveiliging**: Je AI API-sleutel is als een wachtwoord – als je het in frontend JavaScript plaatst, kan iedereen die de broncode van je website bekijkt het stelen en je AI-tegoed gebruiken. De backend houdt gevoelige gegevens veilig.

**Rate Limiting & Controle**: De backend stelt je in staat om te bepalen hoe vaak gebruikers verzoeken kunnen indienen, gebruikersauthenticatie te implementeren en logging toe te voegen om gebruik bij te houden.

**Gegevensverwerking**: Je wilt misschien gesprekken opslaan, ongepaste inhoud filteren of meerdere AI-diensten combineren. De backend is waar deze logica plaatsvindt.

**De architectuur lijkt op een client-servermodel:**
- **Frontend**: Laag voor gebruikersinterface en interactie
- **Backend API**: Laag voor verzoekverwerking en routering
- **AI-dienst**: Externe berekening en responsgeneratie
- **Omgevingsvariabelen**: Veilige configuratie en opslag van inloggegevens

### Begrijpen van de Request-Response Flow

Laten we volgen wat er gebeurt wanneer een gebruiker een bericht verzendt:

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

**Begrijpen van elke stap:**
1. **Gebruikersinteractie**: Persoon typt in de chatinterface
2. **Frontend-verwerking**: JavaScript vangt de invoer op en formatteert het als JSON
3. **API-validatie**: FastAPI valideert het verzoek automatisch met Pydantic-modellen
4. **AI-integratie**: Backend voegt context toe (systeemprompt) en roept de AI-dienst aan
5. **Responsverwerking**: API ontvangt AI-respons en kan deze indien nodig aanpassen
6. **Frontend-weergave**: JavaScript toont de respons in de chatinterface

### Begrijpen van API-architectuur

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

### Het maken van de FastAPI-toepassing

Laten we onze API stap voor stap bouwen. Maak een bestand genaamd `api.py` met de volgende FastAPI-code:

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

**Begrijpen van de FastAPI-implementatie:**
- **Importeert** FastAPI voor moderne webframeworkfunctionaliteit en Pydantic voor gegevensvalidatie
- **Creëert** automatische API-documentatie (beschikbaar op `/docs` wanneer de server draait)
- **Activeert** CORS-middleware om frontend-verzoeken van verschillende oorsprongen toe te staan
- **Definieert** Pydantic-modellen voor automatische validatie en documentatie van verzoeken/responsen
- **Gebruikt** asynchrone endpoints voor betere prestaties bij gelijktijdige verzoeken
- **Implementeert** correcte HTTP-statuscodes en foutafhandeling met HTTPException
- **Bevat** gestructureerde logging voor monitoring en debugging
- **Biedt** een health check-endpoint voor het monitoren van de status van de dienst

**Belangrijke voordelen van FastAPI ten opzichte van traditionele frameworks:**
- **Automatische validatie**: Pydantic-modellen zorgen voor gegevensintegriteit vóór verwerking
- **Interactieve documentatie**: Bezoek `/docs` voor automatisch gegenereerde, testbare API-documentatie
- **Typeveiligheid**: Python type hints voorkomen runtimefouten en verbeteren de codekwaliteit
- **Ondersteuning voor asynchroon**: Verwerk meerdere AI-verzoeken tegelijkertijd zonder blokkering
- **Prestaties**: Significantly snellere verzoekverwerking voor realtime toepassingen

### Begrijpen van CORS: De beveiligingsbewaker van het web

CORS (Cross-Origin Resource Sharing) is als een beveiligingsbewaker bij een gebouw die controleert of bezoekers toegang mogen krijgen. Laten we begrijpen waarom dit belangrijk is en hoe het je toepassing beïnvloedt.

#### Wat is CORS en waarom bestaat het?

**Het probleem**: Stel je voor dat elke website verzoeken kon indienen bij de website van je bank namens jou zonder jouw toestemming. Dat zou een beveiligingsnachtmerrie zijn! Browsers voorkomen dit standaard via het "Same-Origin Policy."

**Same-Origin Policy**: Browsers staan alleen toe dat webpagina's verzoeken indienen naar hetzelfde domein, dezelfde poort en hetzelfde protocol waar ze vandaan zijn geladen.

**Echte wereld analogie**: Het is als de beveiliging van een appartementencomplex – alleen bewoners (dezelfde oorsprong) kunnen standaard toegang krijgen tot het gebouw. Als je een vriend (andere oorsprong) wilt laten bezoeken, moet je expliciet aan de beveiliging vertellen dat het oké is.

#### CORS in je ontwikkelomgeving

Tijdens ontwikkeling draaien je frontend en backend op verschillende poorten:
- Frontend: `http://localhost:3000` (of file:// als je HTML direct opent)
- Backend: `http://localhost:5000`

Deze worden beschouwd als "verschillende oorsprongen" hoewel ze op dezelfde computer staan!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Wat CORS-configuratie in de praktijk doet:**
- **Voegt** speciale HTTP-headers toe aan API-responsen die browsers vertellen "dit cross-origin verzoek is toegestaan"
- **Behandelt** "preflight"-verzoeken (browsers controleren soms permissies voordat ze het daadwerkelijke verzoek verzenden)
- **Voorkomt** de gevreesde "geblokkeerd door CORS-beleid"-fout in je browserconsole

#### CORS-beveiliging: Ontwikkeling versus productie

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

**Waarom dit belangrijk is**: In ontwikkeling is `CORS(app)` als je voordeur open laten staan – handig maar niet veilig. In productie wil je precies specificeren welke websites met je API mogen communiceren.

#### Veelvoorkomende CORS-scenario's en oplossingen

| Scenario | Probleem | Oplossing |
|----------|---------|----------|
| **Lokale ontwikkeling** | Frontend kan backend niet bereiken | Voeg CORSMiddleware toe aan FastAPI |
| **GitHub Pages + Heroku** | Geïmplementeerde frontend kan API niet bereiken | Voeg je GitHub Pages URL toe aan CORS-origins |
| **Eigen domein** | CORS-fouten in productie | Update CORS-origins om overeen te komen met je domein |
| **Mobiele app** | App kan web-API niet bereiken | Voeg het domein van je app toe of gebruik `*` voorzichtig |

**Pro tip**: Je kunt CORS-headers controleren in de Developer Tools van je browser onder het tabblad Netwerk. Zoek naar headers zoals `Access-Control-Allow-Origin` in de respons.

### Foutafhandeling en validatie

Let op hoe onze API correcte foutafhandeling bevat:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Belangrijke validatieprincipes:**
- **Controleert** op vereiste velden vóór verwerking van verzoeken
- **Geeft** betekenisvolle foutmeldingen in JSON-formaat
- **Gebruikt** geschikte HTTP-statuscodes (400 voor slechte verzoeken)
- **Biedt** duidelijke feedback om frontend-ontwikkelaars te helpen problemen op te lossen

## Het instellen en uitvoeren van je backend

Nu we onze AI-integratie en FastAPI-server klaar hebben, laten we alles draaien. Het installatieproces omvat het installeren van Python-afhankelijkheden, het configureren van omgevingsvariabelen en het starten van je ontwikkelserver.

### Python-omgeving instellen

Laten we je Python-ontwikkelomgeving instellen. Virtuele omgevingen zijn als de compartimentering van het Manhattan Project – elk project krijgt zijn eigen geïsoleerde ruimte met specifieke tools en afhankelijkheden, waardoor conflicten tussen verschillende projecten worden voorkomen.

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

**Wat we net hebben gedaan:**
- **Gecreëerd** onze eigen kleine Python-bubbel waar we pakketten kunnen installeren zonder andere dingen te beïnvloeden
- **Geactiveerd** zodat onze terminal weet dat deze specifieke omgeving moet worden gebruikt
- **Geïnstalleerd** de essentials: OpenAI voor AI-magic, FastAPI voor onze web-API, Uvicorn om het daadwerkelijk te draaien, en python-dotenv voor veilige geheimenbeheer

**Belangrijke afhankelijkheden uitgelegd:**
- **FastAPI**: Modern, snel webframework met automatische API-documentatie
- **Uvicorn**: Razendsnelle ASGI-server die FastAPI-toepassingen uitvoert
- **OpenAI**: Officiële bibliotheek voor GitHub-modellen en OpenAI API-integratie
- **python-dotenv**: Veilige omgevingsvariabele laden vanuit .env-bestanden

### Omgevingsconfiguratie: Geheimen veilig houden

Voordat we onze API starten, moeten we praten over een van de belangrijkste lessen in webontwikkeling: hoe je je geheimen echt geheim houdt. Omgevingsvariabelen zijn als een veilige kluis die alleen je toepassing kan openen.

#### Wat zijn omgevingsvariabelen?

**Denk aan omgevingsvariabelen als een kluis** – je stopt je waardevolle spullen erin, en alleen jij (en je app) hebben de sleutel om ze eruit te halen. In plaats van gevoelige informatie direct in je code te schrijven (waar letterlijk iedereen het kan zien), sla je het veilig op in de omgeving.

**Hier is het verschil:**
- **De verkeerde manier**: Je wachtwoord op een plakbriefje schrijven en op je monitor plakken
- **De juiste manier**: Je wachtwoord bewaren in een veilige wachtwoordmanager die alleen jij kunt openen

#### Waarom omgevingsvariabelen belangrijk zijn

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

**Wat er gebeurt als je geheimen hardcodeert:**
1. **Blootstelling in versiebeheer**: Iedereen met toegang tot je Git-repository ziet je API-sleutel
2. **Openbare repositories**: Als je naar GitHub pusht, is je sleutel zichtbaar voor het hele internet
3. **Teamdeling**: Andere ontwikkelaars die aan je project werken krijgen toegang tot je persoonlijke API-sleutel
4. **Beveiligingsinbreuken**: Als iemand je API-sleutel steelt, kan hij je AI-tegoed gebruiken

#### Je omgevingsbestand instellen

Maak een `.env`-bestand in je backend-map. Dit bestand slaat je geheimen lokaal op:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Begrijpen van het .env-bestand:**
- **Eén geheim per regel** in `KEY=value`-formaat
- **Geen spaties** rond het gelijkheidsteken
- **Geen aanhalingstekens** nodig rond waarden (meestal)
- **Opmerkingen** beginnen met `#`

#### Je GitHub Personal Access Token maken

Je GitHub-token is als een speciaal wachtwoord dat je toepassing toestemming geeft om de AI-diensten van GitHub te gebruiken:

**Stapsgewijze tokencreatie:**
1. **Ga naar GitHub-instellingen** → Ontwikkelaarsinstellingen → Persoonlijke toegangstokens → Tokens (klassiek)
2. **Klik op "Genereer nieuw token (klassiek)"**
3. **Stel vervaldatum in** (30 dagen voor testen, langer voor productie)
4. **Selecteer scopes**: Vink "repo" en andere benodigde machtigingen aan
5. **Genereer token** en kopieer het onmiddellijk (je kunt het later niet meer zien!)
6. **Plak in je .env-bestand**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Omgevingsvariabelen laden in Python

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

**Wat deze code doet:**
- **Laadt** je .env-bestand en maakt variabelen beschikbaar voor Python
- **Controleert** of de vereiste token bestaat (goede foutafhandeling!)
- **Geeft** een duidelijke foutmelding als de token ontbreekt
- **Gebruikt** de token veilig zonder deze in de code bloot te stellen

#### Git-beveiliging: Het .gitignore-bestand

Je `.gitignore`-bestand vertelt Git welke bestanden nooit gevolgd of geüpload mogen worden:

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

**Waarom dit cruciaal is**: Zodra je `.env` toevoegt aan `.gitignore`, zal Git je omgevingsbestand negeren, waardoor je voorkomt dat je per ongeluk je geheimen uploadt naar GitHub.

#### Verschillende omgevingen, verschillende geheimen

Professionele toepassingen gebruiken verschillende API-sleutels voor verschillende omgevingen:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Waarom dit belangrijk is**: Je wilt niet dat je experimenten tijdens ontwikkeling invloed hebben op je productie-AI-gebruikslimiet, en je wilt verschillende beveiligingsniveaus voor verschillende omgevingen.

### Je ontwikkelserver starten: Je FastAPI tot leven brengen

Nu komt het spannende moment – je FastAPI-ontwikkelserver starten en je AI-integratie tot leven zien komen! FastAPI gebruikt Uvicorn, een razendsnelle ASGI-server die speciaal is ontworpen voor asynchrone Python-toepassingen.

#### Begrijpen van het opstartproces van de FastAPI-server

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Wanneer je dit commando uitvoert, gebeurt het volgende achter de schermen:

**1. Python laadt je FastAPI-toepassing**:
- Importeert alle vereiste bibliotheken (FastAPI, Pydantic, OpenAI, etc.)
- Laadt omgevingsvariabelen uit je `.env`-bestand
- Creëert de FastAPI-toepassingsinstantie met automatische documentatie

**2. Uvicorn configureert de ASGI-server**:
- Bindt aan poort 5000 met asynchrone verzoekverwerkingsmogelijkheden
- Stelt verzoekroutering in met automatische validatie
- Activeert hot reload voor ontwikkeling (herstart bij bestandswijzigingen)
- Genereert interactieve API-documentatie

**3. Server begint te luisteren**:
- Je terminal toont: `INFO: Uvicorn running on http://0.0.0.0:5000`
- De server kan meerdere gelijktijdige AI-verzoeken verwerken
- Je API is klaar met automatische documentatie op `http://localhost:5000/docs`

#### Wat je zou moeten zien als alles werkt

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Begrijpen van de FastAPI-uitvoer:**
- **Zal wijzigingen volgen**: Auto-reload ingeschakeld voor ontwikkeling
- **Uvicorn actief**: Hoogpresterende ASGI-server is actief
- **Herlaadproces gestart**: Bestandswatcher voor automatische herstarts
- **Toepassingsopstart voltooid**: FastAPI-app succesvol geïnitialiseerd
- **Interactieve documentatie beschikbaar**: Bezoek `/docs` voor automatische API-documentatie

#### Je FastAPI testen: Meerdere krachtige benaderingen

FastAPI biedt verschillende handige manieren om je API te testen, inclusief automatische interactieve documentatie:

**Methode 1: Interactieve API-documentatie (aanbevolen)**
1. Open je browser en ga naar `http://localhost:5000/docs`
2. Je ziet Swagger UI met al je endpoints gedocumenteerd
3. Klik op `/hello` → "Probeer het uit" → Voer een testbericht in → "Uitvoeren"
4. Bekijk de respons direct in de browser met de juiste opmaak

**Methode 2: Basis browsertest**
1. Ga naar `http://localhost:5000` voor de root-endpoint
2. Ga naar `http://localhost:5000/health` om de serverstatus te controleren
3. Dit bevestigt dat je FastAPI-server correct draait

**Methode 2: Command Line Test (Geavanceerd)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Methode 3: Python Test Script**
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

#### Problemen bij opstarten oplossen

| Foutmelding | Betekenis | Oplossing |
|-------------|-----------|-----------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI is niet geïnstalleerd | Voer `pip install fastapi uvicorn` uit in je virtuele omgeving |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-server is niet geïnstalleerd | Voer `pip install uvicorn` uit in je virtuele omgeving |
| `KeyError: 'GITHUB_TOKEN'` | Omgevingsvariabele niet gevonden | Controleer je `.env`-bestand en de `load_dotenv()`-aanroep |
| `Address already in use` | Poort 5000 is bezet | Beëindig andere processen die poort 5000 gebruiken of wijzig de poort |
| `ValidationError` | Verzoekgegevens komen niet overeen met het Pydantic-model | Controleer of je verzoekformaat overeenkomt met het verwachte schema |
| `HTTPException 422` | Onverwerkbare entiteit | Verzoekvalidatie mislukt, controleer `/docs` voor het juiste formaat |
| `OpenAI API error` | Authenticatie bij AI-service mislukt | Controleer of je GitHub-token correct is en de juiste rechten heeft |

#### Beste praktijken voor ontwikkeling

**Automatisch herladen**: FastAPI met Uvicorn biedt automatisch herladen wanneer je wijzigingen opslaat in je Python-bestanden. Dit betekent dat je je code kunt aanpassen en direct kunt testen zonder handmatig opnieuw op te starten.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Loggen tijdens ontwikkeling**: Voeg logging toe om te begrijpen wat er gebeurt:

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

**Waarom logging helpt**: Tijdens ontwikkeling kun je precies zien welke verzoeken binnenkomen, wat de AI teruggeeft en waar fouten optreden. Dit maakt het debuggen veel sneller.

### Configureren voor GitHub Codespaces: Eenvoudige cloudontwikkeling

GitHub Codespaces is als een krachtige ontwikkelcomputer in de cloud die je vanuit elke browser kunt benaderen. Als je in Codespaces werkt, zijn er een paar extra stappen nodig om je backend toegankelijk te maken voor je frontend.

#### Begrip van Codespaces-netwerken

In een lokale ontwikkelomgeving draait alles op dezelfde computer:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (of file://)

In Codespaces draait je ontwikkelomgeving op de servers van GitHub, dus "localhost" heeft een andere betekenis. GitHub maakt automatisch openbare URL's voor je services, maar je moet ze correct configureren.

#### Stapsgewijze configuratie van Codespaces

**1. Start je backend-server**:
```bash
cd backend
python api.py
```

Je ziet het bekende FastAPI/Uvicorn-opstartbericht, maar let op dat het binnen de Codespace-omgeving draait.

**2. Configureer poortzichtbaarheid**:
- Zoek naar het tabblad "Ports" in het onderste paneel van VS Code
- Zoek poort 5000 in de lijst
- Klik met de rechtermuisknop op poort 5000
- Selecteer "Port Visibility" → "Public"

**Waarom openbaar maken?** Standaard zijn Codespace-poorten privé (alleen toegankelijk voor jou). Door ze openbaar te maken, kan je frontend (die in de browser draait) communiceren met je backend.

**3. Verkrijg je openbare URL**:
Nadat je de poort openbaar hebt gemaakt, zie je een URL zoals:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Werk je frontend-configuratie bij**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Begrip van Codespace-URL's

Codespace-URL's volgen een voorspelbaar patroon:
```
https://[codespace-name]-[port].app.github.dev
```

**Uitleg**:
- `codespace-name`: Een unieke identificatie voor je Codespace (meestal inclusief je gebruikersnaam)
- `port`: Het poortnummer waarop je service draait (5000 voor onze FastAPI-app)
- `app.github.dev`: Het domein van GitHub voor Codespace-applicaties

#### Testen van je Codespace-configuratie

**1. Test de backend direct**:
Open je openbare URL in een nieuw browsertabblad. Je zou moeten zien:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Test met ontwikkelaarstools in de browser**:
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

#### Codespaces versus lokale ontwikkeling

| Aspect | Lokale ontwikkeling | GitHub Codespaces |
|--------|---------------------|-------------------|
| **Installatietijd** | Lang (Python, afhankelijkheden installeren) | Direct (vooraf geconfigureerde omgeving) |
| **URL-toegang** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Poortconfiguratie** | Automatisch | Handmatig (poorten openbaar maken) |
| **Bestandspersistentie** | Lokale machine | GitHub-repository |
| **Samenwerking** | Moeilijk om omgeving te delen | Makkelijk om Codespace-link te delen |
| **Internetafhankelijkheid** | Alleen voor AI-API-aanroepen | Vereist voor alles |

#### Tips voor ontwikkeling in Codespaces

**Omgevingsvariabelen in Codespaces**:
Je `.env`-bestand werkt hetzelfde in Codespaces, maar je kunt ook omgevingsvariabelen rechtstreeks instellen in de Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Poortbeheer**:
- Codespaces detecteert automatisch wanneer je applicatie begint te luisteren op een poort
- Je kunt meerdere poorten tegelijk doorsturen (handig als je later een database toevoegt)
- Poorten blijven toegankelijk zolang je Codespace actief is

**Ontwikkelworkflow**:
1. Breng codewijzigingen aan in VS Code
2. FastAPI herlaadt automatisch (dankzij de herlaadmodus van Uvicorn)
3. Test wijzigingen direct via de openbare URL
4. Commit en push wanneer je klaar bent

> 💡 **Pro Tip**: Maak een bladwijzer van je Codespace-backend-URL tijdens ontwikkeling. Omdat Codespace-namen stabiel zijn, verandert de URL niet zolang je dezelfde Codespace gebruikt.

## Het maken van de frontend-chatinterface: waar mensen AI ontmoeten

Nu gaan we de gebruikersinterface bouwen – het deel dat bepaalt hoe mensen met je AI-assistent omgaan. Net zoals het ontwerp van de originele iPhone-interface, richten we ons op het intuïtief en natuurlijk maken van complexe technologie.

### Begrip van moderne frontend-architectuur

Onze chatinterface wordt een zogenaamde "Single Page Application" of SPA. In plaats van de ouderwetse aanpak waarbij elke klik een nieuwe pagina laadt, werkt onze app soepel en direct:

**Oude websites**: Zoals het lezen van een fysiek boek – je bladert naar volledig nieuwe pagina's
**Onze chat-app**: Zoals het gebruik van je telefoon – alles stroomt en werkt naadloos

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

### De drie pijlers van frontend-ontwikkeling

Elke frontend-applicatie – van eenvoudige websites tot complexe apps zoals Discord of Slack – is gebouwd op drie kerntechnologieën. Zie ze als de basis van alles wat je op het web ziet en waarmee je interactie hebt:

**HTML (Structuur)**: Dit is je fundering
- Bepaalt welke elementen er zijn (knoppen, tekstvelden, containers)
- Geeft betekenis aan inhoud (dit is een kop, dit is een formulier, enz.)
- Creëert de basisstructuur waarop alles verder wordt gebouwd

**CSS (Presentatie)**: Dit is je interieurontwerper
- Maakt alles mooi (kleuren, lettertypen, lay-outs)
- Past zich aan verschillende schermformaten aan (telefoon vs laptop vs tablet)
- Creëert vloeiende animaties en visuele feedback

**JavaScript (Gedrag)**: Dit is je brein
- Reageert op wat gebruikers doen (klikken, typen, scrollen)
- Communiceert met je backend en werkt de pagina bij
- Maakt alles interactief en dynamisch

**Zie het als architectonisch ontwerp:**
- **HTML**: Het structurele ontwerp (definieert ruimtes en relaties)
- **CSS**: Het esthetische en omgevingsontwerp (visuele stijl en gebruikerservaring)
- **JavaScript**: De mechanische systemen (functionaliteit en interactiviteit)

### Waarom moderne JavaScript-architectuur belangrijk is

Onze chatapplicatie zal gebruik maken van moderne JavaScript-patronen die je in professionele applicaties tegenkomt. Het begrijpen van deze concepten helpt je om te groeien als ontwikkelaar:

**Klasse-gebaseerde architectuur**: We organiseren onze code in klassen, wat lijkt op het maken van blauwdrukken voor objecten
**Async/Await**: Moderne manier om operaties te verwerken die tijd kosten (zoals API-aanroepen)
**Event-gedreven programmeren**: Onze app reageert op gebruikersacties (klikken, toetsen indrukken) in plaats van continu in een lus te draaien
**DOM-manipulatie**: Dynamisch bijwerken van de inhoud van de webpagina op basis van gebruikersinteracties en API-reacties

### Projectstructuur instellen

Maak een frontend-map met deze georganiseerde structuur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Begrip van de architectuur:**
- **Scheiding** van verantwoordelijkheden tussen structuur (HTML), gedrag (JavaScript) en presentatie (CSS)
- **Behoudt** een eenvoudige bestandsstructuur die gemakkelijk te navigeren en te wijzigen is
- **Volgt** best practices voor webontwikkeling op het gebied van organisatie en onderhoudbaarheid

### De HTML-basis bouwen: Semantische structuur voor toegankelijkheid

Laten we beginnen met de HTML-structuur. Moderne webontwikkeling benadrukt "semantische HTML" – het gebruik van HTML-elementen die duidelijk hun doel beschrijven, niet alleen hun uiterlijk. Dit maakt je applicatie toegankelijk voor schermlezers, zoekmachines en andere tools.

**Waarom semantische HTML belangrijk is**: Stel je voor dat je je chatapp beschrijft aan iemand via de telefoon. Je zou zeggen: "Er is een kop met de titel, een hoofdgedeelte waar gesprekken verschijnen, en een formulier onderaan om berichten te typen." Semantische HTML gebruikt elementen die overeenkomen met deze natuurlijke beschrijving.

Maak `index.html` met deze doordachte structuur:

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

**Begrip van elk HTML-element en zijn doel:**

#### Documentstructuur
- **`<!DOCTYPE html>`**: Vertelt de browser dat dit moderne HTML5 is
- **`<html lang="en">`**: Geeft de paginataal aan voor schermlezers en vertaaltools
- **`<meta charset="UTF-8">`**: Zorgt voor de juiste karaktercodering voor internationale tekst
- **`<meta name="viewport"...>`**: Maakt de pagina mobielvriendelijk door zoom en schaal te regelen

#### Semantische elementen
- **`<header>`**: Identificeert duidelijk het bovenste gedeelte met titel en beschrijving
- **`<main>`**: Geeft het primaire inhoudsgebied aan (waar gesprekken plaatsvinden)
- **`<form>`**: Semantisch correct voor gebruikersinvoer, maakt goede toetsenbordnavigatie mogelijk

#### Toegankelijkheidsfuncties
- **`role="log"`**: Vertelt schermlezers dat dit gebied een chronologisch logboek van berichten bevat
- **`aria-live="polite"`**: Kondigt nieuwe berichten aan bij schermlezers zonder te onderbreken
- **`aria-label`**: Geeft beschrijvende labels voor formulierbesturingselementen
- **`required`**: De browser controleert of gebruikers een bericht invoeren voordat ze het verzenden

#### CSS- en JavaScript-integratie
- **`class`-attributen**: Bieden stylinghooks voor CSS (bijv. `chat-container`, `input-group`)
- **`id`-attributen**: Staan JavaScript toe specifieke elementen te vinden en te manipuleren
- **Scriptplaatsing**: JavaScript-bestand wordt aan het einde geladen zodat HTML eerst laadt

**Waarom deze structuur werkt:**
- **Logische flow**: Header → Hoofdinhoud → Invoerformulier komt overeen met natuurlijke leesvolgorde
- **Toetsenbord toegankelijk**: Gebruikers kunnen door alle interactieve elementen tabben
- **Schermlezer vriendelijk**: Duidelijke markeringen en beschrijvingen voor visueel gehandicapte gebruikers
- **Mobielvriendelijk**: Viewport-meta tag maakt responsief ontwerp mogelijk
- **Progressieve verbetering**: Werkt zelfs als CSS of JavaScript niet laadt

### Interactieve JavaScript toevoegen: Logica voor moderne webapplicaties

Laten we nu de JavaScript bouwen die onze chatinterface tot leven brengt. We gebruiken moderne JavaScript-patronen die je tegenkomt in professionele webontwikkeling, waaronder ES6-klassen, async/await en event-gedreven programmeren.

#### Begrip van moderne JavaScript-architectuur

In plaats van procedurele code te schrijven (een reeks functies die op volgorde worden uitgevoerd), maken we een **klasse-gebaseerde architectuur**. Zie een klasse als een blauwdruk voor het maken van objecten – zoals een architectenblauwdruk kan worden gebruikt om meerdere huizen te bouwen.

**Waarom klassen gebruiken voor webapplicaties?**
- **Organisatie**: Alle gerelateerde functionaliteit wordt gegroepeerd
- **Herbruikbaarheid**: Je kunt meerdere chatinstanties op dezelfde pagina maken
- **Onderhoudbaarheid**: Makkelijker om specifieke functies te debuggen en aan te passen
- **Professionele standaard**: Dit patroon wordt gebruikt in frameworks zoals React, Vue en Angular

Maak `app.js` met deze moderne, goed gestructureerde JavaScript:

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

#### Begrip van elk JavaScript-concept

**ES6 Klasse-structuur**:
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

**Async/Await-patroon**:
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

**Event-gedreven programmeren**:
In plaats van constant te controleren of er iets is gebeurd, "luisteren" we naar gebeurtenissen:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-manipulatie**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Beveiliging en beste praktijken

**XSS-preventie**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Waarom dit belangrijk is**: Als een gebruiker `<script>alert('hack')</script>` typt, zorgt deze functie ervoor dat het als tekst wordt weergegeven in plaats van als code te worden uitgevoerd.

**Foutafhandeling**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Overwegingen voor gebruikerservaring**:
- **Optimistische UI**: Voeg gebruikersbericht onmiddellijk toe, wacht niet op serverreactie
- **Laadstatus**: Knoppen uitschakelen en "Verzenden..." weergeven tijdens het wachten
- **Automatisch scrollen**: Zorg dat nieuwste berichten zichtbaar blijven
- **Invoervalidatie**: Verstuur geen lege berichten
- **Sneltoetsen**: Enter-toets verzendt berichten (zoals echte chatapps)

#### Begrip van de applicatiestroom

1. **Pagina laadt** → `DOMContentLoaded`-gebeurtenis wordt geactiveerd → `new ChatApp()` wordt aangemaakt
2. **Constructor wordt uitgevoerd** → Verkrijgt referenties naar DOM-elementen → Stelt gebeurtenisluisteraars in
3. **Gebruiker typt bericht** → Drukt op Enter of klikt op Verzenden → `handleSubmit` wordt uitgevoerd
4. **handleSubmit** → Valideert invoer → Toont laadstatus → Roept API aan
5. **API reageert** → Voegt AI-bericht toe aan chat → Interface wordt opnieuw ingeschakeld
6. **Klaar voor volgend bericht** → Gebruiker kan verder chatten
Deze architectuur is schaalbaar – je kunt eenvoudig functies toevoegen zoals het bewerken van berichten, het uploaden van bestanden of meerdere gespreksdraadjes zonder de kernstructuur opnieuw te hoeven schrijven.

### Je chatinterface stylen

Laten we nu een moderne, visueel aantrekkelijke chatinterface maken met CSS. Goede styling zorgt ervoor dat je applicatie professioneel aanvoelt en verbetert de algehele gebruikerservaring. We gebruiken moderne CSS-functies zoals Flexbox, CSS Grid en aangepaste eigenschappen voor een responsief en toegankelijk ontwerp.

Maak `styles.css` met deze uitgebreide stijlen:

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

**Begrijpen van de CSS-architectuur:**
- **Maakt gebruik van** CSS-aangepaste eigenschappen (variabelen) voor consistente thematisering en eenvoudige onderhoudbaarheid
- **Implementeert** een Flexbox-layout voor responsief ontwerp en correcte uitlijning
- **Bevat** vloeiende animaties voor het verschijnen van berichten zonder afleidend te zijn
- **Biedt** visuele onderscheidingen tussen gebruikersberichten, AI-antwoorden en foutmeldingen
- **Ondersteunt** responsief ontwerp dat werkt op zowel desktop- als mobiele apparaten
- **Houdt rekening met** toegankelijkheid door voorkeuren voor verminderde beweging en juiste contrastverhoudingen
- **Biedt** ondersteuning voor donkere modus op basis van de systeemvoorkeuren van de gebruiker

### Configureren van je backend-URL

De laatste stap is het bijwerken van de `BASE_URL` in je JavaScript om overeen te komen met je backend-server:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Je backend-URL bepalen:**
- **Lokale ontwikkeling**: Gebruik `http://localhost:5000` als je zowel de frontend als de backend lokaal uitvoert
- **Codespaces**: Zoek je backend-URL in het tabblad Ports nadat je poort 5000 openbaar hebt gemaakt
- **Productie**: Vervang door je daadwerkelijke domein bij het implementeren op een hostingservice

> 💡 **Testtip**: Je kunt je backend direct testen door de root-URL in je browser te bezoeken. Je zou het welkomstbericht van je FastAPI-server moeten zien.



## Testen en implementeren

Nu je zowel de frontend- als backendcomponenten hebt gebouwd, laten we testen of alles samenwerkt en verkennen we implementatieopties om je chatassistent met anderen te delen.

### Workflow voor lokaal testen

Volg deze stappen om je complete applicatie te testen:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Stapsgewijze testprocedure:**

1. **Start je backend-server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Controleer of de API werkt**:
   - Open `http://localhost:5000` in je browser
   - Je zou het welkomstbericht van je FastAPI-server moeten zien

3. **Open je frontend**:
   - Navigeer naar je frontend-map
   - Open `index.html` in je webbrowser
   - Of gebruik de Live Server-extensie van VS Code voor een betere ontwikkelervaring

4. **Test de chatfunctionaliteit**:
   - Typ een bericht in het invoerveld
   - Klik op "Verzenden" of druk op Enter
   - Controleer of de AI correct reageert
   - Controleer de browserconsole op eventuele JavaScript-fouten

### Veelvoorkomende problemen oplossen

| Probleem | Symptomen | Oplossing |
|----------|-----------|-----------|
| **CORS-fout** | Frontend kan backend niet bereiken | Zorg ervoor dat FastAPI CORSMiddleware correct is geconfigureerd |
| **API-sleutelfout** | 401 Unauthorized reacties | Controleer je `GITHUB_TOKEN` omgevingsvariabele |
| **Verbinding geweigerd** | Netwerkfouten in frontend | Controleer de backend-URL en of de Flask-server actief is |
| **Geen AI-reactie** | Lege of foutreacties | Controleer backend-logs op API-limieten of authenticatieproblemen |

**Veelvoorkomende debuggingstappen:**
- **Controleert** de browser Developer Tools Console op JavaScript-fouten
- **Verifieert** dat het tabblad Netwerk succesvolle API-verzoeken en -reacties toont
- **Bekijkt** de backend-terminaluitvoer op Python-fouten of API-problemen
- **Bevestigt** dat omgevingsvariabelen correct zijn geladen en toegankelijk zijn

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter de chatassistent door gespreksgeschiedenis en berichtpersistentie toe te voegen. Deze uitdaging helpt je begrijpen hoe je de status in chatapplicaties beheert en gegevensopslag implementeert voor een betere gebruikerservaring.

**Prompt:** Wijzig de chatapplicatie om gespreksgeschiedenis te bevatten die blijft bestaan tussen sessies. Voeg functionaliteit toe om chatberichten op te slaan in lokale opslag, toon gespreksgeschiedenis wanneer de pagina wordt geladen en voeg een knop "Geschiedenis wissen" toe. Implementeer ook typindicatoren en berichttijdstempels om de chatervaring realistischer te maken.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## Opdracht: Bouw je persoonlijke AI-assistent

Nu ga je je eigen AI-assistent implementeren. In plaats van simpelweg de tutorialcode te repliceren, is dit een kans om de concepten toe te passen terwijl je iets bouwt dat jouw eigen interesses en gebruiksscenario's weerspiegelt.

### Projectvereisten

Laten we je project opzetten met een schone, georganiseerde structuur:

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

### Kernimplementatietaken

**Backend-ontwikkeling:**
- **Pas** onze FastAPI-code aan en maak er jouw eigen versie van
- **Creëer** een unieke AI-persoonlijkheid – misschien een behulpzame kookassistent, een creatieve schrijfpartner of een studiehulp?
- **Voeg** solide foutafhandeling toe zodat je app niet crasht als er iets misgaat
- **Schrijf** duidelijke documentatie voor iedereen die wil begrijpen hoe je API werkt

**Frontend-ontwikkeling:**
- **Bouw** een chatinterface die intuïtief en uitnodigend aanvoelt
- **Schrijf** schone, moderne JavaScript waar je trots op kunt zijn om aan andere ontwikkelaars te laten zien
- **Ontwerp** aangepaste styling die de persoonlijkheid van je AI weerspiegelt – leuk en kleurrijk? Schoon en minimalistisch? Helemaal aan jou!
- **Zorg ervoor** dat het goed werkt op zowel telefoons als computers

**Personalisatievereisten:**
- **Kies** een unieke naam en persoonlijkheid voor je AI-assistent – misschien iets dat jouw interesses weerspiegelt of de problemen die je wilt oplossen
- **Pas** het visuele ontwerp aan om bij de uitstraling van je assistent te passen
- **Schrijf** een pakkend welkomstbericht dat mensen uitnodigt om te gaan chatten
- **Test** je assistent met verschillende soorten vragen om te zien hoe hij reageert

### Verbeteringsideeën (optioneel)

Wil je je project naar een hoger niveau tillen? Hier zijn enkele leuke ideeën om te verkennen:

| Functie | Beschrijving | Vaardigheden die je oefent |
|---------|--------------|---------------------------|
| **Berichtgeschiedenis** | Onthoud gesprekken, zelfs na het verversen van de pagina | Werken met localStorage, JSON-verwerking |
| **Typindicatoren** | Toon "AI is aan het typen..." terwijl je wacht op reacties | CSS-animaties, asynchrone programmering |
| **Berichttijdstempels** | Toon wanneer elk bericht is verzonden | Datum/tijd formattering, UX-ontwerp |
| **Chat exporteren** | Laat gebruikers hun gesprek downloaden | Bestandsbeheer, gegevens exporteren |
| **Thema wisselen** | Schakel tussen licht/donker modus | CSS-variabelen, gebruikersvoorkeuren |
| **Spraakinvoer** | Voeg spraak-naar-tekst functionaliteit toe | Web-API's, toegankelijkheid |

### Testen en documentatie

**Kwaliteitscontrole:**
- **Test** je applicatie met verschillende invoertypen en randgevallen
- **Controleer** of het responsieve ontwerp werkt op verschillende schermformaten
- **Controleer** toegankelijkheid met toetsenbordnavigatie en schermlezers
- **Valideer** HTML en CSS voor naleving van standaarden

**Documentatievereisten:**
- **Schrijf** een README.md waarin je project en hoe je het moet uitvoeren wordt uitgelegd
- **Voeg** screenshots toe van je chatinterface in actie
- **Documenteer** eventuele unieke functies of aanpassingen die je hebt toegevoegd
- **Geef** duidelijke installatie-instructies voor andere ontwikkelaars

### Richtlijnen voor indienen

**Projectresultaten:**
1. Volledige projectmap met alle broncode
2. README.md met projectbeschrijving en installatie-instructies
3. Screenshots die je chatassistent in actie laten zien
4. Korte reflectie over wat je hebt geleerd en welke uitdagingen je bent tegengekomen

**Evaluatiecriteria:**
- **Functionaliteit**: Werkt de chatassistent zoals verwacht?
- **Codekwaliteit**: Is de code goed georganiseerd, gedocumenteerd en onderhoudbaar?
- **Ontwerp**: Is de interface visueel aantrekkelijk en gebruiksvriendelijk?
- **Creativiteit**: Hoe uniek en gepersonaliseerd is je implementatie?
- **Documentatie**: Zijn de installatie-instructies duidelijk en volledig?

> 💡 **Succes Tip**: Begin eerst met de basisvereisten en voeg verbeteringen toe zodra alles werkt. Focus op het creëren van een gepolijste kernervaring voordat je geavanceerde functies toevoegt.

## Oplossing

[Oplossing](./solution/README.md)

## Bonusuitdagingen

Klaar om je AI-assistent naar een hoger niveau te tillen? Probeer deze geavanceerde uitdagingen die je begrip van AI-integratie en webontwikkeling zullen verdiepen.

### Personalisatie van persoonlijkheid

De echte magie gebeurt wanneer je je AI-assistent een unieke persoonlijkheid geeft. Experimenteer met verschillende systeemprompts om gespecialiseerde assistenten te creëren:

**Voorbeeld van een professionele assistent:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Voorbeeld van een creatieve schrijfhelper:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Voorbeeld van een technische mentor:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend-verbeteringen

Transformeer je chatinterface met deze visuele en functionele verbeteringen:

**Geavanceerde CSS-functies:**
- **Implementeer** vloeiende berichtanimaties en overgangen
- **Voeg** aangepaste chatbubbeldesigns toe met CSS-vormen en -gradaties
- **Creëer** een typindicatoranimatie voor wanneer de AI "nadenkt"
- **Ontwerp** emoji-reacties of een beoordelingssysteem voor berichten

**JavaScript-verbeteringen:**
- **Voeg** sneltoetsen toe (Ctrl+Enter om te verzenden, Escape om invoer te wissen)
- **Implementeer** zoek- en filterfunctionaliteit voor berichten
- **Creëer** een functie om gesprekken te exporteren (download als tekst of JSON)
- **Voeg** automatische opslag toe aan localStorage om verlies van berichten te voorkomen

### Geavanceerde AI-integratie

**Meerdere AI-persoonlijkheden:**
- **Creëer** een dropdownmenu om te schakelen tussen verschillende AI-persoonlijkheden
- **Sla** de voorkeurspersoonlijkheid van de gebruiker op in localStorage
- **Implementeer** contextwisseling die de gespreksstroom behoudt

**Slimme responsfuncties:**
- **Voeg** gesprekscontextbewustzijn toe (AI onthoudt eerdere berichten)
- **Implementeer** slimme suggesties op basis van het gespreksonderwerp
- **Creëer** snelle antwoordknoppen voor veelgestelde vragen

> 🎯 **Leerdoel**: Deze bonusuitdagingen helpen je geavanceerde webontwikkelingspatronen en AI-integratietechnieken te begrijpen die worden gebruikt in productieapplicaties.

## Samenvatting en volgende stappen

Gefeliciteerd! Je hebt met succes een complete AI-aangedreven chatassistent vanaf nul gebouwd. Dit project heeft je praktische ervaring gegeven met moderne webontwikkelingstechnologieën en AI-integratie – vaardigheden die steeds waardevoller worden in het huidige technologische landschap.

### Wat je hebt bereikt

Tijdens deze les heb je verschillende belangrijke technologieën en concepten onder de knie gekregen:

**Backend-ontwikkeling:**
- **Geïntegreerd** met GitHub Models API voor AI-functionaliteit
- **Gebouwd** een RESTful API met Flask en goede foutafhandeling
- **Geïmplementeerd** veilige authenticatie met behulp van omgevingsvariabelen
- **Geconfigureerd** CORS voor cross-origin verzoeken tussen frontend en backend

**Frontend-ontwikkeling:**
- **Gecreëerd** een responsieve chatinterface met semantische HTML
- **Geïmplementeerd** moderne JavaScript met async/await en een op klassen gebaseerde architectuur
- **Ontworpen** een boeiende gebruikersinterface met CSS Grid, Flexbox en animaties
- **Toegevoegd** toegankelijkheidsfuncties en principes van responsief ontwerp

**Full-stack integratie:**
- **Verbonden** frontend en backend via HTTP API-verzoeken
- **Afgehandeld** realtime gebruikersinteracties en asynchrone gegevensstromen
- **Geïmplementeerd** foutafhandeling en gebruikersfeedback in de hele applicatie
- **Getest** de complete applicatieworkflow van gebruikersinvoer tot AI-reactie

### Belangrijke leerresultaten

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

Dit project heeft je geïntroduceerd in de basisprincipes van het bouwen van AI-aangedreven applicaties, wat de toekomst van webontwikkeling vertegenwoordigt. Je begrijpt nu hoe je AI-mogelijkheden kunt integreren in traditionele webapplicaties, waardoor boeiende gebruikerservaringen ontstaan die intelligent en responsief aanvoelen.

### Professionele toepassingen

De vaardigheden die je in deze les hebt ontwikkeld, zijn direct toepasbaar in moderne softwareontwikkelingscarrières:

- **Full-stack webontwikkeling** met moderne frameworks en API's
- **AI-integratie** in webapplicaties en mobiele apps
- **API-ontwerp en ontwikkeling** voor microservices-architecturen
- **Ontwikkeling van gebruikersinterfaces** met focus op toegankelijkheid en responsief ontwerp
- **DevOps-praktijken** inclusief configuratie van omgevingen en implementatie

### Je AI-ontwikkelingsreis voortzetten

**Volgende leerstappen:**
- **Verken** meer geavanceerde AI-modellen en API's (GPT-4, Claude, Gemini)
- **Leer** over prompt-engineeringtechnieken voor betere AI-reacties
- **Bestudeer** gespreksontwerp en principes van chatbotgebruikerservaring
- **Onderzoek** AI-veiligheid, ethiek en verantwoordelijke AI-ontwikkelingspraktijken
- **Bouw** complexere applicaties met gespreksgeheugen en contextbewustzijn

**Geavanceerde projectideeën:**
- Multi-user chatrooms met AI-moderatie
- AI-aangedreven klantenservicechatbots
- Educatieve tutorassistenten met gepersonaliseerd leren
- Creatieve schrijfpartners met verschillende AI-persoonlijkheden
- Technische documentatieassistenten voor ontwikkelaars

## Aan de slag met GitHub Codespaces

Wil je dit project proberen in een cloudontwikkelomgeving? GitHub Codespaces biedt een complete ontwikkelomgeving in je browser, perfect om te experimenteren met AI-applicaties zonder lokale installatievereisten.

### Je ontwikkelomgeving instellen

**Stap 1: Maak vanuit template**
- **Navigeer** naar de [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klik** op "Use this template" in de rechterbovenhoek (zorg ervoor dat je bent ingelogd op GitHub)

![Interface voor het maken vanuit template met de groene knop "Use this template"](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.nl.png)

**Stap 2: Codespaces starten**
- **Open** je nieuw aangemaakte repository
- **Klik** op de groene knop "Code" en selecteer "Codespaces"
- **Kies** "Create codespace on main" om je ontwikkelomgeving te starten

![Interface voor het maken van codespace met opties voor het starten van een cloudontwikkelomgeving](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.nl.png)

**Stap 3: Configuratie van de omgeving**
Zodra je Codespace is geladen, heb je toegang tot:
- **Vooraf geïnstalleerde** Python, Node.js en alle benodigde ontwikkeltools
- **VS Code-interface** met extensies voor webontwikkeling
- **Terminaltoegang** voor het uitvoeren van backend- en frontendservers
- **Port forwarding** voor het testen van je applicaties

**Wat Codespaces biedt:**
- **Elimineert** problemen met lokale omgeving setup en configuratie
- **Biedt** een consistente ontwikkelomgeving op verschillende apparaten
- **Bevat** vooraf geconfigureerde tools en extensies voor webontwikkeling
- **Biedt** naadloze integratie met GitHub voor versiebeheer en samenwerking

> 🚀 **Pro Tip**: Codespaces is ideaal voor het leren en prototypen van AI-toepassingen, omdat het automatisch alle complexe omgeving setup afhandelt, zodat jij je kunt richten op bouwen en leren in plaats van op configuratieproblemen.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.