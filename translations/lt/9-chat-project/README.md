<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T10:59:27+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "lt"
}
-->
# Sukurkite pokalbių asistentą su DI

Prisiminkite „Star Trek“, kai įgula laisvai kalbėdavosi su laivo kompiuteriu, užduodama sudėtingus klausimus ir gaudama apgalvotus atsakymus? Tai, kas 1960-aisiais atrodė kaip mokslinė fantastika, dabar yra kažkas, ką galite sukurti naudodami jau žinomas interneto technologijas.

Šioje pamokoje sukursime DI pokalbių asistentą naudodami HTML, CSS, JavaScript ir tam tikrą backend integraciją. Sužinosite, kaip tos pačios įgūdžių kombinacijos, kurias jau mokotės, gali jungtis prie galingų DI paslaugų, kurios supranta kontekstą ir generuoja prasmingus atsakymus.

Galvokite apie DI kaip prieigą prie didžiulės bibliotekos, kuri ne tik gali rasti informaciją, bet ir sintetinti ją į nuoseklius atsakymus, pritaikytus jūsų konkretiems klausimams. Vietoje tūkstančių puslapių naršymo, gaunate tiesioginius, kontekstinius atsakymus.

Integracija vyksta per žinomas interneto technologijas, kurios veikia kartu. HTML kuria pokalbio sąsają, CSS rūpinasi gražiu dizainu, JavaScript valdo vartotojo sąveikas, o backend API jungia viską su DI paslaugomis. Tai panašu į skirtingų orkestro sekcijų bendradarbiavimą kuriant simfoniją.

Iš esmės statome tiltą tarp natūralios žmonių komunikacijos ir mašininio apdorojimo. Sužinosite tiek techninį DI paslaugų integracijos įgyvendinimą, tiek dizaino šablonus, kurie padaro sąveikas intuityvias.

Pamokos pabaigoje DI integracija atrodys nebe kaip paslaptingas procesas, o kaip dar viena API, su kuria galite dirbti. Suprasite pagrindinius modelius, kurie palaiko tokias programas kaip ChatGPT ir Claude, naudodami tuos pačius interneto kūrimo principus, kuriuos mokotės.

## ⚡ Ką galite padaryti per kitą 5 minutes

**Greitos pradžios kelias užimtiems programuotojams**

```mermaid
flowchart LR
    A[⚡ 5 minutės] --> B[Gauti GitHub tokeną]
    B --> C[Išbandyti AI aikštelę]
    C --> D[Kopijuoti Python kodą]
    D --> E[Peržiūrėti AI atsakymus]
```
- **1 minutė**: Aplankykite [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) ir sukurkite asmeninį prieigos raktą
- **2 minutė**: Išbandykite DI sąveikas tiesiogiai žaidimų aikštelės sąsajoje
- **3 minutė**: Spustelėkite skirtuką „Code“ ir nukopijuokite Python kodo fragmentą
- **4 minutė**: Paleiskite kodą lokaliai su savo raktu: `GITHUB_TOKEN=your_token python test.py`
- **5 minutė**: Stebėkite, kaip iš jūsų kodo generuojamas pirmasis DI atsakymas

**Greitas testavimo kodas**:
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

**Kodėl tai svarbu**: Per 5 minutes patirsite programinės DI sąveikos magiją. Tai yra fundamentali blokų kaladėlė, kuri varo kiekvieną DI programą, kuria naudojatės.

Štai kaip atrodys jūsų baigtas projektas:

![Pokalbių programos sąsaja rodanti naudotojo ir DI asistento pokalbį](../../../translated_images/lt/screenshot.0a1ee0d123df681b.png)

## 🗺️ Jūsų mokymosi kelionė DI programų kūrime

```mermaid
journey
    title Nuo interneto kūrimo iki DI integracijos
    section DI pagrindų supratimas
      Atraskite generatyvinio DI sąvokas: 4: You
      Išnagrinėkite GitHub Modelių platformą: 6: You
      Įvaldykite DI parametrus ir užklausas: 8: You
    section Backend integracija
      Sukurkite Python API serverį: 5: You
      Įgyvendinkite DI funkcijų kvietimus: 7: You
      Tvarkykite asinchronines operacijas: 8: You
    section Frontend kūrimas
      Sukurkite modernią pokalbių sąsają: 6: You
      Įvaldykite realaus laiko sąveikas: 8: You
      Sukurkite reaguojantį naudotojo patyrimą: 9: You
    section Profesionalus taikymas
      Diegkite pilną DI sistemą: 7: You
      Optimizuokite veikimo modelius: 8: You
      Sukurkite gamybai paruoštą programą: 9: You
```
**Jūsų kelionės tikslas**: Pabaigoje sukursite pilną DI pagrindu veikiančią programą naudodami tas pačias technologijas ir šablonus, kurie varo šiuolaikinius DI asistentus kaip ChatGPT, Claude ir Google Bard.

## Kaip veikia DI: nuo paslapties iki meistriškumo

Prieš pradedant kodą, supraskime, su kuo dirbame. Jei jau naudojote API, žinote pagrindinį šabloną: išsiųsti užklausą, gauti atsakymą.

DI API seka panašią struktūrą, tačiau vietoj iš anksto saugomų duomenų iš duomenų bazės jie generuoja naujus atsakymus remdamiesi didžiuliais teksto kiekiais išmoktais modeliais. Tai galima palyginti su skirtumu tarp bibliotekos katalogo sistemos ir žinančio bibliotekininko, kuris gali sintetinti informaciją iš kelių šaltinių.

### Kas iš tikrųjų yra „Generatyvinis DI“?

Įsivaizduokite, kaip Rosetos akmuo leido mokslininkams suprasti Egipto hieroglifus, radus analogijas tarp žinomų ir nežinomų kalbų. DI modeliai veikia panašiai – jie randa šablonus milžiniškuose tekstų kiekiuose, kad suprastų, kaip veikia kalba, ir tada naudoja tuos šablonus tinkamiems atsakymams generuoti į naujus klausimus.

**Leiskite paprastai paaiškinti:**
- **Tradiciškai duomenų bazė**: Tarsi prašyti gimimo liudijimo – visada gaunate tą patį dokumentą
- **Paieškos variklis**: Tarsi prašyti bibliotekininko rasti knygas apie kates – jis parodo, kas yra
- **Generatyvinis DI**: Tarsi klausyti žinančio draugo apie kates – jis papasakoja įdomių dalykų savo žodžiais, pritaikytų jūsų norėjimams

```mermaid
graph LR
    A[Jūsų Klausimas] --> B[DI Modelis]
    B --> C[Modelių Atpažinimas]
    C --> D[Turinio Generavimas]
    D --> E[Kontekstinis Atsakymas]
    
    F[Mokymo Duomenys<br/>Knygos, Straipsniai, Tinklapiai] --> B
```
### Kaip DI modeliai mokosi (supaprastintas paaiškinimas)

DI modeliai mokosi per didžiulius duomenų rinkinius, kuriuose yra tekstai iš knygų, straipsnių ir pokalbių. Per šį procesą jie identifikuoja šablonus:
- Kaip struktūruojamos mintys rašytinėje komunikacijoje
- Kuriuos žodžius dažnai vartojama kartu
- Kaip dažniausiai vyksta pokalbiai
- Kontekstinius skirtumus tarp oficialios ir neoficialios kalbos

**Tai panašu į tai, kaip archeologai dešifruoja senąsias kalbas**: jie analizuoja tūkstančius pavyzdžių, kad suprastų gramatiką, žodyną ir kultūrinį kontekstą, galiausiai geba interpretuoti naujus tekstus naudodamiesi išmoktais šablonais.

### Kodėl GitHub Models?

Naudojame GitHub Models tiesiog praktiškai – tai suteikia prieigą prie įmonių lygmens DI be to, kad reikėtų savo infrastruktūrą įrenginėti (patikėkite, to dabar nenorite!). Tai panašu į orų API naudojimą vietoje savo orų stočių statymo visur patiems.

Tai iš esmės yra „DI kaip paslauga“, ir geriausia dalis? Pradėti nemokamai, todėl galite eksperimentuoti nesijaudindami dėl didelių sąskaitų.

```mermaid
graph LR
    A[Frontend pokalbių vartotojo sąsaja] --> B[Jūsų backend API]
    B --> C[GitHub modelių API]
    C --> D[DI modelio apdorojimas]
    D --> C
    C --> B
    B --> A
```
Naudosime GitHub Models kaip mūsų backend integraciją, kuris suteikia prieigą prie profesionalaus lygio DI galimybių per patogią kūrėjams sąsają. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) veikia kaip testavimo aplinka, kur galite išbandyti skirtingus DI modelius ir suprasti jų galimybes prieš įgyvendinant kodą.

## 🧠 DI programų kūrimo ekosistema

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
**Pagrindinė taisyklė**: DI programų kūrimas derina tradicinius interneto kūrimo įgūdžius su DI paslaugų integracija, kuri formuoja protingas programas, kurios atrodo natūralios ir jautrios vartotojams.

![GitHub Models AI Playground sąsaja su modelio pasirinkimu ir testavimo zona](../../../translated_images/lt/playground.d2b927122224ff8f.png)

**Kodėl žaidimų aikštelė tokia naudinga:**
- **Išbandykite** skirtingus DI modelius kaip GPT-4o-mini, Claude ir kitus (visi nemokami!)
- **Testuokite** savo idėjas ir užklausas prieš rašydami kodą
- **Gaukite** paruoštus naudoti kodo fragmentus savo mėgstamia kalba
- **Keiskite** tokius nustatymus kaip kūrybiškumas ir atsakymo ilgis, kad pamatytumėte poveikį

Kai šiek tiek pažaistumėte, tiesiog spustelėkite skirtuką „Code“ ir pasirinkite programavimo kalbą, kad gautumėte įgyvendinimo kodą, kurio jums prireiks.

![Žaidimų aikštelės pasirinkimas su kodo generavimo galimybėmis skirtingomis programavimo kalbomis](../../../translated_images/lt/playground-choice.1d23ba7d407f4758.png)

## Python backend integracijos nustatymas

Dabar įgyvendinkime DI integraciją naudodami Python. Python puikiai tinka DI programoms dėl paprastos sintaksės ir galingų bibliotekų. Pradėsime nuo GitHub Models žaidimų aikštelės kodo, o tada jį pertvarkysime į pakartotinai naudojamą, gamybai paruoštą funkciją.

### Pagrindinio įgyvendinimo supratimas

Kai pasiimate Python kodą iš žaidimų aikštelės, gaunate kažką panašaus. Nesijaudinkite, jei iš pradžių atrodo daug – pereisime jį po žingsnio:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Norėdami autentifikuotis su modeliu, turėsite sugeneruoti asmeninį prieigos raktą (PAT) savo GitHub nustatymuose.
# Sukurkite savo PAT raktą, vadovaudamiesi instrukcijomis čia: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Štai ką daro šis kodas:**
- **Importuojame** reikalingus įrankius: `os` aplinkos kintamiesiems skaityti ir `OpenAI` DI pokalbio valdymui
- **Sukuriame** OpenAI klientą, nukreiptą į GitHub DI serverius, o ne tiesiogiai OpenAI
- **Autentifikuojamės** naudojant specialų GitHub tokeną (apie jį šiek tiek vėliau!)
- **Kuriame** pokalbį naudodami skirtingus „roles“ (vaidmenis) – tai kaip scenos nustatymas spektakliui
- **Siunčiame** užklausą DI su keletu detalių parametrų
- **Išgauname** tikrą atsakymo tekstą iš visų grąžinamų duomenų

