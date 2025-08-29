<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T08:53:02+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian Phần 2: Vẽ nhân vật chính và quái vật lên Canvas

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Canvas là một phần tử HTML mặc định không có nội dung; nó giống như một tấm bảng trắng. Bạn cần thêm nội dung bằng cách vẽ lên nó.

✅ Đọc [thêm về Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) trên MDN.

Dưới đây là cách nó thường được khai báo, như một phần của phần thân trang:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Ở trên, chúng ta đang thiết lập các thuộc tính `id`, `width` và `height`.

- `id`: thiết lập để bạn có thể tham chiếu khi cần tương tác với nó.
- `width`: đây là chiều rộng của phần tử.
- `height`: đây là chiều cao của phần tử.

## Vẽ hình học đơn giản

Canvas sử dụng hệ tọa độ Cartesian để vẽ. Do đó, nó sử dụng trục x và trục y để biểu thị vị trí của một đối tượng. Vị trí `0,0` là góc trên bên trái và góc dưới bên phải là giá trị bạn đã đặt cho WIDTH và HEIGHT của canvas.

![lưới của canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.vi.png)  
> Hình ảnh từ [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Để vẽ lên phần tử canvas, bạn cần thực hiện các bước sau:

1. **Lấy tham chiếu** đến phần tử Canvas.
2. **Lấy tham chiếu** đến phần tử Context nằm trên phần tử Canvas.
3. **Thực hiện thao tác vẽ** bằng cách sử dụng phần tử Context.

Mã cho các bước trên thường trông như sau:

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

✅ Canvas API chủ yếu tập trung vào các hình dạng 2D, nhưng bạn cũng có thể vẽ các phần tử 3D lên trang web; để làm điều này, bạn có thể sử dụng [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Bạn có thể vẽ nhiều thứ khác nhau với Canvas API như:

- **Hình dạng hình học**, chúng ta đã chỉ cách vẽ một hình chữ nhật, nhưng còn nhiều thứ khác bạn có thể vẽ.
- **Văn bản**, bạn có thể vẽ văn bản với bất kỳ phông chữ và màu sắc nào bạn muốn.
- **Hình ảnh**, bạn có thể vẽ một hình ảnh từ một tài sản hình ảnh như .jpg hoặc .png chẳng hạn.

✅ Thử ngay! Bạn đã biết cách vẽ một hình chữ nhật, bạn có thể vẽ một hình tròn lên trang không? Hãy xem một số bản vẽ Canvas thú vị trên CodePen. Đây là một [ví dụ đặc biệt ấn tượng](https://codepen.io/dissimulate/pen/KrAwx).

## Tải và vẽ tài sản hình ảnh

Bạn tải một tài sản hình ảnh bằng cách tạo một đối tượng `Image` và thiết lập thuộc tính `src` của nó. Sau đó, bạn lắng nghe sự kiện `load` để biết khi nào nó sẵn sàng được sử dụng. Mã trông như sau:

### Tải tài sản

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Mẫu tải tài sản

Nên gói gọn đoạn mã trên trong một cấu trúc như sau để dễ sử dụng hơn và chỉ cố gắng thao tác khi nó đã được tải đầy đủ:

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

Để vẽ các tài sản trò chơi lên màn hình, mã của bạn sẽ trông như sau:

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

## Bây giờ là lúc bắt đầu xây dựng trò chơi của bạn

### Xây dựng gì

Bạn sẽ xây dựng một trang web với một phần tử Canvas. Nó sẽ hiển thị một màn hình đen `1024*768`. Chúng tôi đã cung cấp cho bạn hai hình ảnh:

- Tàu của nhân vật chính

   ![Tàu của nhân vật chính](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.vi.png)

- 5*5 quái vật

   ![Tàu quái vật](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.vi.png)

### Các bước khuyến nghị để bắt đầu phát triển

Tìm các tệp đã được tạo sẵn cho bạn trong thư mục con `your-work`. Nó sẽ chứa các tệp sau:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Mở bản sao của thư mục này trong Visual Studio Code. Bạn cần thiết lập một môi trường phát triển cục bộ, tốt nhất là với Visual Studio Code cùng NPM và Node đã được cài đặt. Nếu bạn chưa cài đặt `npm` trên máy tính của mình, [đây là cách thực hiện](https://www.npmjs.com/get-npm).

Bắt đầu dự án của bạn bằng cách điều hướng đến thư mục `your_work`:

```bash
cd your-work
npm start
```

Lệnh trên sẽ khởi động một HTTP Server tại địa chỉ `http://localhost:5000`. Mở trình duyệt và nhập địa chỉ đó. Hiện tại, trang vẫn trống, nhưng điều đó sẽ thay đổi.

> Lưu ý: để xem các thay đổi trên màn hình, hãy làm mới trình duyệt của bạn.

### Thêm mã

Thêm mã cần thiết vào `your-work/app.js` để giải quyết các yêu cầu dưới đây:

1. **Vẽ** một canvas với nền đen  
   > gợi ý: thêm hai dòng dưới TODO phù hợp trong `/app.js`, thiết lập phần tử `ctx` có màu đen và tọa độ trên/trái ở 0,0, chiều cao và chiều rộng bằng với canvas.
2. **Tải** các texture  
   > gợi ý: thêm hình ảnh của nhân vật chính và kẻ thù bằng cách sử dụng `await loadTexture` và truyền vào đường dẫn hình ảnh. Bạn sẽ chưa thấy chúng trên màn hình!
3. **Vẽ** nhân vật chính ở giữa màn hình, nửa dưới  
   > gợi ý: sử dụng API `drawImage` để vẽ heroImg lên màn hình, thiết lập `canvas.width / 2 - 45` và `canvas.height - canvas.height / 4)`.
4. **Vẽ** 5*5 quái vật  
   > gợi ý: Bây giờ bạn có thể bỏ ghi chú mã để vẽ kẻ thù lên màn hình. Tiếp theo, đi đến hàm `createEnemies` và xây dựng nó.

   Đầu tiên, thiết lập một số hằng số:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

   sau đó, tạo một vòng lặp để vẽ mảng quái vật lên màn hình:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Kết quả

Kết quả hoàn chỉnh sẽ trông như sau:

![Màn hình đen với nhân vật chính và 5*5 quái vật](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.vi.png)

## Giải pháp

Hãy thử tự giải quyết trước, nhưng nếu bạn gặp khó khăn, hãy xem [giải pháp](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Thử thách

Bạn đã học về vẽ với Canvas API tập trung vào 2D; hãy xem [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) và thử vẽ một đối tượng 3D.

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/32)

## Ôn tập & Tự học

Tìm hiểu thêm về Canvas API bằng cách [đọc thêm](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Bài tập

[Thử nghiệm với Canvas API](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.