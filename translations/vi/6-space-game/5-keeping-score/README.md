<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T13:52:40+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian Phần 5: Điểm số và mạng sống

## Câu hỏi trước bài giảng

[Quiz trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/37)

Sẵn sàng làm cho trò chơi không gian của bạn trở nên giống một trò chơi thực sự chưa? Hãy thêm hệ thống điểm số và quản lý mạng sống - những cơ chế cốt lõi đã biến các trò chơi arcade đầu tiên như Space Invaders từ những màn trình diễn đơn giản thành những trò chơi gây nghiện. Đây là lúc trò chơi của bạn trở nên thực sự hấp dẫn.

## Hiển thị văn bản trên màn hình - Giọng nói của trò chơi

Để hiển thị điểm số, chúng ta cần học cách vẽ văn bản trên canvas. Phương pháp `fillText()` là công cụ chính của bạn - đây là kỹ thuật được sử dụng trong các trò chơi arcade cổ điển để hiển thị điểm số và thông tin trạng thái.

Bạn có toàn quyền kiểm soát về cách hiển thị văn bản:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Tìm hiểu sâu hơn về [cách thêm văn bản vào canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - bạn có thể ngạc nhiên với sự sáng tạo mà bạn có thể đạt được với phông chữ và kiểu dáng!

## Mạng sống - Không chỉ là một con số

Trong thiết kế trò chơi, "mạng sống" đại diện cho khả năng mắc lỗi của người chơi. Khái niệm này bắt nguồn từ máy pinball, nơi bạn có nhiều quả bóng để chơi. Trong các trò chơi video đầu tiên như Asteroids, mạng sống cho phép người chơi mạo hiểm và học hỏi từ sai lầm.

Việc hiển thị trực quan rất quan trọng - hiển thị biểu tượng tàu thay vì chỉ "Lives: 3" tạo ra sự nhận diện trực quan ngay lập tức, giống như cách các máy arcade cổ điển sử dụng biểu tượng để giao tiếp vượt qua rào cản ngôn ngữ.

## Xây dựng hệ thống phần thưởng của trò chơi

Bây giờ chúng ta sẽ triển khai các hệ thống phản hồi cốt lõi để giữ người chơi tham gia:

- **Hệ thống điểm số**: Mỗi tàu địch bị tiêu diệt sẽ thưởng 100 điểm (số tròn dễ tính toán hơn cho người chơi). Điểm số sẽ hiển thị ở góc dưới bên trái.
- **Bộ đếm mạng sống**: Nhân vật chính của bạn bắt đầu với ba mạng sống - một tiêu chuẩn được thiết lập bởi các trò chơi arcade đầu tiên để cân bằng giữa thử thách và khả năng chơi. Mỗi lần va chạm với kẻ địch sẽ mất một mạng sống. Chúng ta sẽ hiển thị số mạng sống còn lại ở góc dưới bên phải bằng biểu tượng tàu ![hình ảnh mạng sống](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.vi.png).

## Bắt đầu xây dựng!

Đầu tiên, thiết lập không gian làm việc của bạn. Điều hướng đến các tệp trong thư mục con `your-work`. Bạn sẽ thấy các tệp sau:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Để kiểm tra trò chơi của bạn, hãy khởi động máy chủ phát triển từ thư mục `your_work`:

```bash
cd your-work
npm start
```

Điều này sẽ chạy một máy chủ cục bộ tại `http://localhost:5000`. Mở địa chỉ này trong trình duyệt của bạn để xem trò chơi. Kiểm tra các điều khiển bằng phím mũi tên và thử bắn kẻ địch để xác minh mọi thứ hoạt động.

### Bắt đầu viết mã!

1. **Lấy các tài sản hình ảnh cần thiết**. Sao chép tài sản `life.png` từ thư mục `solution/assets/` vào thư mục `your-work`. Sau đó thêm lifeImg vào hàm window.onload của bạn:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Đừng quên thêm `lifeImg` vào danh sách tài sản của bạn:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Thiết lập các biến trò chơi của bạn**. Thêm một số mã để theo dõi tổng điểm của bạn (bắt đầu từ 0) và số mạng sống còn lại (bắt đầu từ 3). Chúng ta sẽ hiển thị những thông tin này trên màn hình để người chơi luôn biết tình hình của mình.

3. **Triển khai phát hiện va chạm**. Mở rộng hàm `updateGameObjects()` của bạn để phát hiện khi kẻ địch va chạm với nhân vật chính:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Thêm theo dõi mạng sống và điểm số vào nhân vật chính**. 
   1. **Khởi tạo các bộ đếm**. Dưới `this.cooldown = 0` trong lớp `Hero`, thiết lập mạng sống và điểm số:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Hiển thị các giá trị này cho người chơi**. Tạo các hàm để vẽ các giá trị này trên màn hình:

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

   1. **Kết nối mọi thứ vào vòng lặp trò chơi của bạn**. Thêm các hàm này vào hàm window.onload ngay sau `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Triển khai hậu quả và phần thưởng trong trò chơi**. Bây giờ chúng ta sẽ thêm các hệ thống phản hồi làm cho hành động của người chơi trở nên ý nghĩa:

   1. **Va chạm làm mất mạng sống**. Mỗi lần nhân vật chính của bạn va chạm với kẻ địch, bạn sẽ mất một mạng sống.
   
      Thêm phương thức này vào lớp `Hero` của bạn:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Bắn kẻ địch kiếm điểm**. Mỗi lần bắn trúng thành công sẽ thưởng 100 điểm, cung cấp phản hồi tích cực ngay lập tức cho việc bắn chính xác.

      Mở rộng lớp Hero của bạn với phương thức tăng điểm này:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Bây giờ kết nối các hàm này với các sự kiện va chạm:

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

✅ Tò mò về các trò chơi khác được xây dựng bằng JavaScript và Canvas? Hãy khám phá - bạn có thể ngạc nhiên với những gì có thể thực hiện được!

Sau khi triển khai các tính năng này, hãy kiểm tra trò chơi của bạn để xem hệ thống phản hồi hoàn chỉnh hoạt động. Bạn sẽ thấy biểu tượng mạng sống ở góc dưới bên phải, điểm số của bạn ở góc dưới bên trái, và quan sát khi va chạm làm giảm mạng sống trong khi bắn trúng tăng điểm số.

Trò chơi của bạn bây giờ đã có các cơ chế cốt lõi làm cho các trò chơi arcade đầu tiên trở nên hấp dẫn - mục tiêu rõ ràng, phản hồi ngay lập tức, và hậu quả ý nghĩa cho hành động của người chơi.

---

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Nâng cấp hệ thống điểm số của trò chơi không gian bằng cách triển khai tính năng điểm cao với lưu trữ lâu dài và cơ chế thưởng điểm.

**Yêu cầu:** Tạo hệ thống điểm cao lưu điểm cao nhất của người chơi vào localStorage. Thêm điểm thưởng cho việc tiêu diệt liên tiếp kẻ địch (hệ thống combo) và triển khai các giá trị điểm khác nhau cho các loại kẻ địch khác nhau. Bao gồm một chỉ báo trực quan khi người chơi đạt điểm cao mới và hiển thị điểm cao hiện tại trên màn hình trò chơi.

## 🚀 Thử thách

Bây giờ bạn đã có một trò chơi hoạt động với điểm số và mạng sống. Hãy cân nhắc những tính năng bổ sung nào có thể cải thiện trải nghiệm của người chơi.

## Câu hỏi sau bài giảng

[Quiz sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/38)

## Ôn tập & Tự học

Muốn khám phá thêm? Nghiên cứu các cách tiếp cận khác nhau đối với hệ thống điểm số và mạng sống trong trò chơi. Có những công cụ game engine thú vị như [PlayFab](https://playfab.com) xử lý điểm số, bảng xếp hạng, và tiến trình của người chơi. Việc tích hợp một công cụ như vậy có thể đưa trò chơi của bạn lên một tầm cao mới như thế nào?

## Bài tập

[Xây dựng trò chơi tính điểm](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.