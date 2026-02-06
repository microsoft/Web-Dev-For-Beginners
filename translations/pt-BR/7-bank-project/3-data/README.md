# Construindo um App Bancário Parte 3: Métodos de Busca e Uso de Dados

Pense no computador da Enterprise em Star Trek - quando o Capitão Picard pede o status da nave, as informações aparecem instantaneamente sem que toda a interface seja interrompida e reconstruída. Esse fluxo contínuo de informações é exatamente o que estamos construindo aqui com a busca dinâmica de dados.

Atualmente, seu aplicativo bancário é como um jornal impresso - informativo, mas estático. Vamos transformá-lo em algo mais parecido com o controle de missão da NASA, onde os dados fluem continuamente e são atualizados em tempo real sem interromper o fluxo de trabalho do usuário.

Você aprenderá como se comunicar com servidores de forma assíncrona, lidar com dados que chegam em momentos diferentes e transformar informações brutas em algo significativo para seus usuários. Essa é a diferença entre um demo e um software pronto para produção.

## ⚡ O Que Você Pode Fazer nos Próximos 5 Minutos

**Caminho Rápido para Desenvolvedores Ocupados**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Set up API server]
    B --> C[Test fetch with curl]
    C --> D[Create login function]
    D --> E[See data in action]
```

- **Minuto 1-2**: Inicie seu servidor API (`cd api && npm start`) e teste a conexão
- **Minuto 3**: Crie uma função básica `getAccount()` usando fetch
- **Minuto 4**: Conecte o formulário de login com `action="javascript:login()"`
- **Minuto 5**: Teste o login e veja os dados da conta aparecerem no console

**Comandos Rápidos de Teste**:
```bash
# Verify API is running
curl http://localhost:5000/api

# Test account data fetch
curl http://localhost:5000/api/accounts/test
```

**Por Que Isso Importa**: Em 5 minutos, você verá a mágica da busca de dados assíncrona que alimenta todos os aplicativos modernos da web. Esta é a base que faz os aplicativos parecerem responsivos e vivos.

## 🗺️ Sua Jornada de Aprendizado Através de Aplicativos Web Baseados em Dados

```mermaid
journey
    title From Static Pages to Dynamic Applications
    section Understanding the Evolution
      Traditional page reloads: 3: You
      Discover AJAX/SPA benefits: 5: You
      Master Fetch API patterns: 7: You
    section Building Authentication
      Create login functions: 4: You
      Handle async operations: 6: You
      Manage user sessions: 8: You
    section Dynamic UI Updates
      Learn DOM manipulation: 5: You
      Build transaction displays: 7: You
      Create responsive dashboards: 9: You
    section Professional Patterns
      Template-based rendering: 6: You
      Error handling strategies: 7: You
      Performance optimization: 8: You
```

**Destino da Sua Jornada**: Ao final desta lição, você entenderá como os aplicativos web modernos buscam, processam e exibem dados dinamicamente, criando as experiências de usuário perfeitas que esperamos de aplicativos profissionais.

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/45)

### Pré-requisitos

Antes de mergulhar na busca de dados, certifique-se de ter os seguintes componentes prontos:

- **Lição Anterior**: Complete o [Formulário de Login e Registro](../2-forms/README.md) - vamos construir sobre essa base
- **Servidor Local**: Instale [Node.js](https://nodejs.org) e [execute o servidor API](../api/README.md) para fornecer dados da conta
- **Conexão com a API**: Teste a conexão do servidor com este comando:

```bash
curl http://localhost:5000/api
# Expected response: "Bank API v1.0.0"
```

Este teste rápido garante que todos os componentes estão se comunicando corretamente:
- Verifica se o Node.js está funcionando corretamente no seu sistema
- Confirma que seu servidor API está ativo e respondendo
- Valida que seu aplicativo pode alcançar o servidor (como verificar o contato de rádio antes de uma missão)

## 🧠 Visão Geral do Ecossistema de Gerenciamento de Dados

```mermaid
mindmap
  root((Data Management))
    Authentication Flow
      Login Process
        Form Validation
        Credential Verification
        Session Management
      User State
        Global Account Object
        Navigation Guards
        Error Handling
    API Communication
      Fetch Patterns
        GET Requests
        POST Requests
        Error Responses
      Data Formats
        JSON Processing
        URL Encoding
        Response Parsing
    Dynamic UI Updates
      DOM Manipulation
        Safe Text Updates
        Element Creation
        Template Cloning
      User Experience
        Real-time Updates
        Error Messages
        Loading States
    Security Considerations
      XSS Prevention
        textContent Usage
        Input Sanitization
        Safe HTML Creation
      CORS Handling
        Cross-Origin Requests
        Header Configuration
        Development Setup
