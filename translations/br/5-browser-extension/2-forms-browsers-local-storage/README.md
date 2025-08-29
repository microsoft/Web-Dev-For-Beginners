<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-28T23:51:35+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "br"
}
-->
# Projeto de Extensão para Navegador Parte 2: Chamar uma API, usar Local Storage

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/25)

### Introdução

Nesta lição, você chamará uma API enviando o formulário da sua extensão para navegador e exibirá os resultados na extensão. Além disso, você aprenderá como armazenar dados no armazenamento local do navegador para referência e uso futuros.

✅ Siga os segmentos numerados nos arquivos apropriados para saber onde colocar seu código.

### Configure os elementos para manipular na extensão:

Até agora, você já criou o HTML para o formulário e o `<div>` de resultados da sua extensão para navegador. A partir de agora, você precisará trabalhar no arquivo `/src/index.js` e construir sua extensão passo a passo. Consulte a [lição anterior](../1-about-browsers/README.md) para configurar seu projeto e entender o processo de build.

Trabalhando no arquivo `index.js`, comece criando algumas variáveis `const` para armazenar os valores associados a vários campos:

```JavaScript
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

Todos esses campos são referenciados por suas classes CSS, conforme configurado no HTML na lição anterior.

### Adicione listeners

Em seguida, adicione event listeners ao formulário e ao botão de limpar que redefine o formulário, para que, se um usuário enviar o formulário ou clicar no botão de redefinição, algo aconteça. Adicione também a chamada para inicializar o aplicativo no final do arquivo:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Observe a forma abreviada usada para ouvir eventos de envio ou clique e como o evento é passado para as funções `handleSubmit` ou `reset`. Você consegue escrever o equivalente dessa forma abreviada em um formato mais longo? Qual você prefere?

### Construa as funções init() e reset():

Agora você vai construir a função que inicializa a extensão, chamada `init()`:

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

Nesta função, há uma lógica interessante. Lendo-a, você consegue entender o que acontece?

- Duas variáveis `const` são configuradas para verificar se o usuário armazenou uma APIKey e um código de região no armazenamento local.
- Se qualquer uma delas for nula, exiba o formulário alterando seu estilo para 'block'.
- Oculte os resultados, o carregamento e o botão de limpar, e defina qualquer texto de erro como uma string vazia.
- Se houver uma chave e uma região, inicie uma rotina para:
  - Chamar a API para obter dados de uso de carbono.
  - Ocultar a área de resultados.
  - Ocultar o formulário.
  - Exibir o botão de redefinição.

Antes de prosseguir, é útil aprender sobre um conceito muito importante disponível nos navegadores: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). O LocalStorage é uma maneira útil de armazenar strings no navegador como um par `chave-valor`. Esse tipo de armazenamento pode ser manipulado por JavaScript para gerenciar dados no navegador. O LocalStorage não expira, enquanto o SessionStorage, outro tipo de armazenamento, é limpo quando o navegador é fechado. Cada tipo de armazenamento tem prós e contras em seu uso.

> Nota - sua extensão para navegador tem seu próprio armazenamento local; a janela principal do navegador é uma instância diferente e se comporta separadamente.

Você define sua APIKey para ter um valor de string, por exemplo, e pode ver que ela está configurada no Edge ao "inspecionar" uma página da web (você pode clicar com o botão direito do mouse no navegador para inspecionar) e ir para a aba Applications para ver o armazenamento.

![Painel de armazenamento local](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.br.png)

✅ Pense em situações em que você NÃO gostaria de armazenar alguns dados no LocalStorage. Em geral, colocar chaves de API no LocalStorage é uma má ideia! Consegue entender por quê? No nosso caso, como nosso aplicativo é puramente para aprendizado e não será publicado em uma loja de aplicativos, usaremos esse método.

Observe que você usa a Web API para manipular o LocalStorage, seja usando `getItem()`, `setItem()` ou `removeItem()`. É amplamente suportado em navegadores.

Antes de construir a função `displayCarbonUsage()` que é chamada em `init()`, vamos criar a funcionalidade para lidar com o envio inicial do formulário.

### Lide com o envio do formulário

Crie uma função chamada `handleSubmit` que aceita um argumento de evento `(e)`. Interrompa a propagação do evento (neste caso, queremos impedir que o navegador atualize) e chame uma nova função, `setUpUser`, passando os argumentos `apiKey.value` e `region.value`. Dessa forma, você usa os dois valores que são trazidos pelo formulário inicial quando os campos apropriados são preenchidos.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Refresque sua memória - o HTML que você configurou na última lição tem dois campos de entrada cujos `values` são capturados pelas `const` que você configurou no início do arquivo, e ambos são `required`, então o navegador impede que os usuários insiram valores nulos.

### Configure o usuário

Passando para a função `setUpUser`, aqui é onde você define os valores do armazenamento local para apiKey e regionName. Adicione uma nova função:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Essa função define uma mensagem de carregamento para exibir enquanto a API é chamada. Neste ponto, você chegou à criação da função mais importante desta extensão para navegador!

### Exiba o Uso de Carbono

Finalmente, é hora de consultar a API!

Antes de prosseguir, devemos discutir APIs. APIs, ou [Interfaces de Programação de Aplicações](https://www.webopedia.com/TERM/A/API.html), são um elemento crítico na caixa de ferramentas de um desenvolvedor web. Elas fornecem maneiras padrão para programas interagirem e se conectarem. Por exemplo, se você está criando um site que precisa consultar um banco de dados, alguém pode ter criado uma API para você usar. Embora existam muitos tipos de APIs, uma das mais populares é uma [API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ O termo 'REST' significa 'Transferência de Estado Representacional' e utiliza URLs configurados de várias maneiras para buscar dados. Faça uma pequena pesquisa sobre os vários tipos de APIs disponíveis para desenvolvedores. Qual formato mais lhe agrada?

Há coisas importantes a serem observadas sobre esta função. Primeiro, observe a palavra-chave [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Escrever suas funções para que elas sejam executadas de forma assíncrona significa que elas esperam uma ação, como o retorno de dados, ser concluída antes de continuar.

Aqui está um vídeo rápido sobre `async`:

[![Async e Await para gerenciar promessas](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async e Await para gerenciar promessas")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre async/await.

Crie uma nova função para consultar a API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Esta é uma função grande. O que está acontecendo aqui?

- Seguindo as melhores práticas, você usa a palavra-chave `async` para fazer com que esta função se comporte de forma assíncrona. A função contém um bloco `try/catch`, pois retornará uma promessa quando a API retornar dados. Como você não tem controle sobre a velocidade com que a API responderá (ela pode nem responder!), você precisa lidar com essa incerteza chamando-a de forma assíncrona.
- Você está consultando a API co2signal para obter os dados da sua região, usando sua API Key. Para usar essa chave, você precisa usar um tipo de autenticação nos parâmetros do cabeçalho.
- Assim que a API responder, você atribui vários elementos dos dados de resposta às partes da tela que você configurou para exibir esses dados.
- Se houver um erro ou se não houver resultado, você exibe uma mensagem de erro.

✅ Usar padrões de programação assíncrona é outra ferramenta muito útil na sua caixa de ferramentas. Leia [sobre as várias maneiras](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) de configurar esse tipo de código.

Parabéns! Se você construir sua extensão (`npm run build`) e atualizá-la no painel de extensões, terá uma extensão funcional! A única coisa que não está funcionando é o ícone, e você corrigirá isso na próxima lição.

---

## 🚀 Desafio

Discutimos vários tipos de API até agora nestas lições. Escolha uma API da web e pesquise em profundidade o que ela oferece. Por exemplo, dê uma olhada nas APIs disponíveis nos navegadores, como a [API de Arrastar e Soltar em HTML](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). O que, na sua opinião, faz uma API ser excelente?

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/26)

## Revisão e Autoestudo

Você aprendeu sobre LocalStorage e APIs nesta lição, ambos muito úteis para o desenvolvedor web profissional. Consegue pensar em como essas duas coisas funcionam juntas? Pense em como você arquitetaria um site que armazenaria itens para serem usados por uma API.

## Tarefa

[Adote uma API](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.