<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-06T22:32:50+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sv"
}
-->
# Skapa en chattassistent med AI

Kommer du ihåg i Star Trek när besättningen lugnt kunde prata med skeppets dator, ställa komplexa frågor och få genomtänkta svar? Vad som verkade som ren science fiction på 1960-talet är nu något du kan bygga med webbteknologier du redan kan.

I den här lektionen ska vi skapa en AI-chattassistent med HTML, CSS, JavaScript och viss backend-integration. Du kommer att upptäcka hur samma kunskaper du lärt dig kan kopplas till kraftfulla AI-tjänster som kan förstå kontext och generera meningsfulla svar.

Tänk på AI som att ha tillgång till ett enormt bibliotek som inte bara kan hitta information utan också syntetisera den till sammanhängande svar anpassade efter dina specifika frågor. Istället för att söka igenom tusentals sidor får du direkt, kontextuella svar.

Integrationen sker genom bekanta webbteknologier som samarbetar. HTML skapar chattgränssnittet, CSS hanterar det visuella, JavaScript styr användarinteraktioner och en backend-API kopplar ihop allt med AI-tjänster. Det är likt hur olika sektioner i en orkester samarbetar för att skapa en symfoni.

Vi bygger i princip en bro mellan naturlig mänsklig kommunikation och maskinbearbetning. Du lär dig både den tekniska implementeringen av AI-integration och designmönster som gör interaktionerna intuitiva.

I slutet av lektionen kommer AI-integrationen kännas mindre som en mystisk process och mer som en annan API du kan arbeta med. Du förstår grundläggande mönster som driver applikationer som ChatGPT och Claude, med samma webbprinciper du redan lärt dig.

## ⚡ Vad du kan göra på nästa 5 minuter

**Snabbstart för hektiska utvecklare**

```mermaid
flowchart LR
    A[⚡ 5 minuter] --> B[Få GitHub-token]
    B --> C[Testa AI-lekplats]
    C --> D[Kopiera Python-kod]
    D --> E[Se AI-svar]
```
- **Minut 1**: Besök [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) och skapa en personlig åtkomsttoken
- **Minut 2**: Testa AI-interaktioner direkt i playground-gränssnittet
- **Minut 3**: Klicka på fliken "Code" och kopiera Python-snippet
- **Minut 4**: Kör koden lokalt med din token: `GITHUB_TOKEN=your_token python test.py`
- **Minut 5**: Se ditt första AI-svar genereras från din egen kod

**Snabbtestkod**:
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

**Varför detta är viktigt**: På 5 minuter får du uppleva magin i programmerbar AI-interaktion. Detta representerar den grundläggande byggstenen som driver varje AI-applikation du använder.

Så här kommer ditt färdiga projekt att se ut:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/sv/screenshot.0a1ee0d123df681b.webp)

## 🗺️ Din läranderesa genom AI-applikationsutveckling

```mermaid
journey
    title Från Webbutveckling till AI-Integration
    section Förstå AI-grunder
      Upptäck generativa AI-koncept: 4: You
      Utforska GitHub Models-plattformen: 6: You
      Bemästra AI-parametrar och prompts: 8: You
    section Backendintegration
      Bygg Python-API-server: 5: You
      Implementera AI-funktionsanrop: 7: You
      Hantera asynkrona operationer: 8: You
    section Frontendutveckling
      Skapa modern chattgränssnitt: 6: You
      Bemästra realtidsinteraktioner: 8: You
      Bygg responsiv användarupplevelse: 9: You
    section Professionell användning
      Distribuera komplett AI-system: 7: You
      Optimera prestandamönster: 8: You
      Skapa produktionsklar app: 9: You
```
**Din resmålsdestination**: I slutet av den här lektionen kommer du ha byggt en komplett AI-driven applikation med samma teknologier och mönster som driver moderna AI-assistenter som ChatGPT, Claude och Google Bard.

## Förstå AI: Från mysterium till mästerskap

Innan vi dyker in i koden, låt oss förstå vad vi arbetar med. Om du använt API:er tidigare känner du till det grundläggande mönstret: skicka en förfrågan, ta emot ett svar.

AI-API:er följer en liknande struktur, men istället för att hämta förlagrad data från en databas genererar de nya svar baserade på mönster lärda från enorma mängder text. Tänk på det som skillnaden mellan ett bibliotekskatalogsystem och en kunnig bibliotekarie som kan syntetisera information från flera källor.

### Vad är egentligen "Generativ AI"?

Tänk på hur Rosetta-stenen gjorde det möjligt för forskare att förstå egyptiska hieroglyfer genom att hitta mönster mellan kända och okända språk. AI-modeller fungerar likadant – de hittar mönster i enorma mängder text för att förstå hur språk fungerar, och använder sedan dessa mönster för att generera lämpliga svar på nya frågor.

**Låt mig bryta ner det med en enkel jämförelse:**
- **Traditionell databas**: Som att begära ditt födelsebevis – du får exakt samma dokument varje gång
- **Sökmotor**: Som att be en bibliotekarie hitta böcker om katter – de visar vad som finns tillgängligt
- **Generativ AI**: Som att fråga en kunnig vän om katter – de berättar intressanta saker med egna ord, anpassat efter vad du vill veta

```mermaid
graph LR
    A[Din Fråga] --> B[AI Modell]
    B --> C[Mönsterigenkänning]
    C --> D[Innehållsgenerering]
    D --> E[Kontextuellt Svar]
    
    F[Träningsdata<br/>Böcker, Artiklar, Webb] --> B
```
### Hur AI-modeller lär sig (den enkla versionen)

AI-modeller lär sig genom exponering för enorma datamängder med text från böcker, artiklar och konversationer. Genom denna process identifierar de mönster i:
- Hur tankar struktureras i skriftlig kommunikation
- Vilka ord som vanligtvis förekommer tillsammans
- Hur konversationer oftast flyter
- Kontextuella skillnader mellan formell och informell kommunikation

**Det är likt hur arkeologer avkodas forntida språk**: de analyserar tusentals exempel för att förstå grammatik, ordförråd och kulturell kontext för att sedan kunna tolka nya texter med hjälp av de lärda mönstren.

### Varför GitHub Models?

Vi använder GitHub Models av en ganska praktisk anledning – det ger oss tillgång till AI på företagsnivå utan att behöva installera egen AI-infrastruktur (vilket, tro mig, du inte vill göra just nu!). Tänk på det som att använda en väder-API istället för att sätta upp egna väderstationer överallt för att förutsäga vädret.

Det är i princip "AI-som-en-tjänst", och det bästa? Det är gratis att komma igång, så du kan experimentera utan att oroa dig för stora fakturor.

```mermaid
graph LR
    A[Frontend Chattgränssnitt] --> B[Din Backend-API]
    B --> C[GitHub Modeller API]
    C --> D[AI Modellbearbetning]
    D --> C
    C --> B
    B --> A
```
Vi kommer att använda GitHub Models för vår backend-integration, som ger tillgång till professionella AI-funktioner genom ett utvecklarvänligt gränssnitt. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) är en testmiljö där du kan experimentera med olika AI-modeller och förstå deras kapabiliteter innan du implementerar dem i kod.

## 🧠 Ekosystem för AI-applikationsutveckling

```mermaid
mindmap
  root((AI-utveckling))
    Understanding AI
      Generativa Modeller
        Mönsterigenkänning
        Innehållsgenerering
        Kontextförståelse
        Svarssyntes
      AI-Parametrar
        Temperaturkontroll
        Token-gränser
        Top-p-filtrering
        Systemuppmaningar
    Backend Architecture
      API-Integration
        GitHub-modeller
        Autentisering
        Förfrågningshantering
        Felhantering
      Python-Infrastruktur
        FastAPI-ramverk
        Asynkrona operationer
        Miljösäkerhet
        CORS-konfiguration
    Frontend Experience
      Chattgränssnitt
        Realtidsuppdateringar
        Meddelandehistorik
        Användarfeedback
        Laddningstillstånd
      Modern webbteknik
        ES6-klasser
        Async/Await
        DOM-manipulation
        Händelsehantering
    Professional Patterns
      Säkerhetsbästa praxis
        Tokenhantering
        Inmatningsvalidering
        XSS-förebyggande
        Felfångstgränser
      Produktionsberedskap
        Prestandaoptimering
        Responsiv design
        Tillgänglighet
        Teststrategier
```
**Kärnprincip**: AI-applikationsutveckling kombinerar traditionella webbutvecklingsfärdigheter med AI-tjänsteintegration för att skapa intelligenta applikationer som känns naturliga och lyhörda för användare.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/sv/playground.d2b927122224ff8f.webp)

**Det som gör playgrounden så användbar:**
- **Testa** olika AI-modeller som GPT-4o-mini, Claude och fler (alla gratis!)
- **Prova** dina idéer och prompts innan du skriver någon kod
- **Få** färdiga kodsnuttar i ditt favoritprogrammeringsspråk
- **Justera** inställningar som kreativitetsnivå och svarslängd för att se hur de påverkar resultatet

När du experimenterat klart klickar du bara på fliken "Code" och väljer programmeringsspråk för att få implementeringskoden du behöver.

![Playground choice showing code generation options for different programming languages](../../../translated_images/sv/playground-choice.1d23ba7d407f4758.webp)

## Sätta upp Python-backend-integration

