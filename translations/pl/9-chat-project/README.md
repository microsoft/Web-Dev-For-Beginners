<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-06T18:46:50+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "pl"
}
-->
# Zbuduj Asystenta Czatu z AI

Pamiętasz w Star Treku, kiedy załoga swobodnie rozmawiała z komputerem statku, zadając mu skomplikowane pytania i otrzymując przemyślane odpowiedzi? To, co w latach 60. XX wieku wydawało się czystą fantastyką naukową, dziś możesz zbudować, używając znanych Ci technologii webowych.

W tej lekcji stworzymy asystenta czatu AI, korzystając z HTML, CSS, JavaScript oraz integracji backendowej. Odkryjesz, jak te same umiejętności, które zdobywasz, mogą połączyć się z potężnymi usługami AI, które rozumieją kontekst i generują sensowne odpowiedzi.

Pomyśl o AI jak o dostępie do ogromnej biblioteki, która nie tylko potrafi znaleźć informacje, ale także syntetyzuje je w spójne odpowiedzi dostosowane do Twoich konkretnych pytań. Zamiast przeszukiwać tysiące stron, otrzymujesz bezpośrednie, kontekstowe odpowiedzi.

Integracja odbywa się poprzez znane technologie webowe, które ze sobą współpracują. HTML tworzy interfejs czatu, CSS zajmuje się projektem wizualnym, JavaScript obsługuje interakcje użytkownika, a API backendowe łączy to wszystko z usługami AI. To podobne do współpracy różnych sekcji orkiestry, tworzących symfonię.

Budujemy zasadniczo most między naturalną komunikacją ludzką a przetwarzaniem maszynowym. Nauczysz się zarówno technicznej realizacji integracji z usługą AI, jak i wzorców projektowych, które sprawiają, że interakcje wydają się intuicyjne.

Pod koniec tej lekcji integracja z AI będzie mniej tajemniczym procesem, a bardziej kolejnym API, z którym możesz pracować. Zrozumiesz podstawowe wzorce, które napędzają aplikacje takie jak ChatGPT i Claude, korzystając z tych samych zasad tworzenia stron internetowych, które poznajesz.

## ⚡ Co możesz zrobić w następnych 5 minutach

**Szybka droga startowa dla zapracowanych programistów**

```mermaid
flowchart LR
    A[⚡ 5 minut] --> B[Uzyskaj token GitHub]
    B --> C[Przetestuj AI playground]
    C --> D[Skopiuj kod Pythona]
    D --> E[Zobacz odpowiedzi AI]
```
- **Minuta 1**: Odwiedź [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) i utwórz token dostępu osobistego
- **Minuta 2**: Przetestuj interakcje z AI bezpośrednio w interfejsie playground
- **Minuta 3**: Kliknij zakładkę „Code” i skopiuj fragment kodu w Pythonie
- **Minuta 4**: Uruchom kod lokalnie ze swoim tokenem: `GITHUB_TOKEN=your_token python test.py`
- **Minuta 5**: Obserwuj pierwszą wygenerowaną odpowiedź AI z własnego kodu

**Szybki testowy kod**:
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

**Dlaczego to ważne**: W ciągu 5 minut doświadczysz magii programistycznej interakcji z AI. To fundamentalny budulec każdego zastosowania AI, którego używasz.

Oto jak będzie wyglądał Twój ukończony projekt:

![Interfejs aplikacji czatu pokazujący rozmowę między użytkownikiem a asystentem AI](../../../translated_images/pl/screenshot.0a1ee0d123df681b.png)

## 🗺️ Twoja podróż edukacyjna przez rozwój aplikacji AI

```mermaid
journey
    title Od rozwoju sieci do integracji AI
    section Zrozumienie podstaw AI
      Odkryj koncepcje generatywnej AI: 4: You
      Poznaj platformę modeli GitHub: 6: You
      Opanuj parametry i zapytania AI: 8: You
    section Integracja backendu
      Zbuduj serwer API w Pythonie: 5: You
      Wdróż wywołania funkcji AI: 7: You
      Obsłuż operacje asynchroniczne: 8: You
    section Rozwój frontend
      Stwórz nowoczesny interfejs czatu: 6: You
      Opanuj interakcje w czasie rzeczywistym: 8: You
      Zbuduj responsywne doświadczenie użytkownika: 9: You
    section Profesjonalna aplikacja
      Wdróż kompletny system AI: 7: You
      Optymalizuj wzorce wydajności: 8: You
      Stwórz aplikację gotową do produkcji: 9: You
```
**Cel twojej podróży**: Pod koniec tej lekcji zbudujesz kompletną aplikację zasilaną AI, korzystając z tych samych technologii i wzorców, które napędzają nowoczesnych asystentów AI, takich jak ChatGPT, Claude i Google Bard.

## Zrozumienie AI: od tajemnicy do mistrzostwa

Zanim zanurzymy się w kod, zrozummy, z czym mamy do czynienia. Jeśli wcześniej korzystałeś z API, znasz podstawowy schemat: wysyłasz zapytanie, otrzymujesz odpowiedź.

API AI działają podobnie, ale zamiast pobierać wstępnie zapisane dane z bazy, generują nowe odpowiedzi na podstawie wzorców nauczonych z ogromnych zbiorów tekstów. Pomyśl o tym jak o różnicy między katalogiem bibliotecznym a znającym się bibliotekarzem, który potrafi syntetyzować informacje z wielu źródeł.

### Czym naprawdę jest „Generatywna AI”?

Pomyśl, jak Kamień z Rosetty pozwolił uczonym zrozumieć egipskie hieroglify, znajdując wzorce między znanymi i nieznanymi językami. Modele AI działają podobnie – odnajdują wzorce w ogromnych ilościach tekstu, aby zrozumieć, jak działa język, a następnie wykorzystują te wzorce do generowania odpowiednich odpowiedzi na nowe pytania.

**Wyjaśnię to prostym porównaniem:**
- **Tradycyjna baza danych**: jak proszenie o akt urodzenia – dostajesz dokładnie ten sam dokument za każdym razem
- **Wyszukiwarka**: jak proszenie bibliotekarza o znalezienie książek o kotach – pokazuje, co jest dostępne
- **Generatywna AI**: jak pytanie mądrego przyjaciela o koty – opowiada ciekawe rzeczy własnymi słowami, dostosowane do tego, co chcesz wiedzieć

```mermaid
graph LR
    A[Twoje pytanie] --> B[Model AI]
    B --> C[Rozpoznawanie wzorców]
    C --> D[Generowanie treści]
    D --> E[Kontextowa odpowiedź]
    
    F[Dane treningowe<br/>Książki, Artykuły, Sieć] --> B
```
### Jak uczą się modele AI (wersja uproszczona)

Modele AI uczą się, mając dostęp do ogromnych zbiorów danych zawierających teksty z książek, artykułów i rozmów. W trakcie tego procesu identyfikują wzorce w:
- Sposobie, w jaki strukturyzowane są myśli w komunikacji pisemnej
- Jakie słowa często występują razem
- Jak przebiegają typowe rozmowy
- Różnice kontekstowe między komunikacją formalną i nieformalną

**To podobne do metod archeologów rozszyfrowujących starożytne języki**: analizują tysiące przykładów, aby poznać gramatykę, słownictwo i kontekst kulturowy, aż w końcu potrafią interpretować nowe teksty, bazując na poznanych wzorcach.

### Dlaczego GitHub Models?

Korzystamy z GitHub Models z bardzo praktycznego powodu – daje nam dostęp do AI na poziomie korporacyjnym, bez konieczności zakładania własnej infrastruktury AI (uwierz mi, nie chcesz tego robić teraz!). To tak, jak korzystanie z API pogodowego zamiast prób przewidywania pogody samodzielnie, zakładając stacje meteorologiczne wszędzie.

To zasadniczo „AI jako usługa” i najlepsze jest to, że możesz zacząć za darmo, eksperymentując bez obawy o ogromne koszty.

```mermaid
graph LR
    A[Interfejs czatu frontend] --> B[Twój backend API]
    B --> C[GitHub Models API]
    C --> D[Przetwarzanie modelu AI]
    D --> C
    C --> B
    B --> A
```
Użyjemy GitHub Models do integracji backendowej, która zapewnia dostęp do profesjonalnych możliwości AI przez przyjazny dla programisty interfejs. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) służy jako środowisko testowe, gdzie możesz eksperymentować z różnymi modelami AI i zrozumieć ich możliwości przed implementacją w kodzie.

## 🧠 Ekosystem rozwoju aplikacji AI

```mermaid
mindmap
  root((Rozwój AI))
    Understanding AI
      Generative Models
        Rozpoznawanie wzorców
        Generowanie treści
        Zrozumienie kontekstu
        Synteza odpowiedzi
      AI Parameters
        Kontrola temperatury
        Limity tokenów
        Filtrowanie Top-p
        Systemowe podpowiedzi
    Backend Architecture
      API Integration
        Modele GitHub
        Uwierzytelnianie
        Obsługa żądań
        Zarządzanie błędami
      Python Infrastructure
        Framework FastAPI
        Operacje asynchroniczne
        Bezpieczeństwo środowiska
        Konfiguracja CORS
    Frontend Experience
      Chat Interface
        Aktualizacje w czasie rzeczywistym
        Historia wiadomości
        Opinie użytkowników
        Stany ładowania
      Modern Web Tech
        Klasy ES6
        Async/Await
        Manipulacja DOM
        Obsługa zdarzeń
    Professional Patterns
      Security Best Practices
        Zarządzanie tokenami
        Walidacja danych wejściowych
        Zapobieganie XSS
        Granice błędów
      Production Readiness
        Optymalizacja wydajności
        Responsywny design
        Dostępność
        Strategie testowania
```
**Główna zasada**: rozwój aplikacji AI łączy tradycyjne umiejętności tworzenia stron internetowych z integracją usług AI, tworząc inteligentne aplikacje, które są naturalne i responsywne dla użytkowników.

![Interfejs GitHub Models AI Playground z wyborem modeli i obszarem testowym](../../../translated_images/pl/playground.d2b927122224ff8f.png)

**Co sprawia, że playground jest tak przydatny:**
- **Wypróbuj** różne modele AI, takie jak GPT-4o-mini, Claude i inne (wszystkie darmowe!)
- **Przetestuj** swoje pomysły i zapytania przed napisaniem kodu
- **Uzyskaj** gotowe fragmenty kodu w preferowanym języku programowania
- **Dostosuj** ustawienia, takie jak poziom kreatywności i długość odpowiedzi, aby zobaczyć, jak wpływają na wynik

Po zabawie po prostu kliknij zakładkę „Code” i wybierz język programowania, aby otrzymać potrzebny kod implementacyjny.

![Wybór w playground pokazujący opcje generowania kodu dla różnych języków programowania](../../../translated_images/pl/playground-choice.1d23ba7d407f4758.png)

