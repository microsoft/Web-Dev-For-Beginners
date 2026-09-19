# Xây dựng ứng dụng ngân hàng Phần 4: Khái niệm về Quản lý trạng thái

## ⚡ Những gì bạn có thể làm trong 5 phút tiếp theo

**Lộ trình bắt đầu nhanh dành cho các nhà phát triển bận rộn**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Diagnose state issues]
    B --> C[Create central state object]
    C --> D[Add updateState function]
    D --> E[See immediate improvements]
```

- **Phút 1**: Kiểm tra vấn đề trạng thái hiện tại - đăng nhập, làm mới trang, quan sát trạng thái đăng xuất
- **Phút 2**: Thay thế `let account = null` bằng `let state = { account: null }`
- **Phút 3**: Tạo một hàm `updateState()` đơn giản để cập nhật có kiểm soát
- **Phút 4**: Cập nhật một hàm để sử dụng mẫu mới
- **Phút 5**: Kiểm tra khả năng dự đoán và gỡ lỗi được cải thiện

**Kiểm tra chẩn đoán nhanh**:
```javascript
// Before: Scattered state
let account = null; // Lost on refresh!

// After: Centralized state
let state = Object.freeze({ account: null }); // Controlled and trackable!
```

**Tại sao điều này quan trọng**: Trong 5 phút, bạn sẽ trải nghiệm sự chuyển đổi từ quản lý trạng thái hỗn loạn sang các mẫu dự đoán và dễ gỡ lỗi. Đây là nền tảng giúp các ứng dụng phức tạp trở nên dễ duy trì.

## 🗺️ Hành trình học tập của bạn qua việc làm chủ quản lý trạng thái

```mermaid
journey
    title From Scattered State to Professional Architecture
    section Diagnosing Problems
      Identify state loss issues: 3: You
      Understand scattered updates: 4: You
      Recognize architecture needs: 6: You
    section Centralizing Control
      Create unified state object: 5: You
      Implement controlled updates: 7: You
      Add immutable patterns: 8: You
    section Adding Persistence
      Implement localStorage: 6: You
      Handle serialization: 7: You
      Create session continuity: 9: You
    section Balancing Freshness
      Address data staleness: 5: You
      Build refresh systems: 8: You
      Achieve optimal balance: 9: You
```

**Điểm đến của hành trình của bạn**: Đến cuối bài học này, bạn sẽ xây dựng được một hệ thống quản lý trạng thái chuyên nghiệp xử lý sự duy trì, độ mới của dữ liệu và cập nhật dự đoán - các mẫu tương tự được sử dụng trong các ứng dụng sản xuất.

## Câu hỏi kiểm tra trước bài giảng

[Câu hỏi kiểm tra trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/47)

## Giới thiệu

Quản lý trạng thái giống như hệ thống điều hướng trên tàu vũ trụ Voyager – khi mọi thứ hoạt động trơn tru, bạn hầu như không nhận ra nó tồn tại. Nhưng khi có vấn đề xảy ra, nó trở thành sự khác biệt giữa việc đạt đến không gian liên sao và trôi dạt mất phương hướng trong vũ trụ. Trong phát triển web, trạng thái đại diện cho tất cả những gì ứng dụng của bạn cần nhớ: trạng thái đăng nhập của người dùng, dữ liệu biểu mẫu, lịch sử điều hướng và trạng thái giao diện tạm thời.

Khi ứng dụng ngân hàng của bạn đã phát triển từ một biểu mẫu đăng nhập đơn giản thành một ứng dụng phức tạp hơn, bạn có thể đã gặp phải một số thách thức phổ biến. Làm mới trang và người dùng bị đăng xuất một cách bất ngờ. Đóng trình duyệt và tất cả tiến trình biến mất. Gỡ lỗi một vấn đề và bạn phải tìm kiếm qua nhiều hàm khác nhau, tất cả đều sửa đổi cùng một dữ liệu theo các cách khác nhau.

Đây không phải là dấu hiệu của việc lập trình kém – chúng là những khó khăn tự nhiên xảy ra khi các ứng dụng đạt đến một ngưỡng phức tạp nhất định. Mỗi nhà phát triển đều phải đối mặt với những thách thức này khi ứng dụng của họ chuyển từ "bằng chứng khái niệm" sang "sẵn sàng sản xuất."

Trong bài học này, chúng ta sẽ triển khai một hệ thống quản lý trạng thái tập trung, biến ứng dụng ngân hàng của bạn thành một ứng dụng chuyên nghiệp và đáng tin cậy. Bạn sẽ học cách quản lý luồng dữ liệu một cách dự đoán, duy trì phiên người dùng một cách phù hợp và tạo ra trải nghiệm người dùng mượt mà mà các ứng dụng web hiện đại yêu cầu.

## Yêu cầu trước

Trước khi đi sâu vào các khái niệm quản lý trạng thái, bạn cần thiết lập môi trường phát triển của mình đúng cách và có nền tảng ứng dụng ngân hàng của bạn. Bài học này xây dựng trực tiếp trên các khái niệm và mã từ các phần trước của loạt bài này.

Hãy đảm bảo bạn có các thành phần sau sẵn sàng trước khi tiếp tục:

**Thiết lập cần thiết:**
- Hoàn thành bài học [lấy dữ liệu](../3-data/README.md) - ứng dụng của bạn nên tải và hiển thị dữ liệu tài khoản thành công
- Cài đặt [Node.js](https://nodejs.org) trên hệ thống của bạn để chạy API backend
- Khởi động [API server](../api/README.md) cục bộ để xử lý các thao tác dữ liệu tài khoản

**Kiểm tra môi trường của bạn:**

Xác minh rằng API server của bạn đang chạy đúng cách bằng cách thực hiện lệnh này trong terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Lệnh này làm gì:**
- **Gửi** yêu cầu GET đến API server cục bộ của bạn
- **Kiểm tra** kết nối và xác minh server đang phản hồi
- **Trả về** thông tin phiên bản API nếu mọi thứ hoạt động đúng cách

## 🧠 Tổng quan về Kiến trúc Quản lý Trạng thái

```mermaid
mindmap
  root((State Management))
    Current Problems
      Session Loss
        Page Refresh Issues
        Browser Close Impact
        Variable Reset Problems
      Scattered Updates
        Multiple Modification Points
        Debugging Challenges
        Unpredictable Behavior
      Incomplete Cleanup
        Logout State Issues
        Memory Leaks
        Security Concerns
    Centralized Solutions
      Unified State Object
        Single Source of Truth
        Predictable Structure
        Scalable Foundation
      Controlled Updates
        Immutable Patterns
        Object.freeze Usage
        Function-Based Changes
      State Tracking
        History Management
        Debug Visibility
        Change Auditing
    Persistence Strategies
      localStorage Integration
        Session Continuity
        JSON Serialization
        Automatic Sync
      Data Freshness
        Server Refresh
        Stale Data Handling
        Balance Optimization
      Storage Optimization
        Minimal Data
        Performance Focus
        Security Considerations
