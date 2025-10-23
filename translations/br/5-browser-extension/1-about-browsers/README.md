<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "33a875c522f237a2026e4653240dfc07",
  "translation_date": "2025-10-22T23:17:42+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "br"
}
-->
# Projeto de Extensão de Navegador Parte 1: Tudo sobre Navegadores

![Esboço de navegador](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.br.jpg)
> Esboço por [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/23)

### Introdução

Extensões de navegador são miniaplicativos que melhoram sua experiência de navegação na web. Assim como a visão original de Tim Berners-Lee de uma web interativa, as extensões ampliam as capacidades do navegador além da simples visualização de documentos. De gerenciadores de senhas que mantêm suas contas seguras a seletores de cores que ajudam designers a capturar tons perfeitos, as extensões resolvem desafios cotidianos de navegação.

Antes de construir sua primeira extensão, vamos entender como os navegadores funcionam. Assim como Alexander Graham Bell precisou entender a transmissão de som antes de inventar o telefone, conhecer os fundamentos dos navegadores ajudará você a criar extensões que se integrem perfeitamente aos sistemas existentes.

Ao final desta lição, você entenderá a arquitetura dos navegadores e terá começado a construir sua primeira extensão.

## Entendendo os Navegadores Web

Um navegador web é essencialmente um sofisticado intérprete de documentos. Quando você digita "google.com" na barra de endereços, o navegador realiza uma série complexa de operações - solicitando conteúdo de servidores ao redor do mundo, depois analisando e renderizando esse código nas páginas interativas que você vê.

Esse processo reflete como o primeiro navegador web, WorldWideWeb, foi projetado por Tim Berners-Lee em 1990 para tornar documentos com hiperlinks acessíveis a todos.

✅ **Um pouco de história**: O primeiro navegador foi chamado 'WorldWideWeb' e foi criado por Sir Timothy Berners-Lee em 1990.

![navegadores antigos](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.br.jpg)
> Alguns navegadores antigos, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

### Como os Navegadores Processam Conteúdo Web

O processo entre digitar um URL e visualizar uma página envolve várias etapas coordenadas que acontecem em segundos:

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant DNS
    participant Server
    
    User->>Browser: Types URL and presses Enter
    Browser->>DNS: Looks up server IP address
    DNS->>Browser: Returns IP address
    Browser->>Server: Requests web page content
    Server->>Browser: Sends HTML, CSS, and JavaScript
    Browser->>User: Renders complete web page