## Konfiguracja integracji backendowej w Pythonie

Teraz zaimplementujmy integrację AI przy użyciu Pythona. Python jest doskonały do aplikacji AI ze względu na prostą składnię i potężne biblioteki. Zaczniemy od kodu z GitHub Models playground, a potem przebudujemy go na funkcję wielokrotnego użytku, gotową do produkcji.

### Zrozumienie podstawowej implementacji

Gdy pobierzesz kod Pythona z playground, otrzymasz coś takiego. Nie martw się, jeśli na początku wydaje się skomplikowane – przejdziemy przez to krok po kroku:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Aby uwierzytelnić się w modelu, musisz wygenerować osobisty token dostępu (PAT) w ustawieniach GitHub.
# Utwórz swój token PAT, postępując zgodnie z instrukcjami tutaj: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Co się dzieje w tym kodzie:**
- **Importujemy** niezbędne narzędzia: `os` do odczytu zmiennych środowiskowych oraz `OpenAI` do komunikacji z AI
- **Konfigurujemy** klienta OpenAI tak, aby łączył się z serwerami AI GitHub, a nie bezpośrednio z OpenAI
- **Uwierzytelniamy** się za pomocą specjalnego tokenu GitHub (więcej o tym za chwilę!)
- **Strukturyzujemy** naszą rozmowę z różnymi „rolami” – to jak ustawianie sceny do przedstawienia
- **Wysyłamy** zapytanie do AI z pewnymi parametrami dostrajania
- **Wyciągamy** faktyczny tekst odpowiedzi z całych danych zwróconych przez AI

### Zrozumienie ról wiadomości: ramy rozmowy z AI

Rozmowy z AI mają określoną strukturę z różnymi „rolami”, które pełnią różne funkcje:

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

**Pomyśl o tym jak o reżyserii przedstawienia:**
- **Rola systemu**: jak wskazówki sceniczne dla aktora – mówi AI, jak się zachowywać, jaką mieć osobowość i jak odpowiadać
- **Rola użytkownika**: faktyczne pytanie lub wiadomość od osoby korzystającej z aplikacji
- **Rola asystenta**: odpowiedź AI (nie wysyłasz jej, ale pojawia się w historii rozmowy)

**Analogicznie w realnym świecie**: wyobraź sobie, że przedstawiasz przyjaciela na imprezie:
- **Wiadomość systemowa**: „To jest moja przyjaciółka Sarah, jest lekarzem i świetnie tłumaczy medyczne kwestie prostym językiem”
- **Wiadomość użytkownika**: „Czy możesz wyjaśnić, jak działają szczepionki?”
- **Odpowiedź asystenta**: Sarah odpowiada jako przyjazny lekarz, a nie prawnik czy kucharz

### Zrozumienie parametrów AI: dostrajanie zachowania odpowiedzi

Parametry numeryczne w wywołaniach API AI kontrolują, jak model generuje odpowiedzi. Ustawienia te pozwalają dostosować zachowanie AI do różnych zastosowań:

#### Temperature (0.0 do 2.0): pokrętło kreatywności

**Co robi**: Kontroluje, jak kreatywne lub przewidywalne będą odpowiedzi AI.

**Pomyśl o tym jak o poziomie improwizacji muzyka jazzowego:**
- **Temperature = 0.1**: Gra tę samą melodię za każdym razem (bardzo przewidywalne)
- **Temperature = 0.7**: Dodaje subtelne wariacje, pozostając rozpoznawalnym (zrównoważona kreatywność)
- **Temperature = 1.5**: Pełna, eksperymentalna improwizacja jazzowa z niespodziewanymi zwrotami (bardzo nieprzewidywalne)

```python
# Bardzo przewidywalne odpowiedzi (dobre dla pytań faktualnych)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Prawie zawsze powie „4”
)

# Kreatywne odpowiedzi (dobre do burzy mózgów)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Wygeneruje unikalne, nieoczekiwane historie
)
```

#### Max Tokens (1 do 4096+): kontrola długości odpowiedzi

**Co robi**: Ustawia limit długości odpowiedzi AI.

**Pomyśl o tokenach jak o mniej więcej równoważnych słowach** (około 1 token ≈ 0,75 słowa po angielsku):
- **max_tokens=50**: Krótka i zwięzła odpowiedź (jak SMS)
- **max_tokens=500**: Fajny akapit lub dwa
- **max_tokens=2000**: Szczegółowe wyjaśnienie z przykładami

```python
# Krótkie, zwięzłe odpowiedzi
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Wymusza krótkie wyjaśnienie
)

# Szczegółowe, obszerne odpowiedzi
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Pozwala na szczegółowe wyjaśnienia z przykładami
)
```

#### Top_p (0.0 do 1.0): parametr skupienia

**Co robi**: Kontroluje, jak bardzo AI skupia się na najbardziej prawdopodobnych odpowiedziach.

**Wyobraź sobie, że AI ma ogromne słownictwo, uporządkowane według prawdopodobieństwa słów:**
- **top_p=0.1**: Biera pod uwagę jedynie 10% najbardziej prawdopodobnych słów (bardzo skoncentrowane)
- **top_p=0.9**: Biera pod uwagę 90% możliwych słów (bardziej kreatywne)
- **top_p=1.0**: Uwzględnia wszystko (maksymalna różnorodność)

**Na przykład**: gdy pytasz „Niebo zazwyczaj jest...”
- **Niskie top_p**: prawie na pewno odpowie „niebieskie”
- **Wysokie top_p**: może powiedzieć „niebieskie”, „pochmurne”, „rozległe”, „zmienne”, „piękne” itd.

### Skomponowanie wszystkiego razem: kombinacje parametrów dla różnych zastosowań

```python
# Dla merytorycznych, spójnych odpowiedzi (jak bot dokumentacyjny)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Dla pomocy w twórczym pisaniu
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Dla rozmownych, pomocnych odpowiedzi (zrównoważonych)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Macierz optymalizacji parametrów SI
    x-axis Niska kreatywność --> Wysoka kreatywność
    y-axis Krótka odpowiedź --> Długa odpowiedź
    
    quadrant-1 Kreatywne treści
    quadrant-2 Szczegółowa analiza
    quadrant-3 Szybkie fakty
    quadrant-4 Konwersacyjne SI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Dlaczego te parametry są ważne**: różne aplikacje potrzebują różnych rodzajów odpowiedzi. Bot obsługi klienta powinien być spójny i faktualny (niskie temperature), podczas gdy kreatywny asystent pisarski powinien być pomysłowy i zróżnicowany (wysokie temperature). Zrozumienie tych parametrów daje Ci kontrolę nad osobowością i stylem odpowiedzi AI.
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

**Zrozumienie tej ulepszonej funkcji:**
- **Przyjmuje** dwa parametry: zapytanie użytkownika i opcjonalną wiadomość systemową
- **Zapewnia** domyślną wiadomość systemową dla ogólnego zachowania asystenta
- **Używa** prawidłowych podpowiedzi typów Pythona dla lepszej dokumentacji kodu
- **Zawiera** szczegółowy docstring wyjaśniający cel i parametry funkcji
- **Zwraca** tylko treść odpowiedzi, co ułatwia jej użycie w naszej webowej API
- **Utrzymuje** te same parametry modelu dla spójnego zachowania AI

### Magia promptów systemowych: programowanie osobowości AI

Jeśli parametry kontrolują, jak AI myśli, prompt systemowy kontroluje, kim AI myśli, że jest. To naprawdę jedna z najfajniejszych części pracy z AI – zasadniczo dajesz AI pełną osobowość, poziom wiedzy i styl komunikacji.

**Pomyśl o promptach systemowych jak o obsadzaniu różnych aktorów do różnych ról**: zamiast jednego uniwersalnego asystenta, możesz stworzyć specjalistycznych ekspertów do różnych sytuacji. Potrzebujesz cierpliwego nauczyciela? Kreatywnego partnera do burzy mózgów? Dobrego doradcy biznesowego? Wystarczy zmienić prompt systemowy!

#### Dlaczego prompt systemowy jest tak potężny

Oto fascynująca część: modele AI były trenowane na niezliczonych rozmowach, w których ludzie przyjmowali różne role i poziomy wiedzy. Gdy dasz AI konkretną rolę, to jak przełączenie przełącznika aktywującego wszystkie te wyuczone wzorce.

**To jak metoda aktorska dla AI**: powiedz aktorowi „jesteś mądrym, starym profesorem” i obserwuj, jak automatycznie dostosowuje postawę, słownictwo i maniery. AI robi coś niezwykle podobnego z wzorcami językowymi.

#### Tworzenie efektywnych promptów systemowych: sztuka i nauka

**Anatomia świetnego promptu systemowego:**
1. **Rola/Tożsamość**: Kim jest AI?
2. **Ekspertyza**: Co wie?
3. **Styl komunikacji**: Jak mówi?
4. **Konkretne instrukcje**: Na czym ma się skupić?

```python
# ❌ Niejasna podpowiedź systemowa
"You are helpful."

# ✅ Szczegółowa, skuteczna podpowiedź systemowa
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Przykłady promptów systemowych z kontekstem

Zobaczmy, jak różne prompt systemowy tworzą całkowicie odmienne osobowości AI:

```python
# Przykład 1: Cierpliwy nauczyciel
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Przykład 2: Kreatywny współpracownik
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Przykład 3: Strategiczny doradca biznesowy
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Widok promptów systemowych w praktyce

Przetestujmy to samo pytanie, używając różnych promptów systemowych, aby zobaczyć znaczące różnice:

**Pytanie**: „Jak obsługiwać uwierzytelnianie użytkownika w mojej aplikacji webowej?”

```python
# Z poleceniem nauczyciela:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Typowa odpowiedź: „Świetne pytanie! Rozbijmy uwierzytelnianie na proste kroki.
# Pomyśl o tym jak o ochroniarzu w klubie nocnym sprawdzającym dowody tożsamości...”

