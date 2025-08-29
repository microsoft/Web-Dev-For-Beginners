<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2326d04e194a10aa760b51f5e5a1f61d",
  "translation_date": "2025-08-29T16:10:17+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "pt"
}
-->
# Projeto de Extensão de Navegador Parte 1: Tudo sobre Navegadores

![Esboço do navegador](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.pt.jpg)  
> Esboço por [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/23)

### Introdução

Extensões de navegador adicionam funcionalidades extras a um navegador. Mas antes de criar uma, é importante aprender um pouco sobre como os navegadores funcionam.

### Sobre o navegador

Nesta série de lições, vais aprender a criar uma extensão de navegador que funcionará nos navegadores Chrome, Firefox e Edge. Nesta parte, vais descobrir como os navegadores funcionam e estruturar os elementos da extensão de navegador.

Mas o que é exatamente um navegador? É uma aplicação de software que permite a um utilizador final aceder a conteúdos de um servidor e exibi-los em páginas web.

✅ Um pouco de história: o primeiro navegador chamava-se 'WorldWideWeb' e foi criado por Sir Timothy Berners-Lee em 1990.

![navegadores antigos](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.pt.jpg)  
> Alguns navegadores antigos, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Quando um utilizador se conecta à internet usando um endereço URL (Uniform Resource Locator), geralmente através do protocolo Hypertext Transfer Protocol com um endereço `http` ou `https`, o navegador comunica-se com um servidor web e obtém uma página web.

Neste ponto, o motor de renderização do navegador exibe a página no dispositivo do utilizador, que pode ser um telemóvel, computador de secretária ou portátil.

Os navegadores também têm a capacidade de armazenar conteúdo em cache para que não seja necessário recuperá-lo do servidor sempre. Podem registar o histórico de navegação de um utilizador, armazenar 'cookies', que são pequenos pedaços de dados que contêm informações usadas para guardar a atividade do utilizador, entre outras funcionalidades.

Algo muito importante a lembrar sobre os navegadores é que eles não são todos iguais! Cada navegador tem os seus pontos fortes e fracos, e um programador web profissional precisa de entender como fazer com que as páginas web funcionem bem em diferentes navegadores. Isso inclui lidar com ecrãs pequenos, como os de telemóveis, bem como com utilizadores que estão offline.

