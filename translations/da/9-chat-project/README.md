<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-06T23:24:19+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "da"
}
-->
# Byg en Chat-assistent med AI

Kan du huske i Star Trek, da besætningen afslappet talte med skibets computer, stillede den komplekse spørgsmål og fik gennemførte svar? Hvad der virkede som ren science fiction i 1960’erne, er nu noget, du kan bygge ved hjælp af webteknologier, du allerede kender.

I denne lektion skaber vi en AI-chatassistent ved hjælp af HTML, CSS, JavaScript og en backend-integration. Du vil opdage, hvordan de samme færdigheder, du har lært, kan forbinde til kraftfulde AI-tjenester, som kan forstå kontekst og generere meningsfulde svar.

Tænk på AI som adgang til et enormt bibliotek, der ikke blot kan finde information, men også syntetisere det til sammenhængende svar, der er skræddersyet til dine specifikke spørgsmål. I stedet for at gennemgå tusindvis af sider får du direkte, kontekstuelle svar.

Integrationen sker gennem velkendte webteknologier, der arbejder sammen. HTML skaber chatgrænsefladen, CSS håndterer det visuelle design, JavaScript styrer brugerinteraktioner, og en backend-API forbinder det hele til AI-tjenester. Det ligner, hvordan forskellige sektioner i et orkester samarbejder for at skabe en symfoni.

Vi bygger i bund og grund en bro mellem naturlig menneskelig kommunikation og maskinbehandling. Du lærer både den tekniske implementering af AI-tjenesteintegration og designmønstrene, der gør interaktioner intuitive.

Ved slutningen af denne lektion vil AI-integration føles mindre som en mystisk proces og mere som en hvilken som helst anden API, du kan arbejde med. Du vil forstå de grundlæggende mønstre, der driver applikationer som ChatGPT og Claude, ved at bruge de samme webudviklingsprincipper, du allerede har lært.

## ⚡ Hvad Du Kan Nå på de Næste 5 Minutter

**Hurtig Startvej for Travle Udviklere**

```mermaid
flowchart LR
    A[⚡ 5 minutter] --> B[Få GitHub-token]
    B --> C[Test AI legeplads]
    C --> D[Kopiér Python-kode]
    D --> E[Se AI-svar]
```
- **Minut 1**: Besøg [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) og opret en personlig adgangstoken
- **Minut 2**: Test AI-interaktioner direkte i playground-grænsefladen
- **Minut 3**: Klik på fanen "Code" og kopier Python-koden
- **Minut 4**: Kør koden lokalt med din token: `GITHUB_TOKEN=your_token python test.py`
- **Minut 5**: Se dit første AI-svar genereres fra din egen kode

**Hurtig Testkode**:
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

**Hvorfor det betyder noget**: På 5 minutter vil du opleve magien ved programmeret AI-interaktion. Dette repræsenterer grundstenen, der driver alle AI-applikationer, du bruger.

Sådan vil dit færdige projekt se ud:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/screenshot.0a1ee0d123df681b.da.png)

## 🗺️ Din Læringsrejse Gennem AI-applikationsudvikling

```mermaid
journey
    title Fra Webudvikling til AI-Integration
    section Forståelse af AI-Grundlag
      Opdag generative AI-koncepter: 4: You
      Udforsk GitHub Models platform: 6: You
      Mestre AI-parametre og prompts: 8: You
    section Backend Integration
      Byg Python API-server: 5: You
      Implementer AI-funktionskald: 7: You
      Håndter asynkrone operationer: 8: You
    section Frontend Udvikling
      Skab moderne chatgrænseflade: 6: You
      Mestre realtidsinteraktioner: 8: You
      Byg responsiv brugeroplevelse: 9: You
    section Professionel Anvendelse
      Udrul komplet AI-system: 7: You
      Optimer ydelsesmønstre: 8: You
      Skab produktionsklar app: 9: You
```
**Dit Mål for Rejsen**: Ved lektionens afslutning har du bygget en komplet AI-drevet applikation med de samme teknologier og mønstre, der driver moderne AI-assistenter som ChatGPT, Claude og Google Bard.

## Forstå AI: Fra Mystik til Mestring

Før vi dykker ned i koden, lad os forstå, hvad vi arbejder med. Hvis du har brugt API’er før, kender du det grundlæggende mønster: sende en anmodning, modtage et svar.

AI-API’er følger en lignende struktur, men i stedet for at hente forudlagrede data fra en database genererer de nye svar baseret på mønstre lært fra enorme mængder tekst. Tænk på det som forskellen mellem et bibliotekskatalog og en kyndig bibliotekar, der kan syntetisere information fra flere kilder.

### Hvad er "Generativ AI" Egentlig?

Tænk på, hvordan Rosetta-stenen gjorde det muligt for forskere at forstå egyptiske hieroglyffer ved at finde mønstre mellem kendte og ukendte sprog. AI-modeller arbejder på samme måde – de finder mønstre i enorme tekstmængder for at forstå, hvordan sprog fungerer, og bruger derefter disse mønstre til at generere passende svar på nye spørgsmål.

**Lad mig forklare det med en simpel sammenligning:**
- **Traditionel database**: Som at bede om din fødselsattest – du får det samme dokument hver gang
- **Søgemaskine**: Som at bede en bibliotekar finde bøger om katte – de viser dig, hvad der er tilgængeligt
- **Generativ AI**: Som at spørge en vidende ven om katte – de fortæller dig interessante ting med deres egne ord, tilpasset det, du vil vide

```mermaid
graph LR
    A[Dit Spørgsmål] --> B[AI Model]
    B --> C[Mønster Genkendelse]
    C --> D[Indholds Generering]
    D --> E[Kontekstuel Respons]
    
    F[Træningsdata<br/>Bøger, Artikler, Web] --> B
```
### Hvordan AI-modeller Lærer (Den Enkle Version)

AI-modeller lærer gennem eksponering for enorme datasæt indeholdende tekst fra bøger, artikler og samtaler. Gennem denne proces identificerer de mønstre i:
- Hvordan tanker struktureres i skriftlig kommunikation
- Hvilke ord der ofte optræder sammen
- Hvordan samtaler typisk flyder
- Kontekstuelle forskelle mellem formel og uformel kommunikation

**Det svarer til, hvordan arkæologer afkoder gamle sprog**: de analyserer tusinder af eksempler for at forstå grammatik, ordforråd og kulturel kontekst, og bliver til sidst i stand til at tolke nye tekster ved hjælp af disse lærte mønstre.

### Hvorfor GitHub Models?

Vi bruger GitHub Models af en praktisk årsag – det giver os adgang til AI på virksomhedsniveau uden at skulle opsætte vores egen AI-infrastruktur (hvilket du for resten ikke har lyst til lige nu!). Tænk på det som at bruge en vejr-API i stedet for selv at oprette vejrstationer overalt.

Det er i bund og grund "AI-som-en-Service", og det bedste? Det er gratis at komme i gang med, så du kan eksperimentere uden bekymring om store regninger.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Din Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Modelbehandling]
    D --> C
    C --> B
    B --> A
```
Vi bruger GitHub Models til vores backend-integration, som giver adgang til professionelle AI-kapaciteter gennem en udviklervenlig grænseflade. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) fungerer som et testmiljø, hvor du kan prøve forskellige AI-modeller og forstå deres egenskaber, før du implementerer dem i kode.

## 🧠 AI-applikationsudviklingsøkosystem

```mermaid
mindmap
  root((AI Udvikling))
    Forståelse af AI
      Generative Modeller
        Mønster Genkendelse
        Indhold Generering
        Kontekst Forståelse
        Svar Syntese
      AI Parametre
        Temperatur Kontrol
        Token Grænser
        Top-p Filtrering
        System Prompter
    Backend Arkitektur
      API Integration
        GitHub Modeller
        Autentificering
        Forespørgsels Håndtering
        Fejl Håndtering
      Python Infrastruktur
        FastAPI Framework
        Async Operationer
        Miljø Sikkerhed
        CORS Konfiguration
    Frontend Oplevelse
      Chat Interface
        Real-time Opdateringer
        Besked Historik
        Bruger Feedback
        Indlæsnings Tilstande
      Moderne Web Teknologi
        ES6 Klasser
        Async/Await
        DOM Manipulation
        Event Håndtering
    Professionelle Mønstre
      Sikkerheds Bedste Praksis
        Token Håndtering
        Input Validering
        XSS Forebyggelse
        Fejlgrænser
      Produktionsberedskab
        Ydelsesoptimering
        Responsivt Design
        Tilgængelighed
        Test Strategier
