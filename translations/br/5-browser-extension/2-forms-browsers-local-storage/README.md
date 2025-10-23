<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-22T23:17:06+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "br"
}
-->
# Projeto de Extensão de Navegador Parte 2: Chamar uma API, usar Armazenamento Local

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/25)

## Introdução

Lembra daquela extensão de navegador que você começou a construir? No momento, você tem um formulário bonito, mas ele é essencialmente estático. Hoje vamos dar vida a ele conectando-o a dados reais e dando-lhe memória.

Pense nos computadores de controle da missão Apollo - eles não apenas exibiam informações fixas. Eles se comunicavam constantemente com a espaçonave, atualizavam com dados de telemetria e lembravam parâmetros críticos da missão. Esse é o tipo de comportamento dinâmico que estamos construindo hoje. Sua extensão irá acessar a internet, buscar dados ambientais reais e lembrar suas configurações para a próxima vez.

A integração com APIs pode parecer complexa, mas é basicamente ensinar seu código a se comunicar com outros serviços. Seja buscando dados meteorológicos, feeds de redes sociais ou informações sobre pegada de carbono, como faremos hoje, tudo se resume a estabelecer essas conexões digitais. Também exploraremos como os navegadores podem persistir informações - semelhante a como bibliotecas usavam catálogos de fichas para lembrar onde os livros estavam.

Ao final desta aula, você terá uma extensão de navegador que busca dados reais, armazena preferências do usuário e oferece uma experiência suave. Vamos começar!

✅ Siga os segmentos numerados nos arquivos apropriados para saber onde colocar seu código.

## Configurar os elementos para manipular na extensão

Antes que seu JavaScript possa manipular a interface, ele precisa de referências a elementos HTML específicos. Pense nisso como um telescópio que precisa ser apontado para estrelas específicas - antes de Galileu estudar as luas de Júpiter, ele teve que localizar e focar em Júpiter.

No seu arquivo `index.js`, criaremos variáveis `const` que capturam referências para cada elemento importante do formulário. Isso é semelhante a como os cientistas rotulam seus equipamentos - em vez de procurar por todo o laboratório cada vez, eles podem acessar diretamente o que precisam.

