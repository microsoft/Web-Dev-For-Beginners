<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-22T23:16:19+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "br"
}
-->
# Construa um Jogo Espacial Parte 5: Pontuação e Vidas

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/37)

Pronto para fazer seu jogo espacial parecer um jogo de verdade? Vamos adicionar pontuação e gerenciar vidas - as mecânicas principais que transformaram os primeiros jogos de arcade, como Space Invaders, de simples demonstrações em entretenimento viciante. É aqui que seu jogo se torna realmente jogável.

## Exibindo Texto na Tela - A Voz do Seu Jogo

Para exibir sua pontuação, precisamos aprender como renderizar texto no canvas. O método `fillText()` é sua principal ferramenta para isso - é a mesma técnica usada nos jogos de arcade clássicos para mostrar pontuações e informações de status.

Você tem controle total sobre a aparência do texto:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Explore mais sobre [como adicionar texto a um canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - você pode se surpreender com o quão criativo pode ser com fontes e estilos!

## Vidas - Mais do que Apenas um Número

No design de jogos, uma "vida" representa a margem de erro do jogador. Esse conceito remonta às máquinas de pinball, onde você tinha várias bolas para jogar. Em jogos de vídeo antigos como Asteroids, vidas davam aos jogadores permissão para correr riscos e aprender com os erros.

A representação visual é muito importante - exibir ícones de naves em vez de apenas "Vidas: 3" cria um reconhecimento visual imediato, semelhante à forma como os gabinetes de arcade antigos usavam iconografia para se comunicar além das barreiras linguísticas.

## Construindo o Sistema de Recompensas do Seu Jogo

Agora vamos implementar os sistemas de feedback principais que mantêm os jogadores engajados:

- **Sistema de pontuação**: Cada nave inimiga destruída concede 100 pontos (números redondos são mais fáceis para os jogadores calcularem mentalmente). A pontuação será exibida no canto inferior esquerdo.
- **Contador de vidas**: Seu herói começa com três vidas - um padrão estabelecido pelos jogos de arcade antigos para equilibrar desafio e jogabilidade. Cada colisão com um inimigo custa uma vida. Vamos exibir as vidas restantes no canto inferior direito usando ícones de naves ![imagem de vida](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.br.png).

## Vamos Começar!

Primeiro, configure seu ambiente de trabalho. Navegue até os arquivos na subpasta `your-work`. Você deve ver os seguintes arquivos:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Para testar seu jogo, inicie o servidor de desenvolvimento a partir da pasta `your_work`:

```bash
cd your-work
npm start
```

Isso executa um servidor local em `http://localhost:5000`. Abra este endereço no seu navegador para ver seu jogo. Teste os controles com as teclas de seta e tente atirar nos inimigos para verificar se tudo está funcionando.

### Hora de Codificar!

1. **Pegue os recursos visuais necessários**. Copie o arquivo `life.png` da pasta `solution/assets/` para sua pasta `your-work`. Depois, adicione o `lifeImg` à função window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Não se esqueça de adicionar o `lifeImg` à sua lista de recursos:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Configure as variáveis do jogo**. Adicione algum código para rastrear sua pontuação total (começando em 0) e vidas restantes (começando em 3). Vamos exibir essas informações na tela para que os jogadores sempre saibam sua situação.

3. **Implemente a detecção de colisão**. Estenda sua função `updateGameObjects()` para detectar quando inimigos colidem com seu herói:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adicione rastreamento de vidas e pontos ao seu Herói**. 
   1. **Inicialize os contadores**. Sob `this.cooldown = 0` na sua classe `Hero`, configure vidas e pontos:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Mostre esses valores ao jogador**. Crie funções para desenhar esses valores na tela:

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

   1. **Conecte tudo ao loop do jogo**. Adicione essas funções à sua função window.onload logo após `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implemente consequências e recompensas no jogo**. Agora vamos adicionar os sistemas de feedback que tornam as ações do jogador significativas:

   1. **Colisões custam vidas**. Toda vez que seu herói colidir com um inimigo, você deve perder uma vida.
   
      Adicione este método à sua classe `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Atirar nos inimigos concede pontos**. Cada acerto bem-sucedido concede 100 pontos, proporcionando um feedback positivo imediato para tiros precisos.

      Estenda sua classe Hero com este método de incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Agora conecte essas funções aos eventos de colisão:

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

✅ Curioso sobre outros jogos criados com JavaScript e Canvas? Faça algumas explorações - você pode se surpreender com o que é possível!

Depois de implementar esses recursos, teste seu jogo para ver o sistema de feedback completo em ação. Você deve ver ícones de vidas no canto inferior direito, sua pontuação no canto inferior esquerdo, e observar como as colisões reduzem vidas enquanto os tiros bem-sucedidos aumentam sua pontuação.

Seu jogo agora tem as mecânicas essenciais que tornaram os primeiros jogos de arcade tão envolventes - objetivos claros, feedback imediato e consequências significativas para as ações do jogador.

---

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agent para completar o seguinte desafio:

**Descrição:** Melhore o sistema de pontuação do jogo espacial implementando um recurso de pontuação máxima com armazenamento persistente e mecânicas de pontuação bônus.

**Prompt:** Crie um sistema de pontuação máxima que salve a melhor pontuação do jogador no localStorage. Adicione pontos bônus para mortes consecutivas de inimigos (sistema de combo) e implemente valores de pontos diferentes para tipos diferentes de inimigos. Inclua um indicador visual quando o jogador alcançar uma nova pontuação máxima e exiba a pontuação máxima atual na tela do jogo.

## 🚀 Desafio

Agora você tem um jogo funcional com pontuação e vidas. Considere quais recursos adicionais podem melhorar a experiência do jogador.

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/38)

## Revisão & Autoestudo

Quer explorar mais? Pesquise diferentes abordagens para sistemas de pontuação e vidas em jogos. Existem motores de jogos fascinantes como [PlayFab](https://playfab.com) que lidam com pontuação, rankings e progressão de jogadores. Como integrar algo assim poderia levar seu jogo para o próximo nível?

## Tarefa

[Construa um Jogo de Pontuação](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.