```
**Kerneprincip**: AI-applikationsudvikling kombinerer traditionelle webudviklingsfærdigheder med AI-tjenesteintegration for at skabe intelligente applikationer, der føles naturlige og responsive for brugerne.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/playground.d2b927122224ff8f.da.png)

**Det der gør playground så nyttig:**
- **Prøv** forskellige AI-modeller som GPT-4o-mini, Claude og andre (alle gratis!)
- **Test** dine idéer og prompts inden du skriver kode
- **Få** klar-til-brug kodeeksempler i dit foretrukne programmeringssprog
- **Juster** indstillinger som kreativitet og svarlængde for at se, hvordan de påvirker output

Når du har prøvet lidt, klik bare på fanen "Code" og vælg dit programmersprog for at få den nødvendige implementeringskode.

![Playground choice showing code generation options for different programming languages](../../../translated_images/playground-choice.1d23ba7d407f4758.da.png)

## Opsætning af Python Backend Integration

Lad os nu implementere AI-integrationen med Python. Python er fremragende til AI-applikationer pga. sin simple syntaks og kraftfulde biblioteker. Vi starter med koden fra GitHub Models playground og refaktorerer den derefter til en genanvendelig, produktionsklar funktion.

### Forstå den Grundlæggende Implementering

Når du henter Python-koden fra playground, får du noget, der ligner dette. Bare rolig, hvis det virker meget til at starte med – lad os gennemgå det stykke for stykke:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# For at godkende med modellen skal du generere et personligt adgangstoken (PAT) i dine GitHub-indstillinger.
# Opret dit PAT-token ved at følge instruktionerne her: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Det der sker i denne kode:**
- **Vi importerer** de nødvendige værktøjer: `os` til at læse miljøvariabler og `OpenAI` til at kommunikere med AI
- **Vi opsætter** OpenAI-klienten til at pege på GitHubs AI-servere i stedet for direkte OpenAI
- **Vi autentificerer** med en særlig GitHub-token (mere om det om lidt!)
- **Vi strukturerer** vores samtale med forskellige "roller" – tænk på det som at sætte scenen for et skuespil
- **Vi sender** vores anmodning til AI med nogle finjusteringsparametre
- **Vi udtrækker** det faktiske svartekst fra al den data, der kommer tilbage

### Forståelse af Beskedsroller: AI-samtalens Rammeværk

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
- **System-rollen**: Som scenemanuskript for en skuespiller – den fortæller AI, hvordan den skal opføre sig, hvilken personlighed den skal have og hvordan den skal svare
- **Bruger-rollen**: Det egentlige spørgsmål eller besked fra den, der bruger din applikation
- **Assistent-rollen**: AIs svar (det sender du ikke, men det vises i samtalehistorikken)

**Virkelighedsfaglig analogi**: Forestil dig, at du præsenterer en ven for en anden til en fest:
- **Systembesked**: "Det her er min ven Sarah, hun er læge og er rigtig god til at forklare medicinske begreber i enkle termer"
- **Brugerbesked**: "Kan du forklare, hvordan vacciner virker?"
- **Assistentbesked**: Sarah svarer som en venlig læge, ikke som advokat eller kok

### Forstå AI-parametre: Finjustering af Svaradfærd

De numeriske parametre i AI-API-kald kontrollerer, hvordan modellen genererer svar. Disse indstillinger giver dig mulighed for at justere AIs adfærd til forskellige formål:

#### Temperatur (0,0 til 2,0): Kreativitetsdrejeknappen

**Hvad den gør**: Styrer, hvor kreativ eller forudsigelig AIs svar bliver.

**Tænk på det som en jazzmusikers improvisationsniveau:**
- **Temperatur = 0,1**: Spiller den nøjagtige samme melodi hver gang (meget forudsigelig)
- **Temperatur = 0,7**: Tilføjer nogle smagfulde variationer, mens det stadig er genkendeligt (balanceret kreativitet)
- **Temperatur = 1,5**: Fuld eksperimentel jazz med uventede drejninger (meget uforudsigeligt)

```python
# Meget forudsigelige svar (godt til faktuelle spørgsmål)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Vil næsten altid sige "4"
)

# Kreative svar (godt til brainstorm)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Vil generere unikke, uventede historier
)
```

#### Max Tokens (1 til 4096+): Kontrol af Svarets Længde

**Hvad den gør**: Sætter en grænse for, hvor langt AIs svar kan være.

**Tænk på tokens som omtrent svarende til ord** (ca. 1 token = 0,75 ord på engelsk):
- **max_tokens=50**: Kort og godt (som en sms)
- **max_tokens=500**: Et pænt afsnit eller to
- **max_tokens=2000**: En detaljeret forklaring med eksempler

```python
# Korte, præcise svar
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Tvinger en kort forklaring
)

# Detaljerede, omfattende svar
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Muliggør detaljerede forklaringer med eksempler
)
```

#### Top_p (0,0 til 1,0): Fokusparameteren

**Hvad den gør**: Kontrollerer, hvor fokuseret AI er på de mest sandsynlige svar.

**Forestil dig at AI har et kæmpe ordforråd, rangeret efter sandsynlighed:**
- **top_p=0,1**: Overvejer kun de 10 % mest sandsynlige ord (meget fokuseret)
- **top_p=0,9**: Overvejer 90 % af mulige ord (mere kreativ)
- **top_p=1,0**: Overvejer alt (maksimal variation)

**For eksempel**: Hvis du spørger "Himmelen er normalt..."
- **Lav top_p**: Siger næsten altid "blå"
- **Høj top_p**: Kan sige "blå", "skyet", "uendelig", "foranderlig", "smuk" osv.

### Sætte Det Hele Sammen: Parameterkombinationer til Forskellige Brug

```python
# For faktuelle, konsistente svar (som en dokumentationsbot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Til kreativ skrivehjælp
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Til samtaleorienterede, hjælpsomme svar (afbalanceret)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title AI Parameteroptimeringsmatrix
    x-axis Lav Kreativitet --> Høj Kreativitet
    y-axis Kort Respons --> Lang Respons
    
    quadrant-1 Kreativt Indhold
    quadrant-2 Detaljeret Analyse
    quadrant-3 Hurtige Fakta
    quadrant-4 Samtale-AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Hvorfor disse parametre er vigtige**: Forskellige applikationer har brug for forskellige typer svar. En kundeservicebot bør være konsekvent og faktuel (lav temperatur), mens en kreativ skriveassistent skal være fantasifuld og varieret (høj temperatur). At forstå disse parametre giver dig kontrol over din AIs personlighed og svarstil.
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

**Forstå denne forbedrede funktion:**
- **Accepterer** to parametre: brugerens prompt og en valgfri systembesked
- **Tilbyder** en standard systembesked for generel assistentadfærd
- **Bruger** korrekte Python typeangivelser til bedre kodetekst
- **Inkluderer** en detaljeret docstring, der forklarer funktionens formål og parametre
- **Returnerer** kun svarindholdet, så det er nemt at bruge i vores web-API
- **Vedligeholder** de samme modelparametre for konsistent AI-adfærd

### Magien ved Systemprompter: Programmering af AI-personlighed

Hvis parametre styrer, hvordan AI tænker, styrer systemprompter, hvem AI tror, den er. Dette er ærligt talt en af de fedeste dele ved at arbejde med AI – du giver AI en komplet personlighed, fagligt niveau og kommunikationsstil.

**Tænk på systemprompter som at caste forskellige skuespillere til forskellige roller**: I stedet for én generisk assistent kan du skabe specialiserede eksperter til forskellige situationer. Brug for en tålmodig lærer? En kreativ brainstormingpartner? En seriøs forretningsrådgiver? Bare skift systemprompten!

#### Hvorfor Systemprompter Er Så Kraftfulde

Her er det fascinerende: AI-modeller er trænet på utallige samtaler, hvor folk påtager sig forskellige roller og ekspertiseniveauer. Når du giver AI en specifik rolle, er det som at trykke på en kontakt, der aktiverer alle de lærte mønstre.

**Det svarer til metode-skuespil for AI**: Sig til en skuespiller "du er en klog, gammel professor" og se, hvordan de automatisk tilpasser kropsholdning, ordvalg og manerer. AI gør noget bemærkelsesværdigt lignende med sprog.

#### Skabelse af Effektive Systemprompter: Kunsten og Videnskaben

**Anatomien af en god systemprompt:**
1. **Rolle/Identitet**: Hvem er AI?
2. **Ekspertise**: Hvad ved den?
3. **Kommunikationsstil**: Hvordan taler den?
4. **Specifikke instruktioner**: Hvad skal den fokusere på?

```python
# ❌ Uklar systemprompt
"You are helpful."

# ✅ Detaljeret, effektiv systemprompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Systemprompt-eksempler med kontekst

Lad os se, hvordan forskellige systemprompter skaber helt forskellige AI-personligheder:

```python
# Eksempel 1: Den tålmodige lærer
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Eksempel 2: Den kreative samarbejdspartner
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Eksempel 3: Den strategiske forretningsrådgiver
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Se Systemprompter i Aktion

Lad os teste det samme spørgsmål med forskellige systemprompter for at se de dramatiske forskelle:

**Spørgsmål**: "Hvordan håndterer jeg brugerautentifikation i min webapp?"

```python
# Med lærer-prompt:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typisk svar: "Godt spørgsmål! Lad os opdele autentificering i simple trin.
# Tænk på det som en natklub dørmand, der tjekker ID'er..."

# Med forretningsprompt:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typisk svar: "Set fra et strategisk perspektiv er autentificering afgørende for bruger
# tillid og overholdelse af regler. Lad mig skitsere en ramme, der tager højde for sikkerhed,
# brugeroplevelse og skalerbarhed..."
```

#### Avancerede Systemprompt-teknikker

**1. Kontekstopsætning**: Giv AI baggrundsinformation  
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Outputformatering**: Fortæl AI'en, hvordan svar skal struktureres  
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
  
**3. Begrænsningsindstilling**: Definer, hvad AI'en IKKE skal gøre  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### Hvorfor dette er vigtigt for din chatassistent

Forståelse af systemprompter giver dig utrolig magt til at skabe specialiserede AI-assistenter:  
- **Kundeservicebot**: Hjælpsom, tålmodig, politik-kyndig  
- **Læringsvejleder**: Opmuntrende, trin-for-trin, tjekker forståelse  
- **Kreativ partner**: Fantasifuld, bygger videre på ideer, spørger "hvad nu hvis?"  
- **Teknisk ekspert**: Præcis, detaljeret, sikkerhedsbevidst

**Den centrale indsigt**: Du kalder ikke bare en AI API – du skaber en brugerdefineret AI-personlighed, der tjener dit specifikke brugsscenarie. Det er det, der gør moderne AI-applikationer skræddersyede og nyttige i stedet for generiske.

