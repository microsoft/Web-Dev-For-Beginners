<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-27T22:12:35+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "vi"
}
-->
# Xây dựng Ứng dụng Ngân hàng Phần 1: Mẫu HTML và Định tuyến trong Ứng dụng Web

## Câu hỏi trước bài học

[Câu hỏi trước bài học](https://ff-quizzes.netlify.app/web/quiz/41)

### Giới thiệu

Kể từ khi JavaScript xuất hiện trong trình duyệt, các trang web đã trở nên tương tác và phức tạp hơn bao giờ hết. Công nghệ web hiện nay thường được sử dụng để tạo ra các ứng dụng hoàn chỉnh chạy trực tiếp trong trình duyệt, được gọi là [ứng dụng web](https://en.wikipedia.org/wiki/Web_application). Vì ứng dụng web có tính tương tác cao, người dùng không muốn phải chờ tải lại toàn bộ trang mỗi khi thực hiện một hành động. Đó là lý do JavaScript được sử dụng để cập nhật HTML trực tiếp thông qua DOM, mang lại trải nghiệm người dùng mượt mà hơn.

Trong bài học này, chúng ta sẽ xây dựng nền tảng để tạo ứng dụng ngân hàng trên web, sử dụng các mẫu HTML để tạo nhiều màn hình có thể hiển thị và cập nhật mà không cần tải lại toàn bộ trang HTML.

### Điều kiện tiên quyết

Bạn cần một máy chủ web cục bộ để kiểm tra ứng dụng web mà chúng ta sẽ xây dựng trong bài học này. Nếu bạn chưa có, bạn có thể cài đặt [Node.js](https://nodejs.org) và sử dụng lệnh `npx lite-server` từ thư mục dự án của bạn. Lệnh này sẽ tạo một máy chủ web cục bộ và mở ứng dụng của bạn trong trình duyệt.

### Chuẩn bị

Trên máy tính của bạn, tạo một thư mục có tên `bank` với một tệp có tên `index.html` bên trong. Chúng ta sẽ bắt đầu từ [mẫu HTML cơ bản](https://en.wikipedia.org/wiki/Boilerplate_code) sau:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Mẫu HTML

Nếu bạn muốn tạo nhiều màn hình cho một trang web, một giải pháp là tạo một tệp HTML riêng cho mỗi màn hình bạn muốn hiển thị. Tuy nhiên, giải pháp này có một số bất tiện:

- Bạn phải tải lại toàn bộ HTML khi chuyển đổi màn hình, điều này có thể chậm.
- Khó chia sẻ dữ liệu giữa các màn hình khác nhau.

Một cách tiếp cận khác là chỉ sử dụng một tệp HTML và định nghĩa nhiều [mẫu HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) bằng cách sử dụng phần tử `<template>`. Một mẫu là một khối HTML có thể tái sử dụng, không được trình duyệt hiển thị và cần được khởi tạo tại thời gian chạy bằng JavaScript.

### Nhiệm vụ

Chúng ta sẽ tạo một ứng dụng ngân hàng với hai màn hình: trang đăng nhập và bảng điều khiển. Đầu tiên, hãy thêm vào phần thân HTML một phần tử giữ chỗ mà chúng ta sẽ sử dụng để khởi tạo các màn hình khác nhau của ứng dụng:

```html
<div id="app">Loading...</div>
```

Chúng ta đặt `id` cho phần tử này để dễ dàng tìm thấy nó bằng JavaScript sau này.

> Mẹo: vì nội dung của phần tử này sẽ được thay thế, bạn có thể đặt một thông báo hoặc chỉ báo tải sẽ hiển thị trong khi ứng dụng đang tải.

Tiếp theo, hãy thêm mẫu HTML cho trang đăng nhập bên dưới. Hiện tại, chúng ta chỉ cần đặt một tiêu đề và một phần chứa liên kết để thực hiện điều hướng.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Sau đó, chúng ta sẽ thêm một mẫu HTML khác cho trang bảng điều khiển. Trang này sẽ chứa các phần khác nhau:

- Một tiêu đề với tiêu đề và liên kết đăng xuất
- Số dư hiện tại của tài khoản ngân hàng
- Danh sách các giao dịch, được hiển thị trong một bảng

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Mẹo: khi tạo các mẫu HTML, nếu bạn muốn xem chúng sẽ trông như thế nào, bạn có thể nhận xét các dòng `<template>` và `</template>` bằng cách bao quanh chúng bằng `<!-- -->`.

✅ Tại sao bạn nghĩ chúng ta sử dụng thuộc tính `id` trên các mẫu? Chúng ta có thể sử dụng thứ khác như `class` không?

## Hiển thị mẫu bằng JavaScript

Nếu bạn thử tệp HTML hiện tại trong trình duyệt, bạn sẽ thấy rằng nó bị kẹt ở trạng thái hiển thị `Loading...`. Đó là vì chúng ta cần thêm một số mã JavaScript để khởi tạo và hiển thị các mẫu HTML.

Khởi tạo một mẫu thường được thực hiện trong 3 bước:

1. Lấy phần tử mẫu trong DOM, ví dụ bằng cách sử dụng [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Sao chép phần tử mẫu, sử dụng [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Gắn nó vào DOM dưới một phần tử hiển thị, ví dụ bằng cách sử dụng [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Tại sao chúng ta cần sao chép mẫu trước khi gắn nó vào DOM? Bạn nghĩ điều gì sẽ xảy ra nếu chúng ta bỏ qua bước này?

### Nhiệm vụ

Tạo một tệp mới có tên `app.js` trong thư mục dự án của bạn và nhập tệp đó vào phần `<head>` của HTML:

```html
<script src="app.js" defer></script>
```

Bây giờ trong `app.js`, chúng ta sẽ tạo một hàm mới có tên `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Những gì chúng ta làm ở đây chính là 3 bước được mô tả ở trên. Chúng ta khởi tạo mẫu với `id` là `templateId`, và đặt nội dung đã sao chép của nó vào phần giữ chỗ của ứng dụng. Lưu ý rằng chúng ta cần sử dụng `cloneNode(true)` để sao chép toàn bộ cây con của mẫu.

Bây giờ hãy gọi hàm này với một trong các mẫu và xem kết quả.

```js
updateRoute('login');
```

✅ Mục đích của đoạn mã `app.innerHTML = '';` là gì? Điều gì xảy ra nếu không có nó?

## Tạo định tuyến

Khi nói về ứng dụng web, chúng ta gọi *Định tuyến* là ý định ánh xạ **URL** tới các màn hình cụ thể cần được hiển thị. Trên một trang web với nhiều tệp HTML, điều này được thực hiện tự động vì đường dẫn tệp được phản ánh trên URL. Ví dụ, với các tệp trong thư mục dự án của bạn:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Nếu bạn tạo một máy chủ web với `mywebsite` làm gốc, ánh xạ URL sẽ là:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Tuy nhiên, đối với ứng dụng web của chúng ta, chúng ta đang sử dụng một tệp HTML duy nhất chứa tất cả các màn hình, vì vậy hành vi mặc định này sẽ không giúp ích. Chúng ta phải tạo ánh xạ này thủ công và cập nhật mẫu hiển thị bằng JavaScript.

### Nhiệm vụ

Chúng ta sẽ sử dụng một đối tượng đơn giản để triển khai một [bản đồ](https://en.wikipedia.org/wiki/Associative_array) giữa các đường dẫn URL và các mẫu của chúng ta. Thêm đối tượng này vào đầu tệp `app.js` của bạn.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Bây giờ hãy sửa đổi một chút hàm `updateRoute`. Thay vì truyền trực tiếp `templateId` làm tham số, chúng ta muốn lấy nó bằng cách đầu tiên kiểm tra URL hiện tại, sau đó sử dụng bản đồ của chúng ta để lấy giá trị `templateId` tương ứng. Chúng ta có thể sử dụng [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) để chỉ lấy phần đường dẫn từ URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Ở đây chúng ta đã ánh xạ các định tuyến đã khai báo tới mẫu tương ứng. Bạn có thể thử xem nó hoạt động chính xác bằng cách thay đổi URL thủ công trong trình duyệt.

✅ Điều gì xảy ra nếu bạn nhập một đường dẫn không xác định trong URL? Làm thế nào chúng ta có thể giải quyết điều này?

## Thêm điều hướng

Bước tiếp theo cho ứng dụng của chúng ta là thêm khả năng điều hướng giữa các trang mà không cần thay đổi URL thủ công. Điều này bao gồm hai việc:

1. Cập nhật URL hiện tại
2. Cập nhật mẫu hiển thị dựa trên URL mới

Chúng ta đã xử lý phần thứ hai với hàm `updateRoute`, vì vậy chúng ta cần tìm cách cập nhật URL hiện tại.

Chúng ta sẽ phải sử dụng JavaScript và cụ thể hơn là [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), cho phép cập nhật URL và tạo một mục mới trong lịch sử duyệt web, mà không cần tải lại HTML.

> Lưu ý: Mặc dù phần tử liên kết HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) có thể được sử dụng để tạo siêu liên kết đến các URL khác nhau, nhưng mặc định nó sẽ khiến trình duyệt tải lại HTML. Cần ngăn hành vi này khi xử lý định tuyến bằng JavaScript tùy chỉnh, bằng cách sử dụng hàm `preventDefault()` trên sự kiện nhấp chuột.

### Nhiệm vụ

Hãy tạo một hàm mới mà chúng ta có thể sử dụng để điều hướng trong ứng dụng:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Phương thức này đầu tiên cập nhật URL hiện tại dựa trên đường dẫn được cung cấp, sau đó cập nhật mẫu. Thuộc tính `window.location.origin` trả về gốc URL, cho phép chúng ta tái tạo một URL đầy đủ từ một đường dẫn được cung cấp.

Bây giờ chúng ta đã có hàm này, chúng ta có thể xử lý vấn đề nếu một đường dẫn không khớp với bất kỳ định tuyến nào đã định nghĩa. Chúng ta sẽ sửa đổi hàm `updateRoute` bằng cách thêm một phương án dự phòng cho một trong các định tuyến hiện có nếu không tìm thấy khớp.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Nếu không tìm thấy định tuyến, chúng ta sẽ chuyển hướng đến trang `login`.

Bây giờ hãy tạo một hàm để lấy URL khi một liên kết được nhấp và ngăn hành vi liên kết mặc định của trình duyệt:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Hãy hoàn thiện hệ thống điều hướng bằng cách thêm các ràng buộc vào các liên kết *Login* và *Logout* trong HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Đối tượng `event` ở trên, bắt sự kiện `click` và truyền nó vào hàm `onLinkClick` của chúng ta.

Sử dụng thuộc tính [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) để ràng buộc sự kiện `click` với mã JavaScript, ở đây là lời gọi đến hàm `navigate()`.

Hãy thử nhấp vào các liên kết này, bạn sẽ có thể điều hướng giữa các màn hình khác nhau của ứng dụng.

✅ Phương thức `history.pushState` là một phần của tiêu chuẩn HTML5 và được triển khai trong [tất cả các trình duyệt hiện đại](https://caniuse.com/?search=pushState). Nếu bạn đang xây dựng một ứng dụng web cho các trình duyệt cũ hơn, có một mẹo bạn có thể sử dụng thay thế API này: sử dụng một [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) trước đường dẫn, bạn có thể triển khai định tuyến hoạt động với điều hướng liên kết thông thường và không tải lại trang, vì mục đích của nó là tạo liên kết nội bộ trong một trang.

## Xử lý nút quay lại và tiến tới của trình duyệt

Sử dụng `history.pushState` tạo các mục mới trong lịch sử điều hướng của trình duyệt. Bạn có thể kiểm tra điều đó bằng cách giữ nút *quay lại* của trình duyệt, nó sẽ hiển thị như sau:

![Ảnh chụp màn hình lịch sử điều hướng](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.vi.png)

Nếu bạn thử nhấp vào nút quay lại vài lần, bạn sẽ thấy rằng URL hiện tại thay đổi và lịch sử được cập nhật, nhưng mẫu hiển thị vẫn giữ nguyên.

Đó là vì ứng dụng không biết rằng chúng ta cần gọi `updateRoute()` mỗi khi lịch sử thay đổi. Nếu bạn xem tài liệu [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), bạn sẽ thấy rằng nếu trạng thái thay đổi - nghĩa là chúng ta đã chuyển đến một URL khác - sự kiện [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) sẽ được kích hoạt. Chúng ta sẽ sử dụng điều đó để khắc phục vấn đề này.

### Nhiệm vụ

Để đảm bảo mẫu hiển thị được cập nhật khi lịch sử trình duyệt thay đổi, chúng ta sẽ gắn một hàm mới gọi `updateRoute()`. Chúng ta sẽ làm điều đó ở cuối tệp `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Lưu ý: chúng ta đã sử dụng [hàm mũi tên](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) để khai báo trình xử lý sự kiện `popstate` của chúng ta cho ngắn gọn, nhưng một hàm thông thường cũng sẽ hoạt động tương tự.

Dưới đây là một video ôn tập về hàm mũi tên:

[![Hàm Mũi Tên](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Hàm Mũi Tên")

> 🎥 Nhấp vào hình ảnh trên để xem video về hàm mũi tên.

Bây giờ hãy thử sử dụng các nút quay lại và tiến tới của trình duyệt, và kiểm tra xem định tuyến hiển thị có được cập nhật chính xác lần này không.

---

## 🚀 Thử thách

Thêm một mẫu và định tuyến mới cho một trang thứ ba hiển thị thông tin về nhóm phát triển ứng dụng này.

## Câu hỏi sau bài học

[Câu hỏi sau bài học](https://ff-quizzes.netlify.app/web/quiz/42)

## Ôn tập & Tự học

Định tuyến là một trong những phần bất ngờ khó khăn của phát triển web, đặc biệt khi web chuyển từ hành vi tải lại trang sang các ứng dụng một trang (SPA). Đọc thêm về [cách dịch vụ Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) xử lý định tuyến. Bạn có thể giải thích tại sao một số quyết định được mô tả trong tài liệu đó là cần thiết không?

## Bài tập

[Cải thiện định tuyến](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.