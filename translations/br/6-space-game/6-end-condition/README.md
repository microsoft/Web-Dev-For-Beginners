<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-25T22:36:53+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "br"
}
-->
# Construindo um Jogo Espacial Parte 6: Final e Reinício

## Quiz Pré-Aula

[Quiz pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Existem diferentes maneiras de expressar uma *condição de término* em um jogo. Cabe a você, como criador do jogo, decidir por que o jogo terminou. Aqui estão algumas razões, assumindo que estamos falando sobre o jogo espacial que você tem construído até agora:

- **`N` Naves inimigas foram destruídas**: É bastante comum, se você dividir um jogo em diferentes níveis, que seja necessário destruir `N` naves inimigas para completar um nível.
- **Sua nave foi destruída**: Existem jogos em que você perde se sua nave for destruída. Outra abordagem comum é o conceito de vidas. Cada vez que sua nave é destruída, uma vida é deduzida. Quando todas as vidas forem perdidas, você perde o jogo.
- **Você coletou `N` pontos**: Outra condição comum de término é coletar pontos. Como você ganha pontos depende de você, mas é bastante comum atribuir pontos a várias atividades, como destruir uma nave inimiga ou coletar itens que caem quando são destruídos.
- **Completar um nível**: Isso pode envolver várias condições, como destruir `X` naves inimigas, coletar `Y` pontos ou talvez coletar um item específico.

## Reinício

Se as pessoas gostarem do seu jogo, é provável que queiram jogá-lo novamente. Quando o jogo termina, por qualquer motivo, você deve oferecer uma alternativa para reiniciá-lo.

✅ Pense um pouco sobre em quais condições você acha que um jogo termina e como você é incentivado a reiniciá-lo.

## O que construir

Você adicionará estas regras ao seu jogo:

1. **Vencer o jogo**. Quando todas as naves inimigas forem destruídas, você vence o jogo. Além disso, exiba algum tipo de mensagem de vitória.
1. **Reiniciar**. Quando todas as suas vidas forem perdidas ou o jogo for vencido, você deve oferecer uma maneira de reiniciar o jogo. Lembre-se! Você precisará reinicializar o jogo e limpar o estado anterior.

## Passos recomendados

Localize os arquivos que foram criados para você na subpasta `your-work`. Ela deve conter o seguinte:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Você inicia seu projeto na pasta `your_work` digitando:

```bash
cd your-work
npm start
```

O comando acima iniciará um servidor HTTP no endereço `http://localhost:5000`. Abra um navegador e insira esse endereço. Seu jogo deve estar em um estado jogável.

> dica: para evitar avisos no Visual Studio Code, edite a função `window.onload` para chamar `gameLoopId` como está (sem `let`), e declare o gameLoopId no topo do arquivo, independentemente: `let gameLoopId;`

### Adicionar código

1. **Rastrear condição de término**. Adicione código que rastreie o número de inimigos ou se a nave do herói foi destruída, adicionando estas duas funções:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Adicionar lógica aos manipuladores de mensagens**. Edite o `eventEmitter` para lidar com essas condições:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Adicionar novos tipos de mensagens**. Adicione estas mensagens ao objeto de constantes:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Adicionar código de reinício** que reinicia o jogo ao pressionar um botão selecionado.

   1. **Ouvir a tecla `Enter`**. Edite o eventListener da janela para ouvir essa tecla:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Adicionar mensagem de reinício**. Adicione esta mensagem à constante de mensagens:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementar regras do jogo**. Implemente as seguintes regras do jogo:

   1. **Condição de vitória do jogador**. Quando todas as naves inimigas forem destruídas, exiba uma mensagem de vitória.

      1. Primeiro, crie uma função `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Crie uma função `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **Lógica de reinício**. Quando todas as vidas forem perdidas ou o jogador vencer o jogo, exiba que o jogo pode ser reiniciado. Além disso, reinicie o jogo quando a tecla de *reinício* for pressionada (você pode decidir qual tecla será mapeada para reinício).

      1. Crie a função `resetGame()`:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. Adicione uma chamada ao `eventEmitter` para reiniciar o jogo em `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Adicione uma função `clear()` ao EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Parabéns, Capitão! Seu jogo está completo! Muito bem! 🚀 💥 👽

---

## 🚀 Desafio

Adicione um som! Você consegue adicionar um som para melhorar a experiência do jogo, talvez quando houver um disparo de laser, ou quando o herói morrer ou vencer? Confira este [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) para aprender como tocar som usando JavaScript.

## Quiz Pós-Aula

[Quiz pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Revisão e Autoestudo

Sua tarefa é criar um novo jogo de exemplo, então explore alguns jogos interessantes por aí para ver que tipo de jogo você pode construir.

## Tarefa

[Crie um Jogo de Exemplo](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.