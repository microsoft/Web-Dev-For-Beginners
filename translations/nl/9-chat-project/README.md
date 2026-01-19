<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2025-11-04T01:55:49+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "nl"
}
-->
# Bouw een Chat Assistent met AI

Herinner je je in Star Trek hoe de bemanning casual met de boordcomputer praatte, complexe vragen stelde en doordachte antwoorden kreeg? Wat in de jaren '60 pure sciencefiction leek, kun je nu zelf bouwen met webtechnologieën die je al kent.

In deze les gaan we een AI-chatassistent maken met HTML, CSS, JavaScript en wat backend-integratie. Je zult ontdekken hoe de vaardigheden die je hebt geleerd, kunnen worden verbonden met krachtige AI-diensten die context begrijpen en zinvolle antwoorden genereren.

Denk aan AI als toegang tot een enorme bibliotheek die niet alleen informatie kan vinden, maar ook kan synthetiseren tot coherente antwoorden die zijn afgestemd op jouw specifieke vragen. In plaats van duizenden pagina's door te zoeken, krijg je directe, contextuele antwoorden.

De integratie gebeurt via bekende webtechnologieën die samenwerken. HTML creëert de chatinterface, CSS verzorgt het visuele ontwerp, JavaScript beheert gebruikersinteracties en een backend-API verbindt alles met AI-diensten. Het is vergelijkbaar met hoe verschillende secties van een orkest samenwerken om een symfonie te creëren.

We bouwen in feite een brug tussen natuurlijke menselijke communicatie en machineverwerking. Je leert zowel de technische implementatie van AI-dienstintegratie als de ontwerpprincipes die interacties intuïtief maken.

Aan het einde van deze les voelt AI-integratie minder als een mysterieus proces en meer als een andere API waarmee je kunt werken. Je zult de fundamentele patronen begrijpen die toepassingen zoals ChatGPT en Claude aandrijven, met behulp van dezelfde webontwikkelingsprincipes die je hebt geleerd.

## ⚡ Wat je in de komende 5 minuten kunt doen

**Snelle start voor drukke ontwikkelaars**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Get GitHub token]
    B --> C[Test AI playground]
    C --> D[Copy Python code]
    D --> E[See AI responses]
```

- **Minuut 1**: Bezoek [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) en maak een persoonlijke toegangstoken aan
- **Minuut 2**: Test AI-interacties direct in de playground-interface
- **Minuut 3**: Klik op het tabblad "Code" en kopieer de Python-code
- **Minuut 4**: Voer de code lokaal uit met je token: `GITHUB_TOKEN=your_token python test.py`
- **Minuut 5**: Bekijk hoe je eerste AI-reactie wordt gegenereerd vanuit je eigen code

**Snelle testcode**:
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

**Waarom dit belangrijk is**: In 5 minuten ervaar je de magie van programmatische AI-interactie. Dit vormt de fundamentele bouwsteen die elke AI-toepassing aandrijft die je gebruikt.

Zo ziet je voltooide project eruit:

![Chat-app interface die een gesprek toont tussen gebruiker en AI-assistent](../../../translated_images/nl/screenshot.0a1ee0d123df681b.webp)

## 🗺️ Jouw leertraject door AI-toepassingsontwikkeling

```mermaid
journey
    title From Web Development to AI Integration
    section Understanding AI Foundations
      Discover generative AI concepts: 4: You
      Explore GitHub Models platform: 6: You
      Master AI parameters and prompts: 8: You
    section Backend Integration
      Build Python API server: 5: You
      Implement AI function calls: 7: You
      Handle async operations: 8: You
    section Frontend Development
      Create modern chat interface: 6: You
      Master real-time interactions: 8: You
      Build responsive user experience: 9: You
    section Professional Application
      Deploy complete AI system: 7: You
      Optimize performance patterns: 8: You
      Create production-ready app: 9: You
```

**Jouw eindbestemming**: Aan het einde van deze les heb je een complete AI-aangedreven toepassing gebouwd met dezelfde technologieën en patronen die moderne AI-assistenten zoals ChatGPT, Claude en Google Bard aandrijven.

## AI begrijpen: van mysterie naar meesterschap

Voordat we in de code duiken, laten we begrijpen waar we mee werken. Als je eerder met API's hebt gewerkt, ken je het basispatroon: een verzoek sturen, een antwoord ontvangen.

AI-API's volgen een vergelijkbare structuur, maar in plaats van vooraf opgeslagen gegevens uit een database op te halen, genereren ze nieuwe antwoorden op basis van patronen die zijn geleerd uit enorme hoeveelheden tekst. Denk aan het verschil tussen een bibliotheekcatalogussysteem en een deskundige bibliothecaris die informatie uit meerdere bronnen kan synthetiseren.

### Wat is "Generatieve AI" eigenlijk?

Denk aan hoe de Steen van Rosetta geleerden in staat stelde Egyptische hiërogliefen te begrijpen door patronen te vinden tussen bekende en onbekende talen. AI-modellen werken op een vergelijkbare manier – ze vinden patronen in enorme hoeveelheden tekst om te begrijpen hoe taal werkt en gebruiken die patronen vervolgens om passende antwoorden te genereren op nieuwe vragen.

**Laat me dit uitleggen met een eenvoudige vergelijking:**
- **Traditionele database**: Zoals vragen om je geboorteakte – je krijgt elke keer exact hetzelfde document
- **Zoekmachine**: Zoals een bibliothecaris vragen om boeken over katten – ze laten je zien wat beschikbaar is
- **Generatieve AI**: Zoals een deskundige vriend vragen over katten – ze vertellen je interessante dingen in hun eigen woorden, afgestemd op wat je wilt weten

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Hoe leren AI-modellen (de eenvoudige versie)

AI-modellen leren door blootstelling aan enorme datasets met tekst uit boeken, artikelen en gesprekken. Door dit proces identificeren ze patronen in:
- Hoe gedachten worden gestructureerd in geschreven communicatie
- Welke woorden vaak samen voorkomen
- Hoe gesprekken meestal verlopen
- Contextuele verschillen tussen formele en informele communicatie

**Het is vergelijkbaar met hoe archeologen oude talen ontcijferen**: ze analyseren duizenden voorbeelden om grammatica, woordenschat en culturele context te begrijpen, en worden uiteindelijk in staat om nieuwe teksten te interpreteren met behulp van die geleerde patronen.

### Waarom GitHub Models?

We gebruiken GitHub Models om een vrij praktische reden – het geeft ons toegang tot AI op ondernemingsniveau zonder dat we onze eigen AI-infrastructuur hoeven op te zetten (wat je nu echt niet wilt doen!). Denk eraan als het gebruik van een weer-API in plaats van zelf het weer te proberen voorspellen door overal weerstations op te zetten.

Het is in feite "AI-as-a-Service", en het beste deel? Het is gratis om te beginnen, zodat je kunt experimenteren zonder je zorgen te maken over hoge kosten.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

We zullen GitHub Models gebruiken voor onze backend-integratie, die toegang biedt tot professionele AI-mogelijkheden via een gebruiksvriendelijke interface voor ontwikkelaars. De [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) dient als een testomgeving waar je kunt experimenteren met verschillende AI-modellen en hun mogelijkheden kunt begrijpen voordat je ze implementeert in code.

## 🧠 Ecosysteem voor AI-toepassingsontwikkeling

```mermaid
mindmap
  root((AI Development))
    Understanding AI
      Generative Models
        Pattern Recognition
        Content Generation
        Context Understanding
        Response Synthesis
      AI Parameters
        Temperature Control
        Token Limits
        Top-p Filtering
        System Prompts
    Backend Architecture
      API Integration
        GitHub Models
        Authentication
        Request Handling
        Error Management
      Python Infrastructure
        FastAPI Framework
        Async Operations
        Environment Security
        CORS Configuration
    Frontend Experience
      Chat Interface
        Real-time Updates
        Message History
        User Feedback
        Loading States
      Modern Web Tech
        ES6 Classes
        Async/Await
        DOM Manipulation
        Event Handling
    Professional Patterns
      Security Best Practices
        Token Management
        Input Validation
        XSS Prevention
        Error Boundaries
      Production Readiness
        Performance Optimization
        Responsive Design
        Accessibility
        Testing Strategies
