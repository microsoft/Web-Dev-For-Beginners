<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e2c4ae5688e34b4b8b09d52aec56c79e",
  "translation_date": "2025-10-23T00:54:05+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "nl"
}
-->
# AI Framework

Ooit overweldigd gevoeld bij het proberen om AI-toepassingen vanaf nul te bouwen? Je bent niet de enige! AI-frameworks zijn als een Zwitsers zakmes voor AI-ontwikkeling - krachtige tools die je tijd en hoofdpijn besparen bij het bouwen van intelligente toepassingen. Denk aan een AI-framework als een goed georganiseerde bibliotheek: het biedt vooraf gebouwde componenten, gestandaardiseerde API's en slimme abstracties, zodat je je kunt concentreren op het oplossen van problemen in plaats van te worstelen met implementatiedetails.

In deze les gaan we onderzoeken hoe frameworks zoals LangChain complexe AI-integratietaken kunnen omzetten in schone, leesbare code. Je leert hoe je uitdagingen uit de echte wereld kunt aanpakken, zoals het bijhouden van gesprekken, het implementeren van toolgebruik en het combineren van verschillende AI-modellen via één uniforme interface.

Aan het einde van deze les weet je wanneer je frameworks moet gebruiken in plaats van directe API-aanroepen, hoe je hun abstracties effectief kunt benutten en hoe je AI-toepassingen kunt bouwen die klaar zijn voor gebruik in de echte wereld. Laten we ontdekken wat AI-frameworks voor jouw projecten kunnen betekenen.

## Waarom kiezen voor een framework?

Je bent klaar om een AI-app te bouwen - geweldig! Maar hier is het ding: je hebt verschillende paden die je kunt bewandelen, en elk heeft zijn eigen voor- en nadelen. Het is een beetje zoals kiezen tussen lopen, fietsen of rijden om ergens te komen - ze brengen je allemaal naar je bestemming, maar de ervaring (en inspanning) zal totaal anders zijn.

Laten we de drie belangrijkste manieren bekijken waarop je AI in je projecten kunt integreren:

| Aanpak | Voordelen | Beste voor | Overwegingen |
|--------|-----------|------------|--------------|
| **Directe HTTP-verzoeken** | Volledige controle, geen afhankelijkheden | Eenvoudige queries, basisprincipes leren | Meer uitgebreide code, handmatige foutafhandeling |
| **SDK-integratie** | Minder boilerplate, model-specifieke optimalisatie | Toepassingen met één model | Beperkt tot specifieke providers |
| **AI-frameworks** | Gecombineerde API, ingebouwde abstracties | Multi-model apps, complexe workflows | Leercurve, mogelijke over-abstractie |

### Voordelen van frameworks in de praktijk

```mermaid
graph TD
    A[Your Application] --> B[AI Framework]
    B --> C[OpenAI GPT]
    B --> D[Anthropic Claude]
    B --> E[GitHub Models]
    B --> F[Local Models]
    
    B --> G[Built-in Tools]
    G --> H[Memory Management]
    G --> I[Conversation History]
    G --> J[Function Calling]
    G --> K[Error Handling]
```

**Waarom frameworks belangrijk zijn:**
- **Combineert** meerdere AI-providers onder één interface
- **Beheert** gespreksgeheugen automatisch
- **Biedt** kant-en-klare tools voor veelvoorkomende taken zoals embeddings en functieaanroepen
- **Regelt** foutafhandeling en herhaal-logica
- **Maakt** complexe workflows leesbare methode-aanroepen

> 💡 **Pro Tip**: Gebruik frameworks bij het schakelen tussen verschillende AI-modellen of het bouwen van complexe functies zoals agents, geheugen of toolgebruik. Gebruik directe API's bij het leren van de basis of het bouwen van eenvoudige, gerichte toepassingen.

