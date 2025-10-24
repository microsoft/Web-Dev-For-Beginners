<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-24T13:33:36+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "vi"
}
-->
# Kiểm tra toàn diện khả năng truy cập của website

## Hướng dẫn

Trong bài tập này, bạn sẽ thực hiện một cuộc kiểm tra khả năng truy cập chuyên nghiệp trên một website thực tế, áp dụng các nguyên tắc và kỹ thuật đã học. Trải nghiệm thực hành này sẽ giúp bạn hiểu sâu hơn về các rào cản và giải pháp liên quan đến khả năng truy cập.

Hãy chọn một website có vẻ như gặp vấn đề về khả năng truy cập—điều này sẽ mang lại nhiều cơ hội học hỏi hơn so với việc phân tích một trang web đã hoàn hảo. Các ứng viên tốt bao gồm các website cũ, ứng dụng web phức tạp, hoặc các trang có nội dung đa phương tiện phong phú.

### Giai đoạn 1: Đánh giá thủ công chiến lược

Trước khi sử dụng các công cụ tự động, hãy thực hiện một đánh giá thủ công toàn diện. Cách tiếp cận tập trung vào con người này thường phát hiện ra các vấn đề mà công cụ bỏ sót và giúp bạn hiểu trải nghiệm thực tế của người dùng.

**🔍 Tiêu chí đánh giá cần thiết:**

**Điều hướng và cấu trúc:**
- Bạn có thể điều hướng toàn bộ trang web chỉ bằng bàn phím (Tab, Shift+Tab, Enter, Space, phím mũi tên)?
- Các chỉ báo tiêu điểm có rõ ràng trên tất cả các phần tử tương tác không?
- Cấu trúc tiêu đề (H1-H6) có tạo ra một bản phác thảo nội dung hợp lý không?
- Có liên kết bỏ qua để nhảy đến nội dung chính không?

**Khả năng truy cập hình ảnh:**
- Có đủ độ tương phản màu sắc trên toàn bộ trang web (tối thiểu 4.5:1 cho văn bản thông thường)?
- Trang web có chỉ dựa vào màu sắc để truyền tải thông tin quan trọng không?
- Tất cả hình ảnh có văn bản thay thế phù hợp không?
- Bố cục có vẫn hoạt động khi phóng to lên 200% không?

**Nội dung và giao tiếp:**
- Có bất kỳ liên kết "nhấn vào đây" hoặc văn bản liên kết mơ hồ nào không?
- Bạn có thể hiểu nội dung và chức năng mà không cần tín hiệu hình ảnh không?
- Các trường biểu mẫu có được gắn nhãn và nhóm đúng cách không?
- Các thông báo lỗi có rõ ràng và hữu ích không?

**Phần tử tương tác:**
- Tất cả các nút và điều khiển biểu mẫu có hoạt động chỉ với bàn phím không?
- Các thay đổi nội dung động có được thông báo cho trình đọc màn hình không?
- Các hộp thoại modal và widget phức tạp có tuân theo các mẫu khả năng truy cập đúng không?

📝 **Ghi lại phát hiện của bạn** với các ví dụ cụ thể, ảnh chụp màn hình và URL trang. Lưu ý cả vấn đề và những điều làm tốt.

### Giai đoạn 2: Kiểm tra tự động toàn diện

Bây giờ hãy xác thực và mở rộng các phát hiện thủ công của bạn bằng cách sử dụng các công cụ kiểm tra khả năng truy cập tiêu chuẩn ngành. Mỗi công cụ có những điểm mạnh khác nhau, vì vậy việc sử dụng nhiều công cụ sẽ mang lại sự bao quát toàn diện.

**🛠️ Các công cụ kiểm tra cần thiết:**

1. **Lighthouse Accessibility Audit** (tích hợp trong Chrome/Edge DevTools)
   - Chạy kiểm tra trên nhiều trang
   - Tập trung vào các chỉ số và khuyến nghị cụ thể
   - Ghi lại điểm khả năng truy cập và các vi phạm cụ thể