Um site muito útil que deves marcar como favorito no navegador que preferires usar é o [caniuse.com](https://www.caniuse.com). Quando estiveres a criar páginas web, é muito útil usar as listas de tecnologias suportadas do caniuse para melhor atender os teus utilizadores.

✅ Como podes saber quais navegadores são mais populares entre os utilizadores do teu site? Verifica as tuas análises - podes instalar vários pacotes de análise como parte do teu processo de desenvolvimento web, e eles dir-te-ão quais navegadores são mais usados pelos utilizadores.

## Extensões de navegador

Por que motivo quererias criar uma extensão de navegador? É algo prático para anexar ao teu navegador quando precisas de acesso rápido a tarefas que costumas repetir. Por exemplo, se precisas frequentemente de verificar cores nas várias páginas web que visitas, podes instalar uma extensão de navegador para selecionar cores. Se tens dificuldade em lembrar-te de palavras-passe, podes usar uma extensão de navegador para gestão de palavras-passe.

As extensões de navegador também são divertidas de desenvolver. Geralmente, gerem um número limitado de tarefas que executam bem.

✅ Quais são as tuas extensões de navegador favoritas? Que tarefas realizam?

### Instalar extensões

Antes de começares a criar, dá uma olhada no processo de construção e implementação de uma extensão de navegador. Embora cada navegador varie um pouco na forma como gerem esta tarefa, o processo é semelhante no Chrome e Firefox a este exemplo no Edge:

![captura de ecrã do navegador Edge mostrando a página edge://extensions aberta e o menu de definições aberto](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.pt.png)

> Nota: Certifica-te de que ativaste o modo de programador e permitiste extensões de outras lojas.

Essencialmente, o processo será:

- cria a tua extensão usando `npm run build`  
- navega no navegador até ao painel de extensões usando o botão "Definições e mais" (o ícone `...`) no canto superior direito  
- se for uma nova instalação, escolhe `load unpacked` para carregar uma nova extensão a partir da sua pasta de construção (no nosso caso é `/dist`)  
- ou, clica em `reload` se estiveres a recarregar uma extensão já instalada  

✅ Estas instruções referem-se a extensões que crias tu mesmo; para instalar extensões que foram lançadas na loja de extensões do navegador associado a cada navegador, deves navegar até essas [lojas](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) e instalar a extensão da tua escolha.

### Começa agora

Vais criar uma extensão de navegador que exibe a pegada de carbono da tua região, mostrando o consumo de energia da tua região e a fonte dessa energia. A extensão terá um formulário que recolhe uma chave de API para que possas aceder à API do CO2 Signal.

**Vais precisar de:**

- [uma chave de API](https://www.co2signal.com/); insere o teu email na caixa desta página e será enviada uma para ti  
- o [código da tua região](http://api.electricitymap.org/v3/zones) correspondente ao [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, uso 'US-NEISO').  
- o [código inicial](../../../../5-browser-extension/start). Faz o download da pasta `start`; vais completar o código nesta pasta.  
- [NPM](https://www.npmjs.com) - NPM é uma ferramenta de gestão de pacotes; instala-a localmente e os pacotes listados no teu ficheiro `package.json` serão instalados para uso nos teus recursos web  

✅ Aprende mais sobre gestão de pacotes neste [excelente módulo do Learn](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Tira um momento para explorar a base de código:

dist  
    -|manifest.json (definições padrão aqui)  
    -|index.html (marcação HTML do front-end aqui)  
    -|background.js (JS de fundo aqui)  
    -|main.js (JS compilado)  
src  
    -|index.js (o teu código JS vai aqui)  

✅ Assim que tiveres a tua chave de API e o código da região prontos, guarda-os numa nota para uso futuro.

### Cria o HTML para a extensão

Esta extensão tem duas vistas. Uma para recolher a chave de API e o código da região:

![captura de ecrã da extensão concluída aberta num navegador, exibindo um formulário com campos para o nome da região e a chave de API.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.pt.png)

E a segunda para exibir o consumo de carbono da região:

![captura de ecrã da extensão concluída exibindo valores para o consumo de carbono e a percentagem de combustíveis fósseis para a região US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.pt.png)

Vamos começar por criar o HTML para o formulário e estilizar com CSS.

Na pasta `/dist`, vais criar um formulário e uma área de resultados. No ficheiro `index.html`, preenche a área do formulário delineada:

```HTML
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
Este é o formulário onde as tuas informações guardadas serão inseridas e armazenadas no armazenamento local.

Em seguida, cria a área de resultados; abaixo da última tag do formulário, adiciona algumas divs:

```HTML
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
Neste ponto, podes tentar uma construção. Certifica-te de instalar as dependências do pacote desta extensão:

```
npm install
```  

Este comando usará o npm, o Node Package Manager, para instalar o webpack para o processo de construção da tua extensão. O webpack é um empacotador que lida com a compilação do código. Podes ver o resultado deste processo olhando para `/dist/main.js` - verás que o código foi empacotado.

Por agora, a extensão deve ser construída e, se a implementares no Edge como uma extensão, verás um formulário exibido de forma organizada.

Parabéns, deste os primeiros passos para criar uma extensão de navegador. Nas próximas lições, vais torná-la mais funcional e útil.

---

## 🚀 Desafio

Dá uma olhada numa loja de extensões de navegador e instala uma no teu navegador. Podes examinar os seus ficheiros de formas interessantes. O que descobres?

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/24)

## Revisão e Autoestudo

Nesta lição aprendeste um pouco sobre a história do navegador web; aproveita esta oportunidade para aprender sobre como os inventores da World Wide Web imaginaram o seu uso, lendo mais sobre a sua história. Alguns sites úteis incluem:

[A História dos Navegadores Web](https://www.mozilla.org/firefox/browsers/browser-history/)

[História da Web](https://webfoundation.org/about/vision/history-of-the-web/)

[Uma entrevista com Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Tarefa

[Redefine o estilo da tua extensão](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.