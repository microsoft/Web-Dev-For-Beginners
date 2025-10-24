<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T13:52:06+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian Phần 1: Giới thiệu

![Hoạt ảnh trò chơi không gian hiển thị gameplay](../../../../6-space-game/images/pewpew.gif)

Giống như trung tâm điều khiển của NASA phối hợp nhiều hệ thống trong một lần phóng tàu vũ trụ, chúng ta sẽ xây dựng một trò chơi không gian để minh họa cách các phần khác nhau của một chương trình có thể hoạt động cùng nhau một cách mượt mà. Trong khi tạo ra một thứ mà bạn thực sự có thể chơi, bạn sẽ học được các khái niệm lập trình cơ bản áp dụng cho bất kỳ dự án phần mềm nào.

Chúng ta sẽ khám phá hai cách tiếp cận cơ bản để tổ chức mã: kế thừa và thành phần. Đây không chỉ là các khái niệm học thuật – chúng là các mẫu thiết kế được sử dụng trong mọi thứ từ trò chơi điện tử đến hệ thống ngân hàng. Chúng ta cũng sẽ triển khai một hệ thống giao tiếp gọi là pub/sub, hoạt động giống như các mạng lưới giao tiếp được sử dụng trong tàu vũ trụ, cho phép các thành phần khác nhau chia sẻ thông tin mà không tạo ra sự phụ thuộc.

Kết thúc loạt bài này, bạn sẽ hiểu cách xây dựng các ứng dụng có thể mở rộng và phát triển – dù bạn đang phát triển trò chơi, ứng dụng web hay bất kỳ hệ thống phần mềm nào khác.

## Quiz trước bài giảng

[Quiz trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/29)

## Kế thừa và Thành phần trong Phát triển Trò chơi

Khi các dự án trở nên phức tạp hơn, việc tổ chức mã trở nên rất quan trọng. Những gì bắt đầu là một script đơn giản có thể trở nên khó duy trì nếu không có cấu trúc phù hợp – giống như cách các nhiệm vụ Apollo yêu cầu sự phối hợp cẩn thận giữa hàng ngàn thành phần.

Chúng ta sẽ khám phá hai cách tiếp cận cơ bản để tổ chức mã: kế thừa và thành phần. Mỗi cách có những lợi ích riêng, và việc hiểu cả hai giúp bạn chọn cách tiếp cận phù hợp cho từng tình huống. Chúng ta sẽ minh họa các khái niệm này thông qua trò chơi không gian của mình, nơi các anh hùng, kẻ thù, vật phẩm tăng cường sức mạnh và các đối tượng khác phải tương tác hiệu quả.