```

**Aqui está o que esse processo realiza:**
- **Traduz** o URL legível para humanos em um endereço IP de servidor por meio de uma consulta DNS
- **Estabelece** uma conexão segura com o servidor web usando os protocolos HTTP ou HTTPS
- **Solicita** o conteúdo específico da página web ao servidor
- **Recebe** marcação HTML, estilos CSS e código JavaScript do servidor
- **Renderiza** todo o conteúdo na página web interativa que você vê

### Recursos Principais dos Navegadores

Os navegadores modernos oferecem inúmeros recursos que os desenvolvedores de extensões podem aproveitar:

| Recurso | Propósito | Oportunidades para Extensões |
|---------|-----------|-----------------------------|
| **Motor de Renderização** | Exibe HTML, CSS e JavaScript | Modificação de conteúdo, injeção de estilos |
| **Motor JavaScript** | Executa código JavaScript | Scripts personalizados, interações com APIs |
| **Armazenamento Local** | Salva dados localmente | Preferências do usuário, dados em cache |
| **Pilha de Rede** | Gerencia solicitações web | Monitoramento de solicitações, análise de dados |
| **Modelo de Segurança** | Protege os usuários contra conteúdo malicioso | Filtragem de conteúdo, melhorias de segurança |

**Entender esses recursos ajuda você a:**
- **Identificar** onde sua extensão pode agregar mais valor
- **Escolher** as APIs de navegador certas para a funcionalidade da sua extensão
- **Projetar** extensões que funcionem eficientemente com os sistemas do navegador
- **Garantir** que sua extensão siga as melhores práticas de segurança do navegador

### Considerações para Desenvolvimento Multinavegador

Diferentes navegadores implementam padrões com pequenas variações, semelhante a como diferentes linguagens de programação podem lidar com o mesmo algoritmo de maneiras diferentes. Chrome, Firefox e Safari têm características únicas que os desenvolvedores devem considerar durante o desenvolvimento de extensões.

> 💡 **Dica Pro**: Use [caniuse.com](https://www.caniuse.com) para verificar quais tecnologias web são suportadas em diferentes navegadores. Isso é essencial ao planejar os recursos da sua extensão!

**Considerações principais para o desenvolvimento de extensões:**
- **Teste** sua extensão nos navegadores Chrome, Firefox e Edge
- **Adapte-se** às diferentes APIs de extensão e formatos de manifesto dos navegadores
- **Lide** com características de desempenho e limitações variadas
- **Forneça** alternativas para recursos específicos de navegadores que podem não estar disponíveis

✅ **Insight Analítico**: Você pode determinar quais navegadores seus usuários preferem instalando pacotes de análise em seus projetos de desenvolvimento web. Esses dados ajudam você a priorizar quais navegadores suportar primeiro.

## Entendendo Extensões de Navegador

Extensões de navegador resolvem desafios comuns de navegação na web ao adicionar funcionalidades diretamente à interface do navegador. Em vez de exigir aplicativos separados ou fluxos de trabalho complexos, as extensões fornecem acesso imediato a ferramentas e recursos.

Esse conceito reflete como os pioneiros da computação, como Douglas Engelbart, imaginaram aumentar as capacidades humanas com tecnologia - as extensões ampliam a funcionalidade básica do navegador.

**Categorias populares de extensões e seus benefícios:**
- **Ferramentas de Produtividade**: Gerenciadores de tarefas, aplicativos de anotações e rastreadores de tempo que ajudam você a se organizar
- **Melhorias de Segurança**: Gerenciadores de senhas, bloqueadores de anúncios e ferramentas de privacidade que protegem seus dados
- **Ferramentas para Desenvolvedores**: Formatadores de código, seletores de cores e utilitários de depuração que facilitam o desenvolvimento
- **Aprimoramento de Conteúdo**: Modos de leitura, baixadores de vídeo e ferramentas de captura de tela que melhoram sua experiência na web

✅ **Pergunta para Reflexão**: Quais são suas extensões de navegador favoritas? Quais tarefas específicas elas realizam e como melhoram sua experiência de navegação?

## Instalando e Gerenciando Extensões

Entender o processo de instalação de extensões ajuda você a antecipar a experiência do usuário ao instalar sua extensão. O processo de instalação é padronizado em navegadores modernos, com pequenas variações no design da interface.

![captura de tela do navegador Edge mostrando a página edge://extensions aberta e o menu de configurações aberto](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.br.png)

> **Importante**: Certifique-se de ativar o modo desenvolvedor e permitir extensões de outras lojas ao testar suas próprias extensões.

### Processo de Instalação de Extensão em Desenvolvimento

Ao desenvolver e testar suas próprias extensões, siga este fluxo de trabalho:

```bash
# Step 1: Build your extension
npm run build
```

**O que este comando realiza:**
- **Compila** seu código-fonte em arquivos prontos para o navegador
- **Agrupa** módulos JavaScript em pacotes otimizados
- **Gera** os arquivos finais da extensão na pasta `/dist`
- **Prepara** sua extensão para instalação e testes

**Etapa 2: Navegue até Extensões do Navegador**
1. **Abra** a página de gerenciamento de extensões do seu navegador
2. **Clique** no botão "Configurações e mais" (ícone `...`) no canto superior direito
3. **Selecione** "Extensões" no menu suspenso

**Etapa 3: Carregue Sua Extensão**
- **Para novas instalações**: Escolha `carregar sem compactação` e selecione sua pasta `/dist`
- **Para atualizações**: Clique em `recarregar` ao lado da extensão já instalada
- **Para testes**: Ative o "Modo desenvolvedor" para acessar recursos adicionais de depuração

### Instalação de Extensão em Produção

> ✅ **Nota**: Essas instruções de desenvolvimento são especificamente para extensões que você mesmo constrói. Para instalar extensões publicadas, visite as lojas oficiais de extensões de navegador, como a [loja de complementos do Microsoft Edge](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home).

**Entendendo a diferença:**
- **Instalações de desenvolvimento** permitem testar extensões não publicadas durante o desenvolvimento
- **Instalações de loja** fornecem extensões publicadas e verificadas com atualizações automáticas
- **Instalação manual** permite instalar extensões fora das lojas oficiais (requer modo desenvolvedor)

## Construindo Sua Extensão de Pegada de Carbono

Vamos criar uma extensão de navegador que exibe a pegada de carbono do uso de energia da sua região. Este projeto demonstra conceitos essenciais de desenvolvimento de extensões enquanto cria uma ferramenta prática para conscientização ambiental.

Essa abordagem segue o princípio de "aprender fazendo", que tem se mostrado eficaz desde as teorias educacionais de John Dewey - combinando habilidades técnicas com aplicações reais significativas.

### Requisitos do Projeto

Antes de começar o desenvolvimento, vamos reunir os recursos e dependências necessários:

**Acesso à API Necessário:**
- **[Chave da API CO2 Signal](https://www.co2signal.com/)**: Insira seu endereço de e-mail para receber sua chave de API gratuita
- **[Código da região](http://api.electricitymap.org/v3/zones)**: Encontre o código da sua região usando o [Electricity Map](https://www.electricitymap.org/map) (por exemplo, Boston usa 'US-NEISO')

**Ferramentas de Desenvolvimento:**
- **[Node.js e NPM](https://www.npmjs.com)**: Ferramenta de gerenciamento de pacotes para instalar dependências do projeto
- **[Código inicial](../../../../5-browser-extension/start)**: Baixe a pasta `start` para começar o desenvolvimento

✅ **Saiba Mais**: Aprimore suas habilidades de gerenciamento de pacotes com este [módulo abrangente do Learn](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

### Entendendo a Estrutura do Projeto

Entender a estrutura do projeto ajuda a organizar o trabalho de desenvolvimento de forma eficiente. Assim como a Biblioteca de Alexandria foi organizada para facilitar a recuperação de conhecimento, uma base de código bem estruturada torna o desenvolvimento mais eficiente:

```
project-root/
├── dist/                    # Built extension files
│   ├── manifest.json        # Extension configuration
│   ├── index.html           # User interface markup
│   ├── background.js        # Background script functionality
│   └── main.js              # Compiled JavaScript bundle
└── src/                     # Source development files
    └── index.js             # Your main JavaScript code
