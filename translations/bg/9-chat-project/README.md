<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-24T22:38:15+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "bg"
}
-->
# Създаване на чат асистент с изкуствен интелект

Спомняте ли си в "Стар Трек", когато екипажът спокойно разговаряше с компютъра на кораба, задавайки му сложни въпроси и получавайки обмислени отговори? Това, което изглеждаше като чиста научна фантастика през 60-те години, сега е нещо, което можете да създадете, използвайки уеб технологии, които вече познавате.

В този урок ще създадем чат асистент с изкуствен интелект, използвайки HTML, CSS, JavaScript и малко бекенд интеграция. Ще откриете как същите умения, които сте усвоили, могат да се свържат с мощни AI услуги, които разбират контекста и генерират смислени отговори.

Помислете за изкуствения интелект като за достъп до огромна библиотека, която не само намира информация, но и я синтезира в последователни отговори, съобразени с вашите конкретни въпроси. Вместо да търсите сред хиляди страници, получавате директни, контекстуални отговори.

Интеграцията се осъществява чрез познати уеб технологии, които работят заедно. HTML създава интерфейса за чат, CSS се грижи за визуалния дизайн, JavaScript управлява взаимодействията с потребителя, а бекенд API свързва всичко с AI услугите. Това е подобно на начина, по който различните секции на оркестър работят заедно, за да създадат симфония.

На практика изграждаме мост между естествената човешка комуникация и машинната обработка. Ще научите както техническата реализация на интеграцията с AI услуги, така и дизайнерските модели, които правят взаимодействията интуитивни.

До края на този урок интеграцията с AI ще ви се стори по-малко мистериозен процес и повече като още един API, с който можете да работите. Ще разберете основните модели, които захранват приложения като ChatGPT и Claude, използвайки същите принципи на уеб разработката, които вече сте усвоили.

Ето как ще изглежда завършеният проект:

![Интерфейс на чат приложение, показващ разговор между потребител и AI асистент](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.bg.png)

## Разбиране на изкуствения интелект: От мистерия към майсторство

Преди да се потопим в кода, нека разберем с какво работим. Ако сте използвали API-та преди, знаете основния модел: изпращате заявка, получавате отговор.

AI API-тата следват подобна структура, но вместо да извличат предварително съхранени данни от база данни, те генерират нови отговори въз основа на модели, научени от огромни количества текст. Помислете за това като за разликата между библиотечна картотека и знаещ библиотекар, който може да синтезира информация от множество източници.

### Какво всъщност е "Генеративен изкуствен интелект"?

Помислете как Розетският камък е позволил на учените да разберат египетските йероглифи, като са открили модели между известни и неизвестни езици. Моделите на изкуствения интелект работят по подобен начин – те откриват модели в огромни количества текст, за да разберат как работи езикът, а след това използват тези модели, за да генерират подходящи отговори на нови въпроси.

**Нека го обясня с прост пример:**
- **Традиционна база данни**: Като да поискате акта си за раждане – получавате един и същ документ всеки път.
- **Търсачка**: Като да помолите библиотекар да намери книги за котки – той ви показва какво е налично.
- **Генеративен изкуствен интелект**: Като да попитате знаещ приятел за котки – той ви разказва интересни неща със свои думи, съобразени с това, което искате да знаете.

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Как се учат AI моделите (опростена версия)

AI моделите се учат чрез излагане на огромни набори от данни, съдържащи текстове от книги, статии и разговори. Чрез този процес те идентифицират модели в:
- Как се структурират мислите в писмената комуникация
- Кои думи обикновено се появяват заедно
- Как обикновено протичат разговорите
- Контекстуалните разлики между формална и неформална комуникация

**Това е подобно на начина, по който археолозите разчитат древни езици**: те анализират хиляди примери, за да разберат граматиката, речника и културния контекст, и в крайна сметка стават способни да интерпретират нови текстове, използвайки тези научени модели.

### Защо GitHub Models?

Използваме GitHub Models по доста практична причина – той ни дава достъп до AI на корпоративно ниво, без да се налага да създаваме собствена AI инфраструктура (което, повярвайте ми, не искате да правите в момента!). Това е като да използвате API за прогноза за времето, вместо да се опитвате сами да прогнозирате времето, като поставяте метеорологични станции навсякъде.

Това е основно "AI като услуга", и най-хубавото? Можете да започнете безплатно, така че да експериментирате, без да се притеснявате за огромни разходи.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Ще използваме GitHub Models за нашата бекенд интеграция, която предоставя достъп до AI възможности на професионално ниво чрез интерфейс, удобен за разработчици. [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) служи като тестова среда, където можете да експериментирате с различни AI модели и да разберете техните възможности, преди да ги внедрите в кода.

![Интерфейс на GitHub Models AI Playground с избор на модел и зона за тестване](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.bg.png)

**Ето защо Playground е толкова полезен:**
- **Изпробвайте** различни AI модели като GPT-4o-mini, Claude и други (всички безплатни!)
- **Тествайте** вашите идеи и въпроси, преди да напишете какъвто и да е код
- **Получете** готови за използване кодови фрагменти на любимия си програмен език
- **Настройте** параметри като ниво на креативност и дължина на отговора, за да видите как те влияят на резултата

След като поекспериментирате малко, просто кликнете върху раздела "Code" и изберете вашия програмен език, за да получите кода за внедряване, който ви е необходим.

![Избор в Playground, показващ опции за генериране на код за различни програмни езици](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.bg.png)

## Настройка на бекенд интеграция с Python

Сега нека внедрим интеграцията с AI, използвайки Python. Python е отличен за AI приложения заради своята проста синтактична структура и мощни библиотеки. Ще започнем с кода от GitHub Models Playground и след това ще го преработим в повторно използваема, готова за производство функция.

### Разбиране на основната реализация

Когато вземете Python кода от Playground, ще получите нещо, което изглежда така. Не се притеснявайте, ако в началото изглежда сложно – нека го разгледаме стъпка по стъпка:

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

**Ето какво се случва в този код:**
- **Импортираме** необходимите инструменти: `os` за четене на променливи на средата и `OpenAI` за комуникация с AI
- **Настройваме** клиента на OpenAI да сочи към сървърите на GitHub AI вместо директно към OpenAI
- **Автентифицираме се** с помощта на специален GitHub токен (повече за това след малко!)
- **Структурираме** нашия разговор с различни "роли" – помислете за това като за задаване на сцена за пиеса
- **Изпращаме** нашата заявка към AI с някои параметри за фина настройка
- **Извличаме** действителния текст на отговора от всички данни, които се връщат

