<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-08T08:45:48+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "et"
}
-->
# Loo juturobot AI abil

Mäletad, kuidas Star Trekis meeskond mõnuledes laeva arvutiga vestles, esitas keerukaid küsimusi ja sai läbimõeldud vastuseid? See, mis näis 1960ndatel puhtalt ulmena, on nüüd midagi, mida saad ehitada veebitehnoloogiate abil, mida sa juba tunned.

Selles õppetükis loome AI-põhise juturoboti kasutades HTML-i, CSS-i, JavaScripti ja mõnda tagapõhja integratsiooni. Sa avastad, kuidas samad oskused, mida oled õppinud, suudavad ühendada võimsate AI-teenustega, mis mõistavad konteksti ja genereerivad sisukaid vastuseid.

Kujuta AI-d kui pääsu ülisuuresse raamatukokku, mis mitte ainult ei leia infot, vaid oskab selle ka sünteesida kokkuhoidvatesse ja sinu konkreetsetele küsimustele kohandatud vastustesse. Selle asemel, et otsida läbi tuhandeid lehekülgi, saad otseseid, kontekstuaalseid vastuseid.

Integratsioon toimub tuttavate veebitehnoloogiate koostöös. HTML loob juturoboti liidese, CSS haldab visuaalset kujundust, JavaScript juhib kasutajategevusi ja tagapõhja API ühendab kõik AI-teenustega. See on sarnane eri orkestriosade koostööga sümfoonia loomiseks.

Me ehitameki silda loomuliku inimkommunikatsiooni ja masinatöötluse vahel. Sa õpid nii AI-teenuse integratsiooni tehnilist rakendamist kui ka disainimustreid, mis muudavad suhtluse intuitiivseks.

Selle õppetüki lõpuks tundub AI integratsioon vähem müstilisena ja pigem kui veel üks API, millega saad töötada. Sa mõistad põhiprintsiipe, mis juhivad selliseid rakendusi nagu ChatGPT ja Claude, kasutades samu veebiarenduse põhimõtteid, mida oled õppinud.

## ⚡ Mida saad teha järgmise 5 minutiga

**Kiire algus hõivatud arendajatele**

```mermaid
flowchart LR
    A[⚡ 5 minutit] --> B[Hangi GitHubi token]
    B --> C[Katseta AI mänguväljakut]
    C --> D[Kopeeri Python kood]
    D --> E[Näe AI vastuseid]
```
- **1. minut**: Külasta [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) ja loo isiklik ligipääsuluba
- **2. minut**: Testi AI-ga suhtlust otse mänguväljaku liideses
- **3. minut**: Klõpsa vahekaardil "Code" ja kopeeri Python'i koodilõik
- **4. minut**: Käivita kood lokaalselt oma tokeniga: `GITHUB_TOKEN=your_token python test.py`
- **5. minut**: Vaata, kuidas su esimene AI vastus genereeritakse sinu enda koodist

**Kiirtesti kood**:
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

**Miks see oluline on**: 5 minutiga koged programmeeritava AI suhtluse võlu. See on fundamentaalne ehitusplokk, mis töötab igas AI-rakenduses, mida kasutad.

Sinu lõpetatud projekt näeb välja selline:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/et/screenshot.0a1ee0d123df681b.png)

## 🗺️ Sinu õpiteek läbi AI-rakenduste arenduse

```mermaid
journey
    title Veebiarendusest AI integratsioonini
    section AI alusteadmiste mõistmine
      Avastage generatiivse AI mõisted: 4: You
      Uurige GitHubi mudelite platvormi: 6: You
      Valdage AI parameetrid ja promptid: 8: You
    section Backend integratsioon
      Looge Python API server: 5: You
      Rakendage AI funktsioonikõned: 7: You
      Haldage asünkroonseid operatsioone: 8: You
    section Frontend arendus
      Looge kaasaegne vestlusliides: 6: You
      Valdage reaalajas suhtlus: 8: You
      Looge reageeriv kasutajakogemus: 9: You
    section Professionaalne rakendus
      Juhtige täielik AI süsteem: 7: You
      Optimeerige jõudlusmustreid: 8: You
      Looge tootmiskõlblik rakendus: 9: You
```
**Sinu sihtkoht**: Selle õppetüki lõpuks oled loonud täieliku AI-põhise rakenduse, kasutades samu tehnoloogiaid ja mustreid, mis juhivad kaasaegseid AI abimehi nagu ChatGPT, Claude ja Google Bard.

## AI mõistmine: salapärasest valdamiseni

Enne koodi sukeldumist mõistame, millega me tegelikult tegeleme. Kui oled varasemalt API-sid kasutanud, tead põhimustris: saada päring, saa vastus.

AI API-d järgivad sarnast struktuuri, kuid selle asemel, et andmebaasist valmis info kätte saada, genereerivad need uusi vastuseid tohutu hulga tekstide põhjal õpitud mustrite põhjal. Mõtle sellele nagu erinevus raamatukataloogi ja teadliku raamatukoguhoidja vahel, kes suudab sünteesida infot mitmest allikast.

### Mis on tegelikult "Generatiivne AI"?

Mõtle, kuidas Rosetta kivi võimaldas teadlastel mõista egiptuse hieroglüüfe, leides mustreid tuntud ja tundmatute keelte vahel. AI mudelid töötavad sarnaselt – nad leevad suurtest tekstikogumitest mustrid, et mõista, kuidas keel toimib, ja kasutavad neid mustreid uute küsimuste sobivate vastuste genereerimiseks.

**Selgitan lihtsustatult:**
- **Tavapärane andmebaas**: Nagu sünnitunnistuse küsimine – saad alati täpselt sama dokumendi
- **Otsingumootor**: Nagu raamatukoguhoidjalt raamatute leidmine kohta kassid – näidatakse sulle olemasolevat
- **Generatiivne AI**: Nagu teadlik sõber kassidest – räägib sulle huvitavaid asju oma sõnadega, kohandatud sinu infovajadusele

```mermaid
graph LR
    A[Teie Küsimus] --> B[AI Mudel]
    B --> C[Mustri Tuvastus]
    C --> D[Sisu Loomine]
    D --> E[Kontekstuaalne Vastus]
    
    F[Koolitusandmed<br/>Raamatud, Artiklid, Veeb] --> B
```
### Kuidas AI mudelid õpivad (lihtsustatud)

AI mudelid õpivad tohututest tekstikogumitest, mis sisaldavad raamatuid, artikleid ja vestlusi. Selle protsessi kaudu tuvastavad nad mustrid:
- Kuidas mõtted on kirjalikus suhtluses üles ehitatud
- Millised sõnad sageli koos esinevad
- Kuidas vestlused tavaliselt kulgevad
- Konteksti erinevused ametliku ja mitteametliku suhtluse vahel

**See on sarnane arheoloogidele, kes dekodeerivad iidseid keeli**: nad analüüsivad tuhandeid näiteid, et mõista grammatikat, sõnavara ja kultuurikonteksti, lõpuks saavad uut teksti nende mustrite abil tõlgendada.

### Miks GitHub Models?

Kasutame GitHub Modelsid praktilisel põhjusel – see annab meile juurdepääsu ettevõttetasemel AI-le ilma, et peaksime oma AI infrastruktuuri üles seadma (usu mind, seda sa praegu ei taha!). Mõtle sellele kui ilmateenuse API kasutamisele, mitte ilm ennustamisele, pannes kõikjale ilmajaamad üles.

See on põhimõtteliselt "AI-teenusena" ja parim on see, et alustamine on tasuta, nii et võid muretult katsetada.

```mermaid
graph LR
    A[Esiosa vestluse kasutajaliides] --> B[Teie tagapõhja API]
    B --> C[GitHubi mudelite API]
    C --> D[Tehisintellekti mudelite töötlemine]
    D --> C
    C --> B
    B --> A
```
Kasutame GitHub Modelsid oma tagapõhja integratsiooniks, mis pakub professionaalse tasemega AI võimekust arendajale sõbraliku liidese kaudu. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) on testikeskkond, kus saad katsetada erinevaid AI mudeleid ja mõista nende võimeid enne koodis rakendamist.

## 🧠 AI rakenduste arenduse ökosüsteem

```mermaid
mindmap
  root((AI Arendus))
    Understanding AI
      Generatiivsed Mudelid
        Musteri Tuvastamine
        Sisu Loomine
        Konteksti Mõistmine
        Vastuse Süntees
      AI Parameetrid
        Temperatuuri Kontroll
        Tokeni Piirid
        Top-p Filtreerimine
        Süsteemi Käivitused
    Backend Architecture
      API Integratsioon
        GitHub Mudelid
        Autentimine
        Päringu Töötlemine
        Vigade Haldus
      Python Infrastruktuur
        FastAPI Raamistik
        Asünkroonsed Operatsioonid
        Keskkonna Turvalisus
        CORS Konfiguratsioon
    Frontend Experience
      Vestlusliides
        Reaalajas Uuendused
        Sõnumite Ajalugu
        Kasutaja Tagasiside
        Laadimise Oleku
      Moodne Veebi Tehnoloogia
        ES6 Klassid
        Asünkroonne/Ootamine
        DOM Manipuleerimine
        Sündmuste Haldus
    Professional Patterns
      Turvalisuse Parimad Tavad
        Tokenite Halduse
        Sisendi Kontroll
        XSS Ennetamine
        Vigade Piirid
      Tootmisvalmidus
        Jõudluse Optimeerimine
        Reageeriv Disain
        Juurdepääsetavus
        Testimise Strateegiad
```
**Põhialus**: AI rakenduste arendus ühendab traditsioonilised veebiarenduse oskused AI teenuste integratsiooniga, luues nutikaid rakendusi, mis mõistavad loomulikult kasutajate vajadusi.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/et/playground.d2b927122224ff8f.png)

**Mida teeb mänguväljaku nii kasulikuks:**
- **Proovi** erinevaid AI mudeleid nagu GPT-4o-mini, Claude jpt (kõik tasuta!)
- **Testeeri** oma ideid ja käske enne kodeerimist
- **Saa** kasutamiseks valmis koodinäited oma lemmikprogrammeerimiskeeles
- **Muuda** seadeid nagu loomingulisuse tase ja vastuse pikkus, et näha mõju väljundile

Kui oled natuke mänginud, klõpsa "Code" vahekaardile ja vali programmeerimiskeel, et saada vajaminev kood.

![Playground choice showing code generation options for different programming languages](../../../translated_images/et/playground-choice.1d23ba7d407f4758.png)

## Python tagapõhja integratsiooni seadistamine

Rakendame nüüd AI integratsiooni Pythoniga. Python sobib hästi AI-rakendusteks tänu lihtsale süntaksile ja võimsatele teekidele. Alustame GitHub Models mänguväljaku koodist ja seejärel refaktoriseerime selle taaskasutatavaks, tootmiseks valmis funktsiooniks.

