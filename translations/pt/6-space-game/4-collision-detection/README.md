<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T16:13:03+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "pt"
}
-->
# Construir um Jogo Espacial Parte 4: Adicionar um Laser e Detetar Colisões

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/35)

Nesta lição vais aprender a disparar lasers com JavaScript! Vamos adicionar duas coisas ao nosso jogo:

- **Um laser**: este laser é disparado da nave do herói e segue verticalmente para cima.
- **Deteção de colisões**, como parte da implementação da capacidade de *disparar*, também vamos adicionar algumas regras interessantes ao jogo:
   - **Laser atinge inimigo**: O inimigo morre se for atingido por um laser.
   - **Laser atinge o topo do ecrã**: Um laser é destruído se atingir a parte superior do ecrã.
   - **Colisão entre inimigo e herói**: Um inimigo e o herói são destruídos se colidirem um com o outro.
   - **Inimigo atinge o fundo do ecrã**: Um inimigo e o herói são destruídos se o inimigo atingir o fundo do ecrã.

Resumindo, tu -- *o herói* -- precisas de atingir todos os inimigos com um laser antes que eles consigam chegar ao fundo do ecrã.

✅ Faz uma pequena pesquisa sobre o primeiro jogo de computador alguma vez criado. Qual era a sua funcionalidade?

Vamos ser heróicos juntos!

## Deteção de colisões

Como fazemos a deteção de colisões? Precisamos de pensar nos objetos do jogo como retângulos em movimento. Porquê, perguntas tu? Bem, a imagem usada para desenhar um objeto do jogo é um retângulo: tem `x`, `y`, `largura` e `altura`.

Se dois retângulos, ou seja, um herói e um inimigo *intersetarem*, tens uma colisão. O que deve acontecer a seguir depende das regras do jogo. Para implementar a deteção de colisões, precisas do seguinte:

1. Uma forma de obter uma representação em retângulo de um objeto do jogo, algo como isto:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Uma função de comparação, que pode ser assim:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Como destruímos coisas

Para destruir coisas num jogo, precisas de informar o jogo que não deve mais pintar esse item no ciclo de jogo que é acionado em intervalos específicos. Uma forma de fazer isso é marcar um objeto do jogo como *morto* quando algo acontece, assim:

```javascript
// collision happened
enemy.dead = true
```

Depois podes proceder para filtrar os objetos *mortos* antes de repintar o ecrã, assim:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Como disparamos um laser

Disparar um laser traduz-se em responder a um evento de tecla e criar um objeto que se move numa direção específica. Por isso, precisamos de realizar os seguintes passos:

1. **Criar um objeto laser**: a partir do topo da nave do herói, que ao ser criado começa a mover-se para cima em direção ao topo do ecrã.
2. **Associar código a um evento de tecla**: precisamos de escolher uma tecla no teclado que represente o jogador a disparar o laser.
3. **Criar um objeto do jogo que se pareça com um laser** quando a tecla é pressionada.

## Intervalo de disparo do laser

O laser precisa de ser disparado sempre que pressionas uma tecla, como *espaço*, por exemplo. Para evitar que o jogo produza demasiados lasers num curto espaço de tempo, precisamos de corrigir isso. A solução é implementar um chamado *intervalo de disparo*, um temporizador, que garante que um laser só pode ser disparado de tempos em tempos. Podes implementar isso da seguinte forma:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Consulta a lição 1 da série de jogos espaciais para te lembrares sobre *intervalos de disparo*.

## O que construir

Vais pegar no código existente (que deves ter limpo e refatorado) da lição anterior e expandi-lo. Podes começar com o código da parte II ou usar o código em [Parte III - inicial](../../../../../../../../../your-work).

> dica: o laser com que vais trabalhar já está na tua pasta de recursos e referenciado pelo teu código.

- **Adicionar deteção de colisões**, quando um laser colide com algo, as seguintes regras devem ser aplicadas:
   1. **Laser atinge inimigo**: o inimigo morre se for atingido por um laser.
   2. **Laser atinge o topo do ecrã**: Um laser é destruído se atingir a parte superior do ecrã.
   3. **Colisão entre inimigo e herói**: um inimigo e o herói são destruídos se colidirem um com o outro.
   4. **Inimigo atinge o fundo do ecrã**: Um inimigo e o herói são destruídos se o inimigo atingir o fundo do ecrã.

## Passos recomendados

Localiza os ficheiros que foram criados para ti na subpasta `your-work`. Deve conter o seguinte:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Inicia o teu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abre um navegador e insere esse endereço, neste momento deve renderizar o herói e todos os inimigos, nada está a mover-se - ainda :).

### Adicionar código

1. **Configurar uma representação em retângulo do teu objeto do jogo, para lidar com colisões** O código abaixo permite-te obter uma representação em retângulo de um `GameObject`. Edita a tua classe GameObject para expandi-la:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Adicionar código que verifica colisões** Isto será uma nova função que testa se dois retângulos se intersetam:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Adicionar capacidade de disparar laser**
   1. **Adicionar mensagem de evento de tecla**. A tecla *espaço* deve criar um laser logo acima da nave do herói. Adiciona três constantes no objeto Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Lidar com a tecla espaço**. Edita a função `window.addEventListener` keyup para lidar com espaços:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Adicionar ouvintes**. Edita a função `initGame()` para garantir que o herói pode disparar quando a barra de espaço é pressionada:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       e adiciona uma nova função `eventEmitter.on()` para garantir o comportamento quando um inimigo colide com um laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Mover objeto**, Garante que o laser se move gradualmente para o topo do ecrã. Vais criar uma nova classe Laser que expande `GameObject`, como já fizeste antes: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Lidar com colisões**, Implementa regras de colisão para o laser. Adiciona uma função `updateGameObjects()` que testa objetos em colisão:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Certifica-te de adicionar `updateGameObjects()` no teu ciclo de jogo em `window.onload`.

   4. **Implementar intervalo de disparo** no laser, para que só possa ser disparado de tempos em tempos.

      Finalmente, edita a classe Hero para que possa ter intervalo de disparo:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

Neste ponto, o teu jogo já tem alguma funcionalidade! Podes navegar com as teclas de seta, disparar um laser com a barra de espaço, e os inimigos desaparecem quando os atinges. Muito bem!

---

## 🚀 Desafio

Adiciona uma explosão! Dá uma olhada nos recursos do jogo no [repositório Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) e tenta adicionar uma explosão quando o laser atinge um alienígena.

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/36)

## Revisão e Estudo Individual

Experimenta com os intervalos no teu jogo até agora. O que acontece quando os alteras? Lê mais sobre [eventos de temporização em JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tarefa

[Explorar colisões](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.