<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-23T00:26:15+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "fi"
}
-->
# Rakenna keskusteluavustaja tekoälyn avulla

Muistatko Star Trekistä, kun miehistö keskusteli rennosti aluksen tietokoneen kanssa, esitti monimutkaisia kysymyksiä ja sai harkittuja vastauksia? Se, mikä vaikutti 1960-luvulla puhtaalta tieteiskirjallisuudelta, on nyt jotain, jonka voit rakentaa käyttämällä jo tuntemiasi verkkoteknologioita.

Tässä oppitunnissa luomme tekoälyyn perustuvan keskusteluavustajan käyttäen HTML:ää, CSS:ää, JavaScriptiä ja hieman taustapalveluiden integrointia. Huomaat, kuinka samat taidot, joita olet oppinut, voivat yhdistyä tehokkaisiin tekoälypalveluihin, jotka ymmärtävät kontekstin ja tuottavat merkityksellisiä vastauksia.

Ajattele tekoälyä kuin valtavaa kirjastoa, joka ei ainoastaan löydä tietoa, vaan myös muotoilee sen yhtenäisiksi vastauksiksi, jotka on räätälöity juuri sinun kysymyksiisi. Sen sijaan, että etsisit tuhansien sivujen joukosta, saat suoria ja kontekstuaalisia vastauksia.

Integrointi tapahtuu tuttujen verkkoteknologioiden avulla. HTML luo keskustelukäyttöliittymän, CSS huolehtii visuaalisesta suunnittelusta, JavaScript hallitsee käyttäjän vuorovaikutusta, ja taustapalvelun API yhdistää kaiken tekoälypalveluihin. Se on kuin orkesterin eri osat, jotka yhdessä luovat sinfonian.

Rakennamme pohjimmiltaan sillan luonnollisen ihmisten välisen viestinnän ja koneellisen käsittelyn välille. Opit sekä tekoälypalveluiden teknisen toteutuksen että suunnittelumallit, jotka tekevät vuorovaikutuksesta intuitiivista.

Oppitunnin lopussa tekoälyn integrointi tuntuu vähemmän mystiseltä prosessilta ja enemmän kuin mikä tahansa API, jonka kanssa voit työskennellä. Ymmärrät perustavanlaatuiset mallit, jotka tukevat sovelluksia, kuten ChatGPT ja Claude, käyttäen samoja verkkokehityksen periaatteita, joita olet oppinut.

Tältä valmis projektisi näyttää:

![Keskustelusovelluksen käyttöliittymä, jossa näkyy keskustelu käyttäjän ja tekoälyavustajan välillä](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.fi.png)

## Tekoälyn ymmärtäminen: mysteeristä mestariksi

Ennen kuin sukellamme koodiin, ymmärretään, mitä olemme tekemässä. Jos olet käyttänyt API:ta aiemmin, tiedät peruskaavan: lähetä pyyntö, vastaanota vastaus.

Tekoäly-API:t noudattavat samanlaista rakennetta, mutta sen sijaan, että ne hakisivat ennalta tallennettuja tietoja tietokannasta, ne tuottavat uusia vastauksia perustuen valtavista tekstimääristä opittuihin malleihin. Ajattele sitä kuin eroa kirjastoluettelon ja asiantuntevan kirjastonhoitajan välillä, joka osaa yhdistellä tietoa useista lähteistä.

### Mitä "Generatiivinen tekoäly" oikeastaan on?

Ajattele, kuinka Rosettan kivi auttoi tutkijoita ymmärtämään egyptiläisiä hieroglyfejä löytämällä kuvioita tunnettujen ja tuntemattomien kielten välillä. Tekoälymallit toimivat samalla tavalla – ne löytävät kuvioita valtavista tekstimääristä ymmärtääkseen, miten kieli toimii, ja käyttävät näitä kuvioita tuottaakseen sopivia vastauksia uusiin kysymyksiin.

**Selitän tämän yksinkertaisella vertauksella:**
- **Perinteinen tietokanta**: Kuten pyytäisit syntymätodistustasi – saat aina saman dokumentin
- **Hakukone**: Kuten pyytäisit kirjastonhoitajaa etsimään kirjoja kissoista – hän näyttää, mitä on saatavilla
- **Generatiivinen tekoäly**: Kuten kysyisit asiantuntevalta ystävältä kissoista – hän kertoo mielenkiintoisia asioita omilla sanoillaan, räätälöitynä tarpeisiisi

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Miten tekoälymallit oppivat (yksinkertaistettu versio)

Tekoälymallit oppivat altistumalla valtaville tekstiaineistoille, jotka sisältävät kirjoja, artikkeleita ja keskusteluja. Tämän prosessin kautta ne tunnistavat kuvioita, kuten:
- Kuinka ajatuksia jäsennetään kirjallisessa viestinnässä
- Mitkä sanat esiintyvät usein yhdessä
- Kuinka keskustelut yleensä etenevät
- Eroja muodollisen ja epämuodollisen viestinnän välillä

**Se on kuin arkeologit tulkitsevat muinaisia kieliä**: he analysoivat tuhansia esimerkkejä ymmärtääkseen kieliopin, sanaston ja kulttuurisen kontekstin, ja lopulta pystyvät tulkitsemaan uusia tekstejä oppimiensa kuvioiden avulla.

### Miksi GitHub Models?

Käytämme GitHub Models -palvelua melko käytännöllisestä syystä – se antaa meille pääsyn yritystason tekoälyyn ilman, että meidän tarvitsee pystyttää omaa tekoälyinfrastruktuuria (mikä, usko pois, ei ole jotain, mitä haluaisit tehdä juuri nyt!). Se on käytännössä "tekoäly palveluna", ja parasta? Aloittaminen on ilmaista, joten voit kokeilla ilman huolta suurista kustannuksista.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Käytämme GitHub Models -palvelua taustaintegraatioon, joka tarjoaa pääsyn ammattitason tekoälyominaisuuksiin kehittäjäystävällisen käyttöliittymän kautta. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) toimii testausympäristönä, jossa voit kokeilla eri tekoälymalleja ja ymmärtää niiden ominaisuuksia ennen niiden toteuttamista koodissa.

![GitHub Models AI Playground -käyttöliittymä, jossa mallin valinta ja testausalue](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.fi.png)

**Miksi tämä testausympäristö on niin hyödyllinen:**
- **Kokeile** eri tekoälymalleja, kuten GPT-4o-mini, Claude ja muita (kaikki ilmaisia!)
- **Testaa** ideoitasi ja kysymyksiäsi ennen koodin kirjoittamista
- **Hanki** valmiita koodinpätkiä suosikkiohjelmointikielelläsi
- **Säädä** asetuksia, kuten luovuustasoa ja vastausten pituutta, nähdäksesi niiden vaikutukset

Kun olet kokeillut hieman, klikkaa vain "Code"-välilehteä ja valitse ohjelmointikielesi saadaksesi tarvittavan toteutuskoodin.

![Testausympäristön valinta, jossa koodin generointivaihtoehdot eri ohjelmointikielille](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.fi.png)

## Python-taustaintegraation asettaminen

Nyt toteutamme tekoälyintegraation Pythonilla. Python on erinomainen valinta tekoälysovelluksille sen yksinkertaisen syntaksin ja tehokkaiden kirjastojen ansiosta. Aloitamme GitHub Models -testausympäristön koodista ja muokkaamme sen uudelleenkäytettäväksi, tuotantovalmiiksi funktioksi.

### Perustoteutuksen ymmärtäminen

Kun otat Python-koodin testausympäristöstä, saat jotain tämän näköistä. Älä huoli, jos se vaikuttaa aluksi monimutkaiselta – käydään se läpi pala palalta:

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

**Mitä tässä koodissa tapahtuu:**
- **Tuomme** tarvittavat työkalut: `os` ympäristömuuttujien lukemiseen ja `OpenAI` tekoälyn kanssa kommunikointiin
- **Asetamme** OpenAI-asiakasohjelman osoittamaan GitHubin tekoälypalvelimille suoraan OpenAI:n sijaan
- **Autentikoimme** erityisellä GitHub-tunnuksella (lisätietoa tästä myöhemmin!)
- **Rakennamme** keskustelun eri "rooleilla" – ajattele sitä kuin näytelmän lavastamista
- **Lähetämme** pyyntömme tekoälylle hienosäätöparametreilla
- **Poimimme** varsinaisen vastaustekstin kaikista palautetuista tiedoista

