<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-27T22:19:54+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "bg"
}
-->
# Създаване на космическа игра, част 2: Рисуване на герой и чудовища върху Canvas

## Предварителен тест

[Предварителен тест](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/31)

## Canvas

Canvas е HTML елемент, който по подразбиране няма съдържание; той е празно платно. Трябва да добавите съдържание, като рисувате върху него.

✅ Прочетете [повече за Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) на MDN.

Ето как обикновено се декларира като част от тялото на страницата:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Горе задаваме `id`, `width` и `height`.

- `id`: задайте го, за да можете да получите референция, когато трябва да взаимодействате с него.
- `width`: това е ширината на елемента.
- `height`: това е височината на елемента.

## Рисуване на прости геометрични фигури

Canvas използва картезианска координатна система за рисуване. Следователно използва x-ос и y-ос, за да изрази местоположението на нещо. Местоположението `0,0` е горният ляв ъгъл, а долният десен е това, което сте задали като WIDTH и HEIGHT на платното.

![мрежата на Canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.bg.png)  
> Изображение от [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

За да рисувате върху елемента Canvas, трябва да преминете през следните стъпки:

1. **Получете референция** към елемента Canvas.
1. **Получете референция** към елемента Context, който се намира върху Canvas.
1. **Извършете операция за рисуване** с помощта на елемента Context.

Кодът за горните стъпки обикновено изглежда така:

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

✅ Canvas API основно се фокусира върху 2D форми, но можете също да рисувате 3D елементи на уеб страница; за това може да използвате [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

С Canvas API можете да рисувате всякакви неща, като:

- **Геометрични фигури**: вече показахме как да нарисувате правоъгълник, но има много повече, което можете да нарисувате.
- **Текст**: можете да нарисувате текст с всякакъв шрифт и цвят, който пожелаете.
- **Изображения**: можете да нарисувате изображение, базирано на актив като .jpg или .png например.

✅ Опитайте! Знаете как да нарисувате правоъгълник, можете ли да нарисувате кръг на страницата? Разгледайте някои интересни рисунки с Canvas в CodePen. Ето [особено впечатляващ пример](https://codepen.io/dissimulate/pen/KrAwx).

## Зареждане и рисуване на изображение

Можете да заредите изображение, като създадете обект `Image` и зададете неговото свойство `src`. След това слушате събитието `load`, за да знаете кога е готово за използване. Кодът изглежда така:

### Зареждане на актив

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Шаблон за зареждане на актив

Препоръчително е да обвиете горното в конструкция като тази, за да е по-лесно за използване и да се опитате да го манипулирате само когато е напълно заредено:

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

За да нарисувате активи от играта на екрана, кодът ви би изглеждал така:

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

## Време е да започнете изграждането на вашата игра

### Какво да изградите

Ще изградите уеб страница с елемент Canvas. Тя трябва да показва черен екран с размери `1024*768`. Предоставили сме ви две изображения:

- Кораб на героя

   ![Кораб на героя](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.bg.png)

- 5*5 чудовища

   ![Кораб на чудовището](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.bg.png)

### Препоръчителни стъпки за започване на разработката

Намерете файловете, които са създадени за вас в подпапката `your-work`. Тя трябва да съдържа следното:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Отворете копие на тази папка в Visual Studio Code. Трябва да имате локална среда за разработка, за предпочитане с Visual Studio Code с NPM и Node инсталирани. Ако нямате `npm` настроен на вашия компютър, [ето как да го направите](https://www.npmjs.com/get-npm).

Започнете проекта си, като навигирате до папката `your_work`:

```bash
cd your-work
npm start
```

Горният код ще стартира HTTP сървър на адрес `http://localhost:5000`. Отворете браузър и въведете този адрес. В момента страницата е празна, но това ще се промени.

> Забележка: за да видите промените на екрана, обновете браузъра си.

### Добавяне на код

Добавете необходимия код към `your-work/app.js`, за да решите следното:

1. **Нарисувайте** Canvas с черен фон  
   > съвет: добавете два реда под съответния TODO в `/app.js`, задавайки елемента `ctx` да бъде черен, а горните/левите координати да са 0,0, а височината и ширината да съответстват на Canvas.
2. **Заредете** текстури  
   > съвет: добавете изображенията на играча и врага, използвайки `await loadTexture` и подавайки пътя на изображението. Все още няма да ги видите на екрана!
3. **Нарисувайте** героя в центъра на екрана в долната половина  
   > съвет: използвайте API `drawImage`, за да нарисувате heroImg на екрана, задавайки `canvas.width / 2 - 45` и `canvas.height - canvas.height / 4)`.
4. **Нарисувайте** 5*5 чудовища  
   > съвет: Сега можете да разкоментирате кода, за да нарисувате враговете на екрана. След това отидете до функцията `createEnemies` и я изградете.

   Първо, задайте някои константи:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    след това създайте цикъл, за да нарисувате масива от чудовища на екрана:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Резултат

Завършеният резултат трябва да изглежда така:

![Черен екран с герой и 5*5 чудовища](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.bg.png)

## Решение

Опитайте първо да го решите сами, но ако се затрудните, погледнете [решението](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Предизвикателство

Научихте за рисуването с 2D-фокусирания Canvas API; разгледайте [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) и опитайте да нарисувате 3D обект.

## Тест след лекцията

[Тест след лекцията](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/32)

## Преглед и самостоятелно обучение

Научете повече за Canvas API, като [прочетете за него](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Задание

[Играйте с Canvas API](assignment.md)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматичните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия изходен език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален превод от човек. Ние не носим отговорност за каквито и да е недоразумения или погрешни интерпретации, произтичащи от използването на този превод.