<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T22:24:14+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "vi"
}
-->
# Tiện ích mở rộng trình duyệt Carbon Trigger: Mã hoàn chỉnh

Sử dụng API tín hiệu CO2 của tmrow để theo dõi mức tiêu thụ điện năng, xây dựng một tiện ích mở rộng trình duyệt nhằm nhắc nhở bạn về mức độ tiêu thụ điện năng trong khu vực của bạn ngay trong trình duyệt. Việc sử dụng tiện ích này sẽ giúp bạn đưa ra quyết định dựa trên thông tin đó về các hoạt động của mình.

![Ảnh chụp màn hình tiện ích mở rộng](../../../../../translated_images/vi/extension-screenshot.0e7f5bfa110e92e3.webp)

## Bắt đầu

Bạn cần cài đặt [npm](https://npmjs.com). Tải xuống một bản sao của mã này vào một thư mục trên máy tính của bạn.

Cài đặt tất cả các gói cần thiết:

```
npm install
```

Tạo tiện ích mở rộng bằng webpack:

```
npm run build
```

Để cài đặt trên Edge, sử dụng menu 'ba chấm' ở góc trên bên phải của trình duyệt để tìm bảng tiện ích mở rộng. Từ đó, chọn 'Load unpacked' để tải một tiện ích mở rộng mới. Khi được nhắc, mở thư mục 'dist' và tiện ích mở rộng sẽ được tải. Để sử dụng, bạn cần một khóa API của CO2 Signal ([nhận qua email tại đây](https://www.co2signal.com/) - nhập email của bạn vào hộp trên trang này) và [mã khu vực của bạn](http://api.electricitymap.org/v3/zones) từ [Electricity Map](https://www.electricitymap.org/map) (ví dụ: ở Boston, tôi sử dụng 'US-NEISO').

![Cài đặt](../../../../../translated_images/vi/install-on-edge.78634f02842c4828.webp)

Sau khi nhập khóa API và mã khu vực vào giao diện tiện ích mở rộng, dấu chấm màu trong thanh tiện ích mở rộng của trình duyệt sẽ thay đổi để phản ánh mức tiêu thụ năng lượng của khu vực bạn và cung cấp cho bạn một chỉ báo về các hoạt động tiêu thụ năng lượng phù hợp với hiệu suất của bạn. Ý tưởng về hệ thống 'dấu chấm' này được lấy cảm hứng từ tiện ích mở rộng [Energy Lollipop](https://energylollipop.com/) dành cho lượng khí thải ở California.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.