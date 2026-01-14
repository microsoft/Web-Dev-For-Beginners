<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-07T08:43:53+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "hr"
}
-->
# Izradite chat asistenta s AI-jem

Sjećate li se u Star Treku kada bi posada ležerno razgovarala s računalom broda, postavljala mu složena pitanja i dobivala promišljene odgovore? Ono što je 1960-ih izgledalo kao čista znanstvena fantastika sada je nešto što možete izgraditi koristeći web tehnologije koje već poznajete.

U ovoj lekciji stvorit ćemo AI chat asistenta koristeći HTML, CSS, JavaScript i određenu pozadinsku integraciju. Otkrit ćete kako iste vještine koje ste učili mogu povezati s moćnim AI uslugama koje mogu razumjeti kontekst i generirati smislene odgovore.

Zamislite AI kao pristup ogromnoj biblioteci koja ne samo da može pronaći informacije, već ih i sintetizirati u koherentne odgovore prilagođene vašim specifičnim pitanjima. Umjesto da pretražujete tisuće stranica, dobivate izravne, kontekstualne odgovore.

Integracija se događa kroz poznate web tehnologije koje rade zajedno. HTML stvara sučelje za chat, CSS upravlja vizualnim dizajnom, JavaScript upravlja interakcijama korisnika, a pozadinski API povezuje sve s AI uslugama. To je slično kao kako različiti dijelovi orkestra surađuju za stvaranje simfonije.

U suštini gradimo most između prirodne ljudske komunikacije i obrade stroja. Naučit ćete i tehničku implementaciju integracije AI usluga i dizajnerske obrasce koji interakcije čine intuitivnima.

Do kraja ove lekcije, integracija AI-ja neće izgledati kao tajanstveni proces, već kao još jedan API s kojim možete raditi. Shvatit ćete osnovne obrasce koji pokreću aplikacije poput ChatGPT-a i Claudea, koristeći iste principe web razvoja koje ste učili.

## ⚡ Što možete napraviti u sljedećih 5 minuta

**Brzi početak za zaposlene developere**

```mermaid
flowchart LR
    A[⚡ 5 minuta] --> B[Preuzmi GitHub token]
    B --> C[Testiraj AI igralište]
    C --> D[Kopiraj Python kod]
    D --> E[Pogledaj AI odgovore]
```
- **1. minuta**: Posjetite [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) i kreirajte osobni pristupni token
- **2. minuta**: Testirajte AI interakcije izravno u sučelju playgrounda
- **3. minuta**: Kliknite na karticu "Code" i kopirajte Python isječak
- **4. minuta**: Pokrenite kod lokalno s vašim tokenom: `GITHUB_TOKEN=your_token python test.py`
- **5. minuta**: Pogledajte kako se prvi AI odgovor generira iz vašeg koda

**Brzi test kod**:
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

**Zašto je ovo važno**: U 5 minuta doživjet ćete čaroliju programirane AI interakcije. Ovo predstavlja osnovni građevni blok koji pokreće svaku AI aplikaciju koju koristite.

Evo kako će vaš završeni projekt izgledati:

![Chat aplikacija koja prikazuje razgovor između korisnika i AI asistenta](../../../translated_images/screenshot.0a1ee0d123df681b.hr.png)

## 🗺️ Vaše putovanje učenjem kroz razvoj AI aplikacija

```mermaid
journey
    title Od web razvoja do integracije AI
    section Razumijevanje osnova AI
      Otkrijte koncepte generativne AI: 4: You
      Istražite platformu GitHub Models: 6: You
      Ovladavanje AI parametrima i promptovima: 8: You
    section Integracija backend-a
      Izgradite Python API poslužitelj: 5: You
      Implementirajte pozive AI funkcija: 7: You
      Rukovanje asinhronim operacijama: 8: You
    section Razvoj frontend-a
      Kreirajte moderni chat sučelje: 6: You
      Ovladavanje interakcijama u stvarnom vremenu: 8: You
      Izgradite responzivno korisničko iskustvo: 9: You
    section Profesionalna primjena
      Deployajte kompletan AI sustav: 7: You
      Optimizirajte obrasce izvedbe: 8: You
      Kreirajte aplikaciju spremnu za produkciju: 9: You
```
**Vaš cilj na putovanju**: Do kraja ove lekcije izgradit ćete cjelovitu aplikaciju vođenu AI-jem koristeći iste tehnologije i obrasce koji pokreću moderne AI asistente poput ChatGPT-a, Claudea i Google Barda.

## Razumijevanje AI-ja: Od misterije do majstorstva

Prije nego što zaronimo u kod, razumimo s čim točno radimo. Ako ste prije koristili API-je, poznajete osnovni obrazac: pošaljete zahtjev, primite odgovor.

AI API-ji slijede sličnu strukturu, ali umjesto dohvaćanja prethodno pohranjenih podataka iz baze, generiraju nove odgovore na temelju obrazaca naučenih iz ogromnih količina teksta. Zamislite to kao razliku između kataloga knjižnice i znalca knjižničara koji može sintetizirati informacije iz više izvora.

### Što je zapravo "generativni AI"?

Razmislite o tome kako je Kamen iz Rozete omogućio znanstvenicima da razumiju egipatske hijeroglife pronalaskom obrazaca između poznatih i nepoznatih jezika. AI modeli rade slično – pronalaze obrasce u ogromnim količinama teksta kako bi razumjeli kako jezik funkcionira, a zatim koriste te obrasce za generiranje prikladnih odgovora na nova pitanja.

**Evo jednostavne usporedbe:**
- **Tradicionalna baza podataka**: Kao da tražite svoj rodni list – svaki put dobijete isti točan dokument
- **Pretraživač**: Kao da pitate knjižničara da pronađe knjige o mačkama – pokaže vam što je dostupno
- **Generativni AI**: Kao da pitate znalca prijatelja o mačkama – on vam kaže zanimljive stvari vlastitim riječima, prilagođene onome što želite saznati

```mermaid
graph LR
    A[Vaše Pitanje] --> B[AI Model]
    B --> C[Uzorak prepoznavanje]
    C --> D[Generiranje sadržaja]
    D --> E[Kontekstualni odgovor]
    
    F[Podaci za trening<br/>Knjige, Članci, Web] --> B
```
### Kako AI modeli uče (jednostavna verzija)

AI modeli uče izlaganjem ogromnim skupovima podataka koji sadrže tekstove iz knjiga, članaka i razgovora. Kroz ovaj proces prepoznaju obrasce u:
- Kako su misli strukturirane u pisanom komuniciranju
- Koje se riječi često pojavljuju zajedno
- Kako razgovori obično teku
- Kontekstualne razlike između formalne i neformalne komunikacije

**Slično je kao kad arheolozi dekodiraju drevne jezike**: analiziraju tisuće primjera kako bi razumjeli gramatiku, vokabular i kulturni kontekst, te na kraju mogu tumačiti nove tekstove koristeći te naučene obrasce.

### Zašto GitHub Models?

Koristimo GitHub Models iz prilično praktičnog razloga – omogućuje nam pristup AI-ju na razini poduzeća bez potrebe postavljanja vlastite AI infrastrukture (što, vjerujte mi, sada ne želite raditi!). Zamislite to kao upotrebu vremenskog API-ja umjesto da sami pokušavate predvidjeti vrijeme postavljajući vremenske postaje posvuda.

To je u osnovi "AI kao usluga", a najbolji dio? Besplatno je za početak, tako da možete eksperimentirati bez brige o velikim računima.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Vaš Backend API]
    B --> C[GitHub Models API]
    C --> D[Obrada AI modela]
    D --> C
    C --> B
    B --> A
```
Koristit ćemo GitHub Models za našu pozadinsku integraciju, koja pruža pristup profesionalnim AI mogućnostima kroz sučelje prilagođeno developerima. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) služi kao okruženje za testiranje gdje možete isprobavati različite AI modele i razumjeti njihove mogućnosti prije nego što ih implementirate u kod.

## 🧠 Ekosustav razvoja AI aplikacija

```mermaid
mindmap
  root((Razvoj AI))
    Understanding AI
      Generative Models
        Prepoznavanje uzoraka
        Generiranje sadržaja
        Razumijevanje konteksta
        Sinteza odgovora
      AI Parameters
        Kontrola temperature
        Ograničenja tokena
        Filtriranje Top-p
        Sistemske naredbe
    Backend Architecture
      API Integration
        GitHub modeli
        Autentikacija
        Obrada zahtjeva
        Upravljanje greškama
      Python Infrastructure
        FastAPI okvir
        Asinkrone operacije
        Sigurnost okoline
        Konfiguracija CORS-a
    Frontend Experience
      Chat Interface
        Ažuriranja u stvarnom vremenu
        Povijest poruka
        Povratne informacije korisnika
        Stanja učitavanja
      Modern Web Tech
        ES6 klase
        Async/Await
        Manipulacija DOM-om
        Obrada događaja
    Professional Patterns
      Security Best Practices
        Upravljanje tokenima
        Validacija unosa
        Prevencija XSS-a
        Granice grešaka
      Production Readiness
        Optimizacija performansi
        Responsive dizajn
        Pristupačnost
        Strategije testiranja
