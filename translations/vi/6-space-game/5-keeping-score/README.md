<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:34:15+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian Phần 5: Điểm số và Mạng sống

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/37)

Trong bài học này, bạn sẽ học cách thêm điểm số vào trò chơi và tính toán mạng sống.

## Vẽ văn bản lên màn hình

Để hiển thị điểm số trò chơi trên màn hình, bạn cần biết cách đặt văn bản lên màn hình. Câu trả lời là sử dụng phương thức `fillText()` trên đối tượng canvas. Bạn cũng có thể kiểm soát các yếu tố khác như phông chữ, màu sắc của văn bản và thậm chí cả căn chỉnh (trái, phải, giữa). Dưới đây là một đoạn mã vẽ văn bản lên màn hình.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Đọc thêm về [cách thêm văn bản vào canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), và thoải mái làm cho nó trông đẹp hơn!

## Mạng sống, như một khái niệm trong trò chơi

Khái niệm về mạng sống trong trò chơi chỉ là một con số. Trong bối cảnh trò chơi không gian, thường sẽ có một số mạng sống được gán và giảm dần từng mạng khi tàu của bạn bị hư hại. Sẽ rất hay nếu bạn có thể hiển thị một biểu tượng đồ họa như tàu nhỏ hoặc trái tim thay vì chỉ là một con số.

## Những gì cần xây dựng

Hãy thêm các yếu tố sau vào trò chơi của bạn:

- **Điểm số trò chơi**: Mỗi khi một tàu địch bị tiêu diệt, người chơi sẽ được thưởng điểm, chúng tôi gợi ý 100 điểm cho mỗi tàu. Điểm số trò chơi nên được hiển thị ở góc dưới bên trái.
- **Mạng sống**: Tàu của bạn có ba mạng sống. Bạn sẽ mất một mạng mỗi khi tàu địch va chạm với bạn. Điểm mạng sống nên được hiển thị ở góc dưới bên phải và được tạo từ biểu tượng sau ![hình ảnh mạng sống](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.vi.png).

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

Bạn bắt đầu dự án của mình trong thư mục `your_work` bằng cách gõ:

```bash
cd your-work
npm start
```

Lệnh trên sẽ khởi động một HTTP Server tại địa chỉ `http://localhost:5000`. Mở trình duyệt và nhập địa chỉ đó, hiện tại nó sẽ hiển thị tàu của bạn và tất cả các tàu địch, và khi bạn nhấn các phím mũi tên trái và phải, tàu của bạn sẽ di chuyển và có thể bắn hạ tàu địch.

### Thêm mã

1. **Sao chép các tài nguyên cần thiết** từ thư mục `solution/assets/` vào thư mục `your-work`; bạn sẽ thêm tài nguyên `life.png`. Thêm `lifeImg` vào hàm window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Thêm `lifeImg` vào danh sách tài nguyên:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Thêm biến**. Thêm mã đại diện cho tổng điểm (0) và số mạng sống còn lại (3), hiển thị các điểm số này trên màn hình.

3. **Mở rộng hàm `updateGameObjects()`**. Mở rộng hàm `updateGameObjects()` để xử lý va chạm với tàu địch:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Thêm `life` và `points`**. 
   1. **Khởi tạo biến**. Dưới `this.cooldown = 0` trong lớp `Hero`, đặt mạng sống và điểm số:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Vẽ biến lên màn hình**. Vẽ các giá trị này lên màn hình:

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

   1. **Thêm phương thức vào vòng lặp trò chơi**. Đảm bảo bạn thêm các hàm này vào hàm window.onload dưới `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Thực hiện quy tắc trò chơi**. Thực hiện các quy tắc trò chơi sau:

   1. **Mỗi lần tàu của bạn va chạm với tàu địch**, trừ đi một mạng sống.
   
      Mở rộng lớp `Hero` để thực hiện việc trừ mạng sống:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Mỗi lần tia laser bắn trúng tàu địch**, tăng điểm số trò chơi thêm 100 điểm.

      Mở rộng lớp Hero để thực hiện việc tăng điểm số:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Thêm các hàm này vào các Trình phát sự kiện va chạm:

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

✅ Nghiên cứu một chút để khám phá các trò chơi khác được tạo bằng JavaScript/Canvas. Những đặc điểm chung của chúng là gì?

Kết thúc công việc này, bạn sẽ thấy các tàu nhỏ 'mạng sống' ở góc dưới bên phải, điểm số ở góc dưới bên trái, và bạn sẽ thấy số mạng sống giảm khi va chạm với tàu địch và điểm số tăng khi bạn bắn hạ tàu địch. Làm tốt lắm! Trò chơi của bạn gần hoàn thành.

---

## 🚀 Thử thách

Mã của bạn gần hoàn thành. Bạn có thể hình dung bước tiếp theo của mình không?

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/38)

## Ôn tập & Tự học

Nghiên cứu một số cách bạn có thể tăng và giảm điểm số trò chơi và mạng sống. Có một số công cụ phát triển trò chơi thú vị như [PlayFab](https://playfab.com). Làm thế nào việc sử dụng một trong những công cụ này có thể cải thiện trò chơi của bạn?

## Bài tập

[Xây dựng trò chơi tính điểm](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.