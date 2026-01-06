<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-06T07:07:03+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "es"
}
-->
# Construye un Asistente de Chat con IA

¿Recuerdas en Star Trek cuando la tripulación conversaba casualmente con la computadora de la nave, haciéndole preguntas complejas y recibiendo respuestas reflexivas? Lo que parecía pura ciencia ficción en los años 60 ahora es algo que puedes construir usando tecnologías web que ya conoces.

En esta lección, crearemos un asistente de chat con IA usando HTML, CSS, JavaScript y algo de integración backend. Descubrirás cómo las mismas habilidades que has estado aprendiendo pueden conectarse a potentes servicios de IA que entienden el contexto y generan respuestas significativas.

Piensa en la IA como tener acceso a una vasta biblioteca que no solo puede encontrar información, sino también sintetizarla en respuestas coherentes adaptadas a tus preguntas específicas. En lugar de buscar entre miles de páginas, obtienes respuestas directas y contextuales.

La integración ocurre a través de tecnologías web familiares trabajando juntas. HTML crea la interfaz de chat, CSS maneja el diseño visual, JavaScript gestiona las interacciones del usuario, y una API backend conecta todo con servicios de IA. Es similar a cómo diferentes secciones de una orquesta trabajan juntas para crear una sinfonía.

Esencialmente estamos construyendo un puente entre la comunicación humana natural y el procesamiento de máquinas. Aprenderás tanto la implementación técnica de la integración de servicios de IA como los patrones de diseño que hacen que las interacciones se sientan intuitivas.

Al final de esta lección, la integración con IA parecerá menos un proceso misterioso y más una API más con la que puedes trabajar. Entenderás los patrones fundamentales que impulsan aplicaciones como ChatGPT y Claude, usando los mismos principios de desarrollo web que has estado aprendiendo.

## ⚡ Lo Que Puedes Hacer en los Próximos 5 Minutos

**Ruta de Inicio Rápido para Desarrolladores Ocupados**

```mermaid
flowchart LR
    A[⚡ 5 minutos] --> B[Obtener token de GitHub]
    B --> C[Probar el área de juego de IA]
    C --> D[Copiar código Python]
    D --> E[Ver respuestas de IA]
```
- **Minuto 1**: Visita [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) y crea un token de acceso personal
- **Minuto 2**: Prueba interacciones con IA directamente en la interfaz del playground
- **Minuto 3**: Haz clic en la pestaña "Code" y copia el fragmento de código en Python
- **Minuto 4**: Ejecuta el código localmente con tu token: `GITHUB_TOKEN=your_token python test.py`
- **Minuto 5**: Observa cómo se genera tu primera respuesta de IA desde tu propio código

**Código de prueba rápido**:
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

**Por qué esto importa**: En 5 minutos experimentarás la magia de la interacción programática con IA. Esto representa el bloque de construcción fundamental que impulsa todas las aplicaciones de IA que usas.

Así es como se verá tu proyecto terminado:

![Interfaz de app de chat mostrando conversación entre usuario y asistente de IA](../../../translated_images/screenshot.0a1ee0d123df681b.es.png)

## 🗺️ Tu Viaje de Aprendizaje en el Desarrollo de Aplicaciones de IA

```mermaid
journey
    title De Desarrollo Web a Integración de IA
    section Entendiendo los Fundamentos de IA
      Descubrir conceptos de IA generativa: 4: You
      Explorar la plataforma GitHub Models: 6: You
      Dominar parámetros y prompts de IA: 8: You
    section Integración Backend
      Construir servidor API en Python: 5: You
      Implementar llamadas a funciones de IA: 7: You
      Manejar operaciones asíncronas: 8: You
    section Desarrollo Frontend
      Crear interfaz de chat moderna: 6: You
      Dominar interacciones en tiempo real: 8: You
      Construir experiencia de usuario responsiva: 9: You
    section Aplicación Profesional
      Desplegar sistema completo de IA: 7: You
      Optimizar patrones de rendimiento: 8: You
      Crear app lista para producción: 9: You
```
**Destino de tu viaje**: Al final de esta lección, habrás construido una aplicación completa potenciada por IA usando las mismas tecnologías y patrones que impulsan asistentes modernos de IA como ChatGPT, Claude, y Google Bard.

## Entendiendo la IA: De Misterio a Maestría

Antes de sumergirnos en el código, entendamos con qué estamos trabajando. Si has usado APIs antes, conoces el patrón básico: enviar una solicitud, recibir una respuesta.

Las APIs de IA siguen una estructura similar, pero en lugar de recuperar datos prealmacenados de una base de datos, generan nuevas respuestas basadas en patrones aprendidos de enormes cantidades de texto. Piensa en ello como la diferencia entre un sistema de catálogo de biblioteca y un bibliotecario experto que puede sintetizar información de múltiples fuentes.

### ¿Qué es realmente la "IA Generativa"?

Considera cómo la Piedra de Rosetta permitió a los estudiosos entender los jeroglíficos egipcios encontrando patrones entre idiomas conocidos y desconocidos. Los modelos de IA funcionan similarmente – encuentran patrones en grandes cantidades de texto para entender cómo funciona el lenguaje, luego usan esos patrones para generar respuestas apropiadas a nuevas preguntas.

**Déjame explicarlo con una comparación simple:**
- **Base de datos tradicional**: Como pedir tu certificado de nacimiento – obtienes el mismo documento cada vez
- **Motor de búsqueda**: Como pedirle a un bibliotecario que encuentre libros sobre gatos – te muestra lo que está disponible
- **IA generativa**: Como preguntarle a un amigo conocedor sobre gatos – te cuenta cosas interesantes con sus propias palabras, adaptadas a lo que quieres saber

```mermaid
graph LR
    A[Tu Pregunta] --> B[Modelo de IA]
    B --> C[Reconocimiento de Patrones]
    C --> D[Generación de Contenido]
    D --> E[Respuesta Contextual]
    
    F[Datos de Entrenamiento<br/>Libros, Artículos, Web] --> B
```
### Cómo Aprenden los Modelos de IA (Versión Simple)

Los modelos de IA aprenden a través de la exposición a enormes conjuntos de datos que contienen texto de libros, artículos y conversaciones. A través de este proceso, identifican patrones en:
- Cómo se estructuran los pensamientos en la comunicación escrita
- Qué palabras suelen aparecer juntas
- Cómo suelen fluir las conversaciones
- Diferencias contextuales entre comunicación formal e informal

**Es similar a cómo los arqueólogos descifran lenguas antiguas**: analizan miles de ejemplos para comprender la gramática, el vocabulario y el contexto cultural, llegando a interpretar nuevos textos usando esos patrones aprendidos.

### ¿Por qué GitHub Models?

Usamos GitHub Models por una razón bastante práctica – nos da acceso a IA de nivel empresarial sin tener que montar nuestra propia infraestructura de IA (que, créeme, no quieres hacer ahora mismo). Piénsalo como usar una API de clima en vez de intentar predecir el clima tú mismo instalando estaciones meteorológicas por todas partes.

Básicamente es "IA como Servicio", y lo mejor de todo, es gratis para comenzar, así que puedes experimentar sin preocuparte de acumular una gran factura.

```mermaid
graph LR
    A[Interfaz de Chat Frontend] --> B[Tu API Backend]
    B --> C[API de Modelos de GitHub]
    C --> D[Procesamiento del Modelo de IA]
    D --> C
    C --> B
    B --> A
```
Usaremos GitHub Models para nuestra integración backend, que proporciona acceso a capacidades profesionales de IA a través de una interfaz amigable para desarrolladores. El [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) funciona como un entorno de pruebas donde puedes experimentar con diferentes modelos de IA y entender sus capacidades antes de implementarlos en código.

## 🧠 Ecosistema de Desarrollo de Aplicaciones de IA

```mermaid
mindmap
  root((Desarrollo de IA))
    Understanding AI
      Generative Models
        Reconocimiento de Patrones
        Generación de Contenido
        Comprensión de Contexto
        Síntesis de Respuestas
      AI Parameters
        Control de Temperatura
        Límites de Tokens
        Filtrado Top-p
        Indicaciones del Sistema
    Backend Architecture
      API Integration
        Modelos de GitHub
        Autenticación
        Manejo de Solicitudes
        Gestión de Errores
      Python Infrastructure
        Framework FastAPI
        Operaciones Async
        Seguridad del Entorno
        Configuración CORS
    Frontend Experience
      Chat Interface
        Actualizaciones en Tiempo Real
        Historial de Mensajes
        Retroalimentación del Usuario
        Estados de Carga
      Modern Web Tech
        Clases ES6
        Async/Await
        Manipulación del DOM
        Manejo de Eventos
    Professional Patterns
      Security Best Practices
        Gestión de Tokens
        Validación de Entradas
        Prevención de XSS
        Límites de Error
      Production Readiness
        Optimización del Rendimiento
        Diseño Responsivo
        Accesibilidad
        Estrategias de Pruebas
```
**Principio Fundamental**: El desarrollo de aplicaciones de IA combina habilidades tradicionales de desarrollo web con integración de servicios de IA, creando aplicaciones inteligentes que se sienten naturales y receptivas para los usuarios.

![Interfaz GitHub Models AI Playground con selección de modelo y área de prueba](../../../translated_images/playground.d2b927122224ff8f.es.png)

**Esto es lo que hace el playground tan útil:**
- **Prueba** diferentes modelos de IA como GPT-4o-mini, Claude y otros (¡todos gratis!)
- **Testea** tus ideas y prompts antes de escribir código
- **Obtén** fragmentos de código listos para usar en tu lenguaje de programación favorito
- **Ajusta** configuraciones como nivel de creatividad y longitud de respuesta para ver cómo afectan el resultado

