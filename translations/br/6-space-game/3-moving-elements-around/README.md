<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-25T22:12:57+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "br"
}
-->
# Construindo um Jogo Espacial Parte 3: Adicionando Movimento

## Quiz Pré-Aula

[Quiz pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Jogos não são muito divertidos até que você tenha alienígenas se movendo na tela! Neste jogo, utilizaremos dois tipos de movimentos:

- **Movimento por teclado/mouse**: quando o usuário interage com o teclado ou mouse para mover um objeto na tela.
- **Movimento induzido pelo jogo**: quando o jogo move um objeto em um determinado intervalo de tempo.

Então, como movemos coisas na tela? Tudo se resume a coordenadas cartesianas: mudamos a localização (x, y) do objeto e, em seguida, redesenhamos a tela.

Normalmente, você precisa das seguintes etapas para realizar o *movimento* na tela:

1. **Definir uma nova localização** para um objeto; isso é necessário para que o objeto pareça ter se movido.
2. **Limpar a tela**, a tela precisa ser limpa entre os desenhos. Podemos limpá-la desenhando um retângulo preenchido com uma cor de fundo.
3. **Redesenhar o objeto** na nova localização. Fazendo isso, finalmente conseguimos mover o objeto de um local para outro.

Veja como isso pode parecer em código:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Você consegue pensar em um motivo pelo qual redesenhar seu herói várias vezes por segundo pode gerar custos de desempenho? Leia sobre [alternativas para este padrão](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Manipular eventos de teclado

Você manipula eventos conectando eventos específicos ao código. Eventos de teclado são acionados em toda a janela, enquanto eventos de mouse, como um `click`, podem ser conectados ao clique em um elemento específico. Usaremos eventos de teclado ao longo deste projeto.

Para manipular um evento, você precisa usar o método `addEventListener()` da janela e fornecer dois parâmetros de entrada. O primeiro parâmetro é o nome do evento, por exemplo, `keyup`. O segundo parâmetro é a função que deve ser invocada como resultado do evento ocorrer.

Aqui está um exemplo:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Para eventos de teclado, há duas propriedades no evento que você pode usar para ver qual tecla foi pressionada:

- `key`, esta é uma representação em string da tecla pressionada, por exemplo, `ArrowUp`.
- `keyCode`, esta é uma representação numérica, por exemplo, `37`, que corresponde a `ArrowLeft`.

✅ Manipulação de eventos de teclado é útil fora do desenvolvimento de jogos. Quais outros usos você consegue pensar para esta técnica?

### Teclas especiais: um alerta

Existem algumas teclas *especiais* que afetam a janela. Isso significa que, se você estiver ouvindo um evento `keyup` e usar essas teclas especiais para mover seu herói, também ocorrerá rolagem horizontal. Por esse motivo, você pode querer *desativar* esse comportamento padrão do navegador enquanto desenvolve seu jogo. Você precisa de um código como este:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

O código acima garantirá que as teclas de seta e a tecla de espaço tenham seu comportamento *padrão* desativado. O mecanismo de *desativação* ocorre quando chamamos `e.preventDefault()`.

## Movimento induzido pelo jogo

Podemos fazer as coisas se moverem sozinhas usando temporizadores, como as funções `setTimeout()` ou `setInterval()`, que atualizam a localização do objeto a cada intervalo de tempo. Veja como isso pode parecer:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## O loop do jogo

O loop do jogo é um conceito que, essencialmente, é uma função invocada em intervalos regulares. É chamado de loop do jogo porque tudo o que deve ser visível para o usuário é desenhado dentro do loop. O loop do jogo utiliza todos os objetos do jogo que fazem parte dele, desenhando todos eles, a menos que, por algum motivo, não devam mais fazer parte do jogo. Por exemplo, se um objeto é um inimigo que foi atingido por um laser e explodiu, ele não faz mais parte do loop atual do jogo (você aprenderá mais sobre isso em lições subsequentes).

Veja como um loop de jogo pode ser tipicamente expresso em código:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

O loop acima é invocado a cada `200` milissegundos para redesenhar o canvas. Você tem a capacidade de escolher o melhor intervalo que faz sentido para o seu jogo.

## Continuando o Jogo Espacial

Você pegará o código existente e o expandirá. Comece com o código que você completou na parte I ou use o código em [Parte II - inicial](../../../../6-space-game/3-moving-elements-around/your-work).

- **Movendo o herói**: você adicionará código para garantir que pode mover o herói usando as teclas de seta.
- **Mover inimigos**: você também precisará adicionar código para garantir que os inimigos se movam de cima para baixo em uma determinada taxa.

## Etapas recomendadas

Localize os arquivos que foram criados para você na subpasta `your-work`. Ela deve conter o seguinte:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Você inicia seu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abra um navegador e insira esse endereço; neste momento, ele deve renderizar o herói e todos os inimigos; nada está se movendo - ainda!

### Adicionar código

1. **Adicione objetos dedicados** para `hero`, `enemy` e `game object`, eles devem ter propriedades `x` e `y`. (Lembre-se da parte sobre [Herança ou composição](../README.md)).

   *DICA*: `game object` deve ser aquele com `x` e `y` e a capacidade de se desenhar em um canvas.

   > dica: comece adicionando uma nova classe GameObject com seu construtor delineado como abaixo e, em seguida, desenhe-a no canvas:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Agora, estenda este GameObject para criar o Hero e o Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Adicione manipuladores de eventos de teclado** para lidar com a navegação por teclas (mover o herói para cima/baixo/esquerda/direita).

   *LEMBRE-SE*: é um sistema cartesiano, o canto superior esquerdo é `0,0`. Também lembre-se de adicionar código para interromper o *comportamento padrão*.

   > dica: crie sua função onKeyDown e conecte-a à janela:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Verifique o console do navegador neste ponto e observe as teclas sendo registradas.

3. **Implemente** o [Padrão Pub/Sub](../README.md), isso manterá seu código limpo enquanto você segue as partes restantes.

   Para fazer esta última parte, você pode:

   1. **Adicionar um listener de eventos** na janela:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Criar uma classe EventEmitter** para publicar e assinar mensagens:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Adicionar constantes** e configurar o EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Inicializar o jogo**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Configurar o loop do jogo**

   Refatore a função window.onload para inicializar o jogo e configurar um loop de jogo em um bom intervalo. Você também adicionará um feixe de laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Adicione código** para mover inimigos em um determinado intervalo

    Refatore a função `createEnemies()` para criar os inimigos e empurrá-los para a nova classe gameObjects:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    e adicione uma função `createHero()` para fazer um processo semelhante para o herói.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    e, finalmente, adicione uma função `drawGameObjects()` para iniciar o desenho:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Seus inimigos devem começar a avançar em direção à sua nave espacial!

---

## 🚀 Desafio

Como você pode ver, seu código pode se transformar em 'código espaguete' quando você começa a adicionar funções, variáveis e classes. Como você pode organizar melhor seu código para que ele seja mais legível? Esboce um sistema para organizar seu código, mesmo que ele ainda esteja em um único arquivo.

## Quiz Pós-Aula

[Quiz pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Revisão & Autoestudo

Embora estejamos escrevendo nosso jogo sem usar frameworks, existem muitos frameworks baseados em JavaScript para desenvolvimento de jogos com canvas. Reserve um tempo para fazer [leitura sobre eles](https://github.com/collections/javascript-game-engines).

## Tarefa

[Comente seu código](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.