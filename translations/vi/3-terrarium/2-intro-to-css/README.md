<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T08:57:40+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "vi"
}
-->
# Dự án Terrarium Phần 2: Giới thiệu về CSS

![Giới thiệu về CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Câu hỏi trước bài học

[Câu hỏi trước bài học](https://ff-quizzes.netlify.app/web/quiz/17)

### Giới thiệu

CSS, hay Cascading Style Sheets, giải quyết một vấn đề quan trọng trong phát triển web: làm thế nào để trang web của bạn trông đẹp mắt. Việc tạo kiểu cho ứng dụng của bạn giúp chúng dễ sử dụng hơn và trông hấp dẫn hơn; bạn cũng có thể sử dụng CSS để tạo Thiết kế Web Đáp ứng (Responsive Web Design - RWD) - cho phép ứng dụng của bạn hiển thị tốt trên mọi kích thước màn hình. CSS không chỉ làm cho ứng dụng của bạn trông đẹp mắt; đặc tả của nó còn bao gồm các hoạt ảnh và chuyển đổi, cho phép tạo ra các tương tác phức tạp cho ứng dụng của bạn. Nhóm làm việc CSS giúp duy trì các đặc tả CSS hiện tại; bạn có thể theo dõi công việc của họ tại [trang web của World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Lưu ý, CSS là một ngôn ngữ phát triển theo thời gian, giống như mọi thứ trên web, và không phải tất cả các trình duyệt đều hỗ trợ các phần mới hơn của đặc tả. Luôn kiểm tra các triển khai của bạn bằng cách tham khảo [CanIUse.com](https://caniuse.com).

Trong bài học này, chúng ta sẽ thêm kiểu dáng vào terrarium trực tuyến của mình và tìm hiểu thêm về một số khái niệm CSS: cascade, kế thừa, cách sử dụng bộ chọn, định vị và sử dụng CSS để xây dựng bố cục. Trong quá trình này, chúng ta sẽ bố trí terrarium và tạo ra chính terrarium.

### Điều kiện tiên quyết

Bạn cần có sẵn HTML cho terrarium của mình và sẵn sàng để được tạo kiểu.

> Xem video

> 
> [![Video cơ bản về Git và GitHub](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Nhiệm vụ

Trong thư mục terrarium của bạn, tạo một tệp mới có tên `style.css`. Nhập tệp đó vào phần `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Cascade

Cascading Style Sheets tích hợp ý tưởng rằng các kiểu dáng 'cascade' sao cho việc áp dụng một kiểu dáng được hướng dẫn bởi mức độ ưu tiên của nó. Các kiểu dáng được thiết lập bởi tác giả trang web có mức độ ưu tiên cao hơn so với các kiểu dáng được thiết lập bởi trình duyệt. Các kiểu dáng được thiết lập 'inline' có mức độ ưu tiên cao hơn so với các kiểu dáng được thiết lập trong một tệp style sheet bên ngoài.

### Nhiệm vụ

Thêm kiểu dáng inline "color: red" vào thẻ `<h1>` của bạn:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Sau đó, thêm đoạn mã sau vào tệp `style.css` của bạn:

```CSS
h1 {
 color: blue;
}
```

✅ Màu nào hiển thị trong ứng dụng web của bạn? Tại sao? Bạn có thể tìm cách ghi đè các kiểu dáng không? Khi nào bạn muốn làm điều này, hoặc tại sao không?

---

## Kế thừa

Các kiểu dáng được kế thừa từ một kiểu dáng tổ tiên đến một kiểu dáng con cháu, sao cho các phần tử lồng nhau kế thừa các kiểu dáng của cha mẹ chúng.

### Nhiệm vụ

Đặt phông chữ của body thành một phông chữ nhất định và kiểm tra xem phông chữ của một phần tử lồng nhau:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Mở bảng điều khiển của trình duyệt đến tab 'Elements' và quan sát phông chữ của H1. Nó kế thừa phông chữ từ body, như được chỉ ra trong trình duyệt:

![phông chữ kế thừa](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.vi.png)

✅ Bạn có thể làm cho một kiểu dáng lồng nhau kế thừa một thuộc tính khác không?

---

## Bộ chọn CSS

### Thẻ

Cho đến nay, tệp `style.css` của bạn chỉ có một vài thẻ được tạo kiểu, và ứng dụng trông khá kỳ lạ:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Cách tạo kiểu cho một thẻ như thế này cho phép bạn kiểm soát các phần tử duy nhất, nhưng bạn cần kiểm soát kiểu dáng của nhiều cây trong terrarium của mình. Để làm điều đó, bạn cần tận dụng các bộ chọn CSS.

### Ids

Thêm một số kiểu dáng để bố trí các container bên trái và bên phải. Vì chỉ có một container bên trái và một container bên phải, chúng được gán id trong mã HTML. Để tạo kiểu cho chúng, sử dụng `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Ở đây, bạn đã đặt các container này với định vị tuyệt đối ở phía xa bên trái và bên phải của màn hình, và sử dụng phần trăm cho chiều rộng của chúng để chúng có thể co giãn cho các màn hình di động nhỏ.

✅ Đoạn mã này khá lặp lại, do đó không "DRY" (Don't Repeat Yourself - Đừng lặp lại chính mình); bạn có thể tìm cách tốt hơn để tạo kiểu cho các id này, có thể là với một id và một class không? Bạn sẽ cần thay đổi mã HTML và tái cấu trúc CSS:

```html
<div id="left-container" class="container"></div>
```

### Classes

Trong ví dụ trên, bạn đã tạo kiểu cho hai phần tử duy nhất trên màn hình. Nếu bạn muốn các kiểu dáng áp dụng cho nhiều phần tử trên màn hình, bạn có thể sử dụng các class CSS. Làm điều này để bố trí các cây trong các container bên trái và bên phải.

Lưu ý rằng mỗi cây trong mã HTML có sự kết hợp giữa id và class. Các id ở đây được sử dụng bởi JavaScript mà bạn sẽ thêm sau để thao tác vị trí cây trong terrarium. Các class, tuy nhiên, cung cấp cho tất cả các cây một kiểu dáng nhất định.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Thêm đoạn mã sau vào tệp `style.css` của bạn:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Điểm đáng chú ý trong đoạn mã này là sự kết hợp giữa định vị tương đối và tuyệt đối, mà chúng ta sẽ đề cập trong phần tiếp theo. Hãy xem cách xử lý chiều cao bằng phần trăm:

Bạn đặt chiều cao của giá đỡ cây là 13%, một con số tốt để đảm bảo rằng tất cả các cây được hiển thị trong mỗi container dọc mà không cần cuộn.

Bạn đặt giá đỡ cây di chuyển sang trái để các cây được căn giữa hơn trong container của chúng. Các hình ảnh có một lượng lớn nền trong suốt để làm cho chúng dễ kéo thả hơn, vì vậy cần được đẩy sang trái để phù hợp hơn trên màn hình.

Sau đó, chính cây được đặt max-width là 150%. Điều này cho phép nó co lại khi trình duyệt co lại. Hãy thử thay đổi kích thước trình duyệt của bạn; các cây vẫn nằm trong container của chúng nhưng co lại để phù hợp.

Cũng đáng chú ý là việc sử dụng z-index, kiểm soát độ cao tương đối của một phần tử (để các cây nằm trên container và xuất hiện bên trong terrarium).

✅ Tại sao bạn cần cả bộ chọn CSS cho giá đỡ cây và cây?

## Định vị CSS

Kết hợp các thuộc tính định vị (có các loại static, relative, fixed, absolute, và sticky) có thể hơi phức tạp, nhưng khi thực hiện đúng, nó mang lại cho bạn sự kiểm soát tốt đối với các phần tử trên trang của bạn.

Các phần tử được định vị tuyệt đối được định vị tương đối với tổ tiên gần nhất đã được định vị, và nếu không có tổ tiên nào, nó được định vị theo tài liệu body.

Các phần tử được định vị tương đối được định vị dựa trên hướng dẫn của CSS để điều chỉnh vị trí của nó so với vị trí ban đầu.

Trong ví dụ của chúng ta, `plant-holder` là một phần tử được định vị tương đối nằm trong một container được định vị tuyệt đối. Hành vi kết quả là các container thanh bên được ghim bên trái và bên phải, và `plant-holder` được lồng vào, tự điều chỉnh trong các thanh bên, tạo không gian cho các cây được đặt trong một hàng dọc.

> Chính `plant` cũng có định vị tuyệt đối, cần thiết để làm cho nó có thể kéo thả, như bạn sẽ khám phá trong bài học tiếp theo.

✅ Thử nghiệm với việc chuyển đổi các loại định vị của các container bên và `plant-holder`. Điều gì xảy ra?

## Bố cục CSS

Bây giờ bạn sẽ sử dụng những gì đã học để xây dựng chính terrarium, tất cả bằng CSS!

Đầu tiên, tạo kiểu cho các phần tử con của div `.terrarium` như một hình chữ nhật bo tròn bằng CSS:

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Lưu ý việc sử dụng phần trăm ở đây. Nếu bạn thu nhỏ trình duyệt của mình, bạn có thể thấy cách lọ thủy tinh cũng co lại. Cũng lưu ý các phần trăm chiều rộng và chiều cao của các phần tử lọ và cách mỗi phần tử được định vị tuyệt đối ở trung tâm, ghim vào đáy của khung nhìn.

Chúng ta cũng đang sử dụng `rem` cho border-radius, một đơn vị đo lường tương đối với phông chữ. Đọc thêm về loại đo lường tương đối này trong [đặc tả CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Thử thay đổi màu sắc và độ mờ của lọ so với đất. Điều gì xảy ra? Tại sao?

---

## 🚀Thử thách

Thêm một 'bong bóng' sáng bóng ở khu vực dưới bên trái của lọ để làm cho nó trông giống như thủy tinh hơn. Bạn sẽ tạo kiểu cho `.jar-glossy-long` và `.jar-glossy-short` để trông giống như ánh sáng phản chiếu. Đây là cách nó sẽ trông:

![terrarium hoàn chỉnh](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.vi.png)

Để hoàn thành câu hỏi sau bài học, hãy đi qua module Learn này: [Tạo kiểu cho ứng dụng HTML của bạn với CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Câu hỏi sau bài học

[Câu hỏi sau bài học](https://ff-quizzes.netlify.app/web/quiz/18)

## Ôn tập & Tự học

CSS có vẻ đơn giản, nhưng có nhiều thách thức khi cố gắng tạo kiểu cho một ứng dụng hoàn hảo trên tất cả các trình duyệt và kích thước màn hình. CSS-Grid và Flexbox là các công cụ được phát triển để làm cho công việc này có cấu trúc hơn và đáng tin cậy hơn. Tìm hiểu về các công cụ này bằng cách chơi [Flexbox Froggy](https://flexboxfroggy.com/) và [Grid Garden](https://codepip.com/games/grid-garden/).

## Bài tập

[Tái cấu trúc CSS](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.