Nu implementerar vi AI-integrationen med Python. Python är utmärkt för AI-applikationer tack vare sin enkla syntax och kraftfulla bibliotek. Vi börjar med koden från GitHub Models playground och refaktoriserar den sedan till en återanvändbar, produktionsklar funktion.

### Förstå grundimplementeringen

När du hämtar Python-koden från playground får du något som ser ut så här. Oroa dig inte om det verkar mycket i början – vi går igenom det steg för steg:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# För att autentisera med modellen behöver du skapa en personlig åtkomsttoken (PAT) i dina GitHub-inställningar.
# Skapa din PAT-token genom att följa instruktionerna här: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Det här händer i koden:**
- **Vi importerar** de verktyg vi behöver: `os` för att läsa miljövariabler och `OpenAI` för att kommunicera med AI
- **Vi sätter upp** OpenAI-klienten att peka på GitHubs AI-servrar istället för OpenAI direkt
- **Vi autentiserar** med en speciell GitHub-token (mer om det snart!)
- **Vi strukturerar** samtalet med olika "roller" – tänk som att sätta scenen för ett skådespel
- **Vi skickar** vår förfrågan till AI med några finjusterade parametrar
- **Vi extraherar** det faktiska svarstextinnehållet från all data som kommer tillbaka

### Förstå meddelanderoller: AI-samtalsramverket

AI-samtal använder en specifik struktur med olika "roller" som tjänar olika syften:

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

**Tänk på det som att regissera ett skådespel:**
- **Systemroll**: Som regianvisningar för en skådespelare – talar om för AI hur den ska bete sig, vilken personlighet den ska ha och hur den ska svara
- **Användarroll**: Den faktiska frågan eller meddelandet från personen som använder din applikation
- **Assistentroll**: AI:s svar (du skickar inte detta, men det finns i samtalshistoriken)

**Verklighetsanalog**: Föreställ dig att du introducerar en vän för någon på en fest:
- **Systemmeddelande**: "Det här är min vän Sarah, hon är läkare och är bra på att förklara medicinska koncept på ett enkelt sätt"
- **Användarmeddelande**: "Kan du förklara hur vaccin fungerar?"
- **Assistentens svar**: Sarah svarar som en vänlig läkare, inte som advokat eller kock

### Förstå AI-parametrar: finjustera svarsbeteende

De numeriska parametrarna i AI-API-anrop styr hur modellen genererar svar. Dessa inställningar låter dig justera AI:s beteende för olika användningsområden:

#### Temperatur (0,0 till 2,0): Kreativitetsreglaget

**Vad den gör**: Kontrollerar hur kreativ eller förutsägbar AI:s svar är.

**Tänk på det som en jazzmusikers improvisationsnivå:**
- **Temperatur = 0,1**: Spelar exakt samma melodi varje gång (mycket förutsägbar)
- **Temperatur = 0,7**: Lägger till smakfulla variationer utan att tappa igenkänning (balanserad kreativitet)
- **Temperatur = 1,5**: Full experimentell jazz med oväntade svängar (mycket oförutsägbar)

```python
# Väldigt förutsägbara svar (bra för faktabaserade frågor)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Kommer nästan alltid att säga "4"
)

# Kreativa svar (bra för brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Kommer att generera unika, oväntade berättelser
)
```

#### Max Tokens (1 till 4096+): Svarslängdskontroll

**Vad den gör**: Sätter en begränsning på hur långt AI:s svar kan vara.

**Tänk på tokens som ungefär ord** (cirka 1 token = 0,75 ord i engelska):
- **max_tokens=50**: Kort och koncist (som ett SMS)
- **max_tokens=500**: En trevlig stycke eller två
- **max_tokens=2000**: En utförlig förklaring med exempel

```python
# Kortfattade, koncisa svar
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Tvingar fram en kort förklaring
)

# Detaljerade, omfattande svar
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Tillåter detaljerade förklaringar med exempel
)
```

#### Top_p (0,0 till 1,0): Fokuseringsparametern

**Vad den gör**: Kontrollerar hur fokuserad AI är på de mest sannolika orden.

**Föreställ dig att AI har ett enormt ordförråd, rangordnat efter sannolikheten för varje ord:**
- **top_p=0,1**: Betraktar bara de 10 % mest sannolika orden (mycket fokuserad)
- **top_p=0,9**: Betraktar 90 % av möjliga ord (mer kreativ)
- **top_p=1,0**: Betraktar allt (maximal variation)

**Till exempel**: Om du frågar "Himlen är vanligtvis..."
- **Lågt top_p**: Säger nästan alltid "blå"
- **Högt top_p**: Kan säga "blå", "molnig", "vidsträckt", "föränderlig", "vacker", etc.

### Sätta ihop allt: parametrarkombinationer för olika användningsområden

```python
# För faktabaserade, konsekventa svar (som en dokumentationsbot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# För kreativt skrivstöd
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# För konverserande, hjälpsamma svar (balanserade)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title AI Parameteroptimeringsmatris
    x-axis Låg Kreativitet --> Hög Kreativitet
    y-axis Kort Svarstid --> Lång Svarstid
    
    quadrant-1 Kreativt Innehåll
    quadrant-2 Detaljerad Analys
    quadrant-3 Snabba Fakta
    quadrant-4 Konverserande AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Varför dessa parametrar är viktiga**: Olika applikationer behöver olika typer av svar. En kundtjänstbot bör vara konsekvent och faktabaserad (lågt temperaturvärde), medan en kreativ skrivassistent bör vara fantasifull och varierande (högt temperaturvärde). Att förstå dessa parametrar ger dig kontroll över AI:s personlighet och svarsstil.
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
- **Tar emot** två parametrar: användarens prompt och ett valfritt systemmeddelande
- **Erbjuder** ett standard systemmeddelande för allmänt assistentbeteende
- **Använder** korrekta Python-typanteckningar för bättre koddokumentation
- **Innehåller** en detaljerad docstring som förklarar funktionens syfte och parametrar
- **Returnerar** endast svarsinnehållet för enkel användning i vår web-API
- **Behåller** samma modellparametrar för konsekvent AI-beteende

### Systempromptens magi: programmera AI-personlighet

Om parametrarna styr hur AI tänker, styr systempromptar vem AI tror att den är. Detta är ärligt talat en av de coolaste delarna av att jobba med AI – du ger i princip AI en komplett personlighet, expertisnivå och kommunikationsstil.

**Tänk på systempromptar som att casta olika skådespelare för olika roller**: Istället för att ha en generisk assistent kan du skapa specialiserade experter för olika situationer. Behöver du en tålmodig lärare? En kreativ brainstormingpartner? En rak affärsrådgivare? Byt bara systemprompt!

#### Varför systempromptar är så kraftfulla

Det fascinerande är att AI-modeller har tränats på otaliga konversationer där människor antar olika roller och nivåer av expertis. När du ger AI en specifik roll är det som att slå på en strömbrytare som aktiverar alla dessa inlärda mönster.

**Det är som metodskådespeleri för AI**: Säg till en skådespelare "du är en vis gammal professor" och se hur hen automatiskt anpassar hållning, vokabulär och beteenden. AI gör något anmärkningsvärt liknande med språk.

#### Skapa effektiva systempromptar: Konst och vetenskap

**Anatomien för en bra systemprompt:**
1. **Roll/identitet**: Vem är AI:n?
2. **Expertis**: Vad kan hen?
3. **Kommunikationsstil**: Hur talar hen?
4. **Specifika instruktioner**: Vad ska hen fokusera på?

```python
# ❌ Vagt systemmeddelande
"You are helpful."

# ✅ Detaljerat, effektivt systemmeddelande
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Exempel på systempromptar med kontext

Låt oss se hur olika systempromptar skapar helt olika AI-personligheter:

```python
# Exempel 1: Den tålmodiga läraren
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Exempel 2: Den kreativa samarbetspartnern
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Exempel 3: Den strategiska affärsrådgivaren
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Se systempromptar i praktiken

Låt oss testa samma fråga med olika systempromptar för att se dramatiska skillnader:

**Fråga**: "Hur hanterar jag användarautentisering i min webbapp?"

```python
# Med läraruppmaning:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typiskt svar: "Bra fråga! Låt oss bryta ner autentisering i enkla steg.
# Tänk på det som en klubbvakts kontroll av ID..."