```

**Princípio Central**: Aplicativos web modernos são sistemas de orquestração de dados - eles coordenam entre interfaces de usuário, APIs de servidor e modelos de segurança do navegador para criar experiências contínuas e responsivas.

---

## Entendendo a Busca de Dados em Aplicativos Web Modernos

A forma como os aplicativos web lidam com dados evoluiu dramaticamente nas últimas duas décadas. Entender essa evolução ajudará você a apreciar por que técnicas modernas como AJAX e a Fetch API são tão poderosas e por que se tornaram ferramentas essenciais para desenvolvedores web.

Vamos explorar como os sites tradicionais funcionavam em comparação com os aplicativos dinâmicos e responsivos que construímos hoje.

### Aplicativos Tradicionais de Múltiplas Páginas (MPA)

Nos primórdios da web, cada clique era como mudar de canal em uma televisão antiga - a tela ficava em branco e depois sintonizava lentamente o novo conteúdo. Essa era a realidade dos primeiros aplicativos web, onde cada interação significava reconstruir completamente a página inteira do zero.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    
    User->>Browser: Clicks link or submits form
    Browser->>Server: Requests new HTML page
    Note over Browser: Page goes blank
    Server->>Browser: Returns complete HTML page
    Browser->>User: Displays new page (flash/reload)
```

![Fluxo de atualização em um aplicativo de múltiplas páginas](../../../../translated_images/pt-BR/mpa.7f7375a1a2d4aa77.webp)

**Por que essa abordagem parecia desajeitada:**
- Cada clique significava reconstruir a página inteira do zero
- Os usuários eram interrompidos no meio do pensamento por aqueles flashes irritantes de página
- Sua conexão de internet trabalhava dobrado baixando o mesmo cabeçalho e rodapé repetidamente
- Os aplicativos pareciam mais com um arquivo de gavetas do que com um software

### Aplicativos Modernos de Página Única (SPA)

AJAX (JavaScript e XML Assíncronos) mudou completamente esse paradigma. Como o design modular da Estação Espacial Internacional, onde os astronautas podem substituir componentes individuais sem reconstruir toda a estrutura, o AJAX nos permite atualizar partes específicas de uma página da web sem recarregar tudo. Apesar do nome mencionar XML, usamos principalmente JSON hoje, mas o princípio central permanece: atualizar apenas o que precisa mudar.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant JavaScript
    participant Server
    
    User->>Browser: Interacts with page
    Browser->>JavaScript: Triggers event handler
    JavaScript->>Server: Fetches only needed data
    Server->>JavaScript: Returns JSON data
    JavaScript->>Browser: Updates specific page elements
    Browser->>User: Shows updated content (no reload)
```

![Fluxo de atualização em um aplicativo de página única](../../../../translated_images/pt-BR/spa.268ec73b41f992c2.webp)

**Por que os SPAs são muito melhores:**
- Apenas as partes que realmente mudaram são atualizadas (inteligente, né?)
- Sem mais interrupções bruscas - seus usuários permanecem no fluxo
- Menos dados viajando pela rede significa carregamento mais rápido
- Tudo parece ágil e responsivo, como os aplicativos no seu celular

### A Evolução para a Fetch API Moderna

Os navegadores modernos fornecem a [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), que substitui o antigo [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Como a diferença entre operar um telégrafo e usar e-mail, a Fetch API utiliza promises para um código assíncrono mais limpo e lida com JSON naturalmente.

| Recurso | XMLHttpRequest | Fetch API |
|---------|----------------|----------|
| **Sintaxe** | Baseada em callbacks complexos | Baseada em promises limpas |
| **Manipulação de JSON** | Requer análise manual | Método `.json()` embutido |
| **Tratamento de Erros** | Informações limitadas sobre erros | Detalhes abrangentes sobre erros |
| **Suporte Moderno** | Compatibilidade legada | Promises ES6+ e async/await |

> 💡 **Compatibilidade com Navegadores**: Boas notícias - a Fetch API funciona em todos os navegadores modernos! Se você está curioso sobre versões específicas, [caniuse.com](https://caniuse.com/fetch) tem a história completa de compatibilidade.
> 
**O resumo:**
- Funciona muito bem no Chrome, Firefox, Safari e Edge (basicamente em todos os lugares onde seus usuários estão)
- Apenas o Internet Explorer precisa de ajuda extra (e honestamente, é hora de deixar o IE para trás)
- Prepara você perfeitamente para os padrões elegantes de async/await que usaremos mais tarde

### Implementando Login e Recuperação de Dados do Usuário

Agora vamos implementar o sistema de login que transforma seu aplicativo bancário de uma exibição estática em um aplicativo funcional. Como os protocolos de autenticação usados em instalações militares seguras, vamos verificar as credenciais do usuário e, em seguida, fornecer acesso aos seus dados específicos.

Vamos construir isso de forma incremental, começando com a autenticação básica e depois adicionando as capacidades de busca de dados.

#### Etapa 1: Criar a Base da Função de Login

Abra seu arquivo `app.js` e adicione uma nova função `login`. Ela será responsável pelo processo de autenticação do usuário:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
}
```

**Vamos detalhar isso:**
- Essa palavra-chave `async`? Está dizendo ao JavaScript "ei, essa função pode precisar esperar por algumas coisas"
- Estamos pegando nosso formulário da página (nada muito complicado, apenas encontrando pelo ID)
- Depois estamos extraindo o que o usuário digitou como nome de usuário
- Aqui vai uma dica legal: você pode acessar qualquer entrada de formulário pelo atributo `name` - sem necessidade de chamadas extras de getElementById!

