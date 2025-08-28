<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-24T12:27:00+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "pt"
}
-->
# Construir um Jogo Espacial Parte 5: Pontuação e Vidas

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/37)

Nesta lição, vais aprender como adicionar pontuação a um jogo e calcular vidas.

## Desenhar texto no ecrã

Para conseguir mostrar a pontuação do jogo no ecrã, precisas de saber como colocar texto no ecrã. A resposta é usar o método `fillText()` no objeto canvas. Também podes controlar outros aspetos, como o tipo de letra a usar, a cor do texto e até o alinhamento (esquerda, direita, centro). Abaixo está um exemplo de código que desenha texto no ecrã.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lê mais sobre [como adicionar texto a um canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) e sente-te à vontade para tornar o teu texto mais estiloso!

## Vida, como conceito de jogo

O conceito de ter vidas num jogo é apenas um número. No contexto de um jogo espacial, é comum atribuir um conjunto de vidas que são deduzidas uma a uma quando a tua nave sofre danos. É interessante mostrar uma representação gráfica disso, como mini-naves ou corações, em vez de apenas um número.

## O que construir

Vamos adicionar o seguinte ao teu jogo:

- **Pontuação do jogo**: Por cada nave inimiga destruída, o herói deve ganhar alguns pontos. Sugerimos 100 pontos por nave. A pontuação do jogo deve ser exibida no canto inferior esquerdo.
- **Vida**: A tua nave tem três vidas. Perdes uma vida sempre que uma nave inimiga colide contigo. A pontuação de vidas deve ser exibida no canto inferior direito e ser composta pelo seguinte gráfico ![imagem de vida](../../../../6-space-game/5-keeping-score/solution/assets/life.png).

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

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abre um navegador e insere esse endereço. Neste momento, deve renderizar o herói e todos os inimigos, e ao pressionares as setas esquerda e direita, o herói move-se e pode disparar contra os inimigos.

### Adicionar código

1. **Copiar os recursos necessários** da pasta `solution/assets/` para a pasta `your-work`; vais adicionar o recurso `life.png`. Adiciona o `lifeImg` à função window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Adiciona o `lifeImg` à lista de recursos:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Adicionar variáveis**. Adiciona código que represente a pontuação total (0) e as vidas restantes (3), exibindo estas pontuações no ecrã.

3. **Estender a função `updateGameObjects()`**. Estende a função `updateGameObjects()` para lidar com colisões de inimigos:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adicionar `vida` e `pontos`**. 
   1. **Inicializar variáveis**. Sob `this.cooldown = 0` na classe `Hero`, define vida e pontos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Desenhar variáveis no ecrã**. Desenha estes valores no ecrã:

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

   1. **Adicionar métodos ao loop do jogo**. Certifica-te de que adicionas estas funções à função window.onload sob `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementar regras do jogo**. Implementa as seguintes regras do jogo:

   1. **Por cada colisão entre herói e inimigo**, deduz uma vida.
   
      Estende a classe `Hero` para fazer esta dedução:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Por cada laser que atinge um inimigo**, aumenta a pontuação do jogo em 100 pontos.

      Estende a classe Hero para fazer este incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Adiciona estas funções aos Emissores de Eventos de Colisão:

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

✅ Faz uma pequena pesquisa para descobrir outros jogos criados usando JavaScript/Canvas. Quais são as suas características comuns?

Ao final deste trabalho, deverás ver as pequenas naves de 'vida' no canto inferior direito, os pontos no canto inferior esquerdo, e deverás ver a contagem de vidas a diminuir à medida que colides com inimigos e os pontos a aumentar quando disparas contra inimigos. Muito bem! O teu jogo está quase completo.

---

## 🚀 Desafio

O teu código está quase completo. Consegues imaginar os próximos passos?

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/38)

## Revisão & Estudo Individual

Pesquisa algumas formas de incrementar e decrementar pontuações e vidas em jogos. Existem motores de jogo interessantes como o [PlayFab](https://playfab.com). Como é que usar um destes poderia melhorar o teu jogo?

## Tarefa

[Construir um Jogo de Pontuação](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, tenha em atenção que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.