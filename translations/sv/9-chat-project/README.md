<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-23T21:36:23+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sv"
}
-->
# Bygg en chattassistent med AI

Minns du i Star Trek när besättningen kunde prata med skeppets dator, ställa komplexa frågor och få genomtänkta svar? Det som verkade som ren science fiction på 1960-talet är nu något du kan bygga med webbteknologier som du redan känner till.

I den här lektionen ska vi skapa en AI-chattassistent med hjälp av HTML, CSS, JavaScript och lite backend-integration. Du kommer att upptäcka hur de färdigheter du redan har lärt dig kan kopplas till kraftfulla AI-tjänster som kan förstå sammanhang och generera meningsfulla svar.

Tänk på AI som att ha tillgång till ett enormt bibliotek som inte bara kan hitta information utan också syntetisera den till sammanhängande svar anpassade till dina specifika frågor. Istället för att söka igenom tusentals sidor får du direkta, kontextuella svar.

Integrationen sker genom att välbekanta webbteknologier samarbetar. HTML skapar chattgränssnittet, CSS hanterar den visuella designen, JavaScript sköter användarinteraktioner och en backend-API kopplar allt till AI-tjänster. Det är ungefär som hur olika sektioner i en orkester samarbetar för att skapa en symfoni.

Vi bygger i princip en bro mellan naturlig mänsklig kommunikation och maskinbearbetning. Du kommer att lära dig både den tekniska implementeringen av AI-tjänsteintegration och designmönster som gör interaktioner intuitiva.

I slutet av denna lektion kommer AI-integrationen att kännas mindre som en mystisk process och mer som en annan API du kan arbeta med. Du kommer att förstå de grundläggande mönstren som driver applikationer som ChatGPT och Claude, med hjälp av samma webbutvecklingsprinciper du har lärt dig.

Så här kommer ditt färdiga projekt att se ut:

![Chattappens gränssnitt som visar en konversation mellan användaren och AI-assistenten](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.sv.png)

## Förstå AI: Från mysterium till mästerskap

Innan vi dyker in i koden, låt oss förstå vad vi arbetar med. Om du har använt API:er tidigare, vet du det grundläggande mönstret: skicka en begäran, ta emot ett svar.

AI-API:er följer en liknande struktur, men istället för att hämta förlagrad data från en databas, genererar de nya svar baserat på mönster som lärts in från enorma mängder text. Tänk på det som skillnaden mellan ett bibliotekskatalogsystem och en kunnig bibliotekarie som kan syntetisera information från flera källor.

### Vad är egentligen "Generativ AI"?

Tänk på hur Rosettastenen gjorde det möjligt för forskare att förstå egyptiska hieroglyfer genom att hitta mönster mellan kända och okända språk. AI-modeller fungerar på liknande sätt – de hittar mönster i enorma mängder text för att förstå hur språk fungerar och använder sedan dessa mönster för att generera lämpliga svar på nya frågor.

**Låt mig förklara med en enkel jämförelse:**
- **Traditionell databas**: Som att fråga efter ditt födelsecertifikat – du får exakt samma dokument varje gång.
- **Sökmotor**: Som att be en bibliotekarie hitta böcker om katter – de visar dig vad som finns tillgängligt.
- **Generativ AI**: Som att fråga en kunnig vän om katter – de berättar intressanta saker med egna ord, anpassade till vad du vill veta.

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Hur AI-modeller lär sig (den enkla versionen)

AI-modeller lär sig genom att exponeras för enorma dataset som innehåller text från böcker, artiklar och konversationer. Genom denna process identifierar de mönster i:
- Hur tankar struktureras i skriftlig kommunikation
- Vilka ord som ofta förekommer tillsammans
- Hur konversationer vanligtvis flödar
- Kontextuella skillnader mellan formell och informell kommunikation

**Det är liknande hur arkeologer avkodar antika språk**: de analyserar tusentals exempel för att förstå grammatik, ordförråd och kulturell kontext, och kan till slut tolka nya texter med hjälp av de inlärda mönstren.

### Varför GitHub Models?

Vi använder GitHub Models av en ganska praktisk anledning – det ger oss tillgång till AI på företagsnivå utan att behöva sätta upp vår egen AI-infrastruktur (vilket, tro mig, du inte vill göra just nu!). Tänk på det som att använda en väder-API istället för att försöka förutsäga vädret själv genom att sätta upp väderstationer överallt.

Det är i princip "AI-som-en-tjänst", och det bästa? Det är gratis att komma igång, så du kan experimentera utan att oroa dig för att få en stor räkning.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Vi kommer att använda GitHub Models för vår backend-integration, som ger tillgång till professionella AI-funktioner via ett användarvänligt gränssnitt för utvecklare. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) fungerar som en testmiljö där du kan experimentera med olika AI-modeller och förstå deras kapabiliteter innan du implementerar dem i kod.

![GitHub Models AI Playground-gränssnitt med modellval och testområde](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.sv.png)

**Det här gör lekplatsen så användbar:**
- **Prova** olika AI-modeller som GPT-4o-mini, Claude och andra (alla gratis!)
- **Testa** dina idéer och frågor innan du skriver någon kod
- **Få** färdiga kodsnuttar i ditt favoritprogrammeringsspråk
- **Justera** inställningar som kreativitet och svarslängd för att se hur de påverkar resultatet

När du har lekt runt lite, klicka bara på fliken "Code" och välj ditt programmeringsspråk för att få den implementeringskod du behöver.

![Val i lekplatsen som visar kodgenereringsalternativ för olika programmeringsspråk](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.sv.png)

## Ställa in Python-backendintegration

Nu ska vi implementera AI-integrationen med Python. Python är utmärkt för AI-applikationer tack vare sin enkla syntax och kraftfulla bibliotek. Vi börjar med koden från GitHub Models Playground och refaktorerar den till en återanvändbar, produktionsklar funktion.

### Förstå grundimplementeringen

När du hämtar Python-koden från lekplatsen får du något som ser ut så här. Oroa dig inte om det verkar mycket till en början – vi går igenom det steg för steg:

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

**Det här händer i koden:**
- **Vi importerar** de verktyg vi behöver: `os` för att läsa miljövariabler och `OpenAI` för att kommunicera med AI
- **Vi ställer in** OpenAI-klienten för att peka på GitHubs AI-servrar istället för direkt på OpenAI
- **Vi autentiserar** med en speciell GitHub-token (mer om det strax!)
- **Vi strukturerar** vår konversation med olika "roller" – tänk på det som att sätta scenen för en pjäs
- **Vi skickar** vår begäran till AI med några finjusteringsparametrar
- **Vi extraherar** den faktiska svarstexten från all data som kommer tillbaka

### Förstå meddelanderoller: AI-konversationsramverket

AI-konversationer använder en specifik struktur med olika "roller" som fyller olika syften:

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

**Tänk på det som att regissera en pjäs:**
- **Systemroll**: Som scenanvisningar för en skådespelare – det berättar för AI hur den ska bete sig, vilken personlighet den ska ha och hur den ska svara
- **Användarroll**: Den faktiska frågan eller meddelandet från personen som använder din applikation
- **Assistentroll**: AI:s svar (du skickar inte detta, men det visas i konversationshistoriken)

