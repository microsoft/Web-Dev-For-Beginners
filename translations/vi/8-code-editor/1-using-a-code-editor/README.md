# Sử dụng Trình Soạn Thảo Mã: Làm Chủ VSCode.dev

Bạn còn nhớ trong *The Matrix* khi Neo phải kết nối với một máy tính khổng lồ để truy cập thế giới số không? Các công cụ phát triển web ngày nay lại hoàn toàn ngược lại – khả năng mạnh mẽ có thể truy cập từ bất cứ đâu. VSCode.dev là một trình soạn thảo mã dựa trên trình duyệt, mang đến các công cụ phát triển chuyên nghiệp cho bất kỳ thiết bị nào có kết nối internet.

Giống như cách máy in làm cho sách trở nên phổ biến với mọi người, không chỉ dành cho các tu sĩ trong tu viện, VSCode.dev dân chủ hóa việc lập trình. Bạn có thể làm việc trên các dự án từ máy tính thư viện, phòng thí nghiệm trường học, hoặc bất cứ nơi nào bạn có thể truy cập trình duyệt. Không cần cài đặt, không có giới hạn "Tôi cần thiết lập cụ thể của mình".

Kết thúc bài học này, bạn sẽ hiểu cách điều hướng VSCode.dev, mở các kho GitHub trực tiếp trong trình duyệt và sử dụng Git để kiểm soát phiên bản – tất cả đều là những kỹ năng mà các nhà phát triển chuyên nghiệp sử dụng hàng ngày.

## ⚡ Những Việc Bạn Có Thể Làm Trong 5 Phút Tới

**Lộ Trình Bắt Đầu Nhanh Cho Các Nhà Phát Triển Bận Rộn**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Visit vscode.dev]
    B --> C[Connect GitHub account]
    C --> D[Open any repository]
    D --> E[Start editing immediately]
```

- **Phút 1**: Truy cập [vscode.dev](https://vscode.dev) - không cần cài đặt
- **Phút 2**: Đăng nhập bằng GitHub để kết nối các kho của bạn
- **Phút 3**: Thử mẹo URL: thay đổi `github.com` thành `vscode.dev/github` trong bất kỳ URL kho nào
- **Phút 4**: Tạo một tệp mới và xem tính năng tô sáng cú pháp hoạt động tự động
- **Phút 5**: Thực hiện thay đổi và cam kết thông qua bảng điều khiển Source Control

**URL Kiểm Tra Nhanh**:
```
# Transform this:
github.com/microsoft/Web-Dev-For-Beginners

# Into this:
vscode.dev/github/microsoft/Web-Dev-For-Beginners
```

**Tại Sao Điều Này Quan Trọng**: Trong 5 phút, bạn sẽ trải nghiệm sự tự do lập trình ở bất cứ đâu với các công cụ chuyên nghiệp. Đây là tương lai của phát triển - dễ tiếp cận, mạnh mẽ và tức thì.

## 🗺️ Hành Trình Học Tập Của Bạn Qua Phát Triển Dựa Trên Đám Mây

```mermaid
journey
    title From Local Setup to Cloud Development Mastery
    section Understanding the Platform
      Discover web-based editing: 4: You
      Connect to GitHub ecosystem: 6: You
      Master interface navigation: 7: You
    section File Management Skills
      Create and organize files: 5: You
      Edit with syntax highlighting: 7: You
      Navigate project structures: 8: You
    section Version Control Mastery
      Understand Git integration: 6: You
      Practice commit workflows: 8: You
      Master collaboration patterns: 9: You
    section Professional Customization
      Install powerful extensions: 7: You
      Configure development environment: 8: You
      Build personal workflows: 9: You
