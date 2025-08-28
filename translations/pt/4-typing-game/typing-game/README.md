<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-24T13:50:45+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "pt"
}
-->
# Criar um jogo usando eventos

## Questionário pré-aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/21)

## Programação orientada a eventos

Ao criar uma aplicação baseada em navegador, fornecemos uma interface gráfica (GUI) para o utilizador interagir com o que construímos. A forma mais comum de interagir com o navegador é através de cliques e digitação em vários elementos. O desafio que enfrentamos como programadores é que não sabemos quando o utilizador vai realizar essas operações!

[Programação orientada a eventos](https://en.wikipedia.org/wiki/Event-driven_programming) é o nome dado ao tipo de programação que precisamos fazer para criar a nossa GUI. Se analisarmos esta frase, vemos que a palavra principal aqui é **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), segundo Merriam-Webster, é definido como "algo que acontece". Isso descreve perfeitamente a nossa situação. Sabemos que algo vai acontecer e queremos executar algum código em resposta, mas não sabemos quando isso ocorrerá.

A forma como marcamos uma seção de código que queremos executar é criando uma função. Quando pensamos em [programação procedural](https://en.wikipedia.org/wiki/Procedural_programming), as funções são chamadas numa ordem específica. O mesmo acontece na programação orientada a eventos. A diferença está em **como** as funções serão chamadas.

Para lidar com eventos (cliques em botões, digitação, etc.), registamos **event listeners**. Um event listener é uma função que "ouve" um evento ocorrer e é executada em resposta. Os event listeners podem atualizar a interface, fazer chamadas ao servidor ou realizar qualquer outra ação necessária em resposta à interação do utilizador. Adicionamos um event listener usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) e fornecendo uma função para executar.

> **NOTE:** Vale a pena destacar que existem várias formas de criar event listeners. Pode-se usar funções anónimas ou criar funções nomeadas. Também existem atalhos, como definir a propriedade `click` ou usar `addEventListener`. No nosso exercício, vamos focar-nos em `addEventListener` e funções anónimas, pois é provavelmente a técnica mais comum usada por programadores web. É também a mais flexível, já que `addEventListener` funciona para todos os eventos, e o nome do evento pode ser fornecido como parâmetro.

### Eventos comuns

Existem [dezenas de eventos](https://developer.mozilla.org/docs/Web/Events) disponíveis para ouvir ao criar uma aplicação. Basicamente, qualquer ação que o utilizador realiza numa página gera um evento, o que lhe dá muito poder para garantir que o utilizador tenha a experiência desejada. Felizmente, normalmente só precisará de um pequeno conjunto de eventos. Aqui estão alguns dos mais comuns (incluindo os dois que usaremos ao criar o nosso jogo):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): O utilizador clicou em algo, normalmente um botão ou hiperligação
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): O utilizador clicou com o botão direito do rato
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): O utilizador destacou algum texto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): O utilizador inseriu algum texto

## Criar o jogo

Vamos criar um jogo para explorar como os eventos funcionam em JavaScript. O nosso jogo vai testar a habilidade de digitação do jogador, que é uma das competências mais subestimadas que todos os programadores deveriam ter. Devíamos todos praticar a nossa digitação! O fluxo geral do jogo será assim:

- O jogador clica no botão de início e é apresentado com uma citação para digitar
- O jogador digita a citação o mais rápido que conseguir numa caixa de texto
  - À medida que cada palavra é concluída, a próxima é destacada
  - Se o jogador cometer um erro, a caixa de texto fica vermelha
  - Quando o jogador completa a citação, uma mensagem de sucesso é exibida com o tempo decorrido

Vamos construir o nosso jogo e aprender sobre eventos!

### Estrutura de ficheiros

Vamos precisar de três ficheiros no total: **index.html**, **script.js** e **style.css**. Vamos começar por configurá-los para facilitar o nosso trabalho.

- Crie uma nova pasta para o seu trabalho abrindo uma consola ou janela de terminal e executando o seguinte comando:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Abra o Visual Studio Code

```bash
code .
```

