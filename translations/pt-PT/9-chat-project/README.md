# Criar um Assistente de Chat com IA

Lembras-te de Star Trek, quando a tripulação conversava casualmente com o computador da nave, fazendo perguntas complexas e recebendo respostas ponderadas? O que parecia pura ficção científica nos anos 60 é agora algo que podes construir usando as tecnologias web que já conheces.

Nesta lição, vamos criar um assistente de chat com IA usando HTML, CSS, JavaScript e alguma integração backend. Vais descobrir como as mesmas competências que tens vindo a aprender podem ligar-se a serviços de IA poderosos que conseguem entender o contexto e gerar respostas significativas.

Pensa na IA como ter acesso a uma enorme biblioteca que não só encontra informações, mas também as sintetiza em respostas coerentes adaptadas às tuas perguntas específicas. Em vez de pesquisar em milhares de páginas, recebes respostas diretas e contextuais.

A integração acontece através de tecnologias web familiares a trabalharem em conjunto. O HTML cria a interface do chat, o CSS trata do design visual, o JavaScript gere as interações do utilizador e uma API backend liga tudo a serviços de IA. É semelhante a como diferentes secções de uma orquestra colaboram para criar uma sinfonia.

Estamos, essencialmente, a construir uma ponte entre a comunicação humana natural e o processamento da máquina. Vais aprender tanto a implementação técnica da integração com serviços de IA como os padrões de design que tornam as interações intuitivas.

No final desta lição, a integração de IA vai parecer menos um processo misterioso e mais como outra API com a qual podes trabalhar. Vais entender os padrões fundamentais que impulsionam aplicações como ChatGPT e Claude, usando os mesmos princípios de desenvolvimento web que tens vindo a aprender.

## ⚡ O Que Podes Fazer Nos Próximos 5 Minutos

**Caminho Rápido para Desenvolvedores Ocupados**

```mermaid
flowchart LR
    A[⚡ 5 minutos] --> B[Obter token do GitHub]
    B --> C[Testar playground de IA]
    C --> D[Copiar código Python]
    D --> E[Ver respostas da IA]
```
- **Minuto 1**: Visita [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) e cria um token de acesso pessoal
- **Minuto 2**: Testa interações com a IA diretamente na interface do playground
- **Minuto 3**: Clica no separador "Code" e copia o snippet em Python
- **Minuto 4**: Executa o código localmente com o teu token: `GITHUB_TOKEN=your_token python test.py`
- **Minuto 5**: Observa a tua primeira resposta de IA ser gerada pelo teu próprio código

**Código de Teste Rápido**:
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

**Porquê Isto é Importante**: Em 5 minutos vais experimentar a magia da interação programática com IA. Isto representa o bloco fundamental que alimenta todas as aplicações de IA que usas.

Eis como ficará o teu projeto terminado:

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/pt-PT/screenshot.0a1ee0d123df681b.webp)

## 🗺️ A Tua Jornada de Aprendizagem no Desenvolvimento de Aplicações com IA

```mermaid
journey
    title Da Desenvolvimento Web à Integração de IA
    section Compreender os Fundamentos de IA
      Descobrir conceitos de IA generativa: 4: You
      Explorar a plataforma GitHub Models: 6: You
      Dominar parâmetros e prompts de IA: 8: You
    section Integração Backend
      Construir servidor API Python: 5: You
      Implementar chamadas de funções de IA: 7: You
      Gerir operações assíncronas: 8: You
    section Desenvolvimento Frontend
      Criar interface de chat moderna: 6: You
      Dominar interações em tempo real: 8: You
      Construir experiência de utilizador responsiva: 9: You
    section Aplicação Profissional
      Desplegar sistema de IA completo: 7: You
      Otimizar padrões de desempenho: 8: You
      Criar aplicação pronta para produção: 9: You
```
**Destino da Tua Jornada**: No final desta lição, terás construído uma aplicação completa potenciada por IA usando as mesmas tecnologias e padrões que dão energia a assistentes de IA modernos como ChatGPT, Claude e Google Bard.

## Compreender a IA: Do Mistério à Maestria

Antes de mergulhares no código, vamos entender com o que estamos a trabalhar. Se já usaste APIs antes, conheces o padrão básico: enviar uma requisição, receber uma resposta.

As APIs de IA seguem uma estrutura similar, mas em vez de recuperar dados pré-armazenados numa base de dados, geram novas respostas com base em padrões aprendidos a partir de vastas quantidades de texto. Pensa nisto como a diferença entre um sistema de catálogo de biblioteca e um bibliotecário conhecedor que consegue sintetizar informação de múltiplas fontes.

### O Que é Realmente a "IA Generativa"?

Considera como a Pedra de Roseta permitiu aos estudiosos entender hieróglifos egípcios encontrando padrões entre línguas conhecidas e desconhecidas. Os modelos de IA funcionam de forma semelhante – encontram padrões em vastas quantidades de texto para entender como a linguagem funciona, e depois usam esses padrões para gerar respostas apropriadas a novas perguntas.

**Deixa-me explicar com uma comparação simples:**
- **Base de dados tradicional**: Como pedir a tua certidão de nascimento – recebes o mesmo documento exato todas as vezes
- **Motor de busca**: Como pedir a um bibliotecário para encontrar livros sobre gatos – mostram-te o que está disponível
- **IA Generativa**: Como perguntar a um amigo conhecedor sobre gatos – ele conta-te coisas interessantes com as suas próprias palavras, adaptadas ao que queres saber

```mermaid
graph LR
    A[A Sua Pergunta] --> B[Modelo de IA]
    B --> C[Reconhecimento de Padrões]
    C --> D[Geração de Conteúdo]
    D --> E[Resposta Contextual]
    
    F[Dados de Treino<br/>Livros, Artigos, Web] --> B
```
### Como os Modelos de IA Aprendem (A Versão Simples)

Os modelos de IA aprendem através da exposição a conjuntos enormes de dados que contêm textos de livros, artigos e conversas. Por este processo, identificam padrões em:
- Como os pensamentos são estruturados na comunicação escrita
- Quais as palavras que costumam aparecer juntas
- Como as conversas tipicamente fluem
- Diferenças contextuais entre comunicação formal e informal

**É semelhante a como os arqueólogos decifram línguas antigas**: analisam milhares de exemplos para entender gramática, vocabulário e contexto cultural, acabando por ser capazes de interpretar novos textos usando esses padrões aprendidos.

### Por que GitHub Models?

Estamos a usar o GitHub Models por uma razão bastante prática – oferece-nos acesso a IA de nível empresarial sem termos que montar a nossa própria infraestrutura de IA (que, acredita, não queres fazer agora!). Pensa nisto como usar uma API de meteorologia em vez de tentares prever o tempo sozinho montando estações meteorológicas por todo o lado.

É basicamente "IA como Serviço", e a melhor parte? É grátis para começares, para poderes experimentar sem te preocupar com uma fatura enorme.

```mermaid
graph LR
    A[Interface de Conversa Frontend] --> B[Sua API Backend]
    B --> C[API de Modelos GitHub]
    C --> D[Processamento do Modelo AI]
    D --> C
    C --> B
    B --> A
```
Vamos usar o GitHub Models para a nossa integração backend, que fornece acesso a capacidades profissionais de IA através de uma interface amigável para programadores. O [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) serve como ambiente de teste onde podes experimentar diferentes modelos de IA e entender as suas capacidades antes de as implementares em código.

## 🧠 Ecossistema de Desenvolvimento de Aplicações com IA

```mermaid
mindmap
  root((Desenvolvimento IA))
    Understanding AI
      Generative Models
        Reconhecimento de Padrões
        Geração de Conteúdo
        Compreensão de Contexto
        Síntese de Resposta
      AI Parameters
        Controlo de Temperatura
        Limites de Token
        Filtragem Top-p
        Prompts do Sistema
    Backend Architecture
      API Integration
        Modelos GitHub
        Autenticação
        Gestão de Requisições
        Gestão de Erros
      Python Infrastructure
        Framework FastAPI
        Operações Assíncronas
        Segurança do Ambiente
        Configuração CORS
    Frontend Experience
      Chat Interface
        Atualizações em Tempo Real
        Histórico de Mensagens
        Feedback do Utilizador
        Estados de Carregamento
      Modern Web Tech
        Classes ES6
        Async/Await
        Manipulação do DOM
        Gestão de Eventos
    Professional Patterns
      Security Best Practices
        Gestão de Tokens
        Validação de Entrada
        Prevenção XSS
        Limites de Erro
      Production Readiness
        Optimização de Performance
        Design Responsivo
        Acessibilidade
        Estratégias de Testes
```
**Princípio Fundamental**: O desenvolvimento de aplicações com IA combina competências tradicionais de desenvolvimento web com integração de serviços de IA, criando aplicações inteligentes que parecem naturais e responsivas para os utilizadores.

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/pt-PT/playground.d2b927122224ff8f.webp)

**Isto é o que torna o playground tão útil:**
- **Experimenta** diferentes modelos de IA como GPT-4o-mini, Claude e outros (todos grátis!)
- **Testa** as tuas ideias e prompts antes de escreveres qualquer código
- **Obtém** snippets de código prontos a usar no teu idioma de programação favorito
- **Ajusta** definições como o nível de criatividade e o comprimento da resposta para ver como afetam o resultado

Depois de brincares um pouco, basta clicares no separador "Code" e escolheres a tua linguagem de programação para obter o código de implementação que precisarás.

![Playground choice showing code generation options for different programming languages](../../../translated_images/pt-PT/playground-choice.1d23ba7d407f4758.webp)

