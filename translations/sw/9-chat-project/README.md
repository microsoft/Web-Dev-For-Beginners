<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T01:18:46+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sw"
}
-->
# Jenga Msaidizi wa Chat kwa AI

Kumbuka kwenye Star Trek wanapotumia mazungumzo ya kawaida na kompyuta ya meli, wakimuuliza maswali magumu na kupata majibu yenye fikira? Kinachokuwa kama hadithi ya sayansi katika miaka ya 1960 sasa ni kitu ambacho unaweza kujenga kwa kutumia teknolojia za wavuti unazozijua tayari.

Katika somo hili, tutaunda msaidizi wa AI wa mazungumzo kwa kutumia HTML, CSS, JavaScript, na muunganisho wa nyuma. Utagundua jinsi ujuzi ule ule ambao umekuwa ukijifunza unaweza kuunganishwa na huduma zenye nguvu za AI ambazo zinaweza kuelewa muktadha na kutoa majibu yenye maana.

Fikiria AI kama kuwa na upatikanaji wa maktaba kubwa ambayo si tu inatafuta taarifa bali pia inaunda majibu yaliyo na maelezo yaliyounganishwa na maswali yako maalum. Badala ya kutafuta kupitia maelfu ya kurasa, unapata majibu ya moja kwa moja na yenye muktadha.

Muunganisho hufanyika kupitia teknolojia za wavuti zinazojulikana zinazofanya kazi pamoja. HTML huunda kiolesura cha mazungumzo, CSS hushughulikia muundo wa kuona, JavaScript inasimamia mwingiliano wa mtumiaji, na API ya nyuma inaunganisha kila kitu na huduma za AI. Hii ni sawa na jinsi sehemu tofauti za orkesta zinavyofanya kazi pamoja kuunda sinfonia.

Kwa msingi, tunajenga daraja kati ya mawasiliano ya asili ya binadamu na usindikaji wa mashine. Utajifunza utekelezaji wa kiufundi wa muunganisho wa huduma za AI na mifumo ya muundo inayofanya mwingiliano hisike kwa njia ya asili.

Mwisho wa somo hili, muunganisho wa AI utakuhisi si kama mchakato wa ajabu bali kama API nyingine unayoweza kutumia. Utatafuta mifumo ya msingi inayochochea programu kama ChatGPT na Claude, ukitumia kanuni zile zile za maendeleo ya wavuti ulizojifunza.

## ⚡ Unaweza Kufanya Nini Katika Dakika 5 Zijazo

**Njia ya Kuanzisha Haraka kwa Waendelezaji Walioko Mbusy**

```mermaid
flowchart LR
    A[⚡ Dakika 5] --> B[Pata tokeni ya GitHub]
    B --> C[Jaribu uwanja wa michezo wa AI]
    C --> D[Nakili msimbo wa Python]
    D --> E[Tazama majibu ya AI]
```
- **Dakika 1**: Tembelea [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) na tengeneza tokeni ya upatikanaji binafsi
- **Dakika 2**: Jaribu mwingiliano wa AI moja kwa moja kwenye kiolesura cha playground
- **Dakika 3**: Bonyeza kichupo cha "Code" na nakili kipande cha Python
- **Dakika 4**: Endesha msimbo kwa ndani kwa kutumia tokeni yako: `GITHUB_TOKEN=your_token python test.py`
- **Dakika 5**: Tazama jibu lako la kwanza la AI likiundwa kutoka kwa msimbo wako mwenyewe

**Msimbo wa Jaribio la Haraka**:
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

**Kwa Nini Hii ni Muhimu**: Ndani ya dakika 5, utaona uchawi wa mwingiliano wa AI kwa programu. Hii inaonyesha kizuizi cha msingi kinachochochea kila programu ya AI unayotumia.

Hivi ndivyo mradi wako utakavyoonekana umemalizika:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/sw/screenshot.0a1ee0d123df681b.webp)

## 🗺️ Safari Yako ya Kujifunza Kupitia Maendeleo ya Programu za AI

```mermaid
journey
    title Kutoka Maendeleo ya Wavuti hadi Muunganiko wa AI
    section Kuelewa Misingi ya AI
      Gundua dhana za AI inayotengeneza: 4: You
      Chunguza jukwaa la Models la GitHub: 6: You
      Kamilisha vigezo na maagizo ya AI: 8: You
    section Muunganiko wa Backend
      Jenga seva ya API ya Python: 5: You
      Tekeleza simu za kazi za AI: 7: You
      Shughulikia shughuli zisizo za wakati mmoja: 8: You
    section Maendeleo ya Mbele (Frontend)
      Tengeneza interface ya mazungumzo ya kisasa: 6: You
      Kamilisha mwingiliano wa wakati halisi: 8: You
      Jenga uzoefu wa mtumiaji unaojibu: 9: You
    section Maombi ya Kitaalamu
      Tumia mfumo kamili wa AI: 7: You
      Boresha mifumo ya utendaji: 8: You
      Tengeneza app inayostahili uzalishaji: 9: You
```
**Hatua Yako ya Mwisho**: Mwisho wa somo hili, utakuwa umejenga programu kamilifu inayotumia AI kwa kutumia teknolojia na mifumo ileile inayochochea wasaidizi wa AI wa kisasa kama ChatGPT, Claude, na Google Bard.

## Kuelewa AI: Kutoka Shaka hadi Utaalamu

Kabla ya kuingia kwenye msimbo, hebu kuelewa tunafanya kazi na nini. Ikiwa umewahi kutumia API hapo awali, unajua muundo wa msingi: tuma ombi, pokea jibu.

API za AI hufuata muundo ule ule, lakini badala ya kupata data iliyohifadhiwa tayari kutoka kwa hifadhidata, zinatengeneza majibu mapya kulingana na mifumo iliyojifunza kutoka kwa maandishi mengi sana. Fikiria kama tofauti kati ya mfumo wa katalogi wa maktaba na mkutubi mwenye maarifa anayeweza kuchanganya taarifa kutoka vyanzo vingi.

### Nini Ni "AI Inayozalisha" Kweli?

Fikiria jinsi Jiwe la Rosetta lilivyoruhusu wataalamu kuelewa hieroglyphics za Misri kwa kutafuta mifumo kati ya lugha zinazoeleweka na zisizoeleweka. Mifano ya AI hufanya jambo kama hilo – huita patterns kutoka kwa maandishi mengi kuelewa jinsi lugha inavyofanya kazi, halafu hutumia mifano hiyo kutengeneza majibu yanayofaa kwa maswali mapya.

**Hebu niifafanue kwa kulinganisha rahisi:**
- **Hifadhidata ya kawaida**: Kama kuomba cheti chako cha kuzaliwa – unapata hati ile ile kila wakati
- **Mfumo wa utafutaji**: Kama kumuomba mkutubi kupata vitabu kuhusu paka – wanaonyesha kinachopatikana
- **AI Inayozalisha**: Kama kumuuliza rafiki mwenye maarifa kuhusu paka – wanakuambia mambo ya kuvutia kwa maneno yao wenyewe, yaliyobinafsishwa kwa kile unachotaka kujua

```mermaid
graph LR
    A[Swali Lako] --> B[Mfano wa AI]
    B --> C[Utambuzi wa Mifumo]
    C --> D[Uundaji wa Yaliyomo]
    D --> E[Jibu la Muktadha]
    
    F[Data ya Mafunzo<br/>Vitabu, Makala, Tovuti] --> B
```
### Jinsi Mifano ya AI Hujifunza (Toleo Rahisi)

Mifano ya AI hujifunza kupitia kufundishwa na seti kubwa za data zinazojumuisha maandishi kutoka vitabu, makala, na mazungumzo. Kupitia mchakato huu, hutambua mifumo katika:
- Jinsi mawazo yanavyopangwa katika mawasiliano yaliyoandikwa
- Ni maneno gani yanayotokea pamoja mara kwa mara
- Jinsi mazungumzo huendelea kawaida
- Tofauti za muktadha kati ya mawasiliano rasmi na yasiyo rasmi

**Hii ni sawa na jinsi wanasayansi wa kale wanavyofasiri lugha za zamani**: huchambua maelfu ya mifano kuelewa sarufi, msamiati, na muktadha wa kitamaduni, na hatimaye kuwa na uwezo wa kutafsiri maandishi mapya kwa kutumia mifumo hiyo iliyojifunza.

### Kwa Nini GitHub Models?

Tunatumia GitHub Models kwa sababu ya kiutendaji – inatupa upatikanaji wa AI ya viwango vya biashara bila kuanzisha miundombinu yetu ya AI (ambayo, niamini, hutaki kufanya sasa hivi!). Fikiria kama kutumia API ya hali ya hewa badala ya kujaribu kutabiri hali ya hewa mwenyewe kwa kuweka vituo vya hali ya hewa kila mahali.

Hii ni "AI kama Huduma," na sehemu nzuri ni kwamba ni bure kuanza, hivyo unaweza kujaribu bila wasiwasi wa gharama kubwa.

```mermaid
graph LR
    A[UI ya Chat ya Mbele] --> B[API Yako ya Backend]
    B --> C[API za Mfano wa GitHub]
    C --> D[Usindikaji wa Mfano wa AI]
    D --> C
    C --> B
    B --> A
```
Tutatumia GitHub Models kwa muunganisho wetu wa nyuma, inayotoa upatikanaji wa uwezo wa AI wa kiwango cha kitaalamu kupitia kiolesura kinachopendelewa na waendelezaji. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) ni mazingira ya majaribio ambapo unaweza kujaribu mifano tofauti ya AI na kuelewa uwezo wake kabla ya kuitekeleza katika msimbo.

## 🧠 Mfumo wa Maendeleo ya Programu za AI

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
**Kanuni Msingi**: Maendeleo ya programu za AI yanachanganya ujuzi wa maendeleo ya wavuti wa kawaida na muunganisho wa huduma za AI, kuunda programu za akili zinazohisi kuwa za asili na zinazojibu watumiaji vizuri.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/sw/playground.d2b927122224ff8f.webp)

**Hapa ni kinachofanya playground kuwa muhimu:**
- **Jaribu** mifano tofauti ya AI kama GPT-4o-mini, Claude, na mingine (zote ni bure!)
- **Testi** mawazo yako na maelekezo kabla hujaandika msimbo wowote
- **Pata** vipande vya msimbo vinavyotumika moja kwa moja kwa lugha unayopendelea ya programu
- **Boresha** mipangilio kama kiwango cha ubunifu na urefu wa jibu kuona jinsi zinavyoathiri matokeo

Baada ya kucheza kidogo, bonyeza kichupo cha "Code" na chagua lugha yako ya programu kupata msimbo wa utekelezaji utakao hitajiwa.

![Playground choice showing code generation options for different programming languages](../../../translated_images/sw/playground-choice.1d23ba7d407f4758.webp)

## Kuanzisha Muunganisho wa Backend wa Python

Sasa tutaweka muunganisho wa AI kwa kutumia Python. Python ni nzuri kwa programu za AI kwa sababu ya sarufi yake rahisi na maktaba zenye nguvu. Tutaanza na msimbo kutoka GitHub Models playground kisha tuurekebishe ili kuwa kazi inayoweza kutumika tena na tayari kwa uzalishaji.

### Kuelewa Utekelezaji wa Msingi

Unapopata msimbo wa Python kutoka playground, utapata kitu kinachofanana na hiki. Usijali kama kinaonekana kuwa kingi mwanzoni – tuitakaye kidogo kidogo:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Ili kuthibitisha na modeli utahitaji kuunda tokeni ya upatikanaji binafsi (PAT) kwenye mipangilio yako ya GitHub.
# Unda tokeni yako ya PAT kwa kufuata maelekezo hapa: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Hivi ndivyo msimbo unavyofanya:**
- **Tunachukua** zana tunazohitaji: `os` kusoma mazingira ya mabadiliko na `OpenAI` kuzungumza na AI
- **Tunaanzisha** mteja wa OpenAI kuelekea seva za AI za GitHub badala ya OpenAI moja kwa moja
- **Tunathibitisha** kwa kutumia tokeni maalum ya GitHub (zaidi kuhusu hayo baadae!)
- **Tunapanga** mazungumzo yetu na "maudhi" tofauti – fikiria kama kuweka onyesho kwa tamthilia
- **Tunatuma** ombi letu kwa AI na baadhi ya vigezo vya kufinyanga
- **Tunachukua** maandishi halisi ya jibu kutoka kwenye data yote inayorudi

