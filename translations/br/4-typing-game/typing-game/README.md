<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-26T01:07:41+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "br"
}
-->
# Criando um jogo usando eventos

## Questionário Pré-Aula

[Questionário pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Programação orientada a eventos

Ao criar uma aplicação baseada em navegador, fornecemos uma interface gráfica do usuário (GUI) para que o usuário interaja com o que construímos. A forma mais comum de interação com o navegador é clicando e digitando em vários elementos. O desafio que enfrentamos como desenvolvedores é que não sabemos quando essas operações serão realizadas!

A [programação orientada a eventos](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_eventos) é o nome do tipo de programação que precisamos fazer para criar nossa GUI. Se analisarmos essa frase, veremos que a palavra central aqui é **evento**. [Evento](https://www.merriam-webster.com/dictionary/event), de acordo com o Merriam-Webster, é definido como "algo que acontece". Isso descreve perfeitamente nossa situação. Sabemos que algo vai acontecer e queremos executar algum código em resposta, mas não sabemos quando isso ocorrerá.

A maneira como marcamos uma seção de código que queremos executar é criando uma função. Quando pensamos em [programação procedural](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_procedural), as funções são chamadas em uma ordem específica. O mesmo será verdade para a programação orientada a eventos. A diferença está em **como** as funções serão chamadas.

Para lidar com eventos (cliques de botão, digitação, etc.), registramos **ouvintes de eventos**. Um ouvinte de evento é uma função que "escuta" a ocorrência de um evento e é executada em resposta. Ouvintes de eventos podem atualizar a interface do usuário, fazer chamadas ao servidor ou realizar qualquer outra ação necessária em resposta à ação do usuário. Adicionamos um ouvinte de evento usando [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) e fornecendo uma função para executar.

> **NOTE:** Vale destacar que existem várias maneiras de criar ouvintes de eventos. Você pode usar funções anônimas ou criar funções nomeadas. Pode usar atalhos, como definir a propriedade `click`, ou usar `addEventListener`. No nosso exercício, vamos focar em `addEventListener` e funções anônimas, pois é provavelmente a técnica mais comum usada por desenvolvedores web. Também é a mais flexível, já que `addEventListener` funciona para todos os eventos, e o nome do evento pode ser fornecido como um parâmetro.

### Eventos comuns

Existem [dezenas de eventos](https://developer.mozilla.org/docs/Web/Events) disponíveis para você ouvir ao criar uma aplicação. Basicamente, qualquer coisa que um usuário faz em uma página gera um evento, o que lhe dá muito poder para garantir que eles tenham a experiência desejada. Felizmente, normalmente você precisará de apenas alguns eventos. Aqui estão alguns comuns (incluindo os dois que usaremos ao criar nosso jogo):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): O usuário clicou em algo, geralmente um botão ou link
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): O usuário clicou com o botão direito do mouse
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): O usuário destacou algum texto
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): O usuário digitou algum texto

## Criando o jogo

Vamos criar um jogo para explorar como os eventos funcionam no JavaScript. Nosso jogo vai testar a habilidade de digitação de um jogador, que é uma das habilidades mais subestimadas que todos os desenvolvedores deveriam ter. Todos nós deveríamos praticar nossa digitação! O fluxo geral do jogo será assim:

- O jogador clica no botão de início e é apresentado a uma frase para digitar
- O jogador digita a frase o mais rápido que puder em uma caixa de texto
  - À medida que cada palavra é concluída, a próxima é destacada
  - Se o jogador cometer um erro de digitação, a caixa de texto ficará vermelha
  - Quando o jogador concluir a frase, uma mensagem de sucesso será exibida com o tempo decorrido

Vamos construir nosso jogo e aprender sobre eventos!

### Estrutura de arquivos

Vamos precisar de três arquivos no total: **index.html**, **script.js** e **style.css**. Vamos começar configurando-os para facilitar nosso trabalho.

- Crie uma nova pasta para seu trabalho abrindo um console ou terminal e emitindo o seguinte comando:

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

- Adicione três arquivos à pasta no Visual Studio Code com os seguintes nomes:
  - index.html
  - script.js
  - style.css