**Conclusie**: Net zoals het kiezen tussen gespecialiseerde gereedschappen van een vakman en een complete werkplaats, gaat het erom het juiste gereedschap te kiezen voor de taak. Frameworks blinken uit in complexe, uitgebreide toepassingen, terwijl directe API's goed werken voor eenvoudige gebruiksscenario's.

## Introductie

In deze les leren we:

- Een algemeen AI-framework te gebruiken.
- Veelvoorkomende problemen aan te pakken zoals chatgesprekken, toolgebruik, geheugen en context.
- Dit te benutten om AI-apps te bouwen.

## Je eerste AI-prompt

Laten we beginnen met de basis door je eerste AI-toepassing te maken die een vraag stelt en een antwoord terugkrijgt. Net zoals Archimedes het principe van verplaatsing ontdekte in zijn bad, leiden soms de eenvoudigste observaties tot de krachtigste inzichten - en frameworks maken deze inzichten toegankelijk.

### LangChain instellen met GitHub-modellen

We gaan LangChain gebruiken om verbinding te maken met GitHub-modellen, wat geweldig is omdat het je gratis toegang geeft tot verschillende AI-modellen. Het beste? Je hebt slechts een paar eenvoudige configuratieparameters nodig om aan de slag te gaan:

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# Send a simple prompt
response = llm.invoke("What's the capital of France?")
print(response.content)
```

**Laten we eens kijken wat hier gebeurt:**
- **Maakt** een LangChain-client aan met de `ChatOpenAI`-klasse - dit is jouw toegangspoort tot AI!
- **Configureert** de verbinding met GitHub-modellen met je authenticatietoken
- **Specificeert** welk AI-model te gebruiken (`gpt-4o-mini`) - zie dit als het kiezen van je AI-assistent
- **Stuurt** je vraag met de `invoke()`-methode - hier gebeurt de magie
- **Haalt** het antwoord op en toont het - en voilà, je praat met AI!

> 🔧 **Installatienotitie**: Als je GitHub Codespaces gebruikt, heb je geluk - de `GITHUB_TOKEN` is al ingesteld! Werk je lokaal? Geen zorgen, je hoeft alleen een persoonlijke toegangstoken aan te maken met de juiste permissies.

**Verwachte output:**
```text
The capital of France is Paris.
```

```mermaid
sequenceDiagram
    participant App as Your Python App
    participant LC as LangChain
    participant GM as GitHub Models
    participant AI as GPT-4o-mini
    
    App->>LC: llm.invoke("What's the capital of France?")
    LC->>GM: HTTP request with prompt
    GM->>AI: Process prompt
    AI->>GM: Generated response
    GM->>LC: Return response
    LC->>App: response.content
```

## Conversational AI bouwen

Het eerste voorbeeld laat de basis zien, maar het is slechts een enkele uitwisseling - je stelt een vraag, krijgt een antwoord en dat is het. In echte toepassingen wil je dat je AI onthoudt waar je het over hebt gehad, zoals hoe Watson en Holmes hun onderzoeksconversaties in de loop van de tijd opbouwden.

Hier komt LangChain bijzonder goed van pas. Het biedt verschillende berichttypen die helpen gesprekken te structureren en je AI een persoonlijkheid te geven. Je zult chatervaringen bouwen die context en karakter behouden.

### Begrijpen van berichttypen

Zie deze berichttypen als verschillende "rollen" die deelnemers dragen in een gesprek. LangChain gebruikt verschillende berichtklassen om bij te houden wie wat zegt:

| Berichttype | Doel | Voorbeeldgebruik |
|-------------|------|------------------|
| `SystemMessage` | Definieert AI-persoonlijkheid en gedrag | "Je bent een behulpzame code-assistent" |
| `HumanMessage` | Vertegenwoordigt gebruikersinvoer | "Leg uit hoe functies werken" |
| `AIMessage` | Slaat AI-antwoorden op | Vorige AI-antwoorden in gesprek |

### Je eerste gesprek maken

Laten we een gesprek creëren waarin onze AI een specifieke rol aanneemt. We laten hem de rol van Captain Picard aannemen - een personage dat bekend staat om zijn diplomatieke wijsheid en leiderschap:

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

**Uitleg over deze gespreksopzet:**
- **Stelt** de rol en persoonlijkheid van de AI vast via `SystemMessage`
- **Geeft** de eerste gebruikersvraag via `HumanMessage`
- **Creëert** een basis voor een gesprek met meerdere beurten

De volledige code voor dit voorbeeld ziet er als volgt uit:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

Je zou een resultaat moeten zien dat lijkt op:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Om de continuïteit van het gesprek te behouden (in plaats van de context elke keer opnieuw in te stellen), moet je de antwoorden blijven toevoegen aan je berichtenlijst. Net zoals mondelinge tradities verhalen door generaties heen bewaarden, bouwt deze aanpak een blijvend geheugen op:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)

print(response.content)

print("---- Next ----")

messages.append(response)
messages.append(HumanMessage(content="Now that I know about you, I'm Chris, can I be in your crew?"))

response  = llm.invoke(messages)

print(response.content)

```

