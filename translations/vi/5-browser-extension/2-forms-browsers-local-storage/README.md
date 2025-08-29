<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T08:51:13+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "vi"
}
-->
# Dự án Tiện ích Mở rộng Trình duyệt Phần 2: Gọi API, sử dụng Local Storage

## Câu hỏi trước bài học

[Câu hỏi trước bài học](https://ff-quizzes.netlify.app/web/quiz/25)

### Giới thiệu

Trong bài học này, bạn sẽ gọi một API bằng cách gửi biểu mẫu của tiện ích mở rộng trình duyệt và hiển thị kết quả trong tiện ích mở rộng. Ngoài ra, bạn sẽ học cách lưu trữ dữ liệu trong bộ nhớ cục bộ của trình duyệt để tham khảo và sử dụng sau này.

✅ Làm theo các đoạn mã được đánh số trong các tệp phù hợp để biết nơi đặt mã của bạn.

### Thiết lập các phần tử để thao tác trong tiện ích mở rộng:

Đến thời điểm này, bạn đã xây dựng HTML cho biểu mẫu và `<div>` kết quả của tiện ích mở rộng trình duyệt. Từ bây giờ, bạn sẽ cần làm việc trong tệp `/src/index.js` và xây dựng tiện ích mở rộng của mình từng bước một. Tham khảo [bài học trước](../1-about-browsers/README.md) để thiết lập dự án và quy trình xây dựng.

Làm việc trong tệp `index.js`, bắt đầu bằng cách tạo một số biến `const` để giữ các giá trị liên quan đến các trường khác nhau:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Tất cả các trường này được tham chiếu bằng class css của chúng, như bạn đã thiết lập trong HTML ở bài học trước.

### Thêm trình lắng nghe sự kiện

Tiếp theo, thêm các trình lắng nghe sự kiện vào biểu mẫu và nút xóa để đặt lại biểu mẫu, để nếu người dùng gửi biểu mẫu hoặc nhấp vào nút đặt lại, một hành động sẽ xảy ra, và thêm lệnh gọi để khởi tạo ứng dụng ở cuối tệp:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Lưu ý cách viết tắt được sử dụng để lắng nghe sự kiện submit hoặc click, và cách sự kiện được truyền vào các hàm handleSubmit hoặc reset. Bạn có thể viết cách viết tắt này theo định dạng dài hơn không? Bạn thích cách nào hơn?

### Xây dựng hàm init() và hàm reset():

Bây giờ bạn sẽ xây dựng hàm khởi tạo tiện ích mở rộng, được gọi là init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

Trong hàm này, có một số logic thú vị. Đọc qua, bạn có thể thấy điều gì xảy ra không?

- hai `const` được thiết lập để kiểm tra xem người dùng đã lưu trữ APIKey và mã vùng trong bộ nhớ cục bộ chưa.
- nếu một trong hai giá trị này là null, hiển thị biểu mẫu bằng cách thay đổi kiểu của nó thành 'block'
- ẩn khu vực kết quả, loading, và clearBtn, đồng thời đặt bất kỳ văn bản lỗi nào thành chuỗi rỗng
- nếu có key và vùng, bắt đầu một quy trình để:
  - gọi API để lấy dữ liệu sử dụng carbon
  - ẩn khu vực kết quả
  - ẩn biểu mẫu
  - hiển thị nút đặt lại

Trước khi tiếp tục, sẽ hữu ích khi tìm hiểu về một khái niệm rất quan trọng có sẵn trong trình duyệt: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage là một cách hữu ích để lưu trữ chuỗi trong trình duyệt dưới dạng cặp `key-value`. Loại lưu trữ web này có thể được thao tác bằng JavaScript để quản lý dữ liệu trong trình duyệt. LocalStorage không hết hạn, trong khi SessionStorage, một loại lưu trữ web khác, sẽ bị xóa khi trình duyệt đóng. Các loại lưu trữ khác nhau có ưu và nhược điểm riêng.

> Lưu ý - tiện ích mở rộng trình duyệt của bạn có bộ nhớ cục bộ riêng; cửa sổ trình duyệt chính là một phiên bản khác và hoạt động riêng biệt.

Bạn đặt APIKey của mình để có giá trị chuỗi, ví dụ, và bạn có thể thấy rằng nó được đặt trên Edge bằng cách "kiểm tra" một trang web (bạn có thể nhấp chuột phải vào trình duyệt để kiểm tra) và đi đến tab Applications để xem bộ nhớ.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.vi.png)

✅ Hãy nghĩ về các tình huống mà bạn KHÔNG muốn lưu trữ một số dữ liệu trong LocalStorage. Nói chung, việc đặt API Keys trong LocalStorage là một ý tưởng tồi! Bạn có thể thấy tại sao không? Trong trường hợp của chúng ta, vì ứng dụng chỉ để học tập và sẽ không được triển khai lên cửa hàng ứng dụng, chúng ta sẽ sử dụng phương pháp này.

Lưu ý rằng bạn sử dụng Web API để thao tác LocalStorage, bằng cách sử dụng `getItem()`, `setItem()`, hoặc `removeItem()`. Nó được hỗ trợ rộng rãi trên các trình duyệt.

Trước khi xây dựng hàm `displayCarbonUsage()` được gọi trong `init()`, hãy xây dựng chức năng để xử lý việc gửi biểu mẫu ban đầu.

