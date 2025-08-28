<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-27T22:36:43+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "vi"
}
-->
# Xây dựng Trò chơi Không gian Phần 4: Thêm Tia Laser và Phát hiện Va chạm

## Câu hỏi trước bài học

[Câu hỏi trước bài học](https://ff-quizzes.netlify.app/web/quiz/35)

Trong bài học này, bạn sẽ học cách bắn tia laser bằng JavaScript! Chúng ta sẽ thêm hai yếu tố vào trò chơi:

- **Tia laser**: tia laser này được bắn từ tàu của nhân vật chính và bay thẳng lên trên.
- **Phát hiện va chạm**, như một phần của việc triển khai khả năng *bắn*, chúng ta cũng sẽ thêm một số quy tắc trò chơi thú vị:
   - **Tia laser trúng kẻ thù**: Kẻ thù sẽ bị tiêu diệt nếu bị tia laser bắn trúng.
   - **Tia laser chạm đỉnh màn hình**: Tia laser sẽ bị phá hủy nếu chạm vào phần trên cùng của màn hình.
   - **Kẻ thù và nhân vật chính va chạm**: Kẻ thù và nhân vật chính sẽ bị phá hủy nếu va chạm với nhau.
   - **Kẻ thù chạm đáy màn hình**: Kẻ thù và nhân vật chính sẽ bị phá hủy nếu kẻ thù chạm vào đáy màn hình.

Tóm lại, bạn -- *nhân vật chính* -- cần bắn hạ tất cả kẻ thù bằng tia laser trước khi chúng kịp di chuyển xuống đáy màn hình.

✅ Hãy tìm hiểu một chút về trò chơi máy tính đầu tiên từng được viết. Chức năng của nó là gì?

Hãy cùng trở thành anh hùng nào!

## Phát hiện va chạm

Làm thế nào để phát hiện va chạm? Chúng ta cần nghĩ về các đối tượng trong trò chơi như những hình chữ nhật di chuyển. Tại sao lại như vậy? Bởi vì hình ảnh được sử dụng để vẽ một đối tượng trò chơi là một hình chữ nhật: nó có `x`, `y`, `width` và `height`.

Nếu hai hình chữ nhật, ví dụ như nhân vật chính và kẻ thù *giao nhau*, thì bạn có một va chạm. Điều gì xảy ra tiếp theo sẽ phụ thuộc vào các quy tắc của trò chơi. Để triển khai phát hiện va chạm, bạn cần:

1. Một cách để lấy đại diện hình chữ nhật của một đối tượng trò chơi, như sau:

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

2. Một hàm so sánh, hàm này có thể trông như sau:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Làm thế nào để phá hủy các đối tượng

Để phá hủy các đối tượng trong trò chơi, bạn cần thông báo cho trò chơi rằng nó không nên vẽ đối tượng này nữa trong vòng lặp trò chơi được kích hoạt theo một khoảng thời gian nhất định. Một cách để làm điều này là đánh dấu một đối tượng trò chơi là *đã chết* khi có điều gì đó xảy ra, như sau:

```javascript
// collision happened
enemy.dead = true
```

Sau đó, bạn có thể xử lý các đối tượng *đã chết* trước khi vẽ lại màn hình, như sau:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Làm thế nào để bắn tia laser

Bắn tia laser có nghĩa là phản hồi một sự kiện phím và tạo ra một đối tượng di chuyển theo một hướng nhất định. Vì vậy, chúng ta cần thực hiện các bước sau:

1. **Tạo một đối tượng tia laser**: từ đỉnh tàu của nhân vật chính, đối tượng này sẽ bắt đầu di chuyển lên trên về phía đỉnh màn hình ngay khi được tạo.
2. **Gắn mã vào một sự kiện phím**: chúng ta cần chọn một phím trên bàn phím để đại diện cho hành động bắn tia laser của người chơi.
3. **Tạo một đối tượng trò chơi trông giống như tia laser** khi phím được nhấn.

## Thời gian chờ cho tia laser

Tia laser cần được bắn mỗi khi bạn nhấn một phím, ví dụ như phím *space*. Để ngăn trò chơi tạo ra quá nhiều tia laser trong một khoảng thời gian ngắn, chúng ta cần khắc phục điều này. Cách khắc phục là triển khai một cái gọi là *thời gian chờ*, một bộ đếm thời gian, đảm bảo rằng tia laser chỉ có thể được bắn sau một khoảng thời gian nhất định. Bạn có thể triển khai điều này như sau:

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

✅ Tham khảo bài học 1 trong loạt bài trò chơi không gian để nhắc lại về *thời gian chờ*.

## Những gì cần xây dựng

Bạn sẽ sử dụng mã hiện có (mà bạn nên đã dọn dẹp và tái cấu trúc) từ bài học trước và mở rộng nó. Bắt đầu với mã từ phần II hoặc sử dụng mã tại [Phần III - khởi đầu](../../../../../../../../../your-work).

> mẹo: tia laser mà bạn sẽ làm việc đã có sẵn trong thư mục tài nguyên và được tham chiếu bởi mã của bạn.

- **Thêm phát hiện va chạm**, khi tia laser va chạm với một đối tượng, các quy tắc sau sẽ được áp dụng:
   1. **Tia laser trúng kẻ thù**: kẻ thù sẽ chết nếu bị tia laser bắn trúng.
   2. **Tia laser chạm đỉnh màn hình**: Tia laser sẽ bị phá hủy nếu chạm vào phần trên cùng của màn hình.
   3. **Kẻ thù và nhân vật chính va chạm**: kẻ thù và nhân vật chính sẽ bị phá hủy nếu va chạm với nhau.
   4. **Kẻ thù chạm đáy màn hình**: Kẻ thù và nhân vật chính sẽ bị phá hủy nếu kẻ thù chạm vào đáy màn hình.

## Các bước đề xuất

Tìm các tệp đã được tạo sẵn cho bạn trong thư mục con `your-work`. Nó sẽ chứa các tệp sau:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Bạn bắt đầu dự án trong thư mục `your_work` bằng cách gõ:

```bash
cd your-work
npm start
```

Lệnh trên sẽ khởi động một HTTP Server tại địa chỉ `http://localhost:5000`. Mở trình duyệt và nhập địa chỉ đó, hiện tại nó sẽ hiển thị nhân vật chính và tất cả kẻ thù, nhưng chưa có gì di chuyển cả :).