```

**Điểm Đến Hành Trình Của Bạn**: Kết thúc bài học này, bạn sẽ làm chủ một môi trường phát triển chuyên nghiệp trên đám mây hoạt động từ bất kỳ thiết bị nào, cho phép bạn lập trình với các công cụ mà các nhà phát triển tại các công ty công nghệ lớn sử dụng.

## Những Gì Bạn Sẽ Học

Sau khi chúng ta cùng nhau đi qua, bạn sẽ có thể:

- Điều hướng VSCode.dev như ngôi nhà thứ hai của bạn – tìm mọi thứ bạn cần mà không bị lạc
- Mở bất kỳ kho GitHub nào trong trình duyệt và bắt đầu chỉnh sửa ngay lập tức (điều này khá kỳ diệu!)
- Sử dụng Git để theo dõi các thay đổi và lưu tiến trình của bạn như một chuyên gia
- Tăng cường trình soạn thảo của bạn với các tiện ích mở rộng giúp lập trình nhanh hơn và thú vị hơn
- Tạo và tổ chức các tệp dự án một cách tự tin

## Những Gì Bạn Cần

Yêu cầu rất đơn giản:

- Một tài khoản [GitHub miễn phí](https://github.com) (chúng tôi sẽ hướng dẫn bạn tạo nếu cần)
- Hiểu biết cơ bản về trình duyệt web
- Bài học Cơ bản về GitHub cung cấp nền tảng hữu ích, mặc dù không bắt buộc

> 💡 **Mới sử dụng GitHub?** Tạo tài khoản miễn phí và chỉ mất vài phút. Giống như cách thẻ thư viện cho phép bạn truy cập sách trên toàn thế giới, tài khoản GitHub mở ra cánh cửa đến các kho mã trên internet.

## 🧠 Tổng Quan Về Hệ Sinh Thái Phát Triển Đám Mây

```mermaid
mindmap
  root((VSCode.dev Mastery))
    Platform Benefits
      Accessibility
        Device Independence
        No Installation Required
        Instant Updates
        Universal Access
      Integration
        GitHub Connection
        Repository Sync
        Settings Persistence
        Collaboration Ready
    Development Workflow
      File Management
        Project Structure
        Syntax Highlighting
        Multi-tab Editing
        Auto-save Features
      Version Control
        Git Integration
        Commit Workflows
        Branch Management
        Change Tracking
    Customization Power
      Extensions Ecosystem
        Productivity Tools
        Language Support
        Theme Options
        Custom Shortcuts
      Environment Setup
        Personal Preferences
        Workspace Configuration
        Tool Integration
        Workflow Optimization
    Professional Skills
      Industry Standards
        Version Control
        Code Quality
        Collaboration
        Documentation
      Career Readiness
        Remote Work
        Cloud Development
        Team Projects
        Open Source
```

**Nguyên Tắc Cốt Lõi**: Các môi trường phát triển dựa trên đám mây đại diện cho tương lai của lập trình - cung cấp các công cụ chuyên nghiệp dễ tiếp cận, có tính hợp tác và không phụ thuộc vào nền tảng.

## Tại Sao Các Trình Soạn Thảo Mã Dựa Trên Web Quan Trọng

Trước khi có internet, các nhà khoa học ở các trường đại học khác nhau không thể dễ dàng chia sẻ nghiên cứu. Sau đó, ARPANET ra đời vào những năm 1960, kết nối các máy tính qua khoảng cách. Các trình soạn thảo mã dựa trên web tuân theo nguyên tắc tương tự – làm cho các công cụ mạnh mẽ dễ tiếp cận bất kể vị trí địa lý hay thiết bị của bạn.

Một trình soạn thảo mã là không gian làm việc phát triển của bạn, nơi bạn viết, chỉnh sửa và tổ chức các tệp mã. Không giống như các trình soạn thảo văn bản đơn giản, các trình soạn thảo mã chuyên nghiệp cung cấp tính năng tô sáng cú pháp, phát hiện lỗi và các tính năng quản lý dự án.

VSCode.dev mang những khả năng này đến trình duyệt của bạn:

**Ưu điểm của chỉnh sửa dựa trên web:**

| Tính năng | Mô tả | Lợi ích thực tế |
|---------|-------------|----------|
| **Không Phụ Thuộc Nền Tảng** | Chạy trên bất kỳ thiết bị nào có trình duyệt | Làm việc từ các máy tính khác nhau một cách liền mạch |
| **Không Cần Cài Đặt** | Truy cập qua URL web | Bỏ qua các hạn chế cài đặt phần mềm |
| **Cập Nhật Tự Động** | Luôn chạy phiên bản mới nhất | Truy cập các tính năng mới mà không cần cập nhật thủ công |
| **Tích Hợp Kho** | Kết nối trực tiếp với GitHub | Chỉnh sửa mã mà không cần quản lý tệp cục bộ |

**Ý nghĩa thực tế:**
- Liên tục làm việc qua các môi trường khác nhau
- Giao diện nhất quán bất kể hệ điều hành
- Khả năng hợp tác tức thì
- Giảm yêu cầu lưu trữ cục bộ

## Khám Phá VSCode.dev

Giống như phòng thí nghiệm của Marie Curie chứa các thiết bị tinh vi trong một không gian tương đối đơn giản, VSCode.dev tích hợp các công cụ phát triển chuyên nghiệp vào giao diện trình duyệt. Ứng dụng web này cung cấp cùng chức năng cốt lõi như các trình soạn thảo mã trên máy tính.

Bắt đầu bằng cách truy cập [vscode.dev](https://vscode.dev) trong trình duyệt của bạn. Giao diện tải mà không cần tải xuống hoặc cài đặt hệ thống – một ứng dụng trực tiếp của các nguyên tắc điện toán đám mây.

### Kết Nối Tài Khoản GitHub Của Bạn

Giống như cách điện thoại của Alexander Graham Bell kết nối các địa điểm xa xôi, việc liên kết tài khoản GitHub của bạn sẽ kết nối VSCode.dev với các kho mã của bạn. Khi được yêu cầu đăng nhập bằng GitHub, việc chấp nhận kết nối này là điều nên làm.

**Tích hợp GitHub cung cấp:**
- Truy cập trực tiếp vào các kho của bạn trong trình soạn thảo
- Cài đặt và tiện ích mở rộng được đồng bộ hóa trên các thiết bị
- Quy trình lưu trữ hợp lý vào GitHub
- Môi trường phát triển cá nhân hóa

### Làm Quen Với Không Gian Làm Việc Mới Của Bạn

Khi mọi thứ đã tải lên, bạn sẽ thấy một không gian làm việc sạch sẽ được thiết kế để giúp bạn tập trung vào điều quan trọng – mã của bạn!

![Giao diện mặc định của VSCode.dev](../../../../translated_images/vi/default-vscode-dev.5d06881d65c1b323.webp)

**Đây là chuyến tham quan khu vực của bạn:**
- **Thanh Hoạt Động** (dải bên trái): Điều hướng chính của bạn với Explorer 📁, Tìm kiếm 🔍, Source Control 🌿, Tiện ích 🧩, và Cài đặt ⚙️
- **Thanh Bên** (bảng bên cạnh): Thay đổi để hiển thị thông tin liên quan dựa trên những gì bạn đã chọn
- **Khu Vực Soạn Thảo** (không gian lớn ở giữa): Đây là nơi phép thuật xảy ra – khu vực chính để bạn viết mã

**Hãy dành một chút thời gian để khám phá:**
- Nhấp vào các biểu tượng trên Thanh Hoạt Động và xem mỗi cái làm gì
- Chú ý cách thanh bên cập nhật để hiển thị thông tin khác nhau – khá thú vị, đúng không?
- Chế độ xem Explorer (📁) có lẽ là nơi bạn sẽ dành phần lớn thời gian, vì vậy hãy làm quen với nó

```mermaid
flowchart TB
    subgraph "VSCode.dev Interface Architecture"
        A[Activity Bar] --> B[Explorer 📁]
        A --> C[Search 🔍]
        A --> D[Source Control 🌿]
        A --> E[Extensions 🧩]
        A --> F[Settings ⚙️]
        
        B --> G[File Tree]
        C --> H[Find & Replace]
        D --> I[Git Status]
        E --> J[Extension Marketplace]
        F --> K[Configuration]
        
        L[Sidebar] --> M[Context Panel]
        N[Editor Area] --> O[Code Files]
        P[Terminal/Output] --> Q[Command Line]
    end