```

**Dividindo o que cada arquivo realiza:**
- **`manifest.json`**: **Define** metadados da extensão, permissões e pontos de entrada
- **`index.html`**: **Cria** a interface do usuário que aparece quando os usuários clicam na sua extensão
- **`background.js`**: **Gerencia** tarefas em segundo plano e ouvintes de eventos do navegador
- **`main.js`**: **Contém** o JavaScript final agrupado após o processo de build
- **`src/index.js`**: **Abriga** seu código principal de desenvolvimento que é compilado em `main.js`

> 💡 **Dica de Organização**: Armazene sua chave de API e código da região em uma nota segura para fácil referência durante o desenvolvimento. Você precisará desses valores para testar a funcionalidade da sua extensão.

✅ **Nota de Segurança**: Nunca comprometa chaves de API ou credenciais sensíveis em seu repositório de código. Mostraremos como lidar com isso de forma segura nas próximas etapas.

## Criando a Interface da Extensão

Agora vamos construir os componentes da interface do usuário. A extensão usa uma abordagem de duas telas: uma tela de configuração para a configuração inicial e uma tela de resultados para exibição de dados.

Isso segue o princípio de divulgação progressiva usado no design de interfaces desde os primórdios da computação - revelando informações e opções em uma sequência lógica para evitar sobrecarregar os usuários.

### Visão Geral das Telas da Extensão

**Tela de Configuração** - Configuração inicial do usuário:
![captura de tela da extensão concluída aberta em um navegador, exibindo um formulário com entradas para nome da região e chave de API.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.br.png)

**Tela de Resultados** - Exibição de dados da pegada de carbono:
![captura de tela da extensão concluída exibindo valores de uso de carbono e porcentagem de combustíveis fósseis para a região US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.br.png)

### Construindo o Formulário de Configuração

O formulário de configuração coleta dados de configuração do usuário durante o uso inicial. Uma vez configurado, essas informações persistem no armazenamento do navegador para sessões futuras.

No arquivo `/dist/index.html`, adicione esta estrutura de formulário:

```html
<form class="form-data" autocomplete="on">
    <div>
        <h2>New? Add your Information</h2>
    </div>
    <div>
        <label for="region">Region Name</label>
        <input type="text" id="region" required class="region-name" />
    </div>
    <div>
        <label for="api">Your API Key from tmrow</label>
        <input type="text" id="api" required class="api-key" />
    </div>
    <button class="search-btn">Submit</button>
