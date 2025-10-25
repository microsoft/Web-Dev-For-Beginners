<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T23:19:50+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "sr"
}
-->
# Изградите асистента за ћаскање уз помоћ вештачке интелигенције

Сећате ли се у серији Звездане стазе када је посада опуштено разговарала са рачунаром брода, постављала му сложена питања и добијала промишљене одговоре? Оно што је изгледало као чиста научна фантастика 1960-их, сада је нешто што можете сами да направите користећи веб технологије које већ познајете.

У овом упутству ћемо направити асистента за ћаскање са вештачком интелигенцијом користећи HTML, CSS, JavaScript и неку позадинску интеграцију. Открићете како исте вештине које сте до сада учили могу да се повежу са моћним AI сервисима који разумеју контекст и генеришу смислене одговоре.

Замислите AI као приступ огромној библиотеци која не само да може да пронађе информације, већ и да их синтетизује у кохерентне одговоре прилагођене вашим специфичним питањима. Уместо да претражујете хиљаде страница, добијате директне, контекстуалне одговоре.

Интеграција се дешава кроз познате веб технологије које раде заједно. HTML креира интерфејс за ћаскање, CSS се брине о визуелном дизајну, JavaScript управља интеракцијама корисника, а позадински API повезује све са AI сервисима. То је слично као када различити делови оркестра раде заједно да би створили симфонију.

У суштини, градимо мост између природне људске комуникације и машинске обраде. Научићете како да технички имплементирате интеграцију AI сервиса и дизајнерске обрасце који чине интеракције интуитивним.

До краја овог упутства, интеграција AI-а ће вам изгледати мање као мистериозан процес, а више као још један API са којим можете радити. Разумећете основне обрасце који покрећу апликације попут ChatGPT-а и Claude-а, користећи исте принципе веб развоја које сте већ учили.

Ево како ће изгледати ваш завршени пројекат:

![Интерфејс апликације за ћаскање који приказује разговор између корисника и асистента са вештачком интелигенцијом](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.sr.png)

## Разумевање AI-а: Од мистерије до мајсторства

Пре него што се упустимо у код, хајде да разумемо са чим радимо. Ако сте раније користили API-је, знате основни образац: пошаљите захтев, примите одговор.

AI API-ји следе сличну структуру, али уместо да преузимају унапред сачуване податке из базе, они генеришу нове одговоре на основу образаца научених из огромних количина текста. Замислите то као разлику између библиотечког каталога и знајућег библиотекара који може синтетизовати информације из више извора.

### Шта је заправо "Генеративна вештачка интелигенција"?

Размислите како је Розетски камен омогућио научницима да разумеју египатске хијероглифе проналазећи обрасце између познатих и непознатих језика. AI модели раде на сличан начин – проналазе обрасце у огромним количинама текста како би разумели како језик функционише, а затим користе те обрасце за генерисање одговарајућих одговора на нова питања.

**Да вам то објасним једноставним поређењем:**
- **Традиционална база података**: Као да тражите извод из матичне књиге рођених – увек добијате исти документ
- **Претраживач**: Као да питате библиотекара да пронађе књиге о мачкама – он вам показује шта је доступно
- **Генеративна AI**: Као да питате знајућег пријатеља о мачкама – он вам прича занимљиве ствари својим речима, прилагођене ономе што желите да знате

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Како AI модели уче (једноставна верзија)

AI модели уче кроз излагање огромним скуповима података који садрже текст из књига, чланака и разговора. Кроз овај процес, они идентификују обрасце у:
- Како су мисли структурисане у писаној комуникацији
- Које речи се обично појављују заједно
- Како разговори обично теку
- Контекстуалне разлике између формалне и неформалне комуникације

**То је слично начину на који археолози дешифрују древне језике**: анализирају хиљаде примера како би разумели граматику, вокабулар и културни контекст, и на крају постају способни да тумаче нове текстове користећи те научене обрасце.

### Зашто GitHub Models?

Користимо GitHub Models из веома практичног разлога – пружа нам приступ AI-у на нивоу предузећа без потребе да постављамо сопствену AI инфраструктуру (што, верујте ми, тренутно не желите да радите!). Замислите то као коришћење API-ја за временску прогнозу уместо да сами покушавате да предвидите време постављањем метеоролошких станица свуда.

То је у суштини "AI као услуга", а најбољи део? Бесплатно је за почетак, тако да можете експериментисати без бриге о великим трошковима.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Користићемо GitHub Models за нашу позадинску интеграцију, која пружа приступ професионалним AI могућностима кроз интерфејс прилагођен програмерима. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) служи као тестно окружење где можете експериментисати са различитим AI моделима и разумети њихове могућности пре него што их имплементирате у код.

![Интерфејс GitHub Models AI Playground-а са избором модела и простором за тестирање](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.sr.png)

**Ево шта чини овај playground тако корисним:**
- **Испробајте** различите AI моделе као што су GPT-4o-mini, Claude и други (све бесплатно!)
- **Тестирајте** своје идеје и упите пре него што напишете било какав код
- **Добијте** готове кодне исечке на вашем омиљеном програмском језику
- **Прилагодите** поставке као што су ниво креативности и дужина одговора да видите како утичу на резултате

Када се мало поиграте, само кликните на картицу "Code" и изаберите свој програмски језик да бисте добили код за имплементацију који вам је потребан.

![Избор у Playground-у који приказује опције за генерисање кода за различите програмске језике](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.sr.png)

## Постављање Python позадинске интеграције

Сада ћемо имплементирати AI интеграцију користећи Python. Python је одличан за AI апликације због своје једноставне синтаксе и моћних библиотека. Почећемо са кодом из GitHub Models playground-а, а затим га прерадити у функцију која се може поново користити и која је спремна за производњу.

### Разумевање основне имплементације

Када преузмете Python код из playground-а, добићете нешто што изгледа овако. Не брините ако вам се на први поглед чини компликовано – хајде да га разложимо део по део:

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

