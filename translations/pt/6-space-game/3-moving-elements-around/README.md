<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T16:12:26+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "pt"
}
-->
# Construir um Jogo Espacial Parte 3: Adicionando Movimento

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/33)

Os jogos não são muito divertidos até que você tenha alienígenas se movendo na tela! Neste jogo, vamos usar dois tipos de movimentos:

- **Movimento por teclado/rato**: quando o utilizador interage com o teclado ou rato para mover um objeto na tela.
- **Movimento induzido pelo jogo**: quando o jogo move um objeto em intervalos de tempo definidos.

Então, como movemos coisas na tela? Tudo se resume a coordenadas cartesianas: alteramos a localização (x, y) do objeto e depois redesenhamos a tela.

Normalmente, são necessários os seguintes passos para realizar o *movimento* na tela:

1. **Definir uma nova localização** para um objeto; isso é necessário para que o objeto pareça ter se movido.
2. **Limpar a tela**, a tela precisa ser limpa entre os desenhos. Podemos limpá-la desenhando um retângulo preenchido com uma cor de fundo.
3. **Redesenhar o objeto** na nova localização. Ao fazer isso, finalmente conseguimos mover o objeto de um local para outro.

Aqui está como isso pode parecer em código:

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

✅ Consegue pensar em uma razão pela qual redesenhar o seu herói várias vezes por segundo pode gerar custos de desempenho? Leia sobre [alternativas para este padrão](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Lidar com eventos de teclado

Lidamos com eventos ao associar eventos específicos ao código. Eventos de teclado são acionados em toda a janela, enquanto eventos de rato, como um `click`, podem ser conectados ao clique em um elemento específico. Vamos usar eventos de teclado ao longo deste projeto.

Para lidar com um evento, é necessário usar o método `addEventListener()` da janela e fornecer dois parâmetros de entrada. O primeiro parâmetro é o nome do evento, por exemplo, `keyup`. O segundo parâmetro é a função que deve ser invocada como resultado do evento.

Aqui está um exemplo:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Para eventos de teclado, há duas propriedades no evento que podem ser usadas para identificar qual tecla foi pressionada:

- `key`, esta é uma representação em string da tecla pressionada, por exemplo, `ArrowUp`.
- `keyCode`, esta é uma representação numérica, por exemplo, `37`, que corresponde a `ArrowLeft`.

✅ Manipulação de eventos de teclado é útil fora do desenvolvimento de jogos. Que outros usos consegue imaginar para esta técnica?

### Teclas especiais: um alerta

Existem algumas teclas *especiais* que afetam a janela. Isso significa que, se estiver a ouvir um evento `keyup` e usar essas teclas especiais para mover o herói, também ocorrerá rolagem horizontal. Por essa razão, pode ser necessário *desativar* este comportamento padrão do navegador ao construir o seu jogo. É necessário um código como este:

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

O código acima garantirá que as teclas de seta e a tecla de espaço tenham o seu comportamento *padrão* desativado. O mecanismo de *desativação* ocorre quando chamamos `e.preventDefault()`.

## Movimento induzido pelo jogo

Podemos fazer com que os objetos se movam sozinhos usando temporizadores, como as funções `setTimeout()` ou `setInterval()`, que atualizam a localização do objeto a cada intervalo de tempo. Aqui está como isso pode parecer:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## O loop do jogo

O loop do jogo é um conceito que, essencialmente, é uma função invocada em intervalos regulares. É chamado de loop do jogo porque tudo o que deve ser visível para o utilizador é desenhado dentro do loop. O loop do jogo utiliza todos os objetos do jogo que fazem parte dele, desenhando todos eles, a menos que, por algum motivo, não devam mais fazer parte do jogo. Por exemplo, se um objeto for um inimigo que foi atingido por um laser e explodiu, ele não faz mais parte do loop atual do jogo (vai aprender mais sobre isso em lições subsequentes).

Aqui está como um loop de jogo pode ser tipicamente expresso em código:

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

O loop acima é invocado a cada `200` milissegundos para redesenhar o canvas. Pode escolher o intervalo que faz mais sentido para o seu jogo.

## Continuando o Jogo Espacial

Vai pegar o código existente e expandi-lo. Pode começar com o código que completou na Parte I ou usar o código em [Parte II - inicial](../../../../6-space-game/3-moving-elements-around/your-work).

- **Mover o herói**: vai adicionar código para garantir que pode mover o herói usando as teclas de seta.
- **Mover inimigos**: também precisará adicionar código para garantir que os inimigos se movam de cima para baixo a uma determinada velocidade.

## Passos recomendados

Localize os ficheiros que foram criados para si na subpasta `your-work`. Deve conter o seguinte:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Inicie o seu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abra um navegador e insira esse endereço; neste momento, deve renderizar o herói e todos os inimigos; nada está a mover-se - ainda!

### Adicionar código

1. **Adicionar objetos dedicados** para `hero`, `enemy` e `game object`, que devem ter propriedades `x` e `y`. (Lembre-se da parte sobre [Herança ou composição](../README.md)).

   *DICA*: `game object` deve ser o objeto com `x` e `y` e a capacidade de se desenhar no canvas.

   > dica: comece por adicionar uma nova classe GameObject com o seu construtor delineado como abaixo e, em seguida, desenhe-a no canvas:
  
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

2. **Adicionar manipuladores de eventos de teclado** para lidar com a navegação por teclas (mover o herói para cima/baixo/esquerda/direita).

   *LEMBRE-SE*: é um sistema cartesiano, o canto superior esquerdo é `0,0`. Também lembre-se de adicionar código para parar o *comportamento padrão*.

   > dica: crie a sua função onKeyDown e associe-a à janela:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Verifique o console do navegador neste ponto e veja as teclas sendo registadas.

3. **Implementar** o [Padrão Pub/Sub](../README.md), isso manterá o seu código limpo enquanto segue as partes restantes.

   Para fazer esta última parte, pode:

   1. **Adicionar um ouvinte de eventos** na janela:

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

    1. **Criar uma classe EventEmitter** para publicar e subscrever mensagens:

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

   Refatore a função window.onload para inicializar o jogo e configurar um loop de jogo com um bom intervalo. Também adicionará um feixe de laser:

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

5. **Adicionar código** para mover inimigos em um determinado intervalo

    Refatore a função `createEnemies()` para criar os inimigos e adicioná-los à nova classe gameObjects:

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
    
    e adicione uma função `createHero()` para realizar um processo semelhante para o herói.
    
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

    Os seus inimigos devem começar a avançar na direção da sua nave espacial!

---

## 🚀 Desafio

Como pode ver, o seu código pode transformar-se em 'código espaguete' quando começa a adicionar funções, variáveis e classes. Como pode organizar melhor o seu código para que seja mais legível? Esboce um sistema para organizar o seu código, mesmo que ainda esteja num único ficheiro.

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/34)

## Revisão & Autoestudo

Embora estejamos a escrever o nosso jogo sem usar frameworks, existem muitos frameworks baseados em JavaScript para desenvolvimento de jogos com canvas. Dedique algum tempo para [ler sobre eles](https://github.com/collections/javascript-game-engines).

## Tarefa

[Comente o seu código](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.