Una vez que hayas jugado un poco, solo haz clic en la pestaña "Code" y elige tu lenguaje de programación para obtener el código de implementación que necesitas.

![Elección en playground mostrando opciones de generación de código para diferentes lenguajes de programación](../../../translated_images/playground-choice.1d23ba7d407f4758.es.png)

## Configurando la Integración Backend en Python

Ahora implementemos la integración de IA usando Python. Python es excelente para aplicaciones de IA por su sintaxis simple y potentes librerías. Empezaremos con el código del playground de GitHub Models y luego lo refactorizaremos en una función reutilizable y lista para producción.

### Entendiendo la Implementación Base

Cuando copias el código en Python del playground, obtienes algo parecido a esto. No te preocupes si al principio parece mucho – vamos a repasarlo pieza por pieza:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Para autenticarse con el modelo necesitará generar un token de acceso personal (PAT) en la configuración de su GitHub.
# Cree su token PAT siguiendo las instrucciones aquí: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Esto es lo que sucede en este código:**
- **Importamos** las herramientas que necesitamos: `os` para leer variables de entorno y `OpenAI` para comunicarnos con la IA
- **Configuramos** el cliente OpenAI para apuntar a los servidores de IA de GitHub en vez de a OpenAI directamente
- **Nos autenticamos** usando un token especial de GitHub (¡más sobre eso en un momento!)
- **Estructuramos** nuestra conversación con diferentes "roles" – piensa en ello como preparar la escena para una obra
- **Enviamos** nuestra solicitud a la IA con algunos parámetros de ajuste fino
- **Extraemos** el texto real de la respuesta de todos los datos que regresan

### Entendiendo los Roles de Mensajes: El Framework de Conversación AI

Las conversaciones con IA usan una estructura específica con diferentes "roles" que tienen propósitos distintos:

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

**Piénsalo como dirigir una obra de teatro:**
- **Rol system**: Como las indicaciones escénicas para un actor – le dice a la IA cómo comportarse, qué personalidad tener y cómo responder
- **Rol user**: La pregunta o mensaje real de la persona que usa tu aplicación
- **Rol assistant**: La respuesta de la IA (no la envías tú, pero aparece en el historial de la conversación)

**Analogía del mundo real**: Imagina que presentas a un amigo en una fiesta:
- **Mensaje system**: "Esta es mi amiga Sarah, es doctora y es genial explicando conceptos médicos en términos simples"
- **Mensaje user**: "¿Puedes explicar cómo funcionan las vacunas?"
- **Respuesta assistant**: Sarah responde como una doctora amable, no como abogada o chef

### Entendiendo los Parámetros de IA: Afinando el Comportamiento de la Respuesta

Los parámetros numéricos en las llamadas a la API de IA controlan cómo el modelo genera respuestas. Estas configuraciones te permiten ajustar el comportamiento de la IA para diferentes casos de uso:

#### Temperatura (0.0 a 2.0): La Perilla de Creatividad

**Qué hace**: Controla qué tan creativas o predecibles serán las respuestas de la IA.

**Piénsalo como el nivel de improvisación de un músico de jazz:**
- **Temperatura = 0.1**: Toca exactamente la misma melodía cada vez (muy predecible)
- **Temperatura = 0.7**: Añade algunas variaciones con ritmo, pero sigue reconocible (creatividad balanceada)
- **Temperatura = 1.5**: Jazz experimental completo con giros inesperados (altamente impredecible)

```python
# Respuestas muy predecibles (buenas para preguntas factuales)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Casi siempre dirá "4"
)

# Respuestas creativas (buenas para lluvia de ideas)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Generará historias únicas e inesperadas
)
```

#### Máximo de Tokens (1 a 4096+): El Control de Longitud de Respuesta

**Qué hace**: Establece un límite en cuánto puede durar la respuesta de la IA.

**Piensa en tokens como aproximadamente equivalentes a palabras** (aprox. 1 token = 0.75 palabras en inglés):
- **max_tokens=50**: Corto y dulce (como un mensaje de texto)
- **max_tokens=500**: Un buen párrafo o dos
- **max_tokens=2000**: Una explicación detallada con ejemplos

```python
# Respuestas cortas y concisas
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Obliga a una explicación breve
)

# Respuestas detalladas y completas
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Permite explicaciones detalladas con ejemplos
)
```

#### Top_p (0.0 a 1.0): El Parámetro de Enfoque

**Qué hace**: Controla qué tan enfocada se mantiene la IA en las respuestas más probables.

**Imagina que la IA tiene un enorme vocabulario, ordenado por la probabilidad de cada palabra:**
- **top_p=0.1**: Solo considera el 10% superior de palabras más probables (muy enfocada)
- **top_p=0.9**: Considera el 90% de palabras posibles (más creativa)
- **top_p=1.0**: Considera todo (variedad máxima)

**Por ejemplo**: Si preguntas "El cielo suele ser..."
- **Top_p bajo**: Casi seguramente dirá "azul"
- **Top_p alto**: Podría decir "azul", "nublado", "inmenso", "cambiante", "hermoso", etc.

### Uniéndolo Todo: Combinaciones de Parámetros para Diferentes Casos de Uso

```python
# Para respuestas fácticas y consistentes (como un bot de documentación)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Para asistencia en escritura creativa
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Para respuestas conversacionales y útiles (equilibradas)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matriz de Optimización de Parámetros de IA
    x-axis Baja Creatividad --> Alta Creatividad
    y-axis Respuesta Corta --> Respuesta Larga
    
    quadrant-1 Contenido Creativo
    quadrant-2 Análisis Detallado
    quadrant-3 Datos Rápidos
    quadrant-4 IA Conversacional
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Por qué estos parámetros importan**: Diferentes aplicaciones necesitan distintos tipos de respuestas. Un chatbot de servicio al cliente debe ser consistente y factual (temperatura baja), mientras un asistente de escritura creativa debe ser imaginativo y variado (temperatura alta). Entender estos parámetros te da control sobre la personalidad y estilo de respuesta de tu IA.
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

**Entendiendo esta función mejorada:**
- **Acepta** dos parámetros: el prompt del usuario y un mensaje system opcional
- **Proporciona** un mensaje system predeterminado para un comportamiento general de asistente
- **Usa** anotaciones de tipo Python para mejor documentación del código
- **Incluye** una docstring detallada explicando el propósito y parámetros de la función
- **Devuelve** solo el contenido de la respuesta, facilitando su uso en nuestra API web
- **Mantiene** los mismos parámetros del modelo para comportamiento consistente de IA

### La Magia de los System Prompts: Programando la Personalidad de la IA

Si los parámetros controlan cómo piensa la IA, los system prompts controlan quién piensa que es la IA. Honestamente, esta es una de las partes más geniales de trabajar con IA – estás dando a la IA una personalidad completa, nivel de expertise y estilo de comunicación.

**Piensa en los system prompts como elegir actores para diferentes roles**: En lugar de tener un asistente genérico, puedes crear expertos especializados para diferentes situaciones. ¿Necesitas un profesor paciente? ¿Un socio creativo para lluvia de ideas? ¿Un asesor empresarial serio? Solo cambia el prompt del sistema.

#### Por Qué los System Prompts Son Tan Poderosos

Aquí está la parte fascinante: los modelos de IA han sido entrenados en incontables conversaciones donde las personas adoptan diferentes roles y niveles de expertise. Cuando le das a la IA un rol específico, es como activar un interruptor que enciende todos esos patrones aprendidos.

**Es como la actuación de método para IA**: Le dices a un actor "eres un sabio profesor anciano" y verás cómo ajusta automáticamente su postura, vocabulario y gestos. La IA hace algo notablemente similar con patrones de lenguaje.

#### Cómo Crear System Prompts Efectivos: El Arte y la Ciencia

**La anatomía de un gran system prompt:**
1. **Rol/Identidad**: ¿Quién es la IA?
2. **Expertise**: ¿Qué sabe?
3. **Estilo de comunicación**: ¿Cómo habla?
4. **Instrucciones específicas**: ¿En qué debe enfocarse?

```python
# ❌ Indicación del sistema vaga
"You are helpful."

# ✅ Indicación del sistema detallada y efectiva
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Ejemplos de System Prompts con Contexto

Veamos cómo diferentes system prompts crean personalidades de IA completamente distintas:

```python
# Ejemplo 1: El Maestro Paciente
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Ejemplo 2: El Colaborador Creativo
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Ejemplo 3: El Asesor Estratégico de Negocios
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Viendo los System Prompts en Acción

Probemos la misma pregunta con diferentes system prompts para ver las diferencias drásticas:

**Pregunta**: "¿Cómo manejo la autenticación de usuarios en mi app web?"

```python
# Con el prompt del profesor:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Respuesta típica: "¡Gran pregunta! Vamos a desglosar la autenticación en pasos simples.
# Piénsalo como un portero de discoteca revisando identificaciones..."

