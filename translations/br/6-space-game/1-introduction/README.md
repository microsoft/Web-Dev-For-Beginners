<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-22T23:15:53+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "br"
}
-->
# Construa um Jogo Espacial Parte 1: Introdução

![Animação do jogo espacial mostrando a jogabilidade](../../../../6-space-game/images/pewpew.gif)

Assim como o controle de missão da NASA coordena múltiplos sistemas durante um lançamento espacial, vamos construir um jogo espacial que demonstra como diferentes partes de um programa podem trabalhar juntas de forma harmoniosa. Enquanto criamos algo que você realmente pode jogar, você aprenderá conceitos essenciais de programação que se aplicam a qualquer projeto de software.

Exploraremos duas abordagens fundamentais para organizar código: herança e composição. Esses não são apenas conceitos acadêmicos – são os mesmos padrões que impulsionam tudo, desde videogames até sistemas bancários. Também implementaremos um sistema de comunicação chamado pub/sub, que funciona como as redes de comunicação usadas em espaçonaves, permitindo que diferentes componentes compartilhem informações sem criar dependências.

Ao final desta série, você entenderá como construir aplicações que podem escalar e evoluir – seja desenvolvendo jogos, aplicações web ou qualquer outro sistema de software.

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/29)

## Herança e Composição no Desenvolvimento de Jogos

À medida que os projetos crescem em complexidade, a organização do código se torna crítica. O que começa como um script simples pode se tornar difícil de manter sem uma estrutura adequada – assim como as missões Apollo exigiam uma coordenação cuidadosa entre milhares de componentes.

Exploraremos duas abordagens fundamentais para organizar código: herança e composição. Cada uma tem vantagens distintas, e entender ambas ajuda você a escolher a abordagem certa para diferentes situações. Demonstraremos esses conceitos através do nosso jogo espacial, onde heróis, inimigos, power-ups e outros objetos devem interagir de forma eficiente.