### Разбиране на ролите в съобщенията: Рамка за AI разговори

AI разговорите използват специфична структура с различни "роли", които изпълняват различни цели:

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

**Помислете за това като за режисиране на пиеса:**
- **Роля на системата**: Като сценични указания за актьор – казва на AI как да се държи, каква личност да има и как да отговаря
- **Роля на потребителя**: Реалният въпрос или съобщение от човека, който използва вашето приложение
- **Роля на асистента**: Отговорът на AI (не го изпращате, но той се появява в историята на разговора)

**Реален пример**: Представете си, че представяте приятел на някого на парти:
- **Съобщение на системата**: "Това е моята приятелка Сара, тя е лекар, който обяснява медицински концепции по прост начин"
- **Съобщение на потребителя**: "Можеш ли да обясниш как работят ваксините?"
- **Отговор на асистента**: Сара отговаря като приятелски настроен лекар, а не като адвокат или готвач

### Разбиране на AI параметрите: Фина настройка на поведението на отговорите

Числовите параметри в AI API заявките контролират как моделът генерира отговори. Тези настройки ви позволяват да регулирате поведението на AI за различни случаи на употреба:

#### Температура (0.0 до 2.0): Регулатор на креативността

**Какво прави**: Контролира колко креативни или предсказуеми ще бъдат отговорите на AI.

**Помислете за това като за ниво на импровизация на джаз музикант:**
- **Температура = 0.1**: Свири една и съща мелодия всеки път (много предсказуемо)
- **Температура = 0.7**: Добавя някои интересни вариации, но остава разпознаваемо (балансирана креативност)
- **Температура = 1.5**: Пълна експериментална джаз импровизация с неочаквани обрати (много непредсказуемо)

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

#### Max Tokens (1 до 4096+): Контрол на дължината на отговора

**Какво прави**: Задава ограничение за дължината на отговора на AI.

**Помислете за токените като приблизително еквивалентни на думи** (около 1 токен = 0.75 думи на английски):
- **max_tokens=50**: Кратко и ясно (като текстово съобщение)
- **max_tokens=500**: Един или два хубави параграфа
- **max_tokens=2000**: Подробно обяснение с примери

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

#### Top_p (0.0 до 1.0): Параметър за фокус

**Какво прави**: Контролира колко фокусиран остава AI върху най-вероятните отговори.

**Представете си, че AI има огромен речник, подреден по вероятност за всяка дума:**
- **top_p=0.1**: Разглежда само най-вероятните 10% от думите (много фокусиран)
- **top_p=0.9**: Разглежда 90% от възможните думи (по-креативно)
- **top_p=1.0**: Разглежда всичко (максимално разнообразие)

**Например**: Ако попитате "Небето обикновено е..."
- **Ниско top_p**: Почти сигурно ще каже "синьо"
- **Високо top_p**: Може да каже "синьо", "облачно", "широко", "променливо", "красиво" и т.н.

### Съчетаване на всичко: Комбинации от параметри за различни случаи на употреба

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

**Разбиране защо тези параметри са важни**: Различните приложения изискват различни типове отговори. Бот за обслужване на клиенти трябва да бъде последователен и фактологичен (ниска температура), докато асистент за творческо писане трябва да бъде въображаем и разнообразен (висока температура). Разбирането на тези параметри ви дава контрол върху личността и стила на отговорите на вашия AI.
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

**Разбиране на подобрената функция:**
- **Приема** два параметъра: въпроса на потребителя и опционално съобщение на системата
- **Осигурява** стандартно съобщение на системата за общо поведение на асистента
- **Използва** правилни типови подсказки в Python за по-добра документация на кода
- **Връща** само съдържанието на отговора, което го прави лесен за използване в нашия уеб API
- **Поддържа** същите параметри на модела за последователно поведение на AI

### Магията на системните подсказки: Програмиране на личността на AI

Ако параметрите контролират как мисли AI, системните подсказки контролират кой мисли, че е AI. Това е наистина една от най-интересните части на работата с AI – на практика давате на AI пълна личност, ниво на експертиза и стил на комуникация.

**Помислете за системните подсказки като за кастинг на различни актьори за различни роли**: Вместо да имате един общ асистент, можете да създадете специализирани експерти за различни ситуации. Нуждаете се от търпелив учител? Творчески партньор за мозъчна атака? Строг бизнес консултант? Просто променете системната подсказка!

#### Защо системните подсказки са толкова мощни

Ето интересната част: AI моделите са обучени на безброй разговори, в които хората приемат различни роли и нива на експертиза. Когато дадете на AI конкретна роля, това е като да натиснете бутон, който активира всички тези научени модели.

**Това е като методично актьорско майсторство за AI**: Кажете на актьор "ти си мъдър стар професор" и вижте как автоматично променя стойката, речника и маниерите си. AI прави нещо забележително подобно с езиковите модели.

#### Създаване на ефективни системни подсказки: Изкуство и наука

**Анатомия на страхотна системна подсказка:**
1. **Роля/Идентичност**: Кой е AI?
2. **Експертиза**: Какво знае?
3. **Стил на комуникация**: Как говори?
4. **Специфични инструкции**: Върху какво трябва да се фокусира?