```

**Nguyên tắc cốt lõi**: Quản lý trạng thái chuyên nghiệp cân bằng giữa tính dự đoán, sự duy trì và hiệu suất để tạo ra trải nghiệm người dùng đáng tin cậy, có thể mở rộng từ các tương tác đơn giản đến các luồng công việc ứng dụng phức tạp.

---

## Chẩn đoán các vấn đề trạng thái hiện tại

Giống như Sherlock Holmes kiểm tra hiện trường vụ án, chúng ta cần hiểu chính xác điều gì đang xảy ra trong triển khai hiện tại của mình trước khi có thể giải quyết bí ẩn về các phiên người dùng biến mất.

Hãy thực hiện một thử nghiệm đơn giản để tiết lộ các thách thức quản lý trạng thái cơ bản:

**🧪 Thử nghiệm chẩn đoán này:**
1. Đăng nhập vào ứng dụng ngân hàng của bạn và điều hướng đến bảng điều khiển
2. Làm mới trang trình duyệt
3. Quan sát điều gì xảy ra với trạng thái đăng nhập của bạn

Nếu bạn bị chuyển hướng trở lại màn hình đăng nhập, bạn đã phát hiện ra vấn đề duy trì trạng thái kinh điển. Hành vi này xảy ra vì triển khai hiện tại của chúng ta lưu trữ dữ liệu người dùng trong các biến JavaScript bị đặt lại mỗi khi tải lại trang.

**Các vấn đề triển khai hiện tại:**

Biến `account` đơn giản từ bài học [trước](../3-data/README.md) của chúng ta tạo ra ba vấn đề đáng kể ảnh hưởng đến cả trải nghiệm người dùng và khả năng duy trì mã:

| Vấn đề | Nguyên nhân kỹ thuật | Tác động đến người dùng |
|---------|--------|----------------|
| **Mất phiên** | Làm mới trang xóa các biến JavaScript | Người dùng phải xác thực lại thường xuyên |
| **Cập nhật rải rác** | Nhiều hàm sửa đổi trạng thái trực tiếp | Gỡ lỗi trở nên ngày càng khó khăn |
| **Dọn dẹp không hoàn chỉnh** | Đăng xuất không xóa tất cả tham chiếu trạng thái | Các vấn đề về bảo mật và quyền riêng tư tiềm ẩn |

**Thách thức kiến trúc:**

Giống như thiết kế ngăn cách của Titanic tưởng chừng như mạnh mẽ cho đến khi nhiều ngăn bị ngập nước cùng lúc, việc sửa các vấn đề này riêng lẻ sẽ không giải quyết được vấn đề kiến trúc cơ bản. Chúng ta cần một giải pháp quản lý trạng thái toàn diện.

> 💡 **Chúng ta thực sự đang cố gắng đạt được điều gì ở đây?**

[Quản lý trạng thái](https://en.wikipedia.org/wiki/State_management) thực sự là về việc giải quyết hai câu đố cơ bản:

1. **Dữ liệu của tôi ở đâu?**: Theo dõi thông tin chúng ta có và nơi nó đến
2. **Mọi người có cùng một trang không?**: Đảm bảo những gì người dùng thấy khớp với những gì thực sự đang xảy ra

**Kế hoạch của chúng ta:**

Thay vì chạy vòng quanh, chúng ta sẽ tạo một hệ thống **quản lý trạng thái tập trung**. Hãy nghĩ về nó như có một người thực sự tổ chức chịu trách nhiệm về tất cả những thứ quan trọng:

![Sơ đồ hiển thị luồng dữ liệu giữa HTML, hành động người dùng và trạng thái](../../../../translated_images/vi/data-flow.fa2354e0908fecc8.webp)

```mermaid
flowchart TD
    A[User Action] --> B[Event Handler]
    B --> C[updateState Function]
    C --> D{State Validation}
    D -->|Valid| E[Create New State]
    D -->|Invalid| F[Error Handling]
    E --> G[Object.freeze]
    G --> H[Update localStorage]
    H --> I[Trigger UI Update]
    I --> J[User Sees Changes]
    F --> K[User Sees Error]
    
    subgraph "State Management Layer"
        C
        E
        G
    end
    
    subgraph "Persistence Layer"
        H
        L[localStorage]
        H -.-> L
    end