✅ Um dos livros de programação mais famosos já escritos trata de [padrões de design](https://en.wikipedia.org/wiki/Design_Patterns).

Em qualquer jogo, você tem `objetos do jogo` – os elementos interativos que povoam o mundo do jogo. Heróis, inimigos, power-ups e efeitos visuais são todos objetos do jogo. Cada um existe em coordenadas específicas da tela usando valores `x` e `y`, semelhantes a plotar pontos em um plano cartesiano.

Apesar de suas diferenças visuais, esses objetos frequentemente compartilham comportamentos fundamentais:

- **Eles existem em algum lugar** – Cada objeto tem coordenadas x e y para que o jogo saiba onde desenhá-lo
- **Muitos podem se mover** – Heróis correm, inimigos perseguem, balas atravessam a tela
- **Eles têm um tempo de vida** – Alguns permanecem para sempre, outros (como explosões) aparecem brevemente e desaparecem
- **Eles reagem a coisas** – Quando coisas colidem, power-ups são coletados, barras de saúde são atualizadas

✅ Pense em um jogo como Pac-Man. Você consegue identificar os quatro tipos de objetos listados acima nesse jogo?

### Expressando Comportamento Através do Código

Agora que você entende os comportamentos comuns que os objetos do jogo compartilham, vamos explorar como implementar esses comportamentos em JavaScript. Você pode expressar o comportamento dos objetos através de métodos anexados a classes ou objetos individuais, e há várias abordagens para escolher.

**A Abordagem Baseada em Classes**

Classes e herança fornecem uma abordagem estruturada para organizar objetos do jogo. Como o sistema de classificação taxonômica desenvolvido por Carl Linnaeus, você começa com uma classe base contendo propriedades comuns e, em seguida, cria classes especializadas que herdam esses fundamentos enquanto adicionam capacidades específicas.

✅ Herança é um conceito importante para entender. Saiba mais no [artigo da MDN sobre herança](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Aqui está como você pode implementar objetos do jogo usando classes e herança:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Vamos analisar isso passo a passo:**
- Estamos criando um modelo básico que todo objeto do jogo pode usar
- O construtor salva onde o objeto está (`x`, `y`) e que tipo de coisa ele é
- Isso se torna a base sobre a qual todos os seus objetos do jogo serão construídos

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**No exemplo acima, nós:**
- **Estendemos** a classe GameObject para adicionar funcionalidade de movimento
- **Chamamos** o construtor pai usando `super()` para inicializar propriedades herdadas
- **Adicionamos** um método `moveTo()` que atualiza a posição do objeto

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Entendendo esses conceitos:**
- **Criamos** tipos de objetos especializados que herdam comportamentos apropriados
- **Demonstramos** como a herança permite a inclusão seletiva de recursos
- **Mostramos** que heróis podem se mover enquanto árvores permanecem estacionárias
- **Ilustramos** como a hierarquia de classes evita ações inadequadas

✅ Reserve alguns minutos para reimaginar um herói do Pac-Man (Inky, Pinky ou Blinky, por exemplo) e como ele seria escrito em JavaScript.

**A Abordagem de Composição**

A composição segue uma filosofia de design modular, semelhante à forma como engenheiros projetam espaçonaves com componentes intercambiáveis. Em vez de herdar de uma classe pai, você combina comportamentos específicos para criar objetos com exatamente a funcionalidade que precisam. Essa abordagem oferece flexibilidade sem restrições hierárquicas rígidas.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Aqui está o que este código faz:**
- **Define** um objeto base `gameObject` com propriedades de posição e tipo
- **Cria** um objeto de comportamento separado `movable` com funcionalidade de movimento
- **Separa** preocupações mantendo dados de posição e lógica de movimento independentes

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**No exemplo acima, nós:**
- **Combinamos** propriedades de objeto base com comportamento de movimento usando sintaxe de espalhamento
- **Criamos** funções fábrica que retornam objetos personalizados
- **Habilitamos** a criação flexível de objetos sem hierarquias rígidas de classes
- **Permitimos** que objetos tenham exatamente os comportamentos que precisam

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Pontos-chave para lembrar:**
- **Compõe** objetos misturando comportamentos em vez de herdá-los
- **Fornece** mais flexibilidade do que hierarquias rígidas de herança
- **Permite** que objetos tenham exatamente os recursos que precisam
- **Usa** sintaxe moderna de espalhamento do JavaScript para combinação limpa de objetos 
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Analisando o que acontece aqui:**
- **Cria** um sistema central de gerenciamento de eventos usando uma classe simples
- **Armazena** ouvintes em um objeto organizado por tipo de mensagem
- **Registra** novos ouvintes usando o método `on()`
- **Emite** mensagens para todos os ouvintes interessados usando `emit()`
- **Suporta** cargas de dados opcionais para passar informações relevantes

### Juntando Tudo: Um Exemplo Prático

Certo, vamos ver isso em ação! Vamos construir um sistema de movimento simples que mostra como o pub/sub pode ser limpo e flexível:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Aqui está o que este código faz:**
- **Define** um objeto de constantes para evitar erros de digitação nos nomes das mensagens
- **Cria** uma instância de emissor de eventos para lidar com toda a comunicação
- **Inicializa** um objeto herói na posição inicial

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**No exemplo acima, nós:**
- **Registramos** ouvintes de eventos que respondem a mensagens de movimento
- **Atualizamos** a posição do herói com base na direção do movimento
- **Adicionamos** registros no console para acompanhar as mudanças de posição do herói
- **Separamos** a lógica de movimento do manuseio de entrada

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Entendendo esses conceitos:**
- **Conecta** a entrada do teclado aos eventos do jogo sem acoplamento rígido
- **Permite** que o sistema de entrada se comunique com objetos do jogo indiretamente
- **Permite** que múltiplos sistemas respondam aos mesmos eventos de teclado
- **Facilita** a alteração de configurações de teclas ou a adição de novos métodos de entrada

> 💡 **Dica Profissional**: A beleza desse padrão é a flexibilidade! Você pode facilmente adicionar efeitos sonoros, tremores de tela ou efeitos de partículas simplesmente adicionando mais ouvintes de eventos – sem necessidade de modificar o código existente de teclado ou movimento.
> 
**Por que você vai adorar essa abordagem:**
- Adicionar novos recursos se torna super fácil – basta ouvir os eventos que interessam
- Múltiplas coisas podem reagir ao mesmo evento sem interferir umas nas outras
- Testar fica muito mais simples porque cada peça funciona de forma independente
- Quando algo quebra, você sabe exatamente onde procurar

### Por Que o Pub/Sub Escala Eficientemente

O padrão pub/sub mantém a simplicidade à medida que as aplicações crescem em complexidade. Seja gerenciando dezenas de inimigos, atualizações dinâmicas de interface ou sistemas de som, o padrão lida com o aumento de escala sem mudanças na arquitetura. Novos recursos se integram ao sistema de eventos existente sem afetar a funcionalidade estabelecida.

> ⚠️ **Erro Comum**: Não crie muitos tipos específicos de mensagens logo no início. Comece com categorias amplas e refine-as conforme as necessidades do jogo se tornem mais claras.
> 
**Melhores práticas a seguir:**
- **Agrupe** mensagens relacionadas em categorias lógicas
- **Use** nomes descritivos que indiquem claramente o que aconteceu
- **Mantenha** as cargas de mensagens simples e focadas
- **Documente** seus tipos de mensagens para colaboração em equipe

---

## Desafio do Agente do GitHub Copilot 🚀

Use o modo Agente para completar o seguinte desafio:

**Descrição:** Crie um sistema simples de objetos de jogo usando tanto herança quanto o padrão pub/sub. Você implementará um jogo básico onde diferentes objetos podem se comunicar através de eventos sem saber diretamente uns sobre os outros.

**Prompt:** Crie um sistema de jogo em JavaScript com os seguintes requisitos: 1) Crie uma classe base GameObject com coordenadas x, y e uma propriedade de tipo. 2) Crie uma classe Hero que estenda GameObject e possa se mover. 3) Crie uma classe Enemy que estenda GameObject e possa perseguir o herói. 4) Implemente uma classe EventEmitter para o padrão pub/sub. 5) Configure ouvintes de eventos para que, quando o herói se mover, inimigos próximos recebam um evento 'HERO_MOVED' e atualizem sua posição para se mover em direção ao herói. Inclua declarações console.log para mostrar a comunicação entre os objetos.

Saiba mais sobre o [modo agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

Considere como o padrão pub-sub pode melhorar a arquitetura de jogos. Identifique quais componentes devem emitir eventos e como o sistema deve responder. Projete um conceito de jogo e mapeie os padrões de comunicação entre seus componentes.

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/30)

## Revisão & Estudo Individual

Saiba mais sobre Pub/Sub [lendo sobre o assunto](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tarefa

[Crie um esboço de jogo](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.