```

## Mở Các Kho GitHub

Trước khi có internet, các nhà nghiên cứu phải đi đến thư viện để truy cập tài liệu. Các kho GitHub hoạt động tương tự – chúng là các bộ sưu tập mã được lưu trữ từ xa. VSCode.dev loại bỏ bước truyền thống là tải xuống các kho về máy cục bộ trước khi chỉnh sửa.

Khả năng này cho phép truy cập ngay lập tức vào bất kỳ kho công khai nào để xem, chỉnh sửa hoặc đóng góp. Dưới đây là hai phương pháp để mở các kho:

### Phương Pháp 1: Cách Nhấp Chuột

Đây là cách hoàn hảo khi bạn mới bắt đầu với VSCode.dev và muốn mở một kho cụ thể. Nó đơn giản và thân thiện với người mới bắt đầu:

**Cách thực hiện:**

1. Truy cập [vscode.dev](https://vscode.dev) nếu bạn chưa ở đó
2. Tìm nút "Open Remote Repository" trên màn hình chào mừng và nhấp vào nó

   ![Mở kho từ xa](../../../../translated_images/vi/open-remote-repository.bd9c2598b8949e7f.webp)

3. Dán vào bất kỳ URL kho GitHub nào (thử cái này: `https://github.com/microsoft/Web-Dev-For-Beginners`)
4. Nhấn Enter và xem điều kỳ diệu xảy ra!

**Mẹo chuyên nghiệp - Phím tắt Command Palette:**

Muốn cảm thấy như một phù thủy lập trình? Thử phím tắt này: Ctrl+Shift+P (hoặc Cmd+Shift+P trên Mac) để mở Command Palette:

![Command Palette](../../../../translated_images/vi/palette-menu.4946174e07f42622.webp)

**Command Palette giống như có một công cụ tìm kiếm cho mọi thứ bạn có thể làm:**
- Gõ "open remote" và nó sẽ tìm trình mở kho cho bạn
- Nó nhớ các kho bạn đã mở gần đây (rất tiện lợi!)
- Khi bạn quen với nó, bạn sẽ cảm thấy mình lập trình nhanh như chớp
- Nó cơ bản là phiên bản "Hey Siri, nhưng dành cho lập trình" của VSCode.dev

### Phương Pháp 2: Kỹ Thuật Chỉnh Sửa URL

Giống như cách HTTP và HTTPS sử dụng các giao thức khác nhau trong khi vẫn giữ cấu trúc tên miền giống nhau, VSCode.dev sử dụng một mẫu URL phản ánh hệ thống địa chỉ của GitHub. Bất kỳ URL kho GitHub nào cũng có thể được chỉnh sửa để mở trực tiếp trong VSCode.dev.

**Mẫu chuyển đổi URL:**

