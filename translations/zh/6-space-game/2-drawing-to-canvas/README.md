<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-23T22:57:55+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第二部分：将英雄和怪物绘制到画布上

## 课前测验

[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/31)

## 画布

画布是一个默认没有内容的HTML元素，它是一块空白的区域。你需要通过在上面绘制来添加内容。

✅ 阅读 [关于Canvas API的更多信息](https://developer.mozilla.org/docs/Web/API/Canvas_API)（MDN）。

以下是它通常的声明方式，作为页面主体的一部分：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

上面我们设置了`id`、`width`和`height`。

- `id`：设置这个属性以便在需要与其交互时获取引用。
- `width`：这是元素的宽度。
- `height`：这是元素的高度。

## 绘制简单几何图形

Canvas使用笛卡尔坐标系来绘制内容，因此它使用x轴和y轴来表示某物的位置。位置`0,0`是左上角，而右下角是你设置的画布的宽度和高度。

![画布的网格](../../../../6-space-game/2-drawing-to-canvas/canvas_grid.png)  
> 图片来源：[MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

要在画布元素上绘制内容，你需要完成以下步骤：

1. **获取引用**：获取Canvas元素的引用。
2. **获取引用**：获取位于Canvas元素上的Context元素的引用。
3. **执行绘制操作**：使用Context元素进行绘制。

上述步骤的代码通常如下所示：

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas API主要专注于2D形状，但你也可以在网页上绘制3D元素；为此，你可以使用 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)。

使用Canvas API可以绘制各种内容，例如：

- **几何图形**：我们已经展示了如何绘制矩形，但还有更多可以绘制的内容。
- **文本**：你可以绘制任何字体和颜色的文本。
- **图像**：你可以基于图像资源（例如.jpg或.png）绘制图像。

✅ 试试吧！你已经知道如何绘制矩形，能否尝试在页面上绘制一个圆？看看CodePen上的一些有趣的Canvas绘图。这里有一个[特别令人印象深刻的例子](https://codepen.io/dissimulate/pen/KrAwx)。

## 加载并绘制图像资源

通过创建一个`Image`对象并设置其`src`属性来加载图像资源。然后监听`load`事件以确定何时可以使用它。代码如下：

### 加载资源

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### 加载资源模式

建议将上述代码封装在一个结构中，这样更容易使用，并且只有在完全加载后才尝试操作它：

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

要将游戏资源绘制到屏幕上，代码如下：

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## 现在开始构建你的游戏

### 要构建什么

你将构建一个带有Canvas元素的网页。它应该渲染一个黑色屏幕，大小为`1024*768`。我们为你提供了两张图片：

- 英雄飞船

   ![英雄飞船](../../../../6-space-game/2-drawing-to-canvas/solution/assets/player.png)

- 5*5怪物

   ![怪物飞船](../../../../6-space-game/2-drawing-to-canvas/solution/assets/enemyShip.png)

### 推荐的开发步骤

找到在`your-work`子文件夹中为你创建的文件。它应该包含以下内容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

在Visual Studio Code中打开该文件夹的副本。你需要设置一个本地开发环境，最好是安装了Visual Studio Code、NPM和Node。如果你的电脑上没有设置`npm`，[这里是设置方法](https://www.npmjs.com/get-npm)。

通过导航到`your_work`文件夹开始你的项目：

```bash
cd your-work
npm start
```

上述操作将在地址`http://localhost:5000`上启动一个HTTP服务器。打开浏览器并输入该地址。现在是一个空白页面，但很快会有所变化。

> 注意：要在屏幕上看到更改，请刷新浏览器。

### 添加代码

在`your-work/app.js`中添加所需代码以完成以下任务：

1. **绘制**一个黑色背景的画布  
   > 提示：在`/app.js`中适当的TODO下添加两行代码，将`ctx`元素设置为黑色，并将顶部/左侧坐标设置为0,0，高度和宽度等于画布的大小。
2. **加载**纹理  
   > 提示：使用`await loadTexture`并传入图像路径来添加玩家和敌人的图像。你暂时还看不到它们出现在屏幕上！
3. **绘制**英雄到屏幕底部中央  
   > 提示：使用`drawImage` API将heroImg绘制到屏幕上，设置`canvas.width / 2 - 45`和`canvas.height - canvas.height / 4)`。
4. **绘制**5*5怪物  
   > 提示：现在你可以取消注释代码以在屏幕上绘制敌人。接下来，进入`createEnemies`函数并完成它。

   首先，设置一些常量：

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    然后，创建一个循环将怪物数组绘制到屏幕上：

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## 结果

完成后的结果应该如下所示：

![黑色屏幕，带有英雄和5*5怪物](../../../../6-space-game/2-drawing-to-canvas/partI-solution.png)

## 解决方案

请先尝试自己解决，但如果遇到困难，可以查看[解决方案](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)。

---

## 🚀 挑战

你已经学习了使用专注于2D的Canvas API进行绘图；看看 [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)，尝试绘制一个3D对象。

## 课后测验

[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/32)

## 复习与自学

通过[阅读相关内容](https://developer.mozilla.org/docs/Web/API/Canvas_API)了解更多关于Canvas API的信息。

## 作业

[尝试使用Canvas API](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。