**Verklig analogi**: Föreställ dig att du introducerar en vän för någon på en fest:
- **Systemmeddelande**: "Det här är min vän Sarah, hon är läkare och är bra på att förklara medicinska koncept på ett enkelt sätt"
- **Användarmeddelande**: "Kan du förklara hur vacciner fungerar?"
- **Assistentens svar**: Sarah svarar som en vänlig läkare, inte som en advokat eller kock

### Förstå AI-parametrar: Finjustera svarsbeteendet

De numeriska parametrarna i AI-API-anrop styr hur modellen genererar svar. Dessa inställningar låter dig justera AI:s beteende för olika användningsområden:

#### Temperatur (0,0 till 2,0): Kreativitetsreglaget

**Vad det gör**: Styr hur kreativt eller förutsägbart AI:s svar kommer att vara.

**Tänk på det som en jazzmusikers improvisationsnivå:**
- **Temperatur = 0,1**: Spelar exakt samma melodi varje gång (mycket förutsägbart)
- **Temperatur = 0,7**: Lägger till några smakfulla variationer medan det fortfarande är igenkännbart (balanserad kreativitet)
- **Temperatur = 1,5**: Full experimentell jazz med oväntade vändningar (mycket oförutsägbart)

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

#### Max Tokens (1 till 4096+): Kontroll av svarslängd

**Vad det gör**: Sätter en gräns för hur långt AI:s svar kan vara.

**Tänk på tokens som ungefär motsvarande ord** (cirka 1 token = 0,75 ord på engelska):
- **max_tokens=50**: Kort och koncist (som ett textmeddelande)
- **max_tokens=500**: Ett trevligt stycke eller två
- **max_tokens=2000**: En detaljerad förklaring med exempel

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

#### Top_p (0,0 till 1,0): Fokusparametern

**Vad det gör**: Styr hur fokuserad AI är på de mest sannolika svaren.

**Föreställ dig att AI har ett enormt ordförråd, rankat efter hur sannolikt varje ord är:**
- **top_p=0,1**: Tar bara hänsyn till de 10% mest sannolika orden (mycket fokuserat)
- **top_p=0,9**: Tar hänsyn till 90% av möjliga ord (mer kreativt)
- **top_p=1,0**: Tar hänsyn till allt (maximal variation)

**Till exempel**: Om du frågar "Himlen är vanligtvis..."
- **Låg top_p**: Säger nästan säkert "blå"
- **Hög top_p**: Kan säga "blå", "molnig", "vidsträckt", "föränderlig", "vacker" etc.

### Sätta ihop allt: Parameterkombinationer för olika användningsområden

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

**Förstå varför dessa parametrar är viktiga**: Olika applikationer behöver olika typer av svar. En kundtjänstbot bör vara konsekvent och faktabaserad (låg temperatur), medan en kreativ skrivassistent bör vara fantasifull och varierad (hög temperatur). Att förstå dessa parametrar ger dig kontroll över din AI:s personlighet och svarsstil.
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

**Förstå denna förbättrade funktion:**
- **Accepterar** två parametrar: användarens prompt och ett valfritt systemmeddelande
- **Tillhandahåller** ett standardmeddelande för allmänt assistentbeteende
- **Använder** korrekta Python-typhänvisningar för bättre koddokumentation
- **Inkluderar** en detaljerad docstring som förklarar funktionens syfte och parametrar
- **Returnerar** endast svarsinnehållet, vilket gör det enkelt att använda i vår webb-API
- **Bibehåller** samma modellparametrar för konsekvent AI-beteende

### Systemmeddelandets magi: Programmera AI:s personlighet

Om parametrar styr hur AI tänker, styr systemmeddelanden vem AI tror att den är. Detta är ärligt talat en av de häftigaste delarna med att arbeta med AI – du ger i princip AI en komplett personlighet, expertisnivå och kommunikationsstil.

**Tänk på systemmeddelanden som att ge olika roller till olika skådespelare**: Istället för att ha en generisk assistent kan du skapa specialiserade experter för olika situationer. Behöver du en tålmodig lärare? En kreativ idépartner? En affärsrådgivare utan krusiduller? Ändra bara systemmeddelandet!

#### Varför systemmeddelanden är så kraftfulla

Här är det fascinerande: AI-modeller har tränats på otaliga konversationer där människor antar olika roller och expertisnivåer. När du ger AI en specifik roll är det som att slå på en strömbrytare som aktiverar alla dessa inlärda mönster.

**Det är som metodskådespeleri för AI**: Säg till en skådespelare "du är en vis gammal professor" och se hur de automatiskt anpassar sin hållning, sitt ordförråd och sina manér. AI gör något anmärkningsvärt liknande med språkets mönster.

#### Skapa effektiva systemmeddelanden: Konsten och vetenskapen

**Anatomin av ett bra systemmeddelande:**
1. **Roll/Identitet**: Vem är AI?
2. **Expertis**: Vad kan den?
3. **Kommunikationsstil**: Hur pratar den?
4. **Specifika instruktioner**: Vad ska den fokusera på?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Exempel på systemmeddelanden med kontext

Låt oss se hur olika systemmeddelanden skapar helt olika AI-personligheter:

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

#### Se systemmeddelanden i praktiken

Låt oss testa samma fråga med olika systemmeddelanden för att se de dramatiska skillnaderna:

**Fråga**: "Hur hanterar jag användarautentisering i min webbapp?"

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

#### Avancerade tekniker för systemmeddelanden

**1. Kontextinställning**: Ge AI bakgrundsinformation
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Utdataformat**: Berätta för AI hur den ska strukturera svar
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

**3. Begränsningsinställning**: Definiera vad AI inte ska göra
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Varför detta är viktigt för din chattassistent

Att förstå systemmeddelanden ger dig otrolig kraft att skapa specialiserade AI-assistenter:
- **Kundtjänstbot**: Hjälpsam, tålmodig, policy-medveten
- **Lärare**: Uppmuntrande, steg-för-steg, kontrollerar förståelse
- **Kreativ partner**: Fantasifull, bygger på idéer, frågar "tänk om?"
- **Teknisk expert**: Exakt, detaljerad, säkerhetsmedveten

**Den viktiga insikten**: Du anropar inte bara en AI-API – du skapar en skräddarsydd AI-personlighet som passar ditt specifika användningsområde. Det är detta som gör moderna AI-applikationer skräddarsydda och användbara istället för generiska.

## Bygga webb-API med FastAPI: Din högpresterande AI-kommunikationshub

Nu ska vi bygga backend som kopplar din frontend till AI-tjänster. Vi använder FastAPI, ett modernt Python-ramverk som är utmärkt för att bygga API:er för AI-applikationer.

FastAPI erbjuder flera fördelar för den här typen av projekt: inbyggt stöd för asynkrona anrop för att hantera samtidiga förfrågningar, automatisk generering av API-dokumentation och utmärkt prestanda. Din FastAPI-server fungerar som en mellanhand som tar emot förfrågningar från frontend, kommunicerar med AI-tjänster och returnerar formaterade svar.

### Varför FastAPI för AI-applikationer?

Du kanske undrar: "Kan jag inte bara anropa AI direkt från min frontend-JavaScript?" eller "Varför FastAPI istället för Flask eller Django?" Bra frågor! 
**Här är varför FastAPI är perfekt för det vi bygger:**
- **Async som standard**: Kan hantera flera AI-förfrågningar samtidigt utan att fastna
- **Automatisk dokumentation**: Besök `/docs` och få en snygg, interaktiv API-dokumentationssida gratis
- **Inbyggd validering**: Fångar fel innan de orsakar problem
- **Blixtsnabb**: En av de snabbaste Python-ramverken som finns
- **Modern Python**: Använder alla de senaste och bästa Python-funktionerna