### Põhiteostuse mõistmine

Kui võtad Python-koodi mänguväljaku pealt, saad miskit sarnast. Ära muretse, kui see alguses suur tundub – vaatame tükkhaaval üle:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Mudeliga autentimiseks peate looma isikliku juurdepääsu märgi (PAT) oma GitHubi seadistustes.
# Looge oma PAT märgis järgides juhiseid siin: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Selles koodis toimub:**
- **Impordime** vajalikud tööriistad: `os` keskkonnamuutujate lugemiseks ja `OpenAI` AIga suhtlemiseks
- **Seadistame** OpenAI kliendi, mis pöördub GitHubi AI serverite poole, mitte otse OpenAI poole
- **Autendime** spetsiaalse GitHubi tokeniga (jh, sellest kohe veel!)
- **Struktureerime** vestlust erinevate "rollidega" – nagu stseeni seadistamine näidendi jaoks
- **Saadame** AI-le päringu mõnede täpistamise parameetritega
- **Eraldame** tegeliku vastuse teksti kõikide tagastatud andmete seast

### Sõnumite rollide mõistmine: AI vestluste raamistik

AI vestlustes kasutatakse kindlat struktuuri erinevate "rollidega", millel on kindel eesmärk:

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

**Mõtle sellele kui näidendikõrvaldajale:**
- **Süsteemne roll**: nagu lavajuhis näitlejale – ütleb AI-le, kuidas käituda, milline isiksus olla ja kuidas vastata
- **Kasutaja roll**: teade või küsimus rakendust kasutavalt inimeselt
- **Abistaja roll**: AI vastus (seda sa ei saada, aga see on vestluse ajaloos)

**Reaalne näide**: Kujuta ette, et tutvustad sõpra peol:
- **Süsteemsõnum**: "See on mu sõber Sarah, ta on arst ja seletab meditsiinikontseptsioone lihtsalt"
- **Kasutajasõnum**: "Kas sa seletad, kuidas vaktsiinid töötavad?"
- **Abistaja vastus**: Sarah vastab sõbraliku arstina, mitte juristi või kokana

### AI parameetrite mõistmine: vastuste täpsustamine

Numbrilised parameetrid AI API kõnedes juhivad, kuidas mudel vastuseid genereerib. Need seadistused lubavad muuta AI käitumist erinevate ülesannete jaoks:

#### Temperatuur (0.0 kuni 2.0): loomingulisuse nupp

**Mida teeb**: juhib, kui loomingulised või ettenatustatavad AI vastused on.

**Mõtle sellele nagu jazzmuusiku improvisatsioonitasemele:**
- **Temperatuur = 0.1**: mängib täpselt sama meloodiat iga kord (üliedastatav)
- **Temperatuur = 0.7**: lisab mõistlikke variatsioone, olles endiselt äratuntav (tasakaalus loomingulisus)
- **Temperatuur = 1.5**: täismeelne eksperimentaalne jazz ootamatute pöördega (väga ettearvamatu)

```python
# Väga ennustatavad vastused (head faktipõhiste küsimuste jaoks)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Ükskõik millal ütleb peaaegu alati "4"
)

# Loomingulised vastused (head ideede genereerimiseks)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Loob unikaalseid, ootamatuid lugusid
)
```

#### Max Tokens (1 kuni 4096+): vastuse pikkuse piiraja

**Mida teeb**: seab piiri, kui pikk vastus võib olla.

**Mõtle tokenitele kui umbkaudsetele sõnadele** (umbes 1 token = 0,75 sõna inglise keeles):
- **max_tokens=50**: lühike ja armas (nagu SMS)
- **max_tokens=500**: kena lõik või kaks
- **max_tokens=2000**: detailne seletus koos näidetega

```python
# Lühikesed, põhjendatud vastused
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Sunnib esitama lühikest seletust
)

# Üksikasjalikud, põhjalikud vastused
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Võimaldab üksikasjalikke seletusi koos näidetega
)
```

#### Top_p (0.0 kuni 1.0): keskendumise parameeter

**Mida teeb**: juhib, kui keskendunud AI jääb tõenäolisemate vastuste peale.

**Kujuta ette AI-l tohutu sõnavara, kus sõnad on järjestatud tõenäosuse järgi:**
- **top_p=0.1**: arvestab ainult kõige tõenäolisemate 10% sõnadega (väga keskendunud)
- **top_p=0.9**: arvestab 90% võimalikest sõnadest (loovam)
- **top_p=1.0**: arvestab kõike (max mitmekesisus)

**Näiteks**: Kui küsid "Tavaliselt on taevas..."
- **Madala top_p-ga**: ütleb peaaegu kindlasti "sinine"
- **Kõrge top_p-ga**: võib öelda "sinine", "pilvine", "kõrbeline", "muutuv", "ilus" jne

### Kõike koos kasutamine: parameetrite kombinatsioonid erinevatele kasutusjuhtudele

```python
# Faktipõhiste, järjepidevate vastuste jaoks (näiteks dokumentatsioonibot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Loova kirjutamise abi jaoks
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Vestluslikeks, abistavateks vastusteks (tasakaalustatud)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title AI Parameetri Optimeerimise Maatriks
    x-axis Madal Loovus --> Kõrge Loovus
    y-axis Lühike Vastus --> Pikk Vastus
    
    quadrant-1 Loov Sisuloome
    quadrant-2 Detailne Analüüs
    quadrant-3 Kiired Faktid
    quadrant-4 Vestlus-Tehisintellekt
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Miks need parameetrid olulised on**: eri rakendused vajavad erinevaid vastuseid. Klienditeeninduse bott peaks olema järjekindel ja faktiline (madal temperatuur), samas kui loominguline kirjutamisabi peaks olema fantaasiarikas ja mitmekesine (kõrge temperatuur). Nende parameetrite mõistmine annab sulle kontrolli AI isiksuse ja vastuse stiili üle.
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

**Selle täiustatud funktsiooni mõistmine:**
- **Võtab vastu** kaks parameetrit: kasutaja käsu ja valikulise süsteemsõnumi
- **Tagab** vaikimisi süsteemsõnumi üldiseks assistendi käitumiseks
- **Kasutab** korrektseid Python tüübimärkusi parema dokumentatsiooni jaoks
- **Sisaldab** üksikasjalikku docstringi, mis kirjeldab funktsiooni eesmärki ja parameetreid
- **Tagastab** ainult vastuse sisu, tehes selle lihtsaks meie veeb API-s kasutada
- **Hoidab** samu mudeli parameetreid järjepidevaks AI käitumiseks

### Süsteemsõnumite maagia: AI isiksuse programmeerimine

Kui parameetrid juhivad, kuidas AI mõtleb, siis süsteemsõnumid juhivad, kes AI arvab end olevat. See on ausalt üks lahedamaid osi AI-ga töötamisel – sa annad AI-le täieliku isiksuse, ekspertiisi taseme ja suhtlusstiili.

**Mõtle süsteemsõnumitele kui näitlejate valikule erinevate rollide jaoks**: ühe asemel ühetaolise assistendi loomiseks saad luua spetsialiste erinevate olukordade jaoks. Vajad kannatlikku õpetajat? Loomingulist ideede partnerit? Asjalikku ärinõustajat? Lihtsalt muuda süsteemsõnumit!

#### Miks süsteemsõnumid on nii võimsad

Huvitav osa on see, et AI mudelid on treenitud lugematute vestluste peal, kus inimesed võtavad erinevaid rolle ja ekspertteadmiste tasemeid. Kui annad AI-le kindla rolli, on see nagu lüliti, mis aktiveerib kõik need õpitud mustrid.

**See on nagu meetodnäitlemine AI jaoks**: ütle näitlejale "sa oled tark vanaprofessor" ja vaata, kuidas ta automaatselt muudab kehaasendit, sõnavara ja maneere. AI teeb sõnamustritega midagi sarnast.

#### Tõhusate süsteemsõnumite koostamine: kunst ja teadus

**Hea süsteemsõnumi anatoomia:**
1. **Roll/isikus**: Kes AI on?
2. **Ekspertiis**: Mida ta teab?
3. **Suhtlusstiil**: Kuidas ta räägib?
4. **Spetsiifilised juhised**: Millele ta peaks tähelepanu pöörama?

```python
# ❌ Ebaselge süsteemi juhis
"You are helpful."

# ✅ Üksikasjalik, tõhus süsteemi juhis
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Süsteemsõnumite näited kontekstiga

Vaatame, kuidas erinevad süsteemsõnumid loovad täiesti erinevad AI isiksused:

```python
# Näide 1: Kannatlik õpetaja
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Näide 2: Loov koostööpartner
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Näide 3: Strateegiline ärinõustaja
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Süsteemsõnumite testimine praktikas

Testime sama küsimust erinevate süsteemsõnumitega, et näha tohutuid erinevusi:

**Küsimus**: "Kuidas käsitleda kasutaja autentimist oma veebirakenduses?"

```python
# Õpetaja juhendiga:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Tavaline vastus: "Väga hea küsimus! Jagame autentimise lihtsateks sammudeks.
# Mõtle sellele nagu ööklubi turvamees, kes kontrollib isikut tõendavaid dokumente..."