## Configurar a Integração Backend em Python

Agora vamos implementar a integração de IA usando Python. Python é excelente para aplicações de IA devido à sua sintaxe simples e bibliotecas poderosas. Vamos começar com o código do playground do GitHub Models e depois refatorá-lo numa função reutilizável, pronta para produção.

### Compreender a Implementação Base

Quando copias o código Python do playground, vais obter algo parecido com isto. Não te preocupes se parecer muito no início – vamos analisar peça por peça:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# Para autenticar com o modelo, será necessário gerar um token de acesso pessoal (PAT) nas suas configurações do GitHub.
# Crie o seu token PAT seguindo as instruções aqui: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**Isto é o que está a acontecer neste código:**
- **Importamos** as ferramentas que precisamos: `os` para ler variáveis de ambiente e `OpenAI` para comunicar com a IA
- **Configuramos** o cliente OpenAI para apontar aos servidores de IA do GitHub em vez do OpenAI diretamente
- **Autenticamos** usando um token especial do GitHub (mais sobre isso daqui a pouco!)
- **Estruturamos** a nossa conversa com diferentes “papéis” – pensa nisto como definir a cena para uma peça de teatro
- **Enviamos** a nossa requisição para a IA com alguns parâmetros para afinar a resposta
- **Extraímos** o texto da resposta real de todos os dados que voltam

### Compreender os Papéis nas Mensagens: A Estrutura da Conversa com IA

As conversas com IA usam uma estrutura específica com diferentes “papéis” que servem propósitos distintos:

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

**Pensa nisto como dirigir uma peça:**
- **Papel do sistema**: Como instruções de cena para um ator – diz ao IA como se comportar, que personalidade ter e como responder
- **Papel do utilizador**: A pergunta ou mensagem real da pessoa que está a usar a tua aplicação
- **Papel do assistente**: A resposta da IA (não envias isto, mas aparece no histórico da conversa)

**Analogamente na vida real**: Imagina que estás a apresentar um amigo a alguém numa festa:
- **Mensagem do sistema**: "Esta é a minha amiga Sarah, ela é médica e é ótima a explicar conceitos médicos em termos simples"
- **Mensagem do utilizador**: "Podes explicar como funcionam as vacinas?"
- **Resposta do assistente**: Sarah responde como uma médica amigável, não como advogada ou chef

### Compreender os Parâmetros da IA: Afinar o Comportamento da Resposta

Os parâmetros numéricos nas chamadas da API de IA controlam como o modelo gera respostas. Estas definições permitem ajustar o comportamento da IA para diferentes casos de uso:

#### Temperatura (0.0 a 2.0): O Controlo da Criatividade

**O que faz**: Controla o quão criativas ou previsíveis as respostas da IA vão ser.

**Pensa nisto como o nível de improvisação de um músico de jazz:**
- **Temperatura = 0.1**: Tocar sempre a mesma melodia exata (altamente previsível)
- **Temperatura = 0.7**: Adicionar algumas variações com gosto mantendo a melodia reconhecível (criatividade equilibrada)
- **Temperatura = 1.5**: Jazz experimental completo com voltas inesperadas (altamente imprevisível)

```python
# Respostas muito previsíveis (bom para perguntas factuais)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Quase sempre dirá "4"
)

# Respostas criativas (bom para sessões de brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Gerará histórias únicas e inesperadas
)
```

#### Máximo de Tokens (1 a 4096+): O Controlador do Comprimento da Resposta

**O que faz**: Define um limite para o comprimento da resposta da IA.

**Pensa nos tokens como aproximadamente equivalentes a palavras** (cerca de 1 token = 0,75 palavras em inglês):
- **max_tokens=50**: Curto e simples (como uma mensagem de texto)
- **max_tokens=500**: Um parágrafo ou dois agradáveis
- **max_tokens=2000**: Explicação detalhada com exemplos

```python
# Respostas curtas e concisas
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Obriga a uma explicação breve
)

# Respostas detalhadas e abrangentes
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Permite explicações detalhadas com exemplos
)
```

#### Top_p (0.0 a 1.0): O Parâmetro de Foco

**O que faz**: Controla o quão focada a IA fica nas respostas mais prováveis.

**Imagina a IA a ter um enorme vocabulário, ordenado pela probabilidade de cada palavra:**
- **top_p=0.1**: Considera só os 10% das palavras mais prováveis (muito focada)
- **top_p=0.9**: Considera 90% das palavras possíveis (mais criativa)
- **top_p=1.0**: Considera tudo (variedade máxima)

**Por exemplo**: Se perguntares "O céu normalmente é..."
- **top_p baixo**: Diz quase certamente "azul"
- **top_p alto**: Pode dizer "azul", "nublado", "vasto", "mutável", "lindo", etc.

### Juntando Tudo: Combinações de Parâmetros para Diferentes Casos de Uso

```python
# Para respostas factuais e consistentes (como um bot de documentação)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# Para assistência em escrita criativa
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# Para respostas conversacionais e úteis (equilibradas)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title Matriz de Otimização de Parâmetros de IA
    x-axis Baixa Criatividade --> Alta Criatividade
    y-axis Resposta Curta --> Resposta Longa
    
    quadrant-1 Conteúdo Criativo
    quadrant-2 Análise Detalhada
    quadrant-3 Factos Rápidos
    quadrant-4 IA Conversacional
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**Por que estes parâmetros são importantes**: Aplicações diferentes precisam de tipos diferentes de respostas. Um bot de assistência ao cliente deve ser consistente e factual (temperatura baixa), enquanto um assistente de escrita criativa deve ser imaginativo e variado (temperatura alta). Compreender estes parâmetros dá-te controlo sobre a personalidade e estilo de resposta da tua IA.
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

**Compreender esta função melhorada:**
- **Aceita** dois parâmetros: o prompt do utilizador e uma mensagem de sistema opcional
- **Fornece** uma mensagem de sistema predefinida para comportamento geral do assistente
- **Usa** anotações de tipo Python adequadas para melhor documentação do código
- **Inclui** uma docstring detalhada explicando o propósito e parâmetros da função
- **Retorna** apenas o conteúdo da resposta, facilitando o uso na nossa API web
- **Mantém** os mesmos parâmetros de modelo para comportamento consistente da IA

### A Magia dos Prompts do Sistema: Programar a Personalidade da IA

Se os parâmetros controlam como a IA pensa, os prompts do sistema controlam quem a IA pensa que é. Isto é honestamente uma das partes mais fixas de trabalhar com IA – estás essencialmente a dar à IA uma personalidade completa, nível de especialização e estilo de comunicação.

**Pensa nos prompts do sistema como seleccionar atores diferentes para papéis diferentes**: Em vez de teres um assistente genérico, podes criar especialistas especializados para diferentes situações. Precisas de um professor paciente? Um parceiro criativo para brainstorming? Um conselheiro empresarial direto? Basta mudar o prompt do sistema!

#### Por que os Prompts do Sistema são Tão Poderosos

Aqui está a parte fascinante: os modelos de IA foram treinados com inúmeras conversas onde as pessoas adotam diferentes papéis e níveis de especialização. Quando dás à IA um papel específico, é como acionar um interruptor que ativa todos esses padrões aprendidos.

**É como método de atuação para IA**: Dizes a um ator "és um professor sábio e idoso" e vê como ele ajusta automaticamente a postura, o vocabulário e os maneirismos. A IA faz algo notavelmente semelhante com padrões de linguagem.

#### Criar Prompts de Sistema Eficazes: A Arte e a Ciência

**A anatomia de um ótimo prompt do sistema:**
1. **Papel/Identidade**: Quem é a IA?
2. **Especialização**: O que sabe?
3. **Estilo de comunicação**: Como fala?
4. **Instruções específicas**: Em que deve focar-se?

```python
# ❌ Pedido de sistema vago
"You are helpful."

# ✅ Pedido de sistema detalhado e eficaz
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### Exemplos de Prompts do Sistema com Contexto

Vamos ver como diferentes prompts do sistema criam personalidades de IA completamente diferentes:

```python
# Exemplo 1: O Professor Paciente
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# Exemplo 2: O Colaborador Criativo
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# Exemplo 3: O Consultor Estratégico de Negócios
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### Ver os Prompts do Sistema em Ação

Vamos testar a mesma pergunta com diferentes prompts do sistema para ver as diferenças drásticas:

**Pergunta**: "Como devo gerir a autenticação de utilizadores na minha aplicação web?"

```python
# Com prompt do professor:
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# Resposta típica: "Ótima pergunta! Vamos dividir a autenticação em passos simples.
# Pense nisso como um segurança de discoteca a pedir documentação..."

# Com prompt de negócios:
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# Resposta típica: "De uma perspectiva estratégica, a autenticação é crucial para a
# confiança do utilizador e conformidade regulatória. Deixe-me apresentar um quadro considerando a segurança,
# a experiência do utilizador e a escalabilidade..."
```

#### Técnicas Avançadas de Prompts do Sistema

**1. Definição de Contexto**: Dá à IA informação de fundo  
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. Formatação de Saída**: Diga à IA como estruturar as respostas
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

**3. Definição de Restrições**: Defina o que a IA NÃO deve fazer
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```

#### Por que isto é importante para o seu assistente de chat

Compreender os prompts do sistema dá-lhe um poder incrível para criar assistentes de IA especializados:
- **Bot de serviço ao cliente**: Útil, paciente, com conhecimento das políticas
- **Tutor de aprendizagem**: Encorajador, passo-a-passo, verifica a compreensão
- **Parceiro criativo**: Imaginativo, desenvolve ideias, pergunta "e se?"
- **Especialista técnico**: Preciso, detalhado, consciente da segurança

