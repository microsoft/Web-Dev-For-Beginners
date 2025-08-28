<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-23T22:51:46+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第5部分：得分和生命值

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/37)

在本课中，你将学习如何为游戏添加得分功能以及计算生命值。

## 在屏幕上绘制文本

为了能够在屏幕上显示游戏得分，你需要知道如何在屏幕上放置文本。答案是使用 canvas 对象的 `fillText()` 方法。你还可以控制其他方面，比如使用什么字体、文本的颜色，甚至是对齐方式（左对齐、右对齐、居中）。以下是一些在屏幕上绘制文本的代码。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ 阅读更多关于[如何在 canvas 上添加文本](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)的内容，并随意让你的文本看起来更有趣！

## 生命值，作为一种游戏概念

在游戏中，生命值的概念其实只是一个数字。在太空游戏的背景下，通常会分配一组生命值，当你的飞船受到伤害时，生命值会逐个减少。如果能用图形化的方式展示生命值，比如小飞船或心形图标，而不是简单的数字，那会更好。

## 要实现的功能

让我们为你的游戏添加以下内容：

- **游戏得分**：每摧毁一艘敌方飞船，英雄应该获得一些分数，我们建议每艘飞船奖励100分。游戏得分应显示在屏幕左下角。
- **生命值**：你的飞船有三条生命。每当一艘敌方飞船与你碰撞时，你会失去一条生命。生命值应显示在屏幕右下角，并由以下图形表示：![生命值图标](../../../../6-space-game/5-keeping-score/solution/assets/life.png)。

## 推荐步骤

找到在 `your-work` 子文件夹中为你创建的文件。它应该包含以下内容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

通过输入以下命令启动你的项目：

```bash
cd your-work
npm start
```

上述命令将在地址 `http://localhost:5000` 上启动一个 HTTP 服务器。打开浏览器并输入该地址，此时应该会渲染出英雄飞船和所有敌人飞船，并且当你按下左右箭头时，英雄飞船会移动并可以击落敌人。

### 添加代码

1. **复制所需资源**。将 `solution/assets/` 文件夹中的资源复制到 `your-work` 文件夹中；你需要添加一个 `life.png` 资源。在 `window.onload` 函数中添加 lifeImg：

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

2. 将 `lifeImg` 添加到资源列表中：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
3. **添加变量**。添加代码表示你的总得分（初始为0）和剩余生命值（初始为3），并在屏幕上显示这些分数。

4. **扩展 `updateGameObjects()` 函数**。扩展 `updateGameObjects()` 函数以处理敌人碰撞：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

5. **添加生命值和得分**。  
   1. **初始化变量**。在 `Hero` 类中的 `this.cooldown = 0` 下，设置生命值和得分：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   2. **在屏幕上绘制变量**。将这些值绘制到屏幕上：

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

   3. **将方法添加到游戏循环中**。确保在 `window.onload` 函数中将这些函数添加到 `updateGameObjects()` 下：

        ```javascript
        drawPoints();
        drawLife();
        ```

6. **实现游戏规则**。实现以下游戏规则：

   1. **每次英雄与敌人碰撞**，减少一条生命值。
   
      扩展 `Hero` 类以实现生命值扣减：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **每次激光击中敌人**，游戏得分增加100分。

      扩展 `Hero` 类以实现得分增加：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        将这些函数添加到碰撞事件触发器中：

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

✅ 进行一些研究，了解其他使用 JavaScript/Canvas 创建的游戏。它们有哪些共同特点？

完成这些工作后，你应该能在右下角看到小型“生命值”飞船，在左下角看到得分，并且当你与敌人碰撞时生命值会减少，当你击中敌人时得分会增加。干得好！你的游戏快完成了。

---

## 🚀 挑战

你的代码已经接近完成。你能设想接下来的步骤吗？

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/38)

## 复习与自学

研究一些方法，了解如何增加和减少游戏得分和生命值。有一些有趣的游戏引擎，比如 [PlayFab](https://playfab.com)。使用这些引擎如何提升你的游戏？

## 作业

[构建一个计分游戏](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用本翻译而引起的任何误解或误读不承担责任。