<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T14:05:39+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "vi"
}
-->
# Giới thiệu về GitHub

Bài học này giới thiệu những kiến thức cơ bản về GitHub, một nền tảng để lưu trữ và quản lý các thay đổi trong mã nguồn của bạn.

![Giới thiệu về GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.vi.png)
> Sketchnote bởi [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz trước bài học
[Quiz trước bài học](https://ff-quizzes.netlify.app)

## Giới thiệu

Trong bài học này, chúng ta sẽ tìm hiểu:

- cách theo dõi công việc bạn thực hiện trên máy tính của mình
- cách làm việc trên các dự án cùng với người khác
- cách đóng góp vào phần mềm mã nguồn mở

### Yêu cầu trước khi bắt đầu

Trước khi bắt đầu, bạn cần kiểm tra xem Git đã được cài đặt chưa. Trong terminal, gõ: 
`git --version`

Nếu Git chưa được cài đặt, [tải Git](https://git-scm.com/downloads). Sau đó, thiết lập hồ sơ Git cục bộ của bạn trong terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Để kiểm tra xem Git đã được cấu hình hay chưa, bạn có thể gõ:
`git config --list`

Bạn cũng sẽ cần một tài khoản GitHub, một trình soạn thảo mã (như Visual Studio Code), và mở terminal (hoặc: command prompt).

Truy cập [github.com](https://github.com/) và tạo tài khoản nếu bạn chưa có, hoặc đăng nhập và điền thông tin hồ sơ của mình.

✅ GitHub không phải là kho mã duy nhất trên thế giới; còn có những nền tảng khác, nhưng GitHub là nền tảng được biết đến nhiều nhất.

### Chuẩn bị

Bạn sẽ cần một thư mục chứa dự án mã nguồn trên máy tính của mình (laptop hoặc PC), và một kho lưu trữ công khai trên GitHub, để làm ví dụ về cách đóng góp vào các dự án của người khác.

---

## Quản lý mã nguồn

Giả sử bạn có một thư mục cục bộ chứa một dự án mã nguồn và bạn muốn bắt đầu theo dõi tiến trình của mình bằng git - hệ thống kiểm soát phiên bản. Một số người ví việc sử dụng git như viết một lá thư tình gửi cho chính mình trong tương lai. Khi đọc lại các thông điệp commit sau vài ngày, vài tuần hoặc vài tháng, bạn sẽ có thể nhớ lại lý do tại sao bạn đưa ra quyết định, hoặc "quay lại" một thay đổi - điều này xảy ra khi bạn viết các thông điệp commit tốt.

### Nhiệm vụ: Tạo kho lưu trữ và commit mã nguồn  

> Xem video
> 
> [![Video cơ bản về Git và GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Tạo kho lưu trữ trên GitHub**. Trên GitHub.com, trong tab kho lưu trữ, hoặc từ thanh điều hướng ở góc trên bên phải, tìm nút **new repo**.

   1. Đặt tên cho kho lưu trữ của bạn (thư mục)
   1. Chọn **create repository**.

1. **Đi đến thư mục làm việc của bạn**. Trong terminal, chuyển đến thư mục (còn gọi là thư mục làm việc) mà bạn muốn bắt đầu theo dõi. Gõ:

   ```bash
   cd [name of your folder]
   ```

1. **Khởi tạo kho lưu trữ git**. Trong dự án của bạn, gõ:

   ```bash
   git init
   ```

1. **Kiểm tra trạng thái**. Để kiểm tra trạng thái của kho lưu trữ, gõ:

   ```bash
   git status
   ```

   Kết quả đầu ra có thể trông giống như sau:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Thông thường, lệnh `git status` cho bạn biết những thông tin như tệp nào đã sẵn sàng để _lưu_ vào kho lưu trữ hoặc có thay đổi mà bạn có thể muốn lưu lại.

1. **Thêm tất cả các tệp để theo dõi**
   Điều này còn được gọi là giai đoạn staging tệp/ thêm tệp vào khu vực staging.

   ```bash
   git add .
   ```

   Lệnh `git add` cộng với đối số `.` chỉ định rằng tất cả các tệp và thay đổi của bạn sẽ được theo dõi.

1. **Thêm các tệp được chọn để theo dõi**

   ```bash
   git add [file or folder name]
   ```

   Lệnh này giúp chúng ta chỉ thêm các tệp được chọn vào khu vực staging khi không muốn commit tất cả các tệp cùng một lúc.

1. **Hủy giai đoạn tất cả các tệp**

   ```bash
   git reset
   ```

   Lệnh này giúp chúng ta hủy giai đoạn tất cả các tệp cùng một lúc.

1. **Hủy giai đoạn một tệp cụ thể**

   ```bash
   git reset [file or folder name]
   ```

   Lệnh này giúp chúng ta hủy giai đoạn chỉ một tệp cụ thể mà chúng ta không muốn đưa vào commit tiếp theo.

1. **Lưu công việc của bạn**. Tại thời điểm này, bạn đã thêm các tệp vào cái gọi là _khu vực staging_. Đây là nơi Git theo dõi các tệp của bạn. Để làm cho thay đổi trở thành vĩnh viễn, bạn cần _commit_ các tệp. Để làm điều này, bạn tạo một _commit_ bằng lệnh `git commit`. Một _commit_ đại diện cho một điểm lưu trong lịch sử của kho lưu trữ. Gõ lệnh sau để tạo một _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Lệnh này commit tất cả các tệp của bạn, thêm thông điệp "first commit". Đối với các thông điệp commit trong tương lai, bạn sẽ muốn mô tả chi tiết hơn để truyền đạt loại thay đổi bạn đã thực hiện.

1. **Kết nối kho lưu trữ Git cục bộ của bạn với GitHub**. Một kho lưu trữ Git trên máy của bạn là tốt, nhưng tại một thời điểm nào đó, bạn sẽ muốn có bản sao lưu các tệp của mình ở đâu đó và cũng mời người khác làm việc với bạn trên kho lưu trữ của mình. Một nơi tuyệt vời để làm điều này là GitHub. Nhớ rằng chúng ta đã tạo một kho lưu trữ trên GitHub, vì vậy điều duy nhất cần làm là kết nối kho lưu trữ Git cục bộ của bạn với GitHub. Lệnh `git remote add` sẽ làm điều đó. Gõ lệnh sau:

   > Lưu ý, trước khi gõ lệnh, hãy truy cập trang kho lưu trữ GitHub của bạn để tìm URL kho lưu trữ. Bạn sẽ sử dụng nó trong lệnh dưới đây. Thay thế ```https://github.com/username/repository_name.git``` bằng URL GitHub của bạn.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Lệnh này tạo một _remote_, hoặc kết nối, có tên "origin" trỏ đến kho lưu trữ GitHub mà bạn đã tạo trước đó.

1. **Gửi tệp cục bộ lên GitHub**. Cho đến nay, bạn đã tạo một _kết nối_ giữa kho lưu trữ cục bộ và kho lưu trữ GitHub. Hãy gửi các tệp này lên GitHub bằng lệnh `git push`, như sau:

   > Lưu ý, tên nhánh của bạn có thể khác mặc định so với ```main```.

   ```bash
   git push -u origin main
   ```

   Lệnh này gửi các commit của bạn trong nhánh "main" lên GitHub. Việc thiết lập nhánh `upstream` bao gồm `-u` trong lệnh tạo liên kết giữa nhánh cục bộ của bạn và nhánh từ xa, vì vậy bạn có thể chỉ cần sử dụng git push hoặc git pull mà không cần chỉ định tên nhánh trong tương lai. Git sẽ tự động sử dụng nhánh upstream và bạn sẽ không cần chỉ định tên nhánh rõ ràng trong các lệnh sau này.

2. **Thêm các thay đổi mới**. Nếu bạn muốn tiếp tục thực hiện các thay đổi và đẩy chúng lên GitHub, bạn chỉ cần sử dụng ba lệnh sau:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Mẹo, bạn cũng có thể muốn áp dụng tệp `.gitignore` để ngăn các tệp bạn không muốn theo dõi xuất hiện trên GitHub - như tệp ghi chú mà bạn lưu trong cùng thư mục nhưng không có chỗ trong kho lưu trữ công khai. Bạn có thể tìm các mẫu tệp `.gitignore` tại [.gitignore templates](https://github.com/github/gitignore).

#### Thông điệp commit

Một dòng tiêu đề commit Git tuyệt vời hoàn thành câu sau:
Nếu được áp dụng, commit này sẽ <dòng tiêu đề của bạn ở đây>

Đối với tiêu đề, sử dụng thì hiện tại, dạng mệnh lệnh: "change" thay vì "changed" hoặc "changes". 
Cũng như trong tiêu đề, trong phần thân (tùy chọn), cũng sử dụng thì hiện tại, dạng mệnh lệnh. Phần thân nên bao gồm lý do cho thay đổi và so sánh điều này với hành vi trước đó. Bạn đang giải thích `tại sao`, không phải `cách thực hiện`.

✅ Dành vài phút để lướt qua GitHub. Bạn có thể tìm thấy một thông điệp commit thực sự tuyệt vời không? Bạn có thể tìm thấy một thông điệp rất tối giản không? Theo bạn, thông tin nào là quan trọng và hữu ích nhất để truyền đạt trong một thông điệp commit?

### Nhiệm vụ: Hợp tác

Lý do chính để đưa mọi thứ lên GitHub là để làm cho việc hợp tác với các nhà phát triển khác trở nên khả thi.

## Làm việc trên các dự án cùng người khác

> Xem video
>
> [![Video cơ bản về Git và GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Trong kho lưu trữ của bạn, điều hướng đến `Insights > Community` để xem dự án của bạn so với các tiêu chuẩn cộng đồng được khuyến nghị như thế nào.

   Đây là một số điều có thể cải thiện kho lưu trữ GitHub của bạn:
   - **Mô tả**. Bạn đã thêm mô tả cho dự án của mình chưa?
   - **README**. Bạn đã thêm README chưa? GitHub cung cấp hướng dẫn viết [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Hướng dẫn đóng góp**. Dự án của bạn có [hướng dẫn đóng góp](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon) không?
   - **Quy tắc ứng xử**. Có [Quy tắc ứng xử](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/) không?
   - **Giấy phép**. Có lẽ quan trọng nhất, một [giấy phép](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Tất cả các tài nguyên này sẽ có lợi cho việc giới thiệu thành viên mới vào nhóm. Và đây thường là những điều mà các cộng tác viên mới xem xét trước khi nhìn vào mã nguồn của bạn, để tìm hiểu xem dự án của bạn có phải là nơi phù hợp để họ dành thời gian hay không.

✅ Các tệp README, mặc dù mất thời gian để chuẩn bị, thường bị bỏ qua bởi các nhà bảo trì bận rộn. Bạn có thể tìm thấy một ví dụ về một tệp README đặc biệt mô tả chi tiết không? Lưu ý: có một số [công cụ giúp tạo README tốt](https://www.makeareadme.com/) mà bạn có thể muốn thử.

### Nhiệm vụ: Hợp nhất mã nguồn

Tài liệu đóng góp giúp mọi người đóng góp vào dự án. Nó giải thích các loại đóng góp mà bạn đang tìm kiếm và cách quy trình hoạt động. Các cộng tác viên sẽ cần thực hiện một loạt các bước để có thể đóng góp vào kho lưu trữ của bạn trên GitHub:

1. **Fork kho lưu trữ của bạn**. Bạn có thể muốn mọi người _fork_ dự án của mình. Fork nghĩa là tạo một bản sao của kho lưu trữ trên hồ sơ GitHub của họ.
1. **Clone**. Từ đó, họ sẽ clone dự án về máy tính cục bộ của mình.
1. **Tạo một nhánh**. Bạn sẽ muốn yêu cầu họ tạo một _nhánh_ cho công việc của mình.
1. **Tập trung thay đổi vào một khu vực**. Yêu cầu các cộng tác viên tập trung đóng góp của họ vào một việc tại một thời điểm - theo cách đó, khả năng bạn có thể _hợp nhất_ công việc của họ sẽ cao hơn. Hãy tưởng tượng họ viết một bản sửa lỗi, thêm một tính năng mới và cập nhật một số bài kiểm tra - điều gì sẽ xảy ra nếu bạn muốn, hoặc chỉ có thể triển khai 2 trong số 3, hoặc 1 trong số 3 thay đổi?

✅ Hãy tưởng tượng một tình huống mà các nhánh đặc biệt quan trọng đối với việc viết và triển khai mã nguồn tốt. Bạn có thể nghĩ đến những trường hợp sử dụng nào?

> Lưu ý, hãy là sự thay đổi mà bạn muốn thấy trên thế giới, và tạo các nhánh cho công việc của chính bạn. Bất kỳ commit nào bạn thực hiện sẽ được thực hiện trên nhánh mà bạn hiện đang "checked out". Sử dụng `git status` để xem đó là nhánh nào.

Hãy đi qua quy trình làm việc của cộng tác viên. Giả sử cộng tác viên đã _fork_ và _clone_ kho lưu trữ, vì vậy họ có một kho lưu trữ Git sẵn sàng để làm việc trên máy cục bộ của mình:

1. **Tạo một nhánh**. Sử dụng lệnh `git branch` để tạo một nhánh chứa các thay đổi mà họ dự định đóng góp:

   ```bash
   git branch [branch-name]
   ```

1. **Chuyển sang nhánh làm việc**. Chuyển sang nhánh được chỉ định và cập nhật thư mục làm việc bằng `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Thực hiện công việc**. Tại thời điểm này, bạn muốn thêm các thay đổi của mình. Đừng quên thông báo cho Git về điều đó bằng các lệnh sau:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Đảm bảo bạn đặt tên commit tốt, vì lợi ích của bạn cũng như của người bảo trì kho lưu trữ mà bạn đang giúp đỡ.

1. **Kết hợp công việc của bạn với nhánh `main`**. Tại một thời điểm nào đó, bạn đã hoàn thành công việc và muốn kết hợp công việc của mình với nhánh `main`. Nhánh `main` có thể đã thay đổi trong thời gian đó, vì vậy hãy đảm bảo bạn cập nhật nó lên phiên bản mới nhất bằng các lệnh sau:

   ```bash
   git switch main
   git pull
   ```

   Tại thời điểm này, bạn muốn đảm bảo rằng bất kỳ _xung đột_ nào, tình huống mà Git không thể dễ dàng _kết hợp_ các thay đổi, xảy ra trong nhánh làm việc của bạn. Do đó, hãy chạy các lệnh sau:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Lệnh `git merge main` sẽ mang tất cả các thay đổi từ `main` vào nhánh của bạn. Hy vọng rằng bạn có thể tiếp tục. Nếu không, VS Code sẽ cho bạn biết nơi Git bị _nhầm lẫn_ và bạn chỉ cần thay đổi các tệp bị ảnh hưởng để nói nội dung nào là chính xác nhất.

   Để chuyển sang một nhánh khác, sử dụng lệnh hiện đại `git switch`:
   ```bash
   git switch [branch_name]


1. **Gửi công việc của bạn lên GitHub**. Gửi công việc của bạn lên GitHub nghĩa là hai việc. Đẩy nhánh của bạn lên kho lưu trữ và sau đó mở một PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Lệnh trên tạo nhánh trên kho lưu trữ đã fork của bạn.
1. **Mở PR**. Tiếp theo, bạn cần mở một PR. Bạn làm điều này bằng cách truy cập vào repo đã fork trên GitHub. Bạn sẽ thấy một thông báo trên GitHub hỏi liệu bạn có muốn tạo một PR mới hay không, bạn nhấp vào đó và sẽ được chuyển đến giao diện nơi bạn có thể thay đổi tiêu đề thông điệp commit, thêm mô tả phù hợp hơn. Bây giờ, người quản lý repo mà bạn đã fork sẽ thấy PR này và _hy vọng_ họ sẽ đánh giá cao và _merge_ PR của bạn. Bạn đã trở thành một người đóng góp, tuyệt vời :)

1. **Dọn dẹp**. Việc _dọn dẹp_ sau khi bạn merge thành công một PR được coi là một thói quen tốt. Bạn cần dọn dẹp cả nhánh cục bộ và nhánh bạn đã đẩy lên GitHub. Đầu tiên, hãy xóa nhánh cục bộ bằng lệnh sau:

   ```bash
   git branch -d [branch-name]
   ```

   Đảm bảo bạn truy cập trang GitHub của repo đã fork và xóa nhánh từ xa mà bạn vừa đẩy lên.

`Pull request` có vẻ là một thuật ngữ kỳ lạ vì thực tế bạn muốn đẩy thay đổi của mình vào dự án. Nhưng người quản lý (chủ sở hữu dự án) hoặc nhóm cốt lõi cần xem xét thay đổi của bạn trước khi merge nó vào nhánh "main" của dự án, vì vậy thực chất bạn đang yêu cầu một quyết định thay đổi từ người quản lý.

Pull request là nơi để so sánh và thảo luận về các khác biệt được giới thiệu trên một nhánh với các đánh giá, bình luận, kiểm tra tích hợp, và nhiều hơn nữa. Một pull request tốt tuân theo các quy tắc tương tự như thông điệp commit. Bạn có thể thêm tham chiếu đến một vấn đề trong trình theo dõi vấn đề, ví dụ khi công việc của bạn sửa một vấn đề. Điều này được thực hiện bằng cách sử dụng `#` theo sau là số của vấn đề. Ví dụ `#97`.

🤞Hy vọng rằng tất cả các kiểm tra đều vượt qua và chủ sở hữu dự án merge thay đổi của bạn vào dự án🤞

Cập nhật nhánh làm việc cục bộ hiện tại của bạn với tất cả các commit mới từ nhánh từ xa tương ứng trên GitHub:

`git pull`

## Cách đóng góp cho mã nguồn mở

Đầu tiên, hãy tìm một repository (hoặc **repo**) trên GitHub mà bạn quan tâm và muốn đóng góp một thay đổi. Bạn sẽ cần sao chép nội dung của nó về máy của mình.

✅ Một cách tốt để tìm các repo 'thân thiện với người mới bắt đầu' là [tìm kiếm theo tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Sao chép repo về máy](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.vi.png)

Có nhiều cách để sao chép mã. Một cách là "clone" nội dung của repository, sử dụng HTTPS, SSH, hoặc sử dụng GitHub CLI (Command Line Interface).

Mở terminal của bạn và clone repository như sau:
`git clone https://github.com/ProjectURL`

Để làm việc trên dự án, chuyển đến thư mục phù hợp:
`cd ProjectURL`

Bạn cũng có thể mở toàn bộ dự án bằng [Codespaces](https://github.com/features/codespaces), trình chỉnh sửa mã tích hợp / môi trường phát triển trên đám mây của GitHub, hoặc [GitHub Desktop](https://desktop.github.com/).

Cuối cùng, bạn có thể tải mã về dưới dạng một thư mục nén.

### Một vài điều thú vị hơn về GitHub

Bạn có thể gắn sao, theo dõi và/hoặc "fork" bất kỳ repository công khai nào trên GitHub. Bạn có thể tìm các repository đã gắn sao của mình trong menu thả xuống ở góc trên bên phải. Nó giống như đánh dấu trang, nhưng dành cho mã.

Các dự án có trình theo dõi vấn đề, thường trên GitHub trong tab "Issues" trừ khi được chỉ định khác, nơi mọi người thảo luận về các vấn đề liên quan đến dự án. Và tab Pull Requests là nơi mọi người thảo luận và đánh giá các thay đổi đang được thực hiện.

Các dự án cũng có thể có thảo luận trong các diễn đàn, danh sách gửi thư, hoặc các kênh trò chuyện như Slack, Discord hoặc IRC.

✅ Hãy khám phá repo GitHub mới của bạn và thử một vài điều, như chỉnh sửa cài đặt, thêm thông tin vào repo của bạn, và tạo một dự án (như bảng Kanban). Có rất nhiều điều bạn có thể làm!

---

## 🚀 Thử thách

Hợp tác với một người bạn để làm việc trên mã của nhau. Tạo một dự án cùng nhau, fork mã, tạo nhánh, và merge các thay đổi.

## Câu hỏi sau bài giảng
[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/en/)

## Ôn tập & Tự học

Đọc thêm về [cách đóng góp cho phần mềm mã nguồn mở](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Cheatsheet Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Luyện tập, luyện tập, luyện tập. GitHub có các lộ trình học tập tuyệt vời tại [skills.github.com](https://skills.github.com):

- [Tuần đầu tiên trên GitHub](https://skills.github.com/#first-week-on-github)

Bạn cũng sẽ tìm thấy các khóa học nâng cao hơn.

## Bài tập

Hoàn thành [khóa học Tuần đầu tiên trên GitHub](https://skills.github.com/#first-week-on-github)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp của con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.