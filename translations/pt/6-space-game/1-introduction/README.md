<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-24T12:39:45+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "pt"
}
-->
# Construir um Jogo Espacial Parte 1: Introdução

![video](../../../../6-space-game/images/pewpew.gif)

## Questionário Pré-Aula

[Questionário pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Herança e Composição no desenvolvimento de jogos

Nas lições anteriores, não havia muita necessidade de se preocupar com a arquitetura de design dos aplicativos que você criou, pois os projetos eram muito pequenos em escopo. No entanto, à medida que suas aplicações crescem em tamanho e complexidade, as decisões arquiteturais tornam-se uma preocupação maior. Existem duas abordagens principais para criar aplicações maiores em JavaScript: *composição* ou *herança*. Ambas têm prós e contras, mas vamos explicá-las no contexto de um jogo.

✅ Um dos livros mais famosos sobre programação trata de [padrões de design](https://en.wikipedia.org/wiki/Design_Patterns).

Em um jogo, você tem `objetos de jogo`, que são objetos que existem na tela. Isso significa que eles têm uma localização em um sistema de coordenadas cartesianas, caracterizada por ter uma coordenada `x` e `y`. À medida que você desenvolve um jogo, perceberá que todos os seus objetos de jogo têm uma propriedade padrão, comum a todos os jogos que você cria, ou seja, elementos que são:

- **baseados em localização** A maioria, senão todos, os elementos de jogo são baseados em localização. Isso significa que eles têm uma localização, um `x` e um `y`.
- **móveis** Estes são objetos que podem se mover para uma nova localização. Normalmente, é um herói, um monstro ou um NPC (personagem não jogável), mas não, por exemplo, um objeto estático como uma árvore.
- **autodestrutivos** Estes objetos existem apenas por um período de tempo definido antes de serem configurados para exclusão. Geralmente, isso é representado por um booleano `morto` ou `destruído`, que sinaliza ao motor do jogo que este objeto não deve mais ser renderizado.
- **tempo de espera** 'Tempo de espera' é uma propriedade típica entre objetos de curta duração. Um exemplo típico é um pedaço de texto ou efeito gráfico, como uma explosão, que deve ser visto apenas por alguns milissegundos.

✅ Pense em um jogo como Pac-Man. Consegue identificar os quatro tipos de objetos listados acima neste jogo?

### Expressando comportamento

Tudo o que descrevemos acima são comportamentos que os objetos de jogo podem ter. Então, como codificamos isso? Podemos expressar esse comportamento como métodos associados a classes ou objetos.

**Classes**

A ideia é usar `classes` em conjunto com `herança` para adicionar um determinado comportamento a uma classe.

✅ Herança é um conceito importante para entender. Saiba mais no [artigo da MDN sobre herança](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Expressado em código, um objeto de jogo pode tipicamente parecer assim:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Reserve alguns minutos para imaginar um herói do Pac-Man (Inky, Pinky ou Blinky, por exemplo) e como ele seria escrito em JavaScript.

**Composição**

Uma maneira diferente de lidar com herança de objetos é usando *Composição*. Então, os objetos expressam seu comportamento assim:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Qual padrão devo usar?**

A escolha do padrão depende de você. O JavaScript suporta ambos os paradigmas.

--

Outro padrão comum no desenvolvimento de jogos aborda o problema de lidar com a experiência do usuário e o desempenho do jogo.

## Padrão Pub/Sub

✅ Pub/Sub significa 'publicar-assinar'

Este padrão aborda a ideia de que as partes distintas da sua aplicação não devem saber umas das outras. Por quê? Isso torna muito mais fácil entender o que está acontecendo em geral se as várias partes estiverem separadas. Também facilita mudar o comportamento repentinamente, se necessário. Como conseguimos isso? Fazemos isso estabelecendo alguns conceitos:

- **mensagem**: Uma mensagem geralmente é uma string de texto acompanhada por uma carga opcional (um pedaço de dados que esclarece sobre o que é a mensagem). Uma mensagem típica em um jogo pode ser `KEY_PRESSED_ENTER`.
- **publicador**: Este elemento *publica* uma mensagem e a envia para todos os assinantes.
- **assinante**: Este elemento *ouve* mensagens específicas e realiza alguma tarefa como resultado de receber essa mensagem, como disparar um laser.

A implementação é bastante pequena em tamanho, mas é um padrão muito poderoso. Veja como pode ser implementado:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Para usar o código acima, podemos criar uma implementação muito pequena:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Acima, conectamos um evento de teclado, `ArrowLeft`, e enviamos a mensagem `HERO_MOVE_LEFT`. Ouvimos essa mensagem e movemos o `herói` como resultado. A força desse padrão é que o ouvinte de eventos e o herói não sabem um do outro. Você pode remapear o `ArrowLeft` para a tecla `A`. Além disso, seria possível fazer algo completamente diferente no `ArrowLeft` fazendo algumas edições na função `on` do eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

À medida que as coisas ficam mais complicadas com o crescimento do seu jogo, este padrão mantém a mesma complexidade e o seu código permanece limpo. É realmente recomendado adotar este padrão.

---

## 🚀 Desafio

Pense em como o padrão pub-sub pode melhorar um jogo. Quais partes devem emitir eventos e como o jogo deve reagir a eles? Agora é a sua chance de ser criativo, pensando em um novo jogo e como suas partes podem se comportar.

## Questionário Pós-Aula

[Questionário pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Revisão e Estudo Individual

Saiba mais sobre Pub/Sub [lendo sobre isso](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tarefa

[Crie um protótipo de jogo](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.