```

**Hiểu luồng dữ liệu này:**
- **Tập trung** tất cả trạng thái ứng dụng ở một vị trí
- **Định tuyến** tất cả thay đổi trạng thái thông qua các hàm có kiểm soát
- **Đảm bảo** giao diện người dùng luôn đồng bộ với trạng thái hiện tại
- **Cung cấp** một mẫu rõ ràng, có thể dự đoán cho quản lý dữ liệu

> 💡 **Thông tin chuyên nghiệp**: Bài học này tập trung vào các khái niệm cơ bản. Đối với các ứng dụng phức tạp, các thư viện như [Redux](https://redux.js.org) cung cấp các tính năng quản lý trạng thái nâng cao hơn. Hiểu các nguyên tắc cốt lõi này sẽ giúp bạn làm chủ bất kỳ thư viện quản lý trạng thái nào.

> ⚠️ **Chủ đề nâng cao**: Chúng ta sẽ không đề cập đến các cập nhật giao diện người dùng tự động được kích hoạt bởi các thay đổi trạng thái, vì điều này liên quan đến các khái niệm [Lập trình phản ứng](https://en.wikipedia.org/wiki/Reactive_programming). Hãy coi đây là một bước tiếp theo tuyệt vời cho hành trình học tập của bạn!

### Nhiệm vụ: Tập trung cấu trúc trạng thái

Hãy bắt đầu chuyển đổi quản lý trạng thái rải rác của chúng ta thành một hệ thống tập trung. Bước đầu tiên này thiết lập nền tảng cho tất cả các cải tiến tiếp theo.

**Bước 1: Tạo một đối tượng trạng thái tập trung**

Thay thế khai báo đơn giản `account`:

```js
let account = null;
```

Bằng một đối tượng trạng thái có cấu trúc:

```js
let state = {
  account: null
};
```

**Tại sao thay đổi này quan trọng:**
- **Tập trung** tất cả dữ liệu ứng dụng ở một vị trí
- **Chuẩn bị** cấu trúc để thêm nhiều thuộc tính trạng thái sau này
- **Tạo** ranh giới rõ ràng giữa trạng thái và các biến khác
- **Thiết lập** một mẫu có thể mở rộng khi ứng dụng của bạn phát triển

**Bước 2: Cập nhật mẫu truy cập trạng thái**

Cập nhật các hàm của bạn để sử dụng cấu trúc trạng thái mới:

**Trong các hàm `register()` và `login()`**, thay thế:
```js
account = ...
```

Bằng:
```js
state.account = ...
```

**Trong hàm `updateDashboard()`**, thêm dòng này ở đầu:
```js
const account = state.account;
```

**Những gì các cập nhật này đạt được:**
- **Duy trì** chức năng hiện có trong khi cải thiện cấu trúc
- **Chuẩn bị** mã của bạn cho quản lý trạng thái phức tạp hơn
- **Tạo** các mẫu nhất quán để truy cập dữ liệu trạng thái
- **Thiết lập** nền tảng cho các cập nhật trạng thái tập trung

> 💡 **Lưu ý**: Việc tái cấu trúc này không ngay lập tức giải quyết các vấn đề của chúng ta, nhưng nó tạo ra nền tảng cần thiết cho các cải tiến mạnh mẽ sắp tới!

### 🎯 Kiểm tra sư phạm: Nguyên tắc tập trung hóa

**Dừng lại và suy ngẫm**: Bạn vừa triển khai nền tảng của quản lý trạng thái tập trung. Đây là một quyết định kiến trúc quan trọng.

**Tự đánh giá nhanh**:
- Bạn có thể giải thích tại sao tập trung trạng thái trong một đối tượng tốt hơn các biến rải rác không?
- Điều gì sẽ xảy ra nếu bạn quên cập nhật một hàm để sử dụng `state.account`?
- Mẫu này chuẩn bị mã của bạn cho các tính năng nâng cao như thế nào?

**Kết nối thực tế**: Mẫu tập trung hóa mà bạn đã học là nền tảng của các framework hiện đại như Redux, Vuex và React Context. Bạn đang xây dựng tư duy kiến trúc giống như được sử dụng trong các ứng dụng lớn.

**Câu hỏi thách thức**: Nếu bạn cần thêm tùy chọn người dùng (chủ đề, ngôn ngữ) vào ứng dụng của mình, bạn sẽ thêm chúng vào đâu trong cấu trúc trạng thái? Điều này sẽ mở rộng như thế nào?

## Triển khai các cập nhật trạng thái có kiểm soát

Với trạng thái của chúng ta được tập trung, bước tiếp theo liên quan đến việc thiết lập các cơ chế kiểm soát cho các sửa đổi dữ liệu. Cách tiếp cận này đảm bảo các thay đổi trạng thái có thể dự đoán và dễ dàng gỡ lỗi.

Nguyên tắc cốt lõi giống như kiểm soát không lưu: thay vì cho phép nhiều hàm sửa đổi trạng thái độc lập, chúng ta sẽ chuyển tất cả các thay đổi qua một hàm kiểm soát duy nhất. Mẫu này cung cấp sự giám sát rõ ràng về thời điểm và cách thức dữ liệu thay đổi.

**Quản lý trạng thái bất biến:**

Chúng ta sẽ xử lý đối tượng `state` của mình như [*bất biến*](https://en.wikipedia.org/wiki/Immutable_object), nghĩa là chúng ta không bao giờ sửa đổi nó trực tiếp. Thay vào đó, mỗi thay đổi tạo ra một đối tượng trạng thái mới với dữ liệu được cập nhật.

Mặc dù cách tiếp cận này ban đầu có vẻ không hiệu quả so với các sửa đổi trực tiếp, nhưng nó mang lại những lợi ích đáng kể cho việc gỡ lỗi, kiểm tra và duy trì tính dự đoán của ứng dụng.

**Lợi ích của quản lý trạng thái bất biến:**

| Lợi ích | Mô tả | Tác động |
|---------|-------------|--------|
| **Tính dự đoán** | Các thay đổi chỉ xảy ra thông qua các hàm kiểm soát | Dễ dàng gỡ lỗi và kiểm tra |
| **Theo dõi lịch sử** | Mỗi thay đổi trạng thái tạo ra một đối tượng mới | Cho phép chức năng hoàn tác/làm lại |
| **Ngăn chặn tác động phụ** | Không có sửa đổi ngẫu nhiên | Ngăn chặn lỗi bí ẩn |
| **Tối ưu hóa hiệu suất** | Dễ dàng phát hiện khi trạng thái thực sự thay đổi | Cho phép cập nhật giao diện người dùng hiệu quả |

**Tính bất biến của JavaScript với `Object.freeze()`:**

JavaScript cung cấp [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) để ngăn chặn các sửa đổi đối tượng:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Phân tích những gì xảy ra ở đây:**
- **Ngăn chặn** các gán hoặc xóa thuộc tính trực tiếp
- **Ném** ngoại lệ nếu có nỗ lực sửa đổi
- **Đảm bảo** các thay đổi trạng thái phải thông qua các hàm kiểm soát
- **Tạo** một hợp đồng rõ ràng về cách trạng thái có thể được cập nhật

> 💡 **Đi sâu**: Tìm hiểu sự khác biệt giữa đối tượng bất biến *nông* và *sâu* trong [tài liệu MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Hiểu sự khác biệt này rất quan trọng đối với các cấu trúc trạng thái phức tạp.

```mermaid
stateDiagram-v2
    [*] --> StateV1: Initial State
    StateV1 --> StateV2: updateState('account', newData)
    StateV2 --> StateV3: updateState('account', anotherUpdate)
    StateV3 --> StateV4: updateState('preferences', userSettings)
    
    note right of StateV1
        Object.freeze()
        Immutable
        Debuggable
    end note
    
    note right of StateV2
        New object created
        Previous state preserved
        Predictable changes
    end note
