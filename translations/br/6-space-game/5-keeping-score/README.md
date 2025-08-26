<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-25T22:05:17+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "br"
}
-->
# Construindo um Jogo Espacial Parte 5: Pontuação e Vidas

## Quiz Pré-Aula

[Quiz pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

Nesta lição, você aprenderá como adicionar pontuação a um jogo e calcular vidas.

## Exibir texto na tela

Para exibir a pontuação do jogo na tela, você precisará saber como posicionar texto. A resposta é usar o método `fillText()` no objeto canvas. Você também pode controlar outros aspectos, como qual fonte usar, a cor do texto e até mesmo seu alinhamento (esquerda, direita, centro). Abaixo está um código que desenha texto na tela.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Leia mais sobre [como adicionar texto a um canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) e sinta-se à vontade para deixar o seu mais estiloso!

## Vida, como um conceito de jogo

O conceito de ter vidas em um jogo é apenas um número. No contexto de um jogo espacial, é comum atribuir um conjunto de vidas que são reduzidas uma a uma quando sua nave sofre dano. É interessante mostrar uma representação gráfica disso, como mini-naves ou corações, em vez de apenas um número.

## O que construir

Vamos adicionar o seguinte ao seu jogo:

- **Pontuação do jogo**: Para cada nave inimiga destruída, o herói deve ganhar alguns pontos. Sugerimos 100 pontos por nave. A pontuação do jogo deve ser exibida no canto inferior esquerdo.
- **Vida**: Sua nave tem três vidas. Você perde uma vida toda vez que uma nave inimiga colide com você. A pontuação de vidas deve ser exibida no canto inferior direito e ser composta pelo seguinte gráfico ![imagem de vida](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.br.png).

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

Você inicia seu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abra um navegador e insira esse endereço. No momento, ele deve renderizar o herói e todos os inimigos, e, ao pressionar as setas esquerda e direita, o herói se move e pode derrubar inimigos.

### Adicionar código

1. **Copie os recursos necessários** da pasta `solution/assets/` para a pasta `your-work`; você adicionará o recurso `life.png`. Adicione o `lifeImg` à função `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Adicione o `lifeImg` à lista de recursos:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Adicione variáveis**. Adicione código que represente sua pontuação total (0) e vidas restantes (3), exibindo essas pontuações na tela.

3. **Estenda a função `updateGameObjects()`**. Estenda a função `updateGameObjects()` para lidar com colisões com inimigos:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adicione `vida` e `pontos`**. 
   1. **Inicialize variáveis**. Sob `this.cooldown = 0` na classe `Hero`, defina vida e pontos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Exiba variáveis na tela**. Desenhe esses valores na tela:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Adicione métodos ao loop do jogo**. Certifique-se de adicionar essas funções à sua função `window.onload` sob `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implemente as regras do jogo**. Implemente as seguintes regras:

   1. **Para cada colisão entre herói e inimigo**, deduza uma vida.
   
      Estenda a classe `Hero` para realizar essa dedução:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Para cada laser que atinge um inimigo**, aumente a pontuação do jogo em 100 pontos.

      Estenda a classe `Hero` para realizar esse incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Adicione essas funções aos emissores de eventos de colisão:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Faça uma pequena pesquisa para descobrir outros jogos criados usando JavaScript/Canvas. Quais são suas características comuns?

Ao final deste trabalho, você deverá ver as pequenas naves de "vida" no canto inferior direito, os pontos no canto inferior esquerdo, e deverá ver sua contagem de vidas diminuir ao colidir com inimigos e seus pontos aumentarem ao atirar nos inimigos. Muito bem! Seu jogo está quase completo.

---

## 🚀 Desafio

Seu código está quase completo. Consegue imaginar os próximos passos?

## Quiz Pós-Aula

[Quiz pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Revisão e Autoestudo

Pesquise algumas maneiras de incrementar e decrementar pontuações e vidas em jogos. Existem alguns motores de jogo interessantes, como [PlayFab](https://playfab.com). Como o uso de um desses poderia melhorar seu jogo?

## Tarefa

[Construa um Jogo de Pontuação](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.