Best gaaf, toch? Wat hier gebeurt, is dat we de LLM twee keer aanroepen - eerst met alleen onze eerste twee berichten, maar daarna opnieuw met de volledige gespreksgeschiedenis. Het is alsof de AI echt met ons meeluistert tijdens het gesprek!

Wanneer je deze code uitvoert, krijg je een tweede antwoord dat ongeveer zo klinkt:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Ik neem dat als een misschien ;)

## Streaming antwoorden

Ooit gemerkt hoe ChatGPT zijn antwoorden in realtime lijkt te "typen"? Dat is streaming in actie. Net zoals het kijken naar een vaardige kalligraaf aan het werk - het zien verschijnen van de karakters streep voor streep in plaats van ze onmiddellijk te zien - maakt streaming de interactie natuurlijker en biedt het directe feedback.

### Streaming implementeren met LangChain

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
    streaming=True
)

# Stream the response
for chunk in llm.stream("Write a short story about a robot learning to code"):
    print(chunk.content, end="", flush=True)
```

**Waarom streaming geweldig is:**
- **Toont** inhoud terwijl het wordt gemaakt - geen ongemakkelijk wachten meer!
- **Geeft** gebruikers het gevoel dat er daadwerkelijk iets gebeurt
- **Voelt** sneller, zelfs als het technisch gezien niet zo is
- **Laat** gebruikers beginnen met lezen terwijl de AI nog "nadenkt"

> 💡 **Tip voor gebruikerservaring**: Streaming komt echt tot zijn recht bij langere antwoorden zoals code-uitleg, creatief schrijven of gedetailleerde tutorials. Je gebruikers zullen het geweldig vinden om voortgang te zien in plaats van naar een leeg scherm te staren!

## Prompt templates

Prompt templates werken als de retorische structuren die in klassieke welsprekendheid werden gebruikt - denk aan hoe Cicero zijn spreekpatronen zou aanpassen voor verschillende doelgroepen terwijl hij dezelfde overtuigende structuur behield. Ze laten je herbruikbare prompts maken waarin je verschillende stukjes informatie kunt vervangen zonder alles opnieuw te schrijven. Zodra je de template hebt ingesteld, vul je gewoon de variabelen in met de benodigde waarden.

### Herbruikbare prompts maken

```python
from langchain_core.prompts import ChatPromptTemplate

# Define a template for code explanations
template = ChatPromptTemplate.from_messages([
    ("system", "You are an expert programming instructor. Explain concepts clearly with examples."),
    ("human", "Explain {concept} in {language} with a practical example for {skill_level} developers")
])

# Use the template with different values
questions = [
    {"concept": "functions", "language": "JavaScript", "skill_level": "beginner"},
    {"concept": "classes", "language": "Python", "skill_level": "intermediate"},
    {"concept": "async/await", "language": "JavaScript", "skill_level": "advanced"}
]

