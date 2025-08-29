<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T08:51:43+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "vi"
}
-->
# Xây dựng Trò chơi Không gian Phần 3: Thêm Chuyển động

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/33)

Trò chơi sẽ không thú vị nếu không có những người ngoài hành tinh di chuyển trên màn hình! Trong trò chơi này, chúng ta sẽ sử dụng hai loại chuyển động:

- **Chuyển động bằng bàn phím/chuột**: khi người dùng tương tác với bàn phím hoặc chuột để di chuyển một đối tượng trên màn hình.
- **Chuyển động do trò chơi điều khiển**: khi trò chơi tự động di chuyển một đối tượng theo một khoảng thời gian nhất định.

Vậy làm thế nào để di chuyển các đối tượng trên màn hình? Tất cả đều xoay quanh tọa độ Descartes: chúng ta thay đổi vị trí (x, y) của đối tượng và sau đó vẽ lại màn hình.

Thông thường, bạn cần các bước sau để thực hiện *chuyển động* trên màn hình:

1. **Đặt vị trí mới** cho một đối tượng; điều này cần thiết để người dùng cảm nhận rằng đối tượng đã di chuyển.
2. **Xóa màn hình**, màn hình cần được xóa giữa các lần vẽ. Chúng ta có thể xóa bằng cách vẽ một hình chữ nhật và tô màu nền.
3. **Vẽ lại đối tượng** tại vị trí mới. Bằng cách này, chúng ta cuối cùng đã di chuyển đối tượng từ vị trí này sang vị trí khác.

Dưới đây là cách nó có thể trông như thế trong mã:

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

