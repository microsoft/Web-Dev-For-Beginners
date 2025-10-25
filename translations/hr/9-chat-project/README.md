<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T23:59:24+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "hr"
}
-->
# Izgradnja chat asistenta s AI-jem

Sjećate li se kako su u Zvjezdanim stazama članovi posade razgovarali s računalom broda, postavljali mu složena pitanja i dobivali promišljene odgovore? Ono što se činilo kao čista znanstvena fantastika 1960-ih, sada je nešto što možete sami izraditi koristeći web tehnologije koje već poznajete.

U ovoj lekciji ćemo stvoriti AI chat asistenta koristeći HTML, CSS, JavaScript i integraciju s backendom. Otkrit ćete kako se iste vještine koje ste dosad učili mogu povezati s moćnim AI uslugama koje razumiju kontekst i generiraju smisleno odgovore.

Zamislite AI kao pristup ogromnoj biblioteci koja ne samo da pronalazi informacije, već ih sintetizira u koherentne odgovore prilagođene vašim specifičnim pitanjima. Umjesto pretraživanja tisuća stranica, dobivate izravne, kontekstualne odgovore.

Integracija se odvija putem poznatih web tehnologija koje rade zajedno. HTML stvara sučelje za chat, CSS se brine o vizualnom dizajnu, JavaScript upravlja interakcijama korisnika, a backend API povezuje sve s AI uslugama. To je slično načinu na koji različiti dijelovi orkestra zajedno stvaraju simfoniju.

U osnovi, gradimo most između prirodne ljudske komunikacije i strojne obrade. Naučit ćete tehničku implementaciju integracije AI usluga, kao i dizajnerske obrasce koji interakcije čine intuitivnima.

Do kraja ove lekcije, integracija AI-ja neće vam se činiti kao misteriozan proces, već kao još jedan API s kojim možete raditi. Razumjet ćete osnovne obrasce koji pokreću aplikacije poput ChatGPT-a i Claudea, koristeći iste principe web razvoja koje ste već učili.

Evo kako će izgledati vaš gotov projekt:

![Sučelje aplikacije za chat koje prikazuje razgovor između korisnika i AI asistenta](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.hr.png)

## Razumijevanje AI-ja: Od misterije do majstorstva

Prije nego što zaronimo u kod, razumjet ćemo s čime radimo. Ako ste već koristili API-je, znate osnovni obrazac: pošaljite zahtjev, primite odgovor.

AI API-ji slijede sličnu strukturu, ali umjesto da dohvaćaju unaprijed pohranjene podatke iz baze podataka, oni generiraju nove odgovore na temelju obrazaca naučenih iz ogromnih količina teksta. Zamislite to kao razliku između kataloga knjižnice i obrazovanog knjižničara koji može sintetizirati informacije iz više izvora.

### Što je zapravo "Generativni AI"?

Razmislite o tome kako je Rosetta Stone omogućila znanstvenicima da razumiju egipatske hijeroglife pronalazeći obrasce između poznatih i nepoznatih jezika. AI modeli rade na sličan način – pronalaze obrasce u ogromnim količinama teksta kako bi razumjeli kako jezik funkcionira, a zatim koriste te obrasce za generiranje odgovarajućih odgovora na nova pitanja.

**Evo jednostavne usporedbe:**
- **Tradicionalna baza podataka**: Kao da tražite rodni list – svaki put dobijete isti dokument
- **Tražilica**: Kao da tražite od knjižničara da pronađe knjige o mačkama – pokazuje vam što je dostupno
- **Generativni AI**: Kao da pitate obrazovanog prijatelja o mačkama – govori vam zanimljive stvari svojim riječima, prilagođene vašim potrebama

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Kako AI modeli uče (jednostavna verzija)

AI modeli uče kroz izloženost ogromnim skupovima podataka koji sadrže tekstove iz knjiga, članaka i razgovora. Kroz ovaj proces identificiraju obrasce u:
- Kako su misli strukturirane u pisanom obliku
- Koje riječi se često pojavljuju zajedno
- Kako razgovori obično teku
- Kontekstualne razlike između formalne i neformalne komunikacije

**To je slično načinu na koji arheolozi dešifriraju drevne jezike**: analiziraju tisuće primjera kako bi razumjeli gramatiku, vokabular i kulturni kontekst, te na kraju postaju sposobni interpretirati nove tekstove koristeći naučene obrasce.

### Zašto GitHub Models?

Koristimo GitHub Models iz praktičnog razloga – omogućuje nam pristup AI-ju na razini poduzeća bez potrebe za postavljanjem vlastite AI infrastrukture (što, vjerujte mi, trenutno ne želite raditi!). To je poput korištenja API-ja za vremensku prognozu umjesto pokušaja predviđanja vremena postavljanjem meteoroloških stanica posvuda.

To je u osnovi "AI-kao-usluga", a najbolji dio? Besplatno je za početak, tako da možete eksperimentirati bez brige o velikim troškovima.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Koristit ćemo GitHub Models za našu backend integraciju, koja pruža pristup AI mogućnostima profesionalne razine putem sučelja prilagođenog programerima. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) služi kao testno okruženje gdje možete eksperimentirati s različitim AI modelima i razumjeti njihove mogućnosti prije nego ih implementirate u kod.

![Sučelje GitHub Models AI Playgrounda s odabirom modela i područjem za testiranje](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.hr.png)

**Evo zašto je playground tako koristan:**
- **Isprobajte** različite AI modele poput GPT-4o-mini, Claudea i drugih (sve besplatno!)
- **Testirajte** svoje ideje i upite prije nego napišete bilo kakav kod
- **Dobijte** gotove isječke koda u svom omiljenom programskom jeziku
- **Prilagodite** postavke poput razine kreativnosti i duljine odgovora kako biste vidjeli kako utječu na izlaz

Nakon što se malo poigrate, samo kliknite karticu "Code" i odaberite svoj programski jezik kako biste dobili implementacijski kod koji vam je potreban.

![Odabir u playgroundu koji prikazuje opcije generiranja koda za različite programske jezike](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.hr.png)

## Postavljanje Python backend integracije

Sada ćemo implementirati AI integraciju koristeći Python. Python je izvrstan za AI aplikacije zbog svoje jednostavne sintakse i moćnih biblioteka. Počet ćemo s kodom iz GitHub Models playgrounda, a zatim ga refaktorirati u funkciju koja se može ponovno koristiti i koja je spremna za produkciju.

### Razumijevanje osnovne implementacije

Kada preuzmete Python kod iz playgrounda, dobit ćete nešto što izgleda ovako. Ne brinite ako vam se na prvi pogled čini previše – proći ćemo kroz njega korak po korak:

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

**Što se događa u ovom kodu:**
- **Uvozimo** alate koji su nam potrebni: `os` za čitanje varijabli okruženja i `OpenAI` za komunikaciju s AI-jem
- **Postavljamo** OpenAI klijent da se poveže s GitHubovim AI serverima umjesto izravno s OpenAI-jem
- **Autentificiramo se** pomoću posebnog GitHub tokena (više o tome kasnije!)
- **Strukturiramo** naš razgovor s različitim "ulogama" – kao da postavljamo scenu za predstavu
- **Šaljemo** naš zahtjev AI-ju s nekim parametrima za fino podešavanje
- **Izvlačimo** stvarni tekst odgovora iz svih podataka koji se vraćaju

### Razumijevanje uloga poruka: Okvir za AI razgovor

AI razgovori koriste specifičnu strukturu s različitim "ulogama" koje imaju različite svrhe:

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

**Zamislite to kao režiranje predstave:**
- **Uloga sustava**: Kao upute za glumca – govori AI-ju kako se ponašati, kakvu osobnost imati i kako odgovarati
- **Uloga korisnika**: Stvarno pitanje ili poruka od osobe koja koristi vašu aplikaciju
- **Uloga asistenta**: Odgovor AI-ja (ne šaljete ovo, ali se pojavljuje u povijesti razgovora)