> 💡 **Padrão de Acesso ao Formulário**: Cada controle de formulário pode ser acessado pelo seu nome (definido no HTML usando o atributo `name`) como uma propriedade do elemento do formulário. Isso fornece uma maneira limpa e legível de obter dados do formulário.

#### Etapa 2: Criar a Função de Busca de Dados da Conta

Em seguida, criaremos uma função dedicada para recuperar os dados da conta do servidor. Isso segue o mesmo padrão da sua função de registro, mas foca na recuperação de dados:

```javascript
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

**O que esse código realiza:**
- **Usa** a moderna API `fetch` para solicitar dados de forma assíncrona
- **Constrói** uma URL de solicitação GET com o parâmetro de nome de usuário
- **Aplica** `encodeURIComponent()` para lidar com caracteres especiais em URLs de forma segura
- **Converte** a resposta para o formato JSON para fácil manipulação de dados
- **Lida** com erros de forma elegante, retornando um objeto de erro em vez de travar

> ⚠️ **Nota de Segurança**: A função `encodeURIComponent()` lida com caracteres especiais em URLs. Como os sistemas de codificação usados em comunicações navais, ela garante que sua mensagem chegue exatamente como pretendido, evitando que caracteres como "#" ou "&" sejam interpretados incorretamente.
> 
**Por que isso importa:**
- Impede que caracteres especiais quebrem URLs
- Protege contra ataques de manipulação de URLs
- Garante que seu servidor receba os dados pretendidos
- Segue práticas de codificação seguras

#### Entendendo Solicitações HTTP GET

Aqui está algo que pode surpreendê-lo: quando você usa `fetch` sem opções extras, ele automaticamente cria uma solicitação [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET). Isso é perfeito para o que estamos fazendo - pedindo ao servidor "ei, posso ver os dados da conta deste usuário?"

Pense nas solicitações GET como pedir educadamente para pegar um livro emprestado na biblioteca - você está solicitando ver algo que já existe. Solicitações POST (que usamos para registro) são mais como enviar um novo livro para ser adicionado à coleção.

| Solicitação GET | Solicitação POST |
|-----------------|-----------------|
| **Propósito** | Recuperar dados existentes | Enviar novos dados ao servidor |
| **Parâmetros** | No caminho/consulta da URL | No corpo da solicitação |
| **Cache** | Pode ser armazenado em cache pelos navegadores | Normalmente não armazenado em cache |
| **Segurança** | Visível na URL/logs | Oculto no corpo da solicitação |

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server
    
    Note over B,S: GET Request (Data Retrieval)
    B->>S: GET /api/accounts/test
    S-->>B: 200 OK + Account Data
    
    Note over B,S: POST Request (Data Submission)
    B->>S: POST /api/accounts + New Account Data
    S-->>B: 201 Created + Confirmation
    
    Note over B,S: Error Handling
    B->>S: GET /api/accounts/nonexistent
    S-->>B: 404 Not Found + Error Message
```

#### Etapa 3: Unindo Tudo

Agora vem a parte satisfatória - vamos conectar sua função de busca de dados da conta ao processo de login. É aqui que tudo se encaixa:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Esta função segue uma sequência clara:
- Extrai o nome de usuário da entrada do formulário
- Solicita os dados da conta do usuário ao servidor
- Lida com quaisquer erros que ocorram durante o processo
- Armazena os dados da conta e navega para o painel de controle em caso de sucesso

> 🎯 **Padrão Async/Await**: Como `getAccount` é uma função assíncrona, usamos a palavra-chave `await` para pausar a execução até que o servidor responda. Isso impede que o código continue com dados indefinidos.

#### Etapa 4: Criando um Local para Seus Dados

Seu aplicativo precisa de um lugar para lembrar as informações da conta uma vez que elas sejam carregadas. Pense nisso como a memória de curto prazo do seu aplicativo - um lugar para manter os dados do usuário atual à mão. Adicione esta linha no topo do seu arquivo `app.js`:

```javascript
// This holds the current user's account data
let account = null;
```

**Por que precisamos disso:**
- Mantém os dados da conta acessíveis de qualquer lugar no seu aplicativo
- Começar com `null` significa "ninguém está logado ainda"
- É atualizado quando alguém faz login ou se registra com sucesso
- Atua como uma única fonte de verdade - sem confusão sobre quem está logado

#### Etapa 5: Conecte Seu Formulário

Agora vamos conectar sua nova função de login ao formulário HTML. Atualize a tag do formulário assim:

```html
<form id="loginForm" action="javascript:login()">
  <!-- Your existing form inputs -->
</form>
```

**O que essa pequena mudança faz:**
- Impede que o formulário execute seu comportamento padrão de "recarregar toda a página"
- Chama sua função personalizada de JavaScript em vez disso
- Mantém tudo suave e com aparência de aplicativo de página única
- Dá a você controle total sobre o que acontece quando os usuários clicam em "Login"

#### Etapa 6: Melhore Sua Função de Registro