### Xử lý việc gửi biểu mẫu

Tạo một hàm gọi là `handleSubmit` nhận một đối số sự kiện `(e)`. Dừng sự kiện lan truyền (trong trường hợp này, chúng ta muốn dừng trình duyệt làm mới) và gọi một hàm mới, `setUpUser`, truyền vào các đối số `apiKey.value` và `region.value`. Bằng cách này, bạn sử dụng hai giá trị được đưa vào thông qua biểu mẫu ban đầu khi các trường phù hợp được điền.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Làm mới trí nhớ của bạn - HTML bạn đã thiết lập trong bài học trước có hai trường nhập liệu mà `values` của chúng được lấy thông qua `const` bạn đã thiết lập ở đầu tệp, và cả hai đều `required` nên trình duyệt ngăn người dùng nhập giá trị null.

### Thiết lập người dùng

Tiếp tục với hàm `setUpUser`, đây là nơi bạn thiết lập các giá trị bộ nhớ cục bộ cho apiKey và regionName. Thêm một hàm mới:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Hàm này đặt một thông báo loading để hiển thị trong khi API được gọi. Đến thời điểm này, bạn đã đến bước tạo hàm quan trọng nhất của tiện ích mở rộng trình duyệt này!

### Hiển thị Sử dụng Carbon

Cuối cùng, đã đến lúc truy vấn API!

Trước khi đi xa hơn, chúng ta nên thảo luận về API. API, hay [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), là một yếu tố quan trọng trong bộ công cụ của nhà phát triển web. Chúng cung cấp cách tiêu chuẩn để các chương trình tương tác và giao diện với nhau. Ví dụ, nếu bạn đang xây dựng một trang web cần truy vấn cơ sở dữ liệu, ai đó có thể đã tạo một API để bạn sử dụng. Mặc dù có nhiều loại API, một trong những loại phổ biến nhất là [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Thuật ngữ 'REST' là viết tắt của 'Representational State Transfer' và sử dụng các URL được cấu hình khác nhau để lấy dữ liệu. Hãy nghiên cứu một chút về các loại API khác nhau có sẵn cho nhà phát triển. Định dạng nào hấp dẫn bạn?

Có những điều quan trọng cần lưu ý về hàm này. Đầu tiên, lưu ý từ khóa [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Viết các hàm của bạn để chúng chạy không đồng bộ có nghĩa là chúng chờ một hành động, chẳng hạn như dữ liệu được trả về, hoàn thành trước khi tiếp tục.

Dưới đây là một video ngắn về `async`:

[![Async và Await để quản lý promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async và Await để quản lý promises")

> 🎥 Nhấp vào hình ảnh trên để xem video về async/await.

Tạo một hàm mới để truy vấn API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Đây là một hàm lớn. Điều gì đang diễn ra ở đây?

- theo các thực hành tốt nhất, bạn sử dụng từ khóa `async` để làm cho hàm này hoạt động không đồng bộ. Hàm chứa một khối `try/catch` vì nó sẽ trả về một promise khi API trả về dữ liệu. Vì bạn không kiểm soát được tốc độ API sẽ phản hồi (nó có thể không phản hồi!), bạn cần xử lý sự không chắc chắn này bằng cách gọi nó không đồng bộ.
- bạn đang truy vấn API co2signal để lấy dữ liệu vùng của bạn, sử dụng API Key của bạn. Để sử dụng key đó, bạn phải sử dụng một loại xác thực trong các tham số header.
- khi API phản hồi, bạn gán các phần tử khác nhau của dữ liệu phản hồi vào các phần của màn hình mà bạn đã thiết lập để hiển thị dữ liệu này.
- nếu có lỗi, hoặc nếu không có kết quả, bạn hiển thị thông báo lỗi.

✅ Sử dụng các mẫu lập trình không đồng bộ là một công cụ rất hữu ích khác trong bộ công cụ của bạn. Đọc [về các cách khác nhau](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) bạn có thể cấu hình loại mã này.

Chúc mừng! Nếu bạn xây dựng tiện ích mở rộng của mình (`npm run build`) và làm mới nó trong bảng tiện ích mở rộng, bạn đã có một tiện ích mở rộng hoạt động! Điều duy nhất chưa hoạt động là biểu tượng, và bạn sẽ sửa nó trong bài học tiếp theo.

---

## 🚀 Thử thách

Chúng ta đã thảo luận về một số loại API trong các bài học này. Chọn một API web và nghiên cứu sâu về những gì nó cung cấp. Ví dụ, hãy xem các API có sẵn trong trình duyệt như [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Theo bạn, điều gì làm nên một API tuyệt vời?

## Câu hỏi sau bài học

[Câu hỏi sau bài học](https://ff-quizzes.netlify.app/web/quiz/26)

## Ôn tập & Tự học

Bạn đã học về LocalStorage và API trong bài học này, cả hai đều rất hữu ích cho nhà phát triển web chuyên nghiệp. Bạn có thể nghĩ về cách hai điều này hoạt động cùng nhau không? Hãy nghĩ về cách bạn sẽ thiết kế một trang web lưu trữ các mục để được sử dụng bởi một API.

## Bài tập

[Adopt an API](assignment.md)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc sự không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn tham khảo chính thức. Đối với các thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp từ con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.