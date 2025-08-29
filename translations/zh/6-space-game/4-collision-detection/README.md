<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T14:46:26+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第四部分：添加激光和检测碰撞

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/35)

在本课中，你将学习如何使用 JavaScript 发射激光！我们将为游戏添加以下两项内容：

- **激光**：从英雄的飞船发射，垂直向上移动。
- **碰撞检测**：作为实现射击功能的一部分，我们还会添加一些有趣的游戏规则：
   - **激光击中敌人**：敌人被激光击中后会死亡。
   - **激光击中屏幕顶部**：激光击中屏幕顶部后会被销毁。
   - **敌人与英雄碰撞**：敌人与英雄相撞后双方都会被销毁。
   - **敌人到达屏幕底部**：敌人到达屏幕底部后，敌人和英雄都会被销毁。

简而言之，你——*英雄*——需要在敌人到达屏幕底部之前用激光击中所有敌人。

✅ 研究一下历史上第一个计算机游戏的功能是什么？

让我们一起成为英雄吧！

## 碰撞检测

如何进行碰撞检测？我们需要将游戏中的对象视为移动的矩形。为什么要这样做呢？因为用于绘制游戏对象的图像是一个矩形：它有 `x`、`y`、`width` 和 `height`。

如果两个矩形（例如英雄和敌人）*相交*，就发生了碰撞。碰撞后应该发生什么取决于游戏规则。为了实现碰撞检测，你需要以下内容：

1. 获取游戏对象的矩形表示方法，例如：

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

2. 比较函数，这个函数可以像这样：

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## 如何销毁对象

在游戏中销毁对象需要让游戏知道在某个时间间隔触发的游戏循环中不再绘制该对象。实现方法是当某些事件发生时将游戏对象标记为*死亡*，例如：

```javascript
// collision happened
enemy.dead = true
```

然后在重新绘制屏幕之前处理*死亡*对象，例如：

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## 如何发射激光

发射激光意味着响应按键事件并创建一个向某个方向移动的对象。因此，我们需要完成以下步骤：

1. **创建激光对象**：从英雄飞船顶部发射，创建后开始向屏幕顶部移动。
2. **绑定按键事件代码**：选择键盘上的某个按键来代表玩家发射激光。
3. **创建一个看起来像激光的游戏对象**：当按键被按下时。

## 激光的冷却时间

激光需要在每次按键时发射，例如按下*空格键*。为了防止游戏在短时间内生成过多激光，我们需要解决这个问题。解决方法是实现所谓的*冷却时间*，即一个计时器，确保激光只能以一定频率发射。可以这样实现：

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

✅ 回顾太空游戏系列第一课，了解有关*冷却时间*的内容。

## 要构建的内容

你将使用上一课中清理和重构过的代码进行扩展。可以从第二部分的代码开始，也可以使用[第三部分的起始代码](../../../../../../../../../your-work)。

> 提示：你将使用的激光已经在你的资源文件夹中，并且代码中已经引用了它。

- **添加碰撞检测**：当激光与某物体碰撞时，应该遵循以下规则：
   1. **激光击中敌人**：敌人被激光击中后会死亡。
   2. **激光击中屏幕顶部**：激光击中屏幕顶部后会被销毁。
   3. **敌人与英雄碰撞**：敌人与英雄相撞后双方都会被销毁。
   4. **敌人到达屏幕底部**：敌人到达屏幕底部后，敌人和英雄都会被销毁。

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

通过输入以下命令启动项目：

```bash
cd your-work
npm start
```

上述命令将在地址 `http://localhost:5000` 上启动一个 HTTP 服务器。打开浏览器并输入该地址，目前应该可以渲染英雄和所有敌人，但它们还不会移动。

### 添加代码

1. **设置游戏对象的矩形表示方法以处理碰撞** 以下代码允许你获取 `GameObject` 的矩形表示方法。编辑你的 GameObject 类以扩展它：

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

2. **添加检测碰撞的代码** 这是一个新函数，用于测试两个矩形是否相交：

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

3. **添加激光发射功能**
   1. **添加按键事件消息**。按下*空格键*时应该在英雄飞船上方创建一个激光。为 Messages 对象添加三个常量：

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **处理空格键**。编辑 `window.addEventListener` 的 keyup 函数以处理空格键：

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **添加监听器**。编辑 `initGame()` 函数以确保按下空格键时英雄可以发射激光：

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       并添加一个新的 `eventEmitter.on()` 函数以确保当敌人与激光碰撞时的行为：

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **移动对象**，确保激光逐渐移动到屏幕顶部。你将创建一个新的 Laser 类，继承 `GameObject`，如之前所做：

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

   1. **处理碰撞**，实现激光的碰撞规则。添加一个 `updateGameObjects()` 函数，用于测试碰撞对象是否发生击中：

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

      确保在 `window.onload` 的游戏循环中添加 `updateGameObjects()`。

   4. **实现激光的冷却时间**，确保激光只能以一定频率发射。

      最后，编辑 Hero 类以实现冷却功能：

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

到此为止，你的游戏已经具备了一些功能！你可以使用箭头键导航，用空格键发射激光，并且击中敌人时敌人会消失。干得好！

---

## 🚀 挑战

添加爆炸效果！查看[太空艺术资源库](../../../../6-space-game/solution/spaceArt/readme.txt)中的游戏资源，尝试在激光击中外星人时添加爆炸效果。

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/36)

## 复习与自学

尝试调整游戏中的时间间隔，观察会发生什么变化？阅读更多关于[JavaScript 定时事件](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)的内容。

## 作业

[探索碰撞](assignment.md)

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。对于因使用本翻译而引起的任何误解或误读，我们概不负责。