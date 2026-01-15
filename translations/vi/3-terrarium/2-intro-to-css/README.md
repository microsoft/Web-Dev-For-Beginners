<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e39f3a4e3bcccf94639e3af1248f8a4d",
  "translation_date": "2025-11-06T11:23:52+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "vi"
}
-->
# Dự án Terrarium Phần 2: Giới thiệu về CSS

```mermaid
journey
    title Your CSS Styling Journey
    section Foundation
      Link CSS file: 3: Student
      Understand cascade: 4: Student
      Learn inheritance: 4: Student
    section Selectors
      Element targeting: 4: Student
      Class patterns: 5: Student
      ID specificity: 5: Student
    section Layout
      Position elements: 4: Student
      Create containers: 5: Student
      Build terrarium: 5: Student
    section Polish
      Add visual effects: 5: Student
      Responsive design: 5: Student
      Glass reflections: 5: Student
```

![Giới thiệu về CSS](../../../../translated_images/vi/webdev101-css.3f7af5991bf53a20.webp)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

Bạn còn nhớ terrarium HTML của mình trông khá đơn giản chứ? CSS chính là nơi chúng ta biến cấu trúc cơ bản đó thành một thứ hấp dẫn về mặt thị giác.

Nếu HTML giống như việc xây dựng khung của một ngôi nhà, thì CSS là tất cả những gì làm cho ngôi nhà trở nên ấm cúng - màu sơn, cách sắp xếp nội thất, ánh sáng, và cách các phòng kết nối với nhau. Hãy nghĩ đến việc Cung điện Versailles bắt đầu chỉ là một nhà săn bắn đơn giản, nhưng sự chú ý cẩn thận đến trang trí và bố cục đã biến nó thành một trong những công trình tráng lệ nhất thế giới.

Hôm nay, chúng ta sẽ biến terrarium của bạn từ chức năng sang hoàn thiện. Bạn sẽ học cách định vị các phần tử chính xác, tạo bố cục phản hồi với các kích thước màn hình khác nhau, và tạo sự hấp dẫn thị giác khiến các trang web trở nên thú vị.

Kết thúc bài học này, bạn sẽ thấy cách CSS chiến lược có thể cải thiện đáng kể dự án của bạn. Hãy thêm phong cách cho terrarium của bạn.

```mermaid
mindmap
  root((CSS Fundamentals))
    Cascade
      Specificity Rules
      Inheritance
      Priority Order
      Conflict Resolution
    Selectors
      Element Tags
      Classes (.class)
      IDs (#id)
      Combinators
    Box Model
      Margin
      Border
      Padding
      Content
    Layout
      Positioning
      Display Types
      Flexbox
      Grid
    Visual Effects
      Colors
      Shadows
      Transitions
      Animations
    Responsive Design
      Media Queries
      Flexible Units
      Viewport Meta
      Mobile First
```

## Quiz trước bài học