```

### Nhiệm vụ

Hãy tạo một hàm `updateState()` mới:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Trong hàm này, chúng ta tạo một đối tượng trạng thái mới và sao chép dữ liệu từ trạng thái trước bằng [*toán tử spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Sau đó, chúng ta ghi đè một thuộc tính cụ thể của đối tượng trạng thái với dữ liệu mới bằng [cú pháp ngoặc vuông](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` để gán. Cuối cùng, chúng ta khóa đối tượng để ngăn chặn các sửa đổi bằng `Object.freeze()`. Hiện tại, chúng ta chỉ lưu thuộc tính `account` trong trạng thái, nhưng với cách tiếp cận này bạn có thể thêm bao nhiêu thuộc tính tùy ý vào trạng thái.

Chúng ta cũng sẽ cập nhật khởi tạo `state` để đảm bảo trạng thái ban đầu cũng được đóng băng:

```js
let state = Object.freeze({
  account: null
});
```

Sau đó, cập nhật hàm `register` bằng cách thay thế `state.account = result;` với:

```js
updateState('account', result);
```

Làm tương tự với hàm `login`, thay thế `state.account = data;` bằng:

```js
updateState('account', data);
```

Chúng ta sẽ tận dụng cơ hội này để sửa vấn đề dữ liệu tài khoản không được xóa khi người dùng nhấp vào *Đăng xuất*.