```javascript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

**O que este código faz:**
- **Captura** elementos do formulário usando `document.querySelector()` com seletores de classe CSS
- **Cria** referências para os campos de entrada do nome da região e da chave da API
- **Estabelece** conexões com elementos de exibição de resultados para dados de uso de carbono
- **Configura** acesso a elementos da interface do usuário, como indicadores de carregamento e mensagens de erro
- **Armazena** cada referência de elemento em uma variável `const` para fácil reutilização ao longo do código

## Adicionar ouvintes de eventos

Agora faremos sua extensão responder às ações do usuário. Ouvintes de eventos são a maneira do seu código monitorar interações do usuário. Pense neles como os operadores nas antigas centrais telefônicas - eles ouviam chamadas recebidas e conectavam os circuitos certos quando alguém queria fazer uma conexão.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Entendendo esses conceitos:**
- **Anexa** um ouvinte de envio ao formulário que é acionado quando os usuários pressionam Enter ou clicam em enviar
- **Conecta** um ouvinte de clique ao botão de limpar para redefinir o formulário
- **Passa** o objeto de evento `(e)` para funções manipuladoras para controle adicional
- **Chama** a função `init()` imediatamente para configurar o estado inicial da sua extensão

✅ Observe a sintaxe de função de seta abreviada usada aqui. Essa abordagem moderna do JavaScript é mais limpa do que as expressões de função tradicionais, mas ambas funcionam igualmente bem!

## Construir as funções de inicialização e redefinição

Vamos criar a lógica de inicialização para sua extensão. A função `init()` é como o sistema de navegação de um navio verificando seus instrumentos - ela determina o estado atual e ajusta a interface de acordo. Ela verifica se alguém já usou sua extensão antes e carrega suas configurações anteriores.

A função `reset()` oferece aos usuários um novo começo - semelhante a como os cientistas reiniciam seus instrumentos entre experimentos para garantir dados limpos.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Desmembrando o que acontece aqui:**
- **Recupera** a chave da API e a região armazenadas no armazenamento local do navegador
- **Verifica** se é um usuário de primeira viagem (sem credenciais armazenadas) ou um usuário recorrente
- **Exibe** o formulário de configuração para novos usuários e oculta outros elementos da interface
- **Carrega** automaticamente os dados salvos para usuários recorrentes e exibe a opção de redefinição
- **Gerencia** o estado da interface do usuário com base nos dados disponíveis

**Conceitos-chave sobre Armazenamento Local:**
- **Persiste** dados entre sessões do navegador (diferente do armazenamento de sessão)
- **Armazena** dados como pares chave-valor usando `getItem()` e `setItem()`
- **Retorna** `null` quando não existem dados para uma chave específica
- **Oferece** uma maneira simples de lembrar preferências e configurações do usuário

> 💡 **Entendendo o Armazenamento do Navegador**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) é como dar à sua extensão uma memória persistente. Considere como a antiga Biblioteca de Alexandria armazenava pergaminhos - as informações permaneciam disponíveis mesmo quando os estudiosos saíam e voltavam.
>
> **Características principais:**
> - **Persiste** dados mesmo após fechar o navegador
> - **Sobrevive** a reinicializações do computador e falhas do navegador
> - **Oferece** espaço de armazenamento substancial para preferências do usuário
> - **Proporciona** acesso instantâneo sem atrasos de rede

> **Nota Importante**: Sua extensão de navegador tem seu próprio armazenamento local isolado, separado das páginas da web regulares. Isso proporciona segurança e previne conflitos com outros sites.

Você pode visualizar seus dados armazenados abrindo as Ferramentas de Desenvolvedor do navegador (F12), navegando até a aba **Application** e expandindo a seção **Local Storage**.

![Painel de armazenamento local](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.br.png)

> ⚠️ **Consideração de Segurança**: Em aplicações de produção, armazenar chaves de API no LocalStorage apresenta riscos de segurança, já que o JavaScript pode acessar esses dados. Para fins de aprendizado, essa abordagem funciona bem, mas aplicações reais devem usar armazenamento seguro no servidor para credenciais sensíveis.

## Lidar com o envio do formulário

Agora vamos lidar com o que acontece quando alguém envia seu formulário. Por padrão, os navegadores recarregam a página ao enviar formulários, mas vamos interceptar esse comportamento para criar uma experiência mais suave.

Essa abordagem espelha como o controle da missão lida com comunicações de espaçonaves - em vez de reiniciar todo o sistema para cada transmissão, eles mantêm a operação contínua enquanto processam novas informações.

Crie uma função que capture o evento de envio do formulário e extraia as entradas do usuário:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**No código acima, nós:**
- **Impede** o comportamento padrão de envio do formulário que atualizaria a página
- **Extrai** valores de entrada do usuário dos campos de chave da API e região
- **Passa** os dados do formulário para a função `setUpUser()` para processamento
- **Mantém** o comportamento de aplicação de página única evitando recarregamentos

✅ Lembre-se de que os campos do formulário HTML incluem o atributo `required`, então o navegador valida automaticamente que os usuários forneçam tanto a chave da API quanto a região antes que esta função seja executada.

## Configurar preferências do usuário

A função `setUpUser` é responsável por salvar as credenciais do usuário e iniciar a primeira chamada à API. Isso cria uma transição suave da configuração para a exibição de resultados.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Passo a passo, aqui está o que acontece:**
- **Salva** a chave da API e o nome da região no armazenamento local para uso futuro
- **Exibe** um indicador de carregamento para informar aos usuários que os dados estão sendo buscados
- **Limpa** quaisquer mensagens de erro anteriores da exibição
- **Revela** o botão de limpar para que os usuários possam redefinir suas configurações mais tarde
- **Inicia** a chamada à API para buscar dados reais de uso de carbono

Esta função cria uma experiência de usuário perfeita ao gerenciar tanto a persistência de dados quanto as atualizações da interface do usuário em uma ação coordenada.

## Exibir dados de uso de carbono

Agora vamos conectar sua extensão a fontes de dados externas por meio de APIs. Isso transforma sua extensão de uma ferramenta independente em algo que pode acessar informações em tempo real de toda a internet.

**Entendendo APIs**

[APIs](https://www.webopedia.com/TERM/A/API.html) são como diferentes aplicativos se comunicam entre si. Pense nelas como o sistema de telégrafo que conectava cidades distantes no século XIX - os operadores enviavam solicitações para estações distantes e recebiam respostas com as informações solicitadas. Toda vez que você verifica redes sociais, faz uma pergunta a um assistente de voz ou usa um aplicativo de entrega, as APIs estão facilitando essas trocas de dados.

**Conceitos-chave sobre APIs REST:**
- **REST** significa 'Transferência de Estado Representacional'
- **Usa** métodos HTTP padrão (GET, POST, PUT, DELETE) para interagir com dados
- **Retorna** dados em formatos previsíveis, geralmente JSON
- **Fornece** endpoints consistentes baseados em URL para diferentes tipos de solicitações

✅ A [API CO2 Signal](https://www.co2signal.com/) que usaremos fornece dados em tempo real sobre a intensidade de carbono das redes elétricas em todo o mundo. Isso ajuda os usuários a entender o impacto ambiental do uso de eletricidade!

> 💡 **Entendendo o JavaScript Assíncrono**: A palavra-chave [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) permite que seu código lide com várias operações simultaneamente. Quando você solicita dados de um servidor, não quer que toda a extensão congele - isso seria como o controle de tráfego aéreo parar todas as operações enquanto espera por uma resposta de um avião.
>
> **Benefícios principais:**
> - **Mantém** a responsividade da extensão enquanto os dados são carregados
> - **Permite** que outros códigos continuem executando durante solicitações de rede
> - **Melhora** a legibilidade do código em comparação com padrões tradicionais de callback
> - **Habilita** tratamento de erros elegante para problemas de rede

Aqui está um vídeo rápido sobre `async`:

[![Async e Await para gerenciar promessas](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async e Await para gerenciar promessas")

> 🎥 Clique na imagem acima para um vídeo sobre async/await.

Crie a função para buscar e exibir dados de uso de carbono:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Desmembrando o que acontece aqui:**
- **Usa** a moderna API `fetch()` em vez de bibliotecas externas como Axios para um código mais limpo e sem dependências
- **Implementa** verificação de erros adequada com `response.ok` para capturar falhas na API cedo
- **Lida** com operações assíncronas usando `async/await` para um fluxo de código mais legível
- **Autentica** com a API CO2 Signal usando o cabeçalho `auth-token`
- **Analisa** dados de resposta JSON e extrai informações de intensidade de carbono
- **Atualiza** múltiplos elementos da interface com dados ambientais formatados
- **Fornece** mensagens de erro amigáveis ao usuário quando as chamadas à API falham

**Conceitos modernos de JavaScript demonstrados:**
- **Literais de template** com a sintaxe `${}` para formatação de strings limpa
- **Tratamento de erros** com blocos try/catch para aplicações robustas
- **Padrão async/await** para lidar graciosamente com solicitações de rede
- **Desestruturação de objetos** para extrair dados específicos de respostas da API
- **Encadeamento de métodos** para múltiplas manipulações de DOM

✅ Esta função demonstra vários conceitos importantes de desenvolvimento web - comunicação com servidores externos, autenticação, processamento de dados, atualização de interfaces e gerenciamento de erros de forma elegante. Estas são habilidades fundamentais que os desenvolvedores profissionais usam regularmente.

🎉 **O que você conquistou:** Você criou uma extensão de navegador que:
- **Conecta-se** à internet e recupera dados ambientais reais
- **Persiste** configurações do usuário entre sessões
- **Lida** com erros de forma elegante em vez de travar
- **Proporciona** uma experiência de usuário suave e profissional

Teste seu trabalho executando `npm run build` e atualizando sua extensão no navegador. Agora você tem um rastreador funcional de pegada de carbono. A próxima aula adicionará funcionalidade dinâmica de ícones para completar a extensão.

---

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:

**Descrição:** Melhore a extensão de navegador adicionando melhorias no tratamento de erros e recursos de experiência do usuário. Este desafio ajudará você a praticar o trabalho com APIs, armazenamento local e manipulação de DOM usando padrões modernos de JavaScript.

**Prompt:** Crie uma versão aprimorada da função displayCarbonUsage que inclua: 1) Um mecanismo de tentativa de nova chamada para falhas na API com recuo exponencial, 2) Validação de entrada para o código da região antes de fazer a chamada à API, 3) Uma animação de carregamento com indicadores de progresso, 4) Cache de respostas da API no localStorage com marcações de expiração (cache por 30 minutos), e 5) Um recurso para exibir dados históricos de chamadas anteriores à API. Além disso, adicione comentários JSDoc no estilo TypeScript para documentar todos os parâmetros da função e tipos de retorno.

Saiba mais sobre o [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

Amplie sua compreensão sobre APIs explorando a riqueza de APIs baseadas em navegador disponíveis para desenvolvimento web. Escolha uma dessas APIs de navegador e construa uma pequena demonstração:

- [API de Geolocalização](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Obtenha a localização atual do usuário
- [API de Notificação](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Envie notificações na área de trabalho
- [API de Arrastar e Soltar em HTML](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Crie interfaces interativas de arrastar
- [API de Armazenamento na Web](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Técnicas avançadas de armazenamento local
- [API Fetch](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Alternativa moderna ao XMLHttpRequest

**Perguntas de pesquisa para considerar:**
- Que problemas do mundo real esta API resolve?
- Como a API lida com erros e casos extremos?
- Quais considerações de segurança existem ao usar esta API?
- Quão amplamente suportada é esta API em diferentes navegadores?

Após sua pesquisa, identifique quais características tornam uma API amigável para desenvolvedores e confiável.

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/26)

## Revisão & Autoestudo
Você aprendeu sobre LocalStorage e APIs nesta lição, ambos muito úteis para o desenvolvedor web profissional. Consegue pensar em como essas duas coisas funcionam juntas? Pense em como você arquitetaria um site que armazenaria itens para serem usados por uma API.

## Tarefa

[Adote uma API](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.