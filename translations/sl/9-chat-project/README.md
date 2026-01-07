<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T09:47:15+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sl"
}
-->
# Ustvarite Chat asistenta z AI

Se spomnite v Star Treku, ko je posadka brezskrbno klepetala z računalnikom ladje, ga spraševala zahtevna vprašanja in dobivala premišljene odgovore? Kar se je v šestdesetih zdelo kot znanstvena fantastika, lahko zdaj zgradite z uporabo spletnih tehnologij, ki jih že poznate.

V tej lekciji bomo ustvarili AI chat asistenta z uporabo HTML, CSS, JavaScript in nekaj integracije s strežnikom. Odkrijete boste, kako se lahko iste veščine, ki ste jih že spoznavali, povežejo z zmogljivimi AI storitvami, ki razumejo kontekst in ustvarjajo smiselne odgovore.

Premislite o AI kot dostopu do ogromne knjižnice, ki ne samo najde informacije, ampak jih tudi sintetizira v koherentne odgovore, prilagojene vašim specifičnim vprašanjem. Namesto iskanja skozi tisoče strani prejmete neposredne, kontekstualne odgovore.

Integracija poteka s sodelovanjem znanih spletnih tehnologij. HTML ustvari vmesnik za klepet, CSS skrbi za vizualno zasnovo, JavaScript upravlja uporabniške interakcije, strežniški API pa poveže vse to z AI storitvami. To je podobno kot različni deli orkestra, ki skupaj ustvarjajo simfonijo.

Pravzaprav gradimo most med naravnim človeškim komuniciranjem in obdelavo s strojem. Naučili se boste tako tehnične izvedbe integracije AI storitev kot oblikovalskih vzorcev, ki naredijo interakcije intuitivne.

Na koncu te lekcije bo integracija AI manj kot skrivnosten proces in bolj kot še en API, s katerim lahko delate. Razumeli boste temeljne vzorce, ki poganjajo aplikacije, kot so ChatGPT in Claude, z uporabo istih načel spletnega razvoja, ki ste jih že obvladali.

## ⚡ Kaj lahko naredite v naslednjih 5 minutah

**Hitri začetek za zaposlene razvijalce**

```mermaid
flowchart LR
    A[⚡ 5 minut] --> B[Pridobi GitHub žeton]
    B --> C[Preizkusi AI igrišče]
    C --> D[Kopiraj Python kodo]
    D --> E[Oglej si AI odgovore]
```
- **1. minuta**: Obiščite [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) in ustvarite osebni dostopni žeton
- **2. minuta**: Testirajte AI interakcije neposredno v playground vmesniku
- **3. minuta**: Kliknite na zavihek "Code" in kopirajte Python izsek
- **4. minuta**: Zaženite kodo lokalno z vašim žetonom: `GITHUB_TOKEN=your_token python test.py`
- **5. minuta**: Oglejte si svoj prvi AI odgovor, ki ga ustvari vaša koda

**Hitri testni koda**:
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

**Zakaj je to pomembno**: V 5 minutah boste doživeli čar programskih AI interakcij. To predstavlja osnovni gradnik, ki poganja vsako AI aplikacijo, ki jo uporabljate.

Tako bo videti vaš končni projekt:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/screenshot.0a1ee0d123df681b.sl.png)

## 🗺️ Vaša pot učenja razvoja AI aplikacij

```mermaid
journey
    title Od spletnega razvoja do integracije AI
    section Razumevanje temeljev AI
      Odkrijte koncepte generativne AI: 4: You
      Raziščite platformo GitHub Models: 6: You
      Obvladujte AI parametre in pozive: 8: You
    section Integracija na backendu
      Zgradite Python API strežnik: 5: You
      Izvedite AI klice funkcij: 7: You
      Upravite asinhrone operacije: 8: You
    section Razvoj frontenda
      Ustvarite sodoben klepetalni vmesnik: 6: You
      Obvladujte interakcije v realnem času: 8: You
      Zgradite odzivno uporabniško izkušnjo: 9: You
    section Profesionalna uporaba
      Namestite celoten AI sistem: 7: You
      Optimizirajte vzorce zmogljivosti: 8: You
      Ustvarite aplikacijo pripravljeno za produkcijo: 9: You
```
**Cilj vaše poti**: Na koncu te lekcije boste zgradili popolno AI-podprto aplikacijo z uporabo istih tehnologij in vzorcev, ki poganjajo sodobne AI asistente, kot so ChatGPT, Claude in Google Bard.

## Razumevanje AI: od skrivnosti do obvladovanja

Preden se potopimo v kodo, razumimo, s čim delamo. Če ste že uporabljali API-je, poznate osnovni vzorec: pošljete zahtevo, prejmete odgovor.

AI API-ji sledijo podobni strukturi, vendar namesto pridobivanja vnaprej shranjenih podatkov iz baze, generirajo nove odgovore na podlagi vzorcev, naučenih iz ogromnih količin besedila. To je kot razlika med knjižničnim katalogom in pametnim knjižničarjem, ki zna sintetizirati informacije iz več virov.

### Kaj je pravzaprav "Generativna AI"?

Pomislite, kako je Rosettinski kamen omogočil učenjakom razumevanje egipčanskih hieroglifov tako, da so našli vzorce med poznanimi in neznanimi jeziki. AI modeli delujejo podobno – najdejo vzorce v ogromnih količinah besedila, da razumemo, kako jezik deluje, nato uporabijo te vzorce za ustvarjanje ustreznih odgovorov na nova vprašanja.

**To razložim s preprosto primerjavo:**
- **Tradicionalna baza podatkov**: Kot da bi zaprosili za rojstni list – vedno dobite isto točno kopijo
- **Iskalnik**: Kot da vprašate knjižničarja, naj poišče knjige o mačkah – pokaže, kaj je na voljo
- **Generativna AI**: Kot da vprašate pametnega prijatelja o mačkah – pove zanimive stvari s svojimi besedami, prilagojeno temu, kar želite vedeti

```mermaid
graph LR
    A[Vaše vprašanje] --> B[AI model]
    B --> C[Prepoznavanje vzorcev]
    C --> D[Generiranje vsebine]
    D --> E[Odgovor v kontekstu]
    
    F[Podatki za učenje<br/>Knjige, članki, splet] --> B
```
### Kako se AI modeli učijo (poenostavljena različica)

AI modeli se učijo skozi izpostavljenost ogromnim podatkovnim nizom, ki vsebujejo besedila iz knjig, člankov in pogovorov. S tem procesom prepoznavajo vzorce pri:
- Kako so misli strukturirane v pisnem komuniciranju
- Katere besede se pogosto pojavljajo skupaj
- Kako običajno tečejo pogovori
- Kontekstualne razlike med formalno in neformalno komunikacijo

**Podobno kot arheologi razbirajo starodavne jezike**: analizirajo tisoče primerov za razumevanje slovnice, besedišča in kulturnega konteksta, da na koncu lahko razumejo nove tekste z uporabo teh naučenih vzorcev.

### Zakaj GitHub Models?

Uporabljamo GitHub Models iz praktičnega razloga – omogoča nam dostop do AI na ravni podjetij, brez vzpostavitve lastne AI infrastrukture (verjemite, tega zdaj ne želite!). Predstavljajte si, da uporabljate vremenski API, namesto da bi sami postavljali vremenske postaje po vsej regiji in napovedovali vreme.

Gre za "AI kot storitev", najboljše pri tem pa je, da se lahko začnete brezplačno, zato lahko eksperimentirate brez skrbi zaradi visokih stroškov.

```mermaid
graph LR
    A[Frontend klepet UI] --> B[Vaš Backend API]
    B --> C[GitHub modeli API]
    C --> D[Procesiranje AI modela]
    D --> C
    C --> B
    B --> A
```
Za integracijo s strežnikom bomo uporabili GitHub Models, ki omogoča dostop do profesionalnih AI zmogljivosti preko razvijalcem prijaznega vmesnika. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) služi kot testno okolje, kjer lahko preizkušate različne AI modele in razumete njihove zmogljivosti, preden jih implementirate v kodo.

## 🧠 Ekosistem razvoja AI aplikacij

```mermaid
mindmap
  root((Razvoj AI))
    Razumevanje AI
      Generativni modeli
        Prepoznavanje vzorcev
        Generiranje vsebine
        Razumevanje konteksta
        Sestavljanje odgovorov
      AI parametri
        Nadzor temperature
        Omejitve na število tokenov
        Filtriranje top-p
        Sistematični pozivi
    Arhitektura zaledja
      Integracija API
        GitHub modeli
        Avtentikacija
        Obdelava zahtevkov
        Upravljanje napak
      Python infrastruktura
        Okvir FastAPI
        Asinhrone operacije
        Varnost okolja
        Nastavitve CORS
    Izkušnja vmesnika
      Pogovorni vmesnik
        Posodobitve v realnem času
        Zgodovina sporočil
        Povratne informacije uporabnikov
        Stanja nalaganja
      Sodobna spletna tehnologija
        ES6 razredi
        Async/Await
        Manipulacija DOM
        Upravljanje dogodkov
    Profesionalni vzorci
      Najboljše varnostne prakse
        Upravljanje tokenov
        Validacija vhodov
        Preprečevanje XSS
        Robovi napak
      Pripravljenost za produkcijo
        Optimizacija zmogljivosti
        Prilagodljiv dizajn
        Dostopnost
        Strategije testiranja
```
**Osnovno načelo**: Razvoj AI aplikacij združuje tradicionalne spletne razvojne veščine s integracijo AI storitev, ustvarjajoč inteligentne aplikacije, ki se uporabnikom zdijo naravne in odzivne.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/playground.d2b927122224ff8f.sl.png)

**Zakaj je playground tako uporaben:**
- **Preizkusite** različne AI modele, kot so GPT-4o-mini, Claude in drugi (vsi brezplačni!)
- **Testirajte** ideje in pozive pred pisanjem kode
- **Pridobite** vnaprej pripravljene kode v želenem programskem jeziku
- **Nastavite** parametre, kot so stopnja ustvarjalnosti in dolžina odgovora, da vidite, kako vplivajo na izhod

Ko se poigrate, kliknite zavihek "Code" in izberite programski jezik za pridobitev potrebne implementacijske kode.

![Playground choice showing code generation options for different programming languages](../../../translated_images/playground-choice.1d23ba7d407f4758.sl.png)

## Nastavitev Python backend integracije

Zdaj pa uvedimo AI integracijo z uporabo Pythona. Python je odličen za AI aplikacije zaradi preproste sintakse in močnih knjižnic. Začeli bomo s kodo iz GitHub Models playground-a in jo nato preoblikovali v ponovno uporabno, produkcijsko funkcijo.

