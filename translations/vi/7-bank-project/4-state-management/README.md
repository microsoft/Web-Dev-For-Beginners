<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-29T08:47:41+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "vi"
}
-->
# Xây dựng Ứng dụng Ngân hàng Phần 4: Khái niệm Quản lý Trạng thái

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/47)

### Giới thiệu

Khi một ứng dụng web phát triển, việc theo dõi tất cả các luồng dữ liệu trở nên thách thức. Mã nào lấy dữ liệu, trang nào sử dụng nó, dữ liệu cần được cập nhật ở đâu và khi nào... rất dễ dẫn đến mã lộn xộn và khó bảo trì. Điều này đặc biệt đúng khi bạn cần chia sẻ dữ liệu giữa các trang khác nhau trong ứng dụng, chẳng hạn như dữ liệu người dùng. Khái niệm *quản lý trạng thái* luôn tồn tại trong mọi loại chương trình, nhưng khi các ứng dụng web ngày càng phức tạp, đây trở thành một điểm quan trọng cần suy nghĩ trong quá trình phát triển.

Trong phần cuối này, chúng ta sẽ xem xét lại ứng dụng đã xây dựng để suy nghĩ lại cách quản lý trạng thái, cho phép hỗ trợ làm mới trình duyệt tại bất kỳ thời điểm nào và duy trì dữ liệu qua các phiên người dùng.

### Điều kiện tiên quyết