```python
# ❌ Vague system prompt
"You are helpful."

# ✅ Detailed, effective system prompt
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Примери за системни подсказки с контекст

Нека видим как различните системни подсказки създават напълно различни личности на AI:

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

#### Виждане на системните подсказки в действие

Нека тестваме един и същ въпрос с различни системни подсказки, за да видим драматичните разлики:

**Въпрос**: "Как да се справя с удостоверяването на потребителите в моето уеб приложение?"

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

#### Разширени техники за системни подсказки

**1. Настройка на контекста**: Дайте на AI основна информация
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Форматиране на изхода**: Кажете на AI как да структурира отговорите
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

**3. Задаване на ограничения**: Определете какво AI не трябва да прави
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Защо
**Ето защо FastAPI е идеален за това, което изграждаме:**
- **Асинхронен по подразбиране**: Може да обработва множество заявки към AI едновременно, без да се блокира
- **Автоматична документация**: Посетете `/docs` и ще получите красива, интерактивна страница за API документация безплатно
- **Вградена валидация**: Улавя грешки, преди да създадат проблеми
- **Светкавично бърз**: Един от най-бързите Python фреймуъркове
- **Модерен Python**: Използва всички най-нови и най-добри функции на Python

**И ето защо изобщо ни е нужен бекенд:**

**Сигурност**: Вашият AI API ключ е като парола – ако го поставите във фронтенд JavaScript, всеки, който разглежда изходния код на вашия уебсайт, може да го открадне и да използва вашите AI кредити. Бекендът пази чувствителните данни защитени.

**Ограничаване на честотата и контрол**: Бекендът ви позволява да контролирате колко често потребителите могат да правят заявки, да внедрите автентикация на потребителите и да добавите логове за проследяване на използването.

**Обработка на данни**: Може да искате да запазите разговори, да филтрирате неподходящо съдържание или да комбинирате множество AI услуги. Бекендът е мястото, където живее тази логика.

**Архитектурата прилича на клиент-сървър модел:**
- **Фронтенд**: Слой за потребителски интерфейс за взаимодействие
- **Бекенд API**: Слой за обработка на заявки и маршрутизация
- **AI услуга**: Външна обработка и генериране на отговори
- **Променливи на средата**: Сигурно съхранение на конфигурация и идентификационни данни

### Разбиране на потока на заявка-отговор

Нека проследим какво се случва, когато потребител изпрати съобщение:

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

**Разбиране на всяка стъпка:**
1. **Взаимодействие с потребителя**: Човек пише в интерфейса за чат
2. **Обработка във фронтенда**: JavaScript улавя въведеното и го форматира като JSON
3. **Валидация на API**: FastAPI автоматично валидира заявката, използвайки Pydantic модели
4. **Интеграция с AI**: Бекендът добавя контекст (системен промпт) и извиква AI услугата
5. **Обработка на отговор**: API получава отговора от AI и може да го модифицира, ако е необходимо
6. **Показване във фронтенда**: JavaScript показва отговора в интерфейса за чат

### Разбиране на архитектурата на API

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

### Създаване на FastAPI приложение

Нека изградим нашето API стъпка по стъпка. Създайте файл, наречен `api.py`, с следния код за FastAPI:

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

**Разбиране на имплементацията на FastAPI:**
- **Импортира** FastAPI за функционалност на модерен уеб фреймуърк и Pydantic за валидация на данни
- **Създава** автоматична API документация (достъпна на `/docs`, когато сървърът работи)
- **Активира** CORS middleware, за да позволи заявки от различни източници във фронтенда
- **Определя** Pydantic модели за автоматична валидация на заявки/отговори и документация
- **Използва** асинхронни крайни точки за по-добра производителност при конкурентни заявки
- **Имплементира** правилни HTTP статус кодове и обработка на грешки с HTTPException
- **Включва** структурирано логване за мониторинг и дебъгинг
- **Осигурява** крайна точка за проверка на здравето на услугата

**Основни предимства на FastAPI пред традиционните фреймуъркове:**
- **Автоматична валидация**: Pydantic моделите гарантират целостта на данните преди обработка
- **Интерактивна документация**: Посетете `/docs` за автоматично генерирана, тестируема API документация
- **Типова безопасност**: Python типови подсказки предотвратяват грешки по време на изпълнение и подобряват качеството на кода
- **Поддръжка на асинхронност**: Обработва множество AI заявки едновременно без блокиране
- **Производителност**: Значително по-бърза обработка на заявки за приложения в реално време

### Разбиране на CORS: Пазачът на сигурността в уеб

CORS (Cross-Origin Resource Sharing) е като пазач на сграда, който проверява дали посетителите имат право да влязат. Нека разберем защо това е важно и как влияе на вашето приложение.

#### Какво е CORS и защо съществува?

**Проблемът**: Представете си, че всеки уебсайт може да прави заявки към сайта на вашата банка от ваше име без ваше разрешение. Това би било кошмар за сигурността! Браузърите предотвратяват това по подразбиране чрез "Политиката за същия произход".

**Политика за същия произход**: Браузърите позволяват на уеб страници да правят заявки само към същия домейн, порт и протокол, от който са заредени.

**Аналогия от реалния свят**: Това е като охрана на жилищна сграда – само жителите (същия произход) могат да влязат в сградата по подразбиране. Ако искате да пуснете приятел (различен произход), трябва изрично да кажете на охраната, че е разрешено.

#### CORS във вашата среда за разработка

По време на разработка, вашият фронтенд и бекенд работят на различни портове:
- Фронтенд: `http://localhost:3000` (или file:// ако отваряте HTML директно)
- Бекенд: `http://localhost:5000`

Те се считат за "различни произходи", въпреки че са на един и същ компютър!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Какво прави конфигурацията на CORS на практика:**
- **Добавя** специални HTTP заглавия към отговорите на API, които казват на браузърите "тази заявка от различен произход е разрешена"
- **Обработва** "предварителни" заявки (браузърите понякога проверяват разрешенията преди да изпратят действителната заявка)
- **Предотвратява** страховитата грешка "блокирано от CORS политика" в конзолата на браузъра

#### Сигурност на CORS: Разработка срещу продукция

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

**Защо това е важно**: По време на разработка, `CORS(app)` е като да оставите входната си врата отключена – удобно, но не сигурно. В продукция, искате да уточните точно кои уебсайтове могат да комуникират с вашето API.

#### Чести сценарии с CORS и решения

| Сценарий | Проблем | Решение |
|----------|---------|----------|
| **Локална разработка** | Фронтендът не може да достигне до бекенда | Добавете CORSMiddleware към FastAPI |
| **GitHub Pages + Heroku** | Деплойнатият фронтенд не може да достигне до API | Добавете URL на GitHub Pages към CORS произходите |
| **Персонален домейн** | CORS грешки в продукция | Актуализирайте CORS произходите, за да съответстват на вашия домейн |
| **Мобилно приложение** | Приложението не може да достигне до уеб API | Добавете домейна на вашето приложение или използвайте `*` внимателно |

**Съвет**: Можете да проверите CORS заглавията в Инструментите за разработчици на браузъра под раздела Network. Потърсете заглавия като `Access-Control-Allow-Origin` в отговора.

### Обработка на грешки и валидация

Обърнете внимание как нашето API включва правилна обработка на грешки:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Основни принципи на валидация:**
- **Проверява** за задължителни полета преди обработка на заявки
- **Връща** смислени съобщения за грешки във формат JSON
- **Използва** подходящи HTTP статус кодове (400 за лоши заявки)
- **Осигурява** ясна обратна връзка, за да помогне на фронтенд разработчиците да отстранят проблеми

## Настройка и стартиране на вашия бекенд