for question in questions:
    prompt = template.format_messages(**question)
    response = llm.invoke(prompt)
    print(f"Topic: {question['concept']}\n{response.content}\n---\n")
```

**Waarom je van templates zult houden:**
- **Houdt** je prompts consistent in je hele app
- **Geen** rommelige string-concatenatie meer - alleen schone, eenvoudige variabelen
- **Je AI** gedraagt zich voorspelbaar omdat de structuur hetzelfde blijft
- **Updates** zijn eenvoudig - wijzig de template één keer en het is overal aangepast

## Gestructureerde output

Ooit gefrustreerd geraakt door het proberen te ontcijferen van AI-antwoorden die terugkomen als ongestructureerde tekst? Gestructureerde output is als je AI leren een systematische aanpak te volgen, zoals Linnaeus gebruikte voor biologische classificatie - georganiseerd, voorspelbaar en gemakkelijk mee te werken. Je kunt JSON, specifieke datastructuren of elk gewenst formaat aanvragen.

### Outputschema's definiëren

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field

class CodeReview(BaseModel):
    score: int = Field(description="Code quality score from 1-10")
    strengths: list[str] = Field(description="List of code strengths")
    improvements: list[str] = Field(description="List of suggested improvements")
    overall_feedback: str = Field(description="Summary feedback")

# Set up the parser
parser = JsonOutputParser(pydantic_object=CodeReview)

# Create prompt with format instructions
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a code reviewer. {format_instructions}"),
    ("human", "Review this code: {code}")
])

# Format the prompt with instructions
chain = prompt | llm | parser

# Get structured response
code_sample = """
def calculate_average(numbers):
    return sum(numbers) / len(numbers)
"""

result = chain.invoke({
    "code": code_sample,
    "format_instructions": parser.get_format_instructions()
})

print(f"Score: {result['score']}")
print(f"Strengths: {', '.join(result['strengths'])}")
```

**Waarom gestructureerde output een game-changer is:**
- **Geen** giswerk meer over welk formaat je terugkrijgt - het is elke keer consistent
- **Sluit** direct aan op je databases en API's zonder extra werk
- **Vangt** vreemde AI-antwoorden voordat ze je app breken
- **Maakt** je code overzichtelijker omdat je precies weet waarmee je werkt

## Toolgebruik

Nu komen we bij een van de krachtigste functies: tools. Dit is hoe je je AI praktische mogelijkheden geeft die verder gaan dan alleen gesprekken. Net zoals middeleeuwse gilden gespecialiseerde gereedschappen ontwikkelden voor specifieke ambachten, kun je je AI uitrusten met gerichte instrumenten. Je beschrijft welke tools beschikbaar zijn, en wanneer iemand iets vraagt dat overeenkomt, kan je AI actie ondernemen.

### Gebruik van Python

Laten we enkele tools toevoegen zoals hieronder:

```python
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}
```

Wat gebeurt hier? We maken een blauwdruk voor een tool genaamd `add`. Door te erven van `TypedDict` en die geavanceerde `Annotated` types te gebruiken voor `a` en `b`, geven we de LLM een duidelijk beeld van wat deze tool doet en wat het nodig heeft. Het `functions`-woordenboek is als onze gereedschapskist - het vertelt onze code precies wat te doen wanneer de AI besluit een specifieke tool te gebruiken.

Laten we eens kijken hoe we de LLM met deze tool kunnen aanroepen:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Hier roepen we `bind_tools` aan met onze `tools`-array en daardoor heeft de LLM `llm_with_tools` nu kennis van deze tool.

Om deze nieuwe LLM te gebruiken, kunnen we de volgende code typen:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nu we `invoke` aanroepen op deze nieuwe LLM, die tools heeft, kan de eigenschap `tool_calls` worden gevuld. Als dat zo is, heeft elke geïdentificeerde tool een `name` en `args`-eigenschap die aangeeft welke tool moet worden aangeroepen en met welke argumenten. De volledige code ziet er als volgt uit:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Als je deze code uitvoert, zou je een output moeten zien die lijkt op:

