<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:26:59+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "sv"
}
-->
# AI-ramverk

Det finns många AI-ramverk som kan användas för att avsevärt snabba upp tiden det tar att bygga ett projekt. I det här projektet kommer vi att fokusera på att förstå vilka problem dessa ramverk löser och bygga ett sådant projekt själva.

## Varför ett ramverk

När det gäller att använda AI finns det olika tillvägagångssätt och olika anledningar till att välja dessa tillvägagångssätt, här är några:

- **Ingen SDK**, de flesta AI-modeller tillåter dig att interagera direkt med AI-modellen via exempelvis HTTP-förfrågningar. Det tillvägagångssättet fungerar och kan ibland vara ditt enda alternativ om en SDK saknas.
- **SDK**. Att använda en SDK är vanligtvis det rekommenderade tillvägagångssättet eftersom det gör att du kan skriva mindre kod för att interagera med din modell. Det är vanligtvis begränsat till en specifik modell, och om du använder olika modeller kan du behöva skriva ny kod för att stödja dessa ytterligare modeller.
- **Ett ramverk**. Ett ramverk tar vanligtvis saker till en annan nivå i den meningen att om du behöver använda olika modeller finns det ett API för alla, det som skiljer sig är vanligtvis den initiala inställningen. Dessutom tillför ramverk användbara abstraktioner, som inom AI-området, där de kan hantera verktyg, minne, arbetsflöden, agenter och mer, samtidigt som du skriver mindre kod. Eftersom ramverk vanligtvis är åsiktsdrivna kan de vara mycket hjälpsamma om du köper in dig på hur de gör saker, men de kan vara otillräckliga om du försöker göra något skräddarsytt som ramverket inte är utformat för. Ibland kan ett ramverk också förenkla för mycket, vilket kan leda till att du missar ett viktigt ämne som senare kan påverka prestandan negativt.

Generellt sett, använd rätt verktyg för jobbet.

## Introduktion

I denna lektion kommer vi att lära oss att:

- Använda ett vanligt AI-ramverk.
- Hantera vanliga problem som chattkonversationer, verktygsanvändning, minne och kontext.
- Utnyttja detta för att bygga AI-appar.

## Första prompten

I vårt första appexempel kommer vi att lära oss hur man ansluter till en AI-modell och frågar den med hjälp av en prompt.

### Med Python

För detta exempel kommer vi att använda Langchain för att ansluta till GitHub-modeller. Vi kan använda en klass som heter `ChatOpenAI` och ge den fälten `api_key`, `base_url` och `model`. Token genereras automatiskt inom GitHub Codespaces, och om du kör appen lokalt måste du ställa in en personlig åtkomsttoken för att detta ska fungera.

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What's the capital of France?")
print(response.content)
```

I denna kod:

- Anropar vi `ChatOpenAI` för att skapa en klient.
- Använder vi `llm.invoke` med en prompt för att skapa ett svar.
- Skriver vi ut svaret med `print(response.content)`.

Du bör se ett svar som liknar:

```text
The capital of France is Paris.
```

## Chattkonversation

I föregående avsnitt såg du hur vi använde det som normalt kallas zero shot prompting, en enda prompt följt av ett svar.

Men ofta befinner du dig i en situation där du behöver upprätthålla en konversation med flera meddelanden som utbyts mellan dig och AI-assistenten.

### Med Python

I Langchain kan vi lagra konversationen i en lista. `HumanMessage` representerar ett meddelande från en användare, och `SystemMessage` är ett meddelande som är avsett att sätta AI:ns "personlighet". I exemplet nedan ser du hur vi instruerar AI att anta personligheten av Captain Picard och att användaren ska fråga "Berätta om dig" som prompt.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Den fullständiga koden för detta exempel ser ut så här:

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

Du bör se ett resultat som liknar:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

För att behålla konversationens tillstånd kan du lägga till svaret från en chatt så att konversationen kommer ihåg, här är hur du gör det:

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

Vad vi kan se från ovanstående konversation är hur vi anropar LLM två gånger, först med konversationen som består av bara två meddelanden, men sedan en andra gång med fler meddelanden tillagda till konversationen.

Faktum är att om du kör detta kommer du att se det andra svaret vara något i stil med:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Jag tar det som ett kanske ;)

## Strömmande svar

TODO

## Promptmallar

TODO

## Strukturerad output

TODO

## Verktygsanrop

Verktyg är hur vi ger LLM extra färdigheter. Idén är att berätta för LLM om funktioner den har, och om en prompt görs som matchar beskrivningen av ett av dessa verktyg, så anropar vi dem.

### Med Python

Låt oss lägga till några verktyg så här:

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

Vad vi gör här är att skapa en beskrivning av ett verktyg som heter `add`. Genom att ärva från `TypedDict` och lägga till medlemmar som `a` och `b` av typen `Annotated` kan detta konverteras till ett schema som LLM kan förstå. Skapandet av funktioner är en ordbok som säkerställer att vi vet vad vi ska göra om ett specifikt verktyg identifieras.

Låt oss se hur vi anropar LLM med detta verktyg härnäst:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Här anropar vi `bind_tools` med vår `tools`-array, och därmed har LLM `llm_with_tools` nu kunskap om detta verktyg.

För att använda denna nya LLM kan vi skriva följande kod:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Nu när vi anropar `invoke` på denna nya LLM, som har verktyg, kanske egenskapen `tool_calls` fylls i. Om så är fallet har alla identifierade verktyg en `name` och `args`-egenskap som identifierar vilket verktyg som ska anropas och med vilka argument. Den fullständiga koden ser ut så här:

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

När du kör denna kod bör du se ett resultat som liknar:

```text
TOOL CALL:  15
CONTENT: 
```

Vad detta resultat betyder är att LLM analyserade prompten "Vad är 3 + 12" som att det betyder att verktyget `add` ska anropas, och den visste det tack vare dess namn, beskrivning och medlemsfältsbeskrivningar. Att svaret är 15 beror på vår kod som använder ordboken `functions` för att anropa det:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Ett mer intressant verktyg som anropar ett webb-API

Verktyg som lägger till två tal är intressanta eftersom det illustrerar hur verktygsanrop fungerar, men vanligtvis tenderar verktyg att göra något mer intressant, som till exempel att anropa ett webb-API. Låt oss göra just det med denna kod:

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

Nu om du kör denna kod kommer du att få ett svar som säger något i stil med:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Här är koden i sin helhet:

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

## Inbäddning

Vektorisera innehåll, jämför via cosinuslikhet

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentladdare

PDF och CSV

## Bygga en app

TODO

## Uppgift

## Sammanfattning

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.