### Thêm mã

1. **Thiết lập đại diện hình chữ nhật cho đối tượng trò chơi để xử lý va chạm**. Mã dưới đây cho phép bạn lấy đại diện hình chữ nhật của một `GameObject`. Chỉnh sửa lớp GameObject của bạn để mở rộng nó:

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

2. **Thêm mã kiểm tra va chạm**. Đây sẽ là một hàm mới kiểm tra xem hai hình chữ nhật có giao nhau hay không:

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

3. **Thêm khả năng bắn tia laser**
   1. **Thêm thông báo sự kiện phím**. Phím *space* sẽ tạo ra một tia laser ngay phía trên tàu của nhân vật chính. Thêm ba hằng số vào đối tượng Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Xử lý phím space**. Chỉnh sửa hàm `window.addEventListener` keyup để xử lý phím space:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Thêm trình lắng nghe**. Chỉnh sửa hàm `initGame()` để đảm bảo rằng nhân vật chính có thể bắn khi phím space được nhấn:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       và thêm một hàm `eventEmitter.on()` mới để đảm bảo hành vi khi kẻ thù va chạm với tia laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Di chuyển đối tượng**, Đảm bảo rằng tia laser di chuyển dần lên đỉnh màn hình. Bạn sẽ tạo một lớp Laser mới mở rộng từ `GameObject`, như bạn đã làm trước đây: 
   
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

   1. **Xử lý va chạm**, Triển khai các quy tắc va chạm cho tia laser. Thêm một hàm `updateGameObjects()` để kiểm tra các đối tượng va chạm:

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

      Đảm bảo thêm `updateGameObjects()` vào vòng lặp trò chơi trong `window.onload`.

   4. **Triển khai thời gian chờ** cho tia laser, để nó chỉ có thể được bắn sau một khoảng thời gian nhất định.

      Cuối cùng, chỉnh sửa lớp Hero để nó có thể xử lý thời gian chờ:

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

Đến thời điểm này, trò chơi của bạn đã có một số chức năng! Bạn có thể di chuyển bằng các phím mũi tên, bắn tia laser bằng phím space, và kẻ thù sẽ biến mất khi bạn bắn trúng chúng. Làm tốt lắm!

---

## 🚀 Thử thách

Thêm hiệu ứng nổ! Hãy xem các tài nguyên trò chơi trong [kho Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) và thử thêm hiệu ứng nổ khi tia laser bắn trúng người ngoài hành tinh.

## Câu hỏi sau bài học

[Câu hỏi sau bài học](https://ff-quizzes.netlify.app/web/quiz/36)

## Ôn tập & Tự học

Thử nghiệm với các khoảng thời gian trong trò chơi của bạn cho đến nay. Điều gì xảy ra khi bạn thay đổi chúng? Đọc thêm về [các sự kiện thời gian trong JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Bài tập

[Khám phá va chạm](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.