**Och här är varför vi behöver en backend överhuvudtaget:**

**Säkerhet**: Din AI API-nyckel är som ett lösenord – om du lägger den i frontend JavaScript kan vem som helst som ser din webbplats källkod stjäla den och använda dina AI-krediter. Backend håller känsliga uppgifter säkra.

**Begränsning & kontroll**: Backend låter dig kontrollera hur ofta användare kan göra förfrågningar, implementera användarautentisering och lägga till loggning för att spåra användning.

**Databehandling**: Du kanske vill spara konversationer, filtrera olämpligt innehåll eller kombinera flera AI-tjänster. Backend är där denna logik finns.

**Arkitekturen liknar en klient-server-modell:**
- **Frontend**: Användargränssnittslager för interaktion
- **Backend API**: Lager för förfrågningshantering och routing
- **AI-tjänst**: Extern beräkning och svarsgenerering
- **Miljövariabler**: Säker konfiguration och lagring av uppgifter

### Förstå förfrågnings- och svarflödet

Låt oss spåra vad som händer när en användare skickar ett meddelande:

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

**Förstå varje steg:**
1. **Användarinteraktion**: Personen skriver i chattgränssnittet
2. **Frontend-behandling**: JavaScript fångar inmatningen och formaterar den som JSON
3. **API-validering**: FastAPI validerar automatiskt förfrågan med hjälp av Pydantic-modeller
4. **AI-integration**: Backend lägger till kontext (systemprompt) och anropar AI-tjänsten
5. **Svarshantering**: API tar emot AI-svaret och kan modifiera det vid behov
6. **Frontend-visning**: JavaScript visar svaret i chattgränssnittet

### Förstå API-arkitektur

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

### Skapa FastAPI-applikationen

Låt oss bygga vårt API steg för steg. Skapa en fil som heter `api.py` med följande FastAPI-kod:

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

**Förstå FastAPI-implementeringen:**
- **Importerar** FastAPI för modern webbapplikationsfunktionalitet och Pydantic för datavalidering
- **Skapar** automatisk API-dokumentation (tillgänglig på `/docs` när servern körs)
- **Aktiverar** CORS-middleware för att tillåta frontend-förfrågningar från olika ursprung
- **Definierar** Pydantic-modeller för automatisk validering och dokumentation av förfrågningar/svar
- **Använder** asynkrona endpoints för bättre prestanda med samtidiga förfrågningar
- **Implementerar** korrekta HTTP-statuskoder och felhantering med HTTPException
- **Inkluderar** strukturerad loggning för övervakning och felsökning
- **Tillhandahåller** en hälsokontroll-endpoint för att övervaka tjänstens status

**Viktiga fördelar med FastAPI jämfört med traditionella ramverk:**
- **Automatisk validering**: Pydantic-modeller säkerställer dataintegritet innan bearbetning
- **Interaktiv dokumentation**: Besök `/docs` för automatiskt genererad, testbar API-dokumentation
- **Typ-säkerhet**: Python-typanvisningar förhindrar runtime-fel och förbättrar kodkvaliteten
- **Async-stöd**: Hanterar flera AI-förfrågningar samtidigt utan att blockera
- **Prestanda**: Betydligt snabbare förfrågningshantering för realtidsapplikationer

### Förstå CORS: Webbens säkerhetsvakt

CORS (Cross-Origin Resource Sharing) är som en säkerhetsvakt vid en byggnad som kontrollerar om besökare får komma in. Låt oss förstå varför detta är viktigt och hur det påverkar din applikation.

#### Vad är CORS och varför finns det?

**Problemet**: Föreställ dig om vilken webbplats som helst kunde göra förfrågningar till din banks webbplats på dina vägnar utan din tillåtelse. Det skulle vara en säkerhetsmardröm! Webbläsare förhindrar detta som standard genom "Same-Origin Policy."

**Same-Origin Policy**: Webbläsare tillåter endast webbsidor att göra förfrågningar till samma domän, port och protokoll som de laddades från.

**Verklig analogi**: Det är som säkerhet i en lägenhetsbyggnad – endast boende (samma ursprung) kan komma in i byggnaden som standard. Om du vill låta en vän (annat ursprung) besöka måste du uttryckligen tala om för säkerheten att det är okej.

#### CORS i din utvecklingsmiljö