Tạo một hàm mới `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Trong `updateDashboard()`, thay thế chuyển hướng `return navigate('/login');` bằng `return logout()`;

Hãy thử đăng ký một tài khoản mới, đăng xuất và đăng nhập lại để kiểm tra rằng mọi thứ vẫn hoạt động đúng cách.

> Mẹo: bạn có thể xem tất cả các thay đổi trạng thái bằng cách thêm `console.log(state)` ở cuối `updateState()` và mở bảng điều khiển trong công cụ phát triển của trình duyệt.

## Triển khai duy trì dữ liệu

Vấn đề mất phiên mà chúng ta đã xác định trước đó yêu cầu một giải pháp duy trì để giữ trạng thái người dùng qua các phiên trình duyệt. Điều này biến ứng dụng của chúng ta từ một trải nghiệm tạm thời thành một công cụ chuyên nghiệp và đáng tin cậy.

Hãy xem xét cách các đồng hồ nguyên tử duy trì thời gian chính xác ngay cả khi mất điện bằng cách lưu trữ trạng thái quan trọng trong bộ nhớ không bay hơi. Tương tự, các ứng dụng web cần các cơ chế lưu trữ bền vững để bảo toàn dữ liệu người dùng thiết yếu qua các phiên trình duyệt và làm mới trang.

**Câu hỏi chiến lược cho duy trì dữ liệu:**

Trước khi triển khai duy trì, hãy xem xét các yếu tố quan trọng này:

| Câu hỏi | Ngữ cảnh ứng dụng ngân hàng | Tác động quyết định |
| **Thời gian lưu trữ nên kéo dài bao lâu?** | Trạng thái đăng nhập so với tùy chọn giao diện tạm thời | Chọn thời gian lưu trữ phù hợp |
| **Máy chủ có cần dữ liệu này không?** | Token xác thực so với cài đặt giao diện | Xác định yêu cầu chia sẻ |

**Các tùy chọn lưu trữ trên trình duyệt:**

Trình duyệt hiện đại cung cấp nhiều cơ chế lưu trữ, mỗi cơ chế được thiết kế cho các trường hợp sử dụng khác nhau:

**API lưu trữ chính:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Lưu trữ [Key/Value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) lâu dài
   - **Lưu trữ** dữ liệu qua các phiên trình duyệt vô thời hạn  
   - **Tồn tại** sau khi khởi động lại trình duyệt và máy tính
   - **Phạm vi** chỉ áp dụng cho tên miền của trang web cụ thể
   - **Hoàn hảo** cho các tùy chọn người dùng và trạng thái đăng nhập

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Lưu trữ phiên tạm thời
   - **Hoạt động** giống hệt như localStorage trong các phiên hoạt động
   - **Xóa** tự động khi tab trình duyệt đóng
   - **Lý tưởng** cho dữ liệu tạm thời không cần lưu trữ lâu dài

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Lưu trữ chia sẻ với máy chủ
   - **Tự động** gửi kèm với mỗi yêu cầu đến máy chủ
   - **Hoàn hảo** cho các token [xác thực](https://en.wikipedia.org/wiki/Authentication)
   - **Giới hạn** về kích thước và có thể ảnh hưởng đến hiệu suất

**Yêu cầu tuần tự hóa dữ liệu:**

Cả `localStorage` và `sessionStorage` chỉ lưu trữ [chuỗi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Hiểu về tuần tự hóa:**
- **Chuyển đổi** các đối tượng JavaScript thành chuỗi JSON bằng [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Khôi phục** đối tượng từ JSON bằng [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Xử lý** các đối tượng lồng nhau phức tạp và mảng tự động
- **Không hoạt động** với các hàm, giá trị undefined và tham chiếu vòng lặp

> 💡 **Tùy chọn nâng cao**: Đối với các ứng dụng ngoại tuyến phức tạp với lượng dữ liệu lớn, hãy cân nhắc sử dụng API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Nó cung cấp một cơ sở dữ liệu phía client đầy đủ nhưng yêu cầu triển khai phức tạp hơn.

```mermaid
quadrantChart
    title Browser Storage Options
    x-axis Low Complexity --> High Complexity
    y-axis Short Duration --> Long Duration
    
    quadrant-1 Professional Tools
    quadrant-2 Simple Persistence
    quadrant-3 Temporary Storage
    quadrant-4 Advanced Systems
    
    localStorage: [0.3, 0.8]
    sessionStorage: [0.2, 0.2]
    HTTP Cookies: [0.6, 0.7]
    IndexedDB: [0.9, 0.9]
    Memory Variables: [0.1, 0.1]
```

### Nhiệm vụ: Triển khai lưu trữ lâu dài với localStorage

Hãy triển khai lưu trữ lâu dài để người dùng vẫn đăng nhập cho đến khi họ chủ động đăng xuất. Chúng ta sẽ sử dụng `localStorage` để lưu trữ dữ liệu tài khoản qua các phiên trình duyệt.

**Bước 1: Định nghĩa cấu hình lưu trữ**

```js
const storageKey = 'savedAccount';
```

**Những gì hằng số này cung cấp:**
- **Tạo** một định danh nhất quán cho dữ liệu được lưu trữ
- **Ngăn chặn** lỗi chính tả trong các tham chiếu khóa lưu trữ
- **Dễ dàng** thay đổi khóa lưu trữ khi cần
- **Tuân theo** các thực hành tốt nhất để viết mã dễ bảo trì

**Bước 2: Thêm tính năng lưu trữ tự động**

Thêm dòng này vào cuối hàm `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Phân tích những gì xảy ra ở đây:**
- **Chuyển đổi** đối tượng tài khoản thành chuỗi JSON để lưu trữ
- **Lưu** dữ liệu bằng khóa lưu trữ nhất quán
- **Thực thi** tự động mỗi khi trạng thái thay đổi
- **Đảm bảo** dữ liệu lưu trữ luôn đồng bộ với trạng thái hiện tại