### 🎯 Pædagogisk tjek-in: AI-personlighedsprogrammering

**Pause og reflekter**: Du har netop lært at programmere AI-personligheder via systemprompter. Dette er en grundlæggende færdighed i moderne AI-applikationsudvikling.

**Hurtig selvvurdering**:  
- Kan du forklare, hvordan systemprompter adskiller sig fra almindelige brugermeddelelser?  
- Hvad er forskellen på temperatur- og top_p-parametre?  
- Hvordan ville du skabe en systemprompt for et specifikt brugsscenarie (f.eks. en kodevejleder)?

**Virkelighedsnær forbindelse**: De systemprompt-teknikker, du har lært, bruges i alle større AI-applikationer – fra GitHub Copilots kodeassistance til ChatGPT's samtalegrænseflade. Du mestrer de samme mønstre, som AI-produktteams bruger hos store tech-virksomheder.

**Udfordrende spørgsmål**: Hvordan kunne du designe forskellige AI-personligheder til forskellige brugertyper (begynder vs ekspert)? Overvej, hvordan det samme underliggende AI-model kunne betjene forskellige målgrupper via prompt-engineering.

## Byg Web API'en med FastAPI: Dit Højtydende AI-kommunikationsknudepunkt

Lad os nu bygge backend'en, der forbinder din frontend med AI-tjenester. Vi vil bruge FastAPI, et moderne Python-framework, som er fremragende til at bygge API’er til AI-applikationer.

FastAPI tilbyder flere fordele for denne type projekt: indbygget asynkron støtte til håndtering af samtidige forespørgsler, automatisk API-dokumentationsgenerering og fremragende ydeevne. Din FastAPI-server fungerer som en mellemliggende del, der modtager forespørgsler fra frontend, kommunikerer med AI-tjenesterne og returnerer formaterede svar.

### Hvorfor FastAPI til AI-applikationer?

Du tænker måske: "Kan jeg ikke bare kalde AI direkte fra min frontend JavaScript?" eller "Hvorfor FastAPI frem for Flask eller Django?" Gode spørgsmål!

**Her er hvorfor FastAPI er perfekt til det, vi bygger:**  
- **Async som standard**: Kan jonglere flere AI-forespørgsler samtidig uden at hænge fast  
- **Automatisk dokumentation**: Besøg `/docs` og få en flot, interaktiv API-dokumentationsside gratis  
- **Indbygget validering**: Fanger fejl, før de skaber problemer  
- **Lynhurtig**: Et af de hurtigste Python-frameworks overhovedet  
- **Moderne Python**: Bruger alle de nyeste og bedste Python-funktioner

**Og her er hvorfor vi overhovedet har brug for en backend:**

**Sikkerhed**: Dit AI API-nøgle er som en adgangskode – hvis du lægger den i frontend JavaScript, kan alle, der ser din hjemmesides kildekode, stjæle den og bruge dine AI-kreditter. Backend'en holder følsomme legitimationsoplysninger sikre.

**Ratebegrænsning & kontrol**: Backend'en lader dig styre, hvor ofte brugere kan sende forespørgsler, implementere brugerautentifikation og tilføje logning for at spore brug.

**Databehandling**: Du vil måske gemme samtaler, filtrere upassende indhold eller kombinere flere AI-tjenester. Backend'en er stedet, hvor denne logik hører hjemme.

**Arkitekturen minder om en klient-server-model:**  
- **Frontend**: Brugergrænsefladelag til interaktion  
- **Backend API**: Forespørgselsbehandling og routering  
- **AI-tjeneste**: Ekstern udregning og svargenerering  
- **Miljøvariabler**: Sikker konfigurations- og legitimationslagring

### Forståelse af forespørgsels- og svarflowet

Lad os følge, hvad der sker, når en bruger sender en besked:

```mermaid
sequenceDiagram
    participant User as 👤 Bruger
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI Service
    
    User->>Frontend: Taster "Hej AI!"
    Frontend->>API: POST /hello {"message": "Hej AI!"}
    Note over API: Validerer forespørgsel<br/>Tilføjer systemprompt
    API->>AI: Sender formateret forespørgsel
    AI->>API: Returnerer AI svar
    Note over API: Behandler svar<br/>Logger samtale
    API->>Frontend: {"response": "Hej! Hvordan kan jeg hjælpe?"}
    Frontend->>User: Viser AI besked
```  
**Forstå hvert trin:**  
1. **Brugerinteraktion**: Personen skriver i chatgrænsefladen  
2. **Frontend-behandling**: JavaScript fanger input og formaterer det som JSON  
3. **API-validering**: FastAPI validerer automatisk forespørgslen vha. Pydantic-modeller  
4. **AI-integration**: Backend tilføjer kontekst (systemprompt) og kalder AI-tjenesten  
5. **Svarhåndtering**: API modtager AI-svar og kan ændre det efter behov  
6. **Frontend-visning**: JavaScript viser svaret i chatgrænsefladen

### Forståelse af API-arkitekturen

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hej AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API forespørgsel
    GitHub Models->>AI Function: AI svar
    AI Function->>FastAPI: svar tekst
    FastAPI->>Frontend: {"response": "Hej! Hvordan kan jeg hjælpe?"}
```  
```mermaid
flowchart TD
    A[Brugerinput] --> B[Frontend Validering]
    B --> C[HTTP POST Anmodning]
    C --> D[FastAPI Router]
    D --> E[Pydantic Validering]
    E --> F[AI Funktionskald]
    F --> G[GitHub Models API]
    G --> H[Svarbehandling]
    H --> I[JSON Svar]
    I --> J[Frontend Opdatering]
    
    subgraph "Sikkerhedslag"
        K[CORS Middleware]
        L[Miljøvariabler]
        M[Fejlhåndtering]
    end
    
    D --> K
    F --> L
    H --> M
```  
### Oprettelse af FastAPI-applikationen

Lad os bygge vores API trin for trin. Opret en fil med navnet `api.py` med følgende FastAPI-kode:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfigurer logning
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Opret FastAPI-applikation
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfigurer CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Konfigurer passende til produktion
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic-modeller til anmodnings-/responsvalidering
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
        # Udtræk og valider besked
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Kald AI-service (bemærk: call_llm bør laves asynkron for bedre ydeevne)
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
- **Aktiverer** CORS-middleware for at tillade frontend-forespørgsler fra forskellige oprindelser  
- **Definerer** Pydantic-modeller til automatisk validering af forespørgsler/svar og dokumentation  
- **Bruger** asynkrone endpoints for bedre ydeevne ved samtidige forespørgsler  
- **Implementerer** korrekte HTTP-statuskoder og fejlhåndtering med HTTPException  
- **Inkluderer** struktureret logning til overvågning og fejlfinding  
- **Tilbyder** et health check-endpoint til overvågning af servicestatus

**Nøglefordele ved FastAPI over traditionelle frameworks:**  
- **Automatisk validering**: Pydantic-modeller sikrer data-integritet før behandling  
- **Interaktive docs**: Besøg `/docs` for automatisk genereret, testbar API-dokumentation  
- **Typsikkerhed**: Python type hints forebygger runtime-fejl og forbedrer kodekvalitet  
- **Async support**: Håndter flere AI-forespørgsler samtidigt uden blokering  
- **Ydeevne**: Markant hurtigere forespørgselsbehandling til realtidsapplikationer

### Forståelse af CORS: Webens sikkerhedsvagt

CORS (Cross-Origin Resource Sharing) er som en sikkerhedsvagt ved en bygning, der tjekker, om besøgende må komme ind. Lad os forstå, hvorfor det betyder noget, og hvordan det påvirker din applikation.

#### Hvad er CORS, og hvorfor findes det?

**Problemet**: Forestil dig, at enhver hjemmeside kunne sende forespørgsler til din banks hjemmeside på dine vegne uden din tilladelse. Det ville være et sikkerhedsmareridt! Browsere forhindrer dette som standard gennem "Same-Origin Policy."

**Same-Origin Policy**: Browsere tillader kun, at websider sender forespørgsler til samme domæne, port og protokol, som de blev indlæst fra.

**Virkelighedslignelse**: Det er som sikkerheden i en lejlighedsbygning – kun beboere (samme oprindelse) kan som standard komme ind. Vil du lade en ven (anden oprindelse) besøge, skal du eksplicit fortælle sikkerhedsvagten, at det er i orden.

#### CORS i dit udviklingsmiljø

Under udvikling kører din frontend og backend på forskellige porte:  
- Frontend: `http://localhost:3000` (eller file:// hvis HTML åbnes direkte)  
- Backend: `http://localhost:5000`

Disse betragtes som "forskellige oprindelser," selvom de kører på samme computer!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Dette fortæller browsere: "Det er i orden, at andre oprindelser foretager forespørgsler til dette API"
```
  
**Hvad CORS-konfiguration gør i praksis:**  
- **Tilføjer** særlige HTTP-headere til API-svar, der fortæller browsere "denne cross-origin-forespørgsel er tilladt"  
- **Håndterer** "preflight" forespørgsler (browsere tjekker nogle gange tilladelser, før den egentlige forespørgsel sendes)  
- **Forhindrer** den frygtede fejlkode "blokeret af CORS-politik" i din browserkonsol

#### CORS-sikkerhed: Udvikling vs produktion

```python
# 🚨 Udvikling: Tillader ALLE oprindelser (praktisk men usikkert)
CORS(app)

# ✅ Produktion: Tillad kun dit specifikke frontend-domæne
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Avanceret: Forskellige oprindelser for forskellige miljøer
if app.debug:  # Udviklingstilstand
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Produktionstilstand
    CORS(app, origins=["https://yourdomain.com"])
