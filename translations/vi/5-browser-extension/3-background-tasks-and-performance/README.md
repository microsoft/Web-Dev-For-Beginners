<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T13:52:56+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "vi"
}
-->
# Dự án Tiện ích Trình duyệt Phần 3: Tìm hiểu về Nhiệm vụ Nền và Hiệu suất

Bạn có bao giờ thắc mắc tại sao một số tiện ích trình duyệt lại hoạt động nhanh nhạy và mượt mà, trong khi những tiện ích khác lại chậm chạp? Bí mật nằm ở những gì diễn ra phía sau. Trong khi người dùng nhấp chuột xung quanh giao diện tiện ích của bạn, có cả một thế giới các quy trình nền đang âm thầm quản lý việc lấy dữ liệu, cập nhật biểu tượng và tài nguyên hệ thống.

Đây là bài học cuối cùng trong loạt bài về tiện ích trình duyệt, và chúng ta sẽ làm cho công cụ theo dõi dấu chân carbon của bạn hoạt động mượt mà. Bạn sẽ thêm các cập nhật biểu tượng động và học cách phát hiện các vấn đề về hiệu suất trước khi chúng trở thành vấn đề lớn. Nó giống như việc tinh chỉnh một chiếc xe đua - những tối ưu hóa nhỏ có thể tạo ra sự khác biệt lớn trong cách mọi thứ vận hành.

Khi hoàn thành, bạn sẽ có một tiện ích được hoàn thiện và hiểu rõ các nguyên tắc hiệu suất giúp phân biệt các ứng dụng web tốt với những ứng dụng tuyệt vời. Hãy cùng khám phá thế giới tối ưu hóa trình duyệt.

## Câu hỏi trước bài học

[Câu hỏi trước bài học](https://ff-quizzes.netlify.app/web/quiz/27)

### Giới thiệu

Trong các bài học trước, bạn đã xây dựng một biểu mẫu, kết nối nó với API và xử lý việc lấy dữ liệu không đồng bộ. Tiện ích của bạn đang dần hình thành.

Bây giờ chúng ta cần thêm những chi tiết cuối cùng - như làm cho biểu tượng tiện ích thay đổi màu sắc dựa trên dữ liệu carbon. Điều này làm tôi nhớ đến cách NASA phải tối ưu hóa mọi hệ thống trên tàu vũ trụ Apollo. Họ không thể lãng phí bất kỳ chu kỳ hay bộ nhớ nào vì hiệu suất quyết định đến sự sống còn. Mặc dù tiện ích trình duyệt của chúng ta không quan trọng đến mức đó, nhưng các nguyên tắc tương tự vẫn áp dụng - mã hiệu quả tạo ra trải nghiệm người dùng tốt hơn.

## Những điều cơ bản về hiệu suất web

Khi mã của bạn chạy hiệu quả, mọi người thực sự *cảm nhận* được sự khác biệt. Bạn biết khoảnh khắc khi một trang tải ngay lập tức hoặc một hoạt ảnh chạy mượt mà? Đó là hiệu suất tốt đang hoạt động.

Hiệu suất không chỉ là về tốc độ - nó còn là việc tạo ra trải nghiệm web tự nhiên thay vì cồng kềnh và gây khó chịu. Vào những ngày đầu của máy tính, Grace Hopper nổi tiếng giữ một nanosecond (một đoạn dây dài khoảng một foot) trên bàn làm việc để minh họa khoảng cách ánh sáng đi được trong một phần tỷ giây. Đó là cách bà giải thích tại sao mỗi microsecond đều quan trọng trong tính toán. Hãy khám phá các công cụ điều tra giúp bạn tìm ra điều gì đang làm chậm mọi thứ.

> "Hiệu suất trang web là về hai điều: tốc độ tải trang và tốc độ chạy mã trên đó." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Chủ đề về cách làm cho trang web của bạn nhanh chóng trên mọi loại thiết bị, cho mọi loại người dùng, trong mọi tình huống, không có gì ngạc nhiên là rất rộng lớn. Dưới đây là một số điểm cần lưu ý khi bạn xây dựng một dự án web tiêu chuẩn hoặc tiện ích trình duyệt.

Bước đầu tiên trong việc tối ưu hóa trang web của bạn là hiểu những gì thực sự đang diễn ra bên trong. May mắn thay, trình duyệt của bạn có các công cụ điều tra mạnh mẽ được tích hợp sẵn.

Để mở Developer Tools trong Edge, nhấp vào ba dấu chấm ở góc trên bên phải, sau đó đi đến More Tools > Developer Tools. Hoặc sử dụng phím tắt: `Ctrl` + `Shift` + `I` trên Windows hoặc `Option` + `Command` + `I` trên Mac. Khi bạn đã ở đó, nhấp vào tab Performance - đây là nơi bạn sẽ thực hiện điều tra.

**Bộ công cụ điều tra hiệu suất của bạn:**
- **Mở** Developer Tools (bạn sẽ sử dụng chúng liên tục với tư cách là nhà phát triển!)
- **Đi đến** tab Performance - hãy nghĩ về nó như máy theo dõi sức khỏe của ứng dụng web của bạn
- **Nhấn** nút Record và xem trang của bạn hoạt động
- **Nghiên cứu** kết quả để phát hiện điều gì đang làm chậm mọi thứ

Hãy thử điều này. Mở một trang web (Microsoft.com hoạt động tốt cho việc này) và nhấp vào nút 'Record'. Bây giờ làm mới trang và xem profiler ghi lại mọi thứ xảy ra. Khi bạn dừng ghi, bạn sẽ thấy một phân tích chi tiết về cách trình duyệt 'scripts', 'renders', và 'paints' trang web. Nó làm tôi nhớ đến cách trung tâm điều khiển giám sát mọi hệ thống trong một lần phóng tên lửa - bạn nhận được dữ liệu thời gian thực về chính xác những gì đang xảy ra và khi nào.

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.vi.png)