**Analogija iz stvarnog života**: Zamislite da nekoga upoznajete s prijateljem na zabavi:
- **Poruka sustava**: "Ovo je moja prijateljica Sara, ona je doktorica koja odlično objašnjava medicinske koncepte na jednostavan način"
- **Poruka korisnika**: "Možete li mi objasniti kako funkcioniraju cjepiva?"
- **Odgovor asistenta**: Sara odgovara kao ljubazna doktorica, a ne kao odvjetnica ili kuharica

### Razumijevanje AI parametara: Fino podešavanje ponašanja odgovora

Numerički parametri u AI API pozivima kontroliraju kako će model generirati odgovore. Ove postavke omogućuju vam prilagodbu ponašanja AI-ja za različite slučajeve upotrebe:

#### Temperatura (0.0 do 2.0): Kontrola kreativnosti

**Što radi**: Kontrolira koliko će kreativni ili predvidljivi biti odgovori AI-ja.

**Zamislite to kao razinu improvizacije jazz glazbenika:**
- **Temperatura = 0.1**: Svira potpuno istu melodiju svaki put (vrlo predvidljivo)
- **Temperatura = 0.7**: Dodaje neke ukusne varijacije dok ostaje prepoznatljivo (uravnotežena kreativnost)
- **Temperatura = 1.5**: Potpuno eksperimentalni jazz s neočekivanim obratima (vrlo nepredvidljivo)

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

#### Maksimalni broj tokena (1 do 4096+): Kontrola duljine odgovora

**Što radi**: Postavlja ograničenje na duljinu odgovora AI-ja.

**Zamislite tokene kao približno ekvivalentne riječima** (otprilike 1 token = 0.75 riječi na engleskom):
- **max_tokens=50**: Kratko i jasno (kao SMS poruka)
- **max_tokens=500**: Lijep odlomak ili dva
- **max_tokens=2000**: Detaljno objašnjenje s primjerima

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

#### Top_p (0.0 do 1.0): Parametar fokusa

**Što radi**: Kontrolira koliko se AI fokusira na najvjerojatnije odgovore.

**Zamislite AI s ogromnim vokabularom, rangiranim prema vjerojatnosti svake riječi:**
- **top_p=0.1**: Razmatra samo 10% najvjerojatnijih riječi (vrlo fokusirano)
- **top_p=0.9**: Razmatra 90% mogućih riječi (više kreativno)
- **top_p=1.0**: Razmatra sve (maksimalna raznolikost)

**Na primjer**: Ako pitate "Nebo je obično..."
- **Nizak top_p**: Gotovo sigurno kaže "plavo"
- **Visok top_p**: Može reći "plavo", "oblačno", "prostrano", "promjenjivo", "prekrasno" itd.

### Spajanje svega: Kombinacije parametara za različite slučajeve upotrebe

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

**Razumijevanje zašto su ovi parametri važni**: Različite aplikacije trebaju različite vrste odgovora. Bot za korisničku podršku trebao bi biti dosljedan i faktualan (niska temperatura), dok bi asistent za kreativno pisanje trebao biti maštovit i raznolik (visoka temperatura). Razumijevanje ovih parametara daje vam kontrolu nad osobnošću i stilom odgovora vašeg AI-ja.
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

**Razumijevanje ove poboljšane funkcije:**
- **Prihvaća** dva parametra: upit korisnika i opcionalnu poruku sustava
- **Pruža** zadanu poruku sustava za opće ponašanje asistenta
- **Koristi** odgovarajuće Python tipove za bolju dokumentaciju koda
- **Vraća** samo sadržaj odgovora, što ga čini jednostavnim za korištenje u našem web API-ju
- **Održava** iste parametre modela za dosljedno ponašanje AI-ja

### Magija sistemskih upita: Programiranje osobnosti AI-ja

Ako parametri kontroliraju kako AI razmišlja, sistemski upiti kontroliraju tko AI misli da jest. Ovo je iskreno jedan od najzanimljivijih dijelova rada s AI-jem – u biti dajete AI-ju kompletnu osobnost, razinu stručnosti i stil komunikacije.

**Zamislite sistemske upite kao odabir različitih glumaca za različite uloge**: Umjesto da imate jednog generičkog asistenta, možete stvoriti specijalizirane stručnjake za različite situacije. Trebate strpljivog učitelja? Kreativnog partnera za brainstorming? Poslovnog savjetnika bez dlake na jeziku? Samo promijenite sistemski upit!

#### Zašto su sistemski upiti tako moćni

Evo fascinantnog dijela: AI modeli su trenirani na bezbroj razgovora u kojima ljudi preuzimaju različite uloge i razine stručnosti. Kada AI-ju date specifičnu ulogu, to je kao da uključite prekidač koji aktivira sve te naučene obrasce.

**To je kao metoda glume za AI**: Recite glumcu "ti si mudri stari profesor" i gledajte kako automatski prilagođava držanje, vokabular i manire. AI radi nešto nevjerojatno slično s jezičnim obrascima.

#### Kreiranje učinkovitih sistemskih upita: Umjetnost i znanost

**Anatomija odličnog sistemskog upita:**
1. **Uloga/identitet**: Tko je AI?
2. **Stručnost**: Što zna?
3. **Stil komunikacije**: Kako govori?
4. **Specifične upute**: Na što se treba fokusirati?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Primjeri sistemskih upita s kontekstom

Pogledajmo kako različiti sistemski upiti stvaraju potpuno različite osobnosti AI-ja:

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

#### Prikaz sistemskih upita u praksi

Testirajmo isto pitanje s različitim sistemskim upitima kako bismo vidjeli dramatične razlike:

**Pitanje**: "Kako da postavim autentifikaciju korisnika u svojoj web aplikaciji?"

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

#### Napredne tehnike sistemskih upita

**1. Postavljanje konteksta**: Dajte AI-ju pozadinske informacije
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formatiranje izlaza**: Recite AI-ju kako strukturirati odgovore
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

**3. Postavljanje ograničenja**: Definirajte što AI ne bi trebao raditi
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Zašto je ovo važno za vaš chat asistent

Razumijevanje sistemskih upita daje vam nevjerojatnu moć za stvaranje specijaliziranih AI asistenata:
- **Bot za korisničku podršku**: Koristan, strpljiv, svjestan pravila
- **Tutor za učenje**: Ohrabrujući, korak po korak, provjerava razumijevanje
- **Kreativni partner**: Maštovit, nadograđuje ideje, postavlja "što ako?" pitanja
- **Tehnički stručnjak**: Precizan, detaljan, svjestan sigurnosti

**Ključni uvid**: Ne pozivate samo AI API – stvarate prilagođenu AI osobnost koja služi vašim specifičnim potrebama.

## Izgradnja web API-ja s FastAPI: Vaš visokoučinkoviti komunikacijski centar za AI

Sada ćemo izgraditi backend koji povezuje vaš frontend s AI uslugama. Koristit ćemo FastAPI, moderni Python okvir koji se ističe u izradi API-ja za AI aplikacije.

FastAPI nudi nekoliko prednosti za ovu vrstu projekta: ugrađena podrška za asinhrono rukovanje zahtjevima, automatsko generiranje dokumentacije API-ja i izvrsne performanse. Vaš FastAPI server djeluje kao posrednik koji prima zahtjeve s frontenda, komunicira s AI uslugama i vraća formatirane odgovore.

### Zašto FastAPI za AI aplikacije?

Možda se pitate: "Zar ne mogu jednostavno pozvati AI izravno iz svog frontend JavaScripta?" ili "Zašto FastAPI umjesto Flask ili Django?" Odlična pitanja! 
**Evo zašto je FastAPI savršen za ono što gradimo:**
- **Asinkrono po defaultu**: Može istovremeno obrađivati više AI zahtjeva bez zastoja
- **Automatska dokumentacija**: Posjetite `/docs` i dobijte prekrasnu, interaktivnu stranicu za dokumentaciju API-ja besplatno
- **Ugrađena validacija**: Hvata greške prije nego što uzrokuju probleme
- **Izuzetno brz**: Jedan od najbržih Python okvira
- **Moderni Python**: Koristi najnovije i najbolje značajke Pythona