## Criar a interface do usuário

Se analisarmos os requisitos, sabemos que vamos precisar de alguns elementos na nossa página HTML. Isso é como uma receita, onde precisamos de alguns ingredientes:

- Um lugar para exibir a frase que o usuário deve digitar
- Um lugar para exibir mensagens, como uma mensagem de sucesso
- Uma caixa de texto para digitação
- Um botão de início

Cada um desses elementos precisará de IDs para que possamos trabalhar com eles no nosso JavaScript. Também adicionaremos referências aos arquivos CSS e JavaScript que vamos criar.

Crie um novo arquivo chamado **index.html**. Adicione o seguinte HTML:

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

É sempre melhor desenvolver de forma iterativa para ver como as coisas estão ficando. Vamos lançar nossa aplicação. Há uma extensão maravilhosa para o Visual Studio Code chamada [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) que hospedará sua aplicação localmente e atualizará o navegador cada vez que você salvar.

- Instale o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) seguindo o link e clicando em **Install**
  - O navegador solicitará que você abra o Visual Studio Code, e então o Visual Studio Code solicitará que você realize a instalação
  - Reinicie o Visual Studio Code se solicitado
- Uma vez instalado, no Visual Studio Code, clique em Ctrl-Shift-P (ou Cmd-Shift-P) para abrir o painel de comandos
- Digite **Live Server: Open with Live Server**
  - O Live Server começará a hospedar sua aplicação
- Abra um navegador e navegue para **https://localhost:5500**
- Agora você deve ver a página que criou!

Vamos adicionar alguma funcionalidade.

## Adicionar o CSS

Com nosso HTML criado, vamos adicionar o CSS para o estilo principal. Precisamos destacar a palavra que o jogador deve digitar e colorir a caixa de texto se o que ele digitou estiver incorreto. Faremos isso com duas classes.

Crie um novo arquivo chamado **style.css** e adicione a seguinte sintaxe.

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

✅ Quando se trata de CSS, você pode organizar sua página como preferir. Dedique um tempo para deixar a página mais atraente:

- Escolha uma fonte diferente
- Adicione cores aos cabeçalhos
- Redimensione os itens

## JavaScript

Com nossa interface criada, é hora de focar no JavaScript que fornecerá a lógica. Vamos dividir isso em algumas etapas:

- [Criar as constantes](../../../../4-typing-game/typing-game)
- [Ouvinte de evento para iniciar o jogo](../../../../4-typing-game/typing-game)
- [Ouvinte de evento para digitação](../../../../4-typing-game/typing-game)

Mas primeiro, crie um novo arquivo chamado **script.js**.

### Adicionar as constantes

Vamos precisar de alguns itens para facilitar nossa programação. Novamente, semelhante a uma receita, aqui está o que precisaremos:

- Um array com a lista de todas as frases
- Um array vazio para armazenar todas as palavras da frase atual
- Um espaço para armazenar o índice da palavra que o jogador está digitando no momento
- O horário em que o jogador clicou em iniciar

Também vamos querer referências aos elementos da interface do usuário:

- A caixa de texto (**typed-value**)
- A exibição da frase (**quote**)
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

✅ Adicione mais frases ao seu jogo