```

**Kernprincipe**: AI-toepassingsontwikkeling combineert traditionele webontwikkelingsvaardigheden met AI-dienstintegratie, waardoor intelligente toepassingen ontstaan die natuurlijk en responsief aanvoelen voor gebruikers.

![GitHub Models AI Playground interface met modelselectie en testgebied](../../../translated_images/nl/playground.d2b927122224ff8f.webp)

**Waarom de playground zo handig is:**
- **Probeer** verschillende AI-modellen zoals GPT-4o-mini, Claude en anderen (allemaal gratis!)
- **Test** je ideeën en prompts voordat je code schrijft
- **Ontvang** kant-en-klare codefragmenten in je favoriete programmeertaal
- **Pas** instellingen aan zoals creativiteitsniveau en antwoordlengte om te zien hoe ze de output beïnvloeden

Zodra je wat hebt geëxperimenteerd, klik je gewoon op het tabblad "Code" en kies je je programmeertaal om de implementatiecode te krijgen die je nodig hebt.

![Playground keuze toont codegeneratie-opties voor verschillende programmeertalen](../../../translated_images/nl/playground-choice.1d23ba7d407f4758.webp)

## Het instellen van de Python backend-integratie

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

**Wat er gebeurt in deze code:**
- **We importeren** de tools die we nodig hebben: `os` voor het lezen van omgevingsvariabelen en `OpenAI` voor communicatie met de AI
- **We stellen** de OpenAI-client in om te wijzen naar de AI-servers van GitHub in plaats van direct naar OpenAI
- **We authenticeren** met een speciale GitHub-token (daarover later meer!)
- **We structureren** ons gesprek met verschillende "rollen" – denk aan het instellen van de scène voor een toneelstuk
- **We sturen** ons verzoek naar de AI met enkele parameters voor fijne afstemming
- **We halen** de daadwerkelijke antwoordtekst uit alle gegevens die terugkomen

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

**Denk eraan als het regisseren van een toneelstuk:**
- **Systeemrol**: Zoals toneelaanwijzingen voor een acteur – het vertelt de AI hoe te gedragen, welke persoonlijkheid te hebben en hoe te reageren
- **Gebruikersrol**: De daadwerkelijke vraag of boodschap van de persoon die je toepassing gebruikt
- **Assistentrol**: Het antwoord van de AI (je stuurt dit niet, maar het verschijnt in de gespreksgeschiedenis)

**Praktijkvoorbeeld**: Stel je voor dat je een vriend aan iemand op een feestje voorstelt:
- **Systeembericht**: "Dit is mijn vriend Sarah, ze is een dokter die geweldig is in het eenvoudig uitleggen van medische concepten"
- **Gebruikersbericht**: "Kun je uitleggen hoe vaccins werken?"
- **Assistentantwoord**: Sarah reageert als een vriendelijke dokter, niet als een advocaat of een chef-kok

### Begrijpen van AI-parameters: Fijnafstelling van het responsgedrag

De numerieke parameters in AI-API-aanroepen bepalen hoe het model antwoorden genereert. Met deze instellingen kun je het gedrag van de AI aanpassen voor verschillende toepassingen:

#### Temperature (0.0 tot 2.0): De creativiteitsknop

**Wat het doet**: Bepaalt hoe creatief of voorspelbaar de antwoorden van de AI zullen zijn.

**Denk eraan als het improvisatieniveau van een jazzmuzikant:**
- **Temperature = 0.1**: Elke keer exact dezelfde melodie spelen (zeer voorspelbaar)
- **Temperature = 0.7**: Enkele smaakvolle variaties toevoegen terwijl het herkenbaar blijft (gebalanceerde creativiteit)
- **Temperature = 1.5**: Volledig experimentele jazz met onverwachte wendingen (zeer onvoorspelbaar)

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

#### Max Tokens (1 tot 4096+): De lengtecontroller van het antwoord

**Wat het doet**: Stelt een limiet in voor hoe lang het antwoord van de AI kan zijn.

**Denk aan tokens als ongeveer gelijk aan woorden** (ongeveer 1 token = 0,75 woorden in het Engels):
- **max_tokens=50**: Kort en bondig (zoals een sms)
- **max_tokens=500**: Een mooie alinea of twee
- **max_tokens=2000**: Een gedetailleerde uitleg met voorbeelden

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

#### Top_p (0.0 tot 1.0): De focusparameter

**Wat het doet**: Bepaalt hoe gefocust de AI blijft op de meest waarschijnlijke antwoorden.

**Stel je voor dat de AI een enorme woordenschat heeft, gerangschikt op hoe waarschijnlijk elk woord is:**
- **top_p=0.1**: Beschouwt alleen de top 10% meest waarschijnlijke woorden (zeer gefocust)
- **top_p=0.9**: Beschouwt 90% van de mogelijke woorden (meer creatief)
- **top_p=1.0**: Beschouwt alles (maximale variatie)

**Bijvoorbeeld**: Als je vraagt "De lucht is meestal..."
- **Lage top_p**: Zegt bijna zeker "blauw"
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

```mermaid
quadrantChart
    title AI Parameter Optimization Matrix
    x-axis Low Creativity --> High Creativity
    y-axis Short Response --> Long Response
    
    quadrant-1 Creative Content
    quadrant-2 Detailed Analysis
    quadrant-3 Quick Facts
    quadrant-4 Conversational AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```

**Begrijpen waarom deze parameters belangrijk zijn**: Verschillende toepassingen hebben verschillende soorten antwoorden nodig. Een klantenservicebot moet consistent en feitelijk zijn (lage temperatuur), terwijl een creatieve schrijfassistent fantasierijk en gevarieerd moet zijn (hoge temperatuur). Door deze parameters te begrijpen, krijg je controle over de persoonlijkheid en stijl van de AI.

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
- **Accepteert** twee parameters: de prompt van de gebruiker en een optioneel systeembericht
- **Biedt** een standaard systeembericht voor algemeen assistentgedrag
- **Gebruikt** juiste Python type hints voor betere code-documentatie
- **Geeft** alleen de inhoud van het antwoord terug, waardoor het gemakkelijk te gebruiken is in onze web-API
- **Behoudt** dezelfde modelparameters voor consistent AI-gedrag

### De magie van systeemprompts: AI persoonlijkheid programmeren

Als parameters bepalen hoe de AI denkt, bepalen systeemprompts wie de AI denkt dat het is. Dit is eerlijk gezegd een van de coolste aspecten van werken met AI – je geeft de AI in wezen een complete persoonlijkheid, deskundigheidsniveau en communicatiestijl.

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

Laten we eens kijken hoe verschillende systeemprompts compleet verschillende AI-persoonlijkheden creëren:

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

**1. Context instellen**: Geef de AI achtergrondinformatie
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Output Formatting**: Vertel de AI hoe antwoorden gestructureerd moeten worden
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

**3. Constraint Setting**: Definieer wat de AI NIET moet doen
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Waarom Dit Belangrijk Is voor Jouw Chat Assistent

Het begrijpen van systeemprompts geeft je ongelooflijke kracht om gespecialiseerde AI-assistenten te creëren:
- **Klantenservice bot**: Behulpzaam, geduldig, bekend met beleid
- **Leercoach**: Aanmoedigend, stap-voor-stap, controleert begrip
- **Creatieve partner**: Fantasierijk, bouwt voort op ideeën, stelt vragen zoals "wat als?"
- **Technisch expert**: Nauwkeurig, gedetailleerd, bewust van beveiliging

**De belangrijkste inzicht**: Je roept niet zomaar een AI API aan – je creëert een op maat gemaakte AI-persoonlijkheid die jouw specifieke gebruiksdoel dient. Dit is wat moderne AI-toepassingen op maat en nuttig maakt in plaats van generiek.

### 🎯 Pedagogische Check-in: AI Persoonlijkheid Programmeren

**Pauzeer en Reflecteer**: Je hebt zojuist geleerd hoe je AI-persoonlijkheden programmeert via systeemprompts. Dit is een fundamentele vaardigheid in moderne AI-toepassingsontwikkeling.

**Snelle Zelfbeoordeling**:
- Kun je uitleggen hoe systeemprompts verschillen van gewone gebruikersberichten?
- Wat is het verschil tussen de parameters temperatuur en top_p?
- Hoe zou je een systeemprompt maken voor een specifiek gebruiksdoel (zoals een programmeercoach)?

**Connectie met de echte wereld**: De technieken voor systeemprompts die je hebt geleerd, worden gebruikt in elke grote AI-toepassing - van GitHub Copilot's programmeerassistentie tot ChatGPT's conversatie-interface. Je beheerst dezelfde patronen die worden gebruikt door AI-productteams bij grote technologiebedrijven.

**Uitdaging Vraag**: Hoe zou je verschillende AI-persoonlijkheden ontwerpen voor verschillende gebruikersgroepen (beginner versus expert)? Denk na over hoe hetzelfde onderliggende AI-model verschillende doelgroepen kan bedienen via prompt-engineering.

## Het bouwen van de Web API met FastAPI: Jouw High-Performance AI Communicatie Hub

Laten we nu de backend bouwen die jouw frontend verbindt met AI-diensten. We gebruiken FastAPI, een modern Python-framework dat uitblinkt in het bouwen van API's voor AI-toepassingen.

FastAPI biedt verschillende voordelen voor dit type project: ingebouwde async-ondersteuning voor het verwerken van gelijktijdige verzoeken, automatische generatie van API-documentatie en uitstekende prestaties. Jouw FastAPI-server fungeert als een tussenpersoon die verzoeken van de frontend ontvangt, communiceert met AI-diensten en geformatteerde antwoorden retourneert.

### Waarom FastAPI voor AI-toepassingen?

Je vraagt je misschien af: "Kan ik de AI niet gewoon rechtstreeks vanuit mijn frontend JavaScript aanroepen?" of "Waarom FastAPI in plaats van Flask of Django?" Goede vragen!

**Hier is waarom FastAPI perfect is voor wat we bouwen:**
- **Async standaard**: Kan meerdere AI-verzoeken tegelijk verwerken zonder vast te lopen
- **Automatische documentatie**: Bezoek `/docs` en krijg gratis een prachtige, interactieve API-documentatiepagina
- **Ingebouwde validatie**: Vangt fouten op voordat ze problemen veroorzaken
- **Razendsnel**: Een van de snelste Python-frameworks die er zijn
- **Modern Python**: Maakt gebruik van alle nieuwste en beste Python-functies

**En hier is waarom we überhaupt een backend nodig hebben:**

**Beveiliging**: Jouw AI API-sleutel is als een wachtwoord – als je het in frontend JavaScript plaatst, kan iedereen die de broncode van jouw website bekijkt het stelen en jouw AI-tegoed gebruiken. De backend houdt gevoelige gegevens veilig.

**Rate Limiting & Controle**: De backend stelt je in staat om te controleren hoe vaak gebruikers verzoeken kunnen indienen, gebruikersauthenticatie te implementeren en logging toe te voegen om gebruik bij te houden.

**Gegevensverwerking**: Je wilt misschien gesprekken opslaan, ongepaste inhoud filteren of meerdere AI-diensten combineren. De backend is waar deze logica leeft.

**De architectuur lijkt op een client-servermodel:**
- **Frontend**: Laag voor gebruikersinterface en interactie
- **Backend API**: Laag voor verzoekverwerking en routering
- **AI-dienst**: Externe berekening en responsgeneratie
- **Omgevingsvariabelen**: Veilige configuratie en opslag van inloggegevens

### Begrijpen van de Verzoek-Respons Stroom

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
2. **Frontend verwerking**: JavaScript vangt de invoer op en formatteert het als JSON
3. **API-validatie**: FastAPI valideert automatisch het verzoek met behulp van Pydantic-modellen
4. **AI-integratie**: Backend voegt context toe (systeemprompt) en roept de AI-dienst aan
5. **Responsverwerking**: API ontvangt AI-respons en kan deze indien nodig aanpassen
6. **Frontend weergave**: JavaScript toont de respons in de chatinterface

### Begrijpen van API Architectuur

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

```mermaid
flowchart TD
    A[User Input] --> B[Frontend Validation]
    B --> C[HTTP POST Request]
    C --> D[FastAPI Router]
    D --> E[Pydantic Validation]
    E --> F[AI Function Call]
    F --> G[GitHub Models API]
    G --> H[Response Processing]
    H --> I[JSON Response]
    I --> J[Frontend Update]
    
    subgraph "Security Layer"
        K[CORS Middleware]
        L[Environment Variables]
        M[Error Handling]
    end
    
    D --> K
    F --> L
    H --> M