# Med affärsuppmaning:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typiskt svar: "Ur ett strategiskt perspektiv är autentisering avgörande för användarnas
# förtroende och regleringsöverensstämmelse. Låt mig skissera en ram som tar hänsyn till säkerhet,
# användarupplevelse och skalbarhet..."
```

#### Avancerade systemprompttekniker

**1. Kontextsetup**: Ge AI bakgrundsinformation
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Utdatas formatering**: Berätta för AI:n hur svar ska struktureras
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

**3. Begränsningar**: Definiera vad AI:n inte ska göra
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Varför detta är viktigt för din chattassistent

Att förstå system-promptar ger dig otrolig makt att skapa specialiserade AI-assistenter:
- **Kundservicerobot**: Hjälpsam, tålmodig, medveten om policyer
- **Lärare/tutor**: Uppmuntrande, steg-för-steg, kontrollerar förståelsen
- **Kreativ partner**: Fantasifull, bygger vidare på idéer, frågar "tänk om?"
- **Teknisk expert**: Precise, detaljerad, säkerhetsmedveten

**Den viktigaste insikten**: Du anropar inte bara ett AI API – du skapar en skräddarsydd AI-personlighet som tjänar ditt specifika användningsområde. Det är detta som gör moderna AI-applikationer anpassade och användbara istället för generiska.

### 🎯 Pedagogisk paus: Programmera AI-personligheter

**Pausa och reflektera**: Du har precis lärt dig att programmera AI-personligheter genom system-promptar. Detta är en grundläggande färdighet i modern AI-applikationsutveckling.

**Snabb självutvärdering**:
- Kan du förklara hur system-promptar skiljer sig från vanliga användarmeddelanden?
- Vad är skillnaden mellan temperatur och top_p parametrarna?
- Hur skulle du skapa en system-prompt för ett specifikt användningsfall (t.ex. en programmeringslärare)?

**Verklighetskoppling**: System-prompt teknikerna du har lärt dig används i alla större AI-applikationer - från GitHub Copilots kodassistans till ChatGPT:s konversationsgränssnitt. Du bemästrar samma mönster som AI-produktteam på stora teknikföretag använder.

**Utmanande fråga**: Hur kan du designa olika AI-personligheter för olika användartyper (nybörjare vs expert)? Fundera på hur samma underliggande AI-modell kan betjäna olika målgrupper genom prompt-engineering.

## Bygga Web API med FastAPI: Din högpresterande AI-kommunikationsnav

Nu bygger vi backend som kopplar din frontend till AI-tjänster. Vi använder FastAPI, ett modernt Python-ramverk som utmärker sig på att bygga API:er för AI-applikationer.

FastAPI erbjuder flera fördelar för denna typ av projekt: inbyggt stöd för async för att hantera samtidiga förfrågningar, automatisk generering av API-dokumentation och utmärkt prestanda. Din FastAPI-server fungerar som en mellanhand som tar emot förfrågningar från frontend, kommunicerar med AI-tjänster och returnerar formaterade svar.

### Varför FastAPI för AI-applikationer?

Du kanske undrar: "Kan jag inte bara anropa AI direkt från min frontend-JavaScript?" eller "Varför FastAPI istället för Flask eller Django?" Bra frågor!

**Här är varför FastAPI är perfekt för vad vi bygger:**
- **Async som standard**: Kan hantera flera AI-förfrågningar samtidigt utan att blockera
- **Automatisk dokumentation**: Besök `/docs` och få en snygg, interaktiv API-dokumentationssida helt gratis
- **Inbyggd validering**: Fångar fel innan de orsakar problem
- **Supersnabb**: Ett av de snabbaste Python-ramverken som finns
- **Modern Python**: Använder alla senaste funktioner och förbättringar i Python

**Och här är varför vi alls behöver en backend:**

**Säkerhet**: Din AI API-nyckel är som ett lösenord – om du lägger den i frontend-JavaScript kan vem som helst som ser din webbplats källkod stjäla den och använda dina AI-krediter. Backend håller känsliga autentiseringsuppgifter säkra.

**Hastighetsbegränsning & Kontroll**: Backend låter dig styra hur ofta användare får göra förfrågningar, implementera användarautentisering och lägga till loggning för att spåra användning.

**Databehandling**: Du kanske vill spara konversationer, filtrera olämpligt innehåll eller kombinera flera AI-tjänster. Backenden är där denna logik bor.

**Arkitekturen liknar en klient-server modell:**
- **Frontend**: Användargränssnittet för interaktion
- **Backend API**: Förfrågningshantering och routing
- **AI-tjänst**: Extern beräkning och svarsgenerering
- **Miljövariabler**: Säker konfigurations- och autentiseringslagring

### Förstå förfrågnings- och svarflödet

Låt oss följa vad som händer när en användare skickar ett meddelande:

```mermaid
sequenceDiagram
    participant User as 👤 Användare
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI-tjänst
    
    User->>Frontend: Skriver "Hej AI!"
    Frontend->>API: POST /hello {"message": "Hej AI!"}
    Note over API: Validerar förfrågan<br/>Lägger till systemprompt
    API->>AI: Skickar formaterad förfrågan
    AI->>API: Returnerar AI-svar
    Note over API: Bearbetar svar<br/>Loggar konversation
    API->>Frontend: {"response": "Hej! Hur kan jag hjälpa till?"}
    Frontend->>User: Visar AI-meddelande
```
**Förstå varje steg:**
1. **Användarinteraktion**: Personen skriver i chattgränssnittet
2. **Frontend processing**: JavaScript fångar inmatningen och formaterar den som JSON
3. **API-validering**: FastAPI validerar automatiskt förfrågan med Pydantic-modeller
4. **AI-integration**: Backend lägger till kontext (system-prompt) och anropar AI-tjänsten
5. **Svarshantering**: API tar emot AI-svar och kan modifiera det vid behov
6. **Frontendvisning**: JavaScript visar svaret i chattgränssnittet

### Förstå API-arkitektur

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hej AI!"}
    FastAPI->>AI Function: call_llm(meddelande, system_prompt)
    AI Function->>GitHub Models: API-förfrågan
    GitHub Models->>AI Function: AI-svar
    AI Function->>FastAPI: svarstext
    FastAPI->>Frontend: {"svar": "Hej! Hur kan jag hjälpa?"}
```
```mermaid
flowchart TD
    A[Användarinmatning] --> B[Frontendvalidering]
    B --> C[HTTP POST-förfrågan]
    C --> D[FastAPI Router]
    D --> E[Pydantic validering]
    E --> F[AI Funktionsanrop]
    F --> G[GitHub Models API]
    G --> H[Svarsbehandling]
    H --> I[JSON-svar]
    I --> J[Frontenduppdatering]
    
    subgraph "Säkerhetslager"
        K[CORS Middleware]
        L[Miljövariabler]
        M[Felkorrigering]
    end
    
    D --> K
    F --> L
    H --> M
```
### Skapa FastAPI-applikationen

Låt oss bygga vår API steg för steg. Skapa en fil som heter `api.py` med följande FastAPI-kod:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfigurera loggning
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Skapa FastAPI-applikation
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfigurera CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Konfigurera lämpligt för produktion
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic-modeller för begäran/svar validering
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
        # Extrahera och validera meddelande
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Anropa AI-tjänst (notera: call_llm bör göras asynkron för bättre prestanda)
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
- **Importer** FastAPI för moderna webbramverksfunktioner och Pydantic för datavalidering
- **Skapar** automatisk API-dokumentation (tillgänglig på `/docs` när servern körs)
- **Aktiverar** CORS-middleware för att tillåta frontend-förfrågningar från olika ursprung
- **Definierar** Pydantic-modeller för automatisk validering och dokumentation av förfrågningar/svar
- **Använder** asynkrona endpoints för bättre prestanda med samtidiga förfrågningar
- **Implementerar** korrekta HTTP-statuskoder och felhantering med HTTPException
- **Inkluderar** strukturerad loggning för övervakning och felsökning
- **Erbjuder** hälso-check endpoint för statusövervakning

**Viktiga FastAPI-fördelar jämfört med traditionella ramverk:**
- **Automatisk validering**: Pydantic-modeller säkerställer dataintegritet före bearbetning
- **Interaktiv dokumentation**: Besök `/docs` för automatiskt genererad och testbar API-dokumentation
- **Typsäkerhet**: Python-typanmärkningar förhindrar runtime-fel och förbättrar kodkvaliteten
- **Async-stöd**: Hantera flera AI-förfrågningar samtidigt utan blockering
- **Prestanda**: Avsevärt snabbare förfrågningshantering för realtidsapplikationer

### Förstå CORS: Webbsäkerhetens vakt

CORS (Cross-Origin Resource Sharing) är som en säkerhetsvakt vid en byggnad som kontrollerar om besökare får komma in. Låt oss förstå varför detta är viktigt och hur det påverkar din applikation.

#### Vad är CORS och varför finns det?

**Problemet**: Tänk om vilken webbplats som helst kunde skicka förfrågningar till din banks webbplats i ditt namn utan din tillåtelse. Det skulle vara en säkerhetskatastrof! Webbläsare förhindrar detta som standard via "Same-Origin Policy".

**Same-Origin Policy**: Webbläsare tillåter endast webbsidor att göra förfrågningar till samma domän, port och protokoll som de laddades från.

**Verklig analogi**: Det är som säkerheten i ett flerfamiljshus – endast boende (samma ursprung) kan komma in som standard. Vill du släppa in en vän (annat ursprung) måste du meddela säkerheten att det är okej.

#### CORS i din utvecklingsmiljö