> **NOTE:** Podemos recuperar os elementos sempre que quisermos no código usando `document.getElementById`. Como vamos nos referir a esses elementos regularmente, evitaremos erros de digitação com literais de string usando constantes. Frameworks como [Vue.js](https://vuejs.org/) ou [React](https://reactjs.org/) podem ajudar a gerenciar melhor a centralização do seu código.

Tire um minuto para assistir a um vídeo sobre o uso de `const`, `let` e `var`.

[![Tipos de variáveis](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Tipos de variáveis")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre variáveis.

### Adicionar lógica de início

Para começar o jogo, o jogador clicará em iniciar. Claro, não sabemos quando ele vai clicar em iniciar. É aqui que entra um [ouvinte de evento](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Um ouvinte de evento nos permitirá ouvir algo que ocorre (um evento) e executar código em resposta. No nosso caso, queremos executar código quando o usuário clicar em iniciar.

Quando o usuário clicar em **iniciar**, precisamos selecionar uma frase, configurar a interface do usuário e configurar o rastreamento da palavra atual e do tempo. Abaixo está o JavaScript que você precisará adicionar; discutimos isso logo após o bloco de script.

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

Vamos detalhar o código!

- Configurar o rastreamento de palavras
  - Usar [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) e [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nos permite selecionar aleatoriamente uma frase do array `quotes`
  - Convertemos a `quote` em um array de `words` para que possamos rastrear a palavra que o jogador está digitando no momento
  - `wordIndex` é definido como 0, já que o jogador começará na primeira palavra
- Configurar a interface do usuário
  - Criar um array de `spanWords`, que contém cada palavra dentro de um elemento `span`
    - Isso nos permitirá destacar a palavra na exibição
  - `join` o array para criar uma string que podemos usar para atualizar o `innerHTML` no `quoteElement`
    - Isso exibirá a frase para o jogador
  - Definir o `className` do primeiro elemento `span` como `highlight` para destacá-lo em amarelo
  - Limpar o `messageElement` definindo `innerText` como `''`
- Configurar a caixa de texto
  - Limpar o `value` atual no `typedValueElement`
  - Definir o `focus` no `typedValueElement`
- Iniciar o cronômetro chamando `getTime`

### Adicionar lógica de digitação

À medida que o jogador digita, um evento `input` será acionado. Esse ouvinte de evento verificará se o jogador está digitando a palavra corretamente e lidará com o status atual do jogo. Voltando ao **script.js**, adicione o seguinte código ao final. Vamos detalhá-lo em seguida.

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

Vamos detalhar o código! Começamos pegando a palavra atual e o valor que o jogador digitou até agora. Em seguida, temos uma lógica em cascata, onde verificamos se a frase está completa, se a palavra está completa, se a palavra está correta ou (finalmente), se há um erro.

- A frase está completa, indicada por `typedValue` ser igual a `currentWord` e `wordIndex` ser igual a um a menos que o `length` de `words`
  - Calcular `elapsedTime` subtraindo `startTime` do horário atual
  - Dividir `elapsedTime` por 1.000 para converter de milissegundos para segundos
  - Exibir uma mensagem de sucesso
- A palavra está completa, indicada por `typedValue` terminar com um espaço (o final de uma palavra) e `typedValue` ser igual a `currentWord`
  - Definir `value` em `typedElement` como `''` para permitir que a próxima palavra seja digitada
  - Incrementar `wordIndex` para passar para a próxima palavra
  - Percorrer todos os `childNodes` de `quoteElement` para definir `className` como `''` para reverter à exibição padrão
  - Definir `className` da palavra atual como `highlight` para marcá-la como a próxima palavra a ser digitada
- A palavra está sendo digitada corretamente (mas não está completa), indicada por `currentWord` começar com `typedValue`
  - Garantir que `typedValueElement` seja exibido como padrão limpando `className`
- Se chegarmos até aqui, há um erro
  - Definir `className` em `typedValueElement` como `error`

## Teste sua aplicação

Você chegou ao final! O último passo é garantir que nossa aplicação funcione. Experimente! Não se preocupe se houver erros; **todos os desenvolvedores** cometem erros. Examine as mensagens e depure conforme necessário.

Clique em **iniciar** e comece a digitar! Deve parecer um pouco com a animação que vimos antes.

![Animação do jogo em ação](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Desafio

Adicione mais funcionalidades:

- Desative o ouvinte de evento `input` ao concluir o jogo e reative-o quando o botão for clicado
- Desative a caixa de texto quando o jogador concluir a frase
- Exiba uma caixa de diálogo modal com a mensagem de sucesso
- Armazene pontuações altas usando [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Quiz Pós-Aula

[Quiz pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Revisão e Autoestudo

Leia sobre [todos os eventos disponíveis](https://developer.mozilla.org/docs/Web/Events) para o desenvolvedor via navegador web e considere os cenários em que você utilizaria cada um deles.

## Tarefa

[Crie um novo jogo de teclado](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.