### Kuelewa Nafasi za Ujumbe: Mfumo wa Mazungumzo wa AI

Mazungumzo ya AI hutumia muundo maalum wenye “maudhi” tofauti yenye majukumu tofauti:

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

**Fikiria kama kuongoza tamthilia:**
- **Nafasi ya mfumo**: Kama maelekezo ya jukwaani kwa mhusika – inamuambia AI jinsi ya tabia, utu wake, na jinsi ya kujibu
- **Nafasi ya mtumiaji**: Swali halisi au ujumbe kutoka kwa mtu anayetumia programu yako
- **Nafasi ya msaidizi**: Jibu la AI (huli tuma, lakini linaonekana katika historia ya mazungumzo)

**Mfano wa maisha halisi**: Fikiria unamtambulisha rafiki kwa mtu kwenye karamu:
- **Ujumbe wa mfumo**: "Huyu ni rafiki yangu Sarah, ni daktari mzuri wa kuelezea dhana za matibabu kwa maneno rahisi"
- **Ujumbe wa mtumiaji**: "Unaweza kufafanua jinsi chanjo zinavyofanya kazi?"
- **Jibu la msaidizi**: Sarah anajibu kama daktari mkarimu, si kama mwanasheria au mpishi

### Kuelewa Vigezo vya AI: Kufinyanga Tabia ya Jibu

Vigezo vya nambari katika API za AI vinadhibiti jinsi mfano unavyotengeneza majibu. Mipangilio hii inakuwezesha kurekebisha tabia ya AI kwa matumizi tofauti:

#### Joto (0.0 hadi 2.0): Diali ya Ubunifu

**Inafanya nini**: Inadhibiti ni kiasi gani majibu ya AI yatakuwa ya ubunifu au yanayoweza kutabirika.

**Fikiria kama kiwango cha kuigiza kwa mwanamuziki wa jazz:**
- **Joto = 0.1**: Kuimba melodi ile ile kila mara (inayoweza kutabirika sana)
- **Joto = 0.7**: Kuongeza mabadiliko ya ladha huku ukibaki waeleweke (uwezo wa ubunifu wa wastani)
- **Joto = 1.5**: Jazz ya majaribio kamili yenye miondoko isiyotabirika (ubunifu mkubwa)

```python
# Majibu yanayoweza kutabirika sana (mzuri kwa maswali ya ukweli)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Takriban kila mara atasema "4"
)

# Majibu ya ubunifu (mzuri kwa kuibua mawazo)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Atatengeneza hadithi za kipekee, zisizotarajiwa
)
```

#### Juu ya Tokens (1 hadi 4096+): Kidhibiti cha Urefu wa Jibu

**Inafanya nini**: Inaweka kikomo juu ya urefu wa jibu la AI.

**Fikiria tokens kama maneno kwa takriban** (kati ya token moja = karibu maneno 0.75 kwa Kiingereza):
- **max_tokens=50**: Fupi na tamu (kama ujumbe mfupi)
- **max_tokens=500**: Aya nzuri au mbili
- **max_tokens=2000**: Maelezo ya kina yenye mifano

```python
# Majibu mafupi na ya wazi
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Inalazimisha maelezo mafupi
)

# Majibu ya kina na ya kina
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Inaruhusu maelezo ya kina pamoja na mifano
)
```

#### Top_p (0.0 hadi 1.0): Kigezo cha Kuzingatia

**Inafanya nini**: Inadhibiti jinsi AI inavyolingania na majibu yanayoweza kutokea zaidi.

**Picha inaonyesha AI akiwa na msamiati mkubwa, umesawazishwa kwa uwezekano wa kila neno:**
- **top_p=0.1**: Inazingatia maneno 10% ya juu yenye uwezekano mkubwa zaidi (ilenye makini sana)
- **top_p=0.9**: Inazingatia 90% ya maneno yanayowezekana (zaidi ya ubunifu)
- **top_p=1.0**: Inazingatia yote (tofauti kubwa zaidi)

**Kwa mfano**: Ukiuliza "Anga ni kawaida..."
- **Top_p ya chini**: Kusema "buluu" kabisa bila shaka
- **Top_p ya juu**: Inaweza kusema "buluu", "mawingu", "kubwa", "kubadilika", "mzuri", n.k.

### Kuunganisha Pamoja: Mchanganyiko wa Vigezo kwa Matumizi Tofauti

```python
# Kwa majibu ya kweli, ya kuzingatia (kama roboti wa hati)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Kwa msaada wa uandishi wa ubunifu
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Kwa majibu ya mazungumzo, yenye msaada (yenye uwiano)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Mkataba wa Uboreshaji wa Vigezo vya AI
    x-axis Ubunifu Mdogo --> Ubunifu Mkubwa
    y-axis Jibu Fupi --> Jibu Refu
    
    quadrant-1 Maudhui ya Ubunifu
    quadrant-2 Uchambuzi wa Kina
    quadrant-3 Taarifa za Haraka
    quadrant-4 AI ya Mazungumzo
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Kuelewa kwa nini vigezo hivi ni muhimu**: Programu tofauti zinahitaji aina tofauti za majibu. Bot wa huduma kwa wateja anatakiwa kuwa thabiti na wa ukweli (joto la chini), wakati msaidizi wa uandishi wa ubunifu anatakiwa kuwa wa mawazo na mabadiliko (joto la juu). Kuelewa vigezo hivi kunakupa udhibiti juu ya utu na mtindo wa jibu wa AI yako.
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

**Kuelewa kazi hii iliyoboreshwa:**
- **Inakubali** vigezo viwili: maelekezo ya mtumiaji na ujumbe wa mfumo wa hiari
- **Inatoa** ujumbe wa mfumo wa msingi kwa tabia ya msaidizi kwa ujumla
- **Inatumia** aina za Python kwa usahihi kwa ajili ya nyaraka bora za msimbo
- **Inajumuisha** maelezo ya kina ya kazi na vigezo vyake
- **Inarejesha** maudhui ya jibu tu, kufanya iwe rahisi kutumia katika API yetu ya wavuti
- **Inadumisha** vigezo vile vile vya mfano kwa tabia thabiti ya AI

### Uchawi wa Maelekezo ya Mfumo: Kuprogramu Utu wa AI

Ikiwa vigezo vinadhibiti jinsi AI inavyofikiria, maelekezo ya mfumo yanadhibiti ni nani AI anayejiamini kuwa. Hii ni mojawapo ya sehemu za kuvutia zaidi za kufanya kazi na AI – unampa AI utu kamili, kiwango cha utaalamu, na mtindo wa mawasiliano.

**Fikiria maelekezo ya mfumo kama kung'oa wauigizaji tofauti kwa majukumu tofauti**: Badala ya kuwa na msaidizi mmoja wa kawaida, unaweza kuunda wataalamu maalum kwa hali tofauti. Unahitaji mwalimu mvumilivu? Mshirika wa ubunifu? Mshauri wa biashara asiye na upotovu? Badilisha tu maelekezo ya mfumo!

#### Kwa Nini Maelekezo ya Mfumo Ni Yenye Nguvu

Sehemu ya kuvutia: mifano ya AI imetengenezwa kwa mazungumzo mengi ambapo watu hukumbatia majukumu na viwango vya utaalamu tofauti. Unapompa AI jukumu maalum, ni kama kuwasha swichi inayochochea mifumo yote hiyo iliyojifunza.

**Ni kama utendaji wa kina kwa AI**: Mwambie mwigizaji "wewe ni profesa mzee mwenye busara" na uone jinsi wanavyobadilisha mkao, msamiati, na tabia zao. AI hufanya kitu kinachofanana sana na mifumo ya lugha.

#### Kuunda Maelekezo Bora ya Mfumo: Sanaa na Sayansi

**Muundo wa maelekezo bora ya mfumo:**
1. **Jukumu/Utu**: AI ni nani?
2. **Utaalamu**: Anajua nini?
3. **Mtindo wa mawasiliano**: Anazungumza vipi?
4. **Maelekezo maalum**: Angalau atazingatia nini?

```python
# ❌ Amri ya mfumo isiyoeleweka
"You are helpful."

# ✅ Amri ya mfumo yenye maelezo, yenye ufanisi
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Mifano ya Maelekezo ya Mfumo kwa Muktadha

Tuwone jinsi maelekezo tofauti ya mfumo yanavyounda utu tofauti kabisa wa AI:

```python
# Mfano 1: Mwalimu Muvumilivu
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Mfano 2: Mshirikishi Mbunifu
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Mfano 3: Mshauri Mkakati wa Biashara
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Kuona Maelekezo ya Mfumo Kazi

Tujaribu swali lile lile na maelekezo tofauti ya mfumo kuona tofauti kubwa:

**Swali**: "Ninawezaje kushughulikia uthibitishaji wa mtumiaji katika app yangu ya wavuti?"

```python
# Kwa maelekezo ya mwalimu:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Jibu la kawaida: "Swali zuri! Hebu tugawanye uthibitishaji katika hatua rahisi.
# Fikiria kama mlinzi wa klabu ya usiku anayeangalia kitambulisho..."

