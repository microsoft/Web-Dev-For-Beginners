<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-22T23:16:30+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "br"
}
-->
# Projeto de Extensão de Navegador Parte 3: Aprenda sobre Tarefas em Segundo Plano e Desempenho

Já se perguntou o que faz algumas extensões de navegador parecerem rápidas e responsivas enquanto outras parecem lentas? O segredo está no que acontece nos bastidores. Enquanto os usuários clicam na interface da sua extensão, há um mundo de processos em segundo plano gerenciando silenciosamente a busca de dados, atualizações de ícones e recursos do sistema.

Esta é nossa última lição na série de extensões de navegador, e vamos fazer seu rastreador de pegada de carbono funcionar perfeitamente. Você adicionará atualizações dinâmicas de ícones e aprenderá a identificar problemas de desempenho antes que se tornem problemas reais. É como ajustar um carro de corrida - pequenas otimizações podem fazer uma enorme diferença no funcionamento de tudo.

Quando terminarmos, você terá uma extensão refinada e entenderá os princípios de desempenho que separam bons aplicativos web dos excelentes. Vamos mergulhar no mundo da otimização de navegadores.

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/27)

### Introdução

Nas nossas lições anteriores, você construiu um formulário, conectou-o a uma API e lidou com a busca de dados assíncronos. Sua extensão está tomando forma muito bem.

Agora precisamos adicionar os toques finais - como fazer o ícone da extensão mudar de cor com base nos dados de carbono. Isso me lembra como a NASA teve que otimizar cada sistema na espaçonave Apollo. Eles não podiam se dar ao luxo de desperdiçar ciclos ou memória porque vidas dependiam do desempenho. Embora nossa extensão de navegador não seja tão crítica, os mesmos princípios se aplicam - código eficiente cria melhores experiências para os usuários.

## Noções Básicas de Desempenho na Web

Quando seu código roda de forma eficiente, as pessoas podem realmente *sentir* a diferença. Você conhece aquele momento em que uma página carrega instantaneamente ou uma animação flui suavemente? Isso é o bom desempenho em ação.

Desempenho não é apenas sobre velocidade - é sobre criar experiências na web que pareçam naturais em vez de desajeitadas e frustrantes. Nos primórdios da computação, Grace Hopper mantinha um nanosegundo (um pedaço de fio com cerca de 30 cm de comprimento) em sua mesa para mostrar o quão longe a luz viaja em um bilionésimo de segundo. Era sua maneira de explicar por que cada microssegundo importa na computação. Vamos explorar as ferramentas de detetive que ajudam você a descobrir o que está deixando as coisas mais lentas.

> "O desempenho de um site é sobre duas coisas: quão rápido a página carrega e quão rápido o código nela roda." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

O tema de como tornar seus sites incrivelmente rápidos em todos os tipos de dispositivos, para todos os tipos de usuários, em todas as situações, é, sem surpresa, vasto. Aqui estão alguns pontos a serem lembrados enquanto você constrói um projeto web padrão ou uma extensão de navegador.

O primeiro passo para otimizar seu site é entender o que realmente está acontecendo nos bastidores. Felizmente, seu navegador vem com poderosas ferramentas de detetive embutidas.

Para abrir as Ferramentas de Desenvolvedor no Edge, clique nos três pontos no canto superior direito, depois vá para Mais Ferramentas > Ferramentas de Desenvolvedor. Ou use o atalho de teclado: `Ctrl` + `Shift` + `I` no Windows ou `Option` + `Command` + `I` no Mac. Uma vez lá, clique na aba de Desempenho - é aqui que você fará sua investigação.

**Aqui está seu kit de ferramentas de detetive de desempenho:**
- **Abra** as Ferramentas de Desenvolvedor (você usará isso constantemente como desenvolvedor!)
- **Vá** para a aba de Desempenho - pense nela como o rastreador de fitness do seu aplicativo web
- **Aperte** o botão de Gravar e veja sua página em ação
- **Estude** os resultados para identificar o que está deixando as coisas mais lentas