# Con el prompt empresarial:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Respuesta típica: "Desde una perspectiva estratégica, la autenticación es crucial para la confianza del usuario
# y el cumplimiento normativo. Permíteme delinear un marco considerando la seguridad,
# la experiencia del usuario y la escalabilidad..."
```

#### Técnicas Avanzadas para System Prompts

**1. Establecimiento de Contexto**: Dale a la IA información de fondo
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formateo de Salida**: Indica a la IA cómo estructurar las respuestas
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

**3. Establecimiento de Restricciones**: Define lo que la IA NO debe hacer
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Por Qué Esto Importa para Tu Asistente de Chat

Entender los prompts del sistema te da un poder increíble para crear asistentes de IA especializados:
- **Bot de servicio al cliente**: Útil, paciente, consciente de las políticas
- **Tutor de aprendizaje**: Motivador, paso a paso, verifica comprensión
- **Socio creativo**: Imaginativo, construye sobre ideas, pregunta "¿y si?"
- **Experto técnico**: Preciso, detallado, consciente de la seguridad

**La idea clave**: No solo estás llamando a una API de IA, estás creando una personalidad de IA personalizada que sirve a tu caso de uso específico. Esto es lo que hace que las aplicaciones modernas de IA se sientan hechas a medida y útiles en lugar de genéricas.

### 🎯 Revisión Pedagógica: Programación de Personalidad de IA

**Pausa y Reflexión**: Acabas de aprender a programar personalidades de IA mediante prompts del sistema. Esta es una habilidad fundamental en el desarrollo moderno de aplicaciones de IA.

**Autoevaluación Rápida**:
- ¿Puedes explicar cómo los prompts del sistema difieren de los mensajes regulares de usuario?
- ¿Cuál es la diferencia entre los parámetros temperature y top_p?
- ¿Cómo crearías un prompt del sistema para un caso de uso específico (como un tutor de código)?

**Conexión con el Mundo Real**: Las técnicas de prompts del sistema que has aprendido se usan en todas las principales aplicaciones de IA, desde la asistencia de código de GitHub Copilot hasta la interfaz conversacional de ChatGPT. Estás dominando los mismos patrones usados por los equipos de producto de IA en grandes compañías tecnológicas.

**Pregunta Desafío**: ¿Cómo diseñarías diferentes personalidades de IA para distintos tipos de usuarios (principiante vs experto)? Considera cómo el mismo modelo de IA subyacente podría servir a diferentes audiencias mediante ingeniería de prompts.

## Construyendo la API Web con FastAPI: Tu Centro de Comunicación de IA de Alto Rendimiento

Ahora vamos a construir el backend que conecta tu frontend con los servicios de IA. Usaremos FastAPI, un moderno framework de Python que sobresale en la creación de APIs para aplicaciones de IA.

FastAPI ofrece varias ventajas para este tipo de proyecto: soporte async integrado para manejar solicitudes concurrentes, generación automática de documentación de API y excelente rendimiento. Tu servidor FastAPI actúa como intermediario que recibe solicitudes del frontend, se comunica con los servicios de IA y devuelve respuestas formateadas.

### ¿Por Qué FastAPI para Aplicaciones de IA?

Probablemente te estés preguntando: "¿No puedo simplemente llamar a la IA directamente desde mi JavaScript del frontend?" o "¿Por qué FastAPI en vez de Flask o Django?" ¡Buenas preguntas!

**Esto es por qué FastAPI es perfecto para lo que estamos construyendo:**
- **Async por defecto**: Puede manejar múltiples solicitudes de IA a la vez sin atascarse
- **Documentación automática**: Visita `/docs` y obtén una página de documentación de API interactiva y bonita gratis
- **Validación integrada**: Detecta errores antes de que causen problemas
- **Rápido como un rayo**: Uno de los frameworks de Python más veloces
- **Python moderno**: Usa todas las características más actuales de Python

**Y aquí por qué necesitamos un backend:**

**Seguridad**: Tu clave API de IA es como una contraseña – si la pones en JavaScript del frontend, cualquiera que vea el código fuente de tu web podría robarla y usar tus créditos de IA. El backend mantiene las credenciales sensibles seguras.

**Límites y Control**: El backend te permite controlar con qué frecuencia los usuarios pueden hacer solicitudes, implementar autenticación y agregar registro para seguir el uso.

**Procesamiento de Datos**: Tal vez quieras guardar conversaciones, filtrar contenido inapropiado o combinar múltiples servicios de IA. La lógica vive en el backend.

**La arquitectura se parece a un modelo cliente-servidor:**
- **Frontend**: Capa de interfaz de usuario para interacción
- **Backend API**: Capa de procesamiento y enrutamiento de solicitudes
- **Servicio de IA**: Computación externa y generación de respuestas
- **Variables de entorno**: Configuración segura y almacenamiento de credenciales

### Entendiendo el Flujo Petición-Respuesta

Vamos a seguir qué ocurre cuando un usuario envía un mensaje:

```mermaid
sequenceDiagram
    participant User as 👤 Usuario
    participant Frontend as 🌐 Frontend
    participant API as 🔧 Servidor FastAPI
    participant AI as 🤖 Servicio de IA
    
    User->>Frontend: Escribe "¡Hola IA!"
    Frontend->>API: POST /hello {"message": "¡Hola IA!"}
    Note over API: Valida la solicitud<br/>Agrega indicación del sistema
    API->>AI: Envía solicitud formateada
    AI->>API: Devuelve respuesta de IA
    Note over API: Procesa respuesta<br/>Registra la conversación
    API->>Frontend: {"response": "¡Hola! ¿Cómo puedo ayudar?"}
    Frontend->>User: Muestra mensaje de IA
```
**Entendiendo cada paso:**
1. **Interacción del usuario**: La persona escribe en la interfaz de chat
2. **Procesamiento frontend**: JavaScript captura la entrada y la formatea como JSON
3. **Validación API**: FastAPI valida automáticamente la solicitud usando modelos Pydantic
4. **Integración con IA**: El backend añade contexto (prompt del sistema) y llama al servicio de IA
5. **Manejo de respuestas**: La API recibe respuesta de IA y puede modificarla si es necesario
6. **Mostrar en frontend**: JavaScript muestra la respuesta en la interfaz de chat

### Entendiendo la Arquitectura de la API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "¡Hola IA!"}
    FastAPI->>AI Function: call_llm(mensaje, system_prompt)
    AI Function->>GitHub Models: solicitud API
    GitHub Models->>AI Function: respuesta IA
    AI Function->>FastAPI: texto de respuesta
    FastAPI->>Frontend: {"response": "¡Hola! ¿Cómo puedo ayudar?"}
```
```mermaid
flowchart TD
    A[Entrada del Usuario] --> B[Validación en Frontend]
    B --> C[Solicitud HTTP POST]
    C --> D[Enrutador FastAPI]
    D --> E[Validación Pydantic]
    E --> F[Llamada a Función de IA]
    F --> G[API de Modelos de GitHub]
    G --> H[Procesamiento de Respuesta]
    H --> I[Respuesta JSON]
    I --> J[Actualización en Frontend]
    
    subgraph "Capa de Seguridad"
        K[Middleware CORS]
        L[Variables de Entorno]
        M[Manejo de Errores]
    end
    
    D --> K
    F --> L
    H --> M
```
### Creando la Aplicación FastAPI

Construyamos nuestra API paso a paso. Crea un archivo llamado `api.py` con el siguiente código FastAPI:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Configurar el registro de eventos
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Crear aplicación FastAPI
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configurar apropiadamente para producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos Pydantic para validación de solicitud/respuesta
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
        # Extraer y validar mensaje
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Llamar al servicio AI (nota: call_llm debería hacerse asíncrono para mejor rendimiento)
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

**Entendiendo la implementación FastAPI:**
- **Importa** FastAPI para funcionalidad moderna de framework web y Pydantic para validación de datos
- **Crea** documentación automática de API (disponible en `/docs` al correr el servidor)
- **Habilita** middleware CORS para permitir solicitudes frontend desde orígenes diferentes
- **Define** modelos Pydantic para validación y documentación automática de solicitudes/respuestas
- **Usa** endpoints async para mejor rendimiento con solicitudes concurrentes
- **Implementa** códigos HTTP adecuados y manejo de errores con HTTPException
- **Incluye** registro estructurado para monitoreo y depuración
- **Proporciona** endpoint de chequeo de salud para monitoreo del estado del servicio

**Ventajas clave de FastAPI sobre frameworks tradicionales:**
- **Validación automática**: Modelos Pydantic aseguran integridad de datos antes de procesar
- **Docs interactivas**: Visita `/docs` para documentación de API autogenerada y testable
- **Seguridad de tipos**: Anotaciones de tipos en Python evitan errores en tiempo de ejecución y mejoran calidad de código
- **Soporte async**: Maneja múltiples solicitudes de IA simultáneas sin bloqueos
- **Rendimiento**: Procesa solicitudes significativamente más rápido para aplicaciones en tiempo real

### Entendiendo CORS: El Guardia de Seguridad Web

CORS (Cross-Origin Resource Sharing) es como un guardia de seguridad en un edificio que verifica si los visitantes pueden entrar. Veamos por qué esto importa y cómo afecta tu aplicación.

#### ¿Qué es CORS y Por Qué Existe?

**El problema**: Imagina que cualquier sitio web pudiera hacer solicitudes al sitio de tu banco en tu nombre sin tu permiso. ¡Eso sería una pesadilla de seguridad! Los navegadores lo previenen por defecto con la "Política de mismo origen."

**Política de mismo origen**: Los navegadores solo permiten que páginas web hagan solicitudes al mismo dominio, puerto y protocolo desde donde se cargaron.

**Analogía real**: Es como la seguridad en un edificio de apartamentos – solo los residentes (mismo origen) pueden entrar por defecto. Si quieres dejar que un amigo (origen diferente) visite, tienes que decirle explícitamente a seguridad que está permitido.

#### CORS en Tu Entorno de Desarrollo

