<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T08:53:56+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "vi"
}
-->
# Xây dựng một trò chơi không gian Phần 1: Giới thiệu

![video](../../../../6-space-game/images/pewpew.gif)

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/29)

### Kế thừa và Thành phần trong phát triển trò chơi

Trong các bài học trước, bạn không cần phải lo lắng nhiều về kiến trúc thiết kế của các ứng dụng bạn xây dựng, vì các dự án đó có phạm vi rất nhỏ. Tuy nhiên, khi ứng dụng của bạn phát triển về kích thước và phạm vi, các quyết định kiến trúc trở thành một mối quan tâm lớn hơn. Có hai cách tiếp cận chính để tạo ra các ứng dụng lớn hơn trong JavaScript: *thành phần* hoặc *kế thừa*. Cả hai đều có ưu và nhược điểm, nhưng hãy cùng giải thích chúng trong bối cảnh của một trò chơi.

✅ Một trong những cuốn sách lập trình nổi tiếng nhất từng được viết liên quan đến [mẫu thiết kế](https://en.wikipedia.org/wiki/Design_Patterns).

Trong một trò chơi, bạn có các `đối tượng trò chơi`, là những đối tượng tồn tại trên màn hình. Điều này có nghĩa là chúng có một vị trí trong hệ tọa độ Descartes, được đặc trưng bởi tọa độ `x` và `y`. Khi bạn phát triển một trò chơi, bạn sẽ nhận thấy rằng tất cả các đối tượng trò chơi của bạn đều có một số thuộc tính tiêu chuẩn, chung cho mọi trò chơi bạn tạo ra, cụ thể là các yếu tố:

- **dựa trên vị trí** Hầu hết, nếu không muốn nói là tất cả, các yếu tố trong trò chơi đều dựa trên vị trí. Điều này có nghĩa là chúng có một vị trí, một `x` và một `y`.
- **có thể di chuyển** Đây là các đối tượng có thể di chuyển đến một vị trí mới. Thông thường, đây là một anh hùng, một con quái vật hoặc một NPC (nhân vật không phải người chơi), nhưng không phải, ví dụ, một đối tượng tĩnh như một cái cây.
- **tự hủy** Những đối tượng này chỉ tồn tại trong một khoảng thời gian nhất định trước khi chúng tự thiết lập để bị xóa. Thông thường, điều này được biểu thị bằng một boolean `dead` hoặc `destroyed` báo hiệu cho công cụ trò chơi rằng đối tượng này không nên được hiển thị nữa.
- **thời gian hồi chiêu** 'Thời gian hồi chiêu' là một thuộc tính điển hình của các đối tượng tồn tại ngắn hạn. Một ví dụ điển hình là một đoạn văn bản hoặc hiệu ứng đồ họa như một vụ nổ chỉ nên được nhìn thấy trong vài mili giây.

✅ Hãy nghĩ về một trò chơi như Pac-Man. Bạn có thể xác định bốn loại đối tượng được liệt kê ở trên trong trò chơi này không?

### Biểu diễn hành vi

Tất cả những gì chúng ta mô tả ở trên là hành vi mà các đối tượng trò chơi có thể có. Vậy làm thế nào để chúng ta mã hóa những hành vi đó? Chúng ta có thể biểu diễn hành vi này dưới dạng các phương thức liên kết với các lớp hoặc đối tượng.

**Lớp**

Ý tưởng là sử dụng `lớp` kết hợp với `kế thừa` để thêm một hành vi nhất định vào một lớp.

✅ Kế thừa là một khái niệm quan trọng cần hiểu. Tìm hiểu thêm tại [bài viết của MDN về kế thừa](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Được biểu diễn qua mã, một đối tượng trò chơi thường trông như thế này:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Dành vài phút để hình dung lại một anh hùng Pac-Man (ví dụ như Inky, Pinky hoặc Blinky) và cách nó sẽ được viết bằng JavaScript.

**Thành phần**

Một cách khác để xử lý kế thừa đối tượng là sử dụng *Thành phần*. Khi đó, các đối tượng biểu diễn hành vi của chúng như sau:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Tôi nên sử dụng mẫu nào?**

Tùy thuộc vào bạn chọn mẫu nào. JavaScript hỗ trợ cả hai mô hình này.

--

Một mẫu khác phổ biến trong phát triển trò chơi giải quyết vấn đề xử lý trải nghiệm người dùng và hiệu suất của trò chơi.

## Mẫu pub/sub

✅ Pub/Sub là viết tắt của 'publish-subscribe' (xuất bản-đăng ký)

Mẫu này giải quyết ý tưởng rằng các phần khác nhau của ứng dụng của bạn không nên biết về nhau. Tại sao lại như vậy? Điều này giúp bạn dễ dàng nhìn tổng thể hơn nếu các phần được tách biệt. Nó cũng giúp bạn dễ dàng thay đổi hành vi đột ngột nếu cần. Làm thế nào để chúng ta thực hiện điều này? Chúng ta làm điều này bằng cách thiết lập một số khái niệm:

- **thông điệp**: Một thông điệp thường là một chuỗi văn bản kèm theo một tải trọng tùy chọn (một phần dữ liệu làm rõ thông điệp nói về điều gì). Một thông điệp điển hình trong trò chơi có thể là `KEY_PRESSED_ENTER`.
- **nhà xuất bản**: Phần tử này *xuất bản* một thông điệp và gửi nó đến tất cả các thuê bao.
- **người đăng ký**: Phần tử này *lắng nghe* các thông điệp cụ thể và thực hiện một số tác vụ như kết quả của việc nhận thông điệp này, chẳng hạn như bắn tia laser.

Việc triển khai khá nhỏ gọn nhưng đây là một mẫu rất mạnh mẽ. Đây là cách nó có thể được triển khai:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Để sử dụng đoạn mã trên, chúng ta có thể tạo một triển khai rất nhỏ:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Ở trên, chúng ta kết nối một sự kiện bàn phím, `ArrowLeft` và gửi thông điệp `HERO_MOVE_LEFT`. Chúng ta lắng nghe thông điệp đó và di chuyển `hero` như một kết quả. Điểm mạnh của mẫu này là trình lắng nghe sự kiện và hero không biết về nhau. Bạn có thể ánh xạ lại `ArrowLeft` thành phím `A`. Ngoài ra, bạn có thể làm điều gì đó hoàn toàn khác trên `ArrowLeft` bằng cách thực hiện một vài chỉnh sửa trong hàm `on` của eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Khi mọi thứ trở nên phức tạp hơn khi trò chơi của bạn phát triển, mẫu này vẫn giữ nguyên độ phức tạp và mã của bạn vẫn sạch sẽ. Rất khuyến khích áp dụng mẫu này.

---

## 🚀 Thử thách

Hãy suy nghĩ về cách mẫu pub-sub có thể cải thiện một trò chơi. Những phần nào nên phát ra sự kiện, và trò chơi nên phản ứng như thế nào với chúng? Đây là cơ hội để bạn sáng tạo, nghĩ về một trò chơi mới và cách các phần của nó có thể hoạt động.

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/30)

## Ôn tập & Tự học

Tìm hiểu thêm về Pub/Sub bằng cách [đọc về nó](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Bài tập

[Phác thảo một trò chơi](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.