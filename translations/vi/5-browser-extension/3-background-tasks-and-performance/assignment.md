<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T13:53:31+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "vi"
}
-->
# Phân tích hiệu suất của một trang web

## Tổng quan về bài tập

Phân tích hiệu suất là một kỹ năng quan trọng đối với các nhà phát triển web hiện đại. Trong bài tập này, bạn sẽ thực hiện một cuộc kiểm tra hiệu suất toàn diện trên một trang web thực tế, sử dụng cả công cụ trình duyệt và dịch vụ bên thứ ba để xác định các điểm nghẽn và đề xuất các chiến lược tối ưu hóa.

Nhiệm vụ của bạn là cung cấp một báo cáo chi tiết về hiệu suất, thể hiện sự hiểu biết của bạn về các nguyên tắc hiệu suất web và khả năng sử dụng các công cụ phân tích chuyên nghiệp một cách hiệu quả.

## Hướng dẫn bài tập

**Chọn một trang web** để phân tích - chọn một trong các tùy chọn sau:
- Một trang web phổ biến mà bạn thường xuyên sử dụng (trang tin tức, mạng xã hội, thương mại điện tử)
- Trang web của một dự án mã nguồn mở (trang GitHub, trang tài liệu)
- Trang web của một doanh nghiệp địa phương hoặc trang portfolio
- Dự án của bạn hoặc bài tập trước đây

**Thực hiện phân tích đa công cụ** sử dụng ít nhất ba phương pháp khác nhau:
- **DevTools của trình duyệt** - Sử dụng tab Performance của Chrome/Edge để phân tích chi tiết
- **Công cụ kiểm tra trực tuyến** - Thử Lighthouse, GTmetrix, hoặc WebPageTest
- **Phân tích mạng** - Kiểm tra việc tải tài nguyên, kích thước tệp, và mô hình yêu cầu

**Ghi lại kết quả** trong một báo cáo chi tiết bao gồm:

### Phân tích các chỉ số hiệu suất
- **Đo thời gian tải** từ nhiều công cụ và góc nhìn khác nhau
- **Điểm Core Web Vitals** (LCP, FID, CLS) và ý nghĩa của chúng
- **Phân tích tài nguyên** cho thấy những tài sản nào đóng góp nhiều nhất vào thời gian tải
- **Phân tích biểu đồ waterfall mạng** để xác định các tài nguyên gây chặn

### Xác định vấn đề
- **Các điểm nghẽn hiệu suất cụ thể** với dữ liệu hỗ trợ
- **Phân tích nguyên nhân gốc rễ** giải thích tại sao mỗi vấn đề xảy ra
- **Đánh giá tác động đến người dùng** mô tả cách các vấn đề ảnh hưởng đến người dùng thực tế
- **Xếp hạng ưu tiên** các vấn đề dựa trên mức độ nghiêm trọng và độ khó khi sửa chữa

### Đề xuất tối ưu hóa
- **Các cải tiến cụ thể, có thể thực hiện** cùng với tác động dự kiến
- **Chiến lược triển khai** cho từng thay đổi được đề xuất
- **Các thực hành tốt nhất hiện đại** có thể áp dụng (tải chậm, nén, v.v.)
- **Công cụ và kỹ thuật** để giám sát hiệu suất liên tục

## Yêu cầu nghiên cứu

**Không chỉ dựa vào công cụ trình duyệt** - mở rộng phân tích của bạn bằng cách sử dụng:

