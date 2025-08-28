<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T23:03:43+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "vi"
}
-->
# Ứng dụng Quiz

Các bài quiz này là bài kiểm tra trước và sau bài giảng trong chương trình học khoa học dữ liệu tại https://aka.ms/webdev-beginners

## Thêm bộ quiz đã dịch

Thêm bản dịch quiz bằng cách tạo cấu trúc quiz tương ứng trong thư mục `assets/translations`. Các bài quiz gốc nằm trong `assets/translations/en`. Các bài quiz được chia thành nhiều nhóm. Hãy đảm bảo căn chỉnh số thứ tự với phần quiz phù hợp. Tổng cộng có 40 bài quiz trong chương trình này, bắt đầu từ số 0.

  
<details>
<summary>Đây là cấu trúc của một tệp dịch:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Sau khi chỉnh sửa các bản dịch, chỉnh sửa tệp index.js trong thư mục dịch để nhập tất cả các tệp theo quy ước trong `en`.

Chỉnh sửa tệp `index.js` trong `assets/translations` để nhập các tệp đã dịch mới.

Ví dụ, nếu JSON dịch của bạn nằm trong `ex.json`, hãy đặt 'ex' làm khóa ngôn ngữ, sau đó nhập nó như dưới đây:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Chạy ứng dụng Quiz trên máy cục bộ

### Yêu cầu

- Một tài khoản GitHub
- [Node.js và Git](https://nodejs.org/)

### Cài đặt & Thiết lập

1. Tạo một repository từ [template này](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone repository mới của bạn, và điều hướng đến thư mục quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Cài đặt các gói npm & phụ thuộc

   ```bash
   npm install
   ```

### Xây dựng ứng dụng

1. Để xây dựng giải pháp, chạy:

   ```bash
   npm run build
   ```

### Khởi động ứng dụng

1. Để chạy giải pháp, chạy:

    ```bash
    npm run dev
    ```

### [Tùy chọn] Kiểm tra mã nguồn

1. Để đảm bảo mã nguồn được kiểm tra, chạy:

    ```bash
    npm run lint
    ```

## Triển khai ứng dụng Quiz lên Azure 

### Yêu cầu
- Một tài khoản Azure. Đăng ký miễn phí [tại đây](https://aka.ms/azure-free).

    _Ước tính chi phí triển khai ứng dụng quiz này: MIỄN PHÍ_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Sau khi bạn đăng nhập vào Azure qua liên kết trên, chọn một subscription và nhóm tài nguyên, sau đó:

- Chi tiết ứng dụng web tĩnh: Cung cấp tên và chọn gói hosting
- Đăng nhập GitHub: Đặt nguồn triển khai của bạn là GitHub, sau đó đăng nhập và điền vào các trường yêu cầu trên biểu mẫu:
    - *Organization* – Chọn tổ chức của bạn.
    - *Repository* – Chọn repository của chương trình học Web Dev for Beginners. 
    - *Branch* - Chọn nhánh (main) 
- Cài đặt xây dựng: Azure Static Web Apps sử dụng thuật toán phát hiện để xác định framework được sử dụng trong ứng dụng của bạn. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Triển khai: Nhấp vào 'Review + Create', sau đó 'Create'

    Sau khi triển khai, một tệp workflow sẽ được tạo trong thư mục *.github* của repo của bạn. Tệp workflow này chứa hướng dẫn về các sự kiện sẽ kích hoạt việc triển khai lại ứng dụng lên Azure, ví dụ, _một **push** trên nhánh **main**_ v.v.

    <details>
    <summary>Ví dụ về tệp Workflow</summary>
    Đây là ví dụ về tệp workflow của GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Sau triển khai: Sau khi triển khai hoàn tất, nhấp vào 'Go to Deployment' sau đó 'View app in browser'.

Khi GitHub Action (workflow) của bạn được thực thi thành công, làm mới trang trực tiếp để xem ứng dụng của bạn.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.