### Pokalbio vaidmenų supratimas: DI pokalbių sistema

DI pokalbiai naudoja specifinę struktūrą su skirtingais „roles“, kurie atlieka skirtingus vaidmenis:

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

**Galvokite apie tai kaip spektaklio režisavimą:**
- **Sistema (system)**: kaip režisieriaus nurodymai aktoriui – nurodo DI, kaip elgtis, kokia asmenybė būti ir kaip atsakyti
- **Vartotojas (user)**: tikrasis klausimas arba žinutė iš jūsų programos naudotojo
- **Asistentas (assistant)**: DI atsakymas (jo nesiunčiate, bet jis yra pokalbio istorijoje)

**Tikro gyvenimo analogija**: Įsivaizduokite, kad pristatote draugą vakarėlyje:
- **Sistema žinutė**: „Tai mano draugė Sarah, ji gydytoja, puikiai paaiškina medicinos sąvokas paprastai“
- **Vartotojo žinutė**: „Ar gali paaiškinti, kaip veikia vakcinos?“
- **Asistento atsakymas**: Sarah atsako kaip draugiška gydytoja, ne kaip teisininkas ar virėjas

### DI parametrų supratimas: kaip tikslinti atsakymo elgesį

Skaitmeniniai parametrai DI API kvietimuose kontroliuoja, kaip modelis generuoja atsakymus. Šie nustatymai leidžia reguliuoti DI elgesį įvairiems naudojimams:

#### Temperatūra (0.0 iki 2.0): Kūrybiškumo rankenėlė

**Ką ji daro**: Kontroliuoja, kiek kūrybiški ar nuspėjami bus DI atsakymai.

**Panašu į džiazo muzikanto improvizacijos lygį:**
- **Temperatūra = 0.1**: Groja tą pačią melodiją kiekvieną kartą (labai nuspėjama)
- **Temperatūra = 0.7**: Įterpia subtilių variacijų, išlaikydama atpažįstamumą (subalansuotas kūrybiškumas)
- **Temperatūra = 1.5**: Visiškai eksperimentinis džiazas su netikėtais posūkiais (labai nenuspėjama)

```python
# Labai nuspėjami atsakymai (gerai faktiniams klausimams)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Beveik visada pasakys "4"
)

# Kūrybiški atsakymai (gerai idėjų generavimui)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Kūrims unikalias, netikėtas istorijas
)
```

#### Maksimalus žodžių skaičius (max tokens) (nuo 1 iki 4096+): Atsakymo ilgio valdytojas

**Ką jis daro**: Apriboja, kokio ilgio gali būti DI atsakymas.

**Tokenai yra maždaug žodžių atitikmuo** (apie 1 tokenas = 0,75 žodžio anglų kalba):
- **max_tokens=50**: Trumpas ir aiškus (kaip trumpa SMS žinutė)
- **max_tokens=500**: Graži pastraipa ar dvi
- **max_tokens=2000**: Išsamus paaiškinimas su pavyzdžiais

```python
# Trumpi, glausti atsakymai
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Priverčia pateikti trumpą paaiškinimą
)

# Išsamūs, visapusiški atsakymai
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Leidžia pateikti išsamius paaiškinimus su pavyzdžiais
)
```

#### Top_p (0.0 iki 1.0): Fokusavimo parametras

**Ką jis daro**: Kontroliuoja, kiek modelis dėmesio skiria tikimybėmis aukščiausiai reitinguojamiems žodžiams.

**Įsivaizduokite, kad DI turi milžinišką žodyną, kuriame žodžiai surikiuoti pagal tikimybę:**
- **top_p=0.1**: Apsvarsto tik 10% tikriausius žodžius (labai fokusuotas)
- **top_p=0.9**: Apsvarsto 90% galimų žodžių (kūrybiškesnis)
- **top_p=1.0**: Apsvarsto viską (maksimalus įvairovės lygis)

**Pavyzdžiui**: Klausiant „Dangus dažniausiai...“
- **Žemas top_p**: beveik visada sako „mėlynas“
- **Aukštas top_p**: gali sakyti „mėlynas“, „debesuotas“, „platus“, „besikeičiantis“, „gražus“ ir t. t.

### Viską apjungiant: parametrų deriniai skirtingiems naudojimams

```python
# Tikslūs, nuoseklūs atsakymai (pvz., dokumentacijos robotui)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Pagalba kūrybiniam rašymui
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Pokalbiški, naudingų atsakymų suteikimas (subalansuotas)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title DI parametru optimizavimo matrica
    x-axis Maža kūrybiškumas --> Didelė kūrybiškumas
    y-axis Trumpas atsakymas --> Ilgas atsakymas
    
    quadrant-1 Kūrybinis turinys
    quadrant-2 Išsamus analizė
    quadrant-3 Greitos faktai
    quadrant-4 Pokalbių DI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Kodėl šie parametrai svarbūs**: skirtingoms programoms reikalingi skirtingi atsakymų tipai. Klientų aptarnavimo robotas turėtų būti nuoseklus ir faktinis (žema temperatūra), o kūrybinio rašymo asistentas – vaizdingas ir įvairesnis (aukšta temperatūra). Šių parametrų supratimas suteikia kontrolę DI asmenybei ir atsakymų stiliui.
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

**Šios patobulintos funkcijos supratimas:**
- **Priima** du parametrus: vartotojo užklausą ir neprivalomą sistemos žinutę
- **Pateikia** numatytąją sistemos žinutę bendram asistento elgesiui
- **Naudoja** tinkamus Python tipo užuominas geresnei kodo dokumentacijai
- **Turi** detalią docstring su funkcijos paskirtimi ir parametrais
- **Grąžina** tik atsakymo turinį, kad būtų lengva naudoti mūsų interneto API
- **Laiko** tuos pačius modelio parametrus, kad DI elgesys būtų nuoseklus

### Sistemos užklausų magija: DI asmenybės programavimas

Jei parametrai reguliuoja, kaip DI „mąsto“, sistemos užklausos reguliuoja, kas DI „mano, kad yra“. Tai iš tiesų viena įdomiausių DI darbo dalių – jūs iš esmės suteikiate DI visą asmenybę, ekspertizės lygį ir komunikacijos stilių.

**Galvokite apie sistemos užklausas kaip apie skirtingų aktorių vaidmeninį paskyrimą**: vietoj vieno bendro asistento galite sukurti specializuotus ekspertus skirtingoms situacijoms. Reikia kantraus mokytojo? Kūrybiško idėjų generavimo partnerio? Rimto verslo patarėjo? Tiesiog pakeiskite sistemos užklausą!

#### Kodėl sistemos užklausos tokios galingos

Štai intriguojanti dalis: DI modeliai buvo apmokyti be galo daug pokalbių, kuriuose žmonės įsikūnija į skirtingus vaidmenis ir ekspertų lygius. Kai DI suteikiate konkretų vaidmenį, tai tarsi įjungiate jungiklį, kuris aktyvuoja visus tuos išmoktus šablonus.

**Tai panašu į metodo vaidybą DI**: Pasakykite aktoriui „tu esi išmintingas senas profesorius“ ir stebėkite, kaip jis automatiškai keičia laikyseną, žodyną ir manierą. DI daro kažką panašaus su kalbos šablonais.

#### Efektyvių sistemos užklausų meistrystė: menas ir mokslas

**Puikios sistemos užklausos anatomija:**
1. **Vaidmuo/tapatybė**: kas yra DI?
2. **Ekspertizė**: ką jis žino?
3. **Bendravimo stilius**: kaip jis kalba?
4. **Konkretūs nurodymai**: į ką turėtų atkreipti dėmesį?

```python
# ❌ Neaiški sistemos užklausa
"You are helpful."

# ✅ Išsami, veiksminga sistemos užklausa
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Sistemos užklausų pavyzdžiai su kontekstu

Pažiūrėkime, kaip skirtingos sistemos užklausos sukuria visiškai skirtingas DI asmenybes:

```python
# Pavyzdys 1: Kantrus Mokytojas
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Pavyzdys 2: Kūrybingas Bendradarbis
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Pavyzdys 3: Strateginis Verslo Patarėjas
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Sistemos užklausų veikimo pavyzdys

Išbandykime tą patį klausimą su skirtingomis sistemos užklausomis, kad pamatytume dramatiškus skirtumus:

**Klausimas**: „Kaip valdyti vartotojų autentifikavimą mano internetinėje programoje?“

```python
# Su mokytojo užklausa:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Tipinė atsakymas: „Puikus klausimas! Suskaidykime autentifikaciją į paprastus žingsnius.
# Galvokite apie tai kaip apie naktinio klubo apsaugininką, tikrinantį asmens dokumentus…“