Сега, когато имаме готова интеграция с AI и FastAPI сървър, нека стартираме всичко. Процесът на настройка включва инсталиране на Python зависимости, конфигуриране на променливи на средата и стартиране на вашия сървър за разработка.

### Настройка на Python среда

Нека настроим вашата Python среда за разработка. Виртуалните среди са като отделен проект с конкретни инструменти и зависимости, предотвратявайки конфликти между различни проекти.

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

**Какво направихме:**
- **Създадохме** собствено малко Python пространство, където можем да инсталираме пакети, без да засягаме нищо друго
- **Активирахме** го, за да знае терминалът ни да използва тази конкретна среда
- **Инсталирахме** основните неща: OpenAI за AI магия, FastAPI за нашето уеб API, Uvicorn за реалното му стартиране и python-dotenv за сигурно управление на тайни

**Обяснение на основните зависимости:**
- **FastAPI**: Модерен, бърз уеб фреймуърк с автоматична API документация
- **Uvicorn**: Светкавично бърз ASGI сървър, който стартира FastAPI приложения
- **OpenAI**: Официална библиотека за GitHub модели и интеграция с OpenAI API
- **python-dotenv**: Сигурно зареждане на променливи на средата от .env файлове

### Конфигурация на средата: Как да пазим тайните си

Преди да стартираме нашето API, трябва да поговорим за един от най-важните уроци в уеб разработката: как да пазим тайните си наистина тайни. Променливите на средата са като сигурен сейф, до който само вашето приложение има достъп.

#### Какво представляват променливите на средата?

**Мислете за променливите на средата като за сейф за ценности** – поставяте ценните си неща там и само вие (и вашето приложение) имате ключа за достъп. Вместо да пишете чувствителна информация директно в кода си (където буквално всеки може да я види), я съхранявате безопасно в средата.

**Ето разликата:**
- **Грешен начин**: Да напишете паролата си на лепяща бележка и да я залепите на монитора
- **Правилен начин**: Да съхранявате паролата си в сигурен мениджър на пароли, до който само вие имате достъп

#### Защо променливите на средата са важни

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

**Какво се случва, когато твърдо кодирате тайни:**
1. **Излагане в системата за контрол на версиите**: Всеки с достъп до вашето Git хранилище вижда вашия API ключ
2. **Публични хранилища**: Ако качите в GitHub, вашият ключ е видим за целия интернет
3. **Споделяне в екип**: Други разработчици, работещи по вашия проект, получават достъп до вашия личен API ключ
4. **Нарушения на сигурността**: Ако някой открадне вашия API ключ, може да използва вашите AI кредити

#### Настройка на вашия файл за среда

Създайте файл `.env` в директорията на вашия бекенд. Този файл съхранява вашите тайни локално:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Разбиране на файла .env:**
- **Една тайна на ред** във формат `KEY=value`
- **Без интервали** около знака за равенство
- **Без кавички** около стойностите (обикновено)
- **Коментари** започват с `#`

#### Създаване на вашия GitHub персонален достъп токен

Вашият GitHub токен е като специална парола, която дава на вашето приложение разрешение да използва AI услугите на GitHub:

**Стъпка по стъпка за създаване на токен:**
1. **Отидете в GitHub Settings** → Developer settings → Personal access tokens → Tokens (classic)
2. **Кликнете "Generate new token (classic)"**
3. **Задайте срок на валидност** (30 дни за тестване, по-дълъг за продукция)
4. **Изберете обхвати**: Отметнете "repo" и всички други необходими разрешения
5. **Генерирайте токен** и го копирайте веднага (не можете да го видите отново!)
6. **Поставете го във вашия .env файл**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Зареждане на променливи на средата в Python

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

**Какво прави този код:**
- **Зарежда** вашия .env файл и прави променливите достъпни за Python
- **Проверява** дали съществува необходимия токен (добра обработка на грешки!)
- **Извежда** ясна грешка, ако токенът липсва
- **Използва** токена сигурно, без да го излага в кода

#### Сигурност в Git: Файлът .gitignore

Вашият `.gitignore` файл казва на Git кои файлове никога да не следи или качва:

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

**Защо това е важно**: След като добавите `.env` към `.gitignore`, Git ще игнорира вашия файл за среда, предотвратявайки случайното качване на вашите тайни в GitHub.

#### Различни среди, различни тайни

Професионалните приложения използват различни API ключове за различни среди:

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production  
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Защо това е важно**: Не искате вашите експерименти по време на разработка да влияят на вашата продукционна AI квота, и искате различни нива на сигурност за различните среди.

### Стартиране на вашия сървър за разработка: Да оживим вашия FastAPI

Сега идва вълнуващият момент – стартиране на вашия FastAPI сървър за разработка и виждане на вашата AI интеграция в действие! FastAPI използва Uvicorn, светкавично бърз ASGI сървър, специално проектиран за асинхронни Python приложения.

#### Разбиране на процеса на стартиране на FastAPI сървър

```bash
# Method 1: Direct Python execution (includes auto-reload)
python api.py

# Method 2: Using Uvicorn directly (more control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Когато изпълните тази команда, ето какво се случва зад кулисите:

**1. Python зарежда вашето FastAPI приложение**:
- Импортира всички необходими библиотеки (FastAPI, Pydantic, OpenAI и др.)
- Зарежда променливите на средата от вашия `.env` файл
- Създава инстанция на FastAPI приложението с автоматична документация

**2. Uvicorn конфигурира ASGI сървъра**:
- Свързва се към порт 5000 с възможности за асинхронна обработка на заявки
- Настройва маршрутизация на заявки с автоматична валидация
- Активира автоматично презареждане за разработка (рестартира при промени в файловете)
- Генерира интерактивна API документация

**3. Сървърът започва да слуша**:
- Вашият терминал показва: `INFO: Uvicorn running on http://0.0.0.0:5000`
- Сървърът може да обработва множество конкурентни AI заявки
- Вашето API е готово с автоматична документация на `http://localhost:5000/docs`

#### Как
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

#### Отстраняване на често срещани проблеми при стартиране

| Съобщение за грешка | Какво означава | Как да го поправите |
|---------------------|----------------|---------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI не е инсталиран | Изпълнете `pip install fastapi uvicorn` във вашата виртуална среда |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI сървърът не е инсталиран | Изпълнете `pip install uvicorn` във вашата виртуална среда |
| `KeyError: 'GITHUB_TOKEN'` | Променливата на средата не е намерена | Проверете вашия `.env` файл и извикването на `load_dotenv()` |
| `Address already in use` | Порт 5000 е зает | Затворете други процеси, използващи порт 5000, или сменете порта |
| `ValidationError` | Данните на заявката не съответстват на модела на Pydantic | Проверете дали форматът на заявката съответства на очакваната схема |
| `HTTPException 422` | Непроцесируем обект | Валидацията на заявката е неуспешна, проверете `/docs` за правилния формат |
| `OpenAI API error` | Автентикацията на AI услугата е неуспешна | Уверете се, че вашият GitHub токен е правилен и има необходимите разрешения |