2. **axe DevTools** (tiện ích mở rộng trình duyệt - tiêu chuẩn ngành)
   - Phát hiện vấn đề chi tiết hơn Lighthouse
   - Cung cấp các ví dụ mã cụ thể để sửa lỗi
   - Kiểm tra theo tiêu chí WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (tiện ích mở rộng trình duyệt)
   - Đại diện trực quan các tính năng khả năng truy cập
   - Nổi bật cả lỗi và các tính năng tích cực
   - Tuyệt vời để hiểu cấu trúc trang

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker cho các cặp màu cụ thể
   - Tiện ích mở rộng trình duyệt để phân tích toàn trang
   - Kiểm tra theo tiêu chuẩn WCAG AA và AAA

**🎧 Kiểm tra công nghệ hỗ trợ thực tế:**
- **Kiểm tra trình đọc màn hình**: Sử dụng NVDA (Windows), VoiceOver (Mac), hoặc TalkBack (Android)
- **Điều hướng chỉ bằng bàn phím**: Ngắt kết nối chuột và điều hướng toàn bộ trang web
- **Kiểm tra phóng to**: Kiểm tra chức năng ở mức phóng to 200% và 400%
- **Kiểm tra điều khiển bằng giọng nói**: Nếu có, thử các công cụ điều hướng bằng giọng nói

**📊 Tổ chức kết quả của bạn** bằng cách tạo một bảng tính tổng hợp với:
- Mô tả vấn đề và vị trí
- Mức độ nghiêm trọng (Nghiêm trọng/Cao/Trung bình/Thấp)
- Tiêu chí thành công WCAG bị vi phạm
- Công cụ phát hiện vấn đề
- Ảnh chụp màn hình và bằng chứng

### Giai đoạn 3: Tài liệu phát hiện toàn diện

Tạo một báo cáo kiểm tra khả năng truy cập chuyên nghiệp thể hiện sự hiểu biết của bạn về cả vấn đề kỹ thuật và tác động đến con người.

**📋 Các phần báo cáo yêu cầu:**

1. **Tóm tắt điều hành** (1 trang)
   - URL website và mô tả ngắn gọn
   - Mức độ trưởng thành khả năng truy cập tổng thể
   - 3 vấn đề nghiêm trọng nhất
   - Ước tính tác động đến người dùng khuyết tật

2. **Phương pháp luận** (½ trang)
   - Cách tiếp cận kiểm tra và công cụ đã sử dụng
   - Các trang được đánh giá và kết hợp thiết bị/trình duyệt
   - Các tiêu chuẩn được đánh giá (WCAG 2.1 AA)

3. **Phát hiện chi tiết** (2-3 trang)
   - Các vấn đề được phân loại theo nguyên tắc WCAG (Có thể nhận thức, Có thể vận hành, Có thể hiểu, Mạnh mẽ)
   - Bao gồm ảnh chụp màn hình và ví dụ cụ thể
   - Lưu ý các tính năng khả năng truy cập tích cực mà bạn tìm thấy
   - Đối chiếu với kết quả công cụ tự động

4. **Đánh giá tác động người dùng** (1 trang)
   - Các vấn đề được xác định ảnh hưởng đến người dùng khuyết tật như thế nào
   - Các kịch bản mô tả trải nghiệm thực tế của người dùng
   - Tác động kinh doanh (rủi ro pháp lý, SEO, mở rộng cơ sở người dùng)

**📸 Thu thập bằng chứng:**
- Ảnh chụp màn hình các vi phạm khả năng truy cập
- Ghi hình các luồng người dùng gặp vấn đề
- Báo cáo công cụ (lưu dưới dạng PDF)
- Ví dụ mã hiển thị vấn đề

### Giai đoạn 4: Kế hoạch khắc phục chuyên nghiệp

