<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bc93f6285423033ebf5b8abeb5282888",
  "translation_date": "2025-10-24T13:38:52+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "vi"
}
-->
# Dự án Terrarium Phần 3: Tương tác DOM và Closures trong JavaScript

![DOM và một closure](../../../../translated_images/webdev101-js.10280393044d7eaaec7e847574946add7ddae6be2b2194567d848b61d849334a.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

Chào mừng bạn đến với một trong những khía cạnh thú vị nhất của phát triển web - làm cho mọi thứ trở nên tương tác! Mô hình Đối tượng Tài liệu (DOM) giống như một cây cầu giữa HTML và JavaScript của bạn, và hôm nay chúng ta sẽ sử dụng nó để mang terrarium của bạn vào cuộc sống. Khi Tim Berners-Lee tạo ra trình duyệt web đầu tiên, ông đã hình dung một web nơi các tài liệu có thể trở nên động và tương tác - DOM làm cho tầm nhìn đó trở thành hiện thực.

Chúng ta cũng sẽ khám phá closures trong JavaScript, điều này có thể nghe có vẻ đáng sợ lúc đầu. Hãy nghĩ về closures như việc tạo ra "kho lưu trữ bộ nhớ" nơi các hàm của bạn có thể nhớ thông tin quan trọng. Nó giống như mỗi cây trong terrarium của bạn có một bản ghi dữ liệu riêng để theo dõi vị trí của nó. Đến cuối bài học này, bạn sẽ hiểu được chúng tự nhiên và hữu ích như thế nào.

Đây là những gì chúng ta sẽ xây dựng: một terrarium nơi người dùng có thể kéo và thả cây ở bất kỳ đâu họ muốn. Bạn sẽ học các kỹ thuật thao tác DOM để tạo nên mọi thứ từ tải tệp kéo-thả đến các trò chơi tương tác. Hãy làm cho terrarium của bạn sống động.

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/19)

## Hiểu về DOM: Cánh cửa dẫn đến các trang web tương tác

Mô hình Đối tượng Tài liệu (DOM) là cách JavaScript giao tiếp với các phần tử HTML của bạn. Khi trình duyệt của bạn tải một trang HTML, nó tạo ra một biểu diễn có cấu trúc của trang đó trong bộ nhớ - đó chính là DOM. Hãy nghĩ về nó như một cây gia đình nơi mỗi phần tử HTML là một thành viên gia đình mà JavaScript có thể truy cập, sửa đổi hoặc sắp xếp lại.

Thao tác DOM biến các trang tĩnh thành các trang web tương tác. Mỗi khi bạn thấy một nút thay đổi màu khi di chuột, nội dung được cập nhật mà không cần tải lại trang, hoặc các phần tử có thể kéo xung quanh, đó chính là thao tác DOM đang hoạt động.

![Biểu diễn cây DOM](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.vi.png)