```

### Het maken van de FastAPI Applicatie

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
- **Gebruikt** async endpoints voor betere prestaties bij gelijktijdige verzoeken
- **Implementeert** juiste HTTP-statuscodes en foutafhandeling met HTTPException
- **Bevat** gestructureerde logging voor monitoring en debugging
- **Biedt** een health check endpoint voor het monitoren van de status van de service

**Belangrijke voordelen van FastAPI ten opzichte van traditionele frameworks:**
- **Automatische validatie**: Pydantic-modellen zorgen voor gegevensintegriteit vóór verwerking
- **Interactieve documentatie**: Bezoek `/docs` voor automatisch gegenereerde, testbare API-documentatie
- **Typeveiligheid**: Python type hints voorkomen runtime fouten en verbeteren de codekwaliteit
- **Async ondersteuning**: Verwerk meerdere AI-verzoeken tegelijkertijd zonder blokkering
- **Prestaties**: Significante snellere verzoekverwerking voor realtime toepassingen

### Begrijpen van CORS: De Beveiligingsbewaker van het Web

CORS (Cross-Origin Resource Sharing) is als een beveiligingsbewaker bij een gebouw die controleert of bezoekers mogen binnenkomen. Laten we begrijpen waarom dit belangrijk is en hoe het jouw toepassing beïnvloedt.

#### Wat is CORS en Waarom Bestaat Het?

**Het probleem**: Stel je voor dat elke website verzoeken kan doen aan de website van jouw bank namens jou zonder jouw toestemming. Dat zou een beveiligingsnachtmerrie zijn! Browsers voorkomen dit standaard via het "Same-Origin Policy."

**Same-Origin Policy**: Browsers staan alleen toe dat webpagina's verzoeken doen naar dezelfde domein, poort en protocol waar ze vandaan zijn geladen.

**Echte wereld analogie**: Het is als de beveiliging van een appartementencomplex – alleen bewoners (zelfde oorsprong) kunnen standaard toegang krijgen tot het gebouw. Als je een vriend (andere oorsprong) wilt laten bezoeken, moet je expliciet aan de beveiliging vertellen dat het oké is.

#### CORS in Jouw Ontwikkelomgeving

Tijdens ontwikkeling draaien jouw frontend en backend op verschillende poorten:
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
- **Verwerkt** "preflight" verzoeken (browsers controleren soms permissies voordat ze het daadwerkelijke verzoek sturen)
- **Voorkomt** de gevreesde "geblokkeerd door CORS-beleid" fout in jouw browserconsole

#### CORS Beveiliging: Ontwikkeling versus Productie

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

**Waarom dit belangrijk is**: Tijdens ontwikkeling is `CORS(app)` als het open laten van je voordeur – handig maar niet veilig. In productie wil je precies specificeren welke websites met jouw API mogen communiceren.

#### Veelvoorkomende CORS-scenario's en oplossingen

| Scenario | Probleem | Oplossing |
|----------|----------|-----------|
| **Lokale Ontwikkeling** | Frontend kan backend niet bereiken | Voeg CORSMiddleware toe aan FastAPI |
| **GitHub Pages + Heroku** | Geïmplementeerde frontend kan API niet bereiken | Voeg jouw GitHub Pages URL toe aan CORS origins |
| **Eigen Domein** | CORS-fouten in productie | Werk CORS origins bij om overeen te komen met jouw domein |
| **Mobiele App** | App kan web API niet bereiken | Voeg het domein van jouw app toe of gebruik `*` voorzichtig |

**Pro tip**: Je kunt CORS-headers controleren in de Developer Tools van jouw browser onder het tabblad Netwerk. Zoek naar headers zoals `Access-Control-Allow-Origin` in de respons.

### Foutafhandeling en Validatie

Let op hoe onze API correcte foutafhandeling bevat:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Belangrijke validatieprincipes:**
- **Controleert** op vereiste velden vóór verwerking van verzoeken
- **Retourneert** betekenisvolle foutmeldingen in JSON-formaat
- **Gebruikt** geschikte HTTP-statuscodes (400 voor onjuiste verzoeken)
- **Biedt** duidelijke feedback om frontend-ontwikkelaars te helpen problemen op te lossen

## Het instellen en uitvoeren van jouw backend

Nu we onze AI-integratie en FastAPI-server klaar hebben, laten we alles laten draaien. Het installatieproces omvat het installeren van Python-afhankelijkheden, het configureren van omgevingsvariabelen en het starten van jouw ontwikkelserver.

### Python Ontwikkelomgeving Instellen

Laten we jouw Python-ontwikkelomgeving instellen. Virtuele omgevingen zijn als de compartimenten van het Manhattan Project – elk project krijgt zijn eigen geïsoleerde ruimte met specifieke tools en afhankelijkheden, waardoor conflicten tussen verschillende projecten worden voorkomen.

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
- **Gemaakt** onze eigen kleine Python-bubbel waar we pakketten kunnen installeren zonder andere projecten te beïnvloeden
- **Geactiveerd** zodat onze terminal weet dat deze specifieke omgeving moet worden gebruikt
- **Geïnstalleerd** de essentiële onderdelen: OpenAI voor AI-magic, FastAPI voor onze web-API, Uvicorn om het daadwerkelijk te draaien, en python-dotenv voor veilige geheimenbeheer

**Belangrijke afhankelijkheden uitgelegd:**
- **FastAPI**: Modern, snel webframework met automatische API-documentatie
- **Uvicorn**: Razendsnelle ASGI-server die FastAPI-applicaties uitvoert
- **OpenAI**: Officiële bibliotheek voor GitHub-modellen en OpenAI API-integratie
- **python-dotenv**: Veilige omgeving variabele laden vanuit .env-bestanden

### Omgevingsconfiguratie: Geheimen Veilig Houden

Voordat we onze API starten, moeten we praten over een van de belangrijkste lessen in webontwikkeling: hoe je jouw geheimen echt geheim houdt. Omgevingsvariabelen zijn als een veilige kluis waar alleen jouw applicatie toegang toe heeft.

#### Wat Zijn Omgevingsvariabelen?

**Denk aan omgevingsvariabelen als een kluis** – je stopt jouw waardevolle spullen erin, en alleen jij (en jouw app) hebt de sleutel om ze eruit te halen. In plaats van gevoelige informatie direct in jouw code te schrijven (waar letterlijk iedereen het kan zien), sla je het veilig op in de omgeving.

**Hier is het verschil:**
- **De verkeerde manier**: Jouw wachtwoord op een plakbriefje schrijven en op je monitor plakken
- **De juiste manier**: Jouw wachtwoord bewaren in een veilige wachtwoordmanager die alleen jij kunt openen

#### Waarom Omgevingsvariabelen Belangrijk Zijn

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
1. **Blootstelling in versiebeheer**: Iedereen met toegang tot jouw Git-repository ziet jouw API-sleutel
2. **Openbare repositories**: Als je naar GitHub pusht, is jouw sleutel zichtbaar voor het hele internet
3. **Teamdeling**: Andere ontwikkelaars die aan jouw project werken krijgen toegang tot jouw persoonlijke API-sleutel
4. **Beveiligingsinbreuken**: Als iemand jouw API-sleutel steelt, kan hij jouw AI-tegoed gebruiken

#### Het Instellen van Jouw Omgevingsbestand

Maak een `.env` bestand in jouw backend-map. Dit bestand slaat jouw geheimen lokaal op:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Begrijpen van het .env bestand:**
- **Eén geheim per regel** in `KEY=value` formaat
- **Geen spaties** rond het gelijkheidsteken
- **Geen aanhalingstekens** nodig rond waarden (meestal)
- **Opmerkingen** beginnen met `#`