Durante el desarrollo, tu frontend y backend corren en puertos diferentes:
- Frontend: `http://localhost:3000` (o file:// si abres el HTML directamente)
- Backend: `http://localhost:5000`

¡Estos se consideran "orígenes diferentes" aunque estén en la misma computadora!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Esto le dice a los navegadores: "Está bien que otros orígenes hagan peticiones a esta API"
```

**Qué hace la configuración CORS en la práctica:**
- **Agrega** cabeceras HTTP especiales en respuestas API que le dicen a los navegadores "esta solicitud cross-origin está permitida"
- **Maneja** solicitudes "preflight" (los navegadores a veces verifican permisos antes de enviar la solicitud real)
- **Evita** el temido error "bloqueado por política CORS" en la consola del navegador

#### Seguridad CORS: Desarrollo vs Producción

```python
# 🚨 Desarrollo: Permite TODOS los orígenes (conveniente pero inseguro)
CORS(app)

# ✅ Producción: Solo permitir tu dominio frontal específico
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Avanzado: Orígenes diferentes para diferentes entornos
if app.debug:  # Modo desarrollo
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Modo producción
    CORS(app, origins=["https://yourdomain.com"])
```

**Por qué importa**: En desarrollo, `CORS(app)` es como dejar la puerta principal abierta – cómodo pero inseguro. En producción, quieres especificar exactamente qué sitios pueden hablar con tu API.

#### Escenarios Comunes CORS y Soluciones

| Escenario | Problema | Solución |
|----------|---------|----------|
| **Desarrollo Local** | Frontend no puede alcanzar backend | Añadir CORSMiddleware a FastAPI |
| **GitHub Pages + Heroku** | Frontend desplegado no puede alcanzar API | Agregar URL de GitHub Pages a orígenes CORS |
| **Dominio Personalizado** | Errores CORS en producción | Actualizar orígenes CORS para que coincida con tu dominio |
| **App Móvil** | App no puede conectar con API web | Agregar dominio de la app o usar `*` con precaución |

**Consejo pro**: Puedes verificar las cabeceras CORS en las herramientas de desarrollador de tu navegador bajo la pestaña Red. Busca cabeceras como `Access-Control-Allow-Origin` en la respuesta.

### Manejo de Errores y Validación

Observa cómo nuestra API incluye un manejo adecuado de errores:

```python
# Validar que recibimos un mensaje
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Principios clave de validación:**
- **Verifica** campos obligatorios antes de procesar solicitudes
- **Retorna** mensajes de error en formato JSON significativos
- **Usa** códigos HTTP apropiados (400 para solicitudes incorrectas)
- **Proporciona** retroalimentación clara para ayudar a los desarrolladores frontend a depurar problemas

## Configuración y Ejecución de Tu Backend

Ahora que tenemos nuestra integración con IA y servidor FastAPI listo, vamos a ponerlo todo en marcha. El proceso de configuración implica instalar dependencias Python, configurar variables de entorno y arrancar tu servidor de desarrollo.

### Configuración del Entorno Python

Configuraremos tu entorno de desarrollo Python. Los entornos virtuales son como el enfoque compartimentado del Proyecto Manhattan – cada proyecto tiene su propio espacio aislado con herramientas y dependencias específicas, previniendo conflictos entre proyectos.

```bash
# Navega a tu directorio backend
cd backend

# Crea un entorno virtual (como crear una habitación limpia para tu proyecto)
python -m venv venv

# Actívalo (Linux/Mac)
source ./venv/bin/activate

# En Windows, usa:
# venv\Scripts\activate

# Instala lo bueno
pip install openai fastapi uvicorn python-dotenv
```

**Qué hicimos:**
- **Creamos** una burbuja Python propia donde instalar paquetes sin afectar nada más
- **La activamos** para que la terminal sepa usar este entorno específico
- **Instalamos** lo esencial: OpenAI para magia IA, FastAPI para nuestra API web, Uvicorn para correrla realmente, y python-dotenv para manejo seguro de secretos

**Dependencias clave explicadas:**
- **FastAPI**: Framework web moderno y rápido con documentación automática de API
- **Uvicorn**: Servidor ASGI ultra rápido que ejecuta aplicaciones FastAPI
- **OpenAI**: Biblioteca oficial para modelos GitHub y API OpenAI
- **python-dotenv**: Carga segura de variables de entorno desde archivos .env

### Configuración del Entorno: Manteniendo los Secretos a Salvo

Antes de iniciar nuestra API, debemos hablar de una de las lecciones más importantes en desarrollo web: cómo mantener tus secretos realmente secretos. Las variables de entorno son como una bóveda segura a la que solo tu aplicación puede acceder.

#### ¿Qué Son las Variables de Entorno?

**Piensa en las variables de entorno como una caja de seguridad** – pones tus cosas valiosas ahí, y solo tú (y tu app) tienen la llave para sacarlas. En vez de escribir información sensible directamente en tu código (donde literalmente cualquiera la puede ver), la guardas de forma segura en el entorno.

**La diferencia es:**
- **La forma incorrecta**: Escribir tu contraseña en una nota y pegarla en tu monitor
- **La forma correcta**: Guardar tu contraseña en un gestor seguro accesible solo por ti

#### Por Qué Importan las Variables de Entorno

```python
# 🚨 NUNCA HAGAS ESTO - clave API visible para todos
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # ¡Cualquiera puede robar esto!
    base_url="https://models.github.ai/inference"
)

# ✅ HAZ ESTO - clave API almacenada de forma segura
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Solo tu aplicación puede acceder a esto
    base_url="https://models.github.ai/inference"
)
```

**Qué pasa si codificas secretos en tu código:**
1. **Exposición en control de versiones**: Cualquiera con acceso a tu repositorio Git ve tu clave API
2. **Repositorios públicos**: Si subes a GitHub, tu clave es visible para Internet entero
3. **Compartir en equipo**: Otros desarrolladores del proyecto tienen acceso a tu clave personal
4. **Brechas de seguridad**: Si alguien roba tu clave API, puede usar tus créditos de IA

#### Creando Tu Archivo de Entorno

Crea un archivo `.env` en tu directorio backend. Este archivo guarda tus secretos localmente:

```bash
# archivo .env - Esto NUNCA debe ser enviado a Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Entendiendo el archivo .env:**
- **Un secreto por línea** en formato `KEY=value`
- **Sin espacios** alrededor del signo igual
- **No son necesarias comillas** alrededor de los valores (por lo general)
- **Los comentarios** empiezan con `#`

#### Creando Tu Token de Acceso Personal de GitHub

Tu token de GitHub es como una contraseña especial que le da permiso a tu aplicación para usar los servicios de IA de GitHub:

**Creación paso a paso del token:**
1. **Ve a Configuración de GitHub** → Configuración de desarrollador → Tokens de acceso personal → Tokens (clásicos)
2. **Haz clic en "Generar nuevo token (clásico)"**
3. **Establece la expiración** (30 días para pruebas, más largo para producción)
4. **Selecciona permisos**: Marca "repo" y otros que necesites
5. **Genera el token** y cópialo inmediatamente (no podrás verlo de nuevo)
6. **Pégalo en tu archivo .env**

```bash
# Ejemplo de cómo se ve tu token (¡esto es falso!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Cargando Variables de Entorno en Python

```python
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Ahora puedes acceder a ellas de manera segura
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Qué hace este código:**
- **Carga** tu archivo .env y hace las variables accesibles a Python
- **Verifica** si el token requerido existe (manejo de errores limpio)
- **Lanza** un error claro si falta el token
- **Usa** el token de forma segura sin exponerlo en el código

#### Seguridad Git: El archivo .gitignore

Tu archivo `.gitignore` le dice a Git qué archivos no rastrear ni subir jamás:

```bash
# .gitignore - Añade estas líneas
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Por qué es crucial**: Una vez agregas `.env` a `.gitignore`, Git ignorará tu archivo de entorno, evitando subir accidentalmente tus secretos a GitHub.

#### Diferentes Entornos, Diferentes Secretos

Las aplicaciones profesionales usan diferentes claves API para distintos entornos:

```bash
# .env.desarrollo
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.producción
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Por qué importa**: No quieres que tus experimentos de desarrollo afecten la cuota de IA en producción, y deseas distintos niveles de seguridad para cada entorno.

### Iniciando Tu Servidor de Desarrollo: Dando Vida a Tu FastAPI
Ahora llega el momento emocionante: ¡iniciar tu servidor de desarrollo FastAPI y ver cómo cobra vida tu integración de IA! FastAPI utiliza Uvicorn, un servidor ASGI ultrarrápido diseñado específicamente para aplicaciones Python asíncronas.

#### Entendiendo el proceso de inicio del servidor FastAPI

```bash
# Método 1: Ejecución directa en Python (incluye recarga automática)
python api.py

# Método 2: Usando Uvicorn directamente (más control)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Cuando ejecutas este comando, esto es lo que sucede entre bastidores:

**1. Python carga tu aplicación FastAPI**:
- Importa todas las librerías requeridas (FastAPI, Pydantic, OpenAI, etc.)
- Carga las variables de entorno desde tu archivo `.env`
- Crea la instancia de la aplicación FastAPI con documentación automática

**2. Uvicorn configura el servidor ASGI**:
- Se vincula al puerto 5000 con capacidades asíncronas para manejar solicitudes
- Configura el enrutamiento de solicitudes con validación automática
- Habilita recarga en caliente para desarrollo (reinicia al detectar cambios en archivos)
- Genera documentación interactiva de la API

**3. El servidor comienza a escuchar**:
- Tu terminal muestra: `INFO: Uvicorn running on http://0.0.0.0:5000`
- El servidor puede manejar múltiples solicitudes concurrentes de IA
- Tu API está lista con documentación automática en `http://localhost:5000/docs`

#### Qué deberías ver cuando todo funciona

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Entendiendo la salida de FastAPI:**
- **Will watch for changes**: Recarga automática habilitada para desarrollo
- **Uvicorn running**: Servidor ASGI de alto rendimiento activo
- **Started reloader process**: Observador de archivos para reinicios automáticos
- **Application startup complete**: Aplicación FastAPI inicializada correctamente
- **Interactive docs available**: Visita `/docs` para la documentación automática de la API

#### Probando tu FastAPI: múltiples enfoques poderosos

FastAPI ofrece varias formas convenientes para probar tu API, incluida la documentación interactiva automática:

**Método 1: Documentación interactiva de la API (Recomendado)**
1. Abre tu navegador y ve a `http://localhost:5000/docs`
2. Verás Swagger UI con todos tus endpoints documentados
3. Haz clic en `/hello` → "Try it out" → Ingresa un mensaje de prueba → "Execute"
4. Ve la respuesta directamente en el navegador con el formato adecuado

**Método 2: Prueba básica desde el navegador**
1. Ve a `http://localhost:5000` para el endpoint raíz
2. Ve a `http://localhost:5000/health` para comprobar el estado del servidor
3. Esto confirma que tu servidor FastAPI está funcionando correctamente

**Método 2: Prueba desde línea de comandos (Avanzado)**
```bash
# Prueba con curl (si está disponible)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Respuesta esperada:
# {"response": "¡Hola! Soy tu asistente de IA. ¿Cómo puedo ayudarte hoy?"}
```

**Método 3: Script de prueba en Python**
```python
# test_api.py - Crea este archivo para probar tu API
import requests
import json

# Prueba el endpoint de la API
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Solucionando problemas comunes al iniciar

| Mensaje de Error | Significado | Cómo arreglarlo |
|------------------|-------------|-----------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI no instalado | Ejecuta `pip install fastapi uvicorn` en tu entorno virtual |
| `ModuleNotFoundError: No module named 'uvicorn'` | Servidor ASGI no instalado | Ejecuta `pip install uvicorn` en tu entorno virtual |
| `KeyError: 'GITHUB_TOKEN'` | Variable de entorno no encontrada | Revisa tu archivo `.env` y la llamada a `load_dotenv()` |
| `Address already in use` | El puerto 5000 está ocupado | Termina otros procesos que usen el puerto 5000 o cambia el puerto |
| `ValidationError` | Los datos de la solicitud no coinciden con el modelo Pydantic | Verifica que el formato de tu solicitud coincida con el esquema esperado |
| `HTTPException 422` | Entidad no procesable | Falló la validación de la solicitud, revisa `/docs` para el formato correcto |
| `OpenAI API error` | Falló la autenticación del servicio IA | Verifica que tu token de GitHub sea correcto y tenga los permisos adecuados |

#### Buenas prácticas de desarrollo

**Recarga en caliente**: FastAPI con Uvicorn provee recarga automática cuando guardas cambios en tus archivos Python. Esto significa que puedes modificar tu código y probarlo inmediatamente sin reiniciar manualmente.

```python
# Habilitar recarga en caliente explícitamente
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True habilita la recarga en caliente
```

**Registro para desarrollo**: Agrega logging para entender qué está ocurriendo:

```python
import logging

# Configurar el registro
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

**Por qué ayuda el logging**: Durante el desarrollo, puedes ver exactamente qué solicitudes llegan, qué responde la IA y dónde ocurren errores. Esto hace que depurar sea mucho más rápido.

### Configurando para GitHub Codespaces: desarrollo en la nube simplificado

GitHub Codespaces es como tener una computadora de desarrollo potente en la nube que puedes acceder desde cualquier navegador. Si trabajas en Codespaces, hay algunos pasos adicionales para hacer que tu backend sea accesible para tu frontend.

#### Entendiendo la red en Codespaces

En un entorno local de desarrollo, todo corre en la misma computadora:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (o file://)

En Codespaces, tu entorno de desarrollo corre en los servidores de GitHub, así que "localhost" tiene un significado diferente. GitHub crea automáticamente URLs públicas para tus servicios, pero necesitas configurarlos correctamente.

#### Configuración paso a paso en Codespaces

**1. Inicia tu servidor backend**:
```bash
cd backend
python api.py
```

Verás el mensaje de inicio familiar de FastAPI/Uvicorn, pero notarás que está corriendo dentro del entorno Codespace.

**2. Configura la visibilidad del puerto**:
- Busca la pestaña "Ports" en el panel inferior de VS Code
- Encuentra el puerto 5000 en la lista
- Haz clic derecho sobre el puerto 5000
- Selecciona "Port Visibility" → "Public"

**¿Por qué hacerlo público?** Por defecto, los puertos en Codespace son privados (solo accesibles para ti). Hacerlo público permite que tu frontend (que corre en el navegador) se comunique con tu backend.

**3. Obtén tu URL pública**:
Después de hacer público el puerto, verás una URL como:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Actualiza la configuración de tu frontend**:
```javascript
// En tu app.js del frontend, actualiza la BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Entendiendo las URLs de Codespace

Las URLs de Codespace siguen un patrón predecible:
```
https://[codespace-name]-[port].app.github.dev
```

**Desglose:**
- `codespace-name`: Identificador único de tu Codespace (usualmente incluye tu nombre de usuario)
- `port`: Número de puerto donde tu servicio corre (5000 para nuestra app FastAPI)
- `app.github.dev`: Dominio de GitHub para aplicaciones Codespace

#### Probando tu configuración Codespace

**1. Prueba el backend directamente**:
Abre tu URL pública en una pestaña nueva del navegador. Deberías ver:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Prueba con herramientas de desarrollo del navegador**:
```javascript
// Abre la consola del navegador y prueba tu API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs desarrollo local

| Aspecto | Desarrollo local | GitHub Codespaces |
|---------|------------------|-------------------|
| **Tiempo de configuración** | Más largo (instalar Python, dependencias) | Instantáneo (entorno preconfigurado) |
| **Acceso a URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Configuración de puertos** | Automática | Manual (hacer puertos públicos) |
| **Persistencia de archivos** | Máquina local | Repositorio GitHub |
| **Colaboración** | Difícil compartir entorno | Fácil compartir enlace de Codespace |
| **Dependencia de internet** | Solo para llamadas a API IA | Requerida para todo |

#### Consejos para desarrollo en Codespace

**Variables de entorno en Codespaces**:  
Tu archivo `.env` funciona igual en Codespaces, pero también puedes definir variables de entorno directamente en el Codespace:

```bash
# Establecer variable de entorno para la sesión actual
export GITHUB_TOKEN="your_token_here"

# O agregar a tu .bashrc para persistencia
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Gestión de puertos**:
- Codespaces detecta automáticamente cuando tu aplicación empieza a escuchar en un puerto
- Puedes reenviar múltiples puertos simultáneamente (útil si añades una base de datos luego)
- Los puertos permanecen accesibles mientras tu Codespace esté activo

**Flujo de trabajo de desarrollo**:
1. Haz cambios en el código en VS Code
2. FastAPI recarga automáticamente (gracias al modo reload de Uvicorn)
3. Prueba los cambios inmediatamente vía la URL pública
4. Haz commit y push cuando estés listo

> 💡 **Tip profesional**: Guarda en favoritos la URL del backend de tu Codespace durante el desarrollo. Dado que los nombres Codespace son estables, la URL no cambiará mientras uses el mismo Codespace.

## Creando la interfaz frontend de chat: donde humanos se encuentran con IA

Ahora construiremos la interfaz de usuario, la parte que determina cómo interactúan las personas con tu asistente de IA. Al igual que el diseño de la interfaz original del iPhone, nos enfocamos en hacer que la tecnología compleja se sienta intuitiva y natural de usar.

### Entendiendo la arquitectura moderna del frontend

Nuestra interfaz de chat será lo que llamamos una "aplicación de página única" o SPA. En lugar del enfoque antiguo donde cada clic carga una página nueva, nuestra app se actualiza de forma suave e instantánea:

**Sitios web antiguos**: Como leer un libro físico – pasas a páginas completamente nuevas  
**Nuestra app de chat**: Como usar tu teléfono – todo fluye y se actualiza sin interrupciones

```mermaid
graph TD
    A[Usuario Escribe Mensaje] --> B[JavaScript Captura Entrada]
    B --> C[Validar y Formatear Datos]
    C --> D[Enviar a API del Servidor]
    D --> E[Mostrar Estado de Carga]
    E --> F[Recibir Respuesta de IA]
    F --> G[Actualizar Interfaz de Chat]
    G --> H[Listo para el Siguiente Mensaje]
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
    
    ChatApp --> DOM : manipula
    ChatApp --> FastAPI : envía solicitudes
```
### Los tres pilares del desarrollo frontend

Cada aplicación frontend, desde sitios web simples hasta apps complejas como Discord o Slack, se construye sobre tres tecnologías básicas. Piénsalo como la base de todo lo que ves e interactúas en la web:

**HTML (Estructura)**: Es tu fundamento  
- Decide qué elementos existen (botones, áreas de texto, contenedores)  
- Da significado al contenido (esto es un encabezado, esto es un formulario, etc.)  
- Crea la estructura básica sobre la que todo lo demás se construye

**CSS (Presentación)**: Es tu diseñadora de interiores  
- Hace que todo se vea hermoso (colores, fuentes, diseños)  
- Maneja diferentes tamaños de pantalla (teléfono vs laptop vs tablet)  
- Crea animaciones suaves y retroalimentación visual

**JavaScript (Comportamiento)**: Es tu cerebro  
- Responde a lo que hacen los usuarios (clics, teclear, desplazarse)  
- Habla con tu backend y actualiza la página  
- Hace que todo sea interactivo y dinámico

**Piénsalo como diseño arquitectónico:**  
- **HTML**: El plano estructural (definiendo espacios y relaciones)  
- **CSS**: El diseño estético y ambiental (estilo visual y experiencia de usuario)  
- **JavaScript**: Los sistemas mecánicos (funcionalidad e interactividad)

### Por qué la arquitectura moderna de JavaScript importa

Nuestra aplicación de chat usará patrones modernos de JavaScript que verás en aplicaciones profesionales. Entender estos conceptos te ayudará a crecer como desarrollador:

**Arquitectura basada en clases**: Organizaremos nuestro código en clases, que son como planos para objetos  
**Async/Await**: Manera moderna de manejar operaciones que toman tiempo (como llamadas a API)  
**Programación orientada a eventos**: Nuestra app responde a acciones del usuario (clics, pulsaciones) en lugar de correr en un ciclo continuo  
**Manipulación del DOM**: Actualización dinámica del contenido de la página basada en interacciones y respuestas de la API

### Configuración de la estructura del proyecto

Crea un directorio frontend con esta estructura organizada:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Entendiendo la arquitectura:**  
- **Separa** las responsabilidades entre estructura (HTML), comportamiento (JavaScript) y presentación (CSS)  
- **Mantiene** una estructura de archivos simple, fácil de navegar y modificar  
- **Sigue** las mejores prácticas de desarrollo web para organización y mantenibilidad  

### Construyendo la base HTML: estructura semántica para accesibilidad

Comencemos con la estructura HTML. El desarrollo web moderno enfatiza el "HTML semántico" – usar elementos HTML que describan claramente su propósito, no solo su apariencia. Esto hace que tu aplicación sea accesible para lectores de pantalla, motores de búsqueda y otras herramientas.

**Por qué el HTML semántico importa**: Imagina describiendo tu app de chat a alguien por teléfono. Dirías "hay un encabezado con el título, un área principal donde aparecen las conversaciones, y un formulario abajo para escribir mensajes". El HTML semántico usa elementos que coinciden con esta descripción natural.

Crea `index.html` con este marcado cuidadosamente estructurado:

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

**Entendiendo cada elemento HTML y su propósito:**

#### Estructura del documento
- **`<!DOCTYPE html>`**: Indica al navegador que es HTML5 moderno  
- **`<html lang="en">`**: Especifica el lenguaje de la página para lectores de pantalla y herramientas de traducción  
- **`<meta charset="UTF-8">`**: Asegura codificación correcta de caracteres para texto internacional  
- **`<meta name="viewport"...>`**: Hace que la página sea responsiva para móviles controlando zoom y escala  

#### Elementos semánticos
- **`<header>`**: Identifica claramente la sección superior con título y descripción  
- **`<main>`**: Designa el área principal de contenido (donde ocurren las conversaciones)  
- **`<form>`**: Correcto semánticamente para entrada de usuario, permite navegación adecuada con teclado  

#### Funcionalidades de accesibilidad
- **`role="log"`**: Indica a lectores de pantalla que esta área contiene un log cronológico de mensajes  
- **`aria-live="polite"`**: Anuncia mensajes nuevos a lectores de pantalla sin interrumpir  
- **`aria-label`**: Proporciona etiquetas descriptivas para controles del formulario  
- **`required`**: El navegador valida que el usuario ingrese un mensaje antes de enviar  

#### Integración de CSS y JavaScript
- **Atributos `class`**: Proveen ganchos para estilos CSS (p. ej., `chat-container`, `input-group`)  
- **Atributos `id`**: Permiten a JavaScript encontrar y manipular elementos específicos  
- **Ubicación del script**: El archivo JavaScript se carga al final para que primero cargue el HTML  

**Por qué esta estructura funciona:**  
- **Flujo lógico**: Encabezado → contenido principal → formulario de entrada sigue un orden natural de lectura  
- **Accesible con teclado**: Usuarios pueden tabular por todos los elementos interactivos  
- **Amigable con lectores de pantalla**: Puntos de referencia claros y descripciones para usuarios con discapacidad visual  
- **Responsivo para móviles**: Meta viewport habilita diseño responsivo  
- **Mejora progresiva**: Funciona incluso si CSS o JavaScript fallan al cargar  

### Añadiendo JavaScript interactivo: lógica para una aplicación web moderna
Ahora construyamos el JavaScript que da vida a nuestra interfaz de chat. Usaremos patrones modernos de JavaScript que encontrarás en el desarrollo web profesional, incluyendo clases ES6, async/await y programación basada en eventos.

#### Entendiendo la Arquitectura Moderna de JavaScript

En lugar de escribir código procedural (una serie de funciones que se ejecutan en orden), crearemos una **arquitectura basada en clases**. Piensa en una clase como un plano para crear objetos, como el plano de un arquitecto que se puede usar para construir múltiples casas.

**¿Por qué usar clases para aplicaciones web?**
- **Organización**: Toda la funcionalidad relacionada está agrupada
- **Reutilización**: Podrías crear múltiples instancias de chat en la misma página
- **Mantenibilidad**: Más fácil depurar y modificar funciones específicas
- **Estándar profesional**: Este patrón se usa en frameworks como React, Vue y Angular

Crea `app.js` con este JavaScript moderno y bien estructurado:

```javascript
// app.js - Lógica moderna de la aplicación de chat

class ChatApp {
    constructor() {
        // Obtén referencias a los elementos del DOM que necesitaremos manipular
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Configura aquí la URL de tu backend
        this.BASE_URL = "http://localhost:5000"; // Actualiza esto según tu entorno
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Configura los escuchadores de eventos cuando se cree la aplicación de chat
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Escucha el envío del formulario (cuando el usuario hace clic en Enviar o presiona Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // También escucha la tecla Enter en el campo de entrada (mejor experiencia de usuario)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Evita que el formulario recargue la página
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // No envíes mensajes vacíos
        
        // Proporciona retroalimentación al usuario de que algo está ocurriendo
        this.setLoading(true);
        
        // Añade el mensaje del usuario al chat inmediatamente (UI optimista)
        this.appendMessage(messageText, "user");
        
        // Limpia el campo de entrada para que el usuario pueda escribir el siguiente mensaje
        this.input.value = '';
        
        try {
            // Llama a la API de IA y espera la respuesta
            const reply = await this.callAPI(messageText);
            
            // Añade la respuesta de la IA al chat
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Vuelve a habilitar la interfaz independientemente de éxito o fallo
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

// Inicializa la aplicación de chat cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Entendiendo Cada Concepto de JavaScript

**Estructura de Clases ES6**:
```javascript
class ChatApp {
    constructor() {
        // Esto se ejecuta cuando creas una nueva instancia de ChatApp
        // Es como la función "setup" para tu chat
    }
    
    methodName() {
        // Los métodos son funciones que pertenecen a la clase
        // Pueden acceder a las propiedades de la clase usando "this"
    }
}
```

**Patrón Async/Await**:
```javascript
// Forma antigua (infierno de callbacks):
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Forma moderna (async/await):
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**Programación Basada en Eventos**:
En lugar de comprobar constantemente si algo sucedió, "escuchamos" eventos:
```javascript
// Cuando se envía el formulario, ejecutar handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Cuando se presiona la tecla Enter, también ejecutar handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulación del DOM**:
```javascript
// Crear nuevos elementos
const messageElement = document.createElement("div");

// Modificar sus propiedades
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Añadir a la página
this.messages.appendChild(messageElement);
```

#### Seguridad y Mejores Prácticas

**Prevención de XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Esto escapa HTML automáticamente
    return div.innerHTML;
}
```

**Por qué es importante**: Si un usuario escribe `<script>alert('hack')</script>`, esta función asegura que se muestre como texto y no se ejecute como código.

**Manejo de Errores**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Mostrar un error amigable para el usuario en lugar de que la aplicación falle
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Consideraciones de Experiencia de Usuario**:
- **Interfaz Optimista**: Añade el mensaje del usuario inmediatamente, sin esperar la respuesta del servidor
- **Estados de carga**: Deshabilita botones y muestra "Enviando..." mientras espera
- **Auto-scroll**: Mantén visibles los mensajes más recientes
- **Validación de entrada**: No enviar mensajes vacíos
- **Atajos de teclado**: La tecla Enter envía mensajes (como en apps de chat reales)

#### Entendiendo el Flujo de la Aplicación

1. **Carga la página** → se dispara evento `DOMContentLoaded` → se crea `new ChatApp()`
2. **Se ejecuta el constructor** → Obtiene referencias del DOM → Configura listeners de eventos
3. **El usuario escribe un mensaje** → Presiona Enter o hace clic en Enviar → se ejecuta `handleSubmit`
4. **handleSubmit** → Valida entrada → Muestra estado de carga → Llama la API
5. **API responde** → Añade mensaje AI al chat → Reactiva la interfaz
6. **Listo para el siguiente mensaje** → El usuario puede continuar chateando

Esta arquitectura es escalable – podrías agregar fácilmente funciones como edición de mensajes, subida de archivos o múltiples hilos de conversación sin reescribir la estructura central.

### 🎯 Verificación Pedagógica: Arquitectura Moderna de Frontend

**Comprensión de Arquitectura**: Has implementado una aplicación de una sola página completa usando patrones modernos de JavaScript. Esto representa desarrollo frontend a nivel profesional.

**Conceptos Clave Dominaos**:
- **Arquitectura de Clases ES6**: Código organizado y mantenible
- **Patrones Async/Await**: Programación asíncrona moderna
- **Programación Basada en Eventos**: Diseño de interfaces responsivas
- **Mejores Prácticas de Seguridad**: Prevención de XSS y validación de entrada

**Conexión con la Industria**: Los patrones que aprendiste (arquitectura basada en clases, operaciones asíncronas, manipulación del DOM) son la base de frameworks modernos como React, Vue y Angular. Estás construyendo con el mismo pensamiento arquitectónico usado en aplicaciones de producción.

**Pregunta de Reflexión**: ¿Cómo extenderías esta aplicación de chat para manejar múltiples conversaciones o autenticación de usuarios? Considera los cambios arquitectónicos necesarios y cómo evolucionaría la estructura de la clase.

### Estilizando tu Interfaz de Chat

Ahora creemos una interfaz de chat moderna y visualmente atractiva con CSS. Un buen estilo hace que tu aplicación se sienta profesional y mejora la experiencia del usuario. Usaremos características modernas de CSS como Flexbox, CSS Grid y propiedades personalizadas para un diseño responsivo y accesible.

Crea `styles.css` con estos estilos completos:

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

**Entendiendo la arquitectura CSS:**
- **Usa** propiedades personalizadas CSS (variables) para un tema consistente y fácil mantenimiento
- **Implementa** diseño Flexbox para diseño responsivo y alineación adecuada
- **Incluye** animaciones suaves para la aparición de mensajes sin ser distractoras
- **Proporciona** distinción visual entre mensajes del usuario, respuestas de AI y estados de error
- **Soporta** diseño responsivo que funciona tanto en escritorio como en dispositivos móviles
- **Considera** accesibilidad con preferencias de reducción de movimiento y ratios de contraste adecuados
- **Ofrece** soporte de modo oscuro basado en las preferencias del sistema del usuario

### Configurando la URL de tu Backend

El último paso es actualizar `BASE_URL` en tu JavaScript para que coincida con tu servidor backend:

```javascript
// Para desarrollo local
this.BASE_URL = "http://localhost:5000";

// Para GitHub Codespaces (reemplaza con tu URL real)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Cómo determinar la URL de backend:**
- **Desarrollo local**: Usa `http://localhost:5000` si estás corriendo frontend y backend localmente
- **Codespaces**: Encuentra la URL de backend en la pestaña de Puertos tras hacer público el puerto 5000
- **Producción**: Reemplázala con tu dominio real al desplegar en un servicio de hosting

> 💡 **Consejo de prueba**: Puedes probar tu backend directamente visitando la URL raíz en tu navegador. Deberías ver el mensaje de bienvenida de tu servidor FastAPI.

## Pruebas y Despliegue

Ahora que tienes ambos componentes, frontend y backend, construidos, vamos a probar que todo funciona junto y explorar opciones de despliegue para compartir tu asistente de chat con otros.

### Flujo de trabajo para pruebas locales

Sigue estos pasos para probar tu aplicación completa:

```mermaid
graph TD
    A[Iniciar Servidor Backend] --> B[Configurar Variables de Entorno]
    B --> C[Probar Endpoints de la API]
    C --> D[Abrir Frontend en el Navegador]
    D --> E[Probar Funcionalidad de Chat]
    E --> F[Depurar Cualquier Problema]
```
**Proceso de prueba paso a paso:**

1. **Inicia tu servidor backend**:
   ```bash
   cd backend
   source venv/bin/activate  # o venv\Scripts\activate en Windows
   python api.py
   ```

2. **Verifica que la API funcione**:
   - Abre `http://localhost:5000` en tu navegador
   - Deberías ver el mensaje de bienvenida de tu servidor FastAPI

3. **Abre tu frontend**:
   - Navega a tu directorio frontend
   - Abre `index.html` en tu navegador web
   - O usa la extensión Live Server de VS Code para mejor experiencia de desarrollo

4. **Prueba la funcionalidad del chat**:
   - Escribe un mensaje en el campo de entrada
   - Haz clic en "Enviar" o presiona Enter
   - Verifica que la IA responda adecuadamente
   - Revisa la consola del navegador por errores JavaScript

### Solución de problemas comunes

| Problema | Síntomas | Solución |
|---------|----------|----------|
| **Error CORS** | El frontend no puede alcanzar el backend | Asegúrate que FastAPI CORSMiddleware esté configurado correctamente |
| **Error Llave API** | Respuestas 401 No autorizadas | Revisa la variable de entorno `GITHUB_TOKEN` |
| **Conexión Rechazada** | Errores de red en frontend | Verifica la URL del backend y que el servidor Flask esté corriendo |
| **Sin respuesta AI** | Respuestas vacías o errores | Revisa los logs del backend por problemas de cuota o autenticación |

**Pasos comunes de depuración:**
- **Revisa** la consola de Herramientas de Desarrollador en el navegador para errores JavaScript
- **Verifica** en la pestaña Red que las solicitudes y respuestas de API sean exitosas
- **Revisa** la salida del terminal del backend para errores Python o problemas con la API
- **Confirma** que las variables de entorno están cargadas y accesibles

## 📈 Línea de Tiempo para tu Dominio en Desarrollo de Aplicaciones AI

```mermaid
timeline
    title Viaje Completo de Desarrollo de Aplicaciones de IA
    
    section Fundamentos de IA
        Comprendiendo la IA Generativa
            : Comprender conceptos de reconocimiento de patrones
            : Dominar el control de parámetros de IA
            : Aprender técnicas de ingeniería de prompts
        
        Integración de Modelos GitHub
            : Navegar por plataformas de servicios de IA
            : Manejar autenticación de forma segura
            : Optimizar parámetros de modelos
    
    section Desarrollo Backend
        Arquitectura de API en Python
            : Construir aplicaciones FastAPI
            : Implementar operaciones async
            : Crear endpoints seguros
        
        Integración de Servicio de IA
            : Conectarse a APIs externas de IA
            : Manejar limitación de tasa
            : Implementar límites de errores
    
    section Dominio Frontend
        Patrones Modernos de JavaScript
            : Dominar arquitectura de clases ES6
            : Implementar flujos async/await
            : Construir interfaces responsivas
        
        Experiencia de Usuario en Tiempo Real
            : Crear interfaces de chat dinámicas
            : Manejar estados de carga
            : Optimizar interacciones de usuario
    
    section Preparación para Producción
        Seguridad y Rendimiento
            : Implementar gestión segura de tokens
            : Prevenir vulnerabilidades XSS
            : Optimizar rendimiento de la API
        
        Despliegue Profesional
            : Construir arquitecturas escalables
            : Crear código mantenible
            : Documentar procesos de desarrollo
```
**🎓 Hito de Graduación**: Has construido exitosamente una aplicación AI completa usando las mismas tecnologías y patrones arquitectónicos que impulsan asistentes AI modernos. Estas habilidades representan la intersección del desarrollo web tradicional y la integración avanzada de IA.

**🔄 Capacidades de Próximo Nivel**:
- Listo para explorar frameworks AI avanzados (LangChain, LangGraph)
- Preparado para construir aplicaciones AI multimodales (texto, imagen, voz)
- Equipado para implementar bases de datos vectoriales y sistemas de recuperación
- Base establecida para machine learning y fine-tuning de modelos AI

## Desafío GitHub Copilot Agent 🚀

Usa el modo Agente para completar el siguiente desafío:

**Descripción:** Mejora el asistente de chat añadiendo historial de conversaciones y persistencia de mensajes. Este desafío te ayudará a entender cómo gestionar estado en aplicaciones de chat e implementar almacenamiento de datos para mejor experiencia de usuario.

**Indicaciones:** Modifica la aplicación de chat para incluir historial de conversación que persista entre sesiones. Añade funcionalidad para guardar mensajes en almacenamiento local, mostrar historial cuando la página carga, e incluye un botón "Borrar Historial". Implementa también indicadores de escritura y marcas de tiempo para hacer la experiencia más realista.

Aprende más sobre [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aquí.

## Tarea: Construye Tu Asistente AI Personal

Ahora crearás tu propia implementación de asistente IA. En lugar de replicar simplemente el código del tutorial, esta es una oportunidad para aplicar los conceptos mientras construyes algo que refleje tus intereses y casos de uso.

### Requerimientos del Proyecto

Vamos a configurar tu proyecto con una estructura limpia y organizada:

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

### Tareas Principales de Implementación

**Desarrollo Backend:**
- **Toma** nuestro código FastAPI y hazlo tuyo
- **Crea** una personalidad AI única – ¿quizá un asistente culinario útil, un compañero de escritura creativa, o un amigo para estudio?
- **Agrega** manejo sólido de errores para que tu app no se rompa si hay fallos
- **Escribe** documentación clara para quien quiera entender cómo funciona tu API

**Desarrollo Frontend:**
- **Construye** una interfaz de chat intuitiva y acogedora
- **Escribe** JavaScript limpio y moderno que puedas mostrar con orgullo a otros desarrolladores
- **Diseña** un estilo personalizado que refleje la personalidad de tu AI – ¿divertido y colorido? ¿Minimalista y limpio? ¡Tú decides!
- **Asegúrate** que funcione bien en teléfonos y computadoras

**Requerimientos de Personalización:**
- **Elige** un nombre y personalidad únicos para tu asistente AI – algo que refleje tus intereses o problemas que quieres resolver
- **Personaliza** el diseño visual para que coincida con la vibra de tu asistente
- **Escribe** un mensaje de bienvenida atractivo que invite a la gente a comenzar a chatear
- **Prueba** tu asistente con distintos tipos de preguntas para observar cómo responde

### Ideas para Mejoras (Opcional)

¿Quieres llevar tu proyecto al siguiente nivel? Aquí hay ideas divertidas para explorar:

| Función | Descripción | Habilidades que practicarás |
|---------|-------------|-----------------------------|
| **Historial de mensajes** | Recordar conversaciones incluso después de refrescar la página | Uso de localStorage, manejo de JSON |
| **Indicadores de escritura** | Mostrar "AI está escribiendo..." mientras espera respuestas | Animaciones CSS, programación async |
| **Marcas de tiempo en mensajes** | Mostrar cuándo se envió cada mensaje | Formateo de fechas/horas, diseño UX |
| **Exportar chat** | Permitir a usuarios descargar su conversación | Manejo de archivos, exportación de datos |
| **Cambio de tema** | Alternar entre modo claro/oscuro | Variables CSS, preferencias de usuario |
| **Entrada por voz** | Añadir funcionalidad de voz a texto | APIs Web, accesibilidad |

### Pruebas y Documentación

**Aseguramiento de Calidad:**
- **Prueba** tu aplicación con varios tipos de entrada y casos límite
- **Verifica** que el diseño responsivo funcione en diferentes tamaños de pantalla
- **Chequea** accesibilidad con navegación por teclado y lectores de pantalla
- **Valida** HTML y CSS para cumplimiento de estándares

**Requisitos de Documentación:**
- **Escribe** un README.md que explique tu proyecto y cómo ejecutarlo
- **Incluye** capturas de pantalla de tu interfaz de chat en acción
- **Documenta** cualquier característica única o personalización que agregaste
- **Proporciona** instrucciones claras de configuración para otros desarrolladores

### Directrices para la Entrega

**Entregables del Proyecto:**
1. Carpeta completa del proyecto con todo el código fuente
2. README.md con descripción del proyecto e instrucciones de configuración
3. Capturas de pantalla mostrando tu asistente de chat en funcionamiento
4. Reflexión breve sobre lo que aprendiste y los desafíos que enfrentaste

**Criterios de Evaluación:**
- **Funcionalidad**: ¿Funciona el asistente de chat como se espera?
- **Calidad del Código**: ¿El código está bien organizado, comentado y es mantenible?
- **Diseño**: ¿La interfaz es visualmente atractiva y fácil de usar?
- **Creatividad**: ¿Qué tan único y personalizado es tu implementación?
- **Documentación**: ¿Son claras y completas las instrucciones de configuración?

> 💡 **Consejo de Éxito**: Empieza con los requerimientos básicos primero, luego añade mejoras una vez que todo funcione. Enfócate en crear una experiencia central pulida antes de agregar funciones avanzadas.

## Solución

[Solution](./solution/README.md)

## Desafíos Bonus

¿Listo para llevar tu asistente AI al próximo nivel? Prueba estos desafíos avanzados que profundizarán tu comprensión de la integración AI y desarrollo web.

### Personalización de Personalidad

La verdadera magia ocurre cuando le das a tu asistente AI una personalidad única. Experimenta con diferentes prompts de sistema para crear asistentes especializados:

**Ejemplo Asistente Profesional:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Ejemplo Ayudante de Escritura Creativa:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Ejemplo Mentor Técnico:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Mejoras Frontend

Transforma tu interfaz de chat con estas mejoras visuales y funcionales:

**Características Avanzadas de CSS:**
- **Implementa** animaciones suaves y transiciones en mensajes
- **Añade** diseños personalizados de burbujas con formas y gradientes CSS
- **Crea** una animación de indicador de escritura para cuando la IA "está pensando"
- **Diseña** reacciones con emojis o sistema de valoración de mensajes

**Mejoras en JavaScript:**
- **Agrega** atajos de teclado (Ctrl+Enter para enviar, Escape para limpiar entrada)
- **Implementa** búsqueda y filtrado de mensajes
- **Crea** función de exportación de conversación (descargar como texto o JSON)
- **Añade** auto-guardado en localStorage para evitar pérdida de mensajes

### Integración AI Avanzada

**Múltiples Personalidades AI:**
- **Crea** un menú desplegable para cambiar entre diferentes personalidades AI
- **Guarda** la personalidad preferida del usuario en localStorage
- **Implementa** cambio de contexto que mantenga el flujo de conversación

**Funciones Inteligentes de Respuesta:**
- **Añade** conciencia de contexto conversacional (la IA recuerda mensajes previos)
- **Implementar** sugerencias inteligentes basadas en el tema de la conversación  
- **Crear** botones de respuesta rápida para preguntas comunes  

> 🎯 **Objetivo de aprendizaje**: Estos desafíos adicionales te ayudan a comprender patrones avanzados de desarrollo web y técnicas de integración de IA que se usan en aplicaciones en producción.  

## Resumen y Próximos Pasos  

¡Felicitaciones! Has construido con éxito un asistente de chat completo potenciado por IA desde cero. Este proyecto te ha dado experiencia práctica con tecnologías modernas de desarrollo web e integración de IA, habilidades que son cada vez más valiosas en el panorama tecnológico actual.  

### Lo que has logrado  

A lo largo de esta lección, has dominado varias tecnologías y conceptos clave:  

**Desarrollo Backend:**  
- **Integrado** con GitHub Models API para funcionalidad de IA  
- **Construido** una API RESTful usando Flask con manejo adecuado de errores  
- **Implementado** autenticación segura usando variables de entorno  
- **Configurado** CORS para solicitudes entre el frontend y backend  

**Desarrollo Frontend:**  
- **Creado** una interfaz de chat responsiva usando HTML semántico  
- **Implementado** JavaScript moderno con async/await y arquitectura basada en clases  
- **Diseñado** una interfaz de usuario atractiva con CSS Grid, Flexbox y animaciones  
- **Añadido** funciones de accesibilidad y principios de diseño responsivo  

**Integración Full-Stack:**  
- **Conectado** frontend y backend mediante llamadas HTTP API  
- **Gestionado** interacciones en tiempo real y flujo de datos asíncrono  
- **Implementado** manejo de errores y retroalimentación al usuario en toda la aplicación  
- **Probado** el flujo completo de la aplicación desde la entrada del usuario hasta la respuesta de la IA  

### Resultados Clave del Aprendizaje  

```mermaid
mindmap
  root((Habilidades de la Aplicación de Chat AI))
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
Este proyecto te ha introducido a los fundamentos para construir aplicaciones potentes con IA, que representa el futuro del desarrollo web. Ahora entiendes cómo integrar capacidades de IA en aplicaciones web tradicionales, creando experiencias de usuario atractivas que se sienten inteligentes y responsivas.  

### Aplicaciones Profesionales  

Las habilidades que has desarrollado en esta lección son directamente aplicables a carreras modernas en desarrollo de software:  

- **Desarrollo web Full-stack** usando frameworks y APIs modernas  
- **Integración de IA** en aplicaciones web y móviles  
- **Diseño y desarrollo de APIs** para arquitecturas de microservicios  
- **Desarrollo de interfaces de usuario** con enfoque en accesibilidad y diseño responsivo  
- **Prácticas DevOps** incluyendo configuración de entornos y despliegue  

### Continuando tu viaje en desarrollo de IA  

**Próximos pasos de aprendizaje:**  
- **Explorar** modelos y APIs de IA más avanzados (GPT-4, Claude, Gemini)  
- **Aprender** técnicas de ingeniería de prompts para mejores respuestas de IA  
- **Estudiar** diseño de conversación y principios de experiencia de usuario en chatbots  
- **Investigar** seguridad en IA, ética y prácticas responsables de desarrollo de IA  
- **Construir** aplicaciones más complejas con memoria de conversación y conciencia de contexto  

**Ideas para proyectos avanzados:**  
- Salas de chat multiusuario con moderación de IA  
- Chatbots de servicio al cliente potenciado por IA  
- Asistentes educativos con aprendizaje personalizado  
- Colaboradores creativos para escritura con diferentes personalidades de IA  
- Asistentes para documentación técnica para desarrolladores  

## Comenzando con GitHub Codespaces  

¿Quieres probar este proyecto en un entorno de desarrollo en la nube? GitHub Codespaces ofrece una configuración de desarrollo completa en tu navegador, perfecta para experimentar con aplicaciones de IA sin requisitos de configuración local.  

### Configurando tu entorno de desarrollo  

**Paso 1: Crear desde plantilla**  
- **Navega** al [repositorio Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Haz clic** en "Use this template" en la esquina superior derecha (asegúrate de estar conectado a GitHub)  

![Interfaz para crear desde plantilla mostrando el botón verde "Use this template"](../../../translated_images/template.67ad477109d29a2b.es.png)  

**Paso 2: Lanzar Codespaces**  
- **Abre** tu repositorio recién creado  
- **Haz clic** en el botón verde "Code" y selecciona "Codespaces"  
- **Elige** "Create codespace on main" para iniciar tu entorno de desarrollo  

![Interfaz para crear un codespace con opciones para lanzar el entorno de desarrollo en la nube](../../../translated_images/codespace.bcecbdf5d2747d3d.es.png)  

**Paso 3: Configuración del entorno**  
Una vez que tu Codespace cargue, tendrás acceso a:  
- **Python, Node.js y todas las herramientas necesarias preinstaladas**  
- **Interfaz de VS Code** con extensiones para desarrollo web  
- **Acceso a terminal** para ejecutar servidores backend y frontend  
- **Reenvío de puertos** para probar tus aplicaciones  

**Lo que Codespaces ofrece:**  
- **Elimina** problemas de configuración de entorno local  
- **Proporciona** un entorno de desarrollo consistente en diferentes dispositivos  
- **Incluye** herramientas y extensiones preconfiguradas para desarrollo web  
- **Ofrece** integración perfecta con GitHub para control de versiones y colaboración  

> 🚀 **Consejo profesional**: Codespaces es perfecto para aprender y prototipar aplicaciones de IA, ya que maneja automáticamente toda la compleja configuración del entorno, permitiéndote enfocarte en construir y aprender en lugar de solucionar configuraciones.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables por malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->