✅ Một trong những cuốn sách lập trình nổi tiếng nhất từng được viết liên quan đến [mẫu thiết kế](https://en.wikipedia.org/wiki/Design_Patterns).

Trong bất kỳ trò chơi nào, bạn có các `đối tượng trò chơi` – các yếu tố tương tác tạo nên thế giới trò chơi của bạn. Anh hùng, kẻ thù, vật phẩm tăng cường sức mạnh và hiệu ứng hình ảnh đều là các đối tượng trò chơi. Mỗi đối tượng tồn tại tại các tọa độ màn hình cụ thể sử dụng giá trị `x` và `y`, tương tự như việc vẽ điểm trên một mặt phẳng tọa độ.

Mặc dù có sự khác biệt về hình ảnh, các đối tượng này thường chia sẻ các hành vi cơ bản:

- **Chúng tồn tại ở đâu đó** – Mỗi đối tượng có tọa độ x và y để trò chơi biết nơi vẽ nó
- **Nhiều đối tượng có thể di chuyển** – Anh hùng chạy, kẻ thù đuổi theo, đạn bay qua màn hình
- **Chúng có vòng đời** – Một số tồn tại mãi mãi, những đối tượng khác (như vụ nổ) xuất hiện ngắn ngủi rồi biến mất
- **Chúng phản ứng với các sự kiện** – Khi các đối tượng va chạm, vật phẩm tăng cường sức mạnh được thu thập, thanh máu được cập nhật

✅ Hãy nghĩ về một trò chơi như Pac-Man. Bạn có thể xác định bốn loại đối tượng được liệt kê ở trên trong trò chơi này không?

### Thể hiện Hành vi Qua Mã

Bây giờ bạn đã hiểu các hành vi chung mà các đối tượng trò chơi chia sẻ, hãy khám phá cách triển khai các hành vi này trong JavaScript. Bạn có thể thể hiện hành vi của đối tượng thông qua các phương thức gắn với các lớp hoặc các đối tượng riêng lẻ, và có nhiều cách tiếp cận để lựa chọn.

**Cách Tiếp Cận Dựa Trên Lớp**

Các lớp và kế thừa cung cấp một cách tiếp cận có cấu trúc để tổ chức các đối tượng trò chơi. Giống như hệ thống phân loại sinh học được phát triển bởi Carl Linnaeus, bạn bắt đầu với một lớp cơ sở chứa các thuộc tính chung, sau đó tạo các lớp chuyên biệt kế thừa các yếu tố cơ bản này trong khi thêm các khả năng cụ thể.

✅ Kế thừa là một khái niệm quan trọng cần hiểu. Tìm hiểu thêm trong [bài viết của MDN về kế thừa](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Dưới đây là cách bạn có thể triển khai các đối tượng trò chơi bằng cách sử dụng các lớp và kế thừa:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Hãy phân tích từng bước:**
- Chúng ta đang tạo một mẫu cơ bản mà mọi đối tượng trò chơi có thể sử dụng
- Constructor lưu vị trí của đối tượng (`x`, `y`) và loại của nó
- Đây trở thành nền tảng mà tất cả các đối tượng trò chơi của bạn sẽ xây dựng trên đó

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**Trong đoạn mã trên, chúng ta đã:**
- **Mở rộng** lớp GameObject để thêm chức năng di chuyển
- **Gọi** constructor của lớp cha bằng `super()` để khởi tạo các thuộc tính được kế thừa
- **Thêm** phương thức `moveTo()` để cập nhật vị trí của đối tượng

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Hiểu các khái niệm này:**
- **Tạo** các loại đối tượng chuyên biệt kế thừa các hành vi phù hợp
- **Minh họa** cách kế thừa cho phép chọn lọc các tính năng
- **Cho thấy** rằng anh hùng có thể di chuyển trong khi cây cối vẫn đứng yên
- **Minh họa** cách hệ thống phân cấp lớp ngăn chặn các hành động không phù hợp

✅ Dành vài phút để hình dung lại một anh hùng Pac-Man (ví dụ như Inky, Pinky hoặc Blinky) và cách nó sẽ được viết trong JavaScript.

**Cách Tiếp Cận Thành Phần**

Thành phần tuân theo triết lý thiết kế mô-đun, tương tự như cách các kỹ sư thiết kế tàu vũ trụ với các thành phần có thể thay thế. Thay vì kế thừa từ một lớp cha, bạn kết hợp các hành vi cụ thể để tạo ra các đối tượng với chính xác các chức năng mà chúng cần. Cách tiếp cận này mang lại sự linh hoạt mà không bị ràng buộc bởi các hệ thống phân cấp cứng nhắc.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Đoạn mã này làm gì:**
- **Định nghĩa** một đối tượng cơ bản `gameObject` với các thuộc tính vị trí và loại
- **Tạo** một đối tượng hành vi `movable` riêng biệt với chức năng di chuyển
- **Tách biệt** các mối quan tâm bằng cách giữ dữ liệu vị trí và logic di chuyển độc lập

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**Trong đoạn mã trên, chúng ta đã:**
- **Kết hợp** các thuộc tính đối tượng cơ bản với hành vi di chuyển bằng cú pháp spread
- **Tạo** các hàm nhà máy trả về các đối tượng tùy chỉnh
- **Cho phép** tạo đối tượng linh hoạt mà không cần hệ thống phân cấp lớp cứng nhắc
- **Cho phép** các đối tượng có chính xác các hành vi mà chúng cần

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Những điểm chính cần nhớ:**
- **Kết hợp** các đối tượng bằng cách trộn các hành vi thay vì kế thừa chúng
- **Cung cấp** sự linh hoạt hơn so với các hệ thống phân cấp kế thừa cứng nhắc
- **Cho phép** các đối tượng có chính xác các tính năng mà chúng cần
- **Sử dụng** cú pháp spread hiện đại của JavaScript để kết hợp đối tượng một cách sạch sẽ
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Phân tích những gì xảy ra ở đây:**
- **Tạo** một hệ thống quản lý sự kiện trung tâm bằng cách sử dụng một lớp đơn giản
- **Lưu trữ** các listener trong một đối tượng được tổ chức theo loại thông báo
- **Đăng ký** các listener mới bằng phương thức `on()`
- **Phát** thông báo đến tất cả các listener quan tâm bằng phương thức `emit()`
- **Hỗ trợ** các payload dữ liệu tùy chọn để truyền thông tin liên quan

### Kết hợp Tất Cả: Một Ví Dụ Thực Tế

Được rồi, hãy xem điều này hoạt động như thế nào! Chúng ta sẽ xây dựng một hệ thống di chuyển đơn giản để minh họa cách pub/sub có thể sạch sẽ và linh hoạt:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Đoạn mã này làm gì:**
- **Định nghĩa** một đối tượng constants để tránh lỗi chính tả trong tên thông báo
- **Tạo** một instance của event emitter để xử lý tất cả giao tiếp
- **Khởi tạo** một đối tượng anh hùng tại vị trí bắt đầu

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**Trong đoạn mã trên, chúng ta đã:**
- **Đăng ký** các listener sự kiện phản hồi các thông báo di chuyển
- **Cập nhật** vị trí của anh hùng dựa trên hướng di chuyển
- **Thêm** console logging để theo dõi các thay đổi vị trí của anh hùng
- **Tách biệt** logic di chuyển khỏi xử lý đầu vào

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Hiểu các khái niệm này:**
- **Kết nối** đầu vào từ bàn phím với các sự kiện trò chơi mà không bị ràng buộc chặt chẽ
- **Cho phép** hệ thống đầu vào giao tiếp với các đối tượng trò chơi một cách gián tiếp
- **Cho phép** nhiều hệ thống phản hồi cùng một sự kiện bàn phím
- **Dễ dàng** thay đổi các phím hoặc thêm các phương pháp đầu vào mới

> 💡 **Mẹo chuyên nghiệp**: Vẻ đẹp của mẫu thiết kế này là sự linh hoạt! Bạn có thể dễ dàng thêm hiệu ứng âm thanh, rung màn hình hoặc hiệu ứng hạt chỉ bằng cách thêm nhiều listener sự kiện – không cần phải sửa đổi mã bàn phím hoặc di chuyển hiện có.
> 
**Tại sao bạn sẽ yêu thích cách tiếp cận này:**
- Việc thêm tính năng mới trở nên cực kỳ dễ dàng – chỉ cần lắng nghe các sự kiện bạn quan tâm
- Nhiều thứ có thể phản ứng với cùng một sự kiện mà không gây xung đột
- Việc kiểm tra trở nên đơn giản hơn vì mỗi phần hoạt động độc lập
- Khi có lỗi xảy ra, bạn biết chính xác nơi cần kiểm tra

### Tại sao Pub/Sub Mở Rộng Hiệu Quả

Mẫu thiết kế pub/sub duy trì sự đơn giản khi các ứng dụng trở nên phức tạp hơn. Dù quản lý hàng chục kẻ thù, cập nhật giao diện người dùng động hay hệ thống âm thanh, mẫu thiết kế này xử lý quy mô tăng lên mà không cần thay đổi kiến trúc. Các tính năng mới tích hợp vào hệ thống sự kiện hiện có mà không ảnh hưởng đến chức năng đã được thiết lập.

> ⚠️ **Lỗi thường gặp**: Đừng tạo quá nhiều loại thông báo cụ thể ngay từ đầu. Bắt đầu với các danh mục rộng và tinh chỉnh chúng khi nhu cầu của trò chơi trở nên rõ ràng.
> 
**Các thực hành tốt nhất cần tuân theo:**
- **Nhóm** các thông báo liên quan vào các danh mục logic
- **Sử dụng** tên mô tả rõ ràng điều gì đã xảy ra
- **Giữ** các payload thông báo đơn giản và tập trung
- **Tài liệu hóa** các loại thông báo của bạn để hợp tác nhóm

---

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Tạo một hệ thống đối tượng trò chơi đơn giản sử dụng cả kế thừa và mẫu thiết kế pub/sub. Bạn sẽ triển khai một trò chơi cơ bản nơi các đối tượng khác nhau có thể giao tiếp thông qua các sự kiện mà không biết trực tiếp về nhau.

**Yêu cầu:** Tạo một hệ thống trò chơi JavaScript với các yêu cầu sau: 1) Tạo một lớp GameObject cơ sở với tọa độ x, y và thuộc tính loại. 2) Tạo một lớp Hero mở rộng GameObject và có thể di chuyển. 3) Tạo một lớp Enemy mở rộng GameObject và có thể đuổi theo anh hùng. 4) Triển khai một lớp EventEmitter cho mẫu thiết kế pub/sub. 5) Thiết lập các listener sự kiện để khi anh hùng di chuyển, các kẻ thù gần đó nhận được sự kiện 'HERO_MOVED' và cập nhật vị trí của chúng để đuổi theo anh hùng. Bao gồm các câu lệnh console.log để hiển thị giao tiếp giữa các đối tượng.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## 🚀 Thử thách

Hãy xem xét cách mẫu thiết kế pub-sub có thể cải thiện kiến trúc trò chơi. Xác định các thành phần nào nên phát ra sự kiện và cách hệ thống nên phản hồi. Thiết kế một ý tưởng trò chơi và lập bản đồ các mẫu giao tiếp giữa các thành phần của nó.

## Quiz sau bài giảng

[Quiz sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/30)

## Ôn tập & Tự học

Tìm hiểu thêm về Pub/Sub bằng cách [đọc về nó](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Bài tập

[Phác thảo một trò chơi](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.