Para consistência, atualize sua função `register` para também armazenar os dados da conta e navegar para o painel de controle:

```javascript
// Add these lines at the end of your register function
account = result;
navigate('/dashboard');
```

**Essa melhoria oferece:**
- **Transição suave** do registro para o painel de controle
- **Experiência consistente** para o usuário entre os fluxos de login e registro
- **Acesso imediato** aos dados da conta após o registro bem-sucedido

#### Testando Sua Implementação

```mermaid
flowchart TD
    A[User enters credentials] --> B[Login function called]
    B --> C[Fetch account data from server]
    C --> D{Data received successfully?}
    D -->|Yes| E[Store account data globally]
    D -->|No| F[Display error message]
    E --> G[Navigate to dashboard]
    F --> H[User stays on login page]
```

**Hora de testar:**
1. Crie uma nova conta para garantir que tudo está funcionando
2. Tente fazer login com essas mesmas credenciais
3. Dê uma olhada no console do navegador (F12) se algo parecer errado
4. Certifique-se de que você chega ao painel de controle após um login bem-sucedido

Se algo não estiver funcionando, não entre em pânico! A maioria dos problemas são correções simples, como erros de digitação ou esquecer de iniciar o servidor API.

#### Uma Palavra Rápida Sobre Magia de Origem Cruzada

Você pode estar se perguntando: "Como meu aplicativo web está conversando com este servidor API quando eles estão rodando em portas diferentes?" Ótima pergunta! Isso toca em algo que todo desenvolvedor web encontra eventualmente.

