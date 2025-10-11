<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:33:42+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "lt"
}
-->
# AI Framework

Yra daugybė AI sistemų, kurios gali žymiai pagreitinti projekto kūrimo laiką. Šiame projekte mes sutelksime dėmesį į tai, kokias problemas šios sistemos sprendžia, ir sukursime tokį projektą patys.

## Kodėl verta naudoti sistemą

Naudojant AI yra įvairių požiūrių ir priežasčių, kodėl verta rinktis vieną ar kitą metodą. Štai keletas jų:

- **Be SDK**. Daugelis AI modelių leidžia tiesiogiai sąveikauti su modeliu, pavyzdžiui, per HTTP užklausas. Šis metodas veikia ir kartais gali būti vienintelis pasirinkimas, jei SDK nėra.
- **SDK**. SDK naudojimas paprastai yra rekomenduojamas, nes leidžia rašyti mažiau kodo sąveikai su modeliu. Tačiau SDK dažnai yra ribotas konkrečiam modeliui, ir jei naudojate skirtingus modelius, gali tekti rašyti naują kodą, kad palaikytumėte papildomus modelius.
- **Sistema**. Sistema paprastai pakelia dalykus į kitą lygį, nes jei reikia naudoti skirtingus modelius, yra viena API visiems. Skiriasi tik pradinė konfigūracija. Be to, sistemos suteikia naudingų abstrakcijų, tokių kaip įrankiai, atmintis, darbo eiga, agentai ir kt., leidžiant rašyti mažiau kodo. Kadangi sistemos dažnai yra nuoseklios, jos gali būti labai naudingos, jei priimate jų metodiką, tačiau gali būti nepakankamos, jei bandote daryti kažką unikalaus, ko sistema nėra sukurta. Kartais sistema gali per daug supaprastinti procesą, todėl galite praleisti svarbią temą, kuri vėliau gali pakenkti našumui.

Apskritai, naudokite tinkamą įrankį darbui.

## Įvadas

Šioje pamokoje išmoksime:

- Naudoti bendrą AI sistemą.
- Spręsti dažnas problemas, tokias kaip pokalbiai, įrankių naudojimas, atmintis ir kontekstas.
- Pasinaudoti tuo kuriant AI programas.

## Pirmasis užklausos pavyzdys

Pirmajame programos pavyzdyje išmoksime, kaip prisijungti prie AI modelio ir pateikti jam užklausą.

### Naudojant Python

Šiame pavyzdyje naudosime Langchain, kad prisijungtume prie GitHub modelių. Galime naudoti klasę `ChatOpenAI` ir pateikti laukus `api_key`, `base_url` ir `model`. Tokenas automatiškai užpildomas GitHub Codespaces aplinkoje, o jei programą vykdote lokaliai, turite nustatyti asmeninį prieigos tokeną, kad tai veiktų.

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

Šiame kode mes:

- Naudojame `ChatOpenAI`, kad sukurtume klientą.
- Naudojame `llm.invoke` su užklausa, kad sukurtume atsakymą.
- Spausdiname atsakymą su `print(response.content)`.

Turėtumėte matyti atsakymą, panašų į:

```text
The capital of France is Paris.
```

## Pokalbis

Ankstesniame skyriuje matėte, kaip naudojome tai, kas paprastai vadinama "zero shot" užklausomis – viena užklausa, po kurios pateikiamas atsakymas.

Tačiau dažnai atsiduriate situacijoje, kai reikia palaikyti pokalbį, kuriame keičiamasi keliais pranešimais tarp jūsų ir AI asistento.

### Naudojant Python

Langchain sistemoje pokalbį galime saugoti sąraše. `HumanMessage` atspindi vartotojo pranešimą, o `SystemMessage` yra pranešimas, skirtas nustatyti AI "asmenybę". Žemiau pateiktame pavyzdyje matote, kaip nurodome AI įsivaizduoti save kaip kapitoną Picardą, o žmogui/vartotojui pateikti užklausą "Papasakok apie save".

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Pilnas šio pavyzdžio kodas atrodo taip:

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

Turėtumėte matyti rezultatą, panašų į:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Norėdami išlaikyti pokalbio būseną, galite pridėti atsakymą iš pokalbio, kad pokalbis būtų prisimenamas. Štai kaip tai padaryti:

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

Iš aukščiau pateikto pokalbio matome, kaip du kartus iškviečiame LLM: pirmą kartą su pokalbiu, sudarytu iš dviejų pranešimų, o antrą kartą su daugiau pranešimų, pridėtų prie pokalbio.

Iš tiesų, jei vykdysite šį kodą, pamatysite antrą atsakymą, panašų į:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Paimsiu tai kaip galimą atsakymą ;)

## Atsakymų transliavimas

TODO

## Užklausų šablonai

TODO

## Struktūrizuotas atsakymas

TODO

## Įrankių naudojimas

Įrankiai yra būdas suteikti LLM papildomų gebėjimų. Idėja yra informuoti LLM apie funkcijas, kurias jis turi, ir jei užklausa atitinka vieno iš šių įrankių aprašymą, tada jis bus iškviestas.

### Naudojant Python

Pridėkime keletą įrankių taip:

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

Čia mes sukuriame įrankio, vadinamo `add`, aprašymą. Paveldėdami iš `TypedDict` ir pridėdami narius, tokius kaip `a` ir `b` su `Annotated` tipu, tai gali būti konvertuota į schemą, kurią LLM supranta. Funkcijų kūrimas yra žodynas, kuris užtikrina, kad žinome, ką daryti, jei identifikuojamas konkretus įrankis.

Pažiūrėkime, kaip iškviečiame LLM su šiuo įrankiu:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Čia mes naudojame `bind_tools` su mūsų `tools` masyvu, ir taip LLM `llm_with_tools` dabar žino apie šį įrankį.

Norėdami naudoti šį naują LLM, galime parašyti šį kodą:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Dabar, kai iškviečiame `invoke` šiam naujam LLM, turinčiam įrankius, galime matyti, kad savybė `tool_calls` yra užpildyta. Jei taip, bet kuris identifikuotas įrankis turi `name` ir `args` savybes, kurios nurodo, koks įrankis turėtų būti iškviestas ir su kokiais argumentais. Pilnas kodas atrodo taip:

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

Vykdant šį kodą, turėtumėte matyti rezultatą, panašų į:

```text
TOOL CALL:  15
CONTENT: 
```

Šis rezultatas reiškia, kad LLM analizavo užklausą "Kiek yra 3 + 12" kaip reiškiančią, kad turėtų būti iškviestas `add` įrankis, ir jis tai suprato dėl pavadinimo, aprašymo ir narių laukų aprašymų. Kad atsakymas yra 15, tai yra dėl mūsų kodo, naudojančio žodyną `functions`, kad jį iškviestų:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Daugiau įdomus įrankis, kuris iškviečia web API

Įrankiai, kurie prideda du skaičius, yra įdomūs, nes iliustruoja, kaip veikia įrankių iškvietimas, tačiau paprastai įrankiai daro kažką įdomesnio, pavyzdžiui, iškviečia web API. Padarykime tai su šiuo kodu:

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

Dabar, jei vykdysite šį kodą, gausite atsakymą, panašų į:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Štai visas kodas:

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

## Įterpimas

Vektorizuokite turinį, palyginkite per kosinuso panašumą

https://python.langchain.com/docs/how_to/embed_text/

### Dokumentų įkrovikliai

PDF ir CSV

## Programos kūrimas

TODO

## Užduotis

## Santrauka

---

**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, kylančius dėl šio vertimo naudojimo.