[Quiz trước bài học](https://ff-quizzes.netlify.app/web/quiz/17)

## Bắt đầu với CSS

CSS thường được nghĩ đến như việc "làm mọi thứ đẹp hơn," nhưng nó phục vụ một mục đích rộng hơn nhiều. CSS giống như đạo diễn của một bộ phim - bạn kiểm soát không chỉ cách mọi thứ trông như thế nào, mà còn cách chúng di chuyển, phản hồi tương tác, và thích nghi với các tình huống khác nhau.

CSS hiện đại rất mạnh mẽ. Bạn có thể viết mã tự động điều chỉnh bố cục cho điện thoại, máy tính bảng, và máy tính để bàn. Bạn có thể tạo các hoạt ảnh mượt mà hướng sự chú ý của người dùng đến nơi cần thiết. Kết quả có thể rất ấn tượng khi mọi thứ hoạt động cùng nhau.

> 💡 **Mẹo chuyên nghiệp**: CSS liên tục phát triển với các tính năng và khả năng mới. Luôn kiểm tra [CanIUse.com](https://caniuse.com) để xác minh hỗ trợ trình duyệt cho các tính năng CSS mới trước khi sử dụng chúng trong các dự án thực tế.

**Những gì chúng ta sẽ đạt được trong bài học này:**
- **Tạo** thiết kế thị giác hoàn chỉnh cho terrarium của bạn bằng các kỹ thuật CSS hiện đại
- **Khám phá** các khái niệm cơ bản như cascade, inheritance, và CSS selectors
- **Triển khai** các chiến lược định vị và bố cục phản hồi
- **Xây dựng** container terrarium bằng các hình dạng và phong cách CSS

### Điều kiện tiên quyết

Bạn nên hoàn thành cấu trúc HTML cho terrarium của mình từ bài học trước và sẵn sàng để được tạo kiểu.

> 📺 **Tài nguyên video**: Xem video hướng dẫn hữu ích này
>
> [![Hướng dẫn cơ bản về CSS](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Thiết lập tệp CSS của bạn

Trước khi chúng ta bắt đầu tạo kiểu, chúng ta cần kết nối CSS với HTML. Kết nối này cho trình duyệt biết nơi tìm các hướng dẫn tạo kiểu cho terrarium của chúng ta.

Trong thư mục terrarium của bạn, tạo một tệp mới có tên `style.css`, sau đó liên kết nó trong phần `<head>` của tài liệu HTML:

```html
<link rel="stylesheet" href="./style.css" />
```

**Đoạn mã này làm gì:**
- **Tạo** kết nối giữa tệp HTML và CSS của bạn
- **Thông báo** cho trình duyệt tải và áp dụng các kiểu từ `style.css`
- **Sử dụng** thuộc tính `rel="stylesheet"` để chỉ định đây là tệp CSS
- **Tham chiếu** đường dẫn tệp với `href="./style.css"`

## Hiểu về CSS Cascade

Bạn đã bao giờ tự hỏi tại sao CSS được gọi là "Cascading" Style Sheets chưa? Các kiểu cascade xuống như một thác nước, và đôi khi chúng xung đột với nhau.

Hãy nghĩ đến cách cấu trúc chỉ huy quân sự hoạt động - một lệnh chung có thể nói "tất cả binh lính mặc màu xanh lá cây," nhưng một lệnh cụ thể cho đơn vị của bạn có thể nói "mặc đồng phục xanh dương cho buổi lễ." Lệnh cụ thể hơn sẽ được ưu tiên. CSS tuân theo logic tương tự, và hiểu được thứ tự này giúp việc gỡ lỗi trở nên dễ dàng hơn nhiều.

### Thử nghiệm với ưu tiên Cascade

Hãy xem cascade hoạt động bằng cách tạo một xung đột kiểu. Đầu tiên, thêm một kiểu inline vào thẻ `<h1>` của bạn:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Đoạn mã này làm gì:**
- **Áp dụng** màu đỏ trực tiếp cho phần tử `<h1>` bằng cách sử dụng kiểu inline
- **Sử dụng** thuộc tính `style` để nhúng CSS trực tiếp vào HTML
- **Tạo** quy tắc kiểu ưu tiên cao nhất cho phần tử cụ thể này

Tiếp theo, thêm quy tắc này vào tệp `style.css` của bạn:

```css
h1 {
  color: blue;
}
```

**Trong đoạn trên, chúng ta đã:**
- **Định nghĩa** một quy tắc CSS nhắm đến tất cả các phần tử `<h1>`
- **Đặt** màu văn bản thành màu xanh dương bằng cách sử dụng stylesheet bên ngoài
- **Tạo** quy tắc ưu tiên thấp hơn so với kiểu inline

✅ **Kiểm tra kiến thức**: Màu nào hiển thị trong ứng dụng web của bạn? Tại sao màu đó lại thắng? Bạn có thể nghĩ đến các tình huống mà bạn muốn ghi đè các kiểu không?

```mermaid
flowchart TD
    A["Browser encounters h1 element"] --> B{"Check for inline styles"}
    B -->|Found| C["style='color: red'"] 
    B -->|None| D{"Check for ID rules"}
    C --> E["Apply red color (1000 points)"]
    D -->|Found| F["#heading { color: green }"]
    D -->|None| G{"Check for class rules"}
    F --> H["Apply green color (100 points)"]
    G -->|Found| I[".title { color: blue }"]
    G -->|None| J{"Check element rules"}
    I --> K["Apply blue color (10 points)"]
    J -->|Found| L["h1 { color: purple }"]
    J -->|None| M["Use browser default"]
    L --> N["Apply purple color (1 point)"]
    
    style C fill:#ff6b6b
    style F fill:#51cf66
    style I fill:#339af0
    style L fill:#9775fa
```

> 💡 **Thứ tự ưu tiên CSS (từ cao đến thấp):**
> 1. **Kiểu inline** (thuộc tính style)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) và thuộc tính
> 4. **Selectors phần tử** (h1, div, p)
> 5. **Mặc định trình duyệt**

## CSS Inheritance trong thực tế

CSS inheritance hoạt động giống như di truyền học - các phần tử thừa hưởng một số thuộc tính từ phần tử cha của chúng. Nếu bạn đặt font family trên phần tử body, tất cả văn bản bên trong sẽ tự động sử dụng cùng font đó. Nó giống như cách đặc điểm hàm đặc trưng của gia đình Habsburg xuất hiện qua các thế hệ mà không cần được chỉ định cho từng cá nhân.

Tuy nhiên, không phải mọi thứ đều được thừa hưởng. Các kiểu văn bản như font và màu sắc được thừa hưởng, nhưng các thuộc tính bố cục như margin và border thì không. Giống như trẻ em có thể thừa hưởng đặc điểm ngoại hình nhưng không phải phong cách thời trang của cha mẹ.

### Quan sát Font Inheritance

Hãy xem inheritance hoạt động bằng cách đặt font family trên phần tử `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Phân tích điều gì xảy ra ở đây:**
- **Đặt** font family cho toàn bộ trang bằng cách nhắm đến phần tử `<body>`
- **Sử dụng** một font stack với các tùy chọn dự phòng để tăng khả năng tương thích trình duyệt
- **Áp dụng** các font hệ thống hiện đại trông đẹp trên các hệ điều hành khác nhau
- **Đảm bảo** tất cả các phần tử con thừa hưởng font này trừ khi bị ghi đè cụ thể

Mở công cụ phát triển của trình duyệt (F12), điều hướng đến tab Elements, và kiểm tra phần tử `<h1>` của bạn. Bạn sẽ thấy rằng nó thừa hưởng font family từ body:

![font thừa hưởng](../../../../translated_images/vi/1.cc07a5cbe114ad1d.webp)

✅ **Thời gian thử nghiệm**: Hãy thử đặt các thuộc tính có thể thừa hưởng khác trên `<body>` như `color`, `line-height`, hoặc `text-align`. Điều gì xảy ra với tiêu đề và các phần tử khác?

> 📝 **Các thuộc tính có thể thừa hưởng bao gồm**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Các thuộc tính không thể thừa hưởng bao gồm**: `margin`, `padding`, `border`, `width`, `height`, `position`

### 🔄 **Kiểm tra sư phạm**
**Hiểu nền tảng CSS**: Trước khi chuyển sang selectors, hãy đảm bảo bạn có thể:
- ✅ Giải thích sự khác biệt giữa cascade và inheritance
- ✅ Dự đoán kiểu nào sẽ thắng trong xung đột specificity
- ✅ Xác định thuộc tính nào thừa hưởng từ phần tử cha
- ✅ Kết nối tệp CSS với HTML đúng cách

**Kiểm tra nhanh**: Nếu bạn có các kiểu này, màu nào sẽ xuất hiện cho `<h1>` bên trong `<div class="special">`?
```css
div { color: blue; }
.special { color: green; }
h1 { color: red; }
```
*Đáp án: Đỏ (selector phần tử nhắm trực tiếp đến h1)*

## Làm chủ CSS Selectors

CSS selectors là cách bạn nhắm đến các phần tử cụ thể để tạo kiểu. Chúng hoạt động như việc đưa ra chỉ dẫn chính xác - thay vì nói "ngôi nhà," bạn có thể nói "ngôi nhà màu xanh với cửa đỏ trên phố Maple."

CSS cung cấp các cách khác nhau để cụ thể, và việc chọn đúng selector giống như chọn công cụ phù hợp cho nhiệm vụ. Đôi khi bạn cần tạo kiểu cho mọi cánh cửa trong khu phố, và đôi khi chỉ một cánh cửa cụ thể.

### Selectors phần tử (Tags)

Selectors phần tử nhắm đến các phần tử HTML theo tên thẻ của chúng. Chúng rất phù hợp để đặt các kiểu cơ bản áp dụng rộng rãi trên trang của bạn:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Hiểu các kiểu này:**
- **Đặt** kiểu chữ nhất quán trên toàn bộ trang với selector `body`
- **Loại bỏ** margin và padding mặc định của trình duyệt để kiểm soát tốt hơn
- **Tạo kiểu** cho tất cả các phần tử tiêu đề với màu sắc, căn chỉnh, và khoảng cách
- **Sử dụng** đơn vị `rem` để kích thước font có thể mở rộng và truy cập được

Mặc dù selectors phần tử hoạt động tốt cho việc tạo kiểu chung, bạn sẽ cần các selectors cụ thể hơn để tạo kiểu cho các thành phần riêng lẻ như các cây trong terrarium của bạn.

### Selectors ID cho các phần tử duy nhất

Selectors ID sử dụng ký hiệu `#` và nhắm đến các phần tử với thuộc tính `id` cụ thể. Vì IDs phải là duy nhất trên một trang, chúng rất phù hợp để tạo kiểu cho các phần tử đặc biệt, riêng lẻ như các container cây bên trái và bên phải của terrarium.

Hãy tạo kiểu cho các container bên của terrarium nơi các cây sẽ sống:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Đoạn mã này đạt được điều gì:**
- **Định vị** các container ở các cạnh trái và phải bằng cách sử dụng định vị `absolute`
- **Sử dụng** đơn vị `vh` (viewport height) để chiều cao phản hồi với kích thước màn hình
- **Áp dụng** `box-sizing: border-box` để padding được tính vào tổng chiều rộng
- **Loại bỏ** các đơn vị `px` không cần thiết từ các giá trị bằng không để mã sạch hơn
- **Đặt** màu nền nhẹ nhàng hơn màu xám đậm

✅ **Thách thức chất lượng mã**: Lưu ý cách CSS này vi phạm nguyên tắc DRY (Don't Repeat Yourself). Bạn có thể refactor nó bằng cách sử dụng cả ID và class không?

**Cách tiếp cận cải tiến:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Selectors Class cho các kiểu tái sử dụng

Selectors Class sử dụng ký hiệu `.` và rất phù hợp khi bạn muốn áp dụng cùng một kiểu cho nhiều phần tử. Không giống như IDs, classes có thể được tái sử dụng trong toàn bộ HTML của bạn, khiến chúng lý tưởng cho các mẫu kiểu nhất quán.

Trong terrarium của chúng ta, mỗi cây cần kiểu tương tự nhưng cũng cần định vị riêng. Chúng ta sẽ sử dụng kết hợp các classes cho kiểu chia sẻ và IDs cho định vị riêng.

**Đây là cấu trúc HTML cho mỗi cây:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/vi/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.png" />
</div>
```

**Các yếu tố chính được giải thích:**
- **Sử dụng** `class="plant-holder"` cho kiểu container nhất quán trên tất cả các cây
- **Áp dụng** `class="plant"` cho kiểu và hành vi hình ảnh chia sẻ
- **Bao gồm** `id="plant1"` duy nhất cho định vị riêng và tương tác JavaScript
- **Cung cấp** văn bản alt mô tả để truy cập cho trình đọc màn hình

Bây giờ thêm các kiểu này vào tệp `style.css` của bạn:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Phân tích các kiểu này:**
- **Tạo** định vị tương đối cho container cây để thiết lập ngữ cảnh định vị
- **Đặt** mỗi container cây có chiều cao 13%, đảm bảo tất cả các cây vừa vặn theo chiều dọc mà không cần cuộn
- **Dịch chuyển** các container hơi sang trái để cây được căn giữa tốt hơn trong các container của chúng
- **Cho phép** các cây mở rộng phản hồi với các thuộc tính `max-width` và `max-height`
- **Sử dụng** `z-index` để xếp lớp các cây trên các phần tử khác trong terrarium
- **Thêm** hiệu ứng hover nhẹ nhàng với các chuyển đổi CSS để tương tác người dùng tốt hơn

✅ **Tư duy phản biện**: Tại sao chúng ta cần cả selectors `.plant-holder` và `.plant`? Điều gì sẽ xảy ra nếu chúng ta cố gắng chỉ sử dụng một?

> 💡 **Mẫu thiết kế**: Container (`.plant-holder`) kiểm soát bố cục và định vị, trong khi nội dung (`.plant`) kiểm soát diện mạo và mở rộng. Sự tách biệt này làm cho mã dễ bảo trì và linh hoạt hơn.

## Hiểu về CSS Positioning

CSS positioning giống như việc làm đạo diễn sân khấu cho một vở kịch - bạn chỉ đạo nơi mỗi diễn viên đứng và cách họ di chuyển trên sân khấu. Một số diễn viên tuân theo đội hình tiêu chuẩn, trong khi những người khác cần định vị cụ thể để tạo hiệu ứng kịch tính.

Khi bạn hiểu về positioning, nhiều thách thức bố cục trở nên dễ quản lý. Cần một thanh điều hướng luôn ở trên cùng khi người dùng cuộn? Positioning xử lý điều đó. Muốn một tooltip xuất hiện ở vị trí cụ thể? Đó cũng là positioning.

### Năm giá trị Position

```mermaid
quadrantChart
    title CSS Positioning Strategy
    x-axis Document Flow --> Removed from Flow
    y-axis Static Position --> Precise Control
    quadrant-1 Absolute
    quadrant-2 Fixed
    quadrant-3 Static
    quadrant-4 Sticky
    
    Static: [0.2, 0.2]
    Relative: [0.3, 0.6]
    Absolute: [0.8, 0.8]
    Fixed: [0.9, 0.7]
    Sticky: [0.5, 0.9]
```

| Giá trị Position | Hành vi | Trường hợp sử dụng |
|------------------|---------|--------------------|
| `static` | Dòng chảy mặc định, bỏ qua top/left/right/bottom | Bố cục tài liệu bình thường |
| `relative` | Định vị tương đối với vị trí bình thường của nó | Điều chỉnh nhỏ, tạo ngữ cảnh định vị |
| `absolute` | Định vị tương đối với tổ tiên được định vị gần nhất | Đặt chính xác, lớp phủ |
| `fixed` | Định vị tương đối với viewport | Thanh điều hướng, phần tử nổi |
| `sticky` | Chuyển đổi giữa relative và fixed dựa trên cuộn | Tiêu đề dính khi cuộn |

### Positioning trong Terrarium của chúng ta

Terrarium của chúng ta sử dụng kết hợp chiến lược các loại positioning để tạo bố cục mong muốn:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Hiểu chiến lược định vị:**
- **Các container absolute** được loại bỏ khỏi dòng chảy tài liệu bình thường và ghim vào các cạnh màn hình
- **Các container cây relative** tạo ngữ cảnh định vị trong khi vẫn ở trong dòng chảy tài liệu
- **Các cây absolute** có thể được định vị chính xác trong các container relative của chúng
- **Sự kết hợp này** cho phép các cây xếp chồng theo chiều dọc trong khi có thể định vị riêng lẻ

> 🎯 **Tại sao điều này quan trọng**: Các phần tử `plant` cần định vị absolute để trở thành draggable trong bài học tiếp theo. Định vị absolute loại bỏ chúng khỏi dòng chảy bố cục bình thường, làm cho tương tác kéo-thả trở nên khả thi.

✅ **Thời gian thử nghiệm**: Hãy thử thay đổi các giá trị định vị và quan sát kết quả:
- Điều gì xảy ra nếu bạn thay đổi `.container` từ `absolute` sang `relative`?
- Làm thế nào bố cục thay đổi nếu `.plant-holder` sử dụng `absolute` thay vì `relative`?
- Điều gì xảy ra khi bạn chuyển `.plant` sang định vị `relative`?

### 🔄 **Kiểm tra Sư phạm**
**Thành thạo Định vị CSS**: Dừng lại để kiểm tra sự hiểu biết của bạn:
- ✅ Bạn có thể giải thích tại sao cây cần định vị tuyệt đối để kéo và thả không?
- ✅ Bạn có hiểu cách các container tương đối tạo ngữ cảnh định vị không?
- ✅ Tại sao các container bên sử dụng định vị tuyệt đối?
- ✅ Điều gì sẽ xảy ra nếu bạn loại bỏ hoàn toàn các khai báo định vị?

**Kết nối Thực tế**: Hãy nghĩ về cách định vị CSS phản ánh bố cục thực tế:
- **Static**: Sách trên kệ (trật tự tự nhiên)
- **Relative**: Di chuyển một cuốn sách một chút nhưng vẫn giữ vị trí của nó
- **Absolute**: Đặt một dấu trang tại một số trang cụ thể
- **Fixed**: Một ghi chú dính luôn hiển thị khi bạn lật trang

## Xây dựng Terrarium với CSS

Bây giờ chúng ta sẽ xây dựng một lọ thủy tinh chỉ bằng CSS - không cần hình ảnh hay phần mềm đồ họa.

Tạo hiệu ứng thủy tinh, bóng và chiều sâu thực tế bằng cách sử dụng định vị và độ trong suốt thể hiện khả năng hình ảnh của CSS. Kỹ thuật này phản ánh cách các kiến trúc sư trong phong trào Bauhaus sử dụng các hình dạng hình học đơn giản để tạo ra các cấu trúc phức tạp, đẹp mắt. Khi bạn hiểu các nguyên tắc này, bạn sẽ nhận ra các kỹ thuật CSS đằng sau nhiều thiết kế web.

```mermaid
flowchart LR
    A[Jar Top] --> E[Complete Terrarium]
    B[Jar Walls] --> E
    C[Dirt Layer] --> E
    D[Jar Bottom] --> E
    F[Glass Effects] --> E
    
    A1["50% width<br/>5% height<br/>Top position"] --> A
    B1["60% width<br/>80% height<br/>Rounded corners<br/>0.5 opacity"] --> B
    C1["60% width<br/>5% height<br/>Dark brown<br/>Bottom layer"] --> C
    D1["50% width<br/>1% height<br/>Bottom position"] --> D
    F1["Subtle shadows<br/>Transparency<br/>Z-index layering"] --> F
    
    style E fill:#d1e1df,stroke:#3a241d
    style A fill:#e8f5e8
    style B fill:#e8f5e8
    style C fill:#8B4513
    style D fill:#e8f5e8
```

### Tạo các Thành phần Lọ Thủy tinh

Hãy xây dựng từng phần của lọ terrarium. Mỗi phần sử dụng định vị tuyệt đối và kích thước dựa trên phần trăm để thiết kế đáp ứng:

```css
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
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
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
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
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

**Hiểu về cấu trúc terrarium:**
- **Sử dụng** kích thước dựa trên phần trăm để mở rộng đáp ứng trên mọi kích thước màn hình
- **Định vị** các phần tử tuyệt đối để xếp chồng và căn chỉnh chính xác
- **Áp dụng** các giá trị độ mờ khác nhau để tạo hiệu ứng trong suốt của thủy tinh
- **Thực hiện** lớp `z-index` để cây xuất hiện bên trong lọ
- **Thêm** bóng hộp tinh tế và bo góc để tạo vẻ ngoài thực tế hơn

### Thiết kế Đáp ứng với Kích thước Phần trăm

Hãy chú ý cách tất cả các kích thước sử dụng phần trăm thay vì giá trị pixel cố định:

**Tại sao điều này quan trọng:**
- **Đảm bảo** terrarium mở rộng tỷ lệ trên bất kỳ kích thước màn hình nào
- **Duy trì** mối quan hệ hình ảnh giữa các thành phần lọ
- **Cung cấp** trải nghiệm nhất quán từ điện thoại di động đến màn hình máy tính lớn
- **Cho phép** thiết kế thích ứng mà không phá vỡ bố cục hình ảnh

### Đơn vị CSS trong Thực tế

Chúng ta đang sử dụng đơn vị `rem` cho bo góc, đơn vị này mở rộng theo kích thước font gốc. Điều này tạo ra các thiết kế dễ tiếp cận hơn, tôn trọng sở thích font của người dùng. Tìm hiểu thêm về [đơn vị tương đối CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) trong tài liệu chính thức.

✅ **Thử nghiệm Hình ảnh**: Thử thay đổi các giá trị này và quan sát hiệu ứng:
- Thay đổi độ mờ của lọ từ 0.5 thành 0.8 – điều này ảnh hưởng thế nào đến vẻ ngoài của thủy tinh?
- Điều chỉnh màu đất từ `#3a241d` thành `#8B4513` – tác động hình ảnh là gì?
- Sửa đổi `z-index` của đất thành 2 – điều gì xảy ra với lớp?

### 🔄 **Kiểm tra Sư phạm**
**Hiểu Thiết kế Hình ảnh CSS**: Xác nhận sự hiểu biết của bạn về CSS hình ảnh:
- ✅ Làm thế nào kích thước dựa trên phần trăm tạo ra thiết kế đáp ứng?
- ✅ Tại sao độ mờ tạo hiệu ứng trong suốt của thủy tinh?
- ✅ Vai trò của z-index trong việc xếp lớp các phần tử là gì?
- ✅ Làm thế nào giá trị bo góc tạo hình dạng lọ?

**Nguyên tắc Thiết kế**: Hãy chú ý cách chúng ta xây dựng hình ảnh phức tạp từ các hình dạng đơn giản:
1. **Hình chữ nhật** → **Hình chữ nhật bo góc** → **Thành phần lọ**
2. **Màu phẳng** → **Độ mờ** → **Hiệu ứng thủy tinh**
3. **Phần tử riêng lẻ** → **Bố cục xếp lớp** → **Hiệu ứng 3D**

---

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Tạo một hoạt ảnh CSS làm cho cây trong terrarium nhẹ nhàng đung đưa qua lại, mô phỏng hiệu ứng gió tự nhiên. Điều này sẽ giúp bạn thực hành hoạt ảnh CSS, biến đổi và keyframes đồng thời tăng tính hấp dẫn hình ảnh của terrarium.

**Yêu cầu:** Thêm hoạt ảnh keyframe CSS để làm cho cây trong terrarium nhẹ nhàng đung đưa từ bên này sang bên kia. Tạo một hoạt ảnh đung đưa xoay mỗi cây nhẹ nhàng (2-3 độ) sang trái và phải với thời gian 3-4 giây, và áp dụng nó cho lớp `.plant`. Đảm bảo hoạt ảnh lặp lại vô hạn và có hàm easing để chuyển động tự nhiên.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## 🚀 Thử thách: Thêm Hiệu ứng Phản chiếu Thủy tinh

Sẵn sàng nâng cấp terrarium của bạn với hiệu ứng phản chiếu thủy tinh thực tế? Kỹ thuật này sẽ thêm chiều sâu và tính chân thực vào thiết kế.

Bạn sẽ tạo các điểm sáng tinh tế mô phỏng cách ánh sáng phản chiếu trên bề mặt thủy tinh. Cách tiếp cận này tương tự như cách các họa sĩ thời Phục hưng như Jan van Eyck sử dụng ánh sáng và phản chiếu để làm cho thủy tinh được vẽ trông như ba chiều. Đây là mục tiêu của bạn:

![terrarium hoàn thiện](../../../../translated_images/vi/terrarium-final.2f07047ffc597d0a.webp)

**Thử thách của bạn:**
- **Tạo** các hình oval màu trắng hoặc sáng để làm hiệu ứng phản chiếu thủy tinh
- **Định vị** chúng một cách chiến lược ở phía bên trái của lọ
- **Áp dụng** hiệu ứng độ mờ và làm mờ phù hợp để phản chiếu ánh sáng thực tế
- **Sử dụng** `border-radius` để tạo hình dạng bong bóng tự nhiên
- **Thử nghiệm** với gradient hoặc bóng hộp để tăng tính chân thực

## Bài kiểm tra sau bài giảng

[Bài kiểm tra sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/18)

## Mở rộng Kiến thức CSS của Bạn

CSS có thể cảm thấy phức tạp ban đầu, nhưng hiểu các khái niệm cốt lõi này cung cấp nền tảng vững chắc cho các kỹ thuật nâng cao hơn.

**Các lĩnh vực học CSS tiếp theo của bạn:**
- **Flexbox** - đơn giản hóa căn chỉnh và phân phối các phần tử
- **CSS Grid** - cung cấp công cụ mạnh mẽ để tạo bố cục phức tạp
- **CSS Variables** - giảm sự lặp lại và cải thiện khả năng duy trì
- **Thiết kế đáp ứng** - đảm bảo trang web hoạt động tốt trên các kích thước màn hình khác nhau

### Tài nguyên Học Tương tác

Thực hành các khái niệm này với các trò chơi thú vị, tương tác:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Thành thạo Flexbox qua các thử thách thú vị
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Học CSS Grid bằng cách trồng cà rốt ảo
- 🎯 [CSS Battle](https://cssbattle.dev/) - Kiểm tra kỹ năng CSS của bạn với các thử thách mã hóa

### Học thêm

Để nắm vững các nguyên tắc cơ bản của CSS, hoàn thành module Microsoft Learn này: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

### ⚡ **Những gì bạn có thể làm trong 5 phút tới**
- [ ] Mở DevTools và kiểm tra các kiểu CSS trên bất kỳ trang web nào bằng bảng Elements
- [ ] Tạo một tệp CSS đơn giản và liên kết nó với một trang HTML
- [ ] Thử thay đổi màu sắc bằng các phương pháp khác nhau: hex, RGB và tên màu
- [ ] Thực hành mô hình hộp bằng cách thêm padding và margin vào một div

### 🎯 **Những gì bạn có thể hoàn thành trong giờ này**
- [ ] Hoàn thành bài kiểm tra sau bài học và ôn lại các nguyên tắc CSS
- [ ] Tạo kiểu cho trang HTML của bạn với font chữ, màu sắc và khoảng cách
- [ ] Tạo một bố cục đơn giản bằng flexbox hoặc grid
- [ ] Thử nghiệm với các chuyển đổi CSS để tạo hiệu ứng mượt mà
- [ ] Thực hành thiết kế đáp ứng với media queries

### 📅 **Cuộc phiêu lưu CSS kéo dài một tuần của bạn**
- [ ] Hoàn thành bài tập tạo kiểu terrarium với sự sáng tạo
- [ ] Thành thạo CSS Grid bằng cách xây dựng bố cục thư viện ảnh
- [ ] Học hoạt ảnh CSS để làm cho thiết kế của bạn sống động
- [ ] Khám phá các bộ tiền xử lý CSS như Sass hoặc Less
- [ ] Nghiên cứu các nguyên tắc thiết kế và áp dụng chúng vào CSS của bạn
- [ ] Phân tích và tái tạo các thiết kế thú vị mà bạn tìm thấy trực tuyến

### 🌟 **Sự thành thạo thiết kế kéo dài một tháng của bạn**
- [ ] Xây dựng một hệ thống thiết kế trang web đáp ứng hoàn chỉnh
- [ ] Học CSS-in-JS hoặc các framework ưu tiên tiện ích như Tailwind
- [ ] Đóng góp cho các dự án mã nguồn mở với các cải tiến CSS
- [ ] Thành thạo các khái niệm CSS nâng cao như thuộc tính tùy chỉnh CSS và containment
- [ ] Tạo thư viện thành phần tái sử dụng với CSS mô-đun
- [ ] Hướng dẫn người khác học CSS và chia sẻ kiến thức thiết kế

## 🎯 Lộ trình Thành thạo CSS của bạn

```mermaid
timeline
    title CSS Learning Progression
    
    section Foundation (10 minutes)
        File Connection: Link CSS to HTML
                       : Understand cascade rules
                       : Learn inheritance basics
        
    section Selectors (15 minutes)
        Targeting Elements: Element selectors
                          : Class patterns
                          : ID specificity
                          : Combinators
        
    section Box Model (20 minutes)
        Layout Fundamentals: Margin and padding
                           : Border properties
                           : Content sizing
                           : Box-sizing behavior
        
    section Positioning (25 minutes)
        Element Placement: Static vs relative
                         : Absolute positioning
                         : Z-index layering
                         : Responsive units
        
    section Visual Design (30 minutes)
        Styling Mastery: Colors and opacity
                       : Shadows and effects
                       : Transitions
                       : Transform properties
        
    section Responsive Design (45 minutes)
        Multi-Device Support: Media queries
                            : Flexible layouts
                            : Mobile-first approach
                            : Viewport optimization
        
    section Advanced Techniques (1 week)
        Modern CSS: Flexbox layouts
                  : CSS Grid systems
                  : Custom properties
                  : Animation keyframes
        
    section Professional Skills (1 month)
        CSS Architecture: Component patterns
                        : Maintainable code
                        : Performance optimization
                        : Cross-browser compatibility
```

### 🛠️ Tóm tắt Bộ công cụ CSS của bạn

Sau khi hoàn thành bài học này, bạn đã có:
- **Hiểu về Cascade**: Cách các kiểu kế thừa và ghi đè lẫn nhau
- **Thành thạo Selector**: Nhắm mục tiêu chính xác với phần tử, lớp và ID
- **Kỹ năng Định vị**: Đặt và xếp lớp phần tử một cách chiến lược
- **Thiết kế Hình ảnh**: Tạo hiệu ứng thủy tinh, bóng và độ trong suốt
- **Kỹ thuật Đáp ứng**: Bố cục dựa trên phần trăm thích ứng với mọi màn hình
- **Tổ chức Mã**: Cấu trúc CSS sạch, dễ duy trì
- **Thực hành Hiện đại**: Sử dụng đơn vị tương đối và mẫu thiết kế dễ tiếp cận

**Bước tiếp theo**: Terrarium của bạn giờ đã có cấu trúc (HTML) và kiểu dáng (CSS). Bài học cuối cùng sẽ thêm tính tương tác với JavaScript!

## Bài tập

[CSS Refactoring](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.