> 💡 **Lợi ích kiến trúc**: Vì chúng ta đã tập trung tất cả các cập nhật trạng thái thông qua `updateState()`, việc thêm tính năng lưu trữ chỉ cần một dòng mã. Điều này cho thấy sức mạnh của các quyết định kiến trúc tốt!

**Bước 3: Khôi phục trạng thái khi ứng dụng tải**

Tạo một hàm khởi tạo để khôi phục dữ liệu đã lưu:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Hiểu quy trình khởi tạo:**
- **Lấy** bất kỳ dữ liệu tài khoản nào đã lưu trước đó từ localStorage
- **Phân tích** chuỗi JSON trở lại thành đối tượng JavaScript
- **Cập nhật** trạng thái bằng hàm cập nhật được kiểm soát
- **Khôi phục** phiên của người dùng tự động khi tải trang
- **Thực thi** trước khi cập nhật route để đảm bảo trạng thái có sẵn

**Bước 4: Tối ưu hóa route mặc định**

Cập nhật route mặc định để tận dụng tính năng lưu trữ:

Trong `updateRoute()`, thay thế:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Tại sao thay đổi này hợp lý:**
- **Tận dụng** hệ thống lưu trữ mới một cách hiệu quả
- **Cho phép** dashboard xử lý kiểm tra xác thực
- **Chuyển hướng** đến trang đăng nhập tự động nếu không có phiên đã lưu
- **Tạo** trải nghiệm người dùng mượt mà hơn

**Kiểm tra triển khai của bạn:**

1. Đăng nhập vào ứng dụng ngân hàng của bạn
2. Làm mới trang trình duyệt
3. Xác minh rằng bạn vẫn đăng nhập và ở trên dashboard
4. Đóng và mở lại trình duyệt
5. Quay lại ứng dụng của bạn và xác nhận rằng bạn vẫn đăng nhập

🎉 **Thành tựu đạt được**: Bạn đã triển khai thành công quản lý trạng thái lưu trữ lâu dài! Ứng dụng của bạn giờ đây hoạt động như một ứng dụng web chuyên nghiệp.

### 🎯 Kiểm tra sư phạm: Kiến trúc lưu trữ lâu dài

**Hiểu kiến trúc**: Bạn đã triển khai một lớp lưu trữ lâu dài tinh vi, cân bằng giữa trải nghiệm người dùng và độ phức tạp của quản lý dữ liệu.

**Các khái niệm chính đã nắm vững**:
- **Tuần tự hóa JSON**: Chuyển đổi các đối tượng phức tạp thành chuỗi có thể lưu trữ
- **Đồng bộ hóa tự động**: Các thay đổi trạng thái kích hoạt lưu trữ lâu dài
- **Khôi phục phiên**: Ứng dụng có thể khôi phục ngữ cảnh người dùng sau khi bị gián đoạn
- **Lưu trữ tập trung**: Một hàm cập nhật xử lý tất cả lưu trữ

**Kết nối ngành**: Mẫu lưu trữ này là nền tảng cho các ứng dụng web tiến bộ (PWAs), ứng dụng ngoại tuyến đầu tiên, và trải nghiệm web di động hiện đại. Bạn đang xây dựng các khả năng cấp độ sản xuất.

**Câu hỏi phản ánh**: Làm thế nào bạn sẽ sửa đổi hệ thống này để xử lý nhiều tài khoản người dùng trên cùng một thiết bị? Hãy cân nhắc các vấn đề về quyền riêng tư và bảo mật.

## Cân bằng lưu trữ lâu dài với độ mới của dữ liệu

Hệ thống lưu trữ của chúng ta duy trì thành công các phiên người dùng, nhưng lại tạo ra một thách thức mới: dữ liệu cũ. Khi nhiều người dùng hoặc ứng dụng thay đổi cùng một dữ liệu trên máy chủ, thông tin được lưu trữ cục bộ trở nên lỗi thời.

Tình huống này giống như các nhà hàng hải Viking dựa vào cả bản đồ sao đã lưu trữ và các quan sát thiên văn hiện tại. Bản đồ cung cấp sự nhất quán, nhưng các nhà hàng hải cần các quan sát mới để tính đến điều kiện thay đổi. Tương tự, ứng dụng của chúng ta cần cả trạng thái người dùng lưu trữ và dữ liệu máy chủ hiện tại.

**🧪 Khám phá vấn đề độ mới của dữ liệu:**

1. Đăng nhập vào dashboard bằng tài khoản `test`
2. Chạy lệnh này trong terminal để mô phỏng một giao dịch từ nguồn khác:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Làm mới trang dashboard của bạn trong trình duyệt
4. Quan sát xem bạn có thấy giao dịch mới hay không