### Viestiroolien ymmärtäminen: Tekoälykeskustelun kehys

Tekoälykeskustelut käyttävät tiettyä rakennetta, jossa eri "rooleilla" on omat tarkoituksensa:

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

**Ajattele sitä kuin näytelmän ohjaamista:**
- **Järjestelmän rooli**: Kuten näyttämöohjeet näyttelijälle – se kertoo tekoälylle, miten käyttäytyä, millainen persoonallisuus sillä on ja miten vastata
- **Käyttäjän rooli**: Varsinainen kysymys tai viesti sovelluksen käyttäjältä
- **Avustajan rooli**: Tekoälyn vastaus (tätä ei lähetetä, mutta se näkyy keskusteluhistoriassa)

**Esimerkki tosielämästä**: Kuvittele, että esittelet ystäväsi jollekin juhlissa:
- **Järjestelmäviesti**: "Tämä on ystäväni Sarah, hän on lääkäri, joka osaa selittää lääketieteellisiä käsitteitä yksinkertaisesti"
- **Käyttäjäviesti**: "Voitko selittää, miten rokotteet toimivat?"
- **Avustajan vastaus**: Sarah vastaa ystävällisenä lääkärinä, ei lakimiehenä tai kokkina

### Tekoälyparametrien ymmärtäminen: Vastauskäyttäytymisen hienosäätö

Tekoäly-API-kutsujen numeeriset parametrit ohjaavat, miten malli tuottaa vastauksia. Näiden asetusten avulla voit säätää tekoälyn käyttäytymistä eri käyttötarkoituksiin:

#### Lämpötila (0.0–2.0): Luovuuden säätö

**Mitä se tekee**: Säätelee, kuinka luovia tai ennustettavia tekoälyn vastaukset ovat.

**Ajattele sitä kuin jazz-muusikon improvisaatiotasoa:**
- **Lämpötila = 0.1**: Soittaa täsmälleen saman melodian joka kerta (erittäin ennustettava)
- **Lämpötila = 0.7**: Lisää hieman tyylikkäitä variaatioita pysyen tunnistettavana (tasapainoinen luovuus)
- **Lämpötila = 1.5**: Täysi kokeellinen jazz odottamattomilla käänteillä (erittäin arvaamaton)

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

#### Max Tokens (1–4096+): Vastausten pituuden hallinta

**Mitä se tekee**: Asettaa rajan sille, kuinka pitkä tekoälyn vastaus voi olla.

**Ajattele tokeneita suunnilleen sanoina** (noin 1 token = 0.75 sanaa englanniksi):
- **max_tokens=50**: Lyhyt ja ytimekäs (kuten tekstiviesti)
- **max_tokens=500**: Mukava kappale tai kaksi
- **max_tokens=2000**: Yksityiskohtainen selitys esimerkkien kera

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

#### Top_p (0.0–1.0): Keskittymisparametri

**Mitä se tekee**: Säätelee, kuinka keskittynyt tekoäly pysyy todennäköisimmissä vastauksissa.

**Kuvittele tekoälyllä olevan valtava sanavarasto, joka on järjestetty sanojen todennäköisyyden mukaan:**
- **top_p=0.1**: Huomioi vain 10 % todennäköisimmistä sanoista (erittäin keskittynyt)
- **top_p=0.9**: Huomioi 90 % mahdollisista sanoista (luovempi)
- **top_p=1.0**: Huomioi kaiken (maksimaalinen vaihtelu)

**Esimerkiksi**: Jos kysyt "Taivas on yleensä..."
- **Matala top_p**: Sanoo melko varmasti "sininen"
- **Korkea top_p**: Saattaa sanoa "sininen", "pilvinen", "laaja", "muuttuva", "kaunis" jne.

### Kaiken yhdistäminen: Parametrien yhdistelmät eri käyttötarkoituksiin

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

**Miksi nämä parametrit ovat tärkeitä**: Eri sovellukset tarvitsevat erilaisia vastauksia. Asiakaspalvelubotin tulisi olla johdonmukainen ja faktapohjainen (matala lämpötila), kun taas luova kirjoitusavustaja tulisi olla mielikuvituksellinen ja vaihteleva (korkea lämpötila). Näiden parametrien ymmärtäminen antaa sinulle hallinnan tekoälyn persoonallisuudesta ja vastaustyylistä.
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

**Tämän parannetun funktion ymmärtäminen:**
- **Hyväksyy** kaksi parametria: käyttäjän kysymyksen ja valinnaisen järjestelmäviestin
- **Tarjoaa** oletusjärjestelmäviestin yleiseen avustajakäyttäytymiseen
- **Käyttää** oikeita Python-tyyppivihjeitä paremman koodidokumentaation vuoksi
- **Palauttaa** vain vastaussisällön, mikä tekee siitä helppokäyttöisen verkkosovellusrajapinnassamme
- **Säilyttää** samat malliparametrit johdonmukaisen tekoälykäyttäytymisen varmistamiseksi

### Järjestelmäviestien taika: Tekoälyn persoonallisuuden ohjelmointi

Jos parametrit ohjaavat, miten tekoäly ajattelee, järjestelmäviestit ohjaavat, kuka tekoäly ajattelee olevansa. Tämä on rehellisesti yksi siisteimmistä asioista tekoälyn kanssa työskentelyssä – annat tekoälylle kokonaisen persoonallisuuden, asiantuntijuustason ja viestintätyylin.

**Ajattele järjestelmäviestejä kuin eri näyttelijöiden roolittamista eri rooleihin**: Sen sijaan, että sinulla olisi yksi geneerinen avustaja, voit luoda erikoistuneita asiantuntijoita eri tilanteisiin. Tarvitsetko kärsivällisen opettajan? Luovan ideointikumppanin? Jämäkän liikeneuvonantajan? Vaihda vain järjestelmäviesti!

#### Miksi järjestelmäviestit ovat niin voimakkaita

Tässä on kiehtova osa: Tekoälymallit on koulutettu lukemattomilla keskusteluilla, joissa ihmiset omaksuvat eri rooleja ja asiantuntijuustasoja. Kun annat tekoälylle tietyn roolin, se on kuin kytkisit päälle kaikki nuo opitut kuviot.

**Se on kuin metodinäyttelijätyöskentely tekoälylle**: Kerro näyttelijälle "olet viisas vanha professori" ja katso, kuinka hän automaattisesti säätää ryhtiään, sanastoaan ja eleitään. Tekoäly tekee jotain hämmästyttävän samanlaista kielellisten kuvioiden kanssa.

#### Tehokkaiden järjestelmäviestien luominen: Taide ja tiede

**Erinomaisen järjestelmäviestin anatomia:**
1. **Rooli/identiteetti**: Kuka tekoäly on?
2. **Asiantuntijuus**: Mitä se tietää?
3. **Viestintätyyli**: Miten se puhuu?
4. **Tarkat ohjeet**: Mihin sen pitäisi keskittyä?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Järjestelmäviestiesimerkit kontekstilla

Katsotaan, kuinka erilaiset järjestelmäviestit luovat täysin erilaisia tekoälypersoonallisuuksia:

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

#### Järjestelmäviestien toiminnan näkeminen käytännössä

Testataan samaa kysymystä eri järjestelmäviesteillä ja katsotaan dramaattiset erot:

**Kysymys**: "Kuinka käsittelen käyttäjän tunnistautumisen verkkosovelluksessani?"

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

#### Kehittyneet järjestelmäviestitekniikat

**1. Kontekstin asettaminen**: Anna tekoälylle taustatietoa
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Tulostusmuotoilu**: Kerro tekoälylle, miten vastaukset tulisi jäsentää
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

**3. Rajoitusten asettaminen**: Määrittele, mitä tekoäly EI saa tehdä
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Miksi tämä on tärkeää keskusteluavustajallesi

Järjestelmäviestien ymmärtäminen antaa sinulle uskomattoman voiman luoda erikoistuneita tekoälyavustajia:
- **Asiakaspalvelubotti**: Avulias, kärsivällinen, politiikkatietoinen
- **Oppimistutor**: Kannustava, vaiheittainen, tarkistaa ymmärryksen
- **Luova kumppani**: Mielikuvituksellinen, kehittää ideoita, kysyy "mitä jos?"