#### Het Aanmaken van Jouw GitHub Persoonlijke Toegangstoken

Jouw GitHub-token is als een speciaal wachtwoord dat jouw applicatie toestemming geeft om GitHub's AI-diensten te gebruiken:

**Stap-voor-stap token aanmaken:**
1. **Ga naar GitHub Instellingen** → Ontwikkelaar instellingen → Persoonlijke toegangstokens → Tokens (klassiek)
2. **Klik op "Genereer nieuw token (klassiek)"**
3. **Stel vervaldatum in** (30 dagen voor testen, langer voor productie)
4. **Selecteer scopes**: Vink "repo" en eventuele andere benodigde machtigingen aan
5. **Genereer token** en kopieer het onmiddellijk (je kunt het later niet meer zien!)
6. **Plak in jouw .env bestand**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Omgevingsvariabelen Laden in Python

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
- **Laadt** jouw .env bestand en maakt variabelen beschikbaar voor Python
- **Controleert** of de vereiste token bestaat (goede foutafhandeling!)
- **Geeft** een duidelijke foutmelding als de token ontbreekt
- **Gebruikt** de token veilig zonder deze in de code bloot te stellen

#### Git Beveiliging: Het .gitignore Bestand

Jouw `.gitignore` bestand vertelt Git welke bestanden nooit gevolgd of geüpload mogen worden:

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

**Waarom dit cruciaal is**: Zodra je `.env` toevoegt aan `.gitignore`, zal Git jouw omgevingsbestand negeren, waardoor je voorkomt dat je per ongeluk jouw geheimen uploadt naar GitHub.

#### Verschillende Omgevingen, Verschillende Geheimen

Professionele toepassingen gebruiken verschillende API-sleutels voor verschillende omgevingen:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Waarom dit belangrijk is**: Je wilt niet dat jouw experimenten tijdens ontwikkeling invloed hebben op jouw productie-AI-gebruikslimiet, en je wilt verschillende beveiligingsniveaus voor verschillende omgevingen.

### Jouw Ontwikkelserver Starten: Breng Jouw FastAPI tot Leven
Nu komt het spannende moment – het starten van je FastAPI-ontwikkelserver en het tot leven zien komen van je AI-integratie! FastAPI gebruikt Uvicorn, een razendsnelle ASGI-server die speciaal is ontworpen voor asynchrone Python-applicaties.

#### Begrijpen van het opstartproces van de FastAPI-server

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Wanneer je dit commando uitvoert, gebeurt er achter de schermen het volgende:

**1. Python laadt je FastAPI-applicatie**:
- Importeert alle benodigde bibliotheken (FastAPI, Pydantic, OpenAI, etc.)
- Laadt omgevingsvariabelen uit je `.env`-bestand
- Maakt de FastAPI-applicatie-instantie met automatische documentatie

**2. Uvicorn configureert de ASGI-server**:
- Verbindt met poort 5000 met mogelijkheden voor asynchrone verzoekafhandeling
- Stelt verzoekroutering in met automatische validatie
- Activeert hot reload voor ontwikkeling (herstart bij wijzigingen in bestanden)
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
- **Uvicorn draait**: High-performance ASGI-server is actief
- **Reloader proces gestart**: Bestandvolger voor automatische herstarts
- **Applicatie succesvol opgestart**: FastAPI-app succesvol geïnitialiseerd
- **Interactieve documentatie beschikbaar**: Bezoek `/docs` voor automatische API-documentatie

#### Testen van je FastAPI: Meerdere krachtige benaderingen

FastAPI biedt verschillende handige manieren om je API te testen, inclusief automatische interactieve documentatie:

**Methode 1: Interactieve API-documentatie (Aanbevolen)**
1. Open je browser en ga naar `http://localhost:5000/docs`
2. Je ziet Swagger UI met al je endpoints gedocumenteerd
3. Klik op `/hello` → "Try it out" → Voer een testbericht in → "Execute"
4. Bekijk de reactie direct in de browser met de juiste opmaak

**Methode 2: Basis browsertest**
1. Ga naar `http://localhost:5000` voor de root endpoint
2. Ga naar `http://localhost:5000/health` om de serverstatus te controleren
3. Dit bevestigt dat je FastAPI-server correct draait

**Methode 3: Command Line Test (Geavanceerd)**
```bash
# Test with curl (if available)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Expected response:
# {"response": "Hello! I'm your AI assistant. How can I help you today?"}
```

**Methode 4: Python Test Script**
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

#### Veelvoorkomende opstartproblemen oplossen