</form>
```

**Aqui está o que este formulário realiza:**
- **Cria** uma estrutura de formulário semântica com rótulos e associações de entrada adequadas
- **Habilita** a funcionalidade de preenchimento automático do navegador para melhorar a experiência do usuário
- **Exige** que ambos os campos sejam preenchidos antes do envio usando o atributo `required`
- **Organiza** entradas com nomes de classe descritivos para fácil estilização e direcionamento em JavaScript
- **Fornece** instruções claras para os usuários que estão configurando a extensão pela primeira vez

### Construindo a Exibição de Resultados

Em seguida, crie a área de resultados que mostrará os dados da pegada de carbono. Adicione este HTML abaixo do formulário:

```html
<div class="result">
    <div class="loading">loading...</div>
    <div class="errors"></div>
    <div class="data"></div>
    <div class="result-container">
        <p><strong>Region: </strong><span class="my-region"></span></p>
        <p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
        <p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
    </div>
    <button class="clear-btn">Change region</button>
</div>
```

**Dividindo o que essa estrutura fornece:**
- **`loading`**: **Exibe** uma mensagem de carregamento enquanto os dados da API estão sendo buscados
- **`errors`**: **Mostra** mensagens de erro se as chamadas da API falharem ou os dados forem inválidos
- **`data`**: **Armazena** dados brutos para depuração durante o desenvolvimento
- **`result-container`**: **Apresenta** informações formatadas sobre a pegada de carbono para os usuários
- **`clear-btn`**: **Permite** que os usuários alterem sua região e reconfigurem a extensão

### Configurando o Processo de Build

Agora vamos instalar as dependências do projeto e testar o processo de build:

```bash
npm install
```

**O que este processo de instalação realiza:**
- **Baixa** o Webpack e outras dependências de desenvolvimento especificadas em `package.json`
- **Configura** a cadeia de ferramentas de build para compilar JavaScript moderno
- **Prepara** o ambiente de desenvolvimento para construção e teste de extensões
- **Habilita** recursos de agrupamento de código, otimização e compatibilidade entre navegadores

> 💡 **Insight sobre o Processo de Build**: O Webpack agrupa seu código-fonte de `/src/index.js` em `/dist/main.js`. Esse processo otimiza seu código para produção e garante compatibilidade com navegadores.

### Testando Seu Progresso

Neste ponto, você pode testar sua extensão:

1. **Execute** o comando de build para compilar seu código
2. **Carregue** a extensão no seu navegador usando o modo desenvolvedor
3. **Verifique** se o formulário é exibido corretamente e tem aparência profissional
4. **Cheque** se todos os elementos do formulário estão devidamente alinhados e funcionais

**O que você realizou:**
- **Construiu** a estrutura HTML fundamental para sua extensão
- **Criou** interfaces de configuração e resultados com marcação semântica adequada
- **Configurou** um fluxo de trabalho de desenvolvimento moderno usando ferramentas padrão da indústria
- **Preparou** a base para adicionar funcionalidade interativa em JavaScript

Você concluiu a primeira fase do desenvolvimento de extensões de navegador. Assim como os irmãos Wright precisaram entender a aerodinâmica antes de alcançar o voo, entender esses conceitos fundamentais prepara você para construir recursos interativos mais complexos na próxima lição.

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:
**Descrição:** Melhore a extensão do navegador adicionando validação de formulário e recursos de feedback ao usuário para aprimorar a experiência ao inserir chaves de API e códigos de região.

**Tarefa:** Crie funções de validação em JavaScript que verifiquem se o campo da chave de API contém pelo menos 20 caracteres e se o código de região segue o formato correto (como 'US-NEISO'). Adicione feedback visual alterando as cores das bordas dos campos de entrada para verde quando os dados forem válidos e vermelho quando forem inválidos. Também adicione um recurso de alternância para mostrar/ocultar a chave de API por motivos de segurança.

Saiba mais sobre [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

Dê uma olhada em uma loja de extensões de navegador e instale uma no seu navegador. Você pode examinar seus arquivos de maneiras interessantes. O que você descobre?

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/24)

## Revisão e Autoestudo

Nesta lição, você aprendeu um pouco sobre a história do navegador web; aproveite esta oportunidade para aprender sobre como os inventores da World Wide Web imaginaram seu uso lendo mais sobre sua história. Alguns sites úteis incluem:

[A História dos Navegadores Web](https://www.mozilla.org/firefox/browsers/browser-history/)

[História da Web](https://webfoundation.org/about/vision/history-of-the-web/)

[Uma entrevista com Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Tarefa 

[Redefina o estilo da sua extensão](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.