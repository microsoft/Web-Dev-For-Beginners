<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d259f6962464ad91e671083aa0398f4",
  "translation_date": "2025-10-22T23:11:03+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "br"
}
-->
# Construindo um App Bancário Parte 1: Templates HTML e Rotas em um Aplicativo Web

Quando o computador de orientação da Apollo 11 navegou até a Lua em 1969, ele precisou alternar entre diferentes programas sem reiniciar todo o sistema. Os aplicativos web modernos funcionam de forma semelhante – eles mudam o que você vê sem recarregar tudo do zero. Isso cria a experiência suave e responsiva que os usuários esperam hoje.

Ao contrário dos sites tradicionais que recarregam páginas inteiras para cada interação, os aplicativos web modernos atualizam apenas as partes que precisam ser alteradas. Essa abordagem, muito parecida com a forma como o controle da missão alterna entre diferentes telas enquanto mantém a comunicação constante, cria a experiência fluida que esperamos.

Aqui está o que torna a diferença tão dramática:

| Aplicativos Tradicionais de Múltiplas Páginas | Aplicativos Modernos de Página Única |
|-----------------------------------------------|-------------------------------------|
| **Navegação** | Recarregamento completo da página para cada tela | Troca instantânea de conteúdo |
| **Desempenho** | Mais lento devido ao download completo de HTML | Mais rápido com atualizações parciais |
| **Experiência do Usuário** | Trocas bruscas de página | Transições suaves, estilo aplicativo |
| **Compartilhamento de Dados** | Difícil entre páginas | Gerenciamento de estado facilitado |
| **Desenvolvimento** | Vários arquivos HTML para manter | Um único HTML com templates dinâmicos |

**Entendendo a evolução:**
- **Aplicativos tradicionais** exigem solicitações ao servidor para cada ação de navegação
- **SPAs modernos** carregam uma vez e atualizam o conteúdo dinamicamente usando JavaScript
- **Expectativas dos usuários** agora favorecem interações instantâneas e contínuas
- **Benefícios de desempenho** incluem redução de largura de banda e respostas mais rápidas

Nesta lição, vamos construir um aplicativo bancário com várias telas que fluem perfeitamente. Assim como os cientistas usam instrumentos modulares que podem ser reconfigurados para diferentes experimentos, usaremos templates HTML como componentes reutilizáveis que podem ser exibidos conforme necessário.

Você trabalhará com templates HTML (modelos reutilizáveis para diferentes telas), roteamento em JavaScript (o sistema que alterna entre telas) e a API de histórico do navegador (que mantém o botão de voltar funcionando como esperado). Estas são as mesmas técnicas fundamentais usadas por frameworks como React, Vue e Angular.

Ao final, você terá um aplicativo bancário funcional que demonstra os princípios profissionais de um aplicativo de página única.

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/41)

### O que Você Vai Precisar