Bạn cần hoàn thành phần [lấy dữ liệu](../3-data/README.md) của ứng dụng web trong bài học này. Bạn cũng cần cài đặt [Node.js](https://nodejs.org) và [chạy API máy chủ](../api/README.md) cục bộ để quản lý dữ liệu tài khoản.

Bạn có thể kiểm tra xem máy chủ có chạy đúng không bằng cách thực hiện lệnh này trong terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Suy nghĩ lại về quản lý trạng thái

Trong [bài học trước](../3-data/README.md), chúng ta đã giới thiệu một khái niệm cơ bản về trạng thái trong ứng dụng với biến toàn cục `account` chứa dữ liệu ngân hàng của người dùng hiện đang đăng nhập. Tuy nhiên, cách triển khai hiện tại của chúng ta có một số điểm yếu. Hãy thử làm mới trang khi bạn đang ở bảng điều khiển. Điều gì xảy ra?

Có 3 vấn đề với mã hiện tại:

- Trạng thái không được duy trì, vì làm mới trình duyệt sẽ đưa bạn trở lại trang đăng nhập.
- Có nhiều hàm sửa đổi trạng thái. Khi ứng dụng phát triển, điều này có thể khiến việc theo dõi các thay đổi trở nên khó khăn và dễ quên cập nhật một số phần.
- Trạng thái không được dọn dẹp, vì vậy khi bạn nhấp vào *Đăng xuất*, dữ liệu tài khoản vẫn còn đó mặc dù bạn đang ở trang đăng nhập.

Chúng ta có thể cập nhật mã để giải quyết từng vấn đề này, nhưng điều đó sẽ tạo ra sự trùng lặp mã và làm cho ứng dụng phức tạp hơn và khó bảo trì hơn. Hoặc chúng ta có thể dừng lại vài phút và suy nghĩ lại chiến lược của mình.

> Vấn đề thực sự mà chúng ta đang cố gắng giải quyết ở đây là gì?

[Quản lý trạng thái](https://en.wikipedia.org/wiki/State_management) là tất cả về việc tìm ra một cách tiếp cận tốt để giải quyết hai vấn đề cụ thể này:

- Làm thế nào để giữ cho các luồng dữ liệu trong ứng dụng dễ hiểu?
- Làm thế nào để giữ cho dữ liệu trạng thái luôn đồng bộ với giao diện người dùng (và ngược lại)?

Khi bạn đã giải quyết được những vấn đề này, bất kỳ vấn đề nào khác mà bạn có thể gặp phải có thể đã được khắc phục hoặc trở nên dễ dàng hơn để giải quyết. Có nhiều cách tiếp cận khác nhau để giải quyết những vấn đề này, nhưng chúng ta sẽ chọn một giải pháp phổ biến bao gồm **tập trung hóa dữ liệu và cách thay đổi nó**. Các luồng dữ liệu sẽ diễn ra như sau:

![Sơ đồ hiển thị luồng dữ liệu giữa HTML, hành động người dùng và trạng thái](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.vi.png)

> Chúng ta sẽ không đề cập đến phần mà dữ liệu tự động kích hoạt cập nhật giao diện, vì nó liên quan đến các khái niệm nâng cao hơn về [Lập trình Phản ứng](https://en.wikipedia.org/wiki/Reactive_programming). Đây là một chủ đề tiếp theo tốt nếu bạn muốn tìm hiểu sâu hơn.

✅ Có rất nhiều thư viện ngoài kia với các cách tiếp cận khác nhau để quản lý trạng thái, [Redux](https://redux.js.org) là một lựa chọn phổ biến. Hãy xem các khái niệm và mẫu được sử dụng vì đây thường là một cách tốt để học về các vấn đề tiềm năng mà bạn có thể gặp phải trong các ứng dụng web lớn và cách giải quyết chúng.

### Nhiệm vụ

Chúng ta sẽ bắt đầu với một chút tái cấu trúc. Thay thế khai báo `account`:

```js
let account = null;
```

Bằng:

```js
let state = {
  account: null
};
```

Ý tưởng là *tập trung hóa* tất cả dữ liệu ứng dụng của chúng ta trong một đối tượng trạng thái duy nhất. Hiện tại chúng ta chỉ có `account` trong trạng thái nên nó không thay đổi nhiều, nhưng nó tạo ra một con đường cho các cải tiến sau này.

Chúng ta cũng cần cập nhật các hàm sử dụng nó. Trong các hàm `register()` và `login()`, thay thế `account = ...` bằng `state.account = ...`;

Ở đầu hàm `updateDashboard()`, thêm dòng này:

```js
const account = state.account;
```

Việc tái cấu trúc này tự nó không mang lại nhiều cải tiến, nhưng ý tưởng là đặt nền tảng cho các thay đổi tiếp theo.

## Theo dõi các thay đổi dữ liệu

Bây giờ chúng ta đã thiết lập đối tượng `state` để lưu trữ dữ liệu, bước tiếp theo là tập trung hóa các cập nhật. Mục tiêu là làm cho việc theo dõi bất kỳ thay đổi nào và khi nào chúng xảy ra trở nên dễ dàng hơn.

Để tránh việc thay đổi đối tượng `state`, cũng là một thực hành tốt để coi nó là [*bất biến*](https://en.wikipedia.org/wiki/Immutable_object), nghĩa là nó không thể bị sửa đổi. Điều này cũng có nghĩa là bạn phải tạo một đối tượng trạng thái mới nếu muốn thay đổi bất kỳ điều gì trong đó. Bằng cách làm như vậy, bạn xây dựng một lớp bảo vệ chống lại các [tác dụng phụ](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) không mong muốn, và mở ra khả năng cho các tính năng mới trong ứng dụng của bạn như triển khai hoàn tác/làm lại, đồng thời làm cho việc gỡ lỗi trở nên dễ dàng hơn. Ví dụ, bạn có thể ghi lại mọi thay đổi được thực hiện đối với trạng thái và giữ lịch sử các thay đổi để hiểu nguồn gốc của lỗi.

Trong JavaScript, bạn có thể sử dụng [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) để tạo một phiên bản bất biến của một đối tượng. Nếu bạn cố gắng thực hiện thay đổi đối với một đối tượng bất biến, một ngoại lệ sẽ được đưa ra.

✅ Bạn có biết sự khác biệt giữa một đối tượng bất biến *nông* và *sâu* không? Bạn có thể đọc về nó [tại đây](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Nhiệm vụ

Hãy tạo một hàm mới `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Trong hàm này, chúng ta tạo một đối tượng trạng thái mới và sao chép dữ liệu từ trạng thái trước đó bằng cách sử dụng [*toán tử spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Sau đó, chúng ta ghi đè một thuộc tính cụ thể của đối tượng trạng thái với dữ liệu mới bằng cách sử dụng [cú pháp ngoặc vuông](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` để gán giá trị. Cuối cùng, chúng ta khóa đối tượng để ngăn chặn các sửa đổi bằng `Object.freeze()`. Hiện tại chúng ta chỉ có thuộc tính `account` được lưu trữ trong trạng thái, nhưng với cách tiếp cận này, bạn có thể thêm bao nhiêu thuộc tính tùy ý vào trạng thái.

Chúng ta cũng sẽ cập nhật khởi tạo `state` để đảm bảo trạng thái ban đầu cũng được đóng băng:

```js
let state = Object.freeze({
  account: null
});
```

Sau đó, cập nhật hàm `register` bằng cách thay thế `state.account = result;` bằng:

```js
updateState('account', result);
```

Làm tương tự với hàm `login`, thay thế `state.account = data;` bằng:

```js
updateState('account', data);
```

Chúng ta sẽ nhân cơ hội này để sửa lỗi dữ liệu tài khoản không được xóa khi người dùng nhấp vào *Đăng xuất*.

Tạo một hàm mới `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Trong `updateDashboard()`, thay thế chuyển hướng `return navigate('/login');` bằng `return logout();`

Hãy thử đăng ký một tài khoản mới, đăng xuất và đăng nhập lại để kiểm tra xem mọi thứ vẫn hoạt động chính xác.

> Mẹo: bạn có thể xem tất cả các thay đổi trạng thái bằng cách thêm `console.log(state)` ở cuối `updateState()` và mở bảng điều khiển trong công cụ phát triển của trình duyệt.

## Duy trì trạng thái

Hầu hết các ứng dụng web cần duy trì dữ liệu để hoạt động chính xác. Tất cả dữ liệu quan trọng thường được lưu trữ trong cơ sở dữ liệu và truy cập thông qua API máy chủ, như dữ liệu tài khoản người dùng trong trường hợp của chúng ta. Nhưng đôi khi, cũng rất hữu ích để duy trì một số dữ liệu trên ứng dụng khách đang chạy trong trình duyệt của bạn, để cải thiện trải nghiệm người dùng hoặc tăng hiệu suất tải.

Khi bạn muốn duy trì dữ liệu trong trình duyệt, có một số câu hỏi quan trọng bạn nên tự hỏi:

- *Dữ liệu có nhạy cảm không?* Bạn nên tránh lưu trữ bất kỳ dữ liệu nhạy cảm nào trên ứng dụng khách, chẳng hạn như mật khẩu người dùng.
- *Bạn cần giữ dữ liệu này trong bao lâu?* Bạn có định truy cập dữ liệu này chỉ trong phiên hiện tại hay muốn lưu trữ nó mãi mãi?

Có nhiều cách để lưu trữ thông tin trong một ứng dụng web, tùy thuộc vào những gì bạn muốn đạt được. Ví dụ, bạn có thể sử dụng URL để lưu trữ một truy vấn tìm kiếm và làm cho nó có thể chia sẻ giữa các người dùng. Bạn cũng có thể sử dụng [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) nếu dữ liệu cần được chia sẻ với máy chủ, như thông tin [xác thực](https://en.wikipedia.org/wiki/Authentication).

Một tùy chọn khác là sử dụng một trong nhiều API trình duyệt để lưu trữ dữ liệu. Hai API đặc biệt thú vị:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): một [Kho lưu trữ Key/Value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) cho phép duy trì dữ liệu cụ thể cho trang web hiện tại qua các phiên khác nhau. Dữ liệu được lưu trong đó không bao giờ hết hạn.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): hoạt động giống như `localStorage` ngoại trừ việc dữ liệu được lưu trong đó sẽ bị xóa khi phiên kết thúc (khi trình duyệt bị đóng).

Lưu ý rằng cả hai API này chỉ cho phép lưu trữ [chuỗi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Nếu bạn muốn lưu trữ các đối tượng phức tạp, bạn sẽ cần tuần tự hóa chúng sang định dạng [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) bằng [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Nếu bạn muốn tạo một ứng dụng web không làm việc với máy chủ, cũng có thể tạo một cơ sở dữ liệu trên ứng dụng khách bằng API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). API này dành cho các trường hợp sử dụng nâng cao hoặc nếu bạn cần lưu trữ một lượng lớn dữ liệu, vì nó phức tạp hơn để sử dụng.

### Nhiệm vụ

Chúng ta muốn người dùng của mình vẫn đăng nhập cho đến khi họ nhấp rõ ràng vào nút *Đăng xuất*, vì vậy chúng ta sẽ sử dụng `localStorage` để lưu trữ dữ liệu tài khoản. Đầu tiên, hãy định nghĩa một khóa mà chúng ta sẽ sử dụng để lưu trữ dữ liệu của mình.

```js
const storageKey = 'savedAccount';
```

Sau đó thêm dòng này vào cuối hàm `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Với điều này, dữ liệu tài khoản người dùng sẽ được duy trì và luôn cập nhật vì chúng ta đã tập trung hóa tất cả các cập nhật trạng thái trước đó. Đây là lúc chúng ta bắt đầu hưởng lợi từ tất cả các lần tái cấu trúc trước đó 🙂.

Vì dữ liệu được lưu, chúng ta cũng cần khôi phục nó khi ứng dụng được tải. Vì chúng ta sẽ bắt đầu có nhiều mã khởi tạo hơn, có thể là một ý tưởng hay để tạo một hàm `init` mới, bao gồm cả mã trước đó ở cuối `app.js`:

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

Ở đây chúng ta lấy dữ liệu đã lưu, và nếu có, chúng ta cập nhật trạng thái tương ứng. Điều quan trọng là làm điều này *trước* khi cập nhật tuyến đường, vì có thể có mã phụ thuộc vào trạng thái trong quá trình cập nhật trang.

Chúng ta cũng có thể làm cho trang *Dashboard* trở thành trang mặc định của ứng dụng, vì bây giờ chúng ta đang duy trì dữ liệu tài khoản. Nếu không tìm thấy dữ liệu, bảng điều khiển sẽ tự động chuyển hướng đến trang *Login*. Trong `updateRoute()`, thay thế dự phòng `return navigate('/login');` bằng `return navigate('/dashboard');`.

Bây giờ hãy đăng nhập vào ứng dụng và thử làm mới trang. Bạn sẽ vẫn ở trên bảng điều khiển. Với bản cập nhật này, chúng ta đã giải quyết tất cả các vấn đề ban đầu...

## Làm mới dữ liệu

...Nhưng chúng ta cũng có thể đã tạo ra một vấn đề mới. Oops!

Đi đến bảng điều khiển bằng tài khoản `test`, sau đó chạy lệnh này trên terminal để tạo một giao dịch mới:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Thử làm mới trang bảng điều khiển trong trình duyệt bây giờ. Điều gì xảy ra? Bạn có thấy giao dịch mới không?

Trạng thái được duy trì vô thời hạn nhờ `localStorage`, nhưng điều đó cũng có nghĩa là nó không bao giờ được cập nhật cho đến khi bạn đăng xuất khỏi ứng dụng và đăng nhập lại!

Một chiến lược khả thi để khắc phục điều đó là tải lại dữ liệu tài khoản mỗi khi bảng điều khiển được tải, để tránh dữ liệu bị lỗi thời.

### Nhiệm vụ

Tạo một hàm mới `updateAccountData`:

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

Phương thức này kiểm tra xem chúng ta hiện đang đăng nhập hay không, sau đó tải lại dữ liệu tài khoản từ máy chủ.

Tạo một hàm khác có tên `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Hàm này cập nhật dữ liệu tài khoản, sau đó xử lý việc cập nhật HTML của trang bảng điều khiển. Đây là hàm chúng ta cần gọi khi tuyến đường bảng điều khiển được tải. Cập nhật định nghĩa tuyến đường với:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Thử làm mới bảng điều khiển bây giờ, nó sẽ hiển thị dữ liệu tài khoản đã cập nhật.

---

## 🚀 Thử thách

Bây giờ chúng ta tải lại dữ liệu tài khoản mỗi khi bảng điều khiển được tải, bạn có nghĩ rằng chúng ta vẫn cần duy trì *toàn bộ dữ liệu tài khoản* không?

Hãy thử làm việc cùng nhau để thay đổi những gì được lưu và tải từ `localStorage` để chỉ bao gồm những gì thực sự cần thiết cho ứng dụng hoạt động.

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/48)

## Bài tập
[Thực hiện hộp thoại "Thêm giao dịch"](assignment.md)

Dưới đây là một ví dụ kết quả sau khi hoàn thành nhiệm vụ:

![Ảnh chụp màn hình hiển thị hộp thoại "Thêm giao dịch" mẫu](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.vi.png)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.