✅ Bạn có thể nghĩ ra lý do tại sao việc vẽ lại nhân vật chính nhiều khung hình mỗi giây có thể gây ra chi phí hiệu suất không? Đọc thêm về [các giải pháp thay thế cho mẫu này](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Xử lý sự kiện bàn phím

Bạn xử lý sự kiện bằng cách gắn các sự kiện cụ thể vào mã. Các sự kiện bàn phím được kích hoạt trên toàn bộ cửa sổ, trong khi các sự kiện chuột như `click` có thể được kết nối với việc nhấp vào một phần tử cụ thể. Chúng ta sẽ sử dụng các sự kiện bàn phím trong suốt dự án này.

Để xử lý một sự kiện, bạn cần sử dụng phương thức `addEventListener()` của cửa sổ và cung cấp hai tham số đầu vào. Tham số đầu tiên là tên của sự kiện, ví dụ `keyup`. Tham số thứ hai là hàm sẽ được gọi khi sự kiện xảy ra.

Ví dụ:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Đối với các sự kiện phím, có hai thuộc tính trên sự kiện mà bạn có thể sử dụng để xem phím nào đã được nhấn:

- `key`, đây là biểu diễn dạng chuỗi của phím được nhấn, ví dụ `ArrowUp`.
- `keyCode`, đây là biểu diễn dạng số, ví dụ `37`, tương ứng với `ArrowLeft`.

✅ Việc thao tác với sự kiện phím rất hữu ích ngoài phát triển trò chơi. Bạn có thể nghĩ ra những ứng dụng nào khác cho kỹ thuật này?

### Các phím đặc biệt: một lưu ý

Có một số phím *đặc biệt* ảnh hưởng đến cửa sổ. Điều này có nghĩa là nếu bạn đang lắng nghe sự kiện `keyup` và sử dụng các phím đặc biệt này để di chuyển nhân vật chính, nó cũng sẽ thực hiện cuộn ngang. Vì lý do đó, bạn có thể muốn *tắt* hành vi mặc định của trình duyệt khi xây dựng trò chơi. Bạn cần mã như sau:

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

Đoạn mã trên sẽ đảm bảo rằng các phím mũi tên và phím cách có hành vi *mặc định* bị tắt. Cơ chế *tắt* xảy ra khi chúng ta gọi `e.preventDefault()`.

## Chuyển động do trò chơi điều khiển

Chúng ta có thể làm cho các đối tượng tự di chuyển bằng cách sử dụng các bộ hẹn giờ như hàm `setTimeout()` hoặc `setInterval()` để cập nhật vị trí của đối tượng theo mỗi lần đánh dấu thời gian. Dưới đây là ví dụ:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Vòng lặp trò chơi

Vòng lặp trò chơi là một khái niệm cơ bản, thực chất là một hàm được gọi theo các khoảng thời gian đều đặn. Nó được gọi là vòng lặp trò chơi vì mọi thứ cần hiển thị cho người dùng đều được vẽ trong vòng lặp này. Vòng lặp trò chơi sử dụng tất cả các đối tượng trò chơi là một phần của trò chơi, vẽ tất cả chúng trừ khi vì lý do nào đó chúng không còn là một phần của trò chơi nữa. Ví dụ, nếu một đối tượng là kẻ thù bị bắn bởi tia laser và phát nổ, nó sẽ không còn là một phần của vòng lặp trò chơi hiện tại (bạn sẽ học thêm về điều này trong các bài học tiếp theo).

Dưới đây là cách một vòng lặp trò chơi thường được biểu diễn trong mã:

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

Vòng lặp trên được gọi mỗi `200` mili giây để vẽ lại canvas. Bạn có thể chọn khoảng thời gian phù hợp nhất với trò chơi của mình.

## Tiếp tục Trò chơi Không gian

Bạn sẽ sử dụng mã hiện có và mở rộng nó. Hoặc bắt đầu với mã mà bạn đã hoàn thành trong phần I hoặc sử dụng mã trong [Phần II - khởi đầu](../../../../6-space-game/3-moving-elements-around/your-work).

- **Di chuyển nhân vật chính**: bạn sẽ thêm mã để đảm bảo bạn có thể di chuyển nhân vật chính bằng các phím mũi tên.
- **Di chuyển kẻ thù**: bạn cũng cần thêm mã để đảm bảo kẻ thù di chuyển từ trên xuống dưới với một tốc độ nhất định.

## Các bước được khuyến nghị

Tìm các tệp đã được tạo sẵn cho bạn trong thư mục con `your-work`. Nó sẽ chứa các tệp sau:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Bạn bắt đầu dự án trong thư mục `your_work` bằng cách nhập:

```bash
cd your-work
npm start
```

Lệnh trên sẽ khởi động một HTTP Server tại địa chỉ `http://localhost:5000`. Mở trình duyệt và nhập địa chỉ đó, hiện tại nó sẽ hiển thị nhân vật chính và tất cả kẻ thù; nhưng chưa có gì di chuyển - vẫn còn!

### Thêm mã

1. **Thêm các đối tượng chuyên biệt** cho `hero`, `enemy` và `game object`, chúng nên có các thuộc tính `x` và `y`. (Nhớ lại phần về [Kế thừa hoặc thành phần](../README.md)).

   *GỢI Ý* `game object` nên là đối tượng có `x` và `y` và khả năng tự vẽ lên canvas.

   >gợi ý: bắt đầu bằng cách thêm một lớp GameObject mới với constructor được định nghĩa như sau, sau đó vẽ nó lên canvas:
  
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

    Bây giờ, mở rộng GameObject để tạo Hero và Enemy.
    
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

2. **Thêm trình xử lý sự kiện phím** để xử lý việc di chuyển nhân vật chính (lên/xuống/trái/phải).

   *NHỚ* đây là hệ tọa độ Descartes, góc trên bên trái là `0,0`. Cũng nhớ thêm mã để dừng *hành vi mặc định*.

   >gợi ý: tạo hàm onKeyDown của bạn và gắn nó vào cửa sổ:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Kiểm tra bảng điều khiển trình duyệt của bạn tại thời điểm này và xem các phím được ghi lại.

3. **Triển khai** [Mẫu Pub sub](../README.md), điều này sẽ giữ cho mã của bạn sạch sẽ khi bạn tiếp tục các phần còn lại.

   Để thực hiện phần cuối này, bạn có thể:

   1. **Thêm một trình lắng nghe sự kiện** trên cửa sổ:

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

    1. **Tạo một lớp EventEmitter** để xuất bản và đăng ký các thông báo:

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

    1. **Thêm các hằng số** và thiết lập EventEmitter:

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

    1. **Khởi tạo trò chơi**

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

1. **Thiết lập vòng lặp trò chơi**

   Tái cấu trúc hàm window.onload để khởi tạo trò chơi và thiết lập vòng lặp trò chơi với khoảng thời gian phù hợp. Bạn cũng sẽ thêm một tia laser:

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

5. **Thêm mã** để di chuyển kẻ thù theo một khoảng thời gian nhất định.

    Tái cấu trúc hàm `createEnemies()` để tạo kẻ thù và đẩy chúng vào lớp gameObjects mới:

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
    
    và thêm hàm `createHero()` để thực hiện quy trình tương tự cho nhân vật chính.
    
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

    và cuối cùng, thêm hàm `drawGameObjects()` để bắt đầu vẽ:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Kẻ thù của bạn sẽ bắt đầu tiến về phía tàu vũ trụ của nhân vật chính!

---

## 🚀 Thử thách

Như bạn có thể thấy, mã của bạn có thể trở thành 'mã spaghetti' khi bạn bắt đầu thêm các hàm, biến và lớp. Làm thế nào bạn có thể tổ chức mã của mình tốt hơn để nó dễ đọc hơn? Phác thảo một hệ thống để tổ chức mã của bạn, ngay cả khi nó vẫn nằm trong một tệp.

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/34)

## Ôn tập & Tự học

Trong khi chúng ta đang viết trò chơi mà không sử dụng các framework, có rất nhiều framework canvas dựa trên JavaScript dành cho phát triển trò chơi. Dành thời gian để [đọc về chúng](https://github.com/collections/javascript-game-engines).

## Bài tập

[Bình luận mã của bạn](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.