Vamos testar isso. Abra um site (Microsoft.com funciona bem para isso) e clique no botão 'Gravar'. Agora atualize a página e veja o profiler capturar tudo o que acontece. Quando você parar a gravação, verá um detalhamento detalhado de como o navegador 'script', 'renderiza' e 'pinta' o site. Isso me lembra como o controle da missão monitora cada sistema durante o lançamento de um foguete - você obtém dados em tempo real sobre exatamente o que está acontecendo e quando.

![Profiler do Edge](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.br.png)

✅ A [Documentação da Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) tem muitos mais detalhes se você quiser se aprofundar.

> Dica profissional: Limpe o cache do seu navegador antes de testar para ver como seu site se comporta para visitantes de primeira viagem - geralmente é bem diferente de visitas repetidas!

Selecione elementos da linha do tempo do perfil para ampliar os eventos que acontecem enquanto sua página carrega.

Obtenha um instantâneo do desempenho da sua página selecionando uma parte da linha do tempo do perfil e olhando para o painel de resumo:

![Instantâneo do profiler do Edge](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.br.png)

Verifique o painel de Log de Eventos para ver se algum evento demorou mais de 15 ms:

![Log de eventos do Edge](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.br.png)

✅ Conheça seu profiler! Abra as ferramentas de desenvolvedor neste site e veja se há algum gargalo. Qual é o ativo que carrega mais devagar? O mais rápido?

## O que Procurar ao Fazer o Perfil

Executar o profiler é apenas o começo - a verdadeira habilidade está em saber o que aqueles gráficos coloridos realmente estão dizendo. Não se preocupe, você vai pegar o jeito de interpretá-los. Desenvolvedores experientes aprenderam a identificar os sinais de alerta antes que se tornem problemas graves.

Vamos falar sobre os suspeitos de sempre - os vilões do desempenho que tendem a se infiltrar nos projetos web. Assim como Marie Curie teve que monitorar cuidadosamente os níveis de radiação em seu laboratório, precisamos ficar atentos a certos padrões que indicam problemas surgindo. Detectá-los cedo vai salvar você (e seus usuários) de muita frustração.

**Tamanhos de ativos**: Os sites têm ficado cada vez mais "pesados" ao longo dos anos, e muito desse peso extra vem de imagens. É como se estivéssemos enchendo cada vez mais nossas malas digitais.