```
**Temeljno načelo**: razvoj AI aplikacija kombinira tradicionalne vještine web razvoja s integracijom AI usluga, stvarajući inteligentne aplikacije koje korisnicima djeluju prirodno i responzivno.

![GitHub Models AI Playground sučelje s odabirom modela i testnim područjem](../../../translated_images/playground.d2b927122224ff8f.hr.png)

**Evo što čini playground tako korisnim:**
- **Isprobajte** različite AI modele poput GPT-4o-mini, Claudea i drugih (svi besplatni!)
- **Testirajte** svoje ideje i upite prije nego što napišete bilo kakav kod
- **Dobijte** gotove isječke koda u vašem omiljenom programskom jeziku
- **Podesite** postavke poput razine kreativnosti i duljine odgovora da vidite kako utječu na izlaz

Kad malo eksperimentirate, jednostavno kliknite karticu "Code" i odaberite svoj programski jezik da dobijete kod koji vam treba.

![Izbor u playgroundu koji prikazuje opcije generiranja koda za različite programske jezike](../../../translated_images/playground-choice.1d23ba7d407f4758.hr.png)

## Postavljanje Python pozadinske integracije

Sada implementirajmo AI integraciju koristeći Python. Python je izvrstan za AI aplikacije zbog svoje jednostavne sintakse i moćnih biblioteka. Počet ćemo s kodom iz GitHub Models playgrounda, a zatim ga preuredimo u funkciju spremnu za produkciju i ponovno korištenje.

### Razumijevanje osnovne implementacije

Kada preuzmete Python kod iz playgrounda, dobit ćete nešto poput ovog. Ne brinite ako na prvi pogled izgleda obimno – proći ćemo kroz njega dio po dio:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Za autentifikaciju s modelom trebate generirati osobni pristupni token (PAT) u postavkama vašeg GitHub računa.
# Kreirajte svoj PAT token slijedeći upute ovdje: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Evo što se događa u ovom kodu:**
- **Uvozimo** potrebne alate: `os` za čitanje varijabli okruženja i `OpenAI` za komunikaciju s AI-jem
- **Postavljamo** OpenAI klijenta da cilja GitHubove AI servere umjesto izravno OpenAI
- **Autentificiramo se** pomoću posebnog GitHub tokena (više o tome za trenutak!)
- **Strukturiramo** naš razgovor s različitim "ulogama" – zamislite to kao postavljanje scene za predstavu
- **Šaljemo** zahtjev AI-ju s određenim parametrima za podešavanje
- **Izdvajamo** stvarni tekst odgovora iz podataka koji pristignu

### Razumijevanje uloga poruka: okvir AI razgovora

AI razgovori koriste specifičnu strukturu s različitim "ulogama" koje služe različitim svrhama:

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

**Zamislite to kao režiju predstave:**
- **Uloga sustava**: Kao upute za glumca – govori AI-ju kako se ponašati, kakvu ličnost imati i kako odgovarati
- **Uloga korisnika**: Stvarno pitanje ili poruka osobe koja koristi vašu aplikaciju
- **Uloga asistenta**: Odgovor AI-ja (ne šaljete ga, ali se pojavljuje u povijesti razgovora)

**Analogiija iz stvarnog svijeta**: Zamislite da nekoga predstavljate prijatelju na zabavi:
- **Poruka sustava**: "Ovo je moja prijateljica Sara, doktorica koja izvrsno objašnjava medicinske pojmove jednostavnim riječima"
- **Poruka korisnika**: "Možeš li mi objasniti kako djeluju cjepiva?"
- **Odgovor asistenta**: Sara odgovara kao prijateljski liječnik, ne kao pravnik ili kuhar

### Razumijevanje AI parametara: fino podešavanje ponašanja odgovora

Numerički parametri u AI API pozivima kontroliraju kako model generira odgovore. Ove postavke omogućuju vam prilagođavanje ponašanja AI-ja za različite slučajeve upotrebe:

#### Temperature (0.0 do 2.0): kotačić kreativnosti

**Što radi**: Kontrolira koliko će kreativni ili predvidljivi biti AI-jevi odgovori.

**Zamislite to kao razinu improvizacije jazz glazbenika:**
- **Temperature = 0.1**: Svira istu melodiju svaki put (vrlo predvidljivo)
- **Temperature = 0.7**: Dodaje ukusne varijacije, ali prepoznatljivo (uravnotežena kreativnost)
- **Temperature = 1.5**: Potpuno eksperimentalni jazz s neočekivanim obratima (vrlo nepredvidljivo)

```python
# Vrlo predvidljivi odgovori (dobri za faktografska pitanja)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Gotovo uvijek će reći "4"
)

# Kreativni odgovori (dobri za razmjenu ideja)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Generirat će jedinstvene, neočekivane priče
)
```

#### Max Tokens (1 do 4096+): kontrola duljine odgovora

**Što radi**: Postavlja granicu koliko odgovor AI-ja može biti dugačak.

**Zamislite tokene kao otprilike riječi** (otprilike 1 token = 0.75 riječi na engleskom):
- **max_tokens=50**: Kratko i jasno (kao SMS poruka)
- **max_tokens=500**: Lijepi odlomak ili dva
- **max_tokens=2000**: Detaljno objašnjenje s primjerima

```python
# Kratki, sažeti odgovori
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Nalaže kratko objašnjenje
)

# Detaljni, opširni odgovori
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Omogućuje detaljna objašnjenja s primjerima
)
```

#### Top_p (0.0 do 1.0): parametar fokusa

**Što radi**: Kontrolira koliko se AI fokusira na najvjerojatnije riječi.

**Zamislite da AI ima ogromni vokabular, rangiran po vjerojatnosti svake riječi:**
- **top_p=0.1**: Razmatra samo najvjerojatnijih 10% riječi (vrlo fokusirano)
- **top_p=0.9**: Razmatra 90% mogućih riječi (više kreativnosti)
- **top_p=1.0**: Razmatra sve (maksimalna raznolikost)

**Na primjer**: Ako pitate "Nebo je obično..."
- **Nizak top_p**: Gotovo sigurno kaže "plavo"
- **Visok top_p**: Može reći "plavo", "oblačno", "prostrano", "promjenjivo", "lijepo" itd.

### Sve to zajedno: kombinacije parametara za različite slučajeve upotrebe

```python
# Za činjenice, dosljedne odgovore (kao bot za dokumentaciju)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Za pomoć u kreativnom pisanju
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Za razgovorne, korisne odgovore (uravnoteženo)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matrica Optimizacije AI Parametara
    x-axis Niska Kreativnost --> Visoka Kreativnost
    y-axis Kratak Odgovor --> Dugi Odgovor
    
    quadrant-1 Kreativan Sadržaj
    quadrant-2 Detaljna Analiza
    quadrant-3 Brze Činjenice
    quadrant-4 Konverzacijski AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Zašto su ovi parametri važni**: Različite aplikacije trebaju različite vrste odgovora. Bot za korisničku podršku trebao bi biti dosljedan i činjeničan (niska temperatura), dok bi asistent za kreativno pisanje trebao biti maštovit i raznolik (visoka temperatura). Razumijevanje ovih parametara daje vam kontrolu nad osobnošću i stilom odgovora AI-ja.
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
- **Prima** dva parametra: korisnički upit i opcionalnu poruku sustava
- **Pruža** zadanu poruku sustava za opće ponašanje asistenta
- **Koristi** odgovarajuće tipove podataka u Pythonu za bolju dokumentaciju koda
- **Uključuje** detaljnu docstring koji objašnjava svrhu funkcije i parametre
- **Vraća** samo sadržaj odgovora, što olakšava korištenje u našem web API-ju
- **Održava** iste parametre modela za konzistentno ponašanje AI-ja

### Čarolija sistemskih poruka: programiranje osobnosti AI-ja

Ako parametri kontroliraju kako AI razmišlja, sistemske poruke kontroliraju tko AI misli da jest. Ovo je iskreno jedan od najslađih dijelova rada s AI-jem – u suštini dajete AI-ju kompletnu osobnost, razinu stručnosti i stil komunikacije.

**Sistemske poruke zamislite kao odabir različitih glumaca za različite uloge**: Umjesto jednog generičkog asistenta, možete stvoriti specijalizirane stručnjake za različite situacije. Trebate strpljivog učitelja? Kreativnog partnera za brainstorming? Poslovnog savjetnika bez okolišanja? Samo promijenite sistemsku poruku!

#### Zašto su sustavne poruke moćne

Evo zanimljiv dio: AI modeli su trenirani na bezbroj razgovora u kojima ljudi usvajaju različite uloge i razine stručnosti. Kada AI-ju date specifičnu ulogu, to je kao da prebacujete prekidač koji aktivira sve te naučene obrasce.

**To je kao metoda glume za AI**: Recite glumcu "ti si mudar stari profesor" i gledajte kako automatski prilagođava držanje, vokabular i manire. AI radi nešto vrlo slično s jezičnim obrascima.

#### Izrada učinkovitih sistemskih poruka: umjetnost i znanost

**Anatomija odlične sistemske poruke:**
1. **Uloga/identitet**: Tko AI jest?
2. **Stručnost**: Što zna?
3. **Stil komunikacije**: Kako govori?
4. **Specifične upute**: Na što se treba usredotočiti?

```python
# ❌ Nejasan sustavni upit
"You are helpful."

# ✅ Detaljan, učinkovit sustavni upit
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Primjeri sistemskih poruka s kontekstom

Pogledajmo kako različite sistemske poruke stvaraju potpuno različite AI osobnosti:

```python
# Primjer 1: Strpljivi učitelj
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Primjer 2: Kreativni suradnik
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Primjer 3: Strateški poslovni savjetnik
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Pogledajte sistemske poruke u akciji

Testirajmo isto pitanje s različitim sistemskim porukama da vidimo dramatične razlike:

**Pitanje**: "Kako upravljam korisničkom autentifikacijom u svojoj web aplikaciji?"

```python
# Sa uputama nastavnika:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Tipičan odgovor: "Odlično pitanje! Razložimo autentikaciju na jednostavne korake.
# Zamislite to kao zaštitara noćnog kluba koji provjerava osobne iskaznice..."

# S poslovnim uputama:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Tipičan odgovor: "Iz strateške perspektive, autentikacija je ključna za povjerenje korisnika
# i usklađenost s propisima. Dopustite mi da izložim okvir uzimajući u obzir sigurnost,
# korisničko iskustvo i skalabilnost..."
```

#### Napredne tehnike sistemskih poruka

**1. Postavljanje konteksta**: Dajte AI-ju pozadinske informacije
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formatiranje izlaza**: Recite AI-u kako strukturirati odgovore
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

**3. Postavljanje ograničenja**: Definirajte što AI ne smije raditi
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Zašto je ovo važno za vašog chat asistenta

Razumijevanje sistemskih uputa daje vam nevjerojatnu moć za stvaranje specijaliziranih AI asistenata:
- **Bot za korisničku podršku**: Pomoćan, strpljiv, svjestan pravila
- **Tutor za učenje**: Ohrabrujući, korak-po-korak, provjerava razumijevanje
- **Kreativni partner**: Maštovit, gradi ideje, pita "što ako?"
- **Tehnički stručnjak**: Precizan, detaljan, svjestan sigurnosti

**Ključni uvid**: Ne samo da pozivate AI API – vi stvarate prilagođenu AI osobnost koja služi vašoj specifičnoj upotrebi. To je ono što moderne AI aplikacije čini prilagođenima i korisnima, a ne generičkima.