Phát triển một kế hoạch chiến lược, ưu tiên để khắc phục các vấn đề khả năng truy cập. Điều này thể hiện khả năng của bạn trong việc suy nghĩ như một nhà phát triển web chuyên nghiệp giải quyết các ràng buộc kinh doanh thực tế.

**🎯 Tạo các khuyến nghị cải thiện chi tiết (tối thiểu 10 vấn đề):**

**Đối với mỗi vấn đề được xác định, cung cấp:**

- **Mô tả vấn đề**: Giải thích rõ ràng điều gì sai và tại sao nó gây vấn đề
- **Tham chiếu WCAG**: Tiêu chí thành công cụ thể bị vi phạm (ví dụ: "2.4.4 Mục đích liên kết (Trong ngữ cảnh) - Cấp độ A")
- **Tác động người dùng**: Điều này ảnh hưởng đến người khuyết tật như thế nào
- **Giải pháp**: Thay đổi mã cụ thể, sửa đổi thiết kế, hoặc cải tiến quy trình
- **Mức độ ưu tiên**: Nghiêm trọng (chặn sử dụng cơ bản) / Cao (rào cản đáng kể) / Trung bình (vấn đề khả năng sử dụng) / Thấp (cải tiến)
- **Nỗ lực thực hiện**: Ước tính thời gian/độ phức tạp (Thắng lợi nhanh / Nỗ lực vừa phải / Tái cấu trúc lớn)
- **Xác minh kiểm tra**: Cách xác minh sửa lỗi hoạt động

**Ví dụ về mục cải thiện:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Các giai đoạn triển khai chiến lược:**

- **Giai đoạn 1 (0-2 tuần)**: Các vấn đề nghiêm trọng chặn chức năng cơ bản
- **Giai đoạn 2 (1-2 tháng)**: Cải tiến ưu tiên cao để cải thiện trải nghiệm người dùng
- **Giai đoạn 3 (3-6 tháng)**: Các cải tiến ưu tiên trung bình và cải tiến quy trình
- **Giai đoạn 4 (Liên tục)**: Giám sát và nâng cao liên tục

## Tiêu chí đánh giá

Bài kiểm tra khả năng truy cập của bạn sẽ được đánh giá dựa trên cả độ chính xác kỹ thuật và cách trình bày chuyên nghiệp:

