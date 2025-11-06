<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2ed9145a16cf576faa2a973dff84d099",
  "translation_date": "2025-11-06T11:35:33+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "vi"
}
-->
# Xây dựng trò chơi không gian Phần 5: Điểm số và mạng sống

## Bài kiểm tra trước bài học

[Bài kiểm tra trước bài học](https://ff-quizzes.netlify.app/web/quiz/37)

Sẵn sàng làm cho trò chơi không gian của bạn trở nên giống một trò chơi thực sự chưa? Hãy thêm hệ thống điểm số và quản lý mạng sống - những cơ chế cốt lõi đã biến các trò chơi arcade đầu tiên như Space Invaders từ những màn trình diễn đơn giản thành những trò chơi gây nghiện. Đây là lúc trò chơi của bạn trở nên thực sự hấp dẫn.

## Vẽ văn bản trên màn hình - Giọng nói của trò chơi

Để hiển thị điểm số của bạn, chúng ta cần học cách hiển thị văn bản trên canvas. Phương thức `fillText()` là công cụ chính của bạn - đây là kỹ thuật được sử dụng trong các trò chơi arcade cổ điển để hiển thị điểm số và thông tin trạng thái.

Bạn có toàn quyền kiểm soát về cách hiển thị văn bản:

✅ Tìm hiểu sâu hơn về [cách thêm văn bản vào canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - bạn có thể sẽ ngạc nhiên về mức độ sáng tạo mà bạn có thể đạt được với phông chữ và kiểu dáng!

## Mạng sống - Không chỉ là một con số

Trong thiết kế trò chơi, "mạng sống" đại diện cho khả năng mắc lỗi của người chơi. Khái niệm này bắt nguồn từ máy pinball, nơi bạn có nhiều quả bóng để chơi. Trong các trò chơi video đầu tiên như Asteroids, mạng sống cho phép người chơi mạo hiểm và học hỏi từ sai lầm.

Việc hiển thị trực quan rất quan trọng - hiển thị biểu tượng tàu thay vì chỉ "Lives: 3" tạo ra sự nhận diện trực quan ngay lập tức, giống như cách các máy arcade đầu tiên sử dụng biểu tượng để giao tiếp vượt qua rào cản ngôn ngữ.

## Xây dựng hệ thống phần thưởng của trò chơi

Bây giờ chúng ta sẽ triển khai các hệ thống phản hồi cốt lõi để giữ người chơi tham gia:

- **Hệ thống điểm số**: Mỗi tàu địch bị tiêu diệt sẽ thưởng 100 điểm (số tròn dễ tính toán hơn cho người chơi). Điểm số sẽ hiển thị ở góc dưới bên trái.
- **Bộ đếm mạng sống**: Nhân vật chính của bạn bắt đầu với ba mạng sống - một tiêu chuẩn được thiết lập bởi các trò chơi arcade đầu tiên để cân bằng giữa thử thách và khả năng chơi. Mỗi lần va chạm với kẻ địch sẽ mất một mạng sống. Chúng ta sẽ hiển thị số mạng sống còn lại ở góc dưới bên phải bằng biểu tượng tàu ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.vi.png).

## Bắt đầu xây dựng!

Đầu tiên, thiết lập không gian làm việc của bạn. Điều hướng đến các tệp trong thư mục con `your-work`. Bạn sẽ thấy các tệp sau:

Để kiểm tra trò chơi của bạn, hãy khởi động máy chủ phát triển từ thư mục `your_work`:

Máy chủ này sẽ chạy tại `http://localhost:5000`. Mở địa chỉ này trong trình duyệt của bạn để xem trò chơi. Kiểm tra các điều khiển bằng phím mũi tên và thử bắn kẻ địch để xác minh mọi thứ hoạt động.

### Bắt đầu viết mã!

1. **Lấy các tài sản hình ảnh cần thiết**. Sao chép tài sản `life.png` từ thư mục `solution/assets/` vào thư mục `your-work`. Sau đó thêm lifeImg vào hàm window.onload của bạn:

1. Đừng quên thêm `lifeImg` vào danh sách tài sản của bạn.

2. **Thiết lập các biến trò chơi của bạn**. Thêm một số mã để theo dõi tổng điểm của bạn (bắt đầu từ 0) và số mạng sống còn lại (bắt đầu từ 3). Chúng ta sẽ hiển thị những thông tin này trên màn hình để người chơi luôn biết tình trạng của mình.

3. **Triển khai phát hiện va chạm**. Mở rộng hàm `updateGameObjects()` của bạn để phát hiện khi kẻ địch va chạm với nhân vật chính của bạn.

4. **Thêm theo dõi mạng sống và điểm số vào nhân vật chính**.  
   1. **Khởi tạo các bộ đếm**. Dưới `this.cooldown = 0` trong lớp `Hero`, thiết lập mạng sống và điểm số.

   1. **Hiển thị các giá trị này cho người chơi**. Tạo các hàm để vẽ các giá trị này trên màn hình.

   1. **Kết nối mọi thứ vào vòng lặp trò chơi của bạn**. Thêm các hàm này vào hàm window.onload ngay sau `updateGameObjects()`.

### 🔄 **Kiểm tra sư phạm**
**Hiểu biết về thiết kế trò chơi**: Trước khi triển khai hậu quả, hãy đảm bảo bạn hiểu:
- ✅ Cách phản hồi trực quan truyền đạt trạng thái trò chơi đến người chơi
- ✅ Tại sao việc đặt các yếu tố giao diện người dùng một cách nhất quán cải thiện khả năng sử dụng
- ✅ Tâm lý đằng sau giá trị điểm số và quản lý mạng sống
- ✅ Cách hiển thị văn bản trên canvas khác với văn bản HTML

**Kiểm tra nhanh bản thân**: Tại sao các trò chơi arcade thường sử dụng số tròn cho giá trị điểm số?  
*Trả lời: Số tròn dễ tính toán hơn cho người chơi và tạo ra phần thưởng tâm lý thỏa mãn*

**Nguyên tắc trải nghiệm người dùng**: Bạn đang áp dụng:
- **Thứ tự trực quan**: Thông tin quan trọng được đặt ở vị trí nổi bật
- **Phản hồi ngay lập tức**: Cập nhật theo thời gian thực cho hành động của người chơi
- **Tải nhận thức**: Trình bày thông tin đơn giản, rõ ràng
- **Thiết kế cảm xúc**: Biểu tượng và màu sắc tạo kết nối với người chơi

1. **Triển khai hậu quả và phần thưởng trong trò chơi**. Bây giờ chúng ta sẽ thêm các hệ thống phản hồi làm cho hành động của người chơi trở nên ý nghĩa:

   1. **Va chạm làm mất mạng sống**. Mỗi lần nhân vật chính của bạn va chạm với kẻ địch, bạn sẽ mất một mạng sống.  
      Thêm phương thức này vào lớp `Hero` của bạn.

   2. **Bắn kẻ địch kiếm điểm**. Mỗi lần bắn trúng thành công sẽ thưởng 100 điểm, cung cấp phản hồi tích cực ngay lập tức cho việc bắn chính xác.  
      Mở rộng lớp Hero của bạn với phương thức tăng điểm này:  
        Bây giờ kết nối các hàm này với các sự kiện va chạm.

✅ Tò mò về các trò chơi khác được xây dựng bằng JavaScript và Canvas? Hãy khám phá - bạn có thể sẽ ngạc nhiên về những gì có thể làm được!

Sau khi triển khai các tính năng này, hãy kiểm tra trò chơi của bạn để xem hệ thống phản hồi hoàn chỉnh hoạt động. Bạn sẽ thấy biểu tượng mạng sống ở góc dưới bên phải, điểm số của bạn ở góc dưới bên trái, và quan sát khi va chạm làm giảm mạng sống trong khi bắn trúng tăng điểm số.

Trò chơi của bạn bây giờ đã có các cơ chế thiết yếu làm cho các trò chơi arcade đầu tiên trở nên hấp dẫn - mục tiêu rõ ràng, phản hồi ngay lập tức, và hậu quả ý nghĩa cho hành động của người chơi.

### 🔄 **Kiểm tra sư phạm**
**Hệ thống thiết kế trò chơi hoàn chỉnh**: Xác minh sự thành thạo của bạn về các hệ thống phản hồi người chơi:
- ✅ Cách các cơ chế điểm số tạo động lực và sự tham gia của người chơi?
- ✅ Tại sao sự nhất quán trực quan quan trọng đối với thiết kế giao diện người dùng?
- ✅ Hệ thống mạng sống cân bằng thử thách với sự giữ chân người chơi như thế nào?
- ✅ Vai trò của phản hồi ngay lập tức trong việc tạo ra trải nghiệm chơi game thỏa mãn?

**Tích hợp hệ thống**: Hệ thống phản hồi của bạn thể hiện:
- **Thiết kế trải nghiệm người dùng**: Giao tiếp trực quan rõ ràng và thứ tự thông tin
- **Kiến trúc dựa trên sự kiện**: Cập nhật phản hồi cho hành động của người chơi
- **Quản lý trạng thái**: Theo dõi và hiển thị dữ liệu trò chơi động
- **Thành thạo Canvas**: Hiển thị văn bản và định vị hình ảnh
- **Tâm lý học trò chơi**: Hiểu động lực và sự tham gia của người chơi

**Mẫu chuyên nghiệp**: Bạn đã triển khai:
- **Kiến trúc MVC**: Phân tách logic trò chơi, dữ liệu và trình bày
- **Mẫu Observer**: Cập nhật dựa trên sự kiện cho thay đổi trạng thái trò chơi
- **Thiết kế thành phần**: Các hàm tái sử dụng cho hiển thị và logic
- **Tối ưu hóa hiệu suất**: Hiển thị hiệu quả trong vòng lặp trò chơi

### ⚡ **Những gì bạn có thể làm trong 5 phút tới**
- [ ] Thử nghiệm với các kích thước và màu sắc phông chữ khác nhau cho hiển thị điểm số
- [ ] Thử thay đổi giá trị điểm số và xem nó ảnh hưởng đến cảm giác chơi game như thế nào
- [ ] Thêm các câu lệnh console.log để theo dõi khi điểm số và mạng sống thay đổi
- [ ] Kiểm tra các trường hợp đặc biệt như hết mạng sống hoặc đạt điểm cao

### 🎯 **Những gì bạn có thể hoàn thành trong giờ này**
- [ ] Hoàn thành bài kiểm tra sau bài học và hiểu tâm lý thiết kế trò chơi
- [ ] Thêm hiệu ứng âm thanh cho việc ghi điểm và mất mạng sống
- [ ] Triển khai hệ thống điểm cao sử dụng localStorage
- [ ] Tạo các giá trị điểm số khác nhau cho các loại kẻ địch khác nhau
- [ ] Thêm hiệu ứng hình ảnh như rung màn hình khi mất mạng sống

### 📅 **Hành trình thiết kế trò chơi kéo dài một tuần của bạn**
- [ ] Hoàn thành trò chơi không gian đầy đủ với các hệ thống phản hồi được hoàn thiện
- [ ] Triển khai các cơ chế điểm số nâng cao như nhân điểm combo
- [ ] Thêm thành tích và nội dung có thể mở khóa
- [ ] Tạo hệ thống tiến độ và cân bằng độ khó
- [ ] Thiết kế giao diện người dùng cho menu và màn hình kết thúc trò chơi
- [ ] Nghiên cứu các trò chơi khác để hiểu các cơ chế thu hút người chơi

### 🌟 **Sự thành thạo phát triển trò chơi kéo dài một tháng của bạn**
- [ ] Xây dựng các trò chơi hoàn chỉnh với hệ thống tiến độ phức tạp
- [ ] Học phân tích trò chơi và đo lường hành vi người chơi
- [ ] Đóng góp cho các dự án phát triển trò chơi mã nguồn mở
- [ ] Thành thạo các mẫu thiết kế trò chơi nâng cao và kiếm tiền từ trò chơi
- [ ] Tạo nội dung giáo dục về thiết kế trò chơi và trải nghiệm người dùng
- [ ] Xây dựng danh mục đầu tư thể hiện kỹ năng thiết kế và phát triển trò chơi

## 🎯 Lộ trình thành thạo thiết kế trò chơi của bạn

### 🛠️ Tóm tắt bộ công cụ thiết kế trò chơi của bạn

Sau khi hoàn thành bài học này, bạn đã thành thạo:
- **Tâm lý người chơi**: Hiểu động lực, rủi ro/phần thưởng, và vòng lặp tham gia
- **Giao tiếp trực quan**: Thiết kế giao diện người dùng hiệu quả bằng văn bản, biểu tượng và bố cục
- **Hệ thống phản hồi**: Phản hồi theo thời gian thực cho hành động và sự kiện trò chơi
- **Quản lý trạng thái**: Theo dõi và hiển thị dữ liệu trò chơi động một cách hiệu quả
- **Hiển thị văn bản trên Canvas**: Hiển thị văn bản chuyên nghiệp với kiểu dáng và định vị
- **Tích hợp sự kiện**: Kết nối hành động người dùng với hậu quả trò chơi ý nghĩa
- **Cân bằng trò chơi**: Thiết kế đường cong độ khó và hệ thống tiến độ người chơi

**Ứng dụng thực tế**: Kỹ năng thiết kế trò chơi của bạn áp dụng trực tiếp vào:
- **Thiết kế giao diện người dùng**: Tạo giao diện hấp dẫn và trực quan
- **Phát triển sản phẩm**: Hiểu động lực người dùng và vòng lặp phản hồi
- **Công nghệ giáo dục**: Hệ thống gamification và sự tham gia học tập
- **Trực quan hóa dữ liệu**: Làm cho thông tin phức tạp trở nên dễ tiếp cận và hấp dẫn
- **Phát triển ứng dụng di động**: Cơ chế giữ chân và thiết kế trải nghiệm người dùng
- **Công nghệ tiếp thị**: Hiểu hành vi người dùng và tối ưu hóa chuyển đổi

**Kỹ năng chuyên nghiệp đạt được**: Bạn có thể:
- **Thiết kế** trải nghiệm người dùng thúc đẩy và thu hút người dùng
- **Triển khai** hệ thống phản hồi hướng dẫn hành vi người dùng hiệu quả
- **Cân bằng** thử thách và khả năng tiếp cận trong các hệ thống tương tác
- **Tạo** giao tiếp trực quan hoạt động với các nhóm người dùng khác nhau
- **Phân tích** hành vi người dùng và cải tiến thiết kế

**Khái niệm phát triển trò chơi đã thành thạo**:
- **Động lực người chơi**: Hiểu điều gì thúc đẩy sự tham gia và giữ chân
- **Thiết kế trực quan**: Tạo giao diện rõ ràng, hấp dẫn và chức năng
- **Tích hợp hệ thống**: Kết nối nhiều hệ thống trò chơi để tạo trải nghiệm liền mạch
- **Tối ưu hóa hiệu suất**: Hiển thị hiệu quả và quản lý trạng thái
- **Khả năng tiếp cận**: Thiết kế cho các cấp độ kỹ năng và nhu cầu người chơi khác nhau

**Cấp độ tiếp theo**: Bạn đã sẵn sàng khám phá các mẫu thiết kế trò chơi nâng cao, triển khai hệ thống phân tích, hoặc nghiên cứu chiến lược kiếm tiền và giữ chân người chơi!

🌟 **Thành tựu đã mở khóa**: Bạn đã xây dựng một hệ thống phản hồi người chơi hoàn chỉnh với các nguyên tắc thiết kế trò chơi chuyên nghiệp!

---

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Nâng cấp hệ thống điểm số của trò chơi không gian bằng cách triển khai tính năng điểm cao với lưu trữ lâu dài và cơ chế điểm thưởng.

**Yêu cầu:** Tạo hệ thống điểm cao lưu điểm tốt nhất của người chơi vào localStorage. Thêm điểm thưởng cho việc tiêu diệt liên tiếp kẻ địch (hệ thống combo) và triển khai các giá trị điểm khác nhau cho các loại kẻ địch khác nhau. Bao gồm chỉ báo trực quan khi người chơi đạt điểm cao mới và hiển thị điểm cao hiện tại trên màn hình trò chơi.

## 🚀 Thử thách

Bây giờ bạn đã có một trò chơi hoạt động với hệ thống điểm số và mạng sống. Hãy cân nhắc những tính năng bổ sung nào có thể cải thiện trải nghiệm người chơi.

## Bài kiểm tra sau bài học

[Bài kiểm tra sau bài học](https://ff-quizzes.netlify.app/web/quiz/38)

## Ôn tập & Tự học

Muốn khám phá thêm? Nghiên cứu các cách tiếp cận khác nhau đối với hệ thống điểm số và mạng sống trong trò chơi. Có những công cụ trò chơi thú vị như [PlayFab](https://playfab.com) xử lý điểm số, bảng xếp hạng, và tiến độ người chơi. Việc tích hợp một công cụ như vậy có thể đưa trò chơi của bạn lên một tầm cao mới như thế nào?

## Bài tập

[Xây dựng trò chơi điểm số](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.