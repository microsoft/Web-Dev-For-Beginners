<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "00aa85715e1efd4930c17a23e3012e69",
  "translation_date": "2025-11-06T11:37:41+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "vi"
}
-->
# Dự án Tiện ích Mở rộng Trình duyệt Phần 1: Tất cả về Trình duyệt

```mermaid
journey
    title Your Browser Extension Development Journey
    section Foundation
      Understand browsers: 3: Student
      Learn extension types: 4: Student
      Setup development: 4: Student
    section Development
      Build interface: 4: Student
      Add functionality: 5: Student
      Handle data: 5: Student
    section Integration
      Test in browser: 5: Student
      Debug issues: 4: Student
      Polish experience: 5: Student
```

![Ghi chú hình ảnh về trình duyệt](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.vi.jpg)
> Ghi chú hình ảnh bởi [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Câu hỏi trước bài giảng

[Câu hỏi trước bài giảng](https://ff-quizzes.netlify.app/web/quiz/23)

### Giới thiệu

Tiện ích mở rộng trình duyệt là các ứng dụng nhỏ giúp cải thiện trải nghiệm duyệt web của bạn. Giống như tầm nhìn ban đầu của Tim Berners-Lee về một web tương tác, các tiện ích mở rộng mở rộng khả năng của trình duyệt vượt ra ngoài việc chỉ xem tài liệu. Từ các trình quản lý mật khẩu giúp bảo vệ tài khoản của bạn đến các công cụ chọn màu giúp nhà thiết kế tìm được màu sắc hoàn hảo, các tiện ích mở rộng giải quyết các thách thức duyệt web hàng ngày.

Trước khi chúng ta xây dựng tiện ích mở rộng đầu tiên của bạn, hãy tìm hiểu cách trình duyệt hoạt động. Giống như Alexander Graham Bell cần hiểu về truyền âm thanh trước khi phát minh ra điện thoại, việc hiểu các nguyên lý cơ bản của trình duyệt sẽ giúp bạn tạo ra các tiện ích mở rộng tích hợp một cách mượt mà với hệ thống trình duyệt hiện có.

Kết thúc bài học này, bạn sẽ hiểu về kiến trúc trình duyệt và bắt đầu xây dựng tiện ích mở rộng đầu tiên của mình.

```mermaid
mindmap
  root((Browser Architecture))
    Core Components
      Rendering Engine
      JavaScript Engine
      Network Stack
      Storage APIs
    User Interface
      Address Bar
      Tab Management
      Bookmarks
      Extension Icons
    Extension System
      Manifest Files
      Content Scripts
      Background Pages
      Popup Windows
    Security Model
      Same-Origin Policy
      Permissions API
      Content Security
      Isolated Worlds
    Development Tools
      DevTools Integration
      Debug Console
      Performance Monitor
      Extension Inspector
```

## Hiểu về Trình duyệt Web

Trình duyệt web về cơ bản là một trình thông dịch tài liệu phức tạp. Khi bạn nhập "google.com" vào thanh địa chỉ, trình duyệt thực hiện một loạt các thao tác phức tạp - yêu cầu nội dung từ các máy chủ trên toàn thế giới, sau đó phân tích và hiển thị mã thành các trang web tương tác mà bạn thấy.

Quá trình này giống như cách trình duyệt web đầu tiên, WorldWideWeb, được thiết kế bởi Tim Berners-Lee vào năm 1990 để làm cho các tài liệu liên kết dễ dàng truy cập cho mọi người.

✅ **Một chút lịch sử**: Trình duyệt đầu tiên được gọi là 'WorldWideWeb' và được tạo ra bởi Sir Timothy Berners-Lee vào năm 1990.

![trình duyệt đầu tiên](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.vi.jpg)
> Một số trình duyệt đầu tiên, qua [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

### Cách Trình duyệt Xử lý Nội dung Web

Quá trình từ việc nhập một URL đến việc thấy một trang web bao gồm nhiều bước phối hợp diễn ra trong vài giây:

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Extension
    participant DNS
    participant Server
    
    User->>Browser: Types URL and presses Enter
    Browser->>Extension: Trigger beforeRequest event
    Extension->>Extension: Check if URL needs modification
    Browser->>DNS: Looks up server IP address
    DNS->>Browser: Returns IP address
    Browser->>Server: Requests web page content
    Server->>Browser: Sends HTML, CSS, and JavaScript
    Browser->>Extension: Trigger beforeResponse event
    Extension->>Extension: Modify content if needed
    Browser->>User: Renders complete web page
    Extension->>User: Show extension UI updates
```

**Quá trình này đạt được những gì:**
- **Dịch** URL dễ đọc thành địa chỉ IP của máy chủ thông qua tra cứu DNS
- **Thiết lập** kết nối an toàn với máy chủ web bằng các giao thức HTTP hoặc HTTPS
- **Yêu cầu** nội dung trang web cụ thể từ máy chủ
- **Nhận** mã HTML, CSS và JavaScript từ máy chủ
- **Hiển thị** tất cả nội dung thành trang web tương tác mà bạn thấy

### Các Tính năng Cốt lõi của Trình duyệt

Các trình duyệt hiện đại cung cấp nhiều tính năng mà các nhà phát triển tiện ích mở rộng có thể tận dụng:

| Tính năng | Mục đích | Cơ hội cho Tiện ích Mở rộng |
|-----------|----------|----------------------------|
| **Công cụ Hiển thị** | Hiển thị HTML, CSS và JavaScript | Sửa đổi nội dung, chèn kiểu dáng |
| **Công cụ JavaScript** | Thực thi mã JavaScript | Tập lệnh tùy chỉnh, tương tác API |
| **Lưu trữ Cục bộ** | Lưu dữ liệu cục bộ | Tùy chọn người dùng, dữ liệu được lưu trữ |
| **Ngăn xếp Mạng** | Xử lý yêu cầu web | Giám sát yêu cầu, phân tích dữ liệu |
| **Mô hình Bảo mật** | Bảo vệ người dùng khỏi nội dung độc hại | Lọc nội dung, cải thiện bảo mật |

**Hiểu các tính năng này giúp bạn:**
- **Xác định** nơi tiện ích mở rộng của bạn có thể mang lại giá trị nhất
- **Chọn** API trình duyệt phù hợp cho chức năng của tiện ích mở rộng
- **Thiết kế** tiện ích mở rộng hoạt động hiệu quả với hệ thống trình duyệt
- **Đảm bảo** tiện ích mở rộng của bạn tuân theo các nguyên tắc bảo mật của trình duyệt

### Cân nhắc Phát triển Đa Trình duyệt

Các trình duyệt khác nhau thực hiện các tiêu chuẩn với những biến thể nhỏ, giống như cách các ngôn ngữ lập trình khác nhau có thể xử lý cùng một thuật toán theo cách khác nhau. Chrome, Firefox và Safari đều có những đặc điểm riêng mà các nhà phát triển phải cân nhắc khi phát triển tiện ích mở rộng.

> 💡 **Mẹo chuyên nghiệp**: Sử dụng [caniuse.com](https://www.caniuse.com) để kiểm tra công nghệ web nào được hỗ trợ trên các trình duyệt khác nhau. Điều này rất hữu ích khi lên kế hoạch cho các tính năng của tiện ích mở rộng!

**Những cân nhắc chính cho phát triển tiện ích mở rộng:**
- **Kiểm tra** tiện ích mở rộng của bạn trên các trình duyệt Chrome, Firefox và Edge
- **Thích nghi** với các API tiện ích mở rộng và định dạng manifest khác nhau của trình duyệt
- **Xử lý** các đặc điểm hiệu suất và giới hạn khác nhau
- **Cung cấp** các phương án thay thế cho các tính năng cụ thể của trình duyệt có thể không khả dụng

✅ **Thông tin Phân tích**: Bạn có thể xác định trình duyệt nào người dùng của bạn ưa thích bằng cách cài đặt các gói phân tích trong các dự án phát triển web của mình. Dữ liệu này giúp bạn ưu tiên hỗ trợ các trình duyệt nào trước.

## Hiểu về Tiện ích Mở rộng Trình duyệt

Tiện ích mở rộng trình duyệt giải quyết các thách thức duyệt web phổ biến bằng cách thêm chức năng trực tiếp vào giao diện trình duyệt. Thay vì yêu cầu các ứng dụng riêng biệt hoặc quy trình làm việc phức tạp, các tiện ích mở rộng cung cấp quyền truy cập ngay lập tức vào các công cụ và tính năng.

Khái niệm này giống như cách các nhà tiên phong máy tính đầu tiên như Douglas Engelbart hình dung việc tăng cường khả năng của con người bằng công nghệ - các tiện ích mở rộng tăng cường chức năng cơ bản của trình duyệt.

```mermaid
quadrantChart
    title Browser Extension Categories
    x-axis Simple --> Complex
    y-axis Personal Use --> Professional Tools
    quadrant-1 Developer Tools
    quadrant-2 Enterprise Solutions
    quadrant-3 Personal Utilities
    quadrant-4 Productivity Apps
    
    Ad Blockers: [0.3, 0.2]
    Password Managers: [0.7, 0.3]
    Color Pickers: [0.4, 0.8]
    Code Formatters: [0.8, 0.9]
    Note Taking: [0.6, 0.5]
    Video Downloaders: [0.5, 0.2]
    Time Trackers: [0.7, 0.6]
    Screenshot Tools: [0.4, 0.4]
```

**Các loại tiện ích mở rộng phổ biến và lợi ích của chúng:**
- **Công cụ Năng suất**: Trình quản lý công việc, ứng dụng ghi chú và công cụ theo dõi thời gian giúp bạn tổ chức công việc
- **Cải thiện Bảo mật**: Trình quản lý mật khẩu, chặn quảng cáo và công cụ bảo mật bảo vệ dữ liệu của bạn
- **Công cụ Phát triển**: Định dạng mã, công cụ chọn màu và tiện ích gỡ lỗi giúp đơn giản hóa việc phát triển
- **Cải thiện Nội dung**: Chế độ đọc, trình tải xuống video và công cụ chụp màn hình cải thiện trải nghiệm web của bạn

✅ **Câu hỏi Tự phản ánh**: Những tiện ích mở rộng trình duyệt yêu thích của bạn là gì? Chúng thực hiện những nhiệm vụ cụ thể nào và làm thế nào để chúng cải thiện trải nghiệm duyệt web của bạn?

### 🔄 **Kiểm tra Sư phạm**
**Hiểu Kiến trúc Trình duyệt**: Trước khi chuyển sang phát triển tiện ích mở rộng, hãy đảm bảo bạn có thể:
- ✅ Giải thích cách trình duyệt xử lý yêu cầu web và hiển thị nội dung
- ✅ Xác định các thành phần chính của kiến trúc trình duyệt
- ✅ Hiểu cách các tiện ích mở rộng tích hợp với chức năng của trình duyệt
- ✅ Nhận biết mô hình bảo mật bảo vệ người dùng

**Tự kiểm tra nhanh**: Bạn có thể theo dõi đường đi từ việc nhập một URL đến việc thấy một trang web không?
1. **Tra cứu DNS** chuyển đổi URL thành địa chỉ IP
2. **Yêu cầu HTTP** lấy nội dung từ máy chủ
3. **Phân tích** xử lý HTML, CSS và JavaScript
4. **Hiển thị** hiển thị trang web cuối cùng
5. **Tiện ích mở rộng** có thể sửa đổi nội dung ở nhiều bước

## Cài đặt và Quản lý Tiện ích Mở rộng

Hiểu quy trình cài đặt tiện ích mở rộng giúp bạn dự đoán trải nghiệm người dùng khi họ cài đặt tiện ích mở rộng của bạn. Quy trình cài đặt được chuẩn hóa trên các trình duyệt hiện đại, với những biến thể nhỏ trong thiết kế giao diện.

![ảnh chụp màn hình trình duyệt Edge hiển thị trang edge://extensions mở và menu cài đặt mở](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.vi.png)

> **Quan trọng**: Đảm bảo bật chế độ nhà phát triển và cho phép tiện ích mở rộng từ các cửa hàng khác khi thử nghiệm tiện ích mở rộng của riêng bạn.

### Quy trình Cài đặt Tiện ích Mở rộng Phát triển

Khi bạn đang phát triển và thử nghiệm tiện ích mở rộng của riêng mình, hãy làm theo quy trình này:

```mermaid
flowchart TD
    A[Write Code] --> B[Build Extension]
    B --> C{First Install?}
    C -->|Yes| D[Load Unpacked]
    C -->|No| E[Reload Extension]
    D --> F[Test Functionality]
    E --> F
    F --> G{Working Correctly?}
    G -->|No| H[Debug Issues]
    G -->|Yes| I[Ready for Users]
    H --> A
    I --> J[Publish to Store]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#f3e5f5
    style J fill:#fff3e0
```

```bash
# Step 1: Build your extension
npm run build
```

**Lệnh này đạt được những gì:**
- **Biên dịch** mã nguồn của bạn thành các tệp sẵn sàng cho trình duyệt
- **Gói** các mô-đun JavaScript thành các gói tối ưu hóa
- **Tạo** các tệp tiện ích mở rộng cuối cùng trong thư mục `/dist`
- **Chuẩn bị** tiện ích mở rộng của bạn để cài đặt và thử nghiệm

**Bước 2: Điều hướng đến Tiện ích Mở rộng của Trình duyệt**
1. **Mở** trang quản lý tiện ích mở rộng của trình duyệt của bạn
2. **Nhấp** vào nút "Cài đặt và hơn nữa" (biểu tượng `...`) ở góc trên bên phải
3. **Chọn** "Tiện ích mở rộng" từ menu thả xuống

**Bước 3: Tải Tiện ích Mở rộng của Bạn**
- **Đối với cài đặt mới**: Chọn `load unpacked` và chọn thư mục `/dist` của bạn
- **Đối với cập nhật**: Nhấp vào `reload` bên cạnh tiện ích mở rộng đã cài đặt của bạn
- **Để thử nghiệm**: Bật "Chế độ nhà phát triển" để truy cập các tính năng gỡ lỗi bổ sung

### Cài đặt Tiện ích Mở rộng Sản xuất

> ✅ **Lưu ý**: Các hướng dẫn phát triển này dành riêng cho các tiện ích mở rộng bạn tự xây dựng. Để cài đặt các tiện ích mở rộng đã được xuất bản, hãy truy cập các cửa hàng tiện ích mở rộng trình duyệt chính thức như [Microsoft Edge Add-ons store](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home).

**Hiểu sự khác biệt:**
- **Cài đặt phát triển** cho phép bạn thử nghiệm các tiện ích mở rộng chưa được xuất bản trong quá trình phát triển
- **Cài đặt từ cửa hàng** cung cấp các tiện ích mở rộng đã được kiểm duyệt, xuất bản với các bản cập nhật tự động
- **Cài đặt bên ngoài** cho phép cài đặt tiện ích mở rộng từ bên ngoài các cửa hàng chính thức (yêu cầu chế độ nhà phát triển)

## Xây dựng Tiện ích Mở rộng Dấu chân Carbon của Bạn

Chúng ta sẽ tạo một tiện ích mở rộng trình duyệt hiển thị dấu chân carbon của việc sử dụng năng lượng trong khu vực của bạn. Dự án này minh họa các khái niệm phát triển tiện ích mở rộng cơ bản đồng thời tạo ra một công cụ thực tế để nâng cao nhận thức về môi trường.

Cách tiếp cận này tuân theo nguyên tắc "học bằng cách làm" đã chứng minh hiệu quả từ các lý thuyết giáo dục của John Dewey - kết hợp kỹ năng kỹ thuật với các ứng dụng thực tế có ý nghĩa.

### Yêu cầu Dự án

Trước khi bắt đầu phát triển, hãy thu thập các tài nguyên và phụ thuộc cần thiết:

**Truy cập API cần thiết:**
- **[Khóa API CO2 Signal](https://www.co2signal.com/)**: Nhập địa chỉ email của bạn để nhận khóa API miễn phí
- **[Mã vùng](http://api.electricitymap.org/v3/zones)**: Tìm mã vùng của bạn bằng [Electricity Map](https://www.electricitymap.org/map) (ví dụ, Boston sử dụng 'US-NEISO')

**Công cụ Phát triển:**
- **[Node.js và NPM](https://www.npmjs.com)**: Công cụ quản lý gói để cài đặt các phụ thuộc của dự án
- **[Mã khởi đầu](../../../../5-browser-extension/start)**: Tải xuống thư mục `start` để bắt đầu phát triển

✅ **Tìm hiểu thêm**: Nâng cao kỹ năng quản lý gói của bạn với [module học toàn diện này](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

### Hiểu về Cấu trúc Dự án

Hiểu cấu trúc dự án giúp tổ chức công việc phát triển một cách hiệu quả. Giống như cách Thư viện Alexandria được tổ chức để dễ dàng truy xuất kiến thức, một cơ sở mã được cấu trúc tốt giúp phát triển hiệu quả hơn:

```
project-root/
├── dist/                    # Built extension files
│   ├── manifest.json        # Extension configuration
│   ├── index.html           # User interface markup
│   ├── background.js        # Background script functionality
│   └── main.js              # Compiled JavaScript bundle
├── src/                     # Source development files
│   └── index.js             # Your main JavaScript code
├── package.json             # Project dependencies and scripts
└── webpack.config.js        # Build configuration
```

**Phân tích những gì mỗi tệp đạt được:**
- **`manifest.json`**: **Xác định** siêu dữ liệu tiện ích mở rộng, quyền và điểm vào
- **`index.html`**: **Tạo** giao diện người dùng xuất hiện khi người dùng nhấp vào tiện ích mở rộng của bạn
- **`background.js`**: **Xử lý** các tác vụ nền và trình nghe sự kiện của trình duyệt
- **`main.js`**: **Chứa** mã JavaScript cuối cùng sau quá trình xây dựng
- **`src/index.js`**: **Lưu trữ** mã phát triển chính của bạn được biên dịch thành `main.js`

> 💡 **Mẹo Tổ chức**: Lưu trữ khóa API và mã vùng của bạn trong một ghi chú bảo mật để dễ dàng tham khảo trong quá trình phát triển. Bạn sẽ cần các giá trị này để thử nghiệm chức năng của tiện ích mở rộng.

✅ **Lưu ý Bảo mật**: Không bao giờ cam kết khóa API hoặc thông tin nhạy cảm vào kho mã của bạn. Chúng tôi sẽ chỉ cho bạn cách xử lý chúng một cách an toàn trong các bước tiếp theo.

## Tạo Giao diện Tiện ích Mở rộng

Bây giờ chúng ta sẽ xây dựng các thành phần giao diện người dùng. Tiện ích mở rộng sử dụng cách tiếp cận hai màn hình: màn hình cấu hình cho thiết lập ban đầu và màn hình kết quả để hiển thị dữ liệu.

Điều này tuân theo nguyên tắc tiết lộ tiến bộ được sử dụng trong thiết kế giao diện từ những ngày đầu của máy tính - hiển thị thông tin và tùy chọn theo trình tự logic để tránh làm người dùng choáng ngợp.

### Tổng quan về Giao diện Tiện ích Mở rộng

**Màn hình Cấu hình** - Cấu hình người dùng lần đầu:
![ảnh chụp màn hình tiện ích mở rộng hoàn chỉnh mở trong trình duyệt, hiển thị một biểu mẫu với các trường nhập cho tên vùng và khóa API.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.vi.png)

**Màn hình Kết quả** - Hiển thị dữ liệu dấu chân carbon:
![ảnh chụp màn hình tiện ích mở rộng hoàn chỉnh hiển thị các giá trị về sử dụng carbon và tỷ lệ nhiên liệu hóa thạch cho vùng US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.vi.png)

### Xây dựng Biểu mẫu Cấu hình

Biểu mẫu cấu hình thu thập dữ liệu cấu hình người dùng trong lần sử dụng đầu tiên. Sau khi được cấu hình, thông tin này sẽ được lưu trữ trong trình duyệt cho các phiên sau.

Trong tệp `/dist/index.html`, thêm cấu trúc biểu mẫu này:

```html
<form class="form-data" autocomplete="on">
    <div>
        <h2>New? Add your Information</h2>
    </div>
    <div>
        <label for="region">Region Name</label>
        <input type="text" id="region" required class="region-name" />
    </div>
    <div>
        <label for="api">Your API Key from tmrow</label>
        <input type="text" id="api" required class="api-key" />
    </div>
    <button class="search-btn">Submit</button>
</form>
```

**Biểu mẫu này đạt được những gì:**
- **Tạo** cấu trúc biểu mẫu ngữ nghĩa với các nhãn và liên kết đầu vào phù hợp
- **Kích hoạt** chức năng tự động hoàn thành của trình duyệt để cải thiện trải nghiệm người dùng
- **Yêu cầu** cả hai trường phải được điền trước khi gửi bằng thuộc tính `required`
- **Tổ chức** các trường nhập với tên lớp mô tả để dễ dàng tạo kiểu và nhắm mục tiêu bằng JavaScript
- **Cung cấp** hướng dẫn rõ ràng cho người dùng đang thiết lập tiện ích mở rộng lần đầu tiên

### Xây dựng Hiển thị Kết quả

Tiếp theo, tạo khu vực kết quả sẽ hiển thị dữ liệu dấu chân carbon. Thêm HTML này bên dưới biểu mẫu:

```html
<div class="result">
    <div class="loading">loading...</div>
    <div class="errors"></div>
    <div class="data"></div>
    <div class="result-container">
        <p><strong>Region: </strong><span class="my-region"></span></p>
        <p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
        <p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
    </div>
    <button class="clear-btn">Change region</button>
</div>
```

**Phân tích những gì cấu trúc này cung cấp:**
- **`loading`**: **Hiển thị** thông báo tải trong khi dữ liệu API đang được lấy
- **`errors`**: **Hiển thị** thông báo lỗi nếu các cuộc gọi API thất bại hoặc dữ liệu không hợp lệ
- **`data`**: **Lưu trữ** dữ liệu thô để gỡ lỗi trong quá trình phát triển
- **`result-container`**: **Trình bày** thông tin dấu chân carbon được định dạng cho người dùng
- **`clear-btn`**: **Cho phép** người dùng thay đổi vùng và cấu hình lại tiện ích mở rộng

### Thiết lập Quy trình Xây dựng

Bây giờ hãy cài đặt các phụ thuộc của dự án và thử nghiệm quy trình xây dựng:

```bash
npm install
```

**Quy trình cài đặt này đạt
1. **Chạy** lệnh build để biên dịch mã của bạn  
2. **Tải** tiện ích mở rộng vào trình duyệt của bạn bằng chế độ nhà phát triển  
3. **Kiểm tra** rằng biểu mẫu hiển thị đúng và trông chuyên nghiệp  
4. **Kiểm tra** rằng tất cả các phần tử của biểu mẫu được căn chỉnh đúng và hoạt động tốt  

**Những gì bạn đã hoàn thành:**  
- **Xây dựng** cấu trúc HTML cơ bản cho tiện ích mở rộng của bạn  
- **Tạo** giao diện cấu hình và kết quả với đánh dấu ngữ nghĩa phù hợp  
- **Thiết lập** quy trình phát triển hiện đại bằng các công cụ tiêu chuẩn ngành  
- **Chuẩn bị** nền tảng để thêm chức năng JavaScript tương tác  

### 🔄 **Kiểm tra sư phạm**  
**Tiến độ phát triển tiện ích mở rộng**: Xác minh sự hiểu biết của bạn trước khi tiếp tục:  
- ✅ Bạn có thể giải thích mục đích của từng tệp trong cấu trúc dự án không?  
- ✅ Bạn có hiểu cách quy trình build chuyển đổi mã nguồn của bạn không?  
- ✅ Tại sao chúng ta tách cấu hình và kết quả thành các phần giao diện khác nhau?  
- ✅ Cấu trúc biểu mẫu hỗ trợ khả năng sử dụng và khả năng truy cập như thế nào?  

**Hiểu quy trình phát triển**: Bây giờ bạn nên có khả năng:  
1. **Chỉnh sửa** HTML và CSS cho giao diện tiện ích mở rộng của bạn  
2. **Chạy** lệnh build để biên dịch các thay đổi của bạn  
3. **Tải lại** tiện ích mở rộng trong trình duyệt để kiểm tra các cập nhật  
4. **Gỡ lỗi** các vấn đề bằng công cụ dành cho nhà phát triển của trình duyệt  

Bạn đã hoàn thành giai đoạn đầu tiên của việc phát triển tiện ích mở rộng trình duyệt. Giống như anh em nhà Wright cần hiểu về khí động học trước khi đạt được chuyến bay, việc hiểu các khái niệm cơ bản này sẽ chuẩn bị cho bạn xây dựng các tính năng tương tác phức tạp hơn trong bài học tiếp theo.  

## Thử thách GitHub Copilot Agent 🚀  

Sử dụng chế độ Agent để hoàn thành thử thách sau:  

**Mô tả:** Nâng cấp tiện ích mở rộng trình duyệt bằng cách thêm tính năng xác thực biểu mẫu và phản hồi người dùng để cải thiện trải nghiệm khi nhập khóa API và mã vùng.  

**Yêu cầu:** Tạo các hàm xác thực JavaScript kiểm tra xem trường khóa API có chứa ít nhất 20 ký tự hay không và mã vùng có đúng định dạng (như 'US-NEISO'). Thêm phản hồi trực quan bằng cách thay đổi màu viền của ô nhập thành xanh lá cây cho đầu vào hợp lệ và đỏ cho đầu vào không hợp lệ. Ngoài ra, thêm tính năng bật/tắt để hiển thị/ẩn khóa API nhằm đảm bảo bảo mật.  

Tìm hiểu thêm về [chế độ Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.  

## 🚀 Thử thách  

Hãy xem qua một cửa hàng tiện ích mở rộng trình duyệt và cài đặt một tiện ích vào trình duyệt của bạn. Bạn có thể khám phá các tệp của nó theo những cách thú vị. Bạn phát hiện ra điều gì?  

## Câu hỏi sau bài giảng  

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/24)  

## Ôn tập & Tự học  

Trong bài học này, bạn đã học một chút về lịch sử của trình duyệt web; hãy tận dụng cơ hội này để tìm hiểu về cách các nhà phát minh của World Wide Web hình dung việc sử dụng nó bằng cách đọc thêm về lịch sử của nó. Một số trang web hữu ích bao gồm:  

[The History of Web Browsers](https://www.mozilla.org/firefox/browsers/browser-history/)  

[History of the Web](https://webfoundation.org/about/vision/history-of-the-web/)  

[An interview with Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)  

### ⚡ **Những gì bạn có thể làm trong 5 phút tới**  
- [ ] Mở trang tiện ích mở rộng Chrome/Edge (chrome://extensions) và khám phá những gì bạn đã cài đặt  
- [ ] Xem tab Mạng của DevTools trình duyệt khi tải một trang web  
- [ ] Thử xem nguồn trang (Ctrl+U) để thấy cấu trúc HTML  
- [ ] Kiểm tra bất kỳ phần tử trang web nào và chỉnh sửa CSS của nó trong DevTools  

### 🎯 **Những gì bạn có thể hoàn thành trong giờ tới**  
- [ ] Hoàn thành bài kiểm tra sau bài học và hiểu các nguyên tắc cơ bản của trình duyệt  
- [ ] Tạo tệp manifest.json cơ bản cho một tiện ích mở rộng trình duyệt  
- [ ] Xây dựng một tiện ích "Hello World" đơn giản hiển thị một cửa sổ bật lên  
- [ ] Kiểm tra việc tải tiện ích mở rộng của bạn trong chế độ nhà phát triển  
- [ ] Khám phá tài liệu tiện ích mở rộng trình duyệt cho trình duyệt mục tiêu của bạn  

### 📅 **Hành trình tiện ích mở rộng kéo dài một tuần của bạn**  
- [ ] Hoàn thành một tiện ích mở rộng trình duyệt có chức năng thực sự  
- [ ] Tìm hiểu về các script nội dung, script nền, và tương tác cửa sổ bật lên  
- [ ] Làm chủ các API trình duyệt như lưu trữ, tab, và nhắn tin  
- [ ] Thiết kế giao diện thân thiện với người dùng cho tiện ích mở rộng của bạn  
- [ ] Kiểm tra tiện ích mở rộng của bạn trên các trang web và tình huống khác nhau  
- [ ] Xuất bản tiện ích mở rộng của bạn lên cửa hàng tiện ích mở rộng của trình duyệt  

### 🌟 **Hành trình phát triển trình duyệt kéo dài một tháng của bạn**  
- [ ] Xây dựng nhiều tiện ích mở rộng giải quyết các vấn đề khác nhau của người dùng  
- [ ] Tìm hiểu các API trình duyệt nâng cao và các thực hành bảo mật tốt nhất  
- [ ] Đóng góp cho các dự án tiện ích mở rộng mã nguồn mở  
- [ ] Làm chủ khả năng tương thích giữa các trình duyệt và cải tiến tiến bộ  
- [ ] Tạo công cụ và mẫu phát triển tiện ích mở rộng cho người khác  
- [ ] Trở thành chuyên gia tiện ích mở rộng trình duyệt giúp đỡ các nhà phát triển khác  

## 🎯 Lộ trình làm chủ tiện ích mở rộng trình duyệt của bạn  

```mermaid
timeline
    title Browser Extension Development Progression
    
    section Foundation (15 minutes)
        Browser Understanding: Core architecture
                              : Rendering process
                              : Extension integration points
        
    section Setup (20 minutes)
        Development Environment: Project structure
                               : Build tools configuration
                               : Browser developer mode
                               : Extension loading process
        
    section Interface Design (25 minutes)
        User Experience: HTML structure
                       : CSS styling
                       : Form validation
                       : Responsive design
        
    section Core Functionality (35 minutes)
        JavaScript Integration: Event handling
                              : API interactions
                              : Data storage
                              : Error handling
        
    section Browser APIs (45 minutes)
        Platform Integration: Permissions system
                            : Storage APIs
                            : Tab management
                            : Context menus
        
    section Advanced Features (1 week)
        Professional Extensions: Background scripts
                               : Content scripts
                               : Cross-browser compatibility
                               : Performance optimization
        
    section Publishing (2 weeks)
        Distribution: Store submission
                   : Review process
                   : User feedback
                   : Update management
        
    section Expert Level (1 month)
        Extension Ecosystem: Advanced APIs
                           : Security best practices
                           : Enterprise features
                           : Framework integration
```
  
### 🛠️ Tóm tắt bộ công cụ phát triển tiện ích mở rộng của bạn  

Sau khi hoàn thành bài học này, bạn đã có:  
- **Kiến thức về kiến trúc trình duyệt**: Hiểu về các engine rendering, mô hình bảo mật, và tích hợp tiện ích mở rộng  
- **Môi trường phát triển**: Chuỗi công cụ hiện đại với Webpack, NPM, và khả năng gỡ lỗi  
- **Nền tảng UI/UX**: Cấu trúc HTML ngữ nghĩa với các mẫu tiết lộ tiến bộ  
- **Nhận thức về bảo mật**: Hiểu về quyền trình duyệt và các thực hành phát triển an toàn  
- **Khái niệm giữa các trình duyệt**: Kiến thức về các cân nhắc về khả năng tương thích và cách tiếp cận kiểm tra  
- **Tích hợp API**: Nền tảng để làm việc với các nguồn dữ liệu bên ngoài  
- **Quy trình làm việc chuyên nghiệp**: Quy trình phát triển và kiểm tra tiêu chuẩn ngành  

**Ứng dụng thực tế**: Những kỹ năng này áp dụng trực tiếp vào:  
- **Phát triển web**: Ứng dụng một trang và ứng dụng web tiến bộ  
- **Ứng dụng máy tính để bàn**: Phần mềm máy tính để bàn dựa trên Electron và web  
- **Phát triển di động**: Ứng dụng lai và giải pháp di động dựa trên web  
- **Công cụ doanh nghiệp**: Ứng dụng năng suất nội bộ và tự động hóa quy trình làm việc  
- **Mã nguồn mở**: Đóng góp cho các dự án tiện ích mở rộng trình duyệt và tiêu chuẩn web  

**Cấp độ tiếp theo**: Bạn đã sẵn sàng để thêm chức năng tương tác, làm việc với API trình duyệt, và tạo các tiện ích mở rộng giải quyết vấn đề thực tế của người dùng!  

## Bài tập  

[Thiết kế lại tiện ích mở rộng của bạn](assignment.md)  

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính xác nhất. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.