> Một biểu diễn của DOM và mã HTML tham chiếu nó. Từ [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

**Điều gì làm cho DOM mạnh mẽ:**
- **Cung cấp** cách có cấu trúc để truy cập bất kỳ phần tử nào trên trang của bạn
- **Cho phép** cập nhật nội dung động mà không cần tải lại trang
- **Phản hồi** theo thời gian thực với các tương tác của người dùng như nhấp chuột và kéo thả
- **Tạo nền tảng** cho các ứng dụng web tương tác hiện đại

## Closures trong JavaScript: Tạo mã tổ chức và mạnh mẽ

Một [closure trong JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures) giống như việc cung cấp cho một hàm không gian làm việc riêng với bộ nhớ bền vững. Hãy xem xét cách các loài chim của Darwin trên quần đảo Galápagos phát triển các mỏ chuyên biệt dựa trên môi trường cụ thể của chúng - closures hoạt động tương tự, tạo ra các hàm chuyên biệt "nhớ" ngữ cảnh cụ thể của chúng ngay cả sau khi hàm cha đã hoàn thành.

Trong terrarium của chúng ta, closures giúp mỗi cây nhớ vị trí của nó một cách độc lập. Mẫu này xuất hiện xuyên suốt trong phát triển JavaScript chuyên nghiệp, làm cho nó trở thành một khái niệm có giá trị để hiểu.

> 💡 **Hiểu về Closures**: Closures là một chủ đề quan trọng trong JavaScript, và nhiều nhà phát triển sử dụng chúng trong nhiều năm trước khi hiểu đầy đủ tất cả các khía cạnh lý thuyết. Hôm nay, chúng ta tập trung vào ứng dụng thực tế - bạn sẽ thấy closures xuất hiện một cách tự nhiên khi chúng ta xây dựng các tính năng tương tác. Hiểu biết sẽ phát triển khi bạn thấy cách chúng giải quyết các vấn đề thực tế.

![Biểu diễn cây DOM](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.vi.png)

> Một biểu diễn của DOM và mã HTML tham chiếu nó. Từ [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

Trong bài học này, chúng ta sẽ hoàn thành dự án terrarium tương tác bằng cách tạo JavaScript cho phép người dùng thao tác các cây trên trang.

## Trước khi bắt đầu: Chuẩn bị để thành công

Bạn sẽ cần các tệp HTML và CSS từ các bài học terrarium trước - chúng ta sắp làm cho thiết kế tĩnh đó trở nên tương tác. Nếu bạn mới tham gia, hoàn thành các bài học đó trước sẽ cung cấp ngữ cảnh quan trọng.

Đây là những gì chúng ta sẽ xây dựng:
- **Kéo-thả mượt mà** cho tất cả các cây trong terrarium
- **Theo dõi tọa độ** để cây nhớ vị trí của chúng
- **Giao diện tương tác hoàn chỉnh** sử dụng JavaScript thuần
- **Mã sạch, tổ chức** sử dụng mẫu closures

## Thiết lập tệp JavaScript của bạn

Hãy tạo tệp JavaScript sẽ làm cho terrarium của bạn trở nên tương tác.

**Bước 1: Tạo tệp script của bạn**

Trong thư mục terrarium của bạn, tạo một tệp mới có tên `script.js`.

**Bước 2: Liên kết JavaScript với HTML của bạn**

Thêm thẻ script này vào phần `<head>` của tệp `index.html` của bạn:

```html
<script src="./script.js" defer></script>
```

**Tại sao thuộc tính `defer` lại quan trọng:**
- **Đảm bảo** JavaScript của bạn chờ đến khi tất cả HTML được tải
- **Ngăn chặn** lỗi khi JavaScript tìm kiếm các phần tử chưa sẵn sàng
- **Đảm bảo** tất cả các phần tử cây của bạn có sẵn để tương tác
- **Cung cấp** hiệu suất tốt hơn so với việc đặt script ở cuối trang

> ⚠️ **Lưu ý quan trọng**: Thuộc tính `defer` ngăn chặn các vấn đề về thời gian phổ biến. Nếu không có nó, JavaScript có thể cố gắng truy cập các phần tử HTML trước khi chúng được tải, gây ra lỗi.

---

## Kết nối JavaScript với các phần tử HTML của bạn

Trước khi chúng ta có thể làm cho các phần tử có thể kéo, JavaScript cần tìm chúng trong DOM. Hãy nghĩ về điều này như một hệ thống phân loại thư viện - một khi bạn có số danh mục, bạn có thể tìm chính xác cuốn sách bạn cần và truy cập tất cả nội dung của nó.

Chúng ta sẽ sử dụng phương thức `document.getElementById()` để thực hiện các kết nối này. Nó giống như có một hệ thống lưu trữ chính xác - bạn cung cấp một ID và nó tìm chính xác phần tử bạn cần trong HTML của bạn.

### Kích hoạt chức năng kéo cho tất cả các cây

Thêm mã này vào tệp `script.js` của bạn:

```javascript
// Enable drag functionality for all 14 plants
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

**Đây là những gì mã này thực hiện:**
- **Tìm** mỗi phần tử cây trong DOM bằng ID duy nhất của nó
- **Lấy** tham chiếu JavaScript đến mỗi phần tử HTML
- **Truyền** mỗi phần tử vào hàm `dragElement` (chúng ta sẽ tạo tiếp theo)
- **Chuẩn bị** mọi cây cho tương tác kéo-thả
- **Kết nối** cấu trúc HTML của bạn với chức năng JavaScript

> 🎯 **Tại sao sử dụng ID thay vì lớp?** ID cung cấp các định danh duy nhất cho các phần tử cụ thể, trong khi các lớp CSS được thiết kế để tạo kiểu cho nhóm các phần tử. Khi JavaScript cần thao tác các phần tử riêng lẻ, ID cung cấp độ chính xác và hiệu suất mà chúng ta cần.

> 💡 **Mẹo chuyên nghiệp**: Lưu ý cách chúng ta gọi `dragElement()` cho từng cây riêng lẻ. Cách tiếp cận này đảm bảo rằng mỗi cây có hành vi kéo độc lập của riêng nó, điều này rất cần thiết cho tương tác người dùng mượt mà.

---

## Xây dựng Closure cho Drag Element

Bây giờ chúng ta sẽ tạo phần cốt lõi của chức năng kéo: một closure quản lý hành vi kéo cho mỗi cây. Closure này sẽ chứa nhiều hàm bên trong làm việc cùng nhau để theo dõi chuyển động chuột và cập nhật vị trí phần tử.

Closures rất phù hợp cho nhiệm vụ này vì chúng cho phép chúng ta tạo các biến "riêng tư" tồn tại giữa các lần gọi hàm, cung cấp cho mỗi cây hệ thống theo dõi tọa độ độc lập của riêng nó.

### Hiểu về Closures với một ví dụ đơn giản

Hãy để tôi minh họa closures với một ví dụ đơn giản để làm rõ khái niệm:

```javascript
function createCounter() {
    let count = 0; // This is like a private variable
    
    function increment() {
        count++; // The inner function remembers the outer variable
        return count;
    }
    
    return increment; // We're giving back the inner function
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

**Đây là những gì đang xảy ra trong mẫu closure này:**
- **Tạo** một biến `count` riêng tư chỉ tồn tại trong closure này
- **Hàm bên trong** có thể truy cập và sửa đổi biến bên ngoài đó (cơ chế closure)
- **Khi chúng ta trả về** hàm bên trong, nó duy trì kết nối với dữ liệu riêng tư đó
- **Ngay cả sau khi** `createCounter()` hoàn thành, `count` vẫn tồn tại và nhớ giá trị của nó

### Tại sao Closures hoàn hảo cho chức năng kéo

Đối với terrarium của chúng ta, mỗi cây cần nhớ tọa độ vị trí hiện tại của nó. Closures cung cấp giải pháp hoàn hảo:

**Lợi ích chính cho dự án của chúng ta:**
- **Duy trì** các biến vị trí riêng tư cho mỗi cây một cách độc lập
- **Bảo tồn** dữ liệu tọa độ giữa các sự kiện kéo
- **Ngăn chặn** xung đột biến giữa các phần tử có thể kéo khác nhau
- **Tạo** cấu trúc mã sạch, tổ chức

> 🎯 **Mục tiêu học tập**: Bạn không cần phải nắm vững mọi khía cạnh của closures ngay bây giờ. Hãy tập trung vào việc thấy cách chúng giúp chúng ta tổ chức mã và duy trì trạng thái cho chức năng kéo.

### Tạo hàm dragElement

Bây giờ hãy xây dựng hàm chính sẽ xử lý toàn bộ logic kéo. Thêm hàm này bên dưới các khai báo phần tử cây của bạn:

```javascript
function dragElement(terrariumElement) {
    // Initialize position tracking variables
    let pos1 = 0,  // Previous mouse X position
        pos2 = 0,  // Previous mouse Y position  
        pos3 = 0,  // Current mouse X position
        pos4 = 0;  // Current mouse Y position
    
    // Set up the initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;
}
```

**Hiểu về hệ thống theo dõi vị trí:**
- **`pos1` và `pos2`**: Lưu trữ sự khác biệt giữa vị trí chuột cũ và mới
- **`pos3` và `pos4`**: Theo dõi tọa độ chuột hiện tại
- **`terrariumElement`**: Phần tử cây cụ thể mà chúng ta đang làm cho có thể kéo
- **`onpointerdown`**: Sự kiện kích hoạt khi người dùng bắt đầu kéo

**Đây là cách mẫu closure hoạt động:**
- **Tạo** các biến vị trí riêng tư cho mỗi phần tử cây
- **Duy trì** các biến này trong suốt vòng đời của thao tác kéo
- **Đảm bảo** mỗi cây theo dõi tọa độ của riêng nó một cách độc lập
- **Cung cấp** giao diện sạch thông qua hàm `dragElement`

### Tại sao sử dụng sự kiện Pointer?

Bạn có thể thắc mắc tại sao chúng ta sử dụng `onpointerdown` thay vì sự kiện quen thuộc hơn như `onclick`. Đây là lý do:

| Loại sự kiện | Tốt nhất cho | Hạn chế |
|--------------|-------------|---------|
| `onclick` | Nhấp chuột đơn giản | Không thể xử lý kéo (chỉ nhấp và thả) |
| `onpointerdown` | Cả chuột và cảm ứng | Mới hơn, nhưng hiện đã được hỗ trợ tốt |
| `onmousedown` | Chỉ chuột trên máy tính | Bỏ qua người dùng di động |

**Tại sao sự kiện pointer hoàn hảo cho những gì chúng ta đang xây dựng:**
- **Hoạt động tốt** dù ai đó sử dụng chuột, ngón tay, hay thậm chí là bút stylus
- **Cảm giác giống nhau** trên laptop, máy tính bảng, hay điện thoại
- **Xử lý** chuyển động kéo thực tế (không chỉ nhấp và xong)
- **Tạo** trải nghiệm mượt mà mà người dùng mong đợi từ các ứng dụng web hiện đại

> 💡 **Chuẩn bị cho tương lai**: Sự kiện pointer là cách hiện đại để xử lý các tương tác của người dùng. Thay vì viết mã riêng biệt cho chuột và cảm ứng, bạn có được cả hai miễn phí. Thật tuyệt, phải không?

---

## Hàm pointerDrag: Bắt đầu thao tác kéo

Khi người dùng nhấn xuống một cây (dù bằng nhấp chuột hay cảm ứng), hàm `pointerDrag` sẽ hoạt động. Hàm này ghi lại tọa độ ban đầu và thiết lập hệ thống kéo.

Thêm hàm này vào bên trong closure `dragElement`, ngay sau dòng `terrariumElement.onpointerdown = pointerDrag;`:

```javascript
function pointerDrag(e) {
    // Prevent default browser behavior (like text selection)
    e.preventDefault();
    
    // Capture the initial mouse/touch position
    pos3 = e.clientX;  // X coordinate where drag started
    pos4 = e.clientY;  // Y coordinate where drag started
    
    // Set up event listeners for the dragging process
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}
```

**Từng bước, đây là những gì đang xảy ra:**
- **Ngăn chặn** các hành vi mặc định của trình duyệt có thể gây cản trở thao tác kéo
- **Ghi lại** tọa độ chính xác nơi người dùng bắt đầu thao tác kéo
- **Thiết lập** các trình lắng nghe sự kiện cho chuyển động kéo đang diễn ra
- **Chuẩn bị** hệ thống để theo dõi chuyển động chuột/ngón tay trên toàn bộ tài liệu

### Hiểu về việc ngăn chặn sự kiện

Dòng `e.preventDefault()` rất quan trọng để thao tác kéo mượt mà:

**Nếu không ngăn chặn, trình duyệt có thể:**
- **Chọn** văn bản khi kéo qua trang
- **Kích hoạt** menu ngữ cảnh khi nhấp chuột phải kéo
- **Gây cản trở** hành vi kéo tùy chỉnh của chúng ta
- **Tạo** các hiện tượng hình ảnh trong quá trình thao tác kéo

> 🔍 **Thử nghiệm**: Sau khi hoàn thành bài học này, hãy thử loại bỏ `e.preventDefault()` và xem nó ảnh hưởng như thế nào đến trải nghiệm kéo. Bạn sẽ nhanh chóng hiểu tại sao dòng này là cần thiết!

### Hệ thống theo dõi tọa độ

Các thuộc tính `e.clientX` và `e.clientY` cung cấp cho chúng ta tọa độ chuột/cảm ứng chính xác:

| Thuộc tính | Đo lường gì | Trường hợp sử dụng |
|------------|-------------|--------------------|
| `clientX` | Vị trí ngang so với khung nhìn | Theo dõi chuyển động trái-phải |
| `clientY` | Vị trí dọc so với khung nhìn | Theo dõi chuyển động lên-xuống |

**Hiểu về các tọa độ này:**
- **Cung cấp** thông tin định vị chính xác từng pixel
- **Cập nhật** theo thời gian thực khi người dùng di chuyển con trỏ
- **Giữ nguyên** trên các kích thước màn hình và mức độ phóng to khác nhau
- **Cho phép** các thao tác kéo mượt mà, phản hồi nhanh

### Thiết lập các trình lắng nghe sự kiện cấp tài liệu

Lưu ý cách chúng ta gắn các sự kiện di chuyển và dừng vào toàn bộ `document`, không chỉ phần tử cây:

```javascript
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

**Tại sao gắn vào tài liệu:**
- **Tiếp tục** theo dõi ngay cả khi chuột rời khỏi phần tử cây
- **Ngăn chặn** gián đoạn thao tác kéo nếu người dùng di chuyển nhanh
- **Cung cấp** thao tác kéo mượt mà trên toàn bộ màn hình
- **Xử lý** các trường hợp cạnh khi con trỏ di chuyển ra ngoài cửa sổ trình duyệt

> ⚡ **Lưu ý về hiệu suất**: Chúng ta sẽ dọn dẹp các trình lắng nghe cấp tài liệu này khi thao tác kéo dừng để tránh rò rỉ bộ nhớ và các vấn đề về hiệu suất.

## Hoàn thiện hệ thống kéo: Chuyển động và dọn dẹp

Bây giờ chúng ta sẽ thêm hai hàm còn lại xử lý chuyển động kéo thực tế và dọn dẹp khi thao tác kéo dừng. Các hàm này làm việc cùng nhau để tạo chuyển động cây mượt mà, phản hồi nhanh trong terrarium của bạn.

### Hàm elementDrag: Theo dõi chuyển động

Thêm hàm `elementDrag` ngay sau dấu ngoặc nhọn đóng của `pointerDrag`:

```javascript
function elementDrag(e) {
    // Calculate the distance moved since the last event
    pos1 = pos3 - e.clientX;  // Horizontal distance moved
    pos2 = pos4 - e.clientY;  // Vertical distance moved
    
    // Update the current position tracking
    pos3 = e.clientX;  // New current X position
    pos4 = e.clientY;  // New current Y position
    
    // Apply the movement to the element's position
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}
```

**Hiểu về toán học tọa độ:**
- **`pos1` và `pos2`**: Tính toán khoảng cách chuột đã di chuyển kể từ lần cập nhật cuối cùng
- **`pos3` và `pos4`**: Lưu vị trí hiện tại của chuột để tính toán lần tiếp theo  
- **`offsetTop` và `offsetLeft`**: Lấy vị trí hiện tại của phần tử trên trang  
- **Logic trừ**: Di chuyển phần tử theo cùng khoảng cách mà chuột đã di chuyển  

**Phân tích cách tính toán di chuyển:**  
1. **Đo lường** sự khác biệt giữa vị trí chuột cũ và mới  
2. **Tính toán** khoảng cách cần di chuyển phần tử dựa trên sự di chuyển của chuột  
3. **Cập nhật** các thuộc tính vị trí CSS của phần tử theo thời gian thực  
4. **Lưu trữ** vị trí mới làm cơ sở cho lần tính toán di chuyển tiếp theo  

### Minh họa trực quan về phép toán  

```mermaid
sequenceDiagram
    participant Mouse
    participant JavaScript
    participant Plant
    
    Mouse->>JavaScript: Move from (100,50) to (110,60)
    JavaScript->>JavaScript: Calculate: moved 10px right, 10px down
    JavaScript->>Plant: Update position by +10px right, +10px down
    Plant->>Plant: Render at new position
```
  

### Hàm stopElementDrag: Dọn dẹp  

Thêm hàm dọn dẹp sau dấu ngoặc nhọn đóng của `elementDrag`:  

```javascript
function stopElementDrag() {
    // Remove the document-level event listeners
    document.onpointerup = null;
    document.onpointermove = null;
}
```
  

**Tại sao việc dọn dẹp lại quan trọng:**  
- **Ngăn chặn** rò rỉ bộ nhớ từ các trình lắng nghe sự kiện còn sót lại  
- **Dừng** hành vi kéo khi người dùng thả cây  
- **Cho phép** các phần tử khác được kéo độc lập  
- **Đặt lại** hệ thống cho lần thao tác kéo tiếp theo  

**Điều gì xảy ra nếu không dọn dẹp:**  
- Các trình lắng nghe sự kiện tiếp tục chạy ngay cả khi thao tác kéo đã dừng  
- Hiệu suất giảm do các trình lắng nghe không sử dụng tích tụ  
- Hành vi không mong muốn khi tương tác với các phần tử khác  
- Tài nguyên trình duyệt bị lãng phí vào việc xử lý sự kiện không cần thiết  

### Hiểu các thuộc tính vị trí CSS  

Hệ thống kéo của chúng ta thao tác hai thuộc tính CSS chính:  

| Thuộc tính | Điều khiển cái gì | Cách chúng ta sử dụng |
|------------|-------------------|-----------------------|
| `top` | Khoảng cách từ cạnh trên | Định vị theo chiều dọc khi kéo |
| `left` | Khoảng cách từ cạnh trái | Định vị theo chiều ngang khi kéo |

**Những thông tin quan trọng về các thuộc tính offset:**  
- **`offsetTop`**: Khoảng cách hiện tại từ cạnh trên của phần tử cha được định vị  
- **`offsetLeft`**: Khoảng cách hiện tại từ cạnh trái của phần tử cha được định vị  
- **Ngữ cảnh định vị**: Các giá trị này tương đối với tổ tiên được định vị gần nhất  
- **Cập nhật theo thời gian thực**: Thay đổi ngay lập tức khi chúng ta chỉnh sửa các thuộc tính CSS  

> 🎯 **Triết lý thiết kế**: Hệ thống kéo này được thiết kế linh hoạt – không có "vùng thả" hay giới hạn. Người dùng có thể đặt cây ở bất kỳ đâu, mang lại sự tự do sáng tạo hoàn toàn trong việc thiết kế terrarium của họ.  

## Tổng hợp: Hệ thống kéo hoàn chỉnh của bạn  

Chúc mừng! Bạn vừa xây dựng một hệ thống kéo-thả phức tạp bằng JavaScript thuần. Hàm `dragElement` hoàn chỉnh của bạn hiện chứa một closure mạnh mẽ quản lý:  

**Những gì closure của bạn thực hiện:**  
- **Duy trì** các biến vị trí riêng tư cho từng cây một cách độc lập  
- **Xử lý** toàn bộ vòng đời kéo từ đầu đến cuối  
- **Cung cấp** chuyển động mượt mà, phản hồi nhanh trên toàn màn hình  
- **Dọn dẹp** tài nguyên đúng cách để ngăn chặn rò rỉ bộ nhớ  
- **Tạo** giao diện trực quan, sáng tạo cho thiết kế terrarium  

### Kiểm tra Terrarium tương tác của bạn  

Bây giờ hãy kiểm tra terrarium tương tác của bạn! Mở tệp `index.html` trong trình duyệt web và thử chức năng:  

1. **Nhấp và giữ** bất kỳ cây nào để bắt đầu kéo  
2. **Di chuyển chuột hoặc ngón tay** và xem cây di chuyển mượt mà theo  
3. **Thả** để đặt cây vào vị trí mới  
4. **Thử nghiệm** với các cách sắp xếp khác nhau để khám phá giao diện  

🥇 **Thành tựu**: Bạn đã tạo một ứng dụng web tương tác hoàn chỉnh sử dụng các khái niệm cốt lõi mà các nhà phát triển chuyên nghiệp sử dụng hàng ngày. Chức năng kéo-thả này sử dụng cùng nguyên lý đằng sau việc tải tệp, bảng kanban, và nhiều giao diện tương tác khác.  

![terrarium hoàn chỉnh](../../../../translated_images/terrarium-final.0920f16e87c13a84cd2b553a5af9a3ad1cffbd41fbf8ce715d9e9c43809a5e2c.vi.png)  

---

## Thử thách GitHub Copilot Agent 🚀  

Sử dụng chế độ Agent để hoàn thành thử thách sau:  

**Mô tả:** Nâng cấp dự án terrarium bằng cách thêm chức năng đặt lại, đưa tất cả cây về vị trí ban đầu với hiệu ứng hoạt hình mượt mà.  

**Yêu cầu:** Tạo một nút đặt lại, khi nhấp vào, sẽ chuyển động tất cả cây về vị trí ban đầu ở thanh bên bằng cách sử dụng các chuyển đổi CSS. Hàm này nên lưu trữ vị trí ban đầu khi trang tải và chuyển động cây về vị trí đó trong 1 giây khi nút đặt lại được nhấn.  

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.  

## 🚀 Thử thách bổ sung: Mở rộng kỹ năng của bạn  

Sẵn sàng đưa terrarium của bạn lên một tầm cao mới? Hãy thử triển khai các cải tiến sau:  

**Mở rộng sáng tạo:**  
- **Nhấp đúp** vào cây để đưa nó lên phía trước (thao tác z-index)  
- **Thêm phản hồi trực quan** như ánh sáng nhẹ khi di chuột qua cây  
- **Triển khai giới hạn** để ngăn cây bị kéo ra ngoài terrarium  
- **Tạo chức năng lưu** để ghi nhớ vị trí cây bằng localStorage  
- **Thêm hiệu ứng âm thanh** khi nhấc và đặt cây  

> 💡 **Cơ hội học tập**: Mỗi thử thách này sẽ dạy bạn những khía cạnh mới về thao tác DOM, xử lý sự kiện, và thiết kế trải nghiệm người dùng.  

## Câu hỏi sau bài giảng  

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/20)  

## Ôn tập & Tự học: Nâng cao hiểu biết của bạn  

Bạn đã nắm vững các nguyên tắc cơ bản về thao tác DOM và closures, nhưng luôn có nhiều điều để khám phá! Dưới đây là một số hướng đi để mở rộng kiến thức và kỹ năng của bạn.  

### Các cách tiếp cận kéo-thả thay thế  

Chúng ta đã sử dụng sự kiện con trỏ để đạt được sự linh hoạt tối đa, nhưng phát triển web cung cấp nhiều cách tiếp cận khác:  

| Cách tiếp cận | Tốt nhất cho | Giá trị học tập |
|---------------|--------------|-----------------|
| [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) | Tải tệp, vùng kéo chính thức | Hiểu khả năng gốc của trình duyệt |
| [Touch Events](https://developer.mozilla.org/docs/Web/API/Touch_events) | Tương tác dành riêng cho di động | Mẫu phát triển ưu tiên di động |
| Thuộc tính CSS `transform` | Hoạt hình mượt mà | Kỹ thuật tối ưu hóa hiệu suất |

### Các chủ đề nâng cao về thao tác DOM  

**Các bước tiếp theo trong hành trình học tập của bạn:**  
- **Ủy quyền sự kiện**: Xử lý sự kiện hiệu quả cho nhiều phần tử  
- **Intersection Observer**: Phát hiện khi phần tử vào/ra khỏi khung nhìn  
- **Mutation Observer**: Theo dõi sự thay đổi trong cấu trúc DOM  
- **Web Components**: Tạo các phần tử UI tái sử dụng, được đóng gói  
- **Khái niệm Virtual DOM**: Hiểu cách các framework tối ưu hóa cập nhật DOM  

### Tài nguyên thiết yếu để tiếp tục học tập  

**Tài liệu kỹ thuật:**  
- [Hướng dẫn sự kiện con trỏ của MDN](https://developer.mozilla.org/docs/Web/API/Pointer_events) - Tham khảo toàn diện về sự kiện con trỏ  
- [Đặc tả sự kiện con trỏ của W3C](https://www.w3.org/TR/pointerevents1/) - Tài liệu tiêu chuẩn chính thức  
- [Khám phá sâu về JavaScript Closures](https://developer.mozilla.org/docs/Web/JavaScript/Closures) - Mẫu closure nâng cao  

**Tương thích trình duyệt:**  
- [CanIUse.com](https://caniuse.com/) - Kiểm tra hỗ trợ tính năng trên các trình duyệt  
- [Dữ liệu tương thích trình duyệt của MDN](https://github.com/mdn/browser-compat-data) - Thông tin tương thích chi tiết  

**Cơ hội thực hành:**  
- **Xây dựng** một trò chơi ghép hình sử dụng cơ chế kéo tương tự  
- **Tạo** một bảng kanban với quản lý nhiệm vụ kéo-thả  
- **Thiết kế** một thư viện ảnh với cách sắp xếp ảnh có thể kéo  
- **Thử nghiệm** với các cử chỉ chạm cho giao diện di động  

> 🎯 **Chiến lược học tập**: Cách tốt nhất để củng cố các khái niệm này là thông qua thực hành. Hãy thử xây dựng các biến thể của giao diện kéo-thả – mỗi dự án sẽ dạy bạn điều gì đó mới về tương tác người dùng và thao tác DOM.  

## Bài tập  

[Làm việc thêm với DOM](assignment.md)  

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.