✅ Confira o [Internet Archive](https://httparchive.org/reports/page-weight) para ver como os tamanhos de páginas cresceram ao longo do tempo - é bem revelador.

**Aqui está como manter seus ativos otimizados:**
- **Comprime** essas imagens! Formatos modernos como WebP podem reduzir drasticamente os tamanhos dos arquivos
- **Serve** o tamanho certo de imagem para cada dispositivo - não há necessidade de enviar imagens enormes de desktop para celulares
- **Minifica** seu CSS e JavaScript - cada byte conta
- **Usa** carregamento preguiçoso para que as imagens só sejam baixadas quando os usuários realmente rolarem até elas

**Percursos no DOM**: O navegador precisa construir seu Modelo de Objeto de Documento com base no código que você escreve, então é do interesse de um bom desempenho de página manter suas tags mínimas, usando e estilizando apenas o que a página precisa. Nesse ponto, o excesso de CSS associado a uma página pode ser otimizado; estilos que precisam ser usados apenas em uma página não precisam ser incluídos na folha de estilo principal, por exemplo.

**Estratégias-chave para otimização do DOM:**
- **Minimiza** o número de elementos HTML e níveis de aninhamento
- **Remove** regras de CSS não utilizadas e consolida folhas de estilo de forma eficiente
- **Organiza** o CSS para carregar apenas o necessário para cada página
- **Estrutura** o HTML semanticamente para melhor análise pelo navegador

**JavaScript**: Todo desenvolvedor de JavaScript deve ficar atento a scripts que bloqueiam a renderização e que precisam ser carregados antes que o restante do DOM possa ser percorrido e pintado no navegador. Considere usar `defer` com seus scripts inline (como é feito no módulo Terrarium).

**Técnicas modernas de otimização de JavaScript:**
- **Usa** o atributo `defer` para carregar scripts após a análise do DOM
- **Implementa** divisão de código para carregar apenas o JavaScript necessário
- **Aplica** carregamento preguiçoso para funcionalidades não críticas
- **Minimiza** o uso de bibliotecas e frameworks pesados quando possível

✅ Teste alguns sites em um [site de teste de velocidade](https://www.webpagetest.org/) para aprender mais sobre as verificações comuns feitas para determinar o desempenho do site.

Agora que você tem uma ideia de como o navegador renderiza os ativos que você envia para ele, vamos olhar para as últimas coisas que você precisa fazer para completar sua extensão:

### Criar uma função para calcular a cor

Agora vamos criar uma função que transforma dados numéricos em cores significativas. Pense nisso como um sistema de semáforo - verde para energia limpa, vermelho para alta intensidade de carbono.

Essa função pegará os dados de CO2 da nossa API e determinará qual cor melhor representa o impacto ambiental. É semelhante a como os cientistas usam codificação por cores em mapas de calor para visualizar padrões complexos de dados - desde temperaturas oceânicas até formação de estrelas. Vamos adicionar isso a `/src/index.js`, logo após aquelas variáveis `const` que configuramos anteriormente:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Vamos detalhar essa função inteligente:**
- **Configura** dois arrays - um para os níveis de CO2, outro para cores (verde = limpo, marrom = sujo!)
- **Encontra** a correspondência mais próxima ao nosso valor real de CO2 usando uma ordenação inteligente de arrays
- **Pega** a cor correspondente usando o método findIndex()
- **Envia** uma mensagem para o script de segundo plano do Chrome com a cor escolhida
- **Usa** literais de template (aqueles acentos graves) para uma formatação de string mais limpa
- **Mantém** tudo organizado com declarações const

A [API chrome.runtime](https://developer.chrome.com/extensions/runtime) é como o sistema nervoso da sua extensão - ela gerencia toda a comunicação e tarefas nos bastidores:

> "Use a API chrome.runtime para recuperar a página de segundo plano, retornar detalhes sobre o manifesto e ouvir e responder a eventos no ciclo de vida do aplicativo ou extensão. Você também pode usar essa API para converter o caminho relativo de URLs em URLs totalmente qualificados."

**Por que a API Chrome Runtime é tão útil:**
- **Permite** que diferentes partes da sua extensão se comuniquem
- **Gerencia** o trabalho em segundo plano sem congelar a interface do usuário
- **Controla** os eventos do ciclo de vida da sua extensão
- **Facilita** a troca de mensagens entre scripts

✅ Se você está desenvolvendo esta extensão de navegador para o Edge, pode se surpreender ao saber que está usando uma API do Chrome. As versões mais recentes do navegador Edge rodam no motor de navegador Chromium, então você pode aproveitar essas ferramentas.

> **Dica profissional**: Se você quiser fazer o perfil de uma extensão de navegador, abra as ferramentas de desenvolvedor dentro da própria extensão, já que ela é uma instância separada do navegador. Isso dá acesso a métricas de desempenho específicas da extensão.

### Definir uma cor padrão para o ícone

Antes de começarmos a buscar dados reais, vamos dar à nossa extensão um ponto de partida. Ninguém gosta de olhar para um ícone vazio ou com aparência quebrada. Vamos começar com uma cor verde para que os usuários saibam que a extensão está funcionando desde o momento em que a instalam.

Na sua função `init()`, vamos configurar esse ícone verde padrão:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**O que essa inicialização realiza:**
- **Define** uma cor verde neutra como estado padrão
- **Fornece** feedback visual imediato quando a extensão é carregada
- **Estabelece** o padrão de comunicação com o script de segundo plano
- **Garante** que os usuários vejam uma extensão funcional antes que os dados sejam carregados

### Chamar a função, executar a chamada

Agora vamos conectar tudo para que, quando novos dados de CO2 chegarem, seu ícone seja atualizado automaticamente com a cor certa. É como conectar o circuito final em um dispositivo eletrônico - de repente, todos os componentes individuais funcionam como um sistema.

Adicione esta linha logo após obter os dados de CO2 da API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Essa integração realiza:**
- **Conecta** o fluxo de dados da API com o sistema de indicador visual
- **Dispara** atualizações de ícones automaticamente quando novos dados chegam
- **Garante** feedback visual em tempo real com base na intensidade de carbono atual
- **Mantém** a separação de responsabilidades entre busca de dados e lógica de exibição

E finalmente, em `/dist/background.js`, adicione o ouvinte para essas chamadas de ação em segundo plano:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**O que esse script de segundo plano faz:**
- **Escuta** mensagens do seu script principal (como uma recepcionista atendendo chamadas)
- **Processa** essas solicitações 'updateIcon' para alterar o ícone da barra de ferramentas
- **Cria** novos ícones dinamicamente usando a API Canvas
- **Desenha** um simples círculo colorido que mostra a intensidade de carbono atual
- **Atualiza** sua barra de ferramentas do navegador com o ícone novo
- **Usa** OffscreenCanvas para desempenho suave (sem bloqueio de interface)

✅ Você aprenderá mais sobre a API Canvas nas [lições do Jogo Espacial](../../6-space-game/2-drawing-to-canvas/README.md).

**Hora de testar sua extensão:**
- **Construa** tudo com `npm run build`
- **Recarregue** sua extensão no navegador (não se esqueça deste passo)
- **Abra** sua extensão e veja o ícone mudar de cor
- **Verifique** como ela responde a dados reais de carbono de todo o mundo

Agora você saberá de relance se é um bom momento para lavar roupa ou se deve esperar por energia mais limpa. Você acabou de construir algo genuinamente útil e aprendeu sobre desempenho de navegador ao longo do caminho.

## Desafio do Agente do GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:

**Descrição:** Melhore as capacidades de monitoramento de desempenho da extensão de navegador adicionando um recurso que rastreia e exibe os tempos de carregamento para diferentes componentes da extensão.

**Prompt:** Crie um sistema de monitoramento de desempenho para a extensão de navegador que mede e registra o tempo necessário para buscar dados de CO2 da API, calcular cores e atualizar o ícone. Adicione uma função chamada `performanceTracker` que usa a API de Desempenho para medir essas operações e exibe os resultados no console do navegador com carimbos de data/hora e métricas de duração.

Saiba mais sobre o [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio
Aqui está uma missão interessante de detetive: escolha alguns sites de código aberto que existem há anos (pense em Wikipedia, GitHub ou Stack Overflow) e mergulhe no histórico de commits deles. Você consegue identificar onde fizeram melhorias de desempenho? Quais problemas continuaram surgindo?

**Sua abordagem de investigação:**
- **Pesquise** mensagens de commit por palavras como "otimizar", "desempenho" ou "mais rápido"
- **Observe** padrões - eles continuam corrigindo os mesmos tipos de problemas?
- **Identifique** os culpados comuns que tornam os sites mais lentos
- **Compartilhe** o que você descobrir - outros desenvolvedores aprendem com exemplos do mundo real

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/28)

## Revisão e Autoestudo

Considere se inscrever em um [newsletter sobre desempenho](https://perf.email/)

Investigue algumas das maneiras como os navegadores avaliam o desempenho da web, explorando as abas de desempenho em suas ferramentas de desenvolvimento. Você encontra alguma diferença significativa?

## Tarefa

[Analise um site para desempenho](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.