Under utveckling körs frontend och backend på olika portar:
- Frontend: `http://localhost:3000` (eller file:// om du öppnar HTML direkt)
- Backend: `http://localhost:5000`

Dessa anses vara "olika ursprung" fast de finns på samma dator!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Detta säger till webbläsare: "Det är okej för andra ursprung att göra förfrågningar till detta API"
```

**Vad CORS-konfiguration gör i praktiken:**
- **Lägger till** speciella HTTP-headers i API-svaren som säger till webbläsare "den här cross-origin-förfrågan är tillåten"
- **Hantera** "preflight"-förfrågningar (webbläsare kontrollerar ibland behörigheter innan den faktiska förfrågan skickas)
- **Förebygger** det fruktade "blocked by CORS policy"-felet i webbläsarkonsolen

#### CORS-säkerhet: Utveckling vs produktion

```python
# 🚨 Utveckling: Tillåter ALLA ursprung (bekvämt men osäkert)
CORS(app)

# ✅ Produktion: Tillåt endast din specifika frontenddomän
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Avancerat: Olika ursprung för olika miljöer
if app.debug:  # Utvecklingsläge
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Produktionsläge
    CORS(app, origins=["https://yourdomain.com"])
```

**Varför detta spelar roll**: I utveckling är `CORS(app)` som att lämna ytterdörren olåst – bekvämt men inte säkert. I produktion vill du specificera exakt vilka webbplatser som får anropa ditt API.

#### Vanliga CORS-scenarier och lösningar

| Scenario | Problem | Lösning |
|----------|---------|----------|
| **Lokal utveckling** | Frontend når inte backend | Lägg till CORSMiddleware i FastAPI |
| **GitHub Pages + Heroku** | Utplacerad frontend når ej API | Lägg till GitHub Pages URL i CORS-origin |
| **Egen domän** | CORS-fel i produktion | Uppdatera CORS origins att matcha din domän |
| **Mobilapp** | App når ej webb-API | Lägg till appens domän eller använd `*` med försiktighet |

**Tips**: Du kan kontrollera CORS-headers i webbläsarens utvecklarverktyg under fliken Nätverk. Leta efter headers som `Access-Control-Allow-Origin` i svaret.

### Felhantering och validering

Lägg märke till hur vår API inkluderar korrekt felhantering:

```python
# Validera att vi mottagit ett meddelande
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Viktiga valideringsprinciper:**
- **Kontrollerar** att nödvändiga fält finns innan förfrågningar bearbetas
- **Returnerar** meningsfulla felmeddelanden i JSON-format
- **Använder** lämpliga HTTP-statuskoder (400 för ogiltiga förfrågningar)
- **Ger** tydlig feedback för att hjälpa frontend-utvecklare att felsöka

## Sätta upp och köra din backend

Nu när vi har vår AI-integration och FastAPI-server redo, låt oss få allt att fungera. Installationsprocessen inkluderar att installera Python-beroenden, konfigurera miljövariabler och starta utvecklingsservern.

### Python-miljöuppsättning

Låt oss sätta upp din Python-utvecklingsmiljö. Virtuella miljöer är som Manhattanprojektets kompartmentsmetod – varje projekt får sin egen isolerade bubbla med specifika verktyg och beroenden, vilket förhindrar konflikter mellan projekt.

```bash
# Navigera till din backend-katalog
cd backend

# Skapa en virtuell miljö (som att skapa ett rent rum för ditt projekt)
python -m venv venv

# Aktivera den (Linux/Mac)
source ./venv/bin/activate

# På Windows, använd:
# venv\Scripts\activate

# Installera de bra grejerna
pip install openai fastapi uvicorn python-dotenv
```

**Vad vi precis gjorde:**
- **Skapade** vår egen lilla Python-bubbla där vi kan installera paket utan att påverka annat
- **Aktiverade** den så terminalen vet att använda just denna miljö
- **Installerade** grunderna: OpenAI för AI-magi, FastAPI för vårt web-API, Uvicorn för att köra det och python-dotenv för säker hantering av hemligheter

**Viktiga beroenden förklarade:**
- **FastAPI**: Modernt, snabbt webbramverk med automatisk API-dokumentation
- **Uvicorn**: Supersnabb ASGI-server som kör FastAPI-applikationer
- **OpenAI**: Officiellt bibliotek för GitHub-modeller och OpenAI API-integration
- **python-dotenv**: Säker laddning av miljövariabler från .env-filer

### Miljökonfiguration: Hålla hemligheter säkra

Innan vi startar vår API måste vi prata om en av de viktigaste lärdomarna i webb-utveckling: hur du håller dina hemligheter verkligen hemliga. Miljövariabler är som ett säkert valv som bara din applikation kan komma åt.

#### Vad är miljövariabler?

**Tänk på miljövariabler som ett säkerhetsskåp** – du lägger dina värdefulla saker där och bara du (och din app) har nyckeln att ta ut dem. Istället för att skriva känslig information direkt i koden (där bokstavligen vem som helst kan se den), sparar du dem säkert i miljön.

**Skillnaden är:**
- **Fel sätt**: Skriva lösenordet på en klisterlapp och sätta på din skärm
- **Rätt sätt**: Hålla lösenordet i en säker lösenordshanterare som bara du kan komma åt

#### Varför miljövariabler är viktiga

```python
# 🚨 GÖR ALDRIG SÅ HÄR - API-nyckel synlig för alla
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Vem som helst kan stjäla denna!
    base_url="https://models.github.ai/inference"
)

# ✅ GÖR SÅ HÄR - API-nyckel lagrad säkert
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Endast din app kan komma åt detta
    base_url="https://models.github.ai/inference"
)
```

**Vad som händer om du hårdkodar hemligheter:**
1. **Versionkontroll-exponering**: Alla med tillgång till ditt Git-repo ser din API-nyckel
2. **Publika repos**: Om du pushar till GitHub är din nyckel synlig för hela internet
3. **Delning i team**: Andra utvecklare får tillgång till din personliga API-nyckel
4. **Säkerhetsbrott**: Om någon stjäl din API-nyckel kan de använda dina AI-krediter

#### Skapa din miljöfil

Skapa en `.env`-fil i ditt backend-katalog. Denna fil lagrar hemligheter lokalt:

```bash
# .env-fil - Denna ska ALDRIG begås till Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Förstå .env-filen:**
- **En hemlighet per rad** i `KEY=value`-format
- **Inga mellanslag** runt lika med-tecknet
- **Inga citattecken** runt värden (oftast)
- **Kommentarer** börjar med `#`

#### Skapa din personliga GitHub Access-token

Din GitHub-token är som ett speciellt lösenord som ger din applikation behörighet att använda GitHubs AI-tjänster:

**Steg för steg-token skapande:**
1. **Gå till GitHub Settings** → Developer settings → Personal access tokens → Tokens (classic)
2. **Klicka på "Generate new token (classic)"**
3. **Ställ in utgångsdatum** (30 dagar för test, längre för produktion)
4. **Välj scopes**: Markera "repo" och andra behörigheter du behöver
5. **Generera token** och kopiera direkt (du kan inte se den igen!)
6. **Klistra in i din .env-fil**

```bash
# Exempel på hur din token ser ut (detta är fejk!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Ladda miljövariabler i Python

```python
import os
from dotenv import load_dotenv

# Ladda miljövariabler från .env-filen
load_dotenv()

# Nu kan du komma åt dem säkert
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
- **Kontrollerar** om den krävs token finns (bra felhantering!)
- **Häver** ett tydligt fel om token saknas
- **Använder** token säkert utan att exponera den i koden

#### Git-säkerhet: .gitignore-filen

Din `.gitignore`-fil talar om för Git vilka filer som aldrig ska spåras eller laddas upp:

```bash
# .gitignore - Lägg till dessa rader
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Varför detta är avgörande**: När du lägger till `.env` i `.gitignore` kommer Git ignorera din miljöfil, vilket förhindrar att du av misstag laddar upp dina hemligheter till GitHub.

#### Olika miljöer, olika hemligheter

Professionella applikationer använder olika API-nycklar för olika miljöer:

```bash
# .env.utveckling
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.produktion
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Varför detta är viktigt**: Du vill inte att dina utvecklingsexperiment påverkar din produktions AI-kvot, och du vill ha olika säkerhetsnivåer för olika miljöer.

### Starta din utvecklingsserver: Ge liv åt FastAPI


Nu kommer det spännande ögonblicket – att starta din FastAPI-utvecklingsserver och se din AI-integration komma till liv! FastAPI använder Uvicorn, en blixtsnabb ASGI-server som är speciellt utformad för asynkrona Python-applikationer.

#### Förstå FastAPI-serverns startprocess

```bash
# Metod 1: Direkt Python-körning (inkluderar automatisk omladdning)
python api.py

# Metod 2: Använder Uvicorn direkt (mer kontroll)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

När du kör detta kommando händer följande bakom kulisserna:

**1. Python laddar din FastAPI-applikation**:
- Importerar alla nödvändiga bibliotek (FastAPI, Pydantic, OpenAI, etc.)
- Laddar miljövariabler från din `.env`-fil
- Skapar FastAPI-applikationsinstansen med automatisk dokumentation

**2. Uvicorn konfigurerar ASGI-servern**:
- Binder till port 5000 med asynkrona förfrågningshanteringsmöjligheter
- Sätter upp routing av förfrågningar med automatisk validering
- Aktiverar hot reload för utveckling (startar om vid filändringar)
- Genererar interaktiv API-dokumentation

**3. Servern börjar lyssna**:
- Din terminal visar: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Servern kan hantera flera samtidiga AI-förfrågningar
- Din API är redo med automatisk dokumentation på `http://localhost:5000/docs`

#### Vad du ska se när allt fungerar

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
- **Will watch for changes**: Automatisk omladdning aktiverad för utveckling
- **Uvicorn running**: Högpresterande ASGI-server är aktiv
- **Started reloader process**: Filövervakare för automatisk omstart
- **Application startup complete**: FastAPI-app initierad framgångsrikt
- **Interactive docs available**: Besök `/docs` för automatisk API-dokumentation

#### Testa din FastAPI: Flera kraftfulla metoder

FastAPI erbjuder flera bekväma sätt att testa din API, inklusive automatisk interaktiv dokumentation:

**Metod 1: Interaktiv API-dokumentation (Rekommenderad)**
1. Öppna din webbläsare och gå till `http://localhost:5000/docs`
2. Du kommer att se Swagger UI med alla dina endpoints dokumenterade
3. Klicka på `/hello` → "Try it out" → Mata in ett testmeddelande → "Execute"
4. Se svaret direkt i webbläsaren med korrekt formatering

**Metod 2: Grundläggande webbläsartest**
1. Gå till `http://localhost:5000` för rot-endpointen
2. Gå till `http://localhost:5000/health` för att kontrollera serverhälsan
3. Detta bekräftar att din FastAPI-server körs korrekt

**Metod 2: Kommandoradstest (Avancerat)**
```bash
# Testa med curl (om tillgängligt)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Förväntat svar:
# {"response": "Hej! Jag är din AI-assistent. Hur kan jag hjälpa dig idag?"}
```

**Metod 3: Python-testskript**
```python
# test_api.py - Skapa denna fil för att testa ditt API
import requests
import json

# Testa API-endpointen
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
| `KeyError: 'GITHUB_TOKEN'` | Miljövariabel saknas | Kontrollera din `.env`-fil och `load_dotenv()`-anropet |
| `Address already in use` | Port 5000 är upptagen | Avsluta andra processer som använder port 5000 eller byt port |
| `ValidationError` | Förfrågningsdata matchar inte Pydantic-modellen | Kontrollera att din förfrågan följer korrekt schema |
| `HTTPException 422` | Kan inte bearbeta enheten | Validering av förfrågan misslyckades, kontrollera `/docs` för korrekt format |
| `OpenAI API error` | AI-tjänstens autentisering misslyckades | Verifiera att din GitHub-token är korrekt och har rätt behörigheter |

#### Utvecklingsbästa praxis

**Hot Reloading**: FastAPI med Uvicorn ger automatisk omladdning när du sparar ändringar i dina Python-filer. Det betyder att du kan ändra din kod och testa direkt utan att behöva starta om manuellt.

```python
# Aktivera het omladdning uttryckligen
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True aktiverar het omladdning
```

**Loggning för utveckling**: Lägg till loggning för att förstå vad som händer:

```python
import logging

# Ställ in loggning
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

**Varför loggning hjälper**: Under utveckling kan du se exakt vilka förfrågningar som kommer in, vad AI:n svarar med och var fel uppstår. Detta gör felsökning mycket snabbare.

### Konfiguration för GitHub Codespaces: Molnutveckling gjort enkelt

GitHub Codespaces är som att ha en kraftfull utvecklingsdator i molnet som du kan komma åt från vilken webbläsare som helst. Om du arbetar i Codespaces finns det några extra steg för att göra din backend tillgänglig för din frontend.

#### Förstå Codespaces nätverk

I en lokal utvecklingsmiljö körs allt på samma dator:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (eller file://)

I Codespaces körs din utvecklingsmiljö på GitHubs servrar, så "localhost" har en annan betydelse. GitHub skapar automatiskt offentliga URL:er för dina tjänster, men du måste konfigurera dem korrekt.

#### Steg-för-steg Codespaces-konfiguration

**1. Starta din backend-server**:
```bash
cd backend
python api.py
```

Du kommer att se det välbekanta FastAPI/Uvicorn-startmeddelandet, men notera att det körs i Codespace-miljön.

**2. Konfigurera portsynlighet**:
- Leta efter fliken "Ports" i undre panelen i VS Code
- Hitta port 5000 i listan
- Högerklicka på port 5000
- Välj "Port Visibility" → "Public"

**Varför göra den offentlig?** Som standard är Codespace-portar privata (endast åtkomliga för dig). Att göra den offentlig tillåter din frontend (som körs i webbläsaren) att kommunicera med din backend.

**3. Hämta din offentliga URL**:
Efter att du gjort porten offentlig ser du en URL som:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Uppdatera din frontend-konfiguration**:
```javascript
// I din frontend app.js, uppdatera BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Förstå Codespace-URL:er

Codespace-URL:er följer ett förutsägbart mönster:
```
https://[codespace-name]-[port].app.github.dev
```

**Delarna i detta:**
- `codespace-name`: En unik identifierare för din Codespace (inkluderar vanligtvis ditt användarnamn)
- `port`: Portnumret där din tjänst körs (5000 för vår FastAPI-app)
- `app.github.dev`: GitHubs domän för Codespace-applikationer

#### Testa din Codespace-installation

**1. Testa backend direkt**:
Öppna din offentliga URL i en ny webbläsarflik. Du bör se:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testa med webbläsarens utvecklarverktyg**:
```javascript
// Öppna webbläsarkonsolen och testa ditt API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces jämfört med lokal utveckling

| Aspekt | Lokal utveckling | GitHub Codespaces |
|--------|------------------|-------------------|
| **Installationstid** | Längre (installera Python, beroenden) | Omedelbar (förkonfigurerad miljö) |
| **URL-åtkomst** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Portkonfiguration** | Automatisk | Manuell (gör portar offentliga) |
| **Filsparande** | Lokal dator | GitHub-repository |
| **Samarbete** | Svårt att dela miljö | Lätt att dela Codespace-länk |
| **Internetberoende** | Endast för AI API-anrop | Krävs för allt |

#### Tips för Codespace-utveckling

**Miljövariabler i Codespaces**:
Din `.env`-fil fungerar på samma sätt i Codespaces, men du kan också sätta miljövariabler direkt i Codespace:

```bash
# Sätt miljövariabel för den aktuella sessionen
export GITHUB_TOKEN="your_token_here"

# Eller lägg till i din .bashrc för beständighet
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Porthantering**:
- Codespaces upptäcker automatiskt när din applikation börjar lyssna på en port
- Du kan vidarebefordra flera portar samtidigt (användbart om du lägger till en databas senare)
- Portar förblir åtkomliga så länge din Codespace körs

**Utvecklingsarbetsflöde**:
1. Gör kodändringar i VS Code
2. FastAPI omladdar automatiskt (tack vare Uvicorns reload-läge)
3. Testa ändringarna direkt via den offentliga URL:en
4. Commita och pusha när du är klar

> 💡 **Proffstips**: Bokmärk din Codespace backend-URL under utvecklingen. Eftersom Codespace-namn är stabila kommer URL:en inte att ändras så länge du använder samma Codespace.

## Skapa frontend-chatgränssnittet: Där människor möter AI

Nu bygger vi användargränssnittet – den del som bestämmer hur människor interagerar med din AI-assistent. Precis som designen av den ursprungliga iPhone-gränssnittet fokuserar vi på att göra komplex teknik intuitiv och naturlig att använda.

### Förstå modern frontend-arkitektur

Vårt chattgränssnitt kommer att vara vad vi kallar en "Single Page Application" eller SPA. Istället för den gamla skolan där varje klick laddar en ny sida uppdaterar vår app smidigt och omedelbart:

**Gamla webbplatser**: Som att läsa en fysisk bok – du bläddrar till helt nya sidor  
**Vår chattapp**: Som att använda din telefon – allt flyter och uppdateras sömlöst

```mermaid
graph TD
    A[Användaren skriver meddelande] --> B[JavaScript fångar inmatning]
    B --> C[Validera & formatera data]
    C --> D[Skicka till backend-API]
    D --> E[Visa laddningstillstånd]
    E --> F[Mottag AI-svar]
    F --> G[Uppdatera chattgränssnitt]
    G --> H[Redo för nästa meddelande]
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
        +handleSubmit(händelse)
        +callAPI(meddelande)
        +appendMessage(text, roll)
        +escapeHtml(text)
        +scrollToBottom()
        +setLoading(ärLaddning)
    }
    
    ChatApp --> DOM : manipulerar
    ChatApp --> FastAPI : skickar förfrågningar
```
### De tre pelarna i frontend-utveckling

Varje frontend-applikation – från enkla webbplatser till komplexa appar som Discord eller Slack – är byggd på tre kärnteknologier. Tänk på dem som grunden för allt du ser och interagerar med på webben:

**HTML (Struktur)**: Detta är din grund  
- Bestämmer vilka element som finns (knappar, textrutor, behållare)  
- Ger mening åt innehållet (detta är en rubrik, detta är ett formulär, osv.)  
- Skapar den grundläggande strukturen som allt annat bygger på

**CSS (Presentation)**: Detta är din inredningsdesigner  
- Får allt att se vackert ut (färger, typsnitt, layout)  
- Hanterar olika skärmstorlekar (telefon vs laptop vs surfplatta)  
- Skapar smidiga animationer och visuella återkopplingar

**JavaScript (Beteende)**: Detta är din hjärna  
- Svarar på användarens handlingar (klick, tangenttryck, scroll)  
- Kommunicerar med din backend och uppdaterar sidan  
- Gör allt interaktivt och dynamiskt

**Tänk på det som arkitektonisk design:**  
- **HTML**: Den strukturella ritningen (definierar utrymmen och relationer)  
- **CSS**: Den estetiska och miljömässiga designen (visuell stil och användarupplevelse)  
- **JavaScript**: De mekaniska systemen (funktionalitet och interaktivitet)

### Varför modern JavaScript-arkitektur är viktig

Vår chattapplikation kommer att använda moderna JavaScript-mönster som du ser i professionella applikationer. Att förstå dessa koncept hjälper dig när du växer som utvecklare:

**Klassbaserad arkitektur**: Vi organiserar vår kod i klasser, vilket är som att skapa ritningar för objekt  
**Async/Await**: Modernt sätt att hantera operationer som tar tid (som API-anrop)  
**Händelsedriven programmering**: Vår app reagerar på användarens handlingar (klick, tangenttryck) istället för att köra i en loop  
**DOM-manipulation**: Dynamisk uppdatering av webbsidans innehåll baserat på användarinteraktioner och API-svar

### Projektstrukturens upplägg

Skapa en frontend-mapp med denna organiserade struktur:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Förstå arkitekturen:**  
- **Separera** ansvar mellan struktur (HTML), beteende (JavaScript) och presentation (CSS)  
- **Bibehålla** en enkel filstruktur som är lätt att navigera och modifiera  
- **Följa** webb-standarder för organisation och underhållbarhet

### Bygga HTML-grunden: Semantisk struktur för tillgänglighet

Låt oss börja med HTML-strukturen. Modern webbutveckling betonar "semantisk HTML" – att använda HTML-element som tydligt beskriver deras syfte, inte bara deras utseende. Detta gör din applikation tillgänglig för skärmläsare, sökmotorer och andra verktyg.

**Varför semantisk HTML är viktigt**: Föreställ dig att du beskriver din chattapp för någon över telefon. Du skulle säga "det finns en header med titeln, ett huvudområde där konversationer visas och ett formulär längst ner för att skriva meddelanden." Semantisk HTML använder element som matchar denna naturliga beskrivning.

Skapa `index.html` med denna genomtänkta struktur:

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
- **`<!DOCTYPE html>`**: Säger till webbläsaren att detta är modern HTML5  
- **`<html lang="en">`**: Anger sidans språk för skärmläsare och översättningsverktyg  
- **`<meta charset="UTF-8">`**: Säkerställer korrekt teckenkodning för internationell text  
- **`<meta name="viewport"...>`**: Gör sidan mobilanpassad genom att kontrollera zoom och skala

#### Semantiska element
- **`<header>`**: Identifierar tydligt toppsektionen med titel och beskrivning  
- **`<main>`**: Anger huvudområdet (där konversationer sker)  
- **`<form>`**: Semantiskt korrekt för användarinmatning, möjliggör korrekt tangentbordsnavigering

#### Tillgänglighetsfunktioner
- **`role="log"`**: Berättar för skärmläsare att detta område innehåller en kronologisk logg av meddelanden  
- **`aria-live="polite"`**: Annonserar nya meddelanden för skärmläsare utan att avbryta  
- **`aria-label`**: Ger beskrivande etiketter för formulärkontroller  
- **`required`**: Webbläsaren validerar att användare anger ett meddelande innan skickande

#### CSS och JavaScript-integration
- **`class`-attribut**: Ger stilmöjligheter för CSS (exempelvis `chat-container`, `input-group`)  
- **`id`-attribut**: Gör att JavaScript kan hitta och manipulera specifika element  
- **Skriptplacering**: JavaScript-filen laddas sist så att HTML laddas först

**Varför denna struktur fungerar:**  
- **Logiskt flöde**: Header → Huvudinnehåll → Inmatningsformulär följer naturlig läsriktning  
- **Tangentbordsvänlig**: Användare kan tabba igenom alla interaktiva element  
- **Skärmläsarvänlig**: Tydliga landmärken och beskrivningar för synskadade användare  
- **Mobilanpassad**: Viewport-metadata möjliggör responsiv design  
- **Progressiv förbättring**: Fungerar även om CSS eller JavaScript inte laddas

### Lägga till interaktiv JavaScript: Modern webbapplikationslogik

Nu ska vi bygga JavaScript som ger vår chattgränssnitt liv. Vi kommer använda moderna JavaScript-mönster som du möter i professionell webbutveckling, inklusive ES6-klasser, async/await och händelsestyrd programmering.

#### Förstå modern JavaScript-arkitektur

Istället för att skriva proceduriell kod (en serie funktioner som körs i ordning), skapar vi en **klassbaserad arkitektur**. Tänk på en klass som en ritning för att skapa objekt – ungefär som en arkitekts ritning som kan användas för att bygga flera hus.

**Varför använda klasser för webbapplikationer?**
- **Organisation**: All relaterad funktionalitet samlas på ett ställe
- **Återanvändbarhet**: Du kan skapa flera chattinstanser på samma sida
- **Underhållbarhet**: Lättare att felsöka och modifiera specifika funktioner
- **Professionell standard**: Detta mönster används i ramverk som React, Vue och Angular

Skapa `app.js` med denna moderna, välstrukturerade JavaScript:

```javascript
// app.js - Modern chattapplikationslogik

class ChatApp {
    constructor() {
        // Hämta referenser till DOM-element vi behöver manipulera
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Konfigurera din backend-URL här
        this.BASE_URL = "http://localhost:5000"; // Uppdatera detta för din miljö
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Sätt upp event-lyssnare när chattappen skapas
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Lyssna efter formulärskick (när användaren klickar på Skicka eller trycker Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Lyssna också efter Enter-knappen i inmatningsfältet (bättre användarupplevelse)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Förhindra att formuläret uppdaterar sidan
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Skicka inte tomma meddelanden
        
        // Ge användaren återkoppling att något händer
        this.setLoading(true);
        
        // Lägg till användarmeddelandet i chatten omedelbart (optimistiskt UI)
        this.appendMessage(messageText, "user");
        
        // Rensa inmatningsfältet så att användaren kan skriva nästa meddelande
        this.input.value = '';
        
        try {
            // Anropa AI-API:et och vänta på svar
            const reply = await this.callAPI(messageText);
            
            // Lägg till AI-svar i chatten
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Återaktivera gränssnittet oavsett framgång eller misslyckande
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

// Initiera chattapplikationen när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Förstå varje JavaScript-koncept

**ES6-klassstruktur**:
```javascript
class ChatApp {
    constructor() {
        // Detta körs när du skapar en ny instans av ChatApp
        // Det är som "setup"-funktionen för din chatt
    }
    
    methodName() {
        // Metoder är funktioner som tillhör klassen
        // De kan komma åt klassens egenskaper med hjälp av "this"
    }
}
```

**Async/Await-mönster**:
```javascript
// Gammalt sätt (callback-helvete):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Modernt sätt (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Händelsestyrd programmering**:
Istället för att hela tiden kontrollera om något hänt, "lyssnar" vi på händelser:
```javascript
// När formuläret skickas, kör handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// När Enter-tangenten trycks, kör även handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-manipulation**:
```javascript
// Skapa nya element
const messageElement = document.createElement("div");

// Ändra deras egenskaper
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Lägg till på sidan
this.messages.appendChild(messageElement);
```

#### Säkerhet och bästa praxis

**XSS-skydd**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Detta undviker automatiskt HTML
    return div.innerHTML;
}
```

**Varför detta är viktigt**: Om en användare skriver `<script>alert('hack')</script>`, ser denna funktion till att den visas som text snarare än att den körs som kod.

**Felhantering**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Visa användarvänligt fel istället för att krascha appen
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Användarupplevelse**:
- **Optimistisk UI**: Lägg till användarens meddelande direkt, vänta inte på serversvar
- **Laddningsstatus**: Inaktivera knappar och visa "Skickar..." under väntan
- **Automatisk scroll**: Håll nyaste meddelandena synliga
- **Inputvalidering**: Skicka inte tomma meddelanden
- **Kortkommandon**: Enter-tangenten skickar meddelanden (som i riktiga chattappar)

#### Förstå applikationens flöde

1. **Sidan laddas** → `DOMContentLoaded`-händelsen triggas → `new ChatApp()` skapas
2. **Konstruktorn körs** → Hämtar DOM-element referenser → Ställer in event-lyssnare
3. **Användaren skriver meddelande** → Trycker på Enter eller klickar Skicka → `handleSubmit` körs
4. **handleSubmit** → Validerar input → Visar laddningsstatus → Anropar API
5. **API svarar** → Lägger till AI-meddelande i chatten → Återaktiverar gränssnittet
6. **Redo för nästa meddelande** → Användaren kan fortsätta chatta

Denna arkitektur är skalbar – du kan enkelt lägga till funktioner som redigering av meddelanden, filuppladdningar eller flera konversationsflöden utan att skriva om kärnstrukturen.

### 🎯 Pedagogisk avstämning: Modern frontend-arkitektur

**Arkitekturförståelse**: Du har implementerat en komplett enkel-sidapplikation med moderna JavaScript-mönster. Detta representerar professionellt frontend-utvecklingsarbete.

**Nyckelkoncept som behärskas**:
- **ES6-klassarkitektur**: Organiserad, underhållbar kodstruktur
- **Async/Await-mönster**: Modern asynkron programmering
- **Händelsestyrd programmering**: Responsiv användargränssnittsdesign
- **Säkerhetspraxis**: Skydd mot XSS och inputvalidering

**Branschkoppling**: De mönster du lärt dig (klassbaserad arkitektur, asynkrona operationer, DOM-manipulation) är grunden för moderna ramverk som React, Vue och Angular. Du bygger med samma arkitektur som används i produktionsapplikationer.

**Reflektionsfråga**: Hur skulle du utöka denna chattapplikation för att hantera flera konversationer eller användarautentisering? Fundera på arkitekturförändringar och hur klassstrukturen skulle utvecklas.

### Styla ditt chattgränssnitt

Nu skapar vi ett modernt, visuellt tilltalande chattgränssnitt med CSS. Bra styling gör att din applikation känns professionell och förbättrar den övergripande användarupplevelsen. Vi använder moderna CSS-funktioner som Flexbox, CSS Grid och egna variabler för en responsiv och tillgänglig design.

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
- **Använder** CSS-egna variabler för konsekvent tematisering och enkel underhållning
- **Implementerar** Flexbox-layout för responsiv design och korrekt justering
- **Inkluderar** mjuka animationer för meddelandevisning utan att vara störande
- **Erbjuder** visuell skillnad mellan användarmeddelanden, AI-svar och felstatusar
- **Stöder** responsiv design som fungerar på både skrivbord och mobila enheter
- **Tar hänsyn till** tillgänglighet med preferenser för reducerad rörelse och rätt kontraster
- **Erbjuder** mörkt läge baserat på användarens systeminställningar

### Konfigurera din backend-URL

Det sista steget är att uppdatera `BASE_URL` i din JavaScript till att matcha din backend-server:

```javascript
// För lokal utveckling
this.BASE_URL = "http://localhost:5000";

// För GitHub Codespaces (ersätt med din faktiska URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Hur du bestämmer backend-URL:**
- **Lokal utveckling**: Använd `http://localhost:5000` om både frontend och backend körs lokalt
- **Codespaces**: Hitta din backend-URL i fliken Ports efter att ha offentliggjort port 5000
- **Produktion**: Byt ut med din faktiska domän vid distribution till hostingtjänst

> 💡 **Testtips**: Du kan testa din backend direkt genom att besöka root-URL i din webbläsare. Du bör se välkomstmeddelandet från din FastAPI-server.

## Testning och distributionsflöde

Nu när du har byggt både frontend och backend, låt oss testa så allt fungerar tillsammans och utforska distributionsalternativ för att dela din chattassistent med andra.

### Lokalt testflöde

Följ dessa steg för att testa din kompletta applikation:

```mermaid
graph TD
    A[Starta Backend-server] --> B[Konfigurera miljövariabler]
    B --> C[Testa API-endpunkter]
    C --> D[Öppna frontend i webbläsaren]
    D --> E[Testa chattfunktionalitet]
    E --> F[Felsök eventuella problem]
```
**Steg-för-steg-testprocess:**

1. **Starta din backend-server**:
   ```bash
   cd backend
   source venv/bin/activate  # eller venv\Scripts\activate på Windows
   python api.py
   ```

2. **Verifiera att API fungerar**:
   - Öppna `http://localhost:5000` i webbläsaren
   - Du ska se välkomstmeddelandet från din FastAPI-server

3. **Öppna frontend**:
   - Navigera till din frontend-mapp
   - Öppna `index.html` i webbläsaren
   - Eller använd VS Code:s Live Server-extension för bättre utvecklingsupplevelse

4. **Testa chattfunktionen**:
   - Skriv ett meddelande i inputfältet
   - Klicka på "Skicka" eller tryck Enter
   - Kontrollera att AI svarar korrekt
   - Granska webbläsarens konsol för eventuella JavaScript-fel

### Vanliga problem och felsökning

| Problem | Symtom | Lösning |
|---------|----------|----------|
| **CORS-fel** | Frontend når inte backend | Kontrollera att FastAPI CORSMiddleware är korrekt konfigurerad |
| **API-nyckelfel** | 401 Unauthorized-respons | Kontrollera att din `GITHUB_TOKEN`-miljövariabel är satt |
| **Anslutning nekad** | Nätverksfel i frontend | Kontrollera backend-URL och att Flask-servern körs |
| **Inget AI-svar** | Tomma eller felaktiga svar | Granska backend-loggar för API-kvoter eller autentiseringsproblem |

**Vanliga felsökningssteg:**
- **Kontrollera** webbläsarens Developer Tools-konsol för JavaScript-fel
- **Verifiera** att Nätverksfliken visar lyckade API-anrop och svar
- **Granska** backend-terminaloutput för Python-fel eller API-problem
- **Bekräfta** att miljövariabler är korrekt laddade och tillgängliga

## 📈 Din tidslinje för utvecklingsmästerskap inom AI-applikationer

```mermaid
timeline
    title Komplett AI-applikationsutvecklingsresa
    
    section AI-grunder
        Förstå Generativ AI
            : Förstå koncept för mönsterigenkänning
            : Bemästra AI-parameterkontroll
            : Lära sig prompt-engineering-tekniker
        
        Integration av GitHub-modeller
            : Navigera AI-tjänsteplattformar
            : Hantera autentisering säkert
            : Optimera modellparametrar
    
    section Backend-utveckling
        Python API-arkitektur
            : Bygga FastAPI-applikationer
            : Implementera asynkrona operationer
            : Skapa säkra endpoints
        
        AI-tjänsteintegration
            : Anslut till externa AI-API:er
            : Hantera rate limiting
            : Implementera felhantering
    
    section Frontend-mästerskap
        Moderna JavaScript-mönster
            : Bemästra ES6-klassarkitektur
            : Implementera async/await-flöden
            : Bygga responsiva gränssnitt
        
        Realtidsanvändarupplevelse
            : Skapa dynamiska chattgränssnitt
            : Hantera laddningslägen
            : Optimera användarinteraktioner
    
    section Produktionsberedskap
        Säkerhet & Prestanda
            : Implementera säker tokenhantering
            : Förhindra XSS-sårbarheter
            : Optimera API-prestanda
        
        Professionell distribution
            : Bygga skalbara arkitekturer
            : Skapa underhållbar kod
            : Dokumentera utvecklingsprocesser
```
**🎓 Examensmilsten**: Du har framgångsrikt byggt en komplett AI-driven applikation med samma teknologier och arkitekturprinciper som driver moderna AI-assistenter. Dessa färdigheter representerar skärningen mellan traditionell webbutveckling och toppmodern AI-integration.

**🔄 Nästa nivå-färdigheter**:
- Redo att utforska avancerade AI-ramverk (LangChain, LangGraph)
- Förberedd att skapa multimodala AI-applikationer (text, bild, röst)
- Utrustad för att implementera vektordatabaser och återvinningstekniker
- Grund att bygga maskininlärning och finjustering av AI-modeller på

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att klara följande utmaning:

**Beskrivning:** Förbättra chattassistenten genom att lägga till konversationshistorik och persistens av meddelanden. Denna utmaning hjälper dig att förstå hur man hanterar tillstånd i chattappar och implementerar datalagring för bättre användarupplevelse.

**Uppgift:** Modifiera chattapplikationen så att konversationshistoriken sparas mellan sessioner. Lägg till funktionalitet för att spara chattmeddelanden i localStorage, visa konversationshistoriken när sidan laddas och inkludera en knapp "Rensa historik". Implementera även skrivindikatorer och tidstämplar för meddelanden för att göra chattupplevelsen mer realistisk.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## Uppgift: Bygg din personliga AI-assistent

Nu ska du skapa din egen AI-assistent-implementation. Istället för att bara kopiera tutorial-koden är detta en möjlighet att applicera koncepten medan du bygger något som speglar dina egna intressen och användningsområden.

### Projektkrav

Låt oss sätta upp ditt projekt med en ren, organiserad struktur:

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

### Kärnimplementation

**Backend-utveckling:**
- **Ta** vår FastAPI-kod och gör den till din egen
- **Skapa** en unik AI-personlighet – kanske en hjälpsam matlagningsassistent, en kreativ skrivpartner, eller en studiekamrat?
- **Lägg till** robust felhantering så att din app inte kraschar vid fel
- **Skriv** tydlig dokumentation för den som vill förstå hur ditt API fungerar

**Frontend-utveckling:**
- **Bygg** ett chattgränssnitt som känns intuitivt och välkomnande
- **Skriv** ren, modern JavaScript som du är stolt över att visa andra utvecklare
- **Designa** egen styling som speglar din AIs personlighet – roligt och färgstarkt? Rent och minimalistiskt? Helt upp till dig!
- **Se till att** det fungerar bra på både mobiler och datorer

**Personalisering:**
- **Välj** ett unikt namn och personlighet för din AI-assistent – kanske något som speglar dina intressen eller problem du vill lösa
- **Anpassa** det visuella utseendet för att matcha din assistents stil
- **Skriv** ett välkomnande meddelande som gör folk sugna på att börja chatta
- **Testa** din assistent med olika typer av frågor för att se hur den svarar

### Förbättringsidéer (valfritt)

Vill du ta ditt projekt till nästa nivå? Här är några roliga idéer att utforska:

| Funktion | Beskrivning | Färdigheter du övar |
|---------|-------------|---------------------|
| **Meddelandehistorik** | Kom ihåg konversationer även efter siduppdatering | Arbeta med localStorage, JSON-hantering |
| **Skrivindikatorer** | Visa "AI skriver..." under väntan | CSS-animationer, async-programmering |
| **Meddelandetidstämplar** | Visa när varje meddelande skickades | Datum-/tidsformattering, UX-design |
| **Exportera chatt** | Låt användare ladda ner sin konversation | Filhantering, dataexport |
| **Temaväxling** | Växla mellan ljus/mörkt läge | CSS-variabler, användarinställningar |
| **Röstinmatning** | Lägg till tal-till-text-funktionalitet | Web API:er, tillgänglighet |

### Testning och dokumentation

**Kvalitetssäkring:**
- **Testa** din applikation med olika inmatningar och gränsfall
- **Verifiera** att den responsiva designen fungerar på olika skärmstorlekar
- **Kontrollera** tillgänglighet med tangentbordsnavigering och skärmläsare
- **Validera** HTML och CSS för standardöverensstämmelse

**Dokumentationskrav:**
- **Skriv** en README.md som förklarar ditt projekt och hur man kör det
- **Bifoga** skärmdumpar av ditt chattgränssnitt i funktion
- **Dokumentera** unika funktioner eller anpassningar du gjort
- **Ge** tydliga installationsinstruktioner för andra utvecklare

### Inlämningsanvisningar

**Projektleveranser:**
1. Komplett projektmapp med all källkod
2. README.md med projektbeskrivning och installationsinstruktioner
3. Skärmdumpar som visar din chattassistent i aktion
4. Kort reflektion över vad du lärt dig och vilka utmaningar du mött

**Bedömningskriterier:**
- **Funktionalitet**: Fungerar chattassistenten som förväntat?
- **Kodkvalitet**: Är koden välorganiserad, kommenterad och underhållbar?
- **Design**: Är gränssnittet visuellt tilltalande och användarvänligt?
- **Kreativitet**: Hur unik och personligt anpassad är din implementation?
- **Dokumentation**: Är installationsinstruktionerna klara och fullständiga?

> 💡 **Framgångstips**: Börja med baskraven, sedan kan du lägga till förbättringar när allt fungerar. Fokusera på en polerad kärnupplevelse innan avancerade funktioner läggs till.

## Lösning

[Lösning](./solution/README.md)

## Bonusutmaningar

Redo att ta din AI-assistent till nästa nivå? Testa dessa avancerade utmaningar som fördjupar din förståelse av AI-integration och webbutveckling.

### Personlighetsanpassning

Den verkliga magin händer när du ger din AI-assistent en unik personlighet. Experimentera med olika systemprompter för att skapa specialiserade assistenter:

**Professionell assistent-exempel:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Kreativ skrivhjälp-exempel:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Teknisk mentor-exempel:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend-förbättringar

Förvandla ditt chattgränssnitt med dessa visuella och funktionella förbättringar:

**Avancerade CSS-funktioner:**
- **Implementera** mjuka animationsövergångar för meddelanden
- **Lägg till** anpassade chattbubblor med CSS-former och gradienter
- **Skapa** en skrivindikatoranimation för när AI "tänker"
- **Designa** emoji-reaktioner eller betygssystem för meddelanden

**JavaScript-förbättringar:**
- **Lägg till** kortkommandon (Ctrl+Enter för skicka, Escape för rensa input)
- **Implementera** sök- och filtreringsfunktion för meddelanden
- **Skapa** exportfunktion för konversation (ladda ner som text eller JSON)
- **Lägg till** autosparning till localStorage för att förhindra meddelandeförlust

### Avancerad AI-integration

**Flera AI-personligheter:**
- **Skapa** en dropdown för att växla mellan olika AI-personligheter
- **Spara** användarens valda personlighet i localStorage
- **Implementera** kontextswitching som behåller konversationsflödet

**Smart responsfunktioner:**
- **Lägg till** kontextmedvetenhet (AI kommer ihåg tidigare meddelanden)
- **Implementera** smarta förslag baserat på samtalsämnet
- **Skapa** snabbsvars-knappar för vanliga frågor

> 🎯 **Lärandemål**: Dessa bonusutmaningar hjälper dig att förstå avancerade mönster för webbutveckling och AI-integreringstekniker som används i produktionsapplikationer.

## Sammanfattning och nästa steg

Grattis! Du har framgångsrikt byggt en komplett AI-driven chattassistent från grunden. Detta projekt har gett dig praktisk erfarenhet av moderna webbutvecklingstekniker och AI-integrering – färdigheter som blir allt viktigare i dagens tekniklandskap.

### Vad du har åstadkommit

Under denna lektion har du behärskat flera viktiga teknologier och koncept:

**Backendutveckling:**
- **Integrerat** med GitHub Models API för AI-funktionalitet
- **Byggt** ett RESTful API med Flask med korrekt felhantering
- **Implementerat** säker autentisering med hjälp av miljövariabler
- **Konfigurerat** CORS för cross-origin-förfrågningar mellan frontend och backend

**Frontendutveckling:**
- **Skapat** ett responsivt chattgränssnitt med semantisk HTML
- **Implementerat** modern JavaScript med async/await och klassbaserad arkitektur
- **Designat** en engagerande användargränssnitt med CSS Grid, Flexbox och animationer
- **Lagt till** tillgänglighetsfunktioner och principer för responsiv design

**Full-stack-integrering:**
- **Kopplat ihop** frontend och backend via HTTP API-anrop
- **Hantera** realtidsanvändarinteraktioner och asynkron dataflöde
- **Implementerat** felhantering och användarfeedback genom hela applikationen
- **Testat** hela applikationsflödet från användarinmatning till AI-svar

### Viktiga läranderesultat

```mermaid
mindmap
  root((AI Chat App Skills))
    API Integration
      Autentisering
      Felhantering
      Asynkron Programmering
    Web Development
      HTML5 Semantik
      Modern CSS
      ES6+ JavaScript
    User Experience
      Responsiv Design
      Tillgänglighet
      Realtidsinteraktion
    AI Understanding
      Promptteknik
      Modellparametrar
      Samtalsflöde
```
Det här projektet har introducerat dig till grunderna för att bygga AI-drivna applikationer, vilket representerar framtiden för webbutveckling. Du förstår nu hur man integrerar AI-funktioner i traditionella webbapplikationer och skapar engagerande användarupplevelser som känns intelligenta och responsiva.

### Professionella tillämpningar

De färdigheter du utvecklat i denna lektion är direkt tillämpliga inom moderna mjukvaruutvecklingskarriärer:

- **Full-stack webbutveckling** med moderna ramverk och API:er
- **AI-integrering** i webbapplikationer och mobilappar
- **API-design och utveckling** för mikrotjänstarkitektur
- **Användargränssnittsutveckling** med fokus på tillgänglighet och responsiv design
- **DevOps-praktiker** inklusive miljökonfiguration och distribution

### Fortsätt din AI-utvecklingsresa

**Nästa lärandesteg:**
- **Utforska** mer avancerade AI-modeller och API:er (GPT-4, Claude, Gemini)
- **Lär dig** om prompt engineering-tekniker för bättre AI-svar
- **Studera** samtalsdesign och principer för chatbot-användarupplevelse
- **Undersök** AI-säkerhet, etik och ansvarsfull AI-utveckling
- **Bygg** mer komplexa applikationer med samtalsminne och kontextmedvetenhet

**Avancerade projektidéer:**
- Chattrum för flera användare med AI-moderering
- AI-drivna kundservice-chatbots
- Utbildande handledarassistenter med personaliserad inlärning
- Kreativa skrivsamarbeten med olika AI-personligheter
- Tekniska dokumentationsassistenter för utvecklare

## Kom igång med GitHub Codespaces

Vill du prova detta projekt i en molnbaserad utvecklingsmiljö? GitHub Codespaces erbjuder en komplett utvecklingsmiljö i webbläsaren, perfekt för att experimentera med AI-applikationer utan krav på lokal installation.

### Ställa in din utvecklingsmiljö

**Steg 1: Skapa från mall**
- **Navigera** till [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Klicka** på "Use this template" uppe till höger (se till att du är inloggad på GitHub)

![Create from template interface showing the green "Use this template" button](../../../translated_images/sv/template.67ad477109d29a2b.webp)

**Steg 2: Starta Codespaces**
- **Öppna** ditt nyss skapade repository
- **Klicka** på gröna "Code"-knappen och välj "Codespaces"
- **Välj** "Create codespace on main" för att starta din utvecklingsmiljö

![Create codespace interface with options for launching cloud development environment](../../../translated_images/sv/codespace.bcecbdf5d2747d3d.webp)

**Steg 3: Miljökonfiguration**
När din Codespace är laddad får du tillgång till:
- **Förinstallerade** Python, Node.js och alla nödvändiga utvecklingsverktyg
- **VS Code-gränssnitt** med tillägg för webbutveckling
- **Terminalåtkomst** för att köra backend och frontend-servrar
- **Port forwarding** för att testa dina applikationer

**Vad Codespaces erbjuder:**
- **Eliminerar** problem med lokal miljöinstallation och konfiguration
- **Ger** en konsekvent utvecklingsmiljö på olika enheter
- **Inkluderar** förkonfigurerade verktyg och tillägg för webbutveckling
- **Erbjuder** sömlös integration med GitHub för versionshantering och samarbete

> 🚀 **Proffstips**: Codespaces är perfekt för att lära sig och prototypa AI-applikationer eftersom det hanterar all komplex miljöuppsättning automatiskt, så att du kan fokusera på att bygga och lära snarare än konfigurering och felsökning.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ansvarsfriskrivning**:
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi eftersträvar noggrannhet, vänligen observera att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess modersmål bör betraktas som den auktoritativa källan. För viktig information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för några missförstånd eller feltolkningar som uppstår till följd av användningen av denna översättning.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->