**Tässä syyt, miksi FastAPI sopii täydellisesti siihen, mitä olemme rakentamassa:**
- **Asynkroninen oletuksena**: Käsittelee useita AI-pyyntöjä samanaikaisesti ilman jumiutumista
- **Automaattiset dokumentit**: Käy osoitteessa `/docs` ja saat kauniin, interaktiivisen API-dokumentaation ilmaiseksi
- **Sisäänrakennettu validointi**: Havaitsee virheet ennen kuin ne aiheuttavat ongelmia
- **Salaman nopea**: Yksi nopeimmista Python-kehyksistä
- **Moderni Python**: Hyödyntää kaikkia uusimpia ja parhaita Python-ominaisuuksia

**Ja tässä syyt, miksi tarvitsemme backendin ylipäätään:**

**Turvallisuus**: AI API-avaimesi on kuin salasana – jos laitat sen frontendin JavaScriptiin, kuka tahansa, joka katsoo verkkosivustosi lähdekoodia, voi varastaa sen ja käyttää AI-krediittejäsi. Backend pitää arkaluontoiset tunnukset turvassa.

**Käyttörajoitukset ja hallinta**: Backend antaa mahdollisuuden hallita, kuinka usein käyttäjät voivat tehdä pyyntöjä, toteuttaa käyttäjätunnistuksen ja lisätä lokitiedot käyttöä varten.

**Datan käsittely**: Saatat haluta tallentaa keskusteluja, suodattaa sopimatonta sisältöä tai yhdistää useita AI-palveluita. Backend on paikka, jossa tämä logiikka sijaitsee.

**Arkkitehtuuri muistuttaa asiakas-palvelin-mallia:**
- **Frontend**: Käyttöliittymäkerros vuorovaikutusta varten
- **Backend API**: Pyyntöjen käsittely- ja reitityskerros
- **AI-palvelu**: Ulkoinen laskenta ja vastausten generointi
- **Ympäristömuuttujat**: Turvallinen konfiguraatio ja tunnusten säilytys

### Pyyntö-vastausprosessin ymmärtäminen

Käydään läpi, mitä tapahtuu, kun käyttäjä lähettää viestin:

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

**Jokaisen vaiheen ymmärtäminen:**
1. **Käyttäjän vuorovaikutus**: Henkilö kirjoittaa chat-käyttöliittymään
2. **Frontendin käsittely**: JavaScript tallentaa syötteen ja muotoilee sen JSON-muotoon
3. **API-validointi**: FastAPI validoi pyynnön automaattisesti Pydantic-mallien avulla
4. **AI-integraatio**: Backend lisää kontekstin (järjestelmäkehotteen) ja kutsuu AI-palvelua
5. **Vastauksen käsittely**: API vastaanottaa AI:n vastauksen ja voi muokata sitä tarvittaessa
6. **Frontendin näyttö**: JavaScript näyttää vastauksen chat-käyttöliittymässä

### API-arkkitehtuurin ymmärtäminen

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

### FastAPI-sovelluksen luominen

Rakennetaan API vaihe vaiheelta. Luo tiedosto nimeltä `api.py` seuraavalla FastAPI-koodilla:

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

**FastAPI-toteutuksen ymmärtäminen:**
- **Tuodaan** FastAPI modernin web-kehyksen toiminnallisuutta varten ja Pydantic datan validointiin
- **Luodaan** automaattinen API-dokumentaatio (saatavilla osoitteessa `/docs`, kun palvelin käynnistyy)
- **Mahdollistetaan** CORS-väliohjelmisto, jotta frontend-pyynnöt eri alkuperistä sallitaan
- **Määritellään** Pydantic-mallit automaattista pyyntö/vastausvalidointia ja dokumentaatiota varten
- **Käytetään** asynkronisia päätepisteitä paremman suorituskyvyn saavuttamiseksi samanaikaisilla pyynnöillä
- **Toteutetaan** oikeat HTTP-tilakoodit ja virheenkäsittely HTTPExceptionin avulla
- **Sisällytetään** rakenteellinen lokitus seurantaa ja virheenkorjausta varten
- **Tarjotaan** terveystarkistuspäätepiste palvelun tilan seurantaan

**FastAPI:n keskeiset edut perinteisiin kehyksiin verrattuna:**
- **Automaattinen validointi**: Pydantic-mallit varmistavat datan eheyden ennen käsittelyä
- **Interaktiiviset dokumentit**: Käy osoitteessa `/docs` saadaksesi automaattisesti luodun, testattavan API-dokumentaation
- **Tyyppiturvallisuus**: Python-tyyppivihjeet estävät ajonaikaiset virheet ja parantavat koodin laatua
- **Asynkroninen tuki**: Käsittelee useita AI-pyyntöjä samanaikaisesti ilman estymistä
- **Suorituskyky**: Merkittävästi nopeampi pyyntöjen käsittely reaaliaikaisissa sovelluksissa

### CORS: Verkon turvallisuusvahti

CORS (Cross-Origin Resource Sharing) on kuin rakennuksen turvavahti, joka tarkistaa, saavatko vierailijat tulla sisään. Ymmärretään, miksi tämä on tärkeää ja miten se vaikuttaa sovellukseesi.

#### Mikä CORS on ja miksi se on olemassa?

**Ongelma**: Kuvittele, että mikä tahansa verkkosivusto voisi tehdä pyyntöjä pankkisi verkkosivustolle puolestasi ilman lupaasi. Se olisi turvallisuuskatastrofi! Selaimet estävät tämän oletuksena "Same-Origin Policy" -käytännön avulla.

**Same-Origin Policy**: Selaimet sallivat verkkosivujen tehdä pyyntöjä vain samaan domainiin, porttiin ja protokollaan, josta ne ladattiin.

**Todellinen analogia**: Se on kuin kerrostalon turvallisuus – vain asukkaat (sama alkuperä) voivat päästä rakennukseen oletuksena. Jos haluat ystävän (eri alkuperä) vierailevan, sinun täytyy kertoa turvavahdille, että se on ok.

#### CORS kehitysympäristössäsi

