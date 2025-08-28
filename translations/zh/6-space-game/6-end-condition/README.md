<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-23T23:06:47+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第六部分：结束与重启

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/39)

在游戏中有多种方式可以表达“结束条件”。作为游戏的创作者，你可以决定游戏为何结束。以下是一些可能的原因，假设我们正在讨论你迄今为止构建的太空游戏：

- **摧毁了`N`艘敌方飞船**：如果游戏分为不同的关卡，通常需要摧毁`N`艘敌方飞船才能完成一个关卡。
- **你的飞船被摧毁**：有些游戏中，如果你的飞船被摧毁，你就会输掉游戏。另一种常见的方式是引入“生命值”的概念。每次飞船被摧毁都会扣除一条生命值，当所有生命值耗尽时，游戏结束。
- **收集了`N`分**：另一种常见的结束条件是收集一定的分数。如何获得分数取决于你，但通常会为各种活动分配分数，比如摧毁敌方飞船或收集敌方飞船被摧毁后掉落的物品。
- **完成一个关卡**：这可能涉及多个条件，比如摧毁`X`艘敌方飞船、收集`Y`分，或者收集特定的物品。

## 重启

如果玩家喜欢你的游戏，他们可能会想要重新玩一次。当游戏因某种原因结束时，你应该提供一个重启的选项。

✅ 思考一下你认为游戏在什么条件下会结束，以及如何提示玩家重启游戏。

## 要构建的内容

你将为游戏添加以下规则：

1. **赢得游戏**。当所有敌方飞船被摧毁时，玩家赢得游戏。此外，显示某种胜利信息。
1. **重启**。当所有生命值耗尽或游戏获胜时，你应该提供一种方式来重启游戏。记住！你需要重新初始化游戏，并清除之前的游戏状态。

## 推荐步骤

找到在`your-work`子文件夹中为你创建的文件。它应该包含以下内容：

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

通过输入以下命令启动你的项目：

```bash
cd your-work
npm start
```

上述命令将在地址`http://localhost:5000`上启动一个HTTP服务器。打开浏览器并输入该地址。你的游戏应该处于可玩状态。

> 提示：为了避免在Visual Studio Code中出现警告，编辑`window.onload`函数以直接调用`gameLoopId`（不使用`let`），并在文件顶部独立声明`gameLoopId`：`let gameLoopId;`

### 添加代码

1. **跟踪结束条件**。添加代码以跟踪敌方飞船数量，或者英雄飞船是否被摧毁，方法是添加以下两个函数：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **添加逻辑到消息处理器**。编辑`eventEmitter`以处理这些条件：

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

1. **添加新的消息类型**。将以下消息添加到常量对象中：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **添加重启代码**。编写代码以在按下选定按钮时重启游戏。

   1. **监听按键`Enter`**。编辑窗口的事件监听器以监听此按键：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **添加重启消息**。将以下消息添加到你的消息常量中：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **实现游戏规则**。实现以下游戏规则：

   1. **玩家胜利条件**。当所有敌方飞船被摧毁时，显示胜利信息。

      1. 首先，创建一个`displayMessage()`函数：

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. 创建一个`endGame()`函数：

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

   1. **重启逻辑**。当所有生命值耗尽或玩家赢得游戏时，显示游戏可以重启。此外，当按下“重启”键时重启游戏（你可以决定哪个键映射到重启）。

      1. 创建`resetGame()`函数：

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

     1. 在`initGame()`中调用`eventEmitter`以重置游戏：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. 为EventEmitter添加一个`clear()`函数：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 恭喜你，舰长！你的游戏已经完成！干得好！ 🚀 💥 👽

---

## 🚀 挑战

添加音效！你能为游戏添加音效以增强游戏体验吗？比如激光击中、英雄飞船被摧毁或赢得游戏时的音效？查看这个[sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play)，学习如何使用JavaScript播放音效。

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/40)

## 复习与自学

你的任务是创建一个全新的样本游戏，因此可以探索一些有趣的游戏，看看你可能会构建什么类型的游戏。

## 作业

[构建一个样本游戏](assignment.md)

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用此翻译而引起的任何误解或误读不承担责任。