### 🎯 Pedagoški pregled: Programiranje AI osobnosti

**Pauzirajte i razmislite**: Upravo ste naučili programirati AI osobnosti putem sistemskih uputa. Ovo je temeljna vještina u razvoju modernih AI aplikacija.

**Brza samoprocjena**:
- Možete li objasniti kako se sistemske upute razlikuju od običnih korisničkih poruka?
- Koja je razlika između parametara temperature i top_p?
- Kako biste kreirali sistemsku uputu za specifičnu upotrebu (npr. tutor za kodiranje)?

**Povezanost sa stvarnim svijetom**: Tehnike sistemskih uputa koje ste naučili koriste se u svakoj velikoj AI aplikaciji - od GitHub Copilot pomoći pri kodiranju do ChatGPT-ovog sučelja za razgovor. Savladavate iste obrasce koje koriste AI timovi vodećih tehnoloških tvrtki.

**Izazovno pitanje**: Kako biste mogli dizajnirati različite AI osobnosti za različite tipove korisnika (početnik vs stručnjak)? Razmotrite kako isti temeljni AI model može služiti različitim publikama putem inženjeringa uputa.

## Izgradnja Web API-ja s FastAPI-jem: Vaš visokoučinkoviti komunikacijski čvorište za AI

Sada ćemo izgraditi backend koji povezuje vaš frontend s AI uslugama. Koristit ćemo FastAPI, moderan Python okvir koji je izvrstan za izradu API-ja za AI aplikacije.

FastAPI nudi nekoliko prednosti za ovaj tip projekta: ugrađena podrška za asinhrono upravljanje istovremenim zahtjevima, automatska generacija dokumentacije API-ja i izvrsnu izvedbu. Vaš FastAPI poslužitelj djeluje kao posrednik koji prima zahtjeve s frontenda, komunicira s AI uslugama i vraća formatirane odgovore.

### Zašto FastAPI za AI aplikacije?

Možda se pitate: "Zar ne mogu AI pozivati direktno iz JavaScript-a frontenda?" ili "Zašto FastAPI, a ne Flask ili Django?" Odlična pitanja!

**Razlog zašto je FastAPI savršen za ono što gradimo:**
- **Asinhrono po defaultu**: Može istovremeno izvoditi više AI zahtjeva bez zastoja
- **Automatska dokumentacija**: Posjetite `/docs` i dobit ćete lijepu, interaktivnu dokumentaciju API-ja besplatno
- **Ugrađena validacija**: Pronalazi greške prije nego što stvore probleme
- **Brz kao munja**: Jedan od najbržih Python okvira
- **Moderni Python**: Koristi najnovije i najbolje značajke Pythona

**I evo zašto uopće treba backend:**

**Sigurnost**: Vaš AI API ključ je poput lozinke – ako ga stavite u JavaScript frontenda, svatko tko pregleda izvorni kod vaše web stranice mogao bi ga ukrasti i koristiti vaše AI kredite. Backend čuva osjetljive podatke sigurnima.

**Ograničenje brzine i kontrola**: Backend vam omogućuje kontrolu koliko često korisnici mogu slati zahtjeve, implementaciju autentikacije korisnika i evidentiranje za praćenje korištenja.

**Obrada podataka**: Možda želite spremati razgovore, filtrirati neprimjereni sadržaj ili kombinirati više AI servisa. Logika za to živi u backendu.

**Arhitektura podsjeća na klijent-poslužitelj model:**
- **Frontend**: Sloj korisničkog sučelja za interakciju
- **Backend API**: Sloj za obradu i usmjeravanje zahtjeva
- **AI usluga**: Vanjsko računanje i generiranje odgovora
- **Varijable okoline**: Sigurna konfiguracija i pohrana vjerodajnica

### Razumijevanje tijeka zahtjeva i odgovora

Pratimo što se događa kada korisnik pošalje poruku:

```mermaid
sequenceDiagram
    participant User as 👤 Korisnik
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI poslužitelj
    participant AI as 🤖 AI usluga
    
    User->>Frontend: Tipka "Pozdrav AI!"
    Frontend->>API: POST /hello {"message": "Pozdrav AI!"}
    Note over API: Provjerava zahtjev<br/>Dodaje sustavni prompt
    API->>AI: Šalje formatirani zahtjev
    AI->>API: Vraća AI odgovor
    Note over API: Procesira odgovor<br/>Evidentira razgovor
    API->>Frontend: {"response": "Bok! Kako vam mogu pomoći?"}
    Frontend->>User: Prikazuje AI poruku
```
**Razumijevanje svakog koraka:**
1. **Interakcija korisnika**: Osoba upisuje poruku u sučelje za chat
2. **Obrada na frontendu**: JavaScript hvata unos i formatira ga kao JSON
3. **Validacija API-ja**: FastAPI automatski provjerava zahtjev koristeći Pydantic modele
4. **Integracija AI-ja**: Backend dodaje kontekst (sistemsku uputu) i poziva AI uslugu
5. **Rukovanje odgovorom**: API prima AI odgovor i može ga modificirati po potrebi
6. **Prikaz na frontendu**: JavaScript prikazuje odgovor u sučelju chata

### Razumijevanje arhitekture API-ja

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Pozdrav AI!"}
    FastAPI->>AI Function: call_llm(poruka, system_prompt)
    AI Function->>GitHub Models: API zahtjev
    GitHub Models->>AI Function: AI odgovor
    AI Function->>FastAPI: tekst odgovora
    FastAPI->>Frontend: {"response": "Bok! Kako mogu pomoći?"}
```
```mermaid
flowchart TD
    A[Unos Korisnika] --> B[Prednja Validacija]
    B --> C[HTTP POST Zahtjev]
    C --> D[FastAPI Usmjerivač]
    D --> E[Pydantic Validacija]
    E --> F[Poziv AI Funkcije]
    F --> G[GitHub Models API]
    G --> H[Obrada Odgovora]
    H --> I[JSON Odgovor]
    I --> J[Ažuriranje Prednjeg Dela]
    
    subgraph "Sloj Sigurnosti"
        K[CORS Middleware]
        L[Varijable Okoline]
        M[Rukovanje Greškama]
    end
    
    D --> K
    F --> L
    H --> M
```
### Kreiranje FastAPI aplikacije

Izgradimo naš API korak po korak. Kreirajte datoteku pod nazivom `api.py` sa sljedećim FastAPI kodom:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfiguriraj zapisivanje dnevnika
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Kreiraj FastAPI aplikaciju
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfiguriraj CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Prikladno konfiguriraj za produkciju
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic modeli za validaciju zahtjeva/odgovora
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
        # Izvuci i validiraj poruku
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Pozovi AI servis (napomena: call_llm bi trebao biti asinhron za bolje performanse)
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

**Razumijevanje FastAPI implementacije:**
- **Uvozi** FastAPI za funkcionalnost modernog web okvira i Pydantic za validaciju podataka
- **Kreira** automatsku dokumentaciju API-ja (dostupnu na `/docs` kada server radi)
- **Omogućuje** CORS middleware za dopuštanje zahtjeva frontenda s različitih izvora
- **Definira** Pydantic modele za automatsku validaciju zahtjeva/odgovora i dokumentaciju
- **Koristi** asinhrone krajnje točke radi bolje izvedbe kod istovremenih zahtjeva
- **Implementira** ispravne HTTP statuse i obradu grešaka s HTTPException
- **Uključuje** strukturirano logiranje za praćenje i debugiranje
- **Nudi** endpoint za provjeru zdravlja servisa

**Ključne prednosti FastAPI-ja u odnosu na tradicionalne okvire:**
- **Automatska validacija**: Pydantic modeli osiguravaju integritet podataka prije obrade
- **Interaktivna dokumentacija**: Posjetite `/docs` za automatski generiranu, testabilnu API dokumentaciju
- **Tipna sigurnost**: Pythonove tipne naznake sprječavaju pogreške u izvođenju i poboljšavaju kvalitetu koda
- **Podrška za async**: Istovremena obrada više AI zahtjeva bez blokiranja
- **Izvedba**: Znatno brža obrada zahtjeva za aplikacije u stvarnom vremenu

### Razumijevanje CORS-a: Sigurnosnog čuvara weba

CORS (Cross-Origin Resource Sharing) je poput sigurnosnog čuvara na zgradi koji provjerava smije li posjetitelj ući. Razumijemo zašto je ovo važno i kako utječe na vašu aplikaciju.

#### Što je CORS i zašto postoji?

**Problem**: Zamislite da bilo koja web stranica može slati zahtjeve vašoj banci u vaše ime bez vaše dozvole. To bi bila sigurnosna noćna mora! Browseri to sprječavaju po defaultu kroz "Same-Origin Policy".

**Pravilo iste domene (Same-Origin Policy)**: Browseri dopuštaju web stranicama slati zahtjeve samo na istu domenu, port i protokol s kojeg su učitani.

**Analogija iz stvarnog života**: Kao sigurnost u stambenoj zgradi – samo stanari (ista domena) mogu pristupiti zgradi po defaultu. Ako želite pustiti prijatelja (druga domena), morate sigurnosti eksplicitno reći da je u redu.

#### CORS u vašem razvojnom okruženju

Tijekom razvoja, frontend i backend rade na različitim portovima:
- Frontend: `http://localhost:3000` (ili file:// ako otvarate HTML izravno)
- Backend: `http://localhost:5000`

Oni se smatraju "različitim domenama" iako su na istom računalu!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Ovo govori preglednicima: "U redu je da drugi izvori šalju zahtjeve ovom API-ju"
```

**Što CORS konfiguracija radi u praksi:**
- **Dodaje** posebne HTTP zaglavlja u odgovore API-ja kojima govori browserima "ovaj zahtjev s različite domene je dopušten"
- **Rukuje** "preflight" zahtjevima (browseri ponekad provjeravaju dopuštenja prije slanja pravog zahtjeva)
- **Sprječava** strašnu grešku "blocked by CORS policy" u konzoli browsera

#### Sigurnost CORS-a: razvoj vs produkcija

```python
# 🚨 Razvoj: Dozvoljava SVE izvore (zgodno, ali nesigurno)
CORS(app)

