<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:27:52+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "fi"
}
-->
# AI-kehys

On olemassa monia AI-kehyksiä, jotka voivat merkittävästi nopeuttaa projektin rakentamiseen kuluvaa aikaa. Tässä projektissa keskitymme ymmärtämään, mitä ongelmia nämä kehykset ratkaisevat, ja rakennamme itse tällaisen projektin.

## Miksi käyttää kehystä

AI:n käytössä on erilaisia lähestymistapoja ja syitä valita jokin tietty lähestymistapa. Tässä muutamia:

- **Ei SDK:ta**. Useimmat AI-mallit mahdollistavat suoran vuorovaikutuksen esimerkiksi HTTP-pyyntöjen kautta. Tämä lähestymistapa toimii ja voi joskus olla ainoa vaihtoehto, jos SDK-vaihtoehto puuttuu.
- **SDK**. SDK:n käyttö on yleensä suositeltavaa, koska sen avulla voit kirjoittaa vähemmän koodia mallin kanssa vuorovaikuttamiseen. Se on yleensä rajoitettu tiettyyn malliin, ja jos käytät eri malleja, sinun täytyy kirjoittaa uutta koodia tukemaan näitä lisämalleja.
- **Kehys**. Kehys vie asiat yleensä seuraavalle tasolle siinä mielessä, että jos tarvitset eri malleja, niille on yksi API, ja eroavaisuudet liittyvät yleensä alkuasetuksiin. Lisäksi kehykset tuovat hyödyllisiä abstraktioita, kuten työkaluja, muistia, työnkulkuja, agentteja ja muuta, samalla kun kirjoitat vähemmän koodia. Koska kehykset ovat yleensä mielipiteellisiä, ne voivat olla todella hyödyllisiä, jos hyväksyt niiden toimintatavan, mutta ne voivat jäädä vajaiksi, jos yrität tehdä jotain räätälöityä, mihin kehys ei ole suunniteltu. Joskus kehys voi myös yksinkertaistaa liikaa, jolloin et ehkä opi tärkeää aihetta, mikä voi myöhemmin haitata suorituskykyä.

Yleisesti ottaen, käytä oikeaa työkalua oikeaan tehtävään.

## Johdanto

Tässä oppitunnissa opimme:

- Käyttämään yleistä AI-kehystä.
- Ratkaisemaan yleisiä ongelmia, kuten keskustelut, työkalujen käyttö, muisti ja konteksti.
- Hyödyntämään tätä AI-sovellusten rakentamisessa.

## Ensimmäinen kehotus

Ensimmäisessä sovellusesimerkissä opimme, kuinka yhdistää AI-malliin ja tehdä kysely kehotuksen avulla.

### Pythonin käyttö

Tässä esimerkissä käytämme Langchainia yhdistääksemme GitHub-malleihin. Voimme käyttää luokkaa `ChatOpenAI` ja antaa sille kentät `api_key`, `base_url` ja `model`. Token täytetään automaattisesti GitHub Codespacesissa, ja jos suoritat sovellusta paikallisesti, sinun täytyy asettaa henkilökohtainen käyttöoikeustoken, jotta tämä toimii.

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

Tässä koodissa:

- Kutsumme `ChatOpenAI`-luokkaa luodaksemme asiakkaan.
- Käytämme `llm.invoke`-metodia kehotuksen kanssa luodaksemme vastauksen.
- Tulostamme vastauksen `print(response.content)`-komennolla.

Näet vastauksen, joka näyttää suunnilleen tältä:

```text
The capital of France is Paris.
```

## Keskustelu

Edellisessä osiossa näit, kuinka käytimme niin sanottua "zero shot prompting" -menetelmää, jossa on yksi kehotus ja vastaus.

Usein kuitenkin löydät itsesi tilanteesta, jossa sinun täytyy ylläpitää keskustelua, jossa vaihdetaan useita viestejä sinun ja AI-avustajan välillä.

### Pythonin käyttö

