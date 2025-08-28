<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-25T22:24:41+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "br"
}
-->
# Construindo um Jogo Espacial Parte 4: Adicionando um Laser e Detectando Colisões

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/35)

Nesta lição, você aprenderá a disparar lasers com JavaScript! Vamos adicionar dois elementos ao nosso jogo:

- **Um laser**: este laser será disparado da nave do herói e seguirá verticalmente para cima.
- **Detecção de colisões**, como parte da implementação da habilidade de *atirar*, também adicionaremos algumas regras interessantes ao jogo:
   - **Laser atinge inimigo**: O inimigo é destruído se for atingido por um laser.
   - **Laser atinge o topo da tela**: O laser é destruído se atingir a parte superior da tela.
   - **Colisão entre inimigo e herói**: Tanto o inimigo quanto o herói são destruídos se colidirem.
   - **Inimigo atinge a parte inferior da tela**: Tanto o inimigo quanto o herói são destruídos se o inimigo atingir a parte inferior da tela.

Resumindo, você -- *o herói* -- precisa atingir todos os inimigos com um laser antes que eles consigam chegar à parte inferior da tela.

✅ Faça uma pequena pesquisa sobre o primeiro jogo de computador já criado. Qual era sua funcionalidade?

Vamos ser heróicos juntos!

## Detecção de colisões

Como fazemos a detecção de colisões? Precisamos pensar nos objetos do jogo como retângulos em movimento. Por que isso, você pode perguntar? Bem, a imagem usada para desenhar um objeto do jogo é um retângulo: ela possui `x`, `y`, `largura` e `altura`.

Se dois retângulos, ou seja, um herói e um inimigo, *se cruzarem*, temos uma colisão. O que deve acontecer a partir daí depende das regras do jogo. Para implementar a detecção de colisões, você precisará do seguinte:

1. Uma maneira de obter uma representação retangular de um objeto do jogo, algo assim:

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

## Como destruir objetos

Para destruir objetos em um jogo, você precisa informar ao jogo que ele não deve mais desenhar esse item no loop do jogo que é acionado em um determinado intervalo. Uma maneira de fazer isso é marcar um objeto do jogo como *morto* quando algo acontece, assim:

```javascript
// collision happened
enemy.dead = true
```

Depois, você pode filtrar os objetos *mortos* antes de redesenhar a tela, assim:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Como disparar um laser

Disparar um laser significa responder a um evento de tecla e criar um objeto que se move em uma determinada direção. Precisamos realizar os seguintes passos:

1. **Criar um objeto laser**: que parte do topo da nave do herói e, ao ser criado, começa a se mover para cima em direção ao topo da tela.
2. **Vincular código a um evento de tecla**: precisamos escolher uma tecla no teclado que represente o jogador disparando o laser.
3. **Criar um objeto do jogo que pareça um laser** quando a tecla for pressionada.

## Tempo de recarga do laser

O laser precisa ser disparado toda vez que você pressionar uma tecla, como a barra de espaço, por exemplo. Para evitar que o jogo produza lasers em excesso em um curto período, precisamos corrigir isso. A solução é implementar um chamado *tempo de recarga*, um temporizador que garante que o laser só possa ser disparado em intervalos específicos. Você pode implementar isso da seguinte forma:

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

✅ Consulte a lição 1 da série de jogos espaciais para relembrar sobre *tempos de recarga*.

## O que construir

Você usará o código existente (que deve ter sido limpo e refatorado) da lição anterior e o estenderá. Comece com o código da parte II ou use o código em [Parte III - inicial](../../../../../../../../../your-work).

> dica: o laser com o qual você trabalhará já está na sua pasta de ativos e referenciado pelo seu código.

- **Adicione detecção de colisões**, quando um laser colidir com algo, as seguintes regras devem ser aplicadas:
   1. **Laser atinge inimigo**: o inimigo é destruído se for atingido por um laser.
   2. **Laser atinge o topo da tela**: o laser é destruído se atingir a parte superior da tela.
   3. **Colisão entre inimigo e herói**: o inimigo e o herói são destruídos se colidirem.
   4. **Inimigo atinge a parte inferior da tela**: o inimigo e o herói são destruídos se o inimigo atingir a parte inferior da tela.

## Passos recomendados

Localize os arquivos que foram criados para você na subpasta `your-work`. Ela deve conter o seguinte:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Inicie seu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abra um navegador e insira esse endereço. Neste momento, ele deve renderizar o herói e todos os inimigos, mas nada estará se movendo - ainda :).

### Adicione código

1. **Configure uma representação retangular do seu objeto do jogo para lidar com colisões**. O código abaixo permite obter uma representação retangular de um `GameObject`. Edite sua classe GameObject para estendê-la:

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

2. **Adicione código que verifica colisões**. Esta será uma nova função que testa se dois retângulos se cruzam:

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

3. **Adicione a capacidade de disparar lasers**
   1. **Adicione uma mensagem de evento de tecla**. A tecla *espaço* deve criar um laser logo acima da nave do herói. Adicione três constantes no objeto Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Manipule a tecla espaço**. Edite a função `window.addEventListener` para lidar com a tecla espaço:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Adicione ouvintes de eventos**. Edite a função `initGame()` para garantir que o herói possa disparar quando a barra de espaço for pressionada:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       e adicione uma nova função `eventEmitter.on()` para garantir o comportamento quando um inimigo colidir com um laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Mova o objeto**, Certifique-se de que o laser se mova gradualmente para o topo da tela. Você criará uma nova classe Laser que estende `GameObject`, como fez antes: 
   
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

   1. **Manipule colisões**, Implemente as regras de colisão para o laser. Adicione uma função `updateGameObjects()` que testa objetos colidindo:

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

      Certifique-se de adicionar `updateGameObjects()` ao seu loop do jogo em `window.onload`.

   4. **Implemente o tempo de recarga** no laser, para que ele só possa ser disparado em intervalos específicos.

      Por fim, edite a classe Hero para que ela possa lidar com o tempo de recarga:

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

Neste ponto, seu jogo já terá alguma funcionalidade! Você pode navegar com as teclas de seta, disparar um laser com a barra de espaço, e os inimigos desaparecem quando você os atinge. Muito bem!

---

## 🚀 Desafio

Adicione uma explosão! Dê uma olhada nos ativos do jogo no [repositório Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) e tente adicionar uma explosão quando o laser atingir um alienígena.

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/36)

## Revisão e Autoestudo

Experimente os intervalos no seu jogo até agora. O que acontece quando você os altera? Leia mais sobre [eventos de temporização em JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tarefa

[Explore colisões](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.