**Điều mà bài kiểm tra này chứng minh:**
- **Cho thấy** cách lưu trữ cục bộ có thể trở nên "cũ" (lỗi thời)
- **Mô phỏng** các tình huống thực tế nơi dữ liệu thay đổi bên ngoài ứng dụng của bạn
- **Tiết lộ** sự căng thẳng giữa lưu trữ lâu dài và độ mới của dữ liệu

**Thách thức dữ liệu cũ:**

| Vấn đề | Nguyên nhân | Tác động đến người dùng |
|--------|-------------|-------------------------|
| **Dữ liệu cũ** | localStorage không tự động hết hạn | Người dùng thấy thông tin lỗi thời |
| **Thay đổi máy chủ** | Các ứng dụng/người dùng khác thay đổi cùng dữ liệu | Hiển thị không nhất quán trên các nền tảng |
| **Bộ nhớ cache vs. Thực tế** | Bộ nhớ cache cục bộ không khớp với trạng thái máy chủ | Trải nghiệm người dùng kém và gây nhầm lẫn |

**Chiến lược giải pháp:**

Chúng ta sẽ triển khai mẫu "làm mới khi tải" để cân bằng lợi ích của lưu trữ lâu dài với nhu cầu về dữ liệu mới. Cách tiếp cận này duy trì trải nghiệm người dùng mượt mà trong khi đảm bảo độ chính xác của dữ liệu.

```mermaid
sequenceDiagram
    participant U as User
    participant A as App
    participant L as localStorage
    participant S as Server
    
    U->>A: Opens app
    A->>L: Load saved state
    L-->>A: Return cached data
    A->>U: Show UI immediately
    A->>S: Fetch fresh data
    S-->>A: Return current data
    A->>L: Update cache
    A->>U: Update UI with fresh data
```

### Nhiệm vụ: Triển khai hệ thống làm mới dữ liệu

Chúng ta sẽ tạo một hệ thống tự động lấy dữ liệu mới từ máy chủ trong khi vẫn duy trì lợi ích của quản lý trạng thái lưu trữ lâu dài.

**Bước 1: Tạo hàm cập nhật dữ liệu tài khoản**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Hiểu logic của hàm này:**
- **Kiểm tra** xem người dùng hiện có đang đăng nhập không (state.account tồn tại)
- **Chuyển hướng** đến đăng xuất nếu không tìm thấy phiên hợp lệ
- **Lấy** dữ liệu tài khoản mới từ máy chủ bằng hàm `getAccount()` hiện có
- **Xử lý** lỗi máy chủ một cách linh hoạt bằng cách đăng xuất các phiên không hợp lệ
- **Cập nhật** trạng thái với dữ liệu mới bằng hệ thống cập nhật được kiểm soát
- **Kích hoạt** lưu trữ lâu dài tự động thông qua hàm `updateState()`

**Bước 2: Tạo trình xử lý làm mới dashboard**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Những gì hàm làm mới này thực hiện:**
- **Phối hợp** quá trình làm mới dữ liệu và cập nhật giao diện người dùng
- **Chờ** dữ liệu mới được tải trước khi cập nhật hiển thị
- **Đảm bảo** dashboard hiển thị thông tin mới nhất
- **Duy trì** sự phân tách rõ ràng giữa quản lý dữ liệu và cập nhật giao diện người dùng

**Bước 3: Tích hợp với hệ thống route**

Cập nhật cấu hình route của bạn để tự động kích hoạt làm mới:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Cách tích hợp này hoạt động:**
- **Thực thi** hàm làm mới mỗi khi route dashboard tải
- **Đảm bảo** dữ liệu mới luôn được hiển thị khi người dùng điều hướng đến dashboard
- **Duy trì** cấu trúc route hiện có trong khi thêm độ mới của dữ liệu
- **Cung cấp** một mẫu nhất quán cho khởi tạo cụ thể theo route

**Kiểm tra hệ thống làm mới dữ liệu của bạn:**

1. Đăng nhập vào ứng dụng ngân hàng của bạn
2. Chạy lệnh curl từ trước để tạo một giao dịch mới
3. Làm mới trang dashboard hoặc điều hướng đi và quay lại
4. Xác minh rằng giao dịch mới xuất hiện ngay lập tức

🎉 **Cân bằng hoàn hảo đạt được**: Ứng dụng của bạn giờ đây kết hợp trải nghiệm mượt mà của trạng thái lưu trữ lâu dài với độ chính xác của dữ liệu máy chủ mới!

## 📈 Dòng thời gian làm chủ quản lý trạng thái của bạn

```mermaid
timeline
    title Professional State Management Journey
    
    section Problem Recognition
        State Issues Diagnosis
            : Identify session loss problems
            : Understand scattered update issues
            : Recognize architectural needs
    
    section Architecture Foundation
        Centralized State Design
            : Create unified state objects
            : Implement controlled update patterns
            : Establish immutable principles
        
        Predictable Updates
            : Master Object.freeze() usage
            : Build debug-friendly systems
            : Create scalable patterns
    
    section Persistence Mastery
        localStorage Integration
            : Handle JSON serialization
            : Implement automatic synchronization
            : Create session continuity
        
        Data Freshness Balance
            : Address staleness challenges
            : Build refresh mechanisms
            : Optimize performance vs accuracy
    
    section Professional Patterns
        Production-Ready Systems
            : Implement error handling
            : Create maintainable architectures
            : Follow industry best practices
        
        Advanced Capabilities
            : Ready for framework integration
            : Prepared for complex state needs
            : Foundation for real-time features
```