**Ево шта се дешава у овом коду:**
- **Увозимо** алатке које су нам потребне: `os` за читање променљивих окружења и `OpenAI` за комуникацију са AI-јем
- **Постављамо** OpenAI клијента да се повеже са GitHub-овим AI серверима уместо директно са OpenAI-јем
- **Аутентификујемо се** користећи посебан GitHub токен (о томе више касније!)
- **Структуришемо** наш разговор са различитим "улогама" – замислите то као постављање сцене за представу
- **Шаљемо** наш захтев AI-ју са неким параметрима за фино подешавање
- **Извлачимо** стварни текст одговора из свих података који се враћају

### Разумевање улога порука: Оквир за AI разговоре

AI разговори користе специфичну структуру са различитим "улогама" које имају одређене сврхе:

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

**Замислите то као режирање представе:**
- **Улога система**: Као сценска упутства за глумца – говори AI-ју како да се понаша, коју личност да има и како да одговара
- **Улога корисника**: Стварно питање или порука од особе која користи вашу апликацију
- **Улога асистента**: Одговор AI-ја (не шаљете ово, али се појављује у историји разговора)

**Аналогија из стварног живота**: Замислите да представљате пријатеља некоме на забави:
- **Порука система**: "Ово је моја пријатељица Сара, она је докторка која одлично објашњава медицинске концепте на једноставан начин"
- **Порука корисника**: "Можете ли ми објаснити како функционишу вакцине?"
- **Одговор асистента**: Сара одговара као љубазна докторка, а не као адвокат или кувар

### Разумевање AI параметара: Фино подешавање понашања одговора

Нумерички параметри у AI API позивима контролишу како ће модел генерисати одговоре. Ова подешавања вам омогућавају да прилагодите понашање AI-ја за различите намене:

#### Температура (0.0 до 2.0): Дугме за креативност

**Шта ради**: Контролише колико ће креативни или предвидљиви бити одговори AI-ја.

**Замислите то као ниво импровизације џез музичара:**
- **Температура = 0.1**: Свирање исте мелодије сваки пут (веома предвидљиво)
- **Температура = 0.7**: Додавање неких лепих варијација уз задржавање препознатљивости (уравнотежена креативност)
- **Температура = 1.5**: Потпуно експериментални џез са неочекиваним обртима (веома непредвидљиво)

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

#### Максимални број токена (1 до 4096+): Контролор дужине одговора

**Шта ради**: Поставља ограничење на то колико дугачак одговор AI може бити.

**Замислите токене као приближно еквивалентне речима** (отприлике 1 токен = 0.75 речи на енглеском):
- **max_tokens=50**: Кратко и јасно (као текстуална порука)
- **max_tokens=500**: Леп параграф или два
- **max_tokens=2000**: Детаљно објашњење са примерима

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

#### Top_p (0.0 до 1.0): Параметар фокуса

**Шта ради**: Контролише колико се AI фокусира на највероватније одговоре.

**Замислите AI са огромним речником, рангираним по томе колико је вероватна свака реч:**
- **top_p=0.1**: Узима у обзир само највероватнијих 10% речи (веома фокусирано)
- **top_p=0.9**: Узима у обзир 90% могућих речи (креативније)
- **top_p=1.0**: Узима у обзир све (максимална разноврсност)

**На пример**: Ако питате "Небо је обично..."
- **Низак top_p**: Скоро сигурно каже "плаво"
- **Висок top_p**: Може рећи "плаво", "облачно", "пространо", "променљиво", "прелепо" итд.

### Спајање свега: Комбинације параметара за различите намене

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

**Разумевање зашто су ови параметри важни**: Различите апликације захтевају различите типове одговора. Бот за корисничку подршку треба да буде конзистентан и чињеничан (ниска температура), док асистент за креативно писање треба да буде маштовит и разноврстан (висока температура). Разумевање ових параметара вам даје контролу над личношћу и стилом одговора вашег AI-ја.
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

**Разумевање ове побољшане функције:**
- **Прихвата** два параметра: упит корисника и опционалну поруку система
- **Пружа** подразумевану поруку система за опште понашање асистента
- **Користи** исправне Python типске наговештаје за бољу документацију кода
- **Враћа** само садржај одговора, што га чини лако употребљивим у нашем веб API-ју
- **Одржава** исте параметре модела за конзистентно понашање AI-ја

### Магија системских упита: Програмирање личности AI-ја

Ако параметри контролишу како AI размишља, системски упити контролишу ко AI мисли да јесте. Ово је заиста један од најзанимљивијих аспеката рада са AI-јем – у суштини, дајете AI-ју комплетну личност, ниво експертизе и стил комуникације.

**Замислите системске упите као одабир различитих глумаца за различите улоге**: Уместо да имате једног генеричког асистента, можете креирати специјализоване стручњаке за различите ситуације. Потребан вам је стрпљив учитељ? Креативни партнер за размишљање? Озбиљан пословни саветник? Само промените системски упит!

#### Зашто су системски упити тако моћни

Ево фасцинантног дела: AI модели су обучени на безброј разговора у којима људи усвајају различите улоге и нивое експертизе. Када AI-ју дате одређену улогу, то је као да укључите прекидач који активира све те научене обрасце.

**То је као методска глума за AI**: Реците глумцу "ти си мудри стари професор" и гледајте како аутоматски прилагођава свој став, вокабулар и манире. AI ради нешто изузетно слично са језичким обрасцима.

#### Креирање ефективних системских упита: Уметност и наука

**Анатомија одличног системског упита:**
1. **Улога/идентитет**: Ко је AI?
2. **Експертиза**: Шта зна?
3. **Стил комуникације**: Како говори?
4. **Специфична упутства**: На шта треба да се фокусира?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Примери системских упита са контекстом

Хајде да видимо како различити системски упити стварају потпуно различите личности AI-ја:

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

#### Гледање системских упита
**Ево зашто је FastAPI савршен за оно што градимо:**
- **Асинхрони рад по подразумеваном подешавању**: Може истовремено обрађивати више AI захтева без застоја
- **Аутоматска документација**: Посетите `/docs` и добијате лепу, интерактивну страницу са документацијом API-ја бесплатно
- **Уграђена валидација**: Проналази грешке пре него што изазову проблеме
- **Изузетно брз**: Један од најбржих Python оквира
- **Модеран Python**: Користи најновије и најбоље функције Python-а