**A ideia principal**: Você não está apenas a chamar uma API de IA – está a criar uma personalidade de IA personalizada que serve o seu caso de uso específico. É isto que faz as aplicações modernas de IA parecerem feitas à medida e úteis, e não genéricas.

### 🎯 Verificação Pedagógica: Programação da Personalidade da IA

**Pause e Reflita**: Acabou de aprender a programar personalidades de IA através de prompts do sistema. Esta é uma competência fundamental no desenvolvimento de aplicações modernas de IA.

**Autoavaliação rápida**:
- Consegue explicar como os prompts do sistema diferem das mensagens comuns do utilizador?
- Qual é a diferença entre os parâmetros temperature e top_p?
- Como criaria um prompt do sistema para um caso de uso específico (como um tutor de programação)?

**Ligação ao Mundo Real**: As técnicas de prompts do sistema que aprendeu são usadas em todas as grandes aplicações de IA – desde a assistência de codificação do GitHub Copilot até à interface conversacional do ChatGPT. Você está a dominar os mesmos padrões usados pelas equipas de produto de IA nas maiores empresas tecnológicas.

**Pergunta de desafio**: Como desenharia diferentes personalidades de IA para diferentes tipos de utilizadores (iniciantes vs especialistas)? Considere como o mesmo modelo de IA subjacente poderia servir diferentes públicos através da engenharia de prompts.

## Construindo a Web API com FastAPI: O Seu Hub de Comunicação de IA de Alto Desempenho

Agora vamos construir o backend que conecta o seu frontend aos serviços de IA. Vamos usar FastAPI, uma framework Python moderna que se destaca na construção de APIs para aplicações de IA.

O FastAPI oferece várias vantagens para este tipo de projeto: suporte async integrado para lidar com pedidos concorrentes, geração automática de documentação API, e desempenho excelente. O seu servidor FastAPI atua como intermediário que recebe pedidos do frontend, comunica com os serviços de IA, e devolve respostas formatadas.

### Por que usar FastAPI para aplicações de IA?

Pode estar a pensar: "Não posso simplesmente chamar a IA diretamente do meu JavaScript frontend?" ou "Por que FastAPI e não Flask ou Django?" Grandes perguntas! 

**Aqui está porque o FastAPI é perfeito para o que estamos a construir:**
- **Async por padrão**: Pode gerir múltiplos pedidos de IA em simultâneo sem ficar bloqueado
- **Documentação automática**: Visite `/docs` e obtenha uma página de documentação API bonita e interativa gratuitamente
- **Validação integrada**: Deteta erros antes que causem problemas
- **Rápido como um relâmpago**: Uma das frameworks Python mais rápidas que existem
- **Python moderno**: Usa todas as funcionalidades mais recentes e avançadas do Python

**E aqui está porque precisamos de um backend:**

**Segurança**: A sua chave de API de IA é como uma palavra-passe – se a colocar no JavaScript do frontend, qualquer pessoa que veja o código-fonte do seu site pode roubá-la e usar os seus créditos de IA. O backend mantém as credenciais sensíveis seguras.

**Limitação de taxa e controlo**: O backend permite controlar a frequência de pedidos dos utilizadores, implementar autenticação de utilizadores e adicionar registos para monitorizar o uso.

**Processamento de dados**: Talvez queira guardar conversas, filtrar conteúdos inapropriados ou combinar múltiplos serviços de IA. A lógica para isso vive no backend.

**A arquitetura assemelha-se a um modelo cliente-servidor:**
- **Frontend**: Camada de interface do utilizador para interação
- **Backend API**: Camada de processamento e encaminhamento de pedidos
- **Serviço de IA**: Computação externa e geração de respostas
- **Variáveis de ambiente**: Armazenamento seguro de configurações e credenciais

### Compreendendo o Fluxo Pedido-Resposta

Vamos traçar o que acontece quando um utilizador envia uma mensagem:

```mermaid
sequenceDiagram
    participant User as 👤 Utilizador
    participant Frontend as 🌐 Interface
    participant API as 🔧 Servidor FastAPI
    participant AI as 🤖 Serviço de IA
    
    User->>Frontend: Digita "Olá IA!"
    Frontend->>API: POST /hello {"mensagem": "Olá IA!"}
    Note over API: Valida pedido<br/>Adiciona prompt do sistema
    API->>AI: Envia pedido formatado
    AI->>API: Retorna resposta da IA
    Note over API: Processa resposta<br/>Regista conversa
    API->>Frontend: {"resposta": "Olá! Como posso ajudar?"}
    Frontend->>User: Mostra mensagem da IA
```
**Compreendendo cada passo:**
1. **Interação do utilizador**: Pessoa escreve na interface de chat
2. **Processamento no frontend**: JavaScript captura a entrada e formata-a em JSON
3. **Validação da API**: FastAPI valida automaticamente o pedido usando modelos Pydantic
4. **Integração da IA**: Backend adiciona contexto (prompt do sistema) e chama o serviço de IA
5. **Gestão da resposta**: A API recebe a resposta da IA e pode modificá-la se necessário
6. **Exibição no frontend**: JavaScript mostra a resposta na interface de chat

### Compreendendo a Arquitetura da API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Olá IA!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: pedido de API
    GitHub Models->>AI Function: resposta da IA
    AI Function->>FastAPI: texto da resposta
    FastAPI->>Frontend: {"response": "Olá! Como posso ajudar?"}
```
```mermaid
flowchart TD
    A[Entrada do Utilizador] --> B[Validação no Frontend]
    B --> C[Pedido HTTP POST]
    C --> D[FastAPI Router]
    D --> E[Validação Pydantic]
    E --> F[Chamada de Função AI]
    F --> G[API de Modelos GitHub]
    G --> H[Processamento da Resposta]
    H --> I[Resposta JSON]
    I --> J[Atualização do Frontend]
    
    subgraph "Camada de Segurança"
        K[Middleware CORS]
        L[Variáveis de Ambiente]
        M[Gestão de Erros]
    end
    
    D --> K
    F --> L
    H --> M
```
### Criando a Aplicação FastAPI

Vamos construir a nossa API passo a passo. Crie um ficheiro chamado `api.py` com o seguinte código FastAPI:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Criar aplicação FastAPI
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configurar adequadamente para produção
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos Pydantic para validação de pedido/resposta
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
        # Extrair e validar mensagem
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Chamar serviço IA (nota: call_llm deveria ser assíncrono para melhor desempenho)
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

**Compreendendo a implementação FastAPI:**
- **Importa** FastAPI para funcionalidade moderna de framework web e Pydantic para validação de dados
- **Cria** documentação automática da API (disponível em `/docs` quando o servidor está a correr)
- **Ativa** middleware CORS para permitir pedidos do frontend de origens diferentes
- **Define** modelos Pydantic para validação automática de pedidos/respostas e documentação
- **Usa** endpoints async para melhor desempenho com pedidos simultâneos
- **Implementa** códigos de estado HTTP apropriados e tratamento de erros com HTTPException
- **Inclui** logging estruturado para monitorização e depuração
- **Fornece** endpoint de verificação do estado para monitorização do serviço

**Principais vantagens do FastAPI comparado a frameworks tradicionais:**
- **Validação automática**: Modelos Pydantic garantem integridade dos dados antes do processamento
- **Documentação interativa**: Visite `/docs` para documentação API gerada automaticamente e testável
- **Segurança nos tipos**: Anotações de tipos Python previnem erros em tempo de execução e melhoram a qualidade do código
- **Suporte async**: Gere múltiplos pedidos de IA simultaneamente sem bloqueios
- **Desempenho**: Processamento de pedidos significativamente mais rápido para aplicações em tempo real

### Compreendendo o CORS: O Guarda de Segurança da Web

CORS (Cross-Origin Resource Sharing) é como um segurança num edifício que verifica se os visitantes têm permissão para entrar. Vamos entender porque isto importa e como afeta a sua aplicação.

#### O que é o CORS e porque existe?

**O problema**: Imagine se qualquer site pudesse fazer pedidos ao site do seu banco em seu nome sem a sua permissão. Seria um pesadelo de segurança! Os navegadores impedem isto por padrão através da "Política da Mesma Origem".

**Política da Mesma Origem**: Os navegadores apenas permitem que páginas web façam pedidos ao mesmo domínio, porta e protocolo de onde foram carregadas.

**Analogía do mundo real**: É como a segurança de um prédio de apartamentos – só os residentes (mesma origem) podem aceder por padrão. Se quiser deixar um amigo (origem diferente) entrar, tem de informar o segurança explicitamente que está tudo bem.

#### CORS no seu ambiente de desenvolvimento

Durante o desenvolvimento, o seu frontend e backend correm em portas diferentes:
- Frontend: `http://localhost:3000` (ou file:// se abrir HTML diretamente)
- Backend: `http://localhost:5000`

Estes são considerados "origens diferentes" mesmo estando no mesmo computador!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # Isto informa aos navegadores: "É permitido que outras origens façam pedidos a esta API"
```

**O que a configuração CORS faz na prática:**
- **Adiciona** cabeçalhos HTTP especiais às respostas da API que dizem aos navegadores "este pedido cross-origin está permitido"
- **Trata** pedidos "preflight" (os navegadores às vezes verificam permissões antes de enviar o pedido real)
- **Previne** o temido erro "bloqueado pela política CORS" no console do navegador

#### Segurança CORS: Desenvolvimento vs Produção

```python
# 🚨 Desenvolvimento: Permite TODAS as origens (prático mas inseguro)
CORS(app)