| Loại Kho | URL GitHub | URL VSCode.dev |
|----------------|---------------------|----------------|
| **Kho Công Khai** | `github.com/microsoft/Web-Dev-For-Beginners` | `vscode.dev/github/microsoft/Web-Dev-For-Beginners` |
| **Dự Án Cá Nhân** | `github.com/your-username/my-project` | `vscode.dev/github/your-username/my-project` |
| **Bất Kỳ Kho Nào Có Thể Truy Cập** | `github.com/their-username/awesome-repo` | `vscode.dev/github/their-username/awesome-repo` |

**Cách thực hiện:**
- Thay thế `github.com` bằng `vscode.dev/github`
- Giữ nguyên tất cả các thành phần URL khác
- Hoạt động với bất kỳ kho công khai nào có thể truy cập
- Cung cấp quyền truy cập chỉnh sửa ngay lập tức

> 💡 **Mẹo thay đổi cuộc sống**: Đánh dấu các phiên bản VSCode.dev của các kho yêu thích của bạn. Tôi có các dấu trang như "Chỉnh sửa Portfolio của tôi" và "Sửa Tài liệu" đưa tôi trực tiếp đến chế độ chỉnh sửa!

**Nên sử dụng phương pháp nào?**
- **Cách giao diện**: Tuyệt vời khi bạn đang khám phá hoặc không nhớ tên kho chính xác
- **Mẹo URL**: Hoàn hảo để truy cập nhanh khi bạn biết chính xác nơi mình muốn đến

### 🎯 Kiểm Tra Sư Phạm: Truy Cập Phát Triển Đám Mây

**Tạm Dừng và Suy Ngẫm**: Bạn vừa học được hai phương pháp để truy cập các kho mã thông qua trình duyệt web. Điều này đại diện cho một sự thay đổi cơ bản trong cách phát triển hoạt động.

**Tự Đánh Giá Nhanh**:
- Bạn có thể giải thích tại sao chỉnh sửa dựa trên web loại bỏ việc "thiết lập môi trường phát triển" truyền thống không?
- Những lợi ích mà kỹ thuật chỉnh sửa URL mang lại so với việc sao chép git cục bộ là gì?
- Cách tiếp cận này thay đổi cách bạn có thể đóng góp cho các dự án mã nguồn mở như thế nào?

**Kết Nối Thực Tế**: Các công ty lớn như GitHub, GitLab, và Replit đã xây dựng nền tảng phát triển của họ dựa trên các nguyên tắc ưu tiên đám mây này. Bạn đang học các quy trình làm việc giống như các đội phát triển chuyên nghiệp trên toàn thế giới.

**Câu Hỏi Thách Thức**: Phát triển dựa trên đám mây có thể thay đổi cách dạy lập trình trong trường học như thế nào? Hãy cân nhắc các yêu cầu về thiết bị, quản lý phần mềm và khả năng hợp tác.

## Làm Việc Với Tệp và Dự Án

Bây giờ bạn đã mở một kho, hãy bắt đầu xây dựng! VSCode.dev cung cấp cho bạn mọi thứ bạn cần để tạo, chỉnh sửa và tổ chức các tệp mã của mình. Hãy nghĩ về nó như xưởng kỹ thuật số của bạn – mọi công cụ đều ở ngay nơi bạn cần.

Hãy cùng khám phá các nhiệm vụ hàng ngày sẽ chiếm phần lớn quy trình làm việc lập trình của bạn.

### Tạo Tệp Mới

Giống như việc tổ chức các bản vẽ trong văn phòng kiến trúc sư, việc tạo tệp trong VSCode.dev tuân theo một cách tiếp cận có cấu trúc. Hệ thống hỗ trợ tất cả các loại tệp phát triển web tiêu chuẩn.

**Quy trình tạo tệp:**

1. Điều hướng đến thư mục mục tiêu trong thanh bên Explorer
2. Di chuột qua tên thư mục để hiển thị biểu tượng "New File" (📄+)
3. Nhập tên tệp bao gồm phần mở rộng phù hợp (`style.css`, `script.js`, `index.html`)
4. Nhấn Enter để tạo tệp

![Tạo tệp mới](../../../../translated_images/vi/create-new-file.2814e609c2af9aeb.webp)

**Quy ước đặt tên:**
- Sử dụng tên mô tả chỉ ra mục đích của tệp
- Bao gồm phần mở rộng tệp để tô sáng cú pháp đúng
- Tuân theo các mẫu đặt tên nhất quán trong suốt các dự án
- Sử dụng chữ thường và dấu gạch ngang thay vì khoảng trắng

### Chỉnh Sửa và Lưu Tệp

Đây là nơi niềm vui thực sự bắt đầu! Trình soạn thảo của VSCode.dev được tích hợp các tính năng hữu ích giúp việc lập trình trở nên mượt mà và trực quan. Nó giống như có một trợ lý viết thông minh, nhưng dành cho mã.

**Quy trình chỉnh sửa của bạn:**

1. Nhấp vào bất kỳ tệp nào trong Explorer để mở nó trong khu vực chính
2. Bắt đầu gõ và xem VSCode.dev hỗ trợ bạn với màu sắc, gợi ý và phát hiện lỗi
3. Lưu công việc của bạn bằng Ctrl+S (Windows/Linux) hoặc Cmd+S (Mac) – mặc dù nó cũng tự động lưu!