**I evo zašto nam uopće treba backend:**

**Sigurnost**: Vaš AI API ključ je poput lozinke – ako ga stavite u frontend JavaScript, svatko tko pogleda izvorni kod vaše web stranice mogao bi ga ukrasti i koristiti vaše AI kredite. Backend čuva osjetljive podatke sigurnima.

**Ograničenje brzine i kontrola**: Backend vam omogućuje kontrolu koliko često korisnici mogu slati zahtjeve, implementaciju autentifikacije korisnika i dodavanje zapisivanja za praćenje korištenja.

**Obrada podataka**: Možda ćete htjeti spremiti razgovore, filtrirati neprimjeren sadržaj ili kombinirati više AI usluga. Backend je mjesto gdje se odvija ova logika.

**Arhitektura nalikuje modelu klijent-poslužitelj:**
- **Frontend**: Sloj korisničkog sučelja za interakciju
- **Backend API**: Sloj za obradu zahtjeva i usmjeravanje
- **AI usluga**: Vanjska obrada i generiranje odgovora
- **Varijable okruženja**: Sigurno pohranjivanje konfiguracije i vjerodajnica

### Razumijevanje toka zahtjeva i odgovora

Pratimo što se događa kada korisnik pošalje poruku:

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

**Razumijevanje svakog koraka:**
1. **Interakcija korisnika**: Osoba unosi tekst u sučelje za chat
2. **Obrada na frontendu**: JavaScript hvata unos i formatira ga kao JSON
3. **Validacija API-ja**: FastAPI automatski validira zahtjev koristeći Pydantic modele
4. **Integracija AI-ja**: Backend dodaje kontekst (sistemski prompt) i poziva AI uslugu
5. **Obrada odgovora**: API prima odgovor AI-ja i može ga po potrebi izmijeniti
6. **Prikaz na frontendu**: JavaScript prikazuje odgovor u sučelju za chat

### Razumijevanje arhitekture API-ja

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

### Kreiranje FastAPI aplikacije

Izgradimo naš API korak po korak. Kreirajte datoteku pod nazivom `api.py` s sljedećim FastAPI kodom:

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

**Razumijevanje implementacije FastAPI-ja:**
- **Uvozi** FastAPI za funkcionalnost modernog web okvira i Pydantic za validaciju podataka
- **Kreira** automatsku dokumentaciju API-ja (dostupnu na `/docs` kada se poslužitelj pokrene)
- **Omogućuje** CORS middleware za omogućavanje zahtjeva s frontenda s različitih izvora
- **Definira** Pydantic modele za automatsku validaciju zahtjeva/odgovora i dokumentaciju
- **Koristi** asinkrone krajnje točke za bolju izvedbu s istovremenim zahtjevima
- **Implementira** odgovarajuće HTTP statusne kodove i rukovanje greškama s HTTPException
- **Uključuje** strukturirano zapisivanje za praćenje i otklanjanje grešaka
- **Pruža** krajnju točku za provjeru zdravlja usluge

**Ključne prednosti FastAPI-ja u odnosu na tradicionalne okvire:**
- **Automatska validacija**: Pydantic modeli osiguravaju integritet podataka prije obrade
- **Interaktivna dokumentacija**: Posjetite `/docs` za automatski generiranu, testabilnu dokumentaciju API-ja
- **Sigurnost tipova**: Python tipovi sprječavaju greške u izvođenju i poboljšavaju kvalitetu koda
- **Podrška za asinkroni rad**: Istovremeno obrađuje više AI zahtjeva bez blokiranja
- **Izvedba**: Značajno brža obrada zahtjeva za aplikacije u stvarnom vremenu

### Razumijevanje CORS-a: Sigurnosni čuvar weba

CORS (Cross-Origin Resource Sharing) je poput sigurnosnog čuvara u zgradi koji provjerava je li posjetiteljima dopušten ulazak. Razumijmo zašto je to važno i kako utječe na vašu aplikaciju.

#### Što je CORS i zašto postoji?

**Problem**: Zamislite da bilo koja web stranica može slati zahtjeve na web stranicu vaše banke u vaše ime bez vašeg dopuštenja. To bi bio sigurnosni kaos! Preglednici to sprječavaju po defaultu kroz "Politiku istog podrijetla".

**Politika istog podrijetla**: Preglednici dopuštaju web stranicama slanje zahtjeva samo na istu domenu, port i protokol s kojeg su učitane.

**Analogija iz stvarnog života**: To je poput sigurnosti u stambenoj zgradi – samo stanari (isti izvor) mogu pristupiti zgradi po defaultu. Ako želite pustiti prijatelja (drugi izvor) da posjeti, morate izričito obavijestiti sigurnost da je to u redu.

#### CORS u vašem razvojnom okruženju