```
  
**Hvorfor det betyder noget**: I udvikling er `CORS(app)` som at lade din hoveddør stå ulåst – bekvemt, men ikke sikkert. I produktion vil du specificere præcis hvilke hjemmesider, der må tale med din API.

#### Almindelige CORS-scenarier og løsninger

| Scenario | Problem | Løsning |  
|----------|---------|----------|  
| **Lokal udvikling** | Frontend kan ikke nå backend | Tilføj CORSMiddleware til FastAPI |  
| **GitHub Pages + Heroku** | Udrullet frontend kan ikke nå API | Tilføj din GitHub Pages URL til CORS oprindelser |  
| **Custom domæne** | CORS-fejl i produktion | Opdater CORS oprindelser til at matche dit domæne |  
| **Mobilapp** | App kan ikke nå web-API | Tilføj dit apps domæne eller brug `*` med omhu |

**Pro tip**: Du kan tjekke CORS-headere i browserens udviklerværktøjer under fanen Netværk. Kig efter headere som `Access-Control-Allow-Origin` i svaret.

### Fejlhåndtering og validering

Bemærk, hvordan vores API inkluderer korrekt fejlhåndtering:

```python
# Bekræft, at vi har modtaget en besked
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Nøgleprincipper for validering:**  
- **Tjekker** for påkrævede felter før behandling af forespørgsler  
- **Returnerer** meningsfulde fejlbeskeder i JSON-format  
- **Bruger** passende HTTP-statuskoder (400 for dårlige forespørgsler)  
- **Giver** klar feedback, der hjælper frontend-udviklere med at debugge problemer

## Opsætning og kørsel af din backend

Nu hvor vi har AI-integration og FastAPI-server klar, lad os få det hele til at køre. Opsætningsprocessen involverer installation af Python-afhængigheder, konfiguration af miljøvariabler og start af din udviklingsserver.

### Python-miljøopsætning

Lad os opsætte dit Python-udviklingsmiljø. Virtuelle miljøer er som Manhattan-projektets afdelte tilgang – hvert projekt får sin egen isolerede plads med specifikke værktøjer og afhængigheder, som forhindrer konflikter mellem projekter.

```bash
# Gå til din backend-mappe
cd backend

# Opret et virtuelt miljø (som at oprette et rengøringsrum til dit projekt)
python -m venv venv

# Aktivér det (Linux/Mac)
source ./venv/bin/activate

# På Windows, brug:
# venv\Scripts\activate

# Installer det gode stuff
pip install openai fastapi uvicorn python-dotenv
```
  
**Hvad vi lige gjorde:**  
- **Oprettede** vores egen lille Python-boble, hvor vi kan installere pakker uden at påvirke andet  
- **Aktiverede** den, så terminalen ved at bruge dette specifikke miljø  
- **Installerede** det væsentlige: OpenAI til AI-magi, FastAPI til vores web-API, Uvicorn til faktisk at køre den, og python-dotenv til sikker håndtering af hemmeligheder

**Nøgletillæg forklaret:**  
- **FastAPI**: Moderne, hurtigt web-framework med automatisk API-dokumentation  
- **Uvicorn**: Lynhurtig ASGI-server, der kører FastAPI-applikationer  
- **OpenAI**: Officiel bibliotek til GitHub Models og OpenAI API-integration  
- **python-dotenv**: Sikker indlæsning af miljøvariabler fra .env-filer

### Miljøkonfiguration: Hold hemmeligheder sikre

Før vi starter API'en, skal vi tale om en af de vigtigste lektioner i webudvikling: hvordan man faktisk holder sine hemmeligheder hemmelige. Miljøvariabler er som et sikkert pengeskab, som kun din applikation har adgang til.

#### Hvad er miljøvariabler?

**Tænk på miljøvariabler som en sikkerhedsboks** – du lægger dine værdifulde ting deri, og kun du (og din app) har nøglen til at få dem ud. I stedet for at skrive følsomme oplysninger direkte i koden (hvor bogstaveligt talt alle kan se dem), opbevarer du dem sikkert i miljøet.

**Her er forskellen:**  
- **Den forkerte måde**: Skrive din adgangskode på en seddel og sætte den på din skærm  
- **Den rigtige måde**: Holde din adgangskode i en sikker adgangskodehåndtering, som kun du kan tilgå

#### Hvorfor miljøvariabler betyder noget

```python
# 🚨 GØR ALDRIG DETTE - API-nøgle synlig for alle
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Alle kan stjæle denne!
    base_url="https://models.github.ai/inference"
)

# ✅ GØR DETTE - API-nøgle gemt sikkert
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Kun din app kan få adgang til denne
    base_url="https://models.github.ai/inference"
)
```
  
**Hvad der sker, når du hardcoder hemmeligheder:**  
1. **Versionskontrol-eksponering**: Alle med adgang til dit Git-repository ser din API-nøgle  
2. **Offentlige repositories**: Hvis du pusher til GitHub, er din nøgle synlig for hele internettet  
3. **Teamdeling**: Andre udviklere på projektet får adgang til din personlige API-nøgle  
4. **Sikkerhedsbrud**: Hvis nogen stjæler din API-nøgle, kan de bruge dine AI-kreditter

#### Opsætning af din miljøfil

Opret en `.env`-fil i din backend-mappe. Denne fil gemmer dine hemmeligheder lokalt:

```bash
# .env fil - Denne bør ALDRIG committes til Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**Forståelse af .env-filen:**  
- **Én hemmelighed per linje** i formatet `KEY=value`  
- **Ingen mellemrum** omkring lighedstegnet  
- **Ingen citationstegn** nødvendigt omkring værdier (som regel)  
- **Kommentarer** starter med `#`

#### Oprettelse af dit GitHub Personlige Adgangstoken

Dit GitHub-token er som en særlig adgangskode, der giver din applikation tilladelse til at bruge GitHubs AI-tjenester:

**Trin-for-trin tokenoprettelse:**  
1. **Gå til GitHub Settings** → Developer settings → Personal access tokens → Tokens (classic)  
2. **Klik på "Generate new token (classic)"**  
3. **Sæt udløbsdato** (30 dage til test, længere til produktion)  
4. **Vælg scopes**: Marker "repo" og eventuelle andre nødvendige tilladelser  
5. **Generer token** og kopier det med det samme (det kan ikke ses igen!)  
6. **Indsæt i din .env-fil**

```bash
# Eksempel på hvordan dit token ser ud (dette er falsk!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### Indlæsning af miljøvariabler i Python

```python
import os
from dotenv import load_dotenv

# Indlæs miljøvariabler fra .env-fil
load_dotenv()

# Nu kan du få adgang til dem sikkert
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**Hvad denne kode gør:**  
- **Indlæser** din .env-fil og gør variabler tilgængelige i Python  
- **Tjekker** om det nødvendige token findes (god fejlhåndtering!)  
- **Kaster** en klar fejl, hvis token mangler  
- **Bruger** token sikkert uden at eksponere det i koden

#### Git-sikkerhed: .gitignore-filen

Din `.gitignore`-fil fortæller Git, hvilke filer der aldrig skal trackes eller uploades:

```bash
# .gitignore - Tilføj disse linjer
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**Hvorfor det er afgørende**: Når du tilføjer `.env` til `.gitignore`, ignorerer Git din miljøfil og forhindrer, at du utilsigtet uploader dine hemmeligheder til GitHub.

#### Forskellige miljøer, forskellige hemmeligheder

Professionelle applikationer bruger forskellige API-nøgler til forskellige miljøer:

```bash
# .env.udvikling
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.produktion
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Hvorfor det betyder noget**: Du vil undgå, at dine udviklingseksperimenter påvirker din produktions AI-brugsgrænse, og du ønsker forskellige sikkerhedsniveauer for forskellige miljøer.

### Start af din udviklingsserver: Giv liv til din FastAPI  

Nu kommer det spændende øjeblik – at starte din FastAPI-udviklingsserver og se din AI-integration blive levende! FastAPI bruger Uvicorn, en lynhurtig ASGI-server, der er specielt designet til asynkrone Python-applikationer.

#### Forståelse af FastAPI-serverens opstartsproces

```bash
# Metode 1: Direkte Python-udførelse (inkluderer automatisk genindlæsning)
python api.py

# Metode 2: Brug af Uvicorn direkte (mere kontrol)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Når du kører denne kommando, sker følgende bag kulisserne:

**1. Python loader din FastAPI-applikation**:
- Importerer alle nødvendige biblioteker (FastAPI, Pydantic, OpenAI osv.)
- Loader miljøvariabler fra din `.env`-fil
- Opretter FastAPI-applikationsinstansen med automatisk dokumentation

**2. Uvicorn konfigurerer ASGI-serveren**:
- Binder til port 5000 med asynkron anmodningshåndtering
- Sætter anmodningsrouting op med automatisk validering
- Aktiverer hot reload til udvikling (genstarter ved filændringer)
- Genererer interaktiv API-dokumentation

**3. Serveren begynder at lytte**:
- Din terminal viser: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Serveren kan håndtere flere samtidige AI-forespørgsler
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

**Forståelse af FastAPI-uddata:**
- **Vil overvåge ændringer**: Auto-reload aktiveret til udvikling
- **Uvicorn kører**: Højtydende ASGI-server er aktiv
- **Starter genloader-processen**: Filovervågning til automatisk genstart
- **Applikationsstart fuldført**: FastAPI-app initialiseret med succes
- **Interaktive docs tilgængelige**: Besøg `/docs` for automatisk API-dokumentation

#### Test af din FastAPI: Flere kraftfulde tilgange

FastAPI tilbyder flere praktiske måder at teste din API på, inklusiv automatisk interaktiv dokumentation:

**Metode 1: Interaktiv API-dokumentation (Anbefalet)**
1. Åbn din browser og gå til `http://localhost:5000/docs`
2. Du vil se Swagger UI med alle dine endpoints dokumenteret
3. Klik på `/hello` → "Try it out" → Indtast en testbesked → "Execute"
4. Se svaret direkte i browseren med korrekt formatering