> 🔒 **Segurança de Origem Cruzada**: Os navegadores aplicam uma "política de mesma origem" para evitar comunicação não autorizada entre diferentes domínios. Como o sistema de verificação em um ponto estratégico, eles verificam se a comunicação é autorizada antes de permitir a transferência de dados.
> 
**Na nossa configuração:**
- Seu aplicativo web roda em `localhost:3000` (servidor de desenvolvimento)
- Seu servidor API roda em `localhost:5000` (servidor backend)
- O servidor API inclui [headers CORS](https://developer.mozilla.org/docs/Web/HTTP/CORS) que autorizam explicitamente a comunicação do seu aplicativo web

Essa configuração espelha o desenvolvimento do mundo real, onde aplicativos frontend e backend geralmente rodam em servidores separados.

> 📚 **Saiba Mais**: Explore mais sobre APIs e busca de dados com este módulo abrangente [Microsoft Learn sobre APIs](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon).

## Trazendo Seus Dados à Vida no HTML

Agora vamos tornar os dados buscados visíveis para os usuários através da manipulação do DOM. Como o processo de revelar fotografias em um quarto escuro, estamos transformando dados invisíveis em algo que os usuários podem ver e interagir.
A manipulação do DOM é a técnica que transforma páginas web estáticas em aplicações dinâmicas que atualizam seu conteúdo com base nas interações do usuário e nas respostas do servidor.

### Escolhendo a Ferramenta Certa para o Trabalho

Quando se trata de atualizar seu HTML com JavaScript, você tem várias opções. Pense nelas como diferentes ferramentas em uma caixa de ferramentas - cada uma perfeita para trabalhos específicos:

| Método | Para que é ótimo | Quando usá-lo | Nível de segurança |
|--------|------------------|---------------|--------------------|
| `textContent` | Exibir dados do usuário com segurança | Sempre que estiver mostrando texto | ✅ Super seguro |
| `createElement()` + `append()` | Construir layouts complexos | Criar novas seções/listas | ✅ À prova de falhas |
| `innerHTML` | Definir conteúdo HTML | ⚠️ Tente evitar este | ❌ Arriscado |

#### A Maneira Segura de Mostrar Texto: textContent

A propriedade [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) é sua melhor amiga ao exibir dados do usuário. É como ter um segurança para sua página web - nada prejudicial passa:

```javascript
// The safe, reliable way to update text
const balanceElement = document.getElementById('balance');
balanceElement.textContent = account.balance;
```

**Benefícios do textContent:**
- Trata tudo como texto simples (impede execução de scripts)
- Limpa automaticamente o conteúdo existente
- Eficiente para atualizações simples de texto
- Oferece segurança integrada contra conteúdo malicioso

#### Criando Elementos HTML Dinâmicos

Para conteúdo mais complexo, combine [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) com o método [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append):

```javascript
// Safe way to create new elements
const transactionItem = document.createElement('div');
transactionItem.className = 'transaction-item';
transactionItem.textContent = `${transaction.date}: ${transaction.description}`;
container.append(transactionItem);
```

**Entendendo essa abordagem:**
- **Cria** novos elementos do DOM programaticamente
- **Mantém** controle total sobre atributos e conteúdo dos elementos
- **Permite** estruturas complexas e aninhadas de elementos
- **Preserva** a segurança ao separar estrutura de conteúdo

> ⚠️ **Consideração de Segurança**: Embora [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) apareça em muitos tutoriais, ele pode executar scripts embutidos. Assim como os protocolos de segurança no CERN que impedem a execução de código não autorizado, usar `textContent` e `createElement` oferece alternativas mais seguras.

**Riscos do innerHTML:**
- Executa quaisquer tags `<script>` nos dados do usuário
- Vulnerável a ataques de injeção de código
- Cria potenciais vulnerabilidades de segurança
- As alternativas mais seguras que estamos usando oferecem funcionalidade equivalente

### Tornando os Erros Amigáveis ao Usuário

Atualmente, os erros de login aparecem apenas no console do navegador, o que é invisível para os usuários. Como a diferença entre os diagnósticos internos de um piloto e o sistema de informações para passageiros, precisamos comunicar informações importantes pelo canal apropriado.

Implementar mensagens de erro visíveis fornece aos usuários feedback imediato sobre o que deu errado e como proceder.

#### Passo 1: Adicione um Local para Mensagens de Erro

Primeiro, vamos dar às mensagens de erro um espaço no seu HTML. Adicione isso logo antes do botão de login para que os usuários o vejam naturalmente:

```html
<!-- This is where error messages will appear -->
<div id="loginError" role="alert"></div>
<button>Login</button>
```

**O que está acontecendo aqui:**
- Estamos criando um contêiner vazio que permanece invisível até ser necessário
- Ele está posicionado onde os usuários naturalmente olham após clicar em "Login"
- A propriedade `role="alert"` é um toque especial para leitores de tela - ela informa à tecnologia assistiva "ei, isso é importante!"
- O `id` único dá ao nosso JavaScript um alvo fácil

#### Passo 2: Crie uma Função Auxiliar Prática

Vamos criar uma pequena função utilitária que pode atualizar o texto de qualquer elemento. Esta é uma daquelas funções "escreva uma vez, use em todo lugar" que economizará seu tempo:

```javascript
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

**Benefícios da função:**
- Interface simples que requer apenas um ID de elemento e conteúdo de texto
- Localiza e atualiza elementos do DOM com segurança
- Padrão reutilizável que reduz a duplicação de código
- Mantém comportamento consistente de atualização em toda a aplicação

#### Passo 3: Mostre Erros Onde os Usuários Podem Vê-los

Agora vamos substituir aquela mensagem oculta no console por algo que os usuários possam realmente ver. Atualize sua função de login:

```javascript
// Instead of just logging to console, show the user what's wrong
if (data.error) {
  return updateElement('loginError', data.error);
}
```

**Essa pequena mudança faz uma grande diferença:**
- Mensagens de erro aparecem exatamente onde os usuários estão olhando
- Não há mais falhas silenciosas misteriosas
- Os usuários recebem feedback imediato e acionável
- Seu aplicativo começa a parecer profissional e cuidadoso

Agora, ao testar com uma conta inválida, você verá uma mensagem de erro útil diretamente na página!

![Captura de tela mostrando a mensagem de erro exibida durante o login](../../../../translated_images/pt-BR/login-error.416fe019b36a6327.webp)

#### Passo 4: Sendo Inclusivo com Acessibilidade

Aqui está algo interessante sobre o `role="alert"` que adicionamos anteriormente - não é apenas decoração! Este pequeno atributo cria o que é chamado de [Região Viva](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) que anuncia imediatamente mudanças para leitores de tela:

```html
<div id="loginError" role="alert"></div>
```

**Por que isso importa:**
- Usuários de leitores de tela ouvem a mensagem de erro assim que ela aparece
- Todos recebem as mesmas informações importantes, independentemente de como navegam
- É uma maneira simples de fazer seu aplicativo funcionar para mais pessoas
- Mostra que você se preocupa em criar experiências inclusivas

Pequenos detalhes como este separam desenvolvedores bons de ótimos!

### 🎯 Verificação Pedagógica: Padrões de Autenticação

**Pausa e Reflexão**: Você acabou de implementar um fluxo completo de autenticação. Este é um padrão fundamental no desenvolvimento web.

**Autoavaliação Rápida**:
- Você consegue explicar por que usamos async/await para chamadas de API?
- O que aconteceria se esquecêssemos a função `encodeURIComponent()`?
- Como nosso tratamento de erros melhora a experiência do usuário?

**Conexão com o Mundo Real**: Os padrões que você aprendeu aqui (busca de dados assíncrona, tratamento de erros, feedback ao usuário) são usados em todas as grandes aplicações web, desde plataformas de mídia social até sites de comércio eletrônico. Você está desenvolvendo habilidades de nível de produção!

**Pergunta Desafiadora**: Como você modificaria este sistema de autenticação para lidar com múltiplos papéis de usuário (cliente, administrador, atendente)? Pense na estrutura de dados e nas mudanças na interface necessárias.

#### Passo 5: Aplique o Mesmo Padrão ao Registro

Para consistência, implemente o mesmo tratamento de erros no seu formulário de registro:

1. **Adicione** um elemento de exibição de erro ao seu HTML de registro:
```html
<div id="registerError" role="alert"></div>
```

2. **Atualize** sua função de registro para usar o mesmo padrão de exibição de erros:
```javascript
if (data.error) {
  return updateElement('registerError', data.error);
}
```

**Benefícios do tratamento de erros consistente:**
- **Proporciona** uma experiência uniforme ao usuário em todos os formulários
- **Reduz** a carga cognitiva ao usar padrões familiares
- **Simplifica** a manutenção com código reutilizável
- **Garante** que os padrões de acessibilidade sejam atendidos em todo o aplicativo

## Criando Seu Painel Dinâmico

Agora vamos transformar seu painel estático em uma interface dinâmica que exibe dados reais da conta. Como a diferença entre um cronograma de voos impresso e os painéis de partidas ao vivo nos aeroportos, estamos passando de informações estáticas para exibições responsivas em tempo real.

Usando as técnicas de manipulação do DOM que você aprendeu, criaremos um painel que se atualiza automaticamente com informações atuais da conta.

### Conhecendo Seus Dados

Antes de começar a construir, vamos dar uma olhada no tipo de dados que seu servidor envia de volta. Quando alguém faz login com sucesso, aqui está o tesouro de informações com o qual você pode trabalhar:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ]
}
```

**Essa estrutura de dados fornece:**
- **`user`**: Perfeito para personalizar a experiência ("Bem-vinda de volta, Sarah!")
- **`currency`**: Garante que exibimos valores monetários corretamente
- **`description`**: Um nome amigável para a conta
- **`balance`**: O saldo atual, que é essencial
- **`transactions`**: O histórico completo de transações com todos os detalhes

Tudo o que você precisa para construir um painel bancário com aparência profissional!

```mermaid
flowchart TD
    A[User Login] --> B[Fetch Account Data]
    B --> C{Data Valid?}
    C -->|Yes| D[Store in Global Variable]
    C -->|No| E[Show Error Message]
    D --> F[Navigate to Dashboard]
    F --> G[Update UI Elements]
    G --> H[Display Balance]
    G --> I[Show Description]
    G --> J[Render Transactions]
    J --> K[Create Table Rows]
    K --> L[Format Currency]
    L --> M[User Sees Live Data]
```

> 💡 **Dica Profissional**: Quer ver seu painel em ação imediatamente? Use o nome de usuário `test` ao fazer login - ele vem pré-carregado com dados de exemplo para que você possa ver tudo funcionando sem precisar criar transações primeiro.

**Por que a conta de teste é útil:**
- Vem com dados de exemplo realistas já carregados
- Perfeito para ver como as transações são exibidas
- Ótimo para testar os recursos do painel
- Economiza o trabalho de criar dados fictícios manualmente

### Criando os Elementos de Exibição do Painel

Vamos construir sua interface do painel passo a passo, começando com as informações resumidas da conta e depois avançando para recursos mais complexos, como listas de transações.

#### Passo 1: Atualize a Estrutura do HTML

Primeiro, substitua a seção estática "Saldo" por elementos de espaço reservado dinâmicos que seu JavaScript pode preencher:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Em seguida, adicione uma seção para a descrição da conta. Como isso funciona como um título para o conteúdo do painel, use HTML semântico:

```html
<h2 id="description"></h2>
```

**Entendendo a estrutura do HTML:**
- **Usa** elementos `<span>` separados para saldo e moeda para controle individual
- **Aplica** IDs únicos a cada elemento para direcionamento com JavaScript
- **Segue** HTML semântico usando `<h2>` para a descrição da conta
- **Cria** uma hierarquia lógica para leitores de tela e SEO

> ✅ **Insight de Acessibilidade**: A descrição da conta funciona como um título para o conteúdo do painel, então está marcada semanticamente como um cabeçalho. Saiba mais sobre como a [estrutura de cabeçalhos](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) impacta a acessibilidade. Você consegue identificar outros elementos na sua página que poderiam se beneficiar de tags de cabeçalho?

#### Passo 2: Crie a Função de Atualização do Painel

Agora crie uma função que preencha seu painel com dados reais da conta:

```javascript
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

**Passo a passo, aqui está o que essa função faz:**
- **Valida** se os dados da conta existem antes de prosseguir
- **Redireciona** usuários não autenticados de volta para a página de login
- **Atualiza** a descrição da conta usando a função reutilizável `updateElement`
- **Formata** o saldo para sempre mostrar duas casas decimais
- **Exibe** o símbolo de moeda apropriado

> 💰 **Formatação de Dinheiro**: O método [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) é um salva-vidas! Ele garante que seu saldo sempre pareça dinheiro real - "75.00" em vez de apenas "75". Seus usuários vão apreciar ver uma formatação de moeda familiar.

#### Passo 3: Garantindo que Seu Painel Seja Atualizado

Para garantir que seu painel seja atualizado com dados atuais toda vez que alguém o acessar, precisamos integrá-lo ao seu sistema de navegação. Se você completou a [lição 1](../1-template-route/assignment.md), isso deve parecer familiar. Caso contrário, não se preocupe - aqui está o que você precisa:

Adicione isso ao final da sua função `updateRoute()`:

```javascript
if (typeof route.init === 'function') {
  route.init();
}
```

Em seguida, atualize suas rotas para incluir a inicialização do painel:

```javascript
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

**O que essa configuração inteligente faz:**
- Verifica se uma rota tem código de inicialização especial
- Executa esse código automaticamente quando a rota é carregada
- Garante que seu painel sempre mostre dados atualizados e atuais
- Mantém sua lógica de roteamento limpa e organizada

#### Testando Seu Painel

Depois de implementar essas mudanças, teste seu painel:

1. **Faça login** com uma conta de teste
2. **Verifique** se você foi redirecionado para o painel
3. **Cheque** se a descrição da conta, saldo e moeda são exibidos corretamente
4. **Tente sair e fazer login novamente** para garantir que os dados sejam atualizados corretamente

Seu painel agora deve exibir informações dinâmicas da conta que se atualizam com base nos dados do usuário logado!

## Construindo Listas de Transações Inteligentes com Templates

Em vez de criar manualmente HTML para cada transação, usaremos templates para gerar formatação consistente automaticamente. Como os componentes padronizados usados na fabricação de espaçonaves, os templates garantem que cada linha de transação siga a mesma estrutura e aparência.

Essa técnica escala eficientemente de algumas transações para milhares, mantendo desempenho e apresentação consistentes.

```mermaid
graph LR
    A[HTML Template] --> B[JavaScript Clone]
    B --> C[Populate with Data]
    C --> D[Add to Fragment]
    D --> E[Batch Insert to DOM]
    
    subgraph "Performance Benefits"
        F[Single DOM Update]
        G[Consistent Formatting]
        H[Reusable Pattern]
    end
    
    E --> F
    E --> G
    E --> H
```

```mermaid
flowchart LR
    A[Transaction Data] --> B[HTML Template]
    B --> C[Clone Template]
    C --> D[Populate with Data]
    D --> E[Add to DOM]
    E --> F[Repeat for Each Transaction]
```

### Passo 1: Crie o Template de Transação

Primeiro, adicione um template reutilizável para linhas de transação no `<body>` do seu HTML:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

**Entendendo os templates HTML:**
- **Define** a estrutura para uma única linha de tabela
- **Permanece** invisível até ser clonado e preenchido com JavaScript
- **Inclui** três células para data, descrição e valor
- **Fornece** um padrão reutilizável para formatação consistente

### Passo 2: Prepare Sua Tabela para Conteúdo Dinâmico

Em seguida, adicione um `id` ao corpo da tabela para que o JavaScript possa facilmente direcioná-lo:

```html
<tbody id="transactions"></tbody>
```

**O que isso realiza:**
- **Cria** um alvo claro para inserir linhas de transação
- **Separa** a estrutura da tabela do conteúdo dinâmico
- **Permite** fácil limpeza e repopulação dos dados da transação

### Passo 3: Construa a Função de Fábrica de Linhas de Transação

Agora crie uma função que transforma dados de transação em elementos HTML:

```javascript
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

**Desmembrando essa função de fábrica:**
- **Recupera** o elemento template pelo seu ID
- **Clona** o conteúdo do template para manipulação segura
- **Seleciona** a linha da tabela dentro do conteúdo clonado
- **Preenche** cada célula com dados da transação
- **Formata** o valor para mostrar casas decimais adequadas
- **Retorna** a linha completa pronta para inserção

### Passo 4: Gere Múltiplas Linhas de Transação de Forma Eficiente

Adicione este código à sua função `updateDashboard()` para exibir todas as transações:

```javascript
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

**Entendendo essa abordagem eficiente:**
- **Cria** um fragmento de documento para agrupar operações do DOM
- **Itera** por todas as transações nos dados da conta
- **Gera** uma linha para cada transação usando a função de fábrica
- **Coleta** todas as linhas no fragmento antes de adicionar ao DOM
- **Realiza** uma única atualização no DOM em vez de várias inserções individuais
> ⚡ **Otimização de Desempenho**: [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) funciona como o processo de montagem na Boeing - os componentes são preparados fora da linha principal e depois instalados como uma unidade completa. Essa abordagem de agrupamento minimiza os reflows do DOM ao realizar uma única inserção em vez de várias operações individuais.

### Etapa 5: Aprimore a Função de Atualização para Conteúdo Misto

Sua função `updateElement()` atualmente só lida com conteúdo de texto. Atualize-a para funcionar tanto com texto quanto com nós do DOM:

```javascript
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

**Principais melhorias nesta atualização:**
- **Limpa** o conteúdo existente antes de adicionar novo conteúdo
- **Aceita** tanto strings de texto quanto nós do DOM como parâmetros
- **Utiliza** o método [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) para maior flexibilidade
- **Mantém** compatibilidade com o uso baseado em texto existente

### Testando Seu Dashboard

Chegou o momento da verdade! Vamos ver seu dashboard dinâmico em ação:

1. Faça login usando a conta `test` (ela já tem dados de exemplo prontos)
2. Navegue até seu dashboard
3. Verifique se as linhas de transações aparecem com a formatação correta
4. Certifique-se de que as datas, descrições e valores estão exibidos corretamente

Se tudo estiver funcionando, você verá uma lista de transações totalmente funcional no seu dashboard! 🎉

**O que você conquistou:**
- Criou um dashboard que escala com qualquer quantidade de dados
- Desenvolveu templates reutilizáveis para formatação consistente
- Implementou técnicas eficientes de manipulação do DOM
- Desenvolveu funcionalidades comparáveis às de aplicativos bancários de produção

Você transformou com sucesso uma página estática em um aplicativo web dinâmico.

### 🎯 Reflexão Pedagógica: Geração de Conteúdo Dinâmico

**Compreensão de Arquitetura**: Você implementou um pipeline sofisticado de dados para interface de usuário que reflete padrões usados em frameworks como React, Vue e Angular.

**Conceitos-Chave Dominados**:
- **Renderização baseada em templates**: Criação de componentes de interface reutilizáveis
- **Fragmentos de documento**: Otimização de desempenho do DOM
- **Manipulação segura do DOM**: Prevenção de vulnerabilidades de segurança
- **Transformação de dados**: Conversão de dados do servidor para interfaces de usuário

**Conexão com a Indústria**: Essas técnicas formam a base dos frameworks modernos de frontend. O virtual DOM do React, o sistema de templates do Vue e a arquitetura de componentes do Angular se baseiam nesses conceitos fundamentais.

**Pergunta de Reflexão**: Como você estenderia este sistema para lidar com atualizações em tempo real (como novas transações aparecendo automaticamente)? Considere WebSockets ou Server-Sent Events.

---

## 📈 Linha do Tempo de Domínio em Gerenciamento de Dados

```mermaid
timeline
    title Data-Driven Development Journey
    
    section Foundation Building
        API Setup & Testing
            : Understand client-server communication
            : Master HTTP request/response cycle
            : Learn debugging techniques
    
    section Authentication Mastery
        Async Function Patterns
            : Write clean async/await code
            : Handle promises effectively
            : Implement error boundaries
        User Session Management
            : Create global state patterns
            : Build navigation guards
            : Design user feedback systems
    
    section Dynamic UI Development
        Safe DOM Manipulation
            : Prevent XSS vulnerabilities
            : Use textContent over innerHTML
            : Create accessibility-friendly interfaces
        Template Systems
            : Build reusable UI components
            : Optimize performance with fragments
            : Scale to handle large datasets
    
    section Professional Patterns
        Production-Ready Code
            : Implement comprehensive error handling
            : Follow security best practices
            : Create maintainable architectures
        Modern Web Standards
            : Master Fetch API patterns
            : Understand CORS configurations
            : Build responsive, accessible UIs
```

**🎓 Marco de Graduação**: Você construiu com sucesso um aplicativo web completo orientado por dados usando padrões modernos de JavaScript. Essas habilidades se traduzem diretamente no trabalho com frameworks como React, Vue ou Angular.

**🔄 Capacidades de Próximo Nível**:
- Pronto para explorar frameworks de frontend que se baseiam nesses conceitos
- Preparado para implementar recursos em tempo real com WebSockets
- Equipado para criar Aplicativos Web Progressivos com capacidades offline
- Base estabelecida para aprender padrões avançados de gerenciamento de estado

## Desafio do Agente do GitHub Copilot 🚀

Use o modo Agent para completar o seguinte desafio:

**Descrição:** Melhore o aplicativo bancário implementando um recurso de busca e filtro de transações que permita aos usuários encontrar transações específicas por intervalo de datas, valor ou palavras-chave na descrição.

**Prompt:** Crie uma funcionalidade de busca para o aplicativo bancário que inclua: 1) Um formulário de busca com campos de entrada para intervalo de datas (de/até), valor mínimo/máximo e palavras-chave na descrição da transação, 2) Uma função `filterTransactions()` que filtre o array account.transactions com base nos critérios de busca, 3) Atualize a função `updateDashboard()` para mostrar os resultados filtrados, e 4) Adicione um botão "Limpar Filtros" para redefinir a visualização. Use métodos modernos de array do JavaScript, como `filter()`, e trate casos extremos para critérios de busca vazios.

Saiba mais sobre o [modo agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

Pronto para levar seu aplicativo bancário para o próximo nível? Vamos fazer com que ele pareça algo que você realmente gostaria de usar. Aqui estão algumas ideias para inspirar sua criatividade:

**Deixe bonito**: Adicione estilos CSS para transformar seu dashboard funcional em algo visualmente atraente. Pense em linhas limpas, bom espaçamento e talvez até algumas animações sutis.

**Torne-o responsivo**: Experimente usar [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) para criar um [design responsivo](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) que funcione bem em celulares, tablets e desktops. Seus usuários vão agradecer!

**Adicione um toque especial**: Considere codificar as transações por cores (verde para receitas, vermelho para despesas), adicionar ícones ou criar efeitos de hover que façam a interface parecer interativa.

Aqui está como um dashboard polido poderia parecer:

![Captura de tela de um exemplo de resultado do dashboard após a estilização](../../../../translated_images/pt-BR/screen2.123c82a831a1d14a.webp)

Não sinta que precisa seguir exatamente este modelo - use-o como inspiração e crie algo único!

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/46)

## Tarefa

[Refatore e comente seu código](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.