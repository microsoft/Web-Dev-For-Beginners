# Tiện Ích Mở Rộng Trình Duyệt Carbon Trigger: Mã Hoàn Chỉnh

Sử dụng API C02 Signal của tmrow để theo dõi mức tiêu thụ điện, bạn có thể xây dựng một tiện ích mở rộng trình duyệt để nhận nhắc nhở ngay trong trình duyệt về mức độ tiêu thụ điện năng trong khu vực của bạn. Việc sử dụng tiện ích này một cách linh hoạt sẽ giúp bạn đưa ra quyết định về các hoạt động của mình dựa trên thông tin này.

![ảnh chụp tiện ích](../../../../translated_images/vi/extension-screenshot.0e7f5bfa110e92e3.webp)

## Bắt Đầu

Bạn cần cài đặt [npm](https://npmjs.com). Tải một bản sao của mã này về một thư mục trên máy tính của bạn.

Cài đặt tất cả các gói cần thiết:

```
npm install
```

Xây dựng tiện ích mở rộng bằng webpack:

```
npm run build
```

Để cài đặt trên Edge, sử dụng menu 'ba chấm' ở góc trên bên phải của trình duyệt để tìm bảng Tiện Ích Mở Rộng (Extensions). Từ đó, chọn 'Tải Tiện Ích Không Đóng Gói' (Load Unpacked) để tải một tiện ích mới. Mở thư mục 'dist' khi được nhắc và tiện ích sẽ được tải. Để sử dụng, bạn cần một khóa API cho API của CO2 Signal ([lấy một khóa qua email tại đây](https://www.co2signal.com/) - nhập email của bạn vào ô trên trang này) và [mã khu vực của bạn](http://api.electricitymap.org/v3/zones) tương ứng với [Electricity Map](https://www.electricitymap.org/map) (ví dụ, ở Boston, tôi sử dụng 'US-NEISO').

![cài đặt](../../../../translated_images/vi/install-on-edge.78634f02842c4828.webp)

Khi bạn đã nhập khóa API và mã khu vực vào giao diện tiện ích, chấm màu trong thanh tiện ích mở rộng của trình duyệt sẽ thay đổi để phản ánh mức tiêu thụ năng lượng của khu vực bạn và cung cấp gợi ý về các hoạt động tiêu tốn năng lượng phù hợp. Ý tưởng đằng sau hệ thống 'chấm màu' này được lấy cảm hứng từ tiện ích mở rộng [Energy Lollipop](https://energylollipop.com/) dành cho lượng khí thải ở California.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.