# ✅ Produkcija: Dozvoljava samo vašu specifičnu domena frontenda
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Napredno: Različiti izvori za različita okruženja
if app.debug:  # Režim razvoja
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Režim produkcije
    CORS(app, origins=["https://yourdomain.com"])
```

**Zašto je važno**: U razvoju, `CORS(app)` je kao da ostavite ulazna vrata otključana – praktično, ali nesigurno. U produkciji želite točno specificirati koje web stranice smiju komunicirati s vašim API-jem.

#### Česti CORS scenariji i rješenja

| Scenarij | Problem | Rješenje |
|----------|---------|----------|
| **Lokalni razvoj** | Frontend ne može dohvatiti backend | Dodajte CORSMiddleware u FastAPI |
| **GitHub Pages + Heroku** | Deployani frontend ne može dohvatiti API | Dodajte URL GitHub Pages kao CORS origin |
| **Prilagođena domena** | CORS greške u produkciji | Ažurirajte CORS origin na vašu domenu |
| **Mobilna aplikacija** | Aplikacija ne može dohvatiti web API | Dodajte domenu aplikacije ili oprezno koristite `*` |

**Savjet**: CORS zaglavlja možete provjeriti u Developer Tools u browseru pod karticom Network. Potražite zaglavlja poput `Access-Control-Allow-Origin` u odgovoru.

### Rukovanje greškama i validacija

Primijetite kako naš API uključuje ispravno rukovanje greškama:

```python
# Provjerite jesmo li primili poruku
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Ključna načela validacije:**
- **Provjerava** obavezna polja prije obrade zahtjeva
- **Vraća** smislen komunikat o grešci u JSON formatu
- **Koristi** odgovarajuće HTTP statuse (400 za neispravne zahtjeve)
- **Daje** jasne povratne informacije za razvojne programere frontenda

## Postavljanje i pokretanje vašeg backend-a

Sad kad imamo AI integraciju i FastAPI poslužitelj spreman, idemo pokrenuti sve. Proces postavljanja uključuje instalaciju Python ovisnosti, konfiguraciju varijabli okoliša i pokretanje vašeg razvojog servera.

### Postavljanje Python okruženja

Postavimo vaš Python razvojni okoliš. Virtualna okruženja su poput odvojenih modula Projekta Manhattan – svaki projekt dobiva vlastiti izolirani prostor sa specifičnim alatima i ovisnostima, sprečavajući sukobe između različitih projekata.

```bash
# Navigirajte do vašeg backend direktorija
cd backend

# Kreirajte virtualno okruženje (kao da stvarate čistu prostoriju za vaš projekt)
python -m venv venv

# Aktivirajte ga (Linux/Mac)
source ./venv/bin/activate

# Na Windowsu, koristite:
# venv\Scripts\activate

# Instalirajte dobre stvari
pip install openai fastapi uvicorn python-dotenv
```

**Što smo upravo napravili:**
- **Kreirali** vlastiti mali Python "mjehurić" gdje možemo instalirati pakete bez utjecaja na ostatak sustava
- **Aktivirali** ga kako bi terminal znao da koristi ovo okruženje
- **Instalirali** bitne ovisnosti: OpenAI za AI magiju, FastAPI za naš web API, Uvicorn za pokretanje aplikacije i python-dotenv za sigurnu upravljanje tajnama

**Objašnjenje ključnih ovisnosti:**
- **FastAPI**: Moderan, brz web okvir s automatskom dokumentacijom API-ja
- **Uvicorn**: Izrazito brzi ASGI server koji pokreće FastAPI aplikacije
- **OpenAI**: Službena biblioteka za GitHub modele i OpenAI API integraciju
- **python-dotenv**: Sigurno učitavanje varijabli okoline iz .env datoteka

### Konfiguracija okoline: Čuvanje tajni

Prije nego pokrenemo naš API, moramo razgovarati o jednom od najvažnijih lekcija u web razvoju: kako zaista sigurno čuvati svoje tajne. Varijable okoline su poput sigurnog sefa kojem pristupa samo vaša aplikacija.

#### Što su varijable okoline?

**Zamislite varijable okoline kao sef za dragocjenosti** – u njih stavljate svoje vrijedne podatke i samo vi (i vaša aplikacija) imate ključ za pristup. Umjesto da osjetljive informacije upisujete direktno u kod (gdje ih svatko može vidjeti), spremate ih sigurno u okoliš.

**Evo razlike:**
- **Pogrešan način**: Pisanje lozinke na papirić i lijepljenje na monitor
- **Ispravan način**: Čuvanje lozinke u sigurnom menadžeru lozinki kojem samo vi imate pristup

#### Zašto su varijable okoline važne

```python
# 🚨 NIKADA NE RADITE OVAKO - API ključ vidljiv svima
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Svatko to može ukrasti!
    base_url="https://models.github.ai/inference"
)

# ✅ RADITE OVAKO - API ključ sigurno pohranjen
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Samo vaša aplikacija može pristupiti ovome
    base_url="https://models.github.ai/inference"
)
```

**Što se dogodi ako hardkodirate tajne:**
1. **Izloženost u verzioniranju**: Svako s pristupom Git repozitoriju vidi vaš API ključ
2. **Javni repozitoriji**: Ako pushate na GitHub, ključ je vidljiv cijelom internetu
3. **Dijeljenje u timu**: Drugi developeri dobivaju pristup vašem osobnom API ključu
4. **Sigurnosni propusti**: Ako netko ukrade vaš API ključ, može trošiti vaše AI kredite

#### Postavljanje .env datoteke

Kreirajte `.env` datoteku u vašem backend direktoriju. Ova datoteka lokalno sprema vaše tajne:

```bash
# .env datoteka - Ovo NIKADA ne bi trebalo commitati u Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Razumijevanje .env datoteke:**
- **Jedna tajna po liniji** u formatu `KEY=value`
- **Bez razmaka** oko znaka jednakosti
- **Bez navodnika** oko vrijednosti (obično)
- **Komentari** počinju s `#`

#### Kreiranje GitHub osobnog pristupnog tokena

Vaš GitHub token je poput posebne lozinke koja vašoj aplikaciji daje dopuštenje za korištenje GitHub AI usluga:

**Korak-po-korak kreiranje tokena:**
1. **Idite na GitHub postavke** → Developer settings → Personal access tokens → Tokens (classic)
2. **Kliknite "Generate new token (classic)"**
3. **Postavite valjanost** (30 dana za testiranje, duže za produkciju)
4. **Odaberite opsege (scopes)**: Označite "repo" i druge potrebne dozvole
5. **Generirajte token** i odmah ga kopirajte (ne možete ga opet vidjeti!)
6. **Zalijepite u vašu .env datoteku**

```bash
# Primjer kako vaš token izgleda (ovo je lažno!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Učitavanje varijabli okoline u Pythonu

```python
import os
from dotenv import load_dotenv

# Učitaj varijable okoline iz .env datoteke
load_dotenv()

# Sada im možete pristupiti sigurno
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
- **Provjerava** postoji li potreban token (dobra obrada grešaka!)
- **Baca** jasnu grešku ako token nedostaje
- **Koristi** token sigurno bez izlaganja u kodu

#### Sigurnost Gita: .gitignore datoteka

Vaša `.gitignore` datoteka govori Gitu koje datoteke nikada ne treba pratiti ili uploadati:

```bash
# .gitignore - Dodajte ove retke
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Zašto je ovo ključno**: Kada dodate `.env` u `.gitignore`, Git ignorira vašu datoteku okoline, sprječavajući slučajno otkrivanje tajni na GitHubu.

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

**Zašto je ovo važno**: Ne želite da vaši razvojni eksperimenti troše kvotu za AI u produkciji, a želite i različite sigurnosne razine u različitim okruženjima.

### Pokretanje razvojnog servera: Oživljavanje vašeg FastAPI-ja
Sada dolazi uzbudljivi trenutak – pokretanje vašeg FastAPI razvojnog poslužitelja i gledanje kako vaša AI integracija oživljava! FastAPI koristi Uvicorn, munjevito brz ASGI poslužitelj koji je posebno dizajniran za asinhrone Python aplikacije.

#### Razumijevanje procesa pokretanja FastAPI poslužitelja

```bash
# Metoda 1: Izravno izvođenje u Pythonu (uključuje automatsko ponovno učitavanje)
python api.py

# Metoda 2: Korištenje Uvicorna izravno (više kontrole)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kad izvršite ovu naredbu, evo što se događa iza scene:

**1. Python učitava vašu FastAPI aplikaciju**:
- Uvozi sve potrebne biblioteke (FastAPI, Pydantic, OpenAI, itd.)
- Učitava varijable okoliša iz vaše `.env` datoteke
- Kreira FastAPI instancu aplikacije s automatskom dokumentacijom

**2. Uvicorn konfigurira ASGI poslužitelj**:
- Veže se na port 5000 s mogućnostima asinhrone obrade zahtjeva
- Postavlja usmjeravanje zahtjeva s automatskom validacijom
- Omogućuje hot reload za razvoj (restarta pri promjenama datoteka)
- Generira interaktivnu API dokumentaciju

**3. Poslužitelj počinje slušati**:
- U vašem terminalu piše: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Poslužitelj može istovremeno obraditi više AI zahtjeva
- Vaš API je spreman s automatskom dokumentacijom na `http://localhost:5000/docs`

#### Što biste trebali vidjeti kada sve radi ispravno

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Razumijevanje FastAPI ispisa:**
- **Will watch for changes**: Automatsko ponovno učitavanje omogućeno za razvoj
- **Uvicorn running**: Visoko-performansni ASGI poslužitelj je aktivan
- **Started reloader process**: Nadgledanje datoteka za automatske restarte
- **Application startup complete**: FastAPI aplikacija uspješno inicijalizirana
- **Interactive docs available**: Posjetite `/docs` za automatsku API dokumentaciju

#### Testiranje vašeg FastAPI-ja: Višestruki moćni pristupi

FastAPI nudi nekoliko praktičnih načina za testiranje vašeg API-ja, uključujući automatsku interaktivnu dokumentaciju:

**Metoda 1: Interaktivna API dokumentacija (preporučeno)**
1. Otvorite preglednik i idite na `http://localhost:5000/docs`
2. Vidjet ćete Swagger UI sa svim dokumentiranim krajnjim točkama
3. Kliknite na `/hello` → "Try it out" → Unesite testnu poruku → "Execute"
4. Odgovor ćete vidjeti izravno u pregledniku s pravilnim formatiranjem

