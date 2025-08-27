<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-27T22:27:15+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "vi"
}
-->
# Carbon Trigger: Hoàn thành mã cho tiện ích mở rộng trình duyệt

Sử dụng API C02 Signal của tmrow để theo dõi mức tiêu thụ điện năng, hãy tạo một tiện ích mở rộng trình duyệt để bạn có thể nhận được thông báo trực tiếp trong trình duyệt về mức tiêu thụ điện năng của khu vực bạn. Việc sử dụng tiện ích mở rộng này sẽ giúp bạn đưa ra quyết định về các hoạt động của mình dựa trên thông tin này.

![ảnh chụp tiện ích mở rộng](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.vi.png)

## Bắt đầu

Bạn cần cài đặt [npm](https://npmjs.com). Tải xuống một bản sao của mã này vào một thư mục trên máy tính của bạn.

Cài đặt tất cả các gói cần thiết:

```
npm install
```

Xây dựng tiện ích mở rộng bằng webpack

```
npm run build
```

Để cài đặt trên Edge, sử dụng menu 'ba chấm' ở góc trên bên phải của trình duyệt để tìm bảng điều khiển Tiện ích mở rộng. Từ đó, chọn 'Tải tiện ích mở rộng chưa nén' để tải một tiện ích mới. Mở thư mục 'dist' khi được nhắc và tiện ích sẽ được tải. Để sử dụng, bạn cần một khóa API cho API CO2 Signal ([lấy một khóa qua email tại đây](https://www.co2signal.com/) - nhập email của bạn vào ô trên trang này) và [mã khu vực của bạn](http://api.electricitymap.org/v3/zones) tương ứng với [Bản đồ điện năng](https://www.electricitymap.org/map) (ví dụ, ở Boston, tôi sử dụng 'US-NEISO').

![cài đặt](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.vi.png)

Sau khi nhập khóa API và khu vực vào giao diện tiện ích mở rộng, điểm màu trong thanh tiện ích mở rộng của trình duyệt sẽ thay đổi để phản ánh mức tiêu thụ năng lượng của khu vực bạn và cung cấp cho bạn một chỉ báo về các hoạt động tiêu thụ năng lượng mà bạn nên thực hiện. Ý tưởng đằng sau hệ thống 'điểm' này được lấy cảm hứng từ [tiện ích mở rộng Energy Lollipop](https://energylollipop.com/) dành cho lượng khí thải ở California.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.