# Su verslo užklausa:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Tipinė atsakymas: „Iš strateginės perspektyvos autentifikacija yra būtina vartotojų
# pasitikėjimui ir teisės aktų laikymuisi užtikrinti. Leiskite apibūdinti sistemą, atsižvelgiant į saugumą,
# vartotojo patirtį ir mastelį…“
```

#### Pažangios sistemos užklausų technikos

**1. Konteksto suteikimas**: suteikite DI foninę informaciją
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Išvesties formatavimas**: Nurodykite AI, kaip struktūruoti atsakymus  
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
  
**3. Apribojimų nustatymas**: Apibrėžkite, ką AI NETURI daryti  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### Kodėl tai svarbu jūsų pokalbių asistentui

Suprasdami sistemos užklausas, įgaunate nepaprastą galią kurti specializuotus AI asistentus:  
- **Klientų aptarnavimo botas**: naudingas, kantrus, išmanantis taisykles  
- **Mokymosi mokytojas**: skatinantis, žingsnis po žingsnio, tikrina supratimą  
- **Kūrybinis partneris**: vaizdingas, plėtoja idėjas, klausia „o jei?“  
- **Techninis ekspertas**: tikslus, detalus, saugumo sąmoningas  

**Pagrindinė įžvalga**: Jūs ne tik kviečiate AI API – jūs kuriate pritaikytą AI asmenybę, kuri tarnauja jūsų specifiniam poreikiui. Tai daro šiuolaikines AI programas pritaikytas ir naudingas, o ne bendrines.

### 🎯 Pedagoginis patikrinimas: AI asmenybės programavimas

**Sustokite ir apmąstykite**: Jūs ką tik išmokote programuoti AI asmenybes per sistemos užklausas. Tai esminis įgūdis šiuolaikinėje AI programų kūrime.

**Greitas savęs įvertinimas**:  
- Ar galite paaiškinti, kuo sistemos užklausos skiriasi nuo įprastinių vartotojo žinučių?  
- Kuo skiriasi temperature ir top_p parametrai?  
- Kaip sukurtumėte sistemos užklausą konkrečiam panaudojimo atvejui (pvz., kodavimo mokytojui)?

**Realus pasaulis**: Sistemos užklausų technikos, kurias išmokote, naudojamos kiekvienoje pagrindinėje AI programoje – nuo GitHub Copilot kodo pagalbos iki ChatGPT pokalbių sąsajos. Jūs įvaldote tuos pačius modelius, kuriuos naudoja AI produktų komandos didelėse technologijų įmonėse.

**Iššūkio klausimas**: Kaip galėtumėte sukurti skirtingas AI asmenybes skirtingiems vartotojams (pradedantiesiems vs ekspertams)? Apsvarstykite, kaip tas pats pagrindinis AI modelis galėtų aptarnauti skirtingas auditorijas per užklausų inžineriją.

## Kuriame Web API su FastAPI: jūsų aukšto našumo AI komunikacijos centras

Dabar sukurkime backend’ą, kuris sujungs jūsų frontend’ą su AI paslaugomis. Naudosime FastAPI – modernų Python karkasą, puikiai tinkančią kurti API AI programoms.

FastAPI suteikia kelias privalumas šio projekto tipui: įmontuota asinchroninė palaikymas vienu metu vykdant užklausas, automatinis API dokumentacijos generavimas ir puikus našumas. Jūsų FastAPI serveris veikia kaip tarpininkas, kuris gauna užklausas iš frontend’o, bendrauja su AI paslaugomis ir grąžina suformatuotus atsakymus.

### Kodėl FastAPI AI programoms?

Galbūt klausite: „Ar negaliu tiesiogiai kviesti AI iš savo frontend JavaScript?“ arba „Kodėl FastAPI vietoj Flask ar Django?“ Puikūs klausimai!

**Štai kodėl FastAPI puikiai tinka mūsų projektui:**  
- **Numatytas asinchroniškumas**: gali vienu metu apdoroti kelias AI užklausas be užstrigimų  
- **Automatinė dokumentacija**: aplankykite `/docs` ir gaukite gražią interaktyvią API dokumentaciją nemokamai  
- **Įmontuota validacija**: užkerta kelią klaidoms prieš jas sukeliant problemas  
- **Žaibiškas greitis**: vienas iš greičiausių Python karkasų  
- **Modernus Python**: naudoja naujausias Python funkcijas

**O štai kodėl mums iš viso reikia backend’o:**

**Saugumas**: Jūsų AI API raktas tarsi slaptažodis – jei įdėsite jį į frontend JavaScript, bet kas, peržiūrintis jūsų svetainės kodą, gali jį pavogti ir naudoti jūsų AI kreditus. Backend’as saugo konfidencialius duomenis.

**Ribojimas ir kontrolė**: Backend’as leidžia kontroliuoti, kaip dažnai vartotojai gali siųsti užklausas, įgyvendinti vartotojų autentifikaciją ir įtraukti žurnalus naudojimui stebėti.

**Duomenų apdorojimas**: Galbūt norėsite išsaugoti pokalbius, filtruoti netinkamą turinį ar apjungti kelias AI paslaugas. Kaip tik backend’e gyvena ši logika.

**Architektūra primena kliento ir serverio modelį:**  
- **Frontend**: vartotojo sąsajos sluoksnis sąveikai  
- **Backend API**: užklausų apdorojimo ir maršrutizavimo sluoksnis  
- **AI paslauga**: išorinė skaičiavimo ir atsakymų generavimo sistema  
- **Aplinkos kintamieji**: saugi konfigūracija ir autentifikacijos saugykla

### Suprasti užklausos-atsakymo srautą

Sekime, kas vyksta, kai vartotojas siunčia žinutę:

```mermaid
sequenceDiagram
    participant User as 👤 Vartotojas
    participant Frontend as 🌐 Frontendas
    participant API as 🔧 FastAPI Serveris
    participant AI as 🤖 DI Paslauga
    
    User->>Frontend: Įrašo "Sveikas DI!"
    Frontend->>API: POST /hello {"message": "Sveikas DI!"}
    Note over API: Patikrina užklausą<br/>Prideda sistemos užduotį
    API->>AI: Siunčia suformatuotą užklausą
    AI->>API: Grąžina DI atsakymą
    Note over API: Apdoroja atsakymą<br/>Registruoja pokalbį
    API->>Frontend: {"response": "Sveiki! Kaip galiu padėti?"}
    Frontend->>User: Rodo DI žinutę
```  
**Kiekvieno žingsnio supratimas:**  
1. **Vartotojo sąveika**: asmuo rašo pokalbių sąsajoje  
2. **Frontend apdorojimas**: JavaScript perima įvestį ir formatuoja ją kaip JSON  
3. **API validacija**: FastAPI automatiškai tikrina užklausą naudodamas Pydantic modelius  
4. **AI integracija**: backend’as prideda kontekstą (sistemos užklausą) ir kreipiasi į AI paslaugą  
5. **Atsakymo apdorojimas**: API gauna AI atsakymą ir gali jį pakeisti jei reikia  
6. **Frontend rodymas**: JavaScript parodo atsakymą pokalbių sąsajoje

### Suprasti API architektūrą

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Sveikas AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API užklausa
    GitHub Models->>AI Function: AI atsakymas
    AI Function->>FastAPI: atsakymo tekstas
    FastAPI->>Frontend: {"response": "Sveiki! Kaip galiu padėti?"}
```  
```mermaid
flowchart TD
    A[Vartotojo Įvestis] --> B[Frontend Tikrinimas]
    B --> C[HTTP POST Užklausa]
    C --> D[FastAPI Maršrutizatorius]
    D --> E[Pydantic Tikrinimas]
    E --> F[DI Funkcijos Kvietimas]
    F --> G[GitHub Modelių API]
    G --> H[Atsakymo Apdorojimas]
    H --> I[JSON Atsakymas]
    I --> J[Frontend Atnaujinimas]
    
    subgraph "Saugumo Sluoksnis"
        K[CORS Tarpinis Programinis Įrankis]
        L[Aplinkos Kintamieji]
        M[Klaidų Tvarkymas]
    end
    
    D --> K
    F --> L
    H --> M
```  
### FastAPI aplikacijos kūrimas

Kurkime API po žingsnio. Sukurkite failą `api.py` su žemiau pateiktu FastAPI kodu:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfigūruoti žurnalo fiksavimą
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Sukurti FastAPI programą
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfigūruoti CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Tinkamai sukonfigūruoti gamybai
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic modeliai užklausų/atsakymų tikrinimui
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
        # Išgauti ir patikrinti žinutę
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Iškvieti AI paslaugą (pastaba: call_llm turėtų būti asinchroninis geresniam našumui)
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
  
**FastAPI įgyvendinimo supratimas:**  
- **Importuoja** FastAPI moderniai žiniatinklio karkaso funkcijai ir Pydantic duomenų validavimui  
- **Sukuria** automatinę API dokumentaciją (pasiekiamą `/docs` serveriui veikiant)  
- **Įjungia** CORS tarpniąją programinę įrangą, leidžiančią frontend užklausas iš kitų šaltinių  
- **Apibrėžia** Pydantic modelius automatinei užklausų/atsakymų validacijai ir dokumentacijai  
- **Naudoja** asinchronines pabaigos taškų funkcijas geresniam našumui su keliomis užklausomis vienu metu  
- **Įgyvendina** tinkamas HTTP būsenos kodų atkirtį ir klaidų valdymą su HTTPException  
- **Įtraukia** struktūrizuotą žurnalavimą stebėjimui ir derinimui  
- **Turi** sveikatos patikros pabaigos tašką paslaugos būklei stebėti

**Pagrindiniai FastAPI pranašumai prieš tradicinius karkasus:**  
- **Automatinė validacija**: Pydantic modeliai užtikrina duomenų vientisumą prieš apdorojimą  
- **Interaktyvi dokumentacija**: aplankykite `/docs` dėl automatiškai sugeneruotos ir išbandomos API dokumentacijos  
- **Tipų sauga**: Python tipų anotacijos užkerta kelią vykdymo klaidoms ir gerina kodo kokybę  
- **Asinchroninis palaikymas**: vienu metu apdorokite kelias AI užklausas neblaškomai  
- **Našumas**: ženkliai greitesnis užklausų apdorojimas realaus laiko programoms

### Suprasti CORS: interneto saugos sargą

CORS (Cross-Origin Resource Sharing) yra tarsi saugos darbuotojas prie pastato, tikrinantis ar lankytojai gali įeiti. Pažiūrėkime, kodėl tai svarbu ir kaip tai veikia jūsų programą.

#### Kas yra CORS ir kodėl jis egzistuoja?

**Problema**: Įsivaizduokite, jei bet kuri svetainė galėtų jūsų vardu siųsti užklausas į jūsų banko svetainę be jūsų leidimo. Tai būtų saugumo košmaras! Naršyklės pagal numatytuosius nustatymus to neleidžia per „vienodos kilmės politiką“ (Same-Origin Policy).

**Vienodos kilmės politika**: Naršyklės leidžia tinklapiams siųsti užklausas tik į tą patį domeną, prievadą ir protokolą, iš kurio jie buvo įkelti.

**Realus analogas**: tai kaip daugiabučio saugumas – į pastatą gali patekti tik gyventojai (ta pati kilmė). Jei norite įleisti draugą (kita kilmė), turite saugumo darbuotojui aiškiai pasakyti, kad tai leidžiama.

#### CORS jūsų kūrimo aplinkoje