![Chỉnh sửa tệp trong VSCode.dev](../../../../translated_images/vi/edit-a-file.52c0ee665ef19f08.webp)

**Những điều thú vị xảy ra khi bạn lập trình:**
- Mã của bạn được tô màu đẹp mắt để dễ đọc
- VSCode.dev gợi ý hoàn thành khi bạn gõ (giống như tự động sửa, nhưng thông minh hơn nhiều)
- Nó bắt lỗi chính tả và lỗi trước khi bạn lưu
- Bạn có thể mở nhiều tệp trong các tab, giống như trong trình duyệt
- Mọi thứ tự động lưu trong nền

> ⚠️ **Mẹo nhanh**: Mặc dù tự động lưu đã hỗ trợ bạn, việc nhấn Ctrl+S hoặc Cmd+S vẫn là một thói quen tốt. Nó ngay lập tức lưu mọi thứ và kích hoạt một số tính năng hữu ích như kiểm tra lỗi.

### Kiểm Soát Phiên Bản Với Git

Giống như cách các nhà khảo cổ tạo hồ sơ chi tiết về các lớp khai quật, Git theo dõi các thay đổi trong mã của bạn theo thời gian. Hệ thống này bảo tồn lịch sử dự án và cho phép bạn quay lại các phiên bản trước khi cần. VSCode.dev bao gồm chức năng Git tích hợp.

**Giao diện Source Control:**

1. Truy cập bảng điều khiển Source Control qua biểu tượng 🌿 trong Thanh Hoạt Động
2. Các tệp đã chỉnh sửa xuất hiện trong phần "Changes"
3. Mã màu chỉ ra loại thay đổi: xanh lá cho bổ sung, đỏ cho xóa

![Xem các thay đổi trong Source Control](../../../../translated_images/vi/working-tree.c58eec08e6335c79.webp)

**Lưu công việc của bạn (quy trình commit):**

```mermaid
flowchart TD
    A[Make changes to files] --> B[View changes in Source Control]
    B --> C[Stage changes by clicking +]
    C --> D[Write descriptive commit message]
    D --> E[Click checkmark to commit]
    E --> F[Changes pushed to GitHub]
```

```mermaid
stateDiagram-v2
    [*] --> Modified: Edit files
    Modified --> Staged: Click + to stage
    Staged --> Modified: Click - to unstage
    Staged --> Committed: Add message & commit
    Committed --> [*]: Sync to GitHub
    
    state Committed {
        [*] --> LocalCommit
        LocalCommit --> RemotePush: Auto-sync
    }
```