**Dịch vụ kiểm tra bên thứ ba:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Kiểm tra toàn diện
- [GTmetrix](https://gtmetrix.com/) - Thông tin về hiệu suất và tối ưu hóa
- [WebPageTest](https://www.webpagetest.org/) - Điều kiện kiểm tra thực tế
- [Pingdom](https://tools.pingdom.com/) - Giám sát hiệu suất toàn cầu

**Công cụ phân tích chuyên biệt:**
- [Bundle Analyzer](https://bundlephobia.com/) - Phân tích kích thước gói JavaScript
- [Công cụ tối ưu hóa hình ảnh](https://squoosh.app/) - Cơ hội tối ưu hóa tài sản
- [Phân tích tiêu đề bảo mật](https://securityheaders.com/) - Tác động của bảo mật đến hiệu suất

## Định dạng sản phẩm

Tạo một báo cáo chuyên nghiệp (2-3 trang) bao gồm:

1. **Tóm tắt điều hành** - Tổng quan về các phát hiện và đề xuất chính
2. **Phương pháp luận** - Công cụ đã sử dụng và cách tiếp cận kiểm tra
3. **Đánh giá hiệu suất hiện tại** - Các chỉ số và số liệu cơ bản
4. **Các vấn đề được xác định** - Phân tích chi tiết vấn đề với dữ liệu hỗ trợ
5. **Đề xuất** - Chiến lược cải tiến được ưu tiên
6. **Lộ trình triển khai** - Kế hoạch tối ưu hóa từng bước

**Bao gồm bằng chứng trực quan:**
- Ảnh chụp màn hình của các công cụ và chỉ số hiệu suất
- Biểu đồ hoặc đồ thị hiển thị dữ liệu hiệu suất
- So sánh trước/sau nếu có thể
- Biểu đồ waterfall mạng và phân tích tài nguyên

## Tiêu chí đánh giá

| Tiêu chí | Xuất sắc (90-100%) | Đạt yêu cầu (70-89%) | Cần cải thiện (50-69%) |
| -------- | ------------------ | -------------------- | ---------------------- |
| **Độ sâu phân tích** | Phân tích toàn diện sử dụng 4+ công cụ với các chỉ số chi tiết, phân tích nguyên nhân gốc rễ, và đánh giá tác động đến người dùng | Phân tích tốt sử dụng 3 công cụ với các chỉ số rõ ràng và xác định vấn đề cơ bản | Phân tích cơ bản sử dụng 2 công cụ với độ sâu hạn chế và xác định vấn đề tối thiểu |
| **Đa dạng công cụ** | Sử dụng công cụ trình duyệt + 3+ dịch vụ bên thứ ba với phân tích so sánh và thông tin từ mỗi công cụ | Sử dụng công cụ trình duyệt + 2 dịch vụ bên thứ ba với một số phân tích so sánh | Sử dụng công cụ trình duyệt + 1 dịch vụ bên thứ ba với so sánh hạn chế |
| **Xác định vấn đề** | Xác định 5+ vấn đề hiệu suất cụ thể với phân tích nguyên nhân gốc rễ chi tiết và tác động được định lượng | Xác định 3-4 vấn đề hiệu suất với phân tích tốt và một số đo lường tác động | Xác định 1-2 vấn đề hiệu suất với phân tích cơ bản |
| **Đề xuất** | Đưa ra các đề xuất cụ thể, có thể thực hiện với chi tiết triển khai, tác động dự kiến, và các thực hành tốt nhất hiện đại | Đưa ra các đề xuất tốt với một số hướng dẫn triển khai và kết quả dự kiến | Đưa ra các đề xuất cơ bản với chi tiết triển khai hạn chế |
| **Trình bày chuyên nghiệp** | Báo cáo được tổ chức tốt với cấu trúc rõ ràng, bằng chứng trực quan, tóm tắt điều hành, và định dạng chuyên nghiệp | Tổ chức tốt với một số bằng chứng trực quan và cấu trúc rõ ràng | Tổ chức cơ bản với bằng chứng trực quan tối thiểu |

## Kết quả học tập

Bằng cách hoàn thành bài tập này, bạn sẽ chứng minh khả năng:
- **Áp dụng** các công cụ và phương pháp phân tích hiệu suất chuyên nghiệp
- **Xác định** các điểm nghẽn hiệu suất bằng phân tích dựa trên dữ liệu
- **Phân tích** mối quan hệ giữa chất lượng mã và trải nghiệm người dùng
- **Đề xuất** các chiến lược tối ưu hóa cụ thể, có thể thực hiện
- **Truyền đạt** các phát hiện kỹ thuật trong một định dạng chuyên nghiệp

Bài tập này củng cố các khái niệm hiệu suất đã học trong bài giảng đồng thời xây dựng các kỹ năng thực tế mà bạn sẽ sử dụng trong suốt sự nghiệp phát triển web của mình.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.