**Metode 2: Grundlæggende browser-test**
1. Gå til `http://localhost:5000` for roden af endpoint
2. Gå til `http://localhost:5000/health` for at tjekke serverens helbred
3. Dette bekræfter, at din FastAPI-server kører korrekt

**Metode 2: Kommandolinjetest (Avanceret)**
```bash
# Test med curl (hvis tilgængelig)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Forventet svar:
# {"response": "Hej! Jeg er din AI-assistent. Hvordan kan jeg hjælpe dig i dag?"}
```

**Metode 3: Python-testscripts**
```python
# test_api.py - Opret denne fil for at teste din API
import requests
import json

# Test API-endpointet
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

| Fejlmeddelelse | Hvad det betyder | Hvordan du løser det |
|---------------|------------------|---------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI ikke installeret | Kør `pip install fastapi uvicorn` i dit virtuelle miljø |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-server ikke installeret | Kør `pip install uvicorn` i dit virtuelle miljø |
| `KeyError: 'GITHUB_TOKEN'` | Miljøvariabel ikke fundet | Tjek din `.env`-fil og `load_dotenv()`-opkald |
| `Address already in use` | Port 5000 er optaget | Stop andre processer, der bruger port 5000, eller skift port |
| `ValidationError` | Anmodningsdata matcher ikke Pydantic-modellen | Tjek at din anmodning matcher den forventede skema |
| `HTTPException 422` | Ubehandlingsbar enhed | Anmodningsvalidering fejlede, tjek `/docs` for korrekt format |
| `OpenAI API error` | AI-serviceens autentificering fejlede | Bekræft at din GitHub-token er korrekt og har rette tilladelser |

#### Udviklingsbest practices

**Hot Reloading**: FastAPI med Uvicorn tilbyder automatisk genindlæsning, når du gemmer ændringer i dine Python-filer. Det betyder, at du kan ændre din kode og teste med det samme uden manuelt at genstarte.

```python
# Aktivér hot reloading eksplicit
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True aktiverer hot reload
```

**Logging til udvikling**: Tilføj logging for at forstå, hvad der sker:

```python
import logging

# Opsæt logning
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

**Hvorfor logging hjælper**: Under udvikling kan du se præcis hvilke forespørgsler, der kommer ind, hvad AI’en svarer med, og hvor fejl opstår. Det gør fejlfinding meget hurtigere.

### Konfiguration til GitHub Codespaces: Skyudvikling gjort nemt

GitHub Codespaces er som en kraftfuld udviklingscomputer i skyen, som du kan tilgå fra enhver browser. Hvis du arbejder i Codespaces, er der et par ekstra trin for at gøre din backend tilgængelig for dit frontend.

#### Forståelse af netværket i Codespaces