| Tiêu chí | Xuất sắc (90-100%) | Tốt (80-89%) | Đạt yêu cầu (70-79%) | Cần cải thiện (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Độ sâu kiểm tra thủ công** | Đánh giá toàn diện bao phủ tất cả các nguyên tắc POUR với các quan sát chi tiết và kịch bản người dùng | Bao phủ tốt hầu hết các lĩnh vực khả năng truy cập với các phát hiện rõ ràng và một số phân tích tác động người dùng | Đánh giá cơ bản bao phủ các lĩnh vực chính với các quan sát đầy đủ | Kiểm tra hạn chế với các quan sát hời hợt và ít xem xét tác động người dùng |
| **Sử dụng và phân tích công cụ** | Sử dụng hiệu quả tất cả các công cụ yêu cầu, đối chiếu phát hiện, bao gồm bằng chứng rõ ràng, và phân tích hạn chế của công cụ | Sử dụng hầu hết các công cụ với tài liệu tốt, một số đối chiếu, và bằng chứng đầy đủ | Sử dụng các công cụ yêu cầu với tài liệu cơ bản và một số bằng chứng | Sử dụng công cụ tối thiểu, tài liệu kém, hoặc thiếu bằng chứng |
| **Xác định và phân loại vấn đề** | Xác định 15+ vấn đề cụ thể trên tất cả các nguyên tắc WCAG, phân loại chính xác theo mức độ nghiêm trọng, thể hiện sự hiểu biết sâu sắc | Xác định 10-14 vấn đề trên hầu hết các nguyên tắc WCAG, phân loại tốt, thể hiện sự hiểu biết vững chắc | Xác định 7-9 vấn đề với phạm vi WCAG đầy đủ và phân loại cơ bản | Xác định <7 vấn đề với phạm vi hạn chế hoặc phân loại kém |
| **Chất lượng và tính khả thi của giải pháp** | 10+ giải pháp chi tiết, khả thi với tham chiếu WCAG chính xác, thời gian triển khai thực tế, và phương pháp xác minh | 8-9 giải pháp phát triển tốt với tham chiếu chủ yếu chính xác và chi tiết triển khai tốt | 6-7 giải pháp cơ bản với một số chi tiết và cách tiếp cận nhìn chung thực tế | <6 giải pháp hoặc chi tiết không đủ, triển khai không thực tế |
| **Giao tiếp chuyên nghiệp** | Báo cáo được tổ chức xuất sắc, viết rõ ràng, bao gồm tóm tắt điều hành, sử dụng ngôn ngữ kỹ thuật phù hợp, và tuân theo tiêu chuẩn tài liệu kinh doanh | Tổ chức tốt với chất lượng viết tốt, bao gồm hầu hết các phần yêu cầu, giọng điệu phù hợp | Tổ chức đầy đủ với chất lượng viết chấp nhận được, bao gồm các phần yêu cầu cơ bản | Tổ chức kém, viết không rõ ràng, hoặc thiếu các phần chính |
| **Ứng dụng thực tế** | Thể hiện sự hiểu biết về tác động kinh doanh, cân nhắc pháp lý, sự đa dạng người dùng, và thách thức triển khai thực tế | Thể hiện sự hiểu biết tốt về ứng dụng thực tế với một số bối cảnh kinh doanh | Hiểu biết cơ bản về ứng dụng thực tế | Kết nối hạn chế với ứng dụng thực tế |

## Tùy chọn thử thách nâng cao

**🚀 Dành cho sinh viên muốn thử thách thêm:**

- **Phân tích so sánh**: Kiểm tra 2-3 website cạnh tranh và so sánh mức độ trưởng thành khả năng truy cập của chúng
- **Tập trung vào khả năng truy cập di động**: Đi sâu vào các vấn đề khả năng truy cập cụ thể trên di động bằng cách sử dụng Android TalkBack hoặc iOS VoiceOver
- **Góc nhìn quốc tế**: Nghiên cứu và áp dụng các tiêu chuẩn khả năng truy cập từ các quốc gia khác nhau (EN 301 549, Section 508, ADA)
- **Đánh giá tuyên bố khả năng truy cập**: Đánh giá tuyên bố khả năng truy cập hiện có của website (nếu có) so với các phát hiện của bạn

## Sản phẩm cần nộp

Nộp một báo cáo kiểm tra khả năng truy cập toàn diện thể hiện phân tích cấp độ chuyên nghiệp và kế hoạch triển khai thực tế:

**📄 Yêu cầu báo cáo cuối cùng:**

1. **Tóm tắt điều hành** (1 trang)
   - Tổng quan về website và đánh giá mức độ trưởng thành khả năng truy cập
   - Tóm tắt các phát hiện chính với tác động kinh doanh
   - Các hành động ưu tiên được khuyến nghị

2. **Phương pháp luận và phạm vi** (1 trang)
   - Cách tiếp cận kiểm tra, công cụ đã sử dụng, và tiêu chí đánh giá
   - Các trang/phần được đánh giá và bất kỳ hạn chế nào
   - Khung tuân thủ tiêu chuẩn (WCAG 2.1 AA)

3. **Báo cáo phát hiện chi tiết** (3-4 trang)
   - Quan sát kiểm tra thủ công với các kịch bản người dùng
   - Kết quả công cụ tự động với đối chiếu
   - Các vấn đề được tổ chức theo nguyên tắc WCAG với bằng chứng
   - Các tính năng khả năng truy cập tích cực được xác định

4. **Kế hoạch khắc phục chiến lược** (3-4 trang)
   - Các khuyến nghị cải thiện ưu tiên (tối thiểu 10)
   - Thời gian triển khai với ước tính nỗ lực
   - Các chỉ số thành công và phương pháp xác minh
   - Chiến lược duy trì khả năng truy cập lâu dài

5. **Bằng chứng hỗ trợ** (Phụ lục)
   - Ảnh chụp màn hình các vi phạm khả năng truy cập và công cụ kiểm tra
   - Ví dụ mã hiển thị vấn đề và giải pháp
   - Báo cáo công cụ và tóm tắt kiểm tra
   - Ghi chú hoặc ghi hình kiểm tra trình đọc màn hình

**📊 Yêu cầu định dạng:**
- **Định dạng tài liệu**: PDF (trình bày chuyên nghiệp)
- **Số từ**: 2,500-3,500 từ (không bao gồm phụ lục và ảnh chụp màn hình)
- **Yếu tố hình ảnh**: Bao gồm ảnh chụp màn hình, sơ đồ, và ví dụ xuyên suốt
- **Trích dẫn**: Tham khảo các hướng dẫn WCAG và tài nguyên khả năng truy cập một cách phù hợp

**💡 Mẹo để đạt xuất sắc:**
- Sử dụng định dạng báo cáo chuyên nghiệp với tiêu đề và phong cách nhất quán
- Bao gồm mục lục để dễ dàng điều hướng
- Cân bằng độ chính xác kỹ thuật với ngôn ngữ rõ ràng, phù hợp với kinh doanh
- Thể hiện sự hiểu biết về cả triển khai kỹ thuật và tác động người dùng

## Kết quả học tập

Sau khi hoàn thành kiểm tra khả năng truy cập toàn diện này, bạn sẽ phát triển các kỹ năng chuyên nghiệp thiết yếu:

**🎯 Năng lực kỹ thuật:**
- **Thành thạo kiểm tra khả năng truy cập**: Thành thạo các phương pháp kiểm tra thủ công và tự động tiêu chuẩn ngành
- **Áp dụng WCAG**: Kinh nghiệm thực tế áp dụng Hướng dẫn Nội dung Web Khả năng Truy cập vào các tình huống thực tế
- **Hiểu biết công nghệ hỗ trợ**: Trải nghiệm thực hành với trình đọc màn hình và điều hướng bằng bàn phím
- **Lập bản đồ vấn đề-giải pháp**: Khả năng xác định rào cản khả năng truy cập và phát triển các chiến lược khắc phục cụ thể, khả thi

**💼 Kỹ năng chuyên nghiệp:**
- **Giao tiếp kỹ thuật**: Kinh nghiệm viết báo cáo khả năng truy cập chuyên nghiệp cho các bên liên quan đa dạng
- **Lập kế hoạch chiến lược**: Khả năng ưu tiên các cải tiến khả năng truy cập dựa trên tác động người dùng và tính khả thi triển khai
- **Đảm bảo chất lượng**: Hiểu biết về kiểm tra khả năng truy cập như một phần của vòng đời phát triển
- **Đánh giá rủi ro**: Đánh giá các tác động pháp lý, kinh doanh, và đạo đức của việc tuân thủ khả năng truy cập

**🌍 Tư duy thiết kế toàn diện:**
- **Đồng cảm với người dùng**: Hiểu sâu sắc về nhu cầu đa dạng của người dùng và tương tác với công nghệ hỗ trợ
- **Nguyên tắc thiết kế phổ quát**: Nhận thức rằng thiết kế khả năng truy cập mang lại lợi ích cho tất cả người dùng, không chỉ những người khuyết tật
- **Cải tiến liên tục**: Khung làm việc cho việc đánh giá và nâng cao khả năng truy cập liên tục
-

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.