**Metoda 2: Osnovni test u pregledniku**
1. Idite na `http://localhost:5000` za glavnu početnu točku
2. Idite na `http://localhost:5000/health` za provjeru stanja poslužitelja
3. Time potvrđujete da vaš FastAPI poslužitelj radi ispravno

**Metoda 2: Test iz komandne linije (napredno)**
```bash
# Testiraj s curlom (ako je dostupan)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Očekivani odgovor:
# {"response": "Bok! Ja sam vaš AI asistent. Kako vam mogu danas pomoći?"}
```

**Metoda 3: Python test skripta**
```python
# test_api.py - Kreirajte ovu datoteku za testiranje vašeg API-ja
import requests
import json

# Testirajte API endpoint
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Rješavanje čestih problema pri pokretanju

| Poruka o pogrešci | Što znači | Kako popraviti |
|-------------------|----------|----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI nije instaliran | Pokrenite `pip install fastapi uvicorn` u vašem virtualnom okruženju |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI poslužitelj nije instaliran | Pokrenite `pip install uvicorn` u vašem virtualnom okruženju |
| `KeyError: 'GITHUB_TOKEN'` | Varijabla okoliša nije pronađena | Provjerite vašu `.env` datoteku i poziv `load_dotenv()` |
| `Address already in use` | Port 5000 je zauzet | Prekinite druge procese koji koriste port 5000 ili promijenite port |
| `ValidationError` | Podaci zahtjeva ne odgovaraju Pydantic modelu | Provjerite format zahtjeva jesu li kompatibilni sa očekivanom šemom |
| `HTTPException 422` | Entitet nije moguće obraditi | Validacija zahtjeva nije uspjela, provjerite `/docs` za ispravan format |
| `OpenAI API error` | Autentikacija AI usluge nije uspjela | Provjerite ispravnost vašeg GitHub tokena i odgovarajuće ovlasti |

#### Najbolje razvojne prakse

**Hot Reloading**: FastAPI s Uvicornom omogućuje automatsko ponovno učitavanje kad spremite promjene u Python datotekama. To znači da odmah možete mijenjati kod i testirati bez ručnog restarta.

```python
# Izričito omogućite brzo ponovno učitavanje
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True omogućuje brzo ponovno učitavanje
```

**Logiranje za razvoj**: Dodajte logiranje kako biste razumjeli što se događa:

```python
import logging

# Postavi dnevnik zapisa
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

**Zašto logiranje pomaže**: Tijekom razvoja točno vidite koje zahtjeve dobivate, kakav je odgovor AI-ja i gdje se javljaju pogreške. To znatno ubrzava otklanjanje problema.

### Konfiguracija za GitHub Codespaces: Jednostavan razvoj u oblaku

GitHub Codespaces kao da imate moćno razvojno računalo u oblaku kojem možete pristupiti iz bilo kojeg preglednika. Ako radite u Codespaces, postoje neki dodatni koraci da backend učinite dostupnim vašem frontend-u.

#### Razumijevanje umrežavanja u Codespaces