# Z poleceniem biznesowym:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Typowa odpowiedź: „Z strategicznego punktu widzenia uwierzytelnianie jest kluczowe dla zaufania użytkowników
# oraz zgodności z przepisami. Pozwól, że przedstawię ramy uwzględniające bezpieczeństwo,
# doświadczenie użytkownika i skalowalność...”
```

#### Zaawansowane techniki promptów systemowych

**1. Ustawianie kontekstu**: daj AI informacje w tle
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formatowanie wyjścia**: Powiedz AI, jak organizować odpowiedzi  
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
  
**3. Ustalanie ograniczeń**: Określ, czego AI NIE powinno robić  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### Dlaczego to jest ważne dla Twojego asystenta czatu

Zrozumienie poleceń systemowych daje Ci niesamowitą moc tworzenia wyspecjalizowanych asystentów AI:  
- **Bot obsługi klienta**: pomocny, cierpliwy, świadomy polityk  
- **Nauczyciel**: zachęcający, krok po kroku, sprawdzający zrozumienie  
- **Partner kreatywny**: pomysłowy, rozwijający idee, zadający pytanie "a co jeśli?"  
- **Ekspert techniczny**: precyzyjny, szczegółowy, dbający o bezpieczeństwo  

**Kluczowa wskazówka**: Nie wywołujesz tylko interfejsu API AI – tworzysz spersonalizowaną osobowość AI, odpowiadającą na Twój konkretny przypadek użycia. To właśnie sprawia, że nowoczesne aplikacje AI wydają się dostosowane i użyteczne, a nie ogólne.

### 🎯 Pedagogiczna kontrola: Programowanie osobowości AI

**Zatrzymaj się i przemyśl**: Właśnie nauczyłeś się programować osobowości AI za pomocą poleceń systemowych. To podstawowa umiejętność w nowoczesnym rozwoju aplikacji AI.

**Szybka samoocena**:  
- Czy potrafisz wyjaśnić, czym polecenia systemowe różnią się od zwykłych wiadomości użytkownika?  
- Jaka jest różnica pomiędzy parametrami temperature a top_p?  
- Jak stworzyłbyś polecenie systemowe dla konkretnego zastosowania (np. nauczyciel kodowania)?  

**Połączenie z rzeczywistością**: Techniki poleceń systemowych, których się nauczyłeś, są używane w każdej większej aplikacji AI – od asystenta kodowania GitHub Copilot po interfejs konwersacyjny ChatGPT. Opanowujesz te same wzorce, które wykorzystują zespoły produktowe AI w dużych firmach technologicznych.

**Pytanie wyzwania**: Jak zaprojektowałbyś różne osobowości AI dla różnych typów użytkowników (początkujący vs ekspert)? Rozważ, jak ten sam podstawowy model AI mógłby obsługiwać różne grupy odbiorców dzięki inżynierii promptów.

## Budowanie Web API za pomocą FastAPI: Twoje wydajne centrum komunikacji AI

Zbudujmy teraz backend, który połączy frontend z usługami AI. Użyjemy FastAPI, nowoczesnego frameworka Pythona, który doskonale sprawdza się w tworzeniu API dla aplikacji AI.

FastAPI oferuje kilka zalet dla tego typu projektów: wbudowane wsparcie async do obsługi współbieżnych zapytań, automatyczne generowanie dokumentacji API oraz świetną wydajność. Serwer FastAPI będzie pośrednikiem, który odbiera żądania z frontendu, komunikuje się z usługami AI i zwraca sformatowane odpowiedzi.

### Dlaczego FastAPI do aplikacji AI?

Możesz się zastanawiać: „Czy nie można po prostu wywołać AI bezpośrednio z frontendowego JavaScriptu?” albo „Dlaczego FastAPI zamiast Flask lub Django?” Świetne pytania!

**Oto dlaczego FastAPI jest idealny do tego, co budujemy:**  
- **Domyślnie async**: Może obsługiwać wiele żądań AI jednocześnie bez zacięć  
- **Automatyczna dokumentacja**: Odwiedź `/docs`, aby zobaczyć piękną, interaktywną dokumentację API za darmo  
- **Wbudowana walidacja**: Wykrywa błędy zanim wywołają problemy  
- **Błyskawiczna wydajność**: Jeden z najszybszych frameworków Python  
- **Nowoczesny Python**: Korzysta z najnowszych i najlepszych funkcji Pythona  

**A oto dlaczego w ogóle potrzebujemy backendu:**  

**Bezpieczeństwo**: Twój klucz API do AI jest jak hasło – jeśli umieścisz go w frontendowym JavaScript, każdy, kto zobaczy kod źródłowy Twojej strony, może go ukraść i wykorzystać Twoje kredyty AI. Backend trzyma poufne dane w bezpiecznym miejscu.

**Ograniczanie częstotliwości i kontrola**: Backend pozwala kontrolować, jak często użytkownicy mogą robić zapytania, implementować uwierzytelnianie użytkowników i dodawać logi do śledzenia użycia.

**Przetwarzanie danych**: Możesz chcieć zapisywać rozmowy, filtrować nieodpowiednie treści lub łączyć wiele usług AI. Logika ta żyje właśnie w backendzie.

**Architektura przypomina model klient-serwer:**  
- **Frontend**: warstwa interfejsu użytkownika do interakcji  
- **Backend API**: warstwa przetwarzania i kierowania żądań  
- **Usługa AI**: zewnętrzne przetwarzanie i generowanie odpowiedzi  
- **Zmienne środowiskowe**: bezpieczna konfiguracja i przechowywanie danych uwierzytelniających  

### Zrozumienie przepływu żądanie-odpowiedź

Prześledźmy, co się dzieje, gdy użytkownik wysyła wiadomość:

```mermaid
sequenceDiagram
    participant User as 👤 Użytkownik
    participant Frontend as 🌐 Frontend
    participant API as 🔧 Serwer FastAPI
    participant AI as 🤖 Usługa AI
    
    User->>Frontend: Wpisuje "Cześć AI!"
    Frontend->>API: POST /hello {"message": "Cześć AI!"}
    Note over API: Weryfikuje żądanie<br/>Dodaje prompt systemowy
    API->>AI: Wysyła sformatowane żądanie
    AI->>API: Zwraca odpowiedź AI
    Note over API: Przetwarza odpowiedź<br/>Rejestruje rozmowę
    API->>Frontend: {"response": "Cześć! W czym mogę pomóc?"}
    Frontend->>User: Wyświetla wiadomość AI
```  
**Zrozumienie każdego kroku:**  
1. **Interakcja użytkownika**: Osoba wpisuje wiadomość w interfejsie czatu  
2. **Przetwarzanie frontendu**: JavaScript przechwytuje wejście i formatuje je jako JSON  
3. **Walidacja API**: FastAPI automatycznie weryfikuje żądanie przy pomocy modeli Pydantic  
4. **Integracja AI**: Backend dodaje kontekst (polecenie systemowe) i wywołuje usługę AI  
5. **Obsługa odpowiedzi**: API odbiera odpowiedź AI i może ją zmodyfikować  
6. **Wyświetlanie frontendu**: JavaScript pokazuje odpowiedź w interfejsie czatu  

### Zrozumienie architektury API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Witaj AI!"}
    FastAPI->>AI Function: call_llm(wiadomość, system_prompt)
    AI Function->>GitHub Models: zapytanie API
    GitHub Models->>AI Function: odpowiedź AI
    AI Function->>FastAPI: tekst odpowiedzi
    FastAPI->>Frontend: {"response": "Cześć! Jak mogę pomóc?"}
```  
```mermaid
flowchart TD
    A[Wprowadzanie danych przez użytkownika] --> B[Weryfikacja na froncie]
    B --> C[Żądanie HTTP POST]
    C --> D[Router FastAPI]
    D --> E[Walidacja Pydantic]
    E --> F[Wywołanie funkcji AI]
    F --> G[API modeli GitHub]
    G --> H[Przetwarzanie odpowiedzi]
    H --> I[Odpowiedź JSON]
    I --> J[Aktualizacja frontendu]
    
    subgraph "Warstwa bezpieczeństwa"
        K[Middleware CORS]
        L[Zmienne środowiskowe]
        M[Obsługa błędów]
    end
    
    D --> K
    F --> L
    H --> M
```  
### Tworzenie aplikacji FastAPI

Zbudujmy nasze API krok po kroku. Utwórz plik o nazwie `api.py` z następującym kodem FastAPI:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Konfiguracja logowania
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Utwórz aplikację FastAPI
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Konfiguracja CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Skonfiguruj odpowiednio dla produkcji
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modele Pydantic do walidacji żądań/odpowiedzi
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
        # Wyodrębnij i zwaliduj wiadomość
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Wywołaj usługę AI (uwaga: call_llm powinno być asynchroniczne dla lepszej wydajności)
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
  
**Zrozumienie implementacji FastAPI:**  
- **Importuje** FastAPI dla nowoczesnej funkcjonalności web frameworka oraz Pydantic do walidacji danych  
- **Tworzy** automatyczną dokumentację API (dostępną pod `/docs` podczas działania serwera)  
- **Włącza** middleware CORS, by pozwolić zapytaniom frontendu z różnych źródeł  
- **Definiuje** modele Pydantic do automatycznej walidacji i dokumentacji zapytań/odpowiedzi  
- **Używa** endpointów async dla lepszej wydajności przy współbieżnych zapytaniach  
- **Wprowadza** odpowiednie kody statusu HTTP i obsługę błędów z HTTPException  
- **Zawiera** strukturalne logowanie do monitoringu i debugowania  
- **Zapewnia** endpoint "health check" do monitorowania statusu usługi  

**Kluczowe zalety FastAPI w porównaniu do tradycyjnych frameworków:**  
- **Automatyczna walidacja**: modele Pydantic gwarantują integralność danych przed przetworzeniem  
- **Interaktywna dokumentacja**: odwiedź `/docs` po automatycznie wygenerowaną, testowalną dokumentację API  
- **Bezpieczeństwo typów**: wskazówki typów Pythona zapobiegają błędom w czasie działania i poprawiają jakość kodu  
- **Wsparcie async**: obsługuje wiele zapytań AI równocześnie bez blokowania  
- **Wydajność**: znacznie szybsze przetwarzanie żądań dla aplikacji czasu rzeczywistego  

### Zrozumienie CORS: Strażnik bezpieczeństwa sieci

CORS (Cross-Origin Resource Sharing) to jak strażnik bezpieczeństwa w budynku, który sprawdza, czy odwiedzający mają pozwolenie na wejście. Zrozummy, dlaczego to jest ważne i jak wpływa na Twoją aplikację.

#### Czym jest CORS i dlaczego istnieje?

**Problem**: Wyobraź sobie, że każda strona mogłaby wysyłać zapytania do Twojego banku w Twoim imieniu bez Twojej zgody. To byłaby katastrofa bezpieczeństwa! Przeglądarki domyślnie tego zabraniają poprzez "politykę tego samego źródła".

**Polityka tego samego źródła**: Przeglądarki pozwalają wykonywać zapytania tylko do tej samej domeny, portu i protokołu, z których został załadowany dokument.

**Analogicznie do rzeczywistości**: To jak ochrona budynku mieszkalnego – domyślnie tylko mieszkańcy (to samo źródło) mają dostęp. Jeśli chcesz wpuścić przyjaciela (inne źródło), musisz wyraźnie powiedzieć ochronie, że jest zaproszony.

#### CORS w Twoim środowisku programistycznym