# ✅ Produção: Permitir apenas o seu domínio frontend específico
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Avançado: Origens diferentes para ambientes diferentes
if app.debug:  # Modo de desenvolvimento
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Modo de produção
    CORS(app, origins=["https://yourdomain.com"])
```

**Por que isto importa**: Em desenvolvimento, `CORS(app)` é como deixar a porta da frente destrancada – conveniente mas inseguro. Em produção, quer especificar exatamente que sites podem comunicar com a sua API.

#### Cenários Comuns de CORS e Soluções

| Cenário | Problema | Solução |
|----------|---------|----------|
| **Desenvolvimento Local** | Frontend não consegue alcançar backend | Adicionar CORSMiddleware ao FastAPI |
| **GitHub Pages + Heroku** | Frontend em produção não alcança API | Adicionar URL do GitHub Pages às origens CORS |
| **Domínio Personalizado** | Erros CORS em produção | Atualizar origens CORS para coincidir com o domínio |
| **Aplicação Móvel** | App não consegue alcançar API web | Adicionar domínio da app ou usar `*` com cuidado |

**Dica profissional**: Pode verificar os cabeçalhos CORS nas Ferramentas de Desenvolvedor do seu navegador, na aba Rede (Network). Procure por cabeçalhos como `Access-Control-Allow-Origin` na resposta.

### Tratamento de Erros e Validação

Observe como a nossa API inclui tratamento adequado de erros:

```python
# Validar que recebemos uma mensagem
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Princípios principais de validação:**
- **Verifica** campos obrigatórios antes de processar pedidos
- **Devolve** mensagens de erro úteis em formato JSON
- **Usa** códigos de estado HTTP apropriados (400 para pedidos inválidos)
- **Fornece** feedback claro para ajudar os programadores do frontend a depurar problemas

## Configurar e Executar o Seu Backend

Agora que temos a nossa integração de IA e servidor FastAPI prontos, vamos pôr tudo a funcionar. O processo de configuração envolve instalar dependências Python, configurar variáveis de ambiente e iniciar o servidor de desenvolvimento.

### Configuração do Ambiente Python

Vamos configurar o seu ambiente de desenvolvimento Python. Ambientes virtuais são como a abordagem compartimentada do Projeto Manhattan – cada projeto tem o seu espaço isolado com ferramentas e dependências específicas, evitando conflitos entre projetos diferentes.

```bash
# Navegue até ao seu diretório backend
cd backend

# Crie um ambiente virtual (como criar uma sala limpa para o seu projeto)
python -m venv venv

# Ative-o (Linux/Mac)
source ./venv/bin/activate

# No Windows, use:
# venv\Scripts\activate

# Instale as coisas boas
pip install openai fastapi uvicorn python-dotenv
```

**O que acabámos de fazer:**
- **Criámos** a nossa própria bolha Python onde podemos instalar pacotes sem afetar mais nada
- **Ativámos** o ambiente para que o terminal saiba usar este ambiente específico
- **Instalámos** o essencial: OpenAI para magia de IA, FastAPI para a nossa API web, Uvicorn para a executar, e python-dotenv para gestão segura de segredos

**Explicação das dependências chave:**
- **FastAPI**: Framework web moderno e rápido com documentação API automática
- **Uvicorn**: Servidor ASGI muito rápido que executa aplicações FastAPI
- **OpenAI**: Biblioteca oficial para integração com modelos GitHub e API OpenAI
- **python-dotenv**: Carregamento seguro de variáveis de ambiente a partir de ficheiros .env

### Configuração do Ambiente: Mantendo os Segredos Seguros

Antes de arrancar a nossa API, precisamos falar sobre uma das lições mais importantes no desenvolvimento web: como manter os seus segredos realmente secretos. Variáveis de ambiente são como um cofre seguro que só a sua aplicação pode abrir.

#### O que são Variáveis de Ambiente?

**Pense nas variáveis de ambiente como uma caixa de valores seguras** – coloca lá o que é valioso, e só você (e a sua app) tem a chave para abrir. Em vez de escrever informações sensíveis diretamente no seu código (onde qualquer um pode ver), armazena-o com segurança no ambiente.

**Aqui está a diferença:**
- **A forma errada**: Escrever a sua palavra-passe num post-it e colar no ecrã
- **A forma certa**: Guardar a sua palavra-passe num gestor de senhas seguro que só você pode aceder

#### Por que as Variáveis de Ambiente são Importantes

```python
# 🚨 NUNCA FAÇA ISTO - Chave API visível para todos
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Qualquer pessoa pode roubar isto!
    base_url="https://models.github.ai/inference"
)

# ✅ FAÇA ISTO - Chave API armazenada de forma segura
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Apenas a tua aplicação pode aceder a isto
    base_url="https://models.github.ai/inference"
)
```

**O que acontece quando codifica segredos diretamente:**
1. **Exposição no controlo de versões**: Qualquer pessoa com acesso ao seu repositório Git vê a sua chave API
2. **Repositórios públicos**: Se fizer push para GitHub, a sua chave fica visível para toda a internet
3. **Partilha de equipa**: Outros programadores no projeto têm acesso à sua chave pessoal
4. **Quebras de segurança**: Se alguém roubar a sua chave API, pode usar os seus créditos de IA

#### Configurar o Seu Ficheiro de Ambiente

Crie um ficheiro `.env` no seu diretório backend. Este ficheiro guarda os seus segredos localmente:

```bash
# Ficheiro .env - Este NUNCA deve ser commitado no Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Compreender o ficheiro .env:**
- **Um segredo por linha** no formato `KEY=value`
- **Sem espaços** em volta do sinal de igual
- **Sem aspas** necessárias em volta dos valores (normalmente)
- **Comentários** começam com `#`

#### Criar o Seu Token de Acesso Pessoal no GitHub

O seu token GitHub é como uma palavra-passe especial que dá permissão à sua aplicação para usar os serviços de IA do GitHub:

**Passo a passo para criar o token:**
1. **Vá às Definições do GitHub** → Definições de Programador → Tokens de Acesso Pessoal → Tokens (clássicos)
2. **Clique em "Gerar novo token (clássico)"**
3. **Defina a expiração** (30 dias para testes, mais longo para produção)
4. **Selecione os escopos**: Marque "repo" e outras permissões que necessitar
5. **Gere o token** e copie-o imediatamente (não verá outra vez!)
6. **Cole no seu ficheiro .env**

```bash
# Exemplo de como o seu token se parece (isto é falso!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Carregar Variáveis de Ambiente em Python

```python
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente a partir do ficheiro .env
load_dotenv()

# Agora pode aceder a elas de forma segura
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**O que este código faz:**
- **Carrega** o ficheiro .env e torna as variáveis acessíveis ao Python
- **Verifica** se o token obrigatório existe (bom tratamento de erros!)
- **Levanta** um erro claro se o token estiver em falta
- **Usa** o token com segurança sem expô-lo no código

#### Segurança no Git: O Ficheiro .gitignore

O seu ficheiro `.gitignore` diz ao Git que ficheiros nunca deve rastrear ou enviar:

```bash
# .gitignore - Adicione estas linhas
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```

**Por que isto é crucial**: Quando adiciona `.env` ao `.gitignore`, o Git ignora o seu ficheiro de ambiente, prevenindo que acidentalmente envie os seus segredos para o GitHub.

#### Ambientes Diferentes, Segredos Diferentes

Aplicações profissionais usam chaves API diferentes para ambientes distintos:

```bash
# .env.desenvolvimento
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.produção
GITHUB_TOKEN=your_production_token
DEBUG=False
```

**Por que isto importa**: Não quer que os seus experimentos de desenvolvimento afetem a quota de IA em produção, e quer diferentes níveis de segurança para diferentes ambientes.

### Arrancar o Seu Servidor de Desenvolvimento: Dando Vida ao Seu FastAPI
Agora chega o momento emocionante – iniciar o seu servidor de desenvolvimento FastAPI e ver a sua integração AI ganhar vida! O FastAPI usa Uvicorn, um servidor ASGI extremamente rápido, projetado especificamente para aplicações Python assíncronas.

#### Entendendo o Processo de Arranque do Servidor FastAPI

```bash
# Método 1: Execução direta em Python (inclui recarregamento automático)
python api.py

# Método 2: Utilizar Uvicorn diretamente (mais controlo)
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

Quando executa este comando, é isto que acontece nos bastidores:

**1. O Python carrega a sua aplicação FastAPI**:
- Importa todas as bibliotecas necessárias (FastAPI, Pydantic, OpenAI, etc.)
- Carrega variáveis de ambiente do seu ficheiro `.env`
- Cria a instância da aplicação FastAPI com documentação automática

**2. O Uvicorn configura o servidor ASGI**:
- Liga-se à porta 5000 com capacidades de gestão assíncrona de pedidos
- Configura o encaminhamento dos pedidos com validação automática
- Ativa o hot reload para desenvolvimento (reinicia com alterações de ficheiros)
- Gera documentação interativa da API

**3. O servidor começa a escutar**:
- O seu terminal mostra: `INFO: Uvicorn running on http://0.0.0.0:5000`
- O servidor pode gerir múltiplos pedidos AI concorrentes
- A sua API está pronta com documentação automática em `http://localhost:5000/docs`