# Ärinõuande juhendiga:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Tavaline vastus: "Strateegilisest vaatenurgast on autentimine oluline kasutajate
# usalduse ja regulatiivse vastavuse tagamiseks. Lubage mul esitada raamistik, mis võtab arvesse turvalisust,
# kasutajakogemust ja skaleeritavust..."
```

#### Täiustatud süsteemsõnumite võtted

**1. Konteksti andmine**: Anna AI-le taustainfot
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Väljundi Vormindamine**: Öelge tehisintellektile, kuidas vastuseid struktureerida  
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
  
**3. Piirangute Määramine**: Määrake, mida tehisintellekt EI TOHI teha  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### Miks see on teie vestlusabilise jaoks oluline

Süsteemipromptide mõistmine annab teile uskumatult palju võimu spetsiaalsete tehisintellekti abiliste loomiseks:  
- **Klienditeeninduse bot**: abivalmis, kannatlik, poliitikateadlik  
- **Õpetustugi**: julgustav, samm-sammuline, kontrollib arusaamist  
- **Loov partner**: loominguline, arendab ideid, küsib "mis siis kui?"  
- **Tehniline ekspert**: täpne, üksikasjalik, turvateadlik  

**Oluline järeldus**: Te ei kutsu lihtsalt tehisintellekti API-d – te loote kohandatud tehisintellekti isiksuse, mis teenib teie konkreetset kasutusjuhtu. Just see teeb tänapäevased tehisintellekti rakendused isikupäraseks ja kasulikuks, mitte üldiseks.  

### 🎯 Pedagoogiline Kontroll: Tehisintellekti isiksuse programmeerimine

**Peatu ja mõtle**: Sa õpid just praegu, kuidas programmeerida tehisintellekti isiksusi süsteemipromptide kaudu. See on tänapäevase tehisintellekti arenduse põhioskust.  

**Kiire enesehindamine**:  
- Kas oskad selgitada, kuidas süsteemipromptid erinevad tavakasutaja sõnumitest?  
- Mis vahe on temperatuuril ja top_p parameetritel?  
- Kuidas looksid süsteemiprompti konkreetseks kasutusjuhuks (näiteks koodiõpetajale)?  

**Tõeline maailm**: Süsteemipromptide tehnikad, mida õppisid, kasutavad kõik suuremad tehisintellekti rakendused – alates GitHub Copiloti kodeerimisabist kuni ChatGPT vestlusliideseni. Sa valdad samu mustreid, mida kasutavad AI tootetiimid suurtel tehnoloogiaettevõtetel.  

**Väljakutse küsimus**: Kuidas võiksid kujundada erinevaid AI isiksusi erinevate kasutajate jaoks (algaja vs ekspert)? Kuidas saaks sama põhjalik AI mudel läbi promptide inseneritöö teenindada erinevaid sihtrühmi?

## Veebirakenduse API loomine FastAPI-ga: Teie võimas AI suhtluskeskus

Loome nüüd tagapoe, mis ühendab teie kasutajaliidese AI teenustega. Kasutame FastAPI-t, moodsat Pythoni raamistiku, mis sobib hästi AI rakenduste API-de ehitamiseks.  

FastAPI-l on selle projekti jaoks mitu eelist: sisseehitatud asünkroonne tugi samaaegsete päringute töötlemiseks, automaatne API dokumentatsiooni genereerimine ning suurepärane jõudlus. Teie FastAPI server toimib vahendajana, kes võtab vastu päringuid kasutajaliidesest, suhtleb AI teenustega ja tagastab vormindatud vastused.  

### Miks valida FastAPI AI rakenduste jaoks?

Võib-olla mõtlete: "Kas ma ei võiks lihtsalt kutsuda AI otse oma esiplaani JavaScriptist?" või "Miks veel FastAPI, mitte Flask või Django?" Häid küsimusi!  

**Siin on, miks FastAPI sobib meie eesmärkidele ideaalselt:**  
- **Vaikimisi asünkroonne**: Saab korraga mitut AI päringut hallata ilma kinni jäämata  
- **Automaatne dokumentatsioon**: Külasta `/docs` ja saad tasuta ilusa, interaktiivse API dokumentatsiooni lehe  
- **Sisseehitatud valideerimine**: Leiab vead enne, kui need probleeme põhjustavad  
- **Väga kiire**: Üks kiiremaid Pythoni raamistikke üldse  
- **Moodsad Python omadused**: Kasutab kõiki uusimaid ja parimaid Pythoni funktsioone  

**Ja miks üldse vajame tagapõhja:**  

**Turvalisus**: Teie AI API võti on nagu parool – kui paned selle kasutajaliidese JavaScripti, võib see igaüks, kes vaadata teie veebilehe lähtekoodi, varastada ja kasutada teie AI krediite. Tagapõhi hoiab tundlikud volitused turvaliselt.  

**Piirangud ja kontroll**: Tagapõhi võimaldab piirata, kui tihti kasutajad saavad päringuid teha, rakendada kasutajatõendust ja lisada logimist kasutuse jälgimiseks.  

**Andmetöötlus**: Võite soovida salvestada vestlusi, filtreerida sobimatut sisu või kombineerida mitut AI teenust. Seda loogikat haldab tagapõhi.  

**Arhitektuur meenutab kliendi-server mudelit:**  
- **Frontend**: Kasutajaliidese kiht suhtlemiseks  
- **Backend API**: Päringute töötlemise ja marsruutimise kiht  
- **AI teenus**: Väline arvutus- ja vastuse genereerimine  
- **Keskkonnamuutujad**: Turvaline seadistuse ja volituste hoiukoht  

### Päringu ja vastuse voo mõistmine

Jälgime, mis juhtub, kui kasutaja saadab sõnumi:  

```mermaid
sequenceDiagram
    participant User as 👤 Kasutaja
    participant Frontend as 🌐 Esikliend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 Tehisintellekti teenus
    
    User->>Frontend: Kirjutab "Tere, tehisintellekt!"
    Frontend->>API: POST /hello {"message": "Tere, tehisintellekt!"}
    Note over API: Kontrollib taotlust<br/>Lisab süsteemi prompti
    API->>AI: Saadab vormindatud taotluse
    AI->>API: Tagastab tehisintellekti vastuse
    Note over API: Töötleb vastust<br/>Logib vestluse
    API->>Frontend: {"response": "Tere! Kuidas saan aidata?"}
    Frontend->>User: Kuvab tehisintellekti sõnumi
```  
**Iga sammu mõistmine:**  
1. **Kasutajaliides**: Inimene kirjutab vestlusaknas  
2. **Frontend töötlemine**: JavaScript tabab sisendi ja vormindab selle JSON-iks  
3. **API valideerimine**: FastAPI kontrollib automaatselt päringu vastavust Pydantic mudelitega  
4. **AI integratsioon**: Tagapõhi lisab konteksti (süsteemiprompti) ja kutsub AI teenust  
5. **Vastuse töötlemine**: API võtab vastu AI vastuse ja võib seda vajadusel muuta  
6. **Frontend kuvamine**: JavaScript kuvab vastuse vestlusaknas  

### API Arhitektuuri mõistmine

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Tere AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API päring
    GitHub Models->>AI Function: AI vastus
    AI Function->>FastAPI: vastuse tekst
    FastAPI->>Frontend: {"response": "Tere! Kuidas ma saan aidata?"}
```  
```mermaid
flowchart TD
    A[Kasutaja Sisend] --> B[Esikülje Kontroll]
    B --> C[HTTP POST Päring]
    C --> D[FastAPI Marsruuter]
    D --> E[Pydantic Kontroll]
    E --> F[AI Funktsiooni Kutsumine]
    F --> G[GitHub Mudelite API]
    G --> H[Vastuse Töötlemine]
    H --> I[JSON Vastus]
    I --> J[Esikülje Uuendus]
    
    subgraph "Turvakihi"
        K[CORS Vahemälu]
        L[Keskkonna Muutujad]
        M[Vigade Käitlemine]
    end
    
    D --> K
    F --> L
    H --> M
```  
### FastAPI rakenduse loomine

Loome oma API sammuhaaval. Loo fail `api.py` järgmise FastAPI koodiga:  

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Logimise seadistamine
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Loo FastAPI rakendus
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# CORS-i seadistamine
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Seadista sobivalt tootmiseks
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantici mudelid päringu/vastuse valideerimiseks
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
        # Sõnumi väljavõtmine ja valideerimine
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Kutsu AI teenust (märkus: paremaks jõudluseks peaks call_llm olema asünkroonne)
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
  
**FastAPI rakenduse mõistmine:**  
- **Impordib** FastAPI moodsate veebiraamistiku funktsioonide ja Pydantici andmete valideerimiseks  
- **Loomine** automaatne API dokumentatsioon (kättesaadav aadressil `/docs`, kui server töötab)  
- **Lubab** CORS vahendustarkvara, et lubada päringud erinevatest päritoludest frontendist  
- **Määratleb** Pydantic mudelid automaatseks päringu/vastuse valideerimiseks ja dokumentatsiooniks  
- **Kasutab** asünkroonseid lõpp-punkte paremaks jõudluseks samaaegsete päringute korral  
- **Rakendab** sobivaid HTTP staatuskoode ja veakäsitlust HTTPException abil  
- **Sisaldab** struktureeritud logimist jälgimiseks ja silumiseks  
- **Pakkuge** tervisekontrolli lõpp-punkti teenuse oleku jälgimiseks  

**Olulised FastAPI eelised võrreldes traditsiooniliste raamistikudega:**  
- **Automaatne valideerimine**: Pydantic mudelid tagavad andmete terviklikkuse enne töötlemist  
- **Interaktiivne dokumentatsioon**: Külasta `/docs`, et saada automaatselt genereeritud ja testitav API dokumentatsioon  
- **Tüübiturvalisus**: Pythoni tüüp vihjed vähendavad run-time vigu ja parandavad koodi kvaliteeti  
- **Asünkroonne tugi**: Töötle mitut AI päringut samaaegselt blokeerimata  
- **Jõudlus**: Märkimisväärselt kiirem päringute töötlemine reaalajas rakendustes  

### CORS mõistmine: Veebimaailma turvamees

CORS (Cross-Origin Resource Sharing) on nagu turvamees hoones, kes kontrollib, kas külalistel on lubatud sisse pääseda. Mõistame, miks see on oluline ja kuidas see teie rakendust mõjutab.  

#### Mis on CORS ja miks see olemas on?

**Probleem**: Kujutage ette, et iga veebileht võiks teie nimel teha päringuid teie panga veebisaidile ilma teie loata. See oleks turvanõrkus! Brauserid takistavad seda vaikimisi "Sama päritolu poliitika" kaudu.  

**Sama päritolu poliitika**: Brauserid lubavad veebilehtedel teha päringuid ainult samasse domeeni, porti ja protokolli, kust leht laeti.  

**Tõeline analoogia**: See on nagu kortermaja valve – ainult elanikud (sama päritolu) pääsevad vaikimisi sisse. Kui soovite sõbrale (erinev päritolu) sissepääsu lubada, peate turvamehele seda selgelt ütlema.  

#### CORS teie arenduskeskkonnas

