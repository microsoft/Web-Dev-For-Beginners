## Cơ bản về GIT dành cho người mới bắt đầu phát triển web 👶

## Git là gì?
1. Git là một hệ thống quản lý phiên bản phân tán.
2. Toàn bộ mã nguồn và lịch sử đều có trên máy tính của mỗi nhà phát triển, 
   giúp dễ dàng tạo nhánh và hợp nhất.
3. Git được sử dụng như một hệ thống quản lý phiên bản (VCS) để theo dõi các thay đổi trong tệp máy tính.

* Quản lý phiên bản phân tán
* Phối hợp công việc giữa nhiều nhà phát triển  
* Ai đã thực hiện thay đổi gì và khi nào
* Có thể quay lại bất kỳ thời điểm nào
* Kho lưu trữ cục bộ và từ xa

## KHÁI NIỆM VỀ GIT
* Theo dõi lịch sử mã nguồn
* Lưu "ảnh chụp" của các tệp của bạn
* Bạn quyết định khi nào lưu ảnh chụp bằng cách thực hiện "commit"
* Bạn có thể truy cập bất kỳ ảnh chụp nào vào bất kỳ lúc nào
* Bạn có thể chọn các tệp trước khi commit

### Sự khác biệt giữa Git và GitHub

| Git | GitHub |
| ------- | ----------- |
| Git là phần mềm | GitHub là dịch vụ đám mây |
| Git được cài đặt cục bộ trên hệ thống | GitHub được lưu trữ trên web |
| Đây là công cụ dòng lệnh | Đây là giao diện người dùng đồ họa |
| Git được duy trì bởi Linux | GitHub được duy trì bởi Microsoft |
| Tập trung vào quản lý phiên bản và chia sẻ mã nguồn | Tập trung vào lưu trữ mã nguồn tập trung |
| Git có giấy phép mã nguồn mở | GitHub có gói miễn phí và gói trả phí |
| Git được phát hành năm 2005 | GitHub được phát hành năm 2008 |

## Cài đặt GIT
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Tải xuống](http://git-scm.com/download/mac) cho Mac
* [Tải xuống](http://git-scm.com/download/win) cho Windows

### Các bước cài đặt:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Sau đó tiếp tục Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Sau khi cài đặt, chúng ta cần cấu hình git bằng git bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Các lệnh Git
___

### Lấy và tạo dự án

| Lệnh | Mô tả |
| ------- | ----------- |
| `git init` | Khởi tạo kho Git cục bộ |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Tạo bản sao cục bộ của kho lưu trữ từ xa |

### Chụp ảnh cơ bản

| Lệnh | Mô tả |
| ------- | ----------- |
| `git status` | Kiểm tra trạng thái |
| `git add [file-name.txt]` | Thêm tệp vào khu vực staging |
| `git add -A` | Thêm tất cả các tệp mới và đã thay đổi vào khu vực staging |
| `git commit -m "[commit message]"` | Commit thay đổi |
| `git rm -r [file-name.txt]` | Xóa tệp (hoặc thư mục) |
| `git push` | Đẩy lên kho lưu trữ từ xa |
| `git pull` | Lấy các thay đổi mới nhất từ kho lưu trữ từ xa |

### Tạo nhánh và hợp nhất

| Lệnh | Mô tả |
| ------- | ----------- |
| `git branch` | Liệt kê các nhánh (dấu * chỉ nhánh hiện tại) |
| `git branch -a` | Liệt kê tất cả các nhánh (cục bộ và từ xa) |
| `git branch [branch name]` | Tạo nhánh mới |
| `git branch -D [branch name]` | Xóa nhánh |
| `git push origin --delete [branch name]` | Xóa nhánh từ xa |
| `git checkout -b [branch name]` | Tạo nhánh mới và chuyển sang nhánh đó |
| `git checkout -b [branch name] origin/[branch name]` | Sao chép nhánh từ xa và chuyển sang nhánh đó |
| `git branch -m [old branch name] [new branch name]` | Đổi tên nhánh cục bộ |
| `git checkout [branch name]` | Chuyển sang nhánh khác |
| `git checkout -` | Chuyển sang nhánh vừa kiểm tra trước đó |
| `git checkout -- [file-name.txt]` | Hủy thay đổi trong tệp |
| `git merge [branch name]` | Hợp nhất nhánh vào nhánh đang hoạt động |
| `git merge [source branch] [target branch]` | Hợp nhất nhánh vào nhánh mục tiêu |
| `git stash` | Lưu trữ thay đổi trong thư mục làm việc chưa sạch |
| `git stash clear` | Xóa tất cả các mục đã lưu trữ |

### Chia sẻ và cập nhật dự án

| Lệnh | Mô tả |
| ------- | ----------- |
| `git push origin [branch name]` | Đẩy nhánh lên kho lưu trữ từ xa |
| `git push -u origin [branch name]` | Đẩy thay đổi lên kho lưu trữ từ xa (và ghi nhớ nhánh) |
| `git push` | Đẩy thay đổi lên kho lưu trữ từ xa (nhánh đã ghi nhớ) |
| `git push origin --delete [branch name]` | Xóa nhánh từ xa |
| `git pull` | Cập nhật kho lưu trữ cục bộ với commit mới nhất |
| `git pull origin [branch name]` | Lấy thay đổi từ kho lưu trữ từ xa |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Thêm kho lưu trữ từ xa |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Đặt nhánh gốc của kho lưu trữ thành SSH |

### Kiểm tra và so sánh

| Lệnh | Mô tả |
| ------- | ----------- |
| `git log` | Xem thay đổi |
| `git log --summary` | Xem thay đổi (chi tiết) |
| `git log --oneline` | Xem thay đổi (ngắn gọn) |
| `git diff [source branch] [target branch]` | Xem trước thay đổi trước khi hợp nhất |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.