U lokalnom razvojnom okruženju, sve teče na istom računalu:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (ili file://)

U Codespaces, vaše razvojno okruženje radi na GitHub poslužiteljima pa "localhost" ima drugačije značenje. GitHub automatski generira javne URL-ove za vaše servise, no treba ih pravilno konfigurirati.

#### Korak-po-korak konfiguracija Codespaces

**1. Pokrenite vaš backend poslužitelj**:
```bash
cd backend
python api.py
```

Vidjet ćete poznatu poruku za pokretanje FastAPI/Uvicorn, ali primijetite da radi unutar Codespace okruženja.

**2. Konfigurirajte vidljivost porta**:
- Pronađite karticu "Ports" na donjoj ploči VS Code-a
- Pronađite port 5000 na popisu
- Desni klik na port 5000
- Izaberite "Port Visibility" → "Public"

**Zašto učiniti port javnim?** Prema zadanim postavkama, Codespace portovi su privatni (dostupni samo vama). Javnim učinite port kako bi vaš frontend (koji se izvodi u pregledniku) mogao komunicirati s vašim backendom.

**3. Nabavite vaš javni URL**:
Nakon što port postavite na javni, vidjet ćete URL poput:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Ažurirajte konfiguraciju frontenda**:
```javascript
// U vašem frontend app.js, ažurirajte BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Razumijevanje Codespace URL-ova

Codespace URL-ovi slijede predvidiv uzorak:
```
https://[codespace-name]-[port].app.github.dev
```

**Objašnjenje:**
- `codespace-name`: Jedinstveni identifikator vašeg Codespacea (obično uključuje vaše korisničko ime)
- `port`: Broj porta na kojemvaš servis radi (5000 za našu FastAPI aplikaciju)
- `app.github.dev`: GitHub domenska adresa za Codespace aplikacije

#### Testiranje vaše Codespace konfiguracije

**1. Testirajte backend direktno**:
Otvorite vaš javni URL u novom tabu preglednika. Trebali biste vidjeti:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testirajte pomoću razvojnih alata preglednika**:
```javascript
// Otvorite konzolu preglednika i testirajte svoj API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Lokalni razvoj

| Aspekt | Lokalni razvoj | GitHub Codespaces |
|--------|---------------|-------------------|
| **Vrijeme postavljanja** | Duže (instalacija Pythona, ovisnosti) | Instantno (predkonfigurirano okruženje) |
| **Pristup URL-u** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfiguracija porta** | Automatska | Ručna (postavljanje portova na javne) |
| **Spremanje datoteka** | Lokalno računalo | GitHub repozitorij |
| **Suradnja** | Teže dijeliti okruženje | Jednostavno dijeljenje Codespace linka |
| **Ovisnost o internetu** | Samo za AI API pozive | Potrebno za sve |

#### Savjeti za razvoj u Codespaces

**Varijable okoliša u Codespaces**:
Vaša `.env` datoteka funkcionira kao i obično, no varijable okoliša možete postaviti i direktno u Codespace:

```bash
# Postavite varijablu okoline za trenutnu sesiju
export GITHUB_TOKEN="your_token_here"

# Ili dodajte u svoj .bashrc za trajnost
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Upravljanje portovima**:
- Codespaces automatski detektira kada vaša aplikacija počne slušati na portu
- Možete prosljeđivati više portova istovremeno (korisno ako kasnije dodate bazu podataka)
- Portovi ostaju dostupni dokle god vam Codespace radi

**Razvojni tijek rada**:
1. Radite promjene u kodu u VS Code-u
2. FastAPI se automatski ponovno učitava (zahvaljujući Uvicorn reload modu)
3. Odmah testirajte promjene putem javnog URL-a
4. Kad ste spremni, commitajte i pushajte

> 💡 **Koristan savjet**: Dodajte u favorite URL vašeg Codespace backend-a tijekom razvoja. Budući da imena Codespacea ostaju stabilna, URL se neće mijenjati dok koristite isti Codespace.

## Izrada sučelja frontenda za chat: Gdje se ljudi susreću s AI-jem

Sada ćemo izgraditi korisničko sučelje – dio koji određuje kako ljudi komuniciraju s vašim AI asistentom. Kao i dizajn originalnog iPhone sučelja, fokusiramo se na to da složena tehnologija bude intuitivna i prirodna za korištenje.

### Razumijevanje moderne frontend arhitekture

Naše chat sučelje bit će ono što nazivamo "Single Page Application" ili SPA. Umjesto staromodne metode gdje svaki klik učitava novu stranicu, naša aplikacija glatko i trenutno ažurira sadržaj:

**Stare web stranice**: Kao listati fizičku knjigu – prelazite na potpuno nove stranice  
**Naša chat aplikacija**: Kao korištenje telefona – sve teče i ažurira se neprimjetno

```mermaid
graph TD
    A[Korisnik unosi poruku] --> B[JavaScript hvata unos]
    B --> C[Provjeri i formatiraj podatke]
    C --> D[Pošalji na Backend API]
    D --> E[Prikaži stanje učitavanja]
    E --> F[Prime AI odgovor]
    F --> G[Ažuriraj sučelje chata]
    G --> H[Spremno za sljedeću poruku]
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
    
    ChatApp --> DOM : manipulira
    ChatApp --> FastAPI : šalje zahtjeve
```
### Tri stupnja frontend razvoja

Svaka frontend aplikacija – od jednostavnih web stranica do složenih aplikacija poput Discorda ili Slacka – temelji se na tri osnovne tehnologije. Smatrajte ih temeljem svega što vidite i s čim komunicirate na webu:

**HTML (Struktura)**: Ovo je vaš temelj  
- Određuje koji elementi postoje (gumbi, tekstualna polja, spremnici)  
- Daje značenje sadržaju (ovo je naslov, ovo je obrazac itd.)  
- Stvara osnovnu strukturu na kojoj se sve gradi  

**CSS (Prezentacija)**: Ovo je vaš dizajner interijera  
- Čini da sve izgleda lijepo (boje, fontovi, rasporedi)  
- Prilagođava za različite veličine ekrana (telefon, laptop, tablet)  
- Stvara glatke animacije i vizualni odgovor  

**JavaScript (Ponašanje)**: Ovo je vaš mozak  
- Reagira na korisničke radnje (klikovi, tipkanje, scrollanje)  
- Komunicira s backendom i ažurira stranicu  
- Čini sve interaktivnim i dinamičnim  

**Možete to zamisliti kao arhitektonski dizajn:**  
- **HTML**: Strukturni plan (definiranje prostora i odnosa)  
- **CSS**: Estetski i okolišni dizajn (vizualni stil i korisničko iskustvo)  
- **JavaScript**: Mehanički sustavi (funkcionalnost i interaktivnost)  

### Zašto moderna JavaScript arhitektura ima značaj

Naša chat aplikacija koristi moderne JavaScript obrasce koje ćete vidjeti u profesionalnim aplikacijama. Razumijevanje ovih pojmova pomoći će vam u vašem razvoju:

**Arhitektura temeljena na klasama**: Organizirat ćemo kod u klase, što je kao izrada nacrta za objekte  
**Async/Await**: Moderan način za rukovanje operacijama koje traju (npr. API pozivi)  
**Programiranje vođeno događajima**: Aplikacija reagira na korisničke radnje (klikove, pritiskanje tipki) umjesto da radi u petlji  
**Manipulacija DOM-om**: Dinamičko ažuriranje sadržaja web stranice na temelju korisničkih interakcija i API odgovora  

### Postavljanje strukture projekta

Napravite frontend direktorij s ovom organiziranom strukturom:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Razumijevanje arhitekture:**  
- **Razdvaja** brige između strukture (HTML), ponašanja (JavaScript) i prezentacije (CSS)  
- **Održava** jednostavnu strukturu datoteka koje je lako pretraživati i mijenjati  
- **Slijedi** najbolje prakse web razvoja za organiziranost i održivost  

### Izgradnja HTML temelja: Semantička struktura za pristupačnost

Počnimo s HTML strukturom. Moderan web razvoj naglašava "semantički HTML" – korištenje HTML elemenata koji jasno opisuju svoju svrhu, a ne samo izgled. To čini vašu aplikaciju pristupačnom čitačima ekrana, tražilicama i drugim alatima.

**Zašto je semantički HTML važan**: Zamislite da nekome opisujete vašu chat aplikaciju preko telefona. Rekli biste "tu je zaglavlje s naslovom, glavno područje gdje se pojavljuju razgovori i obrazac pri dnu za tipkanje poruka." Semantički HTML koristi elemente koji odgovaraju ovom prirodnom opisu.

Napravite `index.html` s ovim pažljivo strukturiranim markupom:

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

**Razumijevanje svakog HTML elementa i njegove svrhe:**

#### Struktura dokumenta  
- **`<!DOCTYPE html>`**: Kaže pregledniku da je ovo moderni HTML5  
- **`<html lang="en">`**: Označava jezik stranice za čitače ekrana i alate za prijevod  
- **`<meta charset="UTF-8">`**: Osigurava ispravan zapis znakova za međunarodni tekst  
- **`<meta name="viewport"...>`**: Čini stranicu responzivnom za mobilne uređaje kontrolirajući zumiranje i skaliranje  

#### Semantički elementi  
- **`<header>`**: Jasno identificira gornji dio sa naslovom i opisom  
- **`<main>`**: Označava glavno sadržajno područje (gdje se odvija razgovor)  
- **`<form>`**: Semantički ispravno za korisnički unos, omogućuje pravilnu navigaciju tipkovnicom  

#### Značajke pristupačnosti  
- **`role="log"`**: Govori čitačima ekrana da je ovo područje kronološki zapis poruka  
- **`aria-live="polite"`**: Najavljuje nove poruke čitačima ekrana bez prekidanja  
- **`aria-label`**: Pribavlja opisne oznake za kontrole obrasca  
- **`required`**: Preglednik provjerava da korisnik unese poruku prije slanja  

#### Integracija s CSS-om i JavaScriptom  
- **`class` atributi**: Daju veze za stiliziranje u CSS-u (npr. `chat-container`, `input-group`)  
- **`id` atributi**: Omogućuju JavaScriptu pronalazak i manipulaciju određenim elementima  
- **Pozicija skripte**: JavaScript datoteka učitava se na kraju kako bi HTML prvo bio učitan  

**Zašto ova struktura funkcionira:**  
- **Logičan tok**: Zaglavlje → Glavni sadržaj → Obrazac za unos prati prirodan red čitanja  
- **Pristupačno tipkovnici**: Korisnici mogu tabom prelaziti kroz sve interaktivne elemente  
- **Prijateljski za čitače ekrana**: Jasne oznake i opisi za korisnike s oštećenjem vida  
- **Responzivno za mobitele**: Meta tag viewport omogućuje responzivni dizajn  
- **Postupno poboljšanje**: Funkcionira čak i ako CSS ili JavaScript ne uspiju učitati  

### Dodavanje interaktivnog JavaScript-a: Logika moderne web aplikacije

Sada izgradimo JavaScript koji daje život našem sučelju za chat. Koristit ćemo moderne JavaScript obrasce koje ćete susretati u profesionalnom web razvoju, uključujući ES6 klase, async/await i programiranje vođeno događajima.

#### Razumijevanje moderne JavaScript arhitekture

Umjesto pisanja proceduralnog koda (niza funkcija koje se izvršavaju redom), stvorit ćemo **arhitekturu baziranu na klasama**. Razmislite o klasi kao nacrtu za stvaranje objekata – kao što arhitektonski nacrt može poslužiti za izgradnju više kuća.

**Zašto koristiti klase za web aplikacije?**
- **Organizacija**: Sve povezane funkcionalnosti su grupirane zajedno
- **Ponovna upotrebljivost**: Možete stvoriti više chat instanci na istoj stranici
- **Održavanje**: Lakše je ispravljati pogreške i mijenjati specifične značajke
- **Profesionalni standard**: Ovaj obrazac koriste frameworki poput React, Vue i Angular

Kreirajte `app.js` s ovim modernim, dobro strukturiranim JavaScriptom:

```javascript
// app.js - Logika moderne chat aplikacije

class ChatApp {
    constructor() {
        // Dohvati reference na DOM elemente koje ćemo trebati manipulirati
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Ovdje konfiguriraj svoj backend URL
        this.BASE_URL = "http://localhost:5000"; // Ažuriraj ovo za svoje okruženje
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Postavi event listener-e kada je chat aplikacija kreirana
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Slušaj slanje forme (kada korisnik klikne Pošalji ili pritisne Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Također slušaj Enter tipku u unosnom polju (bolje korisničko iskustvo)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Spriječi da forma osvježi stranicu
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Ne šalji prazne poruke
        
        // Pruži korisniku povratnu informaciju da se nešto događa
        this.setLoading(true);
        
        // Odmah dodaj korisničku poruku u chat (optimistički UI)
        this.appendMessage(messageText, "user");
        
        // Očisti unosno polje kako bi korisnik mogao upisati sljedeću poruku
        this.input.value = '';
        
        try {
            // Pozovi AI API i čekaj odgovor
            const reply = await this.callAPI(messageText);
            
            // Dodaj AI odgovor u chat
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Ponovno omogući sučelje bez obzira na uspjeh ili neuspjeh
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

// Pokreni chat aplikaciju kad se stranica učita
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Razumijevanje svakog JavaScript koncepta

**ES6 struktura klase**:
```javascript
class ChatApp {
    constructor() {
        // Ovo se izvršava kada kreirate novu ChatApp instancu
        // To je poput funkcije "setup" za vaš chat
    }
    
    methodName() {
        // Metode su funkcije koje pripadaju klasi
        // One mogu pristupiti svojstvima klase koristeći "this"
    }
}
```

**Async/Await obrazac**:
```javascript
// Stari način (callback pakao):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Moderan način (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Programiranje vođeno događajima**:
Umjesto stalnog provjeravanja je li se nešto dogodilo, "slušamo" događaje:
```javascript
// Kada se obrazac pošalje, pokreni handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Kada se pritisne tipka Enter, također pokreni handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulacija DOM-om**:
```javascript
// Kreiraj nove elemente
const messageElement = document.createElement("div");

// Izmijeni njihove osobine
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Dodaj na stranicu
this.messages.appendChild(messageElement);
```

#### Sigurnost i najbolje prakse

**Prevencija XSS napada**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Ovo automatski escapira HTML
    return div.innerHTML;
}
```

**Zašto je to važno**: Ako korisnik unese `<script>alert('hack')</script>`, ova funkcija osigurava da se prikazuje kao tekst, a ne izvršava kao kod.

**Rukovanje pogreškama**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Prikaži korisnički prihvatljivu pogrešku umjesto da aplikacija prestane raditi
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Razmatranja korisničkog iskustva**:
- **Optimističko sučelje**: Odmah dodajte korisničku poruku, nemojte čekati odgovor servera
- **Stanja učitavanja**: Onemogućite gumbe i prikažite "Šaljem..." dok čekate
- **Automatsko skrolanje**: Držite najnovije poruke vidljivima
- **Validacija unosa**: Ne šaljite prazne poruke
- **Tipkovni prečaci**: Enter šalje poruke (kao u pravim chat aplikacijama)

#### Razumijevanje toka aplikacije

1. **Stranica se učitava** → događa se događaj `DOMContentLoaded` → kreira se `new ChatApp()`
2. **Pokreće se konstruktor** → Dohvaća referencije na DOM elemente → Postavlja slušatelje događaja
3. **Korisnik upisuje poruku** → Pritisne Enter ili klikne na Pošalji → izvršava se `handleSubmit`
4. **handleSubmit** → Validira unos → Prikazuje stanje učitavanja → Poziva API
5. **API odgovara** → Dodaje poruku AI-a u chat → Ponovno omogućuje sučelje
6. **Spremno za sljedeću poruku** → Korisnik može nastaviti pričati

Ova arhitektura je skalabilna – lako možete dodati značajke poput uređivanja poruka, prijenosa datoteka ili višestrukih razgovora bez prepisivanja osnovne strukture.

### 🎯 Pedagoška provjera: Moderna frontend arhitektura

**Razumijevanje arhitekture**: Implementirali ste potpunu jedinstvenu web aplikaciju koristeći moderne JavaScript obrasce. Ovo predstavlja profesionalni nivo frontend razvoja.

**Glavni savladani koncepti**:
- **ES6 arhitektura klase**: Organizirana, održiva struktura koda
- **Async/Await obrasci**: Moderno asinkrono programiranje
- **Programiranje vođeno događajima**: Dizajn responzivnog korisničkog sučelja
- **Sigurnosne najbolje prakse**: Prevencija XSS-a i validacija unosa

**Povezanost s industrijom**: Obrasci koje ste naučili (arhitektura bazirana na klasama, asinhroni procesi, manipulacija DOM-om) temelj su modernih frameworka poput React, Vue i Angular. Gradite koristeći isti arhitektonski pristup kakav se koristi u produkcijskim aplikacijama.

**Pitanje za razmišljanje**: Kako biste proširili ovu chat aplikaciju da podržava višestruke razgovore ili autentifikaciju korisnika? Razmotrite potrebne arhitektonske promjene i kako bi se struktura klase razvila.

### Stiliziranje vašeg chat sučelja

Sada ćemo stvoriti moderno, vizualno privlačno chat sučelje s CSS-om. Dobar dizajn čini vašu aplikaciju profesionalnom i poboljšava ukupno korisničko iskustvo. Koristit ćemo moderne CSS značajke poput Flexboxa, CSS Grupe i prilagođenih svojstava za responzivan, pristupačan dizajn.

Kreirajte `styles.css` s ovim sveobuhvatnim stilovima:

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
- **Koristi** prilagođena CSS svojstva (varijable) za dosljedno tematsko oblikovanje i jednostavno održavanje
- **Implementira** Flexbox raspored za responzivan dizajn i pravilno poravnavanje
- **Uključuje** glatke animacije za pojavu poruka bez ometanja
- **Pruža** vizualnu razliku između korisničkih poruka, odgovora AI-a i stanja pogreške
- **Podržava** responzivan dizajn koji funkcionira na računalima i mobilnim uređajima
- **Uvažava** pristupačnost s preferencijama za smanjenu animaciju i ispravnim kontrastom
- **Nudi** podršku za tamni način rada na temelju korisnikovih sistemskih postavki

### Konfiguracija URL-a backend-a

Zadnji korak je ažuriranje `BASE_URL` u vašem JavaScriptu kako bi odgovarao vašem backend serveru:

```javascript
// Za lokalni razvoj
this.BASE_URL = "http://localhost:5000";

// Za GitHub Codespaces (zamijenite s vašom stvarnom URL adresom)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Kako odrediti URL backend-a:**
- **Lokalni razvoj**: Koristite `http://localhost:5000` ako frontend i backend pokrećete lokalno
- **Codespaces**: Pronađite backend URL u kartici Ports nakon što javno objavite port 5000
- **Produkcija**: Zamijenite s vašom stvarnom domenom prilikom objave na hosting uslugu

> 💡 **Savjet za testiranje**: Backend možete testirati direktno otvaranjem osnovnog URL-a u pregledniku. Trebali biste vidjeti početnu poruku vašeg FastAPI servera.



## Testiranje i implementacija

Sada kada imate izgrađene frontend i backend komponente, testirat ćemo kako sve funkcionira zajedno i istražiti opcije implementacije za dijeljenje vašeg chat asistenta s drugima.

### Radni tijek lokalnog testiranja

Slijedite ove korake za testiranje vaše kompletne aplikacije:

```mermaid
graph TD
    A[Pokreni Backend Server] --> B[Konfiguriraj Varijable Okoline]
    B --> C[Testiraj API Krajnje Točke]
    C --> D[Otvori Frontend u Pregledniku]
    D --> E[Testiraj Funkcionalnost Chata]
    E --> F[Otkloni Bilo Kakve Problematike]
```
**Postupak testiranja korak po korak:**

1. **Pokrenite vaš backend server**:
   ```bash
   cd backend
   source venv/bin/activate  # ili venv\Scripts\activate na Windowsu
   python api.py
   ```

2. **Provjerite radi li API**:
   - Otvorite `http://localhost:5000` u pregledniku
   - Trebali biste vidjeti početnu poruku vašeg FastAPI servera

3. **Otvorite frontend**:
   - Idite u mapu vašeg frontenda
   - Otvorite `index.html` u web pregledniku
   - Ili koristite VS Code dodatak Live Server za bolje razvojno iskustvo

4. **Testirajte chat funkcionalnost**:
   - Upisujte poruku u polje za unos
   - Kliknite "Pošalji" ili pritisnite Enter
   - Provjerite da AI prikladno odgovara
   - Provjerite konzolu preglednika za eventualne JavaScript pogreške

### Rješavanje uobičajenih problema

| Problem | Simptomi | Rješenje |
|---------|----------|----------|
| **CORS pogreška** | Frontend ne može doći do backend-a | Provjerite je li FastAPI CORSMiddleware ispravno konfiguriran |
| **Pogreška API ključa** | 401 Unauthorized odgovori | Provjerite varijablu okruženja `GITHUB_TOKEN` |
| **Veza odbijena** | Mrežne pogreške u frontend-u | Provjerite URL backend-a i da li Flask server radi |
| **Nema AI odgovora** | Prazni odgovori ili pogreške | Provjerite backend logove za API kvote ili autentifikacijske probleme |

**Uobičajeni koraci za debugiranje:**
- **Provjerite** konzolu u Developer Tools preglednika za JavaScript pogreške
- **Provjerite** karticu Mreža (Network) za uspješne API zahtjeve i odgovore
- **Pogledajte** terminal backend servera za Python pogreške ili probleme s API-em
- **Potvrdite** da su varijable okruženja pravilno učitane i dostupne

## 📈 Vaš tijek usavršavanja razvoja AI aplikacija

```mermaid
timeline
    title Potpuni razvoj aplikacije umjetne inteligencije
    
    section Temelji umjetne inteligencije
        Razumijevanje generativne umjetne inteligencije
            : Shvatiti koncepte prepoznavanja obrazaca
            : Ovladati kontrolom parametara umjetne inteligencije
            : Naučiti tehnike prompt inženjeringa
        
        Integracija GitHub modela
            : Navigirati platformama za AI usluge
            : Sigurno rukovati autentifikacijom
            : Optimizirati parametre modela
    
    section Razvoj pozadinske strane
        Python API arhitektura
            : Izgraditi FastAPI aplikacije
            : Implementirati asinhrone operacije
            : Kreirati sigurne krajnje točke
        
        Integracija AI usluga
            : Povezati se s vanjskim AI API-jima
            : Rukovati ograničenjima brzine
            : Implementirati granice pogrešaka
    
    section Ovladavanje korisničkim sučeljem
        Moderni JavaScript obrasci
            : Ovladati ES6 klasnom arhitekturom
            : Implementirati async/await tokove
            : Izgraditi responzivna sučelja
        
        Iskustvo korisnika u stvarnom vremenu
            : Kreirati dinamična sučelja za chat
            : Rukovati stanjima učitavanja
            : Optimizirati korisničke interakcije
    
    section Spremnost za produkciju
        Sigurnost i izvedba
            : Implementirati sigurno upravljanje tokenima
            : Spriječiti XSS ranjivosti
            : Optimizirati izvedbu API-ja
        
        Profesionalno postavljanje u produkciju
            : Izgraditi skalabilne arhitekture
            : Kreirati održiv kod
            : Dokumentirati razvojne procese
```
**🎓 Milestone diplomiranja**: Uspješno ste izgradili potpunu AI-pokretanu aplikaciju koristeći iste tehnologije i arhitektonske obrasce koji podupiru moderne AI asistente. Ove vještine predstavljaju spoj tradicionalnog web razvoja i vrhunske AI integracije.

**🔄 Sljedeće razine sposobnosti**:
- Spremni za istraživanje naprednih AI frameworka (LangChain, LangGraph)
- Pripremljeni za izradu multimodalnih AI aplikacija (tekst, slika, glas)
- Opremljeni za implementaciju vektorskih baza podataka i retrieval sustava
- Postavljena osnova za strojno učenje i fino podešavanje AI modela

## GitHub Copilot Agent izazov 🚀

Iskoristite Agent mod za dovršetak sljedećeg izazova:

**Opis:** Poboljšajte chat asistenta dodavanjem povijesti razgovora i trajne pohrane poruka. Ovaj izazov će vam pomoći da shvatite kako upravljati stanjem u chat aplikacijama i implementirati spremište podataka za bolje korisničko iskustvo.

**Zadatak:** Izmijenite chat aplikaciju tako da uključuje povijest razgovora koja traje između sesija. Dodajte funkcionalnost spremanja poruka u lokalnu pohranu, prikaz povijesti razgovora pri učitavanju stranice te gumb "Obriši povijest". Također implementirajte indikatore tipkanja i vremenske oznake poruka kako bi chat iskustvo bilo realističnije.

Više o [agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) saznajte ovdje.

## Zadatak: Izgradite svog osobnog AI asistenta

Sada ćete kreirati vlastitu implementaciju AI asistenta. Umjesto da samo replicirate kod iz tutorijala, ovo je prilika da primijenite koncepte i izgradite nešto što odražava vaše interese i upotrebu.

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

### Glavni zadaci implementacije

**Backend razvoj:**
- **Uzeti** naš FastAPI kod i prilagoditi ga sebi
- **Kreirati** jedinstvenu AI osobnost – možda pomoćnika za kuhanje, kreativnog partnera za pisanje ili prijatelja za učenje?
- **Dodati** pouzdano rukovanje pogreškama da aplikacija ne padne ako nešto pođe po zlu
- **Napisati** jasnu dokumentaciju za svakoga tko želi razumjeti kako API funkcionira

**Frontend razvoj:**
- **Izgraditi** chat sučelje koje je intuitivno i ugodno za korištenje
- **Pisati** čist, moderan JavaScript na koji ćete biti ponosni pred drugim developerima
- **Dizajnirati** prilagođene stilove koji odražavaju osobnost vašeg AI-a – zabavno i šareno? Čisto i minimalistično? Potpuno vaš izbor!
- **Osigurati** da radi sjajno na telefonima i računalima

**Zahtjevi za personalizaciju:**
- **Odabrati** jedinstveno ime i osobnost za vaš AI asistenta – možda nešto što odražava vaše interese ili probleme koje želite riješiti
- **Prilagoditi** vizualni dizajn kako bi odgovarao stilu vašeg asistenta
- **Napisati** uvodnu poruku koja motivira korisnike da započnu razgovor
- **Testirati** asistenta s različitim vrstama pitanja i pratiti odgovore

### Ideje za nadogradnju (opcijski)

Želite li podići svoj projekt na višu razinu? Evo nekih zabavnih ideja za istraživanje:

| Značajka | Opis | Vještine koje ćete vježbati |
|----------|-------|-----------------------------|
| **Povijest poruka** | Pamti razgovore čak i nakon osvježavanja stranice | Rad s localStorage, rukovanje JSON-om |
| **Indikatori tipkanja** | Prikaži "AI tipka..." dok se čeka odgovor | CSS animacije, asinkrono programiranje |
| **Vremenske oznake poruka** | Prikaži kada je svaka poruka poslana | Formatiranje datuma/vremena, UX dizajn |
| **Izvoz razgovora** | Omogući korisnicima preuzimanje razgovora | Rad s datotekama, izvoz podataka |
| **Prebacivanje teme** | Preklop između svijetlog i tamnog moda | CSS varijable, korisničke preferencije |
| **Unos glasom** | Dodaj funkcionalnost pretvaranja glasa u tekst | Web API-ji, pristupačnost |

### Testiranje i dokumentacija

**Osiguranje kvalitete:**
- **Testirajte** aplikaciju s različitim vrstama unosa i rubnim slučajevima
- **Provjerite** responzivnost dizajna na raznim veličinama zaslona
- **Provjerite** pristupačnost s navigacijom tipkovnicom i čitačima zaslona
- **Validirajte** HTML i CSS u skladu sa standardima

**Zahtjevi za dokumentaciju:**
- **Napišite** README.md koji objašnjava vaš projekt i kako ga pokrenuti
- **Uključite** snimke zaslona vašeg chat sučelja u radu
- **Dokumentirajte** sve jedinstvene značajke ili prilagodbe koje ste dodali
- **Dajte** jasne upute za postavljanje za druge developere

### Smjernice za predaju

**Isporuka projekta:**
1. Kompletna mapa projekta sa svim izvornih kodom
2. README.md s opisom projekta i uputama za postavljanje
3. Snimke zaslona koje prikazuju vaš chat asistent u radu
4. Kratka refleksija o naučenom i izazovima s kojima ste se suočili

**Kriteriji ocjenjivanja:**
- **Funkcionalnost**: Radi li chat asistent kako se očekuje?
- **Kvaliteta koda**: Je li kod dobro organiziran, komentiran i održiv?
- **Dizajn**: Je li sučelje vizualno privlačno i jednostavno za korištenje?
- **Kreativnost**: Koliko je jedinstvena i personalizirana vaša implementacija?
- **Dokumentacija**: Jesu li upute za postavljanje jasne i potpune?

> 💡 **Savjet za uspjeh**: Počnite s osnovnim zahtjevima, a zatim dodajte nadogradnje kad sve radi. Fokusirajte se na kvalitetno osnovno iskustvo prije dodavanja naprednih značajki.

## Rješenje

[Rješenje](./solution/README.md)

## Bonus izazovi

Spremni podići svog AI asistenta na višu razinu? Isprobajte ove napredne izazove koji će produbiti vaše razumijevanje AI integracije i web razvoja.

### Prilagodba osobnosti

Prava magija događa se kada svom AI asistentu date jedinstvenu osobnost. Eksperimentirajte s različitim sistemskim promptovima kako biste stvorili specijalizirane asistente:

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

### Nadogradnje frontenda

Transformirajte svoje chat sučelje s ovim vizualnim i funkcionalnim poboljšanjima:

**Napredne CSS značajke:**
- **Implementirajte** glatke animacije i prijelaze poruka
- **Dodajte** prilagođene oblikove za chat balončiće s CSS-om i gradijentima
- **Kreirajte** animaciju indikatora tipkanja dok AI "razmišlja"
- **Dizajnirajte** reakcije emojima ili sustav ocjenjivanja poruka

**JavaScript nadogradnje:**
- **Dodajte** tipkovne prečace (Ctrl+Enter za slanje, Escape za brisanje unosa)
- **Implementirajte** pretraživanje i filtriranje poruka
- **Kreirajte** opciju izvoza razgovora (preuzimanje u tekstualnom ili JSON formatu)
- **Dodajte** automatsko spremanje u localStorage za sprečavanje gubitka poruka

### Napredna AI integracija

**Više AI osobnosti:**
- **Kreirajte** padajući izbornik za izbor između različitih AI osobnosti
- **Spremite** korisnikovu odabranu osobnost u localStorage
- **Implementirajte** prebacivanje konteksta koje održava tijek razgovora

**Pametne funkcionalnosti odgovora:**
- **Dodajte** svijest o kontekstu razgovora (AI pamti prethodne poruke)

- **Implementirajte** pametne prijedloge temeljene na temi razgovora
- **Kreirajte** gumbe za brzi odgovor na česta pitanja

> 🎯 **Cilj učenja**: Ovi dodatni izazovi pomažu vam razumjeti napredne obrasce web razvoja i tehnike integracije AI-ja koje se koriste u produkcijskim aplikacijama.

## Sažetak i sljedeći koraci

Čestitamo! Uspješno ste izgradili kompletnog AI-pokretanog chat asistenta od nule. Ovaj projekt pružio vam je praktično iskustvo s modernim tehnologijama web razvoja i AI integracije – vještine koje postaju sve vrijednije u današnjem tehnološkom krajoliku.

### Što ste postigli

Tijekom ove lekcije savladali ste nekoliko ključnih tehnologija i pojmova:

**Backend razvoj:**
- **Integrirali** ste se s GitHub Models API-jem za AI funkcionalnost
- **Izgradili** RESTful API koristeći Flask s pravilnim rukovanjem pogreškama
- **Implementirali** sigurnu autentifikaciju koristeći varijable okoline
- **Konfigurirali** CORS za zahtjeve između frontenda i backenda s različitih izvora

**Frontend razvoj:**
- **Kreirali** ste responzivan chat sučelje koristeći semantički HTML
- **Implementirali** moderni JavaScript s async/await i arhitekturom temeljenu na klasama
- **Dizajnirali** privlačno korisničko sučelje s CSS Gridom, Flexboxom i animacijama
- **Dodali** značajke pristupačnosti i principe responzivnog dizajna

**Full-Stack integracija:**
- **Povezali** frontend i backend putem HTTP API poziva
- **Rukovali** ste interakcijama korisnika u stvarnom vremenu i asinhronim protokom podataka
- **Implementirali** rukovanje pogreškama i povratnu informaciju korisniku kroz aplikaciju
- **Testirali** kompletan tijek rada aplikacije od unosa korisnika do AI odgovora

### Ključni ishodi učenja

```mermaid
mindmap
  root((Vještine AI Chat Aplikacije))
    API Integracija
      Autentikacija
      Rukovanje Pogreškama
      Asinkrono Programiranje
    Web Razvoj
      HTML5 Semantika
      Moderni CSS
      ES6+ JavaScript
    Korisničko Iskustvo
      Responsivni Dizajn
      Pristupačnost
      Interakcija u Stvarnom Vremenu
    AI Razumijevanje
      Prompt Inženjering
      Parametri Modela
      Tijek Razgovora
```
Ovaj projekt uveo vas je u osnove izgradnje AI-pokretanih aplikacija, koje predstavljaju budućnost web razvoja. Sada razumijete kako integrirati AI mogućnosti u tradicionalne web aplikacije, stvarajući zanimljiva korisnička iskustva koja djeluju inteligentno i responzivno.

### Profesionalne primjene

Vještine koje ste razvili u ovoj lekciji direktno su primjenjive u modernim karijerama softverskog razvoja:

- **Full-stack web razvoj** koristeći moderne okvire i API-je
- **Integracija AI-ja** u web aplikacijama i mobilnim aplikacijama
- **Dizajn i razvoj API-ja** za mikroservisne arhitekture
- **Razvoj korisničkog sučelja** s fokusom na pristupačnost i responzivni dizajn
- **DevOps prakse** uključujući konfiguraciju okoline i implementaciju

### Nastavak vašeg AI razvojnog puta

**Sljedeći koraci u učenju:**
- **Istražite** naprednije AI modele i API-je (GPT-4, Claude, Gemini)
- **Naučite** tehnike inženjeringa promptova za bolje AI odgovore
- **Proučite** dizajn razgovora i principe korisničkog iskustva chatbotova
- **Istražite** sigurnost AI-ja, etiku i odgovorne prakse razvoja AI-ja
- **Izgradite** složenije aplikacije s memorijom razgovora i osviještenošću konteksta

**Napredne ideje projekata:**
- Višekorisničke chat sobe s AI moderacijom
- AI-pokretani chatboti za korisničku podršku
- Edukacijski asistenti za individualizirano učenje
- Kreativni suradnici za pisanje s različitim AI osobnostima
- Asistenti za tehničku dokumentaciju za developere

## Početak rada s GitHub Codespaces

Želite li isprobati ovaj projekt u razvojnom okruženju u oblaku? GitHub Codespaces pruža cjelovito razvojno okruženje u vašem pregledniku, savršeno za eksperimentiranje s AI aplikacijama bez potrebe za lokalnim postavkama.

### Postavljanje razvojnog okruženja

**Korak 1: Kreirajte iz predloška**
- **Idite** na [Web Dev For Beginners spremište](https://github.com/microsoft/Web-Dev-For-Beginners)
- **Kliknite** "Use this template" u gornjem desnom kutu (pobrinite se da ste prijavljeni na GitHub)

![Create from template interface showing the green "Use this template" button](../../../translated_images/template.67ad477109d29a2b.hr.png)

**Korak 2: Pokrenite Codespaces**
- **Otvorite** svoje novo spremište
- **Kliknite** zeleni gumb "Code" i odaberite "Codespaces"
- **Odaberite** "Create codespace on main" za pokretanje razvojnog okruženja

![Create codespace interface with options for launching cloud development environment](../../../translated_images/codespace.bcecbdf5d2747d3d.hr.png)

**Korak 3: Konfiguracija okoline**
Kada se vaš Codespace učita, imat ćete pristup:
- **Preinstaliranom** Pythonu, Node.js-u i svim potrebnim razvojnim alatima
- **VS Code sučelju** s proširenjima za web razvoj
- **Terminalu** za pokretanje backend i frontend servera
- **Prosljeđivanju portova** za testiranje vaših aplikacija

**Što Codespaces pruža:**
- **Uklanja** probleme s lokalnim postavljanjem i konfiguracijom okoline
- **Osigurava** dosljedno razvojno okruženje na različitim uređajima
- **Uključuje** unaprijed konfigurirane alate i proširenja za web razvoj
- **Nudi** neprimjetnu integraciju s GitHubom za upravljanje verzijama i suradnju

> 🚀 **Savjet za profesionalce**: Codespaces je savršen za učenje i prototipiranje AI aplikacija jer automatski rješava sve složene postavke okoline, omogućujući vam da se fokusirate na izgradnju i učenje umjesto na rješavanje problema s konfiguracijom.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Napomena**:
Ovaj dokument preveden je pomoću AI prijevodnog servisa [Co-op Translator](https://github.com/Azure/co-op-translator). Iako težimo točnosti, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za važne informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakve nesporazume ili kriva tumačenja proizašla iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->