- Adicione três ficheiros à pasta no Visual Studio Code com os seguintes nomes:
  - index.html
  - script.js
  - style.css

## Criar a interface do utilizador

Se analisarmos os requisitos, sabemos que vamos precisar de alguns elementos na nossa página HTML. Isto é como uma receita, onde precisamos de alguns ingredientes:

- Um local para exibir a citação que o utilizador deve digitar
- Um local para exibir mensagens, como uma mensagem de sucesso
- Uma caixa de texto para digitar
- Um botão de início

Cada um desses elementos precisará de IDs para que possamos trabalhar com eles no nosso JavaScript. Também adicionaremos referências aos ficheiros CSS e JavaScript que vamos criar.

Crie um novo ficheiro chamado **index.html**. Adicione o seguinte HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Lançar a aplicação

É sempre melhor desenvolver iterativamente para ver como as coisas estão a ficar. Vamos lançar a nossa aplicação. Há uma extensão maravilhosa para o Visual Studio Code chamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) que irá hospedar a sua aplicação localmente e atualizar o navegador cada vez que guardar.

- Instale [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) seguindo o link e clicando em **Instalar**
  - O navegador irá pedir para abrir o Visual Studio Code, e depois o Visual Studio Code pedirá para realizar a instalação
  - Reinicie o Visual Studio Code se solicitado
- Uma vez instalado, no Visual Studio Code, clique em Ctrl-Shift-P (ou Cmd-Shift-P) para abrir o painel de comandos
- Digite **Live Server: Open with Live Server**
  - O Live Server começará a hospedar a sua aplicação
- Abra um navegador e navegue para **https://localhost:5500**
- Agora deverá ver a página que criou!

Vamos adicionar alguma funcionalidade.

## Adicionar o CSS

Com o nosso HTML criado, vamos adicionar o CSS para o estilo principal. Precisamos destacar a palavra que o jogador deve digitar e colorir a caixa de texto se o que foi digitado estiver incorreto. Faremos isso com duas classes.

Crie um novo ficheiro chamado **style.css** e adicione a seguinte sintaxe.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Quando se trata de CSS, pode organizar a sua página como preferir. Dedique algum tempo para tornar a página mais apelativa:

- Escolha uma fonte diferente
- Adicione cores aos cabeçalhos
- Redimensione os elementos

## JavaScript

Com a nossa interface criada, é hora de focar no JavaScript que fornecerá a lógica. Vamos dividir isso em alguns passos:

- [Criar as constantes](../../../../4-typing-game/typing-game)
- [Event listener para iniciar o jogo](../../../../4-typing-game/typing-game)
- [Event listener para digitação](../../../../4-typing-game/typing-game)

Mas primeiro, crie um novo ficheiro chamado **script.js**.

### Criar as constantes

Vamos precisar de alguns itens para facilitar a programação. Novamente, semelhante a uma receita, aqui está o que vamos precisar:

- Array com a lista de todas as citações
- Array vazio para armazenar todas as palavras da citação atual
- Espaço para armazenar o índice da palavra que o jogador está a digitar
- O momento em que o jogador clicou em iniciar

Também vamos querer referências aos elementos da interface:

