<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T14:45:45+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第三部分：添加运动

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/33)

游戏只有在屏幕上有外星人跑来跑去时才会变得有趣！在这个游戏中，我们将使用两种类型的运动：

- **键盘/鼠标运动**：当用户通过键盘或鼠标与屏幕上的对象交互时。
- **游戏驱动运动**：当游戏以一定的时间间隔移动对象时。

那么我们如何在屏幕上移动物体呢？这完全是关于笛卡尔坐标系的：我们改变对象的位置 (x, y)，然后重新绘制屏幕。

通常，你需要以下步骤来实现屏幕上的*运动*：

1. **设置新位置**：为对象设置一个新位置，这是让用户感知对象移动的必要步骤。
2. **清除屏幕**：在每次绘制之间需要清除屏幕。我们可以通过绘制一个填充背景色的矩形来清除屏幕。
3. **在新位置重新绘制对象**：通过这样做，我们最终实现了将对象从一个位置移动到另一个位置。

以下是代码示例：

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

✅ 你能想到为什么每秒多次重绘你的英雄可能会导致性能问题吗？阅读关于[这种模式的替代方案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)。

## 处理键盘事件

通过将特定事件附加到代码上来处理事件。键盘事件会在整个窗口上触发，而鼠标事件（如`click`）可以连接到点击特定元素。我们将在整个项目中使用键盘事件。

要处理事件，你需要使用窗口的`addEventListener()`方法，并提供两个输入参数。第一个参数是事件的名称，例如`keyup`。第二个参数是事件发生时应该调用的函数。

以下是一个示例：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

对于键盘事件，事件上有两个属性可以用来查看按下了哪个键：

- `key`：这是按下的键的字符串表示，例如`ArrowUp`。
- `keyCode`：这是按下的键的数字表示，例如`37`，对应于`ArrowLeft`。

✅ 键盘事件的操作在游戏开发之外也很有用。你能想到这种技术的其他用途吗？

### 特殊键：一个注意事项

有一些*特殊*键会影响窗口。这意味着如果你正在监听`keyup`事件，并使用这些特殊键移动你的英雄，它也会执行水平滚动。因此，在构建游戏时，你可能需要*关闭*这种内置的浏览器行为。你需要如下代码：

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

上述代码将确保箭头键和空格键的*默认*行为被关闭。*关闭*机制发生在调用`e.preventDefault()`时。

## 游戏驱动运动

我们可以通过使用计时器（例如`setTimeout()`或`setInterval()`函数）让物体自行移动，这些计时器会在每个时间间隔更新对象的位置。以下是代码示例：

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## 游戏循环

游戏循环是一个概念，实际上是一个以固定时间间隔调用的函数。它被称为游戏循环，因为所有应该显示给用户的内容都在循环中绘制。游戏循环利用游戏中的所有对象，绘制所有对象，除非某些对象不再属于游戏。例如，如果一个对象是被激光击中的敌人并爆炸，它就不再属于当前的游戏循环（你将在后续课程中了解更多）。

以下是一个典型的游戏循环代码示例：

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

上述循环每`200`毫秒调用一次以重绘画布。你可以选择适合你游戏的最佳时间间隔。

## 继续太空游戏

你将扩展现有代码。可以使用你在第一部分完成的代码，也可以使用[第二部分的起始代码](../../../../6-space-game/3-moving-elements-around/your-work)。

- **移动英雄**：你将添加代码以确保可以使用箭头键移动英雄。
- **移动敌人**：你还需要添加代码以确保敌人以一定速度从上到下移动。

## 推荐步骤

找到在`your-work`子文件夹中为你创建的文件。它应该包含以下内容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

通过输入以下命令启动你的项目：

```bash
cd your-work
npm start
```

上述命令将在地址`http://localhost:5000`上启动一个HTTP服务器。打开浏览器并输入该地址，现在它应该渲染英雄和所有敌人；目前还没有任何移动！

### 添加代码

1. **为`hero`、`enemy`和`game object`添加专用对象**，它们应该具有`x`和`y`属性。（记住关于[继承或组合](../README.md)的部分）。

   *提示*：`game object`应该是具有`x`和`y`属性并能够将自身绘制到画布上的对象。

   >提示：从添加一个新的GameObject类开始，其构造函数如下所示，然后将其绘制到画布上：
  
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

    现在，扩展这个GameObject以创建Hero和Enemy。
    
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

2. **添加键盘事件处理程序**以处理键盘导航（移动英雄上下左右）

   *记住*这是一个笛卡尔系统，左上角是`0,0`。还记得要添加代码以停止*默认行为*。

   >提示：创建你的onKeyDown函数并将其附加到窗口：

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   此时检查你的浏览器控制台，观察按键被记录。

3. **实现**[发布订阅模式](../README.md)，这将使你的代码在后续部分保持整洁。

   要完成最后这部分，你可以：

   1. **在窗口上添加事件监听器**：

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

    1. **创建一个EventEmitter类**以发布和订阅消息：

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

    1. **添加常量**并设置EventEmitter：

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

    1. **初始化游戏**

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

1. **设置游戏循环**

   重构window.onload函数以初始化游戏并以合适的时间间隔设置游戏循环。你还将添加一个激光束：

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

5. **添加代码**以使敌人以一定间隔移动

    重构`createEnemies()`函数以创建敌人并将它们推入新的gameObjects类：

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
    
    并添加一个`createHero()`函数以对英雄执行类似的过程。
    
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

    最后，添加一个`drawGameObjects()`函数以开始绘制：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    你的敌人应该开始向你的英雄飞船推进！

---

## 🚀 挑战

如你所见，当你开始添加函数、变量和类时，你的代码可能会变成“意大利面条代码”。你如何更好地组织代码，使其更易读？画出一个系统来组织你的代码，即使它仍然在一个文件中。

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/34)

## 复习与自学

虽然我们在没有使用框架的情况下编写游戏，但有许多基于JavaScript的画布框架可用于游戏开发。花些时间阅读[相关内容](https://github.com/collections/javascript-game-engines)。

## 作业

[为你的代码添加注释](assignment.md)

---

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。对于因使用本翻译而引起的任何误解或误读，我们概不负责。