# Kwa maelekezo ya biashara:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Jibu la kawaida: "Kwa mtazamo wa kimkakati, uthibitishaji ni muhimu kwa
# imani ya mtumiaji na uzingatiaji wa sheria. Acha nitoe muundo ukizingatia usalama,
# uzoefu wa mtumiaji, na uwezekano wa kupanuka..."
```

#### Mbinu Zinazopiga Kufika za Maelekezo ya Mfumo

**1. Kuweka Muktadha**: Mpa AI taarifa za awali
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Kupangilia Matokeo**: Mwambie AI jinsi ya kupanga majibu
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

**3. Kuweka Vizingiti**: Eleza kile ambacho AI haipaswi kufanya
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Kwa Nini Hii Inahusu Msaidizi Wako wa Chat

Kuelewa maelekezo ya mfumo kunakupa nguvu kubwa ya kuunda wasaidizi maalum wa AI:
- **Bot ya huduma kwa wateja**: Msaidizi, mvumilivu, anayejuwa sera
- **Mwalimu wa kujifunza**: Anayehimiza, hatua kwa hatua, anathibitisha kuelewa
- **Mshirika mbunifu**: Mzuri katika kufikiria, huongeza mawazo, huuliza "je, vipi?"
- **Mtaalamu wa kiufundi**: Sahihi, ana maelezo, anayeangalia usalama

**Mwelekeo muhimu**: Haujui tu kuwaita API ya AI – unaunda utu maalum wa AI unaotumikia matumizi yako maalum. Hii ndiyo inayofanya programu za kisasa za AI kuonekana zimebinafsishwa na zikiwa na manufaa badala ya za kawaida.

### 🎯 Ukaguzi wa Kitaalamu: Kuprogramu Utu wa AI

**Acha na Fikiria**: Umejifunza programu za utu wa AI kupitia maelekezo ya mfumo. Hii ni ujuzi wa msingi katika maendeleo ya programu za kisasa za AI.

**Tathmini Haraka ya Kibinafsi**:
- Je, unaweza kueleza tofauti kati ya maelekezo ya mfumo na ujumbe wa kawaida wa mtumiaji?
- Je, tofauti kati ya vigezo vya joto na top_p ni ipi?
- Je, ungeundaje maelekezo ya mfumo kwa matumizi maalum (kama mwalimu wa kupanga programu)?

**Uhusiano wa Dunia halisi**: Mbinu za maelekezo ya mfumo ulizojifunza hutumika katika kila programu kuu ya AI - kuanzia msaada wa uandishi wa GitHub Copilot hadi kiolesura cha mazungumzo cha ChatGPT. Unatambua mifumo ile ile inayotumiwa na timu za bidhaa za AI katika makampuni makubwa ya teknolojia.

**Swali la Changamoto**: Unawezaje kubuni utu tofauti wa AI kwa aina tofauti za watumiaji (mwanzo dhidi ya mtaalamu)? Fikiria jinsi mfano huo huo wa AI unavyoweza kuhudumia hadhira tofauti kupitia uhandisi wa maelekezo.

## Kujenga Web API kwa FastAPI: Kituo chako cha Mawasiliano ya AI ya Ufanisi Mno

Sasa tuanze kujenga backend inayounganisha frontend yako na huduma za AI. Tutatumia FastAPI, fremu ya kisasa ya Python inayobobea katika ujenzi wa API za programu za AI.

FastAPI inatoa faida kadhaa kwa mradi huu: msaada wa async ukiwezesha kushughulikia maombi mengi sambamba, utengenezaji wa moja kwa moja wa nyaraka za API, na utendaji bora. Server yako ya FastAPI inafanya kazi kama mpatanishi anayepokea maombi kutoka frontend, kuwasiliana na huduma za AI, na kurudisha majibu yaliyopangwa.

### Kwa Nini FastAPI Kwa Programu za AI?

Huenda unajiuliza: "Siwezi tu kuitwa AI moja kwa moja kutoka JavaScript ya frontend yangu?" au "Kwa nini FastAPI badala ya Flask au Django?" Maswali mazuri!

**Hapa ndio sababu FastAPI ni bora kwa tunachojenga:**
- **Async kwa default**: Inaweza kushughulikia maombi mengi ya AI kwa wakati mmoja bila kuziba
- **Nyaraka moja kwa moja**: Tembelea `/docs` upate ukurasa mzuri wa nyaraka za API zenye mwingiliano bure
- **Uthibitishaji uliojengewa ndani**: Hugundua makosa kabla hayajasababisha matatizo
- **Haraka sana**: Moja ya fremu za Python zenye kasi zaidi
- **Python ya kisasa**: Inatumia vipengele vyote vya hivi karibuni vya Python

**Na hapa ndio kwanini tunahitaji backend kabisa:**

**Usalama**: Ufunguo wako wa API ya AI ni kama nenosiri – ukiuweka kwenye JavaScript ya frontend, mtu yeyote anayehakikisha chanzo cha tovuti yako anaweza kuiba na kutumia mikopo yako ya AI. Backend huhifadhi habari nyeti salama.

**Kudhibiti Kasi na Udhibiti**: Backend inakusaidia kudhibiti mara ngapi watumiaji wanaweza kutuma maombi, kutekeleza uthibitishaji wa watumiaji, na kuongeza rejista ya matumizi.

**Usindikaji Data**: Huenda unataka kuhifadhi mazungumzo, kuchuja maudhui yasiyofaa, au kuunganisha huduma nyingi za AI. Backend ndio mahali hii mantiki inakuwa.

**Muundo unafanana na mfano wa mteja-serveri:**
- **Frontend**: Tabaka la kiolesura cha mtumiaji kwa mwingiliano
- **Backend API**: Tabaka la usindikaji wa maombi na kupitisha
- **Huduma ya AI**: Utambuzi wa nje na uzalishaji wa majibu
- **Mabadiliko ya Mazingira**: Usanidi salama na uhifadhi wa nyaraka za siri

### Kuelewa Mtiririko wa Ombi-Jibu

Tufuate kinachoendelea wakati mtumiaji anapotuma ujumbe:

```mermaid
sequenceDiagram
    participant User as 👤 Mtumiaji
    participant Frontend as 🌐 Mbele ya Mbele
    participant API as 🔧 Seva ya FastAPI
    participant AI as 🤖 Huduma ya AI
    
    User->>Frontend: Andika "Hello AI!"
    Frontend->>API: POST /hello {"message": "Hello AI!"}
    Note over API: Inathibitisha ombi<br/>Inaongeza kiito mfumo
    API->>AI: Inatuma ombi lililopangwa
    AI->>API: Inarudisha jibu la AI
    Note over API: Inachakata jibu<br/>Inaandika mazungumzo
    API->>Frontend: {"response": "Hello! Naweza kusaidia vipi?"}
    Frontend->>User: Inaonyesha ujumbe wa AI
```
**Kuelewa kila hatua:**
1. **Mwingiliano wa mtumiaji**: Mtu anaandika katika kiolesura cha mazungumzo
2. **Usindikaji wa frontend**: JavaScript inachukua maingizo na kuyaweka katika muundo wa JSON
3. **Uthibitishaji wa API**: FastAPI inathibitisha maombi moja kwa moja kwa kutumia mifano ya Pydantic
4. **Uingizaji wa AI**: Backend inaongeza muktadha (maelekezo ya mfumo) na kuita huduma ya AI
5. **Ushughulikiaji wa jibu**: API inapokea jibu la AI na inaweza kulibadilisha kama ni lazima
6. **Onyesho la frontend**: JavaScript inaonyesha jibu kwenye kiolesura cha mazungumzo

### Kuelewa Muundo wa API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hujambo AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: Ombi la API
    GitHub Models->>AI Function: Jibu la AI
    AI Function->>FastAPI: maandishi ya jibu
    FastAPI->>Frontend: {"response": "Hujambo! Naweza kusaidia vipi?"}
```
```mermaid
flowchart TD
    A[Ingizo la Mtumiaji] --> B[Uthibitishaji wa Mbele]
    B --> C[Ombi la HTTP POST]
    C --> D[Router ya FastAPI]
    D --> E[Uthibitishaji wa Pydantic]
    E --> F[Simu ya Kazi ya AI]
    F --> G[API za Modeli za GitHub]
    G --> H[Usindikaji wa Majibu]
    H --> I[Jibu la JSON]
    I --> J[Usasishaji wa Mbele]
    
    subgraph "Tabaka la Usalama"
        K[Kati ya CORS]
        L[Hali za Mazingira]
        M[Ushughulikiaji wa Makosa]
    end
    
    D --> K
    F --> L
    H --> M
```
### Kuunda Programu ya FastAPI

Tujenge API yetu hatua kwa hatua. Tengeneza faili liitwalo `api.py` na msimbo unaofuata wa FastAPI:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Sanidi uandikishaji logi
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Unda programu ya FastAPI
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Sanidi CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Sanidi ipasavyo kwa ajili ya uzalishaji
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mifano ya Pydantic kwa uthibitishaji wa ombi/jibu
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
        # Toa na thibitisha ujumbe
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Piga huduma ya AI (kumbuka: call_llm inapaswa kufanywa async kwa utendaji bora)
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

**Kuelewa utekelezaji wa FastAPI:**
- **Inaagiza** FastAPI kwa utendaji wa fremu ya wavuti ya kisasa na Pydantic kwa uthibitishaji wa data
- **Inaunda** nyaraka za API moja kwa moja (zinapatikana kwenye `/docs` wakati server inapoanza)
- **Inawezeshwa** CORS middleware kuruhusu maombi ya frontend kutoka asili tofauti
- **Inaeleza** mifano ya Pydantic kwa uthibitishaji wa maombi/majibu na nyaraka za moja kwa moja
- **Inatumia** maeneo async kwa utendaji bora na maombi mengi sambamba
- **Inatekeleza** misimbo sahihi ya hali za HTTP na usimamizi wa makosa kwa HTTPException
- **Inajumuisha** uandikishaji uliopangwa kwa ajili ya ufuatiliaji na utatuzi wa matatizo
- **Inatoa** sehemu ya ukaguzi wa afya kwa kufuatilia hali ya huduma

**Faida kuu za FastAPI dhidi ya fremu za kawaida:**
- **Uthibitishaji moja kwa moja**: Mifano ya Pydantic huhakikisha usahihi wa data kabla ya usindikaji
- **Nyaraka zenye mwingiliano**: Tembelea `/docs` kupata nyaraka za API zinazotengenezwa na zinaweza kujaribiwa
- **Usalama wa aina**: Vidokezo vya aina za Python hupunguza makosa ya wakati wa utekelezaji na kuboresha ubora wa msimbo
- **Msaada wa async**: Hudumia maombi mengi ya AI kwa wakati mmoja bila kuziba
- **Utendaji**: Usindikaji wa maombi kwa kasi kubwa kwa programu zinazotegemea wakati halisi

### Kuelewa CORS: Mlinzi wa Usalama wa Wavuti

CORS (Cross-Origin Resource Sharing) ni kama mlinzi wa usalama kwenye jengo ambaye hakuangalia kama wageni wanaruhusiwa kuingia. Tuelewe kwa nini hii ni muhimu na jinsi inavyoathiri programu yako.

#### CORS ni Nini na Kwa Nini Ipo?

**Tatizo**: Fikiria kama tovuti yoyote ingekuwa na uwezo wa kutuma maombi kwenye tovuti ya benki yako kwa niaba yako bila idhini yako. Hii ingekuwa shida kubwa ya usalama! Vivinjari huzuia hili kwa kutumia "Sera ya Asili Ileile."

**Sera ya Asili Ileile**: Vivinjari huruhusu kuruhusu kuruka maombi kutoka kwenye tovuti zenye eneo, bandari, na itifaki ile ile waliyoanzia kupakiwa.

**Mfano wa dunia halisi**: Ni kama usalama wa nyumba ya ghorofa – wakazi tu (asilimia ile ile) wanaruhusiwa kuingia. Ukitaka kuruhusu rafiki (asilimia tofauti) kutembelea, lazima umwambie mlinzi waziwazi ni sawa.

#### CORS Katika Mazingira Yako ya Maendeleo