Langchainissa voimme tallentaa keskustelun listaan. `HumanMessage` edustaa käyttäjän viestiä, ja `SystemMessage` on viesti, joka on tarkoitettu asettamaan AI:n "persoonallisuus". Alla olevassa esimerkissä näet, kuinka ohjeistamme AI:ta ottamaan Kapteeni Picardin persoonallisuuden ja käyttäjän kysymään "Kerro itsestäsi" kehotuksena.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Koko koodi tähän esimerkkiin näyttää tältä:

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

Näet tuloksen, joka näyttää suunnilleen tältä:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Keskustelun tilan säilyttämiseksi voit lisätä vastauksen keskusteluun, jotta se muistetaan. Näin se tehdään:

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

Yllä olevasta keskustelusta näemme, kuinka kutsumme LLM:ää kahdesti: ensin keskustelulla, joka koostuu vain kahdesta viestistä, mutta sitten toisen kerran, kun keskusteluun on lisätty enemmän viestejä.

Itse asiassa, jos suoritat tämän, näet toisen vastauksen olevan jotain tällaista:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Otan tuon ehkä-vastauksena ;)

## Vastausten suoratoisto

TODO

## Kehotusmallit

TODO

## Rakenteellinen ulostulo

TODO

## Työkalujen käyttö

Työkalut ovat tapa antaa LLM:lle lisätaitoja. Idea on kertoa LLM:lle sen käytettävissä olevista funktioista, ja jos kehotus vastaa jonkin näistä työkaluista kuvausta, se kutsutaan.

### Pythonin käyttö

Lisätään joitakin työkaluja näin:

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

Tässä luomme kuvauksen työkalusta nimeltä `add`. Perimällä `TypedDict`-luokasta ja lisäämällä jäseniä, kuten `a` ja `b`, tyyppiä `Annotated`, tämä voidaan muuntaa skeemaksi, jonka LLM ymmärtää. Funktioiden luominen on sanakirja, joka varmistaa, että tiedämme, mitä tehdä, jos tietty työkalu tunnistetaan.

Katsotaanpa, kuinka kutsumme LLM:ää tämän työkalun kanssa:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Tässä kutsumme `bind_tools`-metodia `tools`-taulukolla, jolloin LLM `llm_with_tools` tuntee tämän työkalun.

Käyttääksemme tätä uutta LLM:ää voimme kirjoittaa seuraavan koodin:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Kun kutsumme `invoke`-metodia tällä uudella LLM:llä, jolla on työkaluja, `tool_calls`-ominaisuus voi täyttyä. Jos näin tapahtuu, tunnistetut työkalut sisältävät `name`- ja `args`-ominaisuudet, jotka kertovat, mikä työkalu tulisi kutsua ja millä argumenteilla. Koko koodi näyttää tältä:

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

Kun suoritat tämän koodin, näet ulostulon, joka näyttää suunnilleen tältä:

```text
TOOL CALL:  15
CONTENT: 
```

Tämä ulostulo tarkoittaa, että LLM analysoi kehotuksen "Mikä on 3 + 12" tarkoittavan, että `add`-työkalu tulisi kutsua, ja se tiesi tämän nimen, kuvauksen ja jäsenkenttien kuvausten ansiosta. Vastaus 15 johtuu koodistamme, joka käyttää sanakirjaa `functions` sen kutsumiseen:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Mielenkiintoisempi työkalu, joka kutsuu verkkosovellusliittymää

Työkalut, jotka lisäävät kaksi lukua, ovat mielenkiintoisia, koska ne havainnollistavat, kuinka työkalujen kutsuminen toimii, mutta yleensä työkalut tekevät jotain mielenkiintoisempaa, kuten esimerkiksi verkkosovellusliittymän kutsumista. Tehdään juuri niin tällä koodilla:

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

Kun suoritat tämän koodin, saat vastauksen, joka näyttää suunnilleen tältä:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Tässä on koodi kokonaisuudessaan:

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

## Upottaminen

Sisällön vektorointi, vertailu kosinisimilaarisuuden avulla

https://python.langchain.com/docs/how_to/embed_text/

### Dokumenttien lataajat

pdf ja csv

## Sovelluksen rakentaminen

TODO

## Tehtävä

## Yhteenveto

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.