Kūrimo metu jūsų frontend ir backend veikia skirtinguose prievaduose:  
- Frontend: `http://localhost:3000` (arba file:// jei tiesiogiai atidarote HTML)  
- Backend: `http://localhost:5000`

Jie laikomi „skirtingomis kilmėmis“, nors ir yra tame pačiame kompiuteryje!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Tai nurodo naršyklėms: „Kiti šaltiniai gali siųsti užklausas šiam API“
```
  
**Ką CORS konfigūracija daro praktiškai:**  
- **Papildo** specialius HTTP antraštes API atsakymuose, kurios sako naršyklėms „ši kryžminė užklausa leidžiama“  
- **Tvarko** „pirmines“ užklausas (naršyklės kartais patikrina leidimus prieš siunčiant tikrą užklausą)  
- **Užkerta kelią** baisiajai naršyklės klaidai „užblokuota dėl CORS politikos“ jūsų konsolėje

#### CORS saugumas: kūrimas prieš gamybą

```python
# 🚨 Kūrimas: leidžia VISUS kilmės šaltinius (patogu, bet nesaugiau)
CORS(app)

# ✅ Produkcija: leisti tik jūsų konkretų frontend domeną
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Pažangiau: skirtingi kilmės šaltiniai skirtingoms aplinkoms
if app.debug:  # Kūrimo režimas
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Produkcijos režimas
    CORS(app, origins=["https://yourdomain.com"])
```
  
**Kodėl tai svarbu**: kūrimo metu `CORS(app)` yra kaip palikti prieangio duris atrakintas – patogu, bet nesaugu. Gamyboje norite tiksliai nurodyti, kurios svetainės gali naudotis jūsų API.

#### Dažnos CORS situacijos ir sprendimai

| Scenario               | Problema                    | Sprendimas                           |
|------------------------|-----------------------------|------------------------------------|
| **Vietinis kūrimas**    | Frontend negali pasiekti backend | Pridėti CORSMiddleware FastAPI      |
| **GitHub Pages + Heroku** | Diegtas frontend negali pasiekti API | Pridėti GitHub Pages URL į CORS kilmes |
| **Pasirinktas domenas** | CORS klaidos gamyboje          | Atnaujinti CORS kilmes, kad atitiktų jūsų domeną |
| **Mobilioji aplikacija** | Aplikacija negali pasiekti web API | Pridėti aplikacijos domeną arba atsargiai naudoti `*` |

**Pro patarimas**: galite patikrinti CORS antraštes naršyklės kūrėjo įrankiuose, skirtuke Tinklas (Network). Ieškokite antraščių, tokių kaip `Access-Control-Allow-Origin` atsake.

### Klaidos valdymas ir validacija

Atkreipkite dėmesį, kaip mūsų API apima tinkamą klaidų valdymą:

```python
# Patikrinkite, ar gavome pranešimą
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Pagrindiniai validacijos principai:**  
- **Tikrina** privalomus laukus prieš apdorojimą  
- **Grazina** prasmingas klaidų žinutes JSON formatu  
- **Naudoja** tinkamus HTTP būsenos kodus (400 – netinkama užklausa)  
- **Pateikia** aiškią grįžtamąją informaciją, padedančią frontend kūrėjams derinti problemas

## Backend’o paruošimas ir paleidimas

Dabar, kai turime AI integraciją ir FastAPI serverį, paleiskime viską. Įdiegimo procesas apima Python priklausomybių įdiegimą, aplinkos kintamųjų konfigūraciją ir vystymo serverio paleidimą.

### Python aplinkos paruošimas

Įrengsime jūsų Python vystymo aplinką. Virtualios aplinkos yra tarsi Manheteno projekto padalijimo principas – kiekvienas projektas turi savo izoliuotą erdvę su tam tikromis priemonėmis ir priklausomybėmis, išvengiant konfliktų tarp skirtingų projektų.

```bash
# Eikite į savo backend katalogą
cd backend

# Sukurkite virtualią aplinką (tarsi sukurtumėte švarią darbo erdvę savo projektui)
python -m venv venv

# Suaktyvinkite ją (Linux/Mac)
source ./venv/bin/activate

# Windows naudokite:
# venv\Scripts\activate

# Įdiekite reikalingas programas
pip install openai fastapi uvicorn python-dotenv
```
  
**Ką ką tik padarėme:**  
- **Sukūrėme** savo mažą Python burbulą, kur galime įdiegti paketus nepaveikdami nieko kito  
- **Aktyvavome** jį, kad terminalas žinotų naudoti šią aplinką  
- **Įdiegėme** svarbiausias priklausomybes: OpenAI AI magijai, FastAPI web API, Uvicorn serveriui ir python-dotenv saugiam slaptažodžių valdymui

**Svarbiausios priklausomybės paaiškintos:**  
- **FastAPI**: modernus, greitas žiniatinklio karkasas su automatine API dokumentacija  
- **Uvicorn**: žaibiškai greitas ASGI serveris, paleidžiantis FastAPI programas  
- **OpenAI**: oficiali biblioteka GitHub modeliams ir OpenAI API integracijai  
- **python-dotenv**: saugus aplinkos kintamųjų užkrovimas iš .env failų

### Aplinkos konfigūracija: slaptažodžių saugumas

Prieš pradedant API, aptarkime vieną svarbiausių pamokų žiniatinklio kūrime: kaip iš tiesų laikyti savo paslaptis saugias. Aplinkos kintamieji yra tarsi saugi seifo spinta, pasiekiama tik jūsų programai.

#### Kas yra aplinkos kintamieji?

**Įsivaizduokite aplinkos kintamuosius kaip saugumo seifą** – ten laikote savo vertybes ir tik jūs (ir jūsų programa) turite raktą į jas pasiekti. Vietoje to, kad rašytumėte konfidencialią informaciją tiesiogiai kode (ką gali matyti bet kas), ją saugote aplinkoje.

**Štai kuo tai skiriasi:**  
- **Neteisingas būdas**: užrašyti slaptažodį lipnia juostele ant monitoriaus  
- **Teisingas būdas**: laikyti slaptažodį saugiame slaptažodžių tvarkytuve, prie kurio turite tik jūs

#### Kodėl aplinkos kintamieji svarbūs

```python
# 🚨 NĖRAUKITE TAIP - API raktas matomas visiems
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Bet kas gali jį pavogti!
    base_url="https://models.github.ai/inference"
)

# ✅ DARYKITE TAIP - API raktas saugiai laikomas
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Tik jūsų programa gali prieiti prie jo
    base_url="https://models.github.ai/inference"
)
```
  
**Kas nutinka, kai slepiate paslaptis tiesiai kode:**  
1. **Versijų kontrolės nutekėjimas**: bet kas, turintis prieigą prie jūsų Git saugyklos, mato jūsų API raktą  
2. **Viešos saugyklos**: jei skelbiate GitHub, raktas matomas visam internetui  
3. **Komandos bendrinimas**: kiti projektuose dirbantys programuotojai gauna prieigą prie jūsų asmeninio API rakto  
4. **Saugumo pažeidimai**: jei kas nors pavogia jūsų raktą, gali naudoti jūsų AI kreditus

#### Kaip sukurti jūsų aplinkos failą

Sukurkite `.env` failą savo backend kataloge. Čia bus laikomos jūsų paslaptys vietoje:

```bash
# .env failas - Jo NEREIKIA niekada įtraukti į Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**.env failo supratimas:**  
- **Vienas slaptažodis eilutėje** formatu `KEY=value`  
- **Be tarpų** aplink lygybės ženklą  
- **Be kabučių** prie reikšmių (dažniausiai)  
- **Komentarai** prasideda nuo `#`

#### Kaip susikurti GitHub asmeninį prieigos tokeną

Jūsų GitHub tokenas yra tarsi specialus slaptažodis, leidžiantis jūsų programai naudotis GitHub AI paslaugomis:

**Žingsnis po žingsnio tokeno kūrimas:**  
1. Eikite į GitHub nustatymus → Developer settings → Personal access tokens → Tokens (classic)  
2. Spauskite „Generate new token (classic)“  
3. Nustatykite galiojimo laiką (30 dienų testavimui, ilgesnis gamybai)  
4. Pasirinkite teises: pažymėkite „repo“ ir kitas reikalingas  
5. Sukurkite tokeną ir iš karto nukopijuokite (nebus matomas vėl!)  
6. Įklijuokite jį į savo `.env` failą

```bash
# Pavyzdys, kaip atrodo jūsų žetonas (tai yra netikra!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### Aplinkos kintamųjų įkėlimas į Python

```python
import os
from dotenv import load_dotenv

# Įkelkite aplinkos kintamuosius iš .env failo
load_dotenv()

# Dabar galite juos saugiai pasiekti
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**Ką daro šis kodas:**  
- **Įkelia** jūsų .env failą ir daro kintamuosius prieinamus Python  
- **Tikrina**, ar būtinas tokenas yra (gera klaidų valdymo praktika!)  
- **Iškelia** aiškią klaidą, jeigu tokenas trūksta  
- **Naudoja** tokeną saugiai, neatskleidžiant kodo

#### Git saugumas: `.gitignore` failas

Jūsų `.gitignore` failas nurodo Git, kurių failų NIEKADA nereikia sekti ar įkelti:

```bash
# .gitignore - Pridėkite šias eilutes
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**Kodėl tai svarbu**: Kai įtraukiate `.env` į `.gitignore`, Git ignoruos jūsų aplinkos failą ir išvengsite atsitiktinio paslapčių įkėlimo į GitHub.

#### Skirtingos aplinkos, skirtingos paslaptys

Profesionalios programos naudoja skirtingus API raktus skirtingoms aplinkoms:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Kodėl tai svarbu**: Nenorite, kad jūsų kūrimo eksperimentai paveiktų gamybinį AI naudojimo limitą, ir norite skirtingo saugumo lygių skirtingose aplinkose.

### Vystymo serverio paleidimas: suteikiame gyvybę jūsų FastAPI


Dabar ateina įdomus momentas – paleisti savo FastAPI kūrimo serverį ir pamatyti, kaip jūsų AI integracija atgyja! FastAPI naudoja Uvicorn, žaibiškai greitą ASGI serverį, specialiai sukurtą asinchroninėms Python programoms.

#### FastAPI serverio paleidimo proceso supratimas

```bash
# Metodo 1: Tiesioginis Python vykdymas (įeina automatinis perkrovimas)
python api.py

# Metodo 2: Naudojant Uvicorn tiesiogiai (daugiau kontrolės)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kai vykdote šią komandą, užkulisiuose vyksta štai kas:

**1. Python įkrauna jūsų FastAPI programą**:
- Importuoja visas reikalingas bibliotekas (FastAPI, Pydantic, OpenAI ir kt.)
- Įkrauna aplinkos kintamuosius iš `.env` failo
- Sukuria FastAPI programos instanciją su automatine dokumentacija

**2. Uvicorn konfigūruoja ASGI serverį**:
- Prisijungia prie 5000 porto su asinchroninio užklausų apdorojimo galimybėmis
- Nustato užklausų maršrutus su automatine validacija
- Įjungia karštą perkrovimą kūrimo metu (perkrauna keičiant failus)
- Generuoja interaktyvią API dokumentaciją

**3. Serveris pradeda klausytis**:
- Jūsų terminalas rodo: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Serveris gali tvarkyti kelias lygiagrečias AI užklausas
- Jūsų API yra paruoštas su automatine dokumentacija adresu `http://localhost:5000/docs`

#### Ką turėtumėte pamatyti, kai viskas veikia

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**FastAPI išvesties supratimas:**
- **Stebės pakeitimus**: Įjungtas automatinis perkrovimas kūrimo režimui
- **Uvicorn veikia**: Veikia našus ASGI serveris
- **Pradėtas perkrovėjo procesas**: Failų stebėjimas automatinėms perkrovoms
- **Programa sėkmingai paleista**: FastAPI aplikacija inicijuota sėkmingai
- **Prieinami interaktyvūs dokumentai**: Apsilankykite `/docs` automatinės API dokumentacijos

#### FastAPI testavimo daugybė patogių būdų

FastAPI suteikia keletą patogių būdų testuoti API, įskaitant automatinę interaktyvią dokumentaciją:

**Būdas 1: Interaktyvi API dokumentacija (rekomenduojama)**
1. Atidarykite naršyklę ir eikite į `http://localhost:5000/docs`
2. Pamatysite Swagger UI su visais jūsų galinčiais endpointais
3. Paspauskite `/hello` → „Try it out“ → Įveskite testinę žinutę → „Execute“
4. Tiesiogiai naršyklėje pamatysite atsakymą su tinkamu formatavimu

**Būdas 2: Paprastas naršyklės testas**
1. Eikite į `http://localhost:5000` pagrindiniam endpointui
2. Eikite į `http://localhost:5000/health` serverio sveikatos patikrinimui
3. Tai patvirtina, kad jūsų FastAPI serveris veikia tinkamai

**Būdas 2: Testavimas komandų eilutėje (pažengusieji)**
```bash
# Išbandyti su curl (jei yra)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Tikėtinas atsakymas:
# {"response": "Sveiki! Aš esu jūsų AI asistentas. Kaip galiu jums padėti šiandien?"}
```

**Būdas 3: Python testavimo skriptas**
```python
# test_api.py - Sukurkite šį failą, kad išbandytumėte savo API
import requests
import json

# Išbandykite API galinį tašką
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Dažniausių paleidimo problemų trikčių šalinimas

| Klaidos pranešimas | Ką tai reiškia | Kaip ištaisyti |
|--------------------|----------------|---------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI neįdiegtas | Paleiskite `pip install fastapi uvicorn` savo virtualioje aplinkoje |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI serveris neįdiegtas | Paleiskite `pip install uvicorn` savo virtualioje aplinkoje |
| `KeyError: 'GITHUB_TOKEN'` | Nerastas aplinkos kintamasis | Patikrinkite savo `.env` failą ir `load_dotenv()` kvietimą |
| `Address already in use` | 5000 portas užimtas | Nutraukite kitus procesus, naudodamus 5000 portą, arba pakeiskite portą |
| `ValidationError` | Užklausos duomenys nesutampa su Pydantic modeliu | Patikrinkite, ar užklausos formatas atitinka reikalaujamą schemą |
| `HTTPException 422` | Neapdorojama reikšmė | Užklausos validacija nepavyko, patikrinkite `/docs` dėl teisingo formato |
| `OpenAI API error` | AI paslaugos autentifikacija nepavyko | Patikrinkite, ar jūsų GitHub tokenas teisingas ir turi reikiamas teises |

#### Kūrimo gerosios praktikos

**Karštasis perkrovimas**: FastAPI kartu su Uvicorn užtikrina automatinį perkrovimą, kai išsaugote pakeitimus Python failuose. Tai leidžia modifikuoti kodą ir iš karto testuoti be rankinio serverio perkrovimo.

```python
# Aiškiai įgalinti karštąjį perkrovimą
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True įgalina karštąjį perkrovimą
```

**Kūrimo metu logavimas**: Pridėkite logavimą, kad suprastumėte, kas vyksta:

```python
import logging

# Nustatyti žurnalo įrašymą
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

**Kodėl logavimas naudingas**: Kūrimo metu matote, kokios užklausos ateina, kokius atsakymus duoda AI ir kur kyla klaidos. Tai žymiai pagreitina klaidų taisymą.

### Konfigūravimas GitHub Codespaces: Debesų kūrimas lengvai

GitHub Codespaces yra kaip galingas kūrimo kompiuteris debesyje, prie kurio galite prisijungti iš bet kurios naršyklės. Dirbant Codespaces, reikia dar kelių papildomų žingsnių, kad backend’as būtų pasiekiamas frontend’ui.

#### Codespaces tinklo supratimas

Vietinėje kūrimo aplinkoje visa veikia tame pačiame kompiuteryje:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (arba file://)

Codespaces atveju jūsų kūrimo aplinka veikia GitHub serveriuose, tad „localhost“ turi kitą prasmę. GitHub automatiškai sukuria viešus URL jūsų paslaugoms, bet juos reikia tinkamai sukonfigūruoti.

#### Žingsnis po žingsnio Codespaces konfigūracija

**1. Paleiskite backend serverį**:
```bash
cd backend
python api.py
```

Pamatysite įprastą FastAPI/Uvicorn paleidimo pranešimą, tačiau serveris veikia Codespace aplinkoje.

**2. Suaktyvinkite porto matomumą**:
- VS Code apačioje raskite „Ports“ skirtuką
- Sąraše suraskite portą 5000
- Dešiniuoju pelės mygtuku spustelėkite portą 5000
- Pasirinkite „Port Visibility“ → „Public“

**Kodėl viešas?** Pagal nutylėjimą Codespace portai yra privatūs (pasiekiami tik jums). Viešas portas leidžia jūsų frontend’ui (vykstančiam naršyklėje) bendrauti su backend’u.

**3. Gautas viešas URL**:
Padarius portą viešu, pamatysite URL panašų į:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Atnaujinkite frontend konfigūraciją**:
```javascript
// Savo frontend app.js faile atnaujinkite BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Codespace URL supratimas

Codespace URL turi nuspėjamą struktūrą:
```
https://[codespace-name]-[port].app.github.dev
```

**Išskaidymas:**
- `codespace-name`: Unikalus jūsų Codespace identifikatorius (dažnai įtraukiantis vartotojo vardą)
- `port`: Porte, kuriuo veikia jūsų paslauga (5000 mūsų FastAPI aplikacijai)
- `app.github.dev`: GitHub domenas Codespace programoms

#### Codespace nustatymų testavimas

**1. Tiesioginis backend testas**:
Atidarykite savo viešą URL naujame naršyklės lange. Turėtumėte matyti:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testavimas su naršyklės kūrėjo įrankiais**:
```javascript
// Atidarykite naršyklės konsolę ir išbandykite savo API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces ir vietinio kūrimo palyginimas

| Aspektas             | Vietinis kūrimas                         | GitHub Codespaces                                   |
|----------------------|----------------------------------------|----------------------------------------------------|
| **Nustatymo laikas** | Ilgesnis (įdiegti Python, priklausomybes) | Akimirksniu (iš anksto sukonfigūruota aplinka)     |
| **URL prieiga**      | `http://localhost:5000`                 | `https://xyz-5000.app.github.dev`                   |
| **Porto konfigūracija** | Automatinė                            | Rankinė (viešumo suteikimas portams)                |
| **Failų išsaugojimas** | Vietinėje mašinoje                     | GitHub saugykloje                                  |
| **Bendradarbiavimas**| Sunku dalintis aplinka                  | Lengva dalintis Codespace nuoroda                   |
| **Interneto priklausomybė** | Tik AI API užklausoms             | Reikalingas visoms veikloms                         |

#### Codespace kūrimo patarimai

**Aplinkos kintamieji Codespace aplinkoje**:
Jūsų `.env` failas veikia taip pat kaip ir Codespaces, tačiau galite aplinkos kintamuosius nustatyti tiesiogiai Codespace aplinkoje:

```bash
# Nustatyti aplinkos kintamąjį dabartinei sesijai
export GITHUB_TOKEN="your_token_here"

# Arba pridėkite prie savo .bashrc, kad būtų išsaugota nuolat
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Portų valdymas**:
- Codespaces automatiškai aptinka, kai aplikacija pradeda klausytis porto
- Galite tuo pačiu metu perduoti kelis portus (naudingas pridedant duomenų bazę)
- Portai lieka pasiekiami, kol Codespace veikia

**Kūrimo darbo eiga**:
1. Pakeiskite kodą VS Code
2. FastAPI automatiškai perkraunamas (dėka Uvicorn reload režimo)
3. Iš karto testuokite per viešą URL
4. Įvykdykite commit ir push, kai pasiruošę

> 💡 **Naudingas patarimas**: Naršyklės žymelėje išsaugokite savo Codespace backend URL kūrimo metu. Kadangi Codespace pavadinimai yra stabilūs, URL nesikeis tol, kol naudosite tą patį Codespace.

## Sukuriame frontend pokalbio sąsają: kur žmonės susitinka su AI

Dabar kursime vartotojo sąsają – dalį, kuri nusako, kaip žmonės bendrauja su jūsų AI asistentu. Kaip ir originalaus iPhone dizainas, siekiame, kad sudėtinga technologija būtų intuityvi ir natūrali naudoti.

### Šiuolaikinės frontend architektūros supratimas

Mūsų pokalbio sąsaja bus vadinamoji „Vieno puslapio aplikacija“ (SPA). Vietoje senamadiško požiūrio, kai kiekvienas paspaudimas įkelia naują puslapį, mūsų aplikacija atsinaujina sklandžiai ir akimirksniu:

**Seni tinklalapiai**: Kaip skaityti popierinę knygą – perverčiate pilnai naujus puslapius  
**Mūsų pokalbio programa**: Kaip naudoti telefoną – viskas teka ir atsinaujina vientisai

```mermaid
graph TD
    A[Vartotojas Įveda Žinutę] --> B[JavaScript Fiksuoja Įvestį]
    B --> C[Tikrina ir Formatuoja Duomenis]
    C --> D[Siunčia į Backend API]
    D --> E[Rodo Krovimo Būseną]
    E --> F[Gautas AI Atsakymas]
    F --> G[Atnaujina Pokalbio Sąsają]
    G --> H[Pasiruošęs Kitai Žinutei]
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
    
    ChatApp --> DOM : manipuliuoja
    ChatApp --> FastAPI : siunčia užklausas
```
### Trys frontend kūrimo pamatiniai akmenys

Kiekviena frontend programa – nuo paprastų svetainių iki sudėtingų programų kaip Discord ar Slack – statoma ant trijų pagrindinių technologijų. Galvokite apie jas kaip apie pamatą viskam, ką matote ir su kuo bendraujate internete:

**HTML (struktūra)**: Tai jūsų pamatas  
- Nusako, kokie elementai egzistuoja (mygtukai, tekstinės sritys, konteineriai)  
- Suteikia turiniui prasmę (tai antraštė, tai forma ir pan.)  
- Kuria bazinę struktūrą, ant kurios visa kita statoma  

**CSS (išvaizda)**: Tai jūsų interjero dizaineris  
- Padaro viską gražų (spalvos, šriftai, išdėstymai)  
- Tvarko skirtingus ekranų dydžius (telefonas, nešiojamas kompiuteris, planšetė)  
- Kuria sklandžius animavimus ir vizualinį atsaką  

**JavaScript (elgsena)**: Tai jūsų smegenys  
- Reaguoja į vartotojų veiksmus (paspaudimus, rašymą, slinkimą)  
- Kalbasi su jūsų backend’u ir atnaujina puslapį  
- Padaro viską interaktyvų ir dinamišką

**Galvokite apie tai kaip architektūrinį dizainą:**  
- **HTML**: Struktūrinis brėžinys (nusakantis erdves ir jų tarpusavio santykius)  
- **CSS**: Estetinis ir aplinkos dizainas (vizualus stilius ir vartotojo patirtis)  
- **JavaScript**: Mechaninės sistemos (funkcionalumas ir interaktyvumas)

### Kodėl svarbi šiuolaikinė JavaScript architektūra

Mūsų pokalbio aplikacija naudos šiuolaikinius JavaScript modelius, kokius rasite profesionaliose programose. Supratimas apie juos padės jums tobulėti kaip programuotojui:

**Klasėmis pagrįsta architektūra**: Organizuojame kodą į klases, tarsi kūrimą objektų blueprint’us  
**Async/Await**: Modernus būdas tvarkyti ilgai trunkančias operacijas (pvz., API užklausas)  
**Įvykių varoma programa**: Aplikacija reaguoja į vartotojų veiksmus (paspaudimai, klavišų paspaudimai) vietoje nuolatinio ciklo  
**DOM manipuliavimas**: Dinamiškai atnaujina puslapio turinį pagal vartotojo veiksmus ir API atsakymus

### Projekto struktūros kūrimas

Sukurkite frontend katalogą su tokia struktūra:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Architektūros supratimas:**  
- **Atskiria** struktūros (HTML), elgsenos (JavaScript) ir išvaizdos (CSS) klausimus  
- **Išlaiko** paprastą failų struktūrą, kuri yra lengvai naviguojama ir keičiama  
- **Laikosi** geriausių interneto kūrimo praktikų organizavime ir palaikymui  

### Kuriame HTML pagrindą: semantinė struktūra prieinamumui

Pradėkime nuo HTML struktūros. Šiuolaikinis interneto kūrimas pabrėžia „semantinį HTML“ – naudojami HTML elementai, kurie aiškiai aprašo savo paskirtį, o ne tik išvaizdą. Tai leidžia jūsų programai būti prieinamai ekrano skaitytuvams, paieškos sistemoms ir kitiems įrankiams.

**Kodėl svarbus semantinis HTML**: Įsivaizduokite, kad telefonu aprašote savo pokalbio programą. Pasakytumėte: „yra antraštė su pavadinimu, pagrindinė dalis, kur vyksta pokalbiai, ir apačioje forma žinutėms rašyti.“ Semantinis HTML naudoja elementus, kurie atitinka šį natūralų aprašymą.

Sukurkite `index.html` su tokiu apgalvotu žymėjimu:

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

**Kiekvieno HTML elemento prasmės supratimas:**

#### Dokumento struktūra  
- **`<!DOCTYPE html>`**: Nurodo naršyklei, kad tai modernus HTML5  
- **`<html lang="en">`**: Nustato puslapio kalbą ekrano skaitytuvams ir vertimo įrankiams  
- **`<meta charset="UTF-8">`**: Užtikrina teisingą tarptautinio teksto koduotę  
- **`<meta name="viewport"...>`**: Leidžia puslapiui būti pritaikytam mobiliesiems įrenginiams kontroliuojant didinimą ir mastelį  

#### Semantiniai elementai  
- **`<header>`**: Aiškiai identifikuoja viršutinę dalį su pavadinimu ir aprašymu  
- **`<main>`**: Skiria pagrindinę turinio zoną (kur vyksta pokalbiai)  
- **`<form>`**: Semantiškai teisingas vartotojo įvedimui, leidžia tinkamai naudotis klaviatūra  

#### Prieinamumo ypatybės  
- **`role="log"`**: Nurodo ekrano skaitytuvams, kad ši zona yra chronologinis žinučių žurnalas  
- **`aria-live="polite"`**: Švelniai praneša apie naujas žinutes ekrano skaitytuvams nesutrumpindama pokalbio  
- **`aria-label`**: Suteikia aprašomuosius pavadinimus formos valdikliams  
- **`required`**: Naršyklė tikrina, kad vartotojas įvestų žinutę prieš siunčiant  

#### CSS ir JavaScript integracija  
- **`class` atributai**: Suteikia CSS stiliaus tikslus (pvz., `chat-container`, `input-group`)  
- **`id` atributai**: Leidžia JavaScript rasti ir manipuliuoti specifiniais elementais  
- **Skripto vieta**: JavaScript failas įkeliamas pabaigoje, todėl pirmiau įkeliama HTML  

**Kodėl ši struktūra veikia:**  
- **Loginė eiga**: Header → Pagrindinis turinys → Įvesties forma atitinka natūralią skaitymo tvarką  
- **Prieinamumas klaviatūra**: Vartotojai gali pereiti tarp visų interaktyvių elementų tab'u  
- **Draugiška ekrano skaitytuvams**: Aiškūs ženklai ir aprašymai regėjimo negalią turintiems vartotojams  
- **Mobiliesiems pritaikyta**: Viewport meta žyma įgalina atsakingą dizainą  
- **Progressyvus tobulinimas**: Veikia net jei CSS arba JavaScript nepavyksta įkelti

### Pridedame interaktyvų JavaScript: moderni interneto aplikacijos logika
Dabar sukurkime JavaScript, kuris suteiks mūsų pokalbių sąsajai gyvybės. Naudosime modernias JavaScript struktūras, su kuriomis susidursite profesionalioje interneto kūrimo praktikoje, įskaitant ES6 klases, async/await ir įvykių pagrindu veikiančią programavimo paradigmos.

#### Modernios JavaScript architektūros supratimas

Vietoje procedūrinio kodo rašymo (funkcijų sekos, kurios vykdomos viena po kitos), sukursime **klasėmis pagrįstą architektūrą**. Klasė yra tarsi planas objektų kūrimui – kaip architekto brėžinys, iš kurio galima pastatyti kelis namus.

**Kodėl naudoti klases interneto programoms?**
- **Organizacija**: Visa susijusi funkcionalumas surinktas kartu
- **Pakartotinis naudojimas**: Galite sukurti kelis pokalbių egzempliorius toje pačioje svetainėje
- **Priežiūra**: Lengviau taisyti klaidas ir keisti konkrečias funkcijas
- **Profesionalus standartas**: Šią struktūrą naudoja tokie karkasai kaip React, Vue ir Angular

Sukurkite `app.js` su šiuo moderniu, gerai struktūruotu JavaScript:

```javascript
// app.js - Modernios pokalbių programos logika

class ChatApp {
    constructor() {
        // Gaukite nuorodas į DOM elementus, kuriais reikės manipuliuoti
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Čia sukonfigūruokite savo backend URL
        this.BASE_URL = "http://localhost:5000"; // Atnaujinkite šią reikšmę savo aplinkai
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Įdiekite įvykių klausytojus, kai sukuriama pokalbių programa
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Klausykite formos pateikimo (kai vartotojas paspaudžia Siųsti arba Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Taip pat klausykite Enter klavišo įvesties lauke (geresnei naudotojo patirčiai)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Užkirsti kelią formai atnaujinti puslapį
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Nesiųskite tuščių žinučių
        
        // Suteikite vartotojui atsiliepimą, kad kažkas vyksta
        this.setLoading(true);
        
        // Nedelsiant pridėkite vartotojo žinutę į pokalbį (optimistinė sąsaja)
        this.appendMessage(messageText, "user");
        
        // Išvalykite įvesties lauką, kad vartotojas galėtų rašyti kitą žinutę
        this.input.value = '';
        
        try {
            // Iškvieskite AI API ir palaukite atsakymo
            const reply = await this.callAPI(messageText);
            
            // Pridėkite AI atsakymą į pokalbį
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Vėl įjunkite sąsają nepaisant sėkmės ar nesėkmės
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

// Inicializuokite pokalbių programą, kai puslapis užsikrauna
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Kiekvienos JavaScript sąvokos supratimas

**ES6 klasės struktūra**:
```javascript
class ChatApp {
    constructor() {
        // Tai vyksta kuriant naują ChatApp egzempliorių
        // Tai kaip "setup" funkcija jūsų pokalbiui
    }
    
    methodName() {
        // Metodai yra funkcijos, priklausančios klasei
        // Jos gali pasiekti klasės savybes naudodamos "this"
    }
}
```

**Async/Await modelis**:
```javascript
// Senas būdas (callback pragaras):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Modernus būdas (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Įvykių pagrindu veikianti programavimo paradigma**:
Vietoje nuolatinio tikrinimo, ar kažkas įvyko, mes „klausomės“ įvykių:
```javascript
// Kai pateikiama forma, paleiskite handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Kai paspaudžiamas Enter klavišas, taip pat paleiskite handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM manipuliacija**:
```javascript
// Kurti naujus elementus
const messageElement = document.createElement("div");

// Keisti jų savybes
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Pridėti prie puslapio
this.messages.appendChild(messageElement);
```

#### Saugumas ir geriausios praktikos

**XSS prevencija**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Tai automatiškai išveda HTML žymes
    return div.innerHTML;
}
```

**Kodėl tai svarbu**: Jei vartotojas įveda `<script>alert('hack')</script>`, ši funkcija užtikrina, kad tai būtų rodomas tekstas, o ne vykdomas kodas.

**Klaidų valdymas**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Rodyti vartotojui draugišką klaidą vietoj programos sustabdymo
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Vartotojo patirties aspektai**:
- **Optimizuota UI**: Nedelsiant prideda vartotojo žinutę, nelaukiant serverio atsakymo
- **Krovimosi būsena**: Išjungia mygtukus ir rodo „Siunčiama...“ kol laukiama atsakymo
- **Automatinis slinkimas**: Naujausios žinutės visada matomos
- **Įvesties validavimas**: Neišsiunčia tuščių žinučių
- **Klaviatūros sparčiosios klavišai**: Enter klavišas siunčia žinutes (kaip tikrose pokalbių programėlėse)

#### Programos srauto supratimas

1. **Puslapis įkeliamas** → suveikia `DOMContentLoaded` įvykis → sukuriama `new ChatApp()`
2. **Konstruktorius paleidžiamas** → gaunami DOM elementų referencijos → nustatomi įvykių klausytojai
3. **Vartotojas įveda žinutę** → paspaudžia Enter arba spusteli Siųsti → vykdoma `handleSubmit`
4. **handleSubmit** → tikrinama įvestis → rodomas krovimasis → kviečiamas API
5. **API atsako** → pridėti AI žinutę pokalbyje → įjungti sąsają
6. **Paruošta kitai žinutei** → vartotojas gali tęsti pokalbį

Ši architektūra yra plečiama – lengvai galėtumėte pridėti funkcijas, kaip žinučių redagavimas, failų siuntimas arba keli skirtingi pokalbių srautai, nesirašant pagrindinės struktūros iš naujo.

### 🎯 Pedagoginis patikrinimas: moderni frontend architektūra

**Architektūros supratimas**: Įgyvendinote pilną vieno puslapio programą naudodami modernias JavaScript struktūras. Tai atitinka profesionalaus lygio frontend kūrimą.

**Įvaldytos svarbiausios sąvokos**:
- **ES6 klasių architektūra**: organizuotas, lengvai prižiūrimas kodas
- **Async/Await modeliai**: modernus asinchroninis programavimas
- **Įvykių pagrindu veikianti programa**: reaguojantis vartotojo sąsajos dizainas
- **Saugumo geriausios praktikos**: XSS prevencija ir įvesties tikrinimas

**Pramonės ryšys**: Šios struktūros (klasės, asinchroniškumas, DOM manipuliacija) yra pagrindas tokiose sistemose kaip React, Vue ir Angular. Kurdami taip, galvojate kaip profesionalūs kūrėjai.

**Refleksijos klausimas**: Kaip išplėstumėte šią pokalbių programą, kad palaikytų kelis pokalbius ar vartotojų autentifikaciją? Apgalvokite, kokie architektūros pokyčiai reikalingi ir kaip vystytųsi klasių struktūra.

### Pokalbių sąsajos stilius

Dabar sukurkime modernią, vizualiai patrauklią pokalbių sąsają naudodami CSS. Geras dizainas suteikia programai profesionalumo ir gerina vartotojo patirtį. Naudosime šiuolaikines CSS galimybes kaip Flexbox, CSS Grid ir pasirinktines savybes, kad pasiektume jautrų ir prieinamą dizainą.

Sukurkite `styles.css` su šiais išsamiais stiliais:

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

**CSS architektūros supratimas:**
- **Naudoja** CSS pasirinktines savybes (kintamuosius) nuolatiniams stiliams ir lengvam palaikymui
- **Įgyvendina** Flexbox dizainą, kad būtų patogus įvairiuose įrenginiuose ir tinkamai suderintas turinys
- **Apima** sklandžias animacijas žinutėms, kad jos atsirastų nepertraukiamai
- **Suteikia** vizualinį skirtumą tarp vartotojo žinučių, AI atsakymų ir klaidų būsenų
- **Palaiko** atsako dizainą tiek staliniams, tiek mobiliems įrenginiams
- **Atsižvelgia** į prieinamumą, mažinant judėjimą ir užtikrinant tinkamus kontrastus
- **Siūlo** tamsų režimą pagal vartotojo sistemos pageidavimus

### Konfigūruojame savo backend URL

Paskutinis žingsnis – atnaujinti `BASE_URL` savo JavaScript taip, kad atitiktų jūsų backend serverį:

```javascript
// Vietiniam vystymui
this.BASE_URL = "http://localhost:5000";

// GitHub Codespaces naudoti (pakeiskite į savo faktinį URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Kaip nustatyti savo backend URL:**
- **Vietiniam vystymui**: naudokite `http://localhost:5000`, jei tiek frontend, tiek backend veikia vietoje
- **Codespaces**: raskite backend URL „Ports“ skiltyje, paskelbę portą 5000 viešai
- **Produkcijai**: pakeiskite į savo faktinį domeną diegdami į hostingą

> 💡 **Testavimo patarimas**: galite išbandyti savo backend tiesiog atidarydami pagrindinį URL naršyklėje. Turėtumėte matyti sveikinimo žinutę iš FastAPI serverio.



## Testavimas ir diegimas

Dabar, kai turite tiek frontend, tiek backend komponentus, išbandykime, ar visa sistema veikia kartu, ir aptarkime diegimo galimybes, kad savo pokalbių asistentą galėtumėte dalintis su kitais.

### Vietinis testavimas

Laikykitės šių veiksmų, kad išbandytumėte visą programėlę:

```mermaid
graph TD
    A[Pradėti Backend serverį] --> B[Sukurti aplinkos kintamuosius]
    B --> C[Ištestuoti API galinius taškus]
    C --> D[Atidaryti frontend naršyklėje]
    D --> E[Ištestuoti pokalbių funkcionalumą]
    E --> F[Debuginti klaidas]
```
**Žingsnis po žingsnio testavimo eiga:**

1. **Paleiskite savo backend serverį**:
   ```bash
   cd backend
   source venv/bin/activate  # arba venv\Scripts\activate Windows sistemoje
   python api.py
   ```

2. **Patikrinkite API veikimą**:
   - Atidarykite `http://localhost:5000` naršyklėje
   - Turėtumėte matyti sveikinimo žinutę iš savo FastAPI serverio

3. **Atidarykite frontend**:
   - Eikite į frontend katalogą
   - Atverkite `index.html` naršyklėje
   - Arba naudokite VS Code Live Server plėtinį patogesniam vystymui

4. **Išbandykite pokalbio funkcionalumą**:
   - Įveskite žinutę į laukelį
   - Spustelėkite „Siųsti“ arba paspauskite Enter
   - Patikrinkite, ar AI atsako tinkamai
   - Peržiūrėkite naršyklės konsolę klaidoms

### Dažniausios problemos ir jų sprendimas

| Problema | Simptomai | Sprendimas |
|---------|----------|----------|
| **CORS klaida** | Frontend negali pasiekti backend | Patikrinkite, ar FastAPI CORSMiddleware tinkamai sukonfigūruotas |
| **API raktas klaida** | 401 Unauthorized atsakymai | Patikrinkite, ar teisingai nustatytas `GITHUB_TOKEN` aplinkos kintamasis |
| **Prisijungimo klaida** | Tinklo klaidos frontend | Patikrinkite backend URL ir ar serveris veikia |
| **Nėra AI atsakymo** | Tušti arba klaidų atsakymai | Peržiūrėkite backend žurnalus dėl API limitų ar autentifikacijos problemų |

**Įprasti trikčių šalinimo žingsniai:**
- **Patikrina** naršyklės Developer Tools Console klaidas
- **Tikrinti** Network skirtuką dėl sėkmingų API užklausų ir atsakymų
- **Peržiūrėti** backend terminalo išvestį dėl Python klaidų ar API problemų
- **Patvirtinti**, kad aplinkos kintamieji yra tinkamai įkrauti ir pasiekiami

## 📈 Jūsų AI programų kūrimo meistriškumo laiko juosta

```mermaid
timeline
    title Pilnas DI programų kūrimo kelias
    
    section DI pagrindai
        Generatyvinio DI supratimas
            : Suprasti šablonų atpažinimo koncepcijas
            : Valdyti DI parametrus
            : Išmokti komandų kūrimo technikų
        
        GitHub modelių integracija
            : Naršyti DI paslaugų platformas
            : Saugiai tvarkyti autentifikavimą
            : Optimizuoti modelių parametrus
    
    section Backend kūrimas
        Python API architektūra
            : Kurti FastAPI programas
            : Įgyvendinti asinchronines operacijas
            : Kurti saugius galinius taškus
        
        DI paslaugų integracija
            : Prisijungti prie išorinių DI API
            : Tvarkyti užklausų ribojimą
            : Įgyvendinti klaidų ribas
    
    section Frontend meistriškumas
        Modernios JavaScript schemos
            : Valdyti ES6 klasių architektūrą
            : Įgyvendinti async/await srautus
            : Kurti jautrias sąsajas
        
        Realiojo laiko naudotojo patirtis
            : Kurti dinamiškas pokalbių sąsajas
            : Tvarkyti įkėlimo būsenas
            : Optimizuoti naudotojo sąveikas
    
    section Gamybinis pasirengimas
        Saugumas ir našumas
            : Įgyvendinti saugų žetonų valdymą
            : Užkirsti kelią XSS pažeidžiamumams
            : Optimizuoti API našumą
        
        Profesionalus diegimas
            : Kurti keičiamas architektūras
            : Rašyti palaikomą kodą
            : Dokumentuoti kūrimo procesus
```
**🎓 Baigiamoji šventė**: Jūs sėkmingai sukūrėte pilną AI varomą programą naudodami šias pačias technologijas ir architektūros modelius, kurie palaiko šiuolaikinius AI asistentus. Šios žinios yra tradicinės interneto kūrimo ir modernios AI integracijos sandūroje.

**🔄 Kitos galimybės**:
- Pasiruošę pažengti į išplėstines AI karkasų sistemas (LangChain, LangGraph)
- Gebate kurti multimodalines AI programas (tekstas, vaizdas, balsas)
- Mokate įgyvendinti vektorių duomenų bazes ir paieškos sistemas
- Turite pagrindus mašininiam mokymuisi ir AI modelių tobulinimui

## GitHub Copilot agento iššūkis 🚀

Naudokite agento režimą, kad atliktumėte šį iššūkį:

**Aprašymas:** Patobulinkite pokalbių asistentą pridėdami pokalbių istoriją ir žinučių saugojimą. Šis iššūkis padės suprasti, kaip valdyti būseną programėlėse ir įdiegti duomenų saugojimą, siekiant geresnės vartotojo patirties.

**Užduotis:** Pakeiskite pokalbių programą taip, kad įtrauktų pokalbių istoriją, kuri išlieka tarp sesijų. Pridėkite funkcionalumą išsaugoti žinutes vietinėje atmintyje, rodyti pokalbių istoriją įkeliant puslapį ir mygtuką „Išvalyti istoriją“. Taip pat įgyvendinkite rašymo indikatorius ir žinučių laiko žymes, kad pokalbis atrodytų realistiškiau.

Skaitykite daugiau apie [agent režimą](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## Užduotis: Sukurkite savo asmeninį AI asistentą

Dabar pats laikas sukurti savo AI asistento įgyvendinimą. Vietoje to, kad tiesiog pakartotumėte šio mokymo kodo pavyzdį, tai yra galimybė pritaikyti žinias, kuriant kažką, kas atspindi jūsų interesus ir poreikius.

### Projekto reikalavimai

Sutvarkykite projektą švaria ir organizuota struktūra:

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

### Pagrindinės įgyvendinimo užduotys

**Backend kūrimas:**
- **Paimkite** mūsų FastAPI kodą ir pritaikykite jį sau
- **Sukurkite** unikalią AI asmenybę – galbūt naudingą kulinarijos asistentą, kūrybinį rašymo partnerį ar mokymosi draugą?
- **Pridėkite** patikimą klaidų valdymą, kad programa nesugestų
- **Parašykite** aiškią dokumentaciją visiems, norintiems suprasti jūsų API veikimą

**Frontend kūrimas:**
- **Sukurkite** pokalbių sąsają, kuri būtų intuityvi ir maloni naudoti
- **Parašykite** švarų, modernų JavaScript, kuriuo galėsite didžiuotis prieš kitus programuotojus
- **Sukurkite** individualų dizainą, atspindintį jūsų AI asmenybę – linksmą ir spalvingą? Švarų ir minimalų? Viskas priklauso nuo jūsų!
- **Užtikrinkite**, kad programa gerai veiktų tiek telefonuose, tiek kompiuteriuose

**Personalizacijos reikalavimai:**
- **Pasirinkite** unikalų vardą ir asmenybę savo AI asistentui – gal kažką, kas atspindi jūsų interesus ar sprendžiamas problemas
- **Pritaikykite** vizualinį dizainą prie asistento įvaizdžio
- **Parašykite** įtraukiančią pasveikinimo žinutę, kuri skatintų pradėti pokalbį
- **Išbandykite** asistentą su įvairiais klausimais, kad pamatytumėte, kaip jis atsako

### Patobulinimų idėjos (pasirinktinai)

Norite projektą pakelti į aukštesnį lygį? Štai keletas smagių idėjų:

| Funkcija | Aprašymas | Įgūdžiai, kuriuos įgysite |
|---------|-------------|------------------------|
| **Žinučių istorija** | Įsiminti pokalbius net ir persikrovus puslapį | Darbas su localStorage, JSON pavertimu |
| **Rašymo indikatoriai** | Rodyti „AI rašo...“ laukiant atsakymų | CSS animacijos, asinchroninis programavimas |
| **Žinučių laiko žymės** | Rodyti kada buvo išsiųsta žinutė | Datos/laiko formatavimas, UX dizainas |
| **Pokalbio eksportas** | Leisti vartotojams atsisiųsti pokalbį | Failų tvarkymas, duomenų eksportas |
| **Tema keitimas** | Šviesus/tamsus režimas perjungimo mygtukas | CSS kintamieji, vartotojo pageidavimai |
| **Balso įvestis** | Pridėti balso į tekstą funkcionalumą | Web API, prieinamumas |

### Testavimas ir dokumentacija

**Kokybės užtikrinimas:**
- **Išbandykite** programą su įvairiais įvedimo tipais ir kraštutiniais atvejais
- **Įsitikinkite**, kad dizainas reaguoja skirtinguose ekranų dydžiuose
- **Patikrinkite** prieinamumą klaviatūros navigacijai ir ekrano skaitytuvams
- **Patikrinkite** HTML ir CSS atitiktį standartams

**Dokumentacijos reikalavimai:**
- **Parašykite** README.md, kuriame paaiškinta jūsų projekto esmė ir kaip jį paleisti
- **Įtraukite** ekrano kopijas, kuriose matoma pokalbių sąsaja veikiančioje programoje
- **Dokumentuokite** unikalias funkcijas ar pritaikymus, kuriuos įdiegėte
- **Pateikite** aiškias diegimo instrukcijas kitiems programuotojams

### Pateikimo taisyklės

**Projekto pristatymas:**
1. Pilnas projekto katalogas su visais šaltiniais
2. README.md su projekto aprašymu ir diegimo instrukcijomis
3. Ekrano nuotraukos, demonstruojančios jūsų pokalbių asistentą
4. Trumpa refleksija apie išmoktas pamokas ir patirtus iššūkius

**Vertinimo kriterijai:**
- **Funkcionalumas**: Ar pokalbių asistentas veikia pagal lūkesčius?
- **Kodo kokybė**: Ar kodas gerai struktūruotas, komentuotas ir prižiūrimas?
- **Dizainas**: Ar sąsaja estetiška ir patogi naudoti?
- **Kūrybiškumas**: Kaip unikalus ir suasmenintas jūsų įgyvendinimas?
- **Dokumentacija**: Ar diegimo instrukcijos aiškios ir pilnos?

> 💡 **Sėkmės patarimas**: Pirmiausia susikoncentruokite į pagrindinius reikalavimus, tada pridėkite patobulinimus, kai pagrindas veikia sklandžiai. Siekite tvarkingai veikiančios esminės patirties prieš eidami prie pažangių funkcijų.

## Sprendimas

[Sprendimas](./solution/README.md)

## Papildomi iššūkiai

Norite kilti dar aukščiau su savo AI asistentu? Pabandykite šiuos pažangius iššūkius, kurie praplės jūsų AI integracijos ir interneto kūrimo žinias.

### Asmenybės pritaikymas

Tikroji magija prasideda, kai suteikiate savo AI asistentui unikalų charakterį. Eksperimentuokite su skirtingomis sistemos užklausomis, kurdami specializuotus asistentus:

**Profesionalaus asistento pavyzdys:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Kūrybinio rašymo pagalbininko pavyzdys:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Techninio mentoriaus pavyzdys:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Frontendo patobulinimai

Transformuokite savo pokalbių sąsają su šiomis vizualinėmis ir funkcionaliomis naujovėmis:

**Pažangios CSS savybės:**
- **Įgyvendinkite** sklandžias žinučių animacijas ir perėjimus
- **Pridėkite** individualius pokalbių burbuliukų dizainus su CSS formomis ir gradientais
- **Sukurkite** rašymo indikatoriaus animaciją, kai AI „galvoja“
- **Sukurkite** emocijų reakcijos ar žinučių įvertinimo sistemą

**JavaScript patobulinimai:**
- **Pridėkite** klaviatūros sparčiuosius klavišus (Ctrl+Enter siųsti, Escape išvalyti įvestį)
- **Įdiegtite** žinučių paiešką ir filtravimą
- **Sukurkite** pokalbių eksporto funkciją (atsisiuntimas kaip tekstas ar JSON)
- **Pridėkite** automatinį išsaugojimą į localStorage kad neprarastumėte žinučių

### Pažangi AI integracija

**Daugiau AI asmenybių:**
- **Sukurkite** išplečiamą meniu perjungti skirtingas AI asmenybes
- **Išsaugokite** vartotojo pageidaujamą asmenybę localStorage
- **Įgyvendinkite** konteksto perjungimą, kuris palaiko pokalbio eigą

**Išmanios atsakymų funkcijos:**
- **Pridėkite** pokalbių konteksto atmintį (AI prisimena ankstesnes žinutes)
- **Įgyvendinkite** protingus pasiūlymus pagal pokalbio temą  
- **Sukurkite** greito atsakymo mygtukus dažniausiai užduodamiems klausimams

> 🎯 **Mokymosi tikslas**: Šie papildomi iššūkiai padeda suprasti pažangius interneto kūrimo modelius ir DI integracijos technikas, kurios naudojamos gamybos programose.

## Santrauka ir tolesni žingsniai

Sveikiname! Jūs sėkmingai sukūrėte visą DI varomą pokalbių asistentą nuo nulio. Šis projektas suteikė jums praktinės patirties su moderniomis interneto kūrimo technologijomis ir DI integracija – įgūdžiai, kurie tampa vis svarbesni šiandieninėje technologijų srityje.

### Ką jūs pasiekėte

Per šią pamoką jūs įvaldėte keletą svarbių technologijų ir koncepcijų:

**Back-end kūrimas:**  
- **Integravote** su GitHub Models API DI funkcionalumui  
- **Sukūrėte** RESTful API naudojant Flask su tinkamu klaidų valdymu  
- **Įgyvendinote** saugų autentifikavimą naudojant aplinkos kintamuosius  
- **Sukonfigūravote** CORS tarp frontendo ir backendo kryžminiams užklausoms

**Front-end kūrimas:**  
- **Sukūrėte** reaguojančią pokalbių sąsają naudojant semantinį HTML  
- **Įgyvendinote** modernų JavaScript su async/await ir klasių architektūra  
- **Sukūrėte** patrauklią naudotojo sąsają su CSS Grid, Flexbox ir animacijomis  
- **Pridėjote** prieinamumo funkcijas ir reagavimo įrenginiuose principus

**Pilno sprendimo integracija:**  
- **Sujungėte** front-end ir back-end per HTTP API užklausas  
- **Tvarkėte** realaus laiko naudotojo sąveikas ir asinkroninį duomenų srautą  
- **Įgyvendinote** klaidų valdymą ir naudotojo grįžtamąjį ryšį visoje programoje  
- **Išbandėte** visą programos darbo eigą nuo naudotojo įvesties iki DI atsakymo

### Pagrindinės mokymosi išvados

```mermaid
mindmap
  root((Dirbtinio intelekto pokalbių programėlės įgūdžiai))
    API Integracija
      Autentifikacija
      Klaidu tvarkymas
      Asinchroninis programavimas
    Tinklapių kūrimas
      HTML5 semantika
      Modernus CSS
      ES6+ JavaScript
    Vartotojo patirtis
      Reaguojantis dizainas
      Prieinamumas
      Realiojo laiko sąveika
    Dirbtinis intelektas
      Komandų kurimas
      Modelio parametrai
      Pokalbio eiga
```  
Šis projektas pristatė jums pagrindus, kaip kurti DI varomas programas, kurios atspindi interneto kūrimo ateitį. Dabar suprantate, kaip integruoti DI galimybes į tradicines interneto programas, kuriant patrauklias vartotojo patirtis, kurios atrodo protingos ir atsako greitai.

### Profesionalios taikymo sritys

Šios pamokos metu įgyti įgūdžiai tiesiogiai pritaikomi moderniose programinės įrangos kūrimo karjerose:

- **Pilno sprendimo interneto kūrimas** naudojant modernius karkasus ir API  
- **DI integracija** interneto programose ir mobiliosiose programėlėse  
- **API dizainas ir vystymas** mikroservisų architektūrose  
- **Vartotojo sąsajų kūrimas** su dėmesiu prieinamumui ir reagavimo dizainui  
- **DevOps praktikos** įskaitant aplinkos konfigūravimą ir diegimą

### Tęskite savo DI kūrimo kelionę

**Tolesni mokymosi žingsniai:**  
- **Tyrinėkite** pažangesnius DI modelius ir API (GPT-4, Claude, Gemini)  
- **Išmokite** pranešimų kūrimo technikas geresniems DI atsakymams  
- **Studijuokite** pokalbių dizainą ir chatbot naudotojo patirties principus  
- **Tyrinėkite** DI saugumą, etiką ir atsakingo DI vystymo praktikas  
- **Kurkite** sudėtingesnes programas su pokalbių atmintimi ir konteksto supratimu

**Pažangūs projektų idėjos:**  
- Daugelio naudotojų pokalbių kambariai su DI moderavimu  
- DI varomi klientų aptarnavimo chatbotai  
- Švietimo konsultavimo asistentai su personalizuotu mokymusi  
- Kūrybiško rašymo bendrininkai su skirtingomis DI asmenybėmis  
- Techninės dokumentacijos asistentai kūrėjams

## Kaip pradėti su GitHub Codespaces

Norite išbandyti šį projektą debesijos kūrimo aplinkoje? GitHub Codespaces suteikia pilną kūrimo aplinką jūsų naršyklėje, idealiai tinka eksperimentuoti su DI programomis be vietinės aplinkos konfigūracijos reikalavimų.

### Kaip sukonfigūruoti savo kūrimo aplinką

**1 žingsnis: Sukurkite iš šablono**  
- **Eikite į** [Web Dev For Beginners saugyklą](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Spauskite** „Use this template“ viršutiniame dešiniajame kampe (įsitikinkite, kad esate prisijungę prie GitHub)

![Sukūrimo iš šablono sąsaja su žaliu mygtuku "Use this template"](../../../translated_images/lt/template.67ad477109d29a2b.png)

**2 žingsnis: Paleiskite Codespaces**  
- **Atidarykite** ką tik sukurtą saugyklą  
- **Paspauskite** žalią "Code" mygtuką ir pasirinkite "Codespaces"  
- **Pasirinkite** "Create codespace on main" pradėti kūrimo aplinką

![Codespace kūrimo sąsaja su pasirinkimais debesijos kūrimo aplinkai paleisti](../../../translated_images/lt/codespace.bcecbdf5d2747d3d.png)

**3 žingsnis: Aplinkos konfigūracija**  
Kai Codespace pasikrauna, turėsite prieigą prie:  
- **Iš anksto įdiegtų** Python, Node.js ir visų reikalingų kūrimo įrankių  
- **VS Code sąsajos** su plėtiniais interneto kūrimui  
- **Terminalo prieigos** paleisti back-end ir front-end serverius  
- **Uostų persiuntimo** testuoti savo programas

**Ką suteikia Codespaces:**  
- **Pašalina** vietinės aplinkos diegimo ir konfigūravimo problemas  
- **Suteikia** nuoseklią kūrimo aplinką įvairiuose įrenginiuose  
- **Įtraukia** iš anksto sukonfigūruotus įrankius ir plėtinius interneto kūrimui  
- **Siūlo** sklandžią integraciją su GitHub versijų valdymui ir bendradarbiavimui

> 🚀 **Profesionalus patarimas**: Codespaces puikiai tinka mokytis ir prototipuoti DI programas, nes automatiškai tvarko visas sudėtingas aplinkos konfigūracijas, leidžiant jums susitelkti į kūrimą ir mokymąsi, o ne į konfigūracijos trikčių šalinimą.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turi būti laikomas autoritetingu šaltiniu. Esant svarbiai informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar klaidingą interpretaciją, kilusią dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->