**🎓 Cột mốc tốt nghiệp**: Bạn đã xây dựng thành công một hệ thống quản lý trạng thái hoàn chỉnh sử dụng các nguyên tắc tương tự như Redux, Vuex và các thư viện trạng thái chuyên nghiệp khác. Các mẫu này có thể mở rộng từ ứng dụng đơn giản đến ứng dụng doanh nghiệp.

**🔄 Khả năng cấp độ tiếp theo**:
- Sẵn sàng làm chủ các framework quản lý trạng thái (Redux, Zustand, Pinia)
- Chuẩn bị triển khai các tính năng thời gian thực với WebSockets
- Được trang bị để xây dựng các ứng dụng web tiến bộ ngoại tuyến đầu tiên
- Đặt nền tảng cho các mẫu nâng cao như máy trạng thái và quan sát viên

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Triển khai một hệ thống quản lý trạng thái toàn diện với chức năng hoàn tác/làm lại cho ứng dụng ngân hàng. Thử thách này sẽ giúp bạn thực hành các khái niệm quản lý trạng thái nâng cao bao gồm theo dõi lịch sử trạng thái, cập nhật bất biến và đồng bộ hóa giao diện người dùng.

**Yêu cầu:** Tạo một hệ thống quản lý trạng thái nâng cao bao gồm: 1) Một mảng lịch sử trạng thái theo dõi tất cả các trạng thái trước đó, 2) Các hàm hoàn tác và làm lại có thể quay lại trạng thái trước đó, 3) Các nút giao diện người dùng cho các thao tác hoàn tác/làm lại trên dashboard, 4) Giới hạn lịch sử tối đa là 10 trạng thái để tránh vấn đề bộ nhớ, và 5) Dọn dẹp lịch sử đúng cách khi người dùng đăng xuất. Đảm bảo chức năng hoàn tác/làm lại hoạt động với các thay đổi số dư tài khoản và tồn tại qua các lần làm mới trình duyệt.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## 🚀 Thử thách: Tối ưu hóa lưu trữ

Triển khai của bạn hiện xử lý các phiên người dùng, làm mới dữ liệu và quản lý trạng thái một cách hiệu quả. Tuy nhiên, hãy cân nhắc liệu cách tiếp cận hiện tại có cân bằng tối ưu giữa hiệu quả lưu trữ và chức năng hay không.

Giống như các kỳ thủ cờ vua phân biệt giữa các quân cờ thiết yếu và các quân cờ có thể hy sinh, quản lý trạng thái hiệu quả yêu cầu xác định dữ liệu nào cần lưu trữ lâu dài so với dữ liệu nào nên luôn được lấy mới từ máy chủ.

**Phân tích tối ưu hóa:**

Đánh giá triển khai localStorage hiện tại của bạn và cân nhắc các câu hỏi chiến lược sau:
- Thông tin tối thiểu nào cần thiết để duy trì xác thực người dùng?
- Dữ liệu nào thay đổi thường xuyên đến mức bộ nhớ cache cục bộ không mang lại lợi ích?
- Làm thế nào tối ưu hóa lưu trữ có thể cải thiện hiệu suất mà không làm giảm trải nghiệm người dùng?

**Chiến lược triển khai:**
- **Xác định** dữ liệu thiết yếu cần lưu trữ (có thể chỉ là định danh người dùng)
- **Sửa đổi** triển khai localStorage của bạn để chỉ lưu trữ dữ liệu phiên quan trọng
- **Đảm bảo** dữ liệu mới luôn được tải từ máy chủ khi truy cập dashboard
- **Kiểm tra** rằng cách tiếp cận tối ưu của bạn vẫn duy trì trải nghiệm người dùng như cũ

**Cân nhắc nâng cao:**
- **So sánh** các đánh đổi giữa việc lưu trữ toàn bộ dữ liệu tài khoản so với chỉ token xác thực
- **Tài liệu hóa** các quyết định và lý do của bạn cho các thành viên nhóm trong tương lai

Thử thách này sẽ giúp bạn suy nghĩ như một nhà phát triển chuyên nghiệp, người cân nhắc cả trải nghiệm người dùng và hiệu quả ứng dụng. Hãy dành thời gian để thử nghiệm các cách tiếp cận khác nhau!

## Câu hỏi kiểm tra sau bài giảng

[Câu hỏi kiểm tra sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/48)

## Bài tập

[Triển khai hộp thoại "Thêm giao dịch"](assignment.md)

Dưới đây là kết quả ví dụ sau khi hoàn thành bài tập:

![Ảnh chụp màn hình hiển thị hộp thoại "Thêm giao dịch" ví dụ](../../../../translated_images/vi/dialog.93bba104afeb79f1.webp)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính xác nhất. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.