Podczas developmentu frontend i backend działają na różnych portach:  
- Frontend: `http://localhost:3000` (lub file:// jeśli otwierasz HTML bez serwera)  
- Backend: `http://localhost:5000`  

Są to uważane za „inne źródła”, mimo że działają na tym samym komputerze!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # To mówi przeglądarkom: „Inne źródła mogą wykonywać żądania do tego API”
```
  
**Co robi konfiguracja CORS w praktyce:**  
- **Dodaje** specjalne nagłówki HTTP do odpowiedzi API, które mówią przeglądarce „to żądanie z innego pochodzenia jest dozwolone”  
- **Obsługuje** zapytania „preflight” (przeglądarki czasem sprawdzają uprawnienia zanim wyślą właściwe zapytanie)  
- **Zapobiega** błędowi „blocked by CORS policy” w konsoli Twojej przeglądarki  

#### Bezpieczeństwo CORS: Development kontra produkcja

```python
# 🚨 Rozwój: Zezwala na WSZYSTKIE pochodzenia (wygodne, ale niebezpieczne)
CORS(app)

# ✅ Produkcja: Zezwalaj tylko na konkretną domenę frontendu
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Zaawansowane: Różne pochodzenia dla różnych środowisk
if app.debug:  # Tryb rozwoju
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Tryb produkcji
    CORS(app, origins=["https://yourdomain.com"])
```
  
**Dlaczego to ważne**: W trakcie tworzenia `CORS(app)` jest jak zostawienie otwartych drzwi – wygodne, ale niebezpieczne. W produkcji chcesz precyzyjnie określić, które strony mogą się łączyć z Twoim API.

#### Typowe scenariusze i rozwiązania CORS

| Scenariusz | Problem | Rozwiązanie |
|------------|----------|-------------|
| **Lokalny rozwój** | Frontend nie może dotrzeć do backendu | Dodaj CORSMiddleware do FastAPI |
| **GitHub Pages + Heroku** | Wdrożony frontend nie może połączyć się z API | Dodaj adres GitHub Pages do pochodzeń CORS |
| **Własna domena** | Błędy CORS w produkcji | Zaktualizuj pochodzenia CORS, aby odpowiadały Twojej domenie |
| **Aplikacja mobilna** | Aplikacja nie może połączyć się z API webowym | Dodaj domenę aplikacji lub ostrożnie użyj `*` |

**Wskazówka**: Możesz sprawdzić nagłówki CORS w narzędziach developerskich przeglądarki, w zakładce Sieć. Szukaj nagłówków typu `Access-Control-Allow-Origin` w odpowiedzi.

### Obsługa błędów i walidacja

Zauważ, że nasze API zawiera odpowiednią obsługę błędów:

```python
# Sprawdź, czy otrzymaliśmy wiadomość
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**Kluczowe zasady walidacji:**  
- **Sprawdza** wymagane pola przed przetworzeniem żądań  
- **Zwraca** znaczące komunikaty o błędach w formacie JSON  
- **Używa** odpowiednich kodów statusu HTTP (400 dla złych żądań)  
- **Daje** jasną informację zwrotną, która pomaga frontendowym deweloperom debugować problemy  

## Konfiguracja i uruchamianie backendu

Teraz, gdy mamy integrację AI i serwer FastAPI, uruchommy wszystko. Proces konfiguracji obejmuje instalację zależności Pythona, ustawienie zmiennych środowiskowych i uruchomienie serwera w trybie deweloperskim.

### Konfiguracja środowiska Python

Ustawmy środowisko programistyczne w Pythonie. Wirtualne środowiska są jak podejście projektu Manhattan – każdy projekt ma własną, odizolowaną przestrzeń z konkretnymi narzędziami i zależnościami, zapobiegając konfliktom między projektami.

```bash
# Przejdź do katalogu backendu
cd backend

# Utwórz wirtualne środowisko (jak stworzenie czystego pokoju dla Twojego projektu)
python -m venv venv

# Aktywuj je (Linux/Mac)
source ./venv/bin/activate

# Na Windows użyj:
# venv\Scripts\activate

# Zainstaluj dobre rzeczy
pip install openai fastapi uvicorn python-dotenv
```
  
**Co właśnie zrobiliśmy:**  
- **Utworzyliśmy** naszą własną bańkę Pythona, w której możemy instalować pakiety bez wpływu na inne projekty  
- **Aktywowaliśmy** ją, dzięki czemu terminal wie, aby używać tego konkretnego środowiska  
- **Zainstalowaliśmy** podstawowe pakiety: OpenAI dla magii AI, FastAPI do API webowego, Uvicorn do uruchomienia serwera oraz python-dotenv do bezpiecznego zarządzania sekretami  

**Wyjaśnienie kluczowych zależności:**  
- **FastAPI**: nowoczesny, szybki framework webowy z automatyczną dokumentacją API  
- **Uvicorn**: błyskawiczny serwer ASGI, który uruchamia aplikacje FastAPI  
- **OpenAI**: oficjalna biblioteka do GitHub Models i integracji z API OpenAI  
- **python-dotenv**: bezpieczne ładowanie zmiennych środowiskowych z plików .env  

### Konfiguracja środowiska: jak zachować bezpieczeństwo sekretów

Zanim uruchomimy API, porozmawiajmy o jednej z najważniejszych lekcji w tworzeniu aplikacji webowych: jak naprawdę utrzymać swoje sekrety w tajemnicy. Zmienne środowiskowe to jak sejf, do którego ma dostęp tylko Twoja aplikacja.

#### Czym są zmienne środowiskowe?

**Pomyśl o zmiennych środowiskowych jak o skrytce bankowej** – wkładasz tam cenne rzeczy, a klucz do niej masz tylko Ty (i Twoja aplikacja). Zamiast pisać poufne dane bezpośrednio w kodzie (gdzie każdy może je zobaczyć), trzymasz je bezpiecznie w środowisku.

**Oto różnica:**  
- **Zły sposób**: Pisać hasło na karteczce i przykleić do monitora  
- **Dobry sposób**: Przechowywać hasło w menedżerze haseł, do którego masz tylko Ty dostęp  

#### Dlaczego zmienne środowiskowe są ważne

```python
# 🚨 NIGDY TEGO NIE RÓB - klucz API widoczny dla wszystkich
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Każdy może go ukraść!
    base_url="https://models.github.ai/inference"
)

# ✅ RÓB TO - klucz API przechowywany bezpiecznie
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Tylko twoja aplikacja ma do tego dostęp
    base_url="https://models.github.ai/inference"
)
```
  
**Co się dzieje, gdy wkleisz sekrety na sztywno:**  
1. **Dostęp w kontroli wersji**: Każdy, kto ma dostęp do repozytorium Git, widzi Twój klucz API  
2. **Repozytoria publiczne**: Jeśli wypchniesz kod na GitHub, Twój klucz jest widoczny dla całego internetu  
3. **Współpraca zespołowa**: Inni programiści pracujący nad projektem mają dostęp do Twojego osobistego klucza API  
4. **Naruszenia bezpieczeństwa**: Jeśli ktoś ukradnie Twój klucz API, może korzystać z Twoich kredytów AI  

#### Ustawianie pliku środowiskowego

Utwórz plik `.env` w katalogu backendu. Ten plik przechowuje Twoje sekrety lokalnie:

```bash
# plik .env - Ten plik NIGDY nie powinien być zatwierdzany do Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**Zrozumienie pliku .env:**  
- **Jeden sekret na linię** w formacie `KLUCZ=wartość`  
- **Brak spacji** wokół znaku równości  
- **Brak konieczności cudzysłowów** wokół wartości (zwykle)  
- **Komentarze** zaczynają się od `#`  

#### Tworzenie osobistego tokenu dostępu do GitHub

Twój token GitHub to specjalne hasło, które daje Twojej aplikacji uprawnienia do korzystania z usług AI GitHub:

**Krok po kroku tworzenie tokenu:**  
1. **Wejdź do ustawień GitHub** → Developer settings → Personal access tokens → Tokens (classic)  
2. **Kliknij „Generate new token (classic)”**  
3. **Ustaw datę wygaśnięcia** (30 dni do testowania, dłużej do produkcji)  
4. **Wybierz zakresy**: zaznacz „repo” i inne potrzebne uprawnienia  
5. **Wygeneruj token** i natychmiast go skopiuj (nie zobaczysz go ponownie!)  
6. **Wklej do pliku .env**  

```bash
# Przykład, jak wygląda Twój token (to jest fałszywe!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### Ładowanie zmiennych środowiskowych w Pythonie

```python
import os
from dotenv import load_dotenv

# Załaduj zmienne środowiskowe z pliku .env
load_dotenv()

# Teraz możesz bezpiecznie uzyskać do nich dostęp
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**Co robi ten kod:**  
- **Ładuje** Twój plik .env i udostępnia zmienne dla Pythona  
- **Sprawdza**, czy wymagany token istnieje (dobra obsługa błędów!)  
- **Zwraca jasny błąd**, jeśli token jest brakujący  
- **Używa** tokenu bezpiecznie, bez ujawniania go w kodzie  

#### Bezpieczeństwo Gita: plik .gitignore

Twój plik `.gitignore` mówi Gitowi, których plików nigdy nie śledzić ani nie wysyłać:

```bash
# .gitignore - Dodaj te linie
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**Dlaczego to istotne**: Po dodaniu `.env` do `.gitignore`, Git będzie ignorować ten plik, zapobiegając przypadkowemu wysłaniu tajemnic na GitHub.

#### Różne środowiska, różne sekrety

Profesjonalne aplikacje używają różnych kluczy API dla różnych środowisk:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**Dlaczego to ważne**: Nie chcesz, aby Twoje eksperymenty w dewelopmencie wpływały na produkcyjny limit użycia AI, i chcesz mieć różny poziom bezpieczeństwa w różnych środowiskach.

### Uruchamianie serwera deweloperskiego: ożywienie FastAPI
Teraz nadchodzi ekscytujący moment – uruchomienie serwera deweloperskiego FastAPI i zobaczenie, jak integracja AI ożywa! FastAPI używa Uvicorna, błyskawicznego serwera ASGI, zaprojektowanego specjalnie do asynchronicznych aplikacji w Pythonie.

#### Zrozumienie procesu uruchamiania serwera FastAPI

```bash
# Metoda 1: Bezpośrednie uruchomienie Pythona (z automatycznym przeładowaniem)
python api.py

# Metoda 2: Bezpośrednie użycie Uvicorn (więcej kontroli)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Kiedy uruchamiasz to polecenie, dzieje się za kulisami:

**1. Python ładuje Twoją aplikację FastAPI**:
- Importuje wszystkie wymagane biblioteki (FastAPI, Pydantic, OpenAI itd.)
- Wczytuje zmienne środowiskowe z pliku `.env`
- Tworzy instancję aplikacji FastAPI z automatyczną dokumentacją

**2. Uvicorn konfiguruje serwer ASGI**:
- Wiąże się z portem 5000 z obsługą asynchronicznych zapytań
- Ustawia routing z automatyczną walidacją
- Włącza hot reload do celów deweloperskich (restart przy zmianach plików)
- Generuje interaktywną dokumentację API

**3. Serwer zaczyna nasłuchiwać**:
- W terminalu pojawia się: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Serwer może obsługiwać wiele współbieżnych zapytań AI
- Twoje API jest gotowe z automatyczną dokumentacją pod `http://localhost:5000/docs`

#### Co powinieneś zobaczyć, gdy wszystko działa

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Zrozumienie wyjścia FastAPI:**
- **Will watch for changes**: Włączony auto-reload do pracy deweloperskiej
- **Uvicorn running**: Aktywny szybki serwer ASGI
- **Started reloader process**: Monitor plików do automatycznych restartów
- **Application startup complete**: Aplikacja FastAPI pomyślnie zainicjalizowana
- **Interactive docs available**: Odwiedź `/docs` aby zobaczyć automatyczną dokumentację API

#### Testowanie FastAPI: Wielorakie potężne metody

FastAPI oferuje kilka wygodnych sposobów testowania API, w tym automatyczną interaktywną dokumentację:

**Metoda 1: Interaktywna dokumentacja API (zalecana)**
1. Otwórz przeglądarkę i przejdź do `http://localhost:5000/docs`
2. Zobaczysz interfejs Swagger UI z dokumentacją wszystkich endpointów
3. Kliknij na `/hello` → „Try it out” → wpisz testową wiadomość → „Execute”
4. Zobacz odpowiedź bezpośrednio w przeglądarce w odpowiednim formacie

**Metoda 2: Podstawowy test w przeglądarce**
1. Wejdź na `http://localhost:5000` (endpoint root)
2. Wejdź na `http://localhost:5000/health` aby sprawdzić stan serwera
3. To potwierdzi, że Twój serwer FastAPI działa poprawnie

**Metoda 2: Test z linii poleceń (zaawansowany)**
```bash
# Test za pomocą curl (jeśli dostępne)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Oczekiwana odpowiedź:
# {"response": "Cześć! Jestem twoim asystentem AI. Jak mogę ci dzisiaj pomóc?"}
```

**Metoda 3: Skrypt testowy w Pythonie**
```python
# test_api.py - Utwórz ten plik, aby przetestować swoje API
import requests
import json

# Przetestuj punkt końcowy API
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Rozwiązywanie typowych problemów podczas startu

| Komunikat błędu | Co oznacza | Jak naprawić |
|-----------------|------------|--------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI nie jest zainstalowane | Uruchom `pip install fastapi uvicorn` w swoim virtualenv |
| `ModuleNotFoundError: No module named 'uvicorn'` | Serwer ASGI nie jest zainstalowany | Uruchom `pip install uvicorn` w swoim virtualenv |
| `KeyError: 'GITHUB_TOKEN'` | Zmienna środowiskowa nie znaleziona | Sprawdź plik `.env` i wywołanie `load_dotenv()` |
| `Address already in use` | Port 5000 jest zajęty | Zakończ inne procesy korzystające z portu 5000 lub zmień port |
| `ValidationError` | Dane zapytania nie zgadzają się z modelem Pydantic | Sprawdź format zapytania, zgodny ze schematem |
| `HTTPException 422` | Niemożliwy do przetworzenia byt | Walidacja zapytania nie powiodła się, sprawdź `/docs` dla poprawnego formatu |
| `OpenAI API error` | Błąd uwierzytelniania usługi AI | Zweryfikuj, czy token GitHub jest poprawny i ma odpowiednie uprawnienia |

#### Najlepsze praktyki w dewelopmencie

**Hot Reloading**: FastAPI z Uvicornem zapewnia automatyczne przeładowanie przy zapisie zmian w plikach Python. Możesz modyfikować kod i natychmiast testować bez ręcznego restartowania.

```python
# Wyraźnie włącz hot reloading
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True włącza hot reload
```

**Logowanie w trakcie dewelopmentu**: Dodaj logowanie, aby rozumieć, co się dzieje:

```python
import logging

# Skonfiguruj logowanie
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

**Dlaczego logowanie pomaga**: Podczas developmentu widzisz, jakie zapytania przychodzą, jak AI na nie odpowiada i gdzie pojawiają się błędy. To znacznie przyspiesza debugowanie.

### Konfiguracja dla GitHub Codespaces: łatwy rozwój w chmurze

GitHub Codespaces to jak posiadanie potężnego komputera programistycznego w chmurze, do którego masz dostęp z każdej przeglądarki. Pracując w Codespaces, należy wykonać kilka dodatkowych kroków, aby backend był dostępny dla frontend.

#### Zrozumienie sieci w Codespaces

W lokalnym środowisku deweloperskim wszystko działa na tym samym komputerze:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (lub file://)

W Codespaces środowisko działa na serwerach GitHub, więc „localhost” ma inne znaczenie. GitHub automatycznie tworzy publiczne adresy URL dla Twoich usług, ale trzeba je odpowiednio skonfigurować.

#### Krok po kroku: konfiguracja Codespaces

**1. Uruchom serwer backend**:
```bash
cd backend
python api.py
```

Zobaczysz znany komunikat startu FastAPI/Uvicorn, ale działa on wewnątrz środowiska Codespace.

**2. Skonfiguruj widoczność portu**:
- Znajdź zakładkę „Ports” w dolnym panelu w VS Code
- Znajdź port 5000 na liście
- Kliknij prawym przyciskiem myszy na port 5000
- Wybierz „Port Visibility” → „Public”

**Dlaczego udostępnić publicznie?** Domyślnie porty Codespace są prywatne (dostępne tylko dla Ciebie). Udostępnienie publiczne pozwala, aby frontend (działający w przeglądarce) komunikował się z backendem.

**3. Pobierz swój publiczny URL**:
Po udostępnieniu portu otrzymasz URL w formie:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Zaktualizuj konfigurację frontendu**:
```javascript
// W swoim frontendowym pliku app.js zaktualizuj BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Zrozumienie adresów Codespace

Adresy Codespace mają przewidywalny wzorzec:
```
https://[codespace-name]-[port].app.github.dev
```

**Rozbijając na części:**
- `codespace-name`: Unikalny identyfikator Twojego Codespace (zazwyczaj zawiera nazwę użytkownika)
- `port`: Numer portu, na którym działa usługa (5000 dla naszej aplikacji FastAPI)
- `app.github.dev`: domena GitHub dla aplikacji Codespace

#### Testowanie konfiguracji Codespace

**1. Testuj backend bezpośrednio**:
Otwórz swój publiczny URL w nowej karcie przeglądarki. Powinieneś zobaczyć:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Testuj przy pomocy narzędzi developerskich przeglądarki**:
```javascript
// Otwórz konsolę przeglądarki i przetestuj swoje API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs dewelopment lokalny

| Aspekt | Dewelopment lokalny | GitHub Codespaces |
|--------|---------------------|-------------------|
| **Czas konfiguracji** | Dłuższy (instalacja Pythona, zależności) | Natychmiastowy (środowisko wstępnie skonfigurowane) |
| **Dostęp do URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Konfiguracja portu** | Automatyczna | Ręczna (udostępnienie portów) |
| **Przechowywanie plików** | Maszyna lokalna | Repozytorium GitHub |
| **Współpraca** | Trudne do udostępniania środowiska | Łatwe udostępnienie linku do Codespace |
| **Zależność od internetu** | Tylko do wywołań API AI | Wymagana dla wszystkiego |

#### Wskazówki do pracy w Codespaces

**Zmienne środowiskowe w Codespaces**:
Twój plik `.env` działa identycznie w Codespaces, ale można również ustawiać zmienne bezpośrednio w Codespace:

```bash
# Ustaw zmienną środowiskową dla bieżącej sesji
export GITHUB_TOKEN="your_token_here"

# Lub dodaj do swojego .bashrc, aby była trwała
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Zarządzanie portami**:
- Codespaces automatycznie wykrywa, gdy aplikacja zaczyna nasłuchiwać na porcie
- Możesz przekazywać wiele portów jednocześnie (przydatne np. przy dodaniu bazy danych)
- Porty pozostają dostępne tak długo, jak Codespace działa

**Workflow developmentu**:
1. Wprowadzaj zmiany w kodzie w VS Code
2. FastAPI przeładuje się automatycznie (dzięki trybowi reload Uvicorna)
3. Testuj zmiany natychmiast przez publiczny URL
4. Zatwierdź i wypchnij zmiany, gdy będziesz gotowy

> 💡 **Przydatna wskazówka**: Zapisz w zakładkach swój backendowy URL Codespace podczas developmentu. Nazwy Codespace są stabilne, więc URL nie zmieni się dopóki korzystasz z tego samego Codespace.

## Tworzenie interfejsu czatu frontendowego: gdzie człowiek spotyka AI

Teraz zbudujemy interfejs użytkownika – część, która określa, jak ludzie będą wchodzić w interakcję z Twoim asystentem AI. Tak jak design oryginalnego iPhone’a, skupiamy się na tym, by złożona technologia była intuicyjna i naturalna w użyciu.

### Zrozumienie nowoczesnej architektury frontendu

Nasz interfejs czatu będzie tym, co nazywamy „aplikacją jednostronicową” lub SPA. Zamiast tradycyjnego podejścia, gdzie każdy klik powoduje załadowanie nowej strony, nasza aplikacja aktualizuje się płynnie i natychmiastowo:

**Stare strony**: jak czytanie papierowej książki – przewracasz nową stronę  
**Nasza aplikacja czatu**: jak używanie telefonu – wszystko płynie i aktualizuje się bez zakłóceń

```mermaid
graph TD
    A[Użytkownik Pisze Wiadomość] --> B[JavaScript Przechwytuje Wejście]
    B --> C[Waliduj i Formatuj Dane]
    C --> D[Wyślij do Backend API]
    D --> E[Wyświetl Stan Ładowania]
    E --> F[Odbierz Odpowiedź AI]
    F --> G[Aktualizuj Interfejs Czatu]
    G --> H[Gotowe na Następną Wiadomość]
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
    
    ChatApp --> DOM : manipuluje
    ChatApp --> FastAPI : wysyła żądania
```  
### Trzy filary tworzenia frontendu

Każda aplikacja frontendowa – od prostych stron po skomplikowane aplikacje typu Discord czy Slack – opiera się na trzech podstawowych technologiach. Można je traktować jako fundament wszystkiego, co widzisz i z czym wchodzisz w interakcję w sieci:

**HTML (Struktura)**: to Twój fundament  
- Określa, jakie elementy istnieją (przyciski, pola tekstowe, kontenery)  
- Nadaje znaczenie treści (np. to jest nagłówek, to jest formularz)  
- Tworzy podstawową strukturę, na której buduje się wszystko inne  

**CSS (Prezentacja)**: to twój projektant wnętrz  
- Sprawia, że wszystko wygląda pięknie (kolory, czcionki, układy)  
- Obsługuje różne rozmiary ekranów (telefon, laptop, tablet)  
- Tworzy płynne animacje i wizualne informacje zwrotne  

**JavaScript (Zachowanie)**: to twój mózg  
- Reaguje na działania użytkownika (kliknięcia, pisanie, przewijanie)  
- Komunikuje się z backendem i aktualizuje stronę  
- Sprawia, że wszystko jest interaktywne i dynamiczne  

**Pomysł architektoniczny:**  
- **HTML**: plan konstrukcyjny (definiujący przestrzenie i relacje)  
- **CSS**: estetyka i projekt środowiska (wygląd i doświadczenie użytkownika)  
- **JavaScript**: systemy mechaniczne (funkcjonalność i interaktywność)  

### Dlaczego nowoczesna architektura JavaScript jest ważna

Nasza aplikacja czatu będzie używać nowoczesnych wzorców JavaScript, które zobaczysz w profesjonalnych aplikacjach. Zrozumienie tych pojęć pomoże ci rozwijać się jako programista:

**Architektura oparta na klasach**: zorganizujemy kod w klasy, które są jak szablony obiektów  
**Async/Await**: nowoczesny sposób obsługi operacji zajmujących czas (np. wywołania API)  
**Programowanie zdarzeniowe**: aplikacja reaguje na akcje użytkownika (kliknięcia, wciśnięcia klawiszy), a nie działa w pętli  
**Manipulacja DOM**: dynamiczna aktualizacja zawartości strony na podstawie interakcji i odpowiedzi API  

### Struktura projektu

Utwórz katalog frontend z taką uporządkowaną strukturą:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Zrozumienie architektury:**  
- **Oddziela** strukturę (HTML), zachowanie (JavaScript) i prezentację (CSS)  
- **Utrzymuje** prostą strukturę plików, łatwą do nawigacji i modyfikacji  
- **Podąża** za najlepszymi praktykami webdevu w zakresie organizacji i utrzymywalności  

### Budowa fundamentu HTML: struktura semantyczna dla dostępności

Zacznijmy od struktury HTML. Nowoczesny rozwój stron podkreśla „semantyczny HTML” – używanie elementów, które jasno opisują swój cel, a nie tylko wygląd. Dzięki temu aplikacja jest dostępna dla czytników ekranu, wyszukiwarek i innych narzędzi.

**Dlaczego semantyczny HTML jest ważny**: wyobraź sobie, że opisujesz swoją aplikację czatu komuś przez telefon. Powiedziałbyś „jest nagłówek z tytułem, główna część z rozmowami, oraz formularz u dołu do pisania wiadomości”. Semantyczny HTML używa elementów odpowiadających temu naturalnemu opisowi.

Utwórz plik `index.html` z taką przemyślaną strukturą:

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

**Zrozumienie każdego elementu HTML i jego roli:**

#### Struktura dokumentu  
- **`<!DOCTYPE html>`**: mówi przeglądarce, że to nowoczesny HTML5  
- **`<html lang="en">`**: określa język strony dla czytników ekranu i narzędzi tłumaczących  
- **`<meta charset="UTF-8">`**: zapewnia poprawne kodowanie znaków dla tekstu międzynarodowego  
- **`<meta name="viewport"...>`**: czyni stronę responsywną mobilnie przez kontrolę powiększania i skali  

#### Elementy semantyczne  
- **`<header>`**: wyraźnie identyfikuje górną sekcję z tytułem i opisem  
- **`<main>`**: wyznacza główną zawartość (miejsce, gdzie są rozmowy)  
- **`<form>`**: semantycznie poprawny dla wprowadzania danych, ułatwia nawigację klawiaturą  

#### Funkcje dostępności  
- **`role="log"`**: mówi czytnikom ekranu, że to miejsce z chronologicznym logiem wiadomości  
- **`aria-live="polite"`**: informuje czytniki o nowych wiadomościach bez przerywania  
- **`aria-label`**: zapewnia opisowe etykiety dla elementów formularza  
- **`required`**: przeglądarka weryfikuje, że użytkownik wpisał wiadomość przed wysłaniem  

#### Integracja CSS i JavaScript  
- **`class`**: punkty zaczepienia dla stylów CSS (np. `chat-container`, `input-group`)  
- **`id`**: pozwala JavaScriptowi na znalezienie i manipulację konkretnymi elementami  
- **Umieszczenie skryptu**: plik JS ładowany na końcu, by HTML załadował się pierwszy  

**Dlaczego ta struktura działa:**  
- **Logiczny przepływ**: nagłówek → główna zawartość → formularz odpowiada naturalnemu porządkowi czytania  
- **Dostępność klawiaturą**: możliwe przechodzenie tabulatorem przez wszystkie interaktywne elementy  
- **Przyjazność dla czytników ekranu**: jasne punkty orientacyjne i opisy dla osób niedowidzących  
- **Responsywność mobilna**: meta viewport umożliwia responsywny design  
- **Stopniowe ulepszanie**: działa nawet jeśli CSS lub JavaScript się nie załadują  

### Dodawanie interaktywnego JavaScriptu: logika nowoczesnej aplikacji webowej

Zbudujmy teraz JavaScript, który ożywi nasz interfejs czatu. Użyjemy nowoczesnych wzorców JavaScript, które spotkasz w profesjonalnym tworzeniu stron internetowych, w tym klas ES6, async/await oraz programowania zdarzeniowego.

#### Zrozumienie nowoczesnej architektury JavaScript

Zamiast pisać kod proceduralny (ciąg funkcji wykonywanych po kolei), stworzymy **architekturę opartą na klasach**. Pomyśl o klasie jak o planie, według którego można tworzyć obiekty – tak jak plan architekta może służyć do budowy wielu domów.

**Dlaczego używać klas w aplikacjach webowych?**
- **Organizacja**: Wszystkie powiązane funkcje są pogrupowane razem
- **Wielokrotne użycie**: Można utworzyć wiele instancji czatu na tej samej stronie
- **Łatwość utrzymania**: Łatwiej debugować i modyfikować konkretne funkcje
- **Standard profesjonalny**: Ten wzorzec jest używany we frameworkach jak React, Vue i Angular

Stwórz `app.js` z tym nowoczesnym, dobrze poukładanym JavaScriptem:

```javascript
// app.js - Logika nowoczesnej aplikacji czatu

class ChatApp {
    constructor() {
        // Pobierz referencje do elementów DOM, które będziemy manipulować
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Skonfiguruj tutaj URL swojego backendu
        this.BASE_URL = "http://localhost:5000"; // Zaktualizuj to dla swojego środowiska
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Ustaw nasłuchiwacze zdarzeń podczas tworzenia aplikacji czatu
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Nasłuchuj przesłania formularza (gdy użytkownik kliknie Wyślij lub naciśnie Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Również nasłuchuj klawisza Enter w polu input (lepsze UX)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Zapobiegaj odświeżaniu strony przez formularz
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Nie wysyłaj pustych wiadomości
        
        // Zapewnij użytkownikowi informację zwrotną, że coś się dzieje
        this.setLoading(true);
        
        // Dodaj wiadomość użytkownika do czatu natychmiast (optymistyczny interfejs)
        this.appendMessage(messageText, "user");
        
        // Wyczyść pole input, aby użytkownik mógł wpisać kolejną wiadomość
        this.input.value = '';
        
        try {
            // Wywołaj API AI i poczekaj na odpowiedź
            const reply = await this.callAPI(messageText);
            
            // Dodaj odpowiedź AI do czatu
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Ponownie włącz interfejs niezależnie od powodzenia lub niepowodzenia
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

// Zainicjalizuj aplikację czatu podczas ładowania strony
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Zrozumienie każdego konceptu JavaScript

**Struktura klasy ES6**:
```javascript
class ChatApp {
    constructor() {
        // To działa, gdy tworzysz nową instancję ChatApp
        // To jest jak funkcja "setup" dla twojego czatu
    }
    
    methodName() {
        // Metody to funkcje należące do klasy
        // Mogą uzyskiwać dostęp do właściwości klasy za pomocą "this"
    }
}
```

**Wzorzec Async/Await**:
```javascript
// Stary sposób (piekło callbacków):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Nowoczesny sposób (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Programowanie zdarzeniowe**:
Zamiast ciągłego sprawdzania, czy coś się wydarzyło, „nasłuchujemy” zdarzeń:
```javascript
// Po przesłaniu formularza, uruchom handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Po naciśnięciu klawisza Enter również uruchom handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulacja DOM**:
```javascript
// Twórz nowe elementy
const messageElement = document.createElement("div");

// Modyfikuj ich właściwości
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Dodaj do strony
this.messages.appendChild(messageElement);
```

#### Bezpieczeństwo i najlepsze praktyki

**Zapobieganie XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // To automatycznie zabezpiecza HTML
    return div.innerHTML;
}
```

**Dlaczego to ważne**: Jeśli użytkownik wpisze `<script>alert('hack')</script>`, ta funkcja zapewnia, że zostanie to wyświetlone jako tekst, a nie wykonane jako kod.

**Obsługa błędów**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Pokaż przyjazny dla użytkownika błąd zamiast przerywać działanie aplikacji
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Uwagi dotyczące doświadczenia użytkownika**:
- **Optymistyczny interfejs**: Natychmiast dodaj wiadomość użytkownika, nie czekaj na odpowiedź serwera
- **Stany ładowania**: Wyłącz przyciski i pokaż "Wysyłanie..." podczas oczekiwania
- **Automatyczne przewijanie**: Zachowaj widoczność najnowszych wiadomości
- **Walidacja wprowadzenia**: Nie wysyłaj pustych wiadomości
- **Skróty klawiaturowe**: Klawisz Enter wysyła wiadomość (jak w prawdziwych czatach)

#### Zrozumienie przebiegu aplikacji

1. **Ładowanie strony** → wywołanie zdarzenia `DOMContentLoaded` → utworzenie `new ChatApp()`
2. **Wykonanie konstruktora** → pobranie referencji do elementów DOM → ustawienie nasłuchiwania zdarzeń
3. **Użytkownik wpisuje wiadomość** → naciska Enter lub klika Wyślij → uruchomienie `handleSubmit`
4. **handleSubmit** → walidacja danych → pokazanie stanu ładowania → wywołanie API
5. **Odpowiedź API** → dodanie wiadomości AI do czatu → ponowne włączenie interfejsu
6. **Gotowość do następnej wiadomości** → użytkownik może kontynuować czatowanie

Ta architektura jest skalowalna – łatwo można dodać funkcje takie jak edycja wiadomości, przesyłanie plików czy wiele wątków rozmów bez przepisywania podstawowej struktury.

### 🎯 Sprawdzenie edukacyjne: Nowoczesna architektura frontendowa

**Zrozumienie architektury**: Zaimplementowałeś kompletną aplikację jednostronicową używając nowoczesnych wzorców JavaScript. To reprezentuje profesjonalny poziom tworzenia frontendu.

**Opanowane kluczowe koncepcje**:
- **Architektura klas ES6**: Zorganizowany, łatwy do utrzymania kod
- **Wzorce Async/Await**: Nowoczesne programowanie asynchroniczne
- **Programowanie zdarzeniowe**: Responsywny design interfejsu użytkownika
- **Najlepsze praktyki bezpieczeństwa**: Zapobieganie XSS i walidacja danych

**Połączenie z branżą**: Wzorce, które poznałeś (architektura klasowa, operacje asynchroniczne, manipulacja DOM) są fundamentem nowoczesnych frameworków jak React, Vue czy Angular. Budujesz z takim samym podejściem architektonicznym jak aplikacje produkcyjne.

**Pytanie do refleksji**: Jak rozszerzyłbyś tę aplikację czatu, aby obsługiwała wiele konwersacji lub uwierzytelnianie użytkowników? Zastanów się nad zmianami architektonicznymi i jak ewoluowałaby struktura klas.

### Stylizowanie interfejsu czatu

Stwórzmy teraz nowoczesny, atrakcyjny wizualnie interfejs czatu za pomocą CSS. Dobra stylizacja sprawia, że aplikacja wygląda profesjonalnie i poprawia doświadczenie użytkownika. Użyjemy nowoczesnych funkcji CSS, takich jak Flexbox, CSS Grid oraz właściwości niestandardowych, aby uzyskać responsywny i dostępny design.

Stwórz `styles.css` z poniższymi kompleksowymi stylami:

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

**Zrozumienie architektury CSS:**
- **Używa** niestandardowych właściwości CSS (zmiennych) dla spójnego tematu i łatwej konserwacji
- **Implementuje** układ Flexbox dla responsywnego designu i właściwego wyrównania
- **Zawiera** płynne animacje pojawiania się wiadomości bez rozpraszania
- **Zapewnia** wizualne wyróżnienie między wiadomościami użytkownika, odpowiedziami AI i stanami błędów
- **Wspiera** projekt responsywny działający na komputerach i urządzeniach mobilnych
- **Uwzględnia** dostępność zgodnie z preferencjami zmniejszenia ruchu i odpowiednim kontrastem
- **Oferuje** wsparcie dla trybu ciemnego zgodnego z preferencjami systemowymi użytkownika

### Konfiguracja adresu URL backendu

Ostatnim krokiem jest aktualizacja `BASE_URL` w twoim JavaScripcie, aby odpowiadał adresowi twojego serwera backendowego:

```javascript
// Do lokalnego rozwoju
this.BASE_URL = "http://localhost:5000";

// Dla GitHub Codespaces (zamień na swój rzeczywisty URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Ustalanie adresu backendu:**
- **Rozwój lokalny**: Użyj `http://localhost:5000` jeśli zarówno frontend, jak i backend działają lokalnie
- **Codespaces**: Znajdź swój URL backendu na karcie Ports po udostępnieniu portu 5000
- **Produkcja**: Zamień na swój faktyczny domenowy adres przy wdrażaniu na hosting

> 💡 **Wskazówka testowa**: Możesz testować backend bezpośrednio, odwiedzając root URL w przeglądarce. Powinieneś zobaczyć komunikat powitalny z twojego serwera FastAPI.



## Testowanie i wdrażanie

Teraz, gdy masz już gotowe komponenty frontend i backend, przetestujmy, czy wszystko działa razem i przyjrzyjmy się opcjom wdrożenia, aby udostępnić twojego asystenta innym.

### Lokalny proces testowania

Postępuj zgodnie z tymi krokami, aby przetestować pełną aplikację:

```mermaid
graph TD
    A[Uruchom serwer backend] --> B[Skonfiguruj zmienne środowiskowe]
    B --> C[Przetestuj punkty końcowe API]
    C --> D[Otwórz frontend w przeglądarce]
    D --> E[Przetestuj funkcjonalność czatu]
    E --> F[Debuguj wszelkie problemy]
```
**Proces testowania krok po kroku:**

1. **Uruchom serwer backend**:
   ```bash
   cd backend
   source venv/bin/activate  # lub venv\Scripts\activate w systemie Windows
   python api.py
   ```

2. **Sprawdź czy API działa**:
   - Otwórz `http://localhost:5000` w przeglądarce
   - Powinieneś zobaczyć powitalny komunikat z serwera FastAPI

3. **Otwórz frontend**:
   - Przejdź do katalogu frontendu
   - Otwórz `index.html` w przeglądarce
   - Lub użyj rozszerzenia Live Server w VS Code dla lepszego doświadczenia deweloperskiego

4. **Przetestuj funkcjonalność czatu**:
   - Wpisz wiadomość w polu input
   - Kliknij „Wyślij” lub naciśnij Enter
   - Sprawdź, czy AI odpowiednio reaguje
   - Sprawdź konsolę przeglądarki pod kątem błędów JavaScript

### Rozwiązywanie najczęstszych problemów

| Problem | Objawy | Rozwiązanie |
|---------|----------|-------------|
| **Błąd CORS** | Frontend nie może połączyć się z backendem | Upewnij się, że FastAPI CORSMiddleware jest poprawnie skonfigurowany |
| **Błąd klucza API** | Odpowiedzi 401 Unauthorized | Sprawdź zmienną środowiskową `GITHUB_TOKEN` |
| **Połączenie odrzucone** | Błędy sieci w frontendzie | Zweryfikuj adres backendu i czy serwer Flask działa |
| **Brak odpowiedzi AI** | Pusta lub błędna odpowiedź | Sprawdź logi backendu pod kątem limitów API lub problemów z autentykacją |

**Typowe kroki debugowania:**
- **Sprawdź** konsolę narzędzi deweloperskich przeglądarki pod kątem błędów JavaScript
- **Zweryfikuj** zakładkę Network czy są poprawne żądania i odpowiedzi API
- **Przejrzyj** wyjście terminala backendu pod kątem błędów Pythona lub API
- **Potwierdź** że zmienne środowiskowe są prawidłowo załadowane i dostępne

## 📈 Twój harmonogram opanowania tworzenia aplikacji AI

```mermaid
timeline
    title Kompletny Proces Tworzenia Aplikacji AI
    
    section Podstawy AI
        Zrozumienie Generatywnej AI
            : Opanowanie koncepcji rozpoznawania wzorców
            : Mistrzostwo w kontroli parametrów AI
            : Nauka technik inżynierii zapytań
        
        Integracja Modeli GitHub
            : Poruszanie się po platformach usług AI
            : Bezpieczne zarządzanie uwierzytelnianiem
            : Optymalizacja parametrów modeli
    
    section Backend Development
        Python API Architecture
            : Build FastAPI applications
            : Implement async operations
            : Create secure endpoints
        
        AI Service Integration
            : Connect to external AI APIs
            : Handle rate limiting
            : Implement error boundaries
    
    section Frontend Mastery
        Modern JavaScript Patterns
            : Master ES6 class architecture
            : Implement async/await flows
            : Build responsive interfaces
        
        Real-time User Experience
            : Create dynamic chat interfaces
            : Handle loading states
            : Optimize user interactions
    
    section Production Readiness
        Security & Performance
            : Implement secure token management
            : Prevent XSS vulnerabilities
            : Optimize API performance
        
        Professional Deployment
            : Build scalable architectures
            : Create maintainable code
            : Document development processes
```
**🎓 Kamień milowy ukończenia**: Udało ci się zbudować kompletną aplikację napędzaną sztuczną inteligencją, używając tych samych technologii i wzorców architektonicznych, które napędzają nowoczesnych asystentów AI. Te umiejętności to skrzyżowanie tradycyjnego web developmentu i zaawansowanej integracji AI.

**🔄 Kolejne możliwości**:
- Gotowość do eksploracji zaawansowanych frameworków AI (LangChain, LangGraph)
- Przygotowanie do budowy multimodalnych aplikacji AI (tekst, obraz, głos)
- Zdolność implementacji baz danych wektorowych i systemów wyszukiwania
- Podstawy uczenia maszynowego i dopasowywania modeli AI

## Wyzwanie GitHub Copilot Agent 🚀

Użyj trybu Agent, aby wykonać następujące zadanie:

**Opis:** Ulepsz asystenta czatu, dodając historię rozmów i trwałość wiadomości. To wyzwanie pomoże ci zrozumieć, jak zarządzać stanem w aplikacjach czatu oraz jak implementować przechowywanie danych dla lepszego doświadczenia użytkownika.

**Zadanie:** Zmodyfikuj aplikację czatu, aby zawierała historię konwersacji, która przetrwa sesje. Dodaj funkcjonalność zapisywania wiadomości czatu w local storage, wyświetl historii rozmowy przy ładowaniu strony oraz przycisk „Wyczyść historię”. Zaimplementuj także wskaźniki pisania oraz znaczniki czasu wiadomości, aby czat był bardziej realistyczny.

Dowiedz się więcej o [trybie agenta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## Zadanie: Zbuduj swojego osobistego asystenta AI

Teraz stworzysz swoją własną implementację asystenta AI. Zamiast po prostu kopiować kod z tutoriala, to okazja, aby zastosować poznane koncepcje tworząc coś, co odzwierciedla twoje zainteresowania i przypadki użycia.

### Wymagania projektu

Ustawmy projekt z czystą, zorganizowaną strukturą:

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

### Podstawowe zadania implementacyjne

**Backend Development:**
- **Przejmij** nasz kod FastAPI i dostosuj go do własnych potrzeb
- **Stwórz** unikalną osobowość AI – może pomocnik kulinarny, kreatywny partner pisarski lub kolega do nauki?
- **Dodaj** solidną obsługę błędów, aby aplikacja nie zawieszała się w przypadku problemów
- **Napisz** jasną dokumentację dla każdego, kto chce zrozumieć działanie twojego API

**Frontend Development:**
- **Zbuduj** interfejs czatu, który jest intuicyjny i przyjazny
- **Napisz** czysty, nowoczesny JavaScript, z którego będziesz dumny przed innymi programistami
- **Zaprojektuj** autorską stylizację, która oddaje osobowość twojej AI – zabawna i kolorowa? Czysta i minimalistyczna? W pełni według twojego pomysłu!
- **Upewnij się**, że działa świetnie zarówno na telefonach, jak i komputerach

**Wymagania personalizacji:**
- **Wybierz** unikalne imię i osobowość swojego asystenta AI – coś, co odzwierciedla twoje zainteresowania lub problemy, które chcesz rozwiązać
- **Dostosuj** wizualny design do klimatu swojego asystenta
- **Napisz** przyciągający uwagę komunikat powitalny, który zachęci do rozmowy
- **Testuj** swojego asystenta różnymi typami pytań, aby zobaczyć, jak odpowiada

### Pomysły na rozszerzenia (opcjonalne)

Chcesz podnieść swój projekt na wyższy poziom? Oto kilka ciekawych propozycji do eksploracji:

| Funkcja | Opis | Umiejętności, które poćwiczysz |
|---------|------|-------------------------------|
| **Historia wiadomości** | Zapamiętywanie rozmów nawet po odświeżeniu strony | Praca z localStorage, obsługa JSON |
| **Wskaźniki pisania** | Pokazywanie „AI pisze...” podczas oczekiwania na odpowiedź | Animacje CSS, programowanie asynchroniczne |
| **Znaczniki czasu wiadomości** | Wyświetlanie czasu wysłania każdej wiadomości | Formatowanie daty/czasu, projektowanie UX |
| **Eksport czatu** | Pozwól użytkownikom pobrać rozmowę | Obsługa plików, eksport danych |
| **Przełączanie motywu** | Tryb jasny/ciemny | Zmienne CSS, preferencje użytkownika |
| **Wprowadzanie głosowe** | Dodaj funkcję mowy na tekst | API Web, dostępność |

### Testowanie i dokumentacja

**Zapewnienie jakości:**
- **Testuj** aplikację różnymi typami danych i przypadkami brzegowymi
- **Zweryfikuj** responsywny design na różnych rozmiarach ekranów
- **Sprawdź** dostępność za pomocą nawigacji klawiaturą i czytnikami ekranu
- **Zatwierdź** HTML i CSS pod kątem zgodności ze standardami

**Wymagania dokumentacyjne:**
- **Napisz** README.md wyjaśniający projekt i sposób uruchomienia
- **Dołącz** zrzuty ekranu z działania interfejsu czatu
- **Udokumentuj** unikalne funkcje lub własne modyfikacje
- **Podaj** jasne instrukcje instalacji dla innych programistów

### Wytyczne dotyczące zgłoszenia

**Materiały projektowe:**
1. Komplet folderu projektu ze wszystkimi kodami źródłowymi
2. README.md z opisem projektu i instrukcjami konfiguracji
3. Zrzuty ekranu pokazujące działanie twojego asystenta czatu
4. Krótkie podsumowanie tego, czego się nauczyłeś i jakie napotkałeś wyzwania

**Kryteria oceny:**
- **Funkcjonalność**: Czy asystent czatu działa zgodnie z oczekiwaniami?
- **Jakość kodu**: Czy kod jest dobrze zorganizowany, komentowany i łatwy do utrzymania?
- **Projekt**: Czy interfejs jest atrakcyjny wizualnie i przyjazny dla użytkownika?
- **Kreatywność**: Jak unikalna i spersonalizowana jest twoja implementacja?
- **Dokumentacja**: Czy instrukcje instalacji są jasne i kompletne?

> 💡 **Wskazówka sukcesu**: Zacznij od podstawowych wymagań, potem dodaj rozszerzenia, gdy wszystko działa. Skup się najpierw na dopracowaniu podstawowej funkcjonalności przed zaawansowanymi funkcjami.

## Rozwiązanie

[Solution](./solution/README.md)

## Dodatkowe wyzwania

Chcesz podnieść swojego asystenta AI na jeszcze wyższy poziom? Wypróbuj te zaawansowane wyzwania, które pogłębią twoją wiedzę na temat integracji AI i tworzenia stron www.

### Personalizacja osobowości

Prawdziwa magia dzieje się, gdy nadajesz swojemu asystentowi unikalną osobowość. Eksperymentuj z różnymi podpowiedziami systemowymi, by tworzyć specjalistycznych asystentów:

**Przykład profesjonalnego asystenta:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Przykład kreatywnego pomocnika pisarskiego:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Przykład technicznego mentora:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Ulepszenia frontendu

Przemień interfejs czatu tymi wizualnymi i funkcjonalnymi dodatkami:

**Zaawansowane możliwości CSS:**
- **Implementuj** płynne animacje i przejścia wiadomości
- **Dodaj** niestandardowe bąbelki czatu z kształtami CSS i gradientami
- **Stwórz** animację wskaźnika pisania, gdy AI "myśli"
- **Zaprojektuj** reakcje emoji lub system oceniania wiadomości

**Ulepszenia JavaScript:**
- **Dodaj** skróty klawiaturowe (Ctrl+Enter do wysyłania, Escape do czyszczenia)
- **Implementuj** wyszukiwanie i filtrowanie wiadomości
- **Stwórz** funkcję eksportu rozmowy (do tekstu lub JSON)
- **Dodaj** autosave do localStorage, aby zapobiec utracie wiadomości

### Zaawansowana integracja AI

**Wiele osobowości AI:**
- **Dodaj** dropdown do przełączania między różnymi osobowościami AI
- **Zapisuj** preferencje użytkownika w localStorage
- **Implementuj** przełączanie kontekstu, które utrzymuje płynność rozmowy

**Inteligentne funkcje odpowiedzi:**
- **Dodaj** świadomość kontekstu rozmowy (AI zapamiętuje poprzednie wiadomości)
- **Wdrażaj** inteligentne sugestie oparte na temacie rozmowy  
- **Twórz** przyciski szybkich odpowiedzi dla najczęściej zadawanych pytań

> 🎯 **Cel nauki**: Te dodatkowe wyzwania pomagają zrozumieć zaawansowane wzorce tworzenia aplikacji webowych oraz techniki integracji AI używane w aplikacjach produkcyjnych.

## Podsumowanie i kolejne kroki

Gratulacje! Udało Ci się zbudować kompletną asystenta czatu zasilanego AI od podstaw. Ten projekt dał Ci praktyczne doświadczenie z nowoczesnymi technologiami webowymi oraz integracją AI – umiejętności, które zyskują na wartości we współczesnym świecie technologii.

### Co osiągnąłeś

W trakcie tej lekcji opanowałeś kilka kluczowych technologii i koncepcji:

**Backend Development:**
- **Zintegrowałeś** się z GitHub Models API dla funkcji AI  
- **Zbudowałeś** RESTful API używając Flask z właściwą obsługą błędów  
- **Wdrożyłeś** bezpieczną autoryzację korzystając ze zmiennych środowiskowych  
- **Skonfigurowałeś** CORS dla żądań między różnymi źródłami frontend i backend  

**Frontend Development:**
- **Stworzyłeś** responsywny interfejs czatu używając semantycznego HTML  
- **Wdrożyłeś** nowoczesny JavaScript z async/await oraz architekturą opartą na klasach  
- **Zap projektowałeś** atrakcyjny interfejs użytkownika z CSS Grid, Flexbox i animacjami  
- **Dodałeś** funkcje dostępności i zasady projektowania responsywnego  

**Full-Stack Integration:**
- **Połączyłeś** frontend i backend przez wywołania HTTP API  
- **Obsłużyłeś** interakcje w czasie rzeczywistym oraz asynchroniczny przepływ danych  
- **Wdrożyłeś** obsługę błędów i informacje zwrotne dla użytkownika w całej aplikacji  
- **Przetestowałeś** pełny workflow aplikacji od wprowadzenia danych przez użytkownika do odpowiedzi AI  

### Kluczowe wnioski edukacyjne

```mermaid
mindmap
  root((Umiejętności Aplikacji czatu AI))
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
Ten projekt wprowadził Cię w podstawy tworzenia aplikacji zasilanych AI, które są przyszłością tworzenia stron internetowych. Teraz rozumiesz, jak integrować możliwości AI w tradycyjnych aplikacjach webowych, tworząc angażujące doświadczenia użytkownika, które są inteligentne i responsywne.

### Zastosowania zawodowe

Umiejętności nabyte w tej lekcji są bezpośrednio zastosowane w nowoczesnej karierze programistycznej:

- **Full-stack development** używając nowoczesnych frameworków i API  
- **Integracja AI** w aplikacjach webowych i mobilnych  
- **Projektowanie i rozwój API** dla architektur mikroserwisów  
- **Tworzenie interfejsów użytkownika** z naciskiem na dostępność i responsywność  
- **Praktyki DevOps** w tym konfiguracja środowiska i wdrażanie  

### Kontynuowanie rozwoju AI

**Następne kroki w nauce:**  
- **Poznawaj** bardziej zaawansowane modele AI i API (GPT-4, Claude, Gemini)  
- **Ucz się** technik prompt engineering dla lepszych odpowiedzi AI  
- **Studiuj** zasady projektowania konwersacji i doświadczenia użytkownika chatbotów  
- **Badaj** bezpieczeństwo AI, etykę i odpowiedzialne praktyki rozwoju AI  
- **Buduj** bardziej złożone aplikacje z pamięcią konwersacji i świadomością kontekstu  

**Pomysły na zaawansowane projekty:**  
- Wieloosobowe pokoje czatu z moderacją AI  
- Chatboty obsługi klienta zasilane AI  
- Asystenci edukacyjni zindywidualizowanego nauczania  
- Kreatywni współautorzy pisania z różnymi osobowościami AI  
- Asystenci dokumentacji technicznej dla programistów  

## Zaczynamy z GitHub Codespaces

Chcesz wypróbować ten projekt w chmurowym środowisku deweloperskim? GitHub Codespaces oferuje kompletną konfigurację deweloperską w Twojej przeglądarce, idealną do eksperymentowania z aplikacjami AI bez konieczności lokalnej instalacji.

### Konfiguracja środowiska deweloperskiego

**Krok 1: Utwórz z szablonu**  
- **Przejdź** do repozytorium [Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Kliknij** "Use this template" w prawym górnym rogu (upewnij się, że jesteś zalogowany do GitHub)

![Create from template interface showing the green "Use this template" button](../../../translated_images/pl/template.67ad477109d29a2b.png)

**Krok 2: Uruchom Codespaces**  
- **Otwórz** utworzone repozytorium  
- **Kliknij** zielony przycisk "Code" i wybierz "Codespaces"  
- **Wybierz** "Create codespace on main", aby rozpocząć środowisko deweloperskie  

![Create codespace interface with options for launching cloud development environment](../../../translated_images/pl/codespace.bcecbdf5d2747d3d.png)

**Krok 3: Konfiguracja środowiska**  
Po załadowaniu Codespace uzyskasz dostęp do:  
- **Wstępnie zainstalowanego** Pythona, Node.js oraz wszystkich potrzebnych narzędzi developerskich  
- **Interfejsu VS Code** z rozszerzeniami do developmentu webowego  
- **Dostępu do terminala** do uruchamiania backend i frontend  
- **Przekierowywania portów** do testowania aplikacji  

**Co oferuje Codespaces:**  
- **Eliminuje** problemy z lokalną konfiguracją środowiska  
- **Zapewnia** spójne środowisko programistyczne na różnych urządzeniach  
- **Zawiera** prekonfigurowane narzędzia i rozszerzenia do tworzenia stron internetowych  
- **Oferuje** płynną integrację z GitHub do kontroli wersji i współpracy  

> 🚀 **Pro Tip**: Codespaces jest idealne do nauki i prototypowania aplikacji AI, ponieważ automatycznie zajmuje się całą złożoną konfiguracją środowiska, pozwalając skupić się na budowaniu i nauce, zamiast na problemach konfiguracyjnych.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy mieć na uwadze, że automatyczne przekłady mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy traktować jako źródło autorytatywne. W przypadku informacji o krytycznym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->