#### Най-добри практики за разработка

**Автоматично презареждане**: FastAPI с Uvicorn предоставя автоматично презареждане, когато запазите промените в Python файловете си. Това означава, че можете да модифицирате кода си и да тествате веднага, без да рестартирате ръчно.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Логване за разработка**: Добавете логове, за да разберете какво се случва:

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

**Защо логването помага**: По време на разработката можете да видите точно какви заявки пристигат, какво отговаря AI и къде възникват грешки. Това значително ускорява процеса на отстраняване на проблеми.

### Конфигуриране за GitHub Codespaces: Лесна разработка в облака

GitHub Codespaces е като мощен компютър за разработка в облака, който можете да достъпите от всеки браузър. Ако работите в Codespaces, има няколко допълнителни стъпки, за да направите вашия бекенд достъпен за фронтенда.

#### Разбиране на мрежовата структура на Codespaces

В локална среда за разработка всичко работи на един и същ компютър:
- Бекенд: `http://localhost:5000`
- Фронтенд: `http://localhost:3000` (или file://)

В Codespaces вашата среда за разработка работи на сървърите на GitHub, така че "localhost" има различно значение. GitHub автоматично създава публични URL адреси за вашите услуги, но трябва да ги конфигурирате правилно.

#### Стъпка по стъпка конфигурация на Codespaces

**1. Стартирайте вашия бекенд сървър**:
```bash
cd backend
python api.py
```

Ще видите познатото съобщение за стартиране на FastAPI/Uvicorn, но обърнете внимание, че то работи в средата на Codespace.

**2. Конфигурирайте видимостта на порта**:
- Потърсете раздела "Ports" в долния панел на VS Code
- Намерете порт 5000 в списъка
- Кликнете с десния бутон върху порт 5000
- Изберете "Port Visibility" → "Public"

**Защо да го направите публичен?** По подразбиране портовете на Codespace са частни (достъпни само за вас). Правейки го публичен, позволявате на вашия фронтенд (който работи в браузъра) да комуникира с вашия бекенд.

**3. Вземете вашия публичен URL адрес**:
След като направите порта публичен, ще видите URL адрес като:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Актуализирайте конфигурацията на фронтенда**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Разбиране на URL адресите на Codespace

URL адресите на Codespace следват предвидим модел:
```
https://[codespace-name]-[port].app.github.dev
```

**Разбивка на структурата:**
- `codespace-name`: Уникален идентификатор за вашия Codespace (обикновено включва вашето потребителско име)
- `port`: Номерът на порта, на който работи вашата услуга (5000 за нашето FastAPI приложение)
- `app.github.dev`: Домейнът на GitHub за приложения в Codespace

#### Тестване на настройката на Codespace

**1. Тествайте бекенда директно**:
Отворете вашия публичен URL адрес в нов раздел на браузъра. Трябва да видите:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Тествайте с инструменти за разработчици на браузъра**:
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

#### Codespaces срещу локална разработка

| Аспект | Локална разработка | GitHub Codespaces |
|--------|--------------------|-------------------|
| **Време за настройка** | По-дълго (инсталиране на Python, зависимости) | Моментално (предварително конфигурирана среда) |
| **Достъп до URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Конфигурация на портовете** | Автоматична | Ръчна (направете портовете публични) |
| **Запазване на файлове** | Локална машина | Репозитория на GitHub |
| **Сътрудничество** | Трудно за споделяне на среда | Лесно за споделяне на линк към Codespace |
| **Интернет зависимост** | Само за AI API заявки | Необходимо за всичко |

#### Съвети за разработка в Codespaces

**Променливи на средата в Codespaces**:
Вашият `.env` файл работи по същия начин в Codespaces, но можете също да зададете променливи на средата директно в Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Управление на портовете**:
- Codespaces автоматично открива, когато вашето приложение започне да слуша на порт
- Можете да пренасочите няколко порта едновременно (полезно, ако добавите база данни по-късно)
- Портовете остават достъпни, докато вашият Codespace работи

**Работен процес за разработка**:
1. Направете промени в кода във VS Code
2. FastAPI автоматично се презарежда (благодарение на режима за презареждане на Uvicorn)
3. Тествайте промените веднага чрез публичния URL адрес
4. Комитнете и качете, когато сте готови

> 💡 **Съвет**: Запазете вашия URL адрес на бекенда в Codespace по време на разработката. Тъй като имената на Codespace са стабилни, URL адресът няма да се промени, докато използвате същия Codespace.

## Създаване на интерфейс за чат: Където хората срещат AI

Сега ще изградим потребителския интерфейс – частта, която определя как хората взаимодействат с вашия AI асистент. Както при дизайна на оригиналния интерфейс на iPhone, ще се фокусираме върху това сложната технология да изглежда интуитивна и лесна за използване.

### Разбиране на съвременната архитектура на фронтенда

Нашият чат интерфейс ще бъде това, което наричаме "Single Page Application" или SPA. Вместо старомодния подход, при който всяко кликване зарежда нова страница, нашето приложение ще се обновява плавно и моментално:

**Старомодни уебсайтове**: Като четене на физическа книга – прелиствате напълно нови страници
**Нашето чат приложение**: Като използване на телефон – всичко се движи и обновява безпроблемно

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

### Трите стълба на фронтенд разработката

Всеки фронтенд – от прости уебсайтове до сложни приложения като Discord или Slack – се изгражда върху три основни технологии. Мислете за тях като за основата на всичко, което виждате и с което взаимодействате в интернет:

**HTML (Структура)**: Това е вашата основа
- Определя какви елементи съществуват (бутони, текстови полета, контейнери)
- Дава смисъл на съдържанието (това е заглавие, това е форма и т.н.)
- Създава основната структура, върху която всичко друго се изгражда

**CSS (Презентация)**: Това е вашият интериорен дизайнер
- Прави всичко да изглежда красиво (цветове, шрифтове, оформления)
- Адаптира се към различни размери на екрана (телефон срещу лаптоп срещу таблет)
- Създава плавни анимации и визуална обратна връзка

**JavaScript (Поведение)**: Това е вашият мозък
- Реагира на действията на потребителите (кликвания, писане, скролиране)
- Комуникира с вашия бекенд и обновява страницата
- Прави всичко интерактивно и динамично

**Мислете за това като за архитектурен дизайн:**
- **HTML**: Структурният план (определяне на пространства и връзки)
- **CSS**: Естетическият и екологичен дизайн (визуален стил и потребителско изживяване)
- **JavaScript**: Механичните системи (функционалност и интерактивност)

### Защо съвременната архитектура на JavaScript е важна

Нашето чат приложение ще използва съвременни JavaScript модели, които ще срещнете в професионалните приложения. Разбирането на тези концепции ще ви помогне да се развивате като разработчик:

**Архитектура, базирана на класове**: Ще организираме кода си в класове, което е като създаване на чертежи за обекти
**Async/Await**: Съвременен начин за обработка на операции, които отнемат време (като API заявки)
**Програмиране, базирано на събития**: Нашето приложение реагира на действията на потребителите (кликвания, натискания на клавиши), вместо да работи в цикъл
**Манипулация на DOM**: Динамично обновяване на съдържанието на уеб страницата въз основа на взаимодействията на потребителите и отговорите на API

### Настройка на структурата на проекта

Създайте директория за фронтенд с тази организирана структура:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Разбиране на архитектурата:**
- **Разделя** отговорностите между структура (HTML), поведение (JavaScript) и презентация (CSS)
- **Поддържа** проста файлова структура, която е лесна за навигация и модификация
- **Следва** най-добрите практики за уеб разработка за организация и поддръжка

### Създаване на HTML основа: Семантична структура за достъпност

Нека започнем със структурата на HTML. Съвременната уеб разработка акцентира върху "семантичен HTML" – използване на HTML елементи, които ясно описват тяхната цел, а не само външния им вид. Това прави вашето приложение достъпно за четци на екрана, търсачки и други инструменти.

**Защо семантичният HTML е важен**: Представете си, че описвате вашето чат приложение на някого по телефона. Бихте казали "има заглавие с титла, основна зона, където се появяват разговорите, и форма в долната част за писане на съобщения." Семантичният HTML използва елементи, които съответстват на това естествено описание.

Създайте `index.html` с този внимателно структуриран код:

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

**Разбиране на всеки HTML елемент и неговата цел:**

#### Структура на документа
- **`<!DOCTYPE html>`**: Казва на браузъра, че това е модерен HTML5
- **`<html lang="en">`**: Указва езика на страницата за четци на екрана и инструменти за превод
- **`<meta charset="UTF-8">`**: Осигурява правилно кодиране на символите за международен текст
- **`<meta name="viewport"...>`**: Прави страницата мобилно-адаптивна, като контролира мащаба

#### Семантични елементи
- **`<header>`**: Ясно идентифицира горната секция със заглавие и описание
- **`<main>`**: Определя основната зона за съдържание (където се случват разговорите)
- **`<form>`**: Семантично правилен за въвеждане от потребителя, позволява правилна навигация с клавиатура

#### Функции за достъпност
- **`role="log"`**: Казва на четците на екрана, че тази зона съдържа хронологичен дневник на съобщенията
- **`aria-live="polite"`**: Обявява нови съобщения на четците на екрана без прекъсване
- **`aria-label`**: Осигурява описателни етикети за контролите на формата
- **`required`**: Браузърът валидира, че потребителите въвеждат съобщение преди изпращане

#### Интеграция на CSS и JavaScript
- **`class` атрибути**: Осигуряват куки за стилизиране с CSS (напр. `chat-container`, `input-group`)
- **`id` атрибути**: Позволяват на JavaScript да намира и манипулира конкретни елементи
- **Поставяне на скриптове**: JavaScript файлът се зарежда накрая, за да се зареди първо HTML

**Защо тази структура работи:**
- **Логичен поток**: Заглавие → Основно съдържание → Форма за въвеждане съответства на естествения ред на четене
- **Достъпност с клавиатура**: Потребителите могат да преминават през всички интерактивни елементи
- **Приятелски за четци на екрана**: Ясни маркери и описания за потребители с увредено зрение
- **Мобилно адаптивен**: Meta тагът за изглед позволява адаптивен дизайн
- **Прогресивно подобрение**: Работи дори ако CSS или JavaScript не се заредят

### Добавяне на интерактивен JavaScript: Логика за съвременни уеб приложения

Сега нека изградим JavaScript, който оживява нашия чат интерфейс. Ще използваме съвременни JavaScript модели, които ще срещнете в професионалната уеб разработка, включително ES6 класове, async/await и програмиране, базирано на събития.

#### Разбиране на съвременната архитектура на JavaScript

Вместо да пишем процедурен код (серия от функции, които се изпълняват последователно), ще създадем **архитектура, базирана на класове**. Мислете за клас като чертеж за създаване на обекти – както чертежът на архитект може да се използва за изграждане на множество къщи.

**Защо да използваме класове за уеб приложения?**
- **Организация**: Всички свързани функции са групирани заедно
- **Повторна употреба**: Можете да създадете множество чат инстанции на една и съща страница
- **Поддръжка**: По-лесно за отстраняване на грешки и модификация на конкретни функции
- **Професионален стандарт**: Този модел се използва в рамки като React, Vue и Angular

Създайте `app.js` с този модерен, добре структуриран JavaScript:

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

#### Разбиране на всяка концепция в JavaScript

**Структура на ES6 клас**:
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

**Модел Async/Await**:
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

**Програмиране, базирано на събития**:
Вместо постоянно да проверяваме дали нещо се е случило, "слушаме" за събития:
```javascript
// When form is submitted, run handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// When Enter key is pressed, also run handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Манипулация на DOM**:
```javascript
// Create new elements
const messageElement = document.createElement("div");

// Modify their properties
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Add to the page
this.messages.appendChild(messageElement);
```


Тази архитектура е мащабируема – лесно можете да добавите функции като редактиране на съобщения, качване на файлове или множество нишки на разговори, без да пренаписвате основната структура.

### Стилизиране на вашия чат интерфейс

Сега нека създадем модерен и визуално привлекателен чат интерфейс с помощта на CSS. Добрата стилизация прави приложението ви да изглежда професионално и подобрява цялостното потребителско изживяване. Ще използваме съвременни функции на CSS като Flexbox, CSS Grid и персонализирани свойства за адаптивен и достъпен дизайн.

Създайте файл `styles.css` с тези подробни стилове:

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

**Разбиране на архитектурата на CSS:**
- **Използва** персонализирани свойства на CSS (променливи) за последователна тема и лесна поддръжка
- **Прилага** Flexbox оформление за адаптивен дизайн и правилно подравняване
- **Включва** плавни анимации за появата на съобщения, без да са разсейващи
- **Осигурява** визуално разграничение между съобщенията на потребителя, отговорите на AI и състоянията на грешка
- **Поддържа** адаптивен дизайн, който работи както на настолни компютри, така и на мобилни устройства
- **Взема предвид** достъпността с намалени предпочитания за движение и правилни контрастни съотношения
- **Предлага** поддръжка за тъмен режим, базиран на предпочитанията на системата на потребителя

### Конфигуриране на URL адреса на вашия бекенд

Последната стъпка е актуализирането на `BASE_URL` във вашия JavaScript, за да съответства на вашия бекенд сървър:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Определяне на URL адреса на вашия бекенд:**
- **Локална разработка**: Използвайте `http://localhost:5000`, ако стартирате както фронтенд, така и бекенд локално
- **Codespaces**: Намерете URL адреса на вашия бекенд в раздела Ports, след като направите порт 5000 публичен
- **Продукция**: Заменете с вашия действителен домейн при разполагане на хостинг услуга

> 💡 **Съвет за тестване**: Можете директно да тествате вашия бекенд, като посетите основния URL адрес в браузъра си. Трябва да видите приветственото съобщение от вашия FastAPI сървър.

## Тестване и разполагане

Сега, когато сте изградили както фронтенд, така и бекенд компоненти, нека тестваме дали всичко работи заедно и да разгледаме опциите за разполагане, за да споделите вашия чат асистент с други.

### Работен процес за локално тестване

Следвайте тези стъпки, за да тествате цялото приложение:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Стъпка по стъпка процес на тестване:**

1. **Стартирайте вашия бекенд сървър**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Проверете дали API работи**:
   - Отворете `http://localhost:5000` в браузъра си
   - Трябва да видите приветственото съобщение от вашия FastAPI сървър

3. **Отворете вашия фронтенд**:
   - Навигирайте до директорията на вашия фронтенд
   - Отворете `index.html` в уеб браузъра си
   - Или използвайте разширението Live Server на VS Code за по-добро изживяване при разработка

4. **Тествайте функционалността на чата**:
   - Въведете съобщение в полето за въвеждане
   - Кликнете върху "Изпрати" или натиснете Enter
   - Уверете се, че AI отговаря правилно
   - Проверете конзолата на браузъра за грешки в JavaScript

### Отстраняване на често срещани проблеми

| Проблем | Симптоми | Решение |
|---------|----------|----------|
| **CORS грешка** | Фронтендът не може да достигне до бекенда | Уверете се, че FastAPI CORSMiddleware е правилно конфигуриран |
| **Грешка с API ключ** | Отговори 401 Unauthorized | Проверете вашата променлива на средата `GITHUB_TOKEN` |
| **Отказана връзка** | Мрежови грешки във фронтенда | Проверете URL адреса на бекенда и дали сървърът Flask работи |
| **Няма отговор от AI** | Празни или грешни отговори | Проверете логовете на бекенда за проблеми с квотата на API или автентикацията |

**Често срещани стъпки за отстраняване на грешки:**
- **Проверете** конзолата на Developer Tools в браузъра за грешки в JavaScript
- **Уверете се**, че разделът Network показва успешни заявки и отговори от API
- **Прегледайте** терминалния изход на бекенда за грешки в Python или проблеми с API
- **Потвърдете**, че променливите на средата са правилно заредени и достъпни

## Предизвикателство с GitHub Copilot Agent 🚀

Използвайте режима Agent, за да завършите следното предизвикателство:

**Описание:** Подобрете чат асистента, като добавите история на разговорите и запазване на съобщенията. Това предизвикателство ще ви помогне да разберете как да управлявате състоянието в чат приложенията и да внедрите съхранение на данни за по-добро потребителско изживяване.

**Задача:** Модифицирайте чат приложението, за да включва история на разговорите, която се запазва между сесиите. Добавете функционалност за запазване на съобщенията в локалното хранилище, показване на историята на разговорите при зареждане на страницата и включете бутон "Изчисти историята". Също така внедрете индикатори за писане и времеви маркировки на съобщенията, за да направите изживяването в чата по-реалистично.

Научете повече за [режима Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) тук.

## Задача: Създайте личен AI асистент

Сега ще създадете собствена имплементация на AI асистент. Вместо просто да копирате кода от урока, това е възможност да приложите концепциите, докато изграждате нещо, което отразява вашите собствени интереси и случаи на употреба.

### Изисквания за проекта

Нека настроим вашия проект с чиста и организирана структура:

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

### Основни задачи за имплементация

**Разработка на бекенд:**
- **Вземете** нашия код на FastAPI и го направете свой
- **Създайте** уникална личност за AI – може би полезен асистент за готвене, творчески партньор за писане или помощник за учене?
- **Добавете** солидно управление на грешки, за да не се срине приложението ви при проблеми
- **Напишете** ясна документация за всеки, който иска да разбере как работи вашият API

**Разработка на фронтенд:**
- **Изградете** чат интерфейс, който е интуитивен и приветлив
- **Напишете** чист, модерен JavaScript, който бихте се гордели да покажете на други разработчици
- **Проектирайте** персонализирана стилизация, която отразява личността на вашия AI – забавна и цветна? Чиста и минималистична? Изцяло по ваш избор!
- **Уверете се**, че работи отлично както на телефони, така и на компютри

**Изисквания за персонализация:**
- **Изберете** уникално име и личност за вашия AI асистент – може би нещо, което отразява вашите интереси или проблемите, които искате да решите
- **Персонализирайте** визуалния дизайн, за да съответства на стила на вашия асистент
- **Напишете** привлекателно приветствено съобщение, което кара хората да искат да започнат разговор
- **Тествайте** вашия асистент с различни типове въпроси, за да видите как реагира

### Идеи за подобрения (по избор)

Искате ли да издигнете проекта си на следващо ниво? Ето някои забавни идеи за изследване:

| Функция | Описание | Умения, които ще практикувате |
|---------|-------------|------------------------|
| **История на съобщенията** | Запомня разговорите дори след обновяване на страницата | Работа с localStorage, обработка на JSON |
| **Индикатори за писане** | Показва "AI пише..." докато чакате отговори | CSS анимации, асинхронно програмиране |
| **Времеви маркировки на съобщенията** | Показва кога е изпратено всяко съобщение | Форматиране на дата/час, UX дизайн |
| **Експорт на чат** | Позволява на потребителите да изтеглят разговора си | Работа с файлове, експорт на данни |
| **Смяна на тема** | Превключване между светъл/тъмен режим | CSS променливи, потребителски предпочитания |
| **Гласов вход** | Добавете функция за преобразуване на реч в текст | Уеб API, достъпност |

### Тестване и документация

**Осигуряване на качество:**
- **Тествайте** приложението си с различни типове входни данни и крайни случаи
- **Уверете се**, че адаптивният дизайн работи на различни размери на екрана
- **Проверете** достъпността с навигация чрез клавиатура и екранни четци
- **Валидирайте** HTML и CSS за съответствие със стандартите

**Изисквания за документация:**
- **Напишете** README.md, обясняващ вашия проект и как да го стартирате
- **Включете** скрийншоти на вашия чат интерфейс в действие
- **Документирайте** всякакви уникални функции или персонализации, които сте добавили
- **Осигурете** ясни инструкции за настройка за други разработчици

### Насоки за подаване

**Доставки на проекта:**
1. Пълна папка на проекта с целия изходен код
2. README.md с описание на проекта и инструкции за настройка
3. Скрийншоти, демонстриращи вашия чат асистент в действие
4. Кратко размишление върху това, което сте научили и предизвикателствата, с които сте се сблъскали

**Критерии за оценка:**
- **Функционалност**: Работи ли чат асистентът според очакванията?
- **Качество на кода**: Добре организиран, коментиран и поддържан ли е кодът?
- **Дизайн**: Визуално привлекателен и удобен за потребителя ли е интерфейсът?
- **Креативност**: Колко уникална и персонализирана е вашата имплементация?
- **Документация**: Ясни и пълни ли са инструкциите за настройка?

> 💡 **Съвет за успех**: Започнете с основните изисквания, след това добавете подобрения, след като всичко работи. Фокусирайте се върху създаването на полирано основно изживяване, преди да добавите разширени функции.

## Решение

[Решение](./solution/README.md)

## Допълнителни предизвикателства

Готови ли сте да издигнете вашия AI асистент на следващо ниво? Опитайте тези напреднали предизвикателства, които ще задълбочат разбирането ви за интеграцията на AI и уеб разработката.

### Персонализация на личността

Истинската магия се случва, когато дадете на вашия AI асистент уникална личност. Експериментирайте с различни системни подсказки, за да създадете специализирани асистенти:

**Пример за професионален асистент:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Пример за помощник за творческо писане:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Пример за технически ментор:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Подобрения на фронтенда

Трансформирайте вашия чат интерфейс с тези визуални и функционални подобрения:

**Разширени функции на CSS:**
- **Внедрете** плавни анимации и преходи на съобщенията
- **Добавете** персонализирани дизайни на чат балончета с форми и градиенти на CSS
- **Създайте** анимация за индикатор за писане, когато AI "мисли"
- **Проектирайте** реакции с емотикони или система за оценка на съобщенията

**Подобрения на JavaScript:**
- **Добавете** клавишни комбинации (Ctrl+Enter за изпращане, Escape за изчистване на входа)
- **Внедрете** функционалност за търсене и филтриране на съобщения
- **Създайте** функция за експортиране на разговори (изтегляне като текст или JSON)
- **Добавете** автоматично запазване в localStorage, за да предотвратите загуба на съобщения

### Напреднала интеграция на AI

**Множество AI личности:**
- **Създайте** падащо меню за превключване между различни AI личности
- **Запазете** предпочитаната личност на потребителя в localStorage
- **Внедрете** превключване на контекста, което поддържа потока на разговора

**Функции за интелигентен отговор:**
- **Добавете** осведоменост за контекста на разговора (AI запомня предишни съобщения)
- **Внедрете** интелигентни предложения въз основа на темата на разговора
- **Създайте** бутони за бърз отговор за често задавани въпроси

> 🎯 **Цел на обучението**: Тези допълнителни предизвикателства ще ви помогнат да разберете напреднали модели на уеб разработка и техники за интеграция на AI, които се използват в производствени приложения.

## Обобщение и следващи стъпки

Поздравления! Успешно изградихте цялостен AI-задвижван чат асистент от нулата. Този проект ви даде практически опит със съвременни технологии за уеб разработка и интеграция на AI – умения, които са все по-ценни в днешния технологичен пейзаж.

### Какво постигнахте

През този урок овладяхте няколко ключови технологии и концепции:

**Разработка на бекенд:**
- **Интегрирахте** с GitHub Models API за функционалност на AI
- **Изградихте** RESTful API с помощта на Flask с правилно управление на грешки
- **Внедрихте** сигурна автентикация с помощта на променливи на средата
- **Конфигурирахте** CORS за заявки между фронтенд и бекенд

**Разработка на фронтенд:**
- **Създадохте** адаптивен чат интерфейс с помощта на семантичен HTML
- **Внедрихте** модерен JavaScript с async/await и архитектура, базирана на класове
- **Проектирахте** ангажиращ потребителски интерфейс с CSS Grid, Flexbox и анимации
- **Добавихте** функции за достъпност и принципи за адаптивен дизайн

**Интеграция на цялостната система:**
- **Свързахте** фронтенд и бекенд чрез HTTP API заявки
- **Обработихте** взаимодействията в реално време с потребителите и асинхронния поток от данни
- **Внедрихте** управление на грешки и обратна връзка към потребителя в цялото приложение
- **Тествахте** цялостния работен процес на приложението от въвеждането на потребителя до отговора на AI

### Основни резултати от обучението

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

Този проект ви запозна с основите на изграждането на приложения, задв
- **Пренасочване на портове** за тестване на вашите приложения

**Какво предоставя Codespaces:**
- **Премахва** проблемите с настройката и конфигурацията на локалната среда
- **Осигурява** последователна среда за разработка на различни устройства
- **Включва** предварително конфигурирани инструменти и разширения за уеб разработка
- **Предлага** безпроблемна интеграция с GitHub за контрол на версиите и сътрудничество

> 🚀 **Съвет за професионалисти**: Codespaces е идеален за изучаване и прототипиране на AI приложения, тъй като автоматично се справя със сложната настройка на средата, позволявайки ви да се фокусирате върху създаването и ученето, вместо върху решаването на конфигурационни проблеми.

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за каквито и да било недоразумения или погрешни интерпретации, произтичащи от използването на този превод.