**Quy trình từng bước của bạn:**
- Nhấp vào biểu tượng "+" bên cạnh các tệp bạn muốn lưu (
- Kiểm tra kỹ rằng bạn hài lòng với tất cả các thay đổi đã được staged
- Viết một ghi chú ngắn giải thích những gì bạn đã làm (đây là "commit message" của bạn)
- Nhấn nút dấu kiểm để lưu mọi thứ lên GitHub
- Nếu bạn đổi ý về điều gì đó, biểu tượng hoàn tác cho phép bạn loại bỏ các thay đổi

**Viết commit message tốt (dễ hơn bạn nghĩ!):**
- Chỉ cần mô tả những gì bạn đã làm, như "Thêm form liên hệ" hoặc "Sửa lỗi điều hướng"
- Giữ ngắn gọn và súc tích – nghĩ như độ dài một tweet, không phải bài luận
- Bắt đầu với các từ hành động như "Thêm", "Sửa", "Cập nhật" hoặc "Xóa"
- **Ví dụ tốt**: "Thêm menu điều hướng responsive", "Sửa lỗi bố cục trên di động", "Cập nhật màu sắc để cải thiện khả năng truy cập"

> 💡 **Mẹo điều hướng nhanh**: Sử dụng menu hamburger (☰) ở góc trên bên trái để quay lại kho GitHub của bạn và xem các thay đổi đã commit trực tuyến. Nó giống như một cổng kết nối giữa môi trường chỉnh sửa của bạn và trang chủ dự án trên GitHub!

## Nâng cao chức năng với Extensions

Giống như xưởng của một người thợ thủ công chứa các công cụ chuyên dụng cho từng nhiệm vụ, VSCode.dev có thể được tùy chỉnh với các extensions để thêm các khả năng cụ thể. Các plugin do cộng đồng phát triển này giải quyết các nhu cầu phát triển phổ biến như định dạng mã, xem trước trực tiếp, và tích hợp Git nâng cao.

Marketplace của extensions chứa hàng ngàn công cụ miễn phí được tạo bởi các nhà phát triển trên toàn thế giới. Mỗi extension giải quyết các thách thức trong quy trình làm việc, cho phép bạn xây dựng một môi trường phát triển cá nhân hóa phù hợp với nhu cầu và sở thích cụ thể của bạn.

```mermaid
mindmap
  root((Extension Ecosystem))
    Essential Categories
      Productivity
        Live Server
        Auto Rename Tag
        Bracket Pair Colorizer
        GitLens
      Code Quality
        Prettier
        ESLint
        Spell Checker
        Error Lens
      Language Support
        HTML CSS Support
        JavaScript ES6
        Python Extension
        Markdown Preview
      Themes & UI
        Dark+ Modern
        Material Icon Theme
        Peacock
        Rainbow Brackets
    Discovery Methods
      Popular Rankings
        Download Counts
        User Ratings
        Recent Updates
        Community Reviews
      Recommendations
        Workspace Suggestions
        Language-based
        Workflow-specific
        Team Standards
```

### Tìm Extensions phù hợp

Marketplace của extensions được tổ chức rất tốt, vì vậy bạn sẽ không bị lạc khi tìm kiếm những gì bạn cần. Nó được thiết kế để giúp bạn khám phá cả các công cụ cụ thể và những thứ thú vị mà bạn thậm chí không biết là tồn tại!

**Cách truy cập marketplace:**

1. Nhấp vào biểu tượng Extensions (🧩) trong Activity Bar
2. Duyệt qua hoặc tìm kiếm một thứ gì đó cụ thể
3. Nhấp vào bất kỳ thứ gì trông thú vị để tìm hiểu thêm về nó

![Giao diện marketplace của extensions](../../../../translated_images/vi/extensions.eca0e0c7f59a10b5.webp)

**Những gì bạn sẽ thấy ở đó:**

| Phần | Nội dung bên trong | Tại sao hữu ích |
|----------|---------|----------|
| **Installed** | Các extensions bạn đã thêm | Bộ công cụ lập trình cá nhân của bạn |
| **Popular** | Những cái được yêu thích nhất | Những gì hầu hết các nhà phát triển tin dùng |
| **Recommended** | Gợi ý thông minh cho dự án của bạn | Các đề xuất hữu ích từ VSCode.dev |

**Điều làm cho việc duyệt dễ dàng:**
- Mỗi extension hiển thị xếp hạng, số lượt tải xuống, và đánh giá thực tế từ người dùng
- Bạn có hình ảnh minh họa và mô tả rõ ràng về những gì mỗi extension làm
- Mọi thứ đều được đánh dấu rõ ràng với thông tin tương thích
- Các extensions tương tự được gợi ý để bạn có thể so sánh các tùy chọn

### Cài đặt Extensions (Rất dễ dàng!)

Thêm sức mạnh mới vào trình chỉnh sửa của bạn đơn giản như nhấp vào một nút. Extensions được cài đặt trong vài giây và bắt đầu hoạt động ngay lập tức – không cần khởi động lại, không phải chờ đợi.

**Cách thực hiện:**

1. Tìm kiếm những gì bạn muốn (thử tìm "live server" hoặc "prettier")
2. Nhấp vào một cái trông tốt để xem thêm chi tiết
3. Đọc qua những gì nó làm và kiểm tra xếp hạng
4. Nhấn nút "Install" màu xanh và bạn đã xong!

![Cài đặt extensions](../../../../8-code-editor/images/install-extension.gif)

**Những gì diễn ra phía sau:**
- Extension được tải xuống và tự thiết lập tự động
- Các tính năng mới xuất hiện ngay trong giao diện của bạn
- Mọi thứ bắt đầu hoạt động ngay lập tức (thật sự, nhanh đến vậy!)
- Nếu bạn đã đăng nhập, extension sẽ được đồng bộ hóa trên tất cả các thiết bị của bạn

**Một số extensions tôi khuyên bạn nên bắt đầu:**
- **Live Server**: Xem trang web của bạn cập nhật theo thời gian thực khi bạn viết mã (cái này thật kỳ diệu!)
- **Prettier**: Tự động làm cho mã của bạn trông sạch sẽ và chuyên nghiệp
- **Auto Rename Tag**: Thay đổi một thẻ HTML và thẻ đối tác của nó cũng được cập nhật
- **Bracket Pair Colorizer**: Mã hóa màu cho các dấu ngoặc để bạn không bị lạc
- **GitLens**: Tăng cường các tính năng Git của bạn với rất nhiều thông tin hữu ích

### Tùy chỉnh Extensions của bạn

Hầu hết các extensions đi kèm với các cài đặt bạn có thể điều chỉnh để làm cho chúng hoạt động đúng như bạn muốn. Hãy nghĩ về nó như điều chỉnh ghế và gương trong xe – mỗi người đều có sở thích riêng!

**Điều chỉnh cài đặt extension:**

1. Tìm extension đã cài đặt của bạn trong bảng Extensions
2. Tìm biểu tượng bánh răng nhỏ (⚙️) bên cạnh tên của nó và nhấp vào
3. Chọn "Extension Settings" từ menu thả xuống
4. Điều chỉnh mọi thứ cho đến khi cảm thấy phù hợp với quy trình làm việc của bạn

![Tùy chỉnh cài đặt extension](../../../../translated_images/vi/extension-settings.21c752ae4f4cdb78.webp)

**Những điều phổ biến bạn có thể muốn điều chỉnh:**
- Cách mã của bạn được định dạng (tab so với khoảng trắng, độ dài dòng, v.v.)
- Các phím tắt nào kích hoạt các hành động khác nhau
- Các loại tệp mà extension nên hoạt động
- Bật hoặc tắt các tính năng cụ thể để giữ mọi thứ gọn gàng

### Giữ Extensions của bạn được tổ chức

Khi bạn khám phá thêm nhiều extensions thú vị, bạn sẽ muốn giữ bộ sưu tập của mình gọn gàng và hoạt động trơn tru. VSCode.dev làm cho việc này rất dễ quản lý.

**Các tùy chọn quản lý extension của bạn:**

| Những gì bạn có thể làm | Khi nào hữu ích | Mẹo chuyên nghiệp |
|--------|---------|----------|
| **Disable** | Kiểm tra xem một extension có gây ra vấn đề không | Tốt hơn là gỡ cài đặt nếu bạn có thể muốn sử dụng lại |
| **Uninstall** | Hoàn toàn loại bỏ các extensions bạn không cần | Giữ môi trường của bạn sạch sẽ và nhanh chóng |
| **Update** | Nhận các tính năng mới nhất và sửa lỗi | Thường tự động, nhưng đáng để kiểm tra |

**Cách tôi thích quản lý extensions:**
- Cứ vài tháng, tôi xem lại những gì đã cài đặt và gỡ bỏ bất cứ thứ gì tôi không sử dụng
- Tôi giữ các extensions được cập nhật để nhận các cải tiến và sửa lỗi bảo mật mới nhất
- Nếu có gì đó chậm, tôi tạm thời vô hiệu hóa các extensions để xem liệu một trong số chúng có phải là nguyên nhân không
- Tôi đọc ghi chú cập nhật khi các extensions nhận được các bản cập nhật lớn – đôi khi có các tính năng mới thú vị!

> ⚠️ **Mẹo hiệu suất**: Extensions rất tuyệt, nhưng có quá nhiều có thể làm chậm mọi thứ. Tập trung vào những cái thực sự làm cho cuộc sống của bạn dễ dàng hơn và đừng ngại gỡ bỏ những cái bạn không bao giờ sử dụng.

### 🎯 Kiểm tra sư phạm: Tùy chỉnh môi trường phát triển

**Hiểu kiến trúc**: Bạn đã học cách tùy chỉnh một môi trường phát triển chuyên nghiệp bằng cách sử dụng các extensions do cộng đồng tạo ra. Điều này phản ánh cách các nhóm phát triển doanh nghiệp xây dựng các chuỗi công cụ tiêu chuẩn hóa.

**Các khái niệm chính đã nắm vững**:
- **Khám phá Extensions**: Tìm các công cụ giải quyết các thách thức phát triển cụ thể
- **Cấu hình môi trường**: Tùy chỉnh công cụ để phù hợp với sở thích cá nhân hoặc nhóm
- **Tối ưu hóa hiệu suất**: Cân bằng giữa chức năng và hiệu suất hệ thống
- **Hợp tác cộng đồng**: Tận dụng các công cụ được tạo bởi cộng đồng nhà phát triển toàn cầu

**Kết nối ngành**: Hệ sinh thái extensions cung cấp năng lượng cho các nền tảng phát triển lớn như VS Code, Chrome DevTools, và các IDE hiện đại. Hiểu cách đánh giá, cài đặt, và cấu hình extensions là điều cần thiết cho quy trình làm việc phát triển chuyên nghiệp.

**Câu hỏi phản ánh**: Bạn sẽ tiếp cận việc thiết lập một môi trường phát triển tiêu chuẩn hóa cho một nhóm 10 nhà phát triển như thế nào? Hãy cân nhắc tính nhất quán, hiệu suất, và sở thích cá nhân.

## 📈 Lộ trình thành thạo phát triển trên đám mây của bạn

```mermaid
timeline
    title Professional Cloud Development Journey
    
    section Platform Foundations
        Cloud Development Understanding
            : Master web-based editing concepts
            : Connect GitHub integration patterns
            : Navigate professional interfaces
    
    section Workflow Mastery
        File & Project Management
            : Create organized project structures
            : Master syntax highlighting benefits
            : Handle multi-file editing workflows
        
        Version Control Integration
            : Understand Git visualization
            : Practice commit message standards
            : Master change tracking workflows
    
    section Environment Customization
        Extension Ecosystem
            : Discover productivity extensions
            : Configure development preferences
            : Optimize performance vs functionality
        
        Professional Setup
            : Build consistent workflows
            : Create reusable configurations
            : Establish team standards
    
    section Industry Readiness
        Cloud-First Development
            : Master remote development practices
            : Understand collaborative workflows
            : Build platform-independent skills
        
        Professional Practices
            : Follow industry standards
            : Create maintainable workflows
            : Prepare for team environments
```

**🎓 Cột mốc tốt nghiệp**: Bạn đã thành thạo phát triển trên đám mây bằng cách sử dụng các công cụ và quy trình làm việc giống như các nhà phát triển chuyên nghiệp tại các công ty công nghệ lớn. Những kỹ năng này đại diện cho tương lai của phát triển phần mềm.

**🔄 Khả năng cấp độ tiếp theo**:
- Sẵn sàng khám phá các nền tảng phát triển đám mây nâng cao (Codespaces, GitPod)
- Chuẩn bị làm việc trong các nhóm phát triển phân tán
- Được trang bị để đóng góp cho các dự án mã nguồn mở toàn cầu
- Đặt nền tảng cho DevOps hiện đại và các thực hành tích hợp liên tục

## Thử thách GitHub Copilot Agent 🚀

Giống như cách tiếp cận có cấu trúc mà NASA sử dụng cho các nhiệm vụ không gian, thử thách này liên quan đến việc áp dụng có hệ thống các kỹ năng VSCode.dev trong một kịch bản quy trình làm việc hoàn chỉnh.

**Mục tiêu:** Thể hiện sự thành thạo với VSCode.dev bằng cách thiết lập một quy trình làm việc phát triển web toàn diện.

**Yêu cầu dự án:** Sử dụng chế độ Agent để hoàn thành các nhiệm vụ sau:
1. Fork một kho hiện có hoặc tạo một kho mới
2. Thiết lập cấu trúc dự án chức năng với các tệp HTML, CSS, và JavaScript
3. Cài đặt và cấu hình ba extensions tăng cường phát triển
4. Thực hành kiểm soát phiên bản với các commit message mô tả
5. Thử nghiệm với việc tạo và chỉnh sửa nhánh tính năng
6. Tài liệu hóa quy trình và những gì đã học trong tệp README.md

Bài tập này củng cố tất cả các khái niệm VSCode.dev thành một quy trình làm việc thực tế có thể được áp dụng cho các dự án phát triển trong tương lai.

Tìm hiểu thêm về [chế độ Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## Bài tập

Đã đến lúc thử nghiệm thực tế các kỹ năng này! Tôi có một dự án thực hành sẽ cho phép bạn áp dụng mọi thứ chúng ta đã thảo luận: [Tạo một trang web hồ sơ cá nhân bằng VSCode.dev](./assignment.md)

Bài tập này hướng dẫn bạn xây dựng một trang web hồ sơ cá nhân chuyên nghiệp hoàn toàn trên trình duyệt của bạn. Bạn sẽ sử dụng tất cả các tính năng VSCode.dev mà chúng ta đã khám phá, và cuối cùng, bạn sẽ có một trang web đẹp mắt và sự tự tin vững chắc trong quy trình làm việc mới của mình.

## Tiếp tục khám phá và phát triển kỹ năng của bạn

Bạn đã có một nền tảng vững chắc, nhưng còn rất nhiều điều thú vị để khám phá! Dưới đây là một số tài nguyên và ý tưởng để nâng cao kỹ năng VSCode.dev của bạn:

**Tài liệu chính thức đáng để đánh dấu:**
- [Tài liệu VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) – Hướng dẫn đầy đủ về chỉnh sửa trên trình duyệt
- [GitHub Codespaces](https://docs.github.com/en/codespaces) – Khi bạn muốn có thêm sức mạnh trên đám mây

**Các tính năng thú vị để thử nghiệm tiếp theo:**
- **Phím tắt**: Học các tổ hợp phím sẽ khiến bạn cảm thấy như một ninja lập trình
- **Cài đặt Workspace**: Thiết lập các môi trường khác nhau cho các loại dự án khác nhau
- **Multi-root Workspaces**: Làm việc trên nhiều kho cùng một lúc (rất tiện lợi!)
- **Tích hợp Terminal**: Truy cập các công cụ dòng lệnh ngay trong trình duyệt của bạn

**Ý tưởng để thực hành:**
- Tham gia vào một số dự án mã nguồn mở và đóng góp bằng VSCode.dev – đây là cách tuyệt vời để đóng góp!
- Thử nghiệm với các extensions khác nhau để tìm thiết lập hoàn hảo của bạn
- Tạo các mẫu dự án cho các loại trang web bạn thường xây dựng
- Thực hành các quy trình Git như tạo nhánh và hợp nhất – những kỹ năng này rất quý giá trong các dự án nhóm

---

**Bạn đã thành thạo phát triển trên trình duyệt!** 🎉 Giống như việc phát minh ra các dụng cụ di động cho phép các nhà khoa học nghiên cứu ở các địa điểm xa xôi, VSCode.dev cho phép lập trình chuyên nghiệp từ bất kỳ thiết bị nào có kết nối internet.

Những kỹ năng này phản ánh các thực hành hiện tại trong ngành – nhiều nhà phát triển chuyên nghiệp sử dụng môi trường phát triển trên đám mây vì tính linh hoạt và khả năng truy cập của nó. Bạn đã học được một quy trình làm việc có thể mở rộng từ các dự án cá nhân đến các cộng tác nhóm lớn.

Áp dụng các kỹ thuật này vào dự án phát triển tiếp theo của bạn! 🚀

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.