#### O Que Deve Ver Quando Tudo Funciona

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Entendendo a saída do FastAPI:**
- **Will watch for changes**: Auto-reload ativado para desenvolvimento
- **Uvicorn running**: Servidor ASGI de alta performance ativo
- **Started reloader process**: Observador de ficheiros para reinícios automáticos
- **Application startup complete**: Aplicação FastAPI inicializada com êxito
- **Interactive docs available**: Visite `/docs` para documentação automática da API

#### Testar o Seu FastAPI: Múltiplas Abordagens Poderosas

O FastAPI oferece várias formas práticas de testar a sua API, incluindo documentação interativa automática:

**Método 1: Documentação Interativa da API (Recomendado)**
1. Abra o seu navegador e aceda a `http://localhost:5000/docs`
2. Vai ver o Swagger UI com todos os seus endpoints documentados
3. Clique em `/hello` → "Try it out" → Introduza uma mensagem de teste → "Execute"
4. Veja a resposta diretamente no navegador com formatação adequada

**Método 2: Teste Básico no Navegador**
1. Aceda a `http://localhost:5000` para o endpoint raiz
2. Aceda a `http://localhost:5000/health` para verificar o estado do servidor
3. Isto confirma que o seu servidor FastAPI está a funcionar corretamente

**Método 2: Teste pela Linha de Comando (Avançado)**
```bash
# Teste com curl (se disponível)
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# Resposta esperada:
# {"response": "Olá! Sou o seu assistente de IA. Como posso ajudar hoje?"}
```

**Método 3: Script de Teste em Python**
```python
# test_api.py - Crie este ficheiro para testar a sua API
import requests
import json

# Testar o endpoint da API
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Resolução de Problemas Comuns na Inicialização

| Mensagem de Erro | O Que Significa | Como Corrigir |
|-----------------|-----------------|---------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI não instalado | Execute `pip install fastapi uvicorn` no seu ambiente virtual |
| `ModuleNotFoundError: No module named 'uvicorn'` | Servidor ASGI não instalado | Execute `pip install uvicorn` no seu ambiente virtual |
| `KeyError: 'GITHUB_TOKEN'` | Variável de ambiente não encontrada | Verifique o seu ficheiro `.env` e a chamada `load_dotenv()` |
| `Address already in use` | Porta 5000 está ocupada | Termine outros processos que usem a porta 5000 ou altere a porta |
| `ValidationError` | Dados do pedido não coincidem com o modelo Pydantic | Verifique que o formato do pedido corresponde ao esquema esperado |
| `HTTPException 422` | Entidade não processável | Falha na validação do pedido, consulte `/docs` para formato correto |
| `OpenAI API error` | Falha na autenticação do serviço AI | Verifique se o token GitHub está correto e tem permissões adequadas |

#### Boas Práticas de Desenvolvimento

**Hot Reloading**: FastAPI com Uvicorn oferece recarregamento automático quando guarda alterações nos seus ficheiros Python. Isto significa que pode modificar o código e testar imediatamente sem reiniciar manualmente.

```python
# Ativar recarregamento a quente explicitamente
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True ativa o recarregamento a quente
```

**Logging para Desenvolvimento**: Adicione logging para perceber o que está a acontecer:

```python
import logging

# Configurar o registo de eventos
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

**Porquê o logging ajuda**: Durante o desenvolvimento, pode ver exatamente que pedidos estão a chegar, qual a resposta da AI e onde surgem erros. Isto torna a depuração muito mais rápida.

### Configuração para GitHub Codespaces: Desenvolvimento Cloud Facilitado

O GitHub Codespaces é como ter um computador de desenvolvimento poderoso na nuvem que pode ser acedido a partir de qualquer navegador. Se estiver a trabalhar em Codespaces, há alguns passos adicionais para tornar o seu backend acessível ao frontend.

#### Entendendo a Rede no Codespaces