Tijekom razvoja, vaš frontend i backend rade na različitim portovima:
- Frontend: `http://localhost:3000` (ili file:// ako otvarate HTML izravno)
- Backend: `http://localhost:5000`

Oni se smatraju "različitim izvorima" iako su na istom računalu!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Što CORS konfiguracija radi u praksi:**
- **Dodaje** posebne HTTP zaglavlja odgovorima API-ja koja preglednicima govore "ovaj zahtjev s različitog izvora je dopušten"
- **Rješava** "preflight" zahtjeve (preglednici ponekad provjeravaju dozvole prije slanja stvarnog zahtjeva)
- **Sprječava** zloglasnu grešku "blocked by CORS policy" u konzoli preglednika

#### Sigurnost CORS-a: Razvoj vs Produkcija

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

**Zašto je to važno**: U razvoju, `CORS(app)` je poput ostavljanja ulaznih vrata otključanima – praktično, ali nesigurno. U produkciji želite točno odrediti koje web stranice mogu komunicirati s vašim API-jem.

#### Uobičajeni scenariji CORS-a i rješenja

| Scenarij | Problem | Rješenje |
|----------|---------|----------|
| **Lokalni razvoj** | Frontend ne može pristupiti backendu | Dodajte CORSMiddleware u FastAPI |
| **GitHub Pages + Heroku** | Objavljeni frontend ne može pristupiti API-ju | Dodajte URL vaše GitHub Pages stranice u CORS podrijetla |
| **Prilagođena domena** | CORS greške u produkciji | Ažurirajte CORS podrijetla da odgovaraju vašoj domeni |
| **Mobilna aplikacija** | Aplikacija ne može pristupiti web API-ju | Dodajte domenu vaše aplikacije ili pažljivo koristite `*` |

**Savjet**: Možete provjeriti CORS zaglavlja u Developer Tools vašeg preglednika pod karticom Network. Potražite zaglavlja poput `Access-Control-Allow-Origin` u odgovoru.

### Rukovanje greškama i validacija

Primijetite kako naš API uključuje pravilno rukovanje greškama:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Ključni principi validacije:**
- **Provjerava** potrebna polja prije obrade zahtjeva
- **Vraća** smislene poruke o greškama u JSON formatu
- **Koristi** odgovarajuće HTTP statusne kodove (400 za neispravne zahtjeve)
- **Pruža** jasne povratne informacije kako bi frontend developeri lakše otklonili probleme

## Postavljanje i pokretanje vašeg backenda

Sada kada imamo našu AI integraciju i FastAPI poslužitelj spreman, krenimo s pokretanjem svega. Proces postavljanja uključuje instalaciju Python ovisnosti, konfiguraciju varijabli okruženja i pokretanje vašeg razvojnog poslužitelja.

### Postavljanje Python okruženja

Postavimo vaše Python razvojno okruženje. Virtualna okruženja su poput odvojenih prostora za svaki projekt s određenim alatima i ovisnostima, što sprječava sukobe između različitih projekata.

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

**Što smo upravo napravili:**
- **Kreirali** vlastiti mali Python prostor gdje možemo instalirati pakete bez utjecaja na bilo što drugo
- **Aktivirali** ga kako bi naš terminal znao koristiti ovo specifično okruženje
- **Instalirali** osnovne alate: OpenAI za AI funkcionalnosti, FastAPI za naš web API, Uvicorn za pokretanje i python-dotenv za sigurno upravljanje tajnama

**Objašnjenje ključnih ovisnosti:**
- **FastAPI**: Moderni, brzi web okvir s automatskom dokumentacijom API-ja
- **Uvicorn**: Izuzetno brzi ASGI poslužitelj koji pokreće FastAPI aplikacije
- **OpenAI**: Službena biblioteka za GitHub modele i integraciju OpenAI API-ja
- **python-dotenv**: Sigurno učitavanje varijabli okruženja iz .env datoteka

### Konfiguracija okruženja: Čuvanje tajni sigurnima

Prije nego što pokrenemo naš API, moramo razgovarati o jednoj od najvažnijih lekcija u web razvoju: kako zapravo čuvati svoje tajne. Varijable okruženja su poput sigurnog trezora kojem samo vaša aplikacija može pristupiti.

#### Što su varijable okruženja?

**Zamislite varijable okruženja kao sef** – stavite svoje vrijedne stvari unutra, i samo vi (i vaša aplikacija) imate ključ za pristup. Umjesto da pišete osjetljive informacije izravno u kod (gdje ih doslovno svatko može vidjeti), pohranjujete ih sigurno u okruženju.

**Evo razlike:**
- **Pogrešan način**: Pisanje lozinke na ljepljivu bilješku i stavljanje na monitor
- **Pravi način**: Čuvanje lozinke u sigurnom upravitelju lozinki kojem samo vi možete pristupiti

#### Zašto su varijable okruženja važne

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

**Što se događa kada hardkodirate tajne:**
1. **Izloženost verzioniranju**: Svatko tko ima pristup vašem Git repozitoriju vidi vaš API ključ
2. **Javni repozitoriji**: Ako objavite na GitHubu, vaš ključ je vidljiv cijelom internetu
3. **Dijeljenje s timom**: Drugi developeri koji rade na vašem projektu dobivaju pristup vašem osobnom API ključu
4. **Sigurnosni propusti**: Ako netko ukrade vaš API ključ, može koristiti vaše AI kredite

#### Postavljanje vaše datoteke okruženja

Kreirajte `.env` datoteku u direktoriju vašeg backenda. Ova datoteka lokalno pohranjuje vaše tajne:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Razumijevanje .env datoteke:**
- **Jedna tajna po liniji** u formatu `KEY=value`
- **Bez razmaka** oko znaka jednakosti
- **Nisu potrebni navodnici** oko vrijednosti (obično)
- **Komentari** počinju s `#`

#### Kreiranje osobnog pristupnog tokena za GitHub

Vaš GitHub token je poput posebne lozinke koja vašoj aplikaciji daje dopuštenje za korištenje GitHub-ovih AI usluga:

**Koraci za kreiranje tokena:**
1. **Idite na GitHub postavke** → Developer settings → Personal access tokens → Tokens (classic)
2. **Kliknite "Generate new token (classic)"**
3. **Postavite rok trajanja** (30 dana za testiranje, duže za produkciju)
4. **Odaberite ovlasti**: Označite "repo" i sve ostale potrebne dozvole
5. **Generirajte token** i odmah ga kopirajte (nećete ga moći ponovno vidjeti!)
6. **Zalijepite ga u svoju .env datoteku**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Učitavanje varijabli okruženja u Pythonu

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

**Što ovaj kod radi:**
- **Učitava** vašu .env datoteku i čini varijable dostupnima Pythonu
- **Provjerava** postoji li potrebni token (dobro rukovanje greškama!)
- **Generira** jasnu grešku ako token nedostaje
- **Koristi** token sigurno bez izlaganja u kodu

#### Sigurnost u Gitu: Datoteka .gitignore

Vaša `.gitignore` datoteka govori Gitu koje datoteke nikada ne treba pratiti ili učitati:

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

**Zašto je ovo ključno**: Kada dodate `.env` u `.gitignore`, Git će ignorirati vašu datoteku okruženja, sprječavajući vas da slučajno učitate svoje tajne na GitHub.

#### Različita okruženja, različite tajne

Profesionalne aplikacije koriste različite API ključeve za različita okruženja:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Zašto je to važno**: Ne želite da vaši eksperimenti u razvoju utječu na vašu produkcijsku AI kvotu, a želite različite razine sigurnosti za različita okruženja.

### Pokretanje vašeg razvojnog poslužitelja: Oživljavanje vašeg FastAPI-ja

Sada dolazi uzbudljiv trenutak – pokretanje vašeg razvojnog poslužitelja FastAPI-ja i gledanje kako vaša AI integracija oživljava! FastAPI koristi Uvicorn, izuzetno brzi ASGI poslužitelj koji je posebno dizajniran za asinkrone Python aplikacije.

#### Razumijevanje procesa pokretanja FastAPI poslužitelja

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kada pokrenete ovu naredbu, evo što se događa iza kulisa:

**1. Python učitava vašu FastAPI aplikaciju**:
- Uvozi sve potrebne biblioteke (FastAPI, Pydantic, OpenAI itd.)
- Učitava varijable okruženja iz vaše `.env` datoteke
- Kreira instancu FastAPI aplikacije s automatskom dokumentacijom

**2. Uvicorn konfigurira ASGI poslužitelj**:
- Vezuje se na port 5000 s mogućnostima asinkronog rukovanja zahtjevima
- Postavlja usmjeravanje zahtjeva s automatskom validacijom
- Omogućuje automatsko ponovno učitavanje za razvoj (ponovno pokretanje pri promjenama datoteka)
- Generira interaktivnu dokumentaciju API-ja

**3. Poslužitelj počinje slušati**:
- Vaš terminal prikazuje: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Poslužitelj može obrađivati više istovremenih AI zahtjeva
- Vaš API je spreman s automatskom dokumentacijom na `http://localhost:5000/docs`

#### Što biste trebali vidjeti kada sve radi

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Razumijevanje FastAPI izlaza:**
- **Pratit će promjene**: Automatsko ponovno učitavanje omogućeno za razvoj
- **Uvicorn radi**: Aktiviran je visokoučinkoviti ASGI poslužitelj
- **Pokrenut proces ponovnog učitavanja**: Promatrač datoteka za automatska ponovno pokretanja
- **Aplikacija uspješno pokrenuta**: FastAPI aplikacija uspješno inicijalizirana
- **Interaktivna dokumentacija dostupna**: Posjetite `/docs` za automatsku dokumentaciju API-ja

#### Testiranje vašeg FastAPI-ja: Više moćnih pristupa

FastAPI pruža nekoliko praktičnih načina za testiranje vašeg API-ja, uključujući automatsku interaktivnu dokumentaciju:

**Metoda 1: Interaktivna dokumentacija API-ja (Preporučeno)**
1. Otvorite preglednik i idite na `http://localhost:5000/docs`
2. Vidjet ćete Swagger UI sa svim dokumentiranim krajnjim točkama
3. Kliknite na `/hello` → "Try it out" → Unesite testnu poruku → "Execute"
4. Pogledajte odgovor izravno u pregledniku s pravilnim formatiranjem

**Metoda 2: Osnovni test u pregledniku**
1. Idite na `http://localhost:5000` za osnovnu krajnju točku
2. Idite na `http://localhost:5000/health` za provjeru zdravlja poslužitelja
3. Ovo potvrđuje da vaš FastAPI poslužitelj ispravno radi

**Metoda 2: Testiranje putem naredbenog retka (Napredno
#### Rješavanje uobičajenih problema pri pokretanju

| Poruka o grešci | Što znači | Kako popraviti |
|-----------------|-----------|----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI nije instaliran | Pokrenite `pip install fastapi uvicorn` u svom virtualnom okruženju |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI poslužitelj nije instaliran | Pokrenite `pip install uvicorn` u svom virtualnom okruženju |
| `KeyError: 'GITHUB_TOKEN'` | Nije pronađena varijabla okruženja | Provjerite svoju `.env` datoteku i poziv `load_dotenv()` |
| `Address already in use` | Port 5000 je zauzet | Prekinite druge procese koji koriste port 5000 ili promijenite port |
| `ValidationError` | Podaci zahtjeva ne odgovaraju Pydantic modelu | Provjerite format zahtjeva da odgovara očekivanom shemi |
| `HTTPException 422` | Neobradiv entitet | Validacija zahtjeva nije uspjela, provjerite `/docs` za ispravan format |
| `OpenAI API error` | Autentifikacija AI usluge nije uspjela | Provjerite je li vaš GitHub token ispravan i ima odgovarajuće dozvole |

#### Najbolje prakse za razvoj

**Automatsko ponovno učitavanje**: FastAPI s Uvicornom omogućuje automatsko ponovno učitavanje kada spremite promjene u svoje Python datoteke. To znači da možete odmah testirati izmjene bez ručnog ponovnog pokretanja.

**Evidentiranje za razvoj**: Dodajte evidentiranje kako biste razumjeli što se događa:

**Zašto evidentiranje pomaže**: Tijekom razvoja možete vidjeti točno koji zahtjevi dolaze, kako AI odgovara i gdje se javljaju greške. To značajno ubrzava proces otklanjanja grešaka.

### Konfiguracija za GitHub Codespaces: Jednostavan razvoj u oblaku

GitHub Codespaces je poput moćnog razvojnog računala u oblaku kojem možete pristupiti iz bilo kojeg preglednika. Ako radite u Codespaces, postoji nekoliko dodatnih koraka kako biste omogućili pristup vašem backendu s frontenda.

#### Razumijevanje mreže Codespaces

U lokalnom razvojnom okruženju sve se pokreće na istom računalu:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (ili file://)

U Codespaces, vaše razvojno okruženje pokreće se na GitHubovim poslužiteljima, pa "localhost" ima drugačije značenje. GitHub automatski stvara javne URL-ove za vaše usluge, ali ih morate pravilno konfigurirati.

#### Koraci za konfiguraciju Codespaces

**1. Pokrenite svoj backend poslužitelj**:
Vidjet ćete poznatu poruku o pokretanju FastAPI/Uvicorn, ali primijetite da se pokreće unutar Codespace okruženja.

**2. Konfigurirajte vidljivost porta**:
- Potražite karticu "Ports" u donjem panelu VS Code-a
- Pronađite port 5000 na popisu
- Desnom tipkom miša kliknite na port 5000
- Odaberite "Port Visibility" → "Public"

**Zašto ga učiniti javnim?** Po defaultu, portovi u Codespaceu su privatni (dostupni samo vama). Javna vidljivost omogućuje vašem frontendu (koji se pokreće u pregledniku) komunikaciju s backendom.

**3. Dobijte svoj javni URL**:
Nakon što port postane javan, vidjet ćete URL poput:

**4. Ažurirajte konfiguraciju frontenda**:

#### Razumijevanje Codespace URL-ova

Codespace URL-ovi slijede predvidljiv obrazac:

**Razlaganje:**
- `codespace-name`: Jedinstveni identifikator za vaš Codespace (obično uključuje vaše korisničko ime)
- `port`: Broj porta na kojem se vaša usluga pokreće (5000 za naš FastAPI app)
- `app.github.dev`: GitHubova domena za aplikacije u Codespaceu

#### Testiranje postavki Codespacea

**1. Testirajte backend izravno**:
Otvorite svoj javni URL u novoj kartici preglednika. Trebali biste vidjeti:

**2. Testirajte s alatima za razvoj preglednika**:

#### Codespaces vs lokalni razvoj

| Aspekt | Lokalni razvoj | GitHub Codespaces |
|--------|----------------|-------------------|
| **Vrijeme postavljanja** | Duže (instalacija Pythona, ovisnosti) | Trenutno (predkonfigurirano okruženje) |
| **Pristup URL-u** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfiguracija porta** | Automatska | Ručna (učiniti portove javnim) |
| **Trajnost datoteka** | Lokalno računalo | GitHub repozitorij |
| **Suradnja** | Teško dijeljenje okruženja | Jednostavno dijeljenje linka Codespacea |
| **Ovisnost o internetu** | Samo za AI API pozive | Potrebno za sve |

#### Savjeti za razvoj u Codespaceu

**Varijable okruženja u Codespaceu**:
Vaša `.env` datoteka funkcionira na isti način u Codespaceu, ali možete postaviti varijable okruženja izravno u Codespace:

**Upravljanje portovima**:
- Codespaces automatski otkriva kada vaša aplikacija počne slušati na portu
- Možete istovremeno proslijediti više portova (korisno ako kasnije dodate bazu podataka)
- Portovi ostaju dostupni dok je vaš Codespace aktivan

**Radni tijek razvoja**:
1. Izvršite promjene u kodu u VS Code-u
2. FastAPI se automatski ponovno učitava (zahvaljujući Uvicornovom načinu ponovnog učitavanja)
3. Odmah testirajte promjene putem javnog URL-a
4. Po potrebi izvršite commit i push

> 💡 **Savjet**: Dodajte svoj Codespace backend URL u oznake tijekom razvoja. Budući da su imena Codespacea stabilna, URL se neće mijenjati dok koristite isti Codespace.

## Izrada sučelja za chat na frontendu: Gdje se ljudi susreću s AI-jem

Sada ćemo izgraditi korisničko sučelje – dio koji određuje kako ljudi komuniciraju s vašim AI asistentom. Kao i dizajn originalnog iPhone sučelja, fokusiramo se na to da složenu tehnologiju učinimo intuitivnom i prirodnom za korištenje.

### Razumijevanje moderne arhitekture frontenda

Naše sučelje za chat bit će ono što nazivamo "Jednostrana aplikacija" ili SPA. Umjesto staromodnog pristupa gdje svaki klik učitava novu stranicu, naša aplikacija se ažurira glatko i trenutno:

**Stare web stranice**: Kao čitanje fizičke knjige – okrećete potpuno nove stranice
**Naša aplikacija za chat**: Kao korištenje vašeg telefona – sve teče i ažurira se bez prekida

### Tri stupa razvoja frontenda

Svaka frontend aplikacija – od jednostavnih web stranica do složenih aplikacija poput Discorda ili Slacka – temelji se na tri osnovne tehnologije. Zamislite ih kao temelj svega što vidite i s čime komunicirate na webu:

**HTML (Struktura)**: Vaš temelj
- Određuje koji elementi postoje (gumbi, tekstualna polja, spremnici)
- Daje značenje sadržaju (ovo je zaglavlje, ovo je obrazac itd.)
- Stvara osnovnu strukturu na kojoj se sve ostalo gradi

**CSS (Izgled)**: Vaš dizajner interijera
- Čini sve lijepim (boje, fontovi, rasporedi)
- Prilagođava različite veličine zaslona (telefon vs laptop vs tablet)
- Stvara glatke animacije i vizualne povratne informacije

**JavaScript (Ponašanje)**: Vaš mozak
- Reagira na ono što korisnici rade (klikovi, tipkanje, pomicanje)
- Komunicira s vašim backendom i ažurira stranicu
- Čini sve interaktivnim i dinamičnim

**Zamislite to kao arhitektonski dizajn:**
- **HTML**: Strukturni nacrt (definiranje prostora i odnosa)
- **CSS**: Estetski i okolišni dizajn (vizualni stil i korisničko iskustvo)
- **JavaScript**: Mehanički sustavi (funkcionalnost i interaktivnost)

### Zašto je moderna JavaScript arhitektura važna

Naša aplikacija za chat koristit će moderne JavaScript obrasce koje ćete vidjeti u profesionalnim aplikacijama. Razumijevanje ovih koncepata pomoći će vam da se razvijate kao programer:

**Arhitektura temeljena na klasama**: Organizirat ćemo naš kod u klase, što je poput stvaranja nacrta za objekte
**Async/Await**: Moderan način rukovanja operacijama koje traju (poput API poziva)
**Programiranje vođeno događajima**: Naša aplikacija reagira na korisničke akcije (klikove, pritiske tipki) umjesto da radi u petlji
**Manipulacija DOM-om**: Dinamičko ažuriranje sadržaja web stranice na temelju interakcija korisnika i odgovora API-ja

### Postavljanje strukture projekta

Kreirajte direktorij za frontend s ovako organiziranom strukturom:

**Razumijevanje arhitekture:**
- **Razdvaja** brige između strukture (HTML), ponašanja (JavaScript) i izgleda (CSS)
- **Održava** jednostavnu strukturu datoteka koja je jednostavna za navigaciju i izmjenu
- **Prati** najbolje prakse web razvoja za organizaciju i održivost

### Izrada HTML temelja: Semantička struktura za pristupačnost

Započnimo s HTML strukturom. Moderni web razvoj naglašava "semantički HTML" – korištenje HTML elemenata koji jasno opisuju svoju svrhu, a ne samo izgled. To čini vašu aplikaciju pristupačnom čitačima ekrana, tražilicama i drugim alatima.

**Zašto je semantički HTML važan**: Zamislite da opisujete svoju aplikaciju za chat nekome preko telefona. Rekli biste "postoji zaglavlje s naslovom, glavni dio gdje se pojavljuju razgovori i obrazac na dnu za unos poruka." Semantički HTML koristi elemente koji odgovaraju ovom prirodnom opisu.

Kreirajte `index.html` s ovim pažljivo strukturiranim oznakama:

**Razumijevanje svakog HTML elementa i njegove svrhe:**

#### Struktura dokumenta
- **`<!DOCTYPE html>`**: Govori pregledniku da je ovo moderni HTML5
- **`<html lang="en">`**: Navodi jezik stranice za čitače ekrana i alate za prijevod
- **`<meta charset="UTF-8">`**: Osigurava pravilno kodiranje znakova za međunarodni tekst
- **`<meta name="viewport"...>`**: Čini stranicu mobilno prilagodljivom kontroliranjem zumiranja i skaliranja

#### Semantički elementi
- **`<header>`**: Jasno označava gornji dio s naslovom i opisom
- **`<main>`**: Označava glavno područje sadržaja (gdje se odvijaju razgovori)
- **`<form>`**: Semantički ispravno za unos korisnika, omogućuje pravilnu navigaciju tipkovnicom

#### Značajke pristupačnosti
- **`role="log"`**: Govori čitačima ekrana da ovo područje sadrži kronološki zapis poruka
- **`aria-live="polite"`**: Najavljuje nove poruke čitačima ekrana bez prekida
- **`aria-label`**: Pruža opisne oznake za kontrole obrasca
- **`required`**: Preglednik provjerava da korisnici unesu poruku prije slanja

#### Integracija CSS-a i JavaScripta
- **`class` atributi**: Pružaju stilizacijske točke za CSS (npr. `chat-container`, `input-group`)
- **`id` atributi**: Omogućuju JavaScriptu pronalaženje i manipulaciju specifičnim elementima
- **Postavljanje skripti**: JavaScript datoteka učitana na kraju kako bi se HTML prvo učitao

**Zašto ova struktura funkcionira:**
- **Logičan tok**: Zaglavlje → Glavni sadržaj → Obrazac za unos odgovara prirodnom redoslijedu čitanja
- **Pristupačno tipkovnicom**: Korisnici mogu prelaziti između svih interaktivnih elemenata
- **Prijateljski za čitače ekrana**: Jasne oznake i opisi za slabovidne korisnike
- **Mobilno prilagodljivo**: Meta oznaka za viewport omogućuje responzivni dizajn
- **Progresivno poboljšanje**: Funkcionira čak i ako CSS ili JavaScript ne uspiju učitati

### Dodavanje interaktivnog JavaScripta: Logika moderne web aplikacije

Sada ćemo izraditi JavaScript koji će oživjeti naše sučelje za chat. Koristit ćemo moderne JavaScript obrasce koje ćete susresti u profesionalnom web razvoju, uključujući ES6 klase, async/await i programiranje vođeno događajima.

#### Razumijevanje moderne JavaScript arhitekture

Umjesto pisanja proceduralnog koda (niza funkcija koje se izvršavaju redom), kreirat ćemo **arhitekturu temeljenu na klasama**. Razmislite o klasi kao o nacrtu za stvaranje objekata – poput nacrta arhitekta koji se može koristiti za izgradnju više kuća.

**Zašto koristiti klase za web aplikacije?**
- **Organizacija**: Sva povezana funkcionalnost grupirana je zajedno
- **Ponovna upotreba**: Možete stvoriti više instanci chata na istoj stranici
- **Održavanje**: Lakše je otkloniti greške i mijenjati specifične značajke
- **Profesionalni standard**: Ovaj obrazac koristi se u okvirima poput Reacta, Vuea i Angulara

Kreirajte `app.js` s ovim modernim, dobro strukturiranim JavaScriptom:

#### Razumijevanje svakog JavaScript koncepta

**Struktura ES6 klase**:

**Async/Await obrazac**:

**Programiranje vođeno događajima**:
Umjesto stalnog provjeravanja je li se nešto dogodilo, "slušamo" događaje:

**Manipulacija DOM-om**:

#### Sigurnost i najbolje prakse

**Prevencija XSS-a**:

**Zašto je to važno**: Ako korisnik unese `<script>alert('hack')</script>`, ova funkcija osigurava da se prikazuje kao tekst, a ne da se izvršava kao kod.

**Rukovanje greškama**:

**Razmatranja korisničkog iskustva**:
- **Optimistički UI**: Dodajte korisničku poruku odmah, ne čekajte odgovor poslužitelja
- **Stanja učitavanja**: Onemogućite gumbe i prikažite "Šaljem..." dok čekate
- **Automatsko pomicanje**: Održava najnovije poruke vidljivima
- **Validacija unosa**: Ne šaljite prazne poruke
- **Prečaci na tipkovnici**: Tipka Enter šalje poruke (kao u pravim aplikacijama za chat)

#### Razumijevanje toka aplikacije

1. **Stranica se učitava** → Pokreće se događaj `DOMContentLoaded` → Kreira se `new ChatApp()`
2. **Konstruktor se pokreće** → Dobiva reference na DOM elemente → Postavlja slušatelje događaja
3. **Korisnik unosi poruku** → Pritisne Enter ili klikne Pošalji → Pokreće se `handleSubmit`
4. **handleSubmit** → Validira unos → Prikazuje stanje učitavanja → Poziva API
5. **API odgovara** → Dodaje AI poruku u chat → Ponovno omogućuje sučelje
6. **Spremno za sljedeću poruku** → Korisnik može nastaviti razgovor
Ova arhitektura je skalabilna – lako možete dodati značajke poput uređivanja poruka, učitavanja datoteka ili više niti razgovora bez prepravljanja osnovne strukture.

### Stiliziranje sučelja za chat

Sada ćemo stvoriti moderno i vizualno privlačno sučelje za chat koristeći CSS. Dobro stiliziranje čini vašu aplikaciju profesionalnom i poboljšava cjelokupno korisničko iskustvo. Koristit ćemo moderne CSS značajke poput Flexboxa, CSS Grida i prilagođenih svojstava za responzivan i pristupačan dizajn.

Kreirajte datoteku `styles.css` s ovim sveobuhvatnim stilovima:

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

**Razumijevanje CSS arhitekture:**
- **Koristi** prilagođena svojstva CSS-a (varijable) za dosljednu temu i jednostavno održavanje
- **Primjenjuje** Flexbox raspored za responzivan dizajn i pravilno poravnanje
- **Uključuje** glatke animacije za pojavljivanje poruka bez ometanja
- **Omogućuje** vizualnu razliku između korisničkih poruka, AI odgovora i stanja pogreške
- **Podržava** responzivan dizajn koji funkcionira na stolnim računalima i mobilnim uređajima
- **Razmatra** pristupačnost s preferencijama smanjenog kretanja i odgovarajućim omjerima kontrasta
- **Nudi** podršku za tamni način rada na temelju korisničkih postavki sustava

### Konfiguriranje URL-a vašeg backend-a

Zadnji korak je ažuriranje `BASE_URL` u vašem JavaScriptu kako bi odgovarao vašem backend serveru:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Određivanje URL-a vašeg backend-a:**
- **Lokalni razvoj**: Koristite `http://localhost:5000` ako frontend i backend pokrećete lokalno
- **Codespaces**: Pronađite URL vašeg backend-a na kartici Ports nakon što učinite port 5000 javnim
- **Produkcija**: Zamijenite stvarnom domenom prilikom postavljanja na hosting uslugu

> 💡 **Savjet za testiranje**: Možete direktno testirati vaš backend posjetom osnovnom URL-u u pregledniku. Trebali biste vidjeti poruku dobrodošlice s vašeg FastAPI servera.

## Testiranje i implementacija

Sada kada ste izradili i frontend i backend komponente, testirajmo kako sve funkcionira zajedno i istražimo opcije implementacije kako biste svoj chat asistent podijelili s drugima.

### Radni tijek lokalnog testiranja

Slijedite ove korake za testiranje vaše kompletne aplikacije:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Koraci za testiranje:**

1. **Pokrenite vaš backend server**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Provjerite radi li API**:
   - Otvorite `http://localhost:5000` u vašem pregledniku
   - Trebali biste vidjeti poruku dobrodošlice s vašeg FastAPI servera

3. **Otvorite vaš frontend**:
   - Idite u direktorij vašeg frontenda
   - Otvorite `index.html` u vašem web pregledniku
   - Ili koristite Live Server ekstenziju u VS Code-u za bolje iskustvo razvoja

4. **Testirajte funkcionalnost chata**:
   - Upišite poruku u polje za unos
   - Kliknite "Pošalji" ili pritisnite Enter
   - Provjerite odgovara li AI ispravno
   - Provjerite konzolu preglednika za eventualne JavaScript pogreške

### Rješavanje uobičajenih problema

| Problem | Simptomi | Rješenje |
|---------|----------|----------|
| **CORS greška** | Frontend ne može pristupiti backendu | Provjerite je li FastAPI CORSMiddleware pravilno konfiguriran |
| **Greška API ključa** | 401 Unauthorized odgovori | Provjerite varijablu okruženja `GITHUB_TOKEN` |
| **Odbijena veza** | Mrežne greške u frontendu | Provjerite URL backend-a i je li Flask server pokrenut |
| **Nema AI odgovora** | Prazni ili pogrešni odgovori | Provjerite logove backend-a za probleme s kvotama API-ja ili autentifikacijom |

**Uobičajeni koraci za otklanjanje grešaka:**
- **Provjerite** konzolu alata za razvoj preglednika za JavaScript greške
- **Provjerite** karticu Network za uspješne API zahtjeve i odgovore
- **Pregledajte** izlaz terminala backend-a za Python greške ili probleme s API-jem
- **Potvrdite** da su varijable okruženja pravilno učitane i dostupne

## Izazov za GitHub Copilot agenta 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte chat asistenta dodavanjem povijesti razgovora i trajnosti poruka. Ovaj izazov pomoći će vam da razumijete kako upravljati stanjem u aplikacijama za chat i implementirati pohranu podataka za bolje korisničko iskustvo.

**Zadatak:** Izmijenite aplikaciju za chat kako biste uključili povijest razgovora koja se zadržava između sesija. Dodajte funkcionalnost za spremanje poruka chata u lokalnu pohranu, prikaz povijesti razgovora prilikom učitavanja stranice i uključite gumb "Obriši povijest". Također implementirajte indikatore tipkanja i vremenske oznake poruka kako bi iskustvo chata bilo realističnije.

Saznajte više o [načinu rada agenta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## Zadatak: Izgradite svog osobnog AI asistenta

Sada ćete kreirati vlastitu implementaciju AI asistenta. Umjesto da jednostavno replicirate kod iz tutorijala, ovo je prilika da primijenite koncepte dok gradite nešto što odražava vaše interese i slučajeve upotrebe.

### Zahtjevi projekta

Postavimo vaš projekt s čistom, organiziranom strukturom:

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

### Ključni zadaci implementacije

**Razvoj backend-a:**
- **Preuzmite** naš FastAPI kod i prilagodite ga
- **Kreirajte** jedinstvenu osobnost AI-a – možda korisnog asistenta za kuhanje, kreativnog partnera za pisanje ili pomoćnika za učenje?
- **Dodajte** čvrsto rukovanje greškama kako vaša aplikacija ne bi prestala raditi kad nešto pođe po zlu
- **Napišite** jasnu dokumentaciju za svakoga tko želi razumjeti kako vaš API funkcionira

**Razvoj frontenda:**
- **Izradite** sučelje za chat koje je intuitivno i ugodno
- **Napišite** čist, moderan JavaScript koji biste ponosno pokazali drugim programerima
- **Dizajnirajte** prilagođene stilove koji odražavaju osobnost vašeg AI-a – zabavno i šareno? Čisto i minimalistički? Potpuno je na vama!
- **Osigurajte** da radi odlično na telefonima i računalima

**Zahtjevi za personalizaciju:**
- **Odaberite** jedinstveno ime i osobnost za vašeg AI asistenta – možda nešto što odražava vaše interese ili probleme koje želite riješiti
- **Prilagodite** vizualni dizajn kako bi odgovarao vibru vašeg asistenta
- **Napišite** uvjerljivu poruku dobrodošlice koja potiče ljude da započnu razgovor
- **Testirajte** vašeg asistenta s različitim vrstama pitanja kako biste vidjeli kako odgovara

### Ideje za poboljšanje (opcionalno)

Želite li podići svoj projekt na višu razinu? Evo nekoliko zanimljivih ideja za istraživanje:

| Značajka | Opis | Vještine koje ćete vježbati |
|----------|------|----------------------------|
| **Povijest poruka** | Pamti razgovore čak i nakon osvježavanja stranice | Rad s localStorage, rukovanje JSON-om |
| **Indikatori tipkanja** | Prikazuje "AI tipka..." dok čekate odgovore | CSS animacije, asinhrono programiranje |
| **Vremenske oznake poruka** | Prikazuje kada je svaka poruka poslana | Formatiranje datuma/vremena, UX dizajn |
| **Izvoz chata** | Omogućuje korisnicima preuzimanje njihovog razgovora | Rukovanje datotekama, izvoz podataka |
| **Prebacivanje tema** | Prebacivanje između svijetlog/tamnog načina rada | CSS varijable, korisničke postavke |
| **Glasovni unos** | Dodajte funkcionalnost pretvaranja govora u tekst | Web API-ji, pristupačnost |

### Testiranje i dokumentacija

**Osiguranje kvalitete:**
- **Testirajte** svoju aplikaciju s različitim vrstama unosa i rubnim slučajevima
- **Provjerite** radi li responzivan dizajn na različitim veličinama ekrana
- **Provjerite** pristupačnost s navigacijom putem tipkovnice i čitačima ekrana
- **Validirajte** HTML i CSS za usklađenost sa standardima

**Zahtjevi za dokumentaciju:**
- **Napišite** README.md koji objašnjava vaš projekt i kako ga pokrenuti
- **Uključite** snimke zaslona vašeg sučelja za chat u akciji
- **Dokumentirajte** sve jedinstvene značajke ili prilagodbe koje ste dodali
- **Osigurajte** jasne upute za postavljanje za druge programere

### Smjernice za predaju

**Dostavljivi materijali projekta:**
1. Kompletna mapa projekta sa svim izvornim kodom
2. README.md s opisom projekta i uputama za postavljanje
3. Snimke zaslona koje prikazuju vašeg chat asistenta u akciji
4. Kratka refleksija o tome što ste naučili i s kojim ste se izazovima suočili

**Kriteriji za evaluaciju:**
- **Funkcionalnost**: Radi li chat asistent kako je očekivano?
- **Kvaliteta koda**: Je li kod dobro organiziran, komentiran i održiv?
- **Dizajn**: Je li sučelje vizualno privlačno i jednostavno za korištenje?
- **Kreativnost**: Koliko je jedinstvena i personalizirana vaša implementacija?
- **Dokumentacija**: Jesu li upute za postavljanje jasne i potpune?

> 💡 **Savjet za uspjeh**: Započnite s osnovnim zahtjevima, a zatim dodajte poboljšanja nakon što sve radi. Usredotočite se na stvaranje poliranog osnovnog iskustva prije dodavanja naprednih značajki.

## Rješenje

[Rješenje](./solution/README.md)

## Bonus izazovi

Spremni za podizanje vašeg AI asistenta na višu razinu? Isprobajte ove napredne izazove koji će produbiti vaše razumijevanje integracije AI-a i web razvoja.

### Prilagodba osobnosti

Prava čarolija događa se kada svom AI asistentu date jedinstvenu osobnost. Eksperimentirajte s različitim sistemskim upitima kako biste stvorili specijalizirane asistente:

**Primjer profesionalnog asistenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Primjer pomoćnika za kreativno pisanje:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Primjer tehničkog mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Poboljšanja frontenda

Transformirajte svoje sučelje za chat s ovim vizualnim i funkcionalnim poboljšanjima:

**Napredne značajke CSS-a:**
- **Implementirajte** glatke animacije poruka i prijelaze
- **Dodajte** prilagođene dizajne balončića za chat s oblicima i gradijentima u CSS-u
- **Kreirajte** animaciju indikatora tipkanja za vrijeme dok AI "razmišlja"
- **Dizajnirajte** emoji reakcije ili sustav ocjenjivanja poruka

**Poboljšanja JavaScripta:**
- **Dodajte** prečace na tipkovnici (Ctrl+Enter za slanje, Escape za brisanje unosa)
- **Implementirajte** funkcionalnost pretraživanja i filtriranja poruka
- **Kreirajte** funkciju izvoza razgovora (preuzimanje kao tekst ili JSON)
- **Dodajte** automatsko spremanje u localStorage kako biste spriječili gubitak poruka

### Napredna integracija AI-a

**Višestruke AI osobnosti:**
- **Kreirajte** padajući izbornik za prebacivanje između različitih AI osobnosti
- **Spremite** preferiranu osobnost korisnika u localStorage
- **Implementirajte** prebacivanje konteksta koje održava tok razgovora

**Pametne značajke odgovora:**
- **Dodajte** svijest o kontekstu razgovora (AI pamti prethodne poruke)
- **Implementirajte** pametne prijedloge na temelju teme razgovora
- **Kreirajte** gumbe za brze odgovore na uobičajena pitanja

> 🎯 **Cilj učenja**: Ovi bonus izazovi pomažu vam razumjeti napredne obrasce web razvoja i tehnike integracije AI-a koje se koriste u produkcijskim aplikacijama.

## Sažetak i sljedeći koraci

Čestitamo! Uspješno ste izgradili kompletnog AI asistenta za chat od nule. Ovaj projekt vam je pružio praktično iskustvo s modernim tehnologijama web razvoja i integracijom AI-a – vještinama koje su sve vrijednije u današnjem tehnološkom okruženju.

### Što ste postigli

Tijekom ove lekcije, savladali ste nekoliko ključnih tehnologija i koncepata:

**Razvoj backend-a:**
- **Integrirali** s GitHub Models API-jem za funkcionalnost AI-a
- **Izgradili** RESTful API koristeći Flask s pravilnim rukovanjem greškama
- **Implementirali** sigurnu autentifikaciju koristeći varijable okruženja
- **Konfigurirali** CORS za zahtjeve između frontenda i backenda

**Razvoj frontenda:**
- **Kreirali** responzivno sučelje za chat koristeći semantički HTML
- **Implementirali** moderan JavaScript s async/await i arhitekturom temeljenom na klasama
- **Dizajnirali** privlačno korisničko sučelje s CSS Gridom, Flexboxom i animacijama
- **Dodali** značajke pristupačnosti i principe responzivnog dizajna

**Integracija full-stack-a:**
- **Povezali** frontend i backend putem HTTP API poziva
- **Rukovali** interakcijama korisnika u stvarnom vremenu i asinhronim protokom podataka
- **Implementirali** rukovanje greškama i povratne informacije korisnicima kroz aplikaciju
- **Testirali** kompletan radni tijek aplikacije od unosa korisnika do AI odgovora

### Ključni ishodi učenja

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

Ovaj projekt vas je uveo u osnove izgradnje aplikacija s AI-om, što predstavlja budućnost web razvoja. Sada razumijete kako integrirati AI mogućnosti u tradicionalne web aplikacije, stvarajući privlačna korisnička iskustva koja djeluju inteligentno i responzivno.

### Profesionalne primjene

Vještine koje ste razvili u ovoj lekciji izravno su primjenjive u modernim karijerama u razvoju softvera:

- **Full-stack web razvoj** koristeći moderne okvire i API-je
- **Integracija AI-a** u web aplikacije i mobilne aplikacije
- **Dizajn i razvoj API-ja** za arhitekture mikroservisa
- **Razvoj korisničkog sučelja** s fokusom na pristupačnost i responzivan dizajn
- **DevOps prakse** uključujući konfiguraciju okruženja i implementaciju

### Nastavak vašeg AI razvojnog puta

**Sljedeći koraci u učenju:**
- **Istražite** naprednije AI modele i API-je (GPT-4, Claude, Gemini)
- **Naučite** tehnike inženjeringa upita za bolje AI odgovore
- **Proučite** dizajn razgovora i principe korisničkog iskustva chatbota
- **Istražite** sigurnost AI-a, etiku i odgovornu praksu razvoja AI-a
- **Izgradite** složenije aplikacije s memorijom razgovora i sviješću o kontekstu

**Ideje za napredne projekte:**
- Chat sobe za više korisnika s AI moderacijom
- Chatbotovi za korisničku podršku s AI-om
- Edukativni asistenti za podučavanje s personaliziranim učenjem
- Kreativni suradnici za pisanje s različitim AI osobnostima
- Tehnički asistenti za dokumentaciju za programere

## Početak rada s GitHub Codespaces

Želite li isprobati ovaj projekt u oblaku za razvoj? GitHub Codespaces pruža kompletno razvojno okruženje u vašem pregledniku, savršeno za eksperiment
- **Prosljeđivanje portova** za testiranje vaših aplikacija

**Što Codespaces omogućuje:**
- **Uklanja** probleme s postavljanjem i konfiguracijom lokalnog okruženja
- **Osigurava** dosljedno razvojno okruženje na različitim uređajima
- **Uključuje** unaprijed konfigurirane alate i ekstenzije za web razvoj
- **Nudi** besprijekornu integraciju s GitHubom za kontrolu verzija i suradnju

> 🚀 **Savjet za profesionalce**: Codespaces je savršen za učenje i prototipiranje AI aplikacija jer automatski rješava sve složene postavke okruženja, omogućujući vam da se usredotočite na izradu i učenje, umjesto na rješavanje problema s konfiguracijom.

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.