**И ево зашто нам је уопште потребан бекенд:**

**Безбедност**: Ваш AI API кључ је као лозинка – ако га ставите у JavaScript на фронтенду, свако ко погледа изворни код вашег сајта може га украсти и користити ваше AI кредите. Бекенд чува осетљиве акредитиве безбедним.

**Ограничење брзине и контрола**: Бекенд вам омогућава да контролишете колико често корисници могу слати захтеве, имплементирате аутентификацију корисника и додате логовање за праћење употребе.

**Обрада података**: Можда ћете желети да сачувате разговоре, филтрирате непримерен садржај или комбинујете више AI услуга. Бекенд је место где се ова логика одвија.

**Архитектура подсећа на модел клијент-сервер:**
- **Фронтенд**: Слој корисничког интерфејса за интеракцију
- **Бекенд API**: Слој за обраду захтева и рутирање
- **AI услуга**: Спољашња обрада и генерисање одговора
- **Енвиронмент променљиве**: Сигурно складиштење конфигурације и акредитива

### Разумевање тока захтева и одговора

Пратимо шта се дешава када корисник пошаље поруку:

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

**Разумевање сваког корака:**
1. **Интеракција корисника**: Особа куца у интерфејсу за ћаскање
2. **Обрада на фронтенду**: JavaScript хвата унос и форматира га као JSON
3. **Валидација API-ја**: FastAPI аутоматски валидара захтев користећи Pydantic моделе
4. **Интеграција AI-а**: Бекенд додаје контекст (системски упит) и позива AI услугу
5. **Обрада одговора**: API прима одговор AI-а и може га модификовати ако је потребно
6. **Приказ на фронтенду**: JavaScript приказује одговор у интерфејсу за ћаскање

### Разумевање архитектуре API-ја

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

### Креирање FastAPI апликације

Хајде да корак по корак изградимо наш API. Направите датотеку под називом `api.py` са следећим FastAPI кодом:

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

**Разумевање имплементације FastAPI-ја:**
- **Увоз** FastAPI за функционалност модерног веб оквира и Pydantic за валидацију података
- **Креирање** аутоматске документације API-ја (доступно на `/docs` када сервер ради)
- **Омогућавање** CORS middleware-а за омогућавање захтева са фронтенда са различитих порекла
- **Дефинисање** Pydantic модела за аутоматску валидацију захтева/одговора и документацију
- **Коришћење** асинхроних крајњих тачака за боље перформансе са истовременим захтевима
- **Имплементација** одговарајућих HTTP статус кодова и руковање грешкама са HTTPException
- **Укључивање** структурисаног логовања за праћење и отклањање грешака
- **Обезбеђивање** крајње тачке за проверу здравља сервиса

**Кључне предности FastAPI-ја у односу на традиционалне оквире:**
- **Аутоматска валидација**: Pydantic модели обезбеђују интегритет података пре обраде
- **Интерактивна документација**: Посетите `/docs` за аутоматски генерисану, тестабилну документацију API-ја
- **Типска сигурност**: Python типске назнаке спречавају грешке у раду и побољшавају квалитет кода
- **Подршка за асинхрони рад**: Обрада више AI захтева истовремено без блокирања
- **Перформансе**: Значајно бржа обрада захтева за апликације у реалном времену

### Разумевање CORS-а: Чувар безбедности веба

CORS (Cross-Origin Resource Sharing) је као чувар безбедности у згради који проверава да ли је посетиоцима дозвољен улаз. Хајде да разумемо зашто је то важно и како утиче на вашу апликацију.

#### Шта је CORS и зашто постоји?

**Проблем**: Замислите да било који сајт може слати захтеве вашем банкарском сајту у ваше име без ваше дозволе. То би био безбедносни кошмар! Прегледачи то спречавају подразумевано кроз "Политику истог порекла".

**Политика истог порекла**: Прегледачи дозвољавају веб страницама да шаљу захтеве само ка истом домену, порту и протоколу са којег су учитани.

**Аналогија из стварног живота**: То је као безбедност у стамбеној згради – само станари (исто порекло) могу приступити згради по подразумеваном подешавању. Ако желите да ваш пријатељ (друго порекло) посети, морате експлицитно рећи обезбеђењу да је то у реду.

#### CORS у вашем развојном окружењу