Arenduse ajal jooksevad teie frontend ja backend erinevatel portidel:  
- Frontend: `http://localhost:3000` (või file://, kui HTML otse avate)  
- Backend: `http://localhost:5000`  

Neid käsitletakse kui "erinevaid päritolu", kuigi nad on samal arvutil!  

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # See ütleb brauseritele: "Teistel päritoludel on selle API-ga päringute tegemine lubatud"
```
  
**Mida CORS konfiguratsioon praktikas teeb:**  
- **Lisab** spetsiaalsed HTTP päised API vastustes, mis ütlevad brauserile, et "see rist-päritolu päring on lubatud"  
- **Töötleb** "preflight" päringuid (brauserid kontrollivad mõnikord enne päringut õigusi)  
- **Vältab** hirmuäratavat CORS poliitika poolt blokeeritud viga brauseri konsoolis  

#### CORS turvalisus: arendus vs tootmine

```python
# 🚨 Arendus: Lubab KÕIKI päritolu (mugav, kuid ebaturvaline)
CORS(app)

# ✅ Tootmine: Lubage ainult oma konkreetne eesliidese domeen
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Täiustatud: Erinevad päritolud erinevate keskkondade jaoks
if app.debug:  # Arendusrežiim
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Tootmisrežiim
    CORS(app, origins=["https://yourdomain.com"])
```
  
**Miks see oluline on**: Arenduses on `CORS(app)` nagu jätta esiuks lukustamata – mugav, aga mitte turvaline. Tootmises tahate täpselt määrata, millised veebisaidid tohtivad teie API-ga suhelda.  

#### Levinud CORS stsenaariumid ja lahendused

| Stsenaarium         | Probleem                     | Lahendus                       |
|---------------------|------------------------------|-------------------------------|
| **Kohalik arendus** | Frontend ei saa connecti backendile | Lisa CORSMiddleware FastAPIsse  |
| **GitHub Pages + Heroku** | Deployitud frontend ei jõua API-ni | Lisa oma GitHub lehe URL CORS päritoludesse |
| **Kohandatud domeen** | CORS vead tootmises        | Uuenda CORS päritolud vastavalt domeenile |
| **Mobiilirakendus** | Rakendus ei saa kätte veebirakendust API | Lisa rakenduse domeen või kasuta `*` ettevaatlikult |

**Näpunäide**: Võite kontrollida CORS päiseid brauseri Arendaja Tööriistades vahekaardil Võrk. Otsige päiseid nagu `Access-Control-Allow-Origin` vastuste seast.  

### Veakäsitlus ja valideerimine

Vaadake, kuidas meie API sisaldab korralikku vigade käsitlust:  

```python
# Kontrolli, et oleme sõnumi kätte saanud
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Põhilised valideerimise põhimõtted:**  
- **Kontrollib** nõutud välju enne päringu töötlemist  
- **Tagastab** tähenduslikud veateated JSON formaadis  
- **Kasutab** sobivaid HTTP staatuskoode (400 halbade päringute puhul)  
- **Pakub** selget tagasisidet, et aidata frontend arendajatel probleeme siluda  

## Tagapõhja seadistamine ja käivitamine

Nüüd, kui meil on tehisintellekti integratsioon ja FastAPI server valmis, käivitame kõik. Seadistusprotsess hõlmab Python sõltuvuste paigaldamist, keskkonnamuutujate seadistamist ja arendusserveri käivitamist.  

### Python keskkonna seadistamine

Seadistame teie Python arenduskeskkonna. Virtuaalsed keskkonnad on nagu Manhattan projekti kompartmentide lähenemine – igale projektile oma isoleeritud ruum, milles konkreetsete tööriistade ja sõltuvustega, et vältida kokkupõrkeid erinevate projektide vahel.  

```bash
# Liigu oma backend kausta
cd backend

# Loo virtuaalne keskkond (nagu puhta ruumi loomine oma projekti jaoks)
python -m venv venv

# Aktiveeri see (Linux/Mac)
source ./venv/bin/activate

# Windowsis kasuta:
# venv\Scripts\activate

# Paigalda vajalikud asjad
pip install openai fastapi uvicorn python-dotenv
```
  
**Mida me just tegime:**  
- **Loomine** väike eraldatud Python mull, kuhu saab paigaldada pakette mõjutamata teisi projekte  
- **Aktiveerimine**, et terminal teaks, et tuleb kasutada just seda keskkonda  
- **Paigaldasime** vajalikud paketid: OpenAI AI jaoks, FastAPI meie veebiraamistikuks, Uvicorn selle käivitamiseks ja python-dotenv turvaliseks salajaste haldamiseks  

**Põhilised sõltuvused ja nende selgitused:**  
- **FastAPI**: moodne, kiire veebiraamistik automaatse API dokumentatsiooniga  
- **Uvicorn**: ülikiire ASGI server FastAPI rakenduste jooksutamiseks  
- **OpenAI**: ametlik teek GitHubi mudelitele ja OpenAI API-le  
- **python-dotenv**: turvaline keskkonnamuutujate laadimine `.env` failidest  

### Keskkonna seadistus: saladuste turvaline hoidmine

Enne API-d on aeg rääkida ühest tähtsaimast veebiarenduse õppetunnist: kuidas hoida oma saladusi tõesti saladustena. Keskkonnamuutujad on nagu turvakapp, millele ligi pääseb ainult teie rakendus.  

#### Mis on keskkonnamuutujad?

**Mõelge keskkonnamuutujatele kui hoiusekastile** – te panete sinna väärtuslikud asjad ja ainult teie (ja teie rakendus) omab võtit neid kätte saada. Selle asemel, et kirjutada tundlikku teavet koodi sisse (mida kõik võiksid näha), salvestate selle turvaliselt keskkonda.  

**Siin on vahe:**  
- **Vale viis**: Kirjutada parool kleepsule ja panna see monitorile  
- **Õige viis**: Hoida parool turvalises paroolihalduris, kuhu ainult teie pääsete ligi  

#### Miks keskkonnamuutujad on olulised

```python
# 🚨 ÄRGE kunagi tehke seda - API võti on kõigile nähtav
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Keegi võib selle varastada!
    base_url="https://models.github.ai/inference"
)

# ✅ TEE NII - API võti hoitakse turvaliselt
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Ainult teie rakendus saab sellele ligipääsu
    base_url="https://models.github.ai/inference"
)
```
  
**Mida juhtub, kui kõvasti koodi sisse kirjutate saladusi:**  
1. **Versioonikontrolli lekked**: Kõik, kes pääsevad teie Git hoidla juurde, näevad teie API võtit  
2. **Avalikud hoidlad**: Kui pushite GitHubi, näevad kogu interneti kasutajad teie võtit  
3. **Meeskonna jagamine**: Teised arendajad saavad teie isikliku API võtme kätte  
4. **Turvarikkumised**: Kui keegi varastab võti, saab ta kasutada teie AI krediite  

#### Oma keskkonna faili loomine

Loo `.env` fail oma tagapoe kausta. Sellesse faili salvestatakse teie saladused kohapeal:  

```bash
# .env fail - See EI TOHI MITTE KUNAGI Git'i salvestada
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**.env faili mõistmine:**  
- **Iga rida** sisaldab ühe salajase võtme vormingus `VÕTI=väärtus`  
- **Ei ole tühikuid** võrdusmärgi ümber  
- **Ei ole jutumärke** väärtuste ümber (tavaliselt)  
- **Kommentaarid algavad** `#` märgiga  

#### Oma GitHubi isikliku ligipääsuvõtme loomine

Teie GitHubi token on nagu eriparool, mis annab teie rakendusele õiguse kasutada GitHubi AI teenuseid:  

**Samm-sammult tokeni loomine:**  
1. **Mine GitHubi seadetesse** → Arendaja seaded → Isiklikud ligipääsuvõtmed → Tokenid (klassikalised)  
2. **Klõpsa "Genereeri uus token (klassikaline)"**  
3. **Määra aegumistähtaeg** (30 päeva testimiseks, pikem tootmises)  
4. **Vali õigused**: Märgi "repo" ja vajadusel muud load  
5. **Genereeri token** ja kopeeri see kohe (seda ei saa hiljem vaadata!)  
6. **Kleebi see oma `.env` faili**  

```bash
# Näide sellest, kuidas teie värav näeb välja (see on võlts!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### Keskkonnamuutujate laadimine Pythonis

```python
import os
from dotenv import load_dotenv

# Laadi keskkonnamuutujad failist .env
load_dotenv()

# Nüüd pääsed neile turvaliselt ligi
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**Mida see kood teeb:**  
- **Laeb** teie `.env` faili ja teeb muutujad Pythonile kättesaadavaks  
- **Kontrollib**, kas vajalik token on olemas (hästi tehtud vigade käsitlus!)  
- **Viskab** selge vea, kui token puudub  
- **Kasutab** tokenit turvaliselt ilma seda koodis paljastamata  

#### Git turvalisus: `.gitignore` fail

Teie `.gitignore` fail ütleb Gitile, milliseid faile mitte kunagi repositooriumisse lisada ega üles laadida:  

```bash
# .gitignore - Lisa need read
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**Miks see on äärmiselt oluline:** Kui lisate `.env` faili `.gitignore`-i, siis Git ignoreerib teie keskkonnafaili ja te ei pane kogemata saladusi GitHubi avalikku reposse.  

#### Erinevad keskkonnad, erinevad saladused

Professionaalsed rakendused kasutavad erinevaid API võtmeid sõltuvalt keskkonnast:  

```bash
# .env.arendus
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.tootmine
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Miks see oluline on:** Te ei taha, et arenduskatsetused mõjutaksid tootmise AI kasutuspiiranguid ja soovite erinevat turvataset erinevates keskkondades.  

### Arendusserveri käivitamine: Too oma FastAPI ellu  
Nüüd tuleb põnev hetk – alustada oma FastAPI arendusserverit ja näha, kuidas sinu AI integratsioon ellu ärkab! FastAPI kasutab Uvicorni, ülikiiret ASGI serverit, mis on spetsiaalselt loodud asünkroonsete Python rakenduste jaoks.

#### FastAPI serveri käivitamise protsessi mõistmine

```bash
# Meetod 1: Otsene Pythoni täitmine (sisaldab automaatset uuesti laadimist)
python api.py

# Meetod 2: Uvicorni otsene kasutamine (rohkem kontrolli)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kui sa käivitad selle käsu, toimub tagaekraanil järgmine:

**1. Python laadib sinu FastAPI rakenduse**:
- Impordib kõik vajalikud teegid (FastAPI, Pydantic, OpenAI jne)
- Laadib keskkonnamuutujad sinu `.env` failist
- Loob FastAPI rakenduse eksemplari automaatse dokumentatsiooniga

**2. Uvicorn konfigureerib ASGI serveri**:
- Sidub pordi 5000-ga asünkroonsete päringute käsitlemiseks
- Seadistab päringute marsruutimise automaatse valideerimisega
- Võimaldab kuuma taaskäivituse arenduse ajal (taaskäivitub failimuutustel)
- Genereerib interaktiivse API dokumentatsiooni

**3. Server hakkab kuulama**:
- Su terminal kuvab: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Server suudab käsitleda mitut samaaegset AI päringut
- Sinu API on valmis automaatsete dokumentidega aadressil `http://localhost:5000/docs`

#### Mida sa peaksid nägema, kui kõik töötab

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**FastAPI väljundi mõistmine:**
- **Will watch for changes**: Automaatselt taaskäivitatakse arenduse jaoks
- **Uvicorn running**: Kõrge jõudlusega ASGI server töötab
- **Started reloader process**: Failide jälgija automaatsete taaskäivituste jaoks
- **Application startup complete**: FastAPI rakendus edukalt algatatud
- **Interactive docs available**: Külasta `/docs` automaatse API dokumentatsiooni jaoks

#### FastAPI testimise mitmed võimsad võimalused

FastAPI pakub mitmeid mugavaid viise oma API testimiseks, sealhulgas automaatset interaktiivset dokumentatsiooni:

**Meetod 1: Interaktiivne API dokumentatsioon (Soovitatav)**
1. Ava oma brauseris aadress `http://localhost:5000/docs`
2. Näed Swagger UI-d kõigi oma lõpp-punktidega dokumenteerituna
3. Klõpsa `/hello` → "Try it out" → Sisesta test-sõnum → "Execute"
4. Näe vastust otse brauseris õige vormindusega

**Meetod 2: Lihtne brauseritest**
1. Mine aadressile `http://localhost:5000`, et kontrollida juurdepääsu
2. Mine aadressile `http://localhost:5000/health`, et kontrollida serveri seisundit
3. See kinnitab, et sinu FastAPI server töötab korralikult

**Meetod 2: Käsurea test (Edasijõudnutele)**
```bash
# Testi curl'iga (kui see on saadaval)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Oodatud vastus:
# {"response": "Tere! Olen sinu tehisintellekti assistent. Kuidas ma saan sind täna aidata?"}
```

**Meetod 3: Python testskript**
```python
# test_api.py - Loo see fail oma API testimiseks
import requests
import json

# Testi API lõpp-punkti
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Levinud käivitamisvigade tõrkeotsing

| Veateade | Mida see tähendab | Kuidas parandada |
|---------------|---------------------|--------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI pole paigaldatud | Käivita oma virtuaalkeskkonnas `pip install fastapi uvicorn` |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI server pole paigaldatud | Käivita oma virtuaalkeskkonnas `pip install uvicorn` |
| `KeyError: 'GITHUB_TOKEN'` | Keskkonnamuutuja puudub | Kontrolli oma `.env` faili ja `load_dotenv()` kutsumist |
| `Address already in use` | Port 5000 on hõivatud | Lõpeta teised protsessid, mis kasutavad porti 5000 või muuda porti |
| `ValidationError` | Päringu andmed ei vasta Pydantic mudelile | Kontrolli, et päringu vorming vastab oodatud skeemile |
| `HTTPException 422` | Töötlemata üksus | Päringu valideerimine ebaõnnestus, kontrolli `/docs` õiget vormingut |
| `OpenAI API error` | AI teenuse autentimine ebaõnnestus | Kontrolli, et sinu GitHub token on õige ja omab vajalikke õigusi |

#### Arenduse parimad tavad

**Kuuma taaskäivitamine**: FastAPI koos Uvicorniga võimaldab automaatset taaskäivitust, kui salvestad oma Python failid. See tähendab, et saad oma koodi muuta ja kohe testida ilma serverit käsitsi taaskäivitamata.

```python
# Luba kuumlaadimine otseselt
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True lubab kuumlaadimise
```

**Logimise lisamine arenguks**: Lisa logimine, et aru saada toimuvast:

```python
import logging

# Logimise seadistamine
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

**Miks logimine aitab**: Arenduse ajal näed täpselt, millised päringud tulevad, kuidas AI vastab ja kus vead ilmnevad. See teeb silumise palju kiiremaks.

### GitHub Codespaces seadistamine: Pilve arendus lihtsaks

GitHub Codespaces on nagu võimas arvuti pilves, millele saad ligi igast brauserist. Kui töötad Codespaces keskkonnas, on mõned lisasammud selleks, et sinu backend oleks frontendile kättesaadav.

#### Codespaces võrgustiku mõistmine

Kohalikus arenduskeskkonnas töötab kõik samas arvutis:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (või file://)

Codespaces'is töötab su arenduskeskkond GitHubi serverites, seega "localhost" tähendab midagi muud. GitHub loob automaatselt sinu teenustele avalikud URL-id, kuid neid tuleb korralikult seadistada.

#### Codespaces samm-sammult seadistamine

**1. Käivita oma backend server**:
```bash
cd backend
python api.py
```

Näed tuttavat FastAPI/Uvicorni käivitussõnumit, kuid nüüd töötab see Codespace keskkonnas.

**2. Konfigureeri pordi nähtavus**:
- Vaata VS Code allosas paneelist "Ports" vahekaarti
- Leia port 5000 listist
- Paremklõps port 5000 peal
- Vali "Port Visibility" → "Public"

**Miks muuta avalikuks?** Vaikimisi on Codespace pordid privaatsetena (kättesaadavad ainult sulle). Avalikuks tegemine lubab su frontendi (mis töötab brauseris) suhelda backendiga.

**3. Saa avalik URL**:
Pärast pordi avalikuks tegemist näed aadressi sarnast:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Uuenda oma frontend konfiguratsiooni**:
```javascript
// Oma frontend app.js-is uuenda BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Codespace URL-ide mõistmine

Codespace URL-id järgivad ettenähtud mustrit:
```
https://[codespace-name]-[port].app.github.dev
```

**Selgitus:**
- `codespace-name`: Sinu Codespace unikaalne nimi (tavaliselt sisaldab kasutajanime)
- `port`: Teenuse tööport (5000 meie FastAPI puhul)
- `app.github.dev`: GitHubi domeen Codespace rakendustele

#### Codespace seadistuse testimine

**1. Testi backend otse**:
Ava avalik URL brauseris uuel vahekaardil. Sa peaksid nägema:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testi brauseri arendajatööriistadega**:
```javascript
// Ava brauseri konsool ja testi oma API-t
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Kohalik Arendus

| Aspekt | Kohalik Arendus | GitHub Codespaces |
|--------|-----------------|-------------------|
| **Seadistusaeg** | Pikem (Python, sõltuvused) | Kohene (eelkonfigureeritud keskkond) |
| **URLi ligipääs** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Pordi seadistus** | Automaatne | Käsitsi (muuda pordid avalikuks) |
| **Failide püsivus** | Kohalik masin | GitHubi hoidla |
| **Koostöö** | Keskkonna jagamine raske | Lihtne jagada Codespace linki |
| **Interneti sõltuvus** | Ainult AI API kõnede jaoks | Vajalik kõigi jaoks |

#### Codespace arenduse soovitused

**Keskkonnamuutujad Codespaces'is**:
Sinu `.env` fail töötab Codespaces samamoodi, kuid saad keskkonnamuutujaid ka otse Codespace’is määrata:

```bash
# Määra keskkonnamuutuja praeguse sessiooni jaoks
export GITHUB_TOKEN="your_token_here"

# Või lisa see oma .bashrc faili, et see säiliks
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Pordi haldamine**:
- Codespaces tuvastab automaatselt, kui su rakendus hakkab kuulama pordil
- Võid suunata mitut porti korraga (kasulik näiteks hiljem andmebaasi lisamisel)
- Pordid jäävad kättesaadavaks seni, kuni su Codespace töötab

**Arendusvoog**:
1. Tee koodimuudatusi VS Code'is
2. FastAPI taaskäivitub automaatselt (Uvicorni reload režiim)
3. Testi muudatusi kohe avaliku URL-i kaudu
4. Tee commit ja push, kui valmis

> 💡 **Hea näpunäide**: Salvesta oma Codespace backend URL lemmikutesse arenduse ajal. Kuna Codespace nimed on stabiilsed, ei muutu URL seni, kuni kasutad sama Codespace'i.

## Frontendi jutukas liidese loomine: Kus inimesed kohtuvad AI-ga

Nüüd loome kasutajaliidese – selle osa, mis määrab, kuidas inimesed suhtlevad sinu AI assistendiga. Nagu originaalse iPhone liidese disain, keskendume keeruka tehnoloogia intuitiivsele ja loomulikule kasutamisele.

### Moodsa frontendi arhitektuuri mõistmine

Meie jutukas liides on mida nimetatakse "Ühe lehekülje rakenduseks" ehk SPA. Selle asemel, et iga klõps laadiks uue lehe, uuendab meie äpp ennast sujuvalt ja viivitamatult:

**Vananenud veebisaidid**: Nagu füüsilise raamatu lehekülgi keeramine – iga klõps võtab uuele lehele  
**Meie jutuka äpp**: Nagu telefoni kasutamine – kõik voolab ja uuendub sujuvalt

```mermaid
graph TD
    A[Kasutaja Sisestab Sõnumi] --> B[JavaScript Püüab Sisendi]
    B --> C[Andmete Kontrollimine & Vormindamine]
    C --> D[Saada Tagapõhja API-le]
    D --> E[Kuva Laadimise Oleku]
    E --> F[Võta AI Vastus]
    F --> G[Uuenda Vestluse Liidest]
    G --> H[Valmis Järgmise Sõnumi jaoks]
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
    
    ChatApp --> DOM : manipuleerib
    ChatApp --> FastAPI : saadab päringuid
```
### Frontendi arenduse kolm alustala

Iga frontend rakendus – alates lihtsatest veebilehtedest kuni keerukate äppideni nagu Discord või Slack – baseerub kolmel põhitehnoloogial. Mõtle neile kui kõigile veebis nähtava ja katsutava alusele:

**HTML (Struktuur)**: See on sinu vundament  
- Otsustab, millised elemendid eksisteerivad (nupud, tekstialad, konteinerid)  
- Annab sisule tähenduse (see on päis, see on vorm jne)  
- Loob lihtsa struktuuri, millele kõik ülejäänu tugineb  

**CSS (Esitlus)**: See on sinu sisekujundaja  
- Teeb kõik ilusaks (värvid, fondid, paigutus)  
- Haldab erinevaid ekraanisuurusi (telefon vs sülearvuti vs tahvel)  
- Loob sujuvaid animatsioone ja visuaalset tagasisidet  

**JavaScript (Käitumine)**: See on sinu aju  
- Vastu võtab kasutaja tegevusi (klõpsud, kirjutamine, kerimine)  
- Suhtleb backendiga ja uuendab lehte  
- Teeb kõik interaktiivseks ja dünaamiliseks  

**Mõtle sellele kui arhitektuurile:**
- **HTML**: Struktuuriskeem (ruumide ja seoste defineerimine)  
- **CSS**: Esteetika ja keskkonna disain (visuaalne stiil ja kasutajakogemus)  
- **JavaScript**: Mehaanilised süsteemid (funktsionaalsus ja interaktiivsus)  

### Miks moodne JavaScript arhitektuur loeb

Meie jutuka rakendus kasutab moodsaid JavaScript mustreid, mida näed professionaalsetes äppides. Nende mõistmine aitab sul arendajana kasvada:

**Klassipõhine arhitektuur**: Korraldame oma koodi klassidesse, mis on nagu objektide sinise prindid  
**Async/Await**: Moodne viis käsitleda operatsioone, mis võtavad aega (nt API kõned)  
**Sündmusel põhinev programmeerimine**: Äpp reageerib kasutaja tegevustele (klõpsud, klahvivajutused), mitte ei jooksuta tsüklis  
**DOM manipuleerimine**: Veebilehe sisu dünaamiline uuendamine vastavalt kasutajate ja API vastustele  

### Projekti struktuuri ülesseadmine

Loo frontend kaust järgmise organiseeritud struktuuriga:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Arhitektuuri mõistmine:**
- **Eraldab** mured struktuuri (HTML), käitumise (JavaScript) ja esituse (CSS) vahel  
- **Hoidab** lihtsat failistruktuuri, mis on lihtne navigeerida ja modifitseerida  
- **Järgib** veebiarenduse parimaid tavasid organisatsiooni ja hoolduse jaoks  

### HTML vundamendi loomine: Semantiline struktuur ligipääsetavuseks

Alustame HTML struktuuriga. Moodne veebiarendus rõhutab "semantilist HTML-i" – kasutades HTML elemente, mis selgelt kirjeldavad oma eesmärki, mitte ainult välimust. See teeb sinu rakenduse ligipääsetavaks ekraanilugeritele, otsimootoritele ja teistele tööriistadele.

**Miks semantiline HTML on oluline**: Kujuta ette, et kirjeldad oma jutuka äppi telefonis. Ütled, et "seal on päis pealkirjaga, põhiala, kus vestlused toimuvad ja vorm allosas sõnumite kirjutamiseks." Semantiline HTML kasutab elemente, mis vastavad sellele loomulikule kirjeldusele.

Loo `index.html` selle läbimõeldud struktuuriga märgistus:

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

**Iga HTML elemendi ja selle eesmärgi mõistmine:**

#### Dokumendi struktuur
- **`<!DOCTYPE html>`**: Ütleb brauserile, et tegu on moodsa HTML5-ga  
- **`<html lang="en">`**: Määrab lehe keele ekraanilugeritele ja tõlketööriistadele  
- **`<meta charset="UTF-8">`**: Tagab rahvusvahelise teksti õiged tähemärgid  
- **`<meta name="viewport"...>`**: Teeb lehe mobiilisõbralikuks, kontrollides suumi ja skaleerimist  

#### Semantilised elemendid
- **`<header>`**: Selgelt identifitseerib ülemise osa pealkirja ja kirjeldusega  
- **`<main>`**: Määrab põhisisu ala (kus vestlused toimuvad)  
- **`<form>`**: Semantiliselt õige kasutajasisendiks, lubab korrektset klaviatuurinavigatsiooni  

#### Ligipääsetavuse omadused
- **`role="log"`**: Ütleb ekraanilugeritele, et see ala sisaldab sõnumite kronoloogilist logi  
- **`aria-live="polite"`**: Teatab uutest sõnumitest ekraanilugerile ilma katkestamata  
- **`aria-label`**: Annab kirjeldavad sildid vormikontrollidele  
- **`required`**: Brauser valideerib, et kasutaja sisestab sõnumi enne saatmist  

#### CSS ja JavaScripti integratsioon
- **`class` atribuudid**: Annab stiilimise jaoks konksud CSS-ile (nt `chat-container`, `input-group`)  
- **`id` atribuudid**: Lubab JavaScriptil leida ja manipuleerida kindlaid elemente  
- **Skripti paigutus**: JavaScript fail laetakse lõpus, nii et HTML laaditakse esmalt  

**Miks see struktuur toimib:**
- **Loogiline voog**: Päis → Põhisisu → Sisendi vorm vastab loomulikule lugemisjärjekorrale  
- **Klaviatuuriga ligipääsetav**: Kasutajad saavad tabida kõik interaktiivsed elemendid läbi  
- **Ekraanilugerile sõbralik**: Selged maamärgid ja kirjelduse visuaalpuudega kasutajatele  
- **Mobiilisõbralik**: Viewport meta tag võimaldab responsiivset disaini  
- **Progressiivne täiustamine**: Töötab ka juhul, kui CSS või JavaScript ei laadi  

### Interaktiivse JavaScripti lisamine: moodsa veebirakenduse loogika

Nüüd ehitame JavaScripti, mis toob meie vestlusliidese ellu. Kasutame kaasaegseid JavaScripti mustreid, millega kohtad professionaalses veebiarenduses, sealhulgas ES6 klasse, async/await ja sündmuspõhist programmeerimist.

#### Kaasaegse JavaScripti arhitektuuri mõistmine

Selle asemel, et kirjutada proseduurset koodi (järjestikuste funktsioonide seeria), loome **klassi-põhise arhitektuuri**. Mõtle klassile kui plaanile objektide loomiseks – nagu arhitekti plaan, mida saab kasutada mitme maja ehitamiseks.

**Miks kasutada klasse veebirakendustes?**
- **Korraldus**: Kõik seotud funktsionaalsus on koos
- **Taaskasutatavus**: Saad sama lehe peal luua mitu vestlusinstantsi
- **Hooldatavus**: Lihtsam siluda ja muuta konkreetseid funktsioone
- **Professionaalne standard**: Seda mustrit kasutatakse raamistikudes nagu React, Vue ja Angular

Loo `app.js` see kaasaegse ja hästi organiseeritud JavaScriptiga:

```javascript
// app.js - Kaasaegse vestlusrakenduse loogika

class ChatApp {
    constructor() {
        // Hangi viited DOM elementidele, mida peame manipuleerima
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Konfigureeri siin oma backend URL
        this.BASE_URL = "http://localhost:5000"; // Uuenda see vastavalt oma keskkonnale
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Sea sündmuse kuulajad üles vestlusrakenduse loomisel
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Kuula vormi esitamist (kui kasutaja klikib Saada või vajutab Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Kuula ka Enter-klahvi sisestusväljal (parem kasutajakogemus)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Tõkesta vormi poolt lehe värskendamine
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Ära saada tühje sõnumeid
        
        // Anna kasutajale tagasisidet, et midagi toimub
        this.setLoading(true);
        
        // Lisa kasutaja sõnum vestlusele kohe (optimistlik UI)
        this.appendMessage(messageText, "user");
        
        // Puhasta sisendväli, et kasutaja saaks järgmise sõnumi kirjutada
        this.input.value = '';
        
        try {
            // Kutsu välja AI API ja oota vastust
            const reply = await this.callAPI(messageText);
            
            // Lisa AI vastus vestlusele
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Luba liides uuesti kasutamiseks olenemata edu või ebaõnnestumise tulemusest
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

// Algata vestlusrakendus, kui leht laetakse
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Iga JavaScripti kontseptsiooni mõistmine

**ES6 klassi struktuur**:
```javascript
class ChatApp {
    constructor() {
        // See käivitub, kui loote uue ChatAppi eksemplari
        // See on nagu teie vestluse "seadistamise" funktsioon
    }
    
    methodName() {
        // Meetodid on funktsioonid, mis kuuluvad klassile
        // Nad saavad klassi omadustele juurde pääseda, kasutades "this"
    }
}
```

**Async/Await muster**:
```javascript
// Vana meetod (tagasikutsumise põrgu):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Kaasaegne meetod (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Sündmuspõhine programmeerimine**:
Selle asemel, et pidevalt kontrollida, kas midagi juhtus, "kuulame" sündmusi:
```javascript
// Kui vorm esitatakse, käivita handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Kui Enter-klahvi vajutatakse, käivita ka handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM-i manipuleerimine**:
```javascript
// Loo uusi elemente
const messageElement = document.createElement("div");

// Muuda nende omadusi
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Lisa lehele
this.messages.appendChild(messageElement);
```

#### Turvalisus ja parimad praktikad

**XSS-i ennetamine**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // See lisab automaatselt HTML-i kaldkriipsud
    return div.innerHTML;
}
```

**Miks see oluline on**: Kui kasutaja kirjutab `<script>alert('hack')</script>`, tagab see funktsioon, et see kuvatakse tekstina, mitte ei täideta koodina.

**Vigade käsitlemine**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Kuvage kasutajasõbralik viga rakenduse kokkujooksmise asemel
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Kasutajakogemuse kaalutlused**:
- **Optimistlik UI**: Lisa kasutaja sõnum kohe, ära oota serveri vastust
- **Laadimisolekud**: Vajalike nuppude keelamine ja "Saadan..." teate kuvamine ootamise ajal
- **Automaattõmme**: Hoia uusimad sõnumid nähtavad
- **Sisestuse valideerimine**: Ära saada tühje sõnumeid
- **Klaviatuuri otseteed**: Enter klahv saadab sõnumi (nagu tõelistes vestlusrakendustes)

#### Rakenduse töövoo mõistmine

1. **Leht laeb** → käivitub `DOMContentLoaded` sündmus → luuakse `new ChatApp()`
2. **Konstruktor käivitub** → võtab DOM elementide viited → seadistab sündmuste kuulajad
3. **Kasutaja kirjutab sõnumi** → vajutab Enter või klikib Saada → käivitatakse `handleSubmit`
4. **handleSubmit** → valideerib sisendi → kuvab laadimisoleku → kutsub API-d
5. **API vastab** → lisab AI sõnumi vestlusesse → võimaldab uuesti liidesega suhelda
6. **Järgmine sõnum saabub** → kasutaja võib jätkata vestlust

See arhitektuur on skaleeritav – saad lihtsalt lisada funktsioone nagu sõnumite muutmine, failide üleslaadimine või mitu vestluse niiti ilma põhistruktuuri ümberkirjutamata.

### 🎯 Pedagoogiline kontrollpunkt: kaasaegne frontend arhitektuur

**Arhitektuuri mõistmine:** Sa oled rakendanud täieliku ühe lehe rakenduse, kasutades kaasaegseid JavaScripti mustreid. See esindab professionaalset taset frontend-arenduses.

**Võtmekontseptsioonid õpitud**:
- **ES6 klassipõhine arhitektuur**: organiseeritud, hooldatav koodistruktuur
- **Async/Await mustrid**: kaasaegne asünkroonne programmeerimine
- **Sündmuspõhine programmeerimine**: reageeriv kasutajaliidese disain
- **Turvalisuse parimad tavad**: XSS ennetamine ja sisendi valideerimine

**Tööstuslik seos:** Mustrid, mida õppisid (klassi-arhitektuur, asünkroonsed toimingud, DOM-i manipuleerimine), on kaasaegsete raamistikute nagu React, Vue ja Angular aluseks. Sa ehitad sama arhitektuurse mõtteviisiga, mida kasutatakse tootmisrakendustes.

**Reflektsiooniküsimus:** Kuidas laiendaksid seda vestlusrakendust, et hallata mitut vestlust või kasutaja autentimist? Mõtle vajalikele arhitektuurimuudatustele ja klassi struktuuri arengule.

### Stiilita oma vestlusliidest

Nüüd loome kaasaegse ja visuaalselt meeldiva vestlusliidese CSS-iga. Hea stiil teeb sinu rakenduse professionaalseks ning parandab üldist kasutajakogemust. Kasutame tänapäevaseid CSS-i funktsioone nagu Flexbox, CSS Grid ja kohandatud omadusi, et tagada reageeriv ja ligipääsetav disain.

Loo `styles.css` selle põhjaliku stiiliga:

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

**CSS arhitektuuri mõistmine:**
- **Kasutab** CSS-i kohandatud omadusi (muutujaid) järjepidevaks temaatikaks ja lihtsaks hoolduseks
- **Rakendab** Flexboxi paigutust reageerivaks disainiks ja korrektselt joondamiseks
- **Sisaldab** sujuvaid animatsioone sõnumite ilmumiseks ilma tähelepanu hajutamata
- **Tagab** visuaalse eristuse kasutaja sõnumite, AI vastuste ja vigade vahel
- **Toetab** reageerivat disaini, mis töötab nii lauaarvutites kui mobiilseadmetes
- **Arvestab** ligipääsetavusega vähendatud liikumise eelistuste ja õige kontrastsusega
- **Pakkub** pimeda režiimi tuge vastavalt kasutaja süsteemi seadele

### Backend URL-i seadistamine

Viimane samm on uuendada `BASE_URL` oma JavaScriptis, et see vastaks sinu backend serverile:

```javascript
// Kohalikuks arenduseks
this.BASE_URL = "http://localhost:5000";

// GitHub Codespacesi jaoks (asenda oma tegeliku URL-iga)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Backend URL-i määramine:**
- **Kohalik arendus**: Kasuta `http://localhost:5000`, kui frontend ja backend töötavad mõlemad lokaalselt
- **Codespaces**: Leia oma backend URL Ports vahekaardilt pärast pordi 5000 avalikuks tegemist
- **Tootmine**: Asenda see tegeliku domeeniga, kui kasutad hostinguteenust

> 💡 **Testimisnõuanne**: Saad oma backend’i otse testida, avades juur-URL-i brauseris. Sinuga peaks tervitama FastAPI serveri sõnum.

## Testimine ja juurutus

Nüüd, kui sul on valmis nii frontend kui backend komponendid, testime, kas kõik töötab koos ja uurime juurutusvõimalusi, et jagada oma vestlusassistenti teistega.

### Kohaliku testimise töövoog

Järgi neid samme, et testida oma täielikku rakendust:

```mermaid
graph TD
    A[Alusta backend serverit] --> B[Konfigureeri keskkonnamuutujad]
    B --> C[Testeeri API lõpp-punkte]
    C --> D[Ava frontend brauseris]
    D --> E[Testeeri vestlusfunktsionaalsust]
    E --> F[Tõrgi vead]
```
**Samm-sammuline testimisprotsess:**

1. **Alusta oma backend serverit**:
   ```bash
   cd backend
   source venv/bin/activate  # või venv\Scripts\activate Windowsis
   python api.py
   ```

2. **Kontrolli, kas API töötab**:
   - Ava `http://localhost:5000` oma brauseris
   - Sa peaksid nägema tervitussõnumit oma FastAPI serverilt

3. **Ava oma frontend**:
   - Liigu oma frontend kataloogi
   - Ava `index.html` veebilehitsejas
   - Võid kasutada ka VS Code Live Server laiendust parema arenduskogemuse jaoks

4. **Testi vestlusfunktsionaalsust**:
   - Sisesta sõnum sisendvälja
   - Klõpsa "Saada" või vajuta Enterit
   - Kontrolli, kas AI vastab korrektselt
   - Vaata brauseri konsoolist, kas JavaScripti vigu ei ilmu

### Levinumate probleemide lahendamine

| Probleem | Sümptomid | Lahendus |
|---------|----------|----------|
| **CORS viga** | Frontend ei jõua backendini | Veendu, et FastAPI CORSMiddleware on korrektselt seadistatud |
| **API võtme tõrge** | 401 Unauthorized vastused | Kontrolli oma `GITHUB_TOKEN` keskkonnamuutujat |
| **Ühenduse keeldumine** | Võrguvead frontendis | Kontrolli backend URL-i ja veendu, et Flask server töötab |
| **AI vastust ei tule** | Tühjad või veateated vastustes | Kontrolli backend logisid API limiidi või autentimise vigade pärast |

**Tavalised silumisjärjekorrad:**
- **Kontrolli** brauseri arendajate tööriistade konsooli JavaScripti vigade varal
- **Vaata üle** Network vahekaart, et näha edukalt tehtud API päringuid ja vastuseid
- **Loe läbi** backend terminali väljund Python vigade või API tõrgete osas
- **Veendu**, et keskkonnamuutujad on korrektselt laetud ja ligipääsetavad

## 📈 Sinu AI rakenduse arendamise meistriklassi ajatelg

```mermaid
timeline
    title Täielik teekond AI rakenduse arendamisel
    
    section AI alused
        Generatiivse AI mõistmine
            : Mõista mustrituvastuse kontseptsioone
            : Valda AI parameetrite juhtimist
            : Õpi promptide inseneritehnikaid
        
        GitHub mudelite integreerimine
            : Liigu AI teenuste platvormidel
            : Käsitle turvalist autentimist
            : Optimeeri mudeli parameetreid
    
    section Tagapool arendamine
        Python API arhitektuur
            : Ehita FastAPI rakendusi
            : Rakenda asünkroonseid operatsioone
            : Loo turvalised lõpp-punktid
        
        AI teenuste integreerimine
            : Ühenda väliste AI API-dega
            : Käsitle päringu limiite
            : Rakenda veapiiranguid
    
    section Esipaneeli meistriteos
        Moodsa JavaScripti mustrid
            : Valda ES6 klassi arhitektuuri
            : Rakenda async/await voo
            : Ehita reageerivad kasutajaliidesed
        
        Reaalaegne kasutajakogemus
            : Loo dünaamilised jutuliidese
            : Käsitle laadimise olekuid
            : Optimeeri kasutajate interaktsioone
    
    section Tootmisvalmidus
        Turvalisus ja jõudlus
            : Rakenda turvalist tokeni haldust
            : Tõkesta XSS haavatavused
            : Optimeeri API jõudlust
        
        Professionaalne juurutamine
            : Ehita skaleeritavad arhitektuurid
            : Loo hooldatav kood
            : Dokumenteeri arendusprotsessid
```
**🎓 Lõpetamise verstapost:** Oled edukalt loonud täieliku AI juhitava rakenduse, kasutades samu tehnoloogiaid ja arhitektuurilisi mustreid, mis toetavad kaasaegseid AI assistente. Need oskused ühendavad traditsioonilist veebiarendust ja tipptasemel AI integratsiooni.

**🔄 Järgmise taseme võimekused**:
- Valmis uurima täiustatud AI raamistikke (LangChain, LangGraph)
- Valmis ehitama multimodaalseid AI rakendusi (tekst, pildid, hääl)
- Varustatud vektordatabaaside ja otsingusüsteemide rakendamiseks
- Aluse panemine masinõppe ja AI mudelite täpsemaks häälestamiseks

## GitHub Copiloti agendi väljakutse 🚀

Kasuta Agendi režiimi, et täita järgmine väljakutse:

**Kirjeldus:** Täienda vestlusassistenti, lisades vestluste ajaloo ja sõnumite püsivuse. See väljakutse aitab sul mõista, kuidas hallata olekut vestlusappides ja rakendada andmete salvestamist parema kasutajakogemuse jaoks.

**Käsklus:** Muuda vestlusrakendust, et see sisaldaks vestluse ajalugu, mis säilib sessioonide vahel. Lisa funktsionaalsus, mis salvestab vestlused kohalikku salvestusse, kuvab vestluse ajaloo lehekülje laadimisel ja lisab "Kustuta ajalugu" nupu. Rakenda ka tippimisindikaatorid ja sõnumite aja märgendid, et muuta vestlus kogemus realistlikumaks.

Lisateavet agentrežiimi kohta leiad siit: [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## Kodutöö: loo oma isiklik AI assistent

Nüüd loome oma AI assistendi rakenduse. Selle asemel, et lihtsalt tutoriali koodi korrata, on see võimalus rakendada kontseptsioone, luues midagi, mis peegeldab sinu huvisid ja kasutusjuhtumeid.

### Projekti nõuded

Korraldame su projekti puhtaks ja organiseerituks struktuuriks:

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

### Põhitegevused

**Backendi arendus:**
- **Võta** meie FastAPI kood ja tee sellest oma oma
- **Loo** unikaalne AI isiksus – võib-olla abivalmis kokanduse assistent, loominguline kirjutamispartner või õppimiskaaslane?
- **Lisa** tugev vigade käsitlemine, et rakendus ei jookseks kokku probleemide korral
- **Kirjuta** selge dokumentatsioon neile, kes tahavad mõista, kuidas su API töötab

**Frontendi arendus:**
- **Ehita** vestlusliides, mis tundub intuitiivne ja sõbralik
- **Kirjuta** puhas, kaasaegne JavaScript, millega võid teistele arendajatele silma paista
- **Disaini** kohandatud stiilid, mis väljendavad su AI isiksust – lõbus ja värvikas? Puhtalt minimalistlik? Täiesti sinu enda valida!
- **Veendu**, et töötab hästi nii telefonides kui arvutites

**Personalisatsiooni nõuded:**
- **Vali** unikaalne nimi ja isiksus oma AI assistendile – võib midagi, mis peegeldab sinu huvisid või probleeme, mida soovid lahendada
- **Kohanda** visuaalset disaini, et see sobiks su assistendi vibe’iga
- **Kirjuta** kaasahaarav tervitussõnum, mis paneb inimesed vestlust alustama
- **Testi** assistenti erinevate küsimustega, et näha, kuidas ta vastab

### Täiustamise ideed (valikuline)

Tahad oma projekti järgmisele tasemele viia? Siin on mõned lõbusad ideed uurimiseks:

| Funktsioon | Kirjeldus | Osad mida treenid |
|---------|-------------|------------------------|
| **Sõnumi ajalugu** | Mäleta vestlusi ka pärast lehe värskendust | localStorage kasutamine, JSON käitlemine |
| **Tippimisindikaatorid** | Näita "AI kirjutab..." ooteajal | CSS animatsioonid, asünkroonne programmeerimine |
| **Sõnumite ajamärgid** | Näita, millal sõnumid saadeti | Kuupäeva / aja vorming, UX disain |
| **Vestluse eksport** | Luba kasutajal vestlust alla laadida | Faili käsitlemine, andmete eksport |
| **Teema vahetamine** | Hele/tume režiimi vahetus | CSS-i muutujad, kasutaja eelistused |
| **Hääle sisestus** | Lisa kõne-tekstiks funktsionaalsus | Veebiarenduse API-d, ligipääsetavus |

### Testimine ja dokumentatsioon

**Kvaliteedi tagamine:**
- **Testi** rakendust erinevate sisendite ja äärealadega
- **Kontrolli**, et reageeriv disain töötab erinevate ekraanisuurustega
- **Vaata üle** ligipääsetavus, kasutades klaviatuurinavigatsiooni ja ekraanilugejaid
- **Valideeri** HTML ja CSS vastavus standarditele

**Dokumentatsiooni nõuded:**
- **Kirjuta** README.md, mis selgitab projekti ja kuidas seda käivitada
- **Lisa** ekraanipilte oma vestlusliidesest töös
- **Dokumenteeri** kõik unikaalsed funktsioonid või kohandused, mida lisasid
- **Anna** selged seadistamisjuhised teistele arendajatele

### Esitamise juhised

**Projekti esitused:**
1. Täielik projekti kaust kõigi lähtekoodidega
2. README.md koos projekti kirjelduse ja seadistamisjuhistega
3. Ekraanipildid, kus sinu vestlusassistent töötab
4. Lühike refleksioon õpitust ja kokkupuutunud väljakutsetest

**Hindamiskriteeriumid:**
- **Funktsionaalsus:** Kas vestlusassistent töötab ootuspäraselt?
- **Koodi kvaliteet:** Kas kood on hästi organiseeritud, kommenteeritud ja hooldatav?
- **Disain:** Kas liides on visuaalselt meeldiv ja kasutajasõbralik?
- **Loomingulisus:** Kui unikaalne ja personaalne on sinu rakendus?
- **Dokumentatsioon:** Kas seadistamisjuhised on selged ja täielikud?

> 💡 **Edu näpunäide:** Alusta esmalt põhinõuetega, seejärel lisa täiustusi, kui kõik töötab. Keskendu esmalt sujuvale põhifunktsionaalsusele enne edasijõudnute funktsioonide lisamist.

## Lahendus

[Lahendus](./solution/README.md)

## Boonusväljakutsed

Valmis võtma oma AI assistendi järgmisele tasemele? Proovi neid täiustatud väljakutseid, mis süvendavad sinu arusaamist AI integratsioonist ja veebiarendusest.

### Isiksuse kohandamine

Tõeline võlu tuleb siis, kui annad oma AI assistendile ainulaadse isiksuse. Katseta erinevate süsteemipromptidega, et luua spetsialiseeritud assistendid:

**Professionaalse assistendi näide:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Loomingulise kirjutamise abilise näide:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Tehnilise mentorina näide:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontendi täiustused

Muuda oma vestlusliidest nende visuaalsete ja funktsionaalsete täiustustega:

**Täpsemad CSS omadused:**
- **Rakenda** sujuvaid sõnumite animatsioone ja üleminekuid
- **Lisa** kohandatud vestluspallide disain koos CSS kujundite ja gradientidega
- **Loo** tippimisindikaatori animatsioon, kui AI "mõtleb"
- **Disaini** emotikonide reaktsioonid või sõnumite hindamissüsteem

**JavaScripti täiustused:**
- **Lisa** klaviatuuri otseteed (Ctrl+Enter saatmiseks, Escape tühjendamiseks)
- **Rakenda** sõnumite otsingu ja filtreerimise funktsionaalsus
- **Loo** vestluse eksportimise funktsioon (alla laadimine tekstina või JSON-ina)
- **Lisa** automaatne salvestus localStorage-sse, et vältida sõnumite kadumist

### Täiustatud AI integratsioon

**Mitmed AI isiksused:**
- **Loo** rippmenüü, et vahetada erinevate AI isikute vahel
- **Salvesta** kasutaja eelistatud isiksus localStorage-sse
- **Rakenda** kontekstivahetus, mis hoiab vestluse voolu


**Nutika vastuse funktsioonid:**
- **Lisa** vestluse kontekstitaju (AI mäletab varasemaid sõnumeid)
- **Rakenda** nutikaid soovitusi vestlusteema põhjal  
- **Loo** kiirvastuse nuppe sagedastele küsimustele  

> 🎯 **Õpieesmärk**: Need boonusetapid aitavad sul mõista edasijõudnud veebiarenduse mustreid ja tehisintellekti integreerimise tehnikaid, mida kasutatakse tootmiskeskkonna rakendustes.  

## Kokkuvõte ja järgmised sammud

Palju õnne! Sa oled edukalt loonud nullist täieliku AI-põhise juturoboti assistendi. See projekt on pakkunud sulle praktilist kogemust kaasaegsete veebiarenduse tehnoloogiate ja tehisintellekti integreerimise alal – oskused, mis on tänapäeva tehnoloogilises maastikus järjest väärtuslikumad.  

### Mida oled saavutanud

Selle õppetunni jooksul oled valdanud mitmeid olulisi tehnoloogiaid ja kontseptsioone:  

**Tagapõhja arendus:**  
- **Integreerisid** GitHub Models API AI-funktsioonide jaoks  
- **Loomesid** RESTful API Flaskiga koos korraliku vigade käitlemisega  
- **Rakendasid** turvalise autentimise keskkonnamuutujate abil  
- **Seadistasid** CORS-i frontend'i ja backend'i vahelisteks päritolupiiranguteks  

**Ees-otsa arendus:**  
- **Loodud** reageeriv jutuliides semantilise HTML-iga  
- **Rakendasid** kaasaegset JavaScripti async/await ja klassipõhise arhitektuuriga  
- **Disainisid** kaasahaarava kasutajaliidese CSS Gridi, Flexboxi ja animatsioonidega  
- **Lisasid** juurdepääsetavuse parameetreid ja reageeriva disaini põhimõtteid  

**Täisstack integratsioon:**  
- **Ühendasid** frontend'i ja backend'i HTTP API kõnede kaudu  
- **Käsitlesid** reaalajas kasutajategevust ja asünkroonset andmevoogu  
- **Rakendasid** vigade käitlemist ja kasutajate tagasisidet kogu rakenduses  
- **Testisid** kogu rakenduse töövoogu kasutaja sisendist AI vastuseni  

### Peamised õpitulemused  

```mermaid
mindmap
  root((AI Chat App Osksused))
    API Integratsioon
      Autentimine
      Vigade Käsitlemine
      Asünkroonne Programmeerimine
    Veebiarendus
      HTML5 Semantika
      Moodne CSS
      ES6+ JavaScript
    Kasutajakogemus
      Reageeriv Disain
      Juurdepääsetavus
      Reaalajas Interaktsioon
    AI Mõistmine
      Käsuinseneriteadus
      Mudeli Parameetrid
      Vestluse Voog
```  
See projekt tutvustas sulle AI-põhiste rakenduste loomise aluseid, mis kujutavad endast veebiarenduse tulevikku. Sa mõistad nüüd, kuidas integreerida tehisintellekti võimalusi traditsioonilistesse veebirakendustesse, luues kaasahaaravaid kasutajakogemusi, mis tunduvad nutikad ja reageerivad.  

### Professionaalsed rakendused  

Sinu selle õppetunni jooksul omandatud oskused on otseselt rakendatavad kaasaegsetes tarkvaraarenduse karjäärides:  

- **Täisstack veebiarendus** kasutades kaasaegseid raamistikke ja API-sid  
- **AI integreerimine** veebirakendustes ja mobiilirakendustes  
- **API disain ja arendus** mikroteenuste arhitektuuridele  
- **Kasutajaliideste arendus** keskendudes juurdepääsetavusele ja reageerivale disainile  
- **DevOps praktikad** sh keskkonna seadistamine ja juurutamine  

### Jätka oma AI arendus­teekonda  

**Järgmised õppesammud:**  
- **Uuri edasi** edasijõudnud AI mudeleid ja API-sid (GPT-4, Claude, Gemini)  
- **Õpi** päringute insenerlust paremate AI vastuste loomiseks  
- **Tudengu** vestluste disaini ja juturoboti kasutajakogemuse põhimõtteid  
- **Uuri** AI ohutust, eetikat ja vastutustundliku tehisintellekti arenduspraktikaid  
- **Loo** keerukamaid rakendusi, mis kasutavad vestluste mälu ja kontekstitajust  

**Edasijõudnud projektide ideed:**  
- Mitme kasutajaga jututubade loomine AI modereerimisega  
- AI-põhised klienditeeninduse juturobotid  
- Haridusassistendid, kes pakuvad personaliseeritud õppimist  
- Loomingulised kirjutamispartnerid erinevate AI isiksustega  
- Tehnilise dokumentatsiooni assistendid arendajatele  

## Alustamine GitHub Codespacesiga  

Tahad proovida seda projekti pilvearenduskeskkonnas? GitHub Codespaces pakub täielikku arendussetti brauseris, mis sobib ideaalselt AI rakendustega katsetamiseks ilma lokaalse seadistuse vajaduseta.  

### Oma arenduskeskkonna seadistamine  

**1. samm: Loo mallist**  
- **Mine** aadressile [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Vajuta** paremas ülanurgas nuppu "Use this template" (vesi, et oled GitHubi sisse logitud)  

![Loo mallist liides, kus roheline "Use this template" nupp on nähtav](../../../translated_images/et/template.67ad477109d29a2b.png)  

**2. samm: Käivita Codespaces**  
- **Ava** äsja loodud repositoorium  
- **Vajuta** rohelist "Code" nuppu ja vali "Codespaces"  
- **Vali** "Create codespace on main", et alustada oma arenduskeskkonda  

![Codespace loomise liides valikutega pilvearenduse keskkonna käivitamiseks](../../../translated_images/et/codespace.bcecbdf5d2747d3d.png)  

**3. samm: Keskkonna seadistamine**  
Kui su Codespace käivitub, on sulle kättesaadav:  
- **Eelinstallitud** Python, Node.js ja kõik vajalikud arendustööriistad  
- **VS Code liides** koos veebiarenduse laiendustega  
- **Terminali ligipääs** nii backend'i kui frontend'i serverite käivitamiseks  
- **Pordisihendus** oma rakenduste testimiseks  

**Mida Codespaces pakub:**  
- **Eemaldab** lokaalse keskkonna seadistamise ja konfiguratsiooni probleemid  
- **Tagab** järjepideva arenduskeskkonna eri seadmetel  
- **Sisaldab** eelkonfigureeritud tööriistu ja laiendusi veebiarenduseks  
- **Pakku** sujuvat integratsiooni GitHubiga versioonikontrolli ja koostöö jaoks  

> 🚀 **Pro nipp**: Codespaces sobib suurepäraselt AI rakenduste õppimiseks ja prototüüpimiseks, kuna see haldab automaatselt kogu keeruka keskkonnaseadistuse, võimaldades sul keskenduda ehitamisele ja õppimisele, mitte seadistuse probleemide lahendamisele.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame täpsust tagada, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta ühegi arusaamatuse või valesti tõlgendamise eest, mis võib tekkida selle tõlketeenuse kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->