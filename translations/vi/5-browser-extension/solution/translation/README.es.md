# Tiện ích mở rộng trình duyệt Carbon Trigger: Mã nguồn đầy đủ

Sử dụng API tín hiệu CO2 của tmrow để theo dõi việc sử dụng điện, hãy tạo một tiện ích mở rộng trình duyệt để bạn có thể nhận được lời nhắc trực tiếp trong trình duyệt về mức tiêu thụ điện năng trong khu vực của mình. Việc sử dụng tiện ích mở rộng này sẽ giúp bạn đưa ra quyết định về các hoạt động của mình dựa trên thông tin này.

![extension screenshot](../../../../../translated_images/vi/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Bắt đầu

Bạn cần cài đặt [npm](https://npmjs.com). Tải xuống một bản sao của mã này vào một thư mục trên máy tính của bạn.

Cài đặt tất cả các gói cần thiết:

```
npm install
```

Xây dựng tiện ích mở rộng bằng webpack:

```
npm run build
```

Để cài đặt trên Edge, sử dụng menu 'ba chấm' ở góc trên bên phải của trình duyệt để tìm bảng Tiện ích mở rộng. Từ đó, chọn 'Tải không đóng gói' để tải một tiện ích mở rộng mới. Mở thư mục 'dist' khi được yêu cầu và tiện ích mở rộng sẽ được tải. Để sử dụng, bạn cần một khóa API cho API CO2 Signal ([lấy tại đây qua email](https://www.co2signal.com/) - nhập email của bạn vào ô trên trang này) và [mã khu vực](http://api.electricitymap.org/v3/zones) tương ứng với [Bản đồ điện](https://www.electricitymap.org/map) (ví dụ, ở Boston, tôi sử dụng 'US-NEISO').

![installing](../../../../../translated_images/vi/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Khi bạn nhập khóa API và khu vực vào giao diện tiện ích mở rộng, điểm màu trên thanh tiện ích mở rộng của trình duyệt sẽ thay đổi để phản ánh mức sử dụng năng lượng của khu vực bạn và cung cấp cho bạn một chỉ báo về các hoạt động tiêu thụ năng lượng cao phù hợp. Ý tưởng đằng sau hệ thống "điểm" này được lấy cảm hứng từ [tiện ích mở rộng Energy Lollipop](https://energylollipop.com/) dành cho lượng khí thải ở California.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.