Током развоја, ваш фронтенд и бекенд раде на различитим портовима:
- Фронтенд: `http://localhost:3000` (или file:// ако директно отварате HTML)
- Бекенд: `http://localhost:5000`

Ово се сматра "различитим пореклима" иако су на истом рачунару!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Шта CORS конфигурација ради у пракси:**
- **Додаје** посебне HTTP заглавља у одговоре API-ја која говоре прегледачима "овај захтев са различитим пореклом је дозвољен"
- **Рукује** "preflight" захтевима (прегледачи понекад проверавају дозволе пре слања стварног захтева)
- **Спречава** страшну грешку "blocked by CORS policy" у конзоли вашег прегледача

#### CORS безбедност: Развој наспрам продукције

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

**Зашто је ово важно**: У развоју, `CORS(app)` је као да оставите врата отворена – згодно, али небезбедно. У продукцији, желите да прецизно наведете који сајтови могу комуницирати са вашим API-јем.

#### Уобичајени сценарији CORS-а и решења

| Сценарио | Проблем | Решење |
|----------|---------|----------|
| **Локални развој** | Фронтенд не може да приступи бекенду | Додајте CORSMiddleware у FastAPI |
| **GitHub Pages + Heroku** | Деплојовани фронтенд не може да приступи API-ју | Додајте URL вашег GitHub Pages-а у CORS порекла |
| **Прилагођени домен** | CORS грешке у продукцији | Ажурирајте CORS порекла да одговарају вашем домену |
| **Мобилна апликација** | Апликација не може да приступи веб API-ју | Додајте домен ваше апликације или пажљиво користите `*` |

**Савет**: Можете проверити CORS заглавља у Developer Tools вашег прегледача под картицом Network. Потражите заглавља као што је `Access-Control-Allow-Origin` у одговору.

### Руковање грешкама и валидација

Приметите како наш API укључује правилно руковање грешкама:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Кључни принципи валидације:**
- **Проверава** обавезна поља пре обраде захтева
- **Враћа** смислене поруке о грешкама у JSON формату
- **Користи** одговарајуће HTTP статус кодове (400 за лоше захтеве)
- **Обезбеђује** јасне повратне информације за помоћ фронтенд програмерима у отклањању грешака

## Постављање и покретање вашег бекенда

Сада када имамо нашу AI интеграцију и FastAPI сервер спреман, хајде да све покренемо. Процес постављања укључује инсталирање Python зависности, конфигурисање енвиронмент променљивих и покретање вашег развојног сервера.

### Постављање Python окружења

Хајде да поставимо ваше Python развојно окружење. Виртуелна окружења су као приступ Манхатн пројекта – сваки пројекат добија свој изоловани простор са специфичним алатима и зависностима, спречавајући конфликте између различитих пројеката.

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

**Шта смо управо урадили:**
- **Креирали** свој мали Python балон где можемо инсталирати пакете без утицаја на било шта друго
- **Активирали** га тако да наш терминал зна да користи ово специфично окружење
- **Инсталирали** основне ствари: OpenAI за AI магију, FastAPI за наш веб API, Uvicorn за његово покретање и python-dotenv за сигурно управљање тајнама

**Кључне зависности објашњене:**
- **FastAPI**: Модеран, брз веб оквир са аутоматском документацијом API-ја
- **Uvicorn**: Изузетно брз ASGI сервер који покреће FastAPI апликације
- **OpenAI**: Званична библиотека за GitHub моделе и OpenAI API интеграцију
- **python-dotenv**: Сигурно учитавање енвиронмент променљивих из .env датотека

### Конфигурација окружења: Чување тајни безбедним

Пре него што покренемо наш API, морамо разговарати о једној од најважнијих лекција у веб развоју: како заиста чувати своје тајне. Енвиронмент променљиве су као сигурни трезор који само ваша апликација може приступити.

#### Шта су енвиронмент променљиве?

**Замислите енвиронмент променљиве као сигурну кутију за депоновање** – стављате своје вредне ствари унутра, и само ви (и ваша апликација) имате кључ да их извадите. Уместо да пишете осетљиве информације директно у свој код (где их буквално свако може видети), чувате их безбедно у окружењу.

**Ево разлике:**
- **Погрешан начин**: Писање ваше лозинке на лепљивој белешци и стављање на монитор
- **Прави начин**: Чување ваше лозинке у сигурном менаџеру лозинки који само ви можете приступити

#### Зашто су енвирonment променљиве важне

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

**Шта се дешава када директно унесете тајне:**
1. **Излагање верзионисању**: Свако ко има приступ вашем Git репозиторијуму види ваш API кључ
2. **Јавни репозиторијуми**: Ако га поставите на GitHub, ваш кључ је видљив целом интернету
3. **Дељење са тимом**: Други програмери који раде на вашем пројекту добијају приступ вашем личном API кључу
4. **Безбедносни пропусти**: Ако неко украде ваш API кључ, може користити ваше AI кредите

#### Постављање ваше .env датотеке

Креирајте `.env` датотеку у вашем бекенд директоријуму. Ова датотека локално чува ваше тајне:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Разумевање .env датотеке:**
- **Једна тајна по линији** у формату `KEY=value`
- **Без размака** око знака једнакости
- **Без наводника** око вредности (обично)
- **Коментари** почињу са `#`

#### Креирање вашег GitHub личног приступног токена

Ваш GitHub токен је као посебна лозинка која даје вашој апликацији дозволу да користи GitHub AI услуге:

**Корак-по-корак креирање токена:**
1. **Идите на GitHub Settings** → Developer settings → Personal access tokens → Tokens (classic)
2. **Кликните "Generate new token (classic)"**
3. **Поставите истек** (30 дана за тестирање, дуже за продукцију)
4. **Изаберите опсеге**: Означите "repo" и било које друге дозволе које су вам потребне
5. **Генеришите токен** и одмах га копирајте (не можете га поново видети!)
6. **Залепите у вашу .env датотеку**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Учитавање енвирonment променљивих у Python-у

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

**Шта овај код ради:**
- **Учитава** вашу .env датотеку и чини променљиве доступним Python-у
- **Проверава** да ли постоји потребан токен (добро руковање грешкама!)
- **Подиже** јасну грешку ако токен недостаје
- **Користи** токен безбедно без излагања у коду

#### Git безбедност: .gitignore датотека

Ваша `.gitignore` датотека говори Git-у које датотеке никада не треба пратити или отпремати:

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

**Зашто је ово кључно**: Када додате `.env` у `.gitignore`, Git ће игнорисати вашу датотеку окружења, спречавајући вас да случајно отпремите своје тајне на GitHub.

#### Различита окружења, различите тајне

Професионалне апликације користе различите API кључеве за различита окружења:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Зашто је ово важно**: Не желите да ваши експерименти у развоју утичу на вашу продукцијску AI квоту, и желите различите нивое безбедности за различита окружења.

### Покретање вашег развојног сервера: Оживљавање вашег FastAPI-ја

Сада долази узбудљив тренутак – покретање вашег FastAPI развојног сервера и гледање како ваша AI интеграција оживљава! FastAPI користи Uvicorn, изузетно брз ASGI сервер који је посебно дизајниран за асинхрони Python апликације.

#### Разумевање процеса покретања FastAPI сервера

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Када покренете ову команду, ево шта се дешава иза сцене:

**1. Python учитава вашу FastAPI апликацију**:
- Увоз свих потребних библиотека (FastAPI, Pydantic, OpenAI, итд.)
- Учитавање енвиронment променљивих из ваше `.env` датотеке
- Креирање FastAPI инстанце апликације са аутоматском документацијом

**2. Uvicorn конфигурише ASGI сервер**:
-
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

#### Решавање уобичајених проблема при покретању

| Порука о грешци | Шта значи | Како поправити |
|-----------------|-----------|----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI није инсталиран | Покрените `pip install fastapi uvicorn` у вашем виртуелном окружењу |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI сервер није инсталиран | Покрените `pip install uvicorn` у вашем виртуелном окружењу |
| `KeyError: 'GITHUB_TOKEN'` | Променљива окружења није пронађена | Проверите ваш `.env` фајл и позив `load_dotenv()` |
| `Address already in use` | Порт 5000 је заузет | Затворите друге процесе који користе порт 5000 или промените порт |
| `ValidationError` | Подаци захтева не одговарају Pydantic моделу | Проверите да ли формат вашег захтева одговара очекиваној шеми |
| `HTTPException 422` | Необрађени ентитет | Валидација захтева није успела, проверите `/docs` за исправан формат |
| `OpenAI API error` | Аутентификација AI услуге није успела | Проверите да ли је ваш GitHub токен исправан и да ли има одговарајуће дозволе |

#### Најбоље праксе за развој

**Аутоматско поновно учитавање**: FastAPI са Uvicorn-ом омогућава аутоматско поновно учитавање када сачувате измене у вашим Python фајловима. То значи да можете одмах тестирати измене без ручног поновног покретања.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Логовање за развој**: Додајте логовање да бисте разумели шта се дешава:

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

**Зашто логовање помаже**: Током развоја, можете видети тачно који захтеви стижу, како AI одговара и где се јављају грешке. Ово значајно убрзава процес отклањања грешака.

### Конфигурисање за GitHub Codespaces: Развој у облаку на једноставан начин

GitHub Codespaces је као да имате моћан рачунар за развој у облаку који можете да приступите из било ког претраживача. Ако радите у Codespaces-у, постоји неколико додатних корака како би ваш бекенд био доступан фронтенду.

#### Разумевање мрежне конфигурације Codespaces-а

У локалном развојном окружењу, све ради на истом рачунару:
- Бекенд: `http://localhost:5000`
- Фронтенд: `http://localhost:3000` (или file://)

У Codespaces-у, ваше развојно окружење ради на серверима GitHub-а, па "localhost" има другачије значење. GitHub аутоматски креира јавне URL-ове за ваше услуге, али их морате правилно конфигурисати.

#### Кораци за конфигурисање Codespaces-а

**1. Покрените ваш бекенд сервер**:
```bash
cd backend
python api.py
```

Видећете познату FastAPI/Uvicorn поруку о покретању, али приметићете да ради унутар Codespace окружења.

**2. Конфигуришите видљивост порта**:
- Потражите картицу "Ports" у доњем панелу VS Code-а
- Пронађите порт 5000 на листи
- Кликните десним тастером миша на порт 5000
- Изаберите "Port Visibility" → "Public"

**Зашто га учинити јавним?** Подразумевано, портови у Codespace-у су приватни (доступни само вама). Учинивши га јавним, омогућавате вашем фронтенду (који ради у претраживачу) да комуницира са вашим бекендом.

**3. Добијте ваш јавни URL**:
Након што учините порт јавним, видећете URL као:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Ажурирајте конфигурацију фронтенда**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Разумевање Codespace URL-ова

Codespace URL-ови следе предвидив образац:
```
https://[codespace-name]-[port].app.github.dev
```

**Објашњење:**
- `codespace-name`: Јединствени идентификатор за ваш Codespace (обично укључује ваше корисничко име)
- `port`: Број порта на коме ваша услуга ради (5000 за нашу FastAPI апликацију)
- `app.github.dev`: Домен GitHub-а за апликације у Codespace-у

#### Тестирање вашег Codespace подешавања

**1. Тестирајте директно бекенд**:
Отворите ваш јавни URL у новом прозору претраживача. Требало би да видите:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Тестирајте помоћу алатки за развој у претраживачу**:
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

#### Codespaces vs локални развој

| Аспект | Локални развој | GitHub Codespaces |
|--------|----------------|-------------------|
| **Време подешавања** | Дуже (инсталација Python-а, зависности) | Тренутно (унапред конфигурисано окружење) |
| **Приступ URL-у** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Конфигурација порта** | Аутоматска | Ручна (учинити портове јавним) |
| **Перзистенција фајлова** | Локални рачунар | GitHub репозиторијум |
| **Колаборација** | Тешко делити окружење | Лако делити линк Codespace-а |
| **Зависност од интернета** | Само за AI API позиве | Потребно за све |

#### Савети за развој у Codespace-у

**Променљиве окружења у Codespace-у**:
Ваш `.env` фајл ради исто у Codespace-у, али можете директно поставити променљиве окружења у Codespace-у:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Управљање портовима**:
- Codespaces аутоматски детектује када ваша апликација почне да слуша на порту
- Можете истовремено проследити више портова (корисно ако касније додате базу података)
- Портови остају доступни све док ваш Codespace ради

**Радни ток развоја**:
1. Измените код у VS Code-у
2. FastAPI се аутоматски поново учитава (захваљујући Uvicorn-овом режиму поновног учитавања)
3. Одмах тестирајте измене преко јавног URL-а
4. Направите commit и push када будете спремни

> 💡 **Савет**: Сачувајте ваш Codespace бекенд URL током развоја. Пошто су имена Codespace-а стабилна, URL се неће мењати све док користите исти Codespace.

## Креирање фронтенд интерфејса за ћаскање: Где се људи сусрећу са AI

Сада ћемо изградити кориснички интерфејс – део који одређује како људи комуницирају са вашим AI асистентом. Као што је дизајн оригиналног интерфејса iPhone-а, фокусираћемо се на то да сложену технологију учинимо интуитивном и природном за коришћење.

### Разумевање модерне архитектуре фронтенда

Наш интерфејс за ћаскање биће оно што називамо "апликација са једном страницом" или SPA. Уместо старомодног приступа где сваки клик учитава нову страницу, наша апликација се ажурира глатко и тренутно:

**Старе веб странице**: Као читање физичке књиге – окрећете потпуно нове странице
**Наша апликација за ћаскање**: Као коришћење телефона – све тече и ажурира се беспрекорно

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

### Три стуба фронтенд развоја

Свака фронтенд апликација – од једноставних веб страница до сложених апликација као што су Discord или Slack – изграђена је на три основне технологије. Замислите их као темељ свега што видите и са чим комуницирате на вебу:

**HTML (Структура)**: Ово је ваш темељ
- Одређује који елементи постоје (дугмад, текстуални оквири, контејнери)
- Додаје значење садржају (ово је наслов, ово је форма, итд.)
- Креира основну структуру на којој се све остало гради

**CSS (Презентација)**: Ово је ваш дизајнер ентеријера
- Чини све лепим (боје, фонтови, распореди)
- Прилагођава различите величине екрана (телефон, лаптоп, таблет)
- Креира глатке анимације и визуелне повратне информације

**JavaScript (Понашање)**: Ово је ваш мозак
- Реагује на оно што корисници раде (кликови, куцање, скроловање)
- Комуницира са вашим бекендом и ажурира страницу
- Чини све интерактивним и динамичним

**Замислите то као архитектонски дизајн:**
- **HTML**: Структурни план (дефинисање простора и односа)
- **CSS**: Естетски и дизајн окружења (визуелни стил и корисничко искуство)
- **JavaScript**: Механички системи (функционалност и интерактивност)

### Зашто је важна модерна архитектура JavaScript-а

Наша апликација за ћаскање користиће модерне JavaScript шаблоне које ћете видети у професионалним апликацијама. Разумевање ових концепата помоћи ће вам да напредујете као програмер:

**Архитектура заснована на класама**: Организоваћемо наш код у класе, што је као креирање планова за објекте
**Async/Await**: Модеран начин за обраду операција које трају (као што су API позиви)
**Програмирање засновано на догађајима**: Наша апликација реагује на акције корисника (кликови, притисци на тастере) уместо да ради у петљи
**Манипулација DOM-ом**: Динамично ажурирање садржаја веб странице на основу интеракција корисника и одговора API-ја

### Подешавање структуре пројекта

Креирајте директоријум за фронтенд са овако организованом структуром:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Разумевање архитектуре:**
- **Одвајање** између структуре (HTML), понашања (JavaScript) и презентације (CSS)
- **Одржавање** једноставне структуре фајлова која је лако прегледна и модификована
- **Праћење** најбољих пракси веб развоја за организацију и одрживост

### Изградња HTML основе: Семантичка структура за приступачност

Почнимо са HTML структуром. Модеран веб развој наглашава "семантички HTML" – коришћење HTML елемената који јасно описују своју сврху, а не само свој изглед. Ово чини вашу апликацију приступачном читачима екрана, претраживачима и другим алатима.

**Зашто је семантички HTML важан**: Замислите да описујете вашу апликацију за ћаскање некоме преко телефона. Рекли бисте "постоји заглавље са насловом, главни део где се појављују разговори и форма на дну за куцање порука." Семантички HTML користи елементе који одговарају овом природном опису.

Креирајте `index.html` са овако промишљено структурираним маркапом:

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

**Разумевање сваког HTML елемента и његове сврхе:**

#### Структура документа
- **`<!DOCTYPE html>`**: Означава претраживачу да је ово модеран HTML5
- **`<html lang="en">`**: Специфицира језик странице за читаче екрана и алатке за превођење
- **`<meta charset="UTF-8">`**: Осигурава правилно кодирање карактера за међународни текст
- **`<meta name="viewport"...>`**: Чини страницу мобилно прилагодљивом контролисањем зума и скале

#### Семантички елементи
- **`<header>`**: Јасно идентификује горњи део са насловом и описом
- **`<main>`**: Ознака за примарни део садржаја (где се дешавају разговори)
- **`<form>`**: Семантички исправно за унос корисника, омогућава правилну навигацију тастатуром

#### Карактеристике приступачности
- **`role="log"`**: Означава читачима екрана да овај део садржи хронолошки дневник порука
- **`aria-live="polite"`**: Најављује нове поруке читачима екрана без прекида
- **`aria-label`**: Пружа описне ознаке за контроле форме
- **`required`**: Претраживач проверава да ли корисници уносе поруку пре слања

#### Интеграција CSS-а и JavaScript-а
- **`class` атрибути**: Пружају куке за стилизовање у CSS-у (нпр. `chat-container`, `input-group`)
- **`id` атрибути**: Омогућавају JavaScript-у да пронађе и манипулише специфичним елементима
- **Постављање скрипте**: JavaScript фајл се учитава на крају како би HTML прво био учитан

**Зашто ова структура функционише:**
- **Логичан ток**: Заглавље → Главни садржај → Форма за унос одговара природном редоследу читања
- **Приступачно тастатуром**: Корисници могу да се крећу кроз све интерактивне елементе
- **Пријатељски за читаче екрана**: Јасне ознаке и описи за кориснике са оштећеним видом
- **Мобилно прилагодљиво**: Meta ознака за viewport омогућава прилагодљив дизајн
- **Прогресивно побољшање**: Ради чак и ако CSS или JavaScript не успеју да се учитају

### Додавање интерактивног JavaScript-а: Логика модерне веб апликације

Сада ћемо изградити JavaScript који оживљава наш интерфејс за ћаскање. Користићемо модерне JavaScript шаблоне које ћете срести у професионалном веб развоју, укључујући ES6 класе, async/await и програмирање засновано на догађајима.

#### Разумевање архитектуре модерног JavaScript-а

Уместо да пишемо процедурални код (низ функција које се извршавају редом), креираћемо **архитектуру засновану на класама**. Замислите класу као план за креирање објеката – као што план архитекте може бити коришћен за изградњу више кућа.

**Зашто користити класе за веб апликације?**
- **Организација**: Сва повезана функционалност је груписана
- **Поновна употреба**: Можете креирати више инстанци ћаскања на истој страници
- **Одрживост**: Лакше је отклонити грешке и модификовати специфичне функције
- **Професионални стандард**: Овај шаблон се користи у оквирима као што су React, Vue и Angular

Креирајте `app.js` са овако модерним, добро структурираним JavaScript-ом:

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

#### Разумевање свак
Ова архитектура је скалабилна – лако можете додати функције као што су уређивање порука, отпремање датотека или више нити разговора без преправљања основне структуре.

### Стилизација вашег интерфејса за ћаскање

Сада ћемо креирати модеран, визуелно привлачан интерфејс за ћаскање помоћу CSS-а. Добра стилизација чини вашу апликацију професионалном и побољшава укупно корисничко искуство. Користићемо модерне CSS функције као што су Flexbox, CSS Grid и прилагођене особине за одзиван и приступачан дизајн.

Креирајте `styles.css` са овим свеобухватним стиловима:

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

**Разумевање архитектуре CSS-а:**
- **Користи** прилагођене CSS особине (променљиве) за конзистентну тему и лако одржавање
- **Примењује** Flexbox распоред за одзиван дизајн и правилно поравнање
- **Укључује** глатке анимације за појаву порука без ометања
- **Обезбеђује** визуелну разлику између порука корисника, одговора AI-а и стања грешке
- **Подржава** одзиван дизајн који функционише и на десктоп и на мобилним уређајима
- **Разматра** приступачност са смањеним преференцијама кретања и правилним односима контраста
- **Нуди** подршку за тамни режим на основу корисничких системских преференција

### Конфигурисање URL-а вашег бекенда

Завршни корак је ажурирање `BASE_URL` у вашем JavaScript-у да одговара серверу вашег бекенда:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Одређивање URL-а вашег бекенда:**
- **Локални развој**: Користите `http://localhost:5000` ако покрећете и фронтенд и бекенд локално
- **Codespaces**: Пронађите URL вашег бекенда у картици Ports након што учините порт 5000 јавним
- **Продукција**: Замените са вашим стварним доменом приликом постављања на хостинг услугу

> 💡 **Савет за тестирање**: Можете директно тестирати ваш бекенд тако што ћете посетити коренски URL у вашем претраживачу. Требало би да видите поруку добродошлице са вашег FastAPI сервера.

## Тестирање и постављање

Сада када сте изградили и фронтенд и бекенд компоненте, хајде да тестирамо да све функционише заједно и истражимо опције за постављање како бисте поделили вашег асистента за ћаскање са другима.

### Радни ток локалног тестирања

Пратите ове кораке да тестирате вашу комплетну апликацију:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Процес тестирања корак по корак:**

1. **Покрените сервер вашег бекенда**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Проверите да API функционише**:
   - Отворите `http://localhost:5000` у вашем претраживачу
   - Требало би да видите поруку добродошлице са вашег FastAPI сервера

3. **Отворите ваш фронтенд**:
   - Идите у директоријум вашег фронтенда
   - Отворите `index.html` у вашем веб претраживачу
   - Или користите Live Server екстензију у VS Code-у за боље искуство развоја

4. **Тестирајте функционалност ћаскања**:
   - Унесите поруку у поље за унос
   - Кликните на "Пошаљи" или притисните Enter
   - Проверите да AI одговара на одговарајући начин
   - Проверите конзолу претраживача за било какве JavaScript грешке

### Решавање уобичајених проблема

| Проблем | Симптоми | Решење |
|---------|----------|----------|
| **CORS грешка** | Фронтенд не може да приступи бекенду | Уверите се да је FastAPI CORSMiddleware правилно конфигурисан |
| **Грешка API кључа** | 401 Unauthorized одговори | Проверите вашу `GITHUB_TOKEN` променљиву окружења |
| **Одбијена веза** | Мрежне грешке у фронтенду | Проверите URL бекенда и да ли Flask сервер ради |
| **Нема AI одговора** | Празни или грешком обележени одговори | Проверите логове бекенда за проблеме са квотом API-а или аутентификацијом |

**Уобичајени кораци за отклањање грешака:**
- **Проверава** конзолу Developer Tools претраживача за JavaScript грешке
- **Потврђује** да картица Network показује успешне API захтеве и одговоре
- **Прегледа** излаз терминала бекенда за Python грешке или проблеме са API-јем
- **Потврђује** да су променљиве окружења правилно учитане и доступне

## Изазов GitHub Copilot Agent 🚀

Користите Agent мод да завршите следећи изазов:

**Опис:** Унапредите асистента за ћаскање додавањем историје разговора и перзистенције порука. Овај изазов ће вам помоћи да разумете како да управљате стањем у апликацијама за ћаскање и имплементирате складиштење података за боље корисничко искуство.

**Задатак:** Измените апликацију за ћаскање да укључи историју разговора која се чува између сесија. Додајте функционалност за чување порука ћаскања у локалном складишту, приказ историје разговора приликом учитавања странице и дугме "Обриши историју". Такође, имплементирајте индикаторе куцања и временске ознаке порука како би искуство ћаскања било реалистичније.

Сазнајте више о [режиму агента](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) овде.

## Задатак: Направите свог личног AI асистента

Сада ћете креирати сопствену имплементацију AI асистента. Уместо да једноставно реплицирате код из туторијала, ово је прилика да примените концепте док градите нешто што одражава ваше интересе и случајеве употребе.

### Захтеви пројекта

Хајде да поставимо ваш пројекат са чистом, организованом структуром:

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

### Основни задаци имплементације

**Развој бекенда:**
- **Узмите** наш FastAPI код и прилагодите га себи
- **Креирајте** јединствену личност AI-а – можда корисног асистента за кување, креативног партнера за писање или помоћника за учење?
- **Додајте** солидно руковање грешкама како ваша апликација не би престала да ради када нешто крене наопако
- **Напишите** јасну документацију за свакога ко жели да разуме како ваш API функционише

**Развој фронтенда:**
- **Изградите** интерфејс за ћаскање који је интуитиван и пријатан
- **Напишите** чист, модеран JavaScript који бисте радо показали другим програмерима
- **Дизајнирајте** прилагођену стилизацију која одражава личност вашег AI-а – забавно и шарено? Чисто и минималистички? Потпуно је на вама!
- **Уверите се** да одлично функционише и на телефонима и на рачунарима

**Захтеви за персонализацију:**
- **Изаберите** јединствено име и личност за вашег AI асистента – можда нешто што одражава ваше интересе или проблеме које желите да решите
- **Прилагодите** визуелни дизајн да одговара вибрацији вашег асистента
- **Напишите** привлачну поруку добродошлице која ће подстаћи људе да започну ћаскање
- **Тестирајте** вашег асистента са различитим типовима питања да видите како реагује

### Идеје за унапређење (опционо)

Желите да подигнете свој пројекат на виши ниво? Ево неких занимљивих идеја за истраживање:

| Функција | Опис | Вештине које ћете вежбати |
|---------|-------------|------------------------|
| **Историја порука** | Памћење разговора чак и након освежавања странице | Рад са localStorage, JSON обрада |
| **Индикатори куцања** | Приказ "AI куца..." док чекате одговоре | CSS анимације, асинхроно програмирање |
| **Временске ознаке порука** | Приказ времена када је свака порука послата | Форматирање датума/времена, UX дизајн |
| **Извоз ћаскања** | Омогућите корисницима да преузму свој разговор | Руковање датотекама, извоз података |
| **Промена теме** | Пребацивање између светлог и тамног режима | CSS променљиве, корисничке преференције |
| **Гласовни унос** | Додајте функцију претварања говора у текст | Веб API-ји, приступачност |

### Тестирање и документација

**Осигурање квалитета:**
- **Тестирајте** вашу апликацију са различитим типовима уноса и граничним случајевима
- **Проверите** да ли одзиван дизајн функционише на различитим величинама екрана
- **Проверите** приступачност помоћу навигације тастатуром и читача екрана
- **Потврдите** HTML и CSS за усклађеност са стандардима

**Захтеви за документацију:**
- **Напишите** README.md који објашњава ваш пројекат и како га покренути
- **Укључите** снимке екрана вашег интерфејса за ћаскање у акцији
- **Документујте** све јединствене функције или прилагођавања која сте додали
- **Обезбедите** јасна упутства за постављање за друге програмере

### Упутства за предају

**Достављени материјали пројекта:**
1. Комплетан директоријум пројекта са свим изворним кодом
2. README.md са описом пројекта и упутствима за постављање
3. Снимци екрана који демонстрирају вашег асистента за ћаскање у акцији
4. Кратак осврт на оно што сте научили и са којим изазовима сте се суочили

**Критеријуми за евалуацију:**
- **Функционалност**: Да ли асистент за ћаскање функционише како је очекивано?
- **Квалитет кода**: Да ли је код добро организован, коментарисан и одржив?
- **Дизајн**: Да ли је интерфејс визуелно привлачан и пријатан за коришћење?
- **Креативност**: Колико је јединствена и персонализована ваша имплементација?
- **Документација**: Да ли су упутства за постављање јасна и комплетна?

> 💡 **Савет за успех**: Почните са основним захтевима, а затим додајте унапређења када све буде функционисало. Фокусирајте се на креирање полиране основне функционалности пре додавања напредних функција.

## Решење

[Решење](./solution/README.md)

## Додатни изазови

Спремни да подигнете вашег AI асистента на виши ниво? Испробајте ове напредне изазове који ће продубити ваше разумевање интеграције AI-а и веб развоја.

### Персонализација личности

Прави магија се дешава када вашем AI асистенту дате јединствену личност. Експериментишите са различитим системским упутствима да креирате специјализоване асистенте:

**Пример професионалног асистента:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Пример помоћника за креативно писање:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Пример техничког ментора:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Унапређења фронтенда

Трансфоришите ваш интерфејс за ћаскање уз помоћ ових визуелних и функционалних побољшања:

**Напредне CSS функције:**
- **Примените** глатке анимације и прелазе порука
- **Додајте** прилагођене дизајне балона за ћаскање са CSS облицима и градијентима
- **Креирајте** анимацију индикатора куцања за време када AI "размишља"
- **Дизајнирајте** емотиконе за реакције или систем оцењивања порука

**Унапређења JavaScript-а:**
- **Додајте** пречице на тастатури (Ctrl+Enter за слање, Escape за брисање уноса)
- **Имплементирајте** функцију претраге и филтрирања порука
- **Креирајте** функцију извоза разговора (преузимање као текст или JSON)
- **Додајте** аутоматско чување у localStorage како бисте спречили губитак порука

### Напредна интеграција AI-а

**Више AI личности:**
- **Креирајте** падајући мени за пребацивање између различитих AI личности
- **Сачувајте** корисничку преференцију личности у localStorage
- **Имплементирајте** прелазак контекста који одржава ток разговора

**Паметне функције одговора:**
- **Додајте** свест о контексту разговора (AI памти претходне поруке)
- **Имплементирајте** паметне предлоге на основу теме разговора
- **Креирајте** дугмад за брзе одговоре на уобичајена питања

> 🎯 **Циљ учења**: Ови додатни изазови помажу вам да разумете напредне шаблоне веб развоја и технике интеграције AI-а које се користе у производним апликацијама.

## Резиме и наредни кораци

Честитамо! Успешно сте изградили комплетног асистента за ћаскање са AI-ом од нуле. Овај пројекат вам је пружио практично искуство са модерним технологијама веб развоја и интеграцијом AI-а – вештине које су све вредније у данашњем технолошком пејзажу.

### Шта сте постигли

Током ове лекције, савладали сте неколико кључних технологија и концепата:

**Развој бекенда:**
- **Интегрисали** са GitHub Models API за AI функционалност
- **Изградили** RESTful API користећи Flask са правилним руковањем грешкама
- **Имплементирали** сигурну аутентификацију користећи променљиве окружења
- **Конфигурисали** CORS за захтеве између фронтенда и бекенда

**Развој фронтенда:**
- **Креирали** одзиван интерфејс за ћаскање користећи семантички HTML
- **Имплементирали** модеран JavaScript са async/await и архитектуром заснованом на класама
- **Дизајнирали** привлачан кориснички интерфејс са CSS Grid
- **Прослеђивање портова** за тестирање ваших апликација

**Шта Codespaces пружа:**
- **Елиминише** проблеме са подешавањем и конфигурацијом локалног окружења
- **Пружа** конзистентно развојно окружење на различитим уређајима
- **Укључује** унапред конфигурисане алате и екстензије за веб развој
- **Нуди** беспрекорну интеграцију са GitHub-ом за контролу верзија и сарадњу

> 🚀 **Савет за професионалце**: Codespaces је идеалан за учење и прототипирање AI апликација јер аутоматски решава све сложене поставке окружења, омогућавајући вам да се фокусирате на креирање и учење уместо на решавање проблема са конфигурацијом.

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако настојимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.