```text
TOOL CALL:  15
CONTENT: 
```

De AI onderzocht "Wat is 3 + 12" en herkende dit als een taak voor de `add`-tool. Net zoals een ervaren bibliothecaris weet welke referentie te raadplegen op basis van het type vraag, maakte het deze beslissing op basis van de naam, beschrijving en veldspecificaties van de tool. Het resultaat van 15 komt voort uit ons `functions`-woordenboek dat de tool uitvoert:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Een interessantere tool die een web-API aanroept

Getallen optellen demonstreert het concept, maar echte tools voeren meestal complexere operaties uit, zoals het aanroepen van web-API's. Laten we ons voorbeeld uitbreiden zodat de AI inhoud van internet kan ophalen - vergelijkbaar met hoe telegraafoperators ooit verre locaties met elkaar verbonden:

```python
class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

query = "Tell me a joke about animals"

# the rest of the code is the same
```

Als je deze code nu uitvoert, krijg je een antwoord dat ongeveer zo klinkt:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Hier is de volledige code:

```python
from langchain_openai import ChatOpenAI
import requests
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

tools = [add, joke]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "Tell me a joke about animals"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        # print("TOOL CALL: ", tool)
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

## Embeddings en documentverwerking

Embeddings vertegenwoordigen een van de meest elegante oplossingen in moderne AI. Stel je voor dat je elk stuk tekst kunt omzetten in numerieke coördinaten die de betekenis ervan vastleggen. Dat is precies wat embeddings doen - ze transformeren tekst in punten in een multidimensionale ruimte waar vergelijkbare concepten samenkomen. Het is alsof je een coördinatensysteem voor ideeën hebt, vergelijkbaar met hoe Mendeleev de periodieke tabel organiseerde op basis van atomaire eigenschappen.

### Embeddings maken en gebruiken

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="text-embedding-3-small"
)

# Load and split documents
loader = TextLoader("documentation.txt")
documents = loader.load()

text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

# Create vector store
vectorstore = FAISS.from_documents(texts, embeddings)

# Perform similarity search
query = "How do I handle user authentication?"
similar_docs = vectorstore.similarity_search(query, k=3)

for doc in similar_docs:
    print(f"Relevant content: {doc.page_content[:200]}...")
```

### Documentloaders voor verschillende formaten

```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    CSVLoader,
    JSONLoader,
    WebBaseLoader
)

# Load different document types
pdf_loader = PyPDFLoader("manual.pdf")
csv_loader = CSVLoader("data.csv")
json_loader = JSONLoader("config.json")
web_loader = WebBaseLoader("https://example.com/docs")

# Process all documents
all_documents = []
for loader in [pdf_loader, csv_loader, json_loader, web_loader]:
    docs = loader.load()
    all_documents.extend(docs)
```

**Wat je kunt doen met embeddings:**
- **Bouw** zoekfunctionaliteit die echt begrijpt wat je bedoelt, niet alleen trefwoorden matcht
- **Creëer** AI die vragen over je documenten kan beantwoorden
- **Maak** aanbevelingssystemen die echt relevante inhoud suggereren
- **Organiseer** en categoriseer je inhoud automatisch

## Een complete AI-toepassing bouwen

Nu gaan we alles wat je hebt geleerd integreren in een uitgebreide toepassing - een code-assistent die vragen kan beantwoorden, tools kan gebruiken en gespreksgeheugen kan behouden. Net zoals de drukpers bestaande technologieën (losse letters, inkt, papier en druk) combineerde tot iets revolutionairs, combineren we onze AI-componenten tot iets praktisch en nuttigs.

### Voorbeeld van een complete toepassing

