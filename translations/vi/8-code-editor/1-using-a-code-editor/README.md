<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:14:41+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "vi"
}
-->
***

# Sử dụng Trình Soạn Thảo Mã: Làm Chủ [VSCode.dev](https://vscode.dev)

**Chào mừng bạn!**  
Bài học này sẽ hướng dẫn bạn từ cơ bản đến nâng cao về cách sử dụng [VSCode.dev](https://vscode.dev)—trình soạn thảo mã mạnh mẽ trên nền web. Bạn sẽ học cách chỉnh sửa mã, quản lý dự án, theo dõi thay đổi, cài đặt tiện ích mở rộng, và cộng tác như một chuyên gia—tất cả chỉ cần trình duyệt, không cần cài đặt.

***

## Mục tiêu học tập

Sau bài học này, bạn sẽ có thể:

- Sử dụng trình soạn thảo mã hiệu quả cho bất kỳ dự án nào, ở bất kỳ đâu
- Theo dõi công việc một cách liền mạch với tính năng kiểm soát phiên bản tích hợp
- Cá nhân hóa và nâng cao quy trình phát triển của bạn với các tùy chỉnh và tiện ích mở rộng của trình soạn thảo

***

## Điều kiện tiên quyết

Để bắt đầu, **đăng ký tài khoản [GitHub](https://github.com) miễn phí**, giúp bạn quản lý kho mã và cộng tác trên toàn thế giới. Nếu bạn chưa có tài khoản, [tạo tài khoản tại đây](https://github.com/).

***

## Tại sao nên sử dụng trình soạn thảo mã trên nền web?

Một **trình soạn thảo mã** như VSCode.dev là trung tâm điều khiển của bạn để viết, chỉnh sửa, và quản lý mã. Với giao diện trực quan, nhiều tính năng, và khả năng truy cập ngay lập tức qua trình duyệt, bạn có thể:

- Chỉnh sửa dự án trên bất kỳ thiết bị nào
- Tránh phiền phức khi cài đặt phần mềm
- Cộng tác và đóng góp ngay lập tức

Khi bạn đã quen với VSCode.dev, bạn sẽ sẵn sàng xử lý các nhiệm vụ lập trình từ bất kỳ đâu, bất kỳ lúc nào.

***

## Bắt đầu với VSCode.dev

Truy cập **[VSCode.dev](https://vscode.dev)**—không cần cài đặt, không cần tải xuống. Đăng nhập bằng GitHub để mở khóa toàn bộ tính năng, bao gồm đồng bộ hóa cài đặt, tiện ích mở rộng, và kho mã. Nếu được yêu cầu, hãy kết nối tài khoản GitHub của bạn.

Sau khi tải xong, không gian làm việc của bạn sẽ trông như thế này:

![Default VSCode.dev](../images/default-vscode-dev có ba phần chính từ trái sang phải:
- **Thanh hoạt động:** Các biểu tượng như 🔎 (Tìm kiếm), ⚙️ (Cài đặt), tệp, kiểm soát nguồn, v.v.
- **Thanh bên:** Thay đổi ngữ cảnh dựa trên biểu tượng được chọn ở thanh hoạt động (mặc định là *Explorer* để hiển thị tệp).
- **Khu vực chỉnh sửa/mã:** Phần lớn nhất ở bên phải—nơi bạn thực sự chỉnh sửa và xem mã.

Nhấp vào các biểu tượng để khám phá tính năng, nhưng quay lại _Explorer_ để giữ vị trí của bạn.

***

## Mở kho GitHub

### Phương pháp 1: Từ trình soạn thảo

1. Truy cập [VSCode.dev](https://vscode.dev). Nhấp vào **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository sử dụng _Command Palette_ (Ctrl-Shift-P, hoặc Cmd-Shift-P trên Mac).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Chọn tùy chọn này.
   - Dán URL kho GitHub của bạn (ví dụ: `https://github.com/microsoft/Web-Dev-For-Beginners`) và nhấn Enter.

Nếu thành công, bạn sẽ thấy toàn bộ dự án được tải lên và sẵn sàng chỉnh sửa!

***

### Phương pháp 2: Mở ngay qua URL

Biến đổi bất kỳ URL kho GitHub nào để mở trực tiếp trong VSCode.dev bằng cách thay thế `github.com` bằng `vscode.dev/github`.  
Ví dụ:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Tính năng này giúp truy cập nhanh chóng vào BẤT KỲ dự án nào.

***

## Chỉnh sửa tệp trong dự án của bạn

Khi kho của bạn đã được mở, bạn có thể:

### 1. **Tạo tệp mới**
- Trong thanh bên *Explorer*, điều hướng đến thư mục mong muốn hoặc sử dụng thư mục gốc.
- Nhấp vào biểu tượng _‘New file ...’_.
- Đặt tên cho tệp, nhấn **Enter**, và tệp của bạn sẽ xuất hiện ngay lập tức.

![Create a new file](../images/create-new-file 2. **Chỉnh sửa và lưu tệp**

- Nhấp vào một tệp trong *Explorer* để mở nó trong khu vực mã.
- Thực hiện các thay đổi cần thiết.
- VSCode.dev tự động lưu thay đổi của bạn, nhưng bạn có thể nhấn Ctrl+S để lưu thủ công.

![Edit a file](../images/edit-a-file.png. **Theo dõi & Cam kết thay đổi với kiểm soát phiên bản**

VSCode.dev tích hợp sẵn **Git** để kiểm soát phiên bản!

- Nhấp vào biểu tượng _'Source Control'_ để xem tất cả các thay đổi đã thực hiện.
- Các tệp trong thư mục `Changes` hiển thị bổ sung (màu xanh lá) và xóa bỏ (màu đỏ).  
  ![View changes](../images/working-tree.png thay đổi bằng cách nhấp vào `+` bên cạnh tệp để chuẩn bị cho cam kết.
- **Loại bỏ** các thay đổi không mong muốn bằng cách nhấp vào biểu tượng hoàn tác.
- Nhập một thông điệp cam kết rõ ràng, sau đó nhấp vào dấu kiểm để cam kết và đẩy lên.

Để quay lại kho của bạn trên GitHub, chọn biểu tượng menu hamburger ở góc trên bên trái.

![Stage & commit changes](../images/edit-vscode.dev Up với Tiện ích Mở rộng

Tiện ích mở rộng cho phép bạn thêm ngôn ngữ, giao diện, trình gỡ lỗi, và công cụ năng suất vào VSCode.dev—giúp việc lập trình trở nên dễ dàng và thú vị hơn.

### Duyệt và Quản lý Tiện ích Mở rộng

- Nhấp vào biểu tượng **Extensions** trên thanh hoạt động.
- Tìm kiếm tiện ích mở rộng trong hộp _'Search Extensions in Marketplace'_.

  ![Extension details](../images/extension-details:
  - **Installed**: Tất cả các tiện ích mở rộng bạn đã thêm
  - **Popular**: Các tiện ích được yêu thích trong ngành
  - **Recommended**: Được đề xuất phù hợp với quy trình làm việc của bạn

  ![View extensions](

  

***

### 1. **Cài đặt Tiện ích Mở rộng**

- Nhập tên tiện ích mở rộng vào ô tìm kiếm, nhấp vào nó, và xem chi tiết trong trình soạn thảo.
- Nhấn nút **Install màu xanh** ở thanh bên _hoặc_ trong khu vực mã chính.

  ![Install extensions](../images/install-extension 2. **Tùy chỉnh Tiện ích Mở rộng**

- Tìm tiện ích mở rộng đã cài đặt của bạn.
- Nhấp vào biểu tượng **Gear** → chọn _Extension Settings_ để điều chỉnh hành vi theo ý thích.

  ![Modify extension settings](../images/extension-settings 3. **Quản lý Tiện ích Mở rộng**
Bạn có thể:

- **Disable:** Tạm thời tắt tiện ích mở rộng nhưng vẫn giữ nó được cài đặt
- **Uninstall:** Gỡ bỏ hoàn toàn nếu không còn cần thiết

  Tìm tiện ích mở rộng, nhấn biểu tượng Gear, và chọn ‘Disable’ hoặc ‘Uninstall,’ hoặc sử dụng các nút màu xanh trong khu vực mã.

***

## Bài tập

Kiểm tra kỹ năng của bạn: [Tạo một trang web sơ yếu lý lịch bằng vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Khám phá thêm và Tự học

- Tìm hiểu sâu hơn với [Tài liệu chính thức về VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Khám phá các tính năng không gian làm việc nâng cao, phím tắt, và cài đặt.

***

**Giờ đây bạn đã sẵn sàng lập trình, tạo ra, và cộng tác—từ bất kỳ đâu, trên bất kỳ thiết bị nào, với VSCode.dev!**

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.