### Razumevanje osnovne implementacije

Ko vzamete Python kodo iz playgrounda, boste dobili nekaj takšnega. Ne skrbite, če sprva izgleda veliko – poglejmo si korak za korakom:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Za overjanje z modelom boste morali ustvariti osebni dostopni žeton (PAT) v svojih nastavitvah GitHub.
# Ustvarite svoj PAT žeton tako, da sledite navodilom tukaj: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Tukaj se v tej kodi dogaja:**
- **Uvozimo** orodja, ki jih potrebujemo: `os` za branje okoljskih spremenljivk in `OpenAI` za komunikacijo z AI
- **Nastavimo** OpenAI klienta, da kaže na GitHubove AI strežnike, ne na OpenAI neposredno
- **Avtentificiramo** se z GitHub žetonom (več o tem kmalu!)
- **Strukturiramo** naš pogovor z različnimi "vlogami" – pomislite, da postavljamo sceno za igro
- **Pošljemo** zahtevo AI z nekaj parametri za fino nastavitev
- **Izločimo** dejansko besedilo odgovora iz vseh podatkov, ki jih dobimo nazaj

### Razumevanje vlog sporočil: Okvir AI pogovora

AI pogovori uporabljajo specifično strukturo z različnimi "vlogami", ki služijo različnim namenom:

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

**Pomislite na to kot režijo predstave:**
- **Vloga sistema**: Kot usmeritve za igralca – pove AI, kako naj se obnaša, kakšno osebnost naj ima in kako naj odgovarja
- **Vloga uporabnika**: Dejanski vprašanje ali sporočilo osebe, ki uporablja vašo aplikacijo
- **Vloga asistenta**: AI odgovor (tega ne pošljete sami, ampak se pojavi v zgodovini pogovora)

**Primer iz resničnega sveta**: Predstavljajte si, da prijatelja predstavljate nekomu na zabavi:
- **Sporočilo sistema**: "To je moja prijateljica Sarah, zdravnica, ki odlično razloži medicinske koncepte na preprost način"
- **Sporočilo uporabnika**: "Lahko razložiš, kako delujejo cepiva?"
- **Odgovor asistenta**: Sarah odgovarja kot prijazna zdravnica, ne kot odvetnik ali kuhar

### Razumevanje AI parametrov: Fino nastavitev vedenja odgovorov

Numerični parametri v API klicih AI nadzirajo, kako model ustvarja odgovore. Te nastavitve omogočajo prilagoditev obnašanja AI za različne primere uporabe:

#### Temperatura (0.0 do 2.0): Nastavitev ustvarjalnosti

**Kaj naredi**: Nadzoruje, kako ustvarjalni ali predvidljivi bodo odgovori AI.

**Pomislite nanjo kot na jazz improvizacijo glasbenika:**
- **Temperatura = 0.1**: Igra ves čas isto melodijo (zelo predvidljivo)
- **Temperatura = 0.7**: Doda nekaj okusnih variacij, ostane prepoznaven (uravnotežena ustvarjalnost)
- **Temperatura = 1.5**: Polni eksperimentalni jazz z nepričakovanimi obrati (zelo nepredvidljivo)

```python
# Zelo predvidljivi odgovori (dobro za faktografska vprašanja)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Skoraj vedno bo rekel "4"
)

# Kreativni odgovori (dobro za možgansko nevihto)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Ustvaril bo edinstvene, nepričakovane zgodbe
)
```

#### Max Tokens (1 do 4096+): Nadzor dolžine odgovora

**Kaj naredi**: Nastavi omejitev, kako dolg je lahko odgovor AI.

**Premislite o tokenih kot približno enakovrednih besedam** (približno 1 token = 0,75 besede v angleščini):
- **max_tokens=50**: Kratek in jedrnat (kot SMS sporočilo)
- **max_tokens=500**: Lep odstavek ali dva
- **max_tokens=2000**: Podroben razlaga z primeri

```python
# Kratki, jedrnati odgovori
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Zahteva kratek odgovor
)

# Podrobni, obsežni odgovori
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Omogoča podrobne razlage z primeri
)
```

#### Top_p (0.0 do 1.0): Nadzor fokusa

**Kaj naredi**: Nadzoruje, kako osredotočen AI ostane na najbolj verjetnih odgovorih.

**Predstavljajte si, da AI ima ogromno besedišče, razvrščeno po verjetnosti posamezne besede:**
- **top_p=0.1**: Upošteva samo 10 % najbolj verjetnih besed (zelo osredotočeno)
- **top_p=0.9**: Upošteva 90 % možnih besed (bolj ustvarjalno)
- **top_p=1.0**: Upošteva vse (maksimalna raznolikost)

**Na primer**: Če vprašate "Nebo je običajno ..."
- **Nizka top_p**: Zelo verjetno bo rekel "modro"
- **Visoka top_p**: Lahko reče "modro", "oblačno", "prostrano", "spremenljivo", "lepo" itd.

### Vse skupaj: Kombinacije parametrov za različne primere uporabe

```python
# Za dejanske, dosledne odgovore (kot dokumentacijski robot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Za pomoč pri ustvarjalnem pisanju
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Za pogovorne, koristne odgovore (uravnoteženo)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matrika optimizacije parametrov umetne inteligence
    x-axis Nizka ustvarjalnost --> Visoka ustvarjalnost
    y-axis Kratek odgovor --> Dolg odgovor
    
    quadrant-1 Ustvarjalna vsebina
    quadrant-2 Podrobna analiza
    quadrant-3 Hitri podatki
    quadrant-4 Pogovorna umetna inteligenca
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Zakaj so ti parametri pomembni**: Različne aplikacije potrebujejo različne tipe odgovorov. Bot za podporo strankam naj bo dosleden in faktualen (nizka temperatura), medtem ko naj bo pomočnik za ustvarjalno pisanje domiseln in raznolik (visoka temperatura). Razumevanje teh parametrov vam da nadzor nad osebnostjo in slogom odgovora AI.

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

**Razumevanje izboljšane funkcije:**
- **Sprejema** dva parametra: uporabnikov poziv in izbirno sistemsko sporočilo
- **Nudi** privzeto sistemsko sporočilo za splošno obnašanje asistenta
- **Uporablja** pravilne Python tipne namige za boljšo dokumentacijo kode
- **Vključuje** podrobno dokumentacijo, ki pove namen in parametre funkcije
- **Vrača** samo vsebino odgovora, kar poenostavi uporabo v našem spletno API-ju
- **Ohranja** iste model parametre za konsistentno AI vedenje

### Čarobnost sistemskih pozivov: programiranje osebnosti AI

Če parametri nadzorujejo, kako AI razmišlja, sistemski pozivi nadzorujejo, kdo AI misli, da je. To je iskreno ena izmed najbolj kul stvari pri delu z AI – dajete AI celotno osebnost, strokovno znanje in način komuniciranja.

**Pomislite na sistemske pozive kot na izbiro različni igralcev za različne vloge**: Namesto enega generičnega asistenta lahko ustvarite specializirane strokovnjake za različne situacije. Potrebujete potrpežljivega učitelja? Kreativnega partnerja za brainstorming? Resnega poslovnega svetovalca? Samo spremenite sistemski poziv!

#### Zakaj so sistemski pozivi tako močni

Tukaj je fascinantni del: AI modeli so bili usposobljeni na neštetih pogovorih, kjer so ljudje prevzemali različne vloge in ravni strokovnosti. Ko AI daste specifično vlogo, je to kot da vklopite stikalo, ki aktivira vse te naučene vzorce.

**To je kot igralska metoda za AI**: Povejte igralcu "si moder star profesor" in opazujte kako samodejno prilagodi držo, besedišče in manire. AI naredi nekaj podobnega z jezikovnimi vzorci.

#### Oblikovanje učinkovitih sistemskih pozivov: umetnost in znanost

**Anatomija odličnega sistemskega poziva:**
1. **Vloga/Osebnost**: Kdo je AI?
2. **Strokovnost**: Kaj ve?
3. **Slog komunikacije**: Kako govori?
4. **Specifična navodila**: Na kaj se naj osredotoči?

```python
# ❌ Nejasen sistemski poziv
"You are helpful."

# ✅ Podroben, učinkovit sistemski poziv
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Primeri sistemskih pozivov s kontekstom

Oglejmo si, kako različni sistemski pozivi ustvarjajo popolnoma različne AI osebnosti:

```python
# Primer 1: Potrpežljivi učitelj
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Primer 2: Kreativni sodelavec
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Primer 3: Strateški poslovni svetovalec
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Opazovanje sistemskih pozivov v praksi

Preizkusimo isto vprašanje z različnimi sistemskimi pozivi in poglejmo dramatične razlike:

**Vprašanje**: "Kako upravljam z avtentikacijo uporabnikov v svoji spletni aplikaciji?"

```python
# Z navodilom učitelja:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Tipičen odgovor: "Odlično vprašanje! Razdelimo avtentikacijo na preproste korake.
# Pomislite nanjo kot na varnostnika v nočnem klubu, ki preverja osebne izkaznice..."