- A caixa de texto (**typed-value**)
- A exibição da citação (**quote**)
- A mensagem (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Adicione mais citações ao seu jogo

> **NOTE:** Podemos recuperar os elementos sempre que quisermos no código usando `document.getElementById`. Como vamos referir-nos a esses elementos regularmente, vamos evitar erros com literais de string usando constantes. Frameworks como [Vue.js](https://vuejs.org/) ou [React](https://reactjs.org/) podem ajudar a gerir melhor a centralização do seu código.

Dedique um minuto para assistir a um vídeo sobre o uso de `const`, `let` e `var`.

[![Tipos de variáveis](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Tipos de variáveis")

> 🎥 Clique na imagem acima para ver um vídeo sobre variáveis.

### Adicionar lógica de início

Para começar o jogo, o jogador clicará em iniciar. Claro, não sabemos quando ele vai clicar em iniciar. É aqui que entra um [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Um event listener permitirá ouvir algo acontecer (um evento) e executar código em resposta. No nosso caso, queremos executar código quando o utilizador clicar em iniciar.

Quando o utilizador clicar em **iniciar**, precisamos selecionar uma citação, configurar a interface do utilizador e configurar o rastreamento da palavra atual e do tempo. Abaixo está o JavaScript que precisa adicionar; discutimos isso logo após o bloco de código.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Vamos analisar o código!

- Configurar o rastreamento de palavras
  - Usar [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) e [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) permite selecionar aleatoriamente uma citação do array `quotes`
  - Convertemos a `quote` num array de `words` para podermos rastrear a palavra que o jogador está a digitar
  - `wordIndex` é definido como 0, já que o jogador começará na primeira palavra
- Configurar a interface
  - Criar um array de `spanWords`, que contém cada palavra dentro de um elemento `span`
    - Isso permitirá destacar a palavra na exibição
  - `join` o array para criar uma string que podemos usar para atualizar o `innerHTML` no `quoteElement`
    - Isso exibirá a citação para o jogador
  - Definir o `className` do primeiro elemento `span` como `highlight` para destacá-lo em amarelo
  - Limpar o `messageElement` definindo `innerText` como `''`
- Configurar a caixa de texto
  - Limpar o `value` atual no `typedValueElement`
  - Definir o `focus` para `typedValueElement`
- Iniciar o temporizador chamando `getTime`

### Adicionar lógica de digitação

À medida que o jogador digita, um evento `input` será gerado. Este event listener verificará se o jogador está a digitar a palavra corretamente e lidará com o estado atual do jogo. Voltando ao **script.js**, adicione o seguinte código ao final. Vamos analisá-lo depois.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Vamos analisar o código! Começamos por obter a palavra atual e o valor que o jogador digitou até agora. Depois temos uma lógica em cascata, onde verificamos se a citação está completa, a palavra está completa, a palavra está correta ou (finalmente), se há um erro.

- A citação está completa, indicada por `typedValue` ser igual a `currentWord` e `wordIndex` ser igual a um a menos que o `length` de `words`
  - Calcular `elapsedTime` subtraindo `startTime` do tempo atual
  - Dividir `elapsedTime` por 1.000 para converter de milissegundos para segundos
  - Exibir uma mensagem de sucesso
- A palavra está completa, indicada por `typedValue` terminar com um espaço (o fim de uma palavra) e `typedValue` ser igual a `currentWord`
  - Definir `value` em `typedElement` como `''` para permitir que a próxima palavra seja digitada
  - Incrementar `wordIndex` para avançar para a próxima palavra
  - Percorrer todos os `childNodes` de `quoteElement` para definir `className` como `''` para reverter para a exibição padrão
  - Definir `className` da palavra atual como `highlight` para marcá-la como a próxima palavra a digitar
- A palavra está atualmente digitada corretamente (mas não completa), indicada por `currentWord` começar com `typedValue`
  - Garantir que `typedValueElement` seja exibido como padrão limpando `className`
- Se chegarmos até aqui, há um erro
  - Definir `className` em `typedValueElement` como `error`

## Testar a aplicação

Chegou ao fim! O último passo é garantir que a nossa aplicação funciona. Experimente! Não se preocupe se houver erros; **todos os programadores** têm erros. Examine as mensagens e depure conforme necessário.

Clique em **iniciar** e comece a digitar! Deve parecer um pouco com a animação que vimos antes.

![Animação do jogo em ação](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Desafio

Adicione mais funcionalidades:

- Desative o event listener de `input` ao concluir e reative-o quando o botão for clicado
- Desative a caixa de texto quando o jogador completar a citação
- Exiba uma caixa de diálogo modal com a mensagem de sucesso
- Armazene pontuações altas usando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/22)

## Revisão e Autoestudo

Leia sobre [todos os eventos disponíveis](https://developer.mozilla.org/docs/Web/Events) para o programador através do navegador web e considere os cenários em que utilizaria cada um deles.

## Tarefa

[Crie um novo jogo de teclado](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.