Under utveckling körs din frontend och backend på olika portar:
- Frontend: `http://localhost:3000` (eller file:// om du öppnar HTML direkt)
- Backend: `http://localhost:5000`

Dessa anses vara "olika ursprung" även om de är på samma dator!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Vad CORS-konfiguration gör i praktiken:**
- **Lägger till** speciella HTTP-headers till API-svar som talar om för webbläsare "denna cross-origin-förfrågan är tillåten"
- **Hanterar** "preflight"-förfrågningar (webbläsare kontrollerar ibland behörigheter innan de skickar den faktiska förfrågan)
- **Förhindrar** det fruktade "blocked by CORS policy"-felet i din webbläsarkonsol

#### CORS-säkerhet: Utveckling vs produktion

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

**Varför detta är viktigt**: Under utveckling är `CORS(app)` som att lämna din ytterdörr olåst – bekvämt men inte säkert. I produktion vill du specificera exakt vilka webbplatser som kan prata med ditt API.

#### Vanliga CORS-scenarier och lösningar

| Scenario | Problem | Lösning |
|----------|---------|---------|
| **Lokal utveckling** | Frontend kan inte nå backend | Lägg till CORSMiddleware till FastAPI |
| **GitHub Pages + Heroku** | Utrullad frontend kan inte nå API | Lägg till din GitHub Pages URL till CORS-ursprung |
| **Egen domän** | CORS-fel i produktion | Uppdatera CORS-ursprung för att matcha din domän |
| **Mobilapp** | Appen kan inte nå webb-API | Lägg till din apps domän eller använd `*` försiktigt |

**Tips**: Du kan kontrollera CORS-headers i din webbläsares utvecklarverktyg under fliken Nätverk. Leta efter headers som `Access-Control-Allow-Origin` i svaret.

### Felhantering och validering

Observera hur vårt API inkluderar korrekt felhantering:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Viktiga valideringsprinciper:**
- **Kontrollerar** obligatoriska fält innan förfrågningar bearbetas
- **Returnerar** meningsfulla felmeddelanden i JSON-format
- **Använder** lämpliga HTTP-statuskoder (400 för dåliga förfrågningar)
- **Ger** tydlig feedback för att hjälpa frontend-utvecklare att felsöka problem

## Konfigurera och köra din backend

Nu när vi har vår AI-integration och FastAPI-server redo, låt oss få allt att fungera. Installationen innebär att installera Python-beroenden, konfigurera miljövariabler och starta din utvecklingsserver.

### Python-miljöinställningar

Låt oss konfigurera din Python-utvecklingsmiljö. Virtuella miljöer är som Manhattanprojektets avgränsade tillvägagångssätt – varje projekt får sitt eget isolerade utrymme med specifika verktyg och beroenden, vilket förhindrar konflikter mellan olika projekt.

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

**Vad vi just gjorde:**
- **Skapade** vår egen lilla Python-bubbla där vi kan installera paket utan att påverka något annat
- **Aktiverade** den så att vår terminal vet att använda denna specifika miljö
- **Installerade** det viktigaste: OpenAI för AI-magi, FastAPI för vårt webb-API, Uvicorn för att faktiskt köra det, och python-dotenv för säker hantering av hemligheter

**Viktiga beroenden förklarade:**
- **FastAPI**: Modernt, snabbt webb-ramverk med automatisk API-dokumentation
- **Uvicorn**: Blixtsnabb ASGI-server som kör FastAPI-applikationer
- **OpenAI**: Officiellt bibliotek för GitHub-modeller och OpenAI API-integration
- **python-dotenv**: Säker laddning av miljövariabler från .env-filer

### Miljökonfiguration: Håll hemligheter säkra

Innan vi startar vårt API måste vi prata om en av de viktigaste lärdomarna inom webbutveckling: hur man håller sina hemligheter verkligen hemliga. Miljövariabler är som ett säkert valv som bara din applikation kan komma åt.

#### Vad är miljövariabler?

**Tänk på miljövariabler som en säkerhetsbox** – du lägger dina värdefulla saker där, och bara du (och din app) har nyckeln för att få ut dem. Istället för att skriva känslig information direkt i din kod (där bokstavligen vem som helst kan se den), lagrar du den säkert i miljön.

**Här är skillnaden:**
- **Fel sätt**: Skriva ditt lösenord på en post-it-lapp och sätta det på din skärm
- **Rätt sätt**: Hålla ditt lösenord i en säker lösenordshanterare som bara du kan komma åt

#### Varför miljövariabler är viktiga

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

**Vad som händer när du hårdkodar hemligheter:**
1. **Exponering i versionskontroll**: Alla med tillgång till ditt Git-repository ser din API-nyckel
2. **Offentliga repositories**: Om du pushar till GitHub är din nyckel synlig för hela internet
3. **Delning med teamet**: Andra utvecklare som arbetar med ditt projekt får tillgång till din personliga API-nyckel
4. **Säkerhetsbrott**: Om någon stjäl din API-nyckel kan de använda dina AI-krediter

#### Skapa din miljöfil

Skapa en `.env`-fil i din backend-katalog. Denna fil lagrar dina hemligheter lokalt:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Förstå .env-filen:**
- **En hemlighet per rad** i formatet `KEY=value`
- **Inga mellanslag** runt likhetstecknet
- **Inga citattecken** behövs runt värden (vanligtvis)
- **Kommentarer** börjar med `#`

#### Skapa din GitHub Personal Access Token

Din GitHub-token är som ett speciellt lösenord som ger din applikation tillstånd att använda GitHubs AI-tjänster:

**Steg-för-steg för att skapa token:**
1. **Gå till GitHub-inställningar** → Developer settings → Personal access tokens → Tokens (classic)
2. **Klicka på "Generate new token (classic)"**
3. **Ställ in utgångsdatum** (30 dagar för testning, längre för produktion)
4. **Välj scopes**: Kryssa i "repo" och andra behörigheter du behöver
5. **Generera token** och kopiera den direkt (du kan inte se den igen!)
6. **Klistra in i din .env-fil**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Ladda miljövariabler i Python

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

**Vad denna kod gör:**
- **Laddar** din .env-fil och gör variabler tillgängliga för Python
- **Kontrollerar** om den nödvändiga token finns (bra felhantering!)
- **Ger** ett tydligt fel om token saknas
- **Använder** token säkert utan att exponera den i koden

#### Git-säkerhet: .gitignore-filen

Din `.gitignore`-fil talar om för Git vilka filer som aldrig ska spåras eller laddas upp:

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

**Varför detta är avgörande**: När du lägger till `.env` i `.gitignore` kommer Git att ignorera din miljöfil, vilket förhindrar att du av misstag laddar upp dina hemligheter till GitHub.

#### Olika miljöer, olika hemligheter

Professionella applikationer använder olika API-nycklar för olika miljöer:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Varför detta är viktigt**: Du vill inte att dina experiment under utveckling ska påverka din produktions-AI-användningskvot, och du vill ha olika säkerhetsnivåer för olika miljöer.

### Starta din utvecklingsserver: Ge liv åt din FastAPI

Nu kommer det spännande ögonblicket – att starta din FastAPI-utvecklingsserver och se din AI-integration komma till liv! FastAPI använder Uvicorn, en blixtsnabb ASGI-server som är specifikt designad för asynkrona Python-applikationer.

#### Förstå FastAPI-serverns startprocess

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

När du kör detta kommando händer följande bakom kulisserna:

**1. Python laddar din FastAPI-applikation**:
- Importerar alla nödvändiga bibliotek (FastAPI, Pydantic, OpenAI, etc.)
- Laddar miljövariabler från din `.env`-fil
- Skapar FastAPI-applikationsinstansen med automatisk dokumentation

**2. Uvicorn konfigurerar ASGI-servern**:
- Binder till port 5000 med asynkron förfrågningshantering
- Ställer in förfrågningsrouting med automatisk validering
- Aktiverar hot reload för utveckling (startar om vid filändringar)
- Genererar interaktiv API-dokumentation

**3. Servern börjar lyssna**:
- Din terminal visar: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Servern kan hantera flera samtidiga AI-förfrågningar
- Ditt API är redo med automatisk dokumentation på `http://localhost:5000/docs`

#### Vad du bör se när allt fungerar

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Förstå FastAPI-utdata:**
- **Kommer att övervaka ändringar**: Auto-reload aktiverad för utveckling
- **Uvicorn körs**: Högpresterande ASGI-server är aktiv
- **Startade omstartningsprocess**: Filövervakning för automatiska omstarter
- **Applikationsstart slutförd**: FastAPI-app initierad framgångsrikt
- **Interaktiv dokumentation tillgänglig**: Besök `/docs` för automatisk API-dokumentation

#### Testa din FastAPI: Flera kraftfulla metoder

FastAPI erbjuder flera bekväma sätt att testa ditt API, inklusive automatisk interaktiv dokumentation:

**Metod 1: Interaktiv API-dokumentation (Rekommenderas)**
1. Öppna din webbläsare och gå till `http://localhost:5000/docs`
2. Du kommer att se Swagger UI med alla dina endpoints dokumenterade
3. Klicka på `/hello` → "Try it out" → Ange ett testmeddelande → "Execute"
4. Se svaret direkt i webbläsaren med korrekt formatering

**Metod 2: Grundläggande webbläsartest**
1. Gå till `http://localhost:5000` för root-endpointen
2. Gå till `http://localhost:5000/health` för att kontrollera serverns hälsa
3. Detta bekräftar att din FastAPI-server fungerar korrekt

**Metod 2: Kommandoradstest (Avancerat)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Metod 3: Python-testskript**
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

#### Felsökning av vanliga startproblem

| Felmeddelande | Vad det betyder | Hur man åtgärdar |
|---------------|-----------------|------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI är inte installerat | Kör `pip install fastapi uvicorn` i din virtuella miljö |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-servern är inte installerad | Kör `pip install uvicorn` i din virtuella miljö |
| `KeyError: 'GITHUB_TOKEN'` | Miljövariabel saknas | Kontrollera din `.env`-fil och `load_dotenv()`-anrop |
| `Address already in use` | Port 5000 är upptagen | Avsluta andra processer som använder port 5000 eller ändra porten |
| `ValidationError` | Begärda data matchar inte Pydantic-modellen | Kontrollera att din begäran följer det förväntade schemat |
| `HTTPException 422` | Obehandlingsbar enhet | Validering av begäran misslyckades, kontrollera `/docs` för korrekt format |
| `OpenAI API error` | Autentisering av AI-tjänsten misslyckades | Kontrollera att din GitHub-token är korrekt och har rätt behörigheter |

#### Bästa praxis för utveckling

**Automatisk omladdning**: FastAPI med Uvicorn erbjuder automatisk omladdning när du sparar ändringar i dina Python-filer. Det innebär att du kan ändra din kod och testa direkt utan att behöva starta om manuellt.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Loggning för utveckling**: Lägg till loggning för att förstå vad som händer:

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

**Varför loggning hjälper**: Under utveckling kan du se exakt vilka begäranden som kommer in, vad AI svarar med och var fel uppstår. Detta gör felsökning mycket snabbare.

### Konfigurera för GitHub Codespaces: Enkel molnbaserad utveckling

GitHub Codespaces är som att ha en kraftfull utvecklingsdator i molnet som du kan komma åt från vilken webbläsare som helst. Om du arbetar i Codespaces finns det några extra steg för att göra din backend tillgänglig för din frontend.

#### Förstå nätverk i Codespaces

I en lokal utvecklingsmiljö körs allt på samma dator:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (eller file://)

I Codespaces körs din utvecklingsmiljö på GitHubs servrar, så "localhost" har en annan betydelse. GitHub skapar automatiskt offentliga URL:er för dina tjänster, men du måste konfigurera dem korrekt.

#### Steg-för-steg-konfiguration för Codespaces

**1. Starta din backend-server**:
```bash
cd backend
python api.py
```

Du kommer att se det välbekanta startmeddelandet från FastAPI/Uvicorn, men notera att det körs i Codespace-miljön.

**2. Konfigurera portens synlighet**:
- Leta efter fliken "Ports" i den nedre panelen i VS Code
- Hitta port 5000 i listan
- Högerklicka på port 5000
- Välj "Port Visibility" → "Public"

**Varför göra den offentlig?** Som standard är Codespace-portar privata (endast tillgängliga för dig). Genom att göra den offentlig kan din frontend (som körs i webbläsaren) kommunicera med din backend.

**3. Hämta din offentliga URL**:
Efter att ha gjort porten offentlig kommer du att se en URL som:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Uppdatera din frontend-konfiguration**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Förstå Codespace-URL:er

Codespace-URL:er följer ett förutsägbart mönster:
```
https://[codespace-name]-[port].app.github.dev
```

**Så här fungerar det:**
- `codespace-name`: En unik identifierare för din Codespace (innehåller vanligtvis ditt användarnamn)
- `port`: Portnumret som din tjänst körs på (5000 för vår FastAPI-app)
- `app.github.dev`: GitHubs domän för Codespace-applikationer

#### Testa din Codespace-konfiguration

**1. Testa backend direkt**:
Öppna din offentliga URL i en ny webbläsarflik. Du bör se:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testa med webbläsarens utvecklingsverktyg**:
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

#### Codespaces vs lokal utveckling

| Aspekt | Lokal utveckling | GitHub Codespaces |
|--------|------------------|-------------------|
| **Installationstid** | Längre (installera Python, beroenden) | Omedelbar (förkonfigurerad miljö) |
| **URL-åtkomst** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Portkonfiguration** | Automatisk | Manuell (gör portar offentliga) |
| **Filpersistens** | Lokal dator | GitHub-repository |
| **Samarbete** | Svårt att dela miljö | Enkelt att dela Codespace-länk |
| **Internetberoende** | Endast för AI API-anrop | Krävs för allt |

#### Tips för utveckling i Codespaces

**Miljövariabler i Codespaces**:
Din `.env`-fil fungerar på samma sätt i Codespaces, men du kan också ställa in miljövariabler direkt i Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Porthantering**:
- Codespaces upptäcker automatiskt när din applikation börjar lyssna på en port
- Du kan vidarebefordra flera portar samtidigt (användbart om du lägger till en databas senare)
- Portar förblir tillgängliga så länge din Codespace körs

**Utvecklingsflöde**:
1. Gör kodändringar i VS Code
2. FastAPI laddar om automatiskt (tack vare Uvicorns omladdningsläge)
3. Testa ändringar direkt via den offentliga URL:en
4. Commit och pusha när du är redo

> 💡 **Proffstips**: Bokmärk din Codespace-backend-URL under utvecklingen. Eftersom Codespace-namnen är stabila kommer URL:en inte att ändras så länge du använder samma Codespace.

## Skapa frontend-chatgränssnittet: Där människor möter AI

Nu ska vi bygga användargränssnittet – den del som avgör hur människor interagerar med din AI-assistent. Precis som designen av den ursprungliga iPhone-gränssnittet fokuserar vi på att göra komplex teknologi intuitiv och naturlig att använda.

### Förstå modern frontend-arkitektur

Vårt chatgränssnitt kommer att vara vad vi kallar en "Single Page Application" eller SPA. Istället för den gammaldags metoden där varje klick laddar en ny sida, uppdateras vår app smidigt och direkt:

**Gamla webbplatser**: Som att läsa en fysisk bok – du bläddrar till helt nya sidor
**Vår chat-app**: Som att använda din telefon – allt flödar och uppdateras sömlöst

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

### De tre pelarna inom frontend-utveckling

Varje frontend-applikation – från enkla webbplatser till komplexa appar som Discord eller Slack – bygger på tre kärnteknologier. Tänk på dem som grunden för allt du ser och interagerar med på webben:

**HTML (Struktur)**: Detta är din grund
- Bestämmer vilka element som finns (knappar, textfält, behållare)
- Ger innehållet mening (detta är en rubrik, detta är ett formulär, etc.)
- Skapar den grundläggande strukturen som allt annat bygger på

**CSS (Presentation)**: Detta är din inredningsdesigner
- Gör allt vackert (färger, typsnitt, layout)
- Hanterar olika skärmstorlekar (telefon vs laptop vs surfplatta)
- Skapar mjuka animationer och visuell feedback

**JavaScript (Beteende)**: Detta är din hjärna
- Reagerar på vad användare gör (klick, skrivande, scrollning)
- Kommunicerar med din backend och uppdaterar sidan
- Gör allt interaktivt och dynamiskt

**Tänk på det som arkitektonisk design:**
- **HTML**: Den strukturella ritningen (definierar utrymmen och relationer)
- **CSS**: Den estetiska och miljömässiga designen (visuell stil och användarupplevelse)
- **JavaScript**: De mekaniska systemen (funktionalitet och interaktivitet)

### Varför modern JavaScript-arkitektur är viktig

Vår chat-applikation kommer att använda moderna JavaScript-mönster som du ser i professionella applikationer. Att förstå dessa koncept hjälper dig att växa som utvecklare:

**Klassbaserad arkitektur**: Vi organiserar vår kod i klasser, vilket är som att skapa ritningar för objekt
**Async/Await**: Modernt sätt att hantera operationer som tar tid (som API-anrop)
**Händelsedriven programmering**: Vår app reagerar på användaråtgärder (klick, tangenttryckningar) istället för att köras i en loop
**DOM-manipulation**: Dynamiskt uppdatera webbsidans innehåll baserat på användarinteraktioner och API-svar

### Projektstruktur

Skapa en frontend-mapp med denna organiserade struktur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Förstå arkitekturen:**
- **Separera** ansvar mellan struktur (HTML), beteende (JavaScript) och presentation (CSS)
- **Bibehåll** en enkel filstruktur som är lätt att navigera och ändra
- **Följ** bästa praxis för webbutveckling när det gäller organisation och underhåll

### Bygga HTML-grunden: Semantisk struktur för tillgänglighet

Låt oss börja med HTML-strukturen. Modern webbutveckling betonar "semantisk HTML" – att använda HTML-element som tydligt beskriver deras syfte, inte bara deras utseende. Detta gör din applikation tillgänglig för skärmläsare, sökmotorer och andra verktyg.

**Varför semantisk HTML är viktig**: Tänk dig att beskriva din chat-app för någon via telefon. Du skulle säga "det finns en rubrik med titeln, ett huvudområde där konversationer visas och ett formulär längst ner för att skriva meddelanden." Semantisk HTML använder element som matchar denna naturliga beskrivning.

Skapa `index.html` med denna genomtänkta markup:

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

**Förstå varje HTML-element och dess syfte:**

#### Dokumentstruktur
- **`<!DOCTYPE html>`**: Berättar för webbläsaren att detta är modern HTML5
- **`<html lang="en">`**: Anger sidans språk för skärmläsare och översättningsverktyg
- **`<meta charset="UTF-8">`**: Säkerställer korrekt teckenkodning för internationell text
- **`<meta name="viewport"...>`**: Gör sidan mobilanpassad genom att kontrollera zoom och skala

#### Semantiska element
- **`<header>`**: Identifierar tydligt den övre sektionen med titel och beskrivning
- **`<main>`**: Anger det primära innehållsområdet (där konversationer sker)
- **`<form>`**: Semantiskt korrekt för användarinmatning, möjliggör korrekt tangentbordsnavigering

#### Tillgänglighetsfunktioner
- **`role="log"`**: Berättar för skärmläsare att detta område innehåller en kronologisk logg av meddelanden
- **`aria-live="polite"`**: Meddelar skärmläsare om nya meddelanden utan att avbryta
- **`aria-label`**: Ger beskrivande etiketter för formulärkontroller
- **`required`**: Webbläsaren validerar att användaren skriver ett meddelande innan det skickas

#### CSS- och JavaScript-integration
- **`class`-attribut**: Ger styling-krokar för CSS (t.ex. `chat-container`, `input-group`)
- **`id`-attribut**: Gör att JavaScript kan hitta och manipulera specifika element
- **Scriptplacering**: JavaScript-filen laddas sist så att HTML laddas först

**Varför denna struktur fungerar:**
- **Logisk flöde**: Header → Huvudinnehåll → Inmatningsformulär matchar naturlig läsordning
- **Tangentbordsanpassad**: Användare kan tabba genom alla interaktiva element
- **Skärmläsarvänlig**: Tydliga landmärken och beskrivningar för synskadade användare
- **Mobilanpassad**: Viewport-meta-taggen möjliggör responsiv design
- **Progressiv förbättring**: Fungerar även om CSS eller JavaScript inte laddas

### Lägga till interaktiv JavaScript: Modern logik för webbapplikationer

Nu ska vi bygga JavaScript som ger vårt chatgränssnitt liv. Vi kommer att använda moderna JavaScript-mönster som du stöter på i professionell webbutveckling, inklusive ES6-klasser, async/await och händelsedriven programmering.

#### Förstå modern JavaScript-arkitektur

Istället för att skriva procedurkod (en serie funktioner som körs i ordning) kommer vi att skapa en **klassbaserad arkitektur**. Tänk på en klass som en ritning för att skapa objekt – som hur en arkitekts ritning kan användas för att bygga flera hus.

**Varför använda klasser för webbapplikationer?**
- **Organisation**: All relaterad funktionalitet grupperas tillsammans
- **Återanvändbarhet**: Du kan skapa flera chattinstanser på samma sida
- **Underhållbarhet**: Lättare att felsöka och ändra specifika funktioner
- **Professionell standard**: Detta mönster används i ramverk som React, Vue och Angular

Skapa `app.js` med detta moderna, välstrukturerade JavaScript:

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

#### Förstå varje JavaScript-koncept

**ES6-klassstruktur**:
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

**Async/Await-mönster**:
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

**Händelsedriven programmering**:
Istället för att ständigt kontrollera om något har hänt, "lyssnar" vi på händelser:
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

#### Säkerhet och bästa praxis

**XSS-förebyggande**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Varför detta är viktigt**: Om en användare skriver `<script>alert('hack')</script>` säkerställer denna funktion att det visas som text istället för att exekveras som kod.

**Felhantering**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Användarupplevelseöverväganden**:
- **Optimistisk UI**: Lägg till användarmeddelande direkt, vänta inte på serverns svar
- **Laddningstillstånd**: Inaktivera knappar och visa "Skickar..." medan du väntar
- **Automatisk scrollning**: Håll de senaste meddelandena synliga
- **Inmatningsvalidering**: Skicka inte tomma meddelanden
- **Tangentbordsgenvägar**: Enter-tangenten skickar meddelanden (som riktiga chattappar)

#### Förstå applikationsflödet

1. **Sidan laddas** → `DOMContentLoaded`-händelsen triggas → `new ChatApp()` skapas
2. **Konstruktorn körs** → Hämtar DOM-elementreferenser → Ställer in händelselyssnare
3. **Användaren skriver meddelande** → Trycker på Enter eller klickar på Skicka → `handleSubmit` körs
4. **handleSubmit** → Validerar inmatning → Visar laddningstillstånd → Anropar API
5. **API svarar** → Lägger till AI-meddelande i chatten → Återaktiverar gränssnittet
6. **Redo för nästa meddelande** → Användaren kan fortsätta chatta
Den här arkitekturen är skalbar – du kan enkelt lägga till funktioner som meddelanderedigering, filuppladdningar eller flera konversationstrådar utan att behöva skriva om kärnstrukturen.

### Styling av din chattgränssnitt

Nu ska vi skapa ett modernt och visuellt tilltalande chattgränssnitt med CSS. Bra design gör att din applikation känns professionell och förbättrar den övergripande användarupplevelsen. Vi kommer att använda moderna CSS-funktioner som Flexbox, CSS Grid och anpassade egenskaper för en responsiv och tillgänglig design.

Skapa `styles.css` med dessa omfattande stilar:

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

**Förstå CSS-arkitekturen:**
- **Använder** CSS-anpassade egenskaper (variabler) för konsekvent tematisering och enkel underhåll
- **Implementerar** Flexbox-layout för responsiv design och korrekt justering
- **Inkluderar** mjuka animationer för meddelandevisning utan att vara distraherande
- **Ger** visuell skillnad mellan användarmeddelanden, AI-svar och felstatus
- **Stödjer** responsiv design som fungerar både på stationära och mobila enheter
- **Tar hänsyn till** tillgänglighet med minskade rörelsepreferenser och korrekta kontrastförhållanden
- **Erbjuder** stöd för mörkt läge baserat på användarens systeminställningar

### Konfigurera din backend-URL

Sista steget är att uppdatera `BASE_URL` i din JavaScript för att matcha din backend-server:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Bestäm din backend-URL:**
- **Lokal utveckling**: Använd `http://localhost:5000` om du kör både frontend och backend lokalt
- **Codespaces**: Hitta din backend-URL i Ports-fliken efter att ha gjort port 5000 offentlig
- **Produktion**: Ersätt med din faktiska domän när du distribuerar till en hostingtjänst

> 💡 **Testtips**: Du kan testa din backend direkt genom att besöka root-URL:en i din webbläsare. Du bör se välkomstmeddelandet från din FastAPI-server.



## Testning och distribution

Nu när du har byggt både frontend- och backend-komponenterna, låt oss testa att allt fungerar tillsammans och utforska distributionsalternativ för att dela din chattassistent med andra.

### Lokal testningsarbetsflöde

Följ dessa steg för att testa din kompletta applikation:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Steg-för-steg testningsprocess:**

1. **Starta din backend-server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Verifiera att API:t fungerar**:
   - Öppna `http://localhost:5000` i din webbläsare
   - Du bör se välkomstmeddelandet från din FastAPI-server

3. **Öppna din frontend**:
   - Navigera till din frontend-mapp
   - Öppna `index.html` i din webbläsare
   - Eller använd VS Codes Live Server-tillägg för en bättre utvecklingsupplevelse

4. **Testa chattfunktionen**:
   - Skriv ett meddelande i inmatningsfältet
   - Klicka på "Skicka" eller tryck på Enter
   - Verifiera att AI:n svarar korrekt
   - Kontrollera webbläsarens konsol för eventuella JavaScript-fel

### Felsökning av vanliga problem

| Problem | Symptom | Lösning |
|---------|----------|----------|
| **CORS-fel** | Frontend kan inte nå backend | Se till att FastAPI CORSMiddleware är korrekt konfigurerad |
| **API-nyckelfel** | 401 Obehöriga svar | Kontrollera din `GITHUB_TOKEN` miljövariabel |
| **Anslutning nekad** | Nätverksfel i frontend | Verifiera backend-URL och att Flask-servern körs |
| **Inget AI-svar** | Tomma eller felaktiga svar | Kontrollera backend-loggar för API-kvot eller autentiseringsproblem |

**Vanliga felsökningssteg:**
- **Kontrollera** webbläsarens utvecklingsverktygskonsol för JavaScript-fel
- **Verifiera** att nätverksfliken visar lyckade API-förfrågningar och svar
- **Granska** backend-terminalens output för Python-fel eller API-problem
- **Bekräfta** att miljövariabler är korrekt laddade och tillgängliga

## GitHub Copilot Agent Challenge 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra chattassistenten genom att lägga till konversationshistorik och meddelandelagring. Den här utmaningen hjälper dig att förstå hur man hanterar tillstånd i chattapplikationer och implementerar datalagring för bättre användarupplevelse.

**Uppgift:** Modifiera chattapplikationen för att inkludera konversationshistorik som kvarstår mellan sessioner. Lägg till funktionalitet för att spara chattmeddelanden till lokal lagring, visa konversationshistorik när sidan laddas och inkludera en "Rensa historik"-knapp. Implementera också skrivindikatorer och meddelandetidsstämplar för att göra chattupplevelsen mer realistisk.

Läs mer om [agentläge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## Uppgift: Bygg din personliga AI-assistent

Nu ska du skapa din egen AI-assistentimplementation. Istället för att bara replikera handledningskoden är detta en möjlighet att tillämpa koncepten samtidigt som du bygger något som speglar dina egna intressen och användningsområden.

### Projektkrav

Låt oss sätta upp ditt projekt med en ren och organiserad struktur:

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

### Kärnimplementeringsuppgifter

**Backend-utveckling:**
- **Använd** vår FastAPI-kod och gör den till din egen
- **Skapa** en unik AI-personlighet – kanske en hjälpsam matlagningsassistent, en kreativ skrivpartner eller en studiekamrat?
- **Lägg till** robust felhantering så att din app inte kraschar när något går fel
- **Skriv** tydlig dokumentation för alla som vill förstå hur ditt API fungerar

**Frontend-utveckling:**
- **Bygg** ett chattgränssnitt som känns intuitivt och välkomnande
- **Skriv** ren, modern JavaScript som du skulle vara stolt över att visa andra utvecklare
- **Designa** anpassad styling som reflekterar din AI:s personlighet – rolig och färgglad? Ren och minimalistisk? Helt upp till dig!
- **Se till** att det fungerar bra både på telefoner och datorer

**Personlighetskrav:**
- **Välj** ett unikt namn och personlighet för din AI-assistent – kanske något som reflekterar dina intressen eller de problem du vill lösa
- **Anpassa** den visuella designen för att matcha din assistents stil
- **Skriv** ett övertygande välkomstmeddelande som får folk att vilja börja chatta
- **Testa** din assistent med olika typer av frågor för att se hur den svarar

### Förbättringsidéer (valfritt)

Vill du ta ditt projekt till nästa nivå? Här är några roliga idéer att utforska:

| Funktion | Beskrivning | Färdigheter du övar på |
|---------|-------------|------------------------|
| **Meddelandehistorik** | Kom ihåg konversationer även efter siduppdatering | Arbeta med localStorage, JSON-hantering |
| **Skrivindikatorer** | Visa "AI skriver..." medan du väntar på svar | CSS-animationer, asynkron programmering |
| **Meddelandetidsstämplar** | Visa när varje meddelande skickades | Datum/tid-formattering, UX-design |
| **Exportera chatt** | Låt användare ladda ner sin konversation | Filhantering, dataexport |
| **Temaväxling** | Växla mellan ljus/mörkt läge | CSS-variabler, användarpreferenser |
| **Röstinmatning** | Lägg till tal-till-text-funktionalitet | Web APIs, tillgänglighet |

### Testning och dokumentation

**Kvalitetssäkring:**
- **Testa** din applikation med olika inmatningstyper och kantfall
- **Verifiera** att responsiv design fungerar på olika skärmstorlekar
- **Kontrollera** tillgänglighet med tangentbordsnavigering och skärmläsare
- **Validera** HTML och CSS för standardöverensstämmelse

**Dokumentationskrav:**
- **Skriv** en README.md som förklarar ditt projekt och hur man kör det
- **Inkludera** skärmdumpar av ditt chattgränssnitt i aktion
- **Dokumentera** eventuella unika funktioner eller anpassningar du har lagt till
- **Ge** tydliga installationsinstruktioner för andra utvecklare

### Inlämningsriktlinjer

**Projektleveranser:**
1. Komplett projektmapp med all källkod
2. README.md med projektbeskrivning och installationsinstruktioner
3. Skärmdumpar som visar din chattassistent i aktion
4. Kort reflektion över vad du har lärt dig och vilka utmaningar du stött på

**Utvärderingskriterier:**
- **Funktionalitet**: Fungerar chattassistenten som förväntat?
- **Kodkvalitet**: Är koden välorganiserad, kommenterad och underhållbar?
- **Design**: Är gränssnittet visuellt tilltalande och användarvänligt?
- **Kreativitet**: Hur unik och personlig är din implementation?
- **Dokumentation**: Är installationsinstruktionerna tydliga och kompletta?

> 💡 **Framgångstips**: Börja med de grundläggande kraven först, lägg sedan till förbättringar när allt fungerar. Fokusera på att skapa en polerad kärnupplevelse innan du lägger till avancerade funktioner.

## Lösning

[Lösning](./solution/README.md)

## Bonusutmaningar

Redo att ta din AI-assistent till nästa nivå? Prova dessa avancerade utmaningar som kommer att fördjupa din förståelse för AI-integration och webbutveckling.

### Personlighetsanpassning

Den verkliga magin sker när du ger din AI-assistent en unik personlighet. Experimentera med olika systemprompter för att skapa specialiserade assistenter:

**Exempel på professionell assistent:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Exempel på kreativ skrivhjälp:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Exempel på teknisk mentor:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Förbättringar av frontend

Förvandla ditt chattgränssnitt med dessa visuella och funktionella förbättringar:

**Avancerade CSS-funktioner:**
- **Implementera** mjuka meddelandeanimationer och övergångar
- **Lägg till** anpassade chattbubbeldesigner med CSS-former och gradienter
- **Skapa** en skrivindikatoranimation för när AI:n "tänker"
- **Designa** emoji-reaktioner eller meddelandebetygssystem

**JavaScript-förbättringar:**
- **Lägg till** tangentbordsgenvägar (Ctrl+Enter för att skicka, Escape för att rensa inmatning)
- **Implementera** meddelandesökning och filtreringsfunktionalitet
- **Skapa** konversationsexportfunktion (ladda ner som text eller JSON)
- **Lägg till** autosparning till localStorage för att förhindra meddelandeförlust

### Avancerad AI-integration

**Flera AI-personligheter:**
- **Skapa** en dropdown för att växla mellan olika AI-personligheter
- **Spara** användarens föredragna personlighet i localStorage
- **Implementera** kontextväxling som bibehåller konversationsflödet

**Smarta svarsfunktioner:**
- **Lägg till** konversationskontextmedvetenhet (AI kommer ihåg tidigare meddelanden)
- **Implementera** smarta förslag baserade på konversationens ämne
- **Skapa** snabbsvarsknappar för vanliga frågor

> 🎯 **Lärandemål**: Dessa bonusutmaningar hjälper dig att förstå avancerade webbutvecklingsmönster och AI-integrationstekniker som används i produktionsapplikationer.

## Sammanfattning och nästa steg

Grattis! Du har framgångsrikt byggt en komplett AI-driven chattassistent från grunden. Det här projektet har gett dig praktisk erfarenhet av moderna webbutvecklingsteknologier och AI-integration – färdigheter som är alltmer värdefulla i dagens tekniklandskap.

### Vad du har åstadkommit

Under denna lektion har du bemästrat flera viktiga teknologier och koncept:

**Backend-utveckling:**
- **Integrerat** med GitHub Models API för AI-funktionalitet
- **Byggt** ett RESTful API med Flask med korrekt felhantering
- **Implementerat** säker autentisering med miljövariabler
- **Konfigurerat** CORS för cross-origin-förfrågningar mellan frontend och backend

**Frontend-utveckling:**
- **Skapat** ett responsivt chattgränssnitt med semantisk HTML
- **Implementerat** modern JavaScript med async/await och klassbaserad arkitektur
- **Designat** ett engagerande användargränssnitt med CSS Grid, Flexbox och animationer
- **Lagt till** tillgänglighetsfunktioner och principer för responsiv design

**Fullstack-integration:**
- **Kopplat** frontend och backend genom HTTP API-anrop
- **Hanterat** realtidsanvändarinteraktioner och asynkron dataflöde
- **Implementerat** felhantering och användarfeedback genom hela applikationen
- **Testat** hela applikationsarbetsflödet från användarinmatning till AI-svar

### Viktiga lärdomar

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

Det här projektet har introducerat dig till grunderna i att bygga AI-drivna applikationer, vilket representerar framtiden för webbutveckling. Du förstår nu hur man integrerar AI-funktioner i traditionella webapplikationer och skapar engagerande användarupplevelser som känns intelligenta och responsiva.

### Professionella tillämpningar

De färdigheter du har utvecklat i denna lektion är direkt tillämpliga på moderna mjukvaruutvecklingskarriärer:

- **Fullstack-webbutveckling** med moderna ramverk och API:er
- **AI-integration** i webapplikationer och mobilappar
- **API-design och utveckling** för mikrotjänstarkitekturer
- **Utveckling av användargränssnitt** med fokus på tillgänglighet och responsiv design
- **DevOps-praktiker** inklusive miljökonfiguration och distribution

### Fortsätt din AI-utvecklingsresa

**Nästa lärandesteg:**
- **Utforska** mer avancerade AI-modeller och API:er (GPT-4, Claude, Gemini)
- **Lär dig** om promptteknik för bättre AI-svar
- **Studera** konversationsdesign och chatbot-användarupplevelseprinciper
- **Undersök** AI-säkerhet, etik och ansvarsfull AI-utvecklingspraxis
- **Bygg** mer komplexa applikationer med konversationsminne och kontextmedvetenhet

**Avancerade projektidéer:**
- Fleranvändarchattrum med AI-moderering
- AI-drivna kundtjänstchatbots
- Utbildningsassistenter med personlig inlärning
- Kreativa skrivpartners med olika AI-personligheter
- Tekniska dokumentationsassistenter för utvecklare

## Kom igång med GitHub Codespaces

Vill du prova det här projektet i en molnutvecklingsmiljö? GitHub Codespaces erbjuder en komplett utvecklingsmiljö i din webbläsare, perfekt för att experimentera med AI-applikationer utan lokala installationskrav.

### Ställ in din utvecklingsmiljö

**Steg 1: Skapa från mall**
- **Navigera** till [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klicka** på "Use this template" i det övre högra hörnet (se till att du är inloggad på GitHub)

![Gränssnitt för att skapa från mall som visar den gröna knappen "Use this template"](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.sv.png)

**Steg 2: Starta Codespaces**
- **Öppna** ditt nyss skapade repository
- **Klicka** på den gröna "Code"-knappen och välj "Codespaces"
- **Välj** "Create codespace on main" för att starta din utvecklingsmiljö

![Gränssnitt för att skapa codespace med alternativ för att starta molnutvecklingsmiljö](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.sv.png)

**Steg 3: Miljökonfiguration**
När din Codespace laddas får du tillgång till:
- **Förinstallerad** Python, Node.js och alla nödvändiga utvecklingsverktyg
- **VS Code-gränssnitt** med tillägg för webbutveckling
- **Terminalåtkomst** för att köra backend- och frontend-servrar
- **Portvidarebefordran** för att testa dina applikationer

**Vad Codespaces erbjuder:**
- **Eliminerar** problem med lokal miljöinställning och konfiguration
- **Ger** en konsekvent utvecklingsmiljö på olika enheter
- **Inkluderar** förkonfigurerade verktyg och tillägg för webbutveckling
- **Erbjuder** smidig integration med GitHub för versionskontroll och samarbete

> 🚀 **Proffstips**: Codespaces är perfekt för att lära sig och prototypa AI-applikationer eftersom det automatiskt hanterar all komplex miljöinställning, så att du kan fokusera på att bygga och lära dig istället för att lösa konfigurationsproblem.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.