| Foutmelding | Wat het betekent | Hoe op te lossen |
|-------------|------------------|------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI niet geïnstalleerd | Voer `pip install fastapi uvicorn` uit in je virtuele omgeving |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-server niet geïnstalleerd | Voer `pip install uvicorn` uit in je virtuele omgeving |
| `KeyError: 'GITHUB_TOKEN'` | Omgevingsvariabele niet gevonden | Controleer je `.env`-bestand en `load_dotenv()`-aanroep |
| `Address already in use` | Poort 5000 is bezet | Beëindig andere processen die poort 5000 gebruiken of wijzig de poort |
| `ValidationError` | Verzoekgegevens komen niet overeen met Pydantic-model | Controleer of je verzoekformaat overeenkomt met het verwachte schema |
| `HTTPException 422` | Onverwerkbare entiteit | Verzoekvalidatie mislukt, controleer `/docs` voor het juiste formaat |
| `OpenAI API error` | AI-service authenticatie mislukt | Controleer of je GitHub-token correct is en de juiste permissies heeft |

#### Beste praktijken voor ontwikkeling

**Automatisch herladen**: FastAPI met Uvicorn biedt automatisch herladen wanneer je wijzigingen opslaat in je Python-bestanden. Dit betekent dat je je code kunt aanpassen en direct kunt testen zonder handmatig opnieuw op te starten.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Loggen voor ontwikkeling**: Voeg logging toe om te begrijpen wat er gebeurt:

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

**Waarom logging helpt**: Tijdens ontwikkeling kun je precies zien welke verzoeken binnenkomen, wat de AI als antwoord geeft en waar fouten optreden. Dit maakt debuggen veel sneller.

### Configureren voor GitHub Codespaces: Makkelijk ontwikkelen in de cloud

GitHub Codespaces is als een krachtige ontwikkelcomputer in de cloud die je vanuit elke browser kunt benaderen. Als je in Codespaces werkt, zijn er een paar extra stappen nodig om je backend toegankelijk te maken voor je frontend.

#### Begrijpen van Codespaces-netwerken