Num ambiente de desenvolvimento local, tudo corre no mesmo computador:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (ou file://)

No Codespaces, o ambiente de desenvolvimento corre nos servidores GitHub, por isso “localhost” tem um significado diferente. O GitHub cria automaticamente URLs públicos para os seus serviços, mas precisa configurá-los corretamente.

#### Configuração Passo a Passo no Codespaces

**1. Inicie o seu servidor backend**:
```bash
cd backend
python api.py
```

Vai ver a mensagem habitual de arranque FastAPI/Uvicorn, mas repare que está a correr dentro do ambiente do Codespace.

**2. Configure a visibilidade da porta**:
- Procure a aba "Ports" no painel inferior do VS Code
- Encontre a porta 5000 na lista
- Clique com o botão direito na porta 5000
- Selecione "Port Visibility" → "Public"

**Porquê tornar pública?** Por padrão, as portas no Codespace são privadas (acessíveis só a si). Torná-la pública permite que o frontend (que corre no navegador) comunique com o backend.

**3. Obtenha a sua URL pública**:
Após tornar a porta pública, verá uma URL como esta:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Atualize a configuração do seu frontend**:
```javascript
// No seu frontend app.js, atualize o BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Entendendo as URLs do Codespace

As URLs do Codespace seguem um padrão previsível:
```
https://[codespace-name]-[port].app.github.dev
```

**Explicando isto:**
- `codespace-name`: Identificador único para o seu Codespace (normalmente inclui o seu nome de utilizador)
- `port`: Número da porta onde o seu serviço está a correr (5000 para a nossa app FastAPI)
- `app.github.dev`: Domínio do GitHub para aplicações Codespace

#### Testando a Configuração do Seu Codespace

**1. Teste o backend diretamente**:
Abra a sua URL pública numa nova aba do navegador. Deve ver:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Teste com ferramentas de desenvolvimento do navegador**:
```javascript
// Abra a consola do navegador e teste a sua API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Desenvolvimento Local

| Aspeto | Desenvolvimento Local | GitHub Codespaces |
|--------|-----------------------|-------------------|
| **Tempo de Configuração** | Maior (instalar Python, dependências) | Instantâneo (ambiente pré-configurado) |
| **Acesso URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Configuração de Porta** | Automática | Manual (tornar portas públicas) |
| **Persistência de Ficheiros** | Máquina local | Repositório GitHub |
| **Colaboração** | Difícil partilhar ambiente | Fácil partilhar link do Codespace |
| **Dependência Internet** | Só para chamadas API AI | Necessária para tudo |

#### Dicas para Desenvolvimento no Codespace

**Variáveis de Ambiente no Codespaces**:
O seu ficheiro `.env` funciona da mesma forma no Codespaces, mas também pode definir variáveis de ambiente diretamente no Codespace:

```bash
# Definir variável de ambiente para a sessão atual
export GITHUB_TOKEN="your_token_here"

# Ou adicionar ao seu .bashrc para persistência
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Gestão de Portas**:
- Codespaces deteta automaticamente quando a sua aplicação começa a escutar numa porta
- Pode encaminhar várias portas em simultâneo (útil se mais tarde adicionar uma base de dados)
- As portas permanecem acessíveis enquanto o seu Codespace estiver a correr

**Fluxo de Trabalho de Desenvolvimento**:
1. Faça alterações no código no VS Code
2. FastAPI recarrega automaticamente (graças ao modo reload do Uvicorn)
3. Teste as alterações imediatamente através da URL pública
4. Faça commit e push quando estiver pronto

> 💡 **Dica Profissional**: Adicione aos favoritos a URL do backend do seu Codespace durante o desenvolvimento. Como os nomes dos Codespaces são estáveis, a URL não mudará enquanto usar o mesmo Codespace.

## Criar a Interface de Chat Frontend: Onde Humanos Encontram AI

Agora vamos construir a interface do utilizador – a parte que determina como as pessoas interagem com o seu assistente AI. Tal como o design da interface do iPhone original, estamos focados em tornar a tecnologia complexa intuitiva e natural de usar.

### Entendendo a Arquitetura Moderna Frontend

A nossa interface de chat será o que chamamos de "Single Page Application" ou SPA. Em vez da abordagem antiga onde cada clique carrega uma nova página, a nossa app atualiza de forma suave e instantânea:

**Sites antigos**: Como ler um livro físico – vira para páginas completamente novas  
**A nossa app de chat**: Como usar o seu telemóvel – tudo flui e atualiza sem interrupções

```mermaid
graph TD
    A[Utilizador Digita Mensagem] --> B[JavaScript Captura Entrada]
    B --> C[Validar & Formatar Dados]
    C --> D[Enviar para API Backend]
    D --> E[Exibir Estado de Carregamento]
    E --> F[Receber Resposta da IA]
    F --> G[Atualizar Interface do Chat]
    G --> H[Pronto para Próxima Mensagem]
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
    ChatApp --> FastAPI : envia pedidos
```  
### Os Três Pilares do Desenvolvimento Frontend

Todas as aplicações frontend – desde sites simples a apps complexas como Discord ou Slack – são construídas sobre três tecnologias básicas. Pense nelas como a fundação de tudo o que vê e interage na web:

**HTML (Estrutura)**: Esta é a sua fundação  
- Decide que elementos existem (botões, áreas de texto, contentores)  
- Dá significado ao conteúdo (isto é um cabeçalho, isto é um formulário, etc.)  
- Cria a estrutura básica sobre a qual tudo o resto é construído

**CSS (Apresentação)**: Este é o seu decorador de interiores  
- Faz tudo parecer bonito (cores, fontes, layouts)  
- Garante adaptação a diferentes tamanhos de ecrã (telemóvel vs portátil vs tablet)  
- Cria animações suaves e feedback visual

**JavaScript (Comportamento)**: Este é o seu cérebro  
- Responde ao que os utilizadores fazem (cliques, escrita, scroll)  
- Comunica com o backend e atualiza a página  
- Torna tudo interativo e dinâmico

**Pense nisso como arquitetura de edifícios:**  
- **HTML**: A planta estrutural (definindo espaços e relacionamentos)  
- **CSS**: O design estético e ambiental (estilo visual e experiência do utilizador)  
- **JavaScript**: Os sistemas mecânicos (funcionalidade e interatividade)

### Porquê Que a Arquitetura JavaScript Moderna É Importante

A nossa aplicação de chat usará padrões modernos de JavaScript que verá em aplicações profissionais. Perceber estes conceitos vai ajudá-lo a crescer como programador:

**Arquitetura Baseada em Classes**: Vamos organizar o código em classes, que são como plantas para objetos  
**Async/Await**: Forma moderna de lidar com operações que demoram (como chamadas API)  
**Programação Baseada em Eventos**: A app responde a ações do utilizador (cliques, teclas) em vez de correr num ciclo contínuo  
**Manipulação do DOM**: Atualiza dinamicamente o conteúdo da página conforme a interação do utilizador e respostas da API

### Configuração da Estrutura do Projeto

Crie um diretório frontend com esta estrutura organizada:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Entendendo a arquitetura:**  
- **Separa** preocupações entre estrutura (HTML), comportamento (JavaScript), e apresentação (CSS)  
- **Mantém** uma estrutura de ficheiros simples, fácil de navegar e modificar  
- **Segue** as melhores práticas de desenvolvimento web para organização e manutenção

### Construindo a Fundação HTML: Estrutura Semântica para Acessibilidade

Comecemos pela estrutura HTML. O desenvolvimento web moderno enfatiza "HTML semântico" – usar elementos HTML que descrevam claramente a sua finalidade, não apenas a aparência. Isto torna a sua aplicação acessível a leitores de ecrã, motores de busca e outras ferramentas.

**Porquê que o HTML semântico importa**: Imagine descrever a sua app de chat por telefone. Diria "há um cabeçalho com o título, uma área principal onde aparecem conversas, e um formulário na parte inferior para escrever mensagens." O HTML semântico usa elementos que correspondem a essa descrição natural.

Crie o ficheiro `index.html` com esta marcação cuidadosamente estruturada:

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

**Entendendo cada elemento HTML e o seu propósito:**

#### Estrutura do Documento
- **`<!DOCTYPE html>`**: Indica ao navegador que é HTML5 moderno  
- **`<html lang="en">`**: Especifica a língua da página para leitores de ecrã e ferramentas de tradução  
- **`<meta charset="UTF-8">`**: Garante a codificação correta de caracteres para texto internacional  
- **`<meta name="viewport"...>`**: Torna a página responsiva em dispositivos móveis controlando zoom e escala  

#### Elementos Semânticos
- **`<header>`**: Identifica claramente a secção superior com título e descrição  
- **`<main>`**: Designa a área de conteúdo principal (onde as conversas acontecem)  
- **`<form>`**: Semânticamente correto para entrada do utilizador, permite navegação por teclado apropriada  

#### Recursos de Acessibilidade
- **`role="log"`**: Informa leitores de ecrã que esta área contém um registo cronológico de mensagens  
- **`aria-live="polite"`**: Anuncia novas mensagens em leitores de ecrã sem interromper  
- **`aria-label`**: Fornece etiquetas descritivas para controlos do formulário  
- **`required`**: O navegador valida que os utilizadores introduzam mensagem antes de enviar

#### Integração CSS e JavaScript
- **Atributos `class`**: Proporcionam ganchos de estilo para CSS (ex.: `chat-container`, `input-group`)  
- **Atributos `id`**: Permitem que o JavaScript encontre e manipule elementos específicos  
- **Posição do script**: Ficheiro JavaScript carregado no final para que o HTML carregue primeiro

**Porquê que esta estrutura funciona:**  
- **Fluxo lógico**: Cabeçalho → Conteúdo principal → Formulário corresponde à ordem natural de leitura  
- **Acesso por teclado**: Utilizadores podem navegar por todos os elementos interativos  
- **Compatível com leitores de ecrã**: Marcos e descrições claras para utilizadores com deficiência visual  
- **Responsivo para mobile**: Meta viewport permite design responsivo  
- **Melhoria progressiva**: Funciona mesmo se CSS ou JavaScript falharem a carregar

### Adicionando JavaScript Interativo: Lógica Moderna de Aplicações Web
Agora, vamos construir o JavaScript que traz a nossa interface de chat à vida. Usaremos padrões modernos de JavaScript que vai encontrar no desenvolvimento web profissional, incluindo classes ES6, async/await e programação orientada por eventos.

#### Compreender a Arquitetura Moderna de JavaScript

Em vez de escrever código procedural (uma série de funções que correm em ordem), vamos criar uma **arquitetura baseada em classes**. Pense numa classe como uma planta para criar objetos – como a planta de um arquiteto que pode ser usada para construir várias casas.

**Por que usar classes para aplicações web?**
- **Organização**: Toda a funcionalidade relacionada está agrupada
- **Reusabilidade**: Pode criar múltiplas instâncias do chat na mesma página
- **Manutenção**: Mais fácil de depurar e modificar funcionalidades específicas
- **Padrão profissional**: Este padrão é usado em frameworks como React, Vue e Angular

Crie `app.js` com este JavaScript moderno e bem estruturado:

```javascript
// app.js - Lógica moderna da aplicação de chat

class ChatApp {
    constructor() {
        // Obter referências aos elementos DOM que precisaremos manipular
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // Configurar a URL do backend aqui
        this.BASE_URL = "http://localhost:5000"; // Atualize isto para o seu ambiente
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // Configurar os event listeners quando a app de chat for criada
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Ouvir o envio do formulário (quando o utilizador clica em Enviar ou pressiona Enter)
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // Também ouvir a tecla Enter no campo de input (melhor UX)
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // Impedir que o formulário atualize a página
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // Não enviar mensagens vazias
        
        // Fornecer feedback ao utilizador de que algo está a acontecer
        this.setLoading(true);
        
        // Adicionar a mensagem do utilizador ao chat imediatamente (UI otimista)
        this.appendMessage(messageText, "user");
        
        // Limpar o campo de input para o utilizador poder escrever a próxima mensagem
        this.input.value = '';
        
        try {
            // Chamar a API de IA e esperar pela resposta
            const reply = await this.callAPI(messageText);
            
            // Adicionar a resposta da IA ao chat
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // Reativar a interface independentemente do sucesso ou falha
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

// Inicializar a aplicação de chat quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### Compreender Cada Conceito de JavaScript

**Estrutura de Classe ES6**:
```javascript
class ChatApp {
    constructor() {
        // Isto é executado quando cria uma nova instância de ChatApp
        // É como a função "setup" para o seu chat
    }
    
    methodName() {
        // Os métodos são funções que pertencem à classe
        // Podem aceder às propriedades da classe usando "this"
    }
}
```

**Padrão Async/Await**:
```javascript
// Forma antiga (inferno dos callbacks):
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

**Programação Orientada por Eventos**:
Em vez de verificar constantemente se algo aconteceu, "ouvimos" eventos:
```javascript
// Quando o formulário é enviado, executa handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// Quando a tecla Enter é pressionada, também executa handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**Manipulação do DOM**:
```javascript
// Criar novos elementos
const messageElement = document.createElement("div");

// Modificar as suas propriedades
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// Adicionar à página
this.messages.appendChild(messageElement);
```

#### Segurança e Boas Práticas

**Prevenção XSS**:
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // Isto escapa automaticamente o HTML
    return div.innerHTML;
}
```

**Por que isto é importante**: Se um utilizador escrever `<script>alert('hack')</script>`, esta função assegura que é mostrado como texto em vez de executar código.

**Gestão de Erros**:
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // Mostrar erro amigável ao utilizador em vez de bloquear a aplicação
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**Considerações de Experiência do Utilizador**:
- **UI otimista**: Adiciona a mensagem do utilizador imediatamente, não espera pela resposta do servidor
- **Estados de carregamento**: Desativa botões e mostra "A enviar..." enquanto espera
- **Auto-scroll**: Mantém as mensagens mais recentes visíveis
- **Validação de input**: Não envia mensagens vazias
- **Atalhos de teclado**: A tecla Enter envia mensagens (como aplicações reais de chat)

#### Compreender o Fluxo da Aplicação

1. **A página carrega** → evento `DOMContentLoaded` é disparado → é criado `new ChatApp()`
2. **Construtor executa** → obtém referências dos elementos do DOM → define ouvintes de eventos
3. **Utilizador escreve mensagem** → pressiona Enter ou clica em Enviar → executa `handleSubmit`
4. **handleSubmit** → valida input → mostra estado de carregamento → chama API
5. **API responde** → adiciona mensagem da IA ao chat → reabilita interface
6. **Pronto para a próxima mensagem** → utilizador pode continuar a conversar

Esta arquitetura é escalável – pode facilmente adicionar funcionalidades como edição de mensagens, carregamento de ficheiros, ou múltiplos tópicos de conversação sem reescrever a estrutura principal.

### 🎯 Verificação Pedagógica: Arquitetura Moderna de Frontend

**Compreensão da Arquitetura**: Implementou uma aplicação single-page completa usando padrões modernos de JavaScript. Isto representa um nível profissional de desenvolvimento frontend.

**Conceitos-Chave Dominados**:
- **Arquitetura de Classe ES6**: Código organizado e fácil de manter
- **Padrões Async/Await**: Programação assíncrona moderna
- **Programação Orientada a Eventos**: Design de interface responsiva
- **Boas Práticas de Segurança**: Prevenção XSS e validação de input

**Ligação à Indústria**: Os padrões que aprendeu (arquitetura baseada em classes, operações assíncronas, manipulação do DOM) são a base dos frameworks modernos como React, Vue e Angular. Está a construir com o mesmo pensamento arquitetónico usado em aplicações de produção.

**Questão de Reflexão**: Como estenderia esta aplicação de chat para suportar múltiplas conversas ou autenticação de utilizador? Considere as mudanças arquitetónicas necessárias e como a estrutura de classes evoluiria.

### Estilizando a Sua Interface de Chat

Agora, vamos criar uma interface de chat moderna e visualmente apelativa com CSS. Um bom estilo faz a sua aplicação parecer profissional e melhora a experiência geral do utilizador. Usaremos funcionalidades modernas de CSS como Flexbox, CSS Grid e propriedades personalizadas para um design responsivo e acessível.

Crie `styles.css` com estes estilos abrangentes:

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

**Compreender a arquitetura do CSS:**
- **Usa** propriedades personalizadas CSS (variáveis) para tematização consistente e fácil manutenção
- **Implementa** layout Flexbox para design responsivo e alinhamento adequado
- **Inclui** animações suaves para aparência das mensagens sem ser intrusivo
- **Fornece** distinção visual entre mensagens do utilizador, respostas da IA e estados de erro
- **Suporta** design responsivo que funciona em dispositivos desktop e móveis
- **Considera** acessibilidade com preferência por redução de movimento e contrastes adequados
- **Oferece** suporte a modo escuro conforme preferências do sistema do utilizador

### Configurar o URL do Backend

O passo final é atualizar o `BASE_URL` no seu JavaScript para corresponder ao seu servidor backend:

```javascript
// Para desenvolvimento local
this.BASE_URL = "http://localhost:5000";

// Para GitHub Codespaces (substitua pela sua URL real)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Determinar o URL do backend:**
- **Desenvolvimento local**: Use `http://localhost:5000` se estiver a correr o frontend e backend localmente
- **Codespaces**: Encontre o URL do backend na aba de Portas após tornar a porta 5000 pública
- **Produção**: Substitua pelo seu domínio real quando fizer deploy num serviço de alojamento

> 💡 **Dica de Testes**: Pode testar o backend diretamente visitando o URL raiz no seu navegador. Deve ver a mensagem de boas-vindas do seu servidor FastAPI.



## Testes e Deployment

Agora que tem os componentes frontend e backend construídos, vamos testar se tudo funciona em conjunto e explorar opções de deployment para partilhar o seu assistente de chat com outros.

### Fluxo de Teste Local

Siga estes passos para testar a aplicação completa:

```mermaid
graph TD
    A[Iniciar Servidor Backend] --> B[Configurar Variáveis de Ambiente]
    B --> C[Testar Endpoints da API]
    C --> D[Abrir Frontend no Navegador]
    D --> E[Testar Funcionalidade de Chat]
    E --> F[Depurar Quaisquer Problemas]
```
**Processo de teste passo a passo:**

1. **Inicie o servidor backend**:
   ```bash
   cd backend
   source venv/bin/activate  # ou venv\Scripts\activate no Windows
   python api.py
   ```

2. **Verifique se a API está a funcionar**:
   - Abra `http://localhost:5000` no seu navegador
   - Deve ver a mensagem de boas-vindas do seu servidor FastAPI

3. **Abra o frontend**:
   - Navegue para a pasta do frontend
   - Abra `index.html` no navegador web
   - Ou use a extensão Live Server do VS Code para melhor experiência de desenvolvimento

4. **Teste a funcionalidade do chat**:
   - Escreva uma mensagem no campo de input
   - Clique em "Enviar" ou pressione Enter
   - Verifique se a IA responde adequadamente
   - Veja a consola do navegador para possíveis erros em JavaScript

### Resolução de Problemas Comuns

| Problema | Sintomas | Solução |
|---------|----------|----------|
| **Erro CORS** | Frontend não alcança backend | Assegure que o CORSMiddleware do FastAPI está configurado corretamente |
| **Erro de API Key** | Respostas 401 Unauthorized | Verifique a variável de ambiente `GITHUB_TOKEN` |
| **Conexão Recusada** | Erros de rede no frontend | Confirme o URL do backend e que o servidor está a correr |
| **Sem Resposta da IA** | Respostas vazias ou de erro | Verifique logs do backend para problemas de quota ou autenticação |

**Passos comuns de depuração:**
- **Verifique** o Console das Ferramentas de Desenvolvimento para erros JavaScript
- **Confirme** a aba Network mostra pedidos e respostas API bem-sucedidos
- **Revise** o output do terminal do backend para erros Python ou problemas de API
- **Confirme** que as variáveis de ambiente estão carregadas e acessíveis corretamente

## 📈 Cronologia do Domínio no Desenvolvimento da Sua Aplicação IA

```mermaid
timeline
    title Jornada Completa de Desenvolvimento de Aplicações de IA
    
    section Fundamentos de IA
        Understanding Generative AI
            : Compreender conceitos de reconhecimento de padrões
            : Dominar o controlo de parâmetros de IA
            : Aprender técnicas de engenharia de prompts
        
        GitHub Models Integration
            : Navegar em plataformas de serviços de IA
            : Gerir autenticação de forma segura
            : Otimizar parâmetros de modelos
    
    section Desenvolvimento Backend
        Python API Architecture
            : Construir aplicações FastAPI
            : Implementar operações assíncronas
            : Criar endpoints seguros
        
        AI Service Integration
            : Ligar a APIs externas de IA
            : Gerir limitação de taxa
            : Implementar limites de erro
    
    section Domínio Frontend
        Modern JavaScript Patterns
            : Dominar arquitetura de classes ES6
            : Implementar fluxos async/await
            : Construir interfaces responsivas
        
        Real-time User Experience
            : Criar interfaces de chat dinâmicas
            : Gerir estados de carregamento
            : Otimizar interações do utilizador
    
    section Pronto para Produção
        Security & Performance
            : Implementar gestão segura de tokens
            : Prevenir vulnerabilidades XSS
            : Otimizar desempenho da API
        
        Professional Deployment
            : Construir arquiteturas escaláveis
            : Criar código sustentável
            : Documentar processos de desenvolvimento
```
**🎓 Marco de Conclusão**: Construiu com sucesso uma aplicação completa com IA usando as mesmas tecnologias e padrões arquitetónicos que suportam assistentes IA modernos. Estas competências representam a interseção entre desenvolvimento web tradicional e integração avançada de IA.

**🔄 Capacidades para o Próximo Nível**:
- Pronto para explorar frameworks avançados de IA (LangChain, LangGraph)
- Preparado para construir aplicações IA multimodais (texto, imagem, voz)
- Capaz de implementar bases de dados vetoriais e sistemas de recuperação
- Base preparada para machine learning e fine-tuning de modelos IA

## Desafio GitHub Copilot Agent 🚀

Use o modo Agent para completar o seguinte desafio:

**Descrição:** Melhore o assistente de chat adicionando histórico de conversação e persistência de mensagens. Este desafio ajuda a compreender a gestão de estado em aplicações de chat e implementar armazenamento de dados para melhor experiência do utilizador.

**Prompt:** Modifique a aplicação de chat para incluir histórico de conversação que persiste entre sessões. Adicione funcionalidade para guardar mensagens no local storage, mostrar o histórico ao carregar a página e incluir um botão "Limpar Histórico". Implemente também indicadores de digitação e carimbos horários para tornar a experiência de chat mais realista.

Saiba mais sobre [modo agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## Trabalho: Construa o Seu Assistente IA Pessoal

Agora vai criar a sua própria implementação de assistente IA. Em vez de simplesmente replicar o código do tutorial, esta é uma oportunidade para aplicar os conceitos ao construir algo que reflita os seus próprios interesses e casos de uso.

### Requisitos do Projeto

Vamos configurar o seu projeto com uma estrutura limpa e organizada:

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

### Tarefas principais de implementação

**Desenvolvimento Backend:**
- **Use** o nosso código FastAPI como base e personalize à sua maneira
- **Crie** uma personalidade IA única – talvez um assistente de cozinha, parceiro de escrita criativa ou colega de estudo
- **Adicione** gestão eficaz de erros para o seu app não falhar quando algo correr mal
- **Escreva** documentação clara para quem quiser entender como a sua API funciona

**Desenvolvimento Frontend:**
- **Construa** uma interface de chat intuitiva e acolhedora
- **Escreva** JavaScript limpo e moderno que se orgulharia de mostrar a outros devs
- **Desenvolva** estilos personalizados que reflitam a personalidade da sua IA – divertido e colorido? Limpo e minimalista? A escolha é sua!
- **Certifique-se** que funciona bem tanto em telefones como em computadores

**Requisitos de Personalização:**
- **Escolha** um nome único e personalidade para o seu assistente IA – talvez algo que reflita os seus interesses ou problemas que quer resolver
- **Personalize** o design visual para corresponder à vibe do seu assistente
- **Escreva** uma mensagem de boas-vindas atrativa que faça as pessoas quererem começar a conversar
- **Teste** o seu assistente com diferentes tipos de perguntas para ver como responde

### Ideias de Melhoria (Opcional)

Quer levar o seu projeto mais além? Eis algumas ideias divertidas para explorar:

| Funcionalidade | Descrição | Competências que Vai Praticar |
|---------|-------------|------------------------|
| **Histórico de Mensagens** | Lembrar conversas mesmo após atualizar a página | Trabalho com localStorage, manipulação JSON |
| **Indicadores de Digitação** | Mostrar "IA está a escrever..." enquanto espera respostas | Animações CSS, programação assíncrona |
| **Carimbos Horários das Mensagens** | Mostrar quando cada mensagem foi enviada | Formatação data/hora, design UX |
| **Exportar Conversa** | Permitir que utilizadores descarreguem a conversa | Manipulação de ficheiros, exportação de dados |
| **Alternar Tema** | Alternar modo claro/escuro | Variáveis CSS, preferências do utilizador |
| **Entrada por Voz** | Adicionar funcionalidade de fala para texto | APIs Web, acessibilidade |

### Testes e Documentação

**Garantia de Qualidade:**
- **Teste** a aplicação com diferentes inputs e casos limite
- **Verifique** se o design responsivo funciona em várias resoluções de ecrã
- **Cheque** acessibilidade com navegação por teclado e leitores de ecrã
- **Valide** HTML e CSS para conformidade com standards

**Requisitos de Documentação:**
- **Escreva** um README.md explicando o projeto e como executá-lo
- **Inclua** capturas de ecrã da interface de chat em ação
- **Documente** funcionalidades únicas ou personalizações adicionadas
- **Forneça** instruções claras de setup para outros desenvolvedores

### Diretrizes para Submissão

**Entregas do Projeto:**
1. Pasta completa do projeto com todo o código fonte
2. README.md com descrição do projeto e instruções de setup
3. Capturas de ecrã a demonstrar o assistente de chat em ação
4. Breve reflexão sobre o que aprendeu e desafios enfrentados

**Critérios de Avaliação:**
- **Funcionamento**: O assistente de chat funciona como esperado?
- **Qualidade de Código**: Código bem organizado, comentado e fácil de manter?
- **Design**: Interface visualmente apelativa e fácil de usar?
- **Criatividade**: A implementação é única e personalizada?
- **Documentação**: As instruções de setup são claras e completas?

> 💡 **Dica de Sucesso**: Comece pelos requisitos básicos primeiro, depois adicione melhorias quando tudo funcionar. Foque em criar uma experiência central polida antes de incorporar funcionalidades avançadas.

## Solução

[Solução](./solution/README.md)

## Desafios Bónus

Quer levar o seu assistente IA para o próximo nível? Experimente estes desafios avançados que aprofundam a sua compreensão da integração IA e desenvolvimento web.

### Personalização de Personalidade

A verdadeira magia acontece quando dá ao seu assistente IA uma personalidade única. Experimente diferentes prompts do sistema para criar assistentes especializados:

**Exemplo de Assistente Profissional:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Exemplo de Ajudante de Escrita Criativa:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Exemplo de Mentor Técnico:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Melhorias Frontend

Transforme a sua interface de chat com estas melhorias visuais e funcionais:

**Funcionalidades Avançadas de CSS:**
- **Implemente** animações e transições suaves para mensagens
- **Adicione** designs personalizados para as bolhas de chat com formas e gradientes em CSS
- **Crie** uma animação indicador de digitação para quando a IA está “a pensar”
- **Desenhe** reações com emojis ou sistema de avaliação de mensagens

**Melhorias em JavaScript:**
- **Adicione** atalhos de teclado (Ctrl+Enter para enviar, Escape para limpar input)
- **Implemente** pesquisa e filtragem de mensagens
- **Crie** funcionalidade para exportar conversas (descarregar como texto ou JSON)
- **Adicione** auto-save para localStorage para evitar perda de mensagens

### Integração Avançada de IA

**Múltiplas Personalidades IA:**
- **Crie** um dropdown para alternar entre diferentes personalidades IA
- **Guarde** a personalidade preferida do utilizador no localStorage
- **Implemente** comutação de contexto que mantém o fluxo da conversa

**Funcionalidades Inteligentes de Resposta:**
- **Adicione** consciência do contexto da conversa (IA lembra mensagens anteriores)
- **Implementar** sugestões inteligentes baseadas no tema da conversa  
- **Criar** botões de resposta rápida para perguntas comuns

> 🎯 **Objetivo de Aprendizagem**: Estes desafios bónus ajudam-no a entender padrões avançados de desenvolvimento web e técnicas de integração de IA que são usados em aplicações de produção.

## Resumo e Próximos Passos

Parabéns! Conseguiu construir com sucesso um assistente de chat alimentado por IA do zero. Este projeto deu-lhe experiência prática com tecnologias modernas de desenvolvimento web e integração de IA – competências cada vez mais valorizadas no panorama tecnológico atual.

### O Que Conseguiu Realizar

Ao longo desta lição, dominou várias tecnologias e conceitos fundamentais:

**Desenvolvimento Backend:**  
- **Integrado** com a API de Modelos do GitHub para funcionalidade de IA  
- **Construído** uma API RESTful usando Flask com tratamento adequado de erros  
- **Implementado** autenticação segura usando variáveis de ambiente  
- **Configurado** CORS para pedidos cross-origin entre front-end e back-end  

**Desenvolvimento Frontend:**  
- **Criado** uma interface de chat responsiva usando HTML semântico  
- **Implementado** JavaScript moderno com async/await e arquitetura baseada em classes  
- **Desenhado** uma interface apelativa com CSS Grid, Flexbox e animações  
- **Adicionado** funcionalidades de acessibilidade e princípios de design responsivo  

**Integração Full-Stack:**  
- **Ligado** front-end e back-end através de chamadas HTTP API  
- **Gerido** interações em tempo real e fluxo de dados assíncrono  
- **Implementado** tratamento de erros e feedback ao utilizador em toda a aplicação  
- **Testado** o fluxo completo da aplicação desde a entrada do utilizador até à resposta da IA  

### Resultados Chave da Aprendizagem

```mermaid
mindmap
  root((Competências de Aplicações de Chat IA))
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
Este projeto apresentou-lhe os fundamentos da construção de aplicações alimentadas por IA, que representam o futuro do desenvolvimento web. Agora compreende como integrar capacidades de IA em aplicações web tradicionais, criando experiências de utilizador envolventes que parecem inteligentes e responsivas.

### Aplicações Profissionais

As competências que desenvolveu nesta lição são diretamente aplicáveis a carreiras modernas em desenvolvimento de software:

- **Desenvolvimento web full-stack** com frameworks e APIs modernas  
- **Integração de IA** em aplicações web e apps móveis  
- **Design e desenvolvimento de APIs** para arquiteturas de microservices  
- **Desenvolvimento de interfaces de utilizador** com foco em acessibilidade e design responsivo  
- **Práticas de DevOps**, incluindo configuração de ambientes e deployment  

### Continuar a Sua Jornada de Desenvolvimento em IA

**Próximos Passos de Aprendizagem:**  
- **Explorar** modelos e APIs de IA mais avançados (GPT-4, Claude, Gemini)  
- **Aprender** técnicas de prompt engineering para melhores respostas de IA  
- **Estudar** design de conversação e princípios de experiência de utilizador em chatbots  
- **Investigar** segurança, ética e práticas responsáveis de desenvolvimento de IA  
- **Construir** aplicações mais complexas com memória de conversa e consciência de contexto  

**Ideias Avançadas para Projetos:**  
- Salas de chat multiutilizador com moderação por IA  
- Chatbots de atendimento ao cliente alimentados por IA  
- Assistentes educativos personalizados para aprendizagem individualizada  
- Colaboradores criativos para escrita com personalidades diferentes de IA  
- Assistentes para documentação técnica para desenvolvedores  

## Começar com GitHub Codespaces

Quer experimentar este projeto num ambiente de desenvolvimento na nuvem? O GitHub Codespaces oferece um setup completo de desenvolvimento no seu navegador, perfeito para experimentar aplicações de IA sem necessidade de configuração local.

### Configurar o Seu Ambiente de Desenvolvimento

**Passo 1: Criar a partir do Template**  
- **Navegue** até ao [repositório Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)  
- **Clique** em "Use this template" no canto superior direito (certifique-se que está autenticado no GitHub)  

![Create from template interface showing the green "Use this template" button](../../../translated_images/pt-PT/template.67ad477109d29a2b.webp)

**Passo 2: Lançar Codespaces**  
- **Abra** o repositório recém-criado  
- **Clique** no botão verde "Code" e selecione "Codespaces"  
- **Escolha** "Create codespace on main" para iniciar o seu ambiente de desenvolvimento  

![Create codespace interface with options for launching cloud development environment](../../../translated_images/pt-PT/codespace.bcecbdf5d2747d3d.webp)

**Passo 3: Configuração do Ambiente**  
Quando o seu Codespace carregar, terá acesso a:  
- **Python, Node.js** e todas as ferramentas necessárias pré-instaladas  
- **Interface VS Code** com extensões para desenvolvimento web  
- **Terminal** para correr servidores backend e frontend  
- **Encaminhamento de portas** para testar as suas aplicações  

**O que o Codespaces oferece:**  
- **Elimina** problemas de configuração e instalação local do ambiente  
- **Fornece** ambiente de desenvolvimento consistente entre dispositivos diferentes  
- **Inclui** ferramentas e extensões pré-configuradas para desenvolvimento web  
- **Oferece** integração contínua com GitHub para controlo de versões e colaboração  

> 🚀 **Dica Profissional**: O Codespaces é perfeito para aprender e prototipar aplicações de IA porque trata de toda a complexa configuração do ambiente automaticamente, permitindo que se concentre em construir e aprender em vez de resolver problemas de configuração.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoridade. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->