```python
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from langchain_community.vectorstores import FAISS
from typing_extensions import Annotated, TypedDict
import os
import requests

class CodingAssistant:
    def __init__(self):
        self.llm = ChatOpenAI(
            api_key=os.environ["GITHUB_TOKEN"],
            base_url="https://models.github.ai/inference",
            model="openai/gpt-4o-mini"
        )
        
        self.conversation_history = [
            SystemMessage(content="""You are an expert coding assistant. 
            Help users learn programming concepts, debug code, and write better software.
            Use tools when needed and maintain a helpful, encouraging tone.""")
        ]
        
        # Define tools
        self.setup_tools()
    
    def setup_tools(self):
        class web_search(TypedDict):
            """Search for programming documentation or examples."""
            query: Annotated[str, "Search query for programming help"]
        
        class code_formatter(TypedDict):
            """Format and validate code snippets."""
            code: Annotated[str, "Code to format"]
            language: Annotated[str, "Programming language"]
        
        self.tools = [web_search, code_formatter]
        self.llm_with_tools = self.llm.bind_tools(self.tools)
    
    def chat(self, user_input: str):
        # Add user message to conversation
        self.conversation_history.append(HumanMessage(content=user_input))
        
        # Get AI response
        response = self.llm_with_tools.invoke(self.conversation_history)
        
        # Handle tool calls if any
        if response.tool_calls:
            for tool_call in response.tool_calls:
                tool_result = self.execute_tool(tool_call)
                print(f"🔧 Tool used: {tool_call['name']}")
                print(f"📊 Result: {tool_result}")
        
        # Add AI response to conversation
        self.conversation_history.append(response)
        
        return response.content
    
    def execute_tool(self, tool_call):
        tool_name = tool_call['name']
        args = tool_call['args']
        
        if tool_name == 'web_search':
            return f"Found documentation for: {args['query']}"
        elif tool_name == 'code_formatter':
            return f"Formatted {args['language']} code: {args['code'][:50]}..."
        
        return "Tool execution completed"

# Usage example
assistant = CodingAssistant()

print("🤖 Coding Assistant Ready! Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    
    response = assistant.chat(user_input)
    print(f"🤖 Assistant: {response}\n")
```

**Architectuur van de toepassing:**

```mermaid
graph TD
    A[User Input] --> B[Coding Assistant]
    B --> C[Conversation Memory]
    B --> D[Tool Detection]
    B --> E[LLM Processing]
    
    D --> F[Web Search Tool]
    D --> G[Code Formatter Tool]
    
    E --> H[Response Generation]
    F --> H
    G --> H
    
    H --> I[User Interface]
    H --> C
```

**Belangrijkste functies die we hebben geïmplementeerd:**
- **Onthoudt** je hele gesprek voor contextcontinuïteit
- **Voert acties uit** via toolgebruik, niet alleen gesprekken
- **Volgt** voorspelbare interactiepatronen
- **Beheert** foutafhandeling en complexe workflows automatisch

## Opdracht: Bouw je eigen AI-gestuurde studie-assistent

**Doel**: Maak een AI-toepassing die studenten helpt programmeerconcepten te leren door uitleg, codevoorbeelden en interactieve quizzen te bieden.

### Vereisten

**Kernfuncties (Verplicht):**
1. **Gespreksinterface**: Implementeer een chatsysteem dat context behoudt over meerdere vragen
2. **Educatieve tools**: Maak minstens twee tools die helpen bij het leren:
   - Tool voor code-uitleg
   - Generator voor conceptquizzen
3. **Gepersonaliseerd leren**: Gebruik systeemberichten om antwoorden aan te passen aan verschillende vaardigheidsniveaus  
4. **Antwoordopmaak**: Implementeer gestructureerde output voor quizvragen  

### Implementatiestappen  

**Stap 1: Stel je omgeving in**  
```bash
pip install langchain langchain-openai
```
  
**Stap 2: Basis chatfunctionaliteit**  
- Maak een `StudyAssistant`-klasse  
- Implementeer gespreksgeheugen  
- Voeg persoonlijkheidsconfiguratie toe voor educatieve ondersteuning  