I et lokalt udviklingsmiljø kører alt på samme computer:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (eller file://)

I Codespaces kører dit udviklingsmiljø på GitHubs servere, så "localhost" har en anden betydning. GitHub opretter automatisk offentlige URL’er til dine tjenester, men du skal konfigurere dem korrekt.

#### Trin-for-trin Codespaces-konfiguration

**1. Start din backend-server**:
```bash
cd backend
python api.py
```

Du vil se den velkendte FastAPI/Uvicorn opstartsmeddelelse, men bemærk, at den kører inde i Codespace-miljøet.

**2. Konfigurer port-synlighed**:
- Kig efter fanen "Ports" i nederste panel i VS Code
- Find port 5000 på listen
- Højreklik på port 5000
- Vælg "Port Visibility" → "Public"

**Hvorfor gøre den offentlig?** Som standard er Codespace-porte private (kun tilgængelige for dig). At gøre den offentlig tillader, at dit frontend (som kører i browseren) kan kommunikere med din backend.

**3. Få din offentlige URL**:
Efter at have gjort porten offentlig, vil du se en URL som:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Opdater din frontend-konfiguration**:
```javascript
// I din frontend app.js, opdater BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Forståelse af Codespace-URL’er

Codespace-URL’er følger et forudsigeligt mønster:
```
https://[codespace-name]-[port].app.github.dev
```

**Nedbrudt i dele:**
- `codespace-name`: En unik identifikator for din Codespace (ofte inkluderer dit brugernavn)
- `port`: Portnummer, som din service kører på (5000 for vores FastAPI-app)
- `app.github.dev`: GitHubs domæne for Codespace-applikationer

#### Test af din Codespace-opsætning

**1. Test backenden direkte**:
Åbn din offentlige URL i en ny browsertab. Du bør se:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Test med browserens udviklerværktøjer**:
```javascript
// Åbn browserkonsollen og test din API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Lokal udvikling

| Aspekt | Lokal udvikling | GitHub Codespaces |
|--------|-----------------|-------------------|
| **Opsætningstid** | Længere (installer Python, afhængigheder) | Øjeblikkelig (forudkonfigureret miljø) |
| **URL-adgang** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Portkonfiguration** | Automatisk | Manuel (gør porte offentlige) |
| **Filpersistens** | Lokal maskine | GitHub repository |
| **Samarbejde** | Vanskeligt at dele miljø | Let at dele Codespace-link |
| **Internetafhængighed** | Kun til AI API-kald | Krævet til alt |

#### Tips til udvikling i Codespace

**Miljøvariabler i Codespaces**:
Din `.env`-fil fungerer på samme måde i Codespaces, men du kan også sætte miljøvariabler direkte i Codespace:

```bash
# Indstil miljøvariabel for den aktuelle session
export GITHUB_TOKEN="your_token_here"

# Eller tilføj til din .bashrc for vedvarende effekt
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Portstyring**:
- Codespaces registrerer automatisk, når din applikation begynder at lytte på en port
- Du kan videresende flere porte samtidigt (nyttigt, hvis du senere tilføjer en database)
- Porte forbliver tilgængelige, så længe din Codespace kører

**Udviklingsworkflow**:
1. Foretag kodeændringer i VS Code
2. FastAPI genindlæses automatisk (takket være Uvicorns reload-tilstand)
3. Test ændringer øjeblikkeligt via den offentlige URL
4. Commit og push, når du er klar

> 💡 **Pro tip**: Bogmærk din Codespace backend-URL under udvikling. Da Codespace-navne er stabile, vil URL’en ikke ændre sig, så længe du bruger samme Codespace.

## Opret frontend chat-interface: Hvor mennesker møder AI

Nu bygger vi brugergrænsefladen – den del, der bestemmer, hvordan folk interagerer med din AI-assistent. Ligesom designet af den oprindelige iPhone-grænseflade fokuserer vi på at gøre kompleks teknologi intuitiv og naturlig at bruge.

### Forståelse af moderne frontend-arkitektur

Vores chat-interface bliver det, vi kalder en “Single Page Application” eller SPA. I stedet for den gammeldags tilgang, hvor hvert klik indlæser en ny side, opdaterer vores app glat og øjeblikkeligt:

**Gamle hjemmesider**: Som at læse en fysisk bog – du bladre til helt nye sider  
**Vores chat-app**: Som at bruge din telefon – alt flyder og opdateres gnidningsfrit

```mermaid
graph TD
    A[Bruger skriver besked] --> B[JavaScript fanger input]
    B --> C[Valider og formater data]
    C --> D[Send til backend API]
    D --> E[Vis indlæsningsstatus]
    E --> F[Modtag AI-svar]
    F --> G[Opdater chatgrænseflade]
    G --> H[Klar til næste besked]
```
```mermaid
classDiagram
    class ChatApp {
        +beskeder: HTMLElement
        +formular: HTMLElement
        +input: HTMLElement
        +sendKnap: HTMLElement
        +BASE_URL: string
        +API_ENDPOINT: string
        
        +constructor()
        +initialiserEventLyttere()
        +håndterIndsendelse(event)
        +kaldAPI(besked)
        +tilføjBesked(tekst, rolle)
        +escapeHtml(tekst)
        +rulTilBund()
        +sætIndlæsning(erIndlæser)
    }
    
    ChatApp --> DOM : manipulerer
    ChatApp --> FastAPI : sender forespørgsler
```
### De tre søjler i frontend-udvikling

Enhver frontend-applikation – fra simple websites til komplekse apps som Discord eller Slack – er bygget på tre kerne-teknologier. Tænk på dem som fundamentet for alt, du ser og interagerer med på webben:

**HTML (Struktur)**: Dette er dit fundament
- Bestemmer, hvilke elementer der findes (knapper, tekstområder, containere)
- Giver mening til indholdet (dette er en overskrift, dette er en formular osv.)
- Skaber den grundlæggende struktur, som alt andet bygger på

**CSS (Præsentation)**: Dette er din indretningsarkitekt
- Får alt til at se smukt ud (farver, skrifttyper, layout)
- Håndterer forskellige skærmstørrelser (mobil, laptop, tablet)
- Skaber bløde animationer og visuel feedback

**JavaScript (Adfærd)**: Dette er din hjerne
- Reagerer på brugerhandlinger (klik, skrivning, scroll)
- Kommunikerer med din backend og opdaterer siden
- Gør alting interaktivt og dynamisk

**Tænk på det som arkitektonisk design:**
- **HTML**: Det strukturelle blueprint (definerer rum og forhold)
- **CSS**: Det æstetiske og miljømæssige design (visuel stil og brugeroplevelse)
- **JavaScript**: De mekaniske systemer (funktionalitet og interaktivitet)

### Hvorfor moderne JavaScript-arkitektur er vigtigt

Vores chat-applikation vil bruge moderne JavaScript-mønstre, som du vil se i professionelle applikationer. At forstå disse koncepter hjælper dig som udvikler:

**Klasselignende arkitektur**: Vi organiserer vores kode i klasser, som at lave blueprints til objekter  
**Async/Await**: Moderne måde at håndtere operationer, der tager tid (f.eks. API-kald)  
**Event-drevet programmering**: Vores app reagerer på brugerhandlinger (klik, tastetryk) fremfor at køre i en løkke  
**DOM-manipulation**: Dynamisk opdatering af websides indhold baseret på brugerinteraktioner og API-respons

### Projektstrukturopsætning

Opret en frontend-mappe med denne organiserede struktur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Forstå arkitekturen:**
- **Adskiller** bekymringer mellem struktur (HTML), adfærd (JavaScript) og præsentation (CSS)
- **Bevarer** en enkel filstruktur, som er let at navigere og ændre
- **Følger** bedste webudviklingspraksis for organisering og vedligeholdelse

### Opbygning af HTML-fundamentet: Semantisk struktur for tilgængelighed

Lad os starte med HTML-strukturen. Moderne webudvikling fremhæver “semantisk HTML” – brugen af HTML-elementer, der klart beskriver deres formål, ikke kun deres udseende. Det gør din applikation tilgængelig for skærmlæsere, søgemaskiner og andre værktøjer.

**Hvorfor semantisk HTML er vigtigt**: Forestil dig, at du skulle beskrive din chat-app til en person over telefonen. Du ville sige “der er en header med titlen, et hovedområde hvor samtaler vises, og en formular nederst til at skrive beskeder.” Semantisk HTML bruger elementer, der matcher denne naturlige beskrivelse.

Opret `index.html` med denne gennemtænkte markup:

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

**Forståelse af hvert HTML-element og dets formål:**

#### Dokumentstruktur
- **`<!DOCTYPE html>`**: Fortæller browseren, at dette er moderne HTML5
- **`<html lang="en">`**: Angiver sidens sprog for skærmlæsere og oversættelsesværktøjer
- **`<meta charset="UTF-8">`**: Sikrer korrekt tegnkodning til international tekst
- **`<meta name="viewport"...>`**: Gør siden mobilresponsiv ved at styre zoom og skala

#### Semantiske elementer
- **`<header>`**: Klart definerer topsektionen med titel og beskrivelse
- **`<main>`**: Angiver hovedindholdsområdet (hvor samtaler foregår)
- **`<form>`**: Semantisk korrekt til brugerinput, muliggør ordentlig tastaturnavigation

#### Tilgængelighedsfunktioner
- **`role="log"`**: Fortæller skærmlæsere at dette område indeholder en kronologisk log af beskeder
- **`aria-live="polite"`**: Annoncerer nye beskeder til skærmlæsere uden at afbryde
- **`aria-label`**: Giver beskrivende labels til formularstyringer
- **`required`**: Browser validerer, at brugerne indtaster en besked før afsendelse

#### CSS- og JavaScript-integration
- **`class`-attributter**: Tilbyder styling-kroge til CSS (f.eks. `chat-container`, `input-group`)
- **`id`-attributter**: Gør det muligt for JavaScript at finde og manipulere specifikke elementer
- **Script-placering**: JavaScript-fil indlæses til sidst, så HTML først kan loades

**Hvorfor denne struktur virker:**
- **Logisk flow**: Header → Hovedindhold → Indtastningsformular matcher naturlig læseretning
- **Tastaturnavigerbar**: Brugere kan tabbe igennem alle interaktive elementer
- **Skærmlæservenlig**: Klare pejlemærker og beskrivelser til brugere med synshandicap
- **Mobilresponsiv**: Viewport-meta-tag muliggør responsivt design
- **Progressiv forbedring**: Fungerer selvom CSS eller JavaScript ikke loader

### Tilføj interaktiv JavaScript: Moderne webapplikationslogik
Nu bygger vi JavaScript, som bringer vores chatgrænseflade til live. Vi vil bruge moderne JavaScript-mønstre, som du vil møde i professionel webudvikling, inklusive ES6-klasser, async/await og event-drevet programmering.

#### Forståelse af Moderne JavaScript-arkitektur

I stedet for at skrive procedurekode (en række funktioner, der kører i rækkefølge), vil vi skabe en **klassebaseret arkitektur**. Tænk på en klasse som en blåkopi til at skabe objekter – ligesom en arkitekts plantegning kan bruges til at bygge flere huse.

**Hvorfor bruge klasser til webapplikationer?**
- **Organisation**: Al relateret funktionalitet er samlet
- **Genanvendelighed**: Du kan oprette flere chatinstanser på samme side
- **Vedligeholdelse**: Nemmere at debugge og ændre specifikke funktioner
- **Professionel standard**: Dette mønster bruges i frameworks som React, Vue og Angular

Opret `app.js` med dette moderne, velstrukturerede JavaScript:

```javascript
// app.js - Moderne chatapplikationslogik

class ChatApp {
    constructor() {
        // Få referencer til DOM-elementer, vi skal manipulere med
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Konfigurer din backend-URL her
        this.BASE_URL = "http://localhost:5000"; // Opdater dette til dit miljø
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Opsæt event-lyttere, når chat-appen oprettes
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Lyt efter formularindsendelse (når brugeren klikker Send eller trykker Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Lyt også efter Enter-tasten i inputfeltet (bedre brugeroplevelse)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Forhindre at formularen opdaterer siden
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Send ikke tomme beskeder
        
        // Giv brugeren feedback om, at noget sker
        this.setLoading(true);
        
        // Tilføj brugerbesked til chatten med det samme (optimistisk UI)
        this.appendMessage(messageText, "user");
        
        // Ryd inputfeltet, så brugeren kan skrive næste besked
        this.input.value = '';
        
        try {
            // Kald AI API'et og vent på svar
            const reply = await this.callAPI(messageText);
            
            // Tilføj AI-svar til chatten
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Aktivér interfacet igen uanset succes eller fejl
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

// Initialiser chatapplikationen, når siden indlæses
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Forståelse af hvert JavaScript-koncept

**ES6 Klasse Struktur**:
```javascript
class ChatApp {
    constructor() {
        // Dette kører, når du opretter en ny ChatApp instans
        // Det er som "setup" funktionen for din chat
    }
    
    methodName() {
        // Metoder er funktioner, der tilhører klassen
        // De kan få adgang til klasseegenskaber ved hjælp af "this"
    }
}
```

**Async/Await Mønster**:
```javascript
// Gammel måde (callback-helvede):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Moderne måde (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Event-drevet Programmering**:
I stedet for konstant at tjekke om noget skete, "lytter" vi efter events:
```javascript
// Når formularen indsendes, kør handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Når Enter-tasten trykkes, kør også handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-manipulation**:
```javascript
// Opret nye elementer
const messageElement = document.createElement("div");

// Ændr deres egenskaber
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Tilføj til siden
this.messages.appendChild(messageElement);
```

#### Sikkerhed og Bedste Praksis

**XSS Forebyggelse**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Dette undslipper automatisk HTML
    return div.innerHTML;
}
```

**Hvorfor det er vigtigt**: Hvis en bruger skriver `<script>alert('hack')</script>`, sikrer denne funktion, at det vises som tekst og ikke kører som kode.

**Fejlhåndtering**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Vis en brugervenlig fejl i stedet for at få appen til at gå ned
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Brugeroplevelses-Overvejelser**:
- **Optimistisk UI**: Tilføj brugerbesked med det samme, vent ikke på serversvar
- **Indlæsningsstatus**: Deaktiver knapper og vis "Sender..." mens der ventes
- **Auto-scroll**: Hold de nyeste beskeder synlige
- **Inputvalidering**: Send ikke tomme beskeder
- **Genvejstaster**: Enter-tast sender beskeder (som i rigtige chat-apps)

#### Forståelse af Applikationsflowet

1. **Siden loader** → `DOMContentLoaded` event affyres → `new ChatApp()` oprettes
2. **Konstruktør kører** → Henter DOM-elementreferencer → Sætter event-lyttere op
3. **Bruger skriver besked** → Trykker Enter eller klikker Send → `handleSubmit` kører
4. **handleSubmit** → Validerer input → Viser indlæsningsstatus → Kalder API
5. **API svarer** → Tilføjer AI-besked til chat → Genaktiverer interface
6. **Klar til næste besked** → Brugeren kan fortsætte med at chatte

Denne arkitektur er skalerbar – du kan nemt tilføje funktioner som beskedredigering, filuploads eller flere samtaletråde uden at omskrive kerne-strukturen.

### 🎯 Pædagogisk Tjek-ind: Moderne Frontend Arkitektur

**Forståelse af Arkitekturen**: Du har implementeret en komplet single-page applikation med moderne JavaScript-mønstre. Dette repræsenterer professionelt frontend-udviklingsniveau.

**Nøglekoncepter Mestret**:
- **ES6 Klassearkitektur**: Organiseret, vedligeholdelsesvenlig kodestruktur
- **Async/Await Mønstre**: Moderne asynkron programmering
- **Event-drevet Programmering**: Responsivt brugergrænsefladedesign
- **Sikkerheds bedste praksis**: XSS-forebyggelse og inputvalidering

**Brancheforbindelse**: Mønstrene du har lært (klassebaseret arkitektur, async-operationer, DOM-manipulation) er fundamentet for moderne frameworks som React, Vue og Angular. Du bygger med samme arkitektoniske tankegang som i produktionsapplikationer.

**Refleksionsspørgsmål**: Hvordan ville du udvide denne chatapplikation til at håndtere flere samtaler eller brugerautentifikation? Overvej de nødvendige arkitektoniske ændringer og hvordan klassestrukturen ville udvikle sig.

### Style Din Chatgrænseflade

Lad os nu skabe en moderne, visuelt tiltalende chatgrænseflade med CSS. God styling får din applikation til at føles professionel og forbedrer den samlede brugeroplevelse. Vi bruger moderne CSS-funktioner som Flexbox, CSS Grid og brugerdefinerede egenskaber for et responsivt, tilgængeligt design.

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
- **Bruger** CSS-variabler (custom properties) for konsistent tema og nem vedligeholdelse
- **Implementerer** Flexbox-layout for responsivt design og korrekt justering
- **Inkluderer** glatte animationer for besked-udseende uden at være forstyrrende
- **Giver** visuel adskillelse mellem brugerbeskeder, AI-svar og fejltilstande
- **Understøtter** responsivt design der virker på både desktop og mobil
- **Tager højde for** tilgængelighed med nedsat bevægelses-præferencer og ordentlige kontrastforhold
- **Tilbyder** mørk tilstand baseret på brugerens systempræferencer

### Konfiguration af Din Backend URL

Det sidste skridt er at opdatere `BASE_URL` i dit JavaScript, så det matcher din backend-server:

```javascript
// Til lokal udvikling
this.BASE_URL = "http://localhost:5000";

// Til GitHub Codespaces (erstat med din faktiske URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Bestemmelse af din backend URL:**
- **Lokal udvikling**: Brug `http://localhost:5000`, hvis frontend og backend kører lokalt
- **Codespaces**: Find din backend-URL i Ports-fanen efter du har gjort port 5000 offentlig
- **Produktion**: Erstat med dit faktiske domæne, når du deployer til en hostingtjeneste

> 💡 **Test-tip**: Du kan teste din backend direkte ved at besøge rod-URL'en i din browser. Du bør se velkomstbeskeden fra din FastAPI-server.



## Test og Deployering

Nu hvor du har både frontend- og backend-komponenter, lad os teste, at alt virker sammen og udforske deployeringsmuligheder for at dele din chatassistent med andre.

### Lokal Test Workflow

Følg disse trin for at teste din komplette applikation:

```mermaid
graph TD
    A[Start Backend Server] --> B[Konfigurer Miljøvariabler]
    B --> C[Test API Endpoints]
    C --> D[Åbn Frontend i Browser]
    D --> E[Test Chatfunktionalitet]
    E --> F[Fejlret Eventuelle Problemer]
```
**Trin-for-trin testproces:**

1. **Start din backend-server**:
   ```bash
   cd backend
   source venv/bin/activate  # eller venv\Scripts\activate på Windows
   python api.py
   ```

2. **Tjek at API’en virker**:
   - Åbn `http://localhost:5000` i din browser
   - Du skulle gerne se velkomstbeskeden fra din FastAPI-server

3. **Åbn din frontend**:
   - Gå til din frontend-mappe
   - Åbn `index.html` i din webbrowser
   - Eller brug VS Codes Live Server-udvidelse for bedre udviklingsoplevelse

4. **Test chat-funktionaliteten**:
   - Skriv en besked i inputfeltet
   - Klik på "Send" eller tryk Enter
   - Tjek at AI svarer relevant
   - Se browserkonsollen efter eventuelle JavaScript-fejl

### Fejlretning af Almindelige Problemer

| Problem | Symptomer | Løsning |
|---------|----------|----------|
| **CORS-fejl** | Frontend kan ikke nå backend | Sørg for at FastAPIs CORSMiddleware er korrekt konfigureret |
| **API-nøglefejl** | 401 Unauthorized svar | Tjek din `GITHUB_TOKEN` miljøvariabel |
| **Connection Refused** | Netværksfejl i frontend | Bekræft backend-URL og at Flask-serveren kører |
| **Ingen AI-respons** | Tomme eller fejlsvar | Tjek backend-log for API-kvote- eller autentifikationsproblemer |

**Almindelige fejlfindingstrin:**
- **Tjekker** browserens Developer Tools Console for JavaScript-fejl
- **Verificerer** at Netværksfanen viser succesfulde API-forespørgsler og svar
- **Gennemgår** backend-terminalens output for Python-fejl eller API-problemer
- **Bekræfter** at miljøvariabler er korrekt indlæst og tilgængelige

## 📈 Din AI Applikationsudviklings Mastery Tidslinje

```mermaid
timeline
    title Fuldstændig Udviklingsrejse for AI-applikationer
    
    section AI Grundlag
        Forstå Generativ AI
            : Forstå mønstergenkendelseskoncepter
            : Mestre AI parameterkontrol
            : Lær prompt engineering teknikker
        
        Integration af GitHub Modeller
            : Naviger AI serviceplatforme
            : Håndter autentificering sikkert
            : Optimer modelparametre
    
    section Backend Udvikling
        Python API Arkitektur
            : Byg FastAPI applikationer
            : Implementer asynkrone operationer
            : Skab sikre endpoints
        
        AI Service Integration
            : Forbind til eksterne AI API'er
            : Håndter rate limiting
            : Implementer fejlgraenser
    
    section Frontend Mestring
        Moderne JavaScript Mønstre
            : Mestre ES6 klassearkitektur
            : Implementer async/await flows
            : Byg responsive brugerflader
        
        Realtids Brugeroplevelse
            : Skab dynamiske chatflader
            : Håndter loading tilstande
            : Optimer brugerinteraktioner
    
    section Produktion-Klarhed
        Sikkerhed & Ydeevne
            : Implementer sikker tokenhåndtering
            : Forhindr XSS sårbarheder
            : Optimer API ydeevne
        
        Professionel Udrulning
            : Byg skalerbare arkitekturer
            : Skab vedligeholdelsesvenlig kode
            : Dokumenter udviklingsprocesser
```
**🎓 Graduationsmilepæl**: Du har med succes bygget en komplet AI-drevet applikation ved hjælp af de samme teknologier og arkitektoniske mønstre, der driver moderne AI-assistenter. Disse færdigheder repræsenterer skæringspunktet mellem traditionel webudvikling og banebrydende AI-integration.

**🔄 Næste niveau kapaciteter**:
- Parat til at udforske avancerede AI-frameworks (LangChain, LangGraph)
- Klædt på til at bygge multimodale AI-applikationer (tekst, billede, stemme)
- Udstyret til at implementere vektordatabaser og søgesystemer
- Fundament lagt for maskinlæring og AI-model finjustering

## GitHub Copilot Agent Udfordring 🚀

Brug Agent-tilstand til at løse følgende udfordring:

**Beskrivelse:** Forbedr chatassistenten ved at tilføje samtalehistorik og beskedvedholdelse. Denne udfordring hjælper dig med at forstå, hvordan man håndterer state i chatapplikationer og implementerer datalagring for bedre brugeroplevelse.

**Prompt:** Ændr chatapplikationen, så den inkluderer samtalehistorik, der bevares mellem sessioner. Tilføj funktionalitet til at gemme chatbeskeder i local storage, vise samtalehistorik når siden loades, og inkluder en "Ryd Historik"-knap. Implementer også skriveindikatorer og tidsstempler på beskeder for at gøre chatoplevelsen mere realistisk.

Lær mere om [agent-tilstand](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## Opgave: Byg Din Personlige AI Assistent

Nu skal du skabe din egen AI-assistent-implementering. I stedet for blot at kopiere tutorial-koden, er dette en mulighed for at anvende koncepterne, mens du bygger noget, der afspejler dine egne interesser og brugssager.

### Projektkrav

Lad os sætte dit projekt op med en ren, organiseret struktur:

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

**Backend Udvikling:**
- **Tag** vores FastAPI-kode og gør den til din egen
- **Skab** en unik AI-personlighed – måske en hjælpsom madlavningsassistent, en kreativ skrivepartner eller en studiekompis?
- **Tilføj** solid fejlhåndtering, så din app ikke går ned, når der opstår fejl
- **Skriv** klar dokumentation for alle, der vil forstå hvordan din API virker

**Frontend Udvikling:**
- **Byg** en chatgrænseflade der føles intuitiv og imødekommende
- **Skriv** ren, moderne JavaScript, som du kan være stolt af at vise andre udviklere
- **Design** skræddersyet styling, der afspejler din AIs personlighed – sjov og farverig? Ren og minimalistisk? Det er op til dig!
- **Sørg for** at det virker godt på både telefoner og computere

**Personliggørelseskrav:**
- **Vælg** et unikt navn og personlighed til din AI-assistent – måske noget, der afspejler dine interesser eller de problemer, du vil løse
- **Tilpas** det visuelle design, så det matcher din assistents vibe
- **Skriv** en fængende velkomstbesked, der får folk til at ville starte en samtale
- **Test** din assistent med forskellige slags spørgsmål og se, hvordan den reagerer

### Forslagsidéer til Udvidelser (Valgfrit)

Vil du tage dit projekt til næste niveau? Her er nogle sjove idéer at udforske:

| Funktion | Beskrivelse | Færdigheder du øver |
|---------|-------------|------------------------|
| **Beskedhistorik** | Husk samtaler selv efter sideopdatering | Arbejde med localStorage, JSON-håndtering |
| **Skriveindikatorer** | Vis "AI skriver..." mens der ventes på svar | CSS-animationer, async-programmering |
| **Beskedtidsstempler** | Vis hvornår hver besked blev sendt | Dato/tidsformatering, UX-design |
| **Eksportér Chat** | Lad brugere downloade deres samtale | Filhåndtering, dataeksport |
| **Tema-skift** | Skift mellem lys og mørk tilstand | CSS-variabler, brugerpræferencer |
| **Stemmeinput** | Tilføj tale-til-tekst funktionalitet | Web-API’er, tilgængelighed |

### Test og Dokumentation

**Kvalitetssikring:**
- **Test** din applikation med forskellige inputtyper og edge cases
- **Bekræft** at det responsive design virker på forskellige skærmstørrelser
- **Tjek** tilgængelighed med tastaturnavigation og skærmlæsere
- **Valider** HTML og CSS for standardoverholdelse

**Dokumentationskrav:**
- **Skriv** en README.md, der forklarer dit projekt og hvordan man kører det
- **Inkluder** screenshots af din chatgrænseflade i brug
- **Dokumenter** unikke funktioner eller tilpasninger du har tilføjet
- **Giv** klare opsætningsinstruktioner til andre udviklere

### Indsendelsesretningslinjer

**Projektleverancer:**
1. Komplett projektmappe med al kildekode
2. README.md med projektbeskrivelse og opsætningsinstruktioner
3. Screenshots, der demonstrerer din chatassistent i funktion
4. Kort refleksion over hvad du lærte og hvilke udfordringer du stod overfor

**Evalueringskriterier:**
- **Funktionalitet**: Virker chatassistenten som forventet?
- **Kodekvalitet**: Er koden velorganiseret, kommenteret og vedligeholdbar?
- **Design**: Er interface visuelt tiltalende og brugervenligt?
- **Kreativitet**: Hvor unik og personlig er din implementering?
- **Dokumentation**: Er opsætningsinstruktioner klare og fyldestgørende?

> 💡 **Sukcesstip**: Start med basis-kravene først, og tilføj så udvidelser, når alt virker. Fokuser på at lave en poleret kerneoplevelse før avancerede features.

## Løsning

[Løsning](./solution/README.md)

## Bonusudfordringer

Klar til at tage din AI-assistent til næste niveau? Prøv disse avancerede udfordringer, der vil uddybe din forståelse af AI-integration og webudvikling.

### Personligheds Tilpasning

Den virkelige magi sker, når du giver din AI-assistent en unik personlighed. Eksperimenter med forskellige systemprompter for at skabe specialiserede assistenter:

**Professionel Assistent Eksempel:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Kreativ Skrivningshjælper Eksempel:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Teknisk Mentor Eksempel:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend Forbedringer

Transformer din chatgrænseflade med disse visuelle og funktionelle forbedringer:

**Avancerede CSS-funktioner:**
- **Implementer** glatte besked-animationer og overgange
- **Tilføj** custom chatbobledesign med CSS-former og gradienter
- **Skab** en skriveindikator-animation til når AI "tænker"
- **Design** emoji-reaktioner eller beskedbedømmelsessystem

**JavaScript-Forbedringer:**
- **Tilføj** tastaturgenveje (Ctrl+Enter for send, Escape for ryd input)
- **Implementer** søge- og filtreringsfunktionalitet for beskeder
- **Skab** eksportfunktion for samtaler (download som tekst eller JSON)
- **Tilføj** autosave til localStorage for at forhindre beskedtab

### Avanceret AI-Integration

**Flere AI-personligheder:**
- **Lav** en dropdown til at skifte imellem forskellige AI-personligheder
- **Gem** brugerens foretrukne personlighed i localStorage
- **Implementer** kontekstskift, der bevarer samtaleflowet

**Smartsvar-funktioner:**
- **Tilføj** samtalekontekst-awareness (AI husker tidligere beskeder)
- **Implementer** smarte forslag baseret på samtaleemne
- **Opret** hurtige svar-knapper til almindelige spørgsmål

> 🎯 **Læringsmål**: Disse bonusudfordringer hjælper dig med at forstå avancerede webudviklingsmønstre og AI-integrationsmetoder, som anvendes i produktionsapplikationer.

## Resume og Næste Skridt

Tillykke! Du har med succes bygget en komplet AI-drevet chatassistent fra bunden. Dette projekt har givet dig praksiserfaring med moderne webudviklingsteknologier og AI-integration – færdigheder, der bliver stadig mere værdifulde i dagens teknologilandskab.

### Det, Du Har Opnået

I løbet af denne lektion har du mestret flere nøgle-teknologier og koncepter:

**Backend-udvikling:**
- **Integreret** med GitHub Models API for AI-funktionalitet
- **Bygget** en RESTful API ved hjælp af Flask med korrekt fejlhåndtering
- **Implementeret** sikker autentificering ved brug af miljøvariabler
- **Konfigureret** CORS for kryds-oprindelses-forespørgsler mellem frontend og backend

**Frontend-udvikling:**
- **Oprettet** et responsivt chatinterface med semantisk HTML
- **Implementeret** moderne JavaScript med async/await og klassebaseret arkitektur
- **Designet** en engagerende brugerflade med CSS Grid, Flexbox og animationer
- **Tilføjet** tilgængelighedsfunktioner og principper for responsivt design

**Full-Stack Integration:**
- **Forbundet** frontend og backend gennem HTTP API-kald
- **Håndteret** realtime brugerinteraktioner og asynkron dataflow
- **Implementeret** fejlhåndtering og brugerfeedback gennem hele applikationen
- **Testet** den komplette applikationsarbejdsgang fra brugerinput til AI-svar

### Væsentlige Læringsudbytter

```mermaid
mindmap
  root((AI Chat App Færdigheder))
    API Integration
      Autentificering
      Fejlhåndtering
      Asynkron Programmering
    Webudvikling
      HTML5 Semantik
      Moderne CSS
      ES6+ JavaScript
    Brugeroplevelse
      Responsivt Design
      Tilgængelighed
      Realtidsinteraktion
    AI Forståelse
      Prompt Ingeniørarbejde
      Modelparametre
      Samtale Flow
```  
Dette projekt har introduceret dig til grundlæggende principper for at opbygge AI-drevne applikationer, som repræsenterer fremtiden for webudvikling. Du forstår nu, hvordan man integrerer AI-muligheder i traditionelle webapplikationer og skaber engagerende brugeroplevelser, der føles intelligente og responsivrige.

### Professionelle Anvendelser

De færdigheder, du har udviklet i denne lektion, er direkte anvendelige i moderne softwareudviklingskarrierer:

- **Full-stack webudvikling** med moderne frameworks og API’er  
- **AI-integration** i webapplikationer og mobilapps  
- **API-design og -udvikling** til mikrotjenestearkitekturer  
- **Brugergrænsefladeudvikling** med fokus på tilgængelighed og responsivt design  
- **DevOps-praksis** inklusive miljøkonfiguration og deployment  

### Fortsæt Din AI-udviklingsrejse

**Næste Læringsskridt:**  
- **Udforsk** mere avancerede AI-modeller og API’er (GPT-4, Claude, Gemini)  
- **Lær** om prompt engineering-teknikker for bedre AI-svar  
- **Studer** samtaledesign og chatbot-brugeroplevelsesprincipper  
- **Undersøg** AI-sikkerhed, etik og ansvarlig AI-udviklingspraksis  
- **Byg** mere komplekse applikationer med samtalememory og kontekstbevidsthed  

**Avancerede Projektideer:**  
- Multi-bruger chatrum med AI-moderation  
- AI-drevne kundeservice-chatbots  
- Uddannelsesvejledere med personlig læring  
- Kreative skrivepartnere med forskellige AI-personligheder  
- Tekniske dokumentationsassistenter for udviklere  

## Kom Godt I Gang med GitHub Codespaces

Vil du prøve dette projekt i et cloud-udviklingsmiljø? GitHub Codespaces leverer en komplet udviklingsopsætning i din browser, perfekt til at eksperimentere med AI-applikationer uden lokale installationskrav.

### Opsætning af Dit Udviklingsmiljø

**Trin 1: Opret fra skabelon**  
- **Naviger** til [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Klik** på "Use this template" i øverste højre hjørne (sørg for at være logget ind på GitHub)  

![Create from template interface showing the green "Use this template" button](../../../translated_images/template.67ad477109d29a2b.da.png)  

**Trin 2: Start Codespaces**  
- **Åbn** dit nyoprettede repository  
- **Klik** på den grønne "Code" knap, og vælg "Codespaces"  
- **Vælg** "Create codespace on main" for at starte dit udviklingsmiljø  

![Create codespace interface with options for launching cloud development environment](../../../translated_images/codespace.bcecbdf5d2747d3d.da.png)  

**Trin 3: Miljøkonfiguration**  
Når din Codespace indlæses, får du adgang til:  
- **Forudinstalleret** Python, Node.js og alle nødvendige udviklingsværktøjer  
- **VS Code-interface** med udvidelser til webudvikling  
- **Terminaladgang** til at køre backend- og frontend-servere  
- **Port forwarding** til at teste dine applikationer  

**Hvad Codespaces tilbyder:**  
- **Fjerner** problemer med lokal miljøopsætning og konfiguration  
- **Giver** et konsistent udviklingsmiljø på tværs af forskellige enheder  
- **Indeholder** forudkonfigurerede værktøjer og udvidelser til webudvikling  
- **Tilbyder** sømløs integration med GitHub til versionsstyring og samarbejde  

> 🚀 **Pro Tip**: Codespaces er perfekt til at lære og prototype AI-applikationer, da det håndterer al kompleks miljøopsætning automatisk, så du kan fokusere på at bygge og lære fremfor problemer med konfiguration.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfraskrivelse**:
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det oprindelige dokument på dets modersmål skal betragtes som den autoritative kilde. For kritisk information anbefales professionel, menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->