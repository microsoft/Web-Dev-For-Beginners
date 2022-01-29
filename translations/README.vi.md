[![GitHub license](https://img.shields.io/github/license/microsoft/Web-Dev-For-Beginners.svg)](https://github.com/microsoft/Web-Dev-For-Beginners/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/microsoft/Web-Dev-For-Beginners.svg)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/microsoft/Web-Dev-For-Beginners.svg)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/microsoft/Web-Dev-For-Beginners.svg)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub watchers](https://img.shields.io/github/watchers/microsoft/Web-Dev-For-Beginners.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/watchers/)
[![GitHub forks](https://img.shields.io/github/forks/microsoft/Web-Dev-For-Beginners.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/network/)
[![GitHub stars](https://img.shields.io/github/stars/microsoft/Web-Dev-For-Beginners.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/microsoft/Web-Dev-For-Beginners/stargazers/)

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/microsoft/Web-Dev-For-Beginners)

# Nhập môn lập trình web - Một chương trình giảng dạy

Azure Cloud Advocates tại Microsoft vui mừng cung cấp chương trình giảng dạy kéo dài 12 tuần, 24 bài học về JavaScript, CSS và HTML cơ bản. Mỗi bài học bao gồm các câu đố trước và sau bài học, hướng dẫn bằng văn bản để hoàn thành bài học, lời giải, bài tập và hơn thế nữa. Phương pháp sư phạm dựa trên dự án của chúng tôi cho phép bạn vừa học vừa xây dựng, một cách đã được chứng minh để các kỹ năng mới 'bám trụ'.

**Xin chân thành gửi lời cảm ơn đến các tác giả Jen Looper, Chris Noring, Christopher Harrison, Jasmine Greenaway, Yohan Lasorsa, Floor Drees, và nghệ sĩ sketchnote Tomomi Imura!**

# Bắt đầu

> **Giảng viên**, chúng tôi có [một số gợi ý trong](for-teachers.vi.md) để sử dụng chương trình này. Chúng tôi rất thích các phản hồi của các bạn [trong diễn đàn thảo luận của chúng tôi](https://github.com/microsoft/Web-Dev-For-Beginners/discussions/categories/teacher-corner)!

> **Sinh viên**, để tự sử dụng giáo trình này, hãy tách toàn bộ repo và tự hoàn thành các bài tập, bắt đầu với một bài kiểm tra trước bài giảng, sau đó đọc bài giảng và hoàn thành phần còn lại của các hoạt động. Cố gắng tạo các dự án bằng cách hiểu các bài học hơn là sao chép mã giải pháp; tuy nhiên mã đó có sẵn trong các thư mục /giải pháp trong mỗi bài học theo hướng dự án. Một ý tưởng khác là thành lập một nhóm học tập với bạn bè và cùng nhau xem qua nội dung. Để nghiên cứu thêm, chúng tôi khuyên bạn nên đọc [Microsoft Learn](https://docs.microsoft.com/users/jenlooper-2911/collections/jg2gax8pzd6o81?WT.mc_id=academic-13441-cxa) và xem các video được đề cập bên dưới.

[![Promo video](/images/web.gif)](https://youtube.com/watch?v=R1wrdtmBSII "Promo video")

Gif by [Mohit Jaisal](https://linkedin.com/in/mohitjaisal)

> 🎥 Nhấp vào hình ảnh ở trên để xem video về dự án và những người đã tạo ra nó!

## Sư phạm

Chúng tôi đã chọn hai nguyên lý sư phạm trong khi xây dựng chương trình giảng dạy này: đảm bảo rằng nó dựa trên dự án và nó bao gồm các câu đố thường xuyên. Vào cuối loạt bài này, học sinh sẽ xây dựng một trò chơi đánh máy, một hồ cạn ảo, một tiện ích mở rộng trình duyệt 'xanh', một trò chơi kiểu 'kẻ xâm lược không gian' và một ứng dụng ngân hàng kiểu doanh nghiệp, đồng thời sẽ học được những kiến ​​thức cơ bản về JavaScript , HTML và CSS cùng với chuỗi công cụ hiện đại của nhà phát triển web ngày nay.

> 🎓 Bạn có thể học một số bài học đầu tiên trong chương trình học này như một [Lộ trình](https://docs.microsoft.com/learn/paths/web-development-101?WT.mc_id=academic-13441-cxa) của Microsoft Learn!

Bằng cách đảm bảo rằng nội dung phù hợp với các dự án, quá trình này sẽ trở nên hấp dẫn hơn đối với sinh viên và việc duy trì các khái niệm sẽ được tăng cường. Chúng tôi cũng đã viết một số bài học bắt đầu về kiến ​​thức cơ bản về JavaScript để giới thiệu các khái niệm, kết hợp với video từ "[Beginners Series to: JavaScript](https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript?WT.mc_id=academic-13441-cxa)" bộ sưu tập các video hướng dẫn, một số mà các tác giả của họ đã đóng góp cho chương trình học này.

Ngoài ra, một bài kiểm tra đặt cược thấp trước một lớp học đặt ra ý định của học sinh đối với việc học một chủ đề, trong khi bài kiểm tra thứ hai sau tiết học đảm bảo khả năng được duy trì hơn nữa. Chương trình học này được thiết kế để linh hoạt và thú vị và có thể được học toàn bộ hoặc một phần. Các dự án bắt đầu nhỏ và ngày càng trở nên phức tạp vào cuối chu kỳ 12 tuần.

Mặc dù chúng tôi đã cố ý tránh giới thiệu các khung JavaScript để tập trung vào các kỹ năng cơ bản cần thiết với tư cách là một nhà phát triển web trước khi áp dụng khung, nhưng bước tiếp theo tốt để hoàn thành chương trình học này là tìm hiểu về Node.js thông qua một bộ sưu tập video khác: "[Beginner Series to: Node.js](https://channel9.msdn.com/Series/Beginners-Series-to-Nodejs?WT.mc_id=academic-13441-cxa)".

> Tìm chúng tôi [Code of Conduct](CODE_OF_CONDUCT.md), [Contributing](CONTRIBUTING.md), và nguyên tắc [Translation](TRANSLATIONS.md). Chúng tôi hoan nghênh phản hồi mang tính xây dựng của bạn!

## Mỗi bài học bao gồm

- Phác thảo
- Video bổ sung
- Câu hỏi khởi động
- Bài viết
- Cho các bài học dựa trên dự án, hướng dẫn từng bước về cách xây dựng dự án
- Kiểm tra kiến ​​thức
- Một thử thách
- Đọc bổ sung
- Phân công
- Bài kiểm tra sau bài học

> **Một lưu ý về các câu đố**: Tất cả các câu đố đều có [trong ứng dụng này](https://happy-mud-02d95f10f.azurestaticapps.net/), cho tổng số 48 câu đố với ba câu hỏi mỗi câu. Chúng được liên kết từ trong các bài học nhưng ứng dụng câu đố có thể chạy cục bộ; làm theo hướng dẫn trong thư mục `quiz-app`. Chúng đang dần được bản địa hóa.

## Bài học

|    |                        Tên dự án                         |                           Các khái niệm Dạy                            | Học tập Mục tiêu                                                                                                                                    |                                                    Link Bài                                                    |        Tác giả         |
|:--:|:--------------------------------------------------------:|:----------------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------:|:----------------------:|
| 01 |                         Bắt đầu                          |                   Giới thiệu về Lập trình và Công cụ                   | Tìm hiểu nền tảng cơ bản đằng sau hầu hết các ngôn ngữ lập trình và về phần mềm giúp các nhà phát triển chuyên nghiệp thực hiện công việc của họ    | [Giới thiệu về Lập trình và Công cụ](/1-getting-started-lessons/1-intro-to-programming-languages/README.vi.md) |        Jasmine         |
| 02 |                         Bắt đầu                          |         Kiến thức cơ bản về GitHub, bao gồm làm việc với nhóm          | Cách sử dụng GitHub trong dự án của bạn, cách cộng tác với những người khác trên cơ sở mã                                                           |                [Giới thiệu về Github](/1-getting-started-lessons/2-github-basics/README.vi.md)                 |         Floor          |
| 03 |                         Bắt đầu                          |                           Khả năng truy cập                            | Tìm hiểu kiến ​​thức cơ bản về khả năng truy cập web                                                                                                |     [Các nguyên tắc cơ bản về khả năng tiếp cận](/1-getting-started-lessons/3-accessibility/README.vi.md)      |      Christopher       |
| 04 |                        JS Cơ bản                         |                        Kiểu dữ liệu JavaScript                         | The basics of JavaScript data types                                                                                                                 |                             [Kiểu dữ liệu](/2-js-basics/1-data-types/README.vi.md)                             |        Jasmine         |
| 05 |                        JS Cơ bản                         |                           Hàm và phương thức                           | Tìm hiểu về các hàm và phương thức để quản lý luồng logic của ứng dụng                                                                              |                      [Hàm và phương thức](/2-js-basics/2-functions-methods/README.vi.md)                       | Jasmine và Christopher |
| 06 |                        JS Cơ bản                         |                        Making Decisions with JS                        | Tìm hiểu cách tạo điều kiện trong mã của bạn bằng cách sử dụng decision-making methods                                                              |                        [Making Decisions](/2-js-basics/3-making-decisions/README.vi.md)                        |        Jasmine         |
| 07 |                        JS Cơ bản                         |                              Mảng và Lặp                               | Làm việc với dữ liệu bằng cách sử dụng mảng và vòng lặp trong JavaScript                                                                            |                            [Mảng và lặp](/2-js-basics/4-arrays-loops/README.vi.md)                             |        Jasmine         |
| 08 |     [Terrarium](/3-terrarium/solution/README.vi.md)      |                           HTML trong thực tế                           | Xây dựng HTML để tạo Terrarium trực tuyến, tập trung vào việc xây dựng bố cục                                                                       |                        [Giới thiệu về HTML](/3-terrarium/1-intro-to-html/README.vi.md)                         |          Jen           |
| 09 |     [Terrarium](/3-terrarium/solution/README.vi.md)      |                           CSS trong thực tế                            | Xây dựng CSS để tạo kiểu cho terrarium trực tuyến, tập trung vào những điều cơ bản của CSS bao gồm cả việc làm cho trang đáp ứng                    |                         [Giới thiệu về CSS](/3-terrarium/2-intro-to-css/README.vi.md)                          |          Jen           |
| 10 |            [Terrarium](/3-terrarium/solution)            |                 JavaScript Closures, DOM manipulation                  | Xây dựng JavaScript để làm cho terrarium hoạt động như một giao diện kéo /thả, tập trung vào việc đóng và thao tác DOM                              |         [JavaScript Closures, DOM manipulation](/3-terrarium/3-intro-to-DOM-and-closures/README.vi.md)         |          Jen           |
| 11 |          [Typing Game](/4-typing-game/solution)          |                        Xây dựng một Typing Game                        | Tìm hiểu cách sử dụng các sự kiện bàn phím để thúc đẩy logic của ứng dụng JavaScript của bạn                                                        |                      [Event-Driven Programming](/4-typing-game/typing-game/README.vi.md)                       |      Christopher       |
| 12 | [Green Browser Extension](/5-browser-extension/solution) |                        Làm việc với trình duyệt                        | Tìm hiểu cách trình duyệt hoạt động, lịch sử của chúng và cách tạo ra các yếu tố đầu tiên của tiện ích mở rộng trình duyệt                          |                      [Về trình duyệt](/5-browser-extension/1-about-browsers/README.vi.md)                      |          Jen           |
| 13 | [Green Browser Extension](/5-browser-extension/solution) | Xây dựng biểu mẫu, gọi một API và lưu trữ các biến trong bộ nhớ cục bộ | Xây dựng các phần tử JavaScript của tiện ích mở rộng trình duyệt của bạn để gọi một API bằng cách sử dụng các biến được lưu trữ trong bộ nhớ cục bộ |         [APIs, Forms và Local Storage](/5-browser-extension/2-forms-browsers-local-storage/README.md)          |          Jen           |
| 14 | [Green Browser Extension](/5-browser-extension/solution) |           Các quy trình nền trong trình duyệt, hiệu suất web           | Sử dụng các tác vụ nền của trình duyệt để quản lý biểu tượng của tiện ích mở rộng; tìm hiểu về hiệu suất web và một số cách tối ưu hóa để thực hiện |        [Tác vụ nền và hiệu suất](/5-browser-extension/3-background-tasks-and-performance/README.vi.md)         |          Jen           |
| 15 |           [Space Game](/6-space-game/solution)           |            Phát triển trò chơi nâng cao hơn với JavaScript             | Tìm hiểu về Kế thừa bằng cách sử dụng cả Lớp và Thành phần cũng như mô hình Quán Pub/Sub, để chuẩn bị xây dựng trò chơi                             |            [Giới thiệu về Phát triển trò chơi nâng cao](/6-space-game/1-introduction/README.vi.md)             |         Chris          |
| 16 |           [Space Game](/6-space-game/solution)           |                             Vẽ lên Canvas                              | Tìm hiểu về API Canvas, được sử dụng để vẽ các phần tử vào màn hình                                                                                 |                        [Vẽ lên Canvas](/6-space-game/2-drawing-to-canvas/README.vi.md)                         |         Chris          |
| 17 |           [Space Game](/6-space-game/solution)           |              Di chuyển các đối tượng xung quanh màn hình               | Khám phá cách các phần tử có thể có được chuyển động bằng cách sử dụng tọa độ Cartesian và CanvasAPI                                                |           [Di chuyển các đối tượng xung quanh](/6-space-game/3-moving-elements-around/README.vi.md)            |         Chris          |
| 18 |           [Space Game](/6-space-game/solution)           |                          Collision detection                           | Làm cho các phần tử va chạm và phản ứng với nhau bằng cách nhấn phím và cung cấp chức năng hồi chiêu để đảm bảo hiệu suất của trò chơi              |                    [Collision Detection](/6-space-game/4-collision-detection/README.vi.md)                     |         Chris          |
| 19 |           [Space Game](/6-space-game/solution)           |                              Ghi nhớ điểm                              | Thực hiện các phép tính toán học dựa trên trạng thái và hiệu suất của trò chơi                                                                      |                           [Ghi nhớ điểm](/6-space-game/5-keeping-score/README.vi.md)                           |         Chris          |
| 20 |           [Space Game](/6-space-game/solution)           |                   Kết thúc và khởi động lại trò chơi                   | Tìm hiểu về cách kết thúc và khởi động lại trò chơi, bao gồm cả việc dọn dẹp nội dung và đặt lại các giá trị biến                                   |                        [Điều kiện kết thúc](/6-space-game/6-end-condition/README.vi.md)                        |         Chris          |
| 21 |      [Ứng dụng ngân hàng](/7-bank-project/solution)      |            HTML Templates và Routes trong một ứng dụng web             | Tìm hiểu cách tạo phần khung của kiến ​​trúc trang web nhiều trang bằng cách sử dụng các mẫu định tuyến và HTML                                     |                   [HTML Templates và Routes](/7-bank-project/1-template-route/README.vi.md)                    |         Yohan          |
| 22 |      [Ứng dụng ngân hàng](/7-bank-project/solution)      |                 Tạo một biểu mẫu đăng nhập và đăng ký                  | Tìm hiểu về cách xây dựng biểu mẫu và cung cấp quy trình xác thực                                                                                   |                                [Biểu mẫu](/7-bank-project/2-forms/README.vi.md)                                |         Yohan          |
| 23 |      [Ứng dụng ngân hàng](/7-bank-project/solution)      |                 Phương thức tìm nạp và sử dụng dữ liệu                 | Cách dữ liệu chảy vào và ra khỏi ứng dụng của bạn, cách tìm nạp, lưu trữ và xử lý chúng                                                             |                                 [Dữ liệu](/7-bank-project/3-data/README.vi.md)                                 |         Yohan          |
| 24 |      [Ứng dụng ngân hàng](/7-bank-project/solution)      |                     Khái niệm về State Management                      | Tìm hiểu cách ứng dụng của bạn duy trì trạng thái và cách quản lý nó theo chương trình                                                              |                      [State Management](/7-bank-project/4-state-management/README.vi.md)                       |         Yohan          |

## Truy cập ngoại tuyến

Bạn có thể chạy tài liệu này ngoại tuyến bằng cách sử dụng [Docsify](https://docsify.js.org/#/). Fork repo này, [cài đặt Docsify](https://docsify.js.org/#/quickstart) trên máy của bạn và sau đó trong thư mục gốc của repo này, hãy nhập `docsify serve`. Trang web sẽ chạy ở port 3000 trên localhost: `localhost:3000`.

## PDF

Có thể tìm thấy bản PDF của tất cả các bài học [tại đây](https://microsoft.github.io/Web-Dev-For-Beginners/pdf/readme.pdf)

## Các chương trình giảng dạy khác

Nhóm của chúng tôi tạo ra các chương trình giảng dạy khác! Check out:

- [Nhập môn trí tuệ nhân tạo](https://aka.ms/ml-beginners)
- [Nhập môn IoT](https://aka.ms/iot-beginners)
- [Nhập môn khoa học dữ liệu](https://aka.ms/datascience-beginners)