# Z navodilom za poslovni kontekst:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Tipičen odgovor: "Z vidika strategije je avtentikacija ključna za zaupanje uporabnikov
# in skladnost z zakonodajo. Predstavil bom okvir, ki upošteva varnost,
# uporabniško izkušnjo in razširljivost..."
```

#### Napredne tehnike sistemskih pozivov

**1. Nastavitev konteksta**: Dajte AI ozadje
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Oblikovanje izhoda**: Povejte AI, kako naj strukturira odgovore
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

**3. Nastavitev omejitev**: Določite, česa AI NE sme početi
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Zakaj je to pomembno za vašega klepetalnega asistenta

Razumevanje sistemskih pozivov vam daje izjemno moč za ustvarjanje specializiranih AI asistentov:
- **Bot za uporabniško podporo**: Računajoč, potrpežljiv, pozoren na politike
- **Učni tutor**: Spodbuden, korak za korakom, preverja razumevanje
- **Kreativni partner**: Domiseln, gradi na idejah, sprašuje "kaj pa če?"
- **Tehnični strokovnjak**: Natančen, podroben, pozoren na varnost

**Ključni vpogled**: Ne kličeš le AI API-ja – ustvarjaš prilagojeno AI osebnost, ki služi tvojemu specifičnemu primeru uporabe. To je razlog, da se sodobne AI aplikacije zdijo prilagojene in uporabne namesto generične.

### 🎯 Pedagoški premislek: Programiranje AI osebnosti

**Premor in razmislek**: Pravkar ste se naučili programirati AI osebnosti preko sistemskih pozivov. To je temeljna spretnost v razvoju sodobnih AI aplikacij.

**Hitri samoevalvacijski vprašalnik**:
- Ali lahko razložite, kako se sistemski pozivi razlikujejo od običajnih uporabniških sporočil?
- Kakšna je razlika med parametroma temperature in top_p?
- Kako bi ustvarili sistemski poziv za določen primer uporabe (npr. tutor za programiranje)?

**Povezava z resničnim svetom**: Te tehnike sistemskih pozivov se uporabljajo v vsakem pomembnem AI izdelku – od pomočnika za kodiranje GitHub Copilot do pogovornega vmesnika ChatGPT. Obvladaš iste vzorce, ki jih uporabljajo ekipe za AI izdelke v velikih tehnoloških podjetjih.

**Izziv**: Kako bi zasnovali različne AI osebnosti za različne vrste uporabnikov (začetnik proti strokovnjaku)? Razmisli, kako lahko isti osnovni AI model služi različnim ciljnim skupinam preko načrtovanja pozivov.

## Gradnja spletnega API-ja z FastAPI: Vaš visokozmogljivi komunikacijski vozlišče za AI

Zgradimo zdaj backend, ki povezuje vaš frontend z AI storitvami. Uporabili bomo FastAPI, moderni Python okvir, ki izstopa pri ustvarjanju API-jev za AI aplikacije.

FastAPI ponuja več prednosti za tovrstne projekte: vgrajena podpora za asinhrono obdelavo sočasnih zahtevkov, samodejna generacija API dokumentacije in odlična zmogljivost. Vaš FastAPI strežnik deluje kot posrednik, ki sprejema zahtevke iz frontenda, komunicira z AI storitvami in vrača oblikovane odgovore.

### Zakaj FastAPI za AI aplikacije?

Morda se sprašujete: "Ali ne morem kar direktno klicati AI iz mojega frontend JavaScripta?" ali "Zakaj FastAPI namesto Flask ali Django?" Odlična vprašanja!

**Tukaj je razlog, zakaj je FastAPI popoln za to, kar gradimo:**
- **Privzeto asinhron**: Obvladuje več AI zahtevkov hkrati brez zastojev
- **Samodejna dokumentacija**: Obiščite `/docs` in dobite čudovito, interaktivno API dokumentacijo brezplačno
- **Vgrajena validacija**: Preveri napake preden povzročijo težave
- **Izjemno hiter**: Eden najhitrejših Python okvirov
- **Sodobni Python**: Izkoristi vse najnovejše funkcije Pythona

**In zakaj sploh potrebujemo backend:**

**Varnost**: Vaš AI API ključ je kot geslo – če ga vstavite v frontend JavaScript, ga lahko kdorkoli, ki si ogleda izvorno kodo vaše spletne strani, ukrade in uporabi vaše AI kredite. Backend varuje občutljive podatke.

**Omejitev hitrosti in nadzor**: Backend omogoča nadzor nad tem, kako pogosto lahko uporabniki pošiljajo zahtevke, omogoča uporabniško avtentikacijo in beleženje za sledenje uporabe.

**Obdelava podatkov**: Morda želite shranjevati pogovore, filtrirati neprimerne vsebine ali združevati več AI storitev. Backend je kraj za to logiko.

**Arhitektura spominja na model klient-strežnik:**
- **Frontend**: Plasten uporabniškega vmesnika za interakcijo
- **Backend API**: Plasten za obdelavo in usmerjanje zahtevkov
- **AI storitev**: Zunanje računanje in generiranje odgovorov
- **Okoljske spremenljivke**: Varen shranjevalec konfiguracije in poverilnic

### Razumevanje toka zahteve in odgovora

Poglejmo, kaj se zgodi, ko uporabnik pošlje sporočilo:

```mermaid
sequenceDiagram
    participant User as 👤 Uporabnik
    participant Frontend as 🌐 Vmesnik
    participant API as 🔧 FastAPI strežnik
    participant AI as 🤖 AI storitev
    
    User->>Frontend: Vpiše "Pozdravljen AI!"
    Frontend->>API: POST /hello {"message": "Pozdravljen AI!"}
    Note over API: Preveri zahtevo<br/>Doda sistemski poziv
    API->>AI: Pošlje oblikovano zahtevo
    AI->>API: Vrne AI odgovor
    Note over API: Obdeluje odgovor<br/>Zabeleži pogovor
    API->>Frontend: {"response": "Pozdravljeni! Kako vam lahko pomagam?"}
    Frontend->>User: Prikaže AI sporočilo
```
**Razumevanje vsakega koraka:**
1. **Interakcija z uporabnikom**: Oseba vpiše sporočilo v klepetalni vmesnik
2. **Obdelava frontenda**: JavaScript zajame vnos in ga oblikuje v JSON
3. **Validacija API-ja**: FastAPI samodejno preveri zahtevek s Pydantic modeli
4. **Integracija AI**: Backend doda kontekst (sistemski poziv) in kliče AI storitev
5. **Obdelava odgovora**: API prejme AI odgovor in ga lahko po potrebi spremeni
6. **Prikaz frontenda**: JavaScript prikaže odgovor v klepetalnem vmesniku

### Razumevanje arhitekture API-ja

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Pozdravljen AI!"}
    FastAPI->>AI Function: call_llm(sporočilo, sistemski_napotki)
    AI Function->>GitHub Models: API zahteva
    GitHub Models->>AI Function: AI odgovor
    AI Function->>FastAPI: odgovor besedilo
    FastAPI->>Frontend: {"response": "Živjo! Kako vam lahko pomagam?"}
```
```mermaid
flowchart TD
    A[Uporabniški Vnos] --> B[Preverjanje na Sprednji Strani]
    B --> C[HTTP POST Zahteva]
    C --> D[FastAPI Usmerjevalnik]
    D --> E[Pydantic Preverjanje]
    E --> F[Klic AI Funkcije]
    F --> G[GitHub API Modelov]
    G --> H[Obdelava Odziva]
    H --> I[JSON Odziv]
    I --> J[Posodobitev Sprednje Strani]
    
    subgraph "Varnostna Plast"
        K[CORS Vmesnik]
        L[Okoljske Spremenljivke]
        M[Ravnanje z Napakami]
    end
    
    D --> K
    F --> L
    H --> M
```
### Ustvarjanje FastAPI aplikacije

Zgradimo API korak za korakom. Ustvarite datoteko `api.py` z naslednjo FastAPI kodo:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfiguriraj beleženje
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Ustvari FastAPI aplikacijo
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfiguriraj CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Primerno konfiguriraj za produkcijo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic modeli za validacijo zahtevkov/odgovorov
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
        # Izvleci in preveri sporočilo
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Pokliči AI storitev (opomba: call_llm naj bo asinhron za boljšo zmogljivost)
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

**Razumevanje implementacije FastAPI:**
- **Uvozi** FastAPI za moderno funkcionalnost spletnega okvira in Pydantic za validacijo podatkov
- **Ustvari** samodejno API dokumentacijo (dosegljivo na `/docs`, ko strežnik teče)
- **Omogoči** CORS middleware za dovoljenje zahtevkov iz različnih izvorov frontenda
- **Določi** Pydantic modele za samodejno validacijo zahtevkov/odgovorov in dokumentacijo
- **Uporablja** asinhrone končne točke za boljšo zmogljivost ob sočasnih zahtevah
- **Izvaja** pravilne HTTP statusne kode in obravnavo napak z HTTPException
- **Vključuje** strukturirano beleženje za nadzor in odpravljanje težav
- **Nudi** kontrolno točko za preverjanje stanja storitve (health check)

**Glavne prednosti FastAPI pred tradicionalnimi okviri:**
- **Samodejna validacija**: Pydantic modeli zagotavljajo celovitost podatkov pred obdelavo
- **Interaktivna dokumentacija**: Obiščite `/docs` za avtomatsko generirano in testabilno API dokumentacijo
- **Tipna varnost**: Pythonove tipne namige preprečujejo napake v času izvajanja in izboljšujejo kakovost kode
- **Asinhrona podpora**: Obdeluje več AI zahtev hkrati brez blokad
- **Zmganljivost**: Zelo hitra obdelava zahtevkov za aplikacije v realnem času

### Razumevanje CORS: varnostni varuh spleta

CORS (Cross-Origin Resource Sharing) je kot varnostnik v stavbi, ki preverja, če so obiskovalci dovoljeni za vstop. Razumimo, zakaj je to pomembno in kako vpliva na vašo aplikacijo.

#### Kaj je CORS in zakaj obstaja?

**Problem**: Predstavljajte si, da bi lahko katera koli spletna stran na vašo banko pošiljala zahtevke v vašem imenu brez vašega dovoljenja. To bi bil varnostni nočna mora! Brskalniki to preprečujejo po privzetku z "Enak izvor (Same-Origin) politiko".

**Same-Origin politika**: Brskalniki dovoljujejo spletnim stranem pošiljanje zahtevkov le na isti domeni, vratih in protokolu, s katerega so bile naložene.

**Resnični primer**: To je kot varnost v stanovanjski stavbi – samo prebivalci (isti izvor) imajo dostop. Če želite prijatelju (drug izvor) dovoliti obisk, morate varnost jasno obvestiti.

#### CORS v vašem razvojni okolju