✅ [Tài liệu Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) có rất nhiều chi tiết nếu bạn muốn tìm hiểu sâu hơn

> Mẹo chuyên nghiệp: Xóa bộ nhớ cache của trình duyệt trước khi kiểm tra để xem trang web của bạn hoạt động như thế nào đối với khách truy cập lần đầu - thường rất khác so với những lần truy cập lại!

Chọn các phần của dòng thời gian profile để phóng to các sự kiện xảy ra trong khi trang của bạn tải.

Lấy ảnh chụp nhanh hiệu suất của trang bằng cách chọn một phần của dòng thời gian profile và xem bảng tóm tắt:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.vi.png)

Kiểm tra bảng Event Log để xem liệu có sự kiện nào mất hơn 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.vi.png)

✅ Làm quen với profiler của bạn! Mở công cụ dành cho nhà phát triển trên trang web này và xem liệu có bất kỳ nút thắt cổ chai nào không. Tài nguyên nào tải chậm nhất? Nhanh nhất?

## Những điều cần tìm khi profiling

Chạy profiler chỉ là bước khởi đầu - kỹ năng thực sự là biết những biểu đồ đầy màu sắc đó thực sự đang nói gì với bạn. Đừng lo, bạn sẽ quen với việc đọc chúng. Các nhà phát triển có kinh nghiệm đã học cách phát hiện các dấu hiệu cảnh báo trước khi chúng trở thành vấn đề lớn.

Hãy nói về những kẻ gây rắc rối thường gặp - những vấn đề về hiệu suất thường lẻn vào các dự án web. Giống như cách Marie Curie phải cẩn thận theo dõi mức độ phóng xạ trong phòng thí nghiệm của mình, chúng ta cần theo dõi các mẫu nhất định cho thấy vấn đề đang hình thành. Phát hiện sớm sẽ giúp bạn (và người dùng của bạn) tránh được nhiều sự thất vọng.

