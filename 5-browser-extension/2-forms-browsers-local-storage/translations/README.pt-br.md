# Projeto Extensão de Navegador Parte 2: Chamar um API, usar Armazenamento Local

## Quiz Pré-Aula

[Quiz Pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Introdução

Nessa aula, você vai chamar uma API submetendo o forms da extensão do seu navegador e mostrar os resultado na sua extensão do navegador. Além disso, você vai aprender como armazenar dados no armazenamento local do seu navagador para usos futuros.

✅ Siga os segmentos numerados nos arquivos apropriados para saber onde colocar o seu código.

### Configurar os elementos a serem manipulados na extensão:

Até agora você fez o HTML para as `<div>` de forms e resultados para a extensão do seu navegador. A partir de agora, você vai parecisar trabalhar no `/src/index.js` e construir sua extensão por partes. Baseie-se na [última aula](../../1-about-browsers/translations/README.pt.md) para configurar seu projeto e o processo de build.

No seu arquivo `index.js`, comece criando algumas variáveis ´const´ para armazenar os valores associados a diferentes campos:

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

Todos esses campos são refenciados por suas classes css, conforme você configurou no HTML na aula anterior.

### Adicione Listeners

Depois, adicione listeners no forms e no botão de limpar que reseta o forms, para que se um usuário submeter o forms ou clicar no botão de reset, algo vai acontecer, e adicione a chamada para inicializar o aplicativo no final do arquivo:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```
✅ Observe a forma mais curta usada para "escutar" por uma submissão ou um evento de clique, e como o evento é passado para handleSubmite ou funções de reset. Você consegue escrever o equivate dessa forma de uma maneira mais longa? Qual você prefere?

### Constru a função init() e a função reset():

Agora você vai construir a função que inicializa a extensão, que é chamada de init():

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
Nessa função, há algumas lógicas interessantes. Lendo ela, você consegue enxergar o que acontece?

- duas `const` são feitas para checar se o usuário armazenou uma APIKey e um código de região no armazenamento local.
- se alguns deles for nula, mostre o form mudando a sua estilização para mostrar como 'block'
- esconda os resultas, carregando, e o clearBtn e defina qualquer texto de erro para uma string vazia
- se existe uma chave e uma região, começe uma rotina para:
  - chamar a API para pegar os dados de uso de carbono
  - esconder a area de resultados
  - esconder o forms
  - mostrar o botão de reset

Antes de prosseguirmos, é útil aprender sobre um conceito muito importante disponível nos navegadores: [LocalStorage/Armazenamento Local](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage é uma forma útil de armazenar strings no navegador como um par de `chave-valor`. Esse tipo de armazenamento web pode ser manipulado pelo JavaScript para gerenciar dados no navegador. LocalStorage não expira, enquanto SessionStorage, outro tipo de armazenamento web, é limpado quando o navegador é fechado. Esses tipos variados de armazenamentos tem seus prós e contras.

> Nota - a extensão do seu navegador tem seu próprio armazenamento local; a janela principal do navegador é uma instância diferente and se comporta separadamente.

Você definiu sua APIKey para ter um valor do tipo string, por exemplo, e você pode ver que está definida no Edge "inspecionado" uma página web (você pode clicar com o botão direito para inspecionar) e indo na aba Applications/Aplicações para ver o armazenamento.

![Painel de armazenamento local](../images/localstorage.png)

✅ Pense em situações onde você não gostaria de armazenar alguns dados no LocalStorage. No geral, colocar API Keys no LocalStorage é uma má ideia! Consegue ver o porquê? No nosso caso, já que o nosso app é puramente para aprendizado e não será enviado para uma loja de aplicativos, nós vamos usar esse método.

Note que você usa a Web API para manipular o LocalStorage, usando tanto o `getItem()`, `setItem()` ou `removeItem()`. É amplamente suportado entre os navegadores.

Antes de construir a função `displayCarbonUsage()` a qual é chamada em `init()`, vamos construir a funcionalidade para lidar com o envio do form inicial.

### Lidar com o envio do form

Crie uma funcção chamada `handleSubmit` que pega um evento `(e)` como um argumento. Interrompa a propagação do evento (nesse caso, nós queremos que o navegador não atualize) e chame uma nova função, `setUpUser`, passando nos argumentos `apiKey.value` e `region.value`. Dessa forma, você usa dois valores que são trazidos através do form inicial quando os campos apropriados são populados/preenchidos.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Refresque sua memória - o HTML que você fez na última tarefa possui dois campos de input cujo `values` são coletados atraǘes da `const` que você fez no topo do arquivo, e ambos são `required`, fazendo com que o navegador impeça o usuário de colocar valores nulos.

### Configurar o usuário

Seguindo para a função `setUpUser`, aqui é onde você define os valores do armazenamento local para apiKey e regionName. Adicione uma nova função:

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
Essa função define uma mensagem de carregamento para mostrar enquanto a API é chamada. A essa altura, você criou a função mais importante dessa extensão.

### Mostrar Uso de Carbono

Finalmente, é de consultar(query) sua API!

Antes de prosseguirmos, nós devemos discutir APIs. APIs, ou [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), são elementos críticos da caixa de ferramenta de um desenvolvedor web. Elas fornecem formas padronizadas para programas interagirem e conversarem entre si. Por exemplo, se você está construindo um website que necessite consultar um banco de dados, alguém já pode ter criado uma API para você usar. Apesar de existirem muitos tipos de APIs, uma das mais populares é o [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/). 

✅ O termo 'REST' significa 'Representational State Transfer'(Estado de Transferência Representacional) e e recursos usando URLs de várias configurações para buscar dados. Faça uma pequena pesquisa sobre os vários tipos de APIs disponíveis para desenvolvedores. Qual forma mais te agrada?

Há coisas importantes de notar sobre essa função. Primeiramente, no a palavra [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Escrever suas funções de forma que elas rodem de maneira não-síncronas significa que elas esperam por uma ação ser completada, como dados sendo retornados, antes de continuar.

Aqui está um vídeo rápido sobre `async`:

[![Async and Await for managing promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await for managing promises")

> 🎥 Clique na imagem acima para acessar um vídeo sobre async/await.

Crie uma nova função para consultar dados da API CO2Signal:

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

Essa é uma função grande. O que está acontecendo aqui?

- seguindo as melhores práticas, você usa a palavra `async` para fazer essa função se comportar de maneira assíncrona. A função contém um bloco `try/catch` que vai retornar uma promise quando a API retornar os dados. Já que você não tem controle sobre a velocidade em que a API vai responder (pode até não responder!), você precisa lidar com essa incerteza chamando ela de forma assíncrona.
- você está consultando a API co2signal para coletar os dados da sua região, usando sua API Key. Para usar essa chave, você precisa usar um tipo de autenticação nos parâmetros do seu cabeçalho.
- uma vez que a API responder, você designa diversos elementos do tipo de dados da resposta para partes da sua tela que você definiu para mostrar esses dados.
- se tiver um erro, ou se não tiver nenhum resultado, você mostra uma mensagem de erro.

✅ Usar padrões de programação assíncrona é uma outra ferramenta muito útil para se tar na sua caixa de ferramentas. Leia [sobre as diversas formas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) que você pode configurar esse tipo de código.

Parabéns! Se você construir suas extensão (`npm run build`) e atualizar a mesma no seu painel de extensão, você tem uma extensão funcionando. A única parte que não está funcionando é o ícone, e você vai consertar isso na próxima tarefa.

---

## 🚀 Desafio

Nós discutimos diversos tipos de APIs até agora nas aulas. Escolha uma API web e pesquise mais a fundo sobre o que ela oferece. Por exemplo, olha as APIs disponíveis dentro dos navegadores como a [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). O que faz uma API ser boa na sua opinião?

## Quiz Pós-Aula

[Quiz pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Revisão e Auto Estudo

Você aprendeu sobre LocalStorage e APIs nessa aula, ambos muito úteis para desenvolvedores web profissionais. Você consegue pensar em como essas duas coisas trabalham juntas: Pense sobre como você arquitetaria um web site que armazenaria items para ser usado por uma API.

## Tarefa

[Adote uma API](assignment.pt-br.md)