**Stap 3: Voeg educatieve tools toe**  
- **Code Uitlegger**: Breekt code op in begrijpelijke onderdelen  
- **Quiz Generator**: Maakt vragen over programmeerconcepten  
- **Voortgangstracker**: Houdt bij welke onderwerpen zijn behandeld  

**Stap 4: Geavanceerde functies (Optioneel)**  
- Implementeer streamingantwoorden voor een betere gebruikerservaring  
- Voeg documentladen toe om cursusmateriaal te integreren  
- Maak embeddings voor op gelijkenis gebaseerde inhoudsophaling  

### Evaluatiecriteria  

| Functie | Uitstekend (4) | Goed (3) | Voldoende (2) | Moet Verbeteren (1) |  
|---------|----------------|----------|----------------|---------------------|  
| **Gespreksflow** | Natuurlijke, contextbewuste antwoorden | Goede contextbehoud | Basisgesprek | Geen geheugen tussen uitwisselingen |  
| **Toolintegratie** | Meerdere nuttige tools werken naadloos | 2+ tools correct geïmplementeerd | 1-2 basistools | Tools niet functioneel |  
| **Codekwaliteit** | Schone, goed gedocumenteerde, foutafhandeling | Goede structuur, enige documentatie | Basisfunctionaliteit werkt | Slechte structuur, geen foutafhandeling |  
| **Educatieve waarde** | Echt nuttig voor leren, adaptief | Goede leerondersteuning | Basisuitleg | Beperkte educatieve waarde |  

### Voorbeeld code structuur  

```python
class StudyAssistant:
    def __init__(self, skill_level="beginner"):
        # Initialize LLM, tools, and conversation memory
        pass
    
    def explain_code(self, code, language):
        # Tool: Explain how code works
        pass
    
    def generate_quiz(self, topic, difficulty):
        # Tool: Create practice questions
        pass
    
    def chat(self, user_input):
        # Main conversation interface
        pass

# Example usage
assistant = StudyAssistant(skill_level="intermediate")
response = assistant.chat("Explain how Python functions work")
```
  
**Bonusuitdagingen:**  
- Voeg spraakinvoer/-uitvoer mogelijkheden toe  
- Implementeer een webinterface met Streamlit of Flask  
- Maak een kennisbank van cursusmateriaal met embeddings  
- Voeg voortgangstracking en gepersonaliseerde leerpaden toe  

## Samenvatting  

🎉 Je hebt nu de basisprincipes van AI-frameworkontwikkeling onder de knie en geleerd hoe je geavanceerde AI-toepassingen kunt bouwen met LangChain. Net als het voltooien van een uitgebreide stage, heb je een aanzienlijke toolkit aan vaardigheden verworven. Laten we eens kijken wat je hebt bereikt.  

### Wat je hebt geleerd  

**Kernconcepten van het framework:**  
- **Voordelen van frameworks**: Begrijpen wanneer je frameworks moet kiezen boven directe API-aanroepen  
- **LangChain Basisprincipes**: Het instellen en configureren van AI-modelverbindingen  
- **Berichttypen**: Gebruik van `SystemMessage`, `HumanMessage` en `AIMessage` voor gestructureerde gesprekken  

**Geavanceerde functies:**  
- **Toolgebruik**: Het maken en integreren van aangepaste tools voor verbeterde AI-mogelijkheden  
- **Gespreksgeheugen**: Context behouden over meerdere gespreksrondes  
- **Streamingantwoorden**: Implementeren van realtime antwoordlevering  
- **Prompt Templates**: Herbruikbare, dynamische prompts bouwen  
- **Gestructureerde output**: Consistente, parseerbare AI-antwoorden garanderen  
- **Embeddings**: Semantisch zoeken en documentverwerkingsmogelijkheden creëren  