Precisaremos de um servidor web local para testar nosso aplicativo bancário – não se preocupe, é mais fácil do que parece! Se você ainda não tiver um configurado, basta instalar [Node.js](https://nodejs.org) e executar `npx lite-server` na pasta do seu projeto. Este comando prático inicia um servidor local e abre automaticamente seu aplicativo no navegador.

### Preparação

No seu computador, crie uma pasta chamada `bank` com um arquivo chamado `index.html` dentro dela. Vamos começar com este [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

**O que este boilerplate fornece:**
- **Estabelece** a estrutura do documento HTML5 com a declaração DOCTYPE adequada
- **Configura** a codificação de caracteres como UTF-8 para suporte a texto internacional
- **Habilita** design responsivo com a tag meta viewport para compatibilidade com dispositivos móveis
- **Define** um título descritivo que aparece na aba do navegador
- **Cria** uma seção de corpo limpa onde construiremos nosso aplicativo

> 📁 **Prévia da Estrutura do Projeto**
> 
> **Ao final desta lição, seu projeto conterá:**
> ```
> bank/
> ├── index.html      <!-- Main HTML with templates -->
> ├── app.js          <!-- Routing and navigation logic -->
> └── style.css       <!-- (Optional for future lessons) -->
> ```
> 
> **Responsabilidades dos arquivos:**
> - **index.html**: Contém todos os templates e fornece a estrutura do aplicativo
> - **app.js**: Gerencia o roteamento, navegação e gerenciamento de templates
> - **Templates**: Definem a interface para login, painel e outras telas

---

## Templates HTML

Templates resolvem um problema fundamental no desenvolvimento web. Quando Gutenberg inventou a impressão com tipos móveis na década de 1440, ele percebeu que, em vez de esculpir páginas inteiras, poderia criar blocos de letras reutilizáveis e organizá-los conforme necessário. Os templates HTML funcionam com o mesmo princípio – em vez de criar arquivos HTML separados para cada tela, você define estruturas reutilizáveis que podem ser exibidas conforme necessário.

Pense nos templates como projetos para diferentes partes do seu aplicativo. Assim como um arquiteto cria um projeto e o utiliza várias vezes em vez de redesenhar salas idênticas, criamos templates uma vez e os instanciamos conforme necessário. O navegador mantém esses templates ocultos até que o JavaScript os ative.

Se você quiser criar várias telas para uma página da web, uma solução seria criar um arquivo HTML para cada tela que deseja exibir. No entanto, essa solução traz algumas inconveniências:

- Você precisa recarregar todo o HTML ao alternar de tela, o que pode ser lento.
- É difícil compartilhar dados entre as diferentes telas.

Outra abordagem é ter apenas um arquivo HTML e definir vários [templates HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) usando o elemento `<template>`. Um template é um bloco HTML reutilizável que não é exibido pelo navegador e precisa ser instanciado em tempo de execução usando JavaScript.

### Vamos Construir

Vamos criar um aplicativo bancário com duas telas principais: uma página de login e um painel. Primeiro, vamos adicionar um elemento de espaço reservado ao corpo do HTML – é aqui que todas as nossas diferentes telas aparecerão:

```html
<div id="app">Loading...</div>
```

**Entendendo este espaço reservado:**
- **Cria** um contêiner com o ID "app" onde todas as telas serão exibidas
- **Mostra** uma mensagem de carregamento até que o JavaScript inicialize a primeira tela
- **Fornece** um único ponto de montagem para nosso conteúdo dinâmico
- **Permite** fácil direcionamento a partir do JavaScript usando `document.getElementById()`

> 💡 **Dica**: Como o conteúdo deste elemento será substituído, podemos colocar uma mensagem ou indicador de carregamento que será exibido enquanto o aplicativo está carregando.

Em seguida, vamos adicionar abaixo o template HTML para a página de login. Por enquanto, colocaremos apenas um título e uma seção contendo um link que usaremos para realizar a navegação.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

**Analisando este template de login:**
- **Define** um template com o identificador único "login" para direcionamento no JavaScript
- **Inclui** um cabeçalho principal que estabelece a marca do aplicativo
- **Contém** um elemento `<section>` semântico para agrupar conteúdo relacionado
- **Fornece** um link de navegação que direcionará os usuários ao painel

Depois, adicionaremos outro template HTML para a página do painel. Esta página conterá diferentes seções:

- Um cabeçalho com um título e um link de logout
- O saldo atual da conta bancária
- Uma lista de transações, exibida em uma tabela

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

**Entendendo cada parte deste painel:**
- **Estrutura** a página com um elemento `<header>` semântico contendo navegação
- **Exibe** o título do aplicativo de forma consistente em todas as telas para branding
- **Fornece** um link de logout que direciona de volta à tela de login
- **Mostra** o saldo atual da conta em uma seção dedicada
- **Organiza** os dados das transações usando uma tabela HTML bem estruturada
- **Define** cabeçalhos de tabela para as colunas de Data, Objeto e Valor
- **Deixa** o corpo da tabela vazio para injeção de conteúdo dinâmico posteriormente

> 💡 **Dica**: Ao criar templates HTML, se você quiser ver como eles ficarão, pode comentar as linhas `<template>` e `</template>` usando `<!-- -->`.

✅ Por que você acha que usamos atributos `id` nos templates? Poderíamos usar algo diferente, como classes?

## Dando Vida aos Templates com JavaScript

Agora precisamos tornar nossos templates funcionais. Assim como uma impressora 3D transforma um projeto digital em um objeto físico, o JavaScript pega nossos templates ocultos e cria elementos visíveis e interativos que os usuários podem ver e usar.

O processo segue três etapas consistentes que formam a base do desenvolvimento web moderno. Uma vez que você entende esse padrão, você o reconhecerá em muitos frameworks e bibliotecas.

Se você tentar seu arquivo HTML atual em um navegador, verá que ele fica preso exibindo `Loading...`. Isso ocorre porque precisamos adicionar algum código JavaScript para instanciar e exibir os templates HTML.

Instanciar um template geralmente é feito em 3 etapas:

1. Recuperar o elemento template no DOM, por exemplo, usando [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clonar o elemento template, usando [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Anexá-lo ao DOM sob um elemento visível, por exemplo, usando [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

```mermaid
flowchart TD
    A[🔍 Step 1: Find Template] --> B[📋 Step 2: Clone Template]
    B --> C[🔗 Step 3: Attach to DOM]
    
    A1["document.getElementById('login')"] --> A
    B1["template.content.cloneNode(true)"] --> B  
    C1["app.appendChild(view)"] --> C
    
    C --> D[👁️ Template Visible to User]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
```

**Desmembrando o processo visualmente:**
- **Etapa 1** localiza o template oculto na estrutura do DOM
- **Etapa 2** cria uma cópia funcional que pode ser modificada com segurança
- **Etapa 3** insere a cópia na área visível da página
- **Resultado** é uma tela funcional com a qual os usuários podem interagir

✅ Por que precisamos clonar o template antes de anexá-lo ao DOM? O que você acha que aconteceria se pulássemos essa etapa?

### Tarefa

Crie um novo arquivo chamado `app.js` na pasta do seu projeto e importe esse arquivo na seção `<head>` do seu HTML:

```html
<script src="app.js" defer></script>
```

**Entendendo esta importação de script:**
- **Conecta** o arquivo JavaScript ao documento HTML
- **Utiliza** o atributo `defer` para garantir que o script seja executado após a conclusão da análise do HTML
- **Permite** acesso a todos os elementos do DOM, já que estão totalmente carregados antes da execução do script
- **Segue** as melhores práticas modernas para carregamento de scripts e desempenho

Agora, no `app.js`, criaremos uma nova função chamada `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Passo a passo do que está acontecendo:**
- **Localiza** o elemento template usando seu ID único
- **Cria** uma cópia profunda do conteúdo do template usando `cloneNode(true)`
- **Encontra** o contêiner do aplicativo onde o conteúdo será exibido
- **Limpa** qualquer conteúdo existente do contêiner do aplicativo
- **Insere** o conteúdo do template clonado no DOM visível

Agora chame essa função com um dos templates e veja o resultado.

```js
updateRoute('login');
```

**O que essa chamada de função realiza:**
- **Ativa** o template de login passando seu ID como parâmetro
- **Demonstra** como alternar programaticamente entre diferentes telas do aplicativo
- **Exibe** a tela de login no lugar da mensagem "Loading..."

✅ Qual é o propósito deste código `app.innerHTML = '';`? O que acontece sem ele?

## Criando Rotas

O roteamento é essencialmente sobre conectar URLs ao conteúdo correto. Considere como os operadores de telefonia antigos usavam centrais telefônicas para conectar chamadas – eles recebiam uma solicitação de entrada e a direcionavam para o destino correto. O roteamento web funciona de forma semelhante, pegando uma solicitação de URL e determinando qual conteúdo exibir.

Tradicionalmente, os servidores web lidavam com isso servindo diferentes arquivos HTML para diferentes URLs. Como estamos construindo um aplicativo de página única, precisamos lidar com esse roteamento nós mesmos usando JavaScript. Essa abordagem nos dá mais controle sobre a experiência do usuário e o desempenho.

```mermaid
flowchart LR
    A["🌐 URL Path<br/>/dashboard"] --> B["🗺️ Routes Object<br/>Lookup"]
    B --> C["🎯 Template ID<br/>'dashboard'"]
    C --> D["📄 Find Template<br/>getElementById"]
    D --> E["👁️ Display Screen<br/>Clone & Append"]
    
    F["📍 /login"] --> G["🎯 'login'"]
    H["📍 /unknown"] --> I["❌ Not Found"]
    I --> J["🔄 Redirect to /login"]
    
    style B fill:#e3f2fd
    style E fill:#e8f5e8
    style I fill:#ffebee
    style J fill:#fff3e0
```

**Entendendo o fluxo de roteamento:**
- **Mudanças na URL** acionam uma busca na configuração de rotas
- **Rotas válidas** mapeiam para IDs de templates específicos para renderização
- **Rotas inválidas** acionam comportamento de fallback para evitar estados quebrados
- **Renderização de templates** segue o processo de três etapas que aprendemos anteriormente

Ao falar sobre um aplicativo web, chamamos de *Roteamento* a intenção de mapear **URLs** para telas específicas que devem ser exibidas. Em um site com vários arquivos HTML, isso é feito automaticamente, pois os caminhos dos arquivos são refletidos na URL. Por exemplo, com esses arquivos na sua pasta de projeto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Se você criar um servidor web com `mywebsite` como raiz, o mapeamento de URL será:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

No entanto, para nosso aplicativo web, estamos usando um único arquivo HTML contendo todas as telas, então esse comportamento padrão não nos ajudará. Precisamos criar esse mapa manualmente e atualizar a tela exibida usando JavaScript.

### Tarefa

Usaremos um objeto simples para implementar um [mapa](https://en.wikipedia.org/wiki/Associative_array) entre os caminhos de URL e nossos templates. Adicione este objeto no topo do seu arquivo `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

**Entendendo esta configuração de rotas:**
- **Define** um mapeamento entre caminhos de URL e identificadores de templates
- **Usa** sintaxe de objeto onde as chaves são caminhos de URL e os valores contêm informações sobre os templates
- **Permite** uma busca fácil de qual template exibir para qualquer URL dado
- **Fornece** uma estrutura escalável para adicionar novas rotas no futuro

Agora vamos modificar um pouco a função `updateRoute`. Em vez de passar diretamente o `templateId` como argumento, queremos recuperá-lo primeiro olhando para a URL atual e, em seguida, usar nosso mapa para obter o valor correspondente do ID do template. Podemos usar [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) para obter apenas a seção do caminho da URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Desmembrando o que acontece aqui:**
- **Extrai** o caminho atual da URL do navegador usando `window.location.pathname`
- **Busca** a configuração de rota correspondente em nosso objeto de rotas
- **Recupera** o ID do template da configuração de rota
- **Segue** o mesmo processo de renderização de template de antes
- **Cria** um sistema dinâmico que responde às mudanças de URL

Aqui mapeamos as rotas que declaramos para o template correspondente. Você pode testar se funciona corretamente alterando a URL manualmente no seu navegador.
✅ O que acontece se você inserir um caminho desconhecido na URL? Como poderíamos resolver isso?

## Adicionando Navegação

Com o roteamento estabelecido, os usuários precisam de uma maneira de navegar pelo aplicativo. Sites tradicionais recarregam páginas inteiras ao clicar em links, mas queremos atualizar tanto a URL quanto o conteúdo sem recarregar a página. Isso cria uma experiência mais fluida, semelhante à forma como aplicativos de desktop alternam entre diferentes visualizações.

Precisamos coordenar duas coisas: atualizar a URL do navegador para que os usuários possam salvar páginas nos favoritos e compartilhar links, e exibir o conteúdo apropriado. Quando implementado corretamente, isso cria a navegação contínua que os usuários esperam de aplicativos modernos.

> 🏗️ **Visão Arquitetônica**: Componentes do Sistema de Navegação
>
> **O que você está construindo:**
> - **🔄 Gerenciamento de URL**: Atualiza a barra de endereço do navegador sem recarregar a página
> - **📋 Sistema de Templates**: Troca o conteúdo dinamicamente com base na rota atual  
> - **📚 Integração com o Histórico**: Mantém a funcionalidade dos botões de voltar/avançar do navegador
> - **🛡️ Tratamento de Erros**: Soluções elegantes para rotas inválidas ou ausentes
>
> **Como os componentes trabalham juntos:**
> - **Escuta** eventos de navegação (cliques, mudanças no histórico)
> - **Atualiza** a URL usando a API de Histórico
> - **Renderiza** o template apropriado para a nova rota
> - **Mantém** uma experiência de usuário contínua

O próximo passo para o nosso aplicativo é adicionar a possibilidade de navegar entre páginas sem precisar alterar a URL manualmente. Isso implica duas coisas:

  1. Atualizar a URL atual
  2. Atualizar o template exibido com base na nova URL

Já cuidamos da segunda parte com a função `updateRoute`, então precisamos descobrir como atualizar a URL atual.

Teremos que usar JavaScript e, mais especificamente, o método [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), que permite atualizar a URL e criar uma nova entrada no histórico de navegação, sem recarregar o HTML.

> ⚠️ **Nota Importante**: Embora o elemento âncora HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) possa ser usado sozinho para criar hiperlinks para diferentes URLs, ele fará com que o navegador recarregue o HTML por padrão. É necessário evitar esse comportamento ao lidar com roteamento usando JavaScript personalizado, utilizando a função preventDefault() no evento de clique.

### Tarefa

Vamos criar uma nova função que podemos usar para navegar no nosso aplicativo:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

**Entendendo esta função de navegação:**
- **Atualiza** a URL do navegador para o novo caminho usando `history.pushState`
- **Adiciona** uma nova entrada na pilha de histórico do navegador para suporte adequado aos botões de voltar/avançar
- **Dispara** a função `updateRoute()` para exibir o template correspondente
- **Mantém** a experiência de aplicativo de página única sem recarregar a página

Este método primeiro atualiza a URL atual com base no caminho fornecido e, em seguida, atualiza o template. A propriedade `window.location.origin` retorna a raiz da URL, permitindo reconstruir uma URL completa a partir de um caminho fornecido.

Agora que temos essa função, podemos resolver o problema que temos quando um caminho não corresponde a nenhuma rota definida. Vamos modificar a função `updateRoute` adicionando um fallback para uma das rotas existentes caso não consigamos encontrar uma correspondência.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Pontos-chave a lembrar:**
- **Verifica** se existe uma rota para o caminho atual
- **Redireciona** para a página de login quando uma rota inválida é acessada
- **Fornece** um mecanismo de fallback que evita navegação quebrada
- **Garante** que os usuários sempre vejam uma tela válida, mesmo com URLs incorretas

Se uma rota não puder ser encontrada, agora redirecionaremos para a página de `login`.

Agora vamos criar uma função para obter a URL quando um link for clicado e evitar o comportamento padrão do navegador ao clicar no link:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

**Analisando este manipulador de cliques:**
- **Evita** o comportamento padrão do navegador ao clicar no link usando `preventDefault()`
- **Extrai** a URL de destino do elemento de link clicado
- **Chama** nossa função de navegação personalizada em vez de recarregar a página
- **Mantém** a experiência fluida de um aplicativo de página única

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

**O que essa vinculação onclick realiza:**
- **Conecta** cada link ao nosso sistema de navegação personalizado
- **Passa** o evento de clique para nossa função `onLinkClick` para processamento
- **Habilita** uma navegação fluida sem recarregar a página
- **Mantém** a estrutura de URL adequada que os usuários podem salvar ou compartilhar

O atributo [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) vincula o evento de `click` ao código JavaScript, aqui a chamada para a função `navigate()`.

Tente clicar nesses links, agora você deve conseguir navegar entre as diferentes telas do seu aplicativo.

✅ O método `history.pushState` faz parte do padrão HTML5 e é implementado em [todos os navegadores modernos](https://caniuse.com/?search=pushState). Se você estiver desenvolvendo um aplicativo web para navegadores mais antigos, há um truque que você pode usar no lugar dessa API: usando um [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) antes do caminho, você pode implementar um roteamento que funciona com navegação de âncoras regulares e não recarrega a página, já que seu propósito era criar links internos dentro de uma página.

## Fazendo os Botões de Voltar e Avançar Funcionarem

Os botões de voltar e avançar são fundamentais para a navegação na web, assim como os controladores de missão da NASA podem revisar estados anteriores do sistema durante missões espaciais. Os usuários esperam que esses botões funcionem, e quando não funcionam, isso quebra a experiência esperada de navegação.

Nosso aplicativo de página única precisa de configuração adicional para suportar isso. O navegador mantém uma pilha de histórico (que temos adicionado com `history.pushState`), mas quando os usuários navegam por esse histórico, nosso aplicativo precisa responder atualizando o conteúdo exibido de forma correspondente.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant App
    participant Template
    
    User->>Browser: Clicks "Login" link
    Browser->>App: onclick event triggered
    App->>App: preventDefault() & navigate('/dashboard')
    App->>Browser: history.pushState('/dashboard')
    Browser->>Browser: URL updates to /dashboard
    App->>App: updateRoute() called
    App->>Template: Find & clone dashboard template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display dashboard screen
    
    Note over User,Template: User clicks browser back button
    
    User->>Browser: Clicks back button
    Browser->>Browser: History moves back to /login
    Browser->>App: popstate event fired
    App->>App: updateRoute() called automatically
    App->>Template: Find & clone login template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display login screen
```

**Pontos principais de interação:**
- **Ações do usuário** disparam navegação por cliques ou botões do navegador
- **O aplicativo intercepta** cliques em links para evitar recarregamentos de página
- **A API de Histórico** gerencia mudanças de URL e a pilha de histórico do navegador
- **Templates** fornecem a estrutura de conteúdo para cada tela
- **Listeners de eventos** garantem que o aplicativo responda a todos os tipos de navegação

Usar o `history.pushState` cria novas entradas no histórico de navegação do navegador. Você pode verificar isso segurando o *botão de voltar* do seu navegador; ele deve exibir algo como isto:

![Captura de tela do histórico de navegação](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.br.png)

Se você tentar clicar no botão de voltar algumas vezes, verá que a URL atual muda e o histórico é atualizado, mas o mesmo template continua sendo exibido.

Isso acontece porque o aplicativo não sabe que precisamos chamar `updateRoute()` toda vez que o histórico muda. Se você der uma olhada na [documentação do `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), verá que, se o estado mudar - ou seja, se formos para uma URL diferente - o evento [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) é acionado. Usaremos isso para corrigir o problema.

### Tarefa

Para garantir que o template exibido seja atualizado quando o histórico do navegador mudar, vamos anexar uma nova função que chama `updateRoute()`. Faremos isso no final do nosso arquivo `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

**Entendendo esta integração com o histórico:**
- **Escuta** eventos `popstate` que ocorrem quando os usuários navegam com os botões do navegador
- **Usa** uma função arrow para uma sintaxe concisa do manipulador de eventos
- **Chama** `updateRoute()` automaticamente sempre que o estado do histórico muda
- **Inicializa** o aplicativo chamando `updateRoute()` quando a página é carregada pela primeira vez
- **Garante** que o template correto seja exibido, independentemente de como os usuários navegam

> 💡 **Dica Pro**: Usamos uma [função arrow](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aqui para declarar nosso manipulador de eventos `popstate` pela concisão, mas uma função regular funcionaria da mesma forma.

Aqui está um vídeo de revisão sobre funções arrow:

[![Funções Arrow](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funções Arrow")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre funções arrow.

Agora tente usar os botões de voltar e avançar do seu navegador e verifique se a rota exibida é atualizada corretamente desta vez.

---

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:

**Descrição:** Melhore o aplicativo bancário implementando tratamento de erros e um template de página 404 para rotas inválidas, melhorando a experiência do usuário ao navegar para páginas inexistentes.

**Prompt:** Crie um novo template HTML com o id "not-found" que exiba uma página de erro 404 amigável com estilo. Em seguida, modifique a lógica de roteamento em JavaScript para mostrar este template quando os usuários navegarem para URLs inválidas, e adicione um botão "Ir para Home" que navegue de volta para a página de login.

Saiba mais sobre o [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

Adicione um novo template e rota para uma terceira página que mostre os créditos deste aplicativo.

**Objetivos do desafio:**
- **Crie** um novo template HTML com estrutura de conteúdo apropriada
- **Adicione** a nova rota ao objeto de configuração de rotas
- **Inclua** links de navegação para e da página de créditos
- **Teste** se toda a navegação funciona corretamente com o histórico do navegador

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/42)

## Revisão e Autoestudo

O roteamento é uma das partes surpreendentemente complicadas do desenvolvimento web, especialmente à medida que a web se move de comportamentos de atualização de página para atualizações de Aplicativos de Página Única. Leia um pouco sobre [como o serviço Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) lida com roteamento. Você consegue explicar por que algumas das decisões descritas nesse documento são necessárias?

**Recursos adicionais de aprendizado:**
- **Explore** como frameworks populares como React Router e Vue Router implementam roteamento no lado do cliente
- **Pesquise** as diferenças entre roteamento baseado em hash e roteamento com API de histórico
- **Aprenda** sobre renderização no lado do servidor (SSR) e como isso afeta as estratégias de roteamento
- **Investigue** como Aplicativos Web Progressivos (PWAs) lidam com roteamento e navegação

## Tarefa

[Melhore o roteamento](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.