Wakati wa maendeleo, frontend na backend zako zinafanya kazi katika bandari tofauti:
- Frontend: `http://localhost:3000` (au file:// ikiwa unafungua HTML moja kwa moja)
- Backend: `http://localhost:5000`

Hizi zinachukuliwa kuwa "asilimia tofauti" ingawa ziko kwenye kompyuta ile ile!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Hii inawaambia vivinjari: "Ni sawa kwa asili nyingine kuomba huduma kwa API hii"
```

**Kifanikio cha usanidi wa CORS kwa vitendo:**
- **Inaongeza** vichwa maalum vya HTTP kwenye majibu ya API vinavyoambia vivinjari "ombi hili la asili tofauti linaruhusiwa"
- **Inashughulikia** maombi ya "preflight" (vivinjari mara nyingine huchunguza ruhusa kabla ya kutuma ombi halisi)
- **Inazuia** kosa la "kuzuia sera ya CORS" ambalo linapotokea kwenye koni ya kivinjari chako

#### Usalama wa CORS: Maendeleo vs Uzalishaji

```python
# 🚨 Maendeleo: Inaruhusu vyanzo vyote (rahisi lakini hatari)
CORS(app)

# ✅ Uzalishaji: Ruhusu tu eneo lako la frontend lililobainishwa
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Kiwango cha juu: Vyanzo tofauti kwa mazingira tofauti
if app.debug:  # Hali ya maendeleo
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Hali ya uzalishaji
    CORS(app, origins=["https://yourdomain.com"])
```

**Kwa nini hii ni muhimu**: Katika maendeleo, `CORS(app)` ni kama kuacha mlango wa mbele wazi – ndio rahisi lakini si salama. Katika uzalishaji, unataka kutaja ni tovuti gani hasa zinaweza kuongea na API yako.

#### Hali za Kawaida za CORS na Suluhisho

| Hali | Tatizo | Suluhisho |
|----------|---------|----------|
| **Maendeleo ya Ndani (Local Development)** | Frontend haiwezi kufikia backend | Ongeza CORSMiddleware kwenye FastAPI |
| **GitHub Pages + Heroku** | Frontend iliyowekwa haitumii API | Ongeza URL ya GitHub Pages kwenye asili za CORS |
| **Domeni Maalum** | Makosa ya CORS uzalishaji | Sasisha asili za CORS kulingana na domeni yako |
| **Programu ya Simu** | Programu haiwezi kufikia API ya wavuti | Ongeza domeni ya programu yako au tumia `*` kwa uangalifu |

**Ushauri mzuri**: Unaweza kuangalia vichwa vya CORS kwenye zana za Watengenezaji wa kivinjari chako chini ya kichupo cha Mtandao. Tafuta vichwa kama `Access-Control-Allow-Origin` kwenye jibu.

### Ushughulikiaji wa Makosa na Uthibitishaji

Angalia jinsi API yetu inavyoshughulikia makosa kwa usahihi:

```python
# Thibitisha kwamba tumepokea ujumbe
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Kanuni kuu za uthibitishaji:**
- **Huthibitisha** viwanja muhimu kabla ya kusindika maombi
- **Hurejesha** ujumbe wa makosa wenye maana katika muundo wa JSON
- **Inatumia** misimbo sahihi ya hali ya HTTP (400 kwa maombi mabaya)
- **Hutoa** mrejesho wazi kusaidia waendelezaji wa frontend kutatua matatizo

## Kuweka na Kuendesha Backend Yako

Sasa tunapokuwa na uingizaji wetu wa AI na server ya FastAPI tayari, tuanzishe kila kitu kilicho tayari. Mchakato wa usanikishaji unahusisha kusakinisha maktaba za Python, kusanidi mabadiliko ya mazingira, na kuanzisha server yako ya maendeleo.

### Kuanzisha Mazingira ya Python

Tuwashie mazingira ya maendeleo ya Python. Mazingira ya virtual ni kama mpango wa Manhattan uliogawanywa sehemu – kila mradi unapata nafasi yake pekee ya pekee yenye zana maalum na utegemezi, kuzuia migongano kati ya miradi tofauti.

```bash
# Elekea kwenye saraka yako ya nyuma
cd backend

# Unda mazingira ya kweli (kama kuunda chumba safi kwa mradi wako)
python -m venv venv

# Iwasha (Linux/Mac)
source ./venv/bin/activate

# Kwenye Windows, tumia:
# venv\Scripts\activate

# Sakinisha vitu vizuri
pip install openai fastapi uvicorn python-dotenv
```

**Tulichofanya sasa hivi:**
- **Tumeunda** povu yetu ndogo ya Python ambapo tunaweza kusakinisha maktaba bila kuathiri vingine
- **Tumezikwa** ili terminal yetu ijue kutumia mazingira haya maalum
- **Tumefunga** muhimu: OpenAI kwa uchawi wa AI, FastAPI kwa API yetu ya wavuti, Uvicorn kuendesha server, na python-dotenv kwa usimamizi wa siri salama

**Marekebisho muhimu yaliyoelezwa:**
- **FastAPI**: Fremu ya kisasa, yenye kasi ya wavuti na nyaraka za API za moja kwa moja
- **Uvicorn**: Server ya ASGI yenye kasi mno inayochukua na kuendesha programu za FastAPI
- **OpenAI**: Maktaba rasmi kwa modeli za GitHub na API ya OpenAI
- **python-dotenv**: Kubeba mabadiliko ya mazingira kwa usalama kutoka kwa faili `.env`

### Usanidi wa Mazingira: Kuzingatia Siri Salama

Kabla hatujaanza API yetu, tunahitaji kujadili moja ya masomo muhimu zaidi katika maendeleo ya wavuti: jinsi ya kuweka siri zako kweli zisiwe wazi. Mabadiliko ya mazingira ni kama sefeli salama ambayo programu yako tu inaweza kufikia.

#### Mabadiliko ya Mazingira ni Nini?

**Fikiria mabadiliko ya mazingira kama sanduku la amana salama** – unailaza vitu vyako vya thamani humo, na wewe tu (na programu yako) una funguo la kuipata. Badala ya kuandika taarifa nyeti moja kwa moja kwenye msimbo wako (ambapo mtu yeyote anaweza kuiona), unahifadhi kwa usalama katika mazingira.

**Hii ndio tofauti:**
- **Njia mbaya**: Kuandika nenosiri lako kwenye karatasi na kuiweka kwenye skrini yako ya kompyuta
- **Njia sahihi**: Kuweka nenosiri lako kwenye meneja wa nenosiri salama unayemiliki wewe peke yako

#### Kwa Nini Mabadiliko ya Mazingira Ni Muhimu

```python
# 🚨 USIFANYE HIVYO - Fikira la API linaonekana kwa kila mtu
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Mtu yeyote anaweza kuiba hii!
    base_url="https://models.github.ai/inference"
)

# ✅ FANYA HIVYO - Fikira la API lihifadhiwe kwa usalama
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Ni programu yako tu inaweza kufikia hii
    base_url="https://models.github.ai/inference"
)
```

**Kinachotokea ukiandika siri moja kwa moja:**
1. **Ufunuo kwa usimamizi wa toleo**: Yeyote aliye na ufikiaji wa hifadhi yako ya Git anaona ufunguo wako wa API
2. **Hifadhi za umma**: Ukiweka kwenye GitHub, ufunguo wako unaonekana kwa kila mtu mtandaoni
3. **Kushirikiana kwa timu**: Waendelezaji wengine kwenye mradi wako wanapata ufunguo wako wa API binafsi
4. **Uvunjaji wa usalama**: Ikiwa mtu ataiba ufunguo wako wa API, anaweza kutumia mikopo yako ya AI

#### Kuunda Faili Yako la Mazingira `.env`

Tengeneza faili `.env` katika saraka ya backend yako. Faili hii huhifadhi siri zako ndani ya kompyuta:

```bash
# Faili la .env - Hili HAUWASHWI kamwe kupelekwa kwenye Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Kuelewa faili la .env:**
- **Siri moja kwa mstari** katika muundo wa `KEY=value`
- **Hakuna nafasi** karibu na alama ya sawa
- **Hakuna nukuu** zinahitajika kwenye thamani (kawaida)
- **Maoni** huanza na `#`

#### Kuunda Tokeni Yako Binafsi ya Kufikia GitHub

Tokeni yako ya GitHub ni kama nenosiri maalum linaloruhusu programu yako kutumia huduma za AI za GitHub:

**Hatua kwa hatua kuunda tokeni:**
1. **Nenda kwenye Mipangilio ya GitHub** → Mipangilio ya mtengenezaji → Tokeni za huduma binafsi → Tokeni (classic)
2. **Bonyeza "Generate new token (classic)"**
3. **Weka muda wa kumalizika** (siku 30 kwa majaribio, muda mrefu kwa uzalishaji)
4. **Chagua wigo**: Angalia "repo" na ruhusa zingine unazohitaji
5. **Tengeneza tokeni** na uibandike mara moja (hauna tena ruhusa ya kuiona!)
6. **Mweka kwenye faili lako la .env**

```bash
# Mfano wa jinsi tokeni yako inavyoonekana (hii ni feki!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Kupakia Mabadiliko ya Mazingira katika Python

```python
import os
from dotenv import load_dotenv

# Pakia mabadiliko ya mazingira kutoka kwa faili la .env
load_dotenv()

# Sasa unaweza kuyafikia kwa usalama
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Msimbo huu unafanya:**
- **Unapakia** faili lako la .env na kufanya mabadiliko kupatikana kwa Python
- **Huthibitisha** kama tokeni muhimu ipo (ushughulikiaji mzuri wa makosa!)
- **Hutoa** kosa la wazi ikiwa tokeni haipo
- **Inatumia** tokeni kwa usalama bila kuionyesha kwenye msimbo

#### Usalama wa Git: Faili la .gitignore

Faili lako la `.gitignore` linaambia Git ni faili gani isizotakwa kufuatiliwa au kupakiwa:

```bash
# .gitignore - Ongeza mistari hii
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Kwa nini hii ni muhimu**: Mara tu unapoongeza `.env` kwenye `.gitignore`, Git itapuuzia faili lako la mazingira, ikuzuia kupakia siri zako kwa bahati mbaya kwenye GitHub.

#### Mazingira Tofauti, Siri Tofauti

Programu za kitaalamu hutumia funguo tofauti za API kwa mazingira tofauti:

```bash
# .env.kuendeleza
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.utengenezaji
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Kwa nini hii ni muhimu**: Hutaki majaribio ya maendeleo kuathiri msamaha wako wa matumizi ya AI wa uzalishaji, na unataka viwango tofauti vya usalama kwa mazingira tofauti.

### Kuanzisha Server ya Maendeleo: Kuleta FastAPI Yako Kuishi
Sasa inakuja wakati wa kusisimua – kuanzisha seva yako ya maendeleo ya FastAPI na kuona muunganisho wako wa AI ukiamka hai! FastAPI hutumia Uvicorn, seva ya ASGI yenye mwendo wa mwanga ambayo imeundwa mahsusi kwa programu za Python async.

#### Kuelewa Mchakato wa Kuanzisha Seva ya FastAPI

```bash
# Njia 1: Utekelezaji wa moja kwa moja wa Python (inajumuisha upya-ziada wa moja kwa moja)
python api.py

# Njia 2: Kutumia Uvicorn moja kwa moja (udhibiti zaidi)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Unapoendesha amri hii, hapa ndilo linatokea nyuma ya pazia:

**1. Python inapakia programu yako ya FastAPI**:
- Inaingiza maktaba zote muhimu (FastAPI, Pydantic, OpenAI, n.k.)
- Inapakia mabadiliko ya mazingira kutoka kwa faili yako `.env`
- Inatengeneza mfano wa programu ya FastAPI na nyaraka za moja kwa moja

**2. Uvicorn huandaa seva ya ASGI**:
- Inajihusisha na bandari 5000 na uwezo wa kushughulikia maombi async
- Inaweka njia za kuongoza maombi na uhakikisho wa moja kwa moja
- Inawezeshwa upya moja kwa moja kwa maendeleo (huanzisha upya faili zinapobadilika)
- Inazalisha nyaraka za API zenye mwingiliano

**3. Seva inaanza kusikiliza**:
- Terminal yako inaonyesha: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Seva inaweza kushughulikia maombi mengi ya AI sambamba
- API yako iko tayari na nyaraka za moja kwa moja kwenye `http://localhost:5000/docs`

#### Unapaswa Kuona Nini Wakati Kila Kitu Kinafanya Kazi

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Kuelewa matokeo ya FastAPI:**
- **Itatazama mabadiliko**: Auto-reload imewezeshwa kwa maendeleo
- **Uvicorn inafanya kazi**: Seva ya ASGI yenye utendaji mkubwa inatumika
- **Mchakato wa reloader umeanzishwa**: Mtafiti wa faili kwa kuanzisha upya moja kwa moja
- **Mwanzo wa programu umekamilika**: App ya FastAPI imezinduliwa kwa mafanikio
- **Nyaraka za mwingiliano zinapatikana**: Tembelea `/docs` kwa nyaraka za API za moja kwa moja

#### Kupima FastAPI Yako: Njia Nyingi Zenye Nguvu

FastAPI hutoa njia kadhaa rahisi za kupima API yako, ikiwa ni pamoja na nyaraka za mwingiliano za moja kwa moja:

**Njia 1: Nyaraka za Mwingiliano za API (Inapendekezwa)**
1. Fungua kivinjari chako na nenda `http://localhost:5000/docs`
2. Utaona Swagger UI na mwisho wote wako umeandikwa
3. Bonyeza `/hello` → "Try it out" → Andika ujumbe wa majaribio → "Execute"
4. Tazama jibu moja kwa moja kwenye kivinjari kwa muundo sahihi

**Njia 2: Jaribio la Kivinjari la Msingi**
1. Nenda `http://localhost:5000` kwa mwisho wa mzizi
2. Nenda `http://localhost:5000/health` kuangalia afya ya seva
3. Hii inathibitisha seva yako ya FastAPI inafanya kazi vizuri

**Njia 2: Jaribio la Line ya Amri (Zaidi)**
```bash
# Jaribu kwa kutumia curl (ikiwa inapatikana)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Jibu linalotarajiwa:
# {"response": "Habari! Mimi ni msaidizi wako wa AI. Naweza kukusaidiaje leo?"}
```

**Njia 3: Skripti ya Jaribio la Python**
```python
# test_api.py - Unda faili hili kupima API yako
import requests
import json

# Pima mwisho wa API
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Kutatua Tatizo la Kawaida la Mwanzo

| Ujumbe wa Hitilafu | Kinachomaanisha | Jinsi ya Kurekebisha |
|---------------|---------------|------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI haijasakinishwa | Endesha `pip install fastapi uvicorn` kwenye mazingira yako ya virtual |
| `ModuleNotFoundError: No module named 'uvicorn'` | Seva ya ASGI haijasakinishwa | Endesha `pip install uvicorn` kwenye mazingira yako ya virtual |
| `KeyError: 'GITHUB_TOKEN'` | Kigezo cha mazingira hakipatikani | Angalia faili yako `.env` na mwito wa `load_dotenv()` |
| `Address already in use` | Bandari 5000 inatumika | Funga mchakato mwingine unaotumia bandari 5000 au badilisha bandari |
| `ValidationError` | Data ya ombi hailingani na mfano wa Pydantic | Angalia muundo wa ombi lako unaendana na skimu inayotarajiwa |
| `HTTPException 422` | Kiumbe kisichoshughulikiwa | Uhakiki wa ombi umefaulu, angalia `/docs` kwa muundo sahihi |
| `OpenAI API error` | Huduma ya AI imeshindwa kuthibitishwa | Hakikisha tokeni yako ya GitHub ni sahihi na ina ruhusa sahihi |

#### Miongozo Bora ya Maendeleo

**Upakiaji Moto**: FastAPI na Uvicorn hutoa upakiaji wa moja kwa moja unapohifadhi mabadiliko kwenye faili zako za Python. Hii inamaanisha unaweza kubadilisha msimbo na kupima mara moja bila kuanzisha upya kwa mkono.

```python
# Wezesha upakiaji wa moto kwa uwazi
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True inaruhusu upakiaji wa moto
```

**Kuinua kumbukumbu kwa Maendeleo**: Ongeza kumbukumbu ili kuelewa kinachoendelea:

```python
import logging

# Weka upigaji taarifa
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

**Kwa nini kumbukumbu husaidia**: Wakati wa maendeleo, unaweza kuona hasa maombi yanayokuja, AI inajibu vipi, na mahali pa kutokea kwa makosa. Hii hufanya utambuzi wa hitilafu kuwa wa kasi zaidi.

### Kusanidi kwa GitHub Codespaces: Maendeleo ya Wingu Yaliyorahisishwa

GitHub Codespaces ni kama kuwa na kompyuta yenye nguvu ya maendeleo kwenye wingu unayoweza kufikia kutoka kivinjari chochote. Ikiwa unafanya kazi ndani ya Codespaces, kuna hatua chache za ziada za kufanya backend yako ipatikane kwa frontend yako.

#### Kuelewa Mtandao wa Codespaces

Katika mazingira ya maendeleo ya ndani, kila kitu kinaendeshwa kwenye kompyuta ile ile:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (au file://)

Katika Codespaces, mazingira yako ya maendeleo yanaendeshwa kwenye seva za GitHub, hivyo "localhost" ina maana tofauti. GitHub hutengeneza URL za umma kwa huduma zako kwa moja, lakini unahitaji kuziweka ipasavyo.

#### Usaidizi wa Hatua kwa Hatua wa Codespaces

**1. Anzisha seva yako ya backend**:
```bash
cd backend
python api.py
```

Utaona ujumbe wa kuanzisha FastAPI/Uvicorn unaofahamika, lakini ukumbuke iko ndani ya mazingira ya Codespace.

**2. Sanidi uonekano wa bandari**:
- Tafuta kichupo cha "Ports" kwenye paneli ya chini ya VS Code
- Tafuta bandari 5000 kwenye orodha
- Bonyeza kulia kwenye bandari 5000
- Chagua "Port Visibility" → "Public"

**Kwa nini kuweka umma?** Kwa kawaida, bandari za Codespace ni za faragha (zinapatikana kwako tu). Kuweka umma kunaruhusu frontend yako (inayoendesha kwenye kivinjari) kuwasiliana na backend yako.

**3. Pata URL yako ya umma**:
Baada ya kuweka bandari kuwa umma, utaona URL kama hii:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Sasisha usanidi wa frontend yako**:
```javascript
// Katika app.js ya frontend yako, sasisha BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Kuelewa URL za Codespace

URL za Codespace zina muundo unaotabirika:
```
https://[codespace-name]-[port].app.github.dev
```

**Kuvunja haya:**
- `codespace-name`: Kitambulisho cha kipekee kwa Codespace yako (kawaida kina jina la mtumiaji wako)
- `port`: Nambari ya bandari huduma yako inayoendeshwa (5000 kwa app yetu ya FastAPI)
- `app.github.dev`: Kikoa cha GitHub kwa programu za Codespace

#### Kupima Usanidi wako wa Codespace

**1. Jaribu backend moja kwa moja**:
Fungua URL yako ya umma kwa kichupo kipya cha kivinjari. Unapaswa kuona:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Jaribu na zana za mende wa kivinjari**:
```javascript
// Fungua console ya kivinjari na jaribu API yako
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces dhidi ya Maendeleo ya Ndani

| Kipengele | Maendeleo ya Ndani | GitHub Codespaces |
|--------|-------------------|-------------------|
| **Muda wa Usanidi** | Mrefu (sasisha Python, utegemezi) | Mara moja (mazingira tayari yamesanidiwa) |
| **Upatikanaji wa URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Usanidi wa Bandari** | Moja kwa moja | Mikono (weka bandari kuwa za umma) |
| **Uendelevu wa Faili** | Kompyuta ya ndani | Rejesta ya GitHub |
| **Ushirikiano** | Gumu kushiriki mazingira | Rahisi kushiriki kiungo cha Codespace |
| **Utegemezi wa Intaneti** | Kwa maombi ya API ya AI pekee | Inahitajika kwa kila kitu |

#### Vidokezo vya Maendeleo ya Codespace

**Mabadiliko ya Mazingira katika Codespaces**:
Faili yako `.env` inafanya kazi sawa ndani ya Codespaces, lakini pia unaweza kuweka vigezo vya mazingira moja kwa Codespace:

```bash
# Weka thamani ya mazingira kwa kikao cha sasa
export GITHUB_TOKEN="your_token_here"

# Au ongeza kwenye .bashrc yako kwa kudumu
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Usimamizi wa Bandari**:
- Codespaces hutambua moja kwa moja wakati programu yako inaanza kusikiliza bandari
- Unaweza kupeleka bandari nyingi kwa wakati mmoja (inayosaidia kama utaongeza hifadhidata baadaye)
- Bandari zinabaki kupatikana mradi Codespace yako inaendelea

**Mtiririko wa Kazi wa Maendeleo**:
1. Fanya mabadiliko ya msimbo katika VS Code
2. FastAPI ina auto-reload (shukrani kwa mode ya reload ya Uvicorn)
3. Jaribu mabadiliko mara moja kupitia URL ya umma
4. Fanya commit na push ukimaliza

> 💡 **Ushauri Bora**: Weka alama URL ya backend ya Codespace wakati wa maendeleo. Kwa kuwa majina ya Codespace ni thabiti, URL haitabadilika mradi unatumia Codespace ile ile.

## Kuunda Uso wa Chat wa Frontend: Hapo Watu Wanakutana na AI

Sasa tutaweka muonekano wa mtumiaji – sehemu inayobainisha jinsi watu wanavyowasiliana na msaidizi wako wa AI. Kama muundo wa interface ya iPhone asili, tunalenga kufanya teknolojia tata ionekane rahisi na ya asili kutumia.

### Kuelewa Mhandisi wa Kisasa wa Frontend

Uso wetu wa chat utakuwa kile tunachokiita "Programu ya Ukurasa Mmoja" au SPA. Badala ya mbinu ya zamani ambapo kila kubonyeza kunapakia ukurasa mpya, app yetu husasisha kwa simu na papo hapo:

**Tovuti za zamani**: Kama kusoma kitabu cha karatasi – unageuza kurasa mpya kabisa  
**App yetu ya chat**: Kama kutumia simu yako – kila kitu kinatiririka na kusasishwa bila shida

```mermaid
graph TD
    A[Mtu Mtumiaji Andika Ujumbe] --> B[JavaScript Inakamata Kuingiza]
    B --> C[Thibitisha & Panga Data]
    C --> D[Tuma kwa API ya Backend]
    D --> E[Onyesha Hali ya Kupakia]
    E --> F[Pokea Jibu la AI]
    F --> G[Sabisha Kiolesura cha Mazungumzo]
    G --> H[Tayari kwa Ujumbe Ufuo]
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
    
    ChatApp --> DOM : inaendesha
    ChatApp --> FastAPI : inatuma maombi
```
### Nguzo Tatu za Maendeleo ya Frontend

Kila programu ya frontend – kutoka tovuti rahisi hadi app ngumu kama Discord au Slack – imejengwa kwa teknolojia kuu tatu. Fikiri kama msingi wa kila unachoona na kuwasiliana nacho kwenye wavuti:

**HTML (Muundo)**: Hii ni msingi wako  
- Hutoa maelezo kuhusu vipengele vilivyopo (vitufe, maeneo ya maandishi, chombo)  
- Hutoa maana kwa maudhui (hii ni kichwa, hii ni fomu, n.k.)  
- Hutengeneza muundo wa msingi unaoendeshwa na kila kitu kingine

**CSS (Uwasilishaji)**: Hii ni mbunifu wako wa ndani  
- Inafanya kila kitu kuonekana nzuri (rangi, fonti, upangaji)  
- Inasimamia ukubwa tofauti za skrini (simu vs laptop vs kibao)  
- Hutoa michoro laini na mrejesho wa kuona

**JavaScript (Tabia)**: Hii ni ubongo wako  
- Inajibu kile watumiaji wanachofanya (kubofya, kuandika, kurusha chini)  
- Inazungumza na backend yako na kusasisha ukurasa  
- Inafanya kila kitu kuwa mwingiliano na nguvu

**Fikiri kama usanifu wa usanifu:**
- **HTML**: Ramani ya muundo (kueleza nafasi na uhusiano)
- **CSS**: Muundo wa urembo na mazingira (mwelekeo wa kuona na uzoefu wa mtumiaji)
- **JavaScript**: Mifumo ya mitambo (utendaji na mwingiliano)

### Kwa Nini Usanifu wa JavaScript wa Kisasa Ni Muhimu

App yetu ya chat itatumia mifumo ya kisasa ya JavaScript ambayo utaiona katika programu za kitaalamu. Kuelewa dhana hizi kutakusaidia unavyoendelea kama mendelezaji:

**Usanifu wa Mifumo ya Darasa**: Tutapanga msimbo wetu kwa madarasa, ambayo ni kama kutengeneza ramani za vitu  
**Async/Await**: Njia ya kisasa kushughulikia shughuli zinazochukua muda (kama miito ya API)  
**Programu Iliyotegemea Matukio**: App yetu inajibu hatua za mtumiaji (kama kubofya, kubonyeza vidokezo) badala ya kuendesha kwa mizunguko  
**Udhibiti wa DOM**: Kusasisha mabadiliko ya ukurasa wa wavuti kwa misukumo ya mtumiaji na majibu ya API

### Mpangilio wa Mradi

Unda saraka ya frontend na mpangilio huu uliopangwa:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Kuelewa usanifu:**
- **Inatenga** masuala kati ya muundo (HTML), tabia (JavaScript), na uwasilishaji (CSS)  
- **Inadumisha** muundo rahisi wa faili unaoweza kutembea na kuhariri kwa urahisi  
- **Inafuata** mbinu bora za maendeleo ya wavuti kwa usimamizi na uendelevu

### Kujenga Msingi wa HTML: Muundo wa Semantic kwa Upatikanaji

Tuanze na muundo wa HTML. Maendeleo ya wavuti ya kisasa yanasisitiza "HTML semantic" – kutumia vipengele vya HTML vinavyoelezea wazi kusudi lao, si tu muonekano. Hii hufanya programu yako ipatikane kwa wasomaji wa skrini, injini za utafutaji, na zana nyingine.

**Kwa nini HTML semantic ni muhimu**: Fikiria unamuambia mtu app yako ya chat kwa simu. Ungesema "kuna kichwa lenye kichwa na maelezo, eneo kuu ambapo mazungumzo yanaonekana, na fomu chini kwa kuandika ujumbe." HTML semantic hutumia vipengele vinavyolingana na maelezo haya ya asili.

Tengeneza `index.html` na alama hii iliyoundwa kwa kufikiria:

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

**Kuelewa kila kipengele cha HTML na kusudi lake:**

#### Muundo wa Hati
- **`<!DOCTYPE html>`**: Inamfahamisha kivinjari hii ni HTML5 ya kisasa  
- **`<html lang="en">`**: Inaeleza lugha ya ukurasa kwa wasomaji wa skrini na zana za tafsiri  
- **`<meta charset="UTF-8">`**: Inahakikisha usimbaji wa herufi uko sahihi kwa maandishi ya kimataifa  
- **`<meta name="viewport"...>`**: Inafanya ukurasa uwe na muundo unaojibu simu kwa kudhibiti boriti na kiwango

#### Vipengele vya Semantic
- **`<header>`**: Hutoa sehemu ya juu wazi ya kichwa na maelezo  
- **`<main>`**: Inaonyesha eneo kuu la maudhui (ambapo mazungumzo hufanyika)  
- **`<form>`**: Ni sahihi kwa kisheria kwa ingizo la mtumiaji, hurahisisha kuvinjari kwa keyboard

#### Sifa za Upatikanaji
- **`role="log"`**: Inaambia wasomaji wa skrini eneo hili lina daftari la muda wa maandishi  
- **`aria-live="polite"`**: Inatangaza ujumbe mpya kwa wasomaji wa skrini bila kuvuruga  
- **`aria-label`**: Hutoa maelezo ya vidhibiti vya fomu  
- **`required`**: Kivinjari kinathibitisha mtumiaji anaingiza ujumbe kabla ya kutuma

#### Mchanganyiko wa CSS na JavaScript
- **`class` attributes**: Hutoa alama za mtindo kwa CSS (mfano, `chat-container`, `input-group`)  
- **`id` attributes**: Huruhusu JavaScript kupata na kuhariri vipengele maalumu  
- **Mahali pa script**: Faili la JavaScript linaletwa mwishoni ili HTML ipakie kwanza

**Kwa nini muundo huu unaendana:**
- **Mtiririko wa mantiki**: Kichwa → Maudhui kuu → Fomu la ingizo linaendana na mfululizo wa kusoma asilia  
- **Upatikanaji wa keyboard**: Watumiaji wanaweza kutumia tab kupitia vipengele vyote vya kuingilia  
- **Rafiki kwa wasomaji wa skrini**: Alama za wazi na maelezo kwa watumiaji wenye ulemavu wa kuona  
- **Inayojibu simu**: Meta tag ya viewport inaruhusu muundo unaojibu  
- **Uboreshaji Endelevu**: Hufanya kazi hata kama CSS au JavaScript itashindikana kupakia

### Kuongeza JavaScript ya Mwingiliano: Mantiki ya Programu ya Wavuti ya Kisasa
Sasa tufanye JavaScript inayoleta kiolesura chetu cha mazungumzo kuwa hai. Tutatumia mitindo ya kisasa ya JavaScript ambayo utakutana nayo katika maendeleo ya wavuti ya kitaalamu, ikiwa ni pamoja na madarasa ya ES6, async/await, na programu zinazotegemea matukio.

#### Kuelewa Mimariko ya Kisasa ya JavaScript

Badala ya kuandika msururu wa vipengele (mfululizo wa kazi ambazo zinafanya kwa mpangilio), tutaunda **mimari inayotegemea madarasa**. Fikiria darasa kama ramani ya jinsi ya kutengeneza vitu – kama vile ramani za mbunifu jengo zinazoweza kutumika kujenga nyumba nyingi.

**Kwa nini kutumia madarasa kwa maombi ya wavuti?**
- **Mpangilio**: Kazi zote zinazohusiana zimeunganishwa pamoja
- **Tumia tena**: Unaweza kuunda matukio mengi ya mazungumzo kwenye ukurasa mmoja
- **Matengenezo rahisi**: Rahisi kuchunguza hitilafu na kubadilisha vipengele maalum
- **Kiwango cha kitaalamu**: Mtindo huu hutumika katika mifumo kama React, Vue, na Angular

Unda `app.js` ukiwa na JavaScript hii ya kisasa, iliyopangwa vizuri:

```javascript
// app.js - Mmantikio wa programu ya mazungumzo ya kisasa

class ChatApp {
    constructor() {
        // Pata marejeo kwa vipengele vya DOM tunavyohitaji kuvitawala
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Sanidi URL ya seva yako hapa
        this.BASE_URL = "http://localhost:5000"; // Sasisha hii kwa mazingira yako
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Weka wasikilizaji wa matukio unapounda programu ya mazungumzo
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Sikiliza kuwasilishwa kwa fomu (wakati mtumiaji anabonyeza Tuma au anabonyeza Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Pia sikiliza kitufe cha Enter kwenye sehemu ya ingizo (UX bora)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Zuia fomu isiboreshe ukurasa
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Usitume ujumbe tupu
        
        // Toa mrejesho kwa mtumiaji kwamba kuna jambo linaendelea
        this.setLoading(true);
        
        // Ongeza ujumbe wa mtumiaji kwenye mazungumzo mara moja (UI ya matumaini)
        this.appendMessage(messageText, "user");
        
        // Futa sehemu ya ingizo ili mtumiaji aweze kuandika ujumbe unaofuata
        this.input.value = '';
        
        try {
            // Piga API ya AI na subiri jibu
            const reply = await this.callAPI(messageText);
            
            // Ongeza jibu la AI kwenye mazungumzo
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Rejesha kiolesura kwa kutumia mafanikio au kushindwa
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

// Anzisha programu ya mazungumzo wakati ukurasa unapopakia
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Kuelewa Kila Dhana ya JavaScript

**Muundo wa Darasa la ES6**:
```javascript
class ChatApp {
    constructor() {
        // Hii inakwenda wakati unapotengeneza mfano mpya wa ChatApp
        // Ni kama kazi ya "setup" kwa mazungumzo yako
    }
    
    methodName() {
        // Mbinu ni kazi ambazo ni mali ya darasa
        // Wanaweza kufikia mali za darasa kwa kutumia "this"
    }
}
```

**Mtindo wa Async/Await**:
```javascript
// Njia ya zamani (jeuri ya kurejea):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Njia ya kisasa (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Programu Inayotegemea Matukio**:
Badala ya kuangalia kila wakati kama kitu kimefanyika, tunasikiliza matukio:
```javascript
// Wakati fomu inapotumwa, endesha handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Wakati kitufe cha Enter kinapobonyezwa, pia endesha handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Udhibiti wa DOM**:
```javascript
// Tengeneza vipengele vipya
const messageElement = document.createElement("div");

// Badilisha mali zao
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Ongeza kwenye ukurasa
this.messages.appendChild(messageElement);
```

#### Usalama na Maarifa Bora

**Kuzuia XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Hii huhifadhi HTML kiotomatiki
    return div.innerHTML;
}
```

**Kwa nini hili ni muhimu**: Ikiwa mtumiaji ataandika `<script>alert('hack')</script>`, kazi hii inahakikisha inaonyeshwa kama maandishi badala ya kutekelezwa kama msimbo.

**Udhibiti wa Makosa**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Onyesha kosa rafiki kwa mtumiaji badala ya kuvunja programu
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Mambo ya Kuzingatia Kuhusu Uzoefu wa Mtumiaji**:
- **UI ya matumaini**: Ongeza ujumbe wa mtumiaji mara moja, usisubiri jibu la seva
- **Hali ya kupakia**: Zima vifungo na onyesha "Inatumwa..." wakati wa kusubiri
- **Kuzungusha kiotomatiki**: Weka ujumbe mpya uwe waonekana
- **Uthibitisho wa ingizo**: Usitume ujumbe tupu
- **Njia za ufunguo wa kibodi**: Kitufe cha Enter kinatuma ujumbe (kama programu halisi za mazungumzo)

#### Kuelewa Mtiririko wa Programu

1. **Ukifungua ukurasa** → tukio la `DOMContentLoaded` linaanzishwa → `new ChatApp()` inaumbwa
2. **Kijenga kinaendesha** → hupata marejeleo ya vipengele vya DOM → huandaa wasikilizaji wa matukio
3. **Mtumiaji anaandika ujumbe** → Bonyeza Enter au bonyeza Send → `handleSubmit` inaendesha
4. **handleSubmit** → Inathibitisha ingizo → Inaonyesha hali ya kupakia → Inaita API
5. **API inajibu** → Ongeza ujumbe wa AI kwenye mazungumzo → Rudisha hali ya kiolesura kuweza kutumika tena
6. **Tayari kwa ujumbe unaofuata** → Mtumiaji anaweza kuendelea kuzungumza

Mimari hii inaweza kupanuliwa – unaweza kwa urahisi kuongeza vipengele kama kuhariri ujumbe, kupakia faili, au nyuzi nyingi za mazungumzo bila kuandika upya muundo mkuu.

### 🎯 Ukaguzi wa Kisia: Mimariko ya Kisasa ya Frontend

**Kuelewa Mimariko**: Umetekeleza programu kamili ya ukurasa mmoja kwa kutumia mitindo ya kisasa ya JavaScript. Hii inaonyesha maendeleo ya frontendi ya kiwango cha kitaalamu.

**Dhana Muhimu Ulizozifahamu**:
- **Mimari ya darasa la ES6**: Muundo wa msimbo uliopangwa na rahisi kutunza
- **Mitindo ya Async/Await**: Programu ya kisasa isiyo sambaa
- **Programu Inayotegemea Matukio**: Ubunifu unaojibu wa kiolesura cha mtumiaji
- **Mbinu Bora za Usalama**: Kuzuia XSS na uthibitisho wa ingizo

**Muunganisho wa Sekta**: Mitindo uliyojifunza (mimari ya darasa, shughuli za async, udhibiti wa DOM) ni msingi wa mifumo ya kisasa kama React, Vue, na Angular. Unajenga kwa kufikiria kama inayotumika katika maombi ya uzalishaji.

**Swali la Tafakari**: Unaweza kutumiaje programu hii ya mazungumzo kushughulikia mazungumzo mengi au uthibitishaji wa mtumiaji? Fikiria mabadiliko ya mimari yanayohitajika na jinsi muundo wa darasa unavyobadilika.

### Kubuni Kiolesura Chako cha Mazungumzo

Sasa tujenge kiolesura cha mazungumzo cha kisasa, chenye mvuto wa kuona kwa kutumia CSS. Urembo mzuri hufanya programu yako ionekane ya kitaalamu na kuboresha uzoefu wa mtumiaji kwa ujumla. Tutatumia sifa za kisasa za CSS kama Flexbox, CSS Grid, na mali za desturi kwa muundo unaojibu na unaopatikana kwa ajili ya wote.

Unda `styles.css` ukiwa na mitindo hii kamili:

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

**Kuelewa mimariko ya CSS:**
- **Inatumia** mali za desturi za CSS (mabadiliko ya thamani) kwa muundo thabiti na urahisi wa matengenezo
- **Inatekeleza** mpangilio wa Flexbox kwa muundo unaojibu na upangaji sahihi
- **Inajumuisha** mienendo laini ya ujumbe bila kusumbua
- **Inatoa** tofauti za kuona kati ya ujumbe wa mtumiaji, majibu ya AI, na hali za makosa
- **Inaunga mkono** muundo unaofaa kwa vifaa vya desktop na simu za mkononi
- **Inazingatia** upatikanaji kwa upendeleo wa kupunguza mienendo na uwiano mzuri wa rangi
- **Inatoa** msaada wa hali ya giza kulingana na upendeleo wa mfumo wa mtumiaji

### Kusanidi URL ya Seva Yako ya Backend

Hatua ya mwisho ni kusasisha `BASE_URL` katika JavaScript yako ili ifuate seva yako ya backend:

```javascript
// Kwa maendeleo ya ndani
this.BASE_URL = "http://localhost:5000";

// Kwa GitHub Codespaces (badilisha na URL yako halisi)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Kujua URL ya backend yako:**
- **Maendeleo ya eneo la karibu**: Tumia `http://localhost:5000` ikiwa unafanya kazi mbili, frontend na backend, eneo hilo moja
- **Codespaces**: Tafuta URL ya backend kwenye kichupo cha Ports baada ya kufungua mlangoni 5000 kwa umma
- **Uzalishaji**: Badilisha na kikoa chako halisi unapopeleka huduma kwenye mtoa huduma

> 💡 **Kidokezo cha Mtihani**: Unaweza kujaribu backend yako moja kwa moja kwa kutembelea URL ya mzizi katika kivinjari chako. Unapaswa kuona ujumbe wa karibu kutoka kwa seva yako ya FastAPI.



## Upimaji na Uwekaji Mtandaoni

Sasa baada ya kuwa na vipengele vya frontendi na backend vimejengwa, tukajaribu kama yote yanafanya kazi pamoja na kuchunguza chaguzi za kuweka mtandaoni ili kushiriki msaidizi wako wa mazungumzo na wengine.

### Mtiririko wa Kujaribu Kwenye Eneo la Mitaa

Fuatilia hatua hizi kujaribu programu yako kamili:

```mermaid
graph TD
    A[Anzisha Mtoaji wa Backend] --> B[Rekebisha Vigezo vya Mazingira]
    B --> C[Jaribu Vipindi vya API]
    C --> D[Fungua Frontend kwenye Kivinjari]
    D --> E[Jaribu Uwezo wa Mazungumzo]
    E --> F[Rekebisha Tatizo Lolote]
```
**Mchakato wa hatua kwa hatua wa majaribio:**

1. **Anzisha seva yako ya backend**:
   ```bash
   cd backend
   source venv/bin/activate  # au venv\Scripts\activate kwenye Windows
   python api.py
   ```

2. **Thibitisha API ina kazi**:
   - Fungua `http://localhost:5000` katika kivinjari chako
   - Unapaswa kuona ujumbe wa karibu kutoka kwa seva yako ya FastAPI

3. **Fungua frontend yako**:
   - Nenda kwenye saraka ya frontend
   - Fungua `index.html` katika kivinjari chako
   - Au tumia ugani wa Live Server wa VS Code kwa uzoefu bora wa maendeleo

4. **Jaribu kazi ya mazungumzo**:
   - Andika ujumbe katika sehemu ya ingizo
   - Bonyeza "Send" au bonyeza Enter
   - Thibitisha AI inajibu ipasavyo
   - Angalia console ya kivinjari kwa makosa ya JavaScript

### Kutatua Masuala ya Kawaida

| Tatizo | Dalili | Suluhisho |
|---------|----------|----------|
| **Hitilafu ya CORS** | Frontend haiwezi kufikia backend | Hakikisha FastAPI CORSMiddleware imeandaliwa vizuri |
| **Hitilafu ya API Key** | Misingi ya 401 Unauthorized | Angalia toleo lako la mazingira `GITHUB_TOKEN` |
| **Muunganisho Umezuiwa** | Makosa ya mtandao frontend | Hakikisha URL ya backend ni sahihi na seva ya Flask inaendesha |
| **Hakuna Jibu la AI** | Majibu tupu au ya makosa | Angalia kumbukumbu za backend kwa makosa ya API au hitilafu za uthibitisho |

**Hatua za kawaida za uchunguzi wa hitilafu:**
- **Angalia** Console ya Zana za Developer wa kivinjari kwa makosa ya JavaScript
- **Thibitisha** kichupo cha Mtandao kinaonyesha maombi na majibu ya API kwa mafanikio
- **Kagua** matokeo ya kiolesura cha backend kwa makosa ya Python au matatizo ya API
- **Hakiki** mipangilio ya mazingira imeload kwa usahihi na inapatikana

## 📈 Muda wako wa Mwalimu wa Mageuzi wa AI

```mermaid
timeline
    title Safari Kamili ya Maendeleo ya Programu ya AI
    
    section Misingi ya AI
        Kuelewa AI Inayotengeneza
            : Fahamu dhana za utambuzi wa mifumo
            : Shuhudia udhibiti wa vigezo vya AI
            : Jifunze mbinu za uhandisi wa maelekezo
        
        Muunganisho wa Modeli za GitHub
            : Naviga majukwaa ya huduma za AI
            : Shimika usalama wa uthibitishaji
            : Boreshaji vigezo vya modeli
    
    section Maendeleo ya Backend
        Miundo ya API ya Python
            : Tengeneza programu za FastAPI
            : Tekeleza kazi zisizo za kawaida (async)
            : Unda njia salama za kuingia
        
        Muunganisho wa Huduma za AI
            : Unganishaji na API za AI kutoka nje
            : Shimika ukomo wa kiasi cha maombi
            : Tekeleza mipaka ya makosa
    
    section Utaalamu wa Frontend
        Mifumo ya Kisasa ya JavaScript
            : Shuhudia usanifu wa darasa la ES6
            : Tekeleza mtiririko wa async/await
            : Tengeneza interfaces zinazojibadilisha
        
        Uzoefu wa Mtumiaji wa Wakati Halisi
            : Tengeneza interfaces za mazungumzo zilizo hai
            : Shimika hali za upakiaji
            : Boreshaji mwingiliano wa mtumiaji
    
    section Utayari wa Uzalishaji
        Usalama & Utendaji
            : Tekeleza usimamizi salama wa vibali
            : Zuia udhaifu wa XSS
            : Boreshaji utendaji wa API
        
        Utekelezaji wa Kitaalamu
            : Tengeneza usanifu unaoweza kupanuka
            : Unda msimbo unaotunzwa kwa urahisi
            : Andika mchakato wa maendeleo
```
**🎓 Hatua ya Kuisha Masomo**: Umefanikiwa kujenga programu kamili yenye nguvu za AI ukitumia teknolojia na mitindo ya mibuni inayotumia programu za msaidizi wa AI wa kisasa. Ujuzi huu unaonyesha mseto wa maendeleo ya wavuti wa jadi na ushirikiano wa AI wa kisasa.

**🔄 Uwezo wa Kiwango Kifuatacho**:
- Tayari kuchunguza mifumo ya AI yenye maendeleo (LangChain, LangGraph)
- Imekomeshwa kujenga programu za AI zenye aina nyingi (maandishi, picha, sauti)
- Imetayarishwa kutekeleza hifadhidata za vekta na mifumo ya upokezaji
- Msingi umewekwa kwa kujifunza mashine na marekebisho ya mfano wa AI

## Changamoto ya Wakalimu wa GitHub Copilot 🚀

Tumia hali ya Wakili kumaliza changamoto ifuatayo:

**Maelezo:** Boresha msaidizi wa mazungumzo kwa kuongeza historia ya mazungumzo na uhifadhi wa ujumbe. Changamoto hii itakusaidia kuelewa jinsi ya kusimamia hali katika programu za mazungumzo na kutekeleza uhifadhi wa data kwa uzoefu bora wa mtumiaji.

**Mhimili:** Badilisha programu ya mazungumzo ili kujumuisha historia ya mazungumzo inayodumu kati ya vikao. Ongeza kazi ya kuhifadhi ujumbe wa mazungumzo kwenye hifadhi ya ndani, onesha historia ya mazungumzo wakati ukurasa unapopakia, na jumuisha kitufe cha "Futa Historia". Pia tekeleza viashiria vya uandikaji na nyakati za ujumbe kufanya uzoefu wa mazungumzo kuwa halisi zaidi.

Jifunze zaidi kuhusu [hali ya wakili](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## Kazi: Tengeneza Msaidizi Wako wa AI Binafsi

Sasa utaunda utekelezaji wako wa msaidizi wa AI binafsi. Badala ya kunakili msimbo wa mafunzo tu, hii ni fursa ya kutumia dhana huku unajenga kitu kinachokamilisha maslahi na matumizi yako binafsi.

### Sharti za Mradi

Tuweke mradi wako ukiwa na muundo safi, uliopangwa:

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

### Kazi Muhimu za Utekelezaji

**Maendeleo ya Backend:**
- **Chukua** msimbo wetu wa FastAPI na uufanye wake
- **Tengeneza** tabia ya kipekee ya AI – labda msaidizi wa upishi, mshirika wa uandishi wa ubunifu, au rafiki wa kusomea?
- **Ongeza** udhibiti madhubuti wa makosa ili programu yako isivunjike wakati mambo yanaposhindikana
- **Andika** nyaraka wazi kwa yeyote anayetaka kuelewa jinsi API yako inavyofanya kazi

**Maendeleo ya Frontend:**
- **Jenga** kiolesura cha mazungumzo kinachoonekana kuwa rahisi na kinachokaribisha
- **Andika** JavaScript safi, ya kisasa ambayo utajivunia kuonyesha kwa watengenezaji wengine
- **Buni** mitindo ya desturi inayowakilisha tabia ya AI yako – mchangamfu na yenye rangi? Safi na ya chini kabisa? Yako kabisa!
- **Hakikisha** inafanya kazi vizuri kwenye simu na kompyuta

**Sharti za Uboreshaji Binafsi:**
- **Chagua** jina na tabia ya kipekee kwa msaidizi wako wa AI – labda kitu kinachowakilisha maslahi yako au matatizo unayotaka kutatua
- **Boresha** muundo wa kuona ili uendane na hali ya msaidizi wako
- **Andika** ujumbe wa ukaribisho mzuri unaowafanya watu watake kuanza kuzungumza
- **Jaribu** msaidizi wako na aina mbalimbali za maswali kuona jinsi anavyojibu

### Mapendekezo ya Uboreshaji (Hiari)

Unataka kupeleka mradi wako hatua inayofuata? Hapa kuna mawazo ya kufurahia:

| Kipengele | Maelezo | Ujuzi Utayafanyia Mazoezi |
|---------|-------------|------------------------|
| **Historia ya Ujumbe** | Kukumbuka mazungumzo hata baada ya ukurasa kusasishwa | Kufanya kazi na localStorage, kushughulikia JSON |
| **Viashiria vya Kuandika** | Onyesha "AI anaandika..." wakati wa kusubiri majibu | Mienendo ya CSS, programu asynchronous |
| **Nyakati za Ujumbe** | Onyesha lini kila ujumbe umetumwa | Muundo wa tarehe/nyakati, ubunifu wa uzoefu wa mtumiaji |
| **Kukabidhi Mazungumzo** | Ruhusu watumiaji kupakua mazungumzo yao | Udhibiti faili, usafirishaji wa data |
| **Kubadilisha Mandhari** | Badilisha kati ya hali nyepesi/giza | Mali za CSS, mapendeleo ya mtumiaji |
| **Ingizo la Sauti** | Ongeza utendakazi wa hotuba hadi maandishi | API za wavuti, upatikanaji |

### Upimaji na Nyaraka

**Uhakiki wa Ubora:**
- **Jaribu** programu yako kwa aina tofauti za ingizo na hali maalum
- **Thibitisha** muundo unaojibu unafanya kazi kwenye saizi mbalimbali za skrini
- **Angalia** upatikanaji kwa urambazaji wa kibodi na wasomaji wa skrini
- **Thibitisha** HTML na CSS kwa kufuata viwango

**Sharti za Nyaraka:**
- **Andika** README.md inayoelezea mradi wako na jinsi ya kuutumia
- **Jumuisha** picha za skrini za kiolesura chako cha mazungumzo kinavyofanya kazi
- **Andika** vipengele vyovyote maalum au ubinafsishaji ulioufanya
- **Toa** maelezo wazi ya usanidi kwa watengenezaji wengine

### Miongozo ya Kuwasilisha

**Vifurushi vya Mradi:**
1. Folda kamili ya mradi yenye msimbo wote chanzo
2. README.md yenye maelezo ya mradi na maelekezo ya usanidi
3. Picha za skrini zinaonyesha msaidizi wako wa mazungumzo akifanya kazi
4. Tafakari fupi juu ya kile ulichojifunza na changamoto ulizokutana nazo

**Vigezo vya Tathmini:**
- **Ufanisi**: Je, msaidizi wa mazungumzo anafanya kazi kama inavyotarajiwa?
- **Ubora wa Msimbo**: Je, msimbo umepangwa vizuri, umeandikwa maelezo, na unaendeshwa kwa urahisi?
- **Muundo**: Je, kiolesura kina mvuto wa kuona na kinavutia mtumiaji?
- **Ubunifu**: Utekelezaji wako ni wa kipekee kiasi gani na umebinafsishwa vipi?
- **Nyaraka**: Je, maagizo ya usanidi ni wazi na kamili?

> 💡 **Kidokezo cha Mafanikio**: Anza na mahitaji ya msingi kwanza, kisha ongeza uboreshaji baada ya kila kitu kuwa kinavyofanya kazi. Lenga kuunda uzoefu mzuri kabla ya kuongeza vipengele vya hali ya juu.

## Suluhisho

[Suluhisho](./solution/README.md)

## Changamoto za Ziada

Tayari kuchukua msaidizi wako wa AI hatua inayofuata? Jaribu changamoto hizi za hali ya juu zitakazoroga uelewa wako wa ushirikiano wa AI na maendeleo ya wavuti.

### Uboreshaji wa Tabia

Uchawi halisi hutokea unapoleta tabia ya kipekee kwa msaidizi wako wa AI. Jaribu maagizo tofauti ya mfumo kuunda wasaidizi maalum:

**Mfano wa Msaidizi wa Kitaalamu:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Mfano wa Msaidizi wa Uandishi wa Ubunifu:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Mfano wa Mshauri wa Kiufundi:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Uboreshaji wa Frontend

Badilisha kiolesura chako cha mazungumzo kwa maboresho haya ya kuona na utendaji:

**Sifa za CSS za Juu:**
- **Tekeleza** mienendo laini na mabadiliko ya ujumbe
- **Ongeza** muundo wa bubbule maalum za mazungumzo kwa kutumia umbo la CSS na miale ya rangi
- **Tengeneza** mienendo ya kiashiria cha kuandika wakati AI anafanya "kufikiria"
- **Buni** hisia za emoji au mfumo wa tathmini ya ujumbe

**Uboreshaji wa JavaScript:**
- **Ongeza** njia za mkato wa kibodi (Ctrl+Enter kutuma, Escape kufuta ingizo)
- **Tekeleza** utambuzi na uchujaji wa ujumbe
- **Tengeneza** kipengele cha kusafirisha mazungumzo (kupakua kama maandishi au JSON)
- **Ongeza** uhifadhi kiotomatiki kwenye localStorage kuepuka kupoteza ujumbe

### Ushirikiano wa AI wa Juu

**Tabia Nyingi za AI:**
- **Tengeneza** menyu ya kunyang’anywa kuchagua kati ya tabia tofauti za AI
- **Hifadhi** tabia inayopendelewa ya mtumiaji katika localStorage
- **Tekeleza** kubadilisha muktadha unaoendeleza mtiririko wa mazungumzo

**Vipengele Mahiri vya Jibu:**
- **Ongeza** ufahamu wa muktadha wa mazungumzo (AI anakumbuka ujumbe uliopita)
- **Tekeleza** mapendekezo mahiri kulingana na mada ya mazungumzo  
- **Unda** vitufe vya majibu ya haraka kwa maswali ya kawaida  

> 🎯 **Lengo la Kujifunza**: Changamoto hizi za ziada zinakusaidia kuelewa mifumo ya maendeleo ya wavuti yenye maendeleo ya hali ya juu na mbinu za uunganishaji wa AI zinazotumiwa katika programu za uzalishaji.  

## Muhtasari na Hatua Zitakazofuata  

Hongera! Umefanikiwa kujenga msaidizi wa mazungumzo unaotumia AI kutoka mwanzo. Mradi huu umekupa uzoefu wa vitendo na teknolojia za kisasa za maendeleo ya wavuti na uunganishaji wa AI – ujuzi unaozidi kuwa muhimu katika mazingira ya teknolojia ya sasa.  

### Uliyofanikiwa Kutanua  

Katika somo hili, umejifunza teknolojia na dhana kuu kadhaa:  

**Maendeleo ya Backend:**  
- **Umeunganishwa** na GitHub Models API kwa ajili ya utendaji wa AI  
- **Umejenga** API ya RESTful kwa kutumia Flask na usimamizi sahihi wa makosa  
- **Umetekeleza** uthibitishaji salama kwa kutumia mabadiliko ya mazingira  
- **Umeweka** CORS kwa maombi ya kuvuka-meneo kati ya frontend na backend  

**Maendeleo ya Frontend:**  
- **Umeunda** kiolesura cha mazungumzo kinachobadili ukubwa kwa kutumia HTML semantiki  
- **Umetumia** JavaScript za kisasa na async/await pamoja na usanifu wa darasa  
- **Umetengeneza** kiolesura cha kuvutia kwa kutumia CSS Grid, Flexbox, na michoro ya michoro  
- **Umeongeza** vipengele vya upatikanaji na kanuni za muundo unaobadilika saizi  

**Uunganishaji wa Full-Stack:**  
- **Umeunganisha** frontend na backend kupitia simu za API za HTTP  
- **Umesimamia** mwingiliano wa wakati halisi wa mtumiaji na mtiririko wa data usio na usawa  
- **Umetekeleza** usimamizi wa makosa na mrejesho kwa mtumiaji katika programu nzima  
- **Umejaribu** mtiririko kamili wa programu kutoka kwa ingizo la mtumiaji hadi jibu la AI  

### Matokeo Muhimu ya Kujifunza  

```mermaid
mindmap
  root((Ujuzi wa AI Chat App))
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
Mradi huu umekujulisha misingi ya kujenga programu zinazoendeshwa na AI, ambayo ni mustakabali wa maendeleo ya wavuti. Sasa unaelewa jinsi ya kuingiza uwezo wa AI katika programu za wavuti za jadi, kuunda uzoefu wa mtumiaji unaovutia unaoonekana kuwa mwenye akili na wa haraka.  

### Matumizi ya Kitaalamu  

Ujuzi ulioupata katika somo hili unatumika moja kwa moja katika taaluma za kisasa za maendeleo ya programu:  

- **Maendeleo ya wavuti ya full-stack** kwa kutumia mifumo na API za kisasa  
- **Uunganishaji wa AI** katika programu za wavuti na programu za simu  
- **Ubunifu na maendeleo ya API** kwa usanifu wa microservices  
- **Maendeleo ya kiolesura cha mtumiaji** kwa kuzingatia upatikanaji na muundo unaobadilika ukubwa  
- **Mazoezi ya DevOps** ikijumuisha usanidi wa mazingira na utoaji   

### Kuendeleza Safari Yako ya Maendeleo ya AI  

**Hatua Zinazo Fuata za Kujifunza:**  
- **Chunguza** mifano na API za AI za hali ya juu zaidi (GPT-4, Claude, Gemini)  
- **Jifunze** mbinu za uhandisi wa prompt kwa majibu bora ya AI  
- **Soma** kuhusu ubunifu wa mazungumzo na kanuni za uzoefu wa mtumiaji wa chatbot  
- **Chunguza** usalama wa AI, maadili, na mbinu za maendeleo ya AI kwa uwajibikaji  
- **Jenga** programu tata zaidi zenye kumbukumbu za mazungumzo na ufahamu wa muktadha  

**Mawazo ya Miradi ya Juu:**  
- Vyumba vya mazungumzo vya watumiaji wengi na udhibiti wa AI  
- Chatbots za huduma kwa wateja zinazotumia AI  
- Msaada wa kufundisha wa kielimu wenye mafunzo binafsi  
- Washirika wa uandishi wa ubunifu wenye tabia mbalimbali za AI  
- Msaidizi wa nyaraka za kiufundi kwa watengenezaji  

## Kuanzisha na GitHub Codespaces  

Unataka kujaribu mradi huu katika mazingira ya maendeleo ya wingu? GitHub Codespaces inatoa usanidi kamili wa maendeleo katika kivinjari chako, bora kwa kujaribu programu za AI bila haja ya usanidi wa eneo lako la mashine.  

### Kuweka Mazingira Yako ya Maendeleo  

**Hatua 1: Unda Kutoka Kwenye Kiolezo**  
- **Tembelea** hazina ya [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Bonyeza** "Use this template" juu kulia (hakikisha umeingia kwenye GitHub)  

![Create from template interface showing the green "Use this template" button](../../../translated_images/sw/template.67ad477109d29a2b.webp)  

**Hatua 2: Anzisha Codespaces**  
- **Fungua** hazina uliyounda hivi karibuni  
- **Bonyeza** kitufe cha kijani "Code" na chagua "Codespaces"  
- **Chagua** "Create codespace on main" kuanzisha mazingira yako ya maendeleo  

![Create codespace interface with options for launching cloud development environment](../../../translated_images/sw/codespace.bcecbdf5d2747d3d.webp)  

**Hatua 3: Usanidi wa Mazingira**  
Mara wakati Codespace yako ianzishwa, utakuwa na:  
- **Zana zilizo wekwa tayari** Python, Node.js, na zana zote zinazohitajika za maendeleo  
- **Kiolesura cha VS Code** na viendelezi vya maendeleo ya wavuti  
- **Ufikiaji wa terminal** kwa kuendesha seva za backend na frontend  
- **Kuweka mbele bandari** kwa ajili ya kujaribu programu zako  

**Nini Codespaces hutolewa:**  
- **Hutoa kuondoa matatizo ya usanidi wa mazingira ya eneo lako**  
- **Hutoa mazingira thabiti ya maendeleo kwa vifaa mbalimbali**  
- **Inajumuisha zana na viendelezi vilivyosanidiwa kwa maendeleo ya wavuti**  
- **Inatoa uunganisho mzuri na GitHub kwa usimamizi wa matoleo na ushirikiano**  

> 🚀 **Kipendekezo cha Mtaalamu**: Codespaces ni bora kwa kujifunza na kutunga mfano wa programu za AI kwa kuwa hutatua kabisa matatizo ya usanidi wa mazingira, ikikuruhusu kuzingatia kujenga na kujifunza badala ya kutatua changamoto za usanidi.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kiasi cha Masuala**:  
Nyaraka hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Wakati tunajitahidi kwa usahihi, tafadhali fahamu kwamba tafsiri za moja kwa moja zinaweza kuwa na makosa au kutokukamilika. Nyaraka ya asili katika lugha yake ya asili inapaswa kuchukuliwa kama chanzo halali. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inashauriwa. Hatutawajibika kwa mkanganyiko wowote au tafsiri potofu zitokanazo na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->