**Praktische toepassingen:**  
- **Volledige apps bouwen**: Meerdere functies combineren tot productieklare applicaties  
- **Foutafhandeling**: Robuust foutbeheer en validatie implementeren  
- **Toolintegratie**: Aangepaste tools maken die AI-mogelijkheden uitbreiden  

### Belangrijke inzichten  

> 🎯 **Onthoud**: AI-frameworks zoals LangChain zijn in feite je complexiteit-verbergende, functie-rijke beste vrienden. Ze zijn perfect wanneer je gespreksgeheugen, toolgebruik of meerdere AI-modellen wilt gebruiken zonder je verstand te verliezen.  

**Beslissingskader voor AI-integratie:**  

```mermaid
flowchart TD
    A[AI Integration Need] --> B{Simple single query?}
    B -->|Yes| C[Direct API calls]
    B -->|No| D{Need conversation memory?}
    D -->|No| E[SDK Integration]
    D -->|Yes| F{Need tools or complex features?}
    F -->|No| G[Framework with basic setup]
    F -->|Yes| H[Full framework implementation]
    
    C --> I[HTTP requests, minimal dependencies]
    E --> J[Provider SDK, model-specific]
    G --> K[LangChain basic chat]
    H --> L[LangChain with tools, memory, agents]
```
  
### Waar ga je vanaf hier naartoe?  

**Begin nu met bouwen:**  
- Neem deze concepten en bouw iets dat JOU enthousiast maakt!  
- Experimenteer met verschillende AI-modellen via LangChain - het is als een speeltuin van AI-modellen  
- Maak tools die echte problemen oplossen waar je in je werk of projecten mee te maken hebt  

**Klaar voor de volgende stap?**  
- **AI Agents**: Bouw AI-systemen die complexe taken zelfstandig kunnen plannen en uitvoeren  
- **RAG (Retrieval-Augmented Generation)**: Combineer AI met je eigen kennisbanken voor superkrachtige toepassingen  
- **Multi-Modal AI**: Werk met tekst, afbeeldingen en audio samen - de mogelijkheden zijn eindeloos!  
- **Productie-implementatie**: Leer hoe je je AI-apps kunt schalen en monitoren in de echte wereld  

**Word lid van de community:**  
- De LangChain-community is fantastisch om up-to-date te blijven en best practices te leren  
- GitHub Models geeft je toegang tot geavanceerde AI-mogelijkheden - perfect om mee te experimenteren  
- Blijf oefenen met verschillende use cases - elk project leert je iets nieuws  

Je hebt nu de kennis om intelligente, conversatiegerichte applicaties te bouwen die mensen kunnen helpen echte problemen op te lossen. Net als de Renaissance-ambachtslieden die artistieke visie combineerden met technische vaardigheid, kun je nu AI-mogelijkheden combineren met praktische toepassingen. De vraag is: wat ga jij creëren? 🚀  

## GitHub Copilot Agent Uitdaging 🚀  

Gebruik de Agent-modus om de volgende uitdaging te voltooien:  

**Beschrijving:** Bouw een geavanceerde AI-aangedreven code review assistent die meerdere LangChain-functies combineert, waaronder toolgebruik, gestructureerde output en gespreksgeheugen, om uitgebreide feedback te geven op code-inzendingen.  

**Prompt:** Maak een CodeReviewAssistant-klasse die implementeert:  
1. Een tool voor het analyseren van codecomplexiteit en het voorstellen van verbeteringen  
2. Een tool voor het controleren van code op best practices  
3. Gestructureerde output met behulp van Pydantic-modellen voor een consistente review-indeling  
4. Gespreksgeheugen om reviewsessies bij te houden  
5. Een hoofdchatinterface die code-inzendingen kan verwerken en gedetailleerde, uitvoerbare feedback kan geven  

De assistent moet in staat zijn om code in meerdere programmeertalen te beoordelen, context te behouden over meerdere code-inzendingen in een sessie, en zowel samenvattingsscores als gedetailleerde verbeteringssuggesties te bieden.  

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.  

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.