In een lokale ontwikkelomgeving draait alles op dezelfde computer:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (of file://)

In Codespaces draait je ontwikkelomgeving op de servers van GitHub, dus "localhost" heeft een andere betekenis. GitHub maakt automatisch openbare URL's voor je services, maar je moet ze correct configureren.

#### Stapsgewijze Codespaces-configuratie

**1. Start je backend-server**:
```bash
cd backend
python api.py
```

Je ziet het bekende FastAPI/Uvicorn-opstartbericht, maar let op dat het draait binnen de Codespace-omgeving.

**2. Configureer poortzichtbaarheid**:
- Zoek naar het tabblad "Ports" in het onderste paneel van VS Code
- Zoek poort 5000 in de lijst
- Klik met de rechtermuisknop op poort 5000
- Selecteer "Port Visibility" → "Public"

**Waarom openbaar maken?** Standaard zijn Codespace-poorten privé (alleen toegankelijk voor jou). Door ze openbaar te maken, kan je frontend (die in de browser draait) communiceren met je backend.

**3. Verkrijg je openbare URL**:
Na het openbaar maken van de poort, zie je een URL zoals:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Werk je frontend-configuratie bij**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Begrijpen van Codespace-URL's

Codespace-URL's volgen een voorspelbaar patroon:
```
https://[codespace-name]-[port].app.github.dev
```

**Uitleg:**
- `codespace-name`: Een unieke identificator voor je Codespace (meestal inclusief je gebruikersnaam)
- `port`: Het poortnummer waarop je service draait (5000 voor onze FastAPI-app)
- `app.github.dev`: Het domein van GitHub voor Codespace-applicaties

#### Testen van je Codespace-instelling

**1. Test de backend direct**:
Open je openbare URL in een nieuw browsertabblad. Je zou moeten zien:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Test met browserontwikkeltools**:
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
| **Internetafhankelijkheid** | Alleen voor AI API-aanroepen | Vereist voor alles |

#### Tips voor ontwikkeling in Codespaces

**Omgevingsvariabelen in Codespaces**:
Je `.env`-bestand werkt op dezelfde manier in Codespaces, maar je kunt ook omgevingsvariabelen direct instellen in de Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Poortbeheer**:
- Codespaces detecteert automatisch wanneer je applicatie begint te luisteren op een poort
- Je kunt meerdere poorten tegelijkertijd doorsturen (handig als je later een database toevoegt)
- Poorten blijven toegankelijk zolang je Codespace actief is

**Ontwikkelworkflow**:
1. Maak codewijzigingen in VS Code
2. FastAPI herlaadt automatisch (dankzij Uvicorn's reload-modus)
3. Test wijzigingen direct via de openbare URL
4. Commit en push wanneer je klaar bent

> 💡 **Pro Tip**: Maak een bladwijzer van je Codespace-backend-URL tijdens de ontwikkeling. Omdat Codespace-namen stabiel zijn, verandert de URL niet zolang je dezelfde Codespace gebruikt.

## Het maken van de frontend-chatinterface: waar mensen AI ontmoeten

Nu gaan we de gebruikersinterface bouwen – het deel dat bepaalt hoe mensen met je AI-assistent omgaan. Net zoals het ontwerp van de originele iPhone-interface, richten we ons op het intuïtief en natuurlijk maken van complexe technologie.

### Begrijpen van moderne frontend-architectuur

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
    
    ChatApp --> DOM : manipulates
    ChatApp --> FastAPI : sends requests
```

### De drie pijlers van frontend-ontwikkeling

Elke frontend-applicatie – van eenvoudige websites tot complexe apps zoals Discord of Slack – is gebouwd op drie kerntechnologieën. Zie ze als de basis van alles wat je op het web ziet en waarmee je interactie hebt:

**HTML (Structuur)**: Dit is je fundering
- Bepaalt welke elementen er zijn (knoppen, tekstvelden, containers)
- Geeft betekenis aan inhoud (dit is een kop, dit is een formulier, etc.)
- Creëert de basisstructuur waarop alles verder wordt gebouwd

**CSS (Presentatie)**: Dit is je interieurontwerper
- Maakt alles mooi (kleuren, lettertypen, lay-outs)
- Past zich aan verschillende schermformaten aan (telefoon vs laptop vs tablet)
- Zorgt voor vloeiende animaties en visuele feedback

**JavaScript (Gedrag)**: Dit is je brein
- Reageert op wat gebruikers doen (klikken, typen, scrollen)
- Communiceert met je backend en werkt de pagina bij
- Maakt alles interactief en dynamisch

**Zie het als architectonisch ontwerp:**
- **HTML**: Het structurele ontwerp (definieert ruimtes en relaties)
- **CSS**: Het esthetische en omgevingsontwerp (visuele stijl en gebruikerservaring)
- **JavaScript**: De mechanische systemen (functionaliteit en interactiviteit)

### Waarom moderne JavaScript-architectuur belangrijk is

Onze chatapplicatie zal gebruik maken van moderne JavaScript-patronen die je ook in professionele applicaties tegenkomt. Het begrijpen van deze concepten zal je helpen groeien als ontwikkelaar:

**Klasse-gebaseerde architectuur**: We organiseren onze code in klassen, wat lijkt op het maken van blauwdrukken voor objecten
**Async/Await**: Moderne manier om operaties af te handelen die tijd kosten (zoals API-aanroepen)
**Event-Driven Programming**: Onze app reageert op gebruikersacties (klikken, typen) in plaats van in een lus te draaien
**DOM-manipulatie**: Dynamisch bijwerken van de inhoud van de webpagina op basis van gebruikersinteracties en API-reacties

### Projectstructuur instellen

Maak een frontend-map met deze georganiseerde structuur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Begrijpen van de architectuur:**
- **Scheiding** van verantwoordelijkheden tussen structuur (HTML), gedrag (JavaScript) en presentatie (CSS)
- **Behouden** van een eenvoudige bestandsstructuur die gemakkelijk te navigeren en te wijzigen is
- **Volgt** best practices voor webontwikkeling op het gebied van organisatie en onderhoudbaarheid

### De HTML-basis bouwen: Semantische structuur voor toegankelijkheid

Laten we beginnen met de HTML-structuur. Moderne webontwikkeling benadrukt "semantische HTML" – het gebruik van HTML-elementen die duidelijk hun doel beschrijven, niet alleen hun uiterlijk. Dit maakt je applicatie toegankelijk voor schermlezers, zoekmachines en andere tools.

**Waarom semantische HTML belangrijk is**: Stel je voor dat je je chatapp beschrijft aan iemand via de telefoon. Je zou zeggen: "Er is een kop met de titel, een hoofdgedeelte waar gesprekken verschijnen, en een formulier onderaan om berichten te typen." Semantische HTML gebruikt elementen die overeenkomen met deze natuurlijke beschrijving.

Maak `index.html` met deze doordacht gestructureerde opmaak:

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

**Begrijpen van elk HTML-element en het doel ervan:**

#### Documentstructuur
- **`<!DOCTYPE html>`**: Geeft aan de browser door dat dit moderne HTML5 is
- **`<html lang="en">`**: Geeft de paginataal aan voor schermlezers en vertaaltools
- **`<meta charset="UTF-8">`**: Zorgt voor de juiste tekencodering voor internationale tekst
- **`<meta name="viewport"...>`**: Maakt de pagina mobielvriendelijk door zoom en schaal te regelen

#### Semantische elementen
- **`<header>`**: Identificeert duidelijk het bovenste gedeelte met titel en beschrijving
- **`<main>`**: Geeft het primaire inhoudsgebied aan (waar gesprekken plaatsvinden)
- **`<form>`**: Semantisch correct voor gebruikersinvoer, maakt juiste toetsenbordnavigatie mogelijk

#### Toegankelijkheidsfuncties
- **`role="log"`**: Geeft aan schermlezers dat dit gebied een chronologisch logboek van berichten bevat
- **`aria-live="polite"`**: Kondigt nieuwe berichten aan schermlezers aan zonder te onderbreken
- **`aria-label`**: Biedt beschrijvende labels voor formulierbesturingselementen
- **`required`**: Browser valideert dat gebruikers een bericht invoeren voordat ze verzenden

#### CSS- en JavaScript-integratie
- **`class`-attributen**: Bieden stylinghooks voor CSS (bijv. `chat-container`, `input-group`)
- **`id`-attributen**: Staan JavaScript toe specifieke elementen te vinden en te manipuleren
- **Scriptplaatsing**: JavaScript-bestand wordt aan het einde geladen zodat HTML eerst laadt

**Waarom deze structuur werkt:**
- **Logische flow**: Header → Hoofdinhoud → Invoervorm komt overeen met natuurlijke leesvolgorde
- **Toetsenbord toegankelijk**: Gebruikers kunnen door alle interactieve elementen tabben
- **Schermlezer vriendelijk**: Duidelijke herkenningspunten en beschrijvingen voor visueel beperkte gebruikers
- **Mobiel responsief**: Viewport meta tag maakt responsief ontwerp mogelijk
- **Progressieve verbetering**: Werkt zelfs als CSS of JavaScript niet laadt

### Interactieve JavaScript toevoegen: Logica voor moderne webapplicaties
Laten we nu de JavaScript bouwen die onze chatinterface tot leven brengt. We gebruiken moderne JavaScript-patronen die je tegenkomt in professionele webontwikkeling, zoals ES6-classes, async/await en event-driven programmering.

#### Begrijpen van Moderne JavaScript Architectuur

In plaats van procedurele code te schrijven (een reeks functies die in volgorde worden uitgevoerd), creëren we een **class-gebaseerde architectuur**. Denk aan een class als een blauwdruk voor het maken van objecten – zoals een architectenblauwdruk kan worden gebruikt om meerdere huizen te bouwen.

**Waarom classes gebruiken voor webapplicaties?**
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

#### Begrijpen van Elk JavaScript Concept

**ES6 Class Structuur**:
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

**Async/Await Patroon**:
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

**Event-Driven Programmering**:
In plaats van constant te controleren of er iets is gebeurd, "luisteren" we naar events:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM Manipulatie**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Veiligheid en Best Practices

**XSS Preventie**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Waarom dit belangrijk is**: Als een gebruiker `<script>alert('hack')</script>` typt, zorgt deze functie ervoor dat het als tekst wordt weergegeven in plaats van als code wordt uitgevoerd.

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

**Overwegingen voor Gebruikerservaring**:
- **Optimistische UI**: Voeg gebruikersberichten onmiddellijk toe, wacht niet op serverreactie
- **Laadstatus**: Schakel knoppen uit en toon "Verzenden..." tijdens het wachten
- **Automatisch scrollen**: Houd de nieuwste berichten zichtbaar
- **Inputvalidatie**: Verstuur geen lege berichten
- **Toetsenbord sneltoetsen**: Enter-toets verzendt berichten (zoals echte chatapps)

#### Begrijpen van de Applicatiestroom

1. **Pagina laadt** → `DOMContentLoaded` event wordt geactiveerd → `new ChatApp()` wordt aangemaakt
2. **Constructor wordt uitgevoerd** → Verkrijgt DOM-elementreferenties → Stelt event listeners in
3. **Gebruiker typt bericht** → Drukt op Enter of klikt op Verzenden → `handleSubmit` wordt uitgevoerd
4. **handleSubmit** → Valideert input → Toont laadstatus → Roept API aan
5. **API reageert** → Voegt AI-bericht toe aan chat → Interface opnieuw inschakelen
6. **Klaar voor volgend bericht** → Gebruiker kan doorgaan met chatten

Deze architectuur is schaalbaar – je kunt eenvoudig functies toevoegen zoals berichtbewerking, bestanduploads of meerdere gespreksthreads zonder de kernstructuur opnieuw te schrijven.

### 🎯 Pedagogische Check-in: Moderne Frontend Architectuur

**Architectuur Begrip**: Je hebt een complete single-page applicatie geïmplementeerd met moderne JavaScript-patronen. Dit vertegenwoordigt frontend-ontwikkeling op professioneel niveau.

**Belangrijke Concepten Beheerst**:
- **ES6 Class Architectuur**: Georganiseerde, onderhoudbare code structuur
- **Async/Await Patronen**: Moderne asynchrone programmering
- **Event-Driven Programmering**: Responsief ontwerp van gebruikersinterfaces
- **Veiligheidspraktijken**: XSS preventie en inputvalidatie

**Industrie Connectie**: De patronen die je hebt geleerd (class-gebaseerde architectuur, asynchrone operaties, DOM-manipulatie) vormen de basis van moderne frameworks zoals React, Vue en Angular. Je bouwt met dezelfde architecturale denkwijze die wordt gebruikt in productieapplicaties.

**Reflectievraag**: Hoe zou je deze chatapplicatie uitbreiden om meerdere gesprekken of gebruikersauthenticatie te ondersteunen? Denk na over de benodigde architecturale wijzigingen en hoe de class-structuur zou evolueren.

### Styling van Je Chatinterface

Laten we nu een moderne, visueel aantrekkelijke chatinterface maken met CSS. Goede styling zorgt ervoor dat je applicatie professioneel aanvoelt en verbetert de algehele gebruikerservaring. We gebruiken moderne CSS-functies zoals Flexbox, CSS Grid en aangepaste eigenschappen voor een responsief, toegankelijk ontwerp.

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

**Begrijpen van de CSS Architectuur:**
- **Gebruikt** CSS custom properties (variabelen) voor consistente thematisering en eenvoudige onderhoudbaarheid
- **Implementeert** Flexbox layout voor responsief ontwerp en juiste uitlijning
- **Bevat** vloeiende animaties voor berichtweergave zonder afleidend te zijn
- **Biedt** visuele onderscheid tussen gebruikersberichten, AI-reacties en foutstatussen
- **Ondersteunt** responsief ontwerp dat werkt op zowel desktop- als mobiele apparaten
- **Houdt rekening met** toegankelijkheid met voorkeuren voor verminderde beweging en juiste contrastverhoudingen
- **Biedt** ondersteuning voor donkere modus op basis van systeemvoorkeuren

### Configureren van Je Backend URL

De laatste stap is het bijwerken van de `BASE_URL` in je JavaScript om overeen te komen met je backend server:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Je backend URL bepalen:**
- **Lokale ontwikkeling**: Gebruik `http://localhost:5000` als je zowel frontend als backend lokaal uitvoert
- **Codespaces**: Zoek je backend URL in het tabblad Ports nadat je poort 5000 openbaar hebt gemaakt
- **Productie**: Vervang door je daadwerkelijke domein bij het implementeren op een hostingservice

> 💡 **Testtip**: Je kunt je backend direct testen door de root URL in je browser te bezoeken. Je zou het welkomstbericht van je FastAPI-server moeten zien.



## Testen en Implementeren

Nu je zowel frontend- als backendcomponenten hebt gebouwd, laten we testen of alles samenwerkt en verkennen we implementatieopties om je chatassistent met anderen te delen.

### Lokale Testworkflow

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

1. **Start je backend server**:
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

### Veelvoorkomende Problemen Oplossen

| Probleem | Symptomen | Oplossing |
|---------|----------|----------|
| **CORS Fout** | Frontend kan backend niet bereiken | Zorg ervoor dat FastAPI CORSMiddleware correct is geconfigureerd |
| **API Sleutelfout** | 401 Unauthorized reacties | Controleer je `GITHUB_TOKEN` omgevingsvariabele |
| **Verbinding Geweigerd** | Netwerkfouten in frontend | Controleer backend URL en of Flask-server actief is |
| **Geen AI Reactie** | Lege of foutreacties | Controleer backend logs op API-quota of authenticatieproblemen |

**Veelvoorkomende debugstappen:**
- **Controleert** browser Developer Tools Console op JavaScript-fouten
- **Verifieert** dat het tabblad Netwerk succesvolle API-verzoeken en -reacties toont
- **Bekijkt** backend terminaloutput op Python-fouten of API-problemen
- **Bevestigt** dat omgevingsvariabelen correct zijn geladen en toegankelijk zijn

## 📈 Jouw AI Applicatie Ontwikkeling Meesterschap Tijdlijn

```mermaid
timeline
    title Complete AI Application Development Journey
    
    section AI Foundations
        Understanding Generative AI
            : Grasp pattern recognition concepts
            : Master AI parameter control
            : Learn prompt engineering techniques
        
        GitHub Models Integration
            : Navigate AI service platforms
            : Handle authentication securely
            : Optimize model parameters
    
    section Backend Development
        Python API Architecture
            : Build FastAPI applications
            : Implement async operations
            : Create secure endpoints
        
        AI Service Integration
            : Connect to external AI APIs
            : Handle rate limiting
            : Implement error boundaries
    
    section Frontend Mastery
        Modern JavaScript Patterns
            : Master ES6 class architecture
            : Implement async/await flows
            : Build responsive interfaces
        
        Real-time User Experience
            : Create dynamic chat interfaces
            : Handle loading states
            : Optimize user interactions
    
    section Production Readiness
        Security & Performance
            : Implement secure token management
            : Prevent XSS vulnerabilities
            : Optimize API performance
        
        Professional Deployment
            : Build scalable architectures
            : Create maintainable code
            : Document development processes
```

**🎓 Afstudeermijlpaal**: Je hebt met succes een complete AI-aangedreven applicatie gebouwd met dezelfde technologieën en architecturale patronen die moderne AI-assistenten aandrijven. Deze vaardigheden vertegenwoordigen de kruising van traditionele webontwikkeling en geavanceerde AI-integratie.

**🔄 Volgende Niveau Mogelijkheden**:
- Klaar om geavanceerde AI-frameworks te verkennen (LangChain, LangGraph)
- Bereid om multimodale AI-applicaties te bouwen (tekst, afbeelding, stem)
- Uitgerust om vector databases en ophaalsystemen te implementeren
- Basis gelegd voor machine learning en AI-modelaanpassing

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter de chatassistent door gespreksgeschiedenis en berichtpersistentie toe te voegen. Deze uitdaging helpt je begrijpen hoe je staat beheert in chatapplicaties en gegevensopslag implementeert voor een betere gebruikerservaring.

**Prompt:** Pas de chatapplicatie aan om gespreksgeschiedenis te bevatten die blijft bestaan tussen sessies. Voeg functionaliteit toe om chatberichten op te slaan in local storage, gespreksgeschiedenis weer te geven wanneer de pagina wordt geladen, en een "Geschiedenis Wissen"-knop toe te voegen. Implementeer ook typindicatoren en berichttijdstempels om de chatervaring realistischer te maken.

Lees meer over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## Opdracht: Bouw Je Eigen AI Assistent

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

### Kern Implementatietaken

**Backend Ontwikkeling:**
- **Neem** onze FastAPI-code en maak het je eigen
- **Creëer** een unieke AI-persoonlijkheid – misschien een behulpzame kookassistent, een creatieve schrijfpartner of een studiehulp?
- **Voeg** solide foutafhandeling toe zodat je app niet crasht als er iets misgaat
- **Schrijf** duidelijke documentatie voor iedereen die wil begrijpen hoe je API werkt

**Frontend Ontwikkeling:**
- **Bouw** een chatinterface die intuïtief en uitnodigend aanvoelt
- **Schrijf** schone, moderne JavaScript waar je trots op kunt zijn om aan andere ontwikkelaars te laten zien
- **Ontwerp** aangepaste styling die de persoonlijkheid van je AI weerspiegelt – leuk en kleurrijk? Schoon en minimalistisch? Helemaal aan jou!
- **Zorg ervoor** dat het geweldig werkt op zowel telefoons als computers

**Personalisatievereisten:**
- **Kies** een unieke naam en persoonlijkheid voor je AI-assistent – misschien iets dat jouw interesses weerspiegelt of de problemen die je wilt oplossen
- **Pas** het visuele ontwerp aan om bij de sfeer van je assistent te passen
- **Schrijf** een boeiend welkomstbericht dat mensen uitnodigt om te beginnen met chatten
- **Test** je assistent met verschillende soorten vragen om te zien hoe hij reageert

### Ideeën voor Verbeteringen (Optioneel)

Wil je je project naar een hoger niveau tillen? Hier zijn enkele leuke ideeën om te verkennen:

| Functie | Beschrijving | Vaardigheden die je oefent |
|---------|-------------|------------------------|
| **Berichtgeschiedenis** | Onthoud gesprekken zelfs na het vernieuwen van de pagina | Werken met localStorage, JSON-verwerking |
| **Typindicatoren** | Toon "AI is aan het typen..." tijdens het wachten op reacties | CSS-animaties, asynchrone programmering |
| **Berichttijdstempels** | Toon wanneer elk bericht is verzonden | Datum/tijd formattering, UX-ontwerp |
| **Chat Exporteren** | Laat gebruikers hun gesprek downloaden | Bestandshandling, gegevensexport |
| **Thema Wisselen** | Licht/donker modus schakelen | CSS-variabelen, gebruikersvoorkeuren |
| **Stem Invoer** | Voeg spraak-naar-tekst functionaliteit toe | Web API's, toegankelijkheid |

### Testen en Documentatie

**Kwaliteitscontrole:**
- **Test** je applicatie met verschillende invoertypes en randgevallen
- **Controleer** of responsief ontwerp werkt op verschillende schermformaten
- **Controleer** toegankelijkheid met toetsenbordnavigatie en schermlezers
- **Valideer** HTML en CSS op naleving van standaarden

**Documentatievereisten:**
- **Schrijf** een README.md waarin je project en hoe het te gebruiken wordt uitgelegd
- **Voeg** screenshots toe van je chatinterface in actie
- **Documenteer** eventuele unieke functies of aanpassingen die je hebt toegevoegd
- **Geef** duidelijke installatie-instructies voor andere ontwikkelaars

### Inzendrichtlijnen

**Projectresultaten:**
1. Compleet projectmap met alle broncode
2. README.md met projectbeschrijving en installatie-instructies
3. Screenshots die je chatassistent in actie laten zien
4. Korte reflectie over wat je hebt geleerd en welke uitdagingen je bent tegengekomen

**Evaluatiecriteria:**
- **Functionaliteit**: Werkt de chatassistent zoals verwacht?
- **Codekwaliteit**: Is de code goed georganiseerd, becommentarieerd en onderhoudbaar?
- **Ontwerp**: Is de interface visueel aantrekkelijk en gebruiksvriendelijk?
- **Creativiteit**: Hoe uniek en gepersonaliseerd is je implementatie?
- **Documentatie**: Zijn de installatie-instructies duidelijk en volledig?

> 💡 **Succes Tip**: Begin eerst met de basisvereisten en voeg pas verbeteringen toe zodra alles werkt. Focus op het creëren van een gepolijste kernervaring voordat je geavanceerde functies toevoegt.

## Oplossing

[Oplossing](./solution/README.md)

## Bonus Uitdagingen

Klaar om je AI-assistent naar een hoger niveau te tillen? Probeer deze geavanceerde uitdagingen die je begrip van AI-integratie en webontwikkeling zullen verdiepen.

### Personalisatie van Persoonlijkheid

De echte magie gebeurt wanneer je je AI-assistent een unieke persoonlijkheid geeft. Experimenteer met verschillende systeemprompts om gespecialiseerde assistenten te creëren:

**Professionele Assistent Voorbeeld:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Creatieve Schrijfhelper Voorbeeld:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Technische Mentor Voorbeeld:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend Verbeteringen

Transformeer je chatinterface met deze visuele en functionele verbeteringen:

**Geavanceerde CSS Functies:**
- **Implementeer** vloeiende berichtanimaties en overgangen
- **Voeg toe** aangepaste chatbubbeldesigns met CSS-vormen en -gradaties
- **Creëer** een typindicatoranimatie voor wanneer de AI "nadenkt"
- **Ontwerp** emoji-reacties of een berichtbeoordelingssysteem

**JavaScript Verbeteringen:**
- **Voeg toe** toetsenbord sneltoetsen (Ctrl+Enter om te verzenden, Escape om invoer te wissen)
- **Implementeer** berichtzoek- en filterfunctionaliteit
- **Creëer** een gespreks-exportfunctie (download als tekst of JSON)
- **Voeg toe** auto-save naar localStorage om berichtverlies te voorkomen

### Geavanceerde AI Integratie

**Meerdere AI Persoonlijkheden:**
- **Creëer** een dropdown om te schakelen tussen verschillende AI-persoonlijkheden
- **Sla op** de voorkeur van de gebruiker in localStorage
- **Implementeer** contextwisseling die de gespreksstroom behoudt

**Slimme Reactie Functies:**
- **Voeg toe** gesprekscontextbewustzijn (AI onthoudt eerdere berichten)
- **Implementeer** slimme suggesties op basis van het gespreksonderwerp  
- **Maak** snelle antwoordknoppen voor veelgestelde vragen  

> 🎯 **Leerdoel**: Deze bonusuitdagingen helpen je geavanceerde webontwikkelingspatronen en AI-integratietechnieken te begrijpen die worden gebruikt in productieapplicaties.  

## Samenvatting en Volgende Stappen  

Gefeliciteerd! Je hebt met succes een complete AI-aangedreven chatassistent vanaf nul gebouwd. Dit project heeft je praktische ervaring gegeven met moderne webontwikkelingstechnologieën en AI-integratie – vaardigheden die steeds waardevoller worden in het huidige technologische landschap.  

### Wat Je Hebt Bereikt  

Tijdens deze les heb je verschillende belangrijke technologieën en concepten onder de knie gekregen:  

**Backend Ontwikkeling:**  
- **Geïntegreerd** met de GitHub Models API voor AI-functionaliteit  
- **Gebouwd** een RESTful API met Flask met correcte foutafhandeling  
- **Geïmplementeerd** veilige authenticatie met behulp van omgevingsvariabelen  
- **Geconfigureerd** CORS voor cross-origin verzoeken tussen frontend en backend  

**Frontend Ontwikkeling:**  
- **Gemaakt** een responsieve chatinterface met semantische HTML  
- **Geïmplementeerd** moderne JavaScript met async/await en een op klassen gebaseerde architectuur  
- **Ontworpen** een aantrekkelijke gebruikersinterface met CSS Grid, Flexbox en animaties  
- **Toegevoegd** toegankelijkheidsfuncties en principes voor responsief ontwerp  

**Full-Stack Integratie:**  
- **Verbonden** frontend en backend via HTTP API-aanroepen  
- **Afgehandeld** realtime gebruikersinteracties en asynchrone gegevensstromen  
- **Geïmplementeerd** foutafhandeling en gebruikersfeedback door de hele applicatie  
- **Getest** de volledige applicatieworkflow van gebruikersinvoer tot AI-reactie  

### Belangrijke Leerresultaten  

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
  
Dit project heeft je geïntroduceerd in de basisprincipes van het bouwen van AI-aangedreven applicaties, wat de toekomst van webontwikkeling vertegenwoordigt. Je begrijpt nu hoe je AI-functionaliteiten kunt integreren in traditionele webapplicaties, waardoor je boeiende gebruikerservaringen kunt creëren die intelligent en responsief aanvoelen.  

### Professionele Toepassingen  

De vaardigheden die je in deze les hebt ontwikkeld, zijn direct toepasbaar in moderne softwareontwikkelingscarrières:  

- **Full-stack webontwikkeling** met moderne frameworks en API's  
- **AI-integratie** in webapplicaties en mobiele apps  
- **API-ontwerp en -ontwikkeling** voor microservices-architecturen  
- **Ontwikkeling van gebruikersinterfaces** met focus op toegankelijkheid en responsief ontwerp  
- **DevOps-praktijken** inclusief omgevingsconfiguratie en implementatie  

### Je AI-ontwikkelingsreis Voortzetten  

**Volgende Leer Stappen:**  
- **Verken** meer geavanceerde AI-modellen en API's (GPT-4, Claude, Gemini)  
- **Leer** over prompt-engineeringtechnieken voor betere AI-reacties  
- **Bestudeer** gespreksontwerp en principes voor chatbotgebruikerservaring  
- **Onderzoek** AI-veiligheid, ethiek en verantwoordelijke AI-ontwikkelingspraktijken  
- **Bouw** complexere applicaties met gespreksgeheugen en contextbewustzijn  

**Geavanceerde Projectideeën:**  
- Multi-user chatrooms met AI-moderatie  
- AI-aangedreven klantenservice chatbots  
- Educatieve tutor-assistenten met gepersonaliseerd leren  
- Creatieve schrijfpartners met verschillende AI-persoonlijkheden  
- Technische documentatie-assistenten voor ontwikkelaars  

## Aan de Slag met GitHub Codespaces  

Wil je dit project uitproberen in een cloudontwikkelingsomgeving? GitHub Codespaces biedt een complete ontwikkelomgeving in je browser, perfect om te experimenteren met AI-applicaties zonder lokale installatievereisten.  

### Je Ontwikkelomgeving Instellen  

**Stap 1: Maak vanuit Template**  
- **Ga naar** de [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Klik** op "Use this template" in de rechterbovenhoek (zorg ervoor dat je bent ingelogd op GitHub)  

![Interface voor het maken van een template met de groene knop "Use this template"](../../../translated_images/nl/template.67ad477109d29a2b.webp)  

**Stap 2: Codespaces Starten**  
- **Open** je nieuw aangemaakte repository  
- **Klik** op de groene knop "Code" en selecteer "Codespaces"  
- **Kies** "Create codespace on main" om je ontwikkelomgeving te starten  

![Interface voor het maken van een codespace met opties voor het starten van een cloudontwikkelingsomgeving](../../../translated_images/nl/codespace.bcecbdf5d2747d3d.webp)  

**Stap 3: Omgevingsconfiguratie**  
Zodra je Codespace is geladen, heb je toegang tot:  
- **Vooraf geïnstalleerde** Python, Node.js en alle benodigde ontwikkeltools  
- **VS Code-interface** met extensies voor webontwikkeling  
- **Terminaltoegang** voor het uitvoeren van backend- en frontendservers  
- **Port forwarding** voor het testen van je applicaties  

**Wat Codespaces biedt:**  
- **Elimineert** problemen met lokale omgevingsinstellingen en configuratie  
- **Biedt** een consistente ontwikkelomgeving op verschillende apparaten  
- **Inclusief** vooraf geconfigureerde tools en extensies voor webontwikkeling  
- **Maakt** naadloze integratie met GitHub mogelijk voor versiebeheer en samenwerking  

> 🚀 **Pro Tip**: Codespaces is perfect voor leren en prototypen van AI-applicaties, omdat het alle complexe omgevingsinstellingen automatisch afhandelt, zodat jij je kunt concentreren op bouwen en leren in plaats van op configuratieproblemen.  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.