**Kích thước tài nguyên**: Các trang web ngày càng trở nên "nặng" hơn qua các năm, và phần lớn trọng lượng thêm đó đến từ hình ảnh. Nó giống như chúng ta đang nhồi nhét ngày càng nhiều vào vali kỹ thuật số của mình.

✅ Kiểm tra [Internet Archive](https://httparchive.org/reports/page-weight) để xem kích thước trang đã tăng lên như thế nào theo thời gian - rất đáng để khám phá.

**Cách giữ cho tài nguyên của bạn được tối ưu hóa:**
- **Nén** hình ảnh! Các định dạng hiện đại như WebP có thể giảm kích thước tệp đáng kể
- **Cung cấp** kích thước hình ảnh phù hợp cho từng thiết bị - không cần gửi hình ảnh lớn cho điện thoại
- **Rút gọn** CSS và JavaScript - từng byte đều quan trọng
- **Sử dụng** lazy loading để hình ảnh chỉ tải xuống khi người dùng thực sự cuộn đến chúng

**DOM traversals**: Trình duyệt phải xây dựng Mô hình Đối tượng Tài liệu (DOM) dựa trên mã bạn viết, vì vậy để có hiệu suất trang tốt, hãy giữ các thẻ của bạn ở mức tối thiểu, chỉ sử dụng và định kiểu những gì trang cần. Đến điểm này, CSS dư thừa liên quan đến một trang có thể được tối ưu hóa; các kiểu chỉ cần sử dụng trên một trang không cần phải được bao gồm trong tệp style chính, ví dụ.

**Chiến lược chính để tối ưu hóa DOM:**
- **Giảm thiểu** số lượng phần tử HTML và mức độ lồng ghép
- **Loại bỏ** các quy tắc CSS không sử dụng và hợp nhất các tệp stylesheet một cách hiệu quả
- **Tổ chức** CSS để chỉ tải những gì cần thiết cho mỗi trang
- **Cấu trúc** HTML một cách ngữ nghĩa để trình duyệt phân tích tốt hơn

**JavaScript**: Mỗi nhà phát triển JavaScript nên chú ý đến các script 'render-blocking' phải được tải trước khi phần còn lại của DOM có thể được duyệt và vẽ lên trình duyệt. Hãy cân nhắc sử dụng `defer` với các script nội tuyến của bạn (như đã làm trong module Terrarium).

**Kỹ thuật tối ưu hóa JavaScript hiện đại:**
- **Sử dụng** thuộc tính `defer` để tải script sau khi DOM được phân tích
- **Thực hiện** code splitting để chỉ tải JavaScript cần thiết
- **Áp dụng** lazy loading cho các chức năng không quan trọng
- **Giảm thiểu** việc sử dụng các thư viện và framework nặng khi có thể

✅ Thử một số trang web trên [Trang kiểm tra tốc độ trang web](https://www.webpagetest.org/) để tìm hiểu thêm về các kiểm tra phổ biến được thực hiện để xác định hiệu suất trang web.

Bây giờ bạn đã có ý tưởng về cách trình duyệt render các tài nguyên bạn gửi đến nó, hãy xem những điều cuối cùng bạn cần làm để hoàn thiện tiện ích của mình:

### Tạo một hàm để tính toán màu sắc

Bây giờ chúng ta sẽ tạo một hàm biến dữ liệu số thành màu sắc có ý nghĩa. Hãy nghĩ về nó như một hệ thống đèn giao thông - xanh cho năng lượng sạch, đỏ cho cường độ carbon cao.

Hàm này sẽ lấy dữ liệu CO2 từ API của chúng ta và xác định màu sắc nào tốt nhất đại diện cho tác động môi trường. Nó giống như cách các nhà khoa học sử dụng mã màu trong bản đồ nhiệt để hình dung các mẫu dữ liệu phức tạp - từ nhiệt độ đại dương đến sự hình thành sao. Hãy thêm điều này vào `/src/index.js`, ngay sau các biến `const` mà chúng ta đã thiết lập trước đó:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Hãy phân tích hàm thông minh này:**
- **Thiết lập** hai mảng - một cho mức CO2, một cho màu sắc (xanh = sạch, nâu = bẩn!)
- **Tìm** kết quả gần nhất với giá trị CO2 thực tế của chúng ta bằng cách sử dụng một số sắp xếp mảng thông minh
- **Lấy** màu sắc phù hợp bằng phương pháp findIndex()
- **Gửi** một thông báo đến script nền của Chrome với màu sắc đã chọn
- **Sử dụng** template literals (những dấu backticks) để định dạng chuỗi gọn gàng hơn
- **Giữ** mọi thứ được tổ chức với các khai báo const

API `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) giống như hệ thần kinh của tiện ích của bạn - nó xử lý tất cả các giao tiếp và nhiệm vụ phía sau:

> "Sử dụng API chrome.runtime để lấy trang nền, trả về chi tiết về manifest, và lắng nghe cũng như phản hồi các sự kiện trong vòng đời của ứng dụng hoặc tiện ích. Bạn cũng có thể sử dụng API này để chuyển đổi đường dẫn tương đối của URL thành URL đầy đủ."

**Tại sao API Chrome Runtime lại hữu ích:**
- **Cho phép** các phần khác nhau của tiện ích của bạn giao tiếp với nhau
- **Xử lý** công việc nền mà không làm đóng băng giao diện người dùng
- **Quản lý** các sự kiện vòng đời của tiện ích của bạn
- **Làm cho** việc truyền thông điệp giữa các script trở nên dễ dàng

✅ Nếu bạn đang phát triển tiện ích trình duyệt này cho Edge, có thể bạn sẽ ngạc nhiên khi thấy rằng bạn đang sử dụng API chrome. Các phiên bản trình duyệt Edge mới hơn chạy trên công cụ trình duyệt Chromium, vì vậy bạn có thể tận dụng các công cụ này.

> **Mẹo chuyên nghiệp**: Nếu bạn muốn profiling một tiện ích trình duyệt, hãy mở công cụ dành cho nhà phát triển từ chính tiện ích đó, vì nó là một phiên bản trình duyệt riêng biệt. Điều này cung cấp cho bạn quyền truy cập vào các số liệu hiệu suất cụ thể của tiện ích.

### Đặt màu biểu tượng mặc định

Trước khi chúng ta bắt đầu lấy dữ liệu thực, hãy cung cấp cho tiện ích của chúng ta một điểm khởi đầu. Không ai thích nhìn vào một biểu tượng trống hoặc trông như bị lỗi. Chúng ta sẽ bắt đầu với màu xanh lá cây để người dùng biết tiện ích đang hoạt động ngay từ lúc họ cài đặt.

Trong hàm `init()` của bạn, hãy thiết lập màu biểu tượng mặc định đó:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Những gì khởi tạo này đạt được:**
- **Đặt** màu xanh lá cây trung tính làm trạng thái mặc định
- **Cung cấp** phản hồi trực quan ngay lập tức khi tiện ích tải
- **Thiết lập** mô hình giao tiếp với script nền
- **Đảm bảo** người dùng thấy một tiện ích hoạt động trước khi dữ liệu tải

### Gọi hàm, thực thi lệnh gọi

Bây giờ hãy kết nối mọi thứ lại với nhau để khi dữ liệu CO2 mới đến, biểu tượng của bạn tự động cập nhật với màu sắc phù hợp. Nó giống như kết nối mạch cuối cùng trong một thiết bị điện tử - đột nhiên tất cả các thành phần riêng lẻ hoạt động như một hệ thống.

Thêm dòng này ngay sau khi bạn lấy dữ liệu CO2 từ API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Sự tích hợp này đạt được:**
- **Kết nối** luồng dữ liệu API với hệ thống chỉ báo trực quan
- **Kích hoạt** cập nhật biểu tượng tự động khi dữ liệu mới đến
- **Đảm bảo** phản hồi trực quan theo thời gian thực dựa trên cường độ carbon hiện tại
- **Duy trì** sự phân tách giữa logic lấy dữ liệu và hiển thị

Và cuối cùng, trong `/dist/background.js`, thêm trình lắng nghe cho các cuộc gọi hành động nền này:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Script nền này làm gì:**
- **Lắng nghe** các thông điệp từ script chính của bạn (như một lễ tân nhận cuộc gọi)
- **Xử lý** các yêu cầu 'updateIcon' để thay đổi biểu tượng thanh công cụ của bạn
- **Tạo** các biểu tượng mới ngay lập tức bằng cách sử dụng Canvas API
- **Vẽ** một vòng tròn màu đơn giản hiển thị cường độ carbon hiện tại
- **Cập nhật** thanh công cụ trình duyệt của bạn với biểu tượng mới
- **Sử dụng** OffscreenCanvas để có hiệu suất mượt mà (không làm chặn giao diện người dùng)

✅ Bạn sẽ tìm hiểu thêm về Canvas API trong [bài học Trò chơi Không gian](../../6-space-game/2-drawing-to-canvas/README.md).

**Thời gian kiểm tra tiện ích của bạn:**
- **Xây dựng** mọi thứ với `npm run build`
- **Tải lại** tiện ích của bạn trong trình duyệt (đừng quên bước này)
- **Mở** tiện ích của bạn và xem biểu tượng đó thay đổi màu sắc
- **Kiểm tra** cách nó phản hồi với dữ liệu carbon thực từ khắp nơi trên thế giới

Bây giờ bạn sẽ biết ngay lập tức liệu có phải thời điểm tốt để giặt đồ hay nên chờ năng lượng sạch hơn. Bạn vừa xây dựng một thứ thực sự hữu ích và học được về hiệu suất trình duyệt trong quá trình này.

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Nâng cao khả năng giám sát hiệu suất của tiện ích trình duyệt bằng cách thêm tính năng theo dõi và hiển thị thời gian tải cho các thành phần khác nhau của tiện ích.

**Yêu cầu:** Tạo một hệ thống giám sát hiệu suất cho tiện ích trình duyệt đo lường và ghi lại thời gian lấy dữ liệu CO2 từ API, tính toán màu sắc, và cập nhật biểu tượng. Thêm một hàm gọi là `performanceTracker` sử dụng Performance API để đo lường các hoạt động này và hiển thị kết quả trong console trình duyệt với dấu thời gian và số liệu thời gian.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

## 🚀 Thử thách
Đây là một nhiệm vụ thám tử thú vị: chọn một vài trang web mã nguồn mở đã tồn tại trong nhiều năm (như Wikipedia, GitHub, hoặc Stack Overflow) và tìm hiểu lịch sử các lần commit của họ. Bạn có thể phát hiện ra nơi họ đã cải thiện hiệu suất không? Những vấn đề nào thường xuyên xuất hiện?

**Cách tiếp cận điều tra của bạn:**
- **Tìm kiếm** các thông điệp commit với các từ như "tối ưu hóa," "hiệu suất," hoặc "nhanh hơn"
- **Quan sát** các mẫu - họ có thường xuyên sửa chữa cùng một loại vấn đề không?
- **Xác định** các nguyên nhân phổ biến làm chậm trang web
- **Chia sẻ** những gì bạn khám phá - các nhà phát triển khác sẽ học hỏi từ các ví dụ thực tế

## Câu hỏi sau bài giảng

[Câu hỏi sau bài giảng](https://ff-quizzes.netlify.app/web/quiz/28)

## Ôn tập & Tự học

Hãy cân nhắc đăng ký một [bản tin về hiệu suất](https://perf.email/)

Khám phá một số cách mà các trình duyệt đánh giá hiệu suất web bằng cách xem qua các tab hiệu suất trong công cụ web của họ. Bạn có tìm thấy sự khác biệt lớn nào không?

## Bài tập

[Phân tích một trang web về hiệu suất](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.