Kehityksen aikana frontend ja backend toimivat eri porteissa:
- Frontend: `http://localhost:3000` (tai file:// jos avaat HTML:n suoraan)
- Backend: `http://localhost:5000`

Nämä katsotaan "eri alkuperiksi", vaikka ne ovat samalla tietokoneella!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Mitä CORS-konfiguraatio käytännössä tekee:**
- **Lisää** erityisiä HTTP-otsikoita API-vastauksiin, jotka kertovat selaimille "tämä eri alkuperän pyyntö on sallittu"
- **Käsittelee** "preflight"-pyyntöjä (selaimet tarkistavat joskus oikeudet ennen varsinaista pyyntöä)
- **Estää** pelätyn "blocked by CORS policy" -virheen selaimen konsolissa

#### CORS-turvallisuus: Kehitys vs tuotanto

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

**Miksi tämä on tärkeää**: Kehityksessä `CORS(app)` on kuin jättäisit etuoven lukitsematta – kätevää mutta ei turvallista. Tuotannossa haluat määrittää tarkasti, mitkä verkkosivustot voivat kommunikoida API:si kanssa.

#### Yleiset CORS-tilanteet ja ratkaisut

| Tilanne | Ongelma | Ratkaisu |
|---------|---------|----------|
| **Paikallinen kehitys** | Frontend ei pääse backendiin | Lisää CORSMiddleware FastAPI:hen |
| **GitHub Pages + Heroku** | Julkaistu frontend ei pääse API:hin | Lisää GitHub Pages -URL CORS-alkuperiin |
| **Oma domain** | CORS-virheet tuotannossa | Päivitä CORS-alkuperät vastaamaan domainiasi |
| **Mobiilisovellus** | Sovellus ei pääse web-API:hin | Lisää sovelluksesi domain tai käytä `*` varovasti |

**Vinkki**: Voit tarkistaa CORS-otsikot selaimesi Developer Tools -työkalussa Verkko-välilehdellä. Etsi otsikoita kuten `Access-Control-Allow-Origin` vastauksesta.

### Virheenkäsittely ja validointi

Huomaa, kuinka API sisältää asianmukaisen virheenkäsittelyn:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Keskeiset validointiperiaatteet:**
- **Tarkistaa** vaaditut kentät ennen pyyntöjen käsittelyä
- **Palauttaa** merkitykselliset virheilmoitukset JSON-muodossa
- **Käyttää** asianmukaisia HTTP-tilakoodeja (400 virheellisille pyynnöille)
- **Tarjoaa** selkeää palautetta, joka auttaa frontend-kehittäjiä virheenkorjauksessa

## Backendin asennus ja käynnistys

Nyt kun AI-integraatio ja FastAPI-palvelin ovat valmiita, käynnistetään kaikki. Asennusprosessi sisältää Python-riippuvuuksien asentamisen, ympäristömuuttujien konfiguroinnin ja kehityspalvelimen käynnistämisen.

### Python-ympäristön asennus

Asennetaan Python-kehitysympäristösi. Virtuaaliympäristöt ovat kuin Manhattan-projektin eriytetty lähestymistapa – jokaisella projektilla on oma eristetty tila, jossa on tietyt työkalut ja riippuvuudet, mikä estää ristiriidat eri projektien välillä.

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

**Mitä juuri teimme:**
- **Luoimme** oman pienen Python-kuplan, jossa voimme asentaa paketteja vaikuttamatta mihinkään muuhun
- **Aktivoimme** sen, jotta terminaali tietää käyttää tätä tiettyä ympäristöä
- **Asensimme** olennaiset: OpenAI AI-taikuutta varten, FastAPI web-API:lle, Uvicorn sen ajamiseen ja python-dotenv turvalliseen salaisuuksien hallintaan

**Keskeiset riippuvuudet selitettynä:**
- **FastAPI**: Moderni, nopea web-kehys automaattisella API-dokumentaatiolla
- **Uvicorn**: Salaman nopea ASGI-palvelin, joka ajaa FastAPI-sovelluksia
- **OpenAI**: Virallinen kirjasto GitHub-malleille ja OpenAI API -integraatiolle
- **python-dotenv**: Turvallinen ympäristömuuttujien lataus .env-tiedostoista

### Ympäristön konfigurointi: Salaisuuksien pitäminen turvassa

Ennen kuin käynnistämme API:n, meidän täytyy puhua yhdestä tärkeimmästä verkkokehityksen oppitunnista: kuinka pitää salaisuudet oikeasti salassa. Ympäristömuuttujat ovat kuin turvallinen holvi, johon vain sovelluksesi pääsee käsiksi.

#### Mitä ympäristömuuttujat ovat?

**Ajattele ympäristömuuttujia kuin tallelokeroa** – laitat arvokkaan tavarasi sinne, ja vain sinä (ja sovelluksesi) pääset siihen käsiksi. Sen sijaan, että kirjoittaisit arkaluontoista tietoa suoraan koodiin (jossa kirjaimellisesti kuka tahansa voi nähdä sen), säilytät sen turvallisesti ympäristössä.

**Tässä ero:**
- **Väärä tapa**: Kirjoitat salasanasi muistilapulle ja laitat sen näyttöön
- **Oikea tapa**: Säilytät salasanasi turvallisessa salasananhallinnassa, johon vain sinulla on pääsy

#### Miksi ympäristömuuttujat ovat tärkeitä

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

**Mitä tapahtuu, kun kovakoodaat salaisuudet:**
1. **Versionhallinnan paljastuminen**: Kuka tahansa, jolla on pääsy Git-repositorioon, näkee API-avaimesi
2. **Julkiset repositoriot**: Jos työnnät GitHubiin, avain näkyy koko internetille
3. **Tiimin jakaminen**: Muut kehittäjät, jotka työskentelevät projektissasi, saavat pääsyn henkilökohtaiseen API-avainesi
4. **Turvallisuusmurrot**: Jos joku varastaa API-avaimesi, hän voi käyttää AI-krediittejäsi

#### Ympäristötiedoston asettaminen

Luo `.env`-tiedosto backend-hakemistoosi. Tämä tiedosto tallentaa salaisuutesi paikallisesti:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**.env-tiedoston ymmärtäminen:**
- **Yksi salaisuus per rivi** muodossa `KEY=value`
- **Ei välilyöntejä** yhtäläisyysmerkin ympärillä
- **Ei lainausmerkkejä** arvojen ympärillä (yleensä)
- **Kommentit** alkavat `#`

#### GitHubin henkilökohtaisen käyttöoikeustunnuksen luominen

GitHub-tunnuksesi on kuin erityinen salasana, joka antaa sovelluksellesi luvan käyttää GitHubin AI-palveluita:

**Vaiheittainen tunnuksen luominen:**
1. **Mene GitHub-asetuksiin** → Kehittäjäasetukset → Henkilökohtaiset käyttöoikeustunnukset → Tunnukset (klassinen)
2. **Klikkaa "Luo uusi tunnus (klassinen)"**
3. **Aseta vanhenemisaika** (30 päivää testaukseen, pidempi tuotantoon)
4. **Valitse laajuudet**: Valitse "repo" ja muut tarvittavat oikeudet
5. **Luo tunnus** ja kopioi se heti (et voi nähdä sitä uudelleen!)
6. **Liitä .env-tiedostoosi**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Ympäristömuuttujien lataaminen Pythonissa

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

**Mitä tämä koodi tekee:**
- **Lataa** .env-tiedostosi ja tekee muuttujat saatavilla Pythonille
- **Tarkistaa**, onko vaadittu tunnus olemassa (hyvä virheenkäsittely!)
- **Nostaa** selkeän virheen, jos tunnus puuttuu
- **Käyttää** tunnusta turvallisesti paljastamatta sitä koodissa

#### Git-turvallisuus: .gitignore-tiedosto

`.gitignore`-tiedostosi kertoo Gitille, mitkä tiedostot ei koskaan tule seurata tai ladata:

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

**Miksi tämä on ratkaisevaa**: Kun lisäät `.env`-tiedoston `.gitignore`-tiedostoon, Git ohittaa ympäristötiedostosi, estäen sinua vahingossa lataamasta salaisuuksiasi GitHubiin.

#### Eri ympäristöt, eri salaisuudet

Ammattilaisohjelmat käyttävät eri API-avaimia eri ympäristöihin:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Miksi tämä on tärkeää**: Et halua, että kehityskokeilusi vaikuttavat tuotannon AI-käyttökiintiöön, ja haluat eri turvallisuustasot eri ympäristöille.

### Kehityspalvelimen käynnistäminen: FastAPI eloon

Nyt tulee jännittävä hetki – käynnistetään FastAPI-kehityspalvelin ja nähdään AI-integraatio toiminnassa! FastAPI käyttää Uvicornia, salaman nopeaa ASGI-palvelinta, joka on erityisesti suunniteltu asynkronisille Python-sovelluksille.

#### FastAPI-palvelimen käynnistysprosessin ymmärtäminen

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kun suoritat tämän komennon, seuraavat asiat tapahtuvat kulissien takana:

**1. Python lataa FastAPI-sovelluksesi**:
- Tuo kaikki tarvittavat kirjastot (FastAPI, Pydantic, OpenAI jne.)
- Lataa ympäristömuuttujat `.env`-tiedostostasi
- Luo FastAPI-sovellusinstanssi automaattisella dokumentaatiolla

**2. Uvicorn konfiguroi ASGI-palvelimen**:
- Sitoutuu porttiin 5000 asynkronisten pyyntöjen käsittelyominaisuuksilla
- Asettaa pyyntöjen reitityksen automaattisella validoinnilla
- Mahdollistaa kuuman latauksen kehitystä varten (käynnistyy uudelleen tiedostomuutoksissa)
- Generoi interaktiivisen API-dokumentaation

**3. Palvelin alkaa kuunnella**:
- Terminaalisi näyttää: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Palvelin voi käsitellä useita samanaikaisia AI-pyyntöjä
- API on valmis automaattisilla dokumenteilla osoitteessa `http://localhost:5000/docs`

#### Mitä sinun pitäisi nähdä, kun kaikki toimii

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**FastAPI:n tuloksen ymmärtäminen:**
- **Tarkkailee muutoksia**: Automaattinen uudelleenlataus käytössä kehitystä varten
- **Uvicorn käynnissä**: Suorituskykyinen ASGI-palvelin on aktiivinen
- **Käynnisti uudelleenlatausprosessin**: Tiedostojen tarkkailija automaattisia uudelleenkäynnistyksiä varten
- **Sovelluksen käynnistys valmis**: FastAPI-sovellus alustettu onnistuneesti
- **Interaktiiviset dokumentit saatavilla**: Käy `/docs
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

#### Yleiset käynnistysongelmat ja niiden ratkaisu

| Virheilmoitus | Mitä se tarkoittaa | Kuinka korjata |
|---------------|--------------------|----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI ei ole asennettu | Suorita `pip install fastapi uvicorn` virtuaaliympäristössäsi |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI-palvelin ei ole asennettu | Suorita `pip install uvicorn` virtuaaliympäristössäsi |
| `KeyError: 'GITHUB_TOKEN'` | Ympäristömuuttujaa ei löydy | Tarkista `.env`-tiedosto ja `load_dotenv()`-kutsu |
| `Address already in use` | Portti 5000 on varattu | Lopeta muut prosessit, jotka käyttävät porttia 5000, tai vaihda portti |
| `ValidationError` | Pyynnön data ei vastaa Pydantic-mallia | Varmista, että pyyntösi formaatti vastaa odotettua skeemaa |
| `HTTPException 422` | Käsittelemätön entiteetti | Pyynnön validointi epäonnistui, tarkista `/docs` oikea formaatti |
| `OpenAI API error` | AI-palvelun autentikointi epäonnistui | Varmista, että GitHub-tokenisi on oikein ja sillä on tarvittavat oikeudet |

#### Kehityksen parhaat käytännöt

**Automaattinen uudelleenlataus**: FastAPI ja Uvicorn tarjoavat automaattisen uudelleenlatauksen, kun tallennat muutoksia Python-tiedostoihisi. Tämä tarkoittaa, että voit muokata koodiasi ja testata välittömästi ilman manuaalista uudelleenkäynnistystä.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Lokitus kehitystä varten**: Lisää lokitus ymmärtääksesi, mitä tapahtuu:

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

**Miksi lokitus auttaa**: Kehityksen aikana näet tarkalleen, millaisia pyyntöjä tulee, mitä AI vastaa ja missä virheet tapahtuvat. Tämä nopeuttaa virheiden korjaamista huomattavasti.

### GitHub Codespacesin konfigurointi: Pilvipohjainen kehitys helposti

GitHub Codespaces on kuin tehokas kehitystietokone pilvessä, johon pääset käsiksi mistä tahansa selaimesta. Jos työskentelet Codespacesissa, on muutama lisävaihe, jotta taustajärjestelmäsi on käytettävissä käyttöliittymästäsi.

#### Codespacesin verkon ymmärtäminen

Paikallisessa kehitysympäristössä kaikki toimii samalla tietokoneella:
- Taustajärjestelmä: `http://localhost:5000`
- Käyttöliittymä: `http://localhost:3000` (tai file://)

Codespacesissa kehitysympäristösi toimii GitHubin palvelimilla, joten "localhost" tarkoittaa jotain muuta. GitHub luo automaattisesti julkisia URL-osoitteita palveluillesi, mutta sinun täytyy konfiguroida ne oikein.

#### Codespaces-konfiguroinnin vaiheet

**1. Käynnistä taustajärjestelmäsi**:
```bash
cd backend
python api.py
```

Näet tutun FastAPI/Uvicorn-käynnistysviestin, mutta huomaat sen toimivan Codespaces-ympäristössä.

**2. Konfiguroi portin näkyvyys**:
- Etsi "Ports"-välilehti VS Coden alareunasta
- Etsi portti 5000 listasta
- Napsauta porttia 5000 oikealla
- Valitse "Port Visibility" → "Public"

**Miksi tehdä portti julkiseksi?** Oletuksena Codespaces-portit ovat yksityisiä (vain sinulle käytettävissä). Julkiseksi tekeminen mahdollistaa käyttöliittymän (joka toimii selaimessa) kommunikoinnin taustajärjestelmän kanssa.

**3. Hanki julkinen URL-osoitteesi**:
Kun portti on tehty julkiseksi, näet URL-osoitteen, joka näyttää tältä:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Päivitä käyttöliittymän konfiguraatio**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Codespaces-URL-osoitteiden ymmärtäminen

Codespaces-URL-osoitteet noudattavat ennustettavaa kaavaa:
```
https://[codespace-name]-[port].app.github.dev
```

**Tämän kaavan osat:**
- `codespace-name`: Codespacesin yksilöllinen tunniste (sisältää yleensä käyttäjänimesi)
- `port`: Porttinumero, jossa palvelusi toimii (5000 FastAPI-sovelluksellemme)
- `app.github.dev`: GitHubin domain Codespaces-sovelluksille

#### Codespaces-asetusten testaaminen

**1. Testaa taustajärjestelmää suoraan**:
Avaa julkinen URL-osoitteesi uudessa selaimen välilehdessä. Sinun pitäisi nähdä:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testaa selaimen kehitystyökaluilla**:
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

#### Codespaces vs paikallinen kehitys

| Ominaisuus | Paikallinen kehitys | GitHub Codespaces |
|------------|---------------------|-------------------|
| **Asennusaika** | Pidempi (Pythonin ja riippuvuuksien asennus) | Välitön (esikonfiguroitu ympäristö) |
| **URL-osoitteen käyttö** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Porttien konfigurointi** | Automaattinen | Manuaalinen (tee portit julkisiksi) |
| **Tiedostojen pysyvyys** | Paikallinen kone | GitHub-repositorio |
| **Yhteistyö** | Vaikea jakaa ympäristöä | Helppo jakaa Codespaces-linkki |
| **Internet-riippuvuus** | Vain AI-API-kutsuille | Tarvitaan kaikkeen |

#### Codespaces-kehitysvinkit

**Ympäristömuuttujat Codespacesissa**:
`.env`-tiedostosi toimii samalla tavalla Codespacesissa, mutta voit myös asettaa ympäristömuuttujia suoraan Codespacesissa:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Porttien hallinta**:
- Codespaces havaitsee automaattisesti, kun sovelluksesi alkaa kuunnella porttia
- Voit ohjata useita portteja samanaikaisesti (hyödyllistä, jos lisäät myöhemmin tietokannan)
- Portit pysyvät käytettävissä niin kauan kuin Codespacesisi on käynnissä

**Kehitystyönkulku**:
1. Tee koodimuutoksia VS Codessa
2. FastAPI lataa automaattisesti uudelleen (kiitos Uvicornin reload-tilan)
3. Testaa muutokset välittömästi julkisen URL-osoitteen kautta
4. Tee commit ja push, kun olet valmis

> 💡 **Vinkki**: Lisää Codespaces-taustajärjestelmän URL-osoite kirjanmerkkeihin kehityksen aikana. Koska Codespaces-nimet ovat vakaita, URL-osoite ei muutu niin kauan kuin käytät samaa Codespacesia.

## Käyttöliittymän rakentaminen: Missä ihmiset kohtaavat tekoälyn

Nyt rakennamme käyttöliittymän – osan, joka määrittää, miten ihmiset ovat vuorovaikutuksessa tekoälyavustajasi kanssa. Kuten alkuperäisen iPhonen käyttöliittymän suunnittelussa, keskitymme tekemään monimutkaisesta teknologiasta intuitiivista ja helppokäyttöistä.

### Modernin käyttöliittymäarkkitehtuurin ymmärtäminen

Keskustelukäyttöliittymämme on niin sanottu "Single Page Application" eli SPA. Sen sijaan, että jokainen klikkaus lataisi uuden sivun, sovelluksemme päivittyy sujuvasti ja välittömästi:

**Vanhat verkkosivut**: Kuten fyysisen kirjan lukeminen – käännät kokonaan uusia sivuja
**Keskustelusovelluksemme**: Kuten puhelimen käyttö – kaikki virtaa ja päivittyy saumattomasti

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

### Käyttöliittymäkehityksen kolme peruspilaria

Jokainen käyttöliittymäsovellus – yksinkertaisista verkkosivuista monimutkaisiin sovelluksiin kuten Discord tai Slack – rakentuu kolmen ydinteknologian varaan. Ajattele niitä perustana kaikelle, mitä näet ja miten olet vuorovaikutuksessa verkossa:

**HTML (Rakenne)**: Tämä on perusta
- Määrittää, mitkä elementit ovat olemassa (painikkeet, tekstikentät, säiliöt)
- Antaa sisällölle merkityksen (tämä on otsikko, tämä on lomake jne.)
- Luo perusrakenteen, jonka päälle kaikki muu rakentuu

**CSS (Ulkoasu)**: Tämä on sisustussuunnittelijasi
- Saa kaiken näyttämään kauniilta (värit, fontit, asettelut)
- Mukautuu eri näyttökokoihin (puhelin vs. kannettava vs. tabletti)
- Luo sulavia animaatioita ja visuaalisia palautteita

**JavaScript (Käyttäytyminen)**: Tämä on aivot
- Reagoi käyttäjän toimintaan (klikkaukset, kirjoittaminen, vieritys)
- Kommunikoi taustajärjestelmän kanssa ja päivittää sivua
- Tekee kaikesta interaktiivista ja dynaamista

**Ajattele sitä kuin arkkitehtuurisuunnittelua:**
- **HTML**: Rakenteellinen suunnitelma (tilojen ja suhteiden määrittely)
- **CSS**: Esteettinen ja ympäristön suunnittelu (visuaalinen tyyli ja käyttökokemus)
- **JavaScript**: Mekaaniset järjestelmät (toiminnallisuus ja interaktiivisuus)

### Miksi moderni JavaScript-arkkitehtuuri on tärkeää

Keskustelusovelluksemme käyttää moderneja JavaScript-malleja, joita näet ammattilaisohjelmistoissa. Näiden käsitteiden ymmärtäminen auttaa sinua kehittymään ohjelmoijana:

**Luokkapohjainen arkkitehtuuri**: Järjestämme koodimme luokkiin, mikä on kuin luoda piirustuksia objekteille
**Async/Await**: Moderni tapa käsitellä aikaa vieviä operaatioita (kuten API-kutsuja)
**Tapahtumapohjainen ohjelmointi**: Sovelluksemme reagoi käyttäjän toimintaan (klikkaukset, näppäinten painallukset) sen sijaan, että se pyörisi silmukassa
**DOM-manipulaatio**: Päivittää verkkosivun sisältöä dynaamisesti käyttäjän toiminnan ja API-vastausten perusteella

### Projektirakenteen luominen

Luo käyttöliittymälle hakemisto, jossa on seuraava järjestelmä:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Arkkitehtuurin ymmärtäminen:**
- **Erottaa** rakenteen (HTML), käyttäytymisen (JavaScript) ja ulkoasun (CSS)
- **Ylläpitää** yksinkertaista tiedostorakennetta, jota on helppo navigoida ja muokata
- **Noudattaa** verkkokehityksen parhaita käytäntöjä järjestämisen ja ylläpidon osalta

### HTML-perustan rakentaminen: Semanttinen rakenne saavutettavuuden vuoksi

Aloitetaan HTML-rakenteesta. Moderni verkkokehitys korostaa "semanttista HTML:ää" – HTML-elementtien käyttöä, jotka kuvaavat selkeästi tarkoituksensa, eivät vain ulkonäköään. Tämä tekee sovelluksestasi saavutettavan ruudunlukijoille, hakukoneille ja muille työkaluille.

**Miksi semanttinen HTML on tärkeää**: Kuvittele, että kuvailet keskustelusovellustasi jollekin puhelimessa. Sanoisit "siellä on otsikko, pääalue, jossa keskustelut näkyvät, ja lomake alareunassa viestien kirjoittamista varten." Semanttinen HTML käyttää elementtejä, jotka vastaavat tätä luonnollista kuvausta.

Luo `index.html` tällä huolellisesti rakennetulla merkinnällä:

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

**Jokaisen HTML-elementin tarkoituksen ymmärtäminen:**

#### Dokumentin rakenne
- **`<!DOCTYPE html>`**: Ilmoittaa selaimelle, että kyseessä on moderni HTML5
- **`<html lang="en">`**: Määrittää sivun kielen ruudunlukijoille ja käännöstyökaluille
- **`<meta charset="UTF-8">`**: Varmistaa oikean merkistökoodauksen kansainväliselle tekstille
- **`<meta name="viewport"...>`**: Tekee sivusta mobiiliystävällisen hallitsemalla zoomausta ja skaalausta

#### Semanttiset elementit
- **`<header>`**: Tunnistaa selkeästi yläosan otsikolla ja kuvauksella
- **`<main>`**: Määrittää pääsisältöalueen (missä keskustelut tapahtuvat)
- **`<form>`**: Semanttisesti oikea käyttäjän syötteelle, mahdollistaa oikean näppäimistönavigoinnin

#### Saavutettavuusominaisuudet
- **`role="log"`**: Ilmoittaa ruudunlukijoille, että tämä alue sisältää kronologisen lokin viesteistä
- **`aria-live="polite"`**: Ilmoittaa ruudunlukijoille uusista viesteistä keskeyttämättä
- **`aria-label`**: Tarjoaa kuvailevia etikettejä lomakekentille
- **`required`**: Selaimen validointi, että käyttäjä syöttää viestin ennen lähettämistä

#### CSS- ja JavaScript-integraatio
- **`class`-attribuutit**: Tarjoavat tyylittelykoukkuja CSS:lle (esim. `chat-container`, `input-group`)
- **`id`-attribuutit**: Mahdollistavat JavaScriptin löytää ja manipuloida tiettyjä elementtejä
- **Skriptin sijoittelu**: JavaScript-tiedosto ladataan lopussa, jotta HTML latautuu ensin

**Miksi tämä rakenne toimii:**
- **Looginen kulku**: Otsikko → Pääsisältö → Syöttölomake vastaa luonnollista lukujärjestystä
- **Näppäimistöystävällinen**: Käyttäjät voivat siirtyä kaikkien interaktiivisten elementtien läpi tabulaattorilla
- **Ruudunlukijaystävällinen**: Selkeät maamerkit ja kuvaukset näkövammaisille käyttäjille
- **Mobiiliystävällinen**: Viewport-meta-tunniste mahdollistaa responsiivisen suunnittelun
- **Progressiivinen parannus**: Toimii, vaikka CSS tai JavaScript ei latautuisi

### Interaktiivisen JavaScriptin lisääminen: Modernin verkkosovelluksen logiikka

Rakennetaan nyt JavaScript, joka herättää keskustelukäyttöliittymän eloon. Käytämme moderneja JavaScript-malleja, joita kohtaat ammatillisessa verkkokehityksessä, kuten ES6-luokkia, async/awaitia ja tapahtumapohjaista ohjelmointia.

#### Modernin JavaScript-arkkitehtuurin ymmärtäminen

Sen sijaan, että kirjoittaisimme proseduraalista koodia (sarja funktioita, jotka suoritetaan järjestyksessä), luomme **luokkapohjaisen arkkitehtuurin**. Ajattele luokkaa piirustuksena, jonka avulla luodaan objekteja – kuten arkkitehdin piirustusta, jota käytetään useiden talojen rakentamiseen.

**Miksi käyttää luokkia verkkosovelluksissa?**
- **Organisaatio**: Kaikki liittyvä toiminnallisuus ryhmitellään yhteen
- **Uudelleenkäytettävyys**: Voit luoda useita keskusteluinstansseja samalla sivulla
- **Ylläpidettävyys**: Helpompi debugata ja muokata tiettyjä ominaisuuksia
- **Ammatillinen standardi**: Tätä mallia käytetään esimerkiksi React-, Vue- ja Angular-kehyksissä

Luo `app.js` tällä modernilla, hyvin rakennetulla JavaScriptillä:

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

#### Jokaisen JavaScript-käsitteen ymmärtäminen

**ES6-luokkarakenne**:
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

**Async/Await-malli**:
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

**Tapahtumapohjainen ohjelmointi**:
Sen sijaan, että jatkuvasti tarkistaisimme, tapahtuiko jotain, "kuuntelemme" tapahtumia:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-manipulaatio**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```

#### Turvallisuus ja parhaat käytännöt

**XSS:n estäminen**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // This automatically escapes HTML
    return div.innerHTML;
}
```

**Miksi tämä on tärkeää**: Jos käyttäjä kirjoittaa `<script>alert('hack')</script>`, tämä funktio varmistaa, että se näkyy tekstinä eikä suorita koodia.

**Virheiden käsittely**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Show user-friendly error instead of breaking the app
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Käyttäjäkokemuksen huomioiminen**:
- **Optimistinen käyttöliittymä**: Lisää käyttäjän viesti välittömästi, älä odota palvelimen vastausta

Tämä arkkitehtuuri on skaalautuva – voit helposti lisätä ominaisuuksia, kuten viestien muokkaamisen, tiedostojen lataamisen tai useita keskusteluketjuja ilman, että sinun tarvitsee kirjoittaa ydinkoodia uudelleen.

### Chat-käyttöliittymän tyylittely

Luodaan nyt moderni ja visuaalisesti houkutteleva chat-käyttöliittymä CSS:n avulla. Hyvä tyylittely tekee sovelluksesta ammattimaisen ja parantaa käyttäjäkokemusta. Käytämme moderneja CSS-ominaisuuksia, kuten Flexboxia, CSS Gridia ja mukautettuja ominaisuuksia responsiivisen ja saavutettavan suunnittelun luomiseksi.

Luo `styles.css` näillä kattavilla tyyleillä:

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

**CSS-arkkitehtuurin ymmärtäminen:**
- **Käyttää** CSS:n mukautettuja ominaisuuksia (muuttujia) yhtenäisen teeman ja helpon ylläpidon takaamiseksi
- **Toteuttaa** Flexbox-asettelun responsiivista suunnittelua ja oikeaa kohdistusta varten
- **Sisältää** sulavia animaatioita viestien ilmestymiseen ilman häiritsevyyttä
- **Tarjoaa** visuaalisen erottelun käyttäjän viestien, tekoälyvastausten ja virhetilojen välillä
- **Tukee** responsiivista suunnittelua, joka toimii sekä työpöydällä että mobiililaitteilla
- **Huomioi** saavutettavuuden vähentämällä liikettä ja varmistamalla oikeat kontrastisuhteet
- **Tarjoaa** tumma tila -tuen käyttäjän järjestelmäasetusten perusteella

### Backend-URL:n määrittäminen

Viimeinen vaihe on päivittää JavaScriptissä `BASE_URL` vastaamaan backend-palvelintasi:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Backend-URL:n määrittäminen:**
- **Paikallinen kehitys**: Käytä `http://localhost:5000`, jos suoritat sekä frontendin että backendin paikallisesti
- **Codespaces**: Löydä backend-URL Ports-välilehdeltä, kun olet tehnyt portin 5000 julkiseksi
- **Tuotanto**: Korvaa todellisella verkkotunnuksellasi, kun otat käyttöön hosting-palvelussa

> 💡 **Testausvinkki**: Voit testata backendiasi suoraan vierailemalla juuri-URL:ssa selaimessasi. Sinun pitäisi nähdä FastAPI-palvelimesi tervetuloviesti.

## Testaus ja käyttöönotto

Nyt kun olet rakentanut sekä frontend- että backend-komponentit, testataan, että kaikki toimii yhdessä, ja tutkitaan käyttöönoton vaihtoehtoja, jotta voit jakaa chat-avustajasi muiden kanssa.

### Paikallinen testausprosessi

Noudata näitä vaiheita testataksesi sovellustasi kokonaisuudessaan:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Vaiheittainen testausprosessi:**

1. **Käynnistä backend-palvelin**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Varmista, että API toimii**:
   - Avaa `http://localhost:5000` selaimessasi
   - Sinun pitäisi nähdä FastAPI-palvelimen tervetuloviesti

3. **Avaa frontend**:
   - Siirry frontend-hakemistoosi
   - Avaa `index.html` verkkoselaimessasi
   - Tai käytä VS Code -ohjelman Live Server -laajennusta paremman kehityskokemuksen saamiseksi

4. **Testaa chat-toiminnallisuus**:
   - Kirjoita viesti syöttökenttään
   - Klikkaa "Lähetä" tai paina Enter
   - Varmista, että tekoäly vastaa asianmukaisesti
   - Tarkista selaimen konsolista mahdolliset JavaScript-virheet

### Yleisten ongelmien vianetsintä

| Ongelma | Oireet | Ratkaisu |
|---------|--------|----------|
| **CORS-virhe** | Frontend ei pääse backendiin | Varmista, että FastAPI CORSMiddleware on oikein määritetty |
| **API-avaimen virhe** | 401 Unauthorized -vastaukset | Tarkista `GITHUB_TOKEN` ympäristömuuttuja |
| **Yhteys hylätty** | Verkkovirheet frontendissä | Varmista backend-URL ja että Flask-palvelin on käynnissä |
| **Ei tekoälyvastausta** | Tyhjiä tai virheellisiä vastauksia | Tarkista backendin lokit API:n käyttörajoitusten tai autentikointiongelmien varalta |

**Yleiset vianetsintävaiheet:**
- **Tarkista** selaimen Developer Tools -konsoli JavaScript-virheiden varalta
- **Varmista** Network-välilehdeltä onnistuneet API-pyynnöt ja -vastaukset
- **Tarkista** backendin terminaalin tuloste Python-virheiden tai API-ongelmien varalta
- **Varmista** ympäristömuuttujien oikea lataus ja saatavuus

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Paranna chat-avustajaa lisäämällä keskusteluhistoria ja viestien pysyvyys. Tämä haaste auttaa sinua ymmärtämään, kuinka hallita tilaa chat-sovelluksissa ja toteuttaa datan tallennusta paremman käyttäjäkokemuksen saavuttamiseksi.

**Tehtävä:** Muokkaa chat-sovellusta sisältämään keskusteluhistorian, joka säilyy istuntojen välillä. Lisää toiminnallisuus, joka tallentaa chat-viestit paikalliseen tallennustilaan, näyttää keskusteluhistorian sivun latautuessa ja sisältää "Tyhjennä historia" -painikkeen. Toteuta myös kirjoitusindikaattorit ja viestien aikaleimat, jotta chat-kokemus tuntuu realistisemmalta.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löytyy täältä.

## Tehtävä: Rakenna oma tekoälyavustajasi

Nyt voit luoda oman tekoälyavustajasi. Sen sijaan, että vain kopioisit opetusohjelman koodin, tämä on tilaisuutesi soveltaa opittuja konsepteja ja rakentaa jotain, joka heijastaa omia kiinnostuksen kohteitasi ja käyttötapauksiasi.

### Projektivaatimukset

Aloitetaan projektin asettaminen puhtaalla ja järjestelmällisellä rakenteella:

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

### Keskeiset toteutustehtävät

**Backend-kehitys:**
- **Muokkaa** FastAPI-koodiamme ja tee siitä omasi
- **Luo** ainutlaatuinen tekoälypersoonallisuus – ehkä avulias ruoanlaittoavustaja, luova kirjoituskumppani tai opiskelukaveri?
- **Lisää** vankka virheenkäsittely, jotta sovelluksesi ei kaadu ongelmatilanteissa
- **Kirjoita** selkeät dokumentaatiot, jotta kuka tahansa voi ymmärtää, miten API toimii

**Frontend-kehitys:**
- **Rakenna** chat-käyttöliittymä, joka tuntuu intuitiiviselta ja kutsuvalta
- **Kirjoita** puhdasta, modernia JavaScriptiä, jota voisit ylpeänä näyttää muille kehittäjille
- **Suunnittele** mukautettu ulkoasu, joka heijastaa tekoälysi persoonallisuutta – hauska ja värikäs? Selkeä ja minimalistinen? Täysin sinun päätettävissäsi!
- **Varmista**, että se toimii hyvin sekä puhelimissa että tietokoneilla

**Personointivaatimukset:**
- **Valitse** ainutlaatuinen nimi ja persoonallisuus tekoälyavustajallesi – ehkä jotain, joka heijastaa kiinnostuksen kohteitasi tai ratkaistavia ongelmia
- **Mukauta** visuaalinen suunnittelu vastaamaan avustajasi tyyliä
- **Kirjoita** houkutteleva tervetuloviesti, joka innostaa ihmisiä aloittamaan keskustelun
- **Testaa** avustajasi erilaisilla kysymyksillä nähdäksesi, miten se vastaa

### Parannusideoita (valinnainen)

Haluatko viedä projektisi seuraavalle tasolle? Tässä muutamia hauskoja ideoita tutkittavaksi:

| Ominaisuus | Kuvaus | Taidot, joita harjoittelet |
|------------|--------|----------------------------|
| **Viestihistoria** | Muista keskustelut myös sivun päivityksen jälkeen | Työskentely localStoragen kanssa, JSON-käsittely |
| **Kirjoitusindikaattorit** | Näytä "AI kirjoittaa..." odottaessasi vastauksia | CSS-animaatiot, asynkroninen ohjelmointi |
| **Viestien aikaleimat** | Näytä, milloin kukin viesti lähetettiin | Päivämäärän/aikojen muotoilu, UX-suunnittelu |
| **Keskustelun vienti** | Anna käyttäjien ladata keskustelunsa | Tiedostojen käsittely, datan vienti |
| **Teeman vaihtaminen** | Vaalea/tumma tila -vaihtoehto | CSS-muuttujat, käyttäjän mieltymykset |
| **Puheentunnistus** | Lisää puheesta tekstiksi -toiminnallisuus | Web API:t, saavutettavuus |

### Testaus ja dokumentaatio

**Laadunvarmistus:**
- **Testaa** sovellustasi erilaisilla syötetyypeillä ja reunatapauksilla
- **Varmista**, että responsiivinen suunnittelu toimii eri näyttökokoilla
- **Tarkista** saavutettavuus näppäimistön navigoinnilla ja ruudunlukijoilla
- **Vahvista** HTML:n ja CSS:n standardienmukaisuus

**Dokumentaatiovaatimukset:**
- **Kirjoita** README.md, jossa selitetään projektisi ja sen käyttöohjeet
- **Sisällytä** kuvakaappauksia chat-käyttöliittymästäsi toiminnassa
- **Dokumentoi** kaikki ainutlaatuiset ominaisuudet tai mukautukset, jotka lisäsit
- **Anna** selkeät asennusohjeet muille kehittäjille

### Lähetysohjeet

**Projektin toimitettavat osat:**
1. Täydellinen projektikansio kaikilla lähdekoodeilla
2. README.md, jossa projektin kuvaus ja asennusohjeet
3. Kuvakaappauksia, jotka esittävät chat-avustajasi toiminnassa
4. Lyhyt pohdinta siitä, mitä opit ja mitä haasteita kohtasit

**Arviointikriteerit:**
- **Toiminnallisuus**: Toimiiko chat-avustaja odotetusti?
- **Koodin laatu**: Onko koodi hyvin järjestetty, kommentoitu ja ylläpidettävä?
- **Suunnittelu**: Onko käyttöliittymä visuaalisesti houkutteleva ja käyttäjäystävällinen?
- **Luovuus**: Kuinka ainutlaatuinen ja personoitu toteutuksesi on?
- **Dokumentaatio**: Ovatko asennusohjeet selkeät ja täydelliset?

> 💡 **Menestysvinkki**: Aloita perusvaatimuksista ja lisää parannuksia vasta, kun kaikki toimii. Keskity luomaan hiottu peruskokemus ennen kuin lisäät edistyneitä ominaisuuksia.

## Ratkaisu

[Ratkaisu](./solution/README.md)

## Bonushaasteet

Valmis viemään tekoälyavustajasi seuraavalle tasolle? Kokeile näitä edistyneitä haasteita, jotka syventävät ymmärrystäsi tekoälyn integroinnista ja web-kehityksestä.

### Persoonallisuuden mukauttaminen

Todellinen taika tapahtuu, kun annat tekoälyavustajallesi ainutlaatuisen persoonallisuuden. Kokeile erilaisia järjestelmäkehotteita luodaksesi erikoistuneita avustajia:

**Ammatillisen avustajan esimerkki:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Luovan kirjoittamisen avustajan esimerkki:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Teknisen mentorin esimerkki:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontend-parannukset

Muuta chat-käyttöliittymäsi visuaalisilla ja toiminnallisilla parannuksilla:

**Edistyneet CSS-ominaisuudet:**
- **Toteuta** sulavat viestianimaatiot ja siirtymät
- **Lisää** mukautettuja chat-kuplamalleja CSS-muotojen ja gradienttien avulla
- **Luo** kirjoitusindikaattorianimaatio tekoälyn "ajattelulle"
- **Suunnittele** emoji-reaktioita tai viestien arviointijärjestelmä

**JavaScript-parannukset:**
- **Lisää** pikanäppäimiä (Ctrl+Enter lähettämiseen, Escape syötteen tyhjentämiseen)
- **Toteuta** viestien haku- ja suodatusominaisuus
- **Luo** keskustelun vientiominaisuus (lataa tekstinä tai JSON-muodossa)
- **Lisää** automaattinen tallennus localStorageen viestien menettämisen estämiseksi

### Edistynyt tekoälyn integrointi

**Useita tekoälypersoonallisuuksia:**
- **Luo** pudotusvalikko eri tekoälypersoonallisuuksien vaihtamiseen
- **Tallenna** käyttäjän suosikkipersoonallisuus localStorageen
- **Toteuta** kontekstin vaihto, joka säilyttää keskustelun sujuvuuden

**Älykkäät vastaustoiminnot:**
- **Lisää** keskustelun kontekstin huomioiminen (tekoäly muistaa aiemmat viestit)
- **Toteuta** älykkäät ehdotukset keskustelun aiheen perusteella
- **Luo** pikavastauspainikkeet yleisille kysymyksille

> 🎯 **Oppimistavoite**: Nämä bonushaasteet auttavat sinua ymmärtämään edistyneitä web-kehityksen malleja ja tekoälyn integrointitekniikoita, joita käytetään tuotantosovelluksissa.

## Yhteenveto ja seuraavat askeleet

Onnittelut! Olet onnistuneesti rakentanut täydellisen tekoälypohjaisen chat-avustajan alusta alkaen. Tämä projekti on antanut sinulle käytännön kokemusta modernista web-kehitysteknologiasta ja tekoälyn integroinnista – taitoja, jotka ovat yhä arvokkaampia nykypäivän teknologiamaailmassa.

### Mitä olet saavuttanut

Tämän oppitunnin aikana olet hallinnut useita keskeisiä teknologioita ja konsepteja:

**Backend-kehitys:**
- **Integroinut** GitHub Models API:n tekoälytoiminnallisuutta varten
- **Rakentanut** RESTful-API:n Flaskilla ja toteuttanut asianmukaisen virheenkäsittelyn
- **Toteuttanut** turvallisen autentikoinnin ympäristömuuttujien avulla
- **Määrittänyt** CORS:n frontendin ja backendin välisiä pyyntöjä varten

**Frontend-kehitys:**
- **Luonut** responsiivisen chat-käyttöliittymän semanttisella HTML:llä
- **Toteuttanut** modernia JavaScriptiä async/await- ja luokkapohjaisella arkkitehtuurilla
- **Suunnitellut** houkuttelevan käyttöliittymän CSS Gridin, Flexboxin ja animaatioiden avulla
- **Lisännyt** saavutettavuusominaisuuksia ja responsiivisen suunnittelun periaatteita

**Full-stack-integraatio:**
- **Yhdistänyt** frontendin ja backendin HTTP-API-pyyntöjen avulla
- **Käsitellyt** reaaliaikaisia käyttäjäinteraktioita ja asynkronista datavirtaa
- **Toteuttanut** virheenkäsittelyä ja käyttäjäpalautetta koko sovelluksessa
- **Testannut** koko sovelluksen työnkulun käyttäjän syötteestä tekoälyn vastaukseen

### Keskeiset oppimistulokset

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

Tämä projekti on johdattanut sinut tekoälypohjaisten sovellusten rakentamisen perusteisiin, mikä edustaa web-kehityksen tulevaisuutta. Nyt ymmärrät, kuinka tekoälytoimintoja voidaan integroida perinteisiin web-sovelluksiin, luoden älykkäitä ja reagoivia käyttäjäkokemuksia.

### Ammatilliset sovellukset

Tässä oppitunnissa kehittämäsi taidot ovat suoraan sovellettavissa modernin ohjelmistokehityksen urapolkuun:

- **Full-stack web-kehitys** modernien kehysten ja API:en avulla
- **Tekoälyn integrointi** web-sovelluksiin ja mobiilisovelluksiin
- **API-suunnittelu ja kehitys** mikropalveluarkkitehtuureille
- **Käyttöliittymän kehitys** keskittyen saavutettavuuteen ja responsiiviseen suunnitteluun

- **Porttien uudelleenohjaus** sovellusten testaamiseen

**Mitä Codespaces tarjoaa:**
- **Poistaa** paikallisen ympäristön asennus- ja konfigurointiongelmat
- **Tarjoaa** yhtenäisen kehitysympäristön eri laitteilla
- **Sisältää** valmiiksi konfiguroidut työkalut ja laajennukset verkkokehitykseen
- **Mahdollistaa** saumattoman integraation GitHubin kanssa versionhallintaa ja yhteistyötä varten

> 🚀 **Vinkki**: Codespaces sopii erinomaisesti tekoälysovellusten oppimiseen ja prototypointiin, koska se hoitaa automaattisesti kaikki monimutkaiset ympäristön asetukset, jolloin voit keskittyä rakentamiseen ja oppimiseen sen sijaan, että joutuisit ratkaisemaan konfigurointiongelmia.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.