Med razvojem frontend in backend tečeta na različnih vratih:
- Frontend: `http://localhost:3000` (ali file://, če odprete HTML neposredno)
- Backend: `http://localhost:5000`

To se šteje kot "drugi izvori", čeprav sta na istem računalniku!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # To brskalnikom pove: "Druge izvorne domene lahko zahtevajo podatke iz tega API-ja"
```

**Kaj CORS nastavitve naredijo v praksi:**
- **Dodajo** posebne HTTP glave v API odgovore, ki brskalniku povedo "zahtevek iz drugega izvora je dovoljen"
- **Obravnavajo** "preletne" (preflight) zahtevke (brskalniki včasih preverijo dovoljenja pred pošiljanjem pravega zahtevka)
- **Preprečujejo** strašno napako "blocked by CORS policy" v konzoli brskalnika

#### Varnost CORS: razvoj proti produkciji

```python
# 🚨 Razvoj: Dovoli VSI izvori (udobno, vendar nesvarno)
CORS(app)

# ✅ Proizvodnja: Dovoli samo vaš določen domeno frontend-a
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Napredno: Različni izvori za različna okolja
if app.debug:  # Način razvoja
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Način proizvodnje
    CORS(app, origins=["https://yourdomain.com"])
```

**Zakaj je to pomembno**: V razvoju je `CORS(app)` kot puščena vhodna vrata – priročno, a ne varno. V produkciji želite natančno določiti, katera spletišča lahko komunicirajo z vašim API-jem.

#### Pogoste CORS situacije in rešitve

| Situacija | Problem | Rešitev |
|----------|---------|---------|
| **Lokalni razvoj** | Frontend ne doseže backend | Dodajte CORSMiddleware v FastAPI |
| **GitHub Pages + Heroku** | Deployed frontend ne doseže API | Dodajte URL GitHub Pages v CORS izvore |
| **Prilagojena domena** | CORS napake v produkciji | Posodobite CORS izvore za vašo domeno |
| **Mobilna aplikacija** | Aplikacija ne doseže spletnega API-ja | Dodajte domeno aplikacije ali previdno uporabite `*` |

**Nasvet**: CORS glave lahko preverite v orodjih za razvijalce v zavihku Omrežje (Network) v vašem brskalniku. Poiščite glave, kot je `Access-Control-Allow-Origin` v odgovoru.

### Obravnava napak in validacija

Opazite, kako naša API vključuje ustrezno ravnanje z napakami:

```python
# Preverite, ali smo prejeli sporočilo
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Ključna načela validacije:**
- **Preveri** zahtevana polja pred obdelavo zahtevka
- **Vrne** smiselna sporočila o napakah v JSON obliki
- **Uporabi** primerne HTTP statusne kode (400 za napačne zahtevke)
- **Nudi** jasne povratne informacije za lažje odpravljanje težav frontend razvijalcem

## Priprava in zagon vašega backend strežnika

Zdaj, ko imamo integracijo AI in FastAPI strežnik pripravljen, zaženimo vse skupaj. Postopek setup-a vključuje namestitev Python odvisnosti, konfiguracijo okoljskih spremenljivk in zagon razvojnega strežnika.

### Priprava Python okolja

Nastavimo Python razvojno okolje. Virtualna okolja so kot ločeni projekti Manhattan projekta – vsak projekt dobi svoj izoliran prostor z določenimi orodji in odvisnostmi, kar preprečuje konflikte med projekti.

```bash
# Pomaknite se do vaše direktorije za backend
cd backend

# Ustvarite virtualno okolje (kot ustvarjanje čiste sobe za vaš projekt)
python -m venv venv

# Aktivirajte ga (Linux/Mac)
source ./venv/bin/activate

# Na Windows uporabite:
# venv\Scripts\activate

# Namestite dobre stvari
pip install openai fastapi uvicorn python-dotenv
```

**Kaj smo pravkar naredili:**
- **Ustvarili** majhen Python 'mehurček', kjer lahko nameščamo pakete brez vpliva na druge projekte
- **Aktivirali** ga, da terminal ve, da naj uporablja to specifično okolje
- **Namestili** bistvene pakete: OpenAI za AI magijo, FastAPI za spletni API, Uvicorn za zagon in python-dotenv za varno upravljanje skrivnosti

**Ključne odvisnosti:**
- **FastAPI**: Moderni, hiter spletni okvir z samodejno API dokumentacijo
- **Uvicorn**: Zelo hiter ASGI strežnik za FastAPI aplikacije
- **OpenAI**: Uradna knjižnica za integracijo GitHub modelov in OpenAI API-ja
- **python-dotenv**: Varen priklop okoljskih spremenljivk iz .env datotek

### Konfiguracija okolja: varovanje skrivnosti

Preden zaženemo API, moramo govoriti o eni najpomembnejših lekcij v spletnem razvoju: kako ohraniti svoje skrivnosti resnično skrivne. Okoljske spremenljivke so kot varen trezor, ki mu ima dostop samo vaša aplikacija.

#### Kaj so okoljske spremenljivke?

**Razmišljajte o njih kot o sefih za dragocenosti** – tam dajete svoje vrednosti, dostop do njih pa imate samo vi (in vaša aplikacija). Namesto da občutljive podatke pišete neposredno v kodo (kjer jih vidi prav vsak), jih shranite varno v okolju.

**Razlika je taka:**
- **Napačno**: Pisati geslo na listku in ga prilepiti na zaslon
- **Pravilno**: Hraniti geslo v varnem upravitelju gesel, do katerega imate samo vi dostop

#### Zakaj so okoljske spremenljivke pomembne

```python
# 🚨 NIKOLI NE DELAJTE TEGA - API ključ je viden vsem
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Vsakdo ga lahko ukrade!
    base_url="https://models.github.ai/inference"
)

# ✅ DELAJTE TO - API ključ shranjen varno
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Do tega dostopa samo vaša aplikacija
    base_url="https://models.github.ai/inference"
)
```

**Kaj se zgodi, če skušate trdo kodirati skrivnosti:**
1. **Razkritje v sistemu za verzioniranje**: Vsakdo z dostopom do vašega Git repozitorija vidi vaš API ključ
2. **Javni repozitoriji**: Če potisnete kodo na GitHub, je ključ viden vsem na internetu
3. **Deljenje z ekipo**: Drugi razvijalci projekta dobijo dostop do vaše osebne API ključa
4. **Varnostne ranljivosti**: Če nekdo ukrade vaš API ključ, lahko uporabi vaše AI kredite

#### Nastavitev vaše datoteke okolja (.env)

Ustvarite `.env` datoteko v vaši backend mapi. Ta datoteka shrani vaše skrivnosti lokalno:

```bash
# Datoteka .env - te datoteke nikoli ne smete dodati v Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Razumevanje .env datoteke:**
- **Ena skrivnost na vrstico** v formatu `KEY=value`
- **Brez presledkov** okoli znaka enakosti
- **Brez narekovajev** okoli vrednosti (običajno)
- **Komentarji** se začnejo z `#`

#### Ustvarjanje vašega osebnega GitHub dostopnega žetona

Vaš GitHub žeton je kot posebno geslo, ki daje vaši aplikaciji dovoljenje za uporabo AI storitev GitHuba:

**Korak za korakom izdelava žetona:**
1. **Pojdite v GitHub Nastavitve** → Developer settings → Personal access tokens → Tokens (classic)
2. **Kliknite "Generate new token (classic)"**
3. **Nastavite potek veljavnosti** (30 dni za testiranje, daljši čas za produkcijo)
4. **Izberite obsege dostopa**: Označite "repo" in druge potrebne pravice
5. **Ustvarite žeton** in ga takoj kopirajte (po tem ga ne vidite več!)
6. **Prilepite ga v vašo .env datoteko**

```bash
# Primer, kako izgleda vaš žeton (to je lažno!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Nalaganje okoljskih spremenljivk v Pythonu

```python
import os
from dotenv import load_dotenv

# Naloži spremenljivke okolja iz datoteke .env
load_dotenv()

# Zdaj jih lahko varno dostopate
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Kaj ta koda počne:**
- **Naloži** vašo .env datoteko in naredi spremenljivke dostopne za Python
- **Preveri**, ali je zahtevan žeton prisoten (dobra obravnava napak!)
- **Vrže** jasen error, če žeton manjka
- **Uporablja** žeton varno, brez izpostavljanja v kodi

#### Varnost Git-a: datoteka .gitignore

Vaša `.gitignore` datoteka Git-u pove, katere datoteke naj nikoli ne spremlja ali naloži:

```bash
# .gitignore - Dodajte te vrstice
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Zakaj je to ključno**: Ko dodate `.env` v `.gitignore`, bo Git ignoriral datoteko okolja in preprečil nenameren prenos vaših skrivnosti na GitHub.

#### Različna okolja, različne skrivnosti

Profesionalne aplikacije uporabljajo različne API ključe za različna okolja:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Zakaj je to pomembno**: Ne želite, da vaši razvojni eksperimenti vplivajo na produkcijsko AI kvoto, hkrati pa želite različne nivoje zaščite za različna okolja.

### Zagon vašega razvojnega strežnika: oživitev FastAPI aplikacije
Zdaj pride razburljiv trenutek – zagon strežnika za razvoj FastAPI in ogled oživele integracije AI! FastAPI uporablja Uvicorn, bliskovito hiter ASGI strežnik, ki je posebej zasnovan za asinhrone Python aplikacije.

#### Razumevanje procesa zagona FastAPI strežnika

```bash
# Metoda 1: Neposredno izvajanje v Pythonu (vključuje samodejno ponovni zagon)
python api.py

# Metoda 2: Neposredna uporaba Uvicorna (več nadzora)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Ko zaženete ta ukaz, se za kulisami odvija naslednje:

**1. Python naloži vašo FastAPI aplikacijo**:
- Uvozi vse potrebne knjižnice (FastAPI, Pydantic, OpenAI itd.)
- Naloži okoljske spremenljivke iz vaše datoteke `.env`
- Ustvari instanco FastAPI aplikacije z avtomatsko dokumentacijo

**2. Uvicorn konfigurira ASGI strežnik**:
- Poveže se na vrata 5000 z asinhronimi sposobnostmi obdelave zahtevkov
- Nastavi usmerjanje zahtevkov z avtomatsko validacijo
- Omogoči vroč ponovni zagon za razvoj (restart ob spremembah datotek)
- Ustvari interaktivno API dokumentacijo

**3. Strežnik začne poslušati**:
- Vaš terminal prikaže: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Strežnik lahko obdeluje več sočasnih AI zahtevkov
- Vaš API je pripravljen z avtomatsko dokumentacijo na `http://localhost:5000/docs`

#### Kaj bi morali videti, ko vse deluje

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Razumevanje izpisa FastAPI:**
- **Will watch for changes**: Samodejni ponovni zagon omogočen za razvoj
- **Uvicorn running**: Visoko zmogljiv ASGI strežnik je aktiven
- **Started reloader process**: Opazovalec datotek za samodejne ponovne zagone
- **Application startup complete**: FastAPI aplikacija uspešno inicializirana
- **Interactive docs available**: Obiščite `/docs` za avtomatsko API dokumentacijo

#### Testiranje FastAPI: Več zmogljivih pristopov

FastAPI ponuja več priročnih načinov za testiranje vašega API-ja, vključno z avtomatsko interaktivno dokumentacijo:

**Metoda 1: Interaktivna API dokumentacija (Priporočeno)**
1. Odprite brskalnik in pojdite na `http://localhost:5000/docs`
2. Videli boste Swagger UI z vsemi dokumentiranimi končnimi točkami
3. Kliknite na `/hello` → "Try it out" → Vnesite testno sporočilo → "Execute"
4. Odziv si oglejte neposredno v brskalniku z ustreznim formatiranjem

**Metoda 2: Osnovni preizkus z brskalnikom**
1. Pojdite na `http://localhost:5000` za korensko točko
2. Pojdite na `http://localhost:5000/health` za preverjanje zdravja strežnika
3. S tem potrdite, da vaš FastAPI strežnik pravilno deluje

**Metoda 2: Test prek ukazne vrstice (Napredno)**
```bash
# Testirajte s curl (če je na voljo)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Pričakovani odgovor:
# {"response": "Pozdravljeni! Sem vaš AI pomočnik. Kako vam lahko danes pomagam?"}
```

**Metoda 3: Python testni skript**
```python
# test_api.py - Ustvarite to datoteko za testiranje vaše API
import requests
import json

# Preizkusite API končno točko
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Odpravljanje pogostih težav pri zagonu

| Sporočilo o napaki | Kaj pomeni | Kako odpraviti |
|--------------------|------------|---------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI ni nameščen | Zaženite `pip install fastapi uvicorn` v vašem virtualnem okolju |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI strežnik ni nameščen | Zaženite `pip install uvicorn` v vašem virtualnem okolju |
| `KeyError: 'GITHUB_TOKEN'` | Okoljska spremenljivka ni najdena | Preverite vašo `.env` datoteko in klic `load_dotenv()` |
| `Address already in use` | Vrata 5000 so zasedena | Ubijte druge procese, ki uporabljajo vrata 5000 ali spremenite vrata |
| `ValidationError` | Podatki v zahtevku ne ustrezajo Pydantic modelu | Preverite, da je format vašega zahtevka skladen s pričakovano shemo |
| `HTTPException 422` | Neobdelovljiv entitet | Validacija zahtevka ni uspela, preverite `/docs` za pravilen format |
| `OpenAI API error` | Avtentikacija AI storitve ni uspela | Preverite, da je vaš GitHub žeton pravilen in ima ustrezna dovoljenja |

#### Najboljše prakse razvoja

**Vroči ponovni zagon**: FastAPI z Uvicorn omogoča samodejni ponovni zagon, ko shranite spremembe Python datotek. To pomeni, da lahko takoj spremenite kodo in testirate brez ročnega ponovnega zagona.

```python
# Omogoči eksplicitno vroče ponovno nalaganje
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True omogoča vroče ponovno nalaganje
```

**Dnevniški zapisi za razvoj**: Dodajte beleženje, da razumete, kaj se dogaja:

```python
import logging

# Nastavite beleženje
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

**Zakaj pomaga beleženje**: Med razvojem lahko natančno vidite, kakšni zahtevki prihajajo, kakšni so odgovori AI in kje nastanejo napake. To pospeši odpravljanje težav.

### Konfiguracija za GitHub Codespaces: razvoj v oblaku z lahkoto

GitHub Codespaces je kot močan računalnik za razvoj v oblaku, do katerega lahko dostopate iz kateregakoli brskalnika. Če delate v Codespaces, je nekaj dodatnih korakov, da je vaš backend dostopen frontend-u.

#### Razumevanje omrežja v Codespaces

V lokalnem razvojnem okolju vse teče na istem računalniku:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (ali file://)

V Codespaces teče vaše razvojno okolje na GitHub strežnikih, zato "localhost" pomeni nekaj drugega. GitHub samodejno ustvari javne URL-je za vaše storitve, a jih morate pravilno konfigurirati.

#### Korak po koraku konfiguracija Codespaces

**1. Zaženite vaš backend strežnik**:
```bash
cd backend
python api.py
```

Videli boste znano sporočilo o zagonu FastAPI/Uvicorn, a znotraj okolja Codespace.

**2. Konfigurirajte vidnost vrat**:
- Poiščite zavihek "Ports" v spodnjem panelu VS Code
- Najdite vrata 5000 na seznamu
- Z desnim klikom na vrata 5000
- Izberite "Port Visibility" → "Public"

**Zakaj narediti vrata javna?** Privzeto so Codespace vrata zasebna (dostopate jih le vi). Javna vrata omogočajo, da vaš frontend (ki teče v brskalniku) komunicira z backend-om.

**3. Pridobite vaš javni URL**:
Po nastavitvi javnih vrat boste videli URL, kot je:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Posodobite konfiguracijo frontend-a**:
```javascript
// V vaši frontend datoteki app.js posodobite BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Razumevanje Codespace URL-jev

Codespace URL-ji sledijo predvidljivemu vzorcu:
```
https://[codespace-name]-[port].app.github.dev
```

**Podrobna razlaga:**
- `codespace-name`: Enoličen identifikator vašega Codespace (pogosto vključuje vaše uporabniško ime)
- `port`: Številka vrat, na katerih teče vaša storitev (5000 za našo FastAPI aplikacijo)
- `app.github.dev`: GitHubova domena za Codespace aplikacije

#### Testiranje Codespace nastavitve

**1. Preizkusite backend neposredno**:
Odprite vaš javni URL v novem zavihku brskalnika. Morali bi videti:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Test z orodji za razvijalce v brskalniku**:
```javascript
// Odprite konzolo brskalnika in preizkusite svoj API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Primerjava Codespaces in lokalnega razvoja

| Vidik | Lokalni razvoj | GitHub Codespaces |
|--------|-------------------|-------------------|
| **Čas nastavitve** | Daljši (namestitev Pythona, odvisnosti) | Trenuten (prednastavljeno okolje) |
| **Dostop do URL-ja** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfiguracija vrat** | Samodejna | Ročna (odpravljanje vrat) |
| **Shranjevanje datotek** | Lokalni računalnik | GitHub repozitorij |
| **Sodelovanje** | Težko deliti okolje | Enostavno deliti povezavo do Codespace |
| **Zahteva internet** | Samo za AI API kliče | Potrebno za vse |

#### Nasveti za delo v Codespaces

**Okoljske spremenljivke v Codespaces**:
Vaša `.env` datoteka deluje enako tudi v Codespaces, lahko pa nastavite okoljske spremenljivke neposredno v Codespace-u:

```bash
# Nastavi okoljsko spremenljivko za trenutno sejo
export GITHUB_TOKEN="your_token_here"

# Ali dodaj v svojo .bashrc za trajnost
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Upravljanje vrat**:
- Codespaces samodejno zazna, ko se aplikacija začne poslušati na vratih
- Lahko preusmerite več vrat hkrati (uporabno npr. če dodate bazo podatkov)
- Vrata ostanejo dostopna, dokler vaš Codespace deluje

**Razvojni potek dela**:
1. Naredite spremembe v kodi v VS Code
2. FastAPI samodejno ponovno naloži (zaradi Uvicorn reload načina)
3. Takoj testirajte spremembe preko javnega URL-ja
4. Ko ste pripravljeni, commitajte in pushajte

> 💡 **Nasvet**: Med razvojem si shranite zaznamek za vaš Codespace backend URL. Ker so imena Codespace stabilna, URL ostane enak, dokler uporabljate isti Codespace.

## Izdelava frontend klepetalnega vmesnika: Kjer se ljudje srečujejo z AI

Zdaj bomo zgradili uporabniški vmesnik – tisti del, ki določa, kako ljudje komunicirajo z vašim AI pomočnikom. Tako kot je bila zasnova vmesnika originalnega iPhona osredotočena na intuitivno in naravno uporabo, tudi mi želimo kompleksno tehnologijo narediti enostavno razumljivo.

### Razumevanje moderne frontend arhitekture

Naš klepetalni vmesnik bo t.i. "enostranska aplikacija" ali SPA. Namesto starega načina, kjer vsak klik naloži novo stran, se naša aplikacija gladko posodablja in instantno reagira:

**Stare spletne strani**: Kot branje fizične knjige – listate na popolnoma nove strani  
**Naša klepetalna aplikacija**: Kot uporaba telefona – vse teče in se osvežuje brez prekinitve

```mermaid
graph TD
    A[Uporabnik vpiše sporočilo] --> B[JavaScript zajame vnos]
    B --> C[Preveri in oblikuj podatke]
    C --> D[Pošlji na Backend API]
    D --> E[Prikaži stanje nalaganja]
    E --> F[Prejmi odgovor AI]
    F --> G[Posodobi vmesnik klepeta]
    G --> H[Pripravljen za naslednje sporočilo]
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
        +handleSubmit(dogodek)
        +callAPI(sporočilo)
        +appendMessage(besedilo, vloga)
        +escapeHtml(besedilo)
        +scrollToBottom()
        +setLoading(nalaganje)
    }
    
    ChatApp --> DOM : manipulira
    ChatApp --> FastAPI : pošilja zahteve
```
### Tri stebre frontend razvoja

Vsaka frontend aplikacija – od preprostih spletnih strani do zapletenih aplikacij kot Discord ali Slack – temelji na treh osnovnih tehnologijah. Pomislite nanje kot na temelj vsega, kar vidite in s čimer interaktirate na spletu:

**HTML (Struktura)**: To je vaša osnova  
- Določa, kateri elementi obstajajo (gumbi, področja za tekst, vsebniki)  
- Daja pomen vsebini (to je naslov, to je obrazec itd.)  
- Ustvari osnovno strukturo, na kateri je vse ostalo zgrajeno

**CSS (Predstavitev)**: To je vaš notranji oblikovalec  
- Naredi vse lepo (barve, pisave, razporeditve)  
- Prilagodi se različnim velikostim zaslonov (telefon, prenosnik, tablica)  
- Ustvari gladke animacije in vizualne odzive

**JavaScript (Vedenje)**: To je vaš možgan  
- Odziva se na dejanja uporabnikov (kliki, tipkanje, pomikanje)  
- Komunicira z backend-om in posodablja stran  
- Naredi vse interaktivno in dinamično

**Pomislite na to kot arhitekturno zasnovo:**  
- **HTML**: Strukturni načrt (definiranje prostorov in odnosov)  
- **CSS**: Estetski in okoljski dizajn (vizualni stil in uporabniška izkušnja)  
- **JavaScript**: Mehanski sistemi (funkcionalnost in interaktivnost)

### Zakaj je pomembna moderna JavaScript arhitektura

Naša klepetalna aplikacija bo uporabljala sodobne JavaScript vzorce, kakršne vidite v profesionalnih aplikacijah. Razumevanje teh konceptov vam bo pomagalo pri rasti kot razvijalec:

**Arhitektura temelječa na razredih**: Kodo bomo organizirali v razrede, kar je kot ustvarjanje načrtov za objekte  
**Async/Await**: Sodobna metoda za delo z operacijami, ki trajajo (kot so API klici)  
**Dogodkovno vodeno programiranje**: Aplikacija se odziva na uporabniške akcije (klike, pritiske tipk), ne teče v zanki  
**Manipulacija DOM-a**: Dinamična posodobitev vsebine strani glede na uporabniške interakcije in API odgovore

### Nastavitev strukture projekta

Ustvarite imenik frontend s to organizirano strukturo:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Razumevanje arhitekture:**  
- **Ločuje** skrb za strukturo (HTML), vedenje (JavaScript) in predstavitev (CSS)  
- **Ohranja** preprosto strukturo datotek, ki je enostavna za navigacijo in spremembe  
- **Sledi** najboljšim praksam spletnega razvoja za organizacijo in vzdrževanje

### Gradnja HTML osnove: Semantična struktura za dostopnost

Začnimo s HTML strukturo. Sodobni spletni razvoj poudarja "semantični HTML" – uporabo HTML elementov, ki jasno opisujejo svoj namen, ne le videz. To naredi vašo aplikacijo dostopno za bralnike zaslona, iskalnike in druga orodja.

**Zakaj je semantični HTML pomemben**: Predstavljajte si, da nekomu po telefonu opisujete vašo klepetalno aplikacijo. Rekli bi "tam je glava s naslovom, glavno območje, kjer potekajo pogovori, in obrazec na dnu za vnos sporočil." Semantični HTML uporablja elemente, ki ustrezajo temu naravnemu opisu.

Ustvarite `index.html` s to premišljeno strukturirano označbo:

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

**Razumevanje posameznega HTML elementa in njegovega namena:**

#### Struktura dokumenta
- **`<!DOCTYPE html>`**: Pove brskalniku, da gre za sodoben HTML5
- **`<html lang="en">`**: Določa jezik strani za bralnike zaslona in prevajalska orodja
- **`<meta charset="UTF-8">`**: Zagotavlja pravilno kodiranje znakov za mednarodni tekst
- **`<meta name="viewport"...>`**: Naredi stran odzivno na mobilnih napravah z nadzorom povečave in razmerja

#### Semantični elementi
- **`<header>`**: Jasno označuje zgornji del s naslovom in opisom
- **`<main>`**: Določa primarno vsebino (kjer potekajo pogovori)
- **`<form>`**: Semantično pravilno za uporabniški vnos, omogoča pravilno navigacijo s tipkovnico

#### Funkcije za dostopnost
- **`role="log"`**: Sporoča bralnikom zaslona, da je to kronološki dnevnik sporočil
- **`aria-live="polite"`**: Oznanja nova sporočila bralnikom zaslona brez prekinitve
- **`aria-label`**: Nudi opisne oznake za kontrole obrazca
- **`required`**: Brskalnik preveri, da uporabnik vnese sporočilo pred pošiljanjem

#### Integracija CSS in JavaScript
- **`class` atributi**: Nudi povezave za stiliziranje s CSS (npr. `chat-container`, `input-group`)
- **`id` atributi**: Omogočajo JavaScriptu iskanje in manipulacijo specifičnih elementov
- **Postavitev skript**: JavaScript datoteka naložena na koncu, tako da se HTML najprej naloži

**Zakaj ta struktura deluje:**
- **Logičen potek**: Glava → Glavna vsebina → Obrazec za vnos sledi naravnemu vrstnemu redu branja
- **Dostopnost s tipkovnico**: Uporabniki lahko z zavihkom prehajajo skozi vse interaktivne elemente
- **Prijazno do bralnikov zaslona**: Jasne točke orientacije in opisi za slabovidne uporabnike
- **Mobilna odzivnost**: Meta oznaka viewport omogoča prilagodljiv dizajn
- **Postopen razcvet**: Dela tudi, če CSS ali JavaScript ne uspe naložiti

### Dodajanje interaktivnega JavaScript-a: Logika sodobne spletne aplikacije
Zdaj pa sestavimo JavaScript, ki oživi naš klepetalni vmesnik. Uporabili bomo moderne JavaScript vzorce, s katerimi se boste srečali pri profesionalnem spletnem razvoju, vključno z ES6 razredi, async/await in dogodkovno programiranjem.

#### Razumevanje moderne JavaScript arhitekture

Namesto pisanja proceduralne kode (vrste funkcij, ki se izvajajo ena za drugo), bomo ustvarili **arhitekturo na osnovi razredov**. Razred si predstavljajte kot načrt za ustvarjanje objektov – tako kot arhitektov načrt služi za gradnjo več hiš.

**Zakaj uporabljati razrede za spletne aplikacije?**
- **Organizacija**: Vsa sorodna funkcionalnost je združena skupaj
- **Ponovna uporaba**: Na isti strani lahko ustvarite več primerkov klepeta
- **Vzdrževalnost**: Lažje je odpravljati napake in spreminjati specifične funkcije
- **Profesionalni standard**: Ta vzorec uporabljajo ogrodja kot React, Vue in Angular

Ustvarite `app.js` z to moderno, dobro strukturirano JavaScript kodo:

```javascript
// app.js - Logika sodobne klepetalne aplikacije

class ChatApp {
    constructor() {
        // Pridobite reference na DOM elemente, s katerimi bomo manipulirali
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Tukaj konfigurirajte URL vašega strežnika
        this.BASE_URL = "http://localhost:5000"; // Posodobite to za vaše okolje
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Nastavite poslušalce dogodkov, ko je aplikacija za klepet ustvarjena
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Poslušajte oddajo obrazca (ko uporabnik klikne Pošlji ali pritisne Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Prav tako poslušajte tipko Enter v vhodnem polju (boljša uporabniška izkušnja)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Preprečite osveževanje strani ob oddaji obrazca
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Ne pošiljajte praznih sporočil
        
        // Zagotovite uporabniku povratno informacijo, da se nekaj dogaja
        this.setLoading(true);
        
        // Takoj dodajte uporabnikovo sporočilo v klepet (optimistično UI)
        this.appendMessage(messageText, "user");
        
        // Počistite vhodno polje, da lahko uporabnik vpiše naslednje sporočilo
        this.input.value = '';
        
        try {
            // Pokličite AI API in počakajte na odgovor
            const reply = await this.callAPI(messageText);
            
            // Dodajte AI odgovor v klepet
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Ponovno omogočite vmesnik, ne glede na uspeh ali napako
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

// Inicializirajte klepetalno aplikacijo ob nalaganju strani
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Razumevanje posameznih konceptov JavaScript

**Struktura ES6 razreda**:
```javascript
class ChatApp {
    constructor() {
        // To se izvede, ko ustvarite novo primerek ChatApp
        // To je kot funkcija "setup" za vaš klepet
    }
    
    methodName() {
        // Metode so funkcije, ki pripadajo razredu
        // Lahko dostopajo do lastnosti razreda z uporabo "this"
    }
}
```

**Vzorec Async/Await**:
```javascript
// Stari način (paklenski vračilni klici):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Sodobni način (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Dogodkovno programiranje**:
Namesto stalnega preverjanja, ali se je nekaj zgodilo, "poslušamo" dogodke:
```javascript
// Ko je obrazec poslan, zaženi handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Ko je pritisnjena tipka Enter, zaženi tudi handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulacija DOM-a**:
```javascript
// Ustvari nove elemente
const messageElement = document.createElement("div");

// Spremeni njihove lastnosti
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Dodaj na stran
this.messages.appendChild(messageElement);
```

#### Varnost in najboljše prakse

**Preprečevanje XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // To samodejno pobegne HTML
    return div.innerHTML;
}
```

**Zakaj je to pomembno**: Če uporabnik vnese `<script>alert('hack')</script>`, ta funkcija zagotovi, da se to prikaže kot besedilo in ne izvrši kot koda.

**Ravnanje z napakami**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Prikaži uporabniku prijazno napako namesto, da aplikacija crkne
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Razmislek o uporabniški izkušnji**:
- **Optimiziran UI**: Uporabnikovo sporočilo dodajte takoj, ne čakajte na odziv strežnika
- **Stanja nalaganja**: Onemogočite gumbe in prikažite "Pošiljam..." med čakanjem
- **Avtomatski pomik**: Vedno prikažite najnovejša sporočila
- **Validacija vnosa**: Ne pošiljajte praznih sporočil
- **Tipkovni bližnjici**: Tipka Enter pošlje sporočila (kot v pravih klepetalnicah)

#### Razumevanje poteka aplikacije

1. **Stran se naloži** → sproži se dogodek `DOMContentLoaded` → ustvari se `new ChatApp()`
2. **Izvede se konstruktor** → pridobi sklice na DOM elemente → nastavi poslušalce dogodkov
3. **Uporabnik vpiše sporočilo** → pritisne Enter ali klikne Pošlji → se zažene `handleSubmit`
4. **handleSubmit** → Validira vnos → Prikaže stanje nalaganja → Kliče API
5. **API odgovori** → Doda sporočilo AI v klepet → Ponovno omogoči vmesnik
6. **Pripravljen za novo sporočilo** → uporabnik lahko nadaljuje klepet

Ta arhitektura je razširljiva – enostavno lahko dodate funkcije, kot so urejanje sporočil, nalaganje datotek ali več pogovorov brez prepisovanja osnovne strukture.

### 🎯 Pedagoški pregled: Moderna frontend arhitektura

**Razumevanje arhitekture**: Implementirali ste celotno enostransko aplikacijo z modernimi JavaScript vzorci. To predstavlja profesionalni nivo frontend razvoja.

**Osnovni izrazi, ki jih obvladate**:
- **ES6 arhitektura razredov**: Organizirana, vzdrževana struktura kode
- **Vzorec Async/Await**: Sodobno asinhrono programiranje
- **Dogodkovno programiranje**: Oblikovanje odzivnega uporabniškega vmesnika
- **Najboljše prakse varnosti**: Preprečevanje XSS in validacija vnosa

**Povezava z industrijo**: Vzorci, ki ste se jih naučili (arhitektura na osnovi razredov, asinhroni klici, manipulacija DOM-a) so temelj sodobnih ogrodij kot so React, Vue in Angular. Gradite z enakim arhitekturnim razmišljanjem kot profesionalni razvijalci.

**Vprašanje za razmislek**: Kako bi razširili to klepetalno aplikacijo za več pogovorov ali uporabniško prijavo? Razmislite o potrebnih arhitekturnih spremembah in razvoju strukture razredov.

### Stilizacija vašega klepetalnega vmesnika

Zdaj ustvarimo moder, vizualno privlačen klepetalni vmesnik s CSS. Dobra stilizacija naredi vašo aplikacijo profesionalno in izboljša uporabniško izkušnjo. Uporabili bomo sodobne CSS lastnosti kot so Flexbox, CSS Grid in prilagojene spremenljivke za odziven in dostopen dizajn.

Ustvarite `styles.css` z naslednjimi celovitimi slogi:

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

**Razumevanje CSS arhitekture:**
- **Uporaba** CSS prilagojenih lastnosti (spremenljivk) za konsistentno tematiko in lažje vzdrževanje
- **Izvajanje** Flexbox postavitve za odziven dizajn in pravilno poravnavo
- **Vključevanje** gladkih animacij za pojavljanje sporočil brez odvračanja pozornosti
- **Zagotavljanje** vizualne razlikovanja med uporabniškimi sporočili, odgovori AI in stanji napak
- **Podpora** odzivnemu dizajnu za računalnike in mobilne naprave
- **Upoštevanje** dostopnosti z nastavitvami zmanjšane animacije in ustreznim kontrastom
- **Ponudba** temnega načina glede na uporabnikove sistemske nastavitve

### Konfiguracija vaše URL za backend

Zadnji korak je posodobitev `BASE_URL` v vašem JavaScriptu, da ustreza vašemu strežniku backend:

```javascript
// Za lokalni razvoj
this.BASE_URL = "http://localhost:5000";

// Za GitHub Codespaces (zamenjajte z vašo dejansko URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Kako določiti URL backend strežnika:**
- **Lokalni razvoj**: Uporabite `http://localhost:5000`, če poganjate frontend in backend lokalno
- **Codespaces**: URL backend strežnika poiščite pod zavihkom Ports, ko odprete vrata 5000 v javnost
- **Produkcija**: Nadomestite z dejansko domeno, ko nameščate na gostovanje

> 💡 **Nasvet za testiranje**: Backend lahko testirate neposredno tako, da v brskalniku obiščete root URL. Tam bi morali videti pozdravno sporočilo vašega FastAPI strežnika.



## Preizkušanje in namestitev

Zdaj, ko imate oba komponenta, frontend in backend, sestavljena, preizkusimo, ali vse skupaj deluje, in preučimo možnosti namestitve za deljenje vašega klepetalnega asistenta z drugimi.

### Lokalni preizkusni postopek

Sledite tem korakom, da preizkusite vašo aplikacijo v celoti:

```mermaid
graph TD
    A[Zaženi Backend Strežnik] --> B[Konfiguriraj Spremenljivke Okolja]
    B --> C[Preizkusi API Končne Točke]
    C --> D[Odpri Frontend v Brskalniku]
    D --> E[Preizkusi Funkcionalnost Čata]
    E --> F[Ponaglji Morebitne Težave]
```
**Postopno testiranje:**

1. **Zaženite strežnik backend**:
   ```bash
   cd backend
   source venv/bin/activate  # ali v venv\Scripts\activate na Windows
   python api.py
   ```

2. **Preverite, da API deluje**:
   - Odprite `http://localhost:5000` v brskalniku
   - Videti bi morali pozdravno sporočilo vašega FastAPI strežnika

3. **Odprite frontend**:
   - Pomaknite se v katalog za frontend
   - Odprite `index.html` v vašem brskalniku
   - Ali uporabite razširitev Live Server v VS Code za boljšo razvojno izkušnjo

4. **Preizkusite klepetalno funkcionalnost**:
   - Vnesite sporočilo v vnosno polje
   - Kliknite "Pošlji" ali pritisnite Enter
   - Preverite, ali AI primerno odgovori
   - Preverite brskalnikov konzolo za morebitne JavaScript napake

### Reševanje pogostih težav

| Težava | Simptomi | Rešitev |
|---------|----------|----------|
| **Napaka CORS** | Frontend ne doseže backend | Prepričajte se, da je FastAPI CORSMiddleware pravilno nastavljen |
| **Napaka ključa API** | Odgovori 401 Unauthorized | Preverite okoljsko spremenljivko `GITHUB_TOKEN` |
| **Povezava zavrnjena** | Omrežne napake na frontendu | Preverite URL backend strežnika in ali Flask strežnik teče |
| **Brez AI odgovora** | Prazni ali napake odgovori | Preverite zapise backend strežnika za morebitne omejitve API ali težave z avtentikacijo |

**Pogosti koraki za odpravljanje napak:**
- **Preverite** konzolo razvijalskih orodij v brskalniku za JavaScript napake
- **Preverite** v zavihku Network uspešne API klice in odgovore
- **Preglejte** izhod terminala backend strežnika za Python napake ali težave z API
- **Potrdite**, da so okoljske spremenljivke pravilno naložene in dostopne

## 📈 Časovni načrt vašega razvoja AI aplikacije

```mermaid
timeline
    title Popolna Pot Razvoja AI Aplikacij
    
    section Osnove AI
        Razumevanje Generativne AI
            : Razumeti koncepte prepoznavanja vzorcev
            : Obvladati nadzor AI parametrov
            : Naučiti se tehnik inženiringa pozivov
        
        Integracija Modelov GitHub
            : Obvladati platforme za AI storitve
            : Varnostno upravljati avtorizacijo
            : Optimizirati parametre modelov
    
    section Razvoj Backend-a
        Python API Arhitektura
            : Graditi FastAPI aplikacije
            : Izvajati asinhrone operacije
            : Ustvariti varne končne točke
        
        Integracija AI Storitev
            : Povezati se z zunanjimi AI API-ji
            : Upravljati omejitve hitrosti
            : Uvesti meje za napake
    
    section Obvlada Frontenda
        Moderni JavaScript Vzorci
            : Obvladati ES6 razredno arhitekturo
            : Implementirati asinhrone/await poteke
            : Graditi odzivne vmesnike
        
        Uporabniška Izkušnja v Realnem Času
            : Ustvariti dinamične klepetalne vmesnike
            : Upravljati stanja nalaganja
            : Optimizirati uporabniške interakcije
    
    section Pripravljenost za Produkcijo
        Varnost in Zmogljivost
            : Uvesti varno upravljanje žetonov
            : Preprečiti ranljivosti XSS
            : Optimizirati zmogljivost API-jev
        
        Profesionalna Namestitev
            : Graditi razširljive arhitekture
            : Ustvariti vzdržen kodo
            : Dokumentirati razvojne procese
```
**🎓 Mejniki diplome**: Uspešno ste zgradili popolno AI-poganjano aplikacijo z uporabo istih tehnologij in arhitekturnih vzorcev kot moderni AI asistenti. Ta znanja predstavljajo stik tradicionalnega spletnega razvoja in vrhunske AI integracije.

**🔄 Naslednje sposobnosti**:
- Pripravljeni za raziskovanje naprednih AI ogrodij (LangChain, LangGraph)
- Opremeljeni za gradnjo multimodalnih AI aplikacij (besedilo, slika, glas)
- Zmožni implementirati vektorske podatkovne baze in iskalne sisteme
- Postavljeni temelji za strojno učenje in fino nastavitev AI modelov

## Izziv GitHub Copilot Agent 🚀

Uporabite režim Agent, da dokončate naslednji izziv:

**Opis:** Izboljšajte klepetalnega asistenta z dodajanjem zgodovine pogovorov in ohranjanjem sporočil. Ta izziv vam bo pomagal razumeti upravljanje stanja v klepetalnih aplikacijah in implementacijo shranjevanja podatkov za boljšo uporabniško izkušnjo.

**Navodilo:** Spremenite aplikacijo, da vključuje zgodovino pogovorov, ki se ohranja med sejami. Dodajte funkcionalnost shranjevanja sporočil v lokalni pomnilnik, prikaz zgodovine ob nalaganju strani ter gumb "Počisti zgodovino". Prav tako implementirajte indikatorje tipkanja in časovne žige sporočil za bolj realistično izkušnjo klepeta.

Več o [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) preberite tukaj.

## Naloga: Zgradite svojega osebnega AI asistenta

Zdaj boste ustvarili svojo lastno implementacijo AI asistenta. Namesto običajnega prepisovanja primerov v vodiču je to priložnost, da uporabite koncepte pri izdelavi nečesa, kar odraža vaše interese in primere uporabe.

### Zahteve projekta

Postavimo vašo strukturo projekta čisto in organizirano:

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

### Osnovne naloge implementacije

**Razvoj backend-a:**
- **Vzemite** naš FastAPI kodo in jo naredite svojo
- **Ustvarite** unikatno osebnost AI – mogoče pomočnik za kuhanje, ustvarjalni partner pri pisanju ali spremljevalec pri učenju?
- **Dodajte** trdno ravnanje z napakami, da aplikacija ne pade ob napakah
- **Napišite** jasno dokumentacijo za vsakogar, ki želi razumeti delovanje API-ja

**Razvoj frontend-a:**
- **Izdelajte** klepetalni vmesnik, ki je intuitiven in prijazen
- **Napišite** čisto, moderno JavaScript kodo, na katero boste ponosni pred drugimi razvijalci
- **Oblikujte** lasten stil, ki odraža osebnost vaše AI – zabaven in barvit? Čist in minimalen? Odvisno od vas!
- **Poskrbite**, da bo dobro delovalo na telefonih in računalnikih

**Zahteve po personalizaciji:**
- **Izberite** unikatno ime in osebnost za svojega AI asistenta – nekaj, kar odraža vaše interese ali probleme, ki jih želite rešiti
- **Prilagodite** vizualno obliko, da se ujema z vibe vašega asistenta
- **Napišite** privlačno uvodno sporočilo, ki ljudi vabi v klepet
- **Testirajte** svojega asistenta z različnimi vrstami vprašanj, da vidite, kako odgovarja

### Ideje za izboljšave (neobvezno)

Želite svoj projekt dvigniti na višji nivo? Tukaj je nekaj zabavnih idej, ki jih lahko preizkusite:

| Funkcija | Opis | Znanja, ki jih boste vadili |
|---------|-------------|------------------------|
| **Zgodovina sporočil** | Še vedno si zapomni pogovore tudi po osvežitvi strani | Delo z localStorage, upravljanje JSON |
| **Indikatorji tipkanja** | Prikaže "AI tipka..." med čakanjem na odgovor | CSS animacije, asinhrono programiranje |
| **Časovni žigi sporočil** | Prikazuje, kdaj je bilo sporočilo poslano | Oblikovanje datuma/ure, UX oblikovanje |
| **Izvoz klepeta** | Omogočite prenos pogovora | Delo s datotekami, izvoz podatkov |
| **Preklapljanje teme** | Stikalo med svetlo in temno obliko | CSS spremenljivke, uporabniške preference |
| **Glasovni vnos** | Dodajte pretvorbo govora v besedilo | Web API, dostopnost |

### Testiranje in dokumentacija

**Zagotavljanje kakovosti:**
- **Testirajte** aplikacijo z raznimi vrstami vnosov in robnimi primeri
- **Preverite** odzivni dizajn na različnih velikostih zaslonov
- **Preverite** dostopnost z uporabo tipkovnice in bralnikov zaslona
- **Validirajte** HTML in CSS v skladu s standardi

**Zahteve za dokumentacijo:**
- **Napišite** README.md, ki pojasnjuje projekt in navodila za zagon
- **Priložite** posnetke zaslona klepetalnega vmesnika v akciji
- **Dokumentirajte** edinstvene funkcije ali prilagoditve, ki ste jih dodali
- **Ponudite** jasna navodila za namestitev drugim razvijalcem

### Navodila za oddajo

**Oddaja projekta:**
1. Celotna mapa projekta z vsemi izvorni kodami
2. README.md s opisom projekta in navodili za nastavitve
3. Posnetki zaslona, ki prikazujejo vašega klepetalnega asistenta v akciji
4. Kratek razmislek o tem, kaj ste se naučili in s kakšnimi izzivi ste se soočili

**Merila ocenjevanja:**
- **Funkcionalnost**: Ali klepetalni asistent deluje kot pričakovano?
- **Kakovost kode**: Ali je koda dobro organizirana, komentirana in vzdrževana?
- **Oblikovanje**: Je vmesnik vizualno privlačen in uporabniku prijazen?
- **Ustvarjalnost**: Kako unikaten in personaliziran je vaš pristop?
- **Dokumentacija**: Ali so navodila za namestitev jasna in izčrpna?

> 💡 **Nasvet za uspeh**: Najprej se osredotočite na osnovne zahteve, nato dodajajte izboljšave, ko vse deluje. Osredotočite se na popolno osnovno izkušnjo, preden vključite napredne funkcije.

## Rešitev

[Rešitev](./solution/README.md)

## Bonus izzivi

Ste pripravljeni dvigniti svojega AI asistenta na višji nivo? Preizkusite te zahtevne izzive, ki vam bodo poglobili znanja o AI integraciji in spletnem razvoju.

### Prilagoditev osebnosti

Prava čarovnija se zgodi, ko svojemu AI asistentu daste unikatno osebnost. Eksperimentirajte z različnimi sistemskimi pozivi za ustvarjanje specializiranih asistentov:

**Primer profesionalnega asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Primer pomočnika za ustvarjalno pisanje:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Primer tehničnega mentorja:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Izboljšave frontenda

Preoblikujte svoj klepetalni vmesnik z naslednjimi vizualnimi in funkcionalnimi izboljšavami:

**Napredne CSS funkcije:**
- **Izvedite** gladke animacije in prehode sporočil
- **Dodajte** prilagojene oblike klepetalnih oblačkov z uporabo CSS oblik in gradientov
- **Ustvarite** animacijo indikatorja tipkanja za "razmišljanje" AI
- **Oblikujte** reakcije z emojiji ali sistem ocenjevanja sporočil

**Izboljšave JavaScript-a:**
- **Dodajte** tipkovne bližnjice (Ctrl+Enter za pošiljanje, Escape za brisanje)
- **Implementirajte** iskanje in filtriranje sporočil
- **Ustvarite** funkcijo izvoza pogovora (kot besedilo ali JSON)
- **Dodajte** samodejno shranjevanje v localStorage, da preprečite izgubo sporočil

### Napredna AI integracija

**Več osebnosti AI:**
- **Ustvarite** padajoči seznam za preklapljanje med različnimi osebnostmi AI
- **Shranjujte** uporabnikovo izbrano osebnost v localStorage
- **Izvedite** preklapljanje konteksta, ki ohranja potek pogovora

**Pametne funkcionalnosti odgovorov:**
- **Dodajte** zavedanje konteksta pogovora (AI si zapomni prejšnja sporočila)
- **Izvedite** pametne predloge na podlagi teme pogovora  
- **Ustvarite** gumbe za hitre odgovore na pogosta vprašanja  

> 🎯 **Cilj učenja**: Ti dodatni izzivi vam pomagajo razumeti napredne vzorce spletnega razvoja in tehnike integracije umetne inteligence, ki se uporabljajo v produkcijskih aplikacijah.

## Povzetek in nadaljnji koraki

Čestitke! Uspešno ste zgradili popolnega klepetalnega asistenta, ki ga poganja umetna inteligenca, popolnoma od začetka. Ta projekt vam je dal praktične izkušnje z modernimi tehnologijami spletnega razvoja in integracijo AI – veščine, ki so vse bolj cenjene v današnjem tehnološkem okolju.

### Kaj ste dosegli

V celotnem tečaju ste osvojili več ključnih tehnologij in konceptov:

**Razvoj backend-a:**  
- **Integrirali** ste GitHub API za modele za AI funkcionalnost  
- **Zgradili** RESTful API z uporabo Flaska z ustreznim upravljanjem napak  
- **Izvedli** varno avtentikacijo z uporabo okoljskih spremenljivk  
- **Konfigurirali** CORS za zahteve med frontend in backend  

**Razvoj frontend-a:**  
- **Ustvarili** odziven klepetalni vmesnik s semantičnim HTML-jem  
- **Uporabili** sodobni JavaScript z async/await in arhitekturo na osnovi razredov  
- **Oblikovali** privlačen uporabniški vmesnik s CSS Grid, Flexbox in animacijami  
- **Dodali** funkcije dostopnosti in načela odzivnega oblikovanja  

**Celovita integracija:**  
- **Povezali** frontend in backend prek HTTP API klicev  
- **Obvladovali** interakcije uporabnikov v realnem času in asinhrono pretakanje podatkov  
- **Izvedli** upravljanje napak in povratne informacije uporabnikom po vsej aplikaciji  
- **Testirali** celoten potek aplikacije od vnosa uporabnika do odziva AI  

### Ključni učni izidi

```mermaid
mindmap
  root((Spretnosti AI klepetalnice))
    API Integracija
      Avtentikacija
      Ravnanje z napakami
      Asinhrono programiranje
    Spletni razvoj
      HTML5 semantika
      Moderna CSS
      ES6+ JavaScript
    Uporabniška izkušnja
      Prilagodljiv dizajn
      Dostopnost
      Interakcija v realnem času
    Razumevanje AI
      Konstruiranje pozivov
      Parametri modela
      Potek pogovora
```  
Ta projekt vas je seznanil z osnovami gradnje aplikacij, ki jih poganja umetna inteligenca, kar predstavlja prihodnost spletnega razvoja. Sedaj razumete, kako integrirati AI zmogljivosti v tradicionalne spletne aplikacije in ustvariti privlačne uporabniške izkušnje, ki delujejo inteligentno in odzivno.

### Poklicne uporabe

Veščine, ki ste jih razvili v tem tečaju, so neposredno uporabne v sodobnih karierah razvoja programske opreme:

- **Celostni spletni razvoj** z uporabo sodobnih ogrodij in API-jev  
- **Integracija AI** v spletne in mobilne aplikacije  
- **Oblikovanje in razvoj API-jev** za arhitekture mikro-storitev  
- **Razvoj uporabniškega vmesnika** s poudarkom na dostopnosti in odzivnem oblikovanju  
- **Prakse DevOps** vključno s konfiguracijo okolja in nameščanjem  

### Nadaljujte svojo pot razvoja z umetno inteligenco

**Nadaljnji koraki učenja:**  
- **Raziščite** bolj napredne AI modele in API-je (GPT-4, Claude, Gemini)  
- **Naučite se** tehnik priprave ukazov za boljše odgovore AI  
- **Študirajte** oblikovanje pogovorov in principe uporabniške izkušnje chatbotov  
- **Preučite** varnost, etiko in odgovorne prakse razvoja AI  
- **Gradite** zahtevnejše aplikacije z možnostjo pomnjenja pogovorov in zavedanjem konteksta  

**Napredne ideje za projekte:**  
- Večuporabniške klepetalnice z AI moderiranjem  
- Klepetalniki za podporo strankam, ki jih poganja AI  
- Izobraževalni tutorji z osebnim pristopom k učenju  
- Sodelavci pri ustvarjalnem pisanju z različnimi AI osebnostmi  
- Pomočniki za tehnično dokumentacijo za razvijalce  

## Začnite z GitHub Codespaces

Želite preizkusiti ta projekt v oblačnem razvojno okolju? GitHub Codespaces vam nudi popolno razvojno okolje v vašem brskalniku, idealno za eksperimentiranje z AI aplikacijami brez lokalnih zahtev po nastavitvi.

### Namestitev razvojnega okolja

**Korak 1: Ustvarite iz predloge**  
- **Odprite** [Web Dev For Beginners repozitorij](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Kliknite** "Use this template" v zgornjem desnem kotu (preverite, da ste prijavljeni v GitHub)  

![Create from template interface showing the green "Use this template" button](../../../translated_images/template.67ad477109d29a2b.sl.png)  

**Korak 2: Zaženite Codespaces**  
- **Odprite** novoustanovljeni repozitorij  
- **Kliknite** zeleno tipko "Code" in izberite "Codespaces"  
- **Izberite** "Create codespace on main", da začnete razvojno okolje  

![Create codespace interface with options for launching cloud development environment](../../../translated_images/codespace.bcecbdf5d2747d3d.sl.png)  

**Korak 3: Konfiguracija okolja**  
Ko se vaš Codespace naloži, boste imeli dostop do:  
- **Prednameščenih** Python, Node.js in vseh potrebnih orodij za razvoj  
- **Vmesnika VS Code** z razširitvami za spletni razvoj  
- **Terminala** za zagon backend in frontend strežnikov  
- **Posredovanja vrat** za preizkušanje vaših aplikacij  

**Kaj Codespaces nudi:**  
- **Odpravlja** težave z nastavitvijo in konfiguracijo lokalnega okolja  
- **Nudi** dosledno razvojno okolje na različnih napravah  
- **Vključuje** vnaprej konfigurirana orodja in razširitve za spletni razvoj  
- **Omogoča** nemoteno integracijo z GitHubom za nadzor različic in sodelovanje  

> 🚀 **Nasvet za profesionalce**: Codespaces je popoln za učenje in prototipiziranje AI aplikacij, saj samodejno ureja vse zapletene nastavitve okolja, kar vam omogoča, da se osredotočite na razvoj in učenje namesto na odpravljanje težav s konfiguracijo.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:
Ta dokument je bil preveden z uporabo AI prevajalske storitve [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v izvorni jezik se šteje za avtoritativni vir. Za pomembne informacije priporočamo strokovni prevod s strani človeka. Ne odgovarjamo za kakršne koli nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->